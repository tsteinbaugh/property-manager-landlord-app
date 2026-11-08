# Pennsylvania — lease-clause decision log (state #21)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12: The Landlord and Tenant Act of 1951 (1951 P.L. 69, No. 20) read whole from the General Assembly's official unconsolidated-statute text, all 64 sections with every amendment note (newest: Act 88 of 2024); City Rent Withholding Act, Plain Language Consumer Contract Act, Carbon Monoxide Alarm Standards Act, Assistance and Service Animal Integrity Act and 66 Pa.C.S. §§ 1521-1533 read whole; Chapter 500 of the magisterial district court rules read whole; all 262 acts of 2024-2026 screened in full text; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Pennsylvania Association of REALTORS® Form RL 'Residential Lease', rev. 9/17, rel. 1/18 (the current edition; PAR's own page says 'Released on 01/2018', members only), as completed by Susquehanna Realty Management LLC for Charlotte Street Associates and posted by Franklin & Marshall College) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 69 scenarios, Claude-generated, AL §16 model plus Pennsylvania-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: regular-expression search of the Pennsylvania Constitution and all 74 titles of the Pennsylvania Consolidated Statutes (75 official files, 29.28 million characters), an 80-search battery re-run in full on 2026-09-29 plus the targeted searches recorded in each row, control term 0; the General Assembly's unconsolidated-statute keyword search, 60 queries, control term 0; hits read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN, VA, AL) is closed. No re-audit of any completed state is planned. This pass changed no other state's row except by adding a `PA` tag and a `PA:` note.

**Date:** 2026-09-29 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why; only Taylor can switch it on, and none of the three triggers needed it because both whole-code engines were available).
**Scope:** Pennsylvania state law only. Philadelphia, Pittsburgh and other municipal ordinances (rental licensing, lead-safe certification, Philadelphia's Fair Housing Ordinance and good-cause and fair-practices rules, source-of-income ordinances) out of scope, flagged where met, not resolved (instruction 20). Short-term rentals out of scope. Deprioritized and named: manufactured-home communities (Manufactured Home Community Rights Act, 1976 P.L. 1176, No. 261) and agricultural leases.
**Input CSV:** `lease-clauses.csv`, **1,467 rows, 16 columns, CRLF, 1,437 active**; active counts AL 112, AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, VA 137, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids. One PA row existed: the dormant `nsf-fee-limit-pa` (inactive, UNVERIFIED). The outputs folder was empty at the start; nothing to delete (instruction 43).
**Output CSV:** `lease-clauses-PA-sync.csv`, **1,520 rows, 1,491 active. PA 107 active: 64 lease clauses, 43 education; all 107 VERIFIED.** Every other state's active count unchanged. One shared row's text changed on Taylor's decision: `severability`, rewritten in plain language for all 21 tagged states (§3.1, §9).

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **The Landlord and Tenant Act of 1951, whole** (Articles I, II, III, IV, V, V-A, V-B, VI; 64 section numbers incl. repealed §§ 505-510), verbatim from palegis.us with every amendment note (newest: Act 88 of 2024, 2024 P.L. 944). **Also read whole:** City Rent Withholding Act (35 P.S. § 1700-1); Plain Language Consumer Contract Act (73 P.S. §§ 2201-2212); Carbon Monoxide Alarm Standards Act (Act 121 of 2013); Assistance and Service Animal Integrity Act (Act 118 of 2018); Utility Service Tenants Rights Act (66 Pa.C.S. §§ 1521-1533); Determination of Tenancies (1865 P.L. 253, No. 257, Philadelphia); Prohibition of Early Contract Termination Fees Upon Death Act (Act 29 of 2024); Act 88 of 2024, Act 116 of 2016. **Section-open outside the 1951 Act:** 11 Pa.C.S. §§ 13213.1, 13588; 13 Pa.C.S. Ch. 35 index; 18 Pa.C.S. §§ 1110, 3027, 4105, 5902, 7325, 7332, 7508.2; 42 Pa.C.S. §§ 917, 1123, 6904, 8122-8124, 8127, 8304, 8382, 8383, 8389, 62A07; 51 Pa.C.S. §§ 7312, 7315.1; 23 Pa.C.S. § 6108; 53 Pa.C.S. §§ 304, 5607 and Chapter 61 whole (§§ 6101-6145); 68 Pa.C.S. §§ 2307, 3410, 4412, 5410; 75 Pa.C.S. §§ 3353, 3355; 43 P.S. §§ 954-955 (PHRA §§ 4-5, current text incl. Act 54 of 2025); Electronic Transactions Act Chapters 1, 3, 7, 9; Expedited Eviction of Drug Traffickers Act §§ 1-6, 29; Fiscal Code §§ 1301.1, 1301.10, 1301.10a; Housing Authorities Law § 13.3. **Court rules and regulations (instruction 16):** Pa.R.Civ.P.M.D.J. Chapter 500 whole, Rules 1002 and 1008; Pa.R.C.P. 2950 and 2970; 37 Pa. Code Chapter 307 (Attorney General plain-language statement of policy); the order at 56 Pa.B. 2569. **Acts screened:** all 262 acts of 2024 (151), 2025 (60) and 2026 (51) fetched and searched in full text for landlord-tenant terms (§1.1). |
| Step 1 — tag first | **Done.** 53 shared rows tagged PA (§2.1). 10 bases not tagged: PA override or variant instead (§2.2). Every other state-specific lease clause screened (§2.3). **No shared row's text was edited in tagging;** one later edit, `severability`, on Taylor's decision (§3.1, §9). |
| Step 2 — new PA rows | 11 PA lease clauses and 42 education rows, plus the dormant `nsf-fee-limit-pa` rewritten as education and activated (§3, §5). The draft deposit-cap clause became education on Taylor's decision (§6). |
| Instruction 24 families | **Both closed:** `security-deposit-return-pa` (30-day list and refund, forfeiture and double-damages rules, 68 P.S. § 250.512 (Act § 512)); `assistance-animal-accommodation-pa` (override; the Assistance and Service Animal Integrity Act sets documentation content standards the shared row lacks). |
| Instruction 33 | **Checked.** Pennsylvania's only statutory no-cure ground is illegal-drug activity on a 10-day notice to quit (68 P.S. § 250.505-A (Act § 505-A); 68 P.S. § 250.501(d) (Act § 501(d))), which the carve-out in `default-by-tenant` preserves. Otherwise Pennsylvania has no statutory cure period: a landlord may forfeit for breach on a 15- or 30-day notice to quit (68 P.S. § 250.501(b) (Act § 501(b))). The shared `default-by-tenant`'s cure promise is therefore a contractual concession, not a forfeited statutory right. The base `early-termination` was not tagged (its separate 10-day cure would sit beside the default clause). |
| Instruction 44 | **Checked.** The notice to quit has statutory service methods (68 P.S. § 250.501(f) (Act § 501(f))); no Pennsylvania notice statute makes a lease-designated method mandatory. `notices` designates none. |
| Instruction 47 | **No eviction-notice exclusion in Pennsylvania's Electronic Transactions Act** (section 104 exclusions: wills; 13 Pa.C.S. other than Divisions 2 and 2A). **But section 901** bars a paper consumer contract from authorizing electronic conduct unless the consumer agrees in a separate and express acknowledgment (`edu-electronic-transactions-pa`; §4). |
| Instruction 48 | **Hit (lease as the notice).** 68 P.S. § 250.501(e) (Act § 501(e)) lets the lease shorten or waive the notice to quit. `notice-to-quit-waiver-pa` offers it and states that it keeps `default-by-tenant`'s written notice of default, so the two clauses do not undo each other. |
| Instruction 49 | **No URLTA § 1.403-style penalty for knowingly using a prohibited term.** The Plain Language Consumer Contract Act gives actual loss, $100, costs and fees for failing the readability test (73 P.S. § 2207(a)), with a good-faith defense (73 P.S. § 2208(a)(3)). |
| Instruction 57 | **Hit:** Electronic Transactions Act section 901 (separate and express acknowledgment for electronic conduct under a paper consumer contract); §4. |
| Instruction 58 | No collection-cost ban located (1951 Act read whole; §17 search 78, 'costs of collection' 36 hits in 25 sections, all consumer credit, tax, vehicle and court collection; attorney-fee search 52; unconsolidated '"costs of collection" AND tenant' 5 and '"collection costs" AND lease' 17, county and banking codes). |
| Kickoff scope question | **Statewide act with unit-count tiers inside it:** Article V-A (landlord common-area duty, tenant guest and supplier rights) and the CO alarm duty reach only buildings of **three or more households**; the City Rent Withholding Act reaches only cities of the first, second, second class A and third class; the Determination of Tenancies act reaches only Philadelphia. No wording pair was needed (instruction 54): the affected clauses are CONDITIONAL or education. |
| Dormant row | **`nsf-fee-limit-pa` rewritten and activated as education** (§5): its $50-or-bank-fee figure is criminal restitution under 18 Pa.C.S. § 4105(e)(3), not a lease-fee cap; the kickoff's candidate '13 Pa.C.S. § 3506' does not exist. |
| Named-topic checklist | **Done.** PA column in all 10 state-column tables (69 rows, no blank cell); PA answers appended to the 61-row gap-discovery backfill table; 20 new Pennsylvania topics; candidate-topic table 310 refs. Instructions 60-65 added. |
| Layout rules (instruction 28) | **No bold, underline or type-size rule for lease terms.** The Plain Language Consumer Contract Act's test of readability (boldface section captions; readable type, spacing and contrast; a consumer-restrictions statement listing waivers) and one separate-acknowledgment rule (ETA section 901); §4. |
| Proof-of-absence | **Run** on both corpora (§17): 15 topics confirmed absent statute-wide, each with its own row. |
| Kickoff leads | All resolved (§12). Corrections: the abandoned-property section is 68 P.S. § 250.505a (Act § 505.1), not § 250.505-A; § 250.205 is the tenants'-association rule, not a utility-complaint rule; 53 Pa.C.S. § 304 is Act 200 of 2014, not a 2018 law; lead 14's '68 P.S. § 399.1' could not be tied to an official act (§6, question A). |
| Draft reuse | A draft of this pass existed in the working folder from earlier today with no log and no saved source text. It was treated as a lead: every row was re-checked against primary text reopened in this session, and 23 corrections were made (§13). |
| Independent check | A separate agent checked about 150 claims in the new checklist content against the saved texts: about 123 were confirmed, and 28 corrections were made, five of them to CSV rows (§13.1). |
| Open for Taylor | **All decided by Taylor on 2026-09-29** (§6): five decisions and one text question, plus a library-wide rule question (lease clause vs education) handed to Claude Code (§9.2). |

## 1. Process notes

### 1.1 Source and currency
- **Official sources.** 1951 Act and every unconsolidated act: palegis.us 'View Unconsolidated Statute' HTML (the page loads the text from `view-statute?iFrame=true&txtType=HTM&SessYr=...&ActNum=...`). Consolidated Statutes: the 75 official files, the Constitution and 74 titles (`/statutes/consolidated/view-statute?iFrame=true&txtType=HTM&ttl=NN`), each carrying a `revised` meta stamp (from 2022-03-07 for the Constitution to 2026-09-16 for Title 42; Titles 12, 18, 27, 38, 51 and 75 revised 2026-08-31). Court rules and the Attorney General's policy: pacodeandbulletin.gov (official Pennsylvania Code and Bulletin). No host copy was used for any row (instruction 45).
- **Currency.** The 1951 Act's compiled text prints an amendment note for every amended section; the newest is Act 88 of 2024 (2024 P.L. 944, SB 1236, effective 60 days after 2024-07-17: 'tenant' definition, § 501(g) and § 603). **Instruction 50:** the unconsolidated act lists for 2024, 2025 and 2026 gave 262 acts; each act's full text was fetched and searched for landlord, tenant, tenancy, lease, lessee, lessor, rental, evict*, 'security deposit', 'dwelling unit' and apartment. 40 acts hit; each hit was read in context (§17.3). None amends the 1951 Act except Act 88 of 2024. **Instruction 55:** all 61 acts of 2025-2026 that amend a Consolidated Statutes title predate that title file's revision stamp, so the title files are not lagging. **Instruction 34:** 18 Pa.C.S. § 7332 (towing, Act 46 of 2026) is printed now but takes effect 150 days after 2026-07-20 (2026-12-17); 18 Pa.C.S. § 3027 (Act 41 of 2026) took effect 2026-09-18; Pa.R.Civ.P.M.D.J. 514-516 and 1008 print the 2026-11-01 amendments (commentary and fee-waiver wording only; §3.3).
- **Special sessions (instruction 29):** the act-year list shows no special-session acts after 2008; the General Assembly's data page lists one special session in 2023-2024 ('Victims of Sexual Abuse'), which enacted no act, and none in 2025-2026.

### 1.2 How the text was obtained
- The shell cannot reach palegis.us (proxy CONNECT 403). Taylor's built-in browser could. pacodeandbulletin.gov, parealtors.org and fandm.edu were used with site access granted on request.
- **Whole-code corpus (instruction 59).** palegis.us has no section-level API, but the whole of each Consolidated Statutes title, and the Constitution, is one HTML file. All 75 files were loaded into the browser page (29,277,979 characters of text, 0 fetch errors, 13 seconds) and indexed by the file's own section markers (`18c4105s` style), so every regex hit maps to its title and section. Completeness: the list on the official index page has exactly 75 entries (the Constitution and 74 titles) and all 75 loaded. The General Assembly's own unconsolidated keyword search was the second engine (it searches compiled texts, including old acts: 'messuages' returns 40 results, '"Leases for More Than Three Years"' 6).
- The device bridge caps one transfer at about 260 KB, so the 29 MB corpus stayed in the browser; the texts relied on (the 1951 Act, 35 Consolidated Statutes sections, 10 unconsolidated acts, the court rules, the Bulletin order and the real lease) were saved to the working folder.
- **Research mode was not needed:** both engines report true empties (control term 0 in each) and gave full-text proof-of-absence and cross-title search directly. No section needed a paste from Taylor (§5a.2 never triggered).

### 1.3 Section-open vs recall (instruction 22)
Every row was checked in this session against its section text. The **recall subset is the draft itself** (§13): its rows were written in an earlier run whose source text was not saved, so every row was treated as recall-reconstructed and re-verified section-open. Twenty corrections came out of that (§13). **Case law is not relied on anywhere**: Pennsylvania's implied warranty of habitability (*Pugh v. Holmes*, 486 Pa. 272 (1979)), the penalty doctrine for late, holdover and early-termination charges, waiver of a notice to quit by accepting rent, prepaid last-month rent under the deposit cap, residential distraint, confessed-money judgments on leases and self-help eviction are each flagged in the rows as case law, not read (instruction 16).

## 2. Step 1 — tag first

### 2.1 Tagged PA as written (53)
`rent-payment`, `late-fee`, `returned-payments`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access`, `possession-delay`, `default-by-tenant`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `rental-application-accuracy`, and the variants `early-termination-ks`, `holdover-ca`, `tenant-forward-proceedings-ca`, `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `services-utilities-provided-ks-oh`, `surrender-end-of-term-ks-ne`.

Every tagged row carries a `PA:` note naming the controlling section, ending 's5a.1: states-only change, no propagation owed'. The ones that matter:
- **`late-fee` (base) rather than `late-fee-ne`.** Pennsylvania has no statutory acceptance-waiver rule; whether accepting rent after a notice to quit waives it is case law. The base's broader non-waiver sentence stays.
- **`landlords-access`, `inspection-rights`.** No statute sets entry notice (`edu-no-entry-notice-rule-pa`); 24 hours by contract, the same default as Form RL ¶11.
- **`guest-policy`, `guest-policy-day-limit`.** In buildings of three or more households a tenant may have social guests 'for a reasonable period of time', non-waivable and with no fee (68 P.S. § 250.504-A (Act § 504-A)). The 14-day limit operates as the lease's definition of 'reasonable'; whether a court accepts it is case law. The builder should keep the figure editable.
- **`electronic-signatures`.** Works for a lease signed electronically. On a paper lease, its consent to electronic delivery needs the tenant's separate and express acknowledgment (Electronic Transactions Act section 901; §4).
- **`holdover-ca`.** Actual damages and reasonable rental value match 68 P.S. § 250.503(a)(2)-(3) (Act § 503(a)(2)-(3)). Its 'terminable only as provided by law' reads together with `periodic-tenancy-notice-pa`: Pennsylvania sets only the landlord's notice, so the lease supplies the tenant's.
- **`severability`.** Its wording ('shall be held or made invalid ... thereby', 'this Agreement') is what the Plain Language Act's guidelines discourage. On Taylor's decision it was rewritten in plain language for every tagged state (§3.1, §9).

### 2.2 Not tagged — PA override or variant instead (10 bases)

| Base | Instead | Why the base fails in Pennsylvania |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-pa` | Instruction 24. 30 days after termination or surrender and acceptance, whichever first; missing the written list forfeits withholding for damage and the right to sue for it; late refund costs double the excess; the tenant's written new address (68 P.S. § 250.512 (Act § 512)) |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-pa` | Instruction 24. Documentation must be written, reliable, based on direct knowledge and describe the need (Act 118 of 2018, section 3(b)); the shared row has no content standard |
| `pet-policy` | `pet-policy-pa` | 'Enter the property and remove a pet, without liability' is control over a tenant's property on inhabited premises, barred without express permission on pain of treble damages (68 P.S. § 250.505a(f), (i) (Act § 505.1(f), (i))), and a waiver the Plain Language Act would require the lease to list |
| `early-termination` | `early-termination-ks` (tagged) | Its separate 10-day cure for landlord termination would sit beside `default-by-tenant` |
| `holdover` | `holdover-ca` (tagged) | K.3: 'maximum amount permitted by applicable law' has no Pennsylvania measure |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) | 'Treated as abandoned and disposed of at Tenant's cost' would, under 68 P.S. § 250.505a(g) (Act § 505.1(g)) (the lease controls over the statute), displace the statutory notice and storage steps; the variant points to `abandoned-property-pa` |
| `parking`, `storage-space`, `tenants-property-insurance`, `services-utilities-provided` | the `-ks-oh-ca` / `-ks-oh` variants (tagged) | Each base disclaims landlord liability. No Pennsylvania exculpation statute was located, but a liability waiver in a residential lease must be listed in the consumer-restrictions statement (73 P.S. § 2205(d)(1)(ii)); the variants avoid the waiver |

**L.2 exhaustive generic-clause audit (run on the output CSV):** every generic lease clause is tagged PA or superseded by a PA-tagged row (programmatic check: 'generic not covered' is empty).

