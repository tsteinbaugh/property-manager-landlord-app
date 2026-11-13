# Lease clause decision log — Arkansas (AR, state #49)
- **Pass:** run 2026-10-19 (into the early hours of 2026-10-20) in one chat, Arkansas's only Desktop chat (rule 8), resumed once after a session pause. No earlier output files existed, so none were deleted. SOP v1.76. Files Taylor uploaded: `KICKOFF-PROMPT.md`, `lease-clause-sop.md`, `lease-clause-topics.md`, `lease-clauses.csv`, `log-format-example.md`.
- **Settings:** Opus, high effort. Research mode was not used: none of the three rule 9 triggers needed it. Proof of absence ran on the official site's own whole-Code search (§1.5).
- **Outputs:** `lease-clauses-AR-delta.csv` (450 rows: 380 new, 70 existing rows tagged AR; 17 columns, master header, CRLF) and this log.
- **Citation forms:** "Ark. Code Ann. § 18-17-701(a)(1)"; session laws "Act 1052 of 2021"; "Ark. Const. art. 2, § 22" / "Ark. Const. amend. 98, § 6(b)(5)"; "Ark. R. Civ. P. 6(a)"; "Ark. Dist. Ct. R. 9"; "Admin. Order 18".

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A set-up and channel | Done | §1.1 |
| Step B tag-first | Done | §2 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Step D screens 40-53 | Done | §11 |
| Topic canvass | Done | §18 |
| Optional clauses (rule 54) | Done | §6.1 |
| Currency (rule 16) | Done | §1.2 |
| Integrity checks | Done | §8 |
| Independent check (3 rounds) | Done | §13 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A (rule 23):** the attached `lease-clauses.csv` (SHA-256 70611605bab00be1120245fdae1e7f26c52b102b7f42738d47cfe74168c09bb5, 20,155,307 bytes, CRLF row ends, no BOM, 17 columns) has 7,660 rows, 7,551 active (1,234 lease clauses: 91 shared in two or more states, 1,142 single-state, 1 blank-states; 6,317 education rows), across 357 topic keys. No row was tagged AR and no id ended `-ar` before this pass. The file round-trips byte-exact through Python's csv module (QUOTE_MINIMAL, CRLF), which the assembler relies on.
- **Shell network:** blocked by the egress allowlist, so every statute was read through Taylor's linked built-in browser (approved: "Yes (Recommended)", §6.2).
- **Official text:** the Arkansas Code of 1987 Annotated Official Edition on LexisNexis's public-access site for the Bureau of Legislative Research (advance.lexis.com, the state's free official channel; Taylor accepted the site's terms, §6.2). Its currency statement, printed on every section: "Current through the First Extraordinary Session, 2026, including revisions made by the Bureau of Legislative Research under the direction of the Arkansas Code Revision Commission." The Constitution's: "Current through all legislation of the 2025 Regular Session".
- **Channels tried and dropped:**
  - A whole-Code crawl of the official site stopped at the site's document limit: a CAPTCHA appears after roughly 400-500 document views, and only Taylor may solve one (each solve is in §6.2). A full crawl of about 33,000 sections was not feasible.
  - Justia's 2025 Arkansas Code (unofficial) was tried as a whole-Code index for searching; it returned HTTP 429 (rate limiting) after a few hundred pages and the crawl was abandoned. Nothing from Justia is relied on.
  - Plan approved by Taylor ("Yes, solved; use plan (Recommended)"): read the landlord-tenant title whole on the official site, fetch every other needed section from the official site, and use the official site's own whole-Code search engine for every proof of absence.
