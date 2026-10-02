# Iowa — lease-clause decision log (state #29)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: Iowa Code ch. 562A (41 sections), ch. 648 and ch. 562 read whole from the whole Iowa Code 2026 loaded from legis.iowa.gov; each chapter's section index diffed against the IA rows and notes, every uncited section listed with a reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Iowa Department of Health and Human Services forms 470-3796 and 470-2350, Institutional Rental Property Agreements (Rev. 01/19), mapped paragraph by paragraph; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 78 scenarios, Claude-generated on the AZ §18.1 / MI §16 model plus Iowa-specific; rows added from it are named) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole Iowa Code 2026 (47,239 sections) and the Iowa Constitution (188 sections) loaded in the built-in browser and searched with 109 batteries; control term 0 hits in every battery; every absence pattern tested against known positives, failures rerun; relied-on hits read whole) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `IA` tag and an `IA:` note.

**Date:** 2026-10-02 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole Code and Constitution loaded into the browser gave full-text proof of absence and cross-chapter search directly (rule 9). (Claude cannot switch research mode on or off itself; only Taylor can.)
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`Iowa Code § 562A.12(3)(a)`, `Iowa Code §§ 562A.27, 562A.29A`, `2026 Iowa Acts ch. 1002, § 1`, `Iowa R. Civ. P. 1.305`, `Iowa Const. art. I, § 1A`, `Case v Name, 123 N.W.2d 456 (Iowa 1990)`, `42 U.S.C. § 4852d`, `40 C.F.R. § 745.113`), checked by script (§8). The kickoff defines no format for the Iowa Rules of Electronic Procedure and court records rules; rows write `Iowa Ct. R. 16.501` (flagged §10). Short forms such as '§ 562A.12' appear only in this log.
**Scope:** Iowa state law only. City rental inspection, registration and certification programs (Iowa Code § 364.17), local housing codes, Des Moines, Iowa City, Cedar Rapids and other local ordinances are flagged, not resolved (rule 3). State law preempts local rent control (§§ 364.3(9), 331.304(10)), local housing-choice-voucher mandates (§§ 364.3(16), 331.304(13)), local occupancy rules based on family relationships (§ 414.1(1)(b)), rental permit caps on single-family homes and duplexes (§ 414.1(1)(d)), local civil rights ordinances broader than ch. 216 (2026 Iowa Acts ch. 1002 and ch. 1200, § 40) and, from July 1, 2026, local ordinances on towing abandoned vehicles (2026 Iowa Acts ch. 1182, § 4). Deprioritized and named: manufactured home communities and mobile home parks (ch. 562B, ch. 555B, ch. 555C), farm tenancies (§§ 562.5-562.8), commercial leases, public housing agency rules.
**Input CSV:** `lease-clauses.csv`, **2,414 rows, 17 columns, 2,291 active (579 lease clauses, 1,712 education)**; active counts per state match the kickoff exactly (rule 23). No IA rows existed (rule 25). Nothing from an earlier Iowa pass was in the outputs folder; nothing to delete (rule 8). This is Iowa's only Desktop chat.
**Output CSV:** `lease-clauses-IA-delta.csv`, **153 rows, 17 columns, CRLF**: 50 existing rows with `IA` added to `states`, an `IA:` note appended and `last_checked` 2026-10-02, and 103 new IA rows. **IA 153 active: 70 lease clauses (50 tagged + 20 new), 83 education; all VERIFIED.** Merged with the master: 2,517 rows, 2,394 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole Iowa Code 2026 as parsed from the chapter XML (`ia-code-2026-corpus.json`, 1,870 chapters, 47,239 sections); chapters 562A and 648 also saved separately (`ia-562A.txt`, `ia-648.txt`); the Iowa Constitution (`ia-constitution-sections.json`, `ia-constitution-codified.txt`). **Session laws:** all 374 enrolled acts of the 2025 and 2026 sessions with the sections-amended tables (`ia-acts-2025-2026.json`); acts relied on read as enrolled with their effective dates (§1.2). **Court rules:** Iowa Court Rules ch. 3 (small claims forms), ch. 16 (electronic procedure, public access) and ch. 20 (court records), September 2026 publication. **Cases:** §1.4. **Read in battery context only (labelled so in the rows):** the hits named in §17. |
| Step B — tag first | **Done.** 50 existing rows tagged IA (§2.1), including the ks-oh-ca / ks-oh / ks-ne variants, `early-termination-ks`, `possession-delay-ca`, `tenant-forward-proceedings-ca`, and two single-state rows (`landlords-access-mi`, `parking-vehicle-rules-id`). 23 shared rows screened and not tagged (§2.2). All 508 single-state clauses screened as a triage (§2.3). No shared text edited. |
| Step E — new IA rows | 20 lease clauses (8 of them optional under rule 54) and 83 education rows; 27 education rows carry a CONFIRMED ABSENT search record (§3). |
| Rule 25 family | `security-deposit-return-ia` (REQUIRED; 30 days after the later of the end of the tenancy and receipt of the tenant's mailing address or delivery instructions; written statement of specific reasons; reversion after one year; § 562A.12(3)-(4)). |
| Step D screens | All run (§19). Hits: rule 42 (`returned-payments-ia` posting duty), rule 43 (`default-by-tenant-ia` carve-out), rule 45 (§ 554D.110(2): no e-mail termination notices), rule 47 (§ 562A.11(3) knowing-use penalty), rule 48 (§ 562A.15(3) separate writing), rule 49 (§ 562A.11(1)(c); `default-by-tenant`, `default-by-tenant-ks-ne` not tagged), rule 50 (choices made on purpose, §19), rule 52 (§ 562A.11(1)(d): exculpation void; variants used), rule 53 (`late-fee`, `returned-payments`, `holdover`, `holdover-ca`, `security-deposit-use`, `pet-policy`, `landlords-access`, `parking-vehicle-rules` overridden or replaced). Constitution: art. I, § 1A (arms), art. I, § 22 (aliens' property), art. I, § 24 (agricultural leases) recorded. |
| Optional clauses (rule 54) | 9 offered; 10 declined or barred, each with its reason and, where lawful, an education row (§6.1). |
| Questions to Taylor (rule 76) | One (§6.2): maintenance chores (snow and landscaping) and the separate § 562A.15(3) agreement. Answered. |
| Proof of absence | 27 education rows carry a CONFIRMED ABSENT record (battery, hit count, known-positive result); every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered, Barred or Not applicable (§18). Fourteen batteries recorded a failed known positive and four more were too broad; each is recorded, and every one a row relies on was rerun (§1.3). |
| Independent check | A separate agent checked all 153 rows against the saved sources in three rounds: 34 round-1 findings (2 ERROR, 12 FIX, 20 NOTE), all applied; round 2 re-checked the 37 rows edited (1 FIX, 3 NOTE, applied); round 3 re-checked the 4 rows edited after round 2 (no findings) (§13). |
| Corpus completeness | Every chapter's section elements compared with its own XML table of contents; complete apart from seven reserved-range or transfer labels (§1.3). |
| Currency | Iowa Code 2026 (compiled Dec. 2025; current through the 2025 session). 2026 session acts overlaid on every cited section from the official sections-amended report and read as enrolled; no 2025 or 2026 act amends ch. 562A or ch. 648 (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes and Constitution:** legis.iowa.gov (Iowa Legislative Services Agency). Each Code chapter is served as XML at `/docs/publications/ICC/2026/attachments/<ch>_slim.xml` (sections as `slim:Section`, a table of contents of section ids, history lines printed: 'HISTORY: [C79, 81, §562A.12]; ... 2014 Acts, ch 1026, §123') and as PDF and RTF at `/docs/code/2026/<ch>.pdf`. The Constitution is the codified PDF `/docs/publications/ICP/1518288.pdf`. **Channels:** neither the cloud shell nor the device shell can reach legis.iowa.gov (proxy 403); the built-in browser could. Chapters were loaded sequentially in one corpus tab, parsed in the browser, saved by the browser to the Downloads folder (Taylor approved saving `ia-*` files for this pass), staged into the workspace and hash-matched (browser SHA-256 = file SHA-256) before use. Downloads from background tabs sometimes landed under temporary GUID `.tmp` names; those were staged and hash-checked the same way.
- **Session laws:** enrolled acts at `/docs/publications/LGE/91/<bill>.pdf` (pdf.js text; underline and strike-through not preserved), the Code and Acts Sections Amended reports for the 91st General Assembly, 2025 and 2026 sessions, and the bill status pages for Acts chapter numbers (`sources/ia-acts-chapter-numbers.txt`: SF 418 = 2025 Iowa Acts ch. 1; SF 579 = 2026 Iowa Acts ch. 1002; SF 2472 = ch. 1115; HF 2617 = ch. 1182; HF 2800 = ch. 1200).
- **Court rules:** Iowa Court Rules, September 2026 publication, chapters 3, 16 and 20 (`ia-court-rules.json`).
- **Case law:** CourtListener opinion pages, read in the browser (§1.4).
- **Real lease:** Iowa HHS forms 470-3796 and 470-2350 (§15), saved as text and hash-matched.
- **Citation format:** the kickoff's; log references written 'IA log §N'.

### 1.2 Currency (rule 16)
- **Compiled text:** the chapter XML files carry Last-Modified Jul 10, 2026 but their content is the Iowa Code 2026 compilation (current through the 2025 session; 2026 acts not compiled): for example § 216.12(1)(e) still reads 'homestead tax credit under section 425.1', which 2026 Iowa Acts ch. 1115, § 126 changed. The PDF and RTF chapters carry Last-Modified Dec 10, 2025. History lines print 2025 acts (for example '2025 Acts, ch 1, §16' on § 216.8), so 2025 is compiled.
- **2025 and 2026 acts:** the sections-amended reports list no amendment to any section of ch. 562A or ch. 648 in either session, and a full-text keyword screen of all 374 enrolled acts (landlord, tenant, lease, rent, eviction, 562A, 648) found none. Every section cited in the IA rows (144 Iowa Code sections) was overlaid on the 2026 sections-amended report (rule 16; done after independent check round 1 found HF 2617, §13). 2026 amendments to cited sections, each read as enrolled: **§ 216.19** (2026 Iowa Acts ch. 1002 (SF 579), effective on enactment, signed Mar. 10, 2026: cities and local governments may not enact ordinances broader than or with different categories from ch. 216; § 216.19(1)(c) struck; local commissions optional) and **2026 Iowa Acts ch. 1200, § 40** (HF 2800, effective July 1, 2026: 'enact or enforce'); **§ 216.12(1)(e)** (ch. 1115, § 126, effective July 1, 2026: homestead 'credit or exemption under chapter 425, subchapter I'); **§ 10A.518(2)(b), (3)(b)** (ch. 1115, §§ 121-122, homestead wording only); **§§ 321.89, 321.90** (ch. 1182 (HF 2617), effective July 1, 2026: custody notice within ten days, twenty-day reclaiming period, personal-effects retrieval, fee display, preemption of local towing ordinances for abandoned vehicles). The other 2026 entries on cited sections touch subsections no row relies on (§§ 22.7, 232.68, 262.9, 364.3(23)-(24), 423.3, 425.1, 452A.40, 537A.10, 627.6(18), 714.16(2)(t)). pdf.js dropped strike-through and underline, so struck and new words were read from the doubled wording ('twenty ten days', 'ten-day twenty-day') and the compiled section; the effects stated in the rows follow from that reading (rule 16).
- **Effective-date clauses:** SF 579, § 6 ('This Act, being deemed of immediate importance, takes effect upon enactment'); SF 2472 division XX has a retroactive-applicability clause (§ 148, assessment years from Jan. 1, 2026) and no effective-date clause, so July 1, 2026 applies, matching the report; HF 2617 and HF 2800, § 40 carry no effective-date clause (July 1, 2026, matching the report).
- **Special sessions:** none in 2025 or 2026 (the most recent extraordinary session listed is 2023).
- **Revisory act:** no Code editor's or corrective act in 2026 touches a cited section (sections-amended report).
- **Bulk lag:** the XML content equals the Dec. 2025 compilation, so 2026 acts were overlaid as above rather than assumed compiled.
- **Real-lease probe:** the HHS forms (Rev. 01/19) cite '218.13' (moved from 213.18 in the 2019 revision) and the Iowa Uniform Residential Landlord and Tenant Act by name; no renumbering signal for ch. 562A.

### 1.3 Corpus and method (rule 19)
- **Loaded:** every chapter XML file in the 2026 Code (1,870 chapter files, sequentially, one corpus tab; 0 fetch errors; load took 1,074 seconds), 47,239 section elements, saved and hash-matched (`ia-code-2026-corpus.json`, 50,260,195 bytes). The Constitution (188 sections) was loaded before the first battery and searched as chapter 'CONST'.
- **Completeness:** each chapter's `slim:Section` elements were compared with its own table-of-contents section ids (28,492 TOC ids). 588 chapters have no sections (reserved or repealed). Seven chapters list TOC ids without section elements (214A, where § 214A.38 is present as '214a.38'; 452A; 459; 489; 501; 502; 535C, where § 535C.14 is labelled 533C.14), all reserved ranges or transfers; none landlord-relevant.
- **Engine:** Python regular expressions over each section's normalized text (curly quotes and dashes straightened), headings excluded and reported separately as heading-only hits, first match per section; an optional context filter (`req`) and chapter scope are recorded with each battery. Control term (battery 1): 0 hits; every battery records its control count (always 0). Calibration: 'security deposit' or 'rental deposit' 14 sections including § 562A.6 and § 562A.12 (battery 2).
- **Known positives:** every absence battery was run with real saved sections, synthetic statute-style sentences or both, in the same step. **Failures and reruns, all recorded:** 3 → 7 (rent control; 3 missed 'limitation on the amount of rent'); 8 → 21 (voucher; bare 'section 8' noisy, synthetic failed); 22 → 34 ('dies' matched 'remedies'); 23 → 35, 24 → 36, 26 → 37 (too broad); 32 → 38; 33 → 39 (positive § 562A.13 failed); 43 (statute of frauds; § 562A.10 positive failed; no absence rests on it); 48 → 80; 54 → 78 → 92 (stigmatized property); 57 → 79 (rental inspection); 62 → 95 and 63 → 96 → 98 (formatting; positives lacked 'lease' in the context filter); 72 → 77 → 91 (application of payments); 81 → 94 (Constitution, art. I, § 22 heading only); 85 → 97 → 99 → 109 (early termination; 99 kept 97's 200-character window, superseded by 109 with a section-wide filter, independent check round 1); 104 → 108 (lease blanks). Where every positive was synthetic and the battery returned 0, an everyday-word battery followed (73 → 76 'lock'; 90 → 93 'Spanish'; 102 → 106 whole ch. 124E; 103 → 107 'inspect').
- **Boundary:** the batteries searched the Iowa Code and Constitution. The court rules named in §1.1 and the cases in §1.4 were read for the questions the rows raise, not searched as whole bodies. Iowa Administrative Code rules (including the State Fire Marshal smoke-alarm placement rules), federal law beyond the provisions named, and local codes were not searched, and nothing is claimed about them.
- **Saved:** batteries 1-109 (`batteries/batteries.jsonl`, each with pattern, scope, context filter, positives and results, hits, heading-only hits and control count; `batteries/run-log.txt` with the snippets), the corpus, the acts, the court rules, the cases, the real lease, the registry. Every battery citation in the rows was generated from the saved log by the build script, which refuses to cite a battery whose positive failed (rule 19).

### 1.4 Section-open vs recall; case law (rule 15, rule 21)
Every row was drafted with the saved primary text open (each new row's notes say 'Rule 15: written section-open'); the recall subset is empty. Sections read only in battery context are labelled so in the rows.

**Case law** (opinions read whole and saved with SHA-256: `ia-cases.json`, `ia-cases-mimg.json`):

| Case | What it decides, as used | Rows |
|---|---|---|
| Butter v Midwest Property Management IC, LLC, ___ N.W.3d ___ (Iowa 2025) (No. 24-1752, filed Dec. 31, 2025, amended Jan. 6, 2026) | § 562A.12(8)'s fee award 'applies only to rental deposit disputes'; showings without notice and consent were common law trespasses; 'Consent is based on what the tenants' actions led the landlord to believe' | `edu-attorney-fees-ia`, `edu-deposit-return-penalty-ia`, `security-deposit-return-ia`, `edu-landlord-entry-ia`, `landlords-access-mi` (tag note) |
| MIMG CLXXII Retreat on 6th, LLC v Miller, 16 N.W.3d 489 (Iowa 2025); MIMG CLXXII Retreat on 6th, LLC v Williams (Iowa Jan. 24, 2025) (No. 23-0672, per curiam) | The CARES Act 30-day notice (15 U.S.C. § 9058(c)(1)) applies only to rent defaults that arose during the 2020 moratorium; the three-day notice under § 562A.27(2) 'aligns with Iowa law' | `edu-nonpayment-notice-ia` (rule 39 federal pre-filing check) |
| Seldin Co v Calabro, 702 N.W.2d 504 (Iowa Ct. App. 2005) | In a HUD-assisted tenancy, a notice demanding late fees barred by HUD rules, with payments applied to late fees first, did not support eviction; § 562A.27(3) fees only for willful noncompliance | `application-of-payments` (tag note), `edu-fees-as-rent-ia`, `edu-late-fee-cap-ia`, `edu-noncompliance-cure-ia`, `edu-attorney-fees-ia` |
| Hunter v City of Des Moines Municipal Housing Authority, 742 N.W.2d 578 (Iowa 2007); Porter v Harden (Iowa Ct. App. May 11, 2016) (No. 15-0683) | § 562A.34(3) notices used to end leases; neither decides whether a fixed term continues without notice | `edu-end-of-term-ia` |

Also read, not relied on: Rokusek v Jensen, 548 N.W.2d 570 (Iowa 1996) (a thirty-year lease and an attempted rent increase after a disputed termination; no general rule drawn); Lewis v Howard L. Allen Investments (Iowa 2021) (negligence). Symonds v Green, 493 N.W.2d 801 (Iowa 1992) is known only as quoted in Seldin and not relied on.

**Case-law questions and outcomes (rule 21):**
- Whether a written fixed term continues without a § 562A.34(3) notice, given § 562.6: **searched, none found** (CourtListener '"562A.34"', 8 results; '"longer than month-to-month" 562A', 0). Row states both statutes and tells landlords to serve notice.
- Reach of § 562A.12(8): **read and applied** (Butter).
- CARES Act notice: **read and applied** (MIMG v Miller, Williams).
- Late fees as rent for a three-day notice outside HUD tenancies; penalty doctrine for early-termination fees and holdover charges; enforceability of a contractual disposal procedure for abandoned property (conversion risk); a landlord casualty termination; lost-rent damages alongside the § 562A.25 exit; whether a crime is a 'remediable' breach under § 562A.27(1); reach of ch. 714H to residential leases; art. I, § 1A against a private landlord; interaction of § 562A.12(4) with ch. 556; interaction of § 562.2 with § 562A.34(4); whether a rent step in the original lease is an 'increase' under § 562A.13(5); whether a residential lease is an 'installment contract' under § 29A.102: **not searched**. Each row that depends on one says so.

**Federal law:** 42 U.S.C. § 4852d and 40 C.F.R. § 745.113 (lead, shared row) and 15 U.S.C. § 9058 (as quoted in MIMG v Miller) only; the Fair Housing Act, the Servicemembers Civil Relief Act, the Protecting Tenants at Foreclosure Act and HUD guidance were not read, and the rows say so.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged IA as written (50)
| Row | Iowa note (abridged) |
|---|---|
| `acceptable-payment-methods` | Applies as written. Iowa Code § 562A.9(3): rent is payable without demand or notice at the time and place agreed; no Iowa statute fixes accepted payment methods or bans a payment-method fee for residential rent (IA log §17). A unilateral right to change methods on written notice is a contract term allowed by Iowa Code § … |
| `addendum-precedence` | Applies as written. Iowa's required written disclosures (Iowa Code § 562A.13(1), (6); `landlord-disclosure-ia`, `superfund-disclosure-ia`) and the federal lead disclosure control under its 'required by law' exception. |
| `no-alterations` | Applies as written. Reasonable modifications for a person with a disability, at that person's expense, with a reasonable restoration condition for the interior, are preserved by its last sentence (Iowa Code § 216.8A(3)(c)(1)). |
| `appliances-included` | Applies as written. Landlord's duty to keep supplied appliances in good and safe working order is Iowa Code § 562A.15(1)(a)(4). |
| `application-of-payments` | Applies as written. No Iowa statute sets the order of applying a residential tenant's payment (IA battery 91: 7 hits, control 0; known positives passed: consumer-credit, banking and drainage-district sections; batteries 72 and 77 recorded as failed, rerun as 91). Applying payments to rent first is consistent with Seldin Co v … |
| `assigned-parking-space` | Applies as written; no Iowa statute limits reassigning a parking space (IA log §17). |
| `assistance-animal-accommodation` | Applies as written. Iowa Code § 216.8B: landlord evaluates and responds within a reasonable time; may request supporting information if the disability or need is not readily apparent (documentation from a licensee listed in Iowa Code § 216.8C(1)); an online registration is not sufficient (Iowa Code § 216.8B(4)); no request for … |
| `common-area-use` | Applies as written. No Iowa statute gives tenants a flag, sign or religious-display right against a private landlord (IA battery 26: 14 hits, control 0; known positives passed; IA battery 37: 18 hits, control 0; known positives passed: hits screened; none gives a tenant a display right against a landlord). |
| `no-disturbance` | Applies as written; mirrors the tenant duty in Iowa Code § 562A.17(7). |
| `due-at-signing` | Applies as written. Last month's rent paid at signing is prepaid rent, not a rental deposit (Iowa Code § 562A.6(12)), so it does not count toward the two-month deposit cap (Iowa Code § 562A.12(1)); a pet deposit does count (`edu-pet-deposit-ia`). |
| `early-termination-ks` | Applies as written (fixed-Term option only). No Iowa statute regulates a tenant-elected early termination fee; Iowa Code § 562A.29(3) mitigation applies only if the tenant abandons instead. Whether a court would treat the fee as a penalty was not researched (case law not searched; IA log §1.4). Statutory exits it preserves: … |
| `electronic-signatures` | Applies as written. Iowa Code § 554D.106(2): the electronic transactions act applies only where the parties agreed to conduct the transaction electronically; this clause is that agreement for signing. It is not consent to electronic service of notices (`electronic-notice-ia`; Iowa Code § 554D.110(2)). |
| `entire-agreement` | Applies as written. A rule adopted under Iowa Code § 562A.18 becomes part of the 'rental agreement' (Iowa Code § 562A.6(11)); its 'as applicable law permits' wording covers that. |
| `existing-condition` | Applies as written. The acknowledgment of condition does not waive the landlord's duties under Iowa Code § 562A.15, which a lease cannot waive (Iowa Code § 562A.11(1)(a)); the deposit standard is the condition at commencement of the tenancy (Iowa Code § 562A.12(3)(a)(2)). |
| `extended-absence-notice-ks` | Applies as written. Iowa Code § 562A.20 lets the rental agreement require notice of an anticipated extended absence 'not later than the first day of the extended absence'; Iowa Code § 562A.29(1) gives actual damages for a willful failure; Iowa Code § 562A.29(2) allows entry at reasonably necessary times during an absence of … |
| `fire-safety-grilling` | Applies as written; no Iowa statute gives tenants a grilling right (IA log §17). Local fire codes not read (rule 3). |
| `governing-law` | Applies as written. |
| `guest-policy` | Applies as written. Guest rules may not discriminate on the protected traits of guests (Iowa Code § 216.8(1)(d), which also lists age). |
| `guest-policy-day-limit` | Applies as written. See Iowa Code § 216.8(1)(d) on guests' protected traits. |
| `hoa-compliance` | Applies as written. Paying fines caused by Tenant's own violation is treated as damages for Tenant's breach (Iowa Code § 562A.27(3)), not an agreement to indemnify Landlord for Landlord's own liability under Iowa Code § 562A.11(1)(d). Recorded risk (independent check round 1): association fines are levied on the owner under the … |
| `inspection-rights` | Applies as written; inspection is a listed purpose for which the tenant may not unreasonably withhold consent (Iowa Code § 562A.19(1)), on 24 hours' notice at reasonable times (Iowa Code § 562A.19(3)). Its 'consistent with this Lease's Access & Entry terms' points to `landlords-access-mi` in Iowa, which keeps the tenant's … |
| `joint-liability` | Applies as written. |
| `keys` | Applies as written; the rekey charge is a cost of Tenant's own failure, not an attorney-fee or indemnity term barred by Iowa Code § 562A.11(1). |
| `landlords-access-mi` | Applies as written (tagged instead of the base `landlords-access`, independent check round 1). Iowa Code § 562A.19: tenant may not unreasonably withhold consent for listed purposes, including to inspect, repair and show the unit to purchasers, mortgagees and prospective tenants (1); entry without consent in an emergency (2); … |
| `landlord-maintenance` | Applies as written; Iowa duties are Iowa Code § 562A.15(1)(a) and cannot be waived (Iowa Code § 562A.11(1)(a)), see `edu-habitability-ia`. |
| `landscaping-irrigation` | TAYLOR'S DECISION (2026-10-02, IA log §6.2): tag for Iowa, binding only for a single family residence (Iowa Code § 562A.6(15)), where the landlord and tenant may agree in writing that the tenant performs specified maintenance tasks in good faith (Iowa Code § 562A.15(2)). For any other dwelling unit, use the separate signed … |
| `lead-based-paint` | Applies as written (federal: 42 U.S.C. § 4852d; 40 C.F.R. § 745.113). Iowa adds no lead disclosure for rentals (IA battery 17: 2 hits, both public-health program sections; known positive passed). |
| `notices` | Applies as written. Iowa Code § 562A.8 sets the methods for notices under ch. 562A (hand delivery, signed acknowledgment, personal service under Iowa R. Civ. P. 1.305, regular plus certified mail, posting on the primary entrance door, or any method resulting in actual receipt; mail complete four days after mailing); termination … |
| `parking-ks-oh-ca` | Applies as written; Iowa voids exculpation terms (Iowa Code § 562A.11(1)(d)), so the base `parking` disclaimer is not used. |
| `permitted-occupants` | Applies as written; occupancy limits may not be based on familial status (Iowa Code § 216.8(1)(a)-(b)); cities may not regulate occupancy by familial relationship (Iowa Code § 414.1(1)(b)). |
| `pet-insurance-requirement` | Applies as written; no Iowa statute bars a renter's insurance requirement for a residential tenant (IA battery 45: 3 hits, control 0; known positives passed: Iowa Code §§ 499A.22, 522A.3 and 562B.11 (mobile home parks only), none barring the requirement). It excludes assistance animals, consistent with Iowa Code § 216.8B(6)(b). |
| `possession-delay-ca` | Applies as written. Iowa Code § 562A.22(1): rent abates until possession is delivered; the tenant may terminate on at least five days' written notice and recover all prepaid rent and security, or demand performance. The clause promises no less. |
| `rent-payment` | Applies as written. Iowa Code § 562A.9(3): rent payable without demand or notice at the agreed time and place. 'Except as permitted by applicable law' preserves the tenant's statutory deductions (Iowa Code §§ 562A.23(1)(a), 562A.27(4), 10A.518(7)). |
| `rental-application-accuracy` | Applies as written; a material misstatement is a 'material noncompliance' handled under Iowa Code § 562A.27(1). |
| `residential-use-only` | Applies as written; Iowa Code § 562A.20 ('unless otherwise agreed, the tenant shall occupy the dwelling unit only as a dwelling unit'). |
| `services-utilities-provided-ks-oh` | Applies as written; the base clause's 'not liable' sentence is not used because Iowa voids exculpation (Iowa Code § 562A.11(1)(d)). |
| `severability` | Applies as written. It does not cure a prohibited term: a landlord who willfully uses a lease with a term known to be prohibited owes the tenant actual damages, plus up to three months' periodic rent, plus reasonable attorney fees (Iowa Code § 562A.11(3)). |
| `smoking-policy` | Applies as written. Iowa's medical cannabidiol act gives no housing protection (Iowa Code ch. 124E; IA log §17), and no Iowa statute protects smoking or vaping in a rental. |
| `snow-removal` | TAYLOR'S DECISION (2026-10-02, IA log §6.2): tag for Iowa, binding only for a single family residence (Iowa Code § 562A.6(15)) under Iowa Code § 562A.15(2). The clause excludes areas shared with other residents, which also fits Iowa Code § 562A.15(3)(b) (an agreement may not diminish the landlord's duty to other tenants) and … |
| `storage-space-ks-oh-ca` | Applies as written; Iowa voids exculpation (Iowa Code § 562A.11(1)(d)), so the base `storage-space` disclaimer is not used. |
| `no-sublet-assign` | Applies as written; no Iowa statute regulates consent to subletting or assignment of a residential lease (IA log §17). |
| `surrender-end-of-term-ks-ne` | Applies as written; it points to `abandoned-property-ia`, titled 'Handling of Property Left Behind'. On whether an Iowa fixed term ends without notice, see `edu-end-of-term-ia` (Iowa Code §§ 562.6, 562A.34(3)). |
| `tenant-forward-proceedings-ca` | Applies as written. Iowa Code § 562.3: paying rent or delivering possession to anyone but the lessor without the lessor's consent or a judgment is void as against the lessor. |
| `tenant-maintenance` | Applies as written. Iowa Code § 562A.17 qualifies cleanliness and safety 'as the condition of the premises permit'; the clause's carve-out for conditions the law requires Landlord to repair keeps it within Iowa Code § 562A.15 (cross-state flag on this omission: OK log §10). |
| `tenants-property-insurance-ks-oh-ca` | Applies as written; Iowa voids exculpation (Iowa Code § 562A.11(1)(d)), so the base disclaimer version is not used. No Iowa statute bars a renter's insurance requirement (IA battery 45). |
| `utilities-paid-by-landlord` | Applies as written. Where Landlord charges Tenant for utilities, Iowa Code § 562A.13(4) requires a full explanation before signing (`utility-charges-disclosure-ia`). |
| `utilities-responsibility` | Applies as written. On city utility liens and the landlord's written notice that the tenant is liable, see `edu-municipal-utility-lien-ia` (Iowa Code § 384.84(4)(d)-(e)). |
| `utility-payment-evidence` | Applies as written. |
| `utility-service-continuity` | Applies as written. |
| `parking-vehicle-rules-id` | Applies as written. Iowa: a vehicle unlawfully parked or placed without consent on private property for more than twenty-four hours is an 'abandoned vehicle' (Iowa Code § 321.89(1)(a)(3)); police may take it into custody, or the property owner may employ a private garagekeeper to take custody and dispose of it after the … |

### 2.2 Screened and not tagged (23)
| Row | Why not tagged for Iowa |
|---|---|
| `late-fee` | Flat fee against a per-day cap and a non-waiver sentence broader than § 562A.30 (rule 53); replaced by `late-fee-ia` |
| `returned-payments` | Ceiling-only fee wording; Iowa's $30 cap needs posting; replaced by `returned-payments-ia` |
| `security-deposit-use` | Grounds broader than § 562A.12(3)(a); replaced by `security-deposit-use-ia` |
| `security-deposit-return` | Blank-states parent; replaced by `security-deposit-return-ia` |
| `services-utilities-provided` | 'Landlord is not liable' sentence is exculpation, void (§ 562A.11(1)(d)); `services-utilities-provided-ks-oh` tagged |
| `landlords-access` | Unconditional 'right of reasonable access' on notice, without the consent framing of § 562A.19(1) (independent check round 1); `landlords-access-mi` tagged |
| `possession-delay` | Tenant must wait 30 days to terminate; § 562A.22(1)(a) allows five days' notice; `possession-delay-ca` tagged |
| `default-by-tenant` | Prevailing-party attorney-fee sentence is a prohibited term (§ 562A.11(1)(c)); replaced by `default-by-tenant-ia` |
| `surrender-end-of-term` | Points to a generic 'as permitted by law' disposal; `surrender-end-of-term-ks-ne` tagged (points to `abandoned-property-ia`) |
| `early-termination` | 10-day cure promise for any breach and landlord 30-day termination (rule 43); `early-termination-ks` tagged instead |
| `holdover` | 'maximum amount permitted by applicable law' states only a ceiling (rule 53); replaced by `holdover-ia` |
| `tenants-property-insurance` | 'not liable' disclaimer void (§ 562A.11(1)(d)); `tenants-property-insurance-ks-oh-ca` tagged |
| `pet-policy` | Indemnity (§ 562A.11(1)(d)) and entry to remove a pet beyond § 562A.19(4); replaced by `pet-policy-ia` |
| `parking` | 'not liable' disclaimer void (§ 562A.11(1)(d)); `parking-ks-oh-ca` tagged |
| `parking-vehicle-rules` | Tows for expired registration or inoperability beyond § 321.89; `parking-vehicle-rules-id` tagged |
| `storage-space` | 'not liable' disclaimer void (§ 562A.11(1)(d)); `storage-space-ks-oh-ca` tagged |
| `ev-charging-shared-area-co` | Colorado/Illinois EV statute; no Iowa EV right (`edu-no-ev-charging-rule-ia`) |
| `ev-charging-end-of-tenancy-co` | Colorado/Illinois EV statute; no Iowa EV right (`edu-no-ev-charging-rule-ia`) |
| `default-by-tenant-ks-ne` | 'reasonable costs and expenses' read as collection costs (rule 49); replaced by `default-by-tenant-ia` |
| `late-fee-ne` | Its non-waiver wording kept, but a flat fee does not fit the per-day cap; replaced by `late-fee-ia` |
| `holdover-ca` | Actual damages for any holdover; Iowa gives them only for a willful, bad-faith holdover (§ 562A.34(4)) (rule 53 trigger); replaced by `holdover-ia` |
| `surrender-end-of-term-mn-nd` | Points to a section title Iowa does not use; `surrender-end-of-term-ks-ne` tagged |
| `acceptable-payment-methods-nj` | New Jersey/Illinois non-EFT method requirement; Iowa has none; base `acceptable-payment-methods` tagged |

### 2.3 Single-state clauses screened (508), two tagged
Triage (rule 26): **508** active clauses tagged to one state. **237** name another state or its statute in the clause text (not taggable as written; their topics are answered in §18). The other **271** were read in full: **2 tagged** (`landlords-access-mi`, which carries Iowa's consent-not-unreasonably-withheld structure, § 562A.19(1); `parking-vehicle-rules-id`, which does not tow a tenant's authorized car for expired registration); **211** sit on a topic an IA row already answers with Iowa's own wording (for example `late-fee-*`, `security-deposit-return-*`, `holdover-rate-*`, `tenant-caused-damage-*`, `periodic-tenancy-notice-*`, `landlord-disclosure-*`, `rules-*`, `abandoned-property-*`, `assistance-animal-accommodation-*`, `smoke-detector*`); **58** rest on a feature of their own state's law with no Iowa counterpart (for example `deposit-last-month-rent-mn`, `fee-in-lieu-of-deposit-fl`, `periodic-services-entry-sc`, `window-guard-notice-nj`, `tpa-exemption-notice-ca`, `smoke-drift-waiver-ut`, `eviction-service-party-tn`, `tenant-notice-of-adverse-proceeding-nd`); their topics are answered in §18.2. Closest single-state candidates considered and not tagged: `landlord-disclosure-mo` (same URLTA wording as § 562A.13(1), but its basis names Missouri's statute, so `landlord-disclosure-ia` was written); `periodic-tenancy-notice-tn` (same periods as § 562A.34(1)-(2), basis is Tennessee's; `periodic-tenancy-notice-ia` written); `landlord-self-cure-tn` (14 days and 'workmanlike' against Iowa's 7 days and 'competent manner'); `rules-ok` (Oklahoma's purposes add 'peace'); `tenant-caused-damage-tn` (no-abatement term would waive § 562A.25). Lists: `work/triage-step1.json`, `work/triage-final.json`.

## 3. New IA rows

### 3.1 New IA lease clauses (20)
| Row | rule_type | Basis | Topic | Main citation |
|---|---|---|---|---|
| `landlord-disclosure-ia` | REQUIRED | REQUIRED_DISCLOSURE: Iowa Code § 562A.13(1) | owner-identity-disclosure | § 562A.13(1); § 562A.13(2); § 562A.13(3) |
| `superfund-disclosure-ia` | CONDITIONAL | REQUIRED_DISCLOSURE: Iowa Code § 562A.13(6) | hazardous-contamination-disclosure | § 562A.13(6) |
| `utility-charges-disclosure-ia` | CONDITIONAL | SERVES_LANDLORD | utility-submetering-disclosure | § 562A.13(4); § 562A.13; § 562B.14 |
| `late-fee-ia` | CONSTRAINED | CONSTRAINED_TERM | late-fee | § 562A.9(4); § 562A.30(1); § 562A.30(2) |
| `returned-payments-ia` | CONSTRAINED | CONSTRAINED_TERM | returned-payments | § 554.3512(1); § 554.4403 |
| `default-by-tenant-ia` | REQUIRED | SERVES_LANDLORD | default-by-tenant | § 562A.27(2); § 562A.27(1); § 562A.17 |
| `security-deposit-use-ia` | REQUIRED/PROHIBITED | CONSTRAINED_TERM | security-deposit-use | § 562A.12(1); § 562A.12(2); § 562A.12(3)(a)(1) |
| `security-deposit-return-ia` | REQUIRED | SERVES_LANDLORD | security-deposit-return | § 562A.12(3)(a); § 562A.12(4); § 562A.12(7) |
| `pet-policy-ia` | RECOMMENDED | SERVES_LANDLORD | pet-policy | § 562A.6(12); § 562A.12(1); § 562A.12 |
| `holdover-ia` | RECOMMENDED | SERVES_LANDLORD | holdover | § 562A.34(4); § 562A.9(5); § 562A.34(1) |
| `abandoned-property-ia` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | § 555B.1(5); § 555C.1; §§ 321.89 |
| `maintenance-allocation-ia` | CONDITIONAL | SERVES_LANDLORD | tenant-repair-agreement | § 562A.15(4); § 562A.15(2); § 562A.15(3) |
| `casualty-termination-ia` | CONDITIONAL | SERVES_LANDLORD | casualty-termination | § 562A.25; § 562A.25(2); § 562A.9(1) |
| `tenant-caused-damage-ia` | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage | § 562A.21(1)(c); § 562A.23(3); § 562A.36(3)(a) |
| `smoke-alarm-battery-ia` | CONDITIONAL | SERVES_LANDLORD | alarm-duties | § 10A.518(7); § 10A.518(8); § 10A.518(2)(b) |
| `rules-ia` | CONDITIONAL | SERVES_LANDLORD | rules-regulations | § 562A.18(1); § 562A.18(2); § 562A.6(11) |
| `electronic-notice-ia` | CONDITIONAL | SERVES_LANDLORD | notice-delivery-methods | § 562A.8(1)(a)(6); § 562A.8; § 562A.29A |
| `landlord-self-cure-ia` | CONDITIONAL | SERVES_LANDLORD | landlord-self-cure | § 562A.28; § 562A.17; § 562A.19(4) |
| `periodic-tenancy-notice-ia` | CONSTRAINED | CONSTRAINED_TERM | termination-notice | § 562A.34(1); § 562A.34(2); § 562A.29A(1) |
| `criminal-activity-ia` | CONDITIONAL | SERVES_LANDLORD | criminal-activity | § 562A.27A(1); § 562A.27A(3); § 562A.27A(2)(b) |

### 3.2 New IA education rows (83)
| Row | rule_type | Topic | Main citation or absence record |
|---|---|---|---|
| `edu-late-fee-cap-ia` | CONSTRAINED | late-fee | § 562A.9(4); § 562A.30(1); § 562A.6(10) |
| `edu-fees-as-rent-ia` | RECOMMENDED | fees-as-rent | § 562A.6(10); § 562A.27(2) |
| `edu-rent-increase-notice-ia` | REQUIRED | rent-increase-notice | § 562A.13(5); § 562A.36(1); § 425.35 |
| `edu-rent-control-ia` | RECOMMENDED | rent-control | § 364.3(9); § 331.304(10) |
| `edu-dishonored-check-ia` | CONSTRAINED | returned-payments | § 554.3512(1); § 554.4403; § 554.3512 |
| `edu-no-application-fee-rule-ia` | RECOMMENDED | application-fees | CONFIRMED ABSENT (IA battery 6) |
| `edu-no-fee-transparency-rule-ia` | RECOMMENDED | fee-transparency | CONFIRMED ABSENT (IA battery 71); § 562A.13(4) |
| `edu-no-rent-receipt-rule-ia` | RECOMMENDED | rent-receipts | CONFIRMED ABSENT (IA battery 50); § 322G.4; § 562A.2; § 562B.12 |
| `edu-no-algorithmic-rent-rule-ia` | RECOMMENDED | algorithmic-rent-setting | CONFIRMED ABSENT (IA battery 70); § 515.103; § 554G.1 |
| `edu-legal-interest-ia` | RECOMMENDED | unpaid-damages-interest | § 535.2(1); § 535.2(3)(a); §§ 535.2 |
| `edu-deposit-cap-ia` | CONSTRAINED | security-deposit-cap | § 562A.12(1); § 562A.6(12); § 627.6(15) |
| `edu-deposit-holding-ia` | REQUIRED | security-deposit-holding | § 562A.12(2) |
| `edu-deposit-interest-ia` | RECOMMENDED | security-deposit-interest | § 562A.12(2); §§ 562A.12 |
| `edu-deposit-return-penalty-ia` | PROHIBITED | security-deposit-penalty | § 562A.12(3)(b); § 562A.12(8) |
| `edu-deposit-reversion-ia` | RECOMMENDED | deposit-escheat | § 562A.12(4); § 556.1(13)(a)(2); § 556.9(1)(a) |
| `edu-deposit-on-sale-ia` | REQUIRED | security-deposit-on-sale | § 562A.12(5) |
| `edu-pet-deposit-ia` | CONSTRAINED | pet-fees | §§ 562A.6(10); § 216.8B(6)(b) |
| `edu-no-holding-deposit-rule-ia` | RECOMMENDED | holding-deposit | CONFIRMED ABSENT (IA battery 86); § 543B.7; § 562A.6(12) |
| `edu-nonpayment-notice-ia` | REQUIRED | nonpayment-notice | § 562A.27(2); § 562A.29A(1); § 648.3(1) |
| `edu-noncompliance-cure-ia` | REQUIRED | cure-and-eviction-grounds | § 562A.27(1); § 562A.29A; § 562A.17 |
| `edu-clear-present-danger-ia` | REQUIRED | expedited-criminal-eviction | § 562A.27A(1); § 562A.27A(2)(b); § 562A.29A(1) |
| `edu-emergency-assistance-ia` | PROHIBITED | emergency-assistance-right | § 562A.27B(1)(a); § 562A.27B(2) |
| `edu-eviction-process-ia` | RECOMMENDED | eviction-process | §§ 648.1; §§ 631.1(2) |
| `edu-self-help-eviction-ia` | PROHIBITED | self-help-eviction | § 562A.33; § 562A.26; § 562A.31(2) |
| `edu-for-cause-eviction-ia` | RECOMMENDED | for-cause-eviction | CONFIRMED ABSENT (IA battery 100); §§ 322F.3; § 562A.36; § 562A.27B |
| `edu-end-of-term-ia` | RECOMMENDED | termination-notice | § 562.6; § 562A.34(3); § 562A.29A(1) |
| `edu-holdover-ia` | RECOMMENDED | holdover | § 562A.34(4); § 562.2; §§ 562.2 |
| `edu-holdover-rate-ia` | RECOMMENDED | holdover-rate | § 562A.34(4); § 562.2 |
| `edu-waiver-by-acceptance-ia` | RECOMMENDED | waiver-by-acceptance | § 562A.30(1); § 562A.8; § 562A.11(1)(a) |
| `edu-abandonment-mitigation-ia` | RECOMMENDED | abandonment-and-mitigation | § 562A.29(2); § 562A.4(1); § 562B.27 |
| `edu-casualty-ia` | RECOMMENDED | casualty-termination | § 562A.25(1) |
| `edu-tenant-caused-damage-ia` | RECOMMENDED | tenant-caused-damage | § 562A.17(6); § 562A.27(3); § 562A.21(1)(c) |
| `edu-no-dv-termination-ia` | RECOMMENDED | dv-lease-termination | CONFIRMED ABSENT (IA battery 20); §§ 235F.6; §§ 29A.101; §§ 562A.27A(3) |
| `edu-dv-eviction-protection-ia` | PROHIBITED | dv-eviction-protection | § 562A.27A(3)(a); § 562A.27B |
| `edu-no-tenant-death-rule-ia` | RECOMMENDED | tenant-death | CONFIRMED ABSENT (IA battery 34); § 562.9; § 562A.12; § 562A.33 |
| `edu-servicemember-ia` | REQUIRED | servicemember-rights | § 29A.101A(1); § 29A.101(1); § 29A.100 |
| `edu-retaliation-ia` | PROHIBITED | retaliation | § 562A.36(1); § 562A.36(2); § 425.35 |
| `edu-landlord-lien-ia` | PROHIBITED | landlord-lien | § 562A.31(1); § 555B.2 |
| `edu-no-post-eviction-property-rule-ia` | RECOMMENDED | post-eviction-property | CONFIRMED ABSENT (IA battery 35); §§ 321.89; § 555B.1(5); § 555C.1 |
| `edu-no-eviction-sealing-ia` | RECOMMENDED | eviction-record-sealing | CONFIRMED ABSENT (IA battery 28) |
| `edu-no-squatter-statute-ia` | RECOMMENDED | unauthorized-occupant-removal | CONFIRMED ABSENT (IA battery 59); §§ 316.1; § 648.1(1); § 648.3(1) |
| `edu-tenant-repair-remedies-ia` | RECOMMENDED | tenant-repair-remedies | §§ 562A.21; §§ 562A.21(1)(c) |
| `edu-prohibited-terms-ia` | PROHIBITED | prohibited-lease-terms | § 562A.11(1) |
| `edu-attorney-fees-ia` | PROHIBITED | attorney-fees | § 562A.11(1)(c); §§ 562A.11(3); § 562A.12(8) |
| `edu-unconscionability-ia` | RECOMMENDED | unconscionability | § 562A.7(1) |
| `edu-scope-ia` | RECOMMENDED | scope | § 562A.5(1); § 562A.37; § 562A.11(1)(a) |
| `edu-consumer-protection-ia` | RECOMMENDED | consumer-protection-act | § 714.16(1)(e); § 714.16(2)(a); § 714H.2(4) |
| `edu-statute-of-frauds-ia` | RECOMMENDED | statute-of-frauds-lease-term | § 622.32(3); § 562A.10(1); § 562A.10 |
| `edu-lease-copy-ia` | RECOMMENDED | lease-copy | CONFIRMED ABSENT (IA battery 51); § 562B.14(5); § 562A.10; § 562A.13(1) |
| `edu-no-lease-completeness-rule-ia` | RECOMMENDED | lease-completeness | CONFIRMED ABSENT (IA battery 108); § 516D.4 |
| `edu-notice-service-ia` | REQUIRED | notice-delivery-methods | § 562A.8(1); § 562A.29A(1); § 648.3(2) |
| `edu-habitability-ia` | REQUIRED | landlord-maintenance | § 562A.15(1)(a)(1); § 562A.11(1)(a); § 562A.6(15) |
| `edu-landlord-entry-ia` | REQUIRED | landlord-entry | § 562A.19(1); § 562A.28; § 562A.29(2) |
| `edu-sale-management-change-ia` | RECOMMENDED | sale-or-management-change | § 562A.16(1); § 562A.13(2); § 562A.12(5) |
| `edu-rental-inspection-ia` | RECOMMENDED | rental-inspection | § 364.17(1) |
| `edu-municipal-utility-lien-ia` | RECOMMENDED | municipal-utility-lien | § 384.84(3)(c) |
| `edu-alarm-duties-ia` | REQUIRED | alarm-duties | § 10A.518(2)(b); § 10A.518(5) |
| `edu-no-security-device-rule-ia` | RECOMMENDED | security-devices | CONFIRMED ABSENT (IA battery 73) |
| `edu-no-mold-disclosure-ia` | RECOMMENDED | mold-disclosure | CONFIRMED ABSENT (IA battery 13); § 423.3; §§ 22.7; § 562A.15(1)(a)(2) |
| `edu-no-bed-bug-rule-ia` | RECOMMENDED | bed-bug-disclosure | CONFIRMED ABSENT (IA battery 14); § 138.13; § 562A.15(1)(a)(2) |
| `edu-radon-ia` | RECOMMENDED | radon-disclosure | § 136B.2(1)(b); § 558A.4(2) |
| `edu-no-meth-disclosure-ia` | RECOMMENDED | meth-disclosure | CONFIRMED ABSENT (IA battery 15); § 124C.1(6); § 124C.3 |
| `edu-no-flood-disclosure-ia` | RECOMMENDED | flood-disclosure | CONFIRMED ABSENT (IA battery 16); § 578A.10 |
| `edu-no-stigmatized-property-rule-ia` | RECOMMENDED | stigmatized-property | CONFIRMED ABSENT (IA battery 92) |
| `edu-superfund-ia` | REQUIRED | hazardous-contamination-disclosure | § 562A.13(6) |
| `edu-no-ev-charging-rule-ia` | RECOMMENDED | ev-charging | CONFIRMED ABSENT (IA battery 27); §§ 215.1A |
| `edu-towing-ia` | RECOMMENDED | towing | § 321.89(1)(a)(3); § 321.90; § 321.89(3)(a) |
| `edu-fair-housing-ia` | PROHIBITED | fair-housing | §§ 216.8(1)(a); § 216.12(1)(a); § 216.12(1)(e) |
| `edu-assistance-animals-ia` | REQUIRED | assistance-animal-accommodation | § 216.8B(1); § 216.8C(1); §§ 216.8B(9) |
| `edu-source-of-income-ia` | RECOMMENDED | source-of-income | CONFIRMED ABSENT (IA battery 21); § 364.3(16); § 331.304(13) |
| `edu-firearms-ia` | RECOMMENDED | firearms | § 562A.11(2); § 562A.16(3); § 562A.27A(2)(b) |
| `edu-cannabis-ia` | RECOMMENDED | cannabis | § 124E.17; § 124E.23 |
| `edu-no-immigration-rule-ia` | RECOMMENDED | immigration-status | CONFIRMED ABSENT (IA battery 48); §§ 232.68; § 216.8(1) |
| `edu-foreign-ownership-ia` | RECOMMENDED | foreign-ownership | § 9I.3(1) |
| `edu-sex-offender-ia` | RECOMMENDED | sex-offender-occupancy | § 692A.114(1) |
| `edu-tenant-screening-ia` | RECOMMENDED | tenant-screening | CONFIRMED ABSENT (IA battery 74); §§ 22.7 |
| `edu-no-camera-rule-ia` | RECOMMENDED | tenant-security-cameras | CONFIRMED ABSENT (IA battery 55); § 22.7 |
| `edu-conversion-ia` | RECOMMENDED | conversion-notice | CONFIRMED ABSENT (IA battery 30); §§ 499B.3; § 499B.3(2); § 499B.20 |
| `edu-no-foreclosure-tenant-rule-ia` | RECOMMENDED | foreclosure | CONFIRMED ABSENT (IA battery 29); § 648.1(4) |
| `edu-jury-waiver-ia` | RECOMMENDED | jury-waiver | § 648.5(1)(a); § 562A.11(1)(a) |
| `edu-service-animal-misrepresentation-ia` | RECOMMENDED | service-animal-misrepresentation | § 216C.11(3)(a); § 216.8B(4) |
| `edu-service-animal-denial-penalty-ia` | PROHIBITED | service-animal-denial-penalty | § 216C.5; § 216C.10(1); § 216C.7 |
| `edu-no-move-in-inspection-rule-ia` | RECOMMENDED | condition-inspection | CONFIRMED ABSENT (IA battery 103); § 562A.19; § 562B.20; § 562A.12(3)(a)(2) |

## 4. Layout and placement (rule 40)
Formatting batteries ran in Step C before drafting (61, 95 (rerun of 62), 98 (rerun of 63 and 96)), across the whole Code with a tenancy context filter. **No Iowa statute sets a type size, boldface, capital-letter or first-page rule for a residential lease or for any text every rental agreement must contain**; the hits are vehicle rental agreements (§ 516D.4), consumer leases of goods (§ 537.3606), subdivided land (§ 543C.2-543C.3), business opportunities (§ 551A.3) and foreclosure consultants (§ 714F.3). No two placement rules compete, so nothing went to Taylor (rule 40).

| Rule | Text | Where it lives | Library handling |
|---|---|---|---|
| Iowa Code § 562A.13(1)-(2) | Manager and owner or agent names and addresses 'in writing at or before the commencement of the tenancy', kept current | Lease is the vehicle; no format | `landlord-disclosure-ia` (REQUIRED) |
| Iowa Code § 562A.13(6) | CERCLIS listing 'in writing before the commencement of the tenancy' | Lease or a separate writing; no format | `superfund-disclosure-ia` (CONDITIONAL) |
| Iowa Code § 562A.13(4) | Explain utility rates before signing (writing not required) | Any form | `utility-charges-disclosure-ia` records it |
| Iowa Code § 562A.13(5) | Rent increase: written notice 30 days before effect | Separate notice | `edu-rent-increase-notice-ia` |
| Iowa Code § 562A.15(3)-(4) | Tenant repairs and chores in a non-single-family unit only by a 'separate writing signed by the parties', with consideration; not a condition of the lease | Separate document (rule 48) | `maintenance-allocation-ia` |
| Iowa Code § 562A.18(1) | Rules enforceable only if written | Lease attachment or later written notice | `rules-ia` |
| Iowa Code § 562A.27A(1) | Clear-and-present-danger notice must state the activity and 'set forth the language of subsection 3' | Termination notice, not the lease | `edu-clear-present-danger-ia` |
| Iowa Code § 562A.12(6) | Successor's notice of deposit transferred must contain a stamped envelope addressed to the successor | Notice | `edu-deposit-on-sale-ia` |
| Iowa Code § 554.3512(2) | Returned-check surcharge only if 'clearly and conspicuously' posted at the usual place of payment or in the billing statement | Posting or billing statement (the lease alone may not suffice) | `returned-payments-ia` commits to posting |
| Iowa Code § 216.8B(6)(e) | Written determination of an assistance-animal request | Separate writing | `edu-assistance-animals-ia` |

**Omission sanctions that forfeit money:** § 562A.12(4) (no written deposit statement within 30 days forfeits the right to withhold any part); § 554.3512(2) (no posting, no surcharge); § 562A.13(3) (failure to disclose makes the person an agent for service and for the landlord's obligations, including spending rent collected). None requires a lease statement in a set form.

## 5. Dormant rows resolved (rule 25)
None: the kickoff lists no Iowa rows, dormant or active, and the CSV has none.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
| Option | Iowa law | Verdict |
|---|---|---|
| Landlord casualty termination | No statute gives or bars it; terms not prohibited by ch. 562A or other law allowed (§ 562A.9(1)) | Offered, narrow: `casualty-termination-ia` |
| Tenant-caused damage (54t) | §§ 562A.21(1)(c), 562A.23(3), 562A.36(3)(a) have a tenant-fault exception; § 562A.25 does not | Offered without a no-abatement term: `tenant-caused-damage-ia`; education `edu-tenant-caused-damage-ia` |
| Crime-free / criminal activity clause | § 562A.27A covers clear-and-present danger by statute; other crimes become breaches only by lease term | Offered: `criminal-activity-ia` |
| Landlord self-cure billed as rent | § 562A.28 (seven days) | Offered (restating a landlord right): `landlord-self-cure-ia` |
| Tenant supplies alarm batteries | § 10A.518(7) ('may require') | Offered: `smoke-alarm-battery-ia` |
| Extended-absence notice | § 562A.20 ('The rental agreement may require') | Offered: `extended-absence-notice-ks` tagged |
| Rules adopted by the landlord | § 562A.18 | Offered: `rules-ia` |
| E-mail notices | § 562A.8(1)(a)(6); ch. 554D | Offered, limited: `electronic-notice-ia` |
| Tenant maintenance agreement | § 562A.15(2)-(4) | Offered: `maintenance-allocation-ia` (Taylor §6.2) |
| Holdover charge (stipulated daily rate) | Statutory measures cover only willful holdovers (§ 562A.34(4)) and holdovers after notice to quit (§ 562.2); gap filled by daily rental value | Lawful, not offered: `edu-holdover-rate-ia`; `holdover-ia` sets the daily rental value |
| Contract interest rate | § 535.2(1), (3) | Lawful, not offered: `edu-legal-interest-ia` |
| Jury waiver | FED tried in equity (§ 648.5(1)(a)); no statute for money claims | Not offered: `edu-jury-waiver-ia` |
| Exemption or homestead waiver | No statute supports a lease waiver; § 627.6(15)(b) already denies the deposit exemption against the landlord; a tenant has no homestead in the rental | Not offered; no support found (no education row: not shown lawful) |
| Waiver or shortening of the § 648.3 notice to quit | § 648.3(1) 'must be given'; ch. 562A rights unwaivable (§ 562A.11(1)(a)); untested for ch. 648 | Not offered; likely void (no education row) |
| Notice-service or eviction fee | No statutory basis; close to a collection-cost term (rule 49, § 562A.11(1)(c)) | Not offered (no education row) |
| Rent escalation within the term | § 562A.13(5): increase not effective before the agreement expires; whether a lease-fixed step is an 'increase' unsettled | Not offered: explained in `edu-rent-increase-notice-ia` |
| Attorney-fee or collection-cost clause | § 562A.11(1)(c) | Barred: `edu-attorney-fees-ia` |
| Landlord's lien or distraint | § 562A.31 | Barred: `edu-landlord-lien-ia` |
| Self-help lockout for unpaid rent | §§ 562A.26, 562A.33 | Barred: `edu-self-help-eviction-ia` |

### 6.2 Questions asked of Taylor (rule 76)
1. **Maintenance chores (snow removal, landscaping) and Iowa's separate-writing rule.** Iowa lets the landlord and tenant of a single family residence agree in writing that the tenant handles specified maintenance tasks (§ 562A.15(2)); for any other unit, only in a separate writing signed by both, with adequate consideration, not affecting other tenants, and never as a condition of the lease (§ 562A.15(3)-(4)). The shared `landscaping-irrigation` and `snow-removal` clauses put chores in the lease itself. **Taylor (2026-10-02):** 'Option 1, matching Arizona (maintenance-allocation-az) and Nebraska. Tag landscaping-irrigation and snow-removal for IA with a note that they bind only for a single-family residence (§ 562A.15(2)). Model the separate Iowa agreement on maintenance-allocation-az, and include § 562A.15(4) in it: the landlord can't make the tenant's performance of this agreement a condition of the lease. Note that snow-removal now excludes shared areas, which also fits § 562A.15(3)(b). The builder can't yet hide a clause by property type (backlog, flagged by AZ and NE), so record the same gap for Iowa.' **Done:** both rows tagged with the single-family note; `maintenance-allocation-ia` written with § 562A.15(4); gap recorded (§10).

### 6.3 Other drafting decisions made by Claude (recorded, not asked)
- **Late fee shape:** `late-fee-ia` uses a daily fee with a monthly maximum rather than a flat fee, because § 562A.9(4) caps the fee 'per day' and 'per month'; a single flat charge above the daily ceiling could breach the per-day cap on the day it is charged. Its non-waiver sentence covers only future payments and different breaches (§ 562A.30(1)); 'or continuing' was removed after independent check round 1.
- **Holdover:** `holdover-ia` replaces `holdover-ca` because Iowa gives actual damages only for a willful, bad-faith holdover (§ 562A.34(4)); the clause fixes the daily rental value at the Monthly Rent apportioned daily for every holdover and leaves willful damages to the statute.
- **Access:** `landlords-access-mi` tagged instead of the base `landlords-access`, so the Iowa lease keeps the tenant's consent (not unreasonably withheld) that § 562A.19(1) and Butter turn on (independent check round 1).
- **Default:** `default-by-tenant-ia` recovers only unpaid Rent and actual damages; neither shared version is used (§ 562A.11(1)(c) and rule 49).
- **Deposit return:** the 30 days run from the later of the end of the tenancy and receipt of the tenant's address in any form (independent check round 1).
- **Crime clause:** drug possession by anyone other than the tenant counts only where the tenant knew of it, matching § 562A.27A(2)(c) (rounds 1-2).
- **Casualty termination:** limited to cases where continued lawful occupancy of any part is not possible, so it never cuts off § 562A.25(1)(b) (rounds 1-2).
- **Abandoned property:** a contractual notice procedure (no statute); proceeds applied only to handling costs because § 562A.31 abolishes distraint and voids landlord liens.
- **Fixed terms:** no end-of-term clause; education row states both § 562.6 and § 562A.34(3) and advises a 30-day notice (rule 31).
- **Rent steps:** no escalation clause offered; § 562A.13(5) bars an increase effective before the agreement expires, and whether a step in the original lease is an 'increase' is unsettled (education row says so).

## 7. Open items (none blocking)
- **State Fire Marshal / director's smoke and carbon monoxide alarm rules** (installation and placement under § 10A.518(5)): Iowa Administrative Code not read; `edu-alarm-duties-ia` and `smoke-alarm-battery-ia` say so.
- **CERCLIS:** § 562A.13(6) names the 'comprehensive environmental response compensation and liability information system'; whether EPA still maintains a system under that name, and where a landlord checks the listing, was not verified (federal source not read). `superfund-disclosure-ia` uses the statute's words.
- **Case law not searched** (§1.4 list): each affected row labels its risk.
- **Federal law not read** (FHA, SCRA, PTFA, HUD guidance): rows point to federal law without stating it.
- **Ch. 99 nuisance abatement and ch. 657/657A:** only § 99.1A read (owner or lessor of a building used for prostitution or gambling is guilty of a nuisance); no row (§18.2).
- **Sales and lodging tax on rent (ch. 423, 423A):** not researched; no row (§18.2).

## 8. Integrity checks on the delta
Run by script (`work/integrity.py`, output `work/integrity-output.txt`) on the final delta, after the independent-check fixes:
```
PASS header identical to master (17 columns) 
PASS CRLF record ends CRLF=154
PASS no duplicate ids 153
PASS tagged rows exist and active in master 50 tagged, 103 new
PASS tagged rows change only states/notes/last_checked []
PASS tagged notes keep master prefix 
PASS every row has IA in states 
PASS verification_status VERIFIED on all 
PASS new rows active, effective_from/last_checked 2026-10-02 
PASS tagged last_checked 2026-10-02 
PASS basis on every clause, blank on education 
PASS basis values valid 
PASS groups valid 
PASS topic keys all existing []
PASS supersedes resolve to master rows 
PASS rule_type values valid 
PASS no unexpanded battery placeholders 
PASS no "a Iowa" grammar artifacts 
PASS no I.C.A. 
PASS other states active counts unchanged 
IA active 153 clauses 70 edu 83
merged rows 2517 active 2394
PASS every backtick row reference resolves to an active row []
PASS every cited Iowa Code section exists in the corpus []
IA clause topics with >1 clause: {}
```

## 9. Propagation notes (rule 62)
No shared row's `bodyText` was edited, so there is no shared edit to vet. Tag-only changes: 50 rows gained `IA` and an `IA:` note. Shared rows deliberately **not** tagged for Iowa are listed in §2.2 with the Iowa reason; where the reason may apply to another URLTA state, it is flagged in §10 rather than changed here.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Builder variables (rule 60).** New: `{{late_fee_monthly_max}}` (`late-fee-ia`, the landlord's monthly maximum). Existing in the library but not in the kickoff's builder-filled list, used by IA rows: `{{late_fee_daily_amount}}` (`late-fee-ia`; also TX), `{{nsf_fee}}` (`returned-payments-ia`; also CA, TX), `{{separately_charged_utilities}}` (`utility-charges-disclosure-ia`), `{{tenant_maintained_items}}` and `{{maintenance_consideration}}` (`maintenance-allocation-ia`). Reused builder variables: `{{late_fee_grace_days}}`, `{{security_deposit}}`, `{{pet_deposit}}`, `{{pet_rent_amount}}`, `{{monthly_rent}}`.
2. **Builder caps (backlog M.13).** Iowa late fee: monthly rent of $700 or less, at most $12 per day and $60 per month; above $700, at most $20 per day and $100 per month (§ 562A.9(4)). Security deposit plus pet deposit at most two times Monthly Rent (§ 562A.12(1)). Returned-check charge at most $30 and only with posting (§ 554.3512).
3. **Property-type gate (Taylor, §6.2).** The builder cannot hide `landscaping-irrigation` and `snow-removal` for a non-single-family unit or show `maintenance-allocation-ia` only then; same gap as AZ and NE.
4. **Citation formats not defined by the kickoff:** Iowa Rules of Electronic Procedure and court records rules written `Iowa Ct. R. 16.501`, `Iowa Ct. R. 20.4`; small claims forms 'Form 3.6 ... Iowa Court Rules ch. 3'.
5. **Base `landlords-access` and consent (cross-state).** In URLTA states whose access section makes entry depend on the tenant's consent 'not unreasonably withheld' (Iowa § 562A.19(1)), the base clause's unconditional 'right of reasonable access' on notice may read as advance consent. Iowa uses `landlords-access-mi`. Worth a targeted check in KS, NE, AZ, TN, OK, AL and other URLTA states tagged on the base row.
6. **`holdover-ca` trigger (cross-state).** It gives actual damages for any holdover; URLTA states whose statute gives actual damages only for a willful, bad-faith holdover (Iowa § 562A.34(4)) may have a rule 53 trigger conflict.
7. **`default-by-tenant-ks-ne`** 'reasonable costs and expenses' (already flagged by OK): Iowa does not use it (§ 562A.11(1)(c)).
8. **Legal watch (rule 31 pairs):** § 562.6 vs § 562A.34(3) (does a written fixed term end without notice?); § 562.2 (double rental value) vs § 562A.34(4) (actual damages and fees); § 562A.12(4) (deposit reverts to landlord after one year) vs ch. 556 (unclaimed property lists security deposits). **Dated changes:** 2026 Iowa Acts ch. 1002 (Mar. 10, 2026) and ch. 1200, § 40 (July 1, 2026) on local civil rights ordinances; ch. 1182 (July 1, 2026) on abandoned vehicles; ch. 1115, § 126 (July 1, 2026) on § 216.12(1)(e). The Code 2027 compilation should be checked against these rows when published.
9. **Process lesson (also in Proposed SOP changes):** the rule 16 overlay must cover every cited section, not only the core chapters; HF 2617 (abandoned vehicles) was found by the independent check.

## 11. Deliverables
- `lease-clauses-IA-delta.csv` (153 rows, 17 columns, CRLF).
- `lease-clause-decision-log-IA.md` (this log).

## 12. Kickoff leads — what each turned out to be
| # | Lead | Outcome |
|---|---|---|
| 1 | Ch. 562A and ch. 648 whole | Read whole (§14); ch. 562 read whole as well, which surfaced § 562.6 (fixed terms end without notice) and § 562.2 (double rental value). |
| 2 | § 562A.11 banned terms and penalty | Confirmed: waiver (agricultural single-family exception), confession of judgment, attorney fees, exculpation and indemnity; actual damages plus up to three months' periodic rent plus fees for willful use; firearms rule for federally assisted housing (§ 562A.11(2)). Drove `default-by-tenant-ia`, `pet-policy-ia`, the ks-oh-ca variants and `edu-prohibited-terms-ia`. |
| 3 | Late-fee cap § 562A.9(4) | $12/day and $60/month at $700 or less; $20/day and $100/month above. `late-fee-ia`, builder M.13 (§10). |
| 4 | Deposits § 562A.12 | Two months' rent; insured institution; first-five-years interest to landlord; 30 days from termination and receipt of address; one-year reversion; bad faith up to twice monthly rent. Pet deposits count; prepaid rent does not (§ 562A.6(12)). |
| 5 | Disclosures § 562A.13 | Manager and owner or agent (lease clause, REQUIRED); utility explanation (not in writing; recording clause); rent increase notice (separate notice; education); CERCLIS (conditional clause). |
| 6 | End of a fixed term § 562A.34(3) | Two statutes: § 562.6 (written term ends without notice) and § 562A.34(3) (either party may end on 30 days' notice); no case found reconciling them; landlords told to serve notice (`edu-end-of-term-ia`). `surrender-end-of-term-ks-ne` works either way. |
| 7 | Notice service § 562A.29A and e-notice | § 562A.29A methods; § 554D.110(2) keeps the specified method, so no e-mail termination notice; general notices by e-mail only on agreement and actual receipt (`electronic-notice-ia`). |
| 8 | No-cure terminations | § 562A.27A (single three-day notice), § 562A.27(1) repeat within six months, § 562A.27(5) municipal housing agency; § 648.3 notice to quit not needed after a § 562A.27(2) termination. `default-by-tenant-ia` carve-out. |
| 9 | Local preemption | Rent control, voucher ordinances, familial-relationship occupancy rules, permit caps, broader civil rights ordinances and (from July 1, 2026) abandoned-vehicle towing ordinances preempted; rental inspection programs required in cities of 15,000 or more (flagged). |
| 10 | Fair housing ch. 216 | Classes, guest classes (age), exemptions (2026 amendment to (1)(e)); gender identity removed 2025; assistance animals §§ 216.8B-216.8C; guide and hearing dogs §§ 216C.5, 216C.10; no source-of-income protection. |
| 11 | Eviction records | No sealing statute or rule; Iowa Ct. R. 16.501 (filings public). |
| 12 | Abandonment | § 562A.29 (dwelling); no personal-property statute outside mobile home parks; contractual `abandoned-property-ia`. |
| 13 | 2025-2026 acts | None amends ch. 562A or 648; SF 579, HF 2800 § 40, SF 2472 §§ 121-122, 126 and HF 2617 read and applied (§1.2). |

## 13. Independent check
A separate agent that did not write the rows checked all 153 rows against the saved sources (statutes opened section by section; quotes compared verbatim; all 72 cited batteries re-run with `save=False` and reproduced exactly; cases re-read; session-law chapters and dates confirmed; integrity against the master).
- **Round 1** (`work/independent-check-round1.md`): 34 findings (2 ERROR, 12 FIX, 20 NOTE) on 36 rows. ERRORs: `edu-end-of-term-ia` misdescribed § 562.4; `edu-assistance-animals-ia` turned § 216.8C(1)(d)'s certification of whether a 30-day relationship existed into a requirement. FIXes included the missed 2026 HF 2617 amendments to § 321.89, the base `landlords-access` consent framing, `late-fee-ia`'s 'continuing breach', `security-deposit-return-ia`'s written-address clock, the § 562A.27A(2)(c) knowledge qualifier, § 648.19 joinder, the § 562A.11(3) remedy wording, the § 562A.35(1) landlord remedy, rent steps under § 562A.13(5), HF 2800's 'or enforce' and the separate-meter condition in § 384.84(4)(d)(1). All applied; battery 109 rerun replaced 99.
- **Round 2** (`work/independent-check-round2.md`): the 37 rows edited after round 1; all round-1 findings resolved except the casualty trigger (1 FIX) plus 3 NOTEs (`criminal-activity-ia` household members, `holdover-ia` note cites, `edu-servicemember-ia` 'or for any breach'). Applied.
- **Round 3** (appended to the round-2 file): the 4 rows edited after round 2; all resolved, no new findings (rule 80).

## 14. Statute walk (gap-discovery source 1)
The core chapters were read whole from the saved corpus, and each chapter's full section index was diffed against every citation in the IA rows and notes (programmatic; `work/walk.json`):
- **Ch. 562A (Uniform Residential Landlord and Tenant Act), 41 sections:** 37 cited. Not cited: § 562A.1 (short title; used for the name in `edu-scope-ia`), § 562A.3 (supplementary principles of law and equity: background, no landlord duty), § 562A.8A (time periods computed under § 4.1(34): a computation rule, no lease term), § 562A.14 (landlord delivers possession at commencement; may sue a person wrongfully in possession for § 562A.34(4) damages: answered by the tagged `possession-delay-ca` with § 562A.22). One level down, §§ 562A.11, 562A.12, 562A.13, 562A.15, 562A.19, 562A.27, 562A.27A, 562A.29A and 562A.34 were read subsection by subsection for the rows that rely on them.
- **Ch. 648 (forcible entry and detainer), 26 section entries:** 7 cited. Not cited: §§ 648.7, 648.8, 648.11-648.14, 648.21 (reserved); § 648.10 (repealed); § 648.1A (nonprofit transitional and homeless housing excluded, trespass instead: outside ordinary rentals, also excluded from ch. 562A by § 562A.5(8)); § 648.2 (legal representative may sue after the plaintiff's death); § 648.4 (tenant at will: only the three-day notice needed for nonpayment); § 648.6, § 648.22A, § 648.22B (mobile and manufactured homes, out of scope); § 648.9 (change of venue), § 648.15 (title issues tried in equity), § 648.16 (priority), § 648.17 (remedy not exclusive), § 648.23 (restitution on appeal): procedure only, no landlord duty beyond `edu-eviction-process-ia`. Rule 39 screen: no post-writ property or animal duty, no lockout rule, no record rule in the chapter.
- **Ch. 562 (landlord and tenant, general), 12 sections:** 5 cited (§§ 562.2, 562.3, 562.4, 562.6, 562.9). Not cited: § 562.1 (life tenant's executor apportions rent), § 562.1A (farm definitions), §§ 562.5, 562.5A, 562.7, 562.8 (farm tenancies), § 562.10 (rental value after a life estate ends): no residential lease term.
- **Related chapters read for rows:** ch. 216 (§§ 216.8-216.8C, 216.12, 216.19), ch. 216C (§§ 216C.3-216C.12), ch. 29A (§§ 29A.100-29A.104, 29A.101A), ch. 554D (§§ 554D.106, 554D.110), § 10A.518, § 384.84, § 364.17, § 554.3512, § 622.32, § 627.6, § 535.2.



## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Iowa Department of Human Services (now Health and Human Services) Employees' Manual, Title 24, Chapter C, Appendix: form 470-3796 'Institutional Rental Property Agreement for Apartment or Room' and form 470-2350 'Institutional Rental Property Agreement for House or Duplex', both Rev. 01/19, issued with General Letter No. 24-C-AP-6 (Feb. 1, 2019), from https://hhs.iowa.gov/media/3538/download (Last-Modified Oct. 27, 2023); text saved (`sources/ia-hhs-470-3796-2350.txt`, sha256 551d7647…080c). **Why it qualifies:** a state agency's own Iowa lease, written to the Iowa Uniform Residential Landlord and Tenant Act (its maintenance, access and casualty paragraphs track §§ 562A.15, 562A.17, 562A.19 and 562A.25 closely); not a multi-state template. **Why it is weaker:** it is for employees housed on institutional grounds, whose occupancy is conditioned on employment and so falls outside ch. 562A (§ 562A.5(5)); terms are capped at six months; and some terms (a firearm ban, a broad indemnity including enforcement expenses, 'Landlord will not be liable' for personal property) would be prohibited or risky in an ordinary Iowa residential lease (§ 562A.11). No Iowa Realtors or apartment-association form is freely published (the Iowa Association of Realtors form appears only on third-party aggregators; not used; rule 33: no purchase suggested); a City of Washington form looked like a relabelled template and was rejected; a Des Moines council document was a commercial office lease. Not reproduced here; mapped as a lead (rule 33).

### 15.1 Provision map
| HHS form paragraph | Library answer for IA | Note |
|---|---|---|
| 1 Term (not over six months) | Basic terms; `edu-statute-of-frauds-ia` | Employee housing cap; no Iowa general limit |
| 2-3 Sole tenancy; occupancy conditioned on employment | Not used | Employee occupancy is outside ch. 562A (§ 562A.5(5)) |
| 4 Rent by payroll deduction | `rent-payment`, `acceptable-payment-methods` | Employer-specific |
| 5 Deposit; cleaning and repair deductions | `security-deposit-use-ia`, `security-deposit-return-ia` | Form's 'clean' standard is broader than § 562A.12(3)(a)(2); library uses the statute's 'restore to condition at commencement' |
| 6 Utilities chart incl. snow removal and lawn service | `utilities-paid-by-landlord`, `utilities-responsibility`, `snow-removal`, `landscaping-irrigation`, `maintenance-allocation-ia` | Chores in the lease bind only for a single family residence (§ 562A.15(2)-(3); Taylor §6.2) |
| 7 Use; listed residents; guests up to 14 consecutive days | `residential-use-only`, `permitted-occupants`, `guest-policy-day-limit`, `no-disturbance` | Same shape |
| 8 Records check (§ 218.13) | Not used | Institutional statute only |
| 9 Business manager receives notices | `landlord-disclosure-ia` | Matches § 562A.13(1) |
| 10 Rules (attachment; later rules) | `rules-ia` | Library adds § 562A.18's conditions |
| 11 Landlord maintenance (copies § 562A.15) | `landlord-maintenance`, `edu-habitability-ia` | Same duties |
| 12 Tenant maintenance (copies § 562A.17) | `tenant-maintenance`, `no-disturbance`, `no-alterations` | Form keeps 'as the condition ... permit' |
| 13 Access 'subject to Tenant's consent, which consent shall not be unreasonably withheld' | `landlords-access-mi` | Led to tagging the consent version instead of the base row |
| 14 Fixtures and surrender | `surrender-end-of-term-ks-ne`, `no-alterations` | Same |
| 15 Fire or casualty (copies § 562A.25) | `edu-casualty-ia`, `casualty-termination-ia` | Form gives no landlord termination right |
| 16 Firearm ban | `edu-firearms-ia` | Lawful for most private rentals; barred in federally assisted housing (§ 562A.11(2)); not a library clause |
| 17 Observance of laws | `criminal-activity-ia` | Narrower library clause |
| 18 Present and continuing habitability acknowledgment | `existing-condition` | Acknowledgment cannot waive § 562A.15 |
| 19 No assignment or subletting | `no-sublet-assign` | Same |
| 20 Termination: employment end (7 days); 30-day notice (10 week-to-week, 30 month-to-month); expiration; violation | `periodic-tenancy-notice-ia`, `edu-end-of-term-ia`, `default-by-tenant-ia` | Periods match § 562A.34(1)-(2); 'any violation' termination without cure would not survive § 562A.27(1) |
| 21 Insurance; 'Landlord will not be liable' | `tenants-property-insurance-ks-oh-ca` | Exculpation void (§ 562A.11(1)(d)); variant without disclaimer used |
| 22 Indemnity incl. 'expenses of enforcing the Rental Agreement' | Not used | Indemnity and fee shifting prohibited (§ 562A.11(1)(c)-(d)) |
| 23 Signs | `common-area-use` | Same |
| 24 Rights cumulative | `default-by-tenant-ia` | General |
| 25 Notices: personal delivery, mail, as law provides | `notices`, `edu-notice-service-ia` | § 562A.8 and § 562A.29A control |

### 15.2 What it produced
Confirmed the URLTA access wording ('subject to Tenant's consent, which consent shall not be unreasonably withheld'), which, with Butter, supported tagging `landlords-access-mi` instead of the base row; confirmed the § 562A.25 casualty text and the § 562A.34 periodic notice periods; its utility chart lists snow removal and lawn service as chores (`landscaping-irrigation`, `snow-removal`, `maintenance-allocation-ia`). Its firearm ban, indemnity and 'not liable' sentence are examples of terms the library does not use in Iowa.

## 16. Landlord-scenario screen (gap-discovery source 3)
78 everyday situations from application to move-out, sale and foreclosure, run against the IA rows; where no row answered, the statutes were searched and any hit read with the section open. Rows added because of this screen: `edu-no-move-in-inspection-rule-ia` (scenario 15), `edu-service-animal-denial-penalty-ia` (scenario 6, which found §§ 216C.5, 216C.10 and 216C.12), `edu-towing-ia` (scenario 43), `criminal-activity-ia` (scenario 38).

| # | Scenario | Iowa answer (row) |
|---|---|---|
| 1 | Advertising a unit; can I say 'no kids' or 'adults only'? | No: familial status is protected, advertising included; housing for older persons excepted; small owner-occupied exemptions never cover advertising (`edu-fair-housing-ia`) |
| 2 | Applicant pays with a housing choice voucher | No state source-of-income protection; local voucher mandates void since 2023; refusing as a cover for a protected trait is still unlawful (`edu-source-of-income-ia`) |
| 3 | Screening on credit, eviction and criminal history | No Iowa screening statute; apply criteria evenly (`edu-tenant-screening-ia`) |
| 4 | Charging an application fee | No limit (`edu-no-application-fee-rule-ia`) |
| 5 | Taking a holding deposit before the lease | No statute; put terms in writing; after signing, money securing performance is a rental deposit (`edu-no-holding-deposit-rule-ia`) |
| 6 | Applicant asks for an emotional support animal or a guide dog | §§ 216.8B-216.8C procedure; guide and hearing dogs: landlord must waive dog restrictions, misdemeanor to deny (found by this screen: §§ 216C.5, 216C.7, 216C.10); misrepresentation is a crime (`edu-assistance-animals-ia`, `edu-service-animal-denial-penalty-ia`, `edu-service-animal-misrepresentation-ia`, `assistance-animal-accommodation`) |
| 7 | Applicant lies on the application | Material noncompliance (`rental-application-accuracy`, `default-by-tenant-ia`) |
| 8 | Renting a room in my own home or a unit in my duplex | Civil rights exemptions: fewer than four rooms owner-occupied; owner-occupied two-unit building; owner-occupied up to four units with homestead credit or exemption (`edu-fair-housing-ia`) |
| 9 | How many people can live in a two-bedroom? | No state persons-per-bedroom statute; cities may not base occupancy on family relationships; local housing codes flagged (`permitted-occupants`, `edu-rental-inspection-ia`) |
| 10 | How much deposit can I take? | Two months' rent in total (`edu-deposit-cap-ia`) |
| 11 | Pet deposit on top of the security deposit | Counts toward the two-month cap; pet rent is rent (`edu-pet-deposit-ia`, `pet-policy-ia`) |
| 12 | Collecting first and last month plus a deposit | Last month's rent paid in advance is not a rental deposit (§ 562A.6(12)) (`due-at-signing`, `edu-deposit-cap-ia`) |
| 13 | Where do I keep the deposit? | Federally insured bank, savings and loan or credit union; no commingling (`edu-deposit-holding-ia`, `security-deposit-use-ia`) |
| 14 | Interest on the deposit? | Not required; first five years' interest is the landlord's (`edu-deposit-interest-ia`) |
| 15 | Move-in checklist | No statute (batteries 103, 107; row added by this screen) (`edu-no-move-in-inspection-rule-ia`, `existing-condition`) |
| 16 | What disclosures must the lease contain? | Manager and owner or agent (§ 562A.13(1)); CERCLIS listing if any; utility explanation if landlord bills utilities; federal lead (`landlord-disclosure-ia`, `superfund-disclosure-ia`, `utility-charges-disclosure-ia`, `lead-based-paint`) |
| 17 | Former meth lab, radon, mold, bed bugs | No disclosure statute; radon results need not be disclosed; habitability duty covers unfit conditions (`edu-no-meth-disclosure-ia`, `edu-radon-ia`, `edu-no-mold-disclosure-ia`, `edu-no-bed-bug-rule-ia`) |
| 18 | Someone died in the unit | No statute either way (`edu-no-stigmatized-property-rule-ia`) |
| 19 | Flood history | No disclosure statute (`edu-no-flood-disclosure-ia`) |
| 20 | Lease signed electronically | Valid between parties who agreed (§ 554D.106(2)) (`electronic-signatures`) |
| 21 | Lease longer than a year | Must be in writing and signed (§ 622.32(3)); unsigned lease given effect only for one year (`edu-statute-of-frauds-ia`) |
| 22 | Tenant never signed, but moved in and pays | Acceptance of possession or rent gives the unsigned agreement effect (§ 562A.10) (`edu-statute-of-frauds-ia`, `edu-lease-copy-ia`) |
| 23 | Late fee amount | $12/day and $60/month (rent $700 or less); $20/day and $100/month above (`late-fee-ia`, `edu-late-fee-cap-ia`) |
| 24 | Tenant's check bounces | Up to $30 with posting; not for stop payment (`returned-payments-ia`, `edu-dishonored-check-ia`) |
| 25 | Tenant pays late every month and I keep accepting | Accepting varying performance waives termination for that breach; give notice of a temporary waiver (`edu-waiver-by-acceptance-ia`) |
| 26 | Partial payment of rent | Same waiver rule; the three-day notice can follow for the balance (`edu-waiver-by-acceptance-ia`, `edu-nonpayment-notice-ia`) |
| 27 | Tenant doesn't pay rent | Three-day written notice served by § 562A.29A methods, then file without a separate notice to quit; CARES Act notice limited to moratorium defaults (`edu-nonpayment-notice-ia`, `default-by-tenant-ia`) |
| 28 | Tenant violates a rule (noise, unauthorized pet) | Seven-day notice to cure; repeat within six months: seven days without cure (`edu-noncompliance-cure-ia`, `default-by-tenant-ia`) |
| 29 | Tenant assaults a neighbor or deals drugs | Clear and present danger: single three-day notice with the statutory exemption language (`edu-clear-present-danger-ia`, `criminal-activity-ia`) |
| 30 | Tenant calls police repeatedly for domestic disputes | No penalty or eviction for summoning help; one month's rent civil penalty (`edu-emergency-assistance-ia`) |
| 31 | Can I raise rent mid-lease? | Not before the agreement expires; 30 days' written notice (`edu-rent-increase-notice-ia`) |
| 32 | Can the city cap my rent? | No: preempted (`edu-rent-control-ia`) |
| 33 | Tenant asks for repairs; how fast must I respond? | Fitness duties; tenant's seven-day notice and termination, essential-services remedies, repair-and-deduct defense up to one month's rent (`edu-habitability-ia`, `edu-tenant-repair-remedies-ia`) |
| 34 | Furnace dies in January | Essential service; tenant may procure heat and deduct, or recover reduced value, after notice (`edu-tenant-repair-remedies-ia`) |
| 35 | Smoke detector battery dead | Landlord fixes within 30 days of written notice; tenant of more than 30 days can be required to supply batteries (`smoke-alarm-battery-ia`, `edu-alarm-duties-ia`) |
| 36 | Tenant wants to do the lawn and snow for a rent break | Single family residence: in writing in good faith; otherwise a separate signed agreement with consideration (`maintenance-allocation-ia`, `landscaping-irrigation`, `snow-removal`) |
| 37 | Tenant makes a mess I have to clean up during the tenancy | Seven-day notice, then self-cure billed as rent (`landlord-self-cure-ia`) |
| 38 | Criminal activity by a guest that is not a 'clear and present danger' | Material noncompliance only if the lease prohibits it (row added: `criminal-activity-ia`) |
| 39 | Entering to show the unit | Tenant's consent not unreasonably withheld; 24 hours' notice; reasonable times; trespass risk (`landlords-access-mi`, `edu-landlord-entry-ia`) |
| 40 | Tenant refuses all entry | Injunction or termination plus actual damages and fees (`edu-landlord-entry-ia`) |
| 41 | Emergency leak while tenant away | Entry without consent in an emergency (`landlords-access-mi`) |
| 42 | Tenant away for three weeks | Lease may require notice of an extended absence by its first day; entry at reasonable times after 14 days (`extended-absence-notice-ks`) |
| 43 | Unregistered car parked in the lot | Abandoned-vehicle law: more than 24 hours without consent; garagekeeper or police; 10-day notice and 20-day reclaim from July 1, 2026; local towing ordinances preempted (row added: `edu-towing-ia`, `parking-vehicle-rules-id`) |
| 44 | Tenant's authorized car has expired tags | No authority to tow it as abandoned; enforce through parking rules (`edu-towing-ia`) |
| 45 | Tenant wants to sublet or Airbnb | Lease controls; no statute (`no-sublet-assign`) |
| 46 | Tenant installs a doorbell camera or EV charger | No statute (`edu-no-camera-rule-ia`, `edu-no-ev-charging-rule-ia`, `no-alterations`) |
| 47 | Tenant smokes marijuana | Illegal recreationally; medical cannabidiol cannot be smoked and no duty to allow marijuana on property (`edu-cannabis-ia`, `smoking-policy`) |
| 48 | Tenant keeps a gun | Allowed to restrict except federally assisted housing; possession is never a clear and present danger (`edu-firearms-ia`) |
| 49 | Tenant flies a flag or posts signs | No tenant display statute (`common-area-use`) |
| 50 | Tenant complains to the city; can I non-renew? | Retaliation presumption for a year (`edu-retaliation-ia`) |
| 51 | Tenant joins a tenants' union | Protected (`edu-retaliation-ia`) |
| 52 | Fire damages the unit | Tenant may vacate and terminate or pay reduced rent; optional landlord termination (`edu-casualty-ia`, `casualty-termination-ia`) |
| 53 | Tenant's candle caused the fire | No fault exception in § 562A.25; recover damages including lost rent (`tenant-caused-damage-ia`, `edu-tenant-caused-damage-ia`) |
| 54 | Tenant is called to active duty | Termination with orders; prepaid rent refunded; nonpayment protection under $1,200 (`edu-servicemember-ia`) |
| 55 | Tenant is a domestic violence victim and wants out | No termination statute; protections against three-day termination and for calling help (`edu-no-dv-termination-ia`, `edu-dv-eviction-protection-ia`) |
| 56 | Tenant dies | No statute; deal with the estate (`edu-no-tenant-death-rule-ia`) |
| 57 | Tenant wants to break the lease | Optional fee for fixed terms; otherwise mitigation on abandonment (`early-termination-ks`, `edu-abandonment-mitigation-ia`) |
| 58 | Tenant disappears with rent unpaid | Reasonable efforts to re-rent; property handling by notice (`edu-abandonment-mitigation-ia`, `abandoned-property-ia`) |
| 59 | Ending a month-to-month tenancy | 30 days before the periodic rental date, served by § 562A.29A methods (`periodic-tenancy-notice-ia`) |
| 60 | Ending a one-year lease at its end | § 562.6 and § 562A.34(3); serve 30 days' notice to be safe (`edu-end-of-term-ia`) |
| 61 | Tenant stays after the lease ends | Possession action after a three-day notice to quit; daily rental value; willful holdover damages; double rental value statute (`holdover-ia`, `edu-holdover-ia`) |
| 62 | Changing the locks on a tenant who won't pay | Prohibited; punitive damages up to twice monthly rent (`edu-self-help-eviction-ia`) |
| 63 | Keeping the tenant's furniture for unpaid rent | Landlord liens unenforceable; distraint abolished (`edu-landlord-lien-ia`) |
| 64 | Filing an eviction | Small claims FED; hearing within 8 days; nonattorney employee may appear (`edu-eviction-process-ia`) |
| 65 | Things left behind after the sheriff removes the tenant | No statute; notice procedure (`edu-no-post-eviction-property-rule-ia`, `abandoned-property-ia`) |
| 66 | Can the eviction record be sealed? | No (`edu-no-eviction-sealing-ia`) |
| 67 | Returning the deposit | 30 days after end of tenancy and receipt of address; statement of specific reasons (`security-deposit-return-ia`) |
| 68 | Tenant never gives a forwarding address | Deposit reverts after one year (`edu-deposit-reversion-ia`) |
| 69 | Can I deduct carpet cleaning? | Only to restore condition at commencement, ordinary wear excepted (`security-deposit-use-ia`) |
| 70 | Tenant sues over the deposit | Burden on landlord; bad faith up to twice monthly rent; fees to the winner of the deposit dispute (`edu-deposit-return-penalty-ia`) |
| 71 | Selling the building | Transfer deposits with notice; release after written notice of sale; keep disclosures current (`edu-sale-management-change-ia`, `edu-deposit-on-sale-ia`) |
| 72 | My lender forecloses | No state tenant protection; FED after sale; federal law not read (`edu-no-foreclosure-tenant-rule-ia`) |
| 73 | Converting to condominiums | No tenant notice or purchase right (`edu-conversion-ia`) |
| 74 | City utility bill unpaid by tenant | Lien unless landlord gives written notice to the utility (water: separate meter); deposit allowed (`edu-municipal-utility-lien-ia`) |
| 75 | City rental inspection | Required programs in cities of 15,000 or more; check ordinance (`edu-rental-inspection-ia`) |
| 76 | Lease says tenant pays my attorney fees | Prohibited; penalty for willful use (`edu-attorney-fees-ia`, `edu-prohibited-terms-ia`) |
| 77 | Someone moved in who isn't on the lease and won't leave | Forcible entry and detainer; trespass (`edu-no-squatter-statute-ia`, `permitted-occupants`) |
| 78 | Notices by e-mail | Only general notices, by agreement and actual receipt; never termination notices (`electronic-notice-ia`, `edu-notice-service-ia`) |

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole Iowa Code 2026 (47,239 sections) and the Iowa Constitution were loaded in the built-in browser before the first battery and searched with 109 batteries (`batteries/batteries.jsonl`). **Real findings outside the landlord-tenant chapters (the sections relied on read whole):** ch. 216 (fair housing, assistance animals) and ch. 216C (guide and hearing dogs, service-animal misrepresentation, owner immunity); § 216.19 with 2026 Iowa Acts ch. 1002 and ch. 1200, § 40 (local civil rights preemption); §§ 364.3(9), (16), 331.304(10), (13), 414.1(1)(b), (d) (local preemption); § 364.17 (city housing codes, rental inspections, rent escrow); § 384.84 (city utility liens); § 10A.518 (smoke and carbon monoxide alarms, tenant repair-and-deduct); § 554.3512 (returned checks); ch. 554D (electronic transactions); § 622.32 (statute of frauds); ch. 562 (fixed terms, double rental value, tenancy at will, attornment); ch. 29A (servicemembers); § 425.35 (rent reimbursement defense); § 535.2 (legal interest); §§ 556.1, 556.9 (unclaimed property); § 627.6(15) (deposit exemption); §§ 321.89-321.90 with 2026 Iowa Acts ch. 1182 (abandoned vehicles); ch. 124E (§§ 124E.17, 124E.23: no smoking, no duty to allow marijuana on property); ch. 124C (clandestine lab cleanup liability); § 136B.2 (radon results confidential); § 692A.114 (sex offender residency); §§ 714.16, 714H.2-714H.4 (consumer fraud); ch. 9I (agricultural land); §§ 716.7-716.8 (trespass); § 99.1A (nuisance, read only). **Constitution:** art. I, § 1A (arms, strict scrutiny), art. I, § 22 (resident aliens' property rights), art. I, § 24 (agricultural leases no longer than twenty years); nothing reaches a private lease term directly (batteries 81, 94).

**Method:** §1.3. **Batteries** (heading-only = sections whose heading alone matched, excluded from hits; control hits were 0 in every battery):

| # | Battery | Hits | Known positives | Heading-only | Rows citing it |
|---|---|---|---|---|---|
| 1 | control nonsense term | 0 | none | 0 | — |
| 2 | calibration: security/rental deposit | 14 | passed | 0 | — |
| 3 | rent control / regulating the amount of rent | 0 | passed | 0 | `edu-rent-control-ia` |
| 4 | local preemption of landlord-tenant / rental regulation | 23 | passed | 0 | — |
| 5 | late fee / late charge | 30 | passed | 0 | — |
| 6 | application / screening fee near tenancy | 1 | passed | 0 | `edu-no-application-fee-rule-ia` |
| 7 | rent control rerun of B3 (limitation on the amount of rent) | 2 | passed | 0 | `edu-rent-control-ia` |
| 8 | housing choice voucher / source of income | 26 | **failed** | 0 | `edu-source-of-income-ia` |
| 9 | dishonored check / insufficient funds service charge | 21 | passed | 0 | `edu-dishonored-check-ia` |
| 10 | smoke detectors / alarms | 3 | passed | 1 | `edu-alarm-duties-ia` |
| 11 | carbon monoxide alarms | 1 | passed | 0 | `edu-alarm-duties-ia` |
| 12 | radon | 8 | passed | 0 | `edu-radon-ia` |
| 13 | mold | 1 | passed | 0 | `edu-no-mold-disclosure-ia` |
| 14 | bed bugs | 1 | passed | 0 | `edu-no-bed-bug-rule-ia` |
| 15 | methamphetamine / drug lab contamination | 6 | passed | 0 | `edu-no-meth-disclosure-ia` |
| 16 | flood / floodplain disclosure near tenancy | 1 | passed | 0 | `edu-no-flood-disclosure-ia` |
| 17 | lead hazards in rental housing | 2 | passed | 0 | `lead-based-paint` |
| 18 | sex offender residency / occupancy | 71 | passed | 0 | `edu-sex-offender-ia` |
| 19 | servicemember lease termination | 20 | passed | 0 | `edu-servicemember-ia` |
| 20 | domestic abuse / violence and leases | 6 | passed | 0 | `edu-no-dv-termination-ia` |
| 21 | housing choice voucher rerun of B8 (bounded, no bare section 8) | 8 | passed | 0 | `edu-source-of-income-ia` |
| 22 | tenant death | 37 | passed | 8 | `edu-no-tenant-death-rule-ia` |
| 23 | abandoned personal property of a tenant | 47 | passed | 0 | `abandoned-property-ia` |
| 24 | towing from private property | 6 | passed | 0 | `edu-towing-ia` |
| 25 | firearms near tenancy | 10 | passed | 0 | `edu-firearms-ia` |
| 26 | flag / sign display | 14 | passed | 1 | `common-area-use` |
| 27 | EV charging | 4 | passed | 0 | `edu-no-ev-charging-rule-ia` |
| 28 | eviction record sealing / public access | 7 | passed | 0 | `edu-no-eviction-sealing-ia` |
| 29 | foreclosure and tenants | 8 | passed | 0 | `edu-no-foreclosure-tenant-rule-ia` |
| 30 | condominium conversion tenant notice | 2 | passed | 0 | `edu-conversion-ia` |
| 31 | double rent / holdover | 18 | passed | 1 | `edu-holdover-ia` |
| 32 | utility shutoff where landlord holds the account | 1 | passed | 0 | `edu-municipal-utility-lien-ia` |
| 33 | submetering / landlord utility billing | 1 | **failed** | 0 | `utility-charges-disclosure-ia` |
| 34 | tenant death rerun of B22 (word-bounded) | 17 | passed | 0 | `edu-no-tenant-death-rule-ia` |
| 35 | abandoned tenant property rerun of B23 (tenancy chapters and property left) | 5 | passed | 0 | `abandoned-property-ia`, `edu-no-post-eviction-property-rule-ia` |
| 36 | abandoned vehicles on private property rerun of B24 | 2 | passed | 0 | `edu-towing-ia` |
| 37 | flag display rerun of B26 (association or landlord) | 18 | passed | 0 | `common-area-use` |
| 38 | utility disconnection and tenants/landlord accounts rerun of B32 | 2 | passed | 0 | `edu-municipal-utility-lien-ia` |
| 39 | submetering / utility charges rerun of B33 | 2 | passed | 0 | `utility-charges-disclosure-ia` |
| 40 | unclaimed property / deposits | 1 | passed | 0 | `edu-deposit-reversion-ia` |
| 41 | consumer fraud reach to leases / real estate | 8 | passed | 0 | `edu-consumer-protection-ia` |
| 42 | UETA scope and exclusions | 4 | passed | 0 | `edu-notice-service-ia` |
| 43 | statute of frauds leases | 3 | **failed** | 0 | — |
| 44 | legal / judgment interest rate | 5 | passed | 1 | `edu-legal-interest-ia` |
| 45 | renters insurance requirement | 3 | passed | 0 | `pet-insurance-requirement`, `tenants-property-insurance-ks-oh-ca` |
| 46 | fair housing: housing discrimination | 2 | passed | 1 | `edu-fair-housing-ia` |
| 47 | assistance / service animals in housing | 9 | passed | 0 | `edu-assistance-animals-ia`, `edu-service-animal-misrepresentation-ia` |
| 48 | immigration / citizenship status near tenancy | 16 | passed | 1 | `edu-no-immigration-rule-ia` |
| 49 | foreign ownership / nonresident aliens land | 13 | passed | 0 | `edu-foreign-ownership-ia` |
| 50 | rent receipt | 3 | passed | 0 | `edu-no-rent-receipt-rule-ia` |
| 51 | lease copy delivery | 11 | passed | 0 | `edu-lease-copy-ia` |
| 52 | pool safety / swimming pools near rentals | 3 | passed | 0 | — |
| 53 | window guards / fall protection | 0 | passed | 0 | — |
| 54 | stigmatized / psychologically impacted property | 78 | passed | 0 | `edu-no-stigmatized-property-rule-ia` |
| 55 | tenant security cameras / video doorbells | 1 | passed | 0 | `edu-no-camera-rule-ia` |
| 56 | price gouging / excessive pricing in emergency | 0 | passed | 0 | — |
| 57 | rental housing inspection / registration (city) | 0 | **failed** | 0 | `edu-rental-inspection-ia` |
| 58 | heat / temperature standard | 0 | passed | 0 | — |
| 59 | unauthorized occupant / squatter removal | 2 | passed | 0 | `edu-no-squatter-statute-ia` |
| 60 | drug / nuisance abatement and leases | 4 | passed | 0 | — |
| 61 | formatting: bold / capital letters / underlined (tenancy context) | 5 | passed | 0 | — |
| 62 | formatting: point type / font size (tenancy context) | 3 | **failed** | 0 | — |
| 63 | formatting: conspicuous / separate writing / prescribed form (tenancy context) | 61 | **failed** | 0 | — |
| 64 | landlord lien / security interest in tenant goods | 13 | passed | 0 | `edu-landlord-lien-ia` |
| 65 | execution exemptions waiver / security deposit exemption | 3 | passed | 0 | — |
| 66 | confession of judgment / jury waiver | 14 | passed | 0 | `edu-jury-waiver-ia`, `edu-prohibited-terms-ia` |
| 67 | rent increase notice outside 562A | 7 | passed | 1 | `edu-rent-increase-notice-ia` |
| 68 | eviction / forcible entry outside ch. 648 and 562A | 23 | passed | 0 | — |
| 69 | criminal trespass after notice / remaining on premises | 2 | passed | 0 | `edu-no-squatter-statute-ia` |
| 70 | algorithmic rent setting / rent price coordination | 2 | passed | 0 | `edu-no-algorithmic-rent-rule-ia` |
| 71 | fee transparency / total price disclosure | 9 | passed | 0 | `edu-no-fee-transparency-rule-ia` |
| 72 | application of payments / order of applying payments (tenancy) | 7 | **failed** | 0 | `application-of-payments` |
| 73 | security devices / locks / rekey | 0 | passed | 0 | `edu-no-security-device-rule-ia` |
| 74 | tenant screening / criminal history in housing | 3 | passed | 0 | `edu-tenant-screening-ia` |
| 75 | sex offender residency restriction (692A) | 6 | passed | 0 | `edu-sex-offender-ia` |
| 76 | security devices rerun of B73 (everyday word: lock/locks) | 0 | passed | 0 | `edu-no-security-device-rule-ia` |
| 77 | application of payments rerun of B72 | 3 | **failed** | 0 | — |
| 78 | stigmatized property rerun of B54 (psychologically / stigma / disclosure of death) | 1 | **failed** | 0 | — |
| 79 | rental inspection rerun of B57 (rental inspections / housing code) | 16 | passed | 0 | `edu-rental-inspection-ia` |
| 80 | immigration / harboring rerun of B48 (bounded) | 3 | passed | 0 | `edu-no-immigration-rule-ia` |
| 81 | constitution: arms, property, aliens, agricultural leases, speech, privacy | 5 | **failed** | 1 | `edu-firearms-ia` |
| 82 | servicemember / National Guard state duty lease protections | 4 | passed | 0 | `edu-servicemember-ia` |
| 83 | mold/radon/bed bug/lead disclosure duty on landlords (combined everyday-word rerun) | 2 | passed | 0 | `edu-no-mold-disclosure-ia` |
| 84 | deposit interest / five years | 2 | passed | 0 | `edu-deposit-interest-ia` |
| 85 | early termination / lease break rights (non-military) | 3 | **failed** | 0 | `edu-no-dv-termination-ia` |
| 86 | holding deposit / prelease deposit / application deposit | 1 | passed | 0 | `edu-no-holding-deposit-rule-ia` |
| 87 | tenant right to organize / tenants union | 2 | passed | 0 | `edu-retaliation-ia` |
| 88 | rent escrow / no rent recoverable for code violations | 3 | passed | 0 | `edu-rental-inspection-ia` |
| 89 | plain language consumer contracts | 15 | passed | 0 | — |
| 90 | translation of lease / foreign language | 0 | passed | 0 | — |
| 91 | application of payments rerun of B77 (applied first / order of application) | 7 | passed | 0 | `application-of-payments` |
| 92 | stigmatized property rerun of B78 (not required to disclose / material fact death) | 6 | passed | 0 | `edu-no-stigmatized-property-rule-ia` |
| 93 | translation rerun of B90 (everyday words: Spanish / language) | 0 | passed | 0 | — |
| 94 | constitution: resident aliens property (rerun for art. I, sec. 22 text) | 1 | passed | 0 | `edu-firearms-ia`, `edu-no-immigration-rule-ia` |
| 95 | formatting: point type / font size rerun of B62 (req adds lease) | 5 | passed | 0 | — |
| 96 | formatting: conspicuous / separate writing / prescribed form rerun of B63 (req adds lease) | 100 | **failed** | 0 | — |
| 97 | early termination rights (non-military) rerun of B85, two OR-groups | 7 | **failed** | 0 | — |
| 98 | formatting: conspicuous / separate writing / prescribed form rerun of B96 (positives in tenancy context only) | 100 | passed | 0 | — |
| 99 | early termination rights (non-military) rerun of B97 (synthetic positives only) | 7 | passed | 0 | `edu-no-dv-termination-ia` |
| 100 | just cause / good cause eviction | 23 | passed | 0 | `edu-for-cause-eviction-ia` |
| 101 | everyday-word rerun of B100 (refuse to renew / nonrenewal / without cause) | 4 | passed | 0 | `edu-for-cause-eviction-ia` |
| 102 | medical cannabidiol / marijuana and housing | 0 | passed | 0 | `edu-cannabis-ia` |
| 103 | move-in inspection / condition checklist | 0 | passed | 0 | `edu-no-move-in-inspection-rule-ia` |
| 104 | lease completeness / blank spaces / copy at signing | 1 | **failed** | 1 | `edu-no-lease-completeness-rule-ia` |
| 105 | nuisance abatement reaching leased buildings | 13 | passed | 0 | — |
| 106 | medical cannabidiol act read for any housing provision (rerun of B102, everyday words, whole ch. 124E) | 24 | passed | 0 | `edu-cannabis-ia` |
| 107 | move-in inspection rerun of B103 (everyday words: inspect, walk-through, inventory) | 79 | passed | 0 | `edu-no-move-in-inspection-rule-ia` |
| 108 | lease completeness rerun of B104 (real positive with blank space) | 1 | passed | 0 | `edu-consumer-protection-ia`, `edu-no-lease-completeness-rule-ia` |
| 109 | early termination rights rerun of B97/B99 with a section-wide context filter (no 200-character window) | 52 | passed | 0 | `edu-no-dv-termination-ia`, `edu-servicemember-ia` |

## 18. Topic reference canvass (rules 27, 36)
`lease-clause-topics.md` lists 308 topics. **141 are answered by an IA row (§18.1); 167 have no IA row, each with a status and reason (§18.2).**

### 18.1 Topics answered by an IA row (141)
- `abandoned-property`: Present — `abandoned-property-ia`
- `abandonment-and-mitigation`: Present — `edu-abandonment-mitigation-ia`
- `acceptable-payment-methods`: Present — `acceptable-payment-methods`
- `addendum-precedence`: Present — `addendum-precedence`
- `alarm-duties`: Present — `smoke-alarm-battery-ia`, `edu-alarm-duties-ia`
- `algorithmic-rent-setting`: Present — `edu-no-algorithmic-rent-rule-ia`
- `alterations`: Present — `no-alterations`
- `appliances-included`: Present — `appliances-included`
- `application-fees`: Present — `edu-no-application-fee-rule-ia`
- `application-of-payments`: Present — `application-of-payments`
- `assigned-parking-space`: Present — `assigned-parking-space`
- `assistance-animal-accommodation`: Present — `assistance-animal-accommodation`, `edu-assistance-animals-ia`
- `attorney-fees`: Present — `edu-attorney-fees-ia`
- `bed-bug-disclosure`: Present — `edu-no-bed-bug-rule-ia`
- `cannabis`: Present — `edu-cannabis-ia`
- `casualty-termination`: Present — `casualty-termination-ia`, `edu-casualty-ia`
- `common-area-use`: Present — `common-area-use`
- `condition-inspection`: Present — `edu-no-move-in-inspection-rule-ia`
- `consumer-protection-act`: Present — `edu-consumer-protection-ia`
- `conversion-notice`: Present — `edu-conversion-ia`
- `criminal-activity`: Present — `criminal-activity-ia`
- `cure-and-eviction-grounds`: Present — `edu-noncompliance-cure-ia`
- `default-by-tenant`: Present — `default-by-tenant-ia`
- `deposit-escheat`: Present — `edu-deposit-reversion-ia`
- `disturbance`: Present — `no-disturbance`
- `due-at-signing`: Present — `due-at-signing`
- `dv-eviction-protection`: Present — `edu-dv-eviction-protection-ia`
- `dv-lease-termination`: Present — `edu-no-dv-termination-ia`
- `early-termination`: Present — `early-termination-ks`
- `electronic-signatures`: Present — `electronic-signatures`
- `emergency-assistance-right`: Present — `edu-emergency-assistance-ia`
- `entire-agreement`: Present — `entire-agreement`
- `ev-charging`: Present — `edu-no-ev-charging-rule-ia`
- `eviction-process`: Present — `edu-eviction-process-ia`
- `eviction-record-sealing`: Present — `edu-no-eviction-sealing-ia`
- `existing-condition`: Present — `existing-condition`
- `expedited-criminal-eviction`: Present — `edu-clear-present-danger-ia`
- `extended-absence-notice`: Present — `extended-absence-notice-ks`
- `fair-housing`: Present — `edu-fair-housing-ia`
- `fee-transparency`: Present — `edu-no-fee-transparency-rule-ia`
- `fees-as-rent`: Present — `edu-fees-as-rent-ia`
- `fire-safety-grilling`: Present — `fire-safety-grilling`
- `firearms`: Present — `edu-firearms-ia`
- `flood-disclosure`: Present — `edu-no-flood-disclosure-ia`
- `for-cause-eviction`: Present — `edu-for-cause-eviction-ia`
- `foreclosure`: Present — `edu-no-foreclosure-tenant-rule-ia`
- `foreign-ownership`: Present — `edu-foreign-ownership-ia`
- `governing-law`: Present — `governing-law`
- `guest-policy`: Present — `guest-policy`
- `guest-policy-day-limit`: Present — `guest-policy-day-limit`
- `hazardous-contamination-disclosure`: Present — `superfund-disclosure-ia`, `edu-superfund-ia`
- `hoa-compliance`: Present — `hoa-compliance`
- `holding-deposit`: Present — `edu-no-holding-deposit-rule-ia`
- `holdover`: Present — `holdover-ia`, `edu-holdover-ia`
- `holdover-rate`: Present — `edu-holdover-rate-ia`
- `immigration-status`: Present — `edu-no-immigration-rule-ia`
- `inspection-rights`: Present — `inspection-rights`
- `joint-liability`: Present — `joint-liability`
- `jury-waiver`: Present — `edu-jury-waiver-ia`
- `keys`: Present — `keys`
- `landlord-entry`: Present — `landlords-access-mi`, `edu-landlord-entry-ia`
- `landlord-lien`: Present — `edu-landlord-lien-ia`
- `landlord-maintenance`: Present — `landlord-maintenance`, `edu-habitability-ia`
- `landlord-self-cure`: Present — `landlord-self-cure-ia`
- `landscaping-irrigation`: Present — `landscaping-irrigation`
- `late-fee`: Present — `late-fee-ia`, `edu-late-fee-cap-ia`
- `lead-based-paint`: Present — `lead-based-paint`
- `lease-completeness`: Present — `edu-no-lease-completeness-rule-ia`
- `lease-copy`: Present — `edu-lease-copy-ia`
- `meth-disclosure`: Present — `edu-no-meth-disclosure-ia`
- `mold-disclosure`: Present — `edu-no-mold-disclosure-ia`
- `municipal-utility-lien`: Present — `edu-municipal-utility-lien-ia`
- `nonpayment-notice`: Present — `edu-nonpayment-notice-ia`
- `notice-delivery-methods`: Present — `electronic-notice-ia`, `edu-notice-service-ia`
- `notices`: Present — `notices`
- `owner-identity-disclosure`: Present — `landlord-disclosure-ia`
- `parking`: Present — `parking-ks-oh-ca`
- `parking-vehicle-rules`: Present — `parking-vehicle-rules-id`
- `permitted-occupants`: Present — `permitted-occupants`
- `pet-fees`: Present — `edu-pet-deposit-ia`
- `pet-insurance-requirement`: Present — `pet-insurance-requirement`
- `pet-policy`: Present — `pet-policy-ia`
- `possession-delay`: Present — `possession-delay-ca`
- `post-eviction-property`: Present — `edu-no-post-eviction-property-rule-ia`
- `prohibited-lease-terms`: Present — `edu-prohibited-terms-ia`
- `radon-disclosure`: Present — `edu-radon-ia`
- `rent-control`: Present — `edu-rent-control-ia`
- `rent-increase-notice`: Present — `edu-rent-increase-notice-ia`
- `rent-payment`: Present — `rent-payment`
- `rent-receipts`: Present — `edu-no-rent-receipt-rule-ia`
- `rental-application-accuracy`: Present — `rental-application-accuracy`
- `rental-inspection`: Present — `edu-rental-inspection-ia`
- `residential-use-only`: Present — `residential-use-only`
- `retaliation`: Present — `edu-retaliation-ia`
- `returned-payments`: Present — `returned-payments-ia`, `edu-dishonored-check-ia`
- `rules-regulations`: Present — `rules-ia`
- `sale-or-management-change`: Present — `edu-sale-management-change-ia`
- `scope`: Present — `edu-scope-ia`
- `security-deposit-cap`: Present — `edu-deposit-cap-ia`
- `security-deposit-holding`: Present — `edu-deposit-holding-ia`
- `security-deposit-interest`: Present — `edu-deposit-interest-ia`
- `security-deposit-on-sale`: Present — `edu-deposit-on-sale-ia`
- `security-deposit-penalty`: Present — `edu-deposit-return-penalty-ia`
- `security-deposit-return`: Present — `security-deposit-return-ia`
- `security-deposit-use`: Present — `security-deposit-use-ia`
- `security-devices`: Present — `edu-no-security-device-rule-ia`
- `self-help-eviction`: Present — `edu-self-help-eviction-ia`
- `service-animal-denial-penalty`: Present — `edu-service-animal-denial-penalty-ia`
- `service-animal-misrepresentation`: Present — `edu-service-animal-misrepresentation-ia`
- `servicemember-rights`: Present — `edu-servicemember-ia`
- `services-utilities-provided`: Present — `services-utilities-provided-ks-oh`
- `severability`: Present — `severability`
- `sex-offender-occupancy`: Present — `edu-sex-offender-ia`
- `smoking-policy`: Present — `smoking-policy`
- `snow-removal`: Present — `snow-removal`
- `source-of-income`: Present — `edu-source-of-income-ia`
- `statute-of-frauds-lease-term`: Present — `edu-statute-of-frauds-ia`
- `stigmatized-property`: Present — `edu-no-stigmatized-property-rule-ia`
- `storage-space`: Present — `storage-space-ks-oh-ca`
- `sublet-assign`: Present — `no-sublet-assign`
- `surrender-end-of-term`: Present — `surrender-end-of-term-ks-ne`
- `tenant-caused-damage`: Present — `tenant-caused-damage-ia`, `edu-tenant-caused-damage-ia`
- `tenant-death`: Present — `edu-no-tenant-death-rule-ia`
- `tenant-forward-proceedings`: Present — `tenant-forward-proceedings-ca`
- `tenant-maintenance`: Present — `tenant-maintenance`
- `tenant-repair-agreement`: Present — `maintenance-allocation-ia`
- `tenant-repair-remedies`: Present — `edu-tenant-repair-remedies-ia`
- `tenant-screening`: Present — `edu-tenant-screening-ia`
- `tenant-security-cameras`: Present — `edu-no-camera-rule-ia`
- `tenants-property-insurance`: Present — `tenants-property-insurance-ks-oh-ca`
- `termination-notice`: Present — `periodic-tenancy-notice-ia`, `edu-end-of-term-ia`
- `towing`: Present — `edu-towing-ia`
- `unauthorized-occupant-removal`: Present — `edu-no-squatter-statute-ia`
- `unconscionability`: Present — `edu-unconscionability-ia`
- `unpaid-damages-interest`: Present — `edu-legal-interest-ia`
- `utilities-paid-by-landlord`: Present — `utilities-paid-by-landlord`
- `utilities-responsibility`: Present — `utilities-responsibility`
- `utility-payment-evidence`: Present — `utility-payment-evidence`
- `utility-service-continuity`: Present — `utility-service-continuity`
- `utility-submetering-disclosure`: Present — `utility-charges-disclosure-ia`
- `waiver-by-acceptance`: Present — `edu-waiver-by-acceptance-ia`

### 18.2 Topics with no IA row (status and reason) (167)
- `nuisance` (14 states): Not located beyond one section: § 99.1A (owner or lessor of a building used for prostitution or gambling guilty of a nuisance) read; ch. 99 abatement, ch. 657 and ch. 657A not read (battery 105) (§7)
- `statutory-forms` (13 states): Confirmed absent for leases and landlord notices: Iowa prescribes no lease or notice form; small claims court forms (Form 3.6) are court forms; the § 562A.27A notice must quote subsection 3 (`edu-clear-present-danger-ia`)
- `quiet-possession` (11 states): Answered elsewhere: no separate statutory covenant in ch. 562A; ouster and service cut-offs (§§ 562A.26, 562A.33) in `edu-self-help-eviction-ia`, abusive entry (§ 562A.35) in `edu-landlord-entry-ia`
- `rent-tax` (9 states): Not located: sales and lodging tax on residential rent (ch. 423, 423A) not researched (§7)
- `tenant-display-rights` (9 states): Confirmed absent (batteries 26, 37), recorded in the `common-area-use` tag note
- `disability-accommodation` (8 states): Answered elsewhere: § 216.8A(3)(c)(1)-(2) (modifications with restoration, accommodations) in the `no-alterations` tag note and `edu-fair-housing-ia`; no rule requiring the lease itself to state the restoration right
- `deposit-last-month-rent` (7 states): Not located: ch. 562A (read whole) has no rule on withholding the last month's rent against the deposit; `security-deposit-use-ia` bars applying the deposit to rent without consent
- `dv-confidentiality` (7 states): Confirmed absent (battery 20)
- `hoa` (6 states): Answered by the `hoa-compliance` tag; no association-approval or condominium leasing statute for tenants found (not separately searched)
- `plain-language` (6 states): Confirmed absent for leases (battery 89)
- `renters-insurance-rules` (6 states): Confirmed absent (battery 45), recorded in the `tenants-property-insurance-ks-oh-ca` and `pet-insurance-requirement` notes
- `tenant-statutory-duties` (6 states): Answered by the `tenant-maintenance` and `no-disturbance` tags (§ 562A.17)
- `alt-housing` (5 states): Not located: no relocation duty in ch. 562A (read whole)
- `deposit-installments` (5 states): Not located: no installment right in § 562A.12 (read whole); outside title not searched
- `statutory-early-termination` (5 states): Answered elsewhere: `edu-servicemember-ia`, `edu-no-dv-termination-ia` (battery 109)
- `utility-landlord-account` (5 states): Answered in part: city utility disconnection and lien notices to a landlord on written request (§ 384.84(3)(c), (4)(c)) in `edu-municipal-utility-lien-ia`; no rule on shutoff where the landlord holds the account (battery 38); utility board rules not read
- `double-letting` (4 states): Not located (ch. 562A read whole)
- `dv-lockchange` (4 states): Confirmed absent (batteries 20, 73, 76)
- `exculpatory-clauses` (4 states): Answered by `edu-prohibited-terms-ia` (§ 562A.11(1)(d))
- `foreclosure-disclosure` (4 states): Confirmed absent (battery 29)
- `homestead-waiver` (4 states): Not offered (§6.1): no statute supports a lease waiver
- `infirmity-termination` (4 states): Confirmed absent (battery 109)
- `landlord-registration` (4 states): Answered by `edu-rental-inspection-ia` (city certification of inspected rental housing, § 364.17(3)(a)); local registration ordinances flagged
- `minor-tenant-filing` (4 states): Not located (ch. 648 read whole)
- `nonrefundable-deposit-notice` (4 states): Answered by `edu-deposit-cap-ia` (no nonrefundable-fee statute; money securing performance is a deposit)
- `protected-class-inquiry-ban` (4 states): Not located: ch. 216 (read) bars discrimination, including in advertising, but has no application-question ban
- `term-change-notice` (4 states): Answered by `edu-rent-increase-notice-ia` (§ 562A.13(5)) and `rules-ia` (§ 562A.18(2))
- `fee-in-lieu-of-deposit` (3 states): Not located (no statute)
- `nonresident-owner-agent` (3 states): Answered by `landlord-disclosure-ia` (agent for service and notices; no residency requirement in § 562A.13)
- `pool-safety` (3 states): Not located for landlords: ch. 135I swimming pool rules appear only as a battery hit (battery 52); not read
- `portfolio-thresholds` (3 states): Not applicable: no Iowa duty tiered by portfolio size found
- `rent-escalation` (3 states): Not offered (§6.1); `edu-rent-increase-notice-ia`
- `repair-notice` (3 states): Answered by `edu-tenant-repair-remedies-ia` (written notices in §§ 562A.21, 562A.23, 562A.27(4))
- `required-fees` (3 states): Confirmed absent (battery 71)
- `sex-offender-disclosure` (3 states): Answered by `edu-sex-offender-ia` (no landlord duty)
- `telecom-access` (3 states): Not located (not searched)
- `tenant-rights-statement` (3 states): Not located: no required tenant-rights statement in ch. 562A (read whole)
- `utility-shutoff-statute` (3 states): Answered elsewhere: landlord shutoffs (§ 562A.26) in `edu-self-help-eviction-ia`; city utility notices (§ 384.84(3)(c)) in `edu-municipal-utility-lien-ia`; utility board rules not read
- `automatic-renewal` (2 states): Not located: no automatic-renewal statute (ch. 562A and ch. 562 read whole)
- `collection-fee` (2 states): Barred: § 562A.11(1)(c), rule 49 (`edu-attorney-fees-ia`)
- `confession-of-judgment` (2 states): Answered by `edu-prohibited-terms-ia` (§ 562A.11(1)(b))
- `deposit-cost-schedule` (2 states): Not located: no statute lets a lease pre-set deductions; § 562A.12(3)(a) limits withholding to amounts 'reasonably necessary'
- `dv-qualifying-documents` (2 states): Confirmed absent (battery 20)
- `environmental-event-termination` (2 states): Not located
- `ev-charging-end-of-tenancy` (2 states): Confirmed absent (battery 27)
- `ev-charging-requirements` (2 states): Confirmed absent (battery 27)
- `ev-charging-shared-area` (2 states): Confirmed absent (battery 27)
- `habitability-modifiable` (2 states): Answered by `edu-habitability-ia` (§ 562A.15(2)-(4))
- `heating` (2 states): Answered by `edu-habitability-ia` (§ 562A.15(1)(a)(6), (2))
- `military-air-zone-disclosure` (2 states): Not applicable: Virginia and Indiana statutes; none in Iowa found
- `notice-service-fee` (2 states): Not offered (§6.1)
- `prohibited-acts-renter` (2 states): Answered by the `tenant-maintenance` tag (§ 562A.17(6))
- `rent-concession` (2 states): Not located
- `rent-into-court-counterclaim` (2 states): Answered by `edu-tenant-repair-remedies-ia` (§ 562A.24)
- `rent-reporting` (2 states): Not located
- `security-deposit-nonwaiver` (2 states): Answered by `edu-prohibited-terms-ia` (§ 562A.11(1)(a))
- `substandard-property-receivership` (2 states): Not located: ch. 657A appears only as a battery hit; not read
- `tenancy-at-will` (2 states): Answered by `edu-end-of-term-ia` (§ 562.4)
- `translation-duty` (2 states): Confirmed absent (batteries 90, 93)
- `truth-in-renting` (2 states): Answered by `edu-prohibited-terms-ia`
- `utility-apportionment` (2 states): Confirmed absent outside mobile home parks (battery 39)
- `waterbed` (2 states): Not located; the `common-area-use` tag requires consent for water-filled furniture
- `adverse-proceeding-notice` (1 state): Answered by the `tenant-forward-proceedings-ca` tag (§ 562.3)
- `appliances-excluded` (1 state): Not located; `appliances-included` tag and § 562A.15(1)(a)(4)
- `balcony-inspection` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `bed-bug-cooperation` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `casualty-and-mitigation-waivable` (1 state): Not applicable: § 562A.25 cannot be waived (§ 562A.11(1)(a))
- `children-occupancy` (1 state): Answered by the `permitted-occupants` tag note (familial status)
- `cold-weather-vacate-notice` (1 state): Not applicable: a MN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `condemned-premises-rent-bar` (1 state): Not applicable: a MN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `confirmed-absences-habitability` (1 state): Not applicable (Nebraska bookkeeping topic); Iowa absences recorded row by row (§17)
- `confirmed-absences-misc` (1 state): Not applicable (Nebraska bookkeeping topic)
- `confirmed-absences-outside-title` (1 state): Not applicable (Nebraska bookkeeping topic)
- `construction-liens` (1 state): Not applicable: a FL statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `defective-drywall-disclosure` (1 state): Not applicable: a VA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `deposit-surrender-notice` (1 state): Not applicable: a TX statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `designated-repairer` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `disaster-displaced-guests` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `disaster-duties` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `drug-free-housing-addendum` (1 state): Not applicable: a IL statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `dv-deposit-timing` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `dv-protection-order-chapter-moved` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `electric-submetering-disclosure` (1 state): Not applicable: a TX statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `emergency-contact` (1 state): Not located (battery 34)
- `employee-screening` (1 state): Not applicable: a FL statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `eviction-hardship-stay` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `eviction-penalty-clause-ban` (1 state): Not applicable: a CO statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `eviction-service-party` (1 state): Not offered: § 648.5(2) sets service methods; no statute lets a lease name a person to accept service
- `expedited-deposit-disposition` (1 state): Not applicable: a VA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `fee-unprovided-service` (1 state): Not applicable: a CO statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `fire-code-standard` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `fire-sprinkler-duty` (1 state): Not applicable: a MN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `forfeiture-redemption` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `frozen-standard-incorporation` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `government-fee-reimbursement` (1 state): Not located
- `governmental-fines` (1 state): Not located
- `guarantor-renewal` (1 state): Not applicable: a TX statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `guest-rights` (1 state): Not applicable: a PA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `habitability-materiality` (1 state): Answered by `edu-habitability-ia`
- `habitability-presumption` (1 state): Not located
- `habitability-waiver` (1 state): Answered by `edu-habitability-ia` (duties not waivable; § 562A.15(2)-(3) reassignment only)
- `health-district-rental-rules` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `inspection-condemnation-disclosure` (1 state): Not applicable: a MN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `inspection-notice-penalty` (1 state): Not applicable: a MN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `key-control-policy` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `landlord-breach-remedy` (1 state): Not applicable: a TX statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `landlord-liability-insurance` (1 state): Not applicable: a NJ statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `landlord-remedies-termination` (1 state): Answered by `edu-eviction-process-ia` and `edu-attorney-fees-ia` (§ 562A.32)
- `law-enforcement-cooperation` (1 state): Not applicable: a TN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `lead-safe-certification` (1 state): Not applicable: a NJ statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `lease-content-requirements` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `lease-notice-initial-requirement` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `lease-term-limitation` (1 state): Answered by `edu-statute-of-frauds-ia` (§ 562A.10(3)); agricultural leases limited to twenty years (Iowa Const. art. I, § 24; `edu-foreign-ownership-ia` note)
- `liquidated-damages` (1 state): Answered by the `early-termination-ks` tag and `edu-holdover-rate-ia`
- `lockout-for-rent-delinquency` (1 state): Barred (§§ 562A.26, 562A.33; `edu-self-help-eviction-ia`)
- `meter-conservation-charge` (1 state): Not applicable: a SC statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `nonrefundable-deposit-separate-notice` (1 state): Not applicable: a WY statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `notice-to-quit-waiver` (1 state): Not offered (§6.1)
- `notice-to-vacate-additional-terms` (1 state): Not applicable: a KS statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `ordnance-demolition-meter-disclosures` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `other-landlord-facilities` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `owner-move-in-reservation` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `parking-rules-notice` (1 state): Not applicable: a TX statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `part5-nonwaivable` (1 state): Not applicable: a CO statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `periodic-services-entry` (1 state): Not offered: § 562A.19(4) limits access; the access clause requires consent
- `pest-control-notice` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `plain-language-consumer-statement` (1 state): Not applicable: a PA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `portable-solar` (1 state): Not applicable: a VA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `possession-bond` (1 state): Not applicable: a TN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `private-well-testing` (1 state): Not applicable: a NJ statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `prop65-rental-warning` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `property-tax-rent-disclosure` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `purpose-limitation` (1 state): Not applicable: a ND statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `redemption` (1 state): Not applicable: a VA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `religious-cultural-display` (1 state): Confirmed absent (batteries 26, 37)
- `rent-demand-bar` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `rent-receipt-anti-waiver` (1 state): Not located as an operative rule: § 562A.2(2)(c) states the purpose ('the right to the receipt of rent is inseparable from the duty to maintain the premises')
- `repair-cost-termination` (1 state): Not applicable: a WY statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `repair-escrow-exemption-notice` (1 state): Not applicable: a OH statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `required-disclosures` (1 state): Not applicable: a VA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `security-deposit-standards` (1 state): Not applicable: a SC statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `senior-housing-work-card` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `sfr-occupancy-disclosure` (1 state): Not applicable: a NV statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `shutdown-rent-protection` (1 state): Not located
- `smoke-drift-waiver` (1 state): Not located: no smoke-drift nuisance statute
- `social-security-defense` (1 state): Not located
- `statutory-caps` (1 state): Not applicable: a OH statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `steam-radiator-covers` (1 state): Not applicable: a NJ statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `stove-refrigerator` (1 state): Not located: § 562A.15(1)(a)(4) covers only appliances supplied or required to be supplied
- `subsidized-inspection-refusal` (1 state): Not applicable: a IL statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `subsidy-habitability-proration` (1 state): Not applicable: a CO statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `subsidy-late-fee` (1 state): Not applicable: a CO statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `tenant-insurance-claims` (1 state): Not located
- `tenant-records` (1 state): Not applicable: a VA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `tenant-right-to-organize` (1 state): Answered by `edu-retaliation-ia` (§ 562A.36(1)(c))
- `tpa-exemption-notice` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `tpa-notice` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `tpa-sunset` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `unbundled-parking` (1 state): Not applicable: a CA statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `utility-allowance-cap` (1 state): Not applicable: a CO statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `utility-deposit-return` (1 state): Answered in part: city utility deposits returned when charges are paid (§ 384.84(4)(e)) in `edu-municipal-utility-lien-ia`
- `utility-disclosure-attachment` (1 state): Not applicable: a MN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `utility-interruption-submeter` (1 state): Not applicable: a TX statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `utility-transfer` (1 state): Not applicable: a TN statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `veterans-incentive` (1 state): Not applicable: a FL statutory feature; no Iowa counterpart in ch. 562A, ch. 562 or ch. 648 (read whole) or in the outside-title batteries (§17); not separately searched
- `window-guards` (1 state): Confirmed absent (battery 53)
- `written-notice-required` (1 state): Answered by `edu-notice-service-ia` (§§ 562A.8, 562A.29A)

### 18.3 'Topics no state has a row for yet'
The reference (2,291 active rows, 308 topics) carries no such list; every topic has rows in at least one state and is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** batteries 61, 95, 98 run before drafting; no type-size, boldface or first-page rule for residential leases; layout table §4.
- **41 just cause:** none for private rentals (batteries 100, 101); `edu-for-cause-eviction-ia` keyed `for-cause-eviction` with the situational limits (retaliation, emergency assistance, servicemembers, municipal housing agencies); a written fixed term ends at its agreed date under § 562.6, but § 562A.34(3) notice is advised (`edu-end-of-term-ia`).
- **42 required text in a shared clause:** the returned-check posting duty (§ 554.3512(2)) is written into `returned-payments-ia`; the § 562A.13(1) disclosure is its own clause; no shared clause needs Iowa wording inserted.
- **43 cure promises:** `default-by-tenant-ia` puts its carve-out for the no-cure grounds (repeat within six months, § 562A.27A, § 562A.27(5)) in its own sentence reaching both limbs; its rent limb repeats the statutory three-day notice and adds none; `early-termination-ks` is tagged (its landlord termination points to the default section; the base `early-termination` with its 10-day cure promise is not tagged).
- **44 terms turned into duties:** § 562A.15(1)(a)(4) makes supplied appliances the landlord's to maintain (`appliances-included` note); § 562A.20 makes the extended-absence notice exist only if the lease requires it (`extended-absence-notice-ks` tagged); § 562A.13(4) duties arise whenever the landlord bills utilities.
- **45 electronic notices:** ch. 554D read itself: applies only between parties who agreed, refusal right unwaivable (§ 554D.106(2)-(3)); a record required to be sent by a specified method must be (§ 554D.110(2)(b)); inhibited records unenforceable (§ 554D.110(3)); so no e-mail § 562A.29A or § 648.3 notice (`electronic-notice-ia`, `edu-notice-service-ia`).
- **46 lease as the notice:** the § 562A.13(1) disclosure and the § 562A.20 absence requirement are lease paragraphs; no Iowa statute lets the lease serve as a nonpayment or termination notice; no shared clause promises a separate notice that a statute would then require.
- **47 knowing-use penalties:** § 562A.11(3) (actual damages plus up to three months' periodic rent plus fees); `severability` and 'to the extent permitted by law' wording do not cure; no IA clause contains a § 562A.11(1) term (independent check confirmed).
- **48 separate documents:** the § 562A.15(3) maintenance agreement (`maintenance-allocation-ia`); the § 216.8B(6)(e) written determination; no lease clause stands in for them.
- **49 collection costs:** § 562A.11(1)(c) bars attorney-fee agreements; 'reasonable costs and expenses' avoided (`default-by-tenant`, `default-by-tenant-ks-ne` not tagged); `keys` and `hoa-compliance` charges are damages for the tenant's own act (risk recorded in the `hoa-compliance` note).
- **50 'the lease controls':** each choice made on purpose: § 562A.9(1)-(3) (rent time and place: `rent-payment`); § 562A.9(5) (definite term or periodic); § 562A.15(2)-(3) (`maintenance-allocation-ia`, chores tags); § 562A.16(1) ('unless otherwise agreed': not displaced); § 562A.18 (`rules-ia`); § 562A.20 ('unless otherwise agreed': `residential-use-only`; absence notice: `extended-absence-notice-ks`); § 562A.30(2) (temporary waiver: education); § 562A.34(4) consent (`holdover-ia`); § 535.2 written interest rate (not offered; `edu-legal-interest-ia`); § 10A.518(7) battery duty (`smoke-alarm-battery-ia`); § 562A.12(3)(a) 'delivery instructions' (`security-deposit-return-ia`).
- **51 plain language and consumer contracts:** no plain-language statute reaches leases (battery 89); the consumer fraud act defines merchandise to include real estate (§ 714.16(1)(e)); ch. 714H covers merchandise 'offered for ... lease' (reach to residential leases not settled; `edu-consumer-protection-ia`); no blank-space or copy-at-signing rule (battery 108; `edu-lease-copy-ia`, `edu-no-lease-completeness-rule-ia`).
- **52 exculpation:** void (§ 562A.11(1)(d)); ks-oh-ca and ks-oh variants tagged; `pet-policy-ia` without the indemnity; `hoa-compliance` risk recorded.
- **53 figures vs shared clauses:** `late-fee` (flat fee and broad non-waiver), `returned-payments` (ceiling-only), `holdover` (ceiling-only) and `holdover-ca` (trigger), `security-deposit-use` (broader than the closed list), `pet-policy` (indemnity, entry), `landlords-access` (consent), `parking-vehicle-rules` (towing triggers) replaced; `acceptable-payment-methods`, `assigned-parking-space`, `keys`, `early-termination-ks`, `possession-delay-ca` checked with no Iowa figure in conflict; deposit and late-fee caps to the builder (§10).
- **35c constitution:** loaded before the first battery; findings in §17.
- **37 tenancy type:** the deposit cap and late-fee cap are per tenancy and per month for every type; notice periods differ (week-to-week 10 days, month-to-month 30 days before the periodic rental date, longer terms 30 days before the end, `periodic-tenancy-notice-ia`, `edu-end-of-term-ia`); the early-termination fee is fixed-term only; a holdover by a weekly roomer becomes week-to-week (`holdover-ia`); § 562A.37 reaches agreements 'entered into or extended or renewed after January 1, 1979', so every current periodic tenancy is covered; § 562A.13(5) applied to periodic tenancies by treating each period as a renewal (labelled Claude's reading).
- **39 eviction duties:** post-judgment removal within three days in the daytime (§§ 648.20, 648.22), no post-writ property or animal duty (`edu-no-post-eviction-property-rule-ia`); lockout ban (`edu-self-help-eviction-ia`); no record sealing in statutes or court rules (Iowa Ct. R. 16.501; `edu-no-eviction-sealing-ia`); federal pre-filing condition checked (CARES Act, MIMG v Miller); no court-rule period conflicts with a statutory landlord duty.
- **54t tenant-caused damage:** answered provision by provision (§6.1).
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences (for example § 562A.27A(2)(c)'s knowledge limit, § 562A.25(1)(b)'s 'If continued occupancy is lawful', § 384.84(4)(d)(1)'s separate meter); three independent-check rounds (§13). No row records no basis: every new row's notes name its controlling text or its absence battery.

## Proposed SOP changes
1. Rule 16: overlay the session's sections-amended list on every section the rows cite, not only the core chapters, before drafting; in Iowa a 2026 act amending the abandoned-vehicle statute (§ 321.89) was missed until the independent check because the overlay covered only ch. 562A and ch. 648.
2. Rule 14: when a browser download from a background tab lands under a temporary GUID name, identify it by SHA-256 rather than by name; and a navigation reported as 'denied or failed' can still download a file, so check the Downloads folder after any failed navigation to a download URL (in Iowa an unwanted 2.6 MB PDF landed that way).
3. Rule 30: read the state's general landlord-tenant chapter whole alongside the URLTA chapter; Iowa's § 562.6 (a written term ends without notice) bears directly on the kickoff's fixed-term question and was outside ch. 562A.
4. Rule 19: when a battery's real positive fails only because of a proximity window, rerun with a section-wide context filter rather than dropping the positive; in Iowa battery 99 dropped the failing positive and kept the blind spot.
5. Rule 26: before tagging a single-state clause, check whether its `lease_clause_basis` names the other state's statute; if so, write the state's own row even where the wording matches (Iowa: `landlord-disclosure-mo`, `periodic-tenancy-notice-tn`).

## Proposed topic questions
1. `termination-notice`: Does a general landlord-tenant statute outside the URLTA chapter say a written term ends without notice, and how does it sit with the URLTA's notice to end a term 'longer than month-to-month'?
2. `landlord-entry`: Does the base access clause's 'right of reasonable access' on notice give away the tenant's statutory right to withhold consent reasonably, where entry turns on consent?
3. `service-animal-denial-penalty`: Do guide-dog or hearing-dog statutes outside the fair housing act require landlords to waive lease restrictions, with a criminal penalty?
4. `towing`: Does the abandoned-vehicle statute preempt local towing ordinances, and when did that start?
5. `holdover`: Does an older double-rental-value statute outside the act apply alongside the act's willful-holdover damages?

## Sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base 82bf3ce` (the 2,414-row library the kickoff was staged from): 50 shared rows tagged IA (note-only changes; `landscaping-irrigation` and `snow-removal` had ND retro notes added since the base and were merged onto the current rows), 103 new rows, no refusals. Merged after the MN and ND retros.
- **Rule 27, two rows added at sync.** §18.2 answered `statutory-forms` and `quiet-possession` without rows. Added, each RECOMMENDED education, with the controlling sections read at sync: `edu-statutory-forms-ia` (§ 562A.27A(1) requires the clear-and-present-danger notice to set out subsection 3; otherwise no prescribed lease or notice form) and `edu-no-quiet-possession-statute-ia` (no separate covenant; §§ 562A.33, 562A.26, 562A.35(2) protect possession). Library 2,549 rows; IA 155 active (70 lease clauses, 85 education); Iowa shows 70 clauses with no same-topic pairs; every other state's set unchanged.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 6 of 6, against the official Iowa Code 2026 ch. 562A PDF (legis.iowa.gov, read by Claude Code at sync):** § 562A.9(4) (the two-tier per-day and per-month late-fee cap) matches `late-fee-ia`; § 562A.12(3)-(4) (30 days after the later of termination and receipt of the address; one-year reversion) matches `security-deposit-return-ia`; § 562A.15(2)-(4) matches `maintenance-allocation-ia` and the single-family notes; § 562A.13(6) matches `superfund-disclosure-ia`; § 562A.27(1)-(2) (7-day remedy notice, six-month recurrence, 3-day rent notice) matches `default-by-tenant-ia`; § 562A.11(1)(c) supports `default-by-tenant-ia`'s recovery of actual damages only.
- **Citations file** `lease-clause-citations-IA.csv`: 155 rows (123 cited, 22 confirmed-absent, 10 generic clauses). For `edu-no-*` rows the absence record is used, not sections the battery hit and set aside.
- **Legal watch:** IA config (119 sections, bare quoted section numbers, since Iowa bills amend "Section 562A.12, ... Code 2026"; lead CFR and 42 U.S.C. § 4852d) with manual recheck items for the three statute pairs in §10, the 2026 acts to check against the Code 2027 compilation, the court and administrative rules, and the CERCLIS name. Iowa is state #29, the first past 28, so it runs on day 1 at 14:00 UTC. `legal-watch-ia.yml` is held until after 2027-02-01; first run 2027-03-01.
- **PARTIAL review:** none; every IA row is VERIFIED.
- **Variables:** new `{{late_fee_monthly_max}}` added to backlog M.14; IA added to the rows for `{{late_fee_daily_amount}}`, `{{nsf_fee}}`, `{{separately_charged_utilities}}`, `{{tenant_maintained_items}}` and `{{maintenance_consideration}}`.
- **Topic questions:** all five added; reference regenerated.
- **SOP 1.22:** all five proposals adopted (rules 14, 16, 19, 26, 30); IA column added.
