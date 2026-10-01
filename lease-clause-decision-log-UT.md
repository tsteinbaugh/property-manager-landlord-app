# Utah — lease-clause decision log (state #22)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§1, §12, §17: Utah Fit Premises Act (Title 57, Chapter 22), Residential Renters' Deposits (57-17), Local Rent Control Prohibition (57-20), Utah Fair Housing Act (57-21), Display of Flag (57-24), Methamphetamine Contaminated Property (57-27), Forcible Entry and Detainer (78B-6 Part 8) and eviction expungement (Part 8a) read whole from le.utah.gov with every section's history line; the 2026 nuisance chapter (78B-6a) and Lessors' Liens (38-3) read in the parts cited; section index diffed against the library, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Utah Residential Rental Agreement (Single Family Home), © The Law Offices of Kirk A. Cullimore, LLC 5/2022, with its 2021-2022 addenda, as used and posted in 2023 by Property Solutions of Utah, PLLC (d/b/a Utah Property Solutions), a Utah-licensed property manager) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 71 scenarios, Claude-generated, AZ §18.1 / AL / PA model plus Utah-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: regular-expression search of the whole Utah Code (96 titles, 28,551 section versions, 86.2 MB of official XML) and the Utah Constitution (23 articles) loaded in the built-in browser, 89-search battery plus 46-search battery 2 and follow-ups, control term 0; hits read in context; all 152 Utah Rules of Civil Procedure screened) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding a `UT` tag and a `UT:` note.

