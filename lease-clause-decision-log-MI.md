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

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for MI. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any MI row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach MI's law; to be confirmed at MI's end-of-run consistency pass):
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-ks` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.

## MI topic gaps: end-of-run consistency pass (2026-11-13)

Pass run 2026-11-13 in MI's chat, on the files staged 2026-11-12 18:17 (`lease-clauses.csv` 17,240 rows, 17,128 active, 164 active MI; 218 missing topics). This log is appended to `lease-clause-decision-log-MI.md` at sync. Pointers in rows read "gaps log §N" or "gaps log sN".

Michigan end-of-run consistency pass (GAPS-PROMPT.md staged 2026-11-12 18:17; SOP 2.08). Started 2026-11-13 in the Michigan chat. Scope: the 218 topics in `missing-topics-MI.md` and the Michigan items 1-13; existing rows are not edited (findings in §6).

**Step A:** `lease-clauses.csv` decompressed from `lease-clauses.csv.xz`: 66,114,766 bytes, SHA-256 6ecacb1e7d8335adb8f393a02caeeec03c791e28194f3ecec36ac8e706ebfbec (matches); 17,240 rows, 17,128 active; 164 active rows carry MI (`states` is ";"-separated); `missing-topics-MI.md` lists 218 topics. Both corpus parts match SHA256SUMS; `python3 -I verify_mi.py` after unpacking both: "546 files, 0 mismatches". Old CSV and log copies in `/mnt/user-data/outputs/` deleted before work began.

**Progress:** 218 of 218 topics answered; batches delivered: B1 (27 topics), B2 (28 topics), B3 (25 topics), B4 (23 topics), B5 (18 topics), B6 (27 topics), B7 (22 topics), B8 (18 topics), B9 (30 topics).


### §1 Sources, channel and currency

- **Statutes, Constitution, session laws:** the attached Legislative Service Bureau corpus `corpus-MI-20261112` (241 chapter objects from legislature.mi.gov, parsed to 43,550 statute entries plus 281 Constitution entries; every chapter page footer reads "Michigan Compiled Laws Complete Through PA 114 of 2026 and includes Initiated Law 1 of 2026", rendered November 12, 2026). The pass's loader (`tools/mi.py`) parses `code/STATUTES.TXT` into 43,550 units; the set of printed section numbers equals `code/SECTIONS.tsv` (43,550 rows) and the count of raw `### §` openers (43,550), with no duplicate; Constitution 281 units; 2026 Mich. Pub. Acts 32, 102 and 103 as enrolled (bill line numbers stripped) and the 2025-2026 act-list descriptions (187 rows) are searched as session law; the corpus's two administrative rule sets (Mich. Admin. Code R 460.101 to R 460.169 and R 408.30500 to R 408.30547g) as 158 rule units. History lines are read for every section relied on; any "Am. 2026, Initiated Law 1, Eff. (pending)" line is flagged where met.
- **Constitution currency:** latest history line 2022; the LSB booklet says "Revised June 2025"; topics turning on the Constitution say so.
- **Court rules:** Michigan Court Rules of 1985, the Michigan Supreme Court's compiled PDF "Updated September 2, 2026" (saved in the 2026-10-01 MI pass, decoded and verified by SHA-256 against the saved record), split into 557 rules. Later amendments were not checked; rows citing a court rule say so. SCAO forms not held.
- **Federal:** uscode.house.gov section pages read in the built-in browser 2026-11-13 ("current through Public Law 119-142 (November 10, 2026)"; 29 sections, saved via a browser download and matched by SHA-256 a31c2e7b…); the PTFA note is not printed by that site's temporary format and is taken from the govinfo copy saved 2026-10-01. eCFR sections read through ecfr.gov's renderer in the built-in browser 2026-11-13 (titles 16, 24, 40 and 47 up to date as of 2026-11-12; 28 sections; saved file `mi-gaps-cfr.json`, fetch time 2026-11-14T01:23:11.453Z, SHA-256 fe20e4a2fa2feb57…; a second save made moments later reported a different hash and was not used). Federal Register (63 Fed. Reg. 70256; 91 Fed. Reg. 17291) and the HUD FHEO memorandum of May 22, 2026 from the 2026-10-01 pass.
- **Federal, second round (fetch queue, 2026-11-14 UTC):** 9 U.S.C. § 2, 15 U.S.C. § 1692f and 42 U.S.C. § 12181 from uscode.house.gov (same edition; saved as mi-gaps-usc2.json, SHA-256 31f752e9…3a88b98bb6); 28 C.F.R. § 36.104, 24 C.F.R. § 982.405, 24 C.F.R. § 982.551 and 40 C.F.R. § 61.145 from the eCFR renderer (titles 24, 28 and 40 up to date as of 2026-11-12; saved as mi-gaps-cfr2.json, SHA-256 07fd7f02…11ef5d4d2e). 25 U.S.C. § 415 (B9) was read the same way (saved as mi-gaps-usc3.json, SHA-256 442531a7…c701ad3b). Every queued section was read; the fetch queue is empty. The rows that had said "not read (queued)" (`edu-binding-arbitration-mi`, `edu-collection-fee-mi`, `edu-service-animal-denial-penalty-mi`, `edu-no-subsidized-inspection-refusal-rule-mi`, `edu-asbestos-hazards-mi`, `edu-no-communal-land-lease-approval-mi`) now quote the read text. Held eCFR files whose title line had read "Editorial Note on Part …" were relabelled with the section heading; the text is unchanged.
- **Cases:** opinions saved in the 2026-10-01 MI closeout round (CourtListener and courts.michigan.gov), reused verbatim: Curran v Williams; UAW-GM Human Resource Ctr v KSL Recreation Corp; Wilkinson v Lanterman; Park Forest of Blackman v Smith; Woodland v Michigan Citizens Lobby; M&D, Inc v McConkey; Benton v Dart Props, Inc; Hadden v McDermitt Apts, LLC; Laurel Woods Apts v Roumayah; Allison v AEW Capital Mgt, LLP. No new case search was run in this pass.
- **Not held / not read:** other administrative rules, 2025 enacted texts, 2026 acts other than 32, 102 and 103 (the act lists were searched), Initiated Law 1 of 2026 as adopted, SCAO forms, local ordinances (SOP rule 3).
- **Channel:** the cloud workspace has no route to legislature.mi.gov, courts.michigan.gov, uscode.house.gov or ecfr.gov; federal pages were read in Taylor's built-in browser and saved through Downloads. No bot block or CAPTCHA met.

### §2 Topics answered

One line per row or tag: topic, row id, Present / Present (partly) / Absent / tagged, first citation.


#### B1

- `habitability-waiver` → `edu-habitability-waiver-mi` (education, CONSTRAINED/PROHIBITED): Present; Mich. Comp. Laws § 554.139(1)
- `habitability-materiality` → `edu-habitability-materiality-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 554.139(1)(a)
- `habitability-presumption` → `edu-no-habitability-presumption-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.541
- `habitability-statement` → `edu-no-habitability-statement-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.139
- `part5-nonwaivable` → `edu-nonwaivable-rights-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 554.639
- `showing-notice-waiver` → `edu-showing-notice-waiver-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 125.526(11)
- `showing-notice-waiver` → `showing-notice-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 125.526(11)
- `security-deposit-nonwaiver` → `edu-security-deposit-nonwaiver-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 554.606
- `jury-waiver` → `edu-jury-waiver-mi` (education, PROHIBITED): Present; Const 1963, art. I, § 14
- `unconscionability` → `edu-unconscionability-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 445.903(1)
- `eviction-penalty-clause-ban` → `edu-eviction-charges-mi` (education, CONSTRAINED/PROHIBITED): Present (partly); Mich. Comp. Laws § 554.633(1)(g)
- `knowing-use-penalty` → `edu-knowing-use-penalty-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 554.636(3)(b)
- `notice-to-quit-waiver` → `edu-notice-to-quit-waiver-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 554.134(1)
- `confession-of-judgment` → `edu-confession-of-judgment-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 554.633(1)(d)
- `homestead-waiver` → `edu-homestead-waiver-mi` (education, RECOMMENDED): Present; Const 1963, art. X, § 3
- `casualty-and-mitigation-waivable` → `edu-casualty-mitigation-waiver-mi` (education, CONSTRAINED/PROHIBITED): Present; Mich. Comp. Laws § 554.201
- `liquidated-damages` → `edu-liquidated-damages-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 125.2328c
- `landlord-breach-remedy` → `edu-landlord-breach-remedy-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 600.5741
- `promises-to-repair` → `edu-promises-to-repair-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 445.903(1)(q)
- `promises-to-repair` → `promised-repairs-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 445.903(1)(q)
- `binding-arbitration` → `edu-binding-arbitration-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 691.1686(1)
- `lease-content-requirements` → `edu-lease-content-requirements-mi` (education, REQUIRED/CONDITIONAL): Present; Mich. Comp. Laws § 554.634(1)
- `lease-notice-initial-requirement` → `edu-no-lease-initials-requirement-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 445.992(2)
- `plain-language` → `edu-no-plain-language-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 552.519
- `plain-language-consumer-statement` → `edu-no-consumer-statement-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.608(4)
- `written-notice-required` → `edu-written-notices-mi` (education, REQUIRED): Present; Mich. Comp. Laws § 554.134(2)
- `lease-term-limitation` → `edu-lease-term-limits-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 566.108
- `optional-lease-terms` → `edu-optional-lease-terms-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 554.139(2)
- `required-disclosures` → `edu-required-disclosures-mi` (education, REQUIRED/CONDITIONAL): Present; Mich. Comp. Laws § 554.634(1)

#### B2

- `deposit-cost-schedule` → `edu-deposit-cost-schedule-mi` (education, CONSTRAINED): Present (partly); Mich. Comp. Laws § 554.607
- `deposit-installments` → `edu-no-deposit-installments-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.602
- `deposit-surrender-notice` → `edu-deposit-surrender-notice-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 554.603
- `security-deposit-standards` → `edu-no-security-deposit-standards-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.602
- `expedited-deposit-disposition` → `edu-no-expedited-deposit-disposition-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.609(1)
- `fee-in-lieu-of-deposit` → `edu-no-fee-in-lieu-of-deposit-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.601(d)
- `holding-deposit` → `edu-no-holding-deposit-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.601(d)
- `nonrefundable-deposit-notice` → `edu-nonrefundable-deposit-notice-mi` (education, CONSTRAINED): Present (partly); Mich. Comp. Laws § 554.601(d)
- `nonrefundable-deposit-separate-notice` → `edu-no-nonrefundable-separate-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.603
- `fee-unprovided-service` → `edu-no-fee-unprovided-service-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 445.902(1)(g)
- `late-fee-limit` → `edu-no-late-fee-limit-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.633(1)(l)
- `statutory-caps` → `edu-statutory-caps-mi` (education, CONSTRAINED): Present; Mich. Comp. Laws § 123.411(2)
- `required-fees` → `edu-required-fees-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.633(1)(l)(i)
- `required-fees` → `fees-and-charges-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 554.633(1)(g)
- `governmental-fines` → `edu-governmental-fines-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.139(1)(b)
- `governmental-fines` → tag MI on `tenant-caused-fines-as`: tagged; Mich. Comp. Laws § 554.139(1)(b)
- `government-fee-reimbursement` → `edu-government-fee-reimbursement-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 125.526(16)
- `alarm-tampering-fee` → `edu-no-alarm-tampering-fee-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 125.482a(1)
- `alarm-tampering-fee` → `detector-care-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.139(1)(b)
- `carpet-cleaning` → `edu-no-carpet-cleaning-rule-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.607(a)
- `collection-fee` → `edu-collection-fee-mi` (education, CONSTRAINED): Present (partly); Mich. Comp. Laws § 554.633(1)(g)
- `notice-service-fee` → `edu-no-notice-service-fee-mi` (education, CONSTRAINED/PROHIBITED): Absent; Mich. Comp. Laws § 554.633(1)(g)
- `subsidy-late-fee` → `edu-subsidy-late-fee-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.601c(1)(b)
- `tax-escalation` → `edu-tax-escalation-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 554.633(1)(l)(iii)
- `rent-receipt-anti-waiver` → `edu-no-rent-receipt-anti-waiver-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.139(1)
- `lockout-for-rent-delinquency` → `edu-lockout-for-rent-delinquency-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 600.2918(2)(c)
- `utility-deposit-return` → `edu-utility-deposit-return-mi` (education, CONSTRAINED): Present; Mich. Comp. Laws § 554.601(d)
- `rent-concession` → `edu-rent-concession-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.601(d)
- `rent-concession` → `rent-concession-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.601(d)
- `rent-installments` → `rent-installments-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 554.134(1)
- `rent-tax` → `edu-rent-tax-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 205.93a(1)(b)
- `rent-reporting` → `edu-no-rent-reporting-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.853(a)(iv)(A)

#### B3

- `dv-deposit-timing` → `edu-dv-deposit-timing-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.601b(2)
- `dv-eviction-protection` → `edu-dv-eviction-protection-mi` (education, CONDITIONAL/PROHIBITED): Present (partly); Mich. Comp. Laws § 600.5714(1)(e)
- `dv-lockchange` → `edu-no-dv-lockchange-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.2918
- `dv-protection-order-chapter-moved` → `edu-dv-protection-order-chapter-moved-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 554.601b(3)(a)
- `dv-qualifying-documents` → `edu-dv-qualifying-documents-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 554.601b(3)
- `disability-accommodation` → `edu-disability-accommodation-mi` (education, PROHIBITED/CONSTRAINED): Present; Mich. Comp. Laws § 37.1506a(1)(a)
- `disability-accommodation` → tag MI on `disability-modification-restoration-mn`: tagged; Mich. Comp. Laws § 37.1506a(1)(a)
- `service-animal-denial-penalty` → `edu-service-animal-denial-penalty-mi` (education, PROHIBITED): Present (partly); Mich. Comp. Laws § 750.502c(1)
- `protected-class-inquiry-ban` → `edu-protected-class-inquiry-ban-mi` (education, PROHIBITED): Present; Mich. Comp. Laws § 37.2502(1)(f)
- `children-occupancy` → `edu-children-occupancy-mi` (education, PROHIBITED/CONDITIONAL): Present; Mich. Comp. Laws § 37.2103(e)
- `portfolio-thresholds` → `edu-portfolio-thresholds-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 554.601c(2)
- `sex-offender-disclosure` → `edu-no-sex-offender-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 28.728(2)
- `sex-offender-disclosure` → `sex-offender-registry-notice-mi` (clause, RECOMMENDED): Absent; Mich. Comp. Laws § 28.728(2)
- `tenant-confidential-information` → `edu-tenant-confidential-information-mi` (education, CONDITIONAL/PROHIBITED): Present (partly); Mich. Comp. Laws § 554.601b(4)
- `tenant-records` → `edu-tenant-records-mi` (education, RECOMMENDED/CONDITIONAL): Absent; Mich. Comp. Laws § 339.2512d
- `employee-screening` → `edu-no-employee-screening-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 445.903
- `senior-housing-work-card` → `edu-no-senior-housing-work-card-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 38.19
- `veterans-incentive` → `edu-no-veterans-incentive-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.601
- `religious-cultural-display` → `edu-no-religious-display-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 559.156a
- `political-access` → `edu-no-political-access-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 168.53
- `tenant-right-to-organize` → `edu-tenant-right-to-organize-mi` (education, PROHIBITED): Present (partly); Mich. Comp. Laws § 600.5720(1)(c)
- `guest-rights` → `edu-no-guest-rights-statute-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.633
- `law-enforcement-cooperation` → `edu-law-enforcement-cooperation-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 52.203(1)
- `drug-free-housing-addendum` → `edu-drug-free-housing-addendum-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 600.5714(1)(b)
- `translation-duty` → `edu-no-translation-duty-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.633(1)(m)
- `student-housing` → `edu-no-student-housing-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 389.121
- `purpose-limitation` → `edu-purpose-limitation-mi` (education, CONDITIONAL/PROHIBITED): Present; Mich. Comp. Laws § 752.461

#### B4

- `landlord-registration` → `edu-landlord-registration-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 125.525(1)
- `lease-registration` → `edu-lease-recording-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 565.35
- `good-cause-notice` → `edu-no-good-cause-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.134(1)
- `rights-responsibilities-guide` → `edu-no-rights-guide-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.634(2)
- `tenant-rights-statement` → `edu-tenant-rights-statement-mi` (education, REQUIRED): Present (partly); Mich. Comp. Laws § 554.634(2)
- `single-family-zone-lease-limit` → `edu-single-family-rental-limits-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 125.857(1)
- `accessory-dwelling-unit` → tag MI on `accessory-dwelling-unit-term-co`: tagged; Mich. Comp. Laws § 554.633(1)(a)
- `accessory-dwelling-unit` → `edu-no-adu-statute-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.1513
- `health-district-rental-rules` → `edu-health-department-rules-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 554.139(1)(b)
- `lead-safe-certification` → `edu-lead-safe-housing-registry-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 333.5474b(2)
- `lead-state-notices` → `edu-no-lead-state-notices-mi` (education, RECOMMENDED): Absent; FEDERAL: 40 C.F.R. § 745.113
- `substandard-property-receivership` → `edu-substandard-property-receivership-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 125.535(1)
- `inspection-condemnation-disclosure` → `edu-no-code-order-disclosure-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 125.529(1)
- `inspection-notice-penalty` → `edu-inspection-notice-penalty-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 554.608(1)
- `condemned-premises-rent-bar` → `edu-condemned-premises-rent-bar-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 125.530(3)
- `sanitary-code-variance` → `edu-no-code-variance-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.408
- `certificate-of-occupancy-disclosure` → `edu-certificate-of-occupancy-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 125.1513
- `frozen-standard-incorporation` → `edu-code-editions-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 24.232(4)
- `family-child-care` → `family-child-care-consent-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 722.111
- `family-child-care` → `edu-family-child-care-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 722.111
- `home-business` → `home-business-permission-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 125.3204
- `home-business` → `edu-home-business-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 125.3204
- `sfr-occupancy-disclosure` → `edu-no-sfr-occupancy-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.634(2)
- `term-change-notice` → `edu-term-change-notice-mi` (education, CONSTRAINED): Present; Mich. Comp. Laws § 554.633(1)
- `term-change-notice` → `legally-required-changes-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 554.633(1)(l)(i)
- `association-obligations-disclosure` → `association-documents-delivery-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 559.212(3)
- `association-obligations-disclosure` → `edu-association-obligations-disclosure-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 559.212(3)
- `owner-move-in-reservation` → `edu-owner-move-in-reservation-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 600.5714(1)
- `owner-move-in-reservation` → tag MI on `owner-occupancy-termination-ar`: tagged; Mich. Comp. Laws § 600.5714(1)(c)(i)

#### B5

- `heating` → `edu-heating-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 554.139(1)(b)
- `heating` → `heat-freeze-protection-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.139(1)(b)
- `stove-refrigerator` → `edu-no-stove-refrigerator-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.4207
- `appliances-excluded` → `appliances-excluded-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 440.2909
- `furnishings-included` → `furnishings-included-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.607(a)
- `maintenance-duty-shift` → `edu-maintenance-duty-shift-mi` (education, CONSTRAINED): Present; Mich. Comp. Laws § 554.139(1)
- `repair-notice` → `edu-repair-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.963
- `repair-notice` → `repair-requests-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.633(1)(a)
- `repair-cost-termination` → `edu-no-repair-cost-termination-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.609(1)
- `repair-escrow-exemption-notice` → `edu-no-repair-escrow-exemption-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.530
- `designated-repairer` → `edu-no-designated-repairer-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.482
- `designated-repairer` → `designated-repairer-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 125.534(5)
- `rent-into-court-counterclaim` → `edu-rent-into-court-counterclaim-mi` (education, RECOMMENDED): Present; MCR 4.201
- `shutdown-rent-protection` → `edu-no-shutdown-rent-protection-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 421.29
- `subsidy-habitability-proration` → `edu-subsidy-habitability-proration-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 460.9q
- `subsidized-inspection-refusal` → `edu-no-subsidized-inspection-refusal-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.526
- `alt-housing` → `edu-no-alt-housing-duty-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 213.55
- `other-landlord-facilities` → `edu-other-landlord-facilities-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 565.957
- `tenant-statutory-duties` → `edu-tenant-statutory-duties-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 125.401(2)
- `tenant-statutory-duties` → `tenant-garbage-receptacles-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 125.478
- `prohibited-acts-renter` → `prohibited-acts-renter-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 554.139(1)(b)
- `confirmed-absences-habitability` → `edu-confirmed-absences-habitability-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.139(1)

#### B6

- `fire-code-standard` → `edu-fire-code-standard-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 29.3e(1)
- `fire-code-standard` → `fire-code-compliance-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 125.487
- `fire-sprinkler-duty` → `edu-fire-sprinkler-duty-mi` (education, CONDITIONAL): Absent; Mich. Admin. Code R 408.30500
- `sprinkler-disclosure` → `edu-no-sprinkler-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 28.455
- `water-heater-temperature` → `edu-no-water-heater-temperature-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.472
- `window-guards` → `edu-no-window-guard-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.1422e
- `steam-radiator-covers` → `edu-no-steam-radiator-cover-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 257.1302a
- `pool-safety` → `edu-pool-safety-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 333.12521(c)
- `pool-safety` → `pool-and-spa-use-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 333.12527
- `security-devices` → `edu-no-security-devices-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.2918(2)(c)
- `smart-access` → `edu-no-smart-access-law-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 436.1552
- `smart-access` → `smart-access-system-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 600.2918(2)(c)
- `key-control-policy` → `edu-no-key-control-policy-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 750.414a
- `key-control-policy` → tag MI on `lock-change-ak`: tagged; Mich. Comp. Laws § 600.2918(2)(c)
- `common-area-lighting` → `edu-common-area-lighting-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 125.465
- `common-area-lighting` → tag MI on `common-area-lighting-ks`: tagged; Mich. Comp. Laws § 125.465
- `balcony-inspection` → `edu-no-balcony-inspection-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 2.91
- `asbestos-hazards` → `edu-asbestos-hazards-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 338.3207(1)
- `bed-bug-cooperation` → `pest-cooperation-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 125.474
- `pest-control-notice` → `edu-pest-control-notice-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 600.2916(2)
- `waterbed` → `waterbed-mi` (clause, CONDITIONAL): Absent; Mich. Comp. Laws § 554.139(1)(b)
- `portable-cooling-device` → `edu-no-portable-cooling-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 445.832
- `portable-cooling-device` → `portable-cooling-device-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.139(1)(b)
- `private-well-testing` → `edu-private-well-testing-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 325.1002(p)
- `hazardous-contamination-disclosure` → `edu-hazardous-contamination-disclosure-mi` (education, CONDITIONAL): Present; Mich. Comp. Laws § 324.20116(1)
- `hazardous-contamination-disclosure` → `contamination-notice-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 324.20116(1)
- `defective-drywall-disclosure` → `edu-no-drywall-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 324.11502
- `prop65-rental-warning` → `edu-no-chemical-warning-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 750.42a
- `military-air-zone-disclosure` → `edu-no-military-zone-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 32.780
- `ordnance-demolition-meter-disclosures` → `edu-no-ordnance-demolition-meter-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 32.726
- `shoreline-access-disclosure` → `edu-no-shoreline-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 324.32301
- `energy-data-release` → `edu-energy-data-release-mi` (education, RECOMMENDED): Absent; Mich. Admin. Code R 460.101
- `energy-data-release` → tag MI on `energy-data-release-wy`: tagged; Mich. Admin. Code R 460.153
- `recycling-notice` → `edu-no-recycling-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 324.11502(6)(a)
- `smoke-drift-waiver` → `edu-smoke-drift-mi` (education, PROHIBITED/CONDITIONAL): Absent; Mich. Comp. Laws § 333.12601(1)(o)

#### B7

- `cure-and-eviction-grounds` → `edu-cure-and-eviction-grounds-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 600.5714(1)(a)
- `landlord-remedies-termination` → `edu-landlord-remedies-termination-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 600.5739(1)
- `forfeiture-redemption` → `edu-forfeiture-redemption-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 600.5714(1)(a)
- `redemption` → `edu-redemption-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 600.5714(1)(a)
- `possession-bond` → `edu-possession-bond-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 554.633(1)(d)
- `eviction-hardship-stay` → `edu-eviction-hardship-stay-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.5744
- `eviction-service-party` → `edu-eviction-service-party-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.5718(1)(a)
- `cold-weather-vacate-notice` → `edu-no-cold-weather-vacate-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.139(1)(b)
- `social-security-defense` → `edu-no-benefit-delay-defense-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 400.57i
- `tenant-bankruptcy` → `edu-tenant-bankruptcy-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.5451
- `minor-tenant-filing` → `edu-minor-tenant-filing-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 722.52(1)
- `entity-landlord-court-representation` → `edu-entity-landlord-court-representation-mi` (education, RECOMMENDED): Present; Const 1963, art. I, § 13
- `limitation-of-actions` → `edu-limitation-of-actions-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 600.5807(9)
- `rent-demand-bar` → `edu-rent-demand-bar-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.530(3)
- `double-letting` → `edu-no-double-letting-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.5714
- `trespass-notice` → `edu-trespass-notice-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 750.552(1)(a)
- `trespass-notice` → tag MI on `barred-person-covenant-ne`: tagged; Mich. Comp. Laws § 750.552(1)(a)
- `tenancy-at-will` → `edu-tenancy-at-will-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 554.134(1)
- `seasonal-tenancy` → `edu-seasonal-tenancy-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.632
- `extended-absence-notice` → `edu-extended-absence-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.632(b)
- `extended-absence-notice` → tag MI on `extended-absence-notice-ks`: tagged; Mich. Comp. Laws § 554.633(1)(g)
- `statutory-early-termination` → `edu-statutory-early-termination-mi` (education, RECOMMENDED): Present; Mich. Comp. Laws § 554.601a(1)
- `environmental-event-termination` → `edu-no-environmental-event-termination-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.201
- `notice-to-vacate-additional-terms` → `edu-no-notice-to-vacate-terms-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.1608

#### B8

- `electric-submetering-disclosure` → `edu-electric-submetering-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 460.10q(4)
- `meter-conservation-charge` → `edu-meter-conservation-charge-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 460.1203(2)
- `meter-conservation-charge` → `meter-project-charge-disclosure-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 460.1207(2)
- `utility-allowance-cap` → `edu-utility-allowance-cap-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 125.2328(1)(e)
- `utility-allowance-cap` → `utility-allowance-cap-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.633(1)(l)
- `utility-apportionment` → `edu-no-utility-apportionment-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 290.602(y)
- `utility-apportionment` → `utility-apportionment-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 290.609a(2)
- `utility-disclosure-attachment` → `edu-no-utility-disclosure-attachment-mi` (education, RECOMMENDED): Absent; Mich. Admin. Code R 460.107
- `utility-disconnection-notice-authorization` → `edu-utility-shutoff-notice-designee-mi` (education, RECOMMENDED): Present; Mich. Admin. Code R 460.139
- `utility-disconnection-notice-authorization` → tag MI on `utility-shutoff-notice-authorization-co`: tagged; Mich. Admin. Code R 460.139
- `utility-interruption-submeter` → `edu-utility-interruption-mi` (education, PROHIBITED): Present (partly); Mich. Comp. Laws § 600.2918(2)(f)
- `utility-shutoff-statute` → `edu-utility-shutoff-statute-mi` (education, RECOMMENDED): Present; Mich. Admin. Code R 460.139
- `utility-transfer` → `edu-utility-transfer-mi` (education, RECOMMENDED): Present (partly); Mich. Admin. Code R 460.107
- `utility-transfer` → tag MI on `utility-transfer-nj`: tagged; Mich. Admin. Code R 460.107
- `ev-charging-requirements` → `edu-ev-charging-requirements-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 460.10q(4)
- `ev-charging-requirements` → `ev-charger-installation-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 290.602(y)
- `ev-charging-end-of-tenancy` → `edu-no-ev-charging-end-of-tenancy-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 559.309(1)(g)
- `ev-charging-shared-area` → `edu-no-ev-charging-shared-area-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 559.313
- `telecom-access` → `edu-telecom-access-mi` (education, RECOMMENDED): Present (partly); FEDERAL: 47 C.F.R. § 1.4000
- `telecom-access` → tag MI on `telecom-access-mn`: tagged; FEDERAL: 47 C.F.R. § 1.4000
- `portable-solar` → `edu-no-portable-solar-right-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 559.307
- `property-tax-rent-disclosure` → `edu-property-tax-rent-credit-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 206.520(2)
- `parking-rules-notice` → `edu-parking-rules-notice-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 554.633(1)(l)
- `unbundled-parking` → `edu-no-unbundled-parking-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.633(1)(l)
- `unbundled-parking` → `unbundled-parking-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 554.633(1)(l)
- `periodic-services-entry` → `edu-periodic-services-entry-mi` (education, CONDITIONAL): Present (partly); Mich. Comp. Laws § 125.526(11)
- `periodic-services-entry` → `scheduled-services-entry-mi` (clause, CONDITIONAL): Present; Mich. Comp. Laws § 125.526(11)

#### B9

- `automatic-renewal` → `edu-no-automatic-renewal-rule-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.633(1)(l)
- `automatic-renewal` → `automatic-renewal-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 554.633(1)(l)
- `guarantor-renewal` → `edu-guarantor-renewal-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 566.132(1)(b)
- `guarantor-renewal` → `guaranty-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 445.272(1)(b)
- `foreclosure-disclosure` → `edu-no-foreclosure-disclosure-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.3208
- `foreclosure-disclosure` → tag MI on `foreclosure-disclosure-nv`: tagged; Mich. Comp. Laws § 445.903(1)(s)
- `adverse-proceeding-notice` → `edu-adverse-proceeding-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 213.55(1)
- `adverse-proceeding-notice` → `adverse-proceeding-notice-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 554.1054
- `eminent-domain` → `edu-eminent-domain-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 213.55(1)
- `eminent-domain` → `eminent-domain-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 445.903(1)(t)
- `actual-notice-method` → `edu-actual-notice-method-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 600.5718(1)(d)
- `actual-notice-method` → `agreed-notice-methods-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 450.838(1)
- `tenant-portal` → `edu-tenant-portal-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.633(1)(o)
- `tenant-portal` → `tenant-portal-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 554.633(1)(o)
- `lease-type-parity` → `edu-no-lease-type-parity-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.134(1)
- `lease-type-size` → `edu-no-lease-type-size-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.634(2)
- `emergency-contact` → `edu-no-emergency-contact-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.634(1)
- `emergency-contact` → tag MI on `emergency-contact-co`: tagged; Mich. Comp. Laws § 554.633(1)(g)
- `renters-insurance-rules` → `edu-no-renters-insurance-rule-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.633(1)(l)
- `landlord-liability-insurance` → `edu-no-landlord-liability-insurance-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.633(1)(l)
- `tenant-insurance-claims` → `edu-tenant-insurance-claims-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.633(1)(e)
- `disaster-duties` → `edu-disaster-duties-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.201
- `disaster-displaced-guests` → `edu-no-disaster-guest-rule-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 30.405(1)(i)
- `tpa-notice` → `edu-no-tenant-purchase-right-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.857(1)
- `tpa-exemption-notice` → `edu-no-tpa-exemption-notice-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 123.411(2)
- `tpa-sunset` → `edu-no-tenant-law-sunset-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 554.633
- `nonresident-owner-agent` → `edu-nonresident-owner-agent-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 554.634(1)
- `confirmed-absences-outside-title` → `edu-confirmed-absences-outside-title-mi` (education, RECOMMENDED): Present (partly); Mich. Comp. Laws § 750.553(1)
- `construction-liens` → `edu-construction-liens-mi` (education, CONSTRAINED): Present; Mich. Comp. Laws § 570.1107(1)
- `construction-liens` → `no-liens-mi` (clause, CONSTRAINED): Present; Mich. Comp. Laws § 554.633(1)(g)
- `animal-care-access` → `edu-no-animal-care-entry-right-mi` (education, CONDITIONAL): Absent; Mich. Comp. Laws § 750.50(2)(a)
- `animal-care-access` → tag MI on `animal-care-access-vi`: tagged; Mich. Comp. Laws § 125.526(11)
- `pet-eviction-fact-sheet` → `edu-no-pet-eviction-fact-sheet-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.5744(1)
- `farmland-hunting-rights` → `edu-farmland-hunting-rights-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 324.73102(2)
- `farmland-hunting-rights` → `farmland-sporting-rights-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 324.73102(2)
- `tenant-employee-housing` → `edu-tenant-employee-housing-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 600.5714(1)(c)(i)
- `informal-dispute-resolution` → `edu-informal-dispute-resolution-mi` (education, CONSTRAINED): Absent; Mich. Comp. Laws § 554.633(1)(f)
- `informal-dispute-resolution` → `informal-dispute-resolution-mi` (clause, RECOMMENDED): Present; Mich. Comp. Laws § 554.633(1)(f)
- `usufructuary-lessor` → `edu-no-usufructuary-lessor-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 565.4
- `special-district-representation` → `edu-no-special-district-statement-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.985(3)
- `communal-land-lease-approval` → `edu-no-communal-land-lease-approval-mi` (education, RECOMMENDED): Absent; Mich. Comp. Laws § 125.1554(b)
- `confirmed-absences-misc` → `edu-confirmed-absences-misc-mi` (education, RECOMMENDED): Absent; (no citation)

### §3 Batteries

Engine (`tools/bat.py`): every pattern compiled IGNORECASE and DOTALL over whitespace-collapsed unit text (heading + body); each proximity term runs A-then-B and B-then-A at a 1,200-character window plus a start-anchored section-wide AND; controls run in the same call (nonsense `\bzqxjvwk\b` must be 0, must-hit `\btenant\b` must be > 0); a heading-only screen lists units whose heading alone matched (excluded from counts, read); an inflection probe flags word forms a `\b`-anchored word misses; every battery has a positive (a real section, or SYNTH text in the statute's style tested against the pattern); a failed positive or inflection is rerun under a new id with `supersedes`. Default scope "all" = code (43,550 units) + Constitution (281) + session laws (190: three enrolled 2026 acts and 187 act-list rows) + the two corpus rule sets (158). Entries are `pattern` / scope / hits / term, generated from the battery logs (`batteries/MIG-*.jsonl`).

**MIG-B1-001** (cited), topic `habitability-presumption`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:11:14. statutory presumption of fitness or unfitness of rented premises
- summary: Battery MIG-B1-001 (pres.ab 8; pres.ba 12; pres.and 22; rebut 91 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bpresum(?:e|es|ed|ing|ption|ptions|ptive)\b)[\s\S]{0,1200}?(?:(?:habitab\w*|fitness|\bfit for\b|untenantable|\brepair\w*))` / all / 8 / pres.ab: MCL 205.52b; MCL 205.95a; MCL 257.1313b; MCL 257.1403; MCL 475.3; MCL 500.2117; MCL 691.1402a; MCL 722.27b
- `(?:(?:habitab\w*|fitness|\bfit for\b|untenantable|\brepair\w*))[\s\S]{0,1200}?(?:\bpresum(?:e|es|ed|ing|ption|ptions|ptive)\b)` / all / 12 / pres.ba: MCL 120.14; MCL 125.541; MCL 205.52b; MCL 205.95a; MCL 257.1313b; MCL 475.3; MCL 483.2a; MCL 691.1402a; MCL 691.1403; MCL 691.1406; MCL 700.3703; MCL 722.27b
- `\A(?=[\s\S]*(?:\bpresum(?:e|es|ed|ing|ption|ptions|ptive)\b))(?=[\s\S]*(?:(?:habitab\w*|fitness|\bfit for\b|untenantable|\brepair\w*)))` / all / 22 / pres.and: MCL 120.14; MCL 125.541; MCL 141.1357; MCL 205.52b; MCL 205.95a; MCL 211.27; MCL 211.78g; MCL 257.1313b; MCL 257.1403; MCL 339.2411; MCL 421.29; MCL 445.1574; MCL 475.3; MCL 483.2a; MCL 500.2117; MCL 500.2118; MCL 691.1402a; MCL 691.1403; MCL 691.1406; MCL 700.3703; MCL 722.27b; MCL 750.305a
- `\brebuttabl[ey] presum\w*` / all / 91 / rebut: MCL 24.261; MCL 125.541; MCL 125.985; MCL 125.990h; MCL 125.4515; MCL 168.476; MCL 168.552; MCL 168.961; MCL 168.961a; MCL 205.733; MCL 206.667; MCL 207.1026; MCL 207.1114; MCL 208.1309; MCL 211.9m; MCL 211.9o; MCL 211.782; MCL 211.1053; MCL 211.1073; MCL 257.11; MCL 257.627c; MCL 257.666a; MCL 257.667a; MCL 257.682; MCL 259.307; MCL 287.1003; MCL 289.823; MCL 324.8904; MCL 324.11528; MCL 324.14809; ... (61 more in the battery log) [heading-only, read: MCL 333.27961a; MCL 750.535]
- positive pres @ SYNTH: passed ("it is presumed that the premises are fit for the use intended")
- positive rebut @ MCL 24.261: passed ("rebuttable presumption")

**MIG-B1-002** (cited), topic `habitability-materiality`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:11:36. statutory materiality tier for habitability defects
- summary: Battery MIG-B1-002 (mat.ab 151; mat.ba 137; mat.and 278; matlt.ab 3; matlt.ba 3; matlt.and 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:material(?:ly)?|substantial(?:ly)?|serious(?:ly)?)\b)[\s\S]{0,1200}?(?:(?:habitab\w*|fitness|\bfit for\b|\brepair\w*|health or safety|health and safety))` / all / 151 / mat.ab: MCL 18.1248; MCL 29.5a; MCL 30.410; MCL 32.1132a; MCL 67.7; MCL 78.24c; MCL 102.1; MCL 117.35; MCL 120.110; MCL 125.532; MCL 125.541; MCL 125.2316; MCL 141.107; MCL 169.230b.added; MCL 205.51a; MCL 205.52b; MCL 205.54a; MCL 205.54t; MCL 205.56; MCL 205.92b; MCL 205.94; MCL 205.94o; MCL 205.95a; MCL 211.9c; MCL 224.19; MCL 247.651h; MCL 247.659a; MCL 257.233b; MCL 257.605; MCL 257.625k; ... (121 more in the battery log) [heading-only, read: MCL 480.17c]
- `(?:(?:habitab\w*|fitness|\bfit for\b|\brepair\w*|health or safety|health and safety))[\s\S]{0,1200}?(?:\b(?:material(?:ly)?|substantial(?:ly)?|serious(?:ly)?)\b)` / all / 137 / mat.ba: MCL 18.1241a; MCL 29.5a; MCL 32.651; MCL 38.510; MCL 38.1133; MCL 51.360; MCL 102.1; MCL 109.7; MCL 125.72; MCL 125.408; MCL 125.532; MCL 125.667; MCL 125.709; MCL 125.942; MCL 125.1561; MCL 125.2215; MCL 125.2316; MCL 205.51a; MCL 205.54a; MCL 205.54t; MCL 205.56; MCL 205.92b; MCL 205.94; MCL 205.94o; MCL 213.23; MCL 224.19; MCL 247.651i; MCL 254.317; MCL 257.233b; MCL 257.634; ... (107 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:material(?:ly)?|substantial(?:ly)?|serious(?:ly)?)\b))(?=[\s\S]*(?:(?:habitab\w*|fitness|\bfit for\b|\brepair\w*|health or safety|health and safety)))` / all / 278 / mat.and: MCL 3.751; MCL 16.735; MCL 18.361; MCL 18.1241a; MCL 18.1248; MCL 28.609; MCL 28.609b; MCL 28.609c; MCL 28.609d; MCL 29.5a; MCL 30.261; MCL 30.410; MCL 32.651; MCL 32.1132a; MCL 38.510; MCL 38.1133; MCL 41.181; MCL 51.360; MCL 67.7; MCL 78.24c; MCL 102.1; MCL 109.7; MCL 117.35; MCL 120.110; MCL 125.72; MCL 125.408; MCL 125.526; MCL 125.532; MCL 125.541; MCL 125.667; ... (248 more in the battery log) [heading-only, read: MCL 480.17c]
- `(?:\bmaterially (?:affect\w*|impair\w*)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 3 / matlt.ab: MCL 440.2803; MCL 440.2903; MCL 440.9407
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\bmaterially (?:affect\w*|impair\w*)\b)` / all / 3 / matlt.ba: MCL 440.2803; MCL 440.2903; MCL 440.9407
- `\A(?=[\s\S]*(?:\bmaterially (?:affect\w*|impair\w*)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 4 / matlt.and: MCL 440.2803; MCL 440.2903; MCL 440.9407; MCL 445.1574
- positive mat @ MCL 600.5714: passed ("willfully or negligently causes a serious and continuing health hazard")
- positive matlt @ SYNTH: passed ("a condition that materially affects the health and safety of the tenant")

**MIG-B1-003** (superseded by MIG-B1-022), topic `habitability-statement`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:11:48. required lease statement that the unit is fit
- summary: Battery MIG-B1-003 (stmt.ab 0; stmt.ba 0; stmt.and 0; fitword 5 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:leases?|rental agreements?)\b[\s\S]{0,40}\b(?:shall|must) (?:state|contain|include)\b)[\s\S]{0,1200}?(?:(?:habitab\w*|fitness|\bfit\b))` / all / 0 / stmt.ab
- `(?:(?:habitab\w*|fitness|\bfit\b))[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?)\b[\s\S]{0,40}\b(?:shall|must) (?:state|contain|include)\b)` / all / 0 / stmt.ba
- `\A(?=[\s\S]*(?:\b(?:leases?|rental agreements?)\b[\s\S]{0,40}\b(?:shall|must) (?:state|contain|include)\b))(?=[\s\S]*(?:(?:habitab\w*|fitness|\bfit\b)))` / all / 0 / stmt.and
- `\bfit for (?:the use intended|habitation|human habitation|occupancy)\b` / all / 5 / fitword: MCL 125.468; MCL 125.485; MCL 125.529; MCL 400.57i; MCL 554.139
- positive fitword @ MCL 554.139: passed ("fit for the use intended")
- positive stmt @ SYNTH: passed ("The lease shall state that the premises are fit for habitation")

**MIG-B1-004** (cited), topic `showing-notice-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:12:03. entry-notice period, showings and their waiver
- summary: Battery MIG-B1-004 (entry.ab 14; entry.ba 9; entry.and 36; perm 2; show.ab 4; show.ba 2; show.and 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:ent(?:er|ers|ered|ering|ry))\b)[\s\S]{0,1200}?(?:\b(?:\d+|twenty-four|forty-eight|one|two) (?:hours?|days?)\W{0,3}\s?(?:advance |prior |written )?notice\b)` / all / 14 / entry.ab: MCL 117.4q; MCL 168.720f; MCL 168.720g; MCL 168.764d; MCL 247.64; MCL 257.625o; MCL 280.6; MCL 338.3375; MCL 462.325; MCL 493.11; MCL 493.61; MCL 700.3610; MCL 712A.19; MCL 712B.31
- `(?:\b(?:\d+|twenty-four|forty-eight|one|two) (?:hours?|days?)\W{0,3}\s?(?:advance |prior |written )?notice\b)[\s\S]{0,1200}?(?:\b(?:ent(?:er|ers|ered|ering|ry))\b)` / all / 9 / entry.ba: MCL 168.764d; MCL 247.64; MCL 324.5509; MCL 418.863; MCL 436.1403; MCL 451.303; MCL 460.9p; MCL 479.14; MCL 479.18
- `\A(?=[\s\S]*(?:\b(?:ent(?:er|ers|ered|ering|ry))\b))(?=[\s\S]*(?:\b(?:\d+|twenty-four|forty-eight|one|two) (?:hours?|days?)\W{0,3}\s?(?:advance |prior |written )?notice\b))` / all / 36 / entry.and: MCL 42.7; MCL 117.4q; MCL 125.1608; MCL 125.2338; MCL 168.720f; MCL 168.720g; MCL 168.764d; MCL 247.64; MCL 247.661; MCL 247.668b; MCL 257.625o; MCL 280.6; MCL 324.5509; MCL 324.34201; MCL 324.81140; MCL 338.3375; MCL 390.1477; MCL 418.863; MCL 426.160; MCL 432.204; MCL 436.1305; MCL 436.1403; MCL 451.303; MCL 460.9p; MCL 462.325; MCL 479.14; MCL 479.18; MCL 493.11; MCL 493.61; MCL 500.1204c; ... (6 more in the battery log)
- `\brequest and obtain permission\b` / all / 2 / perm: MCL 125.526; MCL 287.743
- `(?:\bshow(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\bprospective (?:tenants?|purchasers?|buyers?|lessees?)\b)` / all / 4 / show.ab: MCL 125.2338; MCL 559.188; MCL 691.1662; MCL 750.411r
- `(?:\bprospective (?:tenants?|purchasers?|buyers?|lessees?)\b)[\s\S]{0,1200}?(?:\bshow(?:s|ed|ing)?\b)` / all / 2 / show.ba: MCL 257.244; MCL 750.411r
- `\A(?=[\s\S]*(?:\bshow(?:s|ed|ing)?\b))(?=[\s\S]*(?:\bprospective (?:tenants?|purchasers?|buyers?|lessees?)\b))` / all / 7 / show.and: MCL 125.2338; MCL 257.244; MCL 339.2512; MCL 451.2202a; MCL 559.188; MCL 691.1662; MCL 750.411r
- positive perm @ MCL 125.526: passed ("request and obtain permission")
- positive entry @ SYNTH: passed ("landlord may enter the dwelling unit after giving 24 hours notice")
- positive show @ SYNTH: passed ("to show the dwelling unit to prospective tenants")

**MIG-B1-005** (cited), topic `jury-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:12:12. jury waiver in leases; jury default in civil cases
- summary: Battery MIG-B1-005 (jw.ab 18; jw.ba 17; jw.and 25; tbj 30 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bjury\b)[\s\S]{0,1200}?(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)` / all / 18 / jw.ab: MCL 330.2066; MCL 393.503; MCL 554.633; MCL 600.2529; MCL 600.2916; MCL 600.2922; MCL 600.8371; MCL 600.8411; MCL 600.8412; MCL 600.8513; MCL 712A.18p; MCL 763.3; MCL 763.4; MCL 768.8; MCL 772.4; MCL 774.12; Const 1963, art. I, § 14; 2026-PA-0103
- `(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)[\s\S]{0,1200}?(?:\bjury\b)` / all / 17 / jw.ba: MCL 141.2317; MCL 393.503; MCL 500.2033; MCL 554.633; MCL 600.2529; MCL 600.2922; MCL 600.8371; MCL 600.8411; MCL 600.8412; MCL 600.8513; MCL 763.3; MCL 763.4; MCL 768.8; MCL 768.36; MCL 772.4; MCL 774.12; 2026-PA-0103
- `\A(?=[\s\S]*(?:\bjury\b))(?=[\s\S]*(?:\bwaiv(?:e|es|ed|er|ers|ing)\b))` / all / 25 / jw.and: MCL 141.2317; MCL 330.2066; MCL 393.503; MCL 432.207c; MCL 500.2033; MCL 554.633; MCL 600.2529; MCL 600.2916; MCL 600.2922; MCL 600.8371; MCL 600.8411; MCL 600.8412; MCL 600.8513; MCL 712A.18p; MCL 750.50; MCL 750.50b; MCL 763.3; MCL 763.4; MCL 768.8; MCL 768.36; MCL 769.13; MCL 772.4; MCL 774.12; Const 1963, art. I, § 14; 2026-PA-0103
- `\btrial by jury\b` / all / 30 / tbj: MCL 66.9; MCL 90.11; MCL 105.17; MCL 213.62; MCL 324.8329; MCL 330.1517; MCL 333.7511; MCL 554.633; MCL 600.309a; MCL 600.1352; MCL 600.2529; MCL 600.5738; MCL 600.6421; MCL 600.8371; MCL 600.8412; MCL 700.5304; MCL 700.5306a; MCL 700.5406; MCL 725.301; MCL 752.530; MCL 763.3; MCL 763.4; MCL 768.8; MCL 772.4; MCL 774.1b; MCL 774.2; MCL 774.12; MCL 791.234; Const 1963, art. I, § 14; 2026-PA-0103 [heading-only, read: Const 1963, art. IV, § 44]
- positive tbj @ MCL 554.633: passed ("trial by jury")
- positive jw @ MCL 554.633: passed ("Waives or alters a party's right to demand a trial by jury")

**MIG-B1-006** (cited), topic `unconscionability`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:12:21. unconscionability of lease terms
- summary: Battery MIG-B1-006 (unc 21; unclt.ab 3; unclt.ba 3; unclt.and 6 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bunconscionab(?:le|ility|ly)\b` / all / 21 / unc: MCL 256.687; MCL 256.695; MCL 257.320d; MCL 440.2302; MCL 440.2309; MCL 440.2719; MCL 440.2808; MCL 440.2953; MCL 445.53; MCL 445.903; MCL 445.903b; MCL 445.904; MCL 445.910; MCL 445.911; MCL 445.963; MCL 445.964; MCL 445.1574; MCL 451.2465; MCL 559.134; MCL 600.745; MCL 750.465
- `(?:\bunconscionab(?:le|ility|ly)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 3 / unclt.ab: MCL 440.2808; MCL 440.2953; MCL 559.134
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\bunconscionab(?:le|ility|ly)\b)` / all / 3 / unclt.ba: MCL 440.2808; MCL 440.2953; MCL 559.134
- `\A(?=[\s\S]*(?:\bunconscionab(?:le|ility|ly)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 6 / unclt.and: MCL 440.2808; MCL 440.2953; MCL 445.903; MCL 445.1574; MCL 559.134; MCL 750.465
- positive unc @ MCL 445.903: passed ("Unfair, unconscionable, or deceptive methods")
- positive unclt @ SYNTH: passed ("an unconscionable provision of a rental agreement")

**MIG-B1-007** (superseded by MIG-B1-018), topic `eviction-penalty-clause-ban`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:12:35. lease charges for eviction or collection
- summary: Battery MIG-B1-007 (evfee.ab 13; evfee.ba 11; evfee.and 19; legalcost 2 units hit when run; 1 of 2 positives passed; controls passed (nonsense 0, must-hit 147)) positive evfee@MCL 600.5741 recorded as failed
- `(?:\b(?:fees?|charges?|penalt(?:y|ies)|costs?)\b)[\s\S]{0,1200}?(?:\b(?:evict(?:s|ed|ing|ion|ions)?|summary proceedings?|recover possession)\b)` / all / 13 / evfee.ab: MCL 445.1679; MCL 487.2168; MCL 490.220; MCL 493.77; MCL 554.633; MCL 600.1986; MCL 600.5706; MCL 600.5720; MCL 600.5775; MCL 600.5779; MCL 600.8322; MCL 600.8513; 2026-PA-0103
- `(?:\b(?:evict(?:s|ed|ing|ion|ions)?|summary proceedings?|recover possession)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|penalt(?:y|ies)|costs?)\b)` / all / 11 / evfee.ba: MCL 125.918; MCL 400.57i; MCL 493.77; MCL 554.633; MCL 600.1986; MCL 600.2559; MCL 600.5706; MCL 600.5739; MCL 600.5775; MCL 600.8322; 2026-PA-0103
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|penalt(?:y|ies)|costs?)\b))(?=[\s\S]*(?:\b(?:evict(?:s|ed|ing|ion|ions)?|summary proceedings?|recover possession)\b))` / all / 19 / evfee.and: MCL 125.918; MCL 400.57i; MCL 445.1679; MCL 487.2168; MCL 490.220; MCL 493.77; MCL 500.8103; MCL 554.633; MCL 600.1986; MCL 600.2559; MCL 600.5706; MCL 600.5720; MCL 600.5739; MCL 600.5744; MCL 600.5775; MCL 600.5779; MCL 600.8322; MCL 600.8513; 2026-PA-0103
- `\blegal costs or attorney fees\b` / all / 2 / legalcost: MCL 554.633; 2026-PA-0103
- positive legalcost @ MCL 554.633: passed ("legal costs or attorney fees")
- positive evfee @ MCL 600.5741: FAILED ("The judgment may include an award of costs")

**MIG-B1-008** (superseded by MIG-B1-019), topic `knowing-use-penalty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:12:46. penalty for knowingly using a prohibited lease term
- summary: Battery MIG-B1-008 (knew 2; know.ab 2; know.ba 2; know.and 13 units hit when run; 1 of 2 positives passed; controls passed (nonsense 0, must-hit 147)) positive know@MCL 554.636 recorded as failed
- `\bactually knew\b` / all / 2 / knew: MCL 451.2412; MCL 554.636
- `(?:\b(?:know(?:s|n|ingly)?|knew|willful(?:ly)?)\b)[\s\S]{0,1200}?(?:\b(?:prohibited|void|unenforceable)\b[\s\S]{0,40}\b(?:provisions?|clauses?|terms?)\b)` / all / 2 / know.ab: MCL 436.2113; MCL 750.440
- `(?:\b(?:prohibited|void|unenforceable)\b[\s\S]{0,40}\b(?:provisions?|clauses?|terms?)\b)[\s\S]{0,1200}?(?:\b(?:know(?:s|n|ingly)?|knew|willful(?:ly)?)\b)` / all / 2 / know.ba: MCL 333.16189; MCL 750.50b
- `\A(?=[\s\S]*(?:\b(?:know(?:s|n|ingly)?|knew|willful(?:ly)?)\b))(?=[\s\S]*(?:\b(?:prohibited|void|unenforceable)\b[\s\S]{0,40}\b(?:provisions?|clauses?|terms?)\b))` / all / 13 / know.and: MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 125.1998; MCL 125.2029h; MCL 324.34201; MCL 324.99923; MCL 333.16189; MCL 388.1283; MCL 436.2113; MCL 750.50b; MCL 750.440
- positive knew @ MCL 554.636: passed ("the lessor actually knew was in violation of section 3")
- positive know @ MCL 554.636: FAILED ("which the lessor actually knew was in violation of section 3")

**MIG-B1-009** (superseded by MIG-B1-021), topic `homestead-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:12:56. waiver of homestead or execution exemptions
- summary: Battery MIG-B1-009 (hw.ab 50; hw.ba 49; hw.and 112; hs 113 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:homestead|exempt(?:ion|ions|ed)?)\b)[\s\S]{0,1200}?(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)` / all / 50 / hw.ab: MCL 3.1031; MCL 12.119; MCL 15.443; MCL 29.5d; MCL 117.4r; MCL 125.2121b; MCL 125.2664a; MCL 205.30c; MCL 206.691; MCL 207.606; MCL 211.7q; MCL 211.7cc; MCL 211.7ee; MCL 211.7nn; MCL 211.7ss; MCL 211.44; MCL 211.1123; MCL 247.661; MCL 257.801; MCL 287.839; MCL 289.3119; MCL 324.5523; MCL 324.6306; MCL 324.6307; MCL 324.6507; MCL 324.6509; MCL 324.74116; MCL 324.78119; MCL 324.80165; MCL 333.7304; ... (20 more in the battery log) [heading-only, read: MCL 333.7303; MCL 500.6302]
- `(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)[\s\S]{0,1200}?(?:\b(?:homestead|exempt(?:ion|ions|ed)?)\b)` / all / 49 / hw.ba: MCL 12.119; MCL 29.5d; MCL 125.2074; MCL 125.2121b; MCL 205.743; MCL 207.215; MCL 207.606; MCL 207.1048; MCL 211.7q; MCL 211.7cc; MCL 211.7ee; MCL 211.7nn; MCL 211.7ss; MCL 211.44; MCL 211.78g; MCL 211.1057; MCL 211.1077; MCL 211.1127; MCL 213.55; MCL 287.526; MCL 287.839; MCL 289.3119; MCL 324.6307; MCL 324.6509; MCL 324.80165; MCL 333.7304; MCL 333.20161; MCL 388.1632d; MCL 388.1701; MCL 388.1929; ... (19 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:homestead|exempt(?:ion|ions|ed)?)\b))(?=[\s\S]*(?:\bwaiv(?:e|es|ed|er|ers|ing)\b))` / all / 112 / hw.and: MCL 3.1031; MCL 3.1041; MCL 12.119; MCL 15.234; MCL 15.443; MCL 18.445; MCL 28.292; MCL 28.425b; MCL 28.425l; MCL 29.5d; MCL 117.4q; MCL 117.4r; MCL 125.1444c; MCL 125.2029h; MCL 125.2074; MCL 125.2121b; MCL 125.2652; MCL 125.2664a; MCL 205.30c; MCL 205.743; MCL 206.691; MCL 207.215; MCL 207.606; MCL 207.710; MCL 207.1048; MCL 211.7q; MCL 211.7cc; MCL 211.7ee; MCL 211.7nn; MCL 211.7ss; ... (82 more in the battery log) [heading-only, read: MCL 333.7303; MCL 500.6302]
- `\bhomestead\b` / all / 113 / hs: MCL 3.823; MCL 15.523; MCL 35.801; MCL 41.280; MCL 125.985; MCL 125.1422; MCL 125.2701; MCL 125.2702; MCL 125.2703; MCL 125.2706; MCL 125.2708; MCL 125.2709; MCL 125.2722; MCL 125.2723; MCL 125.2726; MCL 125.2727; MCL 125.2734; MCL 125.2748; MCL 125.2762; MCL 125.2763; MCL 125.2764; MCL 125.2765; MCL 125.2770; MCL 169.204; MCL 205.30a; MCL 206.508; MCL 206.510; MCL 206.512; MCL 206.512a; MCL 206.520; ... (83 more in the battery log) [heading-only, read: MCL 380.1211; MCL 455.101; MCL 600.6059]
- positive hw @ MCL 700.2205: passed ("homestead")
- positive hs @ Const 1963, art. X, § 3: passed ("A homestead in the amount of not less than $3,500")

**MIG-B1-010** (cited), topic `liquidated-damages`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:13:07. statutory rule on agreed damages for breach of a lease
- summary: Battery MIG-B1-010 (ld 20; ldlt.ab 53; ldlt.ba 31; ldlt.and 100 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bliquidated damages\b` / all / 20 / ld: MCL 18.1261; MCL 26.6; MCL 125.2328c; MCL 125.4412a; MCL 125.4412c; MCL 125.4412d; MCL 287.338a; MCL 408.419; MCL 408.939; MCL 440.2718; MCL 440.2803; MCL 445.864; MCL 445.1206; MCL 450.1307; MCL 450.2309; MCL 559.185; MCL 600.5781; MCL 600.5785; MCL 691.1303; MCL 722.1905 [heading-only, read: MCL 440.5111]
- `(?:\b(?:liquidated damages|penalt(?:y|ies))\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|tenan(?:t|ts|cy))\b)` / all / 53 / ldlt.ab: MCL 41.422; MCL 125.2007; MCL 125.2328c; MCL 125.2338; MCL 125.4412; MCL 125.4412a; MCL 125.4412c; MCL 125.4412d; MCL 169.230b.added; MCL 205.52; MCL 205.95; MCL 207.218; MCL 208.1437; MCL 211.9; MCL 211.78i; MCL 211.78k; MCL 211.1057; MCL 211.1077; MCL 213.123; MCL 257.233; MCL 257.625n; MCL 259.116; MCL 259.133; MCL 259.143; MCL 324.33934; MCL 324.61503c; MCL 324.79109; MCL 324.80124; MCL 324.82101; MCL 330.1137; ... (23 more in the battery log)
- `(?:\b(?:leases?|rental agreements?|tenan(?:t|ts|cy))\b)[\s\S]{0,1200}?(?:\b(?:liquidated damages|penalt(?:y|ies))\b)` / all / 31 / ldlt.ba: MCL 125.2007; MCL 125.2328c; MCL 125.4412; MCL 125.4412a; MCL 125.4412c; MCL 125.4412d; MCL 205.51; MCL 206.607; MCL 207.218; MCL 208.1111; MCL 211.78k; MCL 211.1057; MCL 211.1077; MCL 324.79109; MCL 324.80101; MCL 333.26427; MCL 333.27201; MCL 440.2803; MCL 445.953; MCL 445.1016; MCL 445.1081; MCL 492.23; MCL 554.601b; MCL 554.603; MCL 554.636; MCL 570.523; MCL 600.5720; MCL 600.5781; MCL 600.5785; 2026-PA-0102; ... (1 more in the battery log) [heading-only, read: MCL 125.1352; MCL 750.178]
- `\A(?=[\s\S]*(?:\b(?:liquidated damages|penalt(?:y|ies))\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|tenan(?:t|ts|cy))\b))` / all / 100 / ldlt.and: MCL 3.692; MCL 3.1012; MCL 18.1261; MCL 41.422; MCL 124.756; MCL 125.1444c; MCL 125.2007; MCL 125.2029h; MCL 125.2088c; MCL 125.2328c; MCL 125.2338; MCL 125.2652; MCL 125.4412; MCL 125.4412a; MCL 125.4412c; MCL 125.4412d; MCL 169.230b.added; MCL 205.27a; MCL 205.51; MCL 205.52; MCL 205.92; MCL 205.95; MCL 205.423; MCL 205.426; MCL 206.607; MCL 206.659; MCL 206.665; MCL 207.9; MCL 207.218; MCL 208.1111; ... (70 more in the battery log) [heading-only, read: MCL 125.1352; MCL 750.178]
- positive ld @ MCL 125.2328c: passed ("liquidated damages")
- positive ldlt @ SYNTH: passed ("a provision in a lease for liquidated damages")

**MIG-B1-011** (cited), topic `lease-notice-initial-requirement`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:13:17. initials or separate signature for a lease notice
- summary: Battery MIG-B1-011 (init.ab 17; init.ba 19; init.and 51; initbox 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binitial(?:s|ed|ing|led|ling)?\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?)\b)` / all / 17 / init.ab: MCL 125.2652; MCL 125.4201; MCL 125.4301; MCL 205.423; MCL 211.27a; MCL 254.332; MCL 324.36103; MCL 324.79109; MCL 324.79111; MCL 339.2517; MCL 400.109i; MCL 440.9102; MCL 445.952; MCL 445.953; MCL 445.992; MCL 554.636; MCL 554.903
- `(?:\b(?:leases?|rental agreements?)\b)[\s\S]{0,1200}?(?:\binitial(?:s|ed|ing|led|ling)?\b)` / all / 19 / init.ba: MCL 18.1242; MCL 117.5k; MCL 125.2007; MCL 125.2652; MCL 211.27a; MCL 254.332; MCL 324.36103; MCL 324.79109; MCL 324.79111; MCL 330.1137; MCL 339.2517; MCL 380.671; MCL 436.1522; MCL 436.1541; MCL 445.952; MCL 445.953; MCL 445.992; MCL 451.412; MCL 554.636
- `\A(?=[\s\S]*(?:\binitial(?:s|ed|ing|led|ling)?\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?)\b))` / all / 51 / init.and: MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 18.1242; MCL 117.5k; MCL 124.505; MCL 124.508a; MCL 124.547; MCL 125.74; MCL 125.904; MCL 125.1422e; MCL 125.1576; MCL 125.2005; MCL 125.2007; MCL 125.2652; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 205.423; MCL 211.7cc; MCL 211.27a; MCL 254.332; MCL 285.67; MCL 324.36103; MCL 324.79109; MCL 324.79111; MCL 324.80124; MCL 330.1137; MCL 331.1103; ... (21 more in the battery log)
- `\b(?:initialed|initialled) by the (?:tenant|lessee|parties)\b` / all / 0 / initbox
- positive init @ SYNTH: passed ("the tenant shall initial the notice in the lease")
- positive initbox @ SYNTH: passed ("the clause must be initialed by the tenant")

**MIG-B1-012** (cited), topic `plain-language`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:13:28. plain-language rule reaching leases
- summary: Battery MIG-B1-012 (pl 21; plc.ab 2; plc.ba 4; plc.and 7 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bplain (?:language|English)\b` / all / 21 / pl: MCL 211.78i; MCL 324.47333; MCL 324.61503a; MCL 400.112c; MCL 500.2212a; MCL 500.3913; MCL 550.1402a; MCL 550.1404; MCL 552.519; MCL 600.2950b; MCL 600.5072; MCL 600.8401a; MCL 600.8409; MCL 752.385; MCL 752.388; MCL 780.756; MCL 780.768a; MCL 780.786; MCL 780.796; MCL 780.816; MCL 780.828
- `(?:\b(?:plain|clear and conspicuous|readab\w*|easily understood)\b)[\s\S]{0,1200}?(?:\b(?:consumer contracts?|leases?|rental agreements?)\b)` / all / 2 / plc.ab: MCL 324.61503a; MCL 440.2864
- `(?:\b(?:consumer contracts?|leases?|rental agreements?)\b)[\s\S]{0,1200}?(?:\b(?:plain|clear and conspicuous|readab\w*|easily understood)\b)` / all / 4 / plc.ba: MCL 324.61503a; MCL 445.955; MCL 458.426; MCL 600.5718
- `\A(?=[\s\S]*(?:\b(?:plain|clear and conspicuous|readab\w*|easily understood)\b))(?=[\s\S]*(?:\b(?:consumer contracts?|leases?|rental agreements?)\b))` / all / 7 / plc.and: MCL 211.78i; MCL 324.61503a; MCL 440.2864; MCL 445.955; MCL 458.426; MCL 560.102; MCL 600.5718
- positive pl @ MCL 552.519: passed ("plain language")
- positive plc @ SYNTH: passed ("a consumer contract written in plain language")

**MIG-B1-013** (cited), topic `plain-language-consumer-statement`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:13:41. front-page consumer statement in leases
- summary: Battery MIG-B1-013 (cs.ab 0; cs.ba 0; cs.and 0; front.ab 0; front.ba 1; front.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bstatement of (?:consumer|tenant)\w*\b)[\s\S]{0,1200}?(?:\b(?:rights?|restrictions?|waivers?)\b)` / all / 0 / cs.ab
- `(?:\b(?:rights?|restrictions?|waivers?)\b)[\s\S]{0,1200}?(?:\bstatement of (?:consumer|tenant)\w*\b)` / all / 0 / cs.ba
- `\A(?=[\s\S]*(?:\bstatement of (?:consumer|tenant)\w*\b))(?=[\s\S]*(?:\b(?:rights?|restrictions?|waivers?)\b))` / all / 0 / cs.and
- `(?:\b(?:first|front) page\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|consumer contracts?)\b)` / all / 0 / front.ab
- `(?:\b(?:leases?|rental agreements?|consumer contracts?)\b)[\s\S]{0,1200}?(?:\b(?:first|front) page\b)` / all / 1 / front.ba: MCL 554.608
- `\A(?=[\s\S]*(?:\b(?:first|front) page\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|consumer contracts?)\b))` / all / 1 / front.and: MCL 554.608
- positive cs @ SYNTH: passed ("a statement of consumer restrictions listing each waiver")
- positive front @ SYNTH: passed ("on the first page of the lease")

**MIG-B1-014** (cited), topic `lease-term-limitation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:13:58. limits on lease term; formalities; spouse joinder
- summary: Battery MIG-B1-014 (term.ab 50; term.ba 26; term.and 85; spouse.ab 20; spouse.ba 17; spouse.and 47; sof 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:leas(?:e|es|ed|ing)|demise\w*)\b)[\s\S]{0,1200}?(?:\b(?:longer|more) (?:period )?than (?:\d+|one|two|three|five|ten|twenty|ninety-nine) years?\b)` / all / 50 / term.ab: MCL 38.1140; MCL 46.11b; MCL 123.680; MCL 123.961a; MCL 125.526; MCL 211.9c; MCL 211.27a; MCL 211.1055; MCL 211.1075; MCL 257.233; MCL 257.248; MCL 257.625n; MCL 285.142; MCL 324.503; MCL 324.36103; MCL 324.76504; MCL 324.79109; MCL 330.1137; MCL 380.623a; MCL 380.1274; MCL 380.1274a; MCL 380.1276; MCL 432.151; MCL 432.207a; MCL 451.404; MCL 458.106; MCL 458.257; MCL 484.3108; MCL 486.114; MCL 487.3429; ... (20 more in the battery log)
- `(?:\b(?:longer|more) (?:period )?than (?:\d+|one|two|three|five|ten|twenty|ninety-nine) years?\b)[\s\S]{0,1200}?(?:\b(?:leas(?:e|es|ed|ing)|demise\w*)\b)` / all / 26 / term.ba: MCL 38.1140; MCL 46.11b; MCL 205.426; MCL 211.9c; MCL 211.27a; MCL 257.222; MCL 257.233; MCL 285.142; MCL 324.503; MCL 324.11901; MCL 324.36103; MCL 324.76504; MCL 324.79109; MCL 380.1274a; MCL 421.22b; MCL 432.218; MCL 440.9501a; MCL 445.1454; MCL 559.204b; MCL 559.222b; MCL 566.108; MCL 567.237; MCL 750.361; MCL 750.539l; MCL 771.2a; MCL 830.417
- `\A(?=[\s\S]*(?:\b(?:leas(?:e|es|ed|ing)|demise\w*)\b))(?=[\s\S]*(?:\b(?:longer|more) (?:period )?than (?:\d+|one|two|three|five|ten|twenty|ninety-nine) years?\b))` / all / 85 / term.and: MCL 3.1031; MCL 21.142a; MCL 38.1140; MCL 46.11b; MCL 123.674; MCL 123.680; MCL 123.961a; MCL 125.526; MCL 125.2688d; MCL 169.257; MCL 205.27a; MCL 205.426; MCL 207.808; MCL 208.1437; MCL 211.9c; MCL 211.9n; MCL 211.27a; MCL 211.1055; MCL 211.1075; MCL 257.222; MCL 257.233; MCL 257.248; MCL 257.625n; MCL 257.627c; MCL 285.142; MCL 324.503; MCL 324.11901; MCL 324.36103; MCL 324.76504; MCL 324.79109; ... (55 more in the battery log)
- `(?:\b(?:spouses?|husband|wife)\b)[\s\S]{0,1200}?(?:\bleas(?:e|es|ed|ing)\b)` / all / 20 / spouse.ab: MCL 35.541; MCL 37.1501; MCL 205.30a; MCL 208.1105; MCL 211.27a; MCL 257.233; MCL 257.401; MCL 440.9102; MCL 445.1013; MCL 445.1014; MCL 445.1574; MCL 554.75; MCL 554.1012; MCL 556.313; MCL 557.206; MCL 559.204b; MCL 559.222b; MCL 566.31; MCL 600.2950; MCL 700.1105
- `(?:\bleas(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:\b(?:spouses?|husband|wife)\b)` / all / 17 / spouse.ba: MCL 35.541; MCL 37.2503; MCL 205.30a; MCL 206.522; MCL 207.505; MCL 207.526; MCL 208.1111; MCL 211.27a; MCL 257.401; MCL 324.36109; MCL 445.1014; MCL 445.1803; MCL 445.1804; MCL 557.206; MCL 559.204b; MCL 559.222b; MCL 750.411h [heading-only, read: MCL 445.1013]
- `\A(?=[\s\S]*(?:\b(?:spouses?|husband|wife)\b))(?=[\s\S]*(?:\bleas(?:e|es|ed|ing)\b))` / all / 47 / spouse.and: MCL 15.268; MCL 35.541; MCL 37.1501; MCL 37.2503; MCL 205.27a; MCL 205.30a; MCL 206.508; MCL 206.522; MCL 207.505; MCL 207.526; MCL 208.1105; MCL 208.1111; MCL 211.7cc; MCL 211.27a; MCL 257.233; MCL 257.401; MCL 324.36109; MCL 324.80124; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.20142; MCL 380.620; MCL 432.202; MCL 440.9102; MCL 445.1013; MCL 445.1014; MCL 445.1574; MCL 445.1803; MCL 445.1804; ... (17 more in the battery log)
- `\bleasing for a longer period than 1 year\b` / all / 1 / sof: MCL 566.108
- positive sof @ MCL 566.108: passed ("leasing for a longer period than 1 year")
- positive term @ MCL 566.108: passed ("Every contract for the leasing for a longer period than 1 year")

**MIG-B1-015** (cited), topic `confession-of-judgment`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:14:09. confession of judgment
- summary: Battery MIG-B1-015 (cj 12; cjlt.ab 3; cjlt.ba 2; cjlt.and 3 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bconfess(?:ion|ing|ed)? (?:of )?judgments?\b` / all / 12 / cj: MCL 435.101; MCL 440.3104; MCL 445.864; MCL 451.429; MCL 487.2153; MCL 493.12; MCL 493.73; MCL 554.633; MCL 556.312; MCL 600.2441; MCL 691.1307; 2026-PA-0103 [heading-only, read: MCL 600.2906]
- `(?:\bconfess\w*\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 3 / cjlt.ab: MCL 445.956; MCL 554.633; 2026-PA-0103
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\bconfess\w*\b)` / all / 2 / cjlt.ba: MCL 554.633; 2026-PA-0103
- `\A(?=[\s\S]*(?:\bconfess\w*\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 3 / cjlt.and: MCL 445.956; MCL 554.633; 2026-PA-0103
- positive cj @ MCL 554.633: passed ("confession of judgment")
- positive cjlt @ MCL 554.633: passed ("Provides for a confession of judgment by a party")

**MIG-B1-016** (cited), topic `notice-to-quit-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:14:17. waiver or shortening of the notice to quit
- summary: Battery MIG-B1-016 (nq.ab 0; nq.ba 0; nq.and 0; nqplain 5 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bnotices? to quit\b)[\s\S]{0,1200}?(?:\bwaiv(?:e|es|ed|er|ing)\b)` / all / 0 / nq.ab
- `(?:\bwaiv(?:e|es|ed|er|ing)\b)[\s\S]{0,1200}?(?:\bnotices? to quit\b)` / all / 0 / nq.ba
- `\A(?=[\s\S]*(?:\bnotices? to quit\b))(?=[\s\S]*(?:\bwaiv(?:e|es|ed|er|ing)\b))` / all / 0 / nq.and
- `\bnotices? to quit\b` / all / 5 / nqplain: MCL 554.134; MCL 559.212; MCL 600.4702; MCL 600.5714; MCL 600.5750
- positive nqplain @ MCL 554.134: passed ("notice to quit")
- positive nq @ SYNTH: passed ("the tenant may waive the notice to quit")

**MIG-B1-017** (superseded by MIG-B1-020), topic `binding-arbitration`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:14:32. arbitration of tenancy disputes; exclusions in the arbitration act
- summary: Battery MIG-B1-017 (arb.ab 5; arb.ba 6; arb.and 14; arbex.ab 7; arbex.ba 9; arbex.and 18 units hit when run; 1 of 2 positives passed; controls passed (nonsense 0, must-hit 147)) positive arbex@MCL 691.1683 recorded as failed
- `(?:\barbitrat(?:e|es|ed|ing|ion|ions|or|ors)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 5 / arb.ab: MCL 141.1636; MCL 257.235; MCL 257.1408; MCL 259.133; MCL 440.2951
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\barbitrat(?:e|es|ed|ing|ion|ions|or|ors)\b)` / all / 6 / arb.ba: MCL 117.5k; MCL 257.1408; MCL 259.133; MCL 333.26205; MCL 400.14; MCL 440.2951
- `\A(?=[\s\S]*(?:\barbitrat(?:e|es|ed|ing|ion|ions|or|ors)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 14 / arb.and: MCL 3.1012; MCL 117.5k; MCL 124.505; MCL 141.1636; MCL 211.34c; MCL 257.235; MCL 257.1408; MCL 259.133; MCL 333.26205; MCL 400.14; MCL 440.2951; MCL 445.1573; MCL 700.5423; MCL 700.7817
- `(?:\barbitrat\w*\b)[\s\S]{0,1200}?(?:\b(?:consumer|residential|personal injury|tort)\b)` / all / 7 / arbex.ab: MCL 211.34c; MCL 423.239; MCL 423.280; MCL 500.2227; MCL 500.2845; MCL 559.103; MCL 559.245
- `(?:\b(?:consumer|residential|personal injury|tort)\b)[\s\S]{0,1200}?(?:\barbitrat\w*\b)` / all / 9 / arbex.ba: MCL 333.16243; MCL 423.239; MCL 423.280; MCL 500.2227; MCL 500.2845; MCL 552.625a; MCL 552.625c; MCL 552.625e; MCL 559.103
- `\A(?=[\s\S]*(?:\barbitrat\w*\b))(?=[\s\S]*(?:\b(?:consumer|residential|personal injury|tort)\b))` / all / 18 / arbex.and: MCL 3.1012; MCL 211.34c; MCL 328.222; MCL 333.16243; MCL 400.804; MCL 423.239; MCL 423.280; MCL 445.1573; MCL 445.2021; MCL 500.1103; MCL 500.2080; MCL 500.2227; MCL 500.2845; MCL 552.625a; MCL 552.625c; MCL 552.625e; MCL 559.103; MCL 559.245
- positive arb @ SYNTH: passed ("an agreement to arbitrate in a residential lease")
- positive arbex @ MCL 691.1683: FAILED ("This act does not apply to an arbitration between members of a voluntary membership organization")

**MIG-B1-018** (cited) (supersedes MIG-B1-007), topic `eviction-penalty-clause-ban`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:15:18. rerun of MIG-B1-007 with the possession limb widened to "entitled to possession" (failed positive at MCL 600.5741)
- summary: Battery MIG-B1-018 (evfee.ab 18; evfee.ba 15; evfee.and 27; legalcost 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:fees?|charges?|penalt(?:y|ies)|costs?)\b)[\s\S]{0,1200}?(?:\b(?:evict(?:s|ed|ing|ion|ions)?|summary proceedings?|(?:recover|entitled to) possession)\b)` / all / 18 / evfee.ab: MCL 211.9; MCL 257.229; MCL 445.1679; MCL 445.2123; MCL 487.2168; MCL 490.220; MCL 493.77; MCL 554.633; MCL 600.1986; MCL 600.5706; MCL 600.5720; MCL 600.5741; MCL 600.5747; MCL 600.5775; MCL 600.5779; MCL 600.8322; MCL 600.8513; 2026-PA-0103
- `(?:\b(?:evict(?:s|ed|ing|ion|ions)?|summary proceedings?|(?:recover|entitled to) possession)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|penalt(?:y|ies)|costs?)\b)` / all / 15 / evfee.ba: MCL 125.918; MCL 257.229; MCL 324.81113; MCL 400.57i; MCL 493.77; MCL 554.633; MCL 600.1986; MCL 600.2559; MCL 600.5706; MCL 600.5739; MCL 600.5741; MCL 600.5747; MCL 600.5775; MCL 600.8322; 2026-PA-0103
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|penalt(?:y|ies)|costs?)\b))(?=[\s\S]*(?:\b(?:evict(?:s|ed|ing|ion|ions)?|summary proceedings?|(?:recover|entitled to) possession)\b))` / all / 27 / evfee.and: MCL 125.918; MCL 205.429; MCL 211.9; MCL 257.229; MCL 324.81113; MCL 400.57i; MCL 426.160; MCL 445.1679; MCL 445.2123; MCL 487.2168; MCL 490.220; MCL 493.77; MCL 500.8103; MCL 554.633; MCL 600.1986; MCL 600.2559; MCL 600.5706; MCL 600.5720; MCL 600.5739; MCL 600.5741; MCL 600.5744; MCL 600.5747; MCL 600.5775; MCL 600.5779; MCL 600.8322; MCL 600.8513; 2026-PA-0103
- `\blegal costs or attorney fees\b` / all / 2 / legalcost: MCL 554.633; 2026-PA-0103
- positive legalcost @ MCL 554.633: passed ("legal costs or attorney fees")
- positive evfee @ MCL 600.5741: passed ("entitled to possession")
- positive evfee @ MCL 554.633: passed ("summary proceedings to recover possession")

**MIG-B1-019** (cited) (supersedes MIG-B1-008), topic `knowing-use-penalty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:15:31. rerun of MIG-B1-008 with the B limb "in violation" added (failed positive at MCL 554.636)
- summary: Battery MIG-B1-019 (knew 2; know.ab 230; know.ba 314; know.and 625 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bactually knew\b` / all / 2 / knew: MCL 451.2412; MCL 554.636
- `(?:\b(?:know(?:s|n|ingly)?|knew|knowledge|willful(?:ly)?)\b)[\s\S]{0,1200}?(?:\b(?:prohibited|void|unenforceable|in violation)\b)` / all / 230 / know.ab: MCL 4.421; MCL 15.305; MCL 15.325; MCL 15.715; MCL 18.424; MCL 18.445; MCL 19.142; MCL 28.128; MCL 28.425b; MCL 28.425f; MCL 28.425o; MCL 28.565; MCL 28.730; MCL 29.503; MCL 32.1084; MCL 35.501; MCL 55.286c; MCL 124.12a; MCL 125.1512; MCL 125.1523; MCL 168.303; MCL 168.493a; MCL 168.544c; MCL 168.560b; MCL 168.590h; MCL 168.685; MCL 168.932; MCL 169.201.amended; MCL 169.230; MCL 169.230b.added; ... (200 more in the battery log) [heading-only, read: MCL 28.258; MCL 324.82152; MCL 333.2843b; MCL 436.1303]
- `(?:\b(?:prohibited|void|unenforceable|in violation)\b)[\s\S]{0,1200}?(?:\b(?:know(?:s|n|ingly)?|knew|knowledge|willful(?:ly)?)\b)` / all / 314 / know.ba: MCL 4.421; MCL 4.783; MCL 14.319; MCL 15.305; MCL 15.307; MCL 15.325; MCL 15.362; MCL 15.484; MCL 19.142; MCL 28.425j; MCL 29.503; MCL 32.1099; MCL 35.442; MCL 35.501; MCL 37.1602; MCL 37.2502; MCL 37.2701; MCL 38.409; MCL 38.455; MCL 38.2512; MCL 123.676; MCL 124.12a; MCL 125.1449j; MCL 125.1523; MCL 125.2335; MCL 141.1326; MCL 168.493a; MCL 168.590h; MCL 168.718; MCL 168.932; ... (284 more in the battery log) [heading-only, read: MCL 324.82152; MCL 409.227; MCL 436.1201; MCL 493.12]
- `\A(?=[\s\S]*(?:\b(?:know(?:s|n|ingly)?|knew|knowledge|willful(?:ly)?)\b))(?=[\s\S]*(?:\b(?:prohibited|void|unenforceable|in violation)\b))` / all / 625 / know.and: MCL 3.692; MCL 3.991; MCL 3.1001; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 4.421; MCL 4.783; MCL 14.319; MCL 15.305; MCL 15.307; MCL 15.325; MCL 15.362; MCL 15.484; MCL 15.715; MCL 18.424; MCL 18.445; MCL 19.142; MCL 28.128; MCL 28.305; MCL 28.425b; MCL 28.425f; MCL 28.425j; MCL 28.425o; MCL 28.428; MCL 28.565; MCL 28.730; MCL 29.503; MCL 32.1084; MCL 32.1099; ... (595 more in the battery log) [heading-only, read: MCL 28.258; MCL 324.82152; MCL 333.2843b; MCL 409.227; MCL 436.1201; MCL 436.1303; MCL 493.12]
- positive knew @ MCL 554.636: passed ("the lessor actually knew was in violation of section 3")
- positive know @ MCL 554.636: passed ("which the lessor actually knew was in violation of section 3")

**MIG-B1-020** (cited) (supersedes MIG-B1-017), topic `binding-arbitration`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:15:48. rerun of MIG-B1-017 with the exclusion limb carrying the act's own exclusion wording (failed positive at MCL 691.1683)
- summary: Battery MIG-B1-020 (arb.ab 5; arb.ba 6; arb.and 14; arbex.ab 8; arbex.ba 10; arbex.and 19; uaa 17 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\barbitrat(?:e|es|ed|ing|ion|ions|or|ors)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 5 / arb.ab: MCL 141.1636; MCL 257.235; MCL 257.1408; MCL 259.133; MCL 440.2951
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\barbitrat(?:e|es|ed|ing|ion|ions|or|ors)\b)` / all / 6 / arb.ba: MCL 117.5k; MCL 257.1408; MCL 259.133; MCL 333.26205; MCL 400.14; MCL 440.2951
- `\A(?=[\s\S]*(?:\barbitrat(?:e|es|ed|ing|ion|ions|or|ors)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 14 / arb.and: MCL 3.1012; MCL 117.5k; MCL 124.505; MCL 141.1636; MCL 211.34c; MCL 257.235; MCL 257.1408; MCL 259.133; MCL 333.26205; MCL 400.14; MCL 440.2951; MCL 445.1573; MCL 700.5423; MCL 700.7817
- `(?:\barbitrat\w*\b)[\s\S]{0,1200}?(?:\b(?:consumers?|residential|personal injur(?:y|ies)|torts?|voluntary membership organization)\b)` / all / 8 / arbex.ab: MCL 211.34c; MCL 423.239; MCL 423.280; MCL 500.2227; MCL 500.2845; MCL 559.103; MCL 559.245; MCL 691.1683
- `(?:\b(?:consumers?|residential|personal injur(?:y|ies)|torts?|voluntary membership organization)\b)[\s\S]{0,1200}?(?:\barbitrat\w*\b)` / all / 10 / arbex.ba: MCL 333.16243; MCL 423.239; MCL 423.280; MCL 500.2227; MCL 500.2845; MCL 552.625a; MCL 552.625c; MCL 552.625e; MCL 559.103; MCL 691.1683
- `\A(?=[\s\S]*(?:\barbitrat\w*\b))(?=[\s\S]*(?:\b(?:consumers?|residential|personal injur(?:y|ies)|torts?|voluntary membership organization)\b))` / all / 19 / arbex.and: MCL 3.1012; MCL 211.34c; MCL 328.222; MCL 333.16243; MCL 400.804; MCL 423.239; MCL 423.280; MCL 445.1573; MCL 445.2021; MCL 500.1103; MCL 500.2080; MCL 500.2227; MCL 500.2845; MCL 552.625a; MCL 552.625c; MCL 552.625e; MCL 559.103; MCL 559.245; MCL 691.1683
- `\bagreement to arbitrate\b` / all / 17 / uaa: MCL 423.9d; MCL 500.1103; MCL 691.1681; MCL 691.1683; MCL 691.1684; MCL 691.1685; MCL 691.1686; MCL 691.1687; MCL 691.1689; MCL 691.1690; MCL 691.1691; MCL 691.1692; MCL 691.1695; MCL 691.1699; MCL 691.1703; MCL 691.1706; MCL 691.1707
- positive arb @ SYNTH: passed ("an agreement to arbitrate in a residential lease")
- positive arbex @ MCL 691.1683: passed ("arbitration between members of a voluntary membership organization")
- positive uaa @ MCL 691.1686: passed ("agreement to arbitrate")

**MIG-B1-021** (cited) (supersedes MIG-B1-009), topic `homestead-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:16:06. rerun of MIG-B1-009 after the inflection probe flagged "homesteads"
- summary: Battery MIG-B1-021 (hw.ab 50; hw.ba 50; hw.and 112; hs 116; hwlt.ab 0; hwlt.ba 0; hwlt.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:homesteads?|exempt(?:ion|ions|ed|s)?)\b)[\s\S]{0,1200}?(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)` / all / 50 / hw.ab: MCL 3.1031; MCL 12.119; MCL 15.443; MCL 29.5d; MCL 117.4r; MCL 125.2121b; MCL 125.2664a; MCL 205.30c; MCL 206.691; MCL 207.606; MCL 211.7q; MCL 211.7cc; MCL 211.7ee; MCL 211.7nn; MCL 211.7ss; MCL 211.44; MCL 211.1123; MCL 247.661; MCL 257.801; MCL 287.839; MCL 289.3119; MCL 324.5523; MCL 324.6306; MCL 324.6307; MCL 324.6507; MCL 324.6509; MCL 324.74116; MCL 324.78119; MCL 324.80165; MCL 333.7304; ... (20 more in the battery log) [heading-only, read: MCL 333.7303; MCL 500.6302]
- `(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)[\s\S]{0,1200}?(?:\b(?:homesteads?|exempt(?:ion|ions|ed|s)?)\b)` / all / 50 / hw.ba: MCL 12.119; MCL 29.5d; MCL 125.2074; MCL 125.2121b; MCL 205.743; MCL 207.215; MCL 207.606; MCL 207.1048; MCL 211.7q; MCL 211.7cc; MCL 211.7ee; MCL 211.7nn; MCL 211.7ss; MCL 211.44; MCL 211.78g; MCL 211.1057; MCL 211.1077; MCL 211.1127; MCL 213.55; MCL 257.801; MCL 287.526; MCL 287.839; MCL 289.3119; MCL 324.6307; MCL 324.6509; MCL 324.80165; MCL 333.7304; MCL 333.20161; MCL 388.1632d; MCL 388.1701; ... (20 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:homesteads?|exempt(?:ion|ions|ed|s)?)\b))(?=[\s\S]*(?:\bwaiv(?:e|es|ed|er|ers|ing)\b))` / all / 112 / hw.and: MCL 3.1031; MCL 3.1041; MCL 12.119; MCL 15.234; MCL 15.443; MCL 18.445; MCL 28.292; MCL 28.425b; MCL 28.425l; MCL 29.5d; MCL 117.4q; MCL 117.4r; MCL 125.1444c; MCL 125.2029h; MCL 125.2074; MCL 125.2121b; MCL 125.2652; MCL 125.2664a; MCL 205.30c; MCL 205.743; MCL 206.691; MCL 207.215; MCL 207.606; MCL 207.710; MCL 207.1048; MCL 211.7q; MCL 211.7cc; MCL 211.7ee; MCL 211.7nn; MCL 211.7ss; ... (82 more in the battery log) [heading-only, read: MCL 333.7303; MCL 500.6302]
- `\bhomesteads?\b` / all / 116 / hs: MCL 3.823; MCL 15.523; MCL 35.801; MCL 41.280; MCL 125.985; MCL 125.1422; MCL 125.2701; MCL 125.2702; MCL 125.2703; MCL 125.2706; MCL 125.2708; MCL 125.2709; MCL 125.2722; MCL 125.2723; MCL 125.2726; MCL 125.2727; MCL 125.2734; MCL 125.2748; MCL 125.2762; MCL 125.2763; MCL 125.2764; MCL 125.2765; MCL 125.2770; MCL 169.204; MCL 205.30a; MCL 206.508; MCL 206.510; MCL 206.512; MCL 206.512a; MCL 206.520; ... (86 more in the battery log) [heading-only, read: MCL 380.1211; MCL 600.6059]
- `(?:\b(?:homesteads?|exempt(?:ion|ions)?)\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|tenants?|lessees?)\b[\s\S]{0,200}\bwaiv\w*)` / all / 0 / hwlt.ab
- `(?:\b(?:leases?|rental agreements?|tenants?|lessees?)\b[\s\S]{0,200}\bwaiv\w*)[\s\S]{0,1200}?(?:\b(?:homesteads?|exempt(?:ion|ions)?)\b)` / all / 0 / hwlt.ba
- `\A(?=[\s\S]*(?:\b(?:homesteads?|exempt(?:ion|ions)?)\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|tenants?|lessees?)\b[\s\S]{0,200}\bwaiv\w*))` / all / 1 / hwlt.and: MCL 566.31
- positive hw @ MCL 700.2205: passed ("homestead")
- positive hs @ Const 1963, art. X, § 3: passed ("A homestead in the amount of not less than $3,500")
- positive hwlt @ SYNTH: passed ("the exemption of a tenant may be waived in the lease")

**MIG-B1-022** (cited) (supersedes MIG-B1-003), topic `habitability-statement`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:16:17. rerun of MIG-B1-003 after the inflection probe flagged "fit" forms
- summary: Battery MIG-B1-022 (stmt.ab 0; stmt.ba 0; stmt.and 0; fitword 5 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:leases?|rental agreements?)\b[\s\S]{0,40}\b(?:shall|must) (?:state|contain|include)\b)[\s\S]{0,1200}?(?:(?:habitab\w*|fitness|\bfit(?:s|ted|ting)?\b))` / all / 0 / stmt.ab
- `(?:(?:habitab\w*|fitness|\bfit(?:s|ted|ting)?\b))[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?)\b[\s\S]{0,40}\b(?:shall|must) (?:state|contain|include)\b)` / all / 0 / stmt.ba
- `\A(?=[\s\S]*(?:\b(?:leases?|rental agreements?)\b[\s\S]{0,40}\b(?:shall|must) (?:state|contain|include)\b))(?=[\s\S]*(?:(?:habitab\w*|fitness|\bfit(?:s|ted|ting)?\b)))` / all / 0 / stmt.and
- `\bfit for (?:the use intended|habitation|human habitation|occupancy)\b` / all / 5 / fitword: MCL 125.468; MCL 125.485; MCL 125.529; MCL 400.57i; MCL 554.139
- positive fitword @ MCL 554.139: passed ("fit for the use intended")
- positive stmt @ SYNTH: passed ("The lease shall state that the premises are fit for habitation")

**MIG-B1-023** (cited), topic `promises-to-repair`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:25:31. writing, completion-date or timing rule for a landlord promise to clean, repair or improve
- summary: Battery MIG-B1-023 (promrep.ab 12; promrep.ba 10; promrep.and 27; promlt.ab 16; promlt.ba 15; promlt.and 28; compdate.ab 6; compdate.ba 10; compdate.and 14; promben 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bpromis(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:\b(?:repair(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|clean(?:s|ed|ing)?)\b)` / all / 12 / promrep.ab: MCL 257.1307a; MCL 330.3025; MCL 380.1280f; MCL 388.1627b; MCL 388.1635a; MCL 390.1667; MCL 445.1102; MCL 445.1404; MCL 445.1452; MCL 445.1574; MCL 445.1632; MCL 559.203b
- `(?:\b(?:repair(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|clean(?:s|ed|ing)?)\b)[\s\S]{0,1200}?(?:\bpromis(?:e|es|ed|ing)\b)` / all / 10 / promrep.ba: MCL 141.1369; MCL 257.1302a; MCL 257.1307a; MCL 259.117; MCL 390.1667; MCL 390.1671; MCL 400.793; MCL 445.1102; MCL 445.1404; MCL 445.1632
- `\A(?=[\s\S]*(?:\bpromis(?:e|es|ed|ing)\b))(?=[\s\S]*(?:\b(?:repair(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|clean(?:s|ed|ing)?)\b))` / all / 27 / promrep.and: MCL 41.181; MCL 123.1345; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 141.1369; MCL 257.1302a; MCL 257.1307a; MCL 259.117; MCL 330.3025; MCL 339.2401; MCL 380.1280f; MCL 388.1283; MCL 388.1627b; MCL 388.1635a; MCL 390.1667; MCL 390.1671; MCL 400.117a; MCL 400.793; MCL 445.903; MCL 445.1102; MCL 445.1404; MCL 445.1452; MCL 445.1574; MCL 445.1632; MCL 554.601; MCL 559.203b
- `(?:\bpromis(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 16 / promlt.ab: MCL 123.1345; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 141.1369; MCL 390.1673; MCL 440.2803; MCL 440.2859; MCL 440.2860; MCL 440.2903; MCL 440.2937; MCL 440.2953; MCL 440.9614; MCL 474.103; MCL 554.601; MCL 554.937
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\bpromis(?:e|es|ed|ing)\b)` / all / 15 / promlt.ba: MCL 123.1345; MCL 141.1369; MCL 259.144; MCL 339.2401; MCL 440.2803; MCL 440.2859; MCL 440.2860; MCL 440.2862; MCL 440.2903; MCL 440.2937; MCL 440.2953; MCL 440.9102; MCL 445.1504; MCL 554.601; MCL 554.937
- `\A(?=[\s\S]*(?:\bpromis(?:e|es|ed|ing)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 28 / promlt.and: MCL 15.243; MCL 123.1345; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 141.1369; MCL 259.117; MCL 259.144; MCL 339.2401; MCL 390.1673; MCL 440.2803; MCL 440.2859; MCL 440.2860; MCL 440.2862; MCL 440.2903; MCL 440.2937; MCL 440.2953; MCL 440.7102; MCL 440.9102; MCL 440.9614; MCL 445.903; MCL 445.1452; MCL 445.1504; MCL 445.1574; MCL 474.103; MCL 475.1; MCL 554.601; MCL 554.937
- `(?:\b(?:completion dates?|dates? of completion|completed (?:by|on or before))\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 6 / compdate.ab: MCL 141.1369; MCL 207.709; MCL 208.1437; MCL 259.117; MCL 259.144; MCL 324.33911
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\b(?:completion dates?|dates? of completion|completed (?:by|on or before))\b)` / all / 10 / compdate.ba: MCL 18.1221a; MCL 125.731; MCL 125.1253a; MCL 141.1369; MCL 207.659; MCL 207.709; MCL 208.1437; MCL 324.33911; MCL 324.72116; MCL 570.1111
- `\A(?=[\s\S]*(?:\b(?:completion dates?|dates? of completion|completed (?:by|on or before))\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 14 / compdate.and: MCL 18.1221a; MCL 125.731; MCL 125.1253a; MCL 141.1369; MCL 207.659; MCL 207.709; MCL 208.1437; MCL 259.117; MCL 259.144; MCL 324.30321; MCL 324.33911; MCL 324.72116; MCL 324.76703; MCL 570.1111
- `\bpromised benefits\b` / all / 1 / promben: MCL 445.903
- positive promrep @ MCL 257.1307a: passed ("promised repairs within the period of time agreed")
- positive promben @ MCL 445.903: passed ("failure of the other party to the transaction to provide the promised benefits")
- positive promlt @ SYNTH: passed ("a promise by the landlord to repair the rental unit")
- positive compdate @ SYNTH: passed ("the lease shall state a completion date for each repair")

**MIG-B1-024** (cited), topic `optional-lease-terms`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:25:46. statute regulating a residential lease with an option to purchase (rent-to-own)
- summary: Battery MIG-B1-024 (leaseopt 4; optlt.ab 9; optlt.ba 12; optlt.and 17 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\blease (?:together )?with (?:an|the) option to (?:purchase|buy)\b` / all / 4 / leaseopt: MCL 331.1306; MCL 554.601; MCL 565.952; MCL 565.954
- `(?:\b(?:options? to (?:purchase|buy)|rent-to-own|lease-purchase|lease-option)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|residential|dwellings?|rental units?)\b)` / all / 9 / optlt.ab: MCL 125.1253a; MCL 125.2007; MCL 206.266; MCL 208.1435; MCL 440.2868; MCL 445.953; MCL 554.601; MCL 565.952; MCL 565.954
- `(?:\b(?:tenants?|lessees?|residential|dwellings?|rental units?)\b)[\s\S]{0,1200}?(?:\b(?:options? to (?:purchase|buy)|rent-to-own|lease-purchase|lease-option)\b)` / all / 12 / optlt.ba: MCL 125.1253a; MCL 206.266; MCL 208.1435; MCL 440.2868; MCL 445.953; MCL 554.601; MCL 565.881; MCL 565.891; MCL 565.952; MCL 700.3715; MCL 700.5423; MCL 700.7817
- `\A(?=[\s\S]*(?:\b(?:options? to (?:purchase|buy)|rent-to-own|lease-purchase|lease-option)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|residential|dwellings?|rental units?)\b))` / all / 17 / optlt.and: MCL 125.1253a; MCL 125.1411; MCL 125.2007; MCL 206.266; MCL 208.1435; MCL 331.57; MCL 440.2868; MCL 445.953; MCL 554.601; MCL 565.881; MCL 565.891; MCL 565.952; MCL 565.954; MCL 570.584; MCL 700.3715; MCL 700.5423; MCL 700.7817
- positive leaseopt @ MCL 565.952: passed ("lease with an option to purchase")
- positive optlt @ MCL 554.601: passed ("An amount paid for an option to purchase, pursuant to a lease with an option to purchase")

**MIG-B1-025** (cited), topic `part5-nonwaivable`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:26:05. non-waiver sentences touching tenancies; sale-leaseback non-waiver rule
- summary: Battery MIG-B1-025 (nw 13; nwlt.ab 2; nwlt.ba 0; nwlt.and 2; slb 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\b(?:may not|shall not|must not|cannot|can not) be waived\b` / all / 13 / nw: MCL 257.309; MCL 257.907; MCL 257.1407; MCL 339.1109; MCL 393.503; MCL 450.835; MCL 500.1236; MCL 550.839; MCL 551.339; MCL 554.606; MCL 554.639; MCL 600.2918; MCL 769.1j
- `(?:\b(?:may not|shall not|must not|cannot|can not) be waived\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))` / all / 2 / nwlt.ab: MCL 554.606; MCL 600.2918
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b))[\s\S]{0,1200}?(?:\b(?:may not|shall not|must not|cannot|can not) be waived\b)` / all / 0 / nwlt.ba
- `\A(?=[\s\S]*(?:\b(?:may not|shall not|must not|cannot|can not) be waived\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b|\bleaseholds?\b)))` / all / 2 / nwlt.and: MCL 554.606; MCL 600.2918
- `\b(?:sale-leasebacks?|sale and leasebacks?|leasebacks?)\b` / all / 2 / slb: MCL 125.4611; MCL 324.20101
- positive nw @ MCL 554.639: passed ("The requirements of this act may not be waived")
- positive nwlt @ MCL 600.2918: passed ("The provisions of this section may not be waived")
- positive slb @ MCL 125.4611: passed ("leaseback")

**MIG-B1-026** (cited), topic `habitability-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:26:19. waiver or modification of habitability standards in a lease
- summary: Battery MIG-B1-026 (hw.ab 10; hw.ba 6; hw.and 16; modob 3 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)[\s\S]{0,1200}?(?:(?:habitab\w*|fitness|\bfit for\b|untenantable|\breasonable repair\b|\bgood repair\b))` / all / 10 / hw.ab: MCL 28.609; MCL 28.609b; MCL 28.609c; MCL 28.609d; MCL 28.836; MCL 339.1109; MCL 451.416; MCL 487.3302; MCL 554.633; 2026-PA-0103
- `(?:(?:habitab\w*|fitness|\bfit for\b|untenantable|\breasonable repair\b|\bgood repair\b))[\s\S]{0,1200}?(?:\bwaiv(?:e|es|ed|er|ers|ing)\b)` / all / 6 / hw.ba: MCL 339.1109; MCL 445.903; MCL 451.416; MCL 554.633; Const 1963, art. XI, § 5; 2026-PA-0103 [heading-only, read: MCL 28.836]
- `\A(?=[\s\S]*(?:\bwaiv(?:e|es|ed|er|ers|ing)\b))(?=[\s\S]*(?:(?:habitab\w*|fitness|\bfit for\b|untenantable|\breasonable repair\b|\bgood repair\b)))` / all / 16 / hw.and: MCL 28.609; MCL 28.609b; MCL 28.609c; MCL 28.609d; MCL 28.836; MCL 29.369; MCL 211.7cc; MCL 339.1109; MCL 445.903; MCL 451.416; MCL 487.3302; MCL 554.633; MCL 710.29; MCL 710.44; Const 1963, art. XI, § 5; 2026-PA-0103
- `\bmodify the obligations\b` / all / 3 / modob: MCL 324.20126a; MCL 324.21323b; MCL 554.139
- positive hw @ MCL 554.633: passed ("Waives or alters a remedy available to the parties when the premises are in a condition that violates the covenants of f")
- positive modob @ MCL 554.139: passed ("may modify the obligations imposed by this section")

**MIG-B2-001** (cited), topic `deposit-cost-schedule`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:26:48. preset cleaning, carpet or repair charges against a deposit; professional-cleaning limit
- summary: Battery MIG-B2-001 (clean.ab 0; clean.ba 0; clean.and 0; carpet 6; profclean 0; sched.ab 0; sched.ba 0; sched.and 0; repcost.ab 2; repcost.ba 3; repcost.and 3 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bclean(?:s|ed|ing|liness)?\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 0 / clean.ab
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\bclean(?:s|ed|ing|liness)?\b)` / all / 0 / clean.ba
- `\A(?=[\s\S]*(?:\bclean(?:s|ed|ing|liness)?\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 0 / clean.and
- `\bcarpet(?:s|ing|ed)?\b` / all / 6 / carpet: MCL 445.1751; MCL 445.1761; MCL 554.608; Mich Admin Code R 408.30505; Mich Admin Code R 408.30537a; Mich Admin Code R 408.30547e
- `\bprofessional(?:ly)? clean(?:s|ed|ing)?\b` / all / 0 / profclean
- `(?:\b(?:schedules?|pre-?set|predetermined|flat (?:fees?|charges?|rates?)|fixed (?:fees?|charges?|amounts?))\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 0 / sched.ab
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:schedules?|pre-?set|predetermined|flat (?:fees?|charges?|rates?)|fixed (?:fees?|charges?|amounts?))\b)` / all / 0 / sched.ba
- `\A(?=[\s\S]*(?:\b(?:schedules?|pre-?set|predetermined|flat (?:fees?|charges?|rates?)|fixed (?:fees?|charges?|amounts?))\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 0 / sched.and
- `(?:\bcosts? of repair(?:s|ing)?\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 2 / repcost.ab: MCL 554.609; 2026-PA-0102
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\bcosts? of repair(?:s|ing)?\b)` / all / 3 / repcost.ba: MCL 125.534; MCL 554.609; 2026-PA-0102
- `\A(?=[\s\S]*(?:\bcosts? of repair(?:s|ing)?\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 3 / repcost.and: MCL 125.534; MCL 554.609; 2026-PA-0102
- positive clean @ SYNTH: passed ("the cost of cleaning the rental unit may be deducted from the security deposit")
- positive carpet @ MCL 554.608: passed ("carpeting, draperies, appliances")
- positive profclean @ SYNTH: passed ("professional cleaning of the carpets")
- positive sched @ SYNTH: passed ("a schedule of charges to be deducted from the security deposit")
- positive repcost @ MCL 554.609: passed ("the estimated cost of repair of each damaged property item")

**MIG-B2-002** (cited), topic `deposit-installments`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:27:03. tenant right to pay a deposit in installments
- summary: Battery MIG-B2-002 (instsd.ab 1; instsd.ba 0; instsd.and 1; instdep.ab 21; instdep.ba 22; instdep.and 45; depinst 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binstal(?:l)?ments?\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 1 / instsd.ab: Mich Admin Code R 460.131
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\binstal(?:l)?ments?\b)` / all / 0 / instsd.ba
- `\A(?=[\s\S]*(?:\binstal(?:l)?ments?\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 1 / instsd.and: Mich Admin Code R 460.131
- `(?:\binstal(?:l)?ments?\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 21 / instdep.ab: MCL 38.19a; MCL 38.1341; MCL 280.132; MCL 324.2158; MCL 324.19612; MCL 324.31712; MCL 324.40119; MCL 432.41; MCL 445.2052; MCL 487.3406; MCL 492.102; MCL 492.131; MCL 493.13; MCL 493.74; MCL 500.6406; MCL 600.4803; MCL 600.8727; MCL 750.219e; MCL 750.219f; Mich Admin Code R 460.111; Mich Admin Code R 460.131 [heading-only, read: MCL 280.278]
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\binstal(?:l)?ments?\b)` / all / 22 / instdep.ba: MCL 38.19a; MCL 206.301; MCL 280.132; MCL 280.278; MCL 324.31712; MCL 333.20161; MCL 333.26220a; MCL 397.182; MCL 432.41; MCL 445.2052; MCL 487.2052; MCL 487.2155; MCL 487.3206; MCL 492.102; MCL 492.131; MCL 493.13; MCL 500.1501; MCL 600.8727; MCL 600.8827; Mich Admin Code R 460.111; Mich Admin Code R 460.131; Mich Admin Code R 460.132
- `\A(?=[\s\S]*(?:\binstal(?:l)?ments?\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 45 / instdep.and: MCL 38.19a; MCL 38.1137; MCL 38.1341; MCL 206.301; MCL 259.142; MCL 280.132; MCL 280.196; MCL 324.2158; MCL 324.19612; MCL 324.20101; MCL 324.31712; MCL 324.40119; MCL 328.222; MCL 333.20161; MCL 333.26220a; MCL 380.1356; MCL 397.182; MCL 432.41; MCL 438.31c; MCL 445.63; MCL 445.2052; MCL 460.9r; MCL 460.10t; MCL 487.2052; MCL 487.2155; MCL 487.3206; MCL 487.3406; MCL 487.14202; MCL 492.102; MCL 492.131; ... (15 more in the battery log) [heading-only, read: MCL 280.278]
- `\bdeposits? in (?:\w+ )?(?:equal )?(?:monthly )?instal(?:l)?ments\b` / all / 0 / depinst
- positive instsd @ SYNTH: passed ("the tenant may pay the security deposit in 3 monthly installments")
- positive instdep @ Mich Admin Code R 460.111: passed ("the option of paying a deposit required under these rules in 2 monthly installments")
- positive depinst @ SYNTH: passed ("pay the deposit in 2 monthly installments")

**MIG-B2-003** (superseded by MIG-B2-006), topic `deposit-surrender-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:27:24. deposit refund conditioned on move-out notice, key return or forwarding address
- summary: Battery MIG-B2-003 (fwd 5; notif.ab 2; notif.ba 0; notif.and 2; cond.ab 5; cond.ba 7; cond.and 8; keys.ab 0; keys.ba 0; keys.and 0 units hit when run; 3 of 4 positives passed; controls passed (nonsense 0, must-hit 147)) positive notif@MCL 554.603 recorded as failed
- `\bforwarding (?:mailing )?address(?:es)?\b` / all / 5 / fwd: MCL 500.2227; MCL 500.2845; MCL 554.601b; MCL 554.603; MCL 554.613 [heading-only, read: MCL 554.611]
- `(?:\b(?:notif(?:y|ies|ied|ying|ication)|notices?)\b[\s\S]{0,80}?\b(?:vacat(?:e|es|ed|ing|ion)|surrender(?:s|ed|ing)?|mov(?:e|es|ed|ing) out|terminat(?:e|es|ed|ing|ion))\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 2 / notif.ab: MCL 554.601b; MCL 554.610
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:notif(?:y|ies|ied|ying|ication)|notices?)\b[\s\S]{0,80}?\b(?:vacat(?:e|es|ed|ing|ion)|surrender(?:s|ed|ing)?|mov(?:e|es|ed|ing) out|terminat(?:e|es|ed|ing|ion))\b)` / all / 0 / notif.ba
- `\A(?=[\s\S]*(?:\b(?:notif(?:y|ies|ied|ying|ication)|notices?)\b[\s\S]{0,80}?\b(?:vacat(?:e|es|ed|ing|ion)|surrender(?:s|ed|ing)?|mov(?:e|es|ed|ing) out|terminat(?:e|es|ed|ing|ion))\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 2 / notif.and: MCL 554.601b; MCL 554.610
- `(?:\b(?:condition(?:s|ed|al)? (?:of|on|upon|precedent)|forfeit(?:s|ed|ure)?)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 5 / cond.ab: MCL 554.601; MCL 554.608; MCL 750.49; MCL 750.50; MCL 750.50b
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:condition(?:s|ed|al)? (?:of|on|upon|precedent)|forfeit(?:s|ed|ure)?)\b)` / all / 7 / cond.ba: MCL 554.601; MCL 554.608; MCL 554.609; MCL 750.49; MCL 750.50; MCL 750.50b; 2026-PA-0102
- `\A(?=[\s\S]*(?:\b(?:condition(?:s|ed|al)? (?:of|on|upon|precedent)|forfeit(?:s|ed|ure)?)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 8 / cond.and: MCL 554.601; MCL 554.608; MCL 554.609; MCL 750.49; MCL 750.50; MCL 750.50b; 2026-PA-0102; Mich Admin Code R 460.131
- `(?:\b(?:return(?:s|ed|ing)? (?:of )?(?:the |all )?keys?|keys? (?:are|is) returned)\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 0 / keys.ab
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\b(?:return(?:s|ed|ing)? (?:of )?(?:the |all )?keys?|keys? (?:are|is) returned)\b)` / all / 0 / keys.ba
- `\A(?=[\s\S]*(?:\b(?:return(?:s|ed|ing)? (?:of )?(?:the |all )?keys?|keys? (?:are|is) returned)\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 0 / keys.and
- positive fwd @ MCL 554.603: passed ("forwarding mailing address")
- positive notif @ MCL 554.603: FAILED ("notifies the tenant no later than 14 days from the date a tenant assumes possession in a written instrument of the landl")
- positive cond @ MCL 554.609: passed ("otherwise you will forfeit the amount claimed for damages")
- positive keys @ SYNTH: passed ("the deposit will be refunded only after the return of all keys")

**MIG-B2-004** (cited), topic `security-deposit-standards`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:27:44. posting or uniform standards for setting deposit amounts
- summary: Battery MIG-B2-004 (stddep.ab 38; stddep.ba 42; stddep.and 120; post.ab 4; post.ba 3; post.and 4; uniform.ab 0; uniform.ba 0; uniform.and 0; depamt 26 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bstandards?\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 38 / stddep.ab: MCL 15.234; MCL 29.499; MCL 29.503; MCL 125.2305; MCL 125.2316; MCL 168.795a; MCL 206.651; MCL 257.804; MCL 290.352; MCL 290.628f; MCL 290.644; MCL 324.5519; MCL 324.6310; MCL 324.30311d; MCL 324.63527; MCL 325.1007; MCL 338.3622; MCL 388.1836j; MCL 389.142; MCL 399.803; MCL 432.309; MCL 432.409; MCL 436.1303; MCL 460.10gg; MCL 484.1401c; MCL 500.432; MCL 500.539; MCL 500.830; MCL 500.2110; MCL 500.3355; ... (8 more in the battery log)
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\bstandards?\b)` / all / 42 / stddep.ba: MCL 15.234; MCL 18.422; MCL 28.633; MCL 29.374; MCL 29.499; MCL 29.503; MCL 38.2733; MCL 38.2741; MCL 123.1157; MCL 123.1183; MCL 123.1229; MCL 125.534; MCL 125.2305; MCL 125.2658a; MCL 129.91; MCL 168.795a; MCL 257.804; MCL 285.35; MCL 290.645a; MCL 324.3121; MCL 324.8807; MCL 324.61901; MCL 324.63502; MCL 324.63529; MCL 324.63533; MCL 333.9141; MCL 333.27602; MCL 339.2661; MCL 389.142; MCL 390.1154; ... (12 more in the battery log) [heading-only, read: MCL 484.1408]
- `\A(?=[\s\S]*(?:\bstandards?\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 120 / stddep.and: MCL 15.234; MCL 18.422; MCL 28.611; MCL 28.633; MCL 29.371; MCL 29.374; MCL 29.499; MCL 29.503; MCL 32.651; MCL 38.38; MCL 38.1137; MCL 38.2733; MCL 38.2741; MCL 123.1157; MCL 123.1183; MCL 123.1229; MCL 125.534; MCL 125.1422; MCL 125.2088u; MCL 125.2305; MCL 125.2316; MCL 125.2658a; MCL 129.91; MCL 168.795a; MCL 205.93a; MCL 206.651; MCL 211.27; MCL 247.661; MCL 247.661h; MCL 257.606; ... (90 more in the battery log) [heading-only, read: MCL 484.1408]
- `(?:\bpost(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 4 / post.ab: MCL 554.601b; MCL 750.49; MCL 750.50; MCL 750.50b
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\bpost(?:s|ed|ing)?\b)` / all / 3 / post.ba: MCL 750.49; MCL 750.50; MCL 750.50b
- `\A(?=[\s\S]*(?:\bpost(?:s|ed|ing)?\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 4 / post.and: MCL 554.601b; MCL 750.49; MCL 750.50; MCL 750.50b
- `(?:\buniform(?:ly)?\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 0 / uniform.ab
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\buniform(?:ly)?\b)` / all / 0 / uniform.ba
- `\A(?=[\s\S]*(?:\buniform(?:ly)?\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 0 / uniform.and
- `\bamount of (?:the |a |any )?(?:security )?deposits?\b` / all / 26 / depamt: MCL 124.7; MCL 124.292c; MCL 125.1439; MCL 129.91; MCL 129.145; MCL 206.909; MCL 285.274; MCL 290.666; MCL 328.222; MCL 331.46; MCL 333.21766; MCL 380.622; MCL 380.1223; MCL 389.142; MCL 390.929; MCL 432.504; MCL 451.425; MCL 500.464; MCL 500.808; MCL 554.609; MCL 554.613; MCL 750.49; MCL 750.50; MCL 750.50b; MCL 780.66; 2026-PA-0102
- positive stddep @ Mich Admin Code R 460.111: passed ("A utility shall apply deposit standards uniformly to all applicants and customers")
- positive post @ SYNTH: passed ("the landlord shall post the standards used to set the amount of each security deposit")
- positive uniform @ SYNTH: passed ("apply security deposit standards uniformly")
- positive depamt @ MCL 554.609: passed ("the amount of the security deposit held by the landlord")

**MIG-B2-005** (cited), topic `expedited-deposit-disposition`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:28:04. tenant request for an early or expedited deposit disposition
- summary: Battery MIG-B2-005 (exp.ab 1; exp.ba 1; exp.and 4; req.ab 4; req.ba 9; req.and 12; expplain 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:expedit(?:e|es|ed|ing|ious|iously)|immediately|promptly|forthwith)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 1 / exp.ab: MCL 554.610
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:expedit(?:e|es|ed|ing|ious|iously)|immediately|promptly|forthwith)\b)` / all / 1 / exp.ba: MCL 125.534
- `\A(?=[\s\S]*(?:\b(?:expedit(?:e|es|ed|ing|ious|iously)|immediately|promptly|forthwith)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 4 / exp.and: MCL 18.361; MCL 125.534; MCL 554.610; Mich Admin Code R 460.131
- `(?:\b(?:request(?:s|ed|ing)?|demand(?:s|ed|ing)?|application)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 4 / req.ab: MCL 750.49; MCL 750.50; MCL 750.50b; Mich Admin Code R 460.148
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:request(?:s|ed|ing)?|demand(?:s|ed|ing)?|application)\b)` / all / 9 / req.ba: MCL 554.608; MCL 554.609; MCL 554.633; MCL 750.49; MCL 750.50; MCL 750.50b; 2026-PA-0102; 2026-PA-0103; Mich Admin Code R 460.131
- `\A(?=[\s\S]*(?:\b(?:request(?:s|ed|ing)?|demand(?:s|ed|ing)?|application)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 12 / req.and: MCL 125.534; MCL 206.607; MCL 554.608; MCL 554.609; MCL 554.633; MCL 750.49; MCL 750.50; MCL 750.50b; 2026-PA-0102; 2026-PA-0103; Mich Admin Code R 460.131; Mich Admin Code R 460.148
- `\bexpedited (?:disposition|return|refund|accounting)\b` / all / 0 / expplain
- positive exp @ MCL 554.610: passed ("remit to the tenant immediately the full security deposit")
- positive req @ SYNTH: passed ("upon the tenant's request the landlord shall return the security deposit")
- positive expplain @ SYNTH: passed ("expedited disposition of the security deposit")

**MIG-B2-006** (cited) (supersedes MIG-B2-003), topic `deposit-surrender-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:30:09. deposit refund conditioned on move-out notice, key return or forwarding address (rerun of MIG-B2-003, whose notif positive failed on an inner gap limb)
- summary: Battery MIG-B2-006 (fwd 5; vac.ab 1; vac.ba 1; vac.and 3; ntv.ab 0; ntv.ba 1; ntv.and 1; cond.ab 5; cond.ba 7; cond.and 8; keys.ab 0; keys.ba 0; keys.and 0 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bforwarding (?:mailing )?address(?:es)?\b` / all / 5 / fwd: MCL 500.2227; MCL 500.2845; MCL 554.601b; MCL 554.603; MCL 554.613 [heading-only, read: MCL 554.611]
- `(?:\b(?:vacat(?:e|es|ed|ing|ion)|surrender(?:s|ed|ing)?|mov(?:e|es|ed|ing) out|move-out)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 1 / vac.ab: MCL 554.601b
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:vacat(?:e|es|ed|ing|ion)|surrender(?:s|ed|ing)?|mov(?:e|es|ed|ing) out|move-out)\b)` / all / 1 / vac.ba: MCL 567.222
- `\A(?=[\s\S]*(?:\b(?:vacat(?:e|es|ed|ing|ion)|surrender(?:s|ed|ing)?|mov(?:e|es|ed|ing) out|move-out)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 3 / vac.and: MCL 554.601b; MCL 567.222; MCL 750.50
- `(?:\bnotice of (?:intent(?:ion)? to )?(?:vacate|vacating|termination|terminate|surrender|move)\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 0 / ntv.ab
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\bnotice of (?:intent(?:ion)? to )?(?:vacate|vacating|termination|terminate|surrender|move)\b)` / all / 1 / ntv.ba: MCL 333.13522
- `\A(?=[\s\S]*(?:\bnotice of (?:intent(?:ion)? to )?(?:vacate|vacating|termination|terminate|surrender|move)\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 1 / ntv.and: MCL 333.13522
- `(?:\b(?:condition(?:s|ed|al)? (?:of|on|upon|precedent)|forfeit(?:s|ed|ure)?)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 5 / cond.ab: MCL 554.601; MCL 554.608; MCL 750.49; MCL 750.50; MCL 750.50b
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:condition(?:s|ed|al)? (?:of|on|upon|precedent)|forfeit(?:s|ed|ure)?)\b)` / all / 7 / cond.ba: MCL 554.601; MCL 554.608; MCL 554.609; MCL 750.49; MCL 750.50; MCL 750.50b; 2026-PA-0102
- `\A(?=[\s\S]*(?:\b(?:condition(?:s|ed|al)? (?:of|on|upon|precedent)|forfeit(?:s|ed|ure)?)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 8 / cond.and: MCL 554.601; MCL 554.608; MCL 554.609; MCL 750.49; MCL 750.50; MCL 750.50b; 2026-PA-0102; Mich Admin Code R 460.131
- `(?:\b(?:return(?:s|ed|ing)? (?:of )?(?:the |all )?keys?|keys? (?:are|is) returned)\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 0 / keys.ab
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\b(?:return(?:s|ed|ing)? (?:of )?(?:the |all )?keys?|keys? (?:are|is) returned)\b)` / all / 0 / keys.ba
- `\A(?=[\s\S]*(?:\b(?:return(?:s|ed|ing)? (?:of )?(?:the |all )?keys?|keys? (?:are|is) returned)\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 0 / keys.and
- positive fwd @ MCL 554.603: passed ("forwarding mailing address")
- positive vac @ MCL 554.601b: passed ("does not take effect before the tenant vacates the premises. Nothing in this section shall prevent a landlord from withh")
- positive ntv @ SYNTH: passed ("the tenant gives a notice of intent to vacate, the landlord shall return the deposit")
- positive cond @ MCL 554.609: passed ("otherwise you will forfeit the amount claimed for damages")
- positive keys @ SYNTH: passed ("the deposit will be refunded only after the return of all keys")

**MIG-B2-007** (superseded by MIG-B2-012), topic `fee-in-lieu-of-deposit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:30:35. fee or insurance product in place of a security deposit
- summary: Battery MIG-B2-007 (inlieu.ab 0; inlieu.ba 0; inlieu.and 0; feeil.ab 0; feeil.ba 0; feeil.and 0; bond.ab 4; bond.ba 6; bond.and 11; alt 0 units hit when run; 3 of 4 positives passed; controls passed (nonsense 0, must-hit 147)) positive inlieu@MCL 554.613 recorded as failed
- `(?:\bin (?:lieu|place) of\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 0 / inlieu.ab
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\bin (?:lieu|place) of\b)` / all / 0 / inlieu.ba
- `\A(?=[\s\S]*(?:\bin (?:lieu|place) of\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 0 / inlieu.and
- `(?:\b(?:fees?|charges?|premiums?)\b)[\s\S]{0,1200}?(?:\bin (?:lieu|place) of (?:a |the |any )?(?:security )?deposits?\b)` / all / 0 / feeil.ab
- `(?:\bin (?:lieu|place) of (?:a |the |any )?(?:security )?deposits?\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|premiums?)\b)` / all / 0 / feeil.ba
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|premiums?)\b))(?=[\s\S]*(?:\bin (?:lieu|place) of (?:a |the |any )?(?:security )?deposits?\b))` / all / 0 / feeil.and
- `(?:\b(?:surety|insur(?:ance|er|ers|ed))\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 4 / bond.ab: MCL 125.1458c; MCL 554.604; MCL 567.222; MCL 600.5074
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:surety|insur(?:ance|er|ers|ed))\b)` / all / 6 / bond.ba: MCL 206.607; MCL 554.603; MCL 554.604; MCL 554.633; MCL 567.222; 2026-PA-0103
- `\A(?=[\s\S]*(?:\b(?:surety|insur(?:ance|er|ers|ed))\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 11 / bond.and: MCL 18.361; MCL 125.1458c; MCL 206.607; MCL 208.1111; MCL 554.603; MCL 554.604; MCL 554.633; MCL 567.222; MCL 600.5074; MCL 750.49; 2026-PA-0103
- `\b(?:deposit alternatives?|deposit replacement|deposit waiver|security deposit insurance|lease guarantee insurance|rent guarantee|deposit-free)\b` / all / 0 / alt
- positive inlieu @ MCL 554.613: FAILED ("in lieu thereof return the balance of the security deposit")
- positive feeil @ SYNTH: passed ("a monthly fee in lieu of a security deposit")
- positive bond @ MCL 554.604: passed ("surety bond written by a surety company licensed to do business in this state")
- positive alt @ SYNTH: passed ("a security deposit insurance program")

**MIG-B2-008** (cited), topic `holding-deposit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:31:00. pre-lease holding deposit or earnest money
- summary: Battery MIG-B2-008 (hold.ab 0; hold.ba 0; hold.and 0; hdplain 0; prosp.ab 4; prosp.ba 5; prosp.and 7; restore.ab 13; restore.ba 12; restore.and 26 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:holding (?:deposits?|fees?)|earnest money|reservation (?:fees?|deposits?)|application deposits?)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 0 / hold.ab
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:holding (?:deposits?|fees?)|earnest money|reservation (?:fees?|deposits?)|application deposits?)\b)` / all / 0 / hold.ba
- `\A(?=[\s\S]*(?:\b(?:holding (?:deposits?|fees?)|earnest money|reservation (?:fees?|deposits?)|application deposits?)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 0 / hold.and
- `\b(?:holding deposits?|earnest money)\b` / all / 0 / hdplain
- `(?:\bprospective (?:tenants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\b(?:deposits?|fees?|money|payments?)\b)` / all / 4 / prosp.ab: MCL 37.2502; MCL 125.2338; MCL 554.601c; 2026-PA-0102
- `(?:\b(?:deposits?|fees?|money|payments?)\b)[\s\S]{0,1200}?(?:\bprospective (?:tenants?|lessees?|renters?|residents?)\b)` / all / 5 / prosp.ba: MCL 37.2502; MCL 125.2338; MCL 339.2512b; MCL 554.601; MCL 554.601c
- `\A(?=[\s\S]*(?:\bprospective (?:tenants?|lessees?|renters?|residents?)\b))(?=[\s\S]*(?:\b(?:deposits?|fees?|money|payments?)\b))` / all / 7 / prosp.and: MCL 37.2502; MCL 125.2338; MCL 339.2512b; MCL 554.601; MCL 554.601c; MCL 600.5718; 2026-PA-0102
- `(?:\brestor(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:\b(?:deposits?|down payments?)\b)` / all / 13 / restore.ab: MCL 38.1388; MCL 256.687; MCL 257.320d; MCL 324.30311d; MCL 324.63527; MCL 324.72116; MCL 445.903; MCL 460.9q; MCL 500.5927; Mich Admin Code R 460.111; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.132
- `(?:\b(?:deposits?|down payments?)\b)[\s\S]{0,1200}?(?:\brestor(?:e|es|ed|ing)\b)` / all / 12 / restore.ba: MCL 38.19a; MCL 38.1388; MCL 257.811w; MCL 324.63527; MCL 399.808; MCL 500.901; MCL 500.5828; MCL 500.7020; Mich Admin Code R 460.109; Mich Admin Code R 460.111; Mich Admin Code R 460.130; Mich Admin Code R 460.131
- `\A(?=[\s\S]*(?:\brestor(?:e|es|ed|ing)\b))(?=[\s\S]*(?:\b(?:deposits?|down payments?)\b))` / all / 26 / restore.and: MCL 38.19a; MCL 38.1388; MCL 125.1432; MCL 205.53; MCL 207.653; MCL 256.687; MCL 257.320d; MCL 257.811w; MCL 324.30311d; MCL 324.63527; MCL 324.72116; MCL 324.76703; MCL 399.808; MCL 445.903; MCL 460.9q; MCL 500.561; MCL 500.901; MCL 500.5828; MCL 500.5927; MCL 500.7020; MCL 500.7708; Mich Admin Code R 460.109; Mich Admin Code R 460.111; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.132
- positive hold @ SYNTH: passed ("a holding deposit paid by a prospective tenant before the lease is signed")
- positive hdplain @ SYNTH: passed ("earnest money")
- positive prosp @ MCL 554.601c: passed ("prospective or current tenant in the price, terms, conditions, fees")
- positive restore @ MCL 445.903: passed ("promptly restore to the person or persons entitled to it a deposit, down payment, or other payment")

**MIG-B2-009** (cited), topic `nonrefundable-deposit-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:31:30. nonrefundable deposits or fees: statutory notice, separate document or labeling rule
- summary: Battery MIG-B2-009 (nonref 101; nonrefdep.ab 11; nonrefdep.ba 10; nonrefdep.and 18; nonreflt.ab 3; nonreflt.ba 1; nonreflt.and 6; denom.ab 0; denom.ba 0; denom.and 1; sepdoc.ab 0; sepdoc.ba 5; sepdoc.and 5 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bnon-?refundable\b` / all / 101 / nonref: MCL 28.306; MCL 28.425b; MCL 28.454; MCL 46.411; MCL 46.411a; MCL 125.1444c; MCL 125.2090m; MCL 125.2312; MCL 125.2328; MCL 168.163; MCL 168.193; MCL 168.254; MCL 168.303; MCL 168.349; MCL 168.795a; MCL 168.970c; MCL 168.972; MCL 206.281; MCL 206.677; MCL 206.678; MCL 206.717; MCL 208.1429; MCL 208.1431a; MCL 208.1431c; MCL 208.1434; MCL 208.1500; MCL 256.629; MCL 256.631; MCL 256.637; MCL 256.641; ... (71 more in the battery log) [heading-only, read: MCL 38.1022c; MCL 324.8317; MCL 333.21918; MCL 445.1658; MCL 487.2061; MCL 493.8; MCL 493.107]
- `(?:\bnon-?refundable\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 11 / nonrefdep.ab: MCL 28.425b; MCL 38.1022c; MCL 257.811e; MCL 257.1330; MCL 287.123; MCL 324.3118; MCL 324.51103; MCL 324.51201; MCL 432.308; MCL 432.408; MCL 445.1654 [heading-only, read: MCL 46.411a; MCL 168.163; MCL 168.193; MCL 168.254; MCL 324.8317]
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\bnon-?refundable\b)` / all / 10 / nonrefdep.ba: MCL 46.411a; MCL 168.163; MCL 168.193; MCL 168.254; MCL 168.795a; MCL 256.703; MCL 257.811e; MCL 287.123; MCL 445.1654; MCL 777.14h [heading-only, read: MCL 333.13522]
- `\A(?=[\s\S]*(?:\bnon-?refundable\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 18 / nonrefdep.and: MCL 28.306; MCL 28.425b; MCL 38.1022c; MCL 168.795a; MCL 256.703; MCL 257.811e; MCL 257.1330; MCL 287.123; MCL 324.3118; MCL 324.51103; MCL 324.51201; MCL 432.308; MCL 432.408; MCL 445.1654; MCL 450.2060; MCL 450.3060; MCL 554.937; MCL 777.14h [heading-only, read: MCL 46.411a; MCL 168.163; MCL 168.193; MCL 168.254; MCL 324.8317; MCL 333.13522]
- `(?:\bnon-?refundable\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 3 / nonreflt.ab: MCL 125.2328; MCL 432.207a; MCL 500.1283
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\bnon-?refundable\b)` / all / 1 / nonreflt.ba: MCL 125.2328
- `\A(?=[\s\S]*(?:\bnon-?refundable\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 6 / nonreflt.and: MCL 28.425b; MCL 125.1444c; MCL 125.2328; MCL 432.207a; MCL 500.1283; MCL 554.937
- `(?:\bhowever (?:denominated|designated|named|characterized|labell?ed)\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 0 / denom.ab
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\bhowever (?:denominated|designated|named|characterized|labell?ed)\b)` / all / 0 / denom.ba
- `\A(?=[\s\S]*(?:\bhowever (?:denominated|designated|named|characterized|labell?ed)\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 1 / denom.and: MCL 554.1052
- `(?:\b(?:separate (?:document|writing|notice|agreement|page|form)|conspicuous(?:ly)?|bold ?face|bold type|capital letters)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 0 / sepdoc.ab
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:separate (?:document|writing|notice|agreement|page|form)|conspicuous(?:ly)?|bold ?face|bold type|capital letters)\b)` / all / 5 / sepdoc.ba: MCL 554.603; MCL 554.608; MCL 554.609; 2026-PA-0102; Mich Admin Code R 460.148
- `\A(?=[\s\S]*(?:\b(?:separate (?:document|writing|notice|agreement|page|form)|conspicuous(?:ly)?|bold ?face|bold type|capital letters)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 5 / sepdoc.and: MCL 554.603; MCL 554.608; MCL 554.609; 2026-PA-0102; Mich Admin Code R 460.148
- positive nonref @ MCL 125.2328: passed ("refundable or nonrefundable exit fee")
- positive nonrefdep @ MCL 46.411a: passed ("nonrefundable filing fees, deposit and use of fees")
- positive nonreflt @ SYNTH: passed ("a nonrefundable fee charged to the tenant under the lease")
- positive denom @ SYNTH: passed ("any deposit, however denominated")
- positive sepdoc @ MCL 554.603: passed ("in 12 point boldface type")

**MIG-B2-010** (cited), topic `fee-unprovided-service`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:31:48. fee for a service not provided
- summary: Battery MIG-B2-010 (unprov.ab 57; unprov.ba 49; unprov.and 107; actual 58; promised 1; svcfee.ab 0; svcfee.ba 1; svcfee.and 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:fees?|charges?|charg(?:e|es|ed|ing))\b)[\s\S]{0,1200}?(?:\bnot (?:actually )?(?:provided|furnished|rendered|performed|received|supplied|delivered)\b)` / all / 57 / unprov.ab: MCL 15.234; MCL 38.1342; MCL 125.526; MCL 125.1444c; MCL 125.2330e; MCL 141.872; MCL 141.892; MCL 169.220; MCL 205.203; MCL 208.1435; MCL 211.44; MCL 211.59; MCL 257.236a; MCL 257.248; MCL 257.801; MCL 257.801g; MCL 257.1307a; MCL 324.3309; MCL 324.21548; MCL 324.43549; MCL 324.44106; MCL 324.80130k; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.16190; MCL 333.20936; MCL 390.976; MCL 390.1243; MCL 400.111e; ... (27 more in the battery log)
- `(?:\bnot (?:actually )?(?:provided|furnished|rendered|performed|received|supplied|delivered)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|charg(?:e|es|ed|ing))\b)` / all / 49 / unprov.ba: MCL 125.402; MCL 125.526; MCL 125.1444c; MCL 141.882; MCL 141.1322; MCL 141.1432; MCL 169.220; MCL 205.205; MCL 208.1410; MCL 211.10d; MCL 211.44; MCL 211.59; MCL 213.55; MCL 257.248; MCL 257.801; MCL 257.801g; MCL 257.1307a; MCL 324.3309; MCL 324.43549; MCL 324.44106; MCL 333.2653; MCL 333.16187d; MCL 333.20936; MCL 338.3467; MCL 390.1243; MCL 400.111e; MCL 400.610a; MCL 400.734b; MCL 408.658; MCL 423.9d; ... (19 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|charg(?:e|es|ed|ing))\b))(?=[\s\S]*(?:\bnot (?:actually )?(?:provided|furnished|rendered|performed|received|supplied|delivered)\b))` / all / 107 / unprov.and: MCL 15.234; MCL 15.235; MCL 38.1342; MCL 124.759; MCL 125.402; MCL 125.526; MCL 125.1422e; MCL 125.1444c; MCL 125.1513c; MCL 125.2330e; MCL 125.4412; MCL 141.872; MCL 141.882; MCL 141.892; MCL 141.1322; MCL 141.1432; MCL 169.220; MCL 205.93b; MCL 205.203; MCL 205.205; MCL 205.426d; MCL 206.520; MCL 208.1410; MCL 208.1435; MCL 208.1437; MCL 211.10d; MCL 211.44; MCL 211.59; MCL 211.78k; MCL 211.87b; ... (77 more in the battery log)
- `\bactually (?:provided|furnished|rendered|performed|received|supplied|delivered)\b` / all / 58 / actual: MCL 4.423; MCL 12.119; MCL 15.306; MCL 15.326; MCL 15.531; MCL 38.19a; MCL 41.724a; MCL 45.406; MCL 65.7; MCL 88.20; MCL 125.909; MCL 125.2470; MCL 125.2665a; MCL 125.4213b; MCL 125.4213c; MCL 125.4312a; MCL 125.4312b; MCL 125.4411a; MCL 125.4411b; MCL 141.613; MCL 168.951; MCL 168.952b; MCL 169.216; MCL 205.62; MCL 205.104b; MCL 207.1146; MCL 211.744; MCL 211.745; MCL 259.447; MCL 324.508; ... (28 more in the battery log)
- `\bprovide the promised benefits\b` / all / 1 / promised: MCL 445.903
- `(?:\b(?:fees?|charges?)\b)[\s\S]{0,1200}?(?:\bservices? (?:that (?:is|are|was|were) )?(?:not|never) (?:provided|rendered|furnished|performed|used)\b)` / all / 0 / svcfee.ab
- `(?:\bservices? (?:that (?:is|are|was|were) )?(?:not|never) (?:provided|rendered|furnished|performed|used)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?)\b)` / all / 1 / svcfee.ba: MCL 484.3114
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?)\b))(?=[\s\S]*(?:\bservices? (?:that (?:is|are|was|were) )?(?:not|never) (?:provided|rendered|furnished|performed|used)\b))` / all / 1 / svcfee.and: MCL 484.3114
- positive unprov @ SYNTH: passed ("charge the tenant a fee for a service that is not actually provided")
- positive actual @ SYNTH: passed ("fees for services actually provided")
- positive promised @ MCL 445.903: passed ("failure of the other party to the transaction to provide the promised benefits")
- positive svcfee @ SYNTH: passed ("a fee for services not provided to the tenant")

**MIG-B2-011** (superseded by MIG-B2-013), topic `late-fee-limit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:32:23. late fee cap or rule for residential tenancies, mobile home parks or other dwellings
- summary: Battery MIG-B2-011 (lateplain 61; latelt.ab 7; latelt.ba 6; latelt.and 12; latecap.ab 18; latecap.ba 19; latecap.and 32; latemh.ab 1; latemh.ba 1; latemh.and 1; delinq.ab 0; delinq.ba 0; delinq.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b` / all / 61 / lateplain: MCL 12.133; MCL 38.44a; MCL 38.1342; MCL 38.2211; MCL 38.2304; MCL 117.5k; MCL 125.1041; MCL 141.2303; MCL 141.2319; MCL 211.44; MCL 211.51; MCL 257.217; MCL 257.801; MCL 257.801h; MCL 257.801k; MCL 286.846; MCL 286.847; MCL 287.123; MCL 287.524; MCL 288.501; MCL 288.670; MCL 289.3105; MCL 289.4113; MCL 289.4115; MCL 324.8307a; MCL 324.8317; MCL 324.8715; MCL 328.213; MCL 328.214; MCL 333.13104; ... (31 more in the battery log) [heading-only, read: MCL 257.811]
- `(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 7 / latelt.ab: MCL 257.217; MCL 257.801h; MCL 445.957; MCL 445.958; MCL 445.970; MCL 570.523; MCL 570.525
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b)` / all / 6 / latelt.ba: MCL 257.217; MCL 257.801h; MCL 445.957; MCL 445.958; MCL 445.970; MCL 570.523
- `\A(?=[\s\S]*(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 12 / latelt.and: MCL 117.5k; MCL 257.217; MCL 257.801; MCL 257.801h; MCL 328.214; MCL 445.957; MCL 445.958; MCL 445.970; MCL 479.10; MCL 559.208; MCL 570.523; MCL 570.525
- `(?:\blate(?:-| )(?:payment )?(?:fees?|charges?)\b)[\s\S]{0,1200}?(?:(?:\bnot (?:more than|to exceed)\b|\bexceed(?:s|ing)?\b|\bmaximum\b|%|\bpercent\b))` / all / 18 / latecap.ab: MCL 38.44a; MCL 38.1342; MCL 38.2304; MCL 257.801; MCL 287.123; MCL 288.501; MCL 288.670; MCL 333.13104; MCL 333.21605; MCL 388.513; MCL 388.1935; MCL 432.111b; MCL 445.958; MCL 445.970; MCL 445.1856; MCL 460.629; MCL 570.523; Mich Admin Code R 460.125
- `(?:(?:\bnot (?:more than|to exceed)\b|\bexceed(?:s|ing)?\b|\bmaximum\b|%|\bpercent\b))[\s\S]{0,1200}?(?:\blate(?:-| )(?:payment )?(?:fees?|charges?)\b)` / all / 19 / latecap.ba: MCL 38.1342; MCL 38.2304; MCL 141.2303; MCL 141.2319; MCL 286.847; MCL 333.13104; MCL 333.21605; MCL 388.514; MCL 388.1904; MCL 432.111b; MCL 445.958; MCL 445.970; MCL 445.1856; MCL 460.629; MCL 484.3306; MCL 493.13; MCL 570.523; MCL 570.525; Mich Admin Code R 460.125
- `\A(?=[\s\S]*(?:\blate(?:-| )(?:payment )?(?:fees?|charges?)\b))(?=[\s\S]*(?:(?:\bnot (?:more than|to exceed)\b|\bexceed(?:s|ing)?\b|\bmaximum\b|%|\bpercent\b)))` / all / 32 / latecap.and: MCL 38.44a; MCL 38.1342; MCL 38.2304; MCL 117.5k; MCL 141.2303; MCL 141.2319; MCL 257.217; MCL 257.801; MCL 286.846; MCL 286.847; MCL 287.123; MCL 288.501; MCL 288.670; MCL 333.13104; MCL 333.21605; MCL 388.513; MCL 388.514; MCL 388.1903; MCL 388.1904; MCL 388.1935; MCL 390.1426; MCL 432.111b; MCL 445.958; MCL 445.970; MCL 445.1856; MCL 460.629; MCL 484.3306; MCL 493.13; MCL 570.523; MCL 570.525; ... (2 more in the battery log)
- `(?:\blate\b)[\s\S]{0,1200}?(?:\bmobile home (?:parks?|spaces?|sites?)\b)` / all / 1 / latemh.ab: MCL 600.5775
- `(?:\bmobile home (?:parks?|spaces?|sites?)\b)[\s\S]{0,1200}?(?:\blate\b)` / all / 1 / latemh.ba: MCL 600.5775
- `\A(?=[\s\S]*(?:\blate\b))(?=[\s\S]*(?:\bmobile home (?:parks?|spaces?|sites?)\b))` / all / 1 / latemh.and: MCL 600.5775
- `(?:\b(?:delinquen(?:t|cy) (?:fees?|charges?)|penalt(?:y|ies) for late)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 0 / delinq.ab [heading-only, read: MCL 141.121; MCL 324.80124]
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:delinquen(?:t|cy) (?:fees?|charges?)|penalt(?:y|ies) for late)\b)` / all / 0 / delinq.ba
- `\A(?=[\s\S]*(?:\b(?:delinquen(?:t|cy) (?:fees?|charges?)|penalt(?:y|ies) for late)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 1 / delinq.and: MCL 445.852 [heading-only, read: MCL 141.121; MCL 324.80124]
- positive lateplain @ Mich Admin Code R 460.125: passed ("late payment charge that is not more than 2%")
- positive latelt @ SYNTH: passed ("a late fee charged to a tenant for rent paid after the due date")
- positive latecap @ Mich Admin Code R 460.125: passed ("A utility may assess residential customers a late payment charge that is not more than 2%")
- positive latemh @ SYNTH: passed ("a late charge on rent for a site in a mobile home park")
- positive delinq @ SYNTH: passed ("a delinquency fee charged to the tenant")

**MIG-B2-012** (cited) (supersedes MIG-B2-007), topic `fee-in-lieu-of-deposit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:33:47. fee or insurance product in place of a security deposit (rerun of MIG-B2-007, whose inlieu positive failed: the pattern required "of" after "lieu")
- summary: Battery MIG-B2-012 (inlieu.ab 1; inlieu.ba 1; inlieu.and 1; feeil.ab 0; feeil.ba 0; feeil.and 0; bond.ab 4; bond.ba 6; bond.and 11; alt 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bin (?:lieu|place)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 1 / inlieu.ab: MCL 554.613
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\bin (?:lieu|place)\b)` / all / 1 / inlieu.ba: MCL 554.613
- `\A(?=[\s\S]*(?:\bin (?:lieu|place)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 1 / inlieu.and: MCL 554.613
- `(?:\b(?:fees?|charges?|premiums?)\b)[\s\S]{0,1200}?(?:\bin (?:lieu|place) of (?:a |the |any )?(?:security )?deposits?\b)` / all / 0 / feeil.ab
- `(?:\bin (?:lieu|place) of (?:a |the |any )?(?:security )?deposits?\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|premiums?)\b)` / all / 0 / feeil.ba
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|premiums?)\b))(?=[\s\S]*(?:\bin (?:lieu|place) of (?:a |the |any )?(?:security )?deposits?\b))` / all / 0 / feeil.and
- `(?:\b(?:surety|insur(?:ance|er|ers|ed))\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 4 / bond.ab: MCL 125.1458c; MCL 554.604; MCL 567.222; MCL 600.5074
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\b(?:surety|insur(?:ance|er|ers|ed))\b)` / all / 6 / bond.ba: MCL 206.607; MCL 554.603; MCL 554.604; MCL 554.633; MCL 567.222; 2026-PA-0103
- `\A(?=[\s\S]*(?:\b(?:surety|insur(?:ance|er|ers|ed))\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 11 / bond.and: MCL 18.361; MCL 125.1458c; MCL 206.607; MCL 208.1111; MCL 554.603; MCL 554.604; MCL 554.633; MCL 567.222; MCL 600.5074; MCL 750.49; 2026-PA-0103
- `\b(?:deposit alternatives?|deposit replacement|deposit waiver|security deposit insurance|lease guarantee insurance|rent guarantee|deposit-free)\b` / all / 0 / alt
- positive inlieu @ MCL 554.613: passed ("in lieu thereof return the balance of the security deposit")
- positive feeil @ SYNTH: passed ("a monthly fee in lieu of a security deposit")
- positive bond @ MCL 554.604: passed ("surety bond written by a surety company licensed to do business in this state")
- positive alt @ SYNTH: passed ("a security deposit insurance program")

**MIG-B2-013** (cited) (supersedes MIG-B2-011), topic `late-fee-limit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:34:22. late fee cap or rule for residential tenancies, mobile home parks or other dwellings (rerun of MIG-B2-011 for an INFLECTION line on maximum)
- summary: Battery MIG-B2-013 (lateplain 61; latelt.ab 7; latelt.ba 6; latelt.and 12; latecap.ab 18; latecap.ba 19; latecap.and 32; latemh.ab 1; latemh.ba 1; latemh.and 1; delinq.ab 0; delinq.ba 0; delinq.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b` / all / 61 / lateplain: MCL 12.133; MCL 38.44a; MCL 38.1342; MCL 38.2211; MCL 38.2304; MCL 117.5k; MCL 125.1041; MCL 141.2303; MCL 141.2319; MCL 211.44; MCL 211.51; MCL 257.217; MCL 257.801; MCL 257.801h; MCL 257.801k; MCL 286.846; MCL 286.847; MCL 287.123; MCL 287.524; MCL 288.501; MCL 288.670; MCL 289.3105; MCL 289.4113; MCL 289.4115; MCL 324.8307a; MCL 324.8317; MCL 324.8715; MCL 328.213; MCL 328.214; MCL 333.13104; ... (31 more in the battery log) [heading-only, read: MCL 257.811]
- `(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 7 / latelt.ab: MCL 257.217; MCL 257.801h; MCL 445.957; MCL 445.958; MCL 445.970; MCL 570.523; MCL 570.525
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b)` / all / 6 / latelt.ba: MCL 257.217; MCL 257.801h; MCL 445.957; MCL 445.958; MCL 445.970; MCL 570.523
- `\A(?=[\s\S]*(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 12 / latelt.and: MCL 117.5k; MCL 257.217; MCL 257.801; MCL 257.801h; MCL 328.214; MCL 445.957; MCL 445.958; MCL 445.970; MCL 479.10; MCL 559.208; MCL 570.523; MCL 570.525
- `(?:\blate(?:-| )(?:payment )?(?:fees?|charges?)\b)[\s\S]{0,1200}?(?:(?:\bnot (?:more than|to exceed)\b|\bexceed(?:s|ed|ing)?\b|\bmaxim(?:um|ums|a)\b|%|\bpercent\b))` / all / 18 / latecap.ab: MCL 38.44a; MCL 38.1342; MCL 38.2304; MCL 257.801; MCL 287.123; MCL 288.501; MCL 288.670; MCL 333.13104; MCL 333.21605; MCL 388.513; MCL 388.1935; MCL 432.111b; MCL 445.958; MCL 445.970; MCL 445.1856; MCL 460.629; MCL 570.523; Mich Admin Code R 460.125
- `(?:(?:\bnot (?:more than|to exceed)\b|\bexceed(?:s|ed|ing)?\b|\bmaxim(?:um|ums|a)\b|%|\bpercent\b))[\s\S]{0,1200}?(?:\blate(?:-| )(?:payment )?(?:fees?|charges?)\b)` / all / 19 / latecap.ba: MCL 38.1342; MCL 38.2304; MCL 141.2303; MCL 141.2319; MCL 286.847; MCL 333.13104; MCL 333.21605; MCL 388.514; MCL 388.1904; MCL 432.111b; MCL 445.958; MCL 445.970; MCL 445.1856; MCL 460.629; MCL 484.3306; MCL 493.13; MCL 570.523; MCL 570.525; Mich Admin Code R 460.125
- `\A(?=[\s\S]*(?:\blate(?:-| )(?:payment )?(?:fees?|charges?)\b))(?=[\s\S]*(?:(?:\bnot (?:more than|to exceed)\b|\bexceed(?:s|ed|ing)?\b|\bmaxim(?:um|ums|a)\b|%|\bpercent\b)))` / all / 32 / latecap.and: MCL 38.44a; MCL 38.1342; MCL 38.2304; MCL 117.5k; MCL 141.2303; MCL 141.2319; MCL 257.217; MCL 257.801; MCL 286.846; MCL 286.847; MCL 287.123; MCL 288.501; MCL 288.670; MCL 333.13104; MCL 333.21605; MCL 388.513; MCL 388.514; MCL 388.1903; MCL 388.1904; MCL 388.1935; MCL 390.1426; MCL 432.111b; MCL 445.958; MCL 445.970; MCL 445.1856; MCL 460.629; MCL 484.3306; MCL 493.13; MCL 570.523; MCL 570.525; ... (2 more in the battery log)
- `(?:\blate\b)[\s\S]{0,1200}?(?:\bmobile home (?:parks?|spaces?|sites?)\b)` / all / 1 / latemh.ab: MCL 600.5775
- `(?:\bmobile home (?:parks?|spaces?|sites?)\b)[\s\S]{0,1200}?(?:\blate\b)` / all / 1 / latemh.ba: MCL 600.5775
- `\A(?=[\s\S]*(?:\blate\b))(?=[\s\S]*(?:\bmobile home (?:parks?|spaces?|sites?)\b))` / all / 1 / latemh.and: MCL 600.5775
- `(?:\b(?:delinquen(?:t|cy) (?:fees?|charges?)|penalt(?:y|ies) for late)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 0 / delinq.ab [heading-only, read: MCL 141.121; MCL 324.80124]
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:delinquen(?:t|cy) (?:fees?|charges?)|penalt(?:y|ies) for late)\b)` / all / 0 / delinq.ba
- `\A(?=[\s\S]*(?:\b(?:delinquen(?:t|cy) (?:fees?|charges?)|penalt(?:y|ies) for late)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 1 / delinq.and: MCL 445.852 [heading-only, read: MCL 141.121; MCL 324.80124]
- positive lateplain @ Mich Admin Code R 460.125: passed ("late payment charge that is not more than 2%")
- positive latelt @ SYNTH: passed ("a late fee charged to a tenant for rent paid after the due date")
- positive latecap @ Mich Admin Code R 460.125: passed ("A utility may assess residential customers a late payment charge that is not more than 2%")
- positive latemh @ SYNTH: passed ("a late charge on rent for a site in a mobile home park")
- positive delinq @ SYNTH: passed ("a delinquency fee charged to the tenant")

**MIG-B2-014** (cited), topic `statutory-caps`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:34:44. statutory dollar, percentage or multiple caps tied to residential landlords and tenants
- summary: Battery MIG-B2-014 (capnear.ab 69; capnear.ba 60; capnear.and 147; months 3; feecap.ab 34; feecap.ba 39; feecap.and 59 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:landlords?|tenants?|lessors?|lessees?|rental units?|rental agreements?|rent)\b)[\s\S]{0,1200}?(?:(?:\bnot (?:to )?exceed(?:ing)?\b|\bshall not exceed\b|\bnot more than \$|\bmaxim(?:um|ums|a) (?:of|amount)\b))` / all / 69 / capnear.ab: MCL 18.361; MCL 35.491; MCL 38.1137; MCL 125.526; MCL 125.1444; MCL 125.1444c; MCL 125.1608; MCL 125.2328c; MCL 125.2706; MCL 125.4207; MCL 205.54d; MCL 206.508; MCL 206.520; MCL 206.527a; MCL 207.218; MCL 207.659; MCL 207.709; MCL 208.1201; MCL 208.1437; MCL 257.217; MCL 257.226a; MCL 257.233b; MCL 257.625n; MCL 285.142; MCL 285.166; MCL 324.8520; MCL 324.43547; MCL 324.64107; MCL 324.80124; MCL 324.81133; ... (39 more in the battery log)
- `(?:(?:\bnot (?:to )?exceed(?:ing)?\b|\bshall not exceed\b|\bnot more than \$|\bmaxim(?:um|ums|a) (?:of|amount)\b))[\s\S]{0,1200}?(?:\b(?:landlords?|tenants?|lessors?|lessees?|rental units?|rental agreements?|rent)\b)` / all / 60 / capnear.ba: MCL 18.361; MCL 18.1373; MCL 29.1; MCL 35.273; MCL 35.491; MCL 38.1137; MCL 125.661a; MCL 125.985; MCL 125.1444; MCL 125.1444c; MCL 125.2652; MCL 125.4207; MCL 206.508; MCL 206.527a; MCL 207.218; MCL 207.709; MCL 208.1201; MCL 208.1410; MCL 208.1410a; MCL 211.1155; MCL 257.226a; MCL 257.233b; MCL 257.625n; MCL 257.717; MCL 285.166; MCL 289.1111; MCL 324.8520; MCL 324.21310a; MCL 324.43547; MCL 324.61503c; ... (30 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:landlords?|tenants?|lessors?|lessees?|rental units?|rental agreements?|rent)\b))(?=[\s\S]*(?:(?:\bnot (?:to )?exceed(?:ing)?\b|\bshall not exceed\b|\bnot more than \$|\bmaxim(?:um|ums|a) (?:of|amount)\b)))` / all / 147 / capnear.and: MCL 18.361; MCL 18.1373; MCL 28.425b; MCL 29.1; MCL 35.273; MCL 35.491; MCL 37.1103; MCL 38.1137; MCL 110.20; MCL 117.4a; MCL 117.4q; MCL 117.5k; MCL 124.473; MCL 125.526; MCL 125.661a; MCL 125.985; MCL 125.1415a; MCL 125.1432; MCL 125.1444; MCL 125.1444c; MCL 125.1608; MCL 125.2328c; MCL 125.2652; MCL 125.2706; MCL 125.4207; MCL 125.4402; MCL 141.1355; MCL 141.1369; MCL 205.54d; MCL 205.762; ... (117 more in the battery log)
- `\bmonths?\W{0,2} rent\b` / all / 3 / months: MCL 554.601b; MCL 554.602; MCL 570.525
- `(?:\b(?:fees?|charges?)\b)[\s\S]{0,1200}?(?:\b(?:landlords?|tenants?)\b)` / all / 34 / feecap.ab: MCL 37.2502; MCL 124.763; MCL 125.657; MCL 125.1411; MCL 125.1444c; MCL 125.2328; MCL 141.121; MCL 141.1369; MCL 211.7cc; MCL 213.55; MCL 320.2033; MCL 400.57i; MCL 427.201; MCL 427.203; MCL 460.9d; MCL 500.2103; MCL 554.601b; MCL 554.601c; MCL 554.612; MCL 554.633; MCL 554.636; MCL 554.1052; MCL 570.523; MCL 570.525; MCL 570.526; MCL 600.2919; MCL 600.2928; MCL 600.5739; MCL 600.5775; MCL 600.5779; ... (4 more in the battery log)
- `(?:\b(?:landlords?|tenants?)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?)\b)` / all / 39 / feecap.ba: MCL 37.2502; MCL 124.763; MCL 125.1444; MCL 125.1575; MCL 125.2328; MCL 125.2338; MCL 141.121; MCL 141.1369; MCL 206.508; MCL 208.1410; MCL 211.9; MCL 211.761; MCL 259.117; MCL 259.144; MCL 319.108; MCL 324.50104; MCL 324.63304; MCL 400.57i; MCL 427.201; MCL 427.203; MCL 438.31c; MCL 460.9d; MCL 554.601b; MCL 554.601c; MCL 554.612; MCL 554.633; MCL 554.1052; MCL 570.523; MCL 570.525; MCL 570.526; ... (9 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?)\b))(?=[\s\S]*(?:\b(?:landlords?|tenants?)\b))` / all / 59 / feecap.and: MCL 37.2502; MCL 124.763; MCL 125.657; MCL 125.1411; MCL 125.1422b; MCL 125.1444; MCL 125.1444c; MCL 125.1575; MCL 125.2328; MCL 125.2338; MCL 125.4207; MCL 125.4402; MCL 141.121; MCL 141.1369; MCL 205.426; MCL 206.508; MCL 208.1410; MCL 211.7cc; MCL 211.9; MCL 211.27a; MCL 211.78t; MCL 211.761; MCL 213.55; MCL 259.117; MCL 259.144; MCL 259.145; MCL 319.108; MCL 320.2033; MCL 324.50104; MCL 324.63304; ... (29 more in the battery log)
- positive capnear @ MCL 554.602: passed ("shall not exceed 1 1/2 months' rent")
- positive months @ MCL 554.602: passed ("1 1/2 months' rent")
- positive feecap @ MCL 554.633: passed ("without the tenant incurring an additional charge or fee")

**MIG-B2-015** (cited), topic `required-fees`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:35:11. lease must list every fee; total-payment statement; common-area fee bar
- summary: Battery MIG-B2-015 (feera.ab 12; feera.ba 11; feera.and 17; totalpay 0; nonopt 8; cam 0; incident 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:fees?|charges?)\b)[\s\S]{0,1200}?(?:\brental agreements?\b)` / all / 12 / feera.ab: MCL 324.80124; MCL 399.508; MCL 432.111a; MCL 445.903h; MCL 500.1202; MCL 554.633; MCL 554.636; MCL 570.523; MCL 570.525; MCL 570.526; MCL 600.5775; 2026-PA-0103
- `(?:\brental agreements?\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?)\b)` / all / 11 / feera.ba: MCL 324.80124; MCL 399.508; MCL 432.111a; MCL 436.1913; MCL 445.903h; MCL 554.633; MCL 554.636; MCL 554.1052; MCL 570.523; MCL 600.5775; 2026-PA-0103
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?)\b))(?=[\s\S]*(?:\brental agreements?\b))` / all / 17 / feera.and: MCL 18.1221; MCL 324.80124; MCL 324.80201; MCL 399.508; MCL 432.111a; MCL 436.1913; MCL 445.903h; MCL 500.1202; MCL 554.601b; MCL 554.633; MCL 554.636; MCL 554.1052; MCL 570.523; MCL 570.525; MCL 570.526; MCL 600.5775; 2026-PA-0103
- `\btotal (?:monthly|periodic) (?:payments?|rent|charges?)\b` / all / 0 / totalpay
- `\b(?:nonoptional|non-optional|mandatory) (?:fees?|charges?)\b` / all / 8 / nonopt: MCL 124.508a; MCL 388.1817a; MCL 388.1817b; MCL 388.1848; MCL 388.1856; MCL 390.1424; MCL 390.1717; MCL 445.903h
- `\bcommon areas? (?:maintenance )?(?:fees?|charges?)\b` / all / 0 / cam
- `\bincident of tenancy\b` / all / 1 / incident: MCL 125.2328
- positive feera @ MCL 554.633: passed ("attorney fees incurred by another party, in connection with a dispute arising under the rental agreement")
- positive totalpay @ SYNTH: passed ("the total monthly payment")
- positive nonopt @ SYNTH: passed ("all mandatory fees")
- positive cam @ SYNTH: passed ("a common area maintenance fee")
- positive incident @ MCL 125.2328: passed ("included in the rental charge as an incident of tenancy")

**MIG-B2-016** (cited), topic `governmental-fines`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:35:39. passing governmental fines or abatement costs to a tenant; tenant liability for nuisance abatement
- summary: Battery MIG-B2-016 (reimb.ab 132; reimb.ba 133; reimb.and 290; occ 3; finet.ab 51; finet.ba 76; finet.and 132; nuis.ab 14; nuis.ba 17; nuis.and 24 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:reimburs(?:e|es|ed|ing|ement)|liable to the (?:owner|landlord|lessor)|assess(?:es|ed|ing)? the cost against|charg(?:e|es|ed|ing) (?:back )?to the (?:tenant|occupant)s?)\b)[\s\S]{0,1200}?(?:\b(?:fines?|penalt(?:y|ies)|abat(?:e|es|ed|ing|ement)|violations?)\b)` / all / 132 / reimb.ab: MCL 4.416a; MCL 4.416d; MCL 4.417; MCL 4.420; MCL 4.421; MCL 15.305; MCL 15.325; MCL 18.355a; MCL 28.468; MCL 55.300a; MCL 55.311; MCL 125.1992; MCL 125.2652; MCL 125.2663b; MCL 141.896; MCL 169.255; MCL 205.427; MCL 207.631; MCL 211.43; MCL 211.78m; MCL 247.327; MCL 256.701; MCL 257.248j; MCL 257.321a; MCL 257.323d; MCL 257.625; MCL 257.625h; MCL 257.629e; MCL 257.1820; MCL 259.185; ... (102 more in the battery log) [heading-only, read: MCL 712A.18]
- `(?:\b(?:fines?|penalt(?:y|ies)|abat(?:e|es|ed|ing|ement)|violations?)\b)[\s\S]{0,1200}?(?:\b(?:reimburs(?:e|es|ed|ing|ement)|liable to the (?:owner|landlord|lessor)|assess(?:es|ed|ing)? the cost against|charg(?:e|es|ed|ing) (?:back )?to the (?:tenant|occupant)s?)\b)` / all / 133 / reimb.ba: MCL 4.416a; MCL 4.416d; MCL 4.417; MCL 4.420; MCL 4.421; MCL 15.305; MCL 15.325; MCL 28.425b; MCL 28.468; MCL 42.14a; MCL 45.515; MCL 55.300a; MCL 55.305; MCL 125.534; MCL 125.2663b; MCL 125.2665; MCL 169.230b.added; MCL 169.255; MCL 205.4a; MCL 205.111; MCL 205.427; MCL 206.659; MCL 206.665; MCL 208.1269; MCL 208.1305; MCL 211.78m; MCL 211.1057a; MCL 247.327; MCL 254.235; MCL 256.701; ... (103 more in the battery log) [heading-only, read: MCL 257.618a; MCL 400.724]
- `\A(?=[\s\S]*(?:\b(?:reimburs(?:e|es|ed|ing|ement)|liable to the (?:owner|landlord|lessor)|assess(?:es|ed|ing)? the cost against|charg(?:e|es|ed|ing) (?:back )?to the (?:tenant|occupant)s?)\b))(?=[\s\S]*(?:\b(?:fines?|penalt(?:y|ies)|abat(?:e|es|ed|ing|ement)|violations?)\b))` / all / 290 / reimb.and: MCL 3.692; MCL 3.1012; MCL 3.1041; MCL 4.416a; MCL 4.416d; MCL 4.417; MCL 4.418; MCL 4.420; MCL 4.421; MCL 4.1851; MCL 12.181; MCL 12.194; MCL 15.305; MCL 15.325; MCL 18.355a; MCL 18.424; MCL 18.1695; MCL 28.425b; MCL 28.468; MCL 38.1133; MCL 38.1174; MCL 38.1176; MCL 38.1342; MCL 42.14a; MCL 45.515; MCL 55.300a; MCL 55.305; MCL 55.311; MCL 69.22; MCL 78.26; ... (260 more in the battery log) [heading-only, read: MCL 257.618a; MCL 400.724; MCL 712A.18]
- `\bcaused by the (?:occupants?|tenants?)\b` / all / 3 / occ: MCL 125.530; MCL 554.139; MCL 554.608
- `(?:\b(?:civil )?fines?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)` / all / 51 / finet.ab: MCL 28.456; MCL 125.3204; MCL 205.426d; MCL 211.9; MCL 211.27a; MCL 247.64; MCL 257.631; MCL 257.675c; MCL 257.724; MCL 257.1859; MCL 324.1615; MCL 324.8520; MCL 324.9308; MCL 324.47905; MCL 324.48714a; MCL 324.61503c; MCL 324.78119; MCL 324.80180; MCL 330.1134a; MCL 333.5475a; MCL 333.5477; MCL 333.13325; MCL 333.13523; MCL 333.20173a; MCL 333.21311a; MCL 397.33; MCL 397.35; MCL 400.586j; MCL 400.731; MCL 400.734b; ... (21 more in the battery log)
- `(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\b(?:civil )?fines?\b)` / all / 76 / finet.ba: MCL 28.422; MCL 28.456; MCL 105.7; MCL 105.18; MCL 117.28; MCL 125.1041; MCL 125.3204; MCL 211.27a; MCL 211.78t; MCL 213.116; MCL 239.6; MCL 247.64; MCL 257.625n; MCL 257.631; MCL 257.724; MCL 257.742; MCL 257.1859; MCL 259.85; MCL 324.1616; MCL 324.8520; MCL 324.43528c; MCL 324.43558; MCL 324.48714a; MCL 324.78119; MCL 324.80180; MCL 324.81140a; MCL 324.82147a; MCL 330.1137; MCL 333.13325; MCL 333.13523; ... (46 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:civil )?fines?\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b))` / all / 132 / finet.and: MCL 3.1012; MCL 28.291; MCL 28.304; MCL 28.422; MCL 28.425b; MCL 28.456; MCL 29.19a; MCL 105.7; MCL 105.18; MCL 117.28; MCL 125.1041; MCL 125.1352; MCL 125.3204; MCL 168.303; MCL 168.544c; MCL 169.221; MCL 169.251; MCL 169.251.amended; MCL 205.426; MCL 205.426d; MCL 211.9; MCL 211.27a; MCL 211.78t; MCL 213.116; MCL 239.6; MCL 247.64; MCL 256.637; MCL 257.222; MCL 257.624b; MCL 257.625n; ... (102 more in the battery log)
- `(?:\bnuisances?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)` / all / 14 / nuis.ab: MCL 67.10; MCL 67.29; MCL 101.12; MCL 103.4; MCL 125.402; MCL 125.485; MCL 259.441; MCL 333.2455; MCL 433.14a; MCL 455.58; MCL 455.212; MCL 600.2918; MCL 600.2941; MCL 600.3805
- `(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\bnuisances?\b)` / all / 17 / nuis.ba: MCL 67.9; MCL 67.10; MCL 67.29; MCL 101.12; MCL 103.3; MCL 103.4; MCL 125.402; MCL 128.31; MCL 259.441; MCL 324.3310; MCL 333.2455; MCL 455.12; MCL 455.58; MCL 455.212; MCL 600.2918; MCL 600.2941; MCL 600.3805
- `\A(?=[\s\S]*(?:\bnuisances?\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b))` / all / 24 / nuis.and: MCL 67.9; MCL 67.10; MCL 67.29; MCL 91.1; MCL 101.12; MCL 103.3; MCL 103.4; MCL 125.402; MCL 125.485; MCL 125.2652; MCL 128.31; MCL 259.441; MCL 280.424; MCL 324.3310; MCL 324.11502; MCL 324.43528c; MCL 333.2455; MCL 433.14a; MCL 455.12; MCL 455.58; MCL 455.212; MCL 600.2918; MCL 600.2941; MCL 600.3805
- positive reimb @ MCL 125.534: passed ("assess the cost against the occupant")
- positive occ @ MCL 125.530: passed ("were caused by the occupant or occupants")
- positive finet @ SYNTH: passed ("the tenant shall pay any fine imposed on the owner")
- positive nuis @ MCL 600.2918: passed ("Introduction of noise, odor, or other nuisance")

**MIG-B2-017** (cited), topic `government-fee-reimbursement`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:36:01. passing a government rental registration, licensing or inspection fee to a tenant
- summary: Battery MIG-B2-017 (regfee.ab 10; regfee.ba 15; regfee.and 29; inspfee 52; passon.ab 4; passon.ba 3; passon.and 8; lawchg 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:registration|licens(?:e|ing)|inspection|certification|certificate(?: of compliance)?) fees?\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 10 / regfee.ab: MCL 257.217; MCL 257.217c; MCL 257.226; MCL 257.1401; MCL 338.3633; MCL 432.207a; MCL 436.1533; MCL 440.1203; MCL 445.1015; MCL 554.903
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:registration|licens(?:e|ing)|inspection|certification|certificate(?: of compliance)?) fees?\b)` / all / 15 / regfee.ba: MCL 125.526; MCL 125.2328a; MCL 208.1437; MCL 257.217c; MCL 257.1401; MCL 285.67; MCL 285.71; MCL 330.1137; MCL 333.5474b; MCL 333.5474b[1]; MCL 432.111a; MCL 432.207a; MCL 440.1203; MCL 445.1015; Const 1963, art. IX, § 40
- `\A(?=[\s\S]*(?:\b(?:registration|licens(?:e|ing)|inspection|certification|certificate(?: of compliance)?) fees?\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 29 / regfee.and: MCL 28.425b; MCL 117.5k; MCL 125.526; MCL 125.2328a; MCL 208.1437; MCL 257.217; MCL 257.217c; MCL 257.226; MCL 257.801; MCL 257.1401; MCL 285.67; MCL 285.71; MCL 324.80124; MCL 324.82101; MCL 324.82106; MCL 330.1137; MCL 333.5474b; MCL 333.5474b[1]; MCL 338.3633; MCL 400.713; MCL 432.111a; MCL 432.207a; MCL 432.309; MCL 432.409; MCL 436.1533; MCL 440.1203; MCL 445.1015; MCL 554.903; Const 1963, art. IX, § 40
- `\binspection fees?\b` / all / 52 / inspfee: MCL 29.2c; MCL 125.526; MCL 125.2090a; MCL 125.2328a; MCL 208.1437; MCL 257.217c; MCL 257.716; MCL 257.725; MCL 257.1243; MCL 286.206; MCL 286.209; MCL 286.210; MCL 286.217a; MCL 286.682; MCL 286.711; MCL 287.113; MCL 287.123; MCL 287.334; MCL 287.339b; MCL 287.524; MCL 287.526; MCL 287.534; MCL 287.958; MCL 287.1014; MCL 287.1114; MCL 287.1122b; MCL 290.755; MCL 290.757; MCL 324.6310; MCL 324.8317; ... (22 more in the battery log) [heading-only, read: MCL 290.610a; MCL 324.9105; MCL 333.13727; MCL 333.16303; MCL 339.405]
- `(?:\bpass(?:ed|es|ing)? (?:on|through|along)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)` / all / 4 / passon.ab: MCL 324.3122; MCL 445.953; MCL 445.970; MCL 455.58
- `(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\bpass(?:ed|es|ing)? (?:on|through|along)\b)` / all / 3 / passon.ba: MCL 224.18; MCL 324.3122; MCL 445.953
- `\A(?=[\s\S]*(?:\bpass(?:ed|es|ing)? (?:on|through|along)\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b))` / all / 8 / passon.and: MCL 125.2029h; MCL 211.14; MCL 224.18; MCL 324.3122; MCL 445.953; MCL 445.970; MCL 455.58; MCL 722.115n
- `\bchanges required by federal, state, or local law\b` / all / 2 / lawchg: MCL 554.633; 2026-PA-0103
- positive regfee @ SYNTH: passed ("a rental registration fee charged to the landlord")
- positive inspfee @ SYNTH: passed ("reasonable inspection fees")
- positive passon @ SYNTH: passed ("the fee may be passed on to tenants")
- positive lawchg @ MCL 554.633: passed ("Changes required by federal, state, or local law")

**MIG-B2-018** (superseded by MIG-B2-020), topic `alarm-tampering-fee`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:36:30. fee or penalty for removing, disabling or tampering with a smoke or carbon monoxide alarm
- summary: Battery MIG-B2-018 (tamper.ab 1; tamper.ba 1; tamper.and 2; alarmfee.ab 4; alarmfee.ba 4; alarmfee.and 9; sa 18; altenant.ab 6; altenant.ba 7; altenant.and 10 units hit when run; 3 of 4 positives passed; controls passed (nonsense 0, must-hit 147)) positive tamper@MCL 29.533 recorded as failed
- `(?:\b(?:tamper(?:s|ed|ing)?|disabl(?:e|es|ed|ing)|remov(?:e|es|ed|ing|al)|disconnect(?:s|ed|ing)?)\b)[\s\S]{0,1200}?(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)` / all / 1 / tamper.ab: Mich Admin Code R 408.30546
- `(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)[\s\S]{0,1200}?(?:\b(?:tamper(?:s|ed|ing)?|disabl(?:e|es|ed|ing)|remov(?:e|es|ed|ing|al)|disconnect(?:s|ed|ing)?)\b)` / all / 1 / tamper.ba: Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\b(?:tamper(?:s|ed|ing)?|disabl(?:e|es|ed|ing)|remov(?:e|es|ed|ing|al)|disconnect(?:s|ed|ing)?)\b))(?=[\s\S]*(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b))` / all / 2 / tamper.and: MCL 211.7cc; Mich Admin Code R 408.30546
- `(?:\b(?:fees?|charges?|fines?|costs?)\b)[\s\S]{0,1200}?(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)` / all / 4 / alarmfee.ab: MCL 29.533; MCL 125.482a; MCL 125.1504b; MCL 211.7cc
- `(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|fines?|costs?)\b)` / all / 4 / alarmfee.ba: MCL 29.533; MCL 125.482a; MCL 399.205; MCL 750.200j
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|fines?|costs?)\b))(?=[\s\S]*(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b))` / all / 9 / alarmfee.and: MCL 29.533; MCL 125.482a; MCL 125.1504b; MCL 125.1513c; MCL 125.4201; MCL 211.7cc; MCL 399.205; MCL 500.2111; MCL 750.200j
- `\bsmoke (?:alarms?|detectors?)\b` / all / 18 / sa: MCL 29.531; MCL 29.533; MCL 125.482a; MCL 125.1504b; MCL 125.1504c; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 125.4201; MCL 211.7cc; MCL 338.2182; MCL 339.5701; MCL 399.201a; MCL 399.205; MCL 427.1; MCL 427.3; MCL 500.2111; Mich Admin Code R 408.30546
- `(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)` / all / 6 / altenant.ab: MCL 125.1504d; MCL 125.1504f; MCL 125.1513c; MCL 399.205; MCL 427.3; Mich Admin Code R 408.30546
- `(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)` / all / 7 / altenant.ba: MCL 125.1504b; MCL 125.1504d; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b))` / all / 10 / altenant.and: MCL 125.1504b; MCL 125.1504d; MCL 125.1504f; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; MCL 399.205; MCL 427.3; Mich Admin Code R 408.30546
- positive tamper @ MCL 29.533: FAILED ("must not be powered by a replaceable or removable battery")
- positive alarmfee @ SYNTH: passed ("the tenant shall pay a fee for tampering with a smoke alarm")
- positive sa @ Mich Admin Code R 408.30546: passed ("smoke alarm")
- positive altenant @ SYNTH: passed ("the tenant shall not disable a smoke alarm")

**MIG-B2-019** (cited), topic `carpet-cleaning`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:36:53. move-out carpet cleaning requirement; carpet or paint age or condition test
- summary: Battery MIG-B2-019 (carpetage.ab 0; carpetage.ba 0; carpetage.and 0; paint.ab 0; paint.ba 3; paint.and 5; floor.ab 0; floor.ba 0; floor.and 0; carpetclean 0; wear 3 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bcarpet(?:s|ing|ed)?\b)[\s\S]{0,1200}?(?:\b(?:useful life|depreciat(?:e|es|ed|ing|ion)|years? old|age of)\b)` / all / 0 / carpetage.ab
- `(?:\b(?:useful life|depreciat(?:e|es|ed|ing|ion)|years? old|age of)\b)[\s\S]{0,1200}?(?:\bcarpet(?:s|ing|ed)?\b)` / all / 0 / carpetage.ba
- `\A(?=[\s\S]*(?:\bcarpet(?:s|ing|ed)?\b))(?=[\s\S]*(?:\b(?:useful life|depreciat(?:e|es|ed|ing|ion)|years? old|age of)\b))` / all / 0 / carpetage.and
- `(?:\bpaint(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\bdeposits?\b)` / all / 0 / paint.ab
- `(?:\bdeposits?\b)[\s\S]{0,1200}?(?:\bpaint(?:s|ed|ing)?\b)` / all / 3 / paint.ba: MCL 324.12101; MCL 324.60104; MCL 554.608
- `\A(?=[\s\S]*(?:\bpaint(?:s|ed|ing)?\b))(?=[\s\S]*(?:\bdeposits?\b))` / all / 5 / paint.and: MCL 211.27; MCL 324.12101; MCL 324.60104; MCL 431.320; MCL 554.608
- `(?:\bfloor coverings?\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 0 / floor.ab
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\bfloor coverings?\b)` / all / 0 / floor.ba
- `\A(?=[\s\S]*(?:\bfloor coverings?\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 0 / floor.and
- `\bcarpet clean(?:s|ed|ing|er|ers)?\b` / all / 0 / carpetclean
- `\b(?:ordinary|normal|reasonable) wear and tear\b` / all / 3 / wear: MCL 37.1506a; MCL 445.953; MCL 500.125
- positive carpetage @ SYNTH: passed ("carpeting that is more than 10 years old")
- positive paint @ MCL 554.608: passed ("paint")
- positive floor @ SYNTH: passed ("floor covering in a rental unit")
- positive carpetclean @ SYNTH: passed ("carpet cleaning")
- positive wear @ SYNTH: passed ("ordinary wear and tear")

**MIG-B2-020** (cited) (supersedes MIG-B2-018), topic `alarm-tampering-fee`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:39:33. fee or penalty for removing, disabling or tampering with a smoke or carbon monoxide alarm (rerun of MIG-B2-018, whose tamper positive named MCL 29.533, which says "removable", a form the pattern did not cover)
- summary: Battery MIG-B2-020 (tamper.ab 2; tamper.ba 2; tamper.and 3; alarmfee.ab 4; alarmfee.ba 4; alarmfee.and 9; sa 18; altenant.ab 6; altenant.ba 7; altenant.and 10 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:tamper(?:s|ed|ing)?|disabl(?:e|es|ed|ing)|(?:non)?remov(?:e|es|ed|ing|al|able)|disconnect(?:s|ed|ing)?)\b)[\s\S]{0,1200}?(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)` / all / 2 / tamper.ab: MCL 29.533; Mich Admin Code R 408.30546
- `(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)[\s\S]{0,1200}?(?:\b(?:tamper(?:s|ed|ing)?|disabl(?:e|es|ed|ing)|(?:non)?remov(?:e|es|ed|ing|al|able)|disconnect(?:s|ed|ing)?)\b)` / all / 2 / tamper.ba: MCL 29.533; Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\b(?:tamper(?:s|ed|ing)?|disabl(?:e|es|ed|ing)|(?:non)?remov(?:e|es|ed|ing|al|able)|disconnect(?:s|ed|ing)?)\b))(?=[\s\S]*(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b))` / all / 3 / tamper.and: MCL 29.533; MCL 211.7cc; Mich Admin Code R 408.30546
- `(?:\b(?:fees?|charges?|fines?|costs?)\b)[\s\S]{0,1200}?(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)` / all / 4 / alarmfee.ab: MCL 29.533; MCL 125.482a; MCL 125.1504b; MCL 211.7cc
- `(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|fines?|costs?)\b)` / all / 4 / alarmfee.ba: MCL 29.533; MCL 125.482a; MCL 399.205; MCL 750.200j
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|fines?|costs?)\b))(?=[\s\S]*(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b))` / all / 9 / alarmfee.and: MCL 29.533; MCL 125.482a; MCL 125.1504b; MCL 125.1513c; MCL 125.4201; MCL 211.7cc; MCL 399.205; MCL 500.2111; MCL 750.200j
- `\bsmoke (?:alarms?|detectors?)\b` / all / 18 / sa: MCL 29.531; MCL 29.533; MCL 125.482a; MCL 125.1504b; MCL 125.1504c; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 125.4201; MCL 211.7cc; MCL 338.2182; MCL 339.5701; MCL 399.201a; MCL 399.205; MCL 427.1; MCL 427.3; MCL 500.2111; Mich Admin Code R 408.30546
- `(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)` / all / 6 / altenant.ab: MCL 125.1504d; MCL 125.1504f; MCL 125.1513c; MCL 399.205; MCL 427.3; Mich Admin Code R 408.30546
- `(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b)` / all / 7 / altenant.ba: MCL 125.1504b; MCL 125.1504d; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\b(?:smoke|carbon monoxide) (?:alarms?|detectors?|detecting (?:alarm )?devices?|alarm devices?|devices?)\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b))` / all / 10 / altenant.and: MCL 125.1504b; MCL 125.1504d; MCL 125.1504f; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; MCL 399.205; MCL 427.3; Mich Admin Code R 408.30546
- positive tamper @ Mich Admin Code R 408.30546: passed ("without a disconnecting switch other than as required for overcurrent protection")
- positive alarmfee @ SYNTH: passed ("the tenant shall pay a fee for tampering with a smoke alarm")
- positive sa @ Mich Admin Code R 408.30546: passed ("smoke alarm")
- positive altenant @ SYNTH: passed ("the tenant shall not disable a smoke alarm")

**MIG-B2-021** (cited), topic `collection-fee`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:39:50. collection fee on a past-due rent debt; collection agency fee rules
- summary: Battery MIG-B2-021 (collfee 41; collt.ab 0; collt.ba 0; collt.and 2; origagr.ab 3; origagr.ba 3; origagr.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bcollection (?:fees?|costs?|charges?|expenses?)\b` / all / 41 / collfee: MCL 111.15; MCL 123.758; MCL 124.468; MCL 141.509; MCL 141.1164; MCL 207.277; MCL 211.27b; MCL 211.39a; MCL 211.43a; MCL 211.44; MCL 211.44a; MCL 211.48; MCL 211.152a; MCL 211.624; MCL 211.768; MCL 211.789; MCL 211.905; MCL 211.1025; MCL 257.801; MCL 257.801j; MCL 257.810b; MCL 324.33934; MCL 324.36101; MCL 324.51105; MCL 324.71106; MCL 333.2505; MCL 380.1611; MCL 380.1612; MCL 380.1613; MCL 388.1632v; ... (11 more in the battery log)
- `(?:\bcollection (?:fees?|costs?|charges?|expenses?|agenc(?:y|ies))\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 0 / collt.ab
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\bcollection (?:fees?|costs?|charges?|expenses?|agenc(?:y|ies))\b)` / all / 0 / collt.ba
- `\A(?=[\s\S]*(?:\bcollection (?:fees?|costs?|charges?|expenses?|agenc(?:y|ies))\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 2 / collt.and: MCL 257.801; MCL 324.33934
- `(?:\b(?:fees?|compensation)\b)[\s\S]{0,1200}?(?:\boriginal agreement\b)` / all / 3 / origagr.ab: MCL 259.134; MCL 339.915a; MCL 487.2155
- `(?:\boriginal agreement\b)[\s\S]{0,1200}?(?:\b(?:fees?|compensation)\b)` / all / 3 / origagr.ba: MCL 206.665; MCL 208.1305; MCL 487.2155
- `\A(?=[\s\S]*(?:\b(?:fees?|compensation)\b))(?=[\s\S]*(?:\boriginal agreement\b))` / all / 5 / origagr.and: MCL 206.665; MCL 208.1305; MCL 259.134; MCL 339.915a; MCL 487.2155
- positive collfee @ MCL 445.859: passed ("delinquency and collection charge")
- positive collt @ SYNTH: passed ("a collection fee charged to the tenant under the lease")
- positive origagr @ MCL 339.915a: passed ("collecting or receiving a fee or other compensation from a consumer for collecting a claim, other than a claim owed to t")

**MIG-B2-022** (cited), topic `notice-service-fee`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:40:11. lease charge for serving a notice or filing an eviction
- summary: Battery MIG-B2-022 (svcnotice.ab 37; svcnotice.ba 51; svcnotice.and 72; ntq 5; evfee.ab 1; evfee.ba 1; evfee.and 3 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:fees?|charges?|costs?)\b)[\s\S]{0,1200}?(?:\b(?:serv(?:e|es|ed|ing|ice) (?:of )?(?:a |the )?(?:notice|demand)s?|notices? to quit|demands? for possession)\b)` / all / 37 / svcnotice.ab: MCL 35.1035; MCL 41.724; MCL 125.2469; MCL 141.107b; MCL 141.112; MCL 141.932; MCL 211.78k; MCL 211.78n; MCL 211.79a; MCL 224.18; MCL 257.248j; MCL 280.154; MCL 322.497; MCL 324.51116; MCL 338.1723; MCL 445.3; MCL 445.1947; MCL 484.2102; MCL 487.3210; MCL 487.3215; MCL 487.3217; MCL 487.12203; MCL 487.12304; MCL 487.12306; MCL 490.210; MCL 490.212; MCL 493.12c; MCL 552.603; MCL 552.609; MCL 559.208; ... (7 more in the battery log) [heading-only, read: MCL 338.1720]
- `(?:\b(?:serv(?:e|es|ed|ing|ice) (?:of )?(?:a |the )?(?:notice|demand)s?|notices? to quit|demands? for possession)\b)[\s\S]{0,1200}?(?:\b(?:fees?|charges?|costs?)\b)` / all / 51 / svcnotice.ba: MCL 125.2469; MCL 141.112; MCL 141.2309; MCL 211.14; MCL 211.78k; MCL 211.78n; MCL 211.78t; MCL 211.79a; MCL 322.497; MCL 324.51116; MCL 331.8f; MCL 338.1720; MCL 339.204; MCL 427.203; MCL 432.204; MCL 432.309; MCL 432.409; MCL 445.814; MCL 445.1668a; MCL 445.1947; MCL 451.418a; MCL 462.301; MCL 484.2102; MCL 487.1047; MCL 487.2060g; MCL 487.2169; MCL 487.3210; MCL 487.3215; MCL 487.3217; MCL 487.12203; ... (21 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:fees?|charges?|costs?)\b))(?=[\s\S]*(?:\b(?:serv(?:e|es|ed|ing|ice) (?:of )?(?:a |the )?(?:notice|demand)s?|notices? to quit|demands? for possession)\b))` / all / 72 / svcnotice.and: MCL 14.254; MCL 35.1035; MCL 41.724; MCL 125.2469; MCL 141.107b; MCL 141.112; MCL 141.932; MCL 141.2309; MCL 169.233; MCL 211.14; MCL 211.78k; MCL 211.78n; MCL 211.78t; MCL 211.79a; MCL 211.87c; MCL 224.18; MCL 257.248j; MCL 257.403; MCL 280.154; MCL 322.497; MCL 324.51116; MCL 324.76703; MCL 324.80175; MCL 331.8f; MCL 338.1723; MCL 339.204; MCL 426.160; MCL 427.203; MCL 432.204; MCL 432.309; ... (42 more in the battery log) [heading-only, read: MCL 338.1720]
- `\bnotices? to quit\b` / all / 5 / ntq: MCL 554.134; MCL 559.212; MCL 600.4702; MCL 600.5714; MCL 600.5750
- `(?:\b(?:eviction|filing|posting) (?:fees?|charges?)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 1 / evfee.ab: MCL 205.762
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:eviction|filing|posting) (?:fees?|charges?)\b)` / all / 1 / evfee.ba: MCL 3.1031
- `\A(?=[\s\S]*(?:\b(?:eviction|filing|posting) (?:fees?|charges?)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 3 / evfee.and: MCL 3.1031; MCL 205.762; MCL 700.3715
- positive svcnotice @ SYNTH: passed ("the tenant shall pay a fee for service of a notice to quit")
- positive ntq @ MCL 600.5714: passed ("notice to quit")
- positive evfee @ SYNTH: passed ("an eviction filing fee charged to the tenant")

**MIG-B2-023** (cited), topic `subsidy-late-fee`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:40:29. late fee in subsidized or voucher tenancies
- summary: Battery MIG-B2-023 (sublate.ab 1; sublate.ba 0; sublate.and 5; soi 29; subten.ab 3; subten.ba 3; subten.and 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b)[\s\S]{0,1200}?(?:\b(?:subsid(?:y|ies|ized)|housing assistance payments?|vouchers?|section 8|housing choice)\b)` / all / 1 / sublate.ab: MCL 445.957
- `(?:\b(?:subsid(?:y|ies|ized)|housing assistance payments?|vouchers?|section 8|housing choice)\b)[\s\S]{0,1200}?(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b)` / all / 0 / sublate.ba
- `\A(?=[\s\S]*(?:\blate(?:-| )(?:payment )?(?:fees?|charges?|penalt(?:y|ies))\b))(?=[\s\S]*(?:\b(?:subsid(?:y|ies|ized)|housing assistance payments?|vouchers?|section 8|housing choice)\b))` / all / 5 / sublate.and: MCL 257.801; MCL 287.524; MCL 390.1426; MCL 445.957; MCL 484.3306
- `\bsource of income\b` / all / 29 / soi: MCL 15.707; MCL 28.425o; MCL 37.2501; MCL 37.2502; MCL 169.307; MCL 400.231; MCL 400.236; MCL 487.2155; MCL 490.401; MCL 552.602; MCL 552.604; MCL 552.605a; MCL 552.607; MCL 552.611; MCL 552.611a; MCL 552.612; MCL 552.613; MCL 552.614; MCL 552.617; MCL 552.619; MCL 552.623; MCL 552.633; MCL 552.673; MCL 552.676; MCL 552.681; MCL 552.2602; MCL 554.601; MCL 554.601c; 2026-PA-0102
- `(?:\b(?:subsid(?:y|ies|ized)|housing assistance payments?|vouchers?)\b)[\s\S]{0,1200}?(?:\b(?:late|delinquen(?:t|cy)|nonpayment)\b)` / all / 3 / subten.ab: MCL 211.55; MCL 400.115; MCL 400.115j
- `(?:\b(?:late|delinquen(?:t|cy)|nonpayment)\b)[\s\S]{0,1200}?(?:\b(?:subsid(?:y|ies|ized)|housing assistance payments?|vouchers?)\b)` / all / 3 / subten.ba: MCL 211.55; MCL 400.115; MCL 400.115j
- `\A(?=[\s\S]*(?:\b(?:subsid(?:y|ies|ized)|housing assistance payments?|vouchers?)\b))(?=[\s\S]*(?:\b(?:late|delinquen(?:t|cy)|nonpayment)\b))` / all / 7 / subten.and: MCL 205.203; MCL 211.55; MCL 388.934; MCL 400.115; MCL 400.115j; MCL 432.212; MCL 460.9q
- positive sublate @ SYNTH: passed ("a late fee charged to a tenant because the housing assistance payment was late")
- positive soi @ MCL 554.601c: passed ("source of income")
- positive subten @ SYNTH: passed ("the tenant is not liable for late payment of the subsidy")

**MIG-B2-024** (cited), topic `tax-escalation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:40:51. passing property tax or insurance increases to a residential tenant
- summary: Battery MIG-B2-024 (taxlt.ab 47; taxlt.ba 45; taxlt.and 89; escal 0; abate.ab 0; abate.ba 1; abate.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:ad valorem|property tax(?:es)?|real (?:property|estate) tax(?:es)?)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 47 / taxlt.ab: MCL 18.1221a; MCL 18.1222; MCL 123.958a; MCL 123.1345; MCL 124.467; MCL 124.508a; MCL 124.755; MCL 124.757; MCL 125.1415a; MCL 125.2688d; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 141.1357; MCL 205.762; MCL 206.508; MCL 206.520; MCL 206.522; MCL 207.558; MCL 207.571; MCL 207.606; MCL 207.653; MCL 207.659; MCL 207.706; MCL 207.709; MCL 208.1437; MCL 211.7cc; MCL 211.7dd; MCL 211.7kk; MCL 211.9f; ... (17 more in the battery log)
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:ad valorem|property tax(?:es)?|real (?:property|estate) tax(?:es)?)\b)` / all / 45 / taxlt.ba: MCL 18.1221a; MCL 18.1222; MCL 123.958a; MCL 124.549; MCL 124.550; MCL 124.755; MCL 124.757; MCL 125.2652; MCL 125.2688d; MCL 125.2705; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 205.762; MCL 206.508; MCL 206.520; MCL 206.522; MCL 207.526; MCL 207.552; MCL 207.555; MCL 207.558; MCL 207.571; MCL 207.603; MCL 207.606; MCL 207.653; MCL 207.659; MCL 207.706; MCL 207.709; MCL 211.181; MCL 211.182; ... (15 more in the battery log) [heading-only, read: MCL 211.53]
- `\A(?=[\s\S]*(?:\b(?:ad valorem|property tax(?:es)?|real (?:property|estate) tax(?:es)?)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 89 / taxlt.and: MCL 18.1221a; MCL 18.1222; MCL 46.11; MCL 117.4q; MCL 117.5k; MCL 123.958a; MCL 123.1345; MCL 124.467; MCL 124.505; MCL 124.508a; MCL 124.549; MCL 124.550; MCL 124.755; MCL 124.756; MCL 124.757; MCL 125.541; MCL 125.1415a; MCL 125.1422; MCL 125.1424b; MCL 125.2652; MCL 125.2688d; MCL 125.2705; MCL 125.2727; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 125.4412; MCL 141.1357; MCL 205.762; MCL 206.508; ... (59 more in the battery log)
- `\b(?:tax escalat(?:ion|or)|escalat(?:ion|or) clauses?)\b` / all / 0 / escal
- `(?:\btax(?:es)? (?:abatements?|refunds?|reductions?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?)\b)` / all / 0 / abate.ab
- `(?:\b(?:tenants?|lessees?)\b)[\s\S]{0,1200}?(?:\btax(?:es)? (?:abatements?|refunds?|reductions?)\b)` / all / 1 / abate.ba: MCL 208.1410
- `\A(?=[\s\S]*(?:\btax(?:es)? (?:abatements?|refunds?|reductions?)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?)\b))` / all / 1 / abate.and: MCL 208.1410
- positive taxlt @ MCL 554.633: passed ("increases in ad valorem property taxes")
- positive escal @ SYNTH: passed ("a tax escalation clause")
- positive abate @ SYNTH: passed ("any tax refund shall be credited to the tenant")

**MIG-B2-025** (cited), topic `rent-receipt-anti-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:41:11. right to receive rent separated from the duty to maintain (URLTA 1.404 analogue)
- summary: Battery MIG-B2-025 (rcvmaint.ab 7; rcvmaint.ba 6; rcvmaint.and 12; aor 15; oblig.ab 0; oblig.ba 0; oblig.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:right to (?:receive|collect) (?:the )?rents?|receipt of rents?|collect(?:s|ed|ing)? (?:the )?rents?)\b)[\s\S]{0,1200}?(?:\b(?:maintain(?:s|ed|ing)?|maintenance|repair(?:s|ed|ing)?|habitab\w*)\b)` / all / 7 / rcvmaint.ab: MCL 119.4; MCL 125.2466; MCL 450.162; MCL 460.837; MCL 554.1062; MCL 554.1063; MCL 554.1064
- `(?:\b(?:maintain(?:s|ed|ing)?|maintenance|repair(?:s|ed|ing)?|habitab\w*)\b)[\s\S]{0,1200}?(?:\b(?:right to (?:receive|collect) (?:the )?rents?|receipt of rents?|collect(?:s|ed|ing)? (?:the )?rents?)\b)` / all / 6 / rcvmaint.ba: MCL 124.756; MCL 125.535; MCL 125.698; MCL 460.837; MCL 460.843; MCL 554.1063
- `\A(?=[\s\S]*(?:\b(?:right to (?:receive|collect) (?:the )?rents?|receipt of rents?|collect(?:s|ed|ing)? (?:the )?rents?)\b))(?=[\s\S]*(?:\b(?:maintain(?:s|ed|ing)?|maintenance|repair(?:s|ed|ing)?|habitab\w*)\b))` / all / 12 / rcvmaint.and: MCL 117.4i; MCL 119.4; MCL 124.756; MCL 125.535; MCL 125.698; MCL 125.2466; MCL 450.162; MCL 460.837; MCL 460.843; MCL 554.1062; MCL 554.1063; MCL 554.1064
- `\bassignments? of rents?\b` / all / 15 / aor: MCL 554.1051; MCL 554.1052; MCL 554.1053; MCL 554.1054; MCL 554.1055; MCL 554.1056; MCL 554.1057; MCL 554.1058; MCL 554.1059; MCL 554.1060; MCL 554.1061; MCL 554.1062; MCL 554.1069; MCL 565.359; MCL 600.3204
- `(?:\b(?:free from|free of|separated? from|apart from)\b)[\s\S]{0,1200}?(?:\b(?:obligations?|dut(?:y|ies)) to (?:maintain|repair)\b)` / all / 0 / oblig.ab
- `(?:\b(?:obligations?|dut(?:y|ies)) to (?:maintain|repair)\b)[\s\S]{0,1200}?(?:\b(?:free from|free of|separated? from|apart from)\b)` / all / 0 / oblig.ba
- `\A(?=[\s\S]*(?:\b(?:free from|free of|separated? from|apart from)\b))(?=[\s\S]*(?:\b(?:obligations?|dut(?:y|ies)) to (?:maintain|repair)\b))` / all / 0 / oblig.and
- positive rcvmaint @ MCL 554.1063: passed ("collects rents following enforcement under section 8 or 9 need not apply them to the payment of expenses of protecting o")
- positive aor @ MCL 554.1052: passed ("Assignment of rents")
- positive oblig @ SYNTH: passed ("may not receive rent free from the obligation to maintain the premises")

**MIG-B2-026** (cited), topic `rent-receipt-anti-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:41:31. general law of obligations: a debtor's right to a written receipt for a payment (rule 19 [CA-gaps]), searched for the rent-receipt record
- summary: Battery MIG-B2-026 (wr 11; givrec.ab 38; givrec.ba 31; givrec.and 52; payrec.ab 2; payrec.ba 1; payrec.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\b(?:written|signed) receipts?\b` / all / 11 / wr: MCL 28.725a; MCL 333.21767; MCL 339.915a; MCL 399.603; MCL 442.312a; MCL 445.429; MCL 445.860; MCL 445.2079; MCL 480.16; MCL 492.129; MCL 500.1207
- `(?:\b(?:giv(?:e|es|en|ing)|furnish(?:es|ed|ing)?|provid(?:e|es|ed|ing)|issu(?:e|es|ed|ing)|deliver(?:s|ed|ing)?)\b)[\s\S]{0,1200}?(?:\breceipts? (?:for|of|showing) (?:the )?(?:cash |any )?(?:payments?|amounts?|money|cash|rent)\b)` / all / 38 / givrec.ab: MCL 45.491; MCL 123.1285; MCL 124.287; MCL 125.1042; MCL 128.1; MCL 141.382; MCL 141.2407; MCL 205.210; MCL 205.218; MCL 205.250; MCL 207.1155; MCL 211.55; MCL 288.517; MCL 288.682; MCL 324.5503; MCL 324.36109; MCL 324.80124; MCL 333.16277; MCL 339.915a; MCL 339.1012; MCL 339.1014; MCL 388.1611i; MCL 389.163; MCL 404.205; MCL 440.4904; MCL 440.4905; MCL 445.860; MCL 445.1402; MCL 445.1454; MCL 451.412; ... (8 more in the battery log)
- `(?:\breceipts? (?:for|of|showing) (?:the )?(?:cash |any )?(?:payments?|amounts?|money|cash|rent)\b)[\s\S]{0,1200}?(?:\b(?:giv(?:e|es|en|ing)|furnish(?:es|ed|ing)?|provid(?:e|es|ed|ing)|issu(?:e|es|ed|ing)|deliver(?:s|ed|ing)?)\b)` / all / 31 / givrec.ba: MCL 38.2504a; MCL 45.491; MCL 123.1285; MCL 124.287; MCL 129.268; MCL 141.2407; MCL 205.251; MCL 207.1155; MCL 211.46; MCL 288.517; MCL 288.682; MCL 324.5503; MCL 324.21506b; MCL 324.80124; MCL 333.16277; MCL 333.21767; MCL 339.915a; MCL 380.702; MCL 388.1611i; MCL 389.163; MCL 440.4905; MCL 445.860; MCL 445.1454; MCL 487.1013; MCL 493.14; MCL 500.2227; MCL 500.2845; MCL 552.632; MCL 554.949; MCL 559.184; ... (1 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:giv(?:e|es|en|ing)|furnish(?:es|ed|ing)?|provid(?:e|es|ed|ing)|issu(?:e|es|ed|ing)|deliver(?:s|ed|ing)?)\b))(?=[\s\S]*(?:\breceipts? (?:for|of|showing) (?:the )?(?:cash |any )?(?:payments?|amounts?|money|cash|rent)\b))` / all / 52 / givrec.and: MCL 38.2504a; MCL 45.491; MCL 123.1285; MCL 124.287; MCL 124.768; MCL 125.1042; MCL 125.1449j; MCL 128.1; MCL 129.268; MCL 141.382; MCL 141.2407; MCL 205.210; MCL 205.218; MCL 205.250; MCL 205.251; MCL 207.1155; MCL 211.46; MCL 211.55; MCL 288.517; MCL 288.682; MCL 324.5503; MCL 324.21506b; MCL 324.36109; MCL 324.80124; MCL 333.16277; MCL 333.21767; MCL 339.915a; MCL 339.1012; MCL 339.1014; MCL 380.702; ... (22 more in the battery log)
- `(?:\b(?:debtors?|obligors?|payors?|tenants?)\b)[\s\S]{0,1200}?(?:\breceipts? (?:for|of|showing) (?:the )?(?:cash |any )?(?:payments?|amounts?|money|cash|rent)\b)` / all / 2 / payrec.ab: MCL 339.915a; MCL 451.412
- `(?:\breceipts? (?:for|of|showing) (?:the )?(?:cash |any )?(?:payments?|amounts?|money|cash|rent)\b)[\s\S]{0,1200}?(?:\b(?:debtors?|obligors?|payors?|tenants?)\b)` / all / 1 / payrec.ba: MCL 451.412
- `\A(?=[\s\S]*(?:\b(?:debtors?|obligors?|payors?|tenants?)\b))(?=[\s\S]*(?:\breceipts? (?:for|of|showing) (?:the )?(?:cash |any )?(?:payments?|amounts?|money|cash|rent)\b))` / all / 2 / payrec.and: MCL 339.915a; MCL 451.412
- positive wr @ MCL 333.21767: passed ("A written receipt shall be given")
- positive givrec @ MCL 339.915a: passed ("Failing to give a debtor a written receipt for cash payment")
- positive payrec @ MCL 339.915a: passed ("Failing to give a debtor a written receipt for cash payment")

**MIG-B2-027** (cited), topic `lockout-for-rent-delinquency`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:42:03. opt-in lockout or lock change for unpaid rent
- summary: Battery MIG-B2-027 (lock.ab 5; lock.ba 8; lock.and 17; lockpay.ab 0; lockpay.ba 0; lockpay.and 1; lockout 16; excl.ab 16; excl.ba 19; excl.and 48 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\block(?:s|ed|ing|out|outs)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)` / all / 5 / lock.ab: MCL 257.1811; MCL 324.78101; MCL 554.658; MCL 570.525; MCL 600.2918
- `(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b)[\s\S]{0,1200}?(?:\block(?:s|ed|ing|out|outs)?\b)` / all / 8 / lock.ba: MCL 28.432a; MCL 125.488; MCL 125.1528a; MCL 257.624a; MCL 339.5733; MCL 485.8; MCL 570.525; MCL 600.2918
- `\A(?=[\s\S]*(?:\block(?:s|ed|ing|out|outs)?\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|renters?|residents?)\b))` / all / 17 / lock.and: MCL 28.432a; MCL 125.402; MCL 125.488; MCL 125.1502a; MCL 125.1528a; MCL 257.624a; MCL 257.1811; MCL 324.78101; MCL 333.26423; MCL 333.27954; MCL 339.5733; MCL 436.1537; MCL 460.6t; MCL 485.8; MCL 554.658; MCL 570.525; MCL 600.2918
- `(?:\block(?:s|ed|ing|out|outs)?\b)[\s\S]{0,1200}?(?:\b(?:nonpayment|unpaid|delinquen(?:t|cy)|arrear(?:s|age|ages)?|failure to pay)\b)` / all / 0 / lockpay.ab
- `(?:\b(?:nonpayment|unpaid|delinquen(?:t|cy)|arrear(?:s|age|ages)?|failure to pay)\b)[\s\S]{0,1200}?(?:\block(?:s|ed|ing|out|outs)?\b)` / all / 0 / lockpay.ba
- `\A(?=[\s\S]*(?:\block(?:s|ed|ing|out|outs)?\b))(?=[\s\S]*(?:\b(?:nonpayment|unpaid|delinquen(?:t|cy)|arrear(?:s|age|ages)?|failure to pay)\b))` / all / 1 / lockpay.and: MCL 570.525
- `\block-?outs?\b|\blocked out\b` / all / 16 / lockout: MCL 257.625k; MCL 339.1020; MCL 421.29; MCL 423.1; MCL 423.9; MCL 423.22; MCL 423.201; MCL 423.202; MCL 423.202a; MCL 423.251; MCL 423.252; MCL 423.253; MCL 423.253a; MCL 460.6t; MCL 460.1221; MCL 791.265c [heading-only, read: MCL 423.254]
- `(?:\bexclu(?:de|des|ded|ding|sion)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?)\b)` / all / 16 / excl.ab: MCL 37.2502; MCL 125.2307; MCL 207.218; MCL 207.653; MCL 257.1401; MCL 259.6; MCL 324.73102; MCL 440.2803; MCL 440.2851; MCL 440.2864; MCL 440.2866; MCL 440.2953; MCL 500.6868; MCL 554.601c; MCL 600.8031; MCL 700.2708
- `(?:\b(?:tenants?|lessees?)\b)[\s\S]{0,1200}?(?:\bexclu(?:de|des|ded|ding|sion)\b)` / all / 19 / excl.ba: MCL 29.1; MCL 37.2502; MCL 125.4402; MCL 205.69; MCL 205.110; MCL 207.218; MCL 208.1410; MCL 257.1401; MCL 324.21101; MCL 324.73102; MCL 324.81133; MCL 400.704; MCL 440.2803; MCL 440.2864; MCL 440.2866; MCL 500.1605; MCL 500.3101; MCL 554.601c; MCL 570.522 [heading-only, read: MCL 211.53]
- `\A(?=[\s\S]*(?:\bexclu(?:de|des|ded|ding|sion)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?)\b))` / all / 48 / excl.and: MCL 29.1; MCL 37.2502; MCL 38.1137; MCL 125.1411; MCL 125.1421; MCL 125.1432; MCL 125.2114a; MCL 125.2307; MCL 125.4402; MCL 205.69; MCL 205.110; MCL 206.508; MCL 206.510; MCL 206.520; MCL 206.659; MCL 207.218; MCL 207.552; MCL 207.653; MCL 208.1269; MCL 208.1410; MCL 211.9; MCL 211.53; MCL 213.55; MCL 257.1401; MCL 259.6; MCL 324.503; MCL 324.21101; MCL 324.21303; MCL 324.73102; MCL 324.81133; ... (18 more in the battery log)
- positive lock @ MCL 600.2918: passed ("Changing, altering, or adding to the locks or other security devices on the property without immediately providing keys ")
- positive lockpay @ SYNTH: passed ("the landlord may change the locks if rent is unpaid")
- positive lockout @ SYNTH: passed ("a lockout")
- positive excl @ SYNTH: passed ("the landlord may exclude the tenant from the premises")

**MIG-B2-028** (cited), topic `utility-deposit-return`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:42:17. landlord-held utility deposits and their return
- summary: Battery MIG-B2-028 (utsd.ab 3; utsd.ba 4; utsd.and 8; utdep 2; utlt.ab 4; utlt.ba 10; utlt.and 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\butilit(?:y|ies)\b)[\s\S]{0,1200}?(?:\bsecurity deposits?\b)` / all / 3 / utsd.ab: MCL 722.984; Mich Admin Code R 460.131; Mich Admin Code R 460.148
- `(?:\bsecurity deposits?\b)[\s\S]{0,1200}?(?:\butilit(?:y|ies)\b)` / all / 4 / utsd.ba: MCL 18.361; MCL 554.607; Mich Admin Code R 460.131; Mich Admin Code R 460.148
- `\A(?=[\s\S]*(?:\butilit(?:y|ies)\b))(?=[\s\S]*(?:\bsecurity deposits?\b))` / all / 8 / utsd.and: MCL 18.361; MCL 206.607; MCL 208.1111; MCL 554.607; MCL 567.222; MCL 722.984; Mich Admin Code R 460.131; Mich Admin Code R 460.148
- `\butility deposits?\b` / all / 2 / utdep: MCL 125.2305; MCL 722.984
- `(?:\butilit(?:y|ies)\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?)\b)` / all / 4 / utlt.ab: MCL 440.9102; MCL 460.9d; Mich Admin Code R 460.107; Mich Admin Code R 460.139
- `(?:\b(?:landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\butilit(?:y|ies)\b)` / all / 10 / utlt.ba: MCL 18.1221a; MCL 141.1408; MCL 257.1401; MCL 460.9d; MCL 554.607; MCL 559.204b; MCL 559.222b; MCL 565.104; Mich Admin Code R 460.107; Mich Admin Code R 460.139
- `\A(?=[\s\S]*(?:\butilit(?:y|ies)\b))(?=[\s\S]*(?:\b(?:landlords?|lessors?)\b))` / all / 16 / utlt.and: MCL 18.1221a; MCL 125.1608; MCL 125.4611; MCL 141.1408; MCL 207.653; MCL 211.9m; MCL 257.1401; MCL 324.21303; MCL 440.9102; MCL 460.9d; MCL 554.607; MCL 559.204b; MCL 559.222b; MCL 565.104; Mich Admin Code R 460.107; Mich Admin Code R 460.139
- positive utsd @ MCL 554.607: passed ("utility bills not paid by the tenant")
- positive utdep @ MCL 125.2305: passed ("utility deposits from consumers")
- positive utlt @ MCL 554.607: passed ("Pay the landlord for all rent in arrearage under the rental agreement, rent due for premature termination of the rental ")

**MIG-B2-029** (cited), topic `rent-concession`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:42:43. rent concessions, free-rent periods and their recapture
- summary: Battery MIG-B2-029 (conc.ab 25; conc.ba 21; conc.and 41; avg 1; rebate.ab 9; rebate.ba 4; rebate.and 10; rentconc 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:concessions?|free rent|rent[- ]free|rent credits?|move-in specials?|rebates?)\b)[\s\S]{0,1200}?(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))` / all / 25 / conc.ab: MCL 141.1369; MCL 211.181; MCL 257.1401; MCL 259.105; MCL 259.117; MCL 259.131; MCL 259.133; MCL 259.144; MCL 288.473; MCL 288.573; MCL 324.503; MCL 324.2005; MCL 324.2010; MCL 324.2030; MCL 324.72108; MCL 324.74101; MCL 324.78303; MCL 324.83101; MCL 324.83103; MCL 393.360; MCL 393.360a; MCL 399.508; MCL 476.8; MCL 477.8; Const 1963, art. IX, § 40
- `(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b))[\s\S]{0,1200}?(?:\b(?:concessions?|free rent|rent[- ]free|rent credits?|move-in specials?|rebates?)\b)` / all / 21 / conc.ba: MCL 124.406; MCL 124.464; MCL 125.1444c; MCL 141.1369; MCL 208.1409; MCL 211.181; MCL 257.1401; MCL 259.105; MCL 259.117; MCL 259.133; MCL 259.144; MCL 324.503; MCL 324.72108; MCL 324.72109; MCL 324.74103; MCL 324.78105; MCL 324.78303; MCL 324.83103; MCL 380.12b; MCL 393.360; Const 1963, art. IX, § 40
- `\A(?=[\s\S]*(?:\b(?:concessions?|free rent|rent[- ]free|rent credits?|move-in specials?|rebates?)\b))(?=[\s\S]*(?:(?:\btenan(?:t|ts|cy|cies)\b|\blessees?\b|\blessors?\b|\blandlords?\b|\bleases?\b|\brental agreements?\b|\brental units?\b)))` / all / 41 / conc.and: MCL 124.406; MCL 124.464; MCL 125.1444c; MCL 141.1369; MCL 205.94; MCL 207.552; MCL 208.1409; MCL 211.7cc; MCL 211.181; MCL 257.1401; MCL 259.105; MCL 259.117; MCL 259.131; MCL 259.133; MCL 259.144; MCL 288.473; MCL 288.573; MCL 289.1107; MCL 289.1107.amended; MCL 324.503; MCL 324.2005; MCL 324.2010; MCL 324.2030; MCL 324.72108; MCL 324.72109; MCL 324.74101; MCL 324.74103; MCL 324.78105; MCL 324.78303; MCL 324.83101; ... (11 more in the battery log)
- `\baverage rent\b` / all / 1 / avg: MCL 554.601
- `(?:\b(?:rebates?|discounts?)\b)[\s\S]{0,1200}?(?:\binducements?\b)` / all / 9 / rebate.ab: MCL 257.1307c; MCL 445.903; MCL 493.12a; MCL 500.1623; MCL 500.2024; MCL 500.2066; MCL 500.2070; MCL 500.2080; MCL 500.3517
- `(?:\binducements?\b)[\s\S]{0,1200}?(?:\b(?:rebates?|discounts?)\b)` / all / 4 / rebate.ba: MCL 500.1623; MCL 500.2024; MCL 500.2066; MCL 500.2070
- `\A(?=[\s\S]*(?:\b(?:rebates?|discounts?)\b))(?=[\s\S]*(?:\binducements?\b))` / all / 10 / rebate.and: MCL 257.1307c; MCL 445.903; MCL 490.432; MCL 493.12a; MCL 500.1623; MCL 500.2024; MCL 500.2066; MCL 500.2070; MCL 500.2080; MCL 500.3517
- `\brent(?:al)? concessions?\b` / all / 0 / rentconc
- positive conc @ SYNTH: passed ("a rent concession given to the tenant under the lease")
- positive avg @ MCL 554.601: passed ("in excess of the average rent for the term")
- positive rebate @ MCL 445.903: passed ("rebate, discount, or other benefit as an inducement")
- positive rentconc @ SYNTH: passed ("rent concession")

**MIG-B2-030** (cited), topic `rent-installments`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:42:58. rent paid in installments; installments as partial payments
- summary: Battery MIG-B2-030 (instrent.ab 11; instrent.ba 6; instrent.and 20; rentinst 0; partial.ab 1; partial.ba 0; partial.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binstal(?:l)?ments?\b)[\s\S]{0,1200}?(?:\brents?\b)` / all / 11 / instrent.ab: MCL 38.1137; MCL 38.1140; MCL 125.1253a; MCL 125.1607; MCL 440.2936; MCL 440.2958; MCL 440.2972; MCL 440.2973; MCL 449.7; MCL 600.2927; MCL 600.3204
- `(?:\brents?\b)[\s\S]{0,1200}?(?:\binstal(?:l)?ments?\b)` / all / 6 / instrent.ba: MCL 38.1140; MCL 125.1253a; MCL 440.2958; MCL 440.2972; MCL 449.7; MCL 600.3204
- `\A(?=[\s\S]*(?:\binstal(?:l)?ments?\b))(?=[\s\S]*(?:\brents?\b))` / all / 20 / instrent.and: MCL 38.1137; MCL 38.1140; MCL 124.464; MCL 124.756; MCL 125.1253a; MCL 125.1444c; MCL 125.1607; MCL 125.2007; MCL 125.4611; MCL 141.1367; MCL 330.1205; MCL 440.2936; MCL 440.2958; MCL 440.2972; MCL 440.2973; MCL 449.7; MCL 500.942; MCL 600.2927; MCL 600.3204; MCL 600.9945
- `\brents? (?:payable|paid|due) in (?:\w+ )?instal(?:l)?ments\b` / all / 0 / rentinst
- `(?:\bpartial payments?\b)[\s\S]{0,1200}?(?:\brents?\b)` / all / 1 / partial.ab: MCL 451.412
- `(?:\brents?\b)[\s\S]{0,1200}?(?:\bpartial payments?\b)` / all / 0 / partial.ba
- `\A(?=[\s\S]*(?:\bpartial payments?\b))(?=[\s\S]*(?:\brents?\b))` / all / 1 / partial.and: MCL 451.412
- positive instrent @ SYNTH: passed ("the rent may be paid in installments")
- positive rentinst @ SYNTH: passed ("rent payable in installments")
- positive partial @ SYNTH: passed ("a partial payment of rent")

**MIG-B2-031** (cited), topic `rent-tax`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:43:14. sales, use or lodging tax on residential rent
- summary: Battery MIG-B2-031 (lodg 1; transient 20; renttax.ab 1; renttax.ba 0; renttax.and 1; month 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\brooms? (?:or|and) lodging\b` / all / 1 / lodg: MCL 205.93a
- `\btransient guests?\b` / all / 20 / transient: MCL 125.781; MCL 141.861; MCL 141.862; MCL 141.862a; MCL 141.872; MCL 141.875; MCL 141.882; MCL 141.885; MCL 141.892; MCL 141.896; MCL 141.1322; MCL 141.1325; MCL 141.1432; MCL 141.1435; MCL 141.1442; MCL 141.1444; MCL 207.623; MCL 207.624; MCL 207.751; MCL 207.752
- `(?:\b(?:sales|use|excise) tax(?:es)?\b)[\s\S]{0,1200}?(?:\b(?:rent(?:s|al)? (?:of|for) (?:a )?(?:dwelling|residential|apartment)\w*|residential (?:rent|rental|lease)s?|dwelling units?)\b)` / all / 1 / renttax.ab: MCL 211.7ff
- `(?:\b(?:rent(?:s|al)? (?:of|for) (?:a )?(?:dwelling|residential|apartment)\w*|residential (?:rent|rental|lease)s?|dwelling units?)\b)[\s\S]{0,1200}?(?:\b(?:sales|use|excise) tax(?:es)?\b)` / all / 0 / renttax.ba
- `\A(?=[\s\S]*(?:\b(?:sales|use|excise) tax(?:es)?\b))(?=[\s\S]*(?:\b(?:rent(?:s|al)? (?:of|for) (?:a )?(?:dwelling|residential|apartment)\w*|residential (?:rent|rental|lease)s?|dwelling units?)\b))` / all / 1 / renttax.and: MCL 211.7ff
- `\bcontinuous period of more than 1 month\b` / all / 1 / month: MCL 205.93a
- positive lodg @ MCL 205.93a: passed ("Rooms or lodging furnished by hotelkeepers")
- positive transient @ MCL 141.861: passed ("means a natural person staying less than 30 consecutive days")
- positive renttax @ SYNTH: passed ("the sales tax does not apply to rent of a dwelling")
- positive month @ MCL 205.93a: passed ("except rooms and lodging rented for a continuous period of more than 1 month")

**MIG-B2-032** (cited), topic `rent-reporting`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:43:32. rent reporting to credit bureaus: required program, opt-in offer, or notice before a negative report
- summary: Battery MIG-B2-032 (crr.ab 5; crr.ba 5; crr.and 6; rentrep 2; neg.ab 1; neg.ba 2; neg.and 3 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:credit report(?:s|ing)?|consumer reporting agenc(?:y|ies)|credit bureaus?)\b)[\s\S]{0,1200}?(?:\b(?:rents?|rental|tenants?|landlords?|renters?)\b)` / all / 5 / crr.ab: MCL 125.853; MCL 445.903; MCL 445.2513; MCL 445.2514; 2026-PA-0032
- `(?:\b(?:rents?|rental|tenants?|landlords?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:credit report(?:s|ing)?|consumer reporting agenc(?:y|ies)|credit bureaus?)\b)` / all / 5 / crr.ba: MCL 125.853; MCL 445.2513; MCL 445.2514; MCL 451.412; 2026-PA-0032
- `\A(?=[\s\S]*(?:\b(?:credit report(?:s|ing)?|consumer reporting agenc(?:y|ies)|credit bureaus?)\b))(?=[\s\S]*(?:\b(?:rents?|rental|tenants?|landlords?|renters?)\b))` / all / 6 / crr.and: MCL 125.853; MCL 445.903; MCL 445.2513; MCL 445.2514; MCL 451.412; 2026-PA-0032
- `\b(?:positive )?(?:rent|rental) (?:payment )?reporting\b|\breporting of rental payments\b` / all / 2 / rentrep: MCL 125.853; 2026-PA-0032
- `(?:\b(?:negative|adverse) (?:credit )?(?:reports?|information)\b)[\s\S]{0,1200}?(?:\b(?:notif(?:y|ies|ied|ication)|notices?)\b)` / all / 1 / neg.ab: MCL 445.272
- `(?:\b(?:notif(?:y|ies|ied|ication)|notices?)\b)[\s\S]{0,1200}?(?:\b(?:negative|adverse) (?:credit )?(?:reports?|information)\b)` / all / 2 / neg.ba: MCL 445.272; MCL 554.939
- `\A(?=[\s\S]*(?:\b(?:negative|adverse) (?:credit )?(?:reports?|information)\b))(?=[\s\S]*(?:\b(?:notif(?:y|ies|ied|ication)|notices?)\b))` / all / 3 / neg.and: MCL 445.272; MCL 554.937; MCL 554.939
- positive crr @ MCL 125.853: passed ("positive reporting of rental payments to consumer reporting agencies")
- positive rentrep @ MCL 125.853: passed ("positive reporting of rental payments")
- positive neg @ MCL 445.272: passed ("Before reporting adverse information about a cosigner to a consumer reporting agency")

**MIG-B3-001** (cited), topic `dv-lockchange`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:53:06. Whole-corpus battery for lease, lock, eviction and deposit rules tied to domestic violence, sexual assault or stalking (GAPS-PROMPT item 4).
- summary: Battery MIG-B3-001 (dvlock.ab 0; dvlock.ba 0; dvlock.and 0; dvevict.ab 1; dvevict.ba 1; dvevict.and 2; dvten.ab 14; dvten.ba 10; dvten.and 18; dvdep.ab 5; dvdep.ba 5; dvdep.and 10; lockchg 2; dvplain 99 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)[\s\S]{0,1200}?(?:\blocks?\b|\blocked\b|\blocking\b|\brekey\w*|\bdeadbolts?\b|\bsecurity devices?\b)` / all / 0 / dvlock.ab
- `(?:\blocks?\b|\blocked\b|\blocking\b|\brekey\w*|\bdeadbolts?\b|\bsecurity devices?\b)[\s\S]{0,1200}?(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)` / all / 0 / dvlock.ba
- `\A(?=[\s\S]*(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking))(?=[\s\S]*(?:\blocks?\b|\blocked\b|\blocking\b|\brekey\w*|\bdeadbolts?\b|\bsecurity devices?\b))` / all / 0 / dvlock.and
- `(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)[\s\S]{0,1200}?(?:\bevict\w*|summary proceedings?|\bpossession of (?:the )?premises|\brecover\w* possession|\bnotice to quit|\bdemand for possession|\bholds? over|\bholding over|\bterminat\w* (?:of )?(?:the |a )?(?:tenancy|lease|rental agreement))` / all / 1 / dvevict.ab: MCL 722.1527
- `(?:\bevict\w*|summary proceedings?|\bpossession of (?:the )?premises|\brecover\w* possession|\bnotice to quit|\bdemand for possession|\bholds? over|\bholding over|\bterminat\w* (?:of )?(?:the |a )?(?:tenancy|lease|rental agreement))[\s\S]{0,1200}?(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)` / all / 1 / dvevict.ba: MCL 722.1527
- `\A(?=[\s\S]*(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking))(?=[\s\S]*(?:\bevict\w*|summary proceedings?|\bpossession of (?:the )?premises|\brecover\w* possession|\bnotice to quit|\bdemand for possession|\bholds? over|\bholding over|\bterminat\w* (?:of )?(?:the |a )?(?:tenancy|lease|rental agreement)))` / all / 2 / dvevict.and: MCL 600.2559; MCL 722.1527
- `(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)[\s\S]{0,1200}?(?:\btenan\w*|\blandlords?\b|\blessees?\b|\blessors?\b|\brental (?:unit|agreement|property|premises)|\bleases?\b|\bleased\b|\bleasehold\w*)` / all / 14 / dvten.ab: MCL 18.354; MCL 457.303; MCL 554.601b; MCL 600.2950; MCL 600.2950a; MCL 700.2901; MCL 700.5407; MCL 722.1527; MCL 750.411h; MCL 750.411i; MCL 750.539l; MCL 764.15b; MCL 764.15c; MCL 780.951
- `(?:\btenan\w*|\blandlords?\b|\blessees?\b|\blessors?\b|\brental (?:unit|agreement|property|premises)|\bleases?\b|\bleased\b|\bleasehold\w*)[\s\S]{0,1200}?(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)` / all / 10 / dvten.ba: MCL 554.601b; MCL 600.2950; MCL 600.2950a; MCL 722.1527; MCL 750.411h; MCL 750.411i; MCL 750.539l; MCL 764.15b; MCL 764.15c; MCL 780.951
- `\A(?=[\s\S]*(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking))(?=[\s\S]*(?:\btenan\w*|\blandlords?\b|\blessees?\b|\blessors?\b|\brental (?:unit|agreement|property|premises)|\bleases?\b|\bleased\b|\bleasehold\w*))` / all / 18 / dvten.and: MCL 18.354; MCL 28.425b; MCL 338.2184; MCL 400.713; MCL 457.303; MCL 554.601b; MCL 600.2950; MCL 600.2950a; MCL 700.2901; MCL 700.5407; MCL 722.1527; MCL 750.110a; MCL 750.411h; MCL 750.411i; MCL 750.539l; MCL 764.15b; MCL 764.15c; MCL 780.951
- `(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)[\s\S]{0,1200}?(?:\bsecurity deposits?\b|\bdeposits?\b)` / all / 5 / dvdep.ab: MCL 400.1533; MCL 551.103; MCL 554.601b; MCL 600.2529; MCL 752.975
- `(?:\bsecurity deposits?\b|\bdeposits?\b)[\s\S]{0,1200}?(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking)` / all / 5 / dvdep.ba: MCL 400.1533; MCL 554.601b; MCL 600.181; MCL 600.2529; MCL 752.975
- `\A(?=[\s\S]*(?:domestic (?:violence|abuse|assault)|sexual assault|criminal sexual conduct|\bstalking\b|\bstalked\b|\bstalkers?\b|dating violence|personal protection orders?|\bprotection orders?|\bprotective orders?|human trafficking))(?=[\s\S]*(?:\bsecurity deposits?\b|\bdeposits?\b))` / all / 10 / dvdep.and: MCL 28.425a; MCL 28.425b; MCL 330.1700; MCL 400.1533; MCL 551.103; MCL 554.601b; MCL 600.181; MCL 600.2529; MCL 700.1106; MCL 752.975
- `\brekey\w*|\block changes?\b|\bchang\w* (?:the |of )?locks?\b|\badding to the locks\b|\breplac\w* (?:the )?locks?\b` / all / 2 / lockchg: MCL 600.2918; MCL 750.414a
- `\bdomestic violence\b` / all / 99 / dvplain: MCL 28.257; MCL 257.310e; MCL 333.17015; MCL 333.17015a; MCL 400.56i; MCL 400.57b; MCL 400.235; MCL 400.586l; MCL 400.1501; MCL 400.1505; MCL 400.1506; MCL 400.1507; MCL 400.1508; MCL 400.1509; MCL 400.1511; MCL 400.1532; MCL 408.962; MCL 408.964; MCL 408.969; MCL 421.29; MCL 421.29a; MCL 500.1239; MCL 500.2246; MCL 500.3406j; MCL 550.1401; MCL 551.103; MCL 551.332; MCL 552.452; MCL 552.505a; MCL 552.513; ... (69 more in the battery log)
- positive dvten @ MCL 554.601b: passed ("domestic violence, sexual assault, or stalking while that person is a tenant")
- positive dvdep @ MCL 554.601b: passed ("from withholding security deposits pursuant to section 13(1)(d)")
- positive dvlock @ SYNTH: passed ("A landlord shall change the locks to the dwelling unit within 48 hours after a tenant who is a victim of domestic violen")
- positive dvevict @ SYNTH: passed ("A landlord shall not evict a tenant or terminate the tenancy on the basis that the tenant is a victim of domestic violen")
- positive lockchg @ MCL 600.2918: passed ("Changing, altering, or adding to the locks or other security devices")
- positive dvplain @ MCL 554.601b: passed ("reasonable apprehension of present danger to the tenant or his or her child from domestic violence")

**MIG-B3-002** (cited), topic `dv-lockchange`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:53:28. Companion battery on the everyday words (victim, abuser) with no domestic-violence term of art, against lock and tenancy words (SOP rule 19 everyday-word companion).
- summary: Battery MIG-B3-002 (viclock.ab 1; viclock.ba 1; viclock.and 1; victen.ab 4; victen.ba 3; victen.and 6; vicplain 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b)[\s\S]{0,1200}?(?:\blocks?\b|\blocked\b|\blocking\b|\brekey\w*|\bdeadbolts?\b|\bsecurity devices?\b)` / all / 1 / viclock.ab: MCL 18.361
- `(?:\blocks?\b|\blocked\b|\blocking\b|\brekey\w*|\bdeadbolts?\b|\bsecurity devices?\b)[\s\S]{0,1200}?(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b)` / all / 1 / viclock.ba: MCL 18.361
- `\A(?=[\s\S]*(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b))(?=[\s\S]*(?:\blocks?\b|\blocked\b|\blocking\b|\brekey\w*|\bdeadbolts?\b|\bsecurity devices?\b))` / all / 1 / viclock.and: MCL 18.361
- `(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b)[\s\S]{0,1200}?(?:\btenan\w*|\blandlords?\b|\blessees?\b|\blessors?\b|\brental (?:unit|agreement))` / all / 4 / victen.ab: MCL 18.361; MCL 257.625n; MCL 554.601b; MCL 750.539l
- `(?:\btenan\w*|\blandlords?\b|\blessees?\b|\blessors?\b|\brental (?:unit|agreement))[\s\S]{0,1200}?(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b)` / all / 3 / victen.ba: MCL 18.361; MCL 554.601b; MCL 750.539l
- `\A(?=[\s\S]*(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b))(?=[\s\S]*(?:\btenan\w*|\blandlords?\b|\blessees?\b|\blessors?\b|\brental (?:unit|agreement)))` / all / 6 / victen.and: MCL 4.415; MCL 15.243; MCL 18.361; MCL 257.625n; MCL 554.601b; MCL 750.539l
- `\bvictims? of (?:a )?crimes?\b[\s\S]{0,1200}?\b(?:locks?|tenants?|landlords?)\b` / all / 0 / vicplain
- positive viclock @ MCL 18.361: passed ("replacing or repairing windows or locks")
- positive victen @ MCL 554.601b: passed ("victims of sexual assault or domestic violence and their families")
- positive vicplain @ SYNTH: passed ("A landlord shall change the locks for a victim of a crime who is a tenant.")

**MIG-B3-003** (superseded by MIG-B3-004), topic `disability-accommodation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:59:04. Disability modification: lease-inclusion sentence, restoration deposit or escrow, and every reasonable accommodation or modification rule with a tenancy word.
- summary: Battery MIG-B3-003 (modlease.ab 0; modlease.ba 0; modlease.and 0; modesc.ab 0; modesc.ba 0; modesc.and 0; ratenancy.ab 2; ratenancy.ba 3; ratenancy.and 5; restore 1; accom 8 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)[\s\S]{0,1200}?(?:\bincluded in (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)|\bin (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement))` / all / 0 / modlease.ab
- `(?:\bincluded in (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)|\bin (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement))[\s\S]{0,1200}?(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)` / all / 0 / modlease.ba
- `\A(?=[\s\S]*(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises))(?=[\s\S]*(?:\bincluded in (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)|\bin (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)))` / all / 0 / modlease.and
- `(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)[\s\S]{0,1200}?(?:\bescrow\w*|interest[- ]bearing|\bdeposits?\b)` / all / 0 / modesc.ab
- `(?:\bescrow\w*|interest[- ]bearing|\bdeposits?\b)[\s\S]{0,1200}?(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)` / all / 0 / modesc.ba
- `\A(?=[\s\S]*(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises))(?=[\s\S]*(?:\bescrow\w*|interest[- ]bearing|\bdeposits?\b))` / all / 0 / modesc.and
- `(?:reasonable (?:accommodations?|modifications?))[\s\S]{0,1200}?(?:\blandlords?\b|\btenan\w*|\brenters?\b|\brental\b|\bleases?\b|\bleased\b)` / all / 2 / ratenancy.ab: MCL 37.1506a; MCL 37.2506a
- `(?:\blandlords?\b|\btenan\w*|\brenters?\b|\brental\b|\bleases?\b|\bleased\b)[\s\S]{0,1200}?(?:reasonable (?:accommodations?|modifications?))` / all / 3 / ratenancy.ba: MCL 37.1506a; MCL 37.2506a; MCL 390.357
- `\A(?=[\s\S]*(?:reasonable (?:accommodations?|modifications?)))(?=[\s\S]*(?:\blandlords?\b|\btenan\w*|\brenters?\b|\brental\b|\bleases?\b|\bleased\b))` / all / 5 / ratenancy.and: MCL 3.1041; MCL 37.1506a; MCL 37.2506a; MCL 117.5k; MCL 390.357
- `\brestore the interior\b` / all / 1 / restore: MCL 37.1506a
- `\breasonable accommodations?\b` / all / 8 / accom: MCL 3.1041; MCL 37.1506a; MCL 37.2506a; MCL 38.1630; MCL 117.5k; MCL 390.357; MCL 390.1703; MCL 400.57e
- positive modlease @ SYNTH: passed ("The landlord may condition permission for a reasonable modification on the renter agreeing to restore the interior, and ")
- positive modesc @ SYNTH: passed ("In the case of reasonable modifications, the landlord may require the renter to pay into an interest-bearing escrow acco")
- positive ratenancy @ MCL 37.1506a: passed ("In the case of a rental, the landlord may, if reasonable, make permission for a modification contingent")
- positive restore @ MCL 37.1506a: passed ("restore the interior of the premises to the condition that existed before the modification")
- positive accom @ MCL 37.1506a: passed ("Refuse to make reasonable accommodations in rules, policies, practices, or services")

**MIG-B3-004** (cited) (supersedes MIG-B3-003), topic `disability-accommodation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 18:59:50. Rerun of MIG-B3-003 (inflection: rentals) adding the general accommodation duty wording. Disability modification: lease-inclusion sentence, restoration deposit or escrow, and every reasonable accommodation or modification rule with a tenancy word.
- summary: Battery MIG-B3-004 (modlease.ab 0; modlease.ba 0; modlease.and 0; modesc.ab 0; modesc.ba 0; modesc.and 0; ratenancy.ab 2; ratenancy.ba 3; ratenancy.and 5; restore 1; accom 8; accdis 2 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)[\s\S]{0,1200}?(?:\bincluded in (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)|\bin (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement))` / all / 0 / modlease.ab
- `(?:\bincluded in (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)|\bin (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement))[\s\S]{0,1200}?(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)` / all / 0 / modlease.ba
- `\A(?=[\s\S]*(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises))(?=[\s\S]*(?:\bincluded in (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)|\bin (?:any|the|a|each|every) (?:written )?(?:lease|rental agreement)))` / all / 0 / modlease.and
- `(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)[\s\S]{0,1200}?(?:\bescrow\w*|interest[- ]bearing|\bdeposits?\b)` / all / 0 / modesc.ab
- `(?:\bescrow\w*|interest[- ]bearing|\bdeposits?\b)[\s\S]{0,1200}?(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises)` / all / 0 / modesc.ba
- `\A(?=[\s\S]*(?:reasonable modifications?|restor\w* the interior|\bmodifications? of (?:the )?(?:existing )?premises))(?=[\s\S]*(?:\bescrow\w*|interest[- ]bearing|\bdeposits?\b))` / all / 0 / modesc.and
- `(?:reasonable (?:accommodations?|modifications?))[\s\S]{0,1200}?(?:\blandlords?\b|\btenan\w*|\brenters?\b|\brentals?\b|\bleases?\b|\bleased\b)` / all / 2 / ratenancy.ab: MCL 37.1506a; MCL 37.2506a
- `(?:\blandlords?\b|\btenan\w*|\brenters?\b|\brentals?\b|\bleases?\b|\bleased\b)[\s\S]{0,1200}?(?:reasonable (?:accommodations?|modifications?))` / all / 3 / ratenancy.ba: MCL 37.1506a; MCL 37.2506a; MCL 390.357
- `\A(?=[\s\S]*(?:reasonable (?:accommodations?|modifications?)))(?=[\s\S]*(?:\blandlords?\b|\btenan\w*|\brenters?\b|\brentals?\b|\bleases?\b|\bleased\b))` / all / 5 / ratenancy.and: MCL 3.1041; MCL 37.1506a; MCL 37.2506a; MCL 117.5k; MCL 390.357
- `\brestore the interior\b` / all / 1 / restore: MCL 37.1506a
- `\breasonable accommodations?\b` / all / 8 / accom: MCL 3.1041; MCL 37.1506a; MCL 37.2506a; MCL 38.1630; MCL 117.5k; MCL 390.357; MCL 390.1703; MCL 400.57e
- `\baccommodat\w* (?:a |the )?(?:person|individual)s? with (?:a )?disabilit\w*` / all / 2 / accdis: MCL 37.1102; MCL 37.1210
- positive modlease @ SYNTH: passed ("The landlord may condition permission for a reasonable modification on the renter agreeing to restore the interior, and ")
- positive modesc @ SYNTH: passed ("In the case of reasonable modifications, the landlord may require the renter to pay into an interest-bearing escrow acco")
- positive ratenancy @ MCL 37.1506a: passed ("In the case of a rental, the landlord may, if reasonable, make permission for a modification contingent")
- positive restore @ MCL 37.1506a: passed ("restore the interior of the premises to the condition that existed before the modification")
- positive accom @ MCL 37.1506a: passed ("Refuse to make reasonable accommodations in rules, policies, practices, or services")
- positive accdis @ MCL 37.1102: passed ("a person shall accommodate a person with a disability for purposes of employment")

**MIG-B3-005** (superseded by MIG-B3-006), topic `service-animal-denial-penalty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:01:41. Penalty for denying a service or assistance animal in housing; any service-animal rule with a housing or tenancy word.
- summary: Battery MIG-B3-005 (satenancy.ab 0; satenancy.ba 0; satenancy.and 3; sapenal.ab 4; sapenal.ba 4; sapenal.and 5; saplain 13 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)[\s\S]{0,1200}?(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\bhousing\b|\bdwellings?\b|\bapartments?\b|\bleases?\b|\bleased\b|\blodging\b)` / all / 0 / satenancy.ab
- `(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\bhousing\b|\bdwellings?\b|\bapartments?\b|\bleases?\b|\bleased\b|\blodging\b)[\s\S]{0,1200}?(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)` / all / 0 / satenancy.ba
- `\A(?=[\s\S]*(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b))(?=[\s\S]*(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\bhousing\b|\bdwellings?\b|\bapartments?\b|\bleases?\b|\bleased\b|\blodging\b))` / all / 3 / satenancy.and: MCL 750.49; MCL 750.50; MCL 750.50b
- `(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)[\s\S]{0,1200}?(?:\bmisdemeanor\b|\bfelony\b|\bguilty\b|\bcivil fines?\b|\bpenalt\w*)` / all / 4 / sapenal.ab: MCL 750.50; MCL 750.50a; MCL 750.50b; MCL 750.502c
- `(?:\bmisdemeanor\b|\bfelony\b|\bguilty\b|\bcivil fines?\b|\bpenalt\w*)[\s\S]{0,1200}?(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)` / all / 4 / sapenal.ba: MCL 750.49; MCL 750.50a; MCL 750.50b; MCL 750.502c
- `\A(?=[\s\S]*(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b))(?=[\s\S]*(?:\bmisdemeanor\b|\bfelony\b|\bguilty\b|\bcivil fines?\b|\bpenalt\w*))` / all / 5 / sapenal.and: MCL 750.49; MCL 750.50; MCL 750.50a; MCL 750.50b; MCL 750.502c
- `\bservice animals?\b` / all / 13 / saplain: MCL 37.301; MCL 37.303; MCL 37.305; MCL 257.791c; MCL 257.2145; MCL 287.291; MCL 750.50; MCL 750.50a; MCL 750.50b; MCL 750.502c; MCL 752.61; MCL 752.62; MCL 752.64
- positive satenancy @ SYNTH: passed ("A landlord shall not refuse to rent a dwelling to a person with a disability who is accompanied by a service animal.")
- positive sapenal @ MCL 750.502c: passed ("is guilty of a misdemeanor")
- positive saplain @ MCL 750.502c: passed ("a public accommodation shall modify its policies, practices, and procedures to permit the use of a service animal")

**MIG-B3-006** (cited) (supersedes MIG-B3-005), topic `service-animal-denial-penalty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:02:20. Rerun of MIG-B3-005 (inflections: lodgings, misdemeanors). Penalty for denying a service or assistance animal in housing; any service-animal rule with a housing or tenancy word.
- summary: Battery MIG-B3-006 (satenancy.ab 0; satenancy.ba 0; satenancy.and 3; sapenal.ab 4; sapenal.ba 4; sapenal.and 5; saplain 13 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)[\s\S]{0,1200}?(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\bhousing\b|\bdwellings?\b|\bapartments?\b|\bleases?\b|\bleased\b|\blodgings?\b)` / all / 0 / satenancy.ab
- `(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\bhousing\b|\bdwellings?\b|\bapartments?\b|\bleases?\b|\bleased\b|\blodgings?\b)[\s\S]{0,1200}?(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)` / all / 0 / satenancy.ba
- `\A(?=[\s\S]*(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b))(?=[\s\S]*(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\bhousing\b|\bdwellings?\b|\bapartments?\b|\bleases?\b|\bleased\b|\blodgings?\b))` / all / 3 / satenancy.and: MCL 750.49; MCL 750.50; MCL 750.50b
- `(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)[\s\S]{0,1200}?(?:\bmisdemeanors?\b|\bfelony\b|\bguilty\b|\bcivil fines?\b|\bpenalt\w*)` / all / 4 / sapenal.ab: MCL 750.50; MCL 750.50a; MCL 750.50b; MCL 750.502c
- `(?:\bmisdemeanors?\b|\bfelony\b|\bguilty\b|\bcivil fines?\b|\bpenalt\w*)[\s\S]{0,1200}?(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b)` / all / 4 / sapenal.ba: MCL 750.49; MCL 750.50a; MCL 750.50b; MCL 750.502c
- `\A(?=[\s\S]*(?:\bservice animals?\b|\bassistance animals?\b|\bsupport animals?\b|\bguide dogs?\b|\bleader dogs?\b|\bhearing dogs?\b|\bdog guides?\b|\bseeing eye dogs?\b))(?=[\s\S]*(?:\bmisdemeanors?\b|\bfelony\b|\bguilty\b|\bcivil fines?\b|\bpenalt\w*))` / all / 5 / sapenal.and: MCL 750.49; MCL 750.50; MCL 750.50a; MCL 750.50b; MCL 750.502c
- `\bservice animals?\b` / all / 13 / saplain: MCL 37.301; MCL 37.303; MCL 37.305; MCL 257.791c; MCL 257.2145; MCL 287.291; MCL 750.50; MCL 750.50a; MCL 750.50b; MCL 750.502c; MCL 752.61; MCL 752.62; MCL 752.64
- positive satenancy @ SYNTH: passed ("A landlord shall not refuse to rent a dwelling to a person with a disability who is accompanied by a service animal.")
- positive sapenal @ MCL 750.502c: passed ("is guilty of a misdemeanor")
- positive saplain @ MCL 750.502c: passed ("a public accommodation shall modify its policies, practices, and procedures to permit the use of a service animal")

**MIG-B3-007** (cited), topic `protected-class-inquiry-ban`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:03:42. Inquiry and record bans on protected traits in renting, beyond the discrimination ban.
- summary: Battery MIG-B3-007 (inqhouse.ab 8; inqhouse.ba 7; inqhouse.and 10; recinq 2; formapp 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binquir\w*|\bshall not ask\b|\bquestions? about\b)[\s\S]{0,1200}?(?:\breal estate transactions?\b|\bhousing accommodations?\b|\bprospective tenants?\b|\btenan\w*|\blandlords?\b|\brentals?\b|\brenters?\b)` / all / 8 / inqhouse.ab: MCL 37.1502; MCL 37.2502; MCL 37.2504; MCL 445.2513; MCL 445.2514; MCL 490.60; MCL 554.1059; MCL 600.2918
- `(?:\breal estate transactions?\b|\bhousing accommodations?\b|\bprospective tenants?\b|\btenan\w*|\blandlords?\b|\brentals?\b|\brenters?\b)[\s\S]{0,1200}?(?:\binquir\w*|\bshall not ask\b|\bquestions? about\b)` / all / 7 / inqhouse.ba: MCL 37.1502; MCL 37.2502; MCL 37.2504; MCL 490.60; MCL 554.634; MCL 554.1059; MCL 600.2918
- `\A(?=[\s\S]*(?:\binquir\w*|\bshall not ask\b|\bquestions? about\b))(?=[\s\S]*(?:\breal estate transactions?\b|\bhousing accommodations?\b|\bprospective tenants?\b|\btenan\w*|\blandlords?\b|\brentals?\b|\brenters?\b))` / all / 10 / inqhouse.and: MCL 37.1502; MCL 37.2502; MCL 37.2504; MCL 445.111; MCL 445.2513; MCL 445.2514; MCL 490.60; MCL 554.634; MCL 554.1059; MCL 600.2918
- `\brecord of inquiry\b` / all / 2 / recinq: MCL 37.1502; MCL 37.2502
- `\bform of application\b` / all / 10 / formapp: MCL 37.1206; MCL 37.1402; MCL 37.1502; MCL 37.2206; MCL 37.2402; MCL 37.2502; MCL 37.2504; MCL 38.512; MCL 125.2955; MCL 390.1627 [heading-only, read: MCL 333.16177]
- positive inqhouse @ MCL 37.2502: passed ("make a record of inquiry in connection with a prospective real estate transaction")
- positive recinq @ MCL 37.1502: passed ("make a record of inquiry in connection with a prospective real estate transaction")
- positive formapp @ MCL 37.2502: passed ("use a form of application for a real estate transaction")

**MIG-B3-008** (cited), topic `children-occupancy`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:05:08. Required lease content on children or occupancy; familial-status rules; children-occupancy rules with tenancy words.
- summary: Battery MIG-B3-008 (childreq.ab 0; childreq.ba 0; childreq.and 0; childten.ab 10; childten.ba 7; childten.and 16; famstat 13 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bchild(?:ren)?\b|\bminors?\b|\bfamilial status\b|\boccupan\w*)[\s\S]{0,1200}?(?:\b(?:rental agreements?|leases?) (?:shall|must) (?:contain|include|state|specify|set forth|address)\w*|\bshall be (?:included|stated|set forth) in (?:the|a|any|each|every) (?:written )?(?:rental agreement|lease)|\bmandatory statements?\b)` / all / 0 / childreq.ab
- `(?:\b(?:rental agreements?|leases?) (?:shall|must) (?:contain|include|state|specify|set forth|address)\w*|\bshall be (?:included|stated|set forth) in (?:the|a|any|each|every) (?:written )?(?:rental agreement|lease)|\bmandatory statements?\b)[\s\S]{0,1200}?(?:\bchild(?:ren)?\b|\bminors?\b|\bfamilial status\b|\boccupan\w*)` / all / 0 / childreq.ba
- `\A(?=[\s\S]*(?:\bchild(?:ren)?\b|\bminors?\b|\bfamilial status\b|\boccupan\w*))(?=[\s\S]*(?:\b(?:rental agreements?|leases?) (?:shall|must) (?:contain|include|state|specify|set forth|address)\w*|\bshall be (?:included|stated|set forth) in (?:the|a|any|each|every) (?:written )?(?:rental agreement|lease)|\bmandatory statements?\b))` / all / 0 / childreq.and
- `(?:\bchildren\b|\bfamilial status\b|\bminor children\b)[\s\S]{0,1200}?(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brental units?\b|\bhousing accommodations?\b)` / all / 10 / childten.ab: MCL 15.243; MCL 37.2502; MCL 37.2503; MCL 125.1446; MCL 125.2328b; MCL 333.5473a; MCL 333.5474; MCL 339.2515; MCL 400.14; MCL 500.1283
- `(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brental units?\b|\bhousing accommodations?\b)[\s\S]{0,1200}?(?:\bchildren\b|\bfamilial status\b|\bminor children\b)` / all / 7 / childten.ba: MCL 37.2502; MCL 37.2503; MCL 125.2328b; MCL 333.5473a; MCL 333.5474; MCL 339.2515; MCL 600.5451
- `\A(?=[\s\S]*(?:\bchildren\b|\bfamilial status\b|\bminor children\b))(?=[\s\S]*(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brental units?\b|\bhousing accommodations?\b))` / all / 16 / childten.and: MCL 15.243; MCL 37.2502; MCL 37.2503; MCL 125.1446; MCL 125.2328b; MCL 125.2652; MCL 205.217; MCL 211.9; MCL 333.5473a; MCL 333.5474; MCL 333.27954; MCL 339.2515; MCL 400.14; MCL 500.1283; MCL 565.104; MCL 600.5451
- `\bfamilial status\b` / all / 13 / famstat: MCL 37.2102; MCL 37.2103; MCL 37.2502; MCL 37.2503; MCL 37.2504; MCL 37.2505; MCL 37.2506; MCL 125.1446; MCL 339.2515; MCL 565.104; MCL 565.862; MCL 565.865; Mich Admin Code R 460.108
- positive childreq @ SYNTH: passed ("A rental agreement shall contain a statement of any restriction on occupancy by children.")
- positive childten @ MCL 37.2503: passed ("the age provision and the familial status provision only, the sale, rental, or lease of housing accommodations")
- positive famstat @ MCL 37.2502: passed ("familial status, or marital status of an individual or anyone residing with that individual")

**MIG-B3-009** (cited), topic `portfolio-thresholds`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:06:48. Duties or exemptions tied to the number of units a landlord owns or a building holds.
- summary: Battery MIG-B3-009 (unitcount.ab 16; unitcount.ba 17; unitcount.and 30; landlordof 2; relent 14 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten|twelve|twenty|twenty-five|fifty|one hundred) or (?:more|fewer)\b|\bfewer than\b|\bnot more than\b|\bmore than\b|\bless than\b|\bat least\b)[\s\S]{0,1200}?(?:\brental units?\b|\bfamilies living independently\b|\bsingle-family (?:houses|dwellings)\b|\bhousing units\b)` / all / 16 / unitcount.ab: MCL 37.1503; MCL 37.2502; MCL 37.2503; MCL 125.1422; MCL 125.1444f; MCL 125.1458b; MCL 125.1513d; MCL 125.2652; MCL 125.2664a; MCL 205.762; MCL 208.1201; MCL 208.1203; MCL 324.11502; MCL 333.5475a; MCL 554.601a; MCL 554.601c
- `(?:\brental units?\b|\bfamilies living independently\b|\bsingle-family (?:houses|dwellings)\b|\bhousing units\b)[\s\S]{0,1200}?(?:\b(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten|twelve|twenty|twenty-five|fifty|one hundred) or (?:more|fewer)\b|\bfewer than\b|\bnot more than\b|\bmore than\b|\bless than\b|\bat least\b)` / all / 17 / unitcount.ba: MCL 37.2502; MCL 37.2503; MCL 125.1444; MCL 125.1458b; MCL 125.2652; MCL 125.2664a; MCL 208.1201; MCL 208.1203; MCL 324.11502; MCL 324.11504; MCL 324.44501; MCL 333.5475a; MCL 554.601a; MCL 554.601c; MCL 554.609; 2026-PA-0102; Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\b(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten|twelve|twenty|twenty-five|fifty|one hundred) or (?:more|fewer)\b|\bfewer than\b|\bnot more than\b|\bmore than\b|\bless than\b|\bat least\b))(?=[\s\S]*(?:\brental units?\b|\bfamilies living independently\b|\bsingle-family (?:houses|dwellings)\b|\bhousing units\b))` / all / 30 / unitcount.and: MCL 37.1503; MCL 37.2502; MCL 37.2503; MCL 125.74; MCL 125.1415a; MCL 125.1422; MCL 125.1422e; MCL 125.1444; MCL 125.1444c; MCL 125.1444f; MCL 125.1458b; MCL 125.1513d; MCL 125.2652; MCL 125.2664a; MCL 125.2666; MCL 205.762; MCL 208.1201; MCL 208.1203; MCL 289.1107; MCL 289.1107.amended; MCL 324.11502; MCL 324.11504; MCL 324.44501; MCL 333.5475a; MCL 554.601a; MCL 554.601c; MCL 554.609; MCL 800.42; 2026-PA-0102; Mich Admin Code R 408.30546
- `\blandlord of (?:fewer|more|less|at least|\d+)\b` / all / 2 / landlordof: MCL 37.2502; MCL 554.601c
- `\brelated entit(?:y|ies)\b` / all / 14 / relent: MCL 37.2502; MCL 141.1611; MCL 208.1307; MCL 211.9i; MCL 211.9o; MCL 211.22; MCL 211.1057; MCL 211.1077; MCL 254.324e; MCL 324.14803; MCL 325.2015; MCL 438.61; MCL 490.407; MCL 554.601c
- positive unitcount @ MCL 554.601c: passed ("is a landlord of fewer than 5 rental units in this state")
- positive landlordof @ MCL 37.2502: passed ("is a landlord of fewer than 5 rental units in this state")
- positive relent @ MCL 554.601c: passed ("including all related entities to that person")

**MIG-B3-010** (cited), topic `sex-offender-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:08:44. Duty to disclose registered sex offenders to tenants or applicants, or to put a registry notice in a lease.
- summary: Battery MIG-B3-010 (soten.ab 8; soten.ba 9; soten.and 20; sodisc.ab 103; sodisc.ba 112; sodisc.and 157; soplain 57 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsex offenders?\b|\bregistered offenders?\b|\boffender registr\w*|\bregistrants?\b)[\s\S]{0,1200}?(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\brenters?\b|\bleases?\b|\bleased\b|\bdwellings?\b|\bapartments?\b|\brental agreements?\b)` / all / 8 / soten.ab: MCL 338.2184; MCL 339.6125; MCL 493.51; MCL 493.56; MCL 493.74; MCL 500.3101; MCL 554.969; MCL 771.2a
- `(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\brenters?\b|\bleases?\b|\bleased\b|\bdwellings?\b|\bapartments?\b|\brental agreements?\b)[\s\S]{0,1200}?(?:\bsex offenders?\b|\bregistered offenders?\b|\boffender registr\w*|\bregistrants?\b)` / all / 9 / soten.ba: MCL 207.1030; MCL 257.307; MCL 338.2184; MCL 445.1632; MCL 445.1651a; MCL 493.56; MCL 493.74; MCL 500.3101; MCL 554.969
- `\A(?=[\s\S]*(?:\bsex offenders?\b|\bregistered offenders?\b|\boffender registr\w*|\bregistrants?\b))(?=[\s\S]*(?:\btenan\w*|\blandlords?\b|\blessors?\b|\brentals?\b|\brenters?\b|\bleases?\b|\bleased\b|\bdwellings?\b|\bapartments?\b|\brental agreements?\b))` / all / 20 / soten.and: MCL 3.1012; MCL 207.1030; MCL 257.307; MCL 257.801; MCL 285.67; MCL 338.2184; MCL 339.6125; MCL 400.713; MCL 445.903; MCL 445.1632; MCL 445.1651a; MCL 445.1679; MCL 493.51; MCL 493.56; MCL 493.74; MCL 500.2103; MCL 500.3101; MCL 554.969; MCL 722.111; MCL 771.2a
- `(?:\bsex offenders?\b|\bregistered offenders?\b|\boffender registr\w*|\bregistrants?\b)[\s\S]{0,1200}?(?:\bdisclos\w*|\bnotif\w*|\binform\w*)` / all / 103 / sodisc.ab: MCL 28.722; MCL 28.725; MCL 28.725b; MCL 28.727; MCL 28.728; MCL 28.730; MCL 168.499; MCL 257.307; MCL 257.2104; MCL 257.2117; MCL 286.919; MCL 287.964; MCL 290.609b; MCL 324.2045; MCL 324.8307a; MCL 324.8310; MCL 324.8310a; MCL 324.8507; MCL 324.32707; MCL 324.32708; MCL 324.32708a; MCL 324.32725; MCL 324.34201; MCL 324.41333; MCL 328.216; MCL 328.218; MCL 328.219; MCL 328.228; MCL 333.10301; MCL 333.16174; ... (73 more in the battery log)
- `(?:\bdisclos\w*|\bnotif\w*|\binform\w*)[\s\S]{0,1200}?(?:\bsex offenders?\b|\bregistered offenders?\b|\boffender registr\w*|\bregistrants?\b)` / all / 112 / sodisc.ba: MCL 3.1012; MCL 28.292; MCL 28.725; MCL 28.725b; MCL 28.727; MCL 28.728; MCL 28.728a; MCL 28.728c; MCL 28.730; MCL 257.307; MCL 257.2104; MCL 257.2107; MCL 285.67; MCL 290.609b; MCL 324.2045; MCL 324.8307a; MCL 324.8310; MCL 324.8310a; MCL 324.8507; MCL 324.8511; MCL 324.32707; MCL 324.32708; MCL 324.32708a; MCL 324.32725; MCL 324.34201; MCL 324.41331; MCL 324.41333; MCL 328.216; MCL 328.218; MCL 328.228; ... (82 more in the battery log)
- `\A(?=[\s\S]*(?:\bsex offenders?\b|\bregistered offenders?\b|\boffender registr\w*|\bregistrants?\b))(?=[\s\S]*(?:\bdisclos\w*|\bnotif\w*|\binform\w*))` / all / 157 / sodisc.and: MCL 3.1012; MCL 28.292; MCL 28.722; MCL 28.725; MCL 28.725b; MCL 28.727; MCL 28.728; MCL 28.728a; MCL 28.728c; MCL 28.730; MCL 168.499; MCL 168.759a; MCL 257.307; MCL 257.801g; MCL 257.2104; MCL 257.2107; MCL 257.2117; MCL 285.67; MCL 286.919; MCL 287.959; MCL 287.964; MCL 290.609b; MCL 324.2045; MCL 324.8307a; MCL 324.8310; MCL 324.8310a; MCL 324.8505; MCL 324.8507; MCL 324.8511; MCL 324.32707; ... (127 more in the battery log)
- `\bsex offenders?\b` / all / 57 / soplain: MCL 28.292; MCL 28.721; MCL 28.721a; MCL 28.722; MCL 28.724; MCL 28.725b; MCL 28.727; MCL 28.728; MCL 28.728a; MCL 28.728c; MCL 38.103; MCL 257.307; MCL 257.2107; MCL 259.322; MCL 333.18251; MCL 333.21313; MCL 339.2518; MCL 380.1230; MCL 380.1230a; MCL 380.1230c; MCL 380.1230d; MCL 380.1230e; MCL 380.1230g; MCL 380.1507b; MCL 380.1535a; MCL 380.1539b; MCL 400.586l; MCL 400.713; MCL 565.957; MCL 712A.13a; ... (27 more in the battery log)
- positive soten @ SYNTH: passed ("A landlord shall notify each tenant that information about registered sex offenders is available on the public internet ")
- positive sodisc @ MCL 28.722: passed ("sex offender registration information")
- positive soplain @ MCL 28.728: passed ("A brief summary of the individual")

**MIG-B3-011** (cited), topic `tenant-confidential-information`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:10:42. Bars on a landlord disclosing tenant or applicant information; consent rules; data-security rules reaching landlords.
- summary: Battery MIG-B3-011 (discten.ab 33; discten.ba 26; discten.and 50; tenplain 9 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bdisclos\w*|\bconfidential\w*|\bprivacy\b|\breveal\w*|\bdivulg\w*)[\s\S]{0,1200}?(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\bprospective tenants?\b|\blessees?\b|\brental applica\w*)` / all / 33 / discten.ab: MCL 15.243; MCL 125.1574; MCL 125.2338; MCL 211.7dd; MCL 211.1154; MCL 213.55; MCL 257.217; MCL 257.233a; MCL 257.233b; MCL 324.61503a; MCL 330.1137; MCL 333.5473a; MCL 333.20142; MCL 339.2517; MCL 339.2518; MCL 400.713; MCL 432.143; MCL 440.2864; MCL 445.903; MCL 445.953; MCL 445.954; MCL 445.955; MCL 445.957; MCL 445.1086; MCL 554.601b; MCL 559.204; MCL 559.212; MCL 565.952; MCL 565.954; MCL 570.524; ... (3 more in the battery log)
- `(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\bprospective tenants?\b|\blessees?\b|\brental applica\w*)[\s\S]{0,1200}?(?:\bdisclos\w*|\bconfidential\w*|\bprivacy\b|\breveal\w*|\bdivulg\w*)` / all / 26 / discten.ba: MCL 15.243; MCL 125.1432; MCL 125.2338; MCL 211.1154; MCL 257.233a; MCL 257.233b; MCL 324.61503a; MCL 324.61703; MCL 333.20142; MCL 339.2518; MCL 440.2864; MCL 445.903; MCL 445.953; MCL 445.954; MCL 445.957; MCL 554.601b; MCL 559.204; MCL 559.212; MCL 559.222b; MCL 565.954; MCL 570.524; MCL 570.525; MCL 700.3715; MCL 700.5423; MCL 700.7817; MCL 750.372a
- `\A(?=[\s\S]*(?:\bdisclos\w*|\bconfidential\w*|\bprivacy\b|\breveal\w*|\bdivulg\w*))(?=[\s\S]*(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\bprospective tenants?\b|\blessees?\b|\brental applica\w*))` / all / 50 / discten.and: MCL 15.243; MCL 125.1432; MCL 125.1574; MCL 125.2338; MCL 206.527a; MCL 211.7cc; MCL 211.7dd; MCL 211.9; MCL 211.1057; MCL 211.1077; MCL 211.1154; MCL 213.55; MCL 257.217; MCL 257.233a; MCL 257.233b; MCL 257.251; MCL 324.61503a; MCL 324.61703; MCL 330.1137; MCL 333.5473a; MCL 333.20142; MCL 339.2517; MCL 339.2518; MCL 400.713; MCL 432.143; MCL 436.1531; MCL 440.2864; MCL 445.903; MCL 445.953; MCL 445.954; ... (20 more in the battery log)
- `\btenant (?:information|records?|data|files?)\b|\binformation (?:about|concerning|regarding) (?:a |the )?(?:tenant|applicant)s?\b|\bforwarding address information\b` / all / 9 / tenplain: MCL 37.1505; MCL 324.8310a; MCL 324.8313; MCL 338.3634; MCL 339.2665; MCL 400.64; MCL 400.1207; MCL 493.137; MCL 554.601b
- positive discten @ MCL 554.601b: passed ("The landlord shall not intentionally reveal forwarding address information")
- positive tenplain @ MCL 554.601b: passed ("The landlord shall reveal forwarding address information submitted by the tenant")

**MIG-B3-012** (superseded by MIG-B3-013), topic `tenant-records`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:11:55. Landlord duties to keep or produce rent ledgers, payment histories or tenant records.
- summary: Battery MIG-B3-012 (ledger.ab 9; ledger.ba 6; ledger.and 21; recreq.ab 0; recreq.ba 0; recreq.and 0; ledplain 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bledgers?\b|\bpayment histor(?:y|ies)\b|\brent rolls?\b|\brent records?\b|\brecords? of (?:rent|rental payments?|payments?)\b|\baccountings?\b)[\s\S]{0,1200}?(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b)` / all / 9 / ledger.ab: MCL 141.1369; MCL 208.1437; MCL 257.811q; MCL 324.61503a; MCL 324.61705; MCL 339.2512d; MCL 339.2517; MCL 440.2977; MCL 555.904
- `(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b)[\s\S]{0,1200}?(?:\bledgers?\b|\bpayment histor(?:y|ies)\b|\brent rolls?\b|\brent records?\b|\brecords? of (?:rent|rental payments?|payments?)\b|\baccountings?\b)` / all / 6 / ledger.ba: MCL 125.2657; MCL 141.1369; MCL 259.117; MCL 259.144; MCL 324.503; MCL 324.61503a [heading-only, read: MCL 440.2977]
- `\A(?=[\s\S]*(?:\bledgers?\b|\bpayment histor(?:y|ies)\b|\brent rolls?\b|\brent records?\b|\brecords? of (?:rent|rental payments?|payments?)\b|\baccountings?\b))(?=[\s\S]*(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b))` / all / 21 / ledger.and: MCL 38.1137; MCL 125.2466; MCL 125.2652; MCL 125.2657; MCL 125.4307; MCL 125.4402; MCL 125.4407; MCL 141.1369; MCL 208.1201; MCL 208.1437; MCL 257.811q; MCL 259.117; MCL 259.144; MCL 324.503; MCL 324.61503a; MCL 324.61705; MCL 333.5474; MCL 339.2512d; MCL 339.2517; MCL 440.9102; MCL 555.904 [heading-only, read: MCL 440.2977]
- `(?:\brequest\w*)[\s\S]{0,1200}?(?:\brecords?\b[\s\S]{0,40}?\btenan\w*|\btenant\'s records?\b|\bcopies of (?:the )?(?:lease|rental agreement))` / all / 0 / recreq.ab
- `(?:\brecords?\b[\s\S]{0,40}?\btenan\w*|\btenant\'s records?\b|\bcopies of (?:the )?(?:lease|rental agreement))[\s\S]{0,1200}?(?:\brequest\w*)` / all / 0 / recreq.ba
- `\A(?=[\s\S]*(?:\brequest\w*))(?=[\s\S]*(?:\brecords?\b[\s\S]{0,40}?\btenan\w*|\btenant\'s records?\b|\bcopies of (?:the )?(?:lease|rental agreement)))` / all / 0 / recreq.and
- `\brent ledgers?\b|\btenant ledgers?\b|\bledger of (?:rent|payments)\b` / all / 0 / ledplain
- positive ledger @ SYNTH: passed ("A landlord shall keep a ledger of all rent payments made by the tenant and provide a copy to the tenant on request.")
- positive recreq @ SYNTH: passed ("On written request, a landlord shall provide the tenant with copies of the tenant's records.")
- positive ledplain @ SYNTH: passed ("The landlord shall provide the tenant a rent ledger.")

**MIG-B3-013** (cited) (supersedes MIG-B3-012), topic `tenant-records`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:12:41. Rerun of MIG-B3-012 (inner length cap removed from recreq; everyday-word companion added). Landlord duties to keep or produce rent ledgers, payment histories or tenant records.
- summary: Battery MIG-B3-013 (ledger.ab 9; ledger.ba 6; ledger.and 21; recreq.ab 2; recreq.ba 1; recreq.and 4; stmt.ab 2; stmt.ba 2; stmt.and 4; ledplain 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bledgers?\b|\bpayment histor(?:y|ies)\b|\brent rolls?\b|\brent records?\b|\brecords? of (?:rent|rental payments?|payments?)\b|\baccountings?\b)[\s\S]{0,1200}?(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b)` / all / 9 / ledger.ab: MCL 141.1369; MCL 208.1437; MCL 257.811q; MCL 324.61503a; MCL 324.61705; MCL 339.2512d; MCL 339.2517; MCL 440.2977; MCL 555.904
- `(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b)[\s\S]{0,1200}?(?:\bledgers?\b|\bpayment histor(?:y|ies)\b|\brent rolls?\b|\brent records?\b|\brecords? of (?:rent|rental payments?|payments?)\b|\baccountings?\b)` / all / 6 / ledger.ba: MCL 125.2657; MCL 141.1369; MCL 259.117; MCL 259.144; MCL 324.503; MCL 324.61503a [heading-only, read: MCL 440.2977]
- `\A(?=[\s\S]*(?:\bledgers?\b|\bpayment histor(?:y|ies)\b|\brent rolls?\b|\brent records?\b|\brecords? of (?:rent|rental payments?|payments?)\b|\baccountings?\b))(?=[\s\S]*(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b))` / all / 21 / ledger.and: MCL 38.1137; MCL 125.2466; MCL 125.2652; MCL 125.2657; MCL 125.4307; MCL 125.4402; MCL 125.4407; MCL 141.1369; MCL 208.1201; MCL 208.1437; MCL 257.811q; MCL 259.117; MCL 259.144; MCL 324.503; MCL 324.61503a; MCL 324.61705; MCL 333.5474; MCL 339.2512d; MCL 339.2517; MCL 440.9102; MCL 555.904 [heading-only, read: MCL 440.2977]
- `(?:\brequest\w*)[\s\S]{0,1200}?(?:\btenant\'s records?\b|\brecords? of (?:the |a )?tenants?\b|\bcopies of (?:the )?(?:lease|rental agreement)\b|\bcopy of (?:the |a )?(?:lease|rental agreement)\b)` / all / 2 / recreq.ab: MCL 211.1161; Mich Admin Code R 460.107
- `(?:\btenant\'s records?\b|\brecords? of (?:the |a )?tenants?\b|\bcopies of (?:the )?(?:lease|rental agreement)\b|\bcopy of (?:the |a )?(?:lease|rental agreement)\b)[\s\S]{0,1200}?(?:\brequest\w*)` / all / 1 / recreq.ba: Mich Admin Code R 460.107
- `\A(?=[\s\S]*(?:\brequest\w*))(?=[\s\S]*(?:\btenant\'s records?\b|\brecords? of (?:the |a )?tenants?\b|\bcopies of (?:the )?(?:lease|rental agreement)\b|\bcopy of (?:the |a )?(?:lease|rental agreement)\b))` / all / 4 / recreq.and: MCL 211.1154; MCL 211.1161; MCL 324.80124; Mich Admin Code R 460.107
- `(?:\bstatements? of (?:account|rent)\b|\baccount statements?\b|\bbalance due\b|\bamounts? owed\b)[\s\S]{0,1200}?(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b)` / all / 2 / stmt.ab: MCL 554.633; 2026-PA-0103
- `(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b)[\s\S]{0,1200}?(?:\bstatements? of (?:account|rent)\b|\baccount statements?\b|\bbalance due\b|\bamounts? owed\b)` / all / 2 / stmt.ba: MCL 554.633; 2026-PA-0103
- `\A(?=[\s\S]*(?:\bstatements? of (?:account|rent)\b|\baccount statements?\b|\bbalance due\b|\bamounts? owed\b))(?=[\s\S]*(?:\btenants?\b|\btenant\'s\b|\blandlords?\b|\blandlord\'s\b|\blessors?\b|\blessees?\b|\brental units?\b))` / all / 4 / stmt.and: MCL 211.78t; MCL 257.251; MCL 554.633; 2026-PA-0103
- `\brent ledgers?\b|\btenant ledgers?\b|\bledger of (?:rent|payments)\b` / all / 0 / ledplain
- positive ledger @ SYNTH: passed ("A landlord shall keep a ledger of all rent payments made by the tenant and provide a copy to the tenant on request.")
- positive recreq @ SYNTH: passed ("On written request, a landlord shall provide the tenant with copies of the tenant's records.")
- positive stmt @ SYNTH: passed ("On request the landlord shall give the tenant a statement of account showing the balance due.")
- positive ledplain @ SYNTH: passed ("The landlord shall provide the tenant a rent ledger.")

**MIG-B3-014** (cited), topic `employee-screening`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:14:25. Background screening of apartment or property-management employees.
- summary: Battery MIG-B3-014 (bgrent.ab 0; bgrent.ba 1; bgrent.and 3; staff 7 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bbackground checks?\b|\bcriminal (?:history|records?) (?:checks?|backgrounds?)\b|\bcriminal history\b|\bfingerprint\w*)[\s\S]{0,1200}?(?:\bapartments?\b|\blandlords?\b|\blessors?\b|\bproperty manage\w*|\btenants?\b|\brental (?:units?|propert\w*|housing)\b|\bmultiple dwellings?\b)` / all / 0 / bgrent.ab
- `(?:\bapartments?\b|\blandlords?\b|\blessors?\b|\bproperty manage\w*|\btenants?\b|\brental (?:units?|propert\w*|housing)\b|\bmultiple dwellings?\b)[\s\S]{0,1200}?(?:\bbackground checks?\b|\bcriminal (?:history|records?) (?:checks?|backgrounds?)\b|\bcriminal history\b|\bfingerprint\w*)` / all / 1 / bgrent.ba: MCL 445.903
- `\A(?=[\s\S]*(?:\bbackground checks?\b|\bcriminal (?:history|records?) (?:checks?|backgrounds?)\b|\bcriminal history\b|\bfingerprint\w*))(?=[\s\S]*(?:\bapartments?\b|\blandlords?\b|\blessors?\b|\bproperty manage\w*|\btenants?\b|\brental (?:units?|propert\w*|housing)\b|\bmultiple dwellings?\b))` / all / 3 / bgrent.and: MCL 28.425b; MCL 400.713; MCL 445.903
- `\bmaintenance (?:workers?|employees?|personnel|staff)\b|\bapartment (?:employees?|staff|managers?)\b|\bresident managers?\b|\bleasing agents?\b` / all / 7 / staff: MCL 3.558; MCL 3.578; MCL 280.33; MCL 333.5473a; MCL 338.1056; MCL 338.1058; MCL 339.2512e
- positive bgrent @ MCL 445.903: passed ("requested by a landlord, lessor, or property manager to obtain a background check")
- positive staff @ SYNTH: passed ("A landlord shall obtain a criminal history check of each apartment employee and maintenance worker who has access to dwe")

**MIG-B3-015** (superseded by MIG-B3-016), topic `senior-housing-work-card`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:14:39. Work cards, permits or screening for staff of senior or 55-plus housing.
- summary: Battery MIG-B3-015 (srstaff.ab 5; srstaff.ba 4; srstaff.and 11; wcard 8 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bwork cards?\b|\bwork permits?\b|\bemployees?\b|\bstaff\b|\bpersonnel\b)[\s\S]{0,1200}?(?:\bsenior (?:citizen )?housing\b|\bhousing for (?:older persons|senior citizens|the elderly)\b|\bsenior citizen housing\b|\b(?:50|55|62) years of age or older\b)` / all / 5 / srstaff.ab: MCL 38.19; MCL 38.19f; MCL 38.1381; MCL 46.12a; MCL 550.1301
- `(?:\bsenior (?:citizen )?housing\b|\bhousing for (?:older persons|senior citizens|the elderly)\b|\bsenior citizen housing\b|\b(?:50|55|62) years of age or older\b)[\s\S]{0,1200}?(?:\bwork cards?\b|\bwork permits?\b|\bemployees?\b|\bstaff\b|\bpersonnel\b)` / all / 4 / srstaff.ba: MCL 38.19f; MCL 38.1381; MCL 46.12a; MCL 750.303a
- `\A(?=[\s\S]*(?:\bwork cards?\b|\bwork permits?\b|\bemployees?\b|\bstaff\b|\bpersonnel\b))(?=[\s\S]*(?:\bsenior (?:citizen )?housing\b|\bhousing for (?:older persons|senior citizens|the elderly)\b|\bsenior citizen housing\b|\b(?:50|55|62) years of age or older\b))` / all / 11 / srstaff.and: MCL 32.706; MCL 38.19; MCL 38.19f; MCL 38.48; MCL 38.556; MCL 38.1381; MCL 46.12a; MCL 125.1411; MCL 125.1444c; MCL 550.1301; MCL 750.303a
- `\bwork cards?\b|\bwork permits?\b` / all / 8 / wcard: MCL 409.104; MCL 409.105; MCL 409.106; MCL 409.107; MCL 409.108; MCL 409.109; MCL 409.115; MCL 409.121
- positive srstaff @ SYNTH: passed ("An employee of senior citizen housing shall obtain a work card before beginning employment.")
- positive wcard @ SYNTH: passed ("Each employee shall obtain a work card.")

**MIG-B3-016** (cited) (supersedes MIG-B3-015), topic `senior-housing-work-card`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:15:03. Rerun of MIG-B3-015 (inflection: staffed, staffing). Work cards, permits or screening for staff of senior or 55-plus housing.
- summary: Battery MIG-B3-016 (srstaff.ab 5; srstaff.ba 4; srstaff.and 11; wcard 8 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bwork cards?\b|\bwork permits?\b|\bemployees?\b|\bstaff\w*|\bpersonnel\b)[\s\S]{0,1200}?(?:\bsenior (?:citizen )?housing\b|\bhousing for (?:older persons|senior citizens|the elderly)\b|\bsenior citizen housing\b|\b(?:50|55|62) years of age or older\b)` / all / 5 / srstaff.ab: MCL 38.19; MCL 38.19f; MCL 38.1381; MCL 46.12a; MCL 550.1301
- `(?:\bsenior (?:citizen )?housing\b|\bhousing for (?:older persons|senior citizens|the elderly)\b|\bsenior citizen housing\b|\b(?:50|55|62) years of age or older\b)[\s\S]{0,1200}?(?:\bwork cards?\b|\bwork permits?\b|\bemployees?\b|\bstaff\w*|\bpersonnel\b)` / all / 4 / srstaff.ba: MCL 38.19f; MCL 38.1381; MCL 46.12a; MCL 750.303a
- `\A(?=[\s\S]*(?:\bwork cards?\b|\bwork permits?\b|\bemployees?\b|\bstaff\w*|\bpersonnel\b))(?=[\s\S]*(?:\bsenior (?:citizen )?housing\b|\bhousing for (?:older persons|senior citizens|the elderly)\b|\bsenior citizen housing\b|\b(?:50|55|62) years of age or older\b))` / all / 11 / srstaff.and: MCL 32.706; MCL 38.19; MCL 38.19f; MCL 38.48; MCL 38.556; MCL 38.1381; MCL 46.12a; MCL 125.1411; MCL 125.1444c; MCL 550.1301; MCL 750.303a
- `\bwork cards?\b|\bwork permits?\b` / all / 8 / wcard: MCL 409.104; MCL 409.105; MCL 409.106; MCL 409.107; MCL 409.108; MCL 409.109; MCL 409.115; MCL 409.121
- positive srstaff @ SYNTH: passed ("An employee of senior citizen housing shall obtain a work card before beginning employment.")
- positive wcard @ SYNTH: passed ("Each employee shall obtain a work card.")

**MIG-B3-017** (superseded by MIG-B3-018), topic `veterans-incentive`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:16:20. Incentives, credits, preferences or protections for renting to veterans or servicemembers.
- summary: Battery MIG-B3-017 (vetrent.ab 8; vetrent.ba 8; vetrent.and 14; milstat 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bveterans?\b|\bveteran\'s\b|\bservicemembers?\b|\bservice members?\b)[\s\S]{0,1200}?(?:\blandlords?\b|\btenants?\b|\btenancy\b|\brent\b|\brents\b|\brented\b|\brental (?:units?|housing|propert\w*|assistance)\b|\brenters?\b)` / all / 8 / vetrent.ab: MCL 35.273; MCL 35.491; MCL 35.801; MCL 206.522; MCL 554.601; MCL 570.522; MCL 570.524; MCL 570.525 [heading-only, read: MCL 123.925]
- `(?:\blandlords?\b|\btenants?\b|\btenancy\b|\brent\b|\brents\b|\brented\b|\brental (?:units?|housing|propert\w*|assistance)\b|\brenters?\b)[\s\S]{0,1200}?(?:\bveterans?\b|\bveteran\'s\b|\bservicemembers?\b|\bservice members?\b)` / all / 8 / vetrent.ba: MCL 35.273; MCL 35.491; MCL 123.925; MCL 432.103a; MCL 554.601; MCL 570.522; MCL 570.524; MCL 570.525
- `\A(?=[\s\S]*(?:\bveterans?\b|\bveteran\'s\b|\bservicemembers?\b|\bservice members?\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\btenancy\b|\brent\b|\brents\b|\brented\b|\brental (?:units?|housing|propert\w*|assistance)\b|\brenters?\b))` / all / 14 / vetrent.and: MCL 35.273; MCL 35.491; MCL 35.801; MCL 206.30; MCL 206.522; MCL 211.9; MCL 257.224; MCL 432.103a; MCL 436.1532; MCL 445.111; MCL 554.601; MCL 570.522; MCL 570.524; MCL 570.525 [heading-only, read: MCL 123.925]
- `\bmilitary status\b|\bveteran status\b` / all / 2 / milstat: MCL 435.371; MCL 600.1203
- positive vetrent @ SYNTH: passed ("A landlord that rents a dwelling to a veteran is eligible for a credit against the tax imposed by this act.")
- positive milstat @ SYNTH: passed ("discrimination based on military status or veteran status")

**MIG-B3-018** (cited) (supersedes MIG-B3-017), topic `veterans-incentive`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:16:45. Rerun of MIG-B3-017 (inflection: renting). Incentives, credits, preferences or protections for renting to veterans or servicemembers.
- summary: Battery MIG-B3-018 (vetrent.ab 9; vetrent.ba 8; vetrent.and 18; milstat 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bveterans?\b|\bveteran\'s\b|\bservicemembers?\b|\bservice members?\b)[\s\S]{0,1200}?(?:\blandlords?\b|\btenants?\b|\btenancy\b|\brent(?:s|ed|ing)?\b|\brental (?:units?|housing|propert\w*|assistance)\b|\brenters?\b)` / all / 9 / vetrent.ab: MCL 18.1221; MCL 35.273; MCL 35.491; MCL 35.801; MCL 206.522; MCL 554.601; MCL 570.522; MCL 570.524; MCL 570.525 [heading-only, read: MCL 123.925]
- `(?:\blandlords?\b|\btenants?\b|\btenancy\b|\brent(?:s|ed|ing)?\b|\brental (?:units?|housing|propert\w*|assistance)\b|\brenters?\b)[\s\S]{0,1200}?(?:\bveterans?\b|\bveteran\'s\b|\bservicemembers?\b|\bservice members?\b)` / all / 8 / vetrent.ba: MCL 35.273; MCL 35.491; MCL 123.925; MCL 432.103a; MCL 554.601; MCL 570.522; MCL 570.524; MCL 570.525
- `\A(?=[\s\S]*(?:\bveterans?\b|\bveteran\'s\b|\bservicemembers?\b|\bservice members?\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\btenancy\b|\brent(?:s|ed|ing)?\b|\brental (?:units?|housing|propert\w*|assistance)\b|\brenters?\b))` / all / 18 / vetrent.and: MCL 18.1221; MCL 35.273; MCL 35.491; MCL 35.801; MCL 206.30; MCL 206.522; MCL 211.9; MCL 257.224; MCL 257.801; MCL 324.81101; MCL 324.82101; MCL 432.103a; MCL 436.1532; MCL 445.111; MCL 554.601; MCL 570.522; MCL 570.524; MCL 570.525 [heading-only, read: MCL 123.925]
- `\bmilitary status\b|\bveteran status\b` / all / 2 / milstat: MCL 435.371; MCL 600.1203
- positive vetrent @ SYNTH: passed ("A landlord that rents a dwelling to a veteran is eligible for a credit against the tax imposed by this act.")
- positive milstat @ SYNTH: passed ("discrimination based on military status or veteran status")

**MIG-B3-019** (superseded by MIG-B3-023), topic `religious-cultural-display`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:13. Tenant or resident right to display religious or cultural items; limits on landlord or association display rules.
- summary: Battery MIG-B3-019 (reldisp.ab 6; reldisp.ba 10; reldisp.and 20; disptn.ab 19; disptn.ba 20; disptn.and 44; relplain 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\breligious\b|\bcultural\b|\bmezuzah\w*|\bholiday\b)[\s\S]{0,1200}?(?:\bdisplay\w*|\bsymbols?\b|\bdecorations?\b|\bdoorframes?\b|\bdoorposts?\b)` / all / 6 / reldisp.ab: MCL 252.302; MCL 421.48; MCL 435.101; MCL 750.297e; MCL 750.297f; MCL 750.411r
- `(?:\bdisplay\w*|\bsymbols?\b|\bdecorations?\b|\bdoorframes?\b|\bdoorposts?\b)[\s\S]{0,1200}?(?:\breligious\b|\bcultural\b|\bmezuzah\w*|\bholiday\b)` / all / 10 / reldisp.ba: MCL 252.302; MCL 252.307b; MCL 257.310e; MCL 338.3434a; MCL 339.5701; MCL 380.1175; MCL 435.101; MCL 445.903i; MCL 551.102; MCL 750.411r
- `\A(?=[\s\S]*(?:\breligious\b|\bcultural\b|\bmezuzah\w*|\bholiday\b))(?=[\s\S]*(?:\bdisplay\w*|\bsymbols?\b|\bdecorations?\b|\bdoorframes?\b|\bdoorposts?\b))` / all / 20 / reldisp.and: MCL 207.803; MCL 252.302; MCL 252.307b; MCL 257.310e; MCL 257.675; MCL 257.719a; MCL 286.702; MCL 333.16177; MCL 338.3434a; MCL 339.5701; MCL 380.1175; MCL 421.27; MCL 421.43; MCL 421.48; MCL 435.101; MCL 445.903i; MCL 551.102; MCL 750.297e; MCL 750.297f; MCL 750.411r
- `(?:\bdisplay\w*)[\s\S]{0,1200}?(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b)` / all / 19 / disptn.ab: MCL 10.84; MCL 28.291; MCL 28.466; MCL 35.231; MCL 37.2502; MCL 55.291; MCL 257.243; MCL 257.244; MCL 257.801h; MCL 259.82; MCL 324.43523a; MCL 324.48732; MCL 333.20194; MCL 333.27954; MCL 445.955; MCL 484.1315; MCL 554.601c; MCL 559.156a; MCL 750.147
- `(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b)[\s\S]{0,1200}?(?:\bdisplay\w*)` / all / 20 / disptn.ba: MCL 28.466; MCL 37.2502; MCL 125.1352; MCL 257.243; MCL 257.252k; MCL 257.801h; MCL 259.82; MCL 259.109; MCL 324.43532; MCL 324.43533; MCL 324.43536; MCL 324.80130o; MCL 432.302; MCL 445.903; MCL 445.955; MCL 484.1314; MCL 484.1315; MCL 554.601c; MCL 559.156a; MCL 750.147
- `\A(?=[\s\S]*(?:\bdisplay\w*))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b))` / all / 44 / disptn.and: MCL 10.84; MCL 28.291; MCL 28.304; MCL 28.425b; MCL 28.466; MCL 35.231; MCL 37.2502; MCL 55.291; MCL 125.1352; MCL 207.803; MCL 257.243; MCL 257.244; MCL 257.248; MCL 257.252k; MCL 257.627; MCL 257.801h; MCL 257.811q; MCL 259.82; MCL 259.109; MCL 287.524; MCL 287.1122; MCL 288.573; MCL 324.43523a; MCL 324.43532; MCL 324.43533; MCL 324.43536; MCL 324.48732; MCL 324.78119; MCL 324.80130o; MCL 324.81133; ... (14 more in the battery log)
- `\breligious (?:items?|symbols?|displays?|objects?|decorations?)\b` / all / 0 / relplain
- positive reldisp @ SYNTH: passed ("A landlord shall not prohibit a tenant from displaying a religious symbol on the doorframe of the dwelling.")
- positive disptn @ MCL 559.156a: passed ("shall not prohibit a co-owner from displaying a single United States flag")
- positive relplain @ SYNTH: passed ("displaying religious items on the entry door")

**MIG-B3-020** (cited), topic `political-access`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:29. Access for candidates, canvassers or petition circulators to rental buildings; tenant political signs or activity.
- summary: Battery MIG-B3-020 (polten.ab 29; polten.ba 31; polten.and 47; polplain 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bcandidates?\b|\bcanvass\w*|\bcirculators?\b|\bpolitical (?:signs?|activit\w*|campaigns?|parties|party|speech|literature|expression|views?)\b|\belection (?:signs?|materials?)\b|\bcampaign (?:signs?|literature|materials?)\b)[\s\S]{0,1200}?(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b)` / all / 29 / polten.ab: MCL 4.11; MCL 41.713; MCL 46.411; MCL 117.3a; MCL 125.1421; MCL 125.2573; MCL 125.2613; MCL 168.53; MCL 168.303; MCL 168.386; MCL 168.544c; MCL 168.624; MCL 169.212; MCL 169.221; MCL 169.251; MCL 169.251.amended; MCL 211.205b; MCL 286.943; MCL 324.9307; MCL 330.1134a; MCL 333.13703; MCL 333.17001; MCL 333.20173a; MCL 333.21905; MCL 397.178; MCL 397.194; MCL 400.734b; MCL 409.222; MCL 432.204
- `(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b)[\s\S]{0,1200}?(?:\bcandidates?\b|\bcanvass\w*|\bcirculators?\b|\bpolitical (?:signs?|activit\w*|campaigns?|parties|party|speech|literature|expression|views?)\b|\belection (?:signs?|materials?)\b|\bcampaign (?:signs?|literature|materials?)\b)` / all / 31 / polten.ba: MCL 12.194; MCL 15.344; MCL 38.407; MCL 38.503; MCL 46.411; MCL 125.1421; MCL 125.2573; MCL 125.2613; MCL 168.303; MCL 168.386; MCL 168.482; MCL 168.544c; MCL 168.624; MCL 169.212; MCL 169.221; MCL 169.251; MCL 169.251.amended; MCL 211.205b; MCL 286.943; MCL 324.9307; MCL 324.76503; MCL 330.1134a; MCL 333.13703; MCL 333.27301; MCL 390.355; MCL 399.73; MCL 399.406; MCL 399.506; MCL 400.2; MCL 400.734b; ... (1 more in the battery log)
- `\A(?=[\s\S]*(?:\bcandidates?\b|\bcanvass\w*|\bcirculators?\b|\bpolitical (?:signs?|activit\w*|campaigns?|parties|party|speech|literature|expression|views?)\b|\belection (?:signs?|materials?)\b|\bcampaign (?:signs?|literature|materials?)\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b))` / all / 47 / polten.and: MCL 4.11; MCL 12.194; MCL 15.243; MCL 15.344; MCL 18.45; MCL 38.407; MCL 38.503; MCL 41.713; MCL 46.411; MCL 117.3a; MCL 125.1421; MCL 125.2573; MCL 125.2613; MCL 141.503; MCL 141.1565; MCL 168.53; MCL 168.303; MCL 168.386; MCL 168.482; MCL 168.544c; MCL 168.624; MCL 169.212; MCL 169.221; MCL 169.251; MCL 169.251.amended; MCL 211.205b; MCL 286.943; MCL 324.9307; MCL 324.76503; MCL 330.1134a; ... (17 more in the battery log)
- `\bpolitical signs?\b|\bdoor-to-door\b|\bcampaign signs?\b` / all / 1 / polplain: MCL 125.84
- positive polten @ SYNTH: passed ("A landlord of a multiple dwelling shall not deny a candidate for public office access to the apartments for the purpose ")
- positive polplain @ SYNTH: passed ("A tenant may display political signs in a window.")

**MIG-B3-021** (superseded by MIG-B3-024), topic `tenant-right-to-organize`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:45. Tenant or resident right to organize, form or join an association; landlord interference.
- summary: Battery MIG-B3-021 (orgten.ab 16; orgten.ba 17; orgten.and 36; orgplain 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\btenant (?:organizations?|associations?|unions?|councils?|groups?)\b|\bresident (?:associations?|councils?|organizations?)\b|\borganiz\w*|\bassemble\b|\bmeetings?\b)[\s\S]{0,1200}?(?:\btenants?\b|\blandlords?\b|\bresidents? of (?:a |the )?(?:mobile home park|housing)\b)` / all / 16 / orgten.ab: MCL 37.2502; MCL 125.654; MCL 125.1411; MCL 125.2730; MCL 288.473; MCL 288.573; MCL 320.2033; MCL 333.5474; MCL 400.14; MCL 450.1446; MCL 450.2446; MCL 500.2103; MCL 554.601b; MCL 600.5720; MCL 750.141a; Mich Admin Code R 460.107
- `(?:\btenants?\b|\blandlords?\b|\bresidents? of (?:a |the )?(?:mobile home park|housing)\b)[\s\S]{0,1200}?(?:\btenant (?:organizations?|associations?|unions?|councils?|groups?)\b|\bresident (?:associations?|councils?|organizations?)\b|\borganiz\w*|\bassemble\b|\bmeetings?\b)` / all / 17 / orgten.ba: MCL 37.2503; MCL 125.654; MCL 125.1422b; MCL 125.1422c; MCL 125.1444c; MCL 125.1575; MCL 125.2730; MCL 211.9; MCL 288.473; MCL 288.573; MCL 324.50104; MCL 333.5474; MCL 445.1621; MCL 450.1446; MCL 450.2446; MCL 554.601b; MCL 600.5720
- `\A(?=[\s\S]*(?:\btenant (?:organizations?|associations?|unions?|councils?|groups?)\b|\bresident (?:associations?|councils?|organizations?)\b|\borganiz\w*|\bassemble\b|\bmeetings?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\bresidents? of (?:a |the )?(?:mobile home park|housing)\b))` / all / 36 / orgten.and: MCL 15.243; MCL 37.2502; MCL 37.2503; MCL 117.4q; MCL 125.654; MCL 125.1411; MCL 125.1421; MCL 125.1422b; MCL 125.1422c; MCL 125.1444c; MCL 125.1575; MCL 125.2730; MCL 125.4402; MCL 211.9; MCL 211.27a; MCL 288.473; MCL 288.573; MCL 320.2033; MCL 324.50104; MCL 333.5474; MCL 400.14; MCL 421.43; MCL 438.31c; MCL 445.1621; MCL 450.1446; MCL 450.2446; MCL 450.4502; MCL 500.2103; MCL 500.2901; MCL 500.6868; ... (6 more in the battery log)
- `\btenant organizations?\b|\btenants? unions?\b|\btenant associations?\b|\bresident associations?\b` / all / 2 / orgplain: MCL 125.1422c; MCL 600.5720
- positive orgten @ MCL 600.5720: passed ("including membership in a tenant organization and a lawful activity of a tenant organization arising out of the tenancy")
- positive orgplain @ MCL 600.5720: passed ("membership in a tenant organization")

**MIG-B3-022** (cited), topic `guest-rights`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:19:00. Statutory rights of tenants to receive guests, caregivers or suppliers; bars on guest fees.
- summary: Battery MIG-B3-022 (guestten.ab 37; guestten.ba 34; guestten.and 51; guestfee 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bguests?\b|\bvisitors?\b|\binvitees?\b|\bcaregivers?\b|\bsuppliers?\b)[\s\S]{0,1200}?(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental units?\b|\brental agreements?\b)` / all / 37 / guestten.ab: MCL 125.482; MCL 324.81133; MCL 408.806; MCL 427.201; MCL 427.202; MCL 427.203; MCL 429.203; MCL 440.2859; MCL 440.2866; MCL 440.2869; MCL 440.2870; MCL 440.2871; MCL 440.2934; MCL 440.2935; MCL 440.2960; MCL 440.2961; MCL 440.2962; MCL 440.2963; MCL 440.2964; MCL 440.2965; MCL 440.2966; MCL 453.362; MCL 455.16a; MCL 484.1314; MCL 484.1315; MCL 484.1604; MCL 554.633; MCL 570.1103; MCL 570.1106; MCL 570.1107; ... (7 more in the battery log) [heading-only, read: MCL 432.138]
- `(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental units?\b|\brental agreements?\b)[\s\S]{0,1200}?(?:\bguests?\b|\bvisitors?\b|\binvitees?\b|\bcaregivers?\b|\bsuppliers?\b)` / all / 34 / guestten.ba: MCL 211.7cc; MCL 427.201; MCL 427.203; MCL 432.138; MCL 440.2803; MCL 440.2859; MCL 440.2861; MCL 440.2866; MCL 440.2869; MCL 440.2870; MCL 440.2871; MCL 440.2934; MCL 440.2935; MCL 440.2960; MCL 440.2961; MCL 440.2962; MCL 440.2963; MCL 440.2964; MCL 440.2965; MCL 440.2966; MCL 455.16a; MCL 484.1314; MCL 484.1604; MCL 554.632; MCL 554.633; MCL 570.1103; MCL 570.1104; MCL 570.1106; MCL 570.1107; MCL 570.1108; ... (4 more in the battery log)
- `\A(?=[\s\S]*(?:\bguests?\b|\bvisitors?\b|\binvitees?\b|\bcaregivers?\b|\bsuppliers?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental units?\b|\brental agreements?\b))` / all / 51 / guestten.and: MCL 18.361; MCL 125.482; MCL 125.2652; MCL 211.7cc; MCL 257.244; MCL 324.81133; MCL 333.20142; MCL 408.806; MCL 421.43; MCL 427.201; MCL 427.202; MCL 427.203; MCL 429.203; MCL 432.138; MCL 436.1531; MCL 440.2803; MCL 440.2859; MCL 440.2861; MCL 440.2866; MCL 440.2869; MCL 440.2870; MCL 440.2871; MCL 440.2934; MCL 440.2935; MCL 440.2960; MCL 440.2961; MCL 440.2962; MCL 440.2963; MCL 440.2964; MCL 440.2965; ... (21 more in the battery log)
- `\bguest fees?\b|\bfees? for (?:a |any )?guests?\b|\bcharges? for (?:a |any )?guests?\b` / all / 0 / guestfee
- positive guestten @ MCL 554.633: passed ("peaceful enjoyment of tenants and guests")
- positive guestfee @ SYNTH: passed ("A landlord shall not charge a guest fee.")

**MIG-B3-023** (cited) (supersedes MIG-B3-019), topic `religious-cultural-display`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:19:41. Rerun of MIG-B3-019 (inflection: holidays). Tenant or resident right to display religious or cultural items; limits on landlord or association display rules.
- summary: Battery MIG-B3-023 (reldisp.ab 7; reldisp.ba 11; reldisp.and 22; disptn.ab 19; disptn.ba 20; disptn.and 44; relplain 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\breligious\b|\bcultural\b|\bmezuzah\w*|\bholidays?\b)[\s\S]{0,1200}?(?:\bdisplay\w*|\bsymbols?\b|\bdecorations?\b|\bdoorframes?\b|\bdoorposts?\b)` / all / 7 / reldisp.ab: MCL 252.302; MCL 380.1175; MCL 421.48; MCL 435.101; MCL 750.297e; MCL 750.297f; MCL 750.411r
- `(?:\bdisplay\w*|\bsymbols?\b|\bdecorations?\b|\bdoorframes?\b|\bdoorposts?\b)[\s\S]{0,1200}?(?:\breligious\b|\bcultural\b|\bmezuzah\w*|\bholidays?\b)` / all / 11 / reldisp.ba: MCL 252.302; MCL 252.307b; MCL 257.252b; MCL 257.310e; MCL 338.3434a; MCL 339.5701; MCL 380.1175; MCL 435.101; MCL 445.903i; MCL 551.102; MCL 750.411r
- `\A(?=[\s\S]*(?:\breligious\b|\bcultural\b|\bmezuzah\w*|\bholidays?\b))(?=[\s\S]*(?:\bdisplay\w*|\bsymbols?\b|\bdecorations?\b|\bdoorframes?\b|\bdoorposts?\b))` / all / 22 / reldisp.and: MCL 207.803; MCL 252.302; MCL 252.307b; MCL 257.252b; MCL 257.310e; MCL 257.675; MCL 257.719a; MCL 286.702; MCL 324.80130g; MCL 333.16177; MCL 338.3434a; MCL 339.5701; MCL 380.1175; MCL 421.27; MCL 421.43; MCL 421.48; MCL 435.101; MCL 445.903i; MCL 551.102; MCL 750.297e; MCL 750.297f; MCL 750.411r
- `(?:\bdisplay\w*)[\s\S]{0,1200}?(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b)` / all / 19 / disptn.ab: MCL 10.84; MCL 28.291; MCL 28.466; MCL 35.231; MCL 37.2502; MCL 55.291; MCL 257.243; MCL 257.244; MCL 257.801h; MCL 259.82; MCL 324.43523a; MCL 324.48732; MCL 333.20194; MCL 333.27954; MCL 445.955; MCL 484.1315; MCL 554.601c; MCL 559.156a; MCL 750.147
- `(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b)[\s\S]{0,1200}?(?:\bdisplay\w*)` / all / 20 / disptn.ba: MCL 28.466; MCL 37.2502; MCL 125.1352; MCL 257.243; MCL 257.252k; MCL 257.801h; MCL 259.82; MCL 259.109; MCL 324.43532; MCL 324.43533; MCL 324.43536; MCL 324.80130o; MCL 432.302; MCL 445.903; MCL 445.955; MCL 484.1314; MCL 484.1315; MCL 554.601c; MCL 559.156a; MCL 750.147
- `\A(?=[\s\S]*(?:\bdisplay\w*))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental units?\b|\bco-owners?\b|\bresidents?\b|\bapartments?\b|\bmobile home parks?\b))` / all / 44 / disptn.and: MCL 10.84; MCL 28.291; MCL 28.304; MCL 28.425b; MCL 28.466; MCL 35.231; MCL 37.2502; MCL 55.291; MCL 125.1352; MCL 207.803; MCL 257.243; MCL 257.244; MCL 257.248; MCL 257.252k; MCL 257.627; MCL 257.801h; MCL 257.811q; MCL 259.82; MCL 259.109; MCL 287.524; MCL 287.1122; MCL 288.573; MCL 324.43523a; MCL 324.43532; MCL 324.43533; MCL 324.43536; MCL 324.48732; MCL 324.78119; MCL 324.80130o; MCL 324.81133; ... (14 more in the battery log)
- `\breligious (?:items?|symbols?|displays?|objects?|decorations?)\b` / all / 0 / relplain
- positive reldisp @ SYNTH: passed ("A landlord shall not prohibit a tenant from displaying a religious symbol on the doorframe of the dwelling.")
- positive disptn @ MCL 559.156a: passed ("shall not prohibit a co-owner from displaying a single United States flag")
- positive relplain @ SYNTH: passed ("displaying religious items on the entry door")

**MIG-B3-024** (cited) (supersedes MIG-B3-021), topic `tenant-right-to-organize`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:20:02. Rerun of MIG-B3-021 (inflection: assemble forms). Tenant or resident right to organize, form or join an association; landlord interference.
- summary: Battery MIG-B3-024 (orgten.ab 16; orgten.ba 19; orgten.and 38; orgplain 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\btenant (?:organizations?|associations?|unions?|councils?|groups?)\b|\bresident (?:associations?|councils?|organizations?)\b|\borganiz\w*|\bassembl(?:e|es|ed|ing|y)\b|\bmeetings?\b)[\s\S]{0,1200}?(?:\btenants?\b|\blandlords?\b|\bresidents? of (?:a |the )?(?:mobile home park|housing)\b)` / all / 16 / orgten.ab: MCL 37.2502; MCL 125.654; MCL 125.1411; MCL 125.2730; MCL 288.473; MCL 288.573; MCL 320.2033; MCL 333.5474; MCL 400.14; MCL 450.1446; MCL 450.2446; MCL 500.2103; MCL 554.601b; MCL 600.5720; MCL 750.141a; Mich Admin Code R 460.107
- `(?:\btenants?\b|\blandlords?\b|\bresidents? of (?:a |the )?(?:mobile home park|housing)\b)[\s\S]{0,1200}?(?:\btenant (?:organizations?|associations?|unions?|councils?|groups?)\b|\bresident (?:associations?|councils?|organizations?)\b|\borganiz\w*|\bassembl(?:e|es|ed|ing|y)\b|\bmeetings?\b)` / all / 19 / orgten.ba: MCL 37.2503; MCL 125.654; MCL 125.1422b; MCL 125.1422c; MCL 125.1444c; MCL 125.1575; MCL 125.2730; MCL 211.9; MCL 288.473; MCL 288.573; MCL 324.50104; MCL 333.5474; MCL 445.1621; MCL 445.2513; MCL 445.2514; MCL 450.1446; MCL 450.2446; MCL 554.601b; MCL 600.5720
- `\A(?=[\s\S]*(?:\btenant (?:organizations?|associations?|unions?|councils?|groups?)\b|\bresident (?:associations?|councils?|organizations?)\b|\borganiz\w*|\bassembl(?:e|es|ed|ing|y)\b|\bmeetings?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\bresidents? of (?:a |the )?(?:mobile home park|housing)\b))` / all / 38 / orgten.and: MCL 15.243; MCL 37.2502; MCL 37.2503; MCL 117.4q; MCL 125.654; MCL 125.1411; MCL 125.1421; MCL 125.1422b; MCL 125.1422c; MCL 125.1444c; MCL 125.1575; MCL 125.2730; MCL 125.4402; MCL 211.9; MCL 211.27a; MCL 288.473; MCL 288.573; MCL 320.2033; MCL 324.50104; MCL 333.5474; MCL 400.14; MCL 421.43; MCL 438.31c; MCL 445.1621; MCL 445.2513; MCL 445.2514; MCL 450.1446; MCL 450.2446; MCL 450.4502; MCL 500.2103; ... (8 more in the battery log)
- `\btenant organizations?\b|\btenants? unions?\b|\btenant associations?\b|\bresident associations?\b` / all / 2 / orgplain: MCL 125.1422c; MCL 600.5720
- positive orgten @ MCL 600.5720: passed ("including membership in a tenant organization and a lawful activity of a tenant organization arising out of the tenancy")
- positive orgplain @ MCL 600.5720: passed ("membership in a tenant organization")

**MIG-B3-025** (superseded by MIG-B3-026), topic `law-enforcement-cooperation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:20:38. Landlord duties to cooperate with or report to police; reporting duties that bind any person (one limb has no landlord word, SOP rule 19 FL-gaps 3).
- summary: Battery MIG-B3-025 (polten.ab 13; polten.ba 10; polten.and 22; anyrep.ab 53; anyrep.ba 57; anyrep.and 179; coopplain 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\blaw enforcement\b|\bpolice\b|\bpeace officers?\b|\bsheriffs?\b|\bsheriff\'s\b)[\s\S]{0,1200}?(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental units?\b|\bproperty managers?\b)` / all / 13 / polten.ab: MCL 15.243; MCL 257.904b; MCL 324.80197; MCL 324.82153; MCL 480.17d; MCL 500.1283; MCL 554.601b; MCL 600.2918; MCL 600.2932; MCL 600.2967; MCL 600.5714; MCL 600.5744; MCL 750.141a
- `(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental units?\b|\bproperty managers?\b)[\s\S]{0,1200}?(?:\blaw enforcement\b|\bpolice\b|\bpeace officers?\b|\bsheriffs?\b|\bsheriff\'s\b)` / all / 10 / polten.ba: MCL 28.425b; MCL 141.1369; MCL 324.80197; MCL 480.22; MCL 554.134; MCL 554.601b; MCL 600.2918; MCL 600.2967; MCL 600.5714; MCL 750.539l
- `\A(?=[\s\S]*(?:\blaw enforcement\b|\bpolice\b|\bpeace officers?\b|\bsheriffs?\b|\bsheriff\'s\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental units?\b|\bproperty managers?\b))` / all / 22 / polten.and: MCL 15.243; MCL 28.425b; MCL 141.1369; MCL 257.217; MCL 257.904b; MCL 324.44501; MCL 324.80197; MCL 324.82153; MCL 400.713; MCL 480.17d; MCL 480.22; MCL 500.1283; MCL 554.134; MCL 554.601b; MCL 600.2918; MCL 600.2919; MCL 600.2932; MCL 600.2967; MCL 600.5714; MCL 600.5744; MCL 750.141a; MCL 750.539l
- `(?:\bany (?:other )?(?:person|individual)\b)[\s\S]{0,1200}?(?:\bshall (?:immediately |promptly )?(?:report|notify)\b)` / all / 53 / anyrep.ab: MCL 4.361; MCL 4.1109; MCL 18.1281; MCL 29.4; MCL 52.203; MCL 169.226; MCL 205.66a; MCL 205.425; MCL 211.19; MCL 211.57; MCL 211.78a; MCL 211.78j; MCL 213.3; MCL 213.198; MCL 247.451; MCL 257.622; MCL 280.241; MCL 280.394; MCL 324.1615; MCL 324.11552; MCL 324.11709; MCL 324.21323a; MCL 324.51103; MCL 330.1455; MCL 333.10301; MCL 333.17723; MCL 333.21771; MCL 333.27305; MCL 338.31; MCL 338.823; ... (23 more in the battery log)
- `(?:\bshall (?:immediately |promptly )?(?:report|notify)\b)[\s\S]{0,1200}?(?:\bany (?:other )?(?:person|individual)\b)` / all / 57 / anyrep.ba: MCL 18.1281; MCL 28.251; MCL 86.15; MCL 124.77; MCL 168.521; MCL 213.3; MCL 256.679; MCL 257.625k; MCL 259.487; MCL 287.524; MCL 287.703b; MCL 324.1615; MCL 324.5306; MCL 324.5511; MCL 324.31518; MCL 324.81143; MCL 330.1134a; MCL 333.2822; MCL 333.2834; MCL 333.7523; MCL 333.16174; MCL 333.16189b; MCL 333.16625; MCL 333.20173a; MCL 333.21771; MCL 333.27402; MCL 338.823; MCL 380.1310b; MCL 380.1313; MCL 390.1232; ... (27 more in the battery log)
- `\A(?=[\s\S]*(?:\bany (?:other )?(?:person|individual)\b))(?=[\s\S]*(?:\bshall (?:immediately |promptly )?(?:report|notify)\b))` / all / 179 / anyrep.and: MCL 3.692; MCL 3.751; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 3.1073; MCL 4.361; MCL 4.1109; MCL 15.654; MCL 18.1281; MCL 28.251; MCL 28.421; MCL 28.725a; MCL 29.4; MCL 30.421; MCL 38.512; MCL 52.203; MCL 52.205; MCL 86.15; MCL 124.77; MCL 125.1444c; MCL 125.2688h; MCL 141.643; MCL 168.521; MCL 169.221; MCL 169.226; MCL 205.21; MCL 205.30a; MCL 205.30c; MCL 205.66a; ... (149 more in the battery log)
- `\bcooperat\w* with (?:a |any |the )?(?:law enforcement|police)\b` / all / 5 / coopplain: MCL 18.355a; MCL 324.52907; MCL 722.628; MCL 752.953; MCL 791.234
- positive polten @ MCL 600.5714: passed ("This subdivision applies only if the police department with jurisdiction has been notified")
- positive anyrep @ MCL 52.203: passed ("any other individual who has first knowledge of any of the following shall immediately notify the county medical examine")
- positive coopplain @ SYNTH: passed ("The landlord shall cooperate with law enforcement in any investigation.")

**MIG-B3-026** (cited) (supersedes MIG-B3-025), topic `law-enforcement-cooperation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:21:07. Rerun of MIG-B3-025 (inflection: policed, policing). Landlord duties to cooperate with or report to police; reporting duties that bind any person (one limb has no landlord word, SOP rule 19 FL-gaps 3).
- summary: Battery MIG-B3-026 (polten.ab 13; polten.ba 10; polten.and 22; anyrep.ab 53; anyrep.ba 57; anyrep.and 179; coopplain 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\blaw enforcement\b|\bpolic(?:e|ed|ing)\b|\bpeace officers?\b|\bsheriffs?\b|\bsheriff\'s\b)[\s\S]{0,1200}?(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental units?\b|\bproperty managers?\b)` / all / 13 / polten.ab: MCL 15.243; MCL 257.904b; MCL 324.80197; MCL 324.82153; MCL 480.17d; MCL 500.1283; MCL 554.601b; MCL 600.2918; MCL 600.2932; MCL 600.2967; MCL 600.5714; MCL 600.5744; MCL 750.141a
- `(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental units?\b|\bproperty managers?\b)[\s\S]{0,1200}?(?:\blaw enforcement\b|\bpolic(?:e|ed|ing)\b|\bpeace officers?\b|\bsheriffs?\b|\bsheriff\'s\b)` / all / 10 / polten.ba: MCL 28.425b; MCL 141.1369; MCL 324.80197; MCL 480.22; MCL 554.134; MCL 554.601b; MCL 600.2918; MCL 600.2967; MCL 600.5714; MCL 750.539l
- `\A(?=[\s\S]*(?:\blaw enforcement\b|\bpolic(?:e|ed|ing)\b|\bpeace officers?\b|\bsheriffs?\b|\bsheriff\'s\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental units?\b|\bproperty managers?\b))` / all / 22 / polten.and: MCL 15.243; MCL 28.425b; MCL 141.1369; MCL 257.217; MCL 257.904b; MCL 324.44501; MCL 324.80197; MCL 324.82153; MCL 400.713; MCL 480.17d; MCL 480.22; MCL 500.1283; MCL 554.134; MCL 554.601b; MCL 600.2918; MCL 600.2919; MCL 600.2932; MCL 600.2967; MCL 600.5714; MCL 600.5744; MCL 750.141a; MCL 750.539l
- `(?:\bany (?:other )?(?:person|individual)\b)[\s\S]{0,1200}?(?:\bshall (?:immediately |promptly )?(?:report|notify)\b)` / all / 53 / anyrep.ab: MCL 4.361; MCL 4.1109; MCL 18.1281; MCL 29.4; MCL 52.203; MCL 169.226; MCL 205.66a; MCL 205.425; MCL 211.19; MCL 211.57; MCL 211.78a; MCL 211.78j; MCL 213.3; MCL 213.198; MCL 247.451; MCL 257.622; MCL 280.241; MCL 280.394; MCL 324.1615; MCL 324.11552; MCL 324.11709; MCL 324.21323a; MCL 324.51103; MCL 330.1455; MCL 333.10301; MCL 333.17723; MCL 333.21771; MCL 333.27305; MCL 338.31; MCL 338.823; ... (23 more in the battery log)
- `(?:\bshall (?:immediately |promptly )?(?:report|notify)\b)[\s\S]{0,1200}?(?:\bany (?:other )?(?:person|individual)\b)` / all / 57 / anyrep.ba: MCL 18.1281; MCL 28.251; MCL 86.15; MCL 124.77; MCL 168.521; MCL 213.3; MCL 256.679; MCL 257.625k; MCL 259.487; MCL 287.524; MCL 287.703b; MCL 324.1615; MCL 324.5306; MCL 324.5511; MCL 324.31518; MCL 324.81143; MCL 330.1134a; MCL 333.2822; MCL 333.2834; MCL 333.7523; MCL 333.16174; MCL 333.16189b; MCL 333.16625; MCL 333.20173a; MCL 333.21771; MCL 333.27402; MCL 338.823; MCL 380.1310b; MCL 380.1313; MCL 390.1232; ... (27 more in the battery log)
- `\A(?=[\s\S]*(?:\bany (?:other )?(?:person|individual)\b))(?=[\s\S]*(?:\bshall (?:immediately |promptly )?(?:report|notify)\b))` / all / 179 / anyrep.and: MCL 3.692; MCL 3.751; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 3.1073; MCL 4.361; MCL 4.1109; MCL 15.654; MCL 18.1281; MCL 28.251; MCL 28.421; MCL 28.725a; MCL 29.4; MCL 30.421; MCL 38.512; MCL 52.203; MCL 52.205; MCL 86.15; MCL 124.77; MCL 125.1444c; MCL 125.2688h; MCL 141.643; MCL 168.521; MCL 169.221; MCL 169.226; MCL 205.21; MCL 205.30a; MCL 205.30c; MCL 205.66a; ... (149 more in the battery log)
- `\bcooperat\w* with (?:a |any |the )?(?:law enforcement|police)\b` / all / 5 / coopplain: MCL 18.355a; MCL 324.52907; MCL 722.628; MCL 752.953; MCL 791.234
- positive polten @ MCL 600.5714: passed ("This subdivision applies only if the police department with jurisdiction has been notified")
- positive anyrep @ MCL 52.203: passed ("any other individual who has first knowledge of any of the following shall immediately notify the county medical examine")
- positive coopplain @ SYNTH: passed ("The landlord shall cooperate with law enforcement in any investigation.")

**MIG-B3-027** (cited), topic `translation-duty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:25:21. Lease or notice translation duties; language other than English; prescribed lease text with type size and translation.
- summary: Battery MIG-B3-027 (transten.ab 3; transten.ba 3; transten.and 6; transplain 42 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\btranslat\w*|\blanguages? other than English\b|\bforeign languages?\b|\bprimary language\b|\bSpanish\b|\bnon-English\b)[\s\S]{0,1200}?(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b)` / all / 3 / transten.ab: MCL 35.273; MCL 55.291; MCL 393.362
- `(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b)[\s\S]{0,1200}?(?:\btranslat\w*|\blanguages? other than English\b|\bforeign languages?\b|\bprimary language\b|\bSpanish\b|\bnon-English\b)` / all / 3 / transten.ba: MCL 32.736; MCL 35.273; MCL 393.362
- `\A(?=[\s\S]*(?:\btranslat\w*|\blanguages? other than English\b|\bforeign languages?\b|\bprimary language\b|\bSpanish\b|\bnon-English\b))(?=[\s\S]*(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b))` / all / 6 / transten.and: MCL 32.736; MCL 35.273; MCL 55.291; MCL 393.362; MCL 445.2011; MCL 500.1283
- `\btranslat\w*` / all / 42 / transplain: MCL 37.13; MCL 37.22; MCL 37.23; MCL 37.24; MCL 55.291; MCL 125.2088a; MCL 168.570; MCL 168.795b; MCL 168.797a; MCL 208.1407; MCL 257.302a; MCL 287.525; MCL 324.20120a; MCL 333.2623; MCL 338.3453; MCL 338.3455; MCL 338.3461; MCL 338.3463; MCL 338.3467; MCL 380.1704; MCL 390.1543; MCL 408.202; MCL 408.968; MCL 435.371; MCL 450.2016; MCL 450.3016; MCL 451.2304; MCL 457.62; MCL 457.63; MCL 457.683; ... (12 more in the battery log)
- positive transten @ SYNTH: passed ("If the landlord negotiates the lease in Spanish, the landlord shall provide the tenant a translation of the rental agree")
- positive transplain @ MCL 55.291: passed ("translat")

**MIG-B3-028** (superseded by MIG-B3-030), topic `student-housing`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:25:35. Rules for student housing: exemptions, duties, school-owned or private student rentals.
- summary: Battery MIG-B3-028 (studten.ab 9; studten.ba 13; studten.and 36; studplain 30 units hit when run; 1 of 2 positives passed; controls passed (nonsense 0, must-hit 147)) positive studten@MCL 554.633 recorded as failed
- `(?:\bstudents?\b|\bstudent\'s\b)[\s\S]{0,1200}?(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b|\bhousing accommodations?\b)` / all / 9 / studten.ab: MCL 15.268; MCL 125.1444c; MCL 205.54a; MCL 207.1155; MCL 331.1103; MCL 380.1711; MCL 436.1513; MCL 436.1531; MCL 451.412
- `(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b|\bhousing accommodations?\b)[\s\S]{0,1200}?(?:\bstudents?\b|\bstudent\'s\b)` / all / 13 / studten.ba: MCL 125.1444c; MCL 206.527a; MCL 207.1030; MCL 207.1035; MCL 207.1155; MCL 256.687; MCL 257.320d; MCL 339.2504; MCL 380.6; MCL 380.1711; MCL 436.1513; MCL 500.1283; MCL 771.2a
- `\A(?=[\s\S]*(?:\bstudents?\b|\bstudent\'s\b))(?=[\s\S]*(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b|\bhousing accommodations?\b))` / all / 36 / studten.and: MCL 3.1041; MCL 4.415; MCL 15.243; MCL 15.268; MCL 29.19a; MCL 125.1444c; MCL 125.4412a; MCL 205.54a; MCL 206.527a; MCL 207.1030; MCL 207.1035; MCL 207.1155; MCL 211.9; MCL 256.687; MCL 257.320d; MCL 331.1103; MCL 333.16190; MCL 339.1201; MCL 339.2501; MCL 339.2504; MCL 380.6; MCL 380.12b; MCL 380.503; MCL 380.523; MCL 380.553; MCL 380.1311e; MCL 380.1711; MCL 399.508; MCL 421.43; MCL 436.1513; ... (6 more in the battery log)
- `\bstudent housing\b|\bdormitor(?:y|ies)\b|\bresidence halls?\b|\bstudent residences?\b` / all / 30 / studplain: MCL 28.425o; MCL 29.3c; MCL 29.19; MCL 29.19a; MCL 29.451; MCL 125.1444c; MCL 125.1513d; MCL 141.103; MCL 141.872; MCL 141.892; MCL 168.654a; MCL 380.1606; MCL 389.121; MCL 389.126; MCL 390.156; MCL 390.371; MCL 390.373; MCL 390.374; MCL 390.396; MCL 390.558; MCL 390.646; MCL 390.716; MCL 390.821; MCL 390.823; MCL 390.824; MCL 390.844; MCL 390.922; MCL 436.1513; MCL 487.3406; MCL 487.14301
- positive studten @ MCL 554.633: FAILED ("tenant")
- positive studplain @ MCL 125.1513d: passed ("dormitor")

**MIG-B3-029** (cited), topic `purpose-limitation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:26:02. Statutes that void or annul a lease, or reach the lessor, when premises are used for a prohibited purpose.
- summary: Battery MIG-B3-029 (voidlease.ab 38; voidlease.ba 37; voidlease.and 69; nuislease.ab 14; nuislease.ba 8; nuislease.and 18; optlessor 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b)[\s\S]{0,1200}?(?:\bvoid(?:able)?\b|\bforfeit\w*)` / all / 38 / voidlease.ab: MCL 3.363; MCL 35.541; MCL 120.30; MCL 123.1045; MCL 124.755; MCL 141.1369; MCL 211.7cc; MCL 211.27a; MCL 211.78k; MCL 257.233; MCL 257.251; MCL 257.625n; MCL 259.206; MCL 324.33934; MCL 324.43556; MCL 331.9; MCL 432.207a; MCL 440.2904; MCL 440.2905; MCL 440.2908; MCL 456.2; MCL 554.134; MCL 554.281; MCL 554.609; MCL 554.633; MCL 554.635; MCL 554.636; MCL 565.4; MCL 566.38; MCL 566.108; ... (8 more in the battery log)
- `(?:\bvoid(?:able)?\b|\bforfeit\w*)[\s\S]{0,1200}?(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b)` / all / 37 / voidlease.ba: MCL 3.363; MCL 35.541; MCL 123.1045; MCL 141.1369; MCL 211.7cc; MCL 211.78i; MCL 211.78k; MCL 211.1155; MCL 257.233; MCL 257.244; MCL 257.625n; MCL 259.206; MCL 324.20126; MCL 324.21323a; MCL 324.33934; MCL 324.43556; MCL 331.9; MCL 436.1901; MCL 440.2904; MCL 440.2905; MCL 440.2908; MCL 440.7504; MCL 445.1574a; MCL 456.2; MCL 554.134; MCL 554.281; MCL 554.635; MCL 554.636; MCL 565.4; MCL 566.38; ... (7 more in the battery log)
- `\A(?=[\s\S]*(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b))(?=[\s\S]*(?:\bvoid(?:able)?\b|\bforfeit\w*))` / all / 69 / voidlease.and: MCL 3.363; MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 28.425b; MCL 35.541; MCL 120.30; MCL 123.1045; MCL 124.755; MCL 141.1369; MCL 205.426; MCL 211.7cc; MCL 211.27a; MCL 211.44; MCL 211.78i; MCL 211.78k; MCL 211.78t; MCL 211.1155; MCL 257.226a; MCL 257.233; MCL 257.244; MCL 257.251; MCL 257.625n; MCL 257.724; MCL 259.206; MCL 324.20126; MCL 324.21323a; MCL 324.33934; MCL 324.43556; ... (39 more in the battery log)
- `(?:\bnuisances?\b|\bill-fame\b|\bgaming houses?\b|\bunlawful purposes?\b|\bbawdy\b)[\s\S]{0,1200}?(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\bowns, leases\b)` / all / 14 / nuislease.ab: MCL 125.72; MCL 125.539; MCL 125.942; MCL 125.2652; MCL 213.23; MCL 433.14a; MCL 455.12; MCL 600.2918; MCL 600.2941; MCL 600.3801; MCL 600.3805; MCL 600.5775; MCL 750.454; MCL 752.461
- `(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\bowns, leases\b)[\s\S]{0,1200}?(?:\bnuisances?\b|\bill-fame\b|\bgaming houses?\b|\bunlawful purposes?\b|\bbawdy\b)` / all / 8 / nuislease.ba: MCL 125.694a; MCL 455.58; MCL 600.2918; MCL 600.2941; MCL 600.3801; MCL 600.5775; MCL 750.454; MCL 752.461
- `\A(?=[\s\S]*(?:\bnuisances?\b|\bill-fame\b|\bgaming houses?\b|\bunlawful purposes?\b|\bbawdy\b))(?=[\s\S]*(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\bowns, leases\b))` / all / 18 / nuislease.and: MCL 125.72; MCL 125.402; MCL 125.539; MCL 125.694a; MCL 125.942; MCL 125.2652; MCL 213.23; MCL 324.61506; MCL 433.14a; MCL 455.12; MCL 455.58; MCL 600.2918; MCL 600.2941; MCL 600.3801; MCL 600.3805; MCL 600.5775; MCL 750.454; MCL 752.461
- `\bat the option of the lessor\b|\bat the lessor\'s option\b|\bat the option of the landlord\b` / all / 2 / optlessor: MCL 445.953; MCL 752.461
- positive voidlease @ MCL 752.461: passed ("the lease or contract for letting such house, shall, at the option of the lessor, become void")
- positive nuislease @ MCL 600.3801: passed ("who owns, leases, conducts, or maintains a building, vehicle, or place described in subsection (1) is guilty of a nuisan")
- positive optlessor @ MCL 752.461: passed ("at the option of the lessor")

**MIG-B3-030** (cited) (supersedes MIG-B3-028), topic `student-housing`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:26:37. Rerun of MIG-B3-028 (its studten positive named a section without the word student; positive replaced by a real unit holding both term sets). Rules for student housing: exemptions, duties, school-owned or private student rentals.
- summary: Battery MIG-B3-030 (studten.ab 9; studten.ba 13; studten.and 36; studplain 30 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bstudents?\b|\bstudent\'s\b)[\s\S]{0,1200}?(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b|\bhousing accommodations?\b)` / all / 9 / studten.ab: MCL 15.268; MCL 125.1444c; MCL 205.54a; MCL 207.1155; MCL 331.1103; MCL 380.1711; MCL 436.1513; MCL 436.1531; MCL 451.412
- `(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b|\bhousing accommodations?\b)[\s\S]{0,1200}?(?:\bstudents?\b|\bstudent\'s\b)` / all / 13 / studten.ba: MCL 125.1444c; MCL 206.527a; MCL 207.1030; MCL 207.1035; MCL 207.1155; MCL 256.687; MCL 257.320d; MCL 339.2504; MCL 380.6; MCL 380.1711; MCL 436.1513; MCL 500.1283; MCL 771.2a
- `\A(?=[\s\S]*(?:\bstudents?\b|\bstudent\'s\b))(?=[\s\S]*(?:\bleases?\b|\bleased\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\btenancy\b|\btenants?\b|\blandlords?\b|\brental units?\b|\bhousing accommodations?\b))` / all / 36 / studten.and: MCL 3.1041; MCL 4.415; MCL 15.243; MCL 15.268; MCL 29.19a; MCL 125.1444c; MCL 125.4412a; MCL 205.54a; MCL 206.527a; MCL 207.1030; MCL 207.1035; MCL 207.1155; MCL 211.9; MCL 256.687; MCL 257.320d; MCL 331.1103; MCL 333.16190; MCL 339.1201; MCL 339.2501; MCL 339.2504; MCL 380.6; MCL 380.12b; MCL 380.503; MCL 380.523; MCL 380.553; MCL 380.1311e; MCL 380.1711; MCL 399.508; MCL 421.43; MCL 436.1513; ... (6 more in the battery log)
- `\bstudent housing\b|\bdormitor(?:y|ies)\b|\bresidence halls?\b|\bstudent residences?\b` / all / 30 / studplain: MCL 28.425o; MCL 29.3c; MCL 29.19; MCL 29.19a; MCL 29.451; MCL 125.1444c; MCL 125.1513d; MCL 141.103; MCL 141.872; MCL 141.892; MCL 168.654a; MCL 380.1606; MCL 389.121; MCL 389.126; MCL 390.156; MCL 390.371; MCL 390.373; MCL 390.374; MCL 390.396; MCL 390.558; MCL 390.646; MCL 390.716; MCL 390.821; MCL 390.823; MCL 390.824; MCL 390.844; MCL 390.922; MCL 436.1513; MCL 487.3406; MCL 487.14301
- positive studten @ MCL 15.268: passed ("student if the public body is part of the school district")
- positive studplain @ MCL 125.1513d: passed ("dormitor")

**MIG-B4-001** (cited), topic `landlord-registration`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:08. landlord or rental registration; local registration preemption
- summary: Battery MIG-B4-001 (reg.ab 23; reg.ba 25; reg.and 45; rentprog 1; regplain 3 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bregist(?:er|ers|ered|ering|ration|rations|ry|ries)\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|rental (?:units?|property|properties|dwellings?)|owners? of (?:a )?(?:multiple dwellings?|rooming house|rental))\b)` / all / 23 / reg.ab: MCL 54.211; MCL 117.4q; MCL 120.108; MCL 124.473; MCL 125.525; MCL 205.95; MCL 207.218; MCL 257.217; MCL 257.233a; MCL 257.244; MCL 257.529; MCL 257.1401; MCL 440.9505; MCL 445.1015; MCL 460.9d; MCL 493.133; MCL 500.3101; MCL 554.281; MCL 554.292; MCL 554.1060; MCL 570.582; MCL 600.6057; MCL 750.282
- `(?:\b(?:landlords?|lessors?|rental (?:units?|property|properties|dwellings?)|owners? of (?:a )?(?:multiple dwellings?|rooming house|rental))\b)[\s\S]{0,1200}?(?:\bregist(?:er|ers|ered|ering|ration|rations|ry|ries)\b)` / all / 25 / reg.ba: MCL 54.211; MCL 117.4q; MCL 125.525; MCL 205.95; MCL 207.218; MCL 257.217; MCL 257.244; MCL 257.529; MCL 257.904b; MCL 257.1401; MCL 324.80197; MCL 324.82153; MCL 333.20142; MCL 440.1203; MCL 440.9102; MCL 440.9505; MCL 445.1015; MCL 460.9d; MCL 480.23; MCL 493.133; MCL 554.292; MCL 554.601b; MCL 554.1060; MCL 566.301; MCL 750.362a
- `\A(?=[\s\S]*(?:\bregist(?:er|ers|ered|ering|ration|rations|ry|ries)\b))(?=[\s\S]*(?:\b(?:landlords?|lessors?|rental (?:units?|property|properties|dwellings?)|owners? of (?:a )?(?:multiple dwellings?|rooming house|rental))\b))` / all / 45 / reg.and: MCL 28.425b; MCL 54.211; MCL 117.4q; MCL 120.108; MCL 124.473; MCL 124.756; MCL 124.757; MCL 125.525; MCL 205.69; MCL 205.95; MCL 205.110; MCL 207.218; MCL 211.7o; MCL 257.217; MCL 257.233a; MCL 257.235; MCL 257.244; MCL 257.529; MCL 257.904b; MCL 257.1401; MCL 324.80197; MCL 324.82153; MCL 330.1137; MCL 333.20142; MCL 400.713; MCL 440.1203; MCL 440.9102; MCL 440.9505; MCL 445.903; MCL 445.1015; ... (15 more in the battery log)
- `\brental (?:registration|inspection program|licens(?:e|es|ing))\b` / all / 1 / rentprog: MCL 117.4q
- `\bregistry of owners\b` / all / 3 / regplain: MCL 125.525; MCL 125.531; MCL 125.532
- positive reg @ MCL 125.525: passed ("shall register with the enforcing agency the owner")
- positive rentprog @ MCL 117.4q: passed ("rental inspection program")
- positive regplain @ MCL 125.525: passed ("registry of owners")

**MIG-B4-002** (cited), topic `lease-registration`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:24. recording or registering residential leases
- summary: Battery MIG-B4-002 (lrec.ab 103; lrec.ba 93; lrec.and 203; lterm 7; unrec.ab 1; unrec.ba 1; unrec.and 2; memo 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:leases?|rental agreements?)\b)[\s\S]{0,1200}?(?:\b(?:record(?:ed|ing|s)?|recordable|register of deeds)\b)` / all / 103 / lrec.ab: MCL 3.692; MCL 3.1041; MCL 37.1502; MCL 37.2502; MCL 54.211; MCL 123.44; MCL 123.165; MCL 123.1271; MCL 124.757; MCL 125.526; MCL 125.2023; MCL 125.2029h; MCL 125.2088c; MCL 125.2330i; MCL 141.1369; MCL 205.51; MCL 205.69; MCL 205.92; MCL 205.98; MCL 205.110; MCL 207.505; MCL 207.772; MCL 211.22; MCL 211.27a; MCL 211.78i; MCL 211.78k; MCL 213.72; MCL 257.213; MCL 257.217c; MCL 257.248; ... (73 more in the battery log)
- `(?:\b(?:record(?:ed|ing|s)?|recordable|register of deeds)\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?)\b)` / all / 93 / lrec.ba: MCL 35.223; MCL 54.211; MCL 123.165; MCL 123.958b; MCL 123.961b; MCL 124.546; MCL 124.757; MCL 125.2088c; MCL 125.2330i; MCL 141.1369; MCL 205.69; MCL 205.98; MCL 205.110; MCL 205.803; MCL 207.706; MCL 211.9m; MCL 211.9n; MCL 211.22; MCL 211.78i; MCL 211.78k; MCL 211.1057; MCL 211.1077; MCL 213.72; MCL 247.660b; MCL 257.248; MCL 257.251; MCL 322.111; MCL 324.30321; MCL 324.33929; MCL 324.33934; ... (63 more in the battery log) [heading-only, read: MCL 324.503; MCL 445.1712]
- `\A(?=[\s\S]*(?:\b(?:leases?|rental agreements?)\b))(?=[\s\S]*(?:\b(?:record(?:ed|ing|s)?|recordable|register of deeds)\b))` / all / 203 / lrec.and: MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 18.361; MCL 18.1261; MCL 35.223; MCL 36.108; MCL 37.1502; MCL 37.2502; MCL 38.1140l; MCL 54.211; MCL 123.44; MCL 123.165; MCL 123.958b; MCL 123.961b; MCL 123.1271; MCL 124.546; MCL 124.756; MCL 124.757; MCL 125.74; MCL 125.526; MCL 125.917; MCL 125.943; MCL 125.1422; MCL 125.1424b; MCL 125.2005; MCL 125.2023; MCL 125.2029h; MCL 125.2088c; ... (173 more in the battery log) [heading-only, read: MCL 445.1712]
- `\bleases? for (?:a )?term` / all / 7 / lterm: MCL 46.11; MCL 54.211; MCL 259.105; MCL 259.133; MCL 554.64; MCL 565.35; MCL 566.106
- `(?:\bunrecorded\b)[\s\S]{0,1200}?(?:\bleases?\b)` / all / 1 / unrec.ab: MCL 211.78k
- `(?:\bleases?\b)[\s\S]{0,1200}?(?:\bunrecorded\b)` / all / 1 / unrec.ba: MCL 211.78k
- `\A(?=[\s\S]*(?:\bunrecorded\b))(?=[\s\S]*(?:\bleases?\b))` / all / 2 / unrec.and: MCL 124.756; MCL 211.78k
- `\bmemorand(?:um|a) of (?:the )?leases?\b` / all / 1 / memo: MCL 211.1154
- positive lrec @ SYNTH: passed ("A lease for a term exceeding 3 years may be recorded with the register of deeds.")
- positive lterm @ MCL 565.35: passed ("leases for a term not exceeding 3 years")
- positive unrec @ SYNTH: passed ("An unrecorded lease is void as against a subsequent purchaser.")
- positive memo @ SYNTH: passed ("A memorandum of lease may be recorded.")

**MIG-B4-003** (cited), topic `good-cause-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:35. good or just cause for ending a tenancy; notice of coverage
- summary: Battery MIG-B4-003 (gc.ab 10; gc.ba 11; gc.and 20; gcplain 37 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:just|good) cause\b)[\s\S]{0,1200}?(?:\b(?:tenan(?:t|ts|cy|cies)|lessees?|evict(?:ion|ions|ed)?|holding over|leases?)\b)` / all / 10 / gc.ab: MCL 125.694a; MCL 125.694b; MCL 432.151; MCL 600.5714; MCL 600.5775; MCL 600.5777; MCL 600.5779; MCL 600.5781; MCL 600.5783; MCL 600.5785
- `(?:\b(?:tenan(?:t|ts|cy|cies)|lessees?|evict(?:ion|ions|ed)?|holding over|leases?)\b)[\s\S]{0,1200}?(?:\b(?:just|good) cause\b)` / all / 11 / gc.ba: MCL 125.694a; MCL 125.694b; MCL 125.1458d; MCL 125.2328a; MCL 125.2328c; MCL 600.5714; MCL 600.5775; MCL 600.5779; MCL 600.5781; MCL 600.5783; MCL 600.5785
- `\A(?=[\s\S]*(?:\b(?:just|good) cause\b))(?=[\s\S]*(?:\b(?:tenan(?:t|ts|cy|cies)|lessees?|evict(?:ion|ions|ed)?|holding over|leases?)\b))` / all / 20 / gc.and: MCL 125.694a; MCL 125.694b; MCL 125.1458d; MCL 125.1608; MCL 125.2029h; MCL 125.2328a; MCL 125.2328c; MCL 257.226; MCL 432.151; MCL 436.1531; MCL 445.1574; MCL 445.2011; MCL 559.147a; MCL 600.5714; MCL 600.5775; MCL 600.5777; MCL 600.5779; MCL 600.5781; MCL 600.5783; MCL 600.5785
- `\bjust cause\b` / all / 37 / gcplain: MCL 18.1261a; MCL 28.586; MCL 46.31; MCL 125.694a; MCL 125.694b; MCL 125.1458d; MCL 125.2328a; MCL 125.2328c; MCL 141.1168; MCL 324.48732; MCL 333.27301; MCL 338.3414; MCL 339.5947; MCL 431.307; MCL 432.151; MCL 432.204; MCL 432.208; MCL 432.218; MCL 445.451; MCL 445.502; MCL 500.1371; MCL 500.1715; MCL 500.1765; MCL 500.6860; MCL 550.821; MCL 550.839; MCL 550.952; MCL 600.5714; MCL 600.5775; MCL 600.5777; ... (7 more in the battery log)
- positive gc @ MCL 600.5714: passed ("is not considered to be holding over under subsection (1)(b) or (c) unless the tenancy or lease agreement is terminated ")
- positive gcplain @ MCL 600.5714: passed ("terminated for just cause")

**MIG-B4-004** (cited), topic `rights-responsibilities-guide`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:18:56. state guide to landlord and tenant rights given before signing
- summary: Battery MIG-B4-004 (guide.ab 2; guide.ba 2; guide.and 11; rr.ab 6; rr.ba 7; rr.and 9; rrplain 31 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:guides?|guidebooks?|handbooks?|booklets?|pamphlets?|brochures?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b)` / all / 2 / guide.ab: MCL 408.806; MCL 475.1
- `(?:\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:guides?|guidebooks?|handbooks?|booklets?|pamphlets?|brochures?)\b)` / all / 2 / guide.ba: MCL 324.21303; MCL 570.302
- `\A(?=[\s\S]*(?:\b(?:guides?|guidebooks?|handbooks?|booklets?|pamphlets?|brochures?)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b))` / all / 11 / guide.and: MCL 206.520; MCL 211.9; MCL 257.217c; MCL 289.1111; MCL 324.503; MCL 324.21303; MCL 408.806; MCL 445.903; MCL 462.109; MCL 475.1; MCL 570.302
- `(?:\brights and (?:responsibilities|obligations|duties)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b)` / all / 6 / rr.ab: MCL 400.586a; MCL 440.2859; MCL 440.2967; MCL 554.1059; MCL 554.1060; MCL 570.1109 [heading-only, read: MCL 440.2962]
- `(?:\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\brights and (?:responsibilities|obligations|duties)\b)` / all / 7 / rr.ba: MCL 440.2859; MCL 440.2967; MCL 484.2401; MCL 554.634; MCL 554.1059; MCL 554.1060; MCL 570.1109 [heading-only, read: MCL 440.2962]
- `\A(?=[\s\S]*(?:\brights and (?:responsibilities|obligations|duties)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b))` / all / 9 / rr.and: MCL 125.526; MCL 400.586a; MCL 440.2859; MCL 440.2967; MCL 484.2401; MCL 554.634; MCL 554.1059; MCL 554.1060; MCL 570.1109 [heading-only, read: MCL 440.2962]
- `\brights and responsibilities\b` / all / 31 / rrplain: MCL 28.421a; MCL 28.425v; MCL 32.181; MCL 206.609; MCL 208.1113; MCL 257.660c; MCL 324.1505; MCL 324.30106; MCL 333.16187d; MCL 333.20201; MCL 333.20203; MCL 333.21532; MCL 333.21533; MCL 333.22210; MCL 339.2411; MCL 380.1166; MCL 400.115i; MCL 400.115m; MCL 400.586a; MCL 421.32; MCL 423.14; MCL 423.210; MCL 500.3406aa; MCL 552.505; MCL 552.625c; MCL 722.4c; MCL 722.4e; MCL 722.1803; MCL 791.235; Mich Admin Code R 460.120; ... (1 more in the battery log)
- positive guide @ SYNTH: passed ("The department shall publish a guide for landlords and tenants and the landlord shall give the tenant a copy before sign")
- positive rr @ MCL 554.634: passed ("Michigan law establishes rights and obligations for parties to rental agreements")
- positive rrplain @ SYNTH: passed ("a statement of the rights and responsibilities of tenants")

**MIG-B4-005** (cited), topic `tenant-rights-statement`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:19:15. state-agency statement or summary of tenant rights with the lease
- summary: Battery MIG-B4-005 (trs.ab 1; trs.ba 2; trs.and 3; tranot 1; ack.ab 12; ack.ba 9; ack.and 25 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:tenant|renter|lessee|resident)s?(?:\'|’)?s? rights\b)[\s\S]{0,1200}?(?:\b(?:statement|summary|notice|acknowledg(?:e|es|ed|ment|ing)|attach(?:ed|ment)?|first page)\b)` / all / 1 / trs.ab: MCL 565.104
- `(?:\b(?:statement|summary|notice|acknowledg(?:e|es|ed|ment|ing)|attach(?:ed|ment)?|first page)\b)[\s\S]{0,1200}?(?:\b(?:tenant|renter|lessee|resident)s?(?:\'|’)?s? rights\b)` / all / 2 / trs.ba: MCL 440.7504; MCL 565.104
- `\A(?=[\s\S]*(?:\b(?:tenant|renter|lessee|resident)s?(?:\'|’)?s? rights\b))(?=[\s\S]*(?:\b(?:statement|summary|notice|acknowledg(?:e|es|ed|ment|ing)|attach(?:ed|ment)?|first page)\b))` / all / 3 / trs.and: MCL 440.7504; MCL 565.104; MCL 791.235
- `\bestablishes rights and obligations for parties to rental agreements\b` / all / 1 / tranot: MCL 554.634
- `(?:\backnowledg(?:e|es|ed|ment|ing)\b)[\s\S]{0,1200}?(?:\b(?:rental agreements?|leases?)\b)` / all / 12 / ack.ab: MCL 38.1140l; MCL 125.2005; MCL 257.235; MCL 257.2125; MCL 285.67; MCL 339.2517; MCL 440.2869; MCL 453.7; MCL 457.503; MCL 457.507; MCL 554.281; MCL 600.6057
- `(?:\b(?:rental agreements?|leases?)\b)[\s\S]{0,1200}?(?:\backnowledg(?:e|es|ed|ment|ing)\b)` / all / 9 / ack.ba: MCL 257.401; MCL 257.2125; MCL 339.2517; MCL 440.2869; MCL 440.2976; MCL 440.9102; MCL 500.8121; MCL 554.281; MCL 600.6057
- `\A(?=[\s\S]*(?:\backnowledg(?:e|es|ed|ment|ing)\b))(?=[\s\S]*(?:\b(?:rental agreements?|leases?)\b))` / all / 25 / ack.and: MCL 38.1140l; MCL 125.2005; MCL 125.2029h; MCL 125.2088c; MCL 211.7cc; MCL 257.235; MCL 257.251; MCL 257.401; MCL 257.2125; MCL 285.67; MCL 285.313; MCL 324.36109; MCL 339.2517; MCL 440.2869; MCL 440.2976; MCL 440.9102; MCL 453.4; MCL 453.7; MCL 457.503; MCL 457.507; MCL 493.133; MCL 500.8121; MCL 554.281; MCL 554.945; MCL 600.6057
- positive trs @ SYNTH: passed ("The landlord shall attach to the lease a statement of tenant rights prepared by the department.")
- positive tranot @ MCL 554.634: passed ("establishes rights and obligations for parties to rental agreements")
- positive ack @ SYNTH: passed ("the tenant shall sign an acknowledgment that the lease was received")

**MIG-B4-006** (cited), topic `single-family-zone-lease-limit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:19:30. renting in single-family zones; owner occupancy; investor purchase limits
- summary: Battery MIG-B4-006 (oo.ab 11; oo.ba 9; oo.and 16; sfz.ab 2; sfz.ba 4; sfz.and 5; inv 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bowner[- ]occup(?:ied|ancy|ant|ants|y)\b)[\s\S]{0,1200}?(?:\b(?:zon(?:e|es|ed|ing)|rent(?:s|ed|al|als|ing)?|leas(?:e|ed|es|ing))\b)` / all / 11 / oo.ab: MCL 117.4q; MCL 125.1458; MCL 125.1608; MCL 125.2663; MCL 125.4217; MCL 125.4316; MCL 125.4415; MCL 125.4621; MCL 206.266; MCL 208.1435; MCL 559.212
- `(?:\b(?:zon(?:e|es|ed|ing)|rent(?:s|ed|al|als|ing)?|leas(?:e|ed|es|ing))\b)[\s\S]{0,1200}?(?:\bowner[- ]occup(?:ied|ancy|ant|ants|y)\b)` / all / 9 / oo.ba: MCL 125.1422; MCL 125.1608; MCL 125.2652; MCL 125.4217; MCL 125.4316; MCL 125.4415; MCL 125.4621; MCL 207.772; MCL 559.212
- `\A(?=[\s\S]*(?:\bowner[- ]occup(?:ied|ancy|ant|ants|y)\b))(?=[\s\S]*(?:\b(?:zon(?:e|es|ed|ing)|rent(?:s|ed|al|als|ing)?|leas(?:e|ed|es|ing))\b))` / all / 16 / oo.and: MCL 117.4q; MCL 125.1422; MCL 125.1458; MCL 125.1608; MCL 125.2652; MCL 125.2663; MCL 125.4217; MCL 125.4316; MCL 125.4415; MCL 125.4621; MCL 206.266; MCL 206.266a; MCL 206.676; MCL 207.772; MCL 208.1435; MCL 559.212
- `(?:\bsingle[- ]family\b)[\s\S]{0,1200}?(?:\bzon(?:e|es|ed|ing)\b)` / all / 2 / sfz.ab: MCL 125.1504b; MCL 125.3204
- `(?:\bzon(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:\bsingle[- ]family\b)` / all / 4 / sfz.ba: MCL 125.1504b; MCL 125.3204; MCL 324.11502; MCL 570.582
- `\A(?=[\s\S]*(?:\bsingle[- ]family\b))(?=[\s\S]*(?:\bzon(?:e|es|ed|ing)\b))` / all / 5 / sfz.and: MCL 125.1422; MCL 125.1504b; MCL 125.3204; MCL 324.11502; MCL 570.582
- `\blarge institutional investors?\b` / all / 4 / inv: MCL 125.853; MCL 125.857; MCL 125.859; 2026-PA-0032
- positive oo @ SYNTH: passed ("A zoning ordinance may require that the owner occupy the dwelling before it is rented.")
- positive sfz @ MCL 125.3204: passed ("A zoning ordinance adopted under this act shall provide for the use of a single-family residence")
- positive inv @ 2026-PA-0032: passed ("large institutional investor shall not purchase")

**MIG-B4-007** (cited), topic `accessory-dwelling-unit`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:19:47. accessory dwelling units and their rental
- summary: Battery MIG-B4-007 (adu 0; slang 0; accdw.ab 3; accdw.ba 5; accdw.and 9 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\baccessory (?:dwelling|apartment|residential|housing)(?: units?)?s?\b` / all / 0 / adu
- `\b(?:granny flats?|in-law (?:units?|apartments?|suites?)|carriage houses?|garage apartments?|backyard cottages?|ADUs?)\b` / all / 0 / slang
- `(?:\baccessory\b)[\s\S]{0,1200}?(?:\b(?:dwellings?|residen(?:ce|ces|tial))\b)` / all / 3 / accdw.ab: MCL 333.5459; Mich Admin Code R 408.30501a; Mich Admin Code R 408.30505
- `(?:\b(?:dwellings?|residen(?:ce|ces|tial))\b)[\s\S]{0,1200}?(?:\baccessory\b)` / all / 5 / accdw.ba: MCL 324.35311a; MCL 333.5459; Mich Admin Code R 408.30501a; Mich Admin Code R 408.30505; Mich Admin Code R 408.30536
- `\A(?=[\s\S]*(?:\baccessory\b))(?=[\s\S]*(?:\b(?:dwellings?|residen(?:ce|ces|tial))\b))` / all / 9 / accdw.and: MCL 252.302; MCL 257.217; MCL 257.1302a; MCL 324.35311a; MCL 333.5459; MCL 722.111; Mich Admin Code R 408.30501a; Mich Admin Code R 408.30505; Mich Admin Code R 408.30536
- positive adu @ SYNTH: passed ("A zoning ordinance shall permit an accessory dwelling unit on a lot with a single-family residence.")
- positive slang @ SYNTH: passed ("An ADU may be rented for terms of 30 days or more.")
- positive accdw @ SYNTH: passed ("A local unit shall allow one accessory dwelling unit per lot.")

**MIG-B4-008** (cited), topic `health-district-rental-rules`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:20:07. local health department rental rules; landlord to provide them
- summary: Battery MIG-B4-008 (hd.ab 6; hd.ba 5; hd.and 9; bh 24; hdrent.ab 6; hdrent.ba 9; hdrent.and 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:local health (?:departments?|officers?)|health districts?|boards? of health)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lessors?|lessees?|rental|dwellings?)\b)` / all / 6 / hd.ab: MCL 125.402; MCL 125.408; MCL 125.485a; MCL 324.11518; MCL 333.12103; MCL 333.12501
- `(?:\b(?:tenants?|landlords?|lessors?|lessees?|rental|dwellings?)\b)[\s\S]{0,1200}?(?:\b(?:local health (?:departments?|officers?)|health districts?|boards? of health)\b)` / all / 5 / hd.ba: MCL 125.402; MCL 125.408; MCL 125.485a; MCL 324.11518; MCL 333.12103
- `\A(?=[\s\S]*(?:\b(?:local health (?:departments?|officers?)|health districts?|boards? of health)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lessors?|lessees?|rental|dwellings?)\b))` / all / 9 / hd.and: MCL 125.402; MCL 125.408; MCL 125.485a; MCL 289.1111; MCL 324.11504; MCL 324.11518; MCL 333.12103; MCL 333.12501; MCL 400.713
- `\bboards? of health\b` / all / 24 / bh: MCL 113.4; MCL 117.4i; MCL 123.171; MCL 125.402; MCL 125.408; MCL 125.409; MCL 125.1998; MCL 280.51; MCL 327.301; MCL 331.158; MCL 333.1105; MCL 333.2413; MCL 333.2415; MCL 333.2417; MCL 333.2428; MCL 333.2444; MCL 333.2462; MCL 333.12753; MCL 333.25201; MCL 408.991; MCL 408.1004; MCL 408.1046; MCL 445.2001; MCL 750.534
- `(?:\bhealth (?:code|regulations?|rules)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|rental)\b)` / all / 6 / hdrent.ab: MCL 207.752; MCL 400.14; MCL 400.57i; MCL 400.704; MCL 554.917; MCL 600.5714
- `(?:\b(?:tenants?|landlords?|rental)\b)[\s\S]{0,1200}?(?:\bhealth (?:code|regulations?|rules)\b)` / all / 9 / hdrent.ba: MCL 15.243; MCL 324.80101; MCL 333.5475a; MCL 400.57i; MCL 427.201; MCL 554.134; MCL 554.601b; MCL 554.917; MCL 600.5714
- `\A(?=[\s\S]*(?:\bhealth (?:code|regulations?|rules)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|rental)\b))` / all / 16 / hdrent.and: MCL 15.243; MCL 18.361; MCL 207.752; MCL 289.1107; MCL 289.1107.amended; MCL 324.80101; MCL 333.5475a; MCL 400.14; MCL 400.57i; MCL 400.704; MCL 427.201; MCL 554.134; MCL 554.601b; MCL 554.917; MCL 600.5714; MCL 750.141a
- positive hd @ MCL 125.408: passed ("board of health of any such city or village imposing requirements higher than the minimum requirements laid down in this")
- positive bh @ MCL 125.408: passed ("board of health")
- positive hdrent @ SYNTH: passed ("The landlord shall provide the tenant a copy of the health code regulations on request.")

**MIG-B4-009** (superseded by MIG-B4-024), topic `lead-safe-certification`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:21:16. lead-safe certificate or registry tied to rentals or leases
- summary: Battery MIG-B4-009 (ls 4; lcert.ab 29; lcert.ba 36; lcert.and 67; lten.ab 5; lten.ba 4; lten.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\blead[- ]safe\b` / all / 4 / ls: MCL 333.5453; MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]
- `(?:\blead\b)[\s\S]{0,1200}?(?:\b(?:certificates?|certif(?:y|ies|ied|ication))\b)` / all / 29 / lcert.ab: MCL 208.1459; MCL 324.4705; MCL 325.1011c; MCL 330.1281a; MCL 333.5453; MCL 333.5454; MCL 333.5455; MCL 333.5456; MCL 333.5460a; MCL 333.5461; MCL 333.5461a; MCL 333.5468; MCL 333.5469; MCL 333.5470; MCL 333.5471; MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5474d; MCL 333.5475; MCL 380.1531e; MCL 380.1903; MCL 380.1905; MCL 388.1283; MCL 388.1801; MCL 390.771; MCL 400.586g; MCL 722.111; MCL 722.113j
- `(?:\b(?:certificates?|certif(?:y|ies|ied|ication))\b)[\s\S]{0,1200}?(?:\blead\b)` / all / 36 / lcert.ba: MCL 125.2029h; MCL 208.1459; MCL 286.343; MCL 324.4705; MCL 325.1011c; MCL 333.5453; MCL 333.5454; MCL 333.5455; MCL 333.5456; MCL 333.5460a; MCL 333.5461; MCL 333.5462; MCL 333.5463; MCL 333.5466; MCL 333.5468; MCL 333.5469; MCL 333.5470; MCL 333.5471; MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5474d; MCL 333.5475; MCL 333.9206; MCL 333.18835; MCL 380.1233; MCL 380.1903; MCL 380.1905; MCL 388.1283; MCL 445.2; ... (6 more in the battery log)
- `\A(?=[\s\S]*(?:\blead\b))(?=[\s\S]*(?:\b(?:certificates?|certif(?:y|ies|ied|ication))\b))` / all / 67 / lcert.and: MCL 16.735; MCL 125.1508b; MCL 125.2029h; MCL 125.2233; MCL 125.2652; MCL 208.1437; MCL 208.1459; MCL 209.131; MCL 211.10g; MCL 286.343; MCL 324.4705; MCL 324.5501; MCL 324.5531; MCL 324.11504; MCL 324.11519b; MCL 324.11551; MCL 324.16903; MCL 325.1004; MCL 325.1011c; MCL 330.1100a; MCL 330.1281a; MCL 333.5453; MCL 333.5454; MCL 333.5455; MCL 333.5456; MCL 333.5460; MCL 333.5460a; MCL 333.5461; MCL 333.5461a; MCL 333.5462; ... (37 more in the battery log)
- `(?:\blead[- ]based paint\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)` / all / 5 / lten.ab: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a
- `(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)[\s\S]{0,1200}?(?:\blead[- ]based paint\b)` / all / 4 / lten.ba: MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a
- `\A(?=[\s\S]*(?:\blead[- ]based paint\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b))` / all / 5 / lten.and: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a
- positive ls @ MCL 333.5474b: passed ("lead safe housing registry")
- positive lcert @ MCL 333.5474b: passed ("a certified risk assessor certified under this part")
- positive lten @ MCL 333.5475a: passed ("rents or continues to rent a residential housing unit to a family with a minor child")

**MIG-B4-010** (superseded by MIG-B4-025), topic `lead-state-notices`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:21:34. state lead notices, pamphlets or disclosures delivered with a lease
- summary: Battery MIG-B4-010 (lnot.ab 26; lnot.ba 26; lnot.and 58; lten.ab 8; lten.ba 6; lten.and 15; lpois 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\blead(?:[- ]based paint)?\b)[\s\S]{0,1200}?(?:\b(?:notices?|notif(?:y|ies|ied|ication)|disclos(?:e|es|ed|ure|ures)|pamphlets?|warnings?|brochures?)\b)` / all / 26 / lnot.ab: MCL 125.1504i; MCL 324.11513; MCL 324.11514; MCL 324.11569; MCL 324.17103; MCL 324.31518; MCL 324.34201; MCL 325.1004; MCL 325.1019; MCL 333.5453; MCL 333.5472; MCL 333.5473a; MCL 333.5474; MCL 333.5475a; MCL 333.5477; MCL 333.9206; MCL 333.20531; MCL 380.1905; MCL 399.158; MCL 400.288; MCL 408.966; MCL 408.1063; MCL 500.1757; MCL 500.3355; MCL 722.113j; MCL 800.43
- `(?:\b(?:notices?|notif(?:y|ies|ied|ication)|disclos(?:e|es|ed|ure|ures)|pamphlets?|warnings?|brochures?)\b)[\s\S]{0,1200}?(?:\blead(?:[- ]based paint)?\b)` / all / 26 / lnot.ba: MCL 125.1504i; MCL 125.1508b; MCL 247.785; MCL 324.4705; MCL 324.11514; MCL 324.11569; MCL 324.17103; MCL 324.31518; MCL 324.34201; MCL 325.1019; MCL 333.5453; MCL 333.5466; MCL 333.5472; MCL 333.5473a; MCL 333.5474; MCL 333.5477; MCL 333.20531; MCL 380.1905; MCL 408.1063; MCL 432.309; MCL 432.409; MCL 440.3605; MCL 445.2; MCL 500.1757; MCL 600.2974; MCL 691.1416
- `\A(?=[\s\S]*(?:\blead(?:[- ]based paint)?\b))(?=[\s\S]*(?:\b(?:notices?|notif(?:y|ies|ied|ication)|disclos(?:e|es|ed|ure|ures)|pamphlets?|warnings?|brochures?)\b))` / all / 58 / lnot.and: MCL 14.311; MCL 125.1504i; MCL 125.1508b; MCL 125.2029h; MCL 125.2652; MCL 208.1459; MCL 211.10g; MCL 247.785; MCL 290.647; MCL 324.4705; MCL 324.5531; MCL 324.11504; MCL 324.11513; MCL 324.11514; MCL 324.11551; MCL 324.11569; MCL 324.16903; MCL 324.17103; MCL 324.19608; MCL 324.30312f; MCL 324.31518; MCL 324.34201; MCL 325.1004; MCL 325.1019; MCL 330.1281a; MCL 333.5453; MCL 333.5466; MCL 333.5472; MCL 333.5473a; MCL 333.5474; ... (28 more in the battery log)
- `(?:\blead\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)` / all / 8 / lten.ab: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a; MCL 432.309; MCL 432.409; MCL 750.110a
- `(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)[\s\S]{0,1200}?(?:\blead\b)` / all / 6 / lten.ba: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a; MCL 447.157
- `\A(?=[\s\S]*(?:\blead\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b))` / all / 15 / lten.and: MCL 125.2029h; MCL 125.2652; MCL 208.1437; MCL 290.642; MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a; MCL 432.202; MCL 432.309; MCL 432.409; MCL 447.157; MCL 500.8121; MCL 750.110a
- `\blead poisoning\b` / all / 7 / lpois: MCL 325.72; MCL 333.5111; MCL 333.5473a; MCL 333.5474; MCL 333.5474c[1]; MCL 333.5474d; MCL 333.9206
- positive lnot @ MCL 333.5472: passed ("a person conducting lead-based paint abatement shall notify the department")
- positive lten @ MCL 333.5475a: passed ("rents or continues to rent a residential housing unit")
- positive lpois @ MCL 333.5474: passed ("lead poisoning prevention program")

**MIG-B4-011** (cited), topic `substandard-property-receivership`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:21:50. receivership and code-enforcement orders for substandard rental housing
- summary: Battery MIG-B4-011 (rcv.ab 22; rcv.ba 18; rcv.and 39; rcvcert 1; repord.ab 3; repord.ba 2; repord.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\breceivers?(?:hip|hips)?\b)[\s\S]{0,1200}?(?:\b(?:dwellings?|tenants?|rental|housing|premises)\b)` / all / 22 / rcv.ab: MCL 37.2103; MCL 125.531; MCL 125.535; MCL 125.694; MCL 125.1422e; MCL 205.51; MCL 287.746; MCL 436.1501; MCL 440.9102; MCL 445.1452; MCL 487.3433; MCL 487.14202; MCL 554.614; MCL 554.1012; MCL 554.1014; MCL 554.1027; MCL 554.1056; MCL 554.1063; MCL 559.208; MCL 570.257; MCL 600.2927; MCL 600.3348
- `(?:\b(?:dwellings?|tenants?|rental|housing|premises)\b)[\s\S]{0,1200}?(?:\breceivers?(?:hip|hips)?\b)` / all / 18 / rcv.ba: MCL 125.531; MCL 125.535; MCL 125.694; MCL 125.1255; MCL 125.1422e; MCL 125.1502a; MCL 287.746; MCL 331.59; MCL 339.2411; MCL 339.2503; MCL 554.614; MCL 554.1014; MCL 554.1027; MCL 554.1063; MCL 600.2927; MCL 600.3348; MCL 600.5720; MCL 830.418
- `\A(?=[\s\S]*(?:\breceivers?(?:hip|hips)?\b))(?=[\s\S]*(?:\b(?:dwellings?|tenants?|rental|housing|premises)\b))` / all / 39 / rcv.and: MCL 37.2103; MCL 125.531; MCL 125.535; MCL 125.694; MCL 125.1255; MCL 125.1422e; MCL 125.1502a; MCL 205.51; MCL 205.92; MCL 206.609; MCL 208.1113; MCL 287.746; MCL 289.1107; MCL 289.1107.amended; MCL 324.11578; MCL 331.59; MCL 339.2411; MCL 339.2503; MCL 432.23; MCL 436.1501; MCL 440.9102; MCL 445.1452; MCL 460.723; MCL 475.1; MCL 487.3204; MCL 487.3433; MCL 487.14202; MCL 554.614; MCL 554.1012; MCL 554.1014; ... (9 more in the battery log)
- `\breceivership certificates?\b` / all / 1 / rcvcert: MCL 125.535
- `(?:\b(?:order|orders|ordered) to (?:repair|correct|comply)\b)[\s\S]{0,1200}?(?:\b(?:dwellings?|premises|buildings?)\b)` / all / 3 / repord.ab: MCL 29.9; MCL 29.13; MCL 125.532
- `(?:\b(?:dwellings?|premises|buildings?)\b)[\s\S]{0,1200}?(?:\b(?:order|orders|ordered) to (?:repair|correct|comply)\b)` / all / 2 / repord.ba: MCL 29.9; MCL 125.529
- `\A(?=[\s\S]*(?:\b(?:order|orders|ordered) to (?:repair|correct|comply)\b))(?=[\s\S]*(?:\b(?:dwellings?|premises|buildings?)\b))` / all / 6 / repord.and: MCL 29.9; MCL 29.13; MCL 125.529; MCL 125.532; MCL 125.1422; MCL 125.2348
- positive rcv @ MCL 125.535: passed ("the court may appoint a receiver of the premises")
- positive rcvcert @ MCL 125.535: passed ("issue receivership certificates")
- positive repord @ MCL 125.529: passed ("an order to comply with the act shall be issued immediately and served upon the owner")

**MIG-B4-012** (cited), topic `inspection-condemnation-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:22:17. landlord disclosure of code violations, inspection orders or condemnation to tenants
- summary: Battery MIG-B4-012 (viodisc.ab 16; viodisc.ba 24; viodisc.and 52; prosp.ab 1; prosp.ba 2; prosp.and 2; chk 1; condten.ab 13; condten.ba 8; condten.and 21 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:disclos(?:e|es|ed|ure)|inform|notify|notice)\b)[\s\S]{0,1200}?(?:\b(?:code violations?|violations? of (?:the|a|any) (?:housing|building) code|condemn(?:ed|ation)|order to vacate|ordered vacated|unfit for (?:human )?habitation)\b)` / all / 16 / viodisc.ab: MCL 29.5a; MCL 41.2; MCL 125.74; MCL 125.917; MCL 128.55; MCL 207.773; MCL 213.2; MCL 213.54; MCL 213.261; MCL 221.20c; MCL 280.564; MCL 289.2105; MCL 290.609b; MCL 324.63511; MCL 600.5744; MCL 600.5775 [heading-only, read: MCL 324.1604]
- `(?:\b(?:code violations?|violations? of (?:the|a|any) (?:housing|building) code|condemn(?:ed|ation)|order to vacate|ordered vacated|unfit for (?:human )?habitation)\b)[\s\S]{0,1200}?(?:\b(?:disclos(?:e|es|ed|ure)|inform|notify|notice)\b)` / all / 24 / viodisc.ba: MCL 29.5a; MCL 46.359a; MCL 125.72; MCL 125.74; MCL 125.530; MCL 125.539; MCL 125.918; MCL 125.942; MCL 125.2023; MCL 125.3604; MCL 128.43; MCL 128.55; MCL 211.7dd; MCL 213.23; MCL 213.174a; MCL 213.261; MCL 280.564; MCL 286.927; MCL 324.1604; MCL 324.1605; MCL 324.36111b; MCL 324.76117; MCL 460.571; MCL 486.252 [heading-only, read: MCL 224.14]
- `\A(?=[\s\S]*(?:\b(?:disclos(?:e|es|ed|ure)|inform|notify|notice)\b))(?=[\s\S]*(?:\b(?:code violations?|violations? of (?:the|a|any) (?:housing|building) code|condemn(?:ed|ation)|order to vacate|ordered vacated|unfit for (?:human )?habitation)\b))` / all / 52 / viodisc.and: MCL 29.5a; MCL 41.2; MCL 46.359a; MCL 124.671; MCL 125.72; MCL 125.74; MCL 125.530; MCL 125.539; MCL 125.917; MCL 125.918; MCL 125.942; MCL 125.2023; MCL 125.3604; MCL 128.43; MCL 128.55; MCL 207.773; MCL 211.7dd; MCL 211.7jj[1]; MCL 211.9m; MCL 211.34c; MCL 213.2; MCL 213.23; MCL 213.54; MCL 213.174a; MCL 213.261; MCL 221.20c; MCL 224.12; MCL 247.661; MCL 247.662; MCL 247.663; ... (22 more in the battery log) [heading-only, read: MCL 224.14]
- `(?:\bprospective (?:tenants?|lessees?|occupants?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:violations?|condemn\w*|hazards?)\b)` / all / 1 / prosp.ab: MCL 125.2338
- `(?:\b(?:violations?|condemn\w*|hazards?)\b)[\s\S]{0,1200}?(?:\bprospective (?:tenants?|lessees?|occupants?|renters?)\b)` / all / 2 / prosp.ba: MCL 125.2338; MCL 554.139
- `\A(?=[\s\S]*(?:\bprospective (?:tenants?|lessees?|occupants?|renters?)\b))(?=[\s\S]*(?:\b(?:violations?|condemn\w*|hazards?)\b))` / all / 2 / prosp.and: MCL 125.2338; MCL 554.139
- `\bchecklist of commonly recurring violations\b` / all / 1 / chk: MCL 125.528
- `(?:\bcondemn(?:ed|ation|s)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|renters?)\b)` / all / 13 / condten.ab: MCL 67.16; MCL 73.4; MCL 125.918; MCL 125.2466; MCL 211.7dd; MCL 211.34c; MCL 213.59; MCL 213.352; MCL 254.224; MCL 259.134; MCL 486.308; MCL 600.5775; MCL 600.8031
- `(?:\b(?:tenants?|lessees?|occupants?|renters?)\b)[\s\S]{0,1200}?(?:\bcondemn(?:ed|ation|s)?\b)` / all / 8 / condten.ba: MCL 67.16; MCL 125.2466; MCL 141.1408; MCL 213.352; MCL 254.224; MCL 259.462; MCL 324.2147; MCL 600.5775
- `\A(?=[\s\S]*(?:\bcondemn(?:ed|ation|s)?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|renters?)\b))` / all / 21 / condten.and: MCL 67.16; MCL 73.4; MCL 125.918; MCL 125.2466; MCL 141.1408; MCL 211.7dd; MCL 211.9m; MCL 211.34c; MCL 213.2; MCL 213.59; MCL 213.352; MCL 254.224; MCL 259.134; MCL 259.462; MCL 324.503; MCL 324.2147; MCL 331.9; MCL 331.57; MCL 486.308; MCL 600.5775; MCL 600.8031
- positive viodisc @ SYNTH: passed ("The landlord shall disclose to a prospective tenant any code violations cited against the dwelling.")
- positive prosp @ SYNTH: passed ("Before renting, the owner shall tell prospective tenants of any condemnation order.")
- positive chk @ MCL 125.528: passed ("checklist of commonly recurring violations")
- positive condten @ SYNTH: passed ("If the dwelling is condemned the tenant may terminate the lease.")

**MIG-B4-013** (cited), topic `inspection-notice-penalty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:22:36. notice of move-in or move-out inspection rights and penalty for omission
- summary: Battery MIG-B4-013 (inv 3; invpen.ab 2; invpen.ba 1; invpen.and 2; mvin.ab 0; mvin.ba 0; mvin.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\binventory check ?lists?\b` / all / 3 / inv: MCL 554.608; MCL 554.609; 2026-PA-0102
- `(?:\binventory check ?lists?\b)[\s\S]{0,1200}?(?:\b(?:fail(?:s|ed|ure)?|penalt(?:y|ies)|forfeit\w*|waive[rs]?|double)\b)` / all / 2 / invpen.ab: MCL 554.609; 2026-PA-0102
- `(?:\b(?:fail(?:s|ed|ure)?|penalt(?:y|ies)|forfeit\w*|waive[rs]?|double)\b)[\s\S]{0,1200}?(?:\binventory check ?lists?\b)` / all / 1 / invpen.ba: 2026-PA-0102
- `\A(?=[\s\S]*(?:\binventory check ?lists?\b))(?=[\s\S]*(?:\b(?:fail(?:s|ed|ure)?|penalt(?:y|ies)|forfeit\w*|waive[rs]?|double)\b))` / all / 2 / invpen.and: MCL 554.609; 2026-PA-0102
- `(?:\b(?:move-?in|move-?out|walk-?through|pre-?move-?out)\b)[\s\S]{0,1200}?(?:\binspect(?:s|ed|ion|ions)?\b)` / all / 0 / mvin.ab
- `(?:\binspect(?:s|ed|ion|ions)?\b)[\s\S]{0,1200}?(?:\b(?:move-?in|move-?out|walk-?through|pre-?move-?out)\b)` / all / 0 / mvin.ba
- `\A(?=[\s\S]*(?:\b(?:move-?in|move-?out|walk-?through|pre-?move-?out)\b))(?=[\s\S]*(?:\binspect(?:s|ed|ion|ions)?\b))` / all / 0 / mvin.and
- positive inv @ MCL 554.608: passed ("inventory checklists")
- positive invpen @ SYNTH: passed ("A landlord who fails to provide the inventory checklist forfeits the right to retain any part of the deposit.")
- positive mvin @ SYNTH: passed ("the tenant may request a move-out inspection")

**MIG-B4-014** (superseded by MIG-B4-026), topic `condemned-premises-rent-bar`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:22:50. rent suspended or barred for condemned, uncertified or vacated premises
- summary: Battery MIG-B4-014 (crent.ab 15; crent.ba 13; crent.and 31; duty 1; escrow.ab 5; escrow.ba 9; escrow.and 15 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:condemn(?:ed|ation)|vacat(?:e|ed|ion)|unfit for (?:human )?habitation|certificate of compliance)\b)[\s\S]{0,1200}?(?:\brent(?:s|al|als)?\b)` / all / 15 / crent.ab: MCL 125.74; MCL 125.530; MCL 125.532; MCL 125.539; MCL 125.917; MCL 125.2023; MCL 125.2466; MCL 141.613; MCL 247.663a; MCL 460.837; MCL 554.601b; MCL 559.204b; MCL 559.222b; MCL 570.523; MCL 600.5775
- `(?:\brent(?:s|al|als)?\b)[\s\S]{0,1200}?(?:\b(?:condemn(?:ed|ation)|vacat(?:e|ed|ion)|unfit for (?:human )?habitation|certificate of compliance)\b)` / all / 13 / crent.ba: MCL 119.4; MCL 125.74; MCL 125.530; MCL 125.917; MCL 125.1513; MCL 125.1608; MCL 213.321; MCL 213.323; MCL 460.837; MCL 554.601b; MCL 554.632; MCL 570.523; MCL 600.5775
- `\A(?=[\s\S]*(?:\b(?:condemn(?:ed|ation)|vacat(?:e|ed|ion)|unfit for (?:human )?habitation|certificate of compliance)\b))(?=[\s\S]*(?:\brent(?:s|al|als)?\b))` / all / 31 / crent.and: MCL 117.5k; MCL 119.4; MCL 124.464; MCL 125.74; MCL 125.530; MCL 125.532; MCL 125.534; MCL 125.539; MCL 125.917; MCL 125.1513; MCL 125.1608; MCL 125.2023; MCL 125.2466; MCL 141.613; MCL 211.7cc; MCL 213.321; MCL 213.323; MCL 247.663a; MCL 259.116; MCL 330.1205; MCL 331.9; MCL 331.57; MCL 460.837; MCL 500.1283; MCL 554.601b; MCL 554.632; MCL 559.204b; MCL 559.222b; MCL 570.523; MCL 600.5775; ... (1 more in the battery log)
- `\bduty to pay rent\b` / all / 1 / duty: MCL 125.530
- `(?:\bescrow\b)[\s\S]{0,1200}?(?:\brent(?:s|al|als)?\b)` / all / 5 / escrow.ab: MCL 125.530; MCL 125.698; MCL 125.2706; MCL 445.1454; MCL 487.3410
- `(?:\brent(?:s|al|als)?\b)[\s\S]{0,1200}?(?:\bescrow\b)` / all / 9 / escrow.ba: MCL 125.530; MCL 125.698; MCL 125.2705; MCL 125.2706; MCL 324.20101a; MCL 324.64107; MCL 331.9; MCL 451.422; MCL 600.5720
- `\A(?=[\s\S]*(?:\bescrow\b))(?=[\s\S]*(?:\brent(?:s|al|als)?\b))` / all / 15 / escrow.and: MCL 125.530; MCL 125.698; MCL 125.1422; MCL 125.2705; MCL 125.2706; MCL 205.27a; MCL 324.20101a; MCL 324.64107; MCL 331.9; MCL 445.1454; MCL 451.422; MCL 487.3410; MCL 493.133; MCL 600.5720; MCL 700.7817
- positive crent @ MCL 125.530: passed ("The duty to pay rent in accordance with the terms of any lease or agreement or under the provisions of any statute shall")
- positive duty @ MCL 125.530: passed ("duty to pay rent")
- positive escrow @ MCL 125.530: passed ("Rents due for the period during which rent is suspended shall be paid into an escrow account")

**MIG-B4-015** (cited), topic `sanitary-code-variance`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:23:09. notice to tenants of a housing, health or building code variance or exception
- summary: Battery MIG-B4-015 (var.ab 2; var.ba 4; var.and 7; exc.ab 39; exc.ba 16; exc.and 107; boa 36 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bvarian(?:ce|ces)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|leases?|occupants?|dwellings?|rental)\b)` / all / 2 / var.ab: MCL 287.1006; MCL 554.917
- `(?:\b(?:tenants?|lessees?|leases?|occupants?|dwellings?|rental)\b)[\s\S]{0,1200}?(?:\bvarian(?:ce|ces)\b)` / all / 4 / var.ba: MCL 125.1519; MCL 125.3406; MCL 324.63527; MCL 554.917
- `\A(?=[\s\S]*(?:\bvarian(?:ce|ces)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|leases?|occupants?|dwellings?|rental)\b))` / all / 7 / var.and: MCL 3.1031; MCL 125.1519; MCL 125.3406; MCL 287.1006; MCL 324.35304; MCL 324.63527; MCL 554.917
- `(?:\b(?:exceptions?|waivers?|exemptions?)\b)[\s\S]{0,1200}?(?:\b(?:housing|sanitary|sanitation|health|building) code\b)` / all / 39 / exc.ab: MCL 29.3c; MCL 125.1528; MCL 205.54w; MCL 205.54ff; MCL 205.94s; MCL 205.94ff; MCL 206.30; MCL 211.7ii; MCL 211.9j; MCL 287.892; MCL 289.3105; MCL 289.3119; MCL 289.4117; MCL 324.36108; MCL 330.3101; MCL 338.3611; MCL 388.1767; MCL 400.63; MCL 400.726a; MCL 427.3; MCL 436.1703; MCL 550.1414a; MCL 554.917; MCL 600.867; MCL 600.880; MCL 600.1307a; MCL 600.2922a; MCL 600.2975; MCL 691.1807; MCL 700.5507; ... (9 more in the battery log)
- `(?:\b(?:housing|sanitary|sanitation|health|building) code\b)[\s\S]{0,1200}?(?:\b(?:exceptions?|waivers?|exemptions?)\b)` / all / 16 / exc.ba: MCL 125.539; MCL 205.54w; MCL 205.75; MCL 205.94s; MCL 206.30; MCL 207.952; MCL 211.7o; MCL 211.24e; MCL 289.3119; MCL 330.3101; MCL 338.3611; MCL 400.63; MCL 400.105d; MCL 400.106; MCL 722.115; Mich Admin Code R 408.30505
- `\A(?=[\s\S]*(?:\b(?:exceptions?|waivers?|exemptions?)\b))(?=[\s\S]*(?:\b(?:housing|sanitary|sanitation|health|building) code\b))` / all / 107 / exc.and: MCL 15.234; MCL 15.243; MCL 24.315; MCL 28.274; MCL 28.291; MCL 28.292; MCL 28.422; MCL 28.425b; MCL 28.609; MCL 28.609b; MCL 28.609c; MCL 28.609d; MCL 29.3c; MCL 32.273; MCL 38.68c; MCL 52.202; MCL 123.1357; MCL 125.539; MCL 125.1528; MCL 125.2652; MCL 205.54w; MCL 205.54ff; MCL 205.75; MCL 205.94s; MCL 205.94ff; MCL 206.30; MCL 207.902; MCL 207.952; MCL 211.7o; MCL 211.7ii; ... (77 more in the battery log)
- `\bboard of appeals\b` / all / 36 / boa: MCL 45.554; MCL 125.54; MCL 125.80; MCL 125.137; MCL 125.408; MCL 125.541; MCL 125.541b; MCL 125.541c; MCL 125.542; MCL 125.950; MCL 125.1502a; MCL 125.1511; MCL 125.1514; MCL 125.1515; MCL 125.1516; MCL 125.1517; MCL 125.1518; MCL 125.1522; MCL 125.1523; MCL 125.3601; MCL 125.3602; MCL 125.3603; MCL 125.3604; MCL 125.3605; MCL 125.3606; MCL 125.3607; MCL 259.454; MCL 259.455; MCL 259.456; MCL 259.457; ... (6 more in the battery log)
- positive var @ SYNTH: passed ("A variance granted for a dwelling shall be attached to each lease and given to the tenants.")
- positive exc @ SYNTH: passed ("An exception to the housing code granted for the dwelling shall be disclosed.")
- positive boa @ MCL 125.408: passed ("the decision of a board of appeals")

**MIG-B4-016** (cited), topic `certificate-of-occupancy-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:23:23. certificate of occupancy or compliance disclosed to tenants
- summary: Battery MIG-B4-016 (co 27; coten.ab 10; coten.ba 9; coten.and 18 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bcertificates? of (?:use and )?occupancy\b` / all / 27 / co: MCL 125.1352; MCL 125.1509; MCL 125.1509b; MCL 125.1509c; MCL 125.1512; MCL 125.1513; MCL 125.1522; MCL 125.2787; MCL 207.526; MCL 207.559; MCL 207.566; MCL 207.610; MCL 207.659; MCL 207.709; MCL 207.780; MCL 207.847; MCL 207.907; MCL 207.957; MCL 208.1437; MCL 211.53d; MCL 339.2411; MCL 388.851b; MCL 432.212; MCL 559.203b; MCL 559.273; Mich Admin Code R 408.30510; Mich Admin Code R 408.30499
- `(?:\bcertificates? of (?:use and )?occupancy|certificates? of compliance\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|leases?|rent|rental|prospective|occupants?)\b)` / all / 10 / coten.ab: MCL 125.526; MCL 125.529; MCL 125.530; MCL 125.531; MCL 125.1513; MCL 207.659; MCL 207.709; MCL 287.825; MCL 324.6306; MCL 600.5744
- `(?:\b(?:tenants?|lessees?|leases?|rent|rental|prospective|occupants?)\b)[\s\S]{0,1200}?(?:\bcertificates? of (?:use and )?occupancy|certificates? of compliance\b)` / all / 9 / coten.ba: MCL 125.530; MCL 125.534; MCL 125.1352; MCL 125.1513; MCL 207.659; MCL 207.709; MCL 208.1437; MCL 257.219; MCL 600.5744
- `\A(?=[\s\S]*(?:\bcertificates? of (?:use and )?occupancy|certificates? of compliance\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|leases?|rent|rental|prospective|occupants?)\b))` / all / 18 / coten.and: MCL 125.526; MCL 125.529; MCL 125.530; MCL 125.531; MCL 125.534; MCL 125.1352; MCL 125.1513; MCL 207.526; MCL 207.559; MCL 207.659; MCL 207.709; MCL 208.1437; MCL 257.219; MCL 287.825; MCL 324.6306; MCL 339.2411; MCL 460.1315; MCL 600.5744
- positive co @ MCL 125.1513: passed ("certificate of use and occupancy")
- positive coten @ MCL 125.1513: passed ("The application for a certificate of use and occupancy for a new dwelling with a unit or units for rent")

**MIG-B4-017** (cited), topic `frozen-standard-incorporation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:24:44. adoption of codes by reference: fixed edition or later editions
- summary: Battery MIG-B4-017 (later.ab 9; later.ba 11; later.and 16; icc.ab 2; icc.ba 2; icc.and 2; ed 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:later|subsequent|future) (?:amendments?|editions?|revisions?)\b)[\s\S]{0,1200}?(?:\b(?:adopt(?:s|ed|ing|ion)?|by reference|incorporat(?:e|es|ed|ion))\b)` / all / 9 / later.ab: MCL 3.1031; MCL 24.232; MCL 125.3401; MCL 125.3869; MCL 319.110; MCL 324.30308; MCL 408.806; MCL 500.1123; MCL 722.958a
- `(?:\b(?:adopt(?:s|ed|ing|ion)?|by reference|incorporat(?:e|es|ed|ion))\b)[\s\S]{0,1200}?(?:\b(?:later|subsequent|future) (?:amendments?|editions?|revisions?)\b)` / all / 11 / later.ba: MCL 3.1031; MCL 24.232; MCL 125.3401; MCL 125.3869; MCL 208.1437; MCL 324.9105; MCL 324.30308; MCL 324.81123; MCL 388.1618; MCL 400.3a; MCL 408.806
- `\A(?=[\s\S]*(?:\b(?:later|subsequent|future) (?:amendments?|editions?|revisions?)\b))(?=[\s\S]*(?:\b(?:adopt(?:s|ed|ing|ion)?|by reference|incorporat(?:e|es|ed|ion))\b))` / all / 16 / later.and: MCL 3.1031; MCL 24.232; MCL 32.1002; MCL 125.3401; MCL 125.3869; MCL 208.1437; MCL 319.110; MCL 324.9105; MCL 324.30308; MCL 324.81123; MCL 333.16189; MCL 388.1618; MCL 400.3a; MCL 408.806; MCL 500.1123; MCL 722.958a
- `(?:\binternational (?:property maintenance|residential|building|fire|existing building) code\b)[\s\S]{0,1200}?(?:\beditions?\b)` / all / 2 / icc.ab: MCL 125.1504; Mich Admin Code R 408.30500
- `(?:\beditions?\b)[\s\S]{0,1200}?(?:\binternational (?:property maintenance|residential|building|fire|existing building) code\b)` / all / 2 / icc.ba: MCL 125.1504; Mich Admin Code R 408.30500
- `\A(?=[\s\S]*(?:\binternational (?:property maintenance|residential|building|fire|existing building) code\b))(?=[\s\S]*(?:\beditions?\b))` / all / 2 / icc.and: MCL 125.1504; Mich Admin Code R 408.30500
- `\b(?:\d{4}|current|latest|most recent) edition\b` / all / 16 / ed: MCL 28.452; MCL 29.369; MCL 125.1504; MCL 125.1513c; MCL 125.1528a; MCL 211.9p; MCL 257.602b; MCL 257.719; MCL 287.746; MCL 290.251; MCL 290.628c; MCL 324.20114; MCL 339.5733; MCL 408.1004; MCL 421.27; Mich Admin Code R 408.30500
- positive later @ MCL 24.232: passed ("The reference must not cover any later amendments and editions of the adopted matter")
- positive icc @ Mich Admin Code R 408.30500: passed ("international residential code, 2015 edition")
- positive ed @ Mich Admin Code R 408.30500: passed ("2015 edition")

**MIG-B4-018** (cited), topic `family-child-care`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:25:01. tenant operating a family child care home; landlord consent or lease restriction
- summary: Battery MIG-B4-018 (fcc.ab 0; fcc.ba 0; fcc.and 3; fccplain 28; ccl.ab 0; ccl.ba 0; ccl.and 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:family|group) (?:child|day) care homes?\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|leases?|tenants?|rental|rented|renters?)\b)` / all / 0 / fcc.ab
- `(?:\b(?:landlords?|lessors?|leases?|tenants?|rental|rented|renters?)\b)[\s\S]{0,1200}?(?:\b(?:family|group) (?:child|day) care homes?\b)` / all / 0 / fcc.ba
- `\A(?=[\s\S]*(?:\b(?:family|group) (?:child|day) care homes?\b))(?=[\s\S]*(?:\b(?:landlords?|lessors?|leases?|tenants?|rental|rented|renters?)\b))` / all / 3 / fcc.and: MCL 400.713; MCL 445.2011; MCL 722.111
- `\bfamily child care homes?\b` / all / 28 / fccplain: MCL 125.3102; MCL 125.3206; MCL 400.713; MCL 722.111; MCL 722.111a; MCL 722.112; MCL 722.112a; MCL 722.113a; MCL 722.113c; MCL 722.113g; MCL 722.114a; MCL 722.115; MCL 722.115e; MCL 722.115g; MCL 722.115m; MCL 722.115n; MCL 722.115o; MCL 722.115p; MCL 722.115q; MCL 722.115r; MCL 722.115s; MCL 722.120; MCL 722.121; MCL 722.121b; MCL 722.121c; MCL 722.125; MCL 722.1581; MCL 722.1603
- `(?:\bchild care\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|owner of the (?:dwelling|property|premises))\b)` / all / 0 / ccl.ab
- `(?:\b(?:landlords?|lessors?|owner of the (?:dwelling|property|premises))\b)[\s\S]{0,1200}?(?:\bchild care\b)` / all / 0 / ccl.ba
- `\A(?=[\s\S]*(?:\bchild care\b))(?=[\s\S]*(?:\b(?:landlords?|lessors?|owner of the (?:dwelling|property|premises))\b))` / all / 7 / ccl.and: MCL 400.14; MCL 400.713; MCL 712A.30; MCL 769.1a; MCL 780.766; MCL 780.794; MCL 780.826
- positive fcc @ SYNTH: passed ("A landlord shall not prohibit a tenant from operating a family child care home in a rental dwelling.")
- positive fccplain @ MCL 125.3206: passed ("a family child care home is a residential use of property")
- positive ccl @ SYNTH: passed ("The child care licensee shall obtain the written consent of the landlord.")

**MIG-B4-019** (cited), topic `home-business`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:25:19. home business or home occupation in a dwelling; lease restriction
- summary: Battery MIG-B4-019 (hb 3; hbten.ab 1; hbten.ba 1; hbten.and 1; agr.ab 0; agr.ba 0; agr.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bhome[- ](?:occupations?|business(?:es)?|based business(?:es)?)\b` / all / 3 / hb: MCL 125.2304; MCL 125.3204; MCL 257.5
- `(?:\bhome[- ](?:occupations?|business(?:es)?|based)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|leases?|rental|renters?|lessees?|occupants?)\b)` / all / 1 / hbten.ab: MCL 125.3204
- `(?:\b(?:tenants?|landlords?|leases?|rental|renters?|lessees?|occupants?)\b)[\s\S]{0,1200}?(?:\bhome[- ](?:occupations?|business(?:es)?|based)\b)` / all / 1 / hbten.ba: MCL 125.3204
- `\A(?=[\s\S]*(?:\bhome[- ](?:occupations?|business(?:es)?|based)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|leases?|rental|renters?|lessees?|occupants?)\b))` / all / 1 / hbten.and: MCL 125.3204
- `(?:\b(?:business|commercial|occupation)\b)[\s\S]{0,1200}?(?:\bagreements? restricting the use of land\b)` / all / 0 / agr.ab
- `(?:\bagreements? restricting the use of land\b)[\s\S]{0,1200}?(?:\b(?:business|commercial|occupation)\b)` / all / 0 / agr.ba
- `\A(?=[\s\S]*(?:\b(?:business|commercial|occupation)\b))(?=[\s\S]*(?:\bagreements? restricting the use of land\b))` / all / 0 / agr.and
- positive hb @ MCL 125.3204: passed ("home occupation")
- positive hbten @ MCL 125.3204: passed ("use of a single-family residence by an occupant of that residence for a home occupation")
- positive agr @ SYNTH: passed ("A home business is lawful unless an agreement restricting the use of land prohibits the business.")

**MIG-B4-020** (cited), topic `sfr-occupancy-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:25:34. single-family rental disclosure; type size or first-page placement
- summary: Battery MIG-B4-020 (sfdisc.ab 1; sfdisc.ba 4; sfdisc.and 8; pt 68; fp.ab 0; fp.ba 1; fp.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsingle[- ]family\b)[\s\S]{0,1200}?(?:\b(?:disclos(?:e|es|ed|ure|ures)|notices?)\b)` / all / 1 / sfdisc.ab: MCL 500.942
- `(?:\b(?:disclos(?:e|es|ed|ure|ures)|notices?)\b)[\s\S]{0,1200}?(?:\bsingle[- ]family\b)` / all / 4 / sfdisc.ba: MCL 125.1422; MCL 460.6l; MCL 600.4909; MCL 600.4957
- `\A(?=[\s\S]*(?:\bsingle[- ]family\b))(?=[\s\S]*(?:\b(?:disclos(?:e|es|ed|ure|ures)|notices?)\b))` / all / 8 / sfdisc.and: MCL 125.1422; MCL 125.1508a; MCL 324.8520; MCL 324.11502; MCL 460.6l; MCL 500.942; MCL 600.4909; MCL 600.4957
- `\b\d+[- ]point (?:bold(?:face)? )?type\b` / all / 68 / pt: MCL 29.501; MCL 168.482; MCL 168.482b; MCL 168.544a; MCL 168.544c; MCL 168.668a; MCL 168.685; MCL 211.24e; MCL 211.764; MCL 257.662a; MCL 257.1363; MCL 286.705; MCL 333.17015; MCL 333.17757; MCL 333.17757a; MCL 333.20921b; MCL 333.20932a; MCL 333.21541; MCL 333.21765; MCL 333.21766; MCL 333.21773; MCL 333.24509; MCL 339.1014; MCL 339.1015; MCL 380.1285a; MCL 380.1613; MCL 399.611; MCL 445.113; MCL 445.853; MCL 445.953; ... (38 more in the battery log)
- `(?:\bfirst page\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?)\b)` / all / 0 / fp.ab
- `(?:\b(?:leases?|rental agreements?)\b)[\s\S]{0,1200}?(?:\bfirst page\b)` / all / 1 / fp.ba: MCL 554.608
- `\A(?=[\s\S]*(?:\bfirst page\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?)\b))` / all / 1 / fp.and: MCL 554.608
- positive sfdisc @ SYNTH: passed ("A lessor of a single-family dwelling shall give the tenant a notice of the permitted occupancy.")
- positive pt @ MCL 554.634: passed ("12-point type")
- positive fp @ SYNTH: passed ("The disclosure must appear on the first page of the lease.")

**MIG-B4-021** (cited), topic `term-change-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:25:50. changing lease terms during a tenancy; periodic tenancy modification notice
- summary: Battery MIG-B4-021 (alter.ab 2; alter.ba 0; alter.and 2; per.ab 1; per.ba 0; per.and 1; adj 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\balter(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\bwritten consent of the tenant\b)` / all / 2 / alter.ab: MCL 554.633; 2026-PA-0103
- `(?:\bwritten consent of the tenant\b)[\s\S]{0,1200}?(?:\balter(?:s|ed|ing)?\b)` / all / 0 / alter.ba
- `\A(?=[\s\S]*(?:\balter(?:s|ed|ing)?\b))(?=[\s\S]*(?:\bwritten consent of the tenant\b))` / all / 2 / alter.and: MCL 554.633; 2026-PA-0103
- `(?:\b(?:month[- ]to[- ]month|periodic tenanc(?:y|ies)|tenanc(?:y|ies) at will|estates? at will)\b)[\s\S]{0,1200}?(?:\b(?:chang(?:e|es|ed|ing)|increas(?:e|es|ed|ing)|modif(?:y|ies|ied|ication))\b)` / all / 1 / per.ab: MCL 445.1204b
- `(?:\b(?:chang(?:e|es|ed|ing)|increas(?:e|es|ed|ing)|modif(?:y|ies|ied|ication))\b)[\s\S]{0,1200}?(?:\b(?:month[- ]to[- ]month|periodic tenanc(?:y|ies)|tenanc(?:y|ies) at will|estates? at will)\b)` / all / 0 / per.ba
- `\A(?=[\s\S]*(?:\b(?:month[- ]to[- ]month|periodic tenanc(?:y|ies)|tenanc(?:y|ies) at will|estates? at will)\b))(?=[\s\S]*(?:\b(?:chang(?:e|es|ed|ing)|increas(?:e|es|ed|ing)|modif(?:y|ies|ied|ication))\b))` / all / 1 / per.and: MCL 445.1204b
- `\bwritten notice of not less than 30 days\b` / all / 2 / adj: MCL 554.633; 2026-PA-0103
- positive alter @ MCL 554.633: passed ("may alter a provision of the rental agreement after its commencement without the written consent of the tenant")
- positive per @ SYNTH: passed ("A landlord may change the terms of a month-to-month tenancy by giving written notice.")
- positive adj @ MCL 554.633: passed ("written notice of not less than 30 days")

**MIG-B4-022** (cited), topic `association-obligations-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:26:12. condominium or homeowners association obligations disclosed in a lease; associations outside the Condominium Act
- summary: Battery MIG-B4-022 (hoa.ab 1; hoa.ba 1; hoa.and 2; coa 37; cdocs.ab 3; cdocs.ba 2; cdocs.and 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:homeowners?|homeowner\'s|property owners?|community|neighborhood|subdivision|lot owners?) associations?\b)[\s\S]{0,1200}?(?:\b(?:leas(?:e|es|ed|ing)|rent(?:s|ed|al|als|ing)?|tenants?|lessees?)\b)` / all / 1 / hoa.ab: MCL 408.806
- `(?:\b(?:leas(?:e|es|ed|ing)|rent(?:s|ed|al|als|ing)?|tenants?|lessees?)\b)[\s\S]{0,1200}?(?:\b(?:homeowners?|homeowner\'s|property owners?|community|neighborhood|subdivision|lot owners?) associations?\b)` / all / 1 / hoa.ba: MCL 600.8031
- `\A(?=[\s\S]*(?:\b(?:homeowners?|homeowner\'s|property owners?|community|neighborhood|subdivision|lot owners?) associations?\b))(?=[\s\S]*(?:\b(?:leas(?:e|es|ed|ing)|rent(?:s|ed|al|als|ing)?|tenants?|lessees?)\b))` / all / 2 / hoa.and: MCL 408.806; MCL 600.8031
- `\bassociation of co-?owners\b` / all / 37 / coa: MCL 559.103; MCL 559.110; MCL 559.121; MCL 559.139; MCL 559.147a; MCL 559.148; MCL 559.149; MCL 559.151; MCL 559.152; MCL 559.154; MCL 559.155; MCL 559.156a; MCL 559.157; MCL 559.160; MCL 559.167; MCL 559.168; MCL 559.184a; MCL 559.190; MCL 559.190a; MCL 559.206; MCL 559.207; MCL 559.208; MCL 559.209; MCL 559.211; MCL 559.212; MCL 559.215; MCL 559.221; MCL 559.232; MCL 559.233; MCL 559.237; ... (7 more in the battery log)
- `(?:\bcondominium documents\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|leases?|rental agreements?)\b)` / all / 3 / cdocs.ab: MCL 559.147a; MCL 559.151; MCL 559.212
- `(?:\b(?:tenants?|lessees?|leases?|rental agreements?)\b)[\s\S]{0,1200}?(?:\bcondominium documents\b)` / all / 2 / cdocs.ba: MCL 559.151; MCL 559.212
- `\A(?=[\s\S]*(?:\bcondominium documents\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|leases?|rental agreements?)\b))` / all / 4 / cdocs.and: MCL 559.147a; MCL 559.151; MCL 559.208; MCL 559.212
- positive hoa @ SYNTH: passed ("A lease of a lot in a homeowners association shall state that the tenant must follow the association rules.")
- positive coa @ MCL 559.212: passed ("association of co-owners")
- positive cdocs @ MCL 559.212: passed ("Tenants or nonco-owner occupants shall comply with all of the conditions of the condominium documents of the condominium")

**MIG-B4-023** (cited), topic `owner-move-in-reservation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:26:25. landlord ending a tenancy for owner or family occupancy
- summary: Battery MIG-B4-023 (own.ab 16; own.ba 16; own.and 30; power 1; omi 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:owner|landlord|lessor)s?\b)[\s\S]{0,1200}?(?:\b(?:personal use|own use|family use|(?:occupy|occupied|occupancy) by the (?:owner|landlord|lessor)|for (?:his|her|its|their) own (?:use|occupancy|residence))\b)` / all / 16 / own.ab: MCL 125.539; MCL 205.54d; MCL 207.780; MCL 211.7o; MCL 211.7cc; MCL 211.7dd; MCL 324.51101; MCL 324.51113; MCL 339.2012; MCL 339.2403; MCL 436.1207; MCL 438.31c; MCL 445.883; MCL 750.181; MCL 750.364; MCL 752.1052
- `(?:\b(?:personal use|own use|family use|(?:occupy|occupied|occupancy) by the (?:owner|landlord|lessor)|for (?:his|her|its|their) own (?:use|occupancy|residence))\b)[\s\S]{0,1200}?(?:\b(?:owner|landlord|lessor)s?\b)` / all / 16 / own.ba: MCL 125.539; MCL 207.780; MCL 211.7o; MCL 211.7dd; MCL 257.217d; MCL 324.47328; MCL 324.50105; MCL 324.51113; MCL 324.51301; MCL 339.2401; MCL 339.2403; MCL 426.174; MCL 438.31c; MCL 570.582; MCL 750.181; MCL 750.364
- `\A(?=[\s\S]*(?:\b(?:owner|landlord|lessor)s?\b))(?=[\s\S]*(?:\b(?:personal use|own use|family use|(?:occupy|occupied|occupancy) by the (?:owner|landlord|lessor)|for (?:his|her|its|their) own (?:use|occupancy|residence))\b))` / all / 30 / own.and: MCL 125.526; MCL 125.539; MCL 205.27a; MCL 205.54d; MCL 205.94; MCL 207.780; MCL 211.7o; MCL 211.7cc; MCL 211.7dd; MCL 211.7jj[1]; MCL 257.217d; MCL 257.675; MCL 257.1403; MCL 290.652; MCL 324.47328; MCL 324.50105; MCL 324.51101; MCL 324.51113; MCL 324.51301; MCL 339.2012; MCL 339.2401; MCL 339.2403; MCL 426.174; MCL 436.1207; MCL 438.31c; MCL 445.883; MCL 570.582; MCL 750.181; MCL 750.364; MCL 752.1052
- `\bpower to terminate provided in the lease\b` / all / 1 / power: MCL 600.5714
- `\bowner[- ]move[- ]in\b` / all / 0 / omi
- positive own @ SYNTH: passed ("The landlord may terminate the tenancy if the owner seeks to recover possession for his own use and occupancy.")
- positive power @ MCL 600.5714: passed ("pursuant to a power to terminate provided in the lease")
- positive omi @ SYNTH: passed ("an owner move-in eviction")

**MIG-B4-024** (cited) (supersedes MIG-B4-009), topic `lead-safe-certification`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:33:19. rerun of MIG-B4-009 with lead word forms
- summary: Battery MIG-B4-024 (ls 4; lcert.ab 54; lcert.ba 59; lcert.and 109; lten.ab 5; lten.ba 4; lten.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\blead[- ]safe\b` / all / 4 / ls: MCL 333.5453; MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]
- `(?:\blead(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\b(?:certificates?|certif(?:y|ies|ied|ication))\b)` / all / 54 / lcert.ab: MCL 125.2090h; MCL 207.1003; MCL 208.1459; MCL 259.4; MCL 287.1118; MCL 324.4705; MCL 324.5501; MCL 324.11512a; MCL 324.81129; MCL 324.82108; MCL 325.1011c; MCL 330.1281a; MCL 333.5453; MCL 333.5454; MCL 333.5455; MCL 333.5456; MCL 333.5460a; MCL 333.5461; MCL 333.5461a; MCL 333.5468; MCL 333.5469; MCL 333.5470; MCL 333.5471; MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5474d; MCL 333.5475; MCL 333.18506a; MCL 380.1233b; ... (24 more in the battery log)
- `(?:\b(?:certificates?|certif(?:y|ies|ied|ication))\b)[\s\S]{0,1200}?(?:\blead(?:s|ed|ing)?\b)` / all / 59 / lcert.ba: MCL 54.213; MCL 125.2029h; MCL 125.2090h; MCL 207.1030; MCL 208.1459; MCL 259.4; MCL 259.203; MCL 286.343; MCL 324.4705; MCL 324.11512a; MCL 324.81129; MCL 324.82108; MCL 325.1011c; MCL 333.5453; MCL 333.5454; MCL 333.5455; MCL 333.5456; MCL 333.5460a; MCL 333.5461; MCL 333.5462; MCL 333.5463; MCL 333.5466; MCL 333.5468; MCL 333.5469; MCL 333.5470; MCL 333.5471; MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5474d; ... (29 more in the battery log)
- `\A(?=[\s\S]*(?:\blead(?:s|ed|ing)?\b))(?=[\s\S]*(?:\b(?:certificates?|certif(?:y|ies|ied|ication))\b))` / all / 109 / lcert.and: MCL 16.735; MCL 54.213; MCL 125.402; MCL 125.1508b; MCL 125.2029h; MCL 125.2090h; MCL 125.2233; MCL 125.2652; MCL 205.429; MCL 207.1003; MCL 207.1030; MCL 208.1437; MCL 208.1459; MCL 209.131; MCL 211.10g; MCL 259.4; MCL 259.203; MCL 286.343; MCL 287.1118; MCL 324.4705; MCL 324.5501; MCL 324.5531; MCL 324.11504; MCL 324.11512; MCL 324.11512a; MCL 324.11519b; MCL 324.11551; MCL 324.16903; MCL 324.20139; MCL 324.81129; ... (79 more in the battery log)
- `(?:\blead[- ]based paint\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)` / all / 5 / lten.ab: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a
- `(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)[\s\S]{0,1200}?(?:\blead[- ]based paint\b)` / all / 4 / lten.ba: MCL 333.5473a; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a
- `\A(?=[\s\S]*(?:\blead[- ]based paint\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b))` / all / 5 / lten.and: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a
- positive ls @ MCL 333.5474b: passed ("lead safe housing registry")
- positive lcert @ MCL 333.5474b: passed ("a certified risk assessor certified under this part")
- positive lten @ MCL 333.5475a: passed ("rents or continues to rent a residential housing unit to a family with a minor child")

**MIG-B4-025** (cited) (supersedes MIG-B4-010), topic `lead-state-notices`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:33:37. rerun of MIG-B4-010 with lead word forms
- summary: Battery MIG-B4-025 (lnot.ab 33; lnot.ba 38; lnot.and 81; lten.ab 8; lten.ba 6; lten.and 16; lpois 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\blead(?:s|ed|ing)?(?:[- ]based paint)?\b)[\s\S]{0,1200}?(?:\b(?:notices?|notif(?:y|ies|ied|ication)|disclos(?:e|es|ed|ure|ures)|pamphlets?|warnings?|brochures?)\b)` / all / 33 / lnot.ab: MCL 125.1504i; MCL 205.66a; MCL 290.628f; MCL 324.1616; MCL 324.11513; MCL 324.11514; MCL 324.11569; MCL 324.17103; MCL 324.31518; MCL 324.34201; MCL 325.1004; MCL 325.1019; MCL 333.5453; MCL 333.5472; MCL 333.5473a; MCL 333.5474; MCL 333.5475a; MCL 333.5477; MCL 333.9206; MCL 333.20531; MCL 380.1905; MCL 388.851d; MCL 399.158; MCL 400.288; MCL 408.966; MCL 408.1063; MCL 500.1757; MCL 500.3355; MCL 550.821; MCL 712B.9; ... (3 more in the battery log) [heading-only, read: MCL 287.1118]
- `(?:\b(?:notices?|notif(?:y|ies|ied|ication)|disclos(?:e|es|ed|ure|ures)|pamphlets?|warnings?|brochures?)\b)[\s\S]{0,1200}?(?:\blead(?:s|ed|ing)?(?:[- ]based paint)?\b)` / all / 38 / lnot.ba: MCL 45.85; MCL 125.1504i; MCL 125.1508b; MCL 205.429; MCL 247.785; MCL 257.698; MCL 290.628f; MCL 324.1616; MCL 324.4705; MCL 324.11514; MCL 324.11569; MCL 324.17103; MCL 324.31518; MCL 324.34201; MCL 325.1019; MCL 333.5453; MCL 333.5466; MCL 333.5472; MCL 333.5473a; MCL 333.5474; MCL 333.5477; MCL 333.20531; MCL 339.725; MCL 380.1905; MCL 388.851d; MCL 408.1063; MCL 432.309; MCL 432.409; MCL 440.3605; MCL 445.2; ... (8 more in the battery log) [heading-only, read: MCL 712B.9]
- `\A(?=[\s\S]*(?:\blead(?:s|ed|ing)?(?:[- ]based paint)?\b))(?=[\s\S]*(?:\b(?:notices?|notif(?:y|ies|ied|ication)|disclos(?:e|es|ed|ure|ures)|pamphlets?|warnings?|brochures?)\b))` / all / 81 / lnot.and: MCL 14.311; MCL 45.85; MCL 125.1504i; MCL 125.1508b; MCL 125.2029h; MCL 125.2652; MCL 205.66a; MCL 205.429; MCL 208.1459; MCL 211.10g; MCL 247.785; MCL 257.698; MCL 290.628f; MCL 290.647; MCL 324.1616; MCL 324.4705; MCL 324.5531; MCL 324.11504; MCL 324.11512; MCL 324.11513; MCL 324.11514; MCL 324.11551; MCL 324.11569; MCL 324.16903; MCL 324.17103; MCL 324.19608; MCL 324.20120e; MCL 324.30312f; MCL 324.31518; MCL 324.34201; ... (51 more in the battery log) [heading-only, read: MCL 287.1118; MCL 712B.9]
- `(?:\blead(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)` / all / 8 / lten.ab: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a; MCL 432.309; MCL 432.409; MCL 750.110a
- `(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b)[\s\S]{0,1200}?(?:\blead(?:s|ed|ing)?\b)` / all / 6 / lten.ba: MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a; MCL 447.157
- `\A(?=[\s\S]*(?:\blead(?:s|ed|ing)?\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|lessees?|tenants?|renters?|rental units?)\b))` / all / 16 / lten.and: MCL 125.2029h; MCL 125.2652; MCL 208.1437; MCL 290.642; MCL 333.5473a; MCL 333.5474; MCL 333.5474b; MCL 333.5474b[1]; MCL 333.5475a; MCL 432.202; MCL 432.309; MCL 432.409; MCL 445.1574; MCL 447.157; MCL 500.8121; MCL 750.110a
- `\blead poisoning\b` / all / 7 / lpois: MCL 325.72; MCL 333.5111; MCL 333.5473a; MCL 333.5474; MCL 333.5474c[1]; MCL 333.5474d; MCL 333.9206
- positive lnot @ MCL 333.5472: passed ("a person conducting lead-based paint abatement shall notify the department")
- positive lten @ MCL 333.5475a: passed ("rents or continues to rent a residential housing unit")
- positive lpois @ MCL 333.5474: passed ("lead poisoning prevention program")

**MIG-B4-026** (cited) (supersedes MIG-B4-014), topic `condemned-premises-rent-bar`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:33:52. rerun of MIG-B4-014 with escrow word forms
- summary: Battery MIG-B4-026 (crent.ab 15; crent.ba 13; crent.and 31; duty 1; escrow.ab 5; escrow.ba 9; escrow.and 15 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:condemn(?:ed|ation)|vacat(?:e|ed|ion)|unfit for (?:human )?habitation|certificate of compliance)\b)[\s\S]{0,1200}?(?:\brent(?:s|al|als)?\b)` / all / 15 / crent.ab: MCL 125.74; MCL 125.530; MCL 125.532; MCL 125.539; MCL 125.917; MCL 125.2023; MCL 125.2466; MCL 141.613; MCL 247.663a; MCL 460.837; MCL 554.601b; MCL 559.204b; MCL 559.222b; MCL 570.523; MCL 600.5775
- `(?:\brent(?:s|al|als)?\b)[\s\S]{0,1200}?(?:\b(?:condemn(?:ed|ation)|vacat(?:e|ed|ion)|unfit for (?:human )?habitation|certificate of compliance)\b)` / all / 13 / crent.ba: MCL 119.4; MCL 125.74; MCL 125.530; MCL 125.917; MCL 125.1513; MCL 125.1608; MCL 213.321; MCL 213.323; MCL 460.837; MCL 554.601b; MCL 554.632; MCL 570.523; MCL 600.5775
- `\A(?=[\s\S]*(?:\b(?:condemn(?:ed|ation)|vacat(?:e|ed|ion)|unfit for (?:human )?habitation|certificate of compliance)\b))(?=[\s\S]*(?:\brent(?:s|al|als)?\b))` / all / 31 / crent.and: MCL 117.5k; MCL 119.4; MCL 124.464; MCL 125.74; MCL 125.530; MCL 125.532; MCL 125.534; MCL 125.539; MCL 125.917; MCL 125.1513; MCL 125.1608; MCL 125.2023; MCL 125.2466; MCL 141.613; MCL 211.7cc; MCL 213.321; MCL 213.323; MCL 247.663a; MCL 259.116; MCL 330.1205; MCL 331.9; MCL 331.57; MCL 460.837; MCL 500.1283; MCL 554.601b; MCL 554.632; MCL 559.204b; MCL 559.222b; MCL 570.523; MCL 600.5775; ... (1 more in the battery log)
- `\bduty to pay rent\b` / all / 1 / duty: MCL 125.530
- `(?:\bescrow(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\brent(?:s|al|als)?\b)` / all / 5 / escrow.ab: MCL 125.530; MCL 125.698; MCL 125.2706; MCL 445.1454; MCL 487.3410
- `(?:\brent(?:s|al|als)?\b)[\s\S]{0,1200}?(?:\bescrow(?:s|ed|ing)?\b)` / all / 9 / escrow.ba: MCL 125.530; MCL 125.698; MCL 125.2705; MCL 125.2706; MCL 324.20101a; MCL 324.64107; MCL 331.9; MCL 451.422; MCL 600.5720
- `\A(?=[\s\S]*(?:\bescrow(?:s|ed|ing)?\b))(?=[\s\S]*(?:\brent(?:s|al|als)?\b))` / all / 15 / escrow.and: MCL 125.530; MCL 125.698; MCL 125.1422; MCL 125.2705; MCL 125.2706; MCL 205.27a; MCL 324.20101a; MCL 324.64107; MCL 331.9; MCL 445.1454; MCL 451.422; MCL 487.3410; MCL 493.133; MCL 600.5720; MCL 700.7817
- positive crent @ MCL 125.530: passed ("The duty to pay rent in accordance with the terms of any lease or agreement or under the provisions of any statute shall")
- positive duty @ MCL 125.530: passed ("duty to pay rent")
- positive escrow @ MCL 125.530: passed ("Rents due for the period during which rent is suspended shall be paid into an escrow account")

**MIG-B5-001** (superseded by MIG-B5-002), topic `heating`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:56:00. heat supply and minimum temperature for rentals; whole corpus
- summary: Battery MIG-B5-001 (heattn.ab 14; heattn.ba 10; heattn.and 26; temp.ab 0; temp.ba 0; temp.and 0; heatseason 12; degf 45 units hit when run; 3 of 4 positives passed; controls passed (nonsense 0, must-hit 147)) positive heatseason@MCL 125.1513f recorded as failed
- `(?:\bheat(?:ing|ed)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|rental units?)\b)` / all / 14 / heattn.ab: MCL 18.1713; MCL 125.402; MCL 125.1411; MCL 125.1502a; MCL 206.527a; MCL 339.5801; MCL 339.5819; MCL 400.57i; MCL 400.1210; MCL 554.633; MCL 600.2918; 2026-PA-0103; Mich Admin Code R 460.102a; Mich Admin Code R 460.138
- `(?:\b(?:tenants?|lessees?|occupants?|rental units?)\b)[\s\S]{0,1200}?(?:\bheat(?:ing|ed)?\b)` / all / 10 / heattn.ba: MCL 125.1411; MCL 125.1504d; MCL 125.2307; MCL 206.527a; MCL 339.5801; MCL 400.1210; MCL 460.501; MCL 554.633; MCL 600.2918; 2026-PA-0103
- `\A(?=[\s\S]*(?:\bheat(?:ing|ed)?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|rental units?)\b))` / all / 26 / heattn.and: MCL 18.1713; MCL 125.402; MCL 125.1411; MCL 125.1502a; MCL 125.1504d; MCL 125.2307; MCL 125.2652; MCL 206.527a; MCL 211.9; MCL 259.85; MCL 324.21101; MCL 324.21303; MCL 339.5801; MCL 339.5819; MCL 400.57i; MCL 400.1161; MCL 400.1210; MCL 440.9102; MCL 460.9q; MCL 460.501; MCL 554.633; MCL 600.2918; 2026-PA-0103; Mich Admin Code R 460.102a; Mich Admin Code R 460.123; Mich Admin Code R 460.138
- `(?:\b(?:minimum|indoor|interior|room)\s+temperatures?\b)[\s\S]{0,1200}?(?:\b(?:dwellings?|tenants?|lessees?|occupants?|apartments?|rental units?)\b)` / all / 0 / temp.ab
- `(?:\b(?:dwellings?|tenants?|lessees?|occupants?|apartments?|rental units?)\b)[\s\S]{0,1200}?(?:\b(?:minimum|indoor|interior|room)\s+temperatures?\b)` / all / 0 / temp.ba
- `\A(?=[\s\S]*(?:\b(?:minimum|indoor|interior|room)\s+temperatures?\b))(?=[\s\S]*(?:\b(?:dwellings?|tenants?|lessees?|occupants?|apartments?|rental units?)\b))` / all / 0 / temp.and
- `\bheating season\b` / all / 12 / heatseason: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.102a; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.123; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `\bdegrees fahrenheit\b` / all / 45 / degf: MCL 29.1; MCL 29.5n; MCL 125.402; MCL 125.552; MCL 125.555; MCL 205.54g; MCL 205.94d; MCL 207.1004; MCL 207.1151; MCL 207.1154; MCL 257.722a; MCL 259.784; MCL 286.373; MCL 286.374a; MCL 287.671; MCL 287.703; MCL 288.520; MCL 288.532; MCL 288.539; MCL 288.690; MCL 288.698; MCL 288.699; MCL 288.701; MCL 288.703; MCL 289.6140; MCL 289.7101; MCL 289.7114; MCL 290.352; MCL 290.645; MCL 324.5524; ... (15 more in the battery log)
- positive heattn @ MCL 600.2918: passed ("including heat, running water, hot water")
- positive temp @ SYNTH: passed ("The landlord shall maintain a minimum temperature of 68 degrees in each dwelling unit occupied by a tenant.")
- positive heatseason @ MCL 125.1513f: FAILED ("heating season")
- positive degf @ MCL 339.5915: passed ("250 degrees Fahrenheit")

**MIG-B5-002** (cited) (supersedes MIG-B5-001), topic `heating`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:56:45. heat supply and minimum temperature for rentals; whole corpus
- summary: Battery MIG-B5-002 (heattn.ab 14; heattn.ba 10; heattn.and 26; temp.ab 0; temp.ba 0; temp.and 0; heatseason 12; degf 45 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bheat(?:ing|ed)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|rental units?)\b)` / all / 14 / heattn.ab: MCL 18.1713; MCL 125.402; MCL 125.1411; MCL 125.1502a; MCL 206.527a; MCL 339.5801; MCL 339.5819; MCL 400.57i; MCL 400.1210; MCL 554.633; MCL 600.2918; 2026-PA-0103; Mich Admin Code R 460.102a; Mich Admin Code R 460.138
- `(?:\b(?:tenants?|lessees?|occupants?|rental units?)\b)[\s\S]{0,1200}?(?:\bheat(?:ing|ed)?\b)` / all / 10 / heattn.ba: MCL 125.1411; MCL 125.1504d; MCL 125.2307; MCL 206.527a; MCL 339.5801; MCL 400.1210; MCL 460.501; MCL 554.633; MCL 600.2918; 2026-PA-0103
- `\A(?=[\s\S]*(?:\bheat(?:ing|ed)?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|rental units?)\b))` / all / 26 / heattn.and: MCL 18.1713; MCL 125.402; MCL 125.1411; MCL 125.1502a; MCL 125.1504d; MCL 125.2307; MCL 125.2652; MCL 206.527a; MCL 211.9; MCL 259.85; MCL 324.21101; MCL 324.21303; MCL 339.5801; MCL 339.5819; MCL 400.57i; MCL 400.1161; MCL 400.1210; MCL 440.9102; MCL 460.9q; MCL 460.501; MCL 554.633; MCL 600.2918; 2026-PA-0103; Mich Admin Code R 460.102a; Mich Admin Code R 460.123; Mich Admin Code R 460.138
- `(?:\b(?:minimum|indoor|interior|room)\s+temperatures?\b)[\s\S]{0,1200}?(?:\b(?:dwellings?|tenants?|lessees?|occupants?|apartments?|rental units?)\b)` / all / 0 / temp.ab
- `(?:\b(?:dwellings?|tenants?|lessees?|occupants?|apartments?|rental units?)\b)[\s\S]{0,1200}?(?:\b(?:minimum|indoor|interior|room)\s+temperatures?\b)` / all / 0 / temp.ba
- `\A(?=[\s\S]*(?:\b(?:minimum|indoor|interior|room)\s+temperatures?\b))(?=[\s\S]*(?:\b(?:dwellings?|tenants?|lessees?|occupants?|apartments?|rental units?)\b))` / all / 0 / temp.and
- `\bheating season\b` / all / 12 / heatseason: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.102a; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.123; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `\bdegrees fahrenheit\b` / all / 45 / degf: MCL 29.1; MCL 29.5n; MCL 125.402; MCL 125.552; MCL 125.555; MCL 205.54g; MCL 205.94d; MCL 207.1004; MCL 207.1151; MCL 207.1154; MCL 257.722a; MCL 259.784; MCL 286.373; MCL 286.374a; MCL 287.671; MCL 287.703; MCL 288.520; MCL 288.532; MCL 288.539; MCL 288.690; MCL 288.698; MCL 288.699; MCL 288.701; MCL 288.703; MCL 289.6140; MCL 289.7101; MCL 289.7114; MCL 290.352; MCL 290.645; MCL 324.5524; ... (15 more in the battery log)
- positive heattn @ MCL 600.2918: passed ("including heat, running water, hot water")
- positive temp @ SYNTH: passed ("The landlord shall maintain a minimum temperature of 68 degrees in each dwelling unit occupied by a tenant.")
- positive heatseason @ MCL 460.9q: passed ("heating season")
- positive degf @ MCL 339.5915: passed ("250 degrees Fahrenheit")

**MIG-B5-003** (superseded by MIG-B5-004), topic `stove-refrigerator`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:59:17. landlord duty to supply stove or refrigerator; whole corpus
- summary: Battery MIG-B5-003 (appl.ab 16; appl.ba 9; appl.and 30; fridge 18; kitchen.ab 3; kitchen.ba 1; kitchen.and 8 units hit when run; 2 of 3 positives passed; controls passed (nonsense 0, must-hit 147)) positive kitchen@MCL 125.469 recorded as failed
- `(?:\b(?:stoves?|ranges?|refrigerators?|cooking (?:appliances?|facilities|equipment))\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|dwellings?|rental units?|apartments?|landlords?|lessors?)\b)` / all / 16 / appl.ab: MCL 70.6; MCL 109.6; MCL 125.1513c; MCL 125.3807; MCL 125.4207; MCL 125.4307; MCL 125.4407; MCL 125.4611; MCL 125.4710; MCL 125.4810; MCL 141.872; MCL 141.882; MCL 141.1322; MCL 324.40111; MCL 339.2517; MCL 460.6l
- `(?:\b(?:tenants?|lessees?|dwellings?|rental units?|apartments?|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:stoves?|ranges?|refrigerators?|cooking (?:appliances?|facilities|equipment))\b)` / all / 9 / appl.ba: MCL 18.1221a; MCL 70.6; MCL 125.4207; MCL 125.4307; MCL 125.4611; MCL 125.4810; MCL 339.2517; MCL 460.6l; Mich Admin Code R 408.30547d
- `\A(?=[\s\S]*(?:\b(?:stoves?|ranges?|refrigerators?|cooking (?:appliances?|facilities|equipment))\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|dwellings?|rental units?|apartments?|landlords?|lessors?)\b))` / all / 30 / appl.and: MCL 18.1221a; MCL 70.6; MCL 109.6; MCL 125.74; MCL 125.1513c; MCL 125.1608; MCL 125.3807; MCL 125.4207; MCL 125.4307; MCL 125.4407; MCL 125.4611; MCL 125.4710; MCL 125.4810; MCL 141.872; MCL 141.882; MCL 141.892; MCL 141.1322; MCL 141.1432; MCL 324.20101; MCL 324.21303; MCL 324.40111; MCL 324.63545; MCL 333.29103; MCL 339.2517; MCL 418.155; MCL 421.43; MCL 445.1679; MCL 460.6l; Mich Admin Code R 408.30505; Mich Admin Code R 408.30547d
- `\brefrigerators?\b` / all / 18 / fridge: MCL 125.1459; MCL 206.902; MCL 207.4; MCL 207.5; MCL 207.9; MCL 207.10; MCL 207.13a; MCL 207.14; MCL 207.21; MCL 289.1109; MCL 324.17201; MCL 339.5803; MCL 429.40; MCL 436.1609; MCL 445.832; MCL 445.1102; MCL 565.957; MCL 750.493d
- `(?:\bkitchens?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?)\b)` / all / 3 / kitchen.ab: MCL 259.109; MCL 288.473; MCL 288.573
- `(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\bkitchens?\b)` / all / 1 / kitchen.ba: MCL 211.7cc
- `\A(?=[\s\S]*(?:\bkitchens?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?)\b))` / all / 8 / kitchen.and: MCL 37.1506a; MCL 211.7cc; MCL 259.109; MCL 288.473; MCL 288.573; MCL 289.1105; MCL 289.1107; MCL 289.1107.amended
- positive appl @ SYNTH: passed ("The landlord shall provide a stove and a refrigerator in good working order in each dwelling unit.")
- positive fridge @ MCL 125.1459: passed ("refrigerator")
- positive kitchen @ MCL 125.469: FAILED ("kitchen")

**MIG-B5-004** (cited) (supersedes MIG-B5-003), topic `stove-refrigerator`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 19:59:57. landlord duty to supply stove or refrigerator; whole corpus
- summary: Battery MIG-B5-004 (appl.ab 18; appl.ba 10; appl.and 32; fridge 18; kitchen.ab 7; kitchen.ba 6; kitchen.and 13 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:stoves?|ranges?|refrigerators?|cooking (?:appliances?|facilities|equipment|accommodations?))\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|dwellings?|rental units?|apartments?|landlords?|lessors?)\b)` / all / 18 / appl.ab: MCL 70.6; MCL 109.6; MCL 125.402; MCL 125.469; MCL 125.1513c; MCL 125.3807; MCL 125.4207; MCL 125.4307; MCL 125.4407; MCL 125.4611; MCL 125.4710; MCL 125.4810; MCL 141.872; MCL 141.882; MCL 141.1322; MCL 324.40111; MCL 339.2517; MCL 460.6l
- `(?:\b(?:tenants?|lessees?|dwellings?|rental units?|apartments?|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:stoves?|ranges?|refrigerators?|cooking (?:appliances?|facilities|equipment|accommodations?))\b)` / all / 10 / appl.ba: MCL 18.1221a; MCL 70.6; MCL 125.402; MCL 125.4207; MCL 125.4307; MCL 125.4611; MCL 125.4810; MCL 339.2517; MCL 460.6l; Mich Admin Code R 408.30547d
- `\A(?=[\s\S]*(?:\b(?:stoves?|ranges?|refrigerators?|cooking (?:appliances?|facilities|equipment|accommodations?))\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|dwellings?|rental units?|apartments?|landlords?|lessors?)\b))` / all / 32 / appl.and: MCL 18.1221a; MCL 70.6; MCL 109.6; MCL 125.74; MCL 125.402; MCL 125.469; MCL 125.1513c; MCL 125.1608; MCL 125.3807; MCL 125.4207; MCL 125.4307; MCL 125.4407; MCL 125.4611; MCL 125.4710; MCL 125.4810; MCL 141.872; MCL 141.882; MCL 141.892; MCL 141.1322; MCL 141.1432; MCL 324.20101; MCL 324.21303; MCL 324.40111; MCL 324.63545; MCL 333.29103; MCL 339.2517; MCL 418.155; MCL 421.43; MCL 445.1679; MCL 460.6l; ... (2 more in the battery log)
- `\brefrigerators?\b` / all / 18 / fridge: MCL 125.1459; MCL 206.902; MCL 207.4; MCL 207.5; MCL 207.9; MCL 207.10; MCL 207.13a; MCL 207.14; MCL 207.21; MCL 289.1109; MCL 324.17201; MCL 339.5803; MCL 429.40; MCL 436.1609; MCL 445.832; MCL 445.1102; MCL 565.957; MCL 750.493d
- `(?:\bkitchens?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?|dwellings?|famil(?:y|ies))\b)` / all / 7 / kitchen.ab: MCL 37.1506a; MCL 125.402; MCL 125.469; MCL 259.109; MCL 288.473; MCL 288.573; MCL 460.6l
- `(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?|dwellings?|famil(?:y|ies))\b)[\s\S]{0,1200}?(?:\bkitchens?\b)` / all / 6 / kitchen.ba: MCL 37.1506a; MCL 125.402; MCL 125.469; MCL 211.7cc; MCL 333.5458; MCL 460.6l
- `\A(?=[\s\S]*(?:\bkitchens?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?|dwellings?|famil(?:y|ies))\b))` / all / 13 / kitchen.and: MCL 37.1506a; MCL 125.402; MCL 125.469; MCL 211.7cc; MCL 259.109; MCL 288.473; MCL 288.573; MCL 289.1105; MCL 289.1107; MCL 289.1107.amended; MCL 333.5458; MCL 400.117a; MCL 460.6l
- positive appl @ SYNTH: passed ("The landlord shall provide a stove and a refrigerator in good working order in each dwelling unit.")
- positive fridge @ MCL 125.1459: passed ("refrigerator")
- positive kitchen @ MCL 125.469: passed ("kitchen")

**MIG-B5-005** (cited), topic `appliances-excluded`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:01:53. appliances excluded from a lease; whole corpus
- summary: Battery MIG-B5-005 (appltn.ab 5; appltn.ba 2; appltn.and 7; applx.ab 21; applx.ba 13; applx.and 59; appl 111 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bappliances?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b)` / all / 5 / appltn.ab: MCL 259.6; MCL 440.2909; MCL 554.608; MCL 570.251; Mich Admin Code R 460.138
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b)[\s\S]{0,1200}?(?:\bappliances?\b)` / all / 2 / appltn.ba: MCL 440.2909; MCL 554.608
- `\A(?=[\s\S]*(?:\bappliances?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b))` / all / 7 / appltn.and: MCL 259.6; MCL 440.2909; MCL 462.7; MCL 554.608; MCL 570.251; MCL 750.282; Mich Admin Code R 460.138
- `(?:\b(?:appliances?|fixtures?|furnishings?|furniture)\b)[\s\S]{0,1200}?(?:\b(?:exclud(?:e|es|ed|ing)|not (?:supplied|provided|included))\b)` / all / 21 / applx.ab: MCL 18.1238; MCL 37.2502; MCL 125.4507; MCL 141.872; MCL 141.882; MCL 141.892; MCL 141.1322; MCL 141.1432; MCL 141.1442; MCL 205.54y; MCL 207.631; MCL 211.34d; MCL 333.7306; MCL 380.1211; MCL 440.2803; MCL 500.614; MCL 554.601c; MCL 700.2404; MCL 700.2519; MCL 767.19g; MCL 780.781
- `(?:\b(?:exclud(?:e|es|ed|ing)|not (?:supplied|provided|included))\b)[\s\S]{0,1200}?(?:\b(?:appliances?|fixtures?|furnishings?|furniture)\b)` / all / 13 / applx.ba: MCL 46.301; MCL 205.54y; MCL 205.93a; MCL 211.9b; MCL 211.27; MCL 211.34d; MCL 259.6; MCL 325.1002; MCL 500.614; MCL 500.2601; MCL 500.4061; MCL 600.5451; MCL 600.6023
- `\A(?=[\s\S]*(?:\b(?:appliances?|fixtures?|furnishings?|furniture)\b))(?=[\s\S]*(?:\b(?:exclud(?:e|es|ed|ing)|not (?:supplied|provided|included))\b))` / all / 59 / applx.and: MCL 18.1238; MCL 30.261; MCL 37.2502; MCL 46.301; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 125.4507; MCL 125.4603; MCL 125.4703; MCL 125.4803; MCL 141.872; MCL 141.882; MCL 141.892; MCL 141.1322; MCL 141.1432; MCL 141.1442; MCL 141.1552; MCL 205.51; MCL 205.54y; MCL 205.92; MCL 205.93a; MCL 205.93b; MCL 206.723; MCL 207.552; MCL 207.623; MCL 207.631; MCL 211.9; MCL 211.9b; MCL 211.27; ... (29 more in the battery log)
- `\bappliances?\b` / all / 111 / appl: MCL 16.735; MCL 18.1713; MCL 18.1715; MCL 19.142; MCL 30.261; MCL 42.10; MCL 120.14; MCL 120.102; MCL 120.153; MCL 125.472; MCL 125.492; MCL 125.992; MCL 125.1504f; MCL 125.1513a; MCL 125.2004; MCL 125.2325; MCL 205.54gg; MCL 205.94gg; MCL 205.315; MCL 206.902; MCL 224.10; MCL 247.659d; MCL 256.542; MCL 257.38a; MCL 259.6; MCL 290.602; MCL 324.1602; MCL 324.3701; MCL 324.17101; MCL 324.17201; ... (81 more in the battery log)
- positive appltn @ MCL 554.608: passed ("appliances, windows, furniture")
- positive applx @ SYNTH: passed ("A rental agreement may exclude an appliance from the premises if the lease lists it as not supplied by the landlord.")
- positive appl @ MCL 554.608: passed ("appliances")

**MIG-B5-006** (cited), topic `furnishings-included`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:03:15. furnished rentals and furniture deposits; whole corpus
- summary: Battery MIG-B5-006 (furn.ab 28; furn.ba 32; furn.and 61; furnunit 8; furndep 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:furnished|furnishings?|furniture)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b)` / all / 28 / furn.ab: MCL 37.2502; MCL 141.121; MCL 205.217; MCL 257.251; MCL 257.724; MCL 324.61503a; MCL 400.14; MCL 427.201; MCL 427.202; MCL 427.203; MCL 440.2803; MCL 445.852; MCL 554.601c; MCL 554.608; MCL 570.251; MCL 570.253; MCL 570.254; MCL 570.255; MCL 570.1104; MCL 570.1107; MCL 570.1108; MCL 570.1108a; MCL 570.1109; MCL 570.1110; MCL 570.1111; MCL 570.1113; MCL 570.1115; MCL 750.282 [heading-only, read: MCL 257.232a; MCL 440.2861]
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b)[\s\S]{0,1200}?(?:\b(?:furnished|furnishings?|furniture)\b)` / all / 32 / furn.ba: MCL 37.2502; MCL 125.1444; MCL 125.1608; MCL 141.121; MCL 207.706; MCL 257.233a; MCL 257.251; MCL 259.109; MCL 324.44501; MCL 324.61503a; MCL 339.2517; MCL 427.201; MCL 427.203; MCL 440.9102; MCL 450.4502; MCL 460.501; MCL 554.601c; MCL 554.608; MCL 570.251; MCL 570.253; MCL 570.254; MCL 570.255; MCL 570.1104; MCL 570.1107; MCL 570.1108; MCL 570.1108a; MCL 570.1109; MCL 570.1110; MCL 570.1111; MCL 570.1113; ... (2 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:furnished|furnishings?|furniture)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b))` / all / 61 / furn.and: MCL 15.243; MCL 28.425b; MCL 37.2502; MCL 125.1411; MCL 125.1444; MCL 125.1608; MCL 125.2007; MCL 125.4402; MCL 141.121; MCL 141.1369; MCL 205.217; MCL 207.552; MCL 207.706; MCL 211.9; MCL 211.34c; MCL 257.217; MCL 257.217c; MCL 257.233a; MCL 257.251; MCL 257.724; MCL 257.801; MCL 259.109; MCL 259.117; MCL 259.144; MCL 324.44501; MCL 324.61503a; MCL 333.12601; MCL 339.2512d; MCL 339.2517; MCL 400.14; ... (31 more in the battery log) [heading-only, read: MCL 257.232a; MCL 440.2861]
- `\bfurnished (?:apartments?|units?|dwellings?|rooms?|rental units?|premises|houses?)\b` / all / 8 / furnunit: MCL 125.402; MCL 427.201; MCL 427.202; MCL 427.203; MCL 427.204; MCL 427.205; MCL 427.207; MCL 462.261
- `\bfurniture deposits?\b` / all / 0 / furndep
- positive furn @ MCL 554.608: passed ("furniture, walls, closets")
- positive furnunit @ MCL 125.402: passed ("furnished room")
- positive furndep @ SYNTH: passed ("The landlord may require a furniture deposit for a furnished rental unit.")

**MIG-B5-007** (cited), topic `maintenance-duty-shift`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:05:03. shifting repair or maintenance duties to a tenant; whole corpus
- summary: Battery MIG-B5-007 (tperf.ab 3; tperf.ba 4; tperf.and 7; modcov.ab 36; modcov.ba 42; modcov.and 74; inlieu 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:tenants?|lessees?|occupants?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:perform|performs|performing|assume|assumes|assumed|undertake|undertakes|make|makes)\s+(?:the\s+|all\s+|any\s+|specified\s+|certain\s+)?(?:repairs?|maintenance)\b)` / all / 3 / tperf.ab: MCL 125.530; MCL 125.534; MCL 445.1564
- `(?:\b(?:perform|performs|performing|assume|assumes|assumed|undertake|undertakes|make|makes)\s+(?:the\s+|all\s+|any\s+|specified\s+|certain\s+)?(?:repairs?|maintenance)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|renters?)\b)` / all / 4 / tperf.ba: MCL 125.530; MCL 125.531; MCL 125.534; MCL 324.81101
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|renters?)\b))(?=[\s\S]*(?:\b(?:perform|performs|performing|assume|assumes|assumed|undertake|undertakes|make|makes)\s+(?:the\s+|all\s+|any\s+|specified\s+|certain\s+)?(?:repairs?|maintenance)\b))` / all / 7 / tperf.and: MCL 125.530; MCL 125.531; MCL 125.534; MCL 257.1403; MCL 324.81101; MCL 399.205; MCL 445.1564
- `(?:\bmay (?:modify|waive|assign|shift)\b)[\s\S]{0,1200}?(?:\b(?:lease|license|rental agreement|tenancy)\b)` / all / 36 / modcov.ab: MCL 18.354; MCL 207.215; MCL 208.1437; MCL 257.226; MCL 257.309; MCL 257.312f; MCL 257.319; MCL 286.211; MCL 289.4113; MCL 324.11123; MCL 324.11709; MCL 324.79108; MCL 333.7303; MCL 333.16205; MCL 333.20155; MCL 339.204; MCL 339.1806; MCL 432.104a; MCL 432.206; MCL 432.207a; MCL 432.208; MCL 436.1501; MCL 436.1503; MCL 436.1531; MCL 436.1533; MCL 445.1574b; MCL 500.1204; MCL 500.1214; MCL 500.1224; MCL 500.1234; ... (6 more in the battery log)
- `(?:\b(?:lease|license|rental agreement|tenancy)\b)[\s\S]{0,1200}?(?:\bmay (?:modify|waive|assign|shift)\b)` / all / 42 / modcov.ba: MCL 3.751; MCL 125.2581; MCL 125.2621; MCL 207.215; MCL 207.1086; MCL 207.1089; MCL 207.1092; MCL 207.1093; MCL 256.653; MCL 257.309; MCL 257.312f; MCL 257.319; MCL 285.65; MCL 286.211; MCL 289.4113; MCL 324.11123; MCL 324.79108; MCL 333.6238; MCL 333.7303; MCL 333.13713; MCL 333.16188.added; MCL 333.16205; MCL 339.204; MCL 339.1305; MCL 339.1806; MCL 432.104a; MCL 432.206; MCL 432.207a; MCL 432.208; MCL 436.1501; ... (12 more in the battery log)
- `\A(?=[\s\S]*(?:\bmay (?:modify|waive|assign|shift)\b))(?=[\s\S]*(?:\b(?:lease|license|rental agreement|tenancy)\b))` / all / 74 / modcov.and: MCL 3.751; MCL 18.354; MCL 30.261; MCL 125.1422e; MCL 125.2581; MCL 125.2621; MCL 125.2688d; MCL 206.266a; MCL 206.676; MCL 207.215; MCL 207.1083; MCL 207.1086; MCL 207.1089; MCL 207.1092; MCL 207.1093; MCL 208.1435; MCL 208.1437; MCL 211.7cc; MCL 211.1057; MCL 211.1077; MCL 256.653; MCL 257.217c; MCL 257.226; MCL 257.309; MCL 257.312f; MCL 257.319; MCL 285.65; MCL 286.211; MCL 287.707; MCL 289.4113; ... (44 more in the battery log)
- `\bin lieu of rent\b` / all / 1 / inlieu: MCL 141.621
- positive tperf @ SYNTH: passed ("A tenant may agree in writing to perform specified repairs or maintenance.")
- positive modcov @ MCL 554.139: passed ("The parties to the lease or license may modify the obligations imposed by this section")
- positive inlieu @ SYNTH: passed ("The lessee may perform specified repairs in lieu of rent.")

**MIG-B5-008** (cited), topic `repair-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:06:26. form of a tenant repair notice; whole corpus
- summary: Battery MIG-B5-008 (repnot.ab 22; repnot.ba 17; repnot.and 48; ownnot.ab 6; ownnot.ba 4; ownnot.and 15; repreq 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:written|oral|verbal|actual|telephone|electronic) (?:notice|request)s?\b)[\s\S]{0,1200}?(?:\b(?:repairs?|defects?|disrepair)\b)` / all / 22 / repnot.ab: MCL 125.994; MCL 128.102; MCL 257.217c; MCL 257.2254; MCL 290.609b; MCL 324.31521; MCL 333.12909; MCL 399.158; MCL 400.14; MCL 445.1577; MCL 445.1939; MCL 460.1313; MCL 462.325; MCL 500.2117; MCL 500.2227; MCL 500.2845; MCL 500.2930a; MCL 500.7306; MCL 554.963; MCL 570.102; MCL 570.305; MCL 600.3238
- `(?:\b(?:repairs?|defects?|disrepair)\b)[\s\S]{0,1200}?(?:\b(?:written|oral|verbal|actual|telephone|electronic) (?:notice|request)s?\b)` / all / 17 / repnot.ba: MCL 125.994; MCL 128.102; MCL 211.78m; MCL 257.251; MCL 257.2254; MCL 324.50143; MCL 445.836; MCL 445.1574; MCL 445.1577; MCL 460.1313; MCL 462.325; MCL 500.2111; MCL 570.102; MCL 570.302; MCL 570.305; MCL 570.374; MCL 600.5714
- `\A(?=[\s\S]*(?:\b(?:written|oral|verbal|actual|telephone|electronic) (?:notice|request)s?\b))(?=[\s\S]*(?:\b(?:repairs?|defects?|disrepair)\b))` / all / 48 / repnot.and: MCL 125.994; MCL 125.1608; MCL 128.102; MCL 211.78g; MCL 211.78m; MCL 252.318; MCL 257.217c; MCL 257.251; MCL 257.2254; MCL 290.609b; MCL 324.30105; MCL 324.31521; MCL 324.36111a; MCL 324.50143; MCL 324.81131; MCL 333.12909; MCL 333.16189; MCL 380.12b; MCL 399.158; MCL 400.14; MCL 421.43; MCL 445.836; MCL 445.1574; MCL 445.1577; MCL 445.1939; MCL 460.10ee; MCL 460.1313; MCL 462.319; MCL 462.325; MCL 487.3501; ... (18 more in the battery log)
- `(?:\bnotice to the (?:owner|landlord|lessor)\b)[\s\S]{0,1200}?(?:\b(?:conditions?|repairs?|violations?|defects?)\b)` / all / 6 / ownnot.ab: MCL 125.536; MCL 125.541; MCL 125.917; MCL 324.21316a; MCL 324.21548; MCL 554.636
- `(?:\b(?:conditions?|repairs?|violations?|defects?)\b)[\s\S]{0,1200}?(?:\bnotice to the (?:owner|landlord|lessor)\b)` / all / 4 / ownnot.ba: MCL 125.536; MCL 324.21316a; MCL 554.601a; MCL 554.636
- `\A(?=[\s\S]*(?:\bnotice to the (?:owner|landlord|lessor)\b))(?=[\s\S]*(?:\b(?:conditions?|repairs?|violations?|defects?)\b))` / all / 15 / ownnot.and: MCL 124.759; MCL 125.536; MCL 125.541; MCL 125.917; MCL 213.54; MCL 224.18; MCL 286.220; MCL 324.11551; MCL 324.21316a; MCL 324.21548; MCL 445.72; MCL 445.79b; MCL 500.561; MCL 554.601a; MCL 554.636
- `\b(?:repair|maintenance) requests?\b` / all / 0 / repreq
- positive repnot @ SYNTH: passed ("The tenant shall give the landlord written notice of a defect requiring repair.")
- positive ownnot @ MCL 125.536: passed ("after notice to the owner and a failure thereafter to make the necessary corrections")
- positive repreq @ SYNTH: passed ("A tenant may submit a repair request to the landlord by telephone.")

**MIG-B5-009** (cited), topic `repair-cost-termination`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:08:19. landlord termination because repair cost is excessive; whole corpus
- summary: Battery MIG-B5-009 (costterm.ab 6; costterm.ba 8; costterm.and 15; costval.ab 18; costval.ba 11; costval.and 22; uneco 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:costs? of (?:the )?repairs?|repair costs?|costs? to repair)\b)[\s\S]{0,1200}?(?:\b(?:terminat(?:e|es|ed|ing|ion)|cancel(?:s|ed|led|ing|lation)?|quit|surrender|vacate)\b)` / all / 6 / costterm.ab: MCL 257.217c; MCL 445.889; MCL 500.2103; MCL 500.2104; MCL 554.609; 2026-PA-0102
- `(?:\b(?:terminat(?:e|es|ed|ing|ion)|cancel(?:s|ed|led|ing|lation)?|quit|surrender|vacate)\b)[\s\S]{0,1200}?(?:\b(?:costs? of (?:the )?repairs?|repair costs?|costs? to repair)\b)` / all / 8 / costterm.ba: MCL 257.217c; MCL 257.1307; MCL 324.50143; MCL 440.2909; MCL 440.2910; MCL 500.2103; MCL 554.609; 2026-PA-0102
- `\A(?=[\s\S]*(?:\b(?:costs? of (?:the )?repairs?|repair costs?|costs? to repair)\b))(?=[\s\S]*(?:\b(?:terminat(?:e|es|ed|ing|ion)|cancel(?:s|ed|led|ing|lation)?|quit|surrender|vacate)\b))` / all / 15 / costterm.and: MCL 257.217c; MCL 257.1307; MCL 257.1403; MCL 324.50143; MCL 440.2909; MCL 440.2910; MCL 445.889; MCL 460.9d; MCL 460.1313; MCL 500.2103; MCL 500.2104; MCL 500.2117; MCL 500.6868; MCL 554.609; 2026-PA-0102
- `(?:\b(?:costs? of (?:the )?repairs?|repair costs?|costs? to repair)\b)[\s\S]{0,1200}?(?:\b(?:value|worth)\b)` / all / 18 / costval.ab: MCL 125.534; MCL 125.541; MCL 125.2348; MCL 257.12a; MCL 257.57e; MCL 257.217c; MCL 257.1403; MCL 440.2909; MCL 440.2910; MCL 440.9335; MCL 440.9604; MCL 500.1619; MCL 500.2103; MCL 500.2104; MCL 500.2117; MCL 500.2924; MCL 500.2930a; MCL 500.3121
- `(?:\b(?:value|worth)\b)[\s\S]{0,1200}?(?:\b(?:costs? of (?:the )?repairs?|repair costs?|costs? to repair)\b)` / all / 11 / costval.ba: MCL 125.541; MCL 257.12a; MCL 257.57e; MCL 257.217c; MCL 500.1609; MCL 500.1619; MCL 500.2103; MCL 500.2117; MCL 500.2924; MCL 500.2930a; MCL 500.6868
- `\A(?=[\s\S]*(?:\b(?:costs? of (?:the )?repairs?|repair costs?|costs? to repair)\b))(?=[\s\S]*(?:\b(?:value|worth)\b))` / all / 22 / costval.and: MCL 125.534; MCL 125.541; MCL 125.2023; MCL 125.2348; MCL 257.12a; MCL 257.57e; MCL 257.217c; MCL 257.1403; MCL 440.2909; MCL 440.2910; MCL 440.9335; MCL 440.9604; MCL 500.1609; MCL 500.1619; MCL 500.2103; MCL 500.2104; MCL 500.2117; MCL 500.2901; MCL 500.2924; MCL 500.2930a; MCL 500.3121; MCL 500.6868
- `\buneconomic(?:al)?\b` / all / 2 / uneco: MCL 125.902; MCL 500.8146
- positive costterm @ SYNTH: passed ("If the cost of repairs would exceed half the value of the premises, the landlord may terminate the rental agreement.")
- positive costval @ MCL 125.534: passed ("cost of repair of the building or structure will be greater than the state equalized value")
- positive uneco @ MCL 125.902: passed ("uneconomic")

**MIG-B5-010** (superseded by MIG-B5-011), topic `repair-escrow-exemption-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:09:43. rent escrow exemptions and small-landlord notices; whole corpus
- summary: Battery MIG-B5-010 (escex.ab 1; escex.ba 2; escex.and 2; smallll.ab 1; smallll.ba 2; smallll.and 2; escacct 81 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:rent|rents|rental payments?)\b[\s\S]{0,200}?\bescrow\b|\bescrow\b[\s\S]{0,200}?\b(?:rent|rents|rental payments?)\b)[\s\S]{0,1200}?(?:\b(?:exempt(?:s|ed|ion|ions)?|does not apply|shall not apply)\b)` / all / 1 / escex.ab: MCL 125.530
- `(?:\b(?:exempt(?:s|ed|ion|ions)?|does not apply|shall not apply)\b)[\s\S]{0,1200}?(?:\b(?:rent|rents|rental payments?)\b[\s\S]{0,200}?\bescrow\b|\bescrow\b[\s\S]{0,200}?\b(?:rent|rents|rental payments?)\b)` / all / 2 / escex.ba: MCL 125.530; MCL 324.20101a
- `\A(?=[\s\S]*(?:\b(?:rent|rents|rental payments?)\b[\s\S]{0,200}?\bescrow\b|\bescrow\b[\s\S]{0,200}?\b(?:rent|rents|rental payments?)\b))(?=[\s\S]*(?:\b(?:exempt(?:s|ed|ion|ions)?|does not apply|shall not apply)\b))` / all / 2 / escex.and: MCL 125.530; MCL 324.20101a
- `(?:\b(?:landlords?|lessors?|owners?)\b)[\s\S]{0,1200}?(?:\b(?:3|three|4|four) or fewer (?:dwelling |rental |residential )?units\b)` / all / 1 / smallll.ab: MCL 333.5453
- `(?:\b(?:3|three|4|four) or fewer (?:dwelling |rental |residential )?units\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|owners?)\b)` / all / 2 / smallll.ba: MCL 333.5453; MCL 570.582
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?|owners?)\b))(?=[\s\S]*(?:\b(?:3|three|4|four) or fewer (?:dwelling |rental |residential )?units\b))` / all / 2 / smallll.and: MCL 333.5453; MCL 570.582
- `\bescrow accounts?\b` / all / 81 / escacct: MCL 38.103; MCL 117.36a; MCL 125.530; MCL 125.1422; MCL 125.2324; MCL 125.2705; MCL 125.2706; MCL 125.2727; MCL 125.2745; MCL 125.2765; MCL 141.120; MCL 141.120b; MCL 141.664a; MCL 168.794; MCL 168.797c; MCL 205.27a; MCL 205.30b; MCL 205.426c; MCL 205.426e; MCL 211.44; MCL 247.807a; MCL 285.75; MCL 290.655; MCL 324.11502; MCL 324.11503; MCL 324.11504; MCL 324.11508; MCL 324.11523; MCL 324.11523b; MCL 324.11525; ... (51 more in the battery log)
- positive escex @ MCL 125.530: passed ("Nor does this subsection apply where the owner establishes")
- positive smallll @ SYNTH: passed ("A landlord who owns 3 or fewer dwelling units is exempt from this section if the landlord gives the tenant written notic")
- positive escacct @ MCL 125.530: passed ("escrow account")

**MIG-B5-011** (cited) (supersedes MIG-B5-010), topic `repair-escrow-exemption-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:10:12. rent escrow exemptions and small-landlord notices; whole corpus
- summary: Battery MIG-B5-011 (escex.ab 1; escex.ba 2; escex.and 2; smallll.ab 3; smallll.ba 3; smallll.and 4; escacct 81 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:rent|rents|rental payments?)\b[\s\S]{0,200}?\bescrow(?:s|ed|ing)?\b|\bescrow(?:s|ed|ing)?\b[\s\S]{0,200}?\b(?:rent|rents|rental payments?)\b)[\s\S]{0,1200}?(?:\b(?:exempt(?:s|ed|ion|ions)?|does not apply|shall not apply)\b)` / all / 1 / escex.ab: MCL 125.530
- `(?:\b(?:exempt(?:s|ed|ion|ions)?|does not apply|shall not apply)\b)[\s\S]{0,1200}?(?:\b(?:rent|rents|rental payments?)\b[\s\S]{0,200}?\bescrow(?:s|ed|ing)?\b|\bescrow(?:s|ed|ing)?\b[\s\S]{0,200}?\b(?:rent|rents|rental payments?)\b)` / all / 2 / escex.ba: MCL 125.530; MCL 324.20101a
- `\A(?=[\s\S]*(?:\b(?:rent|rents|rental payments?)\b[\s\S]{0,200}?\bescrow(?:s|ed|ing)?\b|\bescrow(?:s|ed|ing)?\b[\s\S]{0,200}?\b(?:rent|rents|rental payments?)\b))(?=[\s\S]*(?:\b(?:exempt(?:s|ed|ion|ions)?|does not apply|shall not apply)\b))` / all / 2 / escex.and: MCL 125.530; MCL 324.20101a
- `(?:\b(?:landlords?|lessors?|owners?)\b)[\s\S]{0,1200}?(?:\b(?:(?:3|three|4|four) or fewer|fewer than (?:4|four|5|five)) (?:dwelling |rental |residential )?units\b)` / all / 3 / smallll.ab: MCL 37.2502; MCL 333.5453; MCL 554.601c
- `(?:\b(?:(?:3|three|4|four) or fewer|fewer than (?:4|four|5|five)) (?:dwelling |rental |residential )?units\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|owners?)\b)` / all / 3 / smallll.ba: MCL 37.2502; MCL 333.5453; MCL 570.582
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?|owners?)\b))(?=[\s\S]*(?:\b(?:(?:3|three|4|four) or fewer|fewer than (?:4|four|5|five)) (?:dwelling |rental |residential )?units\b))` / all / 4 / smallll.and: MCL 37.2502; MCL 333.5453; MCL 554.601c; MCL 570.582
- `\bescrow(?:ed)? accounts?\b` / all / 81 / escacct: MCL 38.103; MCL 117.36a; MCL 125.530; MCL 125.1422; MCL 125.2324; MCL 125.2705; MCL 125.2706; MCL 125.2727; MCL 125.2745; MCL 125.2765; MCL 141.120; MCL 141.120b; MCL 141.664a; MCL 168.794; MCL 168.797c; MCL 205.27a; MCL 205.30b; MCL 205.426c; MCL 205.426e; MCL 211.44; MCL 247.807a; MCL 285.75; MCL 290.655; MCL 324.11502; MCL 324.11503; MCL 324.11504; MCL 324.11508; MCL 324.11523; MCL 324.11523b; MCL 324.11525; ... (51 more in the battery log)
- positive escex @ MCL 125.530: passed ("Nor does this subsection apply where the owner establishes")
- positive smallll @ SYNTH: passed ("A landlord who owns 3 or fewer dwelling units is exempt from this section if the landlord gives the tenant written notic")
- positive escacct @ MCL 125.530: passed ("escrow account")

**MIG-B5-012** (cited), topic `designated-repairer`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:11:51. designated or approved repairers and tenant repair-and-deduct; whole corpus
- summary: Battery MIG-B5-012 (desig.ab 181; desig.ba 178; desig.and 417; apprep 0; deduct.ab 3; deduct.ba 1; deduct.and 3 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bdesignat(?:e|es|ed|ing|ion)\b)[\s\S]{0,1200}?(?:\b(?:repairs?|repairers?|contractors?|maintenance|responsible persons?)\b)` / all / 181 / desig.ab: MCL 12.183; MCL 18.41; MCL 18.441; MCL 18.1213; MCL 18.1261; MCL 18.1287; MCL 35.1082; MCL 38.17g; MCL 38.2807; MCL 41.288a; MCL 45.85; MCL 46.173; MCL 67.23; MCL 71.12; MCL 117.3; MCL 117.4q; MCL 120.14; MCL 120.51; MCL 123.958a; MCL 123.1271; MCL 124.114; MCL 124.284; MCL 124.548; MCL 125.981; MCL 125.1411; MCL 125.1510; MCL 125.1561; MCL 125.1562; MCL 125.1564; MCL 125.1573; ... (151 more in the battery log) [heading-only, read: MCL 28.305; MCL 490.421]
- `(?:\b(?:repairs?|repairers?|contractors?|maintenance|responsible persons?)\b)[\s\S]{0,1200}?(?:\bdesignat(?:e|es|ed|ing|ion)\b)` / all / 178 / desig.ba: MCL 3.711; MCL 12.192; MCL 12.194; MCL 18.41; MCL 18.446; MCL 18.1213; MCL 18.1261; MCL 18.1287; MCL 29.3b; MCL 29.28; MCL 29.29; MCL 35.1082; MCL 38.11; MCL 41.288a; MCL 41.422; MCL 45.85; MCL 46.180; MCL 46.201; MCL 117.4g; MCL 120.108; MCL 123.171; MCL 123.1135; MCL 123.1271; MCL 124.292c; MCL 124.417; MCL 125.482; MCL 125.485; MCL 125.486; MCL 125.731; MCL 125.981; ... (148 more in the battery log) [heading-only, read: MCL 28.305; MCL 257.221; MCL 333.17744d; MCL 339.909]
- `\A(?=[\s\S]*(?:\bdesignat(?:e|es|ed|ing|ion)\b))(?=[\s\S]*(?:\b(?:repairs?|repairers?|contractors?|maintenance|responsible persons?)\b))` / all / 417 / desig.and: MCL 3.711; MCL 3.751; MCL 3.983; MCL 3.991; MCL 3.1001; MCL 3.1053; MCL 12.183; MCL 12.192; MCL 12.194; MCL 16.735; MCL 18.41; MCL 18.441; MCL 18.446; MCL 18.1124; MCL 18.1213; MCL 18.1244; MCL 18.1261; MCL 18.1287; MCL 21.604; MCL 28.728; MCL 28.836; MCL 29.3b; MCL 29.28; MCL 29.29; MCL 30.261; MCL 35.1082; MCL 36.108; MCL 38.1b; MCL 38.11; MCL 38.17g; ... (387 more in the battery log) [heading-only, read: MCL 28.305; MCL 257.221; MCL 339.909; MCL 490.421]
- `\b(?:approved|designated|authorized) (?:repairers?|contractors?|repair (?:persons?|services?|companies))\b` / all / 0 / apprep
- `(?:\b(?:tenants?|lessees?|occupants?)\b)[\s\S]{0,1200}?(?:\bdeduct(?:s|ed|ing)?\b[\s\S]{0,120}?\brents?\b)` / all / 3 / deduct.ab: MCL 125.534; MCL 211.53; MCL 440.2958
- `(?:\bdeduct(?:s|ed|ing)?\b[\s\S]{0,120}?\brents?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?)\b)` / all / 1 / deduct.ba: MCL 125.534
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?)\b))(?=[\s\S]*(?:\bdeduct(?:s|ed|ing)?\b[\s\S]{0,120}?\brents?\b))` / all / 3 / deduct.and: MCL 125.534; MCL 211.53; MCL 440.2958
- positive desig @ MCL 125.482: passed ("there shall be a responsible person, or persons, designated as such by the owner")
- positive apprep @ SYNTH: passed ("The tenant shall use an approved contractor for any repair.")
- positive deduct @ MCL 125.534: passed ("the court may authorize the occupant to correct the violation and deduct the cost from the rent")

**MIG-B5-013** (cited), topic `designated-repairer`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:12:21. designated repairer in landlord-tenant context (narrowed screen of the designation term); whole corpus
- summary: Battery MIG-B5-013 (desigtn.ab 1; desigtn.ba 1; desigtn.and 4; repairer 8 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bdesignat(?:e|es|ed|ing|ion)\b[\s\S]{0,300}?\b(?:repairs?|repairers?|contractors?|maintenance)\b|\b(?:repairs?|repairers?|contractors?|maintenance)\b[\s\S]{0,300}?\bdesignat(?:e|es|ed|ing|ion)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b)` / all / 1 / desigtn.ab: MCL 257.217c
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b)[\s\S]{0,1200}?(?:\bdesignat(?:e|es|ed|ing|ion)\b[\s\S]{0,300}?\b(?:repairs?|repairers?|contractors?|maintenance)\b|\b(?:repairs?|repairers?|contractors?|maintenance)\b[\s\S]{0,300}?\bdesignat(?:e|es|ed|ing|ion)\b)` / all / 1 / desigtn.ba: MCL 257.1403
- `\A(?=[\s\S]*(?:\bdesignat(?:e|es|ed|ing|ion)\b[\s\S]{0,300}?\b(?:repairs?|repairers?|contractors?|maintenance)\b|\b(?:repairs?|repairers?|contractors?|maintenance)\b[\s\S]{0,300}?\bdesignat(?:e|es|ed|ing|ion)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental units?)\b))` / all / 4 / desigtn.and: MCL 117.4q; MCL 257.217c; MCL 257.1403; MCL 289.1105
- `\brepairers?\b` / all / 8 / repairer: MCL 125.2302; MCL 125.2304; MCL 125.2305; MCL 125.2307; MCL 125.2321; MCL 125.2325; MCL 559.221; MCL 600.5781
- positive desigtn @ SYNTH: passed ("The landlord shall designate a repairer to whom the tenant reports needed repairs.")
- positive repairer @ MCL 125.2302: passed ("repairer")

**MIG-B5-014** (superseded by MIG-B5-015), topic `rent-into-court-counterclaim`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:13:57. rent paid into court or escrow in possession cases; whole corpus incl. court rules
- summary: Battery MIG-B5-014 (payct.ab 0; payct.ba 0; payct.and 1; escpos.ab 9; escpos.ba 8; escpos.and 22; registry 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:pa(?:y|ys|id|ying|yments?)|deposit(?:s|ed|ing)?)\b[\s\S]{0,60}?\b(?:into|to|with) (?:the )?(?:court|court clerk|clerk of (?:the )?court|registry)\b)[\s\S]{0,1200}?(?:\brents?\b)` / all / 0 / payct.ab
- `(?:\brents?\b)[\s\S]{0,1200}?(?:\b(?:pa(?:y|ys|id|ying|yments?)|deposit(?:s|ed|ing)?)\b[\s\S]{0,60}?\b(?:into|to|with) (?:the )?(?:court|court clerk|clerk of (?:the )?court|registry)\b)` / all / 0 / payct.ba
- `\A(?=[\s\S]*(?:\b(?:pa(?:y|ys|id|ying|yments?)|deposit(?:s|ed|ing)?)\b[\s\S]{0,60}?\b(?:into|to|with) (?:the )?(?:court|court clerk|clerk of (?:the )?court|registry)\b))(?=[\s\S]*(?:\brents?\b))` / all / 1 / payct.and: MCL 750.49
- `(?:\bescrow(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\b(?:summary proceedings?|possession|evict(?:ion|ed)?)\b)` / all / 9 / escpos.ab: MCL 125.530; MCL 213.58; MCL 213.59; MCL 324.20101; MCL 339.105; MCL 339.2512; MCL 445.1454; MCL 456.529; MCL 600.5720
- `(?:\b(?:summary proceedings?|possession|evict(?:ion|ed)?)\b)[\s\S]{0,1200}?(?:\bescrow(?:s|ed|ing)?\b)` / all / 8 / escpos.ba: MCL 125.530; MCL 213.58; MCL 213.59; MCL 328.215; MCL 339.2512; MCL 445.1454; MCL 456.529; MCL 600.5720
- `\A(?=[\s\S]*(?:\bescrow(?:s|ed|ing)?\b))(?=[\s\S]*(?:\b(?:summary proceedings?|possession|evict(?:ion|ed)?)\b))` / all / 22 / escpos.and: MCL 117.36a; MCL 125.530; MCL 125.698; MCL 125.1422; MCL 205.426c; MCL 205.426d; MCL 207.1130; MCL 213.58; MCL 213.59; MCL 257.248; MCL 324.20101; MCL 324.20101a; MCL 328.215; MCL 339.105; MCL 339.2512; MCL 400.111c; MCL 445.1454; MCL 445.1679; MCL 456.529; MCL 500.8103; MCL 600.5720; MCL 700.7817
- `\bregistry of the court\b` / all / 0 / registry
- positive payct @ MCR 4.201: passed ("payments be made to the court clerk within 7 days")
- positive escpos @ MCR 4.201: passed ("Escrow Orders")
- positive registry @ SYNTH: passed ("The tenant shall deposit the rent into the registry of the court.")

**MIG-B5-015** (cited) (supersedes MIG-B5-014), topic `rent-into-court-counterclaim`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:14:23. rent paid into court or escrow in possession cases; whole corpus incl. court rules
- summary: Battery MIG-B5-015 (payct.ab 1; payct.ba 1; payct.and 3; escpos.ab 10; escpos.ba 9; escpos.and 23; registry 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\b(?:pa(?:y|ys|id|ying|yments?)|deposit(?:s|ed|ing)?)\b[\s\S]{0,60}?\b(?:into|to|with) (?:the )?(?:court|court clerk|clerk of (?:the )?court|registry)\b)[\s\S]{0,1200}?(?:\brents?\b)` / all,extra:mcr / 1 / payct.ab: MCR 4.201
- `(?:\brents?\b)[\s\S]{0,1200}?(?:\b(?:pa(?:y|ys|id|ying|yments?)|deposit(?:s|ed|ing)?)\b[\s\S]{0,60}?\b(?:into|to|with) (?:the )?(?:court|court clerk|clerk of (?:the )?court|registry)\b)` / all,extra:mcr / 1 / payct.ba: MCR 4.201
- `\A(?=[\s\S]*(?:\b(?:pa(?:y|ys|id|ying|yments?)|deposit(?:s|ed|ing)?)\b[\s\S]{0,60}?\b(?:into|to|with) (?:the )?(?:court|court clerk|clerk of (?:the )?court|registry)\b))(?=[\s\S]*(?:\brents?\b))` / all,extra:mcr / 3 / payct.and: MCL 750.49; MCR 3.101; MCR 4.201
- `(?:\bescrow(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\b(?:summary proceedings?|possession|evict(?:ion|ed)?)\b)` / all,extra:mcr / 10 / escpos.ab: MCL 125.530; MCL 213.58; MCL 213.59; MCL 324.20101; MCL 339.105; MCL 339.2512; MCL 445.1454; MCL 456.529; MCL 600.5720; MCR 4.201
- `(?:\b(?:summary proceedings?|possession|evict(?:ion|ed)?)\b)[\s\S]{0,1200}?(?:\bescrow(?:s|ed|ing)?\b)` / all,extra:mcr / 9 / escpos.ba: MCL 125.530; MCL 213.58; MCL 213.59; MCL 328.215; MCL 339.2512; MCL 445.1454; MCL 456.529; MCL 600.5720; MCR 4.201
- `\A(?=[\s\S]*(?:\bescrow(?:s|ed|ing)?\b))(?=[\s\S]*(?:\b(?:summary proceedings?|possession|evict(?:ion|ed)?)\b))` / all,extra:mcr / 23 / escpos.and: MCL 117.36a; MCL 125.530; MCL 125.698; MCL 125.1422; MCL 205.426c; MCL 205.426d; MCL 207.1130; MCL 213.58; MCL 213.59; MCL 257.248; MCL 324.20101; MCL 324.20101a; MCL 328.215; MCL 339.105; MCL 339.2512; MCL 400.111c; MCL 445.1454; MCL 445.1679; MCL 456.529; MCL 500.8103; MCL 600.5720; MCL 700.7817; MCR 4.201
- `\bregistry of the court\b` / all,extra:mcr / 0 / registry
- positive payct @ MCR 4.201: passed ("payments be made to the court clerk within 7 days")
- positive escpos @ MCR 4.201: passed ("Escrow Orders")
- positive registry @ SYNTH: passed ("The tenant shall deposit the rent into the registry of the court.")

**MIG-B5-016** (cited), topic `shutdown-rent-protection`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:15:36. rent protection for government workers during a shutdown; whole corpus
- summary: Battery MIG-B5-016 (shutrent.ab 0; shutrent.ba 0; shutrent.and 0; fedemp.ab 2; fedemp.ba 2; fedemp.and 6; shutdown 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:shutdowns?|furlough(?:s|ed)?|lapses? in (?:appropriations?|funding)|government closures?)\b)[\s\S]{0,1200}?(?:\b(?:rent|rents|tenants?|lessees?|evict(?:ion|ions|ed)?|landlords?|mortgages?)\b)` / all / 0 / shutrent.ab
- `(?:\b(?:rent|rents|tenants?|lessees?|evict(?:ion|ions|ed)?|landlords?|mortgages?)\b)[\s\S]{0,1200}?(?:\b(?:shutdowns?|furlough(?:s|ed)?|lapses? in (?:appropriations?|funding)|government closures?)\b)` / all / 0 / shutrent.ba
- `\A(?=[\s\S]*(?:\b(?:shutdowns?|furlough(?:s|ed)?|lapses? in (?:appropriations?|funding)|government closures?)\b))(?=[\s\S]*(?:\b(?:rent|rents|tenants?|lessees?|evict(?:ion|ions|ed)?|landlords?|mortgages?)\b))` / all / 0 / shutrent.and
- `(?:\b(?:federal|government|state) (?:employees?|workers?|contractors?)\b)[\s\S]{0,1200}?(?:\b(?:rent|rents|tenants?|evict(?:ion|ions|ed)?)\b)` / all / 2 / fedemp.ab: MCL 18.1373; MCL 400.117g
- `(?:\b(?:rent|rents|tenants?|evict(?:ion|ions|ed)?)\b)[\s\S]{0,1200}?(?:\b(?:federal|government|state) (?:employees?|workers?|contractors?)\b)` / all / 2 / fedemp.ba: MCL 450.186c; MCL 791.223a
- `\A(?=[\s\S]*(?:\b(?:federal|government|state) (?:employees?|workers?|contractors?)\b))(?=[\s\S]*(?:\b(?:rent|rents|tenants?|evict(?:ion|ions|ed)?)\b))` / all / 6 / fedemp.and: MCL 18.1373; MCL 141.1369; MCL 400.117g; MCL 450.186c; MCL 600.9945; MCL 791.223a
- `\bshutdowns?\b` / all / 4 / shutdown: MCL 324.5509; MCL 421.29; MCL 460.6o; MCL 460.726
- positive shutrent @ SYNTH: passed ("A tenant who is a federal employee furloughed during a government shutdown may defer rent without a late fee.")
- positive fedemp @ SYNTH: passed ("A landlord shall not evict a federal employee for rent unpaid during a shutdown.")
- positive shutdown @ MCL 324.5509: passed ("shutdown")

**MIG-B5-017** (superseded by MIG-B5-018), topic `subsidy-habitability-proration`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:16:36. subsidy share of a habitability abatement; whole corpus
- summary: Battery MIG-B5-017 (subabate.ab 5; subabate.ba 9; subabate.and 16; vendor 1; hap 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:subsid(?:y|ies|ized)|housing assistance|vouchers?|rent vendor(?:ing|ed)?|rental assistance)\b)[\s\S]{0,1200}?(?:\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|ed|ion|ing)|withh(?:old|olds|olding|eld))\b)` / all / 5 / subabate.ab: MCL 117.4a; MCL 125.2247; MCL 208.1201; MCL 208.1203; MCL 418.862
- `(?:\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|ed|ion|ing)|withh(?:old|olds|olding|eld))\b)[\s\S]{0,1200}?(?:\b(?:subsid(?:y|ies|ized)|housing assistance|vouchers?|rent vendor(?:ing|ed)?|rental assistance)\b)` / all / 9 / subabate.ba: MCL 110.20; MCL 117.4a; MCL 125.2247; MCL 125.2663b; MCL 206.703; MCL 208.1201; MCL 208.1203; MCL 324.21515; MCL 418.862
- `\A(?=[\s\S]*(?:\b(?:subsid(?:y|ies|ized)|housing assistance|vouchers?|rent vendor(?:ing|ed)?|rental assistance)\b))(?=[\s\S]*(?:\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|ed|ion|ing)|withh(?:old|olds|olding|eld))\b))` / all / 16 / subabate.and: MCL 18.47; MCL 110.20; MCL 117.4a; MCL 125.1422; MCL 125.2247; MCL 125.2663b; MCL 141.1545; MCL 206.703; MCL 208.1107; MCL 208.1201; MCL 208.1203; MCL 208.1500; MCL 324.21515; MCL 418.862; MCL 460.9q; MCL 552.602
- `\brent vendor(?:ing|ed)?\b` / all / 1 / vendor: MCL 400.57i
- `\bhousing assistance payments?\b` / all / 2 / hap: MCL 206.507; MCL 206.703
- positive subabate @ SYNTH: passed ("Where rent is abated for a housing code violation, the abatement is prorated between the tenant share and the housing as")
- positive vendor @ MCL 400.57i: passed ("rent vendoring program")
- positive hap @ SYNTH: passed ("The housing assistance payment is not rent owed by the tenant.")

**MIG-B5-018** (cited) (supersedes MIG-B5-017), topic `subsidy-habitability-proration`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:17:00. subsidy share of a habitability abatement; whole corpus
- summary: Battery MIG-B5-018 (subabate.ab 5; subabate.ba 9; subabate.and 16; vendor 2; hap 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:subsid(?:y|ies|ized)|housing assistance|vouchers?|rent[- ]vendor(?:ing|ed)?|rental assistance)\b)[\s\S]{0,1200}?(?:\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|ed|ion|ing)|withh(?:old|olds|olding|eld))\b)` / all / 5 / subabate.ab: MCL 117.4a; MCL 125.2247; MCL 208.1201; MCL 208.1203; MCL 418.862
- `(?:\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|ed|ion|ing)|withh(?:old|olds|olding|eld))\b)[\s\S]{0,1200}?(?:\b(?:subsid(?:y|ies|ized)|housing assistance|vouchers?|rent[- ]vendor(?:ing|ed)?|rental assistance)\b)` / all / 9 / subabate.ba: MCL 110.20; MCL 117.4a; MCL 125.2247; MCL 125.2663b; MCL 206.703; MCL 208.1201; MCL 208.1203; MCL 324.21515; MCL 418.862
- `\A(?=[\s\S]*(?:\b(?:subsid(?:y|ies|ized)|housing assistance|vouchers?|rent[- ]vendor(?:ing|ed)?|rental assistance)\b))(?=[\s\S]*(?:\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|ed|ion|ing)|withh(?:old|olds|olding|eld))\b))` / all / 16 / subabate.and: MCL 18.47; MCL 110.20; MCL 117.4a; MCL 125.1422; MCL 125.2247; MCL 125.2663b; MCL 141.1545; MCL 206.703; MCL 208.1107; MCL 208.1201; MCL 208.1203; MCL 208.1500; MCL 324.21515; MCL 418.862; MCL 460.9q; MCL 552.602
- `\brent[- ]vendor(?:ing|ed)?\b` / all / 2 / vendor: MCL 125.532; MCL 400.57i
- `\bhousing assistance payments?\b` / all / 2 / hap: MCL 206.507; MCL 206.703
- positive subabate @ SYNTH: passed ("Where rent is abated for a housing code violation, the abatement is prorated between the tenant share and the housing as")
- positive vendor @ MCL 400.57i: passed ("rent vendoring program")
- positive vendor @ MCL 125.532: passed ("rent-vendored family independence program recipients")
- positive hap @ SYNTH: passed ("The housing assistance payment is not rent owed by the tenant.")

**MIG-B5-019** (cited), topic `subsidized-inspection-refusal`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:18:30. inspections of subsidized units and refusals; whole corpus
- summary: Battery MIG-B5-019 (subinsp.ab 11; subinsp.ba 3; subinsp.and 18; hqs 0; prerep 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binspect(?:s|ed|ing|ion|ions|or|ors)?\b)[\s\S]{0,1200}?(?:\b(?:subsid(?:y|ies|ized)|vouchers?|housing assistance|housing and urban development|housing commissions?|rent[- ]vendor(?:ing|ed)?)\b)` / all / 11 / subinsp.ab: MCL 4.419; MCL 16.735; MCL 37.2502; MCL 88.14; MCL 125.526; MCL 125.532; MCL 330.1226; MCL 333.8209; MCL 333.13307; MCL 425.111; MCL 554.601c
- `(?:\b(?:subsid(?:y|ies|ized)|vouchers?|housing assistance|housing and urban development|housing commissions?|rent[- ]vendor(?:ing|ed)?)\b)[\s\S]{0,1200}?(?:\binspect(?:s|ed|ing|ion|ions|or|ors)?\b)` / all / 3 / subinsp.ba: MCL 88.14; MCL 125.526; MCL 125.2307
- `\A(?=[\s\S]*(?:\binspect(?:s|ed|ing|ion|ions|or|ors)?\b))(?=[\s\S]*(?:\b(?:subsid(?:y|ies|ized)|vouchers?|housing assistance|housing and urban development|housing commissions?|rent[- ]vendor(?:ing|ed)?)\b))` / all / 18 / subinsp.and: MCL 4.419; MCL 16.735; MCL 37.2502; MCL 45.454; MCL 47.9; MCL 88.14; MCL 125.526; MCL 125.532; MCL 125.1422; MCL 125.2307; MCL 330.1226; MCL 333.8209; MCL 333.13307; MCL 421.11; MCL 425.111; MCL 440.9102; MCL 460.9q; MCL 554.601c
- `\bhousing quality standards?\b` / all / 0 / hqs
- `\brepairs required before occupancy\b` / all / 1 / prerep: MCL 554.601
- positive subinsp @ MCL 125.526: passed ("conducted by the United States Department of Housing and Urban Development")
- positive hqs @ SYNTH: passed ("The unit must pass the housing quality standards inspection.")
- positive prerep @ MCL 554.601: passed ("repairs required before occupancy")

**MIG-B5-020** (cited), topic `alt-housing`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:19:57. landlord duty to provide alternate housing or relocation; whole corpus
- summary: Battery MIG-B5-020 (althous.ab 4; althous.ba 6; althous.and 8; reloc.ab 13; reloc.ba 23; reloc.and 31; relocpay 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:alternate|alternative|substitute|temporary|comparable|replacement) (?:housing|dwellings?|accommodations?|lodging|shelter)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|landlords?|lessors?|owners?)\b)` / all / 4 / althous.ab: MCL 213.55; MCL 213.59; MCL 445.889; MCL 554.632
- `(?:\b(?:tenants?|lessees?|occupants?|landlords?|lessors?|owners?)\b)[\s\S]{0,1200}?(?:\b(?:alternate|alternative|substitute|temporary|comparable|replacement) (?:housing|dwellings?|accommodations?|lodging|shelter)\b)` / all / 6 / althous.ba: MCL 213.55; MCL 213.59; MCL 213.323; MCL 324.19106; MCL 324.46502; MCL 445.889
- `\A(?=[\s\S]*(?:\b(?:alternate|alternative|substitute|temporary|comparable|replacement) (?:housing|dwellings?|accommodations?|lodging|shelter)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|landlords?|lessors?|owners?)\b))` / all / 8 / althous.and: MCL 213.55; MCL 213.59; MCL 213.323; MCL 324.19106; MCL 324.46502; MCL 324.81101; MCL 445.889; MCL 554.632
- `(?:\breloca(?:te|tes|ted|ting|tion)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|displaced (?:persons?|households?|families))\b)` / all / 13 / reloc.ab: MCL 125.74; MCL 125.961; MCL 125.1581; MCL 125.4307; MCL 207.571; MCL 213.55; MCL 213.59; MCL 213.322; MCL 213.323; MCL 252.132; MCL 252.133; MCL 252.134; Mich Admin Code R 460.144
- `(?:\b(?:tenants?|lessees?|occupants?|displaced (?:persons?|households?|families))\b)[\s\S]{0,1200}?(?:\breloca(?:te|tes|ted|ting|tion)\b)` / all / 23 / reloc.ba: MCL 125.74; MCL 125.961; MCL 125.1411; MCL 125.1576; MCL 125.1581; MCL 125.1608; MCL 125.2466; MCL 125.2663; MCL 125.4217; MCL 125.4316; MCL 125.4407; MCL 125.4415; MCL 125.4621; MCL 207.571; MCL 213.55; MCL 213.59; MCL 213.322; MCL 213.323; MCL 213.324; MCL 213.352; MCL 252.133; MCL 400.1210; MCL 460.9q [heading-only, read: MCL 252.141]
- `\A(?=[\s\S]*(?:\breloca(?:te|tes|ted|ting|tion)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|displaced (?:persons?|households?|families))\b))` / all / 31 / reloc.and: MCL 125.74; MCL 125.961; MCL 125.1411; MCL 125.1576; MCL 125.1581; MCL 125.1608; MCL 125.2466; MCL 125.2663; MCL 125.4217; MCL 125.4307; MCL 125.4316; MCL 125.4402; MCL 125.4407; MCL 125.4415; MCL 125.4621; MCL 207.571; MCL 213.55; MCL 213.59; MCL 213.322; MCL 213.323; MCL 213.324; MCL 213.352; MCL 252.132; MCL 252.133; MCL 252.134; MCL 324.21310a; MCL 324.21323a; MCL 400.1210; MCL 460.9q; MCL 460.1315; ... (1 more in the battery log) [heading-only, read: MCL 252.141]
- `\brelocation (?:assistance|benefits|payments?|expenses?)\b` / all / 16 / relocpay: MCL 3.822; MCL 18.361; MCL 125.1608; MCL 125.2113; MCL 125.2663; MCL 125.4217; MCL 125.4316; MCL 125.4415; MCL 125.4621; MCL 213.322; MCL 213.323; MCL 213.324; MCL 247.660e; MCL 400.1207; MCL 421.11; MCL 474.68
- positive althous @ SYNTH: passed ("The landlord shall provide the tenant with comparable housing at no cost while the dwelling is being repaired.")
- positive reloc @ MCL 125.961: passed ("relocation of occupants by condemning unit. Sec. 1. The final relocation of residents under urban renewal shall not occu")
- positive relocpay @ MCL 3.822: passed ("relocation assistance")

**MIG-B5-021** (cited), topic `other-landlord-facilities`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:21:39. landlord duties for building facilities and amenities; whole corpus
- summary: Battery MIG-B5-021 (garage 1; amenity.ab 0; amenity.ba 1; amenity.and 2; facprom.ab 4; facprom.ba 1; facprom.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bgarage doors?(?: openers?)?\b` / all / 1 / garage: MCL 565.957
- `(?:\b(?:laundry (?:rooms?|facilities)|fitness (?:rooms?|centers?)|clubhouses?|amenit(?:y|ies)|storage lockers?|mailbox(?:es)?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?)\b)` / all / 0 / amenity.ab
- `(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:laundry (?:rooms?|facilities)|fitness (?:rooms?|centers?)|clubhouses?|amenit(?:y|ies)|storage lockers?|mailbox(?:es)?)\b)` / all / 1 / amenity.ba: MCL 211.7cc
- `\A(?=[\s\S]*(?:\b(?:laundry (?:rooms?|facilities)|fitness (?:rooms?|centers?)|clubhouses?|amenit(?:y|ies)|storage lockers?|mailbox(?:es)?)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|rental units?|landlords?|lessors?)\b))` / all / 2 / amenity.and: MCL 211.7cc; MCL 570.584
- `(?:\bfacilit(?:y|ies)\b)[\s\S]{0,1200}?(?:\bpromised\b)` / all / 4 / facprom.ab: MCL 257.1302a; MCL 257.1307a; MCL 554.601; MCL 559.203b
- `(?:\bpromised\b)[\s\S]{0,1200}?(?:\bfacilit(?:y|ies)\b)` / all / 1 / facprom.ba: MCL 257.1307a
- `\A(?=[\s\S]*(?:\bfacilit(?:y|ies)\b))(?=[\s\S]*(?:\bpromised\b))` / all / 5 / facprom.and: MCL 257.1302a; MCL 257.1307a; MCL 445.903; MCL 554.601; MCL 559.203b
- positive garage @ MCL 565.957: passed ("garage door")
- positive amenity @ SYNTH: passed ("The landlord shall keep the laundry facilities provided for tenants in good working order.")
- positive facprom @ MCL 554.601: passed ("other facilities or area promised for the use of a residential tenant")

**MIG-B5-022** (cited), topic `tenant-statutory-duties`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:23:44. general tenant-duties statute of the uniform-act kind; whole corpus
- summary: Battery MIG-B5-022 (tshall 43; reasuse.ab 0; reasuse.ba 0; reasuse.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\b(?:tenants?|lessees?|renters?) shall\b` / all / 43 / tshall: MCL 43.53; MCL 54.211; MCL 125.474; MCL 125.526; MCL 125.541; MCL 125.1261; MCL 206.520; MCL 206.527a; MCL 207.615; MCL 208.1437; MCL 211.9p; MCL 211.1125; MCL 211.1127; MCL 257.226; MCL 257.233a; MCL 257.233b; MCL 257.244; MCL 257.801h; MCL 257.1849; MCL 324.6521; MCL 324.61503a; MCL 324.61503b; MCL 324.76702; MCL 338.3221; MCL 432.143; MCL 440.2961; MCL 440.2966; MCL 445.852; MCL 445.954; MCL 445.958; ... (13 more in the battery log)
- `(?:\b(?:in a reasonable manner|clean and safe|as clean and safe)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|renters?|occupants?)\b)` / all / 0 / reasuse.ab
- `(?:\b(?:tenants?|lessees?|renters?|occupants?)\b)[\s\S]{0,1200}?(?:\b(?:in a reasonable manner|clean and safe|as clean and safe)\b)` / all / 0 / reasuse.ba
- `\A(?=[\s\S]*(?:\b(?:in a reasonable manner|clean and safe|as clean and safe)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|renters?|occupants?)\b))` / all / 1 / reasuse.and: MCL 125.1422b
- positive tshall @ MCL 125.474: passed ("tenants shall")
- positive reasuse @ SYNTH: passed ("The tenant shall keep that part of the premises that he occupies and uses as clean and safe as the condition of the prem")

**MIG-B6-001** (cited), topic `fire-code-standard`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:03:48. fire safety regime reaching residential buildings; fire escapes; elevators
- summary: Battery MIG-B6-001 (fr.ab 2; fr.ba 0; fr.and 3; fesc 7; elev.ab 8; elev.ba 4; elev.and 14 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bfire (?:safety|prevention)\b)[\s\S]{0,1200}?(?:\b(?:multiple dwellings?|apartments?|residential buildings?)\b)` / all / 2 / fr.ab: MCL 29.3e; MCL 125.482
- `(?:\b(?:multiple dwellings?|apartments?|residential buildings?)\b)[\s\S]{0,1200}?(?:\bfire (?:safety|prevention)\b)` / all / 0 / fr.ba
- `\A(?=[\s\S]*(?:\bfire (?:safety|prevention)\b))(?=[\s\S]*(?:\b(?:multiple dwellings?|apartments?|residential buildings?)\b))` / all / 3 / fr.and: MCL 29.3e; MCL 125.482; MCL 339.601
- `\bfire escapes?\b` / all / 7 / fesc: MCL 29.8; MCL 109.7; MCL 125.402; MCL 125.487; MCL 125.495; MCL 257.674; MCL 427.2
- `(?:\belevators?\b)[\s\S]{0,1200}?(?:\b(?:certificates? of operation|owners?|lessees?)\b)` / all / 8 / elev.ab: MCL 285.62; MCL 338.2155; MCL 408.806; MCL 408.807; MCL 408.816; MCL 408.819; MCL 408.820; MCL 559.303 [heading-only, read: MCL 444.102]
- `(?:\b(?:certificates? of operation|owners?|lessees?)\b)[\s\S]{0,1200}?(?:\belevators?\b)` / all / 4 / elev.ba: MCL 408.807; MCL 408.820; MCL 444.102; MCL 462.3
- `\A(?=[\s\S]*(?:\belevators?\b))(?=[\s\S]*(?:\b(?:certificates? of operation|owners?|lessees?)\b))` / all / 14 / elev.and: MCL 120.14; MCL 125.402; MCL 205.54a; MCL 205.94; MCL 285.62; MCL 324.5524; MCL 338.2155; MCL 408.806; MCL 408.807; MCL 408.816; MCL 408.819; MCL 408.820; MCL 462.3; MCL 559.303 [heading-only, read: MCL 444.102]
- positive fr @ MCL 29.3e: passed ("uniform fire safety requirements for the operation and maintenance, but not the construction, of commercial buildings, i")
- positive fesc @ MCL 125.487: passed ("All fire escapes shall be kept in a safe and sound condition")
- positive elev @ MCL 408.806: passed ("An elevator shall be constructed, equipped, maintained, repaired, and used")

**MIG-B6-002** (cited), topic `fire-sprinkler-duty`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:04:06. sprinkler duty or retrofit in dwellings
- summary: Battery MIG-B6-002 (spd.ab 4; spd.ba 5; spd.and 5; retro.ab 0; retro.ba 0; retro.and 0; spk 11; fss 13 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsprinkler\w*)[\s\S]{0,1200}?(?:\b(?:dwellings?|residential|apartments?|rental|tenants?)\b)` / all / 4 / spd.ab: MCL 125.482; MCL 125.493; MCL 125.494; Mich Admin Code R 408.30539a
- `(?:\b(?:dwellings?|residential|apartments?|rental|tenants?)\b)[\s\S]{0,1200}?(?:\bsprinkler\w*)` / all / 5 / spd.ba: MCL 125.482; MCL 125.493; MCL 125.494; MCL 125.1504j; Mich Admin Code R 408.30539a
- `\A(?=[\s\S]*(?:\bsprinkler\w*))(?=[\s\S]*(?:\b(?:dwellings?|residential|apartments?|rental|tenants?)\b))` / all / 5 / spd.and: MCL 125.482; MCL 125.493; MCL 125.494; MCL 125.1504j; Mich Admin Code R 408.30539a
- `(?:\bretrofit\w*)[\s\S]{0,1200}?(?:\b(?:sprinkler\w*|fire suppression)\b)` / all / 0 / retro.ab
- `(?:\b(?:sprinkler\w*|fire suppression)\b)[\s\S]{0,1200}?(?:\bretrofit\w*)` / all / 0 / retro.ba
- `\A(?=[\s\S]*(?:\bretrofit\w*))(?=[\s\S]*(?:\b(?:sprinkler\w*|fire suppression)\b))` / all / 0 / retro.and
- `\bsprinkler\w*` / all / 11 / spk: MCL 28.455; MCL 125.482; MCL 125.493; MCL 125.494; MCL 125.1504j; MCL 427.3; MCL 500.614; MCL 500.624; MCL 565.957; Mich Admin Code R 408.30539a; Mich Admin Code R 408.30544a
- `\bfire suppression systems?\b` / all / 13 / fss: MCL 28.455; MCL 28.653; MCL 29.1; MCL 29.3c; MCL 29.26; MCL 29.28; MCL 29.29; MCL 29.30; MCL 29.32; MCL 29.33; MCL 29.451; MCL 125.1513c; MCL 339.5801
- positive spd @ MCL 125.482: passed ("protected with an approved sprinkler system")
- positive spk @ Mich Admin Code R 408.30539a: passed ("automatic residential fire sprinkler systems")
- positive fss @ MCL 29.1: passed (""Fire suppression system" means")
- positive retro @ SYNTH: passed ("The owner of a multiple dwelling shall retrofit the building with an automatic sprinkler system not later than January 1")

**MIG-B6-003** (cited), topic `sprinkler-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:04:24. sprinkler notice/disclosure to tenants; sprinkler grants or credits
- summary: Battery MIG-B6-003 (spn.ab 2; spn.ba 3; spn.and 5; spc.ab 1; spc.ba 0; spc.and 1; spk 11 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsprinkler\w*)[\s\S]{0,1200}?(?:\b(?:disclos\w*|notice|notif\w*|lease[sd]?|tenants?|lessees?)\b)` / all / 2 / spn.ab: MCL 125.482; MCL 125.1504j [heading-only, read: MCL 28.455]
- `(?:\b(?:disclos\w*|notice|notif\w*|lease[sd]?|tenants?|lessees?)\b)[\s\S]{0,1200}?(?:\bsprinkler\w*)` / all / 3 / spn.ba: MCL 28.455; MCL 125.1504j; MCL 565.957
- `\A(?=[\s\S]*(?:\bsprinkler\w*))(?=[\s\S]*(?:\b(?:disclos\w*|notice|notif\w*|lease[sd]?|tenants?|lessees?)\b))` / all / 5 / spn.and: MCL 28.455; MCL 125.482; MCL 125.1504j; MCL 427.3; MCL 565.957
- `(?:\bsprinkler\w*)[\s\S]{0,1200}?(?:\b(?:credits?|grants?|loans?)\b)` / all / 1 / spc.ab: MCL 500.624
- `(?:\b(?:credits?|grants?|loans?)\b)[\s\S]{0,1200}?(?:\bsprinkler\w*)` / all / 0 / spc.ba
- `\A(?=[\s\S]*(?:\bsprinkler\w*))(?=[\s\S]*(?:\b(?:credits?|grants?|loans?)\b))` / all / 1 / spc.and: MCL 500.624
- `\bsprinkler\w*` / all / 11 / spk: MCL 28.455; MCL 125.482; MCL 125.493; MCL 125.494; MCL 125.1504j; MCL 427.3; MCL 500.614; MCL 500.624; MCL 565.957; Mich Admin Code R 408.30539a; Mich Admin Code R 408.30544a
- positive spn @ MCL 28.455: passed ("sprinkler system; failure to comply; civil fine; insurance coverage; notice")
- positive spk @ MCL 125.482: passed ("sprinkler system")
- positive spc @ SYNTH: passed ("An owner of residential rental property that installs an automatic sprinkler system may claim a credit against the tax i")

**MIG-B6-004** (cited), topic `water-heater-temperature`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:04:36. water heater temperature setting
- summary: Battery MIG-B6-004 (wht.ab 5; wht.ba 4; wht.and 8; wh 15; scald 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:(?:\bwater heaters?\b|\bhot water\b))[\s\S]{0,1200}?(?:\b(?:temperatures?|degrees?|thermostats?)\b)` / all / 5 / wht.ab: MCL 339.5737; MCL 339.5903; MCL 339.5915; MCL 400.1153; Mich Admin Code R 408.30530
- `(?:\b(?:temperatures?|degrees?|thermostats?)\b)[\s\S]{0,1200}?(?:(?:\bwater heaters?\b|\bhot water\b))` / all / 4 / wht.ba: MCL 339.5943; MCL 400.1153; Mich Admin Code R 408.30530; Mich Admin Code R 408.30547e
- `\A(?=[\s\S]*(?:(?:\bwater heaters?\b|\bhot water\b)))(?=[\s\S]*(?:\b(?:temperatures?|degrees?|thermostats?)\b))` / all / 8 / wht.and: MCL 288.690; MCL 339.5737; MCL 339.5903; MCL 339.5915; MCL 339.5943; MCL 400.1153; Mich Admin Code R 408.30530; Mich Admin Code R 408.30547e
- `\bwater heaters?\b` / all / 15 / wh: MCL 125.1504d; MCL 125.2307; MCL 205.54gg; MCL 205.94gg; MCL 211.27; MCL 339.5737; MCL 400.1153; MCL 445.1102; MCL 460.1005; MCL 559.303; MCL 565.957; MCL 600.3238; Mich Admin Code R 408.30530; Mich Admin Code R 408.30547e; Mich Admin Code R 408.30547f
- `\bscald\w*` / all / 2 / scald: MCL 750.85; MCL 750.136b
- positive wht @ MCL 339.5903: passed ("hot water heating boiler operated at pressures that do not exceed 160 p.s.i.g. or temperatures")
- positive wh @ MCL 125.1504d: passed ("water heater")
- positive scald @ SYNTH: passed ("The owner shall set the water heater so as to prevent scalding at a temperature not more than 120 degrees Fahrenheit.")

**MIG-B6-005** (cited), topic `window-guards`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:04:52. window guards, security bars, window fall protection
- summary: Battery MIG-B6-005 (wg 1; wb.ab 1; wb.ba 1; wb.and 2; wch.ab 0; wch.ba 4; wch.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bwindow guards?\b|\b(?:burglar|security) bars?\b|\bwindow (?:fall|opening control)\w*` / all / 1 / wg: MCL 125.1422e
- `(?:\bwindows?\b)[\s\S]{0,1200}?(?:\b(?:guards?|bars?|grilles?)\b)` / all / 1 / wb.ab: MCL 333.12606a
- `(?:\b(?:guards?|bars?|grilles?)\b)[\s\S]{0,1200}?(?:\bwindows?\b)` / all / 1 / wb.ba: MCL 333.12606a
- `\A(?=[\s\S]*(?:\bwindows?\b))(?=[\s\S]*(?:\b(?:guards?|bars?|grilles?)\b))` / all / 2 / wb.and: MCL 333.12606a; Mich Admin Code R 408.30537
- `(?:\bwindows?\b)[\s\S]{0,1200}?(?:\bchild(?:ren)?\b)` / all / 0 / wch.ab
- `(?:\bchild(?:ren)?\b)[\s\S]{0,1200}?(?:\bwindows?\b)` / all / 4 / wch.ba: MCL 125.539; MCL 400.1153; MCL 803.225a; MCL 803.307a
- `\A(?=[\s\S]*(?:\bwindows?\b))(?=[\s\S]*(?:\bchild(?:ren)?\b))` / all / 6 / wch.and: MCL 18.361; MCL 125.539; MCL 400.1153; MCL 750.167; MCL 803.225a; MCL 803.307a
- positive wb @ MCL 333.12606a: passed ("windows, or doors that extend from the floor to ceiling. (d) The cigar bar")
- positive wg @ SYNTH: passed ("The owner shall install window guards in each dwelling unit in which a child 10 years of age or younger resides.")
- positive wch @ SYNTH: passed ("The owner shall install window guards in each dwelling unit in which a child 10 years of age or younger resides.")

**MIG-B6-006** (cited), topic `steam-radiator-covers`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:05:06. steam radiator covers
- summary: Battery MIG-B6-006 (rad 2; radc.ab 0; radc.ba 0; radc.and 0; steam.ab 2; steam.ba 0; steam.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bradiators?\b` / all / 2 / rad: MCL 257.1302a; MCL 750.435
- `(?:\bradiators?\b)[\s\S]{0,1200}?(?:\b(?:covers?|guards?|shields?)\b)` / all / 0 / radc.ab
- `(?:\b(?:covers?|guards?|shields?)\b)[\s\S]{0,1200}?(?:\bradiators?\b)` / all / 0 / radc.ba
- `\A(?=[\s\S]*(?:\bradiators?\b))(?=[\s\S]*(?:\b(?:covers?|guards?|shields?)\b))` / all / 0 / radc.and
- `(?:\bsteam\b)[\s\S]{0,1200}?(?:\b(?:tenants?|dwelling units?|occupants?)\b)` / all / 2 / steam.ab: MCL 18.1713; MCL 333.13805
- `(?:\b(?:tenants?|dwelling units?|occupants?)\b)[\s\S]{0,1200}?(?:\bsteam\b)` / all / 0 / steam.ba
- `\A(?=[\s\S]*(?:\bsteam\b))(?=[\s\S]*(?:\b(?:tenants?|dwelling units?|occupants?)\b))` / all / 2 / steam.and: MCL 18.1713; MCL 333.13805
- positive rad @ MCL 257.1302a: passed ("Radiator")
- positive radc @ SYNTH: passed ("Upon request of a tenant, the owner shall install a cover on each steam radiator in the dwelling unit.")
- positive steam @ SYNTH: passed ("Upon request of a tenant, the owner shall install a cover on each steam radiator in the dwelling unit.")

**MIG-B6-007** (cited), topic `pool-safety`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:05:56. pool regulation reaching rental housing; pool barriers
- summary: Battery MIG-B6-007 (psw 35; pbar.ab 7; pbar.ba 8; pbar.and 12; pres.ab 3; pres.ba 7; pres.and 11 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bswimming pools?\b` / all / 35 / psw: MCL 123.1061; MCL 123.1063; MCL 123.1067; MCL 123.1069; MCL 123.1071; MCL 123.1073; MCL 123.1077; MCL 123.1133; MCL 123.1135; MCL 123.1141; MCL 123.1151; MCL 211.7h; MCL 324.8319; MCL 333.12521; MCL 333.12522; MCL 333.12523; MCL 333.12524; MCL 333.12525; MCL 333.12526; MCL 333.12526a; MCL 333.12527; MCL 333.12527a; MCL 333.12527b; MCL 333.12528; MCL 333.12530; MCL 333.12531; MCL 333.12531a; MCL 333.12532; MCL 333.12534; MCL 333.12541; ... (5 more in the battery log)
- `(?:(?:\bpools?\b|\bspas?\b|\bhot tubs?\b))[\s\S]{0,1200}?(?:\b(?:fenc\w*|barriers?|gates?|enclos\w*))` / all / 7 / pbar.ab: MCL 123.1061; MCL 123.1133; MCL 257.14; MCL 333.12521; MCL 333.12522; MCL 333.12526a; MCL 431.318
- `(?:\b(?:fenc\w*|barriers?|gates?|enclos\w*))[\s\S]{0,1200}?(?:(?:\bpools?\b|\bspas?\b|\bhot tubs?\b))` / all / 8 / pbar.ba: MCL 123.1061; MCL 123.1133; MCL 287.1106; MCL 324.16903; MCL 333.12521; MCL 333.12526a; MCL 565.957; Mich Admin Code R 408.30505
- `\A(?=[\s\S]*(?:(?:\bpools?\b|\bspas?\b|\bhot tubs?\b)))(?=[\s\S]*(?:\b(?:fenc\w*|barriers?|gates?|enclos\w*)))` / all / 12 / pbar.and: MCL 123.1061; MCL 123.1133; MCL 257.14; MCL 287.1106; MCL 324.16903; MCL 324.61506; MCL 333.12521; MCL 333.12522; MCL 333.12526a; MCL 431.318; MCL 565.957; Mich Admin Code R 408.30505
- `(?:\bpools?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|rental|apartments?|landlords?|condominiums?)\b)` / all / 3 / pres.ab: MCL 211.7p; MCL 324.61701; MCL 333.12521
- `(?:\b(?:tenants?|lessees?|rental|apartments?|landlords?|condominiums?)\b)[\s\S]{0,1200}?(?:\bpools?\b)` / all / 7 / pres.ba: MCL 257.217c; MCL 257.233a; MCL 324.61701; MCL 324.61703; MCL 445.1601; MCL 500.2901; MCL 830.418
- `\A(?=[\s\S]*(?:\bpools?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|rental|apartments?|landlords?|condominiums?)\b))` / all / 11 / pres.and: MCL 211.7p; MCL 257.217c; MCL 257.233a; MCL 257.248; MCL 257.251; MCL 324.61701; MCL 324.61703; MCL 333.12521; MCL 445.1601; MCL 500.2901; MCL 830.418
- positive psw @ MCL 333.12521: passed ("public swimming pool")
- positive pbar @ MCL 333.12521: passed ("structures, areas, and enclosures intended for the use of individuals using or operating the swimming pool")
- positive pres @ MCL 333.12521: passed ("a pool serving not more than 4 hotel, motel, apartment, condominium, or similar units")

**MIG-B6-008** (cited), topic `security-devices`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:06:09. locks, deadbolts, peepholes, rekeying duties
- summary: Battery MIG-B6-008 (db 0; lkt.ab 1; lkt.ba 4; lkt.and 7; secd 25 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bdead ?bolts?\b|\bpeep ?holes?\b|\bdoor viewers?\b|\bre-?key\w*` / all / 0 / db
- `(?:\blocks?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|dwelling units?|rental units?|occupants?)\b)` / all / 1 / lkt.ab: MCL 600.2918
- `(?:\b(?:tenants?|lessees?|dwelling units?|rental units?|occupants?)\b)[\s\S]{0,1200}?(?:\blocks?\b)` / all / 4 / lkt.ba: MCL 125.1528a; MCL 339.5733; MCL 485.8; MCL 600.2918
- `\A(?=[\s\S]*(?:\blocks?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|dwelling units?|rental units?|occupants?)\b))` / all / 7 / lkt.and: MCL 18.361; MCL 125.1502a; MCL 125.1528a; MCL 333.27954; MCL 339.5733; MCL 485.8; MCL 600.2918
- `\bsecurity devices?\b` / all / 25 / secd: MCL 18.361; MCL 247.668b; MCL 288.501; MCL 288.511; MCL 288.512; MCL 288.513; MCL 288.514; MCL 288.515; MCL 288.516; MCL 288.517; MCL 288.520; MCL 288.670; MCL 288.673; MCL 288.676; MCL 288.677; MCL 288.678; MCL 288.679; MCL 288.680; MCL 288.681; MCL 288.682; MCL 288.683; MCL 333.26423; MCL 333.27954; MCL 440.4701; MCL 600.2918
- positive lkt @ MCL 600.2918: passed ("locks or other security devices on the property without immediately providing keys")
- positive secd @ MCL 600.2918: passed ("security devices")
- positive db @ SYNTH: passed ("A landlord shall equip each exterior door of a dwelling unit with a keyed dead bolt and a door viewer and shall rekey th")

**MIG-B6-009** (cited), topic `smart-access`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:06:30. smart locks, electronic entry, biometric data
- summary: Battery MIG-B6-009 (sl 2; ea.ab 25; ea.ba 22; ea.and 47; bio.ab 7; bio.ba 9; bio.and 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bsmart locks?\b|\bkeypads?\b|\bkey fobs?\b|\bkey cards?\b|\bkeyless\b` / all / 2 / sl: MCL 436.1552; MCL 500.125
- `(?:\b(?:electronic|keyless|smart|biometric|app-based)\b)[\s\S]{0,1200}?(?:\b(?:locks?|entry|access control)\b)` / all / 25 / ea.ab: MCL 4.355; MCL 28.243; MCL 38.1328; MCL 55.286b; MCL 124.759; MCL 125.2088a; MCL 211.42a; MCL 211.78g; MCL 256.623; MCL 257.238; MCL 289.1109; MCL 324.17301; MCL 324.80320; MCL 324.81109; MCL 333.17755; MCL 338.2182; MCL 432.202; MCL 432.403; MCL 432.502; MCL 445.2125; MCL 551.102; MCL 554.909; MCL 764.1g; MCL 764.26a; MCL 766.11b
- `(?:\b(?:locks?|entry|access control)\b)[\s\S]{0,1200}?(?:\b(?:electronic|keyless|smart|biometric|app-based)\b)` / all / 22 / ea.ba: MCL 28.243; MCL 38.1328; MCL 55.286b; MCL 125.2088a; MCL 211.78g; MCL 256.623; MCL 257.238; MCL 257.1243; MCL 287.703; MCL 290.628f; MCL 324.80320; MCL 324.81109; MCL 333.7405; MCL 333.16187d; MCL 333.17755; MCL 338.2182; MCL 445.405; MCL 500.1222; MCL 565.865; MCL 600.2567; MCL 762.11; MCL 764.1g
- `\A(?=[\s\S]*(?:\b(?:electronic|keyless|smart|biometric|app-based)\b))(?=[\s\S]*(?:\b(?:locks?|entry|access control)\b))` / all / 47 / ea.and: MCL 4.355; MCL 15.232; MCL 28.243; MCL 38.1174; MCL 38.1328; MCL 55.286b; MCL 117.5k; MCL 124.759; MCL 125.2088a; MCL 168.720j; MCL 205.93b; MCL 211.42a; MCL 211.78g; MCL 211.78k; MCL 211.78m; MCL 256.623; MCL 257.238; MCL 257.1243; MCL 287.703; MCL 289.1109; MCL 290.628f; MCL 324.17301; MCL 324.80320; MCL 324.81109; MCL 333.7405; MCL 333.16187d; MCL 333.16189; MCL 333.17755; MCL 338.2182; MCL 432.202; ... (17 more in the battery log)
- `(?:\bbiometric\w*)[\s\S]{0,1200}?(?:\b(?:consent|collect\w*|retain\w*|retention)\b)` / all / 7 / bio.ab: MCL 28.243; MCL 28.243a; MCL 333.16188.added; MCL 436.1701; MCL 712A.11; MCL 712A.18; MCL 764.26a
- `(?:\b(?:consent|collect\w*|retain\w*|retention)\b)[\s\S]{0,1200}?(?:\bbiometric\w*)` / all / 9 / bio.ba: MCL 28.241a; MCL 28.242; MCL 28.243; MCL 28.243a; MCL 333.16190; MCL 436.1701; MCL 500.553; MCL 712A.11; MCL 712A.18
- `\A(?=[\s\S]*(?:\bbiometric\w*))(?=[\s\S]*(?:\b(?:consent|collect\w*|retain\w*|retention)\b))` / all / 16 / bio.and: MCL 3.1053; MCL 28.241a; MCL 28.242; MCL 28.243; MCL 28.243a; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.16189; MCL 333.16190; MCL 388.1293; MCL 436.1701; MCL 500.553; MCL 712A.11; MCL 712A.18; MCL 764.26a
- positive ea @ MCL 338.2182: passed ("electronic access control system")
- positive bio @ MCL 28.243: passed ("biometric data of person arrested")
- positive sl @ SYNTH: passed ("A landlord that provides a smart lock or keypad for entry to a dwelling unit shall offer the tenant a physical key.")

**MIG-B6-010** (cited), topic `key-control-policy`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:06:53. key control, master keys, staff background checks, lock changes incl. domestic violence
- summary: Battery MIG-B6-010 (kc 1; kemp.ab 13; kemp.ba 10; kemp.and 21; lchg.ab 8; lchg.ba 10; lchg.and 15; dvl.ab 0; dvl.ba 0; dvl.and 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bkey control\b|\bmaster keys?\b` / all / 1 / kc: MCL 750.414a
- `(?:\bkeys?\b)[\s\S]{0,1200}?(?:\b(?:background checks?|criminal history|employees?)\b)` / all / 13 / kemp.ab: MCL 15.243; MCL 141.1365; MCL 324.74124; MCL 333.27301; MCL 333.29201; MCL 388.1698; MCL 432.218; MCL 432.272; MCL 432.502; MCL 432.503; MCL 432.510; MCL 436.1552; MCL 750.552c
- `(?:\b(?:background checks?|criminal history|employees?)\b)[\s\S]{0,1200}?(?:\bkeys?\b)` / all / 10 / kemp.ba: MCL 141.1365; MCL 324.74124; MCL 333.27301; MCL 333.29201; MCL 421.225; MCL 432.272; MCL 432.503; MCL 436.1552; MCL 500.555; MCL 750.552c
- `\A(?=[\s\S]*(?:\bkeys?\b))(?=[\s\S]*(?:\b(?:background checks?|criminal history|employees?)\b))` / all / 21 / kemp.and: MCL 15.243; MCL 125.2029h; MCL 141.1365; MCL 324.74124; MCL 333.27301; MCL 333.29103; MCL 333.29201; MCL 388.1698; MCL 421.225; MCL 432.218; MCL 432.272; MCL 432.502; MCL 432.503; MCL 432.510; MCL 436.1552; MCL 445.63; MCL 500.555; MCL 500.1202; MCL 600.1078; MCL 600.1099kk; MCL 750.552c
- `(?:\b(?:chang\w*|replac\w*|install\w*)\b)[\s\S]{0,1200}?(?:\blocks?\b)` / all / 8 / lchg.ab: MCL 18.361; MCL 123.321; MCL 125.1528a; MCL 257.1243; MCL 290.628f; MCL 600.2918; MCL 750.414a; MCL 830.418 [heading-only, read: MCL 123.322]
- `(?:\blocks?\b)[\s\S]{0,1200}?(?:\b(?:chang\w*|replac\w*|install\w*)\b)` / all / 10 / lchg.ba: MCL 18.361; MCL 123.321; MCL 123.322; MCL 125.1528a; MCL 257.904e; MCL 257.1243; MCL 290.628f; MCL 339.5733; MCL 380.1313a; MCL 750.414a
- `\A(?=[\s\S]*(?:\b(?:chang\w*|replac\w*|install\w*)\b))(?=[\s\S]*(?:\blocks?\b))` / all / 15 / lchg.and: MCL 18.361; MCL 123.321; MCL 123.322; MCL 125.1502a; MCL 125.1528a; MCL 257.904e; MCL 257.1243; MCL 290.628f; MCL 339.5733; MCL 380.1313a; MCL 486.109; MCL 500.2111; MCL 600.2918; MCL 750.414a; MCL 830.418
- `(?:\b(?:domestic violence|stalking|sexual assault)\b)[\s\S]{0,1200}?(?:\blocks?\b)` / all / 0 / dvl.ab
- `(?:\blocks?\b)[\s\S]{0,1200}?(?:\b(?:domestic violence|stalking|sexual assault)\b)` / all / 0 / dvl.ba
- `\A(?=[\s\S]*(?:\b(?:domestic violence|stalking|sexual assault)\b))(?=[\s\S]*(?:\blocks?\b))` / all / 0 / dvl.and
- positive kc @ MCL 750.414a: passed ("motor vehicle master key")
- positive lchg @ MCL 18.361: passed ("replacing or repairing windows or locks")
- positive kemp @ SYNTH: passed ("A landlord of a building with 20 or more units shall adopt a key control policy and shall obtain a criminal history back")
- positive dvl @ SYNTH: passed ("A tenant who is a victim of domestic violence may require the landlord to change the locks to the dwelling unit.")

**MIG-B6-011** (cited), topic `common-area-lighting`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:07:11. lighting of public halls and common areas; common areas on tenant meter
- summary: Battery MIG-B6-011 (hl.ab 2; hl.ba 3; hl.and 4; al 3; cm.ab 0; cm.ba 0; cm.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:public halls?|common areas?|stairways?|hallways?|stair halls?)\b)[\s\S]{0,1200}?(?:\blight\w*)` / all / 2 / hl.ab: MCL 125.465; MCL 125.490
- `(?:\blight\w*)[\s\S]{0,1200}?(?:\b(?:public halls?|common areas?|stairways?|hallways?|stair halls?)\b)` / all / 3 / hl.ba: MCL 125.465; MCL 125.490; Mich Admin Code R 408.30537b
- `\A(?=[\s\S]*(?:\b(?:public halls?|common areas?|stairways?|hallways?|stair halls?)\b))(?=[\s\S]*(?:\blight\w*))` / all / 4 / hl.and: MCL 125.402; MCL 125.465; MCL 125.490; Mich Admin Code R 408.30537b
- `\badequately lighted\b` / all / 3 / al: MCL 125.465; MCL 288.710; MCL 288.715
- `(?:\b(?:common areas?|public halls?|outside the (?:premises|dwelling unit))\b)[\s\S]{0,1200}?(?:\b(?:meter\w*|electric service)\b)` / all / 0 / cm.ab
- `(?:\b(?:meter\w*|electric service)\b)[\s\S]{0,1200}?(?:\b(?:common areas?|public halls?|outside the (?:premises|dwelling unit))\b)` / all / 0 / cm.ba
- `\A(?=[\s\S]*(?:\b(?:common areas?|public halls?|outside the (?:premises|dwelling unit))\b))(?=[\s\S]*(?:\b(?:meter\w*|electric service)\b))` / all / 0 / cm.and
- positive hl @ MCL 125.465: passed ("In every multiple dwelling all public halls shall be kept adequately lighted at all times by the owner")
- positive al @ MCL 125.465: passed ("adequately lighted")
- positive cm @ SYNTH: passed ("If the electric meter of a tenant measures service to a common area outside the dwelling unit, the landlord shall disclo")

**MIG-B6-012** (cited), topic `balcony-inspection`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:07:24. balcony, deck and exterior elevated element inspection
- summary: Battery MIG-B6-012 (bal 3; bi.ab 1; bi.ba 0; bi.and 6; eee 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bbalcon(?:y|ies)\b` / all / 3 / bal: MCL 2.91; MCL 125.402; MCL 339.2012
- `(?:\b(?:balcon\w*|decks?|porches|exterior elevated elements?|load-bearing)\b)[\s\S]{0,1200}?(?:\binspect\w*)` / all / 1 / bi.ab: MCL 324.80142
- `(?:\binspect\w*)[\s\S]{0,1200}?(?:\b(?:balcon\w*|decks?|porches|exterior elevated elements?|load-bearing)\b)` / all / 0 / bi.ba
- `\A(?=[\s\S]*(?:\b(?:balcon\w*|decks?|porches|exterior elevated elements?|load-bearing)\b))(?=[\s\S]*(?:\binspect\w*))` / all / 6 / bi.and: MCL 125.402; MCL 168.871; MCL 324.80124; MCL 324.80142; MCL 750.535a; Mich Admin Code R 408.30505
- `\bexterior elevated elements?\b` / all / 0 / eee
- positive bal @ MCL 125.402: passed ("balconies")
- positive bi @ SYNTH: passed ("The owner of a building with 3 or more dwelling units shall have each balcony, deck and other exterior elevated element ")
- positive eee @ SYNTH: passed ("The owner of a building with 3 or more dwelling units shall have each balcony, deck and other exterior elevated element ")

**MIG-B6-013** (cited), topic `asbestos-hazards`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:07:40. asbestos notice to occupants; asbestos regime; no tenancy limb in plain term
- summary: Battery MIG-B6-013 (asb 76; aocc.ab 3; aocc.ba 3; aocc.and 5; anot.ab 15; anot.ba 14; anot.and 20 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\basbestos\b` / all / 76 / asb: MCL 125.2652; MCL 125.2663b; MCL 206.51g; MCL 208.1437; MCL 324.5519; MCL 324.5519a; MCL 324.5519b; MCL 324.11506; MCL 324.11514; MCL 324.19601; MCL 333.5453; MCL 333.26322; MCL 338.3101; MCL 338.3103; MCL 338.3201; MCL 338.3205; MCL 338.3207; MCL 338.3209; MCL 338.3211; MCL 338.3217; MCL 338.3219; MCL 338.3220; MCL 338.3221; MCL 338.3305; MCL 338.3307; MCL 338.3311; MCL 338.3315; MCL 338.3351; MCL 338.3353; MCL 338.3355; ... (46 more in the battery log)
- `(?:\basbestos\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|residents?|lessees?)\b)` / all / 3 / aocc.ab: MCL 333.5453; MCL 338.3103; MCL 338.3221
- `(?:\b(?:tenants?|occupants?|residents?|lessees?)\b)[\s\S]{0,1200}?(?:\basbestos\b)` / all / 3 / aocc.ba: MCL 333.5453; MCL 338.3103; MCL 338.3221
- `\A(?=[\s\S]*(?:\basbestos\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|residents?|lessees?)\b))` / all / 5 / aocc.and: MCL 208.1437; MCL 333.5453; MCL 338.3103; MCL 338.3221; MCL 339.2411
- `(?:\basbestos\b)[\s\S]{0,1200}?(?:\b(?:notif\w*|notice|disclos\w*))` / all / 15 / anot.ab: MCL 324.5519; MCL 324.5519b; MCL 324.11514; MCL 333.5453; MCL 338.3220; MCL 338.3311; MCL 338.3351; MCL 338.3355; MCL 338.3375; MCL 338.3385; MCL 338.3406; MCL 338.3411; MCL 338.3415a; MCL 339.6127; MCL 408.1035
- `(?:\b(?:notif\w*|notice|disclos\w*))[\s\S]{0,1200}?(?:\basbestos\b)` / all / 14 / anot.ba: MCL 324.5519; MCL 324.5519b; MCL 333.5453; MCL 338.3211; MCL 338.3220; MCL 338.3355; MCL 338.3375; MCL 338.3385; MCL 338.3406; MCL 338.3411; MCL 338.3412; MCL 338.3415a; MCL 339.2411; MCL 339.6127
- `\A(?=[\s\S]*(?:\basbestos\b))(?=[\s\S]*(?:\b(?:notif\w*|notice|disclos\w*)))` / all / 20 / anot.and: MCL 125.2652; MCL 324.5519; MCL 324.5519b; MCL 324.11514; MCL 333.5453; MCL 338.3211; MCL 338.3220; MCL 338.3311; MCL 338.3351; MCL 338.3355; MCL 338.3375; MCL 338.3385; MCL 338.3406; MCL 338.3411; MCL 338.3412; MCL 338.3415a; MCL 339.2411; MCL 339.6127; MCL 408.1035; MCL 565.957
- positive asb @ MCL 338.3220: passed ("friable asbestos materials")
- positive anot @ MCL 338.3220: passed ("An asbestos abatement contractor shall notify the department in writing")
- positive aocc @ MCL 333.5453: passed ("asbestos exposure")

**MIG-B6-014** (cited), topic `bed-bug-cooperation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:07:55. bed bugs, vermin and infestation duties of tenants and owners
- summary: Battery MIG-B6-014 (bb 0; vo.ab 17; vo.ba 18; vo.and 33; verm 8 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bbed ?bugs?\b|\bcimex\b` / all / 0 / bb
- `(?:\b(?:vermin|pests?|insects?|rodents?|infest\w*)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|owners?)\b)` / all / 17 / vo.ab: MCL 125.474; MCL 286.206; MCL 286.207; MCL 286.214; MCL 286.215; MCL 286.220; MCL 286.251; MCL 286.255; MCL 287.339b; MCL 287.717c; MCL 287.1106; MCL 288.690; MCL 320.2033; MCL 324.11555; MCL 324.11568; MCL 750.50; MCL 750.50b
- `(?:\b(?:tenants?|occupants?|lessees?|owners?)\b)[\s\S]{0,1200}?(?:\b(?:vermin|pests?|insects?|rodents?|infest\w*)\b)` / all / 18 / vo.ba: MCL 125.474; MCL 211.7dd; MCL 257.708a; MCL 286.214; MCL 286.216; MCL 286.220; MCL 286.251; MCL 286.252; MCL 286.255; MCL 288.700; MCL 288.710; MCL 288.715; MCL 290.759; MCL 317.251; MCL 324.11555; MCL 324.11558; MCL 324.41402; MCL 324.52502
- `\A(?=[\s\S]*(?:\b(?:vermin|pests?|insects?|rodents?|infest\w*)\b))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|owners?)\b))` / all / 33 / vo.and: MCL 125.474; MCL 211.7dd; MCL 211.34c; MCL 257.708a; MCL 286.206; MCL 286.207; MCL 286.214; MCL 286.215; MCL 286.216; MCL 286.220; MCL 286.251; MCL 286.252; MCL 286.255; MCL 287.339b; MCL 287.523; MCL 287.717c; MCL 287.1106; MCL 288.690; MCL 288.700; MCL 288.701; MCL 288.703; MCL 288.710; MCL 288.715; MCL 290.759; MCL 317.251; MCL 320.2033; MCL 324.11555; MCL 324.11558; MCL 324.11568; MCL 324.41402; ... (3 more in the battery log)
- `\bvermin\b` / all / 8 / verm: MCL 125.474; MCL 287.665; MCL 288.520; MCL 288.674; MCL 288.700; MCL 288.703; MCL 333.13809; MCL 600.2916
- positive vo @ MCL 125.474: passed ("The owner of every dwelling shall be responsible for keeping the entire building free from vermin")
- positive verm @ MCL 125.474: passed ("vermin")
- positive bb @ SYNTH: passed ("A tenant shall cooperate with the landlord in the inspection and treatment of bed bugs in the dwelling unit.")

**MIG-B6-015** (cited), topic `pest-control-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:08:51. pesticide and fumigation notice duties
- summary: Battery MIG-B6-015 (pn.ab 16; pn.ba 15; pn.and 23; pc 15; pt.ab 5; pt.ba 3; pt.and 9 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:(?:\bpesticid\w*|\bfumigat\w*|\bexterminat\w*|\bfumigants?\b))[\s\S]{0,1200}?(?:\b(?:notice|notif\w*|post\w*|warning)\b)` / all / 16 / pn.ab: MCL 324.8302; MCL 324.8304; MCL 324.8308a; MCL 324.8316; MCL 324.8316b; MCL 324.8321; MCL 324.8323; MCL 324.8325; MCL 324.8328; MCL 324.8713; MCL 324.20120a; MCL 324.41103; MCL 324.41104; MCL 324.72107; MCL 333.27958; MCL 479.2 [heading-only, read: MCL 600.2916]
- `(?:\b(?:notice|notif\w*|post\w*|warning)\b)[\s\S]{0,1200}?(?:(?:\bpesticid\w*|\bfumigat\w*|\bexterminat\w*|\bfumigants?\b))` / all / 15 / pn.ba: MCL 324.8302; MCL 324.8304; MCL 324.8308a; MCL 324.8316; MCL 324.8316b; MCL 324.8323; MCL 324.8325; MCL 324.8328; MCL 324.8713; MCL 324.8714; MCL 324.8716; MCL 324.11503; MCL 324.20115; MCL 324.41103; MCL 324.72107
- `\A(?=[\s\S]*(?:(?:\bpesticid\w*|\bfumigat\w*|\bexterminat\w*|\bfumigants?\b)))(?=[\s\S]*(?:\b(?:notice|notif\w*|post\w*|warning)\b))` / all / 23 / pn.and: MCL 324.8302; MCL 324.8304; MCL 324.8308a; MCL 324.8316; MCL 324.8316b; MCL 324.8321; MCL 324.8323; MCL 324.8325; MCL 324.8328; MCL 324.8333; MCL 324.8713; MCL 324.8714; MCL 324.8716; MCL 324.11503; MCL 324.16903; MCL 324.20101; MCL 324.20115; MCL 324.20120a; MCL 324.41103; MCL 324.41104; MCL 324.72107; MCL 333.27958; MCL 479.2 [heading-only, read: MCL 600.2916]
- `\bpest control\b` / all / 15 / pc: MCL 28.466; MCL 286.501; MCL 286.502; MCL 288.703; MCL 288.712; MCL 320.2033; MCL 324.8303; MCL 324.8304; MCL 324.8326; MCL 324.8334; MCL 324.11539; MCL 324.50502; MCL 409.305; MCL 409.324; MCL 565.955
- `(?:(?:\bpesticid\w*|\bfumigat\w*|\bexterminat\w*))[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|residents?|multiple dwellings?|apartments?)\b)` / all / 5 / pt.ab: MCL 324.8307a; MCL 324.8310; MCL 324.8310a; MCL 324.8313; MCL 324.8321
- `(?:\b(?:tenants?|lessees?|occupants?|residents?|multiple dwellings?|apartments?)\b)[\s\S]{0,1200}?(?:(?:\bpesticid\w*|\bfumigat\w*|\bexterminat\w*))` / all / 3 / pt.ba: MCL 289.1105; MCL 324.8310; MCL 324.8310a
- `\A(?=[\s\S]*(?:(?:\bpesticid\w*|\bfumigat\w*|\bexterminat\w*)))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|residents?|multiple dwellings?|apartments?)\b))` / all / 9 / pt.and: MCL 289.1105; MCL 289.1107; MCL 289.1107.amended; MCL 324.8307a; MCL 324.8310; MCL 324.8310a; MCL 324.8313; MCL 324.8321; MCL 324.20101
- positive pn @ MCL 324.8316: passed ("advance notice of the application of a pesticide")
- positive pc @ SYNTH: passed ("A landlord who contracts for periodic pest control service shall give the tenant written notice of the pest control comp")
- positive pt @ SYNTH: passed ("A landlord who contracts for periodic pest control service shall give the tenant written notice of the pest control comp")

**MIG-B6-016** (superseded by MIG-B6-022), topic `waterbed`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:09:02. waterbeds and liquid-filled furniture
- summary: Battery MIG-B6-016 (wbd 0; wm.ab 24; wm.ba 20; wm.and 32 units hit when run; 1 of 2 positives passed; controls passed (nonsense 0, must-hit 147)) positive wm@SYNTH recorded as failed
- `\bwater ?beds?\b|\bflotation (?:bedding|sleeping)\w*|\bliquid-filled\b|\bwater-filled\b` / all / 0 / wbd
- `(?:\bwater\w*)[\s\S]{0,1200}?(?:\b(?:mattress\w*|beds?)\b)` / all / 24 / wm.ab: MCL 24.207; MCL 280.423; MCL 280.491; MCL 280.492; MCL 280.493; MCL 280.541; MCL 280.542; MCL 280.543; MCL 289.1105; MCL 289.1111; MCL 324.5201; MCL 324.11103; MCL 324.30101; MCL 324.30103; MCL 324.30305b; MCL 324.30508; MCL 324.31503; MCL 324.32801; MCL 324.45706; MCL 324.47314; MCL 324.63527; MCL 324.72101; MCL 400.117a; Mich Admin Code R 408.30547e
- `(?:\b(?:mattress\w*|beds?)\b)[\s\S]{0,1200}?(?:\bwater\w*)` / all / 20 / wm.ba: MCL 280.491; MCL 280.492; MCL 280.493; MCL 280.541; MCL 280.542; MCL 280.543; MCL 287.1007; MCL 287.1107; MCL 289.1111; MCL 324.3108; MCL 324.5201; MCL 324.30101; MCL 324.30103; MCL 324.30305b; MCL 324.30901; MCL 324.31503; MCL 324.32801; MCL 324.63527; MCL 324.72101; Mich Admin Code R 408.30547e
- `\A(?=[\s\S]*(?:\bwater\w*))(?=[\s\S]*(?:\b(?:mattress\w*|beds?)\b))` / all / 32 / wm.and: MCL 24.207; MCL 123.740; MCL 125.2652; MCL 280.423; MCL 280.491; MCL 280.492; MCL 280.493; MCL 280.541; MCL 280.542; MCL 280.543; MCL 287.1007; MCL 287.1107; MCL 288.473; MCL 289.1105; MCL 289.1111; MCL 324.3108; MCL 324.5201; MCL 324.11103; MCL 324.11502; MCL 324.30101; MCL 324.30103; MCL 324.30305b; MCL 324.30508; MCL 324.30901; MCL 324.31503; MCL 324.32801; MCL 324.45706; MCL 324.47314; MCL 324.63527; MCL 324.72101; ... (2 more in the battery log)
- positive wbd @ SYNTH: passed ("A landlord shall not refuse to rent to a tenant because the tenant uses a waterbed or other flotation bedding.")
- positive wm @ SYNTH: FAILED ("A landlord shall not refuse to rent to a tenant because the tenant uses a waterbed or other flotation bedding.")

**MIG-B6-017** (cited), topic `portable-cooling-device`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:09:14. air conditioning or portable cooling right or duty
- summary: Battery MIG-B6-017 (ac 32; act.ab 4; act.ba 2; act.and 8; pcu 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bair condition\w*|\bcooling (?:devices?|units?|systems?)\b` / all / 32 / ac: MCL 3.558; MCL 3.578; MCL 18.1713; MCL 125.1411; MCL 125.1502a; MCL 205.54a; MCL 205.54t; MCL 205.54ee; MCL 205.94; MCL 205.94o; MCL 205.94cc; MCL 207.1045; MCL 211.9p; MCL 287.893; MCL 288.715; MCL 324.5901; MCL 324.17201; MCL 333.12501; MCL 339.5737; MCL 339.5801; MCL 339.5803; MCL 339.5807; MCL 339.5809; MCL 445.426; MCL 445.832; MCL 445.1102; MCL 460.1003; MCL 460.1095; MCL 565.957; Mich Admin Code R 408.30505; ... (2 more in the battery log)
- `(?:(?:\bair condition\w*|\bcooling\b))[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|rental|dwelling units?)\b)` / all / 4 / act.ab: MCL 125.1502a; MCL 211.9p; MCL 288.473; MCL 288.573
- `(?:\b(?:tenants?|lessees?|landlords?|rental|dwelling units?)\b)[\s\S]{0,1200}?(?:(?:\bair condition\w*|\bcooling\b))` / all / 2 / act.ba: MCL 211.9p; Mich Admin Code R 408.30547e
- `\A(?=[\s\S]*(?:(?:\bair condition\w*|\bcooling\b)))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|rental|dwelling units?)\b))` / all / 8 / act.and: MCL 125.1411; MCL 125.1502a; MCL 211.9; MCL 211.9p; MCL 288.473; MCL 288.573; Mich Admin Code R 408.30547d; Mich Admin Code R 408.30547e
- `\bportable cooling\b` / all / 1 / pcu: Mich Admin Code R 408.30505
- positive ac @ MCL 445.832: passed ("window room air conditioner")
- positive pcu @ Mich Admin Code R 408.30505: passed ("A portable cooling unit")
- positive act @ SYNTH: passed ("A landlord may not prohibit a tenant from installing a portable air conditioning unit in a window of the dwelling unit.")

**MIG-B6-018** (superseded by MIG-B6-023), topic `private-well-testing`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:09:30. wells and water supplies serving rental units; water testing
- summary: Battery MIG-B6-018 (pws 37; wu.ab 18; wu.ba 16; wu.and 32; wt.ab 54; wt.ba 66; wt.and 138 units hit when run; 2 of 3 positives passed; controls passed (nonsense 0, must-hit 147)) positive wt@MCL 325.1007 recorded as failed
- `\bpublic water suppl\w*` / all / 37 / pws: MCL 15.243; MCL 41.343; MCL 125.3506; MCL 324.3112; MCL 324.4107; MCL 324.4910; MCL 324.5401; MCL 324.5402; MCL 324.5403; MCL 324.5404; MCL 324.11506; MCL 324.11701; MCL 324.11710; MCL 324.31705; MCL 324.32802; MCL 324.34201; MCL 324.99923; MCL 325.1001a; MCL 325.1002; MCL 325.1003; MCL 325.1003b; MCL 325.1004; MCL 325.1005; MCL 325.1005a; MCL 325.1008; MCL 325.1009; MCL 325.1010; MCL 325.1011; MCL 325.1011c; MCL 325.1013; ... (7 more in the battery log)
- `(?:(?:\bwells?\b|\bwater suppl\w*|\bwaterworks\b))[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|living units?|rental)\b)` / all / 18 / wu.ab: MCL 4.415; MCL 18.361; MCL 205.51; MCL 257.1401; MCL 324.5401; MCL 324.61503a; MCL 324.61503c; MCL 324.61705; MCL 325.1002; MCL 325.1010; MCL 339.2601; MCL 440.2935; MCL 555.811; MCL 570.251; MCL 570.254; MCL 570.263; MCL 600.2919; MCL 600.2941
- `(?:\b(?:tenants?|lessees?|landlords?|living units?|rental)\b)[\s\S]{0,1200}?(?:(?:\bwells?\b|\bwater suppl\w*|\bwaterworks\b))` / all / 16 / wu.ba: MCL 29.14; MCL 211.8; MCL 257.1401; MCL 259.117; MCL 317.251; MCL 324.5401; MCL 324.61503a; MCL 324.61503c; MCL 325.1002; MCL 325.1010; MCL 555.811; MCL 557.203; MCL 570.251; MCL 570.263; MCL 600.2919; MCL 600.2941
- `\A(?=[\s\S]*(?:(?:\bwells?\b|\bwater suppl\w*|\bwaterworks\b)))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|living units?|rental)\b))` / all / 32 / wu.and: MCL 4.415; MCL 15.243; MCL 18.361; MCL 29.14; MCL 38.1133; MCL 205.51; MCL 205.92; MCL 211.8; MCL 211.34c; MCL 257.1401; MCL 259.117; MCL 317.251; MCL 324.5401; MCL 324.61503a; MCL 324.61503c; MCL 324.61701; MCL 324.61705; MCL 324.63701; MCL 325.1002; MCL 325.1010; MCL 330.1137; MCL 339.2601; MCL 400.713; MCL 440.2935; MCL 555.811; MCL 557.203; MCL 557.213; MCL 570.251; MCL 570.254; MCL 570.263; ... (2 more in the battery log)
- `(?:(?:\bwells?\b|\bwater suppl\w*))[\s\S]{0,1200}?(?:\b(?:test\w*|sampl\w*|analy[sz]\w*)\b)` / all / 54 / wt.ab: MCL 4.355; MCL 10.151; MCL 38.1133; MCL 125.402; MCL 287.703; MCL 288.631; MCL 288.690; MCL 288.700; MCL 289.7107; MCL 290.251; MCL 324.1301; MCL 324.5405; MCL 324.8501; MCL 324.8713; MCL 324.11512b; MCL 324.11512d; MCL 324.20120e; MCL 324.21307a; MCL 324.31704; MCL 324.32705; MCL 324.32706c; MCL 324.41901; MCL 324.44504; MCL 324.61506; MCL 324.61527; MCL 324.62501; MCL 324.62508; MCL 324.62509; MCL 324.62509a; MCL 324.62514; ... (24 more in the battery log)
- `(?:\b(?:test\w*|sampl\w*|analy[sz]\w*)\b)[\s\S]{0,1200}?(?:(?:\bwells?\b|\bwater suppl\w*))` / all / 66 / wt.ba: MCL 3.851; MCL 125.402; MCL 287.703; MCL 288.577; MCL 288.631; MCL 288.690; MCL 288.700; MCL 324.1301; MCL 324.3109e; MCL 324.11511b; MCL 324.11512b; MCL 324.11512d; MCL 324.11555; MCL 324.12102a; MCL 324.20120e; MCL 324.21302; MCL 324.21308a; MCL 324.32701; MCL 324.32705; MCL 324.32706c; MCL 324.61506; MCL 324.62501; MCL 324.62508; MCL 324.62509; MCL 324.62509a; MCL 324.62514; MCL 324.63405; MCL 324.63534; MCL 325.1011; MCL 325.1011c; ... (36 more in the battery log)
- `\A(?=[\s\S]*(?:(?:\bwells?\b|\bwater suppl\w*)))(?=[\s\S]*(?:\b(?:test\w*|sampl\w*|analy[sz]\w*)\b))` / all / 138 / wt.and: MCL 3.751; MCL 3.851; MCL 3.1031; MCL 3.1041; MCL 4.355; MCL 4.415; MCL 10.151; MCL 15.243; MCL 18.441; MCL 38.1133; MCL 125.402; MCL 287.703; MCL 287.1122c; MCL 288.503a; MCL 288.577; MCL 288.631; MCL 288.670a; MCL 288.690; MCL 288.700; MCL 289.7107; MCL 290.251; MCL 290.649i; MCL 324.1301; MCL 324.3109e; MCL 324.5405; MCL 324.8302; MCL 324.8501; MCL 324.8713; MCL 324.11102; MCL 324.11103; ... (108 more in the battery log)
- positive pws @ MCL 325.1002: passed (""Public water supply" means a waterworks system")
- positive wu @ MCL 325.1002: passed ("A waterworks system that supplies water to only 1 living unit")
- positive wt @ MCL 325.1007: FAILED ("The supplier of water shall collect water samples")

**MIG-B6-019** (cited), topic `hazardous-contamination-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:09:44. contaminated property transfer notice; environmental covenants; lessee reach
- summary: Battery MIG-B6-019 (tir 2; cl.ab 165; cl.ba 167; cl.and 261; ec 19 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\btransfer an interest in (?:that )?real property\b` / all / 2 / tir: MCL 324.20116; MCL 324.21304d
- `(?:\b(?:facility|hazardous substances?|contaminat\w*)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|lessees?|tenants?|renters?)\b)` / all / 165 / cl.ab: MCL 3.1041; MCL 18.1113; MCL 18.1114; MCL 18.1217; MCL 18.1221; MCL 18.1221a; MCL 18.1237c; MCL 18.1242; MCL 36.102; MCL 37.2502; MCL 41.75b; MCL 45.630a; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 117.5k; MCL 120.14; MCL 120.108; MCL 120.112; MCL 123.680; MCL 124.452; MCL 125.661; MCL 125.1253a; MCL 125.1351; MCL 125.1352; MCL 125.1422e; MCL 125.1504b; MCL 125.2113; MCL 125.2661; ... (135 more in the battery log)
- `(?:\b(?:lease[sd]?|lessees?|tenants?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:facility|hazardous substances?|contaminat\w*)\b)` / all / 167 / cl.ba: MCL 3.1041; MCL 18.321; MCL 18.1113; MCL 18.1114; MCL 18.1221; MCL 29.3c; MCL 36.102; MCL 37.1502; MCL 37.2502; MCL 41.75b; MCL 42.14; MCL 45.630a; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 117.5k; MCL 120.108; MCL 120.112; MCL 123.680; MCL 124.406; MCL 124.756; MCL 125.661; MCL 125.1253a; MCL 125.1351; MCL 125.1352; MCL 125.2029h; MCL 125.2114a; MCL 125.2302; MCL 125.4207; ... (137 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:facility|hazardous substances?|contaminat\w*)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|lessees?|tenants?|renters?)\b))` / all / 261 / cl.and: MCL 3.1041; MCL 18.321; MCL 18.361; MCL 18.1113; MCL 18.1114; MCL 18.1217; MCL 18.1221; MCL 18.1221a; MCL 18.1237c; MCL 18.1242; MCL 21.142a; MCL 29.3c; MCL 36.102; MCL 37.1502; MCL 37.2502; MCL 41.75b; MCL 42.14; MCL 45.630a; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 117.5k; MCL 120.14; MCL 120.108; MCL 120.112; MCL 123.680; MCL 123.1345; MCL 124.406; MCL 124.452; ... (231 more in the battery log)
- `\benvironmental covenants?\b|\bland or resource use restrictions?\b|\bland use or resource use restrictions?\b` / all / 19 / ec: MCL 324.11517; MCL 324.20101; MCL 324.20107a; MCL 324.20112a; MCL 324.20114; MCL 324.20114c; MCL 324.20114d; MCL 324.20116; MCL 324.20120a; MCL 324.20120b; MCL 324.20120c; MCL 324.20120f; MCL 324.20121; MCL 324.20126; MCL 324.21304c; MCL 324.21304d; MCL 324.21309a; MCL 324.21323a; MCL 565.104
- positive tir @ MCL 324.20116: passed ("shall not transfer an interest in that real property unless he or she provides written notice")
- positive ec @ MCL 324.20116: passed ("land or resource use restrictions")
- positive cl @ SYNTH: passed ("Before leasing a facility, the owner shall give the tenant written notice of the hazardous substance release.")

**MIG-B6-020** (cited), topic `defective-drywall-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:09:56. defective (corrosive) drywall
- summary: Battery MIG-B6-020 (dw 6; dd.ab 0; dd.ba 1; dd.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bdrywall\b|\bwallboard\b|\bgypsum board\b` / all / 6 / dw: MCL 324.11502; MCL 324.11504; MCL 324.11506; MCL 324.11567; Mich Admin Code R 408.30537a; Mich Admin Code R 408.30547d
- `(?:\b(?:drywall|wallboard|gypsum board)\b)[\s\S]{0,1200}?(?:\b(?:defective|corros\w*|sulfur\w*|disclos\w*))` / all / 0 / dd.ab
- `(?:\b(?:defective|corros\w*|sulfur\w*|disclos\w*))[\s\S]{0,1200}?(?:\b(?:drywall|wallboard|gypsum board)\b)` / all / 1 / dd.ba: Mich Admin Code R 408.30537a
- `\A(?=[\s\S]*(?:\b(?:drywall|wallboard|gypsum board)\b))(?=[\s\S]*(?:\b(?:defective|corros\w*|sulfur\w*|disclos\w*)))` / all / 1 / dd.and: Mich Admin Code R 408.30537a
- positive dw @ MCL 324.11502: passed ("Drywall")
- positive dd @ SYNTH: passed ("A landlord who has actual knowledge that the dwelling contains defective drywall shall disclose that fact to the tenant.")

**MIG-B6-021** (cited), topic `prop65-rental-warning`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:10:13. chemical exposure warnings; formaldehyde
- summary: Battery MIG-B6-021 (cw.ab 1; cw.ba 1; cw.and 1; fd 3; cwr.ab 5; cwr.ba 4; cwr.and 12 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:carcinogen\w*|reproductive toxic\w*|cancer|birth defects?)\b)[\s\S]{0,1200}?(?:\bwarn\w*)` / all / 1 / cw.ab: MCL 750.42a
- `(?:\bwarn\w*)[\s\S]{0,1200}?(?:\b(?:carcinogen\w*|reproductive toxic\w*|cancer|birth defects?)\b)` / all / 1 / cw.ba: MCL 750.42a
- `\A(?=[\s\S]*(?:\b(?:carcinogen\w*|reproductive toxic\w*|cancer|birth defects?)\b))(?=[\s\S]*(?:\bwarn\w*))` / all / 1 / cw.and: MCL 750.42a
- `\bformaldehyde\b` / all / 3 / fd: MCL 324.11551; MCL 333.13807; MCL 565.957
- `(?:\b(?:chemicals?|toxic substances?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|rental)\b)` / all / 5 / cwr.ab: MCL 125.2683; MCL 286.402; MCL 324.3310; MCL 324.63701; MCL 324.80180
- `(?:\b(?:tenants?|lessees?|occupants?|rental)\b)[\s\S]{0,1200}?(?:\b(?:chemicals?|toxic substances?)\b)` / all / 4 / cwr.ba: MCL 21.142a; MCL 289.1105; MCL 324.3310; MCL 324.80180
- `\A(?=[\s\S]*(?:\b(?:chemicals?|toxic substances?)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|rental)\b))` / all / 12 / cwr.and: MCL 4.415; MCL 21.142a; MCL 125.2683; MCL 125.4402; MCL 207.552; MCL 286.402; MCL 289.1105; MCL 289.1107; MCL 289.1107.amended; MCL 324.3310; MCL 324.63701; MCL 324.80180
- positive cw @ MCL 750.42a: passed ("cancer." (b) "WARNING")
- positive fd @ MCL 565.957: passed ("Urea Formaldehyde Foam Insulation")
- positive cwr @ SYNTH: passed ("A landlord shall post a clear and reasonable warning to tenants of exposure to a chemical known to cause cancer.")

**MIG-B6-022** (cited) (supersedes MIG-B6-016), topic `waterbed`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:10:56. rerun of MIG-B6-016: its wm synthetic positive failed (\bwater\w* consumed "waterbed"); widened second limb
- summary: Battery MIG-B6-022 (wbd 0; wm.ab 35; wm.ba 36; wm.and 60 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bwater ?beds?\b|\bflotation (?:bedding|sleeping)\w*|\bliquid-filled\b|\bwater-filled\b` / all / 0 / wbd
- `(?:\b(?:water|liquid|flotation)\w*)[\s\S]{0,1200}?(?:\b(?:mattress\w*|bedding|beds?|furniture)\b)` / all / 35 / wm.ab: MCL 24.207; MCL 205.54t; MCL 205.94o; MCL 280.423; MCL 280.491; MCL 280.492; MCL 280.493; MCL 280.541; MCL 280.542; MCL 280.543; MCL 287.740; MCL 287.893; MCL 289.1105; MCL 289.1111; MCL 324.5201; MCL 324.11103; MCL 324.11502; MCL 324.11505; MCL 324.30101; MCL 324.30103; MCL 324.30305b; MCL 324.30508; MCL 324.31503; MCL 324.32801; MCL 324.45706; MCL 324.47314; MCL 324.63527; MCL 324.72101; MCL 400.117a; MCL 487.3408; ... (5 more in the battery log)
- `(?:\b(?:mattress\w*|bedding|beds?|furniture)\b)[\s\S]{0,1200}?(?:\b(?:water|liquid|flotation)\w*)` / all / 36 / wm.ba: MCL 125.4201; MCL 125.4301; MCL 125.4603; MCL 125.4703; MCL 125.4803; MCL 211.34c; MCL 280.491; MCL 280.492; MCL 280.493; MCL 280.541; MCL 280.542; MCL 280.543; MCL 287.740b; MCL 287.893; MCL 287.1007; MCL 287.1107; MCL 289.1111; MCL 324.3108; MCL 324.5201; MCL 324.11502; MCL 324.11506; MCL 324.11568; MCL 324.30101; MCL 324.30103; MCL 324.30305b; MCL 324.30901; MCL 324.31503; MCL 324.32801; MCL 324.63527; MCL 324.72101; ... (6 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:water|liquid|flotation)\w*))(?=[\s\S]*(?:\b(?:mattress\w*|bedding|beds?|furniture)\b))` / all / 60 / wm.and: MCL 24.207; MCL 123.740; MCL 125.2652; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 125.4603; MCL 125.4703; MCL 125.4803; MCL 205.54t; MCL 205.94o; MCL 211.9; MCL 211.34c; MCL 280.423; MCL 280.491; MCL 280.492; MCL 280.493; MCL 280.541; MCL 280.542; MCL 280.543; MCL 287.740; MCL 287.740b; MCL 287.893; MCL 287.1007; MCL 287.1107; MCL 288.473; MCL 289.1105; MCL 289.1111; MCL 324.3108; MCL 324.5201; ... (30 more in the battery log)
- positive wbd @ SYNTH: passed ("A landlord shall not refuse to rent to a tenant because the tenant uses a waterbed or other flotation bedding.")
- positive wm @ SYNTH: passed ("A landlord shall not refuse to rent to a tenant because the tenant uses a waterbed or other flotation bedding.")

**MIG-B6-023** (cited) (supersedes MIG-B6-018), topic `private-well-testing`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:11:21. rerun of MIG-B6-018: its wt positive failed (325.1007 says "supplier of water"); \bwells?\b replaced by water-well phrases to avoid the "as well" trap
- summary: Battery MIG-B6-023 (pws 37; pw 15; wu.ab 3; wu.ba 5; wu.and 6; wt.ab 17; wt.ba 15; wt.and 32 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bpublic water suppl\w*` / all / 37 / pws: MCL 15.243; MCL 41.343; MCL 125.3506; MCL 324.3112; MCL 324.4107; MCL 324.4910; MCL 324.5401; MCL 324.5402; MCL 324.5403; MCL 324.5404; MCL 324.11506; MCL 324.11701; MCL 324.11710; MCL 324.31705; MCL 324.32802; MCL 324.34201; MCL 324.99923; MCL 325.1001a; MCL 325.1002; MCL 325.1003; MCL 325.1003b; MCL 325.1004; MCL 325.1005; MCL 325.1005a; MCL 325.1008; MCL 325.1009; MCL 325.1010; MCL 325.1011; MCL 325.1011c; MCL 325.1013; ... (7 more in the battery log)
- `\b(?:private|household|domestic|drinking water|water) wells?\b|\bwell water\b` / all / 15 / pw: MCL 288.631; MCL 324.8512; MCL 324.8716; MCL 324.11710; MCL 324.21102a; MCL 324.31701; MCL 324.32701; MCL 324.32801; MCL 324.61527; MCL 324.62509; MCL 333.12701; MCL 333.12704; MCL 333.12706; MCL 333.26322; MCL 339.5737
- `(?:(?:\bwater wells?\b|\bprivate wells?\b|\bwater suppl\w*|\bwaterworks\b|\bsupplier of water\b))[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|living units?|rental)\b)` / all / 3 / wu.ab: MCL 324.5401; MCL 325.1002; MCL 325.1010
- `(?:\b(?:tenants?|lessees?|landlords?|living units?|rental)\b)[\s\S]{0,1200}?(?:(?:\bwater wells?\b|\bprivate wells?\b|\bwater suppl\w*|\bwaterworks\b|\bsupplier of water\b))` / all / 5 / wu.ba: MCL 211.8; MCL 317.251; MCL 324.5401; MCL 325.1002; MCL 325.1010
- `\A(?=[\s\S]*(?:(?:\bwater wells?\b|\bprivate wells?\b|\bwater suppl\w*|\bwaterworks\b|\bsupplier of water\b)))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|living units?|rental)\b))` / all / 6 / wu.and: MCL 15.243; MCL 211.8; MCL 317.251; MCL 324.5401; MCL 325.1002; MCL 325.1010
- `(?:(?:\bwater wells?\b|\bprivate wells?\b|\bwell water\b|\bwater suppl\w*|\bsupplier of water\b))[\s\S]{0,1200}?(?:\b(?:test\w*|sampl\w*|analy[sz]\w*)\b)` / all / 17 / wt.ab: MCL 288.631; MCL 288.690; MCL 288.700; MCL 289.7107; MCL 324.5405; MCL 324.61506; MCL 324.61527; MCL 324.62509; MCL 324.63405; MCL 325.1007; MCL 325.1011c; MCL 325.1013; MCL 333.9621; MCL 333.12701; MCL 333.13807; MCL 339.5943; MCL 560.105
- `(?:\b(?:test\w*|sampl\w*|analy[sz]\w*)\b)[\s\S]{0,1200}?(?:(?:\bwater wells?\b|\bprivate wells?\b|\bwell water\b|\bwater suppl\w*|\bsupplier of water\b))` / all / 15 / wt.ba: MCL 288.631; MCL 288.690; MCL 288.700; MCL 324.3109e; MCL 324.11555; MCL 324.32701; MCL 324.61506; MCL 324.62509; MCL 324.63405; MCL 325.1007; MCL 325.1011; MCL 325.1011c; MCL 325.1013; MCL 333.9621; MCL 333.12701
- `\A(?=[\s\S]*(?:(?:\bwater wells?\b|\bprivate wells?\b|\bwell water\b|\bwater suppl\w*|\bsupplier of water\b)))(?=[\s\S]*(?:\b(?:test\w*|sampl\w*|analy[sz]\w*)\b))` / all / 32 / wt.and: MCL 15.243; MCL 288.631; MCL 288.690; MCL 288.700; MCL 289.7107; MCL 324.3109e; MCL 324.5405; MCL 324.11102; MCL 324.11504; MCL 324.11506; MCL 324.11555; MCL 324.11710; MCL 324.20101; MCL 324.32701; MCL 324.34201; MCL 324.61506; MCL 324.61527; MCL 324.62509; MCL 324.63405; MCL 324.99923; MCL 325.1007; MCL 325.1011; MCL 325.1011c; MCL 325.1013; MCL 333.9621; MCL 333.12701; MCL 333.13704; MCL 333.13807; MCL 333.26202; MCL 339.5737; ... (2 more in the battery log)
- positive pws @ MCL 325.1002: passed (""Public water supply" means a waterworks system")
- positive wu @ MCL 325.1002: passed ("A waterworks system that supplies water to only 1 living unit")
- positive wt @ MCL 325.1007: passed ("The supplier of water shall collect water samples")
- positive pw @ SYNTH: passed ("A landlord of a dwelling served by a private well shall give the tenant the results of the most recent well water test.")

**MIG-B6-024** (cited), topic `military-air-zone-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:11:37. military installation, airport noise or accident zone disclosures
- summary: Battery MIG-B6-024 (mi 19; md.ab 31; md.ba 26; md.and 69; an.ab 9; an.ba 6; an.and 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bmilitary installations?\b|\bmilitary air\w*` / all / 19 / mi: MCL 3.552; MCL 3.553; MCL 3.558; MCL 3.571; MCL 3.1041; MCL 125.2688; MCL 125.2688a; MCL 125.4402; MCL 125.4412c; MCL 259.109; MCL 380.502; MCL 380.504; MCL 380.552; MCL 380.556; MCL 380.1311d; MCL 380.1311g; MCL 436.1519; MCL 436.1611; MCL 600.6475
- `(?:\bmilitary\b)[\s\S]{0,1200}?(?:\b(?:disclos\w*|lease[sd]?|tenants?|buyers?|purchasers?)\b)` / all / 31 / md.ab: MCL 3.558; MCL 3.1041; MCL 18.321; MCL 32.223a; MCL 32.223b; MCL 32.224b; MCL 32.752; MCL 32.756; MCL 32.1085; MCL 32.1132a; MCL 36.102; MCL 211.7x; MCL 324.81101; MCL 333.16174; MCL 333.16188.added; MCL 393.360; MCL 421.20; MCL 432.103; MCL 436.2001; MCL 445.903k; MCL 445.1012; MCL 445.1014; MCL 460.9d; MCL 460.1225; MCL 500.6868; MCL 570.522; MCL 600.1207; MCL 600.2950a; MCL 600.2964; MCL 600.3212; ... (1 more in the battery log)
- `(?:\b(?:disclos\w*|lease[sd]?|tenants?|buyers?|purchasers?)\b)[\s\S]{0,1200}?(?:\bmilitary\b)` / all / 26 / md.ba: MCL 3.558; MCL 3.1041; MCL 18.321; MCL 18.1221; MCL 32.223a; MCL 32.223b; MCL 32.736; MCL 32.752; MCL 32.756; MCL 32.780; MCL 32.1085; MCL 211.7x; MCL 257.698; MCL 333.16174; MCL 333.17766g; MCL 393.360; MCL 436.1519; MCL 436.1529; MCL 436.2001; MCL 445.425; MCL 445.903k; MCL 445.1014; MCL 445.1016; MCL 570.522; MCL 712A.2f; Mich Admin Code R 460.138 [heading-only, read: MCL 32.224b]
- `\A(?=[\s\S]*(?:\bmilitary\b))(?=[\s\S]*(?:\b(?:disclos\w*|lease[sd]?|tenants?|buyers?|purchasers?)\b))` / all / 69 / md.and: MCL 3.558; MCL 3.1041; MCL 18.321; MCL 18.1221; MCL 18.1261; MCL 28.292; MCL 32.223a; MCL 32.223b; MCL 32.224b; MCL 32.736; MCL 32.752; MCL 32.756; MCL 32.780; MCL 32.1085; MCL 32.1132a; MCL 36.102; MCL 125.4402; MCL 125.4412c; MCL 168.759a; MCL 205.56a; MCL 205.94; MCL 206.30; MCL 211.7x; MCL 211.7cc; MCL 257.310; MCL 257.698; MCL 259.109; MCL 324.81101; MCL 333.16174; MCL 333.16187a.added; ... (39 more in the battery log)
- `(?:\b(?:airports?|air installations?|aircraft)\b)[\s\S]{0,1200}?(?:\b(?:noise|accident potential|clear zones?)\b)` / all / 9 / an.ab: MCL 211.7y; MCL 213.361; MCL 259.35; MCL 259.80b; MCL 259.86; MCL 259.109; MCL 259.114; MCL 259.138; MCL 259.631
- `(?:\b(?:noise|accident potential|clear zones?)\b)[\s\S]{0,1200}?(?:\b(?:airports?|air installations?|aircraft)\b)` / all / 6 / an.ba: MCL 211.7y; MCL 259.35; MCL 259.80b; MCL 259.86; MCL 259.109; MCL 259.138
- `\A(?=[\s\S]*(?:\b(?:airports?|air installations?|aircraft)\b))(?=[\s\S]*(?:\b(?:noise|accident potential|clear zones?)\b))` / all / 10 / an.and: MCL 211.7y; MCL 213.361; MCL 259.35; MCL 259.80b; MCL 259.86; MCL 259.109; MCL 259.114; MCL 259.138; MCL 259.631; MCL 324.81133
- positive mi @ MCL 3.552: passed ("federal military installation")
- positive md @ MCL 3.558: passed ("military installation or contract for the procurement")
- positive an @ MCL 211.7y: passed ("approach clear zones")

**MIG-B6-025** (cited), topic `ordnance-demolition-meter-disclosures`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:11:53. former ordnance; demolition notice to tenants; shared meters
- summary: Battery MIG-B6-025 (ord 3; dem.ab 9; dem.ba 8; dem.and 19; mtr.ab 13; mtr.ba 7; mtr.and 17 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bordnance\b|\bmunitions\b|\bunexploded\b` / all / 3 / ord: MCL 32.726; MCL 750.200; MCL 750.224
- `(?:\bdemoli\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?)\b)` / all / 9 / dem.ab: MCL 125.541; MCL 125.1411; MCL 125.4307; MCL 208.1437; MCL 252.133; MCL 338.3103; MCL 700.3715; MCL 700.5423; MCL 700.7817
- `(?:\b(?:tenants?|occupants?|lessees?)\b)[\s\S]{0,1200}?(?:\bdemoli\w*)` / all / 8 / dem.ba: MCL 125.540; MCL 125.541; MCL 125.2466; MCL 125.4307; MCL 125.4407; MCL 324.50104; MCL 338.3103; MCL 570.1104
- `\A(?=[\s\S]*(?:\bdemoli\w*))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?)\b))` / all / 19 / dem.and: MCL 125.540; MCL 125.541; MCL 125.1411; MCL 125.1502a; MCL 125.2466; MCL 125.4307; MCL 125.4402; MCL 125.4407; MCL 208.1437; MCL 252.133; MCL 324.50104; MCL 338.3103; MCL 339.2401; MCL 339.2411; MCL 399.205; MCL 570.1104; MCL 700.3715; MCL 700.5423; MCL 700.7817
- `(?:\bmeter\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|occupants?|lessees?|households?)\b)` / all / 13 / mtr.ab: MCL 18.1713; MCL 324.81133; MCL 400.1232; MCL 460.9q; Mich Admin Code R 460.102; Mich Admin Code R 460.102a; Mich Admin Code R 460.127; Mich Admin Code R 460.137; Mich Admin Code R 460.138; Mich Admin Code R 460.139; Mich Admin Code R 460.143; Mich Admin Code R 460.144; Mich Admin Code R 460.147
- `(?:\b(?:tenants?|occupants?|lessees?|households?)\b)[\s\S]{0,1200}?(?:\bmeter\w*)` / all / 7 / mtr.ba: MCL 18.1713; MCL 400.1232; MCL 460.9q; MCL 460.1007; Mich Admin Code R 460.102; Mich Admin Code R 460.102a; Mich Admin Code R 460.127
- `\A(?=[\s\S]*(?:\bmeter\w*))(?=[\s\S]*(?:\b(?:tenants?|occupants?|lessees?|households?)\b))` / all / 17 / mtr.and: MCL 18.1713; MCL 290.602; MCL 324.81133; MCL 400.1232; MCL 460.9d; MCL 460.9q; MCL 460.10t; MCL 460.1007; Mich Admin Code R 460.102; Mich Admin Code R 460.102a; Mich Admin Code R 460.127; Mich Admin Code R 460.137; Mich Admin Code R 460.138; Mich Admin Code R 460.139; Mich Admin Code R 460.143; Mich Admin Code R 460.144; Mich Admin Code R 460.147
- positive ord @ MCL 32.726: passed ("munitions of war")
- positive dem @ MCL 125.541: passed ("demolished, made safe, or properly maintained")
- positive mtr @ Mich Admin Code R 460.139: passed ("single-metered dwelling that is used as a residence for 3 or more separate households")

**MIG-B6-026** (cited), topic `shoreline-access-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:12:07. shoreline, dunes, erosion areas, bottomlands disclosures
- summary: Battery MIG-B6-026 (hre 39; sl.ab 8; sl.ba 5; sl.and 12 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bhigh[- ]risk erosion\b|\bcritical dunes?\b|\bshorelands?\b` / all / 39 / hre: MCL 299.13; MCL 324.502a; MCL 324.1301; MCL 324.2123a; MCL 324.32301; MCL 324.32302; MCL 324.32303; MCL 324.32304; MCL 324.32308; MCL 324.32309; MCL 324.32310; MCL 324.32313; MCL 324.32314; MCL 324.32315; MCL 324.35301; MCL 324.35302; MCL 324.35303; MCL 324.35304; MCL 324.35306; MCL 324.35307; MCL 324.35308; MCL 324.35310; MCL 324.35311; MCL 324.35311a; MCL 324.35311b; MCL 324.35312; MCL 324.35313; MCL 324.35315; MCL 324.35316; MCL 324.35317; ... (9 more in the battery log)
- `(?:\b(?:shorelines?|shorelands?|critical dunes?|high-risk erosion|bottomlands?|public trust)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|lessees?|tenants?|disclos\w*|renters?)\b)` / all / 8 / sl.ab: MCL 324.32502; MCL 324.32503; MCL 324.32505; MCL 324.33901; MCL 324.61505a; MCL 324.63701; MCL 324.64107; MCL 408.806
- `(?:\b(?:lease[sd]?|lessees?|tenants?|disclos\w*|renters?)\b)[\s\S]{0,1200}?(?:\b(?:shorelines?|shorelands?|critical dunes?|high-risk erosion|bottomlands?|public trust)\b)` / all / 5 / sl.ba: MCL 324.32502; MCL 324.32503; MCL 324.32505; MCL 324.63701; MCL 324.64107
- `\A(?=[\s\S]*(?:\b(?:shorelines?|shorelands?|critical dunes?|high-risk erosion|bottomlands?|public trust)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|lessees?|tenants?|disclos\w*|renters?)\b))` / all / 12 / sl.and: MCL 125.1999; MCL 254.324d; MCL 324.502a; MCL 324.32502; MCL 324.32503; MCL 324.32505; MCL 324.33901; MCL 324.61505a; MCL 324.63701; MCL 324.64107; MCL 408.806; Const 1963, art. IX, § 40
- positive hre @ MCL 324.35301: passed ("critical dune area")
- positive sl @ MCL 324.32502: passed ("unpatented lake bottomlands")

**MIG-B6-027** (cited), topic `energy-data-release`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:12:53. energy benchmarking and release of usage data to owners or third parties
- summary: Battery MIG-B6-027 (ud.ab 2; ud.ba 2; ud.and 2; bm.ab 2; bm.ba 6; bm.and 9; cdp 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:energy|electric\w*|gas|water)\b)[\s\S]{0,1200}?(?:\b(?:usage|consumption) data\b)` / all / 2 / ud.ab: Mich Admin Code R 460.117; Mich Admin Code R 460.153
- `(?:\b(?:usage|consumption) data\b)[\s\S]{0,1200}?(?:\b(?:energy|electric\w*|gas|water)\b)` / all / 2 / ud.ba: Mich Admin Code R 460.117; Mich Admin Code R 460.153
- `\A(?=[\s\S]*(?:\b(?:energy|electric\w*|gas|water)\b))(?=[\s\S]*(?:\b(?:usage|consumption) data\b))` / all / 2 / ud.and: Mich Admin Code R 460.117; Mich Admin Code R 460.153
- `(?:\bbenchmark\w*)[\s\S]{0,1200}?(?:\b(?:energy|buildings?)\b)` / all / 2 / bm.ab: MCL 388.1699nn; MCL 460.1005
- `(?:\b(?:energy|buildings?)\b)[\s\S]{0,1200}?(?:\bbenchmark\w*)` / all / 6 / bm.ba: MCL 125.2088s; MCL 125.2088t; MCL 380.1278a; MCL 388.1621h; MCL 388.1622p; MCL 460.1005
- `\A(?=[\s\S]*(?:\bbenchmark\w*))(?=[\s\S]*(?:\b(?:energy|buildings?)\b))` / all / 9 / bm.and: MCL 125.2088s; MCL 125.2088t; MCL 324.11502; MCL 380.1278a; MCL 380.1280f; MCL 388.1621h; MCL 388.1622p; MCL 388.1699nn; MCL 460.1005
- `\bcustomer data privacy\b|\bcustomer usage data\b` / all / 4 / cdp: MCL 484.2210; MCL 484.3311; Mich Admin Code R 460.113; Mich Admin Code R 460.153
- positive ud @ Mich Admin Code R 460.153: passed ("customer usage data, personally identifiable information, and certain other customer information are only disclosed to t")
- positive bm @ MCL 460.1005: passed ("benchmarking and rating energy performance")
- positive cdp @ Mich Admin Code R 460.153: passed ("customer data privacy tariff")

**MIG-B6-028** (cited), topic `recycling-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:13:04. recycling access or notice duties for landlords and multifamily housing
- summary: Battery MIG-B6-028 (rt.ab 4; rt.ba 5; rt.and 14; rc 98 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\brecycl\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lessees?|multifamily|multiple dwellings?|apartments?|residents?)\b)` / all / 4 / rt.ab: MCL 257.217c; MCL 324.11502; MCL 324.11550; MCL 324.11578
- `(?:\b(?:tenants?|landlords?|lessees?|multifamily|multiple dwellings?|apartments?|residents?)\b)[\s\S]{0,1200}?(?:\brecycl\w*)` / all / 5 / rt.ba: MCL 257.217c; MCL 324.11502; MCL 324.11504; MCL 324.11550; MCL 324.11578
- `\A(?=[\s\S]*(?:\brecycl\w*))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lessees?|multifamily|multiple dwellings?|apartments?|residents?)\b))` / all / 14 / rt.and: MCL 257.217c; MCL 257.248; MCL 257.251; MCL 257.801; MCL 324.11103; MCL 324.11502; MCL 324.11504; MCL 324.11550; MCL 324.11578; MCL 324.11587; MCL 324.16901; MCL 324.19508; MCL 324.20126; MCL 445.903
- `\brecycling\b` / all / 98 / rc: MCL 18.1261a; MCL 18.1713; MCL 21.142b; MCL 45.582; MCL 45.584; MCL 124.508a; MCL 124.669; MCL 125.2652; MCL 205.51; MCL 205.54t; MCL 205.54ee; MCL 205.92; MCL 205.94o; MCL 205.94cc; MCL 205.184a; MCL 206.51g; MCL 211.9f; MCL 257.33b; MCL 257.224; MCL 257.801; MCL 299.13; MCL 324.905; MCL 324.1403; MCL 324.2511; MCL 324.5301; MCL 324.8322; MCL 324.8716; MCL 324.11103; MCL 324.11106; MCL 324.11107; ... (68 more in the battery log) [heading-only, read: MCL 333.20153]
- positive rt @ MCL 324.11578: passed ("expanding convenient access and recycling at single and multifamily dwellings")
- positive rc @ MCL 324.11502: passed ("curbside recycling")

**MIG-B6-029** (superseded by MIG-B6-030), topic `smoke-drift-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:13:21. smoke drift, secondhand smoke and smoking in residential buildings
- summary: Battery MIG-B6-029 (sr.ab 7; sr.ba 10; sr.and 17; sd 0; sn.ab 1; sn.ba 2; sn.and 3 units hit when run; 2 of 3 positives passed; controls passed (nonsense 0, must-hit 147)) positive sr@MCL 333.12601 recorded as failed
- `(?:\bsmok\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|apartments?|dwelling units?|multi-?unit|residen\w*)\b)` / all / 7 / sr.ab: MCL 125.482a; MCL 125.1504c; MCL 125.1504j; MCL 333.26427; MCL 333.27954; MCL 390.1262; Mich Admin Code R 408.30546
- `(?:\b(?:tenants?|lessees?|apartments?|dwelling units?|multi-?unit|residen\w*)\b)[\s\S]{0,1200}?(?:\bsmok\w*)` / all / 10 / sr.ba: MCL 125.482a; MCL 125.1504b; MCL 125.1504c; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; MCL 324.48721; MCL 333.26427; MCL 333.27954; Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\bsmok\w*))(?=[\s\S]*(?:\b(?:tenants?|lessees?|apartments?|dwelling units?|multi-?unit|residen\w*)\b))` / all / 17 / sr.and: MCL 125.482a; MCL 125.1504b; MCL 125.1504c; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; MCL 289.1111; MCL 324.48721; MCL 333.12601; MCL 333.26423; MCL 333.26427; MCL 333.27954; MCL 333.29103; MCL 339.5701; MCL 390.1262; Mich Admin Code R 408.30546
- `\bsecond-?hand smoke\b|\bsmoke drift\w*|\benvironmental tobacco smoke\b` / all / 0 / sd
- `(?:\bsmok\w*)[\s\S]{0,1200}?(?:\bnuisance\w*)` / all / 1 / sn.ab: MCL 288.700
- `(?:\bnuisance\w*)[\s\S]{0,1200}?(?:\bsmok\w*)` / all / 2 / sn.ba: MCL 289.8107; MCL 324.51503b
- `\A(?=[\s\S]*(?:\bsmok\w*))(?=[\s\S]*(?:\bnuisance\w*))` / all / 3 / sn.and: MCL 288.700; MCL 289.8107; MCL 324.51503b
- positive sr @ MCL 333.12601: FAILED ("A structure used primarily as the residence of the owner or lessee")
- positive sd @ SYNTH: passed ("A tenant may bring an action for nuisance caused by secondhand smoke that drifts into the dwelling unit from another uni")
- positive sn @ SYNTH: passed ("A tenant may bring an action for nuisance caused by secondhand smoke that drifts into the dwelling unit from another uni")

**MIG-B6-030** (cited) (supersedes MIG-B6-029), topic `smoke-drift-waiver`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:13:53. rerun of MIG-B6-029: its sr positive at MCL 333.12601 failed the ordered runs (terms more than 1,200 characters apart); positive moved to MCL 125.482a, 12601 still reached by sr.and
- summary: Battery MIG-B6-030 (sr.ab 7; sr.ba 10; sr.and 17; sd 0; sn.ab 1; sn.ba 2; sn.and 3 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsmok\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|apartments?|dwelling units?|multi-?unit|residen\w*)\b)` / all / 7 / sr.ab: MCL 125.482a; MCL 125.1504c; MCL 125.1504j; MCL 333.26427; MCL 333.27954; MCL 390.1262; Mich Admin Code R 408.30546
- `(?:\b(?:tenants?|lessees?|apartments?|dwelling units?|multi-?unit|residen\w*)\b)[\s\S]{0,1200}?(?:\bsmok\w*)` / all / 10 / sr.ba: MCL 125.482a; MCL 125.1504b; MCL 125.1504c; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; MCL 324.48721; MCL 333.26427; MCL 333.27954; Mich Admin Code R 408.30546
- `\A(?=[\s\S]*(?:\bsmok\w*))(?=[\s\S]*(?:\b(?:tenants?|lessees?|apartments?|dwelling units?|multi-?unit|residen\w*)\b))` / all / 17 / sr.and: MCL 125.482a; MCL 125.1504b; MCL 125.1504c; MCL 125.1504j; MCL 125.1513c; MCL 125.2307; MCL 211.7cc; MCL 289.1111; MCL 324.48721; MCL 333.12601; MCL 333.26423; MCL 333.26427; MCL 333.27954; MCL 333.29103; MCL 339.5701; MCL 390.1262; Mich Admin Code R 408.30546
- `\bsecond-?hand smoke\b|\bsmoke drift\w*|\benvironmental tobacco smoke\b` / all / 0 / sd
- `(?:\bsmok\w*)[\s\S]{0,1200}?(?:\bnuisance\w*)` / all / 1 / sn.ab: MCL 288.700
- `(?:\bnuisance\w*)[\s\S]{0,1200}?(?:\bsmok\w*)` / all / 2 / sn.ba: MCL 289.8107; MCL 324.51503b
- `\A(?=[\s\S]*(?:\bsmok\w*))(?=[\s\S]*(?:\bnuisance\w*))` / all / 3 / sn.and: MCL 288.700; MCL 289.8107; MCL 324.51503b
- positive sr @ MCL 125.482a: passed ("Each dwelling unit")
- positive sd @ SYNTH: passed ("A tenant may bring an action for nuisance caused by secondhand smoke that drifts into the dwelling unit from another uni")
- positive sn @ SYNTH: passed ("A tenant may bring an action for nuisance caused by secondhand smoke that drifts into the dwelling unit from another uni")

**MIG-B7-001** (cited), topic `cure-and-eviction-grounds`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:40:53. statutory cure period or materiality requirement for non-rent lease breach; lease-set cure periods
- summary: Battery MIG-B7-001 (cure.ab 19; cure.ba 15; cure.and 34; mat.ab 7; mat.ba 5; mat.and 8; remact 45; restore.ab 2; restore.ba 2; restore.and 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bcur(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 19 / cure.ab: MCL 125.1422; MCL 125.4412a; MCL 125.4412c; MCL 141.1369; MCL 205.51a; MCL 205.92b; MCL 324.61503c; MCL 440.2870; MCL 440.2960; MCL 440.2963; MCL 440.2964; MCL 440.2966; MCL 440.2967; MCL 500.3406aa; MCL 554.635; MCL 554.636; MCL 559.212; MCL 600.5775; Mich Admin Code R 460.144
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bcur(?:e|es|ed|ing)\b)` / all / 15 / cure.ba: MCL 141.1369; MCL 257.1403; MCL 259.145; MCL 324.61503c; MCL 440.2870; MCL 440.2960; MCL 440.2963; MCL 440.2964; MCL 440.2966; MCL 440.2967; MCL 554.635; MCL 554.636; MCL 559.212; MCL 600.5744; MCL 600.5775
- `\A(?=[\s\S]*(?:\bcur(?:e|es|ed|ing)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 34 / cure.and: MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 125.1422; MCL 125.4412a; MCL 125.4412c; MCL 141.1369; MCL 205.51a; MCL 205.92b; MCL 257.1403; MCL 259.118; MCL 259.145; MCL 324.61503c; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.16189; MCL 380.12b; MCL 421.43; MCL 440.2870; MCL 440.2960; MCL 440.2963; MCL 440.2964; MCL 440.2966; MCL 440.2967; MCL 460.9d; MCL 500.3406aa; MCL 554.635; MCL 554.636; ... (4 more in the battery log)
- `(?:\bmaterial(?:ly)? (?:breach\w*|terms?|violat\w*|noncomplian\w*|provisions?)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 7 / mat.ab: MCL 445.545; MCL 445.970; MCL 445.1574; MCL 445.1937; MCL 451.2201; MCL 500.1202; MCL 554.1012
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bmaterial(?:ly)? (?:breach\w*|terms?|violat\w*|noncomplian\w*|provisions?)\b)` / all / 5 / mat.ba: MCL 445.970; MCL 445.1574; MCL 500.1202; MCL 554.1012; MCL 600.5744
- `\A(?=[\s\S]*(?:\bmaterial(?:ly)? (?:breach\w*|terms?|violat\w*|noncomplian\w*|provisions?)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 8 / mat.and: MCL 445.545; MCL 445.970; MCL 445.1574; MCL 445.1937; MCL 451.2201; MCL 500.1202; MCL 554.1012; MCL 600.5744
- `\bremedial action\b` / all / 45 / remact: MCL 125.72; MCL 125.2664a; MCL 324.3109a; MCL 324.8803; MCL 324.11115b; MCL 324.11519; MCL 324.20101; MCL 324.20114; MCL 324.20114c; MCL 324.20114d; MCL 324.20114e; MCL 324.20118; MCL 324.20120; MCL 324.20120a; MCL 324.20120c; MCL 324.20120d; MCL 324.20120e; MCL 324.20126; MCL 324.20132; MCL 324.20138; MCL 324.20140; MCL 324.20301; MCL 324.21303; MCL 324.31524; MCL 324.63539; MCL 330.1137; MCL 330.1170; MCL 330.1754; MCL 330.1755; MCL 330.1780; ... (15 more in the battery log) [heading-only, read: MCL 333.13738]
- `(?:\bsubstantially restore\w*)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 2 / restore.ab: MCL 600.5714; MCL 600.5744
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bsubstantially restore\w*)` / all / 2 / restore.ba: MCL 600.5714; MCL 600.5744
- `\A(?=[\s\S]*(?:\bsubstantially restore\w*))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 2 / restore.and: MCL 600.5714; MCL 600.5744
- positive cure @ MCL 559.212: passed ("correct the alleged breach by the tenant")
- positive mat @ MCL 600.5744: passed ("other material breaches of the executory contract")
- positive remact @ MCL 600.5716: passed ("the time to take remedial action")
- positive restore @ MCL 600.5714: passed ("to substantially restore or repair the premises")

**MIG-B7-002** (cited), topic `forfeiture-redemption`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:49:11. relief from forfeiture of a lease; forfeiture near tenancy words; equitable redemption
- summary: Battery MIG-B7-002 (rff.ab 0; rff.ba 0; rff.and 0; forf.ab 18; forf.ba 18; forf.and 31; eqr 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\brelie(?:f|ve|ved|ves|ving) (?:from|against) (?:the |a |any )?forfeit\w*)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all,extra:mcr / 0 / rff.ab
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\brelie(?:f|ve|ved|ves|ving) (?:from|against) (?:the |a |any )?forfeit\w*)` / all,extra:mcr / 0 / rff.ba
- `\A(?=[\s\S]*(?:\brelie(?:f|ve|ved|ves|ving) (?:from|against) (?:the |a |any )?forfeit\w*))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all,extra:mcr / 0 / rff.and
- `(?:\bforfeit\w*)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?)\b)` / all,extra:mcr / 18 / forf.ab: MCL 211.7cc; MCL 211.78i; MCL 211.78k; MCL 257.233; MCL 257.244; MCL 257.625n; MCL 324.20126; MCL 324.21323a; MCL 324.33934; MCL 324.43556; MCL 436.1901; MCL 456.2; MCL 554.281; MCL 565.4; MCL 570.1107; MCL 600.5744; MCL 600.6057; MCL 750.540c
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?)\b)[\s\S]{0,1200}?(?:\bforfeit\w*)` / all,extra:mcr / 18 / forf.ba: MCL 124.755; MCL 211.7cc; MCL 211.27a; MCL 211.78k; MCL 257.233; MCL 257.625n; MCL 324.33934; MCL 324.43556; MCL 432.207a; MCL 456.2; MCL 554.281; MCL 554.609; MCL 565.4; MCL 570.1107; MCL 600.5744; MCL 600.6057; 2026-PA-0102; MCR 4.101
- `\A(?=[\s\S]*(?:\bforfeit\w*))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?)\b))` / all,extra:mcr / 31 / forf.and: MCL 124.755; MCL 205.426; MCL 211.7cc; MCL 211.27a; MCL 211.44; MCL 211.78i; MCL 211.78k; MCL 211.78t; MCL 257.233; MCL 257.244; MCL 257.625n; MCL 324.20126; MCL 324.21323a; MCL 324.33934; MCL 324.43556; MCL 324.63516; MCL 432.207a; MCL 436.1901; MCL 456.2; MCL 487.3401; MCL 554.281; MCL 554.609; MCL 554.1027; MCL 565.4; MCL 570.1107; MCL 600.5744; MCL 600.6057; MCL 700.2803; MCL 750.540c; 2026-PA-0102; ... (1 more in the battery log)
- `\bequitable right of redemption\b` / all,extra:mcr / 1 / eqr: MCL 600.5744
- positive forf @ MCL 554.281: passed ("forfeiture")
- positive eqr @ MCL 600.5744: passed ("equitable right of redemption")
- positive rff @ SYNTH: passed ("the court may grant the tenant relief from forfeiture of the lease on payment of the rent due")

**MIG-B7-003** (cited), topic `redemption`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:49:31. partial payment wording; third-party or assistance payments near eviction; judgment amount
- summary: Battery MIG-B7-003 (pp.ab 7; pp.ba 3; pp.and 8; tpp.ab 1; tpp.ba 3; tpp.and 4; amt 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bpartial(?:ly)? (?:payments?|paid|rent)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all,extra:mcr / 7 / pp.ab: MCL 205.243; MCL 211.762; MCL 324.33934; MCL 451.412; MCL 492.102; MCL 570.592; MCL 570.1115
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bpartial(?:ly)? (?:payments?|paid|rent)\b)` / all,extra:mcr / 3 / pp.ba: MCL 211.762; MCL 324.33934; MCL 570.1115
- `\A(?=[\s\S]*(?:\bpartial(?:ly)? (?:payments?|paid|rent)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all,extra:mcr / 8 / pp.and: MCL 205.243; MCL 211.762; MCL 324.33934; MCL 451.412; MCL 492.102; MCL 570.592; MCL 570.1115; MCR 4.201
- `(?:\b(?:third[- ]part(?:y|ies)|charit\w*|rental assistance|emergency rental assistance|rent vendoring)\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 1 / tpp.ab: MCL 400.57i
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\b(?:third[- ]part(?:y|ies)|charit\w*|rental assistance|emergency rental assistance|rent vendoring)\b)` / all,extra:mcr / 3 / tpp.ba: MCL 400.57i; MCL 600.5739; MCR 4.202
- `\A(?=[\s\S]*(?:\b(?:third[- ]part(?:y|ies)|charit\w*|rental assistance|emergency rental assistance|rent vendoring)\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 4 / tpp.and: MCL 400.57i; MCL 600.5739; MCR 4.201; MCR 4.202
- `\bamount stated in the judgment\b` / all,extra:mcr / 1 / amt: MCL 600.5744
- positive amt @ MCL 600.5744: passed ("the amount stated in the judgment")
- positive tpp @ MCL 400.57i: passed ("rent vendoring program")
- positive pp @ SYNTH: passed ("acceptance of a partial payment of rent by the landlord does not waive the notice to quit")

**MIG-B7-004** (cited), topic `possession-bond`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:49:46. bonds near eviction words; escrow orders
- summary: Battery MIG-B7-004 (pb.ab 6; pb.ba 7; pb.and 8; esc 3 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bbonds?\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 6 / pb.ab: MCL 570.417; MCL 570.418; MCL 600.5744; MCL 600.8322; MCR 3.106; MCR 4.201
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\bbonds?\b)` / all,extra:mcr / 7 / pb.ba: MCL 570.417; MCL 570.418; MCL 600.5744; MCL 600.8322; MCL 600.8513; MCR 3.106; MCR 4.201
- `\A(?=[\s\S]*(?:\bbonds?\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 8 / pb.and: MCL 570.417; MCL 570.418; MCL 600.2559; MCL 600.5744; MCL 600.8322; MCL 600.8513; MCR 3.106; MCR 4.201
- `\bescrow (?:orders?|deposits?)\b` / all,extra:mcr / 3 / esc: MCL 431.319a; MCL 431.319b; MCR 4.201
- positive pb @ MCL 600.5744: passed ("a bond to stay proceedings is filed")
- positive esc @ MCR 4.201: passed ("escrow order")

**MIG-B7-005** (cited), topic `eviction-hardship-stay`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:50:15. eviction moratoria; stays near eviction; weather, holiday or hardship limits
- summary: Battery MIG-B7-005 (mor.ab 0; mor.ba 0; mor.and 2; stay.ab 2; stay.ba 2; stay.and 2; wx.ab 0; wx.ba 0; wx.and 0; wor 12 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bmoratori\w*)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|foreclos\w*|possession)\b)` / all,extra:mcr / 0 / mor.ab
- `(?:\b(?:evict\w*|summary proceedings?|foreclos\w*|possession)\b)[\s\S]{0,1200}?(?:\bmoratori\w*)` / all,extra:mcr / 0 / mor.ba
- `\A(?=[\s\S]*(?:\bmoratori\w*))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|foreclos\w*|possession)\b))` / all,extra:mcr / 2 / mor.and: MCL 487.1717; MCL 500.8114
- `(?:\bstay(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 2 / stay.ab: MCL 600.5744; MCR 4.201
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\bstay(?:s|ed|ing)?\b)` / all,extra:mcr / 2 / stay.ba: MCL 600.5744; MCR 4.201
- `\A(?=[\s\S]*(?:\bstay(?:s|ed|ing)?\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 2 / stay.and: MCL 600.5744; MCR 4.201
- `(?:\b(?:winter|cold weather|weather|holidays?|hardship)\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 0 / wx.ab
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\b(?:winter|cold weather|weather|holidays?|hardship)\b)` / all,extra:mcr / 0 / wx.ba
- `\A(?=[\s\S]*(?:\b(?:winter|cold weather|weather|holidays?|hardship)\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 0 / wx.and
- `\bwrit of restitution\b` / all,extra:mcr / 12 / wor: MCL 570.413; MCL 570.417; MCL 570.418; MCL 600.2576; MCL 600.5741; MCL 600.5744; MCL 600.5750; MCL 600.5757; MCL 600.5781; MCL 600.8322; MCR 2.103; MCR 4.202
- positive mor @ SYNTH: passed ("a local unit of government shall not adopt a moratorium on evictions")
- positive stay @ MCR 4.201: passed ("the court must stay further proceedings")
- positive wx @ SYNTH: passed ("a writ of restitution shall not be executed during winter weather")
- positive wor @ MCL 600.5744: passed ("writ of restitution")

**MIG-B7-006** (cited), topic `eviction-service-party`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:50:35. lease-designated agent for service; service of process near tenancy words
- summary: Battery MIG-B7-006 (agt.ab 0; agt.ba 0; agt.and 0; sopt.ab 5; sopt.ba 1; sopt.and 15; sop 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bagents? (?:for|to receive|authorized (?:by written appointment or by law )?to receive) (?:the )?(?:service|process))[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all,extra:mcr / 0 / agt.ab
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bagents? (?:for|to receive|authorized (?:by written appointment or by law )?to receive) (?:the )?(?:service|process))` / all,extra:mcr / 0 / agt.ba
- `\A(?=[\s\S]*(?:\bagents? (?:for|to receive|authorized (?:by written appointment or by law )?to receive) (?:the )?(?:service|process)))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all,extra:mcr / 0 / agt.and
- `(?:\bservice of process\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all,extra:mcr / 5 / sopt.ab: MCL 257.248; MCL 451.2201; MCL 550.1207; MCL 554.636; MCR 4.201
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bservice of process\b)` / all,extra:mcr / 1 / sopt.ba: MCL 554.636
- `\A(?=[\s\S]*(?:\bservice of process\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all,extra:mcr / 15 / sopt.and: MCL 3.692; MCL 3.1012; MCL 3.1041; MCL 117.4q; MCL 129.264; MCL 257.248; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.16189; MCL 333.16190; MCL 451.2201; MCL 550.1207; MCL 554.636; MCR 4.201
- `\bauthorized by written appointment\b` / all,extra:mcr / 2 / sop: MCL 600.1930; MCR 2.105
- positive agt @ SYNTH: passed ("the tenant may designate in the lease an agent to receive service of process")
- positive sopt @ SYNTH: passed ("service of process on the tenant")
- positive sop @ MCR 2.105: passed ("authorized by written appointment")

**MIG-B7-007** (cited), topic `cold-weather-vacate-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:50:56. tenant notice before vacating in cold weather; freezing near tenancy words
- summary: Battery MIG-B7-007 (frz.ab 0; frz.ba 3; frz.and 6; cold.ab 0; cold.ba 1; cold.and 3; pipe 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:freez\w*|froze\w*|frost)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 0 / frz.ab
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:freez\w*|froze\w*|frost)\b)` / all / 3 / frz.ba: MCL 288.573; MCL 418.155; MCL 421.43
- `\A(?=[\s\S]*(?:\b(?:freez\w*|froze\w*|frost)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 6 / frz.and: MCL 141.1552; MCL 288.573; MCL 324.81133; MCL 324.82126; MCL 418.155; MCL 421.43
- `(?:\b(?:cold weather|winter|heating season)\b)[\s\S]{0,1200}?(?:\b(?:vacat\w*|abandon\w*|move out|remov\w* from)\b)` / all / 0 / cold.ab
- `(?:\b(?:vacat\w*|abandon\w*|move out|remov\w* from)\b)[\s\S]{0,1200}?(?:\b(?:cold weather|winter|heating season)\b)` / all / 1 / cold.ba: MCL 324.11506
- `\A(?=[\s\S]*(?:\b(?:cold weather|winter|heating season)\b))(?=[\s\S]*(?:\b(?:vacat\w*|abandon\w*|move out|remov\w* from)\b))` / all / 3 / cold.and: MCL 211.7cc; MCL 211.34d; MCL 324.11506
- `\bpipes? liable to (?:injury|freez\w*)` / all / 0 / pipe
- positive frz @ SYNTH: passed ("pipes liable to injury from freezing, the tenant shall give the landlord notice")
- positive cold @ SYNTH: passed ("between November 15 and April 15 a tenant who vacates in winter")
- positive pipe @ SYNTH: passed ("pipes liable to injury from freezing")

**MIG-B7-008** (cited), topic `social-security-defense`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:51:20. late benefit or assistance payment as eviction defense; rent vendoring
- summary: Battery MIG-B7-008 (ben.ab 1; ben.ba 1; ben.and 1; late.ab 10; late.ba 7; late.and 36; rv 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\b(?:social security|supplemental security income|public assistance|housing assistance payments?|rent vendoring|vouchers?)\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 1 / ben.ab: MCL 400.57i
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\b(?:social security|supplemental security income|public assistance|housing assistance payments?|rent vendoring|vouchers?)\b)` / all,extra:mcr / 1 / ben.ba: MCL 400.57i
- `\A(?=[\s\S]*(?:\b(?:social security|supplemental security income|public assistance|housing assistance payments?|rent vendoring|vouchers?)\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 1 / ben.and: MCL 400.57i
- `(?:\b(?:late|delay\w*|untimely|delinquen\w*)\b)[\s\S]{0,1200}?(?:\b(?:housing assistance payments?|rent vendoring|social security|public assistance)\b)` / all,extra:mcr / 10 / late.ab: MCL 38.862; MCL 205.13; MCL 257.248b; MCL 257.248e; MCL 330.1100d; MCL 400.57i; MCL 400.119b; MCL 421.17; Mich Admin Code R 460.102; MCR 6.201
- `(?:\b(?:housing assistance payments?|rent vendoring|social security|public assistance)\b)[\s\S]{0,1200}?(?:\b(?:late|delay\w*|untimely|delinquen\w*)\b)` / all,extra:mcr / 7 / late.ba: MCL 257.248b; MCL 324.81101; MCL 400.57i; MCL 400.1207; MCL 421.13; MCL 445.903; MCL 780.991.amended [heading-only, read: MCL 38.1342]
- `\A(?=[\s\S]*(?:\b(?:late|delay\w*|untimely|delinquen\w*)\b))(?=[\s\S]*(?:\b(?:housing assistance payments?|rent vendoring|social security|public assistance)\b))` / all,extra:mcr / 36 / late.and: MCL 15.234; MCL 15.243; MCL 28.292; MCL 38.862; MCL 38.1342; MCL 205.13; MCL 211.7u; MCL 211.7cc; MCL 257.248b; MCL 257.248e; MCL 324.81101; MCL 330.1100d; MCL 333.2891; MCL 333.27401; MCL 388.1651a; MCL 400.55; MCL 400.57i; MCL 400.115; MCL 400.117a; MCL 400.119b; MCL 400.1207; MCL 421.13; MCL 421.17; MCL 421.21; MCL 421.44; MCL 432.205; MCL 432.503; MCL 436.1906; MCL 445.903; MCL 500.561; ... (6 more in the battery log)
- `\brent vendoring\b` / all,extra:mcr / 1 / rv: MCL 400.57i
- positive ben @ MCL 400.57i: passed ("shall not evict an occupant")
- positive rv @ MCL 400.57i: passed ("rent vendoring program")
- positive late @ SYNTH: passed ("if the housing assistance payment is late the tenant has a defense")

**MIG-B7-009** (cited), topic `tenant-bankruptcy`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:51:38. state rules on tenant bankruptcy and eviction
- summary: Battery MIG-B7-009 (bk.ab 5; bk.ba 6; bk.and 16; bke.ab 0; bke.ba 0; bke.and 0; as 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bbankrupt\w*)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all,extra:mcr / 5 / bk.ab: MCL 400.63; MCL 449.2; MCL 450.3148; MCL 565.953; MCL 600.5451
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bbankrupt\w*)` / all,extra:mcr / 6 / bk.ba: MCL 285.65; MCL 339.2503; MCL 400.63; MCL 440.9102; MCL 450.3148; MCL 600.5451
- `\A(?=[\s\S]*(?:\bbankrupt\w*))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all,extra:mcr / 16 / bk.and: MCL 129.264; MCL 141.1542; MCL 211.27; MCL 211.78k; MCL 285.65; MCL 324.20126; MCL 324.21323a; MCL 339.2503; MCL 400.63; MCL 432.207a; MCL 440.1201; MCL 440.9102; MCL 449.2; MCL 450.3148; MCL 565.953; MCL 600.5451
- `(?:\bbankrupt\w*)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 0 / bke.ab
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\bbankrupt\w*)` / all,extra:mcr / 0 / bke.ba
- `\A(?=[\s\S]*(?:\bbankrupt\w*))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 0 / bke.and
- `\bautomatic stay\b` / all,extra:mcr / 7 / as: MCL 32.1006a; MCL 600.5527; MCR 2.421; MCR 2.614; MCR 3.301; MCR 7.108; MCR 7.209
- positive bk @ SYNTH: passed ("if the tenant files a petition in bankruptcy the landlord")
- positive bke @ SYNTH: passed ("eviction of a tenant in bankruptcy")
- positive as @ MCL 600.5527: passed ("automatic stay")

**MIG-B7-010** (cited), topic `minor-tenant-filing`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:51:48. minors and leases; disaffirmance
- summary: Battery MIG-B7-010 (mn.ab 12; mn.ba 11; mn.and 29; dis 7 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bminors?\b)[\s\S]{0,1200}?(?:\b(?:leases?|rental agreements?|tenan\w*)\b)` / all,extra:mcr / 12 / mn.ab: MCL 35.541; MCL 319.101; MCL 324.63302; MCL 333.5473a; MCL 427.302; MCL 440.9613; MCL 554.537; MCL 554.601b; MCL 600.834; MCL 700.5407; MCL 722.4e; MCL 750.141a
- `(?:\b(?:leases?|rental agreements?|tenan\w*)\b)[\s\S]{0,1200}?(?:\bminors?\b)` / all,extra:mcr / 11 / mn.ba: MCL 35.541; MCL 319.101; MCL 324.63302; MCL 400.109i; MCL 427.302; MCL 554.537; MCL 554.601b; MCL 700.1105; MCL 700.5407; MCL 750.141a; Mich Admin Code R 460.107
- `\A(?=[\s\S]*(?:\bminors?\b))(?=[\s\S]*(?:\b(?:leases?|rental agreements?|tenan\w*)\b))` / all,extra:mcr / 29 / mn.and: MCL 18.354; MCL 18.361; MCL 35.541; MCL 211.78k; MCL 319.101; MCL 324.43553; MCL 324.63302; MCL 333.5473a; MCL 333.5475a; MCL 333.16187d; MCL 333.16188.added; MCL 333.16190; MCL 400.109i; MCL 421.43; MCL 427.302; MCL 440.9613; MCL 487.3422; MCL 487.14402; MCL 554.537; MCL 554.601b; MCL 600.834; MCL 700.1105; MCL 700.1107; MCL 700.5407; MCL 700.5423; MCL 700.7817; MCL 722.4e; MCL 750.141a; Mich Admin Code R 460.107
- `\bdisaffirm\w*` / all,extra:mcr / 7 / dis: MCL 330.1264; MCL 333.5127; MCL 333.9132; MCL 500.7708; MCL 500.8115a; MCL 600.1403; MCL 600.2912g
- positive mn @ MCL 722.4e: passed ("enforceable contracts, including apartment leases")
- positive dis @ MCL 600.1403: passed ("disaffirm")

**MIG-B7-011** (cited), topic `entity-landlord-court-representation`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:52:06. non-attorney representation of an entity; small claims representation; unauthorized practice
- summary: Battery MIG-B7-011 (rep.ab 2; rep.ba 4; rep.and 7; nonatty.ab 0; nonatty.ba 0; nonatty.and 0; upl 60 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\bmay be represented by\b)[\s\S]{0,1200}?(?:\b(?:corporations?|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies))\b)` / all,extra:mcr / 2 / rep.ab: MCL 600.8408; MCR 8.127
- `(?:\b(?:corporations?|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies))\b)[\s\S]{0,1200}?(?:\bmay be represented by\b)` / all,extra:mcr / 4 / rep.ba: MCL 205.735; MCL 205.735a; MCL 205.763; MCL 600.8408
- `\A(?=[\s\S]*(?:\bmay be represented by\b))(?=[\s\S]*(?:\b(?:corporations?|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies))\b))` / all,extra:mcr / 7 / rep.and: MCL 117.4q; MCL 205.735; MCL 205.735a; MCL 205.763; MCL 600.8408; MCR 2.201; MCR 8.127
- `(?:\bnon-?(?:attorney|lawyer)s?\b)[\s\S]{0,1200}?(?:\b(?:corporations?|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies)|landlords?)\b)` / all,extra:mcr / 0 / nonatty.ab
- `(?:\b(?:corporations?|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies)|landlords?)\b)[\s\S]{0,1200}?(?:\bnon-?(?:attorney|lawyer)s?\b)` / all,extra:mcr / 0 / nonatty.ba
- `\A(?=[\s\S]*(?:\bnon-?(?:attorney|lawyer)s?\b))(?=[\s\S]*(?:\b(?:corporations?|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies)|landlords?)\b))` / all,extra:mcr / 0 / nonatty.and
- `\bpractice law\b` / all,extra:mcr / 60 / upl: MCL 32.1006; MCL 32.1026; MCL 32.1027; MCL 32.1067; MCL 35.1027a; MCL 38.104; MCL 117.4q; MCL 117.28; MCL 124.759; MCL 168.391; MCL 168.409; MCL 168.411; MCL 168.431; MCL 168.467; MCL 211.78i; MCL 338.3455; MCL 339.2667; MCL 445.1675; MCL 445.1822; MCL 445.2011; MCL 450.681; MCL 460.836a; MCL 500.7304; MCL 565.845; MCL 600.586; MCL 600.901; MCL 600.909; MCL 600.910; MCL 600.916; MCL 600.934; ... (30 more in the battery log)
- positive rep @ MCL 600.8408: passed ("may be represented by an officer or employee")
- positive upl @ MCL 600.916: passed ("practice law")
- positive nonatty @ SYNTH: passed ("a non-attorney may appear on behalf of a corporation")

**MIG-B7-012** (cited), topic `limitation-of-actions`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:52:19. limitation periods specific to rent, leases or tenancies
- summary: Battery MIG-B7-012 (lim.ab 2; lim.ba 2; lim.and 8; term 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:periods? of limitations?|statutes? of limitations?|limitations? periods?)\b)[\s\S]{0,1200}?(?:\b(?:rent|lease[sd]?|tenan\w*|landlords?)\b)` / all / 2 / lim.ab: MCL 205.27a; MCL 440.2956
- `(?:\b(?:rent|lease[sd]?|tenan\w*|landlords?)\b)[\s\S]{0,1200}?(?:\b(?:periods? of limitations?|statutes? of limitations?|limitations? periods?)\b)` / all / 2 / lim.ba: MCL 205.27a; MCL 440.2956
- `\A(?=[\s\S]*(?:\b(?:periods? of limitations?|statutes? of limitations?|limitations? periods?)\b))(?=[\s\S]*(?:\b(?:rent|lease[sd]?|tenan\w*|landlords?)\b))` / all / 8 / lim.and: MCL 205.27a; MCL 205.51; MCL 205.54t; MCL 205.92; MCL 205.94o; MCL 207.526; MCL 440.2956; MCL 500.8121
- `\bwithin \S+ (?:days|years?|months?) after (?:the )?termination of (?:the )?(?:occupancy|tenancy|lease)\b` / all / 4 / term: MCL 554.603; MCL 554.609; MCL 554.613; 2026-PA-0102
- positive term @ MCL 554.613: passed ("Within 45 days after termination of the occupancy")
- positive lim @ SYNTH: passed ("the period of limitations for an action for rent under a lease")

**MIG-B7-013** (cited), topic `rent-demand-bar`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:52:32. bars on collecting or suing for rent; certificate of compliance and rent
- summary: Battery MIG-B7-013 (rb 1; cert.ab 1; cert.ba 3; cert.and 4; dpr 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\b(?:may|shall|must) not (?:maintain an action for|collect|recover|demand|charge) (?:the |any )?rent\b` / all / 1 / rb: MCL 400.14
- `(?:\bcertificates? of (?:compliance|occupancy)\b)[\s\S]{0,1200}?(?:\brent(?:s|al|ed)?\b)` / all / 1 / cert.ab: MCL 125.530
- `(?:\brent(?:s|al|ed)?\b)[\s\S]{0,1200}?(?:\bcertificates? of (?:compliance|occupancy)\b)` / all / 3 / cert.ba: MCL 125.530; MCL 125.1352; MCL 125.1513
- `\A(?=[\s\S]*(?:\bcertificates? of (?:compliance|occupancy)\b))(?=[\s\S]*(?:\brent(?:s|al|ed)?\b))` / all / 4 / cert.and: MCL 125.530; MCL 125.534; MCL 125.1352; MCL 125.1513
- `\bduty to pay rent\b` / all / 1 / dpr: MCL 125.530
- positive rb @ MCL 400.14: passed ("may not maintain an action for the rent")
- positive cert @ MCL 125.530: passed ("certificate of compliance")
- positive dpr @ MCL 125.530: passed ("duty to pay rent")

**MIG-B7-014** (cited), topic `double-letting`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:52:57. renting the same premises twice; failure to deliver possession
- summary: Battery MIG-B7-014 (dl 0; same.ab 3; same.ba 0; same.and 5; deliv.ab 2; deliv.ba 2; deliv.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bdouble[- ]?(?:let\w*|leas\w*|rent\w*|book\w*)\b` / all / 0 / dl
- `(?:\b(?:same|identical) (?:premises|dwelling(?: units?)?|rental units?|apartments?|rooms?)\b)[\s\S]{0,1200}?(?:\b(?:two|2|second|another|more than one|other) (?:tenants?|persons?|lessees?|occupants?)\b)` / all / 3 / same.ab: MCL 125.1502a; MCL 125.1510; MCL 207.559
- `(?:\b(?:two|2|second|another|more than one|other) (?:tenants?|persons?|lessees?|occupants?)\b)[\s\S]{0,1200}?(?:\b(?:same|identical) (?:premises|dwelling(?: units?)?|rental units?|apartments?|rooms?)\b)` / all / 0 / same.ba
- `\A(?=[\s\S]*(?:\b(?:same|identical) (?:premises|dwelling(?: units?)?|rental units?|apartments?|rooms?)\b))(?=[\s\S]*(?:\b(?:two|2|second|another|more than one|other) (?:tenants?|persons?|lessees?|occupants?)\b))` / all / 5 / same.and: MCL 18.351; MCL 125.1502a; MCL 125.1510; MCL 207.559; MCL 287.703
- `(?:\bdeliver\w*(?: up)? possession\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 2 / deliv.ab: MCL 600.5714; MCL 600.5744
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bdeliver\w*(?: up)? possession\b)` / all / 2 / deliv.ba: MCL 600.5714; MCL 600.5744
- `\A(?=[\s\S]*(?:\bdeliver\w*(?: up)? possession\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 2 / deliv.and: MCL 600.5714; MCL 600.5744
- positive deliv @ MCL 600.5714: passed ("deliver up possession of the premises")
- positive dl @ SYNTH: passed ("double letting of a room")
- positive same @ SYNTH: passed ("rented the same premises to another tenant")

**MIG-B7-015** (cited), topic `trespass-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:53:17. trespass near tenancy words; guests and invitees near trespass
- summary: Battery MIG-B7-015 (tr.ab 13; tr.ba 12; tr.and 17; forb 1; guest.ab 2; guest.ba 2; guest.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\btrespass\w*)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 13 / tr.ab: MCL 125.539; MCL 287.279; MCL 287.1111; MCL 324.33916; MCL 554.583; MCL 600.2918; MCL 600.2919; MCL 600.3348; MCL 600.5711; MCL 600.5714; MCL 600.5744; MCL 750.552; MCL 752.821
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\btrespass\w*)` / all / 12 / tr.ba: MCL 287.279; MCL 287.1011; MCL 287.1111; MCL 322.325; MCL 324.33916; MCL 324.45302; MCL 324.81133; MCL 554.583; MCL 600.2918; MCL 600.2919; MCL 600.3348; MCL 600.5714
- `\A(?=[\s\S]*(?:\btrespass\w*))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 17 / tr.and: MCL 125.539; MCL 287.279; MCL 287.1011; MCL 287.1111; MCL 322.325; MCL 324.33916; MCL 324.45302; MCL 324.81133; MCL 554.583; MCL 600.2918; MCL 600.2919; MCL 600.3348; MCL 600.5711; MCL 600.5714; MCL 600.5744; MCL 750.552; MCL 752.821
- `\bforbidden to do so by the owner or occupant\b` / all / 1 / forb: MCL 750.552
- `(?:\b(?:guests?|invitees?|visitors?|licensees?)\b)[\s\S]{0,1200}?(?:\b(?:trespass\w*|notified to depart|forbidden to (?:do so|enter))\b)` / all / 2 / guest.ab: MCL 324.81133; MCL 432.225
- `(?:\b(?:trespass\w*|notified to depart|forbidden to (?:do so|enter))\b)[\s\S]{0,1200}?(?:\b(?:guests?|invitees?|visitors?|licensees?)\b)` / all / 2 / guest.ba: MCL 324.81133; MCL 432.225
- `\A(?=[\s\S]*(?:\b(?:guests?|invitees?|visitors?|licensees?)\b))(?=[\s\S]*(?:\b(?:trespass\w*|notified to depart|forbidden to (?:do so|enter))\b))` / all / 2 / guest.and: MCL 324.81133; MCL 432.225
- positive tr @ MCL 600.5714: passed ("trespass without color of title")
- positive forb @ MCL 750.552: passed ("forbidden to do so by the owner or occupant")
- positive guest @ SYNTH: passed ("a guest of a tenant who remains after being notified to depart")

**MIG-B7-016** (cited), topic `seasonal-tenancy`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:53:31. seasonal, vacation or transient rentals near tenancy words
- summary: Battery MIG-B7-016 (seas.ab 20; seas.ba 17; seas.and 46; sten 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:seasonal\w*|vacations?|summer|tourists?|transient)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|tenan\w*|rental agreements?|rental units?|residential premises)\b)` / all / 20 / seas.ab: MCL 45.630a; MCL 125.781; MCL 125.1411; MCL 125.1504b; MCL 125.2302; MCL 125.2307; MCL 125.2328; MCL 125.2329; MCL 207.623; MCL 211.7cc; MCL 252.314; MCL 288.473; MCL 288.573; MCL 289.1105; MCL 289.1111; MCL 436.1513; MCL 445.371; MCL 700.3715; MCL 700.5423; MCL 700.7817
- `(?:\b(?:lease[sd]?|tenan\w*|rental agreements?|rental units?|residential premises)\b)[\s\S]{0,1200}?(?:\b(?:seasonal\w*|vacations?|summer|tourists?|transient)\b)` / all / 17 / seas.ba: MCL 29.19a; MCL 125.943; MCL 125.1504b; MCL 125.2302; MCL 125.2328; MCL 207.623; MCL 211.7cc; MCL 252.314; MCL 257.1833; MCL 289.1105; MCL 324.78105; MCL 324.79107; MCL 330.1205; MCL 436.1513; MCL 460.1133; MCL 554.632; MCL 556.313
- `\A(?=[\s\S]*(?:\b(?:seasonal\w*|vacations?|summer|tourists?|transient)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|tenan\w*|rental agreements?|rental units?|residential premises)\b))` / all / 46 / seas.and: MCL 29.1; MCL 29.19a; MCL 45.630a; MCL 125.74; MCL 125.539; MCL 125.781; MCL 125.943; MCL 125.1411; MCL 125.1504b; MCL 125.2029h; MCL 125.2302; MCL 125.2307; MCL 125.2328; MCL 125.2329; MCL 205.93a; MCL 207.623; MCL 207.752; MCL 207.803; MCL 211.7cc; MCL 211.7ss; MCL 211.44; MCL 252.314; MCL 257.1833; MCL 288.473; MCL 288.573; MCL 289.1105; MCL 289.1111; MCL 324.78105; MCL 324.78110; MCL 324.79107; ... (16 more in the battery log)
- `\bseasonal (?:tenan\w*|rentals?|leases?|occupan\w*|dwellers?)\b` / all / 0 / sten
- positive seas @ MCL 554.632: passed ("tourist accommodation")
- positive sten @ SYNTH: passed ("a seasonal tenancy")

**MIG-B7-017** (cited), topic `extended-absence-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:53:50. tenant absence notice; abandonment
- summary: Battery MIG-B7-017 (abs.ab 0; abs.ba 1; abs.and 2; aband.ab 3; aband.ba 2; aband.and 6; ext 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:temporary|extended|prolonged) absen(?:ce|ces)\b|\babsen(?:ce|ces|t) from (?:the )?(?:premises|dwelling(?: unit)?|rental unit|home|residence)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 0 / abs.ab
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:temporary|extended|prolonged) absen(?:ce|ces)\b|\babsen(?:ce|ces|t) from (?:the )?(?:premises|dwelling(?: unit)?|rental unit|home|residence)\b)` / all / 1 / abs.ba: MCL 554.632
- `\A(?=[\s\S]*(?:\b(?:temporary|extended|prolonged) absen(?:ce|ces)\b|\babsen(?:ce|ces|t) from (?:the )?(?:premises|dwelling(?: unit)?|rental unit|home|residence)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 2 / abs.and: MCL 211.7cc; MCL 554.632
- `(?:\babandon\w*)[\s\S]{0,1200}?(?:\btenan\w*)` / all / 3 / aband.ab: MCL 500.5503; MCL 600.2918; MCL 600.5744
- `(?:\btenan\w*)[\s\S]{0,1200}?(?:\babandon\w*)` / all / 2 / aband.ba: MCL 570.525; MCL 600.2918
- `\A(?=[\s\S]*(?:\babandon\w*))(?=[\s\S]*(?:\btenan\w*))` / all / 6 / aband.and: MCL 460.9d; MCL 500.5503; MCL 500.6868; MCL 570.525; MCL 600.2918; MCL 600.5744
- `\bextended absences?\b` / all / 1 / ext: MCL 35.515
- positive abs @ MCL 554.632: passed ("rented occasionally during temporary absences")
- positive aband @ MCL 600.2918: passed ("the tenant has abandoned the premises")
- positive ext @ MCL 35.515: passed ("extended absence")

**MIG-B7-018** (cited), topic `statutory-early-termination`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:54:14. statutory tenant exits from a lease; misrepresentation
- summary: Battery MIG-B7-018 (et.ab 3; et.ba 3; et.and 3; rel.ab 1; rel.ba 1; rel.and 1; mis.ab 0; mis.ba 0; mis.and 1; qs 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bmay terminate (?:a |the |his or her )?(?:lease|rental agreement|tenancy)\b)[\s\S]{0,1200}?(?:\btenan\w*)` / all / 3 / et.ab: MCL 554.134; MCL 554.601a; MCL 559.204
- `(?:\btenan\w*)[\s\S]{0,1200}?(?:\bmay terminate (?:a |the |his or her )?(?:lease|rental agreement|tenancy)\b)` / all / 3 / et.ba: MCL 554.134; MCL 554.601a; MCL 559.204
- `\A(?=[\s\S]*(?:\bmay terminate (?:a |the |his or her )?(?:lease|rental agreement|tenancy)\b))(?=[\s\S]*(?:\btenan\w*))` / all / 3 / et.and: MCL 554.134; MCL 554.601a; MCL 559.204
- `(?:\breleased? from (?:his or her |the |a )?(?:rental|rent)\b)[\s\S]{0,1200}?(?:\btenan\w*)` / all / 1 / rel.ab: MCL 554.601b
- `(?:\btenan\w*)[\s\S]{0,1200}?(?:\breleased? from (?:his or her |the |a )?(?:rental|rent)\b)` / all / 1 / rel.ba: MCL 554.601b
- `\A(?=[\s\S]*(?:\breleased? from (?:his or her |the |a )?(?:rental|rent)\b))(?=[\s\S]*(?:\btenan\w*))` / all / 1 / rel.and: MCL 554.601b
- `(?:\b(?:misrepresent\w*|fraud\w*)\b)[\s\S]{0,1200}?(?:\b(?:terminat\w*|rescind\w*|rescission|void\w*) (?:the |a )?(?:lease|rental agreement|tenancy)\b)` / all / 0 / mis.ab
- `(?:\b(?:terminat\w*|rescind\w*|rescission|void\w*) (?:the |a )?(?:lease|rental agreement|tenancy)\b)[\s\S]{0,1200}?(?:\b(?:misrepresent\w*|fraud\w*)\b)` / all / 0 / mis.ba
- `\A(?=[\s\S]*(?:\b(?:misrepresent\w*|fraud\w*)\b))(?=[\s\S]*(?:\b(?:terminat\w*|rescind\w*|rescission|void\w*) (?:the |a )?(?:lease|rental agreement|tenancy)\b))` / all / 1 / mis.and: MCL 722.1527
- `\bquit and surrender possession\b` / all / 1 / qs: MCL 554.201
- positive et @ MCL 554.601a: passed ("may terminate a lease")
- positive rel @ MCL 554.601b: passed ("released from his or her rental payment obligation")
- positive qs @ MCL 554.201: passed ("quit and surrender possession")
- positive mis @ SYNTH: passed ("if the landlord made a fraudulent misrepresentation the tenant may terminate the lease")

**MIG-B7-019** (cited), topic `environmental-event-termination`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:54:36. environmental events and lease termination; untenantable premises; vacate orders
- summary: Battery MIG-B7-019 (env.ab 0; env.ba 0; env.and 1; unt.ab 2; unt.ba 2; unt.and 3; ov 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:flood\w*|wildfires?|contaminat\w*|natural disasters?|disasters?|states? of emergency|public health emergenc\w*|tornado\w*|earthquakes?)\b)[\s\S]{0,1200}?(?:\b(?:terminat\w*|cancel\w*) (?:of )?(?:the |a )?(?:lease|rental agreement|tenancy)\b)` / all / 0 / env.ab
- `(?:\b(?:terminat\w*|cancel\w*) (?:of )?(?:the |a )?(?:lease|rental agreement|tenancy)\b)[\s\S]{0,1200}?(?:\b(?:flood\w*|wildfires?|contaminat\w*|natural disasters?|disasters?|states? of emergency|public health emergenc\w*|tornado\w*|earthquakes?)\b)` / all / 0 / env.ba
- `\A(?=[\s\S]*(?:\b(?:flood\w*|wildfires?|contaminat\w*|natural disasters?|disasters?|states? of emergency|public health emergenc\w*|tornado\w*|earthquakes?)\b))(?=[\s\S]*(?:\b(?:terminat\w*|cancel\w*) (?:of )?(?:the |a )?(?:lease|rental agreement|tenancy)\b))` / all / 1 / env.and: MCL 257.1403
- `(?:\buntenantable\b|\bunfit for (?:human )?(?:occupancy|habitation)\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 2 / unt.ab: MCL 125.539; MCL 554.201
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\buntenantable\b|\bunfit for (?:human )?(?:occupancy|habitation)\b)` / all / 2 / unt.ba: MCL 123.958a; MCL 554.201
- `\A(?=[\s\S]*(?:\buntenantable\b|\bunfit for (?:human )?(?:occupancy|habitation)\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 3 / unt.and: MCL 123.958a; MCL 125.539; MCL 554.201
- `\bordered vacated\b` / all / 2 / ov: MCL 125.530; MCL 600.5744
- positive unt @ MCL 554.201: passed ("untenantable")
- positive ov @ MCL 125.530: passed ("ordered vacated")
- positive env @ SYNTH: passed ("if a flood or other disaster makes the premises unfit the landlord may terminate the lease")

**MIG-B7-020** (cited), topic `notice-to-vacate-additional-terms`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:54:54. notice-to-vacate or move-out forms and their terms
- summary: Battery MIG-B7-020 (nv.ab 1; nv.ba 0; nv.and 1; mo.ab 0; mo.ba 0; mo.and 0; ntv 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bnotices? (?:to vacate|of (?:intent|intention) to (?:vacate|move))\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 1 / nv.ab: MCL 125.1608
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bnotices? (?:to vacate|of (?:intent|intention) to (?:vacate|move))\b)` / all / 0 / nv.ba
- `\A(?=[\s\S]*(?:\bnotices? (?:to vacate|of (?:intent|intention) to (?:vacate|move))\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 1 / nv.and: MCL 125.1608
- `(?:\bmove[- ]?out\b)[\s\S]{0,1200}?(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)` / all / 0 / mo.ab
- `(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\bmove[- ]?out\b)` / all / 0 / mo.ba
- `\A(?=[\s\S]*(?:\bmove[- ]?out\b))(?=[\s\S]*(?:\b(?:lease[sd]?|leasehold|tenan\w*|rental agreements?|landlords?|lessees?|lessors?)\b))` / all / 0 / mo.and
- `\bnotices? to vacate\b` / all / 6 / ntv: MCL 125.1608; MCL 125.4220; MCL 125.4319; MCL 125.4418; MCL 125.4624; MCL 213.323
- positive nv @ MCL 125.1608: passed ("notice to vacate")
- positive mo @ SYNTH: passed ("a move-out form signed by the tenant")
- positive ntv @ MCL 125.1608: passed ("notice to vacate")

**MIG-B7-021** (cited), topic `tenancy-at-will`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:55:37. statutory definition or creation rule for tenancies at will or by sufferance
- summary: Battery MIG-B7-021 (taw 4; def.ab 4; def.ba 0; def.and 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\b(?:tenan(?:cy|cies)|estates?|leases?) (?:at will|by sufferance)\b` / all / 4 / taw: MCL 554.1; MCL 554.5; MCL 554.134; MCL 600.6018
- `(?:\b(?:at will|by sufferance)\b)[\s\S]{0,1200}?(?:\b(?:means|is created|arises|shall be deemed|is considered)\b)` / all / 4 / def.ab: MCL 259.142; MCL 440.1309; MCL 554.134; MCL 722.111
- `(?:\b(?:means|is created|arises|shall be deemed|is considered)\b)[\s\S]{0,1200}?(?:\b(?:at will|by sufferance)\b)` / all / 0 / def.ba
- `\A(?=[\s\S]*(?:\b(?:at will|by sufferance)\b))(?=[\s\S]*(?:\b(?:means|is created|arises|shall be deemed|is considered)\b))` / all / 4 / def.and: MCL 259.142; MCL 440.1309; MCL 554.134; MCL 722.111
- positive taw @ MCL 554.134: passed ("estate at will or by sufferance")
- positive def @ SYNTH: passed ("a tenancy at will means a tenancy that is created")

**MIG-B7-022** (cited), topic `eviction-hardship-stay`, 44736 units (hash 1189168c5c701e32), run 2026-11-13 20:55:51. state military-service protection near eviction words
- summary: Battery MIG-B7-022 (mil.ab 0; mil.ba 0; mil.and 0; scra 3 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 150))
- `(?:\b(?:military|armed forces|national guard|active duty|servicemembers?|service members?)\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)` / all,extra:mcr / 0 / mil.ab
- `(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b)[\s\S]{0,1200}?(?:\b(?:military|armed forces|national guard|active duty|servicemembers?|service members?)\b)` / all,extra:mcr / 0 / mil.ba
- `\A(?=[\s\S]*(?:\b(?:military|armed forces|national guard|active duty|servicemembers?|service members?)\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writ of restitution|orders? of eviction)\b))` / all,extra:mcr / 0 / mil.and
- `\bservicemembers civil relief act\b` / all,extra:mcr / 3 / scra: MCL 722.22; MCL 722.27; MCL 722.27a
- positive mil @ SYNTH: passed ("a servicemember on active duty may not be evicted except by court order")
- positive scra @ SYNTH: passed ("the servicemembers civil relief act")

**MIG-B8-001** (cited), topic `electric-submetering-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:52:49. Landlord submetering or resale of electricity or gas; public-utility definitions; meter equipment monopoly.
- summary: Battery MIG-B8-001 (subm 1; resale.ab 5; resale.ba 6; resale.and 14; tenelec.ab 6; tenelec.ba 7; tenelec.and 16; pubcomp 1; metereq 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bsub-?meter(?:s|ed|ing)?\b` / all / 1 / subm: MCL 18.1713
- `(?:\bresal(?:e|es)\b|\bresell(?:s|ing)?\b|\bresold\b)[\s\S]{0,1200}?(?:\belectricity\b|\bnatural gas\b)` / all / 5 / resale.ab: MCL 205.92; MCL 208.1111; MCL 324.21508; MCL 460.1035; MCL 486.252
- `(?:\belectricity\b|\bnatural gas\b)[\s\S]{0,1200}?(?:\bresal(?:e|es)\b|\bresell(?:s|ing)?\b|\bresold\b)` / all / 6 / resale.ba: MCL 205.52; MCL 205.93a; MCL 208.1111; MCL 429.351; MCL 460.1035; MCL 486.252
- `\A(?=[\s\S]*(?:\bresal(?:e|es)\b|\bresell(?:s|ing)?\b|\bresold\b))(?=[\s\S]*(?:\belectricity\b|\bnatural gas\b))` / all / 14 / resale.and: MCL 205.51; MCL 205.52; MCL 205.56a; MCL 205.92; MCL 205.93a; MCL 206.665; MCL 207.1152; MCL 208.1111; MCL 208.1305; MCL 211.9; MCL 324.21508; MCL 429.351; MCL 460.1035; MCL 486.252
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\belectricity\b|\belectric (?:or natural gas )?service\b)` / all / 6 / tenelec.ab: MCL 460.9d; MCL 460.501; MCL 462.3; MCL 554.633; 2026-PA-0103; Mich Admin Code R 460.144
- `(?:\belectricity\b|\belectric (?:or natural gas )?service\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)` / all / 7 / tenelec.ba: MCL 125.2329; MCL 440.9102; MCL 460.9d; MCL 554.633; MCL 750.282; 2026-PA-0103; Mich Admin Code R 460.144
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b))(?=[\s\S]*(?:\belectricity\b|\belectric (?:or natural gas )?service\b))` / all / 16 / tenelec.and: MCL 125.1411; MCL 125.1502a; MCL 125.2329; MCL 206.527a; MCL 211.9; MCL 211.9m; MCL 257.801; MCL 440.9102; MCL 460.9d; MCL 460.501; MCL 462.3; MCL 462.109; MCL 554.633; MCL 750.282; 2026-PA-0103; Mich Admin Code R 460.144
- `\bto or for the public for compensation\b` / all / 1 / pubcomp: MCL 460.501
- `\belectric meter equipment\b` / all / 1 / metereq: MCL 460.10q
- positive subm @ MCL 18.1713: passed ("sub-metering")
- positive resale @ MCL 208.1111: passed ("electricity or natural gas purchased for resale")
- positive tenelec @ MCL 460.9d: passed ("tenant")
- positive pubcomp @ MCL 460.501: passed ("to or for the public for compensation")
- positive metereq @ MCL 460.10q: passed ("electric meter equipment")

**MIG-B8-002** (superseded by MIG-B8-019), topic `meter-conservation-charge`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:53:12. On-bill energy-project charges binding later customers; tenant notice; submetered water.
- summary: Battery MIG-B8-002 (pmc 7; runs.ab 2; runs.ba 2; runs.and 2; ebnot.ab 2; ebnot.ba 0; ebnot.and 3; wsub.ab 0; wsub.ba 1; wsub.and 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bper-meter charges?\b` / all / 7 / pmc: MCL 460.10t; MCL 460.969; MCL 460.1089; MCL 460.1091; MCL 460.1205; MCL 460.1207; Mich Admin Code R 460.137
- `(?:\brun(?:s)? with the land\b)[\s\S]{0,1200}?(?:\bmeter\b|\butility bill\b|\belectric service\b)` / all / 2 / runs.ab: MCL 460.969; MCL 460.1207
- `(?:\bmeter\b|\butility bill\b|\belectric service\b)[\s\S]{0,1200}?(?:\brun(?:s)? with the land\b)` / all / 2 / runs.ba: MCL 460.969; MCL 460.1207
- `\A(?=[\s\S]*(?:\brun(?:s)? with the land\b))(?=[\s\S]*(?:\bmeter\b|\butility bill\b|\belectric service\b))` / all / 2 / runs.and: MCL 460.969; MCL 460.1207
- `(?:\bper-meter charges?\b|\bon-bill\b|\benergy projects?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|future customers?)\b)` / all / 2 / ebnot.ab: MCL 460.969; MCL 460.1207
- `(?:\b(?:tenants?|lessees?|occupants?|future customers?)\b)[\s\S]{0,1200}?(?:\bper-meter charges?\b|\bon-bill\b|\benergy projects?\b)` / all / 0 / ebnot.ba
- `\A(?=[\s\S]*(?:\bper-meter charges?\b|\bon-bill\b|\benergy projects?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|future customers?)\b))` / all / 3 / ebnot.and: MCL 460.969; MCL 460.1207; Mich Admin Code R 460.137
- `(?:\bsub-?meter(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\bwater\b)` / all / 0 / wsub.ab
- `(?:\bwater\b)[\s\S]{0,1200}?(?:\bsub-?meter(?:s|ed|ing)?\b)` / all / 1 / wsub.ba: MCL 18.1713
- `\A(?=[\s\S]*(?:\bsub-?meter(?:s|ed|ing)?\b))(?=[\s\S]*(?:\bwater\b))` / all / 1 / wsub.and: MCL 18.1713
- positive pmc @ MCL 460.969: passed ("per-meter charge")
- positive runs @ MCL 460.1207: passed ("run with the land")
- positive ebnot @ MCL 460.1207: passed ("future customers")
- positive wsub @ SYNTH: passed ("A landlord that furnishes water to a tenant through a submeter shall not charge more than the rate charged by the water ")

**MIG-B8-003** (cited), topic `utility-allowance-cap`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:53:32. Caps on rebilled utility charges; utility allowances; mobile home park measured-service rule.
- summary: Battery MIG-B8-003 (ualw 0; actb.ab 0; actb.ba 0; actb.and 0; meas 1; rebill.ab 0; rebill.ba 0; rebill.and 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\butility allowances?\b` / all / 0 / ualw
- `(?:\b(?:actually billed|actual (?:amount|cost) (?:billed|charged))\b)[\s\S]{0,1200}?(?:\b(?:utility|electric|gas|water)\b)` / all / 0 / actb.ab
- `(?:\b(?:utility|electric|gas|water)\b)[\s\S]{0,1200}?(?:\b(?:actually billed|actual (?:amount|cost) (?:billed|charged))\b)` / all / 0 / actb.ba
- `\A(?=[\s\S]*(?:\b(?:actually billed|actual (?:amount|cost) (?:billed|charged))\b))(?=[\s\S]*(?:\b(?:utility|electric|gas|water)\b))` / all / 0 / actb.and
- `\baccurately and consistently measured\b` / all / 1 / meas: MCL 125.2328
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:rebill\w*|re-bill\w*|pass(?:es|ed)? through)\b)` / all / 0 / rebill.ab
- `(?:\b(?:rebill\w*|re-bill\w*|pass(?:es|ed)? through)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)` / all / 0 / rebill.ba
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b))(?=[\s\S]*(?:\b(?:rebill\w*|re-bill\w*|pass(?:es|ed)? through)\b))` / all / 1 / rebill.and: MCL 750.282
- positive meas @ MCL 125.2328: passed ("accurately and consistently measured")
- positive ualw @ SYNTH: passed ("The landlord shall provide a utility allowance to each tenant.")
- positive actb @ SYNTH: passed ("A landlord may not charge a tenant for gas utility service an amount greater than that actually billed by the utility.")
- positive rebill @ SYNTH: passed ("A landlord that rebills a tenant for electricity shall provide a copy of the bill.")

**MIG-B8-019** (cited) (supersedes MIG-B8-002), topic `meter-conservation-charge`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:54:34. On-bill energy-project charges binding later customers; tenant notice; submetered water. Rerun of MIG-B8-002 with plural forms (INFLECTION lines).
- summary: Battery MIG-B8-019 (pmc 7; runs.ab 2; runs.ba 2; runs.and 2; ebnot.ab 2; ebnot.ba 0; ebnot.and 3; wsub.ab 0; wsub.ba 1; wsub.and 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bper-meter charges?\b` / all / 7 / pmc: MCL 460.10t; MCL 460.969; MCL 460.1089; MCL 460.1091; MCL 460.1205; MCL 460.1207; Mich Admin Code R 460.137
- `(?:\brun(?:s)? with the land\b)[\s\S]{0,1200}?(?:\bmeters?\b|\butility bills?\b|\belectric service\b)` / all / 2 / runs.ab: MCL 460.969; MCL 460.1207
- `(?:\bmeters?\b|\butility bills?\b|\belectric service\b)[\s\S]{0,1200}?(?:\brun(?:s)? with the land\b)` / all / 2 / runs.ba: MCL 460.969; MCL 460.1207
- `\A(?=[\s\S]*(?:\brun(?:s)? with the land\b))(?=[\s\S]*(?:\bmeters?\b|\butility bills?\b|\belectric service\b))` / all / 2 / runs.and: MCL 460.969; MCL 460.1207
- `(?:\bper-meter charges?\b|\bon-bill\b|\benergy projects?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|occupants?|future customers?)\b)` / all / 2 / ebnot.ab: MCL 460.969; MCL 460.1207
- `(?:\b(?:tenants?|lessees?|occupants?|future customers?)\b)[\s\S]{0,1200}?(?:\bper-meter charges?\b|\bon-bill\b|\benergy projects?\b)` / all / 0 / ebnot.ba
- `\A(?=[\s\S]*(?:\bper-meter charges?\b|\bon-bill\b|\benergy projects?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|occupants?|future customers?)\b))` / all / 3 / ebnot.and: MCL 460.969; MCL 460.1207; Mich Admin Code R 460.137
- `(?:\bsub-?meter(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\bwaters?\b)` / all / 0 / wsub.ab
- `(?:\bwaters?\b)[\s\S]{0,1200}?(?:\bsub-?meter(?:s|ed|ing)?\b)` / all / 1 / wsub.ba: MCL 18.1713
- `\A(?=[\s\S]*(?:\bsub-?meter(?:s|ed|ing)?\b))(?=[\s\S]*(?:\bwaters?\b))` / all / 1 / wsub.and: MCL 18.1713
- positive pmc @ MCL 460.969: passed ("per-meter charge")
- positive runs @ MCL 460.1207: passed ("run with the land")
- positive ebnot @ MCL 460.1207: passed ("future customers")
- positive wsub @ SYNTH: passed ("A landlord that furnishes water to a tenant through a submeter shall not charge more than the rate charged by the water ")

**MIG-B8-004** (cited), topic `utility-apportionment`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:54:54. Charging tenants for utilities not separately metered; ratio billing; allocation of shared bills.
- summary: Battery MIG-B8-004 (sepm.ab 0; sepm.ba 0; sepm.and 0; ratio 3; alloc.ab 2; alloc.ba 1; alloc.and 5; meas 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bseparately metered\b|\bindividually metered\b|\bseparate meters?\b|\bindividual meters?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|dwelling units?|rental units?|apartments?|residents?)\b)` / all / 0 / sepm.ab
- `(?:\b(?:tenants?|lessees?|dwelling units?|rental units?|apartments?|residents?)\b)[\s\S]{0,1200}?(?:\bseparately metered\b|\bindividually metered\b|\bseparate meters?\b|\bindividual meters?\b)` / all / 0 / sepm.ba
- `\A(?=[\s\S]*(?:\bseparately metered\b|\bindividually metered\b|\bseparate meters?\b|\bindividual meters?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|dwelling units?|rental units?|apartments?|residents?)\b))` / all / 0 / sepm.and
- `\bratio utility billing\b|\butility billing\b` / all / 3 / ratio: MCL 460.10ee; MCL 460.1007; Mich Admin Code R 460.115
- `(?:\ballocat(?:e|es|ed|ing|ion)\b|\bapportion(?:s|ed|ing|ment)?\b)[\s\S]{0,1200}?(?:\butility (?:bills?|charges?|costs?|services?)\b|\bwater (?:bills?|charges?)\b)` / all / 2 / alloc.ab: MCL 400.18; MCL 460.10ee
- `(?:\butility (?:bills?|charges?|costs?|services?)\b|\bwater (?:bills?|charges?)\b)[\s\S]{0,1200}?(?:\ballocat(?:e|es|ed|ing|ion)\b|\bapportion(?:s|ed|ing|ment)?\b)` / all / 1 / alloc.ba: MCL 460.10ee
- `\A(?=[\s\S]*(?:\ballocat(?:e|es|ed|ing|ion)\b|\bapportion(?:s|ed|ing|ment)?\b))(?=[\s\S]*(?:\butility (?:bills?|charges?|costs?|services?)\b|\bwater (?:bills?|charges?)\b))` / all / 5 / alloc.and: MCL 30.261; MCL 208.1403; MCL 400.18; MCL 460.10ee; MCL 484.3108
- `\baccurately and consistently measured\b` / all / 1 / meas: MCL 125.2328
- positive sepm @ SYNTH: passed ("A landlord may not require a tenant to pay for a utility that is not separately metered to the dwelling unit.")
- positive ratio @ SYNTH: passed ("The landlord may use ratio utility billing to allocate the cost.")
- positive alloc @ SYNTH: passed ("A landlord shall not allocate utility charges among tenants except as provided in this section.")
- positive meas @ MCL 125.2328: passed ("accurately and consistently measured")

**MIG-B8-005** (cited), topic `utility-disclosure-attachment`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:55:08. Required lease disclosure of utility responsibility, costs or availability.
- summary: Battery MIG-B8-005 (discu.ab 4; discu.ba 4; discu.and 15; inlease 1; avgcost.ab 0; avgcost.ba 0; avgcost.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bdisclos(?:e|es|ed|ure|ures|ing)\b)[\s\S]{0,1200}?(?:\butility (?:costs?|charges?|services?|bills?|responsibilit\w*)\b|\butilities\b)` / all / 4 / discu.ab: MCL 125.2305; MCL 205.54ee; MCL 205.94cc; MCL 460.9
- `(?:\butility (?:costs?|charges?|services?|bills?|responsibilit\w*)\b|\butilities\b)[\s\S]{0,1200}?(?:\bdisclos(?:e|es|ed|ure|ures|ing)\b)` / all / 4 / discu.ba: MCL 123.1349; MCL 125.2305; MCL 400.1207; MCL 460.9
- `\A(?=[\s\S]*(?:\bdisclos(?:e|es|ed|ure|ures|ing)\b))(?=[\s\S]*(?:\butility (?:costs?|charges?|services?|bills?|responsibilit\w*)\b|\butilities\b))` / all / 15 / discu.and: MCL 18.1261; MCL 35.82; MCL 123.1349; MCL 125.2305; MCL 205.54ee; MCL 205.94cc; MCL 211.27; MCL 213.55; MCL 280.196; MCL 400.1207; MCL 460.6t; MCL 460.9; MCL 559.204b; MCL 559.222b; Mich Admin Code R 460.102a
- `\bresidential service is included in a lease\b` / all / 1 / inlease: Mich Admin Code R 460.107
- `(?:\baverage (?:monthly )?(?:cost|bill|usage)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|prospective tenants?|rental)\b)` / all / 0 / avgcost.ab
- `(?:\b(?:tenants?|lessees?|prospective tenants?|rental)\b)[\s\S]{0,1200}?(?:\baverage (?:monthly )?(?:cost|bill|usage)\b)` / all / 0 / avgcost.ba
- `\A(?=[\s\S]*(?:\baverage (?:monthly )?(?:cost|bill|usage)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|prospective tenants?|rental)\b))` / all / 0 / avgcost.and
- positive inlease @ Mich Admin Code R 460.107: passed ("except where residential service is included in a lease")
- positive discu @ SYNTH: passed ("The landlord shall disclose to the tenant in writing which utilities the tenant must pay.")
- positive avgcost @ SYNTH: passed ("Before a tenant signs, the landlord shall disclose the average monthly cost of utilities for the rental unit.")

**MIG-B8-006** (cited), topic `utility-disconnection-notice-authorization`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:55:24. Customer designation of a third party (such as a landlord) to receive copies of shutoff notices.
- summary: Battery MIG-B8-006 (desig.ab 2; desig.ba 3; desig.and 4; consent 1; thirdp.ab 1; thirdp.ba 2; thirdp.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bdesignat(?:e|es|ed|ing)\b)[\s\S]{0,1200}?(?:\bnotice of shut ?off\b|\bshut-?off notices?\b|\bshutoff notices?\b)` / all / 2 / desig.ab: Mich Admin Code R 460.120; Mich Admin Code R 460.139
- `(?:\bnotice of shut ?off\b|\bshut-?off notices?\b|\bshutoff notices?\b)[\s\S]{0,1200}?(?:\bdesignat(?:e|es|ed|ing)\b)` / all / 3 / desig.ba: MCL 460.9q; Mich Admin Code R 460.120; Mich Admin Code R 460.139
- `\A(?=[\s\S]*(?:\bdesignat(?:e|es|ed|ing)\b))(?=[\s\S]*(?:\bnotice of shut ?off\b|\bshut-?off notices?\b|\bshutoff notices?\b))` / all / 4 / desig.and: MCL 460.9q; Mich Admin Code R 460.120; Mich Admin Code R 460.123; Mich Admin Code R 460.139
- `\bconsenting individual or agency\b` / all / 1 / consent: Mich Admin Code R 460.139
- `(?:\bthird part(?:y|ies)\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion|ed)?\b|\btermination of (?:service|utility service)\b)` / all / 1 / thirdp.ab: Mich Admin Code R 460.120
- `(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion|ed)?\b|\btermination of (?:service|utility service)\b)[\s\S]{0,1200}?(?:\bthird part(?:y|ies)\b)` / all / 2 / thirdp.ba: Mich Admin Code R 460.102b; Mich Admin Code R 460.120
- `\A(?=[\s\S]*(?:\bthird part(?:y|ies)\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion|ed)?\b|\btermination of (?:service|utility service)\b))` / all / 2 / thirdp.and: Mich Admin Code R 460.102b; Mich Admin Code R 460.120
- positive desig @ Mich Admin Code R 460.139: passed ("designate a consenting individual or agency to receive a copy of a notice of shut off")
- positive consent @ Mich Admin Code R 460.139: passed ("consenting individual or agency")
- positive thirdp @ SYNTH: passed ("The utility shall send a copy of a shutoff notice to a third party the customer designates.")

**MIG-B8-007** (superseded by MIG-B8-020), topic `utility-interruption-submeter`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:56:21. Landlord interruption of submetered or landlord-supplied utility service; interference with possession.
- summary: Battery MIG-B8-007 (intr.ab 32; intr.ba 26; intr.and 43; subm 1; landsv.ab 2; landsv.ba 1; landsv.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binterrupt(?:ion|ions|ed|s|ing)?\b|\bterminat(?:e|ion|ed)\b|\bshut ?off\b)[\s\S]{0,1200}?(?:\b(?:electric|gas|utility|water) service\b|\bheat\b)` / all / 32 / intr.ab: MCL 32.517; MCL 74.23e; MCL 125.2329; MCL 400.1154; MCL 400.1161; MCL 400.1205; MCL 460.9d; MCL 460.9q; MCL 460.9s; MCL 460.969; MCL 460.1207; MCL 484.2102; MCL 600.2918; Mich Admin Code R 460.102; Mich Admin Code R 460.102b; Mich Admin Code R 460.107; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.116; Mich Admin Code R 460.123; Mich Admin Code R 460.126; Mich Admin Code R 460.127; Mich Admin Code R 460.130; Mich Admin Code R 460.130a; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.133; Mich Admin Code R 460.137; Mich Admin Code R 460.138; Mich Admin Code R 460.140; ... (2 more in the battery log)
- `(?:\b(?:electric|gas|utility|water) service\b|\bheat\b)[\s\S]{0,1200}?(?:\binterrupt(?:ion|ions|ed|s|ing)?\b|\bterminat(?:e|ion|ed)\b|\bshut ?off\b)` / all / 26 / intr.ba: MCL 32.517; MCL 125.2329; MCL 288.701; MCL 400.1205; MCL 460.9d; MCL 460.10ee; MCL 460.969; MCL 460.1207; MCL 484.2102; Mich Admin Code R 460.102b; Mich Admin Code R 460.107; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.112; Mich Admin Code R 460.115; Mich Admin Code R 460.123; Mich Admin Code R 460.126; Mich Admin Code R 460.126b; Mich Admin Code R 460.127; Mich Admin Code R 460.130; Mich Admin Code R 460.130a; Mich Admin Code R 460.131; Mich Admin Code R 460.137; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.163
- `\A(?=[\s\S]*(?:\binterrupt(?:ion|ions|ed|s|ing)?\b|\bterminat(?:e|ion|ed)\b|\bshut ?off\b))(?=[\s\S]*(?:\b(?:electric|gas|utility|water) service\b|\bheat\b))` / all / 43 / intr.and: MCL 32.517; MCL 74.23e; MCL 125.2329; MCL 141.1552; MCL 206.527a; MCL 208.1430; MCL 288.701; MCL 400.1154; MCL 400.1161; MCL 400.1205; MCL 460.9d; MCL 460.9q; MCL 460.9s; MCL 460.10a; MCL 460.10b; MCL 460.10ee; MCL 460.723; MCL 460.969; MCL 460.1207; MCL 484.2102; MCL 600.2918; Mich Admin Code R 460.102; Mich Admin Code R 460.102b; Mich Admin Code R 460.107; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.112; Mich Admin Code R 460.115; Mich Admin Code R 460.116; Mich Admin Code R 460.123; ... (13 more in the battery log)
- `\bsub-?meter(?:s|ed|ing)?\b` / all / 1 / subm: MCL 18.1713
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\binterrupt(?:ion|ions|ed|s|ing)?\b)` / all / 2 / landsv.ab: MCL 554.1052; MCL 600.2918
- `(?:\binterrupt(?:ion|ions|ed|s|ing)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)` / all / 1 / landsv.ba: MCL 600.2918
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b))(?=[\s\S]*(?:\binterrupt(?:ion|ions|ed|s|ing)?\b))` / all / 5 / landsv.and: MCL 257.717; MCL 500.1202; MCL 500.6868; MCL 554.1052; MCL 600.2918
- positive intr @ MCL 600.2918: passed ("interruption of a service procured by the tenant")
- positive subm @ MCL 18.1713: passed ("sub-metering")
- positive landsv @ MCL 600.2918: passed ("the termination or interruption of a service procured by the tenant")

**MIG-B8-008** (superseded by MIG-B8-021), topic `utility-shutoff-statute`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:56:45. Utility shutoff protections: heating season, winter protection, medical emergency, military, notice.
- summary: Battery MIG-B8-008 (winter.ab 9; winter.ba 11; winter.and 11; wpp 8; med.ab 7; med.ba 7; med.and 9; storm.ab 2; storm.ba 3; storm.and 4 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bheating season\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b)` / all / 9 / winter.ab: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.131; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `(?:\bshut ?off\b|\bshutoff\b)[\s\S]{0,1200}?(?:\bheating season\b)` / all / 11 / winter.ba: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.123; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `\A(?=[\s\S]*(?:\bheating season\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b))` / all / 11 / winter.and: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.123; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `\bwinter protection\b` / all / 8 / wpp: MCL 206.527a; MCL 211.7bb; MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.140
- `(?:\bmedical emergency\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b|\bpostpone\b)` / all / 7 / med.ab: MCL 460.9q; MCL 460.9s; MCL 460.10t; Mich Admin Code R 460.129; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.140
- `(?:\bshut ?off\b|\bshutoff\b|\bpostpone\b)[\s\S]{0,1200}?(?:\bmedical emergency\b)` / all / 7 / med.ba: MCL 460.9q; MCL 460.9r; MCL 460.9s; MCL 460.10t; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.140
- `\A(?=[\s\S]*(?:\bmedical emergency\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b|\bpostpone\b))` / all / 9 / med.and: MCL 257.304; MCL 460.9q; MCL 460.9r; MCL 460.9s; MCL 460.10t; Mich Admin Code R 460.129; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.140
- `(?:\b(?:storm|hurricane|state of emergency|declared emergency|extreme weather)\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion)?\b)` / all / 2 / storm.ab: MCL 324.3112b; Mich Admin Code R 460.134
- `(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion)?\b)[\s\S]{0,1200}?(?:\b(?:storm|hurricane|state of emergency|declared emergency|extreme weather)\b)` / all / 3 / storm.ba: MCL 324.3112b; MCL 427.2; Mich Admin Code R 460.134
- `\A(?=[\s\S]*(?:\b(?:storm|hurricane|state of emergency|declared emergency|extreme weather)\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion)?\b))` / all / 4 / storm.and: MCL 324.3112b; MCL 427.2; Mich Admin Code R 408.30547c; Mich Admin Code R 460.134
- positive winter @ MCL 460.10t: passed ("heating season")
- positive wpp @ MCL 460.9r: passed ("winter protection")
- positive med @ MCL 460.9s: passed ("medical emergency")
- positive storm @ Mich Admin Code R 460.134: passed ("extreme weather")

**MIG-B8-009** (cited), topic `utility-transfer`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:57:07. Tenant duty to put utilities in own name; landlord cutoff of landlord-name accounts.
- summary: Battery MIG-B8-009 (acct.ab 1; acct.ba 3; acct.and 3; ownname 28; cutoff.ab 8; cutoff.ba 9; cutoff.and 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:establish|open|transfer|put|place)(?:s|ed|ing)? (?:an |the |a )?(?:account|service)\b)[\s\S]{0,1200}?(?:\b(?:occupants?|tenants?|lessees?)\b)` / all / 1 / acct.ab: Mich Admin Code R 460.107
- `(?:\b(?:occupants?|tenants?|lessees?)\b)[\s\S]{0,1200}?(?:\b(?:establish|open|transfer|put|place)(?:s|ed|ing)? (?:an |the |a )?(?:account|service)\b)` / all / 3 / acct.ba: MCL 460.9q; Mich Admin Code R 460.107; Mich Admin Code R 460.137
- `\A(?=[\s\S]*(?:\b(?:establish|open|transfer|put|place)(?:s|ed|ing)? (?:an |the |a )?(?:account|service)\b))(?=[\s\S]*(?:\b(?:occupants?|tenants?|lessees?)\b))` / all / 3 / acct.and: MCL 460.9q; Mich Admin Code R 460.107; Mich Admin Code R 460.137
- `\bin (?:his or her|their|the tenant\'?s|the occupant\'?s) (?:own )?name\b` / all / 28 / ownname: MCL 125.534; MCL 125.2122; MCL 207.713; MCL 324.43102; MCL 324.43516; MCL 324.44502; MCL 324.47331; MCL 324.48722; MCL 333.27961a; MCL 338.829; MCL 338.1059; MCL 338.2183; MCL 339.2512e; MCL 418.651; MCL 436.1801; MCL 450.99; MCL 450.1763; MCL 460.9q; MCL 500.8121; MCL 557.255; MCL 600.1805; MCL 600.6021; MCL 600.6093; MCL 722.4e; MCL 765.20; MCL 767.40; Mich Admin Code R 460.107; Mich Admin Code R 460.138
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:discontinu\w*|shut ?off|shutoff|disconnect\w*)\b)` / all / 8 / cutoff.ab: MCL 141.121; MCL 460.9d; MCL 480.17d; MCL 570.1127; MCL 600.5781; Mich Admin Code R 460.107; Mich Admin Code R 460.138; Mich Admin Code R 460.139
- `(?:\b(?:discontinu\w*|shut ?off|shutoff|disconnect\w*)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)` / all / 9 / cutoff.ba: MCL 125.2329; MCL 257.233a; MCL 445.1571; MCL 460.9d; MCL 570.1127; MCL 600.5781; Mich Admin Code R 460.138; Mich Admin Code R 460.139; Mich Admin Code R 460.144
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b))(?=[\s\S]*(?:\b(?:discontinu\w*|shut ?off|shutoff|disconnect\w*)\b))` / all / 16 / cutoff.and: MCL 125.654; MCL 125.2329; MCL 125.2652; MCL 141.121; MCL 206.527a; MCL 257.233a; MCL 324.21303; MCL 445.1571; MCL 460.9d; MCL 480.17d; MCL 570.1127; MCL 600.5781; Mich Admin Code R 460.107; Mich Admin Code R 460.138; Mich Admin Code R 460.139; Mich Admin Code R 460.144
- positive acct @ Mich Admin Code R 460.107: passed ("establish an account")
- positive ownname @ Mich Admin Code R 460.138: passed ("in his or her own name")
- positive cutoff @ SYNTH: passed ("A landlord may discontinue utility service in the landlord name if the tenant fails to transfer the account.")

**MIG-B8-010** (cited), topic `ev-charging-requirements`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:57:27. EV charging: tenant rights, landlord resale, utility status, weights and measures, taxes.
- summary: Battery MIG-B8-010 (ev 8; evten.ab 0; evten.ba 0; evten.and 1; cwm 2; evtax.ab 5; evtax.ba 5; evtax.and 10 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\belectric vehicles?\b` / all / 8 / ev: MCL 207.803; MCL 207.822; MCL 257.801; MCL 460.10g; MCL 460.10h; MCL 460.10q; MCL 559.303; Mich Admin Code R 408.30537
- `(?:\belectric vehicles?\b|\bcharging stations?\b|\bvehicle supply equipment\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?|rental)\b)` / all / 0 / evten.ab
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?|rental)\b)[\s\S]{0,1200}?(?:\belectric vehicles?\b|\bcharging stations?\b|\bvehicle supply equipment\b)` / all / 0 / evten.ba
- `\A(?=[\s\S]*(?:\belectric vehicles?\b|\bcharging stations?\b|\bvehicle supply equipment\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?|rental)\b))` / all / 1 / evten.and: MCL 257.801
- `\bcommercial weighing and measuring devices?\b` / all / 2 / cwm: MCL 290.602; MCL 290.628c
- `(?:\belectric vehicles?\b|\bcharging\b)[\s\S]{0,1200}?(?:\btax(?:es|ed)?\b)` / all / 5 / evtax.ab: MCL 117.5k; MCL 206.520; MCL 254.324a; MCL 257.801; MCL 460.10h [heading-only, read: MCL 500.1915; MCL 600.2559]
- `(?:\btax(?:es|ed)?\b)[\s\S]{0,1200}?(?:\belectric vehicles?\b|\bcharging\b)` / all / 5 / evtax.ba: MCL 141.1355; MCL 206.520; MCL 257.248j; MCL 257.801; MCL 421.27
- `\A(?=[\s\S]*(?:\belectric vehicles?\b|\bcharging\b))(?=[\s\S]*(?:\btax(?:es|ed)?\b))` / all / 10 / evtax.and: MCL 117.5k; MCL 141.1355; MCL 206.520; MCL 207.803; MCL 254.324a; MCL 257.248j; MCL 257.801; MCL 421.27; MCL 460.10h; MCL 500.3104 [heading-only, read: MCL 500.1915; MCL 600.2559]
- positive ev @ MCL 460.10q: passed ("electric vehicle")
- positive cwm @ MCL 290.602: passed ("commercial weighing and measuring device")
- positive evtax @ MCL 257.801: passed ("plug-in hybrid electric vehicle")
- positive evten @ SYNTH: passed ("A landlord shall not prohibit a tenant from installing an electric vehicle charging station.")

**MIG-B8-020** (cited) (supersedes MIG-B8-007), topic `utility-interruption-submeter`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:58:19. Landlord interruption of submetered or landlord-supplied utility service; interference with possession. Rerun of MIG-B8-007 with heat inflections (INFLECTION line).
- summary: Battery MIG-B8-020 (intr.ab 39; intr.ba 36; intr.and 64; subm 1; landsv.ab 2; landsv.ba 1; landsv.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\binterrupt(?:ion|ions|ed|s|ing)?\b|\bterminat(?:e|ion|ed)\b|\bshut ?off\b)[\s\S]{0,1200}?(?:\b(?:electric|gas|utility|water) service\b|\bheat(?:s|ed|ing)?\b)` / all / 39 / intr.ab: MCL 32.517; MCL 74.23e; MCL 125.2329; MCL 206.527a; MCL 333.21335; MCL 380.1274a; MCL 400.57i; MCL 400.1154; MCL 400.1161; MCL 400.1205; MCL 460.9d; MCL 460.9q; MCL 460.9r; MCL 460.9s; MCL 460.10t; MCL 460.969; MCL 460.1207; MCL 484.2102; MCL 600.2918; Mich Admin Code R 460.102; Mich Admin Code R 460.102b; Mich Admin Code R 460.107; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.116; Mich Admin Code R 460.123; Mich Admin Code R 460.126; Mich Admin Code R 460.127; Mich Admin Code R 460.130; Mich Admin Code R 460.130a; ... (9 more in the battery log)
- `(?:\b(?:electric|gas|utility|water) service\b|\bheat(?:s|ed|ing)?\b)[\s\S]{0,1200}?(?:\binterrupt(?:ion|ions|ed|s|ing)?\b|\bterminat(?:e|ion|ed)\b|\bshut ?off\b)` / all / 36 / intr.ba: MCL 32.517; MCL 125.2329; MCL 206.527a; MCL 288.701; MCL 339.5803; MCL 339.5945; MCL 400.57i; MCL 400.1161; MCL 400.1205; MCL 460.9d; MCL 460.9q; MCL 460.9r; MCL 460.10t; MCL 460.10ee; MCL 460.969; MCL 460.1207; MCL 484.2102; Mich Admin Code R 408.30544; Mich Admin Code R 460.102b; Mich Admin Code R 460.107; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.112; Mich Admin Code R 460.115; Mich Admin Code R 460.123; Mich Admin Code R 460.126; Mich Admin Code R 460.126b; Mich Admin Code R 460.127; Mich Admin Code R 460.130; Mich Admin Code R 460.130a; ... (6 more in the battery log)
- `\A(?=[\s\S]*(?:\binterrupt(?:ion|ions|ed|s|ing)?\b|\bterminat(?:e|ion|ed)\b|\bshut ?off\b))(?=[\s\S]*(?:\b(?:electric|gas|utility|water) service\b|\bheat(?:s|ed|ing)?\b))` / all / 64 / intr.and: MCL 32.517; MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 74.23e; MCL 78.24b; MCL 117.3; MCL 117.5f; MCL 125.2302; MCL 125.2329; MCL 125.2652; MCL 141.433a; MCL 141.1552; MCL 206.527a; MCL 208.1430; MCL 288.701; MCL 333.21335; MCL 339.5803; MCL 339.5945; MCL 380.1274a; MCL 389.122; MCL 400.57i; MCL 400.1154; MCL 400.1161; MCL 400.1205; MCL 440.9102; MCL 460.9d; MCL 460.9q; MCL 460.9r; MCL 460.9s; ... (34 more in the battery log)
- `\bsub-?meter(?:s|ed|ing)?\b` / all / 1 / subm: MCL 18.1713
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)[\s\S]{0,1200}?(?:\binterrupt(?:ion|ions|ed|s|ing)?\b)` / all / 2 / landsv.ab: MCL 554.1052; MCL 600.2918
- `(?:\binterrupt(?:ion|ions|ed|s|ing)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b)` / all / 1 / landsv.ba: MCL 600.2918
- `\A(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|renters?)\b))(?=[\s\S]*(?:\binterrupt(?:ion|ions|ed|s|ing)?\b))` / all / 5 / landsv.and: MCL 257.717; MCL 500.1202; MCL 500.6868; MCL 554.1052; MCL 600.2918
- positive intr @ MCL 600.2918: passed ("interruption of a service procured by the tenant")
- positive subm @ MCL 18.1713: passed ("sub-metering")
- positive landsv @ MCL 600.2918: passed ("the termination or interruption of a service procured by the tenant")

**MIG-B8-021** (cited) (supersedes MIG-B8-008), topic `utility-shutoff-statute`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:58:43. Utility shutoff protections: heating season, winter protection, medical emergency, military, notice. Rerun of MIG-B8-008 with postpone inflections (INFLECTION line).
- summary: Battery MIG-B8-021 (winter.ab 9; winter.ba 11; winter.and 11; wpp 8; med.ab 7; med.ba 7; med.and 9; storm.ab 2; storm.ba 3; storm.and 4 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bheating season\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b)` / all / 9 / winter.ab: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.131; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `(?:\bshut ?off\b|\bshutoff\b)[\s\S]{0,1200}?(?:\bheating season\b)` / all / 11 / winter.ba: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.123; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `\A(?=[\s\S]*(?:\bheating season\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b))` / all / 11 / winter.and: MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.111; Mich Admin Code R 460.111a; Mich Admin Code R 460.123; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.138; Mich Admin Code R 460.140; Mich Admin Code R 460.141
- `\bwinter protection\b` / all / 8 / wpp: MCL 206.527a; MCL 211.7bb; MCL 460.9q; MCL 460.9r; MCL 460.10t; Mich Admin Code R 460.131; Mich Admin Code R 460.132; Mich Admin Code R 460.140
- `(?:\bmedical emergency\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b|\bpostpone(?:s|d|ment)?\b)` / all / 7 / med.ab: MCL 460.9q; MCL 460.9s; MCL 460.10t; Mich Admin Code R 460.129; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.140
- `(?:\bshut ?off\b|\bshutoff\b|\bpostpone(?:s|d|ment)?\b)[\s\S]{0,1200}?(?:\bmedical emergency\b)` / all / 7 / med.ba: MCL 460.9q; MCL 460.9r; MCL 460.9s; MCL 460.10t; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.140
- `\A(?=[\s\S]*(?:\bmedical emergency\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b|\bpostpone(?:s|d|ment)?\b))` / all / 9 / med.and: MCL 257.304; MCL 460.9q; MCL 460.9r; MCL 460.9s; MCL 460.10t; Mich Admin Code R 460.129; Mich Admin Code R 460.130; Mich Admin Code R 460.131; Mich Admin Code R 460.140
- `(?:\b(?:storm|hurricane|state of emergency|declared emergency|extreme weather)\b)[\s\S]{0,1200}?(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion)?\b)` / all / 2 / storm.ab: MCL 324.3112b; Mich Admin Code R 460.134
- `(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion)?\b)[\s\S]{0,1200}?(?:\b(?:storm|hurricane|state of emergency|declared emergency|extreme weather)\b)` / all / 3 / storm.ba: MCL 324.3112b; MCL 427.2; Mich Admin Code R 460.134
- `\A(?=[\s\S]*(?:\b(?:storm|hurricane|state of emergency|declared emergency|extreme weather)\b))(?=[\s\S]*(?:\bshut ?off\b|\bshutoff\b|\bdisconnect(?:ion)?\b))` / all / 4 / storm.and: MCL 324.3112b; MCL 427.2; Mich Admin Code R 408.30547c; Mich Admin Code R 460.134
- positive winter @ MCL 460.10t: passed ("heating season")
- positive wpp @ MCL 460.9r: passed ("winter protection")
- positive med @ MCL 460.9s: passed ("medical emergency")
- positive storm @ Mich Admin Code R 460.134: passed ("extreme weather")

**MIG-B8-011** (cited), topic `ev-charging-end-of-tenancy`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:58:54. Ownership and removal of tenant-installed EV charging equipment when the tenancy ends.
- summary: Battery MIG-B8-011 (evse 3; evrem.ab 0; evrem.ba 0; evrem.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bvehicle supply equipment\b|\bcharging stations?\b` / all / 3 / evse: MCL 460.10h; MCL 460.10q; MCL 559.303
- `(?:\belectric vehicles?\b|\bcharging (?:stations?|systems?|equipment)\b|\bvehicle supply equipment\b)[\s\S]{0,1200}?(?:\bremov(?:e|al|ed|ing)\b|\bend of the (?:lease|tenancy)\b|\btermination of the (?:lease|tenancy)\b)` / all / 0 / evrem.ab
- `(?:\bremov(?:e|al|ed|ing)\b|\bend of the (?:lease|tenancy)\b|\btermination of the (?:lease|tenancy)\b)[\s\S]{0,1200}?(?:\belectric vehicles?\b|\bcharging (?:stations?|systems?|equipment)\b|\bvehicle supply equipment\b)` / all / 0 / evrem.ba
- `\A(?=[\s\S]*(?:\belectric vehicles?\b|\bcharging (?:stations?|systems?|equipment)\b|\bvehicle supply equipment\b))(?=[\s\S]*(?:\bremov(?:e|al|ed|ing)\b|\bend of the (?:lease|tenancy)\b|\btermination of the (?:lease|tenancy)\b))` / all / 0 / evrem.and
- positive evse @ MCL 559.303: passed ("vehicle supply equipment")
- positive evrem @ SYNTH: passed ("When the tenancy ends, the tenant may remove the electric vehicle charging station at the tenant expense.")

**MIG-B8-012** (cited), topic `ev-charging-shared-area`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:59:05. EV charging installed in common or shared parking areas.
- summary: Battery MIG-B8-012 (evcom.ab 1; evcom.ba 1; evcom.and 1; evse 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\belectric vehicles?\b|\bcharging (?:stations?|systems?)\b|\bvehicle supply equipment\b)[\s\S]{0,1200}?(?:\bcommon areas?\b|\bparking (?:spaces?|areas?|spots?|lots?)\b|\bshared roof\b)` / all / 1 / evcom.ab: MCL 559.303
- `(?:\bcommon areas?\b|\bparking (?:spaces?|areas?|spots?|lots?)\b|\bshared roof\b)[\s\S]{0,1200}?(?:\belectric vehicles?\b|\bcharging (?:stations?|systems?)\b|\bvehicle supply equipment\b)` / all / 1 / evcom.ba: MCL 559.303
- `\A(?=[\s\S]*(?:\belectric vehicles?\b|\bcharging (?:stations?|systems?)\b|\bvehicle supply equipment\b))(?=[\s\S]*(?:\bcommon areas?\b|\bparking (?:spaces?|areas?|spots?|lots?)\b|\bshared roof\b))` / all / 1 / evcom.and: MCL 559.303
- `\bvehicle supply equipment\b` / all / 1 / evse: MCL 559.303
- positive evcom @ MCL 559.303: passed ("common area")
- positive evse @ MCL 559.303: passed ("vehicle supply equipment")

**MIG-B8-013** (cited), topic `telecom-access`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:59:35. Tenant access to cable, satellite, broadband; antennas; provider access to multifamily buildings.
- summary: Battery MIG-B8-013 (ant.ab 1; ant.ba 1; ant.and 1; svc.ab 4; svc.ba 4; svc.and 6; cta 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bantennas?\b|\bantennae\b|\bsatellite dish(?:es)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|residents?)\b)` / all / 1 / ant.ab: MCL 125.2328
- `(?:\b(?:tenants?|lessees?|landlords?|residents?)\b)[\s\S]{0,1200}?(?:\bantennas?\b|\bantennae\b|\bsatellite dish(?:es)?\b)` / all / 1 / ant.ba: MCL 125.2328
- `\A(?=[\s\S]*(?:\bantennas?\b|\bantennae\b|\bsatellite dish(?:es)?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|residents?)\b))` / all / 1 / ant.and: MCL 125.2328
- `(?:\b(?:cable television|video service|cable service|broadband|internet service|telecommunications? services?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|apartments?|multiple dwellings?|residential rental)\b)` / all / 4 / svc.ab: MCL 125.4207; MCL 205.93a; MCL 484.2401; MCL 484.3301
- `(?:\b(?:tenants?|lessees?|landlords?|apartments?|multiple dwellings?|residential rental)\b)[\s\S]{0,1200}?(?:\b(?:cable television|video service|cable service|broadband|internet service|telecommunications? services?)\b)` / all / 4 / svc.ba: MCL 205.93a; MCL 460.9d; MCL 484.2401; MCL 484.3301
- `\A(?=[\s\S]*(?:\b(?:cable television|video service|cable service|broadband|internet service|telecommunications? services?)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|apartments?|multiple dwellings?|residential rental)\b))` / all / 6 / svc.and: MCL 125.4207; MCL 125.4611; MCL 205.93a; MCL 460.9d; MCL 484.2401; MCL 484.3301
- `\bcentral television antenna\b` / all / 1 / cta: MCL 125.2328
- positive ant @ MCL 125.2328: passed ("exterior television antenna")
- positive svc @ MCL 484.2401: passed ("shared tenant")
- positive cta @ MCL 125.2328: passed ("central television antenna")

**MIG-B8-014** (cited), topic `portable-solar`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 20:59:59. Tenant plug-in or portable solar rights; solar restrictions in leases; parallel operation approval.
- summary: Battery MIG-B8-014 (solten.ab 2; solten.ba 4; solten.and 5; plug 0; par.ab 1; par.ba 1; par.and 1; solrest.ab 2; solrest.ba 2; solrest.and 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsolar\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|renters?|rental agreements?)\b)` / all / 2 / solten.ab: MCL 211.1154; MCL 211.1159
- `(?:\b(?:tenants?|lessees?|landlords?|renters?|rental agreements?)\b)[\s\S]{0,1200}?(?:\bsolar\b)` / all / 4 / solten.ba: MCL 211.1152; MCL 211.1154; MCL 211.1155; MCL 211.1159
- `\A(?=[\s\S]*(?:\bsolar\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|renters?|rental agreements?)\b))` / all / 5 / solten.and: MCL 211.9; MCL 211.1152; MCL 211.1154; MCL 211.1155; MCL 211.1159
- `\bplug-?in solar\b|\bbalcony solar\b|\bportable solar\b` / all / 0 / plug
- `(?:\bin parallel\b|\bparallel operat\w*\b)[\s\S]{0,1200}?(?:\bgenerators?\b|\bdistribution system\b)` / all / 1 / par.ab: MCL 460.1173
- `(?:\bgenerators?\b|\bdistribution system\b)[\s\S]{0,1200}?(?:\bin parallel\b|\bparallel operat\w*\b)` / all / 1 / par.ba: MCL 460.1173
- `\A(?=[\s\S]*(?:\bin parallel\b|\bparallel operat\w*\b))(?=[\s\S]*(?:\bgenerators?\b|\bdistribution system\b))` / all / 1 / par.and: MCL 460.1173
- `(?:\bsolar energy systems?\b)[\s\S]{0,1200}?(?:\bprohibit\w*\b|\binvalid and unenforceable\b)` / all / 2 / solrest.ab: MCL 559.307; MCL 559.309
- `(?:\bprohibit\w*\b|\binvalid and unenforceable\b)[\s\S]{0,1200}?(?:\bsolar energy systems?\b)` / all / 2 / solrest.ba: MCL 559.307; MCL 559.309
- `\A(?=[\s\S]*(?:\bsolar energy systems?\b))(?=[\s\S]*(?:\bprohibit\w*\b|\binvalid and unenforceable\b))` / all / 2 / solrest.and: MCL 559.307; MCL 559.309
- positive solten @ MCL 211.1159: passed ("lessee")
- positive par @ MCL 460.1173: passed ("in parallel with the distribution system")
- positive solrest @ MCL 559.307: passed ("invalid and unenforceable")
- positive plug @ SYNTH: passed ("A tenant may install a plug-in solar device on a balcony.")

**MIG-B8-015** (superseded by MIG-B8-022), topic `property-tax-rent-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:00:17. Renter property tax credit; landlord statement of rent or property-tax share.
- summary: Battery MIG-B8-015 (gross 2; rptx.ab 1; rptx.ba 1; rptx.and 3; llstmt.ab 823; llstmt.ba 786; llstmt.and 1161 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bgross rent\b` / all / 2 / gross: MCL 206.508; MCL 206.520
- `(?:\brent(?:s|ed|er|ers|al)?\b)[\s\S]{0,1200}?(?:\bproperty tax(?:es)? credit\b|\bhomestead property tax\b|\bcredit for property taxes\b)` / all / 1 / rptx.ab: MCL 206.520
- `(?:\bproperty tax(?:es)? credit\b|\bhomestead property tax\b|\bcredit for property taxes\b)[\s\S]{0,1200}?(?:\brent(?:s|ed|er|ers|al)?\b)` / all / 1 / rptx.ba: MCL 206.520
- `\A(?=[\s\S]*(?:\brent(?:s|ed|er|ers|al)?\b))(?=[\s\S]*(?:\bproperty tax(?:es)? credit\b|\bhomestead property tax\b|\bcredit for property taxes\b))` / all / 3 / rptx.and: MCL 206.520; MCL 211.53; MCL 484.3306
- `(?:\b(?:landlords?|lessors?|owners?)\b)[\s\S]{0,1200}?(?:\b(?:statement|certif\w*|receipt)s?\b)` / all / 823 / llstmt.ab: MCL 3.164; MCL 18.1268; MCL 21.142a; MCL 21.604; MCL 28.411; MCL 28.425b; MCL 29.5d; MCL 29.28; MCL 29.29; MCL 35.82; MCL 38.1140; MCL 41.725; MCL 41.729a; MCL 54.105; MCL 54.211; MCL 69.8; MCL 78.2; MCL 105.25; MCL 117.4q; MCL 117.9; MCL 120.155; MCL 123.11; MCL 123.34; MCL 123.753; MCL 123.1285; MCL 124.287; MCL 124.473; MCL 124.759; MCL 125.52; MCL 125.53; ... (793 more in the battery log)
- `(?:\b(?:statement|certif\w*|receipt)s?\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|owners?)\b)` / all / 786 / llstmt.ba: MCL 18.1268; MCL 21.142a; MCL 21.604; MCL 28.422; MCL 28.434a; MCL 29.5d; MCL 29.28; MCL 29.29; MCL 29.30; MCL 29.473; MCL 35.82; MCL 41.271; MCL 41.280; MCL 41.724; MCL 54.211; MCL 55.291; MCL 69.8; MCL 78.2; MCL 105.4; MCL 117.4q; MCL 117.9; MCL 120.155; MCL 123.773; MCL 124.759; MCL 125.52; MCL 125.53; MCL 125.54; MCL 125.485a; MCL 125.526; MCL 125.529; ... (756 more in the battery log) [heading-only, read: MCL 125.1608; MCL 207.844; MCL 211.53; MCL 324.32511; MCL 444.102]
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?|owners?)\b))(?=[\s\S]*(?:\b(?:statement|certif\w*|receipt)s?\b))` / all / 1161 / llstmt.and: MCL 3.164; MCL 3.751; MCL 16.735; MCL 18.1268; MCL 21.142a; MCL 21.142d; MCL 21.604; MCL 28.112; MCL 28.298; MCL 28.411; MCL 28.422; MCL 28.425b; MCL 28.434a; MCL 28.435; MCL 29.5d; MCL 29.28; MCL 29.29; MCL 29.30; MCL 29.473; MCL 35.82; MCL 36.108; MCL 37.1502; MCL 37.2502; MCL 38.1140; MCL 41.271; MCL 41.280; MCL 41.724; MCL 41.725; MCL 41.729a; MCL 48.101; ... (1131 more in the battery log) [heading-only, read: MCL 211.53; MCL 444.102]
- positive gross @ MCL 206.520: passed ("gross rent")
- positive rptx @ MCL 206.520: passed ("credit for property taxes")
- positive llstmt @ SYNTH: passed ("The landlord shall furnish the renter a statement certifying the gross rent paid.")

**MIG-B8-016** (cited), topic `parking-rules-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:00:34. Parking or towing rules for residential tenants; notice before towing; parking fees in leases.
- summary: Battery MIG-B8-016 (parkten.ab 9; parkten.ba 14; parkten.and 22; towten.ab 6; towten.ba 1; towten.and 10; noconsent 26 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bparking\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|rental agreements?|apartments?|multiple dwellings?)\b)` / all / 9 / parkten.ab: MCL 29.1; MCL 125.402; MCL 125.1351; MCL 257.675b; MCL 257.675c; MCL 257.742; MCL 259.109; MCL 259.117; MCL 259.144
- `(?:\b(?:tenants?|lessees?|landlords?|rental agreements?|apartments?|multiple dwellings?)\b)[\s\S]{0,1200}?(?:\bparking\b)` / all / 14 / parkten.ba: MCL 141.1369; MCL 211.181; MCL 257.675b; MCL 257.675c; MCL 257.742; MCL 257.904d; MCL 259.109; MCL 324.79113; MCL 380.1606; MCL 389.126; MCL 390.156; MCL 390.396; MCL 390.558; MCL 390.844
- `\A(?=[\s\S]*(?:\bparking\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|rental agreements?|apartments?|multiple dwellings?)\b))` / all / 22 / parkten.and: MCL 29.1; MCL 125.402; MCL 125.1351; MCL 125.4402; MCL 125.4611; MCL 141.1369; MCL 208.1437; MCL 211.181; MCL 257.675b; MCL 257.675c; MCL 257.742; MCL 257.904d; MCL 259.109; MCL 259.117; MCL 259.144; MCL 324.79113; MCL 380.1606; MCL 389.126; MCL 390.156; MCL 390.396; MCL 390.558; MCL 390.844
- `(?:\btow(?:ed|ing|s)?\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|residents?|apartments?|multiple dwellings?|multifamily)\b)` / all / 6 / towten.ab: MCL 125.2330i; MCL 257.301; MCL 257.723; MCL 257.801; MCL 324.74101; MCL 570.525
- `(?:\b(?:tenants?|lessees?|residents?|apartments?|multiple dwellings?|multifamily)\b)[\s\S]{0,1200}?(?:\btow(?:ed|ing|s)?\b)` / all / 1 / towten.ba: MCL 570.525
- `\A(?=[\s\S]*(?:\btow(?:ed|ing|s)?\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|residents?|apartments?|multiple dwellings?|multifamily)\b))` / all / 10 / towten.and: MCL 125.2330i; MCL 257.301; MCL 257.625n; MCL 257.717; MCL 257.723; MCL 257.801; MCL 257.1403; MCL 324.74101; MCL 324.81133; MCL 570.525
- `\bwithout the consent of the (?:property )?owner\b` / all / 26 / noconsent: MCL 257.252a; MCL 257.252k; MCL 257.252l; MCL 257.618a; MCL 287.308; MCL 317.61; MCL 317.62; MCL 324.43103; MCL 324.73102; MCL 324.73103; MCL 324.80130f; MCL 324.80130o; MCL 426.155; MCL 426.156; MCL 426.174; MCL 485.8; MCL 750.108; MCL 750.383; MCL 750.416; MCL 750.463; MCL 750.465a; MCL 750.552; MCL 752.782; MCL 752.783; MCL 752.1052; Const 1963, art. I, § 8
- positive parkten @ MCL 257.675b: passed ("lessee")
- positive towten @ MCL 125.2330i: passed ("lessee")
- positive noconsent @ MCL 257.252a: passed ("without the consent of the property owner")

**MIG-B8-017** (cited), topic `unbundled-parking`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:00:44. Separate pricing of parking from rent (unbundled parking).
- summary: Battery MIG-B8-017 (unb 7; parksep.ab 4; parksep.ba 6; parksep.and 22; parkfee 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bunbundl\w*\b` / all / 7 / unb: MCL 400.109d; MCL 460.10b; MCL 460.10d; MCL 484.2202; MCL 484.2352; MCL 484.2355; MCL 484.2356
- `(?:\bparking\b)[\s\S]{0,1200}?(?:\bseparate(?:ly)?\b|\bunbundl\w*\b)` / all / 4 / parksep.ab: MCL 124.753; MCL 247.662; MCL 257.624a; MCL 257.942
- `(?:\bseparate(?:ly)?\b|\bunbundl\w*\b)[\s\S]{0,1200}?(?:\bparking\b)` / all / 6 / parksep.ba: MCL 125.4603; MCL 125.4703; MCL 125.4803; MCL 252.302; MCL 257.942; MCL 324.3118
- `\A(?=[\s\S]*(?:\bparking\b))(?=[\s\S]*(?:\bseparate(?:ly)?\b|\bunbundl\w*\b))` / all / 22 / parksep.and: MCL 117.5k; MCL 124.753; MCL 125.402; MCL 125.4201; MCL 125.4301; MCL 125.4402; MCL 125.4603; MCL 125.4703; MCL 125.4803; MCL 141.103; MCL 141.635; MCL 207.559; MCL 208.1111; MCL 208.1437; MCL 247.662; MCL 247.663; MCL 252.302; MCL 257.624a; MCL 257.705; MCL 257.942; MCL 324.3118; MCL 324.30312
- `\bparking (?:fees?|charges?|space rent)\b` / all / 2 / parkfee: MCL 4.1948; MCL 257.675
- positive unb @ MCL 400.109d: passed ("unbundling")
- positive parkfee @ MCL 4.1948: passed ("Parking fee")
- positive parksep @ SYNTH: passed ("The cost of parking shall be unbundled and priced separately from the rent.")

**MIG-B8-018** (cited), topic `periodic-services-entry`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:01:01. Landlord entry for regularly scheduled services (pest control, filter changes) without per-visit notice.
- summary: Battery MIG-B8-018 (perm 2; sched.ab 5; sched.ba 5; sched.and 17; entten.ab 5; entten.ba 3; entten.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `\brequest and obtain permission\b` / all / 2 / perm: MCL 125.526; MCL 287.743
- `(?:\b(?:enter|entry|entering)\b)[\s\S]{0,1200}?(?:\b(?:pest control|extermina\w*|filters?|regularly scheduled|scheduled (?:services?|maintenance))\b)` / all / 5 / sched.ab: MCL 124.505a; MCL 168.720d; MCL 286.255; MCL 288.710; MCL 324.12101
- `(?:\b(?:pest control|extermina\w*|filters?|regularly scheduled|scheduled (?:services?|maintenance))\b)[\s\S]{0,1200}?(?:\b(?:enter|entry|entering)\b)` / all / 5 / sched.ba: MCL 124.505a; MCL 125.2658a; MCL 168.720d; MCL 205.94k; MCL 288.710
- `\A(?=[\s\S]*(?:\b(?:enter|entry|entering)\b))(?=[\s\S]*(?:\b(?:pest control|extermina\w*|filters?|regularly scheduled|scheduled (?:services?|maintenance))\b))` / all / 17 / sched.and: MCL 3.1053; MCL 124.505a; MCL 125.2090b; MCL 125.2658a; MCL 168.720d; MCL 205.54x; MCL 205.94k; MCL 286.255; MCL 286.501; MCL 288.710; MCL 324.12101; MCL 380.1311; MCL 380.1311a; MCL 399.205; MCL 436.1531; MCL 600.1099c; Const 1963, art. II, § 4
- `(?:\b(?:landlords?|lessors?|owners?)\b)[\s\S]{0,1200}?(?:\bent(?:er|ry|ering) (?:the )?(?:leasehold|dwelling unit|rental unit|premises)\b)` / all / 5 / entten.ab: MCL 125.526; MCL 287.322; MCL 287.709; MCL 600.2944; MCL 600.5711
- `(?:\bent(?:er|ry|ering) (?:the )?(?:leasehold|dwelling unit|rental unit|premises)\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|owners?)\b)` / all / 3 / entten.ba: MCL 125.526; MCL 287.709; MCL 600.2944
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?|owners?)\b))(?=[\s\S]*(?:\bent(?:er|ry|ering) (?:the )?(?:leasehold|dwelling unit|rental unit|premises)\b))` / all / 5 / entten.and: MCL 125.526; MCL 287.322; MCL 287.709; MCL 600.2944; MCL 600.5711
- positive perm @ MCL 125.526: passed ("request and obtain permission")
- positive entten @ MCL 125.526: passed ("the owner of the leasehold shall request and obtain permission to enter the leasehold")
- positive sched @ SYNTH: passed ("The landlord may enter the dwelling unit without notice to provide regularly scheduled pest control services.")

**MIG-B8-022** (cited) (supersedes MIG-B8-015), topic `property-tax-rent-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:01:34. Renter property tax credit; landlord statement of rent or property-tax share. Rerun of MIG-B8-015 with a narrower landlord-statement term (the first ran too wide to read).
- summary: Battery MIG-B8-022 (gross 2; rptx.ab 1; rptx.ba 1; rptx.and 3; llstmt.ab 1; llstmt.ba 1; llstmt.and 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bgross rent\b` / all / 2 / gross: MCL 206.508; MCL 206.520
- `(?:\brent(?:s|ed|er|ers|al)?\b)[\s\S]{0,1200}?(?:\bproperty tax(?:es)? credit\b|\bhomestead property tax\b|\bcredit for property taxes\b)` / all / 1 / rptx.ab: MCL 206.520
- `(?:\bproperty tax(?:es)? credit\b|\bhomestead property tax\b|\bcredit for property taxes\b)[\s\S]{0,1200}?(?:\brent(?:s|ed|er|ers|al)?\b)` / all / 1 / rptx.ba: MCL 206.520
- `\A(?=[\s\S]*(?:\brent(?:s|ed|er|ers|al)?\b))(?=[\s\S]*(?:\bproperty tax(?:es)? credit\b|\bhomestead property tax\b|\bcredit for property taxes\b))` / all / 3 / rptx.and: MCL 206.520; MCL 211.53; MCL 484.3306
- `(?:\b(?:landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\bgross rent\b|\brent paid\b|\brent (?:certificates?|statements?|receipts?)\b|\bproperty tax(?:es)? (?:paid|attributable)\b)` / all / 1 / llstmt.ab: MCL 206.508
- `(?:\bgross rent\b|\brent paid\b|\brent (?:certificates?|statements?|receipts?)\b|\bproperty tax(?:es)? (?:paid|attributable)\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?)\b)` / all / 1 / llstmt.ba: MCL 206.508
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?)\b))(?=[\s\S]*(?:\bgross rent\b|\brent paid\b|\brent (?:certificates?|statements?|receipts?)\b|\bproperty tax(?:es)? (?:paid|attributable)\b))` / all / 1 / llstmt.and: MCL 206.508
- positive gross @ MCL 206.520: passed ("gross rent")
- positive rptx @ MCL 206.520: passed ("credit for property taxes")
- positive llstmt @ MCL 206.508: passed ("gross rent")
- positive llstmt @ SYNTH: passed ("The landlord shall furnish the renter a statement of the gross rent paid.")

**MIG-B9-001** (cited), topic `automatic-renewal`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:23:51. Automatic renewal of leases; consumer auto-renewal laws; renewal near tenancy words.
- summary: Battery MIG-B9-001 (ar.ab 43; ar.ba 26; ar.and 63; arl.ab 54; arl.ba 57; arl.and 104; arp 21 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bautomatic(?:ally)?\b)[\s\S]{0,1200}?(?:\brenew(?:s|ed|al|als|ing|able)?\b)` / all / 43 / ar.ab: MCL 28.292; MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 125.4301; MCL 141.433a; MCL 256.679; MCL 256.681; MCL 257.307; MCL 288.513; MCL 288.678; MCL 290.459; MCL 324.6521; MCL 324.11523; MCL 324.36111; MCL 324.36112; MCL 324.36113; MCL 333.13725; MCL 333.17747; MCL 333.18361; MCL 333.27402; MCL 339.1006; MCL 339.1015; MCL 380.522; MCL 380.1274a; MCL 389.122; MCL 390.503; MCL 445.952; ... (13 more in the battery log)
- `(?:\brenew(?:s|ed|al|als|ing|able)?\b)[\s\S]{0,1200}?(?:\bautomatic(?:ally)?\b)` / all / 26 / ar.ba: MCL 28.428; MCL 256.679; MCL 256.681; MCL 257.248e; MCL 290.459; MCL 324.6521; MCL 324.11523; MCL 324.36111; MCL 324.36112; MCL 324.36113; MCL 333.13725; MCL 333.17747; MCL 333.21313; MCL 333.21551; MCL 390.503; MCL 400.713; MCL 474.107; MCL 474.117; MCL 500.1123; MCL 500.3819; MCL 500.3839; MCL 500.3933; MCL 559.204b; MCL 559.222b; MCL 722.115n; MCL 777.32
- `\A(?=[\s\S]*(?:\bautomatic(?:ally)?\b))(?=[\s\S]*(?:\brenew(?:s|ed|al|als|ing|able)?\b))` / all / 63 / ar.and: MCL 28.292; MCL 28.428; MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 125.4301; MCL 141.433a; MCL 252.318; MCL 256.629; MCL 256.679; MCL 256.681; MCL 257.248e; MCL 257.307; MCL 257.310; MCL 288.513; MCL 288.678; MCL 290.459; MCL 324.6521; MCL 324.11523; MCL 324.36111; MCL 324.36112; MCL 324.36113; MCL 330.1232a; MCL 333.13725; MCL 333.16181; MCL 333.16189; MCL 333.17747; MCL 333.18357; ... (33 more in the battery log)
- `(?:\brenew(?:s|ed|al|als|ing)?\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|leased|tenants?|tenancy|tenancies|rental agreements?|lessees?)\b)` / all / 54 / arl.ab: MCL 18.1221; MCL 36.102; MCL 38.1138; MCL 38.1140; MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 125.74; MCL 125.526; MCL 125.920; MCL 125.1351; MCL 125.2007; MCL 141.433a; MCL 141.1355; MCL 141.1403; MCL 211.27a; MCL 254.332; MCL 257.226; MCL 257.248; MCL 324.50701; MCL 380.395; MCL 380.1274a; MCL 389.122; MCL 393.362; MCL 399.508; MCL 400.713; MCL 432.111a; MCL 436.1519; ... (24 more in the battery log)
- `(?:\b(?:lease|leases|leased|tenants?|tenancy|tenancies|rental agreements?|lessees?)\b)[\s\S]{0,1200}?(?:\brenew(?:s|ed|al|als|ing)?\b)` / all / 57 / arl.ba: MCL 18.1221; MCL 38.1138; MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 117.5k; MCL 125.920; MCL 125.1351; MCL 125.2007; MCL 141.433a; MCL 141.1355; MCL 141.1403; MCL 211.27a; MCL 254.332; MCL 257.226; MCL 257.625o; MCL 257.805; MCL 330.1137; MCL 380.395; MCL 380.1274a; MCL 389.122; MCL 393.362; MCL 399.501; MCL 399.508; MCL 400.713; MCL 432.107b; MCL 432.111a; MCL 436.1519; ... (27 more in the battery log) [heading-only, read: MCL 324.50701; MCL 324.80124]
- `\A(?=[\s\S]*(?:\brenew(?:s|ed|al|als|ing)?\b))(?=[\s\S]*(?:\b(?:lease|leases|leased|tenants?|tenancy|tenancies|rental agreements?|lessees?)\b))` / all / 104 / arl.and: MCL 18.321; MCL 18.1221; MCL 36.102; MCL 38.1138; MCL 38.1140; MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 117.5k; MCL 124.550; MCL 125.74; MCL 125.526; MCL 125.920; MCL 125.1351; MCL 125.1411; MCL 125.1422; MCL 125.2007; MCL 125.4301; MCL 141.433a; MCL 141.1355; MCL 141.1403; MCL 211.27a; MCL 254.332; MCL 257.226; MCL 257.248; MCL 257.307; MCL 257.625o; MCL 257.717; ... (74 more in the battery log) [heading-only, read: MCL 324.50701]
- `\bautomatic(?:ally)? renew\w*` / all / 21 / arp: MCL 41.75b; MCL 46.11c; MCL 68.36; MCL 78.24b; MCL 117.5f; MCL 141.433a; MCL 288.513; MCL 288.678; MCL 324.11523; MCL 324.36111; MCL 324.36112; MCL 324.36113; MCL 339.1015; MCL 380.522; MCL 380.1274a; MCL 389.122; MCL 390.503; MCL 445.952; MCL 451.2406; MCL 500.3839; MCL 567.227
- positive ar @ MCL 339.1015: passed ("no provision for mandatory or automatic renewal of the contract")
- positive arl @ MCL 554.616: passed ("leases entered into, renewed or renegotiated")
- positive arp @ MCL 339.1015: passed ("automatic renewal of the contract")

**MIG-B9-002** (cited), topic `guarantor-renewal`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:24:12. Guaranty, cosigner and surety rules near tenancy; statute of frauds; suit-against-principal rule.
- summary: Battery MIG-B9-002 (gu.ab 24; gu.ba 39; gu.and 74; cos 4; ans 1; supr.ab 0; supr.ba 0; supr.and 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bguarant(?:y|ies|ee|ees|eed|or|ors)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|tenants?|tenancy|rental agreements?|lessees?|landlords?|lessors?)\b)` / all / 24 / gu.ab: MCL 38.1137; MCL 125.696; MCL 125.2007; MCL 125.2023; MCL 125.2029h; MCL 125.2053; MCL 125.2056; MCL 207.505; MCL 207.526; MCL 328.214; MCL 390.957; MCL 440.2860; MCL 447.157; MCL 449.1910; MCL 450.5009; MCL 484.3207; MCL 492.23; MCL 492.25; MCL 492.33; MCL 492.102; MCL 500.1283; MCL 550.1207; MCL 691.1852; 2026-PA-0102
- `(?:\b(?:lease|leases|tenants?|tenancy|rental agreements?|lessees?|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\bguarant(?:y|ies|ee|ees|eed|or|ors)\b)` / all / 39 / gu.ba: MCL 18.1722; MCL 38.1137; MCL 123.961g; MCL 125.907; MCL 125.1351; MCL 125.1422; MCL 125.1444c; MCL 125.2012; MCL 125.2052; MCL 125.2053; MCL 125.2056; MCL 125.2058; MCL 169.230b.added; MCL 207.505; MCL 207.526; MCL 259.143; MCL 285.255; MCL 331.57; MCL 331.1304; MCL 331.1305; MCL 331.1404; MCL 380.1274a; MCL 390.957; MCL 438.31c; MCL 440.1201; MCL 440.2860; MCL 445.902; MCL 450.1261; MCL 450.2261; MCL 457.503; ... (9 more in the battery log)
- `\A(?=[\s\S]*(?:\bguarant(?:y|ies|ee|ees|eed|or|ors)\b))(?=[\s\S]*(?:\b(?:lease|leases|tenants?|tenancy|rental agreements?|lessees?|landlords?|lessors?)\b))` / all / 74 / gu.and: MCL 18.1722; MCL 38.1137; MCL 38.1140; MCL 123.961g; MCL 124.547; MCL 125.696; MCL 125.907; MCL 125.1351; MCL 125.1422; MCL 125.1422b; MCL 125.1432; MCL 125.1444c; MCL 125.2007; MCL 125.2012; MCL 125.2023; MCL 125.2029h; MCL 125.2052; MCL 125.2053; MCL 125.2056; MCL 125.2058; MCL 141.1367; MCL 169.230b.added; MCL 207.505; MCL 207.526; MCL 259.143; MCL 285.255; MCL 324.20101; MCL 324.21310a; MCL 324.76703; MCL 328.214; ... (44 more in the battery log)
- `\bco-?signers?\b` / all / 4 / cos: MCL 445.271; MCL 445.272; MCL 445.273; MCL 490.423
- `\bpromise to answer for the debt\b` / all / 1 / ans: MCL 566.132
- `(?:\b(?:surety|sureties|guarantors?)\b)[\s\S]{0,1200}?(?:\b(?:action|suit|proceed\w*) against (?:the )?principal\b)` / all / 0 / supr.ab
- `(?:\b(?:action|suit|proceed\w*) against (?:the )?principal\b)[\s\S]{0,1200}?(?:\b(?:surety|sureties|guarantors?)\b)` / all / 0 / supr.ba
- `\A(?=[\s\S]*(?:\b(?:surety|sureties|guarantors?)\b))(?=[\s\S]*(?:\b(?:action|suit|proceed\w*) against (?:the )?principal\b))` / all / 0 / supr.and
- positive gu @ MCL 484.3207: passed ("warranty, security, lease, and guaranty terms")
- positive cos @ MCL 445.271: passed ("renders himself or herself liable for the obligation of another person")
- positive ans @ MCL 566.132: passed ("A special promise to answer for the debt, default, or misdoings of another person")
- positive supr @ SYNTH: passed ("The surety may by written notice require the creditor to bring an action against the principal.")

**MIG-B9-003** (cited), topic `foreclosure-disclosure`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:24:27. Landlord disclosure of foreclosure to tenants or applicants; foreclosure near tenant or occupant words.
- summary: Battery MIG-B9-003 (fdt.ab 19; fdt.ba 24; fdt.and 45; fdd.ab 3; fdd.ba 0; fdd.and 7; fdp 9 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bforeclos\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|renters?|occupants?|applicants?)\b)` / all / 19 / fdt.ab: MCL 124.759; MCL 125.1422c; MCL 125.1458c; MCL 211.78f; MCL 211.78i; MCL 211.78k; MCL 211.78t; MCL 257.724; MCL 451.303; MCL 500.2154; MCL 500.6868; MCL 565.953; MCL 570.1104; MCL 570.1107; MCL 570.1117; MCL 570.1121; MCL 570.1123; MCL 570.1127; MCL 600.5744
- `(?:\b(?:tenants?|lessees?|renters?|occupants?|applicants?)\b)[\s\S]{0,1200}?(?:\bforeclos\w*)` / all / 24 / fdt.ba: MCL 124.759; MCL 125.853; MCL 125.1422a; MCL 125.1458c; MCL 125.1509c; MCL 125.2007; MCL 125.3406; MCL 211.78i; MCL 211.78k; MCL 211.78t; MCL 257.724; MCL 339.2504; MCL 445.1655; MCL 487.2055; MCL 493.56; MCL 500.2154; MCL 500.6868; MCL 570.1107; MCL 570.1117; MCL 570.1121; MCL 570.1123; MCL 570.1127; MCL 600.8031; 2026-PA-0032
- `\A(?=[\s\S]*(?:\bforeclos\w*))(?=[\s\S]*(?:\b(?:tenants?|lessees?|renters?|occupants?|applicants?)\b))` / all / 45 / fdt.and: MCL 124.759; MCL 125.534; MCL 125.853; MCL 125.1255; MCL 125.1401; MCL 125.1422a; MCL 125.1422c; MCL 125.1458c; MCL 125.1509c; MCL 125.2007; MCL 125.2330i; MCL 125.2657; MCL 125.3406; MCL 211.7cc; MCL 211.27a; MCL 211.78f; MCL 211.78i; MCL 211.78k; MCL 211.78t; MCL 257.724; MCL 324.20126; MCL 324.21323a; MCL 324.34201; MCL 331.57; MCL 339.2504; MCL 445.1655; MCL 451.303; MCL 487.2055; MCL 493.56; MCL 500.2154; ... (15 more in the battery log)
- `(?:\b(?:landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\bforeclos\w*)` / all / 3 / fdd.ab: MCL 124.756; MCL 324.61718; MCL 600.8031
- `(?:\bforeclos\w*)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?)\b)` / all / 0 / fdd.ba
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?)\b))(?=[\s\S]*(?:\bforeclos\w*))` / all / 7 / fdd.and: MCL 117.4q; MCL 124.756; MCL 125.2657; MCL 324.61718; MCL 600.8031; MCL 700.3715; MCL 700.7817
- `\bnotice of (?:the )?foreclosure\b|\bforeclosure notice\b` / all / 9 / fdp: MCL 125.1449j; MCL 125.1449m; MCL 211.78k; MCL 554.1054; MCL 559.208; MCL 565.360; MCL 600.3212; MCL 600.3240; MCL 600.3248 [heading-only, read: MCL 600.3208]
- positive fdt @ MCL 211.78i: passed ("verbally inform the occupant that the property will be foreclosed")
- positive fdd @ SYNTH: passed ("A landlord shall disclose in writing to a prospective tenant that the premises are the subject of a foreclosure action.")
- positive fdp @ MCL 600.3212: passed ("A notice of foreclosure by advertisement must include")

**MIG-B9-004** (superseded by MIG-B9-011), topic `adverse-proceeding-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:24:47. Notice of lawsuits, condemnation, tax sale, code enforcement or lis pendens between landlord and tenant.
- summary: Battery MIG-B9-004 (apn.ab 14; apn.ba 7; apn.and 21; lis 11; tnot.ab 8; tnot.ba 9; tnot.and 14 units hit when run; 2 of 3 positives passed; controls passed (nonsense 0, must-hit 147)) positive apn@MCL 213.55 recorded as failed
- `(?:\b(?:lawsuits?|litigation|condemnation|code enforcement|tax sales?|lis pendens|legal proceedings?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?)\b)` / all / 14 / apn.ab: MCL 125.918; MCL 125.1608; MCL 125.2466; MCL 211.7dd; MCL 211.34c; MCL 254.224; MCL 259.134; MCL 324.61503c; MCL 440.2966; MCL 554.605; MCL 570.1117; MCL 570.1127; MCL 600.5775; MCL 600.8031
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:lawsuits?|litigation|condemnation|code enforcement|tax sales?|lis pendens|legal proceedings?)\b)` / all / 7 / apn.ba: MCL 125.2466; MCL 259.462; MCL 324.61503c; MCL 440.2966; MCL 554.605; MCL 570.1127; MCL 600.5775
- `\A(?=[\s\S]*(?:\b(?:lawsuits?|litigation|condemnation|code enforcement|tax sales?|lis pendens|legal proceedings?)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?)\b))` / all / 21 / apn.and: MCL 15.243; MCL 125.918; MCL 125.1608; MCL 125.2466; MCL 211.7dd; MCL 211.9m; MCL 211.34c; MCL 213.55; MCL 254.224; MCL 259.134; MCL 259.462; MCL 324.503; MCL 324.61503c; MCL 331.9; MCL 331.57; MCL 440.2966; MCL 554.605; MCL 570.1117; MCL 570.1127; MCL 600.5775; MCL 600.8031
- `\blis pendens\b` / all / 11 / lis: MCL 53.145; MCL 123.786; MCL 205.203; MCL 205.214; MCL 324.63512; MCL 565.25; MCL 570.257; MCL 570.1116; MCL 570.1117; MCL 570.1127; MCL 600.6070 [heading-only, read: MCL 600.2701; MCL 600.2711; MCL 600.2715; MCL 600.2721; MCL 600.2725; MCL 600.2731; MCL 600.2735]
- `(?:\btenants?\b)[\s\S]{0,1200}?(?:\b(?:shall|must) (?:promptly )?(?:notify|inform|forward)\b)` / all / 8 / tnot.ab: MCL 43.55; MCL 211.7cc; MCL 554.603; MCL 554.611; MCL 559.212; MCL 559.222a; MCL 570.525; Mich Admin Code R 460.107
- `(?:\b(?:shall|must) (?:promptly )?(?:notify|inform|forward)\b)[\s\S]{0,1200}?(?:\btenants?\b)` / all / 9 / tnot.ba: MCL 43.55; MCL 125.2329; MCL 554.603; MCL 554.611; MCL 559.204; MCL 559.204b; MCL 559.212; MCL 559.222a; MCL 570.525
- `\A(?=[\s\S]*(?:\btenants?\b))(?=[\s\S]*(?:\b(?:shall|must) (?:promptly )?(?:notify|inform|forward)\b))` / all / 14 / tnot.and: MCL 43.55; MCL 125.2329; MCL 211.7cc; MCL 211.27a; MCL 211.78t; MCL 339.2517; MCL 554.603; MCL 554.611; MCL 559.204; MCL 559.204b; MCL 559.212; MCL 559.222a; MCL 570.525; Mich Admin Code R 460.107
- positive apn @ MCL 213.55: FAILED ("leasehold interest of less than 6 months in the property is not a compensable claim")
- positive lis @ MCL 570.1117: passed ("notice of lis pendens")
- positive tnot @ SYNTH: passed ("A tenant who receives notice of a legal proceeding affecting the premises shall promptly notify the landlord.")

**MIG-B9-005** (superseded by MIG-B9-012), topic `eminent-domain`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:25:04. Condemnation and leases: rent, termination, award division, leasehold compensation.
- summary: Battery MIG-B9-005 (ed.ab 53; ed.ba 57; ed.and 81; lhp 33; edr.ab 3; edr.ba 1; edr.and 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:condemn\w*|eminent domain)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|leasehold|lessees?|tenants?)\b)` / all / 53 / ed.ab: MCL 3.818; MCL 41.2; MCL 42.14; MCL 45.592; MCL 117.4e; MCL 120.13; MCL 120.14; MCL 120.112; MCL 121.22; MCL 123.304; MCL 123.744; MCL 123.959; MCL 124.255; MCL 124.285; MCL 124.355; MCL 124.406; MCL 124.464; MCL 124.607; MCL 124.671; MCL 124.711; MCL 125.73; MCL 125.74; MCL 125.657; MCL 125.916; MCL 125.917; MCL 125.918; MCL 125.2023; MCL 125.2466; MCL 211.7dd; MCL 211.34c; ... (23 more in the battery log)
- `(?:\b(?:lease|leases|leasehold|lessees?|tenants?)\b)[\s\S]{0,1200}?(?:\b(?:condemn\w*|eminent domain)\b)` / all / 57 / ed.ba: MCL 45.592; MCL 117.4e; MCL 117.5k; MCL 120.112; MCL 121.22; MCL 123.304; MCL 123.744; MCL 123.959; MCL 124.255; MCL 124.285; MCL 124.355; MCL 124.406; MCL 124.464; MCL 124.549; MCL 124.607; MCL 124.671; MCL 124.711; MCL 125.657; MCL 125.661; MCL 125.907; MCL 125.916; MCL 125.917; MCL 125.1608; MCL 125.2466; MCL 141.1408; MCL 213.321; MCL 213.352; MCL 254.224; MCL 259.101; MCL 259.116; ... (27 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:condemn\w*|eminent domain)\b))(?=[\s\S]*(?:\b(?:lease|leases|leasehold|lessees?|tenants?)\b))` / all / 81 / ed.and: MCL 3.818; MCL 41.2; MCL 42.14; MCL 45.592; MCL 117.4e; MCL 117.5k; MCL 120.13; MCL 120.14; MCL 120.112; MCL 121.22; MCL 123.304; MCL 123.744; MCL 123.959; MCL 124.255; MCL 124.285; MCL 124.355; MCL 124.406; MCL 124.464; MCL 124.549; MCL 124.607; MCL 124.671; MCL 124.711; MCL 125.73; MCL 125.74; MCL 125.657; MCL 125.661; MCL 125.907; MCL 125.916; MCL 125.917; MCL 125.918; ... (51 more in the battery log)
- `\bleasehold interests?\b` / all / 33 / lhp: MCL 125.731; MCL 125.1422e; MCL 125.1424a; MCL 205.30a; MCL 207.505; MCL 207.526; MCL 207.629; MCL 211.27a; MCL 213.55; MCL 213.352; MCL 257.625n; MCL 324.33933; MCL 324.33934; MCL 324.50701; MCL 324.50704; MCL 324.50707; MCL 324.63516; MCL 331.1307; MCL 440.2803; MCL 440.2859; MCL 440.2861; MCL 440.2904; MCL 440.2905; MCL 440.2907; MCL 440.9102; MCL 440.9321; MCL 440.9323; MCL 445.1032; MCL 445.1621; MCL 559.107; ... (3 more in the battery log) [heading-only, read: MCL 440.9407]
- `(?:\b(?:condemn\w*|eminent domain)\b)[\s\S]{0,1200}?(?:\brent\b)` / all / 3 / edr.ab: MCL 125.657; MCL 125.917; MCL 125.961
- `(?:\brent\b)[\s\S]{0,1200}?(?:\b(?:condemn\w*|eminent domain)\b)` / all / 1 / edr.ba: MCL 600.5775
- `\A(?=[\s\S]*(?:\b(?:condemn\w*|eminent domain)\b))(?=[\s\S]*(?:\brent\b))` / all / 7 / edr.and: MCL 117.5k; MCL 124.754; MCL 125.657; MCL 125.917; MCL 125.961; MCL 331.9; MCL 600.5775
- positive ed @ MCL 213.55: passed ("an eminent domain proceeding has commenced")
- positive lhp @ MCL 213.55: passed ("any person who has a leasehold interest of less than 6 months")
- positive edr @ SYNTH: passed ("If leased premises are taken by eminent domain, the rent shall abate in proportion to the part taken.")

**MIG-B9-006** (cited), topic `actual-notice-method`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:25:24. Actual notice standard and agreed extra notice methods (text, email) in tenancy law.
- summary: Battery MIG-B9-006 (anm.ab 2; anm.ba 1; anm.and 3; ele.ab 8; ele.ba 8; ele.and 15; anp 81 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bactual notice\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|lessees?|lessors?|rental agreements?)\b)` / all / 2 / anm.ab: MCL 211.78k; MCL 570.1107
- `(?:\b(?:tenants?|landlords?|lease|leases|lessees?|lessors?|rental agreements?)\b)[\s\S]{0,1200}?(?:\bactual notice\b)` / all / 1 / anm.ba: MCL 570.1107
- `\A(?=[\s\S]*(?:\bactual notice\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|lessees?|lessors?|rental agreements?)\b))` / all / 3 / anm.and: MCL 211.78k; MCL 257.251; MCL 570.1107
- `(?:\b(?:text messages?|electronic mail|e-mail|email|electronic service)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|premises)\b)` / all / 8 / ele.ab: MCL 324.2165; MCL 445.2502; MCL 554.1053; MCL 570.522; MCL 570.523; MCL 570.525; MCL 600.5718; MCL 800.327a
- `(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|premises)\b)[\s\S]{0,1200}?(?:\b(?:text messages?|electronic mail|e-mail|email|electronic service)\b)` / all / 8 / ele.ba: MCL 339.5601; MCL 445.2502; MCL 570.522; MCL 570.523; MCL 570.525; MCL 600.3278; MCL 600.5718; Mich Admin Code R 460.143
- `\A(?=[\s\S]*(?:\b(?:text messages?|electronic mail|e-mail|email|electronic service)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|premises)\b))` / all / 15 / ele.and: MCL 257.251; MCL 324.2165; MCL 333.17713; MCL 333.27402; MCL 339.5601; MCL 388.1606; MCL 445.2502; MCL 554.1053; MCL 570.522; MCL 570.523; MCL 570.525; MCL 600.3278; MCL 600.5718; MCL 800.327a; Mich Admin Code R 460.143
- `\bactual notice\b` / all / 81 / anp: MCL 32.1067; MCL 35.501; MCL 37.127; MCL 55.286c; MCL 124.759; MCL 125.532; MCL 125.2009; MCL 125.2303; MCL 125.2335; MCL 168.659; MCL 168.662; MCL 211.78k; MCL 257.251; MCL 257.2254; MCL 324.2141; MCL 324.2142; MCL 324.31702; MCL 324.50125; MCL 324.63539; MCL 333.1052; MCL 333.1060; MCL 333.1061; MCL 333.1061a; MCL 333.1063; MCL 333.5672; MCL 333.5679; MCL 333.5680; MCL 380.1180; MCL 380.1181; MCL 400.608; ... (51 more in the battery log)
- positive anm @ MCL 570.1107: passed ("within 30 days after receiving actual notice of the forfeiture")
- positive ele @ MCL 600.5718: passed ("by electronic service, if the person in possession has in writing specifically consented")
- positive anp @ MCL 570.1107: passed ("actual notice of the forfeiture")

**MIG-B9-007** (cited), topic `tenant-portal`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:25:49. Online portals, electronic payment and electronic transactions consent near tenancy; payment-method fees.
- summary: Battery MIG-B9-007 (por.ab 18; por.ba 17; por.and 59; ueta 1; pfee.ab 3; pfee.ba 3; pfee.and 5; porp 15 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:portals?|online|internet|website|electronic means|electronic transfer)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|rent)\b)` / all / 18 / por.ab: MCL 18.1373; MCL 125.4611; MCL 141.1552; MCL 205.94; MCL 289.1111; MCL 324.503; MCL 324.2165; MCL 324.43553; MCL 324.78110; MCL 333.16187d; MCL 432.309; MCL 432.409; MCL 484.1102; MCL 554.609; MCL 570.525; MCL 722.693; 2026-PA-0102; Mich Admin Code R 460.106 [heading-only, read: MCL 124.546]
- `(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|rent)\b)[\s\S]{0,1200}?(?:\b(?:portals?|online|internet|website|electronic means|electronic transfer)\b)` / all / 17 / por.ba: MCL 211.78i; MCL 211.1154; MCL 252.302; MCL 257.1408; MCL 324.503; MCL 324.2165; MCL 333.5474b; MCL 333.5474b[1]; MCL 432.309; MCL 432.409; MCL 445.2502; MCL 484.2401; MCL 554.609; MCL 570.525; MCL 600.5718; 2026-PA-0102; 2026-PA-0102-desc
- `\A(?=[\s\S]*(?:\b(?:portals?|online|internet|website|electronic means|electronic transfer)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|rent)\b))` / all / 59 / por.and: MCL 18.1373; MCL 117.5k; MCL 124.546; MCL 125.2005; MCL 125.2029h; MCL 125.2088c; MCL 125.4611; MCL 141.1552; MCL 141.1636; MCL 205.93a; MCL 205.94; MCL 206.665; MCL 208.1111; MCL 208.1305; MCL 211.78i; MCL 211.78k; MCL 211.78t; MCL 211.1057; MCL 211.1077; MCL 211.1154; MCL 252.302; MCL 257.217c; MCL 257.235b; MCL 257.307; MCL 257.1408; MCL 289.1111; MCL 324.503; MCL 324.2165; MCL 324.9308; MCL 324.43553; ... (29 more in the battery log)
- `\bagreed to conduct transactions by electronic means\b` / all / 1 / ueta: MCL 450.835
- `(?:\b(?:additional charge or fee|convenience fees?|processing fees?|transaction fees?)\b)[\s\S]{0,1200}?(?:\b(?:rent|tenants?|lease)\b)` / all / 3 / pfee.ab: MCL 400.63; MCL 554.633; 2026-PA-0103
- `(?:\b(?:rent|tenants?|lease)\b)[\s\S]{0,1200}?(?:\b(?:additional charge or fee|convenience fees?|processing fees?|transaction fees?)\b)` / all / 3 / pfee.ba: MCL 400.63; MCL 554.633; 2026-PA-0103
- `\A(?=[\s\S]*(?:\b(?:additional charge or fee|convenience fees?|processing fees?|transaction fees?)\b))(?=[\s\S]*(?:\b(?:rent|tenants?|lease)\b))` / all / 5 / pfee.and: MCL 206.665; MCL 208.1305; MCL 400.63; MCL 554.633; 2026-PA-0103
- `\bportals?\b` / all / 15 / porp: MCL 18.61; MCL 18.62; MCL 168.677; MCL 168.759a; MCL 324.63533; MCL 333.7340a; MCL 333.13805; MCL 388.1283; MCL 388.1667; MCL 388.1694a; MCL 451.2451; MCL 451.2463; MCL 500.2212c; MCL 500.2212e; MCL 600.1985
- positive por @ MCL 554.609: passed ("to an internet or mobile payment account or application")
- positive ueta @ MCL 450.835: passed ("each of which has agreed to conduct transactions by electronic means")
- positive pfee @ MCL 554.633: passed ("Imposes an additional charge or fee on all methods for the payment of rent")
- positive porp @ SYNTH: passed ("A landlord may offer an online portal for the payment of rent.")

**MIG-B9-008** (cited), topic `lease-type-parity`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:26:08. Month-to-month versus fixed-term parity; burden or rent difference between lease types.
- summary: Battery MIG-B9-008 (par.ab 0; par.ba 1; par.and 1; mtmp 4; burd 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:month-to-month|month to month|periodic tenanc(?:y|ies))\b)[\s\S]{0,1200}?(?:\b(?:fixed term|fixed-term|definite term|term of years|lease for a term)\b)` / all / 0 / par.ab
- `(?:\b(?:fixed term|fixed-term|definite term|term of years|lease for a term)\b)[\s\S]{0,1200}?(?:\b(?:month-to-month|month to month|periodic tenanc(?:y|ies))\b)` / all / 1 / par.ba: MCL 125.918
- `\A(?=[\s\S]*(?:\b(?:month-to-month|month to month|periodic tenanc(?:y|ies))\b))(?=[\s\S]*(?:\b(?:fixed term|fixed-term|definite term|term of years|lease for a term)\b))` / all / 1 / par.and: MCL 125.918
- `\bmonth-to-month\b|\bfrom month to month\b` / all / 4 / mtmp: MCL 125.918; MCL 445.862; MCL 445.1204b; MCL 451.425
- `\bmore burdensome\b` / all / 4 / burd: MCL 24.244; MCL 24.245c; MCL 484.3305; MCL 559.309
- positive par @ SYNTH: passed ("The terms of a month-to-month tenancy may not be more burdensome than those of a fixed term lease.")
- positive mtmp @ MCL 125.918: passed ("tenancy from month to month")
- positive burd @ MCL 559.309: passed ("not more burdensome than the conditions imposed on nonsolar energy projects")

**MIG-B9-009** (cited), topic `lease-type-size`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:26:29. Minimum type size for leases; type-size rules near lease words.
- summary: Battery MIG-B9-009 (ts.ab 5; ts.ba 5; ts.and 8; tsp 59 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:\d+[- ]point|point type|type size|size of type|boldface|bold-face|bold type)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|rental agreements?)\b)` / all / 5 / ts.ab: MCL 257.1408; MCL 339.2512e; MCL 445.953; MCL 554.603; MCL 554.634
- `(?:\b(?:lease|leases|rental agreements?)\b)[\s\S]{0,1200}?(?:\b(?:\d+[- ]point|point type|type size|size of type|boldface|bold-face|bold type)\b)` / all / 5 / ts.ba: MCL 339.2512e; MCL 445.953; MCL 554.608; MCL 554.634; MCL 554.937
- `\A(?=[\s\S]*(?:\b(?:\d+[- ]point|point type|type size|size of type|boldface|bold-face|bold type)\b))(?=[\s\S]*(?:\b(?:lease|leases|rental agreements?)\b))` / all / 8 / ts.and: MCL 257.1408; MCL 339.2512e; MCL 445.953; MCL 554.603; MCL 554.608; MCL 554.634; MCL 554.937; 2026-PA-0102
- `\b\d+[- ]point (?:boldface )?type\b` / all / 59 / tsp: MCL 29.501; MCL 168.482; MCL 168.482b; MCL 168.544a; MCL 168.544c; MCL 168.668a; MCL 168.685; MCL 211.24e; MCL 211.764; MCL 257.662a; MCL 286.705; MCL 333.17015; MCL 333.20921b; MCL 333.20932a; MCL 333.21541; MCL 333.21765; MCL 333.21766; MCL 333.21773; MCL 333.24509; MCL 339.1014; MCL 339.1015; MCL 380.1285a; MCL 380.1613; MCL 399.611; MCL 445.853; MCL 445.953; MCL 445.1033; MCL 445.1201; MCL 445.1508; MCL 446.208; ... (29 more in the battery log)
- positive ts @ MCL 554.634: passed ("not smaller than the size of 12-point type")
- positive tsp @ MCL 554.634: passed ("12-point type")

**MIG-B9-010** (cited), topic `emergency-contact`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:26:40. Emergency contact or after-hours number duties near tenancy words.
- summary: Battery MIG-B9-010 (ect.ab 0; ect.ba 0; ect.and 2; ecp 9 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bemergency (?:contacts?|telephone|phone|numbers?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|rental units?|residents?|occupants?)\b)` / all / 0 / ect.ab
- `(?:\b(?:tenants?|landlords?|lease|leases|rental units?|residents?|occupants?)\b)[\s\S]{0,1200}?(?:\bemergency (?:contacts?|telephone|phone|numbers?)\b)` / all / 0 / ect.ba
- `\A(?=[\s\S]*(?:\bemergency (?:contacts?|telephone|phone|numbers?)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|rental units?|residents?|occupants?)\b))` / all / 2 / ect.and: MCL 333.5145; MCL 484.1102
- `\bemergency contacts?\b` / all / 9 / ecp: MCL 28.292; MCL 257.40b; MCL 257.310; MCL 333.5145; MCL 333.21609; MCL 388.1817a; MCL 388.1841a; MCL 460.1335; MCL 752.913
- positive ect @ SYNTH: passed ("The landlord shall provide each tenant with an emergency telephone number.")
- positive ecp @ MCL 333.5145: passed ("the individual's emergency contact")

**MIG-B9-011** (cited) (supersedes MIG-B9-004), topic `adverse-proceeding-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:28:14. Rerun of MIG-B9-004 (its real positive failed on the proximity window): eminent domain proceeding and occupants added to the limbs.
- summary: Battery MIG-B9-011 (apn.ab 21; apn.ba 12; apn.and 29; lis 11; tnot.ab 8; tnot.ba 9; tnot.and 14 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:lawsuits?|litigation|condemnation|eminent domain proceedings?|code enforcement|tax sales?|lis pendens|legal proceedings?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|occupants?)\b)` / all / 21 / apn.ab: MCL 67.16; MCL 73.4; MCL 125.918; MCL 125.1608; MCL 125.2466; MCL 211.7dd; MCL 211.34c; MCL 213.55; MCL 213.59; MCL 213.352; MCL 254.224; MCL 259.134; MCL 324.61503c; MCL 440.2966; MCL 486.308; MCL 554.605; MCL 570.1117; MCL 570.1127; MCL 600.5775; MCL 600.8031; MCL 691.1419
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|occupants?)\b)[\s\S]{0,1200}?(?:\b(?:lawsuits?|litigation|condemnation|eminent domain proceedings?|code enforcement|tax sales?|lis pendens|legal proceedings?)\b)` / all / 12 / apn.ba: MCL 67.16; MCL 125.1608; MCL 125.2466; MCL 213.55; MCL 213.324; MCL 213.352; MCL 259.462; MCL 324.61503c; MCL 440.2966; MCL 554.605; MCL 570.1127; MCL 600.5775
- `\A(?=[\s\S]*(?:\b(?:lawsuits?|litigation|condemnation|eminent domain proceedings?|code enforcement|tax sales?|lis pendens|legal proceedings?)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|occupants?)\b))` / all / 29 / apn.and: MCL 15.243; MCL 67.16; MCL 73.4; MCL 125.918; MCL 125.1608; MCL 125.2466; MCL 211.7dd; MCL 211.9m; MCL 211.34c; MCL 213.2; MCL 213.55; MCL 213.59; MCL 213.324; MCL 213.352; MCL 254.224; MCL 259.134; MCL 259.462; MCL 324.503; MCL 324.61503c; MCL 331.9; MCL 331.57; MCL 440.2966; MCL 486.308; MCL 554.605; MCL 570.1117; MCL 570.1127; MCL 600.5775; MCL 600.8031; MCL 691.1419
- `\blis pendens\b` / all / 11 / lis: MCL 53.145; MCL 123.786; MCL 205.203; MCL 205.214; MCL 324.63512; MCL 565.25; MCL 570.257; MCL 570.1116; MCL 570.1117; MCL 570.1127; MCL 600.6070 [heading-only, read: MCL 600.2701; MCL 600.2711; MCL 600.2715; MCL 600.2721; MCL 600.2725; MCL 600.2731; MCL 600.2735]
- `(?:\btenants?\b)[\s\S]{0,1200}?(?:\b(?:shall|must) (?:promptly )?(?:notify|inform|forward)\b)` / all / 8 / tnot.ab: MCL 43.55; MCL 211.7cc; MCL 554.603; MCL 554.611; MCL 559.212; MCL 559.222a; MCL 570.525; Mich Admin Code R 460.107
- `(?:\b(?:shall|must) (?:promptly )?(?:notify|inform|forward)\b)[\s\S]{0,1200}?(?:\btenants?\b)` / all / 9 / tnot.ba: MCL 43.55; MCL 125.2329; MCL 554.603; MCL 554.611; MCL 559.204; MCL 559.204b; MCL 559.212; MCL 559.222a; MCL 570.525
- `\A(?=[\s\S]*(?:\btenants?\b))(?=[\s\S]*(?:\b(?:shall|must) (?:promptly )?(?:notify|inform|forward)\b))` / all / 14 / tnot.and: MCL 43.55; MCL 125.2329; MCL 211.7cc; MCL 211.27a; MCL 211.78t; MCL 339.2517; MCL 554.603; MCL 554.611; MCL 559.204; MCL 559.204b; MCL 559.212; MCL 559.222a; MCL 570.525; Mich Admin Code R 460.107
- positive apn @ MCL 213.55: passed ("provide written notice to the occupants of the property stating that an eminent domain proceeding has commenced")
- positive lis @ MCL 570.1117: passed ("notice of lis pendens")
- positive tnot @ SYNTH: passed ("A tenant who receives notice of a legal proceeding affecting the premises shall promptly notify the landlord.")

**MIG-B9-012** (cited) (supersedes MIG-B9-005), topic `eminent-domain`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:28:41. Rerun of MIG-B9-005 (INFLECTION on rent): rent limb now takes rents, rented, renting, rental.
- summary: Battery MIG-B9-012 (ed.ab 57; ed.ba 61; ed.and 83; lhp 33; edr.ab 8; edr.ba 5; edr.and 18 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:condemn\w*|eminent domain)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|leased|leasehold|lessees?|tenants?)\b)` / all / 57 / ed.ab: MCL 3.818; MCL 41.2; MCL 42.14; MCL 45.592; MCL 117.4e; MCL 120.13; MCL 120.14; MCL 120.112; MCL 121.22; MCL 123.304; MCL 123.744; MCL 123.959; MCL 124.255; MCL 124.285; MCL 124.355; MCL 124.406; MCL 124.464; MCL 124.549; MCL 124.607; MCL 124.671; MCL 124.711; MCL 125.73; MCL 125.74; MCL 125.657; MCL 125.916; MCL 125.917; MCL 125.918; MCL 125.2023; MCL 125.2466; MCL 211.2; ... (27 more in the battery log)
- `(?:\b(?:lease|leases|leased|leasehold|lessees?|tenants?)\b)[\s\S]{0,1200}?(?:\b(?:condemn\w*|eminent domain)\b)` / all / 61 / ed.ba: MCL 45.592; MCL 117.4e; MCL 117.5k; MCL 120.112; MCL 121.22; MCL 123.304; MCL 123.454; MCL 123.744; MCL 123.959; MCL 124.255; MCL 124.285; MCL 124.355; MCL 124.406; MCL 124.464; MCL 124.549; MCL 124.607; MCL 124.671; MCL 124.711; MCL 125.657; MCL 125.661; MCL 125.907; MCL 125.916; MCL 125.917; MCL 125.1608; MCL 125.2466; MCL 141.1408; MCL 211.2; MCL 211.9m; MCL 211.34c; MCL 213.321; ... (31 more in the battery log)
- `\A(?=[\s\S]*(?:\b(?:condemn\w*|eminent domain)\b))(?=[\s\S]*(?:\b(?:lease|leases|leased|leasehold|lessees?|tenants?)\b))` / all / 83 / ed.and: MCL 3.818; MCL 41.2; MCL 42.14; MCL 45.592; MCL 117.4e; MCL 117.5k; MCL 120.13; MCL 120.14; MCL 120.112; MCL 121.22; MCL 123.304; MCL 123.454; MCL 123.744; MCL 123.959; MCL 124.255; MCL 124.285; MCL 124.355; MCL 124.406; MCL 124.464; MCL 124.549; MCL 124.607; MCL 124.671; MCL 124.711; MCL 125.73; MCL 125.74; MCL 125.657; MCL 125.661; MCL 125.907; MCL 125.916; MCL 125.917; ... (53 more in the battery log)
- `\bleasehold interests?\b` / all / 33 / lhp: MCL 125.731; MCL 125.1422e; MCL 125.1424a; MCL 205.30a; MCL 207.505; MCL 207.526; MCL 207.629; MCL 211.27a; MCL 213.55; MCL 213.352; MCL 257.625n; MCL 324.33933; MCL 324.33934; MCL 324.50701; MCL 324.50704; MCL 324.50707; MCL 324.63516; MCL 331.1307; MCL 440.2803; MCL 440.2859; MCL 440.2861; MCL 440.2904; MCL 440.2905; MCL 440.2907; MCL 440.9102; MCL 440.9321; MCL 440.9323; MCL 445.1032; MCL 445.1621; MCL 559.107; ... (3 more in the battery log) [heading-only, read: MCL 440.9407]
- `(?:\b(?:condemn\w*|eminent domain)\b)[\s\S]{0,1200}?(?:\brent(?:s|ed|ing|al)?\b)` / all / 8 / edr.ab: MCL 125.657; MCL 125.917; MCL 125.961; MCL 125.2466; MCL 211.7dd; MCL 247.663a; MCL 460.837; MCL 600.5775
- `(?:\brent(?:s|ed|ing|al)?\b)[\s\S]{0,1200}?(?:\b(?:condemn\w*|eminent domain)\b)` / all / 5 / edr.ba: MCL 119.4; MCL 141.1408; MCL 213.321; MCL 460.837; MCL 600.5775
- `\A(?=[\s\S]*(?:\b(?:condemn\w*|eminent domain)\b))(?=[\s\S]*(?:\brent(?:s|ed|ing|al)?\b))` / all / 18 / edr.and: MCL 117.5k; MCL 119.4; MCL 124.464; MCL 124.754; MCL 125.74; MCL 125.657; MCL 125.917; MCL 125.961; MCL 125.1608; MCL 125.2466; MCL 141.1408; MCL 211.7dd; MCL 213.321; MCL 247.663a; MCL 331.9; MCL 331.57; MCL 460.837; MCL 600.5775
- positive ed @ MCL 213.55: passed ("an eminent domain proceeding has commenced")
- positive lhp @ MCL 213.55: passed ("any person who has a leasehold interest of less than 6 months")
- positive edr @ SYNTH: passed ("If leased premises are taken by eminent domain, the rent shall abate in proportion to the part taken.")

**MIG-B9-013** (cited), topic `renters-insurance-rules`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:29:08. Renter insurance requirements, force-placed coverage, insurance notices near tenant words.
- summary: Battery MIG-B9-013 (ri.ab 7; ri.ba 8; ri.and 18; fp.ab 1; fp.ba 0; fp.and 1; rip 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:renters?|tenants?|lessees?)\b)[\s\S]{0,1200}?(?:\b(?:insurance polic(?:y|ies)|proof of insurance|insurance coverage)\b)` / all / 7 / ri.ab: MCL 257.226; MCL 440.2870; MCL 500.1202; MCL 500.1605; MCL 500.2103; MCL 500.2901; MCL 600.8031 [heading-only, read: MCL 259.206]
- `(?:\b(?:insurance polic(?:y|ies)|proof of insurance|insurance coverage)\b)[\s\S]{0,1200}?(?:\b(?:renters?|tenants?|lessees?)\b)` / all / 8 / ri.ba: MCL 257.226; MCL 408.806; MCL 440.2870; MCL 500.1202; MCL 500.2103; MCL 500.2901; MCL 570.1121; MCL 600.8031 [heading-only, read: MCL 259.206]
- `\A(?=[\s\S]*(?:\b(?:renters?|tenants?|lessees?)\b))(?=[\s\S]*(?:\b(?:insurance polic(?:y|ies)|proof of insurance|insurance coverage)\b))` / all / 18 / ri.and: MCL 125.1432; MCL 257.226; MCL 257.248; MCL 257.251; MCL 259.85; MCL 324.21310a; MCL 408.806; MCL 440.2870; MCL 460.9d; MCL 500.1202; MCL 500.1605; MCL 500.2103; MCL 500.2901; MCL 500.3101; MCL 500.5511; MCL 500.6868; MCL 570.1121; MCL 600.8031 [heading-only, read: MCL 259.206]
- `(?:\b(?:force-placed|lender-placed|purchase (?:of )?(?:the )?insurance)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|renters?)\b)` / all / 1 / fp.ab: MCL 445.957
- `(?:\b(?:tenants?|lessees?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:force-placed|lender-placed|purchase (?:of )?(?:the )?insurance)\b)` / all / 0 / fp.ba
- `\A(?=[\s\S]*(?:\b(?:force-placed|lender-placed|purchase (?:of )?(?:the )?insurance)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|renters?)\b))` / all / 1 / fp.and: MCL 445.957
- `\brenter(?:'|’)?s? insurance\b` / all / 0 / rip
- positive ri @ MCL 500.1202: passed ("homeowners, renters, or other insurance policies")
- positive fp @ MCL 445.957: passed ("The purchase of insurance by the lessee from the lessor of a leased item")
- positive rip @ SYNTH: passed ("A landlord may require a tenant to maintain renter's insurance.")

**MIG-B9-014** (cited), topic `landlord-liability-insurance`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:29:19. Mandatory landlord liability or property insurance; insurance disclosure to tenants.
- summary: Battery MIG-B9-014 (lli.ab 2; lli.ba 1; lli.and 3; llp 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:landlords?|lessors?|lessees?|owners? of (?:a |the )?(?:multiple dwellings?|rental (?:units?|propert(?:y|ies))))\b)[\s\S]{0,1200}?(?:\bliability insurance\b)` / all / 2 / lli.ab: MCL 324.64107; MCL 600.2944
- `(?:\bliability insurance\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|lessees?|owners? of (?:a |the )?(?:multiple dwellings?|rental (?:units?|propert(?:y|ies))))\b)` / all / 1 / lli.ba: MCL 324.64107
- `\A(?=[\s\S]*(?:\b(?:landlords?|lessors?|lessees?|owners? of (?:a |the )?(?:multiple dwellings?|rental (?:units?|propert(?:y|ies))))\b))(?=[\s\S]*(?:\bliability insurance\b))` / all / 3 / lli.and: MCL 324.64107; MCL 500.3101; MCL 600.2944
- `\blandlord(?:'|’)?s? (?:liability )?insurance\b` / all / 0 / llp
- positive lli @ MCL 324.64107: passed ("liability insurance, and any other insurance reasonably required by the department")
- positive llp @ SYNTH: passed ("A landlord shall maintain landlord's liability insurance on each rental unit.")

**MIG-B9-015** (cited), topic `tenant-insurance-claims`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:29:45. Subrogation, waiver of liability, insurance claims and accidental-fire rules between landlord and tenant.
- summary: Battery MIG-B9-015 (sub.ab 4; sub.ba 4; sub.and 5; wol 5; icl.ab 1; icl.ba 1; icl.and 4; afire.ab 0; afire.ba 0; afire.and 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bsubrogat\w*)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?)\b)` / all / 4 / sub.ab: MCL 324.61718; MCL 554.633; MCL 570.1107; 2026-PA-0103
- `(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?)\b)[\s\S]{0,1200}?(?:\bsubrogat\w*)` / all / 4 / sub.ba: MCL 324.61718; MCL 554.633; MCL 570.1107; 2026-PA-0103
- `\A(?=[\s\S]*(?:\bsubrogat\w*))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?)\b))` / all / 5 / sub.and: MCL 324.61718; MCL 500.6868; MCL 554.633; MCL 570.1107; 2026-PA-0103
- `\bwaiver of liability\b` / all / 5 / wol: MCL 257.1305; MCL 257.1322; MCL 554.633; MCL 691.1664; 2026-PA-0103
- `(?:\binsurance claims?\b|\bclaims? (?:on|under|against) (?:the |a |its |his |her )?(?:own )?(?:insurance|polic(?:y|ies))\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|renters?|landlords?)\b)` / all / 1 / icl.ab: MCL 445.2513
- `(?:\b(?:tenants?|lessees?|renters?|landlords?)\b)[\s\S]{0,1200}?(?:\binsurance claims?\b|\bclaims? (?:on|under|against) (?:the |a |its |his |her )?(?:own )?(?:insurance|polic(?:y|ies))\b)` / all / 1 / icl.ba: MCL 440.9109
- `\A(?=[\s\S]*(?:\binsurance claims?\b|\bclaims? (?:on|under|against) (?:the |a |its |his |her )?(?:own )?(?:insurance|polic(?:y|ies))\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|renters?|landlords?)\b))` / all / 4 / icl.and: MCL 440.9102; MCL 440.9109; MCL 445.2513; MCL 500.2103
- `(?:\baccidental(?:ly)? fires?\b|\bfires? (?:shall )?(?:accidentally|accidental)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|lessees?|landlords?)\b)` / all / 0 / afire.ab
- `(?:\b(?:tenants?|lessees?|landlords?)\b)[\s\S]{0,1200}?(?:\baccidental(?:ly)? fires?\b|\bfires? (?:shall )?(?:accidentally|accidental)\b)` / all / 0 / afire.ba
- `\A(?=[\s\S]*(?:\baccidental(?:ly)? fires?\b|\bfires? (?:shall )?(?:accidentally|accidental)\b))(?=[\s\S]*(?:\b(?:tenants?|lessees?|landlords?)\b))` / all / 0 / afire.and
- positive sub @ MCL 554.633: passed ("rights of subrogation, to the extent of any recovery by the insured party under the policy")
- positive wol @ MCL 554.633: passed ("under a policy that permits waiver of liability")
- positive icl @ SYNTH: passed ("The landlord may require the tenant to file an insurance claim on the tenant own policy.")
- positive afire @ SYNTH: passed ("No action shall be had against a tenant for an accidental fire on the leased premises.")

**MIG-B9-016** (cited), topic `disaster-duties`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:29:58. Declared disaster or emergency and leases, rent, evictions; untenantable premises.
- summary: Battery MIG-B9-016 (dis.ab 3; dis.ba 4; dis.and 10; unt 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:disasters?|state of (?:emergency|disaster)|declared emergenc(?:y|ies))\b)[\s\S]{0,1200}?(?:\b(?:tenants?|rent|rents|rental|lease|leases|lessees?|landlords?|evict\w*)\b)` / all / 3 / dis.ab: MCL 18.1261; MCL 21.142a; MCL 30.410
- `(?:\b(?:tenants?|rent|rents|rental|lease|leases|lessees?|landlords?|evict\w*)\b)[\s\S]{0,1200}?(?:\b(?:disasters?|state of (?:emergency|disaster)|declared emergenc(?:y|ies))\b)` / all / 4 / dis.ba: MCL 21.142a; MCL 29.1; MCL 30.410; MCL 700.2702
- `\A(?=[\s\S]*(?:\b(?:disasters?|state of (?:emergency|disaster)|declared emergenc(?:y|ies))\b))(?=[\s\S]*(?:\b(?:tenants?|rent|rents|rental|lease|leases|lessees?|landlords?|evict\w*)\b))` / all / 10 / dis.and: MCL 18.1261; MCL 21.142a; MCL 29.1; MCL 30.410; MCL 124.546; MCL 125.2664a; MCL 141.1361; MCL 257.1403; MCL 324.20101; MCL 700.2702
- `\buntenantable\b` / all / 2 / unt: MCL 123.958a; MCL 554.201
- positive dis @ MCL 30.410: passed ("the rental of equipment")
- positive unt @ MCL 554.201: passed ("so injured by the elements, or in any other way, as to be untenantable")

**MIG-B9-017** (cited), topic `disaster-displaced-guests`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:30:07. Displaced persons as guests or occupants; disaster sheltering in rental homes.
- summary: Battery MIG-B9-017 (dg.ab 1; dg.ba 3; dg.and 5; dgp 7 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bdisplaced\b)[\s\S]{0,1200}?(?:\b(?:guests?|occupants?|households?|tenants?)\b)` / all / 1 / dg.ab: MCL 125.1411 [heading-only, read: MCL 213.322]
- `(?:\b(?:guests?|occupants?|households?|tenants?)\b)[\s\S]{0,1200}?(?:\bdisplaced\b)` / all / 3 / dg.ba: MCL 125.1432; MCL 213.55; MCL 213.322
- `\A(?=[\s\S]*(?:\bdisplaced\b))(?=[\s\S]*(?:\b(?:guests?|occupants?|households?|tenants?)\b))` / all / 5 / dg.and: MCL 125.1401; MCL 125.1411; MCL 125.1432; MCL 213.55; MCL 213.322
- `\bdisplaced persons?\b` / all / 7 / dgp: MCL 38.1133c; MCL 213.321; MCL 213.322; MCL 213.323; MCL 213.326; MCL 213.327; MCL 213.328 [heading-only, read: MCL 125.1445; MCL 252.141]
- positive dg @ SYNTH: passed ("A tenant may house a displaced person as a guest during a declared disaster.")
- positive dgp @ MCL 213.323: passed ("Determine the needs of displaced persons for relocation assistance")

**MIG-B9-018** (cited), topic `tpa-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:30:19. Tenant opportunity or right to purchase, right of first refusal near tenant words.
- summary: Battery MIG-B9-018 (tp.ab 8; tp.ba 12; tp.and 17; tpp 17 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:right of first refusal|first right to purchase|opportunity to purchase|option to purchase|right to purchase)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|renters?|lessees?|residents?)\b)` / all / 8 / tp.ab: MCL 125.853; MCL 125.2729; MCL 331.1306; MCL 445.953; MCL 554.601; MCL 565.952; MCL 565.954; 2026-PA-0032
- `(?:\b(?:tenants?|renters?|lessees?|residents?)\b)[\s\S]{0,1200}?(?:\b(?:right of first refusal|first right to purchase|opportunity to purchase|option to purchase|right to purchase)\b)` / all / 12 / tp.ba: MCL 125.853; MCL 125.961; MCL 125.2729; MCL 211.27a; MCL 445.953; MCL 554.601; MCL 565.881; MCL 565.891; MCL 700.3715; MCL 700.5423; MCL 700.7817; 2026-PA-0032
- `\A(?=[\s\S]*(?:\b(?:right of first refusal|first right to purchase|opportunity to purchase|option to purchase|right to purchase)\b))(?=[\s\S]*(?:\b(?:tenants?|renters?|lessees?|residents?)\b))` / all / 17 / tp.and: MCL 125.853; MCL 125.961; MCL 125.2729; MCL 211.27a; MCL 331.1306; MCL 445.953; MCL 451.2202; MCL 554.601; MCL 565.881; MCL 565.891; MCL 565.952; MCL 565.954; MCL 570.584; MCL 700.3715; MCL 700.5423; MCL 700.7817; 2026-PA-0032
- `\bright of first refusal\b` / all / 17 / tpp: MCL 123.311; MCL 123.1045; MCL 125.853; MCL 125.2729; MCL 211.78m; MCL 211.281; MCL 324.502a; MCL 324.19610a; MCL 399.402; MCL 399.502; MCL 445.1527; MCL 445.1574a; MCL 445.1574b; MCL 460.592; MCL 565.881; MCL 565.891; 2026-PA-0032
- positive tp @ MCL 125.853: passed ("Provides for a right of first refusal and a 30-day first look period")
- positive tpp @ MCL 125.2729: passed ("has a right of first refusal")

**MIG-B9-019** (cited), topic `tpa-exemption-notice`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:30:29. Exemption statements from rent caps, just cause or purchase rights.
- summary: Battery MIG-B9-019 (te.ab 17; te.ba 17; te.and 36; tep 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bexempt\w*)[\s\S]{0,1200}?(?:\b(?:rent control|controlling the amount of rent|just cause|good cause)\b)` / all / 17 / te.ab: MCL 3.173; MCL 18.1261a; MCL 207.557a; MCL 207.565; MCL 207.664; MCL 339.5947; MCL 445.2011; MCL 446.169a; MCL 451.2202a; MCL 451.2403; MCL 460.10y; MCL 460.833a; MCL 474.123; MCL 500.1324; MCL 554.963; MCL 600.6116; MCL 711.3
- `(?:\b(?:rent control|controlling the amount of rent|just cause|good cause)\b)[\s\S]{0,1200}?(?:\bexempt\w*)` / all / 17 / te.ba: MCL 3.173; MCL 123.1356b; MCL 205.762b; MCL 207.557a; MCL 207.565; MCL 207.664; MCL 339.5947; MCL 400.57b; MCL 446.169a; MCL 451.2202a; MCL 451.2401; MCL 451.2403; MCL 474.123; MCL 711.3; MCL 771.2a; MCL 780.987; MCL 780.987.amended
- `\A(?=[\s\S]*(?:\bexempt\w*))(?=[\s\S]*(?:\b(?:rent control|controlling the amount of rent|just cause|good cause)\b))` / all / 36 / te.and: MCL 3.173; MCL 18.1261a; MCL 123.1356b; MCL 125.2029h; MCL 205.762; MCL 205.762b; MCL 207.557a; MCL 207.565; MCL 207.664; MCL 213.58; MCL 330.1134a; MCL 333.20173a; MCL 339.5947; MCL 400.57b; MCL 400.734b; MCL 445.2011; MCL 446.169a; MCL 451.2202a; MCL 451.2401; MCL 451.2403; MCL 451.2404; MCL 460.6h; MCL 460.6j; MCL 460.10y; MCL 460.833a; MCL 460.1226; MCL 474.123; MCL 484.2310; MCL 500.1324; MCL 554.963; ... (6 more in the battery log)
- `\bcontrolling the amount of rent\b` / all / 1 / tep: MCL 123.411
- positive te @ SYNTH: passed ("A landlord of a unit exempt from the just cause requirement shall state the exemption in the lease.")
- positive tep @ MCL 123.411: passed ("controlling the amount of rent charged for leasing private residential property")

**MIG-B9-020** (cited), topic `tpa-sunset`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:30:43. Repeal or sunset dates in tenancy statutes.
- summary: Battery MIG-B9-020 (sun.ab 0; sun.ba 7; sun.and 15; rep 13 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:is|are) repealed\b|\bsunset\w*|\bshall expire\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|rental units?|security deposits?)\b)` / all / 0 / sun.ab
- `(?:\b(?:tenants?|landlords?|lease|leases|rental units?|security deposits?)\b)[\s\S]{0,1200}?(?:\b(?:is|are) repealed\b|\bsunset\w*|\bshall expire\b)` / all / 7 / sun.ba: MCL 208.1105; MCL 208.1111; MCL 208.1115; MCL 208.1201; MCL 208.1203; MCL 208.1410; MCL 208.1410a
- `\A(?=[\s\S]*(?:\b(?:is|are) repealed\b|\bsunset\w*|\bshall expire\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|rental units?|security deposits?)\b))` / all / 15 / sun.and: MCL 3.1031; MCL 125.1444; MCL 125.2029h; MCL 208.1105; MCL 208.1111; MCL 208.1115; MCL 208.1201; MCL 208.1203; MCL 208.1261; MCL 208.1305; MCL 208.1410; MCL 208.1410a; MCL 208.1435; MCL 208.1437; MCL 324.30321
- `\brepealed effective\b` / all / 13 / rep: MCL 54.323; MCL 74.7; MCL 141.2803; MCL 141.2805; MCL 205.435; MCL 288.495; MCL 288.591; MCL 333.13607; MCL 390.1697; MCL 484.1717; MCL 691.1309; MCL 752.1026; MCL 752.1027
- positive sun @ SYNTH: passed ("Sections 1 to 16 governing security deposits of tenants are repealed effective January 1, 2030.")
- positive rep @ MCL 54.323: passed ("This act is repealed effective January 1, 2030.")

**MIG-B9-021** (cited), topic `nonresident-owner-agent`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:31:04. Nonresident owners, in-state agents, service of process on nonresidents, withholding on rent; limbs without landlord words (rule 19 [FL-gaps 3]).
- summary: Battery MIG-B9-021 (na1 21; na2.ab 7; na2.ba 6; na2.and 8; na3.ab 6; na3.ba 6; na3.and 15; na4.ab 2; na4.ba 6; na4.and 13 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 147))
- `\bnon-?resident (?:owners?|landlords?|lessors?|individuals?)\b` / all / 21 / na1: MCL 141.503; MCL 141.503a; MCL 141.503b; MCL 141.503c; MCL 141.611; MCL 141.613; MCL 141.616; MCL 141.627; MCL 141.634; MCL 141.904; MCL 206.51; MCL 206.110; MCL 206.256; MCL 206.476; MCL 206.703; MCL 257.243; MCL 257.519; MCL 429.33; MCL 500.1204c; MCL 500.3102; MCL 552.2201
- `(?:\bnon-?residents?\b)[\s\S]{0,1200}?(?:\b(?:agent for service|resident agent|registered agent|agent to (?:receive|accept))\b)` / all / 7 / na2.ab: MCL 28.466; MCL 257.1329; MCL 450.701; MCL 450.1246; MCL 450.2246; MCL 451.2611; MCL 500.1153
- `(?:\b(?:agent for service|resident agent|registered agent|agent to (?:receive|accept))\b)[\s\S]{0,1200}?(?:\bnon-?residents?\b)` / all / 6 / na2.ba: MCL 429.33; MCL 450.701; MCL 450.1246; MCL 450.2246; MCL 451.2611; MCL 500.1153
- `\A(?=[\s\S]*(?:\bnon-?residents?\b))(?=[\s\S]*(?:\b(?:agent for service|resident agent|registered agent|agent to (?:receive|accept))\b))` / all / 8 / na2.and: MCL 28.466; MCL 257.1329; MCL 429.33; MCL 450.701; MCL 450.1246; MCL 450.2246; MCL 451.2611; MCL 500.1153
- `(?:\bwithh(?:old|olds|olding|eld)\b)[\s\S]{0,1200}?(?:\brent(?:s|al)?\b)` / all / 6 / na3.ab: MCL 125.530; MCL 125.2664a; MCL 208.1111; MCL 440.2954; MCL 440.2973; MCL 600.4012
- `(?:\brent(?:s|al)?\b)[\s\S]{0,1200}?(?:\bwithh(?:old|olds|olding|eld)\b)` / all / 6 / na3.ba: MCL 125.530; MCL 125.2664a; MCL 400.14; MCL 440.2976; MCL 458.68; MCL 554.601b
- `\A(?=[\s\S]*(?:\bwithh(?:old|olds|olding|eld)\b))(?=[\s\S]*(?:\brent(?:s|al)?\b))` / all / 15 / na3.and: MCL 125.530; MCL 125.2652; MCL 125.2664a; MCL 141.635; MCL 205.27a; MCL 206.30; MCL 206.803; MCL 208.1111; MCL 400.14; MCL 440.2954; MCL 440.2973; MCL 440.2976; MCL 458.68; MCL 554.601b; MCL 600.4012
- `(?:\bnon-?residents?\b)[\s\S]{0,1200}?(?:\b(?:rent|rents|rental|lease|leases|landlords?|lessors?)\b)` / all / 2 / na4.ab: MCL 206.110; MCL 324.74101
- `(?:\b(?:rent|rents|rental|lease|leases|landlords?|lessors?)\b)[\s\S]{0,1200}?(?:\bnon-?residents?\b)` / all / 6 / na4.ba: MCL 141.665; MCL 206.110; MCL 257.251b; MCL 257.251d; MCL 390.1231; MCL 431.320
- `\A(?=[\s\S]*(?:\bnon-?residents?\b))(?=[\s\S]*(?:\b(?:rent|rents|rental|lease|leases|landlords?|lessors?)\b))` / all / 13 / na4.and: MCL 125.2029h; MCL 141.665; MCL 205.94; MCL 206.30; MCL 206.110; MCL 211.7cc; MCL 257.216; MCL 257.251b; MCL 257.251d; MCL 324.74101; MCL 324.78105; MCL 390.1231; MCL 431.320
- positive na1 @ MCL 141.613: passed ("nonresident owner of an unincorporated business")
- positive na2 @ MCR 2.105: passed ("Process may be served on a resident or nonresident individual by")
- positive na3 @ SYNTH: passed ("A tenant shall withhold from rent paid to a nonresident owner the tax due.")
- positive na4 @ MCL 206.110: passed ("For a nonresident individual, estate, or trust")

**MIG-B9-022** (cited), topic `confirmed-absences-outside-title`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:31:22. Registration as a condition of possession; rent receipts; squatting.
- summary: Battery MIG-B9-022 (reg.ab 4; reg.ba 4; reg.and 8; rr.ab 47; rr.ba 46; rr.and 89; sq 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:regist\w*|licens\w*|certificates? of compliance)\b)[\s\S]{0,1200}?(?:\b(?:summary proceedings?|judgments? for possession|recover possession)\b)` / all / 4 / reg.ab: MCL 445.1679; MCL 493.77; MCL 600.5744; MCL 600.5777
- `(?:\b(?:summary proceedings?|judgments? for possession|recover possession)\b)[\s\S]{0,1200}?(?:\b(?:regist\w*|licens\w*|certificates? of compliance)\b)` / all / 4 / reg.ba: MCL 445.1679; MCL 487.2168; MCL 600.5701; MCL 600.5744
- `\A(?=[\s\S]*(?:\b(?:regist\w*|licens\w*|certificates? of compliance)\b))(?=[\s\S]*(?:\b(?:summary proceedings?|judgments? for possession|recover possession)\b))` / all / 8 / reg.and: MCL 445.1679; MCL 487.2168; MCL 493.77; MCL 600.2918; MCL 600.5701; MCL 600.5714; MCL 600.5744; MCL 600.5777
- `(?:\breceipts?\b)[\s\S]{0,1200}?(?:\brent(?:s|al)?\b)` / all / 47 / rr.ab: MCL 18.424; MCL 123.961; MCL 123.961e; MCL 124.414; MCL 125.1415a; MCL 125.1513; MCL 125.2706; MCL 205.27a; MCL 205.94a; MCL 205.95; MCL 206.508; MCL 206.527a; MCL 206.607; MCL 206.665; MCL 207.752; MCL 208.1111; MCL 208.1203; MCL 208.1305; MCL 211.9p; MCL 257.907; MCL 324.80124; MCL 324.80126; MCL 324.81116; MCL 333.5475a; MCL 440.2958; MCL 440.2972; MCL 449.7; MCL 451.412; MCL 460.841; MCL 460.843; ... (17 more in the battery log)
- `(?:\brent(?:s|al)?\b)[\s\S]{0,1200}?(?:\breceipts?\b)` / all / 46 / rr.ba: MCL 38.1137; MCL 123.961; MCL 123.961a; MCL 125.677; MCL 125.1573; MCL 125.2706; MCL 125.4412a; MCL 125.4412c; MCL 205.27a; MCL 205.54d; MCL 205.69; MCL 205.94a; MCL 205.110; MCL 206.530; MCL 206.665; MCL 207.752; MCL 208.1111; MCL 208.1203; MCL 208.1305; MCL 211.9p; MCL 211.53; MCL 257.667a; MCL 285.313; MCL 324.80124; MCL 333.5475a; MCL 440.2936; MCL 440.2958; MCL 440.2972; MCL 440.2976; MCL 445.903; ... (16 more in the battery log) [heading-only, read: MCL 558.12]
- `\A(?=[\s\S]*(?:\breceipts?\b))(?=[\s\S]*(?:\brent(?:s|al)?\b))` / all / 89 / rr.and: MCL 18.424; MCL 21.142a; MCL 38.1133; MCL 38.1137; MCL 123.674; MCL 123.961; MCL 123.961a; MCL 123.961e; MCL 124.414; MCL 124.505; MCL 125.74; MCL 125.677; MCL 125.1415a; MCL 125.1513; MCL 125.1573; MCL 125.2664a; MCL 125.2706; MCL 125.4301; MCL 125.4412a; MCL 125.4412c; MCL 205.27a; MCL 205.54d; MCL 205.69; MCL 205.93a; MCL 205.94a; MCL 205.95; MCL 205.110; MCL 206.508; MCL 206.527a; MCL 206.530; ... (59 more in the battery log) [heading-only, read: MCL 558.12]
- `\bsquat\w*` / all / 1 / sq: MCL 777.16bb
- positive reg @ SYNTH: passed ("A landlord who is not registered may not recover possession by summary proceedings.")
- positive rr @ SYNTH: passed ("A landlord shall give a receipt for rent paid in cash.")
- positive sq @ MCL 777.16bb: passed ("Squatting, second or subsequent offense")

**MIG-B9-023** (cited), topic `construction-liens`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:32:51. Construction liens and lessees; notice of nonresponsibility; owner who required the improvement.
- summary: Battery MIG-B9-023 (cl.ab 64; cl.ba 58; cl.and 86; nonresp 1; req 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\bliens?\b)[\s\S]{0,1200}?(?:\b(?:lessees?|tenants?)\b)` / all / 64 / cl.ab: MCL 38.1137; MCL 43.58; MCL 125.541; MCL 125.1253a; MCL 125.1261; MCL 125.2330i; MCL 141.121; MCL 141.1369; MCL 205.243; MCL 207.606; MCL 211.8; MCL 211.53; MCL 211.78k; MCL 211.182; MCL 257.219; MCL 257.625n; MCL 257.724; MCL 259.117; MCL 259.144; MCL 324.33934; MCL 331.9; MCL 388.1722; MCL 427.201; MCL 427.202; MCL 438.31c; MCL 440.2803; MCL 440.2906; MCL 440.2907; MCL 440.2909; MCL 440.9317; ... (34 more in the battery log)
- `(?:\b(?:lessees?|tenants?)\b)[\s\S]{0,1200}?(?:\bliens?\b)` / all / 58 / cl.ba: MCL 43.58; MCL 125.541; MCL 125.1253a; MCL 125.1261; MCL 141.121; MCL 211.8; MCL 211.78k; MCL 211.78t; MCL 211.182; MCL 257.217; MCL 257.222; MCL 257.226; MCL 257.625n; MCL 257.724; MCL 331.9; MCL 388.1722; MCL 427.201; MCL 427.202; MCL 440.2803; MCL 440.2906; MCL 440.2907; MCL 440.2909; MCL 440.9317; MCL 445.1621; MCL 455.67; MCL 455.70; MCL 487.3416; MCL 554.1027; MCL 554.1052; MCL 570.251; ... (28 more in the battery log)
- `\A(?=[\s\S]*(?:\bliens?\b))(?=[\s\S]*(?:\b(?:lessees?|tenants?)\b))` / all / 86 / cl.and: MCL 38.1137; MCL 43.58; MCL 125.541; MCL 125.1253a; MCL 125.1261; MCL 125.2330i; MCL 141.121; MCL 141.1369; MCL 205.243; MCL 207.606; MCL 211.7cc; MCL 211.8; MCL 211.53; MCL 211.78k; MCL 211.78t; MCL 211.182; MCL 211.1159; MCL 257.217; MCL 257.217c; MCL 257.219; MCL 257.222; MCL 257.226; MCL 257.625n; MCL 257.724; MCL 259.117; MCL 259.144; MCL 324.33934; MCL 331.9; MCL 331.57; MCL 388.1722; ... (56 more in the battery log)
- `\bnotice of nonresponsibility\b|\bnon-?responsibility\b` / all / 1 / nonresp: MCL 324.6312
- `\brequired the improvement\b` / all / 1 / req: MCL 570.1107
- positive cl @ MCL 570.1107: passed ("has a construction lien upon the interest of the owner or lessee who contracted for the improvement")
- positive nonresp @ SYNTH: passed ("An owner who did not contract for the improvement may record a notice of nonresponsibility.")
- positive req @ MCL 570.1107: passed ("the interest of an owner who has required the improvement")

**MIG-B9-024** (cited), topic `animal-care-access`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:33:07. Landlord entry or custody for a tenant animal; abandonment and custody duties under animal law.
- summary: Battery MIG-B9-024 (aca.ab 5; aca.ba 7; aca.and 19; abn 1; cust.ab 1; cust.ba 1; cust.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:animals?|pets?|dogs?|cats?)\b)[\s\S]{0,1200}?(?:\b(?:landlords?|lessors?|tenants?|lease|leases|rental units?)\b)` / all / 5 / aca.ab: MCL 43.53; MCL 43.55; MCL 418.155; MCL 421.43; MCL 440.2803
- `(?:\b(?:landlords?|lessors?|tenants?|lease|leases|rental units?)\b)[\s\S]{0,1200}?(?:\b(?:animals?|pets?|dogs?|cats?)\b)` / all / 7 / aca.ba: MCL 43.53; MCL 43.55; MCL 286.872; MCL 289.1105; MCL 324.74101; MCL 440.2803; MCL 440.2867
- `\A(?=[\s\S]*(?:\b(?:animals?|pets?|dogs?|cats?)\b))(?=[\s\S]*(?:\b(?:landlords?|lessors?|tenants?|lease|leases|rental units?)\b))` / all / 19 / aca.and: MCL 43.53; MCL 43.55; MCL 211.7dd; MCL 211.9; MCL 286.872; MCL 288.473; MCL 289.1105; MCL 289.1107; MCL 289.1107.amended; MCL 289.1111; MCL 290.642; MCL 324.20101; MCL 324.74101; MCL 418.155; MCL 421.43; MCL 440.2803; MCL 440.2867; MCL 440.9102; MCL 560.102
- `\babandon(?:s|ed|ing)? an animal\b` / all / 1 / abn: MCL 750.50
- `(?:\bcharge or custody\b)[\s\S]{0,1200}?(?:\banimals?\b)` / all / 1 / cust.ab: MCL 750.50
- `(?:\banimals?\b)[\s\S]{0,1200}?(?:\bcharge or custody\b)` / all / 1 / cust.ba: MCL 750.50
- `\A(?=[\s\S]*(?:\bcharge or custody\b))(?=[\s\S]*(?:\banimals?\b))` / all / 1 / cust.and: MCL 750.50
- positive aca @ SYNTH: passed ("A landlord may enter a rental unit to feed an animal left by the tenant.")
- positive abn @ MCL 750.50: passed ("Abandon an animal or cause an animal to be abandoned")
- positive cust @ MCL 750.50: passed ("person having the charge or custody of an animal")

**MIG-B9-025** (cited), topic `pet-eviction-fact-sheet`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:33:20. Pets and eviction; fact sheet delivered with a lease.
- summary: Battery MIG-B9-025 (pe.ab 0; pe.ba 0; pe.and 0; fsp 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:pets?|animals?|dogs?|cats?)\b)[\s\S]{0,1200}?(?:\b(?:evict\w*|summary proceedings?|writs? of restitution|fact sheets?)\b)` / all / 0 / pe.ab
- `(?:\b(?:evict\w*|summary proceedings?|writs? of restitution|fact sheets?)\b)[\s\S]{0,1200}?(?:\b(?:pets?|animals?|dogs?|cats?)\b)` / all / 0 / pe.ba
- `\A(?=[\s\S]*(?:\b(?:pets?|animals?|dogs?|cats?)\b))(?=[\s\S]*(?:\b(?:evict\w*|summary proceedings?|writs? of restitution|fact sheets?)\b))` / all / 0 / pe.and
- `\bfact sheets?\b` / all / 0 / fsp
- positive pe @ SYNTH: passed ("Before an eviction the landlord shall give the tenant a fact sheet on pets.")
- positive fsp @ SYNTH: passed ("The department shall prepare a fact sheet on the rights of tenants who own pets.")

**MIG-B9-026** (cited), topic `farmland-hunting-rights`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:33:31. Hunting, fishing and trapping consent of owner or lessee; safety zone permission of renter or occupant.
- summary: Battery MIG-B9-026 (hr.ab 24; hr.ba 18; hr.and 37; hz 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:hunt(?:s|ed|er|ers|ing)?|fish(?:ing|ermen|erman)?|trap(?:s|per|pers|ping)?|recreational activit(?:y|ies))\b)[\s\S]{0,1200}?(?:\b(?:lessees?|tenants?|renters?|occupants?)\b)` / all / 24 / hr.ab: MCL 18.1713; MCL 119.52; MCL 317.204; MCL 324.3310; MCL 324.33911; MCL 324.40111; MCL 324.41705; MCL 324.43513; MCL 324.43516; MCL 324.43528c; MCL 324.43556; MCL 324.45302; MCL 324.47905; MCL 324.48302; MCL 324.48714a; MCL 324.64107; MCL 324.73102; MCL 324.73105; MCL 324.73107; MCL 324.73301; MCL 433.14a; MCL 700.5109; MCL 750.237a; MCL 752.821
- `(?:\b(?:lessees?|tenants?|renters?|occupants?)\b)[\s\S]{0,1200}?(?:\b(?:hunt(?:s|ed|er|ers|ing)?|fish(?:ing|ermen|erman)?|trap(?:s|per|pers|ping)?|recreational activit(?:y|ies))\b)` / all / 18 / hr.ba: MCL 211.7o; MCL 211.34c; MCL 317.251; MCL 320.2033; MCL 324.33921; MCL 324.41705; MCL 324.43513; MCL 324.43516; MCL 324.43528c; MCL 324.43556; MCL 324.48714a; MCL 324.64107; MCL 324.73102; MCL 324.73107; MCL 324.73301; MCL 324.81133; MCL 433.14a; MCL 700.5109
- `\A(?=[\s\S]*(?:\b(?:hunt(?:s|ed|er|ers|ing)?|fish(?:ing|ermen|erman)?|trap(?:s|per|pers|ping)?|recreational activit(?:y|ies))\b))(?=[\s\S]*(?:\b(?:lessees?|tenants?|renters?|occupants?)\b))` / all / 37 / hr.and: MCL 18.1713; MCL 119.52; MCL 211.7o; MCL 211.9; MCL 211.34c; MCL 252.302; MCL 289.1111; MCL 317.204; MCL 317.251; MCL 320.2033; MCL 324.503; MCL 324.3310; MCL 324.21101; MCL 324.21303; MCL 324.33911; MCL 324.33921; MCL 324.40111; MCL 324.41705; MCL 324.43513; MCL 324.43516; MCL 324.43528c; MCL 324.43556; MCL 324.45302; MCL 324.47905; MCL 324.48302; MCL 324.48714a; MCL 324.64107; MCL 324.73102; MCL 324.73105; MCL 324.73107; ... (7 more in the battery log)
- `\bowner, renter, or occupant\b` / all / 1 / hz: MCL 324.40111
- positive hr @ MCL 324.73102: passed ("without the consent of the owner or his or her lessee or agent")
- positive hz @ MCL 324.40111: passed ("written permission of the owner, renter, or occupant")

**MIG-B9-027** (cited), topic `tenant-employee-housing`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:33:47. Employee or caretaker housing: occupancy disclosure, vacating, eviction; migrant labor camps.
- summary: Battery MIG-B9-027 (emp.ab 14; emp.ba 11; emp.and 33; alc 10 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:employees?|employment|employers?|caretakers?|janitors?|resident managers?)\b)[\s\S]{0,1200}?(?:\b(?:summary proceedings?|holds? over|holding over|vacate[sd]?|quit|eviction)\b)` / all / 14 / emp.ab: MCL 38.4; MCL 38.1174; MCL 213.323; MCL 224.18; MCL 380.1305; MCL 400.57g; MCL 408.1033; MCL 421.29; MCL 425.108; MCL 436.1707; MCL 451.2461; MCL 460.623; MCL 500.8110; MCL 600.8322 [heading-only, read: MCL 125.1608]
- `(?:\b(?:summary proceedings?|holds? over|holding over|vacate[sd]?|quit|eviction)\b)[\s\S]{0,1200}?(?:\b(?:employees?|employment|employers?|caretakers?|janitors?|resident managers?)\b)` / all / 11 / emp.ba: MCL 28.725; MCL 324.9307; MCL 380.1249; MCL 380.1305; MCL 400.57g; MCL 408.1033; MCL 408.1044; MCL 421.29; MCL 436.1707; MCL 554.601b; MCL 600.8322
- `\A(?=[\s\S]*(?:\b(?:employees?|employment|employers?|caretakers?|janitors?|resident managers?)\b))(?=[\s\S]*(?:\b(?:summary proceedings?|holds? over|holding over|vacate[sd]?|quit|eviction)\b))` / all / 33 / emp.and: MCL 28.725; MCL 38.4; MCL 38.1174; MCL 125.1564; MCL 125.1604; MCL 125.1608; MCL 213.323; MCL 224.18; MCL 324.9307; MCL 324.21323a; MCL 380.1249; MCL 380.1249b; MCL 380.1305; MCL 388.1817c; MCL 388.1875k; MCL 400.57g; MCL 408.1033; MCL 408.1044; MCL 421.29; MCL 425.108; MCL 436.1707; MCL 445.1679; MCL 451.2461; MCL 460.623; MCL 487.13501; MCL 493.77; MCL 500.2117; MCL 500.8110; MCL 554.601b; MCL 554.969; ... (3 more in the battery log)
- `\bagricultural labor camps?\b` / all / 10 / alc: MCL 333.12401; MCL 333.12411; MCL 333.12412; MCL 333.12413; MCL 333.12414; MCL 333.12415; MCL 333.12421; MCL 333.12425; MCL 333.12426; MCL 333.12434
- positive emp @ SYNTH: passed ("An employee who occupies premises as an incident of employment shall vacate the premises within 7 days after the employm")
- positive alc @ MCL 333.12401: passed ("living quarters for 5 or more migratory laborers")

**MIG-B9-028** (cited), topic `informal-dispute-resolution`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:34:00. Pre-suit informal resolution, mediation or dispute resolution between landlord and tenant.
- summary: Battery MIG-B9-028 (idr.ab 3; idr.ba 4; idr.and 15; idp 75 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:mediat(?:e|es|ed|ing|ion|or|ors)|informal(?:ly)? resol\w*|alternative dispute|dispute resolution)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|lessees?|lessors?)\b)` / all / 3 / idr.ab: MCL 257.1403; MCL 566.38; MCL 600.8031
- `(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|lessees?|lessors?)\b)[\s\S]{0,1200}?(?:\b(?:mediat(?:e|es|ed|ing|ion|or|ors)|informal(?:ly)? resol\w*|alternative dispute|dispute resolution)\b)` / all / 4 / idr.ba: MCL 3.1012; MCL 3.1031; MCL 117.5k; MCL 257.1403
- `\A(?=[\s\S]*(?:\b(?:mediat(?:e|es|ed|ing|ion|or|ors)|informal(?:ly)? resol\w*|alternative dispute|dispute resolution)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|rental agreements?|lessees?|lessors?)\b))` / all / 15 / idr.and: MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 117.5k; MCL 141.1542; MCL 257.1403; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.16189; MCL 333.16190; MCL 566.38; MCL 600.8031; MCL 700.7817
- `\bdispute resolution\b` / all / 75 / idp: MCL 3.692; MCL 3.1012; MCL 3.1031; MCL 3.1041; MCL 18.441; MCL 29.476; MCL 117.5k; MCL 125.1564; MCL 141.1542; MCL 141.1543; MCL 141.1565; MCL 168.31; MCL 205.30c; MCL 213.61; MCL 257.1261; MCL 324.20114e; MCL 324.31702; MCL 324.31711; MCL 324.32802; MCL 324.34201; MCL 330.1206a; MCL 333.16187a.added; MCL 333.16187d; MCL 333.16188.added; MCL 333.16189; MCL 333.16190; MCL 333.22101; MCL 333.22115; MCL 333.22119; MCL 333.24513; ... (45 more in the battery log) [heading-only, read: MCL 141.673; MCL 484.2305a]
- positive idr @ SYNTH: passed ("Before commencing an action, the landlord and tenant shall attempt mediation of the dispute.")
- positive idp @ MCL 691.1552: passed ("community dispute resolution fund")

**MIG-B9-029** (cited), topic `usufructuary-lessor`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:34:13. Usufruct; leases by a life tenant and what happens at the end of the life estate.
- summary: Battery MIG-B9-029 (us 0; lt.ab 5; lt.ba 5; lt.and 6 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `\busufruct\w*` / all / 0 / us
- `(?:\b(?:life estates?|life tenan(?:t|ts|cy|cies)|tenants? for life|life leases?)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|leased|lessees?|demise[sd]?|rent(?:s|ed)?)\b)` / all / 5 / lt.ab: MCL 211.27a; MCL 324.36109; MCL 565.104; MCL 570.251; MCL 600.2928
- `(?:\b(?:lease|leases|leased|lessees?|demise[sd]?|rent(?:s|ed)?)\b)[\s\S]{0,1200}?(?:\b(?:life estates?|life tenan(?:t|ts|cy|cies)|tenants? for life|life leases?)\b)` / all / 5 / lt.ba: MCL 211.7dd; MCL 211.27a; MCL 324.36109; MCL 570.251; MCL 600.2928
- `\A(?=[\s\S]*(?:\b(?:life estates?|life tenan(?:t|ts|cy|cies)|tenants? for life|life leases?)\b))(?=[\s\S]*(?:\b(?:lease|leases|leased|lessees?|demise[sd]?|rent(?:s|ed)?)\b))` / all / 6 / lt.and: MCL 211.7dd; MCL 211.27a; MCL 324.36109; MCL 565.104; MCL 570.251; MCL 600.2928
- positive us @ SYNTH: passed ("The usufructuary may lease the property for a term.")
- positive lt @ MCL 211.27a: passed ("subject to a life estate or life lease retained by the transferor")

**MIG-B9-030** (cited), topic `special-district-representation`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:34:28. Special districts and tenants: lease disclosure, assessment pass-through, tenant role.
- summary: Battery MIG-B9-030 (sd.ab 5; sd.ba 5; sd.and 16; sdp 116 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:special assessment districts?|special districts?|improvement districts?|authority districts?)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|lessees?|lessors?|tenants?|renters?)\b)` / all / 5 / sd.ab: MCL 125.985; MCL 125.2466; MCL 125.4402; MCL 125.4407; MCL 324.11901
- `(?:\b(?:lease|leases|lessees?|lessors?|tenants?|renters?)\b)[\s\S]{0,1200}?(?:\b(?:special assessment districts?|special districts?|improvement districts?|authority districts?)\b)` / all / 5 / sd.ba: MCL 125.2466; MCL 125.4402; MCL 125.4412c; MCL 207.772; MCL 211.9f
- `\A(?=[\s\S]*(?:\b(?:special assessment districts?|special districts?|improvement districts?|authority districts?)\b))(?=[\s\S]*(?:\b(?:lease|leases|lessees?|lessors?|tenants?|renters?)\b))` / all / 16 / sd.and: MCL 125.72; MCL 125.985; MCL 125.1411; MCL 125.2466; MCL 125.4301; MCL 125.4316; MCL 125.4402; MCL 125.4407; MCL 125.4412; MCL 125.4412a; MCL 125.4412c; MCL 125.4415; MCL 207.772; MCL 211.9f; MCL 324.11901; MCL 324.50135
- `\bspecial assessment districts?\b` / all / 116 / sdp: MCL 41.3c; MCL 41.275; MCL 41.279; MCL 41.283a; MCL 41.350b; MCL 41.350c; MCL 41.350e; MCL 41.350f; MCL 41.350i; MCL 41.350j; MCL 41.350k; MCL 41.412; MCL 41.413; MCL 41.722; MCL 41.723; MCL 41.724; MCL 41.724a; MCL 41.725; MCL 41.735; MCL 41.801; MCL 41.802; MCL 41.808; MCL 41.810; MCL 42.31; MCL 45.590; MCL 46.16h; MCL 67.18; MCL 67.26; MCL 68.35; MCL 69.5; ... (86 more in the battery log) [heading-only, read: MCL 125.945]
- positive sd @ MCL 125.985: passed ("a lessor of a parcel subject to a special assessment may unilaterally revise an existing lease")
- positive sdp @ MCL 125.985: passed ("When the special assessment district is created")

**MIG-B9-031** (cited), topic `communal-land-lease-approval`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:34:40. Approval of leases of communal, tribal or Indian land.
- summary: Battery MIG-B9-031 (cl.ab 7; cl.ba 1; cl.and 13; ctp 8 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:indian|tribal|tribes?|communal)\b)[\s\S]{0,1200}?(?:\b(?:lease|leases|leased|leasing)\b)` / all / 7 / cl.ab: MCL 125.1411; MCL 125.1554; MCL 141.1053; MCL 333.12601; MCL 333.27960; MCL 457.486; MCL 600.2950a
- `(?:\b(?:lease|leases|leased|leasing)\b)[\s\S]{0,1200}?(?:\b(?:indian|tribal|tribes?|communal)\b)` / all / 1 / cl.ba: MCL 333.27960
- `\A(?=[\s\S]*(?:\b(?:indian|tribal|tribes?|communal)\b))(?=[\s\S]*(?:\b(?:lease|leases|leased|leasing)\b))` / all / 13 / cl.and: MCL 125.1411; MCL 125.1554; MCL 125.2088c; MCL 125.2090g; MCL 141.1053; MCL 333.12601; MCL 333.27960; MCL 432.202; MCL 432.207a; MCL 457.486; MCL 600.2950; MCL 600.2950a; MCL 722.111
- `\b(?:indian|tribal) (?:trust )?lands?\b` / all / 8 / ctp: MCL 333.27953; MCL 333.27964; MCL 432.303; MCL 432.304; MCL 432.307; MCL 432.403; MCL 432.404; MCL 432.407
- positive cl @ SYNTH: passed ("A lease of tribal land is not valid until it is approved.")
- positive ctp @ MCL 432.303: passed ("defined in 25 USC 2703")

**MIG-B9-032** (cited), topic `pet-eviction-fact-sheet`, 44179 units (hash 40ded75d5d8a4e3a), run 2026-11-13 21:50:20. Second battery for MIG-B9-025 (all positives synthetic, 0 hits; rule 19): everyday words for pets near tenancy or premises words.
- summary: Battery MIG-B9-032 (pt.ab 10; pt.ba 9; pt.and 17; po 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 147))
- `(?:\b(?:pets?|dogs?|cats?)\b)[\s\S]{0,1200}?(?:\b(?:tenants?|landlords?|lease|leases|rental units?|premises)\b)` / all / 10 / pt.ab: MCL 287.261; MCL 287.262; MCL 287.286a; MCL 287.335; MCL 287.338b; MCL 287.351; MCL 455.58; MCL 750.49; MCL 750.50; MCL 750.437
- `(?:\b(?:tenants?|landlords?|lease|leases|rental units?|premises)\b)[\s\S]{0,1200}?(?:\b(?:pets?|dogs?|cats?)\b)` / all / 9 / pt.ba: MCL 287.261; MCL 287.262; MCL 287.286a; MCL 287.335; MCL 287.338b; MCL 287.703; MCL 288.700; MCL 455.58; MCL 750.50
- `\A(?=[\s\S]*(?:\b(?:pets?|dogs?|cats?)\b))(?=[\s\S]*(?:\b(?:tenants?|landlords?|lease|leases|rental units?|premises)\b))` / all / 17 / pt.and: MCL 287.121; MCL 287.261; MCL 287.262; MCL 287.286a; MCL 287.322; MCL 287.335; MCL 287.338b; MCL 287.351; MCL 287.703; MCL 287.891; MCL 288.700; MCL 338.3654a; MCL 455.58; MCL 750.49; MCL 750.50; MCL 750.437; MCL 750.502c
- `\bpet owners?\b` / all / 0 / po
- positive pt @ MCL 287.261: passed ("every person who permits the dog to remain on or about any premises occupied by him")
- positive po @ SYNTH: passed ("The landlord shall give each pet owner a fact sheet before an eviction.")

**Replay (rule 19).** Every logged battery was re-run by script against the corpus after the last batch (`bat.replay()`): 242 batteries, 1,593 terms (batches 1-8: 210 batteries, 1,413 terms; batch 9: 32 batteries, 180 terms), plus the tool-test battery. Every hit count reproduced; 0 mismatches. Superseded batteries are kept in the log with their reruns and are not cited by any row.

### §4 Decisions and questions asked of Taylor

**Class decisions** (numbered; rows cite them as "gaps log s4 class decision N"):
1. **Truth in Renting Act (TRA).** Scope: a "rental agreement" is 'a written agreement embodying the terms and conditions concerning the use and occupancy of residential premises' (Mich. Comp. Laws § 554.632(a)); residential premises exclude temporary hotel/motel/tourist use and an owner's principal residence rented occasionally during temporary absences (Mich. Comp. Laws § 554.632(b)). Prohibited terms: Mich. Comp. Laws § 554.633(1)(a)-(o) (read it whole; (o), the fee-free payment method, was added by 2026 Mich. Pub. Acts 103, effective Sept. 21, 2026); a term barred by statute or declared unenforceable by a published Michigan or U.S. Supreme Court decision at least 90 days before signing is also barred (Mich. Comp. Laws § 554.633(2)); a violating term 'is void' (Mich. Comp. Laws § 554.633(3)). Remedies: after the tenant's written notice and 20 days without cure, the tenant may sue to void the lease, for an injunction, and for $250 per action (or $500 under subsection (2)) or actual damages, whichever is greater; no prior notice where the lessor 'actually knew' (Mich. Comp. Laws § 554.636(1)-(3)); the prevailing party recovers costs and statutory attorney fees (Mich. Comp. Laws § 554.636(4)). 'The requirements of this act may not be waived.' (Mich. Comp. Laws § 554.639). Consequence: no clause the library offers may be read as a § 554.633(1) term; where a clause's lawfulness turns only on case law about a (1) term, it is not offered.
2. **Fixed charges for breach (penalty test).** No Michigan statute sets a general rule on agreed damages in leases (Battery MIG-B1-010). Michigan case law enforces an agreed sum only if it is reasonable in relation to the possible injury and is not unconscionable or excessive (Curran v Williams, 352 Mich 278, 282 (1958); UAW-GM Human Resource Ctr v KSL Recreation Corp, 228 Mich App 486, 508 (1998); texts in sources/cases, read in the 2026-10-01 MI closeout round); no published Michigan case applying the test to a residential lease fee was found then. A lease may not make a party liable for 'legal costs or attorney fees incurred by another party, in connection with a dispute arising under the rental agreement, in excess of costs or fees specifically permitted by statute' (Mich. Comp. Laws § 554.633(1)(g)). Cautious course for any new optional charge clause: charge the documented actual cost (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill), never a fixed penalty, and never legal costs or attorney fees.
3. **Changes during the term.** A lease may not let the lessor alter a provision after commencement without the tenant's written consent, except three listed adjustments on written notice of at least 30 days (Mich. Comp. Laws § 554.633(1)(l)(i)-(iii)). Never offer a clause that lets the landlord change terms by notice outside (l)(i)-(iii).
4. **Repair covenants.** Mich. Comp. Laws § 554.139(1)(a)-(b) (fitness of premises and all common areas; reasonable repair and compliance with state and local health and safety laws, except disrepair caused by 'the tenants wilful or irresponsible conduct or lack of conduct'); the parties may modify these obligations only 'where the lease or license has a current term of at least 1 year' (Mich. Comp. Laws § 554.139(2)); a lease may not waive or alter a remedy for breach of those covenants (Mich. Comp. Laws § 554.633(1)(a)). In summary proceedings the judge or jury deducts rent excused by the landlord's breach of the lease or of the § 554.139 covenants (Mich. Comp. Laws § 600.5741).
5. **Local ordinances (SOP rule 3).** Name any you meet (Detroit, Grand Rapids, Ann Arbor, Lansing, others) as "local ordinance, not researched (SOP rule 3)"; never research or resolve them.
6. **Housing Law of Michigan scope.** It 'applies to each city, village, and township that, according to the last regular or special federal census, has a population of 10,000 or more' but not to 'private dwellings and 2-family dwellings in any city, village, or township having a population of less than 100,000 unless the legislative body of the local governmental unit adopts the provisions by resolution' (Mich. Comp. Laws § 125.401(2)). Every row stating a Housing Law rule says it applies only where the Housing Law applies (point to `edu-housing-law-mi`, `edu-scope-mi`).
7. **Consumer Protection Act.** It reaches leases: "trade or commerce" includes 'the advertising, solicitation, offering for sale or rent, sale, lease, or distribution of a service or property, tangible or intangible, real, personal, or mixed' (Mich. Comp. Laws § 445.902(1)(g)); a rental-agreement term that violates it is barred (Mich. Comp. Laws § 554.633(1)(m)). Waivers: an unlawful practice is 'Entering into a consumer transaction in which the consumer waives or purports to waive a right, benefit, or immunity provided by law, unless the waiver is clearly stated and the consumer has specifically consented to it.' (Mich. Comp. Laws § 445.903(1)(t)). Private remedy: actual damages or $250, whichever is greater, plus reasonable attorney fees (Mich. Comp. Laws § 445.911(2)). Existing row: `edu-consumer-protection-mi`.
8. **Case law.** Cite only cases whose text is in sources/cases (Curran; UAW-GM; Wilkinson v Lanterman; Park Forest of Blackman v Smith; Woodland v Michigan Citizens Lobby; M&D, Inc v McConkey; Benton v Dart Props, Inc; Hadden v McDermitt Apts, LLC; Laurel Woods Apts v Roumayah; Allison v AEW Capital Mgt, LLP), in Michigan style. Otherwise write "case law not read" (SOP rule 21). Where only case law could settle a point, state the doubt and the cautious course and keep the row VERIFIED (SOP Part 5 NEEDS_REVIEW policy).
9. **Summary proceedings and court rules.** Mich. Comp. Laws §§ 600.5701-600.5759 (cite each relied-on section on its own); MCR 4.201 and other court rules from sources/mcr (label each "court rule"). SCAO forms are not held: say "SCAO form not read".
10. **Waiver topics.** State the default rule first; a waiver of a rule Michigan does not have is empty, not lawful (rule 27). A term waiving a summary-proceedings right or a right of notice or procedure in a judicial proceeding is barred (Mich. Comp. Laws § 554.633(1)(f), (j)).
11. **One-year and fixed-term gates, notice formatting, deposit cap** are builder product work recorded in the MI log; don't write rows for them.
12. **Existing MI rows** (work/mi-existing-rows.tsv): never edit; point to them by id. A topic answered in substance by an existing row still gets its own short row keyed to the missing topic (rule 27 [LA 5]).
- `binding-arbitration`: binding-arbitration (gaps prompt item 10; Taylor's decision 2026-11-07): the shared arbitration-agreement clause is not tagged MI. Michigan's Uniform Arbitration Act has no consumer or residential-lease exclusion (Mich. Comp. Laws § 691.1683(2) excludes only voluntary membership organizations; Mich. Comp. Laws § 691.1686(1)), but Mich. Comp. Laws § 554.633(1)(f) and (j) bar a term that 'Waives or alters a party's right to demand a trial by jury or any other right of notice or procedure required by law in a judicial proceeding arising under the rental agreement' (Mich. Comp. Laws § 554.633(1)(f)), and Mich. Comp. Laws § 554.636 attaches $250/$500 or actual damages, voiding of the lease, costs and statutory attorney fees to including such a term, with no prior notice where the lessor actually knew. Whether a pre-dispute arbitration clause is such a term, and the effect of federal arbitration law (FEDERAL: 9 U.S.C. § 2, queued), turn only on case law the library has not read. Answer: education row edu-binding-arbitration-mi, clause not offered; summary proceedings and the small claims division (Mich. Comp. Laws § 600.8401, $7,000 from January 1, 2024) stay in court. No question to Taylor.
- `nonrefundable-deposit-notice`: nonrefundable-fees-wv is not tagged MI. Michigan's deposit definition reaches any amount 'paid by the tenant to the landlord' (Mich. Comp. Laws § 554.601(d)) to be held for the term and any amount returnable on the unit's condition, so the label never decides the question; the clause rests on West Virginia's express-agreement rule and its open list could name security money as a nonrefundable fee. edu-nonrefundable-deposit-notice-mi answers the topic; no MI clause is offered because no Michigan statute conditions anything on the lease's words (rule 27).
- `government-fee-reimbursement`: No Michigan government-fee pass-through clause is offered. A lease may not let the lessor alter a provision after commencement without the tenant's written consent except the three adjustments of Mich. Comp. Laws § 554.633(1)(l)(i)-(iii); a registration or inspection fee is not among the (l)(iii) costs, and a reimbursement formula for a fee that can rise mid-term risks being read as a payment change outside them (gaps log s4 class decisions 1 and 3). edu-government-fee-reimbursement-mi tells landlords to build a known fee into the rent or state it as a fixed charge at signing.
- `carpet-cleaning`: carpet-cleaning-ar is not tagged MI and no Michigan carpet-cleaning clause is offered: a security deposit may be used only for 'actual damages to the rental unit or any ancillary facility that are the direct result of conduct not reasonably expected in the normal course of habitation of a dwelling.' (Mich. Comp. Laws § 554.607(a)), so routine move-out cleaning cannot be charged to the deposit, and a lease term doing so would waive deposit rights (Mich. Comp. Laws § 554.633(1)(b)). A preset deposit schedule is declined for the same reason (edu-deposit-cost-schedule-mi).
- `tax-escalation`: tax-insurance-escalation-la is not tagged MI. Mich. Comp. Laws § 554.633(1)(l)(iii) allows mid-term changes in rental payments only for increases in ad valorem property taxes, listed utility charges consumed at the property, and 'premiums paid for liability, fire, or worker compensation insurance' (Mich. Comp. Laws § 554.633(1)(l)(iii)), on written notice of not less than 30 days; the shared clause's property-insurance share and open notice bracket go beyond that. rent-cost-adjustment-mi is the Michigan route; edu-tax-escalation-mi points to it.
- `rent-concession`: rent-concession-wi is not tagged MI; rent-concession-mi replaces it. Michigan's deposit definition counts 'any sum required to be paid as rent in any rental period in excess of the average rent for the term' (Mich. Comp. Laws § 554.601(d)) as a security deposit, and the Consumer Protection Act bars an inducement 'contingent on an event to occur subsequent to the consummation of the transaction.' (Mich. Comp. Laws § 445.903(1)(w)); the shared clause's open bracket allows both, so the Michigan clause fixes the concession as an equal, unconditional reduction in each full rental period with no chargeback. Cautious reading of the average-rent words; case law not read.
- `drug-free-housing-addendum`: Shared drug-free addenda (drug-free-housing-ca, drug-free-housing-addendum-wy, drug-free-housing-addendum-il, drug-activity-prohibition-oh) not tagged MI. drug-free-housing-ca bans ingesting cannabis in the dwelling "whether or not the conduct is otherwise lawful" (library text), but 'a lease agreement may not prohibit a tenant from lawfully possessing and consuming marihuana by means other than smoking' (Mich. Comp. Laws § 333.27954(4)); the other three rest on their own states' statutes. Michigan's 24-hour drug route already runs through criminal-activity-mi (Mich. Comp. Laws § 600.5714(1)(b)).
- `disability-accommodation`: Tagged disability-modification-restoration-mn for MI: the clause tracks 'In the case of a rental, the landlord may, if reasonable, make permission for a modification contingent on the renter's agreement to restore the interior of the premises to the condition that existed before the modification, reasonable wear and tear excepted.' (Mich. Comp. Laws § 37.1506a(1)(a)). The Michigan owner-occupant exemption names only section 502 (Mich. Comp. Laws § 37.1503), so the accommodation and modification duties of Mich. Comp. Laws § 37.1506a have no small-owner exemption in Michigan; edu-disability-accommodation-mi says so. A federal restoration escrow is treated as a Michigan security deposit counted toward the cap of Mich. Comp. Laws § 554.602 (cautious course; case law not read).
- `sex-offender-disclosure`: Offered an optional registry-notice clause (sex-offender-registry-notice-mi, SERVES_LANDLORD, is_default FALSE) under SOP rule 54, modelled on sex-offender-registry-notice-ut but pointing to the State Police public website the statute requires: 'The department shall maintain a public internet website separate from the law enforcement database described in subsection (1) to implement section 10(2) and (3).' (Mich. Comp. Laws § 28.728(2)). Screened against Mich. Comp. Laws § 554.633(1)(e) and Mich. Comp. Laws § 445.903(1)(s).
- `veterans-incentive`: No veteran or servicemember concession clause written for Michigan (no Michigan statute provides a safe harbor like Nebraska's); rent concessions are offered only as an equal reduction in every month (gaps log s4), and edu-no-veterans-incentive-mi points the landlord to that.
- `term-change-notice`: Optional clause legally-required-changes-mi offered (rule 54) for the first adjustment a lease may provide for, 'Changes required by federal, state, or local law or rule or regulation.' (Mich. Comp. Laws § 554.633(1)(l)(i)), on 30 days' written notice; rules-mi and rent-cost-adjustment-mi already cover (l)(ii) and (l)(iii). The shared periodic-tenancy clauses term-change-notice-gu, term-change-notice-mo, term-change-notice-ut, term-change-notice-ca and term-change-notice-wy are not tagged: each rests on its own state's notice or modification statute, Michigan has none, and a change-by-notice term outside (l)(i)-(iii) is barred (gaps log s4 class decision 3).
- `owner-move-in-reservation`: owner-occupancy-termination-ar tagged MI as written (optional, fixed Term only): enforceable through summary proceedings after 'termination of the lease, pursuant to a power to terminate provided in the lease' (Mich. Comp. Laws § 600.5714(1)(c)(i)); not a Mich. Comp. Laws § 554.633(1)(l) alteration because it is agreed at signing. Voucher (FEDERAL: 24 C.F.R. § 982.310(d)(2)), MSHDA just-cause (Mich. Comp. Laws § 125.1458d(a)) and retaliation (Mich. Comp. Laws § 600.5720) limits bind by their own force and are stated in edu-owner-move-in-reservation-mi. The other owner clauses are not tagged: owner-move-in-reservation-ca, owner-move-in-reservation-me, owner-recovery-ak, owner-occupancy-termination-hi, owner-move-in-reservation-la and owner-occupancy-termination-nd name their own states' law; owner-move-in-reservation-mn, owner-occupancy-termination-nv, owner-occupancy-termination-il and owner-occupancy-termination-mo are single-state versions of the same clause (rule 26 triage: topic answered for Michigan by the tagged owner-occupancy-termination-ar).
- `home-business`: home-business-permission-mi offered (rule 54). home-business-permission-co (CO;UT;MO) declined: its repair-cost sentence would make the tenant pay for business-caused damage without the 'wilful or irresponsible conduct or lack of conduct' (Mich. Comp. Laws § 554.139(1)(b)) limit, a covenant shift Michigan allows only in a lease with 'a current term of at least 1 year' (Mich. Comp. Laws § 554.139(2)). home-business-wy and home-business-use-restriction-nd rest on their own states' law. Same pattern for family-child-care: family-child-care-consent-mi offered; family-child-care-consent-ut, family-child-care-va, family-child-care-fl, family-child-care-wy, family-child-care-consent-nd and child-care-consent-il name their own states' licensing or statutes, and family-child-care-or carries Oregon's statutory choice between parent liability waivers and insurance.
- `association-obligations-disclosure`: association-documents-delivery-mi offered (rule 54). association-documents-delivery-ks (KS;NC;MO;ID) declined: its sentence "Landlord is not responsible for any act or decision of the association" (library text) could be read, given the covenant that 'the premises and all common areas are fit for the use intended by the parties' (Mich. Comp. Laws § 554.139(1)(a)), as a void exculpation under Mich. Comp. Laws § 554.633(1)(e) with Truth in Renting Act remedies (gaps log s4 class decision 1). association-obligations-disclosure-dc, condo-repair-contact-ma, cic-notice-ct, montgomery-association-docs-md, condominium-lease-statement-pr, access-control-lease-statement-pr and condominium-apartment-particulars-gu are required disclosures under their own statutes; association-documents-provided-co (CO) is not tagged because its fine-reimbursement sentence duplicates the fine term of hoa-compliance-mi and its promise not to pass on assessments is a Colorado drafting choice; association-documents-delivery-mi covers the delivery acknowledgment without either. accessory-dwelling-unit-term-co tagged for accessory-dwelling-unit; the GU, MN and ND accessory-unit clauses rest on their own law.
- `lead-safe-certification`: No lead clause offered for lead-safe-certification or lead-state-notices: Michigan's registry (Mich. Comp. Laws § 333.5474b(2)) is an agency filing, not a lease term, and the federal disclosure is carried by the MI-tagged lead-based-paint clause. The NJ, DE, MD, MA, NH, VT, DC and IL lead clauses rest on their own states' statutes. Likewise not tagged, each resting on its own state's statute: good-cause-notice-ny, good-cause-nonrenewal-tx, tenant-rights-statement-va, summary-of-rights-il, habitability-rights-statement-co, tenants-bill-of-rights-md, ag-summary-receipt-de, rights-guide-receipt-de, certificate-of-occupancy-notice-ny, condition-disclosure-wi, housing-code-violations-disclosure-ri, sanitary-code-variance-ma, safety-exception-notice-nj, sfr-occupancy-disclosure-nv (all required disclosures or receipts under their own statutes, read in full or triaged by the state named in their text).
- `appliances-excluded`: appliances-excluded-mi is offered for every lease length. Whether excluding an item left at the home modifies the covenants, which the parties may change only 'where the lease or license has a current term of at least 1 year' (Mich. Comp. Laws § 554.139(2)), is unsettled (case law not read), so the clause gives the tenant a free removal right and can never exclude an item needed for fitness, repair or health and safety compliance. appliances-excluded-la is not tagged (Louisiana Civil Code wording and initials line).
- `subsidized-inspection-refusal`: No optional clause on housing-authority inspections is offered for Michigan: a lease term used only for voucher holders risks being a 'distinction, discrimination, or restriction' in 'terms, conditions, fees, or privileges' based on source of income (Mich. Comp. Laws § 554.601c(1)(b)) for a landlord of 5 or more units, and the HUD tenancy addendum already supplies the program terms. Local enforcing-agency inspections stay with housing-inspection-entry-mi.
- `prohibited-acts-renter`: prohibited-acts-renter-wy is not tagged for Michigan: its access limb is not tied to the Housing Law rule that the owner 'shall request and obtain permission to enter the leasehold' (Mich. Comp. Laws § 125.526(11)), and its damage limb is not Michigan's settled deliberate, negligent or irresponsible standard (gaps log s4). prohibited-acts-renter-mi defers to landlords-access-mi and adds the 7-day-demand hazard ground (Mich. Comp. Laws § 600.5714(1)(d)).
- `repair-notice`: A Michigan lease may ask for written repair requests but may not make one a condition of the tenant's remedies, because a term may not waive or alter 'a remedy available to the parties when the premises are in a condition that violates the covenants of fitness and habitability' (Mich. Comp. Laws § 554.633(1)(a)). repair-requests-mi and designated-repairer-mi each end with a sentence keeping every right, remedy and defense; the shared landlord-maintenance written-notice sentence is read the same way and needs no override (it states a tenant duty, not a precondition).
- `heating`: heat-freeze-protection-mi charges only documented actual repair cost for damage from a deliberate, negligent or irresponsible failure to keep the heat on (gaps log s4; gaps log s4 class decision 2) and leaves heating-system repair with the landlord, so it modifies no covenant and is lawful for every lease length. The CO, UT and ID freeze clauses are not tagged.
- `hazardous-contamination-disclosure`: Part 201 and Part 213 transfer notices applied to leases (cautious course). A person on notice that property is a facility 'shall not transfer an interest in that real property unless he or she provides written notice to the purchaser or other person to which the property is transferred' (Mich. Comp. Laws § 324.20116(1)); Part 213 is parallel (Mich. Comp. Laws § 324.21304d(1), (3)). Neither part defines transfer and no Michigan case was read (gaps log s4 class decision 8); a lease conveys an interest in real property, so contamination-notice-mi is a conditional required disclosure given before signing, even where a covenant is recorded, and edu-hazardous-contamination-disclosure-mi says why.
- `bed-bug-cooperation`: Michigan tenant-cost clauses use the repair covenant's own fault words. Where a clause makes the tenant pay to repair or treat a condition, B6 limits the charge to a condition caused by 'the tenants wilful or irresponsible conduct or lack of conduct' (Mich. Comp. Laws § 554.139(1)(b)) and to documented actual third-party cost (gaps log s4 class decisions 2 and 4), so it is lawful in a lease of any length (Mich. Comp. Laws § 554.139(2)). On that ground B6 did not tag pest-cooperation-pr, pest-cooperation-la ("the fault of Tenant", reasonable cost), waterbed-mn (all damage the item causes) or the Utah fire-code and cooling clauses, and wrote pest-cooperation-mi, waterbed-mi, fire-code-compliance-mi and portable-cooling-device-mi. Consistency note for the main pass, not filed as a defect: tenant-caused-damage-mi uses "deliberate, negligent or irresponsible".
- `smoke-drift-waiver`: Smoke-drift waiver not offered (rule 54, lawful-option screen). A term waiving the tenant's claims for drifting smoke would be a provision that 'Exculpates the lessor from liability' (Mich. Comp. Laws § 554.633(1)(e)) or would alter covenant remedies (Mich. Comp. Laws § 554.633(1)(a)), and a consumer waiver must be clearly stated and specifically consented to (Mich. Comp. Laws § 445.903(1)(t)); edu-smoke-drift-mi records why. smoke-drift-waiver-ut, smoke-drift-waiver-wy and smoke-drift-and-common-areas-mn not tagged.
- `security-devices`: No separate Michigan security-device clause. No Michigan statute sets a lock, deadbolt, viewer or rekey duty or a tenant lock-change right (Battery cited in edu-no-security-devices-rule-mi); keys (tagged MI), lock-change-ak (tagged MI in B6 under key-control-policy) and landlord-maintenance (tagged MI) already cover keys, lock changes and repair reports, and the owner lockout rule (Mich. Comp. Laws § 600.2918(2)(c)) is stated in the education row. security-devices-ut, security-devices-wy, security-devices-ca, security-devices-tx and tenant-rekey-right-il rest on their own states' statutes and are not tagged.
- `fire-code-standard`: Residential code edition not stated. The corpus copy of Mich. Admin. Code R 408.30500 (Administrative Rules System file served 2026-11-12) prints the 2015 edition adoption with history ending 2022 MR 2, while edu-smoke-alarms-mi's notes record a 2025 rule set adopting the 2021 edition. B6 rows cite R 408.30500 and R 408.30539a for content unaffected by edition (the R313 sprinkler exclusion, appendix adoption) and state no edition number; the main pass may want to reconcile the corpus file with the MI log. B6 read the building code (Part 4, 2021 edition) and rehabilitation code only from the 2026-10-01 copies in sources/arsfile.
- `key-control-policy`: Three shared clauses tagged MI in B6, each on a Michigan absence or rule recorded in its segment with a fee screen: lock-change-ak (key-control-policy; no Michigan tenant lock-change right, domestic violence included), common-area-lighting-ks (common-area-lighting; no tenant-meter rule; keeps the owner's Housing Law duty to light public halls, Mich. Comp. Laws § 125.465) and energy-data-release-wy (energy-data-release; the written-consent rule for utility usage data, Mich. Admin. Code R 460.153(2)(d)).
- `eviction-service-party`: No Michigan clause naming a person to accept eviction papers for the tenant (rule 54 lawful-option screen). Process may be served on 'an agent authorized by written appointment or by law to receive service of process' (Mich. Comp. Laws § 600.1930; MCR 2.105(I)(1), court rule), but summary-proceedings service requires mailing to the defendant plus a listed method (MCR 4.201(D), court rule), and a lease term that 'Waives or alters a party's right to demand a trial by jury or any other right of notice or procedure required by law in a judicial proceeding arising under the rental agreement.' is void (Mich. Comp. Laws § 554.633(1)(f)), with Mich. Comp. Laws § 554.636 remedies. Whether a lease appointment counts, and whether it would open a default under MCR 4.201(G)(5)(a)(i), turns on case law not read; cautious course: not offered. edu-eviction-service-party-mi states the Address Confidentiality Program agent (Mich. Comp. Laws § 780.855(3)(b), Mich. Comp. Laws § 780.857(4)). eviction-service-party-mn (a Minnesota contact clause resting on Minn. Stat. section 504B.332) is not tagged; electronic-service-consent-mi already covers the tenant's electronic address.
- `environmental-event-termination`: No Michigan environmental-event termination clause (rule 54 lawful-option screen). A landlord right to end the lease instead of restoring a home made unfit by flood, contamination or a government order displaces the covenant to keep the premises fit and in reasonable repair 'during the term of the lease or license' (Mich. Comp. Laws § 554.139(1)(b)), which the parties may modify only 'where the lease or license has a current term of at least 1 year' (Mich. Comp. Laws § 554.139(2)); that is the ground of casualty-termination-mi, whose narrow terms Taylor set on 2026-10-01 (MI log s6.2) and which this pass does not touch. A second clause for the same leases would duplicate it with different events and risk conflicting with Taylor's terms, and the tenant's own surrender right needs no clause (Mich. Comp. Laws § 554.201). environmental-event-termination-ut (Utah Fit Premises Act basis) is not tagged. Product question recorded for Taylor in the B7 report.
- `cure-and-eviction-grounds`: B7 eviction rows carry the CARES pointer (gaps prompt item 9(c)). Each new B7 row that states a Michigan notice or eviction route (edu-cure-and-eviction-grounds-mi, edu-landlord-remedies-termination-mi, edu-forfeiture-redemption-mi, edu-redemption-mi, edu-eviction-hardship-stay-mi, edu-no-benefit-delay-defense-mi, edu-minor-tenant-filing-mi, edu-entity-landlord-court-representation-mi, edu-tenancy-at-will-mi) ends with one sentence that the federal 30-day notice to vacate in edu-cares-act-notice applies to covered properties (FEDERAL: 15 U.S.C. § 9058(c)); none says a Michigan notice satisfies it. No new cure clause: default-by-tenant-mi already lets the landlord set a cure period for non-rent breaches, and no Michigan statute sets one ('After termination of the lease, pursuant to a power to terminate provided in the lease or implied by law.' (Mich. Comp. Laws § 600.5714(1)(c)(i))); breach-cure-notice-mp rests on Northern Mariana Islands law and is not tagged.
- `entity-landlord-court-representation`: Gaps prompt item 12 coverage in B7: edu-entity-landlord-court-representation-mi states the foreign-entity bar on maintaining an action (Mich. Comp. Laws § 450.5007(1), Mich. Comp. Laws § 450.2051(1), Mich. Comp. Laws § 449.1907(a)) and the assumed-name bar (Mich. Comp. Laws § 445.5), because both decide whether an entity landlord can sue; service on a nonresident owner (MCR 2.105, court rule) and reporting duties binding any person are left to nonresident-owner-agent (batch B9) and law-enforcement-cooperation (batch B3). Whether leasing residential property is transacting business under Mich. Comp. Laws § 450.5008 and Mich. Comp. Laws § 450.2012 is case law not read; the row's cautious course is to register before filing.
- `cold-weather-vacate-notice`: No Michigan cold-weather or absence clause beyond the existing ones. No Michigan statute sets a vacating notice (Battery cited in edu-no-cold-weather-vacate-notice-mi), so the topic is answered by an education row pointing to heat-freeze-protection-mi (batch B5, topic heating) and to extended-absence-notice-ks, tagged MI in B7 with a fee screen (actual damages for a willful failure only; no fixed charge, Mich. Comp. Laws § 554.633(1)(g)). cold-weather-vacate-notice-mn (resting on Minn. Stat. section 504B.155, a criminal-notice statute Michigan lacks) is not tagged.
- `trespass-notice`: Two shared clauses tagged MI in B7, each with a fee screen in its segment: barred-person-covenant-ne (trespass-notice; tenant covenant, because Michigan's trespass statute lets 'the owner or occupant or the agent of the owner or occupant' forbid entry (Mich. Comp. Laws § 750.552(1)(a)), so a tenant may license a visitor; the barring standard is fixed at signing, so a landlord's notice naming a person is not a mid-term change under Mich. Comp. Laws § 554.633(1)(l)) and extended-absence-notice-ks (extended-absence-notice; no Michigan absence statute; actual damages for a willful failure only). No B7 topic produced a new Michigan lease clause.
- `utility-allowance-cap`: Batch B8 shared-clause screen (rule 26), 121 active clauses on the 18 topics. Shared (11), read in full: tagged MI 3, each with a fee screen in its segment: utility-shutoff-notice-authorization-co (utility-disconnection-notice-authorization), utility-transfer-nj (utility-transfer), telecom-access-mn (telecom-access). Declined 8, each replaced or answered by a Michigan row: utility-allowance-cap-co (no single-meter or electricity condition; utility-allowance-cap-mi); utility-billing-wv (bills electricity and gas by submeter or allocation; utility-apportionment-mi); ev-charger-installation-hi and ev-charger-installation-conditions-nd (landlord-measured electricity charge, not documented actual cost and inside the weights-and-measures question; ev-charger-installation-mi); ev-charging-end-of-tenancy-co (a REQUIRED Colorado term; edu-no-ev-charging-end-of-tenancy-mi); ev-charging-shared-area-co (unstated reasonable fee; edu-no-ev-charging-shared-area-mi); parking-rules-notice-co (rules changed by notice outside Mich. Comp. Laws § 554.633(1)(l)(i)-(iii); edu-parking-rules-notice-mi, rules-mi); scheduled-services-entry-la (entry without the permission Mich. Comp. Laws § 125.526(11) requires; scheduled-services-entry-mi). Single-state (110): 47 name another state or its statute in the text; the other 63 were opened and each is its home state's own version on a topic Michigan now answers with its own row or a tagged shared clause (unbundled-parking-ut was copied as unbundled-parking-mi because its notes rest on Utah's fee statute); none tagged.
- `telecom-access`: Item 8 no-alterations check for the telecom, solar and EV topics (batch B8): no Michigan statute gives a tenant a right to install telecom, solar or EV charging equipment over a lease term. The only installation right found is the federal over-the-air reception devices rule (FEDERAL: 47 C.F.R. § 1.4000), which reaches a 'lease provision' (FEDERAL: 47 C.F.R. § 1.4000(a)(1)) and is preserved by no-alterations' last sentence and by telecom-access-mn's savings paragraph. The Homeowners' Energy Policy Act (Mich. Comp. Laws § 559.305, Mich. Comp. Laws § 559.307) protects association members, who are owners, and does not apply in common areas or on shared roofs (Mich. Comp. Laws § 559.313). Mobile home parks: the antenna rule in Mich. Comp. Laws § 125.2328(1)(i). Confirms the main pass's no-alterations line; no change.
- `unbundled-parking`: For consistency across batches: unbundled-parking-mi carries a fixed monthly parking price ({{parking_fee_amount}}). Batch B8 read the gaps log s4 rule that charge clauses use documented actual cost as covering cost-recovery and breach charges, not the price of an optional service the tenant chooses at signing and that cannot rise during the term (Mich. Comp. Laws § 554.633(1)(l)). If the main pass reads the rule more widely, drop unbundled-parking-mi and keep edu-no-unbundled-parking-rule-mi with its clause pointer removed.
- `utility-apportionment`: Builder item: for Michigan, the utility setup should ask which utility a landlord-billed charge covers and offer utility-apportionment-mi only for water, sewer, storm water and trash, and utility-allowance-cap-mi only where the provider bills the property alone (for electricity or gas, only on a utility-owned meter serving only the unit); neither is offered for a mobile home park lot. Recommendation: add a utility-type picklist and a mobile-home-lot flag that gate the two clauses, since the bracket instructions alone rely on the landlord reading them. Also add a yes/no question, "Does any utility account for the property carry an on-bill energy project (per-meter) charge?", that shows meter-project-charge-disclosure-mi only on yes.
- `tenant-insurance-claims`: No Michigan mutual waiver-of-subrogation clause (rule 54 lawful-option screen). The exception to the exculpation bar permits 'a provision that releases a party from liability arising from loss, damage, or injury caused by fire or other casualty for which insurance is carried by the other party' (Mich. Comp. Laws § 554.633(1)(e)), but for the tenant the release waives a right provided by law, unlawful 'unless the waiver is clearly stated and the consumer has specifically consented to it' (Mich. Comp. Laws § 445.903(1)(t)), and the main pass defaults to not offering tenant waivers (gaps log s4); it would also cut back tenant-caused-damage-mi, which relies on an express agreement to overcome New Hampshire Ins Group v Labombard, 155 Mich App 369, 377 (1986). edu-tenant-insurance-claims-mi says it exists and why it is not offered (rule 54 declined option). Note for the consistency pass: B1's edu-optional-lease-terms-mi lists "a mutual release for fire or casualty losses" among terms the law allows and says the library offers each one it uses; no MI clause offers it, so that row should say the release is allowed but not offered. No force-placed renter's insurance clause either: Mich. Comp. Laws § 500.1201a(1) licensing of anyone who sells, solicits or negotiates insurance was not resolved for a landlord placing coverage (edu-no-renters-insurance-rule-mi).
- `nonresident-owner-agent`: Gaps prompt item 12 coverage in B9. nonresident-owner-agent (edu-nonresident-owner-agent-mi): (1) foreign-entity bars on suing and (2) the assumed-name bar are pointed to edu-entity-landlord-court-representation-mi (batch B7; Mich. Comp. Laws § 450.5007, Mich. Comp. Laws § 450.2051, Mich. Comp. Laws § 449.1907, Mich. Comp. Laws § 445.5; gaps log s4), not restated; (3) service on a nonresident owner is stated from MCR 2.105(A), (B)(1), (D), (H), (I)(1) and (J) (court rule) and limited personal jurisdiction from 'The ownership, use, or possession of real or tangible personal property situated within the state.' (Mich. Comp. Laws § 600.705(3)); (4) reporting duties binding any person are pointed to edu-law-enforcement-cooperation-mi (batch B3). The nonresident battery cited in that row carries limbs without a landlord word (rule 19 [FL-gaps 3]). confirmed-absences-outside-title (edu-confirmed-absences-outside-title-mi) repeats the four by pointer and adds squatting (Mich. Comp. Laws § 750.553, Mich. Comp. Laws § 600.5744(3)(d)). No Housing Law receivership or code-enforcement agent designation was found.
- `automatic-renewal`: B9 shared-clause screen (rule 26). Tagged MI, each with a fee screen in its segment: foreclosure-disclosure-nv (foreclosure-disclosure), emergency-contact-co (emergency-contact), animal-care-access-vi (animal-care-access). Not tagged, with a Michigan clause written instead: automatic-renewal-ks (renewal rent changeable by landlord notice; Mich. Comp. Laws § 554.633(1)(l)) -> automatic-renewal-mi; guaranty-as (cosigner notice under Mich. Comp. Laws § 445.272 would live only in a segment) -> guaranty-mi; eminent-domain-vi (award assignment is a tenant waiver; Mich. Comp. Laws § 445.903(1)(t)) -> eminent-domain-mi; tenant-portal-mn (portal may be required with a no-fee alternative only when it is down; Mich. Comp. Laws § 554.633(1)(o); non-waivable refusal under Mich. Comp. Laws § 450.835(3)) -> tenant-portal-mi; no-liens-ar (open "reasonable costs"; Mich. Comp. Laws § 554.633(1)(g)) -> no-liens-mi; farmland-sporting-rights-co ("not responsible" line; Mich. Comp. Laws § 554.633(1)(e)) -> farmland-sporting-rights-mi; informal-dispute-resolution-or (reads as a condition to suing; does not keep every right, remedy and defense) -> informal-dispute-resolution-mi. New Michigan clauses with no shared parent fit: adverse-proceeding-notice-mi (adverse-proceeding-notice-co and tenant-notice-of-adverse-proceeding-ks rest on their own states; the Kansas rent-payment bar conflicts with assignment-of-rents notices) and agreed-notice-methods-mi (agreed-notice-methods-ut and actual-notice-method-or rest on their own statutes). Single-state clauses on the other B9 topics name or rest on another state's statute and were not tagged. No new {{variables}}: automatic-renewal-mi reuses {{renewal_notice_days}}; the rest use bracket prompts.
- `tenant-insurance-claims`: Builder item: whether to offer a Michigan mutual release (waiver of subrogation) clause behind a separate, specifically initialed consent. The law permits 'a provision that releases a party from liability arising from loss, damage, or injury caused by fire or other casualty for which insurance is carried by the other party' (Mich. Comp. Laws § 554.633(1)(e)), but for the tenant it is a waiver valid only if 'the waiver is clearly stated and the consumer has specifically consented to it' (Mich. Comp. Laws § 445.903(1)(t)), so offering it would need a consent block the builder does not have. Recommendation: do not offer it now (it would also narrow tenant-caused-damage-mi); if Taylor wants it later, build a separately initialed consent field first and write the clause from the (1)(e) exception's own conditions (policy permits waiver, insurer's subrogation waived, only to the extent of recovery).
- `no-alterations`: Item 8, `no-alterations` (central shared edit of 2026-10-04): confirmed, vouched, no change needed. Its last sentence keeps 'reasonable modifications of existing premises' that a renter makes at the renter's expense, and the landlord may 'if reasonable, make permission for a modification contingent on the renter's agreement to restore the interior of the premises to the condition that existed before the modification, reasonable wear and tear excepted' (Mich. Comp. Laws § 37.1506a(1)(a)); FEDERAL: 42 U.S.C. § 3604(f)(3)(A) is to the same effect. No Michigan statute gives a tenant a right to install telecom, solar or EV charging equipment over a lease term (`edu-no-ev-charging-rule-mi`; batch B8 rows for `telecom-access`, `portable-solar` and the `ev-charging-*` topics); the Homeowners' Energy Policy Act binds associations, not landlords. The new ownership sentence only defers to applicable law.
- `addendum-precedence`: Item 8, `addendum-precedence` (central shared edit of 2026-10-04): confirmed, vouched, no change needed. The notices Michigan requires keep control under its "applicable law requires" exception (library text): the Truth in Renting notice and the lessor's name and address (Mich. Comp. Laws § 554.634; `truth-in-renting-notice-mi`), the deposit notice (Mich. Comp. Laws § 554.603; `security-deposit-notice-mi`), the domestic violence statement where used (Mich. Comp. Laws § 554.601b(1); `dv-release-notice-mi`), the senior-housing and infirmity term a rental agreement 'shall provide' (Mich. Comp. Laws § 554.601a(1); `early-termination-senior-infirmity-mi`) and the federal lead warning statement (FEDERAL: 42 U.S.C. § 4852d).
- `tenant-maintenance`: Item 8, repair covenants in a lease under one year: `tenant-maintenance`, `landlord-maintenance` and `landscaping-irrigation` do not shift a covenant duty. `tenant-maintenance` carves out "any condition that applicable law requires Landlord to repair or remedy" (library text) and tracks the Housing Law's rule that 'the tenants shall be responsible for the cleanliness of those parts of the premises that they occupy and control' (Mich. Comp. Laws § 125.474); `landlord-maintenance` restates the covenants; `landscaping-irrigation` is a yard chore (mowing, raking, reporting leaks), not a repair or fitness duty under Mich. Comp. Laws § 554.139(1), so it modifies nothing that the statute reserves to a lease or license that 'has a current term of at least 1 year' (Mich. Comp. Laws § 554.139(2)). No override proposed.
- `keys`: Item 8, `keys`: confirmed as tagged. Its rekey charge ("charge the cost to Tenant", library text) is none of the Mich. Comp. Laws § 554.633(1) terms (not a security interest under (1)(h), not legal costs under (1)(g), not a payment-method fee under (1)(o)), and it is an actual cost, not a fixed sum (gaps log s4 class decision 2). Unlawful interference includes 'Changing, altering, or adding to the locks or other security devices on the property without immediately providing keys or other unlocking devices to the person in possession.' (Mich. Comp. Laws § 600.2918(2)(c)); the clause rekeys only when keys are not returned or a replacement is needed, during the term only with the tenant keeping a working key, so it doesn't reach that bar.
- `casualty-termination`: Item 9(b), casualty fault persons: the persons need not match, and no wording is proposed. `casualty-termination-mi` withholds the release for damage from "the wilful or irresponsible conduct, or lack of conduct, of Tenant" (library text) because it tracks the statutes it rests on, which speak of the lessee's own fault: the surrender right applies 'if the destruction or injury occurred without his fault or neglect' (Mich. Comp. Laws § 554.201) and the repair covenant excepts disrepair 'caused by the tenants wilful or irresponsible conduct or lack of conduct' (Mich. Comp. Laws § 554.139(1)(b)). Widening the casualty sentence to occupants or guests would enlarge a statutory exception by contract in a clause Taylor narrowed on 2026-10-01. Liability for an occupant's or guest's damage is a separate contract term that the landlord can add with `tenant-caused-damage-mi` (Tenant and an Occupant in items (1)-(2); guests and invitees for repair cost); the two clauses work side by side without conflict.
- `cares-act-notice`: Item 9(c), CARES: no MI eviction row contradicts `edu-cares-act-notice` (tagged MI). `edu-nonpayment-notice-mi`, `edu-termination-notice-mi`, `edu-eviction-process-mi`, `edu-for-cause-eviction-mi`, `edu-expedited-criminal-eviction-mi` and `criminal-activity-mi` state Michigan's own notice periods and procedures; none says a Michigan notice suffices for a property covered by FEDERAL: 15 U.S.C. § 9058(c). The new B7 rows (`cure-and-eviction-grounds`, `landlord-remedies-termination`, `rent-demand-bar`) carry the same pointer.
- `rent-concession`: Main pass, on the B2 question: kept as a drafting call under SOP rule 76, not put to Taylor. `rent-concession-mi` offers only an equal reduction in every full rental period of the term. A back-loaded special (a free last month) would leave earlier periods' rent above 'the average rent for the term' and count the excess as a security deposit (Mich. Comp. Laws § 554.601(d)), which could exceed the 1 1/2-month cap (Mich. Comp. Laws § 554.602); case law on the average-rent words was not read, so the cautious course governs. `edu-rent-concession-mi` explains the risk for landlords who write their own concession terms.
- `prohibited-acts-renter`: Main pass, on the B5 question: `prohibited-acts-renter-mi` is a standard (RECOMMENDED, not optional) clause, matching the Wyoming, Utah and Missouri versions; decided as a drafting call under SOP rule 76, not put to Taylor. Its damage standard is the deliberate, negligent or irresponsible standard of `tenant-caused-damage-mi`, and its entry limb defers to the lease's entry terms.
- `hazardous-contamination-disclosure`: Builder item (B6; class decision 11): `contamination-notice-mi` is a required disclosure only where the landlord knows, has information, or is on notice through a recorded instrument that the parcel is a Part 201 facility or a Part 213 site. Recommendation: setup asks the landlord that yes/no question and turns the clause on only on a yes. Not put to Taylor as a blocking question; recorded for the builder.
- `sex-offender-disclosure`: Builder item (B3 and B6; class decision 11): the library has no lease-with-option-to-purchase product. Such a lease of 1 to 4 units triggers the Seller Disclosure Act statement before signing (Mich. Comp. Laws § 565.952, Mich. Comp. Laws § 565.954). Recommendation: if the builder ever lets a landlord add a purchase option, show a warning telling the landlord to deliver the seller disclosure statement first; no clause is written.
- `fire-code-standard`: Fault words in charge clauses: B2 and B5 clauses (`detector-care-mi`, `heat-freeze-protection-mi`) use the deliberate, negligent or irresponsible standard of the existing `tenant-caused-damage-mi`; B6 clauses (`fire-code-compliance-mi`, `pest-cooperation-mi`, `waterbed-mi`, `portable-cooling-device-mi`) use the repair covenant's own words, conduct 'caused by the tenants wilful or irresponsible conduct or lack of conduct' (Mich. Comp. Laws § 554.139(1)(b)). Both are kept: each ties the charge to the covenant's exception, and the statute's own words are never broader than it. No finding is filed on `tenant-caused-damage-mi`, whose notes give its basis in Mich. Comp. Laws § 554.201 and Mich. Comp. Laws § 600.5714(1)(d) as well.
- `frozen-standard-incorporation`: Code editions (B4 and B6): the held construction-code rules adopt the International Residential Code, 2015 edition, for 1- and 2-family dwellings, and the 2021 International Building Code and International Existing Building Code (effective April 9, 2025). `edu-code-editions-mi` states those editions with a pointer to the Bureau of Construction Codes for later updates; the B6 rows state no edition. Consistent; no change.
- `environmental-event-termination`: Main pass, on the B7 question: no separate Michigan landlord termination right for environmental events. `casualty-termination-mi` stays as Taylor set it on 2026-10-01 (the gaps prompt says not to revisit it); `edu-no-environmental-event-termination-mi` states the default rule. Decided under SOP rule 76, not put to Taylor.
- `unbundled-parking`: Main pass, on the B8 consistency flag: the documented-actual-cost rule (gaps log s4 class decision 2) governs charges for breach, damage or cost recovery, not the agreed price of an optional service the tenant chooses at signing. `unbundled-parking-mi` is kept: its price is fixed for the Term, and its mutual end-on-notice right is reserved at signing, so it is not a change under Mich. Comp. Laws § 554.633(1)(l).
- `tenant-insurance-claims`: Main pass, on the B9 builder item: no Michigan mutual release of insured fire and casualty losses is offered now. The release is allowed (Mich. Comp. Laws § 554.633(1)(e)), but for the tenant it is a waiver needing a clear statement and specific consent (Mich. Comp. Laws § 445.903(1)(t)), and it would cut across `tenant-caused-damage-mi`. Builder item, recorded: if Taylor later wants it, build a separately initialed consent field first. `edu-optional-lease-terms-mi` now says the library does not offer it. Decided under SOP rule 76.
- `pool-safety`: Builder item (independent check R1): show guidance beside the pool_minimum_age variable for Michigan: set it as low as safety allows, apply it to residents and guests alike, and yield to a reasonable accommodation, because an age-based supervision rule is a term or privilege under the familial-status rules (Mich. Comp. Laws § 37.2502(1)(b); Mich. Comp. Laws § 554.633(1)(c)) and its lawfulness is case law not read.

### §5 Independent check

**Method.** The checker was an independent agent that had not written the rows, briefed by `check/brief.md`, and ran one agent at a time. Round 1 covered every delta id plus the 3 proposed rows, 270 ids in all, in four sequential chunks. For each id it opened the cited statutes, ran its own corpus searches on absence claims, screened clauses against Mich. Comp. Laws § 554.633(1), and checked tags under SOP rule 26. Findings are saved in `check/R1-C1.jsonl` to `check/R1-C4.jsonl`.

**Round 1 result:** 22 ERROR, 42 WARN, 206 OK. Every ERROR and every WARN was fixed by the main pass. Each fix is recorded at the end of the row's notes as "Independent check R1 fix: …".

The ERRORs fell into these groups:
- **Statutory grounds or exceptions stated without their conditions:**
  - Mich. Comp. Laws § 600.5714(1)(d): 90-day discovery and the repair option. Rows: `edu-habitability-materiality-mi`, `edu-tenant-statutory-duties-mi`.
  - Mich. Comp. Laws § 600.5714(1)(e) household-victim exclusion and Mich. Comp. Laws § 554.134(4) lease-clause condition. Rows: `edu-notice-to-quit-waiver-mi`, `edu-law-enforcement-cooperation-mi`.
  - Mich. Comp. Laws § 600.2918(3) exceptions. Rows: `edu-heating-mi`, `edu-no-security-devices-rule-mi`, `edu-utility-interruption-mi`, and the proposed `early-termination-mi`, whose abandonment ground now carries the good-faith, diligent-inquiry and unpaid-rent conditions.
  - Mich. Comp. Laws § 37.2503(1)(b) own-home exemption. Rows: `edu-protected-class-inquiry-ban-mi`, `edu-children-occupancy-mi`.
  - Mich. Comp. Laws § 460.1207(2) recording condition. Row: `meter-project-charge-disclosure-mi`.
  - FEDERAL: 25 U.S.C. § 415(h) tribal-lease exception. Row: `edu-no-communal-land-lease-approval-mi`.
  - Federal foreclosure-tenant conditions. Row: `edu-no-foreclosure-disclosure-mi`.
- **Overstated absences or scope:**
  - `edu-no-sex-offender-disclosure-mi` (Mich. Comp. Laws § 771.2a(8)).
  - `edu-no-student-housing-rule-mi` (Mich. Comp. Laws § 29.19a).
  - `edu-confirmed-absences-habitability-mi` (furniture deposits).
  - `edu-entity-landlord-court-representation-mi` (Mich. Comp. Laws § 445.1(4)(a)).
  - `edu-no-disaster-guest-rule-mi` (Mich. Comp. Laws § 213.326(1)).
  - `edu-no-senior-housing-work-card-mi` (Mich. Comp. Laws § 554.601a).
- **Clauses:**
  - `promised-repairs-mi`: a delay notice reset the agreed date (Mich. Comp. Laws § 554.633(1)(l)). Now a new date binds only on the tenant's written agreement.
  - `prohibited-acts-renter-mi`: "cause or allow" a hazard had no fault standard. It now reads "willfully or negligently cause".
- **Tags withdrawn under SOP rule 26,** each replaced by a Michigan clause that puts the condition in the text:
  - `fees-and-charges-vi` → `fees-and-charges-mi`: the fill-in blank now carries the bars in Mich. Comp. Laws § 554.633(1)(g) and (o).
  - `rent-installments-or` → `rent-installments-mi`: the rental period stays one month for notice under Mich. Comp. Laws § 554.134(1).
  - `furnishings-included-la` → `furnishings-included-mi`: a fault-based return standard.

The WARNs were mostly imprecise statements:
- Mich. Comp. Laws § 554.633(1)(o) stated only for leases with several payment methods. Every row that states it now covers single-method leases too.
- Truth in Renting Act remedies stated without the 20-day notice-and-cure step.
- Rule-type corrections (`edu-no-notice-service-fee-mi`, `edu-utility-deposit-return-mi`).
- Advance entry consent stated as settled. It is now uncertain everywhere, matching `edu-periodic-services-entry-mi`.
- `farmland-sporting-rights-mi` now asks the tenant's permission where the Housing Law applies.
- A new finding was filed on the existing row `edu-no-sex-offender-residency-mi`.

65 ids were edited after round 1 (`check/edited-after-R1.txt`), 3 of them new clauses.


**Round 2** covered only the 65 ids edited after round 1 (`check/R2-C1.jsonl`): 3 ERROR, 12 WARN, 50 OK.
- ERRORs: two fixes to the lockout exceptions (`edu-no-key-control-policy-mi`, `edu-no-smart-access-law-mi`) had shortened the abandonment test. Both now carry the full good-faith, diligent-inquiry, not-returning and unpaid-rent wording of Mich. Comp. Laws § 600.2918(3)(c). In `fees-and-charges-mi`, the deposit cap had lived only in the notes; the fill-in blank now says a listed refundable deposit is part of the Security Deposit under the 1 1/2-month cap (SOP rule 26).
- WARNs: fixes applied only in part, and stale notes. `rent-installments-mi` now has its fixed-term guidance in the bracket, and `edu-no-good-cause-notice-mi` now counts five limits. Notes were brought into line on student-housing fire drills, the accommodations tax and the translation status.
- All were fixed; the SOP allows at most two rounds, so no third round was run.

**Rows edited after the last round (round 2), not re-checked:** `edu-adverse-proceeding-notice-mi`, `edu-asbestos-hazards-mi`, `edu-fire-code-standard-mi`, `edu-law-enforcement-cooperation-mi`, `edu-no-good-cause-notice-mi`, `edu-no-key-control-policy-mi`, `edu-no-smart-access-law-mi`, `edu-no-student-housing-rule-mi`, `edu-no-subsidized-inspection-refusal-rule-mi`, `edu-no-translation-duty-mi`, `edu-rent-tax-mi`, `edu-utility-transfer-mi`, `fees-and-charges-mi`, `furnishings-included-mi`, `rent-installments-mi`. Each edit applies the checker's own wording or a narrower form of it, and each file passes the validator and the quote check.

### §6 Findings on existing rows

- `edu-no-rent-receipt-rule-mi`: Confirmed, no change needed (rule 19 [CA-gaps] general-obligations screen): Battery MIG-B2-026 (wr 11; givrec.ab 38; givrec.ba 31; givrec.and 52; payrec.ab 2; payrec.ba 1; payrec.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147)). No Michigan statute gives a debtor a general right to a receipt. The only receipt duties found bind others: a licensed collection agency may not commit 'Failing to give a debtor a written receipt for cash payment, or for any other payment if a receipt is specifically requested' (Mich. Comp. Laws § 339.915a(1)(l)); a retail installment holder owes the buyer receipts (Mich. Comp. Laws § 445.860); a nursing home owes a patient a written receipt (Mich. Comp. Laws § 333.21767). Optional wording Claude Code may add at sync, without a new research pass: "If a licensed collection agency collects rent for you, it must give the tenant a written receipt for a cash payment, or for any payment if the tenant asks."
- `edu-for-cause-eviction-mi`: edu-for-cause-eviction-mi lists Michigan's just-cause exceptions (local-government housing, mobile home parks, condominium conversion, retaliation) but omits a landlord requirement found in this pass: the Michigan State Housing Development Authority 'shall not provide assistance for housing under this chapter unless' (Mich. Comp. Laws § 125.1458d), for multifamily housing, 'the owner or manager agrees in writing not to evict a tenant without just cause, as defined in section 44a of 1933 (Ex Sess) PA 18, MCL 125.694a' (Mich. Comp. Laws § 125.1458d(a)). The row's words "Michigan has no general just-cause or good-cause eviction law for private rentals" stay true, but a privately owned, MSHDA-assisted multifamily building is a private rental with a just-cause undertaking. B4 states the rule in edu-no-good-cause-notice-mi and edu-owner-move-in-reservation-mi (other topics); a full proposed replacement row is filed as kind proposal. The existing notes also use a §§ list form ("§§ 600.5714(2)-(3), 600.5775") that the current citation rule would split; the proposal rewrites them.
- `edu-landlord-lien-mi`: edu-landlord-lien-mi says "Michigan has no statutory landlord's lien on a residential tenant's goods" (library text) and its notes record the absence as confirmed. That is too broad for a short furnished rental. The innkeeper's lien statute gives 'the keeper of any hotel, inn, boardinghouse, lodging house, bed and breakfast, or furnished apartment' who receives a 'tenant' 'a lien upon and right to detain the goods, baggage, and effects' of the tenant 'to secure and compel the payment of customary charges for the food and lodging furnished' (Mich. Comp. Laws § 427.201(1)), with sale after 3 months on published and served notice (Mich. Comp. Laws § 427.202, Mich. Comp. Laws § 427.203); 'Nothing contained in this act shall apply to leases for 2 months or more.' (Mich. Comp. Laws § 427.207). Found by Battery MIG-B5-006 (furn.ab 28; furn.ba 32; furn.and 61; furnunit 8; furndep 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147)) (furnunit and furn hits). How it fits with the bar on a lease term giving 'a security interest in any personal property of the tenant' 'except as specifically allowed by law' (Mich. Comp. Laws § 554.633(1)(h)) and with the unlawful-interference rule for 'Removal, retention, or destruction of personal property of the possessor' (Mich. Comp. Laws § 600.2918(2)(b)) is not settled by statute and no case was read (gaps log s4 class decision 8). Proposed narrow fix (rule 1: one row, named): replace the first sentence's second clause with "and, apart from the innkeepers' lien that a keeper of a furnished apartment let for less than 2 months may have on a tenant's goods for customary lodging charges, Michigan has no statutory landlord's lien on a residential tenant's goods; whether that lien can be used against a residential tenant without a court order is unsettled, so take advice before detaining anything." Add Mich. Comp. Laws § 427.201 and Mich. Comp. Laws § 427.207 to its notes.
- `edu-no-radon-disclosure-mi`: edu-no-radon-disclosure-mi says "the seller disclosure form for home sales mentions radon, but it does not apply to leases." That is too broad: the seller disclosure requirements 'apply to the transfer of any interest in real estate consisting of not less than 1 or more than 4 residential dwelling units, whether by sale, exchange, installment land contract, lease with an option to purchase, any other option to purchase, or ground lease coupled with proposed improvements by the purchaser or tenant' (Mich. Comp. Laws § 565.952), the statement must be delivered 'in the case of a lease together with an option to purchase' before the contract is executed (Mich. Comp. Laws § 565.954(1)(b)), and the form asks about 'asbestos, radon gas, formaldehyde, lead-based paint, fuel or chemical storage tanks and contaminated soil' (Mich. Comp. Laws § 565.957). Proposed body: "Michigan has no statute requiring a radon disclosure to tenants. The seller disclosure statement, which asks about radon, applies to sales and also to a lease with an option to purchase a property of 1 to 4 dwelling units, where it must be given before the lease is signed; it does not apply to an ordinary lease." Found in batch B6 while reading the act for the asbestos, chemical-warning, well and contamination topics; the B6 rows state the lease-option scope correctly (edu-asbestos-hazards-mi). The same defect was found independently in batch B3 (sex-offender-disclosure topic); the two findings are merged here.
- `edu-no-servicemember-statute-mi`: edu-no-servicemember-statute-mi lists only two covered leases ("A tenant who enters military service after signing, or who signs while in service and then receives permanent change of station orders or deployment orders for at least 90 days") and states the eviction rule without the court's stay power. The federal section, read from uscode.house.gov (current through Public Law 119-142) for B7, also covers a lease signed 'upon receipt of military orders for a permanent change of station or to deploy' and then blocked by a stop movement order 'effective for an indefinite period or for a period of not less than 30 days' (FEDERAL: 50 U.S.C. § 3955(b)(1)(C)), lets 'The spouse or dependent of the lessee' terminate 'during the one-year period beginning on the date of the death of the lessee' in service (FEDERAL: 50 U.S.C. § 3955(a)(3)), and covers a catastrophic injury or illness (FEDERAL: 50 U.S.C. § 3955(a)(4)); in an eviction the court 'may on its own motion and shall, if a request is made by or on behalf of a servicemember whose ability to pay the agreed rent is materially affected by military service' stay the proceedings 'for a period of 90 days' or adjust the lease (FEDERAL: 50 U.S.C. § 3951(b)(1)). Proposed body: "Michigan has no state statute letting servicemembers end residential leases; the federal Servicemembers Civil Relief Act applies. A tenant may end a residential lease by written notice with a copy of the military orders if the tenant entered military service after signing; signed while in service and then received permanent change of station orders or deployment orders for at least 90 days; or signed on receipt of such orders and then received a stop-movement order of at least 30 days or of indefinite length that prevents moving in. A spouse or dependent may end the lease within one year after the tenant dies in military service, and a tenant who suffers a catastrophic injury or illness in service (or the spouse or dependent, if the tenant lacks capacity) may do so within one year. For monthly rent, termination takes effect 30 days after the next rent due date after the notice is delivered (on delivery of the notice for a stop-movement lease); rent is prorated, and you may not charge an early termination fee. Federal law also bars evicting a servicemember or dependents during military service, except by court order, from a residence whose monthly rent does not exceed an inflation-adjusted cap (base $2,400), and the court may on its own, and must at the servicemember's request where military service materially affects the ability to pay, stay the case for 90 days or adjust the lease." Found in batch B7 while writing edu-statutory-early-termination-mi and edu-eviction-hardship-stay-mi, which state these points.
- `edu-towing-mi`: edu-towing-mi omits a landlord requirement on its own topic. It says only "Local ordinances may add signage or other requirements." But state law requires signs: an owner or lessor of private real property 'shall post a notice that meets all of the following requirements before authorizing the towing or removal of a vehicle from the real property without the consent of the owner or other person who is legally entitled to possess the vehicle' (Mich. Comp. Laws § 257.252k), with letters 'not less than 2 inches high' and the notice maintained 'for not less than 24 hours before a vehicle is towed or removed.' (Mich. Comp. Laws § 257.252k(b), (d)); it does not apply to 'Real property that is appurtenant to and obviously part of a single- or dual-family residence.' (Mich. Comp. Laws § 257.252l(a)) or where notice is personally given (Mich. Comp. Laws § 257.252l(b)). Proposed replacement row filed as a proposal (this batch). parking-vehicle-rules-mi needs no change: its towing sentence says removal "as Michigan law allows". Battery MIG-B8-016 (parkten.ab 9; parkten.ba 14; parkten.and 22; towten.ab 6; towten.ba 1; towten.and 10; noconsent 26 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 147)) found the sections (noconsent term).
- `edu-no-submetering-rule-mi`: edu-no-submetering-rule-mi overstates the absence. Its body says "Michigan has no statute, and nothing in the Public Service Commission's consumer-standards or electric technical-standards rules, on landlord submetering or reselling utilities to tenants." Three statutes bear on it: 'Only investor-owned, cooperative, or municipally owned electric utilities shall own, construct, or operate electric distribution facilities or electric meter equipment used in the distribution of electricity in this state.' (Mich. Comp. Laws § 460.10q(4)); a mobile home park may not charge 'for electric, fuel, or water service without the use of that service by a resident or tenant being first accurately and consistently measured, unless that service is included in the rental charge as an incident of tenancy.' (Mich. Comp. Laws § 125.2328(1)(e)); and a landlord's submeter falls outside the utility-meter exclusion, which applies only 'when any of these meters are regulated and tested as part of a public utilities system' (Mich. Comp. Laws § 290.602(y)). Proposed body: "Michigan has no statute that sets rules for landlord submetering or resale of utilities in ordinary rentals, and nothing in the Public Service Commission's consumer-standards or electric technical-standards rules addresses it. Several statutes still bear on it, and the cautious course is not to submeter electricity or gas: see edu-electric-submetering-mi." Its notes would add a pointer to edu-electric-submetering-mi (batch B8). Rule 1: no re-audit; the defect was met while answering electric-submetering-disclosure.
- `edu-utility-landlord-account-mi`: edu-utility-landlord-account-mi limits its shutoff rule to utilities the Public Service Commission regulates, and its notes say municipal utilities "are not covered by these rules". The same protection binds municipally owned electric and gas utilities by statute: a provider shall not shut off service because 'The customer has not paid for service at a premises occupied by another person.' (Mich. Comp. Laws § 460.9q(14)(b)), where 'provider' means 'a municipally owned electric or natural gas utility.' (Mich. Comp. Laws § 460.9q(23)(d)), with a fourth exception where the occupant refuses to put the account in the occupant's name. Proposed added sentence for the body: "Municipally owned electric and gas utilities are bound by the same rule by statute." Batch B8 rows edu-utility-interruption-mi and edu-utility-transfer-mi state it.
- `edu-no-foreclosure-tenant-rule-mi`: edu-no-foreclosure-tenant-rule-mi opens "Michigan has no statute giving residential tenants special protections when the landlord's property is foreclosed; federal law does." Two Michigan statutes give occupants notice in a foreclosure: in a mortgage foreclosure by advertisement, 'within 15 days after the first publication of the notice, a true copy shall be posted in a conspicuous place upon any part of the premises described in the notice' (Mich. Comp. Laws § 600.3208); in a property tax foreclosure the foreclosing unit must 'make a personal visit to each property forfeited to the county treasurer under section 78g to ascertain whether or not the property is occupied' and, if it is, 'verbally inform the occupant that the property will be foreclosed and the occupants will be required to vacate' or post a plain-English notice (Mich. Comp. Laws § 211.78i(3)); and remaining tax-sale proceeds claimed by a former owner who bought back or kept an interest 'must' be applied to 'any unpaid obligations payable to a tenant at the time the foreclosure was effective' (Mich. Comp. Laws § 211.78t). Proposed wording for the first sentence: "Apart from notice rules, Michigan has no statute giving residential tenants special protections when the landlord's property is foreclosed; federal law does. A mortgage foreclosure sale notice must be posted on the premises within 15 days after it is first published, and in a property tax foreclosure the foreclosing government must visit occupied property and personally serve or post notice telling occupants that the property will be foreclosed and they will have to vacate unless the taxes are paid (edu-no-foreclosure-disclosure-mi)." The rest of the row stands. Found while reading the hits of the foreclosure-disclosure battery (batch B9; see edu-no-foreclosure-disclosure-mi).
- `edu-no-sex-offender-residency-mi`: Minor wording (found by the independent check, round 1): the row says school-zone residency limits "appear only as conditions a court may set on probation"; for an individual placed on probation for a listed offense under subsection (7), 'the court shall order the individual not to do any of the following: (a) Reside within a student safety zone.' (Mich. Comp. Laws § 771.2a(8)), the area 'that lies 1,000 feet or less from school property' (Mich. Comp. Laws § 771.2a, definitions), with the exceptions in Mich. Comp. Laws § 771.2a(9). Proposed body: "Michigan has no statute limiting where registered sex offenders may live or barring you from renting to one; a court must order certain probationers convicted of a listed offense not to reside within 1,000 feet of school property, a condition that binds the probationer, not you."

**Proposed row `edu-for-cause-eviction-mi`** (Replacement for edu-for-cause-eviction-mi adding the MSHDA-assistance just-cause condition (Mich. Comp. Laws § 125.1458d(a)) and a voucher pointer; body otherwise unchanged; notes rewritten to the current citation form.)

- id: edu-for-cause-eviction-mi
- group: Default & Termination
- title: No General Just-Cause Eviction Rule
- states: MI
- is_active: TRUE
- supersedes: 
- bodyText: Michigan has no general just-cause or good-cause eviction law for private rentals: when a fixed term ends, or a periodic tenancy is ended by proper notice, you may recover possession without a reason. Exceptions: a tenant of housing operated by a local government unit or a mobile home park tenant may be evicted only for just cause; a tenant in a building being converted to a condominium may not be removed without cause for 120 days after the conversion notice or until the lease ends, whichever is longer; and a court will not enter possession where the termination was retaliation. If you receive Michigan State Housing Development Authority assistance for multifamily housing under the authority's housing assistance chapter, you must have agreed in writing not to evict a tenant without just cause, as the public housing law defines it (including a lease or rules violation, unlawful use of the unit, or keeping an unsafe, unsanitary or unhealthful condition); check your assistance documents. If your tenant has a federal Housing Choice Voucher, federal rules limit ending the tenancy during the lease term (`edu-no-good-cause-notice-mi`).
- rule_type: RECOMMENDED
- content_type: LANDLORD_EDUCATION
- verification_status: VERIFIED
- notes: MI: CONFIRMED ABSENT for private rentals (proposal of 2026-11-13, gaps batch B4, adds the MSHDA-assistance condition): 'the owner or manager agrees in writing not to evict a tenant without just cause, as defined in section 44a of 1933 (Ex Sess) PA 18, MCL 125.694a' (Mich. Comp. Laws § 125.1458d(a)), as a condition of assistance 'for housing under this chapter' (Mich. Comp. Laws § 125.1458d); just cause 'includes, but is not limited to' (Mich. Comp. Laws § 125.694a(2)) the three listed grounds. Existing citations kept: Mich. Comp. Laws §§ 600.5701-600.5759 and Mich. Comp. Laws §§ 554.131-554.139 read whole (2026-10-01); exceptions Mich. Comp. Laws § 600.5714(2), Mich. Comp. Laws § 600.5714(3), Mich. Comp. Laws § 600.5775 (mobile home parks, out of scope), Mich. Comp. Laws § 559.204(2); retaliation Mich. Comp. Laws § 600.5720. Voucher limits: FEDERAL: 24 C.F.R. § 982.310(a), (d)(2). Rule 41: verdict recorded under `for-cause-eviction`. Read section-open 2026-11-13 from the Legislative Service Bureau corpus (corpus-MI-20261112, verified against its manifest; chapter-page footer "Complete Through PA 114 of 2026"): Mich. Comp. Laws § 125.1458d, Mich. Comp. Laws § 125.694a read whole; whole code, Constitution, 2025-2026 act lists and enrolled 2026 acts searched by battery (gaps log s1, s3). Other sections as read in the 2026-10-01 MI pass (MI log s1, s17). MSHDA rules and assistance agreements not read.
- effective_from: 2026-11-13
- last_checked: 2026-11-13
- choice_group: 
- is_default: 
- topic_key: for-cause-eviction
- lease_clause_basis: 

**Proposed row `edu-towing-mi`** (Replacement text for edu-towing-mi adding the state sign rule (Mich. Comp. Laws § 257.252k, Mich. Comp. Laws § 257.252l); every other field unchanged except the dates and two notes repairs the validator requires (log pointers written "MI log s1, MI log s17"; the existing quote of Mich. Comp. Laws § 257.252a(10) given its citation). Found in batch B8 while answering parking-rules-notice.)

- id: edu-towing-mi
- group: Parking & Storage
- title: Towing From Rental Property
- states: MI
- is_active: TRUE
- supersedes: 
- bodyText: If a vehicle remains on private property without the owner's consent, the property owner may have it taken into custody as an abandoned vehicle by contacting a local towing agency (one whose storage lot is within 15 miles of the local unit's border); the towing agency must notify the police before removing it. That route does not cover a tenant's own vehicle parked under the lease: removing a tenant's property without a court order can be unlawful interference with possession. Before authorizing a tow of a vehicle without its owner's consent, the owner or lessor of the property must post a sign at each vehicle entrance (on property without curbs or barriers, at least 1 for each 100 feet of road frontage), in letters at least 2 inches high on a contrasting background, saying unauthorized vehicles will be towed at the owner's expense and naming the towing service and its phone number, permanently installed with its bottom at least 4 feet above the ground and kept up for at least 24 hours before a tow; the sign rule does not apply to property that is part of a single- or two-family home, or where the person in control of the vehicle is personally told the area is reserved and the vehicle may be towed. Local ordinances may add other requirements.
- rule_type: RECOMMENDED
- content_type: LANDLORD_EDUCATION
- verification_status: VERIFIED
- notes: MI: Mich. Comp. Laws § 257.252a(10)-(12) (read in context of the section); MI battery 78. Local ordinances flagged (rule 3). Signs (added 2026-11-13, gaps pass batch B8): an owner or lessor of private real property 'shall post a notice that meets all of the following requirements before authorizing the towing or removal of a vehicle from the real property without the consent of the owner or other person who is legally entitled to possess the vehicle' (Mich. Comp. Laws § 257.252k); exceptions in Mich. Comp. Laws § 257.252l(a)-(b); both read whole 2026-11-13 from the Legislative Service Bureau corpus (corpus-MI-20261112). A tenant's or occupant's own vehicle is not on the property 'without the consent of the property owner' (Mich. Comp. Laws § 257.252a(10)); removing it risks Mich. Comp. Laws § 600.2918(2)(b). Clause: parking-vehicle-rules-mi. Rule 15: written section-open. Read section-open 2026-10-01 in the built-in browser from legislature.mi.gov (Michigan Legislative Service Bureau; whole Michigan Compiled Laws and the 1963 Constitution loaded chapter by chapter, 43,930 sections, each chapter's count checked against its own HTML and the site's chapter indexes; compiled text includes 2026 Mich. Pub. Acts 102 and 103, eff. Sept. 21, 2026) (MI log s1, MI log s17).
- effective_from: 2026-11-13
- last_checked: 2026-11-13
- choice_group: 
- is_default: 
- topic_key: towing
- lease_clause_basis: 

**Proposed row `early-termination-mi`** (Item 9(a): Claude Code applies at sync (replaces the MI tag on `early-termination-ks`).)

- id: early-termination-mi
- group: Default & Termination
- title: Early Termination
- states: MI
- is_active: TRUE
- supersedes: early-termination-ks
- bodyText: Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay Landlord, by the termination date, an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. If Tenant gives that notice, pays the fee and delivers possession of the property by the termination date, Tenant owes no Rent for any period after the termination date. If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by Michigan law, including Landlord's duty to mitigate its damages. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or other periodic tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant has abandoned the property, meaning that current Rent is unpaid and Landlord, after diligent inquiry, believes in good faith that Tenant does not intend to return. Landlord will recover possession only through the courts or as Michigan law otherwise allows. No early termination fee applies when Tenant ends this Lease or is released from Rent under a right that law gives Tenant, including the senior-housing and infirmity termination right stated in this Lease, a release because of domestic violence, sexual assault or stalking, and a servicemember's right under the Servicemembers Civil Relief Act. Nothing in this Section limits any right either party has under applicable law, including Tenant's right to quit and owe no further Rent if the property becomes untenantable without Tenant's fault or neglect.
- rule_type: REQUIRED
- content_type: LEASE_CLAUSE
- verification_status: VERIFIED
- notes: MI: Present. Proposed override of `early-termination-ks` for Michigan (gaps prompt item 9(a)), a flat one-month fee as in `early-termination-ga`, `early-termination-pa`, `early-termination-al`, `early-termination-ut`, `early-termination-mo` and `early-termination-id`, replacing the greater-of formula, which late in a long term can exceed any reasonable forecast of loss. Penalty test: gaps log s4 class decision 2 (Curran v Williams, 352 Mich 278, 282 (1958); UAW-GM Human Resource Ctr v KSL Recreation Corp, 228 Mich App 486, 508 (1998); no published Michigan case applying the test to a residential lease fee was found in the 2026-10-01 MI closeout round). The tenant elects the option, so it is not acceleration on breach (Mich. Comp. Laws § 554.633(1)(i)), and it keeps the landlord's duty to mitigate, since a provision that 'Releases a party from a duty to mitigate damages.' is barred (Mich. Comp. Laws § 554.633(1)(k)). No fee on statutory exits: a rental agreement 'shall provide that a tenant who has occupied a rental unit for more than 13 months may terminate a lease by a 60-day written notice to the landlord' on eligibility for subsidized senior citizen housing or incapacity (Mich. Comp. Laws § 554.601a(1); `early-termination-senior-infirmity-mi`); a qualifying tenant 'shall be released from his or her rental payment obligation' (Mich. Comp. Laws § 554.601b(1); `edu-dv-release-mi`); FEDERAL: 50 U.S.C. § 3955 (servicemember lease termination). Casualty: Mich. Comp. Laws § 554.201. Read section-open 2026-11-13 from the Legislative Service Bureau corpus (corpus-MI-20261112, verified against its manifest; chapter-page footer "Complete Through PA 114 of 2026"): Mich. Comp. Laws § 554.633, Mich. Comp. Laws § 554.601a, Mich. Comp. Laws § 554.601b, Mich. Comp. Laws § 554.201 read whole; FEDERAL: 50 U.S.C. § 3955 read from uscode.house.gov (current through Public Law 119-142). Independent check R1 fix: the abandonment ground now carries the conditions of Mich. Comp. Laws § 600.2918(3)(c) (good faith, diligent inquiry, rent unpaid); the self-help rules 'may not be waived' (Mich. Comp. Laws § 600.2918(7)); no waiver of summary-proceedings rights (Mich. Comp. Laws § 554.633(1)(j)); abandoned-property-mi.
- effective_from: 2026-11-13
- last_checked: 2026-11-13
- choice_group: 
- is_default: 
- topic_key: early-termination
- lease_clause_basis: SERVES_LANDLORD

### §7 Findings for other states

None yet.

### Proposed SOP changes

1. **Brief helpers on held federal sources (rule 12).** The class-decision sheet first said eCFR was "fetch pending", so batch 2 queued two sections that were already held. Proposal: the gaps kickoff lists every held federal section by citation, together with the lookup call, before any helper starts.
2. **Verify existing-row ids before they go into a helper prompt (rule 26).** The main pass gave batch 5 two ids that don't exist (`edu-alarms-mi`, `edu-lead-paint-mi`). The helper caught it. Proposal: every row id named in a brief or addendum is checked against the master by script first.
3. **Settle one fault standard per state before canvassing.** Charge clauses ended up with two wordings: `tenant-caused-damage-mi`'s "deliberate, negligent or irresponsible" (batches 2 and 5) and the repair covenant's own "wilful or irresponsible conduct or lack of conduct" (batch 6). Both are defensible (gaps log s4). Proposal: class decisions name the wording every new charge clause uses.
4. **Check findings already filed.** Batches 3 and 6 filed the same defect on `edu-no-radon-disclosure-mi`, and the main pass merged them. Proposal: before filing a finding on an existing row, a helper greps the other batches' answer files for that row id.
5. **Validator handles section numbers with a capital letter.** The code-citation pattern missed § 712A.13a, so a batch 3 quote went unchecked. It now accepts `[0-9]+[A-Z]?\.[0-9]+`. Proposal: carry this into the shared validator for other states that use lettered chapters.
6. **Send product questions to a builder log, not to Taylor.** Helpers raised seven "questions for Taylor". Each was a legal or drafting call the main pass decided under rule 76, or a builder item recorded with a recommendation. Proposal: the helper brief tells helpers to file builder and setup questions as "Builder item:" decision objects from the start.

### Proposed topic questions

1. **Lease with an option to purchase (new topic).** In Michigan, a lease with an option to purchase a 1-4 unit home triggers the Seller Disclosure Act statement before signing (Mich. Comp. Laws § 565.952, Mich. Comp. Laws § 565.954). No topic asks whether a state attaches seller duties to lease-options. Proposal: add `lease-option-seller-duties` to the topic list, plus a builder warning when a purchase option is added.
2. **Environmental contamination notice (builder setup question).** `contamination-notice-mi` applies only where the landlord knows, or is on notice, that the parcel is a Part 201 facility or Part 213 site. Proposal: a yes/no setup question for every state whose contamination notice reaches leases.
3. **Utility type and mobile-home-lot flags (builder).** The Michigan apportionment and allowance clauses depend on the utility type (water, sewer, storm water and trash only) and are never used for a mobile home lot. The on-bill energy project charge needs a yes/no question. Proposal: add a utility-type picklist, a mobile-home-lot flag and the on-bill charge question to utility setup.
4. **Mutual release of insured losses (topic question).** Michigan permits a mutual release of insured losses (Mich. Comp. Laws § 554.633(1)(e)), but for the tenant it is a waiver that needs specific consent (Mich. Comp. Laws § 445.903(1)(t)). Proposal: add the question "does the state permit a mutual waiver of insured losses, and on what consent?" to `tenant-insurance-claims`, and build an initialed-consent field before any state offers one.
5. **Large-investor purchase limits (new topic).** 2026 Mich. Pub. Acts 32 bars large investors from buying single-family homes (Mich. Comp. Laws § 125.853, Mich. Comp. Laws § 125.857, Mich. Comp. Laws § 125.859). No topic covers portfolio-based acquisition limits. Proposal: add an `investor-acquisition-limits` question to `portfolio-thresholds`.
6. **Innkeeper and short-term furnished liens.** Michigan's innkeepers' lien reaches a furnished apartment rented for under 2 months (Mich. Comp. Laws § 427.201, Mich. Comp. Laws § 427.207). Proposal: add "does an innkeeper or boardinghouse lien reach short furnished rentals?" to the landlord-lien topic.

## Sync record (Claude Code, 2026-11-13)

- **Merge:** `merge-delta.py --base c947197`: 252 new rows and 15 shared rows tagged MI (267, matching the running record's final count and §2); library now 17,991 rows with `early-termination-mi`.
- **§6 applied (10 findings and 3 proposed rows):** override `early-termination-mi` (flat one-month fee; abandonment carries the good-faith, diligent-inquiry and unpaid-rent conditions of Mich. Comp. Laws § 600.2918(3)(c); no fee on the § 554.601a, § 554.601b or SCRA exits; `rule_type` RECOMMENDED, not the proposed REQUIRED, after Taylor's 2026-11-12 decision), with MI untagged from `early-termination-ks`; full replacements of `edu-for-cause-eviction-mi` (MSHDA-assistance just-cause condition, Mich. Comp. Laws § 125.1458d(a)) and `edu-towing-mi` (the sign rule, Mich. Comp. Laws §§ 257.252k-257.252l); narrow fixes to `edu-landlord-lien-mi` (innkeepers' lien for furnished apartments let under 2 months), `edu-no-radon-disclosure-mi` (lease-option scope), `edu-no-servicemember-statute-mi` (the other SCRA cases and the 90-day stay; "or another period justice requires" added from 50 U.S.C. § 3951(b)(1)), `edu-no-submetering-rule-mi`, `edu-utility-landlord-account-mi` (municipal utilities), `edu-no-foreclosure-tenant-rule-mi` (notice rules), `edu-no-sex-offender-residency-mi` (mandatory probation condition); the optional collection-agency receipt sentence added to `edu-no-rent-receipt-rule-mi`. Each was read against the corpus (or uscode.house.gov for the SCRA) before it was applied.
- **§7:** none.
- **Checks:** guards (`check-gap-discovery.py --all`, checklist reconciliation, clause basis, section pointers, `checkConfigIds.js`) pass. No duplicate ids or dangling `supersedes`; no other state's row changed except the 15 tags (Michigan segments only) and the one untagging. Michigan shows 435 active rows, all VERIFIED, and a row for all 364 topic keys. Backend tests 446/446.
- **Rule 80 re-check (the 15 rows edited after round 2 in §5, plus the 11 rows edited or added at sync):** 118 single-quoted passages (91 and 27) matched their sources: Michigan Compiled Laws in the corpus (corpus-MI-20261112), the Public Service Commission rules in the corpus's rules folder, 24 C.F.R. §§ 982.310, 982.404, 982.405, 982.551 and 40 C.F.R. § 61.145 on eCFR (2026-11-12), and 50 U.S.C. §§ 3951, 3955 on uscode.house.gov. No errors.
- **Statute spot-check (live):** Mich. Comp. Laws §§ 554.602, 554.609, 554.633, 600.5714 and 554.134 fetched from legislature.mi.gov on 2026-11-13 matched the corpus line for line, and read against the rows: the 1 1/2-month deposit cap (`edu-security-deposit-cap-mi`, `fees-and-charges-mi`); the 30-day notice of damages, 7-day tenant response and 10-day electronic-transfer rule (`security-deposit-return-mi`); the § 554.633(1)(o) no-fee payment method (`fees-and-charges-mi`, `tenant-portal-mi`); the 7-day demand for possession and 7-day notice to quit for nonpayment (`edu-nonpayment-notice-mi`); termination notice periods (`edu-termination-notice-mi`). No errors.
- **NEEDS_REVIEW:** none.
- **Citations:** 268 new lines (147 cited, 121 confirmed absent) and 11 updated. The legal watch now monitors 185 Michigan Compiled Laws sections (116 before; CITED and PARTIAL lines only), plus ten more eCFR checks (24 C.F.R. §§ 982.404, 982.405, 982.451, 982.551, 100.203, 5.2007; 28 C.F.R. § 36.104; 40 C.F.R. §§ 61.145, 745.107; 47 C.F.R. § 1.4000); the court-rule, administrative-rule and case-law reminders now name the gaps rows that rely on them. No federal-statute LegiScan checks were added (budget).
- **SOP 2.11:** all six proposals adopted as [Fwd] rules (12, 24, 26, 27). **Topic questions:** proposals 1, 4, 5 and 6 added; proposals 2 and 3 are builder setup questions and went to the backlog. No new `{{variables}}`.
- **Builder items (backlog, non-blocking):** utility setup (utility-type picklist, mobile-home-lot flag, on-bill energy project charge question); contamination-notice yes/no; a warning on any lease with an option to purchase; an initialed-consent field before any mutual release of insured losses is offered; guidance beside `pool_minimum_age` (§4).
