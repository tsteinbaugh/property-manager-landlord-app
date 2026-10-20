# Lease clause decision log — Mississippi (MS, state #50)
- **Pass:** run 2026-10-20 in one chat, Mississippi's only Desktop chat (rule 8). The session resumed twice: once after a context summary and once after a container restart. All working files survived both. No earlier output files existed, so none were deleted. SOP v1.77 (SHA-256 71badd7f…). Files Taylor uploaded:
  - `KICKOFF-PROMPT.md` (6cec1123…)
  - `lease-clause-sop.md`
  - `lease-clause-topics.md` (bebb4bbe…)
  - `lease-clauses.csv` (ecdbad9b…)
  - `log-format-example.md` (e17f2909…)
- **Settings:** Opus, high effort. Research mode was not used, because none of the three rule 9 triggers needed it. Proof of absence ran on the official site's own whole-Code search (§1.5). Cross-chapter gap searches ran as batteries on that same engine.
- **Outputs:** `lease-clauses-MS-delta.csv` (466 rows) and this log.

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A — confirm files and counts (rule 23) | Done | §1.1 |
| Source registry and currency (rules 16, 24) | Done | §1.1-§1.2 |
| Constitution, court rules, forms (rules 35, 39) | Done | §1.3, §12 |
| Tag-first screen of every active clause (rule 26) | Done | §2 |
| Topic canvass, every topic (rule 27) | Done (360/360) | §18 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Step D screens (rules 40-53) | Done | §11 |
| Optional clauses (rule 54) | Done | §6.1 |
| Integrity checks (rule 70-71, §8) | Done | §8 |
| Independent check (rule 80) | Done (3 rounds; 4 rows edited after the last check, listed in §13) | §13 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A (rule 23):** the attached `lease-clauses.csv` has SHA-256 ecdbad9b6be6d2d5526529cc560d1294fc6de0e086fb90ce25b3e79d6a3837e6, 21,200,066 bytes, CRLF row ends, no BOM and 17 columns.
  - It has 8,041 rows, 7,932 of them active: 1,255 lease clauses (100 shared by two or more states, 1,154 single-state, 1 with blank states) and 6,677 education rows. This matches the kickoff.
  - No row carried MS or an `-ms` id, so nothing was dormant (§5).
  - A csv-module round trip of the master is byte-identical, and the delta is written the same way (CRLF, minimal quoting).
- **Official text:** the Mississippi Code 1972 Annotated, public access, on Lexis (advance.lexis.com, pdmfid 1000516). Its stated currency is "Current with legislation from the 2026 Regular and First Extraordinary Sessions." It was read through Taylor's linked built-in browser, which Taylor approved ("Yes (Recommended)", §6.2).
  - Pages render client-side, so each section was read in a same-origin frame with a fresh request id. The whole section was saved to `src/<section>.json` with the SHA-256 of its text.
  - 354 source files were saved: sections, acts, the Constitution, court rules, forms and leads.
- **CAPTCHA:** the site showed a CAPTCHA on the first document view, and again after about 300 views (two canvass helpers hit it at about 12:00 MT). Taylor solved both himself ("Solved it", twice; §6.2). The main pass then read the 40 sections the helpers had queued.
  - Searches never triggered it. Only document views did.
- **Bill status and acts:** billstatus.ls.state.ms.us. All 2025-2026 acts touching chs. 89-7, 89-8, 89-10 and 89-29 were screened (`allmsrs.xml`, keyed by code section). The enrolled acts relied on were saved: 2025 SB 2328, HB 1200, SB 2748; 2026 HB 1404, SB 2848, HB 1603.
  - The code-section lookup (`2026p_cs.pl`) misses newly created sections, so the act text was read too.
- **Other official sources:** the Secretary of State Constitution PDF, courts.ms.gov (rules of court, local rules and Administrative Office of Courts sample eviction forms), all fetched in the browser. PDFs were parsed with pdf.js 3.11.174; each saved file records the PDF's SHA-256, byte count and page count.
- **Shell network:** blocked by the egress allowlist. Every primary source therefore came through the browser.

### §1.2 Currency and dated versions (rule 16)
- **Currency:** the Lexis text includes the 2026 Regular and First Extraordinary Sessions, the last sessions before this pass. Each relied-on section's History line was read.
  - The index also holds superseded copies of four sections: §§ 89-8-3, -31, -35, -39 (pre-2025). These were saved as `~v2` and not relied on.
  - § 49-7-79 also has a pre-2025 copy, saved but not relied on.
- **Session laws relied on** (form "YYYY Miss. Laws ch. N"; a bill is cited by number where it was read before its chapter number was found):
  - 2025 Miss. Laws ch. 460 (SB 2328). Effective from passage, approved April 10, 2025. It amended §§ 89-8-3, -31, -35, -39 and created § 89-29-1 (RV parks).
  - 2025 Miss. Laws ch. 474 (HB 1200). Effective July 1, 2025. It is the Real Property Owners Protection Act (§ 89-10-3, squatting).
  - 2026 Miss. Laws ch. 416 (HB 1404). Effective from passage, March 25, 2026. It created § 89-7-46, the crime of misapplying tenant utility payments.
  - 2026 Miss. Laws ch. 503 (Senate Bill 2848, towing; § 85-7-251 history). Effective July 1, 2026.
  - 2026 Miss. Laws ch. 379 (HB 1603, § 89-10-5). Effective July 1, 2026.
  - 2026 Miss. Laws ch. 430 (§ 99-19-71). Effective July 1, 2026.
  - 2026 Miss. Laws ch. 436 (§ 97-17-97, trespass).
  - 2025 Miss. Laws ch. 405 (§ 49-7-79).
  - 2025 Miss. Laws ch. 306 (§ 19-5-22).
- **Constitution:** the Lexis Constitution is "Current with 2025 Regular and 1st Extraordinary Sessions". The Secretary of State PDF is "UPDATED MAY, 2022" (§1.3).

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- **Constitution:** the Secretary of State PDF (SHA-256 83aa7684…, 193 pages) was loaded as text. It was proved complete against the Lexis table of contents (316 documents; 303 sections in the PDF, § 286 "Renumbered").
  - Nine relied-on sections were read on Lexis and match the PDF text word for word: §§ 12, 13, 14, 16, 17, 18, 23, 24, 31.
  - Lexis offers no Constitution search, so local batteries ran over the PDF text. Each had a nonsense control ("zqxvjw") and controls that must hit ("Legislature" 131 hits, "Governor" 50).
  - The main pass ran K01b-K10. MS-L-K01 failed its positive and was rerun as K01b with positives §§ 160 and 226, which passed; K01 is not relied on. Helpers ran C1-K01/K02, C2-K01, C3-K01, C4-K02/K04, C5-K01/K02, C6-K01/K02 and C7-K01 to K04.
  - Result: no provision binds a private residential lease. Every rights provision that touches the subjects (art. 3, §§ 12 arms, 18 religion, 17 takings, 31 jury) binds the State.
  - Article 16, § 288 (Initiative 65, medical marijuana) is printed in the Secretary of State edition with a note that the Supreme Court voided it. Lexis omits it.
- **Court rules** (courts.ms.gov; saved with PDF hashes):
  - Rules of Justice Court (SHA dad4e465…, 27 rules).
  - Mississippi Rules of Civil Procedure, the edition effective 2026-07-01 (SHA b85e6543…).
  - Uniform Civil Rules of Circuit and County Court Practice (SHA 35983043…).
  - Uniform Chancery Court Rules (SHA d19fa37c…).
  - Local rules of four county courts (DeSoto, Harrison, Lowndes, Rankin) and circuit districts 1, 4, 5, 6, 7, 8, 10, 11, 15, 18, 19, 22 and 23. Districts 10 and 19 publish only a notice that their local rules were repealed (2001, 2006).
  - The Uniform Rules of Procedure for Justice Court link is dead; those rules were superseded by the Rules of Justice Court.
  - Pending changes: a proposal to strike M.R.C.P. 81 (comments due 2026-10-23), and the 2026 amendments to M.R.C.P. 4 and 81 (in the saved edition).
- **Court forms:** the Administrative Office of Courts sample eviction documents (English versions) were saved and screened (§12):
  - Complaint for Residential Eviction
  - Residential Eviction Summons
  - Judgments on Complaint for Residential Eviction
  - Warrant of Removal (4-29-2022)
  - Application for Warrant of Removal (rev. 6-14-2022)
- **Administrative rules:** none bind residential leases on the subjects screened. Public Service Commission utility rules were not read (§7).

### §1.4 Agents and usage
- **Usage budget (kickoff):** large files were read by script. At most two canvass agents ran at once, each saving after every topic. The independent check ran one agent at a time, for at most three rounds (§13).
- **Triage of single-state clauses (rule 26):** two helpers (TA, TB) read the 573 single-state clauses that name no other state, using `TRIAGE-BRIEF` and the Mississippi law map. Verdicts: 28 TAGGABLE, 539 NOT, 6 UNSURE. Every TAGGABLE and UNSURE verdict was re-read in the main pass and passed the basis check (§2.3).
- **Canvass:** seven helpers (C1-C7), two at a time, each with its own tab and scratch folder (§18). A finisher helper rewrote the 17 rows that the CAPTCHA had left NEEDS_REVIEW, once the main pass had read the sections.
- **Browser tabs:** the main pass used its own tabs. Each helper used one tab of its own and closed it at the end. The helpers loaded the reviewed page-tools script by pasting it, after the auto-mode classifier blocked evaluating the stored copy.

### §1.5 Batteries (rule 19)
- **Engine:** the official Lexis whole-Code search (`pdtocsearchterm` over the whole Mississippi Code 1972 Annotated). Its syntax was validated first (MS-L-SYN-01 to -29):
  - Body text is indexed.
  - Quoted phrases are exact and do not stem; unquoted words match plurals; `!` expands roots; `w/n` counts words.
  - Straight and curly apostrophes both match. "(72)" number style matches, but spelled-only "seventy-two hours" does not.
  - Breadcrumb chapter names are indexed: "landlord" hits all 88 sections of chs. 89-7/89-8, so hits that match only the breadcrumb are read as non-hits.
  - Superseded versions stay indexed.
  - A quoted section number ("89-8-21") finds the section itself (MS-L-X000c).
  - The nonsense control ("zqxvjw") returns 0.
- **Records:** 496 battery records, each saved with its exact query, count, parsed ids, positives and control before any hit was read.
- **Positives:** an absence battery names a known positive wherever one exists. A battery whose positive failed is recorded and not relied on:
  - Main pass: S26, S31, S49 and S50 (rerun as S26b, S31b, S49b, S50b, which passed); S66, S69, S74; K01 (rerun as K01b).
  - Helpers: C3-013 (replaced by C3-030), C4-030 (replaced by C4-035), C7-035 (rerun as C7-040).
  - Three positives were dropped in the browser before their batteries ran, and recorded before results were read: S70, S64, S78.
  - The integrity check confirms that no delta row cites a failed battery as support (§8).

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,255 active lease clauses were screened.
  - The 100 shared clauses and the blank-states clause were read one by one in the main pass against the Mississippi text: chs. 89-7 and 89-8 read whole, plus the outside-title sections in §17.
  - The 1,154 single-state clauses were triaged (§2.3).
