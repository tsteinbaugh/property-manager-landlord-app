# Lease clause decision log — New Hampshire (NH, state #42)

- **Pass:** staged 2026-10-09 23:24 (kickoff); run 2026-10-10 in one Desktop chat (this is New Hampshire's only chat, rule 8). SOP v1.68.
- **Settings:** Opus, high effort. Research mode was **not** turned on: the three rule 9 triggers (proof of absence, ambiguous or conflicting statute language, cross-chapter gap search) were all met with logged batteries over the full official corpus (§1.5, §17), which reaches further than a research crawl could, and only Taylor can turn the mode on.
- **Step A (rule 23):** `lease-clauses.csv` SHA-256 d957de29532c1ff3971997dde339a31ad5d8753a8132c3dd93af24f6dc699392; 5,201 rows, 5,087 active (997 lease clauses, 4,090 education rows); every per-state active count matches the kickoff (AL 127 … WY 123, checked by script). No row named NH (rule 25: nothing dormant to resolve, §5).
- **Delivered:** `lease-clauses-NH-delta.csv` (377 rows: 52 shared rows tagged NH, 325 new rows = 28 lease clauses + 297 education rows), SHA-256 99bb9629d21d2902bb17efa74163edf4a1dfd9c1f69186a88e991cf03a737dc4; this log.
- **Usage budget (kickoff):** big files read by script only; canvass ran as four slices with at most two agents at a time, each saving per topic; the independent check ran three rounds, one agent at a time, later rounds re-checking only edited rows. Rows edited or added after round 3 are listed in §13 under "Edited after the last check".

## §0 Completion table

| Step | Status | Where |
|---|---|---|
| Step A — set up, row-count check, dormant rows | Done | header, §5 |
| Official text: channel, corpus verification, currency | Done | §1 |
| Step B — tag-first screen (rules 26–28), all 997 active clauses | Done | §2 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Topic canvass (rules 27, 36), 348 topics | Done | §18 |
| Other Step C screens (rules 30–32, 35c, 37–39) | Done | §12 |
| Step D screens (rules 40–53) | Done | §11, layout table §4 |
| Step E — classify and draft (rules 55–64) | Done | §3 |
| Step F — optional clauses (rule 54) | Done | §6.1 |
| Independent check (rule 80), 3 rounds | Done | §13 |
| Integrity checks on the delta | Done | §8 |
| Questions for Taylor (rule 76) | Asked in chat | §6.2 |

## §1 Sources, currency and corpus (rules 16, 19, 24)

### §1.1 Channel
- **First request with my own tools (kickoff):** the shell's request to gc.nh.gov was refused (HTTP 403 at the proxy), and WebFetch returns only a model summary of a page, not its text, so neither can serve as a primary-text channel (rule 11).
- **Channel used: the Claude Code corpus** `corpus-NH-20261009.zip` (SHA-256 6091918fee850536c62baa0085b5b4f9e8712670411ef254ae4a3f016fdd2645, matching the `.sha256` file and the kickoff). Every file was checked against `manifest.jsonl` and `manifest-laws2026.jsonl`: RSA 3,668 of 3,668 files present, all HTTP 200, no hash mismatch, no unlisted file; 2026 laws 345 of 345 (the list page plus 344 PDFs), all HTTP 200, no mismatch.
- **Completeness proof against the site's own index (rule 19):** the chapter tables of contents list 28,964 unique section pages; the 1,800 merged chapter pages carry 29,692 section blocks (29,601 unique numbers; dated versions count separately). Compared by normalized section stem, one TOC entry has no block — RSA 41:1-a (Three-Year Term; Moderator), whose TOC link exists but whose text the merged page of chapter 41 omits; it concerns town moderators and no row relies on it. 638 parsed sections are absent from the TOCs, all in RSA 382-A (UCC), whose chapter TOC lists articles rather than sections. Range headings ("101:12 to 101:19") were normalized before comparing.
- **Browser match (kickoff; Taylor approved in chat, §6.2):** in Taylor's built-in browser I fetched the raw bytes of five merged chapter pages (540, 540-A, 540-B, 354-A, 358-A) with cache disabled and hashed them in the page; all five SHA-256 values match the corpus manifest (`work/browser-match-20261010.json`).
- **2026 chaptered laws:** indexed from each PDF's own CHAPTER line (the list page's markup yielded only 189 of 344 by regex, so the PDFs themselves were used); all 344 extracted to text.