### 2.3 Other states' specific rows screened, not tagged
All 447 active single-state and variant lease clauses were listed by `topic_key` and screened. Beyond the eight variants tagged, none applies as written. The closest analogues and what PA took instead:
- **Opt-in rows.** `holdover-rate-al`/`-sc`/`-ga` → `holdover-rate-pa` (same text, standing GA decision); `casualty-termination-ga` → `casualty-termination-pa` (Georgia statute sentence removed); `nonpayment-notice-waiver-tn` → model for `notice-to-quit-waiver-pa` (Pennsylvania's waiver covers every notice to quit, not only nonpayment); `extended-absence-notice-*`, `tenant-repair-agreement-*` not copied (URLTA provisions with no Pennsylvania analog).
- **Deposit rows.** `security-deposit-cap-*` → `edu-security-deposit-cap-pa`, education not a lease clause, following `edu-security-deposit-cap-co`/`-ks`/`-ne`/`-nd`/`-sd` (two months in year one, one month after; Taylor, §6); `security-deposit-holding-nc`, `security-deposit-interest-oh` → models for `security-deposit-holding-pa` (escrow notice plus interest after two years, less 1%).
- **Other.** `carbon-monoxide-alarm-duty-ne` → `carbon-monoxide-alarm-duty-pa` (Pennsylvania's allocation: the occupant replaces devices lost during the occupancy); `periodic-tenancy-notice-wy` → `periodic-tenancy-notice-pa`; `pet-policy-al` → `pet-policy-pa`; `abandoned-property-*` → `abandoned-property-pa`; DV rows: Pennsylvania has none (`edu-no-dv-termination-pa`); `exemption-waiver-al` not copied (42 Pa.C.S. § 8122 bars waiver of execution exemptions by contract); `electronic-notice-*` not copied; `landlord-disclosure-*` not copied (no Pennsylvania owner-disclosure statute; `edu-no-landlord-disclosure-rule-pa`).

## 3. Step 2 — new rows

### 3.1 Shared-row edits: one, on Taylor's decision
**`severability` (tagged in all 21 states).** Old text: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New text: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: **uniform**. The mechanics are generic, with the same legal effect in every tagged state; the change was prompted by Pennsylvania's Plain Language Act guidelines but is lawful everywhere, and it aligns the only shared clause that said 'this Agreement' with the 36 that say 'this Lease'. `last_checked` reset to 2026-09-29. Propagation notes: §9. No other shared row's `bodyText`, `rule_type` or `content_type` changed. Each new clause was checked against the library by `topic_key`; none could be merged into a multi-state row without blurring a real divergence. No two PA lease clauses share a `topic_key` (programmatic check).

### 3.2 New PA lease clauses (11)

| Row | Rule | Rests on | Opt-in? |
|---|---|---|---|
| `security-deposit-return-pa` | REQUIRED | 68 P.S. § 250.512 (Act § 512) | — |
| `security-deposit-holding-pa` | REQUIRED | 68 P.S. § 250.511b (Act § 511.2), § 250.511c (Act § 511.3) | — |
| `abandoned-property-pa` | RECOMMENDED | 68 P.S. § 250.505a (Act § 505.1) | — (§6 item 2, decided) |
| `notice-to-quit-waiver-pa` | CONDITIONAL | 68 P.S. § 250.501(e) (Act § 501(e)) | **Yes** (§6 item 1, decided) |
| `consumer-restrictions-statement-pa` | REQUIRED | 73 P.S. § 2205(d)(1) | — |
| `assistance-animal-accommodation-pa` | REQUIRED | Act 118 of 2018, sections 2-4; 43 P.S. § 955(h) | — |
| `pet-policy-pa` | RECOMMENDED | 68 P.S. § 250.505a(f), (i); 68 P.S. § 250.511a | — |
| `carbon-monoxide-alarm-duty-pa` | CONDITIONAL | Act 121 of 2013, sections 4(b), 5 | Conditional on building type and fuel |
| `holdover-rate-pa` | CONDITIONAL | contract; text identical to AL and SC | **Yes** (standing GA/AL decision) |
| `casualty-termination-pa` | CONDITIONAL | contract; no Pennsylvania statute | **Yes** (standing GA decision) |
| `periodic-tenancy-notice-pa` | RECOMMENDED | 68 P.S. § 250.501(b) (landlord side only); contract for the tenant side | — |

### 3.3 New PA education rows (42) and the rewritten dormant row
- **Added on Taylor's decisions (2026-09-29):** `edu-security-deposit-cap-pa` (CONSTRAINED; replaces the draft lease clause `security-deposit-cap-pa`, withdrawn before shipping) and `edu-abandoned-property-lease-terms-pa` (the room 68 P.S. § 250.505a(g) (Act § 505.1) leaves a lease to set its own terms, and its limits).
- **Scope, money and terms:** `edu-landlord-tenant-act-scope-pa`, `edu-security-deposit-rules-pa`, `edu-plain-language-lease-pa`, `edu-confession-of-judgment-pa` (PROHIBITED), `edu-distress-for-rent-pa` (PROHIBITED), `edu-electronic-transactions-pa`, `nsf-fee-limit-pa` (rewritten, §5).
- **Duties and habitability:** `edu-habitability-pa`, `edu-rent-withholding-pa`, `edu-utility-service-tenant-rights-pa`, `edu-multifamily-tenant-rights-pa`, `edu-carbon-monoxide-smoke-alarms-pa`, `edu-lead-hazards-pa`.
- **Ending the tenancy and eviction:** `edu-notice-to-quit-pa`, `edu-eviction-process-pa` (rules read whole; see below), `edu-self-help-eviction-pa` (PROHIBITED), `edu-retaliation-pa` (PROHIBITED), `edu-tenant-death-pa`, `edu-drug-activity-eviction-pa` (now also covers the 2026 promoting-prostitution provision and gambling premises), `edu-condo-conversion-notice-pa`, `edu-sale-of-rented-property-pa`.
- **Rights and compliance:** `edu-fair-housing-pa`, `edu-service-animal-law-pa`, `edu-servicemember-rights-pa`, `edu-police-emergency-calls-pa`, `edu-towing-pa`.
- **15 confirmed absences, each with its own row:** late-fee cap, entry notice, rent-increase notice, application-fee cap, DV termination, eviction-record sealing, radon, mold and bed bugs, flood, drug-lab disclosure, source of income, cash receipts, EV charging, move-in inspection, owner/manager disclosure.

**Eviction rules (`edu-eviction-process-pa`).** The rules of the magisterial district courts control the timing where the 1995 amendments to the 1951 Act differ (Pa.R.Civ.P.M.D.J. 581): hearing 7-15 days after filing (504); landlord must appear, no default judgment (512); order for possession requested after the 10th day and within 120 days (515(B)); removal on or after the 11th day after service (519(B)); payment of rent in arrears and costs before delivery satisfies a rent-only case (518); appeal in 10 days, 30 with a domestic violence affidavit that also stays removal up to 30 days (1002(B), 514.1); supersedeas on the lesser of three months' rent or rent in arrears, then monthly rent into court, or an indigent affidavit (1008(b)-(c)); local mediation programs allowed since 2025-10-01 (504.1). **Instruction 34:** the Code pages print Rules 514, 515, 516 and 1008 as amended by the order at 56 Pa.B. 2569 (filed 2026-05-08, effective 2026-11-01); that order changes fee-waiver wording, the 'Section 8' reference and citation style only, so the timelines are the same before and after 2026-11-01. Philadelphia landlord-tenant cases go to the Philadelphia Municipal Court (42 Pa.C.S. § 1123(a)(3)).

### 3.4 Opt-in landlord rights (instruction 30)
Rights that exist only if the lease invokes them, each offered as a row or recorded:
- **Waiver or shortening of the notice to quit** (68 P.S. § 250.501(e) (Act § 501(e))) → `notice-to-quit-waiver-pa` (CONDITIONAL). Form RL makes the waiver its default (¶24(B), in capitals); the library offers it as an option (§6 item 1, decided).
- **A lease procedure for property left behind that controls over the statute** (68 P.S. § 250.505a(g) (Act § 505.1(g)), except the protection-from-abuse hold in (h)) → `abandoned-property-pa` mirrors the statute; a shorter landlord procedure was **not** written; `edu-abandoned-property-lease-terms-pa` explains the option and its limits (§6 item 2, decided).
- **Stipulated holdover charge; landlord and tenant termination after a casualty** → `holdover-rate-pa`, `casualty-termination-pa` (standing library decisions).
- **Waiver of the $300 distress exemption 'in writing'** (68 P.S. § 250.401 (Act § 401)) → **not offered**: the library does not use distress (`edu-distress-for-rent-pa`).
- **Not available:** a waiver of execution exemptions (42 Pa.C.S. § 8122 bars it); a confessed judgment for possession on a residential lease signed by an individual (Pa.R.C.P. 2970 note); a waiver of the deposit rules (68 P.S. § 250.511a(f), § 250.512(d)), of Article V-A guest and supplier rights (68 P.S. § 250.504-A) or of utility-tenant rights (66 Pa.C.S. § 1530).

## 4. Layout and placement requirements (instruction 28)

**Code-wide typography search** (bold/boldface, capital letters, conspicuous, underline, point type within 200 characters of lease, tenant, lessee, rental agreement or landlord) over the Constitution and 74 titles: 19 hits in 13 sections (re-run 2026-09-29, §17 search 27), all self-storage (12 Pa.C.S. §§ 5605, 5607, 5616), UCC goods leases (13 Pa.C.S. §§ 2A214, 2A303), rent-to-own (42 Pa.C.S. § 6903), utility notices (66 Pa.C.S. §§ 1523, 1525, 1526, 1528) and condominium, cooperative and planned-community offering statements (68 Pa.C.S. §§ 3402, 4403, 5402). **No bold, underline, capitals or type-size rule for a residential lease term.** 'Separate (document|writing|instrument|acknowledgment|agreement)': 17 hits in 15 sections (§17 search 28), none a residential lease rule. The unconsolidated acts read whole add two rules:

| Rule | Requirement | Where it lives |
|---|---|---|
| 73 P.S. § 2205(a)-(c) (Plain Language Consumer Contract Act, residential leases included) | Test of readability: short words, sentences and paragraphs; active verbs; few legal terms; no Latin; one condition per sentence; clear cross references; no double negatives; readable type size, line length and spacing; **section captions in boldface**; sharply contrasting ink. The Attorney General's guide: sentences averaging 25 words or fewer, paragraphs averaging 60 (37 Pa. Code Chapter 307, Appendix B) | `edu-plain-language-lease-pa` (**M.12 builder items:** bold captions; readability check). Several shared clauses exceed the 60-word paragraph guide, e.g. `default-by-tenant`, `early-termination-ks`, `common-area-use` (§6 item 3, decided) |
| 73 P.S. § 2205(d)(1) | A **statement** describing property that may be taken if the consumer defaults, and listing **contract waivers of the consumer's rights in residential leases** | `consumer-restrictions-statement-pa` (REQUIRED). **M.2 builder gap:** the waiver list depends on which clauses the landlord selects (today only `notice-to-quit-waiver-pa`); until the builder fills it, the bracket is completed by hand |
| Electronic Transactions Act section 901 | A paper consumer contract may authorize electronic conduct only by the consumer's **separate and express acknowledgment** stating which parts will be electronic and how; use of e-payment is not agreement | `edu-electronic-transactions-pa`; `electronic-signatures` tagged with a note (**M.12 separate-document gap**, instruction 57) |
| 68 P.S. § 250.511b(a) (Act § 511.2(a)) | Written notice of the bank's name and address and the amount deposited 'thereupon' when funds are escrowed | `security-deposit-holding-pa` (timing; the lease clause is the first notice; a later bank change needs a new notice) |
| 68 P.S. § 250.505a(e) (Act § 505.1(e)) | Abandoned-property notice by first class mail in substantially the statutory form | `abandoned-property-pa` (**builder:** generate the form) |

**Omission sanctions that forfeit money** (second half of instruction 28):
- no written damage list within 30 days: the landlord forfeits all rights to withhold any of the deposit and to sue for damage to the premises (68 P.S. § 250.512(b) (Act § 512(b)));
- late or short refund: double the amount by which the deposit and unpaid interest exceed actual damage (68 P.S. § 250.512(c));
- disposing of or controlling property on inhabited premises, or otherwise violating the abandoned-property section: treble damages, fees and costs (68 P.S. § 250.505a(f), (i));
- failing the Plain Language Act's readability test: actual loss, $100, costs and fees, unless a good-faith and reasonable effort (73 P.S. § 2207(a), § 2208(a)(3));
- landlord ratepayer who does not give the utility the tenants' names: $500 to $1,000 a day liquidated damages (66 Pa.C.S. § 1532(a)); reprisal against a tenant who paid the utility: the greater of two months' rent or actual damages, plus fees (66 Pa.C.S. § 1531(b)).

**Outside the lease** (notice workflows): notice to quit served personally, left at the principal building or posted conspicuously (68 P.S. § 250.501(f)); abandoned-property notice by first class mail to the premises and any forwarding or emergency address (68 P.S. § 250.505a(e)); the military-status affidavit with every complaint (Pa.R.Civ.P.M.D.J. 503(D)).

## 5. Dormant row (instruction 21)

`nsf-fee-limit-pa` (inactive, UNVERIFIED, pre-project) said a returned-payment fee 'will not exceed $50.00, or the actual fee Landlord's bank charges if higher, as required by Pennsylvania law'. **What it turned out to be:** the figure is real but is **criminal restitution** on conviction for a bad check (18 Pa.C.S. § 4105(e)(3), last amended Act 70 of 2007), and it applies only where a written notice of the service charge was conspicuously displayed at the payee's premises when the check was given. It is not a cap on a lease fee, so 'as required by Pennsylvania law' was wrong. The kickoff's candidate '13 Pa.C.S. § 3506' does not exist: Title 13 Chapter 35 ends at § 3505 (official title file, revised 2025-12-01). Civil damages after a conviction and a 10-day written demand: the greater of $100 or three times the check, capped at $500 over its value (42 Pa.C.S. § 8304). Whole-code search for a returned-payment fee cap: 3 sections (18 Pa.C.S. § 4105; 7 Pa.C.S. § 6122, mortgage licensees; 75 Pa.C.S. § 1374, vehicle fees), none a landlord cap. **Resolution:** rewritten as a `LANDLORD_EDUCATION` row, activated, VERIFIED, id kept so the dormant row is resolved in place; `topic_key` changed to `returned-payments`. The lease term is `returned-payments` (tagged PA, 'not to exceed the maximum amount permitted by applicable law').

The KS row `edu-no-expedited-criminal-eviction-ks` named Pennsylvania's 1995 act as a lead: confirmed. The Expedited Eviction of Drug Traffickers Act (Act 23 of the 1995 First Special Session, as amended 1998 P.L. 203, No. 35) is statewide (the 1998 amendment made the court the common pleas court of the county where the premises are) → `edu-drug-activity-eviction-pa`. No Kansas edit.

## 6. Open for Taylor — decided 2026-09-29

All six items were put to Taylor before handoff and answered. The rows reflect each answer.

| # | Question | Taylor's decision | Rows |
|---|---|---|---|
| 1 | Offer the notice-to-quit waiver (68 P.S. § 250.501(e) (Act § 501)) as an optional clause? Form RL makes it the default, in capitals. | **Optional (CONDITIONAL), not a builder default.** | `notice-to-quit-waiver-pa`, `consumer-restrictions-statement-pa` |
| 2 | A written lease controls over the abandoned-property statute (68 P.S. § 250.505a(g) (Act § 505.1)); only the protection-from-abuse hold (subsection (h)) is excepted. Mirror the statute, or also offer a shorter landlord procedure? | **Mirror the statute, and add an education row** explaining that a landlord may write its own terms and what the limits are. The limits: the (h) hold; the 'under no circumstances' occupied-unit ban in (f), whose displacement is unsettled; a written lease only; waiver listing; the deceased-tenant and manufactured-home carve-outs; treble damages. | `abandoned-property-pa` (unchanged), new `edu-abandoned-property-lease-terms-pa` |
| 3 | Plain Language Act: leave the shared `severability`, rewrite it for all states, or write PA-only versions? | **Rewrite it for all states.** Propagation: notes added to the AL and VA logs; the note for the other 18 is in §9 for Claude Code. | `severability` (§3.1) |
| 4 | Offer a money confession-of-judgment clause? Confessed ejectment is abolished for residential leases signed by individuals (Pa.R.C.P. 2970 note); money confessions are barred in consumer credit transactions (Pa.R.C.P. 2950), with the reach to leases unsettled. | **No clause.** Education row only. | `edu-confession-of-judgment-pa` |
| 5 | The draft deposit-cap clause promised to return the excess over one month's rent at the start of year two; the statute sets no refund date. | **Taylor reframed the question: the cap should not be a lease clause at all.** It is a limit on landlord conduct that no statute requires the lease to state. The clause was withdrawn and replaced by an education row, following CO, KS, NE, ND and SD; the year-two excess is stated there as the cautious course, not as law. The same rule for the other states, and builder cap validation, are handed to Claude Code (§9.2, §14). | `edu-security-deposit-cap-pa` (new); `security-deposit-cap-pa` withdrawn |
| A | Kickoff lead 14: '68 P.S. § 399.1' (tenants' right to assemble). | **Closed.** Taylor has no text for it. It is resolved by 68 P.S. § 250.205 (Act § 205), the tenants'-association rule; the citation was probably garbled in the kickoff. | `edu-retaliation-pa` |

## 7. Open items and read list (none blocking)

| Item | What would close it |
|---|---|
| Real lease | Optional: compare Form RL's companion PAR forms (Pet Addendum PET, Change of Lease Terms CLT) if a copy is posted |
| Case law, not relied on | Implied warranty of habitability (*Pugh v. Holmes*); penalty doctrine for late, holdover and early-termination charges; acceptance of rent after a notice to quit; last-month rent under the cap; whether a residential lease is a 'consumer credit transaction' under Rule 2950; residential distraint due process; the reach of 68 P.S. § 250.512(e) (penalties only, or the refund itself); the literal reading of 68 P.S. § 250.511b(c) |
| Federal (instruction 16) | SCRA (50 U.S.C. § 3955); PTFA; VAWA (34 U.S.C. § 12491); FHA (42 U.S.C. §§ 3604(f)(3)(B), (f)(9); 24 CFR § 100.204); lead (42 U.S.C. § 4852d, 24 CFR Part 35, 40 CFR Part 745); CARES Act 30-day notice (15 U.S.C. § 9058(c)); E-SIGN (15 U.S.C. § 7003(b)(2)(B)); OTARD (47 CFR § 1.4000) — cited, not read |
| Agency rules (instruction 16) | PHRC regulations on sex, sexual orientation and gender identity and on assistance animals (16 Pa. Code); Uniform Construction Code regulations (34 Pa. Code); PennDOT towing-posting regulations (67 Pa. Code); PUC termination rules (52 Pa. Code) |
| Instruction 52 | City Rent Withholding Act reaches cities of the first, second, second class A and third class; the list of cities by class was not pulled |
| Purdon's numbers | The official site does not print P.S. numbers. Confirmed by an official source: 73 P.S. §§ 2201-2212 (37 Pa. Code § 307.4). Used by convention and not confirmed officially: 68 P.S. § 250.x mapping for the 1951 Act (the kickoff's own form), 72 P.S. § 1301.10, 43 P.S. §§ 954-955, 35 P.S. § 1700-1, 73 P.S. § 2260.901. The CO alarm act and the service-animal act are cited by act and section only |
| Not read beyond titles or snippets | Mechanics' Lien Law of 1963 (tenant-contracted work); Fire and Panic Act (1927 P.L. 465, No. 299); Lead Certification Act; Radon Certification Act; Real Estate Licensing and Registration Act escrow rules; borough and township water-system codes; Manufactured Home Community Rights Act beyond its table of contents (deprioritized); 75 Pa.C.S. Chapter 73 (abandoned vehicles) |
| Local ordinances | Philadelphia (rental license, lead-safe certification, Fair Housing Ordinance, good cause and fair practices, eviction diversion), Pittsburgh (rental registration, source of income), Allegheny County and others — flagged, not resolved (instruction 20) |

## 8. Integrity and screens
- **CSV:** 1,520 rows; every row 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair, all states); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF, as in the input; round-trip of the input before editing was byte-identical, so unchanged rows are byte-identical. 54 existing rows changed: 53 got `states` (+PA), an appended ' | PA: ...' note and `last_checked` 2026-09-29; `nsf-fee-limit-pa` was rewritten (§5). For every tagged row, all other fields and the pre-existing notes are unchanged (programmatic check).
- **Counts:** PA 0 → 107 active (64 lease clauses, 43 education; all VERIFIED). Every other state's active count unchanged: AL 112, AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, VA 137, WY 106.
- **Instruction 37 (citation inventory):** the 1951 Act's 64 section numbers (from its own table of contents) were diffed against the `bodyText` and PA notes of every active PA row: **no uncited section**. One level down: § 501(a)-(g), § 503(a)-(c), § 505.1(a)-(i), § 511.1(a)-(f), § 511.2(a)-(c), § 512(a)-(f), § 513(a)-(e) and § 514(a)-(b) are each cited by subsection.
- **Instruction 11 (citation screen):** every Pennsylvania cite in PA rows was read section-open in this session, or read by search context and labelled so, or labelled 'not read' (§7).
- **Instruction 16:** court rules (Pa.R.Civ.P.M.D.J., Pa.R.C.P.), 37 Pa. Code Chapter 307, federal statutes and case law are labelled in every row that cites them.
- **Instructions 19/38:** every row id named in this log, in the PA checklist cells and in PA row notes exists in the output CSV (programmatic check).
- **Instruction 14:** every PA addition to a shared row's `notes` is delimited ' | PA: ...'.
- **Kickoff citation format (programmatic scans on the output CSV):** every '§' in PA text is preceded by a prefix (68 P.S., 73 P.S., 42 Pa.C.S., 66 Pa.C.S., Act, Pa. Code, U.S.C., CFR) — 0 bare section numbers. Every 1951-Act P.S. cite carries its Act section the first time it appears in a row's PA text (programmatic check, 0 misses). Sections of acts whose Purdon's numbers are unconfirmed are written 'section N' (CO alarm act, service-animal act, ETA, PHRA, Expedited Eviction Act, Housing Authorities Law). Act references are written 'Act 129 of 2012' or '1951 P.L. 69, No. 20'. The shared-note suffix is written 's5a.1' so the tripwire does not read it as a section. **Cross-state:** no row outside PA carries 'P.S.' or 'Pa.C.S.' (0 hits), and no PA note segment carries another state's citation prefix (0 hits; the two draft notes that named NE and AL sections now name the rows instead).

## 9. Propagation notes

**One shared-text edit: `severability`** (§3.1; Taylor's decision, §6 item 3). Judgment: **uniform**. It is tagged in all 21 states: CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN, VA, AL and PA. The note was added to the AL and VA logs in this session (both were attached). **For Claude Code:** append the note below, as written, to the propagation section of each of the other 18 tagged states' logs: CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC and TN.

> **Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

Every other change to an existing shared row is an added `PA` tag with a `PA:` note, a states-only change under §5a.1.

### 9.1 Flags for Claude Code
- **Legal watch:** Pennsylvania bills amend the 1951 Act by its own section numbers ('Section 511.1 of the act of April 6, 1951 (P.L.69, No.20)'), so every PA row gives both forms. The 2025-2026 bills pending against the 1951 Act (HB 72, HB 343, HB 344, HB 558, HB 573, listed on the Act's official law-information page) are not law (instruction 17) and are worth watching.
- **Court rules:** Pa.R.Civ.P.M.D.J. changes are published in the Pennsylvania Bulletin, not by the legislature; the eviction timelines in `edu-eviction-process-pa` come from those rules (instruction 16).
- No specific defect was found in another state's row.

### 9.2 Hand-off to Claude Code: lease clause or education? (Taylor, 2026-09-29)

**The rule Taylor set in this pass:** a statutory limit that governs the landlord's conduct becomes an **education row**, not a lease clause, unless a statute requires the lease to contain the text (or to be given to the tenant in writing, where the lease is the practical vehicle), or the lease has to make a choice the statute leaves open. The limit applies whether or not the lease mentions it. Where the landlord enters a figure, the builder enforces it (§14).

**Applied to Pennsylvania now:** the draft `security-deposit-cap-pa` became `edu-security-deposit-cap-pa`.

**Other states for Claude Code to clean up (targeted fixes, not re-audits):** the library is split. CO, KS, NE, ND and SD carry their caps as education (`edu-security-deposit-cap-*`). **CA, NV, AZ, NC, GA and AL carry them as lease clauses**, apparently by drift from copying the previous state's structure. Before converting each, check whether its statute requires lease text or whether the clause carries a landlord choice:

| Row | What the clause carries beyond the cap (from its own text and notes) | Point to check before converting |
|---|---|---|
| `security-deposit-cap-ca` | Deposit amount placeholder; 'no portion is non-refundable' (Civ. Code § 1950.5(n), per the row); **supersedes `security-deposit-use`** | Converting it means re-pointing CA's `security-deposit-use` coverage; the row also notes an undrafted service-member written-explanation duty (§ 1950.5(c)(4)), which is a written duty to the tenant |
| `security-deposit-cap-nv` | Surety-bond option with landlord consent | Whether the surety-bond option is a choice the lease must record |
| `security-deposit-cap-az` | Cap plus definitions (prepaid rent, cleaning charges) | Pure limit on its face |
| `security-deposit-cap-nc` | Tiered cap by tenancy type; pet-fee carve-out | Pure limit on its face |
| `security-deposit-cap-ga` | Cap plus definitions (advance rent deposit) | Pure limit on its face |
| `security-deposit-cap-al` | Bracket to state any additional security for pets, alterations or liability risks and its purpose | Whether Ala. Code § 35-9A-201(a) needs the additional security stated in the lease; if so, keep that part as a clause |

**Statutes known to this project that DO need lease text or a written statement** (from the logs, the checklist's candidate topics and Addendum M; Claude Code should run the screen per state rather than rely on this list):
- **PA:**
  - the statement of consumer restrictions, which must be in the contract (73 P.S. § 2205(d));
  - the notice-to-quit waiver, which works only 'if the lease so provides' (68 P.S. § 250.501(e) (Act § 501));
  - lease-set abandoned-property terms, which control only if written in the lease (§ 250.505a(g));
  - written notice of the deposit institution's name and address and the amount (§ 250.511b(a) (Act § 511.2)), for which the lease is one vehicle;
  - the ETA section 901 acknowledgment, which must be *separate* from the lease.
- **ND:** § 47-16-15(4), initialling space next to a tenant notice period over one month (Addendum M.1).
- **MN:** § 504B.113 subd. 3(b), pet-fee disclosure in the lease (Addendum L.14).
- **AL:**
  - § 35-9A-202, owner and manager disclosure in writing at or before commencement;
  - § 35-9A-303(b)(4) and (d), notices that must be *separate* from the lease (instruction 57);
  - § 35-9A-204(d), a separate signed repair agreement.
- **Candidate topics recorded in the checklist:**
  - TN1.2: a nonpayment-notice waiver only in 12-point bold;
  - SC1.1: the lease as the nonpayment notice, in bold;
  - NJ1.3: a bold reciprocity sentence in fee clauses;
  - NJ1.8: a window-guard lease notice;
  - NJ1.9: a clause that must come first;
  - VA1.2: fee disclosure on the lease's first page;
  - NE § 76-1433: a post-breach written agreement (Addendum M.8).

**The same rule reaches other PA rows, not converted here (Taylor's call):** `security-deposit-return-pa` and much of `security-deposit-holding-pa` restate statutory duties that no statute requires in the lease. The holding clause does carry the written institution notice, which the statute requires in writing. `carbon-monoxide-alarm-duty-pa` restates a statutory allocation. Every state has REQUIRED deposit-return clauses by design (instruction 24), so converting those is a library-architecture decision, not a PA one.

### Vouches given
- **2026-10-04:** `returned-payments` (AZ's proposal), vouched for PA; merged at this sync. `default-by-tenant` (MN's proposal): lawful, but a product decision is open (see "Circle-back checks (SOP 1.49)" at the end of this log).

## 10. Findings worth Taylor's attention
1. **The lease can waive the notice to quit.** 68 P.S. § 250.501(e) lets the lease shorten or waive the 10/15/30-day notice; the REALTORS form waives it by default. Offered as an option (§6 item 1, decided).
2. **A written lease controls over the abandoned-property statute.** 68 P.S. § 250.505a(g) makes the lease win on conflict (except the abuse-order hold), so a generic 'disposed of at Tenant's cost' sentence could displace the notice and storage steps. The library mirrors the statute (§6 item 2, decided).
3. **Plain-language law applies to leases.** Bold captions, readable text and a statement listing the tenant's waivers; $100 plus fees per tenant for failing, with a good-faith defense (73 P.S. §§ 2205, 2207, 2208). New REQUIRED clause `consumer-restrictions-statement-pa`; builder gaps recorded.
4. **Deposit: two months in year one, one month after; escrow notice; interest after two years; 30-day list or lose the damage claim.** Missing the list forfeits not just the right to keep the deposit for damage but the right to sue for it (68 P.S. § 250.512(b)). Deposits over two years earn interest for the tenant, less 1%, paid yearly.
5. **Only statutory no-cure ground is drug activity**, on a 10-day notice; otherwise a landlord may forfeit for breach with no cure on a 15- or 30-day notice.
6. **Eviction runs on court rules, not the statute's 1995 timing**, and since 2025 domestic-violence victims can stay removal by affidavit for up to 30 days.
7. **No statute** on late fees, entry notice, rent increases, application fees, DV termination, eviction-record sealing, smoke alarms in rentals, source of income, or owner disclosure. CO alarms are required only in apartments in buildings of three or more households with fuel-burning appliances, a fireplace or an attached garage.
8. **Buildings of three or more households** carry a non-waivable guest and supplier right, a landlord common-area care duty and cable-TV rights (Articles V-A and V-B).
9. **Landlord-held utility accounts** carry a full statutory scheme with tenant payment, rent deduction, retaliation damages and receivership (66 Pa.C.S. §§ 1521-1533); municipal water and sewer can make a non-resident owner pay a tenant's bill after a 30-day notice.
10. **2026 crime:** knowingly letting a unit be used for prostitution, or failing to try to abate it by ejecting the tenant, is promoting prostitution (18 Pa.C.S. § 3027(a)(8), from 2026-09-18).

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-PA-sync.csv` | 1,520 rows, 1,491 active; PA 107 (all VERIFIED); integrity checks pass; other states' counts unchanged; one shared-text edit (`severability`) |
| `lease-clause-decision-log-PA.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | PA column in all 10 state-column tables; PA answers in the backfill table; Pennsylvania sections at the end; instructions 60-65 |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| 1. Notice to quit periods; lease waiver | **Confirmed:** 10 days nonpayment 'upon demand'; 15 days at the end of, or forfeiture of, a lease of one year or less or indeterminate; 30 days for a lease over one year; 10 days for drug grounds (68 P.S. § 250.501(b), (d)); **lease may shorten or waive** (§ 250.501(e)); service by hand, at the principal building or by posting (§ 250.501(f)); not for never-tenants (§ 250.501(g), Act 88 of 2024) → `notice-to-quit-waiver-pa`, `edu-notice-to-quit-pa` |
| 2. Deposits | **Confirmed:** two months in year one, one month after (68 P.S. § 250.511a); escrow and bank notice, interest after the second anniversary less 1% (§ 250.511b); bond alternative (§ 250.511c); 30-day list and refund, forfeiture, double damages, new-address rule (§ 250.512) → instruction 24 closed |
| 3. Property left behind 'at 68 P.S. § 250.505-A (Act 129 of 2012)' | **Corrected citation:** the section is 68 P.S. § 250.505a (Act § 505.1), added by Act 129 of 2012 and rewritten by Act 167 of 2014; § 250.505-A (Act § 505-A) is the illegal-drug breach rule. Notice, 10 days from postmark, storage up to 30 days, lease controls on conflict, treble damages → `abandoned-property-pa` |
| 4. Retaliation 'utility-complaint (§ 250.205)' | **Corrected:** § 250.205 bars terminating or not renewing a lease for tenants'-association participation; the utility retaliation rule is 66 Pa.C.S. § 1531 (the greater of two months' rent or actual damages; six-month presumption). No general retaliation statute → `edu-retaliation-pa` |
| 5. Plain Language Consumer Contract Act | **Confirmed — covers residential leases** (73 P.S. § 2203; commercial leases and contracts over $50,000 excluded, § 2204(b)); readability test and consumer-restrictions statement → `consumer-restrictions-statement-pa`, `edu-plain-language-lease-pa` (instruction 28 hit) |
| 6. Confession of judgment | **Possession: abolished** for a residential lease executed by a natural person (Pa.R.C.P. 2970 note); **money:** barred in consumer credit transactions (Pa.R.C.P. 2950), reach to leases unsettled; the 1951 Act's § 511 preservation is overtaken by the rule → `edu-confession-of-judgment-pa` (no clause; §6 item 4, decided) |
| 7. Rent Withholding Act; habitability | **Confirmed:** 35 P.S. § 1700-1 (cities of the first, second, second class A and third class; escrow; no eviction while escrowed; six-month rule); monthly statement to the landlord (68 P.S. § 250.206); habitability is case law (*Pugh v. Holmes*, not read) → `edu-rent-withholding-pa`, `edu-habitability-pa` |
| 8. Utility Service Tenants Rights Act | **Confirmed**, now 66 Pa.C.S. §§ 1521-1533 → `edu-utility-service-tenant-rights-pa` |
| 9. Life safety | **CO alarms confirmed** (Act 121 of 2013; 3+-household buildings with fuel-burning appliances, fireplace or attached garage) → `carbon-monoxide-alarm-duty-pa`; **smoke alarms in rentals: no statute** (codes and ordinances only); **lead and radon: none beyond federal** → `edu-carbon-monoxide-smoke-alarms-pa`, `edu-lead-hazards-pa`, `edu-no-radon-disclosure-pa` |
| 10. DV and emergency calls ('53 Pa.C.S. § 304, 2018') | **Corrected date:** 53 Pa.C.S. § 304 is Act 200 of 2014 (effective 90 days after 2014-10-31) and binds municipalities, not landlords. **No private-lease DV termination right** (proof-of-absence recorded); protections that exist: 30-day appeal and affidavit stay, abuse-order property hold, wage-attachment bar, public-housing relocation (Housing Authorities Law section 13.3) → `edu-no-dv-termination-pa`, `edu-police-emergency-calls-pa` |
| 11. Assistance animals; PHRA classes | **Confirmed:** Act 118 of 2018 (documentation standards, landlord immunity, misrepresentation offenses); PHRA adds age (40+), guide or support animal use and a known relationship with a disabled person; race includes hair texture and protective hairstyles (Act 54 of 2025) → `assistance-animal-accommodation-pa`, `edu-service-animal-law-pa`, `edu-fair-housing-pa` |
| 12. Eviction; record sealing; servicemembers | **Procedure** from Pa.R.Civ.P.M.D.J. Chapter 500 (§3.3); **no eviction-record sealing or limited-access law** in 2024-2026 (all 262 acts screened); **Pennsylvania servicemember termination right exists** beyond the SCRA (51 Pa.C.S. § 7315.1; 30 days' notice after PCS, TDY over three months, discharge or quarters orders) plus the Guard and reserve eviction stay (51 Pa.C.S. § 7312) → `edu-eviction-process-pa`, `edu-no-eviction-record-sealing-pa`, `edu-servicemember-rights-pa` |
| 13. Late fees | **No statewide cap — confirmed absent** (both engines); penalty doctrine is case law → `edu-no-late-fee-cap-pa` |
| 14. Tenants' right to assemble (68 P.S. § 399.1 ff.) | **Not located as an act.** Keyword searches ('assemble AND tenants', '"right to assemble"', '"tenants\' organization"', '"peaceably assemble" AND tenant') found only 68 P.S. § 250.205 and the Manufactured Home Community Rights Act's resident-association definition. That act (1976 P.L. 1176, No. 261, fetched whole on 2026-09-29 and saved) was searched for assembl/organiz/associat/meet: 7 hits, all the resident-association definition and the community-closure notice and resident purchase-offer provisions (sections 11.2-11.3); no assembly right. Recorded in `edu-retaliation-pa`; text question A (§6) |
| Not in the leads | Lease-controls-over-statute rule for abandoned property; ETA section 901 separate acknowledgment; Article V-A and V-B multi-household rights; wage attachment on residential-lease judgments; execution exemptions not waivable (42 Pa.C.S. § 8122); distress still printed; tenant-death termination (§ 514); municipal water and sewer owner liability; condominium, cooperative and planned-community conversion rights; 2026 promoting-prostitution rule; towing (75 Pa.C.S. § 3353); Philadelphia lost-lease statute (1865) |

## 13. Draft reuse record

A draft of this pass was already in the working folder when this session started (rows script and CSV written 10:07-11:22 on 2026-09-29, plus saved copies of the Human Relations Act, the Electronic Transactions Act and the Expedited Eviction Act). It had **no log, no checklist, and no saved copy of the 1951 Act or the Consolidated Statutes**, and it cited 'Taylor decisions 1, 3 and 4' for which there is no record of an answer. Under the uploaded-files-win rule (instruction 43) and instruction 22, it was treated as recall: the primary texts were reloaded and saved, and every row was checked against them. **What changed (23 corrections):**
1. Source statement rewritten to what this session actually read; 'security deposit' control count 10 → 8.
2. 'Taylor decisions 1, 3, 4' and a 'library decision' on confession clauses → Open for Taylor items 1-4.
3. Real lease: the 12/13 edition of Form RL the draft cited → the current rev. 9/17 rel. 1/18 edition, with paragraph numbers corrected (notice waiver ¶24(B), holdover ¶21).
4. `holdover-rate-pa` note: Form RL does not 'pre-print three times the monthly Rent per day'; the current form pre-prints monthly rent plus a stated percentage, prorated daily.
5. `casualty-termination-pa` note: Form RL ¶19's actual term.
6. `security-deposit-holding-pa` body: 'a Federal Home Loan Bank' (a lender, not a regulator; the statute named the Federal Home Loan Bank Board, abolished 1989) → generic regulator wording.
7. `security-deposit-holding-pa` notes: literal reading of 68 P.S. § 250.511b(c) flagged.
8-10. `edu-eviction-process-pa`: timelines from the rules read whole; supersedeas (the draft said 'pays the judgment or bond') corrected to the lesser of three months' rent or rent in arrears plus monthly rent, or an indigent affidavit; domestic-violence affidavit stay, mediation rule, no default judgment, Philadelphia Municipal Court and the 2026-11-01 amendment check added.
11. `edu-utility-service-tenant-rights-pa`: municipal water and sewer owner liability (a draft 'open item') read and added; 66 Pa.C.S. § 1529.1(b).
12. `edu-plain-language-lease-pa`: $50,000 exclusion's measure and Form RL's compliance method added.
13. `edu-drug-activity-eviction-pa`: 18 Pa.C.S. § 3027 (2026) and § 5513 added; retitled.
14. `edu-distress-for-rent-pa`: 42 Pa.C.S. § 8122 (execution exemptions not waivable) added.
15. `edu-sale-of-rented-property-pa`: 68 Pa.C.S. § 2307 read (former owners, not tenants); Act 93 of 2024; Form RL ¶26.
16. `edu-carbon-monoxide-smoke-alarms-pa`: unverified 'read' claims about the Fire and Panic Act removed.
17. `edu-condo-conversion-notice-pa`: 68 Pa.C.S. §§ 4412 and 5410 read (the draft said not read).
18. `edu-no-late-fee-cap-pa`: Pa.C.S. count 5 → 8 hits in 3 sections (the draft's figure did not reproduce; the note now cites §17 search 5 from the saved re-run). Likewise `edu-no-entry-notice-rule-pa`, `edu-no-application-fee-cap-pa`, `edu-no-cash-receipt-duty-pa` and `edu-no-move-in-inspection-rule-pa` now cite §17 searches 8, 6, 19 and 40.
19. `edu-no-landlord-disclosure-rule-pa`: Pa.C.S. count 0 → 12 hits in 7 sections, all utility tenant lists (§17 search 79).
20. `holdover-ca` and `periodic-tenancy-notice-pa` notes: 'terminable only as provided by law' reconciled.
21. `edu-retaliation-pa`: Form RL ¶29(A) contractual promise noted.
22. Citation format: about 120 bare section numbers given prefixes; two notes that named Nebraska and Alabama sections now name rows.
23. Act-section first mention added in 10 rows.


### 13.1 Independent check (2026-09-29)

Before handoff, a separate agent that had not seen the drafting checked about 150 claims in the new checklist content against the saved primary texts. About 123 were confirmed. It found four wrong claims and 24 imprecise ones, all now fixed in the checklist. Five of them also changed CSV rows:

- **68 P.S. § 250.512(b) (Act § 512):** a missed list forfeits 'all rights to withhold any portion of sums held in escrow', not only for damage. `security-deposit-return-pa` and `edu-security-deposit-rules-pa` now track those words; whether the forfeiture reaches unpaid rent is case law, not read.
- **Act 118 of 2018, section 5:** covers false statements made to obtain documentation. Creating false documents is section 6, a summary offense (`edu-service-animal-law-pa`).
- **66 Pa.C.S. § 1523(b):** gives three routes to a landlord-requested shutoff, not two (`edu-utility-service-tenant-rights-pa`).
- **Expedited Eviction of Drug Traffickers Act, section 5:** the Attorney General sues only at a district attorney's request. The drug-nuisance remedies are 42 Pa.C.S. § 8389(c)(6)-(8) (`edu-drug-activity-eviction-pa`).
- **Pa.R.Civ.P.M.D.J. 581:** suspends Act 33 of 1995's amendment of § 513 where it is inconsistent with the rules, so the supersedeas amount comes from Rule 1008 (`edu-eviction-process-pa`). Act 36 of 1995 (unjust-detention damages) survives through Rule 514A(2) (`holdover-ca` note).

Checklist-only fixes:
- Pa.R.Civ.P.M.D.J. 508 allows an optional tenant cross-complaint.
- Typography is 73 P.S. § 2205(c), not (b).
- The $25 storage cap is 75 Pa.C.S. § 3353(c).
- Distress is levied by the landlord or its agent, with an officer only at appraisement and sale (Act §§ 302, 308-309). The distress exemption can be waived in writing (Act § 401), unlike execution exemptions (42 Pa.C.S. § 8122, now read and saved).
- The protection-from-abuse property hold applies only after an executed order (Act § 505.1(h)).
- CO occupant duties are in section 5(c).
- 'Active State duty' is 51 Pa.C.S. § 7312.
- The rooming-house exemption is 43 P.S. § 955(h)(10).
- The general repeal is Act § 602.
- The order at 56 Pa.B. 2569 also amends Rules 206.1, 1002, 1008 and 1016.
- Rule 504.1 mediation is optional for judicial districts.
- Act 88 of 2024 also retitled Article VI.
- The Act 116 of 2016 lease-date gate is in its section 2.

Sources the agent could not check because they were not saved: 18 Pa.C.S. § 3027, 53 Pa.C.S. § 5607, 11 Pa.C.S. § 13588, 42 Pa.C.S. §§ 8122-8124 and 8384-8391, 26 Pa.C.S. § 713, 13 Pa.C.S. § 2A221, 68 Pa.C.S. §§ 7503 and 7505. All of these have since been saved from the official title files, and § 3027(a)(8) and § 13588(b) were re-read against the rows. Still not on disk: the Fiscal Code sections (1301.10, 1301.10a) and the Pa.R.C.P. 2970 note, which were read on the official sites earlier in the session (instruction 64).

## 14. Product flags (Addendum M)
- **Consumer-restrictions statement assembly (M.2 extension).** The statement's waiver list depends on which clauses are selected; the builder should assemble it and place it near the signature.
- **Readability (M.12 extension).** Boldface captions; a paragraph-length check against the Attorney General's 60-word guide for PA leases.
- **Separate electronic-conduct acknowledgment (M.12, instruction 57).** Needed when a PA lease is signed on paper and any part (delivery, notices, payments) is to be electronic.
- **Property attributes.** 'Three or more households in the building' (Article V-A, CO alarms); 'fuel-burning appliance, fireplace or attached garage' (CO); city class (rent withholding); Philadelphia (Determination of Tenancies; Municipal Court).
- **Deposit cap enforcement (NEW, Taylor 2026-09-29, for every state with a cap).** With caps moving from lease text to education, the builder must enforce them: validate the deposit field (and any pet or other refundable deposit, which count toward the PA cap) against rent at lease creation and at each renewal. PA: at most two months' rent in year one; at most one month's rent in year two and on renewals; no increase after five years' possession (68 P.S. § 250.511a (Act § 511.1)); prompt the landlord at the first anniversary about any excess held. Other states: use each state's cap row as the parameter source, with the cap types found so far being a flat multiple, a tiered-by-tenancy cap (NC), a pet or other add-on (AL, ND) and a surety-bond alternative (NV). Where a state has no cap (e.g. FL, TX, SC, TN, MN statewide), no validation is needed.
- **Deposit automation.** Second-anniversary switch to an interest-bearing account and annual interest payment less 1% (M.3, now three states); 30-day list clock from termination or surrender and acceptance, whichever first; bank-change notice.
- **Notice generation.** Abandoned-property notice in the statutory form by first class mail; notice to quit with the correct period, or none if waived.

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** Pennsylvania Association of REALTORS®, **Form RL 'Residential Lease'**, footer 'COPYRIGHT PENNSYLVANIA ASSOCIATION OF REALTORS® 2017, rev. 9/17; rel. 1/18', 7 pages plus the PAR lead disclosure (Form LPDR). **This is the current edition:** PAR's own Form RL page (parealtors.org/standard-forms/residential-lease/) says 'Released on 01/2018' and 'Membership required for access'. **Where from:** a completed copy (the 2022-23 'College Hill' lease) posted by Franklin & Marshall College at `fandm.edu/_resources/pdfs/SA-Housing-CollegeHill-22-23-sample-lease.pdf`; the landlord is Charlotte Street Associates c/o Susquehanna Realty Management LLC, Lancaster (a licensed broker, RB065881). **Why it qualifies:** the state Realtors association's lease, completed and used by a real property manager (instruction 36; instruction 41: the landlord's added terms were read separately from the form's). An older 2007 PAR lease (Form LR) posted by a Long & Foster office was outlined as a cross-check only. **Method:** read in full in the browser (text extracted with pdf.js); mapped by topic; no text reproduced (copyrighted). The lease is a lead only (instruction 6); every point below rests on primary text read for this pass.

### 15.1 Provision map

| Form RL provision (by topic) | PA library coverage | Result |
|---|---|---|
| Parties; broker relationships; 'should not be used for a manufactured home' | — | Not a lease term (broker disclosure, Real Estate Licensing and Registration Act, not read) |
| ¶1 Each tenant individually responsible | `joint-liability` | Covered |
| ¶2 Co-signers | none | Contract term; no statute located. Not written (guarantor search 0 residential hits, §17) |
| ¶3 Contact information for rent, maintenance, emergencies | `edu-no-landlord-disclosure-rule-pa` | Covered (no owner-disclosure statute; contract practice) |
| ¶4-5 Term; automatic month-to-month renewal unless 30 days' notice | `holdover-ca`, `periodic-tenancy-notice-pa` | Covered. Form RL makes the notice mutual by contract, as the library does |
| ¶6(A) Deposit held in escrow at a named institution | `security-deposit-holding-pa` | Covered (68 P.S. § 250.511b(a)) |
| ¶6(B) Tenant must give a forwarding address, or the landlord need not send the list | `security-deposit-return-pa` | Covered (68 P.S. § 250.512(e)) |
| ¶6(C) List and refund within 30 days 'after Tenant moves' | `security-deposit-return-pa` | **Divergence:** the statute runs from termination or surrender and acceptance, whichever first (68 P.S. § 250.512(a)); the library follows the statute |
| ¶6(D) Deductions for repairs and unpaid rent | `security-deposit-use` | Covered |
| — No interest paragraph | `security-deposit-holding-pa` | **Missing in the form:** interest after two years (68 P.S. § 250.511b(b)-(c)); the library has it |
| ¶7(A)-(D) Rent due in advance; late charge after a grace period (default 5 days) | `rent-payment`, `late-fee` | Covered (no late-fee statute) |
| ¶7(E) Other payments are 'Additional Rent' | `default-by-tenant` | **Divergence:** the library's default clause says a late fee alone does not support termination (library default) |
| ¶7(F) Payments applied to Additional Rent first | `application-of-payments` | **Divergence:** library default is rent first (standing decision since FL); no Pennsylvania statute either way |
| ¶7(G) Returned-payment fee; grace period lost | `returned-payments`, `nsf-fee-limit-pa` | Covered (no civil cap) |
| ¶7(H) Accepted payment methods; changeable after a failed payment | `acceptable-payment-methods` | Covered |
| ¶7(J) Deposit may not be used for rent during the term | `security-deposit-use` | Covered |
| ¶9 Residence only; occupant limit; guide or support animals listed | `residential-use-only`, `permitted-occupants`, `assistance-animal-accommodation-pa` | Covered |
| ¶10 Possession delay: move the start date without rent, or end the lease with a full refund | `possession-delay` | Covered (no statute; the library waits 30 days before termination) |
| ¶11 Entry at reasonable hours; 24 hours' notice when possible; emergency entry with notice after; showing is not an emergency | `landlords-access`, `edu-no-entry-notice-rule-pa` | Covered (no statute; same 24-hour default) |
| ¶12 Rules; landlord may change them only for listed reasons, in writing; municipal fines charged back | `hoa-compliance`, `common-area-use` | Covered in part; no Pennsylvania rules statute |
| ¶13 Pets by written permission; guide and support animals are not pets | `pet-policy-pa`, `assistance-animal-accommodation-pa` | Covered |
| ¶14 Accepts property 'as-is' except as listed | `existing-condition` | Covered (landlord bears the burden of proving damage, 68 P.S. § 250.512(c)) |
| ¶15 Appliances; landlord repairs them | `appliances-included` | Covered |
| ¶16 Utilities allocation table (incl. bed-bug remediation); landlord not liable for outages beyond control; tenant forwards utility termination notices | `utilities-responsibility`, `utilities-paid-by-landlord`, `services-utilities-provided-ks-oh`, `edu-utility-service-tenant-rights-pa` | Covered. The library variant drops the outage disclaimer (a waiver the consumer-restrictions statement would have to list) |
| ¶17 Tenant care; no hazardous materials; no disturbance; no alterations; no self-repairs | `tenant-maintenance`, `no-disturbance`, `no-alterations` | Covered (68 P.S. § 250.503-A for 3+ households) |
| ¶18 Smoke and CO detectors installed; tenant tests and replaces batteries; failure is a breach | `carbon-monoxide-alarm-duty-pa`, `edu-carbon-monoxide-smoke-alarms-pa` | Covered for CO in 3+-household buildings (Act 121 of 2013, section 5); smoke: no rental statute |
| ¶19 Casualty: reduced rent as agreed, or lease ends if occupancy unlawful | `casualty-termination-pa` | Covered (contract; no statute) |
| ¶20(A) Renter's insurance advised or required | `tenants-property-insurance-ks-oh-ca` | Covered |
| ¶20(B) 'Landlord is not legally responsible for any injury or damage' | none | **Not copied:** a broad exculpation, which would have to be listed as a waiver (73 P.S. § 2205(d)(1)(ii)); enforceability is case law |
| ¶21 Holdover: monthly rent plus a stated percentage, prorated daily, plus costs | `holdover-ca`, `holdover-rate-pa` | Covered (contract; no statutory measure) |
| ¶22 No early termination unless agreed | `early-termination-ks` | Covered (the library offers a fee-based option) |
| ¶23 Abandoned property: the five statutory conditions, 10 days from postmark, 30-day storage at tenant cost; deceased tenant excluded | `abandoned-property-pa` | Covered; the form tracks 68 P.S. § 250.505a closely |
| ¶24(A) Remedies: eviction, suit for rent for the rest of the term, wage garnishment and asset seizure, deposit, fees if awarded | `default-by-tenant`, `consumer-restrictions-statement-pa`, `edu-eviction-process-pa` | Covered. ¶24(A)2 is how the form meets 73 P.S. § 2205(d)(1)(i) |
| ¶24(B) **In capitals: tenant waives the notice to move out** unless a local ordinance or the lease sets a period | `notice-to-quit-waiver-pa` | **Confirms the opt-in right** (68 P.S. § 250.501(e)); the library offers it as an option (§6 item 1, decided) |
| ¶25 Landlord may transfer the lease; no sublease without written permission | `no-sublet-assign` | Covered (68 P.S. § 250.105) |
| ¶26 On sale, written notice of deposit and prepaid-rent transfer; landlord's duties end | `edu-sale-of-rented-property-pa` | Contract term; no statute on transferring the deposit located (buyer takes the seller's duties, 68 P.S. § 250.104) |
| ¶27 Condemnation: proportional rent reduction; award belongs to landlord | none | Not copied (eminent domain; case law) |
| ¶28 Death of a sole tenant: 14 days' notice, termination at the later of month-end-plus-two or surrender | `edu-tenant-death-pa` | Covered; the form tracks 68 P.S. § 250.514 |
| ¶29(A) No rent increase, service cut or eviction threat for a code complaint, tenants' organization or use of legal rights | `edu-retaliation-pa` | **Contract promise broader than the statute** (68 P.S. § 250.205 covers only tenants'-association participation) |
| ¶29(B) Mortgage lender's rights come first; capitals: tenant may be waiving rights at foreclosure | `edu-sale-of-rented-property-pa` | Covered (federal PTFA, not read) |
| ¶30 Lead: separate PAR disclosure form and pamphlet for pre-1978 | `lead-based-paint` | Covered |
| ¶31 Attorney General has not preapproved added terms; added terms must comply with the Plain Language Act | `edu-plain-language-lease-pa` | Covered (73 P.S. § 2209 preapproval) |
| ¶33 Entire agreement; waivers and modifications only in writing | `entire-agreement` | Covered |
| Signature block: Consumer Notice acknowledgment (49 Pa. Code § 35.336) when a licensee is involved | none | Broker regulation, not a lease term (not read) |
| Landlord's added term: entry for window replacement over several days | `landlords-access` | Contract term |

### 15.2 What it produced
- **(a) Missing required clause:** none. The form has no interest paragraph for deposits held over two years (the library does).
- **(b) Corrections to PA rows:** none to substance. The form confirmed the statute's abandoned-property and death-of-tenant mechanics and the notice-to-quit waiver.
- **(c) New PA rows:** none new from the form; it confirms the choice to offer `notice-to-quit-waiver-pa` and `casualty-termination-pa`.
- **(d) Divergences recorded as questions:** deposit clock 'after Tenant moves' (¶6(C)); fees-first application (¶7(F)); broad exculpation (¶20(B)); holdover formula (¶21); retaliation promise wider than the statute (¶29(A)); co-signers (¶2).
- **(e) Confirmed absences:** none new from the form.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the AL (§16), SC and AZ (§18.1) scenario maps, re-run against the PA-active library, plus Pennsylvania-specific scenarios (notice-to-quit waiver, plain-language compliance, landlord-held utility accounts, municipal water bills, three-or-more-household guest rights, distress, confession of judgment, wage attachment, rent withholding, 2026 prostitution rule, Philadelphia lost-lease rule). Where no row answered, both corpora were searched (§17) and every landlord-relevant hit read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 69 scenarios (counted by script from the table): 59 covered by rows written in the statute walk; 5 gaps that produced row content (4 from §17's outside-title searches 53, 62, 74 and 77, 1 from the 2024-2026 act screen); 3 not located with no row (holding deposit, contractor liens, someone died in the unit); 1 out of scope (vacation stay); 1 not applicable (tribal trust land: Pennsylvania has no federally recognized tribe with trust land).

| Scenario | PA coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **Not located** ('holding deposit', 'application deposit': 0 in both engines). The cap reaches money deposited 'for the payment of damages ... and/or default in rent' (68 P.S. § 250.511a(a)). No row |
| Application fee; screening questions | `edu-no-application-fee-cap-pa`, `edu-fair-housing-pa` | Covered (inquiry and record ban, 43 P.S. § 955(h)(6)) |
| Voucher holder applies | `edu-no-source-of-income-rule-pa` | Covered (confirmed absent statewide; local ordinances flagged) |
| Applicant lied on the application | `rental-application-accuracy`, `default-by-tenant` | Covered |
| Required disclosures at signing | `lead-based-paint`, `consumer-restrictions-statement-pa`, `security-deposit-holding-pa` | Covered |
| Unit floods; radon; mold | `edu-no-flood-disclosure-pa`, `edu-no-radon-disclosure-pa`, `edu-no-mold-bedbug-disclosure-pa` | Covered (confirmed absent) |
| Someone died in the unit | none | **Not located** (stigmatized-property search 0). Recorded in the checklist; no row |
| Unit not ready on move-in day | `possession-delay` | Covered (no statute) |
| How big a deposit may be; pet deposit | `edu-security-deposit-cap-pa`, `pet-policy-pa` | Covered |
| Last month's rent at signing | `due-at-signing`, `edu-security-deposit-rules-pa` | Covered (cap treatment is case law) |
| Owner lives out of state | `edu-habitability-pa` | **Gap → row content:** no in-state agent rule, but an out-of-State owner charged with a code crime may be extradited (53 Pa.C.S. § 6113, found by §17 search 74) |
| Property in an HOA or condo | `hoa-compliance` | Covered |
| City requires a rental license or inspection | `edu-landlord-tenant-act-scope-pa` | Local layer flagged (instruction 20) |
| Short vacation stay rather than a lease | — | **Out of scope** |
| Lease is paper but rent will be paid online and notices e-mailed | `edu-electronic-transactions-pa`, `electronic-signatures` | Covered (separate acknowledgment, section 901) |
| Lease wording is dense legalese | `edu-plain-language-lease-pa`, `consumer-restrictions-statement-pa` | Covered |
| **Rent and money** | | |
| Rent is late | `late-fee`, `edu-notice-to-quit-pa`, `edu-eviction-process-pa` | Covered |
| Landlord accepts late rent after a notice to quit | `late-fee` | Covered (case law flagged) |
| Check bounces | `returned-payments`, `nsf-fee-limit-pa` | Covered |
| Cash rent and receipts | `edu-no-cash-receipt-duty-pa` | Covered (confirmed absent) |
| Raising rent | `edu-no-rent-increase-notice-pa` | Covered (confirmed absent) |
| Deposit held more than two years | `security-deposit-holding-pa` | Covered (interest less 1%) |
| Landlord's utility account goes unpaid; utility threatens shutoff | `edu-utility-service-tenant-rights-pa` | Covered |
| Tenant's municipal water or sewer bill goes unpaid | `edu-utility-service-tenant-rights-pa` | **Gap → row content** (53 Pa.C.S. § 5607(d)(10)-(11); 11 Pa.C.S. § 13588(b), found by §17) |
| Charging attorney's fees for an eviction | `default-by-tenant` | Covered (no lease fee ban located; prevailing-party clause) |
| Collecting a judgment; tenant claims exemptions | `edu-eviction-process-pa`, `edu-distress-for-rent-pa` | **Gap → row content** (execution exemptions not waivable, 42 Pa.C.S. § 8122, found by §17) |
| Garnishing wages | `edu-eviction-process-pa` | Covered (42 Pa.C.S. § 8127(a)(3.1)) |
| Using 'distress' to seize belongings | `edu-distress-for-rent-pa` | Covered (PROHIBITED in the library) |
| **During the tenancy** | | |
| Heat fails; unit certified unfit | `landlord-maintenance`, `edu-habitability-pa`, `edu-rent-withholding-pa` | Covered |
| Tenant deducts repair costs | `edu-habitability-pa` | Covered (case law; utility deduction by statute) |
| Smoke detector dead | `edu-carbon-monoxide-smoke-alarms-pa` | Covered (no rental statute) |
| CO alarm | `carbon-monoxide-alarm-duty-pa` | Covered |
| Child found with lead poisoning | `edu-lead-hazards-pa` | Covered (no state landlord duty located) |
| Showing the unit to buyers; routine entry | `landlords-access`, `edu-no-entry-notice-rule-pa` | Covered |
| Tenant refuses entry | `landlords-access` | Covered (contract; no statute) |
| Tenant changes the locks | `keys` | Covered (no statute) |
| Guest won't leave; someone who was never a tenant moves in | `guest-policy-day-limit`, `edu-landlord-tenant-act-scope-pa` | Covered (1951 Act does not apply to never-tenants, 68 P.S. § 250.603, Act 88 of 2024) |
| Tenant invites guests and contractors in a 3+-unit building | `edu-multifamily-tenant-rights-pa`, `guest-policy` | Covered |
| Tenant wants cable from another provider | `edu-multifamily-tenant-rights-pa` | Covered (Article V-B) |
| Tenant lists the unit on Airbnb | `no-sublet-assign` | Covered |
| Drug dealing in the unit | `residential-use-only`, `edu-drug-activity-eviction-pa` | Covered |
| Unit used for prostitution | `edu-drug-activity-eviction-pa` | **Gap → row content** (18 Pa.C.S. § 3027(a)(8), 2026, found by §17) |
| Unapproved pet | `pet-policy-pa` | Covered |
| Service animal; emotional support animal | `assistance-animal-accommodation-pa`, `edu-service-animal-law-pa` | Covered |
| Disability modification request | `no-alterations`, `edu-fair-housing-pa` | Covered |
| Tenant hires a contractor (liens) | none | **Not located** (Mechanics' Lien Law of 1963 not read). No row |
| Tenant's car abandoned in the lot | `parking-vehicle-rules`, `edu-towing-pa` | Covered |
| Fire or storm damage | `casualty-termination-pa` | Covered |
| Tenant or neighbor calls police repeatedly | `edu-police-emergency-calls-pa` | Covered |
| Tenant wants an EV charger | `edu-no-ev-charging-right-pa` | Covered |
| Tenant complains to the city, then gets a nonrenewal | `edu-retaliation-pa` | Covered (no general statute; tenant-association and utility rules) |
| Tenant organizes a tenants' association | `edu-retaliation-pa` | Covered (68 P.S. § 250.205) |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination-ks` | Covered |
| DV victim wants out; abuser is a co-tenant | `edu-no-dv-termination-pa` | Covered (no termination right; public housing relocation; protection-order exclusion, 23 Pa.C.S. § 6108(a)(2)) |
| Soldier gets PCS orders | `edu-servicemember-rights-pa` | Covered (51 Pa.C.S. § 7315.1) |
| Month-to-month: how much notice | `periodic-tenancy-notice-pa`, `edu-notice-to-quit-pa` | Covered |
| Landlord wants no notice to quit at all | `notice-to-quit-waiver-pa` | Covered (opt-in) |
| Tenant stays after the lease | `holdover-ca`, `holdover-rate-pa` | Covered |
| Tenant disappears; belongings left | `abandoned-property-pa` | Covered |
| Sole tenant dies | `edu-tenant-death-pa` | Covered |
| Eviction for nonpayment; appeal | `edu-eviction-process-pa` | Covered |
| Eviction record | `edu-no-eviction-record-sealing-pa` | Covered (confirmed absent) |
| Landlord changes the locks or cuts utilities | `edu-self-help-eviction-pa` | Covered |
| Move-out deposit dispute; refund check never cashed | `security-deposit-return-pa`, `edu-security-deposit-rules-pa` | Covered (Fiscal Code sections 1301.10, 1301.10a) |
| Philadelphia landlord has lost the old lease | `edu-landlord-tenant-act-scope-pa` | Covered (1865 P.L. 253, No. 257) |
| **Owner changes** | | |
| Owner sells the property | `edu-sale-of-rented-property-pa` | Covered; Act 93 of 2024 temporary access certificate added (**gap → row content**, found by the 2024-2026 act screen) |
| Lender forecloses; sheriff's sale | `edu-sale-of-rented-property-pa` | Covered (68 P.S. § 250.304; federal PTFA) |
| Owner converts to condominiums | `edu-condo-conversion-notice-pa` | Covered |
| Property on tribal trust land | — | **Not applicable** |

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engines:** (1) the Pennsylvania Constitution and all 74 titles of the Pennsylvania Consolidated Statutes (75 official files, 29,277,979 characters) loaded in the palegis.us page in the built-in browser and searched with JavaScript regular expressions (case-insensitive; each hit mapped to title and section by the file's own section markers). **The 80-search battery below was re-run in full on 2026-09-29 while this log was assembled, and every count in 17.1 is copied by script from that run's saved output** (`battery_pacs_2026-09-29.json`); where a draft figure elsewhere differed (the §4 typography counts), the re-run figure replaced it. **Control:** 'zqxvbnmwt' 0 hits; 'security deposit' 8 hits in 6 sections. (2) The General Assembly's unconsolidated-statute keyword search (compiled acts, including old ones; quoted phrases, AND/OR), re-run the same day (60 queries) (`battery_unc_2026-09-29.json`). **Control:** 'zqxvbnmwt' 0 results; 'messuages' 40; '"security deposit" AND residential' 15. Instruction 39: a probe is a screen, never a verdict. Every landlord-relevant hit was read in context and the key sections section-open. Near-searches use a 200-character window unless the pattern says otherwise. The unconsolidated engine returns act-level results, so its counts are results, not sections.

**What the re-run added.** Search 74 found **53 Pa.C.S. § 6113**: an out-of-State owner of property cited for code violations and charged under the Crimes Code may be extradited. Chapter 61, the Neighborhood Blight Reclamation and Revitalization Act, was then read whole (53 Pa.C.S. §§ 6101-6145, saved to disk). It also provides a municipal suit against the owner personally after six months with no substantial step (§ 6111), an asset lien (§ 6112), a misdemeanor for repeat serious violations (§ 6115) and municipal permit denial (§ 6131). That moved one scenario in §16 from 'not located' to row content in `edu-habitability-pa`. The DV follow-up read **23 Pa.C.S. § 6108(a)(2)-(3), (h)**: a protection order can give the victim possession of a jointly leased home and exclude the abuser. That was added to `edu-no-dv-termination-pa`; the row's 'no lease-termination right' finding stands.

### 17.1 Constitution and Consolidated Statutes battery (hits / sections)

| # | Search (regex, abbreviated) | Hits / sections | Sections hit (first 14) | Result |
|---|---|---|---|---|
| 1 | zqxvbnmwt (control) | 0 / 0 | — | True empty (control) |
| 2 | security deposit | 8 / 6 | 4 Pa.C.S. § 325, 20 Pa.C.S. § 8145, 42 Pa.C.S. § 8127, 51 Pa.C.S. § 7315.1, 62 Pa.C.S. § 3913, 75 Pa.C.S. § 1581 | 42 Pa.C.S. § 8127 and 51 Pa.C.S. § 7315.1 residential; the rest are trusts, gaming, procurement and vehicle deposits |
| 3 | deposit within 200 chars of exceed\|maximum | 50 / 41 | Pa. Const. (file 00, marker 807), 3 Pa.C.S. § 605, 3 Pa.C.S. § 9323, 3 Pa.C.S. § 9325, 4 Pa.C.S. § 325, 4 Pa.C.S. § 331, 4 Pa.C.S. § 332, 4 Pa.C.S. § 13B55, 5 Pa.C.S. § 1131, 8 Pa.C.S. § 1316, 11 Pa.C.S. § 11804.1, 11 Pa.C.S. § 127A09, 13 Pa.C.S. § 3420 | Screen only (broad pattern): financial, agricultural and procurement deposits; no residential deposit cap outside the 1951 Act |
| 4 | interest within 100 of security deposit\|escrow fund | 0 / 0 | — | Deposit interest only in the 1951 Act |
| 5 | late (fee\|charge) near rent\|tenant\|lease | 8 / 3 | 12 Pa.C.S. § 5605, 42 Pa.C.S. § 6904, 42 Pa.C.S. § 6906 | Self-storage and rent-to-own only → `edu-no-late-fee-cap-pa` |
| 6 | (application\|screening) fee near rent\|tenant\|lease\|landlord | 1 / 1 | 3 Pa.C.S. § 7103 | Agriculture licensing only → `edu-no-application-fee-cap-pa` |
| 7 | increase\|raise within 60 of rent | 6 / 6 | 53 Pa.C.S. § 6023, 66 Pa.C.S. § 1526, 66 Pa.C.S. § 1531, 68 Pa.C.S. § 3402, 68 Pa.C.S. § 4403, 68 Pa.C.S. § 5402 | Utility-tenant and common-interest offering statements → `edu-no-rent-increase-notice-pa` |
| 8 | landlord near (enter\|entry\|access … notice\|consent) | 1 / 1 | 66 Pa.C.S. § 1526 | Utility access to tenant names only → `edu-no-entry-notice-rule-pa` |
| 9 | smoke (alarm\|detector)s? | 0 / 0 | — | → `edu-carbon-monoxide-smoke-alarms-pa` |
| 10 | \bradon\b | 2 / 2 | 68 Pa.C.S. § 7503, 68 Pa.C.S. § 7505 | Home inspection → `edu-no-radon-disclosure-pa` |
| 11 | mold\|mildew | 2 / 2 | 3 Pa.C.S. § 4112, 26 Pa.C.S. § 307 | Not rental → `edu-no-mold-bedbug-disclosure-pa` |
| 12 | bed ?bugs? | 0 / 0 | — | → `edu-no-mold-bedbug-disclosure-pa` |
| 13 | flood near lease\|tenant\|lessee\|landlord\|rental agreement\|dwelling | 1 / 1 | 18 Pa.C.S. § 3302 | Crimes Code (not a disclosure) → `edu-no-flood-disclosure-pa` |
| 14 | clandestine\|methamphetamine lab | 12 / 6 | 18 Pa.C.S. § 913, 18 Pa.C.S. § 1110, 18 Pa.C.S. § 7365, 18 Pa.C.S. § 7508.2, 23 Pa.C.S. § 6303 | Criminal and child-protective sections → `edu-no-drug-lab-disclosure-pa` |
| 15 | lead-based paint\|lead poisoning\|lead hazard | 0 / 0 | — | → `edu-lead-hazards-pa` |
| 16 | source of income\|housing choice voucher | 4 / 4 | 4 Pa.C.S. § 13A27, 23 Pa.C.S. § 7602, 23 Pa.C.S. § 8402, 65 Pa.C.S. § 1105 | None housing → `edu-no-source-of-income-rule-pa` |
| 17 | immigration\|citizenship\|alien near lease terms | 9 / 9 | 13 Pa.C.S. § 2A221, 13 Pa.C.S. § 2A303, 13 Pa.C.S. § 2A304, 13 Pa.C.S. § 2A305, 13 Pa.C.S. § 9406, 20 Pa.C.S. § 2104, 68 Pa.C.S. § 2105, 68 Pa.C.S. § 3205 | UCC goods leases and common-interest sections; no rental rule |
| 18 | electric vehicle near lease terms | 2 / 2 | 75 Pa.C.S. § 9002, 75 Pa.C.S. § 9024 | → `edu-no-ev-charging-right-pa` |
| 19 | receipt within 60 of rent | 5 / 5 | 13 Pa.C.S. § 2A522, 16 Pa.C.S. § 16508, 20 Pa.C.S. § 8145, 20 Pa.C.S. § 8151, 66 Pa.C.S. § 1531 | Goods leases, trusts, parks; 66 Pa.C.S. § 1531 utility retaliation → `edu-no-cash-receipt-duty-pa` |
| 20 | holdover\|holding over\|double rent\|at sufferance | 1 / 1 | 68 Pa.C.S. § 4315 | Cooperatives only |
| 21 | death near tenant … lease | 0 / 0 | — | — |
| 22 | renters'? insurance | 0 / 0 | — | — |
| 23 | firearm near lease terms | 7 / 6 | 18 Pa.C.S. § 6105, 18 Pa.C.S. § 6115, 23 Pa.C.S. § 5703, 34 Pa.C.S. § 2507, 42 Pa.C.S. § 8384 | Weapons offenses; 42 Pa.C.S. § 8384 (drug-nuisance evidence) → `edu-drug-activity-eviction-pa` |
| 24 | flags? near tenant\|lease | 0 / 0 | — | No tenant flag-display statute |
| 25 | lock ?out\|rekey\|deadbolt\|change the locks | 2 / 2 | 35 Pa.C.S. § 5601, 75 Pa.C.S. § 4572.1 | Not landlord |
| 26 | police\|emergency assistance/call near tenant\|landlord\|evict | 7 / 4 | 18 Pa.C.S. § 5713.1, 53 Pa.C.S. § 304, 75 Pa.C.S. § 102, 75 Pa.C.S. § 4571 | **53 Pa.C.S. § 304** → `edu-police-emergency-calls-pa` |
| 27 | bold(face)\|capital letters\|conspicuous\|underlin\|point type near lease terms | 19 / 13 | 12 Pa.C.S. §§ 5605, 5607, 5616; 13 Pa.C.S. §§ 2A214, 2A303; 42 Pa.C.S. § 6903; 66 Pa.C.S. §§ 1523, 1525, 1526, 1528; 68 Pa.C.S. §§ 3402, 4403, 5402 | §4: no residential typography rule |
| 28 | separate (document\|writing\|instrument\|acknowledgment\|agreement) | 17 / 15 | consumer credit, UCC, pet insurance, TNC drivers, cooperatives | §4: none residential |
| 29 | returned\|dishonored\|bad check near fee | 14 / 11 | 3 Pa.C.S. § 5703, 4 Pa.C.S. § 1209, 5 Pa.C.S. § 1132, 7 Pa.C.S. § 6122, 30 Pa.C.S. § 502, 34 Pa.C.S. § 502, 34 Pa.C.S. § 2905, 44 Pa.C.S. § 7159, 75 Pa.C.S. § 1902, 75 Pa.C.S. § 1957, 75 Pa.C.S. § 9022 | Agency fee statutes and 7 Pa.C.S. § 6122; no civil landlord cap → `nsf-fee-limit-pa` (18 Pa.C.S. § 4105 found by its own search) |
| 30 | (service\|assistance\|support) animal near housing terms | 0 / 0 | — | Housing rules are in unconsolidated acts (PHRA; Act 118 of 2018) |
| 31 | discriminat* near dwelling\|housing accommodation | 0 / 0 | — | PHRA is unconsolidated |
| 32 | servicemember\|active duty\|military service near lease | 6 / 4 | 51 Pa.C.S. § 7205, 51 Pa.C.S. § 7315, 51 Pa.C.S. § 7315.1 | **51 Pa.C.S. § 7315.1** (and § 7205, state employees) → `edu-servicemember-rights-pa` |
| 33 | unclaimed near deposit\|rent | 1 / 1 | 53 Pa.C.S. § 8224 | Sinking funds; Fiscal Code is unconsolidated |
| 34 | stigmatized\|psychologically impacted | 0 / 0 | — | No disclosure statute |
| 35 | sex(ual) offender near landlord\|lease\|rent\|tenant | 9 / 7 | 23 Pa.C.S. § 6707, 42 Pa.C.S. § 9718.5, 42 Pa.C.S. § 9799.11, 42 Pa.C.S. § 9799.24, 42 Pa.C.S. § 9799.34, 42 Pa.C.S. § 9799.58, 61 Pa.C.S. § 6137 | Registration sections; no landlord duty |
| 36 | conversion within 60 of building\|notice | 195 / 33 | 4 Pa.C.S. § 13A26, 8 Pa.C.S. § 32A05, 11 Pa.C.S. § 141A05, 20 Pa.C.S. § 8105, 40 Pa.C.S. § 3502, 40 Pa.C.S. § 3512, 42 Pa.C.S. § 8335, 68 Pa.C.S. § 3103, 68 Pa.C.S. § 3312, 68 Pa.C.S. § 3322, 68 Pa.C.S. § 3401, 68 Pa.C.S. § 3404, 68 Pa.C.S. § 3410 | Screen (broad): includes **68 Pa.C.S. §§ 3410, 4412, 5410** → `edu-condo-conversion-notice-pa` |
| 37 | foreclos* near tenant | 1 / 1 | 68 Pa.C.S. § 4315 | Cooperatives only |
| 38 | sub-?meter\|master meter | 0 / 0 | — | No submetering statute |
| 39 | seal\|expunge\|limited access near evict | 0 / 0 | — | → `edu-no-eviction-record-sealing-pa` |
| 40 | move-in\|inventory\|checklist near tenant\|lease | 7 / 7 | 12 Pa.C.S. § 3202, 13 Pa.C.S. § 9102, 13 Pa.C.S. § 9311, 20 Pa.C.S. § 3184, 35 Pa.C.S. § 52B04, 75 Pa.C.S. § 1131 | None residential → `edu-no-move-in-inspection-rule-pa` |
| 41 | rent control\|controlling the amount of rent | 0 / 0 | — | No statewide rent control or preemption statute |
| 42 | ordinance\|resolution near landlord\|rental unit/property/housing | 4 / 1 | 53 Pa.C.S. § 304 | 53 Pa.C.S. § 304 only |
| 43 | abandon* within 60 of tenant\|lessee | 1 / 1 | 30 Pa.C.S. § 2501 | Trespass; not residential |
| 44 | confession of judgment\|judgment by confession | 9 / 6 | 12 Pa.C.S. § 6305, 13 Pa.C.S. § 3104, 20 Pa.C.S. § 5601, 42 Pa.C.S. § 1725, 42 Pa.C.S. § 2737.1, 42 Pa.C.S. § 6904 | Rent-to-own ban (42 Pa.C.S. § 6904) and fee sections; court rules govern leases |
| 45 | unconscionab | 67 / 24 | 13 Pa.C.S. § 2210, 13 Pa.C.S. § 2302, 13 Pa.C.S. § 2309, 13 Pa.C.S. § 2719, 13 Pa.C.S. § 2725, 13 Pa.C.S. § 2A108, 13 Pa.C.S. § 2A503, 20 Pa.C.S. § 7780.12, 23 Pa.C.S. § 4348, 42 Pa.C.S. § 7321.7, 42 Pa.C.S. § 7341, 42 Pa.C.S. § 7362 | UCC and common-interest acts; no residential-lease unconscionability statute |
| 46 | medical marijuana\|cannabis near landlord\|lease\|tenant | 0 / 0 | — | No housing protection |
| 47 | drug-related nuisance | 25 / 8 | 42 Pa.C.S. § 8382, 42 Pa.C.S. § 8383, 42 Pa.C.S. § 8384, 42 Pa.C.S. § 8386, 42 Pa.C.S. § 8387, 42 Pa.C.S. § 8389, 42 Pa.C.S. § 8390, 42 Pa.C.S. § 8391 | **42 Pa.C.S. §§ 8381-8391** → `edu-drug-activity-eviction-pa` |
| 48 | squatter\|unauthorized occupant\|unlawful occupant | 0 / 0 | — | No squatter statute; never-tenants outside the 1951 Act (68 P.S. § 250.603) |
| 49 | (domestic\|sexual) violence near lease\|tenant | 0 / 0 | — | → `edu-no-dv-termination-pa` (Title 23 read separately: **23 Pa.C.S. § 6108(a)(2)**, protection-order exclusion) |
| 50 | shutoff\|termination of service near tenant\|landlord | 24 / 11 | 11 Pa.C.S. § 13588, 53 Pa.C.S. § 5607, 66 Pa.C.S. § 1522, 66 Pa.C.S. § 1523, 66 Pa.C.S. § 1524, 66 Pa.C.S. § 1525, 66 Pa.C.S. § 1526, 66 Pa.C.S. § 1527, 66 Pa.C.S. § 1531, 66 Pa.C.S. § 1532, 66 Pa.C.S. § 1533 | **66 Pa.C.S. §§ 1522-1533; 11 Pa.C.S. § 13588; 53 Pa.C.S. § 5607** → `edu-utility-service-tenant-rights-pa` |
| 51 | lien near household goods\|tenant's property | 2 / 1 | 13 Pa.C.S. § 7209 | Warehouse lien |
| 52 | attorney's fees near lease\|tenant\|landlord | 1 / 1 | 66 Pa.C.S. § 1531 | 66 Pa.C.S. § 1531 only; no lease fee statute |
| 53 | waive* within 60 of homestead\|exemption | 3 / 3 | 42 Pa.C.S. § 8104, 42 Pa.C.S. § 8122 | **42 Pa.C.S. § 8122** (execution exemptions not waivable) → `edu-distress-for-rent-pa` |
| 54 | retaliat* near tenant\|landlord | 7 / 7 | 66 Pa.C.S. § 1512, 66 Pa.C.S. § 1522, 66 Pa.C.S. § 1523, 66 Pa.C.S. § 1525, 66 Pa.C.S. § 1530, 66 Pa.C.S. § 1531 | Utility-tenant sections → `edu-retaliation-pa` |
| 55 | self-help | 2 / 2 | 13 Pa.C.S. § 2A501, 23 Pa.C.S. § 6365 | Not landlord → `edu-self-help-eviction-pa` |
| 56 | guarant(or\|y) near lease\|rent\|tenant | 31 / 16 | 53 Pa.C.S. § 8004, 53 Pa.C.S. § 8029, 53 Pa.C.S. § 8049, 53 Pa.C.S. § 8102, 53 Pa.C.S. § 8103, 53 Pa.C.S. § 8111, 53 Pa.C.S. § 8130, 53 Pa.C.S. § 8169, 53 Pa.C.S. § 8201, 53 Pa.C.S. § 8208, 53 Pa.C.S. § 8209, 53 Pa.C.S. § 8211, 53 Pa.C.S. § 8261 | Municipal finance only |
| 57 | algorithm near rent | 0 / 0 | — | — |
| 58 | crime-free | 0 / 0 | — | — |
| 59 | window guard | 0 / 0 | — | — |
| 60 | N degrees near heat | 1 / 1 | 3 Pa.C.S. § 2376 | Not housing |
| 61 | vacant property\|building near regist* | 0 / 0 | — | — |
| 62 | eject(ing) the tenant | 2 / 1 | 18 Pa.C.S. § 3027 | **18 Pa.C.S. § 3027 (Act 41 of 2026)** → `edu-drug-activity-eviction-pa` |
| 63 | rental\|landlord registration\|licens* near dwelling\|unit\|property | 0 / 0 | — | Local only |
| 64 | cash within 40 of rent | 0 / 0 | — | — |
| 65 | convenience fee\|processing fee\|surcharge near rent | 0 / 0 | — | No payment-method fee ban |
| 66 | early termination near lease\|tenant | 2 / 2 | 51 Pa.C.S. § 7205 | 51 Pa.C.S. § 7205 (state employees); § 7315.1 found by search 32 |
| 67 | casualty\|destroyed by fire near lease\|tenant | 3 / 2 | 13 Pa.C.S. § 2A221 | Goods leases → `casualty-termination-pa` is contract |
| 68 | deliver(y of) possession near tenant | 0 / 0 | — | → `possession-delay` is contract |
| 69 | quiet enjoyment | 3 / 2 | 13 Pa.C.S. § 9610, 68 Pa.C.S. § 5302 | Secured transactions, planned communities |
| 70 | dormancy (charge\|fee) | 0 / 0 | — | — |
| 71 | electronic near eviction\|notice of default\|rental agreement | 3 / 3 | 12 Pa.C.S. § 5602, 12 Pa.C.S. § 5618, 12 Pa.C.S. § 9801 | Self-storage only |
| 72 | (agreed upon\|provided) in the lease | 7 / 4 | 13 Pa.C.S. § 2A501, 13 Pa.C.S. § 2A508, 13 Pa.C.S. § 2A513, 13 Pa.C.S. § 2A523 | UCC goods leases only |
| 73 | (holding\|application\|reservation) deposit | 0 / 0 | — | Not located (holding deposit) |
| 74 | (nonresident\|out-of-state) (landlord\|owner\|lessor) | 5 / 5 | 53 Pa.C.S. § 6103, 53 Pa.C.S. § 6113, 75 Pa.C.S. § 1303, 75 Pa.C.S. § 1782 | **53 Pa.C.S. § 6113** (extradition of out-of-State owners charged with code crimes; Chapter 61 read whole) → `edu-habitability-pa`; vehicle sections; no in-state agent rule |
| 75 | mechanics.? lien | 3 / 2 | 42 Pa.C.S. § 1725 | Fees and title index only (Mechanics' Lien Law is unconsolidated, not read) |
| 76 | **landlord sweep** \blandlords?\b | 174 / 38 | see result | Every landlord-relevant section read (42 Pa.C.S. §§ 917, 1123, 8127, 8389; 51 Pa.C.S. §§ 7312, 7315.1; 53 Pa.C.S. § 304; 66 Pa.C.S. §§ 1521-1533; 68 Pa.C.S. §§ 3410, 4412, 5410; fee schedules) |
| 77 | **tenant sweep** \btenants?\b\|\btenancy\b | 534 / 137 | see result | Sections outside the known set triaged; new: **11 Pa.C.S. §§ 13213.1, 13588; 53 Pa.C.S. § 5607(d)(10)-(11)** (water and sewer), **18 Pa.C.S. § 5513** (gambling premises); the rest eminent domain, taxation, agriculture, joint tenancy and notice-service provisions with no landlord duty |
| 78 | costs? of collection\|collection (costs?\|fees?) | 36 / 25 | 12 Pa.C.S. §§ 6302, 6322, 6344, 6352, 6353; 13 Pa.C.S. § 4204; 16 Pa.C.S. §§ 17121, 17157; 17 Pa.C.S. § 509; 34 Pa.C.S. § 502; 42 Pa.C.S. §§ 9730, 9730.1; 53 Pa.C.S. §§ 8263, 8722; 75 Pa.C.S. §§ 1380, 1755, 1957 | Consumer credit, tax, vehicle, court collection; no landlord collection-cost rule (instruction 58) |
| 79 | \bnames?\b … address near \btenants?\b (150) | 12 / 7 | 66 Pa.C.S. §§ 1523, 1524, 1525, 1526, 1527, 1528, 1532 | Utility tenant lists only → `edu-no-landlord-disclosure-rule-pa` |
| 80 | (returned\|dishonou?red\|bad\|worthless) (check\|instrument\|payment)s? near \bfees?\b\|\bcharges?\b (150) | 4 / 3 | 7 Pa.C.S. § 6122; 18 Pa.C.S. § 4105; 75 Pa.C.S. § 1374 | The `nsf-fee-limit-pa` note's own pattern, reproduced; no landlord cap |

### 17.2 Unconsolidated keyword battery (results)

| Query | Results | Finding |
|---|---|---|
| zqxvbnmwt | 0 | True empty (control) |
| "late fee" AND rent | 10 | Self-storage, judicial fees, agriculture |
| "late charge" AND tenant | 0 | — |
| "application fee" AND tenant | 3 | Liquor Code |
| "rent increase" | 0 | — |
| "rent control" | 0 | — |
| landlord AND entry AND notice AND tenant | 15 | 1951 Act and amendments (notice to quit); fee acts; no entry rule |
| "smoke detector" OR "smoke alarm" | 35 | Fire and Panic Act (Class VI), CO acts, Construction Code; no rental smoke duty |
| radon AND (lease OR tenant OR rental) | 3 | 68 Pa.C.S. amendment (home inspection) |
| mold AND tenant | 7 | Eminent domain, Fiscal Code |
| "bed bugs" OR bedbugs | 0 | — |
| flood AND tenant AND disclos | 15 | Municipal codes and consolidations |
| clandestine AND laboratory AND (rental OR tenant) | 0 | — |
| "lead-based paint" AND tenant | 0 | — |
| "source of income" | 59 | Tax, lottery, support; no housing protection |
| "housing choice voucher" | 14 | Housing Authorities Law, Fiscal Code; no private-landlord rule |
| "electric vehicle" AND tenant | 0 | — |
| receipt AND rent AND tenant | 106 | Utility-tenant, county, trust, common-interest acts; no rent-receipt duty |
| holdover AND tenant | 3 | Real Estate Cooperative Act |
| "domestic violence" AND lease | 26 | 1951 Act § 513; Housing Authorities Law (section 13.3); no private-lease right |
| "domestic violence" AND tenant AND terminate | 3 | 23 Pa.C.S. codification act → § 6108 read |
| eviction AND "limited access" | 0 | — |
| "eviction record" | 0 | — |
| "self-help" AND tenant | 5 | Capital budget items |
| lockout AND tenant | 3 | Unemployment Compensation Law |
| "security deposit" AND interest | 9 | 1951 Act, 42 Pa.C.S. § 8127, Title 20 |
| "security deposit" AND residential | 15 | 1951 Act, 42 Pa.C.S. § 8127, Mobile Home Park Rights Act |
| "medical marijuana" AND landlord | 0 | — |
| "dishonored check" | 18 | Banking, consumer credit, vehicle acts |
| "returned check" AND fee | 0 | — |
| "convenience fee" AND rent | 0 | — |
| "move-in" AND tenant | 15 | Manufactured-home, drug-eviction, eminent-domain acts |
| "name and address" AND owner AND tenant AND disclose | 24 | Common-interest, tax, local-government acts |
| "quiet enjoyment" | 11 | UCC, planned communities, deeds |
| "renters insurance" OR "tenants insurance" | 0 | — |
| retaliat* AND tenant | 18 | Utility-tenant acts; Mobile Home Park Rights Act |
| "assistance animal" | 12 | Act 118 of 2018 |
| "emotional support" | 10 | Act 118 of 2018; unrelated acts |
| "stigmatized" | 0 | — |
| squatter OR "unauthorized occupant" | 0 | — |
| "rental license" OR "rental registration" | 3 | 53 Pa.C.S. § 304 (Act 200 of 2014) |
| "crime-free" | 3 | Crimes Code rehabilitation provisions |
| "nuisance" AND landlord AND ordinance | 0 | — |
| "confession of judgment" AND lease | 6 | Environmental liability, fee acts |
| "waiver of exemption" | 0 | — (42 Pa.C.S. § 8122 found by regex) |
| "early termination" AND lease AND tenant | 6 | 51 Pa.C.S. § 7315.1 (Act 65 of 2004) |
| assemble AND tenants | 13 | Municipal codes, Fire and Panic Act |
| "right to assemble" | 2 | 42 Pa.C.S. anti-SLAPP act |
| "tenants' organization" | 9 | 1951 Act (68 P.S. § 250.205) |
| "tenant organization" | 12 | Expedited Eviction of Drug Traffickers Act |
| "peaceably assemble" AND tenant | 0 | — |
| "holding deposit" | 0 | Not located |
| "application deposit" | 0 | Not located |
| nonresident AND landlord AND agent | 0 | Not located (53 Pa.C.S. § 6113 found by regex) |
| "mechanics lien" AND tenant | 27 | Mechanics' Lien Law of 1963 (not read) |
| "sex offender" AND landlord | 0 | — |
| messuages | 40 | Control: old acts are indexed |
| "out-of-State owner" | 0 | — (engine does not reach 53 Pa.C.S. § 6113 wording) |
| "costs of collection" AND tenant | 5 | County Code |
| "collection costs" AND lease | 17 | County, banking and vehicle-sales-finance codes |

### 17.3 2024-2026 act screen (instruction 50)
All 262 acts (2024: 151; 2025: 60; 2026: 51) fetched from palegis.us and searched in full text. 40 hit a landlord-tenant term; each hit was read in context. **Relevant:** Act 88 of 2024 (1951 Act: tenant definition, § 501(g), § 603); Act 29 of 2024 (early-termination fees on death: cable, telecom, energy and vehicle leases only, not residential leases); Act 93 of 2024 (Municipal Code and Ordinance Compliance Act: temporary access certificates; tenants may stay); Act 54 of 2025 (PHRA: hair texture and protective hairstyles); Act 51 of 2025 (self-storage moved into 12 Pa.C.S. Chapter 56; not residential); Act 41 of 2026 (18 Pa.C.S. § 3027, promoting prostitution incl. failure to eject the tenant, effective 2026-09-18); Act 46 of 2026 (18 Pa.C.S. § 7332, towing at accident scenes and towing storage, effective 2026-12-17); Act 21 of 2026 (Fiscal Code: PHFA tracking database for publicly financed rental housing of five or more units, a state-agency duty, no landlord lease duty); Act 31 of 2026 (human-trafficking hotline notices incl. third-party listing platforms: short-term rental scope, out of scope). **Not relevant:** the county and first-class township code consolidations (Act 14 of 2024, Act 7 of 2026: municipal leasing and notice-service provisions), Fiscal Code and School Code omnibus acts, vehicle, liquor, licensure-compact and UCC acts.

### 17.4 Searches run for the backfill table (2026-09-29)

Run on the same corpus for checklist backfill rows the battery did not cover (the checklist's PA answers cite them as 'search bN'). Search b15 ('attorn') was dropped as a screen: the substring matched 'attorney' (2,937 hits).

| # | Search | Hits / sections | Sections hit | Result |
|---|---|---|---|---|
| b1 | septic / private water well / on-lot sewage near lease terms | 0 / 0 | — | Well and septic: not located |
| b2 | sales (and use) tax near residential rent/lease/dwelling | 0 / 0 | — | Not located in Pa.C.S.; Tax Reform Code of 1971 (unconsolidated) not read |
| b3 | defiant trespass | 1 / 1 | 18 Pa.C.S. § 3503 | Read whole: § 3503(b)(2) third-degree misdemeanor on defiance of a personally communicated order to leave |
| b4 | winter / December 1 / April 1 near termination of service | 1 / 1 | 24 Pa.C.S. § 8313 | Not utility. Title 66 read: **Chapter 14 (§§ 1401-1419) expired 2024-12-31**; PUC regulations not read |
| b5 | foreign adversary/government/principal near real property/land/acquire | 0 / 0 | — | Not located |
| b6 | swimming pool near barrier/fence/enclosure | 0 / 0 | — | Not located |
| b7 | sprinkler near dwelling/residential/apartment/rental | 0 / 0 | — | Not located |
| b8 | seller disclosure / property disclosure statement | 18 / 10 | 68 Pa.C.S. §§ 7103, 7301, 7303-7305, 7308, 7503, 6114, 8202 | Real Estate Seller Disclosure Law: 68 Pa.C.S. §§ 7302-7303 read |
| b9 | condemn / vacate order / unfit for habitation near rent | 2 / 2 | 26 Pa.C.S. §§ 713, 1105 | Eminent domain only; rent withholding is in 35 P.S. § 1700-1 |
| b10 | electronic payment / online payment / payment platform near rent | 0 / 0 | — | Not located |
| b11 | relet / re-let / mitigat* near lease terms | 4 / 4 | 35 Pa.C.S. § 7334; 42 Pa.C.S. §§ 2154, 2154.3; 53 Pa.C.S. § 304 | No mitigation statute |
| b12 | tow near kickback/rebate/payment to owner | 0 / 0 | — | Not located |
| b13 | license to carry / firearm near lease terms | 6 / 5 | 18 Pa.C.S. § 6105; 23 Pa.C.S. § 5703; 34 Pa.C.S. § 2507; 42 Pa.C.S. § 8384 | No lease firearm rule |
| b14 | minor / under 18 near eviction terms | 0 / 0 | — | Not located |
| b16 | self-service storage / self-storage near residen* | 3 / 3 | 12 Pa.C.S. §§ 5507, 5603 | 12 Pa.C.S. § 5603: no residential use of storage |
| b17 | apply/application of payment near rent/tenant | 0 / 0 | — | No order-of-payment statute |
| b18 | absence near tenant/lease | 4 / 4 | Pa. Const. (file 00, marker 209); 17 Pa.C.S. § 508; 75 Pa.C.S. § 6129 | No absence-notice rule |
| b19 | rules and regulations near tenant/lease | 10 / 10 | 30 Pa.C.S. § 928; 34 Pa.C.S. § 2923; 51 Pa.C.S. § 1509; 61 Pa.C.S. §§ 3514, 3905, 6171; 68 Pa.C.S. §§ 3402, 5402 | No lease-rule statute |
| b20 | methamphetamine/clandestine near habitation/occupancy/decontamination | 0 / 0 | — | Not located |
| b21 | cold weather / winter near evict/vacate/possession | 0 / 0 | — | Not located |
| b22 | code violation / condemnation order near disclosure to tenant or buyer | 0 / 0 | — | Not located |

## Decisions that need Taylor (short list)

**None open.** Decided 2026-09-29 and applied:
- **1:** the notice-to-quit waiver is optional.
- **2:** abandoned property mirrors the statute, plus a new education row on lease-set terms.
- **3:** `severability` rewritten for all states.
- **4:** no confession-of-judgment clause.
- **5:** the deposit cap is education, not a lease clause; the same rule for other states and builder cap validation are handed to Claude Code (§9.2, §14).
- **A:** lead 14 closed.

**Integrity:** 1,520 rows (1,467 + 53 new; `nsf-fee-limit-pa` rewritten in place); 1,491 active; PA 107 active (107 VERIFIED); one shared-text edit (`severability`, §3.1); every other state's count unchanged (AL 112, AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, VA 137, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row; CRLF.

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Trimmed:** `security-deposit-return-pa` (withholding right and new-address duty; the forfeiture and double-damages sentences moved out, as Taylor's PA decision anticipated) and `security-deposit-holding-pa` (the required notice of where the deposit is held). Both rules sets are in the existing `edu-security-deposit-rules-pa`.

### Verdict for every lease clause

All 11 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-holding-pa` | Split | REQUIRED_DISCLOSURE: 68 P.S. § 250.511b(a) | keep institution notice; interest duty to edu |
| `security-deposit-return-pa` | Split | SERVES_LANDLORD | keep forwarding-address duty; forfeiture and double damages to edu |
| `abandoned-property-pa` | Keep | SERVES_LANDLORD | lease controls over statute |
| `assistance-animal-accommodation-pa` | Keep | SERVES_LANDLORD |  |
| `carbon-monoxide-alarm-duty-pa` | Keep | SERVES_LANDLORD | weak: tenant replacement allocation |
| `casualty-termination-pa` | Keep | SERVES_LANDLORD | contract choice |
| `consumer-restrictions-statement-pa` | Keep | REQUIRED_DISCLOSURE: 73 P.S. § 2205(d) |  |
| `holdover-rate-pa` | Keep | CONSTRAINED_TERM |  |
| `notice-to-quit-waiver-pa` | Keep | SERVES_LANDLORD | opt-in |
| `periodic-tenancy-notice-pa` | Keep | CONSTRAINED_TERM |  |
| `pet-policy-pa` | Keep | SERVES_LANDLORD |  |

## Targeted fix, 2026-09-29: bed-bug and mold rows split

`edu-no-mold-bedbug-disclosure-pa` covered two subjects in one row. It is switched off, and its content moved unchanged into `edu-no-bed-bug-disclosure-pa` and `edu-no-mold-disclosure-pa`, matching the separate rows most states have. The research and citation are copied to both rows (the same search covered both subjects); no new research. Reason: each row carries one `topic_key`, so a combined row hid one of the two subjects from the cross-state coverage check.

---

## Retro checks (SOP 1.2), 2026-09-30

Circle-back run 2026-09-30 in PA's chat against the seven [Retro] checks in the kickoff prompt only (rule 1: scalpel, not a re-audit). Sources were the attached `lease-clauses.csv`, `lease-clause-decision-log-PA.md`, `lease-clause-citations-PA.csv`, `lease-clause-sop.md` (1.2) and `lease-clause-topics.md`. Where they differ from earlier in this chat, the attached files govern. The known difference is that the master carries 108 active PA-tagged rows, not the 107 delivered on 2026-09-29, because the sync split the bed-bug/mold row and trimmed the deposit clauses. The retro used the master's rows as they stand. No old output files were present to delete: the outputs folder was empty when the retro began.

Statutes were read from the General Assembly's official site (palegis.us) in the built-in browser. All 75 Pa.C.S. title files were reloaded 2026-09-30 (29,516,464 characters after whitespace normalization, versus 29.28 million in §1; the difference was not diffed, and no verdict below depends on it). Control terms returned 0 in both the Pa.C.S. and unconsolidated searches. Batteries are saved as `battery_rules42_37_39_2026-09-30.json` and `battery_rule27_2026-09-30.json`.

- **Rule 37 (tenancy type): fixed.** Read section-open:
  - 68 P.S. § 250.202 (Act § 202).
  - 68 P.S. § 250.501(b) (Act § 501(b)).
  - 68 P.S. § 250.511a (Act § 511.1) whole.
  - 68 P.S. § 250.514 (Act § 514).
  - 51 Pa.C.S. § 7315.1(b).
  - Pa.C.S. searches for month-to-month, week-to-week, tenancy at will, year-to-year and periodic tenancy found no landlord-tenant section. The hits were 48 Pa.C.S. § 1301 plus year-to-year uses in corporations, county, municipal, mining and vehicle titles.

  Three rows hid a tenancy-type assumption:
  - `edu-landlord-tenant-act-scope-pa`: now states Act § 202's consequence. An unwritten lease over three years is at will only, and becomes year-to-year once rent has been claimed and admitted for more than a year.
  - `edu-notice-to-quit-pa`: now maps each tenancy type to its notice period. By the text, week-to-week, month-to-month, year-to-year and at-will tenancies all get 15 days, a fixed term over one year gets 30, and the 10-day rent notice is the same for every type. Case law on periodic tenancies was not read.
  - `edu-security-deposit-cap-pa`: Act § 511.1 counts by "first year of any lease" and "any renewal of the original lease". The row now says the statute does not settle how this works for a periodic tenancy, and gives both options.
  - Correction to earlier in this chat: I had said the deposit cap carried no tenancy-type assumption. It does.

  Servicemember termination, death of tenant, holdover and other PA figures do not vary by tenancy type.
- **Rule 39 (eviction duties): fixed (one sentence added).**
  - Chapter 500 of the magisterial district court rules was already read whole (§0, §3.3), including the suspension rules (§13.1, Rule 581).
  - Re-read whole this pass: Chapter 500 and Chapter 1000 of the magisterial district court rules.
  - Duties and limits found were all procedural: Rule 503 complaint contents, Rule 512 appearance, the Rule 514.1 domestic-violence affidavit that stays removal for up to 30 days, and the arbitration-window bar on orders for possession. The first three were already in `edu-eviction-process-pa` (§3.3). The arbitration-window bar was not: the Official Notes to Rules 515 and 1007 (commentary, not rule text) bar an order for possession between the entry of an arbitration award for the tenant and the landlord's appeal. No animal duty, landlord immunity or record-sealing rule was found.
  - Pa.C.S. searches: "order for possession" returned 8 hits, none a landlord duty (26 Pa.C.S. § 307, 42 Pa.C.S. §§ 1725, 3571, 44 Pa.C.S. § 7161, 68 Pa.C.S. § 2306). Eviction-duty, animal-eviction and eviction-record patterns returned 0.
  - Existing rows already cover the duties found: post-writ property and the protection-from-abuse hold (`abandoned-property-pa`, 68 P.S. § 250.505a(b)(3), (h) (Act § 505.1(b)(3), (h))), the lockout ban (`edu-self-help-eviction-pa`) and record sealing (`edu-no-eviction-record-sealing-pa`).
  - Rows changed: `edu-eviction-process-pa` (arbitration-window sentence; Pa.R.C.P. 1301-1314 not read).
- **Rule 41 (just cause): checked, no issue; one PA row sharpened and one confirmed-absence row added.**
  - The 1951 Act was read whole (§0). Pennsylvania has no general just-cause or good-cause rule: Act § 501 lets a landlord end a tenancy at the end of the term by notice, without cause.
  - Situational limits read section-open:
    - Act § 205 (tenants' association).
    - 35 P.S. § 1700-1 (no eviction while rent is in escrow; `edu-rent-withholding-pa`).
    - 68 Pa.C.S. §§ 3410(a), (e), (f), 4412(a), (e), (f) and 5410(a), (e), (f) whole. During the conversion notice year the tenant can be removed only for nonpayment, waste or disturbing conduct, and a senior or disabled tenant who qualifies gets a two-year extension on the same grounds.
    - Mobile-home-park good cause (Act § 501(c.1)-(c.2); Manufactured Home Community Rights Act) remains deprioritized.
    - Philadelphia good cause remains flagged as local.
  - Because Pennsylvania is not a just-cause state, the end-of-term wording in the nine listed clauses is consistent with PA law. `security-deposit-use`, `no-alterations`, `keys`, `early-termination-ks` and `holdover-ca` are shared and unchanged; `security-deposit-return-pa`, `abandoned-property-pa`, `notice-to-quit-waiver-pa` and `holdover-rate-pa` are unchanged.
  - The conversion-year limit binds only a declarant converting a building, so it is stated in education rather than overriding shared clauses.
  - Rows changed:
    - `edu-condo-conversion-notice-pa`: now states the three grounds, and fixes "elderly or disabled long-term tenants" to the actual test. The two years' occupancy applies in condominiums and planned communities, not cooperatives.
    - New `edu-no-for-cause-eviction-pa` (topic `for-cause-eviction`): records this verdict. PA had no row on that topic.
- **Rule 42 (required text inside a shared clause): checked, no issue.**
  - Pa.C.S. searches: "lease shall contain" matched only 12 Pa.C.S. §§ 5605 and 5616 (self-storage). The "shall be stated in lease", "clause void unless" and "in writing near deposit/fee" patterns returned 0.
  - Unconsolidated searches:
    - "lease shall contain": 14 results.
    - "lease shall include": 6.
    - "lease shall provide": 15.
    - "rental agreement shall": 11.
    - "shall be included in the lease": 3.
    - '"in the lease" AND tenant AND "shall disclose"': 8.
    - All were oil and gas, county, compact, conveyance, self-storage, cooperative-offering or manufactured-home acts; none reached a residential fee, deposit or other shared clause.
  - The existing REQUIRED_DISCLOSURE rows already cover every sentence PA law forces into a lease: `consumer-restrictions-statement-pa` (73 P.S. § 2205(d)), the deposit escrow notice in `security-deposit-holding-pa` (68 P.S. § 250.511b (Act § 511.2)) and federal lead.
  - Rows changed: none.
- **Rule 43 (cure promises): already covered in §0 (the "Instruction 33" row).**
  - Rechecked against the current text of the three listed clauses:
    - `application-of-payments` only preserves the statutory rent cure.
    - `notice-to-quit-waiver-pa` keeps the lease's own notices and cure.
    - `default-by-tenant` carves out "except where applicable law" allows no cure, which preserves the drug-activity no-cure ground (68 P.S. § 250.505-A (Act § 505-A); 68 P.S. § 250.501(d) (Act § 501(d))).
  - Rows changed: none.
- **Rule 53 (figure vs shared clause): checked, no issue.**
  - `rent-payment` has no PA figure, and "without demand" matches Pennsylvania REALTORS® Form RL ¶7(A) practice. Act § 501(a)(3) still requires a demand before the 10-day notice.
  - `returned-payments`: PA has no civil returned-check cap. The only statutory figure is criminal restitution, already covered by `nsf-fee-limit-pa`.
  - `default-by-tenant` contains no figures.
  - `holdover-ca` "maximum amount permitted by applicable law" is already covered in §2.2 (K.3: no PA statutory multiplier; Act § 503(a)).
  - Rows changed: none.
- **Rule 27 (seven topics): fixed; seven new PA education rows.**
  - Pa.C.S. battery re-run with its patterns recorded in the JSON (see Proposed SOP changes), plus unconsolidated keyword searches.
  - Algorithmic rent-setting: **confirmed absent**.
    - Pa.C.S.: 0 hits. The three "algorithm" hits are unrelated: 4 Pa.C.S. § 13B32, 13 Pa.C.S. § 4A201, 18 Pa.C.S. § 3131.
    - Unconsolidated: 0 results.
    - Row: `edu-no-algorithmic-rent-rule-pa`.
  - Fees as rent: **confirmed absent**, with one statutory limit.
    - The only "additional rent" in PA statutes is Act § 504-A's ban on charging it for guest and supplier rights.
    - Row: `edu-no-fees-as-rent-rule-pa`.
  - Landlord self-cure: **confirmed absent**.
    - Pa.C.S.: 0 hits. The only unconsolidated results were planned-community acts.
    - Row: `edu-no-landlord-self-cure-rule-pa`.
  - Lease completeness: **confirmed absent**.
    - The "blank spaces" hits were installment-sales and credit sections (12 Pa.C.S. §§ 6221-6332) and 40 Pa.C.S. § 3703.
    - Row: `edu-no-lease-completeness-rule-pa`.
  - Quiet possession: **confirmed absent** as a statute.
    - Hits were only 13 Pa.C.S. § 9610 and 68 Pa.C.S. § 5302. The implied covenant is case law, not read.
    - Row: `edu-no-quiet-possession-statute-pa`.
  - Statutory forms: **present**.
    - The 68 P.S. § 250.505a(e) (Act § 505.1(e)) abandoned-property notice is quoted verbatim in the row. Magisterial district court complaints use prescribed court forms (Rule 503A).
    - Row: `edu-statutory-forms-pa`.
  - Tenant security cameras: **confirmed absent**.
    - Pa.C.S. and "doorbell" searches: 0. The unconsolidated results were capital-budget acts and a Judicial Code omnibus act.
    - Read section-open: 18 Pa.C.S. §§ 5702 ("oral communication") and 5703. The row notes the audio-recording issue; the § 5704 consent exceptions were not read.
    - Row: `edu-no-tenant-camera-rule-pa`.
  - Search boundary for all seven topics: Pa. Code regulations, local ordinances and case law were not searched.

**Rows changed (13, all PA-only, all in `lease-clauses-PA-retro-delta.csv`):**
- Edited: `edu-notice-to-quit-pa`, `edu-landlord-tenant-act-scope-pa`, `edu-security-deposit-cap-pa`, `edu-eviction-process-pa`, `edu-condo-conversion-notice-pa`.
- New: `edu-no-for-cause-eviction-pa`, `edu-no-algorithmic-rent-rule-pa`, `edu-no-fees-as-rent-rule-pa`, `edu-no-landlord-self-cure-rule-pa`, `edu-no-lease-completeness-rule-pa`, `edu-no-quiet-possession-statute-pa`, `edu-statutory-forms-pa`, `edu-no-tenant-camera-rule-pa`.
- Details for every row:
  - All are LANDLORD_EDUCATION with a blank basis, VERIFIED, and `last_checked` 2026-09-30. New rows have `effective_from` 2026-09-30.
  - Edited rows keep their notes and add a "PA retro (SOP 1.2 rule N)" segment.
- No shared row was touched and no shared-text edit is proposed (rule 62).

**Rule 77 finding for §10:** the statutory abandoned-property notice form (Act § 505.1(e)) says storage runs "thirty days from the postmark date of this notice", while subsection (d) says "thirty days from the date of the notice". `abandoned-property-pa` follows (d), and `edu-statutory-forms-pa` explains the gap and how to avoid it.

### Proposed SOP changes

1. **Rule 14:** a saved battery records each search's pattern as well as its counts. The first rule 27 battery saved only labels and had to be re-run to state the search boundary.
2. **Rule 37:** add caps that count by "lease year" or "renewal" (for example, deposit caps) to the examples. A periodic tenancy renews every period, so a per-year or per-renewal figure hides an assumption just as a notice period does.
3. **Rule 41:** in a state without a general just-cause rule, record the verdict and any situational for-cause limits in a `for-cause-eviction` row (such as the conversion notice year, rent-escrow bars and tenants' association protection), so rule 27 and rule 41 give the same answer.

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no PA override. PA's note segment on the row records it.

## Circle-back checks (SOP 1.49), 2026-10-03/04

Circle-back run 2026-10-03/04 in PA's chat. Only the two [Retro] rules and four targeted fixes in the kickoff prompt were checked (rule 1: scalpel, not a re-audit).

**Sources.** The attached files are the only source of truth: `lease-clauses.csv` (2,876 rows, matching the prompt), `lease-clause-decision-log-PA.md`, `lease-clause-citations-PA.csv`, `lease-clause-sop.md` (1.49) and `lease-clause-topics.md`. The library carries 116 active PA-tagged rows (63 PA-only, 53 shared), more than the 108 counted at the 2026-09-30 retro. That is the difference from earlier in this chat; the 2026-09-30 retro rows have been synced in.

**Old outputs deleted:** `lease-clause-decision-log-PA-retro.md` and `lease-clauses-PA-retro-delta.csv` from the 2026-09-30 retro.

**Statute text.** Read 2026-10-03 in the built-in browser on palegis.us.
- The Landlord and Tenant Act of 1951 was hash-compared section by section with the copy saved on 2026-09-29: 72 of 72 sections match, using normalised text with the byte-order mark treated as whitespace (rule 79).
- All 75 Pa.C.S. title files were reloaded (29,440,960 characters, 14,741 section markers; control term 0).
- Read live from the official site: the City Rent Withholding Act, Pennsylvania Human Relations Act, Plain Language Consumer Contract Act, Electronic Transactions Act and Act 118 of 2018.
- Court rules and 37 Pa. Code § 307.6 were read on pacodeandbulletin.gov.
- Battery: `battery_rule54t_2026-10-03.json`.

### One line per check

- **Rule 54t (tenant-caused damage): fixed; one clause and one education row added, casualty row noted.**
  - Casualty row checked first: `casualty-termination-pa` already excludes damage caused by Tenant, household members or guests from both its exit and its abatement, and no PA statute gives a casualty exit or abatement.
  - Each abatement or exit route checked separately for a tenant-fault exception:
    - Casualty: no statute (1951 Act read whole).
    - Rent into escrow: City Rent Withholding Act § 1 (35 P.S. § 1700-1) has no fault exception and applies "notwithstanding ... any agreement".
    - Essential services: 66 Pa.C.S. § 1529 lets a tenant deduct utility payments made because the landlord did not pay. It turns on the landlord's own failure, so it has no fault exception.
    - Landlord-breach termination: no statute; the implied warranty (Pugh v. Holmes) is case law, not read.
  - What PA law gives the landlord:
    - Repair cost from the deposit, only with the 30-day list (68 P.S. § 250.512(a)-(b)).
    - A tenant duty against wilful or wanton damage in 3+-household buildings (§ 250.503-A(1)).
    - Property-damage claims in the possession complaint (Pa.R.Civ.P.M.D.J. 503(B)(8)).
    - Nothing on rent during repairs or lost rent after the lease ends.
  - Searches:
    - Pa.C.S. battery t1-t6: no residential fault, abatement or casualty provision. The hits were goods-lease sections in 13 Pa.C.S., land-bank sections in 26 Pa.C.S., and the drug-nuisance remedy in 42 Pa.C.S. § 8389.
    - Unconsolidated: "untenantable AND tenant" and '"destroyed by fire" AND tenant AND lease' each returned 0.
  - Rows:
    - New `tenant-caused-damage-pa` (optional, CONDITIONAL, SERVES_LANDLORD), modelled on `tenant-caused-damage-tn` (read; TN row not tagged).
      - It carries the periodic-tenancy limb (rule 37).
      - "Make repairs as this Lease and Pennsylvania law require" replaces TN's "reasonable efforts to repair".
      - The last sentence preserves the rent-escrow and utility-deduction rights.
    - New `edu-tenant-caused-damage-pa`.
    - `casualty-termination-pa`: note only.
- **Rule 79 (re-read before trusting a summary): fixed.**
  - Secondary-source screen: 0 of 116 rows, and 0 rows in the citations file.
  - Rows recording no basis: **49 of 116 active PA-tagged rows record no basis** in their PA note. All 49 are shared rows, and all 49 segments were written by the PA research pass. No library-wide pass created or renamed any of them. 0 shared rows lack a PA segment. All 63 PA-only rows record a section-open basis.
  - Of the 49:
    - 15 cite no section (generic). Listed, not read.
    - 1, `lead-based-paint`, has a PA segment that cites no section (federal law sits in the base row).
    - 33 cite PA sections. All 33 were read section-open, and each PA segment now ends with a one-line basis naming what was read.
  - Four segments corrected:
    - `severability`: "weighs the lease as a whole" was attached to 73 P.S. § 2208(a)(3), which says only that a lessor who made a good faith and reasonable effort has no liability under section 7. "As a whole" is the Attorney General's preapproval policy (37 Pa. Code § 307.6(b)).
    - `residential-use-only`: "Illegal-drug use is a statutory breach" overstated § 250.505-A(a). The grounds are a conviction for sale, manufacture or distribution, a second drug-act violation, or a seizure on the premises.
    - `no-disturbance`: "Mirrors" corrected to "broader than". § 250.503-A(2) reaches only wilful or wanton disturbance.
    - `pet-insurance-requirement`: Act 118 of 2018 does not address insurance; it sets documentation rules (section 3) and gives landlord immunity (section 4).
  - The other 29 were confirmed unchanged:
    - Subdivisions checked: 66 Pa.C.S. §§ 1527, 1529, 1531; 18 Pa.C.S. § 4105(e)(3); 51 Pa.C.S. § 7315.1; 75 Pa.C.S. § 3353(b)-(c); 68 P.S. §§ 250.105, .202, .203, .304, .501(a)-(f), .502-A, .503(a), (c), .504-A, .505a, .511a, .512(a), (c), .514; 43 P.S. § 955(h)(3.1), (6), (11); 73 P.S. §§ 2205(b), (d)(1)(ii), 2260.303, 2260.901.
    - Qualifiers now recorded where the statute attaches them: the § 4105(e)(3) posted-notice condition, § 203's over-three-years scope, § 503(c)'s "solely because of failure to pay rent", and § 3353(b)(2)'s "private parking lots".
  - Claude Code: upgrade these 33 rows' basis in `lease-clause-citations-PA.csv` at sync.
- **Targeted fix 3 (`holdover-rate-pa`, rule 53 as amended): fixed.**
  - (a) Trigger: no PA statute starts holdover damages at a notice date. Act § 503(a)(2) gives "damages, if any, for the unjust detention" with no start date, and the notice to quit is a step before the possession action, not a damages measure. A charge from the end of the Term is therefore one PA law allows. When detention becomes "unjust" is case law, not read.
  - (b) Extended to any termination, so a forfeiture for breach (Act § 501(a)(2)) or a periodic tenancy ended by notice no longer loses the charge.
  - (c) Two later sentences of rule 53:
    - Termination for nonpayment is excluded. PA has no late-fee cap, but in a case "solely because of failure to pay rent" the tenant may supersede the writ by paying arrears and costs any time before it is executed (Act § 503(c)).
    - No multiplier sentence: the 1951 Act's double and treble damages reach only distress, deposits and abandoned property, so there is no holdover multiplier. `holdover-rate-mo` is not in the attached library; the rule 53 text was used instead.
  - Text is now identical to `holdover-rate-nc`. No PA row quotes the old wording.
- **Targeted fix 4 (scrub-trimmed clauses, rule 78 with rule 47): fixed, one clause.**
  - `security-deposit-return-pa`: the scrub left "Landlord may keep all or part of the Security Deposit ..." without the condition § 250.512(a)-(b) attaches: a written list within 30 days, or the landlord forfeits all rights to withhold and to sue for damage. A number check can't catch a missing step, so the 30-day list-and-refund sentences were restored word for word from the 2026-09-29 delivered file, with "also" restored in the next sentence. Forfeiture, double damages and burden of proof stay in `edu-security-deposit-rules-pa`.
  - `security-deposit-holding-pa`: no restore needed. The trimmed clause still gives the § 250.511b(a) bank name, address and amount notice, and grants no right that the interest rule (§ 511.2(b)-(c)) or the transfer notice limits; those duties are in `edu-security-deposit-rules-pa`.
  - Required in-lease content search:
    - PA's required-content provisions are 73 P.S. § 2205(d)(1), carried in `consumer-restrictions-statement-pa` and not trimmed, and the § 250.511b(a) notice, kept.
    - The 2026-09-30 search ("lease shall contain", "rental agreement shall" and others) found no other provision.
    - The scrub trimmed only these two PA clauses and switched none off (PA log, Three-bucket scrub).
- **Targeted fix 5 (rule 62 vetting, `returned-payments`): vouched, no change needed.** "During any 12-month period" is lawful in PA. No statute speaks to requiring certified funds after returned payments. 18 Pa.C.S. § 4105(e)(3) is criminal restitution only, and `edu-no-cash-receipt-duty-pa` confirms no payment-method rule.
- **Targeted fix 6 (rule 62 vetting, `default-by-tenant`, MN's proposal): lawful, but it needs a decision.** Shared text not edited.
  - Question 1: no. The moved carve-out can't drop a notice or cure PA requires. The statutory demand and notice to quit apply unless the lease waives them (68 P.S. § 250.501(a)(3), (b), (e)), and the right to supersede by paying before the writ is executed (§ 250.503(c)) can't be displaced by self-limiting wording.
  - Question 2: yes, it may change what the clause promises in PA. PA has no statutory pre-default cure period for rent, so a landlord could argue that "applicable law permits Landlord to proceed without giving Tenant an opportunity to cure" now reaches the rent limb. That would remove the lease's written notice of a rent default. `notice-to-quit-waiver-pa` keeps only "any written notice of default or chance to cure that this Lease gives Tenant", so with the waiver in use the tenant could lose all pre-suit notice.
  - Recommendation: the merged sentence should excuse only the cure period, not the written notice of default. Otherwise PA needs an override keeping the carve-out on the non-rent limb.

**Rows changed (38, in `lease-clauses-PA-retro-delta.csv`):**
- New: `tenant-caused-damage-pa`, `edu-tenant-caused-damage-pa`.
- PA-only edits: `holdover-rate-pa`, `security-deposit-return-pa`, `casualty-termination-pa` (note only).
- Shared rows, PA segment and `last_checked` only (33): `rent-payment`, `returned-payments`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `utilities-responsibility`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `utilities-paid-by-landlord`, `landlord-maintenance`, `default-by-tenant`, `notices`, `severability`, `entire-agreement`, `electronic-signatures`, `pet-insurance-requirement`, `parking-vehicle-rules`, `guest-policy`, `guest-policy-day-limit`, `snow-removal`, `early-termination-ks`, `holdover-ca`, `tenant-forward-proceedings-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `services-utilities-provided-ks-oh`, `surrender-end-of-term-ks-ne`, `rental-application-accuracy`.
- No shared text was edited.

**Vouches given** (Claude Code: file under §9 Propagation notes):
- `returned-payments`, AZ's "during any 12-month period": vouched, no change needed (no PA statute speaks to it).
- `default-by-tenant`, MN's moved carve-out: not a plain vouch; a decision is needed (see fix 6).

### Proposed SOP changes

1. **Rule 79:** when hashing a saved section against the live page, treat U+FEFF (byte-order mark) and U+00A0 as whitespace before hashing. JavaScript's `\s` matches them and Python's doesn't, which made one unchanged PA section (Act § 505.1) look amended.
2. **Rule 79:** to find a state segment on a shared row, end it at the next " | " followed by any capital letter, not only a two-letter state code. Pennsylvania's own "SHARED-TEXT EDIT" segment sits between PA and the next state, so a two-letter boundary attaches the basis line to the wrong segment.
3. **Rule 54t:** a city- or county-certified rent-suspension statute (here, the City Rent Withholding Act) counts as a rent-into-court route for the fault check even when the money goes to a bank escrow rather than a court.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 2b10851`: 2 new rows (`tenant-caused-damage-pa`, `edu-tenant-caused-damage-pa`), 3 PA-only rows updated (`holdover-rate-pa`, `security-deposit-return-pa`, `casualty-termination-pa`) and PA's segment on 33 shared rows; nothing refused. PA active 116 → 118; no same-topic pairs.
- **Citations file:** rows added for the two new rows; the 36 changed rows re-dated, and the 33 shared rows now record the section-open basis (rule 79).
- **Rule 62, edit merged.** PA was the last tagged state to vet AZ's `returned-payments` wording. "During the Term" now reads "during any 12-month period" for all 11 tagged states (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA), with a note in each state's segment and log.
- **Rule 62, open for Taylor.** PA finds MN's `default-by-tenant` edit lawful but says it may change what the clause promises in PA: with no statutory pre-default cure period for rent, a landlord could argue the moved carve-out drops the lease's written notice of a rent default, and with `notice-to-quit-waiver-pa` in use the tenant could then get no pre-suit notice at all. This is the question Taylor answered for Indiana on 2026-10-03 (follow the statute; no extra notice promise; the education row says the landlord may still give notice). PA is recorded as pending that product call rather than as a vouch; the MN edit waits on six other states anyway.
- **Guards:** all pass. **Statute spot-check:** not possible from here (palegis.us serves a JavaScript app with no section text). The pass compared all 72 sections of the 1951 Act with its saved copy by normalised hash.
- **SOP 1.50:** all three proposals adopted (rules 54, 79). PA's 54t and 79 cells set to ✓.

## Taylor's decision on MN's `default-by-tenant` edit (2026-10-04)

- **Same as Indiana.** PA supports MN's edit as written: the lease follows Pennsylvania law and doesn't promise a written notice of a rent default the statute doesn't require. No optional notice clause. At the merge, `edu-notice-to-quit-pa` should tell landlords they may still give written notice before filing, and that with `notice-to-quit-waiver-pa` in use the tenant may otherwise get no pre-suit notice; PA's note segment on `default-by-tenant` is updated to match (backlog).

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where PA law lets Landlord proceed without a cure opportunity. Uniform; no PA override. Under Taylor's decision of 2026-10-04 (same as Indiana), `edu-notice-to-quit-pa` now tells landlords they may still give written notice of a rent default, and warns that with the notice-to-quit waiver a tenant may otherwise get no warning.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for PA. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any PA row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach PA's law; to be confirmed at PA's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-08): Desktop's running record

## PA topic gaps: running record

Pass: "Topic gaps: Pennsylvania (end-of-run consistency pass)", staged 2026-11-07, run 2026-11-08 in PA's chat. Step A passed (58,281,188 bytes, SHA-256 8733782a…0e12; 15,446 rows, 15,334 active, 119 PA active; 256 missing topics).

### Status: COMPLETE (final delivery 2026-11-08)
- 256 of 256 topics answered: 247 new rows and 26 tags (273 delta rows). The quote checker passed 306 of 306 statute quotes.
- Rule 80 independent check, two rounds:
  - Round 1: 20 findings, all fixed.
  - Round 2: 10 findings on the corrected rows, all fixed.
  - Rows edited after round 2 are listed in log §5.
- One row is NEEDS_REVIEW: `edu-no-property-tax-rent-statement-pa`. The Taxpayer Relief Act is a special-session act the site would not serve.
- No questions were asked of Taylor; every decision is in log §4.
- Files: `lease-clauses-PA-gaps-delta.csv`, `gaps-log-PA.md` (final versions).

### Tags (26)
- B1: `showing-notice-la`
- B3: `cold-weather-vacate-notice-wy`, `automatic-renewal-ks`, `owner-occupancy-termination-ar`
- B4: `rental-inspection-cooperation-mn`, `rent-increase-midterm-ky`, `tax-insurance-escalation-la`
- B5: `pest-cooperation-pr`, `tenant-repair-agreement-hi`
- B7: `animal-care-access-vi`, `waterbed-mn`, `cannabis-restrictions-ak`
- B8: `appliances-excluded-la`, `furnishings-included-la`, `emergency-contact-co`, `extended-absence-notice-ks`, `guaranty-as`, `lease-copy-receipt-hi`, `informal-dispute-resolution-or`, `scheduled-services-entry-la`, `rent-installments-or`, `rules-wi`, `tenant-portal-mn`, `no-liens-ar`, `association-approval-la`, `prohibited-acts-renter-wy`
- Declined:
  - `barred-person-covenant-ne` and `eminent-domain-vi` (they conflict with PA law)
  - `utility-allowance-cap-co`, the CO and HI EV clauses, `firearm-rules-la` and `farmland-sporting-rights-co` (each rests on another state's statute)
  - `rules-ia` (`rules-wi` chosen instead)

### New clauses
- `collection-costs-pa`, `rent-acceptance-nonwaiver-pa`, `rent-concession-pa`
- `parking-disclosure-pa`: REQUIRED, effective 2026-12-21 (1951 Act § 207, Act 64 of 2026)
- Proposed under Findings, not in the delta:
  - `early-termination-pa` with a flat one-month fee (finding 5)
  - aligned fault-person wording for `casualty-termination-pa` (finding 9)

### Key new law and finds
- Acts 64 and 67 of 2026 (HB 344, HB 558) add 1951 Act §§ 207 (parking) and 208 (application fees), effective 2026-12-21. The prompt listed both bills as pending.
- 51 Pa.C.S. § 7312: six-month eviction stay for Guard and reserve members.
- 53 Pa.C.S. § 2962(f) and First Class City Home Rule Act § 18: limits on local power. Case law decides how far they reach.
- 15 Pa.C.S. § 411 and 54 Pa.C.S. § 331: suit bars for unregistered foreign entities and fictitious names.
- Tax Reform Code § 324.4: nonresident-lessor withholding by business lessees.
- 53 Pa.C.S. § 5607(d)(10)-(11) and 11 Pa.C.S. § 13588(b): owner liability for a tenant's water or sewer bill.
- 66 Pa.C.S. § 1313: resale cap at the residential rate. 66 Pa.C.S. § 102(2)(v): building owner/operators that supply electric power to occupants are excluded from the "public utility" definition.
- 66 Pa.C.S. Chapter 14 expired 2024-12-31.
- Act § 205: no termination or nonrenewal for taking part in a tenants' association.
- 18 Pa.C.S. § 9122.5(a.1): no use of expunged or limited-access records for housing.
- Breach of Personal Information Notification Act.
- 68 Pa.C.S. § 7103(a): the seller disclosure law covers a lease with an option to purchase.
- Mechanics' Lien Law § 303(d).
- Act 101 of 1988 § 1501: recycling.
- Article V-B: cable TV access.
- Act § 505-A drug grounds cover single-family homes and apartments, not only buildings with three or more households.
- Act § 511.2(c): the escrow section applies "only after the second anniversary". The rows recommend escrowing from the start.

### Findings (log §6, §7)
- `edu-no-application-fee-cap-pa` will be wrong from 2026-12-21.
- PA segments of the parking clauses are stale after Act § 207 (finding 8).
- The kickoff misdescribes Act § 511.3 and 66 Pa.C.S. § 1529.
- `early-termination-pa` is proposed (5).
- `edu-drug-activity-eviction-pa` needs the CARES caveat (6).
- `edu-servicemember-rights-pa` misprints the rule abbreviation (7).
- Casualty fault-person wording should be aligned (9).
- `edu-habitability-pa` states non-waivability without noting it rests on case law (10).
- KS rows cite P.S. outside a PA segment (§7).

### Proposed SOP changes and topic questions
- SOP rule 19: the dump channel; fallback for special-session acts.
- SOP rule 16: check the kickoff's "pending bills" against the act list at Step A.
- Topic questions:
  - parking statement and no mid-lease parking fee changes (PA § 207)
  - clean-slate and limited-access records in tenant screening (18 Pa.C.S. § 9122.5)

### Working notes
- Working folder: /home/claude/gaps. Batteries are in src/batteries/BLOG.json (G1-G8).
- Build: `rows/B<n>.py` → `tools/assemble.py` → `tools/quotecheck.py` → `tools/mklog.py`.

# Topic gaps pass (end-of-run consistency pass, 2026-11-08): Desktop's log

## Topic gaps: Pennsylvania (end-of-run consistency pass), 2026-11-08

Status: complete. 256 of 256 topics answered (batches B1-B8); 247 new rows and 26 tags; independent check run in two rounds, all findings fixed (§5).

### §1 Sources, channel and currency

- **Step A.** `lease-clauses.csv` decompressed to 58,281,188 bytes, SHA-256 `8733782afed8d5d93b45248871b230fca876479c8a899c0e369f4d41c9540e12`; 15,446 rows, 15,334 active, 119 active rows carry PA; `missing-topics-PA.md` lists 256 topics. All match the prompt.
- **Start clean.** Deleted from the outputs folder: `lease-clause-decision-log-PA-retro.md` and `lease-clauses-PA-retro-delta.csv` (the 2026-10-04 retro deliverables). The attached files are the only source of truth; where this chat's earlier work differs from them, they govern.
- **Channel.** The workspace cannot reach palegis.us, pacodeandbulletin.gov, uscode.house.gov or ecfr.gov (proxy CONNECT 403 for each, tested 2026-11-08), and no corpus archive was attached. Every official text was read in the built-in browser, as the 2026-09-29 pass did (PA log §1.1-1.2), and saved to the working folder through the browser's result channel.
  - **Consolidated Statutes and Constitution:** all 75 official files from the index page (the Constitution and 74 titles) loaded whole from `/statutes/consolidated/view-statute?txtType=HTM&ttl=NN&iFrame=true`; 29,461,341 characters, 14,753 section markers, 0 load errors. Each file's `revised` meta stamp was recorded (oldest: the Constitution, 2022-03-07; newest: Title 68, 2026-11-06). Titles revised since the 2026-09-29 pass: 2 (2026-11-04), 15 (11-06), 16 (10-14), 18 (11-04), 30 (11-04), 40 (11-02), 42 (11-04), 68 (11-06), 74 (10-14), 76 (10-14), 77 (10-30).
  - **Acts:** the 1951 Act and every other unconsolidated act from `view-statute?txtType=HTM&SessYr=...&ActNum=...&iFrame=true`, loaded whole and indexed by the act's own section markers.
  - **Second engine:** the General Assembly's unconsolidated-statute keyword search, with a control term in every battery.
  - **Court rules and regulations:** pacodeandbulletin.gov (current through 56 Pa.B. 6006, 2026-09-05, per the site banner).
  - **Bot blocks:** none met.
  - **One text not reopened.** The Expedited Eviction of Drug Traffickers Act (Act 23 of the 1995 First Special Session) is served only through a page wrapper that drops the special-session flag (the HTML link returns regular-session Act 23 of 1995, a fire-hydrant act; tested 2026-11-08). `edu-expedited-criminal-eviction-pa` relies on `edu-drug-activity-eviction-pa` (read section-open 2026-09-29) for it, and says so; 53 Pa.C.S. § 304(d) confirms the act by name. The same wrapper blocks the Taxpayer Relief Act (Act 1 of the 2006 First Special Session; property tax and rent rebates), so `edu-no-property-tax-rent-statement-pa` is NEEDS_REVIEW.
- **Currency.** The 2026 act list (Acts on General Legislation) was read through Act 117 (2026-10-26). Acts passed since 2026-09-29 that touch landlord-tenant law:
  - **Act 64 of 2026 (2026 P.L. 579, HB 344), enacted 2026-10-22, effective in 60 days (2026-12-21):** adds Act § 207, parking provisions in a lease.
  - **Act 67 of 2026 (2026 P.L. 595, HB 558), enacted 2026-10-22, effective in 60 days:** adds Act § 208, rental application fees.
  - The compiled 1951 Act on palegis.us already prints both sections with their history lines ("207 added Oct. 22, 2026, P.L.579, No.64"; "208 added Oct. 22, 2026, P.L.595, No.67", history lines). **The prompt lists HB 344 and HB 558 among bills pending against the 1951 Act and not law; both are now law.** HB 72, HB 343 and HB 573 do not appear in the act list and remain not law.
  - Also read for relevance: Act 74 of 2026 (68 Pa.C.S. seller disclosure, flood disclosure; sales only), Act 65 (68 Pa.C.S. land-bank definitions), Act 87 (23 Pa.C.S. child-abuse reporting; its session-law text was not yet posted, "Error VS-8"), Act 113 (Human Services Code carbon monoxide alarms in child care).
  - The Magisterial District Judge rules Chapter 1000 were amended 2026-04-21 effective 2026-11-01 (56 Pa.B. 2569); Rule 1007's comment now carries the arbitration-window note.
- **Section-open.** Every row in the delta was written with its sections open; texts relied on are saved under `src/` in the working folder (acts whole; Consolidated Statutes sections one file each; court rules one file each). Purdon's numbers (P.S.) are a publisher's convention the official site does not print; each row relying on one says so.

### §2 Topics answered

- `habitability-waiver`: `edu-habitability-waiver-pa`, Absent, battery PA-G1-01, PA-G1-02 (related: 35 P.S. § 1700-1)
- `habitability-modifiable`: `edu-habitability-modifiable-pa`, Absent, battery PA-G1-01 (related: 68 P.S. § 250.502-A)
- `part5-nonwaivable`: `edu-nonwaivable-rights-pa`, Present, 68 P.S. § 250.511a(f)
- `showing-notice-waiver`: `showing-notice-la`, tagged, battery PA-G1-03
- `security-deposit-nonwaiver`: `edu-security-deposit-nonwaiver-pa`, Present, 68 P.S. § 250.511a(f)
- `smoke-drift-waiver`: `edu-smoke-drift-pa`, Present, Clean Indoor Air Act § 3(a)
- `jury-waiver`: `edu-jury-waiver-pa`, Present, Pa. Const. art. I, § 6
- `exculpatory-clauses`: `edu-exculpatory-clauses-pa`, Absent, battery PA-G1-06 (related: Assistance and Service Animal Integrity Act § 4)
- `unconscionability`: `edu-unconscionability-pa`, Absent, battery PA-G1-07 (related: 13 Pa.C.S. § 2A108(a))
- `attorney-fees`: `edu-attorney-fees-pa`, Absent, battery PA-G1-08 (related: 42 Pa.C.S. § 2503)
- `collection-fee`: `collection-costs-pa` (clause), Present, Fair Credit Extension Uniformity Act § 4(b)(6)(i)
- `collection-fee`: `edu-collection-fee-pa`, Present, Fair Credit Extension Uniformity Act § 4(b)(6)(i)
- `notice-service-fee`: `edu-notice-service-fee-pa`, Absent, battery PA-G1-10 (related: 68 P.S. § 250.503(b))
- `eviction-penalty-clause-ban`: `edu-no-eviction-penalty-rule-pa`, Absent, battery PA-G1-10, PA-G1-11 (related: 68 P.S. § 250.503(b))
- `liquidated-damages`: `edu-liquidated-damages-pa`, Absent, battery PA-G1-11 (related: 13 Pa.C.S. §§ 2718)
- `waiver-by-acceptance`: `rent-acceptance-nonwaiver-pa` (clause), Present, 68 P.S. § 250.505-A(b)
- `waiver-by-acceptance`: `edu-waiver-by-acceptance-pa`, Absent, battery PA-G1-12 (related: 68 P.S. § 250.505-A(b))
- `prohibited-lease-terms`: `edu-prohibited-lease-terms-pa`, Present, 68 P.S. § 250.511a(f)
- `homestead-waiver`: `edu-homestead-waiver-pa`, Absent, battery PA-G1-14 (related: Pa. Const. art. VIII, § 2)
- `casualty-and-mitigation-waivable`: `edu-casualty-mitigation-waiver-pa`, Absent, battery PA-G1-15
- `binding-arbitration`: `edu-binding-arbitration-pa`, Present, 42 Pa.C.S. § 7303
- `consumer-protection-act`: `edu-consumer-protection-act-pa`, Present, 73 P.S. § 201-2(3)
- `knowing-use-penalty`: `edu-no-knowing-use-penalty-pa`, Absent, battery PA-G1-18 (related: 68 P.S. § 250.512(c))
- `deposit-cost-schedule`: `edu-deposit-cost-schedule-pa`, Absent, battery PA-G2-01 (related: 68 P.S. § 250.512(a))
- `deposit-escheat`: `edu-deposit-escheat-pa`, Present, 72 P.S. § 1301.10
- `deposit-installments`: `edu-no-deposit-installment-rule-pa`, Absent, battery PA-G2-03 (related: 68 P.S. § 250.511a(a))
- `deposit-last-month-rent`: `edu-deposit-last-month-rent-pa`, Absent, battery PA-G2-04 (related: 68 P.S. § 250.511a(a))
- `deposit-surrender-notice`: `edu-deposit-surrender-notice-pa`, Present, 68 P.S. § 250.512(a)
- `security-deposit-interest`: `edu-security-deposit-interest-pa`, Present, 68 P.S. § 250.511b(a)
- `security-deposit-on-sale`: `edu-security-deposit-on-sale-pa`, Present, 68 P.S. § 250.104
- `security-deposit-penalty`: `edu-security-deposit-penalty-pa`, Present, 68 P.S. § 250.512(b)
- `security-deposit-standards`: `edu-no-security-deposit-standards-pa`, Absent, battery PA-G2-06
- `nonrefundable-deposit-notice`: `edu-nonrefundable-deposit-notice-pa`, Absent, battery PA-G2-07 (related: 68 P.S. § 250.511a(a))
- `nonrefundable-deposit-separate-notice`: `edu-no-nonrefundable-separate-notice-pa`, Absent, battery PA-G2-07
- `holding-deposit`: `edu-holding-deposit-pa`, Absent, battery PA-G2-08 (related: 68 P.S. § 250.511b(a))
- `fee-in-lieu-of-deposit`: `edu-fee-in-lieu-of-deposit-pa`, Absent, battery PA-G2-07 (related: 68 P.S. § 250.511c)
- `expedited-deposit-disposition`: `edu-no-expedited-deposit-disposition-pa`, Absent, battery PA-G2-09
- `required-fees`: `edu-required-fees-pa`, Present, 1951 Act § 207(a)(1)
- `fee-transparency`: `edu-fee-transparency-pa`, Absent, battery PA-G2-10
- `fee-unprovided-service`: `edu-no-fee-unprovided-service-rule-pa`, Absent, battery PA-G2-11
- `late-fee-limit`: `edu-no-late-fee-limit-pa`, Absent, battery PA-G2-12
- `pet-fees`: `edu-pet-fees-pa`, Absent, battery PA-G2-13
- `rent-receipt-anti-waiver`: `edu-no-rent-receipt-anti-waiver-pa`, Absent, battery PA-G2-14
- `lockout-for-rent-delinquency`: `edu-no-lockout-for-rent-pa`, Absent, battery PA-G2-15
- `utility-deposit-return`: `edu-utility-deposit-return-pa`, Absent, battery PA-G2-16
- `government-fee-reimbursement`: `edu-no-government-fee-reimbursement-rule-pa`, Absent, battery PA-G2-17
- `governmental-fines`: `edu-governmental-fines-pa`, Absent, battery PA-G2-18
- `alarm-tampering-fee`: `edu-alarm-tampering-fee-pa`, Absent, battery PA-G2-19 (related: Carbon Monoxide Alarm Standards Act § 5(c)(4))
- `carpet-cleaning`: `edu-carpet-cleaning-pa`, Absent, battery PA-G2-01 (related: 68 P.S. § 250.512(a))
- `statutory-caps`: `edu-statutory-caps-pa`, Present, 68 P.S. § 250.511a(a)
- `subsidy-late-fee`: `edu-no-subsidy-late-fee-rule-pa`, Absent, battery PA-G2-20
- `unpaid-damages-interest`: `edu-unpaid-damages-interest-pa`, Present, 68 P.S. § 250.301
- `rent-concession`: `rent-concession-pa` (clause), Present, battery PA-G2-21
- `rent-concession`: `edu-rent-concession-pa`, Absent, battery PA-G2-21
- `dv-confidentiality`: `edu-dv-confidentiality-pa`, Present, Pa.R.Civ.P.M.D.J. 514.1
- `dv-deposit-timing`: `edu-no-dv-deposit-timing-rule-pa`, Absent, battery PA-G3-04, PA-G3-02
- `dv-eviction-protection`: `edu-dv-eviction-protection-pa`, Present, 68 P.S. § 250.513(e)
- `dv-lockchange`: `edu-no-dv-lock-change-rule-pa`, Absent, battery PA-G3-01
- `dv-protection-order-chapter-moved`: `edu-dv-protection-order-chapter-moved-pa`, Present, 23 Pa.C.S. §§ 6101
- `dv-qualifying-documents`: `edu-dv-qualifying-documents-pa`, Present, 68 P.S. § 250.513(e)
- `statutory-early-termination`: `edu-statutory-early-termination-pa`, Present, 51 Pa.C.S. § 7315.1(b)
- `infirmity-termination`: `edu-no-infirmity-termination-pa`, Absent, battery PA-G3-07
- `environmental-event-termination`: `edu-no-environmental-event-termination-pa`, Absent, battery PA-G3-08, PA-G1-15
- `repair-cost-termination`: `edu-no-repair-cost-termination-pa`, Absent, battery PA-G3-08, PA-G1-01
- `landlord-remedies-termination`: `edu-landlord-remedies-termination-pa`, Present, 68 P.S. § 250.501(a)
- `landlord-breach-remedy`: `edu-landlord-breach-remedy-pa`, Absent, battery PA-G1-01 (related: 35 P.S. § 1700-1)
- `abandonment-and-mitigation`: `edu-abandonment-and-mitigation-pa`, Absent, battery PA-G3-09 (related: 68 P.S. § 250.505a(b)(5))
- `cure-and-eviction-grounds`: `edu-cure-and-eviction-grounds-pa`, Present, 68 P.S. § 250.501(a)
- `nonpayment-notice`: `edu-nonpayment-notice-pa`, Present, 68 P.S. § 250.501(b)
- `rent-demand-bar`: `edu-rent-demand-bar-pa`, Present, 35 P.S. § 1700-1
- `notice-to-vacate-additional-terms`: `edu-notice-to-vacate-additional-terms-pa`, Absent, battery PA-G2-15 (related: 68 P.S. § 250.505a(f))
- `cold-weather-vacate-notice`: `cold-weather-vacate-notice-wy`, tagged, battery PA-G3-18
- `cold-weather-vacate-notice`: `edu-no-cold-weather-vacate-notice-pa`, Absent, battery PA-G3-18
- `eviction-hardship-stay`: `edu-eviction-hardship-stay-pa`, Present, 51 Pa.C.S. § 7312(a)
- `eviction-service-party`: `edu-eviction-service-party-pa`, Absent, battery PA-G3-20 (related: Pa.R.Civ.P.M.D.J. 506)
- `expedited-criminal-eviction`: `edu-expedited-criminal-eviction-pa`, Present, 68 P.S. § 250.501(d)
- `possession-bond`: `edu-no-possession-bond-pa`, Absent, battery PA-G3-21 (related: Pa.R.Civ.P.M.D.J. 1008)
- `post-eviction-property`: `edu-post-eviction-property-pa`, Present, 68 P.S. § 250.505a(b)(3)
- `rent-into-court-counterclaim`: `edu-rent-into-court-pa`, Present, 68 P.S. § 250.513(a)
- `unauthorized-occupant-removal`: `edu-unauthorized-occupant-removal-pa`, Present, 68 P.S. § 250.102
- `trespass-notice`: `edu-trespass-notice-pa`, Present, 18 Pa.C.S. § 3503(b)(1)(i)
- `tenancy-at-will`: `edu-tenancy-at-will-pa`, Present, 68 P.S. § 250.202
- `seasonal-tenancy`: `edu-no-seasonal-tenancy-rule-pa`, Absent, battery PA-G3-10
- `automatic-renewal`: `automatic-renewal-ks`, tagged, 68 P.S. § 250.501(b)
- `automatic-renewal`: `edu-no-automatic-renewal-rule-pa`, Absent, battery PA-G3-11
- `owner-move-in-reservation`: `owner-occupancy-termination-ar`, tagged, 68 P.S. § 250.501(b)
- `owner-move-in-reservation`: `edu-no-owner-move-in-rule-pa`, Absent, battery PA-G3-24
- `double-letting`: `edu-no-double-letting-rule-pa`, Absent, battery PA-G3-17
- `forfeiture-redemption`: `edu-forfeiture-redemption-pa`, Present, 68 P.S. § 250.503(c)
- `redemption`: `edu-redemption-pa`, Present, 68 P.S. § 250.503(c)
- `foreclosure`: `edu-foreclosure-tenants-pa`, Present, 68 P.S. § 250.304
- `foreclosure-disclosure`: `edu-no-foreclosure-disclosure-pa`, Absent, battery PA-G3-13
- `eminent-domain`: `edu-eminent-domain-pa`, Present, 26 Pa.C.S. § 507(a)
- `tenant-bankruptcy`: `edu-tenant-bankruptcy-pa`, Absent, battery PA-G3-14
- `social-security-defense`: `edu-no-benefit-delay-defense-pa`, Absent, battery PA-G3-15
- `minor-tenant-filing`: `edu-minor-tenants-pa`, Present, 23 Pa.C.S. § 5101(a)
- `entity-landlord-court-representation`: `edu-entity-landlord-representation-pa`, Present, Pa.R.Civ.P.M.D.J. 207
- `limitation-of-actions`: `edu-limitation-of-actions-pa`, Present, 42 Pa.C.S. § 5525(a)(3)
- `rent-control`: `edu-rent-control-pa`, Absent, battery PA-G4-01
- `landlord-registration`: `edu-landlord-registration-pa`, Present, 53 Pa.C.S. § 304(c)(5)
- `rental-inspection`: `rental-inspection-cooperation-mn`, tagged, 53 Pa.C.S. § 2962(c)(4)
- `rental-inspection`: `edu-rental-inspection-pa`, Absent, battery PA-G4-03
- `lead-safe-certification`: `edu-no-lead-safe-certification-pa`, Absent, battery PA-G4-04
- `health-district-rental-rules`: `edu-no-health-district-rental-rules-pa`, Absent, battery PA-G4-05
- `single-family-zone-lease-limit`: `edu-no-single-family-zone-lease-limit-pa`, Absent, battery PA-G4-06
- `good-cause-notice`: `edu-no-good-cause-notice-pa`, Absent, battery PA-G4-08
- `tenant-rights-statement`: `edu-no-tenant-rights-statement-pa`, Absent, battery PA-G4-08
- `rights-responsibilities-guide`: `edu-no-rights-guide-pa`, Absent, battery PA-G4-08
- `term-change-notice`: `edu-term-change-notice-pa`, Present, 1951 Act § 207(a)(2)
- `substandard-property-receivership`: `edu-substandard-property-receivership-pa`, Present, Abandoned and Blighted Property Conservatorship Act § 5(d)(1)
- `nonresident-owner-agent`: `edu-nonresident-owner-agent-pa`, Present, 42 Pa.C.S. § 5322(a)(5)
- `law-enforcement-cooperation`: `edu-law-enforcement-cooperation-pa`, Present, 53 Pa.C.S. § 304
- `confirmed-absences-outside-title`: `edu-confirmed-absences-outside-title-pa`, Absent, battery PA-G3-23, PA-G2-14, PA-G4-02
- `accessory-dwelling-unit`: `edu-no-adu-statute-pa`, Absent, battery PA-G4-07
- `lease-registration`: `edu-lease-registration-pa`, Present, 68 P.S. § 250.204
- `portfolio-thresholds`: `edu-portfolio-thresholds-pa`, Present, 68 P.S. § 250.501-A
- `tpa-notice`: `edu-tpa-notice-pa`, Present, 68 Pa.C.S. § 3410(b)
- `tpa-exemption-notice`: `edu-no-tpa-exemption-notice-pa`, Absent, battery PA-G4-14 (related: 68 Pa.C.S. § 3410(b))
- `tpa-sunset`: `edu-no-tpa-sunset-pa`, Absent, battery PA-G4-14
- `rent-escalation`: `rent-increase-midterm-ky`, tagged, 66 Pa.C.S. § 1531(c)
- `rent-escalation`: `edu-rent-escalation-pa`, Absent, battery PA-G4-01
- `tax-escalation`: `tax-insurance-escalation-la`, tagged, Fair Credit Extension Uniformity Act § 4(b)(6)(i)
- `tax-escalation`: `edu-tax-escalation-pa`, Absent, battery PA-G4-15
- `rent-tax`: `edu-rent-tax-pa`, Present, Tax Reform Code of 1971 § 209(a)(5)
- `property-tax-rent-disclosure`: `edu-no-property-tax-rent-statement-pa`, Absent (NEEDS_REVIEW), battery PA-G4-17
- `inspection-condemnation-disclosure`: `edu-no-inspection-condemnation-disclosure-pa`, Absent, battery PA-G4-18
- `condemned-premises-rent-bar`: `edu-condemned-premises-rent-bar-pa`, Present, 35 P.S. § 1700-1
- `certificate-of-occupancy-disclosure`: `edu-no-certificate-of-occupancy-disclosure-pa`, Absent, battery PA-G4-18
- `sanitary-code-variance`: `edu-no-code-variance-notice-pa`, Absent, battery PA-G4-19
- `frozen-standard-incorporation`: `edu-code-editions-pa`, Present, Pennsylvania Construction Code Act § 104(a)
- `municipal-utility-lien`: `edu-municipal-utility-lien-pa`, Present, 53 Pa.C.S. § 5607(d)(10)
- `special-district-representation`: `edu-no-special-district-statement-pa`, Absent, battery PA-G4-21
- `confirmed-absences-habitability`: `edu-confirmed-absences-habitability-pa`, Absent, battery PA-G5-01
- `habitability-materiality`: `edu-no-habitability-materiality-rule-pa`, Absent, battery PA-G5-01
- `habitability-presumption`: `edu-no-habitability-presumption-pa`, Absent, battery PA-G5-32
- `habitability-statement`: `edu-no-habitability-statement-pa`, Absent, battery PA-G5-01
- `heating`: `edu-no-heating-statute-pa`, Absent, battery PA-G5-02
- `fire-code-standard`: `edu-fire-code-standard-pa`, Present, Pennsylvania Construction Code Act § 503(b)
- `fire-sprinkler-duty`: `edu-no-fire-sprinkler-duty-pa`, Absent, battery PA-G5-03 (related: Pennsylvania Construction Code Act § 901(g)(1))
- `sprinkler-disclosure`: `edu-no-sprinkler-disclosure-pa`, Absent, battery PA-G5-03
- `security-devices`: `edu-no-security-devices-statute-pa`, Absent, battery PA-G5-04
- `smart-access`: `edu-no-smart-access-statute-pa`, Absent, battery PA-G5-05
- `key-control-policy`: `edu-no-key-control-rule-pa`, Absent, battery PA-G5-06
- `window-guards`: `edu-no-window-guard-rule-pa`, Absent, battery PA-G5-07
- `water-heater-temperature`: `edu-no-water-heater-rule-pa`, Absent, battery PA-G5-08
- `steam-radiator-covers`: `edu-no-radiator-cover-rule-pa`, Absent, battery PA-G5-08
- `stove-refrigerator`: `edu-no-appliance-duty-pa`, Absent, battery PA-G5-08
- `pool-safety`: `edu-no-pool-safety-rule-pa`, Absent, battery PA-G5-09
- `balcony-inspection`: `edu-no-balcony-inspection-pa`, Absent, battery PA-G5-10
- `common-area-lighting`: `edu-common-area-lighting-pa`, Present, 68 P.S. § 250.502-A
- `asbestos-hazards`: `edu-no-asbestos-tenant-notice-pa`, Absent, battery PA-G5-12
- `defective-drywall-disclosure`: `edu-no-drywall-disclosure-pa`, Absent, battery PA-G5-13
- `hazardous-contamination-disclosure`: `edu-no-contamination-lease-disclosure-pa`, Absent, battery PA-G5-14 (related: 27 Pa.C.S. § 6505(a))
- `lead-state-notices`: `edu-no-state-lead-notices-pa`, Absent, battery PA-G5-15
- `private-well-testing`: `edu-no-private-well-testing-pa`, Absent, battery PA-G5-16
- `bed-bug-cooperation`: `pest-cooperation-pr`, tagged, battery PA-G5-17
- `bed-bug-cooperation`: `edu-bed-bug-cooperation-pa`, Absent, battery PA-G5-17
- `pest-control-notice`: `edu-no-pest-control-notice-pa`, Absent, battery PA-G5-17
- `portable-cooling-device`: `edu-no-cooling-device-right-pa`, Absent, battery PA-G5-18
- `maintenance-duty-shift`: `edu-maintenance-duty-shift-pa`, Absent, battery PA-G5-19
- `promises-to-repair`: `edu-promises-to-repair-pa`, Absent, battery PA-G5-19 (related: 73 P.S. § 201-2(4)(xiv))
- `repair-notice`: `edu-repair-notice-pa`, Absent, battery PA-G5-20
- `designated-repairer`: `edu-no-designated-repairer-rule-pa`, Absent, battery PA-G5-20
- `tenant-repair-agreement`: `tenant-repair-agreement-hi`, tagged, Fair Credit Extension Uniformity Act § 4(b)(6)(i)
- `tenant-repair-agreement`: `edu-tenant-repair-agreement-pa`, Absent, battery PA-G5-19
- `repair-escrow-exemption-notice`: `edu-no-repair-escrow-exemption-pa`, Absent, battery PA-G5-20
- `alt-housing`: `edu-no-alternate-housing-duty-pa`, Absent, battery PA-G5-21
- `disaster-duties`: `edu-no-disaster-tenancy-rule-pa`, Absent, battery PA-G5-22
- `disaster-displaced-guests`: `edu-no-disaster-guest-rule-pa`, Absent, battery PA-G5-22
- `shutdown-rent-protection`: `edu-no-shutdown-rent-rule-pa`, Absent, battery PA-G5-22
- `subsidy-habitability-proration`: `edu-subsidy-habitability-pa`, Absent, battery PA-G5-23
- `subsidized-inspection-refusal`: `edu-subsidized-inspection-pa`, Absent, battery PA-G5-23
- `nuisance`: `edu-nuisance-pa`, Present, 42 Pa.C.S. § 8383
- `prop65-rental-warning`: `edu-no-chemical-warning-rule-pa`, Absent, battery PA-G5-26
- `ordnance-demolition-meter-disclosures`: `edu-no-ordnance-demolition-meter-disclosure-pa`, Absent, battery PA-G5-27
- `military-air-zone-disclosure`: `edu-no-military-zone-disclosure-pa`, Absent, battery PA-G5-28
- `shoreline-access-disclosure`: `edu-no-shoreline-disclosure-pa`, Absent, battery PA-G5-29
- `stigmatized-property`: `edu-no-stigmatized-property-rule-pa`, Absent, battery PA-G5-30
- `sex-offender-disclosure`: `edu-no-sex-offender-disclosure-pa`, Absent, battery PA-G5-31 (related: 42 Pa.C.S. § 9799.28(a))
- `sex-offender-occupancy`: `edu-sex-offender-occupancy-pa`, Present, 42 Pa.C.S. § 9799.25(f)(1)
- `sfr-occupancy-disclosure`: `edu-no-sfr-occupancy-disclosure-pa`, Absent, battery PA-G5-32
- `electric-submetering-disclosure`: `edu-utility-resale-pa`, Present, 66 Pa.C.S. § 1313
- `energy-data-release`: `edu-no-energy-data-rule-pa`, Absent, battery PA-G6-02
- `meter-conservation-charge`: `edu-meter-charges-pa`, Absent, battery PA-G6-02, PA-G6-01 (related: 66 Pa.C.S. § 1313)
- `utility-allowance-cap`: `edu-utility-rebilling-cap-pa`, Present, 66 Pa.C.S. § 1313
- `utility-apportionment`: `edu-utility-apportionment-pa`, Absent, battery PA-G6-01
- `utility-disclosure-attachment`: `edu-no-utility-disclosure-attachment-pa`, Absent, battery PA-G6-01
- `utility-disconnection-notice-authorization`: `edu-utility-disconnection-notice-pa`, Absent, battery PA-G6-03
- `utility-interruption-submeter`: `edu-no-submeter-interruption-rule-pa`, Absent, battery PA-G6-01
- `utility-shutoff-statute`: `edu-utility-shutoff-statute-pa`, Present, 66 Pa.C.S. §§ 1523
- `utility-submetering-disclosure`: `edu-no-submetering-disclosure-pa`, Absent, battery PA-G6-01 (related: 66 Pa.C.S. § 1313)
- `utility-transfer`: `edu-no-utility-transfer-rule-pa`, Absent, battery PA-G6-04
- `ev-charging-end-of-tenancy`: `edu-no-ev-charging-end-rule-pa`, Absent, battery PA-G6-05
- `ev-charging-requirements`: `edu-no-ev-charging-requirements-pa`, Absent, battery PA-G6-05
- `ev-charging-shared-area`: `edu-no-shared-ev-charging-rule-pa`, Absent, battery PA-G6-05
- `portable-solar`: `edu-no-portable-solar-right-pa`, Absent, battery PA-G6-06
- `telecom-access`: `edu-telecom-access-pa`, Present, 68 P.S. § 250.502-B
- `recycling-notice`: `edu-recycling-pa`, Present, Recycling and Waste Reduction Act § 1501
- `unbundled-parking`: `parking-disclosure-pa` (clause), Present, 1951 Act § 207(a)(1)
- `unbundled-parking`: `edu-parking-disclosure-pa`, Present, 1951 Act § 207(a)(1)
- `parking-rules-notice`: `edu-parking-rules-notice-pa`, Present, 1951 Act § 207(a)(2)
- `disability-accommodation`: `edu-disability-accommodation-pa`, Present, 43 P.S. § 955(h)(3.2)
- `service-animal-denial-penalty`: `edu-service-animal-denial-pa`, Present, 43 P.S. § 955(h)(1)
- `service-animal-misrepresentation`: `edu-service-animal-misrepresentation-pa`, Present, Assistance and Service Animal Integrity Act § 5(a)(1)
- `pet-eviction-fact-sheet`: `edu-no-pet-fact-sheet-pa`, Absent, battery PA-G7-03
- `animal-care-access`: `animal-care-access-vi`, tagged, battery PA-G7-03
- `animal-care-access`: `edu-animal-care-access-pa`, Absent, battery PA-G7-03
- `protected-class-inquiry-ban`: `edu-protected-class-inquiry-ban-pa`, Present, 43 P.S. § 955(h)(6)
- `immigration-status`: `edu-immigration-status-pa`, Absent, battery PA-G7-04
- `children-occupancy`: `edu-children-occupancy-pa`, Present, 43 P.S. § 955(h)(1)
- `tenant-screening`: `edu-tenant-screening-pa`, Present, 18 Pa.C.S. § 9122.5(a.1)
- `employee-screening`: `edu-no-employee-screening-rule-pa`, Absent, battery PA-G5-06
- `tenant-confidential-information`: `edu-tenant-confidential-information-pa`, Present, Breach of Personal Information Notification Act § 3(a)
- `tenant-records`: `edu-tenant-records-pa`, Present, battery PA-G7-06
- `rent-reporting`: `edu-no-rent-reporting-rule-pa`, Absent, battery PA-G7-06
- `tenant-right-to-organize`: `edu-tenant-right-to-organize-pa`, Present, 68 P.S. § 250.205
- `political-access`: `edu-no-political-access-rule-pa`, Absent, battery PA-G7-07
- `religious-cultural-display`: `edu-no-religious-display-rule-pa`, Absent, battery PA-G7-08
- `tenant-display-rights`: `edu-no-tenant-display-rights-pa`, Absent, battery PA-G7-08
- `firearms`: `edu-firearms-pa`, Absent, battery PA-G7-09
- `cannabis`: `cannabis-restrictions-ak`, tagged, Medical Marijuana Act § 304(b)(1)
- `cannabis`: `edu-cannabis-pa`, Present, Medical Marijuana Act § 304(b)(1)
- `home-business`: `edu-home-business-pa`, Present, Pennsylvania Municipalities Planning Code § 603(l)
- `family-child-care`: `edu-no-family-child-care-right-pa`, Absent, battery PA-G7-11
- `waterbed`: `waterbed-mn`, tagged, 68 P.S. § 250.512(a)
- `waterbed`: `edu-waterbed-pa`, Absent, battery PA-G7-12
- `tenant-insurance-claims`: `edu-no-tenant-insurance-claim-rule-pa`, Absent, battery PA-G7-12
- `renters-insurance-rules`: `edu-renters-insurance-rules-pa`, Absent, battery PA-G7-12
- `landlord-liability-insurance`: `edu-no-landlord-insurance-mandate-pa`, Absent, battery PA-G7-12
- `student-housing`: `edu-no-student-housing-rule-pa`, Absent, battery PA-G7-13
- `senior-housing-work-card`: `edu-no-senior-housing-staff-rule-pa`, Absent, battery PA-G7-13
- `tenant-employee-housing`: `edu-employee-housing-pa`, Absent, battery PA-G7-14
- `veterans-incentive`: `edu-no-veterans-incentive-pa`, Absent, battery PA-G7-15
- `translation-duty`: `edu-no-translation-duty-pa`, Absent, battery PA-G7-15
- `foreign-ownership`: `edu-foreign-ownership-pa`, Present, battery PA-G7-16
- `drug-free-housing-addendum`: `edu-drug-free-addendum-pa`, Absent, battery PA-G7-18
- `farmland-hunting-rights`: `edu-farmland-hunting-pa`, Absent, battery PA-G7-17
- `usufructuary-lessor`: `edu-no-usufruct-pa`, Absent, battery PA-G7-17
- `communal-land-lease-approval`: `edu-no-communal-land-approval-pa`, Absent, battery PA-G7-17
- `actual-notice-method`: `edu-actual-notice-method-pa`, Present, 68 P.S. § 250.501(f)
- `adverse-proceeding-notice`: `edu-no-adverse-proceeding-notice-pa`, Absent, battery PA-G8-02
- `appliances-excluded`: `appliances-excluded-la`, tagged, battery PA-G5-08
- `furnishings-included`: `furnishings-included-la`, tagged, 68 P.S. § 250.512(a)
- `emergency-contact`: `emergency-contact-co`, tagged, battery PA-G8-10
- `extended-absence-notice`: `extended-absence-notice-ks`, tagged, 68 P.S. § 250.505a(b)(5)
- `guarantor-renewal`: `guaranty-as`, tagged, 73 P.S. § 2205
- `lease-copy`: `lease-copy-receipt-hi`, tagged, battery PA-G8-03
- `lease-notice-initial-requirement`: `edu-no-initialing-requirement-pa`, Absent, battery PA-G8-08
- `lease-term-limitation`: `edu-lease-term-formalities-pa`, Present, 68 P.S. § 250.202
- `lease-type-parity`: `edu-no-lease-type-parity-pa`, Absent, battery PA-G8-05
- `lease-type-size`: `edu-no-lease-type-size-pa`, Absent, battery PA-G8-05
- `statute-of-frauds-lease-term`: `edu-statute-of-frauds-lease-pa`, Present, 68 P.S. § 250.202
- `written-notice-required`: `edu-written-notice-required-pa`, Present, 68 P.S. § 250.501(a)
- `informal-dispute-resolution`: `informal-dispute-resolution-or`, tagged, 68 P.S. § 250.513
- `other-landlord-facilities`: `edu-no-facility-list-pa`, Absent, battery PA-G8-10
- `periodic-services-entry`: `scheduled-services-entry-la`, tagged, battery PA-G8-10
- `purpose-limitation`: `edu-purpose-limitation-pa`, Absent, battery PA-G8-11
- `rent-installments`: `rent-installments-or`, tagged, 68 P.S. § 250.503(c)
- `rules-regulations`: `rules-wi`, tagged, 66 Pa.C.S. § 1531(c)
- `tenant-portal`: `tenant-portal-mn`, tagged, Fair Credit Extension Uniformity Act § 4(b)(6)(i)
- `tenant-statutory-duties`: `edu-tenant-statutory-duties-pa`, Present, 68 P.S. § 250.503-A
- `truth-in-renting`: `edu-no-truth-in-renting-pa`, Absent, battery PA-G8-08
- `inspection-notice-penalty`: `edu-inspection-notice-penalty-pa`, Present, 68 P.S. § 250.512(b)
- `construction-liens`: `edu-construction-liens-pa`, Present, Mechanics' Lien Law of 1963 § 303(d)
- `construction-liens`: `no-liens-ar`, tagged, Mechanics' Lien Law of 1963 § 303(d)
- `hoa`: `edu-hoa-pa`, Present, 68 Pa.C.S. § 3302(a)(11)(i)
- `hoa`: `association-approval-la`, tagged, 68 P.S. § 250.511a
- `association-obligations-disclosure`: `edu-no-association-lease-disclosure-pa`, Absent, battery PA-G8-09
- `lease-content-requirements`: `edu-lease-content-requirements-pa`, Present, 73 P.S. § 2205(d)
- `required-disclosures`: `edu-required-disclosures-pa`, Present, 68 Pa.C.S. § 7103(a)
- `optional-lease-terms`: `edu-lease-option-disclosure-pa`, Present, 68 Pa.C.S. § 7103(a)
- `prohibited-acts-renter`: `prohibited-acts-renter-wy`, tagged, 68 P.S. § 250.503-A
- `confirmed-absences-misc`: `edu-confirmed-absences-misc-pa`, Absent, battery PA-G8-03 (related: 68 P.S. § 250.205)

### §3 Batteries

Every absence battery ran a nonsense control ("zqxvbnmwt") and a must-hit control ("landlord") in the same call over the same corpus, and at least one known positive (a real saved unit where one exists, otherwise a synthetic sentence in the statute's style) against each pattern. A battery whose positive failed was fixed and rerun under the same id before any row cited it (PA-G1-05 and PA-G1-13 in batch 1). Batteries that also ran the General Assembly keyword search ran its control and a positive query ("security deposit" AND residential) in the same call; batteries without a keyword search are regex-only, and their entries below show no keyword line.

- **PA-G1-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives 26 205 passed, synthetic passed, synthetic passed. Patterns: "habitab\w*" 3; "unfit for (human )?habitation" 6; "(waive\w*|waiver)[^.]{0,150}(habitab\w*|repair\w*|maintenance)" 2. Keyword search (control 0): [habitability AND tenant] 8; ["warranty of habitability"] 0; ["fit for human habitation" AND lease] 4.
- **PA-G1-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives lta 504-A passed, lta 511.1 passed, synthetic passed. Patterns: "(may|shall|can) not be waived" 7; "(attempted )?waiver[^.]{0,120}(void|unenforceable)" 4; "(void|unenforceable)[^.]{0,120}waiver" 1. Keyword search (control 0): [waiver AND tenant AND void] 63; ["may not be waived" AND tenant] 18.
- **PA-G1-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "(show|exhibit)\w*[^.]{0,120}(prospective|purchaser|buyer)[^.]{0,120}(tenant|lessee|dwelling|premises)" 0; "(enter|entry)[^.]{0,100}(dwelling unit|leased premises|rental unit|demised premises)" 0. Keyword search (control 0): ["right of entry" AND tenant AND notice] 12; [landlord AND enter AND "dwelling unit" AND notice] 9.
- **PA-G1-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "smok\w*[^.]{0,200}(apartment|multi-?unit|multifamily|dwelling unit|residential|tenant|lessee|landlord)" 1; "(apartment|multi-?unit|multifamily|dwelling unit|residential|tenant|lessee|landlord)[^.]{0,200}smok\w*" 0. Keyword search (control 0): [smoking AND apartment] 8; [smoking AND tenant AND lease] 29.
- **PA-G1-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "\bjury\b[^.]{0,200}(waive\w*|waiver)" 7; "(waive\w*|waiver)[^.]{0,200}\bjury\b" 5. Keyword search (control 0): ["jury trial" AND lease] 15; [jury AND waive AND tenant] 37.
- **PA-G1-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed, asaia 4 passed. Patterns: "(exculpat\w*|hold harmless|indemnif\w*)[^.]{0,200}(\blease\b|\btenant|\blessee|\blandlord|\blessor)" 1; "(\blease\b|\btenant|\blessee|\blandlord|\blessor)[^.]{0,200}(exculpat\w*|hold harmless|indemnif\w*)" 1; "(landlord|lessor)[^.]{0,80}(shall|will) not be liable" 2. Keyword search (control 0): [exculpatory AND lease] 6; ["hold harmless" AND tenant AND landlord] 0; [indemnify AND tenant AND landlord AND lease] 0.
- **PA-G1-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives 13 2302 passed. Patterns: "unconscionab\w*" 68. Keyword search (control 0): [unconscionable AND lease AND tenant] 6.
- **PA-G1-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives lta 505.1 passed, synthetic passed. Patterns: "(attorney'?s?'? fees?|counsel fees?)[^.]{0,200}(\blease\b|\btenant|\blessee|\blandlord|\blessor|\brent\b)" 1; "(\blease\b|\btenant|\blessee|\blandlord|\blessor|\brent\b)[^.]{0,200}(attorney'?s?'? fees?|counsel fees?)" 5. Keyword search (control 0): ["attorney fees" AND lease AND tenant] 39; ["attorney's fees" AND landlord AND tenant] 6.
- **PA-G1-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, fceua 4 passed. Patterns: "(collection (fee|cost|charge|expense)s?|costs? of collection)" 42; "(fee|charge|expense)[^.]{0,60}incidental to the principal obligation" 2. Keyword search (control 0): ["costs of collection" AND tenant] 5; ["collection fee" AND lease] 3.
- **PA-G1-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "(fee|charge)s?[^.]{0,120}(notice to quit|eviction|evict\w*|serv(ice|ing) of (a |the )?notice|landlord and tenant (complaint|action))" 0; "(notice to quit|eviction|evict\w*)[^.]{0,120}(fee|charge)s?" 0. Keyword search (control 0): [eviction AND fee AND lease AND tenant] 18; ["notice to quit" AND fee] 9.
- **PA-G1-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives 66 1532 passed, synthetic passed. Patterns: "liquidated damages" 26; "\bpenalt(y|ies)\b[^.]{0,80}(contract|lease|agreement)" 17. Keyword search (control 0): ["liquidated damages" AND lease AND tenant] 9; ["liquidated damages" AND landlord] 7.
- **PA-G1-12** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed, lta 505-A passed. Patterns: "(accept\w*|receipt|receiv\w*)[^.]{0,120}\brent\b[^.]{0,150}(waive\w*|waiver)" 0; "(waive\w*|waiver)[^.]{0,150}(accept\w*|receipt|receiv\w*)[^.]{0,120}\brent\b" 0; "shall not (act as|operate as|constitute|be deemed) a waiver" 7. Keyword search (control 0): ["acceptance of rent" AND waiver] 0; ["accept rent" AND tenant AND waive] 0; ["partial payment" AND tenant AND eviction] 0.
- **PA-G1-13** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed, lta 504-A passed. Patterns: "(\blease\b|rental agreement)[^.]{0,200}(\bvoid\b|unenforceable|may not be waived|shall not (contain|include))" 1; "(\bvoid\b|unenforceable)[^.]{0,200}(\blease\b|rental agreement)" 2; "(may not be waived|shall be void|is void|unenforceable)[^.]{0,200}(\blease\b|rental agreement)" 2. Keyword search (control 0): [lease AND "shall be void" AND tenant] 41; ["rental agreement" AND void AND tenant] 6.
- **PA-G1-14** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed. Patterns: "homestead" 85. Keyword search (control 0): [homestead AND exemption AND waive] 11; [homestead AND tenant] 39.
- **PA-G1-15** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "(fire|casualty|destroy\w*|untenantable)[^.]{0,200}(\blease\b|\btenant|\blessee)[^.]{0,200}(terminat\w*|surrender\w*|abate\w*|rent\b)" 1; "(\blease\b|\btenant|\blessee)[^.]{0,200}(fire|casualty|destroy\w*|untenantable)" 6. Keyword search (control 0): ["destroyed by fire" AND tenant] 0; [casualty AND lease AND tenant AND surrender] 3; [untenantable AND lease] 3.
- **PA-G1-16** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "arbitrat\w*[^.]{0,200}(\blease\b|\btenant|\blessee|\blandlord|residential)" 1; "(\blease\b|\btenant|\blessee|\blandlord|residential)[^.]{0,200}arbitrat\w*" 5. Keyword search (control 0): [arbitration AND lease AND tenant] 38; [arbitration AND landlord AND tenant] 15.
- **PA-G1-17** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "Unfair Trade Practices and Consumer Protection Law[^.]{0,300}(\blease\b|\btenant|\blessee|\blandlord|rent\b)" 1; "(\blease\b|\btenant|\blessee|\blandlord|rent\b)[^.]{0,300}Unfair Trade Practices and Consumer Protection Law" 1. Keyword search (control 0): ["Unfair Trade Practices" AND tenant AND landlord] 0; ["consumer protection" AND lease AND tenant] 10.
- **PA-G1-18** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 336; positives synthetic passed, synthetic passed. Patterns: "(knowingly|willfully|wilfully)[^.]{0,150}(\blease\b|rental agreement)[^.]{0,150}(provision|term|clause)" 1; "(\blease\b|rental agreement)[^.]{0,150}(provision|term|clause)[^.]{0,150}(knowingly|willfully|wilfully)" 0. Keyword search (control 0): [knowingly AND lease AND provision AND tenant] 57; ["prohibited provision" AND lease] 3.
- **PA-G2-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(carpet\w*|clean\w*)[^.]{0,150}(security deposit|escrow|\btenant|\blessee)" 0; "(security deposit|escrow|\btenant|\blessee)[^.]{0,150}(carpet\w*|professional(ly)? clean\w*)" 0. Keyword search (control 0): [carpet AND "security deposit"] 0; [cleaning AND "security deposit" AND tenant] 0.
- **PA-G2-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(security deposit|rental deposit|rent deposit)[^.]{0,200}(unclaimed|abandoned|escheat\w*)" 0; "(unclaimed|abandoned|escheat\w*)[^.]{0,200}(security deposit|rental deposit|rent deposit|\btenant|\blessee|\blandlord)" 8. Keyword search (control 0): ["security deposit" AND unclaimed] 0; [unclaimed AND landlord AND tenant AND deposit] 0.
- **PA-G2-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(security deposit|escrow|deposit)[^.]{0,150}install\w*" 3; "install\w*[^.]{0,150}(security deposit|escrow funds|deposited in escrow)" 0. Keyword search (control 0): ["security deposit" AND installment] 3.
- **PA-G2-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(last|final) month\W{0,3}s? rent" 0; "(prepaid|advance(d)?) rent|rent (paid )?in advance" 2. Keyword search (control 0): ["last month" AND rent AND tenant] 0; ["rent in advance" AND tenant] 0.
- **PA-G2-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives lta 512 passed, lta 512 passed. Patterns: "(forwarding|new) address" 24; "surrender and acceptance" 5. Keyword search (control 0): ["forwarding address" AND tenant] 9.
- **PA-G2-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "standards?[^.]{0,120}(security deposit|escrow|deposit amount)" 0; "(security deposit|escrow funds)[^.]{0,120}(calculat\w*|standards?|criteria)" 0. Keyword search (control 0): ["security deposit" AND standards] 0.
- **PA-G2-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, lta 511.3 passed. Patterns: "non-?refundable" 39; "(fee|charge)s?[^.]{0,120}(in lieu of|instead of)[^.]{0,80}(security deposit|escrow|deposit)" 1; "(in lieu of|instead of)[^.]{0,80}(security deposit|escrow|depositing)" 4. Keyword search (control 0): [nonrefundable AND tenant AND lease] 6; ["in lieu of" AND "security deposit"] 3.
- **PA-G2-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, lta 208 passed. Patterns: "(holding|earnest|good faith) (deposit|money)" 0; "application fee|rental application" 69. Keyword search (control 0): ["holding deposit"] 0; ["application fee" AND tenant] 3.
- **PA-G2-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed. Patterns: "(deposit|escrow)[^.]{0,200}(within|not later than|no later than) (\d+|ten|fifteen|twenty|thirty|five) (\(\d+\) )?days[^.]{0,120}(abandon\w*|surrender\w*|evict\w*|death)" 1. Keyword search (control 0): ["security deposit" AND abandoned AND tenant] 0.
- **PA-G2-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, lta 207 passed. Patterns: "(fee|fees|charge|charges)[^.]{0,150}(stated|disclosed|set forth|listed|specified)[^.]{0,100}(\blease\b|rental agreement)" 0; "(state|disclose|list|set forth)\w*[^.]{0,40}in (a|the) (\blease\b|rental agreement)[^.]{0,200}(fee|charge)" 2. Keyword search (control 0): [fee AND lease AND disclose AND tenant] 64; ["total monthly" AND rent] 0.
- **PA-G2-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed. Patterns: "(fee|charge)s?[^.]{0,150}(not (provided|rendered|furnished|supplied)|services? (that|which) (is|are) not)" 1. Keyword search (control 0): [fee AND service AND "not provided" AND tenant] 126.
- **PA-G2-12** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "\blate (fee|charge|payment charge|penalty)s?\b" 64; "(charge|fee|penalty)[^.]{0,80}(late|delinquent) (rent|payment)" 5. Keyword search (control 0): ["late fee" AND rent] 10; ["late charge" AND tenant] 0.
- **PA-G2-13** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "\bpets?\b[^.]{0,150}(deposit|fee|rent)\b" 0; "(deposit|fee)s?[^.]{0,150}\b(pets?|animals?)\b[^.]{0,80}(\btenant|\blessee|dwelling|rental)" 0. Keyword search (control 0): [pet AND deposit AND tenant] 9; ["assistance animal" AND fee] 0.
- **PA-G2-14** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(receive|collect)\w*[^.]{0,40}\brent\b[^.]{0,200}(repair|maintain|maintenance|habitab\w*)" 0; "(repair|maintain|maintenance)[^.]{0,200}(receive|collect)\w*[^.]{0,40}\brent\b" 0. Keyword search (control 0): [rent AND "duty to maintain" AND landlord] 0.
- **PA-G2-15** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "lock\w*[^.]{0,40}\bout\b|lockout|chang\w* (the )?locks?" 1; "(exclude|remove|evict)\w*[^.]{0,60}(\btenant|\blessee|occupant)[^.]{0,120}(without|other than)[^.]{0,60}(court|judicial|process|order)" 0. Keyword search (control 0): [lockout AND tenant] 2; ["change the locks" AND tenant] 0.
- **PA-G2-16** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(utility|utilities|water|sewer|gas|electric\w*)[^.]{0,100}deposits?\b[^.]{0,150}(\btenant|\blessee|residential|customer|landlord)" 0; "deposits?\b[^.]{0,100}(utility|utilities)[^.]{0,150}(\btenant|\blessee|residential|customer)" 0. Keyword search (control 0): [utility AND deposit AND tenant] 73; ["utility deposit"] 0.
- **PA-G2-17** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "rental (license|licensing|permit|registration|inspection)[^.]{0,60}(fee|charge)" 0; "(fee|charge)[^.]{0,60}rental (license|licensing|permit|registration|inspection)" 0. Keyword search (control 0): ["rental license" AND fee] 0; ["rental inspection" AND fee] 0.
- **PA-G2-18** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(fine|fines|penalt\w*|costs? of abatement)[^.]{0,150}(\btenant|\blessee|occupant)[^.]{0,150}(owner|landlord)" 0; "(owner|landlord)[^.]{0,150}(fine|fines|penalt\w*)[^.]{0,100}(\btenant|\blessee|occupant)" 0. Keyword search (control 0): [fine AND tenant AND owner AND ordinance AND violation] 44.
- **PA-G2-19** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(tamper\w*|remov\w*|disabl\w*|disconnect\w*)[^.]{0,120}(alarm|detector)s?" 1; "(alarm|detector)s?[^.]{0,120}(tamper\w*|remov\w*|disabl\w*)" 1. Keyword search (control 0): ["smoke detector" AND tenant] 0; ["carbon monoxide" AND tenant AND alarm] 1.
- **PA-G2-20** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(subsid\w*|housing assistance|section 8|voucher|housing choice)[^.]{0,200}\blate\b" 0; "\blate\b[^.]{0,120}(subsid\w*|housing assistance|voucher)" 0. Keyword search (control 0): [subsidy AND "late fee"] 0; ["housing assistance" AND tenant AND late] 0.
- **PA-G2-21** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "\bconcessions?\b[^.]{0,120}(\brent\b|\btenant|\blessee|\blease\b)" 5; "free rent|rent[- ]free|reduced rent" 0. Keyword search (control 0): [concession AND rent AND tenant] 11; ["free rent"] 0.
- **PA-G2-22** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, lipl 202 passed. Patterns: "\binterest\b[^.]{0,150}(unpaid rent|rent (due|owed|in arrears)|arrears of rent)" 1; "(unpaid rent|rent (due|owed|in arrears)|arrears of rent)[^.]{0,150}\binterest\b" 1; "legal rate of interest|lawful rate" 27. Keyword search (control 0): [interest AND "unpaid rent"] 0; ["legal rate of interest"] 40.
- **PA-G3-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(chang\w*|rekey\w*|re-key\w*|replac\w*)[^.]{0,60}locks?[^.]{0,200}(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)" 0; "(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)[^.]{0,200}(chang\w*|rekey\w*|replac\w*)[^.]{0,60}locks?" 0. Keyword search (control 0): ["domestic violence" AND locks AND tenant] 0; [abuse AND tenant AND "change the locks"] 0.
- **PA-G3-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)[^.]{0,200}(terminat\w*|end)[^.]{0,80}(\blease\b|tenancy|rental agreement)" 0; "(\blease\b|tenancy|rental agreement)[^.]{0,120}(terminat\w*)[^.]{0,200}(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)" 0. Keyword search (control 0): ["domestic violence" AND lease AND terminate] 3; ["victim of abuse" AND tenant] 10.
- **PA-G3-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives lta 513 passed, lta 505.1 passed. Patterns: "(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)[^.]{0,250}(\btenant|\blessee|\blandlord|evict\w*|rental|lease\b)" 19; "(\btenant|\blessee|\blandlord|evict\w*|lease\b)[^.]{0,250}(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)" 14. Keyword search (control 0): ["victim of domestic violence" AND landlord] 7.
- **PA-G3-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)[^.]{0,200}(security deposit|escrow)" 1; "(security deposit|escrow funds)[^.]{0,200}(domestic violence|victim of abuse|abuse|protection from abuse|sexual violence|stalking)" 0. Keyword search (control 0): ["security deposit" AND "domestic violence"] 0.
- **PA-G3-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(confidential\w*|disclos\w*)[^.]{0,200}(victim|abuse|domestic violence)[^.]{0,200}(landlord|\btenant|\blessee|rental|housing)" 1; "(landlord|\btenant|rental|housing)[^.]{0,200}(confidential\w*)[^.]{0,200}(victim|abuse|domestic violence)" 0. Keyword search (control 0): [confidential AND "domestic violence" AND landlord] 0; ["address confidentiality" AND tenant] 3.
- **PA-G3-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed. Patterns: "35 P\.S\. § 10181|act of October 7, 1976 \(P\.L\.1090, No\.218\)|Protection From Abuse Act" 3. Keyword search (control 0): ["Protection From Abuse Act"] 39.
- **PA-G3-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(terminat\w*|cancel\w*)[^.]{0,120}(\blease\b|rental agreement|tenancy)[^.]{0,200}(nursing (home|facility)|assisted living|personal care|disab\w*|infirm\w*|medical|incapacit\w*)" 0; "(nursing (home|facility)|assisted living|personal care home|infirm\w*)[^.]{0,200}(terminat\w*|cancel\w*)[^.]{0,80}(\blease\b|rental agreement|tenancy)" 0. Keyword search (control 0): ["nursing home" AND lease AND terminate AND tenant] 5; ["assisted living" AND lease AND tenant] 4.
- **PA-G3-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(terminat\w*|cancel\w*)[^.]{0,120}(\blease\b|rental agreement|tenancy)[^.]{0,200}(flood|disaster|emergency|environmental|contamina\w*|hazard\w*)" 0; "(flood|disaster|environmental|contamina\w*)[^.]{0,200}(terminat\w*|cancel\w*)[^.]{0,80}(\blease\b|rental agreement|tenancy)" 0. Keyword search (control 0): [disaster AND lease AND terminate AND tenant] 17.
- **PA-G3-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, lta 505.1 passed. Patterns: "(mitigat\w*)[^.]{0,200}(\blease\b|\btenant|\blessee|\brent\b|landlord|lessor)" 0; "\brelet(s|ting|ted)?\b|\bre-let\w*|\brerent\w*|\bre-rent\w*" 0; "(abandon\w*)[^.]{0,120}(premises|dwelling unit|leased|rental unit|tenancy)" 4. Keyword search (control 0): [mitigate AND landlord AND tenant] 3; [relet AND lease] 0.
- **PA-G3-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "\bseasonal\w*[^.]{0,150}(\blease\b|rental|\btenant|dwelling)" 0; "(vacation|summer|recreational|short-term)\s(rental|home|property|lodging)" 1. Keyword search (control 0): [seasonal AND lease AND tenant] 20; ["short-term rental"] 8.
- **PA-G3-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "automatic\w* renew\w*|auto-renew\w*|renew\w* automatic\w*" 4; "(renew\w*|extend\w*)[^.]{0,120}(\blease\b|rental agreement)[^.]{0,150}(unless|without)[^.]{0,80}notice" 0. Keyword search (control 0): ["automatic renewal"] 9; ["automatically renew" AND lease] 0.
- **PA-G3-12** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(\blease\b|leasehold|\btenant|\blessee)[^.]{0,200}(condemn\w*|taking|eminent domain)" 25; "(condemn\w*|eminent domain)[^.]{0,200}(\blease\b|leasehold|\btenant|\blessee)" 10. Keyword search (control 0): ["eminent domain" AND lease AND tenant] 56.
- **PA-G3-13** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "foreclos\w*[^.]{0,200}(\btenant|\blessee|rental|\blease\b)" 3; "(\btenant|\blessee|\blease\b)[^.]{0,200}foreclos\w*" 2. Keyword search (control 0): [foreclosure AND tenant AND notice] 39; [foreclosure AND lease AND disclose] 30.
- **PA-G3-14** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "bankrupt\w*[^.]{0,200}(\btenant|\blessee|evict\w*|possession)" 3; "(\btenant|\blessee|evict\w*)[^.]{0,200}bankrupt\w*" 0. Keyword search (control 0): [bankruptcy AND tenant AND eviction] 3.
- **PA-G3-15** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(social security|benefit|public assistance|voucher)[^.]{0,200}(evict\w*|possession|nonpayment|continuance)" 7; "(evict\w*|possession|nonpayment)[^.]{0,200}(social security|public assistance|voucher)" 2. Keyword search (control 0): ["social security" AND eviction] 0; ["public assistance" AND eviction AND tenant] 0.
- **PA-G3-16** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed. Patterns: "(minor|under 18|under the age of 18|under 21)[^.]{0,200}(\blease\b|rental agreement|\btenant|contract)" 25; "(\blease\b|rental agreement)[^.]{0,200}(minor\b|minors\b)" 3. Keyword search (control 0): [minor AND lease AND contract AND tenant] 39.
- **PA-G3-17** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed. Patterns: "(doubl\w*[^.]{0,40}(let\w*|rent\w*|leas\w*))|(same (premises|unit|room|dwelling)[^.]{0,120}(two|more than one|another) (persons|tenants|lessees))" 0. Keyword search (control 0): ["same premises" AND tenant AND lease] 16.
- **PA-G3-18** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "cold[- ]weather" 0; "freez(e|es|ing) (of |the )?(water )?pipes" 0; "(tenant|lessee).{0,120}(heat|temperature).{0,60}(maintain|minimum)" 0; "(extended|prolonged) absence" 0. Keyword search (control 0): ["cold weather" AND tenant] 0; ["extended absence" AND tenant] 0.
- **PA-G3-19** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "stay(ed|ing)? (of )?(the )?(execution|eviction|removal|order for possession|writ of possession)" 11; "postpone.{0,60}(eviction|removal|possession)" 1; "hardship.{0,120}(tenant|eviction|possession)" 2. Keyword search (control 0): [eviction AND hardship] 5; ["stay of execution" AND tenant] 11.
- **PA-G3-20** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives 23 6705 passed, synthetic passed, synthetic passed. Patterns: "agent (for|to receive) (the )?(purpose of receiving )?service of process" 26; "lease.{0,120}(designat|appoint|nam)\w*.{0,80}(service|receive notices?)" 0; "tenant.{0,80}designat\w*.{0,60}(agent|person).{0,60}(service|notice)" 0. Keyword search (control 0): [tenant AND "service of process" AND designate] 13.
- **PA-G3-21** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, synthetic passed, lta 511.3 passed. Patterns: "bond.{0,80}(possession|tenant|lessee|lease)" 94; "possession bond" 0; "confess\w*.{0,60}(possession|ejectment)" 0; "bond.{0,80}(landlord|lessor)|(landlord|lessor).{0,80}bond" 2. Keyword search (control 0): ["possession bond"] 0; [tenant AND bond AND possession] 88.
- **PA-G3-22** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(tenant|lessee|evict)\w*.{0,160}(pet|animal|dog|cat)s?.{0,80}(abandon|left|remain)" 2; "(tenant|lessee|evict)\w*.{0,160}(motor )?vehicles?.{0,60}(abandon|left behind|remain)" 0; "(writ|order) (of|for) possession.{0,200}(immun|not (be )?liable)" 0. Keyword search (control 0): [tenant AND abandoned AND animal] 42; [tenant AND abandoned AND vehicle] 53.
- **PA-G3-23** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, lta 501 passed. Patterns: "squatt\w*" 0; "(unauthorized|unlawful) occupan(t|cy)" 0; "(person|occupant)\W+who is not,? nor ever has been,? a tenant" 2. Keyword search (control 0): [squatter] 0; ["unauthorized occupant"] 0.
- **PA-G3-24** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "owner.{0,40}(occupancy|occupy|reside|move in).{0,80}(tenant|lease|terminat|evict)" 13; "(tenant|lease|terminat|evict)\w*.{0,80}owner.{0,40}(occupancy|occupy|move in)" 0; "(immediate )?family member.{0,80}(occupy|occupancy|reside).{0,80}(tenant|lease|unit|dwelling)" 0. Keyword search (control 0): ["owner occupancy" AND tenant] 0; ["just cause" AND eviction] 11.
- **PA-G3-25** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 357; positives 53 304 passed, synthetic passed, synthetic passed. Patterns: "expedit\w* (eviction|removal|possession)" 1; "(evict|remov|terminat)\w*.{0,80}(tenant|lease).{0,120}(violent|criminal activity|firearm|weapon|felony)" 0; "(tenant|lease).{0,80}(criminal activity|violent crime).{0,80}(evict|terminat|remov)" 0. Keyword search (control 0): ["criminal activity" AND eviction] 18; ["expedited eviction"] 75.
- **PA-G4-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "rent control" 0; "rent[- ]stabiliz" 0; "(regulat|limit|control|cap)\w*.{0,40}(the )?(amount of )?(residential )?rents?\b.{0,40}(charged|increase|landlord|tenant|dwelling)" 0; "rent increases?" 0. Keyword search (control 0): ["rent control"] 0.
- **PA-G4-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "rental (license|licens\w*|registration|permit)" 3; "regist\w*.{0,60}(landlords?|rental propert\w*|residential rental|rental units?)" 0; "(landlord|owner) licens" 0. Keyword search (control 0): ["rental registration"] 0; ["rental license"] 3.
- **PA-G4-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "inspect\w*.{0,80}rental (units?|propert\w*|dwellings?|housing)" 0; "rental (units?|propert\w*|dwellings?|housing).{0,80}inspect" 0; "administrative (search )?warrant" 5. Keyword search (control 0): ["rental inspection"] 0.
- **PA-G4-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "lead[- ](safe|free)" 0; "lead[- ]based paint" 0; "lead poison" 0. Keyword search (control 0): ["lead-safe" AND rental] 0; ["lead-based paint" AND tenant] 0.
- **PA-G4-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "health (district|department|officer|authority).{0,100}(rental|landlords?|tenants?|lessee)" 0; "(landlords?|tenants?).{0,100}health (district|department)" 0.
- **PA-G4-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "single[- ]family.{0,120}(rent|leas|tenant|owner[- ]occup)" 1; "owner[- ]occup\w*.{0,100}(zon|accessory|dwelling unit|lot)" 0.
- **PA-G4-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "accessory dwelling" 0; "accessory apartment" 0; "granny flat|in-law (suite|apartment|unit)" 0. Keyword search (control 0): ["accessory dwelling unit"] 0.
- **PA-G4-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "good cause" 179; "just cause" 15; "(tenant|renter)s?\W{0,2} (bill of )?rights? (handbook|guide|statement|pamphlet|brochure|summary)" 0; "rights and responsibilities.{0,60}(tenant|landlord|renter)" 4; "statement of (tenant|renter)" 0. Keyword search (control 0): ["tenant rights" AND statement] 0.
- **PA-G4-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, lta 207 passed. Patterns: "(chang|modif|amend)\w*.{0,60}(terms?|conditions?) of (the|a|any) (residential )?(lease|tenancy|rental agreement)" 0; "parking fee" 1.
- **PA-G4-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, abpca 2 passed. Patterns: "receiver\w*.{0,80}(residential|rental|dwelling|apartment|building)" 0; "conservator(ship)?.{0,80}(building|property|dwelling)" 24. Keyword search (control 0): [receivership AND tenant] 14.
- **PA-G4-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "(nonresident|non-resident|out[- ]of[- ]state|absentee) (owner|landlord|property owner|lessor)" 12; "(owner|landlord|lessor).{0,100}(agent|manager|representative).{0,100}resid\w* (within|in) (the|this|such)" 0. Keyword search (control 0): [nonresident AND landlord AND agent] 0.
- **PA-G4-12** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "crime[- ]free" 2; "(landlord|owner|lessor).{0,140}(police|law enforcement).{0,100}(cooperat|report|notif)" 7; "(police|law enforcement).{0,100}(access|enter).{0,60}(rental|dwelling unit|apartment)" 0. Keyword search (control 0): ["crime-free"] 3.
- **PA-G4-13** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(record|recording)\w*.{0,60}\bleases?\b" 15; "memorand\w* of lease" 0; "\bleases?\b.{0,60}(recorded|recordation)" 6. Keyword search (control 0): [lease AND "recorder of deeds"] 123.
- **PA-G4-14** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives 68 3410 passed, synthetic passed, synthetic passed. Patterns: "right of first (refusal|purchase|offer)" 6; "(tenants?|lessees?).{0,80}(opportunity|option|right) to (purchase|buy)" 6; "(sunset|expire|expiration|repeal)\w*.{0,60}(this (act|chapter|section)).{0,60}(tenant|landlord|lease)" 0. Keyword search (control 0): ["right of first refusal" AND tenant] 9.
- **PA-G4-15** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(tax|taxes).{0,80}(pass(ed)?[- ](on|through)|passthrough|pass-through).{0,60}(tenant|lessee|renter)" 0; "(increase|escalat)\w*.{0,60}(real estate|real property|property) tax\w*.{0,80}(tenant|lessee|rent)" 0; "(tenant|lessee|renter).{0,80}(share|portion|pro rata).{0,60}(real estate|property) tax" 0.
- **PA-G4-16** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "permanent resident" 24; ""?occupancy"?.{0,40}(hotel|room|lodging).{0,120}(thirty|30) (consecutive )?days" 7; "rental of real (estate|property)" 1. Keyword search (control 0): ["permanent resident" AND hotel] 87.
- **PA-G4-17** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "\brent certificate" 0; "\brent rebate" 9; "(portion|percent|share) of (the )?(gross )?rent.{0,80}(tax|taxes)" 0; "(claimant|renter).{0,80}(landlord|owner).{0,80}(statement|certif|verif)" 0. Keyword search (control 0): ["rent rebate"] 94; ["rent certificate"] 0.
- **PA-G4-18** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "certificate of (use and )?occupancy.{0,120}(rent|tenan|lease|dwelling|residential)" 2; "(condemn|placard)\w*.{0,100}(dwelling|unfit|occupan|residential|rental)" 4; "(unfit|uninhabitable).{0,100}(collect|rent|lease)" 1; "(order to vacate|vacate order)" 7. Keyword search (control 0): ["certificate of occupancy" AND tenant] 3.
- **PA-G4-19** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "variance.{0,100}(tenants?|lease|rental|landlord)" 0; "(exception|waiver).{0,60}(housing|sanitary|health) code" 0; "\b(19|20)\d\d edition" 13; "(code|standard).{0,40}as (amended|in effect|existing) (on|as of)" 3.
- **PA-G4-20** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(tenant|lessee|occupant).{0,160}(water|sewer|sewage|garbage|refuse|trash).{0,80}(lien|liens)" 0; "(lien|liens).{0,160}(tenant|lessee|occupant).{0,80}(water|sewer|sewage|garbage)" 0; "(owner|landlord).{0,120}not (be )?(liable|responsible).{0,80}(tenant|lessee).{0,60}(water|sewer|rental|bill)" 2. Keyword search (control 0): [tenant AND lien AND water] 69.
- **PA-G4-21** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "special (taxing|assessment|improvement|benefit) district" 0; "(neighborhood|business) improvement district" 15; "(disclos|notif)\w*.{0,80}(special|improvement|assessment) district" 0.
- **PA-G4-22** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "tax.{0,60}(on|upon) (the )?(rent|rental|leasing) of (real|residential|a dwelling|dwelling|an apartment)" 0; "(rent|rental) of (a )?(dwelling|residential|apartment|real property).{0,80}(taxable|subject to (the )?tax|exempt)" 0; "sales tax.{0,80}(rent|rental).{0,40}(dwelling|residential|apartment|real property)" 0.
- **PA-G5-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "habitab" 10; "fit (and|for) (human )?habitation.{0,80}(landlord|lessor|tenant|lease)" 2; "(landlord|lessor).{0,80}(maintain|keep).{0,60}(premises|dwelling).{0,40}(fit|habitable|good repair)" 0; "warranty of habitability" 0. Keyword search (control 0): ["warranty of habitability"] 0.
- **PA-G5-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(landlord|lessor|owner).{0,120}(heat|heating).{0,80}(tenant|dwelling|unit|apartment)" 0; "minimum (indoor )?temperature" 0; "degrees fahrenheit.{0,80}(dwelling|apartment|tenant|rental)" 0.
- **PA-G5-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "(fire )?sprinkler.{0,120}(residential|dwelling|apartment|rental|tenant|multifamily|multi-family)" 4; "(residential|dwelling|apartment|rental|tenant|multifamily).{0,120}sprinkler" 1. Keyword search (control 0): [sprinkler AND residential] 33.
- **PA-G5-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(deadbolt|dead bolt|door viewer|peephole|keyed lock|rekey|re-key)" 1; "(lock|locks).{0,60}(change|changed|rekey).{0,80}(tenant|occupan|vacat)" 0; "(window|door).{0,40}(latch|lock).{0,80}(dwelling unit|rental|tenant)" 0.
- **PA-G5-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "smart (lock|access|home)" 0; "(keyless|electronic|app[- ]based) (entry|access|lock)" 8; "connected device" 0.
- **PA-G5-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "key control" 1; "(master )?keys?.{0,80}(employee|staff).{0,80}(background check|criminal)" 0; "background check.{0,120}(apartment|landlord|property manag)" 0.
- **PA-G5-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "window guard" 0; "(security|burglar) bars" 0; "window (stop|fall prevention)" 0.
- **PA-G5-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "water heater.{0,120}(temperature|degrees|setting)" 0; "(hot water|water heater).{0,80}(120|125|130) degrees" 0; "radiator cover" 0; "(stove|range|refrigerator).{0,80}(landlord|lessor|furnish|supply|provide).{0,40}(tenant|dwelling)" 1.
- **PA-G5-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(swimming )?pool.{0,120}(barrier|fence|enclos|lifeguard|safety)" 2; "public bathing place" 0; "(spa|pool).{0,80}(apartment|condominium|residential|multifamily)" 7. Keyword search (control 0): ["swimming pool" AND fence] 14.
- **PA-G5-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "balcon(y|ies).{0,120}(inspect|structural)" 0; "(exterior elevated|elevated) element" 0; "deck.{0,60}(inspect|structural).{0,60}(dwelling|apartment|multifamily)" 0.
- **PA-G5-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "common (area|hall|stair|passage)\w*.{0,100}(light|illuminat)" 0; "(light|illuminat)\w*.{0,100}(common area|stairway|hallway|passage)" 3.
- **PA-G5-12** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "asbestos.{0,160}(tenant|resident|occupant|dwelling|apartment|notif|notice)" 0; "asbestos" 65. Keyword search (control 0): [asbestos AND tenant] 13.
- **PA-G5-13** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "(chinese|defective|corrosive|problem) drywall" 0; "drywall" 0.
- **PA-G5-14** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "environmental covenant.{0,200}(lease|tenant|lessee|convey)" 1; "activity and use limitation" 6; "(brownfield|remediat|contaminat)\w*.{0,160}(lease|tenant|lessee).{0,80}(notice|disclos|state)" 0. Keyword search (control 0): ["environmental covenant" AND lease] 0.
- **PA-G5-15** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "lead.{0,120}(tenant|lessee|rental|dwelling).{0,80}(notice|pamphlet|certif|disclos)" 0; "(childhood )?lead (hazard|poisoning|abatement|inspection)" 0. Keyword search (control 0): [lead AND tenant AND notice] 26.
- **PA-G5-16** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "(private|individual|domestic) (water )?well.{0,160}(test|sampl).{0,120}(tenant|lessee|rent|lease)" 0; "(tenant|lessee|rent|lease).{0,160}(private|individual) (water )?well" 0. Keyword search (control 0): ["private well" AND tenant] 192.
- **PA-G5-17** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "bed ?bugs?" 0; "(pest|insect|rodent|vermin|exterminat)\w*.{0,120}(tenant|landlord|lessee|rental|dwelling unit)" 0; "pesticide.{0,160}(notif|notice).{0,120}(tenant|occupant|resident)" 0. Keyword search (control 0): ["bed bugs"] 0; [pesticide AND tenant AND notice] 0.
- **PA-G5-18** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(air condition\w*|cooling) (units?|devices?|systems?).{0,120}(tenant|lease|rental|resident)" 0; "(portable|window).{0,40}(air condition|cooling)" 0; "(tenant|resident).{0,120}(air condition|cooling)" 1.
- **PA-G5-19** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(tenant|lessee).{0,120}(repair|maintenance).{0,120}(agree|writing|consideration)" 0; "(shift|transfer|delegat|assume)\w*.{0,80}(repair|maintenance).{0,80}(tenant|lessee)" 0; "(promise|agree)\w*.{0,60}(to )?(repair|improve|clean).{0,80}(writing|before)" 0.
- **PA-G5-20** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(repair|maintenance) (request|notice).{0,120}(tenant|landlord|writing)" 0; "(notice|notif)\w*.{0,80}(landlord|lessor).{0,80}(defect|repair|condition).{0,60}(writing|written)" 0; "repair[- ]and[- ]deduct|deduct.{0,60}cost of (the )?repair" 3. Keyword search (control 0): ["repair and deduct"] 0.
- **PA-G5-21** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "(relocat|alternat|temporary|substitute)\w* (housing|lodging|accommodation).{0,120}(tenant|landlord|lessee|occupant)" 1; "(tenant|occupant).{0,120}(relocation|temporary housing)" 0.
- **PA-G5-22** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(disaster|emergency) declaration.{0,200}(tenant|rent|lease|evict)" 2; "(displaced|evacuee).{0,160}(tenant|lease|dwelling|guest)" 12; "(shutdown|furlough).{0,160}(rent|evict|tenant|lease|late fee)" 4. Keyword search (control 0): [shutdown AND rent] 0; [disaster AND tenant AND rent] 20.
- **PA-G5-23** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "housing (choice )?voucher|section 8" 2492; "housing quality standards" 0; "(abat|withh)\w*.{0,80}(housing assistance|subsidy) payment" 0. Keyword search (control 0): ["housing choice voucher"] 14.
- **PA-G5-24** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "fire (prevention )?code" 8; "international fire code" 3; "fire (safety|prevention) (standards?|regulations?).{0,120}(dwelling|apartment|residential|rental)" 0. Keyword search (control 0): ["fire code" AND residential] 18.
- **PA-G5-25** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, 42 8382 passed, synthetic passed. Patterns: "public nuisance.{0,160}(tenant|lease|landlord|owner|dwelling|rental)" 18; "(drug|drug-related) nuisance" 32; "(abate|abatement).{0,120}(nuisance).{0,120}(lease|tenant|rent)" 2. Keyword search (control 0): [nuisance AND tenant AND lease] 21.
- **PA-G5-26** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed. Patterns: "known to (the state|the commonwealth) to cause cancer" 0; "(cancer|reproductive (harm|toxicity)).{0,120}(warning|notice).{0,120}(tenant|dwelling|rental|apartment)" 0.
- **PA-G5-27** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(unexploded )?ordnance" 0; "demolition (permit|order).{0,160}(tenant|lease|rental|occupant|disclos)" 0; "(shared|common|master|single) meter.{0,160}(tenant|lease|disclos|rental)" 0.
- **PA-G5-28** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "military (installation|base|airfield|air station|airport|impact)" 42; "(accident potential|noise) zone" 0; "air installation compatible" 0. Keyword search (control 0): ["military installation" AND disclosure] 6.
- **PA-G5-29** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "shoreline" 0; "(beach|coastal) access" 0; "coastal zone.{0,120}(lease|tenant|disclos)" 0.
- **PA-G5-30** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "psychologically (impacted|affected)" 0; "stigmatiz" 0; "(homicide|suicide|death|felony).{0,120}(occurred|committed).{0,120}(property|dwelling|premises).{0,120}(disclos|material)" 0; "(hiv|aids|human immunodeficiency).{0,160}(rent|lease|housing|tenant)" 7. Keyword search (control 0): ["psychologically impacted"] 0.
- **PA-G5-31** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(sexual offender|sex offender|sexually violent|registrant)\w*.{0,200}(tenant|lessee|lease|landlord|rent|rental|apartment)" 53; "(tenant|lessee|lease|landlord|rental).{0,200}(sexual offender|sex offender|registrant)" 15; "(resid|live)\w*.{0,60}within \d[\d,]* feet.{0,120}(school|day care|child)" 3. Keyword search (control 0): ["sexual offender" AND landlord] 0; [Megan AND lease] 0.
- **PA-G5-32** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 358; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "single[- ]family.{0,160}(disclos|notice|statement).{0,80}(lease|tenant|rent)" 0; "(permitted|lawful|maximum) occupan\w*.{0,120}(disclos|lease|tenant)" 6; "presum\w*.{0,80}(habitab|unfit|uninhabit)" 0.
- **PA-G6-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed, 66 1313 passed. Patterns: "sub-?meter" 0; "ratio (utility )?billing" 0; "(allocat|apportion)\w*.{0,60}(utility|utilities|water|electric|gas).{0,80}(tenant|unit|dwelling)" 0; "resells? (it )?to (consumers|tenants)" 1. Keyword search (control 0): [submeter AND tenant] 0.
- **PA-G6-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "energy (usage|consumption|use) data" 0; "benchmark\w*.{0,80}(energy|building)" 0; "conservation charge" 1.
- **PA-G6-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "third[- ]party (notification|notice)" 0; "(landlord|owner).{0,120}(notif|copy).{0,80}(termination|shutoff|disconnect).{0,80}tenant" 0; "(tenant|occupant).{0,80}designat\w*.{0,80}(landlord|third party).{0,80}(notice|termination)" 0.
- **PA-G6-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(transfer|place|put)\w*.{0,60}(utilit\w*|service).{0,60}(tenant\W?s? name|name of the tenant)" 0; "(landlord|owner).{0,80}(terminat|discontinu|shut)\w*.{0,60}(utilit|service).{0,80}(not|fail\w*) (been )?transfer" 0.
- **PA-G6-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "electric vehicle (charging|supply)" 5; "(ev|electric vehicle) charg" 5. Keyword search (control 0): ["electric vehicle" AND tenant] 0.
- **PA-G6-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "solar" 65; "photovoltaic" 2. Keyword search (control 0): [solar AND tenant AND lease] 4.
- **PA-G6-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives act101 1501 passed. Patterns: "recycl\w*.{0,320}(tenants?|occupants?|landlords?|multifamily|apartments?)" 1.
- **PA-G6-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives lta 207 passed, synthetic passed. Patterns: "parking" 549; "tow(ed|ing)? (away )?(rules|policy|notice)" 0.
- **PA-G7-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "restoration (deposit|escrow)" 0; "(modification|alteration)s?.{0,120}(escrow|interest[- ]bearing)" 0.
- **PA-G7-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(misrepresent|fraudulent\w*|falsely)\w*.{0,120}(service|assistance|support) (dog|animal)" 8; "(service|guide|support) (dog|animal).{0,200}(housing|dwelling|landlord|lease|tenant|rental)" 17. Keyword search (control 0): ["service animal" AND housing] 13.
- **PA-G7-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(pet|dog|cat).{0,120}(fact sheet|information sheet)" 0; "(pet|animal).{0,160}(evict|abandon).{0,120}(notice|tenant)" 0.
- **PA-G7-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "immigration status" 3; "(unlawfully|illegally) present" 1; "citizenship.{0,120}(tenant|lease|rent|housing|landlord)" 1. Keyword search (control 0): ["immigration status" AND housing] 12.
- **PA-G7-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(limited access|sealed|expunged).{0,200}(landlord|housing|lease|tenant|rent)" 6; "(landlord|housing|lease|tenant).{0,200}(limited access|sealed|expunge)" 7; "(criminal (history|record)).{0,160}(tenant|applicant for housing|landlord|rental)" 0. Keyword search (control 0): ["criminal history" AND landlord] 3; ["limited access" AND housing] 13.
- **PA-G7-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(credit|rent) report\w*.{0,160}(tenant|rent payment|landlord)" 0; "positive rent" 0; "consumer reporting agenc\w*.{0,160}(landlord|tenant|rent)" 0.
- **PA-G7-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "tenant(s)?\W? (union|association|organization)s?" 4; "(organiz|assembl|meet)\w*.{0,120}tenants" 4; "(canvass|candidate|political).{0,160}(apartment|multiple dwelling|tenant|landlord)" 3. Keyword search (control 0): ["tenant association"] 0; ["tenants association"] 6.
- **PA-G7-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(display|fly)\w*.{0,60}(flag|sign|religious|symbol).{0,160}(tenant|lessee|unit owner|resident|occupant)" 0; "(flag|religious|political sign).{0,160}(lease|tenant|landlord|association|declaration)" 21; "mezuzah" 0. Keyword search (control 0): [flag AND tenant] 16.
- **PA-G7-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(firearm|gun|weapon)s?.{0,200}(lease|tenant|landlord|rental|lessee)" 24; "(lease|tenant|landlord|rental|lessee).{0,200}(firearm|gun)s?" 9. Keyword search (control 0): [firearm AND lease] 168.
- **PA-G7-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "marijuana.{0,200}(lease|tenant|landlord|rental|housing|dwelling)" 1; "cannabis.{0,200}(lease|tenant|landlord|rental|housing)" 0; "(adult[- ]use|recreational) (marijuana|cannabis)" 0. Keyword search (control 0): [marijuana AND lease] 19; [marijuana AND landlord] 1.
- **PA-G7-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives mpc 603 passed, synthetic passed. Patterns: "(home[- ]based|home) (business|occupation)" 2; "(child day care|family child care|child care home)\w*.{0,160}(lease|tenant|landlord|rental)" 0.
- **PA-G7-12** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "water ?bed" 0; "(renter|tenant)\W?s? insurance" 0; "(require|mandat)\w*.{0,80}(tenant|lessee).{0,80}(insurance|liability coverage)" 2; "landlord.{0,80}(liability insurance)" 0. Keyword search (control 0): ["renters insurance"] 0.
- **PA-G7-13** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "student housing" 0; "(college|university).{0,120}(housing|residence hall|dormitor).{0,120}(tenant|lease|landlord)" 0; "(55|62) (years of age )?(or older|and older).{0,160}(housing|community)" 0.
- **PA-G7-14** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(employ\w*).{0,120}(housing|dwelling|residence).{0,120}(terminat|vacat|condition of employment)" 1; "(caretaker|janitor|superintendent).{0,160}(dwelling|occup|evict)" 0.
- **PA-G7-15** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "veteran\w*.{0,160}(rent|lease|landlord|housing|tenant)" 42; "(translat|language other than english).{0,160}(lease|contract|tenant|rental)" 0. Keyword search (control 0): [veteran AND landlord] 14.
- **PA-G7-16** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(alien|foreign (adversary|government|person|principal|national)).{0,200}(real (estate|property)|land|lease)" 14; "(acquire|hold|own)\w*.{0,80}(real estate|land).{0,120}alien" 0. Keyword search (control 0): [alien AND "real estate"] 42.
- **PA-G7-17** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(hunt|fish|trap)\w*.{0,160}(owner or lessee|lessee or owner|permission of the (owner|lessee))" 8; "usufruct" 0; "(communal|tribal|native) land" 0.
- **PA-G7-18** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "drug[- ]free (housing|lease|addendum)" 0; "(crime|drug)[- ]free lease" 0.
- **PA-G8-01** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(text message|electronic mail|e-mail|email).{0,160}(notice|notif).{0,120}(tenant|landlord|lease)" 1; "(notice|notif)\w*.{0,120}(tenant|landlord|lessee).{0,120}(text message|electronic mail|e-mail|email)" 0.
- **PA-G8-02** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(notif|notice)\w*.{0,120}(tenants?|lessees?|occupants?).{0,160}(foreclos|lawsuit|condemnation|proceeding|sheriff)" 2; "(foreclos|sheriff\W?s? sale).{0,200}(notice|notif)\w*.{0,120}(tenants?|lessees?|occupants?)" 1.
- **PA-G8-03** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "copy of (the|a|any|such) (written )?(lease|rental agreement)" 0; "(furnish|give|deliver|provide)\w*.{0,80}(tenant|lessee).{0,60}copy" 0.
- **PA-G8-04** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "spouse.{0,160}(lease|leasing).{0,80}(real|property|join|consent|sign)" 1; "tenants by the entiret\w*.{0,200}lease" 0; "(lease|leases).{0,120}(seal|acknowledg|notar)" 15.
- **PA-G8-05** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(month[- ]to[- ]month|periodic|fixed[- ]term).{0,160}(more burdensome|different (rent|terms)|premium)" 0; "(\d+|ten|twelve)[- ]point (type|font|print)" 8; "type size" 1. Keyword search (control 0): ["point type" AND lease] 21.
- **PA-G8-06** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(absen|vacat)\w*.{0,80}(more than )?(seven|7|fourteen|14) (consecutive )?days.{0,120}(notif|notice).{0,60}(landlord|lessor)" 0; "(guarant|surety)\w*.{0,160}(lease|tenant|rent|lessee)" 52. Keyword search (control 0): [guarantor AND lease AND rent] 25.
- **PA-G8-07** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(installments?).{0,80}(rent|rental)" 3; "(rules|regulations).{0,120}(landlord|lessor).{0,120}(adopt|amend|change|enforce)" 0; "(portal|online|electronic).{0,80}(rent payment|pay rent|payment of rent)" 0.
- **PA-G8-08** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed, synthetic passed. Patterns: "truth in renting" 0; "(misstate|misrepresent)\w*.{0,120}(law|rights).{0,80}(lease|tenant)" 0; "(initial|initialed|initials).{0,120}(lease|tenant|provision)" 29; "(bold|capital|conspicuous)\w*.{0,80}(type|print|letters).{0,120}(lease|tenant)" 4.
- **PA-G8-09** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed, synthetic passed. Patterns: "(association|executive board).{0,200}(tenant|lessee|occupant).{0,160}(fine|rent|approv|deposit|fee)" 11; "(lease|leasing|rental) (of|by) (a )?units?.{0,200}(restrict|approv|prohibit)" 0; "(rental|lease) restriction" 0. Keyword search (control 0): [association AND lessee AND fine] 822.
- **PA-G8-10** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(garage door|elevator|laundry|mailbox).{0,160}(landlord|lessor|tenant|rental|dwelling unit)" 0; "(conspicuous|separately signed).{0,120}(entry|access|services)" 8.
- **PA-G8-11** (2026-11-08): controls "zqxvbnmwt" 0, "landlord" 362; positives synthetic passed, synthetic passed. Patterns: "(lease|tenancy|leasehold).{0,160}(void|forfeit\w*|terminat\w*|annul\w*).{0,160}(prostitution|gambling|illegal|unlawful (use|purpose)|bawdy|disorderly)" 0; "(prostitution|gambling|bawdy|disorderly house).{0,200}(lease|lessee|tenant|landlord|lessor)" 4. Keyword search (control 0): [prostitution AND lease] 20.

### §4 Decisions and questions asked of Taylor

Optional clauses found under rule 54, with verdicts:

1. **Collection costs:** offered as `collection-costs-pa` (CONDITIONAL, SERVES_LANDLORD). The Fair Credit Extension Uniformity Act § 4(b)(6)(i) bars collecting any fee not "expressly authorized by the agreement creating the debt"; the clause is that authorization, limited to the agency's actual charge under a landlord-set cap.
2. **No waiver by accepting rent:** offered as `rent-acceptance-nonwaiver-pa` (CONDITIONAL). No statute decides the point; the clause preserves the Act § 503(c) right to supersede the writ by paying arrears and costs.
3. **Shortened notice for showings:** `showing-notice-la` tagged PA. There is no statutory entry notice, so the clause shortens only the contractual 24 hours.
4. **Binding arbitration:** not offered (`edu-binding-arbitration-pa`). 42 Pa.C.S. § 7303 allows it, and the shared clause's carve-outs fit 42 Pa.C.S. §§ 1515 and 1123. But whether the UTPCPL reaches a void lease term turns only on case law, which under Taylor's 2026-11-07 rule means the clause is not offered. The same reading answers `consumer-protection-act`.
5. **Pre-dispute jury waiver:** not offered (`edu-jury-waiver-pa`). 42 Pa.C.S. § 5104(a) ties waiver to "the manner prescribed by general rules" (Pa.R.C.P. 1007.1: waiver by not demanding); a contractual waiver's enforceability rests on unread case law.
6. **Liability waiver, habitability waiver, notice-service fee, eviction fee, exemption waiver:** not offered. Each row says why: unread case law for the first four; 42 Pa.C.S. § 8122 bars the last.

7. **Rent concession:** offered as `rent-concession-pa` (CONDITIONAL). The clause prompts the landlord to state any repayment term, since Fair Credit Extension Uniformity Act § 4(b)(6)(i) requires express authorization.
8. **Not offered in batch 2, each with an education row saying why:** a pre-set deposit-deduction schedule (Act § 512 measures deductions by actual damage); a deposit-alternative fee (it is unsettled whether the fee is inside the cap); a lockout for unpaid rent (no authority; Act § 505.1(f), (i)); reimbursement of government fees (local ordinances decide, rule 3); an alarm-tampering fee (actual cost as damages only).

9. **Batch 3 tags (rule 26, checked both ways):** `cold-weather-vacate-notice-wy`, `automatic-renewal-ks` and `owner-occupancy-termination-ar` tagged PA. Pennsylvania has no statute on any of the three; each clause is a landlord-serving contract term that waives no statutory right, and the owner-occupancy notice floor ("not less than 30" days) meets the longest notice to quit (Act § 501(b)).
10. **Batch 3 tags declined:**
    - `barred-person-covenant-ne`: its tenant covenant to keep a named person away could restrict the unwaivable guest right in buildings of three or more households (Act § 504-A). Answered by `edu-trespass-notice-pa` (defiant trespass, 18 Pa.C.S. § 3503(b), for areas the landlord controls).
    - `eminent-domain-vi`: its award-assignment sentence gives up the tenant's share of a condemnation award, which 26 Pa.C.S. § 507 apportions among owner and tenants; whether a lease can do that is unread case law. Answered by `edu-eminent-domain-pa`.
11. **Not offered in batch 3:** a possession bond (no statute; confessed judgment for possession not available on an individual's residential lease, `edu-confession-of-judgment-pa`); an eviction-service designee (no statute or rule lets a lease name one); a rent-acceleration clause (no statute; case law).
12. **PA item 8 (early termination, holdover, CARES):**
    - (a) `early-termination-ks`: its fee (the greater of one month's Rent or 30% of the remaining Rent) has no Pennsylvania statute behind it, and whether it is a penalty is unread case law (`edu-liquidated-damages-pa`, battery PA-G1-11). Per the prompt, a flat one-month `early-termination-pa` is proposed in §6 finding 5; nothing asked. The statutory early exits are in `edu-statutory-early-termination-pa` (51 Pa.C.S. §§ 7315, 7315.1; Act § 514), and the shared clause's savings sentence preserves them.
    - (b) `holdover-ca` and `holdover-rate-pa` confirmed: Act § 503(a) enters judgment 'for damages, if any, for the unjust detention of the demised premises; and (3) for the amount of rent, if any, which remains due and unpaid' (68 P.S. § 250.503(a) (Act § 503(a))), with no multiplier, and Act § 501(b) gives 15 days for a term of one year or less or an indeterminate term. Both rows' PA segments state this correctly.
    - (c) CARES: no PA eviction row contradicts `edu-cares-act-notice`. `notice-to-quit-waiver-pa` keeps "any notice a federal law requires", `periodic-tenancy-notice-pa` routes through it, and `edu-notice-to-quit-pa`, `edu-eviction-process-pa`, `edu-statutory-forms-pa` and `abandoned-property-pa` mention the federal notice. One row states a 10-day notice without the caveat: `edu-drug-activity-eviction-pa` (§6 finding 6; not a contradiction, since courts disagree whether § 9058(c) reaches non-rent evictions, but worth one sentence). Every new batch 3 row that states a notice period carries the federal caveat, and `edu-nonwaivable-rights-pa` (batch 1) now does too.
13. **New find, already covered:** 51 Pa.C.S. § 7312 (stay of eviction for six months for Guard and reserve members on active duty) surfaced in battery PA-G3-19; `edu-servicemember-rights-pa` already states it, and `edu-eviction-hardship-stay-pa` now cites it.

14. **Batch 4 tags (rule 26):** `rental-inspection-cooperation-mn`, `rent-increase-midterm-ky` and `tax-insurance-escalation-la` tagged PA. No statute governs any of the three; each waives no statutory right. The rent-increase clause's retaliation sentence matches 66 Pa.C.S. § 1531(c), and the tax clause is the express authorization the Fair Credit Extension Uniformity Act § 4(b)(6)(i) requires.
15. **PA item 5 (local limits and preemption):** answered in `edu-rent-control-pa` and the other batch 4 local-power rows. Pennsylvania has no rent-control statute and no express preemption. The leads were 53 Pa.C.S. § 2962(f), which bars home-rule municipalities from setting duties on businesses except as statute allows, while § 2962(c)(4) keeps building, safety, sanitation and health ordinances, and First Class City Home Rule Act § 18. Whether § 2962(f) bars landlord ordinances is unread case law, so each row says to check local ordinances. Philadelphia's rental license, lead-safe certification and good-cause rules are named, not researched (rule 3).
16. **PA item 11:** the foreign-entity suit bar (15 Pa.C.S. § 411(b), with § 403(a)(12)), the fictitious-name suit bar (54 Pa.C.S. § 331(a)), service on a nonresident owner (42 Pa.C.S. § 5322(a)(5); Pa.R.Civ.P.M.D.J. 307(3); Pa.R.C.P. 404) and reporting duties (23 Pa.C.S. §§ 6311-6312) are in `edu-landlord-registration-pa`, `edu-nonresident-owner-agent-pa`, `edu-law-enforcement-cooperation-pa` and `edu-confirmed-absences-outside-title-pa`. Also found: nonresident-lessor income-tax withholding by business lessees (Tax Reform Code of 1971 § 324.4) and extradition of out-of-state owners charged over code violations (53 Pa.C.S. § 6113).
17. **NEEDS_REVIEW:** `edu-no-property-tax-rent-statement-pa`. The Property Tax/Rent Rebate Program sits in the Taxpayer Relief Act (Act 1 of the 2006 First Special Session), which the site serves only through a wrapper that drops the special-session flag. Status per rule 12 (cautious course): the row tells landlords to confirm rent accurately on request.

18. **Batch 5 tags (rule 26):** `pest-cooperation-pr` (bed bugs and pests) and `tenant-repair-agreement-hi` tagged PA. No Pennsylvania statute governs either subject. The pest clause's entry routes through the lease's entry section. The repair-agreement clause keeps health-and-safety code work with the landlord, consistent with the non-waivable implied warranty (case law, not read).
19. **Batch 5 answers:** 47 habitability and safety topics, mostly confirmed absences. The present law is:
    - the City Rent Withholding Act;
    - Act § 502-A common-area care;
    - the Utility Service Tenants Rights Act;
    - the Construction Code Act (§ 503 municipal minimums; § 901(g) builder sprinkler offer);
    - the Drug Nuisance Law (42 Pa.C.S. §§ 8383, 8389);
    - 18 Pa.C.S. § 6504;
    - 27 Pa.C.S. § 6505 (environmental covenants run with the land);
    - Megan's Law website and group-based home limits (42 Pa.C.S. §§ 9799.25(f), 9799.28).

20. **Parking clause (Act 64 of 2026):** new REQUIRED clause `parking-disclosure-pa` (topic `unbundled-parking`, `effective_from` 2026-12-21, basis "REQUIRED_DISCLOSURE: 1951 Act § 207(a) (Act 64 of 2026) | CONSTRAINED_TERM"). It reuses {{parking_space_number}} and {{parking_fee_amount}}; there are no new variables. It folds permit and decal charges into the stated fee, because § 207(a)(2) reaches 'a fee associated with the provision of parking' (1951 Act § 207(a)(2)).
21. **Batch 6, not tagged:** `utility-allowance-cap-co`, `ev-charging-end-of-tenancy-co`, `ev-charger-installation-hi` and `ev-charging-shared-area-co`. Each implements a right or cap from its own state's law that Pennsylvania lacks.
22. **Expired chapter:** 66 Pa.C.S. Chapter 14 (Responsible Utility Customer Protection, including its winter rules) expired 2024-12-31 per the official note. Utility shutoff rows point to the Public Utility Commission regulations (52 Pa. Code Chapter 56, not read) and to the Utility Service Tenants Rights Act, which remains in force.

23. **Batch 7 tags (rule 26):** `animal-care-access-vi`, `waterbed-mn` and `cannabis-restrictions-ak` tagged PA. `firearm-rules-la` and `farmland-sporting-rights-co` were not tagged, because each rests on its own state's statute.
24. **PA item 7, confirmed:**
    - `smoking-policy`: consistent. The Medical Marijuana Act gives patients no housing protection and itself makes it 'unlawful to: (1) Smoke medical marijuana' (Medical Marijuana Act § 304(b)(1) (Act 16 of 2016)). No adult-use law is in force (battery PA-G7-10).
    - `no-alterations`: consistent. Its last sentence preserves PHRA modifications (43 P.S. § 955(h)(3.1)). Article V-B cable rights run through the operator, and the landlord may not prevent an operator installation once agreed or arbitrated (68 P.S. § 250.503-B (Act § 503-B)); the clause restricts only the tenant's own alterations (`edu-telecom-access-pa`).
    - `addendum-precedence`: consistent. Its carve-out makes required disclosures control, including the Statement of Consumer Restrictions and, from 2026-12-21, `parking-disclosure-pa`.
25. **New finds in batch 7:** Act § 205 (no termination or nonrenewal for tenants'-association participation), 18 Pa.C.S. § 9122.5(a.1) (expunged and limited-access records may not be used for housing), and the Breach of Personal Information Notification Act's reach to landlords holding personal information.

26. **PA item 6 (`keys`, `hoa-compliance`), confirmed:**
    - `keys`: its re-key-and-charge sentence is the express authorization the Fair Credit Extension Uniformity Act § 4(b)(6)(i) requires. The charge is the actual cost. The deposit statute lets the landlord keep the deposit for 'the breach of any other condition in the lease by the tenant' (68 P.S. § 250.512(a) (Act § 512(a))), so an unreturned key may be charged against it on the written list.
    - `hoa-compliance`: association fines run against the unit owner, 'after notice and an opportunity to be heard' (68 Pa.C.S. § 3302(a)(11); 68 Pa.C.S. § 5302(a)(11)). The clause's pass-through of fines caused by the tenant is the lease authorization the debt-collection law requires.
    - Both rows stand; their PA segments ("No lock or rekey statute located", "No statute") are accurate. `edu-hoa-pa` and `association-approval-la` (tagged) answer the `hoa` topic, and `edu-no-association-lease-disclosure-pa` answers `association-obligations-disclosure`.
27. **Batch 8 tags (rule 26):** `appliances-excluded-la`, `furnishings-included-la`, `emergency-contact-co`, `extended-absence-notice-ks`, `guaranty-as`, `lease-copy-receipt-hi`, `informal-dispute-resolution-or`, `scheduled-services-entry-la`, `rent-installments-or`, `rules-wi` (chosen over `rules-ia`), `tenant-portal-mn`, `no-liens-ar`, `association-approval-la` and `prohibited-acts-renter-wy`. None conflicts with a Pennsylvania statute, and each waives no statutory right.
28. **New finds in batch 8:**
    - 68 Pa.C.S. § 7103(a): the Real Estate Seller Disclosure Law covers a lease with an option to purchase.
    - Mechanics' Lien Law of 1963 § 303(d): a landlord's consent to tenant work does not expose its fee to liens without a signed writing that the work is for its benefit.
    - Electronic Transactions Act § 301(c): the right to refuse further electronic dealings cannot be waived.

No question was asked of Taylor in batches 1-8; each call above was a legal or drafting judgment under rule 76.

### §5 Independent check

**Round 1 (2026-11-08).** One general-purpose agent that had not written the rows checked:
- all 273 rows mechanically: format, ids, federal prefix, battery presence;
- all 26 tags for substance, against `lease-clauses.csv`;
- about 95 new rows, across all eight batches, against the saved sources in `src/`.

Mechanical results: none. Every tag changes only `states` (+`;PA`) and appends one ` | PA: ` segment; every new row's notes begin `PA: `; all federal cites carry `FEDERAL:`.

It reported 20 substantive findings, all fixed before final delivery:
1. Drug-activity grounds (Act § 505-A) cover single-family homes, apartments and multiple dwellings, not only buildings of three or more households. Corrected in `edu-expedited-criminal-eviction-pa`, `edu-portfolio-thresholds-pa`, `edu-drug-free-addendum-pa` and `edu-purpose-limitation-pa`.
2. The PFA hold on belongings runs "for thirty days from the date of the notice" (Act § 505.1(h)). Corrected in `edu-dv-eviction-protection-pa` and `edu-post-eviction-property-pa`.
3. `edu-deposit-escheat-pa`: added the condition "admitted in writing by the holder" (Fiscal Code § 1301.10).
4. `edu-utility-resale-pa`: added the 66 Pa.C.S. § 102 exclusion for building owners who supply electric power to occupants. The row had wrongly said no exclusion was located.
5. Habitability waivability: `edu-maintenance-duty-shift-pa`, `tenant-repair-agreement-hi` (tag) and `appliances-excluded-la` (tag) now say it is case law not read, matching `edu-habitability-waiver-pa`. The existing row is §6 finding 10.
6. Batteries PA-G8-06 and PA-G8-07 were missing from §3, because the log tool did not match lowercase "battery". Fixed. The §3 keyword-search statement was clarified.
7. The Chapter 14 expiration note is now saved (`src/pacs/66-ch14-note.txt`).
8. Fair Credit Extension Uniformity Act § 4(b)(6)(i) reaches collection of a past-due "Debt". The fee rows (`edu-required-fees-pa`, `edu-fee-transparency-pa`, `edu-governmental-fines-pa`, `edu-tax-escalation-pa`, the utility-billing rows and `edu-renters-insurance-rules-pa`) now say so.
9. `rent-increase-midterm-ky` (tag): the retaliation sentence now also cites 43 P.S. § 955(d) and Act § 205, not only 66 Pa.C.S. § 1531(c).
10. `emergency-contact-co` (tag): removed the misapplied 43 P.S. § 955(h)(6) cite.
11. `edu-tenant-bankruptcy-pa`: Act § 103(4) only preserves other laws on rent preference. Corrected.
12. `owner-occupancy-termination-ar` (tag): mobile home park notices run up to three months (Act § 501(c)). Corrected, and the clause is marked not for them.
13. `edu-statutory-early-termination-pa`: added the Act § 514(a) "later of" effective date.
14. `edu-security-deposit-interest-pa` and `edu-holding-deposit-pa`: § 511.2(c) says the section applies only after the second anniversary. Each row now states the literal reading and recommends escrow from the start as the cautious course.
15. `waterbed-mn` and `furnishings-included-la` (tags): changed "matches" to "is consistent with"; § 512(a) does not mention wear and tear.
16. `edu-municipal-utility-lien-pa`: authority (d)(10) runs from when the bill "first becomes due", and city § 13588(b) from when it becomes "overdue". Corrected.
17. `edu-term-change-notice-pa`: added the § 3410(k) written-consent exception and the § 3410(f) senior and disabled rules.
18. Blank §2 citations: the log tool now reads apostrophe names (Mechanics' Lien Law) and labels tags with no statute.
19. `edu-exculpatory-clauses-pa`: fixed a row-id fragment.
20. `edu-expedited-criminal-eviction-pa`: the Drug Nuisance Law was read this pass; only the Expedited Eviction act was not reopened.

**Round 2 (2026-11-08, final).** A fresh agent checked the 31 rows corrected in round 1 against the same sources. It found no problems in seven of 13 row groups. It flagged ten points, all fixed:
1. `edu-dv-eviction-protection-pa`: reworded so that "for 30 days from the date of the notice" plainly modifies the hold.
2. `edu-deposit-escheat-pa`: now gives the full Fiscal Code § 1301.10 test ("admitted in writing by the holder and adjudicated to be due", unclaimed with no owner interest). It says coverage of an uncashed refund is not settled, and treats reporting as the cautious course.
3. `edu-utility-resale-pa`: the exclusion is now limited to owner/operators that both own and manage the internal distribution system.
4. `tenant-repair-agreement-hi` (tag): the FCEUA sentence is narrowed to collecting incidental amounts on a past-due debt.
5. The FCEUA rows (`edu-fee-transparency-pa`, `edu-governmental-fines-pa`, `edu-tax-escalation-pa`, `edu-utility-rebilling-cap-pa`, `edu-no-submetering-disclosure-pa`, `edu-renters-insurance-rules-pa`, `edu-rent-concession-pa`, `tax-insurance-escalation-la` tag) now include the statute's alternative "or permitted by law" and its past-due-debt scope.
6. `edu-rent-concession-pa`: now says "past-due lease debt".
7. Retaliation wording: `rent-increase-midterm-ky` (tag), `edu-term-change-notice-pa`, `edu-rent-escalation-pa` and `edu-no-habitability-presumption-pa` now say "rebuttable presumption", and the term-change row says "substantial".
8. `emergency-contact-co` (tag): removed a stray Purdon's sentence.
9. `waterbed-mn` and `furnishings-included-la` (tags): § 512(a) is now described as limiting deductions for damage to the premises to actual damage. It does not limit retention for rent or other breaches.
10. `edu-utility-shutoff-statute-pa` and `edu-no-cold-weather-vacate-notice-pa`: dropped the unsupported "winter rules" and "now come from" claims. PUC regulations "may apply", not read.

**Rows edited after the last round (rule 80):** the round-2 fixes above. These are `edu-dv-eviction-protection-pa`, `edu-deposit-escheat-pa`, `edu-utility-resale-pa`, `tenant-repair-agreement-hi`, `edu-fee-transparency-pa`, `edu-governmental-fines-pa`, `edu-tax-escalation-pa`, `tax-insurance-escalation-la`, `edu-utility-rebilling-cap-pa`, `edu-no-submetering-disclosure-pa`, `edu-renters-insurance-rules-pa`, `edu-rent-concession-pa`, `rent-increase-midterm-ky`, `edu-term-change-notice-pa`, `edu-rent-escalation-pa`, `edu-no-habitability-presumption-pa`, `emergency-contact-co`, `waterbed-mn`, `furnishings-included-la`, `edu-utility-shutoff-statute-pa` and `edu-no-cold-weather-vacate-notice-pa`. After these edits the quote checker passed 306 of 306 quotes. No third round was run (the rule's limit is two).

### §6 Findings on existing rows

1. **`edu-no-application-fee-cap-pa` will be wrong from 2026-12-21.** Act 67 of 2026 adds Act § 208: 'A landlord or the landlord's agent may only charge a fee that is reasonably related to the actual administrative expenses incurred and may not use fees as a general revenue source.' (1951 Act § 208(a)), and '(b) Nothing in this section shall be construed to prohibit a person from charging or require a person to charge a rental application fee' (1951 Act § 208(b)). The row says Pennsylvania sets no application-fee limit. Proposed bodyText: "Pennsylvania sets no dollar cap on rental application fees. From December 21, 2026, a landlord or its agent may charge only a fee reasonably related to the actual administrative expenses incurred, and may not use application fees as a general source of revenue. The law neither requires nor bans an application fee." Notes: cite 1951 Act § 208 (Act 67 of 2026 (2026 P.L. 595), effective 60 days after 2026-10-22); no Purdon's number yet; status VERIFIED; `last_checked` at sync.
2. **Parking disclosure from 2026-12-21 (Act 64 of 2026, Act § 207).** 'A landlord shall state in a lease whether parking is provided for a tenant. If the landlord provides parking to the tenant, the landlord shall state in the lease whether the tenant is required to pay a fee for the provision of parking and, if so, the amount of the fee.' (1951 Act § 207(a)(1)). PA's tagged parking clauses (`assigned-parking-space`, `parking-vehicle-rules`, `parking-ks-oh-ca`) are optional and do not state whether parking is provided. Answered in the delta by the new REQUIRED clause `parking-disclosure-pa` (batch 6, topic `unbundled-parking`, effective 2026-12-21); see §4 decision 20 and finding 8.

3. **Kickoff description of Act § 511.3.** The prompt (item 4) calls Act § 511.3 "transfer on sale". Section 511.3 (68 P.S. § 250.511c) is "Bond in Lieu of Escrowing" (its heading). Transfer of the landlord's duties on a sale is Act § 104 (68 P.S. § 250.104). No existing row is wrong on this; recorded so the kickoff template can be corrected.
4. **Kickoff description of 66 Pa.C.S. § 1529.** The prompt (item 2) says the utility-payment deduction applies "notwithstanding … any agreement". Section 1529 has no such words; the non-waiver rule is 66 Pa.C.S. § 1530: 'Any waiver of a tenant's rights under this subchapter shall be void and unenforceable.' (66 Pa.C.S. § 1530). No row is affected.

5. **Proposed row `early-termination-pa` (PA item 8(a)).** Replaces PA's tag on `early-termination-ks`: at merge, remove PA from that row's `states` and drop its ` | PA: …` notes segment (the shared text is unchanged).
    - `id` early-termination-pa; `group` Default & Termination; `title` Early Termination; `states` PA; `is_active` TRUE; `supersedes` early-termination; `rule_type` REQUIRED; `content_type` LEASE_CLAUSE; `verification_status` VERIFIED; `effective_from` and `last_checked` at merge; `choice_group` and `is_default` blank; `topic_key` early-termination; `lease_clause_basis` SERVES_LANDLORD.
    - `bodyText`: "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or other periodic tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act or Pennsylvania law, due to the property becoming uninhabitable through no fault of Tenant, or, except as prohibited by law in the case of a Tenant's death, any other termination right or limitation provided by applicable law." (Changes from `early-termination-ks`: the fee is a flat one month's Rent, dropping "or 30% of the remaining Rent due under the Term, whichever is greater"; "or Pennsylvania law" added after the SCRA. No new variables.)
    - `notes`: "PA: Present. Optional exit for a fixed Term, at a flat fee of one month's Rent. No Pennsylvania statute sets or limits an early-termination fee in a residential lease, and the Commercial Code's liquidated-damages rules cover goods only (`edu-liquidated-damages-pa`, battery PA-G1-11); whether a fixed fee is a penalty is case law, not read, so the library uses one month's Rent, the smallest common figure, rather than a percentage of the remaining Rent that grows with the Term. Statutory exits kept by the savings sentence: 51 Pa.C.S. § 7315 (Guard and reserves, 'without cost, payment or penalty'), 51 Pa.C.S. § 7315.1 (servicemembers, 30 days' notice), 68 P.S. § 250.514 (Act § 514) (executor or administrator, 14 days, no penalty); see `edu-statutory-early-termination-pa`. P.S. numbers are Purdon's, which the official site does not print. Read section-open: 1951 Act whole and 51 Pa.C.S. §§ 7315, 7315.1 (palegis.us, 2026-11-08). The fee is a waiver-like loss for the tenant only if the lease is read as a penalty; no listing in `consumer-restrictions-statement-pa` is owed."
6. **`edu-drug-activity-eviction-pa` states the 10-day notice without the federal caveat (PA item 8(c)).** Proposed: append to its `bodyText` "For a property with a federally backed mortgage or in a covered federal housing program, federal law may also require 30 days' notice to vacate; see the CARES Act notice explainer." and to its PA notes "Federal notice: `edu-cares-act-notice`."
7. **`edu-servicemember-rights-pa` notes cite "Pa.R.C.P.M.D.J. 503D".** The court-rule abbreviation is Pa.R.Civ.P.M.D.J. (as the other PA rows write it). Proposed: correct the abbreviation at the next sync; no other change.

8. **Tagged parking clauses after Act 64 of 2026.** `assigned-parking-space` (PA segment: "No statute") and `parking-vehicle-rules` (PA segment cites only towing) predate 1951 Act § 207. From 2026-12-21, a PA lease must state whether parking is provided and any fee (§ 207(a)(1)), and a parking fee may not be changed or added during the lease (§ 207(a)(2)). `parking-vehicle-rules` lets the landlord charge for "tags, decals, or access cards"; in PA that charge must be stated as a parking fee in the lease and cannot be added mid-lease. Proposed: replace each row's PA segment with "PA: Tagged. Optional; pairs with REQUIRED `parking-disclosure-pa` (1951 Act § 207, Act 64 of 2026, effective 2026-12-21). Any permit, tag, decal or access-card charge is a parking fee that must be stated in `parking-disclosure-pa` and may not be added or changed during the Term (1951 Act § 207(a)(2))." with `last_checked` at sync. No change to either row's text.

9. **PA item 10: aligned casualty wording (`casualty-termination-pa`).** The row excludes casualty "not caused by Tenant, members of Tenant's household, or Tenant's guests". `tenant-caused-damage-pa` uses "the deliberate or negligent act or omission of Tenant, an Occupant, or a guest or invitee of Tenant". Proposed first sentence for `casualty-termination-pa`: "If the property is damaged or destroyed by fire or other casualty not caused by the deliberate or negligent act or omission of Tenant, an Occupant, or a guest or invitee of Tenant, and the damage makes the property unfit to live in or substantially impairs Tenant's use of it, either Landlord or Tenant may end this Lease by written notice to the other, effective on the date Tenant moves out." The rest of the text is unchanged. "Occupant" is the defined term `tenant-caused-damage-pa` uses. "Deliberate or negligent" keeps the two rows' fault tests the same, so a casualty that is not the tenant side's fault gives both the casualty exit and rent abatement. Notes to add: "PA: aligned with `tenant-caused-damage-pa` fault persons (PA gaps log §6 finding 9); no Pennsylvania statute governs casualty termination (`edu-no-environmental-event-termination-pa`)." Neither row was edited.

10. **`edu-habitability-pa` states the implied warranty is one "which a lease cannot waive"** without saying that rests on case law. This pass did not read those decisions; `edu-habitability-waiver-pa` says so, and batch 5 and 8 rows were aligned to it after the independent check (§5). Proposed: add to `edu-habitability-pa`'s PA notes "Non-waivability: case law, not read in the 2026-11-08 gaps pass" at sync. The body text is unchanged.

### §7 Findings for other states

1. Two KS rows carry Pennsylvania citations outside a PA segment (PA log §8 rule): `edu-no-plain-language-consumer-statement-ks` cites "73 P.S. 2205(d)" and `edu-deposit-holding-ks` cites "68 P.S. 250.511b(a)". Not edited.

### Proposed SOP changes

1. **Rule 19 (dump channel):** where the corpus lives only in a browser tab, save texts and battery logs by returning one JSON object larger than the tool's inline limit (about 100,000 characters, padded if needed), which the harness persists to a file the workspace can parse. A smaller result prints inline and costs context.
2. **Rule 16 (kickoff currency):** a kickoff that lists bills as "pending, not law" is checked against the act list at Step A. HB 344 and HB 558 were enacted on 2026-10-22, after the prompt's source was written.

3. **Rule 19 (special-session acts):** palegis.us serves special-session acts only through a page wrapper that drops the session flag. When a needed act is special-session, the SOP should name a fallback: the PDF link on the law-information page, or relying on an earlier section-open read, disclosed in the row, with NEEDS_REVIEW if no earlier read exists. This affected the Expedited Eviction of Drug Traffickers Act and the Taxpayer Relief Act.

### Proposed topic questions

1. `parking-rules-notice` / `unbundled-parking`: add "Does a statute require the lease to state whether parking is provided and its fee, and bar adding or changing parking fees during the lease? (Pennsylvania, 68 P.S. § 250.207, Act 64 of 2026.)"
2. `tenant-screening`: add "Does the state bar landlords from using expunged or limited-access (clean slate) criminal records in housing decisions? (Pennsylvania, 18 Pa.C.S. § 9122.5(a.1).)"
3. `optional-lease-terms` / `required-disclosures`: Pennsylvania's Real Estate Seller Disclosure Law expressly covers a lease with an option to purchase (68 Pa.C.S. § 7103(a)). The existing question already fits; no change.

# Topic gaps sync (Claude Code, 2026-11-08)

**Merge.** Base 31e6155: 247 new rows and 26 shared rows tagged, matching the log; no other row changed. 122 of 122 delta quotations that cite the 1951 Act or 51 Pa.C.S. match the live palegis.us text, which answered scripted requests this time; so do the §6 quotations from Acts 64 and 67 of 2026 (§§ 207, 208).

**§6 findings applied:**
- `edu-no-application-fee-cap-pa` (1): the § 208 rule from 2026-12-21.
- `early-termination-pa` (5): flat one-month fee, following the GA, SC, AZ, NC and VA overrides. PA is untagged from `early-termination-ks`, and six PA rows now point to the override.
- `edu-drug-activity-eviction-pa` (6): the CARES caveat.
- `edu-servicemember-rights-pa` (7): the rule abbreviation.
- Parking (8): segments for `assigned-parking-space` (replaced), `parking-vehicle-rules` and `parking-ks-oh-ca` (appended).
- `casualty-termination-pa` (9): the fault persons now match `tenant-caused-damage-pa`.
- `edu-habitability-pa` (10): the case-law note.

Findings 2, 3 and 4 needed no row change.

**Re-check of the 21 rows edited after round 2 (rule 80).** A fresh checker read them against official palegis.us texts: Titles 53, 66 and 68, the Fair Credit Extension Uniformity Act, the Fiscal Code, the Human Relations Act, the UTPCPL and the Plain Language Consumer Contract Act. It found 1 ERROR and 16 FIXes in 10 rows, and Claude Code confirmed each source quotation before applying them.
- The ERROR: `edu-rent-escalation-pa` said no statute limits mid-term rent increases. 68 Pa.C.S. §§ 3410(a), (f)(3), 4412 and 5410 freeze the terms for a year after a conversion notice and cap later increases for eligible tenants.
- The FIXes:
  - the § 513 appeal escrow and deposit;
  - "immediate family";
  - the 53 Pa.C.S. § 304(b) ordinance and reasonable-belief qualifiers;
  - § 512(e);
  - the FCEUA scope;
  - the PLCCA $50,000 exclusion;
  - the § 1531(c) trigger and its nonpayment exception;
  - the § 501(e) lease waiver;
  - the § 1522(a) scope: no sewer, residential buildings only, plus the emergency exception;
  - the name of Chapter 14.
- One erratum was narrowed: "express written consent" was dropped, since § 3410(a) doesn't say it.
- A sweep for the same wording fixed three sibling rows: `edu-no-rent-increase-notice-pa`, `edu-statutory-caps-pa` and `edu-retaliation-pa`.
- Pa.R.Civ.P.M.D.J. 514.1, which the checker couldn't reach, matched on pacodeandbulletin.gov.
- The other 11 rows were clean.
- The checker observed that "Utility Service Tenants Rights Act" is a popular name. Title 66 heads it "Subchapter B. Discontinuance of Service to Leased Premises". No change.

**NEEDS_REVIEW kept:** `edu-no-property-tax-rent-statement-pa`. The Taxpayer Relief Act (Act 1 of the 2006 First Special Session) can't be reached: palegis.us returns the regular-session Liquor Code act in its HTML, iframe and PDF forms, and the legacy URL redirects to the same page. Only that unreachable source keeps the row open. This follows Part 5.

**Arbitration.** Not offered, as the pass concluded: whether the UTPCPL reaches a void term rests only on case law, under Taylor's 2026-11-07 rule.

**§7.** The two KS rows cite PA sections inside "no analogue to" contrasts in KS's own absence notes. They were not edited.

**Records.**
- Citations: 274 rows (log §2 plus `early-termination-pa`).
- Topic questions: 2, under `parking-rules-notice` and `tenant-screening`.
- SOP 2.03: rules 11, 14 and 18.
- Builder note: `parking-disclosure-pa` (backlog).

**Result.** Pennsylvania has 392 active rows: 391 VERIFIED, 1 NEEDS_REVIEW. No unexplained same-topic pairs.