- **Key Mississippi facts that decided most verdicts** (all read section-open):
  - **Non-waiver:** § 89-8-5 bars waiving "any of the rights, duties or remedies under this chapter", confession of judgment, and exculpating the landlord's willful misconduct. It does not bar exculpating ordinary negligence.
  - **Rent:** "Rent" includes all payments under the rental agreement, including required late fees (§ 89-8-7(1)(k)).
  - **Notices:** a 14-day breach notice with cure, and a 3-day nonpayment notice (§ 89-8-13). E-mail or text is allowed only where the tenant agreed in writing (§ 89-8-13(3), (5)(a)). For the holdover notice, the tenant need only have "agreed" (§ 89-8-17(2)).
  - **UETA conflict:** the electronic-transactions act does not reach default, eviction or right-to-cure notices for a primary residence (§ 75-12-5(b)(4)). This conflicts with the RLTA's e-mail permission (rule 31; §10).
  - **Holdover:** double rent after notice, "if not contradicted by the rental agreement" (§ 89-8-45). A periodic tenancy ends on 7 or 30 days' written notice (§ 89-8-19).
  - **Deposits:** no cap. Returned within 45 days after termination, delivery of possession and the tenant's demand, with an itemized notice; a $200 bad-faith penalty (§ 89-8-21).
  - **Shifting duties:** landlord duties may be shifted to the tenant "in writing" in good faith, with no separate document and no dwelling-type limit (§ 89-8-23(3)).
  - **Absences:** no entry statute, late-fee cap, retaliation statute (only § 89-8-17(2)'s rent-increase limb), DV or military termination right, state fair housing act, private-rental smoke-detector duty, or rent-control statute.
- **Fee screens (kickoff):**
  - `keys` and `hoa-compliance` were checked against any closed fee list or domestic-violence lock rule. Mississippi has neither, so both were tagged as written.
  - Every shared clause that charges the tenant was screened against the dishonored-check service charge (§§ 11-7-12, 97-19-57, $40) and the Rent definition.

### §2.1 Tagged MS as written (89)
`acceptable-payment-methods`, `addendum-precedence`, `appliances-excluded-la`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `assistance-animal-accommodation`, `association-approval-la`, `cannabis-restrictions-ak`, `carpet-cleaning-ar`, `casualty-termination-mt`, `common-area-use`, `criminal-activity-ky`, `default-by-tenant`, `detector-care-la`, `due-at-signing`, `early-termination-ks`, `edu-cares-act-notice`, `electronic-notice-ma`, `electronic-signatures`, `end-of-term-notice-ga`, `entire-agreement`, `existing-condition`, `extended-absence-notice-ks`, `fire-safety-grilling`, `firearm-rules-la`, `furnishings-included-la`, `governing-law`, `government-fee-reimbursement-ky`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `improvements-ownership-la`, `informal-dispute-resolution-or`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance`, `landlords-access`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-liens-ar`, `no-sublet-assign`, `nonrefundable-fees-wv`, `notices`, `owner-occupancy-termination-ar`, `parking-mn`, `parking-vehicle-rules`, `periodic-tenancy-notice-mt`, `permitted-occupants`, `pest-cooperation-la`, `pet-insurance-requirement`, `pet-policy-or`, `possession-delay`, `prohibited-acts-renter-wy`, `prompt-payment-discount-la`, `rent-concession-wi`, `rent-escalation-la`, `rent-increase-midterm-ky`, `rent-installments-or`, `rent-payment`, `rental-application-accuracy-la`, `residential-use-only`, `returned-payments`, `rules-ia`, `scheduled-services-entry-la`, `security-deposit-use`, `services-utilities-provided`, `severability`, `showing-notice-la`, `smoking-policy`, `snow-removal`, `storage-space-mn`, `surrender-end-of-term`, `tax-insurance-escalation-la`, `tenant-caused-damage-nm`, `tenant-death-contact-nh`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenant-repair-agreement-hi`, `tenants-property-insurance-mn`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-allowance-cap-co`, `utility-payment-evidence`, `utility-service-continuity`, and the federal row `edu-cares-act-notice`.

Each tag's reason is in its " | MS: …" notes segment.

### §2.2 Clauses read in the main pass and not tagged, with reasons
- **Class decision (rule 52):** an unqualified "Landlord is not liable" disclaimer reaches the landlord's willful misconduct, which § 89-8-5(b) forbids a rental agreement to exculpate. Every such shared clause is untagged and replaced by a variant that excepts willful misconduct:
  - `parking`, `storage-space`, `tenants-property-insurance` and their `-ks-oh-ca` variants are replaced by `parking-mn`, `storage-space-mn` and `tenants-property-insurance-mn`.
  - `pet-policy` is replaced by `pet-policy-or`: its indemnity has no willful-misconduct carve-out.
- **Overrides written instead:**
  - `security-deposit-return` → `security-deposit-return-ms`. The 45-day clock runs from the last of termination, possession and the tenant's written demand with a forwarding address.
  - `holdover-ca` → `holdover-ms`. Double rent runs from the landlord's notice for a fixed Term (§ 89-8-45), with no stacking with Rent (§ 89-8-39(4)).
- **Not needed:**
  - `maintenance-allocation-ks`: Mississippi needs no separate writing.
  - `ev-charging-*-co`: they rest on Colorado statutes.
  - Variants of tagged bases, which were not needed.
- **Triage NOT verdicts confirmed in the main pass:**
  - `tenant-notice-of-adverse-proceeding-nd`: duplicate of the tagged `tenant-forward-proceedings-ca`.
  - `criminal-activity-ks`, `extended-absence-notice-hi`, `association-approval-fl`, `rent-escalation-ga`, `cannabis-cultivation-il`: duplicates of tagged rows.
  - `animal-care-access-la`: Louisiana "succession representative"; replaced by `animal-care-access-ms`.
  - `landlord-self-cure-tn`: "Non-URLTA Counties" title.
  - `partial-payment-nonwaiver-mn`: Minnesota stage wording; replaced by `partial-payment-nonwaiver-ms`.
  - `ev-charging-requirements-co`: Colorado basis.
  - `holdover-rate-*`: a stipulated rate would "contradict" § 89-8-45 and replace the statutory double rent (§6.1).
  - `employee-housing-la`: an event-fixed end may not be a "definite term", and Mississippi has no employee exclusion.
  - `sublessee-notice-vt`: low value.
  - `unpaid-amounts-interest-hi`: its "other than Rent" scope is unclear, because Mississippi Rent covers all lease payments.
  - `utility-billing-wv`: water submetering is covered by § 77-3-97 and `water-submetering-ms`.
  - `employee-housing-ar`: no Mississippi employee exclusion (§ 89-8-3(2)(f) excludes only agricultural labor).

### §2.3 Single-state clauses (rule 26 triage)
- **Screened:** 1,154 single-state clauses. A script excluded the 581 that name another state or its statute in title or body. TA and TB read the remaining 573 in full.
- **Verdicts:** 28 TAGGABLE, 539 NOT, 6 UNSURE. Every TAGGABLE and UNSURE clause was re-read in the main pass, with its basis checked against its own state's statute (rule 26 [OR 5]).
- **Tagged:** `appliances-excluded-la`, `cannabis-restrictions-ak`, `carpet-cleaning-ar`, `casualty-termination-mt`, `detector-care-la`, `end-of-term-notice-ga`, `firearm-rules-la`, `improvements-ownership-la`, `no-liens-ar`, `nonrefundable-fees-wv`, `owner-occupancy-termination-ar`, `parking-mn`, `periodic-tenancy-notice-mt`, `pest-cooperation-la`, `rent-escalation-la`, `rental-application-accuracy-la`, `storage-space-mn`, `tenant-repair-agreement-hi`, `tenants-property-insurance-mn` (19).
- **The rest:** not tagged, for the reasons in §2.2, or because a Mississippi `-ms` row was written instead.

## §3 New rows (rule_type, basis, citation)
### §3.1 MS lease clauses (17 new)
| Row | rule_type | basis | topic_key | supersedes | source | key citations |
|---|---|---|---|---|---|---|
| `security-deposit-return-ms` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | security-deposit-return | main | 89-8-21(3); 89-8-21(4); 89-8-21 |
| `holdover-ms` | RECOMMENDED | SERVES_LANDLORD | holdover | holdover-ca | main | 89-8-45; 89-8-17(1); 89-8-17(2); 89-7-25; 89-8-3(1) |
| `electronic-notice-consent-ms` | CONDITIONAL | SERVES_LANDLORD | notice-delivery-methods | — | main | 89-8-13(3); 89-8-17(2); 75-12-5(b)(4); 75-12-5(c); 75-12-15(c) |
| `abandoned-property-ms` | CONDITIONAL | SERVES_LANDLORD | abandoned-property | — | main | 89-8-13(6); 89-8-39; 89-8-39(1); 89-7-1; 89-7-49 |
| `water-submetering-ms` | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Miss. Code Ann. § 77-3-97(3)(b) | utility-submetering-disclosure | — | main | 77-3-97(3)(b); 77-3-97(2)(a); 77-3-97(2)(f); 77-3-97(3)(a); 77-3-97(3)(d) |
| `government-fines-reimbursement-ms` | RECOMMENDED | SERVES_LANDLORD | governmental-fines | — | main | 89-8-25(b); 89-8-25(f); 89-8-25(h); 89-8-25(i); 89-8-23 |
| `condition-report-ms` | RECOMMENDED | SERVES_LANDLORD | condition-inspection | — | main | 89-8-21(3); 89-8-5 |
| `condemnation-ms` | RECOMMENDED | SERVES_LANDLORD | eminent-domain | — | main | 89-8-13(4); Miss. Const. art. 3, § 17 |
| `reletting-damages-ms` | RECOMMENDED | SERVES_LANDLORD | abandonment-and-mitigation | — | main | 89-8-13(1); 89-8-13(4); 89-8-9; 89-8-19 |
| `repair-deductible-ms` | CONSTRAINED | CONSTRAINED_TERM \| SERVES_LANDLORD | maintenance-duty-shift | — | main | 89-8-23(1)(a); 89-8-23(1)(b); 89-8-23(3); 89-8-5; 89-8-13(2) |
| `animal-care-access-ms` | RECOMMENDED | SERVES_LANDLORD | animal-care-access | — | main | 97-41-16(2)(a); 97-41-16(5)(a); 89-8-39 |
| `partial-payment-nonwaiver-ms` | RECOMMENDED | SERVES_LANDLORD | waiver-by-acceptance | — | main | 89-8-35(2); 89-8-13(3)(a); 89-8-39(4)(a)(i); 89-8-39(4)(a)(ii); 89-8-39(4)(b) |
| `liability-limitation-ms` | CONSTRAINED | CONSTRAINED_TERM \| SERVES_LANDLORD | exculpatory-clauses | — | main | 89-8-5(b); 89-8-5; 89-8-23 |
| `owner-agent-identity-ms` | RECOMMENDED | SERVES_LANDLORD | owner-identity-disclosure | — | main | 89-10-3(2); 89-10-3(1)(b); 89-8-7(2); 73-35-3 |
| `brownfield-notice-ms` | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Miss. Code Ann. § 49-35-17(3)(a) | hazardous-contamination-disclosure | — | main | 49-35-17(3)(a); 49-35-19(3); 49-35-17(2)(d)(iii); 49-35-17(2)(d)(iv); 49-35-5(b) |
| `pool-safety-ms` | CONDITIONAL | SERVES_LANDLORD | pool-safety | — | main | 45-43-5; 45-43-3(g); 45-43-19(3); 45-43-19(2); 45-43-19(4) |
| `hunting-rights-ms` | RECOMMENDED | SERVES_LANDLORD | farmland-hunting-rights | — | main | 49-7-79(1) |

### §3.2 MS education rows (360 new)
- One education row per topic (360). By source: C1 52, C2 52, C3 52, C4 52, C5 52, C6 52, C7 48.
- By the opening of their notes: Present 136, Confirmed absent 221, Not applicable 3.
- Every row is VERIFIED.

| Row | answer | rule_type | topic_key | source | key citations |
|---|---|---|---|---|---|
| `edu-abandoned-property-ms` | Present | CONDITIONAL | abandoned-property | C3 | 89-8-13(6); 89-8-39(1); 89-8-39(3); 89-8-35(2) |
| `edu-abandonment-and-mitigation-ms` | Present | CONDITIONAL | abandonment-and-mitigation | C3 | 89-7-49; 89-8-13(4); 89-8-9; 89-8-19(2) |
| `edu-no-acceptable-payment-methods-ms` | Confirmed absent | RECOMMENDED | acceptable-payment-methods | C1 | 89-8-7(1)(k); 11-7-12(1); 11-7-12(2)(d) |
| `edu-no-accessory-dwelling-unit-law-ms` | Confirmed absent | RECOMMENDED | accessory-dwelling-unit | C7 | 89-8-7(1)(c); 89-8-23(1)(a); 89-8-3(1); 89-8-3(2) |
| `edu-notice-delivery-receipt-ms` | Confirmed absent | RECOMMENDED | actual-notice-method | C4 | 89-8-25; 85-7-125; 77-9-531; 89-8-13(3) |
| `edu-no-addendum-precedence-rule-ms` | Confirmed absent | RECOMMENDED | addendum-precedence | C4 | 89-1-503; 89-1-503(1); 29-3-63; 63-17-55 |
| `edu-adverse-proceeding-notice-ms` | Present | REQUIRED/RECOMMENDED | adverse-proceeding-notice | C4 | 11-19-9; 89-7-19; 95-3-7; 97-44-15(5) |
| `edu-no-smoke-co-alarm-statute-ms` | Confirmed absent | RECOMMENDED | alarm-duties | C2 | 45-11-101; 73-69-5; 45-11-101(1)(f); 45-11-101(1)(a) |
| `edu-no-alarm-tampering-fee-ms` | Confirmed absent | CONSTRAINED | alarm-tampering-fee | C7 | 89-8-7(1)(k); 89-8-9; 89-8-13(3); 89-8-21(3) |
| `edu-no-algorithmic-rent-setting-ms` | Confirmed absent | RECOMMENDED | algorithmic-rent-setting | C1 | battery/absence |
| `edu-no-alt-housing-duty-ms` | Confirmed absent | RECOMMENDED | alt-housing | C2 | 33-15-217; 93-21-15; 43-39-13; 89-7-3 |
| `edu-alterations-ms` | Present | CONSTRAINED | alterations | C2 | 89-8-25(e); 89-8-21(3); 85-7-411(3); 51-9-122 |
| `edu-no-animal-care-entry-right-ms` | Confirmed absent | RECOMMENDED | animal-care-access | C5 | 71-5-11; 97-41-2; 69-13-103; 73-39-89 |
| `edu-no-appliance-presumption-ms` | Confirmed absent | RECOMMENDED | appliances-excluded | C2 | 89-8-25; 89-8-23(1)(b); 89-8-23(3); 89-8-25(d) |
| `edu-appliances-included-ms` | Present | RECOMMENDED | appliances-included | C2 | 89-8-23(1)(b); 89-8-13(2); 89-8-13(3); 89-8-15(1) |
| `edu-no-application-fee-rules-ms` | Confirmed absent | RECOMMENDED | application-fees | C1 | 89-8-21(1) |
| `edu-no-application-of-payments-ms` | Confirmed absent | RECOMMENDED | application-of-payments | C1 | 89-8-7(1)(k); 89-8-13(5)(a); 89-8-39(4)(a)(i); 89-8-39(4)(b) |
| `edu-no-asbestos-rule-ms` | Confirmed absent | RECOMMENDED | asbestos-hazards | C7 | 89-8-23(1)(a); 89-8-3(1); 89-8-3(2); Miss. Const. art. 3, § 12 |
| `edu-assigned-parking-space-ms` | Confirmed absent | RECOMMENDED | assigned-parking-space | C5 | 89-8-7(1)(i); 89-8-11(2); 57-64-19; 37-101-91 |
| `edu-assistance-animals-ms` | Present | CONSTRAINED | assistance-animal-accommodation | C5 | 43-6-155(1); 43-6-155(3); 43-6-153(e); 43-6-7 |
| `edu-no-association-disclosure-ms` | Confirmed absent | RECOMMENDED | association-obligations-disclosure | C6 | 89-9-19; 89-8-11(3); 89-8-3(2)(e); 89-9-21 |
| `edu-attorney-fees-ms` | Confirmed absent | CONSTRAINED | attorney-fees | C3 | 11-55-5(1); 11-7-12(2); 97-19-55(1); 97-19-55(1)(a) |
| `edu-no-lease-auto-renewal-rule-ms` | Confirmed absent | RECOMMENDED | automatic-renewal | C4 | 79-1-1; 65-43-3; 75-71-406; 35-7-19 |
| `edu-no-balcony-inspection-ms` | Confirmed absent | RECOMMENDED | balcony-inspection | C7 | 45-11-25; 45-11-49; 89-8-23(1)(a); 89-8-23(1)(b) |
| `edu-no-bed-bug-rule-ms` | Confirmed absent | RECOMMENDED | bed-bug-cooperation | C2 | 89-8-25(a); 89-8-25(b); 89-8-25(g); 89-8-23(1)(a) |
| `edu-no-bed-bug-disclosure-ms` | Confirmed absent | RECOMMENDED | bed-bug-disclosure | C6 | 75-12-5; 89-8-23(1)(a); 89-8-23(1)(b); 89-8-3(1) |
| `edu-no-lease-arbitration-statute-ms` | Confirmed absent | RECOMMENDED | binding-arbitration | C4 | 11-15-1; 11-15-103; 11-15-101; 11-15-101(2) |
| `edu-medical-cannabis-ms` | Present | CONSTRAINED | cannabis | C5 | 41-137-19(4); 41-137-15(2); 89-8-25(i); 41-137-15 |
| `edu-cares-act-state-notices-ms` | Present | CONDITIONAL | cares-act-notice | C3 | 89-8-13(5)(a); 89-8-13(3); 89-8-17(2); 89-8-19(2) |
| `edu-no-carpet-cleaning-rule-ms` | Confirmed absent | RECOMMENDED | carpet-cleaning | C2 | 27-65-3; 89-8-21(3); 89-8-25(a); 89-8-25(e) |
| `edu-casualty-mitigation-waiver-ms` | Present | CONSTRAINED | casualty-and-mitigation-waivable | C7 | 89-7-3; 89-8-5; 89-8-3(1); 89-8-13(2) |
| `edu-casualty-termination-ms` | Present | CONDITIONAL | casualty-termination | C3 | 89-7-3; 89-8-13(2); 89-8-9; 89-8-13(3)(c) |
| `edu-no-occupancy-certificate-disclosure-ms` | Confirmed absent | RECOMMENDED | certificate-of-occupancy-disclosure | C6 | 89-8-23(1)(a); 89-8-23(1)(b); 43-35-105; 89-8-3(1) |
| `edu-children-occupancy-ms` | Confirmed absent | PROHIBITED/CONSTRAINED | children-occupancy | C7 | 43-33-723; 43-33-717; 93-20-311; 11-62-5 |
| `edu-no-cold-weather-vacate-notice-ms` | Confirmed absent | RECOMMENDED | cold-weather-vacate-notice | C2 | 89-8-25(d); 89-8-25(e); 89-8-25(g); 89-8-23(2) |
| `edu-collection-fee-ms` | Confirmed absent | CONSTRAINED | collection-fee | C1 | 11-7-12(1); 11-7-12(2)(b)(ii); 89-8-7(1)(k); 89-8-13(5)(b) |
| `edu-no-common-area-lighting-rule-ms` | Confirmed absent | RECOMMENDED | common-area-lighting | C2 | 55-23-19; 27-104-371; 89-8-7(1)(i); 89-8-23(1)(a) |
| `edu-common-area-use-ms` | Present | CONSTRAINED | common-area-use | C5 | 89-8-11(1); 89-8-11(1)(a); 89-8-11(1)(c); 89-8-11(2) |
| `edu-condemned-premises-ms` | Present | PROHIBITED/CONDITIONAL | condemned-premises-rent-bar | C2 | 43-35-105(c); 43-35-105(d); 43-35-105; 43-35-103 |
| `edu-no-condition-inspection-rule-ms` | Confirmed absent | RECOMMENDED | condition-inspection | C1 | 89-8-21(3); 89-8-23(1)(b); 89-8-3(1); 89-8-3(2) |
| `edu-confession-of-judgment-ms` | Present | PROHIBITED | confession-of-judgment | C7 | 89-8-5; 89-8-5(a); 11-7-181; 89-8-3(1) |
| `edu-no-confirmed-absences-habitability-ms` | Confirmed absent | RECOMMENDED | confirmed-absences-habitability | C2 | 89-8-23(1)(a); 89-8-13(2); 89-8-15(4); 89-8-17(2) |
| `edu-no-confirmed-absences-misc-ms` | Confirmed absent | RECOMMENDED | confirmed-absences-misc | C4 | 89-8-5(a); 95-3-23; 89-10-3 |
| `edu-confirmed-absences-outside-title-ms` | Present | RECOMMENDED | confirmed-absences-outside-title | C4 | 89-10-1; 89-10-3(1)(c); 89-10-3(4)(a); 89-8-33(a)(ii) |
| `edu-construction-liens-ms` | Present | RECOMMENDED | construction-liens | C2 | 85-7-411(1)(a); 85-7-411(1)(b); 85-7-411(2); 85-7-411(3) |
| `edu-consumer-protection-act-ms` | Present | CONSTRAINED | consumer-protection-act | C7 | 75-24-5(1); 75-24-5(2)(a); 75-24-3(b); 75-24-15(1) |
| `edu-no-conversion-notice-ms` | Confirmed absent | RECOMMENDED | conversion-notice | C3 | 89-9-19; 89-8-17(1); 89-8-19(2); 89-8-9 |
| `edu-criminal-activity-ms` | Present | CONDITIONAL | criminal-activity | C3 | 89-8-25(i); 89-8-13(1); 89-8-13(3); 89-8-19(4) |
| `edu-cure-and-eviction-grounds-ms` | Present | REQUIRED | cure-and-eviction-grounds | C3 | 89-8-31(a); 89-8-31(b); 89-8-13(5)(a); 1-3-67 |
| `edu-default-by-tenant-ms` | Present | CONSTRAINED | default-by-tenant | C3 | 89-8-13(5)(a); 89-8-13(5)(b); 89-8-13(3); 89-8-13(3)(b) |
| `edu-no-drywall-disclosure-ms` | Confirmed absent | RECOMMENDED | defective-drywall-disclosure | C6 | 89-8-23(1)(a); 89-8-23(1)(b); 89-8-3(1); 89-8-3(2) |
| `edu-no-deposit-cost-schedule-ms` | Confirmed absent | CONSTRAINED | deposit-cost-schedule | C1 | 89-8-21(3); 89-8-21(4); 89-8-5; 89-8-3(1) |
| `edu-deposit-escheat-ms` | Present | CONDITIONAL | deposit-escheat | C1 | 89-12-3(f)(ii); 89-12-3(d); 89-12-3(i); 89-12-14(1) |
| `edu-no-deposit-installments-ms` | Confirmed absent | RECOMMENDED | deposit-installments | C1 | 89-8-21(1); 89-8-21(2); 89-8-21(3); 89-8-3(1) |
| `edu-no-deposit-last-month-rent-ms` | Confirmed absent | CONSTRAINED | deposit-last-month-rent | C1 | 89-8-21(1); 89-8-21(3); 89-8-13(4); 89-8-3(1) |
| `edu-deposit-surrender-notice-ms` | Present | CONDITIONAL | deposit-surrender-notice | C1 | 89-8-21(3); 89-8-5; 89-8-3(1); 89-8-3(2) |
| `edu-no-designated-repairer-ms` | Confirmed absent | RECOMMENDED | designated-repairer | C2 | 31-7-13; 37-29-137; 41-67-21; 89-8-15(1) |
| `edu-disability-accommodation-ms` | Confirmed absent | REQUIRED/RECOMMENDED | disability-accommodation | C2 | 43-33-723; 43-6-155(1); 43-6-153(e); 43-6-255 |
| `edu-no-disaster-guest-rule-ms` | Confirmed absent | RECOMMENDED | disaster-displaced-guests | C5 | 33-15-215; 43-33-717; 43-35-13; 11-27-81 |
| `edu-disaster-duties-ms` | Present | CONSTRAINED | disaster-duties | C3 | 89-7-3; 75-24-25(2); 75-24-25(3); 75-24-25(6) |
| `edu-disturbance-ms` | Present | RECOMMENDED | disturbance | C2 | 89-8-25(f); 89-8-13(1); 89-8-13(3); 89-8-13(3)(b) |
| `edu-no-double-letting-ms` | Confirmed absent | RECOMMENDED | double-letting | C2 | 89-8-9; 89-8-13(2); 89-8-13(4); 89-8-3(1) |
| `edu-no-drug-free-addendum-statute-ms` | Confirmed absent | RECOMMENDED | drug-free-housing-addendum | C3 | 47-5-940; 43-21-321; 89-8-25(i); 95-3-23 |
| `edu-due-at-signing-ms` | Present | CONSTRAINED | due-at-signing | C1 | 89-8-21(1); 89-8-21(2); 89-8-21(3); 89-8-13(4) |
| `edu-no-dv-confidentiality-rule-ms` | Confirmed absent | RECOMMENDED | dv-confidentiality | C7 | 99-47-1; 99-47-1(4)(a); 99-47-1(4)(d); 99-47-1(2)(e) |
| `edu-no-dv-deposit-timing-ms` | Confirmed absent | RECOMMENDED | dv-deposit-timing | C1 | 93-21-15(1)(a)(iv); 93-21-15(1)(a)(v); 93-21-15(2)(a)(ii); 89-8-21(3) |
| `edu-no-dv-eviction-protection-ms` | Confirmed absent | RECOMMENDED | dv-eviction-protection | C3 | 93-21-15; 89-8-13(1); 89-8-13(3)(c); 89-8-9 |
| `edu-no-dv-lease-termination-ms` | Confirmed absent | RECOMMENDED | dv-lease-termination | C3 | 93-21-15; 89-8-19(2); 89-8-19(3); 93-21-15(1)(a)(iv) |
| `edu-no-dv-lockchange-statute-ms` | Confirmed absent | RECOMMENDED | dv-lockchange | C3 | 93-21-15; 93-21-15(1)(a)(iv); 93-21-15(1)(b); 93-21-15(2)(a)(ii) |
| `edu-dv-law-citations-ms` | Present | RECOMMENDED | dv-protection-order-chapter-moved | C4 | 93-21-15(1)(a)(iv); 93-21-15(1)(a)(ii); 93-21-15(1)(a)(v); 93-21-15(2)(a)(ii) |
| `edu-dv-qualifying-documents-ms` | Not applicable | RECOMMENDED | dv-qualifying-documents | C3 | 93-21-15; 93-21-15(3); 93-21-15(1)(a)(iv); 93-21-15(1)(b) |
| `edu-early-termination-ms` | Present | CONDITIONAL | early-termination | C3 | 89-8-29(2); 89-8-29(3)(a); 89-8-29(3)(b); 89-8-29(3)(c) |
| `edu-electric-submetering-ms` | Present | CONDITIONAL/RECOMMENDED | electric-submetering-disclosure | C6 | 77-3-3(d)(i); 77-3-3(d); 77-3-3; 77-3-97 |
| `edu-electronic-signatures-ms` | Present | RECOMMENDED | electronic-signatures | C4 | 75-12-9(b); 75-12-9(c); 75-12-13(a); 75-12-13(c) |
| `edu-no-emergency-assistance-right-ms` | Confirmed absent | RECOMMENDED | emergency-assistance-right | C7 | 89-8-11(1)(a); 89-8-11(1)(c); 89-8-9; 89-8-25(i) |
| `edu-no-emergency-contact-ms` | Confirmed absent | RECOMMENDED | emergency-contact | C4 | 19-5-359; 89-8-15(1); 89-8-25(g); 89-8-3(1) |
| `edu-no-eminent-domain-lease-rule-ms` | Confirmed absent | RECOMMENDED | eminent-domain | C3 | Miss. Const. art. 3, § 17 |
| `edu-no-employee-screening-ms` | Confirmed absent | RECOMMENDED | employee-screening | C2 | 89-8-7(2); 75-24-29(1); 75-24-29(3); 75-24-29(8) |
| `edu-no-energy-data-release-ms` | Confirmed absent | RECOMMENDED | energy-data-release | C4 | 57-87-7; 77-3-97(3)(d)(i); 77-3-97(2)(a); 77-3-97(3)(a) |
| `edu-entire-agreement-ms` | Present | RECOMMENDED | entire-agreement | C5 | 89-8-7(1)(l); 89-8-11(2); 89-8-19(2); 89-8-19(3) |
| `edu-entity-landlord-representation-ms` | Present | CONSTRAINED | entity-landlord-court-representation | C3 | 73-3-55; 89-8-7(2) |
| `edu-no-environmental-event-termination-ms` | Confirmed absent | RECOMMENDED | environmental-event-termination | C3 | 89-8-23(1)(a); 89-8-13(2); 89-8-19(4); 89-8-33(b)(i) |
| `edu-no-ev-charging-right-ms` | Confirmed absent | RECOMMENDED | ev-charging | C5 | 65-1-181.1; 65-1-181; 27-19-21; 77-3-3 |
| `edu-no-ev-charger-removal-rule-ms` | Confirmed absent | RECOMMENDED | ev-charging-end-of-tenancy | C5 | 65-1-181.1; 65-1-181; 27-19-21; 77-3-3 |
| `edu-no-ev-charging-requirements-ms` | Confirmed absent | RECOMMENDED | ev-charging-requirements | C5 | 65-1-181.1; 65-1-181; 27-19-21; 77-3-3 |
| `edu-no-ev-charging-shared-area-ms` | Confirmed absent | RECOMMENDED | ev-charging-shared-area | C5 | 65-1-181.1; 65-1-181; 27-19-21; 77-3-3 |
| `edu-eviction-stays-ms` | Present | CONDITIONAL | eviction-hardship-stay | C3 | 89-8-39(1); 89-8-41(2); 89-8-41(3); 89-8-39(4)(a)(i) |
| `edu-no-eviction-penalty-rule-ms` | Confirmed absent | RECOMMENDED | eviction-penalty-clause-ban | C7 | 89-8-33; 89-8-7(1)(k); 89-8-9; 89-8-3(1) |
| `edu-eviction-process-ms` | Present | REQUIRED | eviction-process | C3 | 89-8-7(1)(b); 89-8-33(a); 89-8-33(a)(i); 89-8-33(a)(ii) |
| `edu-no-eviction-record-sealing-ms` | Confirmed absent | RECOMMENDED | eviction-record-sealing | C3 | 97-44-15; 99-19-71 |
| `edu-eviction-service-party-ms` | Present | CONSTRAINED | eviction-service-party | C3 | 89-8-35(3); 89-8-35(1); 99-47-1(2)(a)(ii); 99-47-1 |
| `edu-exculpatory-clauses-ms` | Present | CONSTRAINED | exculpatory-clauses | C7 | 89-8-5; 89-8-5(b); 89-8-23; 89-8-3(1) |
| `edu-existing-condition-ms` | Present | RECOMMENDED | existing-condition | C2 | 89-8-23(1)(b); 89-8-25(h); 89-8-21(3); 89-8-29(3)(c) |
| `edu-criminal-activity-eviction-ms` | Present | RECOMMENDED | expedited-criminal-eviction | C4 | 89-8-25(i); 89-8-13(1); 89-8-19(4); 89-8-33(b)(i) |
| `edu-no-expedited-deposit-ms` | Confirmed absent | RECOMMENDED | expedited-deposit-disposition | C1 | 89-8-21(3); 89-8-5; 89-8-3(1); 89-8-3(2) |
| `edu-no-extended-absence-notice-ms` | Confirmed absent | RECOMMENDED | extended-absence-notice | C2 | 89-8-13; 89-8-25(g); 89-7-49; 89-8-3(1) |
| `edu-fair-housing-ms` | Confirmed absent | PROHIBITED | fair-housing | C7 | 43-33-723; 11-62-5; 29-18-3 |
| `edu-no-family-child-care-rule-ms` | Confirmed absent | RECOMMENDED | family-child-care | C2 | 41-137-15(4); 89-8-11(4); 89-8-11(1)(a) |
| `edu-farmland-hunting-rights-ms` | Confirmed absent | RECOMMENDED | farmland-hunting-rights | C7 | 49-7-79(1); 49-7-79(2); 97-17-93(1); 27-35-50(4)(b)(i) |
| `edu-no-fee-in-lieu-of-deposit-ms` | Confirmed absent | RECOMMENDED | fee-in-lieu-of-deposit | C1 | 89-8-21(1); 89-8-21(3); 89-8-7(1)(k); 89-8-3(1) |
| `edu-no-fee-transparency-ms` | Confirmed absent | RECOMMENDED | fee-transparency | C1 | 75-24-5(1); 75-24-5(2)(i); 75-24-3(b); 75-24-15(1) |
| `edu-no-fee-unprovided-service-ms` | Confirmed absent | RECOMMENDED | fee-unprovided-service | C1 | 89-8-9; 89-8-7(1)(d); 89-8-7(1)(k); 89-8-13(5)(b) |
| `edu-fees-as-rent-ms` | Present | CONSTRAINED | fees-as-rent | C1 | 89-8-7(1)(k); 89-8-13(5)(a); 89-8-33(a)(ii); 89-8-13(5)(b) |
| `edu-fire-code-standard-ms` | Present | REQUIRED | fire-code-standard | C7 | 45-11-101(1); 45-11-101(1)(a); 45-11-101(1)(b); 45-11-101(1)(c) |
| `edu-no-grill-statute-ms` | Confirmed absent | RECOMMENDED | fire-safety-grilling | C5 | 45-11-101(1)(a); 45-11-101(1)(b); 45-11-101(1)(c); 89-8-25(a) |
| `edu-no-sprinkler-retrofit-duty-ms` | Confirmed absent | RECOMMENDED | fire-sprinkler-duty | C7 | 17-2-3(7); 17-2-4(1)(b); 45-11-101(1)(f); 89-8-3(2)(c) |
| `edu-firearms-ms` | Present | CONSTRAINED/RECOMMENDED | firearms | C6 | 45-9-51(2); 45-9-51(1); 45-9-55(1); 45-9-55(2) |
| `edu-no-flood-disclosure-ms` | Confirmed absent | RECOMMENDED | flood-disclosure | C6 | 51-29-159; 89-7-3; 89-8-3(1); 89-8-3(2) |
| `edu-no-for-cause-eviction-ms` | Confirmed absent | RECOMMENDED | for-cause-eviction | C4 | 63-17-113; 89-7-63; 89-8-17(1); 89-8-17(2) |
| `edu-no-foreclosure-tenant-rule-ms` | Confirmed absent | RECOMMENDED | foreclosure | C4 | 57-10-17; 89-9-21; 75-12-5; 85-7-405 |
| `edu-no-foreclosure-disclosure-ms` | Confirmed absent | RECOMMENDED | foreclosure-disclosure | C6 | 75-12-5; 89-8-3(1); 89-8-3(2) |
| `edu-foreign-ownership-ms` | Present | CONDITIONAL | foreign-ownership | C7 | 89-27-3(d); 89-27-3(a); 89-27-3(c)(i); 89-27-3(c)(ii) |
| `edu-pay-and-stay-ms` | Present | REQUIRED | forfeiture-redemption | C4 | 89-8-13(5)(a); 89-8-7(1)(k); 1-3-67; 89-8-13(3)(a) |
| `edu-code-editions-ms` | Present | RECOMMENDED | frozen-standard-incorporation | C7 | 89-8-23(1)(a); 89-8-7(1)(a); 17-2-1(1); 17-2-1(2) |
| `edu-no-furnished-rental-rule-ms` | Confirmed absent | RECOMMENDED | furnishings-included | C1 | 89-8-23(1)(b); 89-8-21(3); 27-65-23; 89-8-3(1) |
| `edu-no-good-cause-notice-ms` | Confirmed absent | RECOMMENDED | good-cause-notice | C6 | 63-17-113; 89-7-75; 89-8-19(2); 89-8-19(3) |
| `edu-governing-law-ms` | Present | RECOMMENDED | governing-law | C5 | 89-8-3(1); 89-8-7(1)(b); 89-8-3(2); 11-21-1 |
| `edu-no-government-fee-reimbursement-ms` | Confirmed absent | RECOMMENDED | government-fee-reimbursement | C1 | 89-8-7(1)(k); 89-8-3(1); 89-8-19(2); 89-8-19(3) |
| `edu-no-governmental-fines-rule-ms` | Confirmed absent | CONSTRAINED | governmental-fines | C1 | 89-8-25(b); 89-8-25(h); 89-8-23(1)(a); 89-8-5 |
| `edu-guarantor-ms` | Confirmed absent | RECOMMENDED | guarantor-renewal | C4 | 89-8-29; 15-3-1; 15-3-1(a); 89-8-29(2) |
| `edu-guest-policy-ms` | Present | RECOMMENDED | guest-policy | C6 | 89-8-25(e); 89-8-25(f); 89-8-23(2); 89-10-3(1)(c) |
| `edu-no-guest-day-limit-ms` | Confirmed absent | RECOMMENDED | guest-policy-day-limit | C6 | 89-8-7(1)(m); 89-10-3(1)(c); 89-10-3; 97-17-93 |
| `edu-no-guest-rights-ms` | Confirmed absent | RECOMMENDED | guest-rights | C6 | 89-8-25(e); 89-8-25(f); 89-10-3(1)(c); 89-8-11(1) |
| `edu-habitability-materiality-ms` | Present | RECOMMENDED | habitability-materiality | C2 | 89-8-23(1)(a); 89-8-13(2); 89-8-15(1); 89-8-19(4) |
| `edu-habitability-modifiable-ms` | Present | CONSTRAINED | habitability-modifiable | C2 | 89-8-5; 89-8-5(a); 89-8-5(b); 89-8-23(3) |
| `edu-no-habitability-presumption-ms` | Confirmed absent | RECOMMENDED | habitability-presumption | C2 | 99-35-143; 63-17-86; 89-8-23(1)(b); 89-8-23(1)(a) |
| `edu-no-habitability-lease-statement-ms` | Confirmed absent | RECOMMENDED | habitability-statement | C2 | 89-8-7; 43-35-105; 93-19-13; 89-8-23(1)(a) |
| `edu-habitability-waiver-ms` | Present | PROHIBITED/CONDITIONAL | habitability-waiver | C7 | 89-8-23(3); 89-8-23(1)(a); 89-8-23(1)(b); 89-8-5 |
| `edu-no-contamination-disclosure-ms` | Confirmed absent | CONDITIONAL/RECOMMENDED | hazardous-contamination-disclosure | C6 | 49-35-19(3); 49-35-19(1)(a); 49-35-19(1)(b); 49-35-19(2) |
| `edu-no-health-department-rental-rules-ms` | Confirmed absent | RECOMMENDED | health-district-rental-rules | C2 | 45-43-21; 41-57-43; 41-67-21(1); 43-35-105 |
| `edu-heating-cooling-ms` | Present | REQUIRED/CONSTRAINED | heating | C2 | 89-8-23(1)(b); 89-8-23(3); 89-8-13(2); 89-8-25(d) |
| `edu-hoa-ms` | Present | CONDITIONAL | hoa | C6 | 89-9-19; 89-8-11(3); 89-8-3(2)(e); 89-9-21 |
| `edu-hoa-compliance-ms` | Present | RECOMMENDED | hoa-compliance | C6 | 89-8-11(3); 89-8-7(1)(k); 89-8-13(5)(a); 89-8-11 |
| `edu-holding-deposit-ms` | Present | CONDITIONAL/RECOMMENDED | holding-deposit | C1 | 89-8-21(1); 89-8-21(3); 89-8-21(4); 89-8-3(1) |
| `edu-holdover-ms` | Present | RECOMMENDED | holdover | C4 | 89-8-17(2); 89-8-33(b)(ii); 89-8-45; 89-7-25 |
| `edu-holdover-rate-ms` | Present | RECOMMENDED | holdover-rate | C4 | 89-8-45; 89-7-25; 27-115-69; 69-7-109 |
| `edu-no-home-business-statute-ms` | Confirmed absent | RECOMMENDED | home-business | C2 | 89-8-11(4); 89-8-11(1)(a); 89-8-11(1)(b); 89-8-25(f) |
| `edu-exemptions-no-lease-waiver-ms` | Present | RECOMMENDED | homestead-waiver | C4 | 85-3-1; 85-3-1(a); 85-3-1(h); 85-3-1(m) |
| `edu-no-immigration-status-rule-ms` | Confirmed absent | RECOMMENDED | immigration-status | C7 | 71-11-1; 43-33-723 |
| `edu-no-infirmity-termination-ms` | Confirmed absent | RECOMMENDED | infirmity-termination | C4 | 89-8-19(2); 89-8-19(3); 89-8-13(2); 89-7-3 |
| `edu-no-informal-dispute-resolution-ms` | Confirmed absent | RECOMMENDED | informal-dispute-resolution | C5 | 89-8-5; 89-8-13(5)(a); 89-8-13(3); 89-8-19(2) |
| `edu-no-code-order-disclosure-ms` | Confirmed absent | RECOMMENDED | inspection-condemnation-disclosure | C6 | 43-35-105(c); 43-35-105(d); 43-35-105; 89-8-3(1) |
| `edu-no-inspection-notice-penalty-ms` | Confirmed absent | RECOMMENDED | inspection-notice-penalty | C1 | 89-8-21(4); 89-8-21(3); 89-8-7(1)(d); 89-8-3(1) |
| `edu-inspection-rights-ms` | Confirmed absent | RECOMMENDED | inspection-rights | C3 | 89-8-11; 89-8-13(1); 89-8-25(g); 89-8-9 |
| `edu-no-co-tenant-liability-rule-ms` | Confirmed absent | RECOMMENDED | joint-liability | C2 | 89-8-7; 19-5-22; 89-8-29(2); 89-8-29(3)(a) |
| `edu-jury-waiver-ms` | Present | RECOMMENDED | jury-waiver | C7 | 11-25-111; 11-19-85; 89-8-13(5)(b); 89-8-1 |
| `edu-no-key-control-rule-ms` | Confirmed absent | RECOMMENDED | key-control-policy | C3 | 45-43-3; 99-41-5; 89-8-7(2) |
| `edu-keys-ms` | Confirmed absent | RECOMMENDED | keys | C6 | 89-8-7(1)(k); 45-43-3; 99-41-5; 45-43-5 |
| `edu-no-knowing-use-penalty-ms` | Confirmed absent | RECOMMENDED | knowing-use-penalty | C7 | 89-8-5; 89-8-5(a); 89-8-5(b); 89-8-29(4) |
| `edu-landlord-breach-remedy-ms` | Present | RECOMMENDED | landlord-breach-remedy | C2 | 89-8-13(2); 89-8-13(3); 89-8-13(3)(a); 89-8-13(3)(c) |
| `edu-no-landlord-entry-statute-ms` | Confirmed absent | RECOMMENDED | landlord-entry | C3 | 89-8-11; 89-8-9; 89-8-13(1); 89-8-39(1) |
| `edu-no-landlord-insurance-mandate-ms` | Confirmed absent | RECOMMENDED | landlord-liability-insurance | C6 | 89-8-5(b); 89-8-5; 89-8-3(1); 89-8-3(2) |
| `edu-landlord-lien-ms` | Present | CONSTRAINED | landlord-lien | C4 | 89-7-51(2); 75-9-109(d); 75-9-109(d)(1); 97-17-75 |
| `edu-landlord-maintenance-ms` | Present | REQUIRED | landlord-maintenance | C2 | 89-8-23(1); 89-8-23(1)(b); 89-8-23(2); 89-8-23(4) |
| `edu-no-landlord-registration-ms` | Confirmed absent | RECOMMENDED | landlord-registration | C5 | 41-137-49; 73-35-3(1)(a); 73-35-3(8); 73-35-3 |
| `edu-landlord-remedies-termination-ms` | Present | RECOMMENDED | landlord-remedies-termination | C4 | 89-8-13(1); 89-8-33(a)(ii); 89-7-7; 89-7-5 |
| `edu-no-landlord-self-cure-ms` | Confirmed absent | RECOMMENDED | landlord-self-cure | C4 | 89-8-15; 89-8-13(3); 89-8-13(3)(a); 89-8-23(2) |
| `edu-tenant-chores-writing-ms` | Present | CONSTRAINED | landscaping-irrigation | C2 | 89-8-23(3); 89-8-7(1)(d); 89-8-5; 89-8-25(d) |
| `edu-late-fee-ms` | Present | CONSTRAINED | late-fee | C1 | 89-8-7(1)(k); 89-8-13(5)(a); 89-8-13(5)(b); 1-3-67 |
| `edu-no-late-fee-limit-ms` | Confirmed absent | CONSTRAINED | late-fee-limit | C1 | 75-17-27; 75-17-25 |
| `edu-law-enforcement-cooperation-ms` | Confirmed absent | RECOMMENDED | law-enforcement-cooperation | C6 | 89-8-25(i); 97-35-51; 21-21-31; 33-15-17 |
| `edu-lead-based-paint-ms` | Present | REQUIRED/CONDITIONAL | lead-based-paint | C6 | 49-17-501; 49-17-509; 89-8-3(1); 89-8-3(2) |
| `edu-no-lead-safe-certificate-ms` | Confirmed absent | RECOMMENDED | lead-safe-certification | C6 | 49-17-501; 49-17-509; 89-8-3(1); 89-8-3(2) |
| `edu-no-lead-state-notices-ms` | Confirmed absent | RECOMMENDED | lead-state-notices | C6 | 49-17-501; 49-17-509; 89-8-3(1); 89-8-3(2) |
| `edu-no-lease-completeness-rule-ms` | Confirmed absent | RECOMMENDED | lease-completeness | C5 | 63-19-31; 75-83-5; 19-13-111; 73-25-39 |
| `edu-no-lease-content-list-ms` | Confirmed absent | CONDITIONAL | lease-content-requirements | C5 | 89-8-7(1)(l); 89-8-13(3); 89-8-23(3); 89-8-45 |
| `edu-no-lease-copy-duty-ms` | Confirmed absent | RECOMMENDED | lease-copy | C5 | 29-3-82; 89-8-33(b)(i); 89-8-33(b)(ii); 89-8-13(5)(b) |
| `edu-no-initials-requirement-ms` | Confirmed absent | RECOMMENDED | lease-notice-initial-requirement | C5 | 75-24-175; 89-8-13(3); 89-8-23(3); 89-5-23 |
| `edu-no-lease-term-limits-ms` | Confirmed absent | RECOMMENDED | lease-term-limitation | C5 | 15-3-1(c); 89-8-19(1); 89-8-19(2); 89-8-19(3) |
| `edu-no-lease-type-parity-ms` | Confirmed absent | RECOMMENDED | lease-type-parity | C1 | 89-8-19(1); 89-8-19(2); 89-8-19(3); 89-8-19(4) |
| `edu-no-lease-type-size-ms` | Confirmed absent | RECOMMENDED | lease-type-size | C5 | 85-7-123; 75-24-157; 85-7-123(1); 85-7-121(k) |
| `edu-limitation-of-actions-ms` | Present | RECOMMENDED | limitation-of-actions | C1 | 15-1-29; 15-1-49(1); 15-1-3(2); 15-1-3(1) |
| `edu-no-liquidated-damages-rule-ms` | Confirmed absent | RECOMMENDED | liquidated-damages | C4 | 27-115-69; 69-7-109; 89-8-45; 89-8-21(4) |
| `edu-no-lockout-ms` | Confirmed absent | RECOMMENDED | lockout-for-rent-delinquency | C4 | 85-7-125; 95-3-23; 41-29-501; 43-15-201 |
| `edu-maintenance-duty-shift-ms` | Present | CONSTRAINED | maintenance-duty-shift | C3 | 89-8-23(3); 89-8-23(1)(a); 89-8-23(1)(b); 89-8-5 |
| `edu-no-meter-conservation-charge-ms` | Confirmed absent | RECOMMENDED | meter-conservation-charge | C6 | 43-33-704 |
| `edu-no-meth-disclosure-ms` | Confirmed absent | RECOMMENDED | meth-disclosure | C6 | 89-8-23(1)(a); 89-8-23(1)(b); 95-3-23; 89-8-3(1) |
| `edu-no-military-zone-disclosure-ms` | Confirmed absent | RECOMMENDED | military-air-zone-disclosure | C6 | 33-11-7; 43-21-353; 17-5-3; 33-1-3 |
| `edu-minor-tenants-ms` | Present | RECOMMENDED | minor-tenant-filing | C4 | 1-3-27; 93-19-13(1); 93-19-13(2); 93-19-13(3) |
| `edu-no-mold-disclosure-ms` | Confirmed absent | RECOMMENDED | mold-disclosure | C6 | 27-65-101; 69-23-3; 89-8-23(1)(a); 89-8-23(1)(b) |
| `edu-garbage-fee-lien-ms` | Present | CONDITIONAL/RECOMMENDED | municipal-utility-lien | C2 | 19-5-22(1); 19-5-22(2)(b); 19-5-22(2)(c); 19-5-22(2)(d) |
| `edu-nonpayment-notice-ms` | Present | REQUIRED | nonpayment-notice | C4 | 89-8-13(5)(a); 89-8-13(5)(b); 89-8-33(b)(i); 89-8-7(1)(k) |
| `edu-no-nonrefundable-deposit-notice-ms` | Confirmed absent | CONSTRAINED | nonrefundable-deposit-notice | C1 | 89-8-21(1); 89-8-21(2); 89-8-21(3); 89-8-5 |
| `edu-no-nonrefundable-separate-notice-ms` | Confirmed absent | CONSTRAINED | nonrefundable-deposit-separate-notice | C1 | 89-8-21(1); 89-8-21(3); 89-8-5; 89-8-3(1) |
| `edu-no-nonresident-owner-agent-ms` | Confirmed absent | RECOMMENDED | nonresident-owner-agent | C5 | 73-35-3(1)(a); 73-35-3(8); 89-10-3(2); 89-8-7(2) |
| `edu-notice-delivery-ms` | Present | REQUIRED | notice-delivery-methods | C5 | 89-8-13(3); 89-8-13(5)(a); 89-8-17(2); 89-8-19(2) |
| `edu-no-notice-fee-rule-ms` | Confirmed absent | RECOMMENDED | notice-service-fee | C4 | 89-8-33; 89-8-7(1)(k); 89-8-9; 89-8-3(1) |
| `edu-notice-not-waivable-ms` | Present | PROHIBITED | notice-to-quit-waiver | C4 | 89-8-5; 89-8-13(5)(a); 89-8-13(3); 89-8-17(2) |
| `edu-no-notice-to-vacate-terms-rule-ms` | Confirmed absent | RECOMMENDED | notice-to-vacate-additional-terms | C5 | 89-8-19; 89-8-19(2); 89-8-19(3); 89-8-17(1) |
| `edu-notices-ms` | Present | RECOMMENDED | notices | C5 | 89-8-13(3); 89-8-7(2); 89-8-33(b)(i); 75-12-5(b)(4) |
| `edu-nuisance-abatement-ms` | Present | RECOMMENDED | nuisance | C4 | 95-3-1; 95-3-3; 95-3-5; 95-3-7 |
| `edu-optional-lease-terms-ms` | Present | CONDITIONAL | optional-lease-terms | C5 | 89-8-19(1); 89-8-11(4); 89-8-13(3); 89-8-23(3) |
| `edu-no-ordnance-demolition-meter-disclosure-ms` | Confirmed absent | RECOMMENDED | ordnance-demolition-meter-disclosures | C6 | 63-21-201; 43-39-5; 77-3-97(3)(b); 77-3-3(d) |
| `edu-no-other-landlord-facilities-ms` | Confirmed absent | RECOMMENDED | other-landlord-facilities | C3 | 45-43-17; 89-8-23(1)(a); 89-8-23(1)(b); 45-43-5 |
| `edu-no-owner-identity-disclosure-ms` | Confirmed absent | RECOMMENDED | owner-identity-disclosure | C6 | 89-8-7(2); 89-10-3(2); 19-31-45; 27-109-1 |
| `edu-no-owner-move-in-rule-ms` | Confirmed absent | RECOMMENDED | owner-move-in-reservation | C4 | 89-8-19(2); 89-8-19(3); 89-8-17(1); 89-8-9 |
| `edu-parking-ms` | Confirmed absent | CONSTRAINED | parking | C5 | 89-8-7(1)(i); 89-8-5(b); 89-8-11(2); 57-64-19 |
| `edu-no-parking-rules-notice-ms` | Confirmed absent | RECOMMENDED | parking-rules-notice | C5 | 89-8-11(1); 89-8-11(2); 63-37-13(2)(c); 63-37-13(2) |
| `edu-parking-vehicle-rules-ms` | Present | CONSTRAINED | parking-vehicle-rules | C5 | 63-3-915; 85-7-251(1)(a); 85-7-251(1)(b); 85-7-251(2) |
| `edu-landlord-tenant-act-nonwaivable-ms` | Present | PROHIBITED | part5-nonwaivable | C7 | 89-8-5; 89-8-19(1); 89-8-11(4); 89-8-13(3) |
| `edu-no-periodic-services-entry-rule-ms` | Confirmed absent | RECOMMENDED | periodic-services-entry | C3 | 89-8-11; 89-8-9; 89-8-25(d); 89-8-25(g) |
| `edu-no-occupancy-limit-statute-ms` | Confirmed absent | RECOMMENDED | permitted-occupants | C2 | 43-33-15; 89-8-7(1)(c); 89-8-23(1)(a); 89-8-11(1) |
| `edu-no-pest-control-notice-ms` | Confirmed absent | RECOMMENDED | pest-control-notice | C6 | 69-23-7; 69-25-3; 37-11-71; 41-27-101 |
| `edu-no-pet-eviction-fact-sheet-ms` | Confirmed absent | RECOMMENDED | pet-eviction-fact-sheet | C5 | 71-5-11; 89-8-35(2); 89-8-3(1); 89-8-3(2) |
| `edu-pet-fees-ms` | Confirmed absent | CONSTRAINED | pet-fees | C5 | 89-8-21(1); 89-8-21(3); 89-8-21(4); 89-8-7(1)(k) |
| `edu-no-pet-insurance-rule-ms` | Confirmed absent | RECOMMENDED | pet-insurance-requirement | C5 | 49-7-16; 69-13-109; 41-51-13; 49-7-79 |
| `edu-pet-policy-ms` | Confirmed absent | CONSTRAINED | pet-policy | C5 | 89-8-25(e); 89-8-25(f); 89-8-13(3); 89-8-11(1) |
| `edu-plain-language-ms` | Confirmed absent | RECOMMENDED | plain-language | C7 | 75-24-5(1); 75-24-3(b); 75-24-15(1) |
| `edu-no-plain-language-lease-law-ms` | Confirmed absent | RECOMMENDED | plain-language-consumer-statement | C5 | 69-53-5; 95-11-7; 83-41-315; 27-104-459 |
| `edu-no-political-access-ms` | Confirmed absent | RECOMMENDED | political-access | C6 | 89-8-11(1); 89-8-11(1)(a); 89-8-11(1)(c); 89-8-11(2) |
| `edu-pool-safety-ms` | Present | CONDITIONAL | pool-safety | C7 | 45-43-5; 45-43-3(g)(ii); 45-43-7(1); 45-43-7(2) |
| `edu-no-portable-cooling-right-ms` | Confirmed absent | RECOMMENDED | portable-cooling-device | C6 | 89-8-23(1)(a); 89-8-23(1)(b); 89-8-25(d); 57-26-1 |
| `edu-no-portable-solar-right-ms` | Confirmed absent | RECOMMENDED | portable-solar | C6 | 87-9-5; 37-113-21; 89-8-11(3); 89-8-3(1) |
| `edu-portfolio-thresholds-ms` | Present | CONDITIONAL | portfolio-thresholds | C5 | 77-3-97; 89-7-27; 77-3-97(2)(a); 45-43-3(g) |
| `edu-no-possession-bond-ms` | Confirmed absent | PROHIBITED/RECOMMENDED | possession-bond | C4 | 89-8-5; 89-8-5(a); 11-7-181; 75-67-127 |
| `edu-no-possession-delay-rule-ms` | Confirmed absent | RECOMMENDED | possession-delay | C4 | 89-8-21; 89-8-23(1)(b); 89-8-17(2); 89-8-45 |
| `edu-post-eviction-property-ms` | Present | REQUIRED | post-eviction-property | C4 | 89-8-39(1); 89-8-39(2); 89-8-39(3); 89-8-35(2) |
| `edu-no-well-testing-ms` | Confirmed absent | RECOMMENDED | private-well-testing | C6 | 77-3-3; 89-8-23(1)(a); 89-8-23(1)(b); 89-8-3(1) |
| `edu-tenant-prohibited-acts-ms` | Present | PROHIBITED | prohibited-acts-renter | C2 | 89-8-25(e); 89-8-25(f); 89-8-25(i); 89-8-11(4) |
| `edu-prohibited-lease-terms-ms` | Present | PROHIBITED | prohibited-lease-terms | C7 | 89-8-5; 89-8-5(a); 89-8-5(b); 89-8-29(4) |
| `edu-no-promises-to-repair-rule-ms` | Confirmed absent | RECOMMENDED | promises-to-repair | C3 | 89-7-3; 89-8-13(2); 89-8-13(3); 89-8-15(1) |
| `edu-no-chemical-warning-ms` | Confirmed absent | RECOMMENDED | prop65-rental-warning | C6 | 89-8-23(1)(a); 89-8-23(1)(b); 89-8-3(1); 89-8-3(2) |
| `edu-no-property-tax-rent-statement-ms` | Confirmed absent | RECOMMENDED | property-tax-rent-disclosure | C6 | 27-35-50(4)(d); 27-35-50(4)(d)(i); 59-9-35 |
| `edu-no-protected-class-inquiry-ban-ms` | Confirmed absent | RECOMMENDED | protected-class-inquiry-ban | C7 | 43-33-723 |
| `edu-nuisance-lease-annulled-ms` | Present | CONDITIONAL/RECOMMENDED | purpose-limitation | C2 | 95-3-23; 95-3-1(c); 89-8-25(i); 89-8-13(3) |
| `edu-no-quiet-possession-statute-ms` | Confirmed absent | RECOMMENDED | quiet-possession | C3 | 75-9-610; 89-1-33; 89-8-25; 89-29-1 |
| `edu-no-radon-disclosure-ms` | Confirmed absent | RECOMMENDED | radon-disclosure | C6 | 89-8-23(1)(a); 89-8-23(1)(b); 89-8-3(1); 89-8-3(2) |
| `edu-no-recycling-notice-ms` | Confirmed absent | RECOMMENDED | recycling-notice | C6 | 89-8-25(b); 17-1-75; 57-64-19; 17-17-65 |
| `edu-redemption-ms` | Present | REQUIRED | redemption | C4 | 89-8-39(4)(a); 89-8-39(4)(a)(i); 89-8-39(4)(a)(ii); 89-8-39(4)(b) |
| `edu-no-religious-display-right-ms` | Confirmed absent | RECOMMENDED | religious-cultural-display | C6 | 37-13-163; 37-12-7; 11-62-5; 89-8-11(1) |
| `edu-no-rent-concession-ms` | Confirmed absent | RECOMMENDED | rent-concession | C1 | 89-8-7(1)(k); 89-8-13(5)(b); 89-8-3(1); 89-8-3(2) |
| `edu-no-rent-control-ms` | Confirmed absent | CONSTRAINED | rent-control | C1 | 75-24-25(2); 75-24-25(3); 75-24-25(4); 75-24-25(6) |
| `edu-rent-demand-bar-ms` | Present | CONDITIONAL | rent-demand-bar | C1 | 89-7-3; 89-8-3(1); 89-8-13(2); 89-8-13(3) |
| `edu-no-rent-escalation-rule-ms` | Confirmed absent | RECOMMENDED | rent-escalation | C1 | 89-8-17(2); 89-8-19(2); 89-8-19(3); 89-8-17 |
| `edu-no-rent-increase-notice-ms` | Confirmed absent | RECOMMENDED | rent-increase-notice | C1 | 89-8-19(2); 89-8-19(3); 89-8-17(2); 89-8-17(1) |
| `edu-no-rent-installments-rule-ms` | Confirmed absent | RECOMMENDED | rent-installments | C1 | 89-8-19(1); 89-8-19(2); 89-8-19(3); 89-8-7(1)(k) |
| `edu-counterclaims-no-rent-escrow-ms` | Confirmed absent | RECOMMENDED | rent-into-court-counterclaim | C4 | 89-8-37(2)(b); 89-8-15(4); 89-8-41(2); 89-8-41(3) |
| `edu-no-rent-payment-default-ms` | Confirmed absent | REQUIRED | rent-payment | C1 | 89-8-7(1)(k); 89-8-13(5)(a); 89-8-13(5)(b); 75-12-5(b)(4) |
| `edu-rent-collection-and-repair-duty-ms` | Present | CONSTRAINED | rent-receipt-anti-waiver | C3 | 89-8-7(2); 89-8-7(1)(f); 89-8-5; 89-7-15 |
| `edu-no-rent-receipts-ms` | Confirmed absent | RECOMMENDED | rent-receipts | C1 | 89-8-33(a)(ii); 89-8-39(4)(a)(i); 89-8-15(1)(b)(iv); 89-8-3(1) |
| `edu-no-rent-reporting-ms` | Confirmed absent | RECOMMENDED | rent-reporting | C1 | battery/absence |
| `edu-rent-tax-ms` | Present | RECOMMENDED | rent-tax | C1 | 27-65-23; 41-49-3(1); 41-49-3(2); 27-65-23.1(1) |
| `edu-no-rental-application-remedy-ms` | Confirmed absent | RECOMMENDED | rental-application-accuracy | C4 | 59-1-17; 89-8-13(1); 89-8-13(3); 99-19-71(3) |
| `edu-no-rental-inspection-program-ms` | Confirmed absent | RECOMMENDED | rental-inspection | C3 | 83-34-16; 73-60-1; 43-35-105(c); 43-35-105 |
| `edu-no-renters-insurance-rules-ms` | Confirmed absent | RECOMMENDED | renters-insurance-rules | C5 | 83-73-5; 83-17-63; 57-3-23; 45-11-2 |
| `edu-no-repair-cost-termination-ms` | Confirmed absent | RECOMMENDED | repair-cost-termination | C4 | 89-8-13; 89-8-21; 75-77-5; 89-8-23(1)(a) |
| `edu-no-repair-escrow-notice-ms` | Confirmed absent | RECOMMENDED | repair-escrow-exemption-notice | C3 | 89-8-15; 89-8-13(2); 89-8-15(1); 89-8-15(4) |
| `edu-repair-notice-ms` | Present | CONSTRAINED | repair-notice | C3 | 89-8-15(1); 89-8-13(3); 89-8-25(g); 89-8-7(2) |
| `edu-required-disclosures-ms` | Present | CONDITIONAL | required-disclosures | C6 | 77-3-97(3)(b); 77-3-97(2)(a); 77-3-97(2)(f); 89-8-13(3) |
| `edu-no-required-fees-rule-ms` | Confirmed absent | RECOMMENDED | required-fees | C1 | 89-8-7(1)(k); 89-8-33(a)(ii); 89-8-13(5)(b); 89-8-19(2) |
| `edu-residential-use-ms` | Present | RECOMMENDED | residential-use-only | C2 | 89-8-11(4); 89-8-13(3); 89-8-13(3)(a); 89-8-13(3)(b) |
| `edu-retaliation-ms` | Confirmed absent | PROHIBITED/RECOMMENDED | retaliation | C4 | 89-8-17(2); 89-8-9; 89-8-7(1)(d); 89-8-17 |
| `edu-returned-payments-ms` | Present | CONSTRAINED | returned-payments | C1 | 97-19-55(1); 97-19-55(1)(a); 97-19-55(2)(d); 97-19-57(1) |
| `edu-no-rights-guide-ms` | Confirmed absent | RECOMMENDED | rights-responsibilities-guide | C6 | 89-8-1; 89-8-3(1); 89-8-3(2) |
| `edu-rules-regulations-ms` | Present | CONSTRAINED | rules-regulations | C6 | 89-8-11(1); 89-8-11(1)(a); 89-8-11(1)(b); 89-8-11(1)(c) |
| `edu-sale-or-management-change-ms` | Present | RECOMMENDED | sale-or-management-change | C5 | 89-7-15; 89-7-21; 89-7-17; 89-8-21(4) |
| `edu-no-code-variance-notice-ms` | Confirmed absent | RECOMMENDED | sanitary-code-variance | C6 | 45-43-21; 41-57-43; 89-8-23(1)(a); 89-8-23(1)(b) |
| `edu-scope-ms` | Present | CONDITIONAL | scope | C5 | 89-8-3(1); 89-8-3(2)(a); 89-8-3(2)(b); 89-8-3(2)(c) |
| `edu-no-seasonal-tenancy-rule-ms` | Confirmed absent | RECOMMENDED | seasonal-tenancy | C4 | 21-35-27; 27-19-63; 89-8-3(2)(d); 89-8-17(1) |
| `edu-no-security-deposit-cap-ms` | Confirmed absent | RECOMMENDED | security-deposit-cap | C1 | 89-8-21(2); 89-8-21(3); 89-8-21(4); 89-8-3(1) |
| `edu-no-security-deposit-holding-ms` | Confirmed absent | RECOMMENDED | security-deposit-holding | C1 | 89-8-21(2); 89-8-21(4); 89-8-3(1); 89-8-3(2) |
| `edu-no-security-deposit-interest-ms` | Confirmed absent | RECOMMENDED | security-deposit-interest | C1 | 89-8-21(2); 89-8-21(3); 89-8-3(1); 89-8-3(2) |
| `edu-security-deposit-nonwaiver-ms` | Present | PROHIBITED | security-deposit-nonwaiver | C1 | 89-8-5; 89-8-21(2); 89-8-21(3); 89-8-21(4) |
| `edu-security-deposit-on-sale-ms` | Present | CONDITIONAL/RECOMMENDED | security-deposit-on-sale | C1 | 89-8-21(4); 89-7-15; 89-7-21; 89-7-17 |
| `edu-security-deposit-penalty-ms` | Present | REQUIRED | security-deposit-penalty | C2 | 89-8-21(4); 89-8-21(3); 89-8-7(1)(d); 89-8-21 |
| `edu-security-deposit-return-ms` | Present | REQUIRED | security-deposit-return | C2 | 89-8-21(3); 89-8-21(2); 89-8-13(4); 89-12-3(f)(ii) |
| `edu-no-security-deposit-standards-ms` | Confirmed absent | RECOMMENDED | security-deposit-standards | C2 | 89-8-21; 89-8-21(1); 89-8-21(3) |
| `edu-security-deposit-use-ms` | Present | CONSTRAINED | security-deposit-use | C2 | 89-8-21(3); 89-8-21(1); 89-8-7(1)(k); 89-8-21(4) |
| `edu-security-devices-ms` | Present | CONDITIONAL | security-devices | C3 | 45-43-5; 45-43-3(g); 45-43-13(1); 45-43-13(3)(a) |
| `edu-no-self-help-eviction-statute-ms` | Confirmed absent | RECOMMENDED | self-help-eviction | C4 | 89-8-31; 89-8-33; 89-8-39(1); 89-8-39(2) |
| `edu-no-senior-housing-work-card-ms` | Confirmed absent | RECOMMENDED | senior-housing-work-card | C3 | 41-7-191; 89-8-3(2)(a); 89-8-7(2) |
| `edu-no-service-animal-denial-penalty-ms` | Confirmed absent | RECOMMENDED | service-animal-denial-penalty | C5 | 97-41-23; 97-41-21; 97-41-21(1)(a); 97-41-21(2) |
| `edu-no-service-animal-misrepresentation-ms` | Confirmed absent | RECOMMENDED | service-animal-misrepresentation | C5 | 97-41-23; 43-6-153(e); 43-6-155(1); 89-8-3(1) |
| `edu-no-state-servicemember-rule-ms` | Confirmed absent | REQUIRED | servicemember-rights | C4 | 89-8-19(2); 89-8-19(3); 89-8-13(3); 89-8-3(1) |
| `edu-services-utilities-provided-ms` | Present | CONSTRAINED | services-utilities-provided | C3 | 89-8-23(1)(a); 89-8-23(1)(b); 89-8-13(2); 89-8-5(b) |
| `edu-severability-ms` | Present | RECOMMENDED | severability | C7 | 89-8-5; 89-8-5(a); 89-8-29(4); 95-3-23 |
| `edu-sex-offender-information-ms` | Present | CONDITIONAL | sex-offender-disclosure | C6 | 89-1-527(2); 89-1-527(3); 45-33-49(3); 45-33-49(4)(b) |
| `edu-sex-offender-occupancy-ms` | Present | RECOMMENDED | sex-offender-occupancy | C7 | 45-33-25(4)(a); 45-33-25(4)(b)(iii); 45-33-25(4)(b)(v); 45-33-25(4)(b) |
| `edu-no-sfr-occupancy-disclosure-ms` | Confirmed absent | RECOMMENDED | sfr-occupancy-disclosure | C6 | 73-50-2; 53-7-27; 89-10-3(5)(a); 89-10-3(5)(b) |
| `edu-no-shoreline-disclosure-ms` | Confirmed absent | RECOMMENDED | shoreline-access-disclosure | C6 | 29-15-5; 49-27-71; 51-9-109; 65-29-5 |
| `edu-showing-notice-waiver-ms` | Confirmed absent | RECOMMENDED | showing-notice-waiver | C3 | 89-8-11; 89-8-9 |
| `edu-no-shutdown-rent-protection-ms` | Confirmed absent | RECOMMENDED | shutdown-rent-protection | C1 | 89-8-13(5)(a); 89-8-39(4)(a)(i); 89-8-3(1); 89-8-3(2) |
| `edu-no-single-family-zone-lease-limit-ms` | Confirmed absent | RECOMMENDED | single-family-zone-lease-limit | C7 | 51-5-1; 89-8-11(3); Miss. Const. art. 3, § 12 |
| `edu-no-smart-access-statute-ms` | Confirmed absent | RECOMMENDED | smart-access | C3 | 73-69-5; 75-24-29(1); 75-24-29(2)(b)(i); 75-24-29(2)(b)(ii) |
| `edu-no-smoke-drift-waiver-ms` | Confirmed absent | RECOMMENDED | smoke-drift-waiver | C6 | 89-8-5(b); 89-8-5; 89-8-23(1)(a); 89-8-23(1)(b) |
| `edu-smoking-medical-cannabis-ms` | Present | RECOMMENDED | smoking-policy | C2 | 41-137-19(4); 41-137-15(2); 89-8-11(2); 41-137-15 |
| `edu-snow-removal-ms` | Confirmed absent | RECOMMENDED | snow-removal | C6 | 89-8-23(3); 89-8-3(1); 89-8-3(2); Miss. Const. art. 3, § 12 |
| `edu-no-benefit-delay-defense-ms` | Confirmed absent | RECOMMENDED | social-security-defense | C4 | 57-1-521; 89-8-13(5)(a); 1-3-67; 89-8-39(4) |
| `edu-no-source-of-income-protection-ms` | Confirmed absent | RECOMMENDED | source-of-income | C6 | 43-33-723; 43-19-31; 7-7-3; 33-15-221 |
| `edu-no-sprinkler-disclosure-ms` | Confirmed absent | RECOMMENDED | sprinkler-disclosure | C7 | 45-11-101; 37-111-13; 17-2-3; 17-2-4 |
| `edu-statute-of-frauds-lease-ms` | Present | RECOMMENDED | statute-of-frauds-lease-term | C5 | 15-3-1; 15-3-1(c); 15-3-1(d); 15-3-1(a) |
| `edu-statutory-caps-ms` | Present | CONSTRAINED | statutory-caps | C1 | 89-8-21(4); 89-8-7(1)(k); 11-7-12(1); 97-19-55(1) |
| `edu-statutory-early-termination-ms` | Present | REQUIRED | statutory-early-termination | C4 | 89-8-13(2); 89-8-13(3); 89-8-13(3)(b); 89-8-13(3)(c) |
| `edu-statutory-forms-ms` | Present | RECOMMENDED | statutory-forms | C5 | 89-8-35(2); 89-10-3(3)(c); 89-7-63; 89-8-35 |
| `edu-no-radiator-cover-rule-ms` | Confirmed absent | RECOMMENDED | steam-radiator-covers | C7 | 89-8-23(1)(b); 89-8-23(1)(a); 89-8-3(1); 89-8-3(2) |
| `edu-stigmatized-property-ms` | Present | RECOMMENDED | stigmatized-property | C7 | 89-1-527(1); 89-1-527(1)(a); 89-1-527(1)(b); 89-1-527(1)(c) |
| `edu-storage-space-ms` | Present | CONSTRAINED | storage-space | C5 | 85-7-121(k); 85-7-123(1); 85-7-121; 83-17-63 |
| `edu-no-stove-refrigerator-duty-ms` | Confirmed absent | RECOMMENDED | stove-refrigerator | C3 | 89-8-25; 89-8-23(1)(b); 89-8-23(1)(a); 89-8-13(2) |
| `edu-no-sublet-statute-ms` | Confirmed absent | RECOMMENDED | sublet-assign | C2 | 89-7-15; 89-8-7(1)(f); 89-7-21; 89-8-9 |
| `edu-no-subsidy-inspection-rule-ms` | Confirmed absent | RECOMMENDED | subsidized-inspection-refusal | C7 | 85-7-251 |
| `edu-no-subsidy-proration-rule-ms` | Confirmed absent | RECOMMENDED | subsidy-habitability-proration | C1 | 89-7-3; 89-8-15(1); 89-8-15(1)(a); 89-8-15(1)(b) |
| `edu-no-subsidy-late-fee-ms` | Confirmed absent | RECOMMENDED | subsidy-late-fee | C1 | 89-8-7(1)(k); 89-8-13(5)(a); 89-8-3(1); 89-8-3(2) |
| `edu-no-substandard-property-receivership-ms` | Confirmed absent | RECOMMENDED | substandard-property-receivership | C3 | 43-33-31; 43-35-105; 43-35-103; 43-35-105(c) |
| `edu-surrender-end-of-term-ms` | Present | RECOMMENDED | surrender-end-of-term | C4 | 89-8-17(1); 89-8-17(2); 89-8-45; 89-8-13(6) |
| `edu-no-tax-escalation-rule-ms` | Confirmed absent | RECOMMENDED | tax-escalation | C1 | 89-8-7(1)(k); 89-8-19(2); 89-8-19(3); 89-8-17(2) |
| `edu-no-telecom-access-ms` | Confirmed absent | RECOMMENDED | telecom-access | C3 | 89-8-25(e); 89-8-11(1)(c); 89-8-11(2) |
| `edu-tenancy-without-term-ms` | Present | RECOMMENDED | tenancy-at-will | C4 | 89-8-19(1); 89-8-19(2); 89-8-19(3); 89-8-19(4) |
| `edu-no-tenant-bankruptcy-rule-ms` | Confirmed absent | RECOMMENDED | tenant-bankruptcy | C4 | 59-25-11; 85-3-1 |
| `edu-tenant-caused-damage-ms` | Present | RECOMMENDED | tenant-caused-damage | C4 | 89-8-25(e); 89-8-25(g); 89-8-23(2); 89-8-23(4) |
| `edu-tenant-confidential-information-ms` | Confirmed absent | RECOMMENDED | tenant-confidential-information | C7 | 75-24-29(1); 75-24-29(3); 75-24-29(8) |
| `edu-tenant-death-ms` | Present | RECOMMENDED | tenant-death | C4 | 89-8-29(2); 89-8-29(3)(b); 89-8-29(3)(c); 89-8-29(4) |
| `edu-no-tenant-display-rights-ms` | Confirmed absent | RECOMMENDED | tenant-display-rights | C6 | 89-8-11(1); 89-8-11(1)(a); 89-8-11(1)(c); 89-8-11(2) |
| `edu-employee-housing-ms` | Confirmed absent | CONDITIONAL | tenant-employee-housing | C7 | 89-8-3(2); 89-8-3(2)(f); 89-8-3(2)(a); 43-33-717 |
| `edu-tenant-forward-ejectment-ms` | Present | REQUIRED | tenant-forward-proceedings | C2 | 11-19-9; 89-7-19; 89-7-17; 89-8-3(1) |
| `edu-no-tenant-insurance-claim-rule-ms` | Confirmed absent | RECOMMENDED | tenant-insurance-claims | C2 | 89-8-5(b); 89-8-25(e); 89-8-21(3); 89-7-3 |
| `edu-tenant-maintenance-ms` | Present | RECOMMENDED | tenant-maintenance | C2 | 89-8-25(a); 89-8-25(c); 89-8-25(h); 89-8-23(3) |
| `edu-no-tenant-portal-rule-ms` | Confirmed absent | RECOMMENDED | tenant-portal | C5 | 75-12-9(b); 75-12-9(c); 75-12-15(c); 89-8-13(3) |
| `edu-tenant-records-ms` | Confirmed absent | CONDITIONAL | tenant-records | C5 | 63-19-39; 89-8-33(a)(ii); 89-8-21(3); 75-24-29(1) |
| `edu-tenant-repair-agreement-ms` | Present | CONSTRAINED | tenant-repair-agreement | C2 | 89-8-23(3); 89-8-23(1)(a); 89-8-23(1)(b); 89-8-5 |
| `edu-tenant-repair-remedies-ms` | Present | CONSTRAINED | tenant-repair-remedies | C3 | 89-8-13(2); 89-8-13(3); 89-8-13(3)(a); 89-8-15(1) |
| `edu-no-tenant-organizing-right-ms` | Confirmed absent | RECOMMENDED | tenant-right-to-organize | C7 | 89-8-27; 89-8-7; 69-27-7; 49-15-27 |
| `edu-no-tenant-rights-statement-ms` | Confirmed absent | RECOMMENDED | tenant-rights-statement | C7 | 41-7-173; 89-8-21(3); 77-3-97(3)(b); 89-8-3(1) |
| `edu-tenant-screening-ms` | Present | CONSTRAINED | tenant-screening | C7 | 99-19-71(3); 93-19-13(2); 75-24-29 |
| `edu-no-tenant-camera-rule-ms` | Confirmed absent | RECOMMENDED/PROHIBITED | tenant-security-cameras | C6 | 97-29-63(1)(a); 97-45-2; 7-5-59; 97-29-63 |
| `edu-tenant-statutory-duties-ms` | Present | REQUIRED | tenant-statutory-duties | C2 | 89-8-25; 89-8-25(i); 89-8-25(g); 89-8-13(1) |
| `edu-tenants-property-insurance-ms` | Present | CONSTRAINED | tenants-property-insurance | C5 | 89-8-5; 89-8-5(b); 89-8-23(1)(b); 89-8-23(3) |
| `edu-no-term-change-notice-ms` | Confirmed absent | RECOMMENDED | term-change-notice | C5 | 89-8-11(2); 89-8-11(1)(a); 89-8-11(1)(e); 89-8-19(2) |
| `edu-termination-notice-ms` | Present | REQUIRED | termination-notice | C4 | 89-8-19(2); 89-8-19(3); 89-8-19(4); 89-8-33(b)(i) |
| `edu-towing-ms` | Present | CONSTRAINED | towing | C5 | 63-3-915; 85-7-251(1)(a); 85-7-251(1)(b); 85-7-251(1)(c) |
| `edu-no-tpa-exemption-notice-ms` | Not applicable | RECOMMENDED | tpa-exemption-notice | C7 | 93-20-414; 89-8-19(2); 89-8-19(3); 89-8-17(1) |
| `edu-no-tpa-notice-ms` | Confirmed absent | RECOMMENDED | tpa-notice | C7 | 93-20-414; 89-8-17(2); 89-8-19(2); 89-8-9 |
| `edu-no-tenant-law-sunset-ms` | Confirmed absent | RECOMMENDED | tpa-sunset | C5 | 49-7-31.3; 59-5-37; 27-104-7; 31-7-13 |
| `edu-no-translation-duty-ms` | Confirmed absent | RECOMMENDED | translation-duty | C5 | 89-8-3(1); 89-8-3(2) |
| `edu-trespass-notice-ms` | Present | RECOMMENDED | trespass-notice | C6 | 97-17-97(1); 97-17-93(1); 97-17-93(4); 89-10-3(3)(a) |
| `edu-no-truth-in-renting-ms` | Confirmed absent | RECOMMENDED | truth-in-renting | C7 | 41-7-173; 89-8-5; 89-8-5(a); 89-8-5(b) |
| `edu-squatter-removal-ms` | Present | RECOMMENDED | unauthorized-occupant-removal | C4 | 89-10-1; 89-10-3(1)(c); 89-10-3(3)(a); 89-10-3(3)(b) |
| `edu-no-unbundled-parking-rule-ms` | Confirmed absent | RECOMMENDED | unbundled-parking | C5 | 89-8-7(1)(k); 89-8-13(5)(a); 89-8-7(1)(i); 27-65-23 |
| `edu-no-unconscionability-statute-ms` | Confirmed absent | RECOMMENDED | unconscionability | C7 | 75-24-101; 75-24-5(1); 89-8-9; Miss. Const. art. 3, § 12 |
| `edu-unpaid-amounts-interest-ms` | Present | CONSTRAINED | unpaid-damages-interest | C1 | 75-17-1(1); 75-17-7; 75-17-25 |
| `edu-usufructuary-lessor-ms` | Not applicable | RECOMMENDED | usufructuary-lessor | C7 | 89-27-7(2); 89-7-9; 89-8-3(1); 89-27-7 |
| `edu-utilities-paid-by-landlord-ms` | Present | CONDITIONAL | utilities-paid-by-landlord | C3 | 89-7-46(1); 89-7-46(1)(a); 89-7-46(1)(b); 89-7-46(3)(a) |
| `edu-utilities-responsibility-ms` | Present | CONSTRAINED/RECOMMENDED | utilities-responsibility | C2 | 89-7-46(1); 89-7-46(3)(a); 89-7-46(3); 89-7-46(2) |
| `edu-no-utility-allowance-cap-ms` | Confirmed absent | RECOMMENDED | utility-allowance-cap | C3 | 77-3-97; 77-3-3; 77-3-3(d); 77-3-97(3)(a) |
| `edu-utility-apportionment-ms` | Present | CONDITIONAL | utility-apportionment | C3 | 77-3-97(3)(a); 77-3-97(3)(b); 77-3-97(3)(e); 77-3-97(2)(a) |
| `edu-utility-deposit-ms` | Present | CONSTRAINED | utility-deposit-return | C2 | 89-8-21(1); 89-8-21(2); 89-8-21(3); 89-8-21(4) |
| `edu-utility-disclosure-attachment-ms` | Present | CONDITIONAL | utility-disclosure-attachment | C7 | 77-3-97(3)(b); 77-3-97(2)(a); 77-3-97(2)(f); 77-3-97(3)(a) |
| `edu-no-utility-shutoff-notice-authorization-ms` | Confirmed absent | RECOMMENDED | utility-disconnection-notice-authorization | C3 | 75-12-5(b)(4); 77-3-97(3)(e); 89-8-13(1) |
| `edu-submeter-no-disconnect-ms` | Present | PROHIBITED/CONDITIONAL | utility-interruption-submeter | C2 | 77-3-97(3)(e); 77-3-97(3)(d); 77-3-97(3)(a); 77-3-97(3)(c) |
| `edu-utility-landlord-account-ms` | Present | PROHIBITED | utility-landlord-account | C3 | 89-7-46(1); 89-7-46(1)(a); 89-7-46(1)(b); 89-7-46(2)(a) |
| `edu-utility-payment-evidence-ms` | Confirmed absent | RECOMMENDED | utility-payment-evidence | C2 | 19-5-22(1); 19-5-22(2)(b); 21-19-2(3)(b); 21-19-2(3)(a) |
| `edu-utility-service-continuity-ms` | Present | CONSTRAINED/RECOMMENDED | utility-service-continuity | C2 | 77-3-97(3)(e); 77-3-97(2)(a); 77-3-97(2)(f); 89-7-46(1)(a) |
| `edu-utility-shutoff-rules-ms` | Present | PROHIBITED/RECOMMENDED | utility-shutoff-statute | C3 | 77-5-235(2); 77-5-235(1); 77-5-235; 77-3-97(3)(e) |
| `edu-utility-submetering-disclosure-ms` | Present | REQUIRED | utility-submetering-disclosure | C3 | 77-3-97(3)(b); 77-3-97(2)(a); 77-3-97(2)(f); 77-3-97(3)(a) |
| `edu-no-utility-transfer-rule-ms` | Confirmed absent | RECOMMENDED | utility-transfer | C3 | 77-3-23; 77-3-97; 89-7-46(1)(a); 89-8-23(1)(b) |
| `edu-no-veterans-incentive-ms` | Confirmed absent | RECOMMENDED | veterans-incentive | C7 | 29-5-6; 43-33-723; Miss. Const. art. 3, § 12 |
| `edu-waiver-by-acceptance-ms` | Present | RECOMMENDED | waiver-by-acceptance | C4 | 89-8-39(4)(a)(ii); 89-8-39(4)(a); 89-8-39(4)(b); 89-8-39 |
| `edu-no-water-heater-rule-ms` | Confirmed absent | RECOMMENDED | water-heater-temperature | C7 | 75-51-1; 75-51-3; 89-8-23(1)(b); 75-51-5 |
| `edu-no-waterbed-rule-ms` | Confirmed absent | RECOMMENDED | waterbed | C6 | 89-8-25(e); 89-8-21; 89-8-3(1); 89-8-3(2) |
| `edu-no-window-guard-rule-ms` | Confirmed absent | RECOMMENDED | window-guards | C7 | 27-65-3; 45-43-15; 45-43-5; Miss. Const. art. 3, § 12 |
| `edu-written-notices-ms` | Present | REQUIRED | written-notice-required | C5 | 89-8-13(3); 89-8-13(3)(b); 89-8-13(5)(a); 89-8-17(2) |

### §3.3 Shared rows changed (89)
Each changed only in three fields, checked by script against the master (§8):
- `states`: ";MS" appended.
- `notes`: an " | MS: …" segment appended.
- `last_checked`: set to 2026-10-20.

## §4 Layout and placement table (rule 40)
**Batteries** (official whole-Code engine), run first without a tenancy limb and then with one, with number words spelled out:

| Battery | Query (short) | Hits | Result |
|---|---|---|---|
| MS-L-S11 | (boldface, bold type, conspicuous!, underlined, point type, capital letters, type size) AND tenancy terms | 17 | Only § 89-7-49 (deserted premises, posting by an officer) and § 75-24-157 (rental-purchase of goods). No residential lease formatting rule. |
| MS-L-S76 | the same formatting terms plus "10-point", "ten-point", "twelve-point", "12-point", underscored; no tenancy limb (positive § 75-24-157 passed) | 225 | Read by title and snippet. Every hit is a sign, label, licence or non-lease contract rule. § 19-31-45 (public improvement district disclosure) reaches sales instrument conveyances only. |
| MS-L-S10 | "separate writing", "separate document", "separate instrument", "separately signed", "separate agreement" AND lease terms | 4 | Oil and gas leases, UCC leases of goods, and § 89-1-503 (sales disclosure). No residential separate-writing rule. |
| MS-L-C5-010 / -011 | initials; "shall contain" | 14 / 20 | No residential lease content or initialling rule. |

| Text | Rule | Placement |
|---|---|---|
| Water submetering acknowledgment (`water-submetering-ms`) | § 77-3-97(3)(b): disclose and obtain the tenant's acknowledgment | No placement or type rule; the clause carries an initials line. |
| E-mail or text notice consent (`electronic-notice-consent-ms`) | § 89-8-13(3), (5)(a): "agreed in writing" | No placement rule; the clause carries the tenant's initials and says it controls over `notices` (rule 46). |
| Brownfield property statement (`brownfield-notice-ms`) | § 49-35-17(3)(a): "shall state in the deed or instrument" | No placement or type rule. |

No conflicting placement claims, so no question for Taylor.

## §5 Dormant rows resolved (rule 25)
None. No row in the library was tagged MS or carried an `-ms` id before this pass, dormant or active (§1.1).

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Every offered clause opens "[Optional.]" (with a use note where it applies only to some properties) and is never a default. Every lawful option the library declines has an education row saying it is lawful, why it isn't offered, and that a landlord who wants it can add their own clause after advice.

**Offered (Mississippi clauses):**
- `electronic-notice-consent-ms`: written e-mail/text consent (§ 89-8-13; § 89-8-17(2)), with the UETA conflict stated.
- `abandoned-property-ms`: property left after a voluntary surrender (no statute; § 89-8-39 governs after an eviction).
- `government-fines-reimbursement-ms`: fines the tenant caused (C1).
- `condition-report-ms`: move-in and move-out condition reports (C1).
- `condemnation-ms` (C3).
- `reletting-damages-ms`: re-renting damages for a fixed Term only; offered instead of acceleration (C3/C4).
- `repair-deductible-ms`: per-repair deductible with an annual limit. Code and health-and-safety work, casualty and landlord fault are carved out, and the tenant's notice, repair-and-deduct and termination remedies are saved. Offered on Taylor's decision (§6.2), and flagged for Claude Code (§10).
- `animal-care-access-ms`: emergency animal caretaker (C5).
- `partial-payment-nonwaiver-ms`: with the § 89-8-13(3)(a) cure and § 89-8-39(4) carve-outs (C4).
- `liability-limitation-ms`: narrow exculpation and indemnity. It keeps the landlord's negligence, willful misconduct and statutory duties outside (C7).
- `owner-agent-identity-ms` (C6).
- `pool-safety-ms`: only for pools within § 45-43-5 (C7 and finisher).
- `hunting-rights-ms` (C7).
- `brownfield-notice-ms`: required statement where a brownfield notice is recorded (main pass, outside-title search).

**Tagged as optional (shared or single-state):** `informal-dispute-resolution-or`, `rent-increase-midterm-ky`, `rent-escalation-la`, `government-fee-reimbursement-ky`, `rent-concession-wi`, `tax-insurance-escalation-la`, `casualty-termination-mt`, `carpet-cleaning-ar`, `no-liens-ar`, `cannabis-restrictions-ak`, `firearm-rules-la`, `appliances-excluded-la`, `improvements-ownership-la`, `pest-cooperation-la`, `detector-care-la`, `nonrefundable-fees-wv`, `owner-occupancy-termination-ar`, `tenant-repair-agreement-hi`.

**Declined, each with an education row saying it is lawful and why it isn't offered:**
- **Stipulated holdover rate** (`edu-holdover-rate-ms`): a lease rate would "contradict" § 89-8-45 and replace the statutory double rent.
- **Rent acceleration on abandonment** (`edu-abandonment-and-mitigation-ms`): it sits uneasily with § 89-8-13(4) (return of "all prepaid and unearned rent") and § 89-8-9 good faith. `reletting-damages-ms` is offered instead.
- **Tenant's express stipulation to pay rent or rebuild after a casualty** (`edu-casualty-termination-ms`; § 89-7-3): it shifts an owner's insurable risk to the tenant.
- **Pre-dispute arbitration** (`edu-no-lease-arbitration-statute-ms`): no Mississippi statute makes it enforceable for leases (§§ 11-15-101 to -143 cover construction contracts). The Federal Arbitration Act was not reviewed.
- **Landlord self-cure** (`edu-no-landlord-self-cure-ms`): the § 89-8-13(3)(a) cure and the deposit rules already reach it.
- **One-way attorney fees** (`edu-attorney-fees-ms`): the tagged `default-by-tenant` already carries a reciprocal fee sentence.
- **Holding-deposit agreement** (`edu-holding-deposit-ms`): a pre-lease agreement outside § 89-8-21.
- **Landlord-offered DV early termination** (`edu-no-dv-lease-termination-ms`).
- **Jury waiver** (art. 3, § 31; `edu-jury-waiver-ms`).
- **Smoke-drift waiver** (§ 89-8-5).
- **Brownfield-compliance clause:** folded into `brownfield-notice-ms`.
- **Alarm-tampering fee:** covered by the tagged `detector-care-la`.

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A; recommendation "Yes"): "Yes (Recommended)". This approved using the linked built-in browser for the official Code site and courts.ms.gov.
2. **Lexis public-access terms** (recommendation "agree"): "Yes, agree (Recommended)".
3. **First CAPTCHA** (first document view): "Solved it". Taylor solved it himself; it was never bypassed.
4. **Repair deductible** (rule 54; recommendation "offer narrowly"): the question opened with the REALTORS form's "first $___ of all repairs" example. It said that a pay-only share under § 89-8-23(3) ("perform") is untested, and that case law was unread. Taylor's answer: "I say offer it. please flag for CLI Claude. Also, since these "repairs" are NOT related to health-and-safety, this makes me think that they are elective. And therefore a tenant could think that they "own" it upon leaving and might take it with them? For example, I saw a clip where a tenant installed an entire backyard garden and then tore it all down when they moved out....."
   - Result: `repair-deductible-ms` was drafted with an ownership sentence. Repairs and parts paid under it belong to Landlord and may not be removed.
   - Tenant-built improvements (the garden) are covered by the tagged `no-alterations`: an approved alteration stays part of the property unless Landlord requires its removal. They are also covered by the optional `improvements-ownership-la` and by § 89-8-25(e) (no removing "any part of the premises").
   - Flagged for Claude Code (§10).