**Date:** 2026-09-29 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three triggers needed it, because the whole Utah Code loaded as official XML and gave full-text proof of absence and cross-title search directly (rule 9; only Taylor can switch it on).
**Kickoff vs SOP:** no conflict noticed; the kickoff's settings, citation format and deliverables match SOP rules 9, 21 and 70-75.
**Scope:** Utah state law only. City and county ordinances (Salt Lake City, Provo, Ogden and others: rental licensing and good landlord programs, short-term rental rules) flagged, not resolved (rule 3). Short-term rentals out of scope. Deprioritized and named: Mobile Home Park Residency Act (Title 57, Chapter 16), agricultural tenancies, condominium and community-association acts beyond their rental rules.
**Input CSV:** `lease-clauses.csv`, **1,630 rows, 17 columns, CRLF, 1,507 active (426 lease clauses, 1,081 education)**; active counts AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 108, SC 111, SD 99, TN 132, TX 137, VA 135, WY 107, matching the kickoff exactly (rule 23). No duplicate ids. One active row has a blank `states` field: the intentional parent `security-deposit-return`. No UT rows existed (rule 25). The outputs folder was empty at the start; nothing to delete (rule 8).
**Output CSV:** `lease-clauses-UT-delta.csv`, **122 rows, 17 columns, CRLF**: 54 existing rows with `UT` added to `states`, a `UT:` note appended and `last_checked` 2026-09-29, and 68 new UT rows. **UT 122 active: 66 lease clauses, 56 education; all VERIFIED.** Merged with the master: 1,698 rows, 1,575 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole, saved:** Title 57 Chapters 17, 20, 21, 22 (both versions of § 57-22-5.1), 24, 27; Title 78B Chapter 6 Parts 8 (§§ 801-817) and 8a (§§ 850-854). **Read in the parts cited, saved:** Chapter 78B-6a (§§ 101-103, 301-304, 405; table of contents whole); Chapter 38-3 whole; §§ 57-1-1(8), 57-1-25, 57-1-37, 26B-6-801 to -805, 7-15-1 to -3, 46-4-103, 39A-6-112, -113, 76-6-206.4, 78B-5-509, 78B-5-826, 12-1-11, 15-1-1, 10-8-85.5, 10-20-606, 34-45-103, 57-8a-209. **Read in context only:** §§ 72-9-603, 10-1-203.5, 10-7-10.5, 34-45-107, 53-5a-103, 57-8a-310, 59-12-102, -103, 63L-13-204, 13-11-3, 13-11-22. **Court rules:** Utah R. Civ. P. 26.3 read whole; all 152 civil rules screened. **Acts screened:** every 2024-2026 chapter printed in the history lines of the sections relied on, mapped to its bill and effective date (§1.2). |
| Step B — tag first | **Done.** 54 existing rows tagged UT (§2.1): all shared generic clauses that are lawful as written, the ks-oh-ca / ks-oh / ks-ne / ks variants, and three other states' rows whose text fits Utah (`holdover-ca`, `possession-delay-ca`, `tenant-forward-proceedings-ca`). 9 bases not tagged, with a variant or UT row instead (§2.2). Every single-state clause screened (§2.3). No shared text edited. |
| Step E — new UT rows | 12 lease clauses (5 opt-in: 3 on Taylor's decisions, 1 on a standing rule, 1 decided under rule 54) and 56 education rows, including 13 confirmed absences with their own rows (§3). |
| Instruction 24 family | `security-deposit-return-ut` (REQUIRED; 30 days; balance of deposit and prepaid rent; itemized notice; electronic delivery by a means the renter gives). |
| Step D screens | All run (§19). Hits: rule 42 (nonrefundable deposit must be stated in writing, § 57-17-2), rule 44 (renter's deficient-condition notice may be served 'as provided in the rental agreement', § 57-22-6(2)(b)(v); the library designates no method), rule 50 (lease may set entry notice, § 57-22-4(2), and may take the manager off notice duty, § 57-22-2(1)), rule 53 (`returned-payments` ceiling wording and base `holdover` 'maximum permitted' replaced). |
| Optional clauses (rule 54) | 5 offered (smoke-drift waiver, collection fee, notice-service fee, casualty termination, tenant-performed duties); 7 not offered with reasons (§6). |
| Questions to Taylor (rule 76) | 3 asked 2026-09-29 (§6): smoke-drift waiver and collection fee, both offered; notice-service fee, offered after Taylor challenged Claude's first recommendation. |
| Proof of absence | 13 confirmed absences with their own rows; every topic in the reference ends Present, Confirmed absent, Not located or Not applicable (§18). |
| Independent check | A separate agent checked about 470 claims against the saved texts: 6 wrong and about 32 imprecise items, all fixed (§13). |
| Currency | Current through the 2026 General Session; no 2026 special session; one future version (§ 57-22-5.1, effective 2027-01-01) and one recent effective date (§ 78B-6-812, 2026-09-01) handled in the rows (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes:** le.utah.gov (Office of Legislative Research and General Counsel, 'the current and official electronic record of the Utah Code'). Each title, chapter and part is served as official XML (`/xcode/Title57/C57_1800010118000101.xml`), with a `<histories>` block per section and `<effdate>`/`<enddate>` tags on dated versions. The shell cannot reach le.utah.gov (proxy CONNECT 403); the built-in browser could.
- **Effective dates:** each section link carries a version id whose last eight digits are that version's effective date (e.g. `C78B-6-S812_2026050620260901` = effective 2026-09-01). All ids for the chapters relied on are saved (`UT-version-ids-and-acts.txt`).
- **Session laws:** cited as `Laws of Utah 2026, ch. 401`. le.utah.gov passed-bill lists (`/asp/passedbills/passedbills.asp?session=...`) map chapter numbers to bills and print each bill's effective date.
- **Court rules:** Utah R. Civ. P. on utcourts.gov (legacy.utcourts.gov/rules, which points to www.utcourts.gov/rules for current text). Eviction forms are drafted by the Judicial Council (§ 78B-6-812(6)); not read.
- **Administrative rules:** Utah Admin. Code (Labor Commission fair housing rules, R608) not read; no row relies on them (rule 21).
- **Citation format:** `Utah Code Ann. § 57-22-4(5)(a)`, every reference prefixed (programmatic check §8).

### 1.2 Currency (rule 16)
- **Compilation currency:** the history lines print amendments through the 2026 General Session (5,387 history entries name the 2026 General Session). The version ids show 2026 GS acts taking effect 2026-05-06 unless dated otherwise.
- **Special sessions:** passed-bill lists exist for 2024 S3 (7 bills), 2024 S4 (4), 2025 S1 (18) and 2025 S2 (5); all are printed in the history lines. The 2026 S1-S3 pages are empty, so no special session had met in 2026 as of 2026-09-29. The 2025-2026 'extraordinary sessions' on le.utah.gov are Senate confirmation sessions.
- **Acts behind every section relied on, with effective dates** (from the version ids and passed-bill lists):
  - HB 591 (2026 ch. 401, Nuisance Amendments), 2026-05-06: §§ 78B-6-802, -805, -806, -811, -813; created Chapter 78B-6a.
  - SB 218 (2026 ch. 130, Constable Modifications), 2026-05-06: § 78B-6-801.
  - SB 149 (2026 ch. 44, Licensing Modifications), **2026-09-01**: § 78B-6-812 (animals at an eviction).
  - HB 404 (2026 ch. 315, Sex-Designated Housing), 2026-05-06: §§ 57-21-2, -4, -5.
  - HB 90 (2026 ch. 445, Sexual Offenses), **2027-01-01**: future § 57-22-5.1 (removes the crime-victim exclusions used for new locks). Both versions read; the rows state the current rule and the change.
  - HB 480 (2025 ch. 275, Landlord Communication), 2025-05-07: §§ 57-17-3 (electronic deposit return), 78B-6-810.
  - SB 55 (2025 ch. 295), 2025-05-07: § 78B-6-817 (trespasser removal).
  - SB 1002 (2025 S1 ch. 9): § 57-21-3; SB 187 (2024 ch. 200): § 57-21-10; SB 163 (2024 ch. 194): § 78B-6-853; SB 171 (2024 ch. 432): § 10-8-85.5; HB 21 (2025 ch. 173): current § 57-22-5.1; SB 79 (2025 ch. 302): §§ 57-22-3, 38-3-5, 57-1-37.
- **Title screen of 2024-2026 bills** for landlord-tenant words (a lead, not a verdict): it surfaced HB 480, SB 116 (2024, eviction notices; superseded in the history lines by 2026 ch. 401), SB 171, SB 187, SB 255 (2024, long-term guest; § 76-6-206.4 read) and HB 591, but missed HB 90. That is why the history-line mapping, not the title screen, is the currency basis.
- **Bulk-data lag:** none possible to detect. The loaded title files are the same files the site serves for 'Current Version', and they include 2026 GS chapters up to ch. 445.

### 1.3 Corpus and method (rule 19)
- **Loaded:** all 96 titles listed on the official code index page, each HTTP 200 (86,245,128 characters of XML; 28,551 section versions, 27,839 current and 712 future-dated), and all 23 Constitution articles (189 sections). Future-dated versions are excluded from searches unless noted. Completeness is proved against the site's own index (96 listed, 96 loaded).
- **Engine:** JavaScript regular expressions, case-insensitive, over each section's full text. Control term 'zqxvbnmwt': 0 hits. Calibration: 'security deposit' 44 hits in 22 sections; '\brenters?\b' 229 hits in 47 sections.
- **Boundary:** statutes and the Constitution only. Administrative rules, case law, local codes and the Title 15A building and fire code amendments were not searched or read, and nothing is claimed about them.
- **Saved:** every battery (`battery_utcode_2026-09-29.tsv`) and every text relied on (`sources/`). The built-in browser link dropped after the independent check (remote device disconnected), so no search could be re-run after that point; none was needed.

### 1.4 Section-open vs recall (rule 15)
Every row was written with the saved primary text open. The recall subset is empty. Sections read only in context are labelled so in their rows. **Case law is not relied on anywhere:** the penalty doctrine for fees, waiver by accepting rent, exculpatory clauses, unconscionability and utility shutoffs as 'willful exclusion' are each flagged as case law, not read.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged UT as written (54)
`rental-application-accuracy`, `lead-based-paint`, `hoa-compliance`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `assigned-parking-space`, `parking-vehicle-rules`, `pet-insurance-requirement`, `assistance-animal-accommodation`, `rent-payment`, `late-fee`, `due-at-signing`, `application-of-payments`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `landlords-access`, `default-by-tenant`, `tenant-forward-proceedings-ca`, `early-termination-ks`, `holdover-ca`, `surrender-end-of-term-ks-ne`, `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `services-utilities-provided-ks-oh`, `possession-delay-ca`, `pet-policy`.

Every tagged row carries a `UT:` note naming the controlling Utah section and ending 's5a.1: states-only change, no propagation owed.' The ones that matter:
- **`late-fee` (base).** Utah caps late fees at the greater of 10% of rent or $75 (§ 57-22-4(5)(a)). The cap is an education row and a builder check, per Taylor's PA rule. No Utah acceptance-waiver statute exists, so the base non-waiver sentence stays.
- **`landlords-access`.** § 57-22-4(2) sets 24 hours' notice 'except as otherwise provided in the rental agreement' (rule 50). The library keeps 24 hours with an emergency exception. The Cullimore lease uses the same power to allow entry without notice; not copied.
- **`possession-delay-ca`** instead of the base. The base's 30-day wait before a tenant may terminate conflicts with § 57-22-4.1's immediate right to terminate or have rent abate.
- **`holdover-ca`** instead of the base. 'Maximum amount permitted by applicable law' would point at the treble-damages judgment (§ 78B-6-811(3)).
- **`smoking-policy`.** Utah expressly recognizes lease smoking bans (§ 57-22-5(1)(h)). A landlord faces a smoke-drift suit only if the lease promises a smoke-free unit, the renter gives written notice and the landlord knowingly lets it continue (§ 78B-6a-405(2)(c)). The clause makes no such promise.
- **The ks-oh-ca variants.** No Utah statute voids exculpatory terms in residential leases. The variants are used so the Utah lease carries no unsettled waiver (rule 52).

### 2.2 Not tagged — Utah variant or UT row instead (9 bases)

| Base | Instead | Why the base fails in Utah |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-ut` | Instruction 24; § 57-17-3(2) |
| `possession-delay` | `possession-delay-ca` (tagged) | 30-day wait conflicts with § 57-22-4.1 |
| `holdover` | `holdover-ca` (tagged) | 'Maximum permitted' points at § 78B-6-811(3) treble damages (K.3) |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) + `abandoned-property-ut` | 'Disposed of at Tenant's cost' skips § 78B-6-816(2) notice and storage |
| `early-termination` | `early-termination-ks` (tagged) | Separate 10-day cure would sit beside `default-by-tenant` |
| `returned-payments` | `returned-payments-ut` | Ceiling-only wording (rule 53); § 57-22-4(5)(b) needs a stated fee |
| `tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided` | the ks-oh-ca / ks-oh variants (tagged) | 'Not liable' sentences; rule 52 |

**Generic-coverage check (programmatic):** every generic lease clause is tagged UT or superseded by a UT-tagged row, with one deliberate exception, `extended-absence-notice-ks`. It rests on a URLTA absence-notice statute Utah lacks; in Utah a notice of absence matters only to the abandonment presumption (§ 78B-6-815(1)), which `abandoned-property-ut` covers. PA and AL left it untagged too.

### 2.3 Other states' specific rows screened, not tagged
All 359 active single-state lease clauses were listed by `topic_key`, and every plausible analogue was read in full. Beyond the three tagged (`holdover-ca`, `possession-delay-ca`, `tenant-forward-proceedings-ca`), none applies to Utah as written. The closest analogues and what UT took instead:
- **Deposits.** `nonrefundable-deposit-notice-wy` fits Utah's text but its basis field cites Wyoming, so a UT row was written instead. `security-deposit-return-pa` became `security-deposit-return-ut`; the cap and holding rows have no Utah analogue (confirmed absent).
- **Opt-in rows.** `casualty-termination-pa` became `casualty-termination-ut` (standing GA rule); `tenant-repair-agreement-al` became `tenant-repair-agreement-ut` (Utah's § 57-22-3(4) is broader). `holdover-rate-*` and `notice-to-quit-waiver-pa` have no Utah counterpart (§6). `exemption-waiver-al` is barred (§ 78B-5-509). `criminal-activity-nc` and `crime-free-addendum-az` were not copied (§6). `eviction-fees-nc` rests on a North Carolina fee statute; `notice-service-fee-ut` was drafted from Utah's own fee rule.
- **Disclosures.** `landlord-disclosure-al` became `landlord-disclosure-ut`, which also carries the § 57-22-2(1) agent opt-out (same shape as `agent-capacity-designation-wy`). `meth-disclosure-sd` / `-va` became `meth-disclosure-ut`. `flag-display-nv` (a REQUIRED clause in Nevada) became an education row: Utah's rule limits the landlord and requires no lease text.
- **Other.** `periodic-tenancy-notice-pa` became `periodic-tenancy-notice-ut`; `abandoned-property-*` became `abandoned-property-ut`; `pet-policy-al` / `-pa` not needed, as the base is lawful in Utah; `electronic-notice-*` not copied (§6); `move-in-inventory-*` not copied (§ 57-22-4(6) is an owner duty, so education).

## 3. New UT rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type`, `content_type`, `lease_clause_basis` or any field other than `states`, `notes` and `last_checked` changed (programmatic check).

### 3.2 New UT lease clauses (12)
| Row | rule_type | Basis | Rests on | Opt-in? |
|---|---|---|---|---|
| `security-deposit-return-ut` | REQUIRED | SERVES_LANDLORD | § 57-17-3(2) | — |
| `nonrefundable-deposit-notice-ut` | CONDITIONAL | REQUIRED_DISCLOSURE: Utah Code Ann. § 57-17-2 | § 57-17-2, § 57-17-1 | Conditional on a nonrefundable part |
| `landlord-disclosure-ut` | REQUIRED | REQUIRED_DISCLOSURE: Utah Code Ann. § 57-22-4(7)(a) | § 57-22-4(7)(a), § 57-22-2(1), § 57-22-4(9) | — |
| `returned-payments-ut` | RECOMMENDED | CONSTRAINED_TERM | SERVES_LANDLORD | § 57-22-4(5)(b), § 7-15-1(2)(b), § 7-15-2 | — |
| `periodic-tenancy-notice-ut` | RECOMMENDED | SERVES_LANDLORD | § 78B-6-802(1)(b)(i) | — |
| `abandoned-property-ut` | RECOMMENDED | SERVES_LANDLORD | § 78B-6-815(1), § 78B-6-805, § 78B-6-816(2), § 78B-6-812(4)(b) | — |
| `meth-disclosure-ut` | CONDITIONAL | REQUIRED_DISCLOSURE: Utah Code Ann. § 57-27-201(1) | § 57-27-201(1), § 57-1-37, § 57-1-1(8)(c), § 57-27-201(2)(b) | Conditional on actual knowledge |
| `casualty-termination-ut` | CONDITIONAL | SERVES_LANDLORD | § 57-22-6(4)(c), § 57-22-6(4)(a)(i) | Yes (standing GA rule) |
| `tenant-repair-agreement-ut` | CONDITIONAL | SERVES_LANDLORD | § 57-22-3(4) | Yes (rule 54) |
| `smoke-drift-waiver-ut` | CONDITIONAL | SERVES_LANDLORD | § 78B-6a-405(1), § 78B-6a-101(10)(b)(x), § 78B-6a-101(14) | Yes (Taylor) |
| `collection-fee-ut` | CONDITIONAL | CONSTRAINED_TERM | SERVES_LANDLORD | § 12-1-11(2), § 12-1-11 | Yes (Taylor) |
| `notice-service-fee-ut` | CONDITIONAL | CONSTRAINED_TERM | SERVES_LANDLORD | § 57-22-4(5)(b), § 57-22-4(8), § 78B-6-811(5)(a), § 78B-6-802(1)(c) | Yes (§6.2) |

### 3.3 New UT education rows (56)
| Row | topic_key | rule_type | Rests on |
|---|---|---|---|
| `edu-fit-premises-duties-ut` | landlord-maintenance | RECOMMENDED | § 57-22-2(5), § 57-22-3(4) |
| `edu-renter-remedies-ut` | tenant-repair-remedies | RECOMMENDED | § 57-22-6, § 57-22-7(2)(b) |
| `edu-late-fee-cap-ut` | late-fee | CONSTRAINED | § 57-22-4(5)(a), § 57-22-4(9) |
| `edu-fees-in-lease-ut` | required-fees | CONSTRAINED | § 57-22-4(5)(b) |
| `edu-pre-application-disclosure-ut` | application-fees | REQUIRED | § 57-22-4(3)(a)(i), § 57-22-4(4) |
| `edu-screening-criteria-ut` | tenant-screening | REQUIRED | § 57-22-4(3)(a)(iv) |
| `edu-move-in-condition-ut` | condition-inspection | REQUIRED | § 57-22-4(6) |
| `edu-lease-copy-rules-ut` | lease-copy | REQUIRED | § 57-22-4(7)(b) |
| `edu-security-deposit-rules-ut` | security-deposit-penalty | RECOMMENDED | § 57-17-1, § 57-17-5(1), § 57-17-3(5) |
| `edu-no-security-deposit-cap-ut` | security-deposit-cap | RECOMMENDED | CONFIRMED ABSENT |
| `edu-no-deposit-interest-ut` | security-deposit-interest | RECOMMENDED | CONFIRMED ABSENT |
| `edu-sale-deposit-successor-ut` | security-deposit-on-sale | RECOMMENDED | § 57-17-4. |
| `edu-notices-to-quit-ut` | termination-notice | RECOMMENDED | § 78B-6-802(1), § 78B-6-805 |
| `edu-eviction-process-ut` | eviction-process | RECOMMENDED | § 78B-6-807, § 78B-5-826., § 39A-6-113 |
| `edu-post-eviction-property-ut` | post-eviction-property | RECOMMENDED | § 78B-6-812(4), § 78B-6-816 |
| `edu-self-help-eviction-ut` | self-help-eviction | PROHIBITED | § 78B-6-814 |
| `edu-abandonment-rent-liability-ut` | abandonment-and-mitigation | RECOMMENDED | § 78B-6-816(1) |
| `edu-eviction-expungement-ut` | eviction-record-sealing | RECOMMENDED | § 78B-6-850, § 78B-6-853 |
| `edu-unauthorized-occupant-removal-ut` | unauthorized-occupant-removal | RECOMMENDED | § 78B-6-817 |
| `edu-nuisance-eviction-ut` | nuisance | RECOMMENDED | § 78B-6a-101(10), § 78B-6a-102, § 78B-6-802(1)(f) |
| `edu-expedited-criminal-eviction-ut` | expedited-criminal-eviction | RECOMMENDED | § 78B-6-810(3), § 78B-6-802(1)(g) |
| `edu-dv-termination-ut` | dv-lease-termination | RECOMMENDED | § 57-22-5.1(1) |
| `edu-crime-victim-locks-ut` | dv-lockchange | RECOMMENDED | § 57-22-5.1(1)(b), § 57-22-5.1(2) |
| `edu-police-emergency-calls-ut` | emergency-assistance-right | PROHIBITED | § 57-22-5.1(10) |
| `edu-no-retaliation-statute-ut` | retaliation | RECOMMENDED | CONFIRMED ABSENT |
| `edu-fair-housing-ut` | fair-housing | RECOMMENDED | § 57-21-2 |
| `edu-source-of-income-ut` | source-of-income | PROHIBITED | § 57-21-2(25) |
| `edu-service-animal-law-ut` | service-animal-misrepresentation | RECOMMENDED | § 26B-6-801(4) |
| `edu-service-animal-denial-penalty-ut` | service-animal-denial-penalty | PROHIBITED | § 26B-6-805(1), § 26B-6-802(4) |
| `edu-servicemember-rights-ut` | servicemember-rights | RECOMMENDED | § 39A-6-112 |
| `edu-rent-control-preemption-ut` | rent-control | RECOMMENDED | § 57-20-1 |
| `edu-rental-licensing-ut` | landlord-registration | RECOMMENDED | § 10-8-85.5, § 17-79-611 |
| `edu-no-rent-increase-notice-ut` | rent-increase-notice | RECOMMENDED | CONFIRMED ABSENT |
| `edu-landlord-lien-ut` | landlord-lien | RECOMMENDED | § 38-3-1, § 38-3-3, § 38-3-5 |
| `edu-exemption-waiver-void-ut` | homestead-waiver | PROHIBITED | § 78B-5-509. |
| `edu-stigmatized-property-ut` | stigmatized-property | RECOMMENDED | § 57-1-1(8), § 57-1-37(1) |
| `edu-no-radon-disclosure-ut` | radon-disclosure | RECOMMENDED | CONFIRMED ABSENT |
| `edu-no-mold-disclosure-ut` | mold-disclosure | RECOMMENDED | CONFIRMED ABSENT |
| `edu-no-bed-bug-rule-ut` | bed-bug-disclosure | RECOMMENDED | CONFIRMED ABSENT |
| `edu-no-flood-disclosure-ut` | flood-disclosure | RECOMMENDED | CONFIRMED ABSENT |
| `edu-alarms-ut` | alarm-duties | RECOMMENDED | CONFIRMED ABSENT |
| `edu-towing-ut` | towing | RECOMMENDED | § 72-9-603 |
| `edu-firearm-vehicle-storage-ut` | firearms | PROHIBITED | § 34-45-102 |
| `edu-flag-display-ut` | tenant-display-rights | PROHIBITED | § 57-24-101 |
| `edu-hoa-rental-rules-ut` | hoa | RECOMMENDED | § 57-8a-209, § 57-8-10.1 |
| `edu-foreclosure-tenants-ut` | foreclosure | RECOMMENDED | § 57-1-25(1)(c) |
| `edu-no-tenant-death-rule-ut` | tenant-death | RECOMMENDED | CONFIRMED ABSENT |
| `edu-no-ev-charging-right-ut` | ev-charging | RECOMMENDED | CONFIRMED ABSENT |
| `edu-no-cannabis-housing-protection-ut` | cannabis | RECOMMENDED | CONFIRMED ABSENT |
| `edu-municipal-water-owner-liability-ut` | municipal-utility-lien | RECOMMENDED | § 10-7-10.5 |
| `edu-rent-sales-tax-ut` | rent-tax | RECOMMENDED | § 59-12-102 |
| `edu-interest-on-unpaid-amounts-ut` | unpaid-damages-interest | RECOMMENDED | § 15-1-1 |
| `edu-attorney-fees-ut` | attorney-fees | RECOMMENDED | § 78B-6-811(5)(a) |
| `edu-electronic-notices-ut` | notice-delivery-methods | RECOMMENDED | § 78B-6-805 |
| `edu-no-just-cause-ut` | for-cause-eviction | RECOMMENDED | CONFIRMED ABSENT |
| `edu-landlord-tenant-scope-ut` | scope | RECOMMENDED | § 57-22-2(5) |

## 4. Layout and placement (rule 40)

**Code-wide typography search** (search 47: bold, boldface, underline, capital letters, point type within 200 characters of lease, rental agreement, renter or tenant): 12 hits in 11 sections: election (20A-7), alcohol (§ 32B-7-202), lobbying (§ 36-11-305.5), public safety (§ 53-7-315), a consumer section (§ 13-50-301) and § 57-1-25 (the trustee's 14-point tenant notice). **No bold, underline, capitals or type-size rule for any residential lease term.** 'Conspicuous' near lease (search 46) finds only posting methods (§§ 57-17-3(4), 78B-6-805) and the mobile home act. 'Separate document' near lease or tenant (search 48): 3 hits, none a lease rule. **Prescribed forms and wording a landlord meets outside the lease** (search 49):

| Rule | Requirement | Where it lives |
|---|---|---|
| § 57-17-2 | Nonrefundable part of a deposit 'so stated in writing' when the deposit is taken | `nonrefundable-deposit-notice-ut` (builder: if a deposit is taken before signing, a written statement then) |
| § 57-22-4(7)(a) | Owner or manager name, address and telephone in writing at or before the term starts | `landlord-disclosure-ut` |
| § 57-27-201(1) | Meth contamination disclosed 'in a real property lease' | `meth-disclosure-ut` |
| § 57-22-4(3) | Written pre-application disclosure before any fee | `edu-pre-application-disclosure-ut` (builder: pre-application form) |
| § 78B-6-815(2)(a) | Declaration of abandonment with prescribed or substantially similar wording | `abandoned-property-ut` (builder: generate the declaration) |
| § 7-15-2(2) | Dishonored-check notice 'substantially' in the statutory form | `returned-payments-ut` (builder: generate the notice) |
| § 57-17-3(3)(b) | Tenant's Notice to Provide Deposit Disposition (the tenant's form) | `edu-security-deposit-rules-ut` |
| § 57-1-25(3)(b) | Trustee's 'Notice to Tenant' in at least 14-point font | `edu-foreclosure-tenants-ut` (the trustee's duty, not the landlord's) |
| § 78B-6a-405(1) | Smoke-drift waiver: two statutory elements in the signed agreement | `smoke-drift-waiver-ut` |
| § 57-22-3(4) | Duty allocation only by 'explicit written agreement signed by the parties' | `tenant-repair-agreement-ut`, `landscaping-irrigation`, `snow-removal` |
| § 12-1-11(2)(a)(iv) | Collection fee only if the written agreement creating the debt provides for it | `collection-fee-ut` |

**Omission sanctions that forfeit money:**
- Deposit not returned within 5 business days after the tenant's statutory notice: the full deposit, full prepaid rent and a $100 penalty, plus fees for bad faith (§ 57-17-5).
- Possession not delivered on the agreed date: rent abates or the renter may terminate (§ 57-22-4.1).
- Deficient condition not addressed within the corrective period: rent abatement ending the lease, or repair and deduct up to two months' rent (§ 57-22-6).
- Meth nondisclosure: damages, costs and fees (§ 57-27-201(3)).
- § 57-22-4(9) bars a renter from suing or withholding performance over the owner's failures under § 57-22-4(2)-(7) (entry notice, pre-application disclosure, refund, fee limits, condition record, owner disclosure). The duties still bind.

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged UT.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| Tobacco smoke-drift waiver | § 78B-6a-405(1) | **Offered** (`smoke-drift-waiver-ut`, CONDITIONAL); Taylor decided (6.2) |
| Collection fee | § 12-1-11(2) | **Offered** (`collection-fee-ut`, CONDITIONAL); Taylor decided (6.2) |
| Notice-service fee | § 57-22-4(5)(b), (8) | **Offered** (`notice-service-fee-ut`, CONDITIONAL); see 6.2 |
| Landlord or tenant termination after a casualty | contract; § 57-22-6(4)(c) preserved | **Offered** (`casualty-termination-ut`, CONDITIONAL); standing GA decision |
| Tenant-performed statutory duties | § 57-22-3(4) | **Offered** (`tenant-repair-agreement-ut`, CONDITIONAL). Decided by Claude: the statute expressly allows it and the library already offers the analogue in 8 states |
| Manager not authorized for notices | § 57-22-2(1) 'unless ... specifies otherwise in writing in the rental agreement' | **Offered** as the bracketed sentences in `landlord-disclosure-ut` |
| Entry notice set by the lease | § 57-22-4(2) 'except as otherwise provided in the rental agreement' | **Used:** `landlords-access` sets 24 hours with an emergency exception; a shorter period was not offered (the library default across states) |
| Stipulated holdover rate | Utah trebles detainer damages (§ 78B-6-811(2)-(3)) | **Not offered.** The standing GA rule offers a rate only 'where no statutory measure exists'. A contract rate would also be swept into the trebled damages ((2)(d) 'amounts due under the contract'). Decided by Claude |
| Waiver of exemptions | § 78B-5-509 (pre-levy waiver for an unsecured creditor unenforceable) | **Barred;** `edu-exemption-waiver-void-ut` |
| Contractual lien or security interest in tenant property | statutory lessor's lien exists (38-3), enforced by attachment | **Not offered:** the statutory lien needs no lease text, and a self-help seizure-and-sale lien (as in the Cullimore form) would sit badly with § 78B-6-814 and § 78B-5-509. Decided by Claude |
| Criminal-activity / crime-free clause | § 78B-6-802(1)(e)-(g), (2); § 78B-6-810(3) | **Not offered:** Utah already gives a 3-day no-cure notice for criminal acts, nuisance and unlawful business, and `residential-use-only` bars illegal use by anyone. A contract cannot add statutory no-cure grounds. Decided by Claude |
| Interest rate on unpaid amounts | § 15-1-1 (any agreed rate; 10% default) | **Not offered:** the 10% legal rate applies without lease text; `edu-interest-on-unpaid-amounts-ut`. Decided by Claude |
| Waiver of the eviction notices | none | **Not offered:** no Utah statute lets a lease waive or shorten the § 78B-6-802 notices |
| Electronic service of eviction notices | § 78B-6-805 (no email method); § 46-4-103 | **Not offered:** whether email is an 'equivalent means' is unsettled; `edu-electronic-notices-ut` |

### 6.2 Questions asked of Taylor (rule 76), 2026-09-29
1. **Smoke-drift waiver clause** (§ 78B-6a-405(1)). Recommendation: offer as optional. **Taylor: offer as optional.**
2. **Collection-fee clause** (§ 12-1-11). Recommendation: offer as optional. **Taylor: offer as optional.**
3. **Notice-service fee.** Claude first recommended education only, citing a penalty risk and the treble-damages sweep. Taylor asked why, then what a notice-service fee is, and whether the Cullimore form was wrong to include one. Claude's answers:
   - It explained what the fee is with a concrete example.
   - It acknowledged that it had presented an unread general doctrine (penalty) as a real risk.
   - The statute supports the fee (§ 57-22-4(5)(b), (8)), and Claude found no Utah law limiting it, so under rule 54 it should be offered.
   - It told Taylor it would offer the clause as optional, with the guardrail that the fee alone is not an eviction ground (matching the library's late-fee default), unless he objected.

   **No objection before handoff; offered** (`notice-service-fee-ut`). Lesson recorded in Proposed SOP changes.

## 7. Open items (none blocking)

| Item | Boundary / what would close it |
|---|---|
| Case law | Penalty doctrine for fees (notice-service, returned-payment above $20, early termination); waiver by accepting rent; exculpatory clauses in residential leases; utility shutoff as 'willful exclusion'; unconscionability; whether a court enforces a § 57-22-3(4) allocation of a core habitability duty; whether 'actual cost' is an 'amount agreed' under § 57-22-4(5)(b)(i). Not read. |
| Administrative rules | Utah Admin. Code R608 (fair housing, including assistance animals and source of income) not read. |
| Building and fire codes | Title 15A amendments on smoke and CO alarms not read (`edu-alarms-ut`). |
| Not read beyond context | §§ 72-9-603 (towing), 10-1-203.5 (good landlord), 17-79-611 and county licensing, 57-8-10.1 and 57-8-53 (condominium rental and rent-to-association rules), 57-8a-310 operative text, 63L-13-204 (foreign entities), 54-9-103 (search 16 hit), Title 67 Chapter 4a (unclaimed property: deposit refunds), Title 38 Chapter 1a (tenant-contracted work), statute of frauds (Title 25). |
| Court rules | Pending civil-rule amendments not screened; Judicial Council eviction forms (§ 78B-6-812(6)) not read. |
| Federal (rule 21) | SCRA (50 U.S.C. § 3955); PTFA; CARES Act (15 U.S.C. § 9058); FHA; lead (42 U.S.C. § 4852d, 24 CFR Part 35, 40 CFR Part 745): cited, not read. |
| Local ordinances | Salt Lake City, Provo, Ogden, West Valley City and others (rental licensing, good landlord programs, short-term rentals): flagged, not resolved (rule 3). |
| Mobile homes | Mobile Home Park Residency Act (57-16) deprioritized; § 78B-6-802(3) routes mobile-home-owner detainer there. |

## 8. Integrity checks on the delta
- **Format:** 122 rows plus header; 17 columns, same header as the master; CRLF throughout (no bare LF). The master's own round trip through the csv module was byte-identical before building, so unchanged fields are byte-identical.
- **Ids and links:** no duplicate ids; no new id collides with a master id; no dangling `supersedes` (`security-deposit-return-ut` → `security-deposit-return`, `returned-payments-ut` → `returned-payments`, both existing). No display collision: no UT row supersedes another UT-tagged row.
- **Topics:** no two UT lease clauses share a `topic_key`.
- **Required fields:** every UT row has a `verification_status` (all VERIFIED) and `effective_from` / `last_checked` 2026-09-29. Every UT lease clause has a `lease_clause_basis`; no education row has one.
- **Tagged rows:** for each of the 54 tagged rows, only `states` (+UT), `notes` (the pre-existing notes are an exact prefix, then ' | UT: ...') and `last_checked` changed.
- **Counts:** UT 0 → 122 active (66 lease clauses, 56 education). Every other state's active count is unchanged: AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 108, SC 111, SD 99, TN 132, TX 137, VA 135, WY 107.
- **Variables (rule 60):** only names already used in VERIFIED rows (appliance_list, late_fee_amount, late_fee_grace_days, m2m_notice_days, monthly_rent, occupant_names, pet_deposit, pet_rent_amount, security_deposit, state, tenant_insurance_minimum, tenant_names); no bracket next to a variable. Hand-filled items use brackets. Claude Code: confirm `m2m_notice_days` resolves in `clauseVariables.js`.
- **Citation screen (rules 21-22):**
  - Every '§' in UT-authored text is prefixed 'Utah Code Ann.' or is federal (0 bare).
  - Log references are written 'UT log sN'.
  - No other state's citation prefix appears in any UT segment.
  - All 104 Utah section numbers cited were checked against the loaded current code. All exist except the two cited deliberately as missing: § 78B-6-1101 (the pre-2026 number the Cullimore lease still uses) and § 78B-6-1107 (the stale cross-reference in § 78B-6-802(1)(f)).
- **Statute walk diff (rule 29, programmatic, short forms and ranges expanded):**
  - Every section of Chapters 57-17, 57-20, 57-22 and 57-24, of 78B-6 Parts 8 and 8a, and of 57-21 and 57-27, is cited by at least one UT row, except these, uncited by design:
    - § 57-22-1 (short title);
    - § 78B-6-804 (tenant against undertenant), § 78B-6-806 (necessary defendants; answered in §18) and § 78B-6-809 (forcible-entry proof);
    - §§ 57-27-101, -102 (title, definitions), -202 (real estate professionals) and -203 (government decontamination fees);
    - §§ 57-21-1, -2.7, -6, -6.1, -8 to -10, -13 and -14 (short title, nonseverability, lending and brokerage, recorded covenants, agency procedure; summarized in the source file).
  - One level down, § 57-22-4 (1)-(9), § 57-22-5.1 (1)-(10), § 57-22-6 (1)-(7), § 78B-6-802 (1)(a)-(i) and (2)-(6), § 78B-6-815 (1)-(2) and § 78B-6-816 (1)-(11) are each cited by subsection.

## 9. Propagation notes (rule 62)
**None owed.** No shared row's text changed. Every change to an existing row is an added `UT` tag with a `UT:` note, a states-only change under §5a.1.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Stale cross-reference in Utah's own code.** § 78B-6-802(1)(f), amended by HB 591 (2026), still defines a nuisance ground as 'private nuisance as defined in Section 78B-6-1107'. That section no longer exists; the definition is now § 78B-6a-101(10). Worth a legal-watch flag, since a revisor correction or a 2027 fix will touch the eviction statute.
2. **Defined-term mismatch.** § 78B-6a-101(14) defines 'Tobacco or illegal substance nuisance', but §§ 78B-6a-101(10)(b)(x) and -405 use 'tobacco nuisance'. `smoke-drift-waiver-ut` uses the operative section's words.
3. **Consolidation candidate.** `agent-capacity-designation-wy` and the bracketed sentences in `landlord-disclosure-ut` rest on identical statutory text (W.S. 1-21-1201(a)(i); Utah Code Ann. § 57-22-2(1)). A state-neutral shared row could serve both. Not done, so no Wyoming row changed (rule 62).
4. **State-specific basis field blocks tagging.** `nonrefundable-deposit-notice-wy` fits Utah's § 57-17-2 as written, but its `lease_clause_basis` names only the Wyoming statute. For Claude Code: should shared-capable rows carry multi-state bases?
5. **'Actual cost' charges.** Utah bars a fee above 'the amount agreed' (§ 57-22-4(5)(b)(i)). `keys`, `parking-vehicle-rules` and `smoking-policy` charge actual cost rather than a figure; whether that is an agreed amount is unsettled. Other states with fee-in-lease rules (NV `required-fees-nv`) may raise the same question.
6. **Late-fee cap shape.** Utah's cap is the greater of a percentage and a flat amount, the first 'greater of' cap in the library. The builder's cap validator needs that form (§14).
7. **The Cullimore form** (Utah's leading landlord-side form) still cites the pre-2026 smoke-waiver section. Landlords copying it will cite a renumbered section; informational only.
8. **Generic-coverage check exception:** `extended-absence-notice-ks` (§2.2), for Claude Code's `check-*` scripts.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-UT-delta.csv` | 122 rows (54 tagged, 68 new); UT 122 active, all VERIFIED; integrity checks pass (§8) |
| `lease-clause-decision-log-UT.md` | This file |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| 1. Fit Premises Act | **Confirmed and more:** duties (§§ 57-22-3, -4(1), -5); notice-and-remedy process with 3/10-day corrective periods, rent abatement or repair and deduct up to two months' rent, 24-hour start on dangerous conditions (§ 57-22-6). **The lease may shift any duty by explicit signed agreement** (§ 57-22-3(4)) → `tenant-repair-agreement-ut`. Also in the Act: late-fee cap, fees-in-lease rule, pre-application disclosure and refund, condition record, owner disclosure, possession-delay remedy, DV termination and locks, and police-call protection. |
| 2. Deposits | **Confirmed:** 30 days after the renter vacates and returns possession; itemized notice; electronic delivery (2025); nonrefundable part stated in writing when taken; penalty only after the tenant's statutory notice and 5 business days (full deposit plus prepaid rent plus $100; fees for bad faith); no cap, no interest. |
| 3. Eviction | **Confirmed**, by tenancy type (rule 37): fixed term, none; periodic, 15 calendar days; at will, 5 calendar days; nonpayment, 3 business days; breach, 3 calendar days to cure; sublet, waste, unlawful business, nuisance or crime, 3 calendar days, no cure. Treble damages; mandatory prevailing-party fees; possession bond; 3-day restitution; 10-day appeal. **Lease-controls wording (rule 50):** none in Part 8. It sits in the Fit Premises Act (entry notice; agent notices; renter's notice service). |
| 4. Fair Housing Act | **Confirmed:** federal classes plus source of income, sexual orientation and gender identity; small-owner and owner-occupied exemptions; single-sex shared housing (2026); penalties. Assistance animals: no extra fee or deposit, and **misrepresenting a service or support animal is a class C misdemeanor reaching housing** (§ 26B-6-805(2)). |
| 5. Currency | **Screened (§1.2):** 2026 acts HB 591, HB 404, SB 149 (effective 2026-09-01), SB 218 and HB 90 (effective 2027-01-01); 2025 HB 480, SB 55; 2024 acts. No 2026 special session. |
| 6. Local preemption | **Statewide:** rent and fee control barred without legislative approval (§ 57-20-1); local rules inconsistent with the Fit Premises Act barred (§ 57-22-7); fair housing preempted (§ 57-21-2.5); municipal rental licensing limited (§ 10-8-85.5). City ordinances flagged, not resolved. |
| Not in the leads | Late-fee cap; pre-application disclosure; lessor's lien (38-3); 2026 nuisance chapter and smoke-drift waiver; trespasser removal (2025) and long-term-guest trespass (2024); eviction expungement; state-military eviction stay; collection-fee statute; exemption waivers void; dishonored-check charges; firearms in vehicles; HOA rental limits; stigmatized property; stale cross-reference. |

## 13. Independent check
Before handoff, a separate agent that had not seen the drafting checked about 470 claims in the 122 rows against the saved texts. About 400 were confirmed and about 30 could not be verified from the saved text (mostly sections read in context and effective dates, since saved; §1.1). All 6 wrong and about 32 imprecise items were fixed. The ones that changed substance:
- **`abandoned-property-ut`:**
  - The clause now gives an evicted tenant the statutory access, within 5 business days and without paying costs first, to clothing, ID, financial, benefits and medical items (§ 78B-6-812(4)(c)).
  - It says removal after an eviction is by the sheriff or constable (who may delegate to the landlord).
  - A pet goes to the tenant if present.
  - It adds the tenant-present sale limits (§ 78B-6-816(10)).
  - 'Medical provider' is now 'verified medical provider'.
- **`edu-crime-victim-locks-ut`:** now states the current exclusion of four offenses from 'crime victim' until 2027-01-01. The note had wrongly said the summary was right under both versions.
- **Search evidence.** Three absence claims cited searches not in the saved battery file. The searches had been run (battery 2 and follow-ups) but not saved, so they are now saved. One claim cited a search that was never run (deposit interest) and was rewritten. Six 'whole-code search' phrases for searches not run were rewritten to state what was actually read.
- **Wording:**
  - service-order sequencing for notices (§§ 57-17-3(4), 78B-6-805);
  - DV termination's 30-day exception and the ex parte order rule;
  - the long-term-guest definition;
  - the three conditions for landlord smoke-drift liability;
  - the fair housing single-sex and exemption limits;
  - eviction-process qualifiers (forfeiture grounds, restitution exceptions, 60-day trial only while the tenant stays, and the abandonment exception to 'only a court');
  - expungement's satisfaction filing;
  - gambling in the nuisance list;
  - the service-animal definitions;
  - a doubled citation prefix in 31 notes.

## 14. Product flags
- **Late-fee validator:** `{{late_fee_amount}}` ≤ max(10% × `{{monthly_rent}}`, $75) (§ 57-22-4(5)(a)).
- **Fees-in-lease check:** every fee the landlord will charge must appear in the lease with an amount (§ 57-22-4(5)(b)); on month-to-month renewals, a new fee needs 15 days' notice.
- **Pre-application packet:** estimate of rent and fixed fees, use-based fee types, availability date, screening criteria and refund process, produced before any application fee (§ 57-22-4(3)).
- **Condition record:** offer a move-in condition form or inventory attachment (§ 57-22-4(6)).
- **Notice generation:** Utah statutory notices by tenancy type and ground (§ 78B-6-802); declaration of abandonment (§ 78B-6-815(2)(a)); dishonored-check notice (§ 7-15-2); service by the § 78B-6-805 methods in order. If the notice-service fee is selected, exclude it from the amount demanded in a pay-or-quit notice (the clause says the fee alone is not an eviction ground).
- **Property attributes:** building with more than two units (garbage receptacles); single-family detached (firearms-in-vehicles exemption; towing signage exemption); other units allow smoking (`smoke-drift-waiver-ut`); owner holds fewer than four single-family rentals and uses no broker (fair housing exemption); HOA or condominium.
- **Dates:** § 57-22-5.1 changes on 2027-01-01. The builder's legal-watch should swap the lock-change summary then.

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** 'Utah Residential Rental Agreement — Single Family Home', footer '© The Law Offices of Kirk A. Cullimore, LLC 5/2022', 11 pages. It comes with an Animal (Pet) Agreement, a Pest Addendum, a No-Smoking Policy Lease Addendum (© Cullimore 03/2021), the manager's General Addendum & Rules & Regulations (rev. 12.2022), a Maintenance Policy (rev. 10.14.2021) and a Required Insurance Addendum: 29 PDF pages in all.

**Where from:** posted by Property Solutions of Utah, PLLC (d/b/a Utah Property Solutions), a Utah-licensed property management company, at `utahpropertysolutions.com/files/residential-rental-agreement-2023.pdf`.

**Why it qualifies:** a Utah landlord-attorney's form, used by a real Utah property manager (rule 33: 'a property manager's'). It is not a generic multi-state template: it is Utah-specific throughout (the Fit Premises Act, Utah Code citations). The Kirk A. Cullimore firm is the leading Utah landlord-side eviction practice. The Utah Apartment Association and Utah REALTORS forms are members-only and were not bought (rule 33). Not a relabelled template: the addenda carry the manager's own terms.

**Method:** text extracted in the browser with pdf.js; read in full for the 11-page agreement, with the addenda read by heading and opening text; mapped by topic; no text reproduced. The lease is a lead only; every point below rests on primary text read for this pass.

### 15.1 Provision map

| Cullimore lease provision (by topic) | UT library coverage | Result |
|---|---|---|
| Parties, occupants, guests (3 consecutive days / 5 per quarter) | `permitted-occupants`, `guest-policy`, `guest-policy-day-limit` | Covered (library limit 14 days; no statute) |
| Fee table: late fee, lease initiation, service of notice, eviction turnover, month-to-month, inspection fees | `late-fee`, `notice-service-fee-ut`, `edu-fees-in-lease-ut`, `edu-late-fee-cap-ut` | **Confirms § 57-22-4(5)(b):** fees are listed in the lease so they can be charged. Led to the notice-service fee question (§6.2). Month-to-month and turnover fees not offered |
| ¶1 Term; possession delay up to 7 days, sole remedy termination | `possession-delay-ca` | **Divergence:** § 57-22-4.1 gives abatement or termination; the library follows the statute |
| ¶1 Month-to-month fee and rent change on 30 days' notice | `periodic-tenancy-notice-ut`, `edu-no-rent-increase-notice-ut` | Covered (new fees need 15 days, § 57-22-4(5)(b)(ii)) |
| ¶2 Deposit; refund conditions; 'no damages merely because Owner fails to provide the statement' | `security-deposit-use`, `security-deposit-return-ut`, `edu-security-deposit-rules-ut` | **Divergence:** statute sets the 30-day duty and the notice-triggered penalty; the library follows the statute |
| ¶3 Tenant 60 days' notice; owner 15 days (m-t-m) | `periodic-tenancy-notice-ut` | Covered (tenant period landlord-entered; owner 15 calendar days) |
| ¶4 Subordination | none | Not copied (library decision, AZ session: skip subordination boilerplate) |
| ¶5 Credit checks during and after tenancy | `edu-screening-criteria-ut` | Contract; no statute |
| ¶6 Government action / condemnation | `casualty-termination-ut` | Partly covered |
| ¶7 Notices to owner under the Fit Premises Act at a stated address | `notices`, `landlord-disclosure-ut` | Covered; the lease designates an address (§ 57-22-6(2)(b)(v)) |
| ¶8 All notices by email, including eviction | `notices`, `edu-electronic-notices-ut` | **Not copied:** § 78B-6-805 lists no email method |
| ¶9 No release for job loss, school, etc. | `early-termination-ks` | Library offers a fee-based option |
| ¶10 Rules; HOA; fines as additional rent; firearms restricted in common areas | `hoa-compliance`, `edu-firearm-vehicle-storage-ut` | Covered; firearms-in-vehicles limit noted (§ 34-45-103) |
| ¶11 Parking and towing | `parking-vehicle-rules`, `edu-towing-ut` | Covered |
| ¶12 Condition; as-is; exceptions within 48 hours | `existing-condition`, `edu-move-in-condition-ut` | Covered (§ 57-22-4(6) options) |
| ¶13 Repairs in writing; three estimates before repair-and-deduct | `landlord-maintenance`, `edu-renter-remedies-ut` | **Divergence:** the estimates condition is not in § 57-22-6; not copied |
| ¶14 Entry with or without notice | `landlords-access` | **Divergence (rule 50):** the lease may override the 24-hour default; the library keeps 24 hours |
| ¶15 Mold indemnity | none | Not copied (exculpation; rule 52) |
| ¶16 Military clause | `edu-servicemember-rights-ut` | Covered (federal SCRA; state stay) |
| ¶17 Disability accommodation requests | `assistance-animal-accommodation`, `edu-fair-housing-ut` | Covered |
| ¶18 Limited liability (gross negligence only) | ks-oh-ca variants | Not copied (rule 52) |
| ¶19 24% interest; 40% collection fee; jury waiver; prevailing fees | `edu-interest-on-unpaid-amounts-ut`, `collection-fee-ut`, `default-by-tenant` | Collection fee offered within § 12-1-11 limits; interest and jury waiver not offered (§6) |
| ¶20 Payments applied to fees first; no cash | `application-of-payments`, `acceptable-payment-methods` | **Divergence:** library default is rent first; payment-method list covers 'no cash' |
| ¶21 Early vacate; acceleration | `early-termination-ks`, `edu-abandonment-rent-liability-ut` | Covered (§ 78B-6-816(1)) |
| ¶23-24 Default; illegal acts without cure | `default-by-tenant`, `edu-notices-to-quit-ut` | Covered (statutory no-cure grounds) |
| ¶27 Contractual security interest; private sale | `edu-landlord-lien-ut` | **Not copied** (§6) |
| ¶28 Abandonment definition | `abandoned-property-ut` | Confirms § 78B-6-815(1) |
| ¶29 Animals; $50/day unauthorized-animal charge; assistance-animal prior approval | `pet-policy`, `assistance-animal-accommodation` | Charge not copied |
| ¶30 Tax and fee pass-through | none | Contract; not offered (fees-in-lease rule applies) |
| ¶32 Pests | none | No statute (`edu-no-bed-bug-rule-ut`) |
| ¶33 Termination on sale with 30 days' notice | none | Not offered (rule 54 list: no statute; would undercut fixed terms) |
| ¶34 Smoking; **waiver of the smoke-drift nuisance claim**, citing 'Utah Code 78B-6-1101(3)' | `smoking-policy`, `smoke-drift-waiver-ut` | **Confirms the opt-in** (§ 78B-6a-405(1)); citation outdated since 2026 |
| ¶35 Insurance naming owner | `tenants-property-insurance-ks-oh-ca` | Covered |
| ¶37-38 Tort arbitration; class-action waiver | none | Not copied |
| Addenda: pet, pest, smoking, rules (smoke/CO detector batteries), maintenance, insurance, lead | `pet-policy`, `smoking-policy`, `lead-based-paint`, `edu-alarms-ut` | Covered or contract |

### 15.2 What it produced
- **(a) Missing required clause:** none.
- **(b) Corrections to UT rows:** none; the form confirmed the abandonment presumption and the fee-in-lease practice.
- **(c) New UT rows prompted:** `smoke-drift-waiver-ut` (confirmed), `notice-service-fee-ut` (question to Taylor), `collection-fee-ut` (the form's 40% collection fee led to § 12-1-11).
- **(d) Divergences recorded:** possession-delay sole remedy; deposit-statement disclaimer; fees-first payments; entry without notice; three-estimate repair condition; email eviction notices; contractual lien.
- **(e) Confirmed absences:** none new.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the AZ §18.1, AL §16 and PA §16 maps, re-run against the UT library, plus Utah-specific scenarios (smoke drift, trespasser removal, long-term guests, HOA rental rules, nuisance abatement, possession bond, treble damages, expungement, good landlord programs, firearms in cars, collection agencies). Where no row answered, the corpus was searched (§17) and hits were read in context. Claude generated the scenarios; Taylor's experience is Colorado-only (rule 2).

**Result:** 71 scenarios, counted by script: 54 covered by rows from the statute walk, 11 gaps that produced row content, 3 not located with no row, 3 out of scope.

| Phase | Scenario | UT coverage | Result |
|---|---|---|---|
| Before the lease | Applicant pays an application fee or holding deposit, then the lease terms differ | edu-pre-application-disclosure-ut | Covered: § 57-22-4(3)-(4) |
| Before the lease | Screening criteria and questions | edu-screening-criteria-ut, edu-fair-housing-ut | Covered |
| Before the lease | Voucher holder applies | edu-source-of-income-ut | Covered: statewide protected class |
| Before the lease | Applicant has an old eviction that was expunged | edu-screening-criteria-ut, edu-eviction-expungement-ut | Covered |
| Before the lease | Applicant lied on the application | rental-application-accuracy, default-by-tenant | Covered |
| Before the lease | Required disclosures at signing | landlord-disclosure-ut, lead-based-paint, meth-disclosure-ut, nonrefundable-deposit-notice-ut | Covered |
| Before the lease | Unit had a meth lab, now cleaned | meth-disclosure-ut, edu-stigmatized-property-ut | Covered |
| Before the lease | Someone died in the unit | edu-stigmatized-property-ut | Covered: § 57-1-37 |
| Before the lease | Radon, mold, flood, bed bugs | edu-no-radon-disclosure-ut, edu-no-mold-disclosure-ut, edu-no-flood-disclosure-ut, edu-no-bed-bug-rule-ut | Covered: confirmed absent |
| Before the lease | How big a deposit may be; pet deposit | edu-no-security-deposit-cap-ut, pet-policy, assistance-animal-accommodation | Covered |
| Before the lease | Part of the deposit is nonrefundable | nonrefundable-deposit-notice-ut | Covered |
| Before the lease | Move-in condition record | edu-move-in-condition-ut, existing-condition | Covered |
| Before the lease | Unit not ready on move-in day | possession-delay-ca | Covered: § 57-22-4.1 |
| Before the lease | Property is in an HOA that restricts rentals or wants the renter's screening file | hoa-compliance, edu-hoa-rental-rules-ut | Gap → row content: found by search 60 (§ 57-8a-209) |
| Before the lease | City requires a rental license or good landlord training | edu-rental-licensing-ut | Covered: local layer flagged |
| Before the lease | Landlord wants to charge fees not listed in the lease | edu-fees-in-lease-ut | Covered |
| Before the lease | Short vacation stay rather than a lease | — | Out of scope: short-term rentals |
| Before the lease | Mobile home lot rental | — | Out of scope: Title 57 Chapter 16 |
| Rent and money | Rent is late; how big a late fee | late-fee, edu-late-fee-cap-ut | Covered |
| Rent and money | Serving the 3-day pay-or-quit notice | edu-notices-to-quit-ut, notice-service-fee-ut | Covered |
| Rent and money | Landlord accepts late rent after the notice | late-fee | Covered: case law flagged |
| Rent and money | Check bounces | returned-payments-ut | Gap → row content: found by search 7 (§ 7-15-1) |
| Rent and money | Debt sent to a collection agency | collection-fee-ut | Gap → row content: found from the real lease and the corpus (§ 12-1-11) |
| Rent and money | Interest on unpaid amounts | edu-interest-on-unpaid-amounts-ut | Gap → row content: found outside the title (§ 15-1-1) |
| Rent and money | Raising rent on a month-to-month | edu-no-rent-increase-notice-ut, periodic-tenancy-notice-ut | Covered |
| Rent and money | City water bill left unpaid by tenant | edu-municipal-water-owner-liability-ut | Gap → row content: found by B2-32 (§ 10-7-10.5) |
| Rent and money | Collecting a judgment; tenant claims exemptions | edu-exemption-waiver-void-ut | Gap → row content: found by search 42 (§ 78B-5-509) |
| Rent and money | Seizing belongings for unpaid rent | edu-landlord-lien-ut, edu-self-help-eviction-ut | Gap → row content: Title 38 Chapter 3 found outside the landlord-tenant titles |
| Rent and money | Is rent subject to sales tax | edu-rent-sales-tax-ut | Covered |
| During the tenancy | Heat or hot water fails | landlord-maintenance, edu-fit-premises-duties-ut, edu-renter-remedies-ut | Covered |
| During the tenancy | Tenant repairs and deducts | edu-renter-remedies-ut | Covered: up to two months' rent |
| During the tenancy | Landlord wants the tenant to handle repairs | tenant-repair-agreement-ut | Covered: § 57-22-3(4) |
| During the tenancy | Smoke alarm dead | edu-alarms-ut | Covered: codes not read |
| During the tenancy | Routine entry; showing the unit | landlords-access, inspection-rights | Covered |
| During the tenancy | Tenant refuses entry for repairs | landlords-access | Covered: § 57-22-5(2)(c) |
| During the tenancy | Domestic violence victim wants new locks | edu-crime-victim-locks-ut, keys | Covered |
| During the tenancy | Tenant calls police repeatedly | edu-police-emergency-calls-ut | Covered |
| During the tenancy | Guest won't leave | guest-policy-day-limit, edu-unauthorized-occupant-removal-ut | Gap → row content: found by search 26 (§ 76-6-206.4) |
| During the tenancy | Squatter moves into a vacant unit | edu-unauthorized-occupant-removal-ut | Covered: § 78B-6-817 |
| During the tenancy | Tenant lists the unit on Airbnb | no-sublet-assign | Covered |
| During the tenancy | Drug dealing or gang activity in the unit | residential-use-only, edu-expedited-criminal-eviction-ut, edu-nuisance-eviction-ut | Covered |
| During the tenancy | Neighbor's smoke drifts into the unit | smoking-policy, smoke-drift-waiver-ut | Covered: § 78B-6a-405 |
| During the tenancy | Neighbors sue to abate a party house or drug house | edu-nuisance-eviction-ut | Covered: 2026 act |
| During the tenancy | Unapproved pet | pet-policy | Covered |
| During the tenancy | Service or emotional support animal; fake documentation | assistance-animal-accommodation, edu-service-animal-law-ut | Covered |
| During the tenancy | Disability modification request | no-alterations, edu-fair-housing-ut | Covered |
| During the tenancy | Tenant keeps a gun in the car in the lot | edu-firearm-vehicle-storage-ut | Gap → row content: found by search 34 (§ 34-45-103) |
| During the tenancy | Car abandoned or parked illegally | parking-vehicle-rules, edu-towing-ut | Gap → row content: found by search 27 (§ 72-9-603) |
| During the tenancy | Tenant flies a flag | common-area-use, edu-flag-display-ut | Covered |
| During the tenancy | Fire or storm damage | casualty-termination-ut | Covered |
| During the tenancy | Tenant wants an EV charger | edu-no-ev-charging-right-ut | Covered: confirmed absent |
| During the tenancy | Tenant hires a contractor (liens) | none | Not located: Title 38 Chapter 1a not read |
| During the tenancy | Tenant wants satellite or cable access | none | Not located: search 66 |
| Ending the tenancy | Tenant wants out early | early-termination-ks | Covered |
| Ending the tenancy | DV victim wants out | edu-dv-termination-ut | Covered |
| Ending the tenancy | Soldier gets orders or is on state duty | edu-servicemember-rights-ut | Gap → row content: found by search 18 (§ 39A-6-113) |
| Ending the tenancy | Month-to-month: how much notice | periodic-tenancy-notice-ut, edu-notices-to-quit-ut | Covered |
| Ending the tenancy | Tenant stays after the lease | holdover-ca, edu-notices-to-quit-ut | Covered |
| Ending the tenancy | Tenant disappears; belongings left | abandoned-property-ut, edu-abandonment-rent-liability-ut | Covered |
| Ending the tenancy | Sole tenant dies | edu-no-tenant-death-rule-ut | Covered: confirmed absent |
| Ending the tenancy | Eviction for nonpayment; bond; appeal | edu-eviction-process-ut | Covered |
| Ending the tenancy | Tenant property and pets at the lockout | edu-post-eviction-property-ut, abandoned-property-ut | Covered |
| Ending the tenancy | Eviction record afterward | edu-eviction-expungement-ut | Covered |
| Ending the tenancy | Landlord changes the locks or cuts utilities | edu-self-help-eviction-ut | Covered |
| Ending the tenancy | Deposit dispute; tenant sends the statutory demand | security-deposit-return-ut, edu-security-deposit-rules-ut | Covered |
| Ending the tenancy | Landlord wants to end a lease without a reason | edu-no-just-cause-ut | Covered |
| Ending the tenancy | Tenant files a fair housing complaint, then gets a nonrenewal | edu-no-retaliation-statute-ut, edu-fair-housing-ut | Covered |
| Owner changes | Owner sells the property | edu-sale-deposit-successor-ut | Covered |
| Owner changes | Lender forecloses; trustee's sale | edu-foreclosure-tenants-ut | Covered |
| Owner changes | Owner is a restricted foreign entity or buys through one | none | Not located: narrow rule noted in §18 (§ 63L-13-204) |
| Owner changes | Property on tribal trust land | — | Out of scope: not researched |

## 17. Outside-title search and proof of absence (gap-discovery source 4)

**Engines:** the whole Utah Code and Constitution loaded in the le.utah.gov page (§1.3), plus the Utah Rules of Civil Procedure screen (§1.1).
- **Battery 1:** 89 searches. **Battery 2:** 46 searches. **Follow-ups:** 12b, 12c, 15b, 22b. All saved in `battery_utcode_2026-09-29.tsv` with regex, hits, sections and the first sections hit.
- **Control:** 0 hits in both batteries.
- A probe is a screen, never a verdict (rule 19): every landlord-relevant hit was read in context, and the key sections section-open.

**What the outside-title search found** (each now in a row):
- Service and support animal rights and the misrepresentation crime (Title 26B).
- The dishonored-check charges (Title 7).
- The collection-fee statute (Title 12) and the legal interest rate (Title 15).
- The lessor's lien (Title 38).
- The state-military eviction stay (Title 39A).
- Electronic-transactions scope (Title 46).
- Long-term-guest criminal trespass (Title 76).
- Exemption waivers void and reciprocal attorney fees (Title 78B, Chapter 5).
- The 2026 nuisance chapter (78B-6a).
- Municipal rental licensing, good landlord programs and owner water-bill liability (Title 10).
- Firearms in vehicles (Title 34).
- Towing (Title 72).
- HOA rental limits (57-8a).
- Stigmatized property and the trustee's tenant notice (57-1).
- Sales tax on short-term rentals only (Title 59).

**Confirmed absent, each with its own row** (13):
- security deposit cap; deposit interest or holding;
- general retaliation;
- rent-increase notice;
- radon; mold; bed bugs; flood;
- EV charging;
- medical-cannabis housing protection;
- just cause;
- tenant death;
- landlord-tenant alarm duty.

The search terms and counts are in each row's notes.

## 18. Topic reference canvass (rules 27, 36)

All 289 topic keys in `lease-clause-topics.md`, plus the 7 with no row in any state. **116 topics have a UT row. 173 are answered below.** New topic keys created: `smoke-drift-waiver`, `collection-fee`, `notice-service-fee`.

### 18.1 Topics answered by a UT row
`abandoned-property`: abandoned-property-ut; `abandonment-and-mitigation`: edu-abandonment-rent-liability-ut; `acceptable-payment-methods`: acceptable-payment-methods; `addendum-precedence`: addendum-precedence; `alarm-duties`: edu-alarms-ut; `alterations`: no-alterations; `appliances-included`: appliances-included; `application-fees`: edu-pre-application-disclosure-ut; `application-of-payments`: application-of-payments; `assigned-parking-space`: assigned-parking-space; `assistance-animal-accommodation`: assistance-animal-accommodation; `attorney-fees`: edu-attorney-fees-ut; `bed-bug-disclosure`: edu-no-bed-bug-rule-ut; `cannabis`: edu-no-cannabis-housing-protection-ut; `casualty-termination`: casualty-termination-ut; `common-area-use`: common-area-use; `condition-inspection`: edu-move-in-condition-ut; `default-by-tenant`: default-by-tenant; `disturbance`: no-disturbance; `due-at-signing`: due-at-signing; `dv-lease-termination`: edu-dv-termination-ut; `dv-lockchange`: edu-crime-victim-locks-ut; `early-termination`: early-termination-ks; `electronic-signatures`: electronic-signatures; `emergency-assistance-right`: edu-police-emergency-calls-ut; `entire-agreement`: entire-agreement; `ev-charging`: edu-no-ev-charging-right-ut; `eviction-process`: edu-eviction-process-ut; `eviction-record-sealing`: edu-eviction-expungement-ut; `existing-condition`: existing-condition; `expedited-criminal-eviction`: edu-expedited-criminal-eviction-ut; `fair-housing`: edu-fair-housing-ut; `fire-safety-grilling`: fire-safety-grilling; `firearms`: edu-firearm-vehicle-storage-ut; `flood-disclosure`: edu-no-flood-disclosure-ut; `for-cause-eviction`: edu-no-just-cause-ut; `foreclosure`: edu-foreclosure-tenants-ut; `governing-law`: governing-law; `guest-policy`: guest-policy; `guest-policy-day-limit`: guest-policy-day-limit; `hoa`: edu-hoa-rental-rules-ut; `hoa-compliance`: hoa-compliance; `holdover`: holdover-ca; `homestead-waiver`: edu-exemption-waiver-void-ut; `inspection-rights`: inspection-rights; `joint-liability`: joint-liability; `keys`: keys; `landlord-entry`: landlords-access; `landlord-lien`: edu-landlord-lien-ut; `landlord-maintenance`: landlord-maintenance, edu-fit-premises-duties-ut; `landlord-registration`: edu-rental-licensing-ut; `landscaping-irrigation`: landscaping-irrigation; `late-fee`: late-fee, edu-late-fee-cap-ut; `lead-based-paint`: lead-based-paint; `lease-copy`: edu-lease-copy-rules-ut; `meth-disclosure`: meth-disclosure-ut; `mold-disclosure`: edu-no-mold-disclosure-ut; `municipal-utility-lien`: edu-municipal-water-owner-liability-ut; `nonrefundable-deposit-notice`: nonrefundable-deposit-notice-ut; `notice-delivery-methods`: edu-electronic-notices-ut; `notices`: notices; `nuisance`: edu-nuisance-eviction-ut; `owner-identity-disclosure`: landlord-disclosure-ut; `parking`: parking-ks-oh-ca; `parking-vehicle-rules`: parking-vehicle-rules; `permitted-occupants`: permitted-occupants; `pet-insurance-requirement`: pet-insurance-requirement; `pet-policy`: pet-policy; `possession-delay`: possession-delay-ca; `post-eviction-property`: edu-post-eviction-property-ut; `radon-disclosure`: edu-no-radon-disclosure-ut; `rent-control`: edu-rent-control-preemption-ut; `rent-increase-notice`: edu-no-rent-increase-notice-ut; `rent-payment`: rent-payment; `rent-tax`: edu-rent-sales-tax-ut; `rental-application-accuracy`: rental-application-accuracy; `required-fees`: edu-fees-in-lease-ut; `residential-use-only`: residential-use-only; `retaliation`: edu-no-retaliation-statute-ut; `returned-payments`: returned-payments-ut; `scope`: edu-landlord-tenant-scope-ut; `security-deposit-cap`: edu-no-security-deposit-cap-ut; `security-deposit-interest`: edu-no-deposit-interest-ut; `security-deposit-on-sale`: edu-sale-deposit-successor-ut; `security-deposit-penalty`: edu-security-deposit-rules-ut; `security-deposit-return`: security-deposit-return-ut; `security-deposit-use`: security-deposit-use; `self-help-eviction`: edu-self-help-eviction-ut; `service-animal-denial-penalty`: edu-service-animal-denial-penalty-ut; `service-animal-misrepresentation`: edu-service-animal-law-ut; `servicemember-rights`: edu-servicemember-rights-ut; `services-utilities-provided`: services-utilities-provided-ks-oh; `severability`: severability; `smoking-policy`: smoking-policy; `snow-removal`: snow-removal; `source-of-income`: edu-source-of-income-ut; `stigmatized-property`: edu-stigmatized-property-ut; `storage-space`: storage-space-ks-oh-ca; `sublet-assign`: no-sublet-assign; `surrender-end-of-term`: surrender-end-of-term-ks-ne; `tenant-death`: edu-no-tenant-death-rule-ut; `tenant-display-rights`: edu-flag-display-ut; `tenant-forward-proceedings`: tenant-forward-proceedings-ca; `tenant-maintenance`: tenant-maintenance; `tenant-repair-agreement`: tenant-repair-agreement-ut; `tenant-repair-remedies`: edu-renter-remedies-ut; `tenant-screening`: edu-screening-criteria-ut; `tenants-property-insurance`: tenants-property-insurance-ks-oh-ca; `termination-notice`: periodic-tenancy-notice-ut, edu-notices-to-quit-ut; `towing`: edu-towing-ut; `unauthorized-occupant-removal`: edu-unauthorized-occupant-removal-ut; `unpaid-damages-interest`: edu-interest-on-unpaid-amounts-ut; `utilities-paid-by-landlord`: utilities-paid-by-landlord; `utilities-responsibility`: utilities-responsibility; `utility-payment-evidence`: utility-payment-evidence; `utility-service-continuity`: utility-service-continuity.

### 18.2 Topics with no UT row (status and reason)
| Topic | Status | Reason |
|---|---|---|
| `adverse-proceeding-notice` | Present (contract) | tenant-forward-proceedings-ca tagged; no Utah statute. |
| `alt-housing` | Not located | No relocation or alternate-housing duty in Chapter 57-22 (read whole). |
| `appliances-excluded` | Present | Owner maintains appliances only 'as specifically contracted' (§ 57-22-4(1)(b)(iv)); appliances-included tagged. |
| `automatic-renewal` | Not located | Battery 2 B2-12: 0 hits. |
| `balcony-inspection` | Not located | B2-33: condominium sections only. |
| `bed-bug-cooperation` | Confirmed absent | Search 21: 0 hits; edu-no-bed-bug-rule-ut. |
| `casualty-and-mitigation-waivable` | Not applicable | Another state's statute; casualty answered by casualty-termination-ut. |
| `children-occupancy` | Not located | No lease-content rule; familial status is protected (edu-fair-housing-ut). |
| `cold-weather-vacate-notice` | Not located | No Utah rule in Titles 57 or 78B-6 (read whole). |
| `condemned-premises-rent-bar` | Not located | B2-13: eminent domain only. |
| `confession-of-judgment` | Not located | Search 75: 12 hits in 8 sections, none reaching leases. |
| `confirmed-absences-habitability` | Not applicable | Another state's bookkeeping key; Utah absences have their own rows. |
| `confirmed-absences-misc` | Not applicable | As above. |
| `confirmed-absences-outside-title` | Not applicable | As above. |
| `construction-liens` | Not located | Title 38 Chapter 1a not read; no search aimed at tenant-contracted work (open item). |
| `consumer-protection-act` | Present, reach unsettled | Consumer Sales Practices Act defines 'consumer transaction' to include a lease of 'other property' (§ 13-11-3(2)); whether it reaches residential real-property leases is case law, not read (Step D rule 51). |
| `conversion-notice` | Not located | Search 38: one condominium-plat section. |
| `criminal-activity` | Present; verdict: no clause | 3-calendar-day no-cure notice for a criminal act on the premises (§ 78B-6-802(1)(g)); expedited hearing (§ 78B-6-810(3)); edu-expedited-criminal-eviction-ut. §6 rule 54 list. |
| `cure-and-eviction-grounds` | Present | edu-notices-to-quit-ut; default-by-tenant tagged. |
| `defective-drywall-disclosure` | Not located | No search aimed at it (Virginia-specific statute); no hit in the Title 57 read. |
| `deposit-escheat` | Not located | Search 45: 3 unrelated sections. Surplus from an abandoned-property sale goes under Title 67 Chapter 4a (§ 78B-6-816(2)(c), (11)); whether an uncashed deposit refund is unclaimed property under Title 67 Chapter 4a not read (open item). |
| `deposit-installments` | Not located | Chapter 57-17 read whole. |
| `deposit-last-month-rent` | Not located | Chapter 57-17 read whole; prepaid rent is returned with the deposit (§ 57-17-3(2)(b)). |
| `deposit-surrender-notice` | Not located | Chapter 57-17 read whole. |
| `designated-repairer` | Not located | Chapter 57-22 read whole. |
| `disability-accommodation` | Present | § 57-21-5(4); edu-fair-housing-ut. |
| `disaster-displaced-guests` | Not located | B2-23: 3 unrelated sections. |
| `disaster-duties` | Not located | B2-23. |
| `double-letting` | Not located | No search aimed at it; Titles 57 and 78B-6 read. |
| `dv-confidentiality` | Not located | § 57-22-5.1 read whole: no confidentiality rule. |
| `dv-deposit-timing` | Not located | § 57-22-5.1 read whole. |
| `dv-eviction-protection` | Present in part | No DV eviction defense; police-call protection § 57-22-5.1(10) (edu-police-emergency-calls-ut). |
| `dv-protection-order-chapter-moved` | Not applicable | Another state's bookkeeping key. |
| `dv-qualifying-documents` | Present | § 57-22-5.1(2), (4)(b); edu-dv-termination-ut, edu-crime-victim-locks-ut. |
| `electric-submetering-disclosure` | Not located | Search 33: mobile home parks only. |
| `emergency-contact` | Not located | B2-18: unrelated. |
| `employee-screening` | Not located | B2-16: 0. |
| `environmental-event-termination` | Not located | B2-23. |
| `ev-charging-end-of-tenancy` | Confirmed absent | edu-no-ev-charging-right-ut. |
| `ev-charging-requirements` | Confirmed absent | edu-no-ev-charging-right-ut. |
| `ev-charging-shared-area` | Confirmed absent | edu-no-ev-charging-right-ut. |
| `eviction-hardship-stay` | Present in part | State-military stay only (edu-servicemember-rights-ut); no general hardship stay in Part 8 (read whole). |
| `eviction-penalty-clause-ban` | Not located | Part 8 read whole. |
| `eviction-service-party` | Not located | Service under §§ 78B-6-805, -807 and court rules; no lease-named agent rule. |
| `exculpatory-clauses` | Not located | Searches 76, 77; recorded in the ks-oh-ca tag notes (rule 52). |
| `expedited-deposit-disposition` | Not located | Chapter 57-17 read whole. |
| `extended-absence-notice` | Present, different shape | No duty to give notice; a notice of absence defeats the abandonment presumption (§ 78B-6-815(1)); abandoned-property-ut. extended-absence-notice-ks not tagged. |
| `fee-in-lieu-of-deposit` | Not located | Chapter 57-17 read whole. |
| `fee-transparency` | Present | edu-pre-application-disclosure-ut (topic application-fees) and edu-fees-in-lease-ut (required-fees). |
| `fee-unprovided-service` | Not located | Titles 57 and 78B-6 read. |
| `fire-code-standard` | Not read | Title 15A codes not read (edu-alarms-ut; open item). |
| `fire-sprinkler-duty` | Not located as a rental duty | Search 83: code sections only. |
| `foreclosure-disclosure` | Not located (landlord duty) | The trustee gives tenants notice (§ 57-1-25(1)(c), (3)(b)); edu-foreclosure-tenants-ut. |
| `foreign-ownership` | Present, narrow | § 63L-13-204 (Laws of Utah 2026, ch. 361): no one may purchase or lease an interest in land on behalf of a restricted foreign entity (read in context, B2-27). Not a rule about ordinary residential leasing; no row (UT log s7). |
| `forfeiture-redemption` | Present | § 78B-6-802(2); edu-notices-to-quit-ut. |
| `frozen-standard-incorporation` | Not applicable | Another state's code-incorporation issue. |
| `governmental-fines` | Not located | B2-14: no pass-through ban; hoa-compliance fines tagged. |
| `guarantor-renewal` | Not located | B2-11: insurance and foreclosure sections. |
| `guest-rights` | Not located | No guest statute; § 76-6-206.4 is the long-term-guest trespass rule (edu-unauthorized-occupant-removal-ut). |
| `habitability-materiality` | Present | § 57-22-3(3); edu-fit-premises-duties-ut. |
| `habitability-modifiable` | Present | § 57-22-3(4); edu-fit-premises-duties-ut, tenant-repair-agreement-ut. |
| `habitability-presumption` | Not located | Chapter 57-22 read whole. |
| `health-district-rental-rules` | Present | Owner must follow board-of-health rules (§ 57-22-3(1)); edu-fit-premises-duties-ut. |
| `heating` | Present | §§ 57-22-3(1), -4(1)(b)(ii); allocable by signed agreement (§ 57-22-3(4)); edu-fit-premises-duties-ut. |
| `holding-deposit` | Present | § 57-22-4(3)-(4); edu-pre-application-disclosure-ut. |
| `holdover-rate` | Verdict: no clause | Utah trebles detainer damages (§ 78B-6-811(2)-(3)); standing GA rule offers a stipulated rate only where no statutory measure exists (§6). |
| `immigration-status` | Not located | Search 64, B2-42: no landlord rule; § 78B-6-812(4)(c)(iii) gives post-eviction access to immigration documents. |
| `infirmity-termination` | Not located | B2-22: 0. |
| `inspection-condemnation-disclosure` | Not located | Titles 57 and 78B-6 read. |
| `inspection-notice-penalty` | Not located | Titles 57 and 78B-6 read. |
| `jury-waiver` | Not located | Search 74: no contractual rule. |
| `key-control-policy` | Not located | Search 60: association sections only. |
| `landlord-breach-remedy` | Present | § 57-22-6; edu-renter-remedies-ut. |
| `landlord-liability-insurance` | Not located | B2-28: 0. |
| `landlord-remedies-termination` | Present | § 78B-6-811; edu-eviction-process-ut. |
| `law-enforcement-cooperation` | Present | § 57-22-5.1(10); edu-police-emergency-calls-ut. |
| `lead-safe-certification` | Not located | Search 62: one air-quality section. |
| `lease-content-requirements` | Present | landlord-disclosure-ut, nonrefundable-deposit-notice-ut, meth-disclosure-ut, edu-fees-in-lease-ut. |
| `lease-notice-initial-requirement` | Not located | Titles 57 and 78B-6 read. |
| `lease-term-limitation` | Not located | Titles 57 and 78B-6 read. |
| `lockout-for-rent-delinquency` | Confirmed prohibited | § 78B-6-814; edu-self-help-eviction-ut. |
| `meter-conservation-charge` | Not located | No search aimed at it (South Carolina-specific). |
| `military-air-zone-disclosure` | Not located | No search aimed at it (Virginia-specific). |
| `minor-tenant-filing` | Not located | B2-25: none landlord-tenant; necessary defendants § 78B-6-806. |
| `nonpayment-notice` | Present | 3 business days (§ 78B-6-802(1)(c)); edu-notices-to-quit-ut. No lease-as-notice or waiver provision (rule 46). |
| `nonrefundable-deposit-separate-notice` | Present | Timing rule in nonrefundable-deposit-notice-ut notes (§ 57-17-2). |
| `nonresident-owner-agent` | Not located | Search 86: none a landlord agent rule. |
| `notice-to-quit-waiver` | Verdict: no clause | No Utah statute lets a lease waive or shorten the § 78B-6-802 notices (§6). |
| `notice-to-vacate-additional-terms` | Not located | Part 8 read whole. |
| `ordnance-demolition-meter-disclosures` | Not located | No search aimed at it (California-specific). |
| `other-landlord-facilities` | Present | § 57-22-4(1)(b)(iv); appliances-included tagged. |
| `owner-move-in-reservation` | Not needed | No just-cause rule (edu-no-just-cause-ut). |
| `parking-rules-notice` | Not located | Titles 57 and 78B-6 read; § 72-9-603 is tow signage. |
| `part5-nonwaivable` | Not applicable | Another state's statute structure. |
| `periodic-services-entry` | Present | Lease may set entry notice (§ 57-22-4(2)); landlords-access tagged. |
| `pest-control-notice` | Not located | Search 84. |
| `pet-fees` | Present | Pet deposits are deposits (§ 57-17-1); no fee for service or support animals (§ 26B-6-803(1)(b)). |
| `plain-language` | Not located | Search 40: none reaching leases. |
| `plain-language-consumer-statement` | Not located | Search 40. |
| `pool-safety` | Not located | Search 61: 0; B2-34 screened. |
| `portable-solar` | Not located | B2-5: 3 unrelated sections. |
| `portfolio-thresholds` | Present | Fair housing small-owner exemption (§ 57-21-3(1)); garbage receptacles for more than two units (§ 57-22-4(1)(b)(v)); good-landlord exemption for owner-occupied buildings of four or fewer units (§ 10-1-203.5). |
| `possession-bond` | Present | § 78B-6-808; edu-eviction-process-ut. |
| `private-well-testing` | Not located | No search aimed at it (New Jersey-specific). |
| `prohibited-acts-renter` | Present | § 57-22-5(2); no-disturbance, tenant-maintenance tagged. |
| `prohibited-lease-terms` | Present in part | Exemption waivers void (edu-exemption-waiver-void-ut); fees must be in the lease (edu-fees-in-lease-ut); no URLTA-style prohibited-terms list (Chapter 57-22 read whole; searches 75-77). |
| `prop65-rental-warning` | Not applicable | California-specific. |
| `property-tax-rent-disclosure` | Not located | Titles 57 and 78B-6 read. |
| `protected-class-inquiry-ban` | Present | § 57-21-5(2) (application forms); edu-fair-housing-ut, edu-screening-criteria-ut. |
| `purpose-limitation` | Present | residential-use-only tagged. |
| `redemption` | Present | § 78B-6-808(4)(a), § 78B-6-802(2); edu-eviction-process-ut, edu-notices-to-quit-ut. |
| `religious-cultural-display` | Not located | Search 36: 0. |
| `rent-demand-bar` | Not located | Part 8 read whole. |
| `rent-escalation` | Not located | Search 22/22b. |
| `rent-into-court-counterclaim` | Present | Counter-bond (§ 78B-6-808(4)(b)); edu-eviction-process-ut. |
| `rent-receipt-anti-waiver` | Not located | Chapter 57-22 read whole. |
| `rent-receipts` | Not located | Search 68: none a landlord receipt duty. |
| `rent-reporting` | Not located | B2-6. |
| `rental-inspection` | Present | Municipal inspection with a regulatory license (§ 10-8-85.5(2)); edu-rental-licensing-ut. |
| `renters-insurance-rules` | Not located | Search 6: one portable-electronics insurance section. |
| `repair-cost-termination` | Not located | Chapter 57-22 read whole. |
| `repair-escrow-exemption-notice` | Not located | Chapter 57-22 read whole. |
| `repair-notice` | Present | § 57-22-6(2)-(3); edu-renter-remedies-ut. |
| `required-disclosures` | Present | landlord-disclosure-ut, meth-disclosure-ut, nonrefundable-deposit-notice-ut, lead-based-paint, edu-pre-application-disclosure-ut. |
| `rules-regulations` | Present | §§ 57-22-4(7)(b)(ii), 57-22-5(1)(h); edu-lease-copy-rules-ut. |
| `sale-or-management-change` | Present | § 57-17-4; edu-sale-deposit-successor-ut (topic security-deposit-on-sale). |
| `security-deposit-holding` | Confirmed absent | edu-no-deposit-interest-ut (no separate-account rule). |
| `security-deposit-nonwaiver` | Not located | Chapter 57-17 read whole. |
| `security-deposit-standards` | Not located | Chapter 57-17 read whole. |
| `security-devices` | Present in part | Crime-victim lock change (edu-crime-victim-locks-ut); no general rekey duty (search 81). |
| `senior-housing-work-card` | Not located | No search aimed at it. |
| `sex-offender-disclosure` | Not located | Search 44: no landlord duty. |
| `sex-offender-occupancy` | Not located | B2-10: § 57-16-15 (mobile home parks) and registry sections. |
| `sfr-occupancy-disclosure` | Not located | Titles 57 and 78B-6 read. |
| `shutdown-rent-protection` | Not located | B2-21: one unrelated section. |
| `social-security-defense` | Not located | Part 8 read whole. |
| `statute-of-frauds-lease-term` | Not read | Statute of frauds (Title 25) not read (open item). |
| `statutory-caps` | Not applicable | Another state's bookkeeping key. |
| `statutory-early-termination` | Present | DV termination (§ 57-22-5.1(4)); failure to deliver possession (§ 57-22-4.1); rent-abatement remedy (§ 57-22-6(4)(a)(i)). |
| `steam-radiator-covers` | Not located | No search aimed at it (New Jersey-specific). |
| `stove-refrigerator` | Present | § 57-22-4(1)(b)(iv); appliances-included tagged. |
| `subsidy-habitability-proration` | Not located | Chapter 57-22 read whole. |
| `subsidy-late-fee` | Not located | § 57-22-4(5)(a) caps all late fees; no subsidy rule. |
| `substandard-property-receivership` | Not located | B2-29. |
| `telecom-access` | Not located | Search 66: none landlord-tenant. |
| `tenancy-at-will` | Present | 5 calendar days (§ 78B-6-802(1)(b)(ii)); edu-notices-to-quit-ut. |
| `tenant-insurance-claims` | Not located | Titles 57 and 78B-6 read. |
| `tenant-records` | Not located | B2-19: 0. |
| `tenant-right-to-organize` | Not located | Search 43: none a tenant organizing right. |
| `tenant-rights-statement` | Not located | B2-37: assignment-of-rents section only. |
| `tenant-statutory-duties` | Present | § 57-22-5; edu-fit-premises-duties-ut. |
| `term-change-notice` | Present | New fees on a month-to-month agreement need 15 days' notice (§ 57-22-4(5)(b)(ii)); edu-fees-in-lease-ut. |
| `tpa-exemption-notice` | Not applicable | California Tenant Protection Act. |
| `tpa-notice` | Not applicable | California Tenant Protection Act. |
| `tpa-sunset` | Not applicable | California Tenant Protection Act. |
| `translation-duty` | Not located | B2-3: 0. |
| `truth-in-renting` | Not located | No search aimed at it (New Jersey-specific). |
| `unbundled-parking` | Not located | No search aimed at it (California-specific). |
| `unconscionability` | Not located for leases | B2-4: UCC goods leases (§ 70A-2a-108) and other titles; no residential-lease rule. |
| `utility-allowance-cap` | Not located | Searches 16, 33, 70. |
| `utility-apportionment` | Not located | Searches 16, 33, 70; § 10-8-85.5(3)(a) protects owner-tenant utility contracts. |
| `utility-deposit-return` | Not located | B2-7: 0. |
| `utility-disclosure-attachment` | Not located | Searches 16, 33, 70. |
| `utility-interruption-submeter` | Not located | Search 33. |
| `utility-landlord-account` | Not located | Search 70: 0. |
| `utility-shutoff-statute` | Not located (one hit unread) | Search 16: §§ 54-9-103, 57-8-52, 57-8a-309; the Title 54 hit was not read (open item). |
| `utility-submetering-disclosure` | Not located | Search 33: mobile home parks only. |
| `utility-transfer` | Not located | Searches 16, 70. |
| `veterans-incentive` | Not located | No search aimed at it. |
| `waiver-by-acceptance` | Confirmed absent (statute) | Search 17: 0; case law not read; late-fee UT note. |
| `waterbed` | Confirmed absent | Search 5: 0; common-area-use UT note. |
| `window-guards` | Confirmed absent | Search 82: 0. |
| `written-notice-required` | Present | Written notices throughout (§§ 57-22-4.1, 57-22-6(2), 57-17-3, 78B-6-802). |

### 18.3 'Topics no state has a row for yet'
| Topic | Status | Reason |
|---|---|---|
| `algorithmic-rent-setting` | Not located | Search 56: 4 sections, none rent-setting. |
| `fees-as-rent` | Not located | Search 57: § 57-16-5 (mobile home parks) only. |
| `landlord-self-cure` | Not located | Search 59: 0. |
| `lease-completeness` | Not located | Search 58: no lease-blanks rule in Titles 57 or 78B. |
| `quiet-possession` | Not located (leases) | Search 52: § 57-1-12 (conveyance warranty), UCC and § 78B-6-809. |
| `statutory-forms` | Present | Utah prescribes forms or wording a landlord meets: the tenant's deposit notice (§ 57-17-3(3)(b)), the declaration-of-abandonment language (§ 78B-6-815(2)(a)), the trespasser complaint (§ 78B-6-817(2)(b)) and the dishonored-check notice (§ 7-15-2(2)). No row of this topic key; each is carried by the row it serves (proposed topic question). |
| `tenant-security-cameras` | Not located | Search 55: 4 unrelated sections. |

## 19. Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** no bold, capitals or type-size rule for lease terms. Prescribed wording and forms lives outside the lease, except the smoke-drift waiver elements, duty allocation and collection-fee terms (§4).
- **41 Just-cause:** none (`edu-no-just-cause-ut`). A fixed term ends without notice (§ 78B-6-802(1)(a)), so shared end-of-term wording is correct.
- **42 Required text inside a shared clause:** the nonrefundable part of any deposit must be stated in writing (§ 57-17-2). The shared `due-at-signing` and `pet-policy` deposit mentions are paired with `nonrefundable-deposit-notice-ut`.
- **43 Cure promises:** `default-by-tenant`'s carve-out preserves Utah's no-cure notices (§ 78B-6-802(1)(d)-(g)). The base `early-termination`'s 10-day cure was not tagged.
- **44 Terms turned into duties:** § 57-22-6(2)(b)(v) lets a renter serve a deficient-condition notice 'as provided in the rental agreement'. `notices` designates no alternative method, so no lease term becomes a mandatory service method.
- **45 Electronic notices:** the Utah UETA has no eviction or default-notice exclusion (§ 46-4-103). But § 78B-6-805 names no email method, so no electronic-notice clause is offered (`edu-electronic-notices-ut`).
- **46 Lease as the notice:** no Utah provision lets the lease serve as, or waive, a statutory notice.
- **47 Knowing-use penalties:** none. § 57-22-4(9) removes the renter's private action for § 57-22-4(2)-(7) failures.
- **48 Separate documents:** none required for residential leases (search 48).
- **49 Collection costs:** no ban. § 12-1-11 conditionally permits a collection fee, offered as `collection-fee-ut`. `default-by-tenant`'s 'reasonable costs and expenses' does not invoke § 12-1-11.
- **50 'Lease controls' wording:**
  - § 57-22-4(2): entry notice. Library keeps 24 hours plus an emergency exception.
  - § 57-22-2(1): agent notices. Opt-out offered in `landlord-disclosure-ut`.
  - § 57-22-4(1)(b)(iv): appliances 'as specifically contracted'. `appliances-included`.
  - § 57-22-4(1)(b)(v): garbage 'except to the extent that the renter and owner otherwise agree'. Left to `utilities-paid-by-landlord`'s list.
  - § 57-22-3(4): duty allocation. `tenant-repair-agreement-ut`.
  - § 57-22-6(2)(b)(v): notice service. No designation.
  - § 78B-6-808(4)(a): 'attorney fees, as provided in the rental agreement'. The `default-by-tenant` fee sentence supplies it.
- **51 Plain-language and consumer statutes:** no plain-language statute reaches leases (search 40). The Consumer Sales Practices Act's reach to residential real-property leases is unsettled; case law not read (§7).
- **52 Exculpation:** no voiding statute located. The ks-oh-ca and ks-oh variants are used (§2.1).
- **53 Figures against shared clauses:** late-fee cap (builder validates the base clause's figure); returned-payment ceiling wording replaced (`returned-payments-ut`); base `holdover` 'maximum permitted' replaced (`holdover-ca`); guest limit of 14 days vs the 48-hour long-term-guest trespass rule (no conflict: the trespass rule needs a notice to leave).

---

## Proposed SOP changes
1. **Save each search battery to the state's source folder immediately after it runs, before reading any hit.** Reason: in UT a second 46-search battery was run and relied on but not saved. The independent check caught three absence claims with no evidence on disk, and the browser link then dropped, so the searches could not have been re-run.
2. **Where the official code is served as whole-title files (XML or HTML), load every title into the browser and prove the load against the site's own title index; take effective dates from version metadata where the site provides it.** Reason: the PA and UT loads gave true full-text proof of absence without research mode, and Utah's version ids gave per-section effective dates, including a September 2026 date and a 2027 future version the history lines alone would not show.
3. **Check the cross-references inside the statutes relied on, not only the library's own citations.** Reason: Utah's amended eviction statute (§ 78B-6-802(1)(f)) cites a section repealed by the same act. A row paraphrasing that ground would have inherited a dead citation.
4. **When asking Taylor a question, first say in one plain sentence what the thing is (with an example), and label any risk that rests on unread case law or doctrine as unread.** Reason: the UT notice-service-fee question led with legal analysis and presented an unread penalty doctrine as a risk. It took three rounds before the question was clear, and the risk did not hold up.
5. **Treat a real lease's statutory citations as a currency probe.** Reason: the Cullimore form's smoke-drift waiver still cites the pre-2026 section, which confirmed the 2026 renumbering from a second direction.

## Proposed topic questions
- `landlord-maintenance`: Can the lease shift statutory habitability duties to the tenant by an explicit signed agreement (Utah § 57-22-3(4))?
- `smoking-policy`: Does a statute make smoke drift a nuisance, and let a lease waiver bar the claim? Is the landlord exposed only if the lease promises a smoke-free unit?
- `late-fee`: Is the late-fee cap stated as the greater of a percentage of rent and a flat dollar amount?
- `application-fees`: Written pre-application disclosure of estimated rent and fees, availability date and screening criteria, with a refund right if the lease differs.
- `default-by-tenant`: Does the possession judgment treble damages, and would a contract charge be swept into the trebled amount?
- `nuisance`: Does a nuisance statute make the landlord a necessary defendant when a third party's conduct supports abatement by eviction?
- `hoa`: Limits on an association demanding renter screening data, its own lease form or approval of renters.
- `firearms`: Does a statute bar landlord rules against firearms locked in vehicles in the parking area?
- `statutory-forms`: Statutory forms or prescribed wording a landlord must use (deposit demand, abandonment declaration, trespasser complaint, bad-check notice).
- `returned-payments`: Does a dishonored-check statute fix the service charge, and can a non-bank holder contract for more?

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.
