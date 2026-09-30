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