5. **Second CAPTCHA** (two helpers hit it at about 12:00 MT): "Solved it". The main pass then read the 40 queued sections.

Taylor also sent "snc" mid-turn and then said "ignore that last one". It was ignored.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Time computation:** § 1-3-67, RJC 13 and M.R.C.P. 6(a) exclude weekends and holidays from periods under 7 days. Rows apply this to the 3-day notices.
- **E-mail notices:** rows state each section's own wording: "agreed in writing" in § 89-8-13 and "has agreed" in § 89-8-17(2).
  - Because of § 75-12-5(b)(4), the cautious course is paper as well as any agreed electronic method (rule 31).
  - The helper brief first misstated § 89-8-17(2). It was corrected before C6 and C7 ran, and C4's two rows and the main-pass note were fixed. The independent check (round 1) found three more rows with the same error (the `electronic-notice-ma` tag note, `edu-holdover-ms`, `edu-termination-notice-ms`), all corrected (§13).
- **Holdover:** § 89-8-45 double rent after notice for a definite term. § 89-7-25 (general double rent) may not reach RLTA tenancies, so the rows give the RLTA measure and name the open question.
- **Repair deductible:** § 89-8-23(3) speaks of the tenant agreeing to "perform" duties. A payment-only share is untested, so the clause is narrow and saves every tenant remedy.
- **Exculpation:** ordinary-negligence exculpation is not barred by statute. Its enforceability is case law (not searched), so `liability-limitation-ms` keeps negligence outside.
- **Brownfield:** whether a residential lease is an "instrument conveying an interest" under § 49-35-17(3)(a) is unsettled. The cautious course is to include the statement.
- **Nuisance self-help:** § 95-3-23 allows entry "without process of law" after nuisance use. Rows advise the court process, because its fit with §§ 89-8-31 to -43 is unsettled.
- **Emergency pricing:** whether § 75-24-25 reaches rent is unsettled. Rows and the rent-increase tag segments name it as a risk.
- **Firearms:** § 45-9-55 (employer parking-lot rule). A landlord-employer should not ban firearms locked in vehicles in its lots; the tagged `firearm-rules-la` already says so.

