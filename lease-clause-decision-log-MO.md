# Missouri — lease-clause decision log (state #25)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: Chapters 441, 534 and 535 of the Revised Statutes of Missouri read whole from revisor.mo.gov (72, 45 and 23 sections as indexed), saved and hash-matched; section index diffed against the MO rows, every uncited section listed with a reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Missouri REALTORS® Residential Lease RES-3010 (rev. 10/31/16), mapped provision by provision; the current members-only edition PM-3010 (rev. 12/31/23) could not be obtained free) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 72 scenarios, Claude-generated on the AZ §18.1 / UT §16 model plus Missouri-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole Revised Statutes of Missouri (30,435 sections, load proved against the site's own chapter indexes) and the Missouri Constitution loaded in the built-in browser; 109 batteries, control terms 0 hits, absence patterns tested against known positives; relied-on hits read whole and saved) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `MO` tag and an `MO:` note.

**Date:** 2026-09-30 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole code and Constitution loaded into the browser gave full-text proof of absence and cross-chapter search directly (rule 9).
**Kickoff vs SOP:** no conflict noticed. Rows use the kickoff's citation format (`Mo. Rev. Stat. § 535.300(4)(2)`, `Mo. Const. art. XIV, § 2.3(4)`, `2025 H.B. 595 & 343`), with the full prefix on every citation in `bodyText` and `notes` (programmatic check, §8). This log abbreviates to '§ 535.300'.
**Scope:** Missouri state law only. Kansas City, St. Louis and other local ordinances (source-of-income, rental registration and inspection, nuisance, towing) are flagged, not resolved (rule 3); state law now preempts local rent control, local screening-criteria limits, local deposit caps, local source-of-income mandates and local eviction moratoriums (§ 441.043, § 535.012). Deprioritized and named: manufactured-home land lease communities (Chapter 700), agricultural tenancies and crop liens, commercial leases.
**Input CSV:** `lease-clauses.csv`, **1,895 rows, 17 columns, CRLF, 1,772 active (475 lease clauses, 1,297 education)**; active counts per state match the kickoff exactly (AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, ID 121, IL 148, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 116, SC 111, SD 99, TN 144, TX 137, UT 122, VA 149, WY 107; rule 23; the `states` field is semicolon-separated). No duplicate ids. One active row has a blank `states` field: the intentional parent `security-deposit-return`. No MO rows existed (rule 25). Nothing was in the outputs folder at the start; nothing to delete (rule 8). The master round-trips byte-identically through Python's csv module.
**Output CSV:** `lease-clauses-MO-delta.csv`, **149 rows, 17 columns, CRLF**: 51 existing rows with `MO` added to `states`, an `MO:` note appended and `last_checked` 2026-09-30, and 98 new MO rows. **MO 149 active: 67 lease clauses, 82 education; all VERIFIED.** Merged with the master: 1,993 rows, 1,870 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, each file hash-matched to the browser text (`sources/registry.tsv`):** Chapter 441 (72 sections), Chapter 534 (45), Chapter 535 (23); outside the landlord-tenant chapters §§ 41.944, 64.207, 82.817, 82.1025, 195.253, 209.150, 209.200, 209.204, 213.010, 213.040, 213.070, 250.140, 304.157, 407.010, 407.020, 408.020, 432.010, 432.050, 432.210, 442.055, 442.600, 448.4-112, 456.007, 537.420, 570.120, 571.510, 701.308, 71.286. **Saved as excerpts:** § 67.452(2), § 144.020(1)(6), § 304.001(1), § 407.025(1), § 455.045, Mo. Const. art. XIV, § 1 (vaporization definition) and § 2.3(4). **Read in context only (labelled so in the rows):** §§ 393.108, 393.109, 442.404, 442.560 to 442.592, 511.070, 566.147, 700.600 and the other battery hits named in §17. **Session laws:** 2025 H.B. 595 & 343 (§ 441.043) act text compared with the revisor's in the browser, and 2024 H.B. 2062's effective date read from the House record; neither page was saved, so both are leads and the rows rest on the revisor's version dates (§1.2). **Court rules:** Missouri Supreme Court rule titles screened in the browser (1,647; no landlord-tenant rule; list not saved); Rules 41.01 and 44.01 not read. |
| Step B — tag first | **Done.** 51 existing rows tagged MO (§2.1): the shared generic clauses lawful as written, the ks-oh-ca / ks-oh / ks-ne / ks variants, and two other states' rows whose text fits Missouri (`holdover-ca`, `tenant-forward-proceedings-ca`). 12 bases not tagged, with a variant or MO row instead (§2.2). Every single-state clause screened (§2.3). No shared text edited. |
| Step E — new MO rows | 16 lease clauses (6 optional under rule 54) and 82 education rows; 32 rows carry a CONFIRMED ABSENT search record, 24 of them pure absence rows (`edu-no-*`) (§3). |
| Instruction 24 family | `security-deposit-return-mo` (REQUIRED; 30 days after the tenancy ends; full return or written itemized list with the balance; mailing to the last known address complies; move-out inspection notice; § 535.300(3), (5)). |
| Step D screens | All run (§19). Hits: rule 42 (the carpet-cleaning notice the statute requires inside any carpet-cleaning term, § 535.300(4)(2)); rule 43 (base `early-termination`'s 10-day cure would give up § 441.040 re-entry); rule 50 (§ 535.300(4)(2) 'agreeing, in the rental agreement'; § 441.070 'by special agreement'; § 441.140 'unless otherwise stated in the lease'); rule 52 (no statute, case law unread: variants used); rule 53 (base `holdover` 'maximum permitted' against three statutory double measures with different triggers; base `returned-payments` ceiling-only wording; base `pet-policy` self-limiting removal). Constitution: Mo. Const. art. XIV, § 2.3(4) voids marijuana bans beyond smoking in post-12/8/2022 leases, so base `smoking-policy` is overridden. |
| Optional clauses (rule 54) | 6 offered (carpet-cleaning charge, casualty termination, tenant-caused damage, criminal activity, DV termination fee, marijuana cultivation ban); 9 not offered, with reasons (§6.1). |
| Questions to Taylor (rule 76) | One asked and answered: an optional clause dispensing with notice to quit under § 441.070 — **Don't offer it** (Taylor, 2026-09-30; §6.2). Two later calls flagged in the handoff and then confirmed by Taylor: no notice-service fee, and no marijuana-vaping ban in `smoking-policy-mo` (§6.2). |
| Proof of absence | 32 rows with a CONFIRMED ABSENT search record (battery, hit count, positive test), 24 of them pure absence rows (`edu-no-*`); every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered or Not applicable (§18). |
| Independent check | A separate agent checked all 149 rows against the saved sources: 2 conflicts, 1 wrong, 10 imprecise and 6 unsupported statements, all fixed and re-verified by the same agent (§13). |
| Currency | Current through the 2026 Regular Session (no 2026 change in Chapters 441, 534 or 535). Two 2025 extraordinary sessions screened. One future-dated version noted (§ 513.430, effective 1/1/2027; not relied on). §1.2. |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes:** revisor.mo.gov (Missouri Revisor of Statutes), Revised Statutes of Missouri. Each section has a page (`/main/OneSection.aspx?section=535.300`) printing the current version with its history line and version date; `/main/ViewChapter.aspx?chapter=441` prints a whole chapter; where a section has more than one version (for example a future-dated one), the site lists each with its effective date. The site describes its statutes as unofficial and uncertified. The shell cannot reach the site (proxy 403); the built-in browser could. Text was normalized (soft hyphens removed, whitespace trimmed), hashed with SHA-256 in the browser, transcribed to `sources/` and re-hashed there; every file matched (registry). Where the Write tool stripped trailing spaces or tabs, the bytes were restored and re-hashed (Proposed SOP changes).
- **Constitution:** the revisor's Constitution pages (articles I to XIV; article II prints no sections), parsed into the same corpus.
- **Session laws and currency:** House and Senate bill pages (truly agreed text, approval and effective dates); the revisor's Recent Sections list (2025-2026 changes) and session list.
- **Court rules:** Missouri Supreme Court rules on courts.mo.gov (the site's search is script-rendered and unreadable in the browser; the 1,647 rule titles were screened instead; the list was not saved).
- **Administrative rules:** Code of State Regulations (Attorney General's merchandising-practice rules, 15 CSR 60; Commission on Human Rights rules) not read; no row relies on them (rule 21).
- **Real lease:** Missouri REALTORS® RES-3010 Residential Lease (rev. 10/31/16), PDF on esign.com, text extracted with pdf.js in the browser and saved (`lease/`), hash-matched.
- **Citation format:** `Mo. Rev. Stat. § 535.300(4)(2)`, `Mo. Const. art. XIV, § 2.3(4)`, session laws by year and bill (`2025 H.B. 595 & 343`); every reference prefixed (programmatic check, §8); log references written 'MO log §N'.

### 1.2 Currency (rule 16)
- **Compilation currency:** the revisor posts enacted text on its effective date (Mo. Rev. Stat. § 3.090, read in context) and prints future-dated versions separately (for example § 513.430, a new version effective 1/1/2027 under 2026 H.B. 1870 and S.B. 835 & 1111; exemptions; not relied on). The Recent Sections list (all sections changed in 2025 and 2026) shows **no 2026 change in Chapters 441, 534 or 535**.
- **Sessions:** the 2026 Regular Session; the 2025 First and Second Extraordinary Sessions (S.B. 3, effective 9/9/2025; redistricting sections dated 1/1/2099) touch none of the sections relied on. A 2026 constitutional amendment (art. VI, § 18(b), county assessors, effective 9/3/2026) is irrelevant.
- **Acts behind the sections relied on (effective dates):** 2025 H.B. 595 & 343 (§ 441.043: rent control, source of income, screening criteria, deposit limits, right of first refusal; truly agreed, approved 7/14/2025, effective 8/28/2025, no emergency clause; the act's § 441.043 text matched the revisor's when compared in the browser, but the act page was not saved, so the rows cite the revisor's version date). 2024 H.B. 2062 (§§ 534.602, 534.604, and § 535.012 merged with S.B. 895 § 67.137; effective 8/28/2024 per the House record, read but not saved, and the revisor's version date; no emergency clause found; the S.B. 895 bill page was not read). Older acts: the revisor's version dates were taken as the effective dates (rule 16, last sentence): 2023 S.B. 106 (§ 441.740, 8/28/2023), 2019 H.B. 243 & 544 (§ 441.920), 2018 S.B. 581 (§ 535.300, § 535.030), 2018 H.B. 1796 (§ 442.055), 2014 S.B. 656 (§ 571.510, 10/10/2014 after a veto override).
- **General revisory act:** Missouri passes no annual technical-corrections act of the Illinois kind that this pass could identify; the Recent Sections list, which captures every changed section, was screened instead.
- **Bulk lag check:** the corpus was loaded from ViewChapter pages; the 2025-amended § 441.043 as loaded matches both its OneSection page and the act, so the chapter pages are not lagging. Chapters 534 and 535 were also fetched section by section, twice each, with identical results.
- **Real-lease probe:** the REALTORS form cites § 535.300, § 441.065 and §§ 441.710 and following, all still current; no renumbering signal.

### 1.3 Corpus and method (rule 19)
- **Loaded:** every chapter on the site's chapter indexes, sequentially (parallel loading made the site return 'Loading…' pages; reloaded one at a time). 30,435 statute entries equal the 30,435 index entries; Chapters 98, 122, 184, 549 and 551 loaded section by section; Chapter 57's index refetched (93 sections); §§ 98.030, 184.500 and 184.850 needed an alternate parse. Plus the Missouri Constitution: **30,836 entries** in all.
- **Engine:** JavaScript regular expressions, case-insensitive, over each entry's normalized text. Control terms 'xqzvbnmplk', 'zzqqyyxx' and 'qqxjzvwplm': 0 hits (batteries 1, 2, 81). Calibration: 'security deposits?' 22 sections including § 535.300; 'carpet cleaning' 1 (§ 535.300); 'methamphetamine … lessee' 1 (§ 441.236). Missouri writes numbers in words ('thirty days'); patterns that needed numbers used words.
- **Known positives:** every zero-hit absence pattern was tested against a statute-style synthetic sentence first (recorded per pattern in the battery files). **Known-positive failure:** battery 70 (casualty) missed § 441.645, which says 'destroyed by an act of God'; the casualty answer rests on the whole read of Chapter 441.
- **Order problem found and fixed:** batteries 1-60 ran before the Constitution was parsed into the corpus. All were re-run on the full corpus: only Constitution sections were added, and the one that matters (battery 35, marijuana near lease terms: 0 → Mo. Const. art. XIV, §§ 1, 2) was already relied on (`sources/batteries-MO-rerun.txt`).
- **Boundary:** statutes and the Constitution only. Administrative rules, case law (the revisor's case annotations are treated as leads), local codes and the adopted building and fire codes were not searched or read, and nothing is claimed about them.
- **Saved:** batteries 1-109 (`batteries-MO*.tsv`, each hash-matched), the re-run record, every section relied on, the real lease.

### 1.4 Section-open vs recall (rule 15)
Every row was drafted with the saved primary text open; the recall subset is empty. Sections read only in context are labelled so in their rows. **Case law is not relied on anywhere:** waiver by accepting rent (Fritts), the penalty doctrine for fees, exculpatory clauses, an implied warranty of habitability, what 'accidentally' means in § 441.010, whether vaping marijuana is 'smoking' under art. XIV, whether a lease term is a 'condition' under § 441.040, jury trial in rent cases (Brainchild), and the reach of § 442.600 and the Merchandising Practices Act to leases are each flagged as unread.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged MO as written (51)
`acceptable-payment-methods`, `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `assistance-animal-accommodation`, `common-area-use`, `default-by-tenant`, `due-at-signing`, `early-termination-ks`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance`, `landlords-access`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `possession-delay`, `rent-payment`, `rental-application-accuracy`, `residential-use-only`, `services-utilities-provided-ks-oh`, `severability`, `snow-removal`, `storage-space-ks-oh-ca`, `surrender-end-of-term-ks-ne`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`.

Every tagged row carries an `MO:` note naming the controlling Missouri section and ending 'Read section-open 2026-09-30 (MO log §1). s5a.1: states-only change, no propagation owed.' The ones that matter:
- **`default-by-tenant`.** Missouri requires only a demand for rent before a rent-and-possession case (§ 535.020, § 535.060) and lets the landlord re-enter after 10 days' notice to vacate for a breach of a written-lease condition, with no cure (§ 441.030, § 441.040). The clause's 'except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure' preserves that (rule 43). The prevailing-party fee sentence meets no Missouri statute (battery 89).
- **`early-termination-ks`** instead of the base: the base's separate 10-day cure for a material breach would give up § 441.040 re-entry (rule 43).
- **`holdover-ca`** instead of the base: 'maximum amount permitted by applicable law' would point at three double measures (§ 441.080, § 441.100, § 534.330), each with a trigger the base's 'after the end of the Term' does not match (rule 53).
- **`late-fee`.** No cap, no grace period, no acceptance-waiver statute (battery 10); the non-waiver sentence stays; Fritts (waiver by accepting late rent) is reported in the revisor's annotation and not read.
- **`parking-vehicle-rules`.** Towing without an officer requires the landlord's presence plus a 17 × 22-inch sign or police notice and a wait (§ 304.157(4)); the clause tows only 'in accordance with applicable law'. Missouri has no expired-registration bar (unlike Idaho).
- **`no-alterations`.** Preserves the § 213.040(2)(1) modification right; Missouri does not require the restoration term in the lease (unlike Idaho), so no required clause.
- **The ks-oh-ca / ks-oh variants.** No Missouri statute voids exculpatory terms (battery 20; the 171 hits are indemnity provisions in other fields); enforceability of 'not liable' wording is case law, unread, so the variants are used (rule 52). The REALTORS form uses a broad exculpation clause (§15); that is a lead about practice, not law.
- **`electronic-signatures`.** Missouri UETA excludes only wills and parts of the UCC (§ 432.210(2)); no notice exclusions (battery 85; rule 45).
- **`due-at-signing`.** The bracket's 'last month's Monthly Rent' example may count toward the two-month deposit cap because a deposit is any deposit 'however denominated' (§ 535.300(8)); flagged in `edu-deposit-last-month-mo`, case law unread.

### 2.2 Not tagged — Missouri variant or MO row instead (12 bases)

| Base | Instead | Why the base fails in Missouri |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-mo` | Instruction 24; § 535.300(3), (5) |
| `security-deposit-use` | `security-deposit-use-mo` | 'Remedy a Tenant default under this Lease' is broader than the closed list in § 535.300(4) ('only such amounts as are reasonably necessary' for three purposes) |
| `returned-payments` | `returned-payments-mo` | Ceiling-only wording (rule 53); § 570.120(6)(2) fixes $25 plus the bank's actual charge for a dishonored check |
| `pet-policy` | `pet-policy-mo` | Removing a pet 'without liability ... to the extent applicable law permits' hides a § 441.233(1) conflict (removing a tenant's personal property without judicial process is forcible entry and detainer) (rule 53); Missouri pet deposits sit outside § 535.300 |
| `smoking-policy` | `smoking-policy-mo` | Its vaping ban reaches marijuana consumed by vaporization, which Mo. Const. art. XIV, § 2.3(4) may protect ('by means other than smoking') |
| `holdover` | `holdover-ca` (tagged) | 'Maximum permitted' points at § 441.080 / § 441.100 / § 534.330 with mismatched triggers (rule 53) |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) + `abandoned-property-mo` | 'Disposed of at Tenant's cost' rests on no Missouri procedure outside § 441.065 (§ 441.233(1)) |
| `early-termination` | `early-termination-ks` (tagged) | 10-day cure gives up § 441.040 re-entry (rule 43) |
| `tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided` | the ks-oh-ca / ks-oh variants (tagged) | 'Not liable' sentences; rule 52 |

**Generic-coverage check (programmatic):** every generic lease clause is tagged MO or superseded by an MO-tagged row, except these, each deliberate: `ev-charging-shared-area-co` and `ev-charging-end-of-tenancy-co` (rest on Colorado's EV statute; Missouri has none, battery 44), `extended-absence-notice-ks` (URLTA absence notice; Missouri has no such statute, and `abandoned-property-mo` covers abandonment), `default-by-tenant-ks-ne`, `late-fee-ne`, `surrender-end-of-term-mn-nd`, `acceptable-payment-methods-nj` and `possession-delay-ca` (the base or another variant is tagged instead and fits Missouri).

### 2.3 Other states' specific rows screened, not tagged
All active single-state lease clauses were listed by `topic_key`, and every plausible analogue was read in full. Beyond the two tagged (`holdover-ca`, `tenant-forward-proceedings-ca`), none applies to Missouri as written, because each names its own state's statute. What MO took instead:
- **Deposits.** The `security-deposit-return-*` variants became `security-deposit-return-mo`; `security-deposit-use-ks` and the base became `security-deposit-use-mo`; `deposit-cost-schedule-il` became the narrower `deposit-carpet-cleaning-mo` (Missouri lets the lease pre-set only carpet-cleaning amounts, with a notice). Nonrefundable-deposit rows have no Missouri basis (a deposit 'however denominated' is a security deposit).
- **Opt-in rows.** `casualty-termination-pa` / `-il` / `-id` became `casualty-termination-mo`; `tenant-caused-damage-tn` became `tenant-caused-damage-mo` with a § 441.010 carve-out; `criminal-activity-nc` became `criminal-activity-mo` with marijuana and victim carve-outs; `cannabis-cultivation-il` became `cannabis-cultivation-mo`. `holdover-rate-*`, `notice-to-quit-waiver-pa`, `homestead-waiver-va`, `exemption-waiver-al`, `landlord-lien-tx`, `household-goods-lien-tn`, `notice-service-fee-*`, `collection-fee-*`, `unpaid-*-interest-*`, `crime-free-addendum-az`, `drug-free-housing-addendum-il`, `smoke-drift-waiver-ut` and the `tenant-repair-agreement-*` rows have no Missouri counterpart or were not offered (§6.1).
- **Disclosures.** The owner-identity rows became `landlord-disclosure-mo` (§ 535.185); `meth-disclosure-*` became `meth-disclosure-mo` (§ 441.236); Missouri adds `contamination-disclosure-mo` (§ 442.055, new topic key).
- **Other.** `periodic-tenancy-notice-*` became `periodic-tenancy-notice-mo`; `abandoned-property-*` became `abandoned-property-mo`; the `alarm-duties` rows have no Missouri statute (`edu-alarm-duties-mo`); `electronic-notice-*` rows not copied (no statutory e-mail regime; `edu-notice-service-mo`); `move-in-inventory-*` not copied (no Missouri statute, battery 84).

## 3. New MO rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type`, `content_type`, `lease_clause_basis` or any field other than `states`, `notes` and `last_checked` changed (programmatic check, §8).

### 3.2 New MO lease clauses (16)
| Row | topic_key | rule_type | Basis | Rests on | Opt-in? |
|---|---|---|---|---|---|
| `security-deposit-use-mo` | security-deposit-use | REQUIRED/PROHIBITED | CONSTRAINED_TERM | § 535.300(4), § 535.300(1), § 535.300(2), § 535.300(7), § 535.300(8) | — |
| `security-deposit-return-mo` | security-deposit-return | REQUIRED | SERVES_LANDLORD | § 535.300(3), § 535.300(5), § 535.300(6) | — |
| `deposit-carpet-cleaning-mo` | deposit-cost-schedule | CONDITIONAL | CONSTRAINED_TERM \| REQUIRED_DISCLOSURE: § 535.300(4)(2) | § 535.300(4)(2) | Yes (rule 54) |
| `landlord-disclosure-mo` | owner-identity-disclosure | REQUIRED | REQUIRED_DISCLOSURE: § 535.185(1) | § 535.185(1), § 506.150, § 535.185(2), § 535.185(3), § 441.520(4)(2) | — |
| `meth-disclosure-mo` | meth-disclosure | CONDITIONAL | REQUIRED_DISCLOSURE: § 441.236 | § 441.236 | — |
| `contamination-disclosure-mo` | hazardous-contamination-disclosure | CONDITIONAL | REQUIRED_DISCLOSURE: § 442.055 | § 442.055 | — |
| `abandoned-property-mo` | abandoned-property | RECOMMENDED | SERVES_LANDLORD | § 441.065, § 441.065(3), § 535.040(1), § 535.040(2), § 441.060(5) | — |
| `periodic-tenancy-notice-mo` | termination-notice | RECOMMENDED | SERVES_LANDLORD | § 441.060(4)(1), § 441.060(1), § 441.050, § 441.070, § 441.060(3) | — |
| `returned-payments-mo` | returned-payments | RECOMMENDED | CONSTRAINED_TERM \| SERVES_LANDLORD | § 570.120(6)(2) | — |
| `pet-policy-mo` | pet-policy | RECOMMENDED | SERVES_LANDLORD | § 441.065, § 441.233(1), § 535.300(8), § 41.944, § 41.944(3) | — |
| `smoking-policy-mo` | smoking-policy | RECOMMENDED | SERVES_LANDLORD | Const. art. XIV, § 2.3(4), Const. art. XIV, § 1.2(1) | — |
| `casualty-termination-mo` | casualty-termination | CONDITIONAL | SERVES_LANDLORD | § 441.645, § 441.010 | Yes (rule 54) |
| `tenant-caused-damage-mo` | tenant-caused-damage | CONDITIONAL | SERVES_LANDLORD | § 441.645, § 441.010, § 537.420, § 441.030 | Yes (rule 54) |
| `criminal-activity-mo` | criminal-activity | CONDITIONAL | SERVES_LANDLORD | § 441.030, § 441.040, § 441.020, §§ 441.710 to 441.880, Const. art. XIV, § 2.3(4) | Yes (rule 54) |
| `dv-termination-fee-mo` | dv-lease-termination | CONDITIONAL | CONSTRAINED_TERM | § 441.920(6), § 441.920(3), § 441.920(4) | Yes (rule 54) |
| `cannabis-cultivation-mo` | cannabis | CONDITIONAL | SERVES_LANDLORD | Const. art. XIV, § 2.3(4) | Yes (rule 54) |


### 3.3 New MO education rows (82)
| Row | topic_key | rule_type | Rests on |
|---|---|---|---|
| `edu-security-deposit-rules-mo` | security-deposit-penalty | REQUIRED | § 535.300(1), § 535.300(2), § 441.043(2)(3) |
| `edu-deposit-cap-mo` | security-deposit-cap | CONSTRAINED | § 535.300(1), § 441.043(2)(3) |
| `edu-deposit-interest-mo` | security-deposit-interest | RECOMMENDED | § 535.300(2), § 535.300 |
| `edu-deposit-holding-mo` | security-deposit-holding | REQUIRED | § 535.300(2) |
| `edu-deposit-inspection-mo` | condition-inspection | REQUIRED | CONFIRMED ABSENT; § 535.300(5), § 535.300(4)(2), § 535.300(6) |
| `edu-pet-deposit-mo` | pet-fees | RECOMMENDED | § 535.300(8), § 41.944(3), § 213.040(2)(2) |
| `edu-no-holding-deposit-rule-mo` | holding-deposit | RECOMMENDED | CONFIRMED ABSENT; § 535.300, § 535.300(8) |
| `edu-no-deposit-installments-mo` | deposit-installments | RECOMMENDED | CONFIRMED ABSENT; §§ 377.030 |
| `edu-deposit-last-month-mo` | deposit-last-month-rent | RECOMMENDED | CONFIRMED ABSENT; § 535.300(7), § 535.300(1) |
| `edu-no-deposit-transfer-rule-mo` | security-deposit-on-sale | RECOMMENDED | CONFIRMED ABSENT; § 535.300, § 441.043, § 41.944, § 535.081 |
| `edu-no-late-fee-cap-mo` | late-fee | RECOMMENDED | CONFIRMED ABSENT; § 535.020, § 441.043 |
| `edu-fees-not-rent-mo` | fees-as-rent | RECOMMENDED | § 535.020, § 441.005(5) |
| `edu-no-application-fee-rule-mo` | application-fees | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-rent-control-preemption-mo` | rent-control | RECOMMENDED | § 441.043(1), § 535.012 |
| `edu-no-rent-increase-notice-mo` | rent-increase-notice | RECOMMENDED | CONFIRMED ABSENT; § 70.851, § 70.856, § 700.600, § 441.060(4)(1) |
| `edu-no-rent-receipt-rule-mo` | rent-receipts | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-rent-tax-mo` | rent-tax | RECOMMENDED | § 144.020(1)(6) |
| `edu-legal-interest-mo` | unpaid-damages-interest | RECOMMENDED | § 408.020, §§ 408.030 |
| `edu-no-acceptance-waiver-statute-mo` | waiver-by-acceptance | RECOMMENDED | CONFIRMED ABSENT; § 534.330 |
| `edu-landlord-duties-mo` | landlord-maintenance | RECOMMENDED | § 441.234, §§ 441.500 to 441.643, § 441.645, § 64.207 |
| `edu-repair-and-deduct-mo` | tenant-repair-remedies | RECOMMENDED | § 441.234(1) |
| `edu-housing-code-receivership-mo` | substandard-property-receivership | RECOMMENDED | §§ 441.500 to 441.643, § 441.510, § 441.540, § 441.560 |
| `edu-utility-heat-receivership-mo` | utility-landlord-account | RECOMMENDED | § 441.650 |
| `edu-water-sewer-owner-liability-mo` | utilities-responsibility | RECOMMENDED | § 250.140(1) |
| `edu-self-help-eviction-mo` | self-help-eviction | PROHIBITED | § 441.233(1), § 534.020, § 534.330(1), § 441.065 |
| `edu-no-entry-statute-mo` | landlord-entry | RECOMMENDED | CONFIRMED ABSENT; § 441.040, § 441.233, § 535.185 |
| `edu-no-retaliation-statute-mo` | retaliation | RECOMMENDED | CONFIRMED ABSENT; § 213.070, § 701.308(2), § 441.920(2) |
| `edu-alarm-duties-mo` | alarm-duties | RECOMMENDED | CONFIRMED ABSENT; § 293.120 |
| `edu-notice-to-quit-mo` | termination-notice | REQUIRED | § 441.070, § 441.060(1), § 441.050, § 535.020 |
| `edu-nonpayment-demand-mo` | nonpayment-notice | REQUIRED | § 535.020, § 535.060, § 535.120, § 535.140 |
| `edu-eviction-process-mo` | eviction-process | RECOMMENDED | §§ 535.010 to 535.180, § 535.020, § 535.030, § 535.040 |
| `edu-cure-grounds-mo` | cure-and-eviction-grounds | RECOMMENDED | § 441.030, § 441.040, § 441.020 |
| `edu-expedited-drug-eviction-mo` | expedited-criminal-eviction | RECOMMENDED | §§ 441.710 to 441.880, § 441.710, § 441.720, §§ 535.030 |
| `edu-post-eviction-property-mo` | post-eviction-property | RECOMMENDED | § 535.040(2), § 441.060(5), § 534.355 |
| `edu-unauthorized-occupant-removal-mo` | unauthorized-occupant-removal | RECOMMENDED | § 534.602, § 534.604, § 441.760(2) |
| `edu-holdover-damages-mo` | holdover | RECOMMENDED | § 441.080, § 441.100, § 441.110, § 534.330(1) |
| `edu-no-just-cause-mo` | for-cause-eviction | RECOMMENDED | CONFIRMED ABSENT; § 441.070, § 441.880(5), § 213.040, § 441.920(2) |
| `edu-dv-protections-mo` | dv-lease-termination | PROHIBITED | CONFIRMED ABSENT; § 441.920(1), § 455.010, § 441.920(7), § 64.207 |
| `edu-servicemember-termination-mo` | servicemember-rights | RECOMMENDED | § 41.944 |
| `edu-occupancy-limit-mo` | permitted-occupants | RECOMMENDED | § 441.060(2), § 213.040(8), § 213.010(11), § 213.040(1) |
| `edu-tenant-forward-summons-mo` | tenant-forward-proceedings | RECOMMENDED | § 441.090 |
| `edu-unauthorized-sublet-mo` | sublet-assign | RECOMMENDED | § 441.030, § 534.347, § 432.060 |
| `edu-tenant-waste-mo` | tenant-statutory-duties | RECOMMENDED | § 441.030, § 441.040, § 537.420, § 441.630 |
| `edu-tenant-caused-damage-mo` | tenant-caused-damage | RECOMMENDED | § 441.645, § 537.420, § 441.030, § 441.040 |
| `edu-casualty-mo` | casualty-termination | RECOMMENDED | CONFIRMED ABSENT; § 441.645 |
| `edu-attorney-fees-mo` | attorney-fees | RECOMMENDED | CONFIRMED ABSENT; § 441.850, § 534.347 |
| `edu-fair-housing-mo` | fair-housing | PROHIBITED | § 213.040(1), § 213.010, § 213.040(11), § 213.040(9) |
| `edu-disability-modification-mo` | disability-accommodation | RECOMMENDED | § 213.040(2)(1) |
| `edu-source-of-income-mo` | source-of-income | RECOMMENDED | § 441.043(2)(1), § 213.040, § 571.510 |
| `edu-tenant-screening-mo` | tenant-screening | RECOMMENDED | CONFIRMED ABSENT; § 441.043(2)(2), § 213.040, § 441.043 |
| `edu-service-animal-misrepresentation-mo` | service-animal-misrepresentation | RECOMMENDED | § 209.204(3), § 209.204(2), § 209.204(5) |
| `edu-lead-hazard-mo` | lead-based-paint | PROHIBITED | § 701.308(1), § 701.306 |
| `edu-owner-disclosure-mo` | owner-identity-disclosure | REQUIRED | § 535.185(1) |
| `edu-nonresident-landlord-agent-mo` | nonresident-owner-agent | REQUIRED | § 441.520(4)(2), § 82.817 |
| `edu-condo-conversion-mo` | conversion-notice | REQUIRED | § 448.4-112, § 448.4-112(6), § 441.050, § 441.060 |
| `edu-successor-owner-mo` | sale-or-management-change | RECOMMENDED | § 535.070, § 535.081, § 535.090, § 441.130 |
| `edu-foreclosure-tenants-mo` | foreclosure | REQUIRED | § 534.030(1), § 441.020 |
| `edu-notice-service-mo` | notice-delivery-methods | RECOMMENDED | § 441.050, § 441.060, § 534.050, § 441.065(3) |
| `edu-lease-in-writing-mo` | statute-of-frauds-lease-term | RECOMMENDED | § 432.010, § 432.050, § 441.060(3), § 441.120 |
| `edu-consumer-protection-mo` | consumer-protection-act | RECOMMENDED | § 407.010(4), § 407.020(1), § 407.025(1) |
| `edu-prohibited-lease-terms-mo` | prohibited-lease-terms | PROHIBITED | CONFIRMED ABSENT; § 441.234(2), § 441.610, § 571.510(2), Const. art. XIV, § 2.3(4) |
| `edu-firearms-mo` | firearms | PROHIBITED | § 571.510, § 99.040, Const. art. I, § 23 |
| `edu-towing-mo` | towing | RECOMMENDED | § 304.157(4), § 304.001(1), § 304.157(8) |
| `edu-cannabis-mo` | cannabis | PROHIBITED | Const. art. XIV, § 2.3(4), Const. art. XIV, § 1.2(1), Const. art. XIV, §§ 1-2 |
| `edu-nuisance-actions-mo` | nuisance | RECOMMENDED | § 195.253, § 82.1025, § 67.452, § 67.452(2) |
| `edu-county-habitability-rules-mo` | rental-inspection | RECOMMENDED | § 64.207 |
| `edu-psychologically-impacted-mo` | stigmatized-property | RECOMMENDED | § 442.600 |
| `edu-landlord-attachment-mo` | landlord-lien | RECOMMENDED | § 441.240, § 441.250, § 441.260, § 441.270 |
| `edu-scope-mo` | scope | RECOMMENDED | § 441.005, § 441.060(4)(2), § 700.600, §§ 441.240 to 441.300 |
| `edu-no-radon-disclosure-mo` | radon-disclosure | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-mold-disclosure-mo` | mold-disclosure | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-bed-bug-rule-mo` | bed-bug-disclosure | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-flood-disclosure-mo` | flood-disclosure | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-tenant-death-rule-mo` | tenant-death | RECOMMENDED | CONFIRMED ABSENT; § 441.160, § 441.190, § 448.4-112 |
| `edu-no-ev-charging-rule-mo` | ev-charging | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-immigration-status-rule-mo` | immigration-status | RECOMMENDED | CONFIRMED ABSENT; § 213.040(1), §§ 442.560 to 442.592 |
| `edu-no-emergency-assistance-rule-mo` | emergency-assistance-right | RECOMMENDED | CONFIRMED ABSENT; § 441.920(2) |
| `edu-no-security-device-rule-mo` | security-devices | RECOMMENDED | CONFIRMED ABSENT; § 64.207(2)(6), § 441.233(1) |
| `edu-no-eviction-sealing-mo` | eviction-record-sealing | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-mitigation-statute-mo` | abandonment-and-mitigation | RECOMMENDED | CONFIRMED ABSENT; § 535.300(4)(3) |
| `edu-no-submetering-rule-mo` | utility-submetering-disclosure | RECOMMENDED | CONFIRMED ABSENT;  |
| `edu-no-lease-copy-rule-mo` | lease-copy | RECOMMENDED | CONFIRMED ABSENT;  |


## 4. Layout and placement (rule 40)

**Code-wide typography search (batteries 86-87):** 'bold', 'underline', 'conspicuous', capital letters, type size, 'separate document', 'substantially the following form' and initialing, each near landlord, tenant, lease, lessee, lessor, rental agreement or dwelling-unit terms, every pattern tested against a synthetic positive. **No bold, underline, capitals, type-size, separate-document or initialing rule for any residential lease term.** The hits are other kinds of agreements: car-rental collision damage waivers (§ 407.735, bold ten-point), car-rental advertising (§ 407.732), self-storage lien statements (§ 415.415), leases of goods (§ 400.2A-214), mineral leases (§§ 444.010, 444.020), concealed-carry signs (§ 571.107) and ballot forms (§§ 67.319, 249.422); § 535.040(3) refers to a 'conspicuous permanent label' on third-party property. **No first-page or first-clause rule, so no competing-placement question for Taylor (rule 40).** Prescribed forms and wording a landlord meets:

| Rule | Requirement | Where it lives |
|---|---|---|
| § 535.185(1) | Manager and owner/agent names and addresses, in writing, at or before the start of the tenancy | `landlord-disclosure-mo` (REQUIRED) |
| § 441.236 | Methamphetamine production disclosure in writing to the prospective lessee (if known) | `meth-disclosure-mo` (CONDITIONAL; builder: deliver before signing) |
| § 442.055 | Radioactive or hazardous contamination disclosure in writing to the prospective lessee (if a report was received) | `contamination-disclosure-mo` (CONDITIONAL; builder: deliver before signing) |
| § 535.300(4)(2) | A lease that sets carpet-cleaning amounts must also include the notice that the tenant may be liable for actual costs beyond ordinary wear and tear | `deposit-carpet-cleaning-mo` (CONDITIONAL) |
| § 441.065(3) | Abandonment notice text, posted and mailed first-class and certified | `abandoned-property-mo` (builder: generate the notice verbatim) |
| § 534.030(3) | Post-foreclosure notice text; envelope marked 'Notice to Occupant Following Foreclosure' | `edu-foreclosure-tenants-mo` |
| § 535.300(3), (5) | Written itemized list within 30 days; written inspection notice | `security-deposit-return-mo` |
| § 304.157(4)(1) | Towing sign in plain view at all entrances, at least 17 × 22 inches, letters at least 1 inch, prohibiting public parking, with the removal statement, maximum fee and a law-enforcement or 24-hour phone number | `edu-towing-mo` |
| 40 CFR 745.113 | Federal lead warning statement | `lead-based-paint` (tagged) |

**Omission sanctions that forfeit money:**
- Wrongfully withholding a deposit: twice the amount wrongfully withheld (§ 535.300(6)).
- No manager/owner disclosure: the person who should have disclosed becomes the landlord's agent for service, notices and the landlord's obligations (§ 535.185(3)).
- Self-help eviction or utility shutoff: forcible entry and detainer, with double damages and double monthly rents in the judgment (§ 441.233, § 534.330).
- Knowing nondisclosure of contamination after receiving a report: class A misdemeanor (§ 442.055).
- Unlawful towing authorization: class C misdemeanor (§ 304.157(9)).
- (Tenant side) not forwarding a summons: forfeiture of three years' rent (§ 441.090).

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged MO.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| Carpet-cleaning charge agreed in the lease | § 535.300(4)(2) ('agreeing, in the rental agreement ... upon amounts or fees to be charged for cleaning of the carpet', with the required notice) | **Offered** (`deposit-carpet-cleaning-mo`, CONDITIONAL); rule 50 choice made available, not defaulted |
| Landlord or tenant termination after a casualty | § 441.645 releases rent only for destruction not caused by the tenant; no termination right in any statute (Chapter 441 read whole) | **Offered** (`casualty-termination-mo`, CONDITIONAL); standing GA decision; the clause preserves § 441.645 |
| Tenant-caused damage (always asked) | § 441.645 excludes tenant-caused disasters; § 537.420 treble damages for waste; § 441.010 bars actions for accidental fires | **Offered** (`tenant-caused-damage-mo`, CONDITIONAL) with a carve-out deferring to § 441.010; education row `edu-tenant-caused-damage-mo`. What 'accidentally' covers is case law, unread. Decided by Claude |
| Criminal-activity clause | § 441.030 / § 441.040 (breach of a written-lease condition → 10 days' notice to vacate, no cure); § 441.020 (drug use voids the lease); §§ 441.710 to 441.880 (expedited track) | **Offered** (`criminal-activity-mo`, CONDITIONAL): adds non-drug criminal activity as a lease condition; carve-outs for lawful marijuana (Mo. Const. art. XIV) and victims (§ 441.920). Decided by Claude |
| Termination fee for a domestic-violence early exit | § 441.920(6) ('may impose a reasonable termination fee') | **Offered** (`dv-termination-fee-mo`, CONDITIONAL, landlord's figure in a bracket). Decided by Claude |
| Ban on marijuana cultivation | Mo. Const. art. XIV, § 2.3(4) (an entity may prohibit cultivation on property it leases) | **Offered** (`cannabis-cultivation-mo`, CONDITIONAL) |
| Dispensing with notice to quit by special agreement | § 441.070 ('when, by special agreement, notice is dispensed with') | **Not offered — Taylor, 2026-09-30** (§6.2); recorded in `edu-notice-to-quit-mo` only |
| Stipulated holdover rate | § 441.080 (double yearly value), § 441.100 (double rent), § 534.330 (double damages and rents) | **Not offered:** statutory measures exist (standing GA rule); `holdover-ca` (actual damages) tagged. The REALTORS form uses a 2× per-diem contract rate (§15); a lead only. Decided by Claude |
| Notice-service fee | No fee statute; nonpayment track needs only a demand, which service of the summons can supply (§ 535.140) | **Not offered:** little to attach a fee to, and the penalty doctrine is unread; default-by-tenant already recovers reasonable costs. Decided by Claude; **flagged to Taylor** (§6.2) |
| Collection fee | No collection-fee or collection-agency statute (battery 88: 0 hits) | **Not offered** for the same reason. Decided by Claude |
| Interest on unpaid amounts at a contract rate | § 408.020 (9% on written contracts when no rate is agreed) | **Not offered:** the legal rate applies without a clause; a higher rate raises usury questions (§§ 408.030 and following) not read (`edu-legal-interest-mo`). Decided by Claude |
| Waiver of execution exemptions | No statute authorizes a lease waiver (battery 50) | **Not offered;** Chapter 513 not read |
| Jury waiver | No statute; Mo. Const. art. I, § 22(a) | **Not offered:** litigation step; Brainchild unread |
| Contractual lien on tenant property | Only crop liens and court attachment (§§ 441.240 to 441.300) | **Not offered:** self-help seizure is forcible entry and detainer (§ 441.233(1)) (`edu-landlord-attachment-mo`) |
| Tenant-performed statutory duties | No statutory repair duty to shift | **Not offered** as a separate clause; tenant-maintenance, landscaping-irrigation and snow-removal tagged |

### 6.2 Questions asked of Taylor (rule 76)
- **Asked and answered (2026-09-30).** What it is: § 441.070 says no notice to quit is needed 'when, by special agreement, notice is dispensed with'; a lease clause could be that special agreement (for example, 'Tenant agrees that no notice to quit is required to end a month-to-month tenancy'). Recommendation given: don't offer it (it would strip the one-month notice from periodic tenancies, the doctrine on how far it reaches is unread, and it is the kind of term a court reads strictly against the drafter). **Taylor: 'Don't offer it (Recommended)'.** Recorded in `edu-notice-to-quit-mo`; no clause.
- **Flagged in the handoff, then confirmed by Taylor (2026-09-30):** (1) **No notice-service fee** (§6.1), unlike UT and ID, because Missouri requires only a demand for rent, which the lawsuit itself can supply. Taylor: agreed. (2) **`smoking-policy-mo` stays one clause and does not ban vaping marijuana.** Taylor first leaned toward a ban or two versions; after the follow-up check below he agreed with the original recommendation. Follow-up check (read in the browser, not saved; leads only): Mo. Const. art. XIV, § 2 itself defines marijuana-infused products as products 'able to be vaporized or smoked'; Mo. Rev. Stat. § 191.765(7) defines 'smoking' as possession of burning tobacco; Mo. Rev. Stat. § 407.925(12) defines a vapor product as noncombustible. Each treats vaping as distinct from smoking, so a marijuana-vaping ban in a post-12/8/2022 lease is likely void; no case law read. A broader remediation-cost sentence (tenant pays odor and residue cleanup from any vaping) was offered and not taken.

### 6.3 Other drafting decisions made by Claude (recorded, not asked)
- **Deposit cap and fee caps are builder rules, not clause text** (rule 55: the clause states the landlord's figure): `{{security_deposit}}` ≤ 2 × `{{monthly_rent}}`; returned-check fee ≤ $25 plus the bank's actual charge (bracket guidance); DV termination fee 'reasonable' (bracket). §10.
- **Pet deposits stay outside the security deposit** (§ 535.300(8)); `pet-policy-mo` gives them their own return term rather than importing § 535.300 rules.
- **`abandoned-property-mo` has three tracks** (surrender, § 441.065 abandonment, post-judgment) because Missouri's only non-judicial removal right is § 441.065 and § 441.233 makes any other removal from a tenant forcible entry and detainer.
- **No 'additional rent' labelling:** § 535.020 makes other sums not rent for possession purposes 'regardless of how denominated' (`edu-fees-not-rent-mo`).
- **New topic key `hazardous-contamination-disclosure`** (rule 58): no existing key covers § 442.055.

## 7. Open items (none blocking)

| Item | Boundary / what would close it |
|---|---|
| Case law | Waiver by accepting rent (Fritts v. Cloud Oak Flooring Co., 1972, from the revisor's annotation); exact-amount demand (New Brentwood Realty v. Strad, 1974); jury trial in rent-and-possession cases (Brainchild Holdings v. Cameron, Mo. 2017, found only through an amicus brief); exculpatory clauses; the penalty doctrine; an implied warranty of habitability; what 'accidentally' covers in § 441.010; whether a lease term is a 'condition' under § 441.040; whether vaporization is 'smoking' under Mo. Const. art. XIV; reach of § 442.600 and the Merchandising Practices Act to leases; double damages for commercial tenants (PDQ Tower, annotation); the § 82.817 annotation. None read. |
| Administrative rules | 15 CSR 60 (Attorney General's unfair-practice rules), Commission on Human Rights rules, Public Service Commission utility rules: not read (rule 21). |
| Court rules | Mo. Sup. Ct. R. 41.01 and 44.01 not read; no landlord-tenant-specific rule by title (1,647 titles screened). Court self-help forms not read. |
| Not read beyond context or excerpt | §§ 67.452 (applicability only), 144.020, 393.108, 393.109, 407.025, 442.404, 442.560 to 442.592, 455.045, 455.010 (definitions incorporated by § 441.920), 506.150, 511.070, 566.147, 700.600, 701.306; Chapter 447 (unclaimed property: whether an uncashed deposit refund is reportable); Chapter 513 (exemptions; new § 513.430 effective 1/1/2027); usury (§§ 408.030 and following); S.B. 895 (2024) bill page. |
| Federal (rule 21) | SCRA (50 U.S.C. § 3955); PTFA (12 U.S.C. § 5220 note); Fair Housing Act (42 U.S.C. § 3601 et seq., including § 3617 retaliation); VAWA (34 U.S.C. § 12491); lead (42 U.S.C. § 4852d, 40 CFR 745.113); FCRA: cited, not read. |
| Local ordinances | Kansas City and St. Louis (source of income, rental registration and inspection, tenant rights), Boone County rules under § 64.207, nuisance and towing ordinances: flagged, not resolved (rule 3). Existing local source-of-income ordinances are now unenforceable under § 441.043(2)(1) to the extent the section reaches them; not resolved. |
| Population brackets | § 64.207, § 67.452 and § 82.1025 identify places by population; the revisor's headings name Boone County and four cities; not derived from census data (rule 32). |

## 8. Integrity checks on the delta
Run by script (`work/check.py`) on the final delta; output summarised:
- header identical: True | cols 17
- records 149 | ends CRLF True | bare-CR count 0
- dup ids in delta: []
- tagged rows with other changes: []
- other states changed: {}
- merged rows 1993 active 1870 | MO active 149 LC 67 EDU 82
- blank status: [] | non-VERIFIED new: []
- LC missing basis: []
- EDU with basis: []
- MO LC topic collisions: {}
- new topic keys: ['hazardous-contamination-disclosure']
- generic clauses neither tagged nor superseded by MO: ['ev-charging-shared-area-co', 'ev-charging-end-of-tenancy-co', 'default-by-tenant-ks-ne', 'extended-absence-notice-ks', 'late-fee-ne', 'possession-delay-ca', 'surrender-end-of-term-mn-nd', 'acceptable-payment-methods-nj']
- variables used: ['pet_deposit', 'pet_rent_amount', 'security_deposit'] | new: []
- citation-prefix issues: 0
- cited sections: 136
- referenced ids missing: []
- referenced ids inactive: []
- **Citation existence:** all 134 Missouri section numbers cited in the MO rows and MO notes exist in the loaded corpus (checked in the browser).
- **Merged library:** the delta applied to the master gives 1,993 rows and 1,870 active; MO 149 active.

## 9. Propagation notes (rule 62)
None. No shared row's text, rule type, content type or basis changed; every change to an existing row is the `MO` tag, an appended `MO:` note and `last_checked` (programmatic check, §8).

## 10. Findings for other states or the product (flagged, not fixed)
- **New `{{variables}}`: none.** Builder rules instead (rule 55): cap `{{security_deposit}}` at 2 × `{{monthly_rent}}` for MO (§ 535.300(1)); cap a dishonored-check fee at $25 plus the bank's actual charge (§ 570.120(6)(2)); prompt a 'reasonable' figure for `dv-termination-fee-mo` (§ 441.920(6)).
- **Builder placement:** `meth-disclosure-mo` and `contamination-disclosure-mo` run to the 'prospective lessee', so deliver them before signing; `abandoned-property-mo` should generate the § 441.065(3) notice verbatim with the landlord's name and street address.
- **New topic key:** `hazardous-contamination-disclosure` (Missouri § 442.055); other states may have analogues.
- **Stale cross-references (rule 77):** § 441.650(3)(3) appoints receivers under §§ 515.240 to 515.260, which the revisor notes were repealed by S.B. 578 (2016); § 304.157(8) refers to § 301.155, which the revisor notes does not exist. Both flagged for the legal watch; rows paraphrase neither pointer.
- **Constitutional provisions can void lease terms.** Missouri's Article XIV (marijuana) overrode the shared `smoking-policy` clause; other states' constitutions were not searched in earlier passes (Proposed SOP changes).
- **Voucher landlords and firearms:** § 571.510 voids firearm bans by lessors 'receiving public funds from a housing authority'; whether that reaches Housing Choice Voucher landlords is unsettled (`edu-firearms-mo`). Product flag if the builder ever adds a firearms clause.
- **`security-deposit-return`** still has a blank `states` field (the intentional parent); unchanged.
- **Real-lease drift:** the Missouri REALTORS form (2016 edition) ends month-to-month tenancies on '30 days' Notice ... before the next Monthly Rent payment date' and says the deposit is held 'in a separate account as required by §535.300'; the statute says 'one month' after receipt and requires only a federally insured institution. Leads about that form, not about the library.

## 11. Deliverables
- `lease-clauses-MO-delta.csv`: 149 rows (51 tagged, 98 new), 17 columns, CRLF.
- `lease-clause-decision-log-MO.md`: this log.
- Working sources (not delivered; kept in the session): `sources/` (chapters, outside sections, batteries, registry), `lease/` (the REALTORS lease text).

## 12. Kickoff leads — what each turned out to be
1. **Where the law lives.** Confirmed: no comprehensive act; Chapter 441 (tenancies, notices, abandonment, repair-and-deduct, meth disclosure, receivership, expedited drug evictions, DV), Chapter 535 (rent and possession, manager disclosure, deposits), Chapter 534 (forcible entry, unlawful detainer, squatters). All three read whole (`edu-scope-mo`).
2. **Deposits.** Cap two months' rent; federally insured institution, interest to the landlord; 30 days; written itemized list with the balance; inspection notice with a right to attend; double the wrongfully withheld amount; pet deposits excluded (§ 535.300).
3. **Eviction by tenancy type.** Month-to-month: one month to a rent-paying date (§ 441.060(4)(1)); week-to-week and other under-a-year tenancies: one month's written notice (§ 441.060(1)); year-to-year: 60 days before year end (§ 441.050); fixed term: none (§ 441.070). Rent and possession (Chapter 535, demand only) vs unlawful detainer (Chapter 534, written demand, double damages). Expedited drug track (§§ 441.710 to 441.880). Squatters: 2024 ex parte removal (§§ 534.602, 534.604). Acceptance of rent: no statute (Fritts, unread). Property left behind: § 441.065, § 535.040, § 441.060(5)-(6). Court rules: none specific.
4. **Repairs.** No general statutory duty; repair-and-deduct only for local code violations, with conditions, non-waivable (§ 441.234). **Retaliation:** no housing statute.
5. **Rent, fees and preemption.** No late-fee or application-fee limits. Local rent control, screening-criteria limits, deposit caps, source-of-income mandates and right-of-first-refusal mandates preempted (§ 441.043, as amended 2025); eviction moratoriums barred (§ 535.012).
6. **Fair housing.** Race, color, religion, national origin, ancestry, sex, disability, familial status; exemptions for small private owners of single-family houses and owner-occupied buildings of four or fewer units (advertising ban survives); no source-of-income or age protection in housing (§ 213.040).
7. **Disclosures and safety.** Required: manager and owner/agent (§ 535.185); conditional: methamphetamine (§ 441.236) and radioactive or hazardous contamination (§ 442.055). No lead rule beyond federal disclosure except abatement-on-notice and no lead-based eviction (§ 701.308). No radon, flood, mold or bed-bug rule; no smoke or CO alarm statute.
8. **Local ordinances.** Flagged, not resolved; several local powers are now preempted by § 441.043.

## 13. Independent check
A separate agent that had not seen the drafting checked every new MO row (bodyText and notes) and every appended MO note on the 51 tagged rows against the saved sources only (chapters, outside sections, battery logs, the lease), on 2026-09-30. It reported 19 findings: **2 conflicts, 1 wrong, 10 imprecise, 6 unsupported.** All were fixed and the same agent re-verified each fixed row ('FIXED', no new problems):
- **Conflicts (clause text):** `tenant-caused-damage-mo` charged rent where an occupant or guest (not a tenant) caused destruction that § 441.645 releases; a last sentence now excludes rent and lost rent where Missouri law releases the tenant. `pet-policy-mo` let the landlord remove a pet 'with the help of animal control or law enforcement', which § 441.233(1) ('or causes such removal') reaches; now 'without a court order', with animal control acting on its own authority left alone.
- **Wrong:** `edu-condo-conversion-mo` attached § 448.4-112(1)'s exceptions to the no-change-of-terms rule; they apply to shorter notice to vacate.
- **Imprecise (fixed):** battery 26 and battery 3 descriptions; battery 64 hit count; the § 535.081 successor notice (a condition of suing, with the first-class-county affidavit); the § 535.030(4) ten-day rule (any defendant, rent cases); the § 441.650(4) 24-hour notice condition; the § 304.157(4)(1) sign contents; the § 535.120 'subsisting right to re-enter' condition; § 441.040's notice is not stated to be written; § 209.150(3)'s place list.
- **Unsupported (relabelled or evidenced):** the 2025 act comparison and the 2024 House record (read in the browser, not saved; now labelled leads, rows rest on the revisor's version dates); the court-rule title count (labelled not saved); 'courts generally follow the lease's fee clause' (now labelled unreviewed case law); the art. XIV § 2.3(4) and § 144.020(1)(6) subsection numbers (now confirmed and saved in `sources/hit-headings.txt`, which also saves the headings of every battery hit the rows describe and adds a positive test for battery 58).
- **Found on re-verification:** a bulk citation-prefix edit had inserted 'Mo. Rev. Stat.' inside five federal citations ('42 U.S.C. Mo. Rev. Stat. § 3617') and earlier into '§§' ranges; both repaired and re-scanned clean (Proposed SOP change 6).
After the fixes the delta was rebuilt and every §8 check re-run with the same results.


## 14. Statute walk (gap-discovery source 1)
Chapters 441, 534 and 535 were read whole from the saved text (72, 45 and 23 sections as indexed). The section index was then diffed against every citation in the MO rows (programmatic):
- **Chapter 441:** 55 of 72 sections cited by number. Not cited, with reason: § 441.150 (attornment to a stranger void; no lease consequence); §§ 441.170, 441.180 (rent recoverable by executors and on lives; landlord estate matters); §§ 441.200, 441.210 (use-and-occupation actions under unwritten agreements; covered by `edu-lease-in-writing-mo` in substance); § 441.220 (rent recoverable from assignees and undertenants through the attachment remedies; no landlord duty); § 441.230 (joinder of sublessees; procedure); §§ 441.530, 441.550, 441.600 (receivership procedure, inside the cited range §§ 441.500 to 441.643); §§ 441.730, 441.790 to 441.830, 441.870 (expedited-eviction procedure, inside the cited range §§ 441.710 to 441.880).
- **Chapter 535:** 20 of 23 cited. Not cited: § 535.100 (change of venue), § 535.130 (posting service in § 535.120 actions), § 535.150 (judgment in § 535.120 actions); procedure.
- **Chapter 534:** 13 of 45 cited. Not cited: the forcible-entry and unlawful-detainer procedure sections (§§ 534.010, 534.040, 534.070 to 534.290, 534.310 to 534.380, 534.540 to 534.590) and § 534.300 (three years' quiet possession bars the action); procedure, read whole, no landlord duty, prohibition or immunity beyond those cited (rule 39).
- **One level down:** sections cited only in part were re-read subdivision by subdivision for the rows that rely on them (§ 441.060, § 535.300, § 441.920, § 534.030, § 213.040); each subdivision is either in a row or noted as out of scope (mobile-home lots, § 441.060(4)(2); government landlords, § 535.300(2)).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Missouri REALTORS® Residential Lease, RES-3010, 'Last Revised 8/1/15 ... 10/31/16', © 2016 Missouri REALTORS®, 'Approved by legal counsel for use exclusively by current members'. Found free as a PDF at esign.com (metadata: created 2016-09-29, modified 2021-06-07); extracted with pdf.js and saved (`lease/MO-REALTORS-RES-3010-2016.txt`, 39,965 characters, hash-matched). **Why it qualifies, and why it is weaker:** it is the state Realtors association's own form, with Missouri citations (§ 535.300, § 441.065, § 441.710 and following) and Missouri-specific carpet-cleaning wording, not a relabelled multi-state template. But it is an older edition: the association's forms index (12/02/2024) lists the current form as PM-3010 Residential Lease (rev. 12/31/23), members-only and not free (rule 33: never buy). No apartment-association or housing-authority lease was used. Not reproduced here; mapped as a lead.

### 15.1 Provision map
| REALTORS provision | Library answer for MO | Note |
|---|---|---|
| Fixed or month-to-month term; month-to-month ends on '30 days' Notice before the next Monthly Rent payment date' | `periodic-tenancy-notice-mo` | Statute: one month after receipt, to a rent-paying date (§ 441.060(4)(1)); the library follows the statute (§10) |
| Renewal option | none | Product feature, not law |
| Rent; late charge per month or per day; no grace period; 'Additional Charges' due 30 days after notice | `rent-payment`, `late-fee` (tagged), `edu-no-late-fee-cap-mo`, `edu-fees-not-rent-mo` | No cap; fees not rent for possession (§ 535.020) |
| Returned-check service charge (blank); certified funds after an NSF | `returned-payments-mo` | § 570.120(6)(2) caps the charge |
| Electronic withdrawal authorization | `acceptable-payment-methods` (tagged) | No statute |
| Deposit 'not to exceed two (2) months', 'separate account as required by §535.300', withholding list, carpet-cleaning amount with tenant-liability notice, 30-day return | `security-deposit-use-mo`, `security-deposit-return-mo`, `deposit-carpet-cleaning-mo`, `edu-deposit-holding-mo` | Confirms the carpet-cleaning structure; 'separate account' overstates § 535.300(2) |
| Deposit transferable to a grantee, tenant releases landlord | `edu-no-deposit-transfer-rule-mo` | No statute; the release is contractual |
| Persons per bedroom (blank); adult occupants must sign | `permitted-occupants`, `edu-occupancy-limit-mo` | § 441.060(2) presumption of two per bedroom |
| Joint liability; violation by one is by all; notice to one adult is notice to all | `joint-liability` (tagged) | The notice-to-all sentence is a drafting lead only |
| 'As-is'; failure to deliver possession within 3 days → terminate or abate | `existing-condition`, `possession-delay` (tagged) | No statute either way (battery 83) |
| Landlord keeps structure, roof, foundation, utilities 'in good repair and habitable condition'; tenant pays for negligent damage with Default Rate interest | `landlord-maintenance` (tagged), `edu-landlord-duties-mo`, `tenant-caused-damage-mo` | No statutory duty; interest rate not offered (§6.1) |
| Lawn, snow, pest allocation | `landscaping-irrigation`, `snow-removal` (tagged) | Pest allocation: no Missouri rule (lead) |
| Surrender, professional carpet cleaning 'if needed' | `surrender-end-of-term-ks-ne`, `deposit-carpet-cleaning-mo` | — |
| No assignment or subletting without consent | `no-sublet-assign`, `edu-unauthorized-sublet-mo` | § 441.030, § 534.347 |
| Drugs: 'immediate termination' and §§ 441.710 and following | `criminal-activity-mo`, `edu-expedited-drug-eviction-mo`, `edu-cure-grounds-mo` | Confirms the expedited track as a lease reference |
| Utilities, tenant pays all | `utilities-responsibility` (tagged), `edu-water-sewer-owner-liability-mo` | — |
| Quiet enjoyment; entry 'at all reasonable times upon prior Notice' | `landlords-access` (tagged), `edu-no-entry-statute-mo` | No statute (battery 75 for quiet possession) |
| Landlord not liable except willful misconduct; tenant indemnity | ks-oh-ca variants (tagged) | Rule 52: library keeps no disclaimer; case law unread |
| Tenant liability insurance; mutual waiver of subrogation | `tenants-property-insurance-ks-oh-ca` (tagged) | Waiver of subrogation: drafting lead only |
| Casualty: abatement, landlord election, one-month repair deadline, termination by either party | `casualty-termination-mo`, `edu-casualty-mo` | Consistent with § 441.645 |
| Default 'without prior Notice or demand'; § 441.065 on abandonment; non-waiver; payments applied first to reletting costs | `default-by-tenant` (tagged), `abandoned-property-mo`, `application-of-payments` (tagged) | A demand for rent is still required by § 535.020; the form's waiver of demand is a lead the library does not follow |
| Holdover: tenancy at sufferance at 2× per-diem rent | `holdover-ca` (tagged), `edu-holdover-damages-mo` | Contract rate not offered (§6.1) |
| Landlord-only attorney fees | `default-by-tenant` (tagged; reciprocal) | No statute (battery 89) |
| Notices by certified mail; refusal is delivery | `notices` (tagged), `edu-notice-service-mo` | — |
| Rules: no lock changes without consent, landlord rekeys at tenant's cost on request; tenant maintains smoke detectors; waterbeds with insurance; hazardous materials | `keys`, `common-area-use`, `fire-safety-grilling` (tagged), `edu-alarm-duties-mo` | No Missouri alarm statute |
| Lead disclosure DSC-3000; UETA signatures; entire agreement; governing law | `lead-based-paint`, `electronic-signatures`, `entire-agreement`, `governing-law` (tagged) | — |
| Broker disclosures, franchise, MLS consent, anti-terrorism (OFAC) certification, time of the essence | none | Brokerage and transaction terms, not landlord-tenant law |

### 15.2 What it produced
No new rows beyond those the statute walk produced, but it confirmed three: the carpet-cleaning structure (`deposit-carpet-cleaning-mo`), the deposit withholding list (`security-deposit-use-mo`) and the § 441.065 abandonment reference (`abandoned-property-mo`). Two form statements diverge from the statute (month-to-month notice and 'separate account'; §10). No shared row is changed because of the lease (rule 33).

## 16. Landlord-scenario screen (gap-discovery source 3)
72 everyday situations, application to move-out, sale and foreclosure, run against the MO rows; where no row answered, the statutes were searched and any hit read with the section open.

| # | Scenario | Missouri answer (row) |
|---|---|---|
| 1 | Advertising a unit; can I say 'no kids'? | No: familial status (`edu-fair-housing-mo`) |
| 2 | Applicant uses a housing voucher | No state protection; local mandates preempted (`edu-source-of-income-mo`) |
| 3 | Screening on credit, eviction and criminal history | Allowed; local limits preempted; fair housing applies (`edu-tenant-screening-mo`) |
| 4 | Charging an application fee | No limit (`edu-no-application-fee-rule-mo`) |
| 5 | Taking a holding deposit | No statute; may count as a security deposit (`edu-no-holding-deposit-rule-mo`) |
| 6 | Applicant asks for an emotional support animal | Accommodation; documentation from a qualified professional (`assistance-animal-accommodation`, `edu-service-animal-misrepresentation-mo`) |
| 7 | Applicant lies on the application | Material breach (`rental-application-accuracy`) |
| 8 | Applicant is a domestic-violence victim with a bad rental history | May not deny for victim status (`edu-dv-protections-mo`) |
| 9 | Renting a room in my own home | Fair-housing exemption (except ads) for owner-occupied ≤4 units (`edu-fair-housing-mo`) |
| 10 | How much deposit can I take? | Two months' rent (`edu-deposit-cap-mo`, `security-deposit-use-mo`) |
| 11 | Pet deposit on top of two months | Allowed; not a security deposit (`edu-pet-deposit-mo`, `pet-policy-mo`) |
| 12 | Where do I keep the deposit? | Federally insured institution (`edu-deposit-holding-mo`) |
| 13 | Do I owe interest on the deposit? | No (`edu-deposit-interest-mo`) |
| 14 | Collecting first and last month's rent plus deposit | Cap risk (`edu-deposit-last-month-mo`, `due-at-signing`) |
| 15 | What must the lease disclose? | Manager and owner/agent (`landlord-disclosure-mo`); meth and contamination if known (`meth-disclosure-mo`, `contamination-disclosure-mo`); federal lead |
| 16 | Former meth lab in the building | Written disclosure before signing (`meth-disclosure-mo`) |
| 17 | Radon, mold, flood, bed bugs | No state disclosure duty (edu-no-* rows) |
| 18 | Someone died in the unit | § 442.600; answer truthfully (`edu-psychologically-impacted-mo`) |
| 19 | Lease signed electronically | Valid under UETA (`electronic-signatures`) |
| 20 | Oral lease for two years | Unenforceable beyond a tenancy at will (`edu-lease-in-writing-mo`) |
| 21 | Occupancy limit for a family | Two per bedroom presumed reasonable (`edu-occupancy-limit-mo`) |
| 22 | Unit not ready on the start date | No statute; lease clause (`possession-delay`) |
| 23 | Move-in condition checklist required? | No; recommended (`edu-deposit-inspection-mo`, `existing-condition`) |
| 24 | Rent is late; how much can I charge? | No cap (`late-fee`, `edu-no-late-fee-cap-mo`) |
| 25 | Rent check bounces | $25 plus bank charge for a check (`returned-payments-mo`) |
| 26 | Tenant pays rent in cash; receipt? | No duty (`edu-no-rent-receipt-rule-mo`) |
| 27 | Tenant pays part of the rent | No acceptance-waiver statute; reserve rights (`edu-no-acceptance-waiver-statute-mo`) |
| 28 | I want to raise the rent mid-lease | Only as the lease allows; month-to-month by notice (`edu-no-rent-increase-notice-mo`) |
| 29 | City wants to cap rent | Preempted (`edu-rent-control-preemption-mo`) |
| 30 | Charging interest on unpaid damages | 9% legal rate on written contracts (`edu-legal-interest-mo`) |
| 31 | Do I charge sales tax on rent? | Not for ordinary residential rent (`edu-rent-tax-mo`) |
| 32 | Entering to make repairs | No statute; lease gives 24 hours (`landlords-access`, `edu-no-entry-statute-mo`) |
| 33 | Tenant demands repairs | No general statutory duty; lease and codes (`landlord-maintenance`, `edu-landlord-duties-mo`) |
| 34 | Tenant fixes a code violation and deducts | § 441.234 conditions (`edu-repair-and-deduct-mo`) |
| 35 | City seeks a receiver over code violations | §§ 441.500 to 441.643 (`edu-housing-code-receivership-mo`) |
| 36 | I didn't pay the gas bill for a master-metered building | Tenant receivership; no rent collection (`edu-utility-heat-receivership-mo`) |
| 37 | Tenant leaves an unpaid water bill | Owner liable up to 90 days; notices to both (`edu-water-sewer-owner-liability-mo`) |
| 38 | Smoke detectors | No state statute; local codes (`edu-alarm-duties-mo`) |
| 39 | Tenant wants to install a ramp | Reasonable modification at tenant's cost; restoration condition allowed (`edu-disability-modification-mo`) |
| 40 | Tenant smokes marijuana / eats edibles | Smoking may be banned; edibles may not (`smoking-policy-mo`, `edu-cannabis-mo`) |
| 41 | Tenant grows marijuana | Lease may ban cultivation (`cannabis-cultivation-mo`) |
| 42 | Tenant keeps a gun (Section 8 landlord) | Ban void for lessors receiving housing-authority funds (`edu-firearms-mo`) |
| 43 | Tenant's guest moves in | Guest limits; sole-possession double damages (`guest-policy-day-limit`, `edu-unauthorized-sublet-mo`) |
| 44 | Tenant sublets on Airbnb | Barred by lease; § 441.030 (`no-sublet-assign`) |
| 45 | Towing a car from the lot | § 304.157 sign or wait rules (`edu-towing-mo`, `parking-vehicle-rules`) |
| 46 | Noise complaints from neighbors | Lease breach (`no-disturbance`); 10 days' notice to vacate (`edu-cure-grounds-mo`) |
| 47 | Drug dealing in the unit | Lease void (§ 441.020); expedited eviction (`edu-expedited-drug-eviction-mo`, `criminal-activity-mo`) |
| 48 | Tenant is a DV victim and abuser damages the unit | No eviction for victim status; exceptions (`edu-dv-protections-mo`) |
| 49 | DV victim wants to leave early | Defense to later rent; reasonable termination fee (`edu-dv-protections-mo`, `dv-termination-fee-mo`) |
| 50 | Tenant deployed by the military | 15-day termination with orders (`edu-servicemember-termination-mo`) |
| 51 | Tenant wants out early | Early-termination fee (`early-termination-ks`) |
| 52 | Tenant stops paying rent | Demand, then rent-and-possession case (`edu-nonpayment-demand-mo`, `edu-eviction-process-mo`) |
| 53 | Can I change the locks or cut utilities? | No: forcible entry and detainer (`edu-self-help-eviction-mo`) |
| 54 | Tenant breaks a lease rule | 10 days' notice to vacate, no cure (`edu-cure-grounds-mo`) |
| 55 | Ending a month-to-month tenancy | One month to a rent-paying date (`periodic-tenancy-notice-mo`, `edu-notice-to-quit-mo`) |
| 56 | Not renewing a fixed lease | No notice needed; no just-cause rule (`edu-no-just-cause-mo`) |
| 57 | Tenant stays after the lease ends | Holdover remedies (`holdover-ca`, `edu-holdover-damages-mo`) |
| 58 | Tenant gave notice and didn't leave | Double rent (§ 441.100; `edu-holdover-damages-mo`) |
| 59 | Tenant seems to have vanished owing rent | § 441.065 procedure (`abandoned-property-mo`) |
| 60 | Tenant left belongings after moving out | Notice-and-collect track (`abandoned-property-mo`) |
| 61 | Belongings left after the sheriff executes | § 535.040, § 441.060(5)-(6) (`edu-post-eviction-property-mo`) |
| 62 | Squatters in a vacant rental | Ex parte removal (`edu-unauthorized-occupant-removal-mo`) |
| 63 | Tenant dies mid-lease | No statute (`edu-no-tenant-death-rule-mo`) |
| 64 | Fire destroys the unit | No rent for the rest of the term if not tenant-caused (`edu-casualty-mo`, `casualty-termination-mo`) |
| 65 | Tenant's candle causes the fire | § 441.010 accidental-fire bar; clause defers (`tenant-caused-damage-mo`) |
| 66 | Deposit return after move-out | 30 days, itemized list, inspection notice (`security-deposit-return-mo`) |
| 67 | Charging for carpet cleaning | Only with the lease notice (`deposit-carpet-cleaning-mo`) |
| 68 | Tenant didn't give notice before leaving | Deposit withholding for actual damages after mitigation (`security-deposit-use-mo`, `edu-no-mitigation-statute-mo`) |
| 69 | Selling the property with tenants | Successor notice with deed (`edu-successor-owner-mo`); deposit transfer by contract |
| 70 | Bank forecloses on my rental | 10-business-day notice to occupants (`edu-foreclosure-tenants-mo`) |
| 71 | Converting to condos | 120 days' notice; purchase right (`edu-condo-conversion-mo`) |
| 72 | I live out of state | Agent filed with the Secretary of State; St. Louis assessor agent (`edu-nonresident-landlord-agent-mo`) |

Every scenario has an MO row. Two scenarios produced rows during the screen: 68 (`edu-no-mitigation-statute-mo`, battery 109) and 72 (§ 441.520(4)(2), found in the statute walk and confirmed here).

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole Revised Statutes of Missouri (30,435 sections) and the Missouri Constitution were loaded in the built-in browser and searched with 109 batteries (`sources/batteries-MO.tsv`, `-2`, `-3`, `-4`; re-run record `batteries-MO-rerun.txt`). Real findings outside Chapters 441, 534 and 535, each read whole and saved unless marked:
- **Constitution:** Mo. Const. art. XIV, § 2.3(4) (marijuana in leases) → `smoking-policy-mo`, `cannabis-cultivation-mo`, `edu-cannabis-mo`, `criminal-activity-mo` carve-out.
- **Fair housing:** §§ 213.010, 213.040, 213.070 → `edu-fair-housing-mo`, `edu-disability-modification-mo`, `edu-no-retaliation-statute-mo`.
- **Disclosures:** § 442.055 → `contamination-disclosure-mo`; § 442.600 → `edu-psychologically-impacted-mo`.
- **Military:** § 41.944 → `edu-servicemember-termination-mo`.
- **Animals:** §§ 209.150, 209.200, 209.204 → `edu-service-animal-misrepresentation-mo`.
- **Utilities:** § 250.140 → `edu-water-sewer-owner-liability-mo`; §§ 393.108, 393.109 (read in context).
- **Towing:** § 304.157, § 304.001(1) (excerpt) → `edu-towing-mo`.
- **Consumer protection:** §§ 407.010, 407.020, 407.025 (excerpt) → `edu-consumer-protection-mo`.
- **Money:** § 408.020 → `edu-legal-interest-mo`; § 570.120 → `returned-payments-mo`.
- **Leases generally:** §§ 432.010, 432.050, 432.210 → `edu-lease-in-writing-mo`, `electronic-signatures`.
- **Waste:** § 537.420 → `edu-tenant-waste-mo`, `edu-tenant-caused-damage-mo`.
- **Firearms:** § 571.510 → `edu-firearms-mo`.
- **Lead:** § 701.308 → `edu-lead-hazard-mo`.
- **Local and place-based:** § 64.207 (Boone County bracket) → `edu-county-habitability-rules-mo`; §§ 82.817, 82.1025, 195.253 → `edu-nonresident-landlord-agent-mo`, `edu-nuisance-actions-mo`; § 448.4-112 → `edu-condo-conversion-mo`.
- **Read and set aside:** § 456.007 (deposits for leases of personal property only; not residential); § 71.286 (flag display, government only); § 144.020(1)(6) (excerpt; lodging tax).

**Absence batteries (summary; full patterns, hit lists and positives in the battery files):** radon 14 (0); bed bugs 16 (0); mold 15/63 (0 near tenancy terms); flood 17/62; alarms 12-13; retaliation 21; entry 22/68; tenant death 23/69; source of income 24; renters insurance 26; rent receipts 27; application fees 28/100; rent control 29; firearms 33; towing 34; marijuana 35; smoking 36/76; sex offenders 37/108; military 38; DV 39; locks 40/80; escheat 41; legal interest 42; EV charging 44; flags 45/97; foreign ownership 46/107; squatters 47; jury waiver 48; confession of judgment 49; exemption waivers 50; plain language 52; algorithms 53; screening 54; immigration 55; pools 56; sprinklers 57; window guards 58; rental registration 59; utilities 60/72/95; holding deposits 65; deposit installments 66; last month's rent 67; casualty 70 (known-positive failure, see §1.3); abandonment 71; translation 73; cameras 74; quiet possession 75; shutdown 77; just cause 78; antennas 79; payment methods 82; possession delivery 83; move-in inventory 84; UETA exclusions 85; formatting 86-87; collection costs 88; attorney fees 89; knowing-use penalties 90; anti-waiver 91; automatic renewal 92; notice-to-quit waiver 93; emergency contact 94; rent increases 96; deposit interest 98; crime-free 99; record sealing 101; minors 102; HOA 103; right to call police 104; lease copy 105; unconscionability 106; mitigation 109.

## 18. Topic reference canvass (rules 27, 36)

### 18.1 Topics answered by an MO row (134)
| Topic | MO rows |
|---|---|
| abandoned-property | `abandoned-property-mo` |
| abandonment-and-mitigation | `edu-no-mitigation-statute-mo` |
| acceptable-payment-methods | `acceptable-payment-methods` |
| addendum-precedence | `addendum-precedence` |
| alarm-duties | `edu-alarm-duties-mo` |
| alterations | `no-alterations` |
| appliances-included | `appliances-included` |
| application-fees | `edu-no-application-fee-rule-mo` |
| application-of-payments | `application-of-payments` |
| assigned-parking-space | `assigned-parking-space` |
| assistance-animal-accommodation | `assistance-animal-accommodation` |
| attorney-fees | `edu-attorney-fees-mo` |
| bed-bug-disclosure | `edu-no-bed-bug-rule-mo` |
| cannabis | `cannabis-cultivation-mo`, `edu-cannabis-mo` |
| casualty-termination | `casualty-termination-mo`, `edu-casualty-mo` |
| common-area-use | `common-area-use` |
| condition-inspection | `edu-deposit-inspection-mo` |
| consumer-protection-act | `edu-consumer-protection-mo` |
| conversion-notice | `edu-condo-conversion-mo` |
| criminal-activity | `criminal-activity-mo` |
| cure-and-eviction-grounds | `edu-cure-grounds-mo` |
| default-by-tenant | `default-by-tenant` |
| deposit-cost-schedule | `deposit-carpet-cleaning-mo` |
| deposit-installments | `edu-no-deposit-installments-mo` |
| deposit-last-month-rent | `edu-deposit-last-month-mo` |
| disability-accommodation | `edu-disability-modification-mo` |
| disturbance | `no-disturbance` |
| due-at-signing | `due-at-signing` |
| dv-lease-termination | `dv-termination-fee-mo`, `edu-dv-protections-mo` |
| early-termination | `early-termination-ks` |
| electronic-signatures | `electronic-signatures` |
| emergency-assistance-right | `edu-no-emergency-assistance-rule-mo` |
| entire-agreement | `entire-agreement` |
| ev-charging | `edu-no-ev-charging-rule-mo` |
| eviction-process | `edu-eviction-process-mo` |
| eviction-record-sealing | `edu-no-eviction-sealing-mo` |
| existing-condition | `existing-condition` |
| expedited-criminal-eviction | `edu-expedited-drug-eviction-mo` |
| fair-housing | `edu-fair-housing-mo` |
| fees-as-rent | `edu-fees-not-rent-mo` |
| fire-safety-grilling | `fire-safety-grilling` |
| firearms | `edu-firearms-mo` |
| flood-disclosure | `edu-no-flood-disclosure-mo` |
| for-cause-eviction | `edu-no-just-cause-mo` |
| foreclosure | `edu-foreclosure-tenants-mo` |
| governing-law | `governing-law` |
| guest-policy | `guest-policy` |
| guest-policy-day-limit | `guest-policy-day-limit` |
| hazardous-contamination-disclosure | `contamination-disclosure-mo` |
| hoa-compliance | `hoa-compliance` |
| holding-deposit | `edu-no-holding-deposit-rule-mo` |
| holdover | `edu-holdover-damages-mo`, `holdover-ca` |
| immigration-status | `edu-no-immigration-status-rule-mo` |
| inspection-rights | `inspection-rights` |
| joint-liability | `joint-liability` |
| keys | `keys` |
| landlord-entry | `edu-no-entry-statute-mo`, `landlords-access` |
| landlord-lien | `edu-landlord-attachment-mo` |
| landlord-maintenance | `edu-landlord-duties-mo`, `landlord-maintenance` |
| landscaping-irrigation | `landscaping-irrigation` |
| late-fee | `edu-no-late-fee-cap-mo`, `late-fee` |
| lead-based-paint | `edu-lead-hazard-mo`, `lead-based-paint` |
| lease-copy | `edu-no-lease-copy-rule-mo` |
| meth-disclosure | `meth-disclosure-mo` |
| mold-disclosure | `edu-no-mold-disclosure-mo` |
| nonpayment-notice | `edu-nonpayment-demand-mo` |
| nonresident-owner-agent | `edu-nonresident-landlord-agent-mo` |
| notice-delivery-methods | `edu-notice-service-mo` |
| notices | `notices` |
| nuisance | `edu-nuisance-actions-mo` |
| owner-identity-disclosure | `edu-owner-disclosure-mo`, `landlord-disclosure-mo` |
| parking | `parking-ks-oh-ca` |
| parking-vehicle-rules | `parking-vehicle-rules` |
| permitted-occupants | `edu-occupancy-limit-mo`, `permitted-occupants` |
| pet-fees | `edu-pet-deposit-mo` |
| pet-insurance-requirement | `pet-insurance-requirement` |
| pet-policy | `pet-policy-mo` |
| possession-delay | `possession-delay` |
| post-eviction-property | `edu-post-eviction-property-mo` |
| prohibited-lease-terms | `edu-prohibited-lease-terms-mo` |
| radon-disclosure | `edu-no-radon-disclosure-mo` |
| rent-control | `edu-rent-control-preemption-mo` |
| rent-increase-notice | `edu-no-rent-increase-notice-mo` |
| rent-payment | `rent-payment` |
| rent-receipts | `edu-no-rent-receipt-rule-mo` |
| rent-tax | `edu-rent-tax-mo` |
| rental-application-accuracy | `rental-application-accuracy` |
| rental-inspection | `edu-county-habitability-rules-mo` |
| residential-use-only | `residential-use-only` |
| retaliation | `edu-no-retaliation-statute-mo` |
| returned-payments | `returned-payments-mo` |
| sale-or-management-change | `edu-successor-owner-mo` |
| scope | `edu-scope-mo` |
| security-deposit-cap | `edu-deposit-cap-mo` |
| security-deposit-holding | `edu-deposit-holding-mo` |
| security-deposit-interest | `edu-deposit-interest-mo` |
| security-deposit-on-sale | `edu-no-deposit-transfer-rule-mo` |
| security-deposit-penalty | `edu-security-deposit-rules-mo` |
| security-deposit-return | `security-deposit-return-mo` |
| security-deposit-use | `security-deposit-use-mo` |
| security-devices | `edu-no-security-device-rule-mo` |
| self-help-eviction | `edu-self-help-eviction-mo` |
| service-animal-misrepresentation | `edu-service-animal-misrepresentation-mo` |
| servicemember-rights | `edu-servicemember-termination-mo` |
| services-utilities-provided | `services-utilities-provided-ks-oh` |
| severability | `severability` |
| smoking-policy | `smoking-policy-mo` |
| snow-removal | `snow-removal` |
| source-of-income | `edu-source-of-income-mo` |
| statute-of-frauds-lease-term | `edu-lease-in-writing-mo` |
| stigmatized-property | `edu-psychologically-impacted-mo` |
| storage-space | `storage-space-ks-oh-ca` |
| sublet-assign | `edu-unauthorized-sublet-mo`, `no-sublet-assign` |
| substandard-property-receivership | `edu-housing-code-receivership-mo` |
| surrender-end-of-term | `surrender-end-of-term-ks-ne` |
| tenant-caused-damage | `edu-tenant-caused-damage-mo`, `tenant-caused-damage-mo` |
| tenant-death | `edu-no-tenant-death-rule-mo` |
| tenant-forward-proceedings | `edu-tenant-forward-summons-mo`, `tenant-forward-proceedings-ca` |
| tenant-maintenance | `tenant-maintenance` |
| tenant-repair-remedies | `edu-repair-and-deduct-mo` |
| tenant-screening | `edu-tenant-screening-mo` |
| tenant-statutory-duties | `edu-tenant-waste-mo` |
| tenants-property-insurance | `tenants-property-insurance-ks-oh-ca` |
| termination-notice | `edu-notice-to-quit-mo`, `periodic-tenancy-notice-mo` |
| towing | `edu-towing-mo` |
| unauthorized-occupant-removal | `edu-unauthorized-occupant-removal-mo` |
| unpaid-damages-interest | `edu-legal-interest-mo` |
| utilities-paid-by-landlord | `utilities-paid-by-landlord` |
| utilities-responsibility | `edu-water-sewer-owner-liability-mo`, `utilities-responsibility` |
| utility-landlord-account | `edu-utility-heat-receivership-mo` |
| utility-payment-evidence | `utility-payment-evidence` |
| utility-service-continuity | `utility-service-continuity` |
| utility-submetering-disclosure | `edu-no-submetering-rule-mo` |
| waiver-by-acceptance | `edu-no-acceptance-waiver-statute-mo` |


### 18.2 Topics with no MO row (status and reason) (171)
| Topic | States with rows | Missouri status |
|---|---|---|
| adverse-proceeding-notice | ND | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (ND-specific). |
| algorithmic-rent-setting | PA,TN,VA | CONFIRMED ABSENT: battery 53 (10 sections, none on rent setting); local rent regulation preempted (Mo. Rev. Stat. § 441.043(1)). |
| alt-housing | CA,CO,KS,NE,WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; casualty answered in edu-casualty-mo (Mo. Rev. Stat. § 441.645 rent release only). |
| appliances-excluded | SC | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; appliances-included tagged. |
| automatic-renewal | CA,ND | CONFIRMED ABSENT: battery 92 (0 hits, positive passed); no library clause renews automatically. |
| balcony-inspection | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (CA building-safety statute). |
| bed-bug-cooperation | CA | CONFIRMED ABSENT: battery 16 (0 hits); see edu-no-bed-bug-rule-mo. |
| casualty-and-mitigation-waivable | OH | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; casualty answered in edu-casualty-mo, mitigation in edu-no-mitigation-statute-mo. |
| children-occupancy | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; occupancy answered in edu-occupancy-limit-mo (Mo. Rev. Stat. § 441.060(2)). |
| cold-weather-vacate-notice | MN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (MN). |
| collection-fee | ID,UT | NOT OFFERED: no Missouri collection-fee or collection-agency statute (battery 88: 0 hits, positive passed); default-by-tenant already recovers reasonable costs; penalty doctrine unread (MO log §6). |
| condemned-premises-rent-bar | MN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; Boone County complaint process (edu-county-habitability-rules-mo) may declare occupancy unlawful (Mo. Rev. Stat. § 64.207(3)(5)), with no rent rule. |
| confession-of-judgment | MN,PA | CONFIRMED ABSENT as a lease rule: battery 49 (7 sections; Mo. Rev. Stat. § 511.070 general confession-of-judgment procedure, read in context only); no lease clause offered. |
| confirmed-absences-habitability | NE | ANSWERED ELSEWHERE: NE-specific roll-up key; Missouri absences are recorded topic by topic (edu-landlord-duties-mo, edu-alarm-duties-mo, edu-no-* rows). |
| confirmed-absences-misc | NE | ANSWERED ELSEWHERE: NE-specific roll-up key; see the edu-no-* rows. |
| confirmed-absences-outside-title | NE | ANSWERED ELSEWHERE: NE-specific roll-up key; squatter removal edu-unauthorized-occupant-removal-mo, cash receipts edu-no-rent-receipt-rule-mo, landlord registration edu-nonresident-landlord-agent-mo. |
| construction-liens | FL | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (mechanic's lien law, Chapter 429, not read). |
| defective-drywall-disclosure | VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (VA). |
| deposit-escheat | AZ,CA,FL,GA,ID,IL,KS,MN,ND,NV,SD,TX | NOT LOCATED: no deposit-specific rule (battery 41: 24 sections, general unclaimed-property provisions in Chapter 447 read in context only); whether an uncashed deposit refund is reportable under Chapter 447 not read. |
| deposit-surrender-notice | TX | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; deposit return answered in security-deposit-return-mo. |
| designated-repairer | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (NV). |
| disaster-displaced-guests | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (CA). |
| disaster-duties | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; Mo. Rev. Stat. § 441.645 only (edu-casualty-mo). |
| double-letting | CA,KS,MN,ND | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| drug-free-housing-addendum | IL | CONFIRMED ABSENT: battery 99 (0 hits); optional criminal-activity-mo covers drug activity. |
| dv-confidentiality | CO,IL,MN,ND,SD | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run beyond Mo. Rev. Stat. § 441.920 (edu-dv-protections-mo); Missouri's address confidentiality program (Chapter 589) not read. |
| dv-deposit-timing | ND | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; edu-dv-protections-mo. |
| dv-eviction-protection | ND,WY | ANSWERED ELSEWHERE: edu-dv-protections-mo (Mo. Rev. Stat. § 441.920(2)), kept under dv-lease-termination with dv-termination-fee-mo. |
| dv-lockchange | IL,ND,UT | CONFIRMED ABSENT: battery 40 (lock rules only in Mo. Rev. Stat. § 64.207 and § 441.233); stated in edu-dv-protections-mo. |
| dv-protection-order-chapter-moved | ND | NOT APPLICABLE (ND renumbering); Missouri cross-reference to Mo. Rev. Stat. § 455.010 is current. |
| dv-qualifying-documents | MN,NE | ANSWERED ELSEWHERE: documentation forms in edu-dv-protections-mo (Mo. Rev. Stat. § 441.920(4)). |
| electric-submetering-disclosure | TX | CONFIRMED ABSENT: battery 95 (0 hits); edu-no-submetering-rule-mo. |
| emergency-contact | TX | CONFIRMED ABSENT: battery 94 (0 hits, positive passed); manager disclosure in landlord-disclosure-mo. |
| employee-screening | FL | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (FL). |
| environmental-event-termination | CO,KS | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; casualty-termination-mo covers casualty. |
| ev-charging-end-of-tenancy | CO,IL | CONFIRMED ABSENT: battery 44; edu-no-ev-charging-rule-mo; CO clauses not tagged. |
| ev-charging-requirements | CO,IL | CONFIRMED ABSENT: battery 44; edu-no-ev-charging-rule-mo. |
| ev-charging-shared-area | CO,IL | CONFIRMED ABSENT: battery 44; edu-no-ev-charging-rule-mo; CO clause not tagged. |
| eviction-hardship-stay | ND | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; appeal-bond stay only (Mo. Rev. Stat. § 535.110, § 534.350; edu-eviction-process-mo). |
| eviction-penalty-clause-ban | CO | CONFIRMED ABSENT: battery 90 (0 hits); no ban on lease eviction-fee terms found. |
| eviction-service-party | TN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; landlord-side service agent in landlord-disclosure-mo (Mo. Rev. Stat. § 535.185). |
| exculpatory-clauses | CA,NE,SD | ANSWERED ELSEWHERE: no statute (battery 20); case law unread; recorded in edu-prohibited-lease-terms-mo; ks-oh-ca variants tagged (rule 52). |
| expedited-deposit-disposition | VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| extended-absence-notice | AL,KS,NE,TN,VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (URLTA-style rule); extended-absence-notice-ks not tagged; abandonment answered in abandoned-property-mo. |
| fee-in-lieu-of-deposit | FL,TX,VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| fee-transparency | CA,CO,IL,MN,NE,NV,VA,WY | NOT LOCATED: no fee-disclosure or all-in pricing statute in the landlord-tenant chapters; batteries 10, 28 and 100 found no fee rule; Merchandising Practices Act general (edu-consumer-protection-mo); 15 CSR 60 not read. |
| fee-unprovided-service | CO | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| fire-code-standard | ND | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; local fire codes not read (rule 3). |
| fire-sprinkler-duty | MN | CONFIRMED ABSENT for residential rentals: battery 57 (3 sections: builder's offer of sprinklers to home buyers, home-based business limits, care facilities; headings read). |
| foreclosure-disclosure | AZ,CA,MN,NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; post-sale notice answered in edu-foreclosure-tenants-mo. |
| foreign-ownership | AZ,ID,KS,TX | CONFIRMED ABSENT for residential leases: battery 107 (alien ownership of agricultural land only, Mo. Rev. Stat. §§ 442.560 to 442.592, read in context); recorded in edu-no-immigration-status-rule-mo. |
| forfeiture-redemption | CA | ANSWERED ELSEWHERE: tender of all rent and costs on the judgment date stays a rent-and-possession case (Mo. Rev. Stat. § 535.160; edu-eviction-process-mo). |
| frozen-standard-incorporation | ND | NOT APPLICABLE: no Missouri statute relied on incorporates a dated code edition. |
| governmental-fines | TX | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| guarantor-renewal | TX | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| guest-rights | PA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| habitability-materiality | WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; no statutory habitability standard (edu-landlord-duties-mo). |
| habitability-modifiable | WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; edu-landlord-duties-mo. |
| habitability-presumption | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; edu-landlord-duties-mo. |
| health-district-rental-rules | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (NV). |
| heating | IL,NJ | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; master-metered heat receivership in edu-utility-heat-receivership-mo; heat required only in county rules under Mo. Rev. Stat. § 64.207(2)(5). |
| hoa | AZ,FL,ID,IL,UT | NOT LOCATED: battery 103 (40 hits) found no statute restricting association leasing rules; Mo. Rev. Stat. § 442.404 (association political-sign rules) read in context only; hoa-compliance tagged. |
| holdover-rate | AL,GA,NC,PA,SC,TN,VA | NOT OFFERED: Missouri sets statutory holdover measures (Mo. Rev. Stat. § 441.080, § 441.100, § 534.330); standing GA rule offers a rate only where none exists (MO log §6; edu-holdover-damages-mo). |
| homestead-waiver | AL,UT,VA | NOT OFFERED: no statute authorizes a lease waiver of execution exemptions (battery 50: 15 sections, none residential); exemptions in Chapter 513 not read (MO log §6). |
| infirmity-termination | MN,NV,TN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| inspection-condemnation-disclosure | MN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| inspection-notice-penalty | MN | ANSWERED ELSEWHERE: move-out inspection notice in edu-deposit-inspection-mo; no separate penalty in Mo. Rev. Stat. § 535.300. |
| jury-waiver | CA | NOT OFFERED: no statute supports a pre-dispute lease jury waiver (battery 48); Mo. Const. art. I, § 22(a) keeps jury trial 'inviolate'; Brainchild Holdings v. Cameron (Mo. 2017) not read (MO log §6). |
| key-control-policy | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| landlord-breach-remedy | TX | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; tenant remedies limited to Mo. Rev. Stat. § 441.234 and receivership (edu-repair-and-deduct-mo). |
| landlord-liability-insurance | NJ | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| landlord-registration | AZ,GA,TN,UT | ANSWERED ELSEWHERE: no state landlord registration; nonresident and corporate agent designations in edu-nonresident-landlord-agent-mo (Mo. Rev. Stat. § 441.520(4)(2), § 82.817); counties under Mo. Rev. Stat. § 64.207 may not require rental registration. |
| landlord-remedies-termination | KS | ANSWERED ELSEWHERE: edu-eviction-process-mo and edu-cure-grounds-mo. |
| landlord-self-cure | PA,TN,VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (URLTA §4.105 analogue). |
| law-enforcement-cooperation | TN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; reliance on law-enforcement notice protected in Mo. Rev. Stat. § 441.040 (edu-cure-grounds-mo). |
| lead-safe-certification | NJ | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; Mo. Rev. Stat. § 701.308 abatement on notice (edu-lead-hazard-mo). |
| lease-completeness | PA,TN,VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; blank-space rules in 15 CSR 60 not read (edu-consumer-protection-mo). |
| lease-content-requirements | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; required content limited to landlord-disclosure-mo (Mo. Rev. Stat. § 535.185) and the conditional disclosures. |
| lease-notice-initial-requirement | ND | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| lease-term-limitation | KS | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; statute of frauds only (edu-lease-in-writing-mo). |
| lockout-for-rent-delinquency | TX | NOT OFFERED: lockouts are forcible entry and detainer (Mo. Rev. Stat. § 441.233(1); edu-self-help-eviction-mo). |
| meter-conservation-charge | SC | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| military-air-zone-disclosure | VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| minor-tenant-filing | IL,MN,OH | CONFIRMED ABSENT: battery 102 (1 hit, Mo. Rev. Stat. § 701.308, not a filing rule). |
| municipal-utility-lien | KS,UT | ANSWERED ELSEWHERE: owner liability for municipal water and sewer in edu-water-sewer-owner-liability-mo (Mo. Rev. Stat. § 250.140); a lien statute not located. |
| nonrefundable-deposit-notice | AZ,ID,UT,WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; any deposit securing performance is a security deposit however denominated (Mo. Rev. Stat. § 535.300(8); edu-deposit-cap-mo). |
| nonrefundable-deposit-separate-notice | WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| notice-service-fee | ID,UT | NOT OFFERED: Missouri's nonpayment track needs only a demand, which service of the summons can satisfy (Mo. Rev. Stat. § 535.140), so the UT/ID rationale has little to attach to; penalty doctrine unread (MO log §6; flagged to Taylor). |
| notice-to-quit-waiver | PA | NOT OFFERED (Taylor, 2026-09-30): Mo. Rev. Stat. § 441.070 'special agreement' recorded in edu-notice-to-quit-mo only. |
| notice-to-vacate-additional-terms | KS | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| ordnance-demolition-meter-disclosures | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run (CA). |
| other-landlord-facilities | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| owner-move-in-reservation | CA | NOT APPLICABLE: no just-cause regime (edu-no-just-cause-mo), so no reservation is needed to end a tenancy. |
| parking-rules-notice | TX | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; towing rules in edu-towing-mo. |
| part5-nonwaivable | CO | NOT APPLICABLE (CO structure); Missouri anti-waiver provisions listed in edu-prohibited-lease-terms-mo. |
| periodic-services-entry | SC | CONFIRMED ABSENT: no entry statute (batteries 22, 68; edu-no-entry-statute-mo). |
| pest-control-notice | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| plain-language | MN,PA,TN,VA | CONFIRMED ABSENT for leases: battery 52 (31 sections, none residential leases). |
| plain-language-consumer-statement | PA | CONFIRMED ABSENT: battery 52. |
| pool-safety | AZ,KS,TX | NOT LOCATED: battery 56 (2 sections: Mo. Rev. Stat. § 316.250, amusement-ride insurance, and § 537.348, recreational landowner liability; headings read, neither a landlord duty); local codes not read. |
| portable-solar | VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| portfolio-thresholds | IL,OH,VA | ANSWERED ELSEWHERE: the only size thresholds are fair-housing exemptions (edu-fair-housing-mo) and condominium-conversion rights for 6+ unit buildings (edu-condo-conversion-mo). |
| possession-bond | TN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; appeal bonds in Mo. Rev. Stat. § 535.110 (edu-eviction-process-mo). |
| private-well-testing | NJ | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| prohibited-acts-renter | NC,WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| prop65-rental-warning | CA | NOT APPLICABLE (CA). |
| property-tax-rent-disclosure | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| protected-class-inquiry-ban | IL,MN,ND,NE | ANSWERED ELSEWHERE: Mo. Rev. Stat. § 213.040(1)(3) bars statements and advertisements indicating a preference (edu-fair-housing-mo); no separate inquiry or record ban located. |
| purpose-limitation | ND | ANSWERED ELSEWHERE: residential-use-only tagged; illegal-use voidance in edu-cure-grounds-mo. |
| quiet-possession | PA,TN,VA | CONFIRMED ABSENT: battery 75 (Mo. Rev. Stat. §§ 400.9-610, 419.090, 534.300, none a covenant of quiet possession). |
| redemption | VA | ANSWERED ELSEWHERE: tender stays proceedings (Mo. Rev. Stat. § 535.160; edu-eviction-process-mo). |
| religious-cultural-display | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; common-area-use preserves lawful displays. |
| rent-concession | IL | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| rent-demand-bar | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| rent-escalation | GA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; no retaliation statute (edu-no-retaliation-statute-mo). |
| rent-into-court-counterclaim | AL,KS | ANSWERED ELSEWHERE: appeal bond requires accruing rent paid into court (Mo. Rev. Stat. § 535.110; edu-eviction-process-mo); no pre-trial pay-in rule located. |
| rent-receipt-anti-waiver | KS | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| rent-reporting | CA,NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| renters-insurance-rules | IL,KS,MN,NC,TN,VA | CONFIRMED ABSENT: battery 26 (7 sections, none a landlord rule; headings saved in sources/hit-headings.txt). |
| repair-cost-termination | WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| repair-escrow-exemption-notice | OH | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| repair-notice | CO,KS,WY | ANSWERED ELSEWHERE: the repair-and-deduct remedy runs from the tenant's written notice (Mo. Rev. Stat. § 441.234(2); edu-repair-and-deduct-mo). |
| required-disclosures | VA | ANSWERED ELSEWHERE: Missouri lease disclosures are landlord-disclosure-mo, meth-disclosure-mo, contamination-disclosure-mo and the federal lead-based-paint clause. |
| required-fees | ID,NV,UT | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; no statute requires fees to be listed in the lease. |
| rules-regulations | AL,AZ,KS,NE,NV,SC,TN,VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; no house-rule enforceability statute. |
| security-deposit-nonwaiver | CO,WY | CONFIRMED ABSENT: battery 91 (anti-waiver sections only Mo. Rev. Stat. § 441.234 and § 441.610). |
| security-deposit-standards | SC | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| senior-housing-work-card | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| service-animal-denial-penalty | GA,ID,KS,MN,NC,NE,SD,UT | NOT LOCATED as a housing penalty: Mo. Rev. Stat. § 209.150 (no extra charge for service dogs) covers public places and lodging places, not private rentals (read whole); housing denial is a Mo. Rev. Stat. § 213.040 violation (edu-fair-housing-mo). |
| sex-offender-disclosure | CA,TN,VA | CONFIRMED ABSENT as a landlord duty: battery 108 (11 sections: registration and offender residence restrictions such as Mo. Rev. Stat. § 566.147, read in context). |
| sex-offender-occupancy | AL,IL,OH | CONFIRMED ABSENT as a landlord duty: battery 108; the residence restrictions bind the offender, not the landlord (read in context). |
| sfr-occupancy-disclosure | NV | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| shutdown-rent-protection | NV | CONFIRMED ABSENT: battery 77 (4 sections, none on rent). |
| smoke-drift-waiver | UT | CONFIRMED ABSENT: battery 76 (0 hits); nothing to waive. |
| social-security-defense | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| statutory-caps | OH | NOT APPLICABLE (OH roll-up key); Missouri's only cap is the deposit cap (edu-deposit-cap-mo) and the returned-check charge (returned-payments-mo). |
| statutory-early-termination | KS,ND,NJ,SD,TX | ANSWERED ELSEWHERE: Missouri's statutory early exits are servicemembers (edu-servicemember-termination-mo) and domestic-violence victims (edu-dv-protections-mo); no fraud-based termination statute located. |
| statutory-forms | IL,PA,TN,VA | ANSWERED ELSEWHERE: the abandonment notice text (Mo. Rev. Stat. § 441.065(3); abandoned-property-mo) and the post-foreclosure notice text (Mo. Rev. Stat. § 534.030(3); edu-foreclosure-tenants-mo). |
| steam-radiator-covers | NJ | NOT APPLICABLE (NJ). |
| stove-refrigerator | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| subsidized-inspection-refusal | IL | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| subsidy-habitability-proration | CO | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| subsidy-late-fee | CO | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| telecom-access | CA,VA | NOT LOCATED: battery 79 (1 section, tax); federal OTARD rule not read. |
| tenancy-at-will | MN,SD | ANSWERED ELSEWHERE: edu-notice-to-quit-mo and edu-lease-in-writing-mo (Mo. Rev. Stat. § 441.060(1), § 432.050). |
| tenant-display-rights | CA,IL,NV,OH,TN,UT,VA | NOT LOCATED: battery 97 (Mo. Rev. Stat. § 71.286 limits government regulation of the U.S. flag, not leases; Mo. Rev. Stat. § 442.404 association political signs, read in context); common-area-use preserves lawful displays. |
| tenant-insurance-claims | CO | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| tenant-records | VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| tenant-repair-agreement | AL,AZ,FL,KS,NE,NV,OH,SC,TN,TX,UT,VA | NOT OFFERED: no Missouri framework for shifting statutory repair duties (no statutory duty exists to shift; edu-landlord-duties-mo); tenant-maintenance, landscaping-irrigation and snow-removal tagged. |
| tenant-right-to-organize | MN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| tenant-rights-statement | IL,VA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| tenant-security-cameras | PA,TN,VA | CONFIRMED ABSENT: battery 74 (1 section, not residential). |
| term-change-notice | ID,ND,SD | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; month-to-month changes by ending the tenancy on Mo. Rev. Stat. § 441.060(4)(1) notice (edu-no-rent-increase-notice-mo). |
| tpa-exemption-notice | CA | NOT APPLICABLE (CA). |
| tpa-notice | CA | NOT APPLICABLE (CA). |
| tpa-sunset | CA | NOT APPLICABLE (CA). |
| translation-duty | CA,NV | CONFIRMED ABSENT: battery 73 (0 hits, positive passed). |
| truth-in-renting | NJ | NOT APPLICABLE (NJ). |
| unbundled-parking | CA | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| unconscionability | CA,KS,MN,NE,SD | CONFIRMED ABSENT for real-property leases: battery 106 (15 sections: UCC sales and goods leases, condominium act, others); recorded in edu-prohibited-lease-terms-mo. |
| utility-allowance-cap | CO | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| utility-apportionment | IL,MN | CONFIRMED ABSENT: battery 95 (0 hits); edu-no-submetering-rule-mo. |
| utility-deposit-return | WY | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| utility-disclosure-attachment | MN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| utility-interruption-submeter | TX | CONFIRMED ABSENT: battery 95; landlord interruption barred generally by Mo. Rev. Stat. § 441.233(2). |
| utility-shutoff-statute | ND,SD,TX | NOT LOCATED as a landlord rule: battery 72 (4 sections): Mo. Rev. Stat. § 393.108 and § 393.109 (hot- and cold-weather limits on regulated utilities discontinuing service) read in context only; § 250.140 (edu-water-sewer-owner-liability-mo); § 701.365 not relevant; Public Service Commission rules not read (rule 21). |
| utility-transfer | TN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |
| veterans-incentive | FL | NOT APPLICABLE (FL); Missouri allows local bans on veterans'-benefits discrimination (Mo. Rev. Stat. § 441.043(4); edu-source-of-income-mo). |
| waterbed | CA,FL | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run; common-area-use bars water-filled furniture without consent. |
| window-guards | NJ | CONFIRMED ABSENT: battery 58 (0 hits; known-positive test added afterwards, sources/hit-headings.txt). |
| written-notice-required | MN | NOT LOCATED: no Missouri counterpart in the whole read of Chapters 441, 534 and 535; no targeted whole-code search run. |


### 18.3 'Topics no state has a row for yet'
The reference's list of topics found by earlier states with no row in any state was checked: each is now a topic key with rows elsewhere and is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** no residential typography, separate-document or first-page rule (batteries 86-87); prescribed texts in §4.
- **41 just cause:** none; end of term ends possession (§ 441.070); `edu-no-just-cause-mo` keyed `for-cause-eviction` with the situational limits.
- **42 required text in a shared clause:** the carpet-cleaning notice must sit inside any carpet-cleaning term (§ 535.300(4)(2)); handled by the separate optional `deposit-carpet-cleaning-mo`, so no shared clause carries a carpet amount.
- **43 cure promises:** base `early-termination` (10-day cure) not tagged; `default-by-tenant` keeps its no-cure exception, matching § 441.040.
- **44 terms turned into duties:** none found; no Missouri statute makes 'as agreed in the rental agreement' terms mandatory.
- **45 electronic notices:** UETA excludes no notices (§ 432.210(2); battery 85).
- **46 lease as the notice:** none; the only lease-borne notice is the carpet-cleaning notice (rule 42 above).
- **47 knowing-use penalties:** none (battery 90).
- **48 separate documents:** none (battery 87).
- **49 collection costs:** no ban (battery 88); `default-by-tenant`'s 'reasonable costs and expenses' stands.
- **50 'the lease controls':** § 535.300(4)(2) (carpet amounts: optional clause), § 441.070 (special agreement: not offered, Taylor), § 441.140 ('unless otherwise stated in the lease': grants of rents; no clause needed), § 441.060(4)(2) ('notwithstanding any written lease provision', mobile-home lots; out of scope).
- **51 plain language and consumer contracts:** no plain-language statute for leases (battery 52); Merchandising Practices Act reaches leases (`edu-consumer-protection-mo`); 15 CSR 60 not read, so the blank-space and copy-at-signing items are unknown; no statutory copy duty (battery 105).
- **52 exculpation:** no statute (battery 20); variants used; case law unread.
- **53 figures vs shared clauses:** `holdover` (trigger mismatch), `returned-payments` (ceiling), `pet-policy` (self-limiting removal) overridden; `late-fee`, `keys`, `landlords-access` (24-hour floor) checked with no Missouri figure in conflict; deposit cap is a builder rule.

## Proposed SOP changes
1. Search the state constitution as well as the statutes, and re-run any battery run before the constitution was loaded; Missouri's Article XIV voids a shared clause's marijuana-vaping ban, and the first 60 batteries had run before the Constitution was in the corpus.
2. When a transcribed file fails its hash, compare per-line lengths with the browser text to locate the difference; in Missouri the lease and three battery logs failed their first hash because the writing tool strips trailing spaces and tabs, and one battery log also had a value dropped in transcription, which the line-length comparison found.
3. Load a throttled official site sequentially, never in parallel, and never reuse the corpus tab for another page; parallel chapter loads on revisor.mo.gov returned 'Loading…' pages and a tab reuse wiped the in-memory corpus.
4. Fetch each relied-on section page twice and confirm the heading number matches the request; the Missouri site once returned a different heading over § 535.300's text.
5. Exclude a heading-only match before counting a hit (battery 65's only hit was 'withholding deposit' in the § 535.300 heading).
6. After any bulk find-and-replace on citations, scan for doubled or misplaced prefixes ('§Mo. Rev. Stat.', 'U.S.C. Mo. Rev. Stat.'); a Missouri prefix fix garbled every '§§' range and five federal citations, and the per-citation prefix check could not see it.

## Proposed topic questions
1. `smoking-policy`: Does the state constitution or a cannabis statute protect a tenant's non-smoking marijuana use, so that a shared vaping ban must be narrowed?
2. `pet-fees`: Is a pet deposit excluded from the statutory definition of a security deposit (and so from the cap and return rules)?
3. `deposit-cost-schedule`: Does the deposit statute let the lease pre-set only carpet-cleaning charges, and only with a prescribed tenant notice?
4. `abandoned-property`: Is the statutory abandonment procedure the only non-judicial way to remove a tenant's property, so that a lockout-and-removal statute makes every other removal unlawful?
5. `nonresident-owner-agent`: Is a nonresident or corporate landlord's agent designation hidden in a receivership or code-enforcement chapter rather than the landlord-tenant act?

**Propagation note, 2026-09-30 (rule 62), added at sync:** this pass tagged `early-termination-ks` on its earlier text. At the same sync, Claude Code merged the MO tag onto the current text, which since the SC retro limits the early-termination option and fee to a lease with a fixed Term. That fits Missouri, where a month-to-month tenancy ends on one month's notice (Mo. Rev. Stat. § 441.060).

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.
