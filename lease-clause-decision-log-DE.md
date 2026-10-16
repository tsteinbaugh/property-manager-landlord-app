# Lease clause decision log — Delaware (DE, state #45)
- **Pass:** staged 2026-10-16 10:29 (kickoff); run 2026-10-16 in one chat (Delaware's only Desktop chat, rule 8; no earlier output files existed, so none were deleted). SOP v1.72.
- **Settings:** Opus, high effort. Research mode was **not** turned on. The rule 9 triggers were met inside the pass: proof of absence and cross-chapter gap search by 482 logged batteries over the full hash-verified corpus (§1.5); ambiguous statute language was settled by section-open reads and recorded as legal or drafting judgments (§6.3).
- **Deliverables:** `lease-clauses-DE-delta.csv` (387 rows, 17 columns, master header, CRLF; SHA-256 5dca663d00dc422f04b5226c4efaf69b0df84f29526bed5b61603a61c671e42f) and this log.
- **Coverage:** state law verified, not all law for the property (rule 4). Not searched anywhere: case law, the Delaware Administrative Code (regulations), local ordinances and municipal charters (flagged where met, rule 3).

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A: files, counts, channel, corpus proof | Done | §1.1 |
| Currency and dated versions (rule 16) | Done | §1.2 |
| Dormant rows (rule 25) | Done | §5 |
| Tag-first screen, all 1,078 active clauses (rules 26-28) | Done | §2 |
| Topic canvass, all 351 topics (rules 27, 36) | Done | §18 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Step D screens (rules 40-53) | Done | §4, §11 |
| Optional clauses (rule 54) | Done | §6.1 |
| Integrity checks (rule 71 §8) | Done | §8 |
| Independent check (rule 80), 3 rounds | Done | §13 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A counts (rule 23):** the attached `lease-clauses.csv` (SHA-256 7570d86886fa883b7caa4f5b0a4d16003d4f613c869d2491d7ee11e61e34644c) has 6,261 rows, 6,150 active (1,078 lease clauses, 5,072 education rows); all 44 per-state active counts match the kickoff by script.
- **First request with my own tools** (kickoff): the shell's request to delcode.delaware.gov was refused at the proxy (`CONNECT tunnel failed, response 403`); WebFetch was rejected ("web-fetch budget for this session could not be checked").
- **Channel used: Claude Code's corpus** `corpus-DE-20261016.zip` (SHA-256 00ea7dc8474d8cc28543bc7aa3e2638d1189750f484457d4451ebe83fee44c1e, matching the `.sha256` file and the kickoff), unzipped into its own folder; no corpus script was run.
- **Hashes:** 3,192 of 3,192 saved files match `manifest.jsonl` (3,193 requests: 3,192 HTTP 200, 1 HTTP 404 for a stale 2017 copy); no file on disk is outside the manifest.
- **Completeness (rule 19):** a section parser over every delcode page found 2,453 pages with section lists; every one of the 23,444 listed section links has its `SectionHead` on the page (23,230 unique title-section pairs; two-version sections counted twice). 10,015 internal links from index pages were followed: 9 links are missing, all to version-suffixed subchapter pages of 13 Del. C. ch. 8 (`c008/sc01_1` to `sc09_1`, Uniform Parentage Act, second version), outside this library's scope — reported for the crawler (§10). The Constitution's HTML page is a table of contents only; its text was taken from the authenticated PDF and split into 206 sections, matching the 206 '§ N.' entries of the official contents page.
- **Live match (Taylor's built-in browser, approved at Step A):** in-page `fetch` of 4 delcode pages; raw-byte SHA-256 equal to the manifest for all 4 (title25/c051/sc01, c053, c055, c057), and the normalised text of 10 sections (§§ 5107, 5111, 5118, 5305, 5314, 5501, 5509, 5514, 5702, 5716A) equal by hash to the corpus.
- **Fetched outside the zip (Taylor's browser, legis.delaware.gov), so the next state's zip can include them:** bill pages and text of 85 Del. Laws c. 494 (SB 292) and c. 436 (SS 1 for SB 116), HB 437 (technical corrections, signed Sept. 30, 2026), SB 235 (c. 358, manufactured-home rent increases, out of scope); a full scan of the 1,962 items of the 153rd General Assembly's legislation list (99 pages) for signed bills touching landlord-tenant law and for bills signed after the Sept. 10, 2026 compilation date. Saved notes with browser SHA-256 of each text in `src/acts/`. Weaker method (rule 14): browser-only channel; bill texts were read and hashed in the browser and the relied-on sections quoted, not saved whole.
- **Real lease** (§15): one PDF fetched and parsed in the browser with pdf.js.

### §1.2 Currency and dated versions (rule 16)
- **Currency statement** (delcode home page): the Code 'is considered an official version' and 'includes all acts enacted as of September 10, 2026, up to and including 85 Del. Laws, c. 518'. The corpus holds session-law chapters 1-296 only (all the legislature has posted); chapters 297-518 are compiled but unposted.
- **Title 25 sections citing vol. 85 chapters above 296** (script over history lines): c. 320 (§ 2120), c. 358 (§§ 7052, 7052A, manufactured homes), c. 383 (§ 504), **c. 436** (§§ 5502, 5716A, 7016), **c. 494** (§§ 5102, 5141, 5512, 5512A, new versions).
- **85 Del. Laws c. 436** (SS 1 for SB 116 w/ SA 1, HA 1, HA 2; signed Aug. 18, 2026): 'Section 4. This Act is effective September 1, 2026.' It lengthened the § 5502(a) demand to 7 days, made the notice say the landlord may file a court action, struck the written-reservation-of-rights exception from § 5502(c)-(d) (strike-through confirmed from computed text-decoration on the engrossed page), and added the § 5716A redemption right with an 18-month look-back. The AG Summary (Oct. 2024) predates it (still says 5 days and a reservation of rights); rows say so.
- **85 Del. Laws c. 494** (SB 292, "The Grace Peterson Act", signed Sept. 9, 2026): 'Section 5. (a) This Act takes effect 6 months after its enactment into law. (b) Section 5512A of Title 25 applies to rental agreements entered into on or after [the effective date of this Act].' The Code prints the new versions as effective Mar. 8, 2027; the bill page says 3/9/27. **Asked Taylor (§6.2): both dates stated, comply from Mar. 8, 2027.** The new § 5141 inserts a definition (19), so definitions (19)-(42) renumber on that date; rows cite both numbers where they cite (19) or above.
- **85 Del. Laws c. 98** (lead certification, approved July 21, 2025): §§ 5402-5409, 5411-5413, 5305(a)(6) and 5704A are implemented the earlier of 12 months after a DSHA notice in the Register of Regulations or March 1, 2028 (§ 5(2)). The Register was not searched.
- **85 Del. Laws c. 277** (rights and responsibilities guide, approved June 10, 2026): implemented the earlier of one year from enactment or a published notice; § 5124(e)-(f) 180 days later (§§ 5-6). No guide was found published.
- **85 Del. Laws c. 295** (key surrender, approved June 24, 2026): enacted as § 5123, codified as § 5125; no effective-date clause, so in force on approval (Del. Const. art. III, § 18, read).
- **85 Del. Laws c. 106** (record shielding, § 5720): effective 6 months after July 29, 2025 approval.
- **Other dated versions met:** 25 Del. C. § 5116 and 6 Del. C. § 4607 (versions effective Dec. 31, 2028; application note 84 Del. Laws c. 358, § 4, volume 84 not in the corpus, not read); 4 Del. C. §§ 1302, 1309, 1312, 1335, 1382 and 16 Del. C. § 4764A (versions effective Oct. 21, 2026; 'smoking' moves from § 1302(30) to (37)); 21 Del. C. § 4179; 6 Del. C. § 12D-103 (privacy thresholds change Jan. 1, 2027).
- **General revisory act (rule 16):** HB 437 (signed Sept. 30, 2026, after the compilation date) amends in Title 25 only § 7013 (manufactured homes); no section relied on is touched. **Acts signed after Sept. 10, 2026** (browser scan of status dates): none amends 25 Del. C. Part III or 6 Del. C. chs. 25 or 46. No special session was found in the legislation list.

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- Constitution: in the battery index (label CONST, 206 sections), proved by section count against the official contents page; the 'General Assembly|Legislature' control returns 1,196 hits in every run.
- Court rules: Justice of the Peace Court Civil Rules (PDF text, 85 rule blocks) and the 2025-2026 amendment orders (161378, 161388, 161408 have text; 161398, 161418, 161428 are scanned images and were not read — flagged §7). Supreme Court Rule 57 (entity representation) is not in the corpus. One parser artifact: the index entry for JP Civ. R. 57 also holds the tail of Rule 79 (§10).
- Administrative Code: not in the corpus; rows that would rest on regulations (fire prevention, DHSS lead and pool rules, Weights and Measures) say so.

### §1.4 Agents and usage
- **Triage of single-state clauses:** a script set aside 477 of 992 single-state clauses whose title or body names another state or its statute; two helpers (TA, TB; 257/258 clauses) read the other 515 in full against `DE-BRIEF` (Delaware law brief; quotes checked by script) and `TRIAGE-BRIEF`, one JSON line per clause, each in its own folder (rule 27).
- **Topic canvass:** four slices (C1-C4: 87/88/88/88 topics), two agents at a time, each saving one JSON line per topic; C3-C4 got an addendum of C1-C2 findings.
- **Independent check:** five agent runs, one at a time (§13).

### §1.5 Batteries (rule 19)
482 battery runs, all logged before any hit was read (`work/batteries.jsonl`), every one over an index labelled, from the loaded index, "ACT 296 ; AG 1 ; CODE 23444 ; CONST 206 ; RTR 1 ; RULE 85 ; total 24033". Prefixes: DE-F1 (9, formatting), DE-TA (13), DE-TB (33), DE-C1 (105), DE-C2 (99), DE-C3 (91), DE-C4 (121), DE-R1A (4), DE-R2 (7).
- **Controls:** each run carries a nonsense control (0 hits in every run) and a 'General Assembly|Legislature' control (1,196 in every run), generated in the same call.
- **Positives:** 96 runs had a positive that failed; every row citing one says so ("recorded as failed", rerun or backed by a whole-section read), checked by script (§8). The tool refuses reused names and real positives absent from the named section.
- **Engine:** Python regex over whitespace-collapsed section text, heading excluded from the body match; heading-only matches listed separately.

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,078 active clauses. The 86 shared or blank-states clauses were read one by one in the main pass; the 992 single-state clauses were triaged (§2.3).
- **Result:** Delaware is tagged on 37 existing rows: 36 shared clauses and the federal education row `edu-cares-act-notice` (kickoff). Each tag note opens "DE: Tagged as written (tag-first screen, rules 26-28, DE log §2.1; sections cited were read section-open)".

### §2.1 Tagged DE as written (37)
`rent-payment`, `due-at-signing`, `application-of-payments`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utility-service-continuity`, `utility-payment-evidence`, `tenant-maintenance`, `no-alterations`, `joint-liability`, `services-utilities-provided-ks-oh`, `utilities-paid-by-landlord`, `appliances-included`, `possession-delay-ca`, `notices`, `governing-law`, `severability`, `tenants-property-insurance-ks-oh-ca`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `parking-ks-oh-ca`, `assigned-parking-space`, `storage-space-ks-oh-ca`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `inspection-rights`, `lead-based-paint`, `tenant-forward-proceedings-ca`, `rental-application-accuracy`, `edu-cares-act-notice`.
- **Fee screens (kickoff, rule 26):** Delaware's upfront-fee rule is the ban on 'any nonrefundable fee as a condition for occupancy' except optional service fees (25 Del. C. § 5311), with the application-fee cap and "assurance money" ban (§§ 5310, 5514(d)). `keys` and `hoa-compliance` pass the fee screen (replacement, re-key and pass-through fines are reimbursement, not occupancy fees) and Delaware has no domestic-violence lock-change statute; both are nonetheless replaced by Delaware versions for other reasons (`keys-de`: the § 5509(a) lock right and § 5125 key procedure; `hoa-compliance-de`: the § 81-320(g) rules-delivery duty). `parking-vehicle-rules` fails (towing; tag charge) and is replaced.
- **Federal row:** `edu-cares-act-notice` reads correctly; §§ 5106(e), 5107(d), 5108(c) defer to federal law for subsidized units.

### §2.2 Clauses read in the main pass and not tagged (50), with reasons
- **Class decision (rule 26, rule 52): "Landlord is not liable" disclaimers and landlord indemnities.** A rental agreement shall not provide that a tenant 'Agrees to the exculpation or limitation of any liability of the landlord arising under law or to indemnify the landlord for that liability' (25 Del. C. § 5301(a)(3)); knowing enforcement costs 'an amount equal to 3 months rent' (§ 5301(b)). Not tagged: `services-utilities-provided`, `tenants-property-insurance`, `parking`, `storage-space` (the -ks-oh variants are tagged), `pet-policy` (indemnity and "without liability" removal; replaced by `pet-policy-de`).
- **Class decision: attorney's-fee and fee-shifting sentences.** 'No provision in a rental agreement providing for the recovery of attorneys’ fees by either party ... shall be enforceable.' (§ 5111). Not tagged: `default-by-tenant`, `default-by-tenant-co`, `default-by-tenant-ks-ne` (fees or "reasonable costs and expenses"); replaced by `default-by-tenant-de`.
- **Class decision: tenant chores in the lease.** § 5305(c) requires 'a conspicuous writing, separate from the rental agreement' for every dwelling (rule 48, Oklahoma branch). Not tagged: `landscaping-irrigation`, `snow-removal`; the optional `maintenance-allocation-de` and education rows answer the topics.
- `late-fee`, `late-fee-ne`: free grace period (Delaware bars a late charge within 5 days, 8 without an in-county payment place; counted under § 5112) and an overstated non-waiver sentence after c. 436 → `late-fee-limit-de`.
- `returned-payments`, `returned-payments-ky`: Delaware's dishonored-check rule lets the parties set terms in writing (6 Del. C. § 1301A(c)) → optional `returned-payment-fee-de`.
- `security-deposit-use`: purpose list broader than § 5514(c)'s closed list → `security-deposit-use-de`. `security-deposit-return` (blank parent): clock "after Tenant vacates" → `security-deposit-return-de`.
- `utilities-responsibility`, `utilities-responsibility-ky`: direct provider contracts barred unless separately metered (§ 5312(b)) → `utilities-responsibility-de`. `utility-allowance-cap-co`: separate charges only if separately metered; utility charges are rent (§ 5312(a), (e)).
- `acceptable-payment-methods`, `acceptable-payment-methods-nj`: unilateral method changes vs § 5502(c) and § 5511(a)(6); NJ's EFT rule → `acceptable-payment-methods-de`.
- `no-sublet-assign`: "sole discretion" consent and STR ban vs § 5508(b) → `no-sublet-assign-de`.
- `landlord-maintenance`, `landlord-maintenance-nd`: "improper use" exception relieves the § 5305(a) duty → `landlord-maintenance-de`.
- `landlords-access`, `landlords-access-mi`: 24 hours, business hours vs 48 hours, 8-9 (§ 5509(b)) → `landlords-access-de`.
- `possession-delay`: 30-day wait cuts the § 5304(a)(1) right → `possession-delay-ca` tagged.
- `surrender-end-of-term` and -mn-nd, -ks-ne, -nh: no Delaware route for left property; no § 5125 key procedure → `surrender-end-of-term-de`.
- `early-termination`, `early-termination-ks`: fee not excluded for § 5314 exits; abandonment limb broader than § 5507(d) → `early-termination-de`.
- `holdover`, `holdover-ca`: trigger misses § 5108's automatic month-to-month; measure not Delaware's (§ 5515(b)) → `holdover-de`.
- `pet-policy-or`: calls a pet deposit a security deposit (§ 5141(33) defines them apart) → `pet-policy-de`.
- `parking-vehicle-rules`, `parking-vehicle-rules-id`: towing for abandoned/expired-registration vehicles and charged tags; Delaware towing law (21 Del. C. §§ 6903A-6904A) → `parking-vehicle-rules-de`.
- `keys` → `keys-de`; `hoa-compliance` → `hoa-compliance-de` (§2.1).
- `assistance-animal-accommodation`, `-ne`: the direct-threat denial reaches a blind tenant's guide dog (16 Del. C. § 9505(d)) → `assistance-animal-accommodation-de`.
- `extended-absence-notice-ks`: lawful but narrower (willful only, no writing) and rests on Kansas's statute → `extended-absence-notice-de`.
- `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`: rest on Colorado's statute; Delaware has no tenant EV-charging statute (`edu-no-tenant-ev-charging-right-de`).
- `rules-ia`, `rules-wi`: Iowa/Wisconsin standards → `rules-de` (§ 5511).
- `rent-concession-wi`, `rent-installments-or`: rest on their states' statutes; topics answered by `edu-no-rent-concession-rule-de`, `edu-rent-installments-de`.
- `electronic-notice-ma`: replaced by `electronic-communications-consent-de` (UETA §§ 12A-105, 12A-108; § 5113 service).
- `tenant-death-contact-nh`: points to a property-left-behind section Delaware doesn't have; a contact has no role under § 5719 (`edu-tenant-death-de`).

### §2.3 Single-state clauses (rule 26 triage)
- 992 single-state clauses. 477 name another state or its statute in title or body: not taggable as written.
- 515 read in full by the two helpers: RESTS_ON_OWN_STATE 342, CONFLICT 114, NEEDS_DE_VERSION 44, NEEDS_MAIN_PASS 12, TAGGABLE 3.
- The 3 TAGGABLE verdicts (`criminal-activity-or`, `due-at-signing-ca`, `landlord-maintenance-mt`) each rest on their own state's statute in notes, so the basis check (rule 26, OR 5) sends them to Delaware's own rows (`criminal-activity-de`; the base `due-at-signing` is tagged; `landlord-maintenance-de`). No single-state clause is tagged.
- NEEDS_MAIN_PASS (12) resolved: `rent-increase-midterm-wv` (no Delaware authority; § 5107 renewals; `edu-rent-escalation-de`); `returned-payments-ok/-wi` (`returned-payment-fee-de`); `tenant-death-contact-mt` (§ 5719, not tagged); `assistance-animal-accommodation-ne` and `criminal-activity-ky` (Delaware rows); `government-fee-reimbursement-ky` (§ 5311; `edu-no-government-fee-passthrough-rule-de`); `association-approval-fl`, `habitability-baseline-mn`, `landlord-maintenance-nm/-ny`, `holdover-nd` (rest on own statutes; Delaware rows cover the topics).
- Leads used: § 5105 owner disclosure, § 5514(b) account, § 5125 keys, § 5509(a) lock right, 6 Del. C. § 1301A, 4 Del. C. § 1307, 16 Del. C. §§ 6631-6634 and 6601C-6605C, 16 Del. C. § 9505(d), 25 Del. C. ch. 40, 21 Del. C. ch. 69A, 25 Del. C. § 316.

## §3 New rows (rule_type, basis, citation)
### §3.1 DE lease clauses (38 new, plus 2 dormant rows rewritten)
`lease_clause_basis` across the 40: SERVES_LANDLORD 27, REQUIRED_DISCLOSURE 7 (each written "REQUIRED_DISCLOSURE: <cite>", e.g. "REQUIRED_DISCLOSURE: 25 Del. C. § 5105(a)"; the table shows the class only), CONSTRAINED_TERM 6. Overrides (`supersedes` set; each note says "Overrides `id`", or "Replaces" for the blank parent): 17. Optional ("[Optional.]" or a use note): 16.
| Row | rule_type | basis | topic_key | supersedes | key citations |
|---|---|---|---|---|---|
| late-fee-limit-de | CONSTRAINED | CONSTRAINED_TERM | late-fee | late-fee | § 5501(d); § 5502(c)-(d); § 5112; c. 436 |
| landlords-access-de | CONSTRAINED | CONSTRAINED_TERM | landlord-entry | landlords-access | § 5509; § 5507(b) |
| showing-notice-waiver-de | CONDITIONAL | SERVES_LANDLORD | landlord-entry | | § 5509(b) |
| security-deposit-use-de | REQUIRED/PROHIBITED | CONSTRAINED_TERM | security-deposit-use | security-deposit-use | § 5514(a), (c), (i) |
| security-deposit-return-de | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | security-deposit-return | § 5514(e)-(h) |
| security-deposit-account-de | REQUIRED | REQUIRED_DISCLOSURE | security-deposit-holding | | § 5514(b), (g)(2) |
| utilities-responsibility-de | CONSTRAINED | CONSTRAINED_TERM | utilities-responsibility | utilities-responsibility | § 5312(a), (b), (i) |
| utility-submetering-de | CONDITIONAL | SERVES_LANDLORD | utility-submetering-disclosure | | § 5312(a)-(g) |
| utility-nonconsumption-charges-de | CONDITIONAL | SERVES_LANDLORD | utility-apportionment | | § 5312(i) |
| no-sublet-assign-de | CONSTRAINED | CONSTRAINED_TERM | sublet-assign | no-sublet-assign | § 5508 |
| default-by-tenant-de | REQUIRED | SERVES_LANDLORD | default-by-tenant | default-by-tenant | §§ 5502, 5513, 5111, 5711, 5716A |
| surrender-end-of-term-de | RECOMMENDED | SERVES_LANDLORD | surrender-end-of-term | surrender-end-of-term | §§ 5125, 5507(e), 5715(e)-(f), 5120 |
| keys-de | RECOMMENDED | SERVES_LANDLORD | keys | keys | §§ 5509(a), 5125, 5311 |
| pet-policy-de | CONSTRAINED | CONSTRAINED_TERM | pet-policy | pet-policy | §§ 5514(i), 5301(a)(3)-(4), 5141(33) |
| rules-de | CONDITIONAL | SERVES_LANDLORD | rules-regulations | | § 5511 |
| holdover-de | RECOMMENDED | SERVES_LANDLORD | holdover | holdover | §§ 5515(b), 5108 |
| owner-disclosure-de | REQUIRED | REQUIRED_DISCLOSURE | owner-identity-disclosure | | § 5105 |
| ag-summary-receipt-de | REQUIRED | REQUIRED_DISCLOSURE | tenant-rights-statement | | § 5118 |
| rights-guide-receipt-de | CONDITIONAL | REQUIRED_DISCLOSURE | tenant-rights-statement | | § 5124(c); c. 277, §§ 5-6 |
| rtr-materials-receipt-de | REQUIRED | REQUIRED_DISCLOSURE | required-disclosures | | § 5606 |
| lead-certification-de | CONDITIONAL | REQUIRED_DISCLOSURE | lead-safe-certification | | §§ 5406-5407; c. 98, § 5 |
| maintenance-allocation-de | CONDITIONAL | SERVES_LANDLORD | tenant-repair-agreement | | § 5305(c) |
| casualty-termination-de | CONDITIONAL | SERVES_LANDLORD | casualty-termination | | §§ 5309, 5702(8), 5101(a) |
| tenant-caused-damage-de | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage | | §§ 5302(e), 5306(b), 5307(b), 5308, 5309(a) |
| criminal-activity-de | CONDITIONAL | SERVES_LANDLORD | criminal-activity | | §§ 5513(b), 5702(9), 5316; 4 Del. C. § 1307 |
| landlord-maintenance-de | RECOMMENDED | SERVES_LANDLORD | landlord-maintenance | landlord-maintenance | §§ 5305(a), 5505, 5513(a)(2) |
| acceptable-payment-methods-de | RECOMMENDED | SERVES_LANDLORD | acceptable-payment-methods | acceptable-payment-methods | §§ 5501(d)-(e), 5502(c)-(d), 5716A(b) |
| early-termination-de | RECOMMENDED | SERVES_LANDLORD | early-termination | early-termination | §§ 5314(b), 5514(c)(3), 5507(d) |
| parking-vehicle-rules-de | RECOMMENDED | SERVES_LANDLORD | parking-vehicle-rules | parking-vehicle-rules | 21 Del. C. §§ 6903A-6904A, 4402 |
| assistance-animal-accommodation-de | REQUIRED | SERVES_LANDLORD | assistance-animal-accommodation | assistance-animal-accommodation | 16 Del. C. § 9505(d); § 5514(i)(3) |
| hoa-compliance-de | RECOMMENDED | SERVES_LANDLORD | hoa-compliance | hoa-compliance | § 81-320(g)-(h) |
| tenant-employee-de | CONDITIONAL | REQUIRED_DISCLOSURE | tenant-employee-housing (new) | | § 5123 |
| furnishings-de | CONDITIONAL | SERVES_LANDLORD | furnishings-included | | § 5514(a)(4) |
| returned-payment-fee-de (C1) | CONDITIONAL | SERVES_LANDLORD | returned-payments | | 6 Del. C. § 1301A |
| tax-escalation-de (C1) | CONDITIONAL | SERVES_LANDLORD | tax-escalation | | § 5315 |
| deposit-increase-de (C1) | CONDITIONAL | SERVES_LANDLORD | deposit-installments | | § 5514(j) |
| extended-absence-notice-de (C1) | CONDITIONAL | SERVES_LANDLORD | extended-absence-notice | | §§ 5506, 5507 |
| seasonal-nonrenewable-lease-de (C3) | CONDITIONAL | SERVES_LANDLORD | seasonal-tenancy | | § 5102(4) |
| electronic-communications-consent-de (C3) | CONDITIONAL | SERVES_LANDLORD | notice-delivery-methods | | 6 Del. C. §§ 12A-105, 12A-108 |
| cannabis-restrictions-de (C3) | CONDITIONAL | SERVES_LANDLORD | cannabis | | 4 Del. C. § 1307; 16 Del. C. § 4905A |

### §3.2 DE education rows (310)
- From the canvass 307 (C1 70, C2 86, C3 70, C4 81; two renamed at merge: `edu-rental-application-expunged-records-de`, `edu-retaliation-de`), plus 3 from the main pass (`edu-holdover-rate-de`, `edu-tenant-maintenance-agreement-de`, `edu-snow-removal-de`). 130 are absence rows (`edu-no-...`).
- **Canvass answers (351 topics):** Present 151, Confirmed absent 132, Answered by main-pass row 68, Not located 0, Not applicable 0. Every topic has a Delaware row keyed to it (§8).

### §3.3 Shared rows changed
- 37 existing rows changed only in `states` (";DE" appended), `notes` (DE segment appended) and `last_checked` (2026-10-16). Checked by script: no other field changed, and each row's old notes are an unchanged prefix (§8).
- The dormant `late-fee-limit-de` and `landlords-access-de` are rewritten in place (§5).

## §4 Layout and placement table (rule 40)
**Batteries:** DE-F1-TYPESIZE, -BOLD, -UNDERLINE, -CAPITALS, -CONSPIC, -SEPDOC, -FORM, -PLAIN, -SIGNPLACE, all over the whole index with no tenancy limb, run as soon as the corpus was loaded and before drafting (synthetic positives in the statute's style passed; real positives § 5305 and § 5105 passed CONSPIC; § 5305 and § 5509 passed SEPDOC). Hits were filtered to sections with tenancy words and read.
| Rule | Where | Applies to residential leases? | Library handling |
|---|---|---|---|
| 'prominently disclose' owners and agents | 25 Del. C. § 5105(a) | Yes, every written rental agreement | `owner-disclosure-de` (capitalised heading, own section; builder should place it early) |
| 'conspicuous writing, separate from the rental agreement' (tenant repairs) | § 5305(c) | Yes, every dwelling | `maintenance-allocation-de` as its own document |
| 'signed addendum ... or other separate signed document' (showing-notice waiver) | § 5509(b) | Yes | `showing-notice-waiver-de` as a separate signed addendum with its own control sentence |
| 'separate signed writing' style rules for CIC rules/declarations | 25 Del. C. ch. 81 (§ 81-320) | Only delivery of rules, no format | `hoa-compliance-de` |
| written disclosure form, or lease/addendum (tenant employees) | § 5123(b) | Yes, for tenant employees | `tenant-employee-de` |
| Type-size/bold rules (6 Del. C. §§ 4303-4312 retail installment, § 7604 lease-purchase of goods, § 2423B foreclosure, 24 Del. C. § 2931 CMA, 18 Del. C. § 2062 self-storage insurance) | various | No (goods, foreclosure, brokers, insurance) | none |
| 'clearly and conspicuously' automatic-renewal disclosure | 6 Del. C. § 2734 | No: 'Leases subject to the Residential Landlord-Tenant Code' excluded (§ 2734(d)(4)) | `edu-automatic-renewal-de`; § 2732(4) cancellation rule is not excluded (`edu-no-fee-transparency-rule-de`) |
| Plain-language guidelines (unintelligible words, confusing order, equal prominence) | 6 Del. C. §§ 2732(1), 2733; § 2736 ($50,000 cap) | Yes, knowing or reckless distortion in a consumer lease of $50,000 or less | `edu-plain-language-leases-de`; library text is plain |
| Writs must carry statutory notice text | 25 Del. C. § 5715(e)(3), (f)(3) | Court documents, not leases | `edu-post-eviction-property-de` |
No two rules claim the same place in the lease, so no ordering question arose.

## §5 Dormant rows resolved (rule 25)
- `late-fee-limit-de` (dormant, LEASE_CLAUSE, UNVERIFIED; a statement of the 5%/5-day/8-day limits): verified against § 5501(d) and § 5112 (live-site hash match of § 5501). It is **rewritten and activated** with the same id as Delaware's late-fee clause (CONSTRAINED, CONSTRAINED_TERM, supersedes `late-fee`, topic `late-fee`), adding the weekend-and-holiday counting, one charge per late payment, "additional Rent", and the § 5502(c)-(d) acceptance rule.
- `landlords-access-de` (dormant, LEASE_CLAUSE, UNVERIFIED; 48 hours and 8-9 but "right of reasonable access", no tenant-requested-repair exception, no lock right): verified against § 5509 (live match) and **rewritten and activated** with the same id (topic `landlord-entry`).

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Each is offered as optional ("[Optional.]" or a use note), never as a default.
| Clause | Verdict | Why |
|---|---|---|
| Holdover premium rate | Declined, education row `edu-holdover-rate-de` | Statutory ceiling (double rent, prorated daily, § 5515(b)) |
| Landlord casualty termination | Offered: `casualty-termination-de` | No statute; mutual, preserves § 5309; judgment §6.3 |
| Tenant-caused damage (54t) | Offered: `tenant-caused-damage-de` | Fault exceptions in §§ 5302(e), 5306(b), 5307(b), 5309(a); § 5308 preserved by name |
| Crime-free/criminal activity | Offered: `criminal-activity-de` | § 5513(b), § 5702(9); victims and lawful marijuana carved out |
| Statutory waivers (jury, exemption, notice) | Declined | Waivers of Code rights void (§ 5301(a)(1)); jury right § 5713 (`edu-jury-waiver-unenforceable-de`); exemption waiver needs husband and wife jointly (10 Del. C. § 4912; `edu-exemption-waiver-de`); confession of judgment void (§§ 5121, 5301(a)(2)) |
| Eviction-fee / attorney-fee clause | Declined | § 5111; court costs only (§ 5711(a)); `edu-attorney-fees-de`, `edu-eviction-penalty-fees-barred-de` |
| Showing-notice waiver | Offered: `showing-notice-waiver-de` | § 5509(b), separate signed addendum |
| Extended-absence notice | Offered: `extended-absence-notice-de` | § 5506 'may require in the rental agreement' |
| Deposit increase with rent | Offered: `deposit-increase-de` | § 5514(j) 'If the rental agreement so specifies' |
| Separately metered utility charges | Offered: `utility-submetering-de` | § 5312(a) 'Only if the rental agreement so provides' |
| Non-consumption utility pass-through | Offered: `utility-nonconsumption-charges-de` | § 5312(i) |
| Tenant maintenance agreement | Offered: `maintenance-allocation-de` | § 5305(c) |
| Returned-payment fee above § 1301A limits | Offered: `returned-payment-fee-de` | 6 Del. C. § 1301A(c) 'agreeing in writing' |
| Property-tax pass-through | Offered: `tax-escalation-de` | § 5315 'shall not affect any contract' |
| Furnished-unit inventory (deposit-cap exemption) | Offered: `furnishings-de` | § 5514(a)(4) |
| Seasonal nonrenewable rental (coastal hundreds) | Offered: `seasonal-nonrenewable-lease-de` | § 5102(4) |
| E-mail for routine communications | Offered: `electronic-communications-consent-de` | 6 Del. C. § 12A-105 |
| Marijuana growing/smoking ban; possession ban in three cases | Offered: `cannabis-restrictions-de` | 4 Del. C. § 1307 |
| Early-termination buyout | Offered: `early-termination-de` | Contract option; fee excluded for § 5314 exits |
| Possession grounds "unless otherwise agreed" (§ 5702) | Declined, recorded in `edu-cure-and-eviction-grounds-de` | Reads as letting a lease narrow the landlord's grounds; widening them would conflict with § 5101(a); serves no landlord |

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A, recommendation "Yes"): Taylor chose "Yes (Recommended)". That approved the 10-section live match and fetching sources missing from the zip where a row depends on them.
2. **85 Del. Laws c. 494 effective date** (rule 16; Code Mar. 8, 2027 vs bill page Mar. 9, 2027): Taylor chose "Both, Mar. 8 (Recommended)": rows state both dates and tell landlords to comply from Mar. 8, 2027; flagged for the legal watch (§10).
No other question was needed: the remaining calls were legal or drafting judgments (§6.3).

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Late-charge counting:** the 5-day bar and the 3-day extension are each periods under 7 days, so § 5112 excludes intermediate weekends and holidays; the clause's floor is 5 such days, or 8 (3 + 5) without an in-county payment place.
- **Entry window:** the 8:00 a.m.-9:00 p.m. limit is read as applying to every non-emergency entry, including tenant-requested repairs (cautious reading of § 5509(b)).
- **Short-term rentals:** treated as subleases, so conditioned on consent not unreasonably withheld (§ 5508(b)), not banned.
- **Casualty termination:** a mutual right that adds to § 5309 doesn't 'conflict' under § 5101(a); offered narrowly (unfit and not repairable within a stated time). No case law searched.
- **Pet rent** is periodic rent, not a § 5311 nonrefundable fee; nonrefundable pet fees are steered away.
- **Holdover:** the statutory measure is a ceiling; the clause says "up to ... as the court determines".
- **Security deposit account disclosure** classed REQUIRED / REQUIRED_DISCLOSURE: the statute requires disclosure without a vehicle; the lease is used.
- **Attorney's fees:** after round 2, the default clause bars only fees "under this Lease", so statutory fee awards (e.g. 6 Del. C. § 4613(c)) are untouched.
- **c. 494 dates:** comply from the earlier date (Taylor, §6.2).
- **Fixed terms under 1 year without notice:** § 5108's conversion covers only terms of 1 year or more; the holdover clause's trigger is "ended under this Lease and Delaware law" and `edu-termination-notice-de` tells landlords to give the 60-day notice in every case.

## §7 Open items, each with its search boundary
1. **Regulations not read** (Administrative Code not in the corpus): DHSS lead rules (§ 5411) and the c. 98 implementation notice; State Fire Prevention Regulations (detector placement, code editions); Weights and Measures metering rules; DHSS pool and water rules. Rows that touch them say so and claim only the statutes.
2. **Unread acts:** 84 Del. Laws c. 358, § 4 (application of the Dec. 31, 2028 § 5116/§ 4607 versions); 80 Del. Laws c. 71, § 2 (applicability of § 5312(i)); 84 Del. Laws c. 454, § 4 (29 Del. C. ch. 106 sunset Sept. 30, 2026; extension not checked).
3. **Court materials:** JP Court amendment orders 161398, 161418, 161428 (scanned images, not OCR'd); Supreme Court Rule 57 (not in corpus); Superior Court rules on tenant notice in foreclosure (10 Del. C. § 5061(c)).
4. **Case law:** none searched anywhere; rows that turn on it say "no published case was searched" (penalty doctrine for buyout fees; casualty termination; furnished-unit definition; whether a § 5502 demand may rest on a late charge alone; reasonableness of refusing a short-term sublease).
5. **Register of Regulations:** not searched for the DSHA lead notice or the § 5124 guide notice.
6. **Local law:** Wilmington, Newark, Dover, New Castle County rental licensing, inspection and ordinances (including a Wilmington ordinance on written notice of tenant rights in leases, seen only as a search result title); flagged, not resolved (rule 3).
7. **No row is NEEDS_REVIEW.** Rows touching unread sources state only what the statutes say (Part 5 policy).

## §8 Integrity checks on the delta
Run by script on the final delta (`work/checks-final.txt`, `work/quotecheck.json`, `work/citecheck.json`, `work/normalize-log.json`); every structural check passes.
| Check | Result | Detail |
|---|---|---|
| Duplicate ids | 0 | 387 rows |
| Dangling `supersedes` | 0 | 17 supersedes, each matching its "Overrides `x`" / "Replaces" note (generated check, rule 22) |
| Blank `verification_status` | 0 | 387 VERIFIED |
| Groups | all valid | 3 education rows use Compliance & Prohibited Terms |
| Lease clauses without basis | 0 | 40 DE clauses |
| Shared rows: fields other than states/notes/last_checked changed | 0 | 37 rows; old notes a verbatim prefix in each |
| Topic coverage | 351 of 351 topics have an active DE row keyed to them | new topic `tenant-employee-housing` |
| rule_type values | all valid | |
| Notes start with "DE:" (DE rows) / DE segment (shared rows) | all | |
| Batteries cited in notes | all logged; every cited run with a failed positive discloses it | 3 disclosures added by erratum |
| Quote check (rule 59) | 1,760 single-quoted passages: 1,678 found at their own citation; 80 found in another section the row cites (citation placement); 2 verified by eye (`edu-statutory-caps-de` § 5301(b); `edu-written-notices-de` § 5108(a): the checker inferred the wrong title) | library text quoted in double quotes (31 errata converted my own single quotes) |
| Bare-citation screen and expansion (rule 22, VT 2) | bare cites expanded by script after each errata round (each logged with old and inferred title in `normalize-log.json`; non-Title-25 expansions reviewed by hand; the last run expanded 3) plus hand expansions by erratum; the 19 remaining flags are list and range forms (e.g. '§§ 6702-6703') reviewed in context | outside quotes only |
| Session-law form | 1 normalised ('84 Del. Laws, c. 454' to '84 Del. Laws c. 454') | outside quotes |
| Pointer check on ids in notes and in this log | all backticked ids exist; the 15 remaining "pointer" flags are topic keys or search-term fragments in backticks, not row ids | `edu-confirmed-absences-misc-de` repointed to the renamed `edu-rental-application-expunged-records-de` |
| Variables (rule 60) | no new `{{variable}}`; no bracket next to a variable | `maintenance-allocation-de` uses bracket prompts only |
| Row-count arithmetic | 6,261 + 348 new = 6,609 rows after merge; active 6,150 + 348 + 2 reactivated = 6,500 | |
Basis screen (rule 79): every new row records "Read section-open (corpus ...)" and battery records; 0 of 348 new rows lack a basis; each of the 37 tag segments records its own basis.

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 37 tagged rows changed only in `states`, a DE note segment and `last_checked`. No propagation note is owed to any other state's log.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
1. **Legal watch dates:** Mar. 8, 2027 (or Mar. 9 per the bill page) for 85 Del. Laws c. 494 (§§ 5102, 5141 renumbering, 5512, 5512A, applying to agreements entered on or after it); June 10, 2027 and 180 days later for § 5124 (85 Del. Laws c. 277); March 1, 2028 at the latest for chapter 54 lead certification (c. 98, § 5(2)); Dec. 31, 2028 for § 5116 and 6 Del. C. § 4607; Oct. 21, 2026 for the 4 Del. C. ch. 13 versions (§ 1302 smoking definition renumbered); Jan. 1, 2027 for 6 Del. C. § 12D-103 thresholds.
2. **§ 5141 renumbering:** every row in any future Delaware work citing § 5141(19)-(42) needs both numbers from Mar. 8, 2027 (done in the delta).
3. **AG Summary out of date:** the Oct. 2024 summary that § 5118 requires landlords to hand out still states a 5-day nonpayment notice and a reservation-of-rights rule superseded by c. 436; rows warn landlords.
4. **Corpus/crawler:** 9 version-suffixed subchapter pages of 13 Del. C. ch. 8 (`c008/sc01_1`-`sc09_1`) were linked but not saved; the JP Civil Rules splitter merges the tail of Rule 79 into Rule 57; 6 Del. C. § 2735 is indexed under a malformed cite (`§ 2735`, thin-space id). Next stagings could add the session-law bill pages for chapters above 296 that amend Part III, the Register of Regulations notices, and OCR of scanned JP orders.
5. **Builder:** enforce the caps the clauses state: late charge ≤ 5% of monthly rent and grace ≥ 5 business days (8 without an in-county payment place) on `late-fee-limit-de`; security deposit ≤ one month's rent for terms of a year or more and month-to-month after a year, except furnished units; pet deposit ≤ one month's rent. No new `{{variables}}`.
6. **Other states:** Delaware is the first state where a statute makes a landlord's tenant-employee housing disclosure satisfiable in the lease (new topic `tenant-employee-housing`). The shared `assistance-animal-accommodation` denial sentence may need a guide-dog carve-out wherever a state has a guide-dog access statute without a direct-threat exception.
7. **Local flag:** Wilmington ordinance requiring landlords to give written notice of tenant rights in the lease (search result only).

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4; only § 5105(a) ('prominently'), § 5305(c) and § 5509(b) (separate writings) reach a residential lease.
- **41 Just-cause:** none. A term ends on 60 days' written notice (§ 5106(c)-(d)); a lease of a year or more becomes month-to-month without notice (§ 5108); situational limits: retaliation (§ 5516), domestic abuse victims (§ 5316), reentry-fund tenancies from Mar. 8, 2027 (§ 5512A), right-to-counsel materials (§ 5606); recorded in `edu-no-for-cause-eviction-de` (`for-cause-eviction`).
- **42 Required text in shared clauses:** § 5125 (key procedure if keys condition the deposit) carried in `surrender-end-of-term-de`; § 5514(b) account disclosure in `security-deposit-account-de`.
- **43 Cure promises:** `default-by-tenant-de` puts the no-cure carve-out in its own sentence reaching both limbs; the redemption right continues to execution (§ 5716A) and is left to law.
- **44 Terms turned into duties:** § 5307(a) reaches duties 'as agreed to in the a rental agreement' and § 5305(b) makes listed utilities duties; appliance and utility lists are tagged knowing that.
- **45 Electronic notices:** UETA applies only by agreement, withdrawable (6 Del. C. § 12A-105(b)-(c)); records must be retainable (§ 12A-108(a), (c)); Code notices keep the § 5113 methods (§ 12A-108(b)(2)); mail may be replaced only by an electronic postmark (§ 12A-108(d)(3)).
- **46 Lease as the required notice:** the lease carries the § 5105, § 5118, § 5606, § 5406-5407 and § 5123 items; optional separate writings carry their own control sentence.
- **47 Penalties for knowing use:** § 5301(b) (3 months' rent); Consumer Fraud Act for § 5124 and § 5512A violations (6 Del. C. § 2513); class decisions in §2.2.
- **48 Separate documents:** § 5305(c) every dwelling (Oklahoma branch); § 5509(b) showing waiver.
- **49 Collection costs:** § 5111 bars fee clauses; "costs and expenses" removed from the default clause; court costs only (§ 5711(a)); no reciprocal-fee statute.
- **50 "The lease controls" wording:** §§ 5305(b), 5312(a), (i), 5501(b), (d), 5502(c), 5506, 5507(c), 5508(a), 5509(b), 5514(j), 5702 and 6 Del. C. § 1301A(c) each made on purpose (§6.1).
- **51 Plain-language and consumer-contract statutes:** 6 Del. C. §§ 2732-2733 reach consumer leases of $50,000 or less (§ 2736); § 2734 excludes Code leases; Consumer Fraud Act general standard (`edu-consumer-fraud-act-leases-de`).
- **52 Exculpation:** voided (§ 5301(a)(3)); no-disclaimer variants used.
- **53 Figures contradicting shared clauses:** late-fee grace, deposit purposes, entry hours, possession-delay wait, holdover trigger, sublet consent, early-termination fee, re-rental cap — each replaced (§2.2).

## §12 Other Step C screens
- **30 Read beyond the section:** 25 Del. C. chs. 51, 53, 54, 55, 56, 57 read whole in the main pass; ch. 59 and the older general chapters (61, 63, 65, 67) screened by helpers; neighbouring sections read for every absence.
- **31 Enacted twice:** ch. 61 restates metering, rent preference, confession of judgment and taxes for non-Code tenancies; the Code versions (§§ 5312, 5517, 5121, 5315) govern residential leases. The JP Court Civil Rule 62(a) 10-day bar on writs and § 5717(d)'s 5-day appeal period both apply (`edu-no-eviction-hardship-stay-de`).
- **32 Place and size:** coastal hundreds (§ 5102(4)); owner-occupied 3-room buildings (§ 5512); small vs large property owners for lead (§ 5401(6), (16)); landlords with 3 or fewer units for right to counsel (§ 5602(a)(2)a.); DUCIOA communities after Sept. 30, 2009 (§ 81-116); 6 Del. C. § 4607(e) owner-occupied up to 4 units.
- **37 Tenancy type:** deposit cap by term length; § 5106(c) vs (d) notices; § 5108 for terms of a year or more; § 5314 30 days from the first of the next month; furnished units; § 5512A by agreement date; recorded in each row.
- **38 No imported structure:** Delaware's 7-day nonpayment demand, 7-day cure, 60-day termination, 45-day tenant notice and redemption to execution were each read in the statute.
- **39 Eviction duties:** writ notices and property storage (§ 5715), lock change after repossession (§ 5715(h)), eviction diversion (§ 5702A), lead documentation (§ 5704A, once implemented), shielding (§ 5720), right to counsel (ch. 56); JP Court Civil Rules read for timing.

## §13 Independent check (rule 80)
Brief: `check/CHECK-BRIEF.md`. It told each checker to check against the statute, not the notes; that earlier findings may be wrong; to print and read whole sections; to give exact old/new errata quoting every subsection relied on; and to save findings per row. Round 1 ran as three sequential agents (one at a time) over all 387 rows; rounds 2 and 3 re-checked only rows edited since, with the previous version of each edited field.
| Round | Rows checked | ERROR | FIX | NOTE | Errata applied | Result |
|---|---|---|---|---|---|---|
| 1 (R1a, R1b, R1c) | 387 | 5 | 112 | 71 | 117 | 93 rows edited |
| 2 | 94 (93 edited + `extended-absence-notice-de`, edited by the main pass) | 1 | 15 | 10 | 16 | 15 rows edited |
| 3 | 45 (15 edited in round 2 + 30 consistency rows on redemption, payment methods, deposit address and victim protection) | 0 | 18 | 5 | 18 | 16 rows edited |
- **Round-1 ERRORs (all fixed):** `edu-deposit-unclaimed-property-de` (12 Del. C. § 1183 penalty figures), `edu-no-fee-transparency-rule-de` (overstated § 2734(d)(4) exclusion), `edu-bed-bug-cooperation-de` (14 days run from notification, § 5317(d)(3)), `edu-code-scope-de` (dated versions of § 5102 swapped), one further R1b ERROR in the same bed-bug row's notes.
- **Round-2 ERROR (fixed):** `default-by-tenant-de`'s blanket no-attorney's-fees sentence would have reached statutory fee awards (§ 5301(a)(3)); now limited to fees under the Lease.
- Errata were applied by script with a once-only assertion (rule 80, RI 5); no erratum changed a `verification_status`.
- Many-row points the checkers raised and the pass applied: § 5141 renumbering; 4 Del. C. § 1302 renumbering; § 5514(h) address rule; § 5716A charity/government payments; § 5512A agreement-date limit; § 5112 counting; § 5606 Coordinator approval; scope of the want-of-due-care bars; § 5316 "where", not "because".

### Edited after the last check
Found by script: each final row was diffed against the version the round-3 checker saw. Claude Code reads these against the statute at sync (kickoff; rule 80).
| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| default-by-tenant-de | round 3 | round-3 erratum | body: redemption saving sentence ("the amounts Delaware law requires") |
| acceptable-payment-methods-de | round 3 | round-3 erratum | notes: § 5716A(b)(7) exception |
| edu-no-fee-listing-rule-de | round 3 | round-3 erratum | body and notes: charity/government exception |
| edu-deposit-penalties-de | round 3 | round-3 erratum | body: § 5514(g)(2) forfeiture grounds |
| edu-alternate-housing-de | round 3 | round-3 erratum | notes: cite for round-2 wording |
| edu-no-condemned-premises-rent-bar-de | round 3 | round-3 erratum | notes: cite |
| edu-dv-lockchange-de | round 3 | round-3 erratum | body: § 5316 "where" |
| edu-cure-and-eviction-grounds-de | round 3 | round-3 erratum | notes: cite |
| edu-default-remedies-de | round 3 | round-3 erratum | notes: § 5716A(b)(4) cite |
| edu-dv-eviction-protection-de | round 3 | round-3 erratum | body: § 5316(c)(8) "does not exceed" |
| edu-no-for-cause-eviction-de | round 3 | round-3 erratum | body: § 5316 conditions |
| edu-infirmity-termination-de | round 3 | round-3 erratum | body and notes: § 5719(b) service |
| edu-no-social-security-defense-de | round 3 | round-3 erratum | body: § 5716A(b)(7) |
| edu-waiver-by-acceptance-de | round 3 | round-3 erratum | body: redemption conditions |
| edu-assistance-animals-de | round 3 | round-3 erratum | notes: cite |
| edu-eviction-penalty-fees-barred-de | round 3 | round-3 erratum | notes: redemption quote |
| smoking-policy | round 3 | main pass | DE note segment: library text put in double quotes (rule 59) |
| maintenance-allocation-de | round 1 (not in rounds 2-3) | main pass | body: two `{{variables}}` next to brackets replaced by bracket prompts (rule 60); notes sentence on variables |
| edu-returned-payments-de, returned-payment-fee-de | round 1 (not in rounds 2-3) | bare-cite script | notes: '§ 1301A' expanded to '6 Del. C. § 1301A' |
| edu-bed-bug-cooperation-de | round 2 | bare-cite script | notes: '§ 5317' expanded to '25 Del. C. § 5317' |

## §14 Gap-discovery source 1 — statute walk (rule 29)
The core chapters were read whole, and each chapter's section index was diffed by script against every citation in the delta's DE rows and tag segments (1,040 distinct title-section pairs cited).
| Chapter | Sections | Reserved or repealed | Live | Uncited live sections |
|---|---|---|---|---|
| 51 | 26 | 1 (§ 5119) | 25 | § 5122 (equitable jurisdiction over converted conditional sales; no lease content) |
| 53 | 17 | 0 | 17 | none |
| 54 | 13 | 0 | 13 | § 5410 (feasibility committee) |
| 55 | 20 | 1 (§ 5518) | 19 | none |
| 56 | 7 | 0 | 7 | § 5604 (State Court Administrator duties) |
| 57 | 25 | 0 | 25 | §§ 5701A (court territories), 5701B (commercial bifurcation), 5714 (juror attendance) |
| 59 | 7 | 0 | 7 | none |
Each uncited section is administrative or commercial and needs no row. One level down: § 5141's definitions are cited where rows rely on them; § 5514 is cited subsection by subsection.

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Searches for a qualifying lease:** Delaware Association of REALTORS (members only; no free copy found), Delaware State Housing Authority and the Wilmington, Newark and Dover housing authorities (no lease posted), property managers in Newark and Wilmington (none found). Six searches; every free Delaware lease found was a vendor template.
- **Lease used (weaker, a lead only):** "DELAWARE RESIDENTIAL LEASE AGREEMENT" (ipropertymanagement.com, `Standard-Delaware-Residential-Lease-Agreement-Template.pdf`, 11 pages, with a Delaware "Landlord-Tenant Code Summary" acknowledgment page and the federal lead form; file SHA-256 e0d45220a3cbe501be2be22d5f04cec8c9e73af00cc724621e474aa8d83199c5; pdf.js text, 24,320 chars, SHA-256 a4286f8d197a81508a09463c3c055da02a422c76c2ad6cdafde4d7d3f95facec). It is a multi-state vendor template with Delaware pages, not a professional form; it is the best free Delaware-specific lease that exists. Weaker method: the extracted text was read in the browser and hashed there, not saved whole.
- **Mapped by topic (no text reproduced):** every topic is in the library. The template shows the errors a Delaware landlord meets in practice, each of which a Delaware row prevents: daily late fees (`late-fee-limit-de`); fees-first application (`application-of-payments`); deposit deductions for cleaning, brokerage and early-termination fees (`security-deposit-use-de`); an open return period (`security-deposit-return-de`); entry in "normal working hours" on a blank notice (`landlords-access-de`); automatic termination for non-delivery after a set wait (`possession-delay-ca`); tenant pays HVAC and plumbing repairs and needs consent to change locks (`landlord-maintenance-de`, `maintenance-allocation-de`, `keys-de`); per-pet fees and a hold-harmless (`pet-policy-de`); "Landlord shall not be liable" indemnification (class decision §2.2); removal of belongings on abandonment (`surrender-end-of-term-de`); tenant pays attorney's fees (`default-by-tenant-de`); a parking fee (`edu-fee-actual-services-de`); modifications "too expensive" for the landlord (`edu-disability-accommodation-de`). Its required-disclosure page lists only the AG summary and lead form; the library adds § 5105, § 5514(b), § 5606 and chapter 54 items. Its Code link (`title25/c053/index.shtml`) is an old URL form, not evidence of renumbering.
- **No new rows** came from the comparison; no shared-row change is suggested (rule 62).

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 149 generated (`work/scenarios.py`) from advertising and screening through move-in disclosures, deposits, rent and fees, utilities, repairs, entry, rules, pets, parking, casualty, victims, early termination, abandonment, move-out, sale, foreclosure, notices, eviction, redemption, death, bankruptcy and Delaware cases (coastal seasonal rentals, owner-occupied room rentals, tenant employees, reentry-fund tenancies, lead certification, the § 5124 guide).
- **Result:** each scenario maps to one or more existing DE row ids (checked by script; no missing id). Rows added from the screen: `tenant-employee-de` (new topic), `furnishings-de`, `hoa-compliance-de` (rules delivery).

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus:** the whole index ("ACT 296 ; AG 1 ; CODE 23444 ; CONST 206 ; RTR 1 ; RULE 85 ; total 24033"); the Constitution was loaded before any battery; every run's 'General Assembly|Legislature' control returned 1,196.
- **Found outside Title 25 Part III and used in rows:** 4 Del. C. § 1307 (marijuana); 6 Del. C. §§ 1301A (dishonored checks), 2513 and 2731-2737 (consumer fraud and consumer contracts), ch. 12A (UETA), ch. 12D (privacy), ch. 46 (fair housing); 10 Del. C. §§ 4912 (exemption waiver), 7107-7115 (nuisance abatement), 9301 (JP jurisdiction); 11 Del. C. §§ 4372-4376 (expungement); 12 Del. C. ch. 11 (unclaimed property); 16 Del. C. §§ 2612 (lead), 4905A (medical marijuana), 6601C-6605C and 6631-6635 (CO and smoke detectors), 9505-9506 (guide dogs); 21 Del. C. ch. 69A and § 4402 (towing); 25 Del. C. §§ 316 (flags), 2722 (construction liens), ch. 40 (abandoned property), ch. 81 (common interest communities); 26 Del. C. § 117 (utility shutoffs); 29 Del. C. ch. 106 (language access); 30 Del. C. § 2301 (licences, lodging tax); 31 Del. C. ch. 41 (State Housing Code).
- **Constitution:** firearms (art. I, § 20), jury (art. I, § 4), speech and religion read; the provisions bind the State ('The General Assembly shall make no law...' style) and settle no private lease clause (`edu-no-firearms-lease-statute-de`, `edu-jury-waiver-unenforceable-de`).

## §18 Topic canvass (rules 27, 36)
- **Method:** four slices (C1-C4), two agents at a time, each saving one JSON line per topic, briefed with `DE-BRIEF`, `CANVASS-BRIEF` (absence method, row format, citation format) and, for C3-C4, an addendum of C1-C2 findings; main-pass topics marked in each slice.
- **Answers (351 topics):** Present 151, Confirmed absent 132, Answered by main-pass row 68, Not located 0, Not applicable 0. 314 rows drafted (7 lease clauses, 307 education). Every topic has a DE row keyed to it (§8). The "optional lease terms" row (`edu-optional-lease-terms-de`) was re-read item by item: each of its 19 lease-invoked items has a clause or a recorded decline (§6.1).
- **Topics no state has a row for:** none listed in the topic reference.

## §19 Conformance-table entry
DE (2026-10-16), from this log's §§ 4, 6.1, 11, 12 and 14-18. It ran on SOP 1.72 under the usage budget and read every row section-open, so 79 is ✓. It offers casualty termination (`casualty-termination-de`), a criminal-activity clause (`criminal-activity-de`) and a tenant-caused-damage clause (`tenant-caused-damage-de`). Its "n" marks: a premium holdover rate (statutory ceiling, § 5515(b); declined with `edu-holdover-rate-de`), statutory waivers (§ 5301(a)(1); jury § 5713; confession of judgment §§ 5121, 5301(a)(2)) and an eviction-fee clause (§ 5111; court costs only, § 5711(a)). Rule 27: all 351 topics have DE rows.

## Proposed SOP changes
- Rule 16: when a recent act changes a definitions section by inserting a paragraph, list every renumbered paragraph and give both numbers in every row citing them until the old version expires (DE: 85 Del. Laws c. 494 renumbers 25 Del. C. § 5141 from (19) on, and 4 Del. C. § 1302's 'smoking' moves on Oct. 21, 2026; round 1 raised the renumbering on 27 rows).
- Rule 16: scan the legislature's full bill list for bills signed after the compilation's currency date, by status date, not only by subject (DE: HB 437 signed Sept. 30, 2026 was found only by date).
- Rule 22: run the bare-citation expansion after every errata round, not only before the check, and keep each run's log rather than overwriting it (DE: three citations added by errata needed expansion after the last check, and the earlier runs' totals were lost).
- Rule 59: a quote checker should treat a quote's citation as the nearest following parenthetical even when other words intervene, and fall back to every section the row cites before reporting a miss (DE: 80 quotes failed only on placement).
- Rule 19: a battery tool should report a failed positive in its printed summary line in a form a row can copy ("positive X recorded as failed"), so rows disclose it consistently (DE: 3 rows missed the disclosure).
- Rule 80: give round-1 checkers the same list of many-row points (dated renumbering, redemption conditions, address rules) as soon as the first slice reports them, and run a consistency set of rows on the same statute in the last round (DE: round 3's consistency set produced 12 fixes on § 5716A and § 5316 wording).
- Rule 33: when no free professional lease exists, record the searches made (DE: six) and use the best Delaware-specific template as a lead only; a vendor template's errors are still useful as a scenario source.

## Proposed topic questions
- `tenant-employee-housing` (new): Does a statute require a landlord who houses an employee to give a signed disclosure of occupancy and vacating conditions, satisfiable in the lease, and an offer of a rental agreement when the employer ends the job? (Delaware, 25 Del. C. § 5123.)
- `late-fee`: Is the late-fee grace period a statutory period under a time-computation statute that excludes weekends and holidays from short periods? (Delaware, 25 Del. C. §§ 5112, 5501(d).)
- `redemption`: Does a redemption statute let a charity's or government agency's check count as the tenant's payment and bar the landlord from restricting its method? (Delaware, 25 Del. C. § 5716A(b)(4), (7).)
- `assistance-animal-accommodation`: Does a guide-dog housing statute give blind tenants full access with no direct-threat exception? (Delaware, 16 Del. C. § 9505(d).)
- `hoa-compliance`: Must the unit owner deliver the community's rules to the tenant at lease signing, and does the tenant's duty to comply depend on it? (Delaware, 25 Del. C. § 81-320(g)-(h).)
- `plain-language`: Does a consumer-contract deceptive-practice statute reach residential leases below a dollar ceiling even though its automatic-renewal section excludes them? (Delaware, 6 Del. C. §§ 2732, 2734(d)(4), 2736.)

## Sync review (Claude Code, 2026-10-16)
- **Merge:** `merge-delta.py` against base 18aa2e6: 348 new rows, 37 shared rows changed only in their DE tag and note segment, `late-fee-limit-de` and `landlords-access-de` rewritten in place; 6,609 rows, byte-exact CRLF round trip. The delta's SHA-256 matched this log.
- **Edited after the last check (§13):** the bodies of `default-by-tenant-de`, `acceptable-payment-methods-de`, `edu-no-fee-listing-rule-de`, `edu-deposit-penalties-de`, `edu-dv-lockchange-de`, `edu-dv-eviction-protection-de`, `edu-no-for-cause-eviction-de`, `edu-infirmity-termination-de`, `edu-no-social-security-defense-de`, `edu-waiver-by-acceptance-de` and `maintenance-allocation-de` read against 25 Del. C. §§ 5106-5108, 5111, 5305, 5314, 5316, 5501, 5502, 5509, 5511, 5513, 5514, 5716A, 5719 and 6 Del. C. § 4603 in the corpus: no errors. The other rows in the table changed only in notes.
- **Statute spot-check:** §§ 5501(d) (late charge), 5502 (7-day demand, acceptance), 5514 (deposit cap, account, 20-day return, penalties), 5509 (entry, locks), 5111 (fee clauses), 5107-5108 (renewal, automatic month-to-month), 5507(d) and 5515(b) against `late-fee-limit-de`, `default-by-tenant-de`, `security-deposit-use-de`, `security-deposit-return-de`, `security-deposit-account-de`, `landlords-access-de`, `holdover-de` and `early-termination-de`: the clauses match.
- **One clause change (every-reading rule, SOP Part 5):** `early-termination-de`'s "one month's Rent or 30% of the Rent remaining for the Term, whichever is greater" is now a flat one month's Rent paid by the termination date that ends liability for later Rent, as in `early-termination-ct`, `-ri` and `-vt`. No case law was searched, and a fee that grows with the remaining Term is the part a court could treat as a penalty or as evading § 5507(d)'s lesser-of measure; a tenant who leaves without the option is left to § 5507(d).
- **Same-topic pairs:** the state filter showed two pairs, each a companion clause sharing its parent's key. `showing-notice-waiver-de` is now keyed `showing-notice-waiver` and `rights-guide-receipt-de` is keyed `rights-responsibilities-guide`, each with a topic question; no pairs remain and no other state's view changed.
- **Open items (§7) read at sync:**
  - **Register of Regulations** (every issue, August 2024 to October 2026, through the site's API): the Delaware State Housing Authority's notice implementing 84 Del. Laws c. 358 was published at 29 DE Reg. 630 (January 1, 2026), so the current §§ 5116 and 4607 have been in force since then (notes added to `edu-source-of-income-de`, `edu-voucher-processing-denial-de`). No notice yet under 85 Del. Laws c. 98 (lead certification) or c. 277 (§ 5124 guide); notes added to `lead-certification-de` and `rights-guide-receipt-de`, and both stay conditional.
  - **Unread acts:** 84 Del. Laws c. 358, § 4-5 (implementation; expiry December 31, 2028), 80 Del. Laws c. 71, § 2 (§ 5312(i) applies to agreements executed or renewed after August 29, 2015) and 84 Del. Laws c. 474, § 7 (lodging tax applies to short-term rentals from January 1, 2025) read on legis.delaware.gov; notes added. 84 Del. Laws c. 454, § 4 reads 'Unless extended by an act of the General Assembly, this Act expires 2 years after enactment' (approved September 30, 2024); no posted volume 85 chapter mentions it, and the Code, current through September 10, 2026, still prints the September 30, 2026 expiry, so 29 Del. C. ch. 106 has expired unless a later act revived it. Only `edu-no-tenant-protection-sunset-de` mentions it, and it states the expiry.
  - **Scanned JP Court orders:** read as page images. 161398 is the 2018 Rule 77(h)(3) fee schedule; 161418 and 161428 (May 18, 2021) raise Rules 13 and 4(b) to $25,000. `edu-rent-into-court-counterclaim-de` had given $15,000 "as the rule is published" (the compiled rules PDF still prints it); it now gives $25,000 from the 2021 order.
  - **Not read:** the State Fire Prevention Regulations and other Administrative Code chapters (the rows claim only the statutes and say so), case law, local ordinances. Supreme Court Rule 57 was not read.
- **NEEDS_REVIEW:** none; all 387 active Delaware rows are VERIFIED, and every topic has a Delaware row.
- **Citations file:** `lease-clause-citations-DE.csv`, 387 rows (252 CITED, 132 CONFIRMED_ABSENT, 3 GENERIC: shared rows whose DE note cites no section); every Code citation resolves to a section in the corpus.
- **Legal watch:** `legal-watch-de.yml`, held until after June 17, 2028 (first run July 17, 2028, day 17 at 14:00 UTC); 774 sections keyed `25|5514`, queried as `"5514" AND "Title 25"` (Delaware bills amend "§ 5514, Title 25 of the Delaware Code"); manual items for dated law, the unposted volume 85 chapters, and the summary, notices, court rules and regulations.
- **SOP 1.73:** all seven proposals adopted. Eight topic questions added (six from this log, two for the re-keyed companions); `tenant-employee-housing`, `showing-notice-waiver` and `rights-responsibilities-guide` are new topics (354). No new `{{variables}}`.