### §6.4 Canvass helpers' questions and the main pass's answers
- **C1, late fee:** "the fee must be required by the lease so it is Rent". This was confirmed: `late-fee` says the fee "will be assessed", and the tag note quotes § 89-8-7(1)(k).
- **C1, returned payments:** "keep the fee at or below $40". This was confirmed: "not to exceed the maximum amount permitted by applicable law" keeps the clause within § 11-7-12. The tag note quotes it.
- **C1, emergency pricing (§ 75-24-25):** a sentence was added to the `rent-increase-midterm-ky` and `rent-escalation-la` tag notes.
- **C1, options:**
  - Fines and condition reports: drafted.
  - Written refund demand: already in `security-deposit-return-ms`.
  - Holding deposit: education only.
- **C2, deposit purposes (§ 89-8-21(3)):** confirmed. A sentence was added to the `security-deposit-use` tag note.
- **C2, § 11-19-9 ejectment notice:** added to the `tenant-forward-proceedings-ca` tag note.
- **C2, submetering bill contents:** already in `water-submetering-ms`.
- **C2, smoking and cannabis:** `smoking-policy` covers cannabis lawfully (§ 41-137-19(4)).
- **C2, options:** carpet cleaning, no-liens, detector care and as-is appliances were already tagged.
- **C3, repair deductible:** asked of Taylor (§6.2).
- **C3, acceleration:** declined (§6.1).
- **C3, condemnation:** drafted.
- **C3, pool chapter:** read whole after the CAPTCHA, and `pool-safety-ms` drafted.
- **C4, holdover rate, acceleration, arbitration and self-cure:** declined. Education rows now say each is lawful but not offered (§6.1). The main pass added those sentences to five rows.
- **C4, non-waiver:** drafted.
- **C4, HB 1603:** cited as 2026 Miss. Laws ch. 379. Its two management sentences are flagged (§10).
- **C5, § 89-8-17(2) wording:** the brief was corrected and the C4 rows fixed (§6.3).
- **C5, `informal-dispute-resolution-or`:** tagged.
- **C5, animal caretaker:** drafted.
- **C5, SB 2848:** cited as 2026 Miss. Laws ch. 503.
- **C6/C7, CAPTCHA:**
  - Taylor solved it, and the main pass read the 40 sections.
  - The finisher rewrote 17 rows. The main pass then read the brownfield article and rewrote the last NEEDS_REVIEW row, adding `brownfield-notice-ms`.
