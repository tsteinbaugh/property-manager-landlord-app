# Oregon — lease-clause decision log (state #35)

**Date:** 2026-10-04 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule 9 triggers needed it, because the whole Oregon Revised Statutes, the whole Oregon Administrative Rules, the Oregon Constitution and every 2026 session law were loaded, saved and hash-matched before the first battery, giving full-text proof of absence and cross-chapter search directly (rule 9). Claude can't switch research mode on or off; only Taylor can.
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`ORS 90.300(7)(a)`, `ORS 90.260, 90.302`, `OAR 333-061-0036`, `Or. Laws 2026, ch. 23, § 3`, `Or. Const. art. I, § 17`), checked by script (§8). No case is cited.
**Scope:** Oregon state law only. Portland, Milwaukie and other local rental ordinances are flagged, not resolved (rule 3); the state preempts local rent control (ORS 91.225; `edu-rent-control-preemption-or`). Named and out of scope: manufactured dwelling and floating home facility tenancies (ORS 90.505 to 90.850, with the related sale notices in ORS 90.860 to 90.875; read whole, differences flagged in rows), the exclusions in ORS 90.110 and 90.113 (`edu-scope-or`), drug and alcohol free housing programs (ORS 90.243), group recovery homes (ORS 90.440), commercial and agricultural leases.
**Input CSV:** `lease-clauses.csv`, **3,336 rows, 17 columns, 3,217 active (773 lease clauses, 2,444 education)**, sha256 6284a26149416de8de8e73d5eefc2a316aa862d9c4458cc9198e92ee98cf2511; every per-state active count matched the kickoff exactly (rule 23). Three dormant OR rows existed (rule 25, §5). This is Oregon's only Desktop chat (rule 8).
**Output CSV:** `lease-clauses-OR-delta.csv`, **223 rows, 17 columns, CRLF** (sha256 b2ecc47b263ea07cbe45a5020a75b732cb8870b676120ff224c482eedc27f20d): 31 existing rows with `OR` added to `states`, an `OR:` note appended and `last_checked` 2026-10-04; the 2 dormant OR rows rewritten and activated; and 190 new OR rows. **OR active after merge: 223 (82 lease clauses: 31 tagged + 51 OR clauses; 141 education), all VERIFIED.** Merged with the master: 3526 rows; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: ORS chapter 90 read whole (169 sections plus dated Note versions) and ORS 105.100 to 105.168 read whole (37 sections); both section lists diffed by script against every citation in the OR rows: chapter 90 and ORS 105.100-105.168 fully cited; ORS chapter 91 (24 sections) diffed beside them, every uncited section listed with its reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Housing Authority of Clackamas County Public Housing Lease mapped section by section; Oregon State University family housing contract read as a second lead; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 80 scenarios, Claude-generated on the AZ §18.1 model plus Oregon-specific ones, run against the final rows; every scenario answered by a row) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole ORS (689 chapters; 39,614 searchable entries), the whole OAR (181 chapters, 3,159 divisions, 40,864 rules), the Oregon Constitution (383 entries) and all 142 Oregon Laws 2026 chapters loaded and hash-matched before the first battery and searched with 189 battery records (179 ids); control 0 hits in every battery; every failed known positive recorded and rerun; relied-on hits read) |
| Primary text read | **Saved and hash-matched, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole ORS (2025 edition, every chapter page with history lines and Notes), the whole OAR as published 2026-10-04, the Oregon Constitution, every 2026 session law as enrolled, a chapter 90-91 check copy, and the real leases. **Read whole:** ORS chapters 90 and 91, ORS 105.100-105.168, Or. Laws 2026, chs. 23, 60, 61 and 108, and the leases; every other cited section, rule or act read section-open. **Cases:** none read (§1.4). |
| Step B — tag first | **Done.** 31 existing rows tagged OR (§2.1). 43 shared clauses screened and not tagged (§2.2): 36 replaced by OR overrides or answered by OR rows, 4 answered by tagged variants (`parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `services-utilities-provided-ks-oh`, `possession-delay`), 3 resting on other states' statutes. All 699 single-state clauses screened as a triage (§2.3); none tagged. No shared text edited. |
| Step E — new OR rows | 51 OR lease clauses (2 rewritten dormant rows that also override shared clauses, 21 other overrides including `security-deposit-return-or` for the blank-states parent, required and conditional disclosures, options under rule 54) and 141 education rows (§3). |
| Rule 25 | `late-fee-limit-or` and `nsf-fee-limit-or` rewritten and activated; `habitability-timeline-or` left switched off (§5); the blank-states parent `security-deposit-return` answered by `security-deposit-return-or`. |
| Step D screens | All run (§19). ORS 90.245 (prohibited terms), ORS 90.302 (closed fee list) and ORS 90.427 (for-cause termination after the first year of occupancy) were the decisive screens: they turned the default, early-termination, holdover, surrender, late-fee, returned-payment, key, deposit, pet and 'not liable' clauses (§2.2). |
| Optional clauses (rule 54) | 14 offered (§6.1); the declined options each have an education row. |
| Questions to Taylor (rule 76) | None needed (§6.2). Every call was legal or drafting and is recorded in §6.3. |
| Proof of absence | Absence rows cite their battery, hit count and known-positive result; every topic in the reference ends Present, Answered elsewhere, Confirmed absent, Not offered or Not applicable (§18; no topic is left Not located). |
| Independent check | Separate agents checked every row against the saved sources in five rounds (§13): round 1 all 223 rows (8 ERROR, 167 FIX, 68 NOTE), then each round only the rows edited after the last (127, 67, 29 and 17 rows), plus a final round on the last edits and a separate check of this log. |
| Currency | ORS 2025 edition with Notes; dated versions of ORS 90.303 (January 2, 2028), 105.163 (January 2, 2028) and 105.136 (September 28, 2027) read beside the current text; ORS 90.321 operative January 1, 2027; every 2026 session law screened and the four that change tenancy law read as enrolled (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Channel:** the built-in browser loaded each official page and saved JSON to Taylor's Downloads folder (approved in this chat); each file was staged into the workspace and hash-matched (browser SHA-256 = file SHA-256). Files (`sources/registry.tsv`):
  - `or-ors-corpus-20261004.json` (70,923,775 bytes, sha256 3cc08ae52b523f5b5e489530021bf620304ed4d23ba1ee7a92b57d1e7ae743c2): https://oregonlegislature.gov/bills_laws/ors/ors<ch>.html, all 689 chapter pages of the 2025 edition.
  - `or-ors090-091-check-20261004.json` (572,999 bytes, sha256 799a227e87c00179cd2e6357300a8f5fdf660b81f89d2500fac418960226395e): check copy of ORS chapters 90 and 91, identical to the corpus text.
  - `or-constitution-20261004.json` (416,428 bytes, sha256 f838cebf9de06d5513075966e39ad3c5dfc2e64628d4df49dcd9b5fff76e9fe2): https://www.oregonlegislature.gov/bills_laws/Pages/OrConst.aspx.
  - `or-2026-session-laws.json` (6,964,187 bytes, sha256 a33358ab069ef15033710044ec99aed8de1520773d2bed4612e48e71cf96bf01): oregonlegislature.gov/bills_laws/lawsstatutes/2026orLaw0001.pdf to 2026orLaw0142.pdf and the 2026 act-reference table, text by pdf.js 3.11.174.
  - `or-oar-corpus-20261004.json` (116,173,000 bytes, sha256 1b08ebd087c54c44d98eec507f245fbb0bd1dde44eef2b97e7431d7665d39460): https://secure.sos.state.or.us/oard/ every displayDivisionRules page (181 chapters, 3,159 divisions). It supersedes a first export whose text field was empty (wrong page element); that file was never used.
  - `or-real-lease-hacc.json` (44,949 bytes, sha256 d5c057141a4eb63f2844be5abf72900546ba4761391e0ace51793a32715161b3) and `or-real-lease-osu.json` (29,920 bytes, sha256 8344e9f478591b2883237eb29456818361f83a3c8d54c00065eee9452000bb96): §15.
- **Citation format:** the kickoff's; log references written 'OR log §N'. One quote is cited to an uncompiled 2025 act through the ORS note that prints it (`ORS 105.137 note, Or. Laws 2025, ch. 598, § 2(4)`).

### 1.2 Currency (rule 16)
- **Compiled text:** ORS 2025 edition as published on oregonlegislature.gov on 2026-10-04, with history lines and Notes. Dated versions printed in Notes were kept beside the current text (394 dated versions). Kickoff lead 1: ORS 90.303's version operative January 2, 2028 (Or. Laws 2021, ch. 39, §§ 10, 12; Or. Laws 2025, ch. 226, § 5) drops the emergency-period screening limbs and renumbers (6) as (5); ORS 90.321 (drinking-water testing) is operative January 1, 2027 (Or. Laws 2025, ch. 574, § 4); ORS 105.163's dated version (January 2, 2028) drops the emergency-period limb; ORS 105.136's form changes September 28, 2027 when the Medicaid new-parent note (Or. Laws 2025, ch. 598) is repealed. Every row citing these states the version it relies on; §10 lists the dates.
- **2026 session (Eighty-third Legislative Assembly, 2026 regular session):** all 142 chapters loaded and screened by title, by every ORS section number they amend, and by battery. Four change tenancy law and were read as enrolled:
  - Or. Laws 2026, ch. 23 (SB 1523; effective June 5, 2026, § 8; applies to agreements entered into before, on or after that date, § 7(1)): payment by check or another commercially reasonable method, no required electronic payment, no late fee or termination after refusing such a payment (§ 3, added to ORS chapter 90 but not yet compiled); tenant portals (§§ 2, 4; ORS 90.100 renumbered from (52) on); ORS 90.302(7)(d) processing fees (§ 5); ORS 90.320(1)(m) (§ 6). Rows: `acceptable-payment-methods-or`, `nsf-fee-limit-or`, `late-fee-limit-or`, `edu-tenant-portal-or`, `edu-security-devices-or`, `edu-scope-or`.
  - Or. Laws 2026, ch. 60 (HB 4120; effective January 1, 2027 per the filed act; § 3 applies it to existing agreements): ORS 479.305 'smoking' defined as lit tobacco and renumbered; ORS 90.262(2) mid-tenancy indoor smoking-ban exception. Rows: the `smoking-policy-or` choice group, `edu-smoking-or`, `edu-term-change-notice-or`, `edu-rules-regulations-or`.
  - Or. Laws 2026, ch. 61 (HB 4123; effective June 5, 2026, § 3): tenant confidential information (§ 2). Rows: `edu-tenant-confidential-information-or`, `actual-notice-method-or`, `utility-payment-evidence` note.
  - Or. Laws 2026, ch. 108 (HB 4037; effective June 5, 2026, § 31): natural disasters (§§ 20-21). Rows: `edu-natural-disaster-or`, `tenant-caused-damage-or`, `edu-statutory-early-termination-or`.
  - Screened and not relied on for tenancy rules: ch. 49 (land use), ch. 57 (amends ORS 659A.885; noted in `edu-fair-housing-or`), ch. 79 (housing finance; restates ORS 197A.465 from January 1, 2028; noted in the rent-control rows), ch. 118 (cannabis; amends ORS 475C.792 from January 1, 2027, leaving (12) unchanged), and the rest by battery hits read in context (§17).
- **OAR:** as published 2026-10-04 including temporary rules in effect (marked 'Temporary rule language in effect until …' in the rule heading); rows relying on a temporary rule say so (`edu-pool-rules-or`).

### 1.3 Corpus and method (rule 19)
- **Loaded before the first battery:** ORS (689 chapter pages; tables of contents list 39,221 sections, 39,220 parsed with bodies; 394 dated versions; repealed and renumbered stubs excluded; 39,614 searchable entries); Constitution (36 articles in the table, 383 entries; the 4 extra article blocks are wholly repealed articles); 2026 session laws (142 chapters; line-break hyphens joined for searching); OAR (3,159 divisions, 40,864 rules; the split proven by comparing rule-number lines with 'Statutory/Other Authority' lines per division: 28 divisions differ, all because a rule printed without an authority line ('Text in ORMS', reserved or reverted versions), none because a number was missed; 80 divisions are header-only on the live site, three re-fetched live to confirm). Total 81,003 entries, the scope in every whole-corpus battery.
- **Crawl note:** the OAR crawl ran sequentially with a Web Worker timer after hidden-tab throttling slowed a setTimeout loop; for a short time two workers ran in parallel, against rule 19's sequential rule for a throttled site; their 24 records were validated against the rule-count proof and kept (§10 lesson).
- **Engine:** Python over the saved corpus (`work/engine.py`): normalized text, headings reported separately as heading-only hits, an optional tenancy-context limb recorded with each battery, control term `zqxjvwk` in every battery (0 hits in all). Synthetic positives test the pattern limb in the drafting style; real positives test pattern and context together (a design change made before the first recorded run, after a preview showed synthetic sentences without a tenancy word failing the context limb).
- **Batteries:** 189 records, ids 1-10 (formatting), 20-150 (topics), 200-242 (added for the dormant rows, the topic canvass and the independent checkers' absence findings), in `batteries/or-batteries.jsonl`. Failures, all recorded and rerun: 204 → 205 and 206; 205 → 206; 212 → 230; 216 → 231; 220 → 232; 221 → 233; 223 → 234; 225 → 235; 228 → 236. Batteries 218-227 were recorded twice because a timed-out run was restarted; the citation script uses the last record of each id, and the duplicates are identical in hits. Not cited in rows or §18: 2, 3, 4, 5, 6, 8, 56, 64, 65, 75, 84, 88, 204, 205, 211, 212, 216, 220, 221, 223, 225, 227, 228, 237 (formatting screens read in §19, screens with nothing to report, or batteries replaced by reruns).
- **Zero-hit batteries with only synthetic positives (rule 19):** 21 (self-cure; the checkers' wider searches found nothing), 46 → 232 (licensing), 70 → 227, 80 → 234, 90 → 233 and 145 → 231 have wider reruns; 27 (fee in lieu of deposit), 48 (foreign ownership), 71 (double letting), 82 (contamination disclosure) and 238 (attornment) stand on their own patterns, each written in the absent rule's own vocabulary and checked by an independent checker's search.
- **Boundary:** ORS, OAR, the Constitution and the 2026 session laws. Case law, court rules (UTCR and local supplementary rules), local ordinances, federal law and codes adopted by reference (the Oregon Fire Code, the Oregon Plumbing Specialty Code, the Model Aquatic Health Code) were not searched, and nothing is claimed about them.
- **Tools:** battery citations in rows and §18 are generated from the saved log (`work/rowlib.py`, which refuses a failed battery); every single-quoted passage registered with `Q()` is checked word for word against the cited section (166 quotes; §8).

### 1.4 Section-open vs recall; case law (rules 15, 21)
- Every OR note ends 'Rule 15: written section-open.'; no row was written from recall.
- **Case law: not searched.** Each question the statutes leave open is labelled in its row: the penalty doctrine for late fees, early-termination fees and concessions (`edu-late-fee-or`, `early-termination-or`, `edu-rent-concession-or`); whether a contractual interest rate is a fee or liquidated damages (`edu-unpaid-damages-interest-or`); pre-dispute jury waivers (`edu-jury-waiver-or`); certified funds after a bounced check and electronic checks under ORS 30.701 (`edu-returned-payments-or`); the Unlawful Trade Practices Act's reach (`edu-consumer-protection-act-or`); whether a residents-only pool question needs the agency (resolved by OAR, `edu-pool-rules-or`); whether ORS 90.302(7)(f)(A)-(D) are cumulative (`hoa-compliance-or`).

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged OR as written (31)
Each tagged row keeps its shared text; the Oregon note is appended after '| OR:'.
- `rent-payment` (Rent & Payment): Applies as written. 'Except as permitted by applicable law' preserves the tenant's statutory deductions (essential services ORS 90.365(1)(a); minor repairs ORS 90.368(2); utility shutoffs ORS 90.315(5)-(7)) and the foreclosure application of a deposit (ORS 90.367). Rent is payable 'without demand or notice at the time and place agreed upon' (ORS 90.220(7)(a)) and 'may not be considered to be due prior to the first …
- `existing-condition` (Tenant Responsibilities): Applies as written. Oregon has no move-in checklist statute (OR battery 26 (move-in condition inspection or checklist): 24 hits, control 0; known positives passed (0 real sections, 2 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); the acknowledgment is evidence, not a waiver: a rental agreement may not provide that the tenant waives chapter 90 rights (ORS 90.245(1)(a)) and may not permit receipt of …
- `permitted-occupants` (Tenant Responsibilities): Applies as written. Limiting occupancy to listed persons is the term ORS 90.403(1)(b) needs ('prohibited subleasing or allowing another person to occupy the premises without the written permission of the landlord'); any occupancy guideline may not be more restrictive than two people per bedroom (ORS 90.262(3)) and may not discriminate on familial status (ORS 659A.421). `edu-occupancy-limits-or`. (OR battery 77 …
- `no-disturbance` (Tenant Responsibilities): Applies as written; tracks the tenant's duty to 'Behave and require other persons on the premises with the consent of the tenant to behave in a manner that will not disturb the peaceful enjoyment of the premises by neighbors' (ORS 90.325(1)(g)). Breach is a for-cause ground with Oregon's notice and cure (ORS 90.392); the most serious conduct supports a 24-hour notice (ORS 90.396). Victim protections (ORS 90.449) …
- `utilities-responsibility` (Tenant Responsibilities): Applies as written. If a tenant-paid utility also serves other areas, the landlord must disclose it in writing at or before commencement (ORS 90.315(2); `shared-utility-disclosure-or`). If the tenant can't get service because of a prior tenant's or owner's debt, the tenant may pay and deduct or terminate (ORS 90.315(5)-(6)). A utility may not shift a tenant's unpaid bill to the owner without consent, except a …
- `utility-service-continuity` (Tenant Responsibilities): Applies as written (no Oregon statute conflicts (OR battery 59 (utility disconnection rules reaching landlords and tenants): 10 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142) (OR battery 230 (interruption or failure of utilities and essential services (rerun of 212)): 39 hits, control 0; known positives passed (2 real sections, 1 synthetic); …
- `utility-payment-evidence` (Tenant Responsibilities): Applies as written (no Oregon rule against it). The evidence is the tenant's own record; a landlord's disclosure of a tenant's financial information is limited by Or. Laws 2026, ch. 61, § 2 (effective June 5, 2026, § 3; `edu-tenant-confidential-information-or`).
- `no-sublet-assign` (Tenant Responsibilities): Applies as written. No Oregon statute requires a landlord to consent reasonably to a sublease or assignment (OR battery 146 (subletting and assignment consent): 92 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); the clause's written-permission term is what the 24-hour unauthorized-possessor remedy requires (ORS 90.403(1)(b)). 'Cause for …
- `joint-liability` (Tenant Responsibilities): Applies as written. Victims and their immediate family released under ORS 90.453 owe no rent or damages after the release date (ORS 90.453(4)); remaining tenants stay bound (ORS 90.453(5), 90.456); an excluded perpetrator stays jointly liable for rent and damages before exclusion (ORS 90.445(3), 90.459(3)(c)). (OR battery 148 (joint and several liability of co-tenants): 9 hits, control 0; known positives passed (1 …
- `utilities-paid-by-landlord` (Landlord Responsibilities): Applies as written. Rule 44: a 'material noncompliance by the landlord with the rental agreement' is a trigger for the tenant's ORS 90.360(1) termination and damages remedies, and an essential service supplied 'contrary to the rental agreement' triggers ORS 90.365, so this list becomes a remedy trigger. Rule 54t / IL 3: if a landlord-paid utility is shut off for nonpayment the tenant may pay and deduct or terminate …
- `appliances-included` (Landlord Responsibilities): Applies as written. Rule 44: supplied appliances are maintained 'if supplied or required to be supplied by the landlord' (ORS 90.320(1)(i)), and a listed appliance is a rental-agreement promise under ORS 90.360(1); a cooking appliance or refrigerator the landlord didn't supply or agree to supply is not an essential service duty (ORS 90.365(4)).
- `possession-delay` (Default & Termination): Applies as written. No Oregon statute addresses a landlord's failure to deliver possession at the start of a tenancy (OR battery 20 (delivery of possession at the start of a tenancy): 17 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); ORS 90.147(1) only defines when delivery occurs. The clause gives the tenant a contractual right. …
- `notices` (Notices & General): Applies as written. Rule 46: Oregon lets the written agreement add mail-and-attachment service (ORS 90.155(1)(c); `notice-mail-attach-or`) and an agreed actual-notice method (ORS 90.150(4); `actual-notice-method-or`); both optional clauses say they control over this clause. E-mail service needs a separate addendum signed after move-in (ORS 90.155(1)(d)). The clause's deference to statutory method, form and timing …
- `governing-law` (Notices & General): Applies as written ({{state}} fills as Oregon). Local ordinances (Portland, Milwaukie and others) flagged, not resolved (rule 3); local rent control is preempted except as ORS 91.225(3)-(5) and ORS 197A.465(4) allow.
- `severability` (Notices & General): Applies as written. A prohibited provision 'is unenforceable' (ORS 90.245(2)) and a court may enforce the remainder without an unconscionable provision (ORS 90.135(1)(a)); severance does not avoid the penalty of up to three months' periodic rent if the landlord deliberately uses a provision known to be prohibited and attempts to enforce it (ORS 90.245(2); `edu-knowing-use-penalty-or`).
- `entire-agreement` (Notices & General): Applies as written. Changes by written notice that Oregon allows: rent increases (ORS 90.323), late-charge changes in periodic tenancies (ORS 90.260(3)), renter's insurance for an existing month-to-month tenancy (ORS 90.222(3)), new public service charges (ORS 90.315(4)(d)), and rules that meet ORS 90.262(1) (a rule adopted mid-tenancy that substantially modifies the bargain needs the tenant's written consent, ORS …
- `addendum-precedence` (Notices & General): Applies as written. Rule 46: Oregon requires no optional separate document that must control over the lease; its separate writings (the e-mail notice addendum, ORS 90.155(1)(d); the showing agreement, ORS 90.322(1)(d); the electronic refund addendum, ORS 90.300(13); the temporary occupancy agreement, ORS 90.275) are signed after or apart from the lease and amend it as later signed writings under `entire-agreement`. …
- `electronic-signatures` (Notices & General): Applies as written. Electronic signatures and records bind parties who agreed to transact electronically (ORS 84.013(2), 84.019); the right to refuse other electronic transactions can't be waived (ORS 84.013(3)); a statute's required delivery method still controls (ORS 84.022(2)); and Oregon's electronic transactions act itself does not authorize using an electronic record to deliver notice of default, eviction or …
- `assigned-parking-space` (Parking & Storage): Applies as written. Reassignment on notice is subject to ORS 90.262 rule limits, which the clause preserves; a vehicle may be towed from an assigned space only with the tenant's agreement at the time of the tow (ORS 90.485(4)).
- `parking-ks-oh-ca` (Parking & Storage): Applies as written (rule 52: Oregon voids exculpation for the landlord's negligence, ORS 90.245(1)(c), so the base `parking` with 'not liable for damage to or theft of a vehicle' is not tagged; this variant without it is).
- `storage-space-ks-oh-ca` (Parking & Storage): Applies as written (rule 52: the base `storage-space` is not tagged because its 'not liable' sentence reaches the landlord's negligence, ORS 90.245(1)(c)).
- `guest-policy` (Rules & Regulations): Applies as written. No Oregon statute limits guest stays in ordinary tenancies (OR battery 144 (guest stays and visitor limits): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); a guest or temporary occupant is not a tenant (ORS 90.100 'Tenant' excludes 'a guest or temporary occupant'), and a written temporary occupancy agreement is …
- `guest-policy-day-limit` (Rules & Regulations): Applies as written (see `guest-policy`; no Oregon guest-stay statute (OR battery 144 (guest stays and visitor limits): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)).
- `fire-safety-grilling` (Rules & Regulations): Applies as written, as a lease rule. No Oregon statute or rule text limits or requires a landlord's grill or open-flame rule (OR battery 150 (open flame, barbecue and grill rules): 66 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142). The Oregon Fire Code is the 2024 International Fire Code as amended, adopted by reference (OAR …
- `inspection-rights` (Rules & Regulations): Applies as written: inspection is a lawful purpose of entry (ORS 90.322(1)) and the clause defers to the Access & Entry terms (`landlords-access-or`: 24 hours' actual notice, reasonable times); 'Tenant will allow' matches the tenant's duty not to 'unreasonably withhold consent' (ORS 90.322(2)), and a tenant may still deny a particular entry by actual notice (ORS 90.322(1)(f)).
- `lead-based-paint` (Disclosures): Applies as written (federal disclosure). Oregon adds no lease disclosure; renovation of pre-1978 housing requires licensed and certified contractors (ORS 701.505-701.515) (`edu-lead-based-paint-or`). (OR battery 41 (lead-based paint): 62 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `assistance-animal-accommodation` (Pets): Applies as written. Oregon: no pet security deposit for a service or companion animal a tenant with a disability requires as a reasonable accommodation (ORS 90.300(4)); refusing reasonable accommodations is an unlawful practice (ORS 659A.145(2)(g)); damage remains the tenant's (ORS 90.325(2)(b)). Oregon's civil rights rules support each part of the clause: no verification where the need is readily apparent or …
- `extended-absence-notice-ks` (Tenant Responsibilities): Applies as written; it tracks Oregon closely: 'Unless otherwise agreed, the tenant shall occupy the dwelling unit only as a dwelling unit', and 'The rental agreement may require that the tenant give actual notice to the landlord of any anticipated extended absence from the premises in excess of seven days no later than the first day of the extended absence' (ORS 90.340); willful failure: 'the landlord may recover …
- `tenant-forward-proceedings-ca` (Tenant Responsibilities): Applies as written (a contractual duty only; no Oregon rule on attornment or forwarding legal process (OR battery 238 (attornment and tenant duty to forward legal process (rerun of 237)): 0 hits, control 0; known positives passed (0 real sections, 2 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)).
- `rental-application-accuracy` (Default & Termination): Applies as written. A material misrepresentation made a material breach is a for-cause ground with notice (ORS 90.392(2)(a)); separately, intentional substantial false information about a criminal conviction within the past year, material to the landlord's acceptance of the application, supports a 24-hour notice if acted on within 30 days of discovery (ORS 90.396(1)(e)(A)-(C)). The last sentence excludes information …
- `services-utilities-provided-ks-oh` (Landlord Responsibilities): Applies as written. Rule 44: services 'expressly specified' are rental-agreement duties under ORS 90.360(1) and 90.365(1); the landlord must provide and maintain a water supply capable of producing hot and cold running water and adequate heating facilities (ORS 90.320(1)(c)-(d)), but need not supply or pay for the utility service itself, which a tenant may carry under the rental agreement (ORS 90.315); 'essential …

### 2.2 Screened and not tagged (43)
- `no-alterations`: its sentence that an approved alteration 'will remain part of the property at the end of the Term unless Landlord requires its removal' would reach an EV charging station installed under ORS 90.462, which is the tenant's personal property unless the parties negotiate a different outcome (ORS 90.462(8)); replaced by `no-alterations-or`
- `keys`: its 're-key ... and charge the cost' when Tenant 'requires a replacement' during the tenancy is a landlord-imposed charge outside the ORS 90.302 list (only the cost to replace a key the tenant lost, at the tenant's request, is outside the fee rules, ORS 90.302(7)(c)); replaced by `keys-or`
- `late-fee`: grace period left to the builder; Oregon needs the fourth-day rule and the written-agreement contents (ORS 90.260(1)); replaced by `late-fee-limit-or`
- `late-fee-ne`: same; one late-charge clause per state (`late-fee-limit-or`)
- `returned-payments`: certified-funds demand and ceiling-only fee (rule 53); Oregon must allow payment by check (Or. Laws 2026, ch. 23, § 3); replaced by `nsf-fee-limit-or`
- `due-at-signing`: 'not credited against Rent' contradicts the last month's rent deposit rule (ORS 90.300(9)); move-in fees barred (ORS 90.302(1)); replaced by `due-at-signing-or`
- `application-of-payments`: Oregon fixes the order notwithstanding the lease (ORS 90.220(9)); replaced by `application-of-payments-or`
- `security-deposit-use`: deducts for guests' damage without ORS 90.325(3) exceptions; replaced by `security-deposit-use-or` (REQUIRED listing, ORS 90.300(3))
- `security-deposit-return`: blank-states parent (rule 25 family); replaced by `security-deposit-return-or`
- `residential-use-only`: would prohibit a family child care home (ORS 90.358(1)); replaced by `residential-use-only-or`
- `smoking-policy`: Oregon requires a smoking-policy disclosure in every rental agreement in one of three forms (ORS 479.305; ORS 90.220(4)); replaced by the choice group `smoking-policy-or` (default), `smoking-limited-areas-or`, `smoking-allowed-or`
- `acceptable-payment-methods`: lets Landlord require electronic payment (Or. Laws 2026, ch. 23, § 3(2)); replaced by `acceptable-payment-methods-or`
- `acceptable-payment-methods-nj`: same; `acceptable-payment-methods-or`
- `tenant-maintenance`: no exception for damage a tenant is 'not responsible' for (ORS 90.325(3)); replaced by `tenant-maintenance-or`
- `services-utilities-provided`: one clause per topic; `services-utilities-provided-ks-oh` tagged
- `landlord-maintenance`: guest carve-out reaches perpetrator damage (ORS 90.325(3)(b)); replaced by `landlord-maintenance-or`
- `landlords-access`: 'right of reasonable access' ignores the tenant's right to deny consent (ORS 90.322(1)(f)) and the after-entry notice; replaced by `landlords-access-or`
- `landlords-access-mi`: same; `landlords-access-or`
- `default-by-tenant`: 'reasonable costs and expenses' is not an allowed fee (ORS 90.302(1)) and risks an unlawful collection practice (ORS 646.639(2)(n)); replaced by `default-by-tenant-or`
- `default-by-tenant-ks-ne`: same; `default-by-tenant-or`
- `surrender-end-of-term`: 'Upon the expiration' doesn't end a tenancy after the first year (ORS 90.427(4)(c)); replaced by `surrender-end-of-term-or`
- `surrender-end-of-term-mn-nd`: same, and points to a section Oregon rows lack; `surrender-end-of-term-or`
- `surrender-end-of-term-ks-ne`: same; `surrender-end-of-term-or`
- `early-termination`: fee can exceed 1.5 times monthly rent (ORS 90.302(2)(e), (5)); landlord limb adds a cause (ORS 90.427(4)(a)); replaced by `early-termination-or`
- `early-termination-ks`: same fee; `early-termination-or`
- `holdover`: ceiling-only damages (rule 53) and treats the Term's end as the tenancy's end (ORS 90.427(4)(c), (11)); replaced by `holdover-or`
- `holdover-ca`: same end-of-term assumption; `holdover-or`
- `tenants-property-insurance`: 'not liable' reaches negligence (ORS 90.245(1)(c)); insurance outside ORS 90.222; replaced by `renters-insurance-or`
- `tenants-property-insurance-ks-oh-ca`: requires insurance without the ORS 90.222(5) description and exemptions; `renters-insurance-or`
- `pet-policy`: indemnity reaches the landlord's negligence (ORS 90.245(1)(c)); entry and removal of a pet beyond ORS 90.322(5); replaced by `pet-policy-or`
- `pet-insurance-requirement`: insurance requirement outside ORS 90.222; replaced by `pet-insurance-requirement-or`
- `parking`: 'not liable' reaches negligence (ORS 90.245(1)(c)); `parking-ks-oh-ca` tagged
- `parking-vehicle-rules`: charges for tags (ORS 90.302(1)) and towing for expired registration (ORS 90.485(7)); replaced by `parking-vehicle-rules-or`
- `parking-vehicle-rules-id`: charges for tags and adds booting; `parking-vehicle-rules-or`
- `storage-space`: 'not liable' reaches negligence (ORS 90.245(1)(c)); `storage-space-ks-oh-ca` tagged
- `common-area-use`: blanket fastening ban restricts portable cooling devices beyond ORS 90.355(2); replaced by `common-area-use-or`
- `landscaping-irrigation`: shifts maintenance tasks without the stated consideration ORS 90.320(2)(c) requires for any dwelling; answered by `tenant-maintenance-tasks-or` (rule 48)
- `snow-removal`: same; `tenant-maintenance-tasks-or`
- `hoa-compliance`: association fines passed through without the ORS 90.302(7)(f) conditions; replaced by `hoa-compliance-or`
- `ev-charging-shared-area-co`: rests on Colorado's and Illinois's EV statutes (rule 26); Oregon's rule is ORS 90.462 (`edu-ev-charging-or`)
- `ev-charging-end-of-tenancy-co`: same
- `utility-allowance-cap-co`: rests on Colorado's statute (rule 26); Oregon's billing rules are ORS 90.315(4) (`utility-billing-or`)
- `possession-delay-ca`: promises a termination 'as the law permits' that no Oregon statute gives (OR battery 20 (delivery of possession at the start of a tenancy): 17 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); base `possession-delay` tagged

### 2.3 Single-state clauses screened (699)
All 699 active single-state clauses were screened. 319 rest on another state's named statute, form, program or figure (a names-state screen of title and body, verified by script) and were set aside. The other 380 were read in full by a triage agent against the saved ORS (`work/agents/triage-agent.tsv`): 67 TAGGABLE, 172 OR_ROW_NEEDED, 49 NO_OR_ANALOGUE, 92 VOID_IN_OR. None was tagged: rule 26's basis check (IA 5) overruled all 67 TAGGABLE verdicts, because each rests on its own state's statute or note (for example the cannabis-cultivation clauses of IL, MO, OK, MI, NM and MT, which Oregon answers with its own `cannabis-cultivation-or`, and `firearm-carry-rules-tn`). Every OR_ROW_NEEDED topic is answered by an OR row or a §18 status. The single-state `criminal-activity-ks` and `serious-misconduct-prohibition-ga` lack Oregon's victim carve-out and are answered by `criminal-activity-or`.

## 3. New OR rows
### 3.1 OR lease clauses (51)
- `late-fee-limit-or` — Late Charge (Rent & Payment; CONSTRAINED; CONSTRAINED_TERM | REQUIRED_DISCLOSURE: ORS 90.260(1)(b); supersedes `late-fee`; topic `late-fee`): ORS 90.260(1)(a)
- `nsf-fee-limit-or` — Dishonored Check Fee (Rent & Payment; CONSTRAINED; REQUIRED_DISCLOSURE: ORS 90.302(1) | CONSTRAINED_TERM; supersedes `returned-payments`; topic `returned-payments`): Or. Laws 2026, ch. 23, § 3(1)
- `due-at-signing-or` — Amounts Due Upfront (Rent & Payment; CONSTRAINED; CONSTRAINED_TERM | SERVES_LANDLORD; supersedes `due-at-signing`; topic `due-at-signing`): ORS 90.300(9)
- `application-of-payments-or` — Application of Payments (Rent & Payment; CONSTRAINED; CONSTRAINED_TERM; supersedes `application-of-payments`; topic `application-of-payments`): ORS 90.220(9)(a)
- `acceptable-payment-methods-or` — Acceptable Forms of Payment (Tenant Responsibilities; CONSTRAINED; CONSTRAINED_TERM | SERVES_LANDLORD; supersedes `acceptable-payment-methods`; topic `acceptable-payment-methods`): Or. Laws 2026, ch. 23, § 3(1)
- `rent-payment-location-or` — Place of Payment for Nonpayment Notices (Rent & Payment; RECOMMENDED; SERVES_LANDLORD; topic `nonpayment-notice`): ORS 90.394(4)
- `rent-installments-or` — Rent Paid in Installments (Rent & Payment; RECOMMENDED; SERVES_LANDLORD; topic `rent-payment`): ORS 90.417(3)
- `security-deposit-use-or` — Use of Security Deposit (Security Deposit; CONDITIONAL/CONSTRAINED; REQUIRED_DISCLOSURE: ORS 90.300(3) | CONSTRAINED_TERM; supersedes `security-deposit-use`; topic `security-deposit-use`): ORS 90.300(3)
- `carpet-cleaning-deduction-or` — Carpet Cleaning Deduction (Security Deposit; RECOMMENDED; SERVES_LANDLORD; topic `deposit-cost-schedule`): ORS 90.300(7)(c)(A)(i)
- `security-deposit-return-or` — Return of Security Deposit (Security Deposit; RECOMMENDED; SERVES_LANDLORD; supersedes `security-deposit-return`; topic `security-deposit-return`): ORS 90.300(12)
- `rule-violation-fees-or` — Fees for Repeated Rule Violations (Rules & Regulations; CONSTRAINED; REQUIRED_DISCLOSURE: ORS 90.302(1) | CONSTRAINED_TERM; topic `required-fees`): ORS 90.302(3)(a)
- `landlords-access-or` — Landlord's Right of Entry (Access & Entry; CONSTRAINED; CONSTRAINED_TERM | SERVES_LANDLORD; supersedes `landlords-access`; topic `landlord-entry`): ORS 90.322(1)(f)
- `yard-maintenance-entry-or` — Entry for Yard Maintenance (Access & Entry; RECOMMENDED; SERVES_LANDLORD; topic `periodic-services-entry`): ORS 90.322(1)(e)
- `default-by-tenant-or` — Default by Tenant (Default & Termination; RECOMMENDED; SERVES_LANDLORD; supersedes `default-by-tenant`; topic `default-by-tenant`): ORS 90.302
- `early-termination-or` — Early Termination (Default & Termination; RECOMMENDED; CONSTRAINED_TERM | SERVES_LANDLORD; supersedes `early-termination`; topic `early-termination`): ORS 90.302(5)
- `holdover-or` — Holdover (Default & Termination; RECOMMENDED; SERVES_LANDLORD; supersedes `holdover`; topic `holdover`): ORS 90.427(4)(c)
- `surrender-end-of-term-or` — Surrender at End of Tenancy (Default & Termination; RECOMMENDED; SERVES_LANDLORD; supersedes `surrender-end-of-term`; topic `surrender-end-of-term`): ORS 90.427(4)(c)(A)
- `tenant-caused-damage-or` — Damage Caused by Tenant (Tenant Responsibilities; RECOMMENDED; SERVES_LANDLORD; topic `tenant-caused-damage`): ORS 90.360(4)
- `residential-use-only-or` — Residential Use Only (Tenant Responsibilities; RECOMMENDED; SERVES_LANDLORD; supersedes `residential-use-only`; topic `residential-use-only`): ORS 90.358(1)
- `family-child-care-or` — Family Child Care Home Conditions (Tenant Responsibilities; CONDITIONAL; SERVES_LANDLORD; topic `residential-use-only`): ORS 90.358(5)(a)
- `landlord-maintenance-or` — Maintenance & Repairs (Landlord Responsibilities; RECOMMENDED; SERVES_LANDLORD; supersedes `landlord-maintenance`; topic `landlord-maintenance`): ORS 90.325(3)
- `tenant-maintenance-or` — Tenant Maintenance & Cleanliness (Tenant Responsibilities; RECOMMENDED; SERVES_LANDLORD; supersedes `tenant-maintenance`; topic `tenant-maintenance`): ORS 90.325(3)
- `tenant-maintenance-tasks-or` — Tenant Maintenance Tasks Agreement (Tenant Responsibilities; RECOMMENDED; SERVES_LANDLORD; topic `tenant-repair-agreement`): ORS 90.320(2)
- `pet-policy-or` — Pets (Pets; RECOMMENDED; SERVES_LANDLORD; supersedes `pet-policy`; topic `pet-policy`): ORS 90.245(1)(c)
- `pet-insurance-requirement-or` — Pet Liability Coverage (Pets; CONDITIONAL; CONSTRAINED_TERM; supersedes `pet-insurance-requirement`; topic `pet-insurance-requirement`): ORS 90.222
- `renters-insurance-or` — Tenant's Property & Renter's Insurance (Notices & General; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.222(5) | CONSTRAINED_TERM; supersedes `tenants-property-insurance`; topic `tenants-property-insurance`): ORS 90.245(1)(c)
- `common-area-use-or` — Use of Property & Common Areas (Rules & Regulations; RECOMMENDED; SERVES_LANDLORD; supersedes `common-area-use`; topic `common-area-use`): ORS 90.355(2)
- `portable-cooling-device-or` — Portable Cooling Devices (Rules & Regulations; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.355(3) | SERVES_LANDLORD; topic `portable-cooling-device`): ORS 90.355(3)
- `parking-vehicle-rules-or` — Parking & Vehicle Requirements (Parking & Storage; RECOMMENDED; SERVES_LANDLORD; supersedes `parking-vehicle-rules`; topic `parking-vehicle-rules`): ORS 90.302
- `parking-tag-towing-or` — Parking Tags and Towing Agreement (Parking & Storage; RECOMMENDED; SERVES_LANDLORD; topic `towing`): ORS 90.485(3)(c)
- `hoa-compliance-or` — Homeowner / Condominium Association Compliance (Disclosures; RECOMMENDED; CONSTRAINED_TERM | SERVES_LANDLORD; supersedes `hoa-compliance`; topic `hoa-compliance`): ORS 90.302
- `no-alterations-or` — No Alterations (Tenant Responsibilities; RECOMMENDED; SERVES_LANDLORD; supersedes `no-alterations`; topic `alterations`): ORS 90.462
- `keys-or` — Keys (Rules & Regulations; RECOMMENDED; SERVES_LANDLORD | CONSTRAINED_TERM; supersedes `keys`; topic `keys`): ORS 90.302
- `notice-mail-attach-or` — Service of Notices by Mail and Attachment (Notices & General; RECOMMENDED; SERVES_LANDLORD; topic `notice-delivery-methods`): ORS 90.155(1)(c)
- `actual-notice-method-or` — Agreed Method for Actual Notice (Notices & General; RECOMMENDED; SERVES_LANDLORD; topic `notice-delivery-methods`): ORS 90.150(4)
- `smoking-policy-or` — Smoking Policy (Smoking Prohibited) (Tenant Responsibilities; REQUIRED; REQUIRED_DISCLOSURE: ORS 479.305(1); ORS 90.220(4) | SERVES_LANDLORD; supersedes `smoking-policy`; choice group `smoking-policy-or` (default); topic `smoking-policy`): ORS 479.305(1)
- `smoking-limited-areas-or` — Smoking Policy (Limited Areas) (Tenant Responsibilities; REQUIRED; REQUIRED_DISCLOSURE: ORS 479.305(1); ORS 90.220(4) | SERVES_LANDLORD; choice group `smoking-policy-or`; topic `smoking-policy`): ORS 479.305(1)
- `smoking-allowed-or` — Smoking Policy (Allowed on Entire Premises) (Tenant Responsibilities; REQUIRED; REQUIRED_DISCLOSURE: ORS 479.305(1); ORS 90.220(4); choice group `smoking-policy-or`; topic `smoking-policy`): ORS 479.305(1)
- `flood-plain-notice-or` — 100-Year Flood Plain Notice (Disclosures; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.228(2); topic `flood-disclosure`): ORS 90.228(2)
- `landlord-disclosure-or` — Manager and Owner Disclosure (Disclosures; REQUIRED; REQUIRED_DISCLOSURE: ORS 90.305(1); topic `owner-identity-disclosure`): ORS 90.305(1)
- `foreclosure-disclosure-or` — Disclosure of Pending Foreclosure or Forfeiture (Disclosures; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.310(1); topic `foreclosure-disclosure`): ORS 90.310(1)
- `shared-utility-disclosure-or` — Tenant-Paid Utilities That Serve Others (Disclosures; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.315(2); topic `utility-apportionment`): ORS 90.315(2)
- `utility-billing-or` — Utility Charges Billed by Landlord (Landlord Responsibilities; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.315(4)(a)-(c) | CONSTRAINED_TERM; topic `utility-submetering-disclosure`): ORS 90.315(4)(a)
- `recycling-notice-or` — Recycling Notice (Disclosures; CONDITIONAL; SERVES_LANDLORD; topic `recycling-notice`): ORS 90.318(1)(c)
- `well-water-testing-notice-or` — Drinking Water Well Notice (Disclosures; CONDITIONAL; REQUIRED_DISCLOSURE: ORS 90.321(8); topic `private-well-testing`): ORS 90.321
- `alarm-duties-or` — Smoke and Carbon Monoxide Alarms (Landlord Responsibilities; REQUIRED; REQUIRED_DISCLOSURE: ORS 479.270(1); ORS 90.317(2) | SERVES_LANDLORD; topic `alarm-duties`): ORS 479.270(1)
- `alarm-tampering-fee-or` — Alarm Tampering Fee (Landlord Responsibilities; CONSTRAINED; CONSTRAINED_TERM; topic `alarm-duties`): ORS 90.325
- `criminal-activity-or` — Criminal Activity (Default & Termination; RECOMMENDED; SERVES_LANDLORD; topic `criminal-activity`): ORS 90.392(2)(a)
- `tenant-death-contact-or` — Contact Person if Tenant Dies (Default & Termination; RECOMMENDED; SERVES_LANDLORD; topic `tenant-death`): ORS 90.425(21)(a)(C)
- `informal-dispute-resolution-or` — Informal Dispute Resolution (Notices & General; RECOMMENDED; SERVES_LANDLORD; topic `informal-dispute-resolution`): ORS 90.245
- `cannabis-cultivation-or` — No Cannabis Growing (Rules & Regulations; RECOMMENDED; SERVES_LANDLORD; topic `cannabis`): ORS 475C.005

### 3.2 OR education rows (141)
- `edu-late-fee-or` — Late Charges in Oregon (Rent & Payment; CONSTRAINED; topic `late-fee`): ORS 90.260(1)
- `edu-returned-payments-or` — Bounced Rent Checks (Rent & Payment; CONSTRAINED; topic `returned-payments`): ORS 90.302(2)(b)
- `edu-acceptable-payment-methods-or` — How Tenants May Pay (Rent & Payment; PROHIBITED; topic `acceptable-payment-methods`): Or. Laws 2026, ch. 23, §§ 3
- `edu-tenant-portal-or` — Tenant Portals (Notices & General; CONSTRAINED; topic `tenant-portal`): Or. Laws 2026, ch. 23, § 2(1)
- `edu-rent-receipts-or` — Rent Receipts (Rent & Payment; CONSTRAINED; topic `rent-receipts`): ORS 90.140(2)
- `edu-rent-increase-limit-or` — Statewide Rent Increase Limit (Rent & Payment; CONSTRAINED; topic `rent-control`): ORS 90.323(2)(a)
- `edu-rent-increase-notice-or` — Rent Increase Notice (Rent & Payment; CONSTRAINED; topic `rent-increase-notice`): ORS 90.323(1)
- `edu-rent-control-preemption-or` — Local Rent Control Is Preempted (Rent & Payment; RECOMMENDED; topic `rent-control`): ORS 91.225(2)
- `edu-fees-as-rent-or` — What Counts as Rent (Rent & Payment; CONSTRAINED; topic `fees-as-rent`): ORS 90.315
- `edu-required-fees-or` — Fees You May Charge (Rent & Payment; CONSTRAINED; topic `required-fees`): ORS 90.302(1)
- `edu-unpaid-damages-interest-or` — Interest on Money a Tenant Owes (Rent & Payment; RECOMMENDED; topic `unpaid-damages-interest`): ORS 82.010(1)(a)
- `edu-waiver-by-acceptance-or` — Accepting Rent After a Violation or Notice (Default & Termination; RECOMMENDED; topic `waiver-by-acceptance`): ORS 90.412(2)
- `edu-term-change-notice-or` — Changing Terms During a Tenancy (Notices & General; CONSTRAINED; topic `term-change-notice`): ORS 90.220(2)
- `edu-rent-concession-or` — Rent Concessions and Discounts (Rent & Payment; RECOMMENDED; topic `rent-concession`): ORS 90.260(7)
- `edu-rent-tax-or` — No Sales Tax on Rent (Rent & Payment; RECOMMENDED; topic `rent-tax`): ORS 320.305(1)(a)
- `edu-application-fees-or` — Screening Charges for Applicants (Rent & Payment; CONSTRAINED; topic `application-fees`): ORS 90.295(1)
- `edu-holding-deposit-or` — Deposits to Secure a Rental Agreement (Security Deposit; CONSTRAINED; topic `holding-deposit`): ORS 90.297(1)
- `edu-tenant-screening-or` — Screening Rules and Denials (Rent & Payment; CONSTRAINED; topic `tenant-screening`): ORS 90.303(1)
- `edu-no-algorithmic-rent-rule-or` — Algorithmic Rent-Setting Tools (Rent & Payment; RECOMMENDED; topic `algorithmic-rent-setting`): ORS 646.725
- `edu-no-shutdown-protection-or` — Government Shutdowns (Rent & Payment; RECOMMENDED; topic `shutdown-rent-protection`): 
- `edu-no-rent-reporting-rule-or` — Reporting Rent Payments to Credit Bureaus (Rent & Payment; RECOMMENDED; topic `rent-reporting`): 
- `edu-fee-transparency-or` — Disclosing Rent and Fees (Rent & Payment; CONSTRAINED; topic `fee-transparency`): ORS 90.295(3)(b)(A)
- `edu-no-security-deposit-cap-or` — No Security Deposit Cap (Security Deposit; RECOMMENDED; topic `security-deposit-cap`): ORS 90.300(1)
- `edu-deposit-installments-or` — New or Increased Deposits (Security Deposit; CONSTRAINED; topic `deposit-installments`): ORS 90.300(5)(a)
- `edu-last-month-rent-or` — Last Month's Rent Deposits (Security Deposit; CONSTRAINED; topic `deposit-last-month-rent`): ORS 90.300(1)
- `edu-security-deposit-penalty-or` — Penalties for Deposit Mistakes (Security Deposit; CONSTRAINED; topic `security-deposit-penalty`): ORS 90.300(16)
- `edu-security-deposit-on-sale-or` — Deposits When the Property Changes Hands (Security Deposit; CONSTRAINED; topic `security-deposit-on-sale`): ORS 90.300(2)(b)
- `edu-security-deposit-interest-or` — No Deposit Interest or Trust Account Rule (Security Deposit; RECOMMENDED; topic `security-deposit-interest`): ORS 696.241(2)
- `edu-no-deposit-holding-rule-or` — Where to Keep the Deposit (Security Deposit; RECOMMENDED; topic `security-deposit-holding`): ORS 90.300(2)(a)
- `edu-no-condition-checklist-or` — Move-In Condition Records (Security Deposit; RECOMMENDED; topic `condition-inspection`): ORS 90.300(7)(a)(B)
- `edu-no-fee-in-lieu-of-deposit-or` — Fees Instead of a Deposit (Security Deposit; RECOMMENDED; topic `fee-in-lieu-of-deposit`): ORS 90.302(1)
- `edu-no-deposit-escheat-rule-or` — Unclaimed Deposit Refunds (Security Deposit; RECOMMENDED; topic `deposit-escheat`): ORS 90.300(15)
- `edu-pet-fees-or` — Pet Deposits, Fees and Pet Rent (Pets; CONSTRAINED; topic `pet-fees`): ORS 90.300(1)
- `edu-alarm-duties-or` — Smoke and Carbon Monoxide Alarms (Building & Safety; CONSTRAINED; topic `alarm-duties`): ORS 479.250
- `edu-flood-disclosure-or` — Flood Plain Notice and Insurance (Disclosures; CONDITIONAL; topic `flood-disclosure`): ORS 90.228(1)
- `edu-affordability-restriction-notice-or` — Affordable Housing Restriction End Date (Disclosures; CONDITIONAL; topic `required-disclosures`): ORS 90.308
- `edu-private-well-testing-or` — Drinking Water Wells (from 2027) (Disclosures; CONDITIONAL; topic `private-well-testing`): ORS 90.321(1)
- `edu-lead-based-paint-or` — Lead-Based Paint (Disclosures; CONDITIONAL; topic `lead-based-paint`): ORS 701.505
- `edu-no-radon-disclosure-or` — Radon (Disclosures; RECOMMENDED; topic `radon-disclosure`): ORS 90.365(2)
- `edu-no-mold-disclosure-or` — Mold (Disclosures; RECOMMENDED; topic `mold-disclosure`): ORS 90.320(1)(a)
- `edu-no-bed-bug-rule-or` — Bed Bugs and Pests (Disclosures; RECOMMENDED; topic `bed-bug-disclosure`): ORS 90.320(1)(f)
- `edu-meth-contamination-or` — Drug Lab Contamination (Disclosures; CONSTRAINED; topic `meth-disclosure`): ORS 453.867(1)
- `edu-no-stigma-disclosure-rule-or` — Deaths or Crimes on the Property (Disclosures; RECOMMENDED; topic `stigmatized-property`): ORS 93.275(1)(a)
- `edu-no-military-zone-disclosure-or` — Military Installations Nearby (Disclosures; RECOMMENDED; topic `military-air-zone-disclosure`): 
- `edu-sex-offender-or` — Registered Sex Offenders (Disclosures; RECOMMENDED; topic `sex-offender-occupancy`): ORS 90.630(1)(c)
- `edu-for-cause-eviction-or` — When You May End a Tenancy Without Cause (Default & Termination; CONSTRAINED; topic `for-cause-eviction`): ORS 90.427(1)
- `edu-termination-notice-or` — Notice Periods to End a Tenancy (Default & Termination; CONSTRAINED; topic `termination-notice`): ORS 90.427(2)
- `edu-cure-and-eviction-grounds-or` — Cure Periods for Lease Violations (Default & Termination; CONSTRAINED; topic `cure-and-eviction-grounds`): ORS 90.392(1)
- `edu-nonpayment-notice-or` — Nonpayment of Rent Notices (Default & Termination; CONSTRAINED; topic `nonpayment-notice`): ORS 90.394(1)
- `edu-emergency-assistance-right-or` — Rental Assistance and Nonpayment Cases (Default & Termination; CONSTRAINED; topic `emergency-assistance-right`): ORS 90.395(1)
- `edu-expedited-criminal-eviction-or` — 24-Hour Terminations (Default & Termination; CONSTRAINED; topic `expedited-criminal-eviction`): ORS 90.396(1)
- `edu-dv-lease-termination-or` — Early Termination by Victims (Default & Termination; CONSTRAINED; topic `dv-lease-termination`): ORS 90.453(1)
- `edu-dv-eviction-protection-or` — No Adverse Action Against Victims (Compliance & Prohibited Terms; PROHIBITED; topic `dv-eviction-protection`): ORS 90.449(1)
- `edu-dv-lockchange-or` — Lock Changes for Victims (Access & Entry; CONSTRAINED; topic `dv-lockchange`): ORS 90.459(1)
- `edu-servicemember-rights-or` — Servicemember Termination Rights (Default & Termination; CONSTRAINED; topic `servicemember-rights`): ORS 90.475(1)
- `edu-statutory-early-termination-or` — Other Ways a Tenant May Leave Early (Default & Termination; CONSTRAINED; topic `statutory-early-termination`): ORS 90.360(1)
- `edu-abandoned-property-or` — Property Left Behind After a Tenancy (Default & Termination; CONSTRAINED; topic `abandoned-property`): ORS 90.425(1)
- `edu-tenant-death-or` — When a Sole Tenant Dies (Default & Termination; CONSTRAINED; topic `tenant-death`): ORS 90.425(20)
- `edu-abandonment-mitigation-or` — Rent Owed After a Tenant Abandons (Default & Termination; CONSTRAINED; topic `abandonment-and-mitigation`): ORS 90.410(3)
- `edu-eviction-process-or` — The Eviction Court Process (Default & Termination; CONSTRAINED; topic `eviction-process`): ORS 105.100
- `edu-eviction-record-sealing-or` — Setting Aside and Sealing Eviction Records (Default & Termination; RECOMMENDED; topic `eviction-record-sealing`): ORS 105.163(1)
- `edu-post-eviction-property-or` — Tenant Property After a Writ (Default & Termination; CONSTRAINED; topic `post-eviction-property`): ORS 105.165(1)
- `edu-self-help-eviction-or` — No Lockouts, Utility Shutoffs or Property Seizures (Default & Termination; PROHIBITED; topic `self-help-eviction`): ORS 90.435
- `edu-landlord-lien-or` — No Landlord Lien on Tenant Property (Compliance & Prohibited Terms; PROHIBITED; topic `landlord-lien`): ORS 90.420(1)
- `edu-retaliation-or` — Retaliation (Compliance & Prohibited Terms; PROHIBITED; topic `retaliation`): ORS 90.385(1)
- `edu-tenant-organizing-or` — Tenant Organizing (Compliance & Prohibited Terms; PROHIBITED; topic `tenant-right-to-organize`): ORS 90.385(1)(c)
- `edu-unauthorized-occupants-or` — Squatters and Unauthorized Occupants (Default & Termination; CONSTRAINED; topic `unauthorized-occupant-removal`): ORS 90.403(1)
- `edu-casualty-termination-or` — Fire, Casualty and Uninhabitable Units (Default & Termination; RECOMMENDED; topic `casualty-termination`): ORS 90.380(5)
- `edu-condemned-premises-or` — Posted or Unlawful Units (Landlord Responsibilities; CONSTRAINED; topic `condemned-premises-rent-bar`): ORS 90.380(1)
- `edu-foreclosure-or` — Tenants and Foreclosure (Default & Termination; CONSTRAINED; topic `foreclosure`): ORS 90.310(1)(a)
- `edu-conversion-notice-or` — Condominium Conversion (Default & Termination; CONSTRAINED; topic `conversion-notice`): ORS 90.493(1)
- `edu-holdover-rate-or` — Premium Holdover Rates (Barred) (Default & Termination; PROHIBITED; topic `holdover-rate`): ORS 90.427(11)
- `edu-no-infirmity-termination-or` — Moving to a Care Facility (Default & Termination; RECOMMENDED; topic `infirmity-termination`): ORS 127.885
- `edu-minor-tenants-or` — Minors as Tenants (Default & Termination; RECOMMENDED; topic `minor-tenant-filing`): ORS 90.100
- `edu-drug-free-housing-or` — Drug and Alcohol Free Housing Programs (Default & Termination; CONDITIONAL; topic `drug-free-housing-addendum`): ORS 90.243
- `edu-nuisance-or` — Drug, Prostitution and Gambling Nuisance Abatement (Default & Termination; RECOMMENDED; topic `nuisance`): ORS 105.555(1)(a)
- `edu-notice-delivery-or` — How to Deliver Notices (Notices & General; CONSTRAINED; topic `notice-delivery-methods`): ORS 90.155(1)
- `edu-statutory-forms-or` — Oregon's Statutory Forms (Notices & General; RECOMMENDED; topic `statutory-forms`): ORS 90.155(1)(d)(E)
- `edu-lease-copy-or` — Giving Tenants a Copy of the Lease (Notices & General; CONSTRAINED; topic `lease-copy`): ORS 90.220(3)
- `edu-statute-of-frauds-or` — Written Leases and Long Terms (Notices & General; RECOMMENDED; topic `statute-of-frauds-lease-term`): ORS 41.580(1)(e)
- `edu-scope-or` — Who the Landlord-Tenant Act Covers (Notices & General; RECOMMENDED; topic `scope`): ORS 90.110(1)
- `edu-landlord-entry-or` — Entering a Tenant's Home (Access & Entry; CONSTRAINED; topic `landlord-entry`): ORS 90.322(1)
- `edu-sale-or-management-change-or` — Selling or Changing Management (Notices & General; CONSTRAINED; topic `sale-or-management-change`): ORS 90.305(2)
- `edu-renters-insurance-or` — Requiring Renter's Insurance (Notices & General; CONSTRAINED; topic `renters-insurance-rules`): ORS 90.222(1)
- `edu-tenant-confidential-information-or` — Keeping Tenants' Information Confidential (Compliance & Prohibited Terms; PROHIBITED; topic `tenant-confidential-information`): Or. Laws 2026, ch. 61, § 2
- `edu-victim-confidentiality-or` — Keeping Victim Information Confidential (Compliance & Prohibited Terms; PROHIBITED; topic `dv-confidentiality`): ORS 90.453(6)
- `edu-prohibited-lease-terms-or` — Lease Terms Oregon Voids (Compliance & Prohibited Terms; PROHIBITED; topic `prohibited-lease-terms`): ORS 90.245(1)
- `edu-knowing-use-penalty-or` — Penalty for Using a Prohibited Term (Compliance & Prohibited Terms; PROHIBITED; topic `knowing-use-penalty`): ORS 90.245(2)
- `edu-collection-practices-or` — Collecting Money From Tenants (Compliance & Prohibited Terms; PROHIBITED; topic `collection-fee`): ORS 646.639(1)(b)
- `edu-consumer-protection-act-or` — The Unlawful Trade Practices Act (Compliance & Prohibited Terms; RECOMMENDED; topic `consumer-protection-act`): ORS 646.605(6)(b)(A)
- `edu-unconscionability-or` — Unconscionable Lease Terms (Compliance & Prohibited Terms; CONSTRAINED; topic `unconscionability`): ORS 90.135
- `edu-attorney-fees-or` — Attorney Fees (Compliance & Prohibited Terms; CONSTRAINED; topic `attorney-fees`): ORS 90.255
- `edu-fair-housing-or` — Oregon Fair Housing Classes (Compliance & Prohibited Terms; PROHIBITED; topic `fair-housing`): ORS 659A.421(1)
- `edu-source-of-income-or` — Source of Income (Compliance & Prohibited Terms; PROHIBITED; topic `source-of-income`): ORS 659A.421(1)(d)
- `edu-immigration-status-or` — Citizenship and Immigration Status (Compliance & Prohibited Terms; PROHIBITED; topic `immigration-status`): ORS 90.306
- `edu-protected-class-inquiries-or` — Questions You May Not Ask Applicants (Compliance & Prohibited Terms; PROHIBITED; topic `protected-class-inquiry-ban`): ORS 90.303(1)
- `edu-children-occupancy-or` — Families With Children (Compliance & Prohibited Terms; PROHIBITED; topic `children-occupancy`): ORS 659A.421(2)
- `edu-occupancy-limits-or` — Occupancy Limits (Tenant Responsibilities; CONSTRAINED; topic `permitted-occupants`): ORS 90.262(3)
- `edu-temporary-occupancy-or` — Temporary Occupancy Agreements (Tenant Responsibilities; CONSTRAINED; topic `permitted-occupants`): ORS 90.275(1)
- `edu-disability-accommodation-or` — Disability Accommodations and Modifications (Compliance & Prohibited Terms; PROHIBITED; topic `disability-accommodation`): ORS 659A.145(2)(f)
- `edu-rules-regulations-or` — House Rules (Rules & Regulations; CONSTRAINED; topic `rules-regulations`): ORS 90.262(1)
- `edu-smoking-or` — Smoking Rules (Rules & Regulations; CONSTRAINED; topic `smoking-policy`): ORS 479.305
- `edu-landlord-maintenance-or` — Your Duty to Keep the Unit Habitable (Landlord Responsibilities; CONSTRAINED; topic `landlord-maintenance`): ORS 90.320(1)(a)
- `edu-tenant-repair-remedies-or` — Repair Deadlines and Tenant Remedies (Landlord Responsibilities; CONSTRAINED; topic `tenant-repair-remedies`): ORS 90.360(1)
- `edu-heating-or` — Heat, Water and Cooling (Landlord Responsibilities; CONSTRAINED; topic `heating`): ORS 90.320(1)(b)
- `edu-security-devices-or` — Locks and Keys (Landlord Responsibilities; CONSTRAINED; topic `security-devices`): ORS 90.320(1)(L)
- `edu-utility-landlord-account-or` — Utilities in Your Name and Tenant Accounts (Landlord Responsibilities; CONSTRAINED; topic `utility-landlord-account`): ORS 90.315(5)
- `edu-tenant-statutory-duties-or` — Tenants' Duties Under Oregon Law (Tenant Responsibilities; CONSTRAINED; topic `tenant-statutory-duties`): ORS 90.325(1)
- `edu-ev-charging-or` — Electric Vehicle Charging (Parking & Storage; CONSTRAINED; topic `ev-charging`): ORS 90.462
- `edu-towing-or` — Towing at a Rental (Parking & Storage; CONSTRAINED; topic `towing`): ORS 90.485(1)
- `edu-hoa-or` — Condominium and HOA Rules (Rules & Regulations; CONSTRAINED; topic `hoa`): ORS 90.302(7)(f)(A)
- `edu-cannabis-or` — Cannabis in Rentals (Other / Miscellaneous; RECOMMENDED; topic `cannabis`): ORS 475C.013(2)
- `edu-firearms-or` — Firearms in Rental Housing (Rules & Regulations; RECOMMENDED; topic `firearms`): ORS 166.174
- `edu-no-display-rule-or` — Flags, Signs and Religious Displays (Rules & Regulations; RECOMMENDED; topic `tenant-display-rights`): ORS 90.485
- `edu-no-camera-rule-or` — Tenant Security Cameras and Video Doorbells (Rules & Regulations; RECOMMENDED; topic `tenant-security-cameras`): ORS 90.262
- `edu-portable-solar-or` — Tenant-Installed Solar and Other Alternative Energy Devices (Rules & Regulations; RECOMMENDED; topic `portable-solar`): ORS 90.265(1)
- `edu-no-telecom-access-rule-or` — Cable, Internet and Satellite Service (Landlord Responsibilities; RECOMMENDED; topic `telecom-access`): ORS 90.315(1)(d)
- `edu-no-water-heater-rule-or` — Water Heater Temperature (Building & Safety; RECOMMENDED; topic `water-heater-temperature`): ORS 90.320(1)(b)
- `edu-pool-rules-or` — Pools and Spas at Rentals (Building & Safety; CONDITIONAL; topic `pool-safety`): ORS 448.005(6)
- `edu-jury-waiver-or` — Jury Trial Waivers (Not Offered) (Compliance & Prohibited Terms; RECOMMENDED; topic `jury-waiver`): Or. Const. art. I, § 17
- `edu-exemption-waiver-or` — Waiving Exemptions From Collection (Not Offered) (Compliance & Prohibited Terms; RECOMMENDED; topic `homestead-waiver`): ORS 18.345(1)(f)
- `edu-no-landlord-registration-or` — Landlord Registration and Rental Licensing (Notices & General; RECOMMENDED; topic `landlord-registration`): ORS 90.732
- `edu-rental-inspection-or` — Rental Inspection Programs (Building & Safety; RECOMMENDED; topic `rental-inspection`): ORS 90.380(3)
- `edu-no-foreign-ownership-limit-or` — Foreign Ownership of Rental Property (Other / Miscellaneous; RECOMMENDED; topic `foreign-ownership`): 
- `edu-no-lease-completeness-rule-or` — Blank Spaces in the Lease (Notices & General; RECOMMENDED; topic `lease-completeness`): ORS 83.060
- `edu-no-plain-language-rule-or` — Plain Language and Type Size (Notices & General; RECOMMENDED; topic `plain-language`): ORS 90.322(1)(d)(A)
- `edu-translation-or` — Translated Leases and Notices (Notices & General; RECOMMENDED; topic `translation-duty`): ORS 105.136(1)
- `edu-lease-content-requirements-or` — What an Oregon Lease Must Contain (Compliance & Prohibited Terms; REQUIRED; topic `lease-content-requirements`): ORS 90.300(3)
- `edu-no-quiet-possession-statute-or` — Quiet Enjoyment (Landlord Responsibilities; RECOMMENDED; topic `quiet-possession`): ORS 90.325(1)(g)
- `edu-no-landlord-self-cure-or` — Fixing a Tenant's Breach Yourself (Default & Termination; RECOMMENDED; topic `landlord-self-cure`): ORS 90.401(1)
- `edu-assistance-animals-or` — Assistance Animals (Pets; PROHIBITED; topic `assistance-animal-accommodation`): ORS 659A.145(2)(g)
- `edu-service-animal-misrepresentation-or` — Misrepresented Assistance Animals (Pets; RECOMMENDED; topic `service-animal-misrepresentation`): OAR 839-005-0220(2)(c)(B)
- `edu-service-animal-denial-penalty-or` — Penalties for Refusing an Assistance Animal (Pets; RECOMMENDED; topic `service-animal-denial-penalty`): ORS 659A.145(2)(g)
- `edu-construction-liens-or` — Liens From Work a Tenant Orders (Landlord Responsibilities; RECOMMENDED; topic `construction-liens`): ORS 87.010(1)
- `edu-receivership-or` — Receivership for Dangerous Rental Buildings (Building & Safety; RECOMMENDED; topic `substandard-property-receivership`): ORS 105.420
- `edu-utility-shutoff-or` — Utility Shutoffs and Tenants (Landlord Responsibilities; CONSTRAINED; topic `utility-shutoff-statute`): OAR 860-021-0326(1)
- `edu-no-tenant-rights-statement-or` — Statement of Tenant Rights (Disclosures; RECOMMENDED; topic `tenant-rights-statement`): ORS 90.525
- `edu-lease-type-parity-or` — Month-to-Month and Fixed-Term Rent (Rent & Payment; RECOMMENDED; topic `lease-type-parity`): ORS 90.323
- `edu-rent-into-court-or` — Tenant Counterclaims and Rent Paid Into Court (Default & Termination; CONSTRAINED; topic `rent-into-court-counterclaim`): ORS 90.370(1)
- `edu-eviction-hardship-stay-or` — Settlements, Continuances and Stays in Eviction Cases (Default & Termination; CONSTRAINED; topic `eviction-hardship-stay`): ORS 105.145(2)
- `edu-natural-disaster-or` — Tenancies After a Natural Disaster (Default & Termination; CONSTRAINED; topic `disaster-duties`): Or. Laws 2026, ch. 108, §§ 20

Every row's notes give its full citations, quotes and battery records; the line above shows the first citation.

## 4. Layout and placement (rule 40)
No Oregon statute or rule sets type size, boldface, capitals, underlining, initials or first-page placement for a residential lease (formatting batteries 1-10, §19). What the law requires in or with the rental agreement, and where the library puts it:

| Requirement | Where | Row |
|---|---|---|
| Smoking policy disclosure in the rental agreement, one of three forms (ORS 479.305(1), (2) from 2027; ORS 90.220(4)) | Lease, Disclosures | `smoking-policy-or` / `smoking-limited-areas-or` / `smoking-allowed-or` (choice group, one required) |
| Any security deposit listed in a written agreement (ORS 90.300(3)) | Lease, Security Deposit | `security-deposit-use-or`, `due-at-signing-or` |
| Every fee described in the written agreement (ORS 90.302(1)) | Lease, each fee clause | `late-fee-limit-or`, `nsf-fee-limit-or`, `rule-violation-fees-or`, `alarm-tampering-fee-or`, `early-termination-or` |
| Late charge: obligation, type and amount, due dates (ORS 90.260(1)(b)) | Lease, Rent & Payment | `late-fee-limit-or` |
| 100-year flood plain notice in the rental agreement (ORS 90.228(2)) | Lease, Disclosures (if in a flood plain) | `flood-plain-notice-or` |
| Renter's insurance: the landlord's own coverage described (ORS 90.222(5)) | Lease, Notices & General (if required) | `renters-insurance-or` |
| Manager and owner or agent names and addresses, in writing at or before commencement (ORS 90.305(1)) | Lease, Disclosures | `landlord-disclosure-or` |
| Legal proceedings on premises of four or fewer units, in writing before execution (ORS 90.310(1)) | Lease or a separate pre-signing writing | `foreclosure-disclosure-or` |
| Utilities the tenant pays that benefit others, in writing at or before commencement (ORS 90.315(2)) | Lease, Disclosures | `shared-utility-disclosure-or` |
| Landlord-billed utilities: written agreement provision, common-area charges and any markup described separately (ORS 90.315(4)) | Lease, Landlord Responsibilities | `utility-billing-or` |
| Portable cooling restrictions in writing with the cooling-space statement (ORS 90.355(3)) | Lease, Rules & Regulations | `portable-cooling-device-or` |
| Smoke and CO alarm testing instructions in writing by possession (ORS 479.270(1); ORS 90.317(2)) | Lease, Disclosures | `alarm-duties-or` |
| Recycling notice at the time of entering the agreement (ORS 90.318(1)(c); no writing required) | Lease, Disclosures (vehicle chosen) | `recycling-notice-or` |
| Well-water notice before entering the agreement, from 2027 (ORS 90.321(8)) | Lease or pre-signing writing | `well-water-testing-notice-or` |
| Mail-and-attachment service only if the written agreement provides (ORS 90.155(1)(c)) | Lease, Notices & General | `notice-mail-attach-or` |
| Carpet-cleaning deduction only if the written agreement provides (ORS 90.300(7)(c)(A)(iii)) | Lease, Security Deposit | `carpet-cleaning-deduction-or` |
| Separate writings the lease can't supply (rule 48): e-mail notice addendum after move-in (ORS 90.155(1)(d)); unannounced showings to buyers (ORS 90.322(1)(d)); confidential-information consent (Or. Laws 2026, ch. 61, § 2); temporary occupancy agreement (ORS 90.275); affordability restriction notice (ORS 90.308; OAR 813-115-0035) | Outside the lease | `edu-notice-delivery-or`, `edu-landlord-entry-or`, `edu-tenant-confidential-information-or`, `edu-temporary-occupancy-or`, `edu-affordability-restriction-notice-or` |
| A licensed property manager's lease contents and copy (OAR 863-025-0045) | Builder basic terms plus the rows above | `edu-lease-content-requirements-or` |
Omission sanctions found: flood plain (lesser of uninsured loss or two months' rent, ORS 90.228(3)); legal proceedings (if the tenant moves as a result: twice damages or twice monthly rent, whichever is greater, plus all prepaid rent, ORS 90.310(2)); shared utilities (twice damages or one month's rent, ORS 90.315(3)); utility billing (one month's rent or twice the overcharge, ORS 90.315(4)(f)); unlisted fees (twice damages or $300, ORS 90.302(8)). None forfeits rent.

## 5. Dormant rows resolved (rule 25)
- `late-fee-limit-or` (dormant, CONSTRAINED, UNVERIFIED): it described the three ORS 90.260(2) structures as caps on a lease figure, said 'a daily fee not exceeding 6% of a reasonable flat fee' without the per-day limits (from the fifth day, through that rental period only) and omitted the written-agreement contents ORS 90.260(1)(b) requires. **Rewritten and activated** as Oregon's late-charge clause: the due date, the fourth-day rule, a flat {{late_fee_amount}} once per rental period due on the fifth day, and the 2026 refused-payment bar; topic `late-fee`; supersedes `late-fee`; CONSTRAINED; basis CONSTRAINED_TERM | REQUIRED_DISCLOSURE: ORS 90.260(1)(b).
- `nsf-fee-limit-or` (dormant, CONSTRAINED, UNVERIFIED): '$35.00, plus any actual bank charges' was close to ORS 90.302(2)(b) and 30.701(5), but it reached any 'dishonored or returned payment', while the fee covers only a check dishonored for the reasons in ORS 30.701(6). **Rewritten and activated** as `Dishonored Check Fee`; topic `returned-payments`; supersedes `returned-payments`; CONSTRAINED; basis REQUIRED_DISCLOSURE: ORS 90.302(1) | CONSTRAINED_TERM.
- `habitability-timeline-or` (dormant, CONSTRAINED, UNVERIFIED): it restated tenant remedies as a landlord promise ('Landlord will remedy ... within 7 days ... or Tenant may terminate'; '48 hours' written notice') in a form that doesn't match ORS 90.360 (a termination date at least 30 days after notice if the breach isn't remedied in 7 or 30 days) or ORS 90.365(2) (48 hours only for an imminent and serious threat, excluding radon, asbestos, lead-based paint and future flood or seismic risk). Restating tenant remedies is education, not a lease term (rule 55). **Left switched off** (not in the delta); the subject is answered by `edu-tenant-repair-remedies-or`.
- The blank-states parent `security-deposit-return` is answered by `security-deposit-return-or` (rule 25 family).

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
Offered: `rent-payment-location-or`, `rent-installments-or`, `carpet-cleaning-deduction-or`, `rule-violation-fees-or`, `yard-maintenance-entry-or`, `family-child-care-or`, `parking-tag-towing-or`, `notice-mail-attach-or`, `actual-notice-method-or`, `alarm-tampering-fee-or`, `criminal-activity-or`, `tenant-death-contact-or`, `informal-dispute-resolution-or`, `cannabis-cultivation-or`.
Declined, each with an education row: a contractual interest rate (`edu-unpaid-damages-interest-or`); a holdover premium (`edu-holdover-rate-or`; liquidated damages barred); a casualty-termination clause (`edu-casualty-termination-or`; no Oregon statute to restate and the 2026 disaster rule controls); a pre-tenancy condemned-unit disclosure (`edu-condemned-premises-or`); well-sampling delegation (`edu-private-well-testing-or`); jury and exemption waivers (`edu-jury-waiver-or`, `edu-exemption-waiver-or`); a temporary occupancy agreement (`edu-temporary-occupancy-or`; three-party writing). Outside the lease by statute (rule 48): the e-mail notice addendum, unannounced-showing agreement and confidential-information consent.

### 6.2 Questions asked of Taylor (rule 76)
None. No product decision arose that the SOP and library conventions didn't settle; the smoking choice group keeps the library's existing default (prohibition).

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
- **For-cause termination (rule 41):** Oregon's verdict is `edu-for-cause-eviction-or`; shared end-of-term, holdover, surrender and early-termination clauses are replaced, because after the first year of occupancy a fixed term generally becomes month to month and a landlord ends a tenancy only for cause or a qualifying reason (ORS 90.427).
- **Fees:** the shared default clause's 'costs and expenses' dropped (ORS 90.302(1); ORS 646.639); early-termination fee capped at one and one-half months' rent with the statutory rent and reletting consequences (ORS 90.302(2)(e)); rule-violation fees offered with bracketed amounts (rule 53); HOA fines recovered as damages for breach rather than through the ORS 90.302(7)(f) conditions (whether those conditions are cumulative is unsettled, §1.4).
- **Keys and alterations:** shared `keys` and `no-alterations` untagged after the independent check; Oregon overrides limit key charges to a lost key replaced at the tenant's request and keep an EV charging station the tenant's property (ORS 90.302(7)(c); ORS 90.462(8)).
- **Chores:** ORS 90.320(2) reaches every dwelling and asks for a writing with stated consideration, so `tenant-maintenance-tasks-or` replaces the shared chore clauses.
- **Exculpation (rule 52):** the -ks-oh-ca variants are tagged; the base 'not liable' clauses are not (ORS 90.245(1)(c)).
- **Recycling basis:** the notice is required but not a writing, so `recycling-notice-or` is SERVES_LANDLORD, not REQUIRED_DISCLOSURE.
- **Supersedes:** every override sets `supersedes` to the shared row it replaces (24 OR rows, including the default `smoking-policy-or` and `security-deposit-return-or` for the blank-states parent), and no OR row supersedes a tagged row.

## 7. Open items (none blocking)
- **Court rules:** the Uniform Trial Court Rules and local supplementary rules were not loaded; `edu-eviction-process-or` points to the Oregon Judicial Department's forms. Boundary: ORS 105.100-105.168 read whole.
- **Codes adopted by reference:** the Oregon Fire Code (2024 IFC as amended), the Oregon Plumbing Specialty Code and the 2023 Model Aquatic Health Code were not read; `fire-safety-grilling`, `edu-no-water-heater-rule-or` and `edu-pool-rules-or` say so.
- **Lead-based paint renovation by an owner:** whether an owner renovating its own rental is a 'contractor' under ORS 701.510 or reached by OAR 333-070-0200 was not researched; `edu-lead-based-paint-or` tells the landlord to check.
- **Case law:** not searched (§1.4).
- **Local ordinances:** flagged, not resolved (Portland relocation, screening and notice rules; city rental registration and inspection programs; rule 3).

## 8. Integrity checks on the delta
Run by `work/checks.py` on the final delta (all PASS):
- PASS ids unique in delta
- PASS new ids not in master
- PASS 17 columns
- PASS groups valid (new rows; tagged rows keep their master group)
- PASS rule_type valid
- PASS basis: OR clauses carry a basis, education blank
- PASS supersedes points at existing rows
- PASS supersedes targets not tagged OR
- PASS no OR row supersedes a tagged row
- PASS OR rows: states OR, active, VERIFIED, last_checked
- PASS OR notes start OR:
- PASS tagged rows: only states/notes/last_checked changed
- PASS rule 15 statement on every OR note
- PASS no unresolved battery placeholders
- PASS no § sign with ORS or OAR
- PASS no doubled prefixes
- PASS every cited ORS section exists in the corpus
- PASS every cited OAR rule exists in the saved OAR corpus
- PASS every cited 2026 session law chapter exists
- PASS every backtick pointer resolves to a row or topic
- PASS INFO pointers to inactive master rows (provenance only) :: [('edu-tenant-repair-remedies-or', 'habitability-timeline-or')]
- PASS variables are builder variables or listed as new
- PASS INFO brackets next to variables (review) :: ['due-at-signing-or', 'renters-insurance-or']
- PASS registered quotes match saved text (166)
- PASS citation format (kickoff)
- PASS every row carries verification_status
- PASS choice groups have exactly one default
Also: CRLF line endings, UTF-8, header identical to the master; the merged master would have 3,526 rows; no master row is removed; only the 31 tagged rows change (states, notes, last_checked).

## 9. Propagation notes (rule 62)
No shared row's bodyText was edited. The 31 tagged rows change only by adding OR to `states`, an '| OR:' note and `last_checked`. Overrides are new OR rows with `supersedes`. Product-level observations for other states are in §10.

## 10. Findings for other states or the product (flagged, not fixed)
- **Dated text for legal watch:** ORS 90.321 operative January 1, 2027; Or. Laws 2026, ch. 60 (smoking definition and ORS 90.262(2) exception) January 1, 2027; Or. Laws 2026, ch. 118, § 6 (ORS 475C.792) January 1, 2027; OAR 333-062-1000 temporary amendment ends December 18, 2026; Or. Laws 2025, ch. 598 (Medicaid new-parent trial rescheduling) repealed September 28, 2027, which also changes the ORS 105.136 form; ORS 90.303 and 105.163 dated versions January 2, 2028; Or. Laws 2026, ch. 79, §§ 2-3 (inclusionary zoning restated) January 1, 2028; Or. Laws 2026, ch. 23, § 3 not yet compiled into ORS (section number pending).
- **New {{variables}}:** none. `{{late_fee_grace_days}}` is not used in Oregon (the fourth-day rule is written into `late-fee-limit-or`); `{{renewal_rent_increase_cap}}`, if ever filled, must stay within ORS 90.323-90.324; `{{tenant_insurance_minimum}}` must meet ORS 90.222(1).
- **New topics (4):** `tenant-portal`, `tenant-confidential-information`, `informal-dispute-resolution`, `recycling-notice`.
- **Shared rows other states may want to revisit:** `keys` (a during-tenancy re-key charge can be an unlisted fee in closed-fee-list states); `no-alterations` (EV-charger and solar ownership statutes); `hoa-compliance` (fine pass-through vs fee statutes); `rule-violation`-type fees stated only as ceilings (rule 53).
- **Effective_from anomaly:** shared `parking-ks-oh-ca` carries effective_from 1976-01-01 (noticed by a checker; not changed).

## 11. Deliverables
- `lease-clauses-OR-delta.csv`: 223 rows, 17 columns, CRLF, sha256 b2ecc47b263ea07cbe45a5020a75b732cb8870b676120ff224c482eedc27f20d.
- `lease-clause-decision-log-OR.md`: this log.

## 12. Kickoff leads — what each turned out to be
1. Dated text: ORS 90.303 (January 2, 2028) and 90.321 (January 1, 2027) confirmed; 2026 session overlay read (§1.2); rows state their versions; dates in §10.
2. Rent increases: `edu-rent-increase-limit-or`, `edu-rent-increase-notice-or`, `edu-rent-control-preemption-or`; no shared renewal row uses `{{renewal_rent_increase_cap}}`.
3. Termination without cause: `edu-for-cause-eviction-or` (rule 41) and overrides of the end-of-term, holdover, early-termination and surrender clauses.
4. Fees: dormant rows rewritten (§5); `edu-required-fees-or`, `rule-violation-fees-or`, `edu-returned-payments-or`; ORS 90.140 payment types.
5. Deposits and applications: `security-deposit-use-or`, `security-deposit-return-or`, deposit education rows, `edu-application-fees-or`, `edu-holding-deposit-or`, `edu-tenant-screening-or`.
6. Nonpayment and cause: `edu-nonpayment-notice-or`, `edu-emergency-assistance-right-or`, `edu-cure-and-eviction-grounds-or`, `edu-expedited-criminal-eviction-or`, `edu-drug-free-housing-or`.
7. Void terms: ORS 90.245 and 90.250 screened against every shared clause (§2.2; `edu-prohibited-lease-terms-or`).
8. Entry and repairs: `landlords-access-or`, `edu-landlord-entry-or`, `landlord-maintenance-or`, `edu-tenant-repair-remedies-or`.
9. Disclosures: §4.
10. Other protections: victim rows, `portable-cooling-device-or`, `family-child-care-or`, `edu-ev-charging-or`, `edu-immigration-status-or`, `pet-policy-or`.
11. Eviction procedure: ORS 105.100-105.168 read whole (`edu-eviction-process-or` and related rows); ORS 90.420 (`edu-landlord-lien-or`).
12. Scope: `edu-scope-or`; facility series flagged.
13. Local rules: flagged throughout; state preemption of rent control (ORS 91.225).

## 13. Independent check
Separate general-purpose agents, given only `work/check/HOWTO.md`, the batch CSV and the printer tools (`sec.py`, `oar.py`, `sl.py`, `const.py`, `bat.py`, `search.py`), checked rows against the saved sources. The harness doesn't let subagents write files, so each returned its report as text; the reports are summarised in `work/check/r1/ledger.md` and below.
- **Round 1** (6 agents, all 223 rows): 8 ERROR, 167 FIX, 68 NOTE. ERRORs: `keys` (tag removed; `keys-or`), `edu-pool-rules-or`, `edu-for-cause-eviction-or` (first-year definition reversed), `edu-fee-transparency-or`, `edu-rent-control-preemption-or`, `edu-no-deposit-escheat-rule-or`, `edu-security-deposit-interest-or`, `edu-security-deposit-penalty-or`. All ERROR and FIX lines applied; batteries 200-238 added for the absence findings.
- **Round 2** (4 agents, the 127 edited rows): 1 ERROR (`edu-renters-insurance-or`: the claim must exceed the deposit, ORS 90.222(7)(d)(B)), 52 FIX; all applied; batteries 239-240 added.
- **Round 3** (3 agents, 67 rows): 0 ERROR, 22 FIX, 31 NOTE (including the ORS 90.100 renumbering by Or. Laws 2026, ch. 23); all applied; batteries 241-242 added. While answering, Claude also found the ORS 84.070(10)(b) e-notice exclusion and corrected `edu-notice-delivery-or` and the `electronic-signatures` note.
- **Round 4** (2 agents, 29 rows, diffed against the prior version): 0 ERROR, 17 FIX; all applied; `no-alterations` untagged and replaced by `no-alterations-or`.
- **Round 5** (1 agent, 17 rows): 0 ERROR, 3 FIX, 3 NOTE; all applied.
- **Final round** (1 agent): the rows edited after round 5 and this log: 0 ERROR, 0 FIX, 5 NOTE on the 8 rows (all 5 NOTEs applied in the checker's own words); on this log 7 FIX and 6 NOTE (merged-row count, duplicate-battery range, uncited-battery label, `nsf-fee-limit-or` basis in §5, one canvass status left 'Not located', `security-deposit-return-or` missing `supersedes`, the ORS 90.321 currency wording and others), all applied and the log regenerated.
- NOTE lines not applied are optional wording improvements; none changes a rule.

## 14. Statute walk (gap-discovery source 1)
ORS chapter 90 was read whole (notes in `work/notes-ch90.md`) and ORS 105.100 to 105.168 read whole. `work/walk.py` expands every ORS citation in the delta (ranges included) and diffs the chapters' section lists: **chapter 90: 169 sections, 169 cited; ORS 105.100-105.168: 37 sections, 37 cited** (the facility series ORS 90.505-90.850 and the dealer-notice sections 90.860-90.875 are cited as read and out of scope in `edu-scope-or`). Chapter 91 was diffed beside them; the uncited sections and why:
- ORS 91.010-91.110, 91.130, 91.210, 91.220 (tenancy classes, tenancy at will and sufferance, 10-day automatic termination for nonpayment, waiver of notice, written notices, purchaser-seller eviction, rent in advance, liability of persons in possession): do not apply to chapter 90 tenancies (ORS 90.120(1)).
- ORS 91.115 (tenant may not deny landlord's title): general estoppel rule; no lease term needed (Claude's reading).
- ORS 91.230 (farm tenant's emblements): agricultural, out of scope.
- ORS 91.265 (EV charging): commercial rental units only (ORS 91.265(1)(b)); residential EV rules are ORS 90.462 (`edu-ev-charging-or`).
Cited from chapter 91: 91.120, 91.122, 91.140, 91.225, 91.240, 91.245, 91.255.

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Housing Authority of Clackamas County, Oregon, Public Housing Lease (14 pages; no edition date printed; PDF at https://dochub.clackamas.us/documents/drupal/5937fc44-3010-48c4-91a0-53754a6092e0), extracted with pdf.js and saved as text with hashes (§1.1, `sources/or-real-lease-hacc.json`). **Second lead:** Oregon State University, University Housing & Dining Services, Apartment Family Housing Contract, Fiscal Year 2027 (effective July 1, 2026 to June 30, 2027; `sources/or-real-lease-osu.json`). **Why weaker:** no free Oregon realtor or apartment-association form was found (Multifamily NW and the Oregon Rental Housing Association sell theirs, and rule 33 bars suggesting a purchase); the HACC lease is a housing authority's lease for HUD public housing, so many terms come from federal rules (24 CFR 966.4 and 960, ACOP, grievance procedure, income reexamination, community service), and the OSU contract is an institutional contract for 'a space' that cites no Oregon statute. Both are leads about wording only, not law; no text is reproduced here. Neither is a relabelled multi-state template: HACC cites ORS 90.322, 90.392 and 164.205(5) and Clackamas County's own ACOP; OSU cites its own university standards.

### 15.1 Provision map (HACC)
| HACC section (paraphrased) | Library answer for Oregon | Lead? |
|---|---|---|
| 1-2: parties, unit, household, utilities table, definitions | Builder basic terms; `landlord-disclosure-or` (ORS 90.305) | No |
| 3: 12-month term renewing automatically | Federal public housing rule; private tenancies: `edu-for-cause-eviction-or` (ORS 90.427(4)) | No |
| 4.A: rent due on the 1st without demand; payment by check, money order or cashier's check, no cash or credit card | `rent-payment` (tagged), `acceptable-payment-methods-or` (Or. Laws 2026, ch. 23, § 3: check must be allowed; the HACC methods comply) | Confirms check acceptance |
| 4.A.v: rent delinquent if not received by 11:59 p.m. on the 5th; 4.B.i: $25 late fee each month delinquent | `late-fee-limit-or` (fourth-day rule, ORS 90.260(1)); the HACC timing is later than the statutory minimum, which is lawful | Confirms the flat-fee structure |
| 4.A.vi: no partial or over-payments accepted | `edu-waiver-by-acceptance-or` (ORS 90.417(1) lets a landlord refuse partial rent) | No |
| 4.B.ii: tenant pays actual repair cost for damage by tenant, household, guests | `tenant-caused-damage-or`, `security-deposit-use-or` (with the ORS 90.325(3) exceptions HACC omits) | Confirms the carve-out is needed |
| 4.B.iv: prevailing-party attorney fees | `default-by-tenant-or`, `edu-attorney-fees-or` (ORS 90.255) | No |
| 4.C: security deposit; interest to HACC; statement mailed to forwarding address; pet deposit $200 | `security-deposit-use-or`, `security-deposit-return-or`, `edu-security-deposit-interest-or` (no interest rule), `edu-pet-fees-or` | No |
| 5: notices by personal delivery or first class mail; tenant notices by mail or in person | `notices` (tagged), `notice-mail-attach-or`, `edu-notice-delivery-or` | No |
| 6.A: move-in and move-out written condition statements | `edu-no-condition-checklist-or` (no Oregon requirement), `existing-condition` | No |
| 6.B: entry on 48 hours' notice; emergency including welfare checks; written-request entry under ORS 90.322; note left after entry; yard entry without notice | `landlords-access-or`, `yard-maintenance-entry-or` (ORS 90.322(1)(e)) | Prompted the yard-entry option |
| 7.A: occupancy limited to listed members; guests 7 consecutive / 21 days a year; no boarders; mailing address use; excluded persons; absences over 21 days; profit-making with consent; foster children and live-in aides | `permitted-occupants`, `guest-policy`, `guest-policy-day-limit` (tagged), `extended-absence-notice-ks` (Oregon's 7-day rule, ORS 90.340), `residential-use-only-or` | No |
| 7.A.x: renter's insurance not required because of the ORS 90.222(8)-(9) exemptions | `renters-insurance-or`, `edu-renters-insurance-or` | Confirms the exemption text |
| 7.B: criminal and drug activity, fugitive felons, alcohol abuse, disturbances, harmful behavior | `criminal-activity-or` (with the ORS 90.449 victim carve-out HACC's general clause lacks), `edu-expedited-criminal-eviction-or` | Prompted the carve-out check |
| 7.B.x: no smoking in buildings and within 25 feet; smoking addendum | `smoking-policy-or` choice group (ORS 479.305 disclosure) | Confirms the disclosure |
| 7.C: tenant upkeep, reporting, no damage, no alterations or fasteners | `tenant-maintenance-or`, `no-alterations-or`, `common-area-use-or` (portable cooling carve-out, ORS 90.355) | No |
| 7.C.v: alarms tested every six months; $250 fee for tampering | `alarm-duties-or`, `alarm-tampering-fee-or` (ORS 90.302(2)(c)) | Prompted the tampering-fee option |
| 7.E: no assignment or sublease | `no-sublet-assign` (tagged) | No |
| 7.F: tenant-paid utilities; excess-utility surcharges by check meter | `utilities-responsibility` (tagged), `utility-billing-or` (ORS 90.315(4)) | No |
| 7.J: false information is a violation and ground for termination | `rental-application-accuracy` (tagged) | No |
| 7.K: pets and assistance animals approved in writing, pet addendum | `pet-policy-or`, `assistance-animal-accommodation` | No |
| 8: landlord obligations | `landlord-maintenance-or`, `edu-landlord-maintenance-or` | No |
| 9: hazardous damage, alternative accommodations, rent abatement except tenant-caused | `edu-casualty-termination-or`, `tenant-caused-damage-or` | No |
| 11: termination by tenant on 30 days; by HACC for listed grounds; 14 days for nonpayment, 24 hours for threats, 30 days under ORS 90.392 | `edu-termination-notice-or`, `edu-nonpayment-notice-or` (Oregon's 10- or 13-day notice for private tenancies; HACC follows federal rules) | No |
| 12.E: domestic violence under federal VAWA rules | `edu-dv-lease-termination-or`, `edu-dv-eviction-protection-or` (Oregon's own rules) | No |
| 12.G: HACC 'not liable' for loss or injury 'Except to the extent required by law' | Void for negligence under ORS 90.245(1)(c); `edu-prohibited-lease-terms-or` | Not used |
| 12.H: property left after termination disposed of as provided by law | `edu-abandoned-property-or` (ORS 90.425) | No |
| 12.I: non-waiver | `edu-waiver-by-acceptance-or` (ORS 90.412 limits a lease non-waiver) | No |

### 15.2 OSU contract (second lead)
Read in full for topics, not mapped row by row. It is probably outside chapter 90 altogether: residence at an institution 'incidental to' educational services is excluded unless it is off-campus nondormitory housing (ORS 90.110(1); Claude's reading for on-campus family apartments), which explains terms a private Oregon landlord couldn't use: a nonrefundable $50 contract fee and a $200 transfer fee (barred by ORS 90.302(1) for chapter 90 tenancies), 30 days' notice of rent increases (ORS 90.323 requires 90 days and none in the first year), service of termination notices by e-mail plus attachment (ORS 90.155 requires a post-move-in addendum for e-mail), a blanket 'not liable' for personal property (ORS 90.245(1)(c)) and disposal of property left after keys are returned (ORS 90.425). Topics it shares with the library: occupancy limited to two per bedroom (ORS 90.262(3)), guests up to two weeks, seven-day absence notice (ORS 90.340), 24-hour entry notice with written repair requests as consent (ORS 90.322(1)(c), (f)), smoke detector testing every six months and no tampering (ORS 479.275, 479.300), a combustibles and barbecue ban, no smoking or vaping anywhere, the 24-hour termination causes (ORS 90.396), and the federal lead warning. No new topic; it confirms the alarm-testing duty, the smoking disclosure and the 24-hour causes, and its fee terms illustrate why the rule 26 fee screen matters.

### 15.3 What it produced
Two optional clauses traced to the lease (`yard-maintenance-entry-or`, `alarm-tampering-fee-or`) and one carve-out check (the ORS 90.449 victim exception in `criminal-activity-or`). Its 'not liable' term would be void for a private Oregon landlord. Its citations (ORS 90.322, 90.392) are current; no renumbering found.

## 16. Landlord-scenario screen (gap-discovery source 3)
80 scenarios, Claude-generated from application to move-out, sale and foreclosure (the AZ §18.1 model) plus Oregon-specific ones (the first year of occupancy, qualifying landlord reasons and relocation payments, the statewide rent cap, payment by check, tenant portals, confidential information, portable cooling, family child care, the 2027 smoking and well-water rules, natural disasters), run against the final rows:
1. Applicant asked for a screening charge → `edu-application-fees-or`
2. Landlord wants a deposit to hold the unit before signing → `edu-holding-deposit-or`
3. Applicant has a housing voucher → `edu-source-of-income-or`
4. Landlord asks about immigration status or for a Social Security number → `edu-immigration-status-or`, `edu-protected-class-inquiries-or`
5. Applicant has an old eviction, an arrest or a conviction → `edu-tenant-screening-or`, `edu-eviction-record-sealing-or`
6. Application denied → `edu-tenant-screening-or` (written reasons within 14 days)
7. Family with children applies; occupancy limit → `edu-children-occupancy-or`, `edu-occupancy-limits-or`
8. Assistance animal request with a no-pet policy → `assistance-animal-accommodation` (tagged), `edu-assistance-animals-or`, `edu-pet-fees-or`
9. Tenant with a disability asks to install grab bars → `edu-disability-accommodation-or`
10. Unit is affordable housing with a restriction ending → `edu-affordability-restriction-notice-or`
11. What must be in or given with the lease at signing → `smoking-policy-or` choice group, `landlord-disclosure-or`, `security-deposit-use-or`, `alarm-duties-or`, `flood-plain-notice-or`, `foreclosure-disclosure-or`, `shared-utility-disclosure-or`, `utility-billing-or`, `recycling-notice-or`, `renters-insurance-or` (§4)
12. Lease signed electronically or through a portal → `electronic-signatures` (tagged), `edu-tenant-portal-or`
13. Tenant asks for a copy of the lease → `edu-lease-copy-or`
14. Large deposit plus a pet deposit → `edu-no-security-deposit-cap-or`, `edu-pet-fees-or`, `due-at-signing-or`
15. Landlord wants to raise the deposit mid-tenancy → `edu-deposit-installments-or`
16. Nonrefundable cleaning, admin or move-in fee → `edu-required-fees-or` (barred)
17. Last month's rent collected up front → `edu-last-month-rent-or`, `due-at-signing-or`
18. Carpet cleaning charge at move-out → `carpet-cleaning-deduction-or`
19. Move-in condition record → `existing-condition` (tagged), `edu-no-condition-checklist-or`
20. Rent due date and weekends → `rent-payment` (tagged), `late-fee-limit-or`
21. Late fee amount and when it can be charged → `late-fee-limit-or`, `edu-late-fee-or`
22. Tenant pays in cash and wants a receipt → `edu-rent-receipts-or`
23. Rent check bounces → `nsf-fee-limit-or`, `edu-returned-payments-or`
24. Landlord wants rent paid only online → `acceptable-payment-methods-or`, `edu-acceptable-payment-methods-or`
25. Card processing fee passed to the tenant → `acceptable-payment-methods-or`
26. Partial payment; what gets paid first → `application-of-payments-or`, `edu-waiver-by-acceptance-or`
27. Rent paid in two installments a month → `rent-installments-or`
28. Raising the rent at renewal → `edu-rent-increase-limit-or`, `edu-rent-increase-notice-or`, `edu-rent-control-preemption-or`
29. Adding a parking or pet charge mid-lease → `edu-term-change-notice-or`, `edu-fees-as-rent-or`
30. Free first month → `edu-rent-concession-or`
31. Interest on unpaid amounts → `edu-unpaid-damages-interest-or`
32. Entering to show the unit or do repairs → `landlords-access-or`, `edu-landlord-entry-or`
33. Landlord does the yard work → `yard-maintenance-entry-or`
34. Tenant reports no heat or hot water → `edu-heating-or`, `edu-tenant-repair-remedies-or`
35. Tenant wants to fix a leaky faucet and deduct → `edu-tenant-repair-remedies-or`
36. Tenant-caused damage makes the unit unlivable → `tenant-caused-damage-or`, `edu-no-landlord-self-cure-or`
37. Fire or wildfire damage → `edu-casualty-termination-or`
38. Mold, pests, bed bugs → `edu-no-mold-disclosure-or`, `edu-no-bed-bug-rule-or`
39. Smoke and CO alarms; who replaces batteries; tampering → `alarm-duties-or`, `alarm-tampering-fee-or`, `edu-alarm-duties-or`
40. Water heater setting before move-in → `edu-no-water-heater-rule-or`
41. Tenant wants a window air conditioner → `portable-cooling-device-or`, `common-area-use-or`, `edu-heating-or`
42. App-based smart lock → `edu-security-devices-or`, `edu-tenant-portal-or`
43. Tenant changes the locks → `keys-or`, `edu-dv-lockchange-or`
44. Guest staying for weeks; temporary occupant → `guest-policy` (tagged), `edu-temporary-occupancy-or`, `edu-unauthorized-occupants-or`
45. Tenant wants to sublet or list on a short-term rental site → `no-sublet-assign` (tagged)
46. Tenant runs a home day care → `residential-use-only-or`, `family-child-care-or`
47. Smoking or cannabis use and growing → `smoking-policy-or`, `edu-smoking-or`, `edu-cannabis-or`, `cannabis-cultivation-or`
48. Firearms in the unit → `edu-firearms-or`
49. Tenant's car parked in someone's space; towing; expired tags → `parking-vehicle-rules-or`, `parking-tag-towing-or`, `edu-towing-or`
50. HOA fines the owner for the tenant's conduct → `hoa-compliance-or`, `edu-hoa-or`
51. Tenant wants an EV charger → `edu-ev-charging-or`
52. New house rules mid-lease → `edu-rules-regulations-or`
53. Tenant complains to the city; landlord then serves notice → `edu-retaliation-or`
54. Rent unpaid: the notice to serve → `edu-nonpayment-notice-or`, `edu-emergency-assistance-right-or`, `rent-payment-location-or`
55. Lease violation other than rent → `default-by-tenant-or`, `edu-cure-and-eviction-grounds-or`
56. Drug activity or violence at the unit → `edu-expedited-criminal-eviction-or`, `criminal-activity-or`, `edu-nuisance-or`
57. Filing an eviction → `edu-eviction-process-or`, `edu-attorney-fees-or`
58. Landlord changes the locks or cuts utilities → `edu-self-help-eviction-or`
59. Ending a month-to-month tenancy in year one; after year one → `edu-for-cause-eviction-or`, `edu-termination-notice-or`
60. Fixed term ends after the first year → `holdover-or`, `surrender-end-of-term-or`, `edu-for-cause-eviction-or`
61. Owner wants to move in or sell to an owner-occupant → `edu-for-cause-eviction-or`, `edu-sale-or-management-change-or`
62. Owner lives in a duplex and wants the other unit back → `edu-for-cause-eviction-or`
63. Tenant wants out early (job move) → `early-termination-or`, `edu-statutory-early-termination-or`
64. Servicemember gets orders → `edu-servicemember-rights-or`
65. Domestic violence victim wants to leave or change locks → `edu-dv-lease-termination-or`, `edu-dv-lockchange-or`, `edu-dv-eviction-protection-or`, `edu-victim-confidentiality-or`
66. Tenant moves to assisted living → `edu-no-infirmity-termination-or`
67. Tenant abandons the unit; belongings left → `edu-abandonment-mitigation-or`, `edu-abandoned-property-or`
68. Property left after the sheriff's writ → `edu-post-eviction-property-or`
69. Sole tenant dies → `edu-tenant-death-or`, `tenant-death-contact-or`
70. Deposit return and deductions → `security-deposit-return-or`, `edu-security-deposit-penalty-or`
71. Uncashed deposit refund → `edu-no-deposit-escheat-rule-or`
72. Selling the property with a tenant in place → `edu-sale-or-management-change-or`, `edu-security-deposit-on-sale-or`
73. Foreclosure on the rental → `foreclosure-disclosure-or`, `edu-foreclosure-or`
74. Converting to condominiums → `edu-conversion-notice-or`
75. Unit posted unsafe by the city → `edu-condemned-premises-or`, `edu-casualty-termination-or`
76. Former meth lab → `edu-meth-contamination-or`
77. Rental on a well in a groundwater management area (2027) → `well-water-testing-notice-or`, `edu-private-well-testing-or`
78. Landlord wants to share a tenant's phone number or income records → `edu-tenant-confidential-information-or`
79. A city rental registration or inspection program → `edu-rental-inspection-or`, `edu-no-landlord-registration-or`
80. Unit in a manufactured home park or marina → `edu-scope-or` (out of scope)

Every scenario is answered by a row.

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The batteries (§1.3) ran over the whole ORS, OAR, Constitution and 2026 session laws. What they turned up outside chapters 90, 91 and 105 and used in rows: ORS 30.701 (dishonored checks), 82.010 (interest), 18.345 and 18.618 (exemptions, deposit garnishment), 87.005-87.030 (construction liens), 98.302-98.352 (unclaimed property), 105.420-105.455 (receivership), 105.550-105.600 (place nuisances), 166.170 and 167.352 (firearm preemption; assistance animals), 448.005-448.035 (pools), 453.867-453.885 (drug-lab sites), 475C.013, 475C.792, 475C.815, 475C.831 (cannabis), 479.250-479.305 (alarms, smoking), 646.605-646.641 (trade practices, collection), 659A.145, 659A.421, 659A.855 (civil rights), 696.241 (property managers), 701.510 (lead renovation), 84.070 (electronic notices); OAR 839-005-0220 (assistance animals), 863-025 (property managers' trust accounts and leases), 860-021-0326, 860-036-1550, 860-037-0230 (utility shutoffs), 333-060-1000 and 333-062-1000 (pools), 333-040 (drug labs), 333-029-0050 (lodging hot water), 333-008 (medical cannabis), 813-115-0035 (affordability notices); and the Constitution's jury guarantee (art. I, § 17; art. VII (Amended), § 3). The full battery list, with hits, positives and scope, is in `batteries/or-batteries.jsonl`; each absence row cites its battery by id.

## 18. Topic reference canvass (rules 27, 36)

### 18.1 Topics answered by an OR row (193 reference topics + 4 new)
- `abandoned-property`: Present — `edu-abandoned-property-or`
- `abandonment-and-mitigation`: Present — `edu-abandonment-mitigation-or`
- `acceptable-payment-methods`: Present — `acceptable-payment-methods-or`, `edu-acceptable-payment-methods-or`
- `addendum-precedence`: Present — `addendum-precedence` (tagged)
- `alarm-duties`: Present — `alarm-duties-or`, `alarm-tampering-fee-or`, `edu-alarm-duties-or`
- `algorithmic-rent-setting`: Present — `edu-no-algorithmic-rent-rule-or`
- `alterations`: Present — `no-alterations-or`
- `appliances-included`: Present — `appliances-included` (tagged)
- `application-fees`: Present — `edu-application-fees-or`
- `application-of-payments`: Present — `application-of-payments-or`
- `assigned-parking-space`: Present — `assigned-parking-space` (tagged)
- `assistance-animal-accommodation`: Present — `edu-assistance-animals-or`, `assistance-animal-accommodation` (tagged)
- `attorney-fees`: Present — `edu-attorney-fees-or`
- `bed-bug-disclosure`: Present — `edu-no-bed-bug-rule-or`
- `cannabis`: Present — `edu-cannabis-or`, `cannabis-cultivation-or`
- `casualty-termination`: Present — `edu-casualty-termination-or`
- `children-occupancy`: Present — `edu-children-occupancy-or`
- `collection-fee`: Present — `edu-collection-practices-or`
- `common-area-use`: Present — `common-area-use-or`
- `condemned-premises-rent-bar`: Present — `edu-condemned-premises-or`
- `condition-inspection`: Present — `edu-no-condition-checklist-or`
- `construction-liens`: Present — `edu-construction-liens-or`
- `consumer-protection-act`: Present — `edu-consumer-protection-act-or`
- `conversion-notice`: Present — `edu-conversion-notice-or`
- `criminal-activity`: Present — `criminal-activity-or`
- `cure-and-eviction-grounds`: Present — `edu-cure-and-eviction-grounds-or`
- `default-by-tenant`: Present — `default-by-tenant-or`
- `deposit-cost-schedule`: Present — `carpet-cleaning-deduction-or`
- `deposit-escheat`: Present — `edu-no-deposit-escheat-rule-or`
- `deposit-installments`: Present — `edu-deposit-installments-or`
- `deposit-last-month-rent`: Present — `edu-last-month-rent-or`
- `disability-accommodation`: Present — `edu-disability-accommodation-or`
- `disaster-duties`: Present — `edu-natural-disaster-or`
- `disturbance`: Present — `no-disturbance` (tagged)
- `drug-free-housing-addendum`: Present — `edu-drug-free-housing-or`
- `due-at-signing`: Present — `due-at-signing-or`
- `dv-confidentiality`: Present — `edu-victim-confidentiality-or`
- `dv-eviction-protection`: Present — `edu-dv-eviction-protection-or`
- `dv-lease-termination`: Present — `edu-dv-lease-termination-or`
- `dv-lockchange`: Present — `edu-dv-lockchange-or`
- `early-termination`: Present — `early-termination-or`
- `electronic-signatures`: Present — `electronic-signatures` (tagged)
- `emergency-assistance-right`: Present — `edu-emergency-assistance-right-or`
- `entire-agreement`: Present — `entire-agreement` (tagged)
- `ev-charging`: Present — `edu-ev-charging-or`
- `eviction-hardship-stay`: Present — `edu-eviction-hardship-stay-or`
- `eviction-process`: Present — `edu-eviction-process-or`
- `eviction-record-sealing`: Present — `edu-eviction-record-sealing-or`
- `existing-condition`: Present — `existing-condition` (tagged)
- `expedited-criminal-eviction`: Present — `edu-expedited-criminal-eviction-or`
- `extended-absence-notice`: Present — `extended-absence-notice-ks` (tagged)
- `fair-housing`: Present — `edu-fair-housing-or`
- `fee-in-lieu-of-deposit`: Present — `edu-no-fee-in-lieu-of-deposit-or`
- `fee-transparency`: Present — `edu-fee-transparency-or`
- `fees-as-rent`: Present — `edu-fees-as-rent-or`
- `fire-safety-grilling`: Present — `fire-safety-grilling` (tagged)
- `firearms`: Present — `edu-firearms-or`
- `flood-disclosure`: Present — `flood-plain-notice-or`, `edu-flood-disclosure-or`
- `for-cause-eviction`: Present — `edu-for-cause-eviction-or`
- `foreclosure`: Present — `edu-foreclosure-or`
- `foreclosure-disclosure`: Present — `foreclosure-disclosure-or`
- `foreign-ownership`: Present — `edu-no-foreign-ownership-limit-or`
- `governing-law`: Present — `governing-law` (tagged)
- `guest-policy`: Present — `guest-policy` (tagged)
- `guest-policy-day-limit`: Present — `guest-policy-day-limit` (tagged)
- `heating`: Present — `edu-heating-or`
- `hoa`: Present — `edu-hoa-or`
- `hoa-compliance`: Present — `hoa-compliance-or`
- `holding-deposit`: Present — `edu-holding-deposit-or`
- `holdover`: Present — `holdover-or`
- `holdover-rate`: Present — `edu-holdover-rate-or`
- `homestead-waiver`: Present — `edu-exemption-waiver-or`
- `immigration-status`: Present — `edu-immigration-status-or`
- `infirmity-termination`: Present — `edu-no-infirmity-termination-or`
- `inspection-rights`: Present — `inspection-rights` (tagged)
- `joint-liability`: Present — `joint-liability` (tagged)
- `jury-waiver`: Present — `edu-jury-waiver-or`
- `keys`: Present — `keys-or`
- `knowing-use-penalty`: Present — `edu-knowing-use-penalty-or`
- `landlord-entry`: Present — `landlords-access-or`, `edu-landlord-entry-or`
- `landlord-lien`: Present — `edu-landlord-lien-or`
- `landlord-maintenance`: Present — `landlord-maintenance-or`, `edu-landlord-maintenance-or`
- `landlord-registration`: Present — `edu-no-landlord-registration-or`
- `landlord-self-cure`: Present — `edu-no-landlord-self-cure-or`
- `late-fee`: Present — `late-fee-limit-or`, `edu-late-fee-or`
- `lead-based-paint`: Present — `edu-lead-based-paint-or`, `lead-based-paint` (tagged)
- `lease-completeness`: Present — `edu-no-lease-completeness-rule-or`
- `lease-content-requirements`: Present — `edu-lease-content-requirements-or`
- `lease-copy`: Present — `edu-lease-copy-or`
- `lease-type-parity`: Present — `edu-lease-type-parity-or`
- `meth-disclosure`: Present — `edu-meth-contamination-or`
- `military-air-zone-disclosure`: Present — `edu-no-military-zone-disclosure-or`
- `minor-tenant-filing`: Present — `edu-minor-tenants-or`
- `mold-disclosure`: Present — `edu-no-mold-disclosure-or`
- `nonpayment-notice`: Present — `rent-payment-location-or`, `edu-nonpayment-notice-or`
- `notice-delivery-methods`: Present — `notice-mail-attach-or`, `actual-notice-method-or`, `edu-notice-delivery-or`
- `notices`: Present — `notices` (tagged)
- `nuisance`: Present — `edu-nuisance-or`
- `owner-identity-disclosure`: Present — `landlord-disclosure-or`
- `parking`: Present — `parking-ks-oh-ca` (tagged)
- `parking-vehicle-rules`: Present — `parking-vehicle-rules-or`
- `periodic-services-entry`: Present — `yard-maintenance-entry-or`
- `permitted-occupants`: Present — `edu-occupancy-limits-or`, `edu-temporary-occupancy-or`, `permitted-occupants` (tagged)
- `pet-fees`: Present — `edu-pet-fees-or`
- `pet-insurance-requirement`: Present — `pet-insurance-requirement-or`
- `pet-policy`: Present — `pet-policy-or`
- `plain-language`: Present — `edu-no-plain-language-rule-or`
- `pool-safety`: Present — `edu-pool-rules-or`
- `portable-cooling-device`: Present — `portable-cooling-device-or`
- `portable-solar`: Present — `edu-portable-solar-or`
- `possession-delay`: Present — `possession-delay` (tagged)
- `post-eviction-property`: Present — `edu-post-eviction-property-or`
- `private-well-testing`: Present — `well-water-testing-notice-or`, `edu-private-well-testing-or`
- `prohibited-lease-terms`: Present — `edu-prohibited-lease-terms-or`
- `protected-class-inquiry-ban`: Present — `edu-protected-class-inquiries-or`
- `quiet-possession`: Present — `edu-no-quiet-possession-statute-or`
- `radon-disclosure`: Present — `edu-no-radon-disclosure-or`
- `rent-concession`: Present — `edu-rent-concession-or`
- `rent-control`: Present — `edu-rent-increase-limit-or`, `edu-rent-control-preemption-or`
- `rent-increase-notice`: Present — `edu-rent-increase-notice-or`
- `rent-into-court-counterclaim`: Present — `edu-rent-into-court-or`
- `rent-payment`: Present — `rent-installments-or`, `rent-payment` (tagged)
- `rent-receipts`: Present — `edu-rent-receipts-or`
- `rent-reporting`: Present — `edu-no-rent-reporting-rule-or`
- `rent-tax`: Present — `edu-rent-tax-or`
- `rental-application-accuracy`: Present — `rental-application-accuracy` (tagged)
- `rental-inspection`: Present — `edu-rental-inspection-or`
- `renters-insurance-rules`: Present — `edu-renters-insurance-or`
- `required-disclosures`: Present — `edu-affordability-restriction-notice-or`
- `required-fees`: Present — `edu-required-fees-or`, `rule-violation-fees-or`
- `residential-use-only`: Present — `residential-use-only-or`, `family-child-care-or`
- `retaliation`: Present — `edu-retaliation-or`
- `returned-payments`: Present — `nsf-fee-limit-or`, `edu-returned-payments-or`
- `rules-regulations`: Present — `edu-rules-regulations-or`
- `sale-or-management-change`: Present — `edu-sale-or-management-change-or`
- `scope`: Present — `edu-scope-or`
- `security-deposit-cap`: Present — `edu-no-security-deposit-cap-or`
- `security-deposit-holding`: Present — `edu-no-deposit-holding-rule-or`
- `security-deposit-interest`: Present — `edu-security-deposit-interest-or`
- `security-deposit-on-sale`: Present — `edu-security-deposit-on-sale-or`
- `security-deposit-penalty`: Present — `edu-security-deposit-penalty-or`
- `security-deposit-return`: Present — `security-deposit-return-or`
- `security-deposit-use`: Present — `security-deposit-use-or`
- `security-devices`: Present — `edu-security-devices-or`
- `self-help-eviction`: Present — `edu-self-help-eviction-or`
- `service-animal-denial-penalty`: Present — `edu-service-animal-denial-penalty-or`
- `service-animal-misrepresentation`: Present — `edu-service-animal-misrepresentation-or`
- `servicemember-rights`: Present — `edu-servicemember-rights-or`
- `services-utilities-provided`: Present — `services-utilities-provided-ks-oh` (tagged)
- `severability`: Present — `severability` (tagged)
- `sex-offender-occupancy`: Present — `edu-sex-offender-or`
- `shutdown-rent-protection`: Present — `edu-no-shutdown-protection-or`
- `smoking-policy`: Present — `smoking-policy-or`, `smoking-limited-areas-or`, `smoking-allowed-or`, `edu-smoking-or`
- `source-of-income`: Present — `edu-source-of-income-or`
- `statute-of-frauds-lease-term`: Present — `edu-statute-of-frauds-or`
- `statutory-early-termination`: Present — `edu-statutory-early-termination-or`
- `statutory-forms`: Present — `edu-statutory-forms-or`
- `stigmatized-property`: Present — `edu-no-stigma-disclosure-rule-or`
- `storage-space`: Present — `storage-space-ks-oh-ca` (tagged)
- `sublet-assign`: Present — `no-sublet-assign` (tagged)
- `substandard-property-receivership`: Present — `edu-receivership-or`
- `surrender-end-of-term`: Present — `surrender-end-of-term-or`
- `telecom-access`: Present — `edu-no-telecom-access-rule-or`
- `tenant-caused-damage`: Present — `tenant-caused-damage-or`
- `tenant-death`: Present — `tenant-death-contact-or`, `edu-tenant-death-or`
- `tenant-display-rights`: Present — `edu-no-display-rule-or`
- `tenant-forward-proceedings`: Present — `tenant-forward-proceedings-ca` (tagged)
- `tenant-maintenance`: Present — `tenant-maintenance-or`
- `tenant-repair-agreement`: Present — `tenant-maintenance-tasks-or`
- `tenant-repair-remedies`: Present — `edu-tenant-repair-remedies-or`
- `tenant-right-to-organize`: Present — `edu-tenant-organizing-or`
- `tenant-rights-statement`: Present — `edu-no-tenant-rights-statement-or`
- `tenant-screening`: Present — `edu-tenant-screening-or`
- `tenant-security-cameras`: Present — `edu-no-camera-rule-or`
- `tenant-statutory-duties`: Present — `edu-tenant-statutory-duties-or`
- `tenants-property-insurance`: Present — `renters-insurance-or`
- `term-change-notice`: Present — `edu-term-change-notice-or`
- `termination-notice`: Present — `edu-termination-notice-or`
- `towing`: Present — `parking-tag-towing-or`, `edu-towing-or`
- `translation-duty`: Present — `edu-translation-or`
- `unauthorized-occupant-removal`: Present — `edu-unauthorized-occupants-or`
- `unconscionability`: Present — `edu-unconscionability-or`
- `unpaid-damages-interest`: Present — `edu-unpaid-damages-interest-or`
- `utilities-paid-by-landlord`: Present — `utilities-paid-by-landlord` (tagged)
- `utilities-responsibility`: Present — `utilities-responsibility` (tagged)
- `utility-apportionment`: Present — `shared-utility-disclosure-or`
- `utility-landlord-account`: Present — `edu-utility-landlord-account-or`
- `utility-payment-evidence`: Present — `utility-payment-evidence` (tagged)
- `utility-service-continuity`: Present — `utility-service-continuity` (tagged)
- `utility-shutoff-statute`: Present — `edu-utility-shutoff-or`
- `utility-submetering-disclosure`: Present — `utility-billing-or`
- `waiver-by-acceptance`: Present — `edu-waiver-by-acceptance-or`
- `water-heater-temperature`: Present — `edu-no-water-heater-rule-or`
- `tenant-portal` (new topic): Present — `edu-tenant-portal-or`
- `recycling-notice` (new topic): Present — `recycling-notice-or`
- `tenant-confidential-information` (new topic): Present — `edu-tenant-confidential-information-or`
- `informal-dispute-resolution` (new topic): Present — `informal-dispute-resolution-or`

### 18.2 Topics with no OR row (status and reason) (131)
- `adverse-proceeding-notice`: Answered elsewhere: `foreclosure-disclosure-or` (ORS 90.310 pre-signing disclosure of foreclosure, forfeiture and tax-lien proceedings) and `tenant-forward-proceedings-ca` (tagged)
- `alt-housing`: Answered elsewhere: `edu-tenant-repair-remedies-or` (substitute housing under ORS 90.365(1)(c)); no landlord relocation duty for a nonemergency condition was found
- `appliances-excluded`: Answered elsewhere: `appliances-included` (tagged; OR note on ORS 90.365(4): no duty to supply a stove or refrigerator not supplied or agreed)
- `automatic-renewal`: Answered elsewhere: `edu-for-cause-eviction-or` and `holdover-or` (a fixed term ending after the first year of occupancy generally becomes month-to-month by statute unless ORS 90.427(4)(c)(A)-(C) applies); Oregon has no lease option that changes that, so no clause
- `balcony-inspection`: Not applicable: another state's building-inspection program; no Oregon balcony inspection statute found (not specifically searched beyond (OR battery 46 (rental housing inspection programs): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142))
- `bed-bug-cooperation`: Answered elsewhere: `edu-no-bed-bug-rule-or` (ORS 90.325(1)(b) cooperation duty)
- `casualty-and-mitigation-waivable`: Answered elsewhere: `edu-casualty-termination-or` (no general casualty statute to waive) and `edu-abandonment-mitigation-or` (mitigation, ORS 90.410(3), 90.125)
- `certificate-of-occupancy-disclosure`: Not applicable: another state's disclosure; no Oregon counterpart found
- `cold-weather-vacate-notice`: Not applicable: another state's rule; no Oregon counterpart found
- `confession-of-judgment`: Answered elsewhere: `edu-prohibited-lease-terms-or` (ORS 90.245(1)(b))
- `confirmed-absences-habitability`: Not applicable: a single-state bundle of absences; Oregon's habitability answers are `edu-landlord-maintenance-or` and the topic rows
- `confirmed-absences-misc`: Not applicable: a single-state bundle; Oregon answers each topic separately in this table
- `confirmed-absences-outside-title`: Not applicable: a single-state bundle; Oregon's squatter remedy is `edu-unauthorized-occupants-or` (ORS 91.140), cash receipts `edu-rent-receipts-or` (ORS 90.140(2)); no landlord registration precondition (`edu-no-landlord-registration-or`)
- `defective-drywall-disclosure`: Not applicable: another state's disclosure; none in Oregon
- `deposit-surrender-notice`: Answered elsewhere: `security-deposit-return-or` (31-day accounting runs from termination and delivery of possession, ORS 90.300(12))
- `designated-repairer`: Answered elsewhere: `edu-tenant-repair-remedies-or` (landlord may specify reasonable repair people for the minor-defect remedy, ORS 90.368(4)(b))
- `disaster-displaced-guests`: Not applicable: another state's rule; no Oregon counterpart found
- `double-letting`: Confirmed absent (OR battery 71 (double letting): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `dv-deposit-timing`: Answered elsewhere: `edu-dv-lease-termination-or` (deposits accounted for after the remaining tenants leave, ORS 90.456)
- `dv-protection-order-chapter-moved`: Not applicable: another state's recodification note
- `dv-qualifying-documents`: Answered elsewhere: `edu-dv-lease-termination-or` (verification list and form, ORS 90.453(1)(c), (3))
- `electric-submetering-disclosure`: Answered elsewhere: `utility-billing-or` (ORS 90.315(4) billing explanation); no separate electric-submetering disclosure found (OR battery 92 (water and sewer billing by landlords (submetering)): 59 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `emergency-contact`: Answered elsewhere: `edu-tenant-confidential-information-or` (phone and e-mail may be shared for repairs, maintenance or utilities, Or. Laws 2026, ch. 61, § 2) and `tenant-death-contact-or`
- `employee-screening`: Confirmed absent (OR battery 83 (employee background screening for rental staff): 4 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `environmental-event-termination`: Answered elsewhere: `edu-natural-disaster-or` and `edu-casualty-termination-or`
- `ev-charging-end-of-tenancy`: Answered elsewhere: `edu-ev-charging-or` (station is the tenant's personal property unless negotiated; licensed removal; tenant pays damage, ORS 90.462(5)-(8))
- `ev-charging-requirements`: Answered elsewhere: `edu-ev-charging-or`
- `ev-charging-shared-area`: Answered elsewhere: `edu-ev-charging-or` (installation in or near the tenant's assigned space; landlord conditions, ORS 90.462(1), (4))
- `eviction-penalty-clause-ban`: Answered elsewhere: `edu-required-fees-or` (fees not on the ORS 90.302 list, and liquidated damages, are barred)
- `eviction-service-party`: Not applicable: another state's rule; Oregon summons service is ORS 105.135 (`edu-eviction-process-or`)
- `exculpatory-clauses`: Answered elsewhere: `edu-prohibited-lease-terms-or` (ORS 90.245(1)(c))
- `expedited-deposit-disposition`: Not applicable: another state's rule; none in Oregon beyond the 31-day rule
- `fee-unprovided-service`: Answered elsewhere: `edu-required-fees-or`
- `fire-code-standard`: Answered elsewhere: `fire-safety-grilling` (tagged; Oregon Fire Code note) and `edu-alarm-duties-or`
- `fire-sprinkler-duty`: Confirmed absent for a landlord retrofit duty (OR battery 68 (fire sprinklers): 16 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); tenant may not tamper with sprinkler heads (ORS 90.325(2)(c)), in `edu-tenant-statutory-duties-or`
- `forfeiture-redemption`: Answered elsewhere: `edu-nonpayment-notice-or` (tender before judgment, ORS 90.395(3)(c))
- `frozen-standard-incorporation`: Not applicable: another state's incorporation issue
- `furnishings-included`: Answered elsewhere: `appliances-included` (tagged); no Oregon furnishings statute
- `good-cause-notice`: Answered elsewhere: `edu-for-cause-eviction-or`
- `government-fee-reimbursement`: Not applicable: another state's rule
- `governmental-fines`: Answered elsewhere: `hoa-compliance-or` and `edu-hoa-or` (association fines recovered as damages for the tenant's breach, ORS 90.401(2); move-in and move-out assessments under ORS 90.302(7)(f)); a city fine passed to a tenant is a fee ORS 90.302 doesn't list, recoverable only as damages for a breach that caused it (Claude's reading)
- `guarantor-renewal`: Confirmed absent (OR battery 78 (guarantors of residential leases): 14 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `guest-rights`: Confirmed absent (OR battery 144 (guest stays and visitor limits): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `habitability-materiality`: Answered elsewhere: `edu-tenant-repair-remedies-or` ('material noncompliance', ORS 90.360(1))
- `habitability-modifiable`: Answered elsewhere: `tenant-maintenance-tasks-or` and `edu-landlord-maintenance-or` (ORS 90.320(2))
- `habitability-presumption`: Not applicable: another state's presumption
- `habitability-waiver`: Answered elsewhere: `edu-landlord-maintenance-or` (ORS 90.250; ORS 90.245(1)(a); only who performs specified tasks may be agreed, ORS 90.320(2))
- `hazardous-contamination-disclosure`: Confirmed absent beyond the drug-lab rules (OR battery 82 (hazardous substance or contamination disclosure to tenants): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); `edu-meth-contamination-or`
- `health-district-rental-rules`: Not applicable: another state's local-health rule
- `inspection-condemnation-disclosure`: Answered elsewhere: `edu-condemned-premises-or` (ORS 90.380(3)-(4))
- `inspection-notice-penalty`: Not applicable: another state's rule
- `key-control-policy`: Not applicable: another state's rule
- `landlord-breach-remedy`: Answered elsewhere: `edu-tenant-repair-remedies-or`
- `landlord-liability-insurance`: Answered elsewhere: `renters-insurance-or` and `edu-renters-insurance-or` (landlord must carry comparable insurance to require renter's insurance, ORS 90.222(5))
- `landlord-remedies-termination`: Answered elsewhere: `default-by-tenant-or`
- `landscaping-irrigation`: Answered elsewhere: `tenant-maintenance-tasks-or` (ORS 90.320(2)); shared clause not tagged (§2.2)
- `late-fee-limit`: Answered elsewhere: `late-fee-limit-or` (topic `late-fee`)
- `law-enforcement-cooperation`: Not applicable: another state's rule
- `lead-safe-certification`: Not applicable: another state's certificate
- `lease-notice-initial-requirement`: Not applicable: another state's rule
- `lease-term-limitation`: Not applicable: another state's rule; Oregon sets none
- `lease-type-size`: Answered elsewhere: `edu-no-plain-language-rule-or`
- `liquidated-damages`: Answered elsewhere: `edu-prohibited-lease-terms-or`, `edu-holdover-rate-or` (ORS 90.302(5))
- `lockout-for-rent-delinquency`: Answered elsewhere: `edu-self-help-eviction-or` (barred)
- `maintenance-duty-shift`: Answered elsewhere: `tenant-maintenance-tasks-or`
- `meter-conservation-charge`: Not applicable: another state's charge
- `municipal-utility-lien`: Answered elsewhere: `edu-utility-landlord-account-or` (ORS 91.255)
- `nonrefundable-deposit-notice`: Answered elsewhere: `edu-required-fees-or` (no fee at the start of the tenancy, ORS 90.302(1); fees need no accounting, ORS 90.302(4))
- `nonrefundable-deposit-separate-notice`: Not applicable: another state's rule
- `nonresident-owner-agent`: Answered elsewhere: `landlord-disclosure-or` (an owner or agent for service, ORS 90.305(1)(b)); no in-state agent requirement (OR battery 57 (nonresident or out-of-state owner, in-state agent): 8 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `notice-service-fee`: Answered elsewhere: `edu-required-fees-or` (not an allowed fee)
- `notice-to-quit-waiver`: Answered elsewhere: `edu-prohibited-lease-terms-or` (waiver of chapter 90 rights barred, ORS 90.245(1)(a))
- `notice-to-vacate-additional-terms`: Not applicable: another state's rule
- `optional-lease-terms`: Answered elsewhere: §6.1 optional clauses
- `ordnance-demolition-meter-disclosures`: Not applicable: another state's disclosures
- `other-landlord-facilities`: Not applicable: another state's rule
- `owner-move-in-reservation`: Answered elsewhere: `edu-for-cause-eviction-or` (owner or family move-in is a statutory qualifying reason, ORS 90.427(5)(a)(C); no lease reservation needed)
- `parking-rules-notice`: Answered elsewhere: `parking-tag-towing-or` and `edu-towing-or`
- `part5-nonwaivable`: Not applicable: another state's statute structure
- `pest-control-notice`: Confirmed absent (OR battery 74 (pesticides and pest control notice): 35 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); `edu-no-bed-bug-rule-or`
- `political-access`: Answered elsewhere: `edu-tenant-organizing-or` (facility-only canvassing rights, ORS 90.750-90.755)
- `portfolio-thresholds`: Answered elsewhere: the four-unit exemption from the relocation payment (`edu-for-cause-eviction-or`, ORS 90.427(6)(b)), the four-unit foreclosure disclosure (`foreclosure-disclosure-or`) and the five-unit recycling duty (`recycling-notice-or`)
- `possession-bond`: Not applicable: another state's rule
- `prohibited-acts-renter`: Answered elsewhere: `edu-tenant-statutory-duties-or` (ORS 90.325(2))
- `promises-to-repair`: Not applicable: another state's administrative rule; no Oregon counterpart found
- `prop65-rental-warning`: Not applicable: California
- `property-tax-rent-disclosure`: Confirmed absent (OR battery 76 (property tax portion of rent disclosure): 70 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `purpose-limitation`: Answered elsewhere: `residential-use-only-or`
- `redemption`: Answered elsewhere: `edu-nonpayment-notice-or` (ORS 90.395(3)(c))
- `religious-cultural-display`: Answered elsewhere: `edu-no-display-rule-or`
- `rent-demand-bar`: Not applicable: another state's rule
- `rent-escalation`: Answered elsewhere: `edu-rent-increase-limit-or` (no increase in the first year; fixed-term terms can't change unilaterally, ORS 90.220(2), 90.323(2))
- `rent-receipt-anti-waiver`: Answered elsewhere: `edu-landlord-maintenance-or` (ORS 90.250)
- `repair-cost-termination`: Not applicable: another state's rule
- `repair-escrow-exemption-notice`: Not applicable: another state's rule
- `repair-notice`: Answered elsewhere: `landlord-maintenance-or` (written repair notice) and `edu-tenant-repair-remedies-or`
- `security-deposit-nonwaiver`: Answered elsewhere: `edu-prohibited-lease-terms-or` (ORS 90.245(1)(a))
- `security-deposit-standards`: Not applicable: another state's rule
- `senior-housing-work-card`: Not applicable: another state's rule
- `sex-offender-disclosure`: Answered elsewhere: `edu-sex-offender-or` (no disclosure duty; ORS 93.275(1)(d) makes a nearby registrant not a material fact)
- `sfr-occupancy-disclosure`: Not applicable: another state's disclosure
- `smart-access`: Answered elsewhere: `edu-security-devices-or` and `edu-tenant-portal-or` (ORS 90.320(1)(m) as amended by Or. Laws 2026, ch. 23, § 6)
- `smoke-drift-waiver`: Not offered: no Oregon statute on smoke drift waivers found (OR battery 116 (smoking policy and smoking in rentals): 85 hits, control 0; known positives passed (2 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142); a waiver of habitability-related claims would risk ORS 90.245(1)(a)
- `snow-removal`: Answered elsewhere: `tenant-maintenance-tasks-or`
- `social-security-defense`: Not applicable: another state's rule
- `sprinkler-disclosure`: Confirmed absent (OR battery 68 (fire sprinklers): 16 hits, control 0; known positives passed (1 real section, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `statutory-caps`: Not applicable: a single-state summary row
- `steam-radiator-covers`: Not applicable: New York
- `stove-refrigerator`: Answered elsewhere: `appliances-included` (tagged; ORS 90.365(4))
- `subsidized-inspection-refusal`: Not applicable: another state's rule
- `subsidy-habitability-proration`: Not applicable: another state's rule
- `subsidy-late-fee`: Not applicable: another state's rule; Oregon's late-charge rules don't separate subsidized rent
- `tenancy-at-will`: Answered elsewhere: `edu-termination-notice-or` (a tenancy that isn't week-to-week or fixed term is month-to-month, ORS 90.220(7)(b))
- `tenant-insurance-claims`: Answered elsewhere: `edu-renters-insurance-or` (ORS 90.222(7)(d))
- `tenant-records`: Answered elsewhere: `edu-rent-receipts-or` (ORS 90.140(2)); copies of the agreement, `edu-lease-copy-or`
- `tpa-exemption-notice`: Not applicable: California
- `tpa-notice`: Not applicable: California
- `tpa-sunset`: Not applicable: California
- `truth-in-renting`: Not applicable: New Jersey
- `unbundled-parking`: Not applicable: another state's rule
- `utility-allowance-cap`: Answered elsewhere: `utility-billing-or` (ORS 90.315(4)); `utility-allowance-cap-co` not tagged
- `utility-deposit-return`: Not applicable: another state's rule
- `utility-disclosure-attachment`: Answered elsewhere: `shared-utility-disclosure-or`
- `utility-disconnection-notice-authorization`: Not applicable: Wisconsin
- `utility-interruption-submeter`: Answered elsewhere: `edu-utility-landlord-account-or` (ORS 90.315(7))
- `utility-transfer`: Answered elsewhere: `edu-utility-landlord-account-or` (ORS 90.315(5)-(6); ORS 91.255)
- `veterans-incentive`: Not applicable: another state's rule; Oregon's veterans rule is the information required with termination notices (`edu-termination-notice-or`)
- `waterbed`: Confirmed absent (OR battery 203 (waterbeds and liquid-filled furniture): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142) (hits are a recycling provision and a Medicaid rule); `common-area-use-or` keeps the consent rule
- `window-guards`: Confirmed absent (OR battery 67 (window guards and fall prevention): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic); scope CONST 383, OAR 40864, ORS 39614, SL2026 142)
- `written-notice-required`: Answered elsewhere: `edu-notice-delivery-or`
- `plain-language-consumer-statement`: Not applicable: Pennsylvania's consumer-restrictions statement; Oregon has no plain-language rule (`edu-no-plain-language-rule-or`)

## 19. Step D screens (rules 40-53), one line each
- **40 Formatting:** batteries 1-10 over the whole corpus; in chapters 90, 91 and 105 the hits are statutory forms (ORS 105.112-105.161, 90.155(1)(d)(E), 90.453, 90.321 form), the separate writing for unannounced showings (ORS 90.322(1)(d)), the translated-information line in ORS 105.136, and 'conspicuous' posting for notices under ORS 91.110 (not a ch. 90 tenancy rule); no lease type-size, boldface or initials rule (§4).
- **41 Just cause:** `edu-for-cause-eviction-or` records Oregon's for-cause rule after the first year of occupancy.
- **42 Required text in a shared clause:** the late-charge, deposit-listing, fee-description and smoking rules force text; met by OR overrides rather than shared edits.
- **43 Cure promises:** `default-by-tenant-or` leaves cure to the statutes; no clause promises a cure for 'any other' breach.
- **44 Terms that become landlord duties:** repair and entry promises in `landlord-maintenance-or` and `landlords-access-or` promise no more than ORS 90.320 and 90.322, because ORS 90.360(1) makes rental-agreement noncompliance a remedy trigger.
- **45 Electronic notices:** ORS 84.001-84.061 read; ORS 84.070(10)(b) excludes default, eviction and cure notices for a primary residence, so e-mail service rests on ORS 90.155(1)(d), (5) only (`edu-notice-delivery-or`, `electronic-signatures` note).
- **46 Lease as notice:** mail-and-attachment (`notice-mail-attach-or`), actual-notice method (`actual-notice-method-or`), extended-absence notice (tagged `extended-absence-notice-ks`, ORS 90.340) and the cure-payment location (`rent-payment-location-or`) are offered as lease paragraphs; the e-mail addendum can't be (ORS 90.155(1)(d)(C)).
- **47 Knowing-use penalty and collection:** ORS 90.245(2) (`edu-knowing-use-penalty-or`); ORS 646.639 reaches landlords collecting their own debts (`edu-collection-practices-or`, `default-by-tenant-or`).
- **48 Separate documents:** see §4 last rows; chores settled by ORS 90.320(2) (`tenant-maintenance-tasks-or`).
- **49 Collection costs:** 'costs and expenses' removed from the default clause; attorney fees only as ORS 90.255 provides; no reciprocity statute needed (ORS 90.255 is already two-way).
- **50 'The lease controls':** each lease choice made on purpose: late-charge structure, mail-and-attachment, carpet cleaning, cure-payment location, actual-notice method, yard entry, renter's insurance, smoking policy, informal dispute resolution (ORS 90.220(5)).
- **51 Plain language and consumer contracts:** no plain-language lease statute (`edu-no-plain-language-rule-or`); the Unlawful Trade Practices Act largely excludes chapter 90 conduct (`edu-consumer-protection-act-or`); no blank-space rule for leases (`edu-no-lease-completeness-rule-or`).
- **52 Exculpation:** 'not liable' terms reaching negligence are void (ORS 90.245(1)(c)); the -ks-oh-ca variants are tagged.
- **53 Contradicting figures:** shared late-fee grace period, early-termination formula, returned-payment ceiling, holdover 'maximum permitted' and key re-key charge replaced by Oregon figures; fee amounts bracketed rather than stated as ceilings.
- **54 Optional clauses:** §6.1.

## Proposed SOP changes
1. Rule 19: in a hidden browser tab, time crawler sleeps with a Web Worker timer, not setTimeout; Chrome throttles hidden-tab timers to about one per minute (OR crawl lost hours before this was found).
2. Rule 19: before a full crawl, export and parse a small sample and prove the text field is populated; Oregon's first OAR export read the wrong page element and was empty.
3. Rule 19: test synthetic positives against the pattern limb only; a tenancy-context limb is proven by real positives (synthetic sentences without a tenancy word failed the context limb in the first preview).
4. Rule 19: a pattern written with `\battorn\w*` matches 'attorney'; spell out word endings for short stems (OR batteries 211 and 237).
5. Rule 26: a triage agent's TAGGABLE verdict must apply the basis check (IA 5) before it reaches the log; Oregon's agent marked 67 single-state clauses taggable that each rested on their own state's law.
6. Rule 22: generate `supersedes` from each override's 'Overrides `x`' note by script, and check it in §8; Oregon's first assembly left 23 overrides without it.
7. Rule 16: cite an uncompiled 2026 act by act section (Or. Laws 2026, ch. 23, § 3) and say the compiled number is pending; when an act adds a definition, check whether it renumbers the definitions section (Or. Laws 2026, ch. 23 renumbered ORS 90.100 from (52) on).
8. Rule 45: read the electronic-transactions act's consumer-notice exclusions as well as its core sections (ORS 84.070(10)).
9. Rule 80: give re-check agents the previous version of each edited row to diff against; Oregon's later rounds found the edits' new errors faster that way.

## Proposed topic questions
1. `smoking-policy`: does the state require the lease to disclose the smoking policy in prescribed forms, and does a mid-tenancy ban need consent? (ORS 479.305; ORS 90.262(2) as amended 2027.)
2. `tenant-portal`: may a landlord require payment or signatures through an online portal? (Or. Laws 2026, ch. 23, §§ 2-3.)
3. `disaster-duties`: after a declared natural disaster, does the tenancy end, and is rent owed while the unit is inaccessible? (Or. Laws 2026, ch. 108, § 21.)
4. `tenant-confidential-information`: does the state bar a landlord from disclosing tenant information, and with what consent? (Or. Laws 2026, ch. 61, § 2.)
5. `for-cause-eviction`: does the state's just-cause rule turn on a 'first year of occupancy' counted from any tenant's start? (ORS 90.427(1)(a).)

## Sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 7e5d532` (the 3,336-row library the kickoff was staged from), after the circle-back and Washington syncs: 31 rows tagged, the 2 dormant rows rewritten and activated, 190 new; nothing refused. Library 3,530 rows; OR 223 active (82 lease clauses, 141 education); every other state's set unchanged.
- **Fixed at sync (rule 57):** four OR lease clauses shared a topic key with another OR clause. Each is a companion with its own subject, so each got its own key: `rent-installments-or` (`rent-payment` → `rent-installments`), `family-child-care-or` (`residential-use-only` → `family-child-care`), `actual-notice-method-or` (`notice-delivery-methods` → `actual-notice-method`), `alarm-tampering-fee-or` (`alarm-duties` → `alarm-tampering-fee`). No OR topic now has two lease clauses.
- **Rule 27:** all seven topics have OR rows; no rows added at sync.
- **Citations file:** `lease-clause-citations-OR.csv` built from each row's OR note segment (223 rows: 191 cited, 30 confirmed absent with their batteries, 2 generic).
- **Legal watch:** OR config in `stateConfig.js` (ORS sections only, query paired with "ORS"; 266 sections), federal lead checks, and five manual items (OAR 333-062-1000's temporary amendment ending December 18, 2026; the January 1, 2027 changes; the September 28, 2027 repeal of Or. Laws 2025, ch. 598; the January 2028 dated versions; the uncompiled Or. Laws 2026, ch. 23, § 3). `legal-watch-or.yml` committed held until after 2027-08-07; first run 2027-09-07, day 7 at 14:00 UTC.
- **Topic questions:** the five proposed above, plus one for each new key (`informal-dispute-resolution`, `recycling-notice`) and each companion key set at sync; each citation read in the ORS text first.
- **Guards:** all pass. **Statute spot-check, 5 of 5, against the 2025 ORS chapter 90 text fetched from oregonlegislature.gov on 2026-10-04:** ORS 90.260(1)-(2) (no late charge before the end of the fourth day; a flat charge once per rental period), 90.302(2)(e) (early-termination fee not more than one and one-half times the monthly rent), 90.300(12) (accounting within 31 days), 90.427(3)(c) (after the first year, termination only for tenant cause or a qualifying landlord reason), 90.394 (72-hour and 10-day nonpayment notices).
- **SOP 1.58:** all nine proposals adopted (rules 16, 19, 22, 26, 45, 80); OR column added. The §10 flags are in the backlog.
- **Rule 62:** no shared text changed. OR replaced `default-by-tenant` with its own row, so MN's pending edit doesn't reach it.
