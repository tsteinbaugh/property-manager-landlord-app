# Lease clause decision log — U.S. Virgin Islands (VI, #54, a territory)
- **Pass:** run 2026-10-22 in one chat, the territory's only Desktop chat (rule 8). No earlier Virgin Islands output existed and the library had no row naming the territory (rule 25: none to re-verify). The session resumed once after a context summary; every working file survived, and the SOP, kickoff and log example were re-read from the session's upload folder after the resume (see "Proposed SOP changes").
- **Inputs (SHA-256):** `lease-clauses.csv` 51c030fa1080a62c2993e5b53685ea71b5af2094c9b7b922990c228d80e5ea41; `lease-clause-sop.md` (v1.81) b68b4e64b112e5e29b6e3305fc1007d5bb81d037350a5665f6be82f7df8d9a86; `lease-clause-topics.md` 341ab2752a5e84be7d0369978b90dc03883b3470ccf420e88ce26e5f9de0ecc0; `KICKOFF-PROMPT.md` b956542cf70e9f25b8264b0d9e1a4046a6e0ba27fae5efe07f2809e08b3b2078; `log-format-example.md` 72f46c69065ab94a35b8ce26b77e819ad63ef8356c2b415e1d6a58a0a7234120; `corpus-VI-20261022.tar.xz` b789190bcf07e543ceb0c9ec4d1185d756bdfd08fa70ef8b9fdb2f8e4c98af26 (matches the kickoff).
- **Outputs:** `lease-clauses-VI-delta.csv` (456 rows: 378 new Virgin Islands rows and 78 shared rows tagged VI) and this log.
- **The territory in one paragraph:** the Virgin Islands has no residential landlord-tenant act. A residential tenancy is governed by four old sections of 28 V.I.C. ch. 31 (rent liability, termination of tenancies at will, the 2010 domestic-violence section), the forcible entry and detainer chapter (§§ 781-795), a 1947 rent-control subchapter (§§ 831-846) that the Code still prints as in force and that would require a statutory ground and 30 days' written notice to quit for every possession case, the Housing Code (29 V.I.C. ch. 6), civil-rights law (10 V.I.C. § 64 and ch. 1), the Plain Language Consumer Contracts law (12A V.I.C. ch. 4, which expressly includes residential leases), the Payment Options law (12A V.I.C. ch. 8), an emergency rent-freeze power (23 V.I.C. §§ 1005(g)(10), 1017), and common law, which the Virgin Islands Supreme Court shapes itself. There is no deposit statute, no entry statute, no late-fee rule and no tenant repair remedy.

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A — files, counts, source registry (rules 23-25) | Done | §1.1, §1.2 |
| Currency (rule 16) | Done | §1.2 |
| Step B — tag-first screen of every active clause (rule 26) | Done | §2 |
| Topic canvass, all 362 topics (rules 27, 36) | Done | §18 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Step D screens (rules 40-53) | Done | §11 |
| Optional clauses (rule 54) | Done | §6.1 |
| Questions to Taylor (rule 76) | Done | §6.2 |
| Integrity checks (rules 7, 22, 59, 63, 64, 79) | Done | §8 |
| Independent check (rule 80) | Done | §13 |
| Delivery (rules 70-75) | Done | this log and the delta |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A (rule 23):** the attached `lease-clauses.csv` has SHA-256 51c030fa…e5ea41, 26,991,666 bytes, CRLF row ends, no BOM and 17 columns. It has 9,610 rows, 9,500 of them active: 1,393 lease clauses (125 shared by two or more states or with blank states, 1,268 single-state) and 8,107 education rows. Every per-state count matches the kickoff (derived by script from the file at the path read). The csv module's writer round-trips the master byte for byte, so the delta uses the same quoting and CRLF row ends.
- **Code channel:** the Virgin Islands Code is published only on LexisNexis's public-access site (linked from legvi.org). It was read through Taylor's browser (the built-in browser pane): Taylor approved the site's "I Agree" terms click; the terms page had already cleared. Page-side tools (`scripts/lexis_page_tools.js`, `scripts/lexis_vcites.js`) crawled the table of contents (14,613 nodes, 13,046 with a document id), fetched each relied-on section with an in-page SHA-256 of its text, and exported records to the workspace, where `scripts/harvest_all.py` re-hashed every saved file against the browser's hash (0 mismatches across 827 Code sections). Each section page was taken from the site's own document view, anchored on its `#SS_DocumentTitle` heading.
- **Document-view budget (rule 19, MS 1):** the site showed a CAPTCHA on the first document view, again after about 511 views and again after about 260 more (≈771). Taylor solved all three. Helpers never opened Lexis documents: they queued section requests in a shared file (`DOC-REQUESTS.txt`) and the main pass fetched them in batches (827 Code sections fetched in all, including those the independent check asked for). Searches don't count as views; helpers ran their batteries in their own tabs.
- **Corpus (Claude Code, 2026-10-22):** the tar's SHA-256 matches the kickoff. I reproduced `verify_vi.py`'s check rather than running code from the archive (rule 24, GU 3): all 747 shipped files hash-match their manifests (732 OCR act texts, 4 PDFs, 11 other files); 728 act PDFs are listed but not shipped, as `README.txt` says. `acts.csv` lists 732 acts, Act Nos. 8439-9171, with one gap: Act No. 8508 appears in neither `acts.csv` nor the bills listing (unexplained; flagged in §10).
- **Fetched outside the corpus (for the next corpus):** the Superior Court Rules (amended June 1, 2019; PDF SHA-256 f82cf848…, 35 pp), the Small Claims Rules (c20fb0f2…, 9 pp) and the Virgin Islands Rules of Civil Procedure (cc469259…, 131 pp) from vicourts.org; Keating-Smith v. Mustafa, 2024 VI 12 (5efe5c35…, 29 pp) from the Supreme Court's site — all parsed in the browser with pdf.js (cdnjs 3.11.174) because the shell's proxy refuses those hosts, with each PDF's byte hash taken in the same step. Federal text: 31 U.S.C. sections from govinfo.gov (United States Code, 2024 edition, "most recent" link service; uscode.house.gov was in a temporary format and its section pages returned "Page Not Found") and 16 C.F.R. sections from eCFR's renderer (current). Real-lease material for §15 from cdbgdr.vihfa.gov. A DLCA press release (2012) and two legislative testimony pages were read with the fetch tool as leads only.
- **Citation forms used (kickoff):** `28 V.I.C. § 789(a)`; session laws as the Code's history lines print them ("Act No. 8955 (2024)"); `48 U.S.C. § 1561`; court rules `Super. Ct. R. 37`, `V.I. R. Civ. P. 6(a)`, `Small Claims R.`; FEDERAL citations marked "FEDERAL:". The Virgin Islands Rules and Regulations are not on the Lexis public-access site (it offers only the Code), so no `V.I. R. & Regs.` citation appears; every row that would rest on an agency rule says the rules were not searchable.