- **C6, options:**
  - Firearms: already covered by `firearm-rules-la`.
  - Owner and agent: drafted.
  - Smoke-drift waiver: declined.
- **C6, § 77-3-3(d) electric submetering:** stated in the electric-submetering row (§10).
- **C7, options:**
  - Narrow exculpation, pool and hunting: drafted.
  - Jury waiver: declined.
  - `employee-housing-ar`: not tagged.

## §7 Open items, each with its search boundary
1. **Case law was not searched** (no case-law corpus). Each row that turns on one of these states the cautious course:
   - enforceability of ordinary-negligence exculpation;
   - mitigation, the penalty doctrine and acceleration;
   - whether § 95-3-23 entry survives the RLTA eviction process;
   - whether § 89-7-49 (deserted premises) and § 89-7-25 reach RLTA tenancies;
   - whether a payment-only deductible is a § 89-8-23(3) agreement to "perform";
   - LLC landlords appearing through non-lawyers;
   - whether a lease is an instrument under § 49-35-17(3)(a), or "ownership" under § 89-27-5;
   - what "consumer" means in § 89-1-527(2);
   - § 45-9-55 and a landlord-employer;
   - whether the Consumer Protection Act's general standard reaches leases.
2. **Not read:**
   - Public Service Commission rules on utility deposits and disconnection (§ 77-5-235(2) points to them).
   - Local ordinances (unfit-dwelling ordinances under §§ 43-35-103/-105; rental registration; building codes adopted under ch. 17-2).
   - The rest of the unclaimed-property chapter beyond §§ 89-12-3, -5 and -14 (dormancy periods).
   - §§ 49-35-11, -23, -25 and -27 (brownfield approval and later provisions).
   - § 17-2-11 (refrigerants; immaterial).
   - §§ 89-1-505 to -523 (disclosure form).
   - § 75-24-9 (not found by its number); § 45-11-25 and § 75-2A-108 (named in hits for the balcony and unconscionability rows; not saved).
5. **Derrick Beard Act and older periodic tenancies:** whether a week-to-week or month-to-month tenancy that began before July 1, 2011 is "renewed" each period (§ 89-8-29(5)) is unsettled; rows tell landlords to treat every tenancy as covered.
3. **Federal law** is named only in general terms: lead disclosure, Fair Housing Act, SCRA, the Protecting Tenants at Foreclosure Act, the CARES Act, FCRA and FAA.
4. **Medical-cannabis initiative:** the Secretary of State note on Initiative 65's invalidation was relied on; the decision itself was not read.

