# Lease clause decision log — Maine (ME, state #43)
- **Pass:** staged 2026-10-15 09:47 (kickoff); run 2026-10-15 in one chat (this is Maine's only chat, rule 8; no earlier output files existed, so none were deleted). SOP v1.69.
- **Settings:** Opus, high effort. Research mode was **not** turned on. The three rule 9 triggers (proof of absence, ambiguous statute language, cross-chapter gap search) were met with logged batteries over the full hash-verified corpus (§1.5, §17), which reaches further than research mode would.
- **Inputs:** `lease-clauses.csv` (5,526 rows, SHA-256 69e31ef8be68eb93738e458b37d485c3ccd38fc6f178b5f2faf7917686b5035f), `lease-clause-sop.md` v1.69, `lease-clause-topics.md` (349 topics), `log-format-example.md` (NH), `corpus-ME-20261010.zip`.
- **Delivered:** `lease-clauses-ME-delta.csv` (428 rows: 376 new Maine rows, of them 29 lease clauses and 347 education rows, plus 52 existing rows tagged ME) and this log.
- **Coverage:** Maine state law, verified (rule 4). Read: the Maine Revised Statutes (whole, 64 titles), all 2025-2026 public laws, the Constitution, the Maine Rules of Civil Procedure, the small-claims and e-filing rules, seven agency rules, and the Attorney General's model lease. Not read: case law, municipal ordinances, agency rules other than those seven, and federal law (except where a row says so).

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A: files confirmed (rule 23) | Done: 5,526 rows, 5,412 active (1,025 clauses, 4,387 education); every per-state count matched the kickoff | §1 |
| Source registry and corpus (rule 24) | Done: corpus channel; all 3,118 files hash-matched; completeness proved; 6 sections re-fetched and matched | §1.1 |
| Currency (rule 16) | Done: all 777 chapters of the 2025-2026 session laws screened; sections-affected indexes overlaid | §1.2 |
| Constitution, court and agency rules (rules 21, 35, 39) | Done | §1.3 |
| Dormant rows (rule 25) | Done: 2 of 2 resolved | §5 |
| Tag-first screen (rules 26-28) | Done: all 1,025 active clauses | §2 |
| Formatting batteries before drafting (rule 40) | Done | §4 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Topic canvass (rules 27, 36) | Done: 349 of 349 topics | §18 |
| Optional clauses (rule 54) | Done | §6.1 |
| Independent check (rule 80) | Done: 3 rounds | §13 |
| Integrity checks on the delta | Done: all pass | §8 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **First request with my own tools:** the shell's request to legislature.maine.gov was refused at the proxy (`CONNECT tunnel failed, response 403`). WebFetch of `title14sec6033.html` returned only a model summary, not the page text. Neither works as a primary-text channel (rule 11).
- **Channel used: the Claude Code corpus** `corpus-ME-20261010.zip` (SHA-256 a3b8877184eb019af91ad78718368bf5ed354907c2eb3ec5f8d46c5ed43adf7b, matching the `.sha256` file and the kickoff). The attachment arrived as `corpus-ME-20261010_1.zip` with the same hash.
- **Integrity:** all 3,118 `manifest.jsonl` lines are HTTP 200, and every file matches its manifest SHA-256 and byte count. No file is missing and none is extra.
- **Completeness (rule 19):** every title's Word file was parsed into sections, anchored on each section's own heading line (`§N.  Heading`). The parse gave 46,589 section units (46,351 unique title/section pairs; dated versions kept as separate units).
  - The downloaded chapter contents pages list 46,092 section links (45,948 unique). All 45,948 are in the parsed text: **0 missing**.
  - The contents-page parser first missed 13 links: repealed sections whose "(REPEALED)" sits on a second line. They were fixed and re-counted.
- **Gap in the download (flag for Claude Code, §10):** the crawler's chapter-link pattern (`ch[...]sec0\.html`) skipped the 45 chapter contents pages the title indexes link as `sec0-N.html` (chapters that share a number: repealed or reallocated chapters, e.g. tit. 19-A ch. 101, tit. 33 ch. 37). None is in Title 14 or the Human Rights Act. Their sections are present in the title Word files: 403 parsed sections are not in any downloaded contents page, 258 of them "(REPEALED)" and the rest in those 45 chapters. Proof for those 45 chapters rests on the title index's section ranges, a weaker method (rule 14).
- **Live-site match (kickoff; Taylor approved built-in browser use, §6.2):** six sections were fetched in Taylor's built-in browser on 2026-10-15: §§ 6015 (`title14sec6015-2.html`), 6022-A, 6025, 6028, 6030-J and 6033. Each section element's text was whitespace-collapsed and hashed with SHA-256 in the page. All six equal the hash of the same normalisation of the corpus text.
  - `title14sec6015.html` returns 404. § 6015 has only the `-2` page, and the Word file has a single version. So the kickoff's "dated version" example is a file name, not a second version.
- **Browser captures** (each downloaded as JSON with every embedded file's SHA-256 computed in the page; downloads identified by SHA-256 since some landed as `.tmp`, rule 14; all 794 embedded files re-hashed in the workspace, 0 mismatches):

| Capture | Bytes | SHA-256 |
|---|---|---|
| Constitution page text | 128,149 | 2f791dca078cf70f8bbe5d96a726b78cda1a0bc78a523ee2933a10e090bd72f6 |
| Session laws 2025-26, part 1 (chs. 1-199) | 5,070,284 | ec516132cf85ac88c3d4d447c94a51ef564d31533d13b27d3e4630213e86943b |
| part 2 | 5,861,789 | 9cc318bf42e393fd1b81460717e0f025be0fb34993df92062d7ab51a7bd14da4 |
| part 3 | 5,096,830 | d2b78bce0f32e2b01a9db2baf6d4f2cfc529f384d36027907ae71e7b6c09cc3b |
| part 4 | 5,709,049 | 0b35449e0037568842a496491f986bf6d456762943052b8788bbf488ccbec775 |
| Court rules (M.R. Civ. P. 2026-06-01, 2026 Me. Rules 02, small claims, e-filing, admin-orders index, eviction help page) | 3,403,844 | d02e417710b4704d3b3d26f33a18c22bbe69aaffedab835caf47c3113fdf6f87 |
| Agency rules (94-348 chs. 7, 8; 10-144 chs. 224, 292; 65-407 chs. 660, 815; 16-219 ch. 2) | 724,300 | a132dfc18896b0d42d19bdac2631540ac699b74c5ef73003627e2a8230edb832 |
| AG model lease page and 3 Word files | 181,500 | 871f10a3aa7a308147124b368a833ba97f2112c820e443230ff307e669bbc6a8 |
| 132nd Legislature effective dates page | 1,141 | 46c045e1e07557d81cfa031a2934c16c1399752ad0c32db26e4febf7f9c4308e |
| Title & Section indexes and Revisor's reports | 1,948,942 | fa6ac76bb6cc480261602d457c447514967bfc9c7ac3ed58f474f748058b3f26 |

### §1.2 Currency and dated versions (rule 16)
- **Currency statement:** the site says the statutes reflect changes "through the Second Regular Session of the 132nd Maine Legislature" and are "current through October 1, 2026" (README, title list).
- **Sessions:** the 132nd Legislature met in a 1st Regular Session (chs. 1-17), a **1st Special Session** (chs. 18-499, plus initiated bill IB 2025 ch. 1) and a 2nd Regular Session (chs. 500-775). Rule 16 asks whether a special session met: it did.
- **General effective dates (Revisor's page, captured):** June 20, 2025; September 24, 2025; July 29, 2026.
- **Citation form:** the Revisor's history lines cite every chapter of the 132nd Legislature as "PL 2025", including 2026-session chapters such as ch. 515 (mold) and ch. 767 (§ 6025-B), so rows cite them as `2025 Me. Laws ch. N` and say when a chapter was enacted in 2026.
- **All 777 chapters were downloaded and screened** (battery ME-PL1-tenancy-screen: landlord, tenant, lease, rental unit/housing/property/agreement, dwelling unit, security deposit, eviction, forcible entry, Title 14 §§ 60xx, Title 5 ch. 337, housing discrimination, source of income; 70 chapters hit, list saved). The relevant chapters were read:
  - ch. 139 (§ 6001(6)(H) documentation; 1st Special, eff. Sept. 24, 2025)
  - ch. 269 (Human Rights Act references)
  - ch. 365 (model rent-stabilization ordinance study; no statewide rent rule)
  - ch. 411 (§ 6030-C(3), operative Jan. 1, 2030)
  - ch. 426 (§ 6030-K model lease)
  - ch. 512 (medical cannabis; "subject to the terms of any lease")
  - ch. 515 (mold, § 6021(1), (6-B); 2nd Regular, eff. July 29, 2026)
  - ch. 746 (well testing, tit. 22, § 2660-Y)
  - ch. 767 (§ 6025(3) floor raised from $100 to $250; § 6025-B enacted; 2nd Regular, eff. July 29, 2026)
  
  Emergency clauses: none found in chs. 515 and 767.
- **Sections-affected overlay:** the Revisor's Title & Section indexes for both sessions were parsed (4,968 entries). Every entry touching Title 14 §§ 6000-6050 and tit. 5 §§ 4551-4634 is reflected in the compiled history lines: 14 §§ 6001(6)(H), 6021(1), 6021(6-B), 6025(3), 6025-B, 6030-C(3), 6030-K; 5 §§ 4572, 4581, 4612, 4651. Uncompiled changes found: none.
- **Dated versions:** no section the rows rely on in Title 14 chs. 709-710-A has a second dated version. The corpus's dated versions (e.g. tit. 14, § 1254) are outside the rows' sections. One conflict text was flagged: tit. 30-A, § 4364-A(1) (`edu-no-single-family-zone-limit-me`).
- **Effective-date clause of 2023 Me. Laws ch. 594 § 13 (total price disclosure, recurring fees):** not read. That act is outside the corpus (2023). The AG's page says the disclosure took effect in January 2025, and either way it is in force on the pass date. Boundary recorded.

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- **Constitution:** saved from the Revisor's constitution page, which states it was arranged under Resolve 2023, ch. 86 and includes CR 2023, chs. 1-2. It was parsed into 153 sections and loaded into the same battery index before the outside-title batteries ran.
  - Controls: "Legislature" hits in CONST and the nonsense term returns 0 (SRC4-18 batteries).
  - The section count rests on the page's own "Section N." headings, a weaker method because the site serves no separate section index (rule 35).
  - Provisions binding only the State were recorded (§17).
- **Court rules:**
  - M.R. Civ. P., rules-only edition of 2026-06-01, the current one (326 rule units; 80D read whole), with amendment 2026 Me. Rules 02.
  - Maine Rules of Small Claims Procedure (2024-11-01) and the Maine Rules of Electronic Court Systems (4(D)(1): remote access to eviction records).
  - The judicial branch eviction page, which names form CV-256, the information sheet and mediation request.
  - Maine's District Court has no separate local rules; the statewide rules govern.
  - All cited with the rule 21 flag.
- **Agency rules (rule 21 flag):** 94-348 C.M.R. chs. 7, 8 (Human Rights Commission accessibility and housing); 10-144 C.M.R. chs. 224 (radon providers), 292 (lead poisoning control); 65-407 C.M.R. chs. 660 (water), 815 (electric and gas consumer protection); 16-219 C.M.R. ch. 2 (smoke detectors).
  - The fire code, pesticide, Real Estate Commission and DEP rules are not in the corpus. The rows that turn on them are NEEDS_REVIEW (§7).

### §1.4 Agents and usage
- **Tag screen:** two helpers (slices A and B, 251 single-state clauses each), briefed with the Maine law brief (`ME-BRIEF`, checked against the sections before sending, rule 27).
- **Outside-title search:** one helper, 54 batteries.
- **Topic canvass:** four slices (C1-C4, 88/88/88/85 topics), never more than two agents at a time, each saving one JSON line per topic. No usage limit was hit, and no slice restarted.
- **Scenario screen:** one helper.
- **Independent check:** three rounds, one agent at a time; rounds 2 and 3 re-checked only edited rows, with each row's previous version to diff against.

### §1.5 Batteries (rule 19)
514 battery runs, all logged before any hit was read (`batteries.jsonl`), over an index labelled "CMR 7; CONST 153; COURT 6; IB 1; MRCivP 326; MRS 46589; PL 776; total 47858".
- **Controls:** each run carries a nonsense control (0 hits in every run) and a "Legislature" control. The "Legislature" control hit in every run except three scoped runs whose scope holds no such word: SRC4-17-LODGE-01 (tit. 30-A ch. 183), C3-sunset-1 (Title 14) and K2-002-ch114-lease-words (tit. 32 ch. 114). The positives in those three runs passed.
- **Failed positives:** 37 runs had a positive that failed. Each is either superseded by a rerun whose positives passed or disclosed next to its name in every row that cites it (script over the rows, §8).
- **Runs without a positive:** 24 runs were given no positive: ME-R1-dishonored-check, ME-R1-dishonored-check-nolimb, ME-R1-cash-payment, ME-R1-sublet, ME-R1-tenant-death, ME-R1-holdover, ME-R1-jury-waiver, ME-R1-arbitration-residential, TSA-01-holdover, TSA-02-ev-charging, TSB-01-cannabis-landlord, TSA-03-cannabis-landlord, TSB-02-holdover-treble, K1-001-28B-landlord, K1-002-flag-display, K1-003-military-lease-term, K1-004-eff-date-2026, K1-005-medcann-smoking-def, K1-006-vape-in-558C, K1-007-tenant-death, K1-008-ch252-1978, K1-009-sprinkler-hotel, K1-010-childcare-tenant, K1-011-plugin-solar. These are search-to-read runs (finding sections to read in the tag screen and the check rounds), not proof of absence. No row rests an absence on one of them. Where a row names one, it says so and names a run whose positive passed (script, §8; three tag or clause notes were corrected for this after round 3, §13).
- **Runs by family:** ME-T 2 (index engine); ME-F 12 (formatting); ME-PL 1 (session-law screen); ME-O 1 (whole-code landlord screen); ME-R 8 (tag-screen reading); SRC4 54 (outside-title search); TSA 3 (tag helper A); TSB 3 (tag helper B); C1 82 (canvass C1); C2 103 (canvass C2); C3 89 (canvass C3); C4 128 (canvass C4); ME-M 1 (usury); K1 11 (check round 1); SC 13 (scenario screen); K2 2 (check round 2); K3 1 (check round 3).

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,025 active clauses were screened and read in full.
  - The 79 shared or blank-states clauses were read one by one in the main pass.
  - Of the 946 single-state clauses, 444 name another state or its statute in their text or title (triage, not taggable as written; list saved).
  - The other 502 were read in full by two helpers against the Maine brief. Results: 332 rest on their own state's law, 106 conflict with Maine law, 59 need a Maine version, and 5 were marked taggable.
- **The 5 helper-taggable verdicts passed through the basis check (rule 26):**
  - Tagged: `returned-payments-ky` and `tenant-death-contact-nh`. Their notes rest on no statute of their own state.
  - Not tagged: `criminal-activity-ky` (rests on KRS 383.300; Maine row written instead) and `habitability-baseline-mn` (Minnesota's scrub override of `landlord-maintenance`, which is tagged instead). Also `periodic-tenancy-notice-wy`: Maine's 30-day tenancy-at-will rule (§ 6002) needs no lease clause, and `edu-termination-notice-periods-me` explains it.
- **Fee screen (rule 26; kickoff):** every shared clause that charges for something or changes a term was screened against the up-front cap (§ 6022-A), the fee bans (§ 6030(2)), the screening-fee rule (§ 6030-H), recurring-fee rules (§§ 6030-I, 6030-J) and the domestic-violence lock rule (§ 6025(1)). The `keys` and `hoa-compliance` results are in their notes.
### §2.1 Tagged ME as written (52)
These are 49 shared clauses, 2 single-state clauses (`returned-payments-ky`, `tenant-death-contact-nh`) and the federal education row `edu-cares-act-notice`, which the kickoff named for tagging.
Each tag note starts "ME: Tagged as written (tag-first screen, rules 26-28, ME log §2.1; sections cited were read section-open)" and gives the reason. The ME segment is appended after the other states' notes, which are unchanged (checked by script, §8).
- `rent-payment`: The lease fixes the due date; "except as permitted by applicable law" preserves Maine's rent deductions: repair and deduct (Me. Rev. Stat. tit. 14, § 6026(2)), payment of a landlord's utility bill (§ 6024-A(1); tit. 35-A, § 706(2)), a detector bought by a …
- `application-of-payments`: Rent first matches Maine's 7-day arrearage notice, which is void if 'the full amount of rent due' is paid before it expires (§ 6002(1)); the last sentence keeps the reinstatement right.
- `security-deposit-use`: Lawful in both tiers: the clause allows less than Maine's 'actual cause' retention (§ 6033(2)) and bars wear-and-tear deductions as § 6033(1) does; its stricter cleaning rule is the landlord's own limit. Return terms are in `security-deposit-return-me`.
- `residential-use-only`: No Maine statute limits a residential-use term.
- `existing-condition`: An acknowledgment of the unit's condition is not a waiver of the warranty of fitness (which only a written agreement on specified conditions for stated consideration can limit, § 6021(5)) and is not the barred acknowledgment that lease terms are 'fair and …
- `permitted-occupants`: Consistent with Maine's 7-day ground for a person 'not an authorized occupant of the premises' (§ 6002(1)(F)).
- `no-disturbance`: Lawful; eviction of a victim of domestic violence, sexual assault or stalking based on incidents at the premises, or on reporting them, is barred by § 6001(6)(A) whatever the lease says.
- `utility-service-continuity`: No Maine rule conflicts; a landlord's own shutoff is barred separately (§ 6014(1)(A)).
- `utility-payment-evidence`: Lawful; Maine water utilities and sanitary districts must give a landlord the status of a tenant's account on request where nonpayment can lien the property (tit. 35-A, § 6111-B; tit. 38, § 1207-A).
- `acceptable-payment-methods`: No Maine statute requires a landlord to accept a particular payment method or bars a change on notice (outside-title search, ME log §17); cash payments need a receipt in buildings not exempt under § 6022(3) (§ 6022(1)).
- `tenant-maintenance`: Its last clause keeps every repair Maine puts on the landlord (§§ 6021, 6026).
- `no-sublet-assign`: No Maine statute gives a residential tenant a right to sublet or assign (battery C1-SUB-04, whole index: sublet, sublease, sublessee, subtenant and assign forms; positives tit. 14, § 6010-A and a synthetic consent sentence passed; controls OK; ME log §18); …
- `no-alterations`: Its last sentence keeps a disabled tenant's reasonable modifications (tit. 5, § 4582-A(1)) and Maine's clothesline right (tit. 33, § 1423(2)(B)).
- `joint-liability`: Lawful; a victim who ends the tenancy under § 6001(6)(D) or § 6002(4) is relieved of rent by statute, which the clause does not override.
- `utilities-paid-by-landlord`: Rule 44: if the list includes heat, Maine's heating standard applies, since breach occurs 'when the landlord is obligated by agreement or lease to provide heat' and the unit falls below it (§ 6021(6)); the landlord may not stop paying a utility in its name (§ …
- `appliances-included`: Lawful; the promise to maintain is the landlord's own term.
- `landlord-maintenance`: Consistent with the implied warranty of fitness (§ 6021(2)) and the duty to avoid dangerous conditions (§ 6026(1)); prompt written notice matches Maine's written-notice triggers (§ 6021(3)(C), § 6026(2)).
- `landlords-access`: Within § 6025: entry at reasonable times on reasonable notice ('Twenty-four hours is presumed to be a reasonable notice', § 6025(2)) for repairs and showings to which a tenant 'may not unreasonably withhold consent' (§ 6025(1)); the clause's business-hours …
- `possession-delay`: No Maine statute governs failure to deliver possession (canvass `possession-delay`).
- `notices`: Its own last sentence defers to Maine's statutory service methods (§ 6002, § 6001(8)) and the judicial branch form (§ 6001(7)).
- `governing-law`: Lawful.
- `severability`: Lawful, but it cannot save a lease that Maine makes unenforceable as a whole: 'A lease or tenancy at will agreement is unenforceable if the landlord does not receive a signed copy of the total price disclosure as required by section 6030‑J.' (§ 6030(4)); see …
- `entire-agreement`: Lawful; Maine lets a landlord change rent or a mandatory recurring fee only on § 6015 notice, which the "as applicable law permits Landlord to change it by written notice" wording keeps.
- `addendum-precedence`: Lawful; the separate heat agreement (§ 6021(6-A)) and total price disclosure (§ 6030-J) are separate documents, not addenda that must control the lease.
- `electronic-signatures`: Lawful under Maine's Uniform Electronic Transactions Act (tit. 10, ch. 1051), which lets a party refuse further electronic dealings (tit. 10, § 9405(3)); signing remains consent-based.
- `pet-insurance-requirement`: No Maine statute limits a renters'-insurance or pet-liability insurance requirement (SRC4-10-INS-01, -02); it excludes assistance animals, as tit. 5, § 4582-A(3) requires.
- `assigned-parking-space`: Lawful.
- `guest-policy`: Lawful.
- `guest-policy-day-limit`: Lawful; consistent with the unauthorized-occupant ground (§ 6002(1)(F)).
- `fire-safety-grilling`: Lawful; stricter than Maine's fire rules.
- `landscaping-irrigation`: Maine has no separate-writing rule for tenant chores (it has not adopted the uniform act's split; rule 48 batteries ME-F1-separate-nolimb and ME-F2-separate-tenancy found none, ME log §4); yard upkeep is not a habitability duty the tenant would be waiving (§ …
- `snow-removal`: Same as `landscaping-irrigation`; shared areas are excluded, and common areas stay the landlord's under § 6021(1)(A)'s dwelling-unit definition, which includes 'the common areas thereof'.
- `inspection-rights`: Lawful; entry is on § 6025 notice through the Access & Entry terms.
- `lead-based-paint`: Federal disclosure (42 U.S.C. § 4852d; 40 C.F.R. § 745.113, rule 21 flag); Maine adds owner duties in tit. 22, ch. 252 (education `edu-lead-me`).
- `hoa-compliance`: No Maine statute bars passing an association fine caused by the tenant's own violation (kickoff fee screen: Maine's only closed money list is the up-front cap, § 6022-A, which this in-tenancy charge does not reach); a landlord who expects such charges should …
- `assistance-animal-accommodation`: Consistent with Maine: 'The use of an assistance animal may not be conditioned on the payment of a fee or security deposit, although the individual with a physical or mental disability is liable for any damage done to the premises' (tit. 5, § 4582-A(3)); …
- `utility-allowance-cap-co`: Lawful as a contract term; the overage is a 'utility service cost' (§ 6000(3-A)) to be listed in any total price disclosure (§ 6030-J(2)(D)), and the allowance should cover only the tenant's unit (§ 6024).
- `extended-absence-notice-ks`: No Maine absence statute; a contract term.
- `holdover-ca`: Maine sets no holdover measure (battery C2-dblrent-1, whole index: double, treble and holdover forms, synthetic positive passed, controls OK, ME log §18; tag-screen searches TSA-01 and TSB-02 ran without a positive only to find sections to read; outside-title …
- `tenant-forward-proceedings-ca`: Lawful.
- `storage-space-ks-oh-ca`: Chosen over `storage-space`: Maine makes 'Any provision that absolves the landlord from liability for the negligence of the landlord or the landlord's agent' unenforceable and an unfair trade practice (§ 6030(2)(A)), so the no-disclaimer variant is used (rule …
- `parking-ks-oh-ca`: Chosen over `parking` for the same § 6030(2)(A) reason (rule 52).
- `tenants-property-insurance-ks-oh-ca`: Chosen over `tenants-property-insurance` for the same § 6030(2)(A) reason (rule 52); no Maine statute limits a renters'-insurance requirement.
- `services-utilities-provided-ks-oh`: Chosen over `services-utilities-provided` (rule 52, § 6030(2)(A)); a landlord who 'willfully' interrupts a utility commits an illegal eviction (§ 6014(1)(A)).
- `surrender-end-of-term-ks-ne`: Points to `abandoned-property-me` (Handling of Property Left Behind); chosen over `surrender-end-of-term`, whose "treated as abandoned and disposed of at Tenant's cost" skips § 6013's free-release step.
- `rules-ia`: No Maine statute governs lease rules; the clause's limits are the landlord's own, and § 6030(2) applies to rules as to leases ('lease or tenancy at will agreement or rule provisions', § 6030(2)).
- `rent-concession-wi`: Lawful; a concession recaptured on early departure would be a fee 'for the act of discontinuing tenancy' (§ 6030(2)(E)), which this clause does not create.
- `rent-installments-or`: Lawful; late is measured from each installment's due date, 15 days (§ 6028(1), `late-fee-me`).
- `electronic-notice-ma`: Consistent with Maine's electronic-transactions act: a party may refuse further electronic dealings and that right 'may not be waived by agreement' (tit. 10, § 9405(3)); statutory notices keep their methods (§ 9408).
- `returned-payments-ky`: Chosen over `returned-payments`, whose fee "not to exceed the maximum amount permitted by applicable law" points at no Maine maximum (rule 53). Maine's bad-check law sets no cap on a contract fee and provides that 'Nothing in this chapter supersedes the terms …
- `tenant-death-contact-nh`: Optional contact designation; no Maine statute addresses a residential tenant's death (battery TSB-03); property left behind goes to `abandoned-property-me` (§ 6013). Its notes rest on no New Hampshire statute (rule 26 basis check passed).
- `edu-cares-act-notice`: Federal row (15 U.S.C. § 9058(c)); nothing in Maine law changes it. Maine's 7-day nonpayment notice (§ 6002(1)) is the state notice the federal 30 days can lengthen on a covered property.
### §2.2 Shared clauses not tagged (30), with reasons
- `rental-application-accuracy`: `rental-application-accuracy-me`: adds information Maine lets an applicant withhold, such as a sealed conviction (tit. 15, § 2266).
- `late-fee`: `late-fee-me`: a fee 'within {{late_fee_grace_days}}' can fall before Maine's 15 days (§ 6028(1)), no cap or required written notice (§ 6028(2)-(3)), and the acceptance sentence reads as waiving § 6002(1) rights.
- `late-fee-ne`: Same as `late-fee`; `late-fee-me`.
- `returned-payments`: Rule 53; `returned-payments-ky` tagged.
- `due-at-signing`: `due-at-signing-me`: invites last month's rent and a separate pet deposit (§§ 6022-A, 6031(2)).
- `security-deposit-return`: `security-deposit-return-me`: 'time period required by applicable law' is circular for a written Maine lease (§ 6033(2)(A)).
- `smoking-policy`: `smoking-policy-me`: posted notice needed to ban medical-cannabis smoking (tit. 22, § 2430-C(3)).
- `utilities-responsibility`: `utilities-responsibility-me`: common-area utilities (§ 6024).
- `services-utilities-provided`: Disclaimer; `services-utilities-provided-ks-oh` tagged (rule 52).
- `default-by-tenant`: `default-by-tenant-me`: fee sentence barred (§ 6030(2)(B)); circular cure period (§ 6001(1-B)).
- `default-by-tenant-co`: Fee sentence (§ 6030(2)(B)); `default-by-tenant-me`.
- `default-by-tenant-ks-ne`: "reasonable costs and expenses" can include legal fees (§ 6030(2)(B)); `default-by-tenant-me`.
- `surrender-end-of-term`: "disposed of at Tenant's cost" (§ 6013(3)); `surrender-end-of-term-ks-ne` tagged.
- `surrender-end-of-term-mn-nd`: One curated answer (rule 6): `surrender-end-of-term-ks-ne` tagged.
- `early-termination`: Fee barred (§ 6030(2)(E)); `early-termination-me`.
- `early-termination-ks`: Fee barred (§ 6030(2)(E)); `early-termination-me`.
- `holdover`: Rule 53 (no Maine measure); `holdover-ca` tagged, optional `holdover-rate-me`.
- `tenants-property-insurance`: Disclaimer (§ 6030(2)(A)); `tenants-property-insurance-ks-oh-ca` tagged.
- `pet-policy`: `pet-policy-me`: pet deposit outside the deposit cap (§§ 6031(2), 6032), self-help removal (§ 6014(1)(C)), indemnity reaching landlord negligence (§ 6030(2)(A)).
- `parking`: Disclaimer (§ 6030(2)(A)); `parking-ks-oh-ca` tagged.
- `storage-space`: Disclaimer (§ 6030(2)(A)); `storage-space-ks-oh-ca` tagged.
- `parking-vehicle-rules`: `parking-vehicle-rules-me`: tag and decal charges at move-in (§ 6022-A).
- `parking-vehicle-rules-id`: Same charge; `parking-vehicle-rules-me`.
- `keys`: `keys-me`: adds Maine's lock-change rule (§ 6025(1), (3)).
- `common-area-use`: `common-area-use-me`: clothesline right (tit. 33, § 1423).
- `ev-charging-shared-area-co`: Rests on Colorado's EV-charging statute; Maine gives tenants no EV-charging right (SRC4-06-EV-01).
- `ev-charging-end-of-tenancy-co`: Same; rests on Colorado law.
- `possession-delay-ca`: One curated answer (rule 6): `possession-delay` tagged.
- `acceptable-payment-methods-nj`: One curated answer (rule 6): `acceptable-payment-methods` tagged; Maine does not require a non-electronic option.
- `landlords-access-mi`: One curated answer (rule 6): `landlords-access` tagged.
### §2.3 Single-state clauses (rule 26 triage)
- 444 name another state or its statute in body or title: not taggable as written.
- 502 read in full: 332 rest on their own state's law, 106 conflict with Maine law, 59 need a Maine version, and 5 were marked taggable (2 tagged, §2.1).
- **Main conflict families** (each Maine answer is a Maine row):
  - exculpation short of the full negligence bar (§ 6030(2)(A))
  - landlord attorney's fees (§ 6030(2)(B))
  - early-termination and "nonrefundable" fees (§ 6030(2)(E), § 6031(2))
  - up-front money beyond § 6022-A
  - late fees before day 15 or above 4% (§ 6028)
  - deposit-return periods over 30 days (§ 6033)
  - abandoned-property rules without Maine's free-release step (§ 6013)
  - entry without notice (§ 6025)
  - shorter termination notices (§ 6002)
  - no-abatement casualty terms (§ 6010)
  - common-area utilities (§ 6024)
  - alarm duties shifted to the tenant (tit. 25, §§ 2464, 2468)

## §3 New rows (rule_type, basis, citation)
### §3.1 ME lease clauses (29)
`lease_clause_basis` (first basis): SERVES_LANDLORD 23, CONSTRAINED_TERM 5, REQUIRED_DISCLOSURE 1. 12 are overrides (`supersedes` set; each note says "Overrides `id`", checked by script, §8). 13 are optional ("[Optional.]" or "[Separate document.]", never default; §6.1).

| Row | rule_type | lease_clause_basis | topic_key | supersedes | status | key citations |
|---|---|---|---|---|---|---|
| `late-fee-me` | CONSTRAINED/CONDITIONAL | CONSTRAINED_TERM; REQUIRED_DISCLOSURE: Me. Rev. Stat. tit. 14, § 6028(3) | late-fee | `late-fee` | VERIFIED | tit. 14, § 6028(1); § 6028(2); § 6028(3); § 6002(1) |
| `due-at-signing-me` | CONSTRAINED | CONSTRAINED_TERM | due-at-signing | `due-at-signing` | VERIFIED | tit. 14, § 6022-A(1); § 6031(2); § 6032; § 6030-H |
| `security-deposit-return-me` | REQUIRED/CONSTRAINED | CONSTRAINED_TERM; SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | VERIFIED | tit. 14, § 6033(2)(A); § 6033(2)(B); § 6033(2)(A); § 6033(2) |
| `smoking-policy-me` | RECOMMENDED/REQUIRED | SERVES_LANDLORD; REQUIRED_DISCLOSURE: Me. Rev. Stat. tit. 14, § 6030-E(3)(B)(1) | smoking-policy | `smoking-policy` | VERIFIED | tit. 22, § 2430-C(3); § 2430-C(3); tit. 22, § 1541(6); § 2423-A |
| `utilities-responsibility-me` | RECOMMENDED | SERVES_LANDLORD | utilities-responsibility | `utilities-responsibility` | VERIFIED | tit. 14, § 6024; § 6024; § 6030-J(2)(D); §1 |
| `common-area-utility-agreement-me` | CONDITIONAL | SERVES_LANDLORD | utility-apportionment |  | VERIFIED | tit. 14, § 6024; § 6024; §1 |
| `default-by-tenant-me` | REQUIRED | SERVES_LANDLORD | default-by-tenant | `default-by-tenant` | VERIFIED | tit. 14, § 6030(2); § 6030(2)(B); § 6030(3); § 6001(1) |
| `attorney-fees-me` | CONDITIONAL | SERVES_LANDLORD | attorney-fees |  | VERIFIED | tit. 14, § 6030(2)(B); § 6030(3); §2; §1 |
| `early-termination-me` | CONDITIONAL | SERVES_LANDLORD | early-termination | `early-termination-ks` | VERIFIED | tit. 14, § 6030(2)(E); § 6010-A(2); § 6001(6)(D); § 6002(4) |
| `abandoned-property-me` | RECOMMENDED | SERVES_LANDLORD | abandoned-property |  | VERIFIED | tit. 14, § 6013; § 6013; § 6013(1); § 6013(2)(A) |
| `pet-policy-me` | RECOMMENDED | SERVES_LANDLORD | pet-policy | `pet-policy` | VERIFIED | tit. 14, § 6031(2); § 6032; § 6022-A; § 6014(1)(C) |
| `animal-care-access-me` | CONDITIONAL | SERVES_LANDLORD | animal-care-access |  | VERIFIED | tit. 14, § 6025-A; § 6025-A; § 6025(2); §1 |
| `keys-me` | RECOMMENDED | SERVES_LANDLORD | keys | `keys` | VERIFIED | § 6022-A; § 6030(2)(E)(3); tit. 14, § 6025(1); § 6025(3) |
| `common-area-use-me` | RECOMMENDED | SERVES_LANDLORD | common-area-use | `common-area-use` | VERIFIED | tit. 33, § 1421(1); § 1421(1)(C); § 1423(1); § 1423(2)(B) |
| `parking-vehicle-rules-me` | RECOMMENDED | SERVES_LANDLORD | parking-vehicle-rules | `parking-vehicle-rules` | VERIFIED | tit. 14, § 6022-A(1); tit. 29-A, § 1851(3); § 1854(1); tit. 10, § 1500-LL |
| `criminal-activity-me` | CONDITIONAL | SERVES_LANDLORD | criminal-activity |  | VERIFIED | § 6002(1)(B); tit. 14, § 6001(6)(A); § 6002(1)(E); tit. 17, § 2743 |
| `casualty-termination-me` | CONDITIONAL | SERVES_LANDLORD | casualty-termination |  | VERIFIED | tit. 14, § 6010; § 6010; §17; §1 |
| `holdover-rate-me` | CONDITIONAL | CONSTRAINED_TERM | holdover-rate |  | VERIFIED | §18; § 6011; §17; tit. 14, § 6028(2) |
| `accepted-conditions-me` | CONDITIONAL | SERVES_LANDLORD | habitability-waiver |  | VERIFIED | § 6021(4)(B); tit. 14, § 6021(5); § 6010; § 6026(5) |
| `heat-agreement-me` | CONDITIONAL | SERVES_LANDLORD | heating |  | VERIFIED | tit. 14, § 6021(6)(B); § 6021(6-A)(A); § 6021(6-A)(B); § 6021(6-A)(C) |
| `required-disclosures-me` | RECOMMENDED | SERVES_LANDLORD | required-disclosures |  | VERIFIED | tit. 14, § 6030-D(2); § 6030-D(2); § 6030-C(2); § 6030-E(3)(C) |
| `bed-bug-disclosure-me` | REQUIRED/CONDITIONAL | REQUIRED_DISCLOSURE: Me. Rev. Stat. tit. 14, § 6021-A(2)(D) | bed-bug-disclosure |  | VERIFIED | §5; tit. 14, § 6021-A(2)(D); § 6021-A(2)(E); § 6021-A(2)(D) |
| `bed-bug-cooperation-me` | RECOMMENDED | SERVES_LANDLORD | bed-bug-cooperation |  | VERIFIED | tit. 14, § 6021-A(3)(A); § 6021-A(3)(B); § 6021-A(3)(C); § 6021-A(2)(F) |
| `smoke-co-alarms-me` | RECOMMENDED | SERVES_LANDLORD | alarm-duties |  | VERIFIED | tit. 25, § 2464(9)(A); § 2464(9)(B); § 2468(5)(A); § 2469(2)(A) |
| `cannabis-cultivation-me` | CONDITIONAL | SERVES_LANDLORD | cannabis |  | VERIFIED | tit. 28-B, § 1502(1)(A); tit. 22, § 2430-C(3); § 2423-A(2)(O); tit. 28-B, § 1503 |
| `midterm-rent-increase-me` | CONDITIONAL | CONSTRAINED_TERM | rent-escalation |  | VERIFIED | tit. 14, § 6015(1); § 6015(2); § 6015(1); § 6015(2)(A) |
| `rental-application-accuracy-me` | RECOMMENDED | SERVES_LANDLORD | rental-application-accuracy | `rental-application-accuracy` | VERIFIED | tit. 15, § 2266; §18; tit. 5, § 4581-A(1)(A); §1 |
| `owner-move-in-reservation-me` | CONDITIONAL | SERVES_LANDLORD | owner-move-in-reservation |  | VERIFIED | tit. 14, § 6002; § 6002; § 6001(7); § 6002(1) |
| `unpaid-damages-interest-me` | CONDITIONAL | SERVES_LANDLORD | unpaid-damages-interest |  | VERIFIED | tit. 14, § 1602-B(1); § 1602-B(2); § 1602-C(1)(A); § 6028(2) |
### §3.2 ME education rows (347)
- **Status:** VERIFIED 339, NEEDS_REVIEW 8.
- **rule_type:** RECOMMENDED 167, CONDITIONAL 54, REQUIRED 37, CONSTRAINED 28, PROHIBITED 26, PROHIBITED/CONDITIONAL 12, REQUIRED/CONDITIONAL 12, PROHIBITED/CONSTRAINED 3, CONSTRAINED/RECOMMENDED 2, CONDITIONAL/CONSTRAINED 2, CONDITIONAL/RECOMMENDED 2, CONSTRAINED/CONDITIONAL 1, REQUIRED/CONSTRAINED 1.
- **Answers:** Present 156, Confirmed absent 182, Not located 8, Does not apply 1. A few rows carry a mixed answer, stated in their first sentence.
- **NEEDS_REVIEW rows** (controlling text outside the corpus, or not fully read): `edu-rent-sales-tax-me`, `edu-frozen-standard-incorporation-me`, `edu-utility-submetering-disclosure-me`, `edu-environmental-covenants-me`, `edu-pesticide-notice-me`, `edu-sprinkler-requirements-me`, `edu-fire-code-me`, `edu-property-manager-licensing-me`.
### §3.3 Shared rows changed
- 52 existing rows changed only in three fields:
  - `states`: ";ME" appended, or "ME" for the blank-states rows.
  - `notes`: an ME segment appended after the existing notes, which are kept as a verbatim prefix.
  - `last_checked`: set to 2026-10-15.
- No shared row's body text, title, rule_type, basis or status changed.

## §4 Layout and placement table (rule 40)
**Batteries:** the formatting batteries ran over the whole corpus before drafting.
- ME-F1-* ran with no tenancy limb: type size, bold/underline/capitals, conspicuous, separate document/writing/instrument, substantially equivalent/as follows, signature-placement/plain language.
- ME-F2-* ran with a tenancy limb.
- Known positives passed in all twelve: § 6021 ("12-point type", "separate written document", "conspicuous"), § 6039 ("16-point"), § 6030-B ("boldface", "substantially similar form", "immediately precede the signature").

**Results:** none reaches the text of a residential lease.
- The plain-language statute (tit. 10, §§ 1121-1126) covers only a "consumer lease", defined as 'a lease of goods' (tit. 10, § 1122(3-A)).
- Every hit with a tenancy limb is either a separate document or a pre-lease disclosure:

| Provision | Rule | Applies to | Library effect |
|---|---|---|---|
| § 6021(6-A)(A) | Heat below 68°F: 'separate written document, apart from the lease', clear and conspicuous, plain English, at least 12-point type, signed by both | A separate agreement | `heat-agreement-me` offered as a separate document, never lease text (rule 48) |
| § 6030-B(3)(C) | Waiver of the 30-day lead renovation notice: 12-point boldface, immediately before the signature, prescribed form | An in-tenancy waiver | Education only (`edu-lead-me`) |
| § 6039(5) | Surety bond: "nonrefundable" in 16-point bold on page 1 and above the signature | The surety's disclosure | Education (deposit rows) |
| § 6030-E(3) | Smoking policy: in the lease or a separate notice; written acknowledgment before contract or deposit | Pre-lease | `smoking-policy-me` is the disclosure; `required-disclosures-me` records the acknowledgment |
| § 6030-J(2) | Total price disclosure: plain and readily understandable, signed by both, copy to each, before the lease | Pre-lease, separate | `required-disclosures-me`; `edu-total-price-disclosure-me`; § 6030(4) makes the lease unenforceable without it |
| § 6030-D(2); § 6030-C(2) | Radon and energy statements on prescribed forms, signed or acknowledged before contract or deposit | Pre-lease, separate | `required-disclosures-me` |
| § 6028(3) | Late-fee notice in writing "at the time they entered into the rental agreement" | Lease text | NOTICE sentence in `late-fee-me` |
| § 6002(2)(A) | Prescribed reinstatement paragraph in a 7-day rent notice | A termination notice | `default-by-tenant-me` promises it; `edu-nonpayment-notice-me` |

No two rules claim the same place in a lease, so there was no ordering question for Taylor.

## §5 Dormant rows resolved (rule 25)
- `late-fee-limit-me` (dormant, LEASE_CLAUSE, UNVERIFIED): verified against § 6028. Its substance was right, but it cited nothing. It is **rewritten as an active LANDLORD_EDUCATION row** with the same id (topic `late-fee-limit`; content-type change recorded). The lease text with the § 6028(3) notice is now `late-fee-me`.
- `bed-bug-disclosure-me` (dormant, LEASE_CLAUSE, UNVERIFIED): verified against § 6021-A(2)(D)-(E) and **rewritten and activated** as the Maine disclosure clause (REQUIRED/CONDITIONAL).

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Each is offered as optional ("[Optional.]" or a conditional use note), never as a default.

| Clause | Verdict | Why |
|---|---|---|
| `abandoned-property-me` | Offered (recommended, not marked optional: it is the section `surrender-end-of-term-ks-ne` points to) | § 6013's last paragraph lets the lease permit disposal without liability if the notices are given, a right that exists only if the lease invokes it |
| `animal-care-access-me` | Offered | § 6025-A lets the landlord require animal information and named contacts and, "as a condition of tenancy", emergency entry; new topic `animal-care-access` |
| `attorney-fees-me` | Offered | § 6030(3): prevailing-party fees after a contested hearing for "wanton disregard"; every other fee shift is barred |
| `accepted-conditions-me` | Offered | §§ 6021(4)(B), (5), 6010, 6026(5): a written agreement accepting specified conditions for a stated rent reduction binds |
| `heat-agreement-me` | Offered as a separate document | § 6021(6-A) (not under 62°F; not with an occupant over 65 or under 5) |
| `common-area-utility-agreement-me` | Offered | § 6024 written agreement with stated consideration |
| `holdover-rate-me` | Offered | No Maine holdover measure; excludes nonpayment terminations (rule 53) |
| `casualty-termination-me` | Offered | Landlord casualty termination is contract; no rent while unfit (§ 6010) |
| `early-termination-me` | Offered (no fee) | § 6030(2)(E) bars any fee except re-renting costs after a notice breach, unpaid rent and repairs |
| `owner-move-in-reservation-me` | Offered | No statute; a fixed term binds unless the lease reserves the right; at least 30 days' notice with § 6002/§ 6001(7) contents |
| `midterm-rent-increase-me` | Offered | Indiana precedent (Taylor 2026-09-30); § 6015 notice floors, § 6016 habitability bar, tenant may end instead |
| `criminal-activity-me` | Offered | Contract ground; victim carve-out (§ 6001(6)(A)); tit. 17, § 2743 forfeiture noted |
| `cannabis-cultivation-me` | Offered | Adult-use growing may be barred by lease; medical limited to "inconsistent with the general use" (tit. 22, § 2430-C(3)); no hazardous extraction (tit. 28-B, § 1503) |
| `unpaid-damages-interest-me` | Offered (canvass C1 proposal, reviewed) | Small-claims prejudgment interest only at a contract rate (tit. 14, § 1602-B(1)-(2)); rent excluded (§ 6028(2)); no general usury cap found (ME-M1-usury) |
| Tenant-caused damage, no-abatement term | **Not offered** (always ask) | § 6010 bars any rent action while residential premises are unfit after "fire or other unavoidable casualty", and no residential lease term can restore it; whether a tenant-caused fire counts is unsettled, so the cheaper reading is taken (`edu-tenant-caused-damage-me`) |
| Waiver of the 30-day tenancy-at-will notice in the lease | **Not offered** | § 6002: waivable "at the time the notice is given, and at no other time prior to the giving of the notice" (`edu-notice-to-quit-waiver-me`) |
| Jury waiver | **Not offered** | Only commercial leases may waive (§ 6017(5)); the jury trial de novo is a ch. 709 right (§ 6008(1)) whose waiver § 6030(1) makes an unfair practice (`edu-no-jury-waiver-me`) |
| Landlord legal fees / collection fees / percentage agency fees | **Not offered** | § 6030(2)(B); `edu-collection-fees-me` explains tit. 32, § 11013(3)(A) |
| Property-tax "agreement to the contrary" (tit. 36, § 556) | **Not offered**, education only | The qualifier attaches to the landlord's half-tax recovery sentence; whether the tenant's retention right can be contracted away is unsettled (rule 79 sentence parse); `edu-property-tax-sharing-me` |
| Separate tenant-chores agreement | **Not needed** | Maine has no separate-writing rule for tenant chores (rule 48 batteries found none); `landscaping-irrigation` and `snow-removal` tagged |
| Rent-to-own / option to buy | **Not offered** | tit. 14, § 6203-H; tit. 33, §§ 172-174 seller disclosures; consumer-credit status possible (outside-title §17) |
| Owner-occupied 2-family exemptions (fair housing, assistance animals) | Education only | tit. 5, § 4581(4)(B) |

**Cross-check:** the table was checked item by item against every Maine statute that makes a right depend on lease wording (§11, rule 50 list). Each such right has a clause or a recorded "not offered" here, so no lease-invoked right is left without an answer (rule 54, NH lesson).

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (asked with AskUserQuestion at Step A, recommendation "Yes"). Taylor chose "Yes (Recommended)". That approved:
   - the 5-section live-site match;
   - the Constitution;
   - the 2025-2026 session laws;
   - the AG model lease;
   - the court and agency rules.
   
   I then asked once for access to Taylor's Downloads folder, so browser downloads could be copied in and hash-checked, and it was granted.

No other question was needed. Every remaining call was a legal or drafting judgment (§6.3).

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **§ 6001(1-B) and default terms:**
  - A written Maine lease that lacks breach-termination language gives the landlord only the § 6002(1) 7-day causes. The statute brings in § 6002, subsections 1 and 2; it does not bring in the 30-day tenancy-at-will notice.
  - So `default-by-tenant-me` supplies its own term: 7 days for § 6002(1) causes and 30 days for other material breaches, with no cure promised (rule 43).
  - The rent-arrearage voiding rule is restated. Reinstatement "in all residential tenancies at will" is preserved without being granted or denied for a lease.
  - Round 1 found four education rows that misread § 6001(1-B), all corrected (§13).
- **Deposit return:** the lease must state the time (≤30 days, § 6033(2)(A)). It is 30 days, or 21 days once the tenancy has become at will (rule 37).
- **Two tiers (rule 32):**
  - ch. 710-A does not apply to owner-occupied buildings of 5 or fewer units (§ 6037(2)), but § 6022-A does apply there and incorporates the § 6032 cap. The two-month figure is therefore kept in every tier.
  - Every default clause is lawful in both tiers.
- **Pet rent:** treated as additional Rent (§ 6000(1-B)), not an optional recurring fee (§ 6030-I(1): "an added service or feature of a property"). The scenario screen argued it may be neither; open item §7.
- **Smoking:** the ban on medical-cannabis smoking needs an all-smoking ban plus posted notice (tit. 22, § 2430-C(3)).
  - The clause bans smoked and vaped forms only. Whether "smoking" there reaches vaporizing is flagged (§7).
- **Medical cannabis cultivation:** stated in the statute's own words ("inconsistent with the general use of the premises").
- **Clotheslines:** a renter's right under tit. 33, § 1423(2)(B), except in condominium common elements or areas in common ownership (§ 1423(3)), subject to reasonable restrictions (§ 1423(4)). `common-area-use-me` carries it.
- **Sealed convictions:** the shared application-accuracy carve-out does not reach Maine's right to withhold a sealed conviction (tit. 15, § 2266). Hence `rental-application-accuracy-me`.
- **Casualty:** the § 6010 proviso saves "an agreement contained in a lease" only for nonresidential and Maine Guaranty Authority leases. Its "written instrument to pay the rental stipulated" limb is read as tied to those same leases (round 1 corrected the notes' description).
- **Heat agreement:** the "fair and reasonable" recital was removed (round 1) because § 6030(2)(D) bars making a tenant acknowledge terms as fair and reasonable.
- **Exculpation (rule 52):** Maine voids absolving the landlord's negligence (§ 6030(2)(A)), and using such a term is an unfair trade practice. So the no-disclaimer `-ks-oh(-ca)` variants are tagged, and saving words are not relied on (rule 47).

## §7 Open items, each with its search boundary
1. **Pet rent classification:** rent, mandatory recurring fee (§ 6000(1-A): "related to services or common areas") or neither.
   - The clause takes rent. A 7-day nonpayment notice resting on pet rent alone is the risk.
   - Boundary: statutes and the total-price-disclosure materials read; no case law or AG guidance on pet charges found in the corpus.
2. **Medical cannabis vaping:** whether "smoking" in tit. 22, § 2430-C(3) includes vaporizing. Boundary: tit. 22 chs. 262 and 558-C read; no case law.
3. **Tenant-caused fire under § 6010:** "fire or other unavoidable casualty". Boundary: Title 14 read whole; no case law searched; the rows take the tenant-protective reading.
4. **Reinstatement for leases:** whether the § 6002(1) reinstatement-until-writ right reaches a lease ended under its own notice term. Boundary: §§ 6001, 6002, 6005 read; no case law.
5. **Parking:**
   - whether a residents-only lot is "property accessible to the public" (tit. 10, § 1500-LL);
   - whether a rule-breaking tenant vehicle is "left on property without the permission of the property owner" (tit. 29-A, § 1851(4)).
   
   Boundary: statutes read; no case law.
6. **NEEDS_REVIEW rows (8):** their controlling text is outside the corpus.
   - fire code / NFPA editions (State Fire Marshal rules)
   - sprinklers
   - pesticide notice (Board of Pesticides Control)
   - environmental covenants (DEP)
   - submetering (PUC rules beyond chs. 660 and 815)
   - rent sales tax (Maine Revenue Services guidance)
   - property-manager licensing (Real Estate Commission rules)
   - frozen standards
7. **Municipal ordinances:** Portland and South Portland rent ordinances and local housing codes are flagged, not resolved (rule 3; `edu-local-rent-ordinances-me`).
8. **Case law:** not searched anywhere. Rows whose answer could turn on it say "no Maine case law was searched".
9. **Effective-date clause of 2023 Me. Laws ch. 594 § 13:** not read (outside the corpus); in force either way on the pass date.

## §8 Integrity checks on the delta
Run by script on the final delta (`checks.json`); every check passes.

| Check | Result | Detail |
|---|---|---|
| Header: 17 columns, same order as the master | Pass |  |
| Ids unique in the delta | Pass | none |
| New ids do not collide with the master | Pass | none |
| Dormant ME rows rewritten (rule 25) | Pass | late-fee-limit-me, bed-bug-disclosure-me |
| `supersedes` targets exist and are active | Pass | none |
| `supersedes` matches each "Overrides `id`" note | Pass | none |
| New rows: states ME, active | Pass |  |
| Status set on every new row | Pass | VERIFIED 368, NEEDS_REVIEW 8 |
| Groups from the allowed list | Pass | none |
| rule_type values valid | Pass | none |
| Every clause has a lease_clause_basis (rule 55) | Pass | none |
| Education rows have a blank basis | Pass | none |
| Every new row records its basis and section-open reading (rules 15, 79) | Pass | none |
| effective_from / last_checked = 2026-10-15 | Pass | none |
| Shared rows: only states, an appended ME note and last_checked changed; old notes kept as a verbatim prefix | Pass | none |
| Every topic has an active ME row (rule 27) | Pass | none |
| Citation format screen | Pass | none |
| Every backticked row id in ME text resolves | Pass | unresolved: none; topic keys named in backticks: animal-care-access, condition-inspection, habitability-waiver, rent-escalation |
| Pointers to inactive rows | Info | none |
| New `{{variables}}` (rule 60) | Info | holdover_daily_rate |
| Quote check (rule 59), all new rows | Pass | 1,333 single-quoted passages verified word for word against the section cited next to each. The 3 the checker cannot parse (possessive "days'": `midterm-rent-increase-me`, `owner-move-in-reservation-me`, `edu-termination-notice-periods-me`) were confirmed by eye against §§ 6015(1) and 6002 |
| Battery citations (rule 19) | Pass | 425 distinct batteries cited across the delta's ME text; each exists in the log; every cited run whose positive failed is disclosed or superseded in the row; every cited run without a positive is marked as such next to a run whose positive passed |
| Ids the log names | Pass | every row id in this log exists in the delta or the master |

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 52 tagged rows changed only in `states`, an ME note segment and `last_checked`. No propagation note is owed to any other state's log.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
1. **Corpus crawler (Claude Code):** `crawl_me_mrs.py`'s chapter pattern skips contents pages named `sec0-N.html` (45 in Maine, chapters sharing a number). Future crawls should match `sec0(-\d+)?\.html`.
2. **New `{{variable}}` (rule 60):** `{{holdover_daily_rate}}` (`holdover-rate-me`). It is not in the kickoff's builder list, though other states' holdover-rate rows use it.
3. **Quote checker (sync tooling):**
   - It cannot resolve C.M.R. citations, so agency-rule text in Maine rows is paraphrased, not quoted.
   - It ends a quote at a plural possessive ("days'").
   - It needed a pattern for hyphen-numbered sections (tit. 33, § 1604-111; tit. 9-A, § 8-509).
   - Fixes are in this pass's checker; Claude Code's checker may need the same.
4. **Library rows that conflict with Maine law** (rest on their own states; none tagged ME): see §2.3. They need no change in their own states.
5. **Shared clause wording leads (not changed; rule 62 would apply):**
   - `landlords-access` says "right of reasonable access"; Maine frames entry as consent the tenant "may not unreasonably withhold" (§ 6025(1)). It is lawful as written in Maine, and tagged.
   - `common-area-use` names flag and religious displays as things "applicable law entitles Tenant to make"; Maine has no such statute (C3 batteries). The sentence is harmless.
   - `severability` cannot save a lease made wholly unenforceable by § 6030(4); the Maine note says so.
6. **Revisor conflict text:** tit. 30-A, § 4364-A(1) carries two 2025 versions (flagged in `edu-no-single-family-zone-limit-me`).
7. **Plug-in solar:** tit. 35-A, § 3475 (2025 Me. Laws ch. 644, enacted 2026) lets any electricity customer install small plug-in solar or storage without utility approval and requires a non-owner to restore the building on removal. It governs customer and utility, not landlord and tenant (`edu-solar-devices-me`). A future topic question may be worth adding.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** no type-size, bold, conspicuous or separate-document rule reaches lease text; every hit is in §4.
- **41 Just-cause:** none. A tenancy at will ends on 30 days' written notice for any reason (§ 6002), and a lease ends at its term. There are situational limits: retaliation presumption (§ 6001(3)), victims (§ 6001(6)), reasonable-accommodation defense (§ 6001(5)), lead relocation (tit. 22, § 1322), condo-conversion notice (tit. 33, § 1604-111), assisted-housing conversions (tit. 30-A, §§ 4973-4976). The row keyed `for-cause-eviction` records this (canvass §18).
- **42 Required text inside a shared clause:** the late-fee notice (§ 6028(3)) is now inside `late-fee-me`; no other statute forces a sentence into a shared clause.
- **43 Cure promises:** Maine gives no statutory cure except the rent rule (a 7-day notice void on full payment; reinstatement for tenancies at will). `default-by-tenant-me` promises no other cure and preserves the reinstatement right without granting it.
- **44 Terms that become duties:** heat. "obligated by agreement or lease to provide heat" triggers the 68°F standard (§ 6021(6)); this is noted on `utilities-paid-by-landlord`. No Maine remedy reaches "material provisions of the rental agreement" generally.
- **45 Electronic notices:** Maine's UETA was read (tit. 10, §§ 9405, 9408). The right to refuse electronic dealing "may not be waived by agreement" (§ 9405(3)), statutory delivery methods stand (§ 9408(2)), and an unprintable record is unenforceable (§ 9408(3)). `electronic-notice-ma` is lawful as written.
- **46 Lease as the required notice:** the late-fee notice (§ 6028(3)) and the smoking disclosure (§ 6030-E(3)(B)(1)) may be lease text, and both are offered. The smoking acknowledgment must still precede signing (§ 6030-E(3)(C)).
- **47 Penalties for prohibited terms:** using any § 6030(2) term or a waiver of a ch. 709/710/710-A right is a tit. 5, § 207 violation, with a private action under § 213. Saving words are not relied on. The debt-collection act reaches third-party collectors and a creditor collecting under another name (tit. 32, § 11002(6)) (`edu-collection-fees-me`).
- **48 Separate documents:** only the heat agreement (§ 6021(6-A)) must be separate, and it is offered as a separate document. § 6024 needs only a written agreement. There is no tenant-chores separate-writing rule.
- **49 Collection-cost bans:** § 6030(2)(B) bars the tenant paying the landlord's legal fees. "Reasonable costs and expenses" in `default-by-tenant-ks-ne` is treated as within the ban, and that clause is not tagged.
- **50 "The lease controls" wording:**
  - deposit return time (§ 6033(2)(A)), chosen;
  - abandoned-property disposal (§ 6013), invoked;
  - animal care (§ 6025-A), offered;
  - common-area utilities (§ 6024), offered;
  - tax-share agreement (tit. 36, § 556), education;
  - medical-cannabis caregiver terms "subject to the terms of any lease" (tit. 22, § 2423-A(2)(O)), noted.
- **51 Plain-language and consumer statutes:** the plain-language act covers only leases of goods (tit. 10, § 1122(3-A)). The UTPA's "trade and commerce" includes real property (tit. 5, § 206(3)), so a lease is within it.
- **52 Exculpation:** voided for negligence (§ 6030(2)(A)), so the no-disclaimer variants are used (§2.1).
- **53 Figures against shared clauses:**
  - late fee (15 days, 4%);
  - deposit (2 months; up-front cap);
  - holdover ("maximum permitted by applicable law" points at nothing, so `holdover-ca` is used);
  - returned payments (no cap, so `returned-payments-ky` is used);
  - holdover-rate excludes nonpayment terminations.

## §12 Other Step C screens
- **30 Read beyond the section:** Title 14 chs. 709, 710, 710-A, 710-B, 710-C and 710-D were read whole, with the sections they point to. Those include the definitions (§ 6000) and §§ 6005, 6008, 6010-A and 6013. Also read whole: tit. 5, §§ 4581-4583; tit. 25, §§ 2464, 2468, 2469; tit. 14, §§ 6071-6073.
- **31 Enacted twice:** the habitability waiver exception appears in §§ 6010, 6021(4)(B), 6021(5) and 6026(5), and all four agree. The utility deduct right appears in § 6024-A and tit. 35-A, § 706(2), which are consistent.
- **32 Place or size:** these rules depend on place or size, and each row states its scope:
  - the owner-occupied 5-or-fewer-unit exemptions (§§ 6022(3), 6026(8), 6037(2));
  - the MHRA exemptions for an owner-occupied 2-family dwelling or up to 4 rooms (tit. 5, § 4581(4)(B));
  - firearms only in subsidized apartments, excluding owner-occupied buildings of 4 or fewer units (§ 6030-F(1)(C));
  - fuel gas detectors only in multifamily and mixed-use buildings (tit. 25, § 2469(2)).
- **35 Outside-title search:** §17.
- **37 Tenancy type:** handled in several rows:
  - deposit return, 30 days for a lease and 21 days for a tenancy at will (§ 6033(2));
  - termination, by the lease's own terms against § 6002 (§ 6001(1-B));
  - DV early termination, 7 days for a lease under one year and 30 days for one year or more (§ 6001(6)(D));
  - holdover and month-to-month as a tenancy at will (`holdover-ca` note).
- **38 Other states' structure:** no cure or damages formula was imported. The 30-day "other breach" period in `default-by-tenant-me` is labelled a contract figure.
- **39 Eviction procedure:** M.R. Civ. P. 80D was read whole. Its duties: the information sheet and mediation form are served with the notice and the summons (80D(c)); the lease is filed with the complaint (80D(d)); counterclaims are barred (80D(h)). Writ timing (§ 6005: 7 days after judgment; goods abandoned 48 hours after service). Remote access to eviction records is limited (e-filing rule 4(D)(1)). Entity landlords may appear by a non-lawyer only for single-member or family LLCs (tit. 4, § 807(3)(S)).

## §13 Independent check (rule 80)
Brief: `CHECK-BRIEF.md`. It tells the checker to check against the statute, not the notes; that earlier findings may be wrong; to print and read whole sections; to save findings per row; and to propose exact old-to-new errata, which the merge applies with a once-only assertion.

| Round | Rows checked | ERROR | FIX | NOTE | Errata applied | Result |
|---|---|---|---|---|---|---|
| 1 | 422 | 4 | 64 | 30 | 78 | Errata applied; edited rows re-checked in round 2 |
| 2 | 75 | 1 | 39 | 7 | 60 | Errata applied; edited rows re-checked in round 3 |
| 3 | 43 | 0 | 10 | 2 | 14 | No ERROR; errata applied; stopped at the 3-round cap |

- **Round 1 errors:** four education rows read § 6001(1-B) as importing the 30-day notice.
- **Round 2 error:** `edu-residential-use-remedy-me` missed tit. 17, § 2743 forfeiture (battery K2-001).
- **Round 3:** only FIXes.
- **Main-pass edits made in response to checker NOTEs, each re-checked in a later round:** `pet-policy-me` (open-item pointer; round 2), `holdover-rate-me` (warning on accepting holdover money; round 3), `criminal-activity-me` (tit. 17, § 2743; round 3), and three citation-placement fixes found by the quote check (`smoking-policy-me`, `edu-written-notices-me`, `edu-residential-use-remedy-me`; round 3).

### Edited after the last check
Found by script: each final row was diffed against the version the checker last saw. Claude Code reads these against the statute at sync (kickoff; rule 80).

| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `security-deposit-return-me` | round 1 | notes | notes reworded to the "Overrides `security-deposit-return`" form the supersedes check reads; no change of substance |
| `early-termination-me` | round 1 | notes | notes reworded to "Overrides `early-termination-ks`"; no change of substance |
| `criminal-activity-me` | round 3 | notes | round 3 FIX (short-form citation); K2-001 failed-positive disclosure added |
| `holdover-rate-me` | round 3 | notes | absence battery citation: C2-dblrent-1 (positive passed) named; TSA-01 and TSB-02 marked as runs without a positive |
| `required-disclosures-me` | round 3 | bodyText | round 3 FIX: the smoking-policy checklist line now covers a policy also stated in the lease (§ 6030-E(3)(C) acknowledgment) |
| `cannabis-cultivation-me` | round 2 | notes | absence battery citation: TSB-01 marked as a run without a positive |
| `edu-collection-fees-me` | round 3 | bodyText, notes | round 3 FIX: a creditor is covered only when its name suggests a third party is collecting (tit. 32, § 11002(6)), body and notes |
| `edu-local-rent-ordinances-me` | round 3 | notes | round 3 FIX: citation forms |
| `edu-residential-use-remedy-me` | round 3 | notes | round 3 FIX (first-cite full form for tit. 17, § 2743; short form for tit. 14, § 6002); K2-001 failed-positive disclosure added |
| `edu-smoking-policy-disclosure-me` | round 3 | bodyText | round 3 FIX: the federal-law and federal-funding exception to the medical-cannabis status protection added |
| `edu-tenant-utility-accounts-me` | round 3 | notes | round 3 FIX: citation form |
| `edu-services-utilities-provided-me` | round 3 | bodyText | round 3 FIX: mandatory recurring fee limited to a lease-required charge other than rent or utility costs (§ 6000(1-A)) |
| `edu-no-drug-free-addendum-me` | round 3 | notes | K2-001 failed-positive disclosure added |
| `edu-dv-law-citations-me` | round 1 | notes | session-law citation form ("PL 2021, c. 647" to "2021 Me. Laws ch. 647") |
| `edu-fire-code-me` | round 3 | bodyText | round 3 FIX: 17-bed threshold; sprinkler rule limited to hotels of 2 or more stories built after January 1, 1992 |
| `edu-no-emergency-call-statute-me` | round 3 | bodyText | round 3 FIX: "the tenant's minor child" |
| `no-sublet-assign` | round 1 | ME note | ME tag note: absence now rests on C1-SUB-04 (positives passed) instead of ME-R1-sublet (no positive); section pointer corrected to ME log §18 |
| `entire-agreement` | round 1 | ME note | ME tag note: library words put in double quotes (rule 59) |
| `holdover-ca` | round 1 | ME note | ME tag note: same battery-citation fix as `holdover-rate-me` |

## §14 Gap-discovery source 1 — statute walk (rule 29)
The core chapters were read whole, and each chapter's full section index was diffed by script against every citation in the delta's Maine rows and tag notes (449 distinct sections cited).

| Chapter | Sections | Repealed | Live sections cited | Uncited live sections |
|---|---|---|---|---|
| 14 ch. 709 | 21 | 4 | 17 of 17 | none |
| 14 ch. 710 | 27 | 1 | 26 of 26 | none |
| 14 ch. 710-A | 9 | 0 | 9 of 9 | none |
| 14 ch. 710-B | 1 | 0 | 1 of 1 | none |
| 14 ch. 710-C | 2 | 0 | 2 of 2 | none |
| 14 ch. 710-D | 4 | 0 | 3 of 4 | § 6048 |

- **§ 6048** (written lease for buildings on leased lots in Land Use Planning Commission territory, where the lessee owns the building): ground leases for owner-built camps and homes are outside the library's scope, like manufactured-home parks. Flagged, no row.
- **One level down:** uncited sections in the partly cited chapters were listed and screened:
  - tit. 5 ch. 337: commission administration and employment;
  - tit. 22 ch. 252: program and laboratory sections; § 1329 is a retailer poster duty;
  - tit. 25 ch. 317: §§ 2465, 2467;
  - tit. 14 ch. 713: court foreclosure procedure;
  - tit. 14 ch. 7: tort immunities; § 174 is a fire-department installation immunity;
  - tit. 35-A ch. 7: utility-side rules, including § 718 on winter terminations;
  - tit. 10 ch. 1051: UETA mechanics;
  - tit. 33 ch. 31: condominium governance.
  
  None sets a landlord-tenant lease rule.

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Lease used:** the Maine Attorney General's Model Residential Lease and Model Total Price Disclosure Statement, with the Guide to the Model Residential Lease (Consumer Law Guide, ch. 16). It is published under § 6030-K at maine.gov/ag. The lease-only Word file was last modified Sept. 9, 2026 and the disclosure Sept. 24, 2026 (HTTP Last-Modified); the capture is in §1.1. It is a state agency's lease, the best qualifying source, and was not relabelled. The text was saved and is not reproduced here.
- **Mapped by section:**
  - parties and managing agent → `edu-owner-agent-identity-me` (§ 6023)
  - rent, with a penalty of up to 4% after 15 days → `late-fee-me`, `late-fee-limit-me`
  - additional charges → `due-at-signing-me`, `required-disclosures-me`
  - deposit at most two months, kept separate, the three return conditions, return within 30 days → `security-deposit-use`, `security-deposit-return-me`, deposit education rows
  - services table, including yard and snow → `utilities-paid-by-landlord`, `utilities-responsibility-me`, `landscaping-irrigation`, `snow-removal`
  - furnishings → furnishings education row
  - residential use with incidental business → `residential-use-only`
  - occupancy limit → `permitted-occupants`
  - tenant repairs damage after written notice → `tenant-maintenance`
  - alterations "except as permitted by law" → `no-alterations`
  - bedbugs → `bed-bug-cooperation-me`
  - fitness promises (keys and locks, radon testing) → `landlord-maintenance` and education
  - disability accommodations → `assistance-animal-accommodation`, `edu-fair-housing-me`
  - entry with 24 hours' consent → `landlords-access`
  - building rules → `rules-ia`
  - notices → `notices`
  - occupants, pets → `pet-policy-me`
  - condition at signing, including "conditions that will remain unchanged" → `existing-condition`, `accepted-conditions-me`
  - end of lease → `surrender-end-of-term-ks-ne`
- **Guide items:** the required disclosures (energy, radon, smoking, total price, lead) → `required-disclosures-me`. Non-waivable rights → `edu-nonwaivable-rights-me`.
- **Wording leads:**
  - **Changes Maine rows:** the Guide's list of pre-lease disclosures confirmed `required-disclosures-me`.
  - **Not adopted:** a 2-day mailed-notice effective-date rule is a contract choice with no Maine statute behind it. The incidental-business allowance is more tenant-generous than the library's lawful residential-use clause.
  - **Shared clauses:** no change proposed (rule 62).
- **Not used:** a Realtor or apartment-association form; none was needed given the AG's statutory model lease.

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** Claude generated 156 (ME-scen-001 to ME-scen-156), covering advertising through move-out, sale, foreclosure, death, abandonment, DV, military service and eviction, plus Maine-specific cases. Results: 149 answered by existing Maine rows, 6 gap-filled and 1 gap-boundary.
- **Rows added** (each checked in round 2):
  - `edu-property-manager-licensing-me` (NEEDS_REVIEW: brokerage law never mentions leasing; Real Estate Commission rules not in corpus)
  - `edu-wood-stoves-chimneys-me`
  - `edu-heating-fuel-in-tank-me`
  - `edu-rooming-houses-me`
  - `edu-recovery-residences-me`
  - `edu-minor-tenants-me`
- **Gap-boundary:** prorated rent when a 30-day notice ends mid-month. No proration statute (SC-08); the paid-through rule is in `edu-termination-notice-periods-me`.
- **Flags raised against existing rows:** pet rent (§7 item 1); a required renter's-insurance premium as an "other cost" under § 6030-J(2)(E) (noted, no change: the clause sets no premium).

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus:** CMR 7; CONST 153; COURT 6; IB 1; MRCivP 326; MRS 46589; PL 776; total 47858. The Constitution was loaded before the outside-title batteries.
- **Topical batteries:** 54 SRC4 runs across 18 families: fees and collection, UTPA, UETA, animals, cannabis, firearms/signs/solar/EV, smoking, lead, wells, insurance, DV, military, screening, foreclosure and conversion, utilities, municipal power, scope of tenancies, Constitution. The helper read 77 hits in full. Every finding a row relies on was re-read section-open by the row's author.
- **Findings that changed Maine rows:**
  - tit. 33, § 1423 (clotheslines) → `common-area-use-me`
  - tit. 22, § 2430-C(3) → `smoking-policy-me`, `cannabis-cultivation-me`
  - tit. 28-B, §§ 1502-1503 → `cannabis-cultivation-me`
  - tit. 22, § 2660-Y and 2025 Me. Laws ch. 746 (well tests, PFAS test by Jan. 1, 2027) → `edu-well-water-testing-me`, `required-disclosures-me`
  - tit. 22, § 1322 and 10-144 C.M.R. ch. 292 (lead relocation) → `edu-lead-me`
  - tit. 25, §§ 2464, 2468, 2469 → `smoke-co-alarms-me`
  - tit. 35-A, §§ 704, 706, 6111-B; tit. 38, § 1207-A → utility rows
  - tit. 5, §§ 206(3), 207, 213 (UTPA reaches leases; 30-day demand; fees) → `edu-knowing-use-penalty-me`
  - tit. 10, §§ 9405, 9408 → `electronic-notice-ma`
  - tit. 10, § 1272-B and ch. 209-B (SSN, credit reports) → `edu-tenant-screening-me`
  - tit. 33, § 1604-111 (condo conversion) and tit. 14, §§ 6203-A, 6322-A (foreclosure) → foreclosure rows
  - tit. 37-B, § 387 (Guard/Reserve stay) → `edu-servicemember-rights-me`
  - tit. 10, § 1500-LL (parking fines) → `edu-parking-fines-me`
  - tit. 17, § 1314-A (assistance-animal misrepresentation)
  - tit. 17, §§ 2741, 2743 (forfeiture, found in check round 2)
- **Constitution:** art. I, §§ 4, 5, 6-A, 16 and 21 bind only the State. § 25 (right to food) yields to private property rights. No constitutional provision reaches a shared clause.
- **Absences bounded:** renters'-insurance rules, flag and political-sign protections, private-market firearms, tenant EV charging, heat pumps, antennas outside ch. 710-B, pet-fee rules, late fees outside Title 14, auto-renewal, a state military lease termination, employer or farmworker housing, student-housing status and adult-use cannabis tenant protection. Each absence is named with its battery in the related row.

## §18 Topic canvass (rules 27, 36)
- **Method:** four canvass slices (C1-C4), at most two agents at a time, each saving one JSON line per topic after finishing it. They were briefed with the Maine law brief, the list of Maine clauses and tagged rows, and the outside-title findings.
- **Answers (349 topics):** Confirmed absent 183, Present 157, Not located 7, Does not apply 2.
- **Coverage:** a script confirms every topic has an active ME row keyed to it (§8; rule 27, NH lesson).
- **Dedupe:** overlaps between slices were checked by id and subject at merge; reserved ids were created once. The overlaps C3 flagged against C4 are separate subjects and both rows are kept:
  - plain-language law vs. lease-form readability;
  - tenant data privacy vs. confidential-information disclosure;
  - sealed-record answers vs. screening.

**Answer per topic:**
- `abandoned-property` (C2): Present. Rows: `abandoned-property-me`, `edu-abandoned-property-me`.
- `abandonment-and-mitigation` (C2): Present. Rows: `edu-mitigation-duty-me`.
- `acceptable-payment-methods` (C1): Present. Rows: `edu-payment-methods-me`, `acceptable-payment-methods`.
- `accessory-dwelling-unit` (C4): Present. Rows: `edu-accessory-dwelling-units-me`.
- `actual-notice-method` (C3): Confirmed absent. Rows: `edu-no-agreed-notice-method-rule-me`.
- `addendum-precedence` (C3): Confirmed absent. Rows: `edu-no-addendum-precedence-rule-me`, `addendum-precedence`.
- `adverse-proceeding-notice` (C3): Present. Rows: `edu-proceedings-against-property-notices-me`.
- `alarm-duties` (C1): Present. Rows: `smoke-co-alarms-me`, `edu-smoke-co-detectors-me`.
- `alarm-tampering-fee` (C4): Confirmed absent. Rows: `edu-detector-tampering-charges-me`.
- `algorithmic-rent-setting` (C1): Confirmed absent. Rows: `edu-no-algorithmic-rent-rule-me`.
- `alt-housing` (C1): Present. Rows: `edu-alternate-housing-me`.
- `alterations` (C1): Present. Rows: `edu-disability-modifications-me`, `no-alterations`.
- `appliances-excluded` (C1): Confirmed absent. Rows: `edu-appliances-excluded-me`.
- `appliances-included` (C1): Confirmed absent. Rows: `edu-appliances-included-me`, `appliances-included`.
- `application-fees` (C1): Present. Rows: `edu-application-fees-me`.
- `application-of-payments` (C1): Confirmed absent. Rows: `edu-no-payment-order-rule-me`, `application-of-payments`.
- `asbestos-hazards` (C4): Confirmed absent. Rows: `edu-asbestos-me`.
- `assigned-parking-space` (C3): Confirmed absent. Rows: `assigned-parking-space`.
- `assistance-animal-accommodation` (C3): Present. Rows: `edu-assistance-animals-me`, `assistance-animal-accommodation`.
- `association-obligations-disclosure` (C4): Confirmed absent. Rows: `edu-no-association-disclosure-me`.
- `attorney-fees` (C2): Present. Rows: `attorney-fees-me`, `edu-attorney-fees-me`.
- `automatic-renewal` (C3): Confirmed absent. Rows: `edu-no-automatic-renewal-rule-me`.
- `balcony-inspection` (C4): Confirmed absent. Rows: `edu-no-balcony-inspection-rule-me`.
- `bed-bug-cooperation` (C1): Present. Rows: `bed-bug-cooperation-me`, `edu-bed-bugs-me`.
- `bed-bug-disclosure` (C4): Present. Rows: `bed-bug-disclosure-me`, `edu-bed-bug-scope-retaliation-me`.
- `cannabis` (C3): Present. Rows: `cannabis-cultivation-me`, `edu-cannabis-me`.
- `cares-act-notice` (C2): Does not apply. Rows: `edu-cares-act-notice`.
- `casualty-and-mitigation-waivable` (C4): Present. Rows: `edu-casualty-mitigation-nonwaivable-me`.
- `casualty-termination` (C2): Present. Rows: `casualty-termination-me`, `edu-casualty-termination-me`.
- `certificate-of-occupancy-disclosure` (C4): Confirmed absent. Rows: `edu-no-occupancy-certificate-disclosure-me`.
- `children-occupancy` (C4): Confirmed absent. Rows: `edu-children-occupancy-me`.
- `cold-weather-vacate-notice` (C1): Confirmed absent. Rows: `edu-no-cold-weather-notice-rule-me`.
- `collection-fee` (C1): Present. Rows: `edu-collection-fees-me`.
- `common-area-lighting` (C1): Present. Rows: `edu-common-area-lighting-me`.
- `common-area-use` (C3): Present. Rows: `common-area-use-me`, `edu-common-areas-me`.
- `condemned-premises-rent-bar` (C1): Confirmed absent. Rows: `edu-condemned-premises-rent-me`.
- `condition-inspection` (C1): Confirmed absent. Rows: `edu-condition-inventory-me`.
- `confession-of-judgment` (C4): Confirmed absent. Rows: `edu-no-confession-of-judgment-me`.
- `confirmed-absences-habitability` (C2): Confirmed absent. Rows: `edu-confirmed-absences-habitability-me`.
- `confirmed-absences-misc` (C3): Confirmed absent. Rows: `edu-confirmed-absences-misc-me`.
- `confirmed-absences-outside-title` (C3): Confirmed absent. Rows: `edu-whole-code-checks-me`.
- `construction-liens` (C1): Present. Rows: `edu-construction-liens-me`.
- `consumer-protection-act` (C4): Present. Rows: `edu-unfair-trade-practices-me`.
- `conversion-notice` (C2): Present. Rows: `edu-conversion-notice-me`.
- `criminal-activity` (C2): Present. Rows: `criminal-activity-me`, `edu-criminal-activity-me`.
- `cure-and-eviction-grounds` (C2): Present. Rows: `edu-cure-and-eviction-grounds-me`.
- `default-by-tenant` (C2): Present. Rows: `default-by-tenant-me`, `edu-default-by-tenant-me`.
- `defective-drywall-disclosure` (C4): Confirmed absent. Rows: `edu-no-drywall-disclosure-me`.
- `deposit-cost-schedule` (C1): Confirmed absent. Rows: `edu-no-deposit-cost-schedule-me`.
- `deposit-escheat` (C1): Present. Rows: `edu-unclaimed-deposit-me`.
- `deposit-installments` (C1): Confirmed absent. Rows: `edu-no-deposit-installment-right-me`.
- `deposit-last-month-rent` (C1): Present. Rows: `edu-last-month-rent-me`.
- `deposit-surrender-notice` (C1): Confirmed absent. Rows: `edu-no-surrender-notice-condition-me`.
- `designated-repairer` (C2): Confirmed absent. Rows: `edu-no-designated-repairer-me`.
- `disability-accommodation` (C2): Present. Rows: `edu-disability-accommodation-me`.
- `disaster-displaced-guests` (C3): Confirmed absent. Rows: `edu-no-disaster-guest-rule-me`.
- `disaster-duties` (C2): Confirmed absent. Rows: `edu-no-disaster-tenancy-rule-me`.
- `disturbance` (C1): Present. Rows: `edu-disturbance-me`, `no-disturbance`.
- `double-letting` (C2): Confirmed absent. Rows: `edu-no-double-letting-me`.
- `drug-free-housing-addendum` (C2): Confirmed absent. Rows: `edu-no-drug-free-addendum-me`.
- `due-at-signing` (C1): Present. Rows: `due-at-signing-me`, `edu-upfront-payment-limit-me`.
- `dv-confidentiality` (C4): Confirmed absent. Rows: `edu-dv-confidentiality-me`.
- `dv-deposit-timing` (C1): Confirmed absent. Rows: `edu-dv-deposit-timing-me`.
- `dv-eviction-protection` (C2): Present. Rows: `edu-dv-eviction-protection-me`.
- `dv-lease-termination` (C2): Present. Rows: `edu-dv-lease-termination-me`.
- `dv-lockchange` (C2): Present. Rows: `edu-dv-lockchange-me`.
- `dv-protection-order-chapter-moved` (C3): Present. Rows: `edu-dv-law-citations-me`.
- `dv-qualifying-documents` (C2): Present. Rows: `edu-dv-qualifying-documents-me`.
- `early-termination` (C2): Present. Rows: `early-termination-me`, `edu-early-termination-me`.
- `electric-submetering-disclosure` (C4): Confirmed absent. Rows: `edu-no-electric-submetering-rule-me`.
- `electronic-signatures` (C3): Present. Rows: `edu-electronic-records-me`, `electronic-signatures`.
- `emergency-assistance-right` (C4): Confirmed absent. Rows: `edu-no-emergency-call-statute-me`.
- `emergency-contact` (C3): Confirmed absent. Rows: `edu-no-emergency-contact-rule-me`.
- `eminent-domain` (C2): Confirmed absent. Rows: `edu-no-eminent-domain-rent-rule-me`.
- `employee-screening` (C2): Confirmed absent. Rows: `edu-no-employee-screening-me`.
- `entire-agreement` (C3): Confirmed absent. Rows: `edu-no-lease-amendment-by-notice-me`, `entire-agreement`.
- `entity-landlord-court-representation` (C2): Present. Rows: `edu-entity-landlord-representation-me`.
- `environmental-event-termination` (C2): Confirmed absent. Rows: `edu-no-environmental-event-termination-me`.
- `ev-charging` (C3): Confirmed absent. Rows: `edu-no-ev-charging-right-me`.
- `ev-charging-end-of-tenancy` (C3): Confirmed absent. Rows: `edu-no-ev-charger-removal-rule-me`.
- `ev-charging-requirements` (C3): Confirmed absent. Rows: `edu-no-ev-charging-standards-me`.
- `ev-charging-shared-area` (C3): Confirmed absent. Rows: `edu-ev-charging-shared-area-me`.
- `eviction-hardship-stay` (C2): Confirmed absent. Rows: `edu-eviction-stays-me`.
- `eviction-penalty-clause-ban` (C4): Confirmed absent. Rows: `edu-no-eviction-penalty-clauses-me`.
- `eviction-process` (C2): Present. Rows: `edu-eviction-process-me`.
- `eviction-record-sealing` (C2): Confirmed absent. Rows: `edu-no-eviction-record-sealing-me`.
- `eviction-service-party` (C2): Confirmed absent. Rows: `edu-no-eviction-service-party-me`.
- `exculpatory-clauses` (C4): Present. Rows: `edu-exculpatory-clauses-me`.
- `existing-condition` (C1): Present. Rows: `edu-existing-condition-me`, `existing-condition`.
- `expedited-criminal-eviction` (C2): Confirmed absent. Rows: `edu-no-expedited-criminal-eviction-me`.
- `expedited-deposit-disposition` (C1): Confirmed absent. Rows: `edu-no-expedited-deposit-procedure-me`.
- `extended-absence-notice` (C1): Confirmed absent. Rows: `edu-extended-absence-me`, `extended-absence-notice-ks`.
- `fair-housing` (C4): Present. Rows: `edu-fair-housing-me`.
- `family-child-care` (C1): Confirmed absent. Rows: `edu-family-child-care-me`.
- `fee-in-lieu-of-deposit` (C1): Present. Rows: `edu-deposit-surety-bond-me`.
- `fee-transparency` (C1): Present. Rows: `edu-total-price-disclosure-me`.
- `fee-unprovided-service` (C1): Confirmed absent. Rows: `edu-optional-recurring-fees-me`.
- `fees-as-rent` (C1): Present. Rows: `edu-fees-not-rent-me`.
- `fire-code-standard` (C4): Not located. Rows: `edu-fire-code-me`.
- `fire-safety-grilling` (C3): Not located. Rows: `edu-grills-fire-safety-me`, `fire-safety-grilling`.
- `fire-sprinkler-duty` (C4): Not located. Rows: `edu-sprinkler-requirements-me`.
- `firearms` (C3): Present. Rows: `edu-firearms-me`.
- `flood-disclosure` (C4): Confirmed absent. Rows: `edu-no-flood-disclosure-me`.
- `for-cause-eviction` (C2): Confirmed absent. Rows: `edu-no-for-cause-eviction-me`.
- `foreclosure` (C2): Present. Rows: `edu-foreclosure-me`.
- `foreclosure-disclosure` (C4): Confirmed absent. Rows: `edu-no-foreclosure-disclosure-me`.
- `foreign-ownership` (C4): Confirmed absent. Rows: `edu-no-foreign-ownership-limit-me`.
- `forfeiture-redemption` (C2): Present. Rows: `edu-forfeiture-redemption-me`.
- `frozen-standard-incorporation` (C2): Not located. Rows: `edu-frozen-standard-incorporation-me`.
- `furnishings-included` (C1): Confirmed absent. Rows: `edu-furnished-units-me`.
- `good-cause-notice` (C4): Confirmed absent. Rows: `edu-no-good-cause-notice-me`.
- `governing-law` (C3): Confirmed absent. Rows: `edu-governing-law-me`, `governing-law`.
- `government-fee-reimbursement` (C1): Confirmed absent. Rows: `edu-government-fee-passthrough-me`.
- `governmental-fines` (C4): Confirmed absent. Rows: `edu-government-fines-me`.
- `guarantor-renewal` (C2): Confirmed absent. Rows: `edu-no-guarantor-rule-me`.
- `guest-policy` (C3): Confirmed absent. Rows: `edu-guests-me`, `guest-policy`.
- `guest-policy-day-limit` (C3): Confirmed absent. Rows: `guest-policy-day-limit`.
- `guest-rights` (C3): Confirmed absent. Rows: `edu-no-guest-rights-rule-me`.
- `habitability-materiality` (C2): Present. Rows: `edu-habitability-materiality-me`.
- `habitability-modifiable` (C2): Present. Rows: `edu-habitability-modifiable-me`.
- `habitability-presumption` (C2): Present. Rows: `edu-habitability-presumption-me`.
- `habitability-statement` (C2): Confirmed absent. Rows: `edu-no-habitability-lease-statement-me`.
- `habitability-waiver` (C4): Present. Rows: `accepted-conditions-me`.
- `hazardous-contamination-disclosure` (C4): Not located. Rows: `edu-environmental-covenants-me`.
- `health-district-rental-rules` (C2): Confirmed absent. Rows: `edu-no-health-district-rules-me`.
- `heating` (C2): Present. Rows: `heat-agreement-me`, `edu-heating-me`, `edu-wood-stoves-chimneys-me`.
- `hoa` (C4): Confirmed absent. Rows: `edu-condo-rental-restrictions-me`.
- `hoa-compliance` (C4): Present. Rows: `edu-association-rules-for-tenants-me`, `hoa-compliance`.
- `holding-deposit` (C1): Confirmed absent. Rows: `edu-holding-deposits-me`.
- `holdover` (C2): Confirmed absent. Rows: `edu-holdover-me`, `holdover-ca`.
- `holdover-rate` (C2): Confirmed absent. Rows: `holdover-rate-me`, `edu-holdover-rate-me`.
- `home-business` (C1): Confirmed absent. Rows: `edu-home-business-me`.
- `homestead-waiver` (C2): Confirmed absent. Rows: `edu-no-exemption-waiver-me`.
- `immigration-status` (C4): Confirmed absent. Rows: `edu-immigration-status-me`.
- `infirmity-termination` (C2): Confirmed absent. Rows: `edu-no-infirmity-termination-me`.
- `informal-dispute-resolution` (C3): Present. Rows: `edu-dispute-resolution-me`.
- `inspection-condemnation-disclosure` (C4): Confirmed absent. Rows: `edu-no-condemnation-disclosure-me`.
- `inspection-notice-penalty` (C1): Confirmed absent. Rows: `edu-no-inspection-notice-penalty-me`.
- `inspection-rights` (C3): Present. Rows: `inspection-rights`.
- `joint-liability` (C1): Confirmed absent. Rows: `edu-co-tenant-liability-me`, `joint-liability`.
- `jury-waiver` (C4): Present. Rows: `edu-no-jury-waiver-me`.
- `key-control-policy` (C4): Confirmed absent. Rows: `edu-no-key-control-rule-me`.
- `keys` (C3): Present. Rows: `keys-me`, `edu-keys-locks-me`.
- `knowing-use-penalty` (C4): Present. Rows: `edu-knowing-use-penalty-me`.
- `landlord-breach-remedy` (C2): Present. Rows: `edu-landlord-breach-remedy-me`.
- `landlord-entry` (C2): Present. Rows: `edu-landlord-entry-me`, `landlords-access`.
- `landlord-liability-insurance` (C4): Confirmed absent. Rows: `edu-no-landlord-insurance-mandate-me`.
- `landlord-lien` (C2): Present. Rows: `edu-landlord-lien-me`.
- `landlord-maintenance` (C2): Present. Rows: `edu-landlord-maintenance-me`, `landlord-maintenance`.
- `landlord-registration` (C3): Confirmed absent. Rows: `edu-no-landlord-registration-me`, `edu-property-manager-licensing-me`.
- `landlord-remedies-termination` (C2): Present. Rows: `edu-landlord-remedies-me`.
- `landlord-self-cure` (C2): Confirmed absent. Rows: `edu-no-landlord-self-cure-me`.
- `landscaping-irrigation` (C1): Confirmed absent. Rows: `edu-tenant-chores-me`, `landscaping-irrigation`.
- `late-fee` (C1): Present. Rows: `late-fee-me`.
- `late-fee-limit` (C1): Present. Rows: `late-fee-limit-me`.
- `law-enforcement-cooperation` (C3): Confirmed absent. Rows: `edu-no-crime-free-lease-rule-me`.
- `lead-based-paint` (C4): Present. Rows: `edu-lead-hazard-orders-me`, `lead-based-paint`.
- `lead-safe-certification` (C4): Confirmed absent. Rows: `edu-lead-safe-registry-me`.
- `lead-state-notices` (C4): Present. Rows: `edu-lead-me`.
- `lease-completeness` (C3): Confirmed absent. Rows: `edu-no-lease-completeness-rule-me`.
- `lease-content-requirements` (C4): Confirmed absent. Rows: `edu-lease-content-rules-me`.
- `lease-copy` (C3): Confirmed absent. Rows: `edu-no-lease-copy-duty-me`.
- `lease-notice-initial-requirement` (C3): Confirmed absent. Rows: `edu-no-initials-requirement-me`.
- `lease-term-limitation` (C3): Confirmed absent. Rows: `edu-lease-length-and-recording-me`.
- `lease-type-parity` (C1): Confirmed absent. Rows: `edu-no-lease-type-parity-rule-me`.
- `lease-type-size` (C3): Confirmed absent. Rows: `edu-no-lease-type-size-rule-me`.
- `liquidated-damages` (C2): Confirmed absent. Rows: `edu-no-liquidated-damages-rule-me`.
- `lockout-for-rent-delinquency` (C2): Present. Rows: `edu-lockout-prohibited-me`.
- `maintenance-duty-shift` (C1): Confirmed absent. Rows: `edu-shifting-landlord-duties-me`.
- `meter-conservation-charge` (C4): Confirmed absent. Rows: `edu-energy-efficiency-disclosure-me`.
- `meth-disclosure` (C4): Confirmed absent. Rows: `edu-no-meth-disclosure-me`.
- `military-air-zone-disclosure` (C4): Confirmed absent. Rows: `edu-no-military-zone-disclosure-me`.
- `minor-tenant-filing` (C2): Present. Rows: `edu-minor-defendants-me`, `edu-minor-tenants-me`.
- `mold-disclosure` (C4): Confirmed absent. Rows: `edu-mold-me`.
- `municipal-utility-lien` (C1): Present. Rows: `edu-utility-liens-me`.
- `nonpayment-notice` (C2): Present. Rows: `edu-nonpayment-notice-me`.
- `nonrefundable-deposit-notice` (C1): Present. Rows: `edu-no-nonrefundable-deposits-me`.
- `nonrefundable-deposit-separate-notice` (C1): Does not apply. Rows: `edu-no-nonrefundable-notice-rule-me`.
- `nonresident-owner-agent` (C3): Present. Rows: `edu-owner-agent-me`.
- `notice-delivery-methods` (C3): Present. Rows: `edu-notice-delivery-me`, `electronic-notice-ma`.
- `notice-service-fee` (C2): Confirmed absent. Rows: `edu-notice-service-fee-me`.
- `notice-to-quit-waiver` (C2): Present. Rows: `edu-notice-to-quit-waiver-me`.
- `notice-to-vacate-additional-terms` (C3): Confirmed absent. Rows: `edu-no-move-out-form-rule-me`.
- `notices` (C3): Present. Rows: `notices`.
- `nuisance` (C2): Present. Rows: `edu-nuisance-me`.
- `optional-lease-terms` (C3): Present. Rows: `edu-lease-dependent-terms-me`.
- `ordnance-demolition-meter-disclosures` (C4): Confirmed absent. Rows: `edu-no-ordnance-demolition-disclosure-me`.
- `other-landlord-facilities` (C2): Confirmed absent. Rows: `edu-other-landlord-facilities-me`.
- `owner-identity-disclosure` (C4): Confirmed absent. Rows: `edu-owner-agent-identity-me`.
- `owner-move-in-reservation` (C2): Confirmed absent. Rows: `owner-move-in-reservation-me`, `edu-no-owner-move-in-reservation-me`.
- `parking` (C3): Confirmed absent. Rows: `edu-parking-me`, `parking-ks-oh-ca`.
- `parking-rules-notice` (C3): Present. Rows: `edu-parking-fines-me`.
- `parking-vehicle-rules` (C3): Present. Rows: `parking-vehicle-rules-me`.
- `part5-nonwaivable` (C4): Present. Rows: `edu-nonwaivable-rights-me`.
- `periodic-services-entry` (C2): Confirmed absent. Rows: `edu-periodic-services-entry-me`.
- `permitted-occupants` (C1): Confirmed absent. Rows: `edu-occupancy-limits-me`, `permitted-occupants`.
- `pest-control-notice` (C4): Not located. Rows: `edu-pesticide-notice-me`.
- `pet-eviction-fact-sheet` (C3): Confirmed absent. Rows: `edu-no-pet-fact-sheet-me`.
- `pet-fees` (C3): Present. Rows: `edu-pet-fees-me`.
- `pet-insurance-requirement` (C3): Confirmed absent. Rows: `edu-pet-liability-me`, `pet-insurance-requirement`.
- `pet-policy` (C3): Present. Rows: `pet-policy-me`, `edu-pet-rules-me`.
- `plain-language` (C4): Confirmed absent. Rows: `edu-plain-language-me`.
- `plain-language-consumer-statement` (C3): Confirmed absent. Rows: `edu-no-plain-language-lease-law-me`.
- `political-access` (C3): Confirmed absent. Rows: `edu-no-candidate-access-rule-me`.
- `pool-safety` (C4): Present. Rows: `edu-pool-safety-me`.
- `portable-cooling-device` (C3): Confirmed absent. Rows: `edu-no-portable-cooling-right-me`.
- `portable-solar` (C3): Present. Rows: `edu-solar-devices-me`.
- `portfolio-thresholds` (C3): Present. Rows: `edu-unit-count-thresholds-me`.
- `possession-bond` (C2): Confirmed absent. Rows: `edu-no-possession-bond-me`.
- `possession-delay` (C2): Confirmed absent. Rows: `edu-possession-delay-me`, `possession-delay`.
- `post-eviction-property` (C2): Present. Rows: `edu-post-eviction-property-me`.
- `private-well-testing` (C4): Present. Rows: `edu-well-water-testing-me`.
- `prohibited-acts-renter` (C1): Confirmed absent. Rows: `edu-no-prohibited-acts-list-me`.
- `prohibited-lease-terms` (C4): Present. Rows: `edu-prohibited-lease-terms-me`.
- `promises-to-repair` (C2): Confirmed absent. Rows: `edu-no-promises-to-repair-rule-me`.
- `prop65-rental-warning` (C4): Confirmed absent. Rows: `edu-no-chemical-warning-rule-me`.
- `property-tax-rent-disclosure` (C4): Confirmed absent. Rows: `edu-no-property-tax-rent-statement-me`.
- `protected-class-inquiry-ban` (C4): Present. Rows: `edu-protected-class-inquiries-me`.
- `purpose-limitation` (C1): Present. Rows: `edu-unlawful-use-of-premises-me`.
- `quiet-possession` (C2): Confirmed absent. Rows: `edu-no-quiet-possession-statute-me`.
- `radon-disclosure` (C4): Present. Rows: `edu-radon-me`.
- `recycling-notice` (C3): Confirmed absent. Rows: `edu-no-recycling-notice-me`.
- `redemption` (C2): Present. Rows: `edu-redemption-me`.
- `religious-cultural-display` (C3): Confirmed absent. Rows: `edu-no-religious-display-rule-me`.
- `rent-concession` (C1): Confirmed absent. Rows: `edu-rent-concessions-me`, `rent-concession-wi`.
- `rent-control` (C1): Confirmed absent. Rows: `edu-local-rent-ordinances-me`.
- `rent-demand-bar` (C1): Confirmed absent. Rows: `edu-rent-demand-substandard-me`.
- `rent-escalation` (C1): Present. Rows: `midterm-rent-increase-me`, `edu-midterm-rent-increase-me`.
- `rent-increase-notice` (C1): Present. Rows: `edu-rent-increase-notice-me`.
- `rent-installments` (C1): Confirmed absent. Rows: `edu-rent-installments-me`, `rent-installments-or`.
- `rent-into-court-counterclaim` (C2): Present. Rows: `edu-rent-into-court-me`.
- `rent-payment` (C1): Present. Rows: `edu-rent-deductions-me`, `rent-payment`.
- `rent-receipt-anti-waiver` (C2): Confirmed absent. Rows: `edu-no-rent-receipt-anti-waiver-me`.
- `rent-receipts` (C1): Present. Rows: `edu-cash-rent-receipts-me`.
- `rent-reporting` (C1): Confirmed absent. Rows: `edu-no-rent-reporting-rule-me`.
- `rent-tax` (C1): Present. Rows: `edu-rent-sales-tax-me`.
- `rental-application-accuracy` (C3): Present. Rows: `rental-application-accuracy-me`, `edu-application-answers-sealed-records-me`.
- `rental-inspection` (C2): Present. Rows: `edu-rental-inspection-me`.
- `renters-insurance-rules` (C3): Confirmed absent. Rows: `edu-no-renters-insurance-rules-me`.
- `repair-cost-termination` (C2): Confirmed absent. Rows: `edu-repair-cost-termination-me`.
- `repair-escrow-exemption-notice` (C2): Confirmed absent. Rows: `edu-no-small-landlord-remedy-exemption-notice-me`.
- `repair-notice` (C2): Present. Rows: `edu-repair-notice-me`.
- `required-disclosures` (C4): Present. Rows: `required-disclosures-me`, `edu-pre-signing-disclosures-me`.
- `required-fees` (C1): Present. Rows: `edu-listing-fees-me`.
- `residential-use-only` (C1): Confirmed absent. Rows: `edu-residential-use-remedy-me`, `residential-use-only`.
- `retaliation` (C3): Present. Rows: `edu-retaliation-me`.
- `returned-payments` (C1): Present. Rows: `edu-returned-checks-me`, `returned-payments-ky`.
- `rules-regulations` (C3): Present. Rows: `edu-house-rules-me`, `rules-ia`.
- `sale-or-management-change` (C3): Present. Rows: `edu-sale-or-management-change-me`.
- `sanitary-code-variance` (C4): Confirmed absent. Rows: `edu-no-code-variance-notice-me`.
- `scope` (C3): Present. Rows: `edu-scope-me`, `edu-recovery-residences-me`, `edu-rooming-houses-me`.
- `seasonal-tenancy` (C3): Confirmed absent. Rows: `edu-no-seasonal-tenancy-rule-me`.
- `security-deposit-cap` (C1): Present. Rows: `edu-security-deposit-cap-me`.
- `security-deposit-holding` (C1): Present. Rows: `edu-deposit-account-me`.
- `security-deposit-interest` (C1): Confirmed absent. Rows: `edu-no-deposit-interest-me`.
- `security-deposit-nonwaiver` (C1): Present. Rows: `edu-deposit-rights-nonwaivable-me`.
- `security-deposit-on-sale` (C1): Present. Rows: `edu-deposit-transfer-on-sale-me`.
- `security-deposit-penalty` (C1): Present. Rows: `edu-deposit-penalties-me`.
- `security-deposit-return` (C1): Present. Rows: `security-deposit-return-me`, `edu-deposit-return-rules-me`.
- `security-deposit-standards` (C1): Confirmed absent. Rows: `edu-no-deposit-standards-rule-me`.
- `security-deposit-use` (C1): Present. Rows: `edu-deposit-uses-me`, `security-deposit-use`.
- `security-devices` (C2): Confirmed absent. Rows: `edu-no-security-devices-me`.
- `self-help-eviction` (C3): Present. Rows: `edu-self-help-eviction-me`.
- `senior-housing-work-card` (C2): Confirmed absent. Rows: `edu-no-senior-housing-work-card-me`.
- `service-animal-denial-penalty` (C3): Present. Rows: `edu-service-animal-denial-penalty-me`.
- `service-animal-misrepresentation` (C3): Present. Rows: `edu-animal-misrepresentation-me`.
- `servicemember-rights` (C3): Present. Rows: `edu-servicemember-rights-me`.
- `services-utilities-provided` (C2): Present. Rows: `edu-services-utilities-provided-me`, `services-utilities-provided-ks-oh`.
- `severability` (C4): Present. Rows: `edu-severability-me`, `severability`.
- `sex-offender-disclosure` (C4): Confirmed absent. Rows: `edu-no-sex-offender-disclosure-me`.
- `sex-offender-occupancy` (C4): Confirmed absent. Rows: `edu-sex-offender-residency-me`.
- `sfr-occupancy-disclosure` (C4): Confirmed absent. Rows: `edu-no-lease-font-rule-me`.
- `shoreline-access-disclosure` (C4): Confirmed absent. Rows: `edu-no-shoreline-disclosure-me`.
- `shutdown-rent-protection` (C1): Confirmed absent. Rows: `edu-no-shutdown-rent-rule-me`.
- `single-family-zone-lease-limit` (C4): Confirmed absent. Rows: `edu-no-single-family-zone-limit-me`.
- `smart-access` (C2): Confirmed absent. Rows: `edu-no-smart-access-law-me`.
- `smoke-drift-waiver` (C3): Confirmed absent. Rows: `edu-smoke-drift-me`.
- `smoking-policy` (C1): Present. Rows: `smoking-policy-me`, `edu-smoking-policy-disclosure-me`.
- `snow-removal` (C4): Confirmed absent. Rows: `edu-no-snow-removal-statute-me`, `snow-removal`.
- `social-security-defense` (C3): Confirmed absent. Rows: `edu-no-benefit-delay-defense-me`.
- `source-of-income` (C4): Present. Rows: `edu-source-of-income-me`.
- `sprinkler-disclosure` (C4): Confirmed absent. Rows: `edu-no-sprinkler-disclosure-me`.
- `statute-of-frauds-lease-term` (C3): Present. Rows: `edu-lease-writing-requirements-me`.
- `statutory-caps` (C4): Present. Rows: `edu-money-limits-me`.
- `statutory-early-termination` (C3): Present. Rows: `edu-statutory-termination-grounds-me`.
- `statutory-forms` (C3): Present. Rows: `edu-statutory-forms-me`.
- `steam-radiator-covers` (C4): Confirmed absent. Rows: `edu-no-radiator-cover-rule-me`.
- `stigmatized-property` (C4): Confirmed absent. Rows: `edu-no-stigmatized-property-rule-me`.
- `storage-space` (C3): Confirmed absent. Rows: `edu-storage-space-me`, `storage-space-ks-oh-ca`.
- `stove-refrigerator` (C2): Confirmed absent. Rows: `edu-no-stove-refrigerator-me`.
- `sublet-assign` (C1): Confirmed absent. Rows: `edu-subletting-me`, `no-sublet-assign`.
- `subsidized-inspection-refusal` (C4): Confirmed absent. Rows: `edu-no-subsidized-inspection-rule-me`.
- `subsidy-habitability-proration` (C1): Confirmed absent. Rows: `edu-no-subsidy-proration-rule-me`.
- `subsidy-late-fee` (C1): Confirmed absent. Rows: `edu-no-subsidy-late-fee-rule-me`.
- `substandard-property-receivership` (C2): Confirmed absent. Rows: `edu-no-substandard-property-receivership-me`.
- `surrender-end-of-term` (C3): Present. Rows: `edu-surrender-me`, `surrender-end-of-term-ks-ne`.
- `tax-escalation` (C1): Present. Rows: `edu-property-tax-sharing-me`.
- `telecom-access` (C2): Present. Rows: `edu-telecom-access-me`.
- `tenancy-at-will` (C3): Present. Rows: `edu-tenancy-at-will-me`.
- `tenant-bankruptcy` (C3): Confirmed absent. Rows: `edu-no-tenant-bankruptcy-rule-me`.
- `tenant-caused-damage` (C3): Present. Rows: `edu-tenant-caused-damage-me`.
- `tenant-confidential-information` (C4): Present. Rows: `edu-tenant-information-privacy-me`.
- `tenant-death` (C3): Present. Rows: `edu-tenant-death-me`, `tenant-death-contact-nh`.
- `tenant-display-rights` (C4): Confirmed absent. Rows: `edu-no-display-rights-statute-me`.
- `tenant-forward-proceedings` (C1): Confirmed absent. Rows: `edu-forwarding-legal-notices-me`, `tenant-forward-proceedings-ca`.
- `tenant-insurance-claims` (C1): Confirmed absent. Rows: `edu-tenant-insurance-claims-me`.
- `tenant-maintenance` (C1): Confirmed absent. Rows: `edu-tenant-upkeep-me`, `tenant-maintenance`.
- `tenant-portal` (C3): Confirmed absent. Rows: `edu-tenant-portal-me`.
- `tenant-records` (C3): Present. Rows: `edu-tenant-data-me`.
- `tenant-repair-agreement` (C1): Confirmed absent. Rows: `edu-tenant-repair-agreements-me`.
- `tenant-repair-remedies` (C2): Present. Rows: `edu-tenant-repair-remedies-me`.
- `tenant-right-to-organize` (C4): Present. Rows: `edu-tenant-organizing-me`.
- `tenant-rights-statement` (C4): Confirmed absent. Rows: `edu-no-tenant-rights-statement-me`.
- `tenant-screening` (C4): Present. Rows: `edu-tenant-screening-me`.
- `tenant-security-cameras` (C4): Confirmed absent. Rows: `edu-tenant-cameras-me`.
- `tenant-statutory-duties` (C1): Present. Rows: `edu-tenant-statutory-duties-me`.
- `tenants-property-insurance` (C3): Confirmed absent. Rows: `edu-tenant-property-loss-me`, `tenants-property-insurance-ks-oh-ca`.
- `term-change-notice` (C3): Present. Rows: `edu-term-change-notice-me`.
- `termination-notice` (C3): Present. Rows: `edu-termination-notice-periods-me`.
- `towing` (C3): Present. Rows: `edu-towing-me`.
- `tpa-exemption-notice` (C4): Confirmed absent. Rows: `edu-no-exemption-notice-me`.
- `tpa-notice` (C4): Confirmed absent. Rows: `edu-no-rent-cap-notice-me`.
- `tpa-sunset` (C3): Confirmed absent. Rows: `edu-no-tenant-law-sunset-me`.
- `translation-duty` (C3): Confirmed absent. Rows: `edu-no-translation-duty-me`.
- `truth-in-renting` (C4): Confirmed absent. Rows: `edu-no-truth-in-renting-me`.
- `unauthorized-occupant-removal` (C3): Present. Rows: `edu-unauthorized-occupants-me`.
- `unbundled-parking` (C3): Confirmed absent. Rows: `edu-no-unbundled-parking-rule-me`.
- `unconscionability` (C4): Confirmed absent. Rows: `edu-no-unconscionability-statute-me`.
- `unpaid-damages-interest` (C1): Present. Rows: `edu-interest-on-unpaid-amounts-me`, `unpaid-damages-interest-me`.
- `utilities-paid-by-landlord` (C2): Present. Rows: `edu-utilities-paid-by-landlord-me`, `utilities-paid-by-landlord`.
- `utilities-responsibility` (C1): Present. Rows: `utilities-responsibility-me`, `edu-tenant-utility-accounts-me`, `edu-heating-fuel-in-tank-me`.
- `utility-allowance-cap` (C2): Confirmed absent. Rows: `edu-no-utility-allowance-rule-me`, `utility-allowance-cap-co`.
- `utility-apportionment` (C2): Present. Rows: `common-area-utility-agreement-me`, `edu-utility-apportionment-me`.
- `utility-deposit-return` (C1): Confirmed absent. Rows: `edu-utility-deposits-me`.
- `utility-disclosure-attachment` (C4): Confirmed absent. Rows: `edu-no-utility-disclosure-attachment-me`.
- `utility-disconnection-notice-authorization` (C2): Confirmed absent. Rows: `edu-utility-notice-authorization-me`.
- `utility-interruption-submeter` (C1): Confirmed absent. Rows: `edu-no-submeter-interruption-me`.
- `utility-landlord-account` (C2): Present. Rows: `edu-utility-landlord-account-me`.
- `utility-payment-evidence` (C1): Present. Rows: `edu-utility-payment-proof-me`, `utility-payment-evidence`.
- `utility-service-continuity` (C1): Present. Rows: `edu-utility-continuity-me`, `utility-service-continuity`.
- `utility-shutoff-statute` (C2): Present. Rows: `edu-utility-shutoff-rules-me`.
- `utility-submetering-disclosure` (C2): Not located. Rows: `edu-utility-submetering-disclosure-me`.
- `utility-transfer` (C2): Present. Rows: `edu-utility-transfer-me`.
- `veterans-incentive` (C4): Present. Rows: `edu-veterans-housing-incentives-me`.
- `waiver-by-acceptance` (C3): Present. Rows: `edu-rent-acceptance-after-notice-me`.
- `water-heater-temperature` (C4): Confirmed absent. Rows: `edu-no-water-heater-setting-rule-me`.
- `waterbed` (C4): Confirmed absent. Rows: `edu-no-waterbed-statute-me`.
- `window-guards` (C4): Confirmed absent. Rows: `edu-no-window-guard-rule-me`.
- `written-notice-required` (C3): Present. Rows: `edu-written-notices-me`.

## §19 Conformance-table entry
ME (2026-10-15), from this log's §§ 4, 6.1, 11, 12 and 14-18. It ran on SOP 1.69 under the usage budget and read every row section-open, so 79 is ✓. The Retro rules in the table were checked in this pass:
- 35 in §17;
- 37-39 in §12;
- 40-53 in §11 and §4;
- 54 in §6.1;
- 55 in §3;
- 78 n/a (no library-wide pass);
- 79 in §8 and §13.

## Proposed SOP changes
- Rule 24: a corpus crawler must match chapter contents pages with a version suffix (`sec0-N.html`) and prove the title-index chapter count equals the downloaded chapter pages before the zip is staged. (ME: 45 chapter pages were skipped, so 403 sections could be proved only against the title index's section ranges.)
- Rule 59: the quote checker must resolve agency-rule citations (`94-348 C.M.R. ch. 8, § 8.06`), hyphen-numbered sections (`§ 1604-111`, `§ 8-509`) and quotes containing a plural possessive ("days'"). Until it does, the log lists each quote verified by eye. (ME: canvass helpers paraphrased agency rules because the checker could not resolve them.)
- Rule 26/28: when a state's waiver-penalty statute makes a whole class of shared clauses unusable (a "Landlord is not liable" disclaimer, a prevailing-party fee), record the class decision once in §2.2 and point each untagged row to it, instead of a per-row reason. (ME: § 6030(2)(A)-(B) decided seven shared rows.)
- Rule 41: where the state has no statutory termination ground for an ordinary lease breach unless the lease supplies one (Maine's § 6001(1-B) imports only the 7-day causes), the state's `default-by-tenant` override must supply the contract termination term and say it is a contract figure. Education rows must not say the tenancy-at-will notice fills the gap. (ME: check round 1 found four rows with that misreading.)
- Rule 80: a checker that rewrites its own findings line must say so in its report; the merge should re-validate every erratum's `old` text against the current row after each round. (ME: rounds 2 and 3 each rewrote one line in place; both were caught.)

## Proposed topic questions
- `cannabis`: Does the medical-cannabis statute let a landlord ban smoking of medical cannabis only if all smoking is banned and notice is posted, and does "smoking" there include vaporizing? (Maine, tit. 22, § 2430-C(3).)
- `common-area-use`: Does a solar-device statute bar a lease from prohibiting a renter's clothesline or drying rack? (Maine, tit. 33, § 1423(2)(B).)
- `default-by-tenant`: Does a written lease without its own breach-termination term leave the landlord only the statute's short-notice causes? (Maine, tit. 14, § 6001(1-B).)
- `rental-application-accuracy`: May an applicant lawfully withhold a sealed conviction even when asked, so that the lease cannot treat that silence as a breach? (Maine, tit. 15, § 2266.)
- `habitability-waiver`: Does the statute let a tenant accept specified conditions for a stated rent reduction, and must any heat-level agreement be a separate document? (Maine, tit. 14, §§ 6021(5), 6021(6-A).)
- `abandoned-property`: May the lease itself authorize disposal of abandoned property without liability if the statute's notices are given? (Maine, tit. 14, § 6013.)
- `pet-policy`: Is a monthly pet charge rent, a recurring fee requiring the pre-lease total price disclosure, or neither? (Maine, tit. 14, §§ 6000(1-A)-(1-B), 6030-I, 6030-J.)
- `portable-solar`: Does a utility statute let a tenant install a plug-in solar or battery device without utility approval, and must the tenant restore the building? (Maine, tit. 35-A, § 3475.)