### §1.2 Currency and dated versions (rule 16)
- The corpus is dated 2026-10-09/10; the site prints future-dated text beside current text. Cited sections with dated versions: RSA 540-A:2 (two whole-section versions; N.H. Laws 2026, ch. 308, § 4, effective Oct. 8, 2026), RSA 540:28-a (new, effective July 1, 2027; ch. 213, § 2 applies it to tenancies entered into or renewed on or after that date), and paragraph-level versions in RSA 540:13 (II–V), 540:13-c (I) and 540:14 (ch. 308, §§ 1–3), 540-A:4, VII (ch. 308, § 5) and 540-A:3 (ch. 308, § 6). Chapter 308 took effect **October 8, 2026** (its § 7: 90 days after passage; the PDF's effective-date line says October 08, 2026), so those versions are now in force and the rows state them (rows cite "effective Oct. 8, 2026" where the version matters).
- **2026 laws screened:** a keyword screen over all 344 chapters (`work/laws2026-tenancy-screen.json`: landlord, tenant, lease, rental, RSA 540, security deposit, 358-A, 130-A and similar) flagged the candidates; each flagged chapter's relevant sections were read in the act. Acts that change what rows say: ch. 308 (eviction notice and procedure, discretionary stays, prohibited practices), ch. 213 (snow and ice), ch. 262 (plug-in solar), ch. 210 and ch. 329 (accessory dwelling units, accessory parking), ch. 318 (building and fire code enforcement recodified, effective July 1, 2026), ch. 104 (state fire code), ch. 215 (voidable transactions), ch. 228 (special deposits), ch. 21 (real estate practice act), ch. 265, 267, 306 and others cited where rows rely on them. No 2026 act amends RSA 540-A:5 to 540-A:8 (deposits) or RSA 540:2–540:3 (grounds and notices).
- **Earlier session laws:** the corpus holds only 2026 acts. RSA 540:2, II(i) (end of a 12-month-plus lease as a ground for restricted property) carries history notes for N.H. Laws 2024, ch. 9 and 2025, ch. 263. Rows state II(i) as printed in force. Whether either act has an applicability clause limiting II(i) to leases entered after a date could not be read (§7 item 1; asked of Taylor, §6.2).

### §1.3 Constitution, court rules and administrative rules (rules 21, 35)
All three were saved through Taylor's built-in browser (approved, §6.2), downloaded as JSON page captures and matched by SHA-256 (the browser saves downloads as `.tmp`; each file was identified by size and hash, `work/browser-downloads.json`):

| File | Bytes | SHA-256 |
|---|---|---|
| nh-constitution-20261010.json (nh.gov "state constitution" pages, 13 pages, all HTTP 200) | 1,035,018 | 93dbf2f50343e08e11242c610dd9d6eb783963dfa84a89fdbb46afe1cf79ce56 |
| nh-district-rules-20261010.json (Circuit Court District Division rules, landlord-tenant and small-claims rules) | 505,777 | 8062df5bd892e213a289f9b222f3487c2beaab4390954e8297c8dbd26367fe30 |
| nh-admin-rules-20261010-part1.json | 16,545,736 | c6a1dcb4a0648a28838785ff172ae946725dfa9827c803889212eb3ed7be4258 |
| nh-admin-rules-20261010-part2.json | 15,218,420 | d2095e7f634379c4eb9f41dfe88d8d0ff26d122aff80c62e6ff7c821e0cf9913 |
| nh-admin-rules-20261010-part3.json | 15,642,146 | 8d466b1321de0f961b4c6326ccfa42b76f607eef814bf6258175ae84e14c467c |
| nh-admin-rules-20261010-part4.json | 15,279,792 | 060ed584dbd0e9cb54ebf040ddb0b2fb2478832c3797581b7495701f386828a8 |
| nh-admin-rules-20261010-part5.json | 297,041 | f0079275cf3cdafa9d4f5528010302a32a87dc226f1c1af5dfc41e3fff34c4aa |

- **Constitution:** 184 units (Part I and Part II articles; a few long articles split by paragraph). Proof against the site's own index: each page's article drop-down lists 149 articles; every one is loaded, and the Senate page's text also prints Part II, art. 26, which its drop-down omits (loaded too). Control term "general court" hits 36 constitution units in every battery run over the whole corpus.
- **Court rules:** District Division rules loaded whole (162 units), including the landlord-tenant rules (5.1–5.11).
- **Administrative rules (weaker method, flagged):** 812 rule pages from the official text-only rules export. Two limits, recorded on every row that relies on a rule: the export drops non-ASCII characters (apostrophes in "utility's", for example), though words are intact, and my unit splitter filed N.H. Code Admin. R. Env-Or 608.01 under the Env-Or 607.04 unit, so rule text relied on was re-read in context on the page. Rows citing a rule carry the rule 21 flag.

### §1.4 Agents and usage
- Tag-screen helpers: two agents (slices A and B, 248 single-state clauses each, `work/tagscreen/`), briefed with `work/NH-BRIEF.md`.
- Canvass: four slices (C1–C4), at most two at a time, saving one line per topic (§18).
- Independent check: one agent per round, three rounds (§13).
- The helper brief had two errors, both corrected before the rows shipped: it called RSA 540-B (shared facilities) out of scope (it is in scope; only RSA 540-C vacation rentals and RSA 205-A parks are outside the library), and its class list put sexual orientation in the RSA 354-A:10 main list (it appears in 354-A:10, VI and the RSA 354-A:8 declaration). The checkers were told of the first correction in their brief; the rows state the lists as written (`edu-fair-housing-nh`).

### §1.5 Batteries (rule 19)
462 battery runs, all logged before printing (`work/batteries.jsonl`), each over the corpus index with a nonsense control (0 hits in every run) and a "general court" control (hits in every source searched; all controls OK). 170 runs named known positives and all passed; 44 runs had a positive that missed, and each such battery is either recorded as failed in the row that cites it (38 cited) and rerun under a new name, or not relied on. The battery tool refuses a reused name. A final screen of the delta found no row citing a failed battery without saying so (§8).

## §2 Tag-first results (rules 26–28)

All 997 active lease clauses were screened, read in full (never by title): 79 shared or blank-states clauses one by one in the main pass; 422 single-state clauses whose text or notes name another state or its statute (triage: not taggable as written, since their basis is another state's law); and the remaining 496 single-state clauses read in full by two helper agents and re-checked here (§2.3). Fee clauses were screened against New Hampshire's fee and payment-method rules (rule 26): there is no closed list of permitted fees and no upfront-fee ban; at least one non-electronic payment method is required (N.H. Rev. Stat. Ann. § 540-A:3, X); the domestic-violence lock change is at the tenant's expense (§ 540:2, VII(b)); and every non-rent payment counts toward the security deposit for a covered landlord (§ 540-A:5, II).

### §2.1 Tagged NH as written (52)
Each tag note starts "NH: Tagged as written (tag-first screen, rules 26-28, NH log §2.1; sections cited were read section-open)" and gives the reason; the NH segment is appended after the other states' notes, which are unchanged (checked by script, §8). Fee clauses (`keys`, `hoa-compliance`, `parking-vehicle-rules`, `returned-payments`, `acceptable-payment-methods`) were screened against New Hampshire's fee and payment-method rules (no closed fee list; one non-electronic method required, RSA 540-A:3, X; DV lock change at the tenant's expense, RSA 540:2, VII(b)).
- `rent-payment` (LEASE_CLAUSE): Rent payable 'upon demand, unless a different contract is shown' (N.H. Rev. Stat. Ann. § 540:1); the lease fixes the due date. "except as permitted by applicable law" preserves the tenant's set-off, counterclaim and utility-payment defenses (§ 540:13, III; § 540:2, VI; § 540:13-d). No waiver of chapter 540 rights (§ 540:28): "without demand" sets when rent is due but does not replace the demand a nonpayment eviction needs ('Neglect or refusal to pay rent due and in arrears, upon demand' (§ 540:2, II(a)); demand made before or with the eviction notice, § 540:4, served per § 540:5).
- `application-of-payments` (LEASE_CLAUSE): No New Hampshire statute orders the application of a tenant's payments (canvass topic application-of-payments); rent-first application keeps an unpaid fee from looking like unpaid rent, and the saving sentence preserves payment to defeat a nonpayment case under N.H. Rev. Stat. Ann. § 540:9, I.
- `security-deposit-use` (LEASE_CLAUSE): Deductions match N.H. Rev. Stat. Ann. § 540-A:7, I-II (damage beyond reasonable wear and tear; unpaid rent; other lawful charges due under the lease). Amount and receipt rules are in `due-at-signing-nh` and `security-deposit-receipt-nh`; return in `security-deposit-return-nh`.
- `residential-use-only` (LEASE_CLAUSE): Contract term; no New Hampshire statute bars it. Use for lewdness, assignation, prostitution or the illegal manufacture, sale or keeping for sale of liquor voids the lease under N.H. Rev. Stat. Ann. § 544:41 (purposes listed in § 544:1); although § 544:41 speaks of entry 'without process of law', the safe course is the eviction process, since § 540-A:3, II bars denying possession 'other than through proper judicial process'.
- `permitted-occupants` (LEASE_CLAUSE): Contract term. An occupant living there with the knowledge and consent of both tenant and landlord becomes an 'implied tenant' (N.H. Rev. Stat. Ann. § 540-A:1, II(b)), so additions should be handled in writing.
- `no-disturbance` (LEASE_CLAUSE): Restates tenant conduct duties consistent with N.H. Rev. Stat. Ann. § 540-A:2, II-III (as amended by N.H. Laws 2026, ch. 308, § 4) and the § 540:2, II(d) ground.
- `utilities-responsibility` (LEASE_CLAUSE): Contract allocation; no New Hampshire statute assigns utilities. Separately metered gas or electric accounts can't create owner liability or a lien (N.H. Rev. Stat. Ann. § 38:23). Master-metered electricity can be passed on only through a fixed rent (N.H. Code Admin. R. En 303.01), which this clause doesn't do.
- `utility-service-continuity` (LEASE_CLAUSE): Tenant-side duty; the landlord's own duty not to interrupt service is N.H. Rev. Stat. Ann. § 540-A:3, I.
- `utility-payment-evidence` (LEASE_CLAUSE): Contract term; consistent with N.H. Rev. Stat. Ann. § 540:2, VI (proof of utility payments).
- `acceptable-payment-methods-nj` (LEASE_CLAUSE): Keeps at least one non-electronic method, as N.H. Rev. Stat. Ann. § 540-A:3, X requires: 'The landlord shall allow at least one other non-electronic form of payment for the purposes of this section.' The base `acceptable-payment-methods` isn't tagged because it lets the landlord name only electronic methods.
- `tenant-maintenance` (LEASE_CLAUSE): Contract duties consistent with N.H. Rev. Stat. Ann. § 540-A:2, II and § 540:2, II(b); the landlord keeps the § 48-A:14 minimum standards where no local code applies, and the "applicable law requires Landlord to repair" carve-out preserves them.
- `no-sublet-assign` (LEASE_CLAUSE): No New Hampshire statute requires a landlord to consent to a sublet or assignment (canvass topic sublet-assign); unauthorized occupants: N.H. Rev. Stat. Ann. § 540-A:3, IX.
- `no-alterations` (LEASE_CLAUSE): Contract term; the saving sentence preserves a disabled tenant's reasonable modifications at the tenant's expense (N.H. Rev. Stat. Ann. § 354-A:11, III(a)).
- `joint-liability` (LEASE_CLAUSE): Contract term; a domestic-violence victim who ends the lease under N.H. Rev. Stat. Ann. § 540:11-b is liable only for rent through the termination or vacate date (§ 540:11-b, IV), which the lease can't override (§ 540:28).
- `services-utilities-provided-ks-oh` (LEASE_CLAUSE): No-disclaimer variant used (rule 52); no New Hampshire statute lists landlord-furnished services beyond the N.H. Rev. Stat. Ann. § 48-A:14 standards and § 540-A:3, I.
- `utilities-paid-by-landlord` (LEASE_CLAUSE): Contract term; a landlord who fails to pay a utility it agreed to provide can't evict for the rent the tenant used to keep service on (N.H. Rev. Stat. Ann. § 540:2, VI).
- `appliances-included` (LEASE_CLAUSE): Contract term; New Hampshire's habitability remedies run to the N.H. Rev. Stat. Ann. § 48-A:14 standards and local codes (§ 540:13-d), not to every lease promise, so listing appliances doesn't create a statutory remedy trigger (rule 44); § 48-A:14, X covers gas leaks in landlord-furnished appliances.
- `landlord-maintenance` (LEASE_CLAUSE): Contract term consistent with N.H. Rev. Stat. Ann. § 48-A:14 and § 540:13-d; the fitness defense requires notice and 14 days to correct (§ 540:13-d, I(b)).
- `possession-delay` (LEASE_CLAUSE): No New Hampshire statute on delivery of possession (canvass topic possession-delay); the clause is a contract allocation lawful in both tiers.
- `default-by-tenant` (LEASE_CLAUSE): New Hampshire gives no statutory cure period except paying before the hearing in a nonpayment case (N.H. Rev. Stat. Ann. § 540:9, I, at most 3 times in 12 months, § 540:9, II) and a prior written warning before an 'other good cause' eviction based on the tenant's conduct (§ 540:2, III). The clause's sentence "Landlord need not give Tenant an opportunity to cure any breach ... where applicable law permits Landlord to proceed without one" keeps New Hampshire's no-cure grounds (rule 43). Termination still needs a § 540:2, II ground for restricted property and the § 540:3 notice. The attorney-fee sentence is mutual.
- `early-termination-ks` (LEASE_CLAUSE): No New Hampshire statute on early-termination fees (canvass topic early-termination). The saving sentence preserves the servicemember (N.H. Rev. Stat. Ann. § 540:11-a) and domestic-violence (§ 540:11-b) exits; penalty doctrine is case law, not read. Ending the tenancy because the tenant "vacates or abandons" is safe without a court case only on relinquishment or abandonment as § 540-A:4, XII defines them, and the 7-day storage duty still applies (`abandoned-property-nh`).
- `notices` (LEASE_CLAUSE): Defers to statutory methods: demands and eviction notices are served in hand or at the abode (N.H. Rev. Stat. Ann. § 540:5, I), and the court forms set their content (§ 540:5, II).
- `governing-law` (LEASE_CLAUSE): Contract term; N.H. Rev. Stat. Ann. § 540:29 makes conflicting federal law control for federally owned or subsidized units.
- `severability` (LEASE_CLAUSE): Contract term; no New Hampshire statute bars it.
- `tenants-property-insurance-ks-oh-ca` (LEASE_CLAUSE): No-disclaimer variant used (rule 52). No New Hampshire statute bars requiring renter's insurance (canvass topic tenants-property-insurance).
- `entire-agreement` (LEASE_CLAUSE): Contract term; mid-term changes are limited by N.H. Rev. Stat. Ann. § 540:2, IV (30 days' written notice of a rent increase) and the retaliation presumption (§ 540:13-b).
- `addendum-precedence` (LEASE_CLAUSE): Required disclosures in New Hampshire (deposit receipt, energy-tariff, meth, lead-order, asbestos, AUR) are lease clauses or pre-signing writings; none is an optional addendum that must control over the lease (rule 46).
- `electronic-signatures` (LEASE_CLAUSE): New Hampshire's Uniform Electronic Transactions Act gives electronic signatures legal effect between parties who agreed to transact electronically (N.H. Rev. Stat. Ann. § 294-E:5, II; § 294-E:7).
- `pet-insurance-requirement` (LEASE_CLAUSE): Contract term; excludes assistance animals (N.H. Rev. Stat. Ann. § 354-A:11, III(b)).
- `parking-ks-oh-ca` (LEASE_CLAUSE): No-disclaimer variant used (rule 52).
- `assigned-parking-space` (LEASE_CLAUSE): Contract term; a storage or parking space for the tenant's exclusive use can be part of the 'premises' (N.H. Rev. Stat. Ann. § 540-A:1, III).
- `parking-vehicle-rules` (LEASE_CLAUSE): Removal of vehicles is lawful only under N.H. Rev. Stat. Ann. § 540-A:3, II-a to II-c with their notices; the clause's 'in accordance with applicable law' carries them, and § 540-A:3, II-a(c) lets the landlord remove property 'parked or stored in a manner prohibited under the terms of a lease agreement', which this clause supplies. No New Hampshire fee ban on parking tags or cards.
- `storage-space-ks-oh-ca` (LEASE_CLAUSE): No-disclaimer variant used (rule 52). A storage space for the tenant's exclusive use is part of the 'premises' (N.H. Rev. Stat. Ann. § 540-A:1, III), so `landlords-access-nh` names it.
- `keys` (LEASE_CLAUSE): Fee screen: New Hampshire has no closed list of permitted fees and no ban on re-key charges; the domestic-violence lock change is 'at the tenant's expense' (N.H. Rev. Stat. Ann. § 540:2, VII(b)), consistent with charging. Any key deposit is part of the Security Deposit (§ 540-A:5, II).
- `guest-policy` (LEASE_CLAUSE): Contract term; a guest who stays with both the tenant's and the landlord's knowledge and consent can become an 'implied tenant' (N.H. Rev. Stat. Ann. § 540-A:1, II(b)), so enforce limits promptly in writing.
- `guest-policy-day-limit` (LEASE_CLAUSE): Contract term; see `guest-policy` (N.H. Rev. Stat. Ann. § 540-A:1, II(b)).
- `common-area-use` (LEASE_CLAUSE): Contract term. The New Hampshire flag-display statute reaches condominium associations, not landlords (N.H. Rev. Stat. Ann. § 356-B:47-a); the saving sentence covers any display the law protects.
- `fire-safety-grilling` (LEASE_CLAUSE): Lawful contract term, stricter than the fire code: certified electric grills 'shall not be considered open flame cooking devices under the state fire code' (N.H. Rev. Stat. Ann. § 153:5, III-a), but a lease may still restrict them.
- `landscaping-irrigation` (LEASE_CLAUSE): New Hampshire has no separate-writing rule for tenant chores (rule 48 screen; canvass topic landscaping-irrigation).
- `snow-removal` (LEASE_CLAUSE): From July 1, 2027, for tenancies entered into or renewed on or after that date (N.H. Laws 2026, ch. 213, § 2), 'The landlord and tenant may agree that either the landlord or the tenant, or any combination thereof, shall be responsible for performing snow and ice removal' (§ 540:28-a, I); without agreement a restricted-property landlord clears common areas and tenants clear areas only they use (§ 540:28-a, II). The clause is such an agreement and excludes shared areas. Before that date no statute applies.
- `inspection-rights` (LEASE_CLAUSE): Defers to the Access & Entry terms, which in New Hampshire are `landlords-access-nh` (consent, or emergency repairs or court order, N.H. Rev. Stat. Ann. § 540-A:3, IV, V-d).
- `lead-based-paint` (LEASE_CLAUSE): Federal disclosure (42 U.S.C. 4852d; 40 CFR 745.113). New Hampshire adds a written disclosure of any state lead hazard reduction order before leasing (`lead-hazard-order-disclosure-nh`).
- `hoa-compliance` (LEASE_CLAUSE): Fee screen: no closed list of permitted fees in New Hampshire; association fines owed under the lease are 'other lawful charges due under the lease' deductible from a covered deposit (N.H. Rev. Stat. Ann. § 540-A:7, II).
- `assistance-animal-accommodation` (LEASE_CLAUSE): Consistent with N.H. Rev. Stat. Ann. § 354-A:11, III(b) (reasonable accommodations) and XI (direct threat).
- `extended-absence-notice-ks` (LEASE_CLAUSE): Contract notice term; no New Hampshire statute on absences, and actual-damages recovery is ordinary contract law.
- `tenant-forward-proceedings-ca` (LEASE_CLAUSE): Contract term; no New Hampshire statute.
- `rental-application-accuracy` (LEASE_CLAUSE): Its carve-out for information the landlord "was not permitted by law to request or consider" covers annulled records: the person 'shall be treated in all respects as if he or she had never been arrested, convicted or sentenced' (N.H. Rev. Stat. Ann. § 651:5, X(a)). The application-fee rule (§ 540-A:3, VIII) requires disclosure before a fee is collected but bars no screening question.
- `electronic-notice-ma` (LEASE_CLAUSE): Optional e-mail notices fit New Hampshire's electronic transactions act: it applies only between parties who agreed (N.H. Rev. Stat. Ann. § 294-E:5, II), the right to refuse further electronic transactions 'may not be waived by agreement' (§ 294-E:5, III), and a record the recipient can't print or store is unenforceable (§ 294-E:8, III). Its exclusion of eviction and default notices keeps the § 540:5 in-hand or abode service.
- `rules-ia` (LEASE_CLAUSE): Outside senior housing no New Hampshire statute governs house rules; the clause's reasonableness limits are contract terms lawful in both tiers. A rule change can be a 'substantial alteration in the terms of the tenancy' that triggers the retaliation presumption if made within 6 months of protected conduct (N.H. Rev. Stat. Ann. § 540:13-b). In housing for older persons and independent living retirement communities (§ 161-M:2), 'reasonable notice' must be at least 'A 30-day written notice prior to any change of rules or regulations, except for changes necessary to protect your health or safety.' (§ 161-M:3, III(d)), and residents get 10 days to correct a rule violation (§ 161-M:3, III(e)); see `edu-house-rules-nh`.
- `rent-concession-wi` (LEASE_CLAUSE): Optional record of any concession; no New Hampshire statute regulates rent concessions (canvass topic rent-concession).
- `rent-installments-or` (LEASE_CLAUSE): Optional installment schedule; rent is payable on demand 'unless a different contract is shown' (N.H. Rev. Stat. Ann. § 540:1), and a landlord need not accept partial payments (§ 540:9-a, I).
- `edu-cares-act-notice` (LANDLORD_EDUCATION): Federal row tagged in every verified state (kickoff); New Hampshire's notice periods (N.H. Rev. Stat. Ann. § 540:3) don't make it read wrongly, and its advice to give the longer of the two notices fits restricted and nonrestricted property alike.

### §2.2 Shared clauses not tagged (28 of the 79), with reasons
- `late-fee`: its sentence preserving remedies on accepting late rent conflicts with § 540:13, VII (accepting arrears during an eviction keeps the case alive only with written notice of intent to proceed); replaced by `late-fee-nh`. `late-fee-ne` has the same sentence.
- `returned-payments`: its fee "not to exceed the maximum amount permitted by applicable law" points at no New Hampshire maximum (rule 53); replaced by `returned-payments-nh`.
- `due-at-signing`: its example lists a pet deposit and last month's rent beside the deposit, but for a covered landlord all of these are one capped security deposit (§ 540-A:5, II; § 540-A:6, I(a)); replaced by `due-at-signing-nh`.
- `existing-condition`: a signing-day acknowledgment could cut off the tenant's 5-day condition list (§ 540-A:6, I(b)-(c)); replaced by `existing-condition-nh`.
- `smoking-policy`: its vaping ban reaches a qualifying patient's vaporized therapeutic cannabis (§ 126-X:3, I); replaced by `smoking-policy-nh`.
- `acceptable-payment-methods`: lets the landlord name only electronic methods (§ 540-A:3, X); `acceptable-payment-methods-nj` tagged instead.
- `services-utilities-provided`, `tenants-property-insurance`, `parking`, `storage-space`: base versions carry "not liable" disclaimers; the no-disclaimer variants are tagged (rule 52).
- `landlords-access`: entry on 24 hours' notice without consent conflicts with § 540-A:3, IV-V-d (entry only with consent, for emergency repairs or by court order); `landlords-access-mi` asks permission but lets the landlord enter "at any time" in any emergency, broader than New Hampshire's emergency-repairs exception; replaced by `landlords-access-nh`.
- `pet-policy`: lets the landlord enter to remove a pet; replaced by `pet-policy-nh`.
- `surrender-end-of-term`, `surrender-end-of-term-ks-ne`, `surrender-end-of-term-mn-nd`: "Upon the expiration ... Tenant will surrender possession" isn't true for restricted property unless § 540:2, II(i) is met; replaced by `surrender-end-of-term-nh`.
- `early-termination`: base version; `early-termination-ks` tagged instead.
- `holdover`: "maximum amount permitted by applicable law" points at no New Hampshire measure; `holdover-ca`: its trigger "by the end of the Term" treats the end of a term as ending the tenancy; both replaced by `holdover-nh` (optional rate in `holdover-rate-nh`).
- `security-deposit-return` (blank-states parent): replaced by `security-deposit-return-nh`.
- `default-by-tenant-co`, `default-by-tenant-ks-ne`: add a contractual written notice and cure period before a rent default, which New Hampshire doesn't require (rule 43); the base `default-by-tenant` is tagged.
- `possession-delay-ca`: refers to a tenant's statutory right to terminate for non-delivery that New Hampshire doesn't have; the base `possession-delay` is tagged.
- `parking-vehicle-rules-id`: its towing limits rest on Idaho's statute; the base `parking-vehicle-rules` is tagged.
- `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`: rest on Colorado's and Illinois's tenant EV-charging statutes; New Hampshire has none (`edu-no-ev-charging-shared-area-nh`, `edu-no-ev-charging-end-of-tenancy-nh`).
- `utility-allowance-cap-co`: an electric overage would conflict with N.H. Code Admin. R. En 303.01 and its notes rest on Colorado law; New Hampshire's answer is `edu-utility-allowance-nh`.

### §2.3 Single-state clauses (rule 26 triage)
- 422 name another state or its statute in text or notes: not taggable as written.
- 496 read in full by the helpers (`work/tagscreen/result-A.jsonl`, `result-B.jsonl`): 417 rest on their own state's law (notes or basis), 58 conflict with New Hampshire law, 18 have a New Hampshire variant planned or written, and 3 were candidates (`returned-payments-ok`, `tenant-death-contact-mt`, `rent-increase-midterm-wv`). All three candidates' notes rest on their own state's law (rule 26), so New Hampshire rows modelled on them were written instead (`returned-payments-nh`, `tenant-death-contact-nh`, `rent-increase-midterm-nh`).
- The federal row `edu-cares-act-notice` is tagged (kickoff); New Hampshire's notice periods don't make it read wrongly.

## §3 New rows (rule_type, basis, citation)

### §3.1 NH lease clauses (28)
`lease_clause_basis` (first basis): SERVES_LANDLORD 19, REQUIRED_DISCLOSURE 6, CONSTRAINED_TERM 3. 10 are overrides (`supersedes` set; each note says "Overrides `id`", checked by script, §8). 8 are optional ("[Optional.]", never default; §6.1); 5 are conditional disclosures used only when their fact is true.

| Row | rule_type | lease_clause_basis | topic_key | supersedes | status | key citations |
|---|---|---|---|---|---|---|
| `late-fee-nh` | CONSTRAINED | CONSTRAINED_TERM | late-fee | late-fee | VERIFIED | RSA 451-C:7, RSA 540-A:5, RSA 540:1-a, RSA 540:13, RSA 540:28, RSA 540:9 |
| `returned-payments-nh` | RECOMMENDED | SERVES_LANDLORD | returned-payments | returned-payments | VERIFIED | RSA 540-A:3, RSA 544-B:1 |
| `due-at-signing-nh` | CONSTRAINED | CONSTRAINED_TERM | due-at-signing | due-at-signing | VERIFIED | RSA 540-A:3, RSA 540-A:5, RSA 540-A:6, RSA 540:1-a |
| `security-deposit-receipt-nh` | CONDITIONAL | REQUIRED_DISCLOSURE | security-deposit-holding | — | VERIFIED | RSA 540-A:5, RSA 540-A:6, RSA 540-A:8 |
| `security-deposit-return-nh` | REQUIRED | SERVES_LANDLORD | security-deposit-return | security-deposit-return | VERIFIED | RSA 540-A:5, RSA 540-A:6, RSA 540-A:7, RSA 540-A:8 |
| `existing-condition-nh` | RECOMMENDED | SERVES_LANDLORD | existing-condition | existing-condition | VERIFIED | RSA 540-A:5, RSA 540-A:6, RSA 540-A:8 |
| `landlords-access-nh` | RECOMMENDED | SERVES_LANDLORD | landlord-entry | landlords-access | VERIFIED | RSA 130-A:6-a, RSA 540-A:1, RSA 540-A:3 |
| `smoking-policy-nh` | RECOMMENDED | SERVES_LANDLORD | smoking-policy | smoking-policy | VERIFIED | RSA 126-X:3 |
| `pet-policy-nh` | RECOMMENDED | SERVES_LANDLORD | pet-policy | pet-policy | VERIFIED | RSA 354-A:11, RSA 540-A:3, RSA 540-A:5, RSA 540-A:6 |
| `abandoned-property-nh` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | — | VERIFIED | RSA 540-A:3, RSA 540-A:4, RSA 540-B:9 |
| `surrender-end-of-term-nh` | RECOMMENDED | SERVES_LANDLORD | surrender-end-of-term | surrender-end-of-term | VERIFIED | RSA 540-A:5, RSA 540:1-a, RSA 540:2, RSA 540:28, RSA 540:3 |
| `holdover-nh` | RECOMMENDED | SERVES_LANDLORD | holdover | holdover | VERIFIED | RSA 540:1, RSA 540:13, RSA 540:2, RSA 540:23 |
| `holdover-rate-nh` | CONDITIONAL | CONSTRAINED_TERM | holdover-rate | — | VERIFIED | RSA 540:13-c, RSA 540:2, RSA 540:23, RSA 540:25, RSA 540:3, RSA 540:9 |
| `smoke-co-alarms-nh` | RECOMMENDED | SERVES_LANDLORD | alarm-duties | — | VERIFIED | RSA 153:10-a, RSA 634:2 |
| `bed-bug-cooperation-nh` | RECOMMENDED | SERVES_LANDLORD | bed-bug-cooperation | — | VERIFIED | RSA 540-A:3, RSA 540:13-e, RSA 540:2 |
| `tenant-notice-to-end-nh` | RECOMMENDED | SERVES_LANDLORD | termination-notice | — | VERIFIED | RSA 540:11, RSA 540:2, RSA 540:3 |
| `energy-tariff-disclosure-nh` | CONDITIONAL | REQUIRED_DISCLOSURE | utility-disclosure-attachment | — | VERIFIED | RSA 477:4-h |
| `meth-production-disclosure-nh` | CONDITIONAL | REQUIRED_DISCLOSURE | meth-disclosure | — | VERIFIED | RSA 318-D:4, RSA 477:4-g |
| `lead-hazard-order-disclosure-nh` | CONDITIONAL | REQUIRED_DISCLOSURE | lead-state-notices | — | VERIFIED | RSA 130-A:7, He-P 1605.01 |
| `asbestos-disposal-site-disclosure-nh` | CONDITIONAL | REQUIRED_DISCLOSURE | asbestos-hazards | — | VERIFIED | RSA 141-E:23 |
| `activity-use-restriction-nh` | CONDITIONAL | REQUIRED_DISCLOSURE | hazardous-contamination-disclosure | — | VERIFIED | , Env-Or 608.01, Env-Or 608.03 |
| `rent-increase-midterm-nh` | CONDITIONAL | SERVES_LANDLORD | rent-escalation | — | VERIFIED | RSA 356-C:6, RSA 540:13-b, RSA 540:2 |
| `tenant-death-contact-nh` | RECOMMENDED | SERVES_LANDLORD | tenant-death | — | VERIFIED | RSA 540-A:3 |
| `tenant-caused-damage-nh` | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage | — | VERIFIED | RSA 130-A:8-a, RSA 540-A:2, RSA 540:11-a, RSA 540:11-b, RSA 540:13-d, RSA 540:2 |
| `casualty-nh` | RECOMMENDED | SERVES_LANDLORD | casualty-termination | — | VERIFIED | RSA 540-A:3, RSA 540-A:7, RSA 540:2, RSA 540:28, RSA 540:3, RSA 540:5 |
| `criminal-activity-nh` | CONDITIONAL | SERVES_LANDLORD | criminal-activity | — | VERIFIED | RSA 126-X:3, RSA 354-A:15, RSA 540-A:2, RSA 540:2, RSA 540:3 |
| `tax-escalation-nh` | CONDITIONAL | SERVES_LANDLORD | tax-escalation | — | VERIFIED | RSA 540-A:7, RSA 540:2, RSA 540:13-b (added after the last check, §13) |
| `common-area-garbage-nh` | CONDITIONAL | SERVES_LANDLORD | maintenance-duty-shift | — | VERIFIED | RSA 48-A:14, RSA 540:28, RSA 540:13-d (added after the last check, §13) |

### §3.2 NH education rows (297)
Status: VERIFIED 293, NEEDS_REVIEW 4. rule_type: RECOMMENDED 145, CONDITIONAL 41, REQUIRED 29, CONSTRAINED 27, PROHIBITED 20, REQUIRED/CONDITIONAL 8, RECOMMENDED/CONSTRAINED 5, RECOMMENDED/CONDITIONAL 5, REQUIRED/CONSTRAINED 3, PROHIBITED/CONDITIONAL 3, REQUIRED/PROHIBITED 1, CONSTRAINED/RECOMMENDED 1, CONSTRAINED/CONDITIONAL 1, RECOMMENDED/REQUIRED 1, CONDITIONAL/REQUIRED 1, CONDITIONAL/PROHIBITED 1, REQUIRED/PROHIBITED/CONDITIONAL 1, PROHIBITED/RECOMMENDED 1, RECOMMENDED/PROHIBITED 1, REQUIRED/RECOMMENDED 1, CONSTRAINED/REQUIRED 1. Groups: Default & Termination 46, Disclosures 35, Other / Miscellaneous 35, Landlord Responsibilities 34, Notices & General 32, Rent & Payment 23, Security Deposit 22, Rules & Regulations 19, Tenant Responsibilities 15, Compliance & Prohibited Terms 11, Parking & Storage 8, Pets 7, Building & Safety 5, Access & Entry 5. 143 are confirmed-absence rows (`edu-no-…-nh`). Source of each row: topic canvass slices 1-4 (273), topic-fill rows written after the last check (19; §13, §18), scenario screen (3), main pass (2). Full list in the delta; the canvass section (§18) names each topic's rows.

### §3.3 Shared rows changed
52 shared rows (51 lease clauses and `edu-cares-act-notice`) changed only in `states` (";NH" appended), `notes` (an NH segment appended after the existing notes, which are a verbatim prefix) and `last_checked` (2026-10-10). No shared row's body text changed (checked by script, §8).

## §4 Layout and placement table (rule 40)

Formatting batteries ran over the whole corpus (RSA, constitution, 2026 laws, court rules, administrative rules) with a tenancy context limb, plus a no-limb type-size run. None reaches the text of a residential lease. Every hit with a tenancy link:

| Provision | Rule | Applies to | Library effect |
|---|---|---|---|
| N.H. Rev. Stat. Ann. § 540-A:4, XII(d) | abandonment notice in "conspicuous language"; the statutory form "in at least 12-point" type is deemed sufficient | landlord's property abandonment notice (a separate notice, not the lease) | education (`edu-abandonment-mitigation-nh`, `edu-no-lease-type-size-nh`) |
| § 540:13, II | court's notice with the writ "printed in no smaller than 12-point type" | court document | education only |
| § 540:13-c, II (via NH-FMT-separate) | payment agreement filed with the court; waives appeal | court filing, not the lease | `edu-redemption-nh` |
| RSA 361-D, 358-P, 451-C, 361-A, 407 | type-size, conspicuous or separate-document rules | motor-vehicle leases, rent-to-own, self-storage, retail installment, insurance | none (not residential leases) |
| RSA 205-A | park-lease rules | manufactured housing parks (outside the library) | none |
| RSA 356-B:52 (underline) | condominium instruments | condominium documents | none |

No omission sanction forfeits money for a lease's format. No two rules claim the same place in a lease, so nothing needed Taylor's ordering decision. Batteries: NH-FMT-typesize (recorded as failed: its known positive missed; rerun as NH-FMT-typesize-2, 25 hits, positive passed), NH-FMT-typesize-nolimb (148 hits, positive missed; screen only), NH-FMT-bold (38), NH-FMT-underline (1, § 356-B:52), NH-FMT-conspicuous (43, positive passed), NH-FMT-separate (8, positive passed), NH-FMT-substantially (193 hits, mostly prescribed forms outside landlord-tenant law; recorded as failed: its positive missed; the landlord-tenant forms are the abandonment notice and the court notice above); canvass batteries C4-typesize-1 and C4-sfrsign-1 (§18, `lease-type-size`).

## §5 Dormant rows resolved (rule 25)
None: the library had no row naming New Hampshire, active or dormant (kickoff and Step A script).

## §6 Decisions

### §6.1 Optional clauses (rule 54)
Each is offered as optional ("[Optional.]" or a conditional use note), never a default.

| Clause | Verdict | Why |
|---|---|---|
| `holdover-rate-nh` | Offered | No general holdover measure (RSA 540:23 applies only on appeal or plea of title); excludes nonpayment terminations while the tenant may still pay under § 540:9, court-ordered stays and § 540:23 days |
| `casualty-nh` | Offered | No casualty statute; either party may end on a casualty, a landlord's notice being a § 540:3 eviction notice (30 days) |
| `criminal-activity-nh` | Offered | Makes defined criminal activity a material term, a ground for restricted property (§ 540:2, II(c)) with the § 540:3 notice; drafted around conduct, not arrests; carve-outs for therapeutic cannabis (§ 126-X:3), crime victims (§ 540:2, VII) and calls for help |
| `tenant-caused-damage-nh` | Offered | No abatement statute; rent continues for tenant-caused damage (rule 54t) |
| `rent-increase-midterm-nh` | Offered | No statute permits or bars a mid-term increase; 30 days' written notice (§ 540:2, IV) with a no-fee exit |
| `tenant-death-contact-nh` | Offered | No tenant-death statute; contact designation is contract |
| `tax-escalation-nh` | Offered (added after the last check, §13) | § 540-A:7, II lets a landlord deduct a tax-increase share only if the lease requires it, so the right exists only if invoked; found in the final re-screen of `edu-optional-lease-terms-nh` |
| `common-area-garbage-nh` | Offered (added after the last check, §13) | § 48-A:14, VIII lets the rental agreement shift common-area garbage removal to the tenant if the landlord cleared it at the start; same re-screen |
| `electronic-notice-ma`, `rent-installments-or`, `rent-concession-wi` | Tagged (optional shared clauses) | §2.1 |
| Statutory waivers (jury, exemptions, notice to quit, confession of judgment) | Not offered ("n") | § 540:28 voids waivers of chapter 540 rights; no statute supports an exemption or jury waiver (`edu-no-exemption-waiver-nh`, `edu-no-jury-waiver-rule-nh`, `edu-notice-to-quit-waiver-nh`, `edu-no-confession-of-judgment-nh`) |
| Eviction-fee clause | Covered by the tagged `default-by-tenant` mutual prevailing-party fee sentence | No lease fee-clause statute; RSA 361-C reciprocity reaches only retail installment contracts and consumer loans; statutory fee awards and the $1,500 possessory-judgment cap in `edu-attorney-fees-nh` and `edu-no-eviction-penalty-rule-nh` |
| Other lease-chosen options in `edu-optional-lease-terms-nh` | Covered | at-will default and month-to-month notice (`tenant-notice-to-end-nh`), lawful charges listed (fee clauses), quarterly rent (`due-at-signing-nh`, `rent-installments-or`), lease-prohibited parking (`parking-vehicle-rules`), subletting (`no-sublet-assign`), cannabis smoking (`smoking-policy-nh`), snow and ice (`snow-removal`) |

The security-deposit return clause doesn't list the tax-share deduction because only a lease with `tax-escalation-nh` has one; that clause carries its own deduction sentence.

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (asked with AskUserQuestion at Step A, recommendation "Yes"). Taylor chose "Yes (Recommended)": approval to use his built-in browser for the five-section corpus match, the constitution, the District Division rules, the administrative rules and a real New Hampshire lease, and access to his Downloads folder. Used as approved (§1.1, §1.3, §15).
2. **N.H. Laws 2025, ch. 263 (HB 60) and optionally 2024, ch. 9**, the acts in the history note of RSA 540:2, II(i) (asked in chat for the enrolled text, after two failed browser attempts, rule 13). No answer yet at delivery; the question is repeated in the delivery message. Rows state II(i) as printed in force (§7 item 1).

No product decision arose: every clause is either a variant of an existing library feature or an optional clause under rule 54, and no default changed.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Two tiers (rule 32):** every default clause is drafted to be lawful for both restricted and nonrestricted property (§ 540:1-a) and for landlords inside and outside the deposit subdivision (§ 540-A:5, I). Clauses that state a covered-landlord duty (receipt, return, interest) ship as one clause because they are lawful for exempt landlords too; education rows state the tier and exemption in plain words.
- **Lease as the deposit receipt (rule 46):** `security-deposit-receipt-nh` lets the signed lease serve as the receipt and the 5-day condition notice where the deposit is paid by signing; otherwise the landlord gives a separate receipt when paid.
- **Shared facilities:** RSA 540-B (shared-facility rooms) is within the library's scope; `edu-shared-facility-rentals-nh` states it. Only RSA 540-C (vacation rentals) and RSA 205-A (manufactured housing parks) are outside.
- **Unlawful-use statute:** RSA 544:41 says an unlawful use voids the lease and lets the owner re-enter without process, while § 540-A:3, II bars denying possession other than through judicial process; the rows tell landlords to use the courts and flag the pair (§10).
- **Topic-fill rows (rule 27):** a final script check found 19 topics whose only New Hampshire rows were keyed to other topics. Rather than leave them to sync, I wrote one row per topic from the canvass answers, re-reading the sections; they are listed in §13 for Claude Code's reading.
- **NEEDS_REVIEW (4 rows):** each rests on case law this pass didn't read: `edu-no-promises-to-repair-rule-nh` (reach of § 358-A:2 to individual landlords), `edu-no-repair-cost-termination-nh` (whether "other good cause" can end a fixed term early), `edu-grills-fire-code-nh` (NFPA text not in the corpus) and `edu-dog-owner-liability-nh` (whether a landlord can be a dog's keeper under § 466:19).

## §7 Open items, each with its search boundary
1. **Applicability of RSA 540:2, II(i).** Whether N.H. Laws 2024, ch. 9 or 2025, ch. 263 limits the 12-month non-renewal ground to leases entered or renewed after a date. Boundary: the corpus holds only 2026 acts; the shell is blocked from gc.nh.gov; two browser attempts at the 2025 chaptered-law pages failed. Asked of Taylor (§6.2); rows state II(i) as printed.
2. **Case law.** Not searched anywhere (mitigation, penalty doctrine, unconscionability, jury waivers, the four NEEDS_REVIEW rows). Each row says so.
3. **Codes and tariffs not in the corpus.** NFPA 1 and 101, the state building code, and utility tariffs. Rows point landlords to the local fire chief or utility.
4. **Municipal ordinances (rule 3).** Flagged, not resolved: local housing codes (which displace § 48-A:14 where adopted), rental registration or inspection programs (Manchester, Nashua and others), zoning and local fire amendments.
5. **Federal law.** Read only for the tagged federal rows (CARES Act notice, lead disclosure); federal subsidy and foreclosure-tenant rules are flagged where relevant.
6. **Rows edited after the last check** (§13): for Claude Code to read against the statute at sync.

## §8 Integrity checks on the delta
Run by script on the final delta (`work/log/checks.json`); every check passes.

| Check | Result | Detail |
|---|---|---|
| Header identical to the master (17 columns, same order) | Pass | — |
| CRLF line endings, UTF-8 | Pass | — |
| Ids unique within the delta | Pass | 377 rows |
| New ids absent from the master; shared ids present | Pass | 325 new, 52 shared |
| Shared rows: only states (";NH" appended), notes (master notes a verbatim prefix, then " \| NH: …") and last_checked changed | Pass | — |
| Every new row: states "NH", is_active TRUE, last_checked 2026-10-10, effective_from 2026-10-10 except a row stating a future-effective statute | Pass | edu-snow-ice-removal-nh is effective_from 2027-07-01, the date RSA 540:28-a takes effect (library precedent: well-water-testing-notice-or, shoreline-access-disclosure-ri) |
| Every NH note starts "NH: " | Pass | — |
| Statuses only VERIFIED or NEEDS_REVIEW | Pass | VERIFIED 321, NEEDS_REVIEW 4 |
| Groups from the kickoff list (education rows may use the two extra groups) | Pass | — |
| lease_clause_basis set on every new lease clause and empty on every education row | Pass | — |
| supersedes equals the "Overrides `x`" note on every new row, and each target exists in the master | Pass | 10 overrides |
| Optional clauses are never defaults (is_default and choice_group empty) | Pass | 8 optional |
| Backtick pointers in NH text resolve to active rows (master or delta) | Pass | — |
| Topic coverage: every topic in lease-clause-topics.md has an NH row keyed to it except the Not applicable ones | Pass | 348 topics; without an NH row: prop65-rental-warning, senior-housing-work-card (both Not applicable, reasons in §18) |
| New topic keys | Pass | entity-landlord-court-representation |
| No new {{variable}} names | Pass | — |
| Quote checker (citation-anchored; every single-quoted span matched against the cited section's text) | Pass | 637 quotes checked, 0 missing, 0 uncited; 110 statute phrases in double quotes or prose with a citation nearby (reviewed) |
| Citation check: no bare "RSA x:y" outside quoted statute text | Pass | 9 'missing section' hits are the checker truncating multi-hyphen numbers (RSA 382-A:2-302, 382-A:2A-303, 382-A:9-102, 383-B:3-303, 564-B:8-816), each verified present; 6 session-law flags are plural lists ('N.H. Laws 2026, chs. 213, 308 and …'), deliberate |
| Rule 19 screen: every cited battery exists in the log, and every cited battery whose positive missed is described as failed | Pass | 387 batteries cited; 38 failed ones, all flagged |

**Counts:** 377 rows = 52 shared rows tagged NH + 325 new rows (28 lease clauses, 297 education rows); NEEDS_REVIEW 4 (§6.3).

**Pointer check on the log itself (rule 71):** every backticked name in this log was resolved by script: 408 distinct row ids, all active rows in the master or the delta (including every id on a no-row or not-tagged line); 298 topic keys, all in the topic reference; 32 file names, column names or placeholders. Unresolved: none. A second scan of every New Hampshire id written without backticks (325 distinct) found none unresolved.


## §9 Propagation notes for shared-row edits (rule 62)
No shared row's body text, title, rule_type, basis or status changed; the 52 tagged rows changed only by appending NH to `states`, an NH segment to `notes` and the `last_checked` date. No propagation note is owed to any other state's log. The real lease (§15) suggested no change to a shared row.

## §10 Findings for other states or the product (flagged, not fixed)
1. **Stale cross-reference (rule 77):** RSA 540-A:4, VI cites "RSA 540:3, IX", which doesn't exist; RSA 540-A:3, IX (unauthorized occupants) is evidently meant. `edu-unauthorized-occupant-removal-nh` says so.
2. **Stale cross-reference:** RSA 540:2, II(i)(2) refers to "RSA 354:10"; there is no RSA chapter 354, and RSA 354-A:10 is evidently meant. `edu-fair-housing-nh` says so.
3. **Court rule behind the statute:** District Division Rule 5.5(B) still requires a tenant's setoff claims and counterclaims by the return day, while RSA 540:13, II(a) as amended by N.H. Laws 2026, ch. 308 (effective Oct. 8, 2026) has the court's notice tell the tenant to file an answer with affirmative defenses and counterclaims not more than 5 days after the return date. Watch for a rule amendment.
4. **Conflicting statutes:** RSA 544:41 (unlawful use voids a lease; owner may re-enter without process) versus RSA 540-A:3, II (no denial of possession except by judicial process). The rows advise the court route.
5. **Conflicting statutes:** RSA 540-A:8, II (unclaimed deposit becomes the landlord's after 6 months) versus RSA 471-C (unclaimed property act lists security deposits; 5-year dormancy). `edu-unclaimed-deposits-nh` states both.
6. **Specific over general:** RSA 161-F:32 allows a pet damage deposit up to 1.5 months' rent in state- or federally financed elderly public housing that allows companion animals, above the § 540-A:6, I(a) cap; no statute says how the two fit.
7. **Product, scope:** RSA 477:22-c bars foreign principals from leasing real property (`edu-foreign-principal-leasing-nh`); the builder may want a screening note.
8. **Product, utilities:** N.H. Code Admin. R. En 303.01 limits passing master-metered electricity to tenants to a fixed rent; any builder feature that bills electricity by usage needs a New Hampshire exclusion.
9. **Helper brief errors** (fixed before shipping, §1.4): the brief's 540-B scope line and its RSA 354-A class list.
10. **New `{{variable}}` names (rule 60):** none. New clauses use bracketed prompts for landlord-filled values.
11. **New topic key (rule 72):** `entity-landlord-court-representation` (`edu-entity-landlord-representation-nh`, RSA 540:30 and District Division Rule 1.3, D). No other new key.

## §11 Step D screens (rules 40–53), one line each
- **40 Formatting and placement:** no type-size, bold, conspicuous, underline or separate-document rule reaches a residential lease; every hit is in §4.
- **41 Just-cause:** restricted property may be ended only on a § 540:2, II ground; the end of a term ends possession only for a lease of 12 months or more (original or renewed total) with 60 days' written non-renewal notice and a possessory action filed within 6 months (§ 540:2, II(i)); nonrestricted property may be ended for any reason with the § 540:3 notice. Verdict row: `edu-for-cause-eviction-nh`; clauses that assumed the term ends possession were replaced (`surrender-end-of-term-nh`, `holdover-nh`).
- **42 Required text inside a shared clause:** none forced into a shared clause. The statutory receipt and 5-day condition-list notice (§ 540-A:6, I(b)-(c)) is its own clause (`security-deposit-receipt-nh`), and the non-electronic payment method (§ 540-A:3, X) is kept by tagging `acceptable-payment-methods-nj`.
- **43 Cure promises:** New Hampshire gives no statutory cure period except paying before the hearing in a nonpayment case (§ 540:9, I, at most three times in 12 months) and a prior written warning before a conduct-based "other good cause" eviction (§ 540:2, III). The tagged `default-by-tenant` keeps the no-cure grounds in its own sentence; the pay-and-stay right can't be waived (§ 540:28) and is left to law (`edu-forfeiture-redemption-nh`). Contract-cure variants were not tagged (§2.2).
- **44 Terms turned into landlord duties:** the tenant's repair remedy runs to the § 48-A:14 standards and local codes (§ 540:13-d), not to "material provisions of the rental agreement", so listing appliances or services doesn't create a statutory remedy trigger (`appliances-included` note).
- **45 Electronic notices:** RSA 294-E read: it applies only between parties who agreed (§ 294-E:5, II), the right to refuse further electronic dealings can't be waived (§ 294-E:5, III), an unretainable record is unenforceable (§ 294-E:8, III), and it doesn't authorize electronic delivery of the federal E-SIGN § 103(b) notices (§ 294-E:3, IV), which include eviction and default notices for a primary residence. Eviction notices must be served in hand or at the abode (§ 540:5). `electronic-notice-ma` (optional, excludes eviction and default notices) is tagged.
- **46 Lease as the required notice:** the signed lease can serve as the deposit receipt and condition-list notice (`security-deposit-receipt-nh`); the pre-signing disclosures (energy tariff, meth, lead order, asbestos site, activity and use restriction) are lease clauses that must reach the tenant before signing. No optional statutory addendum must control over the lease, so `addendum-precedence` is tagged as written.
- **47 Knowing-use penalties:** none for putting a void term in a lease (`edu-no-prohibited-term-penalty-nh`); the debt-collection statute's fee rule doesn't reach leases of real property (§ 358-C:1, III; `edu-no-collection-fee-rule-nh`). The one penalty is the civil-rights rule on discriminatory property restrictions (`edu-no-prohibited-term-penalty-nh`).
- **48 Separate documents:** no separate-writing rule for tenant chores; the lease may assign routine upkeep, and common-area garbage shifts only by the rental agreement (`edu-maintenance-duty-shift-nh`, optional `common-area-garbage-nh`). `landscaping-irrigation` and `snow-removal` are tagged (snow and ice under § 540:28-a from July 1, 2027).
- **49 Collection costs:** no collection-cost ban reaching rent; RSA 361-C attorney-fee reciprocity covers only retail installment contracts and consumer loans; the library's fee sentence is already mutual (`edu-attorney-fees-nh`).
- **50 "The lease controls" wording:** every lease-chosen option found is in `edu-optional-lease-terms-nh` and was decided on purpose (§6.1). No deposit uplift depends on lease wording; the deposit cap is one month's rent or $100 (§ 540-A:6, I(a)), with only the elderly-housing pet deposit as a special rule (§10 item 6).
- **51 Plain-language and consumer-contract statutes:** no plain-language or readability law (`edu-no-plain-language-rule-nh`, `edu-no-plain-language-lease-law-nh`). The Consumer Protection Act (RSA 358-A) reaches trade and commerce, which includes real property; its enumerated list has no lease-specific practice (no blank-space or copy-at-signing item); a separate statute requires a copy of a signed lease within 30 days (§ 477:7-b; `edu-lease-copy-nh`). Deposit violations of § 540-A:6, I-III are deemed § 358-A:2 violations (§ 540-A:8, I(a)). `edu-consumer-protection-act-nh` answers both questions.
- **52 Exculpation:** no statute voids "Landlord is not liable" terms generally (`edu-no-exculpatory-clause-rule-nh`), but specific waivers are void; the no-disclaimer variants are used anyway (rule 52 default).
- **53 Figures against shared clauses:** `late-fee` (no cap; its remedy-preservation sentence conflicts with § 540:13, VII), `returned-payments` and `holdover` ("maximum permitted by law" points at no figure) were overridden; `due-at-signing` and `pet-policy` were overridden for the single capped deposit; the 30-day rent-increase notice in `rent-increase-midterm-nh` matches § 540:2, IV.

## §12 Other Step C screens
- **30 Read beyond the section:** chapters 540, 540-A and 540-B read whole, with their definitions and the sections they point to (RSA 48-A:14, 130-A, 153:10-a, 354-A, 358-A:10).
- **31 Enacted twice:** deposit remedies (§ 540-A:8, II) and the unclaimed property act (RSA 471-C), and RSA 544:41 against § 540-A:3, II: both pairs stated in rows and flagged (§10).
- **32 Place and size:** the two tiers (§ 540:1-a: owner of no more than 3 single-family houses; owner-occupied building of 4 units or fewer; bank-foreclosed house) and the deposit exemption (§ 540-A:5, I: single-family owner with no other rentals, or owner-occupied building of 5 units or fewer, except units with an occupant 60 or older) are stated in each affected row; § 48-A:14 applies only where a town has no housing code. No county or population bracket applies.
- **35c Constitution:** loaded and proved (§1.3); screened by the whole-corpus batteries. no constitutional provision reaches a private lease term: the privacy article protects against "governmental intrusion" (N.H. Const. pt. I, art. 2-b), and the arms article (pt. I, art. 2-a) says nothing about private property rules, so firearm terms are ordinary lease terms (`edu-no-firearms-lease-rule-nh`); `edu-fair-housing-nh` quotes art. 2's equal-rights sentence.
- **37 Tenancy type:** at-will (rent on demand, § 540:1), month-to-month (30 days, rent to the end of the month, § 540:11, II) and fixed terms (II(i) applies only to terms of 12 months or more) are distinguished in every row where they differ.
- **38 No imported structure:** grounds, notices and the pay-and-stay right were read in New Hampshire's text; no other state's cure or damages structure was assumed.
- **39 Eviction duties:** District Division rules read whole, including the landlord-tenant rules and the 2026 statutory changes (§10 item 3); post-eviction property (§ 540-A:3, VII, 7 days), lockout and utility bans (§ 540-A:3, I-III) and the abandonment notice are in rows. No record-sealing rule for eviction cases (`edu-no-eviction-record-sealing-nh`); a no-fault termination isn't an eviction for screening (§ 540:2, VIII).

## §13 Independent check (rule 80)
Brief: `work/check/CHECK-BRIEF.md` (check against the statute, not the notes; earlier findings may be wrong; whole-section printing tool; findings saved per row).

| Round | Rows checked | ERROR | FIX | NOTE | Result |
|---|---|---|---|---|---|
| 1 | 356 (all rows then in the delta) | 4 | 25 | 4 | all applied |
| 2 | 29 (rows edited after round 1; previous versions supplied for diffing) | 1 | 19 | 3 | all applied |
| 3 | 16 (rows edited after round 2) | 0 | 4 | 0 | applied; the budget allows no round 4 |

Round 1 ERRORs, all fixed: `casualty-nh` (a landlord's casualty termination must be a § 540:3 eviction notice of at least 30 days, not a 14-day notice); `edu-no-deposit-standards-rule-nh` (the § 354-A:15 owner-occupied exemption applies only to § 354-A:10, not to the disability rules in § 354-A:11); `edu-cure-and-eviction-grounds-nh` (7 days' notice also applies to substantial damage, health-or-safety behavior and the domestic-violence ground); `edu-no-environmental-event-termination-nh` (the lead-hazard termination conditions). Round 2 ERROR, fixed: `edu-no-environmental-event-termination-nh` (the absolute bar on evicting for a lead hazard and the tenant's own termination right, § 130-A:8-a). Other fixes included `tenant-notice-to-end-nh` (the "does not coincide" trigger), `rules-ia` and `edu-retaliation-nh` (senior housing under RSA 161-M) and many citation, quote and pointer corrections.

### Edited after the last check
Claude Code reads these against the statute at sync (kickoff; rule 80). Round 3 FIXes applied: `due-at-signing-nh` (notes basis for the application-fee exclusion), `edu-no-promises-to-repair-rule-nh` ("offering for sale" wording), `edu-no-environmental-event-termination-nh` (family-eviction bar and conditions), `edu-scope-nh` (the three caregiver-exclusion conditions). Rule 19 screen after round 3 (rows citing a failed battery without saying so): `edu-no-drug-free-addendum-rule-nh`, `edu-elderly-housing-pets-nh` (notes only). Topic-fill rows written after round 3 (rule 27; §6.3, §18): `edu-no-children-occupancy-rule-nh`, `edu-fire-sprinkler-duty-nh`, `edu-no-landlord-registration-nh`, `edu-no-lease-type-size-nh`, `edu-nonwaivable-rights-nh`, `edu-no-property-tax-rent-statement-nh`, `edu-redemption-nh`, `edu-sale-or-management-change-nh`, `edu-self-help-eviction-ban-nh`, `edu-no-single-family-zone-lease-limit-nh`, `edu-statute-of-frauds-nh`, `edu-no-subsidized-inspection-refusal-nh`, `edu-no-tpa-exemption-notice-nh`, `edu-no-casualty-mitigation-waiver-rule-nh`, `edu-condition-inspection-nh`, `edu-electric-submetering-nh`, `edu-meter-conservation-charge-nh`, `edu-pet-fees-nh`, `edu-no-renters-insurance-rules-nh`. Optional clauses from the final rule 54 re-screen (§6.1): `tax-escalation-nh`, `common-area-garbage-nh`, with pointer sentences added to `edu-tax-escalation-nh` and `edu-maintenance-duty-shift-nh`. Total: 29 rows (8 edited, 21 new). Each new row's quotes passed the quote checker and its sections were read section-open.

## §14 Gap-discovery source 1 — statute walk (rule 29)
The core chapters were read whole (RSA 540, 540-A, 540-B), and each chapter's full section index was diffed by script against every citation in the delta (`work/statute-walk-diff.json`), one level down for chapters the library cites in part:
- **RSA 540 (40 sections):** uncited 540:15 (neglect to enter), 540:16 (general issue), 540:18 (effect of plea), 540:19 (neglect to recognize), 540:22 (neglect to enter appeal), 540:24 (recognizance by plaintiff), all court procedure with no landlord duty; and **540:30** (LLC or corporation representation by a member or employee), the only substantive gap, now `edu-entity-landlord-representation-nh` (new topic key).
- **RSA 540-A (9 sections):** all cited.
- **RSA 540-B (10 sections):** 540-B:3, :5, :6, :8 and :10 were uncited until the scenario screen added `edu-shared-facility-rentals-nh` (§16), which now cites the whole chapter.
- **RSA 48-A (16):** uncited 48-A:9 (municipal powers preserved), 48-A:12 (historic-district exceptions to local codes) and 48-A:13 (higher standard governs); none changes a row. **RSA 130-A (25):** uncited sections are the department's duties, testing, rulemaking, licensure, fines, fund and enforcement; the landlord duties (130-A:6-a, 7, 8-a, 18) are cited. **RSA 354-A (41):** uncited sections are the commission's procedure and employment and public-accommodation parts. **RSA 358-A (14):** uncited sections are attorney-general enforcement and procedure. **RSA 153 (49):** uncited sections are fire-marshal administration; 153:5, 153:10-a and 153:14 are cited.

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Lease used:** the Madbury Commons lease agreement (GP Madbury 17, LLC, 17 Madbury Road, Durham), a professional property manager's student-housing lease filed as the appendix to the property's Property Management Plan with the Town of Durham (durhamnh.gov/DocumentCenter/View/11958, "Property-Management-Plan"; 2014; saved PDF SHA-256 82aa0e6ca63eb7bbfe41d5820a7b6b062243ba66dc67d38ab521f52bffccd351; extracted text `src2/lease/madbury-lease-2014.txt`, PDF pages 13-21, 33 paragraphs).
- **Why it is weaker:** no free New Hampshire Realtors or apartment-association form was found in the searches (buying a lease is not an option, rule 33), and two attempts at a student-housing manager's site failed. This lease is a real, professional, New Hampshire-specific lease, not a relabelled multi-state template (it names a Durham property, a New Hampshire governing-law clause and Strafford County venue), but it is a 2014 by-the-bed student lease and predates the 2026 amendments. Used as a lead about wording only.
- **Mapping by topic (no text reproduced):**

| Lease paragraph (topic) | Library | Result |
|---|---|---|
| 3 Rent "without any demand"; no withholding | `rent-payment` (tagged) | rent is due on demand unless a contract fixes it (§ 540:1); the tag note keeps the demand a nonpayment eviction needs |
| 3 Per-day late charge from a fee schedule | `late-fee-nh` | no cap; confirms the override |
| 3 Check conversion; no cash or postdated checks | `acceptable-payment-methods-nj` | a check is a non-electronic method, consistent with § 540-A:3, X |
| 4 Payments applied to fees first, rent last | `application-of-payments` (rent first) | library default kept; fee-first risks making an unpaid fee look like unpaid rent |
| 5 Rent rises with utility rates or waste on notice | `rent-increase-midterm-nh` (optional) | a mid-term increase needs a lease term; library adds 30 days' notice and a tenant exit |
| 6, 15, 18 Damage charges, prepay repairs, joint liability, move-out walk-through | `tenant-caused-damage-nh`, `security-deposit-return-nh`, `edu-condition-inspection-nh` | deductions need the itemized list and evidence of repair (§ 540-A:7, I) |
| 6, 9 Inspections "at our sole discretion"; entry on reasonable notice and in emergencies without consent | `landlords-access-nh` | conflicts with § 540-A:3, IV-V-d (consent; without it only emergency repairs or court order); confirms the override |
| 7 Relocation to another unit on 20 days' notice | none | not adopted: a by-the-bed student-housing term with no library counterpart |
| 10 Hold harmless; no security promise | no-disclaimer variants | rule 52 variants kept |
| 11 Casualty: landlord may terminate or relocate | `casualty-nh` (optional) | library version is mutual and uses the § 540:3 notice |
| 12 Default for arrests, drugs, weapons | `criminal-activity-nh` (optional) | lease suggested the clause; library ties it to conduct, not arrests, with victim and cannabis carve-outs; no weapons term: New Hampshire neither bars nor permits one, so it stays an ordinary term (`edu-no-firearms-lease-rule-nh`) |
| 13 Acceptance of rent after notice doesn't waive | `edu-waiver-by-acceptance-nh` | conflicts with § 540:13, VII (written notice of intent to proceed needed); confirms the `late-fee-nh` change |
| 13 Sue for all rent to the end of the term | `edu-abandonment-mitigation-nh` | acceleration and mitigation are case law, unread |
| 15 Defects reported within 24 hours | `existing-condition-nh` | conflicts with the 5-day list (§ 540-A:6, I(b)-(c)); confirms the override |
| 17 Tenant waives any right to leave for disrepair | `edu-habitability-waiver-nh` | void to the extent it waives chapter 540 rights (§ 540:28) |
| 18 Property left behind abandoned; landlord may charge storage and dispose | `abandoned-property-nh` | conflicts with § 540-A:3, VII (7 days' reasonable-care storage) and the abandonment rules (§ 540-A:4, XII); confirms the new clause |
| 22 One-way attorney's fees | `default-by-tenant` (mutual) | no reciprocity statute reaches leases; library's mutual sentence kept |
| 26 Assignment only with consent, fee | `no-sublet-assign` | consistent |
| 27 Time of essence; 28 Subordination | none | not adopted (library decisions in earlier states) |
| 29 Sale releases landlord | `edu-sale-or-management-change-nh`, `edu-deposit-on-sale-nh` | release from the deposit only on transfer with notice (§ 540-A:6, III) |
| 31 Holdover rent from a fee schedule | `holdover-nh`, `holdover-rate-nh` (optional) | confirms the optional rate with New Hampshire exclusions |
| 32 Notices by e-mail or posting on the door | `notices`, `electronic-notice-ma` | eviction notices need in-hand or abode service (§ 540:5); e-mail only by agreement (RSA 294-E) |
| 33 Parking permits; towing at tenant's expense | `parking-vehicle-rules` | removal only with the § 540-A:3, II-a to II-c notices |

- **Rows it led to:** `criminal-activity-nh`. No change to a shared row was suggested, so nothing is flagged under rule 62.

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
Claude generated 137 scenarios from advertising and application to move-out, sale, foreclosure, death or departure of a tenant and eviction (`work/scenarios.jsonl`, NH-scen-001 to NH-scen-137), including the New Hampshire-specific ones in kickoff leads 2-13. Each was run against the delta's rows; 133 are answered by existing NH rows, 4 were gaps:
- **NH-scen-004** (Owner pays a friend or company a percentage to show the unit, sign up tenants and collect rent): No row says a third-party leasing agent or manager needs a license. RSA 331-A:2, III treats anyone acting for another for compensation who rents/leases, negotiates, lists, procures prospects or 'Collects, offers, attempts or agrees to collect rent' as a broker; § 331-A:3 bars acting without a license; exemptions § 331-A:4, I (owner and owner's regular employees), II, III, VI; no suit for compensation unless licensed  Row: `edu-property-manager-licensing-nh`.
- **NH-scen-079** (Tenant's dog bites a visitor; am I liable, and must the dog be licensed?): No row states NH dog law. RSA 466:19 makes the person who 'owns, keeps, or possesses the dog' liable (trespass/tort exception; parent liable for minor owner); § 466:1 annual town license by owner or keeper; § 466:13 $25 forfeiture; § 466:31 nuisance/menace dogs (II(g) amended eff. Jan. 1, 2027). No landlord-specific dog statute found; landlord-as-keeper is case law (row marked NEEDS_REVIEW). Row: `edu-dog-owner-liability-nh`.
- **NH-scen-121** (Can I evict in the middle of winter?): No row says expressly that NH has no winter or cold-weather eviction bar. Confirmed absent in the statutes, 2026 laws, court rules and admin rules (SC-winter-1: eviction terms with winter/cold-weather context, 1 irrelevant hit; RSA 540:12 and 540:13-c read: possessory action and discretionary stay have no seasonal limit; stay factors are age, familial status, disability, limited English). No new row: NH law says noth Row: none needed.
- **NH-scen-133** (Renting a room in my own house; the boarder shares my kitchen and bathroom): edu-scope-nh only says a separate shared-facilities chapter applies. RSA 540-B (read whole): at-will, verbal allowed (§ 540-B:2); owner's written notice 30 days no reason / 7 days nonpayment / 72 hours damage, health-safety behavior or material breach, in place of RSA 540 eviction (§ 540-B:3); service in hand or on the occupant's entrance (§ 540-B:5); no possessory rights, police assistance (§§ 540-B:6, :8); 3-day pr Row: `edu-shared-facility-rentals-nh`.

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus:** the whole RSA (every dated version), the constitution, all 344 N.H. Laws 2026 chapters, the District Division rules and the administrative rules, 75,659 units in one index (RSA 29,692; constitution 184; 2026 laws 344; court rules 162; administrative rules 45,277), searched with whitespace collapsed and both controls in every run (§1.5).
- **Topical batteries:** 462 in all (main pass NH-*, tag-screen TSA/TSB, canvass C1–C4, scenario SC, checkers K1–K2). Whole-code families run in the main pass: late fees, fees, returned checks, attorney's fees, holdover, casualty, mitigation, assignment, jury, confession, rent increase, unsafe conditions, exculpation, flags, insurance, pets, electronic records, utility allowance and the exploratory screens (smoke and CO alarms, radon, lead, rent control, source of income, utilities, sex offenders, firearms, cannabis, animals, heat).
- **Findings outside the landlord-tenant title that reached rows:** therapeutic cannabis (§ 126-X:3, I; `smoking-policy-nh`, `criminal-activity-nh`); smoke and CO alarms (§ 153:10-a, II-a; tenant tampering § 634:2, IX; `smoke-co-alarms-nh`); electric master meters (N.H. Code Admin. R. En 303.01; `edu-utility-allowance-nh`, `edu-electric-submetering-nh`); disclosures (§ 477:4-h energy tariffs, § 477:4-g with § 318-D:4 methamphetamine, N.H. Code Admin. R. He-P 1605.01(e) lead orders, § 141-E:23, III asbestos sites, N.H. Code Admin. R. Env-Or 608.01(b)(2) activity and use restrictions); copy of the lease within 30 days (§ 477:7-b); foreign principals (§ 477:22-c); real estate licensing (§ 331-A; `edu-property-manager-licensing-nh`); dog liability (§ 466:19); minimum housing standards (§ 48-A:14); lead poisoning (RSA 130-A); unclaimed property (RSA 471-C); bad checks (RSA 544-B); unlawful-use leases (§ 544:41); fire code (RSA 153, Saf-C 6000); fair housing (RSA 354-A); consumer protection (RSA 358-A); elderly housing pets (RSA 161-F); senior citizens bill of rights (RSA 161-M); electronic transactions (RSA 294-E).
- **Constitution:** no provision reaches a private landlord's lease term (§12, rule 35c).
- **Not searched:** case law, NFPA and building codes, utility tariffs, federal law beyond the tagged federal rows, municipal ordinances.

## §18 Topic canvass (rules 27, 36)
Four canvass slices (C1-C4, 87 topics each), at most two agents at a time, each saving one JSON line per topic after finishing it (`work/canvass/answers-1..4.jsonl`), briefed with the NH law brief and the planned clauses (`work/canvass/CANVASS-BRIEF.md`). No slice stopped early. All 348 topics in `lease-clause-topics.md` were answered: Present 179, Confirmed absent 167, Not applicable 2. The reference has no "Topics no state has a row for yet" section in this edition (checked). Each line: answer, then rows (new, tagged or planned NH clauses). A final script check (§8) found 19 topics whose only NH rows were keyed to other topics (13 answered "Rows: none" with a pointer, 6 listing related rows); rule 27 needs a row keyed to each topic, so a topic-fill row was written for each after the last check round and listed in §13. The two Not applicable topics keep their recorded reasons.

- `abandoned-property`: Present. Rows: `abandoned-property-nh`
- `abandonment-and-mitigation`: Present. Rows: `edu-abandonment-mitigation-nh`, `abandoned-property-nh`, `early-termination-ks`
- `acceptable-payment-methods`: Present. Rows: `acceptable-payment-methods-nj`
- `accessory-dwelling-unit`: Present. Rows: `edu-accessory-dwelling-units-nh`
- `actual-notice-method`: Confirmed absent. Rows: `edu-no-actual-notice-rule-nh`
- `addendum-precedence`: Confirmed absent. Rows: `addendum-precedence`
- `adverse-proceeding-notice`: Present. Rows: `edu-adverse-proceeding-notice-nh`
- `alarm-duties`: Present. Rows: `edu-alarm-duties-nh`, `smoke-co-alarms-nh`
- `alarm-tampering-fee`: Confirmed absent. Rows: `edu-no-alarm-tampering-fee-nh`, `smoke-co-alarms-nh`
- `algorithmic-rent-setting`: Confirmed absent. Rows: `edu-no-algorithmic-rent-rule-nh`
- `alt-housing`: Present. Rows: `edu-alt-housing-nh`
- `alterations`: Present. Rows: `edu-disability-modifications-nh`, `no-alterations`
- `appliances-excluded`: Confirmed absent. Rows: `edu-appliances-excluded-nh`, `appliances-included`
- `appliances-included`: Present. Rows: `appliances-included`
- `application-fees`: Present. Rows: `edu-application-fees-nh`
- `application-of-payments`: Confirmed absent. Rows: `application-of-payments`
- `asbestos-hazards`: Present. Rows: `edu-asbestos-nh`, `asbestos-disposal-site-disclosure-nh`
- `assigned-parking-space`: Confirmed absent. Rows: `assigned-parking-space`
- `assistance-animal-accommodation`: Present. Rows: `edu-service-animals-nh`, `assistance-animal-accommodation`
- `association-obligations-disclosure`: Confirmed absent. Rows: `edu-no-association-disclosure-nh`, `hoa-compliance`
- `attorney-fees`: Present. Rows: `edu-attorney-fees-nh`, `default-by-tenant`
- `automatic-renewal`: Confirmed absent. Rows: `edu-no-automatic-renewal-rule-nh`
- `balcony-inspection`: Confirmed absent. Rows: `edu-no-balcony-inspection-nh`
- `bed-bug-cooperation`: Present. Rows: `bed-bug-cooperation-nh`
- `bed-bug-disclosure`: Confirmed absent. Rows: `edu-no-bed-bug-disclosure-nh`, `bed-bug-cooperation-nh`
- `cannabis`: Present. Rows: `edu-cannabis-nh`, `smoking-policy-nh`
- `cares-act-notice`: Present. Rows: `edu-cares-act-notice`
- `casualty-and-mitigation-waivable`: Confirmed absent. Rows: `edu-no-casualty-mitigation-waiver-rule-nh` (topic-fill row added after the last check, §13); related: `casualty-nh`, `early-termination-ks`
- `casualty-termination`: Confirmed absent. Rows: `casualty-nh`
- `certificate-of-occupancy-disclosure`: Confirmed absent. Rows: `edu-no-occupancy-certificate-disclosure-nh`
- `children-occupancy`: Confirmed absent. Rows: `edu-no-children-occupancy-rule-nh` (topic-fill row added after the last check, §13). Canvass note: No NH rule that a lease must address occupancy by children. Familial status (children under 18 domiciled with a parent or custodian) is protected (RSA 354-A:9, IV; 354-A:10), with exemptions for reasonable occupancy limits and housing for older persons (354-A:
- `cold-weather-vacate-notice`: Confirmed absent. Rows: `edu-no-cold-weather-notice-nh`, `extended-absence-notice-ks`
- `collection-fee`: Confirmed absent. Rows: `edu-no-collection-fee-rule-nh`
- `common-area-lighting`: Confirmed absent. Rows: `edu-no-common-area-lighting-rule-nh`
- `common-area-use`: Confirmed absent. Rows: `common-area-use`
- `condemned-premises-rent-bar`: Confirmed absent. Rows: `edu-condemned-premises-nh`
- `condition-inspection`: Present. Rows: `edu-condition-inspection-nh` (topic-fill row added after the last check, §13); related: `existing-condition-nh`, `security-deposit-receipt-nh`
- `confession-of-judgment`: Confirmed absent. Rows: `edu-no-confession-of-judgment-nh`
- `confirmed-absences-habitability`: Confirmed absent. Rows: `edu-confirmed-absences-habitability-nh`
- `confirmed-absences-misc`: Confirmed absent. Rows: `edu-no-misc-rules-nh`
- `confirmed-absences-outside-title`: Present. Rows: `edu-whole-code-checks-nh`
- `construction-liens`: Present. Rows: `edu-construction-liens-nh`
- `consumer-protection-act`: Present. Rows: `edu-consumer-protection-act-nh`
- `conversion-notice`: Present. Rows: `edu-condo-conversion-nh`
- `criminal-activity`: Present. Rows: `edu-criminal-activity-nh`, `criminal-activity-nh`
- `cure-and-eviction-grounds`: Present. Rows: `edu-cure-and-eviction-grounds-nh`, `default-by-tenant`
- `default-by-tenant`: Present. Rows: `default-by-tenant`
- `defective-drywall-disclosure`: Confirmed absent. Rows: `edu-no-drywall-disclosure-nh`
- `deposit-cost-schedule`: Confirmed absent. Rows: `edu-no-deposit-cost-schedule-nh`
- `deposit-escheat`: Present. Rows: `edu-unclaimed-deposits-nh`
- `deposit-installments`: Confirmed absent. Rows: `edu-no-deposit-installment-right-nh`
- `deposit-last-month-rent`: Present. Rows: `edu-last-month-rent-deposit-nh`, `due-at-signing-nh`
- `deposit-surrender-notice`: Confirmed absent. Rows: `edu-no-deposit-refund-conditions-nh`
- `designated-repairer`: Confirmed absent. Rows: `edu-no-designated-repairer-nh`
- `disability-accommodation`: Present. Rows: `edu-disability-accommodation-nh`, `assistance-animal-accommodation`
- `disaster-displaced-guests`: Confirmed absent. Rows: `edu-no-disaster-guest-rule-nh`
- `disaster-duties`: Confirmed absent. Rows: `edu-no-disaster-duties-nh`, `casualty-nh`
- `disturbance`: Present. Rows: `no-disturbance`
- `double-letting`: Confirmed absent. Rows: `edu-no-double-letting-nh`, `possession-delay`
- `drug-free-housing-addendum`: Confirmed absent. Rows: `edu-no-drug-free-addendum-rule-nh`, `smoking-policy-nh`
- `due-at-signing`: Present. Rows: `due-at-signing-nh`
- `dv-confidentiality`: Present. Rows: `edu-dv-confidentiality-nh`
- `dv-deposit-timing`: Present. Rows: `edu-dv-deposit-timing-nh`
- `dv-eviction-protection`: Present. Rows: `edu-dv-eviction-protection-nh`
- `dv-lease-termination`: Present. Rows: `edu-dv-lease-termination-nh`
- `dv-lockchange`: Present. Rows: `edu-dv-lockchange-nh`
- `dv-protection-order-chapter-moved`: Confirmed absent. Rows: `edu-no-dv-citation-change-nh`
- `dv-qualifying-documents`: Present. Rows: `edu-dv-qualifying-documents-nh`
- `early-termination`: Present. Rows: `early-termination-ks`, `tenant-notice-to-end-nh`
- `electric-submetering-disclosure`: Present. Rows: `edu-electric-submetering-nh` (topic-fill row added after the last check, §13); related: `energy-tariff-disclosure-nh`
- `electronic-signatures`: Present. Rows: `edu-electronic-records-nh`, `electronic-signatures`
- `emergency-assistance-right`: Confirmed absent. Rows: `edu-no-emergency-call-protection-nh`
- `emergency-contact`: Confirmed absent. Rows: `edu-no-emergency-contact-nh`
- `eminent-domain`: Present. Rows: `edu-eminent-domain-nh`
- `employee-screening`: Confirmed absent. Rows: `edu-no-employee-screening-nh`
- `entire-agreement`: Confirmed absent. Rows: `entire-agreement`
- `environmental-event-termination`: Confirmed absent. Rows: `edu-no-environmental-event-termination-nh`, `casualty-nh`
- `ev-charging`: Confirmed absent. Rows: `edu-no-ev-charging-right-nh`
- `ev-charging-end-of-tenancy`: Confirmed absent. Rows: `edu-no-ev-charging-end-of-tenancy-nh`
- `ev-charging-requirements`: Confirmed absent. Rows: `edu-no-ev-charging-requirements-nh`
- `ev-charging-shared-area`: Confirmed absent. Rows: `edu-no-ev-charging-shared-area-nh`
- `eviction-hardship-stay`: Present. Rows: `edu-eviction-hardship-stay-nh`
- `eviction-penalty-clause-ban`: Confirmed absent. Rows: `edu-no-eviction-penalty-rule-nh`
- `eviction-process`: Present. Rows: `edu-eviction-process-nh`
- `eviction-record-sealing`: Confirmed absent. Rows: `edu-no-eviction-record-sealing-nh`
- `eviction-service-party`: Confirmed absent. Rows: `edu-no-eviction-service-party-nh`
- `exculpatory-clauses`: Confirmed absent. Rows: `edu-no-exculpatory-clause-rule-nh`
- `existing-condition`: Present. Rows: `existing-condition-nh`
- `expedited-criminal-eviction`: Present. Rows: `edu-expedited-criminal-eviction-nh`
- `expedited-deposit-disposition`: Confirmed absent. Rows: `edu-no-expedited-deposit-nh`
- `extended-absence-notice`: Confirmed absent. Rows: `extended-absence-notice-ks`
- `fair-housing`: Present. Rows: `edu-fair-housing-nh`, `assistance-animal-accommodation`
- `family-child-care`: Confirmed absent. Rows: `edu-no-family-child-care-rule-nh`
- `fee-in-lieu-of-deposit`: Confirmed absent. Rows: `edu-no-fee-in-lieu-of-deposit-nh`
- `fee-transparency`: Confirmed absent. Rows: `edu-no-fee-transparency-law-nh`, `energy-tariff-disclosure-nh`
- `fee-unprovided-service`: Confirmed absent. Rows: `edu-no-fee-unprovided-service-nh`
- `fees-as-rent`: Present. Rows: `edu-fees-as-rent-nh`
- `fire-code-standard`: Present. Rows: `edu-fire-code-standard-nh`, `smoke-co-alarms-nh`
- `fire-safety-grilling`: Present. Rows: `edu-grills-fire-code-nh`, `fire-safety-grilling`
- `fire-sprinkler-duty`: Present. Rows: `edu-fire-sprinkler-duty-nh` (topic-fill row added after the last check, §13). Canvass note: RSA 153:5, III: fire code may not require sprinklers in detached one- or two-family dwellings used only as residences; RSA 153:5, IV bars local residential sprinkler rules stricter than the state fire code; RSA 153:10-a, III bars alarm rules from requiring spr
- `firearms`: Confirmed absent. Rows: `edu-no-firearms-lease-rule-nh`
- `flood-disclosure`: Confirmed absent. Rows: `edu-no-flood-disclosure-nh`
- `for-cause-eviction`: Present. Rows: `edu-for-cause-eviction-nh`
- `foreclosure`: Present. Rows: `edu-foreclosure-nh`
- `foreclosure-disclosure`: Confirmed absent. Rows: `edu-no-foreclosure-disclosure-nh`
- `foreign-ownership`: Present. Rows: `edu-foreign-principal-leasing-nh`
- `forfeiture-redemption`: Present. Rows: `edu-forfeiture-redemption-nh`, `late-fee-nh`
- `frozen-standard-incorporation`: Present. Rows: `edu-frozen-standard-incorporation-nh`
- `furnishings-included`: Confirmed absent. Rows: `edu-no-furnished-rental-rule-nh`, `due-at-signing-nh`
- `good-cause-notice`: Confirmed absent. Rows: `edu-no-good-cause-notice-nh`
- `governing-law`: Confirmed absent. Rows: `governing-law`
- `government-fee-reimbursement`: Confirmed absent. Rows: `edu-no-government-fee-passthrough-nh`
- `governmental-fines`: Confirmed absent. Rows: `edu-no-fine-passthrough-nh`, `hoa-compliance`
- `guarantor-renewal`: Confirmed absent. Rows: `edu-no-guarantor-rule-nh`, `joint-liability`
- `guest-policy`: Present. Rows: `edu-guests-and-implied-tenants-nh`, `guest-policy`, `guest-policy-day-limit`
- `guest-policy-day-limit`: Confirmed absent. Rows: `guest-policy-day-limit`
- `guest-rights`: Confirmed absent. Rows: `edu-no-guest-rights-rule-nh`
- `habitability-materiality`: Present. Rows: `edu-habitability-materiality-nh`
- `habitability-modifiable`: Present. Rows: `edu-habitability-modifiable-nh`, `snow-removal`
- `habitability-presumption`: Confirmed absent. Rows: `edu-no-habitability-presumption-nh`
- `habitability-statement`: Confirmed absent. Rows: `edu-no-habitability-statement-nh`, `landlord-maintenance`
- `habitability-waiver`: Present. Rows: `edu-habitability-waiver-nh`
- `hazardous-contamination-disclosure`: Present. Rows: `edu-contamination-disclosures-nh`, `activity-use-restriction-nh`
- `health-district-rental-rules`: Confirmed absent. Rows: `edu-no-health-district-rules-nh`
- `heating`: Present. Rows: `edu-heating-nh`, `utilities-responsibility`
- `hoa`: Present. Rows: `edu-condo-rent-collection-nh`, `hoa-compliance`
- `hoa-compliance`: Present. Rows: `hoa-compliance`
- `holding-deposit`: Confirmed absent. Rows: `edu-holding-deposit-nh`
- `holdover`: Present. Rows: `holdover-rate-nh`, `holdover-nh`
- `holdover-rate`: Confirmed absent. Rows: `holdover-rate-nh`
- `home-business`: Confirmed absent. Rows: `edu-no-home-business-rule-nh`
- `homestead-waiver`: Confirmed absent. Rows: `edu-no-exemption-waiver-nh`
- `immigration-status`: Confirmed absent. Rows: `edu-no-immigration-status-rule-nh`
- `infirmity-termination`: Confirmed absent. Rows: `edu-no-infirmity-termination-nh`, `tenant-notice-to-end-nh`, `tenant-death-contact-nh`
- `informal-dispute-resolution`: Confirmed absent. Rows: `edu-no-pre-suit-resolution-nh`
- `inspection-condemnation-disclosure`: Present. Rows: `edu-code-order-disclosure-nh`
- `inspection-notice-penalty`: Present. Rows: `edu-condition-notice-penalty-nh`, `security-deposit-receipt-nh`, `existing-condition-nh`
- `inspection-rights`: Present. Rows: `inspection-rights`, `landlords-access-nh`
- `joint-liability`: Confirmed absent. Rows: `joint-liability`
- `jury-waiver`: Confirmed absent. Rows: `edu-no-jury-waiver-rule-nh`
- `key-control-policy`: Confirmed absent. Rows: `edu-no-key-control-mandate-nh`, `keys`
- `keys`: Present. Rows: `keys`
- `knowing-use-penalty`: Confirmed absent. Rows: `edu-no-prohibited-term-penalty-nh`
- `landlord-breach-remedy`: Present. Rows: `edu-landlord-breach-remedy-nh`
- `landlord-entry`: Present. Rows: `edu-landlord-entry-remedies-nh`, `landlords-access-nh`, `inspection-rights`
- `landlord-liability-insurance`: Confirmed absent. Rows: `edu-no-landlord-insurance-mandate-nh`
- `landlord-lien`: Present. Rows: `edu-landlord-lien-nh`, `abandoned-property-nh`
- `landlord-maintenance`: Present. Rows: `edu-minimum-housing-standards-nh`, `landlord-maintenance`, `tenant-maintenance`
- `landlord-registration`: Confirmed absent. Rows: `edu-no-landlord-registration-nh` (topic-fill row added after the last check, §13). Canvass note: NH has no statewide landlord registration, rental license or registration-before-occupancy rule (C3-landreg-1: 3 hits, bar-admission rules only); the only statewide filing is the restricted-property agent-for-service statement with the town or city clerk (RSA 
- `landlord-remedies-termination`: Present. Rows: `edu-landlord-remedies-nh`, `default-by-tenant`, `security-deposit-return-nh`
- `landlord-self-cure`: Confirmed absent. Rows: `edu-no-landlord-self-cure-nh`, `tenant-caused-damage-nh`
- `landscaping-irrigation`: Confirmed absent. Rows: `landscaping-irrigation`, `snow-removal`
- `late-fee`: Confirmed absent. Rows: `late-fee-nh`
- `late-fee-limit`: Confirmed absent. Rows: `edu-no-late-fee-limit-nh`
- `law-enforcement-cooperation`: Confirmed absent. Rows: `edu-no-law-enforcement-cooperation-rule-nh`
- `lead-based-paint`: Present. Rows: `edu-lead-poisoning-law-nh`, `lead-based-paint`
- `lead-safe-certification`: Present. Rows: `edu-lead-safe-certification-nh`
- `lead-state-notices`: Present. Rows: `edu-lead-state-notices-nh`, `lead-hazard-order-disclosure-nh`
- `lease-completeness`: Confirmed absent. Rows: `edu-no-lease-completeness-rule-nh`
- `lease-content-requirements`: Present. Rows: `edu-lease-content-requirements-nh`
- `lease-copy`: Present. Rows: `edu-lease-copy-nh`
- `lease-notice-initial-requirement`: Confirmed absent. Rows: `edu-no-initials-requirement-nh`
- `lease-term-limitation`: Present. Rows: `edu-lease-length-and-recording-nh`
- `lease-type-parity`: Confirmed absent. Rows: `edu-no-lease-type-parity-nh`
- `lease-type-size`: Confirmed absent. Rows: `edu-no-lease-type-size-nh` (topic-fill row added after the last check, §13). Canvass note: No NH minimum type size for a printed lease and no evidentiary sanction; 12-point type applies only to the RSA 540-A:4, XII(d) abandonment notice form and the RSA 540:13, II court notice. See edu-no-lease-font-rules-nh.
- `liquidated-damages`: Confirmed absent. Rows: `edu-no-liquidated-damages-rule-nh`, `late-fee-nh`, `early-termination-ks`
- `lockout-for-rent-delinquency`: Present. Rows: `edu-lockout-prohibited-nh`, `default-by-tenant`
- `maintenance-duty-shift`: Present. Rows: `common-area-garbage-nh` (optional clause added after the last check, §6.1, §13), `edu-maintenance-duty-shift-nh`, `tenant-maintenance`, `snow-removal`, `landscaping-irrigation`
- `meter-conservation-charge`: Present. Rows: `edu-meter-conservation-charge-nh` (topic-fill row added after the last check, §13); related: `energy-tariff-disclosure-nh`
- `meth-disclosure`: Present. Rows: `edu-meth-disclosure-nh`, `meth-production-disclosure-nh`
- `military-air-zone-disclosure`: Confirmed absent. Rows: `edu-no-military-zone-disclosure-nh`
- `minor-tenant-filing`: Confirmed absent. Rows: `edu-no-minor-tenant-rule-nh`
- `mold-disclosure`: Confirmed absent. Rows: `edu-no-mold-disclosure-nh`
- `municipal-utility-lien`: Present. Rows: `edu-municipal-utility-lien-nh`
- `nonpayment-notice`: Present. Rows: `edu-nonpayment-notice-nh`, `late-fee-nh`
- `nonrefundable-deposit-notice`: Present. Rows: `edu-no-nonrefundable-deposit-nh`
- `nonrefundable-deposit-separate-notice`: Present. Rows: `edu-no-nonrefundable-deposit-notice-nh`
- `nonresident-owner-agent`: Present. Rows: `edu-agent-for-service-nh`, `edu-property-manager-licensing-nh`
- `notice-delivery-methods`: Present. Rows: `edu-notice-delivery-methods-nh`, `notices`, `electronic-notice-ma`
- `notice-service-fee`: Confirmed absent. Rows: `edu-no-notice-fee-rule-nh`
- `notice-to-quit-waiver`: Present. Rows: `edu-notice-to-quit-waiver-nh`
- `notice-to-vacate-additional-terms`: Confirmed absent. Rows: `edu-no-notice-to-vacate-terms-rule-nh`
- `notices`: Present. Rows: `notices`
- `nuisance`: Present. Rows: `edu-nuisance-nh`
- `optional-lease-terms`: Present. Rows: `edu-optional-lease-terms-nh`
- `ordnance-demolition-meter-disclosures`: Confirmed absent. Rows: `edu-no-ordnance-demolition-disclosure-nh`, `energy-tariff-disclosure-nh`
- `other-landlord-facilities`: Present. Rows: `edu-other-landlord-facilities-nh`, `smoke-co-alarms-nh`, `appliances-included`
- `owner-identity-disclosure`: Confirmed absent. Rows: `edu-no-owner-identity-disclosure-nh`
- `owner-move-in-reservation`: Confirmed absent. Rows: `edu-no-owner-move-in-reservation-nh`
- `parking`: Present. Rows: `parking-ks-oh-ca`
- `parking-rules-notice`: Confirmed absent. Rows: `edu-no-parking-rules-notice-nh`
- `parking-vehicle-rules`: Present. Rows: `parking-vehicle-rules`
- `part5-nonwaivable`: Present. Rows: `edu-nonwaivable-rights-nh` (topic-fill row added after the last check, §13). Canvass note: NH has no single all-rights nonwaiver section; waiver bars are statute-specific: RSA 540:28 (all RSA 540 rights), 540-A:8, III (deposit rights), 356-B:46-a, IV, 356-C:7, 358-A:10, I. See edu-prohibited-lease-terms-nh.
- `periodic-services-entry`: Present. Rows: `edu-periodic-services-entry-nh`, `landlords-access-nh`
- `permitted-occupants`: Present. Rows: `edu-occupancy-limits-nh`, `permitted-occupants`
- `pest-control-notice`: Present. Rows: `edu-pesticide-notice-nh`, `bed-bug-cooperation-nh`
- `pet-eviction-fact-sheet`: Confirmed absent. Rows: `edu-no-pet-eviction-fact-sheet-nh`
- `pet-fees`: Present. Rows: `edu-pet-fees-nh` (topic-fill row added after the last check, §13); related: `pet-policy-nh`, `due-at-signing-nh`
- `pet-insurance-requirement`: Confirmed absent. Rows: `pet-insurance-requirement`
- `pet-policy`: Present. Rows: `edu-elderly-housing-pets-nh`, `pet-policy-nh`, `edu-dog-owner-liability-nh`
- `plain-language`: Confirmed absent. Rows: `edu-no-plain-language-rule-nh`
- `plain-language-consumer-statement`: Confirmed absent. Rows: `edu-no-plain-language-lease-law-nh`
- `political-access`: Confirmed absent. Rows: `edu-no-candidate-access-rule-nh`
- `pool-safety`: Present. Rows: `edu-pool-rules-nh`
- `portable-cooling-device`: Confirmed absent. Rows: `edu-no-portable-cooling-right-nh`
- `portable-solar`: Confirmed absent. Rows: `edu-no-portable-solar-right-nh`
- `portfolio-thresholds`: Present. Rows: `edu-portfolio-thresholds-nh`
- `possession-bond`: Confirmed absent. Rows: `edu-no-possession-bond-nh`
- `possession-delay`: Confirmed absent. Rows: `possession-delay`
- `post-eviction-property`: Present. Rows: `edu-post-eviction-property-nh`, `abandoned-property-nh`
- `private-well-testing`: Confirmed absent. Rows: `edu-no-well-test-disclosure-nh`
- `prohibited-acts-renter`: Present. Rows: `edu-tenant-prohibited-acts-nh`
- `prohibited-lease-terms`: Present. Rows: `edu-prohibited-lease-terms-nh`, `acceptable-payment-methods-nj`, `smoking-policy-nh`, `due-at-signing-nh`, `landlords-access-nh`, `abandoned-property-nh`
- `promises-to-repair`: Confirmed absent. Rows: `edu-no-promises-to-repair-rule-nh`, `entire-agreement`
- `prop65-rental-warning`: Not applicable. Rows: none (reason: California's Proposition 65 warning has no NH counterpart; C4-prop65-1 (Proposition 65, 'known to the state of California', Safe Drinking Water and Toxic Enforcement; whole corpus) returned 0 hits. NH contamination disclosures are covered in edu-contamination-)
- `property-tax-rent-disclosure`: Confirmed absent. Rows: `edu-no-property-tax-rent-statement-nh` (topic-fill row added after the last check, §13). Canvass note: No NH annual statement of the property-tax portion of rent. If the lease requires the tenant to pay all or part of real estate tax increases during the term, the landlord may deduct that share from the security deposit with a written itemized list showing the 
- `protected-class-inquiry-ban`: Confirmed absent. Rows: `edu-no-protected-class-inquiry-rule-nh`
- `purpose-limitation`: Present. Rows: `edu-purpose-limitation-nh`
- `quiet-possession`: Present. Rows: `edu-quiet-enjoyment-nh`, `no-disturbance`
- `radon-disclosure`: Confirmed absent. Rows: `edu-no-radon-disclosure-nh`
- `recycling-notice`: Confirmed absent. Rows: `edu-no-recycling-notice-nh`
- `redemption`: Present. Rows: `edu-redemption-nh` (topic-fill row added after the last check, §13). Canvass note: Pay-and-stay before the hearing (RSA 540:9: rent due, other lawful lease charges, $15, filing and service costs; max 3 times in 12 months); accepting arrears during the case without a new tenancy only with written notice of intent to proceed (RSA 540:13, VII);
- `religious-cultural-display`: Confirmed absent. Rows: `edu-no-religious-display-rule-nh`
- `rent-concession`: Confirmed absent. Rows: `rent-concession-wi`
- `rent-control`: Confirmed absent. Rows: `edu-no-rent-control-nh`
- `rent-demand-bar`: Confirmed absent. Rows: `edu-no-rent-demand-bar-nh`
- `rent-escalation`: Confirmed absent. Rows: `edu-rent-escalation-nh`, `rent-increase-midterm-nh`
- `rent-increase-notice`: Present. Rows: `edu-rent-increase-notice-nh`, `rent-increase-midterm-nh`
- `rent-installments`: Confirmed absent. Rows: `rent-installments-or`
- `rent-into-court-counterclaim`: Present. Rows: `edu-rent-into-court-nh`
- `rent-payment`: Present. Rows: `rent-payment`
- `rent-receipt-anti-waiver`: Confirmed absent. Rows: `edu-no-rent-receipt-anti-waiver-nh`
- `rent-receipts`: Confirmed absent. Rows: `edu-rent-receipts-nh`
- `rent-reporting`: Confirmed absent. Rows: `edu-no-rent-reporting-rule-nh`
- `rent-tax`: Present. Rows: `edu-rooms-tax-short-occupancy-nh`
- `rental-application-accuracy`: Present. Rows: `edu-application-answers-annulled-records-nh`, `rental-application-accuracy`
- `rental-inspection`: Present. Rows: `edu-rental-inspection-nh`, `inspection-rights`, `landlords-access-nh`
- `renters-insurance-rules`: Confirmed absent. Rows: `edu-no-renters-insurance-rules-nh` (topic-fill row added after the last check, §13); related: `tenants-property-insurance-ks-oh-ca`
- `repair-cost-termination`: Confirmed absent. Rows: `edu-no-repair-cost-termination-nh`, `casualty-nh`
- `repair-escrow-exemption-notice`: Confirmed absent. Rows: `edu-no-small-landlord-remedy-exemption-nh`
- `repair-notice`: Present. Rows: `edu-repair-notice-nh`, `landlord-maintenance`
- `required-disclosures`: Present. Rows: `edu-required-disclosures-nh`, `security-deposit-receipt-nh`, `energy-tariff-disclosure-nh`, `lead-based-paint`
- `required-fees`: Confirmed absent. Rows: `edu-no-fee-listing-rule-nh`
- `residential-use-only`: Present. Rows: `residential-use-only`
- `retaliation`: Present. Rows: `edu-retaliation-nh`
- `returned-payments`: Present. Rows: `edu-bad-check-remedy-nh`, `returned-payments-nh`
- `rules-regulations`: Present. Rows: `edu-house-rules-nh`, `rules-ia`
- `sale-or-management-change`: Present. Rows: `edu-sale-or-management-change-nh` (topic-fill row added after the last check, §13). Canvass note: Deposit transfer within 5 days of deed/assignment or receiver qualification, certified/registered-mail notice, transferor released (RSA 540-A:6, III) (edu-deposit-on-sale-nh, answers-1); grantee of a tenancy at will takes the grantor's RSA 540 rights (540:27);
- `sanitary-code-variance`: Confirmed absent. Rows: `edu-no-variance-notice-nh`
- `scope`: Present. Rows: `edu-scope-nh`, `edu-shared-facility-rentals-nh`
- `seasonal-tenancy`: Present. Rows: `edu-seasonal-rentals-nh`
- `security-deposit-cap`: Present. Rows: `edu-security-deposit-cap-nh`, `due-at-signing-nh`
- `security-deposit-holding`: Present. Rows: `edu-security-deposit-holding-nh`, `security-deposit-receipt-nh`
- `security-deposit-interest`: Present. Rows: `edu-security-deposit-interest-nh`, `security-deposit-return-nh`
- `security-deposit-nonwaiver`: Present. Rows: `edu-deposit-nonwaiver-nh`
- `security-deposit-on-sale`: Present. Rows: `edu-deposit-on-sale-nh`
- `security-deposit-penalty`: Present. Rows: `edu-deposit-penalties-nh`
- `security-deposit-return`: Present. Rows: `security-deposit-return-nh`
- `security-deposit-standards`: Confirmed absent. Rows: `edu-no-deposit-standards-rule-nh`
- `security-deposit-use`: Present. Rows: `security-deposit-use`
- `security-devices`: Confirmed absent. Rows: `edu-no-security-devices-nh`, `keys`
- `self-help-eviction`: Present. Rows: `edu-self-help-eviction-ban-nh` (topic-fill row added after the last check, §13). Canvass note: RSA 540-A:2 (no circumventing RSA 540), 540-A:3, I-III (no willful utility interruption, lockout or seizure of tenant property except by judicial process), 540-A:4 (petition, RSA 358-A:10 damages: actual or $1,000, 2-3x if willful, fees; daily violations after
- `senior-housing-work-card`: Not applicable. Rows: none (reason: Work cards for staff in 55+ housing are another state's licensing program; NH has no work-card statute or rule (C2-workcard-1, 0 hits), and NH employee screening is covered under employee-screening (no statute).)
- `service-animal-denial-penalty`: Present. Rows: `edu-service-animal-denial-penalty-nh`
- `service-animal-misrepresentation`: Present. Rows: `edu-service-animal-misrepresentation-nh`
- `servicemember-rights`: Present. Rows: `edu-servicemember-rights-nh`
- `services-utilities-provided`: Present. Rows: `services-utilities-provided-ks-oh`, `utilities-paid-by-landlord`, `utilities-responsibility`
- `severability`: Present. Rows: `severability`
- `sex-offender-disclosure`: Confirmed absent. Rows: `edu-no-sex-offender-disclosure-nh`
- `sex-offender-occupancy`: Confirmed absent. Rows: `edu-no-sex-offender-residency-rule-nh`
- `sfr-occupancy-disclosure`: Confirmed absent. Rows: `edu-no-lease-font-rules-nh`
- `shoreline-access-disclosure`: Confirmed absent. Rows: `edu-no-shoreline-disclosure-nh`
- `shutdown-rent-protection`: Confirmed absent. Rows: `edu-no-shutdown-protection-nh`
- `single-family-zone-lease-limit`: Confirmed absent. Rows: `edu-no-single-family-zone-lease-limit-nh` (topic-fill row added after the last check, §13). Canvass note: No NH statute limits renting homes in single-family zones; the only owner-occupancy rule is a municipality's option to require the owner to live in one unit of a single-family home with an accessory dwelling unit (RSA 674:72, VI). See edu-accessory-dwelling-un
- `smart-access`: Confirmed absent. Rows: `edu-no-smart-access-nh`, `keys`
- `smoke-drift-waiver`: Present. Rows: `edu-indoor-smoking-act-nh`, `smoking-policy-nh`
- `smoking-policy`: Present. Rows: `smoking-policy-nh`
- `snow-removal`: Present. Rows: `edu-snow-ice-removal-nh`, `snow-removal`
- `social-security-defense`: Confirmed absent. Rows: `edu-no-benefit-delay-continuance-nh`
- `source-of-income`: Confirmed absent. Rows: `edu-no-source-of-income-protection-nh`
- `sprinkler-disclosure`: Confirmed absent. Rows: `edu-no-sprinkler-disclosure-nh`
- `statute-of-frauds-lease-term`: Present. Rows: `edu-statute-of-frauds-nh` (topic-fill row added after the last check, §13). Canvass note: NH's long-lease rule is a recording rule, not a validity rule between the parties: a lease for more than 7 years is not valid against anyone but the lessor and heirs unless acknowledged and recorded (RSA 477:7). No statute requiring a residential lease to be i
- `statutory-caps`: Present. Rows: `edu-statutory-caps-nh`
- `statutory-early-termination`: Present. Rows: `edu-statutory-early-termination-nh`
- `statutory-forms`: Present. Rows: `edu-statutory-forms-nh`
- `steam-radiator-covers`: Confirmed absent. Rows: `edu-no-radiator-cover-rule-nh`
- `stigmatized-property`: Confirmed absent. Rows: `edu-no-stigmatized-property-rule-nh`
- `storage-space`: Present. Rows: `edu-storage-space-nh`, `storage-space-ks-oh-ca`
- `stove-refrigerator`: Confirmed absent. Rows: `edu-no-stove-refrigerator-nh`, `appliances-included`
- `sublet-assign`: Present. Rows: `no-sublet-assign`
- `subsidized-inspection-refusal`: Confirmed absent. Rows: `edu-no-subsidized-inspection-refusal-nh` (topic-fill row added after the last check, §13). Canvass note: No NH statute on refusing a subsidized tenancy because of program inspections or on a subsidized tenant's refusal of inspection; source of income is not a protected class (RSA 354-A:10), so state law doesn't require participation. See edu-no-source-of-income-p
- `subsidy-habitability-proration`: Confirmed absent. Rows: `edu-no-subsidy-proration-rule-nh`
- `subsidy-late-fee`: Confirmed absent. Rows: `edu-no-subsidy-late-fee-rule-nh`
- `substandard-property-receivership`: Present. Rows: `edu-code-repair-orders-nh`
- `surrender-end-of-term`: Present. Rows: `surrender-end-of-term-nh`
- `tax-escalation`: Present. Rows: `tax-escalation-nh` (optional clause added after the last check, §6.1, §13), `edu-tax-escalation-nh`
- `telecom-access`: Confirmed absent. Rows: `edu-no-telecom-access-nh`
- `tenancy-at-will`: Present. Rows: `edu-tenancy-at-will-nh`
- `tenant-bankruptcy`: Confirmed absent. Rows: `edu-no-tenant-bankruptcy-rule-nh`
- `tenant-caused-damage`: Present. Rows: `tenant-caused-damage-nh`
- `tenant-confidential-information`: Confirmed absent. Rows: `edu-no-tenant-data-rule-nh`
- `tenant-death`: Confirmed absent. Rows: `edu-no-tenant-death-rule-nh`, `tenant-death-contact-nh`
- `tenant-display-rights`: Present. Rows: `edu-flag-sign-display-nh`
- `tenant-forward-proceedings`: Confirmed absent. Rows: `tenant-forward-proceedings-ca`
- `tenant-insurance-claims`: Confirmed absent. Rows: `edu-no-tenant-insurance-claim-rule-nh`, `tenants-property-insurance-ks-oh-ca`
- `tenant-maintenance`: Present. Rows: `tenant-maintenance`
- `tenant-portal`: Present. Rows: `edu-tenant-portal-nh`, `acceptable-payment-methods-nj`
- `tenant-records`: Present. Rows: `edu-tenant-records-nh`
- `tenant-repair-agreement`: Present. Rows: `edu-tenant-repair-agreement-nh`, `tenant-maintenance`
- `tenant-repair-remedies`: Present. Rows: `edu-tenant-repair-remedies-nh`
- `tenant-right-to-organize`: Present. Rows: `edu-tenant-organizing-nh`
- `tenant-rights-statement`: Present. Rows: `edu-tenant-rights-statement-nh`
- `tenant-screening`: Present. Rows: `edu-tenant-screening-nh`
- `tenant-security-cameras`: Confirmed absent. Rows: `edu-no-tenant-camera-rule-nh`
- `tenant-statutory-duties`: Present. Rows: `edu-tenant-statutory-duties-nh`
- `tenants-property-insurance`: Confirmed absent. Rows: `tenants-property-insurance-ks-oh-ca`
- `term-change-notice`: Present. Rows: `edu-term-change-notice-nh`
- `termination-notice`: Present. Rows: `tenant-notice-to-end-nh`
- `towing`: Present. Rows: `edu-towing-nh`
- `tpa-exemption-notice`: Confirmed absent. Rows: `edu-no-tpa-exemption-notice-nh` (topic-fill row added after the last check, §13). Canvass note: No NH law requires a notice that a property is exempt from rent limits, just-cause rules or purchase rights, since NH has no rent cap and its restricted/nonrestricted split (RSA 540:1-a, 540:2) carries no notice. See edu-no-rent-cap-notice-nh and edu-no-good-c
- `tpa-notice`: Confirmed absent. Rows: `edu-no-rent-cap-notice-nh`
- `tpa-sunset`: Confirmed absent. Rows: `edu-no-tenant-law-sunset-nh`
- `translation-duty`: Confirmed absent. Rows: `edu-no-translation-duty-nh`
- `truth-in-renting`: Confirmed absent. Rows: `edu-no-truth-in-renting-nh`
- `unauthorized-occupant-removal`: Present. Rows: `edu-unauthorized-occupant-removal-nh`
- `unbundled-parking`: Confirmed absent. Rows: `edu-no-unbundled-parking-rule-nh`
- `unconscionability`: Confirmed absent. Rows: `edu-no-lease-unconscionability-statute-nh`
- `unpaid-damages-interest`: Present. Rows: `edu-interest-on-unpaid-amounts-nh`
- `utilities-paid-by-landlord`: Present. Rows: `utilities-paid-by-landlord`
- `utilities-responsibility`: Present. Rows: `utilities-responsibility`, `utilities-paid-by-landlord`, `services-utilities-provided-ks-oh`
- `utility-allowance-cap`: Confirmed absent. Rows: `edu-utility-allowance-nh`
- `utility-apportionment`: Present. Rows: `edu-utility-apportionment-nh`, `utilities-responsibility`
- `utility-deposit-return`: Confirmed absent. Rows: `edu-no-utility-deposit-nh`
- `utility-disclosure-attachment`: Present. Rows: `energy-tariff-disclosure-nh`
- `utility-disconnection-notice-authorization`: Present. Rows: `edu-utility-shutoff-owner-notice-nh`
- `utility-interruption-submeter`: Confirmed absent. Rows: `edu-no-submeter-regime-nh`, `utility-service-continuity`
- `utility-landlord-account`: Present. Rows: `edu-utility-landlord-account-nh`, `utility-payment-evidence`
- `utility-payment-evidence`: Present. Rows: `utility-payment-evidence`
- `utility-service-continuity`: Present. Rows: `utility-service-continuity`
- `utility-shutoff-statute`: Present. Rows: `edu-utility-shutoff-rules-nh`
- `utility-submetering-disclosure`: Present. Rows: `edu-submetering-disclosure-nh`, `energy-tariff-disclosure-nh`
- `utility-transfer`: Present. Rows: `edu-utility-transfer-nh`, `utilities-responsibility`, `utility-service-continuity`
- `veterans-incentive`: Confirmed absent. Rows: `edu-no-veterans-incentive-nh`
- `waiver-by-acceptance`: Present. Rows: `edu-waiver-by-acceptance-nh`
- `water-heater-temperature`: Confirmed absent. Rows: `edu-no-water-heater-temperature-nh`
- `waterbed`: Confirmed absent. Rows: `edu-no-waterbed-rule-nh`
- `window-guards`: Confirmed absent. Rows: `edu-no-window-guard-rule-nh`
- `written-notice-required`: Present. Rows: `edu-written-notices-nh`

## §19 Conformance-table entry
NH (2026-10-10), from this log's §6.1 and §19; it ran on SOP 1.68 under the usage budget and read every row section-open, so 79 is ✓. The Retro rules in the table were checked in this pass: 37–39 and 35c in §12, 40–53 in §11 and §4, 54 and 54t in §6.1, 27 in §18, and 55–57 by the merge checks in §8. The "54 e.g." cells: holdover charge ✓ (`holdover-rate-nh`), casualty termination ✓ (`casualty-nh`), statutory waivers n (§ 540:28 voids waivers of chapter 540 rights, and no statute supports an exemption or jury waiver), crime-free clause ✓ (`criminal-activity-nh`), eviction-fee clause ✓ (the tagged mutual fee sentence in `default-by-tenant`; no lease fee statute, statutory fee awards in `edu-attorney-fees-nh`). Also offered: `tax-escalation-nh` and `common-area-garbage-nh` (lease-invoked rights) and `rent-increase-midterm-nh`. Rule 27: all 348 topics answered, each with a row keyed to it except the two Not applicable topics (19 topic-fill rows were written after the last check, §13).

## Proposed SOP changes
- Rule 27: before the independent check, run a script that every canvass topic has a new-state row keyed to it; a canvass answer of "covered by a row keyed to another topic" leaves the topic unanswered for the cross-state check. (NH: 19 such topics were found only after round 3.)
- Rule 54: before the independent check, re-read the state's "optional lease terms" education row item by item and write a clause for each lease-invoked right that serves the landlord. (NH: the tax-share deduction and common-area garbage shift were found only at the end.)
- Rule 59: anchor the quote checker on each quote's own citation, not on whole-row text; a whole-row match let a misquote ("not more than 3 times" for "more than 3 times") pass until the check was anchored.
- Rule 79 (helpers): check a helper brief's scope statements and class lists against the statute before sending it to agents; two NH brief errors (RSA 540-B scope, the RSA 354-A:10 class list) reached the helpers and had to be corrected in their rows.

## Proposed topic questions
- `for-cause-eviction`: Does the good-cause rule make the end of a lease a ground only for leases of a minimum length (original or renewed total), with an advance non-renewal notice and a filing deadline? (New Hampshire, N.H. Rev. Stat. Ann. § 540:2, II(i).)
- `maintenance-duty-shift`: Does the minimum-standards statute let the rental agreement shift one listed condition (such as common-area garbage removal) to the tenant, and only on a landlord precondition? (New Hampshire, § 48-A:14, VIII.)
- `utility-allowance-cap`: Do the utility regulator's rules bar passing master-metered electricity to tenants except through a fixed rent? (New Hampshire, N.H. Code Admin. R. En 303.01.)
- `tax-escalation`: Does the deposit statute let a landlord deduct a tenant's share of a tax increase only if the lease requires it, so the right exists only when the lease invokes it? (New Hampshire, § 540-A:7, II.)
- `condition-inspection`: Must the landlord give the move-in condition-list notice even when no deposit receipt is required (for example, a deposit paid by check)? (New Hampshire, § 540-A:6, I(c).)

## Sync (Claude Code, 2026-10-10)

- **Merge:** `merge-delta.py` against the kickoff base 24f3299 (the attached CSV's sha256 matches the log header): 325 new rows, 52 updated (shared rows, NH tag and note segment only). 5,201 → 5,526 rows. New Hampshire has 377 active rows (79 lease clauses, 298 education rows) on 347 topic keys.
- **Corpus channel (SOP rule 24, first use):** Desktop's tools couldn't reach gc.nh.gov; it used `corpus-NH-20261009.zip`, matched every file to the manifests, proved completeness against the site's tables of contents, and matched five chapters re-fetched through Taylor's browser byte for byte (§1.1). The pass took about two and a half hours.
- **Edited after the last check (§13):** all 29 rows read against the corpus text (RSA 540:1-a, 540:1-c, 540:9, 540:11, 540:13, VII, 540-A:3, IV-a to X, 540-A:5, 540-A:6, III, 540-A:7, II, 477:4-h, 477:7, 48-A:14, VIII, 153:5, 161-F:32, 354-A:10, 354-A:15, 358-A:10). No error found.
- **Statute spot-check (all match):** § 540-A:5, I-II (deposit exemption; every payment beyond the monthly rent is a deposit), § 540-A:7 (30 days, itemized list with evidence of repair), § 540:9, I-II (pay before the hearing; at most 3 times in 12 months), § 540-A:3, IV-a, V, V-b (emergency and infestation entry within 72 hours; 48 hours' written notice for an adjacent-unit bed bug check), § 540:11, II (30 days; rent to the next due date) and § 540-A:3, VIII, X (application-fee disclosure and refund; a non-electronic payment method). Checked against `security-deposit-return-nh`, `due-at-signing-nh`, `landlords-access-nh`, `tenant-notice-to-end-nh`, `late-fee-nh`, `surrender-end-of-term-nh` and `holdover-nh`.
- **Open item §7.1 (RSA 540:2, II(i) applicability):** Claude Code also couldn't retrieve N.H. Laws 2024, ch. 9 or 2025, ch. 263 by script (the bill search returns the current session regardless of the year asked). The RSA page prints no applicability note. Leases built in the app are signed after both acts took effect, so the ground's availability for them is unaffected; only advice about older leases could depend on it. Left open (backlog item 24, legal-watch manual item).
- **Two-part rule types** (for example REQUIRED/CONDITIONAL, 35 NH education rows) match earlier states' usage; `generate.py` splits them. No change.
- **Same-topic check:** no unexplained pairs among the 79 NH clauses.
- **Comparison with recent states:** 377 active rows against RI 383, CT 339, MA 394; 79 lease clauses (RI 76, CT 84, MA 78); 347 topic keys, the most of any state; no topic that 20 or more states have is missing. 4 NEEDS_REVIEW rows (RI 17, CT 70, MA 42). Optional clauses match other states' range.
- **Citations file:** `lease-clause-citations-NH.csv` (377 rows: 220 CITED, 147 CONFIRMED_ABSENT, 10 GENERIC shared clauses tagged as written). Off-point battery hits named in notes appear in the citation list, as in the earlier files.
- **Legal watch:** `stateConfig.js` NH entry reads the "N.H. Rev. Stat. Ann. §" parts (paragraph numerals dropped) and queries `"RSA 540-A:6"`, the form New Hampshire bills use; 453 sections; lead CFR and § 4852d checks; two manual items (dated versions and the II(i) question; administrative and court rules, with the two stale cross-references). `legal-watch-nh.yml` is held until after March 14, 2028 (first run April 14, 2028, day 14 at 14:00 UTC).
- **Topic questions:** all five added, with full citations.
- **SOP 1.69:** NH 1 and 4 (rule 27), NH 2 (rule 54), NH 3 (rule 59) adopted. NH conformance column added (statutory waivers n).
- **Guards:** check-gap-discovery `--all`, checklist reconciliation, clause basis, section pointers and checkConfigIds all pass; generated files and `lease-clause-topics.md` (349 topics, 689 questions) regenerated.
