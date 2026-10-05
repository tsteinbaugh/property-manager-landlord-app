# Kentucky — lease-clause decision log (state #36)

**Date:** 2026-10-04 to 2026-10-05 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule 9 triggers needed it. The whole Kentucky Revised Statutes (every live section), the Kentucky Constitution, the three recent session laws the history lines point to and the five eviction court forms were loaded, saved and hash-matched before the first battery, which gave full-text proof of absence and cross-chapter search directly (rule 9). Claude can't switch research mode on or off; only Taylor can.
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`KRS 383.580(2)`, `KRS 383.570, 383.580`, `902 KAR 10:120`, `2025 Ky. Acts ch. 56, sec. 4`, `Ky. Const. § 1`), checked by script (§8). No case is cited. Other states' codes keep their own forms where a row names them (`Fla. Stat. § 713.10`, `Tex. Prop. Code § 92.021`).
**Scope:** Kentucky state law only. Louisville Metro, Lexington-Fayette and other local ordinances are flagged, not resolved (rule 3); state law bars local landlord-tenant ordinances that conflict with it (KRS 383.198) and, for the subjects of the Uniform Residential Landlord and Tenant Act, any other ordinance (KRS 383.500) (`edu-local-preemption-ky`). Named and out of scope: mobile home lot rentals (flagged where Kentucky has a lot-specific rule, KRS 376.480), the URLTA exclusions in KRS 383.535 (`edu-urlta-scope-ky`), postsecondary on-campus housing (KRS 164.9492), assisted-living leases (KRS 194A.713), agricultural tenancies (KRS 383.110-383.130), commercial leases.
**Input CSV:** `lease-clauses.csv`, **3,530 rows, 17 columns, 3,413 active (826 lease clauses, 2,587 education)**, sha256 35456134dd63c1fd6d1bb4e7349098f201ad3ba9de5c37aa07f1b7ecf6f283b3; every per-state active count matched the kickoff exactly (rule 23). One dormant Kentucky row existed (rule 25, §5). This is Kentucky's only Desktop chat (rule 8).
**Output CSV:** `lease-clauses-KY-delta.csv`, **218 rows, 17 columns, CRLF**: 45 existing rows with `KY` added to `states`, a `KY:` note appended and `last_checked` 2026-10-05; and 173 new Kentucky rows (22 lease clauses, 151 education rows). **KY 218 active: 67 lease clauses (45 tagged + 22 Kentucky clauses), 151 education; all VERIFIED.** Merged with the master: 3,703 rows, 3,586 active; every other state's active count unchanged. **No shared row's text changed.** The dormant row stays off.

**The two tiers (the decision that shapes every row).** Kentucky's URLTA (KRS 383.505 to 383.715) applies only where a city, county or urban-county government has adopted it under KRS 383.500; elsewhere the older sections (KRS 383.010 to 383.302) and the common law govern. **Taylor's decision (2026-10-04, in this chat):** default lease clauses are drafted to be lawful in both tiers; an option lawful only outside URLTA localities is offered as an opt-in clause whose own text says where it does not apply, with an education row (the Tennessee possession-bond pattern). Every Kentucky note starts with a scope label: `KY-SCOPE: BOTH TIERS`, `URLTA LOCALITIES`, `STATEWIDE` or `NON-URLTA ONLY` (§3).

---

## 0. Completion status

| | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: KRS chapter 383 read whole, 79 live sections (the older sections, forcible detainer, KRS 383.290-383.302 and the URLTA); the section list diffed against every citation in the KY rows, each uncited section listed with its reason, and the long sections checked one level down) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Housing Authority of Paducah dwelling lease, Parts I-II (2022), mapped topic by topic; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 80 scenarios, Claude-generated on the AZ §18.1 model plus Kentucky-specific ones, run against the final rows; every scenario answered by a row or a stated scope line) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole KRS (25,283 live sections), the Constitution (277 entries), 3 session laws and 5 court forms loaded before the first battery and searched with 198 battery records; control 0 hits in every battery; every absence pattern tested against known positives; 31 records with a failed positive, all recorded and rerun or left uncited; relied-on hits read whole) |
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/REGISTRY.md`):** the whole KRS as published 2026-10-04/05 with Effective and History lines and dated versions; the Constitution; a chapter 383 check copy (identical to the corpus for all 79 sections); 2024 Ky. Acts ch. 3, 2025 Ky. Acts ch. 56 and ch. 63 as enrolled; court forms AOC-215, 216, 217, 218, 220; the real lease. **Cases:** none read (§1.4). |
| Step B — tag first | **Done.** 45 shared rows tagged KY (§2.1). Shared clauses screened and not tagged (§2.2): 12 replaced by Kentucky overrides (with their same-topic variants), 5 by tagged variants (four without a 'not liable' disclaimer, one with a statutory cure), the rest other states' own rules. All single-state clauses screened as a triage (§2.3). No shared text edited. |
| Step E — new KY rows | 22 Kentucky lease clauses and 151 education rows (§3). |
| Rule 25 | `landlords-access-hi-ky-ri-dc` verified against KRS 383.615 and left switched off; the topic is answered by `landlords-access-ky` (§5). |
| Step D screens | All run (§19). KRS 383.570 (prohibited terms), the two-tier rule and KRS 383.660 (notice periods) were the decisive screens (§2.2). |
| Optional clauses (rule 54) | 9 offered (§6.1); 9 lawful or doubtful options declined, each with an education row that says it is lawful, why it isn't offered, and that a landlord can add their own after taking advice. |
| Questions to Taylor (rule 76) | One: the two-tier drafting approach, answered 2026-10-04 (§6.2). Download approval also given. |
| Proof of absence | Absence rows cite their battery, hit count and known-positive result; every reference topic ends Present, Answered elsewhere, Confirmed absent, Not located, Not offered or Not applicable (§18). |
| Independent check | Separate agents checked every row against the saved sources in nine rounds (§13): round 1 all 217 rows then in the delta (15 ERROR, 79 FIX, 71 NOTE), then each round the rows edited after the last, through round 9; a separate agent checked this log (2 ERROR, 9 FIX, 11 NOTE, all applied) and the rows edited after it went back to rounds 7-9. |
| Currency | KRS database updated 10/04/2026, stating it includes enactments through the 2026 Regular Session; three recent acts read as enrolled (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Channel:** the built-in browser loaded each official page (Taylor approved downloads to his Downloads folder in this chat) and exported JSON; the files landed under temporary `.tmp` names and were identified by size and SHA-256, staged into the workspace and hash-matched (browser SHA-256 = file SHA-256). Files (`sources/REGISTRY.md`):
  - `ky-krs-corpus-20261005-part1.json` to `-part4.json` (sha256 54f57686..., bafb7ceb..., 65c8acf2..., 49d412ee...): every live section of the KRS from apps.legislature.ky.gov, each section's PDF text extracted with pdf.js 3.11.174 (25,283 live section entries of 40,541 index links on 753 chapter pages: 25,215 sections, 198 of the entries being dated versions, and the 75 Kentucky Rules of Evidence the KRS index carries; the rest of the links are repealed or renumbered stubs; 0 missing, 0 fetch errors).
  - `ky-constitution-20261005.json` (sha256 5f2e9ae0...): 277 entries (Preamble, §§ 1-263 with lettered sections, Schedule).
  - `ky-krs-ch383-20261004.json` (sha256 e066863a...): chapter 383 check copy, 79 live sections; equal to the corpus text for all 79.
  - `ky-session-laws-20261004.json` (sha256 5987fb6d...): 2024 Ky. Acts ch. 3 (HB 18), 2025 Ky. Acts ch. 56 (SB 129), 2025 Ky. Acts ch. 63 (HB 10), enrolled PDFs.
  - `ky-court-forms-20261004.json` (sha256 908982c0...): AOC-215, 216, 217, 218, 220 from kycourts.gov.
  - `ky-real-lease-paducah-ha-2022.json` (sha256 5e7cf5dc...; PDF 75ac916a...): §15.
- **Local adoption of the URLTA (rule 32):** Louisville Metro Code ch. 151, § 151.01 (codelibrary.amlegal.com) and Lexington-Fayette Code § 12-54 (library.municode.com), read in the browser 2026-10-04, not saved; the Legislative Research Commission's 2016 local mandate note on HB 380 (16RS) lists other adopting cities and two counties and says no current county list exists. That list is a dated lead, recorded in `edu-urlta-scope-ky` as such; no primary statewide list exists (`work/notes-urlta-localities.md`).
- **Citation format:** the kickoff's; log references written 'KY log §N'.

### 1.2 Currency (rule 16)
- **Compiled text:** the KRS site states 'Includes enactments through the 2026 Regular Session' and 'The KRS database was last updated on 10/04/2026'. Section PDFs carry 'Effective:' and 'History:' lines; future versions appear as separate dated entries, kept in the corpus. Chapter 383 has no future-dated version.
- **Session laws read as enrolled:** 2024 Ky. Acts ch. 3 (HB 18; KRS 65.874 source of income, 65.111 emergency response fees, 383.198 local preemption; emergency clause, veto overridden March 6, 2024); 2025 Ky. Acts ch. 56 (SB 129; KRS 383.199 owner-occupancy rule in a consolidated local government's county, 65.111 amendment; signed March 24, 2025; no effective-date clause, compiled 'Effective: June 27, 2025'); 2025 Ky. Acts ch. 63 (HB 10; KRS 383.290 removal of unlawful occupants; signed March 24, 2025, effective June 27, 2025). Rows citing these say so.
- **2026 bills (lead only):** the 26RS bill pages for the landlord-tenant bills (HB 201, 202, 295, 319, 337, 338, 340, 382; SB 54, 62, 83, 112, 288) were read in the browser 2026-10-04 and showed none enacted; they were not saved, so no row relies on them (the independent check removed the bill sentences that early drafts carried, §13). The compiled KRS through the 2026 Regular Session is the authority.
- **Other recent acts** in the history lines of cited sections (for example 2023 Ky. Acts ch. 177 for KRS 376.010; 2024 Ky. Acts ch. 140 for KRS 258.991) were relied on through the compiled text, not read as enrolled.

### 1.3 Corpus and method (rule 19)
- **Loaded before the first battery:** KRS 25,283 live sections, Constitution 277 entries, 3 session laws, 5 court forms: 25,568 searchable entries, the scope recorded in every code battery (`CONST 277, FORM 5, KRS 25283, SL 3`, generated from the index, WA lesson 7; four batteries record a narrower scope of their own: consumer-lease and ueta-excl-r2 KRS only, const-ga and const-tenancy Constitution only). Crawl timers ran in a Web Worker; exports ran from a second tab after a download click once reloaded the crawl tab.
- **Engine:** Python over the saved, hash-matched corpus (`work/engine.py`): normalized whitespace, headings reported separately as heading-only hits, optional section-wide context limb recorded with each battery; real and synthetic positives tested in the same step. Control term `zqxjvwk` in every battery: 0 hits.
- **Batteries:** 198 records (`batteries/ky-batteries.jsonl`, scripts `work/batteries.py` to `batteries10.py`); 158 are cited in the rows and §18. Battery citations in rows are generated from the saved log (`work/assemble.py`); the citation function refuses a failed battery.
- **Failures, all recorded:** 31 records carry a failed positive. Each was rerun (as `-r2`, `-r3`) or left uncited: the first-pass failures (deposit-deadline, late-fee-2, abandoned-property and -2, mitigation, criminal-termination, fmt, ueta-excl, flood, foreclosure, rent-increase-notice, pets-statute, dv, assignment, guest-rights, nuisance, utility-landlord, dv-confid, self-cure, condemned, assist-dog, children, meth-disc, rent-escalation) were rerun with corrected positives or patterns; in the canvass, tenant-records and employee-screen (synthetic positives in the wrong word order) were rerun as -r2; sex-offender-r2, stigmatized-r2 and collection-costs (wrong positive or word order) were rerun as sex-offender-r3, stigmatized-r3 and collection-costs-r2; service-agent-r2 and meter-conserv-r2 failed their real positives and are not cited. Failed batteries cited anywhere: none. The full log was checked after every run (WA lesson 1).
- **Zero-hit batteries with only synthetic positives:** each cited one sits beside an everyday-word rerun (`-ev` or `-r2`), generated into the citation automatically: flood-r2 → flood-ev, dv-confid-r2 → dv-confid-ev (also 0 hits), cameras → cameras-ev, for-cause → for-cause-ev (also 0 hits), sealing → sealing-ev, algorithm → algorithm-ev, double-let → double-let-ev, utility-exit → utility-exit-ev, inspection → inspection-ev, criminal-termination-r2 → criminal-termination-ev; window-guard → window-guard-r2, sprinkler → sprinkler-r2, alarm-tamper → alarm-tamper-r2, emergency-phone → emergency-phone-r2, utility-deposit → utility-deposit-r2, smoke-drift → smoke-drift-r2; window-guard-r2 is itself 0 hits with only a synthetic positive; waterbed and radiator are single-word searches with no context limb. cert-occ and meter-conserv have no rerun and are recorded, not relied on alone; employee-screen-r2 (0 hits) is cited only with 'not relied on as proof of absence'.
- **Pattern gaps found by the independent check (all fixed and rerun):** absence batteries that required a tenancy word or a narrow noun missed rules written in another regime's words: KRS 324.111 ('money belonging to others'), KRS 376.480 ('personalty', 'contents'), KRS 109.310 ('solid waste'), KRS 38.510 (no lease word), KRS 211.203 ('pool', 'Class B'), KRS 365.400 (no tenancy context), KRS 427.010(4) (no 'waive'), KRS 17.545 ('registrant'), KRS 381.300 ('real estate'), KRS 65.8840(5) ('unfit and unsafe for human habitation'). Reruns: adr-r2 (then found too narrow too: the general arbitration and mediation statutes, KRS 417.050, 454.011, use no tenancy word), fines-pass, abandoned-property-r3, utility-lien-r2, servicemember-r3, pool-r2, auto-renew-r2, sex-offender-r3, stigmatized-r3, foreign-own-r2, deposit-cap-r2, collection-costs-r2, payment-method, payment-order, concession, infirmity, minors, mil-disclosure, alt-housing, lead-disc, grill (§13; proposed SOP change 1).
- **Boundary:** the batteries searched the KRS, the Constitution, the three session laws and the five forms. Administrative regulations (KAR), case law, local ordinances, court rules and federal law were not searched, and nothing is claimed about them; rows that depend on them say so.
- **Tools:** every single-quoted passage in a KY note is checked by script against the section cited next to it (or, for a passage quoting library clause text, against the library) (§8); 43 passages are also registered through `Q()` with their full citation beside them (WA lesson 3). Checkers printed whole sections (`work/sec.py`, never truncated; WA lesson 2).

### 1.4 Section-open vs recall; case law (rules 15, 21)
- Every KY note ends 'Rule 15: written section-open'; no row was written from recall. (Early in the pass Claude cited SOP rules from memory before reading the SOP; it then read the SOP in full and re-checked those points.)
- **Case law: not searched.** Each question the statutes leave open is labelled in its row as Claude's reading or case law not searched: whether peaceable self-help is lawful outside URLTA localities for tenancies other than at will (`edu-self-help-eviction-ky`); mitigation outside URLTA localities (`edu-mitigation-ky`); the penalty doctrine for late fees, early-termination fees and holdover rates (`edu-late-fee-ky`, `early-termination-ks`, `edu-holdover-rate-ky`); whether a lease is a writing that 'create[s] a debt' under KRS 411.195 (`attorney-fees-non-urlta-ky`, `edu-attorney-fees-ky`); whether a lease is 'goods or services' under KRS 367.220 (`edu-consumer-protection-ky`); pre-dispute jury waivers (`edu-jury-waiver-ky`); the reach of KRS 383.195 to month-to-month tenancies (`edu-termination-notice-periods-ky`); whether a buyer takes subject to the lease (`edu-sale-or-management-change-ky`); the KRS 383.180(2) and 383.690 interplay (`no-sublet-assign` note); lease obligations as an 'indebtedness' under KRS 371.065 (`edu-guaranty-ky`); and whether a separately metered water account meets the landlord's duty to 'supply' (`utilities-responsibility-ky`).

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged KY as written (45)
Each tagged row's KY note carries a scope label and names the controlling text or the absence battery (an assembler check refuses an empty reason).
- `rent-payment` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Rent is 'payable without demand or notice at the time and place agreed upon by the parties' (KRS 383.565(2)); 'except as permitted by applicable law' keeps the tenant's deduct remedies (KRS 383.635, 383.640) and the abatement on non-delivery (KRS 383.630(1)). The cited sections apply where the URLTA is in effect; elsewhere the clause works as a contract term.
- `due-at-signing` (31 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Where the URLTA applies, collecting the deposit at signing fits KRS 383.580(1)-(2) if the damage list is given first and the tenant is told the separate account's location and number, as `security-deposit-use-ky` states, and a pet deposit is a security deposit there (Claude's reading); no Kentucky upfront-fee ban (KY battery fees-upfront (nonrefundable fees / move-in fees): 19 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `application-of-payments` (33 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). No Kentucky statute sets the order in which payments are applied (KY battery payment-order (order of applying payments (rent first, fees first)): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); where the URLTA applies, every payment except the deposit is rent (KRS 383.545(10)).
- `residential-use-only` (33 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'Unless otherwise agreed, a tenant shall occupy his dwelling unit only as a dwelling unit' (KRS 383.620). The cited sections apply where the URLTA is in effect; elsewhere the clause works as a contract term.
- `permitted-occupants` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Occupants named in the lease; KRS 383.620 (use as a dwelling unit); occupancy terms must not discriminate by familial status (KRS 344.360(2)), and reasonable government occupancy limits still apply (KRS 344.365(3)); `edu-children-occupancy-ky`.
- `no-disturbance` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). KRS 383.605(7) (tenant conduct not disturbing neighbors). A protected tenant has a defense to an action for possession based on complaints of noise, disturbances or repeated presence of peace officers tied to the protective order (KRS 383.300(3)(b)); the clause does not shift the landlord's KRS 383.595 repair duties to the tenant (Claude's reading). KRS 383.605 applies where the URLTA is in effect; KRS 383.300(3)(b) applies in every locality (leases made or renewed on or after June 29, 2017).
- `smoking-policy` (29 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). A property owner may prohibit or regulate medicinal cannabis on the property (KRS 218B.040(1)(e)); the program does not authorize smoking marijuana (KRS 218B.035(1)(g)); no housing smoking statute (KY battery smoke-drift (tobacco smoke drifting between units / smoking in multiunit housing): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery smoke-drift-r2 (smoking rules: smoke-free or tobacco in buildings (everyday rerun)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); the remediation-cost sentence is not an attorney-fee term (KRS 383.570(1)(c)).
- `utility-service-continuity` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). The clause only bars the tenant from causing an interruption; it does not shift the landlord's supply duty where the URLTA applies (KRS 383.595(1)(e)) and is lawful in both tiers; no Kentucky statute on tenant-caused interruption (KY battery utility-landlord-r2 (utility account held by landlord; tenant notice (rerun)): 8 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `utility-payment-evidence` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). A contract term on evidence of payment; no Kentucky statute engaged (KY battery utility-landlord-r2 (utility account held by landlord; tenant notice (rerun)): 8 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); see `utilities-responsibility-ky` for which utilities the tenant may be made to pay.
- `acceptable-payment-methods` (25 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). No Kentucky statute requires accepting cash or bars electronic-only payment (KY battery payment-method (rent payment methods: cash, electronic, money order): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); where the URLTA applies, rent is payable at the time and place agreed (KRS 383.565(2)). A later change of payment method on notice is an agreed term (Claude's reading; KRS 383.610(2), where the URLTA applies, covers rules on use and occupancy).
- `tenant-maintenance` (29 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). The body tracks KRS 383.605(2), (3), (5); its carve-out for conditions the law requires Landlord to repair keeps KRS 383.595(1) and avoids the KRS 383.595(4) separate-writing rule. The cited sections apply where the URLTA is in effect; elsewhere the clause works as a contract term.
- `no-sublet-assign` (32 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Without the landlord's written consent, an assignment or transfer by a tenant at will, by sufferance or for a term under two years operates as a forfeiture, enforceable after 10 days' written notice to quit (KRS 383.180(2)). Where the URLTA applies, termination follows KRS 383.660(1) (KRS 383.690); the interplay is case law, not searched. No rule requires reasonable consent (KY battery assignment-r2 (assignment/subletting (rerun)): 209 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `no-alterations` (34 states before KY): STATEWIDE. The last sentence keeps reasonable modifications under KRS 344.360(11)(a) and a protected tenant's lock change under KRS 383.300(4)(a).
- `joint-liability` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Chapter 383 (read whole) has no rule on joint and several liability; a released protected tenant owes no rent or fees solely for the early termination, and the tenancy continues for remaining tenants (KRS 383.300(5)(c)2., (7)), which override the clause by force of law.
- `services-utilities-provided-ks-oh` (23 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'and as otherwise required by applicable law' keeps the landlord's supply duties where the URLTA applies (KRS 383.595(1)(e)); the base clause's 'not liable for any interruption' sentence is not carried because a lease may not limit the landlord's liability there (KRS 383.570(1)(d)).
- `utilities-paid-by-landlord` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). A contract list of landlord-paid utilities; where the URLTA applies, list running water and hot water at all times, and heat from October 1 to May 1, unless the building is not required by law to be equipped for them or they come from a tenant-controlled installation on a direct utility connection, outside a single family residence (KRS 383.595(1)(e), (3); `utilities-responsibility-ky`, `edu-heating-ky`).
- `appliances-included` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'as provided in this Lease and applicable law' keeps the duty to maintain appliances 'supplied or required to be supplied' by the landlord where the URLTA applies (KRS 383.595(1)(d)).
- `landlord-maintenance` (22 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). KRS 383.595(1) where the URLTA applies; a contractual duty elsewhere (with the owner's statewide duty not to let a structure become unfit for habitation, KRS 65.8840(5)). The 'improper use' exception has no counterpart in the landlord's duty text; it is kept within 'consistent with applicable law', in URLTA localities the landlord's duty to keep the unit fit still applies, and the landlord's remedy is to recover the cost of tenant-caused harm (KRS 383.605(6), 383.660(3), 383.665) (Claude's reading).
- `surrender-end-of-term` (12 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'to the extent permitted by applicable law'; no Kentucky statute on belongings a residential tenant leaves behind outside mobile home lots (KY battery abandoned-property-r3 (abandoned belongings incl. personalty/contents (rerun of r2 with checker terms)): 32 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KRS 376.480 for lots; KRS 383.290 reaches only non-tenant unlawful occupants; `edu-abandoned-property-ky`). Disposal cost is not an attorney fee (KRS 383.570(1)(c), where the URLTA applies).
- `early-termination-ks` (22 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). The landlord's termination runs through the Tenant Default terms (`default-by-tenant-ky`, KRS 383.660 periods); the savings sentence keeps KRS 383.300(5) and KRS 211.905(5). Whether the fee is an unenforceable penalty is case law, not searched; no residential penalty statute (KY battery liquidated (liquidated damages or penalties outside UCC goods): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); the landlord must mitigate where the URLTA applies (KRS 383.520(1)).
- `notices` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). The deference sentence keeps the statutory methods: where the URLTA applies, a notice to the tenant is received when it comes to the tenant's attention, is delivered in hand, or is mailed by registered or certified mail to the place the tenant held out for receipt (or the last known residence), and a notice to the landlord when delivered in writing or sent by certified mail to the landlord's place of business or held-out place (KRS 383.560(3)(a)-(c)); termination periods run from receipt; elsewhere the forcible detainer and KRS 383.195 notice rules.
- `governing-law` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Local adoption of the URLTA is by ordinance (KRS 383.500), which 'any additional applicable laws of the city or county' covers; no Kentucky rule on choice of law in leases engaged (Claude's reading).
- `severability` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Where the URLTA applies, a prohibited provision is unenforceable (KRS 383.570(2)) and a court may enforce the rest of a lease without an unconscionable term (KRS 383.555(1)(a)); the clause states the same result, and works as a contract term elsewhere.
- `entire-agreement` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'or as applicable law permits Landlord to change it by written notice' does not override KRS 383.610(2), where the URLTA applies (a rule that substantially modifies the bargain needs the tenant's written consent).
- `addendum-precedence` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Required disclosures control over conflicting lease terms; chapter 383 (read whole) has no rule on addendum order; the methamphetamine disclosure (KRS 224.1-410(10)) and the URLTA disclosures (KRS 383.580, 383.585) are kept by the last clause.
- `electronic-signatures` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Kentucky's electronic transactions act 'applies only to transactions between parties each of which has agreed to conduct transactions by electronic means' (KRS 369.105(2)), satisfied by the consent sentence; KRS 369.103(2) excludes no leases; the refusal right in KRS 369.105(3) is not waived.
- `tenants-property-insurance-ks-oh-ca` (29 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). No limit on requiring renter's insurance (KY battery insurance-renters (renters insurance requirements): 4 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); the base clause's 'Landlord is not liable' sentence is not carried (KRS 383.570(1)(d), where the URLTA applies); `edu-renters-insurance-ky`.
- `parking-ks-oh-ca` (30 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'Landlord does not provide security' states a fact, not an exculpation (KRS 383.570(1)(d), where the URLTA applies); parking rules adopted later follow KRS 383.610 where the URLTA applies; towing `edu-towing-ky`.
- `storage-space-ks-oh-ca` (30 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). A contract term on storage; the base clause's disclaimer is not carried (KRS 383.570(1)(d), where the URLTA applies); the self-service storage act governs storage businesses, not space leased with a dwelling (KRS 359.200(1); Claude's reading) (`edu-exculpatory-clauses-ky`).
- `assigned-parking-space` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Reassignment is agreed at signing, and 'subject to any limits' keeps KRS 383.610(2) where the URLTA applies.
- `parking-vehicle-rules` (27 states before KY): STATEWIDE. A private lot owner may have unauthorized vehicles removed and must post signs (KRS 189.725(1)-(2)); tow-away zone signs KRS 281.924(3); both kept by 'in accordance with applicable law'; the clause says nothing on firearms, so KRS 237.106(1) is not engaged (`edu-firearms-ky`).
- `pet-insurance-requirement` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). The assistance-animal exclusion fits KRS 383.085(4) ('shall not be required to pay a pet fee or deposit or any additional rent'); no Kentucky pet insurance statute (KY battery pets-r2 (pets in rental housing (rerun)): 4 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `keys` (31 states before KY): STATEWIDE. The clause bars only duplication without consent; a protected tenant's rekey or lock replacement under KRS 383.300(4)(a) is untouched (`edu-dv-lockchange-ky`); no other residential lock statute (KY battery security-devices (locks, deadbolts, peepholes, rekey): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `guest-policy` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). No guest-rights statute (KY battery guest-rights-r2 (guest or visitor rights in rental housing (rerun)): 14 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3). Where the URLTA applies, a period Landlord specifies outside the lease is a rule, enforceable only if explicit and noticed, and one adopted later that substantially modifies the bargain needs the tenant's written consent (KRS 383.610(1)(d), (f), (2)); state the period in the lease or use `guest-policy-day-limit`.
- `guest-policy-day-limit` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). No guest-rights statute (KY battery guest-rights-r2 (guest or visitor rights in rental housing (rerun)): 14 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); a cotenant restrained by a protective order may be refused access unless the person is specifically permitted access by court order (KRS 383.300(6)(a)), which the clause does not limit.
- `common-area-use` (31 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). The final sentence keeps the U.S. flag display right ('Any agreement contravening this right shall be void', KRS 2.042; `edu-tenant-display-rights-ky`); no waterbed statute (KY battery waterbed (waterbed): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); no religious-display statute (KY battery religious-display (religious items on door or doorframe): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `fire-safety-grilling` (35 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). No KRS grill or open-flame rule for dwellings (KY battery grill (grills, barbecues or open flames at dwellings): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (its hit, KRS 217.015, is a definitions section); the fire code (815 KAR) was not read (KY log §7) and the clause cannot set a lower standard than the code.
- `landscaping-irrigation` (31 states before KY): BOTH TIERS (offered in both; where the URLTA applies it binds the tenant only for a single family residence). Rule 48 (uniform-act outcome): where the URLTA applies, the clause binds the tenant only for a single family residence (KRS 383.595(3); definition KRS 383.545(14)); for any other dwelling unit a chore agreement must be 'set forth in a separate writing signed by the parties and supported by adequate consideration' (KRS 383.595(4)(a)), so use `maintenance-allocation-ky`. Elsewhere no statute limits it.
- `snow-removal` (31 states before KY): BOTH TIERS (offered in both; where the URLTA applies it binds the tenant only for a single family residence). Rule 48: where the URLTA applies, binds the tenant only for a single family residence (KRS 383.595(3)); common areas are the landlord's duty (KRS 383.595(1)(c)) and the clause excludes shared areas; other dwelling units need `maintenance-allocation-ky` (KRS 383.595(4)). Elsewhere no statute limits it.
- `inspection-rights` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Entry 'to inspect the premises' is a purpose the tenant may not unreasonably refuse (KRS 383.615(1)), on two days' notice at reasonable times (KRS 383.615(3)), which runs through `landlords-access-ky`. The cited sections apply where the URLTA is in effect; elsewhere the clause works as a contract term.
- `lead-based-paint` (35 states before KY): STATEWIDE. Federal disclosure (not read; KY log §7); no Kentucky lease lead disclosure (KY battery lead-disc (lead-based paint disclosure to tenants or buyers): 1 hit, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); statewide, a health cabinet finding that a child under six is in immediate danger from lead hazards 'shall be cause for release from a rental agreement without prejudice to the occupant' (KRS 211.905(5); `edu-lead-hazard-release-ky`).
- `hoa-compliance` (33 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). In a planned community tenants must follow the association's covenants and rules (KRS 381.798); no statute limits passing association fines to the tenant (KY battery hoa-rental (association rental restrictions): 20 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (`edu-hoa-ky`).
- `rental-application-accuracy` (34 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). 'the remedies this Lease and applicable law provide' keeps the KRS 383.660(1) notice and cure where the URLTA applies; the last sentence keeps KRS 383.300(3)(a) and fair housing limits on what may be asked.
- `extended-absence-notice-ks` (9 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). Matches KRS 383.620 (notice of an absence 'in excess of seven (7) days no later than the first day of the extended absence') and KRS 383.670(1) (actual damages for willful failure). The cited sections apply where the URLTA is in effect; elsewhere the clause works as a contract term.
- `tenant-forward-proceedings-ca` (25 states before KY): BOTH TIERS (lawful where the URLTA, KRS 383.505 to 383.705, has been adopted locally and where it has not). A contract term; chapter 383 (read whole) neither requires nor bars it; the forcible detainer and foreclosure rules are unaffected (`edu-foreclosure-ky`).

### 2.2 Screened and not tagged
| Shared clause | Verdict | Kentucky reason |
|---|---|---|
| `landlords-access`, `landlords-access-mi` | Replaced by `landlords-access-ky` | 24 hours' notice 'during normal business hours' vs two days' notice and reasonable times (KRS 383.615(3)) |
| `default-by-tenant`, `default-by-tenant-ks-ne` | Replaced by `default-by-tenant-ky` | attorney-fee and 'reasonable costs and expenses' sentences vs KRS 383.570(1)(c); the KRS 383.660 periods; the police-call bar (KRS 383.302) |
| `holdover`, `holdover-ca` | Replaced by `holdover-ky` | ceiling-only damages (rule 53); the two holdover regimes (KRS 383.695, 383.160); the tenant's 10-day right (KRS 383.695(3)) |
| `security-deposit-use` | Replaced by `security-deposit-use-ky` | deposit purpose (KRS 383.545(13)); account and damage list (KRS 383.580(1)-(2)) |
| `security-deposit-return` (blank-states parent) | Replaced by `security-deposit-return-ky` | no general refund deadline; the move-out list and 60-day notice rule (KRS 383.580(3), (7)) |
| `existing-condition` | Replaced by `existing-condition-ky` | 'is in good order and repair' vs the signed damage list (KRS 383.580(2)) |
| `possession-delay`, `possession-delay-ca` | Replaced by `possession-delay-ky` | 30-day wait vs five days' notice (KRS 383.630(1)(a)) |
| `late-fee`, `late-fee-ne` | Replaced by `late-fee-ky` | 'acceptance is not a waiver' vs KRS 383.675 |
| `returned-payments` | Replaced by `returned-payments-ky` | ceiling-only fee (rule 53); no Kentucky cap |
| `pet-policy` | Replaced by `pet-policy-ky` | landlord indemnity (KRS 383.570(1)(d)) and entry to remove a pet (KRS 383.615(4)) |
| `utilities-responsibility` | Replaced by `utilities-responsibility-ky` (independent check, §13) | puts every unlisted utility on the tenant; where the URLTA applies the landlord must supply running water, and heat and hot water with two exceptions, outside a single family residence (KRS 383.595(1)(e), (3)) |
| `assistance-animal-accommodation` | Replaced by `assistance-animal-accommodation-ky` (independent check, §13) | documentation trigger ('disability or disability-related need is readily apparent', KRS 383.085(2)) and the conditional damage rule (KRS 383.085(4)) |
| `services-utilities-provided`, `tenants-property-insurance`, `parking`, `storage-space` | Their `-ks-oh(-ca)` variants tagged | the base clauses' 'not liable' sentences exculpate liability arising under law where the URLTA applies (KRS 383.570(1)(d)) (rule 52) |
| `early-termination` | `early-termination-ks` tagged | the base lets the landlord terminate on a 10-day cure, shorter than KRS 383.660(1) |
| `surrender-end-of-term-mn-nd`, `-ks-ne` | Not tagged | point to abandoned-property procedures Kentucky lacks for dwellings |
| `acceptable-payment-methods-nj`, `parking-vehicle-rules-id`, `ev-charging-*`, `utility-allowance-cap-co` and other state-named variants | Not tagged | rest on another state's statute |
**Void-term screen (lead 4):** every shared clause was read against KRS 383.570(1)(a)-(d) and KRS 383.302. Items that decided a row: (1)(c) attorney fees (`default-by-tenant`, `-ks-ne`); (1)(d) exculpation and indemnity (`pet-policy`, the four 'not liable' bases); (1)(a) waiver of Act rights (`late-fee`, `possession-delay`, `holdover`, `utilities-responsibility`). No shared clause contains a confession of judgment ((1)(b); also void statewide, KRS 372.140) or a police-call penalty.

### 2.3 Single-state clauses screened
Triage (rule 26; `work/triage.json`): **752** active clauses tagged to one state. **342** name another state or its statute in the clause text (not taggable as written; their topics are answered in §18). **372** sit on a topic a KY row answers. The other **38** were read in full: each rests on its own state's statute or on a topic Kentucky answers, except `government-fee-reimbursement-in` (Ind. Code § 36-1-20-2), whose subject Kentucky leaves to contract; Kentucky's own optional clause `government-fee-reimbursement-ky` was written (rule 26: the Indiana row rests on Indiana law, so it is not tagged). The topic canvass then produced `no-liens-ky` from `no-liens-fl`'s topic (KRS 376.010(3) is Florida's rule in Kentucky's words) and `edu-guaranty-ky` from `edu-guarantor-renewal-tx`'s topic (§18). Other states' texts that would be void where the URLTA applies (exculpation in `parking-mn`, `storage-space-mn`, `tenants-property-insurance-mn`; `smoke-drift-waiver-ut`'s release) are not tagged.

## 3. New KY rows
Every KY row: `verification_status` VERIFIED, `effective_from` and `last_checked` 2026-10-05, notes starting 'KY: KY-SCOPE: ...' and ending with the source line and 'Rule 15: written section-open'. Battery citations generated from the saved records. **Scope-label convention** (settled in the independent check): a lease clause's label says where the clause is used (BOTH TIERS for a default clause, NON-URLTA ONLY for the attorney-fee option); a tagged clause whose note rests only on statewide law is STATEWIDE; an education row stating both statewide rules and URLTA-only rules, each qualified in its text, is BOTH TIERS; a row stating only URLTA rules is URLTA LOCALITIES; only statewide rules, STATEWIDE.

### 3.1 KY lease clauses (22)
| Row | Group | Topic | rule_type | Basis | Supersedes | Scope | Citation |
|---|---|---|---|---|---|---|---|
| `landlords-access-ky` | Access & Entry | `landlord-entry` | CONSTRAINED | CONSTRAINED_TERM / SERVES_LANDLORD | `landlords-access` | BOTH | KRS 383.615(3), KRS 383.670(2), KRS 383.665, KRS 383.700 |
| `default-by-tenant-ky` | Default & Termination | `default-by-tenant` | RECOMMENDED | SERVES_LANDLORD | `default-by-tenant` | BOTH | KRS 383.570(1)(c), KRS 383.302(2), KRS 383.660(2), KRS 383.685 |
| `holdover-ky` | Default & Termination | `holdover` | RECOMMENDED | SERVES_LANDLORD | `holdover` | BOTH | KRS 383.565(3), KRS 383.695(4), KRS 383.195, KRS 383.570(1)(a) |
| `security-deposit-use-ky` | Security Deposit | `security-deposit-use` | CONDITIONAL | REQUIRED_DISCLOSURE: KRS 383.580(1) / CONSTRAINED_TERM | `security-deposit-use` | BOTH | KRS 383.545(13), KRS 383.580(6), KRS 383.085(4), KRS 393.080(1) |
| `security-deposit-return-ky` | Security Deposit | `security-deposit-return` | RECOMMENDED | SERVES_LANDLORD | `security-deposit-return` | BOTH | KRS 383.580(3) |
| `existing-condition-ky` | Tenant Responsibilities | `existing-condition` | RECOMMENDED | SERVES_LANDLORD | `existing-condition` | BOTH | KRS 383.580(2), KRS 383.595, KRS 383.590 |
| `possession-delay-ky` | Default & Termination | `possession-delay` | RECOMMENDED | SERVES_LANDLORD | `possession-delay` | BOTH | KRS 383.630(1)(a), KRS 383.570(1)(a), KRS 383.595, KRS 383.590 |
| `late-fee-ky` | Rent & Payment | `late-fee` | RECOMMENDED | SERVES_LANDLORD | `late-fee` | BOTH | KRS 383.675, KRS 383.570(1)(a), KRS 359.215, KRS 383.010(1) |
| `landlord-disclosure-ky` | Disclosures | `owner-identity-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: KRS 383.585(1) | - | BOTH | KRS 383.585, KRS 383.545(5), KRS 383.540(2) |
| `tenant-caused-damage-ky` | Default & Termination | `tenant-caused-damage` | CONDITIONAL | SERVES_LANDLORD | - | BOTH | KRS 383.625(1)(c), KRS 383.635(2), KRS 383.640(4), KRS 383.650(1) |
| `pet-policy-ky` | Pets | `pet-policy` | RECOMMENDED | SERVES_LANDLORD | `pet-policy` | BOTH | KRS 383.570(1)(d), KRS 383.665, KRS 383.670(2), KRS 383.615(4) |
| `returned-payments-ky` | Rent & Payment | `returned-payments` | RECOMMENDED | SERVES_LANDLORD | `returned-payments` | BOTH | KRS 514.040(4)(b), KRS 383.545(10) |
| `maintenance-allocation-ky` | Landlord Responsibilities | `tenant-repair-agreement` | CONDITIONAL | SERVES_LANDLORD | - | BOTH | KRS 383.595(3), KRS 383.545(14), KRS 383.170 |
| `casualty-ky` | Default & Termination | `casualty-termination` | RECOMMENDED | SERVES_LANDLORD | - | BOTH | KRS 383.650(1), KRS 383.170 |
| `criminal-activity-ky` | Default & Termination | `criminal-activity` | CONDITIONAL | SERVES_LANDLORD | - | BOTH | KRS 383.660(1), KRS 383.300(3)(a), KRS 383.302(1), KRS 344.365(4) |
| `attorney-fees-non-urlta-ky` | Default & Termination | `attorney-fees` | CONDITIONAL | SERVES_LANDLORD | - | NON-URLTA | KRS 411.195, KRS 383.570(1)(c), KRS 383.660(3), KRS 383.505 |
| `utilities-responsibility-ky` | Tenant Responsibilities | `utilities-responsibility` | RECOMMENDED | SERVES_LANDLORD | `utilities-responsibility` | BOTH | KRS 383.595(1)(e), KRS 383.545(14), KRS 383.640(1)(a), KRS 383.570(1)(a) |
| `assistance-animal-accommodation-ky` | Pets | `assistance-animal-accommodation` | RECOMMENDED | SERVES_LANDLORD | `assistance-animal-accommodation` | STATEWIDE | KRS 383.085(2), KRS 344.360(14) |
| `meth-contamination-disclosure-ky` | Disclosures | `meth-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: KRS 224.1-410(10) | - | STATEWIDE | KRS 224.1-410(10), KRS 224.99-010(15) |
| `rent-increase-midterm-ky` | Rent & Payment | `rent-escalation` | CONDITIONAL | SERVES_LANDLORD | - | BOTH | KRS 383.565(1), KRS 383.705(1), KRS 383.695(2) |
| `government-fee-reimbursement-ky` | Rent & Payment | `government-fee-reimbursement` | CONDITIONAL | SERVES_LANDLORD | - | BOTH | KRS 383.505, KRS 383.565(1), KRS 383.545(10), KRS 65.111(2)(a) |
| `no-liens-ky` | Tenant Responsibilities | `construction-liens` | RECOMMENDED | SERVES_LANDLORD | - | STATEWIDE | KRS 376.010(1)(a) |

### 3.2 KY education rows (151)
| Row | Group | Topic | rule_type | Scope | Citation |
|---|---|---|---|---|---|
| `edu-urlta-scope-ky` | Notices & General | `scope` | RECOMMENDED | BOTH | KRS 383.505, KRS 383.500, KRS 383.195 |
| `edu-local-preemption-ky` | Notices & General | `rent-control` | RECOMMENDED | BOTH | KRS 383.198, KRS 383.505, KRS 383.500; absence: KY battery rent-control, rent-escalation-r2 |
| `edu-owner-occupancy-lease-limit-ky` | Compliance & Prohibited Terms | `single-family-zone-lease-limit` | PROHIBITED | STATEWIDE | KRS 383.199(1) |
| `edu-no-security-deposit-cap-ky` | Security Deposit | `security-deposit-cap` | RECOMMENDED | STATEWIDE | KRS 383.580, KRS 383.085(4) |
| `edu-security-deposit-holding-ky` | Security Deposit | `security-deposit-holding` | CONSTRAINED | BOTH | KRS 383.580(1), KRS 324.111(1) |
| `edu-condition-checklist-ky` | Security Deposit | `condition-inspection` | REQUIRED | URLTA | KRS 383.580(2) |
| `edu-security-deposit-penalty-ky` | Security Deposit | `security-deposit-penalty` | CONSTRAINED | URLTA | KRS 383.580(4) |
| `edu-deposit-refund-ky` | Security Deposit | `security-deposit-return` | CONSTRAINED | URLTA | KRS 383.580(6) |
| `edu-late-fee-ky` | Rent & Payment | `late-fee` | RECOMMENDED | BOTH | KRS 383.545(10), KRS 383.675, KRS 383.010(1); absence: KY battery late-fee, late-fee-r2 |
| `edu-unpaid-damages-interest-ky` | Rent & Payment | `unpaid-damages-interest` | RECOMMENDED | STATEWIDE | KRS 383.010(1), KRS 360.010(1)(a) |
| `edu-statute-of-frauds-ky` | Notices & General | `statute-of-frauds-lease-term` | RECOMMENDED | STATEWIDE | KRS 371.010(6), KRS 383.090 |
| `edu-prohibited-lease-terms-ky` | Compliance & Prohibited Terms | `prohibited-lease-terms` | PROHIBITED | BOTH | KRS 383.302(1), KRS 372.140(1), KRS 383.570(1) |
| `edu-dv-lease-termination-ky` | Default & Termination | `dv-lease-termination` | CONSTRAINED | STATEWIDE | KRS 383.300(1)(a), KRS 403.740, KRS 456.060 |
| `edu-dv-eviction-protection-ky` | Compliance & Prohibited Terms | `dv-eviction-protection` | PROHIBITED | STATEWIDE | KRS 383.300(1)(b) |
| `edu-dv-lockchange-ky` | Access & Entry | `dv-lockchange` | CONSTRAINED | STATEWIDE | KRS 383.300(4)(a) |
| `edu-emergency-assistance-right-ky` | Compliance & Prohibited Terms | `emergency-assistance-right` | PROHIBITED | STATEWIDE | KRS 383.302(1) |
| `edu-assistance-animals-ky` | Pets | `assistance-animal-accommodation` | PROHIBITED | STATEWIDE | KRS 383.085(1), KRS 344.360(11)(b) |
| `edu-service-animal-misrepresentation-ky` | Pets | `service-animal-misrepresentation` | RECOMMENDED | STATEWIDE | KRS 383.085(6)(a) |
| `edu-unauthorized-occupants-ky` | Default & Termination | `unauthorized-occupant-removal` | CONSTRAINED | STATEWIDE | KRS 383.290(1) |
| `edu-fair-housing-ky` | Compliance & Prohibited Terms | `fair-housing` | PROHIBITED | STATEWIDE | KRS 344.360(1), KRS 344.010(8), KRS 344.365(1)(a) |
| `edu-source-of-income-ky` | Compliance & Prohibited Terms | `source-of-income` | RECOMMENDED | STATEWIDE | KRS 65.874, KRS 344.360; absence: KY battery soi |
| `edu-firearms-ky` | Rules & Regulations | `firearms` | PROHIBITED | STATEWIDE | KRS 237.106(1), KRS 65.870(1), KRS 237.115(2); absence: KY battery firearms |
| `edu-cannabis-ky` | Other / Miscellaneous | `cannabis` | RECOMMENDED | STATEWIDE | KRS 218B.040(1)(e), KRS 218B.035(1)(g), KRS 218B.010 |
| `edu-towing-ky` | Parking & Storage | `towing` | CONSTRAINED | STATEWIDE | KRS 189.725(1), KRS 281.924(3), KRS 281.924-281 |
| `edu-landlord-repair-duties-ky` | Landlord Responsibilities | `landlord-maintenance` | CONSTRAINED | BOTH | KRS 383.595(1)(a), KRS 383.575, KRS 211.905(2)(c) |
| `edu-tenant-repair-remedies-ky` | Landlord Responsibilities | `tenant-repair-remedies` | CONSTRAINED | BOTH | KRS 383.625(1), KRS 383.635(1), KRS 383.640(1) |
| `edu-retaliation-ky` | Compliance & Prohibited Terms | `retaliation` | PROHIBITED | BOTH | KRS 383.705(1), KRS 383.655, KRS 383.300(3)(a) |
| `edu-self-help-eviction-ky` | Compliance & Prohibited Terms | `self-help-eviction` | PROHIBITED | BOTH | KRS 383.690, KRS 383.655, KRS 383.680(2) |
| `edu-landlord-lien-ky` | Rent & Payment | `landlord-lien` | CONSTRAINED | BOTH | KRS 383.070(2), KRS 383.020, KRS 427.010(1) |
| `edu-abandoned-property-ky` | Default & Termination | `abandoned-property` | RECOMMENDED | BOTH | KRS 376.480(1), KRS 383.615(4)(c), KRS 383.670(3) |
| `edu-termination-notice-periods-ky` | Default & Termination | `termination-notice` | CONSTRAINED | BOTH | KRS 383.695(1), KRS 383.565(3), KRS 383.195 |
| `edu-no-for-cause-eviction-ky` | Default & Termination | `for-cause-eviction` | RECOMMENDED | BOTH | KRS 383.705, KRS 383.300(3)(a), KRS 383.302; absence: KY battery for-cause, for-cause-ev |
| `edu-eviction-process-ky` | Default & Termination | `eviction-process` | CONSTRAINED | BOTH | KRS 383.200, KRS 454.030, AOC-215 |
| `edu-eviction-records-ky` | Default & Termination | `eviction-record-sealing` | RECOMMENDED | STATEWIDE | KRS 383.250 |
| `edu-rules-changes-ky` | Rules & Regulations | `rules-regulations` | CONSTRAINED | URLTA | KRS 383.610(1)(a), KRS 383.545(11) |
| `edu-notice-delivery-ky` | Notices & General | `notice-delivery-methods` | CONSTRAINED | BOTH | KRS 383.560(1), KRS 369.103, KRS 369.108(2)(b) |
| `edu-holdover-rate-ky` | Default & Termination | `holdover-rate` | RECOMMENDED | BOTH | KRS 383.695(4), KRS 383.520(1), KRS 383.160(1) |
| `edu-mitigation-ky` | Default & Termination | `abandonment-and-mitigation` | CONSTRAINED | BOTH | KRS 383.520(1), KRS 383.670(3), KRS 383.675 |
| `edu-attorney-fees-ky` | Default & Termination | `attorney-fees` | CONSTRAINED | BOTH | KRS 383.570(1)(c), KRS 383.660(3), KRS 383.302(2) |
| `edu-sale-or-management-change-ky` | Notices & General | `sale-or-management-change` | CONSTRAINED | BOTH | KRS 383.600(1), KRS 383.585(2), KRS 383.540(2) |
| `edu-maintenance-delegation-ky` | Landlord Responsibilities | `tenant-repair-agreement` | CONSTRAINED | BOTH | KRS 383.595(1)(c), KRS 383.545(14), KRS 383.170 |
| `edu-dishonored-payment-remedies-ky` | Rent & Payment | `returned-payments` | RECOMMENDED | BOTH | KRS 383.545(10), KRS 514.040(4)(b); absence: KY battery nsf |
| `edu-knowing-use-penalty-ky` | Compliance & Prohibited Terms | `knowing-use-penalty` | CONSTRAINED | BOTH | KRS 383.570(2), KRS 383.302(2) |
| `edu-deposit-escheat-ky` | Security Deposit | `deposit-escheat` | CONSTRAINED | BOTH | KRS 383.580(7), KRS 393.080(1), KRS 393A.010 |
| `edu-radon-disclosure-ky` | Disclosures | `radon-disclosure` | RECOMMENDED | STATEWIDE | KRS 309.430; absence: KY battery mold-radon |
| `edu-mold-disclosure-ky` | Disclosures | `mold-disclosure` | RECOMMENDED | BOTH | KRS 367.83801, KRS 383.595(1); absence: KY battery mold-radon |
| `edu-bed-bug-disclosure-ky` | Disclosures | `bed-bug-disclosure` | RECOMMENDED | BOTH | KRS 383.595(1)(b); absence: KY battery mold-radon |
| `edu-flood-disclosure-ky` | Disclosures | `flood-disclosure` | RECOMMENDED | STATEWIDE | absence: KY battery flood-r2, flood-ev |
| `edu-sex-offender-occupancy-ky` | Rules & Regulations | `sex-offender-occupancy` | RECOMMENDED | STATEWIDE | KRS 17.545(1) |
| `edu-sex-offender-disclosure-ky` | Disclosures | `sex-offender-disclosure` | RECOMMENDED | STATEWIDE | KRS 17.510; absence: KY battery sex-offender, sex-offender-r3 |
| `edu-military-zone-disclosure-ky` | Disclosures | `military-air-zone-disclosure` | RECOMMENDED | STATEWIDE | absence: KY battery mil-disclosure |
| `edu-stigmatized-property-ky` | Disclosures | `stigmatized-property` | RECOMMENDED | STATEWIDE | KRS 207.250(1), KRS 224.1-410(10) |
| `edu-security-deposit-interest-ky` | Security Deposit | `security-deposit-interest` | RECOMMENDED | STATEWIDE | KRS 383.580(1); absence: KY battery deposit-interest |
| `edu-deposit-installments-ky` | Security Deposit | `deposit-installments` | RECOMMENDED | STATEWIDE | absence: KY battery installments |
| `edu-fee-in-lieu-of-deposit-ky` | Security Deposit | `fee-in-lieu-of-deposit` | RECOMMENDED | BOTH | KRS 383.545(10); absence: KY battery installments |
| `edu-holding-deposit-ky` | Security Deposit | `holding-deposit` | RECOMMENDED | BOTH | KRS 383.580(1), KRS 383.630(1)(a), KRS 324.111(1); absence: KY battery holding-deposit |
| `edu-nonrefundable-fees-ky` | Rent & Payment | `nonrefundable-deposit-notice` | RECOMMENDED | BOTH | KRS 383.545(10), KRS 383.580(6); absence: KY battery fees-upfront |
| `edu-deposit-cost-schedule-ky` | Security Deposit | `deposit-cost-schedule` | RECOMMENDED | BOTH | KRS 383.580(3); absence: KY battery deposit |
| `edu-application-fees-ky` | Rent & Payment | `application-fees` | RECOMMENDED | STATEWIDE | absence: KY battery app-fee, screening-fee |
| `edu-tenant-screening-ky` | Compliance & Prohibited Terms | `tenant-screening` | RECOMMENDED | STATEWIDE | KRS 383.300(3)(a), KRS 383.085(2), KRS 344.360; absence: KY battery screening-fee, app-fee |
| `edu-immigration-status-ky` | Compliance & Prohibited Terms | `immigration-status` | RECOMMENDED | STATEWIDE | KRS 344.360(1); absence: KY battery immigration |
| `edu-algorithmic-rent-ky` | Rent & Payment | `algorithmic-rent-setting` | RECOMMENDED | STATEWIDE | KRS 367.175(1); absence: KY battery algorithm, algorithm-ev |
| `edu-rent-receipts-ky` | Rent & Payment | `rent-receipts` | RECOMMENDED | STATEWIDE | absence: KY battery receipt |
| `edu-rent-increase-notice-ky` | Rent & Payment | `rent-increase-notice` | RECOMMENDED | BOTH | KRS 383.695(1), KRS 383.195, KRS 383.705(1); absence: KY battery rent-increase-notice-r2, rent-escalation-r2 |
| `edu-term-change-notice-ky` | Notices & General | `term-change-notice` | RECOMMENDED | BOTH | KRS 383.610(2), KRS 383.695(1); absence: KY battery rent-increase-notice-r2 |
| `edu-fee-transparency-ky` | Rent & Payment | `fee-transparency` | RECOMMENDED | STATEWIDE | absence: KY battery fees-upfront, blank-spaces |
| `edu-required-fees-ky` | Rent & Payment | `required-fees` | RECOMMENDED | BOTH | KRS 383.610(2), KRS 383.085(4); absence: KY battery fees-upfront |
| `edu-lease-completeness-ky` | Notices & General | `lease-completeness` | RECOMMENDED | STATEWIDE | absence: KY battery blank-spaces |
| `edu-lease-copy-ky` | Notices & General | `lease-copy` | RECOMMENDED | STATEWIDE | absence: KY battery copy-of-lease, blank-spaces |
| `edu-plain-language-ky` | Notices & General | `plain-language` | RECOMMENDED | STATEWIDE | absence: KY battery blank-spaces, fmt-r2 |
| `edu-translation-ky` | Notices & General | `translation-duty` | RECOMMENDED | STATEWIDE | absence: KY battery blank-spaces |
| `edu-tenant-rights-statement-ky` | Notices & General | `tenant-rights-statement` | RECOMMENDED | STATEWIDE | absence: KY battery blank-spaces, fmt-r2 |
| `edu-required-disclosures-ky` | Disclosures | `required-disclosures` | RECOMMENDED | BOTH | KRS 383.585, KRS 224.1-410(10), KRS 164.9492 |
| `edu-rent-tax-ky` | Rent & Payment | `rent-tax` | RECOMMENDED | STATEWIDE | KRS 139.200(2)(a), KRS 142.400(2), KRS 91A.390 |
| `edu-rent-reporting-ky` | Rent & Payment | `rent-reporting` | RECOMMENDED | STATEWIDE | KRS 383.300(5)(c); absence: KY battery rent-reporting |
| `edu-rent-concession-ky` | Rent & Payment | `rent-concession` | RECOMMENDED | STATEWIDE | KRS 383.300(5)(c); absence: KY battery concession |
| `edu-shutdown-rent-ky` | Rent & Payment | `shutdown-rent-protection` | RECOMMENDED | STATEWIDE | absence: KY battery shutdown |
| `edu-utility-submetering-ky` | Landlord Responsibilities | `utility-submetering-disclosure` | RECOMMENDED | STATEWIDE | KRS 278.495(1)(b); absence: KY battery utility-billing, utility-landlord-r2 |
| `edu-utility-apportionment-ky` | Landlord Responsibilities | `utility-apportionment` | RECOMMENDED | STATEWIDE | absence: KY battery utility-billing |
| `edu-utility-landlord-account-ky` | Landlord Responsibilities | `utility-landlord-account` | RECOMMENDED | BOTH | KRS 383.640(1)(a), KRS 383.655, KRS 383.690; absence: KY battery utility-landlord-r2 |
| `edu-utility-shutoff-ky` | Landlord Responsibilities | `utility-shutoff-statute` | RECOMMENDED | STATEWIDE | KRS 96.934, 807 KAR 5:006; absence: KY battery utility-landlord-r2 |
| `edu-utility-lien-ky` | Landlord Responsibilities | `municipal-utility-lien` | RECOMMENDED | STATEWIDE | KRS 109.310(1) |
| `edu-servicemember-rights-ky` | Default & Termination | `servicemember-rights` | RECOMMENDED | STATEWIDE | KRS 38.510, KRS 367.550 |
| `edu-tenant-death-ky` | Default & Termination | `tenant-death` | RECOMMENDED | STATEWIDE | KRS 383.010(5), KRS 383.190; absence: KY battery tenant-death, death |
| `edu-infirmity-termination-ky` | Default & Termination | `infirmity-termination` | RECOMMENDED | STATEWIDE | KRS 194A.713; absence: KY battery infirmity |
| `edu-foreclosure-ky` | Default & Termination | `foreclosure` | RECOMMENDED | STATEWIDE | absence: KY battery foreclosure-r2 |
| `edu-foreclosure-disclosure-ky` | Disclosures | `foreclosure-disclosure` | RECOMMENDED | STATEWIDE | absence: KY battery foreclosure-r2 |
| `edu-condo-conversion-ky` | Notices & General | `conversion-notice` | RECOMMENDED | STATEWIDE | KRS 381.9101; absence: KY battery condo-conversion |
| `edu-expedited-criminal-eviction-ky` | Default & Termination | `expedited-criminal-eviction` | RECOMMENDED | BOTH | KRS 218A.410(1)(k), KRS 383.660(1), KRS 383.302(1) |
| `edu-eviction-hardship-stay-ky` | Default & Termination | `eviction-hardship-stay` | RECOMMENDED | STATEWIDE | KRS 383.255(1), KRS 425.081; absence: KY battery stay |
| `edu-minor-defendants-ky` | Default & Termination | `minor-tenant-filing` | RECOMMENDED | STATEWIDE | absence: KY battery minors, sealing, sealing-ev |
| `edu-landlord-registration-ky` | Notices & General | `landlord-registration` | RECOMMENDED | STATEWIDE | KRS 383.198 |
| `edu-rental-inspection-ky` | Landlord Responsibilities | `rental-inspection` | RECOMMENDED | STATEWIDE | KRS 211.905(1); absence: KY battery inspection, inspection-ev |
| `edu-renters-insurance-ky` | Notices & General | `renters-insurance-rules` | RECOMMENDED | BOTH | KRS 383.570(1)(d); absence: KY battery insurance-renters |
| `edu-dv-confidentiality-ky` | Compliance & Prohibited Terms | `dv-confidentiality` | RECOMMENDED | STATEWIDE | KRS 383.300(5)(a); absence: KY battery dv-confid-r2, dv-confid-ev |
| `edu-security-devices-ky` | Landlord Responsibilities | `security-devices` | RECOMMENDED | STATEWIDE | KRS 383.300(4)(a); absence: KY battery security-devices |
| `edu-tenant-cameras-ky` | Rules & Regulations | `tenant-security-cameras` | RECOMMENDED | STATEWIDE | absence: KY battery cameras, cameras-ev |
| `edu-telecom-access-ky` | Rules & Regulations | `telecom-access` | RECOMMENDED | STATEWIDE | absence: KY battery telecom |
| `edu-ev-charging-ky` | Parking & Storage | `ev-charging` | RECOMMENDED | STATEWIDE | absence: KY battery solar-ev |
| `edu-portable-solar-ky` | Rules & Regulations | `portable-solar` | RECOMMENDED | STATEWIDE | absence: KY battery solar-ev |
| `edu-pool-safety-ky` | Landlord Responsibilities | `pool-safety` | RECOMMENDED | STATEWIDE | KRS 211.203(1)(b); absence: KY battery pool, pool-r2 |
| `edu-waterbed-ky` | Rules & Regulations | `waterbed` | RECOMMENDED | STATEWIDE | absence: KY battery waterbed |
| `edu-guest-rights-ky` | Rules & Regulations | `guest-rights` | RECOMMENDED | STATEWIDE | KRS 383.300(6)(a); absence: KY battery guest-rights-r2 |
| `edu-double-letting-ky` | Notices & General | `double-letting` | RECOMMENDED | BOTH | KRS 383.630; absence: KY battery double-let, double-let-ev |
| `edu-automatic-renewal-ky` | Notices & General | `automatic-renewal` | RECOMMENDED | STATEWIDE | KRS 365.400(1), KRS 365.402, KRS 365.404; absence: KY battery auto-renew, auto-renew-r2 |
| `edu-periodic-services-entry-ky` | Access & Entry | `periodic-services-entry` | RECOMMENDED | BOTH | KRS 383.615(1); absence: KY battery entry |
| `edu-children-occupancy-ky` | Compliance & Prohibited Terms | `children-occupancy` | RECOMMENDED | STATEWIDE | KRS 344.010(15); absence: KY battery children-r2 |
| `edu-portfolio-thresholds-ky` | Notices & General | `portfolio-thresholds` | RECOMMENDED | STATEWIDE | KRS 344.365(1)(a) |
| `edu-alarm-duties-ky` | Landlord Responsibilities | `alarm-duties` | RECOMMENDED | BOTH | KRS 227.555(1), KRS 199.8982, KRS 216B.300(4); absence: KY battery smoke, co |
| `edu-water-heater-temperature-ky` | Landlord Responsibilities | `water-heater-temperature` | RECOMMENDED | STATEWIDE | KRS 211.985(1) |
| `edu-hoa-ky` | Disclosures | `hoa` | RECOMMENDED | STATEWIDE | KRS 381.9133(1)(l), KRS 381.9155(1), KRS 381.9181(3); absence: KY battery hoa-rental |
| `edu-jury-waiver-ky` | Compliance & Prohibited Terms | `jury-waiver` | RECOMMENDED | STATEWIDE | KRS 383.210(2), Ky. Const. § 7; absence: KY battery waiver-jury |
| `edu-homestead-waiver-ky` | Compliance & Prohibited Terms | `homestead-waiver` | RECOMMENDED | BOTH | KRS 427.100, KRS 427.060, KRS 427.010(1) |
| `edu-collection-fee-ky` | Rent & Payment | `collection-fee` | RECOMMENDED | BOTH | KRS 383.685, KRS 411.195; absence: KY battery debt-collection, collection-costs-r2 |
| `edu-foreign-ownership-ky` | Notices & General | `foreign-ownership` | RECOMMENDED | STATEWIDE | KRS 381.320, KRS 381.300(1), KRS 381.290; absence: KY battery foreign-own, foreign-own-r2 |
| `edu-drug-free-addendum-ky` | Default & Termination | `drug-free-housing-addendum` | RECOMMENDED | STATEWIDE | absence: KY battery criminal-termination-r2, criminal-termination-ev |
| `edu-receivership-ky` | Landlord Responsibilities | `substandard-property-receivership` | RECOMMENDED | STATEWIDE | KRS 99.785(1), KRS 425.600(1) |
| `edu-fees-as-rent-ky` | Rent & Payment | `fees-as-rent` | RECOMMENDED | BOTH | KRS 383.545(10), KRS 383.675, AOC-216 |
| `edu-waiver-by-acceptance-ky` | Default & Termination | `waiver-by-acceptance` | CONSTRAINED | BOTH | KRS 383.675, KRS 383.570(1)(a) |
| `edu-landlord-self-cure-ky` | Landlord Responsibilities | `landlord-self-cure` | CONSTRAINED | URLTA | KRS 383.665, KRS 383.615(4)(b) |
| `edu-tenant-statutory-duties-ky` | Tenant Responsibilities | `tenant-statutory-duties` | RECOMMENDED | URLTA | KRS 383.605(1) |
| `edu-nonpayment-notice-ky` | Default & Termination | `nonpayment-notice` | CONSTRAINED | BOTH | KRS 383.660(2), KRS 383.570(1)(a), AOC-216 |
| `edu-cure-periods-ky` | Default & Termination | `cure-and-eviction-grounds` | CONSTRAINED | BOTH | KRS 383.660(1), KRS 383.695(3), KRS 383.180(2) |
| `edu-post-eviction-property-ky` | Default & Termination | `post-eviction-property` | RECOMMENDED | STATEWIDE | KRS 383.245, AOC-220, KRS 383.290(5)(c) |
| `edu-deposit-last-month-rent-ky` | Security Deposit | `deposit-last-month-rent` | CONSTRAINED | URLTA | KRS 383.545(13), KRS 383.580(6) |
| `edu-deposit-on-sale-ky` | Security Deposit | `security-deposit-on-sale` | RECOMMENDED | BOTH | KRS 383.600(1); absence: KY battery deposit-transfer |
| `edu-pet-fees-ky` | Pets | `pet-fees` | RECOMMENDED | BOTH | KRS 383.545(10), KRS 383.085(4) |
| `edu-disability-accommodation-ky` | Compliance & Prohibited Terms | `disability-accommodation` | PROHIBITED | STATEWIDE | KRS 344.360(11)(a), KRS 344.365(1)(a) |
| `edu-protected-class-inquiry-ky` | Compliance & Prohibited Terms | `protected-class-inquiry-ban` | PROHIBITED | STATEWIDE | KRS 344.360(6), KRS 344.365(1) |
| `edu-service-animal-denial-ky` | Pets | `service-animal-denial-penalty` | PROHIBITED | STATEWIDE | KRS 383.085(1)(a), KRS 258.500(1)(a), KRS 258.991(1) |
| `edu-unconscionability-ky` | Compliance & Prohibited Terms | `unconscionability` | CONSTRAINED | BOTH | KRS 383.555(1), KRS 383.545(16), KRS 367.170(2) |
| `edu-exculpatory-clauses-ky` | Compliance & Prohibited Terms | `exculpatory-clauses` | PROHIBITED | BOTH | KRS 383.570(1)(d) |
| `edu-tenant-organizing-ky` | Compliance & Prohibited Terms | `tenant-right-to-organize` | PROHIBITED | URLTA | KRS 383.705(1)(c) |
| `edu-nonresident-owner-agent-ky` | Notices & General | `nonresident-owner-agent` | RECOMMENDED | URLTA | KRS 383.540(2), KRS 383.585(1)(b) |
| `edu-rent-into-court-ky` | Default & Termination | `rent-into-court-counterclaim` | CONSTRAINED | BOTH | KRS 383.645(1), KRS 383.565, KRS 383.255(1) |
| `edu-condemned-premises-ky` | Landlord Responsibilities | `condemned-premises-rent-bar` | RECOMMENDED | BOTH | KRS 211.905(2) |
| `edu-lead-hazard-release-ky` | Disclosures | `lead-based-paint` | CONSTRAINED | STATEWIDE | KRS 211.905(1) |
| `edu-alt-housing-ky` | Landlord Responsibilities | `alt-housing` | RECOMMENDED | BOTH | KRS 383.640(1)(c), KRS 67.420 |
| `edu-heating-ky` | Landlord Responsibilities | `heating` | CONSTRAINED | URLTA | KRS 383.595(1)(e) |
| `edu-repair-notice-ky` | Landlord Responsibilities | `repair-notice` | RECOMMENDED | URLTA | KRS 383.625(1), KRS 383.560(3)(b) |
| `edu-quiet-possession-ky` | Landlord Responsibilities | `quiet-possession` | RECOMMENDED | BOTH | KRS 383.655 |
| `edu-tenancy-at-will-ky` | Default & Termination | `tenancy-at-will` | CONSTRAINED | BOTH | KRS 383.195, KRS 383.565(3) |
| `edu-statutory-forms-ky` | Default & Termination | `statutory-forms` | RECOMMENDED | STATEWIDE | KRS 383.210(1), AOC-215, AOC-216 |
| `edu-statutory-early-termination-ky` | Default & Termination | `statutory-early-termination` | CONSTRAINED | BOTH | KRS 383.300(5), KRS 211.905(5), KRS 383.625(1) |
| `edu-tenant-display-rights-ky` | Rules & Regulations | `tenant-display-rights` | PROHIBITED | STATEWIDE | KRS 2.042 |
| `edu-nuisance-ky` | Default & Termination | `nuisance` | RECOMMENDED | STATEWIDE | KRS 233.020, KRS 242.350(2), KRS 65.8840(3) |
| `edu-consumer-protection-ky` | Compliance & Prohibited Terms | `consumer-protection-act` | CONSTRAINED | STATEWIDE | KRS 367.170(1), KRS 367.220(1) |
| `edu-rent-escalation-ky` | Rent & Payment | `rent-escalation` | RECOMMENDED | BOTH | KRS 383.565(1), KRS 383.705(1), KRS 383.300(3)(a); absence: KY battery rent-escalation-r2 |
| `edu-meth-disclosure-ky` | Disclosures | `meth-disclosure` | CONDITIONAL | STATEWIDE | KRS 224.1-410(4), KRS 224.99-010(15) |
| `edu-guaranty-ky` | Default & Termination | `guarantor-renewal` | CONSTRAINED | STATEWIDE | KRS 371.065(1) |
| `edu-dispute-resolution-ky` | Notices & General | `informal-dispute-resolution` | RECOMMENDED | BOTH | KRS 417.050, KRS 417.060(1), KRS 454.011; absence: KY battery adr-r2 |

## 4. Layout and placement (rule 40)
Batteries fmt-r2 (underlined, boldface, conspicuous, separate document or writing or instrument, substantially equivalent, point size, type size, capital letters; 362 hits), blank-spaces and copy-of-lease ran over the whole corpus before the rows were finalized (the 2026-10-04 drafts carried battery placeholders and were revised against the results). Read in a tenancy context (19 sections), the hits that reach housing are: KRS 164.9492 (postsecondary on-campus housing: a two-part fire-suppression disclosure 'separate from other rental documents, with typeface of no less than fourteen (14) points'; out of scope), KRS 194A.713 (assisted-living lease in at least 12-point type; out of scope), KRS 383.595(4)(a) (the separate chore writing) and AOC-215 (posting 'in a conspicuous place'). No type-size, boldface, capitals or first-page rule reaches an ordinary residential lease (`edu-plain-language-ky`). The UCC Article 2A 'conspicuous' rules (KRS 355.2A-214, 355.2A-303) govern leases of goods, and KRS 367.978 governs rental-purchase agreements; neither reaches a dwelling lease.

| Item | Rule | Where it goes |
|---|---|---|
| Manager and owner names and addresses | KRS 383.585(1): 'in writing at or before the commencement of the tenancy'; kept current (2) (URLTA localities) | Lease clause `landlord-disclosure-ky` (used in both tiers) |
| Deposit account location and number | KRS 383.580(1): prospective tenants 'shall be informed' (URLTA localities); no vehicle named | Lease clause `security-deposit-use-ky` |
| Move-in damage list | KRS 383.580(2): before any deposit is tendered, signed by both, tenant's signed written dissent (URLTA localities) | Separate signed list; `existing-condition-ky`, `security-deposit-use-ky`, `edu-condition-checklist-ky` |
| Move-out damage list and refund notice | KRS 383.580(3), (7) | After the tenancy; `security-deposit-return-ky` |
| Tenant chores outside a single family residence | KRS 383.595(4)(a): 'a separate writing signed by the parties and supported by adequate consideration' (URLTA localities) | Separate document `maintenance-allocation-ky`; `landscaping-irrigation` and `snow-removal` tagged with the single-family note (rule 48) |
| Methamphetamine contamination | KRS 224.1-410(10): 'disclose in writing to any potential lessee'; felony for leasing a determined-contaminated property without it (KRS 224.99-010(15)) | Before signing, in any writing; optional record clause `meth-contamination-disclosure-ky` |
| Lease term exempting the lessor's interest from tenant-work liens | KRS 376.010(3)(b): the lease must 'expressly provide' it; the lessee notifies contractors | Lease clause `no-liens-ky` |
| Separate guaranty | KRS 371.065(1): if not written on or expressly referring to the lease, must be written, signed and state a maximum and an end date | The guarantor signs the lease or a guaranty naming it (`edu-guaranty-ky`); no library clause (§10) |
| Assistance-animal documentation | KRS 383.085(2)-(3) | Process, not lease text; `assistance-animal-accommodation-ky` |
| Protective-order termination notice | KRS 383.300(5)(a): the tenant's written notice with a copy of the order | Tenant's document; `edu-dv-lease-termination-ky` |
| Lead-based paint (pre-1978 housing) | Federal disclosure; state abatement and release (KRS 211.905) | `lead-based-paint` (tagged); `edu-lead-hazard-release-ky` |
Nothing competes for the same place.

## 5. Dormant rows resolved (rule 25)
- `landlords-access-hi-ky-ri-dc` (dormant, UNVERIFIED, multi-state): 48 hours' notice 'during normal business hours'. **Verified and left switched off.** Where the URLTA applies the landlord 'shall give the tenant at least two (2) days' notice of his intent to enter and may enter only at reasonable times' (KRS 383.615(3)); 48 hours is two days, but 'normal business hours' is not the statute's test, the row omits the tenant's consent duty and the no-other-access rule (KRS 383.615(1), (4)), its emergency exception reaches notice only (contrast KRS 383.615(2)), and it is shared with Hawaii, Rhode Island and the District of Columbia, which Kentucky can't vouch for. The topic is answered by the Kentucky override `landlords-access-ky`, which also replaces `landlords-access`. Its states field is unchanged (it is not in the delta).
- The blank-states parent `security-deposit-return` is answered by `security-deposit-return-ky` (rule 25 family).

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
**Offered as new KY clauses (9):**
1. `attorney-fees-non-urlta-ky` (NON-URLTA ONLY, opt-in): the tenant pays reasonable attorney fees on default, actually paid, no salaried in-house attorney (KRS 411.195); its own text says not to use it where the URLTA is in effect (KRS 383.570(1)(c)). Taylor's two-tier decision.
2. `casualty-ky`: either party may terminate on 14 days' notice after a casualty that substantially impairs enjoyment, with a proportional rent reduction by contract (KRS 383.650; KRS 383.170 outside URLTA localities).
3. `tenant-caused-damage-ky`: the rule 54t answer; tenant-caused damage does not trigger the landlord's repair-remedy exposure, with Kentucky's own exits (KRS 383.625(1)(c), 383.635(2), 383.640(4); the statewide lead-hazard release, KRS 211.905(5)).
4. `criminal-activity-ky`: criminal activity as a material breach through the ordinary notice route; no fast track exists.
5. `rent-increase-midterm-ky`: a mid-term increase on at least 30 days' written notice, for fixed terms that want it; Kentucky has no cap or notice rule.
6. `maintenance-allocation-ky`: the separate chore agreement for units other than a single family residence (KRS 383.595(4)) (rule 48).
7. `meth-contamination-disclosure-ky` (CONDITIONAL REQUIRED_DISCLOSURE): records the written pre-signing disclosure.
8. `government-fee-reimbursement-ky` (CONDITIONAL): pass-through of local registration or licensing fees, excluding construction fees and fines (drafting choices) and emergency response fees (KRS 65.111(2)).
9. `no-liens-ky`: the lessor's interest is not subject to liens for tenant improvements, with the tenant's duty to notify contractors (KRS 376.010(3)(b); leases on or after June 29, 2023).
Items 2 and 9 ship as RECOMMENDED, as the library's Tennessee, Virginia and Florida rows do: `casualty-ky` restates KRS 383.650 where the URLTA applies and only adds the landlord's right elsewhere; `no-liens-ky` protects the lessor only if the lease says so (KRS 376.010(3)(b)). The rest are CONDITIONAL or bracketed options.
**Lawful or doubtful options declined, each with an education row that says the option is lawful (or where it is barred), why it isn't offered, and that a landlord can add their own after taking advice (9):** a premium holdover rate (`edu-holdover-rate-ky`: the URLTA already sets a willful-holdover remedy, and a multiple risks the penalty doctrine); a contractual interest rate on unpaid amounts (`edu-unpaid-damages-interest-ky`: rent already bears 6% by statute, KRS 383.010(1)); a jury waiver (`edu-jury-waiver-ky`: either side may demand a jury, KRS 383.210(2); Ky. Const. § 7; enforceability is case law); an exemption or lien clause (`edu-homestead-waiver-ky`: a homestead waiver needs a recorded writing signed by both spouses, KRS 427.100; a lien on household goods is unenforceable where the URLTA applies, KRS 383.680); a collection fee and a notice-service fee (`edu-collection-fee-ky`; KRS 383.570(1)(c) where the URLTA applies); an abandoned-property disposal procedure (`edu-abandoned-property-ky`: no Kentucky procedure for dwellings, so a clause would promise a process the law does not supply); a notice-to-quit waiver (`edu-nonpayment-notice-ky`: void where the URLTA applies, KRS 383.570(1)(a), and the library gives the 7-day notice everywhere); a mediation or arbitration clause (`edu-dispute-resolution-ky`: lawful outside URLTA localities, case law there; an arbitration clause is irrevocable and could stay the landlord's own forcible detainer case, KRS 417.050, 417.060; courts may refer to mediation, KRS 454.011); a lease guaranty clause (`edu-guaranty-ky`: a guaranty is the guarantor's own contract, the library has none for any state; flagged §10).
**Barred:** confession of judgment (KRS 372.140 statewide; KRS 383.570(1)(b)); police-call penalties (KRS 383.302); lockouts, utility shutoffs and distress where the URLTA applies (KRS 383.655, 383.680, 383.690); every KRS 383.570(1) term where the URLTA applies.

### 6.2 Questions asked of Taylor (rule 76)
1. **Two-tier drafting (2026-10-04).** Claude recommended: default clauses lawful in both tiers; non-URLTA-only options as opt-in clauses that say where they don't apply, with an education row. **Taylor: "I agree with the recommendation on URLTA."**
2. **Downloads (2026-10-04).** Saving the official pages to Downloads needed approval; Taylor approved.

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
1. **One version for both tiers.** Where the URLTA gives a notice or cure, the default clause gives it by contract everywhere (`default-by-tenant-ky`, `possession-delay-ky`, `landlords-access-ky`, `holdover-ky`), because outside URLTA localities the lease is the landlord's only source of these rights and the cost of giving them is small (rule 32).
2. **KRS 383.660(1)'s 14 and 15 days.** The statute says the termination date is 'not less than fourteen (14) days after receipt' and then 'If the breach is not remedied in fifteen (15) days'; the clauses use at least 15 days, the cheaper error (rule 79).
3. **KRS 383.580(4) read as conjunctive.** The landlord loses the deposit 'if the security deposit was not deposited in a separate account ... and if the initial and final damage listings ... are not provided'; the rows tell landlords to do both anyway.
4. **KRS 383.580(7) vs KRS 393.080 and chapter 393A.** The URLTA lets the landlord keep an unclaimed refund 60 days after notice; the unclaimed property law presumes a deposit abandoned after three years. Which governs is not settled by the text (`edu-deposit-escheat-ky`; §10 legal watch).
5. **KRS 383.300 and 383.302 dates.** Both apply only to leases 'created or renewed on or after June 29, 2017'; how that reaches an older month-to-month tenancy is not stated, so the rows tell landlords to follow them for every tenancy.
6. **Holdover.** `holdover-ky` charges daily rent at the Monthly Rent, never stacked with the willful-holdover award; the consented holdover is month to month, the landlord ending it on at least one month and 30 days, the tenant on 30 days or any shorter period the law allows (KRS 383.695(3)) (§13 round 1).
7. **Late fee.** No cap or grace period in either tier; the clause leaves both to the builder; no anti-waiver sentence (KRS 383.675).
8. **Tagged chore clauses.** Rule 48 settles the uniform-act split: `landscaping-irrigation` and `snow-removal` stay tagged with the single-family note, and `maintenance-allocation-ky` is the separate agreement. The independent check asked whether this conflicts with the two-tier rule; rule 48 says not to ask Taylor again, so it was not asked.
9. **Scope labels** as in §3.
10. **Unsettled points labelled Claude's reading** in the rows: a pet deposit is a security deposit where the URLTA applies; KRS 324.111 reaching tenant deposits held by a managing broker; the KRS 65.8840(5) owner duty giving tenants no remedy of their own; a housing authority as a body KRS 65.870 covers; Jefferson County as the only county with a consolidated local government (KRS 383.199).

## 7. Open items (none blocking)
1. **Administrative regulations (KAR) not read:** the building and fire codes (815 KAR 7, 815 KAR 10: smoke and CO alarms, sprinklers, window fall protection, pool barriers, grills); Public Service Commission rules (807 KAR 5:006 disconnection; resale and submetering); Department for Public Health methamphetamine disclosure rules (902 KAR); the boarding home licensure regulations adopted under KRS 216B.305. Rows that touch them say so.
2. **Federal law not read:** Fair Housing Act, the lead disclosure rule (42 U.S.C. 4852d; 40 CFR 745), Servicemembers Civil Relief Act (50 U.S.C. 3955), Protecting Tenants at Foreclosure Act, FCRA, FCC rules (47 C.F.R. 1.4000).
3. **Case law:** not searched (§1.4).
4. **Local ordinances:** flagged, not read beyond the URLTA adoption ordinances (rule 3); no current statewide list of adopting localities exists (§1.1).
5. **Court rules:** Kentucky civil rules and local district court rules not read; the eviction forms were (`edu-eviction-process-ky`).
6. **Sections named but not read whole:** the Horizontal Property Law (KRS 381.805 to 381.910) for condominiums created before 2011 (`edu-hoa-ky`); KRS 383.040-383.060 are not live sections (§14).
7. **2026 bill statuses:** read in the browser, not saved (§1.2); no row relies on them.

## 8. Integrity checks on the delta
Run by `work/checks.py` and `work/assemble.py` on the delivered file:
```
generic scan: quotes of library clause text 22
PASS  header identical to master 
PASS  file uses CRLF line ends 
PASS  17 columns every row 
PASS  ids unique in delta 
PASS  new ids not in master [173]
PASS  tagged ids exist in master [45]
PASS  clause groups valid (kickoff list) [[]]
PASS  education groups valid [[]]
PASS  rule_type values used in master [[]]
PASS  basis: KY clauses carry a master basis value, education blank 
PASS  content_type values 
PASS  supersedes points at existing master rows [17]
PASS  supersedes targets not tagged KY 
PASS  supersedes matches every "Overrides `x`" note 
PASS  KY rows: states KY, active, VERIFIED, dates 2026-10-05 
PASS  KY notes start KY: 
PASS  tagged rows: states = master + ;KY 
PASS  tagged rows: only states/notes/last_checked changed 
PASS  tagged notes: master notes kept, KY addition appended 
PASS  tagged last_checked 2026-10-05 
PASS  rule 15 statement on every KY note 
PASS  scope label on every KY note [[]]
PASS  no unresolved placeholders 
PASS  no § sign with KRS or KAR (other codes keep their own form) [[]]
PASS  KAR cites in kickoff form (902 KAR 10:120) 
PASS  every backtick pointer in KY text resolves to a row, topic key or saved file [[]]
PASS  row pointers name active rows (rule 63) [[]]
PASS  variables are builder variables or listed in §10 [['deposit_bank_address', 'deposit_bank_name', 'maintenance_consideration', 'tenant_maintained_items']]
PASS  new topic keys only single-family-zone-lease-limit [{'single-family-zone-lease-limit'}]
PASS  dormant landlords-access-hi-ky-ri-dc not in delta 
PASS  every active row has verification_status 
PASS  every cited KRS section exists in the saved corpus [[]]
PASS  every Q() quote appears word for word in its cited section [43 []]
PASS  every Q() quote carries its full citation next to it [[]]
PASS  generic scan: every other single-quoted passage occurs in the saved sources [178 scanned; []]
Counts: 218 rows; 45 tagged; 173 new {'LEASE_CLAUSE': 22, 'LANDLORD_EDUCATION': 151}
Merged 3703 rows, 3586 active; KY active 218 Counter({'LANDLORD_EDUCATION': 151, 'LEASE_CLAUSE': 67})
other states changed: {}
PASS  every statute quote appears in the section cited next to it [190 checked; []]
PASS  every statute quote has a citation within 200 characters [[]]
read by hand: 16 [('landlords-access-ky', 'library text: during normal business hours'), ('landlords-access-ky', 'normal business hours'), ('default-by-tenant-ky', 'library text: reasonable costs and expenses'), ('holdover-ky', 'an amount not more than three (3) months'), ('pet-policy-ky', 'A landlord has no other right of access '), ('edu-owner-occupancy-lease-limit-ky', 'Effective: June 27, 2025'), ('edu-security-deposit-holding-ky', 'All landlords of residential property re'), ('edu-dv-lease-termination-ky', 'Domestic violence order issued pursuant '), ('edu-towing-ky', 'in accordance with applicable law'), ('edu-deposit-escheat-ky', 'library text: security deposit'), ('edu-stigmatized-property-ky', 'library text: real estate transaction'), ('edu-meth-disclosure-ky', 'shall disclose in writing to any potenti'), ('landlord-maintenance', 'library text: improper use'), ('landlord-maintenance', 'library text: consistent with applicable law'), ('assigned-parking-space', 'library text: subject to any limits'), ('parking-vehicle-rules', 'library text: in accordance with applicable ')]
```
- **Variables:** no new variable. `{{deposit_bank_name}}`, `{{deposit_bank_address}}` (Washington's) and `{{maintenance_consideration}}`, `{{tenant_maintained_items}}` (Arizona and Iowa's) are already in library rows but not in the kickoff's builder list (§10).
- **Quotes:** 190 single-quoted statute passages checked against the section cited next to them, 0 mismatches; 16 passages quote library clause text or name their section further away and were read by hand; 43 are also registered through `Q()`.
- **Citations:** every cited KRS section exists in the saved corpus. Cross-references inside relied-on sections (rule 77) checked by script against the corpus: no pointer to a missing section (three apparent misses were line-break artifacts in the PDF text).
- **Coverage pointers (rule 63):** every backtick reference to a row names an active row, except `landlords-access-hi-ky-ri-dc`, cited as provenance in `landlords-access-ky` and §5.
- **Basis:** every KY lease clause records a basis; every tagged row's KY note names its controlling text or absence battery.

## 9. Propagation notes (rule 62)
None. No shared row's text was edited; the 45 tagged rows changed only by adding `KY` to `states`, an appended `KY:` note and `last_checked`.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Builder: locality attribute.** Kentucky's URLTA applies by local adoption; the builder has no city or county input (known backlog item from Tennessee). Until it does, the KY rows carry both tiers in one text, and `attorney-fees-non-urlta-ky` is an opt-in whose text tells the landlord not to use it in URLTA localities.
2. **Builder: property-type gate.** `landscaping-irrigation` and `snow-removal` bind the tenant in URLTA localities only for a single family residence (KRS 383.595(3), 383.545(14)); `maintenance-allocation-ky` is for other units. A property-type input would let the builder pick.
3. **Variables:** `{{deposit_bank_name}}`, `{{deposit_bank_address}}`, `{{maintenance_consideration}}` and `{{tenant_maintained_items}}` are used by KY rows and already exist in library rows but are not in the kickoff's builder list; confirm the builder fills them. No new variable.
4. **Legal watch:** KRS 383.580(7) vs KRS 393.080 and chapter 393A (deposit escheat); KRS 383.660(1) 14/15 days; KRS 376.010(3) applies to leases on or after June 29, 2023; KRS 383.300 and 383.302 to leases created or renewed on or after June 29, 2017; KRS 383.199 (Jefferson County, new leases after June 27, 2025); KRS 247.018 (2025 agricultural land rule).
5. **No guaranty clause** exists in the library for any state; Kentucky's KRS 371.065 and Texas's § 92.021 both bear on one. A product candidate.
6. **Owner nuisance duty:** KRS 65.8840(5) makes every owner responsible for not letting a structure become unfit for habitation, enforced locally; other uniform-act states may have similar county-code statutes outside their landlord-tenant acts that their logs record as 'no repair duty outside the act'.
7. **Mobile home lots:** KRS 376.480 (abandoned home lien and sale) and KRS 227.555 (smoke detectors) reach lots; lots are out of the library's scope.
8. **New topic key:** `single-family-zone-lease-limit` (`edu-owner-occupancy-lease-limit-ky`).

## 11. Deliverables
- `lease-clauses-KY-delta.csv` (218 rows, sha256 91c798d7ea041aae4bc92ce672cd26781e3db161391d3dcd71c32214c0f0a4ad) and this log, sent to Taylor in this chat and saved to his Downloads folder.
- Saved in Taylor's Downloads folder earlier (approved): the KRS corpus parts, the Constitution, the chapter 383 check copy, the session laws, the court forms and the real lease; hashes in `sources/REGISTRY.md`.

## 12. Kickoff leads — what each turned out to be
1. **Two tiers:** KRS 383.500 (adoption 'in their entirety and without amendment'); Louisville Metro and Lexington-Fayette verified from their codes, others from the 2016 LRC note as a dated lead (`edu-urlta-scope-ky`); the drafting approach is Taylor's decision (§6.2) and every note carries a scope label.
2. **Local preemption:** KRS 383.198 (conflicting ordinances), 383.500 (any other ordinance on the Act's subjects), 65.875 (no local rent control), 65.874 (no local ordinance requiring landlords to accept federal housing assistance), 65.111 (emergency response fees) (`edu-local-preemption-ky`, `edu-source-of-income-ky`, `government-fee-reimbursement-ky`).
3. **Louisville owner-occupancy rule:** KRS 383.199, education, not a disclosure (the statute restricts the owner and requires no lease text); new topic key (`edu-owner-occupancy-lease-limit-ky`).
4. **URLTA core:** KRS 383.570 screened against every shared clause (§2.2); KRS 383.580 (`security-deposit-use-ky`, `security-deposit-return-ky`, `edu-condition-checklist-ky`, `edu-security-deposit-penalty-ky`); 383.585 (`landlord-disclosure-ky`); 383.615 (`landlords-access-ky`); 383.660 (`default-by-tenant-ky`, `edu-cure-periods-ky`, `edu-nonpayment-notice-ky`); 383.650 (`casualty-ky`); 383.695 (`holdover-ky`, `edu-termination-notice-periods-ky`, `edu-tenancy-at-will-ky`); 383.705 (`edu-retaliation-ky`); 383.595 (rule 48, §6.3).
5. **Older sections:** KRS 383.010 (`edu-unpaid-damages-interest-ky`), 383.070 (`edu-landlord-lien-ky`), 383.160 (`holdover-ky`, `edu-holdover-rate-ky`, `edu-termination-notice-periods-ky`), 383.170 (`casualty-ky`, `edu-maintenance-delegation-ky`), 383.195 (`edu-tenancy-at-will-ky`), forcible detainer (`edu-eviction-process-ky`).
6. **Statewide protections:** KRS 383.300 (`edu-dv-lease-termination-ky`, `edu-dv-eviction-protection-ky`, `edu-dv-lockchange-ky`, `edu-dv-confidentiality-ky`), 383.302 (`edu-emergency-assistance-right-ky`, `default-by-tenant-ky`), 383.085 (`assistance-animal-accommodation-ky`, `edu-assistance-animals-ky`, `edu-service-animal-misrepresentation-ky`), 383.290 (`edu-unauthorized-occupants-ky`).
7. **Dormant row:** compared with KRS 383.615 and left off (§5).
8. **Eviction procedure and records:** KRS 383.200-383.285 and the AOC forms (`edu-eviction-process-ky`, `edu-statutory-forms-ky`, `edu-eviction-hardship-stay-ky`); no sealing statute (`edu-eviction-records-ky`).
9. **Local rules:** flagged (Louisville Metro Code §§ 151.60-151.61; Lexington § 12-55) within the KRS 383.198 and 383.500 limits.

## 13. Independent check
Separate general-purpose agents, which had not seen the drafting, checked the rows against the saved sources only (instructions `check/HOWTO.md`; batches `check/batch-1.md` to `-5.md`, `check/round2-*.md` to `round5-1.md`; reports in `check/reports/`). Each opened every cited section whole (`work/sec.py`), read each cited battery's pattern and positives (`work/bh.py`) and ran its own corpus searches (`work/grepcorp.py`). From round 2 each was given the previous version of every edited row (rule 80).
- **Round 1 (all 217 rows then in the delta, five batches):** 15 ERROR, 79 FIX, 71 NOTE. ERRORs: `holdover-ky` made the tenant give 30 days where KRS 383.695(3) allows 10; `security-deposit-use-ky` and `edu-security-deposit-holding-ky` missed KRS 393.080 and the broker escrow rule (KRS 324.111); `edu-firearms-ky` missed the limit on public landlords (KRS 65.870, 237.115(2)); `edu-tenant-repair-remedies-ky` missed the statewide lead release (KRS 211.905(5)) and KRS 383.170; `edu-abandoned-property-ky` missed the mobile home lot procedure (KRS 376.480); `edu-maintenance-delegation-ky` missed KRS 383.170; `edu-tenant-screening-ky` missed the protective-order applicant rule (KRS 383.300(3)(a)); `edu-required-disclosures-ky` presented the URLTA owner disclosure as statewide; `edu-utility-landlord-account-ky` missed the URLTA pay-and-deduct remedy (KRS 383.640(1)(a)); `edu-utility-lien-ky` missed KRS 109.310 (solid waste fees on the tax bill); `edu-servicemember-rights-ky` missed KRS 38.510 (Guard on state duty); `edu-homestead-waiver-ky` missed KRS 427.010(4) and the tier difference; `edu-meth-disclosure-ky` missed the felony (KRS 224.99-010(15)); `utilities-responsibility` (tagged) put the URLTA supply duties on the tenant and was replaced by `utilities-responsibility-ky`. FIXes included the KRS 383.635 cap and notice, the KRS 383.160 filing windows, the June 29, 2017 cut-off in many protective-order rows, the pool (KRS 211.203), automatic-renewal (KRS 365.400), room-tax (KRS 139.200, 142.400) and HOA (KRS 381.9xxx) statutes, the 39 tagged notes missing a scope label and the 23 with an empty reason (the screen table's blank cells), the assistance-animal documentation trigger (replaced by `assistance-animal-accommodation-ky`), and unsaved 2026 bill statuses (removed). All ERRORs and FIXes applied; NOTEs applied except the chore-clause question (§6.3 item 8).
- **Round 2 (158 rows edited, four parts):** 0 ERROR, 30 FIX, 35 NOTE. The FIXes included the remaining June 29, 2017 cut-offs, KRS 65.870's local-government scope and (7) exception, the KRS 376.480 notice steps, the deposit bracket covering the wrong sentences, the KRS 383.560 delivery methods in `notices`, the HOA condominium date (KRS 381.9103), the boarding home detector rule (KRS 216B.305) and the statewide owner duty in KRS 65.8840(3), (5), which the checker found unresolved from round 1 and which also corrected `edu-landlord-repair-duties-ky`. Applied.
- **Round 3 (77 rows):** 1 ERROR (`edu-holding-deposit-ky` missed the broker escrow rule), 6 FIX, 5 NOTE; applied.
- **Round 4 (12 rows):** 0 ERROR, 2 FIX (the pool staffing-plan pinpoint; the assistance-dog provider list), 1 NOTE; applied.
- **Round 5 (3 rows):** 0 ERROR, 0 FIX, 1 NOTE (the fee-for-letter rule in KRS 258.500(1)(d)); applied.
- **Round 6 (`edu-service-animal-denial-ky`):** 0 ERROR, 0 FIX, 1 NOTE (point to the broader housing rules of KRS 383.085, which accept an out-of-state provider); applied.
- **Log check (separate agent, `check/reports/log-check.md`):** 2 ERROR, 9 FIX, 11 NOTE. ERRORs: everyday-rerun citations had been added to 14 rows after their last round, unchecked (sent to round 7, below); §18.2 `utility-transfer` named the untagged `utilities-responsibility` (now `utilities-responsibility-ky`). FIXes: the round-6 result, the fines battery (now fines-pass), the notice-to-quit-waiver and dv-qualifying-documents reasons, KRS 65.874's scope, three rows' 'KY log §1.4' pointers (now §1.1 and §7), rule 54 education rows for the declined guaranty, abandoned-property and dispute-resolution options (a new row, `edu-dispute-resolution-ky`) and the 'add your own after advice' sentence, the timing of the formatting batteries, and two sections no row cites. NOTEs applied, including the drug forfeiture rule (KRS 218A.410(1)(k)) the checker found in an unread rerun hit, now in `edu-expedited-criminal-eviction-ky`.
- **Round 7 (27 rows edited since round 4, with every -ev battery's hits screened):** 1 ERROR (`edu-dispute-resolution-ky` missed the general arbitration and mediation statutes, KRS 417.050, 417.060, 454.011, which the dispute battery's tenancy context limb could not reach), 1 FIX (`edu-homestead-waiver-ky`: the 'add your own' sentence must not reach a homestead waiver or, where the URLTA applies, a lien on household goods); applied. No -ev hit contradicted an absence claim.
- **Round 8 (the four rows edited after round 7: the two round-7 fixes and the rule 54 sentences added to `edu-nonpayment-notice-ky` and `edu-collection-fee-ky`):** 0 ERROR, 1 FIX (`edu-dispute-resolution-ky` called an arbitration clause lawful in both tiers; where the URLTA applies, whether it is an unenforceable waiver, KRS 383.570(1)(a), (2), 383.520(2), is case law); applied.
- **Round 9 (`edu-dispute-resolution-ky`):** 0 ERROR, 0 FIX, 0 NOTE. No row has been edited since.
- **Battery citations** are generated from the saved log; the checkers verified each battery's pattern and positives and named the gaps fixed in §1.3.

## 14. Statute walk (gap-discovery source 1)
**KRS chapter 383, 79 live sections,** read whole (`work/notes-ch383.md`) and diffed against every citation in the KY rows: cited except the following, each with its reason:
- KRS 383.020 (distress or attachment levy and wrongful distraint): reached through `edu-landlord-lien-ky`'s note (distress warrant) but not a lease consequence beyond it.
- KRS 383.080 (other lienholders vs the landlord's lien): creditor priority.
- KRS 383.110, 383.120 (crop liens and crop rent), 383.130 (tenancy under a labor contract): agricultural and employment tenancies, out of scope.
- KRS 383.205, 383.220, 383.230, 383.235, 383.270 (forcible detainer: when tenancy began, return of the warrant, witnesses, verdict, circuit court judgments): procedure.
- KRS 383.260 (appellant's damages and expenses on a failed appeal), 383.275 (court may restrain waste during the case): procedure; the appeal deposit is in `edu-eviction-process-ky`.
- KRS 383.510, 383.515 (law and equity supplement the Act; construction), 383.525 (settlement of disputed claims), 383.550 (good faith): general provisions every row assumes.
**One level down:** KRS 383.545 is cited for (5), (10), (11), (13), (14) and (16); its other definitions are used without pinpoints. KRS 383.560(4) (notice to an organization), 383.595(2) (which duty governs), 383.070(1) (farm and coal-mining leases) and 383.200(1)-(2) (forcible entry definitions; (2)(b) is now cited) add nothing a row needs. Every subsection of KRS 383.580, 383.615, 383.625, 383.640, 383.660, 383.670, 383.695 and 383.705 is cited.
**Beside it:** KRS 383.040-383.060 are not live sections; KRS 383.715 is the Act's title section; KRS 164.9492 was enacted as part of KRS 383.010-383.285 and codified in chapter 164 (its LRC note).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Housing Authority of Paducah, 'Dwelling Lease Part I & Part II' (public housing lease terms and residential lease agreement), Nelrod Company template (© 2018, revised 05/2019) customized for Paducah, file 'Final Dwelling Lease 11_2022.pdf'. Not linked on the authority's rebuilt site (old path returns 404, 2026-10-05); read from the Wayback Machine capture 20240619115628. **Why weaker (rule 33):** a HUD-governed public housing lease (24 CFR 966), a national consultant's template, from a city not on the URLTA adoption list, and it cites no KRS section. Searched and not found free: Kentucky REALTORS and apartment-association forms (member-only); a Kentucky university housing lease; the Lexington Housing Authority's posted lease (a Massachusetts model form citing M.G.L. c. 186, rejected); Louisville Metro Housing Authority (policy only online). Commercial template sites excluded.

### 15.1 Provision map (lead only; no text reproduced)
| Lease topic | Library answer for KY | Note |
|---|---|---|
| Deposit before occupancy; deductions incl. court costs and attorney fees; 30-day refund; not for rent during occupancy | `security-deposit-use-ky`, `security-deposit-return-ky`, `attorney-fees-non-urlta-ky` | 30 days is the authority's choice; Kentucky sets no general deadline (`edu-deposit-refund-ky`) |
| Returned check charge (internally inconsistent figure); later payments by money order | `returned-payments-ky` | no statutory cap used |
| Late charge; repeated late payment as a violation | `late-fee-ky`, `default-by-tenant-ky` | the repeated-late ground is federal practice |
| Joint move-in inspection and signed statement; move-out charges | `existing-condition-ky`, `edu-condition-checklist-ky` | matches KRS 383.580(2)-(3) though not required in Paducah |
| Abandonment after 15 days' absence; belongings disposed of 'in accordance with State law' | `edu-abandoned-property-ky` | Kentucky has no disposal statute for dwellings, so the lease points at nothing |
| Written notices by delivery or first-class mail | `notices`, `edu-notice-delivery-ky` | URLTA localities: hand delivery or registered or certified mail (KRS 383.560(3)) |
| Termination for serious or repeated violations, criminal activity, fraud | `default-by-tenant-ky`, `criminal-activity-ky`, `rental-application-accuracy` | |
| Domestic violence lease bifurcation (VAWA) | `edu-dv-eviction-protection-ky` | state analogue KRS 383.300(6) |
| Weapons misuse; flammables; no alterations or lock changes | `criminal-activity-ky`, `fire-safety-grilling`, `no-alterations`, `keys` | |
| Pets, smoke-free, parking policies | `pet-policy-ky`, `smoking-policy`, `parking-ks-oh-ca` | |
| Accommodation of disabilities | `assistance-animal-accommodation-ky`, `edu-disability-accommodation-ky` | |
| Lease changes by notice | `edu-rules-changes-ky` | KRS 383.610 in URLTA localities |

### 15.2 What it produced
No new topic; one confirmation (no disposal statute for dwellings) and one drafting check (notice methods). No change suggested to a shared row.

## 16. Landlord-scenario screen (gap-discovery source 3)
80 scenarios, Claude-generated on the AZ §18.1 model plus Kentucky-specific ones (`work/scenarios.md`), run against the final rows:
1. Application or screening fee → `edu-application-fees-ky`
2. Holding deposit before signing → `edu-holding-deposit-ky`
3. Housing voucher → `edu-source-of-income-ky`
4. Immigration status or SSN → `edu-immigration-status-ky`
5. Eviction or criminal record → `edu-tenant-screening-ky`, `edu-fair-housing-ky`
6. Applicant with a protective order → `edu-tenant-screening-ky`, `edu-dv-eviction-protection-ky`
7. Children; occupancy limits → `edu-children-occupancy-ky`, `permitted-occupants`
8. Assistance animal with a no-pet policy → `assistance-animal-accommodation-ky`, `edu-assistance-animals-ky`, `edu-service-animal-misrepresentation-ky`
9. Disability modification → `edu-disability-accommodation-ky`, `no-alterations`
10. Out-of-state owner → `edu-nonresident-owner-agent-ky`, `landlord-disclosure-ky`
11. What to give at signing → `edu-required-disclosures-ky`, `landlord-disclosure-ky`, `security-deposit-use-ky`, `lead-based-paint`
12. Electronic signing → `electronic-signatures`
13. Copy of the lease → `edu-lease-copy-ky`
14. Deposit cap; pet deposit → `edu-no-security-deposit-cap-ky`, `edu-pet-fees-ky`
15. Deposit before the damage list → `security-deposit-use-ky`, `edu-security-deposit-penalty-ky`
16. Where to hold the deposit; interest → `edu-security-deposit-holding-ky`, `edu-security-deposit-interest-ky`
17. Nonrefundable fees → `edu-nonrefundable-fees-ky`
18. Last month's rent up front → `edu-deposit-last-month-rent-ky`, `edu-deposit-installments-ky`
19. Damage list; tenant won't sign → `existing-condition-ky`, `edu-condition-checklist-ky`
20. Due date; where payable → `rent-payment`
21. Late fee cap → `late-fee-ky`, `edu-late-fee-ky`
22. Cash rent; receipt → `acceptable-payment-methods`, `edu-rent-receipts-ky`
23. Bounced check → `returned-payments-ky`, `edu-dishonored-payment-remedies-ky`
24. Electronic-only payment → `acceptable-payment-methods`
25. Partial payment; waiver by acceptance → `application-of-payments`, `edu-waiver-by-acceptance-ky`
26. Interest on unpaid rent → `edu-unpaid-damages-interest-ky`
27. Rent increase mid-term or at renewal → `rent-increase-midterm-ky`, `edu-rent-increase-notice-ky`, `edu-rent-escalation-ky`
28. New fee or rule mid-lease → `edu-term-change-notice-ky`, `edu-rules-changes-ky`, `edu-required-fees-ky`
29. Entry for repairs or showings → `landlords-access-ky`
30. Tenant refuses entry → `landlords-access-ky`
31. No heat or hot water → `edu-heating-ky`, `edu-tenant-repair-remedies-ky`
32. Repair and deduct → `edu-tenant-repair-remedies-ky`
33. Tenant-caused damage → `tenant-caused-damage-ky`, `edu-landlord-self-cure-ky`
34. Fire or casualty → `casualty-ky`
35. Mold, pests, bed bugs, radon, meth → `edu-mold-disclosure-ky`, `edu-bed-bug-disclosure-ky`, `edu-radon-disclosure-ky`, `edu-meth-disclosure-ky`
36. Smoke and CO alarms → `edu-alarm-duties-ky`
37. Tenant changes the locks → `keys`, `edu-dv-lockchange-ky`, `edu-security-devices-ky`
38. Long-staying guest; squatter → `guest-policy`, `guest-policy-day-limit`, `edu-unauthorized-occupants-ky`
39. Sublet or short-term rental → `no-sublet-assign`
40. Home business → `residential-use-only`
41. Smoking; cannabis → `smoking-policy`, `edu-cannabis-ky`
42. Firearms → `edu-firearms-ky`
43. Parking and towing → `parking-vehicle-rules`, `edu-towing-ky`
44. HOA fines → `hoa-compliance`, `edu-hoa-ky`
45. EV charging, solar, satellite → `edu-ev-charging-ky`, `edu-portable-solar-ky`, `edu-telecom-access-ky`
46. New house rules → `edu-rules-changes-ky`
47. Code complaint; retaliation → `edu-retaliation-ky`
48. Repeated police calls → `edu-emergency-assistance-right-ky`, `default-by-tenant-ky`
49. Nonpayment notice and cure → `default-by-tenant-ky`, `edu-nonpayment-notice-ky`
50. Other violation; repeat within six months → `default-by-tenant-ky`, `edu-cure-periods-ky`
51. Drugs or violence at the unit → `criminal-activity-ky`, `edu-expedited-criminal-eviction-ky` (with the drug forfeiture rule, KRS 218A.410(1)(k))
52. Filing an eviction; forms; jury; appeal → `edu-eviction-process-ky`, `edu-statutory-forms-ky`
53. Lockout or shutoff → `edu-self-help-eviction-ky`
54. Ending a month-to-month → `edu-termination-notice-periods-ky`, `edu-tenancy-at-will-ky`
55. Holdover → `holdover-ky`, `edu-holdover-rate-ky`
56. Tenant wants out early → `early-termination-ks`, `edu-mitigation-ky`, `edu-statutory-early-termination-ky`
57. Servicemember orders → `edu-servicemember-rights-ky`
58. Domestic violence victim leaving → `edu-dv-lease-termination-ky`
59. Move to assisted living; death → `edu-infirmity-termination-ky`, `edu-tenant-death-ky`
60. Abandonment; belongings; mitigation → `edu-abandoned-property-ky`, `edu-mitigation-ky`, `surrender-end-of-term`
61. Property left after the warrant → `edu-post-eviction-property-ky`
62. Deposit return; no response → `security-deposit-return-ky`, `edu-deposit-refund-ky`, `edu-deposit-escheat-ky`
63. Tenant leaves owing last month → `edu-deposit-last-month-rent-ky`
64. Sale with a tenant in place → `edu-sale-or-management-change-ky`, `edu-deposit-on-sale-ky`
65. Foreclosure → `edu-foreclosure-ky`, `edu-foreclosure-disclosure-ky`
66. Condominium conversion → `edu-condo-conversion-ky`
67. Condemned or posted unfit → `edu-condemned-premises-ky`, `edu-lead-hazard-release-ky`
68. Landlord's lien → `edu-landlord-lien-ky`
69. Louisville single-family zone → `edu-owner-occupancy-lease-limit-ky`
70. Rental registration or inspection → `edu-landlord-registration-ky`, `edu-rental-inspection-ky`
71. Conflicting local ordinance → `edu-local-preemption-ky`
72. Attorney fees in the lease → `attorney-fees-non-urlta-ky`, `edu-attorney-fees-ky`
73. Jury or exemption waiver → `edu-jury-waiver-ky`, `edu-homestead-waiver-ky`
74. Farm dwelling, employee housing, room in the landlord's home → `edu-urlta-scope-ky`, `edu-portfolio-thresholds-ky`
75. Eviction record sealing → `edu-eviction-records-ky`
76. Local rent control → `edu-local-preemption-ky`
77. Renter's insurance → `tenants-property-insurance-ks-oh-ca`, `edu-renters-insurance-ky`
78. Water heater, pool, window guards → `edu-water-heater-temperature-ky`, `edu-pool-safety-ky`; window guards §18.2 (not located; KAR not read)
79. Notices by e-mail → `notices`, `edu-notice-delivery-ky`
80. Manufactured home park → out of scope (scope line; KRS 376.480 and 227.555 flagged in rows)
Every scenario is answered by a row or a stated scope line. The independent check, not the scenario screen, found the lot abandoned-property rule, the solid-waste lien, the Guard extension and the broker escrow rule (§13); the scenario list had them, but the first rows answered them wrongly.

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole KRS, the Constitution, the three session laws and the five forms were loaded before the first battery (rule 35) and searched with 198 battery records (§1.3). Findings outside chapter 383 that reached rows:
- **Local government:** KRS 65.111 (emergency response fees), 65.870 (firearms), 65.874 (source of income), 65.875 (rent control), 65.8840 (owner nuisance duties and abatement liens), 109.310 (solid waste fees).
- **Disputes and forfeiture:** KRS 417.050, 417.060 (arbitration), 454.011 (court-referred mediation), 344.605 (fair housing conciliation), 218A.410(1)(k) (drug forfeiture of real property, owner's knowledge or consent).
- **Civil rights and animals:** KRS 344.010, 344.280, 344.360, 344.362, 344.365; KRS 258.500, 258.991 (assistance dogs).
- **Health and safety:** KRS 211.905 (lead), 211.203 (pools), 211.985 (water heaters), 224.1-410 and 224.99-010 (methamphetamine), 227.555 (manufactured home detectors), 216B.300, 216B.305 (boarding homes), 199.8982 (child-care homes), 164.9492 (campus fire suppression).
- **Consumer, contract and debt:** KRS 367.170, 367.175, 367.220 (consumer protection, antitrust), 365.400-365.408 (automatic renewal), 371.010 (statute of frauds), 371.065 (guaranties), 372.140 (confession of judgment), 411.195 (attorney fees), 514.040 (cold checks), 360.010 (interest).
- **Property and liens:** KRS 376.010 (mechanics' liens and lessees), 376.275 (tow liens), 376.480 (mobile home lot abandoned property), 381.300, 381.320 (aliens), 381.797, 381.798, 381.9103, 381.9133, 381.9155, 381.9181 (associations), 247.018 (foreign agricultural land), 393.080 and 393A.010, 393A.040 (unclaimed property), 427.010, 427.060, 427.100 (exemptions), 324.111 (broker escrow).
- **Vehicles and weapons:** KRS 189.725, 281.924 (towing), 237.106, 237.115 (firearms).
- **Taxes:** KRS 139.200, 139.600, 142.400, 91A.390 (room taxes).
- **Other:** KRS 17.545 (registrant residence), 38.510 (Guard and SCRA), 369.103, 369.105 (electronic transactions), 218A.1421, 218A.1422, 218B.035, 218B.040 (cannabis), 2.042 (flag display), 207.250 (HIV disclosure), 99.785, 425.600 (conservators and receivers), 233.020-233.100, 242.350 (nuisance), 454.030 (service), 96.934 (sewer charges), 278.495 (master meters), 194A.713 (assisted living).
- **Constitution:** screened with const-tenancy (leases, tenants, rent, arms, speech, searches; 9 hits: §§ 1, 8, 10, 59, 170, 201, 203, 210, 254) and the control 'General Assembly'; § 7 (jury trial 'held sacred') read for `edu-jury-waiver-ky`; § 1 (arms) for `edu-firearms-ky`, binding the state, not private lessors (Claude's reading); §§ 8, 10, 59 bear on no lease term; no cannabis or rent provision.
Absence records are carried by the rows and §18; each cites its battery, hit count and positive result.

## 18. Topic reference canvass (rules 27, 36)
The library has 332 active topic keys. Kentucky rows sit on 208 topics (207 reference topics plus 1 new). The canvass ran before the independent check (WA lesson 6) and again after it.

### 18.1 Topics answered by a KY row
- `abandoned-property` (33 states): Present: `edu-abandoned-property-ky`
- `abandonment-and-mitigation` (21 states): Present: `edu-mitigation-ky`
- `acceptable-payment-methods` (35 states): Present: `acceptable-payment-methods`
- `addendum-precedence` (35 states): Present: `addendum-precedence`
- `alarm-duties` (34 states): Present: `edu-alarm-duties-ky`
- `algorithmic-rent-setting` (29 states): Present: `edu-algorithmic-rent-ky`
- `alt-housing` (5 states): Present: `edu-alt-housing-ky`
- `alterations` (35 states): Present: `no-alterations`
- `appliances-included` (35 states): Present: `appliances-included`
- `application-fees` (26 states): Present: `edu-application-fees-ky`
- `application-of-payments` (35 states): Present: `application-of-payments`
- `assigned-parking-space` (35 states): Present: `assigned-parking-space`
- `assistance-animal-accommodation` (35 states): Present: `assistance-animal-accommodation-ky`, `edu-assistance-animals-ky`
- `attorney-fees` (22 states): Present: `attorney-fees-non-urlta-ky`, `edu-attorney-fees-ky`
- `automatic-renewal` (6 states): Present: `edu-automatic-renewal-ky`
- `bed-bug-disclosure` (33 states): Present: `edu-bed-bug-disclosure-ky`
- `cannabis` (18 states): Present: `edu-cannabis-ky`
- `casualty-termination` (35 states): Present: `casualty-ky`
- `children-occupancy` (4 states): Present: `edu-children-occupancy-ky`
- `collection-fee` (3 states): Present: `edu-collection-fee-ky`
- `common-area-use` (35 states): Present: `common-area-use`
- `condemned-premises-rent-bar` (4 states): Present: `edu-condemned-premises-ky`
- `condition-inspection` (27 states): Present: `edu-condition-checklist-ky`
- `construction-liens` (2 states): Present: `no-liens-ky`
- `consumer-protection-act` (23 states): Present: `edu-consumer-protection-ky`
- `conversion-notice` (18 states): Present: `edu-condo-conversion-ky`
- `criminal-activity` (20 states): Present: `criminal-activity-ky`
- `cure-and-eviction-grounds` (16 states): Present: `edu-cure-periods-ky`
- `default-by-tenant` (35 states): Present: `default-by-tenant-ky`
- `deposit-cost-schedule` (4 states): Present: `edu-deposit-cost-schedule-ky`
- `deposit-escheat` (21 states): Present: `edu-deposit-escheat-ky`
- `deposit-installments` (8 states): Present: `edu-deposit-installments-ky`
- `deposit-last-month-rent` (12 states): Present: `edu-deposit-last-month-rent-ky`
- `disability-accommodation` (12 states): Present: `edu-disability-accommodation-ky`
- `disturbance` (35 states): Present: `no-disturbance`
- `double-letting` (6 states): Present: `edu-double-letting-ky`
- `drug-free-housing-addendum` (3 states): Present: `edu-drug-free-addendum-ky`
- `due-at-signing` (35 states): Present: `due-at-signing`
- `dv-confidentiality` (10 states): Present: `edu-dv-confidentiality-ky`
- `dv-eviction-protection` (9 states): Present: `edu-dv-eviction-protection-ky`
- `dv-lease-termination` (33 states): Present: `edu-dv-lease-termination-ky`
- `dv-lockchange` (7 states): Present: `edu-dv-lockchange-ky`
- `early-termination` (35 states): Present: `early-termination-ks`
- `electronic-signatures` (35 states): Present: `electronic-signatures`
- `emergency-assistance-right` (30 states): Present: `edu-emergency-assistance-right-ky`
- `entire-agreement` (35 states): Present: `entire-agreement`
- `ev-charging` (32 states): Present: `edu-ev-charging-ky`
- `eviction-hardship-stay` (5 states): Present: `edu-eviction-hardship-stay-ky`
- `eviction-process` (30 states): Present: `edu-eviction-process-ky`
- `eviction-record-sealing` (31 states): Present: `edu-eviction-records-ky`
- `exculpatory-clauses` (5 states): Present: `edu-exculpatory-clauses-ky`
- `existing-condition` (35 states): Present: `existing-condition-ky`
- `expedited-criminal-eviction` (17 states): Present: `edu-expedited-criminal-eviction-ky`
- `extended-absence-notice` (11 states): Present: `extended-absence-notice-ks`
- `fair-housing` (32 states): Present: `edu-fair-housing-ky`
- `fee-in-lieu-of-deposit` (6 states): Present: `edu-fee-in-lieu-of-deposit-ky`
- `fee-transparency` (15 states): Present: `edu-fee-transparency-ky`
- `fees-as-rent` (32 states): Present: `edu-fees-as-rent-ky`
- `fire-safety-grilling` (35 states): Present: `fire-safety-grilling`
- `firearms` (17 states): Present: `edu-firearms-ky`
- `flood-disclosure` (25 states): Present: `edu-flood-disclosure-ky`
- `for-cause-eviction` (35 states): Present: `edu-no-for-cause-eviction-ky`
- `foreclosure` (22 states): Present: `edu-foreclosure-ky`
- `foreclosure-disclosure` (5 states): Present: `edu-foreclosure-disclosure-ky`
- `foreign-ownership` (14 states): Present: `edu-foreign-ownership-ky`
- `governing-law` (35 states): Present: `governing-law`
- `government-fee-reimbursement` (1 states): Present: `government-fee-reimbursement-ky`
- `guarantor-renewal` (1 states): Present: `edu-guaranty-ky`
- `guest-policy` (35 states): Present: `guest-policy`
- `guest-policy-day-limit` (34 states): Present: `guest-policy-day-limit`
- `guest-rights` (3 states): Present: `edu-guest-rights-ky`
- `heating` (6 states): Present: `edu-heating-ky`
- `hoa` (9 states): Present: `edu-hoa-ky`
- `hoa-compliance` (35 states): Present: `hoa-compliance`
- `holding-deposit` (12 states): Present: `edu-holding-deposit-ky`
- `holdover` (35 states): Present: `holdover-ky`
- `holdover-rate` (23 states): Present: `edu-holdover-rate-ky`
- `homestead-waiver` (8 states): Present: `edu-homestead-waiver-ky`
- `immigration-status` (28 states): Present: `edu-immigration-status-ky`
- `infirmity-termination` (7 states): Present: `edu-infirmity-termination-ky`
- `informal-dispute-resolution` (1 states): Present: `edu-dispute-resolution-ky`
- `inspection-rights` (34 states): Present: `inspection-rights`
- `joint-liability` (35 states): Present: `joint-liability`
- `jury-waiver` (7 states): Present: `edu-jury-waiver-ky`
- `keys` (35 states): Present: `keys`
- `knowing-use-penalty` (6 states): Present: `edu-knowing-use-penalty-ky`
- `landlord-entry` (35 states): Present: `landlords-access-ky`
- `landlord-lien` (23 states): Present: `edu-landlord-lien-ky`
- `landlord-maintenance` (35 states): Present: `edu-landlord-repair-duties-ky`, `landlord-maintenance`
- `landlord-registration` (9 states): Present: `edu-landlord-registration-ky`
- `landlord-self-cure` (29 states): Present: `edu-landlord-self-cure-ky`
- `landscaping-irrigation` (32 states): Present: `landscaping-irrigation`
- `late-fee` (35 states): Present: `late-fee-ky`, `edu-late-fee-ky`
- `lead-based-paint` (35 states): Present: `edu-lead-hazard-release-ky`, `lead-based-paint`
- `lease-completeness` (28 states): Present: `edu-lease-completeness-ky`
- `lease-copy` (17 states): Present: `edu-lease-copy-ky`
- `meth-disclosure` (29 states): Present: `meth-contamination-disclosure-ky`, `edu-meth-disclosure-ky`
- `military-air-zone-disclosure` (5 states): Present: `edu-military-zone-disclosure-ky`
- `minor-tenant-filing` (5 states): Present: `edu-minor-defendants-ky`
- `mold-disclosure` (31 states): Present: `edu-mold-disclosure-ky`
- `municipal-utility-lien` (8 states): Present: `edu-utility-lien-ky`
- `nonpayment-notice` (21 states): Present: `edu-nonpayment-notice-ky`
- `nonrefundable-deposit-notice` (6 states): Present: `edu-nonrefundable-fees-ky`
- `nonresident-owner-agent` (5 states): Present: `edu-nonresident-owner-agent-ky`
- `notice-delivery-methods` (32 states): Present: `edu-notice-delivery-ky`
- `notices` (35 states): Present: `notices`
- `nuisance` (19 states): Present: `edu-nuisance-ky`
- `owner-identity-disclosure` (34 states): Present: `landlord-disclosure-ky`
- `parking` (35 states): Present: `parking-ks-oh-ca`
- `parking-vehicle-rules` (34 states): Present: `parking-vehicle-rules`
- `periodic-services-entry` (3 states): Present: `edu-periodic-services-entry-ky`
- `permitted-occupants` (35 states): Present: `permitted-occupants`
- `pet-fees` (15 states): Present: `edu-pet-fees-ky`
- `pet-insurance-requirement` (35 states): Present: `pet-insurance-requirement`
- `pet-policy` (35 states): Present: `pet-policy-ky`
- `plain-language` (14 states): Present: `edu-plain-language-ky`
- `pool-safety` (6 states): Present: `edu-pool-safety-ky`
- `portable-solar` (4 states): Present: `edu-portable-solar-ky`
- `portfolio-thresholds` (3 states): Present: `edu-portfolio-thresholds-ky`
- `possession-delay` (35 states): Present: `possession-delay-ky`
- `post-eviction-property` (24 states): Present: `edu-post-eviction-property-ky`
- `prohibited-lease-terms` (30 states): Present: `edu-prohibited-lease-terms-ky`
- `protected-class-inquiry-ban` (8 states): Present: `edu-protected-class-inquiry-ky`
- `quiet-possession` (28 states): Present: `edu-quiet-possession-ky`
- `radon-disclosure` (34 states): Present: `edu-radon-disclosure-ky`
- `rent-concession` (5 states): Present: `edu-rent-concession-ky`
- `rent-control` (30 states): Present: `edu-local-preemption-ky`
- `rent-escalation` (3 states): Present: `rent-increase-midterm-ky`, `edu-rent-escalation-ky`
- `rent-increase-notice` (28 states): Present: `edu-rent-increase-notice-ky`
- `rent-into-court-counterclaim` (4 states): Present: `edu-rent-into-court-ky`
- `rent-payment` (35 states): Present: `rent-payment`
- `rent-receipts` (21 states): Present: `edu-rent-receipts-ky`
- `rent-reporting` (4 states): Present: `edu-rent-reporting-ky`
- `rent-tax` (15 states): Present: `edu-rent-tax-ky`
- `rental-application-accuracy` (35 states): Present: `rental-application-accuracy`
- `rental-inspection` (10 states): Present: `edu-rental-inspection-ky`
- `renters-insurance-rules` (10 states): Present: `edu-renters-insurance-ky`
- `repair-notice` (3 states): Present: `edu-repair-notice-ky`
- `required-disclosures` (3 states): Present: `edu-required-disclosures-ky`
- `required-fees` (4 states): Present: `edu-required-fees-ky`
- `residential-use-only` (35 states): Present: `residential-use-only`
- `retaliation` (35 states): Present: `edu-retaliation-ky`
- `returned-payments` (35 states): Present: `returned-payments-ky`, `edu-dishonored-payment-remedies-ky`
- `rules-regulations` (18 states): Present: `edu-rules-changes-ky`
- `sale-or-management-change` (25 states): Present: `edu-sale-or-management-change-ky`
- `scope` (26 states): Present: `edu-urlta-scope-ky`
- `security-deposit-cap` (29 states): Present: `edu-no-security-deposit-cap-ky`
- `security-deposit-holding` (15 states): Present: `edu-security-deposit-holding-ky`
- `security-deposit-interest` (29 states): Present: `edu-security-deposit-interest-ky`
- `security-deposit-on-sale` (20 states): Present: `edu-deposit-on-sale-ky`
- `security-deposit-penalty` (19 states): Present: `edu-security-deposit-penalty-ky`
- `security-deposit-return` (35 states): Present: `security-deposit-return-ky`, `edu-deposit-refund-ky`
- `security-deposit-use` (34 states): Present: `security-deposit-use-ky`
- `security-devices` (12 states): Present: `edu-security-devices-ky`
- `self-help-eviction` (30 states): Present: `edu-self-help-eviction-ky`
- `service-animal-denial-penalty` (13 states): Present: `edu-service-animal-denial-ky`
- `service-animal-misrepresentation` (22 states): Present: `edu-service-animal-misrepresentation-ky`
- `servicemember-rights` (29 states): Present: `edu-servicemember-rights-ky`
- `services-utilities-provided` (35 states): Present: `services-utilities-provided-ks-oh`
- `severability` (35 states): Present: `severability`
- `sex-offender-disclosure` (4 states): Present: `edu-sex-offender-disclosure-ky`
- `sex-offender-occupancy` (11 states): Present: `edu-sex-offender-occupancy-ky`
- `shutdown-rent-protection` (4 states): Present: `edu-shutdown-rent-ky`
- `single-family-zone-lease-limit` (new): Present: `edu-owner-occupancy-lease-limit-ky`
- `smoking-policy` (35 states): Present: `smoking-policy`
- `snow-removal` (31 states): Present: `snow-removal`
- `source-of-income` (29 states): Present: `edu-source-of-income-ky`
- `statute-of-frauds-lease-term` (13 states): Present: `edu-statute-of-frauds-ky`
- `statutory-early-termination` (8 states): Present: `edu-statutory-early-termination-ky`
- `statutory-forms` (30 states): Present: `edu-statutory-forms-ky`
- `stigmatized-property` (20 states): Present: `edu-stigmatized-property-ky`
- `storage-space` (35 states): Present: `storage-space-ks-oh-ca`
- `sublet-assign` (35 states): Present: `no-sublet-assign`
- `substandard-property-receivership` (3 states): Present: `edu-receivership-ky`
- `surrender-end-of-term` (35 states): Present: `surrender-end-of-term`
- `telecom-access` (7 states): Present: `edu-telecom-access-ky`
- `tenancy-at-will` (3 states): Present: `edu-tenancy-at-will-ky`
- `tenant-caused-damage` (34 states): Present: `tenant-caused-damage-ky`
- `tenant-death` (31 states): Present: `edu-tenant-death-ky`
- `tenant-display-rights` (14 states): Present: `edu-tenant-display-rights-ky`
- `tenant-forward-proceedings` (25 states): Present: `tenant-forward-proceedings-ca`
- `tenant-maintenance` (35 states): Present: `tenant-maintenance`
- `tenant-repair-agreement` (20 states): Present: `maintenance-allocation-ky`, `edu-maintenance-delegation-ky`
- `tenant-repair-remedies` (20 states): Present: `edu-tenant-repair-remedies-ky`
- `tenant-right-to-organize` (5 states): Present: `edu-tenant-organizing-ky`
- `tenant-rights-statement` (5 states): Present: `edu-tenant-rights-statement-ky`
- `tenant-screening` (18 states): Present: `edu-tenant-screening-ky`
- `tenant-security-cameras` (28 states): Present: `edu-tenant-cameras-ky`
- `tenant-statutory-duties` (12 states): Present: `edu-tenant-statutory-duties-ky`
- `tenants-property-insurance` (35 states): Present: `tenants-property-insurance-ks-oh-ca`
- `term-change-notice` (7 states): Present: `edu-term-change-notice-ky`
- `termination-notice` (33 states): Present: `edu-termination-notice-periods-ky`
- `towing` (32 states): Present: `edu-towing-ky`
- `translation-duty` (4 states): Present: `edu-translation-ky`
- `unauthorized-occupant-removal` (26 states): Present: `edu-unauthorized-occupants-ky`
- `unconscionability` (11 states): Present: `edu-unconscionability-ky`
- `unpaid-damages-interest` (16 states): Present: `edu-unpaid-damages-interest-ky`
- `utilities-paid-by-landlord` (35 states): Present: `utilities-paid-by-landlord`
- `utilities-responsibility` (35 states): Present: `utilities-responsibility-ky`
- `utility-apportionment` (3 states): Present: `edu-utility-apportionment-ky`
- `utility-landlord-account` (8 states): Present: `edu-utility-landlord-account-ky`
- `utility-payment-evidence` (35 states): Present: `utility-payment-evidence`
- `utility-service-continuity` (35 states): Present: `utility-service-continuity`
- `utility-shutoff-statute` (6 states): Present: `edu-utility-shutoff-ky`
- `utility-submetering-disclosure` (18 states): Present: `edu-utility-submetering-ky`
- `waiver-by-acceptance` (19 states): Present: `edu-waiver-by-acceptance-ky`
- `water-heater-temperature` (3 states): Present: `edu-water-heater-temperature-ky`
- `waterbed` (3 states): Present: `edu-waterbed-ky`

### 18.2 Topics with no KY row (status and reason) (125)
Status labels: Answered elsewhere (a KY row covers it under another key), Confirmed absent (battery cited; boundary stated), Not located (the boundary prevents a conclusion), Not offered (a lawful or barred option declined), Not applicable (another state's own law or a summary row).
- `confession-of-judgment` (2 states: MN;PA): Answered elsewhere: KRS 372.140(1) voids any power of attorney to confess judgment given before an action is instituted, in every locality, and KRS 383.570(1) bars the term where the URLTA applies (`edu-prohibited-lease-terms-ky`).
- `disaster-duties` (2 states: CA;OR): Answered elsewhere: No Kentucky disaster statute for tenancies was found; casualty rules are in `casualty-ky` (KRS 383.650 in URLTA localities).
- `dv-qualifying-documents` (2 states: MN;NE): Answered elsewhere: Kentucky's protections turn on a domestic violence order or interpersonal protective order; for the anti-retaliation rule, the eviction defense and the lock change, an emergency protective order, temporary interpersonal protective order or pretrial release no-contact order also counts (KRS 383.300(2)(b), (3)-(5); `edu-dv-lease-termination-ky`, `edu-dv-eviction-protection-ky`).
- `electric-submetering-disclosure` (2 states: TX;WI): Answered elsewhere: `edu-utility-submetering-ky` (no statute; Public Service Commission rules not read, §7).
- `emergency-contact` (2 states: NY;TX): Confirmed absent: No Kentucky statute requires an emergency phone number or contact list for tenants (KY battery emergency-phone (emergency phone number or contact for tenants): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery emergency-phone-r2 (telephone number given to tenants, no emergency limb (everyday rerun)): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3). The manager and owner disclosure is in `landlord-disclosure-ky`. Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `environmental-event-termination` (2 states: CO;KS): Answered elsewhere: Kentucky's casualty rule (`casualty-ky`, KRS 383.650 in URLTA localities); the lead-hazard release in `edu-lead-hazard-release-ky`.
- `ev-charging-end-of-tenancy` (2 states: CO;IL): Answered elsewhere: `edu-ev-charging-ky` (no tenant charging statute).
- `ev-charging-requirements` (2 states: CO;IL): Answered elsewhere: `edu-ev-charging-ky`.
- `ev-charging-shared-area` (2 states: CO;IL): Answered elsewhere: `edu-ev-charging-ky`.
- `fire-sprinkler-duty` (2 states: MN;WI): Not located: No KRS section requires private landlords to install sprinklers (KY battery sprinkler (sprinkler systems in residential rental buildings): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery sprinkler-r2 (sprinkler, the word alone, whole corpus (everyday rerun)): 26 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are contractor licensing, insurance, condominium and care-facility sections). The one tenant-facing rule is for on-campus housing run by a postsecondary institution: it must disclose whether the facility has an automatic fire suppression system, in a signed two-part statement separate from other rental documents in at least 14-point type (KRS 164.9492(1)-(4); found by battery fmt-r2, §4); it does not reach private landlords. Boundary: the building and fire codes (815 KAR) were not read (§7).
- `habitability-modifiable` (2 states: MI;WY): Answered elsewhere: `edu-maintenance-delegation-ky`, `maintenance-allocation-ky` (KRS 383.595(3)-(4)).
- `habitability-waiver` (2 states: WI;WY): Answered elsewhere: Where the URLTA applies, the duties can't be waived except as KRS 383.595(3)-(4) allows (KRS 383.570(1), 383.575; `edu-landlord-repair-duties-ky`, `edu-prohibited-lease-terms-ky`).
- `hazardous-contamination-disclosure` (2 states: IA;MO): Answered elsewhere: Kentucky's only contamination disclosure to tenants is for methamphetamine (`edu-meth-disclosure-ky`, `meth-contamination-disclosure-ky`) (KY battery contam-disc (hazardous or radioactive contamination disclosure): 5 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `inspection-condemnation-disclosure` (2 states: MN;WI): Answered elsewhere: No Kentucky statute requires giving tenants inspection or condemnation orders; `edu-condemned-premises-ky`, `edu-rental-inspection-ky`.
- `lead-safe-certification` (2 states: NJ;WI): Answered elsewhere: `edu-lead-hazard-release-ky` (KRS 211.905) and the shared `lead-based-paint` (tagged).
- `lease-content-requirements` (2 states: NV;OR): Answered elsewhere: `edu-required-disclosures-ky`, `edu-lease-completeness-ky`, `edu-lease-copy-ky`.
- `lease-type-parity` (2 states: OR;WA): Not applicable: Washington and Oregon rules; Kentucky has no rent regulation (`edu-local-preemption-ky`, KRS 65.875).
- `notice-service-fee` (2 states: ID;UT): Not offered: Utah and Idaho options. Where the URLTA applies a lease may not make the tenant pay the landlord's attorney fees (KRS 383.570(1)(c)); a notice-service fee is declined for the same reasons as collection fees (`edu-collection-fee-ky`).
- `portable-cooling-device` (2 states: OR;WA): Not applicable: Washington and Oregon statutes; no Kentucky counterpart was found in chapter 383 (read whole).
- `private-well-testing` (2 states: NJ;OR): Confirmed absent: No Kentucky statute requires well testing or results for tenants (KY battery private-well (private well water testing for rentals): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are well drillers and the groundwater repository). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `prohibited-acts-renter` (2 states: NC;WY): Answered elsewhere: Where the URLTA applies, the tenant's statutory duties include not deliberately or negligently damaging the premises and not disturbing neighbors (KRS 383.605; `edu-tenant-statutory-duties-ky`); the shared `no-disturbance` and `tenant-maintenance` (tagged) state them in the lease; property crimes generally were not screened for a tenant-specific offense.
- `redemption` (2 states: CO;VA): Answered elsewhere: No Kentucky statute lets a tenant pay and have a forcible detainer dismissed after filing (KY battery redemption (tenant pays rent due to stop or dismiss eviction): 14 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits not on point); cure before filing is in `edu-cure-periods-ky` and the appeal deposit in `edu-eviction-process-ky`.
- `security-deposit-nonwaiver` (2 states: CO;WY): Answered elsewhere: KRS 383.570(1) (URLTA localities; `edu-prohibited-lease-terms-ky`).
- `smoke-drift-waiver` (2 states: UT;WI): Not applicable: Utah clause. No Kentucky statute on smoke in multiunit housing (KY battery smoke-drift (tobacco smoke drifting between units / smoking in multiunit housing): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery smoke-drift-r2 (smoking rules: smoke-free or tobacco in buildings (everyday rerun)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); the shared `smoking-policy` (tagged) answers smoking.
- `truth-in-renting` (2 states: MI;NJ): Answered elsewhere: `edu-tenant-rights-statement-ky` (no state statement).
- `utility-allowance-cap` (2 states: CO;WI): Answered elsewhere: `edu-utility-submetering-ky`, `edu-fees-as-rent-ky` (an overage is rent where the URLTA applies, KRS 383.545(10)).
- `window-guards` (2 states: NJ;WI): Not located: No KRS section on window guards or window fall prevention (KY battery window-guard (window guards / window fall prevention): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery window-guard-r2 (window guards, everyday rerun): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3). Boundary: the Kentucky Residential and Building Codes (815 KAR 7) were not read (§7).
- `actual-notice-method` (1 state: OR): Answered elsewhere: Oregon's 'actual notice' concept has no Kentucky counterpart; delivery methods are in the shared `notices` (tagged) and `edu-notice-delivery-ky` (KRS 383.560 in URLTA localities).
- `adverse-proceeding-notice` (1 state: ND): Not applicable: North Dakota statute (tenant must tell the landlord of adverse claims). No Kentucky counterpart was found in chapter 383 (read whole); not searched further.
- `alarm-tampering-fee` (1 state: OR): Not located: Oregon fee. No Kentucky statute on tampering with smoke or CO alarms (KY battery alarm-tamper (tampering with smoke or CO alarms): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery alarm-tamper-r2 (smoke or CO alarm sections, no context (everyday rerun)): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); alarm duties are in `edu-alarm-duties-ky`. Boundary: building and fire codes (815 KAR) not read (§7).
- `appliances-excluded` (1 state: SC): Answered elsewhere: South Carolina rule. Where the URLTA applies the landlord must keep supplied appliances in good and safe working order (KRS 383.595(1)(d); `edu-landlord-repair-duties-ky`); the shared `appliances-included` (tagged) lists what is supplied.
- `balcony-inspection` (1 state: CA): Confirmed absent: No Kentucky statute requires balcony or elevated-element inspections (KY battery balcony (exterior elevated element (balcony) inspection): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are condominium definitions). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `bed-bug-cooperation` (1 state: CA): Answered elsewhere: California clause. No Kentucky bed bug statute (`edu-bed-bug-disclosure-ky`); entry for inspection and treatment is in `landlords-access-ky` (KRS 383.615).
- `casualty-and-mitigation-waivable` (1 state: OH): Not applicable: Ohio summary of two Ohio default rules. Kentucky's casualty rule is in `casualty-ky` and mitigation in `edu-mitigation-ky`.
- `certificate-of-occupancy-disclosure` (1 state: NY): Confirmed absent: No Kentucky statute requires a certificate-of-occupancy statement in a lease (KY battery cert-occ (certificate of occupancy disclosure): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); the zero-hit battery has only a synthetic positive and is recorded, not relied on alone: the phrase does not occur with a tenancy word anywhere in the KRS. Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `cold-weather-vacate-notice` (1 state: MN): Not applicable: Minnesota rule. No Kentucky cold-weather vacating or eviction rule (KY battery cold-weather (cold weather vacating or eviction limits): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits not on point).
- `confirmed-absences-habitability` (1 state: NE): Not applicable: Nebraska summary row. Kentucky's answers are in `edu-landlord-repair-duties-ky`, `edu-tenant-repair-remedies-ky`, `edu-maintenance-delegation-ky`.
- `confirmed-absences-misc` (1 state: NE): Not applicable: Nebraska summary row; each Kentucky topic it touches has its own KY row.
- `confirmed-absences-outside-title` (1 state: NE): Not applicable: Nebraska summary row; Kentucky's outside-title findings are in §17.
- `defective-drywall-disclosure` (1 state: VA): Confirmed absent: No Kentucky drywall disclosure (KY battery drywall (defective drywall disclosure): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are definitions). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `deposit-surrender-notice` (1 state: TX): Not applicable: Texas rule. KRS 383.580 (read whole) sets no surrender-notice condition on the deposit (`security-deposit-return-ky`, `edu-deposit-refund-ky`).
- `designated-repairer` (1 state: NV): Answered elsewhere: Nevada option. Kentucky's repair-and-deduct rule (KRS 383.635(1), URLTA localities) lets the tenant 'cause the work to be done in a workmanlike manner' and says nothing about the lease naming the repairer; a lease term limiting the remedy would risk KRS 383.570(1)(a) (`edu-tenant-repair-remedies-ky`); not offered.
- `disaster-displaced-guests` (1 state: CA): Not applicable: California rule for hotel guests; out of scope for a residential lease.
- `dv-deposit-timing` (1 state: ND): Answered elsewhere: Deposit after a protected tenant's early termination: KRS 383.300 and the deposit rules (`edu-dv-lease-termination-ky`, `security-deposit-return-ky`).
- `dv-protection-order-chapter-moved` (1 state: ND): Not applicable: North Dakota recodification note. Kentucky's tenant protections and the orders they rest on are in KRS 383.300 (`edu-dv-lease-termination-ky`).
- `employee-screening` (1 state: FL): Not applicable: Florida lodging rule. (KY battery employee-screen-r2 (background checks of apartment employees (rerun, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); recorded with a synthetic positive only and not relied on as proof of absence.
- `eviction-penalty-clause-ban` (1 state: CO): Answered elsewhere: No Kentucky ban on eviction penalty clauses; where the URLTA applies a lease may not make the tenant pay the landlord's attorney fees (KRS 383.570(1)(c); `edu-prohibited-lease-terms-ky`, `edu-attorney-fees-ky`).
- `eviction-service-party` (1 state: TN): Not applicable: Tennessee option. Kentucky's forcible detainer summons is served by the sheriff or constable (KRS 383.210; `edu-eviction-process-ky`); no statute lets the tenant name a person to accept service (chapter 383 read whole).
- `expedited-deposit-disposition` (1 state: VA): Not applicable: Virginia option. Kentucky sets no general refund deadline (`edu-deposit-refund-ky`), so there is no period to shorten.
- `family-child-care` (1 state: OR): Not applicable: Oregon rule. No Kentucky statute on family child care in rented homes (KY battery child-care-home (family child care in rented homes): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits not on point).
- `fee-unprovided-service` (1 state: CO): Answered elsewhere: Colorado statute. Kentucky fees: `edu-fee-transparency-ky`, `edu-consumer-protection-ky`.
- `fire-code-standard` (1 state: ND): Not applicable: North Dakota definition note. Kentucky fire codes (815 KAR) not read (§7); `edu-alarm-duties-ky`.
- `forfeiture-redemption` (1 state: CA): Not applicable: California rule. (KY battery redemption (tenant pays rent due to stop or dismiss eviction): 14 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); no Kentucky redemption rule (see `redemption`).
- `frozen-standard-incorporation` (1 state: ND): Not applicable: North Dakota note.
- `furnishings-included` (1 state: KS): Answered elsewhere: Kansas deposit-limit rule; Kentucky has no deposit cap (`edu-no-security-deposit-cap-ky`), so a furniture list adds nothing legal; supplied items are listed under the shared `appliances-included` (tagged).
- `good-cause-notice` (1 state: NY): Answered elsewhere: New York notice. `edu-no-for-cause-eviction-ky`.
- `governmental-fines` (1 state: TX): Answered elsewhere: `government-fee-reimbursement-ky` excludes fines and penalties; no Kentucky statute on passing fines to tenants (KY battery fines-pass (government fines charged to tenants or occupants): 1 hit, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (its one hit, KRS 109.310, bars fines on non-occupying owners for tenants' garbage fees; `edu-utility-lien-ky`).
- `habitability-materiality` (1 state: WY): Answered elsewhere: `edu-landlord-repair-duties-ky`; the tenant remedies turn on a material noncompliance materially affecting health and safety (KRS 383.625(1); `edu-tenant-repair-remedies-ky`).
- `habitability-presumption` (1 state: CA): Not applicable: California presumption; no Kentucky counterpart found in chapter 383 (read whole).
- `health-district-rental-rules` (1 state: NV): Not located: Nevada rule. Local health department regulation of rental housing in Kentucky was not searched (KAR and local rules, §7).
- `inspection-notice-penalty` (1 state: MN): Not applicable: Minnesota deposit rule. Kentucky's move-in and move-out damage lists are in `edu-condition-checklist-ky` and `edu-security-deposit-penalty-ky`.
- `key-control-policy` (1 state: NV): Not applicable: Nevada rule for large complexes; (KY battery employee-screen-r2 (background checks of apartment employees (rerun, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); not relied on as proof of absence.
- `landlord-breach-remedy` (1 state: TX): Answered elsewhere: `edu-tenant-repair-remedies-ky` (KRS 383.625 to 383.645 in URLTA localities).
- `landlord-liability-insurance` (1 state: NJ): Confirmed absent: No Kentucky statute requires a rental owner to carry liability insurance (KY battery landlord-insurance (liability insurance required of rental owners): 8 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are other businesses). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `landlord-remedies-termination` (1 state: KS): Answered elsewhere: `default-by-tenant-ky`, `edu-cure-periods-ky`, `edu-eviction-process-ky` (KRS 383.660 in URLTA localities).
- `late-fee-limit` (1 state: MN): Answered elsewhere: `edu-late-fee-ky` (no cap) (KY battery late-fee (late fee / late charge): 39 hits, control 0; known positives passed (0 real sections, 2 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery late-fee-r2 (late charge everyday words (rerun of late-fee-2)): 3 hits, control 0; known positives passed (0 real sections, 2 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `law-enforcement-cooperation` (1 state: TN): Not applicable: Tennessee child-abuse rule; not searched for Kentucky.
- `lease-notice-initial-requirement` (1 state: ND): Not applicable: North Dakota rule; Kentucky has no initialling rule for notice periods (`edu-plain-language-ky`, §4).
- `lease-term-limitation` (1 state: KS): Answered elsewhere: Kansas rule. Kentucky: `edu-statute-of-frauds-ky`, `edu-tenancy-at-will-ky` (KRS 383.565(3)).
- `lease-type-size` (1 state: NY): Answered elsewhere: `edu-plain-language-ky` (no type-size rule) (KY battery fmt-r2 (formatting/placement rules (rerun)): 362 hits, control 0; known positives passed (1 real section, 3 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); §4.
- `liquidated-damages` (1 state: OK): Not located: Oklahoma statute. No Kentucky statute on penalty clauses in leases (KY battery liquidated (liquidated damages or penalties outside UCC goods): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are UCC goods leases and other fields); the common-law penalty doctrine was not searched (case law, §7; `edu-late-fee-ky`).
- `lockout-for-rent-delinquency` (1 state: TX): Answered elsewhere: `edu-self-help-eviction-ky` (KRS 383.655 in URLTA localities; (KY battery lockout (lockout / utility shutoff by landlord): 8 hits, control 0; known positives passed (2 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3)).
- `maintenance-duty-shift` (1 state: ND): Answered elsewhere: `edu-maintenance-delegation-ky`, `maintenance-allocation-ky`.
- `meter-conservation-charge` (1 state: SC): Not applicable: South Carolina rule. (KY battery meter-conserv (meter conservation or efficiency charge on utility bill): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); recorded with a synthetic positive only and not relied on as proof of absence. Public Service Commission rules (807 KAR) not read (§7).
- `nonrefundable-deposit-separate-notice` (1 state: WY): Answered elsewhere: `edu-nonrefundable-fees-ky`.
- `notice-to-quit-waiver` (1 state: PA): Not offered: Pennsylvania option. Where the URLTA applies, the 7-day notice can't be waived (KRS 383.570(1)(a)); elsewhere no statute requires a notice before ending a tenancy for nonpayment, though KRS 383.195 (one month's written notice for a tenancy at will or by sufferance) and KRS 383.180(2) (10 days' notice to quit after an unconsented assignment) are statutory notices; a waiver is not offered, and this library's lease gives the 7-day notice everywhere (`edu-nonpayment-notice-ky`, `default-by-tenant-ky`; §6).
- `notice-to-vacate-additional-terms` (1 state: KS): Not applicable: Kansas rule; not searched for Kentucky.
- `optional-lease-terms` (1 state: ND): Not applicable: North Dakota summary; Kentucky's lease-chooses points are in §19 (rule 50).
- `ordnance-demolition-meter-disclosures` (1 state: CA): Not applicable: California disclosures; not searched for Kentucky.
- `other-landlord-facilities` (1 state: CA): Answered elsewhere: `edu-landlord-repair-duties-ky`.
- `owner-move-in-reservation` (1 state: CA): Not applicable: California just-cause option; Kentucky has no just-cause rule (`edu-no-for-cause-eviction-ky`).
- `parking-rules-notice` (1 state: TX): Answered elsewhere: Shared `parking-vehicle-rules` (tagged); towing in `edu-towing-ky`.
- `part5-nonwaivable` (1 state: CO): Answered elsewhere: `edu-prohibited-lease-terms-ky` (KRS 383.570(1)).
- `pest-control-notice` (1 state: CA): Not applicable: California notice; not searched for Kentucky.
- `plain-language-consumer-statement` (1 state: PA): Answered elsewhere: `edu-plain-language-ky`, `edu-consumer-protection-ky`.
- `political-access` (1 state: MN): Confirmed absent: No Kentucky statute gives candidates access to multiunit buildings (KY battery candidate-access (candidate or campaign access to multiunit buildings): 10 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits not on point). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `possession-bond` (1 state: TN): Not applicable: Tennessee statute. No Kentucky possession bond (KY battery possession-bond (tenant bond to deliver possession): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); recorded with a synthetic positive only. KRS 383.255 (appeal deposit) is in `edu-eviction-process-ky`.
- `promises-to-repair` (1 state: WI): Answered elsewhere: Wisconsin rule. Promised repairs: `existing-condition-ky` records the move-in condition; a written promise is an ordinary contract term (KRS 383.565(1)).
- `prop65-rental-warning` (1 state: CA): Not applicable: California ballot-measure rule.
- `property-tax-rent-disclosure` (1 state: NV): Confirmed absent: No Kentucky statute requires telling tenants the property-tax share of rent (KY battery prop-tax-stmt (statement to tenants of property taxes in rent): 10 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are tax administration). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `purpose-limitation` (1 state: ND): Answered elsewhere: Shared `residential-use-only` (tagged).
- `recycling-notice` (1 state: OR): Confirmed absent: No Kentucky recycling rule for rental housing (KY battery recycling (recycling in multifamily housing): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are definitions and tax). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `religious-cultural-display` (1 state: NV): Confirmed absent: No Kentucky statute protects religious displays by tenants (KY battery religious-display (religious items on door or doorframe): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); flag displays are in `edu-tenant-display-rights-ky`. Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `rent-demand-bar` (1 state: CA): Answered elsewhere: `edu-condemned-premises-ky`.
- `rent-installments` (1 state: OR): Answered elsewhere: Rent is payable 'at the time and place agreed upon' (KRS 383.565(2)); the shared `rent-payment` (tagged) can state installments.
- `rent-receipt-anti-waiver` (1 state: KS): Answered elsewhere: KRS 383.575 (`edu-landlord-repair-duties-ky`).
- `repair-cost-termination` (1 state: WY): Not applicable: Wyoming rule; KRS 383.595 (read whole) has no uneconomical-repair termination.
- `repair-escrow-exemption-notice` (1 state: OH): Not applicable: Ohio small-landlord notice; Kentucky's tenant remedies have no unit-count exemption (`edu-portfolio-thresholds-ky`).
- `security-deposit-standards` (1 state: SC): Not applicable: South Carolina rule; no Kentucky counterpart in KRS 383.580 (read whole).
- `senior-housing-work-card` (1 state: NV): Not applicable: Nevada rule.
- `sfr-occupancy-disclosure` (1 state: NV): Not applicable: Nevada disclosure; Kentucky's single-family zoning limit is `edu-owner-occupancy-lease-limit-ky` (Jefferson County).
- `smart-access` (1 state: WA): Not applicable: Washington statute effective 2027; no Kentucky counterpart was found (KY battery security-devices (locks, deadbolts, peepholes, rekey): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3).
- `social-security-defense` (1 state: CA): Not applicable: California rule.
- `sprinkler-disclosure` (1 state: NY): Not applicable: New York notice. Kentucky's only sprinkler disclosure is for postsecondary institutions' on-campus housing (KRS 164.9492; see `fire-sprinkler-duty`), outside the library's scope; no private-landlord notice (KY battery sprinkler-r2 (sprinkler, the word alone, whole corpus (everyday rerun)): 26 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3). Boundary: 815 KAR not read (§7).
- `statutory-caps` (1 state: OH): Answered elsewhere: `edu-no-security-deposit-cap-ky`, `edu-late-fee-ky`, `edu-pet-fees-ky`, `edu-application-fees-ky`.
- `steam-radiator-covers` (1 state: NJ): Confirmed absent: The word 'radiator' does not occur in the KRS or the Constitution (KY battery radiator (steam radiator covers): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (no context limb). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `stove-refrigerator` (1 state: CA): Answered elsewhere: Shared `appliances-included` (tagged); `edu-landlord-repair-duties-ky`.
- `subsidized-inspection-refusal` (1 state: IL): Not applicable: Illinois rule.
- `subsidy-habitability-proration` (1 state: CO): Not applicable: Colorado rule. (KY battery subsidy (housing subsidy portion of rent: late fees, proration): 10 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (hits are source-of-income and tax sections).
- `subsidy-late-fee` (1 state: CO): Not applicable: Colorado rule. (KY battery subsidy (housing subsidy portion of rent: late fees, proration): 10 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); late fees generally in `edu-late-fee-ky`.
- `tenant-confidential-information` (1 state: OR): Not located: Oregon rule.  (KY battery tenant-records-r2 (confidentiality of tenant or applicant records (rerun, both orders)): 115 hits, control 0; known positives passed (0 real sections, 2 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3); the hits were screened by heading only (none is a landlord-tenant section) and not read whole, so no absence is claimed; victim information is in `edu-dv-confidentiality-ky`.
- `tenant-insurance-claims` (1 state: CO): Answered elsewhere: `edu-renters-insurance-ky`.
- `tenant-portal` (1 state: OR): Confirmed absent: No Kentucky tenant-portal rule (KY battery portal (tenant portal / online application platform): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `tenant-records` (1 state: VA): Not located: Virginia rule. As `tenant-confidential-information`.
- `tpa-exemption-notice` (1 state: CA): Not applicable: California Tenant Protection Act.
- `tpa-notice` (1 state: CA): Not applicable: California Tenant Protection Act.
- `tpa-sunset` (1 state: CA): Not applicable: California Tenant Protection Act.
- `unbundled-parking` (1 state: CA): Not applicable: California rule; not searched for Kentucky.
- `utility-deposit-return` (1 state: WY): Confirmed absent: No Kentucky rule for a utility deposit held by a landlord (KY battery utility-deposit (utility deposit held by landlord): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KY battery utility-deposit-r2 (deposit for utility service, no context (everyday rerun)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 277, FORM 5, KRS 25283, SL 3) (KRS 278.460 is interest on deposits held by utilities). Boundary: KRS and Constitution searched; KAR, local ordinances and case law not searched.
- `utility-disclosure-attachment` (1 state: MN): Answered elsewhere: `edu-utility-apportionment-ky`.
- `utility-disconnection-notice-authorization` (1 state: WI): Answered elsewhere: `edu-utility-shutoff-ky`, `edu-utility-landlord-account-ky`.
- `utility-interruption-submeter` (1 state: TX): Answered elsewhere: `edu-self-help-eviction-ky` (KRS 383.655), `edu-utility-submetering-ky`.
- `utility-transfer` (1 state: TN): Answered elsewhere: `utilities-responsibility-ky` (which utilities the tenant may be made to pay, and the landlord's supply duties where the URLTA applies, KRS 383.595(1)(e), (3)).
- `veterans-incentive` (1 state: FL): Not applicable: Florida pilot program.
- `written-notice-required` (1 state: MN): Answered elsewhere: `edu-notice-delivery-ky`, `edu-repair-notice-ky`.

Tally: Answered elsewhere 55, Confirmed absent 13, Not applicable 48, Not located 7, Not offered 2.

### 18.3 'Topics no state has a row for yet'
The reference carries no such list; every topic has rows in at least one state and is answered in §18.1 or §18.2.

## 19. Step D screens (rules 37-54), one line each
- **35 constitution:** loaded before the first battery; §§ 1, 7, 8, 10, 59 screened; § 7 (jury) and § 1 (arms) reach rows (`edu-jury-waiver-ky`, `edu-firearms-ky`).
- **37 tenancy type:** week-to-week, month-to-month, fixed-term and holdover tenancies differ in both tiers (KRS 383.565(3), 383.695(1)-(4), 383.160, 383.195); the protective-order rules turn on the lease date (June 29, 2017); stated in `edu-termination-notice-periods-ky`, `edu-tenancy-at-will-ky`, `holdover-ky`.
- **38 no imported structure:** the URLTA's Kentucky text was read against each shared clause; Kentucky's 15-day cure, 10-day holdover notice, no-rent-reduction casualty text and conjunctive deposit forfeiture are its own (§6.3).
- **39 eviction duties:** no post-writ storage duty (`edu-post-eviction-property-ky`); no self-help (`edu-self-help-eviction-ky`); no sealing (`edu-eviction-records-ky`); the appeal rent deposit (`edu-eviction-process-ky`); the squatter procedure excludes former tenants (KRS 383.290(9)).
- **40 formatting and placement:** fmt-r2, blank-spaces, copy-of-lease; layout table §4.
- **41 just cause:** none; recorded in `edu-no-for-cause-eviction-ky` (topic `for-cause-eviction`).
- **42 required text in a shared clause:** the deposit account and number (`security-deposit-use-ky`), the manager and owner disclosure (`landlord-disclosure-ky`), the lien-exemption sentence (`no-liens-ky`); each is its own clause.
- **43 cure promises:** `default-by-tenant-ky` gives 7 and 15 days and keeps the six-month no-cure repeat in its own sentence; `early-termination` (10-day cure for any breach) not tagged.
- **44 terms turned into duties:** landlord-supplied appliances and facilities must be maintained (KRS 383.595(1)(d), 'supplied or required to be supplied'); utilities the law requires the landlord to supply (`utilities-responsibility-ky`).
- **45 electronic notices:** KRS 369.103 (exclusions: wills, most UCC, negotiable instruments; no lease or notice exclusion) and 369.105 (agreement to transact electronically; non-waivable refusal right) read; termination notices follow KRS 383.560 where the URLTA applies; `electronic-signatures` tagged; `edu-notice-delivery-ky`.
- **46 lease as the notice:** the owner disclosure, deposit account and lien-exemption term can be lease paragraphs; the damage lists and the chore agreement cannot (§4).
- **47 knowing-use penalties:** KRS 383.570 has none; KRS 383.302(2) does for police-call terms (`edu-knowing-use-penalty-ky`); no Kentucky debt-collection statute adds one (debt-collection, collection-costs-r2).
- **48 separate documents:** KRS 383.595(4)(a) (chores) → `maintenance-allocation-ky`; KRS 371.065(1) (separate guaranty); no other separate-writing rule for leases.
- **49 collection costs:** KRS 383.570(1)(c) where the URLTA applies; KRS 411.195 elsewhere (`attorney-fees-non-urlta-ky`); collection and notice-service fees not offered.
- **50 'the lease controls':** each choice made on purpose: rent time and place (KRS 383.565(2)), use as a dwelling (KRS 383.620), the casualty rent rule ('unless he otherwise contracts', KRS 383.170: no contrary term), the repair-covenant casualty rule (KRS 383.170: none), the deposit-on-sale rule ('Unless otherwise agreed', KRS 383.600: none), the 15-day cure (lease gives it), waiver by acceptance (KRS 383.675: no pre-breach agreement possible).
- **51 plain language and consumer contracts:** no plain-language statute (fmt-r2, blank-spaces); consumer protection in `edu-consumer-protection-ky`, unconscionability in `edu-unconscionability-ky`.
- **52 exculpation:** KRS 383.570(1)(d) where the URLTA applies; the ks-oh and ks-oh-ca variants tagged; `pet-policy-ky` without the indemnity; `edu-exculpatory-clauses-ky`.
- **53 figures vs shared clauses:** `landlords-access` (24 hours), `possession-delay` (30 days), `holdover` and `returned-payments` (ceiling-only) replaced; `late-fee` (anti-waiver) replaced.
- **54 optional clauses:** §6.1. **54t tenant-caused damage:** `tenant-caused-damage-ky`.
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences; six independent-check rounds and a check of this log (§13). No KY clause lacks a basis.

## Proposed SOP changes
1. Rule 19: before citing a battery for an absence, also search the regime's own nouns with no tenancy context limb (the object of the rule: 'money belonging to others', 'personalty', 'solid waste', 'registrant', 'pool', 'unfit ... for human habitation', the federal act's name); Kentucky's independent check found ten false or overbroad absences whose batteries required a tenancy word the controlling statute never used.
2. Rule 26: the tag-first table must have a reason for every TAG row, and the assembler should refuse an empty one; 23 Kentucky tag notes went to the first check with an empty reason because the screen table's cell was blank.
3. Rule 16: a bill's status may support a row only if the bill page is saved and hashed like any other source; Kentucky's early rows cited 2026 bill statuses read in the browser but not saved, and the check removed them.
4. Two-tier states (local adoption of the uniform act, as in Kentucky and Tennessee): fix a scope-label set before drafting and define it once (for clauses: where used; for education rows: BOTH TIERS when both statewide and act-only rules are stated); Kentucky's labels drifted until round 2.
5. Rule 14: in the built-in browser, downloads land under temporary `.tmp` names, and a download click reloaded the crawl tab once; export from a second tab on the same origin and identify files by size and SHA-256.
6. Rule 59: the quote checker should resolve a citation list ('KRS 344.360, 344.365(4)') to every section in it, not only the first; Kentucky's first checker flagged correct quotes for that reason.

## Proposed topic questions
1. `guarantor-renewal`: Does a general guaranty statute require a separate guaranty to state a maximum liability and an end date unless it is written on or refers to the lease? (Kentucky, KRS 371.065.)
2. `construction-liens`: Can the lease itself keep the lessor's interest free of liens for tenant improvements if it says so expressly and the tenant tells contractors? (Kentucky, KRS 376.010(3), leases on or after June 29, 2023.)
3. `landlord-maintenance`: Outside the landlord-tenant act, does a local-government statute make every owner keep structures fit for habitation, enforced by code fines and liens? (Kentucky, KRS 65.8840(5).)
4. `abandoned-property`: Is there a separate lien and sale procedure for property abandoned on a rented mobile home lot? (Kentucky, KRS 376.480.)
5. `servicemember-rights`: Does a state statute extend the federal SCRA's protections to National Guard members on state active duty? (Kentucky, KRS 38.510.)
6. `municipal-utility-lien`: Can a local government put a tenant's unpaid garbage fees on the owner's property tax bill, and how does a non-occupying owner avoid it? (Kentucky, KRS 109.310.)
7. `pool-safety`: Do health statutes class a residential community's pool as a limited-access pool with lifeguard and shut-off duties? (Kentucky, KRS 211.203.)
8. `meth-disclosure`: Does the penalty for leasing without the disclosure turn on a contamination determination rather than the posted notice that triggers the disclosure duty? (Kentucky, KRS 224.99-010(15), 224.1-410.)
9. `scope`: Where the uniform act applies only by local adoption, which localities have adopted it, and is there a primary list? (Kentucky, KRS 383.500.)

## Sync (Claude Code, 2026-10-05)

- **Merged** with `merge-delta.py --base 56c551d` (the 3,530-row library the kickoff was staged from): 45 rows tagged and 173 new; nothing refused. `smoking-policy`, `no-alterations` and `addendum-precedence` were edited centrally on 2026-10-04 after this pass screened them; each edit only narrows the tenant's obligations or defers to applicable law, so KY's tags stand (noted on each row). Library 3,704 rows; KY 219 active (67 lease clauses, 152 education); no same-topic pairs; every other state's set unchanged.
- **Cross-state decisions applied at sync** (this kickoff predates them): KY tagged on `edu-cares-act-notice` (15 U.S.C. § 9058(c); KRS 383.660(2)'s 7 days is the state notice the federal 30 days can lengthen on a covered property). Fee screen on `keys` and `hoa-compliance`: both pass. KRS 383.300(4)(a) has a protected tenant install a new lock "at his or her expense", and Kentucky has no closed fee list; the KY notes on `hoa-compliance` already record no statute limiting fine pass-through (KRS 381.798).
- **Rule 27:** all seven topics have KY rows; no rows added at sync.
- **Citations file:** `lease-clause-citations-KY.csv` built from each row's KY note segment (219 rows: 196 cited, 21 confirmed absent with their named batteries, 2 generic). The scope label's "KRS 383.505 to 383.705" is excluded as a citation, hyphenated sections (KRS 224.1-410) are captured, and `edu-cares-act-notice` cites the federal statute.
- **Legal watch:** KY config in `stateConfig.js` (KRS sections only, query paired with "KRS"; 167 sections), federal lead checks, and two manual items (local URLTA adoptions; KAR regulations and the deposit-escheat question). `legal-watch-ky.yml` committed held until after 2027-09-08; first run 2027-10-08, day 8 at 14:00 UTC.
- **Topic questions:** the nine proposed above plus one for the new key `single-family-zone-lease-limit`.
- **Guards:** all pass. **Statute spot-check, 5 of 5, against the official KRS section PDFs from apps.legislature.ky.gov (fetched 2026-10-04):** KRS 383.615(3) (at least two days' notice of entry, at reasonable times), 383.580(3)-(5) (signed final damage listing and written dissent), 383.660(2) (7 days after written notice of nonpayment), 383.570(1)(c) (no agreement to pay the landlord's attorney's fees where the act applies), 383.300(4)(a) (lock change at the tenant's expense).
- **SOP 1.61:** all six proposals adopted (rules 14, 16, 19, 26, 32, 59); KY column added. The §10 flags are in the backlog.