### §1.2 Currency and dated versions (rule 16)
- **Lexis currency statement (every document header):** "Statutes current through Act 9046 of the 2025 session of the 36th Legislature, including all code changes through October 25, 2025". The Code is unannotated but prints history lines on most sections.
- **Uncompiled acts:** Act Nos. 9047-9171 (125 acts, 2025-2026) post-date the compilation. Screened by script over `acts.csv` titles (rent, lease, housing, tenant, landlord, evict, price, emergency, consumer, deposit, dwelling, occupancy, building code, fire, cannabis, smoking, civil rights, discrimination, utilities, water, sewer, electronic, court, procedure, small claims, interest, usury, license, tax) and over the OCR full text with word-boundaried tenancy terms (landlord, tenant, tenancy, evict, security deposit, notice to quit, rent control, rental housing, residential lease, dwelling unit): the only hit is Act No. 9073 (insurance holding companies: "waiver of any landlord lien"). The title hits are government property leases (9070, 9071, 9080, 9082, 9107, 9118, 9160, 9164-9166), WAPA appropriations, tax amnesties (9050, 9087), the LBJ Gardens compensation act (9125), taxicab and rental-vehicle acts. Intersecting every section the delta cites (553) with the uncompiled acts' amendment sentences (rule 16, HI 2) found one: Act No. 9065 (2025) adds a subsection (h) on expedited building permits for developers to 29 V.I.C. § 294; the rows cite only § 294(a), which it doesn't change (read from the OCR text; not quoted). Other matches were references, not amendments (31 V.I.C. § 205 in government-lease approval acts; 12 V.I.C. § 911(e) in a coastal-permit act; 22 V.I.C. § 759(b), amended by Act No. 9084 on insurance-producer licence renewal, is cited in one row only as a battery hit). No act in the range is an omnibus or budget act over 40,000 characters of text.
- **All acts 2021-2026 (8439-9171):** the same full-text screen found tenancy terms only in Act Nos. 8466 (property tax), 8467 (Timeshare Act, compiled as 28 V.I.C. ch. 36), 8543 (a commemoration), 8588 (unclaimed property, § 660 notice, compiled), 8603 and 9080 (government leases), 8937 (real estate brokers' dual agency, compiled) and 9073; the other matches were "Lieutenant" (the screen then got a leading word boundary). This confirms Claude Code's screen: no act of 2021-2026 amends a residential landlord-tenant, eviction or deposit provision. History lines agree (the newest landlord-tenant history line is Act No. 7180 (2010), § 753). No row quotes OCR act text.
- **Dated versions:** Lexis prints two versions of 27 V.I.C. § 423; the rows use the one whose history line carries the latest act (reenacted by Act No. 8937 (2024)) and treat the other as superseded (rule 19, MS 3). 20 V.I.C. ch. 49 (abandoned motor vehicles) was repealed and re-enacted by Act No. 8955 (Dec. 18, 2024); the rows cite the new text (an early working note calling the chapter repealed was wrong and never reached a row).
- **Pending bill (not law):** Bill No. 36-0022 would amend 28 V.I.C. § 752 (notice to end month-to-month tenancies and to raise rent). It was heard and held by the Committee on Housing, Transportation and Telecommunications on May 14, 2025 and is not among the enacted acts through Act No. 9171. Legal watch (§10).
- **Federal currency:** U.S.C. from the 2024 edition on govinfo; C.F.R. from eCFR current on 2026-10-22. 24 C.F.R. §§ 965.652 and 965.654 return 404 (not in force); the range cite §§ 965.651-965.655 rests on the three sections that exist.

### §1.3 Organic Act, court rules and administrative rules (rules 21, 35, 39)
- **Revised Organic Act (stands in for a constitution):** 48 U.S.C. ch. 12 from the corpus (govinfo USCODE-2024 HTML). The bill of rights, 48 U.S.C. § 1561, was read whole: due process and equal protection, "No law impairing the obligation of contracts shall be enacted", no imprisonment for debt, speech, religion and assembly, and the extension of the First to Ninth Amendments (including the Seventh, civil jury), the Thirteenth, the second sentence of § 1 of the Fourteenth, and others. Every provision binds territorial lawmaking or government; none reaches a private residential lease term. §§ 1574(a) (legislative power) and 1576 (municipal councils' functions transferred to the territorial government) were read for `governing-law-vi`. The Lexis search does not index the Organic Act, so the screen was a direct reading (rule 35), recorded in §17.
- **Court rules:** the Superior Court Rules were read whole (35 pages): R. 6d (the court's own returned-check fee), 6e (marshal's storage fees for property held under a court order), 16 (the court may seal a case it deems sensitive), 37 (no joinder or counterclaim in a landlord-tenant possession case), 44 (landlord-tenant cases on a separate calendar, heard on the return day). The Small Claims Rules were read whole (9 pages). The Virgin Islands Rules of Civil Procedure (131 pages) were screened whole by keyword (landlord, tenant, forcible, detainer, evict, possession, notice to quit, seal, confidential, public access, CARES, marshal) and the hit pages read: R. 1 (scope; reporter's note that landlord-tenant rules may follow), 4 (marshal service), 5.2 (sealed filings), 6(a) (computing time: periods of 14 days or less exclude weekends and legal holidays), 17(c) (minors), 70(d) (writ of execution or assistance on a judgment for possession), 79-1 (sealing sensitive records). Weaker method: the civil rules were keyword-screened, not read page by page (rule 39); no rule seals eviction records as such, and none makes the CARES Act notice a filing condition. The Judiciary's forcible entry and detainer complaint form (corpus) asks the landlord to state the condition breached and the date and manner of the notice to quit.
- **Case law:** one opinion was read, Keating-Smith v. Mustafa, 2024 VI 12 (forcible entry and detainer is a summary equitable proceeding for possession only; rent and damages need a separate civil action with a jury right; the Court applied 28 V.I.C. § 789(a)-(b) without discussing § 789(c) or the rent-control subchapter). No other case law was searched; every row that rests on common law says so (log §2.2 class decision 6).
- **Administrative rules:** the Virgin Islands Rules and Regulations are not on the Lexis public-access site and were not searched. Rows that would turn on an agency rule (DLCA unconscionability declarations, Health Department pest rules, Public Services Commission and WAPA rules) say so. Governor's emergency proclamations and executive orders were not searched.

### §1.4 Agents and usage
- **Usage budget (kickoff):** large files were read by script, never into the chat. At most two agents ran at a time: eight canvass helpers in pairs (C1+C2, then C3+C4, C5+C6, C7+C8, each pair overlapping only as one finished and the next started), each saving its answer and rows after every topic; then two triage helpers (TA, TB). Two helpers were resumed briefly, one at a time, to close rows that had waited on queued section reads. The independent check ran three rounds (the kickoff maximum), one agent at a time (§13).
- **Research mode** was not used: no rule 9 trigger arose that the batteries and section reads couldn't settle.
- **Permission note:** one helper (C2) could not write its battery exports into the shared `src/batteries/` folder and asked the main pass to copy them; I left them in its own folder rather than doing an action a helper had been refused, and told Taylor. Rows cite them by name; they are listed in §1.5.

### §1.5 Batteries (rule 19)
- **Engine:** the Lexis site's own whole-Code search, validated first (battery VI-ENG01): the nonsense control "zqxjvbwk" returns 0 and the must-hit control "Legislature" 973; quoted phrases are exact (no plural stemming inside quotes); unquoted words stem plurals; "!" truncates; w/n works in both orders; AND/OR work; w/n inside quotes is literal; chapter and subchapter names in the breadcrumb are indexed (so every ch. 31 section hits "landlord"), which is why hits were read in context. Alternations are wrapped in parentheses before a proximity limb (an unwrapped `"good cause" OR "just cause" w/20 (...)` in VI-M-MAP02 returned 0 and is not relied on). Result readers capture each hit's document path and count; every battery cited for an absence ran its controls in the same batch and a positive.
- **Count:** 105 batteries: 9 in the main pass (VI-ENG01, VI-M-MAP01, VI-M-MAP02, VI-M-F01, VI-M-TAG01-TAG03, VI-M-OT01, VI-M-SC01) and 96 by the canvass helpers (VI-C1-001-019, C2-001-009, C3-001-011, C4-001-009, C5-001-013, C6-001-011, C7-001-013, C8-001-011). Main-pass and C1 records are in `src/batteries/`; C2-C8 records in each helper's `batteries/` folder. One positive failed: VI-C3-004 (two words 13 apart, not within 10); it is cited only as "recorded as failed, rerun as VI-C3-005". Two limbs over-matched ("attorn!" also matches "attorney": VI-C1-017, VI-C2-007); each citing row says the limb is uninformative and names the rerun (VI-C1-019, VI-C2-008).

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1393 active lease clauses. The 125 shared and blank-states clauses, and the federal education row `edu-cares-act-notice` at the kickoff's request, were read one by one in the main pass (full text of each, `work/shared_bodies.txt`) against Virgin Islands law; the 1,268 single-state clauses were triaged (§2.3).
- **Result:** 78 shared rows tagged VI as written (including `edu-cares-act-notice`); 5 overridden by Virgin Islands rows; 48 shared clauses not tagged; 0 single-state clauses tagged (one adapted as `animal-care-access-vi`).
### §2.1 Tagged VI as written (78)
`addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `association-approval-la`, `carpet-cleaning-ar`, `common-area-use`, `criminal-activity-ky`, `default-by-tenant`, `detector-care-la`, `due-at-signing`, `early-termination-ks`, `edu-cares-act-notice`, `electronic-notice-ma`, `electronic-signatures`, `entire-agreement`, `ev-charger-installation-hi`, `existing-condition`, `extended-absence-notice-ks`, `fire-safety-grilling`, `furnishings-included-la`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `improvements-ownership-la`, `informal-dispute-resolution-or`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance`, `landlords-access`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `lease-copy-receipt-hi`, `no-alterations`, `no-disturbance`, `no-liens-ar`, `no-sublet-assign`, `nonrefundable-fees-wv`, `notices`, `owner-occupancy-termination-ar`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pest-cooperation-la`, `pet-insurance-requirement`, `pet-policy-or`, `possession-delay`, `prompt-payment-discount-la`, `rent-concession-wi`, `rent-escalation-la`, `rent-increase-midterm-ky`, `rent-installments-or`, `rent-payment`, `rental-application-accuracy-la`, `residential-use-only`, `rules-ia`, `scheduled-services-entry-la`, `security-deposit-use`, `services-utilities-provided-ks-oh`, `severability`, `showing-notice-la`, `smoking-policy`, `storage-space-ks-oh-ca`, `surrender-end-of-term`, `tax-insurance-escalation-la`, `tenant-caused-damage-nm`, `tenant-death-contact-nh`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenant-repair-agreement-hi`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`.
Each tag's reason, citations, basis and plain-language flag are in its " | VI: …" notes segment; the fee screens on `keys` and `hoa-compliance` (rule 26, kickoff) found no closed fee list and no domestic-violence lock-change statute (battery VI-M-TAG02).
### §2.2 Clauses read in the main pass and not tagged, with reasons
**Class decisions** (cited in notes as "log §2.2 class decision N"):
1. **Rent control (28 V.I.C. ch. 31, subch. III) — status unsettled; cautious course.** The Code prints §§ 831-846 as current; § 846 keeps them in force until the Legislature declares the 1947 housing emergency ended, and no such declaration was found (whole-Code search; pre-2021 session laws not searchable for this library); 3 V.I.C. § 218(a)(3) still assigns enforcement of "price and rent control laws". §§ 789 and 292 are each stated to be suspended while subch. III is in effect. The V.I. Supreme Court applied § 789(a)-(b) in 2024 without addressing § 789(c) or subch. III (Keating-Smith v. Mustafa, 2024 VI 12, ¶ 32). Rows: (a) tell landlords the question is open (case law beyond Keating-Smith not searched); (b) the cautious course for every possession case is a written notice to quit served at least 30 days before filing (§ 843), which also satisfies § 789(b)'s 3 days and § 752's periods up to a month, and a ground listed in § 840(a) (owner's good-faith personal use; good-faith demolition with plans complete; tenant nuisance, unreasonable damage or repeated serious misconduct; nonpayment); (c) never state that a lease may end "for any reason" or "at the end of the term without cause" without saying subch. III may require a § 840 ground; (d) rent ceilings: say the subchapter's 1947-based ceilings and petition process are printed but no evidence was found that a Rent Control Officer operates today (Taylor not asked; legal judgment, rule 76); do not advise landlords to price at 1947 levels. Hotels and transient lodging houses are outside subch. III (§ 845).
2. **Exculpation ("Landlord is not liable").** No Virgin Islands statute was found that voids a lease term exempting the landlord from liability for its negligence (battery VI-M-TAG01), but the common law (decided by the V.I. Supreme Court) was not searched and many jurisdictions void such terms in residential leases. Cautious course: use the no-disclaimer variants (`tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `services-utilities-provided-ks-oh`); new V.I. clauses don't disclaim the landlord's own negligence.
3. **No money in an FED.** Rent, late fees and damages can't be awarded in a forcible entry and detainer action; they need a separate civil action (jury right) (Keating-Smith, ¶¶ 37-39; Super. Ct. R. 37 bars joinder and counterclaims). Rows about collecting rent/fees/damages say "in a separate civil action (or small claims up to $10,000)".
4. **Notice to quit method.** A notice to quit must be in writing and delivered to the tenant or left at the premises in the tenant's absence (28 V.I.C. § 790). E-mail alone is not a notice to quit: where another law specifies a method, UETA keeps it (11 V.I.C. § 108(b)(2)), and FEDERAL: E-SIGN excludes eviction and right-to-cure notices for a primary residence (15 U.S.C. § 7003(b)(2)(B)).
5. **Tenancy types (rule 37).** § 752: an estate at will or by sufferance ends on three months' written notice, or, where rent is payable at intervals under three months, on notice equal to the rent interval (so month-to-month: one month; week-to-week: one week); fourteen days' written notice to quit for nonpayment on a lease at will. Fixed term: ends at the end of the term (§ 789(a)(2) holdover after a notice to quit; 3 days, § 789(b)). Under class decision 1 the cautious course is at least 30 days' written notice before filing in every case.
6. **Common law.** Late fees as penalties, liquidated damages, mitigation, waiver by acceptance, implied warranty of habitability, landlord's duty in common areas, and similar points rest on common law, which the V.I. Supreme Court develops itself (it does not automatically follow the Restatements; the former 1 V.I.C. § 4 rule — check its current text in 1 V.I.C. ch. 1). Case law was not searched (except Keating-Smith). Rows say so ("rests on case law not searched for this library") and draft so a clause works under every reading (reasonable amounts, actual costs, self-limiting language).
7. **Consumer Protection Law (12A V.I.C. ch. 2).** § 101 reaches the "lease, rental ... of any consumer goods or services"; whether a residential tenancy is a lease of consumer "goods or services" is not settled in the Code (case law not searched). Cautious course: treat lease statements as subject to the deceptive-practice standard (§ 102(a)); an "unconscionable trade practice" exists only where declared with particularity in law or a DLCA regulation (§ 102(b)) — the Rules and Regulations were not searchable for this library.
8. **Civil rights classes.** Housing: race, creed, age, color, national origin, sex, sexual orientation, gender identity, disability, political affiliation (10 V.I.C. § 64(8)(a)); exemptions as listed there. No source-of-income, familial-status or marital-status protection in V.I. housing law was found (FEDERAL FHA adds familial status). Private action with mandatory attorney's fees (§ 64(15)).
9. **Territory, not state.** Body text says "the Virgin Islands" or "the territory". The territory has no separate county or municipal governments with lawmaking power (confirm in the canvass of local-ordinance topics); the Legislature legislates for all three islands.
10. **Fees.** No closed list of permitted fees, no deposit cap, no late-fee cap and no application-fee rule was found (canvass proves each). Statutory fee rules found: sewer user fee pass-through limited to the actual fee attributable to the unit (19 V.I.C. § 1535); water/electricity charged to a tenant must be based on the tenant's own use where § 795 applies; no charge to permit cable TV installation (30 V.I.C. § 317); no extra charge for a blind tenant's dog guide (10 V.I.C. § 155).
11. **Domestic violence (28 V.I.C. § 753).** Every clause that lets the landlord terminate, penalize or evict for conduct must not reach a residential tenant's calls for police or emergency help in a DV situation, and must not end a tenancy solely because the tenant is a DV victim; early-termination fees must not apply to a § 753 release.
12. **Housing Code is the habitability baseline.** The owner's duties in 29 V.I.C. § 333 are public-law duties enforced by VIHFA; no statute lets a lease shift them, and no statutory tenant self-help remedy (repair-and-deduct, withholding) was found (canvass proves). Occupant duties (§ 333(b)(11)-(13)) may be restated in a lease as tenant duties.

**Not tagged:**
- `acceptable-payment-methods`: overridden by `acceptable-payment-methods-vi` (landlord may change methods; 12A V.I.C. § 452: cash and card, customer chooses).
- `acceptable-payment-methods-nj`: family member not chosen; rests on New Jersey law; override above.
- `appliances-excluded-la`: Louisiana warranty regime; `appliances-excluded-vi` written.
- `assistance-animal-accommodation`: overridden by `assistance-animal-accommodation-vi` (deny/withdraw sentence has no exception for a blind tenant's dog guide, 10 V.I.C. § 155; found by triage).
- `cannabis-restrictions-ak`: Alaska regime; `cannabis-restrictions-vi` written (19 V.I.C. §§ 779(c), 783, 798(c)).
- `casualty-termination-mt`: Montana figures; `casualty-termination-vi` written.
- `default-by-tenant-co`: family member not chosen; base tagged.
- `default-by-tenant-ks-ne`: family member not chosen; base tagged (its fee sentence fits 5 V.I.C. § 541(b)).
- `early-termination`: fee measured on the remaining Term also reaches periodic tenancies; `early-termination-ks` (fixed-term only) tagged.
- `end-of-term-notice-ga`: Georgia retaliation safe harbour; no V.I. counterpart.
- `ev-charging-end-of-tenancy-co`: rests on Colorado's EV statute.
- `ev-charging-shared-area-co`: rests on Colorado's EV statute.
- `existing-condition-pr`: family member not chosen; base tagged.
- `firearm-rules-la`: Louisiana vehicle-storage statute; `firearm-rules-vi` written (23 V.I.C. § 489a).
- `governing-law`: overridden by `governing-law-vi` ("State of {{state}}", city or county; 48 U.S.C. § 1576).
- `government-fee-reimbursement-ky`: no city or county governments (48 U.S.C. § 1576).
- `holdover`: "maximum amount permitted by applicable law" has no referent (no holdover statute); `holdover-ca` tagged.
- `landlord-maintenance-nd`: covered by `landlord-maintenance`.
- `landlords-access-mi`: family member not chosen (`landlords-access` tagged; no V.I. entry statute).
- `late-fee-ky`: family member not chosen; `late-fee` tagged.
- `late-fee-ne`: family member not chosen; rests on Nebraska law; `late-fee` tagged.
- `maintenance-allocation-ks`: Kansas separate-writing regime; no V.I. separate-writing rule (`tenant-repair-agreement-hi` tagged).
- `parking`: class decision 2; `parking-ks-oh-ca` tagged.
- `parking-mn`: class decision 2; `parking-ks-oh-ca` tagged.
- `parking-vehicle-rules-id`: family member not chosen; base tagged.
- `parking-vehicle-rules-ny`: New York shape; base tagged.
- `periodic-tenancy-notice-mt`: Montana figures; `periodic-tenancy-notice-vi` written (28 V.I.C. § 752).
- `pest-cooperation-pr`: family member not chosen; `pest-cooperation-la` tagged.
- `pet-policy`: entry to remove a pet has no statutory support (14 V.I.C. § 1747(2)); `pet-policy-or` tagged.
- `possession-delay-ca`: family member not chosen; base tagged.
- `prohibited-acts-renter-wy`: Wyoming statute wording; covered by `no-disturbance`, `tenant-maintenance`, `landlords-access`.
- `rental-application-accuracy`: no expungement carve-out (5 V.I.C. §§ 3738, 3739(c)); `rental-application-accuracy-la` tagged.
- `returned-payments`: overridden by `returned-payments-vi` (ceiling-only fee, rule 53; cashier's-check-only sentence vs 12A V.I.C. § 452(a)(2)).
- `returned-payments-ky`: same cashier's-check sentence (12A V.I.C. § 452(a)(2)); override above.
- `rules-wi`: family member not chosen; `rules-ia` tagged.
- `security-deposit-return`: blank-states parent ("time period required by applicable law"; none in the territory); overridden by `security-deposit-return-vi`.
- `services-utilities-provided`: class decision 2; `services-utilities-provided-ks-oh` tagged.
- `snow-removal`: not applicable (no snow).
- `storage-space`: class decision 2; `storage-space-ks-oh-ca` tagged.
- `storage-space-mn`: class decision 2; `storage-space-ks-oh-ca` tagged.
- `surrender-end-of-term-ks-ne`: points to a "Handling of Property Left Behind" section; base tagged.
- `surrender-end-of-term-mn-nd`: points to a statutory property-left-behind section the territory lacks; base tagged.
- `surrender-end-of-term-nh`: same; base tagged.
- `tenant-maintenance-nv`: Nevada statute wording; base tagged (tracks 29 V.I.C. § 333(b)(11)-(13)).
- `tenants-property-insurance`: class decision 2 (no "Landlord is not liable" disclaimer); `-ks-oh-ca` tagged.
- `tenants-property-insurance-mn`: class decision 2; Minnesota gross-negligence shape; `-ks-oh-ca` tagged.
- `utilities-responsibility-ky`: family member not chosen; base tagged.
- `utility-allowance-cap-co`: can bill a shared-meter excess; 28 V.I.C. § 795 charges on the tenant's own use; `utility-allowance-cap-vi` (own meter only) instead.
### §2.3 Single-state clauses (rule 26 triage)
- **Screened:** 1,268 single-state clauses. A script set aside the 694 whose title or body names another state or its statute (`work/triage_excluded.json`); two helpers (TA, TB; `TRIAGE-BRIEF`) read the remaining 574 in full, 287 each, with each clause's basis and the first 900 characters of its notes. The script's filter missed about 17 clauses that cite their own code as "Civil Code section N", "Penal Code" or a statute name; the helpers caught each as OWN-STATUTE.
- **Verdicts (574):** NOT/OWN-STATUTE 531; NOT/VI-ANSWERED 26; NOT/CONFLICT 6; NOT/NOT-APPLICABLE 6; NOT/REDUNDANT 4; TAGGABLE 1.
- **TAGGABLE:** `animal-care-access-la` (TB). It rests on no Louisiana statute but uses Louisiana terms ("succession representative", "local animal control"), so the main pass wrote `animal-care-access-vi` in the territory's terms instead of tagging it (rule 28).
- **CONFLICT (6):** `returned-payments-mi`, `-nm`, `-ok`, `-wi`, `-nh` (cashier's-check-only rules vs 12A V.I.C. § 452(a)(2)); `holdover-oh` (joins rent claims to the possession case; class decision 3, Super. Ct. R. 37).
- **VI-ANSWERED (26):** holdover-rate variants (AL, GA, IN, MI, NC, PA, SC, TN) → `holdover-rate-vi` (the only new shape is a dollar rate; AL, IN, MI, SC also lack the nonpayment exclusion); tenant-caused-damage variants (IN, MN, ND, OK, TN, WY) → `tenant-caused-damage-nm` (the Tennessee-model "Rent will not abate" was left out on purpose, §6.1); `holdover-nd`, `association-approval-fl`, `ev-charging-requirements-co`, `periodic-tenancy-notice-wy`, `security-deposit-return-pr`, `rent-increase-midterm-wv`, `-nh`, `criminal-activity-wv`, `-la` (no-cure termination not safe under § 840(a)(3)), `electronic-notice-nm`, `carpet-cleaning-la`, `governing-law-la` → the VI rows and tags on those topics.
- **Main-pass changes from triage:** override `assistance-animal-accommodation-vi` (TB: dog-guide conflict); `animal-care-access-vi`; solvent-extraction limb added to `cannabis-restrictions-vi` (TA, 19 V.I.C. § 783(b)(2)).
## §3 New rows (rule_type, basis, citation)
### §3.1 Virgin Islands lease clauses (27 new)
| Row | rule_type | basis | topic_key | supersedes | source | key citations |
|---|---|---|---|---|---|---|
| `governing-law-vi` | RECOMMENDED | SERVES_LANDLORD | governing-law | `governing-law` | main |  |
| `security-deposit-return-vi` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | main | 1 V.I.C. § 4; 28 V.I.C. § 652(13); 28 V.I.C. § 753(a) |
| `acceptable-payment-methods-vi` | CONSTRAINED | CONSTRAINED_TERM | acceptable-payment-methods | `acceptable-payment-methods` | main | 12A V.I.C. § 451(a); 12A V.I.C. § 451(e); 12A V.I.C. § 452(a); 12A V.I.C. § 452(c) |
| `returned-payments-vi` | CONSTRAINED | CONSTRAINED_TERM | returned-payments | `returned-payments` | main | 1 V.I.C. § 4; 12A V.I.C. § 452(a); 22 V.I.C. § 1636; 9 V.I.C. §§ 857 |
| `assistance-animal-accommodation-vi` | RECOMMENDED | SERVES_LANDLORD | assistance-animal-accommodation | `assistance-animal-accommodation` | main | 10 V.I.C. § 155; 10 V.I.C. § 158; 10 V.I.C. § 64(8) |
| `animal-care-access-vi` | CONDITIONAL | SERVES_LANDLORD | animal-care-access | — | main | 1 V.I.C. § 4; 14 V.I.C. § 1747; 14 V.I.C. § 1747(2); 14 V.I.C. § 183 |
| `collection-costs-vi` | CONDITIONAL | SERVES_LANDLORD | collection-fee | — | C1 | 12A V.I.C. § 101; 5 V.I.C. § 541; 5 V.I.C. § 541(b) |
| `tenant-caused-fines-vi` | CONDITIONAL | SERVES_LANDLORD | governmental-fines | — | C1 | 19 V.I.C. § 1535; 21 V.I.C. § 127; 23 V.I.C. § 605; 27 V.I.C. § 421 |
| `hotel-room-tax-vi` | CONDITIONAL | SERVES_LANDLORD | rent-tax | — | C1 | 33 V.I.C. § 54; 33 V.I.C. § 54(a); 33 V.I.C. § 54(b); 33 V.I.C. § 54(c) |
| `fees-and-charges-vi` | RECOMMENDED | SERVES_LANDLORD | required-fees | — | C1 | 10 V.I.C. § 155; 11A V.I.C. § 1; 12A V.I.C. § 101; 12A V.I.C. § 102 |
| `unpaid-amounts-interest-vi` | CONDITIONAL | CONSTRAINED_TERM | unpaid-damages-interest | — | C1 | 11 V.I.C. § 951(a); 11 V.I.C. § 951(b); 11 V.I.C. §§ 951; 11 V.I.C. §§ 952 |
| `utility-meter-request-waiver-vi` | CONDITIONAL | SERVES_LANDLORD | utility-interruption-submeter | — | C2 | 28 V.I.C. § 795 |
| `utility-allowance-cap-vi` | CONDITIONAL | CONSTRAINED_TERM | utility-allowance-cap | — | C3 | 19 V.I.C. § 1535; 28 V.I.C. § 795; 28 V.I.C. § 840(b); 28 V.I.C. §§ 795 |
| `utility-shutoff-notice-designee-vi` | CONDITIONAL | SERVES_LANDLORD | utility-disconnection-notice-authorization | — | C3 | 30 V.I.C. § 1a; 30 V.I.C. § 1a(b) |
| `utility-transfer-vi` | CONDITIONAL | SERVES_LANDLORD | utility-transfer | — | C3 | 28 V.I.C. § 781; 28 V.I.C. § 795; 28 V.I.C. §§ 781; 30 V.I.C. § 1a |
| `appliances-excluded-vi` | CONDITIONAL | SERVES_LANDLORD | appliances-excluded | — | C3 | 29 V.I.C. § 333; 29 V.I.C. § 333(b); 29 V.I.C. § 333(c) |
| `designated-repairer-vi` | CONDITIONAL | SERVES_LANDLORD | designated-repairer | — | C3 | 29 V.I.C. § 333; 29 V.I.C. § 333(b) |
| `abandoned-property-procedure-vi` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | — | C4 | 14 V.I.C. § 1747; 14 V.I.C. § 1747(2); 14 V.I.C. § 183; 28 V.I.C. § 781 |
| `casualty-termination-vi` | RECOMMENDED | SERVES_LANDLORD | casualty-termination | — | C4 | 23 V.I.C. § 1005(g); 28 V.I.C. § 781; 28 V.I.C. § 840(a); 28 V.I.C. § 843 |
| `eminent-domain-vi` | RECOMMENDED | SERVES_LANDLORD | eminent-domain | — | C4 | 28 V.I.C. § 419(1) |
| `guaranty-vi` | RECOMMENDED | SERVES_LANDLORD | guarantor-renewal | — | C4 | 23 V.I.C. § 1005(g); 28 V.I.C. § 244; 28 V.I.C. § 244(2) |
| `holdover-rate-vi` | RECOMMENDED | CONSTRAINED_TERM | holdover-rate | — | C4 | 1 V.I.C. § 4; 23 V.I.C. § 1005; 23 V.I.C. § 1005(g); 28 V.I.C. § 292(a) |
| `landlord-self-cure-vi` | RECOMMENDED | SERVES_LANDLORD | landlord-self-cure | — | C5 | 1 V.I.C. § 4; 14 V.I.C. § 1747; 14 V.I.C. § 1747(1); 14 V.I.C. § 1747(2) |
| `periodic-tenancy-notice-vi` | CONSTRAINED | CONSTRAINED_TERM | termination-notice | — | C5 | 28 V.I.C. § 752; 28 V.I.C. § 753(a); 28 V.I.C. § 790; 28 V.I.C. § 840(a) |
| `rent-acceptance-nonwaiver-vi` | RECOMMENDED | SERVES_LANDLORD | waiver-by-acceptance | — | C5 | 1 V.I.C. § 4; 28 V.I.C. § 292; 28 V.I.C. § 292(a); 28 V.I.C. § 334 |
| `cannabis-restrictions-vi` | CONSTRAINED | CONSTRAINED_TERM | cannabis | — | C7 | 19 V.I.C. § 779(c); 19 V.I.C. § 783; 19 V.I.C. § 783(b); 19 V.I.C. § 783(e) |
| `firearm-rules-vi` | RECOMMENDED | SERVES_LANDLORD | firearms | — | C7 | 10 V.I.C. § 155; 19 V.I.C. § 1481a; 23 V.I.C. § 489a; 23 V.I.C. § 489a(a) |
### §3.2 Virgin Islands education rows (351 new)
- By source: C1 58, C2 53, C3 41, C4 30, C5 30, C6 43, C7 53, C8 41, main 2.
- By the opening of their notes: Confirmed absent 228, Present 70, Mixed or partly absent 43, Not applicable 10. Ids of rows that answer "Present" carry no `no-` prefix (checked by script).
- Every row records its basis ("Read section-open 2026-10-22 …", a battery with its controls and positive, or "case law not searched"); all are VERIFIED.
### §3.3 Shared rows changed (78)
Each changed only in `states` (";VI" appended), `notes` (a " | VI: …" segment appended) and `last_checked` (2026-10-22), checked by script against the master (§8). They are the rows listed in §2.1.

## §4 Layout and placement table (rule 40)
Formatting batteries ran over the whole Code before drafting (VI-M-F01, 12 queries: nonsense 0, "Legislature" 973, positive "10-point boldface type" hit 12A V.I.C. § 259), without a tenancy limb, with number words and both "boldface" spellings; every hit was read in context by chapter.

| Rule | Where it applies | What it requires | Library treatment |
|---|---|---|---|
| Plain Language Consumer Contracts, 12A V.I.C. §§ 252, 259 | Every consumer contract made on or after Oct. 30, 1984, which expressly includes "real estate leases for residential purposes" (§ 258(b)), except contracts "involving amounts of more than $25,000" (§ 258(a)) | Clear, simple, understandable, easily readable (§ 252); logically divided, captioned sections; a table of contents or index for a contract over 3,000 words; conditions and exceptions to the main promise in equal prominence and at least 10-point type (§ 259(b)); a front-page statement under the caption "PLEASE READ THIS" (12-point bold capitals) listing, in 10-point boldface (not all capitals), every provision that restricts or reduces the consumer's rights or is designed for the lessor's protection (§ 259(c)) | Builder work (Taylor, §6.2 Q4): `edu-plain-language-vi` and `edu-plain-language-consumer-statement-vi` explain it; every Virgin Islands lease clause and every tagged shared clause ends its VI notes with "Plain-language front page (12A V.I.C. § 259(c)(1)): list" or "… not listed" so the builder can assemble the statement; §10 asks Claude Code to build it |
| 28 V.I.C. § 254 (construction liens) | A real estate improvement contract signed by the contracting owner | A notice "conspicuously on its first page" | Not a lease; none |
| 11A V.I.C. § 2A-214 | Leases of goods | Conspicuous warranty disclaimers | Not a residential lease; none |
| 19 V.I.C. § 2033, 29 V.I.C. § 334 | Government orders on unfit dwellings | Order posted "in a conspicuous place on the premises" | Government duty; noted in the habitability rows |
| 23 V.I.C. § 321; 27 V.I.C. §§ 302(h), 307b; 19 V.I.C. § 1486 | House numbers; business licences; no-smoking signs in public places | Posting | Owner duties outside the lease; noted where relevant |
| Other hits | Consumer credit (9 V.I.C. §§ 853, 859, 866, 881-882), insurance (22 V.I.C.), timeshares (28 V.I.C. ch. 36), rental-purchase of goods (12A V.I.C. ch. 5), records solicitations (12A V.I.C. § 306), installment sales (12A V.I.C. § 308), codes adoption (29 V.I.C. § 292a, "underlined" describes amendment format) and others | — | Not residential leases |

Separate-writing searches ("separate document", "separate writing", "separate instrument", "separate page"): 15 V.I.C. § 201, 11A V.I.C. §§ 8-102, 8-304, 28 V.I.C. § 10, 9 V.I.C. § 853 — none a lease rule. No two rules claim the same place in the lease, so there was no ordering question for Taylor.

## §5 Dormant rows resolved (rule 25)
None. The kickoff lists no Virgin Islands rows and the master has none (checked by script on `states`).

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Every option below is offered as optional, never as a default; each has an education row where it is declined.

| Option | Verdict | Row(s) | Basis |
|---|---|---|---|
| Holdover charge | Offered | `holdover-rate-vi` | No statutory holdover measure (VI-C4-008); landlord's percentage of daily rent; never stacked with rent or rental value for the same day; excludes days rent is accepted and a nonpayment termination while the tenant can still cure (28 V.I.C. § 292(a) where in effect); common-law penalty limit (case law not searched) |
| Landlord casualty termination | Offered | `casualty-termination-vi` (with `edu-no-casualty-statute-vi`) | No casualty statute; prorated rent, retrieval of belongings, tenant rights preserved; possession only through court if the tenant stays (§ 781) |
| Tenant-caused damage | Offered (tag) | `tenant-caused-damage-nm`; `edu-tenant-caused-damage-vi` | No casualty exit or abatement statute to waive; waste (28 V.I.C. § 334) |
| Crime-free / criminal activity | Offered (tag) | `criminal-activity-ky`; `edu-criminal-activity-vi` | DV carve-outs (§ 753); § 840(a)(3) if rent control applies; § 1623(b) prostitution duty |
| Owner move-in end of a fixed term | Offered (tag) | `owner-occupancy-termination-ar`; `edu-owner-move-in-vi` | § 840(a)(1), §§ 841-843 |
| Mid-term rent increase on notice; scheduled or indexed escalation; tax and insurance escalation | Offered (tags) | `rent-increase-midterm-ky`, `rent-escalation-la`, `tax-insurance-escalation-la` | No statute; emergency rent freeze (23 V.I.C. §§ 1005(g)(10), 1017) and rent-control ceilings noted |
| Prompt-payment discount | Offered (tag) | `prompt-payment-discount-la` | No late-fee rule |
| Collection costs | Offered | `collection-costs-vi` | No statute; actual reasonable costs with a percentage ceiling; FEDERAL 15 U.S.C. § 1692f(1) |
| Interest on unpaid amounts | Offered | `unpaid-amounts-interest-vi` | 11 V.I.C. § 951(a)-(b): 9% legal rate; up to 18½% by express written agreement on amounts of $9,000 or less |
| Reimbursement of government fines the tenant caused | Offered | `tenant-caused-fines-vi` | Excludes sewer-fee penalties (19 V.I.C. § 1535), conditions that are the landlord's duty, DV police calls (§ 753) |
| Hotel room tax for terms under 90 days | Offered (conditional) | `hotel-room-tax-vi` | 33 V.I.C. § 54 |
| Utility clauses: meter-request waiver, allowance cap on a unit's own meter, transfer of utilities into the tenant's name, shutoff-notice designee | Offered | `utility-meter-request-waiver-vi`, `utility-allowance-cap-vi`, `utility-transfer-vi`, `utility-shutoff-notice-designee-vi` | 28 V.I.C. § 795 ("Unless otherwise agreed in writing"; charges on the tenant's own use); 30 V.I.C. § 1a(b)(4) |
| Utility cut-off to force a transfer | Declined | `edu-no-utility-transfer-cutoff-vi` | Self-help (§ 781); 14 V.I.C. § 1747(2) |
| Appliances excluded; designated repairer | Offered | `appliances-excluded-vi`, `designated-repairer-vi` | Never Housing Code fixtures (29 V.I.C. § 333(b)-(c)) |
| Landlord self-cure of a tenant breach | Offered | `landlord-self-cure-vi` | No statute; at least 14 days' written notice; no forced entry (14 V.I.C. § 1747); costs a charge that is not Rent (§ 840(b)) |
| No waiver by accepting rent | Offered | `rent-acceptance-nonwaiver-vi` | Keeps the § 292 cure; common law not searched |
| Abandoned property procedure | Offered | `abandoned-property-procedure-vi` | No statute; notice, storage, no forced entry |
| Eminent domain allocation; guaranty | Offered | `eminent-domain-vi`, `guaranty-vi` | 28 V.I.C. § 419(1); § 244(2) guaranty in writing |
| Cannabis restrictions; firearm rules | Offered | `cannabis-restrictions-vi`, `firearm-rules-vi` | 19 V.I.C. §§ 779(c), 783(b), (e), 797(h), 798(c); 23 V.I.C. § 489a |
| Contractual landlord's lien / distress | Declined | `edu-no-landlord-lien-vi` | No statutory lien except hotelkeepers' (27 V.I.C. § 405); self-help barred |
| Jury waiver | Declined | `edu-jury-waiver-vi` | Seventh Amendment extended (48 U.S.C. § 1561); case law not searched |
| Confession of judgment | Declined | `edu-confession-of-judgment-vi` | 5 V.I.C. §§ 421-422 need the defendant's own sworn, particular-sum confession; a lease cognovit can't comply |
| Arbitration | Declined | `edu-no-lease-arbitration-statute-vi` | No general arbitration act; FEDERAL 9 U.S.C. § 2 would govern |
| Homestead / exemption waiver | Declined | `edu-homestead-waiver-vi` | No statute permits a lease waiver (5 V.I.C. §§ 478-479) |
| Notice-to-quit waiver | Declined | `edu-notice-to-quit-waiver-vi` | §§ 789(b), 843 notices are preconditions to suit |
| Eviction or notice-service fee | Declined | `edu-no-notice-service-fee-rule-vi`, `edu-no-eviction-penalty-rule-vi` | FED costs fixed at $2.00 (§ 794); no money in an FED |
| "Additional rent" clause | Declined | `edu-fees-as-rent-vi` | § 840(b) rent-amount condition; FED rent-only wording |
| Utility allowance cap on a shared meter (shared `utility-allowance-cap-co`) | Not tagged | `utility-allowance-cap-vi` instead | § 795 charges on the tenant's own use |
| Repayment of a rent concession on default | Declined | `edu-rent-concession-vi`; `rent-concession-wi` tagged without one | Full repayment on any default risks the common-law penalty rule (case law not searched); the only library model (`rent-concession-az`) rests on an Arizona rule |
| "Rent will not abate" while tenant-caused damage is repaired | Not added | `tenant-caused-damage-nm` | Cuts across `casualty-termination-vi`'s rent reduction; the tagged clause already makes the tenant liable for lost rent |

### §6.2 Questions asked of Taylor (rule 76)
1. **Lexis terms (10:18):** whether I should click the site's "I Agree" on the terms page. Answer: "You click I Agree (Recommended)". The terms page had already cleared when I got there.
2. **CAPTCHA #1 (10:21, on the first document view):** asked Taylor to solve it. Answer: "Done, solved it".
3. **CAPTCHA #2 (11:40, after about 511 views):** same. Answer: "Done, solved it".
4. **Plain-language front page (~11:55):** I explained that 12A V.I.C. § 259(c) requires a front-page "PLEASE READ THIS" statement listing the provisions that restrict the tenant's rights or protect the landlord, and recommended a library clause plus builder flags. Taylor asked "Why are you recommending a clause? I would think this would be a builder issue..." I answered in the chat (type sizes, captions, the table of contents and placement are builder work; only the list itself is text, and it depends on which clauses a landlord picks) and re-asked with options. Answer: option 1, "Builder assembles it", "but also, flag this for CLI Claude." Done: two education rows, a flag sentence in every VI clause note, and the first item in §10.
5. **CAPTCHA #3 (~19:00, after about 260 more views):** same. Answer: "Done, solved it".

No product question was left open.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Rent control (log §2.2 class decision 1):** the subchapter's status is unsettled, so every possession-related row gives the cautious course: a written notice to quit served at least 30 days before filing (§ 843) and a ground in § 840(a); rows never say a lease may end "for any reason" without that caveat; the 1947-based ceilings are described, not applied.
- **Payment Options law reaches landlords:** a landlord is a "business ... formed for profit-making purposes" (12A V.I.C. § 451(a)); whether a tenant buys a "service" is unsettled, so `acceptable-payment-methods-vi` complies either way and `returned-payments-vi` drops only personal checks (C1 found the conflict in both shared returned-payment clauses).
- **Exculpation (class decision 2):** no statute voids a "Landlord is not liable" term, but common law wasn't searched; the no-disclaimer variants are used.
- **12 V.I.C. § 1156 (solar and wind):** whether a lease is an "instrument pertaining to a conveyance ... of real property or interest therein" is unsettled; the `no-alterations` tag note and `edu-portable-solar-vi` give the cautious course.
- **27 V.I.C. § 302 business licence:** the fee schedule names apartment houses, rooming houses and other categories; the broader reading (any owner renting a house or condo) rests on a DLCA press release (a lead); the row tells a landlord renting one unit to confirm with DLCA.
- **Rooming houses as "hotels" (27 V.I.C. § 401):** unsettled whether the hotelkeepers' lien and eviction rule (§§ 405, 407) reach a rooming house with permanent tenants; rows say so and advise taking advice.
- **`holdover-rate-vi` basis:** CONSTRAINED_TERM (the landlord's figure within the common-law penalty limit).

### §6.4 Canvass helpers' questions and the main pass's answers
- C1: returned payments → override `returned-payments-vi` (adopted); § 795 read generally (adopted); emergency-pricing row keyed to `rent-increase-notice` (kept); deposit dormancy period (§ 653(a)(15) five years vs § 653(a)(6) three) → the row tells landlords to ask the administrator (kept); DV deposit split with co-tenants → `edu-dv-deposit-timing-vi` (kept; C4's DV rows point to it); no "additional rent" clause (adopted).
- C2: `smoking-policy` vaping limb vs a medical patient's home use → tag kept, unsettled point added to the tag note; `utility-meter-request-waiver-vi` kept as optional and coordinated with C3; towing consent under 20 V.I.C. § 742(a)(3) unsettled → cautious course kept; C2's battery exports stay in its folder (§1.4).
- C3: `utility-allowance-cap-vi` replaces the untagged `-co` clause (approved); 27 V.I.C. § 423 version (Act No. 8937) confirmed; re-billing landlord as a "public utility" (30 V.I.C. § 1(a)) unsettled → no-markup course.
- C4: § 794 point added to the `default-by-tenant` tag; § 1623(b) added to the `criminal-activity-ky` tag; rooming houses as hotels → unsettled; `holdover-rate-vi` stays CONSTRAINED_TERM; the 13 queued sections were fetched and the three pending rows finished.
- C5: minors row finished by the main pass from 16 V.I.C. §§ 233, 254, 261, 5 V.I.C. §§ 73, 111 and V.I. R. Civ. P. 17(c) (adding § 233's one-year-income limit on an emancipated minor's obligations); federal bankruptcy and SCRA sections read and the rows updated.
- C6: pesticide row finished by the main pass from 12 V.I.C. §§ 825, 829, 831 (the posting duty is the applicator's, for lawn applications); re-billing → same as C3; condo deed particulars (28 V.I.C. § 911) don't reach leases.
- C7: § 1156 → tag note added; wiretap one-party consent (5 V.I.C. § 4102(c)), breach-notice reach (14 V.I.C. § 2209) and recording (28 V.I.C. §§ 1, 122, 124) read and rows updated; cannabis common-area limb kept; no arbitration clause; licence row reworded.
- C8: 27 V.I.C. § 444 turned out to be the appraiser law (row corrected); no jury-waiver or confession clauses; cautious course on 12A ch. 6.

## §7 Open items, each with its search boundary
- **Rent-control subchapter status.** Searched: the whole Code for any Resolution or Act declaring the 1947 emergency ended (none; § 846 still prints the condition) and 3 V.I.C. § 218(a)(3) (still assigns enforcement); the 2021-2026 session laws (none). Evidence for the open question, not proof: 33 V.I.C. § 2591(e) (section added 1997) makes tax-lien buyers subject to "applicable tenant protection provisions of Title 28, section 831, et seq.", so the Legislature assumed in 1997 that the subchapter might still apply (surfaced by the independent check, round 1; added to `edu-rent-control-vi`). Not searched: pre-2021 session laws (not in the corpus), case law beyond Keating-Smith, executive records. Rows carry the cautious course.
- **Common-law points** (late-fee penalties, liquidated damages, waiver by acceptance, mitigation, exculpation, implied warranty of habitability, fixtures, the hotel definition's reach): case law not searched; rows say so.
- **Agency rules:** the Virgin Islands Rules and Regulations (DLCA, Health, PSC, WAPA, Rent Control Officer rules) were not reachable on the public-access site.
- **Model building codes** adopted by 29 V.I.C. § 292a (IBC, IRC, IECC, with local amendments): not read; smoke and carbon-monoxide alarm rules for construction may sit there (alarm rows say so).
- **Governor's emergency proclamations and rent-freeze orders** under 23 V.I.C. § 1005(g)(10): not searched; the emergency-pricing row tells landlords to check for an active proclamation.
- **Pre-2021 session laws:** not in the corpus; the Code's history lines were relied on for them.

## §8 Integrity checks (rules 7, 22, 59, 63, 64, 79)
Run by script on the final delta and on this log as delivered (`python3 -I` on the delivered files).
- **Header and columns:** pass — 17 columns, same order as the master; CRLF row ends; no BOM: True
- **Unique ids:** pass — 456 rows
- **New ids not in the master:** pass — 378 new rows
- **Shared rows exist in the master and change only states, notes, last_checked:** pass — 78 rows
- **Master notes a verbatim prefix of each shared row's notes; one " | VI:" segment appended:** pass
- **states:** pass
- **supersedes:** pass — 5 new overrides, each naming an active master row and matching its "Overrides `x`" note: `governing-law-vi`→`governing-law`, `security-deposit-return-vi`→`security-deposit-return`, `acceptable-payment-methods-vi`→`acceptable-payment-methods`, `returned-payments-vi`→`returned-payments`, `assistance-animal-accommodation-vi`→`assistance-animal-accommodation`; 8 shared rows keep the master's supersedes unchanged
- **verification_status set on every row:** pass — {'VERIFIED': 456}
- **is_active:** pass
- **Dates:** pass — effective_from set on every new row; last_checked 2026-10-22 on every row
- **lease_clause_basis on every VI clause; blank on education rows:** pass — 27 clauses
- **Plain-language flag on every VI clause and every VI tag segment:** pass
- **Basis recorded (rule 79):** pass — 0 of 456 rows record no basis
- **Groups:** pass
- **Territory wording:** pass
- **One topic_key per row; ids of Present rows carry no `no-`:** pass
- **Every topic keyed (rule 27):** pass — 362 topics, 0 missing
- **{{variables}}:** pass — used: monthly_rent, security_deposit; none new
- **No bracket next to a self-filling variable:** pass
- **Quote checker (rule 59):** pass — quotes 1460  ok 1460  problems 0
- **Row pointers (rule 63):** pass — 0 dangling
- **Log pointer check (rule 71, MD 6):** pass — every row id the log names exists (topic keys and field names excepted)
- **No working-file pointers in notes (HI 4):** pass
- **Citation form:** pass — 4215 V.I.C. citations in the kickoff form

## §9 Propagation notes for shared-row edits (rule 62)
No shared row's `bodyText` or another state's segment was changed. The 79 shared rows tagged VI change only in `states` (";VI" appended), `notes` (a " | VI: …" segment appended) and `last_checked` (2026-10-22), checked by script (§8). Overrides were written as new Virgin Islands rows (`governing-law-vi`, `security-deposit-return-vi`, `acceptable-payment-methods-vi`, `returned-payments-vi`).
### Vouches given
None asked.

## §10 Findings for other states or the product (flagged, not fixed)
- **FOR CLAUDE CODE (CLI) — build the Virgin Islands plain-language front page (Taylor, 2026-10-22: "flag this for CLI Claude").** 12A V.I.C. ch. 4 applies to residential leases (§ 258(b)) unless the contract involves more than $25,000 (§ 258(a)). For a Virgin Islands lease the builder should: (1) print, on the front page, the caption "PLEASE READ THIS" in 12-point boldface capitals and under it, in 10-point boldface (not all capitals), a statement highlighting every included clause whose VI notes end "Plain-language front page (12A V.I.C. § 259(c)(1)): list" (provisions that restrict or reduce the tenant's rights or are designed for the landlord's protection, § 259(c)(1)); (2) use logically divided, captioned sections; (3) add a table of contents or index when the lease exceeds 3,000 words (§ 259(b)(2)); (4) print conditions and exceptions to the main promise with equal prominence and in at least 10-point type (§ 259(b)(3)); Liability for a non-complying lessor is actual damages, punitive damages up to $1,000 and attorney's fees (§ 253); a lessor may seek an Attorney General opinion (§ 257). The flags are in the notes of all 27 Virgin Islands lease clauses and all 78 shared rows tagged VI. The library's `edu-plain-language-vi` and `edu-plain-language-consumer-statement-vi` explain the rule to landlords. Builder check: what a lease's total value is for the $25,000 threshold (likely total rent over the term) is unsettled; the cautious course is to print the statement on every Virgin Islands lease.
- **New `{{variables}}`:** none. Virgin Islands rows use only `{{monthly_rent}}` and `{{security_deposit}}`; every landlord-chosen figure is a hand-filled bracket.
- **Legal watch:** Bill No. 36-0022 (would amend 28 V.I.C. § 752 notice periods; held in committee May 14, 2025); the rent-control subchapter (any court ruling or Legislature declaration ending the 1947 emergency would change every possession row); 23 V.I.C. § 1005(g)(10) rent freezes during declared emergencies; the rolling adoption of new International Code editions six months after publication (29 V.I.C. §§ 292(d), 292a).
- **Corpus:** Act No. 8508 is missing from `acts.csv` and the bills listing (unexplained gap). The next corpus should add the court-rule PDFs, Keating-Smith, and the federal sections listed in §1.1.
- **Cross-reference inside a statute (rule 77):** 20 V.I.C. § 742(a)(3) prints its own (a)-(d) inside paragraph (3) and refers to notice "as prescribed by the Virgin Islands Police Department's regulations or section 743 of this chapter", but § 743 defines derelict vehicles and prescribes no notice; rows quote it as printed and give the cautious course. 5 V.I.C. § 73 and § 111 still refer to the Federal Rules of Civil Procedure (Rules 17(c) and 4(d)(2)); the territory now has its own V.I. R. Civ. P. 17(c) and 4.
- **Other states:** the payment-options conflict in shared `returned-payments` and `returned-payments-ky` (the "cashier's check only" sentence) would also matter in any state with a cash-acceptance or customer-choice payment statute.
- **SOP lessons** are in "Proposed SOP changes".

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** only 12A V.I.C. § 259 reaches residential leases; builder work per Taylor (§4, §10).
- **41 Just-cause:** `edu-for-cause-eviction-vi` states the rent-control § 840(a) grounds as the cautious course and what applies if the subchapter is not in force (§§ 752, 789: no just-cause rule); no shared clause says the end of the term ends possession without "applicable law" wording; `owner-occupancy-termination-ar` and `periodic-tenancy-notice-vi` state the ground where required.
- **42 Required text in a shared clause:** none; no statute forces a sentence into a fee, deposit or other clause.
- **43 Cure promises:** `default-by-tenant` leaves cure periods to applicable law (the § 292 cure to judgment, where in effect, can't be capped); its written notice before a rent default is a contract step (no statutory pre-suit notice for a fixed-term nonpayment beyond the notice to quit) — recorded in its tag note.
- **44 Terms turned into duties:** no statute turns a lease repair, appliance or utility promise into a statutory remedy trigger (no tenant remedy statute); tags on `appliances-included`, `landlord-maintenance` say so.
- **45 Electronic notices:** UETA 11 V.I.C. §§ 105(b)-(c), 108(b)-(c) read; no consumer-notice exclusion in the territorial act; FEDERAL E-SIGN excludes default, eviction and cure notices (15 U.S.C. § 7003(b)(2)(B)); `electronic-notice-ma` excludes them and the notice to quit (§ 790).
- **46 Lease as the notice:** no statute lets a lease paragraph serve as a required notice; `addendum-precedence` fine (no statutory optional addendum).
- **47 Knowing-use penalties:** none for lease terms; the Plain Language law's damages (12A V.I.C. § 253) and the Consumer Fraud law's (12A ch. 6) are noted in the education rows; no consumer debt-collection statute reaches landlords' own collection (FEDERAL FDCPA for collectors).
- **48 Separate documents:** none required (VI-M-F01); `landscaping-irrigation` and `tenant-repair-agreement-hi` tagged without a separate writing.
- **49 Collection-cost bans:** none; 5 V.I.C. § 541(b) gives court-fixed fees to the prevailing party either way (reciprocal by statute); `default-by-tenant`'s mutual fee sentence matches; FED costs fixed at $2.00 (§ 794).
- **50 "Lease controls" wording:** 28 V.I.C. § 795 "Unless otherwise agreed in writing" (meter on request) → optional `utility-meter-request-waiver-vi`; 11A UCC and UETA variation sections; no deposit uplift rule.
- **51 Plain-language and consumer statutes:** 12A ch. 4 reaches leases (§ 258(b)); 12A ch. 2 (Consumer Protection) reach to leases unsettled (class decision 7); 12A ch. 6 (Consumer Fraud) defines trade or commerce to include real property (§ 303(k)) but "consumer" by merchandise (§ 303(d)) — cautious course; no enumerated unfair-practice list reaching leases.
- **52 Exculpation:** class decision 2; no-disclaimer variants used.
- **53 Figures that contradict a shared clause:** `holdover` ("maximum permitted by law") and `returned-payments` (ceiling only) not tagged; `utility-allowance-cap-co` not tagged (§ 795); no other figure conflicts (no deposit, late-fee, notice-of-entry or holdover statute).

## §12 Other Step C screens
- **Rule 37 tenancy types:** `periodic-tenancy-notice-vi` and the § 752 rows separate fixed terms, month-to-month, week-to-week and longer intervals (three months' notice where rent is payable at intervals of three months or more) and lease-at-will nonpayment (fourteen days' written notice); under the cautious course 30 days' written notice before filing in every case. `early-termination-ks` (fixed-term only), `holdover-ca`, `rent-increase-midterm-ky` checked for fixed-term figures.
- **Rule 39 eviction duties:** no post-writ property statute beyond the marshal's storage fees (Super. Ct. R. 6e); self-help barred (§ 781; 14 V.I.C. § 1747(2)); returning after removal by legal process is a crime (14 V.I.C. § 1748); no record sealing rule for evictions (R. 16 / R. 79-1 are discretionary); FED fees $2.00 (§ 794); computation of time V.I. R. Civ. P. 6(a) (the 3-day and 14-day notices count business days).
- **Rule 31 rules enacted twice:** §§ 789 and 292 (both suspended while subch. III is in effect) and § 843; rows state both regimes.
- **Rule 32 coverage by place or size:** Plain Language $25,000 threshold; Payment Options $50,000 exemption (12A V.I.C. § 452(c)); business licence exemption for owner-occupied apartment houses under five units (27 V.I.C. § 302(f)); civil-rights exemptions (owner-occupied two-family building; rooms in the owner's or renter's own unit; same-sex rooms, 10 V.I.C. § 64(8)(a)); Housing Code exclusion for owner-occupied rural dwellings under 600 sq ft (29 V.I.C. § 331(b)(6)); multiple dwelling (three or more families) for pesticide notices (12 V.I.C. § 825(k)). No county or municipal tier exists (48 U.S.C. § 1576), so no rule 3 municipal ordinances arise.

## §13 Independent check (rule 80)
Three rounds, one general-purpose agent at a time, each told it did not write the rows and that an earlier round's finding could itself be wrong. Each worked from the brief `CHECK-BRIEF` (law read whole, citations, fair quote use, clause lawfulness under the class decisions, absence claims against their batteries, consistency across rows on the same statute), read only the saved primary text, and saved one finding per line as it went. The main pass judged every finding before applying it; accepted findings were applied as exact once-only errata (old text → new text) to the frozen generators' output, and the delta was reassembled and re-run through the quote checker after each round.

| Round | Scope | ERROR | FIX | NOTE | Applied |
|---|---|---|---|---|---|
| 1 | All 456 rows (378 new; the VI segment and clause text of 78 shared rows) | 0 | 43 | 8 | All 43 FIXes, one with the quote placement changed (`owner-occupancy-termination-ar`). The NOTEs that asked for unread sections were acted on: the main pass fetched and read 14 V.I.C. §§ 1721-1733, 30 V.I.C. §§ 46 and 50 and 33 V.I.C. § 2498 and corrected `edu-no-sex-offender-occupancy-rule-vi`, `edu-no-sex-offender-disclosure-vi`, `edu-code-editions-vi`, `edu-no-adverse-proceeding-notice-vi` and `edu-no-submetering-disclosure-rule-vi`; the rule 54 NOTE completed the list in `edu-optional-lease-terms-vi`; the 33 V.I.C. § 2591(e) NOTE was added to `edu-rent-control-vi`. The `tenant-death-contact-nh` cross-reference NOTE is a builder point (§10). |
| 2 | The 45 rows edited since round 1, diffed against their round 1 text, plus a consistency set of 33 rows citing 28 V.I.C. § 795 or Super. Ct. R. 6e | 0 | 31 | 3 | 28 FIXes as proposed; the confession-of-judgment wording revised; the two sex offender "not read" FIXes replaced, because the main pass fetched and read the three unsaved sections (14 V.I.C. §§ 1721A, 1721B, 1724A: none restricts residence or binds a landlord; § 1724A says where an offender must register); the stale "queued for reading" phrase fixed in four more rows; the two EV NOTEs adopted (no-markup course and 30 V.I.C. § 1(a) support). The § 308 well NOTE needed no change. |
| 3 (last) | The 31 rows edited since round 2, diffed against their last-checked text | 0 | 11 | 0 | All 11. Round 3 found that round 2's own wording on 29 V.I.C. § 310(8) was too narrow (the structural-damage limb is not limited to natural disasters) and that "possession only through FED" overlooked 28 V.I.C. § 281. |

No round found an ERROR (wrong law or an unlawful clause). Every quote passes the checker after each round (final: §8).

### Edited after the last check
Round 3 was the last round the kickoff allows, so these edits were made after it and were not re-checked by an independent agent. Each is round 3's own proposed wording, re-run through the quote checker, except the last item, a citation-placement repair by the main pass:
- `edu-code-editions-vi` (body): § 310(8) structural-damage limb applies to any such damage, not only after a natural disaster.
- `edu-confession-of-judgment-vi` (body, notes): possession needs a court case, normally forcible entry and detainer (28 V.I.C. §§ 281, 781-782); 5 V.I.C. § 422(a) quoted for the money-only no-case procedure.
- `edu-rent-control-vi` (notes): 33 V.I.C. § 2591(e) described as evidence for the open question, not proof; history parenthetical narrowed.
- `edu-no-adverse-proceeding-notice-vi` (body, notes): "subject to any applicable tenant protections"; § 2498 added to the read list.
- `edu-utility-meter-vi` (notes): water limb of 30 V.I.C. § 1(a)(2) quoted; §§ 1 and 46 added to the read list.
- `edu-no-sex-offender-occupancy-rule-vi` (notes): 14 V.I.C. § 1730(c)(2) quoted.
- `edu-landlord-registration-vi` (notes): support for "Cottage rental" being undefined (27 V.I.C. § 302(c); battery VI-C1-016); the main pass then moved the citations to follow each quoted term, as the quote checker requires.

## §14 Gap-discovery source 1 — statute walk (rule 29)
- **Read whole:** 28 V.I.C. ch. 31 (all 34 sections: subch. I §§ 751-753, subch. II §§ 781-795, subch. III §§ 831-846), 28 V.I.C. ch. 13 (§§ 281-294), 28 V.I.C. ch. 15 (nuisance and waste), 29 V.I.C. ch. 6 (Housing Code, §§ 330-347), 12A V.I.C. ch. 4 (§§ 251-261) and ch. 8 (§§ 451-458), with the sections they point to (UETA 11 V.I.C. ch. 1; 5 V.I.C. § 541; 1 V.I.C. § 4; 30 V.I.C. § 317; 19 V.I.C. §§ 1535, 783).
- **Diff (script over the delta's citations):** every section of ch. 31 is cited except §§ 832 (Rent Control Officers), 833 (their powers) and 838 (appeal) — administrative, covered by `edu-rent-control-vi`'s description of the subchapter; Housing Code §§ 330 (title) and 339-347 (the Visitable Housing Design and Incentive Act: a voluntary certification and tax incentive for new construction); 12A §§ 251 (policy), 256 (other claims preserved), 456-457 (DLCA complaints and enforcement); 28 ch. 13 ejectment procedure (§§ 283-285, 287-291, 293-294; C5's ejectment and nuisance rows cite §§ 281, 286 and 292). None needs a row. One level down, the subdivisions of §§ 753, 789, 840 and 333 are each cited.
- **Found by the walk and written into rows:** § 795 (meter and actual-use charges), § 791 (prepaid rent), § 793 (three years' quiet possession pleadable), § 794 (FED costs $2.00), § 792 (farm tenants' crops), §§ 841-842 (stays; registered-mail re-offer with double damages), § 845 (hotels outside subch. III).

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Search for a free professional Virgin Islands residential lease:** the St. Thomas-St. John and St. Croix Boards of Realtors, the Virgin Islands Housing Authority (its 2016 draft "New Residential Lease Agreement" was available only at its offices; no copy online), the Housing Finance Authority, Department of Property and Procurement lease templates (government property), property managers' sites. No free professional residential lease exists online. Never suggested buying one (rule 33).
- **Best free substitutes (both weak leads, saved with hashes in `src/rules/`):** (a) VIHFA CDBG-DR "Rental Rehabilitation and Reconstruction Program Policies and Procedures", Version 3.0, Dec. 18, 2020 (file uploaded 2024/12; 417 pp; SHA-256 ddbe3d01…) — program rules for landlords (leases of 12 months or more approved by the Program, a Program lease addendum (not online), rents at or below HUD Fair Market Rates and 30% of income, HQS inspections, URA relocation, fair-housing marketing for five or more units, ADA-unit priority); (b) a real Virgin Islands professional lease: "LEASE AGREEMENT", 2-B King Street, LLC (landlord, through a Frederiksted property manager) to VIHFA (tenant), 12 months from Mar. 1, 2023 (13 pp; SHA-256 608638b3…) — but commercial (an office). Why weaker: one is a program policy, the other a commercial lease; neither is a residential form. Neither is a relabelled template.
- **Comparison by topic (lead only; no shared row changed):**
  - Late fee $10 a day after 5 days; returned check "$50 penalty" → no V.I. cap (`late-fee` tag; `returned-payments-vi`).
  - Deposit commingled, no interest, returned after the term → no deposit statute (`edu-no-deposit-return-statute-vi`; `security-deposit-return-vi`); unclaimed refunds escheat (`edu-deposit-escheat-vi`; 28 V.I.C. ch. 29).
  - Property left 5 business days, stored, disposed of after 30 days → `abandoned-property-procedure-vi` (notice, no forced entry).
  - Default: 3 days' written notice, then re-entry "with or without resort to legal proceedings", plus a contractual landlord's lien enforceable "by self-help, repossession, distress" → barred for a residential tenancy (§ 781; 14 V.I.C. § 1747(2)); `edu-no-landlord-lien-vi`; no V.I. row offers self-help.
  - 10-day cure for non-rent breach; one-way attorney's fees to the landlord → `default-by-tenant` (statutory fees go to the prevailing party either way, 5 V.I.C. § 541(b)).
  - Broad exculpation ("Landlord … shall not be liable…") → class decision 2.
  - Casualty: abatement unless tenant fault; landlord may terminate if damage exceeds half the replacement value → `casualty-termination-vi`.
  - Landlord entry "at all reasonable hours" (no notice) → `landlords-access` (24 hours); entry without consent is a crime unless the law provides (14 V.I.C. § 1747(2)), so the lease consent matters.
  - Landlord self-help repairs with 9% interest → `landlord-self-cure-vi`; 9% is the legal rate (11 V.I.C. § 951(a)).
  - Holdover day-to-day at $75 a day → `holdover-rate-vi`.
  - Arbitration (AAA commercial) with an FED carve-out → `edu-no-lease-arbitration-statute-vi` (no clause offered).
  - Notices by registered mail → the notice to quit must be delivered or left at the premises (§ 790); `notices` tag.
  - Governing law "laws of the United States Virgin Islands" → `governing-law-vi`.
  - From the program policy: lease approval, HQS inspections, URA relocation and fair-housing marketing are program duties; the education rows on federally assisted housing (for example `edu-no-subsidized-inspection-refusal-rule-vi`) note that program rules apply.

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
158 scenarios from advertising to eviction and sale (`work/main/scenarios.tsv`, built on the AZ §18.1 map plus territory-specific ones: hurricanes and emergency pricing, cisterns, hotel room tax, WAPA meters, the business licence, cannabis) were run by script against every Virgin Islands row and VI tag segment (`scripts/scenario_screen.py`). Every scenario hits at least one row. The thinnest (one or two rows) were checked by hand: emergency entry (`edu-landlord-entry-vi`), arbitration, jury waiver, immigration status, a copy of the lease, generator use. Battery VI-M-SC01 found no statute on generator use at a rental, hurricane shutters or emergency entry (hits only net-metering "customer-generator" sections and a burglary definition). No new row was needed.

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Organic Act (constitution screen):** 48 U.S.C. § 1561 read whole (§1.3); every provision binds government; nothing reaches a private lease. The Lexis search does not index the Organic Act, so it was read directly rather than searched.
- **Whole-Code outside-title batteries:** VI-M-MAP01 and MAP02 (landlord, tenant, lease, rent and dwelling terms across every title: insurance, taxes, licensing, health, criminal, civil rights, consumer, UCC, courts), VI-M-TAG01-TAG03 (exculpation, returned checks, towing, smoke-free, attorney's fees, expungement, plain language, cash acceptance; late fees, condominium fines, lock changes, copies, flags; smoke and CO detectors, lead paint, EV charging, open flames, fire extinguishers), VI-M-OT01 (solar and wind, political signs, tenant privacy, cameras, firearms, religious displays, tenant organizations, antennas, clotheslines), VI-M-SC01, and the helpers' 96 topic batteries.
- **Found outside the landlord-tenant title and carried into rows:** Plain Language law (12A ch. 4) and Payment Options (12A ch. 8); emergency rent freeze (23 V.I.C. §§ 1005(g)(10), 1017); hotel room tax (33 V.I.C. § 54) and gross receipts tax (§ 43(e)); business licence (27 V.I.C. §§ 301-302, 307); expungement (5 V.I.C. §§ 3738, 3739(c)); medical and sacramental cannabis (19 V.I.C. §§ 779(c), 783, 797(h), 798(c)); dog guides (10 V.I.C. §§ 155, 158); 10 V.I.C. ch. 1 civil rights (race, creed, colour, national origin; no owner-occupant exemption); cable access (30 V.I.C. § 317); sewer fee (19 V.I.C. § 1535); WAPA ratepayers' rights (30 V.I.C. § 1a); unlawful entry and trespass (14 V.I.C. §§ 1741, 1747, 1748); prostitution leasing duty (14 V.I.C. § 1623); waste removal liens (19 V.I.C. § 1554); noise (19 V.I.C. § 2042); pesticides (12 V.I.C. ch. 19); solar access (12 V.I.C. § 1156); data-breach notice (14 V.I.C. § 2209); wiretap one-party consent (5 V.I.C. § 4102(c)); firearm storage (23 V.I.C. § 489a); usury and the legal rate (11 V.I.C. § 951); limitation periods (5 V.I.C. §§ 31, 39, 40); unclaimed property (28 V.I.C. ch. 29); recording (28 V.I.C. §§ 1, 122, 124); statute of frauds (§§ 241-244).
- **Searched and absent:** source-of-income, familial-status or marital-status housing classes (federal law adds familial status); smoke or CO detector duties; lead-paint rules; tenant privacy or camera rules; political-sign protection; arbitration act; landlord's lien; deposit, late-fee, entry or repair-remedy statutes.

## §18 Topic canvass (rules 27, 36)
- Eight helpers (C1-C8) answered all 362 topics in `lease-clause-topics.md`, each saving after every topic: C1 57 (Confirmed absent 40, Present 9, Mixed 8); C2 53 (Confirmed absent 38, Present 12, Mixed 2, Not applicable 1); C3 42 (Confirmed absent 25, Mixed 8, Present 7, Not applicable 2); C4 32 (Confirmed absent 17, Present 11, Mixed 4); C5 32 (Confirmed absent 15, Present 10, Mixed 7); C6 43 (Confirmed absent 34, Not applicable 5, Mixed 2, Present 2); C7 62 (Confirmed absent 37, Present 16, Mixed 8, Not applicable 1); C8 41 (Confirmed absent 27, Present 7, Mixed 6, Not applicable 1).
- **Totals:** Confirmed absent 233, Present 74, Mixed 45, Not applicable 10. A script confirmed every topic has at least one Virgin Islands row or VI-tagged row keyed to it (0 missing).
- **Briefs:** `CANVASS-BRIEF` (notes form, citation forms, NEEDS_REVIEW policy, doc-request queue, plain-language flag), `VI-LAW-MAP` (updated during the canvass), `CLASS-DECISIONS` (12 decisions), `TAG-PLAN`. Each helper ran the quote checker on its own rows before reporting. Helper summaries and the main pass's answers are in §6.4.

## §19 Conformance-table entry
VI (2026-10-22), drawn from this log's §§ 4, 6.1, 11, 12 and 14-18. Proposed column (Claude Code sets it at sync):

| Rule | VI | Where |
|---|---|---|
| 37 tenancy type | ✓ | §12 |
| 39 eviction duties | ✓ | §12 |
| 40 formatting | ✓ | §4 |
| 41 just-cause | ✓ | §11 |
| 41b `for-cause-eviction` row | ✓ | `edu-for-cause-eviction-vi` |
| 42-53 | ✓ | §11 |
| 54 optional clauses | ✓ | §6.1 |
| 54t tenant-caused damage | ✓ | `tenant-caused-damage-nm` tagged |
| 35c constitution screen | ✓ | §17 (Organic Act read whole) |
| 27 topics | ✓ | §18 (all 362) |
| 55 three-bucket test | ✓ | §3 |
| 57 one subject per row | ✓ | §8 |
| 79 summaries re-read | ✓ | every row read section-open (§8) |
| 54 e.g. holdover charge | ✓ | `holdover-rate-vi` |
| 54 e.g. casualty termination | ✓ | `casualty-termination-vi` |
| 54 e.g. statutory waivers | n | no waiver statute; jury, confession, exemption and notice waivers declined (§6.1) |
| 54 e.g. crime-free clause | ✓ | `criminal-activity-ky` tagged |
| 54 e.g. eviction-fee clause | n | FED costs fixed at $2.00 (§ 794); notice-service fee declined |

## Proposed SOP changes
- **Rule 23 (attachments after a context summary):** at Step A, copy the SOP, kickoff and log example into the working folder beside the CSV. Reason: after this session's context summary the SOP's text was no longer in the conversation and had to be found in the session's upload folder; a pass that couldn't find it would work from memory.
- **Rule 19 (Lexis exports):** keep page-tool exports above about 50 KB (pad small ones) so they land in a file rather than in the conversation, and below about 250 KB so the device bridge doesn't truncate them; nest no export inside another JSON string (the harvester has to unwrap it). Reason: one federal export of about 50 KB printed into the conversation, and one nested export was silently skipped until the harvester was patched.
- **Rule 12 (federal sources):** read and save the federal sections a row relies on (govinfo "link" service for the U.S. Code, eCFR's renderer for regulations, both reachable in-page) before the independent check, and let the quote checker resolve them. Reason: helpers cited the SCRA, the bankruptcy code and the Fair Housing Act "from general knowledge, not read"; 47 federal sections were then read in under an hour.
- **Rule 27 (helper resumes):** when helpers finish with rows waiting on queued section reads, fetch the queue and resume the same helper briefly (one at a time) rather than rewriting its rows in the main pass. Reason: the resumed helpers closed 11 pending rows here in minutes and kept their own generators consistent.
- **Rule 26 (payment-method statutes):** add customer-choice payment statutes to the fee screen of shared clauses: a "cashier's check only after bounced payments" sentence conflicts with a law that lets the customer choose among required methods. Reason: both shared returned-payment clauses had it (12A V.I.C. § 452(a)(2)).

## Proposed topic questions
- `acceptable-payment-methods`: Does a general payment-options law require a business (including a landlord) to accept cash and a card and let the customer choose, and does it bar "certified funds only" rules after returned payments? (Virgin Islands, 12A V.I.C. § 452.)
- `plain-language`: Does a plain-language consumer-contract law that covers residential leases require a front-page statement listing landlord-protective terms, and is there a dollar threshold? (Virgin Islands, 12A V.I.C. §§ 258-259.)
- `rent-increase-notice`: Can the Governor freeze rents during a declared emergency, and is renting at an unconscionable price during one a crime? (Virgin Islands, 23 V.I.C. §§ 1005(g)(10), 1017.)
- `landlord-registration`: Does a general business-licence law reach residential rentals, with an exemption for small owner-occupied buildings? (Virgin Islands, 27 V.I.C. § 302(a), (f).)

## Sync review (Claude Code, 2026-10-22)
- **Merge:** `merge-delta.py --base 03ccb5f`: 378 new rows and 78 shared rows tagged VI (§9's "79" is a typo for 78; the script and §3.3 agree), 9,988 rows in all. 456 active Virgin Islands rows (104 lease clauses, 352 education rows), every one VERIFIED; no NEEDS_REVIEW row to close.
- **Edited after the last check (§13):** all seven read. They are education rows whose edits narrow or qualify (the § 310(8) structural-damage limb, possession only by a court case under 28 V.I.C. §§ 281 and 781-782, § 2591(e) as evidence rather than proof, "applicable tenant protections"), and each reads consistently with the rows around it. The Code text itself is only on Lexis, which blocks Claude Code, so as with Arkansas and Mississippi the wording rests on the pass's quote check and three independent rounds.
- **Core rules spot-checked against what Claude Code can read:** the Superior Court's forcible entry and detainer complaint (corpus) cites 28 V.I.C. § 781 et seq. and asks for the date and manner of the notice to quit and the breach, which fits `periodic-tenancy-notice-vi`, the rent-control cautious course and `edu-rent-control-vi`; 48 U.S.C. § 1561's contract clause quoted as in the corpus; Act No. 8937 § 1(d) repeals and reenacts 27 V.I.C. § 423 (OCR), matching §1.2's version choice; Act No. 9065 adds subsection (h) to 29 V.I.C. § 294 (OCR), which the rows don't cite; the corpus screen agrees with §1.2 that no 2021-2026 act amends a landlord-tenant, eviction or deposit provision.
- **Every-reading rule:** the possession clauses work whether or not the 1947 rent-control subchapter still applies (30 days' notice and a reason "where Virgin Islands law requires one"); `acceptable-payment-methods-vi` complies whether or not a tenant buys a "service" under 12A V.I.C. § 451. No change needed.
- **Guard fixes:** three lease clauses retitled so section pointers resolve: `abandoned-property-procedure-vi` ("Property Left After the Tenancy Ends (Optional)" → "Handling of Property Left Behind", the target of `tenant-death-contact-nh`), `acceptable-payment-methods-vi` and `returned-payments-vi` (dropped "(Virgin Islands)").
- **Same-topic pairs:** three, each an optional companion (`prompt-payment-discount-la` beside `late-fee`, `improvements-ownership-la` beside `no-alterations`, `rent-escalation-la` beside `rent-increase-midterm-ky`).
- **Citations file:** `lease-clause-citations-VI.csv`, 456 rows (193 CITED, 234 CONFIRMED_ABSENT, 29 GENERIC shared clauses that no Virgin Islands statute addresses). The plain-language flag sentence (12A V.I.C. § 259(c)(1)) is left out of each row's citations, since it marks the builder list rather than the clause's law.
- **SOP 1.82:** all five proposals adopted (rules 12, 19, 23, 26, 27); VI conformance column added from §19. Four topic questions added. No new `{{variables}}`.
- **Builder item for Taylor's decision (§6.2 Q4, §10):** the plain-language front page is backlog M.15.
- **Legal watch:** none; LegiScan doesn't cover the Virgin Islands (backlog item 34).

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-ks` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.