- **Corpus saved** (`src/`, each record's SHA-256 checked against its text on every load; 2,412 records: ACA 1,762, CONST 650):

| File | Records | What |
|---|---|---|
| `code/parts/ar-lexis-title18-20261019.json` | 901 | Title 18 (Property) whole; TOC list 901/901 |
| `code/parts/ar-lexis-targeted-01.json` | 701 | targeted chapters and sections outside Title 18 (fair housing ch. 16-123, UETA ch. 25-32, military ch. 12-62 subch. 7, service animals ch. 20-14, DTPA ch. 4-88, check law ch. 4-60, towing, fees, local preemption and others); TOC list 701/701 |
| `code/parts/ar-lexis-targeted-02.json` to `-08.json` | 18, 46, 17, 45, 4, 9, 21 | sections requested by the canvass, the scenario screen and the main pass |
| `const/ar-lexis-constitution-20261019.json` | 650 | the Constitution and its amendments; TOC list 650/650 |
| `lexis/ar-lexis-batteries-01.json`, `-02.json` | 437 batteries | every official whole-Code search record (query, count, ids, document paths, positives) |
| `acts/ar-code-sections-amended-2025-2026.json` | 4,232 entries | the Bureau's "Code sections amended" lists: 2025 Regular (4,157), 2026 Fiscal (63), 2026 First Extraordinary (12) |
| `rules/` | 3 PDFs + text | District Court Rules, Rules of Civil Procedure, Administrative Orders (§1.3) |
| `other/` | 2 PDFs + text | Arkansas REALTORS® Association Residential Lease/Rental Agreement (©2017) and its 2004 Landlord-Tenant Handbook (§15) |

- **Text extraction:** each section is saved as the page's own text, with its breadcrumb, heading, subsections and History line; the tool that prints sections for checkers prints whole sections (rule 80). The section reader was rebuilt once mid-pass after a tab reload; the rebuilt reader reproduced four saved sections byte-for-byte before any new section was saved (§1.4).

### §1.2 Currency and dated versions (rule 16)
- **Currency:** the official text is current through the 2026 First Extraordinary Session, the last session before this pass, so every enacted change is compiled. Currency still comes from each section's History line (rule 16): `scripts/currency.py` matched every cited Arkansas Code section (292) against the 2025-2026 "sections amended" lists. 31 cited sections were touched by a 2025 or 2026 act; in all 31 the History line names that act. None is uncompiled.
- **Acts relied on by number:** Act 1052 of 2021 (implied quality standards, § 18-17-502), Act 459 of 2025 (rent, fee and deposit control preemption, §§ 14-16-601, 14-54-1409), Act 238 of 2025 (unlawful squatting, § 5-39-215), Act 313 of 2025 (accessory dwelling units, § 14-56-205), Act 980 of 2017 (constitutional-waiver writing rule, § 4-59-101(a)(7)).
- **Two-version sections:** a handful of sections carry an "Effective until/after September 1, 2026" pair (for example § 4-4A-201, funds transfers, and § 5-14-114). None that a row relies on for landlord-tenant law has two versions now in force differently; where a Lexis result counted two paths for one section, both were opened (§1.5).

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- **Constitution:** all 650 documents loaded into the same index as label CONST before the first constitutional answer, proved against the official table of contents (650/650). Local batteries over it ran with their own controls (a nonsense term returning 0, and "General Assembly" returning hits). Provisions touching tenancy: art. 2, §§ 22-23 (takings), art. 2, § 7 (jury), art. 9 (exemptions and homestead), amend. 89 (17% interest cap on contracts), amend. 98 (medical marijuana: § 3(f)(1) no refusal to lease solely for patient status; § 6(b)(5) a landlord may not prohibit non-smoked medical use). Which provisions bind only the State was recorded where it settled a shared-clause question (art. 2, § 7's "in the manner prescribed by law").
- **Court rules** (downloaded with Taylor's approval, §6.2): District Court Rules (no stated currency; last history entry July 1, 2014), Rules of Civil Procedure ("current through October 1, 2026"), Administrative Orders ("current through January 29, 2026"). Findings used in rows:
  - **Computation of time:** Ark. R. Civ. P. 6(a) excludes intermediate weekends and holidays from periods under 14 days and rolls a last day forward. The 2007 Act incorporates the civil rules for computing time (§ 18-17-303(d)), so its 10-day show-cause period becomes about 14 calendar days even though § 18-17-902(b) says "calendar days" (legal watch, §10). Whether Rule 6(a) reaches the unlawful detainer 3-day notice to quit (§ 18-60-304(3)) is unsettled; rows give the longer count.
  - **Unlawful detainer forum:** no rule or administrative order gives ordinary district courts unlawful detainer jurisdiction, so the condition in § 18-60-306 is unmet; unlawful detainer stays in circuit court unless referred to a state district judge (Admin. Order 18, § 6(b)). 2007-Act evictions may be brought in district court (§ 18-17-901(a)).
  - **District court:** no jury (Ark. Dist. Ct. R. 2(b)); appeals de novo to circuit court within 30 days (Ark. Dist. Ct. R. 9(a)); small-claims limits on attorneys and assignees (Admin. Order 18, § 4).
- **Administrative rules** (Public Service Commission, Department of Health pool rules, State Fire Marshal's Fire Prevention Code adoption) were not read; each row that turns on one says so.

### §1.4 Agents and usage
- **Usage budget (kickoff):** large files were read by script; at most two canvass agents ran at once, each saving after every topic; the independent check ran one agent at a time, at most three rounds (§13).
- **Triage of single-state clauses (rule 26):** two helpers (TA 289 clauses, TB 285) read every single-state clause not naming another state, with `TRIAGE-BRIEF` and the Arkansas law map. Verdicts: 9 TAGGABLE, 565 NOT. Every TAGGABLE verdict was re-read in the main pass (§2.3).
- **Topic canvass (rule 27):** seven slices of 51 topics (C1-C7), never more than two agents at once (C1 with C2, then C3 with C4, C5 with C6, C7 alone). Each saved one JSON line per topic and its rows after every topic.
- **Landlord-scenario screen (rule 34):** one helper, after the canvass.
- **Independent check (rule 80):** one agent at a time (§13).
- **Incidents:**
  - A preview command navigated the crawl tab mid-crawl and lost its in-memory state; recovered with a per-chapter TOC walk in another tab (lesson in Proposed SOP changes).
  - The search tab's result reader missed hits in lettered chapters (e.g. ch. 4-2A), appendix notes and subchapter notes, so some batteries had `count` above parsed ids. The reader was fixed (self-test AR-L-M-005) and all 46 affected batteries were rerun under new names ending "R"; every rerun captured every path, and the new hits were all irrelevant (UCC Article 2A goods leases, funds transfers, Title 19 bond notes, subchapter notes). Rows cite the original battery where its conclusion is unchanged; the rerun records are in `ar-lexis-batteries-02.json`.
  - A tab reload lost the section-fetch tools; rebuilt and verified byte-exact (§1.1).
  - A session pause stopped two canvass helpers; they were relaunched and resumed from their saved answers.

### §1.5 Batteries (rule 19)
- **Official whole-Code search:** 437 battery records on the official engine (`pdtocsearchterm` over the whole Arkansas Code Annotated), each saved before its hits were read. Syntax validated first (AR-L-SYN-01 to -06): quotes do not stem plurals, so both forms were spelled out; AND, OR and w/N work; hits also match a chapter's name in its breadcrumb, so every snippet was read. Recall check: 100% of Title 18 sections containing landlord/lessor words were returned. Controls: a nonsense term returns 0.
- **Positives:** every absence battery names a known positive where one exists; a battery whose positive failed is recorded as failed and not relied on (13 records, each named in its row with the rerun that replaced it).
- **Local batteries** (`scripts/battery.py`, `work/batteries.jsonl`): 9, all over the Constitution, each with the nonsense, "General Assembly" and Constitution controls.
- **Paths vs ids:** every battery cited for an absence has every document path read. Where count exceeded parsed ids after the reader fix, the extra paths were second dated versions of one section or subchapter notes, opened and named in the row.

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,234 active lease clauses were screened. The 91 shared clauses and the one blank-states clause were read one by one in the main pass against the Arkansas text (chs. 18-16, 18-17 and 18-60 subch. 3 read whole, plus the outside-title batteries S01-S25). The 1,142 single-state clauses were triaged (§2.3).
- **Key Arkansas facts that decided most verdicts** (all read section-open):
  - The 2007 Act (ch. 18-17) is a thin partial adoption of the uniform act: no entry-notice, retaliation, landlord-duty (beyond § 18-17-502), owner-disclosure or rules section. Two definitions still point to sections that were never enacted (§ 18-17-301(5) disclosure; § 18-17-301(11) and § 18-17-601(8) rules) (§10).
  - Rent includes late charges (§ 18-17-301(10)); nonpayment lets the landlord terminate after 5 days (§ 18-17-701(b)); other breaches need a 14-day notice and cure (§ 18-17-701(a)); unlawful detainer needs a 3-day notice to quit for nonpayment (§ 18-60-304(3)).
  - Implied quality standards for leases entered or renewed after November 1, 2021 (§ 18-17-502), with the move-in defect form safe harbour, termination as the tenant's sole remedy, no withholding, and no waiver of the chapter (§ 18-17-502(g)).
  - Landlord tort immunity absent an agreement to repair (§ 18-16-110), so a lease promise to repair can create liability.
  - Property left after termination is abandoned (§ 18-16-108(a)); deposits capped at two months' periodic rent "however denominated", returned within 60 days with an itemized notice, with a small-landlord exemption (§§ 18-16-303 to -306).
  - No Arkansas statute voids an exculpatory lease term (AR-L-S01), caps late fees (AR-L-S03), restricts payment methods (AR-L-S05) or requires a separate writing for chores (AR-L-S08); returned checks are capped at a $30 collection fee plus bank charges (§ 4-60-103).

### §2.1 Tagged AR as written (70)
`acceptable-payment-methods`, `addendum-precedence`, `application-of-payments`, `assigned-parking-space`, `association-approval-la`, `common-area-use`, `criminal-activity-ky`, `default-by-tenant`, `due-at-signing`, `early-termination-ks`, `edu-cares-act-notice`, `electronic-notice-ma`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `extended-absence-notice-ks`, `fire-safety-grilling`, `furnishings-included-la`, `governing-law`, `government-fee-reimbursement-ky`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `informal-dispute-resolution-or`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance-nd`, `landlords-access`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `pet-policy`, `possession-delay`, `prohibited-acts-renter-wy`, `prompt-payment-discount-la`, `rent-concession-wi`, `rent-increase-midterm-ky`, `rent-installments-or`, `rent-payment`, `residential-use-only`, `returned-payments`, `scheduled-services-entry-la`, `security-deposit-use`, `services-utilities-provided`, `severability`, `showing-notice-la`, `snow-removal`, `storage-space`, `surrender-end-of-term`, `tax-insurance-escalation-la`, `tenant-caused-damage-nm`, `tenant-death-contact-nh`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-allowance-cap-co`, `utility-payment-evidence`, `utility-service-continuity`

Each tag's reason is in its " | AR: …" notes segment and in `work/tags.jsonl`. Groups of reasons:
- **No Arkansas statute on the point** (contract terms under § 18-17-401(a)): access (consent duty § 18-17-602(a); no notice statute), application of payments, guest, use, occupancy, alterations, disturbance, subletting, pet, parking, storage, utilities, rules-free clauses.
- **Exculpation (rule 52):** the base "Landlord is not liable" variants (`tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided`) are tagged; Arkansas voids no such term.
- **Fee screens (kickoff):** `keys` and `hoa-compliance` checked — no Arkansas closed fee list or lock-change fee rule (the domestic-abuse lock rule § 18-16-112(b)(2) is consistent); `late-fee` (no cap), `returned-payments` ("not to exceed the maximum amount permitted" sits under the $30 check cap), `due-at-signing` (no upfront ban; the deposit cap reaches security money however labelled).
- **Electronic notices and signatures (rule 45):** UETA ch. 25-32 read whole: agreement to transact electronically is required (§ 25-32-105), and a record must be capable of retention (§ 25-32-108).
- **`edu-cares-act-notice`:** tagged as the kickoff asked; it reads correctly for Arkansas (federal rule, no Arkansas conflict).

### §2.2 Clauses read in the main pass and not tagged, with reasons
- **Overrides written instead (Arkansas text differs):**
  - `security-deposit-return` → `security-deposit-return-ar` (60 days, itemized written notice, first-class mail, 180-day returned refund; scope § 18-16-303).
  - `smoking-policy` → `smoking-policy-ar` (the vaporizer ban would prohibit a qualifying patient's non-smoked medical use, which Ark. Const. amend. 98, § 6(b)(5) forbids a landlord to prohibit).
  - `assistance-animal-accommodation` → `assistance-animal-accommodation-ar` (its direct-threat withdrawal sentence reaches trained service animals, which §§ 20-14-303 to -305 let accompany a person with a disability in housing subject only to limits "applicable alike to other persons").
  - `rental-application-accuracy` → `rental-application-accuracy-ar` (a lawful denial of sealed conduct, § 16-90-1417(b)(1), must not count as a misstatement).
  - `appliances-included` → `appliances-included-ar` (first tagged; the independent check found that its promise that Landlord "will maintain" the listed items is the § 18-16-110(1) agreement that removes the landlord's tort immunity, so the override makes the repair promise a choice).
- **Not tagged; another variant or an Arkansas row covers the topic:**
  - `holdover` base: its "maximum amount permitted by applicable law for each day" is self-limiting wording that hides the § 18-17-704(c)(3) and § 18-60-309(b) measures (rule 53); `holdover-ca` tagged and `holdover-rate-ar` offered.
  - `landlord-maintenance`: a lease promise to repair is the § 18-16-110 "agreement" that removes the landlord's tort immunity; `landlord-maintenance-nd` (notice duty only) tagged.
  - `rules-ia`, `rules-wi`: restate Iowa and Wisconsin rules sections Arkansas never enacted; `rules-ar` written.
  - `maintenance-allocation-ks` (Arkansas has no separate-writing chore rule) and the Colorado EV-charging clauses (no Arkansas EV statute, AR-L-S14): not tagged.
  - `tenant-death-contact-nh`: first held back because it pointed to a Handling of Property Left Behind section the Arkansas lease lacked; tagged once `abandoned-property-ar` existed.
  - Other variants not tagged because the base was chosen: `landlords-access-mi`, `default-by-tenant-co` and `-ks-ne`, `early-termination` (fixed-term-only `-ks` chosen, rule 37), `possession-delay-ca`, `surrender-end-of-term` variants, `services-utilities-provided-ks-oh`, the `-ks-oh-ca` exculpation-free variants, `tenant-maintenance-nv`, `utilities-responsibility-ky`, `acceptable-payment-methods-nj`, `returned-payments-ky` (a fixed amount could exceed the $30 cap), `late-fee-ky` and `-ne`, `pet-policy-or`, `parking-vehicle-rules-id`.

### §2.3 Single-state clauses (rule 26 triage)
- **Screened:** 1,142 single-state clauses; those naming another state or its statute in title or body were excluded by script, and the remaining 574 were read in full by TA and TB.
- **Verdicts:** 9 TAGGABLE, 565 NOT. All nine were re-read in the main pass and tagged: `criminal-activity-ky`, `furnishings-included-la`, `government-fee-reimbursement-ky` (Lexis AR-L-M-002), `association-approval-la`, `informal-dispute-resolution-or` (first held back, then tagged under rule 54, §6.1), `prompt-payment-discount-la`, `scheduled-services-entry-la`, `showing-notice-la`, `tax-insurance-escalation-la`.
- **Correction:** TB's reason for `military-air-zone-disclosure-va` said "Title 18 read"; the search behind it was the local corpus only. The NOT verdict stands (Arkansas has no military-air-zone disclosure; Lexis S17 and the canvass).
- **The holdover-rate clauses** (`holdover-rate-*`) were marked NOT because Arkansas has its own holdover measures; the main pass agreed none can be tagged as written but found a gap for the ordinary good-faith holdover outside unlawful detainer, and wrote `holdover-rate-ar` (§6.1).

## §3 New rows (rule_type, basis, citation)
### §3.1 AR lease clauses (20 new)
`lease_clause_basis`: SERVES_LANDLORD 17, CONSTRAINED_TERM 3. Overrides (`supersedes`): 5.
| Row | rule_type | basis | topic_key | supersedes | source | key citations |
|---|---|---|---|---|---|---|
| `abandoned-property-ar` | CONDITIONAL | SERVES_LANDLORD | `abandoned-property` |  | main | § 18-16-108; § 18-60-303; § 18-60-310 |
| `appliances-included-ar` | RECOMMENDED | SERVES_LANDLORD | `appliances-included` | `appliances-included` | main | § 18-16-110; § 18-17-502 |
| `assistance-animal-accommodation-ar` | REQUIRED | SERVES_LANDLORD | `assistance-animal-accommodation` | `assistance-animal-accommodation` | C5 | § 20-14-303; § 20-14-304; § 20-14-305 |
| `carpet-cleaning-ar` | CONDITIONAL | SERVES_LANDLORD | `carpet-cleaning` |  | C2 | § 18-17-401; § 18-16-305 |
| `casualty-termination-ar` | CONDITIONAL | SERVES_LANDLORD | `casualty-termination` |  | main | § 18-17-502; § 18-17-706; § 18-16-305 |
| `condemnation-ar` | CONDITIONAL | SERVES_LANDLORD | `eminent-domain` |  | main | § 22-9-702; § 22-9-701; Ark. Const. art. 2, § 22 |
| `employee-housing-ar` | CONDITIONAL | SERVES_LANDLORD | `tenant-employee-housing` |  | C7 | § 18-17-202; § 18-60-304; § 18-16-303 |
| `government-fines-reimbursement-ar` | CONDITIONAL | SERVES_LANDLORD | `governmental-fines` |  | C7 | § 18-17-401; § 18-17-502; § 18-16-112 |
| `holdover-rate-ar` | CONDITIONAL | CONSTRAINED_TERM | `holdover-rate` |  | main | § 18-17-704; § 18-17-401; § 18-60-309 |
| `move-in-defect-form-ar` | CONDITIONAL | SERVES_LANDLORD | `existing-condition` |  | C2 | § 18-17-502; § 18-17-303 |
| `no-liens-ar` | CONDITIONAL | SERVES_LANDLORD | `construction-liens` |  | C2 | § 18-44-101; § 18-44-107; § 18-44-103 |
| `nonwaiver-acceptance-ar` | CONDITIONAL | SERVES_LANDLORD | `waiver-by-acceptance` |  | main | § 18-17-911; § 18-17-401; § 18-17-701 |
| `owner-manager-disclosure-ar` | CONDITIONAL | SERVES_LANDLORD | `owner-identity-disclosure` |  | C6 | § 18-17-301; § 18-17-303 |
| `owner-occupancy-termination-ar` | CONDITIONAL | SERVES_LANDLORD | `owner-move-in-reservation` |  | C4 | § 18-17-401; § 18-17-704; § 18-17-901 |
| `rental-application-accuracy-ar` | RECOMMENDED | SERVES_LANDLORD | `rental-application-accuracy` | `rental-application-accuracy` | main | § 16-90-1417; § 16-123-201 |
| `repair-notice-method-ar` | CONDITIONAL | CONSTRAINED_TERM | `repair-notice` |  | C3 | § 18-17-502 |
| `rules-ar` | RECOMMENDED | SERVES_LANDLORD | `rules-regulations` |  | C6 | § 18-17-301; § 18-17-601; § 18-17-401 |
| `security-deposit-return-ar` | RECOMMENDED | SERVES_LANDLORD | `security-deposit-return` | `security-deposit-return` | C2 | § 18-16-305; § 18-16-303; § 18-17-704 |
| `smoking-policy-ar` | RECOMMENDED | SERVES_LANDLORD | `smoking-policy` | `smoking-policy` | C2 | § 18-17-502; § 20-27-1804; § 20-27-1803 |
| `us-flag-display-ar` | CONSTRAINED | CONSTRAINED_TERM | `tenant-display-rights` |  | C6 | § 14-1-203; § 14-1-201; § 14-1-204 |

### §3.2 AR education rows (360 new)
By source: C1 51, C2 50, C3 51, C4 51, C5 51, C6 51, C7 51, main 4. By opening of the notes: Confirmed absent 211, Present 145, Not applicable 4. Every row is VERIFIED.
| Row | rule_type | topic_key | source | key citations |
|---|---|---|---|---|
| `edu-abandoned-property-ar` | CONDITIONAL | `abandoned-property` | C3 | § 18-16-108; § 18-60-303; § 18-60-310 |
| `edu-accessory-dwelling-unit-ar` | CONDITIONAL | `accessory-dwelling-unit` | C7 | § 14-56-205; § 18-16-303 |
| `edu-actual-notice-ar` | RECOMMENDED | `actual-notice-method` | C4 | § 18-17-303; § 18-17-502; § 25-32-105 |
| `edu-alterations-ar` | CONSTRAINED | `alterations` | C2 | § 18-17-601; § 18-17-401; § 18-17-502 |
| `edu-appliances-included-ar` | RECOMMENDED | `appliances-included` | C2 | § 18-17-502; § 18-16-110; § 18-17-601 |
| `edu-assigned-parking-space-ar` | RECOMMENDED | `assigned-parking-space` | C5 | § 18-17-301; § 27-50-1101; § 27-51-1305 |
| `edu-assistance-animals-ar` | CONSTRAINED | `assistance-animal-accommodation` | C5 | § 20-14-303; § 20-14-304; § 20-14-305 |
| `edu-attorney-fees-ar` | CONSTRAINED | `attorney-fees` | C3 | § 18-17-701; § 18-17-703; § 18-17-705 |
| `edu-cannabis-ar` | CONSTRAINED | `cannabis` | C5 | Ark. Const. amend. 98, § 3 |
| `edu-cares-act-notice-ar` | CONDITIONAL | `cares-act-notice` | C3 | § 18-17-901; § 18-60-304; § 18-16-101 |
| `edu-casualty-mitigation-waiver-ar` | CONSTRAINED | `casualty-and-mitigation-waivable` | C7 | § 18-17-502; § 18-16-301; § 18-16-112 |
| `edu-children-occupancy-ar` | PROHIBITED/CONSTRAINED | `children-occupancy` | C7 | § 16-123-302; § 16-123-310; § 16-123-311 |
| `edu-code-editions-ar` | RECOMMENDED | `frozen-standard-incorporation` | C7 | § 18-17-502; § 16-123-314; § 16-123-302 |
| `edu-collection-fee-ar` | CONSTRAINED | `collection-fee` | C1 | § 4-60-103; § 18-17-701; § 16-22-308 |
| `edu-common-area-use-ar` | CONSTRAINED | `common-area-use` | C5 | § 14-1-203; § 18-17-601; Ark. Const. amend. 98 |
| `edu-condition-inspection-ar` | RECOMMENDED | `condition-inspection` | C1 | § 18-17-502; § 18-16-303 |
| `edu-confirmed-absences-outside-title-ar` | RECOMMENDED | `confirmed-absences-outside-title` | C4 | § 5-39-215; § 18-17-706; § 17-42-107 |
| `edu-construction-liens-ar` | RECOMMENDED | `construction-liens` | C2 | § 18-44-101; § 18-44-107; § 18-44-103 |
| `edu-consumer-protection-act-ar` | CONSTRAINED | `consumer-protection-act` | C7 | § 4-88-107; § 4-88-102; § 4-88-113 |
| `edu-criminal-activity-ar` | CONDITIONAL | `criminal-activity` | C3 | § 18-17-603; § 18-17-602; § 18-17-701 |
| `edu-cure-and-eviction-grounds-ar` | REQUIRED | `cure-and-eviction-grounds` | C3 | § 18-17-901; § 18-17-701; § 18-60-304 |
| `edu-default-by-tenant-ar` | RECOMMENDED | `default-by-tenant` | C3 | § 18-17-701; § 18-60-304; § 18-17-301 |
| `edu-deposit-escheat-ar` | CONDITIONAL | `deposit-escheat` | C1 | § 18-16-305; § 18-28-201; § 18-28-202 |
| `edu-disability-accommodation-ar` | REQUIRED/PROHIBITED | `disability-accommodation` | C2 | § 16-123-314; § 16-123-306; § 20-14-304 |
| `edu-disaster-duties-ar` | CONSTRAINED | `disaster-duties` | C3 | § 4-88-302; § 4-88-303; § 18-17-502 |
| `edu-disturbance-ar` | RECOMMENDED | `disturbance` | C2 | § 18-17-601; § 18-17-701; § 18-17-702 |
| `edu-due-at-signing-ar` | CONSTRAINED | `due-at-signing` | C1 | § 18-16-304; § 18-17-401; § 18-16-305 |
| `edu-dv-eviction-protection-ar` | PROHIBITED | `dv-eviction-protection` | C3 | § 18-16-112 |
| `edu-dv-law-citations-ar` | RECOMMENDED | `dv-protection-order-chapter-moved` | C4 | § 18-16-112; § 5-14-114; § 5-14-103 |
| `edu-dv-lockchange-ar` | CONDITIONAL | `dv-lockchange` | C3 | § 18-16-112; § 18-17-602 |
| `edu-dv-qualifying-documents-ar` | CONDITIONAL | `dv-qualifying-documents` | C3 | § 18-16-112; § 9-15-205 |
| `edu-early-termination-ar` | CONDITIONAL | `early-termination` | C3 | § 12-62-704; § 12-62-705; § 12-62-702 |
| `edu-electronic-signatures-ar` | RECOMMENDED | `electronic-signatures` | C4 | § 25-32-103; § 25-32-105; § 25-32-107 |
| `edu-emergency-assistance-right-ar` | PROHIBITED | `emergency-assistance-right` | C7 | § 18-16-112; § 18-17-911; § 18-17-912 |
| `edu-employee-housing-ar` | CONDITIONAL | `tenant-employee-housing` | C7 | § 18-17-202; § 18-60-304; § 18-16-301 |
| `edu-entire-agreement-ar` | RECOMMENDED | `entire-agreement` | C5 | § 18-17-401; § 18-17-301; § 18-17-502 |
| `edu-entity-landlord-representation-ar` | CONSTRAINED | `entity-landlord-court-representation` | C3 | § 18-17-902; § 18-17-701; § 16-22-206 |
| `edu-eviction-process-ar` | REQUIRED | `eviction-process` | C3 | § 18-60-302; § 18-60-303; § 18-17-902 |
| `edu-eviction-stays-ar` | CONDITIONAL | `eviction-hardship-stay` | C3 | § 12-62-714; § 18-17-707; § 18-17-910 |
| `edu-exculpatory-clauses-ar` | CONSTRAINED | `exculpatory-clauses` | C7 | § 18-16-110; § 18-17-502; § 18-16-112 |
| `edu-exemptions-no-lease-waiver-ar` | RECOMMENDED | `homestead-waiver` | C4 | § 16-66-211; § 16-66-218; § 18-13-116 |
| `edu-expedited-criminal-eviction-ar` | RECOMMENDED | `expedited-criminal-eviction` | C4 | § 5-74-109; § 16-105-402; § 18-16-502 |
| `edu-fair-housing-ar` | PROHIBITED | `fair-housing` | C7 | § 16-123-310; § 16-123-311; § 16-123-312 |
| `edu-farmland-hunting-rights-ar` | CONDITIONAL | `farmland-hunting-rights` | main | § 18-16-113 |
| `edu-fees-as-rent-ar` | CONSTRAINED | `fees-as-rent` | C1 | § 18-17-301; § 18-16-301; § 18-17-701 |
| `edu-fire-code-standard-ar` | REQUIRED | `fire-code-standard` | C7 | § 14-56-205; § 18-10-101; § 18-11-109 |
| `edu-firearms-ar` | RECOMMENDED | `firearms` | C6 | § 11-5-117; § 16-120-802; Ark. Const. art. 2, § 5 |
| `edu-flag-display-ar` | CONSTRAINED | `tenant-display-rights` | C6 | § 14-1-203; § 14-1-201; § 14-1-204 |
| `edu-foreign-ownership-ar` | CONDITIONAL | `foreign-ownership` | C7 | § 18-11-110; § 18-11-803; § 18-11-802 |
| `edu-governing-law-ar` | RECOMMENDED | `governing-law` | C5 | § 18-17-201; § 18-17-203; § 18-17-502 |
| `edu-guest-policy-ar` | RECOMMENDED | `guest-policy` | C6 | § 18-17-601; § 18-17-701; § 16-123-310 |
| `edu-habitability-materiality-ar` | RECOMMENDED | `habitability-materiality` | C2 | § 18-17-502 |
| `edu-habitability-modifiable-ar` | CONSTRAINED | `habitability-modifiable` | C2 | § 18-17-502 |
| `edu-habitability-presumption-ar` | RECOMMENDED | `habitability-presumption` | C2 | § 18-17-502 |
| `edu-habitability-waiver-ar` | PROHIBITED/CONDITIONAL | `habitability-waiver` | C7 | § 18-17-502 |
| `edu-heating-ar` | REQUIRED/CONSTRAINED | `heating` | C2 | § 18-17-502; § 18-17-601; § 18-17-301 |
| `edu-hoa-ar` | CONDITIONAL | `hoa` | C6 | § 18-13-108; § 18-13-116; § 18-17-202 |
| `edu-hoa-compliance-ar` | RECOMMENDED | `hoa-compliance` | C6 | § 18-17-301; § 18-17-701; § 18-13-116 |
| `edu-holdover-ar` | RECOMMENDED | `holdover` | C4 | § 18-17-704; § 18-17-401; § 18-60-304 |
| `edu-home-business-ar` | RECOMMENDED | `home-business` | C2 | § 14-1-106; § 18-17-603 |
| `edu-inspection-rights-ar` | RECOMMENDED | `inspection-rights` | C6 | § 18-17-602; § 18-17-705 |
| `edu-jury-waiver-ar` | RECOMMENDED | `jury-waiver` | C7 | § 4-59-101; Ark. Const. art. 2, § 7 |
| `edu-keys-ar` | RECOMMENDED | `keys` | C6 | § 18-17-602; § 18-16-112 |
| `edu-landlord-breach-remedy-ar` | RECOMMENDED | `landlord-breach-remedy` | C2 | § 18-17-502; § 18-16-301; § 18-17-706 |
| `edu-landlord-entry-ar` | CONSTRAINED | `landlord-entry` | C3 | § 18-17-602; § 18-17-705; § 18-17-502 |
| `edu-landlord-lien-ar` | CONSTRAINED | `landlord-lien` | C4 | § 18-16-108; § 4-9-109; § 18-60-303 |
| `edu-landlord-maintenance-ar` | REQUIRED/RECOMMENDED | `landlord-maintenance` | C2 | § 18-17-502; § 18-16-110; § 14-235-301 |
| `edu-landlord-remedies-termination-ar` | RECOMMENDED | `landlord-remedies-termination` | C4 | § 18-17-703; § 18-17-701; § 18-60-309 |
| `edu-landlord-self-cure-ar` | CONSTRAINED | `landlord-self-cure` | C4 | § 18-17-601; § 18-17-702; § 18-17-301 |
| `edu-landlord-tenant-act-nonwaivable-ar` | PROHIBITED | `part5-nonwaivable` | C7 | § 18-17-502; § 18-17-603; § 18-16-112 |
| `edu-landlord-tenant-scope-ar` | CONDITIONAL | `scope` | C5 | § 18-17-201; § 18-17-202; § 18-17-301 |
| `edu-late-fee-ar` | CONSTRAINED | `late-fee` | C1 | § 18-17-301; § 18-17-701; § 18-17-911 |
| `edu-law-enforcement-cooperation-ar` | PROHIBITED/RECOMMENDED | `law-enforcement-cooperation` | C6 | § 18-16-112; § 18-17-602 |
| `edu-lead-based-paint-ar` | REQUIRED/CONDITIONAL | `lead-based-paint` | C6 | § 20-27-607; § 20-27-608 |
| `edu-lead-state-law-ar` | CONDITIONAL/PROHIBITED | `lead-state-notices` | C6 | § 20-27-605; § 20-27-606; § 20-27-607 |
| `edu-limitation-of-actions-ar` | RECOMMENDED | `limitation-of-actions` | main | § 16-56-111; § 16-56-105 |
| `edu-liquidated-damages-ar` | RECOMMENDED | `liquidated-damages` | C4 | § 18-60-309 |
| `edu-maintenance-duty-shift-ar` | CONSTRAINED | `maintenance-duty-shift` | C3 | § 18-17-502; § 18-17-301; § 18-17-601 |
| `edu-meth-lab-property-ar` | CONDITIONAL/PROHIBITED | `meth-disclosure` | C6 | § 8-7-1403; § 8-7-1402; § 8-7-1404 |
| `edu-mobile-home-lot-unoccupied-ar` | REQUIRED | `abandoned-property` | main | § 18-16-111; § 18-17-301; § 18-60-301 |
| `edu-municipal-utility-lien-ar` | RECOMMENDED | `municipal-utility-lien` | C2 | § 14-234-603; § 14-234-602; § 14-234-605 |
| `edu-no-abandonment-mitigation-ar` | RECOMMENDED | `abandonment-and-mitigation` | C3 | § 18-17-703; § 18-17-701; § 18-17-704 |
| `edu-no-acceptable-payment-methods-ar` | RECOMMENDED | `acceptable-payment-methods` | C1 | § 18-17-401; § 18-17-706 |
| `edu-no-addendum-precedence-rule-ar` | RECOMMENDED | `addendum-precedence` | C4 | § 18-16-411; § 18-17-301; § 18-17-502 |
| `edu-no-adverse-proceeding-notice-ar` | RECOMMENDED | `adverse-proceeding-notice` | C4 | § 14-54-1706 |
| `edu-no-alarm-tampering-fee-ar` | CONSTRAINED | `alarm-tampering-fee` | C7 | § 18-17-502; § 18-17-301; § 18-17-701 |
| `edu-no-algorithmic-rent-setting-ar` | RECOMMENDED | `algorithmic-rent-setting` | C1 | § 14-16-601 |
| `edu-no-alt-housing-duty-ar` | RECOMMENDED | `alt-housing` | C2 | § 18-16-301; § 18-17-502 |
| `edu-no-animal-care-entry-right-ar` | RECOMMENDED | `animal-care-access` | C5 | § 18-17-602; § 18-16-108; § 20-14-304 |
| `edu-no-appliance-presumption-ar` | RECOMMENDED | `appliances-excluded` | C2 | § 18-17-601; § 18-17-401; § 18-17-502 |
| `edu-no-application-fee-rules-ar` | RECOMMENDED | `application-fees` | C1 | § 14-16-601; § 14-54-1409 |
| `edu-no-application-of-payments-ar` | RECOMMENDED | `application-of-payments` | C1 | § 18-17-301; § 18-17-701 |
| `edu-no-asbestos-rule-ar` | RECOMMENDED | `asbestos-hazards` | C7 | § 20-27-1003; § 20-27-1006; § 20-27-1001 |
| `edu-no-association-disclosure-ar` | RECOMMENDED | `association-obligations-disclosure` | C6 | § 18-13-108; § 18-13-110 |
| `edu-no-balcony-inspection-ar` | RECOMMENDED | `balcony-inspection` | C7 | § 18-13-102; § 18-17-502; § 18-16-110 |
| `edu-no-bed-bug-disclosure-ar` | RECOMMENDED | `bed-bug-disclosure` | C6 | § 18-17-502; § 18-16-110 |
| `edu-no-bed-bug-rule-ar` | RECOMMENDED | `bed-bug-cooperation` | C2 | § 18-17-601; § 18-17-602; § 18-17-502 |
| `edu-no-benefit-delay-defense-ar` | RECOMMENDED | `social-security-defense` | C4 | § 18-17-701; § 18-60-307; § 12-62-714 |
| `edu-no-carpet-cleaning-rule-ar` | RECOMMENDED | `carpet-cleaning` | C2 | § 18-17-401; § 18-17-601; § 18-16-305 |
| `edu-no-casualty-termination-ar` | RECOMMENDED | `casualty-termination` | C3 | § 18-17-502; § 18-17-706 |
| `edu-no-chemical-warning-ar` | RECOMMENDED | `prop65-rental-warning` | C6 | § 18-17-502; § 18-16-110 |
| `edu-no-chore-writing-rule-ar` | RECOMMENDED | `landscaping-irrigation` | C2 | § 18-17-401; § 18-17-502; § 18-17-702 |
| `edu-no-co-tenant-liability-rule-ar` | RECOMMENDED | `joint-liability` | C2 | § 18-16-112; § 18-11-105; § 18-60-101 |
| `edu-no-code-order-disclosure-ar` | RECOMMENDED | `inspection-condemnation-disclosure` | C6 | § 14-56-203; § 18-17-502; § 18-16-110 |
| `edu-no-code-variance-notice-ar` | RECOMMENDED | `sanitary-code-variance` | C6 | § 18-17-502 |
| `edu-no-cold-weather-vacate-notice-ar` | RECOMMENDED | `cold-weather-vacate-notice` | C2 | § 18-17-601 |
| `edu-no-common-area-lighting-rule-ar` | RECOMMENDED | `common-area-lighting` | C2 | § 18-16-110; § 20-22-504 |
| `edu-no-condemned-rent-bar-ar` | RECOMMENDED | `condemned-premises-rent-bar` | C2 | § 14-54-1705; § 18-17-502 |
| `edu-no-confession-of-judgment-rule-ar` | RECOMMENDED | `confession-of-judgment` | C7 | § 16-65-301; § 16-65-302; § 4-92-105 |
| `edu-no-confirmed-absences-habitability-ar` | RECOMMENDED | `confirmed-absences-habitability` | C2 | § 18-17-502; § 14-54-104; § 14-54-105 |
| `edu-no-confirmed-absences-misc-ar` | RECOMMENDED | `confirmed-absences-misc` | C4 | § 18-16-404; § 18-48-703; § 5-39-215 |
| `edu-no-contamination-disclosure-ar` | RECOMMENDED | `hazardous-contamination-disclosure` | C6 | § 8-7-1406; § 18-17-502; § 18-16-110 |
| `edu-no-conversion-notice-ar` | RECOMMENDED | `conversion-notice` | C3 | § 18-17-704 |
| `edu-no-deposit-cost-schedule-ar` | CONSTRAINED | `deposit-cost-schedule` | C1 | § 18-16-305; § 18-16-306; § 18-16-303 |
| `edu-no-deposit-installments-ar` | RECOMMENDED | `deposit-installments` | C1 | § 18-16-304; § 18-16-303 |
| `edu-no-deposit-last-month-rent-ar` | CONSTRAINED | `deposit-last-month-rent` | C1 | § 18-16-304; § 18-16-305; § 12-62-705 |
| `edu-no-deposit-surrender-notice-ar` | RECOMMENDED | `deposit-surrender-notice` | C1 | § 18-16-305; § 18-16-303 |
| `edu-no-designated-repairer-ar` | RECOMMENDED | `designated-repairer` | C2 | § 14-54-104; § 14-54-105; § 18-17-502 |
| `edu-no-disaster-guest-rule-ar` | RECOMMENDED | `disaster-displaced-guests` | C5 | § 18-60-304; § 16-123-307; § 4-88-303 |
| `edu-no-double-letting-ar` | RECOMMENDED | `double-letting` | C2 | § 18-17-401 |
| `edu-no-drug-free-housing-addendum-ar` | RECOMMENDED | `drug-free-housing-addendum` | C3 | § 16-105-402; § 18-16-501; § 18-16-112 |
| `edu-no-drywall-disclosure-ar` | RECOMMENDED | `defective-drywall-disclosure` | C6 | § 18-17-502; § 18-16-110 |
| `edu-no-dv-confidentiality-rule-ar` | RECOMMENDED | `dv-confidentiality` | C7 | § 18-16-112; § 27-16-811 |
| `edu-no-dv-deposit-timing-ar` | RECOMMENDED | `dv-deposit-timing` | C1 | § 18-16-305; § 18-16-112; § 18-16-303 |
| `edu-no-dv-lease-termination-ar` | RECOMMENDED | `dv-lease-termination` | C3 | § 18-16-112 |
| `edu-no-electric-submeter-disclosure-ar` | RECOMMENDED | `electric-submetering-disclosure` | C6 | — |
| `edu-no-emergency-contact-ar` | RECOMMENDED | `emergency-contact` | C4 | § 18-17-502; § 18-17-401 |
| `edu-no-eminent-domain-tenancy-ar` | RECOMMENDED | `eminent-domain` | C3 | § 22-9-701; § 22-9-702; Ark. Const. art. 2, § 22 |
| `edu-no-employee-screening-ar` | RECOMMENDED | `employee-screening` | C2 | § 14-54-1705 |
| `edu-no-energy-data-release-ar` | RECOMMENDED | `energy-data-release` | C5 | § 18-17-601; Ark. Const. amend. 98 |
| `edu-no-environmental-event-termination-ar` | RECOMMENDED | `environmental-event-termination` | C3 | § 18-17-502; § 18-17-704 |
| `edu-no-ev-charger-removal-rule-ar` | RECOMMENDED | `ev-charging-end-of-tenancy` | C5 | § 18-16-108; § 18-16-305; § 27-50-1224 |
| `edu-no-ev-charging-requirements-ar` | RECOMMENDED | `ev-charging-requirements` | C5 | § 23-1-101; § 27-50-1224; Ark. Const. amend. 98 |
| `edu-no-ev-charging-right-ar` | RECOMMENDED | `ev-charging` | C5 | § 23-1-101; § 27-50-1224; Ark. Const. amend. 98 |
| `edu-no-ev-charging-shared-area-ar` | RECOMMENDED | `ev-charging-shared-area` | C5 | § 27-50-1224; § 23-1-101; § 27-50-1101 |
| `edu-no-eviction-penalty-rule-ar` | RECOMMENDED | `eviction-penalty-clause-ban` | C7 | § 18-16-508; § 18-17-701; § 18-17-703 |
| `edu-no-eviction-record-sealing-ar` | RECOMMENDED | `eviction-record-sealing` | C3 | — |
| `edu-no-eviction-service-party-ar` | RECOMMENDED | `eviction-service-party` | C3 | § 18-17-902; § 18-17-903; § 18-60-307 |
| `edu-no-expedited-deposit-ar` | RECOMMENDED | `expedited-deposit-disposition` | C1 | § 18-16-305; § 18-16-303 |
| `edu-no-extended-absence-notice-ar` | RECOMMENDED | `extended-absence-notice` | C2 | § 18-17-303; § 18-11-105; § 18-17-603 |
| `edu-no-family-child-care-rule-ar` | RECOMMENDED | `family-child-care` | C2 | § 18-17-603; § 14-1-106; § 16-123-310 |
| `edu-no-fee-in-lieu-of-deposit-ar` | RECOMMENDED | `fee-in-lieu-of-deposit` | C1 | § 18-16-304; § 18-16-303 |
| `edu-no-fee-transparency-ar` | RECOMMENDED | `fee-transparency` | C1 | § 4-88-107; § 4-88-102; § 4-86-112 |
| `edu-no-fee-unprovided-service-ar` | RECOMMENDED | `fee-unprovided-service` | C1 | § 18-17-302 |
| `edu-no-flood-disclosure-ar` | RECOMMENDED | `flood-disclosure` | C6 | § 18-17-502; § 18-16-110 |
| `edu-no-for-cause-eviction-ar` | RECOMMENDED | `for-cause-eviction` | C4 | § 18-17-704; § 18-17-901; § 18-16-112 |
| `edu-no-foreclosure-disclosure-ar` | RECOMMENDED | `foreclosure-disclosure` | C6 | — |
| `edu-no-foreclosure-tenant-rule-ar` | RECOMMENDED | `foreclosure` | C4 | § 18-16-302; § 18-16-303; § 12-62-716 |
| `edu-no-forfeiture-relief-ar` | RECOMMENDED | `forfeiture-redemption` | C4 | § 18-16-407; § 18-48-706; § 18-16-101 |
| `edu-no-furnished-rental-rule-ar` | RECOMMENDED | `furnishings-included` | C1 | § 18-16-304; § 18-16-305; § 18-16-303 |
| `edu-no-good-cause-notice-ar` | RECOMMENDED | `good-cause-notice` | C6 | § 18-17-704 |
| `edu-no-government-fee-reimbursement-ar` | RECOMMENDED | `government-fee-reimbursement` | C1 | § 18-17-401; § 18-17-704; § 17-42-107 |
| `edu-no-governmental-fines-rule-ar` | CONSTRAINED | `governmental-fines` | C7 | § 18-17-401; § 18-17-502; § 18-16-112 |
| `edu-no-grill-statute-ar` | RECOMMENDED | `fire-safety-grilling` | C6 | § 18-17-601; § 18-17-701 |
| `edu-no-guarantor-rule-ar` | RECOMMENDED | `guarantor-renewal` | C4 | § 18-16-304; § 18-16-303; § 4-59-101 |
| `edu-no-guest-day-limit-ar` | RECOMMENDED | `guest-policy-day-limit` | C6 | § 18-17-301; § 18-17-701 |
| `edu-no-guest-rights-ar` | RECOMMENDED | `guest-rights` | C6 | § 18-16-110; § 18-17-601; § 18-16-112 |
| `edu-no-habitability-lease-statement-ar` | RECOMMENDED | `habitability-statement` | C2 | § 18-17-502 |
| `edu-no-health-district-rules-ar` | CONDITIONAL | `health-district-rental-rules` | C2 | § 20-27-607; § 14-56-205; § 20-27-608 |
| `edu-no-holding-deposit-rule-ar` | RECOMMENDED | `holding-deposit` | C1 | § 18-16-301; § 18-16-304; § 14-16-601 |
| `edu-no-holdover-rate-cap-ar` | RECOMMENDED | `holdover-rate` | C4 | § 18-17-704; § 18-60-304; § 18-60-309 |
| `edu-no-immigration-status-rule-ar` | RECOMMENDED | `immigration-status` | C7 | § 16-123-204; § 16-123-310; § 18-11-110 |
| `edu-no-infirmity-termination-ar` | RECOMMENDED | `infirmity-termination` | C4 | § 18-17-704; § 12-62-705; § 18-17-502 |
| `edu-no-informal-dispute-resolution-ar` | RECOMMENDED | `informal-dispute-resolution` | C5 | § 18-17-104; § 18-17-502; Ark. Const. amend. 98 |
| `edu-no-initials-requirement-ar` | RECOMMENDED | `lease-notice-initial-requirement` | C5 | § 18-17-502; § 18-16-404; § 18-48-703 |
| `edu-no-inspection-notice-penalty-ar` | RECOMMENDED | `inspection-notice-penalty` | C1 | § 18-16-306; § 18-16-303 |
| `edu-no-key-control-policy-ar` | RECOMMENDED | `key-control-policy` | C3 | § 14-54-1705; § 18-17-602; § 18-16-112 |
| `edu-no-knowing-use-penalty-ar` | RECOMMENDED | `knowing-use-penalty` | C7 | § 18-17-502; § 18-16-112; § 16-123-206 |
| `edu-no-landlord-insurance-mandate-ar` | RECOMMENDED | `landlord-liability-insurance` | C6 | § 18-16-110 |
| `edu-no-landlord-registration-ar` | RECOMMENDED | `landlord-registration` | C5 | § 17-42-107; § 17-42-104; § 17-42-103 |
| `edu-no-late-fee-limit-ar` | CONSTRAINED | `late-fee-limit` | C1 | § 18-16-411 |
| `edu-no-lead-safe-certificate-ar` | RECOMMENDED | `lead-safe-certification` | C6 | § 20-27-2503; § 20-27-602; § 20-27-608 |
| `edu-no-lease-arbitration-rule-ar` | RECOMMENDED | `binding-arbitration` | C4 | § 18-17-901; § 18-60-306; § 16-108-206 |
| `edu-no-lease-auto-renewal-rule-ar` | RECOMMENDED | `automatic-renewal` | C4 | § 4-86-112; § 4-86-109; § 18-17-401 |
| `edu-no-lease-completeness-rule-ar` | RECOMMENDED | `lease-completeness` | C5 | § 18-17-301; § 18-17-401; Ark. Const. amend. 98 |
| `edu-no-lease-content-requirements-ar` | RECOMMENDED | `lease-content-requirements` | C7 | § 18-17-401; § 18-17-301; § 18-17-502 |
| `edu-no-lease-copy-rule-ar` | RECOMMENDED | `lease-copy` | C5 | § 25-32-108; § 18-17-502; Ark. Const. amend. 98 |
| `edu-no-lease-term-limits-ar` | RECOMMENDED | `lease-term-limitation` | C5 | § 18-17-401; § 18-17-704; § 18-17-502 |
| `edu-no-lease-type-parity-ar` | RECOMMENDED | `lease-type-parity` | C1 | § 18-17-401; § 18-17-704 |
| `edu-no-lease-type-size-ar` | RECOMMENDED | `lease-type-size` | C5 | § 18-16-404; § 18-16-401; Ark. Const. amend. 98 |
| `edu-no-lease-voiding-statute-ar` | RECOMMENDED | `purpose-limitation` | C2 | § 5-74-109; § 16-105-402; § 18-16-502 |
| `edu-no-lockout-ar` | PROHIBITED | `lockout-for-rent-delinquency` | C4 | § 18-16-112; § 18-17-602; § 18-16-405 |
| `edu-no-meter-conservation-charge-ar` | RECOMMENDED | `meter-conservation-charge` | C6 | — |
| `edu-no-military-zone-disclosure-ar` | RECOMMENDED | `military-air-zone-disclosure` | C6 | — |
| `edu-no-minor-defendant-rule-ar` | RECOMMENDED | `minor-tenant-filing` | C4 | § 18-11-105; § 18-17-906; § 18-17-301 |
| `edu-no-mold-disclosure-ar` | RECOMMENDED | `mold-disclosure` | C6 | § 18-17-502; § 18-16-110 |
| `edu-no-move-out-form-rule-ar` | RECOMMENDED | `notice-to-vacate-additional-terms` | C5 | § 18-17-704; § 18-16-305; § 18-17-502 |
| `edu-no-nonrefundable-deposit-notice-ar` | CONSTRAINED | `nonrefundable-deposit-notice` | C1 | § 18-16-304; § 18-16-305; § 18-16-303 |
| `edu-no-nonrefundable-separate-notice-ar` | CONSTRAINED | `nonrefundable-deposit-separate-notice` | C1 | § 18-16-304; § 18-16-305; § 18-16-303 |
| `edu-no-nonresident-owner-agent-ar` | RECOMMENDED | `nonresident-owner-agent` | C5 | § 17-42-107; § 17-42-103; § 18-17-303 |
| `edu-no-notice-fee-rule-ar` | RECOMMENDED | `notice-service-fee` | C4 | § 18-17-301; § 18-17-701; § 18-17-401 |
| `edu-no-notice-to-quit-waiver-ar` | RECOMMENDED | `notice-to-quit-waiver` | C4 | § 18-60-304; § 18-17-502; § 18-17-901 |
| `edu-no-occupancy-certificate-disclosure-ar` | RECOMMENDED | `certificate-of-occupancy-disclosure` | C6 | § 18-17-502 |
| `edu-no-ordnance-demolition-meter-disclosure-ar` | RECOMMENDED | `ordnance-demolition-meter-disclosures` | C6 | § 18-17-704 |
| `edu-no-other-landlord-facilities-ar` | RECOMMENDED | `other-landlord-facilities` | C3 | § 18-17-502; § 18-17-602; § 20-22-504 |
| `edu-no-owner-identity-disclosure-ar` | RECOMMENDED | `owner-identity-disclosure` | C6 | § 18-17-301; § 18-17-303 |
| `edu-no-owner-move-in-rule-ar` | RECOMMENDED | `owner-move-in-reservation` | C4 | § 18-17-704; § 18-17-401 |
| `edu-no-parking-rules-notice-ar` | RECOMMENDED | `parking-rules-notice` | C5 | § 27-51-1305; § 27-50-1101; § 14-1-106 |
| `edu-no-periodic-services-entry-ar` | RECOMMENDED | `periodic-services-entry` | C3 | § 18-17-602 |
| `edu-no-pest-control-notice-ar` | RECOMMENDED | `pest-control-notice` | C6 | § 18-17-602 |
| `edu-no-pet-eviction-fact-sheet-ar` | RECOMMENDED | `pet-eviction-fact-sheet` | C5 | § 20-14-304; Ark. Const. amend. 98 |
| `edu-no-pet-insurance-rule-ar` | RECOMMENDED | `pet-insurance-requirement` | C5 | § 20-14-304; Ark. Const. amend. 98 |
| `edu-no-plain-language-lease-law-ar` | RECOMMENDED | `plain-language-consumer-statement` | C5 | § 4-88-107; § 18-17-502; Ark. Const. amend. 98 |
| `edu-no-political-access-ar` | RECOMMENDED | `political-access` | C6 | — |
| `edu-no-portable-cooling-right-ar` | RECOMMENDED | `portable-cooling-device` | C6 | § 18-17-502; § 18-17-601 |
| `edu-no-portable-solar-right-ar` | RECOMMENDED | `portable-solar` | C6 | — |
| `edu-no-possession-bond-ar` | RECOMMENDED | `possession-bond` | C4 | § 18-60-307; § 18-17-707; § 18-17-910 |
| `edu-no-possession-delay-rule-ar` | RECOMMENDED | `possession-delay` | C4 | § 18-16-305; § 18-17-502; § 18-17-704 |
| `edu-no-property-tax-statement-ar` | RECOMMENDED | `property-tax-rent-disclosure` | C6 | § 8-6-212 |
| `edu-no-protected-class-inquiry-ban-ar` | RECOMMENDED | `protected-class-inquiry-ban` | C7 | § 16-123-205; § 16-123-311; § 16-123-204 |
| `edu-no-quiet-possession-statute-ar` | RECOMMENDED | `quiet-possession` | C3 | § 18-16-509; § 18-60-302; § 18-60-303 |
| `edu-no-radiator-cover-rule-ar` | RECOMMENDED | `steam-radiator-covers` | C7 | § 18-17-502 |
| `edu-no-radon-disclosure-ar` | RECOMMENDED | `radon-disclosure` | C6 | § 18-17-502; § 18-16-110 |
| `edu-no-recycling-notice-ar` | RECOMMENDED | `recycling-notice` | C6 | § 8-6-212; § 8-6-211 |
| `edu-no-redemption-right-ar` | RECOMMENDED | `redemption` | C4 | § 18-17-911; § 18-60-307 |
| `edu-no-religious-display-right-ar` | RECOMMENDED | `religious-cultural-display` | C6 | § 16-123-310; § 16-123-107; § 16-123-306 |
| `edu-no-rent-concession-ar` | RECOMMENDED | `rent-concession` | C1 | § 18-17-401 |
| `edu-no-rent-demand-bar-ar` | RECOMMENDED | `rent-demand-bar` | C1 | § 18-17-502; § 18-16-301; § 18-17-706 |
| `edu-no-rent-escalation-rule-ar` | RECOMMENDED | `rent-escalation` | C1 | § 18-17-401; § 18-17-704; § 20-27-608 |
| `edu-no-rent-increase-notice-ar` | RECOMMENDED | `rent-increase-notice` | C1 | § 18-17-704; § 18-17-401; § 4-88-303 |
| `edu-no-rent-installments-rule-ar` | RECOMMENDED | `rent-installments` | C1 | § 18-17-401 |
| `edu-no-rent-receipt-anti-waiver-ar` | RECOMMENDED | `rent-receipt-anti-waiver` | C3 | § 18-17-502; § 18-17-301; § 18-16-302 |
| `edu-no-rent-reporting-ar` | RECOMMENDED | `rent-reporting` | C1 | — |
| `edu-no-rental-application-remedy-ar` | RECOMMENDED | `rental-application-accuracy` | C4 | § 18-17-701; § 16-90-1417; § 16-123-201 |
| `edu-no-renters-insurance-rules-ar` | RECOMMENDED | `renters-insurance-rules` | C5 | § 18-17-502; § 18-16-110; Ark. Const. amend. 98 |
| `edu-no-repair-cost-termination-ar` | RECOMMENDED | `repair-cost-termination` | C4 | § 18-17-701; § 18-17-502; § 18-16-301 |
| `edu-no-required-fees-rule-ar` | RECOMMENDED | `required-fees` | C1 | § 18-17-401; § 18-17-704 |
| `edu-no-retaliation-statute-ar` | PROHIBITED/RECOMMENDED | `retaliation` | C4 | § 18-16-112; § 20-27-608; § 16-123-208 |
| `edu-no-rights-guide-ar` | RECOMMENDED | `rights-responsibilities-guide` | C6 | — |
| `edu-no-seasonal-tenancy-rule-ar` | RECOMMENDED | `seasonal-tenancy` | C4 | § 14-56-205; § 18-17-202; § 18-17-704 |
| `edu-no-security-deposit-holding-ar` | RECOMMENDED | `security-deposit-holding` | C1 | § 18-16-302; § 18-16-303 |
| `edu-no-security-deposit-interest-ar` | RECOMMENDED | `security-deposit-interest` | C1 | § 18-16-303; § 18-28-201 |
| `edu-no-security-deposit-standards-ar` | RECOMMENDED | `security-deposit-standards` | C2 | § 18-17-502; § 18-16-304; § 18-16-303 |
| `edu-no-security-devices-ar` | RECOMMENDED | `security-devices` | C3 | § 18-17-602; § 18-16-112; § 18-17-502 |
| `edu-no-senior-housing-work-card-ar` | RECOMMENDED | `senior-housing-work-card` | C3 | § 16-123-307 |
| `edu-no-sfr-occupancy-disclosure-ar` | RECOMMENDED | `sfr-occupancy-disclosure` | C6 | — |
| `edu-no-shoreline-disclosure-ar` | RECOMMENDED | `shoreline-access-disclosure` | C7 | Ark. Const. amend. 98 |
| `edu-no-shutdown-rent-protection-ar` | RECOMMENDED | `shutdown-rent-protection` | C1 | — |
| `edu-no-single-family-zone-lease-limit-ar` | RECOMMENDED | `single-family-zone-lease-limit` | C7 | § 14-56-205; § 16-123-204; § 16-123-306 |
| `edu-no-smart-access-ar` | RECOMMENDED | `smart-access` | C3 | § 18-17-602; § 18-16-112 |
| `edu-no-smoke-drift-waiver-ar` | RECOMMENDED | `smoke-drift-waiver` | C6 | § 20-27-1801; § 20-27-1809; § 20-27-1803 |
| `edu-no-snow-removal-statute-ar` | RECOMMENDED | `snow-removal` | C6 | § 18-16-110 |
| `edu-no-source-of-income-protection-ar` | RECOMMENDED | `source-of-income` | C7 | § 16-123-310; § 16-123-204; § 16-123-314 |
| `edu-no-sprinkler-disclosure-ar` | RECOMMENDED | `sprinkler-disclosure` | C7 | — |
| `edu-no-sprinkler-retrofit-duty-ar` | RECOMMENDED | `fire-sprinkler-duty` | C7 | — |
| `edu-no-stove-refrigerator-duty-ar` | RECOMMENDED | `stove-refrigerator` | C3 | § 18-17-301; § 18-17-401; § 18-17-704 |
| `edu-no-sublet-statute-ar` | RECOMMENDED | `sublet-assign` | C2 | § 16-123-302; § 18-17-301; § 18-16-301 |
| `edu-no-submeter-interruption-ar` | RECOMMENDED | `utility-interruption-submeter` | C2 | § 18-17-502; § 18-17-701 |
| `edu-no-subsidy-inspection-rule-ar` | RECOMMENDED | `subsidized-inspection-refusal` | C7 | § 18-17-602 |
| `edu-no-subsidy-late-fee-ar` | RECOMMENDED | `subsidy-late-fee` | C1 | — |
| `edu-no-subsidy-proration-rule-ar` | RECOMMENDED | `subsidy-habitability-proration` | C1 | § 18-17-502 |
| `edu-no-substandard-property-receivership-ar` | RECOMMENDED | `substandard-property-receivership` | C3 | § 18-17-502; § 14-54-1705 |
| `edu-no-tax-escalation-rule-ar` | RECOMMENDED | `tax-escalation` | C1 | § 18-17-401; § 18-17-704 |
| `edu-no-telecom-access-ar` | RECOMMENDED | `telecom-access` | C3 | — |
| `edu-no-tenant-bankruptcy-rule-ar` | RECOMMENDED | `tenant-bankruptcy` | C4 | § 16-66-217; § 16-66-218 |
| `edu-no-tenant-camera-rule-ar` | RECOMMENDED | `tenant-security-cameras` | C6 | § 5-16-101 |
| `edu-no-tenant-death-rule-ar` | RECOMMENDED | `tenant-death` | C4 | § 18-16-110; § 18-16-108; § 18-17-704 |
| `edu-no-tenant-forward-proceedings-ar` | RECOMMENDED | `tenant-forward-proceedings` | C2 | § 18-16-505; § 18-17-401; § 18-17-701 |
| `edu-no-tenant-info-disclosure-rule-ar` | RECOMMENDED | `tenant-confidential-information` | C7 | § 18-16-412; § 4-110-104 |
| `edu-no-tenant-insurance-claim-rule-ar` | RECOMMENDED | `tenant-insurance-claims` | C2 | § 18-16-110; § 18-17-502 |
| `edu-no-tenant-law-sunset-ar` | RECOMMENDED | `tpa-sunset` | C5 | § 18-17-802; § 18-17-502; § 18-17-701 |
| `edu-no-tenant-organizing-right-ar` | RECOMMENDED | `tenant-right-to-organize` | C7 | § 14-1-203; § 18-17-202; § 18-17-301 |
| `edu-no-tenant-portal-rule-ar` | RECOMMENDED | `tenant-portal` | C5 | § 18-17-401; § 25-32-105; § 25-32-108 |
| `edu-no-tenant-rights-statement-ar` | RECOMMENDED | `tenant-rights-statement` | C7 | § 18-17-502 |
| `edu-no-term-change-notice-ar` | RECOMMENDED | `term-change-notice` | C5 | § 18-17-704; § 18-17-401; § 18-17-301 |
| `edu-no-tpa-exemption-notice-ar` | RECOMMENDED | `tpa-exemption-notice` | C7 | § 14-16-601; § 14-54-1409; § 18-16-303 |
| `edu-no-tpa-notice-ar` | RECOMMENDED | `tpa-notice` | C7 | § 18-16-304; § 14-54-1409; § 14-16-601 |
| `edu-no-translation-duty-ar` | RECOMMENDED | `translation-duty` | C5 | § 4-88-107; Ark. Const. amend. 98 |
| `edu-no-truth-in-renting-ar` | RECOMMENDED | `truth-in-renting` | C7 | § 18-17-502 |
| `edu-no-unbundled-parking-rule-ar` | RECOMMENDED | `unbundled-parking` | C5 | § 18-16-301; § 18-17-301; § 27-51-1305 |
| `edu-no-unconscionability-statute-ar` | RECOMMENDED | `unconscionability` | C7 | § 4-2A-108; § 4-88-107; § 18-17-101 |
| `edu-no-utility-allowance-cap-ar` | RECOMMENDED | `utility-allowance-cap` | C3 | § 18-17-301; § 18-17-701; § 23-1-101 |
| `edu-no-utility-apportionment-ar` | RECOMMENDED | `utility-apportionment` | C3 | § 18-17-301; § 18-17-701; § 23-1-101 |
| `edu-no-utility-deposit-rule-ar` | RECOMMENDED | `utility-deposit-return` | C2 | § 18-16-304; § 18-17-301; § 18-16-305 |
| `edu-no-utility-disclosure-attachment-ar` | RECOMMENDED | `utility-disclosure-attachment` | C7 | § 18-17-401 |
| `edu-no-utility-disconnection-notice-authorization-ar` | RECOMMENDED | `utility-disconnection-notice-authorization` | C3 | § 18-17-701; § 18-17-502 |
| `edu-no-utility-landlord-account-ar` | RECOMMENDED | `utility-landlord-account` | C3 | § 18-17-502 |
| `edu-no-utility-shutoff-statute-ar` | PROHIBITED/RECOMMENDED | `utility-shutoff-statute` | C3 | § 18-17-502; § 18-60-302 |
| `edu-no-utility-submetering-disclosure-ar` | RECOMMENDED | `utility-submetering-disclosure` | C3 | § 18-17-301; § 18-17-701; § 23-1-101 |
| `edu-no-utility-transfer-ar` | RECOMMENDED | `utility-transfer` | C3 | § 18-17-701; § 18-17-502; § 18-60-302 |
| `edu-no-veterans-incentive-ar` | RECOMMENDED | `veterans-incentive` | C7 | § 16-123-204; § 16-123-310 |
| `edu-no-water-heater-rule-ar` | RECOMMENDED | `water-heater-temperature` | C7 | § 18-17-502 |
| `edu-no-waterbed-rule-ar` | RECOMMENDED | `waterbed` | C6 | § 18-17-601; § 18-16-303 |
| `edu-no-well-testing-ar` | RECOMMENDED | `private-well-testing` | C6 | § 18-17-502 |
| `edu-no-window-guard-rule-ar` | RECOMMENDED | `window-guards` | C7 | — |
| `edu-nonpayment-notice-ar` | REQUIRED | `nonpayment-notice` | C4 | § 18-17-701; § 18-17-901; § 18-17-902 |
| `edu-notice-delivery-ar` | REQUIRED | `notice-delivery-methods` | C5 | § 18-17-303; § 18-17-502; § 18-16-305 |
| `edu-notices-ar` | RECOMMENDED | `notices` | C5 | § 18-17-303 |
| `edu-nuisance-ar` | RECOMMENDED | `nuisance` | C4 | § 16-105-402; § 16-105-403; § 16-105-412 |
| `edu-occupancy-limits-ar` | CONSTRAINED | `permitted-occupants` | C2 | § 16-123-307; § 16-123-302; § 16-123-310 |
| `edu-optional-lease-terms-ar` | CONDITIONAL | `optional-lease-terms` | C5 | § 18-17-401; § 18-17-603; § 18-17-502 |
| `edu-parking-ar` | RECOMMENDED | `parking` | C5 | § 18-16-110; § 18-17-301; § 27-51-1305 |
| `edu-parking-vehicle-rules-ar` | CONSTRAINED | `parking-vehicle-rules` | C5 | § 27-50-1101 |
| `edu-pet-fees-ar` | CONSTRAINED | `pet-fees` | C5 | § 18-16-304; § 18-16-305; § 18-16-303 |
| `edu-pet-policy-ar` | RECOMMENDED | `pet-policy` | C5 | § 20-14-304; § 20-14-1005; § 18-17-601 |
| `edu-plain-language-ar` | RECOMMENDED | `plain-language` | C7 | § 4-88-107 |
| `edu-pool-safety-ar` | CONDITIONAL | `pool-safety` | C7 | § 20-30-101; § 20-30-104; § 20-30-102 |
| `edu-portfolio-thresholds-ar` | CONDITIONAL | `portfolio-thresholds` | C5 | § 18-16-303; § 14-1-203; § 16-123-204 |
| `edu-post-eviction-property-ar` | REQUIRED | `post-eviction-property` | C4 | § 18-60-310; § 18-17-913; § 18-16-507 |
| `edu-prohibited-lease-terms-ar` | PROHIBITED | `prohibited-lease-terms` | C7 | § 18-17-502; § 18-16-112; § 16-123-206 |
| `edu-promises-to-repair-ar` | RECOMMENDED | `promises-to-repair` | C3 | § 18-16-110; § 18-17-502; § 16-22-308 |
| `edu-property-rules-ar` | RECOMMENDED | `rules-regulations` | C6 | § 18-17-301; § 18-17-601; § 18-17-401 |
| `edu-rent-control-ar` | CONSTRAINED | `rent-control` | C1 | § 14-16-601; § 18-16-304; § 4-88-302 |
| `edu-rent-into-court-ar` | REQUIRED | `rent-into-court-counterclaim` | C4 | § 18-17-706; § 18-60-307; § 18-60-309 |
| `edu-rent-payment-ar` | REQUIRED | `rent-payment` | C1 | § 18-17-401; § 18-17-701; § 18-17-901 |
| `edu-rent-receipts-ar` | CONDITIONAL | `rent-receipts` | C1 | § 18-17-706 |
| `edu-rent-tax-ar` | RECOMMENDED | `rent-tax` | C1 | § 18-17-202; § 26-52-301; § 26-74-501 |
| `edu-rental-inspection-ar` | CONDITIONAL | `rental-inspection` | C3 | § 17-42-107; § 20-27-606; § 5-74-109 |
| `edu-repair-escrow-exemption-notice-ar` | RECOMMENDED | `repair-escrow-exemption-notice` | C3 | § 18-17-502; § 18-16-301 |
| `edu-repair-notice-ar` | CONSTRAINED | `repair-notice` | C3 | § 18-17-502; § 18-17-303; § 18-16-110 |
| `edu-required-disclosures-ar` | CONDITIONAL | `required-disclosures` | C6 | § 8-7-1406; § 17-10-101; § 18-17-502 |
| `edu-residential-use-ar` | RECOMMENDED | `residential-use-only` | C2 | § 18-17-603; § 18-17-701; § 18-17-704 |
| `edu-returned-payments-ar` | CONSTRAINED | `returned-payments` | C1 | § 4-60-103; § 4-60-101; § 5-37-302 |
| `edu-sale-or-management-change-ar` | RECOMMENDED | `sale-or-management-change` | C5 | § 18-16-302; § 18-16-303; § 18-17-301 |
| `edu-security-deposit-cap-ar` | CONSTRAINED | `security-deposit-cap` | C1 | § 18-16-304; § 18-16-301; § 14-16-601 |
| `edu-security-deposit-nonwaiver-ar` | PROHIBITED | `security-deposit-nonwaiver` | C1 | § 18-17-501; § 18-17-502; § 18-16-303 |
| `edu-security-deposit-on-sale-ar` | REQUIRED | `security-deposit-on-sale` | C1 | § 18-16-302; § 18-16-303 |
| `edu-security-deposit-penalty-ar` | REQUIRED | `security-deposit-penalty` | C1 | § 18-16-306; § 18-16-303 |
| `edu-security-deposit-return-ar` | REQUIRED/CONDITIONAL | `security-deposit-return` | C2 | § 18-16-305; § 18-16-306; § 18-16-302 |
| `edu-security-deposit-use-ar` | CONSTRAINED | `security-deposit-use` | C2 | § 18-16-305; § 18-16-306; § 18-16-303 |
| `edu-self-help-eviction-ar` | PROHIBITED | `self-help-eviction` | C4 | § 18-60-302; § 18-60-303; § 18-60-305 |
| `edu-service-animal-denial-penalty-ar` | PROHIBITED | `service-animal-denial-penalty` | C5 | § 20-14-302; § 20-14-303; § 20-14-304 |
| `edu-service-animal-misrepresentation-ar` | CONSTRAINED | `service-animal-misrepresentation` | C5 | § 20-14-310; § 20-14-1004; § 20-14-1001 |
| `edu-servicemember-rights-ar` | REQUIRED | `servicemember-rights` | C4 | § 12-62-702; § 12-62-704; § 12-62-705 |
| `edu-services-utilities-provided-ar` | REQUIRED | `services-utilities-provided` | C3 | § 18-17-502; § 18-17-601 |
| `edu-severability-ar` | RECOMMENDED | `severability` | C7 | § 18-17-502; § 16-123-206; § 18-17-801 |
| `edu-sex-offender-information-ar` | RECOMMENDED | `sex-offender-disclosure` | C6 | § 17-10-101; § 12-12-913 |
| `edu-sex-offender-occupancy-ar` | RECOMMENDED | `sex-offender-occupancy` | C7 | § 5-14-128; § 18-17-603 |
| `edu-showing-notice-waiver-ar` | RECOMMENDED | `showing-notice-waiver` | C3 | § 18-17-602 |
| `edu-smoke-co-alarms-ar` | CONDITIONAL/RECOMMENDED | `alarm-duties` | C2 | § 18-17-502; § 20-22-506; § 20-22-504 |
| `edu-smoking-medical-marijuana-ar` | CONSTRAINED | `smoking-policy` | C2 | § 20-27-1804; § 20-27-1803; § 20-27-1805 |
| `edu-statute-of-frauds-lease-ar` | RECOMMENDED | `statute-of-frauds-lease-term` | C5 | § 18-17-301; § 18-17-401; § 18-17-704 |
| `edu-statutory-caps-ar` | CONSTRAINED | `statutory-caps` | C1 | § 18-16-304; § 18-16-306; § 18-16-303 |
| `edu-statutory-early-termination-ar` | REQUIRED | `statutory-early-termination` | C4 | § 18-17-502; § 18-16-301; § 12-62-705 |
| `edu-statutory-forms-ar` | RECOMMENDED | `statutory-forms` | C5 | § 18-60-307; § 18-16-505; § 18-17-707 |
| `edu-stigmatized-property-ar` | RECOMMENDED | `stigmatized-property` | C7 | § 17-10-101 |
| `edu-storage-space-ar` | RECOMMENDED | `storage-space` | C5 | § 18-16-401; § 18-16-402; § 18-16-404 |
| `edu-surrender-end-of-term-ar` | RECOMMENDED | `surrender-end-of-term` | C4 | § 18-17-704; § 18-17-901; § 18-16-108 |
| `edu-tenancy-at-will-ar` | RECOMMENDED | `tenancy-at-will` | C4 | § 18-17-401; § 18-17-704; § 18-17-301 |
| `edu-tenant-caused-damage-ar` | RECOMMENDED | `tenant-caused-damage` | C4 | § 18-17-601; § 18-17-502; § 18-17-706 |
| `edu-tenant-maintenance-ar` | RECOMMENDED | `tenant-maintenance` | C2 | § 18-17-601; § 18-17-502; § 18-16-110 |
| `edu-tenant-prohibited-acts-ar` | PROHIBITED | `prohibited-acts-renter` | C2 | § 18-17-601; § 18-17-602; § 18-17-603 |
| `edu-tenant-records-ar` | RECOMMENDED | `tenant-records` | C5 | § 18-17-912; § 18-17-706; § 4-110-104 |
| `edu-tenant-repair-agreement-ar` | CONSTRAINED | `tenant-repair-agreement` | C2 | § 18-17-502; § 18-17-401; § 18-17-601 |
| `edu-tenant-repair-remedies-ar` | CONSTRAINED | `tenant-repair-remedies` | C3 | § 18-17-502; § 18-16-301; § 18-17-706 |
| `edu-tenant-screening-ar` | CONSTRAINED | `tenant-screening` | C7 | § 14-54-1705; § 16-123-307; § 16-90-1417 |
| `edu-tenant-statutory-duties-ar` | RECOMMENDED | `tenant-statutory-duties` | C2 | § 18-17-601; § 18-17-602; § 18-17-603 |
| `edu-tenants-property-insurance-ar` | RECOMMENDED | `tenants-property-insurance` | C5 | § 18-16-110; § 18-17-502; § 18-17-601 |
| `edu-termination-notice-ar` | REQUIRED | `termination-notice` | C4 | § 18-17-704; § 18-17-701; § 18-17-303 |
| `edu-towing-ar` | CONSTRAINED | `towing` | C5 | § 27-50-1101; § 27-51-1305; § 27-50-1103 |
| `edu-trespass-notice-ar` | RECOMMENDED | `trespass-notice` | main | § 5-39-203; § 18-17-601; § 18-17-701 |
| `edu-unauthorized-occupant-removal-ar` | RECOMMENDED | `unauthorized-occupant-removal` | C4 | § 5-39-215; § 18-60-304; § 18-60-303 |
| `edu-unpaid-amounts-interest-ar` | CONSTRAINED | `unpaid-damages-interest` | C1 | § 4-57-101; Ark. Const. amend. 89, § 3 |
| `edu-usufructuary-lessor-ar` | RECOMMENDED | `usufructuary-lessor` | C7 | — |
| `edu-utilities-paid-by-landlord-ar` | RECOMMENDED | `utilities-paid-by-landlord` | C3 | § 18-17-502 |
| `edu-utilities-responsibility-ar` | RECOMMENDED | `utilities-responsibility` | C2 | § 18-17-401; § 18-17-502; § 14-234-603 |
| `edu-utility-payment-evidence-ar` | RECOMMENDED | `utility-payment-evidence` | C2 | § 25-19-105; § 18-17-401 |
| `edu-utility-service-continuity-ar` | PROHIBITED/RECOMMENDED | `utility-service-continuity` | C2 | § 25-19-105; § 18-17-502; § 18-17-701 |
| `edu-waiver-by-acceptance-ar` | RECOMMENDED | `waiver-by-acceptance` | C4 | § 18-17-911; § 18-17-704 |
| `edu-written-notices-ar` | REQUIRED | `written-notice-required` | C5 | § 18-17-701; § 18-17-702; § 18-17-704 |

### §3.3 Shared rows changed (70)
Each changed only in `states` (";AR" appended), `notes` (an " | AR: …" segment appended) and `last_checked` (2026-10-19); checked by script against the master (§8).

## §4 Layout and placement table (rule 40)
**Batteries.** Run on the official whole-Code engine, first without a tenancy limb (counts and breadcrumb reading), then with one, and with number words spelled out:

| Battery | Query (short) | Hits | Result |
|---|---|---|---|
| AR-L-S11 | emphasis and type-size words AND lease/lessor/lessee/tenant/landlord/"residential purposes"/"lease of space" | 24 (23 ids) | self-storage lien notice in bold (§ 18-16-404), marina lien (§ 18-48-703), automatic-renewal "clear and conspicuous" for subscriptions (§ 4-86-112, not a dwelling lease), eviction-order posting (§ 18-17-903); no residential lease text rule |
| AR-L-M-006 | "point type", "point font", "points in size", "type size", spelled-out "eight-point" to "sixteen-point" forms, no limb | 37 | all non-housing (product labels, loans, insurance, gambling ads, notices by publication); none on leases |
| AR-L-M-007 / M-009 | conspicuous, boldface, "bold type", underlined, "capital letters", "all caps", no limb | 277 (274 ids) | breadcrumb and snippet read for lease words: only the S11 hits above plus § 18-16-507 (nuisance writ of possession) and § 18-17-707 (appeal bond); no lease text rule |
| AR-L-M-008 / M-010 | "substantially equivalent", "substantially the following form" and similar, no limb | 110 (109 ids) | only § 18-17-707 (appeal bond form) touches landlord-tenant law; no prescribed lease form |
| AR-L-S08 | "separate writing", "separate document", "separate instrument", "separate agreement" AND tenancy words | 3 | none relevant (rule 48) |

**Layout rules found for residential lease text:** none. No Arkansas statute prescribes type size, bold, capitals, placement or a separate document for any residential lease term, and none forfeits money for an omission of lease text. Two placement-adjacent points are recorded in rows, not as layout rules:
- the move-in defect form must be supplied "at the time possession is available" (§ 18-17-502(c)(1); `move-in-defect-form-ar`);
- the tenant's written agreement to renovate (§ 18-17-502(b)) is advised as a clearly labelled signed section (`edu-no-initials-requirement-ar`).
No order of placement had to be settled with Taylor.

## §5 Dormant rows resolved (rule 25)
None. No row in the library was tagged AR or carried an `-ar` id before this pass, dormant or active (Step A, §1.1).

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Every offered clause opens "[Optional.]" (with a use note where it applies only to some properties) and is never a default. Every lawful option the library declines has an education row saying it is lawful, why it isn't offered, and that a landlord who wants it can add their own clause and should take advice. The "optional lease terms" row (`edu-optional-lease-terms-ar`) was re-read item by item before the independent check.

**Offered (Arkansas clauses):**
| Clause | Why it is lawful and serves the landlord | Key citation |
|---|---|---|
| `holdover-rate-ar` | Arkansas measures holdover only for a willful holdover (capped lump sum) and in unlawful detainer (rental value per month); an ordinary good-faith holdover outside unlawful detainer has no daily measure. Excludes nonpayment terminations and days of court-allowed retention; never stacks on the statutory amounts; no charge and Rent for the same day | §§ 18-17-704(c)(3)-(4), 18-60-307(e), 18-60-309 |
| `casualty-termination-ar` | no casualty statute; landlord termination right exists only if reserved; abatement except for tenant fault (fault persons match `tenant-caused-damage-nm`); preserves the § 18-17-502(d)(2) exit | §§ 18-17-502, 18-17-706(1)(B) |
| `abandoned-property-ar` | states the § 18-16-108(a) rule in the lease, starts only after termination and surrender or court possession, writ carve-out, optional claim period | §§ 18-16-108, 18-60-310 |
| `condemnation-ar` | no statute on leases in a taking; award to landlord except tenant's own relocation payments | Ark. Const. art. 2, § 22; § 22-9-702 |
| `nonwaiver-acceptance-ar` | statute covers only acceptance after the eviction order; clause covers breaches and notices before it, preserves cure, leaves holdover to `holdover-ca` | §§ 18-17-701(a)(2), 18-17-911(b) |
| `repair-notice-method-ar` | the lease may name "any other method" for the tenant's defect notice | § 18-17-502(d)(1) |
| `move-in-defect-form-ar` | the defect form is the landlord's safe harbour | § 18-17-502(c)(1) |
| `carpet-cleaning-ar` | contract term; deduction for damages under the deposit statute | §§ 18-17-401(a), 18-16-305(a)(2) |
| `no-liens-ar` | contract term protecting against mechanics' liens | ch. 18-44 |
| `owner-occupancy-termination-ar` | reserved owner move-in termination during a fixed term | § 18-17-401(a) |
| `owner-manager-disclosure-ar` | names the owner and the place for receipt of notices (§ 18-17-303(b)(2)(B)); answers the stale § 18-17-301(5) pointer | §§ 18-17-301(5), 18-17-303 |
| `us-flag-display-ar` | placement rules for 12+ unit landlords within the § 14-1-203 protection | §§ 14-1-201, -203, -204 |
| `government-fines-reimbursement-ar` | reimbursement of fines the tenant causes, with carve-outs for landlord-duty conditions and calls for help | §§ 18-17-401(a), 18-17-502(g), 18-16-112(f) |
| `employee-housing-ar` | occupancy conditional on employment takes the unit outside the 2007 Act | § 18-17-202(5) |
| `rules-ar` (recommended, not optional) | Arkansas has no rules section; fixed-term changes need agreement, periodic changes on 7/30 days' notice | §§ 18-17-301(11), 18-17-601(8), 18-17-704 |

**Offered by tagging an existing optional clause:** `tenant-caused-damage-nm` (rule 54t: no casualty statute and no abatement right; the tenant's only exit, § 18-17-502(d)(2), is unavailable where the tenant's household caused the defect, § 18-17-502(c)(2)(B)), `informal-dispute-resolution-or`, `tenant-death-contact-nh` (with `abandoned-property-ar`), `rent-concession-wi`, `rent-increase-midterm-ky`, `rent-installments-or`, `government-fee-reimbursement-ky`, `prompt-payment-discount-la`, `criminal-activity-ky` (crime-free clause), `extended-absence-notice-ks`, `utility-allowance-cap-co`.

**Lawful, not offered (education row says so):** collection fee beyond costs and prevailing-party fees (`edu-collection-fee-ar`); restoration agreement for a disability modification (agree per modification, `edu-disability-accommodation-ar`); alarm battery allocation (`edu-smoke-co-alarms-ar`); appliances-excluded list (`edu-no-appliance-presumption-ar`); tenant consent to utility shut-off copies (each utility's own form, `edu-no-utility-disconnection-notice-authorization-ar`); environmental or government-closure termination (`edu-no-environmental-event-termination-ar`); self-cure (statutory already, `edu-landlord-self-cure-ar`); animal-care designee (`edu-no-animal-care-entry-right-ar`); EV-charger addendum (`edu-no-ev-charging-right-ar`); firearm-conduct clause (`edu-firearms-ar`); written renovation agreement under § 18-17-502(b) (deal-specific, `edu-tenant-repair-agreement-ar`); jury waiver (doubtful under Ark. Const. art. 2, § 7, `edu-jury-waiver-ar`).

**Barred or not offered because a court would likely void it:** waiver of exemptions or homestead (no waiver statute; a constitutional-right waiver needs a signed writing and its enforceability is case law, `edu-exemptions-no-lease-waiver-ar`); confession of judgment (`edu-no-confession-of-judgment-rule-ar`); any waiver of the 2007 Act's rights (§ 18-17-502(g)).

**Rule 54 checklist items:** holdover charge ✓ (`holdover-rate-ar`); casualty termination ✓ (`casualty-termination-ar`); statutory waivers n (no waiver statute; exemptions are constitutional and a waiver's effect is case law); crime-free clause ✓ (`criminal-activity-ky`); eviction-fee clause: no Arkansas eviction-fee statute; costs and prevailing-party fees come through `default-by-tenant`, and a separate fee clause is declined with a row (`edu-collection-fee-ar`); tenant-caused damage ✓ (`tenant-caused-damage-nm`, `edu-tenant-caused-damage-ar`). Identifications that trigger a regime: none found (no "separately identified" deposit, utility or notice-address trigger in Arkansas law).

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A; recommendation "Yes"): "Yes (Recommended)". This approved using the linked built-in browser for the official Code site.
2. **Lexis public-access terms** (recommendation "agree"): "Yes, agree (Recommended)".
3. **CAPTCHAs:** each time the official site showed a CAPTCHA, Taylor solved it and answered "Done" (several times). No CAPTCHA was solved or bypassed by Claude.
4. **Export to Downloads and folder access** (recommendation "Yes to both"): "Yes to both (Recommended)" — saving the browser's exports to Taylor's Downloads folder and reading them from there.
5. **Downloading the REALTORS® lease and handbook** (recommendation "Yes, both"): "Yes, both (Recommended)".
6. **Channel plan after the crawl limit** (recommendation: official site for reading, official search for absences, Justia dropped): "Yes, solved; use plan (Recommended)".
7. **Court-rule PDFs** (recommendation "Yes, all three"): "Yes, all three (Recommended)".
No legal or product question needed Taylor; the judgments below were made in the pass.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Time computation:** Rule 6(a) governs the 2007 Act's periods through § 18-17-303(d); rows give the longer count for the 3-day notice to quit and the 5-day objection, where Rule 6(a)'s reach is unsettled.
- **Deposit non-waiver:** § 18-17-502(g) (in the quality-standards section) bars waiving "any of the rights, duties, or remedies available under this chapter", and § 18-17-501 sends deposit rights to ch. 18-16; rows treat deposit rights as non-waivable and say the reading is unsettled.
- **Returned refunds:** § 18-16-305(b)(2) (180 days, then the landlord's) and the Unclaimed Property Act (three years) both stated; follow the 180-day steps exactly, otherwise report as unclaimed property.
- **Price gouging trigger:** § 4-88-303(a)(1) joins the state and local declarations with "and"; rows treat either as enough.
- **Service animals:** the withdrawal sentence is kept for other assistance animals and removed for a trained service animal covered by § 20-14-304 (`assistance-animal-accommodation-ar`).
- **Calls for help:** § 18-16-112(f) is worded for every residential tenancy though it sits in the domestic-abuse section; applied to all tenancies.
- **Lot leases under tenant-owned mobile homes:** whether the 2007 Act covers them is unsettled (its dwelling-unit definition names landlord-owned mobile homes); rows send landlords to unlawful detainer.
- **Limitations:** where three-year and five-year periods may both reach rent under an unsealed written lease, rows give three years as the cautious deadline.
- **Clean indoor air:** a landlord's staffed common hallway is treated as a place of employment (cautious reading).
- **Appliances:** a promise to maintain listed appliances is a § 18-16-110 repair agreement; `appliances-included-ar` makes the landlord choose (repair promise or none) rather than tagging the shared clause.
- **Rules clause:** `rules-ar` kept rather than tagging `rules-wi`, so periodic tenancies can change rules on notice that matches the termination notice.

### §6.4 Canvass helpers' questions and the main pass's answers
- C1 application-fees / rent-control: § 14-54-1409 printed and quoted in both rows.
- C1 collection-fee: agreed (a landlord collecting its own rent in its own name is not a debt collector, § 17-24-502(5)(B)); row now quotes § 17-24-507(b)(1) and the manager exclusion § 17-24-502(5)(D)(vi)(c).
- C1 late-fee: shared `late-fee` tagged (no cap; non-waiver sentence consistent with § 18-17-911(b)).
- C1 rent-control (price gouging "and"): agreed; either declaration treated as a trigger (§6.3).
- C1 rent-tax: §§ 26-52-301, 26-74-501, 26-75-602, 26-75-701 printed; row rewritten (state tax on transient guests renting on less than a month-to-month basis; local lodging taxes exclude rentals of 30 days or more).
- C1 returned-payments: base `returned-payments` kept (§ 4-60-103's $30 collection fee plus bank charges is what a holder may collect; the clause's fee "not to exceed the maximum amount permitted by applicable law" stays within it); `returned-payments-ky` not tagged because a fixed bracketed amount could be set above the statute.
- C1 unpaid-damages-interest: § 4-57-101(d) (6% default) printed and added.
- C1 deposit-escheat and C2 security-deposit-return: agreed; both statutes stated, legal watch (§10).
- C1 security-deposit-nonwaiver: agreed; Present with the reading labelled unsettled.
- C2 construction-liens: agreed; lien law sits wholly in Title 18, which was read whole.
- C2 existing-condition: the defect form is a separate document; flagged for the product (§10).
- C2 smoking-policy: carve-out kept; Clean Indoor Air Act printed (§§ 20-27-1803 to -1805) and recorded in `edu-no-smoke-drift-waiver-ar`; Arkansas has no adult-use cannabis law in the Code or Constitution as compiled.
- C2 municipal-utility-lien: §§ 14-235-212, 14-235-223, 14-20-109 printed; § 14-235-223 contains no lien, so the pointer in § 14-235-212(b)(1) leads nowhere (§10); row rewritten.
- C2 alarm-duties: §§ 20-22-502 to -506 printed and quoted in `edu-fire-code-standard-ar`.
- C2 health-district-rental-rules and tenant-forward-proceedings: the unparsed hits were opened in the parser audit (Title 19 bond notes; § 4-2A-516); absences stand, rows updated.
- C3 repair-notice: kept both (`repair-notice-method-ar` states it controls for the defect notice; no override of `notices`).
- C3 security-devices: the unparsed path was the second dated version of § 4-4A-201; absence stands.
- C3 utility-allowance-cap: § 23-1-101 printed; the tenant-service exception quoted in the three utility rows.
- C3 cares-act-notice: `edu-cares-act-notice` tagged.
- C3 entity-landlord-court-representation: §§ 16-22-206, 16-22-211 printed and quoted.
- C4 rental-application-accuracy: override `rental-application-accuracy-ar` written (§ 16-90-1417(b)(1)).
- C4 tenancy-at-will, C5 statute-of-frauds-lease-term: §§ 4-59-101, 4-59-102 printed and quoted.
- C4 binding-arbitration: ch. 16-108 printed; the act does not apply to personal injury or tort matters (§ 16-108-233(b)(1)), added.
- C5 tenant-records: ch. 4-110 (§§ 4-110-103 to -105) printed; data-security, destruction and breach-notice rules added.
- C5 assistance animals: approach confirmed (§6.3).
- C6 law-enforcement-cooperation: agreed (§6.3).
- C6 rules-regulations: `rules-ar` kept (§6.3).
- C6 smoke-drift-waiver: answered (§6.3); row updated.
- C7 confession-of-judgment and pool-safety: the unparsed paths were opened (second versions of §§ 4-3-104 and 19-42-201); ch. 16-65 subch. 3, § 4-92-105 and ch. 20-30 printed and quoted.
- C7 consumer-protection-act and fair-housing: agreed.
- C7 jury-waiver: kept; the statute-of-frauds writing rule for constitutional-right waivers (§ 4-59-101(a)(7)) added; Ark. R. Civ. P. 38-39 not needed for the row's advice.


## §7 Open items, each with its search boundary
1. **Case law was not searched** (no case-law corpus). Each row turning on one of these states the cautious course:
   - whether Ark. R. Civ. P. 6(a) reaches the unlawful detainer 3-day notice and the § 18-60-307(b) 5-day objection;
   - whether § 18-17-502(g) reaches deposit rights;
   - penalty doctrine for late fees, holdover charges and early-termination fees;
   - waiver of a breach by accepting rent before an eviction order;
   - whether the Deceptive Trade Practices Act reaches residential leases;
   - enforceability of lease jury waivers, exemption waivers and exculpatory clauses;
   - whether the 2007 Act covers lot leases under tenant-owned mobile homes;
   - whether a tenant's leasehold shares in a condemnation award;
   - which limitations period governs rent under an unsealed written lease;
   - landlord liability for a tenant's dog.
2. **Administrative rules not read:** Public Service Commission rules (utility deposits, disconnection, resale, master metering); Department of Health swimming-pool rules; the State Fire Marshal's adoption of the Fire Prevention Code and its edition; Real Estate Commission rules on agency disclosure. Boundary: the Arkansas Code and Constitution only.
3. **Local ordinances not searched:** city rental inspection and registration programs (§ 17-42-107 allows them), local lodging taxes' levying ordinances, local housing codes (kept in force by § 18-17-502(h)), local fire codes. Flagged in each row, not resolved (kickoff).
4. **Federal law named, not read:** Fair Housing Act, ADA service-dog definition (frozen at 1/1/2017 by § 20-14-304(a)), SCRA, Protecting Tenants at Foreclosure Act, Bankruptcy Code, Federal Arbitration Act, lead disclosure rule (tagged `lead-based-paint`).
5. **Dog-bite liability:** Lexis AR-L-SC-003 and -005 returned 0 with no positive available, so no absence row was written (§16).

## §8 Integrity checks on the delta
Run by script on the final delta (`checks.py`, `assemble.py`) and on this log. The quote check was rerun after every errata round.

| Check | Result | Detail |
|---|---|---|
| duplicate ids in delta | PASS | 0 |
| new ids colliding with master | PASS | 0 |
| dangling supersedes | PASS | 0 |
| supersedes matches "Overrides" notes (OR 6) | PASS | 0 |
| blank verification_status | PASS | 0 |
| new rows not VERIFIED | PASS | 0 |
| content_type invalid | PASS | 0 |
| group invalid | PASS | 0 |
| rule_type invalid | PASS | 0 |
| lease clause without basis | PASS | 0 |
| education row with basis | PASS | 0 |
| new rows not states=AR | PASS | 0 |
| new rows notes not starting "AR: " | PASS | 0 |
| new rows missing topic_key | PASS | 0 |
| dates not set | PASS | 0 |
| master notes not a verbatim prefix of shared row notes (CT 3) | PASS | 0 |
| shared rows changed outside states/notes/last_checked | PASS | 0 |
| new {variables} for log §10: [] | INFO | |
| bracket next to a self-filling variable | PASS | 0 |
| working-file pointers in notes/body (HI 4) | PASS | 0 |
| citation form A.C.A./Ark. Code § without Ann. | PASS | 0 |
| session-law form not "Act N of YYYY" | PASS | 0 |
| optional clauses not opening "[Optional." | PASS | 0 |
| cited Ark. Code sections not in corpus | PASS | 0 |
| quotes checked: 1521 | INFO | |
| quotes not found in cited source | PASS | 0 |
| quotes found only elsewhere in corpus (RI 2) | PASS | 0 |
| quotes with no citation beside them (WA 3) | PASS | 0 |
| topics with no AR row keyed to them | PASS | 0 |
| delta format: master header, 17 columns, CRLF, no BOM, csv round trip byte-exact | PASS | 450 rows (380 new, 70 tagged); SHA-256 6577c1a273d8f01f4cb679fc0662f660e3d15ac763bb84569d4aafef6ae122b1 |
| errata applied once each (assembler refuses a miss or a repeat) | PASS | 264 errata |
| currency: cited sections vs 2025-2026 sections-amended lists | PASS | 41 act entries, all reflected in History lines (§1.2) |
| log pointer check: backticked row ids and topic keys named in this log (763) exist in the delta or the master | PASS | 0 |

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 70 tagged rows changed only in `states` (";AR" appended), `notes` (an " | AR: …" segment appended) and `last_checked` (2026-10-19). The assembler checks that each master row's notes are a verbatim prefix of the delta row's notes and that no other field changed.
- **Overrides** (`supersedes` set; the shared rows are untouched): `security-deposit-return-ar`, `smoking-policy-ar`, `assistance-animal-accommodation-ar`, `rental-application-accuracy-ar`, `appliances-included-ar`.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
- **Legal watch (Arkansas statutes):**
  - § 18-17-301(5) defines "landlord" to include "a manager of the premises who fails to disclose as required by this chapter", but the Act has no disclosure section (`owner-manager-disclosure-ar`).
  - § 18-17-301(11) ("valid rules adopted under this chapter") and § 18-17-601(8) ("rules that are enforceable pursuant to this subchapter") point to a rules section the Act never enacted (`rules-ar`).
  - § 18-60-309(f) distributes "money paid by the defendant under § 18-60-307(c)", but § 18-60-307(c) now governs the hearing notice; the security provision is § 18-60-307(e).
  - § 18-17-902(b) says the show-cause period is in calendar days while § 18-17-303(d) applies the civil rules' computation (Rule 6(a)), which skips weekends for periods under 14 days.
  - § 18-16-305(b)(2) (returned refund becomes the landlord's after 180 days) and the Unclaimed Property Act (§§ 18-28-201(13), 18-28-202(a)(14)) are unreconciled.
  - § 14-235-212(b)(1) makes contracted sewer charges "a lien as provided in § 14-235-223", but § 14-235-223 contains no lien.
  - § 16-123-302(8) defines a discriminatory housing practice by reference to "§§ 16-23-310 — 16-123-316 and § 16-23-344"; chapter 16-23 has no such sections (apparently §§ 16-123-310 and 16-123-344).
  - § 18-17-701's heading names "Removal of evicted tenant's personal property", which the section's text no longer contains.
  - No rule or order gives ordinary district courts unlawful detainer jurisdiction, so § 18-60-306's condition is unmet.
  - § 18-11-802(3) defines "foreign government" by reference to § 2-3-102, which the official table of contents marks "[Suspended as stated in § 2-3-111.]"; the foreign-ownership rows rely on the prohibited-party definitions and do not turn on this, but the pointer may be empty.
- **Product:**
  - The move-in defect form (§ 18-17-502(c)(1)) is a separate document the landlord must supply at possession; `move-in-defect-form-ar` covers the lease side, and the builder may want a standalone form listing the six standards.
  - `tenant-death-contact-nh` points to "this Lease's Handling of Property Left Behind Section"; in Arkansas it is safe only with `abandoned-property-ar` selected. The builder may want to pair them.
  - New topics: `farmland-hunting-rights`, `limitation-of-actions`, `trespass-notice`.
- **Other states:** the `holdover-rate-*` triage pattern (NOT because the state "already sets holdover measures") can miss the ordinary good-faith holdover outside the statutory action; worth checking in states with only willful-holdover or action-specific measures.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4. No Arkansas type-size, bold, placement or separate-document rule reaches residential lease text; batteries ran with and without a tenancy limb and with spelled-out number words.
- **41 Just-cause:** none; Arkansas lets the end of the term or a 7/30-day notice end possession (`edu-no-for-cause-eviction-ar`, with the retaliation absence `edu-no-retaliation-statute-ar` and its three specific bans: lead notice § 20-27-608, fair housing § 16-123-208, domestic abuse § 18-16-112).
- **42 Required text inside a shared clause:** none. No Arkansas statute forces a sentence into a fee, deposit or other clause; the deposit return mechanics went into an override (`security-deposit-return-ar`), not into required text.
- **43 Cure promises:** `default-by-tenant` promises a cure after notice for non-rent breaches and lets the landlord skip a cure "where applicable law permits"; Arkansas gives 14 days to remedy a non-rent breach (§ 18-17-701(a)) and lets the landlord terminate for nonpayment after 5 days without a cure (§ 18-17-701(b)), so the clause gives nothing away; tagged.
- **44 Terms the statute turns into duties:** the only "as provided by the lease" hooks are the defect-notice method (§ 18-17-502(d)(1)) and where rent is paid (§ 18-17-401(b)); the Act's tenant remedy reaches only the six implied quality standards, not agreed appliances (§ 18-17-502(a), (d)), so agreed appliances raise no statutory remedy, but a promise to maintain them raises tort exposure under § 18-16-110 (`appliances-included-ar` makes it a choice); `repair-notice-method-ar` names added methods on purpose.
- **45 Electronic notices:** UETA (ch. 25-32) read whole: it applies only where the parties agreed to transact electronically (§ 25-32-105(b)) and a record not capable of retention is not delivered (§ 25-32-108); no exclusion for eviction or cure notices. `electronic-notice-ma` and `electronic-signatures` tagged; the 2007 Act's notice section (§ 18-17-303) has no electronic carve-out.
- **46 The lease as the required notice:** none. No Arkansas statute lets a lease paragraph serve as a required notice; the defect-form safe harbour needs its own form (`move-in-defect-form-ar`).
- **47 Knowing-use penalties:** none for lease terms. The 2007 Act voids waivers (§ 18-17-502(g)) but sets no penalty for using a prohibited term; the debt-collection act bars a collector from collecting any fee not "expressly authorized by the agreement creating the debt or permitted by law" (§ 17-24-507(b)(1)), recorded in `edu-collection-fee-ar`.
- **48 Separate documents:** none (AR-L-S08; `edu-no-chore-writing-rule-ar`). The renovation agreement under § 18-17-502(b) needs only a writing, not a separate one.
- **49 Collection-cost bans:** none. The general fee statute lets the prevailing party recover a reasonable fee "unless otherwise provided by law or the contract" (§ 16-22-308); the 2007 Act's fee awards need an attorney (§ 18-17-701(c)); `default-by-tenant`'s prevailing-party sentence is reciprocal, so no one-way clause issue.
- **50 "The lease controls" wording:** every "unless otherwise agreed / as provided by the lease" point was decided on purpose (`edu-optional-lease-terms-ar`): rent time and place (§ 18-17-401(b)), term (§ 18-17-401(c)), non-dwelling use, defect-notice method, renovation agreement, contract fees, deposit amount up to the cap, flag-display limits for 12+ unit landlords. No deposit uplift depends on what the lease says.
- **51 Plain-language and consumer-contract statutes:** none reaches residential leases (`edu-plain-language-ar`, `edu-no-plain-language-lease-law-ar`). Whether the Deceptive Trade Practices Act reaches a real-property lease is case law; rows tell landlords to assume it may (`edu-consumer-protection-act-ar`). Automatic-renewal law covers subscriptions and leases of personal property only (§§ 4-86-109, 4-86-112).
- **52 Exculpation and liability waivers:** Arkansas has no statute voiding "Landlord is not liable" terms (AR-L-S01); base variants tagged. Tort immunity absent a repair agreement (§ 18-16-110) makes a lease repair promise the risk instead (§2.2).
- **53 A figure that contradicts a shared clause:** checked every figure and trigger in the tagged clauses: late fee (none), returned check ($30 cap, `returned-payments` self-limits under it; `returned-payments-ky` with a fixed amount not tagged), deposit (cap two months "however denominated"; `due-at-signing` and pet deposits counted), holdover (`holdover` base untagged; `holdover-rate-ar` excludes nonpayment terminations and days of court-allowed retention, never stacks on § 18-17-704(c)(3) or § 18-60-309), notice periods (7/30 days, 14-day cure, 3-day notice to quit, 10-day show cause under Rule 6(a)), access (no statutory period; 24 hours is a floor).

## §12 Other Step C screens
- **30 Read beyond the section:** read whole in the main pass: ch. 18-16 (Landlord and Tenant, all subchapters including self-storage and nuisance eviction), ch. 18-17 (2007 Act), §§ 18-60-301 to -312 (unlawful detainer), ch. 16-123 subchs. 2-3 (fair housing), ch. 25-32 (UETA), ch. 12-62 subch. 7 (state military relief), §§ 20-14-301 to -310 and 20-14-1001 to -1005 (service and support animals). Older general sections outside the Act were checked against it section by section: § 18-16-101 (criminal failure to vacate) and § 18-16-108 (abandoned property and lien) apply to every lease; § 18-16-110 (tort immunity) is general; the self-storage subchapter does not reach dwellings.
- **31 Rules enacted twice:** the deposit-refund pair § 18-16-305(b)(2) (returned refund becomes the landlord's after 180 days) and the Unclaimed Property Act (§§ 18-28-201(13), 18-28-202(a)(14), three years) give different outcomes for the same money; `edu-deposit-escheat-ar` states both and the cautious course (legal watch, §10). City and county rent-control preemption are enacted twice in matching words (§§ 14-16-601, 14-54-1409).
- **32 Coverage by size or place:**
  - deposit subchapter: not for an individual owning five or fewer units (with spouse, minor children and their entities) unless managed by a third person for a fee (§ 18-16-303); carried in the body of every deposit row;
  - flag display: landlords operating fewer than 12 units exempt (§ 14-1-203(b)(2)(A)); `us-flag-display-ar` opens with a use note;
  - fair housing: two subchapters with different exemptions (§§ 16-123-204(b), 16-123-306(a));
  - equal access to housing for people with disabilities: not a single-family residence of which a portion is rented (§ 20-14-305(b)); by its own words this does not narrow the service-animal right (§ 20-14-304(a));
  - multiple-occupancy fire escapes and alarms: more than three floors (§§ 20-22-505, 20-22-506);
  - Clean Indoor Air Act: employers with fewer than three employees may exempt themselves (§ 20-27-1805(3)).
  No population brackets or frozen censuses apply.
- **36 Not applicable topics:** four (`repair-escrow-exemption-notice`, `showing-notice-waiver`, `tpa-exemption-notice`, `usufructuary-lessor`), each with a short row saying why the premise can't arise in Arkansas.
- **37 Tenancy type:** every row states how its rule differs, or doesn't, for week-to-week, month-to-month and fixed-term tenancies (7- and 30-day notices, § 18-17-704(a)-(b); default month-to-month, week-to-week for a roomer paying weekly, § 18-17-401(c)).
- **38 No imported structure:** rows that would follow the uniform act where Arkansas did not adopt it (entry notice, retaliation, rules, disclosure) were written as Arkansas absences with the stale pointers flagged (§10).
- **39 Eviction duties:** court rules read (§1.3); service, posting and mailing of the order to vacate (§ 18-17-903), the writ (§ 18-60-310), the 5-day objection (§ 18-60-307(b)) and the bond and retention rules (§ 18-60-307(e)) are in the eviction rows.
- **77 Cross-references inside cited statutes:** `scripts/xrefs.py` listed every "§" reference inside the 292 cited sections; references inside the corpus all resolve. The first 98 references outside the corpus were looked up in the official table of contents: all exist except § 16-123-302(8)'s "§§ 16-23-310 — 16-123-316 and § 16-23-344" (chapter 16-23 has no such sections; apparently 16-123-310 and 16-123-344 were meant), § 16-66-218(15)'s § 20-76-430 [Repealed] and (11)'s § 23-74-119 (marked repealed in the text). After the check rounds 16 more outside references appeared; 7 were confirmed in the table of contents (including § 2-3-102, suspended, §10) before the official site's session limit stopped the lookup; the other 9 (§§ 2-4-101, 4-4-111, 4-92-106, 5-16-102, 6-17-1401, 20-27-704, 25-15-201, 25-19-101, 27-16-819) are general references no row relies on. Text pointers without a "§" were read by hand: § 18-17-301(5) and (11), § 18-17-601(8), § 18-60-309(f) → § 18-60-307(c), § 14-235-212(b)(1) → § 14-235-223 (§10).


## §13 Independent check (rule 80)
Brief: `work/CHECK-BRIEF.md`. It told each checker to check against the statute, not the notes, since earlier findings may be wrong; to print whole sections (`sec.py` prints whole sections); to quote every subsection new wording relies on; to give every fix as exact old-to-new text; never to change a shared row's text; and to treat a proposed widening of an absence as a NOTE for a fresh search. Fixes were applied as once-only errata (`work/errata.jsonl`, applied by the assembler, which refuses an erratum whose old text doesn't occur exactly once, or that reaches outside the AR segment of a shared row); edits to the AR segments of tagged rows were made in `work/tags.jsonl` with the same once-only assertion.

| Round | Scope | ERROR | FIX | NOTE | Rows changed |
|---|---|---|---|---|---|
| 1a | all AR lease clauses and every tagged shared clause (90) | 1 | 13 | 4 | 12 |
| 1b | education: Security Deposit, Default & Termination, Rent & Payment (118) | 1 | 30 | 1 | 25 |
| 1c | education: Landlord and Tenant Responsibilities, Building & Safety, Access, Pets, Parking, Rules (109) | 1 | 50 | 8 | 43 |
| 1d | education: Disclosures, Compliance & Prohibited Terms, Notices & General, Other (133) | 1 | 73 | 8 | 49 |
| 2 | rows edited in round 1, with before/after text (135) | 1 | 50 | 6 | 37 |
| 3 | rows edited in round 2, with before/after text (37) | 0 | 31 | 3 | 25 |

Round 1 ran as four sequential agents (one at a time) because the delta was too large for one; rounds 2 and 3 were one agent each. Round 3 found no ERROR.

**ERRORs found and fixed:**
- 1a `appliances-included`: its promise that Landlord "will maintain" the items is the § 18-16-110(1) agreement that removes tort immunity → untagged; `appliances-included-ar` written.
- 1b `edu-servicemember-rights-ar`: lease termination needs orders of more than 180 continuous days (§ 12-62-705(a)(1)).
- 1c `edu-assistance-animals-ar`: § 20-14-305(b)'s single-family exclusion limits only "this section" (equal access), not the § 20-14-304 service-animal right. Round 1a had added the opposite reading to `assistance-animal-accommodation-ar`; the main pass corrected it and the brief.
- 1d `edu-no-addendum-precedence-rule-ar`: the move-in defect form safe harbour runs when the tenant signs without noting a defect and takes possession, or fails to return the form in two business days (§ 18-17-502(c)(1)).
- 2 `edu-cares-act-notice-ar`: the 14-day notice ends the lease only if a remediable breach isn't remedied (§ 18-17-701(a)).

**Main-pass follow-ups to checker NOTEs:** fresh whole-Code search AR-L-M-012 before relying on the translation absence (added § 4-88-107(a)(8)(D)); the receivership battery's 18th path identified as a second version; the asbestos row rewritten after printing ch. 20-27 subch. 10 (its "eligible structure" excludes dwellings); unreadable weed-lot sections (§§ 14-54-901, -903; official site CAPTCHA) described as not read in full; § 18-16-101's possible constitutional challenge left as case law not searched (§7). SOP rule numbers in notes (e.g. "(rule 54)") were kept as the library's style.

### Edited after the last check
Round 3 still found fixes. They were applied, and the rows are listed here for Claude Code to read against the statute at sync (kickoff).
| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `edu-assigned-parking-space-ar` | R3 (2026-10-20) | R3 errata | read list adds § 27-50-1101 |
| `edu-casualty-mitigation-waiver-ar` | R3 (2026-10-20) | R3 errata | body: § 18-17-502 exit stated with date, exclusion and not-excused conditions (matches sister row) |
| `edu-early-termination-ar` | R3 (2026-10-20) | R3 errata | notes: § 18-17-502(c) excuse cited |
| `edu-eviction-process-ar` | R3 (2026-10-20) | R3 errata | body: receipt or cancelled check is what the court "may" allow (§ 18-17-706(2)) |
| `edu-fair-housing-ar` | R3 (2026-10-20) | R3 errata | body and notes: "Arkansas Fair Housing Act" name per § 16-123-201 |
| `edu-habitability-presumption-ar` | R3 (2026-10-20) | R3 errata | body: later defects caused by the tenant or left unfixed because entry was refused are still deemed compliance (§ 18-17-502(c)(2)); notes cite § 18-17-502(a) |
| `edu-landlord-breach-remedy-ar` | R3 (2026-10-20) | R3 errata | notes cite § 18-17-502(a) scope |
| `edu-no-casualty-termination-ar` | R3 (2026-10-20) | R3 errata | notes cite § 18-17-502(c) and (d)(2)(A) |
| `edu-no-deposit-cost-schedule-ar` | R3 (2026-10-20) | R3 errata | notes cite § 18-16-306(a)(2) |
| `edu-no-for-cause-eviction-ar` | R3 (2026-10-20) | R3 errata | notes cite § 12-62-704(b) |
| `edu-no-initials-requirement-ar` | R3 (2026-10-20) | R3 errata | read list adds § 18-48-703 |
| `edu-no-other-landlord-facilities-ar` | R3 (2026-10-20) | R3 errata | read list adds §§ 20-22-504 to -506 |
| `edu-no-religious-display-right-ar` | R3 (2026-10-20) | R3 errata | read list adds § 16-123-107 |
| `edu-no-rent-demand-bar-ar` | R3 (2026-10-20) | R3 errata | body: § 18-17-706(2) "may be allowed"; notes support the round-2 conditions |
| `edu-no-repair-cost-termination-ar` | R3 (2026-10-20) | R3 errata | body: § 18-17-502(a) exclusion; refund only of the deposit "recoverable under" the deposit statute |
| `edu-no-security-deposit-standards-ar` | R3 (2026-10-20) | R3 errata | body and notes: the two fair housing statutes' exemptions separated (§§ 16-123-204(b), 16-123-306) |
| `edu-nuisance-ar` | R3 (2026-10-20) | R3 errata | notes: duplicate cite removed |
| `edu-occupancy-limits-ar` | R3 (2026-10-20) | R3 errata | body: two-per-bedroom presumption attributed to the Fair Housing Commission law (§ 16-123-307) |
| `edu-rent-into-court-ar` | R3 (2026-10-20) | R3 errata | body: § 18-17-706(2) "may be allowed" |
| `edu-security-deposit-use-ar` | R3 (2026-10-20) | R3 errata | notes cite § 18-16-306(a)(2) |
| `edu-smoking-medical-marijuana-ar` | R3 (2026-10-20) | R3 errata | notes: one citation per quote |
| `edu-statutory-caps-ar` | R3 (2026-10-20) | R3 errata | body: price-gouging cost exception stated as in § 4-88-303(a)(2); notes support the round-2 additions |
| `edu-tenant-repair-remedies-ar` | R3 (2026-10-20) | R3 errata | notes cite § 18-17-502(a), (c) |
| `electronic-notice-ma` | R3 (2026-10-20) | R3 errata | AR segment: citation form |
| `smoking-policy-ar` | R3 (2026-10-20) | R3 errata | notes: read list and citation form for §§ 20-27-1803, -1804 |

## §14 Gap-discovery source 1 — statute walk (rule 29)
**What was read.** The whole of ch. 18-16, ch. 18-17 and §§ 18-60-301 to -312 (92 section entries), section-open, in the main pass and again by the canvass helpers for their topics.

**Diff.** `scripts/walk.py` compared the full section index with every citation in every Arkansas row and tag segment. 17 of 92 entries are cited by no row:
- repealed or transferred entries: §§ 18-16-102 to -104, -106, -107, -109, 18-16-201 to -205;
- self-storage sections (§§ 18-16-403, -406, -408 to -410, -412 to -415): not residential;
- § 18-16-504 (nuisance complaint form): procedural, covered by the nuisance-eviction rows citing §§ 18-16-501 to -503;
- §§ 18-17-101 (title), -102 (purposes and liberal construction), -103 (remedies administered so an aggrieved party recovers appropriate damages), -801 (severability): general provisions no landlord duty turns on;
- §§ 18-17-908 (judgment for defendant), -909 (either party may appeal "as other appeals in civil cases"): covered by the eviction rows' appeal and bond lines (§§ 18-17-707, -910);
- §§ 18-60-301 (legislative intent), -308 (title not adjudicated), -312 (other actions not barred): no landlord duty.

**Found by the walk:** § 18-16-113 (no hunting or fishing rights on rented farmland unless the owner grants them in writing) → new row `edu-farmland-hunting-rights-ar` (new topic `farmland-hunting-rights`). Heading/text mismatch noted: § 18-17-701's heading names "Removal of evicted tenant's personal property" but the section has no such subsection (removal is in § 18-60-310) (§10).

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
**Lease used.** Arkansas REALTORS® Association, Residential Lease/Rental Agreement (form ©2017; 34 numbered paragraphs plus lettered notices), the state REALTORS® form used by licensees; retrieved free as a PDF with Taylor's approval (§6.2). Text extracted and saved (`src/other/ar-realtors-lease-2017.txt`); PDF SHA-256 9d9e037891c341a1…, text SHA-256 8ec83baa05a2825e…. Checked: it is an Arkansas form (incorporates Acts 535 and 1004 of 2007 by name), not a relabelled multistate template. No copyrighted text is reproduced here.
**Handbook (lead only):** Arkansas REALTORS® Association Landlord-Tenant Handbook (2004), saved beside it; it predates the 2007 Act and the 2021 quality standards, so it was used only for scenarios (§16).

**Comparison** (map in `work/lease-map.md`; verdicts):
| Lease point | Verdict |
|---|---|
| ¶1, ¶21-22 notice periods (30 days month-to-month; 14-day default notice) | matches §§ 18-17-704(b), 18-17-701(a); rows state both, plus 7 days week-to-week |
| ¶2 late charge on partial payments; NSF fee; day-5 bad-check hook | no Arkansas late-fee rule (`edu-late-fee-ar`); returned check capped at $30 plus bank fees (`returned-payments`, `edu-collection-fee-ar`); weekend roll-forward now advised (`edu-late-fee-ar`) |
| ¶3 deposit cap, trust account, deductions "in accordance with Arkansas law" | cap, 60-day itemized return, no account or interest rule, small-landlord exemption: deposit rows and `security-deposit-return-ar` |
| ¶4 possession as "conclusive evidence" of condition | Arkansas's safe harbour is the move-in defect form, not possession (`move-in-defect-form-ar`) |
| ¶5 outright sublet ban; guest registration | lawful contract terms; `no-sublet-assign`, `guest-policy` tagged |
| ¶6 nuisance as material breach | nuisance eviction subchapter rows (§§ 18-16-501 to -503) |
| ¶7 carpet and drape cleaning | `carpet-cleaning-ar` (optional) |
| ¶8 all repairs, taxes and insurance on Tenant; releases and indemnities | implied quality standards can't be shifted except by a written renovation agreement (§ 18-17-502(b), (g)); tort immunity § 18-16-110; `tax-insurance-escalation-la` tagged; no anti-exculpation statute |
| ¶10 no assistance-animal carve-out | `assistance-animal-accommodation-ar` |
| ¶12 tenant lock changes | tenant may not change locks without permission (§ 18-17-602(b)); domestic-abuse exception (§ 18-16-112(b)(2)) |
| ¶13 entry without set notice; mortgage-holder entry | no entry-notice statute; consent not to be unreasonably withheld (§ 18-17-602(a)); `landlords-access` (24 hours) tagged |
| ¶14 abandonment, disposal and sale "as provided by law" | § 18-16-108; `abandoned-property-ar`, `edu-abandoned-property-ar` |
| ¶16 casualty with 60-day landlord decision | `casualty-termination-ar` (optional) |
| ¶19 vacate on sale; uncleanliness at showings as default | no statute lets a sale end a lease (AR-L-M-011, `edu-sale-or-management-change-ar`); showings: `showing-notice-la` tagged |
| ¶20 fair housing classes | state classes and exemptions: fair housing rows (two subchapters) |
| ¶21 conviction or no-contest plea as default; notice refused unless rent paid | criminal-activity clause tagged with the domestic-abuse and call-for-help carve-outs (§ 18-16-112(b)(1), (f)); conditioning the tenant's notice on payment has no Arkansas basis and the library does not offer it |
| ¶24 time of essence; acceptance not waiver | time of essence skipped by library decision; `nonwaiver-acceptance-ar` (optional) and § 18-17-911(b) |
| ¶25 unilateral rules | `rules-ar` (fixed-term changes need agreement; periodic changes on 30/7 days' notice) |
| ¶30 attorney's fees incl. agents | § 16-22-308 and § 18-17-701(c); `default-by-tenant` |
| ¶32 incorporation of Acts 535 and 1004 by reference | no library row; the 2007 Act applies by its own force and its rights can't be waived (§ 18-17-502(g)) |
| ¶34, ¶23 licensee and agency disclosures | real-estate licensee duties, not landlord lease terms; `edu-no-landlord-registration-ar` covers manager licensing |
| Unnumbered A sex-offender registry notice | `edu-sex-offender-information-ar` (no owner duty; § 17-10-101 stigma rule) |
| Unnumbered B mold notice | no mold statute (`edu-no-mold-disclosure-ar`) |
| Unnumbered E application and pet fees | no cap; local caps preempted (`edu-no-application-fee-rules-ar`) |

No change to a shared row was suggested by the lease (rule 62).

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 237, in `work/scenarios.jsonl`, from advertising and screening through signing, move-in, rent, deposits, repairs, entry, neighbours, crimes and emergencies, death and absence, ending the tenancy, eviction, move-out, sale, foreclosure and management changes, plus Arkansas-specific ones (small-landlord deposit exemption, criminal failure to vacate, unlawful squatting, the move-in defect form, the 3-day notice to quit, abandoned property and lien, tort immunity, domestic abuse, medical marijuana, flag display, service animals, mobile homes on leased lots, roomers, farmland), and leads from the REALTORS® handbook and lease.
- **Results:** 227 answered by existing rows; 4 partial; 2 gap-law; 4 gap-none. Searches AR-L-SC-001 to -005 (SC-003 and -005, dog-bite wording, returned 0 with no positive, so no absence row rests on them).
- **Gaps closed:**
  - time limit to sue for rent or damages → `edu-limitation-of-actions-ar` (new topic `limitation-of-actions`; §§ 16-56-105, 16-56-111);
  - banning a non-tenant from common areas → `edu-trespass-notice-ar` (new topic `trespass-notice`; § 5-39-203);
  - guaranty writing rule → `edu-no-guarantor-rule-ar` amended (§ 4-59-101(a)(2));
  - jury waiver and constitutional-right waivers in writing → `edu-jury-waiver-ar` and `edu-exemptions-no-lease-waiver-ar` amended (§ 4-59-101(a)(7));
  - empty mobile home on a rented lot → `edu-mobile-home-lot-unoccupied-ar` (§ 18-16-111; lot-lease scope under § 18-17-301(3)(A) unsettled);
  - sale ending a lease → sentence added to `edu-sale-or-management-change-ar` after a fresh whole-Code search (AR-L-M-011, 7 hits, none relevant);
  - rent due on a weekend → sentence added to `edu-late-fee-ar` (§ 18-17-401(b)(1)).
- **Left as is:** tenant in jail (existing abandonment and termination rows answer it); dog bite (no statute found; liability is case law; no absence row because the searches had no positive).

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus and engine:** the official whole-Code search (§1.5) covers every title; the Constitution was loaded as CONST and searched locally with controls (§1.3).
- **Screens:** S01-S25 (exculpation, UETA, late fees, NSF, payment methods, animals, cannabis, separate documents, rent control, retaliation, formatting, fee shifting, towing, EV charging, detectors, sex offenders, military, fair housing, DTPA, flags, environmental notices, domestic violence, utility shutoff, lockout, tenant death) and discovery batteries DISC-01 to -04 (every section in the Code using landlord, tenant, lease or eviction words: 308, 556, 131 and 54 hits). The 469 non-Title-18 sections they returned were triaged (`work/lexis-triage.md`): 57 kept and read, 412 excluded with reasons (goods leases, mineral and agricultural leases, public property, taxes, licensing).
- **Findings that became rows** (outside Title 18): fair housing (ch. 16-123), state military relief (§§ 12-62-704, -705, -714), service and support animals (ch. 20-14), medical marijuana (Ark. Const. amend. 98), flag display (§ 14-1-203), local rent/fee/deposit control preemption (§§ 14-16-601, 14-54-1409), price gouging after emergencies (§ 4-88-303), returned checks (§ 4-60-103), contract fees (§ 16-22-308), interest cap and default rate (Ark. Const. amend. 89; § 4-57-101), lead (ch. 20-27 subch. 6, no-retaliation § 20-27-608), meth contamination (ch. 8-7 subch. 14), towing (§§ 27-50-1101, 27-51-1305), sealed records (§ 16-90-1417), unlawful squatting (§ 5-39-215), criminal trespass (§ 5-39-203), stigmatized property (§ 17-10-101), condominium rental assessments (§ 18-13-116), county solid-waste fees (§§ 8-6-212, 14-20-109), sewer rates (§§ 14-235-212, -223), water collection (§§ 14-234-601 to -605), utility tenant notice (§ 25-19-105), debt collection (ch. 17-24), data security (ch. 4-110), lodging taxes (§§ 26-52-301, 26-74-501, 26-75-602, 26-75-701), clean indoor air (§§ 20-27-1803 to -1805), video voyeurism (§ 5-16-101), firearms in employer lots (§ 11-5-117), pools (ch. 20-30), fire escapes and alarms (§§ 20-22-502 to -506), arbitration (ch. 16-108), statute of frauds (§§ 4-59-101, -102), limitations (§§ 16-56-105, -111), foreign ownership (§§ 18-11-110, -802 to -804), accessory dwelling units (§ 14-56-205).
- **Conduct a shared clause restricts that Arkansas protects:** medical marijuana use other than smoking (amend. 98, § 6(b)(5)) → `smoking-policy-ar`; trained service animals (§§ 20-14-303 to -305) → `assistance-animal-accommodation-ar`; calls for police or emergency help (§ 18-16-112(f)) → kept in `criminal-activity-ky`; U.S. flag display for 12+ unit landlords (§ 14-1-203) → `us-flag-display-ar`. Firearms, signs and speech: no Arkansas protection reaching a private lease (AR-L-C6-002, -003, -008).

## §18 Topic canvass (rules 27, 36)
- **Method:** seven slices (C1-C7, 51 topics each, every `topic_key` in `lease-clause-topics.md`), two agents at a time at most, each saving one JSON line per topic and its rows after every topic (`CANVASS-BRIEF`: Present / Confirmed absent / Not applicable, proof of absence on the official whole-Code search with a positive where one exists, tenancy type, deposit scope, two-version sections, Constitution).
- **Results:**

| Slice | Topics | Present | Confirmed absent | Not applicable | Batteries |
|---|---|---|---|---|---|
| C1 | 51 | 17 | 34 | 0 | 123 |
| C2 | 51 | 27 | 24 | 0 | 94 |
| C3 | 51 | 22 | 27 | 2 | 109 |
| C4 | 51 | 24 | 27 | 0 | 56 |
| C5 | 51 | 23 | 28 | 0 | 89 |
| C6 | 51 | 12 | 39 | 0 | 115 |
| C7 | 51 | 17 | 32 | 2 | 133 |
| total | 357 | 142 | 211 | 4 | |

- **Coverage check:** every active `topic_key` in the master has at least one AR row keyed to it (`checks.py`, §8); a topic answered by a row keyed elsewhere also got a short row of its own.
- **Helpers' questions:** §6.4. **Sections helpers needed:** fetched from the official site in parts -02 to -08 (§1.1) and quoted in the rows.

## §19 Conformance-table entry
AR (2026-10-19), drawn from this log's §§ 4, 6.1, 11, 12 and 14-18. Proposed column (Claude Code sets it at sync):

| Rule | AR | Where |
|---|---|---|
| 37 tenancy type | ✓ | every row states week-to-week, month-to-month and fixed-term treatment (§12) |
| 39 eviction duties | ✓ | court rules read (§1.3); eviction rows |
| 40 formatting | ✓ | §4 (no residential lease layout rule) |
| 41 just-cause | ✓ | §11 |
| 41b `for-cause-eviction` row | ✓ | `edu-no-for-cause-eviction-ar` |
| 42 required text in shared clause | ✓ | §11 (none) |
| 43 cure promises | ✓ | §11 |
| 44 terms turned into duties | ✓ | §11; `appliances-included-ar` |
| 45 electronic notices | ✓ | §11 (UETA ch. 25-32) |
| 46 lease as the notice | ✓ | §11 (none) |
| 47 knowing-use penalties | ✓ | §11 (none; debt-collection § 17-24-507) |
| 48 separate documents | ✓ | §11 (none) |
| 49 collection costs | ✓ | §11 |
| 50 "lease controls" | ✓ | §11; `edu-optional-lease-terms-ar` |
| 51 plain language | ✓ | §11 (none) |
| 52 exculpation | ✓ | §2.1, §11 (no anti-exculpation statute; base variants tagged) |
| 53 figure vs shared clause | ✓ | §11 |
| 54 optional clauses (general screen) | ✓ | §6.1 |
| 54t tenant-caused damage | ✓ | `tenant-caused-damage-nm` tagged; `edu-tenant-caused-damage-ar` |
| 35c constitution screen | ✓ | §1.3, §17 |
| 27 seven topics with no row | ✓ | §18 (every topic has a row) |
| 55 three-bucket test | ✓ | caps and limits as education; clauses only where the lease does something (§3) |
| 57 one subject per row | ✓ | one `topic_key` per row (§8) |
| 79 summaries re-read | ✓ | every cited section read section-open; snippet-only descriptions replaced by quotes or labelled (§13) |
| 54 e.g. holdover charge | ✓ | `holdover-rate-ar` |
| 54 e.g. casualty termination | ✓ | `casualty-termination-ar` |
| 54 e.g. statutory waivers | n | no waiver statute; exemptions are constitutional (`edu-exemptions-no-lease-waiver-ar`) |
| 54 e.g. crime-free clause | ✓ | `criminal-activity-ky` tagged |
| 54 e.g. eviction-fee clause | ✓ | considered and declined with a row (`edu-collection-fee-ar`) |

## Proposed SOP changes
- **Rule 19:** where the official site rate-limits document views (Arkansas's Lexis public-access site shows a CAPTCHA after roughly 400-500 documents), use the site's own whole-Code search engine for proof of absence and fetch only the sections relied on; validate the engine first (stemming inside quotes, AND/OR/proximity, a recall check on a title read whole, a nonsense control). Arkansas's crawl could not cover the Code, and the search engine gave a complete, official absence method.
- **Rule 19:** a search engine whose result reader parses ids from result pages must also capture each result's document path, and every battery with count above parsed ids must have its unparsed paths opened before an absence rests on it. Arkansas's reader missed lettered chapters, appendix notes and subchapter notes in 46 batteries; reruns with path capture found nothing relevant, but only because every path was opened.
- **Rule 19:** a hit that matches only a chapter's or subchapter's name in the breadcrumb (common on Lexis) is still read, and subchapter "Note" documents should be named as such when they explain a count gap.
- **Rule 26:** a triage NOT verdict that rests on "the state already has a measure" should be rechecked against rule 54's "for which cases and in what shape" question before it closes the topic. Arkansas's holdover-rate clauses were all marked NOT, yet the ordinary good-faith holdover outside unlawful detainer has no Arkansas measure (`holdover-rate-ar`).
- **Rule 54:** when a lawful option is declined, check every education row that tells landlords to "put a clause in the lease" for that subject; Arkansas's eminent-domain and acceptance-waiver rows advised a clause the library did not yet offer (`condemnation-ar`, `nonwaiver-acceptance-ar` added).
- **Rule 77:** check "§" cross-references inside every cited section by script, and look up the ones outside the corpus in the official table of contents (not by fetching them). Arkansas's check found a typo'd fair-housing definition (§ 16-123-302(8)) and a sewer lien pointer to a section with no lien (§ 14-235-212(b)(1)) cheaply.
- **Rule 24 / browser:** never run a preview or navigation command in the tab holding a crawl's in-memory state, and keep the page-side tools' source in a file in the workspace so a tab reload can be recovered by re-injecting it; verify the rebuilt extractor byte-for-byte against saved records before saving new ones.
- **Rule 59:** single quotes are for statute wording only, including in tag segments; Arkansas's tag segments quoted shared clause text in single quotes, which the quote checker then read as statute text. Quote clause text in double quotes from the start.

## Proposed topic questions
- `abandoned-property`: Does the state have a separate notice-and-lien procedure for an unoccupied manufactured home on a rented lot, running to the lienholder (Arkansas, Ark. Code Ann. § 18-16-111)?
- `farmland-hunting-rights` (new): Does a tenant of rented farmland have hunting or fishing rights unless the owner grants them in writing (Arkansas, Ark. Code Ann. § 18-16-113)?
- `limitation-of-actions` (new): What periods limit a landlord's suit for unpaid rent or damages, and do partial payments restart them (Arkansas, Ark. Code Ann. §§ 16-56-105(2), 16-56-111)?
- `trespass-notice` (new): Can a landlord bar a non-tenant from common areas under the criminal trespass statute, and what defenses (guest, invitee, open to the public) apply (Arkansas, Ark. Code Ann. § 5-39-203)?
- `jury-waiver`: Does the statute of frauds require a signed writing for any agreement waiving a constitutional right (Arkansas, Ark. Code Ann. § 4-59-101(a)(7))?
- `binding-arbitration`: Does the state arbitration act exclude personal injury or tort claims, so a lease arbitration clause can't reach them (Arkansas, Ark. Code Ann. § 16-108-233(b)(1))?
- `rent-tax`: Does the state sales tax on lodging turn on "transient guests" renting on less than a month-to-month basis (Arkansas, Ark. Code Ann. § 26-52-301(3)(A))?

## Sync review (Claude Code, 2026-10-20)
- **Merge:** `merge-delta.py` against base 7ea5fbb: 380 new rows and 70 existing rows changed only in their AR tag and note segment; 8,040 rows, byte-exact CRLF round trip. The delta's SHA-256 matched §8 (6577c1a2...22b1).
- **Source limit:** Claude Code cannot reach the official Code (the Lexis public-access site serves it a script-only page), so it read what it could reach on arkleg.state.ar.us: Act 1052 of 2021 (enacting § 18-17-502 and amending § 18-60-307). Every other statement rests on the pass's section-open reading and its quote check (§8: 1,521 quotes, none missing or found only elsewhere).
- **Edited after the last check (§13):** the habitability rows among the 25 (`edu-habitability-presumption-ar`, `edu-no-repair-cost-termination-ar`, `edu-tenant-repair-remedies-ar`, `edu-casualty-mitigation-waiver-ar`) and `move-in-defect-form-ar` read against Act 1052's text of § 18-17-502(a)-(h): the six standards, the November 1, 2021 start and lease-to-purchase exclusion, the force majeure excuse, the move-in form's two-business-day rule, the excused defects, the 30-calendar-day sole remedy, no offset or withholding, and the non-waiver rule all match. The rest are citation, read-list and wording errata, accepted on the pass's quote check.
- **One clause change (every-reading rule, SOP Part 5):** Arkansas was tagged on the shared `early-termination-ks` ("one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater"); the pass found no statute on such fees and left penalty doctrine unsearched (§7). Arkansas now has its own `early-termination-ar` (supersedes `early-termination-ks`; AR untagged from it): a flat one-month fee, no Rent after the termination date once the tenant gives notice, pays and leaves, and the military (§ 12-62-705) and quality-standards (§ 18-17-502(d)) exits kept. The AR row count is unchanged at 450.
- **Same-topic pairs:** `late-fee` with `prompt-payment-discount-la` (as in Louisiana, the discount rules out charging a late fee for the same month), and `existing-condition` with `move-in-defect-form-ar` (a general acknowledgment and the statute's separate defect form): different subjects, no choice group needed.
- **Open items (§7):** no row is NEEDS_REVIEW; case-law questions are stated in their rows with the cautious course; administrative rules and local ordinances are the stated boundary.
- **Citations file:** `lease-clause-citations-AR.csv`, 450 rows (202 CITED, 222 CONFIRMED_ABSENT, 26 GENERIC: shared contract terms whose AR note says only "Tagged as written", plus the usufruct not-applicable row).
- **Legal watch:** `legal-watch-ar.yml`, held until after October 21, 2028 (first run November 21, 2028, day 21 at 14:00 UTC); 298 sections keyed by bare number (`18-17-502`), queried as `"18-17-502" AND "Arkansas Code"`; manual items for the statutory slips in §10 and for the court and administrative rules.
- **SOP 1.77:** all eight proposals adopted. Seven topic questions added (360 topics, with the new `farmland-hunting-rights`, `limitation-of-actions` and `trespass-notice`). No new `{{variables}}`. §10's product and other-state findings are in the backlog.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.