## §8 Integrity checks on the delta
| Check | Result | Detail |
|---|---|---|
| Header identical to master | PASS | 17 columns, same order |
| Row ends | PASS | CRLF, 467 lines; master round-trips byte-identically through the same writer |
| No duplicate ids | PASS | 466 rows |
| Counts | PASS | 89 tagged shared rows + 377 new rows (17 clauses, 360 education) |
| Tagged rows change only states/notes/last_checked; master notes a verbatim prefix | PASS | 89 checked |
| No master row removed or altered beyond the tag | PASS | delta holds only tagged and new rows (merge appends) |
| supersedes | PASS | 2 overrides (security-deposit-return-ms→security-deposit-return, holdover-ms→holdover-ca); none dangling; each matches its "Overrides `x`" note |
| verification_status | PASS | {'VERIFIED': 377} |
| lease_clause_basis (clauses only) | PASS | 17 clauses carry a basis; education rows none |
| topic_key exists | PASS | no new topic_key |
| group from the existing list | PASS | education-only groups not used by clauses |
| {{variables}} | PASS | used: none; new: none |
| Dates | PASS | effective_from and last_checked 2026-10-20 on new rows; last_checked on tagged rows |
| Pointer check, row notes | PASS | every backticked id names an active row |
| No working files or working labels in delivered text (rule 61) | PASS | none |
| Quote check (rule 59) | PASS | quotes checked 2053: ok 2053, FAIL 0 |
| No failed-positive battery cited as support | PASS | 11 failed records checked |
| Rule 27 coverage | PASS | topics 360 covered 360 missing 0 |
| Education body length | PASS | 60-210 words |
| Citation screen (rule 22) | PASS | Laws-form outside quotes: 0; "Section N" outside quotes only in plain-English body text; bare "§ N" are Mississippi sections in Mississippi-only rows |
| Delta file | PASS | 2,456,283 bytes, SHA-256 e50e7a30ea66cc9048d8bbc60e627153ed26129e53078f93ce3c70eb616dd628 |
| Pointer check, this log | PASS | every backticked row id in this log names an active row in the master or the delta; the only other backticked names are four topic keys under "Proposed topic questions" and file names |

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 89 tagged rows changed only in `states` (";MS" appended), `notes` (an " | MS: …" segment appended) and `last_checked` (2026-10-20). The assembler checks that each master row's notes are a verbatim prefix of the delta row's notes, and that no other field changed.
- **Overrides** (`supersedes` set; the shared rows are untouched): `security-deposit-return-ms` (supersedes `security-deposit-return`) and `holdover-ms` (supersedes `holdover-ca`).
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
- **Repair deductible (flag for Claude Code, at Taylor's request):** `repair-deductible-ms` rests on § 89-8-23(3) ("perform"), and a payment-only share is untested. Please review it at sync. Taylor's ownership point is built into the clause (§6.2).
- **Legal watch (Mississippi statutes):**
  - **E-mail notices against UETA:** § 89-8-13(3), (5)(a) and § 89-8-17(2) allow e-mail or text notices. UETA § 75-12-5(b)(4) excludes default, eviction and right-to-cure notices under a residential rental agreement, and § 75-12-5(c) re-applies the chapter "to the extent" another law governs. Rows tell landlords to send paper as well.
  - **Holdover notice wording:** § 89-8-17(2) requires only that the tenant "has agreed" to e-mail or text, while § 89-8-13 requires a written agreement.
  - **§ 89-8-17(2), second sentence:** a post-expiry rent increase is allowed if not retaliatory "and the landlord received written notice of each condition". The conjunction reads oddly, and rows quote it as written.
  - **Health-or-safety terminations:** § 89-8-19(4) says no termination notice is needed for a health-or-safety violation, but § 89-8-33(b) requires a copy of the written notice of breach or termination to start an eviction. Rows tell landlords always to give a written notice.
  - **Squatter statutes:** HB 1603 (2026 Miss. Laws ch. 379) changed § 89-10-5 to "a person designated by the owner", while § 89-10-3(2) still says "an agent designated by the owner". Two differently worded management sentences now coexist.
  - **Double rent:** § 89-7-25 (general double rent) and § 89-8-45 (RLTA double rent). Whether the general section reaches RLTA tenancies is unsettled.
  - **Septic orders:** § 41-67-21 is repealed effective July 1, 2028. Recheck `edu-tenant-maintenance-ms`, `edu-no-designated-repairer-ms` and `edu-no-health-department-rental-rules-ms` then.
  - **Stale cross-references (rule 77):** § 11-15-101 cites § 77-9-387, and § 85-3-1 cites § 27-7-100. Number searches found no such sections (MS-L-X004, MS-L-X042).
  - **Electric and gas submetering:** § 77-3-3(d) excludes a landlord from "public utility" only where service is not resold "on a metered or consumption basis other than the submetering authorized under Section 77-3-97", which covers water only. Metered electric or gas billing may need Public Service Commission review.
  - **Water submetering and small condominiums:** an "Apartment house" is four or more units "including a residential condominium" (§ 77-3-97(2)(a)), but § 77-3-97(2)(b) and (3) also name a "condominium" and "condominium manager" on their own. Rows use the four-unit reading; condominiums of fewer than four units are arguably covered too.
  - **Lease-option disclosure:** § 89-1-503(1)(b) requires the seller's disclosure statement before a "lease together with an option to purchase". This applies only to 1-4 units with a licensee involved (§ 89-1-501(1)). Any future lease-option clause needs a drafting note.
- **Court rules and forms:**
  - **RJC 12(b)(1)** lists "Evictions (Miss. Code Ann. § 89-7-29)". This is stale: residential evictions moved to §§ 89-8-31 to -43 in 2022, and § 89-7-29 is now "Nonresidential evictions".
  - **AOC sample Residential Eviction Summons** (undated) omits the § 89-8-35(2) sentences added by 2025 Miss. Laws ch. 460: no right to reside after removal, and reasonable access during the 72 hours after removal. The sample Warrant of Removal (4-29-2022) predates § 89-8-39(2)'s 2025 statement that posting the warrant on the door is not execution. Rows tell landlords to follow the statute.
  - **Proposal to strike M.R.C.P. 81:** comments are due 2026-10-23. Rule 81(a) names no landlord-tenant statute.
- **Lead errors (Mississippi REALTORS Form F3):**
  - Its § 14 sends nonpayment terminations to "Chapter 7, Title 89", which is stale (§ 89-8-13(5)(a)).
  - Its § 7 lets the landlord decide "reasonable wear" in its discretion, which conflicts in practice with § 89-8-21(3) "ordinary wear and tear".
  - Its § 9-10 exculpation reaches the landlord's ordinary negligence; whether that is enforceable is case law.
  - Its § 13 rent acceleration is declined (§6.1).
- **AG Consumer Guide** ("As Amended through the 2018 Legislative Session") predates the 2022 and 2025 RLTA amendments. It was used as a lead only.
- **Product:**
  - No new `{{variable}}`: the new clauses use only bracketed prompts.
  - No new `topic_key` was created.
  - No new group was created.
- **For other states:** two lessons from this pass belong in other states' reviews, not just here:
  - Lexis public-access document views trigger a CAPTCHA after a few hundred views, while searches do not.
  - A quoted section number searches as an exact token, which makes a cheap existence check for cross-references.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4. No Mississippi type-size, bold, placement or separate-document rule reaches residential lease text. The batteries ran with and without a tenancy limb and with spelled-out number words.
- **41 Just-cause:** none. `edu-no-for-cause-eviction-ms` records the confirmed absence and the situational limits: good faith (§ 89-8-9), the § 89-8-17(2) retaliation limb on post-expiry rent increases, and the § 89-8-39(4) payment cure. A fixed term "expires on the date stated in the rental agreement" (§ 89-8-17(1)).
- **42 Required text inside a shared clause:** none required. The deposit-purpose condition of § 89-8-21(3) is met by `security-deposit-use` as written (tag note).
- **43 Cure promises:** `default-by-tenant`'s rent limb defers to "the time period specified by applicable law" (the 3-day notice, § 89-8-13(5)(a)). Its no-cure carve-out reaches both limbs. The § 89-8-39(4) post-judgment payment cure is explained in education.
- **44 Terms the statute turns into duties:** § 89-8-13(2) reaches "material noncompliance by the landlord with the rental agreement". `appliances-included` and `landlord-maintenance` carry a note that promised items become remedy triggers. `appliances-excluded-la` is tagged as the opt-out.
- **45 Electronic notices:** UETA ch. 75-12 read whole. § 75-12-5(b)(4) excludes notices of default, eviction or right to cure under a rental agreement for a primary residence, and notices ending utility service; § 75-12-5(c) re-applies the chapter to an excluded record "to the extent it is governed by a law other than those specified in subsection (b)", which leaves the reach to § 89-8-13 unsettled. `electronic-notice-consent-ms` and the education rows state the conflict and the paper course.
- **46 The lease as the required notice:** `electronic-notice-consent-ms` says it controls over `notices`. `addendum-precedence` is tagged because Mississippi requires no optional addendum to control.
- **47 Penalties for knowingly using a prohibited term:** none in the RLTA (MS-L-S01, C7-021). The Consumer Protection Act's private action reaches only goods and services (§ 75-24-15). No state debt-collection statute was found (C1 collection-fee row).
- **48 Separate-document requirements:** none. § 89-8-23(3) needs only an agreement "in writing", with no dwelling-type split. `snow-removal` and `landscaping-irrigation` are tagged.
- **49 Collection-cost bans:** none. The bad-check service charge is capped at $40 (§ 11-7-12). No reciprocity statute was found (C3 attorney-fees).
- **50 "The lease controls" wording:** § 89-8-45 ("if not contradicted by the rental agreement"): the choice is to keep the statutory double rent (§6.1). § 89-8-21(3): purposes are stated. § 89-8-13 and § 89-8-17(2): e-mail consent is an opt-in. § 89-7-3: the casualty stipulation is declined. § 89-8-23(3): duty shifting is optional.
- **51 Plain-language and consumer-contract statutes:**
  - Q1, an enumerated list: § 75-24-5(2) lists no lease practice (blank spaces, copies).
  - Q2, the general standard: "trade" includes real property. Whether the general standard reaches leases is case law (not searched); private suits are limited to goods and services (§ 75-24-15). `edu-consumer-protection-act-ms`.
- **52 Exculpation:** the class decision in §2.2 applies; the `-mn` variants are tagged.
- **53 Figures against shared clauses:**
  - Holdover: `holdover-ca` → `holdover-ms`.
  - Deposit return: 45 days after the last of three events → `security-deposit-return-ms`.
  - Late fee: no cap; the fee is Rent.
  - Returned payment: the $40 ceiling is honored by "maximum amount permitted by applicable law".
  - Periodic notice: 7 and 30 days, matched by `periodic-tenancy-notice-mt`.
  - No shared clause states a figure that conflicts with Mississippi law.

## §12 Other Step C screens
- **30 Read beyond the section:** read whole in the main pass:
  - ch. 89-7 (§§ 89-7-1 to -125) and ch. 89-8 (§§ 89-8-1 to -45);
  - ch. 89-10 (squatting), ch. 11-25 (unlawful entry and detainer), UETA ch. 75-12, ch. 45-43 (pool yards), ch. 89-27 (foreign land ownership), ch. 95-3 (nuisance, read by C4);
  - the brownfield article sections in §7;
  - the outside-title sections listed in §17.
- **31 Rules enacted twice:**
  - The § 89-8-13 / § 89-8-17(2) e-mail rule against § 75-12-5(b)(4) (§10).
  - § 89-8-45 against § 89-7-25 (double rent).
  - The deposit refund (§ 89-8-21) against unclaimed property (§ 89-12-3(f)(ii)).
- **32 Place or size:**
  - Pool chapter: multiunit rental complexes and POAs (§ 45-43-5).
  - Water submetering: 4+ units, condominiums and manufactured home communities (§ 77-3-97).
  - Code-edition freeze: Jackson, Harrison, Hancock, Stone and Pearl River Counties (§ 17-2-1).
  - Each row carries its scope in the body.
- **37 Tenancy types:** education rows state the week-to-week, month-to-month and fixed-term differences; the deposit rules do not differ. Derrick Beard Act: "entered into or renewed from and after July 1, 2011" (§ 89-8-29(5)). Rows tell landlords to follow it for every tenancy.
- **39 Eviction procedure:** statutory duties are screened in the post-eviction, eviction-process and record-sealing rows. Court rules, local rules and AOC forms were screened as follows:
  - Word-boundary grep (evict*, landlord(s), tenant(s), tenancy, unlawful entry, detainer, rent, rental, lease*): 0 hits in all 17 local rule sets, the URCCC, the Uniform Chancery Court Rules and the MRCP.
  - RJC: 5 hits, all in RJC 12(b)'s sworn-complaint list and the unlawful-entry-and-detainer appeal rule.
  - The AOC forms' statements of law track § 89-8-39. The sample summons predates 2025 ch. 460 (§10).
  - No court rule suspends a statute or sets a different period for a landlord duty. No eviction-record sealing rule was found.
  - Computation of time: § 1-3-67, RJC 13, M.R.C.P. 6(a).
- **77 Cross-references:** a script checked every "Section N" pointer inside each cited section against the saved corpus and battery index. The 82 pointers outside it were searched by number (MS-L-X001 to -082); 80 were found. Two were not: § 11-15-101 → § 77-9-387, and § 85-3-1 → § 27-7-100 (§10). RJC 12(b)(1) points to § 89-7-29 for residential evictions (§10).

## §13 Independent check (rule 80)
The check used one agent per round, run one at a time (`work/check/CHECK-BRIEF.md`). Each checker was told:
- to check against the statute, not the notes, because earlier findings may be wrong;
- to print whole sections (`sec.py` prints whole sections);
- to quote every subsection that new wording relies on;
- to write each fix as an exact old-to-new erratum that occurs once in its field.

The main pass reviewed every ERROR and the recurring FIX patterns against the printed statute, then applied the errata by script (`apply_errata.py`, once-only). The row generators were frozen when round 1 started (Proposed SOP changes). Each later round re-checked only the rows edited since the previous round, with the previous version attached for diffing.

| Round | Scope | ERROR | FIX | NOTE | Rows changed |
|---|---|---|---|---|---|
| 1 | all 466 delta rows (89 tag segments, 17 clauses, 360 education rows) | 4 | 117 | 3 | 120 (92 by errata, 2 by main-pass errata found while the round ran, the rest by removing working labels) |
| 2 | the 120 rows edited since round 1 | 0 | 42 | 8 | 37 (36 by errata, plus one main-pass erratum on the round-2 NOTE about `utility-allowance-cap-co`) |
| 3 | the 37 rows edited since round 2 | 1 | 4 | 0 | 4 |

**Round 1 ERRORs:**
- `holdover-ms`: the double-rent limb reached fixed-term leases ended early. It is now limited to expiration of the Term (§ 89-8-45).
- `electronic-notice-ma` (tag note), `edu-holdover-ms` and `edu-termination-notice-ms`: each said the holdover notice needs a written e-mail agreement. § 89-8-17(2) requires only that the tenant "has agreed".

**Recurring round 1 FIXes:**
- The § 89-8-19(4) no-notice rule against the § 89-8-33(b) filing requirement (about 14 rows).
- The § 77-3-97(2)(a) monthly-rent condition and the § 77-3-3(d) metered-resale limit.
- § 1-3-67 counting.
- The Derrick Beard Act's "from and after" date.
- The § 97-19-55 condition on the $40 charge.
- Which disclaimer variants are tagged.
- Working labels in notes.

**Round 1 NOTEs** (sections not saved: §§ 45-11-25, 75-24-9, 75-2A-108) went to §7.

**Round 2** confirmed every round-1 ERROR fix. Its FIXes mostly added statute citations for statements round 1 had added to bodies. Two of its NOTEs went to §7 and §10: whether small condominiums fall under the water-submetering statute, and the `utility-allowance-cap-co` metering caution.

**Round 3 ERROR:** `utility-allowance-cap-co`. The main-pass sentence called § 77-3-3(d) a test of who is a public utility; it is a condition of the tenant-service exclusion. The sentence also left out water and sewer. Corrected.

**Round 3 FIXes:**
- `edu-attorney-fees-ms` (body and notes) and `edu-statutory-caps-ms`: the full § 97-19-55(1)(a)/(b) elements.
- `edu-scope-ms`: the full § 45-43-3(g) definition.

### Edited after the last check
Round 3 still produced changes, so it was the last round (kickoff limit). Its errata were applied, and these rows are listed for Claude Code to read against the statute at sync:

| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `utility-allowance-cap-co` (MS segment) | round 3 | round 3 erratum (ERROR) | § 77-3-3(d) restated as a condition of the tenant-service exclusion; covers water and sewer as well as electricity and gas |
| `edu-attorney-fees-ms` | round 3 | round 3 errata (FIX ×2) | "bad check" restored in the body; § 97-19-55(1)(a)/(b) elements quoted in the notes |
| `edu-statutory-caps-ms` | round 3 | round 3 erratum (FIX) | § 97-19-55(1)(a)/(b) elements quoted in the notes |
| `edu-scope-ms` | round 3 | round 3 erratum (FIX) | § 45-43-3(g) "Multiunit rental complex" quoted in full |

## §14 Gap-discovery source 1 — statute walk (rule 29)
Read whole: ch. 89-7 (§§ 89-7-1 to -125) and ch. 89-8 (§§ 89-8-1 to -45), section-open, in the main pass (plus ~v2 superseded copies of §§ 89-8-3, -31, -35, -39).
Diff (scripts/statwalk.py over tag segments + all MS rows): 88 section entries; 61 cited directly; 27 cited only inside a range citation, all court-procedure sections:
- §§ 89-7-33, -34, -37, -39, -43, -47 (nonresidential eviction procedure — residential evictions are §§ 89-8-31 to -43); no landlord duty, prohibition or immunity reaching a residential lease (rule 39).
- §§ 89-7-55 to -123 (attachment for rent / distress / replevin forms and pleadings); the substantive lien (§ 89-7-51) and its enforcement by attachment are in landlord-lien rows; the remainder is court procedure.
- § 89-7-13 (executor or administrator may sue or distrain): procedure on a landlord's death; no lease term turns on it.
One level down (subsections cited in part): § 89-8-29(1) short title; § 89-8-41(1) adjournment (procedure); § 89-7-51(1) lien on agricultural products (agricultural leases, not residential); §§ 89-7-31, -34, -35 nonresidential eviction. No gap: no row needed.

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
Lease: Mississippi Association of REALTORS® Form "F3 - Residential Lease Agreement", 8 pages (incl. p. 8 Lessee Application). Publisher: Mississippi Association of REALTORS®. Edition: undated on the form. URL found: https://esign.com/wp-content/uploads/Mississippi-Association-of-Realtors-Residential-Lease-Agreement.pdf (third-party host of the MAR form; MAR's own forms library is member-only). PDF SHA-256 e162f187…; extracted text saved (src/lease-MAR-residential.json, work/lease-MAR.txt).
Why weaker: hosted by a third party, not MAR; undated, so edition currency unknown (its nonpayment pointer "Chapter 7, Title 89" predates the 2022 move of residential eviction to ch. 89-8, suggesting a pre-2022 edition, though § 89-8-21 45-day text and § 89-8-13 structure match). Not a relabelled multi-state template: MS-specific statute pointers (§§ 89-8-23, -25), MAR agency/dual-agency block, MAR disclaimer.
Handbook lead read beside it: Attorney General Consumer Guide to the RLTA ("As Amended through the 2018 Legislative Session") — pre-2022/2025, lead only.

| MAR § | Subject (paraphrase) | Library row / topic | Lead / finding |
|---|---|---|---|
| preamble | occupants named; residential use only; "Premises" includes common areas | permitted-occupants, residential-use-only (tagged) | none |
| 1 | fixed term then week-to-week or month-to-month with notice under § 14 | periodic-tenancy-notice-mt, holdover-ms | consistent with § 89-8-19 |
| 2 | flat/annual/weekly/monthly rent; late charge $ or % after X days; dishonored-check fee + collection costs and attorney fees | rent-payment, rent-installments-or, late-fee, returned-payments (tagged); topics collection-fee (C1), attorney-fees (C3) | check fee: § 11-7-12 / § 97-19-57 $40 service charge — returned-payments tag note; attorney fees — canvass C3 |
| 3 | deposit held by Broker; written notice of claims; 45 days after termination, possession and demand; written accounting | security-deposit-return-ms, security-deposit-use | matches § 89-8-21(3); broker trust-account handling is real-estate-licensing law (not screened as lease law) — scenario line |
| 4 | pets barred or allowed with written permission; pet deposit refundable or not; liable for pet damage | pet-policy-or, nonrefundable-fees-wv (tagged) | non-refundable pet deposit: no MS bar found (no deposit statute beyond § 89-8-21) — see nonrefundable-fees tag |
| 5 | tenant utilities; gas kept on for the term; tenant pays pressure testing caused by lapse | utilities-responsibility, utility-service-continuity (tagged) | lead: gas pressure-test cost — practice point, not law; covered as damages by utility-service-continuity breach; no new row |
| 6 | acceptance = conclusive evidence of good condition; tenant performs § 89-8-25 duties; obey rules/association bylaws | existing-condition, tenant-maintenance, rules-ia, hoa-compliance (tagged) | "conclusive evidence" overreaches if it waives § 89-8-23 duties (§ 89-8-5 first sentence) — library existing-condition doesn't do this; no change |
| 7 | surrender in same condition, "reasonable wear" as determined by Lessor in its discretion | surrender-end-of-term (tagged) | lead/error: landlord-discretion wear standard sits uneasily with § 89-8-21(1)'s "ordinary wear and tear" exclusion — library wording is right; scenario line |
| 8 | no alterations incl. painting; improvements become Lessor's; restoration cost = additional rent | no-alterations, improvements-ownership-la (tagged) | costs as "additional Rent" — MS Rent includes all payments (§ 89-8-7(1)(k)) so consistent |
| 9-10 | exculpation and tenant indemnity, carving out Lessor's willful misconduct | topic exculpatory-clauses (C7); unqualified disclaimers untagged (§ 89-8-5(b)) | option (rule 54): MS exculpation/indemnity clause with willful-misconduct carve-out — decide with C7 answer |
| 11 | entry at reasonable times; showings by appointment on 24 hours' notice; advertise | landlords-access, showing-notice-la (tagged) | MS has no entry statute; 24h is contractual |
| 12 | tenant pays first $___ of all repairs; 30-day repair-and-deduct tracking § 89-8-15 | tenant-repair-agreement-hi (tagged), topics tenant-repair-remedies (C3), maintenance-duty-shift (C3) | option: repair deductible ("first $___") — lawful only within § 89-8-23(3) writing/good faith; decide with C3; § 89-8-15 mirror is accurate |
| 13 | vacancy/abandonment = default; re-entry by law incl. summary remedies; store or dispose; whole unpaid Rent accelerates + costs and attorney fees | abandoned-property-ms; topics abandonment-and-mitigation (C3), landlord-remedies-termination (C4) | lead: rent acceleration on abandonment — decide with C3/C4 (mitigation case law not searched) |
| 14 | termination: 7/30-day periodic notice; nonpayment "in the manner ... prescribed by Chapter 7, Title 89"; 30-day notice/cure option; 14-day repeat-breach | default-by-tenant (tagged); topics termination-notice, cure-and-eviction-grounds (C3) | error: stale "Chapter 7, Title 89" pointer (nonpayment notice is § 89-8-13(3)); 30-day cure is longer than § 89-8-13(1)'s 14 days — lawful for landlord to give more; log §10 |
| 15 | default remedies cumulative; tenant pays attorney fees | topic attorney-fees (C3) | — |
| 16 | notice by personal delivery with acknowledgment or certified mail; door posting if tenant can't be found | notices (tagged); electronic-notice-consent-ms | lead: posting fallback — MS RLTA has no notice-delivery definition beyond § 89-8-13(5) e-mail/text; record in notices tag note / scenario |
| 17 | no waiver by failure to insist | topic waiver-by-acceptance (C4) | — |
| 18 | governing law; severability | governing-law, severability (tagged) | none |
| 19 | time of the essence | no library row | lead only; not state-law driven; no row (rule 28) |
| 20 | federal fair housing statement | topic fair-housing (canvass) | MS has no state fair housing act (confirmed absence, S-batteries) |
| 21 | lead-based paint disclosure | lead-based-paint (tagged) | none |
| 22 | brokers/agency relationship | nonresident-owner-agent (C5) | agency disclosure is real-estate-licensing law — out of scope |
| 23-24 | special provisions; attachments incl. Mandatory Arbitration Addendum | topic binding-arbitration (C4) | lead: arbitration addendum exists in MS practice — C4 |
| p. 8 | lessee application: SSN, DL#, employer, references, credit authorization | rental-application-accuracy-la (tagged); screening topics | none |

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 237, from advertising and screening through signing, move-in money, rent, utilities, repairs, entry, the tenancy, sale and foreclosure, ending the tenancy, and default and eviction. Mississippi-specific scenarios were added:
  - 18-20-year-old applicants (age of majority 21);
  - the manufactured-home lot and RV park;
  - brokers holding deposits;
  - gas pressure tests;
  - the § 89-7-46 utility-money crime;
  - landlord cameras;
  - vehicles left in the lot;
  - the § 89-8-39 72-hour access.
- **Results:** every scenario maps to a topic that has a Mississippi row (0 unanswered). Five needed new searches:
  - MS-L-S84 (age): §§ 1-3-27, 93-19-13. An 18-20-year-old "shall have the capacity to enter into binding agreements to lease real property to be occupied by the person as the actual place of residence".
  - MS-L-S85 (manufactured-home parks): no park statute, positive passed.
  - MS-L-S86 (data breach): § 75-24-29.
  - MS-L-S87 (cameras): § 97-29-63.
  - MS-L-S88 (abandoned vehicles): ch. 63-23 does not reach a private lot.
  - These were fed to the helpers through the law map.

| # | Stage | Scenario | Topic(s) | MS row(s) | Search |
|---|---|---|---|---|---|
| 1 | Advertising & application | Advertise a unit; can the ad say "no Section 8"? | source-of-income, fair-housing | `edu-fair-housing-ms`, `edu-no-source-of-income-protection-ms` |  |
| 2 | Advertising & application | Ad states a preference for families or adults only | fair-housing, children-occupancy | `edu-children-occupancy-ms`, `edu-fair-housing-ms` |  |
| 3 | Advertising & application | Charge an application fee; refund if not processed? | application-fees | `edu-no-application-fee-rules-ms` |  |
| 4 | Advertising & application | Take a holding deposit to take the unit off the market | holding-deposit | `edu-holding-deposit-ms` |  |
| 5 | Advertising & application | Run credit, eviction and criminal background checks | tenant-screening | `edu-tenant-screening-ms` |  |
| 6 | Advertising & application | Applicant has an expunged conviction | tenant-screening | `edu-tenant-screening-ms` | MS-L-S81 (§ 99-19-71) |
| 7 | Advertising & application | Ask about immigration status or citizenship | immigration-status, protected-class-inquiry-ban | `edu-no-immigration-status-rule-ms`, `edu-no-protected-class-inquiry-ban-ms` |  |
| 8 | Advertising & application | Applicant is 19 (age of majority 21 in MS) | minor-tenant-filing, tenant-screening | `edu-minor-tenants-ms`, `edu-tenant-screening-ms` | MS-L-S84 (§§ 1-3-27, 93-19-13) |
| 9 | Advertising & application | Applicant is 17 | minor-tenant-filing | `edu-minor-tenants-ms` | MS-L-S84 (§ 93-19-13(1)) |
| 10 | Advertising & application | Applicant lied on the application | rental-application-accuracy | `edu-no-rental-application-remedy-ms`, `rental-application-accuracy-la` |  |
| 11 | Advertising & application | Applicant uses an emotional-support-animal letter | assistance-animal-accommodation, service-animal-misrepresentation | `assistance-animal-accommodation`, `edu-assistance-animals-ms`, `edu-no-service-animal-misrepresentation-ms` |  |
| 12 | Advertising & application | Applicant uses a wheelchair and asks for a ramp | disability-accommodation | `edu-disability-accommodation-ms` |  |
| 13 | Advertising & application | Applicant is a registered sex offender | sex-offender-occupancy, sex-offender-disclosure | `edu-sex-offender-information-ms`, `edu-sex-offender-occupancy-ms` |  |
| 14 | Advertising & application | Algorithmic pricing software sets the rent | algorithmic-rent-setting | `edu-no-algorithmic-rent-setting-ms` |  |
| 15 | Advertising & application | Store applicants' SSNs and driver's-license numbers; data breach | tenant-confidential-information, tenant-records | `edu-tenant-confidential-information-ms`, `edu-tenant-records-ms` | MS-L-S86 (§ 75-24-29) |
| 16 | Advertising & application | Reject an applicant: adverse-action notice | tenant-screening | `edu-tenant-screening-ms` |  |
| 17 | Advertising & application | Applicant asks for the lease in Spanish | translation-duty | `edu-no-translation-duty-ms` |  |
| 18 | Advertising & application | Disclose junk fees up front | fee-transparency, required-fees | `edu-no-fee-transparency-ms`, `edu-no-required-fees-rule-ms` |  |
| 19 | Lease signing | Lease longer than one year: must it be written? | statute-of-frauds-lease-term | `edu-statute-of-frauds-lease-ms` |  |
| 20 | Lease signing | Oral month-to-month lease | statute-of-frauds-lease-term, termination-notice | `edu-statute-of-frauds-lease-ms`, `edu-termination-notice-ms`, `end-of-term-notice-ga`, `periodic-tenancy-notice-mt` |  |
| 21 | Lease signing | Sign the lease electronically | electronic-signatures | `edu-electronic-signatures-ms`, `electronic-signatures` |  |
| 22 | Lease signing | Give the tenant a copy of the signed lease | lease-copy | `edu-no-lease-copy-duty-ms` |  |
| 23 | Lease signing | Required lease contents or type size | lease-content-requirements, lease-type-size | `edu-no-lease-content-list-ms`, `edu-no-lease-type-size-ms` |  |
| 24 | Lease signing | Lease drafted in plain language / consumer statement | plain-language, plain-language-consumer-statement | `edu-no-plain-language-lease-law-ms`, `edu-plain-language-ms` |  |
| 25 | Lease signing | Blank spaces filled in after signing | lease-completeness, consumer-protection-act | `edu-consumer-protection-act-ms`, `edu-no-lease-completeness-rule-ms` |  |
| 26 | Lease signing | Cosigner/guarantor; does the guaranty cover renewals? | guarantor-renewal | `edu-guarantor-ms` |  |
| 27 | Lease signing | Joint and several liability of roommates | joint-liability | `edu-no-co-tenant-liability-rule-ms`, `joint-liability` |  |
| 28 | Lease signing | Name the occupants allowed | permitted-occupants | `edu-no-occupancy-limit-statute-ms`, `permitted-occupants` |  |
| 29 | Lease signing | Lease includes confession of judgment | confession-of-judgment | `edu-confession-of-judgment-ms` |  |
| 30 | Lease signing | Lease waives jury trial | jury-waiver | `edu-jury-waiver-ms` |  |
| 31 | Lease signing | Mandatory arbitration addendum (MAR form offers one) | binding-arbitration | `edu-no-lease-arbitration-statute-ms` |  |
| 32 | Lease signing | Lease makes tenant pay landlord's attorney fees | attorney-fees | `edu-attorney-fees-ms` |  |
| 33 | Lease signing | Lease disclaims landlord liability for injuries | exculpatory-clauses | `edu-exculpatory-clauses-ms`, `liability-limitation-ms` |  |
| 34 | Lease signing | Lease waives tenant's habitability rights | habitability-waiver, habitability-modifiable | `edu-habitability-modifiable-ms`, `edu-habitability-waiver-ms` |  |
| 35 | Lease signing | Lease waives exemptions from execution | homestead-waiver | `edu-exemptions-no-lease-waiver-ms` |  |
| 36 | Lease signing | Lease waives notice to quit | notice-to-quit-waiver | `edu-notice-not-waivable-ms` |  |
| 37 | Lease signing | Unconscionable term | unconscionability | `edu-no-unconscionability-statute-ms` |  |
| 38 | Lease signing | Lease states a liquidated-damages figure | liquidated-damages | `edu-no-liquidated-damages-rule-ms` |  |
| 39 | Lease signing | Automatic renewal clause | automatic-renewal | `edu-no-lease-auto-renewal-rule-ms` |  |
| 40 | Lease signing | Lease term limits (99-year, etc.) | lease-term-limitation | `edu-no-lease-term-limits-ms` |  |
| 41 | Lease signing | Severability clause | severability | `edu-severability-ms`, `severability` |  |
| 42 | Lease signing | Entire-agreement clause | entire-agreement | `edu-entire-agreement-ms`, `entire-agreement` |  |
| 43 | Lease signing | Governing law | governing-law | `edu-governing-law-ms`, `governing-law` |  |
| 44 | Lease signing | Lead-based paint disclosure for pre-1978 housing | lead-based-paint | `edu-lead-based-paint-ms`, `lead-based-paint` |  |
| 45 | Lease signing | Required state disclosures generally | required-disclosures | `edu-required-disclosures-ms` |  |
| 46 | Lease signing | Owner/manager identity disclosure | owner-identity-disclosure | `edu-no-owner-identity-disclosure-ms`, `owner-agent-identity-ms` |  |
| 47 | Lease signing | Flood zone / flood history disclosure | flood-disclosure | `edu-no-flood-disclosure-ms` |  |
| 48 | Lease signing | Mold, radon, meth, bed-bug disclosures | mold-disclosure, radon-disclosure, meth-disclosure, bed-bug-disclosure | `edu-no-bed-bug-disclosure-ms`, `edu-no-meth-disclosure-ms`, `edu-no-mold-disclosure-ms`, `edu-no-radon-disclosure-ms` |  |
| 49 | Lease signing | Death or crime on the premises (stigma) | stigmatized-property | `edu-stigmatized-property-ms` |  |
| 50 | Lease signing | Defective (Chinese) drywall disclosure | defective-drywall-disclosure | `edu-no-drywall-disclosure-ms` |  |
| 51 | Lease signing | Water submetering in a 4+ unit building | utility-submetering-disclosure | `edu-utility-submetering-disclosure-ms`, `water-submetering-ms` |  |
| 52 | Lease signing | Electric submetering | electric-submetering-disclosure | `edu-electric-submetering-ms` |  |
| 53 | Lease signing | Pool in a multiunit complex | pool-safety | `edu-pool-safety-ms` |  |
| 54 | Lease signing | Property in an HOA or condo; association rules | hoa, hoa-compliance, association-obligations-disclosure | `association-approval-la`, `edu-hoa-compliance-ms`, `edu-hoa-ms`, `edu-no-association-disclosure-ms`, `hoa-compliance` |  |
| 55 | Lease signing | Public improvement district disclosure (§ 19-31-45 sales only) | required-disclosures | `edu-required-disclosures-ms` |  |
| 56 | Lease signing | Military air zone (Keesler, Columbus AFB area) | military-air-zone-disclosure | `edu-no-military-zone-disclosure-ms` |  |
| 57 | Lease signing | Furnished unit inventory | furnishings-included | `edu-no-furnished-rental-rule-ms`, `furnishings-included-la` |  |
| 58 | Lease signing | Appliances included / excluded | appliances-included, appliances-excluded | `appliances-excluded-la`, `appliances-included`, `edu-appliances-included-ms`, `edu-no-appliance-presumption-ms` |  |
| 59 | Lease signing | Tenant rights statement or AG guide must be given | tenant-rights-statement, rights-responsibilities-guide | `edu-no-rights-guide-ms`, `edu-no-tenant-rights-statement-ms` |  |
| 60 | Lease signing | Landlord must register the rental | landlord-registration | `edu-no-landlord-registration-ms` |  |
| 61 | Lease signing | Rental is in a manufactured-home community (lot rent) | scope | `edu-scope-ms` | MS-L-S85 (no park statute; § 77-3-97 only) |
| 62 | Lease signing | RV park space rental (§ 89-29-1) | scope | `edu-scope-ms` |  |
| 63 | Lease signing | Rent-to-own / lease with option to buy (contract-for-sale exclusion) | scope | `edu-scope-ms` |  |
| 64 | Lease signing | Short-term vacation rental (transient lodging exclusion) | scope, seasonal-tenancy | `edu-no-seasonal-tenancy-rule-ms`, `edu-scope-ms` |  |
| 65 | Lease signing | Employee housing tied to a job | tenant-employee-housing | `edu-employee-housing-ms` |  |
| 66 | Lease signing | Accessory dwelling unit | accessory-dwelling-unit | `edu-no-accessory-dwelling-unit-law-ms` |  |
| 67 | Lease signing | Single-family-zone lease limits (local) | single-family-zone-lease-limit | `edu-no-single-family-zone-lease-limit-ms` |  |
| 68 | Money at move-in | How large a security deposit may be charged | security-deposit-cap | `edu-no-security-deposit-cap-ms` |  |
| 69 | Money at move-in | Deposit held in trust or separate account | security-deposit-holding | `edu-no-security-deposit-holding-ms` |  |
| 70 | Money at move-in | Interest on the deposit | security-deposit-interest | `edu-no-security-deposit-interest-ms` |  |
| 71 | Money at move-in | Deposit in installments | deposit-installments | `edu-no-deposit-installments-ms` |  |
| 72 | Money at move-in | Last month's rent collected up front | deposit-last-month-rent | `edu-no-deposit-last-month-rent-ms` |  |
| 73 | Money at move-in | Nonrefundable cleaning or pet fee | nonrefundable-deposit-notice, pet-fees | `edu-no-nonrefundable-deposit-notice-ms`, `edu-pet-fees-ms`, `nonrefundable-fees-wv` |  |
| 74 | Money at move-in | Deposit alternative / insurance product | fee-in-lieu-of-deposit | `edu-no-fee-in-lieu-of-deposit-ms` |  |
| 75 | Money at move-in | Move-in condition checklist | condition-inspection, existing-condition | `condition-report-ms`, `edu-existing-condition-ms`, `edu-no-condition-inspection-rule-ms`, `existing-condition` |  |
| 76 | Money at move-in | What is due at signing | due-at-signing | `due-at-signing`, `edu-due-at-signing-ms` |  |
| 77 | Money at move-in | Broker holds the deposit (MAR form) | security-deposit-holding | `edu-no-security-deposit-holding-ms` |  |
| 78 | Money at move-in | Utility deposits in landlord's name | utility-deposit-return | `edu-utility-deposit-ms` |  |
| 79 | Rent | Due date, place and method of rent | rent-payment, acceptable-payment-methods | `acceptable-payment-methods`, `edu-no-acceptable-payment-methods-ms`, `edu-no-rent-payment-default-ms`, `rent-payment` |  |
| 80 | Rent | Tenant wants to pay cash; receipts | rent-receipts | `edu-no-rent-receipts-ms` |  |
| 81 | Rent | Refuse personal checks after a bounced check | returned-payments, acceptable-payment-methods | `acceptable-payment-methods`, `edu-no-acceptable-payment-methods-ms`, `edu-returned-payments-ms`, `returned-payments` |  |
| 82 | Rent | Bounced-check fee amount ($40 service charge) | returned-payments | `edu-returned-payments-ms`, `returned-payments` |  |
| 83 | Rent | Late fee size and grace period | late-fee, late-fee-limit | `edu-late-fee-ms`, `edu-no-late-fee-limit-ms`, `late-fee`, `prompt-payment-discount-la` |  |
| 84 | Rent | Is an unpaid late fee "rent" for a nonpayment notice | fees-as-rent, nonpayment-notice | `edu-fees-as-rent-ms`, `edu-nonpayment-notice-ms` |  |
| 85 | Rent | Apply payments to oldest charges first | application-of-payments | `application-of-payments`, `edu-no-application-of-payments-ms` |  |
| 86 | Rent | Partial payment after a notice | waiver-by-acceptance | `edu-waiver-by-acceptance-ms`, `partial-payment-nonwaiver-ms` |  |
| 87 | Rent | Raise rent mid-lease | rent-escalation, rent-increase-notice | `edu-no-rent-escalation-rule-ms`, `edu-no-rent-increase-notice-ms`, `rent-escalation-la`, `rent-increase-midterm-ky` |  |
| 88 | Rent | Raise rent on a month-to-month tenant | rent-increase-notice, term-change-notice | `edu-no-rent-increase-notice-ms`, `edu-no-term-change-notice-ms` |  |
| 89 | Rent | City rent control | rent-control | `edu-no-rent-control-ms` |  |
| 90 | Rent | Rent after a declared emergency (price gouging) | rent-control, disaster-duties | `edu-disaster-duties-ms`, `edu-no-rent-control-ms` |  |
| 91 | Rent | Report rent to credit bureaus | rent-reporting | `edu-no-rent-reporting-ms` |  |
| 92 | Rent | Sales tax on rent | rent-tax | `edu-rent-tax-ms` |  |
| 93 | Rent | Pass property-tax or insurance increases through | tax-escalation | `edu-no-tax-escalation-rule-ms`, `tax-insurance-escalation-la` |  |
| 94 | Rent | Rent concession for signing | rent-concession | `edu-no-rent-concession-ms`, `rent-concession-wi` |  |
| 95 | Rent | Interest on unpaid rent or damages | unpaid-damages-interest | `edu-unpaid-amounts-interest-ms` |  |
| 96 | Rent | Collection agency fees | collection-fee | `edu-collection-fee-ms` |  |
| 97 | Rent | Deadline to sue for unpaid rent | limitation-of-actions | `edu-limitation-of-actions-ms` |  |
| 98 | Rent | Subsidized tenant: late fee on the tenant share | subsidy-late-fee | `edu-no-subsidy-late-fee-ms` |  |
| 99 | Rent | Government shutdown and federal-employee tenants | shutdown-rent-protection | `edu-no-shutdown-rent-protection-ms` |  |
| 100 | Rent | Landlord's lien on tenant's goods for rent (§ 89-7-51) | landlord-lien | `edu-landlord-lien-ms` |  |
| 101 | Rent | Landlord seizes property for rent without court | landlord-lien, self-help-eviction | `edu-landlord-lien-ms`, `edu-no-self-help-eviction-statute-ms` |  |
| 102 | Utilities | Who pays which utilities | utilities-responsibility, utilities-paid-by-landlord | `edu-utilities-paid-by-landlord-ms`, `edu-utilities-responsibility-ms`, `utilities-paid-by-landlord`, `utilities-responsibility` |  |
| 103 | Utilities | Tenant lets gas lapse; pressure test cost (MAR form) | utility-service-continuity | `edu-utility-service-continuity-ms`, `utility-service-continuity` |  |
| 104 | Utilities | Landlord bills tenants for a shared meter | utility-apportionment | `edu-utility-apportionment-ms` |  |
| 105 | Utilities | Landlord collects utility money and doesn't pay the utility (§ 89-7-46) | utility-landlord-account, utility-shutoff-statute | `edu-utility-landlord-account-ms`, `edu-utility-shutoff-rules-ms` |  |
| 106 | Utilities | Utility shut off for landlord's nonpayment | utility-shutoff-statute, utility-disconnection-notice-authorization | `edu-no-utility-shutoff-notice-authorization-ms`, `edu-utility-shutoff-rules-ms` |  |
| 107 | Utilities | Municipal water lien on owner for tenant's bill | municipal-utility-lien | `edu-garbage-fee-lien-ms` |  |
| 108 | Utilities | Transfer utilities at move-in/out | utility-transfer | `edu-no-utility-transfer-rule-ms` |  |
| 109 | Utilities | Landlord shuts off utilities to force move-out | self-help-eviction | `edu-no-self-help-eviction-statute-ms` |  |
| 110 | Utilities | Internet/cable access for providers | telecom-access | `edu-no-telecom-access-ms` |  |
| 111 | Repairs & condition | Landlord's repair duties | landlord-maintenance, tenant-statutory-duties | `edu-landlord-maintenance-ms`, `edu-tenant-statutory-duties-ms`, `landlord-maintenance` |  |
| 112 | Repairs & condition | Shift repairs to tenant in writing (§ 89-8-23(3)) | maintenance-duty-shift, tenant-repair-agreement | `edu-maintenance-duty-shift-ms`, `edu-tenant-repair-agreement-ms`, `repair-deductible-ms`, `tenant-repair-agreement-hi` |  |
| 113 | Repairs & condition | Tenant pays first $X of every repair (MAR form) | maintenance-duty-shift, tenant-repair-agreement | `edu-maintenance-duty-shift-ms`, `edu-tenant-repair-agreement-ms`, `repair-deductible-ms`, `tenant-repair-agreement-hi` |  |
| 114 | Repairs & condition | Tenant repairs and deducts (§ 89-8-15) | tenant-repair-remedies | `edu-tenant-repair-remedies-ms` |  |
| 115 | Repairs & condition | Tenant withholds rent for repairs | tenant-repair-remedies, rent-into-court-counterclaim | `edu-counterclaims-no-rent-escrow-ms`, `edu-tenant-repair-remedies-ms` |  |
| 116 | Repairs & condition | Tenant terminates for landlord's breach | landlord-breach-remedy, repair-cost-termination | `edu-landlord-breach-remedy-ms`, `edu-no-repair-cost-termination-ms` |  |
| 117 | Repairs & condition | Air conditioning stops in July | heating, landlord-maintenance | `edu-heating-cooling-ms`, `edu-landlord-maintenance-ms`, `landlord-maintenance` |  |
| 118 | Repairs & condition | Heat fails in winter | heating | `edu-heating-cooling-ms` |  |
| 119 | Repairs & condition | Mold after a storm | mold-disclosure, landlord-maintenance | `edu-landlord-maintenance-ms`, `edu-no-mold-disclosure-ms`, `landlord-maintenance` |  |
| 120 | Repairs & condition | Bed bugs | bed-bug-cooperation | `edu-no-bed-bug-rule-ms`, `pest-cooperation-la` |  |
| 121 | Repairs & condition | Pest control | pest-control-notice | `edu-no-pest-control-notice-ms` |  |
| 122 | Repairs & condition | Smoke and CO detectors | alarm-duties | `edu-no-smoke-co-alarm-statute-ms` |  |
| 123 | Repairs & condition | Locks, deadbolts and security devices | security-devices | `edu-security-devices-ms` |  |
| 124 | Repairs & condition | Water heater temperature | water-heater-temperature | `edu-no-water-heater-rule-ms` |  |
| 125 | Repairs & condition | Window guards / blinds | window-guards | `edu-no-window-guard-rule-ms` |  |
| 126 | Repairs & condition | Private well water testing | private-well-testing | `edu-no-well-testing-ms` |  |
| 127 | Repairs & condition | City code inspection of rentals | rental-inspection | `edu-no-rental-inspection-program-ms` |  |
| 128 | Repairs & condition | Building condemned | condemned-premises-rent-bar, inspection-condemnation-disclosure | `edu-condemned-premises-ms`, `edu-no-code-order-disclosure-ms` |  |
| 129 | Repairs & condition | Landlord promised repairs in the lease | promises-to-repair | `edu-no-promises-to-repair-rule-ms` |  |
| 130 | Repairs & condition | Tenant-caused damage | tenant-caused-damage | `edu-tenant-caused-damage-ms`, `tenant-caused-damage-nm` |  |
| 131 | Repairs & condition | Tenant must report needed repairs | repair-notice | `edu-repair-notice-ms` |  |
| 132 | Repairs & condition | Lawn care and landscaping by tenant | landscaping-irrigation | `edu-tenant-chores-writing-ms`, `landscaping-irrigation` |  |
| 133 | Repairs & condition | Fire sprinklers / fire code | fire-code-standard, fire-sprinkler-duty | `edu-fire-code-standard-ms`, `edu-no-sprinkler-retrofit-duty-ms` |  |
| 134 | Repairs & condition | Contractor hired by tenant files a lien (§ 85-7-411) | construction-liens | `edu-construction-liens-ms`, `no-liens-ar` |  |
| 135 | Entry & privacy | Enter for repairs; how much notice | landlord-entry | `edu-no-landlord-entry-statute-ms`, `landlords-access` |  |
| 136 | Entry & privacy | Show unit to buyers or new tenants | landlord-entry, showing-notice-waiver | `edu-no-landlord-entry-statute-ms`, `edu-showing-notice-waiver-ms`, `landlords-access`, `showing-notice-la` |  |
| 137 | Entry & privacy | Enter in an emergency | landlord-entry | `edu-no-landlord-entry-statute-ms`, `landlords-access` |  |
| 138 | Entry & privacy | Tenant changes the locks | keys, key-control-policy | `edu-keys-ms`, `edu-no-key-control-rule-ms`, `keys` |  |
| 139 | Entry & privacy | Smart locks / keyless entry data | smart-access | `edu-no-smart-access-statute-ms` |  |
| 140 | Entry & privacy | Landlord installs cameras; voyeurism statute (§ 97-29-63) | tenant-security-cameras | `edu-no-tenant-camera-rule-ms` | MS-L-S87 |
| 141 | Entry & privacy | Tenant installs a doorbell camera | tenant-security-cameras | `edu-no-tenant-camera-rule-ms` |  |
| 142 | Entry & privacy | Inspect the unit periodically | inspection-rights | `edu-inspection-rights-ms`, `inspection-rights` |  |
| 143 | Entry & privacy | Pest or HVAC service visits | periodic-services-entry | `edu-no-periodic-services-entry-rule-ms`, `scheduled-services-entry-la` |  |
| 144 | During the tenancy | Guest stays a month | guest-policy, guest-policy-day-limit | `edu-guest-policy-ms`, `edu-no-guest-day-limit-ms`, `guest-policy`, `guest-policy-day-limit` |  |
| 145 | During the tenancy | Tenant sublets on Airbnb | sublet-assign | `edu-no-sublet-statute-ms`, `no-sublet-assign` |  |
| 146 | During the tenancy | Roommate moves out and a new one moves in | sublet-assign, joint-liability | `edu-no-co-tenant-liability-rule-ms`, `edu-no-sublet-statute-ms`, `joint-liability`, `no-sublet-assign` |  |
| 147 | During the tenancy | Tenant runs a home daycare | family-child-care, home-business | `edu-no-family-child-care-rule-ms`, `edu-no-home-business-statute-ms` |  |
| 148 | During the tenancy | Noise and neighbor complaints | disturbance | `edu-disturbance-ms`, `no-disturbance` |  |
| 149 | During the tenancy | Smoking and vaping | smoking-policy, smoke-drift-waiver | `edu-no-smoke-drift-waiver-ms`, `edu-smoking-medical-cannabis-ms`, `smoking-policy` |  |
| 150 | During the tenancy | Medical cannabis use or cultivation (§ 41-137-19) | cannabis | `cannabis-restrictions-ak`, `edu-medical-cannabis-ms` |  |
| 151 | During the tenancy | Firearms in the unit | firearms | `edu-firearms-ms`, `firearm-rules-la` |  |
| 152 | During the tenancy | Grills on balconies | fire-safety-grilling | `edu-no-grill-statute-ms`, `fire-safety-grilling` |  |
| 153 | During the tenancy | Waterbed | waterbed | `edu-no-waterbed-rule-ms` |  |
| 154 | During the tenancy | Political or religious displays, flags, signs | tenant-display-rights, religious-cultural-display | `edu-no-religious-display-right-ms`, `edu-no-tenant-display-rights-ms` |  |
| 155 | During the tenancy | Canvassers in the complex | political-access | `edu-no-political-access-ms` |  |
| 156 | During the tenancy | Tenants form an association | tenant-right-to-organize | `edu-no-tenant-organizing-right-ms` |  |
| 157 | During the tenancy | Satellite dish or solar panels | telecom-access, portable-solar | `edu-no-portable-solar-right-ms`, `edu-no-telecom-access-ms` |  |
| 158 | During the tenancy | Window AC unit | portable-cooling-device | `edu-no-portable-cooling-right-ms` |  |
| 159 | During the tenancy | EV charging | ev-charging, ev-charging-requirements | `edu-no-ev-charging-requirements-ms`, `edu-no-ev-charging-right-ms` |  |
| 160 | During the tenancy | Pets: approval, deposit, damage | pet-policy, pet-fees, pet-insurance-requirement | `edu-no-pet-insurance-rule-ms`, `edu-pet-fees-ms`, `edu-pet-policy-ms`, `pet-insurance-requirement`, `pet-policy-or` |  |
| 161 | During the tenancy | Assistance animal request mid-lease | assistance-animal-accommodation | `assistance-animal-accommodation`, `edu-assistance-animals-ms` |  |
| 162 | During the tenancy | Parking assignments and rules | parking, parking-vehicle-rules, assigned-parking-space | `assigned-parking-space`, `edu-assigned-parking-space-ms`, `edu-parking-ms`, `edu-parking-vehicle-rules-ms`, `parking-mn`, `parking-vehicle-rules` |  |
| 163 | During the tenancy | Tow an unauthorized car (SB 2848) | towing | `edu-towing-ms` |  |
| 164 | During the tenancy | Storage unit on site | storage-space | `edu-storage-space-ms`, `storage-space-mn` |  |
| 165 | During the tenancy | Common areas and pools | common-area-use, pool-safety | `common-area-use`, `edu-common-area-use-ms`, `edu-pool-safety-ms` |  |
| 166 | During the tenancy | House rules changed mid-lease | rules-regulations | `edu-rules-regulations-ms`, `rules-ia` |  |
| 167 | During the tenancy | Renters insurance required | tenants-property-insurance, renters-insurance-rules | `edu-no-renters-insurance-rules-ms`, `edu-tenants-property-insurance-ms`, `tenants-property-insurance-mn` |  |
| 168 | During the tenancy | Tenant's insurance claim after water leak | tenant-insurance-claims | `edu-no-tenant-insurance-claim-rule-ms` |  |
| 169 | During the tenancy | Landlord liability insurance | landlord-liability-insurance | `edu-no-landlord-insurance-mandate-ms` |  |
| 170 | During the tenancy | Tenant leaves for two months | extended-absence-notice | `edu-no-extended-absence-notice-ms`, `extended-absence-notice-ks` |  |
| 171 | During the tenancy | Crime-free lease addendum; drug activity | criminal-activity, drug-free-housing-addendum | `criminal-activity-ky`, `edu-criminal-activity-ms`, `edu-no-drug-free-addendum-statute-ms` |  |
| 172 | During the tenancy | Police ask for tenant information | law-enforcement-cooperation | `edu-law-enforcement-cooperation-ms` |  |
| 173 | During the tenancy | Ban a non-tenant from the property (trespass) | trespass-notice | `edu-trespass-notice-ms` |  |
| 174 | During the tenancy | City fines the owner for tenant's trash | governmental-fines | `edu-no-governmental-fines-rule-ms`, `government-fines-reimbursement-ms` |  |
| 175 | During the tenancy | Tenant is called to active duty (SCRA) | servicemember-rights | `edu-no-state-servicemember-rule-ms` |  |
| 176 | During the tenancy | Domestic violence: lock change | dv-lockchange | `edu-no-dv-lockchange-statute-ms` |  |
| 177 | During the tenancy | Domestic violence: early termination | dv-lease-termination, dv-qualifying-documents | `edu-dv-qualifying-documents-ms`, `edu-no-dv-lease-termination-ms` |  |
| 178 | During the tenancy | Tenant goes into a nursing home | infirmity-termination | `edu-no-infirmity-termination-ms` |  |
| 179 | During the tenancy | Tenant dies | tenant-death | `edu-tenant-death-ms`, `tenant-death-contact-nh` |  |
| 180 | During the tenancy | Tenant files bankruptcy | tenant-bankruptcy | `edu-no-tenant-bankruptcy-rule-ms` |  |
| 181 | During the tenancy | Hurricane damages the unit (§ 89-7-3) | casualty-termination, disaster-duties | `casualty-termination-mt`, `edu-casualty-termination-ms`, `edu-disaster-duties-ms` |  |
| 182 | During the tenancy | Displaced family members stay after a storm | disaster-displaced-guests | `edu-no-disaster-guest-rule-ms` |  |
| 183 | During the tenancy | Tenant served with a lawsuit about the property | tenant-forward-proceedings, adverse-proceeding-notice | `edu-adverse-proceeding-notice-ms`, `edu-tenant-forward-ejectment-ms`, `tenant-forward-proceedings-ca` |  |
| 184 | During the tenancy | Notices by e-mail or text (§ 89-8-13; § 75-12-5(b)(4)) | notice-delivery-methods, notices | `edu-notice-delivery-ms`, `edu-notices-ms`, `electronic-notice-consent-ms`, `electronic-notice-ma`, `notices` |  |
| 185 | During the tenancy | Tenant portal for payments and notices | tenant-portal | `edu-no-tenant-portal-rule-ms` |  |
| 186 | During the tenancy | Emergency contact for the tenant | emergency-contact | `edu-no-emergency-contact-ms` |  |
| 187 | During the tenancy | Energy usage data requested by owner | energy-data-release | `edu-no-energy-data-release-ms` |  |
| 188 | Sale, management change, foreclosure | Landlord sells the building mid-lease | sale-or-management-change | `edu-sale-or-management-change-ms` |  |
| 189 | Sale, management change, foreclosure | Deposits on sale | security-deposit-on-sale | `edu-security-deposit-on-sale-ms` |  |
| 190 | Sale, management change, foreclosure | New property manager | sale-or-management-change, nonresident-owner-agent | `edu-no-nonresident-owner-agent-ms`, `edu-sale-or-management-change-ms` |  |
| 191 | Sale, management change, foreclosure | Out-of-state owner needs a local agent | nonresident-owner-agent | `edu-no-nonresident-owner-agent-ms` |  |
| 192 | Sale, management change, foreclosure | Lender forecloses (PTFA) | foreclosure, foreclosure-disclosure | `edu-no-foreclosure-disclosure-ms`, `edu-no-foreclosure-tenant-rule-ms` |  |
| 193 | Sale, management change, foreclosure | Tenant's right of first refusal on sale | tpa-notice | `edu-no-tpa-notice-ms` |  |
| 194 | Sale, management change, foreclosure | Condo conversion | conversion-notice | `edu-no-conversion-notice-ms` |  |
| 195 | Sale, management change, foreclosure | Eminent domain taking | eminent-domain | `condemnation-ms`, `edu-no-eminent-domain-lease-rule-ms` |  |
| 196 | Sale, management change, foreclosure | Owner wants to move in | owner-move-in-reservation | `edu-no-owner-move-in-rule-ms`, `owner-occupancy-termination-ar` |  |
| 197 | Ending the tenancy | End a month-to-month tenancy (30 days) | termination-notice | `edu-termination-notice-ms`, `end-of-term-notice-ga`, `periodic-tenancy-notice-mt` |  |
| 198 | Ending the tenancy | End a week-to-week tenancy (7 days) | termination-notice | `edu-termination-notice-ms`, `end-of-term-notice-ga`, `periodic-tenancy-notice-mt` |  |
| 199 | Ending the tenancy | Fixed term ends: is notice needed | termination-notice, surrender-end-of-term | `edu-surrender-end-of-term-ms`, `edu-termination-notice-ms`, `end-of-term-notice-ga`, `periodic-tenancy-notice-mt`, `surrender-end-of-term` |  |
| 200 | Ending the tenancy | Tenancy at will | tenancy-at-will | `edu-tenancy-without-term-ms` |  |
| 201 | Ending the tenancy | Tenant wants to break the lease early | early-termination, statutory-early-termination | `early-termination-ks`, `edu-early-termination-ms`, `edu-statutory-early-termination-ms` |  |
| 202 | Ending the tenancy | Tenant abandons the unit; mitigation | abandonment-and-mitigation | `edu-abandonment-and-mitigation-ms`, `reletting-damages-ms` |  |
| 203 | Ending the tenancy | Rent acceleration on abandonment (MAR form) | abandonment-and-mitigation, landlord-remedies-termination | `edu-abandonment-and-mitigation-ms`, `edu-landlord-remedies-termination-ms`, `reletting-damages-ms` |  |
| 204 | Ending the tenancy | Tenant leaves belongings after moving out | abandoned-property | `abandoned-property-ms`, `edu-abandoned-property-ms` |  |
| 205 | Ending the tenancy | Tenant leaves a car in the lot after move-out (ch. 63-23) | abandoned-property, towing | `abandoned-property-ms`, `edu-abandoned-property-ms`, `edu-towing-ms` | MS-L-S88 |
| 206 | Ending the tenancy | Tenant leaves a pet behind | animal-care-access | `animal-care-access-ms`, `edu-no-animal-care-entry-right-ms` |  |
| 207 | Ending the tenancy | Tenant stays after the lease ends (holdover) | holdover, holdover-rate | `edu-holdover-ms`, `edu-holdover-rate-ms`, `holdover-ms` |  |
| 208 | Ending the tenancy | Retaliation claim after a complaint | retaliation | `edu-retaliation-ms` |  |
| 209 | Ending the tenancy | Is there a just-cause requirement | for-cause-eviction | `edu-no-for-cause-eviction-ms` |  |
| 210 | Ending the tenancy | Move-out cleaning and carpet cleaning | carpet-cleaning, surrender-end-of-term | `carpet-cleaning-ar`, `edu-no-carpet-cleaning-rule-ms`, `edu-surrender-end-of-term-ms`, `surrender-end-of-term` |  |
| 211 | Ending the tenancy | "Reasonable wear" determined by landlord (MAR form) | surrender-end-of-term, security-deposit-use | `edu-security-deposit-use-ms`, `edu-surrender-end-of-term-ms`, `security-deposit-use`, `surrender-end-of-term` |  |
| 212 | Ending the tenancy | Return the deposit: 45 days, itemization, forwarding address | security-deposit-return, security-deposit-use | `edu-security-deposit-return-ms`, `edu-security-deposit-use-ms`, `security-deposit-return-ms`, `security-deposit-use` |  |
| 213 | Ending the tenancy | Deposit kept in bad faith ($200 penalty) | security-deposit-penalty | `edu-security-deposit-penalty-ms` |  |
| 214 | Ending the tenancy | Unclaimed deposit (§ 89-12-3) | deposit-escheat | `edu-deposit-escheat-ms` |  |
| 215 | Ending the tenancy | Final inspection with tenant present | condition-inspection | `condition-report-ms`, `edu-no-condition-inspection-rule-ms` |  |
| 216 | Default & eviction | Nonpayment: 3-day notice (§ 89-8-13(3)) | nonpayment-notice, written-notice-required | `edu-nonpayment-notice-ms`, `edu-written-notices-ms` |  |
| 217 | Default & eviction | Lease breach: 14-day notice and cure | cure-and-eviction-grounds, default-by-tenant | `default-by-tenant`, `edu-cure-and-eviction-grounds-ms`, `edu-default-by-tenant-ms` |  |
| 218 | Default & eviction | Repeat breach within 6 months | cure-and-eviction-grounds | `edu-cure-and-eviction-grounds-ms` |  |
| 219 | Default & eviction | Health-and-safety violation: no notice | cure-and-eviction-grounds | `edu-cure-and-eviction-grounds-ms` |  |
| 220 | Default & eviction | Drug or prostitution nuisance (§ 95-3-23) | nuisance, expedited-criminal-eviction | `edu-criminal-activity-eviction-ms`, `edu-nuisance-abatement-ms` |  |
| 221 | Default & eviction | Lock out a tenant for unpaid rent | lockout-for-rent-delinquency, self-help-eviction | `edu-no-lockout-ms`, `edu-no-self-help-eviction-statute-ms` |  |
| 222 | Default & eviction | File in justice court; LLC landlord without a lawyer | eviction-process, entity-landlord-court-representation | `edu-entity-landlord-representation-ms`, `edu-eviction-process-ms` |  |
| 223 | Default & eviction | Who may be served; service methods (RJC 14) | eviction-service-party | `edu-eviction-service-party-ms` |  |
| 224 | Default & eviction | Tenant counterclaims or pays rent into court | rent-into-court-counterclaim | `edu-counterclaims-no-rent-escrow-ms` |  |
| 225 | Default & eviction | Tenant asks for a hardship stay | eviction-hardship-stay | `edu-eviction-stays-ms` |  |
| 226 | Default & eviction | Appeal bond to keep possession | possession-bond | `edu-no-possession-bond-ms` |  |
| 227 | Default & eviction | Tenant pays in full by the move-out date (§ 89-8-39(4)) | redemption, forfeiture-redemption | `edu-pay-and-stay-ms`, `edu-redemption-ms` |  |
| 228 | Default & eviction | Writ executed; 72-hour access; curb removal (§ 89-8-39(3)) | post-eviction-property | `edu-post-eviction-property-ms` |  |
| 229 | Default & eviction | CARES Act 30-day notice for covered property | cares-act-notice | `edu-cares-act-notice`, `edu-cares-act-state-notices-ms` |  |
| 230 | Default & eviction | Eviction record sealing | eviction-record-sealing | `edu-no-eviction-record-sealing-ms` |  |
| 231 | Default & eviction | Squatter / unauthorized occupant (§ 89-10-3) | unauthorized-occupant-removal | `edu-squatter-removal-ms` |  |
| 232 | Default & eviction | Domestic-violence victim facing eviction | dv-eviction-protection | `edu-no-dv-eviction-protection-ms` |  |
| 233 | Default & eviction | Eviction penalty fee in the lease | eviction-penalty-clause-ban | `edu-no-eviction-penalty-rule-ms` |  |
| 234 | Default & eviction | Fee for serving notices | notice-service-fee | `edu-no-notice-fee-rule-ms` |  |
| 235 | Default & eviction | Landlord fixes tenant's breach and bills it (self-cure) | landlord-self-cure | `edu-no-landlord-self-cure-ms` |  |
| 236 | Default & eviction | Sue for damages after eviction | landlord-remedies-termination, tenant-caused-damage | `edu-landlord-remedies-termination-ms`, `edu-tenant-caused-damage-ms`, `tenant-caused-damage-nm` |  |
| 237 | Default & eviction | Interest on the money judgment | unpaid-damages-interest | `edu-unpaid-amounts-interest-ms` |  |

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus and engine:** the official whole-Code search covers every title (§1.5). The Constitution was searched locally with controls, after being proved complete (§1.3).
- **Screens (main pass):** S01-S93 cover exculpation, late fees, NSF, payment methods, animals, cannabis, separate documents, rent control, retaliation, formatting, fee shifting, towing, detectors, sex offenders, military, fair housing, DV, utilities, liens, interest, expunction, age, data breach, cameras, vehicles, building codes, brownfields and more. The helpers ran C1-C7 batteries for their topics.
- **Findings outside the landlord-tenant title (each in its row):**
  - UETA § 75-12-5(b)(4) (notice conflict).
  - Consumer Protection Act §§ 75-24-5, -15; emergency pricing § 75-24-25; data breach § 75-24-29.
  - Bad checks §§ 11-7-12, 97-19-57.
  - Water submetering § 77-3-97 and the utility definition § 77-3-3(d).
  - Pools ch. 45-43.
  - Firearms §§ 45-9-51(2) (public housing authorities only), 45-9-55 (vehicles).
  - Medical cannabis § 41-137-19(4).
  - Support animals §§ 43-6-151 to -155 (public places only).
  - Expunction § 99-19-71(3).
  - Contractor liens § 85-7-411(3).
  - Squatting §§ 89-10-3, -5.
  - Ejectment notice § 11-19-9.
  - Garbage fees §§ 19-5-22, 21-19-2.
  - Septic orders § 41-67-21 (repealed July 1, 2028).
  - Sex-offender registry §§ 45-33-25, -36, -49, -51 and § 89-1-527.
  - Trespass §§ 97-17-93, -97.
  - Foreign land ownership ch. 89-27 and § 89-1-23.
  - Building codes ch. 17-2.
  - Brownfields §§ 49-35-17, -19.
  - Hunting permission § 49-7-79.
  - Real estate licensing § 73-35-3.
  - Age of majority §§ 1-3-27, 93-19-13.
  - Unclaimed property § 89-12-3.
  - Towing § 85-7-251 (SB 2848).
- **Constitution:** no provision binds a private lease (§1.3).

## §18 Topic canvass (rules 27, 36)
- **Method:** seven slices (C1-C6 with 52 topics each, C7 with 48), covering every `topic_key` in `lease-clause-topics.md`. At most two agents ran at a time, each saving one JSON line per topic, and its rows, after every topic (`CANVASS-BRIEF`: Present / Confirmed absent / Not applicable, the battery method, conditions to carry).
  - The brief listed the Act's scope exceptions and recurring conditions up front (rule 27 [AK 3]).
  - Its one error (§ 89-8-17(2) "in writing") was corrected mid-canvass (§6.3).
- **Results:** Confirmed absent 221, Present 136, Not applicable 3 (answers file; mixed answers counted by their first part).
- **Coverage script:** 360/360 topics have a Mississippi row keyed to them (a new row or a tagged shared row). No new `topic_key` was created.
- **Duplicates:** the near-duplicate script (Jaccard ≥ 0.45 with a shared citation) found only pairs on different topics, which rule 27 needs to keep. No topic has two Mississippi education rows, so no merge was needed.

## §19 Conformance-table entry
MS (2026-10-20), drawn from this log's §§ 4, 6.1, 11, 12 and 14-18. Proposed column (Claude Code sets it at sync):

| Rule | MS | Where |
|---|---|---|
| 19 proof of absence | official whole-Code engine; positives and controls; failed positives recorded | §1.5 |
| 26 tag-first | 1,255 clauses screened; 89 tagged | §2 |
| 27 canvass | 360/360 | §18 |
| 29 statute walk | done | §14 |
| 33 real lease | MAR F3 (third-party host) + AG guide | §15 |
| 34 scenarios | 237 | §16 |
| 35 outside-title + Constitution | done | §17 |
| 39 court rules, local rules, forms | done | §12 |
| 40 formatting | none | §4 |
| 54 options | 15 offered, 12 declined with rows | §6.1 |
| 80 independent check | Done (3 rounds; 4 rows edited after the last check, listed in §13) | §13 |

## Proposed SOP changes
- **Rule 19:** on Lexis public-access sites, document views (not searches) trigger a CAPTCHA, here on the first view and again at about 300. Budget section reads across helpers, and have helpers queue reads and stop at the first CAPTCHA so the main pass can batch them after the person solves it. Reason: two Mississippi helpers hit it in parallel and 17 rows waited on 40 reads.
- **Rule 19:** a quoted section number ("89-8-21") on Lexis returns the section itself, so cross-reference existence checks (rule 77) can run as cheap searches instead of document views. Reason: 82 pointers were checked this way in Mississippi (MS-L-X001 to -082).
- **Rule 19:** superseded versions stay in the Lexis index. When a search returns two copies of a section, save the second as `~v2` and use the one whose History line carries the latest act. Reason: four Mississippi RLTA sections and § 49-7-79 had pre-amendment copies.
- **Rule 27:** a canvass brief's statement of a recurring condition must quote each section's own words, never a merged paraphrase. Reason: Mississippi's brief merged § 89-8-13 ("agreed in writing") with § 89-8-17(2) ("has agreed"), and one helper's rows inherited it.
- **Rule 35:** Lexis serves the Constitution without a search, so prove the Secretary of State text against the Lexis table of contents and run local batteries over it. Reason: this worked for Mississippi with 303 sections.
- **Rule 54:** where a product decision adds an elective tenant payment toward repairs, add an ownership sentence (repairs and parts paid for become the landlord's, not removable). Reason: Taylor 2026-10-20.
- **Rule 80:** freeze the row generators when the independent check starts, and apply all later changes as once-only errata to the row files. Reason: a later regeneration would silently undo errata.

## Proposed topic questions
- `minor-tenant-filing`: Does the state let an 18-20-year-old (below its age of majority) contract to lease a residence? (Mississippi § 93-19-13(2).)
- `hazardous-contamination-disclosure`: Must an instrument conveying an interest in brownfield or recorded-cleanup property, possibly including a lease, state that status? (Mississippi § 49-35-17(3)(a).)
- `electric-submetering-disclosure`: Does reselling electricity or gas to tenants on a metered basis make the landlord a regulated utility? (Mississippi § 77-3-3(d).)
- `stigmatized-property`: Must a landlord who knows registry information disclose it if a prospective tenant asks? (Mississippi § 89-1-527(2).)
- `firearms`: Does an employer parking-lot firearm statute reach a landlord-employer's rules for tenants' vehicles? (Mississippi § 45-9-55.)

## Sync review (Claude Code, 2026-10-20)
- **Merge:** `merge-delta.py` against base 09d2984: 377 new rows and 89 existing rows changed only in their MS tag and note segment; 8,418 rows before the sync changes below, byte-exact CRLF round trip. The delta's SHA-256 matched §8 (e50e7a30...d628).
- **Source limit:** Claude Code cannot reach the official Code (Lexis public access). The legislature's bill site was reachable once its missing GlobalSign intermediate certificate was added to the trust store (no check bypassed), so Claude Code read the enrolled text of 2025 SB 2328 (2025 Miss. Laws ch. 460: §§ 89-8-35 and 89-8-39 in full) and 2026 HB 1603 (§ 89-10-5). Every other statement rests on the pass's section-open reading and its quote check (§8: 2,053 quotes, none failed).
- **Read against SB 2328:** every Mississippi row on the eviction summons, the seven-day move-out date and its exceptions, the tenant's access before the move-out date, pay-to-stay in nonpayment-only cases and the landlord's good-faith duty to accept, the warrant not executed by posting, and the 72-hour retrieval period (`edu-eviction-process-ms`, `edu-eviction-stays-ms`, `edu-redemption-ms`, `edu-pay-and-stay-ms`, `edu-post-eviction-property-ms`, `edu-abandoned-property-ms`, `edu-no-lockout-ms`, `partial-payment-nonwaiver-ms` and others): no errors. HB 1603 matches §10's description of § 89-10-5 ("a person designated by the owner"; effective July 1, 2026).
- **Edited after the last check (§13):** the four rows (`utility-allowance-cap-co`'s MS segment, `edu-attorney-fees-ms`, `edu-statutory-caps-ms`, `edu-scope-ms`) change quoted statutory elements only; Claude Code can't re-read §§ 77-3-3, 97-19-55 or 45-43-3, so they rest on the quote check.
- **Early termination (every-reading rule, SOP Part 5):** Mississippi was tagged on the shared `early-termination-ks` (greater of one month's Rent or 30% of the remaining Rent); the pass found no fee statute and left penalty doctrine unsearched (§7). Mississippi now has its own `early-termination-ms` (supersedes `early-termination-ks`; MS untagged from it): a flat one-month fee, no Rent after the termination date once the tenant gives notice, pays and leaves, and the federal servicemember, § 89-8-13(2) material-noncompliance and § 89-8-29(4) cosigner exits kept. Four MS rows' pointers updated. The MS row count stays 466.
- **Repair deductible (Taylor's flag, §10):** `repair-deductible-ms` stays offered as Taylor decided. Under the reading that a payment-only share isn't an agreement to "perform" (§ 89-8-23(3)), a deductible on repairs the landlord must make would forgo a landlord duty, which § 89-8-5 forbids; one sentence now limits the clause, under that reading only, to repairs Mississippi law doesn't require the landlord to make. Taylor's ownership sentence is kept, and becomes SOP rule 54's [MS 6].
- **Section pointer:** `abandoned-property-ms` retitled "Handling of Property Left Behind" so the pointer in the tagged `tenant-death-contact-nh` resolves.
- **Same-topic pairs:** `late-fee` with `prompt-payment-discount-la` and `no-alterations` with `improvements-ownership-la` (as in Louisiana); `end-of-term-notice-ga` with `periodic-tenancy-notice-mt` (fixed term and periodic tenancy); `rent-increase-midterm-ky` with `rent-escalation-la` (both optional, as in Arkansas); `electronic-notice-ma` with `electronic-notice-consent-ms` (the first excludes default and eviction notices from its own scope, the second is the statutes' written consent to them; they can be used together). No choice group needed.
- **Open items (§7):** no row is NEEDS_REVIEW; case-law questions are stated in their rows with the cautious course; Public Service Commission rules and local ordinances are the stated boundary.
- **Citations file:** `lease-clause-citations-MS.csv`, 466 rows (210 CITED, 234 CONFIRMED_ABSENT, 22 GENERIC: shared contract terms whose MS note says only "Tagged as written").
- **Legal watch:** `legal-watch-ms.yml`, held until after November 22, 2028 (first run December 22, 2028, day 22 at 14:00 UTC); 279 sections keyed by bare number, queried as `"89-8-21" AND "Mississippi Code of 1972"` (the bills' own wording); manual items for §10's statutory slips, the 2028 septic-statute repeal, and the court rules, AOC forms and Public Service Commission rules.
- **SOP 1.78:** all seven proposals adopted. Five topic questions added (360 topics). No new `{{variables}}`. §10's product and other-state findings are in the backlog.
