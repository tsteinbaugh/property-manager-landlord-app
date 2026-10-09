# Connecticut — lease-clause decision log (state #40)
**Dates:** research pass, independent check and delivery 2026-10-09 (one Desktop chat; the session's context was compacted once mid-pass and resumed from the saved work files, with nothing lost). **Settings:** Opus, high effort. Research mode was not turned on: every rule 9 trigger (proofs of absence, the ambiguous § 47a-4e and § 47a-26j(d) wording, the cross-chapter gap search) was handled with saved-corpus batteries and section reads, which the shell could run directly; one web search was used for the screening-fee CPI figure (§7).
**Step A (rule 23):** the attached `lease-clauses.csv` has 4,574 rows (sha256 5d0f10be41cef870c16d161e2ae914226eb20128a8353d3b0b2751cdd92420bc). 4,459 are active (929 lease clauses, 3,530 education rows), and every per-state active count matched the kickoff (counted by splitting `states` on both ";" and ","; a first count that split on "," alone did not match and was redone). Connecticut had two rows, both dormant and UNVERIFIED (`security-deposit-cap-ct`, `security-deposit-interest-ct`; §5).
**Result:** 340 delta rows: 49 shared rows tagged CT (48 clauses, 1 federal education row), 2 existing Connecticut rows resolved, 35 new Connecticut clauses and 254 new Connecticut education rows. After merge Connecticut has 339 active rows (84 clauses, 255 education rows) covering 307 topic keys.

## 0. Completion status
| | Status |
|---|---|
| Step A: counts and file check (rule 23) | Done (header above) |
| Source registry, currency, corpus (rules 16, 19, 24) | Done, §1 |
| Tag-first screen of all active clauses (rules 26-28) | Done, §2 |
| Dormant rows re-verified (rule 25) | Done, §5 |
| Gap-discovery source 1 — statute walk | Done, §14 |
| Gap-discovery source 2 — real-lease comparison | Done, §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done, §16 |
| Gap-discovery source 4 — outside-title search | Done, §17 |
| Formatting and placement batteries (rule 40) | Done, §4 (run after drafting, not in Step C; see Proposed SOP changes) |
| Topic canvass, every topic answered (rules 27, 36) | Done, §18 (344 topics) |
| Step D screens (rules 40-54) | Done, §19 |
| Optional clauses (rule 54) | Done, §6.1 |
| Questions to Taylor (rule 76) | Done, §6.2 (three asked, all answered) |
| Integrity checks (rules 22, 59, 63, 64, 79) | Done, §8 |
| Independent check (rule 80), 3 rounds | Done, §13 (round 3 still produced changes; rows listed there) |
| Deliverables (rules 70-75) | Done, §11 |

## 1. Sources, currency and corpus (rules 16, 19, 24)
### 1.1 Source registry (rule 24)
- **Channel:** the shell's network does not reach cga.ct.gov, eregulations.ct.gov, jud.ct.gov or portal.ct.gov, so, with Taylor's approval (§6.2), the built-in browser on his computer fetched each official source in-page (fetch for HTML, pdf.js for PDFs) and saved JSON files to his Downloads folder. Each file was hashed on his computer, staged into the workspace and re-hashed there (match required). Browser blob downloads sometimes landed as `.tmp` files; they were identified by hash and renamed.
- **General Statutes:** cga.ct.gov chapter pages (`/current/pub/chap_*.htm`, `/current/pub/art_*.htm` for title 42a) and the 2026 Supplement pages (`/2026/sup/`), saved as `ct-cgs-corpus-20261009-part1..8.json` (sha256 prefixes af35d4a9, b7c6341c, 4ea5cf62, 4f8f9b4d, d30f43e4, 5e6fc974, 81fe2d1e, a01e7129). 30,972 sections parsed (29,020 from the 2025 revision; 1,952 replaced by their 2026 Supplement version, with the 2025 text kept beside them).
- **2026 public acts:** every act on the 2026 public and special act lists (151 public acts, 34 special acts; `ct-acts-2026-20261009.json`, sha256 5588fff2...), with each act's "Governor's Action" line. No 2026 special session acts were listed on 2026-10-09.
- **Constitution:** cga.ct.gov `Constitution_State_CT.pdf` (annotated, 129 pages, through Article XXXV of the amendments, adopted November 27, 2024; `ct-constitution-20261009.json`, sha256 51b76766...).
- **Regulations (RCSA), selected subtitles only:** eregulations.ct.gov full-version documents for 19a-111 (lead), 16-3 (utility termination), 19a-37a, 29-292 (Fire Safety Code), 29-291a (Fire Prevention Code), 8-37ee (fair housing marketing), 8-68f (state public housing), 17b-802 (deposit guarantee), 8-337 (deposit loan fund), 20-325c, 47-295, 42-131d, 36a-809 (`ct-rcsa-selected-20261009.json`, sha256 87f88936...). The eRegs bot challenge blocked scripted fetches; pages were opened by navigation and the document text read in-page.
- **Court rules:** Connecticut Practice Book 2026 (jud.ct.gov `PB.pdf`, 696 pages, last modified 2026-09-25, sha256 bb406ab4...) and the Practice Book amendments adopted June 11, 2026, effective January 1, 2027 (Conn. L.J. June 23, 2026, `pblj_8752.pdf`, sha256 abedee45...).
- **Agency documents:** Department of Housing (DOH) Standardized Rental Terms Summary Form, Form AM-011 protected-tenant notice (English and Spanish), preoccupancy walk-through checklist, DOH Connecticut Model Lease Agreement (portal.ct.gov/doh mandatory landlord-tenant forms page); Department of Banking deposit index page (2026 rate 0.49%, read on the saved page). Text extracts saved beside each original under `src/agency/`.
- **Citation forms used:** as the kickoff gives them. 68 "P.A." and "Public Act" citations written during drafting were expanded by script to `Conn. Pub. Act No. NN-NNN`; each expansion was listed (`work/pa-expansions.json`) and reviewed (no title inference is involved in Connecticut's form; the four November 2025 special-session cites read `Conn. Pub. Act No. 25-1 (Nov. Sp. Sess.)`). The expansion never touches text inside a verbatim quote.
### 1.2 Currency (rule 16)
- **Compilation:** the cga.ct.gov "current" chapter pages are the General Statutes revised to January 1, 2025; the 2026 Supplement (revised to January 1, 2026) carries the sections the 2025 regular session and the November 2025 special session changed. The corpus merges the two, preferring the Supplement text. **Kickoff conflict:** the kickoff says the "current" pages are revised to January 1, 2026; the pages themselves say 2025, and sections amended in 2025 appear only in the Supplement (for example § 47a-15a's online-payment extension, Conn. Pub. Act No. 25-1 (Nov. Sp. Sess.), § 38, and § 47a-7d's summary form, Conn. Pub. Act No. 25-44, § 9). The SOP's currency rule governs; nothing turned on the difference once the Supplement was merged.
- **2026 acts (uncompiled):** an index of every act section, its effective date and the sections it amends (`work/acts2026-index.json`) was built from the acts' own text ("Sec." and "Section" headings). Every act touching title 47a, § 46a-64c, the fire codes, utilities, consumer contracts, data privacy, cannabis, unclaimed property and court procedure was read. Those relied on, with the Governor's approval dates from the act PDFs: Conn. Pub. Act No. 26-113, § 1 (new § 47a-4(a)(11), utilities not separately metered; effective October 1, 2026, for agreements entered into or renewed on or after that date; approved June 4, 2026); No. 26-68, § 59 (§ 47a-4d(b), third parties acting for a landlord or the state; effective from passage; approved May 26, 2026); No. 26-79, § 3 (§ 47a-21(j), Banking Commissioner civil penalties; October 1, 2026; approved May 27, 2026); No. 26-11, § 15 (§ 47a-23c cross-reference; October 1, 2026; approved May 7, 2026); No. 26-84, §§ 2-3 (elevator duties; approved May 26, 2026); No. 26-77, §§ 16, 27, 29 (fair housing: the class D misdemeanor moves from § 46a-64c(g) and § 46a-81e(e) to a new "hate crime by discriminatory housing practice"; October 1, 2026; approved May 26, 2026) and No. 26-110, §§ 2, 6 (approved June 4, 2026); No. 26-58, §§ 2-3 (fire codes; approved May 26, 2026); No. 26-8 (cannabis, including out-of-state patients in § 21a-408p; approved May 20, 2026); No. 26-64, §§ 12, 14 and No. 25-113, §§ 5-6 (data privacy); No. 26-94, §§ 1, 4 (unclaimed property); No. 26-100, § 60 (risk-based inspection pilot); No. 26-127, § 9 (portable solar). Rows citing them say "compiled text pending".
- **Bracket convention:** in the extracted act text, [brackets] mark deletions and added words are not marked; rows were written from the substituted section text read whole.
- **Special session:** none in 2026 as of 2026-10-09 (act lists checked).
### 1.3 Corpus and method (rule 19)
- **General Statutes crawl:** every title page's chapter and article links (including ranged chapters such as chap_231-235 and title-42a articles) were followed; a table-of-contents diff found 0 sections listed in an index but missing from the corpus. A section printer (`tools/sec.py`) prints each whole section with its history line; checkers used the same printer.
- **Constitution:** split into 64 units by article heading; control terms "General Assembly" and "Governor" hit in every battery run over it (rule 35). Article count checked against the document: 14 original articles and articles of amendment I-XXXV.
- **Batteries:** `tools/battery.py` searches whitespace-collapsed text over the whole corpus (statutes, 2025 texts of amended sections, Constitution, loaded RCSA, Practice Book and its 2027 amendments, 2026 acts) and logs each run (pattern, context limb, sources, hits, hit ids, a nonsense control that must return 0, a "General Assembly" control, known and synthetic positives) to `work/batteries.jsonl` before any hit is read. 474 batteries logged in all (by name; reruns append a new entry under the same name). A script check over the whole log (§8) found 109 batteries cited by rows or the log that had no passing positive; each was rerun unchanged with a synthetic positive (hit counts identical), ten with hand-written sentences where a generated one did not match. Five batteries whose known positive sat outside the pattern are disclosed in their rows. 24 absence batteries that carried a tenancy-context limb were rerun without it (rule 19, WA 1, 4); the extra hits were read in context where few (POSS-DELIVERY 3, liquidated damages 16, possession bond 21, lease completeness 16, lease copy 6, initials 30, term limits 14, nonresident owner 19, translation 76, parking notice 8, submetering 1, flood 151, lease type size 110, liability insurance 130) and, where large (veterans 301, family violence 227, for-cause 650, minor tenant 568, post-eviction property 397, Social Security defense 176, informal dispute resolution 2,143), narrowed to units containing housing words and screened by section heading (a weaker method, named here). No new landlord rule surfaced; § 47-19 (recording of leases over one year) and § 52-565a's ten-point bilingual demand were already in rows.
- **Agents:** two canvass agents ran one at a time per slice (slice A then slice B), saving one JSON line per topic. Three check rounds ran one agent at a time (§13).
### 1.4 Section-open vs recall; case law (rules 15, 21)
- Every Connecticut row and segment was written with its sections open from the saved corpus; 335 of 340 delta rows end "Rule 15: written section-open." and the other five (absence rows) record their basis as "statute-wide search with terms and hit counts". No row was written from recall.
- **Case law:** none read or searched. Rows that turn on a judicial question say "case law not searched", "unsettled" or carry NEEDS_REVIEW. Questions left to case law include: whether § 42-150u reaches a residential early-termination fee and whether the fee is a penalty; whether a mid-term market-rate increase clause (Option B of `rent-increase-midterm-ct`) is enforceable given § 47a-4e(1); whether the § 47a-4d(b) "move-out fee" bar reaches an early-termination fee; whether a landlord casualty termination binds a tenant who stays under § 47a-14(a)(2); lost rent through the end of the term; whether a rent claim may be joined to summary process; whether the mitigation duty is a non-waivable tenant right; the covenant of quiet enjoyment; whether § 42-133ff bars a rent card-processing fee that § 47a-7d(b)(1) lets a landlord leave out of advertised rent.
- **Rule 21 flags:** regulations (Conn. Agencies Regs. §§ 19a-111-1 to 19a-111-11, 29-291a-9a, 29-292-21e, 16-3-100, 8-68f, 36a-809-12), the Practice Book (§§ 7-10, 13-12B as amended), federal law (42 U.S.C. § 4852d, 15 U.S.C. § 9058, SCRA, E-SIGN) and agency forms are flagged in the rows that cite them.

## 2. Tag-first results (rules 26-28)
### 2.1 Tagged CT as written (49)
Each tag note starts "CT: Tagged as written (tag-first screen, rules 26-28, CT log §2.1)" and gives the full reason; the CT segment is appended after the other states' notes, which are unchanged. Fee clauses were screened against the § 47a-4d(b) closed list of up-front money (as amended by Conn. Pub. Act No. 26-68, § 59), the § 47a-15a grace period and cap, the § 47a-4 prohibited terms (exculpation, fee shifting above 15%, waiver of statutory rights) and the § 47a-7d advertising rules. 45 come from the screen of the 75 shared clauses and `edu-cares-act-notice`; 4 single-state clauses (`rent-concession-wi`, `rent-installments-or`, `electronic-notice-ma`, `rules-ia`) were tagged on the canvass triage (§2.3).
- `rent-payment`: The clause's "without demand" matches Conn. Gen. Stat. § 47a-3a(a) ('Rent is payable without demand or notice at the time and place agreed upon by the parties'); "without demand, deduction, or setoff, except as permitted by applicable law" preserves the tenant's statutory deductions (e.g., § 47a-13(a)(1)); the weekend rule only helps the tenant. The statutory grace period is in `late-fee-ct` and `default-by-tenant-ct`.
- `residential-use-only`: Consistent with Conn. Gen. Stat. § 47a-17 ('Unless otherwise agreed, a tenant shall occupy his dwelling unit only as a dwelling unit'). "Illegal" purposes do not reach cannabis possession or consumption, which is lawful and which a landlord may not prohibit except smoking or vaping (§ 47a-9a(b), subject to the exceptions in § 47a-9a(d)).
- `permitted-occupants`: No Connecticut statute limits naming occupants or requiring notice of an added occupant; occupancy limits must still respect Conn. Gen. Stat. § 46a-64c (familial status) and local codes.
- `no-disturbance`: Tracks the tenant duty in Conn. Gen. Stat. § 47a-11(g) (conduct 'in a manner that will not disturb his neighbors' peaceful enjoyment of the premises or constitute a nuisance').
- `smoking-policy`: Conn. Gen. Stat. § 47a-9a(b) lets a landlord 'prohibit smoking of cannabis or use of an electronic cannabis device or cannabis vapor product' while barring a ban on possession or consumption; the clause bans only smoking and vaping. No statute bars a tobacco smoking ban.
- `utilities-responsibility`: The tenant pays providers directly. From Oct. 1, 2026, for agreements entered or renewed on or after that date, a term making the tenant pay 'for utilities billed to the tenant if no separate meter is used to measure utilities delivered exclusively to such tenant's dwelling unit' is unenforceable (Conn. Gen. Stat. § 47a-4(a)(11), added by Conn. Pub. Act No. 26-113, § 1); the clause makes the tenant pay providers directly, and the builder should list here only utilities metered to the unit (log §10).
- `utility-service-continuity`: No Connecticut statute conflicts; landlord-supplied essential services remain the landlord's duty (Conn. Gen. Stat. §§ 47a-7(a)(6), 47a-13).
- `utility-payment-evidence`: No Connecticut statute conflicts.
- `acceptable-payment-methods-nj`: Matches Conn. Gen. Stat. § 47a-4c ('no landlord of residential real property shall require electronic funds transfer as the exclusive form of payment of rent or a security deposit', leases executed on or after Oct. 1, 2013): the clause always keeps a non-EFT method. The base `acceptable-payment-methods` would let a landlord list only electronic methods, so it is not tagged. Cash receipts: § 47a-3a(c).
- `tenant-maintenance`: Tracks Conn. Gen. Stat. § 47a-11(b)-(f); the carve-out for conditions the law requires the landlord to repair preserves § 47a-7.
- `no-sublet-assign`: No Connecticut statute requires a landlord to consent to a sublease or assignment or limits a short-term-rental ban (CT battery SUBLET: no residential consent rule; log §17). A subletting tenant becomes a landlord for deposit purposes (Conn. Gen. Stat. § 47a-21(a)(7)(C)).
- `no-alterations`: The carve-out preserves Connecticut statutory installations: energy conservation measures (Conn. Gen. Stat. § 47a-13a), EV charging stations (§ 47a-13b), protected-person lock changes (§ 47a-7b) and disability modifications (§ 46a-64c).
- `joint-liability`: Consistent with Conn. Gen. Stat. § 47a-7b(e) and § 47a-11e(c)(2) (other tenants remain liable under the rental agreement).
- `services-utilities-provided-ks-oh`: The base `services-utilities-provided` disclaims liability for interruptions, which is void in Connecticut (Conn. Gen. Stat. § 47a-4(a)(3)); this variant has no disclaimer. Essential-service duties: §§ 47a-7(a)(6), 47a-13.
- `utilities-paid-by-landlord`: No conflict. Rule 44: listed utilities become terms whose 'material noncompliance' triggers the tenant's remedy under Conn. Gen. Stat. § 47a-12(a), and heat and water are essential services under § 47a-13; a heat or utility surcharge where heat or utilities are included is void (§ 47a-4(a)(10)).
- `appliances-included`: No conflict. Rule 44: the landlord must keep in good working order appliances 'supplied or required to be supplied by him' (Conn. Gen. Stat. § 47a-7(a)(4)), so listed appliances carry that duty.
- `landlords-access-mi`: Connecticut entry requires the tenant's consent, which the tenant 'shall not unreasonably withhold' (Conn. Gen. Stat. § 47a-16(a), (d)), with 'reasonable written or oral notice' and entry 'only at reasonable times, except in case of emergency' (§ 47a-16(c)); this variant (notice, request and obtain permission, not unreasonably refused, emergency entry) fits. The base `landlords-access` grants a "right of reasonable access" without consent and is not tagged.
- `possession-delay`: Connecticut has no statute on failure to deliver possession at the start of the term (CT battery POSS-DELIVERY: 0 hits; log §17); the clause's rent relief and 30-day exit are contract terms.
- `surrender-end-of-term`: Self-limiting ("to the extent permitted by applicable law"); abandonment (occupants who vacated without notice and do not intend to return) follows Conn. Gen. Stat. § 47a-11b (`abandoned-property-ct`), including its storage and notice steps, and property after a judgment follows § 47a-42.
- `holdover-ca`: Conn. Gen. Stat. § 47a-3d (holding over not evidence of a new lease) and § 47a-26b (court-ordered use and occupancy payments during a summary process action, at the last agreed rent or fair rental value) fit the clause's actual-damages measure; the month-to-month option on accepted rent is the landlord's election. See `edu-holdover-ct`.
- `notices`: Defers to statutory methods: a notice to quit must be served by a proper officer (Conn. Gen. Stat. § 47a-23(c)), and Connecticut's electronic transactions act does not reach eviction, default or cure notices under a rental agreement for a primary residence (§ 1-268(c)(2)(B)).
- `governing-law`: No conflict.
- `severability`: No conflict.
- `tenants-property-insurance-ks-oh-ca`: The base clause says the landlord "is not liable" for loss of the tenant's property, an exculpation void under Conn. Gen. Stat. § 47a-4(a)(3); this variant has no disclaimer. No Connecticut statute bars requiring renter's insurance (CT battery RENTERS-INS; log §17).
- `entire-agreement`: Consistent with Conn. Gen. Stat. § 47a-9(b) (a later rule that substantially modifies the agreement needs the tenant's written consent).
- `addendum-precedence`: No Connecticut statute makes an optional addendum control over the lease; the DOH forms are attached under their statutes.
- `electronic-signatures`: Connecticut's electronic transactions act gives electronic signatures and records legal effect (Conn. Gen. Stat. § 1-272); the eviction-notice exclusion in § 1-268(c)(2)(B) concerns notices, not signing the lease.
- `pet-insurance-requirement`: No Connecticut statute conflicts; assistance animals are carved out.
- `parking-ks-oh-ca`: The base `parking` disclaims liability, void under Conn. Gen. Stat. § 47a-4(a)(3); this variant has no disclaimer.
- `assigned-parking-space`: No conflict.
- `storage-space-ks-oh-ca`: The base `storage-space` disclaims liability, void under Conn. Gen. Stat. § 47a-4(a)(3); this variant has no disclaimer.
- `guest-policy`: No Connecticut statute limits guest policies.
- `guest-policy-day-limit`: No Connecticut statute limits guest policies.
- `common-area-use`: No Connecticut statute gives tenants a flag or sign display right (CT battery FLAG-DISPLAY; log §17); the clause's carve-out covers any applicable-law display right.
- `fire-safety-grilling`: No conflict; at least as strict as the open-flame rules in the fire codes adopted under Conn. Gen. Stat. §§ 29-291a and 29-292.
- `landscaping-irrigation`: Connecticut lets the parties agree in writing that the tenant perform specified maintenance tasks: for a single-family residence under Conn. Gen. Stat. § 47a-7(c), and for any other dwelling only if the agreement is in good faith and in writing, the work is not needed to cure code or habitability noncompliance, and it 'does not diminish or affect the obligation of the landlord to other tenants in the premises' (§ 47a-7(d)). The Lease is a writing; in a multi-unit building the clause binds only for areas the tenant alone uses. See `tenant-repair-agreement-ct`.
- `snow-removal`: Connecticut lets the parties agree in writing that the tenant perform specified maintenance tasks (Conn. Gen. Stat. § 47a-7(c), (d)); the clause excludes areas shared with other residents, so it does not diminish the landlord's duty to other tenants (§ 47a-7(d)(4)). The Lease itself is the writing; no separate document is required.
- `inspection-rights`: Entry for inspection is by consent not unreasonably withheld and on reasonable notice (Conn. Gen. Stat. § 47a-16(a), (c)), which the clause incorporates through the Access & Entry terms (`landlords-access-mi`).
- `lead-based-paint`: Federal disclosure (42 U.S.C. § 4852d; 40 C.F.R. § 745.113). Connecticut adds no lease-signing lead notice (see the CT lead education rows).
- `hoa-compliance`: Fee screen (rule 26): the fine pass-through arises mid-tenancy, not before or at the beginning of the tenancy, so Conn. Gen. Stat. § 47a-4d(b) does not reach it. Declarant landlords also give the § 47a-3e notice (`cic-notice-ct`).
- `assistance-animal-accommodation`: Connecticut has no housing-specific assistance-animal statute beyond reasonable accommodation under Conn. Gen. Stat. § 46a-64c (CT battery ASSIST-ANIMAL; log §17); the clause follows federal fair housing rules.
- `extended-absence-notice-ks`: Conn. Gen. Stat. § 47a-16a ('Unless otherwise agreed, the tenant shall be required to notify the landlord of any anticipated extended absence from the premises') lets the lease define the absence; the damages sentence is ordinary contract damages for breach. Entry during the absence: § 47a-16a.
- `tenant-forward-proceedings-ca`: No conflict.
- `rental-application-accuracy`: No conflict; the exception for information the landlord may not request or consider covers Connecticut's limits (e.g., Conn. Gen. Stat. § 47a-9a(a) cannabis convictions and § 46a-80c erased records).
- `edu-cares-act-notice`: Federal (15 U.S.C. § 9058); reads correctly in Connecticut, whose notice to quit may be combined with a federal termination notice (Conn. Gen. Stat. § 47a-23(e)).
- `rent-concession-wi`: Canvass triage (CT log §18): a neutral statement of any concession; no Wisconsin statute in its text; consistent with Conn. Gen. Stat. § 47a-7d, and with § 47a-4(a)(8) so long as the concession is not conditioned on paying before the grace period ends (see `edu-rent-concession-ct`).
- `rent-installments-or`: Canvass triage (CT log §18): Conn. Gen. Stat. § 47a-3a(b) lets the parties agree how rent is paid ('Unless otherwise agreed'); each installment is a rent payment with its own § 47a-15a grace period, and the late-charge sentence defers to `late-fee-ct`.
- `electronic-notice-ma`: Canvass triage (CT log §18): matches Connecticut's electronic transactions act: e-mail only by agreement, with a right to stop (Conn. Gen. Stat. § 1-270), and the clause's carve-out covers the act's exclusion of eviction, default and cure notices under a rental agreement for a primary residence (§ 1-268(c)(2)(B)) and notices with statutory methods (§§ 47a-23(c), 47a-11b, 47a-11d). Optional (rule 54).
- `rules-ia`: Canvass triage (CT log §18): its tests are Connecticut's own in Conn. Gen. Stat. § 47a-9(a) (purpose, reasonable relation, fair application, explicitness, notice) and its last sentence matches § 47a-9(b) ('not valid unless the tenant consents to such rule or regulation in writing'); the extra "not for the purpose of evading Landlord's obligations" only narrows the landlord.
### 2.2 Screened and not tagged (30)
- `late-fee`: Overridden by `late-fee-ct` (Conn. Gen. Stat. § 47a-15a grace period and cap; § 47a-19).
- `due-at-signing`: Overridden by `due-at-signing-ct` (§ 47a-4d(b) closed list).
- `application-of-payments`: Overridden by `application-of-payments-ct` (§ 47a-7d(e) mandatory order).
- `returned-payments`: Overridden by `returned-payments-ct` (§ 52-565a(i) $20 cap and exceptions).
- `security-deposit-use`: Overridden by `security-deposit-use-ct` (§ 47a-21(a)(14) closed list of obligations).
- `security-deposit-return`: Blank-states parent; Connecticut row `security-deposit-return-ct`.
- `existing-condition`: Overridden by `existing-condition-ct` (§ 47a-7c walk-through).
- `landlord-maintenance`: Overridden by `landlord-maintenance-ct` (§ 47a-7(a)(2) intentional-damage rule; § 47a-4(a)(3)).
- `default-by-tenant`: Overridden by `default-by-tenant-ct` (no pre-suit cure for rent; § 47a-15; § 47a-4(a)(7) 15% fee cap).
- `default-by-tenant-co`: Colorado override.
- `default-by-tenant-ks-ne`: Kansas/Nebraska override; Connecticut has its own.
- `keys`: Overridden by `keys-ct` (§ 47a-4d(b); § 47a-7b).
- `parking-vehicle-rules`: Overridden by `parking-vehicle-rules-ct` (no start-of-tenancy tag charge, § 47a-4d(b)).
- `parking-vehicle-rules-id`: Idaho variant; Connecticut has its own.
- `pet-policy`: Overridden by `pet-policy-ct` (§ 47a-4d(b), § 47a-4(a)(3), § 47a-16(d)).
- `services-utilities-provided`: Liability disclaimer void (§ 47a-4(a)(3)); variant `services-utilities-provided-ks-oh` tagged.
- `tenants-property-insurance`: Liability disclaimer void (§ 47a-4(a)(3)); variant tagged.
- `parking`: Liability disclaimer void (§ 47a-4(a)(3)); variant tagged.
- `storage-space`: Liability disclaimer void (§ 47a-4(a)(3)); variant tagged.
- `landlords-access`: Grants entry without consent, contrary to § 47a-16(d); `landlords-access-mi` tagged.
- `acceptable-payment-methods`: Would allow EFT-only payment, contrary to § 47a-4c; `acceptable-payment-methods-nj` tagged.
- `early-termination`: Superseded in Connecticut by `early-termination-ct`.
- `early-termination-ks`: Overridden by `early-termination-ct` (abandonment limb tied to § 47a-11b; § 42-150u acknowledgment line; victim termination named).
- `holdover`: Base 'maximum amount permitted by law' has no Connecticut measure to point to; `holdover-ca` tagged.
- `possession-delay-ca`: Rests on California's statute ('as the law permits'); base `possession-delay` tagged.
- `surrender-end-of-term-mn-nd`: Points to another state's abandoned-property section; base tagged.
- `surrender-end-of-term-ks-ne`: Points to a 'Handling of Property Left Behind Section' Connecticut does not have under that name; base tagged.
- `late-fee-ne`: Nebraska override.
- `ev-charging-shared-area-co`: Colorado statute; Connecticut row `ev-charging-ct`.
- `ev-charging-end-of-tenancy-co`: Colorado statute; Connecticut row `ev-charging-ct`.
- `utility-allowance-cap-co`: Colorado; from Oct. 1, 2026 Connecticut bars tenant payment for utilities not separately metered (§ 47a-4(a)(11)).
### 2.3 Single-state clauses screened (rule 26 triage)
The library has 929 active clauses: 75 shared (two or more states, or blank states) are in §2.1-2.2, and 854 are single-state. A script split the 854:
- **388** name another state, its statute or its agency in `bodyText`. Not tagged.
- **231** sit on a topic Connecticut answers with its own clause (lead rows above). Not tagged; the CT clause governs.
- **235** were read in full by the canvass agents, each under its topic (`work/triage-rest.json`): 4 TAG (listed in §2.1, each re-read by the lead and passed by the round 1 check), 231 NOT TAG, each with a one-line reason in the canvass output (usually: the basis is the other state's statute, or Connecticut's own row covers it).

## 3. New CT rows
### 3.1 CT lease clauses (35, plus the 2 resolved rows in §5)
`lease_clause_basis` (first basis): SERVES_LANDLORD 22, REQUIRED_DISCLOSURE 7, CONSTRAINED_TERM 6. 13 are overrides (`supersedes` set; each note says "Overrides `id`", generated and checked by script, §8); 10 are optional ("[Optional.]", never default; §6.1). VERIFIED 25, NEEDS_REVIEW 10 (each says why in notes).
| Row | rule_type | lease_clause_basis | topic_key | supersedes | status | key citations |
|---|---|---|---|---|---|---|
| `abandoned-property-ct` | RECOMMENDED | SERVES_LANDLORD | abandoned-property |  | NEEDS_REVIEW | § 47a-11b, § 47a-11b(a) |
| `activity-use-limitation-notice-ct` | CONDITIONAL | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 22a-133o(c)(7) | hazardous-contamination-disclosure |  | VERIFIED | § 22a-133o(c)(7) |
| `alarm-duties-ct` | RECOMMENDED | SERVES_LANDLORD | alarm-duties |  | NEEDS_REVIEW | § 47a-7(a)(1), § 29-292(a)(1), § 29-292 |
| `application-of-payments-ct` | CONSTRAINED | CONSTRAINED_TERM | application-of-payments | `application-of-payments` | VERIFIED | § 47a-7d(e), § 47a-7d, § 47a-7d(f) |
| `bed-bug-cooperation-ct` | RECOMMENDED | SERVES_LANDLORD | bed-bug-cooperation |  | VERIFIED | § 47a-7a(b) |
| `bed-bug-disclosure-ct` | CONDITIONAL | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 47a-7a(c) | bed-bug-disclosure |  | VERIFIED | § 47a-7a(c) |
| `casualty-termination-ct` | CONDITIONAL | SERVES_LANDLORD | casualty-termination |  | NEEDS_REVIEW | § 47a-14(a), § 47a-14(b) |
| `cic-notice-ct` | CONDITIONAL | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 47a-3e | association-obligations-disclosure |  | VERIFIED | § 47a-3e |
| `collection-fee-ct` | CONDITIONAL | SERVES_LANDLORD | collection-fee |  | NEEDS_REVIEW | § 36a-805(a)(11) |
| `criminal-activity-ct` | CONDITIONAL | SERVES_LANDLORD | criminal-activity |  | VERIFIED | § 47a-15 |
| `default-by-tenant-ct` | RECOMMENDED | SERVES_LANDLORD | CONSTRAINED_TERM | default-by-tenant | `default-by-tenant` | VERIFIED | § 47a-15a(a), § 47a-23(a)(1)(D), § 47a-15 |
| `due-at-signing-ct` | CONSTRAINED | CONSTRAINED_TERM | due-at-signing | `due-at-signing` | VERIFIED | § 47a-4d(b) |
| `early-termination-ct` | RECOMMENDED | SERVES_LANDLORD | early-termination | `early-termination-ks` | NEEDS_REVIEW | § 42-150u(a) |
| `ev-charging-ct` | CONDITIONAL | SERVES_LANDLORD | ev-charging |  | VERIFIED | § 47a-13b(b), § 47a-13b(e) |
| `existing-condition-ct` | RECOMMENDED | SERVES_LANDLORD | existing-condition | `existing-condition` | VERIFIED | § 47a-4(a)(3), § 47a-7c(a) |
| `keys-ct` | RECOMMENDED | SERVES_LANDLORD | CONSTRAINED_TERM | keys | `keys` | VERIFIED | § 47a-4d(b), § 47a-21(a)(11) |
| `landlord-identification-ct` | REQUIRED | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 47a-6(a) | owner-identity-disclosure |  | VERIFIED | § 47a-6(a), § 47a-6(b) |
| `landlord-maintenance-ct` | RECOMMENDED | SERVES_LANDLORD | landlord-maintenance | `landlord-maintenance` | VERIFIED | § 47a-7(a)(2), § 47a-4(a)(3), § 47a-7(a)(1) |
| `late-fee-ct` | CONSTRAINED | CONSTRAINED_TERM | late-fee | `late-fee` | VERIFIED | § 47a-19, § 47a-15a(a) |
| `notice-service-fee-ct` | CONDITIONAL | SERVES_LANDLORD | notice-service-fee |  | NEEDS_REVIEW | § 47a-23(c), § 47a-26d |
| `notice-to-quit-waiver-ct` | CONDITIONAL | SERVES_LANDLORD | notice-to-quit-waiver |  | VERIFIED | § 47a-25 |
| `parking-vehicle-rules-ct` | RECOMMENDED | SERVES_LANDLORD | parking-vehicle-rules | `parking-vehicle-rules` | VERIFIED | § 47a-4d(b), § 47a-7d(b)(5), § 14-145(b)(1) |
| `periodic-tenancy-notice-ct` | CONSTRAINED | CONSTRAINED_TERM | termination-notice |  | NEEDS_REVIEW | § 47a-23(a), § 47a-23(c), § 47a-23c(b)(1) |
| `pet-policy-ct` | RECOMMENDED | SERVES_LANDLORD | pet-policy | `pet-policy` | VERIFIED | § 47a-4d(b), § 47a-1(8), § 47a-7d(b)(2) |
| `private-well-notice-ct` | CONDITIONAL | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 19a-37(d) | private-well-testing |  | VERIFIED | § 19a-37(d) |
| `rent-increase-midterm-ct` | CONDITIONAL | SERVES_LANDLORD | rent-escalation |  | NEEDS_REVIEW | § 47a-3, § 47a-4e |
| `returned-payments-ct` | CONSTRAINED | CONSTRAINED_TERM | returned-payments | `returned-payments` | VERIFIED | § 52-565a(i) |
| `security-deposit-holding-ct` | REQUIRED | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 47a-21(h)(1), (h)(4)(A) | security-deposit-holding |  | VERIFIED | § 47a-21(h)(1), § 47a-21(a)(5), § 47a-21(h)(4)(A) |
| `security-deposit-return-ct` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | VERIFIED | § 47a-21(d)(2) |
| `security-deposit-use-ct` | CONSTRAINED | CONSTRAINED_TERM | SERVES_LANDLORD | security-deposit-use | `security-deposit-use` | VERIFIED | § 47a-21(c), § 47a-21(a)(14) |
| `sprinkler-notice-ct` | CONDITIONAL | REQUIRED_DISCLOSURE: Conn. Gen. Stat. § 47a-3f | sprinkler-disclosure |  | VERIFIED | § 47a-3f(b), § 47a-3f(c) |
| `tenant-caused-damage-ct` | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage |  | NEEDS_REVIEW | § 47a-11(f), §§ 47a-7(a)(2) |
| `tenant-death-ct` | CONDITIONAL | SERVES_LANDLORD | tenant-death |  | VERIFIED | § 47a-11d(a) |
| `tenant-repair-agreement-ct` | CONDITIONAL | SERVES_LANDLORD | tenant-repair-agreement |  | VERIFIED | § 47a-7(c), § 47a-7(d) |
| `unpaid-amounts-interest-ct` | CONDITIONAL | SERVES_LANDLORD | unpaid-damages-interest |  | NEEDS_REVIEW | § 37-1(a), § 37-3a(a), § 47a-15a(b) |
### 3.2 CT education rows (254)
VERIFIED 193, NEEDS_REVIEW 61 at drafting; after the check, VERIFIED 194, NEEDS_REVIEW 60 (rows that the checkers read section-open moved up; one moved down; §13). rule_type: RECOMMENDED 108, CONSTRAINED 54, REQUIRED 36, PROHIBITED 30, CONDITIONAL 26. Each says in its notes what rests on inference or an unsettled point. Rows: `edu-abandoned-property-ct`, `edu-accessory-dwelling-unit-ct`, `edu-alarm-requirements-ct`, `edu-algorithmic-rent-setting-ct`, `edu-alt-housing-ct`, `edu-appliances-excluded-ct`, `edu-applicable-codes-ct`, `edu-application-screening-fees-ct`, `edu-assistance-animals-ct`, `edu-association-and-tenants-ct`, `edu-attorney-fees-ct`, `edu-automatic-renewal-ct`, `edu-bed-bug-duties-ct`, `edu-cable-access-ct`, `edu-cannabis-ct`, `edu-casualty-mitigation-nonwaivable-ct`, `edu-cic-notice-timing-ct`, `edu-code-receivership-ct`, `edu-common-area-lighting-ct`, `edu-condo-conversion-ct`, `edu-confirmed-absences-misc-ct`, `edu-confirmed-absences-outside-title-ct`, `edu-construction-liens-ct`, `edu-conversion-tenant-rights-ct`, `edu-criminal-activity-ct`, `edu-cutpa-ct`, `edu-deposit-installments-ct`, `edu-deposit-nonwaiver-ct`, `edu-deposit-on-sale-ct`, `edu-disability-accommodation-ct`, `edu-disaster-casualty-ct`, `edu-dv-housing-protection-ct`, `edu-dv-information-ct`, `edu-dv-law-citations-ct`, `edu-dv-lease-termination-ct`, `edu-dv-lockchange-ct`, `edu-electric-submetering-ct`, `edu-electronic-records-ct`, `edu-end-of-term-possession-ct`, `edu-ev-charging-ct`, `edu-eviction-cost-shifting-ct`, `edu-eviction-process-ct`, `edu-eviction-record-sealing-ct`, `edu-eviction-stay-ct`, `edu-fair-housing-ct`, `edu-fair-rent-commissions-ct`, `edu-families-with-children-ct`, `edu-family-child-care-ct`, `edu-fee-in-lieu-of-deposit-ct`, `edu-fee-transparency-ct`, `edu-fees-as-rent-ct`, `edu-for-cause-eviction-ct`, `edu-foreclosure-tenants-ct`, `edu-government-fines-passthrough-ct`, `edu-guest-rights-ct`, `edu-habitability-not-waivable-ct`, `edu-habitability-remedies-ct`, `edu-heat-ct`, `edu-holding-deposit-ct`, `edu-holdover-ct`, `edu-holdover-rate-ct`, `edu-interest-on-unpaid-amounts-ct`, `edu-jury-waiver-ct`, `edu-landlord-entry-ct`, `edu-landlord-registration-ct`, `edu-landlord-remedies-on-termination-ct`, `edu-landlord-rules-ct`, `edu-landlord-utility-account-ct`, `edu-late-charge-limits-ct`, `edu-lead-abatement-ct`, `edu-lease-limits-outside-47a-4-ct`, `edu-lease-term-limits-ct`, `edu-liquidated-damages-ct`, `edu-local-health-code-ct`, `edu-minor-defendants-ct`, `edu-mitigation-ct`, `edu-municipal-utility-lien-ct`, `edu-no-actual-notice-rule-ct`, `edu-no-adverse-proceeding-notice-ct`, `edu-no-alarm-tampering-fee-ct`, `edu-no-balcony-inspection-ct`, `edu-no-benefit-delay-defense-ct`, `edu-no-candidate-access-rule-ct`, `edu-no-certificate-of-occupancy-disclosure-ct`, `edu-no-code-variance-notice-ct`, `edu-no-code-violation-disclosure-ct`, `edu-no-cold-weather-vacate-notice-ct`, `edu-no-condemned-rent-bar-ct`, `edu-no-confession-of-judgment-ct`, `edu-no-crime-free-lease-statute-ct`, `edu-no-deposit-refund-conditions-ct`, `edu-no-deposit-standards-rule-ct`, `edu-no-disaster-guest-rule-ct`, `edu-no-double-letting-ct`, `edu-no-drug-free-addendum-ct`, `edu-no-drywall-disclosure-ct`, `edu-no-dv-deposit-timing-ct`, `edu-no-eminent-domain-rent-rule-ct`, `edu-no-employee-screening-mandate-ct`, `edu-no-exculpatory-clauses-ct`, `edu-no-exemption-waiver-ct`, `edu-no-expedited-deposit-ct`, `edu-no-fee-listing-rule-ct`, `edu-no-fee-unprovided-service-ct`, `edu-no-firearms-lease-statute-ct`, `edu-no-flood-disclosure-ct`, `edu-no-foreclosure-disclosure-ct`, `edu-no-foreign-ownership-restriction-ct`, `edu-no-furnished-rental-rule-ct`, `edu-no-government-fee-passthrough-ct`, `edu-no-guarantor-renewal-ct`, `edu-no-habitability-presumption-ct`, `edu-no-home-business-rule-ct`, `edu-no-immigration-inquiry-rule-ct`, `edu-no-infirmity-termination-ct`, `edu-no-initials-requirement-ct`, `edu-no-inspection-notice-penalty-ct`, `edu-no-knowing-use-penalty-ct`, `edu-no-landlord-liability-insurance-ct`, `edu-no-landlord-lien-ct`, `edu-no-landlord-self-cure-ct`, `edu-no-landlord-utility-shutoff-ct`, `edu-no-lease-completeness-rule-ct`, `edu-no-lease-copy-duty-ct`, `edu-no-lease-font-rules-ct`, `edu-no-lease-type-parity-ct`, `edu-no-lock-rekey-rule-ct`, `edu-no-lockout-ct`, `edu-no-meter-conservation-charge-ct`, `edu-no-meth-disclosure-ct`, `edu-no-military-zone-disclosure-ct`, `edu-no-mold-disclosure-ct`, `edu-no-nonrefundable-deposits-ct`, `edu-no-notice-fee-rule-ct`, `edu-no-notice-to-vacate-terms-rule-ct`, `edu-no-ordnance-demolition-meter-disclosure-ct`, `edu-no-pest-control-notice-ct`, `edu-no-pet-eviction-fact-sheet-ct`, `edu-no-portable-cooling-right-ct`, `edu-no-possession-bond-ct`, `edu-no-possession-delay-statute-ct`, `edu-no-pre-suit-resolution-statute-ct`, `edu-no-preset-deposit-charges-ct`, `edu-no-promises-to-repair-rule-ct`, `edu-no-prop65-warning-ct`, `edu-no-property-tax-rent-statement-ct`, `edu-no-radiator-cover-rule-ct`, `edu-no-radon-disclosure-ct`, `edu-no-recycling-notice-ct`, `edu-no-rent-reporting-rule-ct`, `edu-no-repair-cost-termination-ct`, `edu-no-right-to-call-police-statute-ct`, `edu-no-self-help-eviction-ct`, `edu-no-senior-housing-work-card-ct`, `edu-no-service-animal-misrepresentation-penalty-ct`, `edu-no-sex-offender-disclosure-ct`, `edu-no-sex-offender-occupancy-rule-ct`, `edu-no-shutdown-protection-ct`, `edu-no-single-family-zone-lease-limit-ct`, `edu-no-smart-lock-law-ct`, `edu-no-smoke-drift-waiver-ct`, `edu-no-stove-refrigerator-duty-ct`, `edu-no-tax-escalation-rule-ct`, `edu-no-tenancy-at-will-ct`, `edu-no-tenant-camera-rule-ct`, `edu-no-tenant-flag-display-rule-ct`, `edu-no-tenant-insurance-claim-rule-ct`, `edu-no-tenant-law-sunset-ct`, `edu-no-translation-duty-ct`, `edu-no-unbundled-parking-rule-ct`, `edu-no-utility-apportionment-ct`, `edu-no-utility-deposit-ct`, `edu-no-utility-notice-authorization-ct`, `edu-no-utility-overage-ct`, `edu-no-utility-transfer-cutoff-ct`, `edu-no-water-heater-rule-ct`, `edu-no-waterbed-rule-ct`, `edu-no-window-guard-rule-ct`, `edu-nonpayment-notice-to-quit-ct`, `edu-nonresident-landlord-process-agent-ct`, `edu-occupancy-limits-ct`, `edu-optional-lease-terms-ct`, `edu-owner-move-in-reservation-ct`, `edu-parking-rules-notice-ct`, `edu-paying-after-nonpayment-judgment-ct`, `edu-payment-methods-ct`, `edu-periodic-tenancy-termination-ct`, `edu-pet-fees-ct`, `edu-plain-language-lease-ct`, `edu-pools-ct`, `edu-portable-solar-ct`, `edu-portfolio-thresholds-ct`, `edu-post-eviction-property-ct`, `edu-preoccupancy-walkthrough-ct`, `edu-prepaid-rent-deposit-ct`, `edu-private-towing-ct`, `edu-prohibited-lease-terms-ct`, `edu-protected-class-questions-ct`, `edu-protected-tenant-notice-ct`, `edu-public-nuisance-abatement-ct`, `edu-quiet-possession-ct`, `edu-religious-door-display-ct`, `edu-rent-concession-ct`, `edu-rent-escalation-ct`, `edu-rent-increase-notice-ct`, `edu-rent-into-court-ct`, `edu-rent-receipts-ledger-ct`, `edu-rent-tax-ct`, `edu-rental-inspections-ct`, `edu-rental-terms-summary-form-ct`, `edu-renters-insurance-unregulated-ct`, `edu-repair-notice-ct`, `edu-required-disclosures-ct`, `edu-retaliation-ct`, `edu-scope-ct`, `edu-security-deposit-cap-ct`, `edu-security-deposit-escrow-ct`, `edu-security-deposit-interest-ct`, `edu-security-deposit-return-penalty-ct`, `edu-selling-rented-property-ct`, `edu-sensitive-data-privacy-ct`, `edu-service-animal-denial-penalty-ct`, `edu-servicemember-rights-ct`, `edu-smoking-cannabis-ct`, `edu-snow-removal-ct`, `edu-source-of-income-ct`, `edu-sprinkler-notice-ct`, `edu-statutory-caps-ct`, `edu-statutory-early-termination-ct`, `edu-statutory-forms-ct`, `edu-stigmatized-property-ct`, `edu-submetering-ct`, `edu-subsidy-late-charge-ct`, `edu-tenant-alterations-ct`, `edu-tenant-death-ct`, `edu-tenant-duties-ct`, `edu-tenant-maintenance-agreements-ct`, `edu-tenant-noncompliance-notice-ct`, `edu-tenant-paid-utilities-ct`, `edu-tenant-portal-ct`, `edu-tenant-records-ct`, `edu-tenant-rights-statement-ct`, `edu-tenant-screening-ct`, `edu-tenement-house-standards-ct`, `edu-term-change-notice-ct`, `edu-unauthorized-occupant-removal-ct`, `edu-unclaimed-deposit-refund-ct`, `edu-unconscionability-ct`, `edu-utility-shutoff-rules-ct`, `edu-veterans-housing-ct`, `edu-voucher-inspections-ct`, `edu-waiver-by-acceptance-ct`, `edu-well-septic-ct`, `edu-written-notices-ct`.

## 4. Layout and placement (rule 40)
The formatting batteries ran over the whole corpus (statutes, Constitution, loaded RCSA, Practice Book and its 2027 amendments, 2026 acts): first with a tenancy limb (FMT-boldface, -typesize, -underline, -conspicuous, -separate, -substantially, -capitals, -firstpage, -signature-place, -omission-sanction), then without it and with corrected patterns (FMT-*-2, -signature-3), because the filtered run missed § 42-152 (the plain-language law reaches leases only through the definition in § 42-151(b)(2)(C), and its "eight points in size" escaped a pattern written for "point"). Known positives passed on the second run (§§ 42-152, 47a-3f, 42-150u, 47-17a, 16a-21, 47a-23, 47a-7d, 42-285). Hits: bold-face 126, type size 152, underline 20, separate document 58, capitals 66, conspicuous 504, prescribed form 120, first page 75, signature placement 12; 53 units mention leases, tenants or consumer contracts, and each was read in context.
| Provision | Requirement | Reaches residential leases? | Library effect |
|---|---|---|---|
| § 47a-7d(c)-(d), (f) | DOH Standardized Rental Terms Summary Form as the first page of every written lease provided on or after April 1, 2026; civil penalty of one month's rent, fees discretionary | Yes, every written lease | Education row `edu-rental-terms-summary-form-ct` plus builder flag (Taylor, §6.2). The only first-page rule found, so no placement conflict. |
| § 47a-3f(b)-(c) | Sprinkler notice in the rental agreement, at least 12-point boldface uniform font, where the building is required to have sprinklers; date of last maintenance and inspection if operative | Yes, conditional | `sprinkler-notice-ct` (REQUIRED_DISCLOSURE, CONDITIONAL); builder must render 12-point bold. |
| § 42-150u(a) | Liquidated-damages acknowledgment in 12-point boldface immediately after the provision, signed or initialed | Unsettled (consumer "lease of goods or services") | Precautionary line in `early-termination-ct`; builder renders it bold, 12-point, right after the fee sentence. |
| § 42-152(b) with § 42-151(b)(2)(C) | Plain language; objective test includes no type under 8 points, printed section captions in bold of at least 10 points (underlined if typewritten), 3/16-inch paragraph spacing, half-inch margins, 65-character average line | Yes ("leases any residential dwelling") | `edu-plain-language-lease-ct`; builder flag for the whole lease. |
| § 47a-23(b), (e) | Notice to quit "substantially in the following form"; CARES/federal notice may be combined | Notice, not lease | Education rows on notices to quit. |
| § 47a-23c(e); DOH Form AM-011 | Protected-tenant notice attached at signing or renewal in buildings of five or more units | Yes, conditional | `edu-protected-tenant-notice-ct` plus builder flag (Taylor, §6.2). |
| § 52-565a(f)-(g) | Dishonored-check demand in at least 10-point type, English and Spanish | Demand letter, not lease | Cited in `returned-payments-ct`. |
| § 16-262e(a) | Utility's boldface notice to occupants | Utility's duty | `edu-landlord-utility-account-ct`. |
| § 47a-42a | Execution notice in large boldface | Court form | Education rows on post-judgment property. |
| §§ 14-145, 14-145e, 7-148 | Conspicuous towing signage and windshield notices | Parking lots, not lease | `edu-private-towing-ct`, `parking-vehicle-rules-ct`. |
| § 20-327b | Residential condition report formatting | Lease with purchase option only | Out of library scope; noted in `edu-required-disclosures-ct`. |
| § 19a-700 | 14-point residency agreements | Managed residential communities only | Not a residential lease; not drafted. |
| §§ 21-67a, 21-80 | Mobile home park rules and notices | Chapter 412 tenancies | Excluded chapter. |
| Conn. Agencies Regs. § 8-68f-14 | Posting of state public housing rules | State-assisted public housing | Flagged §10. |
| §§ 42-390 to 42-434, art. 2A | Consumer leases of goods | Goods, not real property | Not applicable. |
**Omission sanctions that forfeit money:** § 47a-7d(f) (one month's rent), § 47a-21(d)(2) (twice the deposit), § 47a-5 (civil penalty per day without an occupancy permit), § 42-150u (liquidated damages unenforceable), § 47a-4(b) (prohibited terms unenforceable; fee award to a tenant who wins). Each is stated in the matching row.

## 5. Dormant rows resolved (rule 25)
- **`security-deposit-cap-ct`** (dormant, UNVERIFIED, LEASE_CLAUSE, topic key `security-deposit-cap-ct`): **verified and left switched off.** The cap it states is right (§ 47a-21(b)(1)-(2): two months' rent, one month at 62 or older, refund of the excess on request when a tenant turns 62), but a statutory cap on landlord conduct is education, not a clause; `edu-security-deposit-cap-ct` carries it and `security-deposit-use-ct` takes the landlord's figure. Text lightly corrected, topic key moved to the shared `security-deposit-cap` (rule 58), VERIFIED.
- **`security-deposit-interest-ct`** (dormant, UNVERIFIED, LEASE_CLAUSE): **rewritten, verified and switched on.** The old "administrative fee of up to 1%" has no basis: § 47a-21(h)(2)(D) lets an escrow agent retain interest above what the tenant is owed, which is not a fee charged to the tenant, and § 47a-4(a)(4) bars waiving deposit interest. The row now promises interest at not less than the Banking Commissioner's deposit index (0.49% for 2026, read on the saved Department of Banking page), paid or credited on each anniversary and within 21 days at the end, with the § 47a-21(i) late-rent exception and no rent increase to recoup it; an omit-prompt covers student housing owned by an educational institution.

## 6. Decisions
### 6.1 Optional clauses found (rule 54)
**Offered (never default):** `notice-to-quit-waiver-ct` (§ 47a-25, lapse of time only; Taylor, §6.2), `rent-increase-midterm-ct` (Option A scheduled increases, Option B reserved increase with 45 days' notice and a free exit; NEEDS_REVIEW on § 47a-4e(1)), `collection-fee-ct` (§ 36a-805(a)(11) agency fee, capped by the landlord's figure up to 15%; NEEDS_REVIEW), `notice-service-fee-ct` (marshal's actual fee after a default; precedent `notice-service-fee-ut`, `-id`; NEEDS_REVIEW), `unpaid-amounts-interest-ct` (§ 37-1 rate on non-rent amounts; NEEDS_REVIEW), `alarm-duties-ct` (single-family tenant testing duty, § 47a-7(c)), `tenant-repair-agreement-ct` (§ 47a-7(c)-(d) good-faith written agreement), `periodic-tenancy-notice-ct` (lease-supplied periodic notice; reuses `{{m2m_notice_days}}`), `casualty-termination-ct` (landlord termination after a casualty, protected tenants and § 47a-14 carved out), `tenant-caused-damage-ct`, `criminal-activity-ct` (serious nuisance as defined in § 47a-15, no-cure route), `tenant-death-ct` (the lease provision § 47a-11d(a) requires before the sole-occupant procedure can be used), `ev-charging-ct` (§ 47a-13b agreement terms), and the tag of `electronic-notice-ma` (§ 1-270 opt-in, with the § 1-268 exclusions).
**Considered and not offered (with the education row that tells landlords):** card processing-fee pass-through (§ 42-133ff question; `edu-payment-methods-ct`); municipal registration or inspection fee reimbursement (`edu-no-government-fee-passthrough-ct`); concession recapture on default (`edu-rent-concession-ct`); cost or tax escalation (`edu-no-tax-escalation-rule-ct`); fee in lieu of deposit (`edu-fee-in-lieu-of-deposit-ct`); lien-free/indemnity for tenant-ordered work (`edu-construction-liens-ct`); flat alarm-tampering fee (`edu-no-alarm-tampering-fee-ct`); designated repairer (`edu-no-landlord-self-cure-ct`); landlord self-cure (`edu-no-landlord-self-cure-ct`); recurring-service entry notice (`edu-landlord-entry-ct`); landlord's own abandoned-property procedure (`edu-abandoned-property-ct`); environmental-event termination (`edu-disaster-casualty-ct`); holdover premium (`edu-holdover-rate-ct`); homestead or exemption waiver (`edu-no-exemption-waiver-ct`); landlord's lien (`edu-no-landlord-lien-ct`); stand-alone liquidated damages (`edu-liquidated-damages-ct`); owner move-in reservation (`edu-owner-move-in-reservation-ct`); automatic renewal (`edu-automatic-renewal-ct`); pre-suit dispute resolution (`edu-no-pre-suit-resolution-statute-ct`); conversion relocation-payment waiver (`edu-optional-lease-terms-ct`); home-cultivation ban (`edu-cannabis-ct`); jury waiver (`edu-jury-waiver-ct`).
### 6.2 Questions asked of Taylor (rule 76)
1. 2026-10-09: approval to use the built-in browser on his computer to download the Connecticut statutes, 2026 acts, Constitution, regulations, Practice Book and DOH forms to the Downloads folder, and to read that folder. **Answer:** "Yes (Recommended)".
2. 2026-10-09: how to handle the DOH Standardized Rental Terms Summary Form (§ 47a-7d(c)-(d), first page of every written lease) and DOH Form AM-011 (§ 47a-23c(e), protected-tenant notice): education rows plus a builder flag, or clauses. **Answer:** "Education rows + builder flag (Recommended)".
3. 2026-10-09: whether to offer the § 47a-25 waiver of the notice to quit for a lease ending by lapse of time. **Answer:** "I think the first option [offer it, narrowly]. I declined for Missouri? Please flag for Claude CLI to go over please." Offered as `notice-to-quit-waiver-ct`; the Missouri question is in §10 for Claude Code.
### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
- **Late-fee cap stays in the clause.** Rule 55 normally keeps a statutory ceiling out of a clause, but Connecticut's cap depends on how long rent stays unpaid ($5 a day up to $50, or 5% of the payment, whichever is less), so a flat `{{late_fee_amount}}` can exceed it on the first day after the grace period; `late-fee-ct` binds the landlord to the lesser amount, and the builder should also validate the figure (§10).
- **Up-front money:** `due-at-signing-ct` lists only the § 47a-4d(b) items; last month's rent and pet deposits count toward the security deposit (§ 47a-21(a)(11)); the variables sit outside any hand-filled bracket (round 1 fix).
- **Early termination:** `early-termination-ct` overrides `early-termination-ks` (abandonment limb tied to § 47a-11b, victim and servicemember exits named, precautionary § 42-150u line, landlord's other termination rights in the lease preserved); the § 47a-4d(b) "move-out fee" bar is read as not reaching the price of a tenant's option to end a fixed term early (NEEDS_REVIEW).
- **Mid-term increases:** § 47a-4e(1) says the notice section does not itself authorize a mid-term increase; it does not ban a lease term providing for one. Education rows were corrected to say so (round 1 ERROR), and Option B stays NEEDS_REVIEW.
- **Utilities from October 1, 2026:** § 47a-4(a)(11) (Conn. Pub. Act No. 26-113, § 1) makes unenforceable a term making the tenant pay for utilities not separately metered to the unit, for agreements entered into or renewed on or after that date. `utilities-responsibility` stays tagged (tenant pays providers directly) with a builder flag; no RUBS or allocation clause is tagged.
- **Landscaping and snow removal** stay tagged: the lease is the writing § 47a-7(c)-(d) requires; in a multi-unit building they bind only for areas the tenant alone uses (§ 47a-7(d)(4), (a)(3)); `tenant-repair-agreement-ct` gives the fuller agreement.
- **Rent processing fee (§ 42-133ff):** left unsettled in `edu-payment-methods-ct`; no clause passes a fee through.
- **Screening fee cap:** the statute's $50 plus the Commissioner of Housing's annual CPI adjustment is stated without a figure; the current figure was not on any saved DOH page (§7).
- **Protected tenants (§ 47a-23c(a)):** rows now use one statutory description: 62 or older, or a disability expected to last at least 12 months or to result in death, or permanently living with a listed relative who is; buildings or complexes of five or more units or mobile home parks; in a common interest community, conversion tenants or where the landlord owns five or more units there.
- **Erased records:** `rental-application-accuracy` stays tagged: its exception for information the landlord may not request or consider covers § 46a-80c erased records and § 47a-9a(a) cannabis convictions.
- **§ 47a-26j(d):** the row reads "any use related to screening" to advise not using removed records in a landlord's own decision (NEEDS_REVIEW; disclosure bar stated as the law).
- **Nonresident landlords:** § 47a-21(f) appointment of the Secretary of the State applies to landlords holding a security deposit; stated in `edu-nonresident-landlord-process-agent-ct`, not in `landlord-identification-ct`.
- **Guarantor deposits:** whether money demanded from a guarantor counts toward the § 47a-21(b) cap is unresolved (no statute; case law not searched); `edu-no-guarantor-renewal-ct` advises treating it as counting.
- **Victims in `criminal-activity-ct`:** the optional serious-nuisance clause does not apply to conduct of which the tenant or a household member is the victim, and treats no call for police or emergency help as a violation; a drafting judgment consistent with § 46a-64c's protection of domestic-violence victims and § 47a-11e.
- **Condemnation:** no condemnation clause is offered (no state has one; Proposed topic questions); § 48-22's court cancellation is stated in `edu-no-eminent-domain-rent-rule-ct`.

## 7. Open items (none blocking)
- **Screening-fee figure:** the CPI-adjusted cap under § 47a-4d(c) is published by the Commissioner of Housing; not found on the saved DOH pages, and one web search returned only secondary sources (not relied on). Boundary: DOH mandatory-forms page and deposit page saved 2026-10-09.
- **Regulations not loaded:** all RCSA subtitles other than the 13 in §1.1, including the Public Health Code (19-13) and the full NFPA 1/101 base codes (only Connecticut's amendments are in the corpus), so the grilling, sprinkler-retrofit and balcony rows rest on the statutes and amendments read. Every absence row says so.
- **State public housing and elderly housing:** Conn. Agencies Regs. § 8-68f (state-assisted public housing leases) and § 8-116b (pets in state-assisted elderly housing) reach housing authorities and eligible developers, not private landlords; no rows drafted (§10).
- **Self-storage lien (§§ 42-159 to 42-164):** may reach a landlord who leases storage lockers separately; not drafted.
- **Data privacy (§§ 42-515 to 42-525):** whether small landlords who collect sensitive data are controllers is stated as an inference (NEEDS_REVIEW).
- **Case-law questions:** listed in §1.4.
- **Municipal ordinances:** fair rent commissions (§ 7-148b), local housing codes and rental licensing or registration (Hartford, New Haven, Stamford, Bridgeport and others) flagged, not resolved (rule 3).
- **Large unfiltered battery reruns** screened by heading only (§1.3).

## 8. Integrity checks on the delta
Run by `tools/assemble.py` and the check scripts on the delivered file:
- **Rows:** 340 (49 tagged shared rows, 2 resolved CT rows, 35 new clauses, 254 new education rows); header identical to the master; all 17 columns; CRLF record endings; one clause (`early-termination-ct`) carries an in-field line break for its acknowledgment line, as other library rows do. sha256 a8c00d7efa1e6fb25325af29123ce169ce9fbab6cb35a369605665fd2cfcdc4f.
- **Ids:** no duplicates; 51 existing ids changed (49 tags, 2 CT rows), every other id new.
- **Groups and types:** every group is on the kickoff list; no clause uses an education-only group (`alarm-duties-ct` moved from Building & Safety to Landlord Responsibilities); every rule_type valid; every active clause has a basis; no education row has one; every row has a topic key and a CT note.
- **Supersedes:** 13, each generated from and matching its "Overrides `x`" note; no dangling target; no CT-tagged parent left beside its override; no two active CT clauses on one topic outside an override.
- **Status:** no active row with a blank `verification_status`; every NEEDS_REVIEW row says why in notes (4 rows got an explicit "NEEDS_REVIEW:" label at the end).
- **Pointers:** every backticked row id in a CT note or clause, and every row id this log names, resolves to an active row (scripted over the log text too); log-section pointers in notes ("log §2.1", "§5", "§6.1", "§6.2", "§10", "§17", "§18", "§§ 17 and 18", "§19") match this log's sections.
- **Variables:** no new `{{variable}}`; `{{m2m_notice_days}}` already in the library; no bracket next to a variable.
- **Citations (rule 22):** 1,809 section citations in CT notes, clause text and `lease_clause_basis` resolve to a section in the corpus; the one non-statute (Practice Book § 13-12B) is in the June 2026 amendments. Citation format checked by script (no "C.G.S.", bare "Gen. Stat.", "P.A." or doubled "§"); "Regs. Conn. State Agencies" and "RCSA §" converted to "Conn. Agencies Regs. §".
- **Quotes (rule 59):** every single-quoted passage in CT notes was checked word for word against the whole corpus and agency texts (1,104 passages; 7 fail only on spacing, page headers or bracketed alterations and were confirmed by hand), and each was paired with the nearest citations and checked against the cited source itself (1,118 pairs; 16 unmatched pairs are the same artifacts plus quotes whose citation sits beyond the matcher's reach, all confirmed by hand). Library clause text and search terms were moved to double quotes (155 passages, CT segments only; other states' notes untouched).
- **Batteries:** every battery a row names is in the log; every cited battery has a passing positive and zero nonsense hits, or the row says why; stated hit counts match the log (one corrected, `edu-guest-rights-ct`, 12 → 19).
- **Basis (rule 79):** 335 of 340 rows record "Rule 15: written section-open."; the 5 others record "statute-wide search with terms and hit counts".
- **Shared notes:** for every tagged row, the master's notes are a verbatim prefix of the delta's notes, followed by the " | CT:" segment (scripted; an earlier assembly had converted quote marks in two other states' segments and was corrected).

## 9. Propagation notes (rule 62)
- **No shared row's text was edited.** On the 49 tagged rows only `states`, `notes` (an appended `CT:` segment) and `last_checked` changed (scripted, §8).
- **Vouches given:** none requested this pass.

## 10. Findings for other states or the product (flagged, not fixed)
- **New `{{variable}}`s:** none.
- **Builder flags:**
  - Rental Terms Summary Form as the first page of every written lease and renewal on or after April 1, 2026 (§ 47a-7d(d)); DOH Form AM-011 attached at signing or renewal for buildings or complexes of five or more units and mobile home parks (§ 47a-23c(e)). Taylor chose education rows plus these flags.
  - Unit-count input (five or more units in the building or complex, or a mobile home park; common interest community with conversion or five-unit ownership) to drive the protected-tenant rows and AM-011.
  - Tenant age input (62 or older) for the deposit cap (one month's rent, § 47a-21(b)(2)).
  - `{{late_fee_amount}}` validation: one charge, no more than the lesser of $5 a day up to $50 or 5% of the late payment (or of the tenant's share), after a nine-day grace period (four days weekly) plus five days when the landlord's online system failed.
  - Sprinkler notice and the § 42-150u line in 12-point bold; whole-lease plain-language format (§ 42-152: type of at least 8 points, bold section captions of at least 10 points, spacing and margins).
  - Utilities: for leases entered or renewed on or after October 1, 2026, list as tenant-paid only utilities metered to the unit (§ 47a-4(a)(11)).
  - Single-family flag for `alarm-duties-ct`, `landscaping-irrigation`, `snow-removal` and `tenant-repair-agreement-ct` wording.
  - Screening-fee cap: the builder should pull the Commissioner of Housing's current CPI-adjusted figure each year.
  - Deposit interest: pull the Banking Commissioner's deposit index each year (0.49% for 2026).
- **For Claude Code (Taylor, 2026-10-09):** Taylor asked that the Missouri decision declining a notice-to-quit waiver be reviewed now that Connecticut offers one under § 47a-25: "I declined for Missouri? Please flag for Claude CLI to go over please."
- **DOH Model Lease (lead only):** its sprinkler checkbox says "for all units in Connecticut in a building of more than four stories", but § 47a-3f turns on whether the building is required to have sprinklers under § 29-315, the fire codes or other law; its renewal term extends the lease automatically unless notice is given (see `edu-automatic-renewal-ct`).
- **State public housing (Conn. Agencies Regs. § 8-68f) and state-assisted elderly housing pets (§ 8-116b):** if the product serves housing authorities, these need their own rows.
- **Stale cross-references (rule 77):** none found in the sections relied on; Conn. Pub. Act No. 26-11, § 15 updates § 47a-23c's cross-reference and Conn. Pub. Act No. 26-77 moves the fair housing misdemeanor (both noted in rows).
- **Tooling:** `tools/actsec.py` in this pass missed act sections headed "Section 1." (fixed; PA 26-113 § 1 had been read from the act text and its quotes verified against it).

## 11. Deliverables
- `lease-clauses-CT-delta.csv` (340 rows; sha256 a8c00d7efa1e6fb25325af29123ce169ce9fbab6cb35a369605665fd2cfcdc4f).
- `lease-clause-decision-log-CT.md` (this file).
- Working files kept in the Desktop workspace for the sync: `work/batteries.jsonl` (all battery runs), `work/check/` (check briefs, rows and findings), `work/canvass/` (canvass output), source JSON files (also in Taylor's Downloads folder).

## 12. Kickoff leads — what each turned out to be
1. **Recent changes.** Conn. Pub. Act No. 23-207 (fees, late charges, walk-through, eviction records, right to counsel), No. 24-143 (§ 47a-4e 45-day notice), 2025: No. 25-44 (§ 47a-7d summary form, advertised rent, § 42-158ff automatic renewal), No. 25-1 (Nov. Sp. Sess.) (§ 47a-15a online-payment extension, effective January 1, 2026), No. 25-113 (data privacy); 2026: §1.2 list, chiefly No. 26-113 (§ 47a-4(a)(11)), No. 26-68 (§ 47a-4d), No. 26-79 (deposit penalties), No. 26-77 (fair housing misdemeanor). All in rows with effective dates.
2. **Money at signing (§ 47a-4d).** Confirmed; third parties added by Conn. Pub. Act No. 26-68, § 59; screening report and receipt duty in `edu-application-screening-fees-ct`; CPI figure not located (§7). `due-at-signing`, `keys`, `parking-vehicle-rules`, `pet-policy` overridden; `hoa-compliance` tagged (fine pass-through arises mid-tenancy).
3. **Late charges.** Confirmed, plus the online-payment extension; `late-fee-ct` overrides `late-fee`.
4. **Prohibited terms (§ 47a-4).** Eleven bans after Conn. Pub. Act No. 26-113 added (11); exculpation voids the base `services-utilities-provided`, `tenants-property-insurance`, `parking`, `storage-space` (variants tagged); `default-by-tenant-ct` caps fees at 15%; § 47a-25 waiver offered narrowly (Taylor).
5. **Deposits.** Confirmed; the dormant interest row's "administrative fee of up to 1%" is not Connecticut law (§5); escrow, notice, return and penalty rows written; Banking Commissioner penalties added from October 1, 2026.
6. **Entry, walk-through and rules.** `landlords-access-mi` tagged (consent not unreasonably withheld); the base `landlords-access` not tagged; walk-through in `existing-condition-ct` and `edu-preoccupancy-walkthrough-ct`; `rules-ia` tagged on § 47a-9.
7. **Ending a tenancy.** Notice to quit, § 47a-15 kick-out, § 47a-23c good cause (with mobile home parks, relatives and common interest communities), § 47a-11e, § 47a-11d (`tenant-death-ct`), § 47a-11b (`abandoned-property-ct`), § 47a-42, § 47a-41 — all in rows.
8. **Notices and disclosures.** Clauses: `cic-notice-ct`, `sprinkler-notice-ct`, `landlord-identification-ct`, `bed-bug-disclosure-ct`, `private-well-notice-ct`, `activity-use-limitation-notice-ct`, `security-deposit-holding-ct`, `keys-ct` (§ 47a-7b), `ev-charging-ct`; education for cash receipts, EFT, cannabis, § 47a-6a filing.
9. **Lead.** No state lease-signing disclosure beyond the federal one; abatement duties where a child under six resides (§ 19a-111c; Conn. Agencies Regs. §§ 19a-111-1 to 19a-111-11) in `edu-lead-abatement-ct`.
10. **Fair housing and screening.** § 46a-64c classes and exemptions, § 46a-81e (no owner-occupant exemption), § 46a-80c erased records, § 47a-9a cannabis convictions; the misdemeanor moves to Conn. Pub. Act No. 26-77, § 16 from October 1, 2026.
11. **Whole-code search.** §17.
12. **Local rules.** Fair rent commissions and local codes flagged (`edu-fair-rent-commissions-ct`, `edu-local-health-code-ct`).

## 13. Independent check
Separate agents, none of which drafted rows, checked the rows against the saved sources, one at a time (`work/check/CHECK-BRIEF.md`), each told that earlier findings may be wrong and that proposed wording must quote the subsections it relies on. Round 1 ran as two sequential parts (A: the 49 tag decisions, 37 Connecticut clauses and 61 NEEDS_REVIEW education rows; B: the 193 VERIFIED education rows). Rounds 2 and 3 re-checked only rows edited since the previous round, with each row's previous version to diff against.
| Round | Rows | ERROR | FIX | NOTE | Notes |
|---|---|---|---|---|---|
| 1A | 147 | 4 | 33 | 25 | ERRORs: `criminal-activity-ct` dropped the § 47a-15 "reasonable person" condition; `edu-fees-as-rent-ct` put pet rent in advertised rent; `edu-term-change-notice-ct` banned mid-term increases outright; `edu-cutpa-ct` sent § 47a-4f to CUTPA instead of the Antitrust Act. |
| 1B | 193 | 6 | 44 | 17 | ERRORs: rent-increase notice for short tenancies; credit unions in deposit escrow; § 48-22 condemnation cancellation missed; § 47a-23c(b)(3) grounds; condominium conversion tenants; § 46a-81e exemptions. Corrected part A's note on the fair housing misdemeanor (moved, not abolished). |
| 2 | 96 | 1 | 13 | 13 | `edu-cannabis-ct` exceptions order; protected-tenant scope in siblings; two battery claims (batteries rerun with synthetic positives). |
| 3 | 18 | 1 | 13 | 5 | `edu-owner-move-in-reservation-ct` (move-in ground never available against conversion tenants); protected-tenant wording made statutory; § 47a-31 gloss; § 7-148 same-date rule; § 47a-10 good-faith buyer. |
All round 1-3 ERROR and FIX findings were applied (two partly, with the checker's wording adjusted: `due-at-signing-ct` keeps the key deposit optional; `edu-no-eminent-domain-rent-rule-ct` keeps its id). Every proposal was checked against the section before it was applied.
**Edited after the last check** (round 3 findings and the matching sibling rows, plus labels): `criminal-activity-ct`, `edu-applicable-codes-ct`, `edu-casualty-mitigation-nonwaivable-ct`, `edu-end-of-term-possession-ct`, `edu-eviction-record-sealing-ct`, `edu-fair-rent-commissions-ct`, `edu-for-cause-eviction-ct`, `edu-holdover-ct`, `edu-landlord-utility-account-ct`, `edu-no-code-variance-notice-ct`, `edu-no-military-zone-disclosure-ct`, `edu-no-prop65-warning-ct`, `edu-no-sex-offender-disclosure-ct`, `edu-no-sex-offender-occupancy-rule-ct`, `edu-owner-move-in-reservation-ct`, `edu-periodic-tenancy-termination-ct`, `edu-quiet-possession-ct`, `edu-rent-escalation-ct`, `edu-rent-increase-notice-ct`, `edu-rental-inspections-ct`, `edu-written-notices-ct`. Claude Code reads these against the statute at sync (§ 47a-23c(a), § 47a-23c(b)(2), § 29-292(a)(1), § 47a-31, § 7-148(c)(7)(A)(i), § 47a-10(a), § 47a-4e, § 47a-20a(b)).

## 14. Statute walk (gap-discovery source 1)
Title 47a (chapters 830, 831, 832, 833, 833a and 834; 150 section entries including reserved ranges) was read whole from the saved corpus (`work/read-47a-chap_*.md`), with § 46a-64c, §§ 42-150bb, 42-150u, 42-151 to 42-152, § 52-565a and chapter 368o's tenement-house sections. A script diffed every title 47a section against the sections CT rows cite: 124 cited, 26 not. Each uncited section and why:
- § 47a-23d (report, obsolete); §§ 47a-24, 47a-24a, 47a-27, 47a-28, 47a-29 (who may bring summary process: cooperatives, receivers of rents, assignees and mortgagees, selectmen, reversioners; procedural standing, no lease content); §§ 47a-26f, 47a-26g (payments distribution hearing; appeal); §§ 47a-44, 47a-45, 47a-45a (entry and detainer jury and judgment; the remedy itself is in `edu-no-lockout-ct` via §§ 47a-43, 47a-46); reserved §§ 47a-47 to 47a-49, 47a-62 to 47a-67; § 47a-54 (board of health order to vacate for communicable disease; enforcement, covered generally by `edu-local-health-code-ct`); §§ 47a-56b, 47a-56j, 47a-56k (receivership service, state financing and bonds); §§ 47a-58 to 47a-61 (municipal enforcement penalties and procedure; `edu-code-receivership-ct` and `edu-local-health-code-ct` state the duties); § 47a-68 (housing session definitions) and §§ 47a-71a to 47a-74 (advisory council, reports, rules of practice).
None reaches lease content. Sections cited only in part were checked one level down for the subsections rows rely on (§§ 47a-4, 47a-7, 47a-7d, 47a-15, 47a-21, 47a-23, 47a-23c, 47a-26b).

## 15. Real-lease comparison (gap-discovery source 2)
- **Lease:** the Department of Housing's Connecticut Model Lease Agreement (portal.ct.gov/doh, mandatory landlord-tenant forms page; Word file saved with its extracted text, `ct-model-lease.docx.txt`). It is a state agency form, not a landlord-association lease; no free Connecticut REALTORS or apartment-association lease was found (buying one was not considered, rule 33). It is not a relabelled template (Connecticut-specific notices and statute cites throughout), but it is short (one page of terms and an addendum), so it is a weaker lead than an association form.
- **Mapping:** parties and notice addresses → `notices`, `landlord-identification-ct`; occupants → `permitted-occupants`; term ending 11:59 p.m. → builder dates; automatic renewal unless 30/60 days' notice → `edu-automatic-renewal-ct` (not offered), `periodic-tenancy-notice-ct`; rent, mailing address, receipts for non-electronic payments, portal access → `rent-payment`, `acceptable-payment-methods-nj`, `edu-rent-receipts-ledger-ct`, `edu-tenant-portal-ct`; "Rent shall not be increased ... during the Term" → `rent-increase-midterm-ct` (optional, never default); utilities checklist → `utilities-responsibility`, `utilities-paid-by-landlord`; deposit and forwarding address → `security-deposit-holding-ct`, `security-deposit-return-ct`; landlord duties, mitigation, entry, rules → `landlord-maintenance-ct`, `edu-mitigation-ct`, `landlords-access-mi`, `rules-ia`; tenant duties → `tenant-maintenance`, `no-disturbance`; disclosures checklist (CIC, sprinkler, bed bugs, lead, rules) → `cic-notice-ct`, `sprinkler-notice-ct`, `bed-bug-disclosure-ct`, `lead-based-paint`, `rules-ia`; addendum (parking, pets, smoking, repairs before move-in, guests, subletting) → `parking-ks-oh-ca`, `pet-policy-ct`, `smoking-policy`, `existing-condition-ct`, `guest-policy-day-limit`, `no-sublet-assign`; "Do not sign if all blanks are not filled in" → `edu-no-lease-completeness-rule-ct`.
- **Gaps found:** none in the library. Two points in the form itself are flagged in §10 (sprinkler trigger; automatic renewal). No shared row was changed because of the lease.

## 16. Landlord-scenario screen (gap-discovery source 3)
Claude generated 111 scenarios from application to move-out, sale and foreclosure, with Connecticut-specific ones (closed up-front list, summary form, protected tenants, fair rent commissions, bed bugs, private wells, environmental use limits, EV chargers, utilities without separate meters, nonresident landlords). A script confirmed that every row named is active and tagged CT. Every scenario has a row; no statute search was needed.
| # | Scenario | Rows |
|---|---|---|
| 1 | Advertise a unit and quote the monthly rent including mandatory fees | `edu-fee-transparency-ct`, `edu-fees-as-rent-ct` |
| 2 | Charge an application or processing fee | `edu-application-screening-fees-ct` |
| 3 | Charge for a tenant screening report | `edu-application-screening-fees-ct`, `edu-tenant-screening-ct` |
| 4 | Take a holding deposit to keep the unit off the market | `edu-holding-deposit-ct` |
| 5 | Ask an applicant about criminal history | `edu-tenant-screening-ct`, `edu-protected-class-questions-ct`, `rental-application-accuracy` |
| 6 | Applicant has a housing voucher | `edu-source-of-income-ct`, `edu-voucher-inspections-ct` |
| 7 | Applicant has children and the unit has old paint | `edu-families-with-children-ct`, `edu-lead-abatement-ct`, `lead-based-paint` |
| 8 | Applicant asks for an assistance animal | `assistance-animal-accommodation`, `edu-assistance-animals-ct` |
| 9 | Applicant asks for a disability modification | `edu-disability-accommodation-ct` |
| 10 | Use an algorithm or third-party software to set rent | `edu-algorithmic-rent-setting-ct` |
| 11 | Collect money at lease signing | `due-at-signing-ct` |
| 12 | Set the security deposit amount | `edu-security-deposit-cap-ct`, `security-deposit-cap-ct` |
| 13 | Tenant is 62 or older | `edu-security-deposit-cap-ct` |
| 14 | Hold the security deposit in a bank account | `security-deposit-holding-ct`, `edu-security-deposit-escrow-ct` |
| 15 | Pay interest on the deposit each year | `security-deposit-interest-ct`, `edu-security-deposit-interest-ct` |
| 16 | Let the tenant pay the deposit in installments | `edu-deposit-installments-ct` |
| 17 | Offer a deposit-alternative fee | `edu-fee-in-lieu-of-deposit-ct` |
| 18 | Collect last month's rent up front | `edu-prepaid-rent-deposit-ct` |
| 19 | Charge a pet deposit or pet rent | `pet-policy-ct`, `edu-pet-fees-ct` |
| 20 | Charge a non-refundable cleaning or move-in fee | `edu-no-nonrefundable-deposits-ct`, `edu-no-preset-deposit-charges-ct` |
| 21 | Give the lease a fixed term and an end date | `edu-lease-term-limits-ct` |
| 22 | Attach the DOH Rental Terms Summary Form | `edu-rental-terms-summary-form-ct` |
| 23 | Write the lease in plain language | `edu-plain-language-lease-ct` |
| 24 | Unit is in a condo or common interest community | `cic-notice-ct`, `hoa-compliance`, `edu-cic-notice-timing-ct` |
| 25 | Building has a fire sprinkler requirement | `sprinkler-notice-ct`, `edu-sprinkler-notice-ct` |
| 26 | Bed bug history disclosure | `bed-bug-disclosure-ct` |
| 27 | Property is served by a private well | `private-well-notice-ct`, `edu-well-septic-ct` |
| 28 | Property is under an environmental use limitation | `activity-use-limitation-notice-ct` |
| 29 | Name the manager and agent for notices | `landlord-identification-ct` |
| 30 | Landlord lives out of state | `edu-nonresident-landlord-process-agent-ct` |
| 31 | Unit is a single-family house and the tenant will do yard work | `snow-removal`, `landscaping-irrigation`, `tenant-repair-agreement-ct`, `edu-tenant-maintenance-agreements-ct` |
| 32 | Do a move-in walk-through | `existing-condition-ct`, `edu-preoccupancy-walkthrough-ct` |
| 33 | Unit not ready on the start date | `possession-delay`, `edu-no-possession-delay-statute-ct` |
| 34 | Give out keys and charge a key deposit | `keys-ct` |
| 35 | Tenant pays utilities directly | `utilities-responsibility`, `edu-tenant-paid-utilities-ct` |
| 36 | Landlord pays heat and hot water | `utilities-paid-by-landlord`, `edu-heat-ct` |
| 37 | Bill tenants for a shared meter | `edu-no-utility-apportionment-ct`, `edu-submetering-ct`, `edu-electric-submetering-ct` |
| 38 | Utility account is in the landlord's name and unpaid | `edu-landlord-utility-account-ct`, `edu-utility-shutoff-rules-ct` |
| 39 | Accept rent by check, cash or online | `acceptable-payment-methods-nj`, `edu-payment-methods-ct`, `edu-rent-receipts-ledger-ct` |
| 40 | Charge a card processing fee | `edu-payment-methods-ct` |
| 41 | Rent is late | `late-fee-ct`, `edu-late-charge-limits-ct` |
| 42 | Tenant's rent is partly subsidized and late | `edu-subsidy-late-charge-ct` |
| 43 | A rent check bounces | `returned-payments-ct` |
| 44 | Apply partial payments | `application-of-payments-ct` |
| 45 | Charge interest on unpaid amounts | `unpaid-amounts-interest-ct`, `edu-interest-on-unpaid-amounts-ct` |
| 46 | Charge collection costs | `collection-fee-ct` |
| 47 | Raise rent at renewal | `edu-rent-increase-notice-ct`, `edu-fair-rent-commissions-ct` |
| 48 | Raise rent during the term | `rent-increase-midterm-ct`, `edu-rent-escalation-ct` |
| 49 | Tenant complains about the rent increase to the fair rent commission | `edu-fair-rent-commissions-ct`, `edu-retaliation-ct` |
| 50 | Offer a free month | `rent-concession-wi`, `edu-rent-concession-ct` |
| 51 | Split rent into installments | `rent-installments-or` |
| 52 | Tenant requests repairs | `landlord-maintenance-ct`, `edu-repair-notice-ct`, `edu-habitability-remedies-ct` |
| 53 | Tenant withholds rent or pays into court | `edu-rent-into-court-ct` |
| 54 | No heat in winter | `edu-heat-ct`, `edu-habitability-remedies-ct` |
| 55 | Bed bugs reported | `bed-bug-cooperation-ct`, `edu-bed-bug-duties-ct` |
| 56 | Smoke and CO alarms | `alarm-duties-ct`, `edu-alarm-requirements-ct` |
| 57 | Enter the unit for a repair | `landlords-access-mi`, `edu-landlord-entry-ct` |
| 58 | Emergency entry | `landlords-access-mi`, `edu-landlord-entry-ct` |
| 59 | Show the unit to buyers or new tenants | `landlords-access-mi`, `inspection-rights` |
| 60 | Municipal rental inspection | `edu-rental-inspections-ct` |
| 61 | Tenant damages the unit | `tenant-caused-damage-ct` |
| 62 | Tenant wants to paint or alter | `no-alterations`, `edu-tenant-alterations-ct` |
| 63 | Tenant wants an EV charger | `ev-charging-ct`, `edu-ev-charging-ct` |
| 64 | Tenant installs balcony solar | `edu-portable-solar-ct` |
| 65 | Tenant has guests staying long-term | `guest-policy`, `guest-policy-day-limit`, `edu-guest-rights-ct` |
| 66 | Tenant wants to sublet or Airbnb | `no-sublet-assign` |
| 67 | Extra occupants move in | `permitted-occupants`, `edu-occupancy-limits-ct`, `edu-unauthorized-occupant-removal-ct` |
| 68 | Tenant smokes or uses cannabis | `smoking-policy`, `edu-smoking-cannabis-ct`, `edu-cannabis-ct` |
| 69 | Noise and nuisance | `no-disturbance`, `edu-public-nuisance-abatement-ct` |
| 70 | Tenant runs a home business or child care | `residential-use-only`, `edu-family-child-care-ct` |
| 71 | Parking and towing | `parking-ks-oh-ca`, `assigned-parking-space`, `parking-vehicle-rules-ct`, `edu-private-towing-ct`, `edu-parking-rules-notice-ct` |
| 72 | Storage unit | `storage-space-ks-oh-ca` |
| 73 | Pets | `pet-policy-ct`, `pet-insurance-requirement` |
| 74 | Grilling on the balcony | `fire-safety-grilling` |
| 75 | Pool on the property | `edu-pools-ct` |
| 76 | Adopt or change house rules | `rules-ia`, `edu-landlord-rules-ct` |
| 77 | Require renters insurance | `tenants-property-insurance-ks-oh-ca`, `edu-renters-insurance-unregulated-ct` |
| 78 | Tenant away for a long time | `extended-absence-notice-ks` |
| 79 | Fire or casualty damages the unit | `casualty-termination-ct`, `edu-disaster-casualty-ct`, `edu-casualty-mitigation-nonwaivable-ct` |
| 80 | Unit condemned; relocation | `edu-alt-housing-ct`, `edu-code-receivership-ct` |
| 81 | Tenant is a domestic violence victim and wants out | `edu-dv-lease-termination-ct`, `edu-dv-housing-protection-ct` |
| 82 | Protected tenant asks for a lock change | `keys-ct`, `edu-dv-lockchange-ct` |
| 83 | Tenant called police for help | `edu-dv-housing-protection-ct`, `edu-no-right-to-call-police-statute-ct` |
| 84 | Tenant deployed in the military | `edu-servicemember-rights-ct` |
| 85 | Tenant dies | `tenant-death-ct`, `edu-tenant-death-ct` |
| 86 | Tenant wants to break the lease | `early-termination-ct`, `edu-mitigation-ct`, `edu-liquidated-damages-ct` |
| 87 | Tenant abandons the unit | `abandoned-property-ct`, `edu-abandoned-property-ct` |
| 88 | Send a notice to the tenant by email | `notices`, `electronic-notice-ma`, `edu-written-notices-ct`, `edu-electronic-records-ct` |
| 89 | Sign the lease electronically | `electronic-signatures` |
| 90 | Give notice of a lease violation | `default-by-tenant-ct`, `edu-tenant-noncompliance-notice-ct` |
| 91 | Evict for nonpayment | `edu-nonpayment-notice-to-quit-ct`, `edu-eviction-process-ct` |
| 92 | Evict a long-term elderly or disabled tenant (5+ units) | `edu-protected-tenant-notice-ct`, `edu-for-cause-eviction-ct` |
| 93 | Accept rent after serving a notice to quit | `edu-waiver-by-acceptance-ct` |
| 94 | Change the locks on a tenant who won't pay | `edu-no-lockout-ct`, `edu-no-self-help-eviction-ct` |
| 95 | Tenant asks for time after judgment | `edu-eviction-stay-ct`, `edu-paying-after-nonpayment-judgment-ct` |
| 96 | Tenant's belongings left after eviction | `edu-post-eviction-property-ct` |
| 97 | End a month-to-month tenancy | `periodic-tenancy-notice-ct`, `edu-periodic-tenancy-termination-ct` |
| 98 | Tenant stays after the lease ends | `holdover-ca`, `edu-holdover-ct`, `edu-holdover-rate-ct` |
| 99 | Lease renews automatically | `edu-automatic-renewal-ct` |
| 100 | Return the deposit after move-out | `security-deposit-return-ct`, `security-deposit-use-ct`, `edu-security-deposit-return-penalty-ct` |
| 101 | Tenant never gives a forwarding address | `security-deposit-return-ct`, `edu-unclaimed-deposit-refund-ct` |
| 102 | Sell the building with tenants in place | `edu-selling-rented-property-ct`, `edu-deposit-on-sale-ct` |
| 103 | Foreclosure on the building | `edu-foreclosure-tenants-ct` |
| 104 | Convert to condos | `edu-condo-conversion-ct`, `edu-conversion-tenant-rights-ct` |
| 105 | Retaliation claim after a code complaint | `edu-retaliation-ct` |
| 106 | Include a jury waiver or confession of judgment | `edu-jury-waiver-ct`, `edu-no-confession-of-judgment-ct` |
| 107 | Include a clause limiting the landlord's liability | `edu-no-exculpatory-clauses-ct`, `edu-prohibited-lease-terms-ct` |
| 108 | Recover attorney's fees | `default-by-tenant-ct`, `edu-attorney-fees-ct` |
| 109 | Keep tenant records and personal data | `edu-tenant-records-ct`, `edu-sensitive-data-privacy-ct` |
| 110 | Accessory dwelling unit on the lot | `edu-accessory-dwelling-unit-ct` |
| 111 | Federally backed mortgage (CARES Act) | `edu-cares-act-notice` |

## 17. Outside-title search and proof of absence (gap-discovery source 4)
- **Loaded before the first battery:** the whole General Statutes (30,972 sections) with the 2025 texts of amended sections, the Constitution (64 units), the selected RCSA subtitles, the Practice Book and its 2027 amendments, and every 2026 act.
- **Outside title 47a, found and used:** CUTPA (§§ 42-110a to 42-110q; `edu-cutpa-ct`), plain language (§§ 42-151, 42-152), reciprocal attorney's fees (§ 42-150bb), liquidated damages (§ 42-150u), dishonored checks (§ 52-565a(i), $20 cap), card surcharges (§ 42-133ff), collection agencies (§ 36a-805(a)(11)), consumer collection (§§ 36a-645 to 36a-647), interest (§ 37-1), towing (§§ 14-145, 14-145e), electronic transactions (§§ 1-266 to 1-286; § 1-268 eviction-notice exclusion), fair housing (§§ 46a-64b, 46a-64c, 46a-81e, 46a-80c, 46a-63), cannabis (§ 21a-408p, § 21a-279a, § 47a-9a), utilities (§§ 16-262c, 16-262e, 16-262f, 16-262t, 16-19ff, 19a-109, 19a-214), heat and health (§§ 19a-36, 19a-109, 19a-111c, chapter 368o), fire codes (§§ 29-291a, 29-292, 29-305, 29-315), wells (§ 19a-37), environmental use limits (§ 22a-133o), criminal mischief to alarms (§ 53a-117a), criminal lockout (§ 53a-214), erasure (§ 54-142a), data privacy (§§ 42-515 to 42-525), Social Security numbers and breaches (§§ 42-471, 36a-701b), unclaimed property (§§ 3-56a, 3-64a, 3-65a), relocation (§§ 8-266 to 8-282), condemnation (§ 48-22), recording of long leases (§ 47-19), automatic renewal (§§ 42-126b, 42-158ff), self-storage liens (§§ 42-159 to 42-164), state-assisted housing (§§ 8-116b, 8-339).
- **Constitution:** batteries CT-CONST-housing, -search, -speech, -arms, -religion, -discrimination, -contract, -jury, -debt, -property, -privacy, -victims, -environment, each with a synthetic positive and the controls (nonsense 0; "General Assembly" > 0). Most hits are annotations. Article I's rights (§ 7 searches, §§ 4-5 speech, § 15 arms, § 19 jury, § 11 takings, § 20 equal protection and discrimination, § 3 religion) and the victims' rights amendment bind the State and its proceedings, not a private landlord's lease terms; no provision reaches a residential lease or protects tenant conduct a shared clause restricts. No imprisonment-for-debt clause exists (CT-CONST-debt, 0 hits, synthetic positive passed). No initiated amendments (Connecticut has none).
- **Regulations boundary:** only the subtitles listed in §1.1; every absence row says "Regulations other than the loaded subtitles not searched".
- **Batteries:** 474 logged by name (reruns append under the same name); those cited for the tag decisions include SUBLET, POSS-DELIVERY, RENTERS-INS, FLAG-DISPLAY, ASSIST-ANIMAL and HOLDOVER-MEASURE (no residential consent, delivery, renter's-insurance, display, assistance-animal or holdover-measure statute); every run carried its nonsense control in the same call (0 hits throughout); positives as in §1.3.

## 18. Topic reference canvass (rules 27, 36)
Two agents canvassed the 344 topics in `lease-clause-topics.md` in slices A and B, one at a time, each saving one JSON line per topic, briefed with the planned CT clauses (`work/canvass/BRIEF.md`). Statuses: Present 215, Confirmed absent 127, Not located 1 (`veterans-incentive`: no landlord incentive statute; boundary: whole corpus, regulations other than the loaded subtitles not searched), Not applicable 1 (`tpa-exemption-notice`: no Connecticut rent-cap or just-cause statute with an exemption notice). `eminent-domain` moved from Confirmed absent to Present after round 1 (§ 48-22). The canvass triage of single-state clauses is in §2.3. Rows per topic:
- `abandoned-property`: Present. Rows: `abandoned-property-ct`, `edu-abandoned-property-ct`, `tenant-death-ct`
- `abandonment-and-mitigation`: Present. Rows: `default-by-tenant-ct`, `edu-mitigation-ct`
- `acceptable-payment-methods`: Present. Rows: `acceptable-payment-methods-nj`, `edu-payment-methods-ct`; batteries: 1
- `accessory-dwelling-unit`: Present. Rows: `edu-accessory-dwelling-unit-ct`
- `actual-notice-method`: Confirmed absent. Rows: `edu-no-actual-notice-rule-ct`; batteries: 2
- `addendum-precedence`: Present. Rows: `addendum-precedence`, `edu-rental-terms-summary-form-ct`
- `adverse-proceeding-notice`: Confirmed absent. Rows: `edu-no-adverse-proceeding-notice-ct`; batteries: 2
- `alarm-duties`: Present. Rows: `alarm-duties-ct`, `edu-alarm-requirements-ct`; batteries: 2
- `alarm-tampering-fee`: Confirmed absent. Rows: `alarm-duties-ct`, `edu-no-alarm-tampering-fee-ct`, `tenant-caused-damage-ct`; batteries: 2
- `algorithmic-rent-setting`: Present. Rows: `edu-algorithmic-rent-setting-ct`
- `alt-housing`: Present. Rows: `edu-alt-housing-ct`; batteries: 2
- `alterations`: Present. Rows: `edu-tenant-alterations-ct`, `no-alterations`
- `appliances-excluded`: Present. Rows: `appliances-included`, `edu-appliances-excluded-ct`
- `appliances-included`: Present. Rows: `appliances-included`, `landlord-maintenance-ct`
- `application-fees`: Present. Rows: `due-at-signing-ct`, `edu-application-screening-fees-ct`
- `application-of-payments`: Present. Rows: `application-of-payments-ct`
- `assigned-parking-space`: Present. Rows: `assigned-parking-space`, `edu-private-towing-ct`
- `assistance-animal-accommodation`: Present. Rows: `assistance-animal-accommodation`, `edu-assistance-animals-ct`; batteries: 1
- `association-obligations-disclosure`: Present. Rows: `cic-notice-ct`, `edu-cic-notice-timing-ct`
- `attorney-fees`: Present. Rows: `default-by-tenant-ct`, `edu-attorney-fees-ct`
- `automatic-renewal`: Present. Rows: `edu-automatic-renewal-ct`; batteries: 1
- `balcony-inspection`: Confirmed absent. Rows: `edu-no-balcony-inspection-ct`, `landlord-maintenance-ct`; batteries: 2
- `bed-bug-cooperation`: Present. Rows: `bed-bug-cooperation-ct`, `bed-bug-disclosure-ct`, `edu-bed-bug-duties-ct`
- `bed-bug-disclosure`: Present. Rows: `bed-bug-disclosure-ct`, `edu-bed-bug-duties-ct`
- `cannabis`: Present. Rows: `edu-cannabis-ct`, `smoking-policy`; batteries: 3
- `cares-act-notice`: Present. Rows: `edu-cares-act-notice`
- `casualty-and-mitigation-waivable`: Present. Rows: `casualty-termination-ct`, `edu-casualty-mitigation-nonwaivable-ct`
- `casualty-termination`: Present. Rows: `casualty-termination-ct`, `edu-disaster-casualty-ct`
- `certificate-of-occupancy-disclosure`: Confirmed absent. Rows: `edu-no-certificate-of-occupancy-disclosure-ct`; batteries: 2
- `children-occupancy`: Present. Rows: `edu-families-with-children-ct`
- `cold-weather-vacate-notice`: Confirmed absent. Rows: `edu-no-cold-weather-vacate-notice-ct`, `extended-absence-notice-ks`; batteries: 2
- `collection-fee`: Present. Rows: `collection-fee-ct`; batteries: 1
- `common-area-lighting`: Present. Rows: `edu-common-area-lighting-ct`; batteries: 1
- `common-area-use`: Present. Rows: `common-area-use`, `edu-landlord-rules-ct`; batteries: 1
- `condemned-premises-rent-bar`: Confirmed absent. Rows: `edu-no-condemned-rent-bar-ct`; batteries: 2
- `condition-inspection`: Present. Rows: `edu-preoccupancy-walkthrough-ct`, `existing-condition-ct`; batteries: 1
- `confession-of-judgment`: Present. Rows: `edu-no-confession-of-judgment-ct`; batteries: 1
- `confirmed-absences-habitability`: Present. Rows: `edu-habitability-remedies-ct`; batteries: 2
- `confirmed-absences-misc`: Confirmed absent. Rows: `edu-confirmed-absences-misc-ct`; batteries: 3
- `confirmed-absences-outside-title`: Present. Rows: `edu-confirmed-absences-outside-title-ct`; batteries: 3
- `construction-liens`: Present. Rows: `edu-construction-liens-ct`, `no-alterations`; batteries: 2
- `consumer-protection-act`: Present. Rows: `edu-cutpa-ct`
- `conversion-notice`: Present. Rows: `edu-condo-conversion-ct`
- `criminal-activity`: Present. Rows: `criminal-activity-ct`, `edu-criminal-activity-ct`; batteries: 2
- `cure-and-eviction-grounds`: Present. Rows: `criminal-activity-ct`, `default-by-tenant-ct`, `edu-tenant-noncompliance-notice-ct`
- `default-by-tenant`: Present. Rows: `default-by-tenant-ct`, `edu-attorney-fees-ct`, `edu-mitigation-ct`, `edu-tenant-noncompliance-notice-ct`
- `defective-drywall-disclosure`: Confirmed absent. Rows: `edu-no-drywall-disclosure-ct`; batteries: 2
- `deposit-cost-schedule`: Confirmed absent. Rows: `edu-no-preset-deposit-charges-ct`, `security-deposit-use-ct`; batteries: 2
- `deposit-escheat`: Present. Rows: `edu-unclaimed-deposit-refund-ct`; batteries: 1
- `deposit-installments`: Present. Rows: `edu-deposit-installments-ct`; batteries: 2
- `deposit-last-month-rent`: Present. Rows: `due-at-signing-ct`, `edu-prepaid-rent-deposit-ct`, `security-deposit-use-ct`
- `deposit-surrender-notice`: Confirmed absent. Rows: `edu-no-deposit-refund-conditions-ct`, `security-deposit-return-ct`; batteries: 2
- `designated-repairer`: Confirmed absent. Rows: `edu-habitability-remedies-ct`; batteries: 2
- `disability-accommodation`: Present. Rows: `assistance-animal-accommodation`, `edu-disability-accommodation-ct`
- `disaster-displaced-guests`: Confirmed absent. Rows: `edu-no-disaster-guest-rule-ct`; batteries: 2
- `disaster-duties`: Present. Rows: `casualty-termination-ct`, `edu-disaster-casualty-ct`; batteries: 2
- `disturbance`: Present. Rows: `criminal-activity-ct`, `no-disturbance`
- `double-letting`: Confirmed absent. Rows: `edu-no-double-letting-ct`, `possession-delay`; batteries: 3
- `drug-free-housing-addendum`: Confirmed absent. Rows: `criminal-activity-ct`, `edu-criminal-activity-ct`, `edu-no-drug-free-addendum-ct`; batteries: 3
- `due-at-signing`: Present. Rows: `due-at-signing-ct`, `edu-application-screening-fees-ct`
- `dv-confidentiality`: Confirmed absent. Rows: `edu-dv-information-ct`; batteries: 2
- `dv-deposit-timing`: Confirmed absent. Rows: `edu-no-dv-deposit-timing-ct`, `security-deposit-return-ct`; batteries: 3
- `dv-eviction-protection`: Present. Rows: `criminal-activity-ct`, `edu-dv-housing-protection-ct`; batteries: 2
- `dv-lease-termination`: Present. Rows: `edu-dv-lease-termination-ct`; batteries: 2
- `dv-lockchange`: Present. Rows: `edu-dv-lockchange-ct`, `keys-ct`; batteries: 1
- `dv-protection-order-chapter-moved`: Present. Rows: `edu-dv-law-citations-ct`
- `dv-qualifying-documents`: Present. Rows: `edu-dv-lease-termination-ct`, `edu-dv-lockchange-ct`
- `early-termination`: Present. Rows: `abandoned-property-ct`, `early-termination-ct`, `edu-dv-lease-termination-ct`, `edu-mitigation-ct`; batteries: 2
- `electric-submetering-disclosure`: Confirmed absent. Rows: `edu-electric-submetering-ct`; batteries: 2
- `electronic-signatures`: Present. Rows: `edu-electronic-records-ct`, `electronic-signatures`
- `emergency-assistance-right`: Confirmed absent. Rows: `criminal-activity-ct`, `edu-no-right-to-call-police-statute-ct`; batteries: 2
- `emergency-contact`: Present. Rows: `landlord-identification-ct`, `tenant-death-ct`; batteries: 1
- `eminent-domain`: Present. Rows: `edu-alt-housing-ct`, `edu-no-eminent-domain-rent-rule-ct`; batteries: 2
- `employee-screening`: Confirmed absent. Rows: `edu-no-employee-screening-mandate-ct`; batteries: 2
- `entire-agreement`: Present. Rows: `entire-agreement`
- `environmental-event-termination`: Confirmed absent. Rows: `casualty-termination-ct`, `edu-disaster-casualty-ct`; batteries: 3
- `ev-charging`: Present. Rows: `edu-ev-charging-ct`, `ev-charging-ct`
- `ev-charging-end-of-tenancy`: Present. Rows: `edu-ev-charging-ct`, `ev-charging-ct`
- `ev-charging-requirements`: Present. Rows: `edu-ev-charging-ct`, `ev-charging-ct`
- `ev-charging-shared-area`: Present. Rows: `edu-ev-charging-ct`, `ev-charging-ct`
- `eviction-hardship-stay`: Present. Rows: `edu-eviction-stay-ct`, `notice-to-quit-waiver-ct`; batteries: 2
- `eviction-penalty-clause-ban`: Present. Rows: `edu-eviction-cost-shifting-ct`; batteries: 2
- `eviction-process`: Present. Rows: `default-by-tenant-ct`, `edu-abandoned-property-ct`, `edu-eviction-process-ct`, `edu-eviction-stay-ct`, `edu-tenant-noncompliance-notice-ct`, `notice-to-quit-waiver-ct`; batteries: 1
- `eviction-record-sealing`: Present. Rows: `edu-eviction-record-sealing-ct`; batteries: 2
- `eviction-service-party`: Confirmed absent. Rows: `edu-eviction-process-ct`, `notices`; batteries: 2
- `exculpatory-clauses`: Present. Rows: `edu-no-exculpatory-clauses-ct`
- `existing-condition`: Present. Rows: `edu-preoccupancy-walkthrough-ct`, `existing-condition-ct`
- `expedited-criminal-eviction`: Confirmed absent. Rows: `criminal-activity-ct`, `edu-criminal-activity-ct`, `edu-eviction-stay-ct`; batteries: 3
- `expedited-deposit-disposition`: Confirmed absent. Rows: `edu-no-expedited-deposit-ct`, `security-deposit-return-ct`; batteries: 2
- `extended-absence-notice`: Present. Rows: `edu-no-cold-weather-vacate-notice-ct`, `extended-absence-notice-ks`
- `fair-housing`: Present. Rows: `edu-fair-housing-ct`; batteries: 1
- `family-child-care`: Confirmed absent. Rows: `edu-family-child-care-ct`, `residential-use-only`; batteries: 3
- `fee-in-lieu-of-deposit`: Confirmed absent. Rows: `edu-fee-in-lieu-of-deposit-ct`; batteries: 2
- `fee-transparency`: Present. Rows: `edu-fee-transparency-ct`
- `fee-unprovided-service`: Confirmed absent. Rows: `edu-no-fee-unprovided-service-ct`; batteries: 2
- `fees-as-rent`: Present. Rows: `edu-fees-as-rent-ct`
- `fire-code-standard`: Present. Rows: `edu-applicable-codes-ct`, `landlord-maintenance-ct`
- `fire-safety-grilling`: Present. Rows: `fire-safety-grilling`; batteries: 1
- `fire-sprinkler-duty`: Present. Rows: `edu-sprinkler-notice-ct`, `sprinkler-notice-ct`; batteries: 1
- `firearms`: Confirmed absent. Rows: `edu-no-firearms-lease-statute-ct`; batteries: 2
- `flood-disclosure`: Confirmed absent. Rows: `edu-no-flood-disclosure-ct`; batteries: 2
- `for-cause-eviction`: Present. Rows: `edu-condo-conversion-ct`, `edu-for-cause-eviction-ct`, `notice-to-quit-waiver-ct`; batteries: 3
- `foreclosure`: Present. Rows: `edu-foreclosure-tenants-ct`; batteries: 2
- `foreclosure-disclosure`: Confirmed absent. Rows: `edu-no-foreclosure-disclosure-ct`; batteries: 2
- `foreign-ownership`: Confirmed absent. Rows: `edu-no-foreign-ownership-restriction-ct`; batteries: 2
- `forfeiture-redemption`: Confirmed absent. Rows: `edu-eviction-stay-ct`; batteries: 3
- `frozen-standard-incorporation`: Present. Rows: `edu-applicable-codes-ct`
- `furnishings-included`: Confirmed absent. Rows: `appliances-included`, `edu-no-furnished-rental-rule-ct`; batteries: 3
- `good-cause-notice`: Present. Rows: `edu-protected-tenant-notice-ct`
- `governing-law`: Present. Rows: `governing-law`
- `government-fee-reimbursement`: Confirmed absent. Rows: `edu-no-government-fee-passthrough-ct`; batteries: 3
- `governmental-fines`: Confirmed absent. Rows: `edu-government-fines-passthrough-ct`, `hoa-compliance`; batteries: 2
- `guarantor-renewal`: Confirmed absent. Rows: `edu-no-guarantor-renewal-ct`; batteries: 2
- `guest-policy`: Present. Rows: `edu-guest-rights-ct`, `guest-policy`; batteries: 1
- `guest-policy-day-limit`: Present. Rows: `edu-guest-rights-ct`, `guest-policy-day-limit`
- `guest-rights`: Present. Rows: `edu-guest-rights-ct`; batteries: 1
- `habitability-materiality`: Present. Rows: `edu-habitability-remedies-ct`, `landlord-maintenance-ct`
- `habitability-modifiable`: Present. Rows: `edu-tenant-maintenance-agreements-ct`
- `habitability-presumption`: Confirmed absent. Rows: `edu-no-habitability-presumption-ct`; batteries: 2
- `habitability-statement`: Confirmed absent. Rows: `landlord-maintenance-ct`; batteries: 2
- `habitability-waiver`: Present. Rows: `edu-habitability-not-waivable-ct`, `edu-tenant-maintenance-agreements-ct`
- `hazardous-contamination-disclosure`: Present. Rows: `activity-use-limitation-notice-ct`; batteries: 2
- `health-district-rental-rules`: Confirmed absent. Rows: `edu-local-health-code-ct`; batteries: 3
- `heating`: Present. Rows: `edu-heat-ct`, `landlord-maintenance-ct`; batteries: 2
- `hoa`: Present. Rows: `edu-association-and-tenants-ct`, `hoa-compliance`
- `hoa-compliance`: Present. Rows: `edu-association-and-tenants-ct`, `hoa-compliance`
- `holding-deposit`: Present. Rows: `due-at-signing-ct`, `edu-holding-deposit-ct`
- `holdover`: Present. Rows: `edu-eviction-process-ct`, `edu-holdover-ct`, `holdover-ca`, `notice-to-quit-waiver-ct`; batteries: 2
- `holdover-rate`: Confirmed absent. Rows: `edu-holdover-rate-ct`, `holdover-ca`; batteries: 2
- `home-business`: Confirmed absent. Rows: `edu-no-home-business-rule-ct`, `residential-use-only`; batteries: 2
- `homestead-waiver`: Confirmed absent. Rows: `edu-no-exemption-waiver-ct`; batteries: 2
- `immigration-status`: Confirmed absent. Rows: `edu-no-immigration-inquiry-rule-ct`; batteries: 3
- `infirmity-termination`: Confirmed absent. Rows: `edu-dv-lease-termination-ct`, `edu-mitigation-ct`, `edu-no-infirmity-termination-ct`, `tenant-death-ct`; batteries: 2
- `informal-dispute-resolution`: Confirmed absent. Rows: `edu-no-pre-suit-resolution-statute-ct`; batteries: 3
- `inspection-condemnation-disclosure`: Confirmed absent. Rows: `edu-no-code-violation-disclosure-ct`; batteries: 2
- `inspection-notice-penalty`: Confirmed absent. Rows: `edu-no-inspection-notice-penalty-ct`, `edu-preoccupancy-walkthrough-ct`, `existing-condition-ct`; batteries: 2
- `inspection-rights`: Present. Rows: `inspection-rights`, `landlords-access-mi`
- `joint-liability`: Present. Rows: `joint-liability`
- `jury-waiver`: Present. Rows: `edu-jury-waiver-ct`; batteries: 2
- `key-control-policy`: Confirmed absent. Rows: `edu-no-employee-screening-mandate-ct`; batteries: 3
- `keys`: Present. Rows: `keys-ct`
- `knowing-use-penalty`: Confirmed absent. Rows: `edu-no-knowing-use-penalty-ct`; batteries: 2
- `landlord-breach-remedy`: Present. Rows: `edu-habitability-remedies-ct`
- `landlord-entry`: Present. Rows: `edu-landlord-entry-ct`, `landlords-access-mi`
- `landlord-liability-insurance`: Confirmed absent. Rows: `edu-no-landlord-liability-insurance-ct`; batteries: 2
- `landlord-lien`: Confirmed absent. Rows: `abandoned-property-ct`, `edu-abandoned-property-ct`, `edu-no-landlord-lien-ct`, `tenant-death-ct`; batteries: 4
- `landlord-maintenance`: Present. Rows: `landlord-maintenance-ct`
- `landlord-registration`: Present. Rows: `edu-landlord-registration-ct`; batteries: 3
- `landlord-remedies-termination`: Present. Rows: `edu-landlord-remedies-on-termination-ct`; batteries: 1
- `landlord-self-cure`: Confirmed absent. Rows: `edu-no-landlord-self-cure-ct`, `tenant-caused-damage-ct`; batteries: 2
- `landscaping-irrigation`: Present. Rows: `landscaping-irrigation`
- `late-fee`: Present. Rows: `edu-late-charge-limits-ct`, `late-fee-ct`
- `late-fee-limit`: Present. Rows: `edu-late-charge-limits-ct`, `late-fee-ct`
- `law-enforcement-cooperation`: Confirmed absent. Rows: `criminal-activity-ct`, `edu-no-crime-free-lease-statute-ct`; batteries: 2
- `lead-based-paint`: Present. Rows: `edu-lead-abatement-ct`, `lead-based-paint`
- `lead-safe-certification`: Confirmed absent. Rows: `edu-lead-abatement-ct`, `lead-based-paint`; batteries: 2
- `lead-state-notices`: Present. Rows: `edu-lead-abatement-ct`, `lead-based-paint`; batteries: 1
- `lease-completeness`: Confirmed absent. Rows: `edu-no-lease-completeness-rule-ct`; batteries: 2
- `lease-content-requirements`: Present. Rows: `activity-use-limitation-notice-ct`, `edu-lease-term-limits-ct`, `edu-optional-lease-terms-ct`, `edu-plain-language-lease-ct`, `edu-prohibited-lease-terms-ct`, `edu-rental-terms-summary-form-ct`, `edu-required-disclosures-ct`, `landlord-identification-ct`, `sprinkler-notice-ct`
- `lease-copy`: Confirmed absent. Rows: `edu-no-lease-copy-duty-ct`; batteries: 2
- `lease-notice-initial-requirement`: Confirmed absent. Rows: `edu-no-initials-requirement-ct`; batteries: 2
- `lease-term-limitation`: Confirmed absent. Rows: `edu-lease-term-limits-ct`; batteries: 2
- `lease-type-parity`: Confirmed absent. Rows: `edu-no-lease-type-parity-ct`; batteries: 2
- `lease-type-size`: Confirmed absent. Rows: `edu-plain-language-lease-ct`; batteries: 2
- `liquidated-damages`: Present. Rows: `edu-liquidated-damages-ct`; batteries: 2
- `lockout-for-rent-delinquency`: Present. Rows: `edu-no-lockout-ct`
- `maintenance-duty-shift`: Present. Rows: `edu-tenant-maintenance-agreements-ct`
- `meter-conservation-charge`: Confirmed absent. Rows: `edu-no-meter-conservation-charge-ct`; batteries: 2
- `meth-disclosure`: Confirmed absent. Rows: `edu-no-meth-disclosure-ct`; batteries: 2
- `military-air-zone-disclosure`: Confirmed absent. Rows: `edu-no-military-zone-disclosure-ct`; batteries: 2
- `minor-tenant-filing`: Present. Rows: `edu-minor-defendants-ct`; batteries: 2
- `mold-disclosure`: Confirmed absent. Rows: `edu-no-mold-disclosure-ct`; batteries: 2
- `municipal-utility-lien`: Present. Rows: `edu-municipal-utility-lien-ct`; batteries: 1
- `nonpayment-notice`: Present. Rows: `edu-nonpayment-notice-to-quit-ct`; batteries: 2
- `nonrefundable-deposit-notice`: Confirmed absent. Rows: `due-at-signing-ct`, `edu-no-nonrefundable-deposits-ct`; batteries: 2
- `nonrefundable-deposit-separate-notice`: Confirmed absent. Rows: `edu-no-nonrefundable-deposits-ct`; batteries: 2
- `nonresident-owner-agent`: Present. Rows: `edu-landlord-registration-ct`, `edu-nonresident-landlord-process-agent-ct`, `landlord-identification-ct`; batteries: 1
- `notice-delivery-methods`: Present. Rows: `edu-electronic-records-ct`, `electronic-notice-ma`, `notices`; batteries: 1
- `notice-service-fee`: Confirmed absent. Rows: `edu-no-notice-fee-rule-ct`, `notice-service-fee-ct`; batteries: 2
- `notice-to-quit-waiver`: Present. Rows: `notice-to-quit-waiver-ct`
- `notice-to-vacate-additional-terms`: Confirmed absent. Rows: `edu-no-notice-to-vacate-terms-rule-ct`; batteries: 2
- `notices`: Present. Rows: `landlord-identification-ct`, `notices`
- `nuisance`: Present. Rows: `criminal-activity-ct`, `edu-public-nuisance-abatement-ct`
- `optional-lease-terms`: Present. Rows: `edu-optional-lease-terms-ct`; batteries: 1
- `ordnance-demolition-meter-disclosures`: Confirmed absent. Rows: `edu-no-ordnance-demolition-meter-disclosure-ct`; batteries: 2
- `other-landlord-facilities`: Present. Rows: `edu-tenement-house-standards-ct`, `landlord-maintenance-ct`
- `owner-identity-disclosure`: Present. Rows: `edu-nonresident-landlord-process-agent-ct`, `landlord-identification-ct`
- `owner-move-in-reservation`: Present. Rows: `edu-owner-move-in-reservation-ct`
- `parking`: Present. Rows: `edu-private-towing-ct`, `parking-ks-oh-ca`
- `parking-rules-notice`: Present. Rows: `edu-parking-rules-notice-ct`; batteries: 1
- `parking-vehicle-rules`: Present. Rows: `parking-vehicle-rules-ct`
- `part5-nonwaivable`: Present. Rows: `edu-deposit-nonwaiver-ct`, `edu-habitability-not-waivable-ct`, `edu-prohibited-lease-terms-ct`
- `periodic-services-entry`: Confirmed absent. Rows: `edu-landlord-entry-ct`; batteries: 2
- `permitted-occupants`: Present. Rows: `edu-occupancy-limits-ct`, `permitted-occupants`; batteries: 1
- `pest-control-notice`: Confirmed absent. Rows: `edu-no-pest-control-notice-ct`; batteries: 2
- `pet-eviction-fact-sheet`: Confirmed absent. Rows: `edu-no-pet-eviction-fact-sheet-ct`; batteries: 2
- `pet-fees`: Present. Rows: `edu-pet-fees-ct`, `edu-security-deposit-cap-ct`, `pet-policy-ct`
- `pet-insurance-requirement`: Present. Rows: `edu-renters-insurance-unregulated-ct`, `pet-insurance-requirement`; batteries: 2
- `pet-policy`: Present. Rows: `pet-policy-ct`; batteries: 1
- `plain-language`: Present. Rows: `edu-plain-language-lease-ct`
- `plain-language-consumer-statement`: Confirmed absent. Rows: `edu-plain-language-lease-ct`; batteries: 2
- `political-access`: Confirmed absent. Rows: `edu-no-candidate-access-rule-ct`; batteries: 2
- `pool-safety`: Present. Rows: `edu-pools-ct`; batteries: 1
- `portable-cooling-device`: Confirmed absent. Rows: `edu-no-portable-cooling-right-ct`; batteries: 2
- `portable-solar`: Confirmed absent. Rows: `edu-portable-solar-ct`; batteries: 2
- `portfolio-thresholds`: Present. Rows: `edu-portfolio-thresholds-ct`
- `possession-bond`: Confirmed absent. Rows: `edu-no-possession-bond-ct`; batteries: 3
- `possession-delay`: Confirmed absent. Rows: `edu-no-possession-delay-statute-ct`, `possession-delay`; batteries: 2
- `post-eviction-property`: Present. Rows: `edu-post-eviction-property-ct`; batteries: 1
- `private-well-testing`: Present. Rows: `private-well-notice-ct`
- `prohibited-acts-renter`: Present. Rows: `edu-tenant-duties-ct`, `no-disturbance`, `tenant-maintenance`
- `prohibited-lease-terms`: Present. Rows: `edu-habitability-not-waivable-ct`, `edu-late-charge-limits-ct`, `edu-lease-limits-outside-47a-4-ct`, `edu-no-confession-of-judgment-ct`, `edu-no-exculpatory-clauses-ct`, `edu-no-knowing-use-penalty-ct`, `edu-prohibited-lease-terms-ct`, `tenant-repair-agreement-ct`; batteries: 3
- `promises-to-repair`: Confirmed absent. Rows: `edu-no-promises-to-repair-rule-ct`; batteries: 2
- `prop65-rental-warning`: Confirmed absent. Rows: `edu-no-prop65-warning-ct`; batteries: 2
- `property-tax-rent-disclosure`: Confirmed absent. Rows: `edu-no-property-tax-rent-statement-ct`; batteries: 2
- `protected-class-inquiry-ban`: Confirmed absent. Rows: `edu-protected-class-questions-ct`; batteries: 2
- `purpose-limitation`: Present. Rows: `default-by-tenant-ct`, `residential-use-only`
- `quiet-possession`: Present. Rows: `edu-quiet-possession-ct`, `landlords-access-mi`; batteries: 1
- `radon-disclosure`: Confirmed absent. Rows: `edu-no-radon-disclosure-ct`; batteries: 2
- `recycling-notice`: Confirmed absent. Rows: `edu-no-recycling-notice-ct`; batteries: 2
- `redemption`: Present. Rows: `edu-paying-after-nonpayment-judgment-ct`; batteries: 2
- `religious-cultural-display`: Present. Rows: `common-area-use`, `edu-religious-door-display-ct`; batteries: 2
- `rent-concession`: Confirmed absent. Rows: `edu-rent-concession-ct`, `rent-concession-wi`; batteries: 2
- `rent-control`: Present. Rows: `edu-fair-rent-commissions-ct`; batteries: 2
- `rent-demand-bar`: Present. Rows: `edu-habitability-not-waivable-ct`, `edu-no-condemned-rent-bar-ct`; batteries: 2
- `rent-escalation`: Present. Rows: `edu-rent-escalation-ct`, `rent-increase-midterm-ct`
- `rent-increase-notice`: Present. Rows: `edu-rent-increase-notice-ct`
- `rent-installments`: Present. Rows: `rent-installments-or`
- `rent-into-court-counterclaim`: Present. Rows: `edu-rent-into-court-ct`; batteries: 1
- `rent-payment`: Present. Rows: `late-fee-ct`, `rent-payment`
- `rent-receipt-anti-waiver`: Present. Rows: `edu-habitability-not-waivable-ct`, `edu-prohibited-lease-terms-ct`
- `rent-receipts`: Present. Rows: `edu-rent-receipts-ledger-ct`
- `rent-reporting`: Confirmed absent. Rows: `edu-no-rent-reporting-rule-ct`; batteries: 2
- `rent-tax`: Present. Rows: `edu-rent-tax-ct`; batteries: 1
- `rental-application-accuracy`: Present. Rows: `edu-confirmed-absences-misc-ct`, `rental-application-accuracy`; batteries: 1
- `rental-inspection`: Present. Rows: `edu-rental-inspections-ct`
- `renters-insurance-rules`: Confirmed absent. Rows: `edu-renters-insurance-unregulated-ct`, `tenants-property-insurance-ks-oh-ca`; batteries: 2
- `repair-cost-termination`: Confirmed absent. Rows: `casualty-termination-ct`, `edu-no-repair-cost-termination-ct`; batteries: 2
- `repair-escrow-exemption-notice`: Confirmed absent. Rows: `edu-habitability-remedies-ct`; batteries: 2
- `repair-notice`: Present. Rows: `edu-repair-notice-ct`
- `required-disclosures`: Present. Rows: `edu-rental-terms-summary-form-ct`, `edu-required-disclosures-ct`
- `required-fees`: Confirmed absent. Rows: `edu-no-fee-listing-rule-ct`; batteries: 2
- `residential-use-only`: Present. Rows: `residential-use-only`
- `retaliation`: Present. Rows: `edu-retaliation-ct`
- `returned-payments`: Present. Rows: `returned-payments-ct`
- `rules-regulations`: Present. Rows: `edu-landlord-rules-ct`, `rules-ia`
- `sale-or-management-change`: Present. Rows: `edu-selling-rented-property-ct`
- `sanitary-code-variance`: Confirmed absent. Rows: `edu-no-code-variance-notice-ct`; batteries: 2
- `scope`: Present. Rows: `edu-scope-ct`
- `security-deposit-cap`: Present. Rows: `due-at-signing-ct`, `edu-security-deposit-cap-ct`, `security-deposit-use-ct`
- `security-deposit-holding`: Present. Rows: `edu-security-deposit-escrow-ct`, `security-deposit-holding-ct`
- `security-deposit-interest`: Present. Rows: `edu-security-deposit-interest-ct`, `security-deposit-interest-ct`
- `security-deposit-nonwaiver`: Present. Rows: `edu-deposit-nonwaiver-ct`
- `security-deposit-on-sale`: Present. Rows: `edu-deposit-on-sale-ct`
- `security-deposit-penalty`: Present. Rows: `edu-security-deposit-return-penalty-ct`, `security-deposit-return-ct`
- `security-deposit-return`: Present. Rows: `edu-security-deposit-return-penalty-ct`, `security-deposit-return-ct`
- `security-deposit-standards`: Confirmed absent. Rows: `edu-no-deposit-standards-rule-ct`; batteries: 2
- `security-deposit-use`: Present. Rows: `security-deposit-use-ct`
- `security-devices`: Confirmed absent. Rows: `edu-no-lock-rekey-rule-ct`, `keys-ct`; batteries: 2
- `self-help-eviction`: Present. Rows: `edu-no-lockout-ct`, `edu-no-self-help-eviction-ct`; batteries: 1
- `senior-housing-work-card`: Confirmed absent. Rows: `edu-no-senior-housing-work-card-ct`; batteries: 2
- `service-animal-denial-penalty`: Present. Rows: `edu-service-animal-denial-penalty-ct`
- `service-animal-misrepresentation`: Confirmed absent. Rows: `edu-no-service-animal-misrepresentation-penalty-ct`; batteries: 2
- `servicemember-rights`: Confirmed absent. Rows: `edu-servicemember-rights-ct`; batteries: 3
- `services-utilities-provided`: Present. Rows: `edu-tenant-paid-utilities-ct`, `services-utilities-provided-ks-oh`, `utilities-paid-by-landlord`
- `severability`: Present. Rows: `severability`
- `sex-offender-disclosure`: Confirmed absent. Rows: `edu-no-sex-offender-disclosure-ct`; batteries: 2
- `sex-offender-occupancy`: Confirmed absent. Rows: `edu-no-sex-offender-occupancy-rule-ct`; batteries: 2
- `sfr-occupancy-disclosure`: Confirmed absent. Rows: `edu-no-lease-font-rules-ct`; batteries: 2
- `shutdown-rent-protection`: Confirmed absent. Rows: `edu-no-shutdown-protection-ct`; batteries: 2
- `single-family-zone-lease-limit`: Confirmed absent. Rows: `edu-no-single-family-zone-lease-limit-ct`; batteries: 2
- `smart-access`: Confirmed absent. Rows: `edu-landlord-entry-ct`, `edu-no-smart-lock-law-ct`; batteries: 2
- `smoke-drift-waiver`: Confirmed absent. Rows: `edu-no-smoke-drift-waiver-ct`, `smoking-policy`; batteries: 2
- `smoking-policy`: Present. Rows: `edu-smoking-cannabis-ct`, `smoking-policy`
- `snow-removal`: Present. Rows: `edu-snow-removal-ct`, `snow-removal`; batteries: 1
- `social-security-defense`: Confirmed absent. Rows: `edu-no-benefit-delay-defense-ct`; batteries: 2
- `source-of-income`: Present. Rows: `edu-source-of-income-ct`
- `sprinkler-disclosure`: Present. Rows: `edu-sprinkler-notice-ct`, `sprinkler-notice-ct`
- `statute-of-frauds-lease-term`: Present. Rows: `edu-lease-term-limits-ct`
- `statutory-caps`: Present. Rows: `edu-statutory-caps-ct`
- `statutory-early-termination`: Present. Rows: `edu-statutory-early-termination-ct`; batteries: 1
- `statutory-forms`: Present. Rows: `edu-statutory-forms-ct`
- `steam-radiator-covers`: Confirmed absent. Rows: `edu-no-radiator-cover-rule-ct`; batteries: 2
- `stigmatized-property`: Present. Rows: `edu-stigmatized-property-ct`; batteries: 2
- `storage-space`: Present. Rows: `storage-space-ks-oh-ca`; batteries: 1
- `stove-refrigerator`: Confirmed absent. Rows: `appliances-included`, `edu-no-stove-refrigerator-duty-ct`; batteries: 3
- `sublet-assign`: Present. Rows: `no-sublet-assign`; batteries: 1
- `subsidized-inspection-refusal`: Confirmed absent. Rows: `edu-voucher-inspections-ct`; batteries: 2
- `subsidy-habitability-proration`: Confirmed absent. Rows: `edu-disaster-casualty-ct`; batteries: 3
- `subsidy-late-fee`: Present. Rows: `edu-late-charge-limits-ct`, `edu-subsidy-late-charge-ct`, `late-fee-ct`
- `substandard-property-receivership`: Present. Rows: `edu-code-receivership-ct`
- `surrender-end-of-term`: Present. Rows: `edu-end-of-term-possession-ct`, `surrender-end-of-term`
- `tax-escalation`: Confirmed absent. Rows: `edu-no-tax-escalation-rule-ct`; batteries: 2
- `telecom-access`: Present. Rows: `edu-cable-access-ct`; batteries: 1
- `tenancy-at-will`: Confirmed absent. Rows: `edu-no-tenancy-at-will-ct`; batteries: 2
- `tenant-caused-damage`: Present. Rows: `tenant-caused-damage-ct`
- `tenant-confidential-information`: Present. Rows: `edu-sensitive-data-privacy-ct`; batteries: 2
- `tenant-death`: Present. Rows: `edu-tenant-death-ct`, `tenant-death-ct`
- `tenant-display-rights`: Confirmed absent. Rows: `common-area-use`, `edu-no-tenant-flag-display-rule-ct`; batteries: 2
- `tenant-forward-proceedings`: Present. Rows: `tenant-forward-proceedings-ca`; batteries: 1
- `tenant-insurance-claims`: Confirmed absent. Rows: `edu-no-tenant-insurance-claim-rule-ct`, `tenants-property-insurance-ks-oh-ca`; batteries: 2
- `tenant-maintenance`: Present. Rows: `edu-tenant-duties-ct`, `edu-well-septic-ct`, `tenant-maintenance`
- `tenant-portal`: Present. Rows: `edu-tenant-portal-ct`
- `tenant-records`: Present. Rows: `edu-tenant-records-ct`
- `tenant-repair-agreement`: Present. Rows: `edu-tenant-maintenance-agreements-ct`, `tenant-repair-agreement-ct`
- `tenant-repair-remedies`: Present. Rows: `edu-habitability-remedies-ct`; batteries: 1
- `tenant-right-to-organize`: Present. Rows: `edu-retaliation-ct`; batteries: 3
- `tenant-rights-statement`: Present. Rows: `edu-protected-tenant-notice-ct`, `edu-rental-terms-summary-form-ct`, `edu-tenant-rights-statement-ct`; batteries: 1
- `tenant-screening`: Present. Rows: `edu-application-screening-fees-ct`, `edu-cannabis-ct`, `edu-fair-housing-ct`, `edu-protected-class-questions-ct`, `edu-sensitive-data-privacy-ct`, `edu-source-of-income-ct`, `edu-tenant-screening-ct`; batteries: 4
- `tenant-security-cameras`: Confirmed absent. Rows: `edu-no-tenant-camera-rule-ct`, `no-alterations`; batteries: 2
- `tenant-statutory-duties`: Present. Rows: `edu-tenant-duties-ct`, `no-disturbance`, `tenant-maintenance`
- `tenants-property-insurance`: Present. Rows: `edu-renters-insurance-unregulated-ct`, `tenants-property-insurance-ks-oh-ca`
- `term-change-notice`: Present. Rows: `edu-term-change-notice-ct`
- `termination-notice`: Present. Rows: `edu-periodic-tenancy-termination-ct`, `periodic-tenancy-notice-ct`
- `towing`: Present. Rows: `edu-private-towing-ct`, `parking-vehicle-rules-ct`
- `tpa-exemption-notice`: Not applicable. Rows: none; batteries: 1 — Not applicable: Connecticut has no statewide rent-cap or just-cause statute with a landlord exemption that must be announced by notice (California's TPA exemption notice has no Connecticut counterpart
- `tpa-notice`: Present. Rows: `edu-conversion-tenant-rights-ct`; batteries: 2
- `tpa-sunset`: Confirmed absent. Rows: `edu-no-tenant-law-sunset-ct`; batteries: 2
- `translation-duty`: Confirmed absent. Rows: `edu-no-translation-duty-ct`; batteries: 2
- `truth-in-renting`: Confirmed absent. Rows: `edu-tenant-rights-statement-ct`; batteries: 2
- `unauthorized-occupant-removal`: Present. Rows: `edu-unauthorized-occupant-removal-ct`; batteries: 1
- `unbundled-parking`: Confirmed absent. Rows: `edu-no-unbundled-parking-rule-ct`; batteries: 2
- `unconscionability`: Confirmed absent. Rows: `edu-fair-rent-commissions-ct`, `edu-unconscionability-ct`; batteries: 3
- `unpaid-damages-interest`: Present. Rows: `edu-interest-on-unpaid-amounts-ct`, `unpaid-amounts-interest-ct`
- `utilities-paid-by-landlord`: Present. Rows: `edu-tenant-paid-utilities-ct`, `utilities-paid-by-landlord`
- `utilities-responsibility`: Present. Rows: `edu-tenant-paid-utilities-ct`, `utilities-responsibility`
- `utility-allowance-cap`: Present. Rows: `edu-no-utility-overage-ct`
- `utility-apportionment`: Confirmed absent. Rows: `edu-no-utility-apportionment-ct`, `edu-tenant-paid-utilities-ct`; batteries: 2
- `utility-deposit-return`: Confirmed absent. Rows: `edu-no-utility-deposit-ct`; batteries: 2
- `utility-disclosure-attachment`: Confirmed absent. Rows: `edu-no-utility-apportionment-ct`; batteries: 3
- `utility-disconnection-notice-authorization`: Confirmed absent. Rows: `edu-no-utility-notice-authorization-ct`; batteries: 2
- `utility-interruption-submeter`: Confirmed absent. Rows: `edu-no-landlord-utility-shutoff-ct`; batteries: 2
- `utility-landlord-account`: Present. Rows: `edu-landlord-utility-account-ct`
- `utility-payment-evidence`: Present. Rows: `utility-payment-evidence`
- `utility-service-continuity`: Present. Rows: `edu-tenant-paid-utilities-ct`, `utility-service-continuity`
- `utility-shutoff-statute`: Present. Rows: `edu-landlord-utility-account-ct`, `edu-no-landlord-utility-shutoff-ct`, `edu-utility-shutoff-rules-ct`
- `utility-submetering-disclosure`: Present. Rows: `edu-no-landlord-utility-shutoff-ct`, `edu-no-utility-apportionment-ct`, `edu-submetering-ct`; batteries: 1
- `utility-transfer`: Confirmed absent. Rows: `edu-no-landlord-utility-shutoff-ct`, `edu-no-utility-transfer-cutoff-ct`; batteries: 2
- `veterans-incentive`: Not located. Rows: `edu-veterans-housing-ct`; batteries: 1
- `waiver-by-acceptance`: Present. Rows: `edu-waiver-by-acceptance-ct`, `late-fee-ct`
- `water-heater-temperature`: Confirmed absent. Rows: `edu-no-water-heater-rule-ct`; batteries: 2
- `waterbed`: Confirmed absent. Rows: `common-area-use`, `edu-no-waterbed-rule-ct`; batteries: 2
- `window-guards`: Confirmed absent. Rows: `edu-no-window-guard-rule-ct`; batteries: 2
- `written-notice-required`: Present. Rows: `edu-written-notices-ct`; batteries: 1

## 19. Step D screens (rules 40-54), one line each
- **40, formatting and placement:** run over the whole corpus after drafting, then rerun without the tenancy limb; §4. One first-page rule (summary form), two 12-point bold rules (sprinkler, liquidated damages), the plain-language format; no competing placement rules.
- **41, just cause:** § 47a-23c good cause for protected tenants (62 or older or disabled, five-plus units or mobile home parks, conversion tenants); no general statewide just-cause rule (CT-for-cause-eviction-1 to -3); `edu-for-cause-eviction-ct` (topic `for-cause-eviction`) and `edu-protected-tenant-notice-ct`.
- **42, required text inside a shared clause:** `due-at-signing-ct`, `late-fee-ct`, `security-deposit-use-ct`, `keys-ct` (§ 47a-7b lock change), `pet-policy-ct` carry the Connecticut text; no tagged clause needs a forced sentence.
- **43, cure promises:** `default-by-tenant-ct` gives no pre-suit cure for rent (nine-day grace then notice to quit), keeps § 47a-15's 15-day notice and cure only for remediable breaches, and puts the serious-nuisance and repeat-breach no-cure routes in their own sentence; no shared default clause tagged.
- **44, terms the statute turns into duties:** listed appliances (§ 47a-7(a)(4)) and landlord-paid utilities (§§ 47a-12(a), 47a-13) become duties; noted on `appliances-included`, `utilities-paid-by-landlord`.
- **45, electronic notices:** §§ 1-268(c)(2)(B), 1-270 read whole; `electronic-notice-ma` tagged (opt-in, exclusions); `notices` defers to statutory methods.
- **46, the lease as the required notice:** `landlord-identification-ct` (§ 47a-6(a)), `cic-notice-ct`, `sprinkler-notice-ct`, `tenant-death-ct` (§ 47a-11d(a)); `addendum-precedence` tagged (no optional statutory addendum must control).
- **47, knowing use of prohibited terms:** no penalty statute (`edu-no-knowing-use-penalty-ct`); CUTPA exposure and § 47a-7d(f) penalty stated; § 36a-646 consumer-collection limits stated in `collection-fee-ct`.
- **48, separate documents:** none required for a lease term; the § 47a-7(d) tenant-maintenance writing may be the lease; summary form and AM-011 are separate forms (builder flags).
- **49, collection-cost bans:** § 47a-4(a)(7) 15% cap; § 42-150bb reciprocity; `default-by-tenant-ct`, `collection-fee-ct`, `edu-attorney-fees-ct`.
- **50, "the lease controls" wording:** §§ 47a-3a(b), 47a-16a, 47a-17, 47a-7(c)-(d), 47a-25, 47a-11d(a) — each choice made in a row (tagged clause, optional clause or education).
- **51, plain-language and consumer contracts:** § 42-152 reaches residential leases (§ 42-151(b)(2)(C)); CUTPA definitions read; `edu-plain-language-lease-ct`, `edu-cutpa-ct`.
- **52, exculpation:** § 47a-4(a)(3) voids exculpation; the `-ks-oh-ca` variants tagged, the bases not.
- **53, figures in shared clauses:** late fee, deposit, notice periods and fee caps overridden or carried by CT rows; `landlords-access-mi`'s notice is "reasonable", matching § 47a-16(c); no conflicting figure left in a tagged clause.
- **54, optional clauses:** §6.1.

## Proposed SOP changes
- **Never open a preview or navigate an existing tab while a crawl runs in another tab; open new tabs with tabs_create.** A preview_start call navigated the crawl tab and killed a running crawl; it resumed from IndexedDB.
- **Run rule 40 formatting batteries without a tenancy limb first, and spell plurals ("points in size").** The filtered run missed § 42-152, whose reach to leases comes only through a definitions section, and the type-size pattern missed "eight points".
- **A text transform applied to shared rows must touch only the state's own note segment, and the assembler should check that the master's notes remain a verbatim prefix.** A quote-mark conversion changed two other states' segments before the check caught it.
- **Never apply a citation-prefix expansion inside a verbatim quote.** The P.A. expander rewrote "(Public Act 25-44 § 9)" inside a quoted DOH form instruction.
- **Write synthetic positives by hand for patterns with gap limbs ([^.]{0,n}) and test them with the context limb.** Ten generated sentences failed to match; a battery tool should refuse a known positive whose substring is absent from the named section.
- **An act-section printer must match both "Sec. N." and "Section N." headings.** Section 1 of several 2026 Connecticut acts is headed "Section 1." and was silently skipped by the printer the checkers used.
- **When a scope rule recurs across many rows (here § 47a-23c's protected tenants), fix one statutory wording before drafting and reuse it.** The check found nine sibling rows with divergent glosses across three rounds.
- **A quote checker should normalize subdivision spacing ("(2)(A)" vs "(2) (A)") and strip act page headers before matching.** Both produced false failures in Connecticut's act text.

## Proposed topic questions
- `for-cause-eviction`: "Does the protection reach mobile home parks, relatives living with the tenant, and condominium conversion tenants regardless of how many units the landlord owns? (Connecticut, § 47a-23c(a).)"
- `utility-apportionment`: "Does the state make a term unenforceable that makes the tenant pay for utilities not separately metered to the unit, and from which lease date? (Connecticut, § 47a-4(a)(11), leases entered or renewed on or after October 1, 2026.)"
- `required-disclosures`: "Must a state form be the first page of the lease? (Connecticut, § 47a-7d(d).)"
- `application-fees`: "Is the screening-fee cap indexed by an agency figure the builder must refresh each year? (Connecticut, § 47a-4d(c).)"
- `eminent-domain`: "Can the condemnation court cancel the lease and end the rent? (Connecticut, § 48-22.)"
- `tenant-screening`: "Is it a discriminatory housing practice to rely on erased criminal records? (Connecticut, § 46a-80c.)"
- `late-fee`: "Is the grace period extended when the landlord's online payment system fails? (Connecticut, § 47a-15a(a).)"
- New topic for the library generally: an optional condemnation clause (no state has one; Connecticut's § 48-22 lets the court cancel the lease).

## Sync (Claude Code, 2026-10-09)

- **Merge:** `merge-delta.py` against the kickoff base 12cb56b (the attached CSV's sha256 matches the log header; the delta's sha256 matches §11): 289 new rows, 51 updated (49 tagged shared rows, CT tag and note segment only; the two dormant CT rows). 4,574 → 4,863 rows. Connecticut has 339 active rows (84 lease clauses, 255 education rows), as the header says.
- **Basis guard:** `check-clause-basis.py` failed on `security-deposit-cap-ct`, which §5 left switched off but gave `lease_clause_basis` CONSTRAINED_TERM; the basis applies only to active lease clauses, so it was cleared (noted on the row).
- **Edited after the last check (§13):** all 21 rows read against the official text on cga.ct.gov (2025 revision with the 2026 Supplement overlaid): §§ 47a-14, 47a-15, 47a-16, 47a-18a, 47a-20, 47a-20a, 47a-23, 47a-23c(a)-(e), 47a-26j, 47a-31, 47a-4e, 47a-7a(b), 47a-11e, 7-148(c)(7)(A)(i), 7-148b, 29-305(b), (d), 16-262e, 19a-109, 19a-214. One fix: `edu-landlord-utility-account-ct` said the owner is liable for "all utility service" to the building; § 16-262e(c) names 'electricity, gas, water or heating fuel' (not telephone), so the sentence now names those. The confirmed-absence rows (§§ 17-18 batteries) rest on the pass's battery log.
- **Notice-to-quit waiver (Taylor's flag, §6.2 item 3, §10):** `notice-to-quit-waiver-ct` checked against the conditions recorded with Taylor's approval (backlog item 22) and §§ 47a-25, 47a-23(a), 47a-4(a)(1), 47a-41, 47a-3d, 47a-75(f)(2): written fixed term only, lapse of time only, never a default, not for nonpayment, breach or a following periodic tenancy, stays and federal notices kept, initials line. All present. One fix: its § 47a-23c sentence named only a tenant "62 or older or has a disability"; it now adds relatives living with the tenant and the five-unit / mobile-home-park scope (§ 47a-23c(a)(1)). Added to its notes: rent accepted after the term may create a new tenancy the waiver doesn't reach (case law not searched; § 47a-3d), and the Missouri contrast. **Missouri stays as decided:** Mo. Rev. Stat. § 441.070 (read on revisor.mo.gov) already needs 'No notice to quit ... from or to a tenant whose term is to end at a certain time', so a Connecticut-style fixed-term waiver adds nothing there; its 'special agreement' limb could only strip notice from periodic tenancies, which is what Taylor declined on 2026-09-30.
- **Statute spot-check (all match):** § 47a-15a (nine-day and four-day grace, five-day online-payment extension, lesser of $5 a day up to $50 or 5%, one charge); § 47a-4(a) (the ten compiled bans, 15% fee cap, no pre-grace discount); § 47a-4d(b)-(d) (closed up-front list, screening fee $50 plus CPI); § 47a-21(b), (c), (d)(2), (i), (a)(14) (two months or one at 62, 21 days or 15 after a forwarding address, twice the deposit, deposit-index interest with the ten-day-late exception); § 47a-25 and § 47a-23c(b). One fix: `due-at-signing-ct` promised no "application ... fee" with no exception, which could read as barring the screening-report fee § 47a-4d(c) allows; the fee is now carved out.
- **Kickoff error (mine):** the kickoff said cga.ct.gov's "current" pages are revised to January 1, 2026. They are the 2025 revision; the 2025 session's changes are in the 2026 Supplement (`/2026/sup/`), as §1.2 found. The CT pass merged both, so nothing turned on it. Claude Code's shell reaches cga.ct.gov with certificate checks off (the site sends an incomplete chain); Desktop's did not (§1.1).
- **Same-topic check:** no unexplained pairs among the 84 CT clauses.
- **Comparison with recent states:** 339 active rows against MA 394, MD 386, WV 238, KY 219, OR 224, WA 197; lease clauses 84 (MA 78, MD 80, OR 82). The topics 20 or more states have that Connecticut lacks, `tenant-repair-remedies` and `expedited-criminal-eviction`, and three more most recent states have (`tenant-right-to-organize`, `statute-of-frauds-lease-term`, `periodic-services-entry`), are each answered in §18 by a CT row under a neighboring key. Optional clauses (rule 54) match other states' range: the waiver follows Pennsylvania's precedent, narrowed; a holdover premium is declined with an education row as in Iowa and New Mexico. Deviation: 70 NEEDS_REVIEW rows (10 clauses, 60 education rows), the most of any state after Massachusetts's 42; each says why. Left as delivered and queued with Massachusetts's for the consistency pass (backlog).
- **Citations file:** `lease-clause-citations-CT.csv` (339 rows: 263 CITED, 65 CONFIRMED_ABSENT, 11 GENERIC shared clauses tagged as written). "§§ X to Y" ranges are expanded section by section; three-part numbers are regulations except title 42a's UCC. Off-point battery hits named in notes appear in the citation list, as in the Maryland and Massachusetts files.
- **Legal watch:** `stateConfig.js` CT entry reads the "Conn. Gen. Stat. §" parts and queries `"section 47a-21 of the general statutes"` (the phrase Connecticut bills amend by); 462 sections, 132 of them only from absence rows' battery hits; lead CFR and § 4852d checks; three manual items (uncompiled 2026 acts; agency figures and forms; regulations and court rules). `legal-watch-ct.yml` is held until after January 12, 2028 (first run February 12, 2028, day 12 at 14:00 UTC).
- **Topic questions:** six of the seven added (reworded into the general form: `for-cause-eviction`, `utility-apportionment`, `required-disclosures`, `eminent-domain`, `tenant-screening`, `late-fee`). Not added: the `application-fees` CPI question (already asked: "Application fee cap with annual CPI adjustment"), and the optional condemnation clause, which is a library idea, not a question (backlog consistency pass).
- **Builder flags (§10):** added to the backlog's Connecticut known-issues line; no new `{{variable}}`s.
- **SOP 1.66:** CT 2 (rule 40), CT 3 (rule 62), CT 4, 7 and 8 (rule 59), CT 5 (rule 19) and CT 6 (rule 16) adopted; CT 1 rejected as already in rule 19. CT conformance column added.
- **Guards:** check-gap-discovery `--all`, checklist reconciliation, clause basis, section pointers and checkConfigIds all pass; generated files and `lease-clause-topics.md` (344 topics, 678 questions) regenerated.
