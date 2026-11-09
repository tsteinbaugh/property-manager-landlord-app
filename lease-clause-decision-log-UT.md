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

### Vouches given
- **2026-10-04:** `default-by-tenant` (MN's proposal), vouched for UT; reasoning in "Circle-back checks (SOP 1.53)" at the end of this log.

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

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.53), 2026-10-04

Run 2026-10-04 in Utah's existing chat (rule 8), on the files staged 2026-10-03 15:38. `lease-clauses.csv` was checked first: 2,876 rows, 2,755 active. Those files are the only source of truth. Where this chat said something different earlier, the files and this section win:
- **Deleted at the start:** the 2026-09-29 outputs `lease-clauses-UT-delta.csv` and `lease-clause-decision-log-UT.md`. The synced log and citations file replace them.
- **Superseded:** the §6.1 decline of a stipulated holdover rate (check 2), and `casualty-termination-ut`'s note that "no separate whole-code 'casualty' search was run" (check 1).

Scope: one [Retro] rule and two targeted fixes, nothing else reopened (rule 1).

**Sources and method (rules 11, 12, 15, 19, 79).**
- **Load.** The whole Utah Code was reloaded 2026-10-04 in the built-in browser from the official le.utah.gov XML. All 96 titles on the index page loaded (HTTP 200, 84,186,075 characters), and 27,647 current section versions were searched; future-dated versions were excluded.
- **Calibration.** Results match the 2026-09-29 load exactly: control term 0 hits; 'security deposit' 44 hits in the same 22 sections; 'renter(s)' 229 hits.
- **Section count.** This parse counts section elements once per title file, so its total differs from §1.3's 28,551 versions. Not investigated, because the calibrations and every relied-on hash match.
- **Batteries.** 23 searches were run in three rounds: R1-R16; then R10b-R15b after the independent check asked for wider phrasings and word orders; then R11c after its re-check.
  - Synthetic positives: R1 is the control. Every other battery has a synthetic positive tested on the same load; those for R15 and R16 were added in round 2.
  - Two first test strings were badly built and were replaced. R4's positive failed on word order, so R4 was re-run as R4b. R14b's first test string lacked a utility word.
  - Boundary: the Utah Administrative Code (for example utility-commission rules) was not searched.
  - Saved: `retro153/battery_utcode_2026-10-04_retro153.tsv`.
- **Currency (rule 79).** 14 sections were hashed on normalised text against today's live text, and their history lines were compared: §§ 57-17-3, 57-22-3, 57-22-4, 57-22-4.1, 57-22-5, 57-22-6, 78B-6-801, 78B-6-802, 78B-6-803, 78B-6-808, 78B-6-811, 78B-6-814, 78B-6-815 and 78B-6-816. All are identical except § 57-17-3. There the only difference is the deposit-demand form's blank lines, which the saved file had abridged; subsection (1) was re-read live. Saved: `retro153/currency_check_2026-10-04.txt`.
- **New texts read today:** Utah Code Ann. § 78B-6-1001 and Utah Code Ann. § 10-7-10.5, both read whole and saved in `retro153/UT-retro153-new-sections.txt`. Also Utah Code Ann. § 57-22-5.1 in both its current version and the version effective 2027-01-01, read whole live.
- **Case law:** not read anywhere; every point that rests on it is labelled in the rows.

| # | Rule / fix | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| 1 | **54t** tenant-caused damage | **Fixed.** Not recorded earlier under another name: §6.1 covers casualty termination only, and §16's "Fire or storm damage → covered" is a scenario line, not this screen. | Utah Code Ann. §§ 57-22-3, 57-22-4, 57-22-4.1, 57-22-5, 57-22-5.1, 57-22-6, 57-17-3(1), 78B-6-802, 78B-6-808, 78B-6-811, 78B-6-815, 78B-6-816, 78B-6-1001, 10-7-10.5, 57-22-2(5); § 57-16-8 as a search hit read in context only; batteries R2-R9, R12-R16, R12b, R14b, R15b; `tenant-caused-damage-tn` (read, not tagged); `tenant-caused-damage-wy` / `edu-tenant-caused-damage-wy` (closest analogue) | New: `tenant-caused-damage-ut` (CONDITIONAL), `edu-tenant-caused-damage-ut`. Edited: `casualty-termination-ut` (fault limit; notes) |
| 2 | **Rule 54 holdover shape** (NE sync amendment) | **Fixed: the §6.1 decline is reversed.** The measure isn't conditional, but its shape leaves a gap. | Utah Code Ann. §§ 78B-6-801(10), 78B-6-802(1)(a)-(b), (2), 78B-6-803, 78B-6-811, 57-22-4(5), 57-17-3(1), 78B-6-1001; batteries R10, R10b, R11, R11b, R11c (outside-title search, rule 54); `holdover-rate-in`, `holdover-rate-tn`, `holdover-rate-ga` (model); rule 53 | New: `holdover-rate-ut` (CONDITIONAL), `edu-holdover-damages-ut`. Shared `holdover-ca`: UT note segment and `last_checked` only |
| 3 | **Rule 62 vetting**, `default-by-tenant` (MN's carve-out sentence) | **Checked, no issue: supported (vouched).** | Utah Code Ann. §§ 78B-6-802(1)(c)-(h), (2), (5), 78B-6-811(1)(c)-(d), 78B-6-814, 78B-6-815; UT note segment on `default-by-tenant`; `edu-notices-to-quit-ut` | None |

### 1. Rule 54t: tenant-caused damage
**Casualty rows first.** Utah has no casualty statute. Today's whole-code searches found no residential casualty, untenantability, abatement or rent-free surrender rule (R2-R8):
- the only "casualty" hits are insurer liquidation and UCC goods leases;
- the "unfit" hits are zoning rules plus Utah Code Ann. § 57-22-6(4)(c).

`casualty-termination-ut` is therefore a pure contract term. It already denied abatement and termination for a self-inflicted casualty, but its fault group came from `casualty-termination-pa`: "Tenant, members of Tenant's household, or Tenant's guests". That omits invitees, whom the statute names. It also differed from the new clause, so an invitee-caused fire would have abated Rent under one optional clause and not under the other.
- **Edit:** the group now reads "Tenant, an Occupant, or a guest or invitee of Tenant". That covers the persons in Utah Code Ann. § 57-22-6(1)(b)(ii)(A) ("the renter, the renter's family, or the renter's guest or invitee"). "An Occupant" stands in for "family" and also reaches a non-family co-occupant.
- **Why this is Claude's call:** it narrows an optional clause (rule 76). The clause's last sentence still preserves every Fit Premises Act right.

**What Utah law gives the landlord without a clause:**
- **Repair cost.**
  - The renter may not intentionally or negligently damage the unit, or knowingly permit anyone to (Utah Code Ann. § 57-22-5(2)(a)).
  - The deposit applies to damage beyond reasonable wear and tear (Utah Code Ann. § 57-17-3(1)).
  - Waste supports a 3-day no-cure notice (Utah Code Ann. § 78B-6-802(1)(d), (2)), and waste damages are trebled in the eviction judgment if alleged and proved (Utah Code Ann. § 78B-6-811(2)(c), (3)).
  - A separate waste action "may include treble damages" (Utah Code Ann. § 78B-6-1001). It names a "tenant for life or years", and whether a periodic tenant counts is unread case law.
- **Rent during repairs.** No statute addresses it either way.
- **Lost rent if the lease ends.**
  - **Forfeiture.** Liability for the remaining term survives a forfeiture (Utah Code Ann. § 78B-6-811(1)(d)). But (1)(c) declares forfeiture only for rent default or an uncured covenant breach, so whether a no-cure waste eviction counts is unsettled on the text.
  - **Mitigation.** (1)(d)(ii) leaves any existing duty to mitigate unchanged and creates none.
  - **Abandonment.** An abandoning tenant owes rent under Utah Code Ann. § 78B-6-816(1), which applies even where the owner did not re-rent. Abandonment is presumed only when rent is unpaid and the tenant gave no notice of absence (Utah Code Ann. § 78B-6-815(1)).

**Each abatement or exit route, checked separately for its own fault exception:**

| Route | Utah provision | Tenant-fault exception? |
|---|---|---|
| Casualty | none (R2-R8) | n/a; the contract clause excludes it |
| Essential services (heat, water, electricity) | habitability standards, Utah Code Ann. §§ 57-22-3(1), 57-22-4(1)(b)(ii), enforced only through § 57-22-6 | Yes: the "deficient condition" definition, Utah Code Ann. § 57-22-6(1)(b)(ii); also (4)(b) compliance bar |
| Landlord-breach termination (rent-abatement remedy ends the agreement) | Utah Code Ann. § 57-22-6(4)(a)(i) | Yes, same definition and bar |
| Repair and deduct | Utah Code Ann. § 57-22-6(4)(a)(ii) | Yes, same |
| Rent into court / certified rent suspension | none for renters (R12, R12b). The § 78B-6-808 possession bond is not one. § 57-16-8 (a search hit, read in context) concerns mobile home park residents, whose lots are outside the Fit Premises Act (§ 57-22-2(5)). | n/a |
| Landlord-paid utility | no utility-specific tenant statute (R13-R15, R14b, R15b); § 10-7-10.5 only lets the city shut off water | Loss of heat, water or power through the owner's nonpayment is a deficient condition the tenant didn't cause, so the § 57-22-6 remedies apply with no fault exception engaged. The saving sentence keeps them. |
| Failure to deliver possession | Utah Code Ann. § 57-22-4.1 | No fault exception. It is unlikely to be tenant-triggered (only with early access); the saving sentence preserves it. |
| Domestic-violence termination | Utah Code Ann. § 57-22-5.1(4)-(8) | **Its own rule:** a victim may exit despite § 57-22-5(2) damage under 30 days old that is due to the violence, staying liable for the damage ((5), (8)(b)). Not available after an eviction notice is served ((7)). No anti-waiver text found; preserved by name anyway. Same text from 2027-01-01. |

**Verdict.** The law covers most of it, so `edu-tenant-caused-damage-ut` says so. A gap remains that the lease can lawfully fill:
- rent while the landlord repairs;
- guest damage the renter didn't knowingly permit;
- lost rent where the lease ends other than by a (1)(c) forfeiture or abandonment.

So `tenant-caused-damage-ut` is offered: the TN/WY text plus a saving sentence that preserves Fit Premises Act rights and the domestic-violence exit by name. Part (1) waives no statutory abatement, because every statutory abatement route already excludes tenant-caused conditions.
- **Unread (rule 76 label):** the lost-rent measure, the extent of mitigation, and whether contract damages are trebled as "amounts due under the contract" (§ 78B-6-811(2)(d)).
- **Conformance:** UT's 54t cell can be ✓.

### 2. Holdover measure: shape and gap
**The measure.** Utah Code Ann. § 78B-6-811(2)(b), (3): the court assesses the unlawful-detainer damages and "shall enter the judgment ... for the rent and for three times the amount of the damages assessed."
- **Conditional?** No. The text has no willfulness or bad-faith element (case law not read).
- **Different shape?** Yes, in three ways that leave a gap:
  1. It is a judgment-stage multiplier with no figure for the loss itself.
  2. It exists only in an eviction judgment. A tenant who leaves a few days late with no suit leaves the landlord with actual damages under `holdover-ca`, and it is unclear those are a deposit item at all. A charge "provided for in the contract" clearly is (Utah Code Ann. § 57-17-3(1)).
  3. Its start is unsettled on the text. A fixed term ends "without notice" (§ 78B-6-802(1)(a)), but "unlawful detainer" is defined as remaining "after receiving a notice to quit" (§ 78B-6-801(10)).

**No other measure exists.** R10, R10b, R11, R11b and R11c found only the agricultural renewal (§ 78B-6-803) and the waste action (§ 78B-6-1001); every other hit is unrelated (catchlines read).

**Non-stacking.** The original decline's second reason was that a contract rate would be swept into the trebling as "amounts due under the contract" ((2)(d)). A bare "not due for days the court trebles" would not stop that: the charge could still be pleaded under (2)(d), or the agreed figure used as the (2)(b) measure, and then trebled. The independent check caught this in the first draft. The clause now does five things:
- the landlord will not claim the charge in an eviction action;
- the landlord will not offer the agreed figure as evidence of damages there (a promise by the landlord, since the parties can't bind what evidence a court weighs);
- the charge is not due for any day for which unlawful-detainer damages are recovered;
- the charge replaces `holdover-ca`'s actual damages only "except in an eviction action", so no day is left with neither measure;
- outside an eviction it is recovered from the deposit or in a separate action, and a charge already taken is credited against an eviction judgment.

The charge therefore works only outside an eviction case, which is exactly the gap (rule 53, MO circle-back 1). **Unread:** whether a separate suit for the charge is precluded once an eviction case is decided (claim preclusion). The education row says so.

**Rule 53 screen:**
- **Trigger.** The end of the Term only, as in `holdover-rate-in`/`-tn`. So it never follows a nonpayment termination (late-fee cap, Utah Code Ann. § 57-22-4(5)(a)) and never runs while the lease can still be saved (§ 78B-6-802(2)).
- **Timing.** Rule 53's "after this Lease ends" conflict arises where a statute regulating holdover damages starts them later than the lease does. Utah's statute regulates no contract charge, ends a fixed term without notice itself, and the charge never runs on days the statutory measure is recovered.
- **Caps and fees.** No statutory cap applies. The fee-in-lease rule (Utah Code Ann. § 57-22-4(5)(b)) is met because the figure is in the lease.

**Rows.** `holdover-rate-ut` is offered (CONDITIONAL, placed after `holdover-ca`). `edu-holdover-damages-ut` explains the measure, the gap and the notice-to-quit question, and suggests serving a written notice to quit to avoid that question.
- **Unread:** the penalty doctrine, and the effect of accepting money after the Term.
- **Conformance:** UT's "54 e.g. holdover charge" cell moves from n to ✓, and the §18.2 `holdover-rate` line now reads "Offered (`holdover-rate-ut`)".

### 3. Rule 62 vetting: `default-by-tenant` carve-out in its own sentence
**Supported for Utah.**
- **Question 1 (could it drop a required cure or notice?).** In a nonpayment eviction Utah requires a written notice giving 3 business days to pay or leave (§ 78B-6-802(1)(c)), and payment within it saves the lease (§ 78B-6-802(2)). CARES (5)(d), (f) neither lengthens nor replaces it. The only statutory route to possession for unpaid rent without that notice is retaking abandoned premises (§§ 78B-6-814, 78B-6-815, 78B-6-816). There the statute itself dispenses with the cure. Abandonment is presumed when the tenant gave no notice of absence and rent is unpaid, either for 15 days ((1)(a)) or when due with the belongings removed ((1)(b)). An optional declaration under (2), which the tenant may dispute within 24 hours, establishes it as a matter of law. The self-limiting sentence ("where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure") therefore drops nothing Utah requires. The no-cure notices it is meant to keep all sit on the non-rent side and stay preserved: (1)(d)-(g), plus the incurable-breach route in (2).
- **Question 2 (does it change what the clause promises here?).** UT's note segment says only that the carve-out "preserves" the no-cure notices (rule 43 checked). Nothing there says "gives up" or "kept on purpose", so the edit changes nothing UT relies on.
- **The Indiana/Pennsylvania point doesn't arise.** Utah *requires* written notice of a rent default before an eviction, so the lease's promise of one matches the statute and the edit drops nothing.
- **Education row.** For UT none needs a "you may still give notice first" sentence. If one is added library-wide at the merge, UT's home for it is `edu-notices-to-quit-ut`, and in Utah it must say the 3-business-day notice is **required**, not optional. That row already says so.

**Vouches given** (for §9 Propagation notes, which Claude Code may move this under):
- `default-by-tenant`, carve-out moved into its own sentence reaching both limbs (MN proposal 2026-10-02): vouched for UT, no change needed. Utah Code Ann. § 78B-6-802(1)(c) requires a written 3-business-day pay-or-quit notice before a nonpayment eviction. The only notice-free route (retaking abandoned premises once abandonment is presumed or established, Utah Code Ann. §§ 78B-6-814, 78B-6-815, 78B-6-816) is one the statute itself allows, so the self-limiting carve-out drops nothing Utah requires. The no-cure grounds (Utah Code Ann. § 78B-6-802(1)(d)-(g), (2)) stay preserved.

**Propagation (rule 62):** no shared text changed. On `holdover-ca` only the UT note segment (now naming its pair) and `last_checked` changed. Every other row in the delta is UT-only.

**Independent check (2026-10-04).** A separate agent that had not seen the drafting checked every row and this section against the saved statute texts, the batteries and the SOP. It found 2 wrong, 10 imprecise and 2 mechanical items; all 14 were fixed before delivery:
- **Wrong (2):** the first non-stacking sentence still let the charge be trebled, and the education row stated a mitigation duty the statute doesn't create.
- **Imprecise (10):**
  - the rule 53 timing reasoning was missing;
  - forfeiture after a waste eviction was stated as settled;
  - the domestic-violence exit was called "always" available, ignoring (7);
  - the utility verdict missed the general § 57-22-6 route;
  - the § 57-22-5.1 anti-waiver point was stated as fact rather than unread;
  - the abandonment route was missing from the §3 reasoning;
  - "matching" overstated the statute's persons;
  - the fixed-term holdover sentence read as settled;
  - the casualty, waste-action and agricultural sentences were unqualified or misquoted;
  - battery phrasings were too narrow (the widened re-runs changed no verdict).
- **Mechanical (2):** missing synthetic positives, and §§ 78B-6-808 and 78B-6-815 were missing from the hash list.

**Re-check (rule 80).** The same checker re-checked every changed item. It confirmed that the three trebling paths are closed, and raised six smaller points, all fixed before delivery:
- **Imprecise (4):**
  - with "in place of" in the clause, an eviction action could have left some days with no measure (the clause now reads "except in an eviction action");
  - a disclaimer can't bind what evidence a court weighs (reworded as the landlord's own promise);
  - the abandonment measure was self-contradictory (now: the time reasonably needed to re-rent; restoration costs beyond normal wear and tear);
  - the abandonment conditions in §3 were misstated.
- **Mechanical (2):** the mobile-home exclusion now rests on the saved § 57-22-2(5), not the unread § 57-16-8; one more multiplier pattern (R11c) was run, with 0 hits.

Across both rounds the checker also confirmed: the file mechanics; that only the UT segment and `last_checked` changed on `holdover-ca`; the copied TN and IN text; that the two clauses are consistent; and the readings of the Fit Premises Act and § 78B-6-811.

**Flag for Claude Code (not fixed, rule 62):** `casualty-termination-pa` and `casualty-termination-id` carry the same fault group UT had ("Tenant, members of Tenant's household, or Tenant's guests", with no invitees). It conflicts with nothing today, since neither state has a tenant-caused-damage clause. But if either later adds one from the TN model, the two optional clauses will treat an invitee-caused casualty differently, as UT's did. GA and NC already include invitees.

## Proposed SOP changes
1. **Rule 54t: list statutory early-termination routes with their own fault rules (domestic-violence and similar victim exits) among the exit routes to check, and have the tenant-caused-damage clause preserve them by name.** Reason: Utah's § 57-22-5.1(5) lets a domestic-violence victim end future obligations despite recent damage that is due to the violence, and keeps the renter liable only for that damage ((8)(b)). The rule's list (casualty, essential services, landlord-breach termination, rent into court, utilities) does not name it. The TN model's lost-rent limb could be read against it.
2. **Rule 54t: when a state offers both a casualty clause and a tenant-caused-damage clause, make the persons whose fault counts identical in both, and make them cover the statute's own list.** Reason: UT's casualty row (copied from PA) excluded fire caused by "Tenant, members of Tenant's household, or Tenant's guests", while the TN-model clause covers "an Occupant, or a guest or invitee". An invitee-caused fire would have abated Rent under one optional clause and not under the other.
3. **Rule 53: where the judgment-stage multiplier also reaches "amounts due under the contract" (Utah § 78B-6-811(2)(d)), the non-stacking sentence must (a) bar claiming the charge in the action where the multiplier applies, and (b) keep the agreed figure from serving as evidence of damages there. "Not recovered for any day a statutory multiple is" is not enough.** Reason: in UT's first draft the charge could still be pleaded as a contract amount or used as the measure of damages, and then trebled. The independent check caught it.
4. **Rule 54 (holdover shape): where the statutory measure attaches to a status the statute defines (here "unlawful detainer"), read the definition as well as the remedy section.** Reason: Utah's definition (§ 78B-6-801(10)) ties unlawful detainer to a notice to quit, while § 78B-6-802(1)(a) ends a fixed term without notice. That leaves when the trebling starts unsettled, which is part of the gap and changes the education advice (serve a notice to quit).

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 2b10851`: 4 new rows (`tenant-caused-damage-ut`, `edu-tenant-caused-damage-ut`, `holdover-rate-ut`, `edu-holdover-damages-ut`), `casualty-termination-ut` updated (fault group now matches the statute's persons), and UT's segment on shared `holdover-ca`; nothing refused. UT active 122 → 126; no same-topic pairs; section pointers resolve.
- **Citations file:** rows added for the four new rows; `casualty-termination-ut` and `holdover-ca` re-dated.
- **Rule 62:** UT vouched for MN's `default-by-tenant` edit (Utah requires the 3-business-day pay-or-quit notice, so the Indiana/Pennsylvania question doesn't arise); recorded in the backlog tally.
- **Flagged:** `casualty-termination-pa` and `casualty-termination-id` carry the same fault group UT had (no invitees); align them if either state later adds a tenant-caused-damage clause (backlog).
- **Guards:** all pass. **Statute spot-check:** not possible from here (le.utah.gov returns empty pages to this machine). The pass reloaded the whole Utah Code from the official XML, hash-matched 14 sections against live text, and was independently checked in two rounds.
- **SOP 1.55:** all four proposals adopted (rules 53, 54). UT's 54t and holdover cells set to ✓.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where UT law lets Landlord proceed without a cure opportunity. Uniform; no UT override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for UT. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any UT row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach UT's law; to be confirmed at UT's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-08/09): Desktop's running record

## UT topic gaps: running record

Pass: Utah topic gaps (GAPS-PROMPT.md, SOP 2.02, end-of-run consistency pass), started 2026-11-08. Sources: the attached official le.utah.gov XML corpus (corpus-UT-20261108; 96 titles plus the Constitution; history lines through the 2026 General Session; no 2026 special session met); U.S. Code 2024 edition via govinfo.gov (uscode.house.gov section pages returned 404); eCFR (up to date as of 2026-11-05); Utah Admin. Code R608-1 from adminrules.utah.gov. Not held: the rest of the Admin Code, court rules, session-law text, case law, ordinances.

### Batch 1: waivers and lease form, deposits and fees, Utah items 6-10 (delivered 2026-11-08)

55 of 242 topics: 60 new UT rows (8 clauses), 2 tags (`showing-notice-la`, `rent-concession-wi`). Decisions:
- **Actual-cost charges:** an unstated landlord cost is not treated as an agreed amount under § 57-22-4(5)(b)(i). Proposed UT overrides: `keys-ut`, `parking-vehicle-rules-ut`, `smoking-policy-ut`, `hoa-compliance-ut`.
- **Early termination:** `early-termination-ut` has a flat one-month fee; Claude Code applies it at sync.
- **Arbitration:** `arbitration-agreement` is not offered in Utah, because CSPA § 13-11-4(2)(q) may apply.
- **`pet-policy`:** reads correctly in Utah.
- **Stale cross-reference:** § 78B-6-802(1)(f) still cites repealed § 78B-6-1107.

Findings on existing rows:
- `hoa-compliance`, `keys`, `parking-vehicle-rules`, `smoking-policy`, `early-termination-ks`, `periodic-tenancy-notice-ut` (CARES).
- `edu-hoa-rental-rules-ut`: the condominium rules and the $200 fee are missing.
- `edu-no-deposit-interest-ut`: the licensed-manager trust account (§ 61-2f-411) is missing.
- `edu-self-help-eviction-ut`: the crime-victim key refusal is missing.

Fetch queue: R162-2f, Utah R. Evid. 301, the 2024 International Fire Code ch. 9, and the HUD late-charge rules.

### Batch 2: domestic violence, protected classes, privacy (delivered 2026-11-08)

79 of 242 topics: 86 new UT rows, 4 tags (adds `disability-modification-restoration-mn`, `drug-free-housing-ca`).
- **Property manager licensing:** a license is required for property management from 2027-01-01 (§ 61-2f-201(1)(d), Laws of Utah 2026, ch. 142). Proposed `edu-property-manager-license-ut`, since no UT row covers it.
- **Stale cross-references:** § 78B-7-1302(1)(c)(i) still cites § 78B-6-1107, a same-session conflict. Also stale: § 57-8a-102(24) and § 61-2f-202.5.
- **Rent reporting:** whether § 70C-7-107 reaches landlords is decided on the cautious course, so no question goes to Taylor.
- **Findings:** `edu-no-retaliation-statute-ut` omits the mobile home park retaliation bar (§ 57-16-16(11)). For another state: the CA notes on `drug-free-housing-ca` describe a paragraph the body lacks.

### Batch 3: local licensing, inspection and codes (delivered 2026-11-08)

103 of 242 topics: 114 new UT rows, 6 tags (adds `accessory-dwelling-unit-term-co`, `home-business-permission-co`).
- **County licensing:** there is no county rental-licensing statute. A county may license businesses only in its unincorporated area (§ 17-64-505(2)). Finding filed on `edu-rental-licensing-ut` ("Counties have parallel powers").
- **Government inspections:** health and fire inspection powers exclude private dwellings, and no statute makes a tenant admit an inspector.
- **Code editions:** IBC 2024, IRC 2021, NEC 2023, IFC 2024.
- **Meth disclosure:** the only required inspection-related disclosure is meth contamination (§ 57-27-201).
- **New clauses:** `rental-inspection-cooperation-ut`, `fire-code-compliance-ut`, `family-child-care-consent-ut` and `term-change-notice-ut` (changes bind only on the tenant's signed acceptance; decided by class decision 2, not put to Taylor).
- **Not tagged:** `rental-inspection-cooperation-mn` and `fire-code-compliance-mn`.

### Batch 4: habitability, repairs, tenant duties (delivered 2026-11-08)

128 of 242 topics: 145 new UT rows, 7 tags (adds `furnishings-included-la`).
- **Fit Premises Act:** materiality tiers from §§ 57-22-3(3) and 57-22-6. No Utah heat temperature, presumption or habitability statement. A promise to repair can be an oral rental-agreement term (§ 57-22-2(2)).
- **New clauses:**
  - `heat-freeze-protection-ut`
  - `appliances-excluded-ut` (never lists air conditioning, § 57-22-4(1)(b)(iii))
  - `promised-repairs-ut`
  - `landlord-self-cure-ut`
  - `designated-repairer-ut` (leaves statutory repair-and-deduct intact; decided by class decision 2, not put to Taylor)
  - `renter-duties-ut`
  - `prohibited-acts-renter-ut`
- **Not tagged:** `prohibited-acts-renter-wy` (rule 26, entry-notice state).
- **Finding:** `permitted-occupants` text omits the written-permission rule. No override is needed, because `renter-duties-ut` covers it.

### Batch 5: safety, codes, environmental disclosures (delivered 2026-11-08)

154 of 242 topics: 176 new UT rows, 12 tags. New tags: `security-devices-wy`, `lock-change-ak`, `common-area-lighting-ks`, `waterbed-mn`, `energy-data-release-wy`.
- **Sprinklers:** optional in IRC homes (§ 15A-3-202(30)); cities may require them only under § 15A-5-203.
- **Existing buildings:** CO detection is required in existing Group R buildings (§ 15A-5-205.5(1)(g)). Finding filed on `edu-alarms-ut`.
- **Meth-lab sites:** the decontamination act (§§ 19-6-902 to -906) has no renter notice and no rental bar. The cautious course is not to rent until the property is decontaminated (§ 57-22-4(1)(a)).
- **Environmental covenants:** a copy must go to persons in possession (§ 57-25-107(1)(c)).
- **New clauses:** `pool-and-spa-use-ut`, `smart-access-system-ut`, `pest-cooperation-ut` (class decision 1 method), `portable-cooling-device-ut`, `environmental-covenant-notice-ut`.
- **Questions resolved without asking Taylor:**
  - Bounded Confirmed absent kept for radiator covers, balcony inspection, sprinkler disclosure and drywall disclosure.
  - The meth-lab cautious course is kept.
- **Fetch requests:** national code sections (IFC, IBC, IRC, IPC, ISPSC) and Admin Code R307-801, R68-7, R309 and R392.
- **Finding for another state:** `portable-cooling-device-wy` body is missing Option B.

### Batch 6: eviction, termination, courts (delivered 2026-11-08)

179 of 242 topics: 202 new UT rows, 16 tags. New tags: `criminal-activity-ky`, `barred-person-covenant-ne`, `extended-absence-notice-ks`, `owner-occupancy-termination-ar`.
- Title 78B, Chapter 6, Part 8 read whole.
- **Cure:** two tracks, (1)(c) three business days and (1)(h) three calendar days; no-cure grounds (d)-(g).
- **CARES:** the § 78B-6-802(5) limits are stated without contradicting `edu-cares-act-notice`.
- **Small claims:** $20,000 limit (§ 78A-8-102). A housing and debt-collection district court division starts 2027-01-01 (§ 78A-5-103).
- **Limitation periods:** six years on a written lease, four on an oral one.
- **Federal voucher rules:** 24 C.F.R. § 982.310 answers several termination topics.
- **Criminal-activity covenant:** tagged under rule 54. The finding on `edu-expedited-criminal-eviction-ut` records that its "no criminal-activity clause" note is superseded. Decided, not put to Taylor.
- **New clause:** `environmental-event-termination-ut`.
- **Stale cross-reference:** § 78B-2-305(2) cites 78B-9-103, which should be 78A-9-103.

### Batch 7: utilities, EV charging, telecom, solar, parking (delivered 2026-11-08)

199 of 242 topics: 230 new UT rows, 20 tags. New tags: `utility-shutoff-notice-authorization-co`, `utility-transfer-nj`, `telecom-access-mn`, `scheduled-services-entry-la`.
- **Electricity and gas:**
  - No submetering disclosure statute exists.
  - Whether a landlord reselling electricity or gas becomes a public utility (§ 54-2-1) is unsettled. Until the R746 rules and tariffs are read, no clause bills electricity or gas through a submeter or formula.
- **Water and sewer:** a special district may not shut off service at an owner's request for debt collection or eviction (§ 17B-1-901(3)(b)(ii)). Finding filed on `edu-self-help-eviction-ut`.
- **EV charging:** the 12.5% EV charging tax applies to charging station operators (§§ 59-30-101 to -103).
- **Portable solar:** the 2025 statute exempts portable solar devices from utility rules (§ 54-15-601), but it binds utilities, not landlords.
- **Telecom:** governed by federal OTARD, which is not held (fetch queued).
- **New clauses:** `utility-allowance-cap-ut`, `utility-apportionment-ut` (water, sewer and trash only), `utility-interruption-repairs-ut`, `ev-charging-shared-area-ut`, `portable-solar-device-ut`, `parking-rules-notice-ut`, `unbundled-parking-ut`, and `ev-charger-installation-ut`.
- **Withdrawn tag:** the main pass withdrew the tag of `ev-charger-installation-hi`. Its bracket allowed "Landlord's reasonable calculation", and the Utah condition sat only in notes (rule 26), so `ev-charger-installation-ut` replaces it.
- **Finding:** `edu-towing-ut` omits the 24-hour windshield-notice tow route.

### Batch 8: lease terms, notices, portals, insurance, disasters (delivered 2026-11-08)

227 of 242 topics: 264 new UT rows, 25 tags. New tags: `guaranty-as`, `rent-escalation-la`, `tax-insurance-escalation-la`, `rent-installments-or`, `emergency-contact-co`.
- **Automatic renewal:** neither renewal statute reaches leases. § 13-70-201(3)(f) excludes rental agreements, and § 15-10-102(5)(b)(ii) excludes leaseholds.
- **Electronic dealings:** a tenant's right to refuse them can't be waived (§ 46-4-105(3)), and E-SIGN excludes eviction notices.
- **Eminent domain:** § 57-12-6 directs the tenant-improvement payment to the tenant, so `eminent-domain-vi` is not tagged.
- **Condo and HOA insurance:** insurers waive subrogation against owners, not tenants.
- **Price gouging:** whether the Price Controls During Emergencies Act reaches leases is case law not read, so the cautious course applies.
- **`rules-wi` tag withdrawn (rule 26):** its fine condition sat in notes. `rules-ut` replaces it: a fine needs a stated amount, and new rules bind only on the tenant's signature.
- **New clauses:** `automatic-renewal-ut`, `eminent-domain-ut`, `agreed-notice-methods-ut`, `tenant-portal-ut`, `rules-ut`, plus the main pass's `sale-termination-ut` (rule 54; excluded during a voucher initial term).
- **Not tagged:** `automatic-renewal-ks` and `rent-increase-midterm-ky` (rent set by notice), and `tenant-portal-mn`.
- **Finding:** `edu-foreclosure-tenants-ut` omits the judicial-foreclosure tenant notice (§ 78B-6-901.5).

### Batch 9: general statutes, all topics answered (delivered 2026-11-08)

242 of 242 topics: 280 new UT rows, 29 tags. New tags: `animal-care-access-vi`, `tenant-caused-fines-as`, `farmland-sporting-rights-co`, `informal-dispute-resolution-or`.
- **Foreign entities:** an unregistered filing foreign entity may not sue (§ 16-1a-503(2), Title 16 recodified, effective 2026-10-01). Whether renting counts as "doing business" is case law not read, so the cautious course is to register first.
- **Foreign ownership:** leases are an "interest in land" under ch. 63L-13. Leasing on behalf of a restricted entity is a felony (§ 63L-13-204).
- **Construction liens:** a lien attaches only to the contracting tenant's leasehold unless the owner authorized the work (§ 38-1a-301(4)), and lien rights can't be waived (§ 38-1a-105). New clause: `tenant-work-liens-ut`.
- **Illegal use:** a lease is void for an alcohol nuisance (§ 32B-4-208(5)), and voidable for obscenity offenses (§ 76-5c-105).
- **Index gap fixed:** Utah Const. art. III (Ordinance) was in the corpus but not indexed. It is now indexed and every battery was replayed. Only UTG-J-015 changed, and it was rerun as UTG-J-016.
- **Stale cross-references:** consolidated in log §4.

### Independent check: two rounds (final delivered 2026-11-09)

Round 1 covered all 315 ids, including the proposed rows, in four sequential batches: 27 ERROR, 116 WARN.
- **Key ERRORs:**
  - Property management licensing: managing others' rentals for pay already needs a real estate license; only the separate property-manager license starts in 2027.
  - Reversed key-refusal and occupancy-permission rules.
  - Fee rule stated without its month-to-month and allowed-by-law exceptions.
  - Cut bankruptcy quotes.
  - The `security-devices-wy` tag (unstated cost) withdrawn and replaced by `security-devices-ut`.
  - Certificate-of-occupancy, meter-conservation, utility-transfer and energy-data rows moved to Not located (unheld code and R746 sources).
  - `parking-rules-notice-ut` mid-term change by notice removed.
- **Rejected:** the drug-free-housing-ca withdrawal (the checker read CA notes, not the clause).
- **Searches rerun:** four narrow or incomplete searches rerun as UTG-A-024 to UTG-A-030.

Round 2 covered the 128 rows edited after round 1: 4 ERROR, 96 WARN, mostly round-1 fixes applied only in part.
- **Saving the lease:** § 78B-6-802(2) lets the tenant save the lease after the notice period.
- **Trustee's sale:** the notice of sale is always posted at the property.
- All fixed. Rows edited after round 2 are listed in log §5.

**Final:** 281 new UT rows (69 clauses), 28 tags, 7 proposed rows (log §6); 2,330 delta quotes matched by script; all battery logs replay (UTG-B-001 superseded, UTG-J-015 superseded by J-016). No questions for Taylor.

### Rows so far

- `habitability-waiver` → `edu-habitability-waiver-ut`
- `habitability-modifiable` → `edu-habitability-modifiable-ut`
- `part5-nonwaivable` → `edu-no-general-nonwaiver-statute-ut`
- `security-deposit-nonwaiver` → `edu-no-deposit-nonwaiver-statute-ut`
- `jury-waiver` → `edu-jury-waiver-ut`
- `exculpatory-clauses` → `edu-exculpatory-clauses-ut`
- `unconscionability` → `edu-unconscionability-ut`
- `eviction-penalty-clause-ban` → `edu-eviction-charges-ut`
- `liquidated-damages` → `edu-liquidated-damages-ut`
- `waiver-by-acceptance` → `edu-rent-acceptance-waiver-ut`
- `prohibited-lease-terms` → `edu-prohibited-lease-terms-ut`
- `knowing-use-penalty` → `edu-no-knowing-use-penalty-ut`
- `notice-to-quit-waiver` → `edu-notice-to-quit-waiver-ut`
- `confession-of-judgment` → `edu-confession-of-judgment-ut`
- `casualty-and-mitigation-waivable` → `edu-casualty-mitigation-waiver-ut`
- `binding-arbitration` → `edu-binding-arbitration-ut`
- `consumer-protection-act` → `edu-consumer-sales-practices-act-ut`
- `truth-in-renting` → `edu-no-truth-in-renting-ut`
- `lease-completeness` → `edu-no-blank-space-rule-ut`
- `lease-content-requirements` → `edu-lease-content-requirements-ut`
- `plain-language` → `edu-no-plain-language-rule-ut`
- `plain-language-consumer-statement` → `edu-no-consumer-statement-rule-ut`
- `statutory-forms` → `edu-statutory-forms-ut`
- `written-notice-required` → `edu-written-notices-ut`
- `lease-notice-initial-requirement` → `edu-no-initials-requirement-ut`
- `statute-of-frauds-lease-term` → `edu-statute-of-frauds-lease-ut`
- `lease-term-limitation` → `edu-lease-term-limits-ut`
- `deposit-cost-schedule` → `edu-deposit-cost-schedule-ut`
- `deposit-cost-schedule` → `deposit-cost-schedule-ut`
- `carpet-cleaning` → `edu-no-carpet-cleaning-rule-ut`
- `carpet-cleaning` → `carpet-cleaning-ut`
- `deposit-escheat` → `edu-deposit-escheat-ut`
- `deposit-installments` → `edu-no-deposit-installments-ut`
- `deposit-last-month-rent` → `edu-deposit-last-month-rent-ut`
- `deposit-surrender-notice` → `edu-no-deposit-surrender-notice-ut`
- `security-deposit-holding` → `edu-security-deposit-holding-ut`
- `security-deposit-holding` → `deposit-trust-account-exemption-ut`
- `security-deposit-standards` → `edu-no-security-deposit-standards-ut`
- `nonrefundable-deposit-separate-notice` → `edu-no-nonrefundable-separate-notice-ut`
- `holding-deposit` → `edu-holding-deposit-ut`
- `fee-in-lieu-of-deposit` → `edu-no-fee-in-lieu-of-deposit-ut`
- `expedited-deposit-disposition` → `edu-no-expedited-deposit-disposition-ut`
- `utility-deposit-return` → `edu-utility-deposit-ut`
- `late-fee-limit` → `edu-late-fee-limit-ut`
- `fee-transparency` → `edu-fee-transparency-ut`
- `fee-transparency` → `fees-and-charges-ut`
- `fee-unprovided-service` → `edu-no-fee-unprovided-service-ut`
- `fees-as-rent` → `edu-fees-as-rent-ut`
- `pet-fees` → `edu-pet-fees-ut`
- `statutory-caps` → `edu-statutory-caps-ut`
- `government-fee-reimbursement` → `edu-government-fee-reimbursement-ut`
- `government-fee-reimbursement` → `government-fee-reimbursement-ut`
- `rent-receipts` → `edu-rent-receipts-ut`
- `rent-receipt-anti-waiver` → `edu-no-rent-receipt-anti-waiver-ut`
- `lockout-for-rent-delinquency` → `edu-lockout-for-rent-delinquency-ut`
- `alarm-tampering-fee` → `edu-alarm-tampering-fee-ut`
- `alarm-tampering-fee` → `detector-care-ut`
- `subsidy-late-fee` → `edu-subsidy-late-fee-ut`
- `rent-concession` → `edu-no-rent-concession-rule-ut`
- `association-obligations-disclosure` → `edu-no-association-disclosure-ut`
- tag UT on `showing-notice-la`
- tag UT on `rent-concession-wi`
- `dv-confidentiality` → `edu-no-dv-confidentiality-rule-ut`
- `dv-deposit-timing` → `edu-no-dv-deposit-timing-ut`
- `dv-eviction-protection` → `edu-dv-eviction-protection-ut`
- `dv-protection-order-chapter-moved` → `edu-dv-law-citations-ut`
- `dv-qualifying-documents` → `edu-dv-qualifying-documents-ut`
- `disability-accommodation` → `edu-disability-accommodation-ut`
- `protected-class-inquiry-ban` → `edu-no-protected-class-inquiry-ban-ut`
- `immigration-status` → `edu-no-immigration-status-rule-ut`
- `sex-offender-disclosure` → `edu-no-sex-offender-disclosure-ut`
- `sex-offender-disclosure` → `sex-offender-registry-notice-ut`
- `sex-offender-occupancy` → `edu-no-sex-offender-occupancy-rule-ut`
- `tenant-confidential-information` → `edu-tenant-confidential-information-ut`
- `tenant-records` → `edu-tenant-records-ut`
- `employee-screening` → `edu-employee-screening-ut`
- `senior-housing-work-card` → `edu-no-senior-housing-work-card-ut`
- `rent-reporting` → `edu-rent-reporting-ut`
- `rent-reporting` → `rent-reporting-negative-notice-ut`
- `algorithmic-rent-setting` → `edu-no-algorithmic-rent-rule-ut`
- `children-occupancy` → `edu-children-occupancy-ut`
- `veterans-incentive` → `edu-no-veterans-incentive-ut`
- `religious-cultural-display` → `edu-no-religious-display-rule-ut`
- `political-access` → `edu-political-access-ut`
- `tenant-right-to-organize` → `edu-tenant-right-to-organize-ut`
- `guest-rights` → `edu-no-guest-rights-statute-ut`
- `law-enforcement-cooperation` → `edu-law-enforcement-cooperation-ut`
- `drug-free-housing-addendum` → `edu-drug-free-housing-ut`
- tag UT on `disability-modification-restoration-mn`
- tag UT on `drug-free-housing-ca`
- `rental-inspection` → `edu-rental-inspection-ut`
- `rental-inspection` → `rental-inspection-cooperation-ut`
- `health-district-rental-rules` → `edu-health-department-rental-rules-ut`
- `single-family-zone-lease-limit` → `edu-single-family-rental-limits-ut`
- `good-cause-notice` → `edu-no-good-cause-notice-ut`
- `tenant-rights-statement` → `edu-no-tenant-rights-statement-ut`
- `rights-responsibilities-guide` → `edu-no-rights-responsibilities-guide-ut`
- `term-change-notice` → `edu-term-change-notice-ut`
- `substandard-property-receivership` → `edu-substandard-property-enforcement-ut`
- `lead-safe-certification` → `edu-lead-safe-certification-ut`
- `accessory-dwelling-unit` → `edu-accessory-dwelling-units-ut`
- `lead-state-notices` → `edu-lead-state-notices-ut`
- `certificate-of-occupancy-disclosure` → `edu-no-certificate-of-occupancy-disclosure-ut`
- `inspection-condemnation-disclosure` → `edu-inspection-order-disclosure-ut`
- `inspection-notice-penalty` → `edu-no-inspection-notice-penalty-ut`
- `condemned-premises-rent-bar` → `edu-condemned-premises-rent-ut`
- `sanitary-code-variance` → `edu-code-variance-notice-ut`
- `frozen-standard-incorporation` → `edu-code-editions-ut`
- `fire-code-standard` → `edu-fire-code-standard-ut`
- `fire-code-standard` → `fire-code-compliance-ut`
- `lease-registration` → `edu-lease-recording-ut`
- `portfolio-thresholds` → `edu-portfolio-thresholds-ut`
- `student-housing` → `edu-student-housing-ut`
- `family-child-care` → `edu-family-child-care-ut`
- `family-child-care` → `family-child-care-consent-ut`
- `home-business` → `edu-home-business-ut`
- `sfr-occupancy-disclosure` → `edu-no-sfr-occupancy-disclosure-ut`
- `term-change-notice` → `term-change-notice-ut`
- tag UT on `accessory-dwelling-unit-term-co`
- tag UT on `home-business-permission-co`
- `habitability-materiality` → `edu-habitability-materiality-ut`
- `habitability-presumption` → `edu-no-habitability-presumption-ut`
- `habitability-statement` → `edu-no-habitability-statement-ut`
- `heating` → `edu-heating-ut`
- `heating` → `heat-freeze-protection-ut`
- `stove-refrigerator` → `edu-no-stove-refrigerator-rule-ut`
- `appliances-excluded` → `edu-appliances-excluded-ut`
- `appliances-excluded` → `appliances-excluded-ut`
- `furnishings-included` → `edu-no-furnished-rental-rules-ut`
- `maintenance-duty-shift` → `edu-maintenance-duty-shift-ut`
- `promises-to-repair` → `edu-no-promises-to-repair-rule-ut`
- `promises-to-repair` → `promised-repairs-ut`
- `repair-notice` → `edu-repair-notice-ut`
- `repair-cost-termination` → `edu-repair-cost-termination-ut`
- `repair-escrow-exemption-notice` → `edu-no-repair-escrow-exemption-ut`
- `landlord-self-cure` → `edu-no-landlord-self-cure-ut`
- `landlord-self-cure` → `landlord-self-cure-ut`
- `landlord-breach-remedy` → `edu-landlord-breach-remedy-ut`
- `designated-repairer` → `edu-no-designated-repairer-rule-ut`
- `designated-repairer` → `designated-repairer-ut`
- `rent-into-court-counterclaim` → `edu-rent-into-court-counterclaim-ut`
- `shutdown-rent-protection` → `edu-no-shutdown-rent-protection-ut`
- `subsidy-habitability-proration` → `edu-subsidy-habitability-proration-ut`
- `subsidized-inspection-refusal` → `edu-subsidized-inspection-refusal-ut`
- `alt-housing` → `edu-no-alt-housing-duty-ut`
- `other-landlord-facilities` → `edu-other-landlord-facilities-ut`
- `quiet-possession` → `edu-no-quiet-possession-statute-ut`
- `tenant-statutory-duties` → `edu-tenant-statutory-duties-ut`
- `tenant-statutory-duties` → `renter-duties-ut`
- `prohibited-acts-renter` → `prohibited-acts-renter-ut`
- `confirmed-absences-habitability` → `edu-confirmed-absences-habitability-ut`
- tag UT on `furnishings-included-la`
- `fire-sprinkler-duty` → `edu-fire-sprinkler-duty-ut`
- `sprinkler-disclosure` → `edu-no-sprinkler-disclosure-ut`
- `water-heater-temperature` → `edu-water-heater-temperature-ut`
- `window-guards` → `edu-window-guards-ut`
- `steam-radiator-covers` → `edu-no-steam-radiator-cover-rule-ut`
- `pool-safety` → `edu-pool-safety-ut`
- `pool-safety` → `pool-and-spa-use-ut`
- `security-devices` → `edu-security-devices-ut`
- `smart-access` → `edu-no-smart-access-law-ut`
- `smart-access` → `smart-access-system-ut`
- `key-control-policy` → `edu-no-key-control-policy-ut`
- `common-area-lighting` → `edu-common-area-lighting-ut`
- `balcony-inspection` → `edu-no-balcony-inspection-rule-ut`
- `asbestos-hazards` → `edu-asbestos-hazards-ut`
- `bed-bug-cooperation` → `edu-bed-bug-cooperation-ut`
- `bed-bug-cooperation` → `pest-cooperation-ut`
- `pest-control-notice` → `edu-pest-control-notice-ut`
- `waterbed` → `edu-no-waterbed-rule-ut`
- `portable-cooling-device` → `edu-no-portable-cooling-right-ut`
- `portable-cooling-device` → `portable-cooling-device-ut`
- `tenant-security-cameras` → `edu-tenant-security-cameras-ut`
- `private-well-testing` → `edu-private-well-testing-ut`
- `hazardous-contamination-disclosure` → `edu-hazardous-contamination-disclosure-ut`
- `hazardous-contamination-disclosure` → `environmental-covenant-notice-ut`
- `defective-drywall-disclosure` → `edu-no-drywall-disclosure-ut`
- `prop65-rental-warning` → `edu-no-chemical-warning-rule-ut`
- `military-air-zone-disclosure` → `edu-no-military-zone-disclosure-ut`
- `ordnance-demolition-meter-disclosures` → `edu-ordnance-demolition-meter-disclosures-ut`
- `shoreline-access-disclosure` → `edu-no-shoreline-disclosure-ut`
- `energy-data-release` → `edu-no-energy-data-release-ut`
- `recycling-notice` → `edu-no-recycling-notice-ut`
- tag UT on `lock-change-ak`
- tag UT on `common-area-lighting-ks`
- tag UT on `waterbed-mn`
- tag UT on `energy-data-release-wy`
- `cure-and-eviction-grounds` → `edu-cure-and-eviction-grounds-ut`
- `nonpayment-notice` → `edu-nonpayment-notice-ut`
- `criminal-activity` → `edu-criminal-activity-ut`
- `landlord-remedies-termination` → `edu-landlord-remedies-termination-ut`
- `forfeiture-redemption` → `edu-forfeiture-redemption-ut`
- `redemption` → `edu-redemption-ut`
- `possession-bond` → `edu-possession-bond-ut`
- `eviction-hardship-stay` → `edu-eviction-hardship-stay-ut`
- `eviction-service-party` → `edu-eviction-service-party-ut`
- `cold-weather-vacate-notice` → `edu-no-cold-weather-vacate-notice-ut`
- `social-security-defense` → `edu-no-benefit-delay-defense-ut`
- `tenant-bankruptcy` → `edu-tenant-bankruptcy-ut`
- `minor-tenant-filing` → `edu-minor-tenants-ut`
- `entity-landlord-court-representation` → `edu-entity-landlord-court-representation-ut`
- `limitation-of-actions` → `edu-limitation-of-actions-ut`
- `rent-demand-bar` → `edu-no-rent-demand-bar-ut`
- `double-letting` → `edu-no-double-letting-rule-ut`
- `trespass-notice` → `edu-trespass-notice-ut`
- `tenancy-at-will` → `edu-tenancy-at-will-ut`
- `seasonal-tenancy` → `edu-seasonal-tenancy-ut`
- `extended-absence-notice` → `edu-extended-absence-notice-ut`
- `statutory-early-termination` → `edu-statutory-early-termination-ut`
- `infirmity-termination` → `edu-no-infirmity-termination-ut`
- `environmental-event-termination` → `edu-no-environmental-event-termination-ut`
- `environmental-event-termination` → `environmental-event-termination-ut`
- `owner-move-in-reservation` → `edu-owner-move-in-reservation-ut`
- tag UT on `criminal-activity-ky`
- tag UT on `barred-person-covenant-ne`
- tag UT on `extended-absence-notice-ks`
- tag UT on `owner-occupancy-termination-ar`
- `electric-submetering-disclosure` → `edu-electric-submetering-ut`
- `meter-conservation-charge` → `edu-no-meter-conservation-charge-ut`
- `utility-allowance-cap` → `edu-utility-allowance-cap-ut`
- `utility-allowance-cap` → `utility-allowance-cap-ut`
- `utility-apportionment` → `edu-utility-apportionment-ut`
- `utility-apportionment` → `utility-apportionment-ut`
- `utility-disclosure-attachment` → `edu-utility-disclosure-attachment-ut`
- `utility-disconnection-notice-authorization` → `edu-utility-disconnection-notice-ut`
- `utility-interruption-submeter` → `edu-utility-interruption-ut`
- `utility-interruption-submeter` → `utility-interruption-repairs-ut`
- `utility-landlord-account` → `edu-utility-landlord-account-ut`
- `utility-shutoff-statute` → `edu-utility-shutoff-rules-ut`
- `utility-submetering-disclosure` → `edu-utility-submetering-ut`
- `utility-transfer` → `edu-no-utility-transfer-rule-ut`
- `ev-charging-requirements` → `edu-ev-charging-requirements-ut`
- `ev-charging-end-of-tenancy` → `edu-ev-charging-end-of-tenancy-ut`
- `ev-charging-shared-area` → `edu-ev-charging-shared-area-ut`
- `ev-charging-shared-area` → `ev-charging-shared-area-ut`
- `telecom-access` → `edu-telecom-access-ut`
- `portable-solar` → `edu-portable-solar-ut`
- `portable-solar` → `portable-solar-device-ut`
- `property-tax-rent-disclosure` → `edu-property-tax-rent-statement-ut`
- `parking-rules-notice` → `edu-parking-rules-notice-ut`
- `parking-rules-notice` → `parking-rules-notice-ut`
- `unbundled-parking` → `edu-no-unbundled-parking-rule-ut`
- `unbundled-parking` → `unbundled-parking-ut`
- `periodic-services-entry` → `edu-periodic-services-entry-ut`
- `ev-charging-requirements` → `ev-charger-installation-ut`
- `security-devices` → `security-devices-ut` (replaces the withdrawn `security-devices-wy` tag)
- tag UT on `utility-shutoff-notice-authorization-co`
- tag UT on `utility-transfer-nj`
- tag UT on `telecom-access-mn`
- tag UT on `scheduled-services-entry-la`
- `automatic-renewal` → `edu-no-automatic-renewal-rule-ut`
- `automatic-renewal` → `automatic-renewal-ut`
- `guarantor-renewal` → `edu-guarantor-renewal-ut`
- `rent-installments` → `edu-no-rent-installment-rule-ut`
- `notice-to-vacate-additional-terms` → `edu-no-notice-to-vacate-terms-rule-ut`
- `conversion-notice` → `edu-conversion-notice-ut`
- `foreclosure-disclosure` → `edu-no-foreclosure-disclosure-ut`
- `sale-or-management-change` → `edu-sale-or-management-change-ut`
- `adverse-proceeding-notice` → `edu-adverse-proceeding-notice-ut`
- `eminent-domain` → `edu-eminent-domain-ut`
- `eminent-domain` → `eminent-domain-ut`
- `actual-notice-method` → `edu-actual-notice-method-ut`
- `actual-notice-method` → `agreed-notice-methods-ut`
- `tenant-portal` → `edu-tenant-portal-ut`
- `tenant-portal` → `tenant-portal-ut`
- `lease-type-parity` → `edu-no-lease-type-parity-rule-ut`
- `lease-type-size` → `edu-no-lease-type-size-rule-ut`
- `translation-duty` → `edu-no-translation-duty-ut`
- `optional-lease-terms` → `edu-no-lease-option-statute-ut`
- `required-disclosures` → `edu-required-disclosures-ut`
- `emergency-contact` → `edu-no-emergency-contact-rule-ut`
- `renters-insurance-rules` → `edu-no-renters-insurance-rule-ut`
- `landlord-liability-insurance` → `edu-no-landlord-liability-insurance-ut`
- `tenant-insurance-claims` → `edu-tenant-insurance-claims-ut`
- `disaster-duties` → `edu-disaster-duties-ut`
- `disaster-displaced-guests` → `edu-no-disaster-guest-rule-ut`
- `tpa-notice` → `edu-no-tenant-purchase-right-ut`
- `tpa-exemption-notice` → `edu-no-tpa-exemption-notice-ut`
- `tpa-sunset` → `edu-no-tenant-law-sunset-ut`
- `rent-escalation` → `edu-rent-escalation-ut`
- `tax-escalation` → `edu-tax-escalation-ut`
- `rules-regulations` → `edu-rules-regulations-ut`
- `rules-regulations` → `rules-ut`
- `sale-or-management-change` → `sale-termination-ut`
- tag UT on `guaranty-as`
- tag UT on `rent-installments-or`
- tag UT on `emergency-contact-co`
- tag UT on `rent-escalation-la`
- tag UT on `tax-insurance-escalation-la`
- `nonresident-owner-agent` → `edu-nonresident-owner-agent-ut`
- `confirmed-absences-outside-title` → `edu-confirmed-absences-outside-title-ut`
- `construction-liens` → `edu-construction-liens-ut`
- `construction-liens` → `tenant-work-liens-ut`
- `foreign-ownership` → `edu-foreign-ownership-ut`
- `purpose-limitation` → `edu-purpose-limitation-ut`
- `animal-care-access` → `edu-no-animal-care-entry-right-ut`
- `pet-eviction-fact-sheet` → `edu-no-pet-eviction-fact-sheet-ut`
- `governmental-fines` → `edu-governmental-fines-ut`
- `farmland-hunting-rights` → `edu-farmland-hunting-rights-ut`
- `tenant-employee-housing` → `edu-tenant-employee-housing-ut`
- `informal-dispute-resolution` → `edu-no-informal-dispute-rule-ut`
- `usufructuary-lessor` → `edu-no-usufructuary-lessor-ut`
- `special-district-representation` → `edu-no-special-district-statement-ut`
- `communal-land-lease-approval` → `edu-tribal-land-lease-approval-ut`
- `confirmed-absences-misc` → `edu-confirmed-absences-misc-ut`
- tag UT on `animal-care-access-vi`
- tag UT on `tenant-caused-fines-as`
- tag UT on `farmland-sporting-rights-co`
- tag UT on `informal-dispute-resolution-or`

### Proposed overrides (log §6)
- `hoa-compliance-ut` (supersedes `hoa-compliance`)
- `keys-ut` (supersedes `keys`)
- `parking-vehicle-rules-ut` (supersedes `parking-vehicle-rules`)
- `smoking-policy-ut` (supersedes `smoking-policy`)
- `early-termination-ut` (supersedes `early-termination-ks`)
- `edu-property-manager-license-ut` (new; topic outside the missing list)

### Open items
- Pass complete. Proposed overrides in log §6 (`keys-ut`, `parking-vehicle-rules-ut`, `smoking-policy-ut`, `hoa-compliance-ut`, `early-termination-ut`, `edu-property-manager-license-ut`) await sync; 22 delta rows point to them. Fetch queue in log §1.
- Independent check not yet run.

# Topic gaps pass (end-of-run consistency pass, 2026-11-08/09): Desktop's log

## Topic gaps: Utah - gaps log (final, 2026-11-09: all 242 topics, independent check complete (2 rounds))

Generated 2026-11-09 from the pass's answer files: A_waivers, B_deposits_fees, C_dv_classes, D_local_inspection, E_habitability, F_safety, G_eviction_termination, H_lease_terms, I_utilities, J_general, M_main.
Companion file: `lease-clauses-UT-gaps-delta.csv` (new rows plus tagged rows, all 17 columns, CRLF).

### 1. Sources, channel and currency

**Utah Code and Constitution (primary channel).** The corpus Taylor attached, `corpus-UT-20261108.tar.xz` (downloaded by
Claude Code on 2026-11-08 from le.utah.gov, the Office of Legislative Research and General Counsel): 96 title files of
the Utah Code as official XML, the Utah Constitution XML (23 articles, 189 sections), the code index and title pages, and
the passed-bill lists for 2025GS, 2026GS, 2025S1 and 2025S2. Its .sha256 and its manifest were verified before use. Every
section was read from the XML, which carries each section's History line and any dated versions (`[until ...]`,
`[effective ...]`); the pass's index renders 27,898 code section records and 189 constitution sections (27,881 records
match the corpus's own STATUTES.TXT exactly; the rest differ only in table spacing in unrelated titles).

**Currency.** History lines run through the 2026 General Session. The Legislature's sessions page
(https://le.utah.gov/sessions/sessions.jsp, read 2026-11-08 in the built-in browser; page text SHA-256 f30019b2...)
lists no 2026 special session, and the 2026S1-S3 passed-bill pages return HTTP 500, consistent with none. Later-dated
versions in the corpus (for example sections `[effective 1/1/2027]`) are noted on the rows that rely on them.

**Not held in the corpus** (rows whose answer would sit there are Not located or Present (partly), never Confirmed
absent): Utah Administrative Code (except R608-1, below), Utah Rules of Civil Procedure and Judicial Council forms,
session-law text, case law (none read in this pass; rows say "case law not read" and give the cautious course) and local
ordinances (named where met, never researched: Salt Lake City, Provo, Ogden, West Valley City).

**Other sources read** (built-in browser; the workspace shell is blocked by the proxy, so every web read went through
the browser). uscode.house.gov section pages returned 404 to the browser, so U.S. Code text was read from govinfo.gov's
U.S. Code 2024 edition (the same Office of the Law Revision Counsel text; pre-approved federal channel per rule 12);
regulations from ecfr.gov. Each file below is saved with its CITATION, URL, READ date and a separator, and is the only
basis for any sentence on federal law or the Admin Code (gaps log s4 class decision 10):


- `11 U.S.C. § 362`: https://www.govinfo.gov/content/pkg/USCODE-2024-title11/html/USCODE-2024-title11-chap3-subchapIV-sec362.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `11 U.S.C. § 365`: https://www.govinfo.gov/content/pkg/USCODE-2024-title11/html/USCODE-2024-title11-chap3-subchapIV-sec365.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 1681a`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap41-subchapIII-sec1681a.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 1681m`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap41-subchapIII-sec1681m.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 1681s-2`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap41-subchapIII-sec1681s-2.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 1681w`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap41-subchapIII-sec1681w.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 7001`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap96-subchapI-sec7001.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 7003`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap96-subchapI-sec7003.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 7006`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap96-subchapI-sec7006.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `15 U.S.C. § 9058`: https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap116-subchapIII-partA-sec9058.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `16 C.F.R. § 682.3`: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-F/part-682/section-682.3 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 100.201`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/part-100/subpart-D/section-100.201 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 100.202`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/part-100/subpart-D/section-100.202 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 100.203`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/part-100/subpart-D/section-100.203 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 100.204`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/part-100/subpart-D/section-100.204 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 982.308`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-982/subpart-G/section-982.308 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 982.310`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-982/subpart-G/section-982.310 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `24 C.F.R. § 982.404`: https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-982/subpart-I/section-982.404 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `34 U.S.C. § 12491`: https://www.govinfo.gov/content/pkg/USCODE-2024-title34/html/USCODE-2024-title34-subtitleI-chap121-subchapIII-partL-subpart2-sec12491.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `40 C.F.R. § 745.103`: https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-F/section-745.103 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `40 C.F.R. § 745.113`: https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-F/section-745.113 (read 2026-11-08; Electronic Code of Federal Regulations (ecfr.gov), up to date as of 11/05/2026)
- `42 U.S.C. § 3602`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3602.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 3603`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3603.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 3604`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3604.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 3605`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3605.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 3606`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3606.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 3607`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3607.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 3617`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3617.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `42 U.S.C. § 4852d`: https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap63A-subchapI-sec4852d.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `50 U.S.C. § 3931`: https://www.govinfo.gov/content/pkg/USCODE-2024-title50/html/USCODE-2024-title50-chap50-subchapII-sec3931.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `50 U.S.C. § 3951`: https://www.govinfo.gov/content/pkg/USCODE-2024-title50/html/USCODE-2024-title50-chap50-subchapIII-sec3951.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `50 U.S.C. § 3955`: https://www.govinfo.gov/content/pkg/USCODE-2024-title50/html/USCODE-2024-title50-chap50-subchapIII-sec3955.htm (read 2026-11-08; United States Code, 2024 Edition (govinfo.gov, U.S. Government Publishing Office); source credit and notes as printed below)
- `Utah Admin. Code R608-1`: https://adminrules.utah.gov/api/rule/1493/file/367b3342-a00d-4737-ac90-9557c1aa2cba.html (the Code page's "Download HTML" button for R608-1) (read 2026-11-08; Utah Fair Housing Rules (Labor Commission, Antidiscrimination and Labor, Fair Housing); Effective Date: 11/21/2011; Rule Type: Current Rule (adminrules.utah.gov)

**Fetch queue (sources a row needs that were not reached):** 
- Utah Admin. Code R162-2f (Utah Real Estate Commission and Division of Real Estate rules under Title 61, Chapter 2f), the trust-account provisions for principal brokers and property managers: security-deposit-holding (slice B): Utah Code Ann. § 61-2f-411(3)(c)(iii) and (5)(a) make trust accounts subject to 'rules established by the commission or division'. The rules would settle how tenant deposits must be deposited, recorded and reconciled, whether the Utah Code Ann. § 61-2f-411(4) exemption also lifts any separate-handling duty, and the interest-bearing account conditions. Rows edu-security-deposit-holding-ut and deposit-trust-account-exemption-ut state the statute only and say the rules were not read. (B_deposits_fees)
- Utah R. Evid. 301 (court rule: presumptions in civil cases), utcourts.gov: rent-receipts (slice B): the topic asks whether a receipt for later rent creates a presumption that earlier rent was paid (Guam and Puerto Rico have such rules). No section of the Utah Code sets one (Battery UTG-B-032). The rule would show whether Utah's evidence rules supply any general presumption framework; a specific prior-payment presumption, if any, would be case law (not read). Row edu-rent-receipts-ut says the point is for court rules and case law. (B_deposits_fees)
- International Fire Code, 2024 edition (International Code Council), as incorporated by Utah Code Ann. § 15A-5-103(1): the provisions on maintaining, removing or tampering with fire protection and smoke or carbon monoxide alarm equipment (IFC chapter 9), read with the Utah amendments in Title 15A, Chapter 5, Part 2: alarm-tampering-fee (slice B): the topic asks whether the law bars tampering with an alarm and sets a fee or penalty. The Utah Code has no such section (Battery UTG-B-036), but the State Fire Code incorporates the IFC by reference and its text is not held; rows edu-alarm-tampering-fee-ut and detector-care-ut say so. Also bears on edu-alarms-ut, which left the adopted code text unread. (B_deposits_fees)
- FEDERAL: 24 C.F.R. § 966.4 (public housing lease requirements, including charges for late payment), the HUD tenancy addendum for the Housing Choice Voucher program (form HUD-52641-A, which 24 C.F.R. § 982.308(f) makes part of the lease), and the late-charge rules for project-based Section 8 (24 C.F.R. Part 880 or 886 lease provisions, and HUD Handbook 4350.3 if the main pass treats it as a source): subsidy-late-fee and fees-as-rent (slice B): the fetched 24 C.F.R. §§ 982.308 and 982.310 do not address late fees. These sources would settle whether federal rules cap or bar late fees for public housing, voucher and project-based tenants and whether fees may be treated as rent for them; edu-subsidy-late-fee-ut and edu-fees-as-rent-ut state Utah law and say the federal limits were not read. (B_deposits_fees)
- Local board of health housing, sanitation or rental-housing regulations adopted under Utah Code Ann. § 26A-1-121 (each local health department's published regulations), and Utah Admin. Code Title R392 (Department of Health and Human Services environmental health and general sanitation rules): health-district-rental-rules (slice D): Utah Code Ann. §§ 57-22-3(1) and 57-22-5(1)(a) bind owners and renters to 'the rules of the board of health having jurisdiction', and no Utah Code section requires a landlord to provide those rules or refer a tenant (Battery UTG-D-004). The local regulations and R392 would show whether any local or state health rule sets rental housing standards, requires an owner to give tenants a copy on request, or sets a tenant complaint route. Row edu-health-department-rental-rules-ut states them as not located. (D_local_inspection)
- Utah Admin. Code Title R307 lead-based paint rules adopted under Utah Code Ann. § 19-2-104(1)(i) and (3)(b)(vi) (the Air Quality Board's lead-based paint accreditation, certification and work practice rules), and FEDERAL: 40 C.F.R. Part 745, Subpart E (Residential Property Renovation), in particular 40 C.F.R. §§ 745.82, 745.84: lead-state-notices and lead-safe-certification (slice D): the Utah Code has no landlord or lease lead rule (Battery UTG-D-014), but Utah Code Ann. § 19-2-104(1)(i) authorizes rules implementing TSCA sections 402 and 406. The rules would show whether Utah requires pre-renovation information to occupants of rental housing, or any owner duty when renovating, and confirm that no rule creates a lead-safe certificate for rental units. Rows edu-lead-state-notices-ut and edu-lead-safe-certification-ut state these as not located. (D_local_inspection)
- Variance and exception provisions in local board of health regulations adopted under Utah Code Ann. § 26A-1-121, and in Utah Admin. Code Title R392 and Title R710 (State Fire Prevention Board rules): sanitary-code-variance (slice D): no Utah Code section requires a health, housing, building or fire code variance or exception for a rental to be given to tenants or attached to the lease (Battery UTG-D-019). Any such duty, and any health-code variance procedure for rental housing, would be in local health regulations or the Admin Code. Row edu-code-variance-notice-ut states it as not located. (D_local_inspection)
- Utah R. Civ. P. 13 (counterclaim and cross-claim), Utah R. Civ. P. 26.3 (unlawful detainer actions) and Utah R. Civ. P. 62 (stay of proceedings to enforce a judgment), current compilation on utcourts.gov (court rules): rent-into-court-counterclaim (slice E): Utah Code Ann. § 78B-6-807(3)(b) sends an unlawful detainer counterclaim to the Utah Rules of Civil Procedure, and no Code section says whether a tenant's claims against the landlord (habitability, deposit) are compulsory counterclaims in an eviction or whether a stay pending appeal needs a bond or rent deposit. Rule 13 would settle compulsory counterclaims, Rule 26.3 any eviction-specific disclosure or deposit duty, Rule 62 the stay. Row edu-rent-into-court-counterclaim-ut states these as not held. (E_habitability)
- FEDERAL: 24 C.F.R. § 982.405 (PHA unit inspection) and 24 C.F.R. § 982.551 (obligations of participant, including allowing the PHA to inspect the unit), eCFR current text: subsidized-inspection-refusal (slice E): no Utah statute addresses inspections of voucher units (Battery UTG-E-018); 24 C.F.R. § 982.404 (fetched) cross-refers to § 982.405 for inspections. Section 982.405 would state the inspection schedule and owner obligations; § 982.551 whether a family's refusal to allow inspection is a program violation. Row edu-subsidized-inspection-refusal-ut states both as not held. (E_habitability)
- International Fire Code, 2024 edition, Sections 901.6 (inspection, testing and maintenance of fire protection systems), 903.2.8 (Group R, base text before the Utah rewrite) and Chapter 11 Section 1103.5 (sprinkler requirements for existing buildings, including 1103.5.4 high-rise); International Building Code, 2024 edition, Section 903.2.8; International Residential Code, 2021 edition, Section P2904 (as incorporated by Utah Code Ann. §§ 15A-2-103(1)(a), (b) and 15A-5-103(1)): fire-sprinkler-duty (slice F): whether existing apartment buildings must be retrofitted, the design standard for optional IRC sprinklers (P2904), and the owner maintenance and testing schedule all sit in the national code text, not held. Row edu-fire-sprinkler-duty-ut states only the Utah amendments. Complements slice B fetch of IFC chapter 9 alarm provisions. (F_safety)
- International Plumbing Code, 2024 edition, and International Residential Code, 2021 edition (Chapters 27 to 29), as incorporated by Utah Code Ann. § 15A-2-103(1): the provisions on water heater temperature controls and the maximum hot or tempered water delivery temperature at showers, tubs and lavatories: water-heater-temperature (slice F): Utah Code sets no water heater temperature or turnover rule (Battery UTG-F-004); any temperature limit for rental fixtures would sit in the adopted plumbing codes, not held. Row edu-water-heater-temperature-ut is Present (partly) on that basis. (F_safety)
- International Residential Code, 2021 edition, Sections R310 (emergency escape and rescue openings, including bars, grilles, covers and screens) and R312 (guards and window fall protection, including the R312.2 that Utah Code Ann. § 15A-3-202(29) deletes); International Building Code, 2024 edition, Sections 1015.8 (window openings) and 1031 (emergency escape and rescue openings), as incorporated by Utah Code Ann. § 15A-2-103(1)(a), (b): window-guards (slice F): the Utah Code has no window-guard or security-bar rule (Battery UTG-F-004); whether the adopted codes require window fall protection in apartments, what Utah removed by deleting IRC R312.2, and whether bars over an escape window must release from inside sit in the national code text, not held. Row edu-window-guards-ut is Present (partly). (F_safety)
- International Swimming Pool and Spa Code, 2024 edition, residential provisions (including Section 305 barrier requirements), as incorporated by Utah Code Ann. § 15A-2-103(1)(n) and amended by Utah Code Ann. § 15A-3-1001; and Utah Admin. Code R392-302 (Design, Construction and Operation of Public Pools), adopted under Utah Code Ann. § 26B-7-402, including its definitions and scope as they reach pools at apartment complexes, condominiums and associations: pool-safety (slice F): Utah Code has no tenancy pool rule (Battery UTG-F-005); the barrier, gate and cover rules and whether an apartment pool is a public pool sit in the ISPSC text and R392-302, not held. Row edu-pool-safety-ut is Present (partly). (F_safety)
- International Fire Code, 2024 edition, Section 1008 (means of egress illumination, including emergency power for illumination) and the Chapter 11 provisions on means of egress illumination in existing buildings, as incorporated by Utah Code Ann. § 15A-5-103(1): common-area-lighting (slice F): the Utah Code sets no lighting standard for rental common areas (Battery UTG-F-008); corridor, stair and exit lighting in existing apartment buildings would sit in the IFC text, not held. Row edu-common-area-lighting-ut is Present (partly). (F_safety)
- Utah Admin. Code R307-801 (Asbestos), adopted under Utah Code Ann. § 19-2-104(1)(d), (3)(b)(iv); and FEDERAL: 40 C.F.R. Part 61, Subpart M (National Emission Standard for Asbestos, including the owner or operator notification before demolition or renovation, 40 C.F.R. § 61.145) and 40 C.F.R. Part 763 (eCFR current text): asbestos-hazards (slice F): Utah Code sets no tenant asbestos notice (Battery UTG-F-009) but delegates asbestos work, inspection and notification rules to R307-801 and the federal NESHAP; whether those reach a residential landlord renovating an occupied building, and any notice to occupants, sits in those texts. Row edu-asbestos-hazards-ut is Present (partly). (F_safety)
- Utah Admin. Code R68-7 (Utah Pesticide Control Act rules, adopted under Utah Code Ann. § 4-14-106), especially any notification, posting or re-entry provisions for structural or residential applications; and the Department of Health and Human Services rules adopted under Utah Code Ann. § 26B-7-405 (vector and pest control, Utah Admin. Code Title R392): pest-control-notice and bed-bug-cooperation (slice F): the Utah Code has no pesticide notice to tenants and no bed bug or pest-cooperation rule (Battery UTG-F-009); any notice, posting or treatment-cooperation rule would sit in these rules, not held. Rows edu-pest-control-notice-ut (Not located) and edu-bed-bug-cooperation-ut (Present (partly)). (F_safety)
- Utah Admin. Code Title R309 (Drinking Water), especially the public water system definitions, monitoring and the public notification rule (R309-220), as adopted under Utah Code Ann. §§ 19-4-104 and 19-4-108; and local health department regulations on private (non-public) culinary wells: private-well-testing (slice F): the Utah Code has no private well testing or tenant disclosure rule (Battery UTG-F-013); a landlord-run well serving 15 connections or 25 people is a public water system whose monitoring and notice duties sit in R309, and smaller private wells fall to local health rules, neither held. Row edu-private-well-testing-ut is Present (partly). (F_safety)
- Utah Judicial Council eviction forms on utcourts.gov (any form notice to pay rent or vacate, and the landlord's complaint and summons packet); Utah R. Civ. P. 6 (court rule: computing time, and any added days for service by mail): nonpayment-notice (slice G): would settle whether the courts publish an optional pay-or-vacate form (no statute requires one: Utah Code Ann. § 78B-6-802(1)(c) prescribes no wording) and whether a court rule adds days when the pre-suit notice is mailed under Utah Code Ann. § 78B-6-805(1)(b). edu-nonpayment-notice-ut is VERIFIED on the statute and gives a cautious course that works under either reading. (G_eviction_termination)
- Utah R. Civ. P. 62 (court rule: stay of proceedings to enforce a judgment) and Utah R. App. P. 8 (court rule: stay or injunction pending appeal), utcourts.gov: eviction-hardship-stay (slice G): no statute stays an eviction for hardship (Battery UTG-G-008); whether a post-judgment motion or a 10-day appeal under Utah Code Ann. § 78B-6-813 stays an order of restitution, and on what bond, is set by these court rules. edu-eviction-hardship-stay-ut says so and is VERIFIED on the statutes. (G_eviction_termination)
- Utah R. Civ. P. 4 (court rule: service of the summons, including service on an agent authorized by appointment or by law to receive process), utcourts.gov: eviction-service-party (slice G): would settle whether a person the tenant appoints in the lease can receive the summons in an unlawful detainer action, and how Rule 4 works with Utah Code Ann. § 75E-11-313(1) (the Department of Criminal Justice is the agent authorized to receive process for a Safe at Home participant). No statute provides a lease designee (Battery UTG-G-009); edu-eviction-service-party-ut gives the cautious course and is VERIFIED. (G_eviction_termination)
- Utah R. Civ. P. 17 (court rule: parties; representation of minors and guardians ad litem), utcourts.gov: minor-tenant-filing (slice G): would say how a minor tenant or lease signer named under Utah Code Ann. § 78B-6-806(1)(a) is represented in an unlawful detainer action. edu-minor-tenants-ut is VERIFIED on the statutes and says the court rules are not held. (G_eviction_termination)
- Utah Code of Judicial Administration Rule 14-802 (court rule: authorization to practice law, including any exceptions for non-lawyers, licensed paralegal practitioners and entity employees) and the Utah Rules of Small Claims Procedure (court rules: who may represent a party), utcourts.gov: entity-landlord-court-representation (slice G): Utah Code Ann. § 78A-9-103(1)(c) defines the practice of law by Rule 14-802, and Utah Code Ann. § 78A-8-102(6)(b) leaves non-employee small claims representation to the small claims rules. These rules settle whether a non-lawyer (employee, property manager, licensed paralegal practitioner) may file or appear in an eviction for an LLC or corporate landlord. edu-entity-landlord-court-representation-ut gives the cautious course (licensed lawyer) and is VERIFIED. (G_eviction_termination)
- FEDERAL: 15 U.S.C. § 7002 (exemption to preemption: when a state enactment of the Uniform Electronic Transactions Act modifies, limits or supersedes 15 U.S.C. § 7001), govinfo U.S. Code 2024 edition: slice H, tenant-portal and actual-notice-method: would settle whether Utah Code Ann. Title 46, Chapter 4 displaces the E-SIGN consumer-consent rule (15 U.S.C. § 7001(c)) for Utah tenancies. edu-tenant-portal-ut gives the cautious course of meeting both, so no row rests on it and both stay VERIFIED. (H_lease_terms)
- Utah Admin. Code R162-2f (Real Estate Licensing and Practices Rules), especially any rule on a licensee buying, selling or leasing real estate as a principal (disclosure of licensed status and of an own interest, its timing, form and placement), adopted under Utah Code Ann. Title 61, Chapter 2f; adminrules.utah.gov: slice H, required-disclosures: Utah Code Ann. § 61-2f-401(10) requires a licensee to disclose in writing whether a rental is made for that person or an undisclosed principal; whether the rules add a licensed-status statement or a set format (South Carolina question) is in the Admin Code. edu-required-disclosures-ut states the statute and names the gap; the row does not rest on the rules. Distinct from slice B fetch of R162-2f trust-account rules (same chapter; one fetch can serve both). (H_lease_terms)
- Utah governor executive orders currently in force (and any local emergency orders) that affect residential tenancies, issued under Utah Code Ann. §§ 53-2a-206 and 53-2a-209 (Office of Administrative Rules executive order filings, rules.utah.gov; governor.utah.gov): slice H, disaster-duties: an executive order can suspend enforcement of a statute or impose tenancy measures during a declared emergency (Utah Code Ann. § 53-2a-209(4)); none is held. edu-disaster-duties-ut tells landlords to check current orders and does not rest on any; a currency check at delivery would confirm none is in force. (H_lease_terms)
- Utah Admin. Code Title R746 (Public Service Commission rules), in particular R746-200 (residential utility service rules for electric, gas, water and sewer utilities: deposits, termination of service, winter and medical protections, third-party notice designation, master-metered and landlord-held accounts) and any rule on submetering, resale or redistribution of electricity, gas or water by a property owner, adminrules.utah.gov: Slice I utility topics: the Utah Code has no utility-company shutoff protections, third-party notice rule, landlord-account rule or landlord submetering rule (Batteries UTG-I-001, UTG-I-003, UTG-I-004); the answers would sit in the commission's rules. Rows edu-electric-submetering-ut, edu-utility-submetering-ut, edu-utility-shutoff-rules-ut, edu-utility-disconnection-notice-ut, edu-utility-landlord-account-ut, edu-utility-interruption-ut, edu-no-meter-conservation-charge-ut. The rules would also show whether the commission treats a landlord reselling electricity or gas as a public utility (Utah Code Ann. § 54-2-1(24)(b)(ii)). (I_utilities)
- Public Service Commission-approved tariffs: Rocky Mountain Power's Utah Electric Service Regulations and the Utah natural gas tariff of Enbridge Gas Utah (formerly Dominion Energy Utah), the provisions on resale, redistribution or submetering by a customer, landlord or master-metered accounts, and termination of service, psc.utah.gov: edu-electric-submetering-ut: whether a landlord may resell or submeter electricity or gas bought under a tariff is likely governed by the tariff's resale terms, not held; the row's cautious course (no landlord electric or gas submetering clause) stands until read. (I_utilities)
- Utah Admin. Code Title R70 (Department of Agriculture and Food), the weights and measures rules adopted under Utah Code Ann. §§ 4-9-103, 4-9-106 and 4-9-118, including any adoption or modification of NIST Handbook 44 (current edition), and Handbook 44 Section 3.40 (Electric Vehicle Fueling Systems) and any electricity-meter provisions: edu-ev-charging-requirements-ut (and the Kansas question): Utah Code Ann. § 4-9-106 makes Handbook 44 govern commercial measuring devices unless the department modifies it; whether a landlord's charger that bills tenants by the kilowatt-hour must be registered, tested or price-posted sits in the R70 rules and Handbook 44, not held. The same rules would show whether a landlord's water or electric submeter used for billing is a commercial device (edu-utility-submetering-ut). (I_utilities)
- FEDERAL: 47 C.F.R. § 1.4000 (Restrictions impairing reception of television broadcast signals, direct broadcast satellite services or multichannel multipoint distribution services, and the transmission of fixed wireless signals), eCFR current text: edu-telecom-access-ut (Not located) and the tag of telecom-access-mn: the Utah Code has no tenant antenna, dish or provider-access rule (Battery UTG-I-008); the federal over-the-air reception devices rule may limit a landlord's antenna and dish restrictions, including in areas within a tenant's exclusive use. Reading it would let the row state the federal rule and its exceptions (safety, historic preservation, common areas) and confirm that the tagged clause's deference sentence suffices. (I_utilities)
- FEDERAL: 25 U.S.C. § 415 (leases of restricted Indian lands; Secretary of the Interior approval) and 25 C.F.R. Part 162, Subparts A and C (residential leases of Indian land: approval, effectiveness, rent payment before approval), govinfo U.S. Code and eCFR current text: communal-land-lease-approval (slice J): no Utah statute requires approval of a lease of tribal, Indian or communal land (Battery UTG-J-016); the approval rule would sit in federal Indian land-leasing law, and Utah Code Ann. § 9-9-208 disclaims state authority over trust and restricted Indian property. `edu-tribal-land-lease-approval-ut` is Not located until these are read; it would then state the federal approval rule and its effect on rent and possession. (J_general)
- International Building Code 2024 Section 111 and International Residential Code 2021 Section R110 (certificate of occupancy), as incorporated by Utah Code Ann. § 15A-2-103(1)(a), (b): certificate-of-occupancy-disclosure (independent check r1): whether a unit may be occupied before a certificate issues sits in the incorporated codes; edu-no-certificate-of-occupancy-disclosure-ut is Not located until read. (M_main)
- FEDERAL: 40 C.F.R. § 745.101 (exemptions from the lead disclosure rule), eCFR current text: lead-safe-certification and lead-state-notices (independent check r1): the rows state the target-housing rule from 40 C.F.R. §§ 745.103 and 745.113 and say the further exemptions were not read. (M_main)
- Utah Admin. Code R746 (Public Service Commission), customer-data and usage-information rules for electric, gas and water utilities: energy-data-release (independent check r1): whether a utility may release a tenant customer's usage data to a landlord sits in commission rules; edu-no-energy-data-release-ut is Not located until read. (M_main)
- Utah Admin. Code R746 (Public Service Commission) rules on demand-side management and on-bill programs, account closure for occupied premises and customer notice; Rocky Mountain Power and Enbridge Gas Utah tariffs on the same: meter-conservation-charge and utility-transfer (independent check r1): both rows are Not located until read. (M_main)

### 2. Topics answered

242 of 242 missing topics answered so far (281 new rows, 28 tagged rows).

- `accessory-dwelling-unit`: `edu-accessory-dwelling-units-ut` (new, Present, VERIFIED); `accessory-dwelling-unit-term-co` (tagged).
- `actual-notice-method`: `edu-actual-notice-method-ut` (new, Present (partly), VERIFIED); `agreed-notice-methods-ut` (new, Present, VERIFIED).
- `adverse-proceeding-notice`: `edu-adverse-proceeding-notice-ut` (new, Present (partly), VERIFIED).
- `alarm-tampering-fee`: `edu-alarm-tampering-fee-ut` (new, Present (partly), VERIFIED); `detector-care-ut` (new, Present (partly), VERIFIED).
- `algorithmic-rent-setting`: `edu-no-algorithmic-rent-rule-ut` (new, Confirmed absent, VERIFIED).
- `alt-housing`: `edu-no-alt-housing-duty-ut` (new, Confirmed absent, VERIFIED).
- `animal-care-access`: `edu-no-animal-care-entry-right-ut` (new, Confirmed absent, VERIFIED); `animal-care-access-vi` (tagged).
- `appliances-excluded`: `edu-appliances-excluded-ut` (new, Present, VERIFIED); `appliances-excluded-ut` (new, Present, VERIFIED).
- `asbestos-hazards`: `edu-asbestos-hazards-ut` (new, Present (partly), VERIFIED).
- `association-obligations-disclosure`: `edu-no-association-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `automatic-renewal`: `edu-no-automatic-renewal-rule-ut` (new, Confirmed absent, VERIFIED); `automatic-renewal-ut` (new, Confirmed absent, VERIFIED).
- `balcony-inspection`: `edu-no-balcony-inspection-rule-ut` (new, Confirmed absent, VERIFIED).
- `bed-bug-cooperation`: `edu-bed-bug-cooperation-ut` (new, Present (partly), VERIFIED); `pest-cooperation-ut` (new, Present, VERIFIED).
- `binding-arbitration`: `edu-binding-arbitration-ut` (new, Present, VERIFIED).
- `carpet-cleaning`: `edu-no-carpet-cleaning-rule-ut` (new, Confirmed absent, VERIFIED); `carpet-cleaning-ut` (new, Present, VERIFIED).
- `casualty-and-mitigation-waivable`: `edu-casualty-mitigation-waiver-ut` (new, Confirmed absent, VERIFIED).
- `certificate-of-occupancy-disclosure`: `edu-no-certificate-of-occupancy-disclosure-ut` (new, Not located, VERIFIED).
- `children-occupancy`: `edu-children-occupancy-ut` (new, Present, VERIFIED).
- `cold-weather-vacate-notice`: `edu-no-cold-weather-vacate-notice-ut` (new, Confirmed absent, VERIFIED).
- `common-area-lighting`: `edu-common-area-lighting-ut` (new, Present (partly), VERIFIED); `common-area-lighting-ks` (tagged).
- `communal-land-lease-approval`: `edu-tribal-land-lease-approval-ut` (new, Not located, VERIFIED).
- `condemned-premises-rent-bar`: `edu-condemned-premises-rent-ut` (new, Present (partly), VERIFIED).
- `confession-of-judgment`: `edu-confession-of-judgment-ut` (new, Present, VERIFIED).
- `confirmed-absences-habitability`: `edu-confirmed-absences-habitability-ut` (new, Confirmed absent, VERIFIED).
- `confirmed-absences-misc`: `edu-confirmed-absences-misc-ut` (new, Confirmed absent, VERIFIED).
- `confirmed-absences-outside-title`: `edu-confirmed-absences-outside-title-ut` (new, Present (partly), VERIFIED).
- `construction-liens`: `edu-construction-liens-ut` (new, Present, VERIFIED); `tenant-work-liens-ut` (new, Present, VERIFIED).
- `consumer-protection-act`: `edu-consumer-sales-practices-act-ut` (new, Present (partly), VERIFIED).
- `conversion-notice`: `edu-conversion-notice-ut` (new, Present (partly), VERIFIED).
- `criminal-activity`: `edu-criminal-activity-ut` (new, Present, VERIFIED); `criminal-activity-ky` (tagged).
- `cure-and-eviction-grounds`: `edu-cure-and-eviction-grounds-ut` (new, Present, VERIFIED).
- `defective-drywall-disclosure`: `edu-no-drywall-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `deposit-cost-schedule`: `edu-deposit-cost-schedule-ut` (new, Present, VERIFIED); `deposit-cost-schedule-ut` (new, Present, VERIFIED).
- `deposit-escheat`: `edu-deposit-escheat-ut` (new, Present, VERIFIED).
- `deposit-installments`: `edu-no-deposit-installments-ut` (new, Confirmed absent, VERIFIED).
- `deposit-last-month-rent`: `edu-deposit-last-month-rent-ut` (new, Present (partly), VERIFIED).
- `deposit-surrender-notice`: `edu-no-deposit-surrender-notice-ut` (new, Confirmed absent, VERIFIED).
- `designated-repairer`: `edu-no-designated-repairer-rule-ut` (new, Confirmed absent, VERIFIED); `designated-repairer-ut` (new, Confirmed absent, VERIFIED).
- `disability-accommodation`: `disability-modification-restoration-mn` (tagged); `edu-disability-accommodation-ut` (new, Present, VERIFIED).
- `disaster-displaced-guests`: `edu-no-disaster-guest-rule-ut` (new, Confirmed absent, VERIFIED).
- `disaster-duties`: `edu-disaster-duties-ut` (new, Present (partly), VERIFIED).
- `double-letting`: `edu-no-double-letting-rule-ut` (new, Confirmed absent, VERIFIED).
- `drug-free-housing-addendum`: `drug-free-housing-ca` (tagged); `edu-drug-free-housing-ut` (new, Present, VERIFIED).
- `dv-confidentiality`: `edu-no-dv-confidentiality-rule-ut` (new, Confirmed absent, VERIFIED).
- `dv-deposit-timing`: `edu-no-dv-deposit-timing-ut` (new, Confirmed absent, VERIFIED).
- `dv-eviction-protection`: `edu-dv-eviction-protection-ut` (new, Present (partly), VERIFIED).
- `dv-protection-order-chapter-moved`: `edu-dv-law-citations-ut` (new, Present, VERIFIED).
- `dv-qualifying-documents`: `edu-dv-qualifying-documents-ut` (new, Present, VERIFIED).
- `electric-submetering-disclosure`: `edu-electric-submetering-ut` (new, Present (partly), VERIFIED).
- `emergency-contact`: `edu-no-emergency-contact-rule-ut` (new, Confirmed absent, VERIFIED); `emergency-contact-co` (tagged).
- `eminent-domain`: `edu-eminent-domain-ut` (new, Present (partly), VERIFIED); `eminent-domain-ut` (new, Present (partly), VERIFIED).
- `employee-screening`: `edu-employee-screening-ut` (new, Present (partly), VERIFIED).
- `energy-data-release`: `edu-no-energy-data-release-ut` (new, Not located, VERIFIED); `energy-data-release-wy` (tagged).
- `entity-landlord-court-representation`: `edu-entity-landlord-court-representation-ut` (new, Present (partly), VERIFIED).
- `environmental-event-termination`: `edu-no-environmental-event-termination-ut` (new, Confirmed absent, VERIFIED); `environmental-event-termination-ut` (new, Confirmed absent, VERIFIED).
- `ev-charging-end-of-tenancy`: `edu-ev-charging-end-of-tenancy-ut` (new, Present (partly), VERIFIED).
- `ev-charging-requirements`: `edu-ev-charging-requirements-ut` (new, Present (partly), VERIFIED); `ev-charger-installation-ut` (new, Present (partly), VERIFIED).
- `ev-charging-shared-area`: `edu-ev-charging-shared-area-ut` (new, Present (partly), VERIFIED); `ev-charging-shared-area-ut` (new, Present, VERIFIED).
- `eviction-hardship-stay`: `edu-eviction-hardship-stay-ut` (new, Present (partly), VERIFIED).
- `eviction-penalty-clause-ban`: `edu-eviction-charges-ut` (new, Present (partly), VERIFIED).
- `eviction-service-party`: `edu-eviction-service-party-ut` (new, Present (partly), VERIFIED).
- `exculpatory-clauses`: `edu-exculpatory-clauses-ut` (new, Confirmed absent, VERIFIED).
- `expedited-deposit-disposition`: `edu-no-expedited-deposit-disposition-ut` (new, Confirmed absent, VERIFIED).
- `extended-absence-notice`: `edu-extended-absence-notice-ut` (new, Present, VERIFIED); `extended-absence-notice-ks` (tagged).
- `family-child-care`: `edu-family-child-care-ut` (new, Confirmed absent, VERIFIED); `family-child-care-consent-ut` (new, Present, VERIFIED).
- `farmland-hunting-rights`: `edu-farmland-hunting-rights-ut` (new, Present (partly), VERIFIED); `farmland-sporting-rights-co` (tagged).
- `fee-in-lieu-of-deposit`: `edu-no-fee-in-lieu-of-deposit-ut` (new, Confirmed absent, VERIFIED).
- `fee-transparency`: `edu-fee-transparency-ut` (new, Present, VERIFIED); `fees-and-charges-ut` (new, Present, VERIFIED).
- `fee-unprovided-service`: `edu-no-fee-unprovided-service-ut` (new, Confirmed absent, VERIFIED).
- `fees-as-rent`: `edu-fees-as-rent-ut` (new, Present (partly), VERIFIED).
- `fire-code-standard`: `edu-fire-code-standard-ut` (new, Present, VERIFIED); `fire-code-compliance-ut` (new, Present, VERIFIED).
- `fire-sprinkler-duty`: `edu-fire-sprinkler-duty-ut` (new, Present (partly), VERIFIED).
- `foreclosure-disclosure`: `edu-no-foreclosure-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `foreign-ownership`: `edu-foreign-ownership-ut` (new, Present, VERIFIED).
- `forfeiture-redemption`: `edu-forfeiture-redemption-ut` (new, Present, VERIFIED).
- `frozen-standard-incorporation`: `edu-code-editions-ut` (new, Present, VERIFIED).
- `furnishings-included`: `furnishings-included-la` (tagged); `edu-no-furnished-rental-rules-ut` (new, Confirmed absent, VERIFIED).
- `good-cause-notice`: `edu-no-good-cause-notice-ut` (new, Confirmed absent, VERIFIED).
- `government-fee-reimbursement`: `edu-government-fee-reimbursement-ut` (new, Present, VERIFIED); `government-fee-reimbursement-ut` (new, Present, VERIFIED).
- `governmental-fines`: `edu-governmental-fines-ut` (new, Present (partly), VERIFIED); `tenant-caused-fines-as` (tagged).
- `guarantor-renewal`: `edu-guarantor-renewal-ut` (new, Present (partly), VERIFIED); `guaranty-as` (tagged).
- `guest-rights`: `edu-no-guest-rights-statute-ut` (new, Confirmed absent, VERIFIED).
- `habitability-materiality`: `edu-habitability-materiality-ut` (new, Present, VERIFIED).
- `habitability-modifiable`: `edu-habitability-modifiable-ut` (new, Present, VERIFIED).
- `habitability-presumption`: `edu-no-habitability-presumption-ut` (new, Confirmed absent, VERIFIED).
- `habitability-statement`: `edu-no-habitability-statement-ut` (new, Confirmed absent, VERIFIED).
- `habitability-waiver`: `edu-habitability-waiver-ut` (new, Present (partly), VERIFIED).
- `hazardous-contamination-disclosure`: `edu-hazardous-contamination-disclosure-ut` (new, Present, VERIFIED); `environmental-covenant-notice-ut` (new, Present, VERIFIED).
- `health-district-rental-rules`: `edu-health-department-rental-rules-ut` (new, Present (partly), VERIFIED).
- `heating`: `edu-heating-ut` (new, Present, VERIFIED); `heat-freeze-protection-ut` (new, Present, VERIFIED).
- `holding-deposit`: `edu-holding-deposit-ut` (new, Present, VERIFIED).
- `home-business`: `edu-home-business-ut` (new, Present (partly), VERIFIED); `home-business-permission-co` (tagged).
- `immigration-status`: `edu-no-immigration-status-rule-ut` (new, Confirmed absent, VERIFIED).
- `infirmity-termination`: `edu-no-infirmity-termination-ut` (new, Confirmed absent, VERIFIED).
- `informal-dispute-resolution`: `edu-no-informal-dispute-rule-ut` (new, Confirmed absent, VERIFIED); `informal-dispute-resolution-or` (tagged).
- `inspection-condemnation-disclosure`: `edu-inspection-order-disclosure-ut` (new, Present (partly), VERIFIED).
- `inspection-notice-penalty`: `edu-no-inspection-notice-penalty-ut` (new, Confirmed absent, VERIFIED).
- `jury-waiver`: `edu-jury-waiver-ut` (new, Present (partly), VERIFIED).
- `key-control-policy`: `edu-no-key-control-policy-ut` (new, Confirmed absent, VERIFIED); `lock-change-ak` (tagged).
- `knowing-use-penalty`: `edu-no-knowing-use-penalty-ut` (new, Confirmed absent, VERIFIED).
- `landlord-breach-remedy`: `edu-landlord-breach-remedy-ut` (new, Present, VERIFIED).
- `landlord-liability-insurance`: `edu-no-landlord-liability-insurance-ut` (new, Confirmed absent, VERIFIED).
- `landlord-remedies-termination`: `edu-landlord-remedies-termination-ut` (new, Present, VERIFIED).
- `landlord-self-cure`: `edu-no-landlord-self-cure-ut` (new, Confirmed absent, VERIFIED); `landlord-self-cure-ut` (new, Confirmed absent, VERIFIED).
- `late-fee-limit`: `edu-late-fee-limit-ut` (new, Present, VERIFIED).
- `law-enforcement-cooperation`: `edu-law-enforcement-cooperation-ut` (new, Present, VERIFIED).
- `lead-safe-certification`: `edu-lead-safe-certification-ut` (new, Present (partly), VERIFIED).
- `lead-state-notices`: `edu-lead-state-notices-ut` (new, Present (partly), VERIFIED).
- `lease-completeness`: `edu-no-blank-space-rule-ut` (new, Confirmed absent, VERIFIED).
- `lease-content-requirements`: `edu-lease-content-requirements-ut` (new, Present (partly), VERIFIED).
- `lease-notice-initial-requirement`: `edu-no-initials-requirement-ut` (new, Confirmed absent, VERIFIED).
- `lease-registration`: `edu-lease-recording-ut` (new, Present (partly), VERIFIED).
- `lease-term-limitation`: `edu-lease-term-limits-ut` (new, Present (partly), VERIFIED).
- `lease-type-parity`: `edu-no-lease-type-parity-rule-ut` (new, Confirmed absent, VERIFIED).
- `lease-type-size`: `edu-no-lease-type-size-rule-ut` (new, Confirmed absent, VERIFIED).
- `limitation-of-actions`: `edu-limitation-of-actions-ut` (new, Present, VERIFIED).
- `liquidated-damages`: `edu-liquidated-damages-ut` (new, Confirmed absent, VERIFIED).
- `lockout-for-rent-delinquency`: `edu-lockout-for-rent-delinquency-ut` (new, Present, VERIFIED).
- `maintenance-duty-shift`: `edu-maintenance-duty-shift-ut` (new, Present, VERIFIED).
- `meter-conservation-charge`: `edu-no-meter-conservation-charge-ut` (new, Not located, VERIFIED).
- `military-air-zone-disclosure`: `edu-no-military-zone-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `minor-tenant-filing`: `edu-minor-tenants-ut` (new, Present, VERIFIED).
- `nonpayment-notice`: `edu-nonpayment-notice-ut` (new, Present, VERIFIED).
- `nonrefundable-deposit-separate-notice`: `edu-no-nonrefundable-separate-notice-ut` (new, Confirmed absent, VERIFIED).
- `nonresident-owner-agent`: `edu-nonresident-owner-agent-ut` (new, Present (partly), VERIFIED).
- `notice-to-quit-waiver`: `edu-notice-to-quit-waiver-ut` (new, Confirmed absent, VERIFIED).
- `notice-to-vacate-additional-terms`: `edu-no-notice-to-vacate-terms-rule-ut` (new, Confirmed absent, VERIFIED).
- `optional-lease-terms`: `edu-no-lease-option-statute-ut` (new, Confirmed absent, VERIFIED).
- `ordnance-demolition-meter-disclosures`: `edu-ordnance-demolition-meter-disclosures-ut` (new, Present, VERIFIED).
- `other-landlord-facilities`: `edu-other-landlord-facilities-ut` (new, Present, VERIFIED).
- `owner-move-in-reservation`: `edu-owner-move-in-reservation-ut` (new, Present, VERIFIED); `owner-occupancy-termination-ar` (tagged).
- `parking-rules-notice`: `edu-parking-rules-notice-ut` (new, Present (partly), VERIFIED); `parking-rules-notice-ut` (new, Present, VERIFIED).
- `part5-nonwaivable`: `edu-no-general-nonwaiver-statute-ut` (new, Confirmed absent, VERIFIED).
- `periodic-services-entry`: `edu-periodic-services-entry-ut` (new, Present, VERIFIED); `scheduled-services-entry-la` (tagged).
- `pest-control-notice`: `edu-pest-control-notice-ut` (new, Not located, VERIFIED).
- `pet-eviction-fact-sheet`: `edu-no-pet-eviction-fact-sheet-ut` (new, Confirmed absent, VERIFIED).
- `pet-fees`: `edu-pet-fees-ut` (new, Present, VERIFIED).
- `plain-language`: `edu-no-plain-language-rule-ut` (new, Confirmed absent, VERIFIED).
- `plain-language-consumer-statement`: `edu-no-consumer-statement-rule-ut` (new, Confirmed absent, VERIFIED).
- `political-access`: `edu-political-access-ut` (new, Present (partly), VERIFIED).
- `pool-safety`: `edu-pool-safety-ut` (new, Present (partly), VERIFIED); `pool-and-spa-use-ut` (new, Present, VERIFIED).
- `portable-cooling-device`: `edu-no-portable-cooling-right-ut` (new, Confirmed absent, VERIFIED); `portable-cooling-device-ut` (new, Present, VERIFIED).
- `portable-solar`: `edu-portable-solar-ut` (new, Present (partly), VERIFIED); `portable-solar-device-ut` (new, Present, VERIFIED).
- `portfolio-thresholds`: `edu-portfolio-thresholds-ut` (new, Present, VERIFIED).
- `possession-bond`: `edu-possession-bond-ut` (new, Present, VERIFIED).
- `private-well-testing`: `edu-private-well-testing-ut` (new, Present (partly), VERIFIED).
- `prohibited-acts-renter`: `prohibited-acts-renter-ut` (new, Present, VERIFIED).
- `prohibited-lease-terms`: `edu-prohibited-lease-terms-ut` (new, Present (partly), VERIFIED).
- `promises-to-repair`: `edu-no-promises-to-repair-rule-ut` (new, Confirmed absent, VERIFIED); `promised-repairs-ut` (new, Confirmed absent, VERIFIED).
- `prop65-rental-warning`: `edu-no-chemical-warning-rule-ut` (new, Confirmed absent, VERIFIED).
- `property-tax-rent-disclosure`: `edu-property-tax-rent-statement-ut` (new, Present (partly), VERIFIED).
- `protected-class-inquiry-ban`: `edu-no-protected-class-inquiry-ban-ut` (new, Confirmed absent, VERIFIED).
- `purpose-limitation`: `edu-purpose-limitation-ut` (new, Present, VERIFIED).
- `quiet-possession`: `edu-no-quiet-possession-statute-ut` (new, Confirmed absent, VERIFIED).
- `recycling-notice`: `edu-no-recycling-notice-ut` (new, Confirmed absent, VERIFIED).
- `redemption`: `edu-redemption-ut` (new, Present, VERIFIED).
- `religious-cultural-display`: `edu-no-religious-display-rule-ut` (new, Confirmed absent, VERIFIED).
- `rent-concession`: `edu-no-rent-concession-rule-ut` (new, Confirmed absent, VERIFIED); `rent-concession-wi` (tagged).
- `rent-demand-bar`: `edu-no-rent-demand-bar-ut` (new, Confirmed absent, VERIFIED).
- `rent-escalation`: `edu-rent-escalation-ut` (new, Present (partly), VERIFIED); `rent-escalation-la` (tagged).
- `rent-installments`: `edu-no-rent-installment-rule-ut` (new, Confirmed absent, VERIFIED); `rent-installments-or` (tagged).
- `rent-into-court-counterclaim`: `edu-rent-into-court-counterclaim-ut` (new, Present (partly), VERIFIED).
- `rent-receipt-anti-waiver`: `edu-no-rent-receipt-anti-waiver-ut` (new, Confirmed absent, VERIFIED).
- `rent-receipts`: `edu-rent-receipts-ut` (new, Present, VERIFIED).
- `rent-reporting`: `edu-rent-reporting-ut` (new, Present (partly), VERIFIED); `rent-reporting-negative-notice-ut` (new, Present (partly), VERIFIED).
- `rental-inspection`: `edu-rental-inspection-ut` (new, Present, VERIFIED); `rental-inspection-cooperation-ut` (new, Present, VERIFIED).
- `renters-insurance-rules`: `edu-no-renters-insurance-rule-ut` (new, Confirmed absent, VERIFIED).
- `repair-cost-termination`: `edu-repair-cost-termination-ut` (new, Present (partly), VERIFIED).
- `repair-escrow-exemption-notice`: `edu-no-repair-escrow-exemption-ut` (new, Confirmed absent, VERIFIED).
- `repair-notice`: `edu-repair-notice-ut` (new, Present, VERIFIED).
- `required-disclosures`: `edu-required-disclosures-ut` (new, Present (partly), VERIFIED).
- `rights-responsibilities-guide`: `edu-no-rights-responsibilities-guide-ut` (new, Confirmed absent, VERIFIED).
- `rules-regulations`: `edu-rules-regulations-ut` (new, Present (partly), VERIFIED); `rules-ut` (new, Present (partly), VERIFIED).
- `sale-or-management-change`: `edu-sale-or-management-change-ut` (new, Present (partly), VERIFIED); `sale-termination-ut` (new, Present (partly), VERIFIED).
- `sanitary-code-variance`: `edu-code-variance-notice-ut` (new, Not located, VERIFIED).
- `seasonal-tenancy`: `edu-seasonal-tenancy-ut` (new, Present (partly), VERIFIED).
- `security-deposit-holding`: `edu-security-deposit-holding-ut` (new, Present, VERIFIED); `deposit-trust-account-exemption-ut` (new, Present, VERIFIED).
- `security-deposit-nonwaiver`: `edu-no-deposit-nonwaiver-statute-ut` (new, Confirmed absent, VERIFIED).
- `security-deposit-standards`: `edu-no-security-deposit-standards-ut` (new, Confirmed absent, VERIFIED).
- `security-devices`: `edu-security-devices-ut` (new, Present (partly), VERIFIED); `security-devices-ut` (new, Present (partly), VERIFIED).
- `senior-housing-work-card`: `edu-no-senior-housing-work-card-ut` (new, Confirmed absent, VERIFIED).
- `sex-offender-disclosure`: `edu-no-sex-offender-disclosure-ut` (new, Confirmed absent, VERIFIED); `sex-offender-registry-notice-ut` (new, Confirmed absent, VERIFIED).
- `sex-offender-occupancy`: `edu-no-sex-offender-occupancy-rule-ut` (new, Confirmed absent, VERIFIED).
- `sfr-occupancy-disclosure`: `edu-no-sfr-occupancy-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `shoreline-access-disclosure`: `edu-no-shoreline-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `showing-notice-waiver`: `showing-notice-la` (tagged, Present).
- `shutdown-rent-protection`: `edu-no-shutdown-rent-protection-ut` (new, Confirmed absent, VERIFIED).
- `single-family-zone-lease-limit`: `edu-single-family-rental-limits-ut` (new, Present (partly), VERIFIED).
- `smart-access`: `edu-no-smart-access-law-ut` (new, Confirmed absent, VERIFIED); `smart-access-system-ut` (new, Present, VERIFIED).
- `social-security-defense`: `edu-no-benefit-delay-defense-ut` (new, Confirmed absent, VERIFIED).
- `special-district-representation`: `edu-no-special-district-statement-ut` (new, Confirmed absent, VERIFIED).
- `sprinkler-disclosure`: `edu-no-sprinkler-disclosure-ut` (new, Confirmed absent, VERIFIED).
- `statute-of-frauds-lease-term`: `edu-statute-of-frauds-lease-ut` (new, Present, VERIFIED).
- `statutory-caps`: `edu-statutory-caps-ut` (new, Present, VERIFIED).
- `statutory-early-termination`: `edu-statutory-early-termination-ut` (new, Present, VERIFIED).
- `statutory-forms`: `edu-statutory-forms-ut` (new, Present, VERIFIED).
- `steam-radiator-covers`: `edu-no-steam-radiator-cover-rule-ut` (new, Confirmed absent, VERIFIED).
- `stove-refrigerator`: `edu-no-stove-refrigerator-rule-ut` (new, Confirmed absent, VERIFIED).
- `student-housing`: `edu-student-housing-ut` (new, Present (partly), VERIFIED).
- `subsidized-inspection-refusal`: `edu-subsidized-inspection-refusal-ut` (new, Present (partly), VERIFIED).
- `subsidy-habitability-proration`: `edu-subsidy-habitability-proration-ut` (new, Present (partly), VERIFIED).
- `subsidy-late-fee`: `edu-subsidy-late-fee-ut` (new, Present (partly), VERIFIED).
- `substandard-property-receivership`: `edu-substandard-property-enforcement-ut` (new, Present (partly), VERIFIED).
- `tax-escalation`: `edu-tax-escalation-ut` (new, Present (partly), VERIFIED); `tax-insurance-escalation-la` (tagged).
- `telecom-access`: `edu-telecom-access-ut` (new, Not located, VERIFIED); `telecom-access-mn` (tagged).
- `tenancy-at-will`: `edu-tenancy-at-will-ut` (new, Present (partly), VERIFIED).
- `tenant-bankruptcy`: `edu-tenant-bankruptcy-ut` (new, Present, VERIFIED).
- `tenant-confidential-information`: `edu-tenant-confidential-information-ut` (new, Present (partly), VERIFIED).
- `tenant-employee-housing`: `edu-tenant-employee-housing-ut` (new, Confirmed absent, VERIFIED).
- `tenant-insurance-claims`: `edu-tenant-insurance-claims-ut` (new, Present (partly), VERIFIED).
- `tenant-portal`: `edu-tenant-portal-ut` (new, Present (partly), VERIFIED); `tenant-portal-ut` (new, Present (partly), VERIFIED).
- `tenant-records`: `edu-tenant-records-ut` (new, Present (partly), VERIFIED).
- `tenant-right-to-organize`: `edu-tenant-right-to-organize-ut` (new, Present (partly), VERIFIED).
- `tenant-rights-statement`: `edu-no-tenant-rights-statement-ut` (new, Confirmed absent, VERIFIED).
- `tenant-security-cameras`: `edu-tenant-security-cameras-ut` (new, Present, VERIFIED).
- `tenant-statutory-duties`: `edu-tenant-statutory-duties-ut` (new, Present, VERIFIED); `renter-duties-ut` (new, Present, VERIFIED).
- `term-change-notice`: `edu-term-change-notice-ut` (new, Present (partly), VERIFIED); `term-change-notice-ut` (new, Present (partly), VERIFIED).
- `tpa-exemption-notice`: `edu-no-tpa-exemption-notice-ut` (new, Confirmed absent, VERIFIED).
- `tpa-notice`: `edu-no-tenant-purchase-right-ut` (new, Confirmed absent, VERIFIED).
- `tpa-sunset`: `edu-no-tenant-law-sunset-ut` (new, Confirmed absent, VERIFIED).
- `translation-duty`: `edu-no-translation-duty-ut` (new, Confirmed absent, VERIFIED).
- `trespass-notice`: `edu-trespass-notice-ut` (new, Present, VERIFIED); `barred-person-covenant-ne` (tagged).
- `truth-in-renting`: `edu-no-truth-in-renting-ut` (new, Confirmed absent, VERIFIED).
- `unbundled-parking`: `edu-no-unbundled-parking-rule-ut` (new, Confirmed absent, VERIFIED); `unbundled-parking-ut` (new, Present, VERIFIED).
- `unconscionability`: `edu-unconscionability-ut` (new, Present (partly), VERIFIED).
- `usufructuary-lessor`: `edu-no-usufructuary-lessor-ut` (new, Confirmed absent, VERIFIED).
- `utility-allowance-cap`: `edu-utility-allowance-cap-ut` (new, Present (partly), VERIFIED); `utility-allowance-cap-ut` (new, Present, VERIFIED).
- `utility-apportionment`: `edu-utility-apportionment-ut` (new, Present (partly), VERIFIED); `utility-apportionment-ut` (new, Present, VERIFIED).
- `utility-deposit-return`: `edu-utility-deposit-ut` (new, Present (partly), VERIFIED).
- `utility-disclosure-attachment`: `edu-utility-disclosure-attachment-ut` (new, Present (partly), VERIFIED).
- `utility-disconnection-notice-authorization`: `edu-utility-disconnection-notice-ut` (new, Not located, VERIFIED); `utility-shutoff-notice-authorization-co` (tagged).
- `utility-interruption-submeter`: `edu-utility-interruption-ut` (new, Present (partly), VERIFIED); `utility-interruption-repairs-ut` (new, Present, VERIFIED).
- `utility-landlord-account`: `edu-utility-landlord-account-ut` (new, Present (partly), VERIFIED).
- `utility-shutoff-statute`: `edu-utility-shutoff-rules-ut` (new, Present (partly), VERIFIED).
- `utility-submetering-disclosure`: `edu-utility-submetering-ut` (new, Present (partly), VERIFIED).
- `utility-transfer`: `edu-no-utility-transfer-rule-ut` (new, Not located, VERIFIED); `utility-transfer-nj` (tagged).
- `veterans-incentive`: `edu-no-veterans-incentive-ut` (new, Confirmed absent, VERIFIED).
- `waiver-by-acceptance`: `edu-rent-acceptance-waiver-ut` (new, Confirmed absent, VERIFIED).
- `water-heater-temperature`: `edu-water-heater-temperature-ut` (new, Present (partly), VERIFIED).
- `waterbed`: `edu-no-waterbed-rule-ut` (new, Confirmed absent, VERIFIED); `waterbed-mn` (tagged).
- `window-guards`: `edu-window-guards-ut` (new, Present (partly), VERIFIED).
- `written-notice-required`: `edu-written-notices-ut` (new, Present, VERIFIED).

### 3. Batteries

Controls run in every batch: nonsense `zqxvbnmwt` (must return 0 units) and must-hit `\brenters?\b` (must return more than 0). Near terms expand to `.ab`, `.ba` and a section-wide `.and`, window at least 1,200 characters. Every term has a positive (real unit or synthetic text). A failed battery is cited only as "recorded as failed, rerun as N". Full hit lists (never capped) are in the battery logs; each line below is the citation the rows copy.

**Replay 2026-11-08, after the index gained Utah Const. art. III (every logged battery re-run against the same corpus): main-pass log 30 (including UTG-A-024 to UTG-A-030, the round-1 reruns of narrow or incomplete batteries; replayed again at the final build), slice C 32, D 29, E 24, F 20, G 28, H 42, I 17 batteries, 0 count mismatches; slice J 16 batteries, 1 mismatch: UTG-J-015 (`communal`: logged 22, now 23, the new hit being Article III itself), superseded by UTG-J-016, which every row now cites; slice B 38 batteries, 1 mismatch: UTG-B-001 (`wear`: logged 12, now 15) because it searched scope "all" while fetched federal files were being added (28,088 units then, 28,121 now). It is superseded by UTG-B-002 (scope code+const) and no row cites it.**

- **UTG-A-001** [FAILED] `prohibited-lease-terms`: any statute voiding, barring or penalising a waiver or term in a tenancy agreement (anti-waiver, void, unenforceable, prohibited provisions). Battery UTG-A-001 (t1 928; t2 1; t3 7; n1.ab 49; n1.ba 59; n1.and 118 units hit when run; 3 of 4 positives passed, positive n1 recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-002** [OK] `exculpatory-clauses`: statutes on exculpatory, hold-harmless, indemnity or limitation-of-liability terms, and any tenancy context. Battery UTG-A-002 (t1 192; t2 363; n1.ab 6; n1.ba 6; n1.and 25 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-003** [FAILED] `liquidated-damages`: liquidated damages, penalty clauses, agreed damages: general contract statutes and tenancy context. Battery UTG-A-003 (t1 11; t2 46; t3 0; n1.ab 19; n1.ba 21; n1.and 39 units hit when run; 3 of 4 positives passed, positive t2 recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-004** [OK] `unconscionability`: unconscionability statutes and any reaching leases or rental agreements. Battery UTG-A-004 (t1 24; n1.ab 3; n1.ba 2; n1.and 3 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-005** [OK] `waiver-by-acceptance`: acceptance of rent (or partial payment) after notice or breach, and whether it waives. Battery UTG-A-005 (t1 148; n1.ab 59; n1.ba 43; n1.and 146; n2.ab 1; n2.ba 2; n2.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-006** [OK] `notice-to-quit-waiver`: whether a lease may waive or shorten a notice to quit or eviction notice. Battery UTG-A-006 (n1.ab 14; n1.ba 11; n1.and 25; n2.ab 2; n2.ba 1; n2.and 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-007** [OK] `plain-language`: plain-language, readability, type-size, blank-space or truth-in-renting rules for leases or consumer contracts. Battery UTG-A-007 (t1 11; t2 3; t3 286; t4 0; n1.ab 12; n1.ba 17; n1.and 30 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-008** [OK] `jury-waiver`: jury trial waiver rules (contract, consumer, tenancy) and jury in eviction. Battery UTG-A-008 (t1 9; n1.ab 2; n1.ba 2; n1.and 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-009** [FAILED] `knowing-use-penalty`: penalty for knowingly using, including or enforcing a prohibited or void provision in a rental agreement or contract. Battery UTG-A-009 (t1 40; n1.ab 1; n1.ba 1; n1.and 3; n2.ab 0; n2.ba 1; n2.and 2 units hit when run; 2 of 3 positives passed, positive n2 recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-010** [OK] `casualty-and-mitigation-waivable`: mitigation of damages duty and any rule on waiving it; casualty-waiver rules. Battery UTG-A-010 (t1 350; n1.ab 31; n1.ba 43; n1.and 75; n2.ab 5; n2.ba 2; n2.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-011** [OK] `prohibited-lease-terms`: any statute voiding, barring or penalising a waiver or term in a tenancy agreement (anti-waiver, void, unenforceable, prohibited provisions). Battery UTG-A-011 (t1 928; t2 1; t3 7; n1.ab 78; n1.ba 92; n1.and 187 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-001 (positive n1 (57-16-12) failed: tenancy limb lacked "resident(s)"; added).
- **UTG-A-012** [OK] `liquidated-damages`: liquidated damages, penalty clauses, agreed damages: general contract statutes and tenancy context. Battery UTG-A-012 (t1 11; t2 138; t3 0; n1.ab 19; n1.ba 21; n1.and 39 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-003 (positive t2 (3-1-17) failed: 60-character window between contract and penalties too narrow; widened to 300).
- **UTG-A-013** [OK] `knowing-use-penalty`: penalty for knowingly using, including or enforcing a prohibited or void provision in a rental agreement or contract. Battery UTG-A-013 (t1 40; n1.ab 1; n1.ba 1; n1.and 3; n2.ab 2; n2.ba 0; n2.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-009 (positive n2 failed: n2 built with the agreement noun inside the B limb, so neither order could match; rebuilt as agreement noun near prohibited/void/unenforceable provision).
- **UTG-A-014** [OK] `statutory-forms`: statutory forms whose text Utah prescribes (substantially in the following form, as follows) in the tenancy chapters and anywhere near a tenancy word. Battery UTG-A-014 (t1 6; n1.ab 6; n1.ba 5; n1.and 12 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-015** [OK] `lease-notice-initial-requirement`: any requirement that a tenant initial a lease term (initials, initialed) or a particular clause. Battery UTG-A-015 (t1 33; n1.ab 1; n1.ba 1; n1.and 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-016** [FAILED] `lease-term-limitation`: limits on lease length or formalities by term (years), and spousal or homestead consent to leasing. Battery UTG-A-016 (n1.ab 16; n1.ba 11; n1.and 24; n2.ab 21; n2.ba 19; n2.and 45 units hit when run; 1 of 2 positives passed, positive n1 recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-017** [OK] `eviction-penalty-clause-ban`: fees, charges or penalties for eviction, notices to quit or unlawful detainer, and any bar on charging them. Battery UTG-A-017 (n1.ab 17; n1.ba 12; n1.and 25; n2.ab 1; n2.ba 0; n2.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-018** [OK] `truth-in-renting`: statements of tenant or renter rights, rights-and-responsibilities notices, truth-in-renting notices a lease must carry. Battery UTG-A-018 (t1 0; n1.ab 1; n1.ba 2; n1.and 5 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-019** [OK] `habitability-modifiable`: defaults in the Fit Premises Act, deposit chapter and eviction part that the rental agreement may vary (unless otherwise agreed, except as provided in the rental agreement). Battery UTG-A-019 (t1 23 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-020** [OK] `lease-term-limitation`: limits on lease length or formalities by term (years), and spousal or homestead consent to leasing. Battery UTG-A-020 (n1.ab 20; n1.ba 16; n1.and 37; n2.ab 21; n2.ba 19; n2.and 45 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-016 (positive n1 (25-5-3) failed: B limb could not match "longer period than one year"; added optional "period" and "exceeding").
- **UTG-A-021** [OK] `confession-of-judgment`: every confession-of-judgment provision (confess, cognovit, warrant of attorney). Battery UTG-A-021 (t1 11 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-022** [OK] `binding-arbitration`: arbitration provisions tied to consumers or tenancies (exclusions, bans, conditions). Battery UTG-A-022 (n1.ab 6; n1.ba 6; n1.and 19 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-023** [OK] `association-obligations-disclosure`: any rule that a lease of an association unit disclose association documents or obligations, or that binds renters to association documents. Battery UTG-A-023 (n1.ab 10; n1.ba 10; n1.and 14; n2.ab 113; n2.ba 115; n2.and 233 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-A-024** [OK] `jury-waiver`: jury trial waiver rules (contract, consumer, tenancy) and jury in eviction. Battery UTG-A-024 (t2 1; jw.ab 10; jw.ba 12; jw.and 22; n1.ab 2; n1.ba 2; n1.and 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-008 (independent check r1: t1 paired jury and waive within 200 characters; rerun with a 1,200-character near term and section-wide AND limb (rule 19)).
- **UTG-A-025** [OK] `eviction-penalty-clause-ban`: fees, charges or penalties for eviction, notices to quit or unlawful detainer, and any bar on charging them. Battery UTG-A-025 (n1.ab 15; n1.ba 11; n1.and 21; n2.ab 0; n2.ba 0; n2.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-017 (independent check r1: n2 used a 40-character window between the prohibition and charge; rerun with a phrase-level prohibition limb, 1,200-character near window and section-wide AND (rule 19)).
- **UTG-A-026** [FAILED] `lease-term-limitation`: limits on lease length or formalities by term (years), and spousal or homestead consent to leasing. Battery UTG-A-026 (n1.ab 17; n1.ba 15; n1.and 33; n2.ab 20; n2.ba 18; n2.and 43; n3.ab 25; n3.ba 25; n3.and 64 units hit when run; 2 of 3 positives passed, positive n3 recorded as failed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-020 (independent check r1: no seal, notary or acknowledgment limb for the lease-formalities claim; limb added).
- **UTG-A-027** [OK] `plain-language`: plain-language, readability, type-size, blank-space or truth-in-renting rules for leases or consumer contracts. Battery UTG-A-027 (t1 11; t2 3; t3 282; t4 0; n1.ab 12; n1.ba 17; n1.and 29; n2.ab 0; n2.ba 0; n2.and 2 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-007 (independent check r1: no limb for state preapproval or review of lease forms; limb added).
- **UTG-A-028** [OK] `lease-term-limitation`: limits on lease length or formalities by term (years), and spousal or homestead consent to leasing. Battery UTG-A-028 (n1.ab 19; n1.ba 17; n1.and 38; n2.ab 24; n2.ba 22; n2.and 50; n3.ab 27; n3.ba 28; n3.and 73 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-026 (positive n3 (57-3-101) failed: that section has no lease word; synthetic positive used; lease and homestead inflections added after INFLECTION warnings).
- **UTG-A-029** [OK] `jury-waiver`: jury trial waiver rules (contract, consumer, tenancy) and jury in eviction. Battery UTG-A-029 (t2 1; jw.ab 10; jw.ba 12; jw.and 22; n1.ab 2; n1.ba 2; n1.and 4 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-024 (INFLECTION warnings on lease (and boldface): inflected forms added).
- **UTG-A-030** [OK] `plain-language`: plain-language, readability, type-size, blank-space or truth-in-renting rules for leases or consumer contracts. Battery UTG-A-030 (t1 11; t2 3; t3 282; t4 0; n1.ab 13; n1.ba 20; n1.and 32; n2.ab 0; n2.ba 0; n2.and 2 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-A-027 (INFLECTION warnings on lease (and boldface): inflected forms added).
- **UTG-B-001** [OK] `deposit-cost-schedule`: Any Utah rule on pre-set cleaning/carpet/repair charges against a deposit, professional cleaning, or carpet age/condition tests. Battery UTG-B-001 (profclean 0; wear 12; carpetclean 6; carpetdep.ab 0; carpetdep.ba 0; carpetdep.and 1; cleandep.ab 6; cleandep.ba 5; cleandep.and 10; schedule.ab 2; schedule.ba 0; schedule.and 3 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-002** [OK] `deposit-cost-schedule`: Any Utah rule on pre-set cleaning/carpet/repair charges against a deposit, professional cleaning, or carpet age/condition tests. Battery UTG-B-002 (profclean 0; wear 12; carpetclean 6; carpetdep.ab 0; carpetdep.ba 0; carpetdep.and 1; cleandep.ab 6; cleandep.ba 5; cleandep.and 10; schedule.ab 2; schedule.ba 0; schedule.and 3 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-001 (fetched files added to the corpus after the run changed the scope-all unit set (28088 to 28110 units); rerun over the Utah Code and Constitution only (code+const) so the count is stable).
- **UTG-B-003** [OK] `carpet-cleaning`: Companion: floor coverings, paint, depreciation or useful-life tests tied to a tenancy or deposit (Colorado-type condition-and-age rule). Battery UTG-B-003 (floorcov 2; usefullife 31; deprec.ab 7; deprec.ba 12; deprec.and 32; paint.ab 2; paint.ba 0; paint.and 3; floordep.ab 0; floordep.ba 0; floordep.and 0 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-004** [OK] `carpet-cleaning`: Companion: floor coverings, paint, depreciation or useful-life tests tied to a tenancy or deposit (Colorado-type condition-and-age rule). Battery UTG-B-004 (floorcov 2; usefullife 31; deprec.ab 9; deprec.ba 13; deprec.and 34; paint.ab 2; paint.ba 0; paint.and 7; floordep.ab 0; floordep.ba 0; floordep.and 0 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-003 (INFLECTION warning: the lease limb missed leased/leasing; rerun with \bleas(?:e|es|ed|ing)\b).
- **UTG-B-005** [OK] `deposit-escheat`: Any Utah rule treating an unclaimed tenant deposit or refund specially (escheat, forfeiture to landlord, undeliverable refund) beyond Title 67, Chapter 4a. Battery UTG-B-005 (escheat 7; uncl_dep 11; uncl_ten.ab 3; uncl_ten.ba 3; uncl_ten.and 5; forfeit_dep.ab 1; forfeit_dep.ba 1; forfeit_dep.and 2; secdep_aband.ab 0; secdep_aband.ba 0; secdep_aband.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-006** [OK] `deposit-installments`: Any Utah right or rule letting a tenant pay a security deposit (or move-in money) in installments. Battery UTG-B-006 (instdep 0; inst_ten.ab 0; inst_ten.ba 0; inst_ten.and 0; inst_rent.ab 12; inst_rent.ba 9; inst_rent.and 15 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-007** [OK] `deposit-last-month-rent`: Any Utah rule on last month's rent, prepaid or advance rent, or a tenant applying the deposit to rent. Battery UTG-B-007 (lastmonth 0; prepaid 5; applydep.ab 8; applydep.ba 6; applydep.and 13 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-008** [OK] `deposit-surrender-notice`: Any Utah rule letting or forbidding a landlord to condition a deposit refund on the tenant's advance notice of move-out, surrender of keys, or a forwarding address. Battery UTG-B-008 (fwd 57; notice_dep.ab 0; notice_dep.ba 0; notice_dep.and 3; cond_dep.ab 4; cond_dep.ba 3; cond_dep.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-009** [OK] `security-deposit-holding`: Any Utah rule on how a landlord or manager must hold tenant deposits (escrow, trust or separate account, commingling, depository notice, bond in place of escrow, interest). Battery UTG-B-009 (tenantdep 2; acct_dep.ab 15; acct_dep.ba 7; acct_dep.and 24; interest_dep.ab 3; interest_dep.ba 3; interest_dep.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-010** [OK] `security-deposit-holding`: Any Utah rule on how a landlord or manager must hold tenant deposits (escrow, trust or separate account, commingling, depository notice, bond in place of escrow, interest). Battery UTG-B-010 (tenantdep 2; acct_dep.ab 15; acct_dep.ba 7; acct_dep.and 24; interest_dep.ab 3; interest_dep.ba 4; interest_dep.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-009 (INFLECTION warning on interest; rerun with \binterest(?:s|ed)?\b).
- **UTG-B-011** [OK] `security-deposit-standards`: Any Utah rule requiring a landlord to post or disclose the standards or criteria used to set deposit amounts, or to apply uniform deposit standards. Battery UTG-B-011 (depamt 12; std_dep.ab 1; std_dep.ba 1; std_dep.and 6; post_dep.ab 0; post_dep.ba 1; post_dep.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-012** [OK] `nonrefundable-deposit-separate-notice`: Every Utah provision on nonrefundable deposits or fees, to find any separate-document, conspicuousness or form requirement beyond Utah Code Ann. 57-17-2. Battery UTG-B-012 (nonref 114; nonref_doc.ab 29; nonref_doc.ba 10; nonref_doc.and 41 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-013** [OK] `holding-deposit`: Any Utah rule on holding deposits, earnest money or other money taken from a prospective tenant before the lease. Battery UTG-B-013 (holddep 3; prosp 9; earnest.ab 2; earnest.ba 1; earnest.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-014** [OK] `fee-in-lieu-of-deposit`: Any Utah rule on a fee, bond or insurance product in lieu of a security deposit for a residential tenancy. Battery UTG-B-014 (inlieu 2; bond_ten.ab 10; bond_ten.ba 8; bond_ten.and 21; fee_dep.ab 5; fee_dep.ba 3; fee_dep.and 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-015** [OK] `expedited-deposit-disposition`: Any Utah procedure for an early, expedited or tenant-requested deposit disposition, or a fee for one. Battery UTG-B-015 (exp_dep.ab 9; exp_dep.ba 5; exp_dep.and 16; req_dep.ab 0; req_dep.ba 0; req_dep.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-016** [FAILED] `utility-deposit-return`: Any Utah rule on a utility deposit held by a landlord (separate category, refund deadline), and statutory utility-deposit rules that reach tenants. Battery UTG-B-016 (utildep 0; util_ten.ab 15; util_ten.ba 13; util_ten.and 35 units hit when run; 1 of 2 positives passed, positive utildep recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-017** [OK] `utility-deposit-return`: Any Utah rule on a utility deposit held by a landlord (separate category, refund deadline), and statutory utility-deposit rules that reach tenants. Battery UTG-B-017 (utildep 1; util_ten.ab 15; util_ten.ba 13; util_ten.and 35 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-016 (positive utildep failed: Utah Code Ann. 67-4a-201(13) says 'a deposit or refund owed to a subscriber by a utility'; pattern widened to deposits owed by or held by a utility, with a synthetic positive for the landlord-held form).
- **UTG-B-018** [OK] `late-fee-limit`: Every Utah late-fee provision: find any cap or rule other than Utah Code Ann. 57-22-4(5)(a) that reaches a residential tenancy, including mobile home parks. Battery UTG-B-018 (latefee 49; late_ten.ab 10; late_ten.ba 14; late_ten.and 31 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-019** [OK] `late-fee-limit`: Every Utah late-fee provision: find any cap or rule other than Utah Code Ann. 57-22-4(5)(a) that reaches a residential tenancy, including mobile home parks. Battery UTG-B-019 (latefee 49; late_ten.ab 11; late_ten.ba 15; late_ten.and 33 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-018 (INFLECTION warning on rent; rerun with \brent(?:s|ed|ing)?\b).
- **UTG-B-020** [OK] `fee-transparency`: Any Utah all-in price, junk-fee, mandatory-fee itemization, first-page fee disclosure or advertised-rent rule reaching residential rentals. Battery UTG-B-020 (totalprice 4; adv_rent.ab 21; adv_rent.ba 23; adv_rent.and 45; firstpage.ab 31; firstpage.ba 30; firstpage.and 65; nonrent_exp.ab 54; nonrent_exp.ba 61; nonrent_exp.and 107 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-021** [OK] `fee-transparency`: Any Utah all-in price, junk-fee, first-page fee disclosure or advertised-rent rule reaching residential rentals (tightened rerun). Battery UTG-B-021 (totalprice 4; nonrent 1; adv_rent.ab 17; adv_rent.ba 11; adv_rent.and 27; firstpage.ab 1; firstpage.ba 1; firstpage.and 4 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-020 (INFLECTION warning on listing, and fee-word limbs too broad to read every hit; rerun with listings? and lease-word limbs).
- **UTG-B-022** [OK] `fee-unprovided-service`: Any Utah rule barring a fee for a service not actually provided, as applied to landlords, tenants or any supplier. Battery UTG-B-022 (notprov 35; fee_serv_ten.ab 10; fee_serv_ten.ba 9; fee_serv_ten.and 20 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-023** [OK] `fees-as-rent`: Every Utah definition of rent, and any rule treating fees as rent or as additional rent. Battery UTG-B-023 (rentdef 3; addlrent 1; rent_other.ab 25; rent_other.ba 24; rent_other.and 44 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-024** [OK] `fees-as-rent`: Every Utah definition of rent, and any rule treating fees as rent or as additional rent. Battery UTG-B-024 (rentdef 3; addlrent 1; rent_other.ab 58; rent_other.ba 42; rent_other.and 92 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-023 (INFLECTION warning on rent in the rent_other limb; rerun with \brent(?:s|ed|ing)?\b).
- **UTG-B-025** [OK] `pet-fees`: Any Utah rule on pet deposits, pet fees or pet rent (inside or outside the deposit statute), beyond service and support animals. Battery UTG-B-025 (petdep 9; pet_ten.ab 66; pet_ten.ba 51; pet_ten.and 104 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-026** [OK] `pet-fees`: Any Utah rule on pet deposits, pet fees or pet rent (tightened rerun). Battery UTG-B-026 (petdep 9; pet_ten.ab 2; pet_ten.ba 1; pet_ten.and 3 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-025 (INFLECTION warning on rent and an animal-word limb too broad to read every hit; rerun with pets near deposit and tenancy words).
- **UTG-B-027** [OK] `statutory-caps`: Every money figure (dollar amount, percentage, not-to-exceed limit) in a section that uses a residential landlord-tenant role word, to list Utah's statutory money limits. Battery UTG-B-027 (fig_role.ab 29; fig_role.ba 35; fig_role.and 61 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-028** [OK] `statutory-caps`: Companion to UTG-B-027: figures and multipliers near owner/resident/occupant in Titles 57 and 78B, and multipliers (three times, triple, double) near tenancy words code-wide. Battery UTG-B-028 (fig_owner.ab 50; fig_owner.ba 50; fig_owner.and 65; mult_ten.ab 2; mult_ten.ba 3; mult_ten.and 9 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-029** [OK] `government-fee-reimbursement`: Any Utah rule on passing a government fee (rental license, registration, disproportionate rental fee, inspection, utility or court fee) through to a tenant. Battery UTG-B-029 (passon 89; licfee_ten.ab 5; licfee_ten.ba 7; licfee_ten.and 9 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-030** [OK] `rent-receipts`: Any Utah duty to give a receipt for rent or any payment (landlord-tenant or general obligations law), cash-receipt rules, and any presumption from a receipt of later installments. Battery UTG-B-030 (wreceipt 45; rcpt_rent.ab 28; rcpt_rent.ba 30; rcpt_rent.and 64; rcpt_debtor.ab 42; rcpt_debtor.ba 39; rcpt_debtor.and 70; rcpt_presume.ab 30; rcpt_presume.ba 29; rcpt_presume.and 79 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-031** [OK] `rent-receipts`: Targeted companion: every Utah provision that requires someone to give a receipt, or gives a right to demand one (general obligations included). Battery UTG-B-031 (giverct 33; rightrct 6 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-032** [OK] `rent-receipts`: Any Utah statutory presumption that earlier installments or rent were paid when a receipt for a later one is produced. Battery UTG-B-032 (presume_prior.ab 0; presume_prior.ba 0; presume_prior.and 1 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-033** [OK] `rent-receipt-anti-waiver`: Any Utah rule that the right to receive rent cannot be separated from the duty to maintain (URLTA analogue), by lease, assignment, deed, trust deed or security instrument. Battery UTG-B-033 (freeof 0; rcvrent_dut.ab 0; rcvrent_dut.ba 0; rcvrent_dut.and 0; instr_maint.ab 6; instr_maint.ba 9; instr_maint.and 15 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-034** [OK] `lockout-for-rent-delinquency`: Any Utah rule allowing or barring a landlord lockout, lock change or distress for unpaid rent, outside judicial process. Battery UTG-B-034 (lockout 8; selfhelp 43; excl_ten.ab 9; excl_ten.ba 9; excl_ten.and 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-035** [OK] `lockout-for-rent-delinquency`: Any Utah rule allowing or barring a landlord lockout, lock change or distress for unpaid rent, outside judicial process. Battery UTG-B-035 (lockout 8; selfhelp 48; excl_ten.ab 9; excl_ten.ba 9; excl_ten.and 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-B-034 (INFLECTION warning on distress; rerun with \bdistress(?:es|ed)?\b).
- **UTG-B-036** [OK] `alarm-tampering-fee`: Any Utah rule on tampering with, disabling or removing a smoke or carbon monoxide alarm, and any fee or penalty for it. Battery UTG-B-036 (tamper_alarm.ab 3; tamper_alarm.ba 3; tamper_alarm.and 13 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-037** [OK] `subsidy-late-fee`: Any Utah rule on late fees or charges for subsidized tenancies (Section 8, vouchers, public housing, housing assistance, source of income). Battery UTG-B-037 (late_subsidy.ab 14; late_subsidy.ba 9; late_subsidy.and 28 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-B-038** [OK] `rent-concession`: Any Utah rule on rent concessions, free rent, move-in specials, rent discounts or recapture of a concession. Battery UTG-B-038 (concession 6; disc_ten.ab 2; disc_ten.ba 4; disc_ten.and 7 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-001** [FAILED] `dv-confidentiality`: Any Utah duty on an owner/landlord (or any person) to keep a domestic-violence victim's information or documents confidential. Battery UTG-C-001 (t3way 3; tvictimnodisc 81; nDiscDV.ab 16; nDiscDV.ba 15; nDiscDV.and 30; nDiscTen.ab 7; nDiscTen.ba 5; nDiscTen.and 9; nPrivVictim.ab 37; nPrivVictim.ba 39; nPrivVictim.and 74; nNoDiscVictim.ab 11; nNoDiscVictim.ba 9; nNoDiscVictim.and 13 units hit when run; 4 of 6 positives passed, positive nPrivVictim, nNoDiscVictim recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-002** [OK] `dv-confidentiality`: Any Utah duty on an owner/landlord (or any person) to keep a domestic-violence victim's information or documents confidential. Battery UTG-C-002 (t3way 3; tvictimnodisc 81; nDiscDV.ab 16; nDiscDV.ba 15; nDiscDV.and 30; nDiscTen.ab 7; nDiscTen.ba 5; nDiscTen.and 9; nPrivVictim.ab 37; nPrivVictim.ba 39; nPrivVictim.and 74; nNoDiscVictim.ab 11; nNoDiscVictim.ba 9; nNoDiscVictim.and 13 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-001 (positives 77-38-6 (heading-only match) and 77-38-204 (phrase absent) failed; replaced with real positives 77-38-403 and 75E-11-308).
- **UTG-C-003** [OK] `dv-deposit-timing`: Any Utah rule on deposit return timing after a domestic-violence termination, or one that waits for all occupants to give up possession. Battery UTG-C-003 (tTermFee 2; nDepDV.ab 3; nDepDV.ba 2; nDepDV.and 9; nDepVacate.ab 14; nDepVacate.ba 6; nDepVacate.and 36; nDepOthers.ab 0; nDepOthers.ba 2; nDepOthers.and 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-004** [FAILED] `dv-eviction-protection`: Any Utah bar on evicting, refusing to rent to, or penalizing a tenant because the tenant is a domestic-violence (or crime) victim, or an eviction defense for victims. Battery UTG-C-004 (t3way 2; nEvictDV.ab 0; nEvictDV.ba 2; nEvictDV.and 2; nDiscrimVictim.ab 8; nDiscrimVictim.ba 6; nDiscrimVictim.and 12; nEvictAbuse.ab 0; nEvictAbuse.ba 1; nEvictAbuse.and 3 units hit when run; 3 of 4 positives passed, positive nDiscrimVictim recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-005** [OK] `dv-eviction-protection`: Any Utah bar on evicting, refusing to rent to, or penalizing a tenant because the tenant is a domestic-violence (or crime) victim, or an eviction defense for victims. Battery UTG-C-005 (t3way 2; nEvictDV.ab 0; nEvictDV.ba 2; nEvictDV.and 2; nDiscrimVictim.ab 15; nDiscrimVictim.ba 13; nDiscrimVictim.and 22; nEvictAbuse.ab 0; nEvictAbuse.ba 1; nEvictAbuse.and 3 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-004 (positive 31A-21-503 failed (its body says domestic abuse and refuse/may not consider, matched only in the heading); limb widened to those words; abuse inflections added after INFLECTION warning).
- **UTG-C-006** [OK] `dv-protection-order-chapter-moved`: Statutes citing protective-order parts of Title 78B Chapter 7, sections of 78B-7 in a tenancy context, and the known stale targets (78B-6-1107, 77-27-21.7, 78B-6-1101) or the former registry chapter (Title 77 Chapter 41). Battery UTG-C-006 (tStale 3; tOldRegistry 0; tPOParts 24; nPOTenancy.ab 3; nPOTenancy.ba 4; nPOTenancy.and 6 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-007** [OK] `dv-qualifying-documents`: Every Utah provision that ties a tenant right to a police report, protective order or other domestic-violence document, and any time limit on those documents. Battery UTG-C-007 (t3doc 5; nReportTen.ab 3; nReportTen.ba 3; nReportTen.and 3; nOrderTen.ab 4; nOrderTen.ba 7; nOrderTen.and 7; nDocTime.ab 0; nDocTime.ba 0; nDocTime.and 1 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-008** [OK] `disability-accommodation`: Utah reasonable accommodation / modification rules in housing; any requirement that the restoration condition appear in the lease; any restoration deposit or escrow rule. Battery UTG-C-008 (tReasMod 1; t3escrow 0; nAccomHousing.ab 1; nAccomHousing.ba 2; nAccomHousing.and 3; nModLease.ab 1; nModLease.ba 2; nModLease.and 9; nRestoreDisab.ab 8; nRestoreDisab.ba 7; nRestoreDisab.and 14 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-009** [OK] `disability-accommodation`: Utah reasonable accommodation / modification rules in housing; any requirement that the restoration condition appear in the lease; any restoration deposit or escrow rule. Battery UTG-C-009 (tReasMod 1; t3escrow 0; nAccomHousing.ab 1; nAccomHousing.ba 2; nAccomHousing.and 3; nModLease.ab 1; nModLease.ba 2; nModLease.and 9; nRestoreDisab.ab 8; nRestoreDisab.ba 7; nRestoreDisab.and 14 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-008 (INFLECTION warning on rental; tenancy limb rerun with rentals?).
- **UTG-C-010** [OK] `protected-class-inquiry-ban`: Any Utah ban on asking an applicant or tenant about, or keeping records of, a protected characteristic (separate from the discrimination ban). Battery UTG-C-010 (t3inq 1; tMayNotInquire 4; nAppForm.ab 8; nAppForm.ba 7; nAppForm.and 13; nInqClass.ab 10; nInqClass.ba 7; nInqClass.and 15; nRecordClass.ab 2; nRecordClass.ba 2; nRecordClass.and 9 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-011** [OK] `protected-class-inquiry-ban`: Any Utah ban on asking an applicant or tenant about, or keeping records of, a protected characteristic (separate from the discrimination ban). Battery UTG-C-011 (t3inq 1; tMayNotInquire 4; nAppForm.ab 8; nAppForm.ba 7; nAppForm.and 13; nInqClass.ab 10; nInqClass.ba 7; nInqClass.and 15; nRecordClass.ab 2; nRecordClass.ba 2; nRecordClass.and 9 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-010 (INFLECTION warnings on race and color; protected-class limb rerun with races? and colou?rs?).
- **UTG-C-012** [OK] `immigration-status`: Any Utah rule on a landlord asking about, acting on, or being barred from renting because of immigration status, or protecting tenants from immigration-status threats. Battery UTG-C-012 (t3imm 8; tHarbor 51; nImmTen.ab 5; nImmTen.ba 5; nImmTen.and 8; nImmHousing.ab 21; nImmHousing.ba 34; nImmHousing.and 58; nThreatReport.ab 1; nThreatReport.ba 0; nThreatReport.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-013** [OK] `immigration-status`: Any Utah rule on a landlord asking about, acting on, or being barred from renting because of immigration status, or protecting tenants from immigration-status threats. Battery UTG-C-013 (t3imm 8; tHarbor 51; nImmTen.ab 5; nImmTen.ba 5; nImmTen.and 8; nImmHousing.ab 27; nImmHousing.ba 37; nImmHousing.and 66; nThreatReport.ab 1; nThreatReport.ba 0; nThreatReport.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-012 (INFLECTION warnings on reside and residence; housing limb rerun with resid(e|es|ed|ing|ence|ences)).
- **UTG-C-014** [OK] `sex-offender-disclosure`: Any Utah duty on a landlord (or any person renting housing) about registered sex offenders: disclosure or registry notice, occupancy or residency limits, co-residence of offenders, notification. Battery UTG-C-014 (t3so 10; nSOTen.ab 5; nSOTen.ba 4; nSOTen.and 10; nSOResid.ab 16; nSOResid.ba 22; nSOResid.and 33; nSODisclose.ab 28; nSODisclose.ba 33; nSODisclose.and 52; nSOTwo.ab 0; nSOTwo.ba 0; nSOTwo.and 0 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-015** [OK] `tenant-confidential-information`: Any Utah rule limiting a landlord's disclosure of tenant information, requiring tenant records, ledgers or receipts, or reaching a landlord's data security (any-person limb). Battery UTG-C-015 (t3disc 1; tTenScreen 3; nLedger.ab 23; nLedger.ba 27; nLedger.and 54; nRecordsTen.ab 18; nRecordsTen.ba 16; nRecordsTen.and 30; nPISecurity.ab 7; nPISecurity.ba 8; nPISecurity.and 17 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-016** [OK] `tenant-confidential-information`: Any Utah rule limiting a landlord's disclosure of tenant information, requiring tenant records, ledgers or receipts, or reaching a landlord's data security (any-person limb). Battery UTG-C-016 (t3disc 1; tTenScreen 3; nLedger.ab 23; nLedger.ba 27; nLedger.and 54; nRecordsTen.ab 18; nRecordsTen.ba 16; nRecordsTen.and 30; nPISecurity.ab 7; nPISecurity.ba 8; nPISecurity.and 17 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-015 (INFLECTION warning on accounting; ledger limb rerun with accountings?).
- **UTG-C-017** [OK] `employee-screening`: Any Utah duty to background-screen apartment or rental-property employees, or work cards / screening for staff of 55+ or senior housing. Battery UTG-C-017 (tWorkCard 0; nBGRental.ab 4; nBGRental.ba 4; nBGRental.and 6; nBGHome.ab 10; nBGHome.ba 5; nBGHome.and 21; nSeniorStaff.ab 1; nSeniorStaff.ba 0; nSeniorStaff.and 7 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-018** [OK] `employee-screening`: Any Utah duty to background-screen apartment or rental-property employees, or work cards / screening for staff of 55+ or senior housing. Battery UTG-C-018 (tWorkCard 0; nBGRental.ab 4; nBGRental.ba 4; nBGRental.and 6; nBGHome.ab 10; nBGHome.ba 5; nBGHome.and 21; nSeniorStaff.ab 1; nSeniorStaff.ba 0; nSeniorStaff.and 7 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-017 (INFLECTION warning on staff; senior-staff limb rerun with staff(?:s|ed|ing)?).
- **UTG-C-019** [OK] `rent-reporting`: Any Utah rule on reporting rent payments (positive or negative) to credit bureaus, a state rent-reporting program, or notice before a negative report (any-creditor limb). Battery UTG-C-019 (tRentRep 0; nCRARent.ab 4; nCRARent.ba 3; nCRARent.and 4; nNegNotice.ab 2; nNegNotice.ba 2; nNegNotice.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-020** [OK] `rent-reporting`: Any Utah rule on reporting rent payments (positive or negative) to credit bureaus, a state rent-reporting program, or notice before a negative report (any-creditor limb). Battery UTG-C-020 (tRentRep 0; nCRARent.ab 4; nCRARent.ba 3; nCRARent.and 4; nNegNotice.ab 2; nNegNotice.ba 2; nNegNotice.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-019 (INFLECTION warnings on rent and notice; limbs rerun with rent(s|ed|ing) and notices?).
- **UTG-C-021** [OK] `algorithmic-rent-setting`: Any Utah rule on landlords setting rents or lease terms with a pricing algorithm or software, or an antitrust provision aimed at rental housing. Battery UTG-C-021 (tAlgo 32; tRestraint 12; nAlgoRent.ab 7; nAlgoRent.ba 2; nAlgoRent.and 23; nTrustRent.ab 1; nTrustRent.ba 2; nTrustRent.and 4 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-022** [OK] `children-occupancy`: Any Utah rule on lease content about children, occupancy limits that affect children, or refusing/ending a tenancy because of children (beyond the Fair Housing Act familial-status ban). Battery UTG-C-022 (tFamilial 8; nChildOcc.ab 7; nChildOcc.ba 5; nChildOcc.and 22; nChildTen.ab 33; nChildTen.ba 24; nChildTen.and 88 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-023** [OK] `veterans-incentive`: Any Utah incentive, preference, credit or rule for landlords renting to veterans or servicemembers (or barring veteran-status discrimination in housing). Battery UTG-C-023 (tVetHousing 24; nVetRent.ab 14; nVetRent.ba 13; nVetRent.and 25; nVetIncent.ab 25; nVetIncent.ba 21; nVetIncent.and 43 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-024** [OK] `veterans-incentive`: Any Utah incentive, preference, credit or rule for landlords renting to veterans or servicemembers (or barring veteran-status discrimination in housing). Battery UTG-C-024 (tVetHousing 24; nVetRent.ab 14; nVetRent.ba 13; nVetRent.and 25; nVetIncent.ab 25; nVetIncent.ba 21; nVetIncent.and 43 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-023 (INFLECTION warning on preference; incentive limb rerun with preferences?).
- **UTG-C-025** [OK] `religious-cultural-display`: Any Utah right of a tenant to display religious, cultural or political items or signs, or of candidates or canvassers to reach tenants (political-access), and any landlord limits on them. Battery UTG-C-025 (t3rel 14; nRelDisplay.ab 11; nRelDisplay.ba 12; nRelDisplay.and 22; nPolSignTen.ab 4; nPolSignTen.ba 5; nPolSignTen.and 8; nCanvass.ab 0; nCanvass.ba 0; nCanvass.and 4 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-026** [OK] `tenant-right-to-organize`: Any Utah right of tenants to organize, form or join a tenant association or union, meet, or be free of interference or retaliation for organizing. Battery UTG-C-026 (tTenAssoc 2; nOrganize.ab 5; nOrganize.ba 3; nOrganize.and 14; nRetalOrg.ab 30; nRetalOrg.ba 38; nRetalOrg.and 74 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-027** [OK] `guest-rights`: Any Utah right of a tenant to have guests, visitors, caregivers or suppliers, any limit on guest fees or guest rules, and long-term guest rules. Battery UTG-C-027 (tLongGuest 1; nGuestTen.ab 9; nGuestTen.ba 10; nGuestTen.and 16; nSupplier.ab 58; nSupplier.ba 52; nSupplier.and 79 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-028** [OK] `law-enforcement-cooperation`: Reporting duties binding any person (child abuse, vulnerable adult abuse, deaths) with no landlord word; crime-free / police-cooperation rules for rentals; police limbs with tenancy words. Battery UTG-C-028 (tCrimeFree 0; nChildRep.ab 9; nChildRep.ba 6; nChildRep.and 18; nVulnRep.ab 1; nVulnRep.ba 3; nVulnRep.and 3; nDeathRep.ab 16; nDeathRep.ba 10; nDeathRep.and 37; nCrimTen.ab 4; nCrimTen.ba 4; nCrimTen.and 7; nPoliceTen.ab 11; nPoliceTen.ba 15; nPoliceTen.and 22 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-029** [OK] `law-enforcement-cooperation`: Reporting duties binding any person (child abuse, vulnerable adult abuse, deaths) with no landlord word; crime-free / police-cooperation rules for rentals; police limbs with tenancy words. Battery UTG-C-029 (tCrimeFree 0; nChildRep.ab 9; nChildRep.ba 6; nChildRep.and 18; nVulnRep.ab 1; nVulnRep.ba 3; nVulnRep.and 3; nDeathRep.ab 17; nDeathRep.ba 11; nDeathRep.and 40; nCrimTen.ab 4; nCrimTen.ba 4; nCrimTen.and 7; nPoliceTen.ab 11; nPoliceTen.ba 15; nPoliceTen.and 22 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-028 (INFLECTION warnings on death and police; limbs rerun with deaths? and police(?:s|d)?).
- **UTG-C-030** [OK] `drug-free-housing-addendum`: Any Utah rule on drug-free lease addenda or covenants, drug activity in rentals (including any person knowingly maintaining or permitting a drug place), and medical cannabis in rental housing. Battery UTG-C-030 (tDrugPlace 0; nDrugTen.ab 12; nDrugTen.ba 9; nDrugTen.and 18; nCannabisTen.ab 1; nCannabisTen.ba 0; nCannabisTen.and 1; nDrugPlaceAny.ab 2; nDrugPlaceAny.ba 2; nDrugPlaceAny.and 3 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-C-031** [FAILED] `drug-free-housing-addendum`: Any Utah rule on drug-free lease addenda or covenants, drug activity in rentals (including any person knowingly maintaining or permitting a drug place), and medical cannabis in rental housing. Battery UTG-C-031 (tDrugPlace 5; nDrugTen.ab 12; nDrugTen.ba 9; nDrugTen.and 18; nCannabisTen.ab 1; nCannabisTen.ba 0; nCannabisTen.and 1; nDrugPlaceAny.ab 2; nDrugPlaceAny.ba 2; nDrugPlaceAny.and 3 units hit when run; 3 of 4 positives passed, positive tDrugPlace recorded as failed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-030 (tDrugPlace scope named Utah Code Ann. 58-37-8, which is not in the corpus (drug crimes now in Title 76, Chapter 18); term rerun over Titles 58, 76 and 78B).
- **UTG-C-032** [OK] `drug-free-housing-addendum`: Any Utah rule on drug-free lease addenda or covenants, drug activity in rentals (including any person knowingly maintaining or permitting a drug place), and medical cannabis in rental housing. Battery UTG-C-032 (tDrugPlace 8; nDrugTen.ab 12; nDrugTen.ba 9; nDrugTen.and 18; nCannabisTen.ab 1; nCannabisTen.ba 0; nCannabisTen.and 1; nDrugPlaceAny.ab 2; nDrugPlaceAny.ba 2; nDrugPlaceAny.and 3 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-C-031 (positive 76-9-1309 failed: its words are "maintains any facility or premises"; term widened to allow facility (or premises)).
- **UTG-D-001** [OK] `rental-inspection`: Find the county parallel to Utah Code Ann. 10-8-85.5 (rental dwelling business license, regulatory license, inspections) across recodified Title 17. Battery UTG-D-001 (rentdwell 1; reglic 0; goodll 0; licinsp.ab 4; licinsp.ba 3; licinsp.and 7; rentlic.ab 4; rentlic.ba 4; rentlic.and 6 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-002** [OK] `rental-inspection`: Any Utah rule on government inspection of rental dwellings, inspector entry into a dwelling, or a tenant's duty or consent to admit an inspector (incl. lease-authorized entry). Battery UTG-D-002 (privdwell 3; housinsp 1; insptenant.ab 18; insptenant.ba 28; insptenant.and 54; inspdwell.ab 13; inspdwell.ba 12; inspdwell.and 39; consententer.ab 147; consententer.ba 125; consententer.and 336 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-003** [OK] `health-district-rental-rules`: Any Utah rule making a landlord provide local health department (health district) rental or housing regulations, or refer a tenant to the health department; and health-department rules naming landlords, tenants or rentals. Battery UTG-D-003 (healthdist 1; housingreg 0; hdtenant.ab 3; hdtenant.ba 4; hdtenant.and 8; hdcopy.ab 20; hdcopy.ba 19; hdcopy.and 36 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-004** [OK] `health-district-rental-rules`: Any Utah rule making a landlord provide local health department (health district) rental or housing regulations, or refer a tenant to the health department; and health-department rules naming landlords, tenants or rentals. Battery UTG-D-004 (healthdist 1; housingreg 0; hdtenant.ab 3; hdtenant.ba 5; hdtenant.and 8; hdcopy.ab 20; hdcopy.ba 19; hdcopy.and 36 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-003 (INFLECTION warning: lease limb lacked "leasing"; rerun with leas(?:e|es|ed|ing)).
- **UTG-D-005** [OK] `single-family-zone-lease-limit`: Any Utah rule limiting renting homes in single-family or residential zones unless the owner lives on the lot, or a lot-split/two-unit program with owner-occupancy or rental limits. Battery UTG-D-005 (owneroccupy 49; lotsplit 1; sfrent.ab 15; sfrent.ba 13; sfrent.and 26; primresrent.ab 15; primresrent.ba 19; primresrent.and 26 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-006** [OK] `accessory-dwelling-unit`: Every Utah section on accessory dwelling units (ADUs, internal ADUs, mother-in-law/basement apartments) and their rental; condominium act check. Battery UTG-D-006 (adu 26; aducondo 0; adurent.ab 14; adurent.ba 9; adurent.and 19 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-007** [FAILED] `good-cause-notice`: Any Utah rule requiring good or just cause to end or not renew a residential tenancy, a notice telling tenants whether a good-cause law covers them, or a termination notice that must state its reason. Battery UTG-D-007 (causeterm 341; causetenancy.ab 5; causetenancy.ba 6; causetenancy.and 24; statereason.ab 0; statereason.ba 0; statereason.and 0 units hit when run; 1 of 3 positives passed, positive causeterm, causetenancy recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-008** [OK] `good-cause-notice`: Any Utah rule requiring good or just cause to end or not renew a residential tenancy, a notice telling tenants whether a good-cause law covers them, or a termination notice that must state its reason. Battery UTG-D-008 (causeterm 341; causetenancy.ab 5; causetenancy.ba 6; causetenancy.and 24; reasonnotice.ab 9; reasonnotice.ba 4; reasonnotice.and 16; nonrenew.ab 3; nonrenew.ba 5; nonrenew.and 12 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-007 (positives causeterm and causetenancy named units that do not match; statereason used a narrow [^.;]{0,40} window. Rerun with real positives and 1,200-character near terms only).
- **UTG-D-009** [OK] `tenant-rights-statement`: Any Utah rule requiring a landlord to give a tenant a state-agency statement, summary, guide or handbook of tenant (and landlord) rights and responsibilities, with acknowledgment, at signing or renewal; or a state duty to publish one. Battery UTG-D-009 (rightsresp 129; handbook 92; docTenant.ab 3; docTenant.ba 2; docTenant.and 6; publishLT.ab 0; publishLT.ba 0; publishLT.and 1; acknowledg.ab 6; acknowledg.ba 4; acknowledg.and 13 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-010** [OK] `term-change-notice`: Any Utah rule on notice to change the terms (rent, fees or other terms) of a month-to-month, periodic or at-will tenancy, or treating a term change as a termination. Battery UTG-D-010 (rentincr 14; changeterms 15; changeperiodic.ab 1; changeperiodic.ba 1; changeperiodic.and 1; modifyRA.ab 3; modifyRA.ba 8; modifyRA.and 13 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-011** [FAILED] `substandard-property-receivership`: Any Utah rule for code-enforcement repair orders on substandard rental buildings or a receivership to repair them (rents to a receiver), incl. dangerous/unsafe/unfit building procedures. Battery UTG-D-011 (dangerbldg 5; unfit 2; receivercode.ab 2; receivercode.ba 1; receivercode.and 5; repairorder.ab 7; repairorder.ba 3; repairorder.and 14 units hit when run; 3 of 4 positives passed, positive repairorder recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-012** [OK] `substandard-property-receivership`: Any Utah rule for code-enforcement repair orders on substandard rental buildings or a receivership to repair them (rents to a receiver), incl. dangerous/unsafe/unfit building procedures. Battery UTG-D-012 (dangerbldg 5; unfit 2; receivercode.ab 2; receivercode.ba 1; receivercode.and 5; repairorder.ab 7; repairorder.ba 3; repairorder.and 14 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-011 (positive repairorder named Utah Code Ann. 15A-1-204, whose wording is "ordinance requiring removal, demolition, or repair", not "order"; rerun with a real positive that uses "order").
- **UTG-D-013** [OK] `lead-state-notices`: Any Utah state lead rule for rentals: lead-based paint, lead hazard, lead-safe certification, lead poisoning, lead service lines or lead in water, notices or certificates delivered with a lease. Battery UTG-D-013 (leadpaint 1; leadhazard 2; leadwater 4; leadfetched 3; leadtenant.ab 0; leadtenant.ba 0; leadtenant.and 4 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-014** [OK] `lead-state-notices`: Any Utah state lead rule for rentals: lead-based paint, lead hazard, lead-safe certification, lead poisoning, lead service lines or lead in water, notices or certificates delivered with a lease. Battery UTG-D-014 (leadpaint 1; leadhazard 2; leadwater 4; leadfetched 3; leadtenant.ab 1; leadtenant.ba 1; leadtenant.and 7 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-013 (INFLECTION warning on the lead-near-tenancy term; rerun with lead(?:s|ed|ing)? and no lookahead).
- **UTG-D-015** [OK] `certificate-of-occupancy-disclosure`: Any Utah rule requiring a landlord to disclose or give a tenant a certificate of occupancy, or barring rent or leasing without one. Battery UTG-D-015 (certocc 28; certtenant.ab 1; certtenant.ba 3; certtenant.and 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-016** [OK] `condemned-premises-rent-bar`: Any Utah rule on condemned, vacate-ordered, closed or unfit rentals: bar on collecting rent, tenant rights, and any duty to disclose outstanding inspection, violation or condemnation orders to a tenant. Battery UTG-D-016 (closedocc 16; condemnrent.ab 5; condemnrent.ba 6; condemnrent.and 8; orderdisclose.ab 2; orderdisclose.ba 3; orderdisclose.and 3; unfitrent.ab 2; unfitrent.ba 1; unfitrent.and 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-017** [OK] `condemned-premises-rent-bar`: Any Utah rule on condemned, vacate-ordered, closed or unfit rentals: bar on collecting rent, tenant rights, and any duty to disclose outstanding inspection, violation or condemnation orders to a tenant. Battery UTG-D-017 (closedocc 16; condemnrent.ab 6; condemnrent.ba 6; condemnrent.and 9; orderdisclose.ab 2; orderdisclose.ba 3; orderdisclose.and 3; unfitrent.ab 2; unfitrent.ba 1; unfitrent.and 3 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-016 (INFLECTION warning on rent; rerun with rent(?:s|ed|ing|al|als)?).
- **UTG-D-018** [OK] `inspection-notice-penalty`: Any Utah rule requiring notice of move-in or move-out inspection rights, and any penalty (forfeiture of deductions, loss of deposit) for failing to give it or to make an inventory. Battery UTG-D-018 (walkthrough 7; inspdeposit.ab 28; inspdeposit.ba 24; inspdeposit.and 60; forfeitdeduct.ab 22; forfeitdeduct.ba 20; forfeitdeduct.and 40 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-019** [OK] `sanitary-code-variance`: Any Utah rule requiring a health, sanitary, housing, building or fire code variance, exception or waiver for a rental to be given to tenants or attached to the lease. Battery UTG-D-019 (varcode.ab 27; varcode.ba 20; varcode.and 41; vartenant.ab 0; vartenant.ba 2; vartenant.and 6 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-020** [OK] `frozen-standard-incorporation`: How Utah incorporates outside building, fire and safety codes: named (frozen) editions, moving incorporation (latest/current edition, as amended), and code-in-effect-at-construction rules reaching rentals. Battery UTG-D-020 (namededition 13; moving 40; ineffectcode.ab 10; ineffectcode.ba 9; ineffectcode.and 16 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-021** [OK] `lease-registration`: Any Utah rule on recording or registering a residential lease, the effect of an unrecorded lease against a buyer or lender, and possession as notice. Battery UTG-D-021 (memolease 3; recordlease.ab 9; recordlease.ba 8; recordlease.and 13; registerlease.ab 35; registerlease.ba 45; registerlease.and 97; possnotice.ab 5; possnotice.ba 3; possnotice.and 9 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-022** [OK] `lease-registration`: Any Utah rule on recording or registering a residential lease, the effect of an unrecorded lease against a buyer or lender, and possession as notice. Battery UTG-D-022 (memolease 3; recordlease.ab 9; recordlease.ba 8; recordlease.and 13; registerlease.ab 35; registerlease.ba 45; registerlease.and 97; possnotice.ab 5; possnotice.ba 3; possnotice.and 9 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-021 (INFLECTION warning on possession; rerun with possessions?).
- **UTG-D-023** [OK] `portfolio-thresholds`: Utah rules whose duties or exemptions turn on the number of units a landlord owns or a building contains (portfolio or building-size thresholds), incl. two-limb exemptions. Battery UTG-D-023 (countunits.ab 38; countunits.ba 44; countunits.and 75; countrental.ab 12; countrental.ba 12; countrental.and 25 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-024** [OK] `student-housing`: Any Utah rule on student housing: exemptions from landlord-tenant protections, duties for school-owned or private student housing, dormitories, approved or contracted student housing. Battery UTG-D-024 (studhousing 41; studtenant.ab 6; studtenant.ba 5; studtenant.and 9; schoolowned.ab 1; schoolowned.ba 1; schoolowned.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-025** [FAILED] `family-child-care`: Any Utah rule on a tenant running a family or home child care in a rental: landlord must allow, conditions (insurance, liability), or local zoning/licensing limits on residential child care. Battery UTG-D-025 (cctenant.ab 3; cctenant.ba 3; cctenant.and 10; ccresidence.ab 9; ccresidence.ba 5; ccresidence.and 11 units hit when run; 1 of 2 positives passed, positive ccresidence recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-026** [OK] `family-child-care`: Any Utah rule on a tenant running a family or home child care in a rental: landlord must allow, conditions (insurance, liability), or local zoning/licensing limits on residential child care. Battery UTG-D-026 (cctenant.ab 3; cctenant.ba 3; cctenant.and 10; ccresidence.ab 10; ccresidence.ba 7; ccresidence.and 13 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-025 (positive ccresidence named Utah Code Ann. 10-8-84.6, which has no residence word; rerun with a real positive (26B-2-404) and the home-of-the-provider phrase added).
- **UTG-D-027** [OK] `home-business`: Any Utah rule making a home-based business a permitted use of a dwelling, limiting local regulation of home businesses, or addressing whether a lease may restrict one. Battery UTG-D-027 (homebiz 12; biztenant.ab 1; biztenant.ba 1; biztenant.and 5 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-028** [OK] `sfr-occupancy-disclosure`: Any Utah rule setting font size, type, first-page placement or conspicuousness for a residential lease disclosure, or a single-family-residence occupancy (squatter/unlawful occupant) disclosure in a lease. Battery UTG-D-028 (fontlease.ab 14; fontlease.ba 20; fontlease.and 34; sfroccupy.ab 0; sfroccupy.ba 0; sfroccupy.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-D-029** [OK] `sfr-occupancy-disclosure`: Any Utah rule setting font size, type, first-page placement or conspicuousness for a residential lease disclosure, or a single-family-residence occupancy (squatter/unlawful occupant) disclosure in a lease. Battery UTG-D-029 (fontlease.ab 14; fontlease.ba 20; fontlease.and 34; sfroccupy.ab 0; sfroccupy.ba 0; sfroccupy.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-D-028 (INFLECTION warnings on font and boldface; rerun with fonts? and boldfaced?).
- **UTG-E-001** [FAILED] `habitability-materiality`: Every Utah section setting a materiality or health-and-safety threshold for a dwelling condition (Fit Premises Act 57-22-3(3) and any other). Battery UTG-E-001 (matl 27; subrisk 1; matldwell.ab 6; matldwell.ba 4; matldwell.and 7 units hit when run; 2 of 3 positives passed, positive subrisk recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-002** [OK] `habitability-materiality`: Every Utah section setting a materiality or health-and-safety threshold for a dwelling condition (Fit Premises Act 57-22-3(3) and any other). Battery UTG-E-002 (matl 27; subrisk 2; matldwell.ab 6; matldwell.ba 4; matldwell.and 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-E-001 (subrisk positive failed: subsection labels (3)(a)(i) sit between "risk of" and "imminent loss of life"; widened the gap to six tokens).
- **UTG-E-003** [OK] `habitability-presumption`: Any Utah presumption (or prima facie / deemed rule) of habitability, unfitness or breach of a habitability duty; companion: every presumption near a tenancy word. Battery UTG-E-003 (warranty 0; presumhab.ab 1; presumhab.ba 3; presumhab.and 4; presumten.ab 4; presumten.ba 4; presumten.and 7 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-004** [OK] `habitability-statement`: Any Utah rule that a lease or rental agreement must state the unit is or will be delivered fit for habitation; every section using the fitness wording, and fitness wording near lease words. Battery UTG-E-004 (fitwords 4; fitlease.ab 5; fitlease.ba 2; fitlease.and 10 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-005** [OK] `heating`: Any Utah indoor-temperature or heat-supply standard for dwellings, and every heat/heating provision near a tenancy word (who supplies heat, shifting it). Battery UTG-E-005 (tempdwell.ab 2; tempdwell.ba 0; tempdwell.and 11; heatten.ab 9; heatten.ba 6; heatten.and 25 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-006** [OK] `stove-refrigerator`: Any Utah rule requiring a landlord to supply or maintain a stove, oven, range, refrigerator or cooking facility; every such word in the Code, and near tenancy words. Battery UTG-E-006 (kitchen 18; kitchenten.ab 10; kitchenten.ba 8; kitchenten.and 17 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-007** [OK] `furnishings-included`: Any Utah rule on furnished rentals (inventory, condition, deposit, maintenance of furniture) - furniture/furnished words near tenancy words. Battery UTG-E-007 (furnunit 0; furnten.ab 19; furnten.ba 19; furnten.and 37 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-008** [OK] `maintenance-duty-shift`: Any Utah condition on shifting repair or maintenance to a tenant beyond Utah Code Ann. 57-22-3(4): consideration, rent credit, conspicuous writing, separate agreement, specified work, unit-type limits. Battery UTG-E-008 (shiftcond.ab 37; shiftcond.ba 48; shiftcond.and 96; allocten.ab 2; allocten.ba 5; allocten.and 5 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-009** [OK] `promises-to-repair`: Any Utah rule that a landlord's promise to clean, repair or improve a unit be written, dated or given before signing; promise words near repair words, completion-date words near tenancy words. Battery UTG-E-009 (promrep.ab 5; promrep.ba 6; promrep.and 15; compdate.ab 0; compdate.ba 0; compdate.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-010** [OK] `repair-notice`: Every Utah section putting repair words near tenancy words (to find any repair-notice rule besides Utah Code Ann. 57-22-6), and any rule on verbal or oral repair notice. Battery UTG-E-010 (repten.ab 16; repten.ba 15; repten.and 37; oralnotice.ab 3; oralnotice.ba 3; oralnotice.and 11 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-011** [OK] `repair-cost-termination`: Any Utah rule letting an owner end a tenancy instead of repairing because repair cost is unreasonable or exceeds rent or value; companion: owner termination where the unit is unfit. Battery UTG-E-011 (unfitocc 5; costrent.ab 5; costrent.ba 6; costrent.and 8 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-012** [OK] `repair-escrow-exemption-notice`: Any Utah rent-escrow or rent-withholding remedy, any landlord exemption from tenant remedies by unit count or size, and any notice of such an exemption. Battery UTG-E-012 (escrowrent.ab 7; escrowrent.ba 8; escrowrent.and 19; unitcount.ab 2; unitcount.ba 2; unitcount.and 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-013** [OK] `landlord-self-cure`: Any Utah right of a landlord to cure a tenant's breach (enter, do the work, bill the cost, treat it as rent); cure words near tenancy words, cost-as-rent wording. Battery UTG-E-013 (asrent 1; cureten.ab 10; cureten.ba 12; cureten.and 19 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-014** [OK] `landlord-breach-remedy`: Every Utah tenant remedy against a landlord's breach: abatement, rent withholding, termination by the tenant, constructive eviction, damages for exclusion; abatement/termination words near tenancy words. Battery UTG-E-014 (constructive 1; tenremedy.ab 16; tenremedy.ba 13; tenremedy.and 20 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-015** [OK] `rent-into-court-counterclaim`: Utah statutes on counterclaims in possession actions and on rent paid into court or a court registry as a condition of defending or of a jury trial or continuance. Battery UTG-E-015 (registry 27; ccten.ab 0; ccten.ba 6; ccten.and 9 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-016** [OK] `shutdown-rent-protection`: Any Utah rent, late-fee or eviction protection for government employees or contractors during a government shutdown, furlough or lapse in appropriations. Battery UTG-E-016 (shutdown 11; shutrent.ab 0; shutrent.ba 0; shutrent.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-017** [OK] `subsidy-habitability-proration`: Any Utah rule on how a housing subsidy figures in a rent abatement or proration for an uninhabitable unit; fetched federal HQS abatement text located. Battery UTG-E-017 (hapabate 1; subabate.ab 3; subabate.ba 7; subabate.and 14 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-018** [OK] `subsidized-inspection-refusal`: Any Utah rule on inspections of subsidized or voucher units (tenant or landlord refusing an inspection, inspector access); fetched federal inspection wording located. Battery UTG-E-018 (fedinsp 6; subinsp.ab 18; subinsp.ba 10; subinsp.and 33; refuseinsp.ab 1; refuseinsp.ba 1; refuseinsp.and 2 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-019** [FAILED] `alt-housing`: Any Utah duty on a landlord to provide alternative, temporary or substitute housing or relocation help to a tenant (repairs, casualty, condemnation, closure). Battery UTG-E-019 (althouse.ab 30; althouse.ba 28; althouse.and 51 units hit when run; 0 of 1 positives passed, positive althouse recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-020** [OK] `alt-housing`: Any Utah duty on a landlord to provide alternative, temporary or substitute housing or relocation help to a tenant (repairs, casualty, condemnation, closure). Battery UTG-E-020 (althouse.ab 30; althouse.ba 28; althouse.and 51 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-E-019 (positive unit 57-12-5 has no tenancy word within the window; positive moved to 57-12-2, which the pattern hits).
- **UTG-E-021** [OK] `other-landlord-facilities`: Any Utah consumer-protection, product-safety or other duty on a landlord or building owner for a building facility (garage door opener, elevator, pool, laundry, playground, mailbox). Battery UTG-E-021 (garagedoor 2; facility.ab 9; facility.ba 6; facility.and 23 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-022** [OK] `other-landlord-facilities`: Role-free companion to UTG-E-021: any Utah duty on anyone for playground equipment, laundry equipment or rooms, or garage door openers. Battery UTG-E-022 (rolefree 9 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-023** [FAILED] `quiet-possession`: Any Utah statutory covenant of quiet enjoyment or quiet possession running from landlord to tenant; every quiet/peaceable possession or enjoyment phrase in the Code and Constitution. Battery UTG-E-023 (quiet 6; quietten.ab 3; quietten.ba 3; quietten.and 4 units hit when run; 1 of 2 positives passed, positive quietten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-E-024** [OK] `quiet-possession`: Any Utah statutory covenant of quiet enjoyment or quiet possession running from landlord to tenant; every quiet/peaceable possession or enjoyment phrase in the Code and Constitution. Battery UTG-E-024 (quiet 6; quietten.ab 3; quietten.ba 3; quietten.and 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-E-023 (quietten positive 78B-6-809 has no tenancy word (it says plaintiff and defendant); positive moved to 57-22-5).
- **UTG-F-001** [OK] `fire-sprinkler-duty`: Sprinkler duties, retrofit rules, sprinkler disclosure, grants or credits, and any sprinkler rule reaching a landlord, tenant or rental. Battery UTG-F-001 (spr 29; suppr 37; retro 13; r313 1; sprll.ab 7; sprll.ba 5; sprll.and 10; sprmoney.ab 6; sprmoney.ba 5; sprmoney.and 13 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-002** [OK] `fire-sprinkler-duty`: Sprinkler duties, retrofit rules, sprinkler disclosure, grants or credits, and any sprinkler rule reaching a landlord, tenant or rental. Battery UTG-F-002 (spr 29; suppr 37; retro 13; r313 1; sprll.ab 7; sprll.ba 5; sprll.and 10; sprmoney.ab 6; sprmoney.ba 5; sprmoney.and 13 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-F-001 (INFLECTION warnings on rental, credit, notice; rerun with inflected forms).
- **UTG-F-003** [FAILED] `water-heater-temperature`: Water heater temperature settings, window guards and fall protection, security or burglar bars, steam radiator covers. Battery UTG-F-003 (wh 11; scald 0; wguard 0; r312 1; egress 7; radiator 0; hwtemp.ab 5; hwtemp.ba 4; hwtemp.and 8; hwten.ab 1; hwten.ba 0; hwten.and 3; winchild.ab 6; winchild.ba 7; winchild.and 17; winten.ab 6; winten.ba 7; winten.and 15 units hit when run; 9 of 10 positives passed, positive hwten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-004** [OK] `water-heater-temperature`: Water heater temperature settings, window guards and fall protection, security or burglar bars, steam radiator covers. Battery UTG-F-004 (wh 11; scald 0; wguard 0; r312 1; egress 7; radiator 0; hwtemp.ab 7; hwtemp.ba 4; hwtemp.and 9; hwten.ab 3; hwten.ba 2; hwten.and 6; winchild.ab 6; winchild.ba 7; winchild.and 17; winten.ab 6; winten.ba 7; winten.and 15 units hit when run; 10 of 10 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-F-003 (positive hwten failed: Utah Code Ann. 57-22-3 says "hot and cold water"; hot-water limbs widened).
- **UTG-F-005** [OK] `pool-safety`: Pool, spa and hot tub safety: barriers, fences, notices, health rules, and any pool rule reaching a landlord, tenant, apartment or rental. Battery UTG-F-005 (pool 20; drown 1; poolsafe.ab 5; poolsafe.ba 3; poolsafe.and 10; poolten.ab 5; poolten.ba 2; poolten.and 7 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-006** [OK] `security-devices`: Locks, deadbolts, door viewers, rekeying, security devices, key control, smart or electronic locks and access credentials in rentals. Battery UTG-F-006 (dead 15; rekey 3; smart 5; keybox 6; lockten.ab 4; lockten.ba 7; lockten.and 13; biom.ab 8; biom.ba 10; biom.and 26; empscreen.ab 0; empscreen.ba 1; empscreen.and 2 units hit when run; 7 of 7 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-007** [OK] `security-devices`: Locks, deadbolts, door viewers, rekeying, security devices, key control, smart or electronic locks and access credentials in rentals. Battery UTG-F-007 (dead 15; rekey 3; smart 5; keybox 6; lockten.ab 4; lockten.ba 7; lockten.and 13; biom.ab 9; biom.ba 10; biom.and 27; empscreen.ab 0; empscreen.ba 1; empscreen.and 2 units hit when run; 7 of 7 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-F-006 (INFLECTION warning on access in the biom near term; rerun with inflected forms).
- **UTG-F-008** [OK] `common-area-lighting`: Common-area and exterior lighting duties, tenant-metered common-area power, balcony, deck and exterior elevated element inspection. Battery UTG-F-008 (balc 13; egressill 22; calight.ab 15; calight.ba 22; calight.and 37; lightten.ab 17; lightten.ba 11; lightten.and 38; balcinsp.ab 6; balcinsp.ba 5; balcinsp.and 11; balcten.ab 1; balcten.ba 2; balcten.and 6 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-009** [OK] `asbestos-hazards`: Asbestos notice or disclosure to tenants or occupants; bed bugs, pests and extermination; pesticide application notices; waterbeds and liquid-filled furniture. Battery UTG-F-009 (asb 20; bedbug 0; pest 47; pesticide 27; waterbed 5; asbten.ab 4; asbten.ba 4; asbten.and 5; pestten.ab 6; pestten.ba 4; pestten.and 9; pestnote.ab 8; pestnote.ba 8; pestnote.and 14; pestres.ab 1; pestres.ba 1; pestres.and 4 units hit when run; 9 of 9 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-010** [OK] `portable-cooling-device`: Tenant or owner right to install a portable, window or other cooling device; landlord or association restrictions; air conditioning duties. Battery UTG-F-010 (cool 34; coolten.ab 6; coolten.ba 6; coolten.and 11; coolrestr.ab 3; coolrestr.ba 3; coolrestr.and 14 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-011** [OK] `portable-cooling-device`: Tenant or owner right to install a portable, window or other cooling device; landlord or association restrictions; air conditioning duties. Battery UTG-F-011 (cool 34; coolten.ab 6; coolten.ba 6; coolten.and 11; coolrestr.ab 3; coolrestr.ba 3; coolrestr.and 14 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-F-010 (INFLECTION warning on void in coolrestr; rerun with voided/voids).
- **UTG-F-012** [OK] `tenant-security-cameras`: Tenant-installed security cameras and video doorbells; landlord or association limits; audio recording consent; privacy in a private place. Battery UTG-F-012 (perscam 4; consent 2; camten.ab 3; camten.ba 3; camten.and 10; camowner.ab 9; camowner.ba 7; camowner.and 15 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-013** [OK] `private-well-testing`: Private or domestic well testing and disclosure of well water results to tenants or buyers; public water system status of a landlord-run well. Battery UTG-F-013 (well 6; pws 32; welltest.ab 2; welltest.ba 3; welltest.and 5; wellten.ab 3; wellten.ba 6; wellten.and 15 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-014** [OK] `hazardous-contamination-disclosure`: Contamination disclosure in leases (methamphetamine, hazardous materials, environmental covenants, institutional controls, brownfields, cleanup sites) and any bar on leasing contaminated property. Battery UTG-F-014 (envcov 23; meth 31; conten.ab 19; conten.ba 19; conten.and 35; condisc.ab 48; condisc.ba 47; condisc.and 105; conbar.ab 3; conbar.ba 4; conbar.and 5 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-015** [OK] `hazardous-contamination-disclosure`: Contamination disclosure in leases (methamphetamine, hazardous materials, environmental covenants, institutional controls, brownfields, cleanup sites) and any bar on leasing contaminated property. Battery UTG-F-015 (envcov 23; meth 31; conten.ab 19; conten.ba 19; conten.and 35; condisc.ab 48; condisc.ba 47; condisc.and 105; conbar.ab 3; conbar.ba 4; conbar.and 5 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-F-014 (INFLECTION warning on vacate in conbar; rerun with vacates, vacated, vacating).
- **UTG-F-016** [OK] `defective-drywall-disclosure`: Defective (corrosive or imported) drywall disclosure; chemical-exposure warnings in rentals (Proposition 65 style), formaldehyde notices. Battery UTG-F-016 (drywall 5; defdry 0; chemwarn 2; drywten.ab 1; drywten.ba 1; drywten.and 1; chemten.ab 1; chemten.ba 0; chemten.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-017** [OK] `military-air-zone-disclosure`: Military installation, air installation noise or accident zone, and airport overlay disclosures reaching a lease or sale, and termination rights. Battery UTG-F-017 (mil 97; noise 8; milten.ab 30; milten.ba 28; milten.and 48; mildisc.ab 5; mildisc.ba 4; mildisc.and 8 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-018** [OK] `ordnance-demolition-meter-disclosures`: Former ordnance or munitions site disclosure; notice of demolition or demolition permit to tenants; shared or master utility meter disclosure. Battery UTG-F-018 (ord 3; meter 1; demoten.ab 6; demoten.ba 3; demoten.and 10; demonote.ab 11; demonote.ba 10; demonote.and 23; ordten.ab 1; ordten.ba 1; ordten.and 3; meterten.ab 10; meterten.ba 13; meterten.and 29 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-019** [OK] `shoreline-access-disclosure`: Shoreline, beach, sovereign land or public water access disclosure to tenants or buyers, and public rights of way to the shore. Battery UTG-F-019 (shore 30; pubaccess 33; shoreten.ab 16; shoreten.ba 16; shoreten.and 25; shoredisc.ab 8; shoredisc.ba 6; shoredisc.and 15 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-F-020** [OK] `energy-data-release`: Energy benchmarking and release of tenant utility usage data to owners; tenant recycling notices and multifamily recycling duties. Battery UTG-F-020 (bench 2; recyc 116; usageten.ab 4; usageten.ba 5; usageten.and 20; usagerel.ab 4; usagerel.ba 2; usagerel.and 11; recten.ab 5; recten.ba 13; recten.and 18 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-001** [OK] `cure-and-eviction-grounds`: Any materiality requirement for a lease breach as an eviction ground, any cure-period or right-to-cure rule, and any lease power to set its own cure period, outside Part 8's three-day notices. Battery UTG-G-001 (mat 28; cureph 21; matten.ab 1; matten.ba 3; matten.and 4; curelease.ab 0; curelease.ba 0; curelease.and 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-002** [OK] `nonpayment-notice`: Prescribed wording or form for a nonpayment notice, a once-per-year limit on curing by tender, a mediation precondition, extra days for a mailed notice, and everyday pay-or-quit phrasings. Battery UTG-G-002 (payquit 1; form.ab 1; form.ba 1; form.and 6; tender.ab 0; tender.ba 0; tender.and 1; mediation.ab 1; mediation.ba 1; mediation.and 1; mailadd.ab 0; mailadd.ba 0; mailadd.and 0 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-003** [OK] `criminal-activity`: Statutes voiding a lease for criminal use, any landlord duty to evict or remove for crime, any owner safe harbor for evicting, any crime-free lease statute, and any rule that the lease must state a criminal-activity term. Battery UTG-G-003 (leasevoid 5; crimefree 0; evictduty.ab 1; evictduty.ba 1; evictduty.and 2; safeharbor.ab 0; safeharbor.ba 0; safeharbor.and 0; leasestate.ab 0; leasestate.ba 0; leasestate.and 1 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-004** [OK] `landlord-remedies-termination`: Rent acceleration and mitigation rules tied to a lease or tenancy, and any election-of-remedies rule between possession and rent. Battery UTG-G-004 (elect 3; accel.ab 5; accel.ba 4; accel.and 8; mitig.ab 17; mitig.ba 20; mitig.and 44 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-005** [OK] `forfeiture-redemption`: Relief against forfeiture or reinstatement of a tenancy after the notice period or judgment, partial-rent acceptance rules, third-party or charity payments, and payment of a judgment stopping restitution (serves topics forfeiture-redemption and redemption). Battery UTG-G-005 (relief.ab 8; relief.ba 9; relief.and 18; restore.ab 3; restore.ba 5; restore.and 10; partial.ab 0; partial.ba 2; partial.and 7; thirdpay.ab 5; thirdpay.ba 3; thirdpay.and 5; satisfy.ab 1; satisfy.ba 1; satisfy.and 2 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-006** [OK] `possession-bond`: Any bond by a tenant to deliver possession at the end of the term, any possession bond outside Part 8, and every bond rule tied to possession of leased premises. Battery UTG-G-006 (possbond 1; bonddeliver.ab 5; bonddeliver.ba 5; bonddeliver.and 6; bondten.ab 10; bondten.ba 19; bondten.and 32 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-007** [FAILED] `eviction-hardship-stay`: Any stay, postponement or continuance of an eviction for hardship, weather, season, holidays, illness or a pending assistance application, and every stay rule tied to eviction or restitution. Battery UTG-G-007 (moratorium 0; stayev.ab 4; stayev.ba 2; stayev.and 5; hardship.ab 0; hardship.ba 0; hardship.and 0 units hit when run; 2 of 3 positives passed, positive hardship recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-008** [OK] `eviction-hardship-stay`: Any stay, postponement or continuance of an eviction for hardship, weather, season, holidays, illness or a pending assistance application, and every stay rule tied to eviction or restitution. Battery UTG-G-008 (moratorium 0; stayev.ab 4; stayev.ba 2; stayev.and 5; hardship.ab 0; hardship.ba 0; hardship.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-G-007 (positive for hardship named 78B-6-815, which has holiday but no eviction word; replaced by a synthetic positive and hospitalization added).
- **UTG-G-009** [OK] `eviction-service-party`: Any rule letting a lease or tenant name a person to accept eviction notices or process, and any substitute-agent rule for serving a tenant (address confidentiality). Battery UTG-G-009 (procagent 3; tenproc.ab 1; tenproc.ba 2; tenproc.and 11; tennotagent.ab 0; tennotagent.ba 0; tennotagent.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-010** [OK] `cold-weather-vacate-notice`: Any duty on a tenant to notify the landlord before vacating or leaving in cold weather, any winter date window tied to a tenancy, and freeze-protection rules for rentals. Battery UTG-G-010 (frozenpipe 2; coldvacate.ab 4; coldvacate.ba 2; coldvacate.and 11; coldten.ab 0; coldten.ba 1; coldten.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-011** [OK] `social-security-defense`: Any eviction defense, continuance or reinstatement when a government benefit, Social Security payment, housing voucher or other assistance is late. Battery UTG-G-011 (benefitev.ab 0; benefitev.ba 0; benefitev.and 0; latebenefit.ab 0; latebenefit.ba 0; latebenefit.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-012** [OK] `tenant-bankruptcy`: Any Utah rule on a tenant's bankruptcy and eviction, restitution, lease termination or deposits; federal stay and lease provisions in the fetched files. Battery UTG-G-012 (bkfed 1; bkev.ab 0; bkev.ba 0; bkev.and 0; bkten.ab 2; bkten.ba 1; bkten.and 5 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-013** [OK] `minor-tenant-filing`: Any rule on minors as tenants, lease signers or eviction defendants, emancipated minors' contracts, and the age of majority. Battery UTG-G-013 (majority 7; minorlease.ab 15; minorlease.ba 14; minorlease.and 45; emancontract.ab 5; emancontract.ba 3; emancontract.and 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-014** [OK] `entity-landlord-court-representation`: Who may appear in court for an entity landlord: non-lawyer, employee or agent representation rules, and any practice-of-law rule tied to evictions, landlords or property managers. Battery UTG-G-014 (entrep.ab 1; entrep.ba 2; entrep.and 2; uplten.ab 0; uplten.ba 0; uplten.and 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-015** [FAILED] `limitation-of-actions`: Any limitation period specific to rent, leases, tenancies, security deposits or unlawful detainer, beyond the general Title 78B, Chapter 2 periods. Battery UTG-G-015 (limrent.ab 10; limrent.ba 6; limrent.and 26 units hit when run; 0 of 1 positives passed, positive limrent recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-016** [OK] `limitation-of-actions`: Any limitation period specific to rent, leases, tenancies, security deposits or unlawful detainer, beyond the general Title 78B, Chapter 2 periods. Battery UTG-G-016 (limrent.ab 20; limrent.ba 18; limrent.and 55 units hit when run; 1 of 1 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-G-015 (positive 78B-2-217 states its period as seven years after, which the b pattern lacked; b widened to number-years-after/from).
- **UTG-G-017** [OK] `rent-demand-bar`: Any bar on demanding, collecting or suing for rent, raising rent or serving a pay-or-quit notice while a unit is substandard, cited, unfit or unlicensed. Battery UTG-G-017 (maynotrent 1; rentsub.ab 1; rentsub.ba 2; rentsub.and 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-018** [OK] `double-letting`: Any rule on renting the same unit or room to two tenants for the same period, competing leases, or failure to deliver possession, and rental-scam offenses. Battery UTG-G-018 (deliver 1; doublelet 0; sameunit.ab 2; sameunit.ba 4; sameunit.and 8; rentscam.ab 1; rentscam.ba 1; rentscam.and 8 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-019** [OK] `trespass-notice`: Trespass rules reaching landlords, tenants, guests and common areas of rental property, and any barred-person or trespass-warning program. Battery UTG-G-019 (barred 2; trespten.ab 5; trespten.ba 4; trespten.and 8 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-020** [OK] `tenancy-at-will`: Every Utah rule on tenancies at will or at sufferance: definition, creation, notice, termination. Battery UTG-G-020 (atwill 1; willten.ab 6; willten.ba 1; willten.and 10 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-021** [OK] `seasonal-tenancy`: Any rule on seasonal, vacation, recreational or short-term residential tenancies (exemptions, notices, deposits, termination). Battery UTG-G-021 (seasonal 3; shortres.ab 9; shortres.ba 12; shortres.and 19 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-022** [OK] `extended-absence-notice`: Any tenant duty to give notice of an absence, any landlord entry right during an absence, and every rule turning on a tenant's notice of absence. Battery UTG-G-022 (absnotice.ab 62; absnotice.ba 63; absnotice.and 138; absten.ab 13; absten.ba 21; absten.and 48 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-023** [OK] `statutory-early-termination`: Every statutory right of a tenant or renter to end a residential lease early (any ground), including misrepresentation, and the federal servicemember right in the fetched files. Battery UTG-G-023 (tenterm 5; fedterm 1; termagree.ab 8; termagree.ba 5; termagree.and 12; misrep.ab 0; misrep.ba 0; misrep.and 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-024** [OK] `statutory-early-termination`: Every statutory right of a tenant or renter to end a residential lease early (any ground), including misrepresentation, and the federal servicemember right in the fetched files. Battery UTG-G-024 (fedterm 1; futureobl 2; tenmay.ab 6; tenmay.ba 6; tenmay.and 9; termagree.ab 8; termagree.ba 5; termagree.and 12; misrep.ab 0; misrep.ba 0; misrep.and 0 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-G-023 (tenterm used a length-capped character class [^.;]{1,80}, which rule 19 forbids; replaced by a 1,200-character near term).
- **UTG-G-025** [OK] `infirmity-termination`: Any right to end a residential lease for age, illness, disability, incapacity, death or entry into a care facility, and any incapacity rule for terminable-at-will hirings. Battery UTG-G-025 (incap 4; infterm.ab 0; infterm.ba 0; infterm.and 0; infrent.ab 10; infrent.ba 3; infrent.and 19 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-026** [FAILED] `environmental-event-termination`: Any right of a landlord or tenant to end a lease after an environmental event (contamination, flood, fire, wildfire, earthquake, public health emergency, disaster, government vacate order), and environmental rules reaching tenants. Battery UTG-G-026 (envterm.ab 0; envterm.ba 0; envterm.and 0; envten.ab 2; envten.ba 2; envten.and 17 units hit when run; 0 of 2 positives passed, positive envterm, envten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-G-027** [OK] `environmental-event-termination`: Any right of a landlord or tenant to end a lease after an environmental event (contamination, flood, fire, wildfire, earthquake, public health emergency, disaster, government vacate order), and environmental rules reaching tenants. Battery UTG-G-027 (envterm.ab 1; envterm.ba 0; envterm.and 1; envten.ab 15; envten.ba 20; envten.and 48 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-G-026 (both positives failed: 57-22-6 says not fit for occupancy and 57-27-201 says lessor and lease, which the patterns lacked; patterns widened and casualty added).
- **UTG-G-028** [OK] `owner-move-in-reservation`: Any statute giving, limiting or conditioning a landlord's right to end a tenancy for owner or family occupancy, sale or renovation, including holding periods; federal voucher rule in fetched files. Battery UTG-G-028 (fedpersonal 1; ownuse.ab 0; ownuse.ba 0; ownuse.and 0 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-001** [OK] `automatic-renewal`: Any automatic-renewal, evergreen, or deemed-renewal rule reaching a lease, any pre-renewal reminder rule, and any limit on how early a landlord may require a tenant to commit to renewing. Battery UTG-H-001 (autorenew 28; deemedrenew 2; nonrenew 23; renewten.ab 58; renewten.ba 58; renewten.and 121; extendterm.ab 2; extendterm.ba 1; extendterm.and 4 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-002** [OK] `automatic-renewal`: Companion: everyday words for a lease that rolls over (roll over, renewal term, option to renew, renewal notice) near tenancy words. Battery UTG-H-002 (rollover 13; renewterm 65; rollten.ab 6; rollten.ba 6; rollten.and 10 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-003** [OK] `guarantor-renewal`: Any statute on lease guarantors, cosigners or sureties: liability limited to the original term, renewal or extension terms, maximum-amount or end-date requirements, revocation of a continuing guaranty, discharge by alteration, or deposits demanded from a guarantor. Battery UTG-H-003 (cosign 13; contguar 1; suretydisch 14; guarten.ab 23; guarten.ba 30; guarten.and 58; guarrenew.ab 30; guarrenew.ba 31; guarrenew.and 64 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-004** [OK] `guarantor-renewal`: Any statute on lease guarantors, cosigners or sureties: liability limited to the original term, renewal or extension terms, maximum-amount or end-date requirements, revocation of a continuing guaranty, discharge by alteration, or deposits demanded from a guarantor. Battery UTG-H-004 (cosign 13; contguar 1; suretydisch 14; guarten.ab 23; guarten.ba 30; guarten.and 58; guarrenew.ab 31; guarrenew.ba 31; guarrenew.and 65 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-003 (INFLECTION warning on extension; rerun with extensions? and extend(?:s|ed|ing)?).
- **UTG-H-005** [OK] `rent-escalation`: Any rule on rent escalation clauses, scheduled or index-linked rent increases during a lease term, retaliation safe harbours for increases, or rent-increase notice measured against the tenant's notice. Battery UTG-H-005 (escal 21; rentincr 2; rentcpi.ab 7; rentcpi.ba 5; rentcpi.and 13; retalrent.ab 2; retalrent.ba 3; retalrent.and 3 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-006** [FAILED] `tax-escalation`: Any rule on passing property-tax or insurance increases to a residential tenant (tax escalation clauses, exact share, abatement refunds, deposit deductions for a tax share). Battery UTG-H-006 (taxesc 8; ptaxten.ab 8; ptaxten.ba 15; ptaxten.and 25; taxrentsh.ab 0; taxrentsh.ba 0; taxrentsh.and 0 units hit when run; 2 of 3 positives passed, positive ptaxten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-007** [OK] `tax-escalation`: Any rule on passing property-tax or insurance increases to a residential tenant (tax escalation clauses, exact share, abatement refunds, deposit deductions for a tax share). Battery UTG-H-007 (taxesc 8; ptaxten.ab 16; ptaxten.ba 17; ptaxten.and 38; taxrentsh.ab 0; taxrentsh.ba 0; taxrentsh.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-006 (positive ptaxten failed and INFLECTION on rent; rerun with rent inflections, passing, and a hit positive).
- **UTG-H-008** [OK] `tax-escalation`: Any rule on passing property-tax or insurance increases to a residential tenant (tax escalation clauses, exact share, abatement refunds, deposit deductions for a tax share). Battery UTG-H-008 (taxesc 8; ptaxten.ab 16; ptaxten.ba 17; ptaxten.and 38; taxrentsh.ab 0; taxrentsh.ba 0; taxrentsh.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-007 (INFLECTION on rental; rerun with rentals?).
- **UTG-H-009** [FAILED] `rent-installments`: Any rule on paying rent in installments, partial payments of rent, acceptance of partial rent after a notice, or rent due dates and payment schedules for a residential tenancy. Battery UTG-H-009 (partpay 49; instrent.ab 14; instrent.ba 12; instrent.and 26; duedate.ab 6; duedate.ba 6; duedate.and 13 units hit when run; 2 of 3 positives passed, positive duedate recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-010** [OK] `rent-installments`: Any rule on paying rent in installments, partial payments of rent, acceptance of partial rent after a notice, or rent due dates and payment schedules for a residential tenancy. Battery UTG-H-010 (partpay 49; instrent.ab 14; instrent.ba 12; instrent.and 26; duedate.ab 6; duedate.ba 6; duedate.and 13 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-009 (positive duedate failed on 57-16-4 (wording "dates on which the payment of rent ... are due"); rerun with a hit positive).
- **UTG-H-011** [FAILED] `notice-to-vacate-additional-terms`: Any rule on a move-out or notice-to-vacate form the landlord asks a tenant to sign that adds terms not in the lease, and any bar on alterations or work that make a unit uninhabitable while a notice to vacate is pending. Battery UTG-H-011 (intentvac 1; vacterms.ab 0; vacterms.ba 0; vacterms.and 0; vacalter.ab 2; vacalter.ba 2; vacalter.and 5 units hit when run; 2 of 3 positives passed, positive vacalter recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-012** [OK] `notice-to-vacate-additional-terms`: Any rule on a move-out or notice-to-vacate form the landlord asks a tenant to sign that adds terms not in the lease, and any bar on alterations or work that make a unit uninhabitable while a notice to vacate is pending. Battery UTG-H-012 (intentvac 1; vacterms.ab 0; vacterms.ba 0; vacterms.and 0; vacalter.ab 7; vacalter.ba 4; vacalter.and 14 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-011 (positive vacalter failed (57-22-6 says not fit for occupancy) and INFLECTION on vacate; rerun with vacat(?:e|es|ed|ing) and not fit for).
- **UTG-H-013** [OK] `conversion-notice`: Any notice, first-refusal or other tenant right on converting rental housing to condominium, cooperative, hotel or other transient use, or demolishing it for that purpose, and any preemption of local conversion rules. Battery UTG-H-013 (condoconv 1; firstref 21; convten.ab 6; convten.ba 6; convten.and 21 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-014** [OK] `foreclosure-disclosure`: Any duty on an owner or landlord (as opposed to the foreclosing party) to disclose a pending foreclosure, notice of default or trustee's sale to a tenant or prospective tenant, before or after signing. Battery UTG-H-014 (forecten.ab 5; forecten.ba 7; forecten.and 14; forecdisc.ab 21; forecdisc.ba 20; forecdisc.and 45 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-015** [OK] `foreclosure-disclosure`: Companion plain terms: pending foreclosure, property in foreclosure, notice to tenant. Battery UTG-H-015 (pendfc 1; noticeten 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-016** [FAILED] `sale-or-management-change`: Any rule on notice to tenants of a sale or change of owner or manager, release of a selling landlord, transfer of deposits or prepaid rent, estoppel or attornment, and seller duties when a rented dwelling is sold. Battery UTG-H-016 (estop 0; newowner 109; saledep.ab 5; saledep.ba 3; saledep.and 7; newownten.ab 6; newownten.ba 7; newownten.and 14 units hit when run; 3 of 4 positives passed, positive saledep recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-017** [OK] `sale-or-management-change`: Any rule on notice to tenants of a sale or change of owner or manager, release of a selling landlord, transfer of deposits or prepaid rent, estoppel or attornment, and seller duties when a rented dwelling is sold. Battery UTG-H-017 (estop 0; newowner 109; saledep.ab 8; saledep.ba 11; saledep.and 18; newownten.ab 6; newownten.ba 7; newownten.and 14 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-016 (positive saledep failed (57-17-4 binds the holder to the act without the word deposit) and INFLECTION on sale; rerun with sales? and deposits?/bound-by-this-act).
- **UTG-H-018** [FAILED] `adverse-proceeding-notice`: Any duty on a landlord to tell tenants or applicants about a lawsuit, condemnation, code-enforcement, tax-sale or other proceeding against the property, or on a tenant to forward to the landlord notice of a proceeding or adverse claim. Battery UTG-H-018 (advclaim 18; procten.ab 0; procten.ba 0; procten.and 1; tenfwd.ab 4; tenfwd.ba 4; tenfwd.and 4 units hit when run; 2 of 3 positives passed, positive procten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-019** [OK] `adverse-proceeding-notice`: Any duty on a landlord to tell tenants or applicants about a lawsuit, condemnation, code-enforcement, tax-sale or other proceeding against the property, or on a tenant to forward to the landlord notice of a proceeding or adverse claim. Battery UTG-H-019 (advclaim 18; procten.ab 13; procten.ba 16; procten.and 29; tenfwd.ab 8; tenfwd.ba 8; tenfwd.and 11 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-018 (positive procten failed and the b patterns used short inner windows; rerun with plain proceeding-near-tenancy and tenant-notify-landlord limbs).
- **UTG-H-020** [OK] `eminent-domain`: Any rule on what happens to a lease and the rent when the property is taken by eminent domain (rent ends or abates, court cancels the lease, lease terms on a taking control, partial taking), and tenant compensation or relocation. Battery UTG-H-020 (rentabate 1; condten.ab 32; condten.ba 34; condten.and 60; displaced.ab 5; displaced.ba 8; displaced.and 9; takeend.ab 1; takeend.ba 2; takeend.and 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-021** [OK] `eminent-domain`: Any rule on what happens to a lease and the rent when the property is taken by eminent domain (rent ends or abates, court cancels the lease, lease terms on a taking control, partial taking), and tenant compensation or relocation. Battery UTG-H-021 (rentabate 1; condten.ab 32; condten.ba 34; condten.and 60; displaced.ab 5; displaced.ba 8; displaced.and 9; takeend.ab 1; takeend.ba 2; takeend.and 2 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-020 (INFLECTION on rent and rental in the displaced limb; rerun with rents?, rentals?, rented, renting).
- **UTG-H-022** [OK] `actual-notice-method`: Any actual-notice requirement in a tenancy and any rule letting the parties agree on an added notice method (text, email, electronic means) for tenancy notices. Battery UTG-H-022 (actualnot 46; agreedmeth 5; actualten.ab 3; actualten.ba 3; actualten.and 5; textten.ab 25; textten.ba 20; textten.and 56 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-023** [OK] `tenant-portal`: Any rule on requiring a tenant to pay rent, sign or receive notices through an online portal or electronic payment, portal or convenience fees, or a required non-electronic alternative. Battery UTG-H-023 (portal 17; epayrent.ab 4; epayrent.ba 1; epayrent.and 9; reqelec.ab 10; reqelec.ba 15; reqelec.and 35 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-024** [OK] `rules-regulations`: Any rule on landlord rules and regulations for a residential tenancy: enforceability conditions, reasonableness, and adopting or amending rules during a tenancy (fixed term or periodic). Battery UTG-H-024 (houserule 117; rulechg.ab 8; rulechg.ba 9; rulechg.and 28; rulereas.ab 9; rulereas.ba 8; rulereas.and 20 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-025** [OK] `lease-type-parity`: Any bar on terms more burdensome for a month-to-month tenant than a fixed-term tenant (or the reverse), or any cap on the rent difference between lease types. Battery UTG-H-025 (m2mterms 2; parity.ab 0; parity.ba 1; parity.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-026** [OK] `lease-type-size`: Any minimum type size, font or legibility rule for a printed residential lease (with or without an evidentiary sanction), and any general rule that small print in a contract is unenforceable. Battery UTG-H-026 (pointtype 74; typelease.ab 6; typelease.ba 2; typelease.and 11 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-027** [OK] `lease-type-parity`: Any bar on terms more burdensome for a month-to-month tenant than a fixed-term tenant (or the reverse), or any cap on the rent difference between lease types. Battery UTG-H-027 (m2mterms 2; parity.ab 0; parity.ba 1; parity.and 1 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-025 (INFLECTION on premium; rerun with premiums?).
- **UTG-H-028** [OK] `lease-type-size`: Any minimum type size, font or legibility rule for a printed residential lease (with or without an evidentiary sanction), and any general rule that small print in a contract is unenforceable. Battery UTG-H-028 (pointtype 74; typelease.ab 6; typelease.ba 2; typelease.and 11 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-026 (INFLECTION on font; rerun with fonts?).
- **UTG-H-029** [OK] `translation-duty`: Any duty to translate a lease or rental document, or to provide it in the language in which it was advertised or negotiated, and any rule on which language version of a contract prevails. Battery UTG-H-029 (otherlang 28; translten.ab 15; translten.ba 21; translten.and 45 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-030** [OK] `optional-lease-terms`: Any statute on a lease with an option to purchase, rent-to-own or lease-purchase of a dwelling (seller disclosure triggered by the option, early exercise, cure periods, forfeiture of option money, recording, cancellation statements). Battery UTG-H-030 (leaseopt 48; optten.ab 15; optten.ba 24; optten.and 29 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-031** [OK] `required-disclosures`: Any required lease disclosure or lease statement not already answered: rent-regulation or just-cause coverage notices, a state form as the first page, a real estate licensee's disclosure of licence status or own-interest when leasing, and any general list of lease disclosures. Battery UTG-H-031 (firstpage 1; licstatus 1; leasedisc.ab 12; leasedisc.ba 8; leasedisc.and 21 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-032** [OK] `emergency-contact`: Any duty to give tenants an emergency or after-hours contact, a management website, a social-services or other hotline notice, or to post emergency contact information in a rental building. Battery UTG-H-032 (hotline 213; emergcont.ab 11; emergcont.ba 12; emergcont.and 19 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-033** [OK] `emergency-contact`: Any duty to give tenants an emergency or after-hours contact, a management website, a social-services or other hotline notice, or to post emergency contact information in a rental building. Battery UTG-H-033 (hotline 10; emergcont.ab 11; emergcont.ba 12; emergcont.and 19 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-032 (plain term matched section numbers 211 and after-hours wording in 213 units, too broad to read; rerun with hotline only).
- **UTG-H-034** [OK] `renters-insurance-rules`: Any rule on a landlord requiring renter's insurance (tenant's choice of carrier, force-placed or landlord-procured coverage, admin fees, proof deadlines), and any required advisory that the landlord does not insure the tenant's property. Battery UTG-H-034 (rentins 1; forceplace 0; insten.ab 9; insten.ba 9; insten.and 17 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-035** [OK] `landlord-liability-insurance`: Any requirement that a residential landlord carry liability or property insurance (alone or as a licensing or registration condition), disclose its insurance to tenants, or buy a fire policy with a tenant relocation benefit. Battery UTG-H-035 (liabins 124; insowner.ab 0; insowner.ba 0; insowner.and 2 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-036** [FAILED] `tenant-insurance-claims`: Any rule on whether a landlord may require a tenant to claim on the tenant's own insurance, subrogation by a landlord's insurer against a tenant, or how a tenant's insurance claim affects the tenancy. Battery UTG-H-036 (subrog 39; claimten.ab 1; claimten.ba 2; claimten.and 4 units hit when run; 1 of 2 positives passed, positive subrog recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-037** [OK] `tenant-insurance-claims`: Any rule on whether a landlord may require a tenant to claim on the tenant's own insurance, subrogation by a landlord's insurer against a tenant, or how a tenant's insurance claim affects the tenancy. Battery UTG-H-037 (subrog 39; claimten.ab 1; claimten.ba 2; claimten.and 4 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-036 (positive subrog failed (31A-22-312 has no subrogation wording); rerun with 31A-21-108).
- **UTG-H-038** [OK] `disaster-duties`: Any rule on what a declared disaster or state of emergency does to a residential tenancy (tenancy ends, rent owed while inaccessible, debris and hazard duties, eviction moratoria, rent or price limits on rentals). Battery UTG-H-038 (excprice 9; disten.ab 1; disten.ba 2; disten.and 4; debris.ab 0; debris.ba 1; debris.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-039** [OK] `disaster-displaced-guests`: Any rule letting a tenant house people displaced by a disaster despite lease guest or occupancy limits, limiting such stays, or treating a displaced person's stay in lodging or a home as not creating a tenancy. Battery UTG-H-039 (displacedg 9; guestocc.ab 5; guestocc.ba 6; guestocc.and 16 units hit when run; 2 of 2 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-040** [OK] `disaster-duties`: Any rule on what a declared disaster or state of emergency does to a residential tenancy (tenancy ends, rent owed while inaccessible, debris and hazard duties, eviction moratoria, rent or price limits on rentals). Battery UTG-H-040 (excprice 9; disten.ab 1; disten.ba 3; disten.and 5; debris.ab 0; debris.ba 1; debris.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-H-038 (INFLECTION on rental, mold and ash; rerun with rentals?, molds?, moldy, ashes?, molded).
- **UTG-H-041** [OK] `tpa-sunset`: Any repeal date, sunset or expiry on a core Utah landlord-tenant statute (Fit Premises Act, deposit chapter, eviction part, fair housing, mobile home park act, rent-control preemption), in the section itself or in the Title 63I repeal lists. Battery UTG-H-041 (repealdate 8; ltrepeal.ab 0; ltrepeal.ba 0; ltrepeal.and 0; sunsetten.ab 0; sunsetten.ba 0; sunsetten.and 0 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-H-042** [OK] `tpa-notice`: Any tenant opportunity-to-purchase or right-of-first-refusal statute on a sale of rental housing (District of Columbia model), and any required lease or notice statement that a unit is covered by, or exempt from, rent limits, just-cause rules or a tenant purchase right. Battery UTG-H-042 (topa 9; exempnot 15; saleoffer.ab 12; saleoffer.ba 11; saleoffer.and 30 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-001** [OK] `utility-submetering-disclosure`: Submetering, master-metering, ratio or allocated utility billing, and resale of electricity, gas, water or sewer service, anywhere in the Code, and any meter rule near a tenancy word. Battery UTG-I-001 (submeter 1; master 1; ratio 0; sepmeter 7; resale.ab 14; resale.ba 9; resale.and 18; meterten.ab 3; meterten.ba 2; meterten.and 16 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-002** [OK] `utility-shutoff-statute`: Statutory utility disconnection rules: shutoff near a tenancy word, winter or medical protections, third-party or landlord notice of disconnection, and owner liability for a tenant's utility bill. Battery UTG-I-002 (wintmed 20; utilterm 0; shutten.ab 1; shutten.ba 4; shutten.and 8; thirdnote.ab 3; thirdnote.ba 2; thirdnote.and 4; ownerpay.ab 35; ownerpay.ba 45; ownerpay.and 62 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-003** [OK] `utility-shutoff-statute`: Rerun of UTG-I-002 with water inflected: statutory utility disconnection rules, winter or medical protections, third-party notice of disconnection, owner liability for a tenant's utility bill. Battery UTG-I-003 (wintmed 20; utilterm 0; shutten.ab 1; shutten.ba 4; shutten.and 8; thirdnote.ab 3; thirdnote.ba 2; thirdnote.and 4; ownerpay.ab 3; ownerpay.ba 3; ownerpay.and 3 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-I-002 (INFLECTION warning on 'water' in the ownerpay limb; rerun with waters? and the same other terms).
- **UTG-I-004** [OK] `utility-landlord-account`: Any utility rule tied to a landlord-tenant word: utility or commodity words near tenancy words, account holder or account-name rules, transfer of service, and utility charges in a rental agreement. Battery UTG-I-004 (acctname 71; transfer 12; utilten.ab 23; utilten.ba 22; utilten.and 54; useexp.ab 9; useexp.ba 9; useexp.and 13 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-005** [OK] `meter-conservation-charge`: On-bill energy-efficiency or conservation charges that attach to a meter or pass to a later customer, energy-savings charges, and any conservation charge near a tenancy word. Battery UTG-I-005 (onbill 0; succust 0; cpace 36; effmeter.ab 1; effmeter.ba 0; effmeter.and 4 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-006** [OK] `telecom-access`: Tenant or occupant telecom access: satellite dishes, antennas, over-the-air reception, cable, broadband or internet service near tenancy or multi-unit words, and access by providers to multiple dwelling units. Battery UTG-I-006 (dish 2; ota 0; mdu 0; antten.ab 2; antten.ba 0; antten.and 5; svcten.ab 6; svcten.ba 5; svcten.and 13 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-007** [OK] `portable-solar`: Solar rights reaching tenants or rentals: solar near tenancy words, plug-in, balcony or portable solar, solar access or easement, and restrictions on solar by instrument, association or local law. Battery UTG-I-007 (plugin 2; solarright 2; solten.ab 1; solten.ba 4; solten.and 10; netten.ab 1; netten.ba 3; netten.and 6; solrestr.ab 14; solrestr.ba 18; solrestr.and 30 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-008** [OK] `telecom-access`: Rerun of UTG-I-006 with inflections: Tenant or occupant telecom access: satellite dishes, antennas, over-the-air reception, cable, broadband or internet service near tenancy or multi-unit words, and access by providers to multiple dwelling units. Battery UTG-I-008 (dish 2; ota 0; mdu 0; antten.ab 2; antten.ba 0; antten.and 5; svcten.ab 6; svcten.ba 5; svcten.and 13 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-I-006 (INFLECTION warnings on 'association' and 'fiber'; rerun with associations? and fibers?).
- **UTG-I-009** [OK] `portable-solar`: Rerun of UTG-I-007 with inflections: Solar rights reaching tenants or rentals: solar near tenancy words, plug-in, balcony or portable solar, solar access or easement, and restrictions on solar by instrument, association or local law. Battery UTG-I-009 (plugin 2; solarright 2; solten.ab 1; solten.ba 4; solten.and 10; netten.ab 1; netten.ba 3; netten.and 6; solrestr.ab 14; solrestr.ba 18; solrestr.and 30 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-I-007 (INFLECTION warning on 'interconnection'; rerun with interconnections?).
- **UTG-I-010** [OK] `ev-charging-requirements`: EV charging anywhere in the Code reaching tenants, rentals or owners: charging words near tenancy or multi-unit words, EV-ready or EV-capable building rules, charging near weights and measures, and removal or restoration of a charger. Battery UTG-I-010 (evready 0; chgsys 22; evten.ab 5; evten.ba 5; evten.and 8; evweigh.ab 0; evweigh.ba 0; evweigh.and 0; evremove.ab 4; evremove.ba 3; evremove.and 4 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-011** [OK] `property-tax-rent-disclosure`: Any duty to tell a tenant the property-tax share of rent or to give a rent or tax statement: property tax near rent or tenancy words, rent statements, renter credit, and residential exemption near tenancy words. Battery UTG-I-011 (rentstmt 3; taxportion 5; ptaxten.ab 17; ptaxten.ba 16; ptaxten.and 33; resexten.ab 9; resexten.ba 8; resexten.and 10 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-012** [FAILED] `unbundled-parking`: Parking separately priced or leased from a dwelling, parking or towing rules delivered or posted for residents, and any parking rule near tenancy or multi-unit words. Battery UTG-I-012 (unbundle 11; parkrules 1; parkten.ab 13; parkten.ba 11; parkten.and 35; towten.ab 10; towten.ba 7; towten.and 23 units hit when run; 3 of 4 positives passed, positive parkten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-013** [OK] `periodic-services-entry`: Entry rules for regularly scheduled or periodic services, and every entry or access rule near a tenancy word. Battery UTG-I-013 (schedsvc 61; entryten.ab 14; entryten.ba 18; entryten.and 45; schedten.ab 2; schedten.ba 3; schedten.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-014** [OK] `property-tax-rent-disclosure`: Rerun of UTG-I-011 with inflections: Any duty to tell a tenant the property-tax share of rent or to give a rent or tax statement: property tax near rent or tenancy words, rent statements, renter credit, and residential exemption near tenancy words. Battery UTG-I-014 (rentstmt 3; taxportion 5; ptaxten.ab 17; ptaxten.ba 16; ptaxten.and 33; resexten.ab 9; resexten.ba 8; resexten.and 10 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-I-011 (INFLECTION warning on 'rent'; rerun with rent(?:s|ed|ing)?).
- **UTG-I-015** [OK] `unbundled-parking`: Rerun of UTG-I-012: Parking separately priced or leased from a dwelling, parking or towing rules delivered or posted for residents, and any parking rule near tenancy or multi-unit words. Battery UTG-I-015 (unbundle 11; parkrules 1; parkten.ab 13; parkten.ba 11; parkten.and 35; towten.ab 10; towten.ba 7; towten.and 23 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-I-012 (positive parkten recorded as failed (72-9-603 has no tenancy word near parking); rerun with a synthetic positive).
- **UTG-I-016** [OK] `utility-landlord-account`: Tenant remedies when the landlord holds a utility account and does not pay: receivership near tenancy or utility words, tenant payment of the landlord's utility bill with a rent deduction, and notice to occupants before a building-wide shutoff. Battery UTG-I-016 (paydeduct 2; recvten.ab 8; recvten.ba 11; recvten.and 21; occnote.ab 0; occnote.ba 1; occnote.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-I-017** [OK] `utility-landlord-account`: Rerun of UTG-I-016 with inflections: Tenant remedies when the landlord holds a utility account and does not pay: receivership near tenancy or utility words, tenant payment of the landlord's utility bill with a rent deduction, and notice to occupants before a building-wide shutoff. Battery UTG-I-017 (paydeduct 2; recvten.ab 8; recvten.ba 11; recvten.and 21; occnote.ab 0; occnote.ba 1; occnote.and 1 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-I-016 (INFLECTION warning on 'notice'; rerun with notices?).
- **UTG-J-001** [OK] `nonresident-owner-agent`: Any Utah rule making a nonresident (out-of-state) owner or landlord appoint an in-state agent, name one in the lease, or file one before suing; agent designations tied to rental property anywhere in the Code (receivership, code enforcement, licensing). Battery UTG-J-001 (resagent 3; svcagent 38; outstate 0; nrland.ab 9; nrland.ba 5; nrland.and 19; nragent.ab 19; nragent.ba 12; nragent.and 31; ownagent.ab 24; ownagent.ba 27; ownagent.and 48 units hit when run; 6 of 6 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-002** [OK] `nonresident-owner-agent`: Any Utah duty on a tenant or other rent payer to withhold state income tax from rent paid to a nonresident owner (or any withholding tied to rent or rental income). Battery UTG-J-002 (rentinc 15; withrent.ab 8; withrent.ba 9; withrent.and 15; nrwith.ab 4; nrwith.ba 5; nrwith.and 9 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-003** [OK] `confirmed-absences-outside-title`: Any Utah rule making landlord registration, a rental license or a business license a condition of filing an eviction or of a judgment for possession or restitution. Battery UTG-J-003 (maynotsue 50; landreg 0; liceict.ab 5; liceict.ba 2; liceict.and 9; licrent.ab 0; licrent.ba 0; licrent.and 0 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-004** [OK] `construction-liens`: Utah rules on construction liens for work a tenant orders: notice of nonresponsibility, lessee or leasehold rules, lease terms keeping the lessor's interest free of liens; lien rules mentioning tenants anywhere in the Code. Battery UTG-J-004 (nonresp 1; lesser 7; lienten.ab 35; lienten.ba 36; lienten.and 68; imprten.ab 42; imprten.ba 41; imprten.and 74; liencontract.ab 7; liencontract.ba 6; liencontract.and 10 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-005** [OK] `foreign-ownership`: Utah limits on foreign persons, aliens or foreign adversaries acquiring or leasing land; lease-duration carve-outs; landlord duties to identify restricted persons; statute-of-frauds alien naming rules. Battery UTG-J-005 (rfe 12; nralien 3; forland.ab 8; forland.ba 11; forland.and 20; forlease.ab 12; forlease.ba 9; forlease.and 33 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-006** [OK] `purpose-limitation`: Utah statutes that void, annul or forfeit a lease, or end a tenancy, because the premises are used for a prohibited or unlawful purpose (criminal, nuisance, obscenity, drugs, prostitution, gambling). Battery UTG-J-006 (voidlease 8; voidnear.ab 25; voidnear.ba 31; voidnear.and 57; usecrime.ab 16; usecrime.ba 17; usecrime.and 29 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-007** [OK] `animal-care-access`: Utah rules letting a landlord or owner enter to feed, care for or remove a tenant's animal; animals at eviction or abandonment; any pet fact sheet or pet notice a landlord must give with a lease. Battery UTG-J-007 (persanimal 1; factsheet 2; animent.ab 29; animent.ba 24; animent.and 66; animten.ab 20; animten.ba 18; animten.and 34; factpet.ab 2; factpet.ba 1; factpet.and 6 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-008** [OK] `governmental-fines`: Utah rules on passing governmental fines, penalties or abatement costs imposed on an owner to a tenant or occupant (bans, causation limits, lease-default rules, occupant liability for abatement). Battery UTG-J-008 (passon 89; leaseother 0; finetenant.ab 17; finetenant.ba 20; finetenant.and 37 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-009** [OK] `farmland-hunting-rights`: Whether Utah allocates hunting or fishing rights on rented land between owner and tenant, and who may give hunting permission or post private land (owner, lessee, person in charge). Battery UTG-J-009 (huntrights 1; personcharge 35; huntlessee.ab 13; huntlessee.ba 12; huntlessee.and 21 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-010** [OK] `tenant-employee-housing`: Utah rules on housing a landlord provides to its own employee (occupancy conditional on employment, disclosure of vacating terms, offer of a rental agreement when the job ends, eviction of caretakers or servants, labor camps). Battery UTG-J-010 (condemploy 31; labcamp 2; emptenant.ab 72; emptenant.ba 74; emptenant.and 140; empvacate.ab 41; empvacate.ba 33; empvacate.and 85 units hit when run; 4 of 4 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-011** [FAILED] `informal-dispute-resolution`: Utah rules on lease terms requiring the parties to try informal resolution or mediation before going to court, and any limit on such terms (possession actions excluded, nonwaivable court access). Battery UTG-J-011 (informal 17; medten.ab 3; medten.ba 3; medten.and 15; presuitlease.ab 0; presuitlease.ba 3; presuitlease.and 6 units hit when run; 2 of 3 positives passed, positive medten recorded as failed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-012** [OK] `informal-dispute-resolution`: Utah rules on lease terms requiring the parties to try informal resolution or mediation before going to court, and any limit on such terms (possession actions excluded, nonwaivable court access). Battery UTG-J-012 (informal 17; medten.ab 3; medten.ba 3; medten.and 15; presuitlease.ab 0; presuitlease.ba 3; presuitlease.and 6 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-J-011 (positive for medten named a unit (57-16-17) with no tenancy word; replaced by a synthetic positive).
- **UTG-J-013** [OK] `usufructuary-lessor`: Any Utah rule on usufruct, or on what happens to a lease granted by a life tenant or other limited-estate holder when that estate ends (remaindermen, death of lessor). Battery UTG-J-013 (usufruct 0; remainder 3; lifelease.ab 12; lifelease.ba 8; lifelease.and 22 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-014** [OK] `special-district-representation`: Any Utah rule requiring a lease or landlord to disclose that a rental lies in a special district (local, special service, public infrastructure, improvement or assessment district), or giving tenants a representation, voting or acknowledgment role tied to the tenancy. Battery UTG-J-014 (pidsale 66; disttenant.ab 37; disttenant.ba 37; disttenant.and 68; distdisclose.ab 16; distdisclose.ba 10; distdisclose.and 29 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-015** [OK] `communal-land-lease-approval`: Any Utah statute requiring government approval or recording before a lease of communal, tribal, Indian, native-owned or reservation land (or a lease to a corporation) is valid, and rent or possession before approval. Battery UTG-J-015 (communal 22; triblease.ab 3; triblease.ba 9; triblease.and 20; leaseapprove.ab 9; leaseapprove.ba 7; leaseapprove.and 20 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)).
- **UTG-J-016** [OK] `communal-land-lease-approval`: Any Utah statute requiring government approval or recording before a lease of communal, tribal, Indian, native-owned or reservation land (or a lease to a corporation) is valid, and rent or possession before approval. Battery UTG-J-016 (communal 23; triblease.ab 3; triblease.ba 9; triblease.and 20; leaseapprove.ab 9; leaseapprove.ba 7; leaseapprove.and 20 units hit when run; 3 of 3 positives passed; controls passed (nonsense 0, must-hit 47)). Supersedes UTG-J-015 (the index gained Utah Const. art. III (Ordinance, held in the corpus as article text without sections) after UTG-J-015 ran; rerun so the constitutional limb reaches it).

### 4. Decisions and questions to Taylor

#### Decisions

- Rent reporting (slice C, main-pass review): not put to Taylor (rule 76; the cautious course is clear). Whether a landlord reporting unpaid rent is a "creditor" under Utah Code Ann. § 70C-7-107 is not settled by the statute and case law was not read; edu-rent-reporting-ut gives the cautious course (give the negative-report notice), and rent-reporting-negative-notice-ut stays optional (SERVES_LANDLORD, never default); no row says either way whether Title 70C covers residential leases. (C_dv_classes)
- designated-repairer (slice E; resolved by class decision 2 in main-pass review, not put to Taylor): may a Utah lease require a tenant who uses the Fit Premises Act repair-and-deduct remedy to use the landlord's approved repairer? The Act lets the renter 'correct the deficient condition described in the notice of deficient condition; and' (Utah Code Ann. § 57-22-6(4)(a)(ii)(A)(I)) and names no one who must do the work; a lease requirement would become a duty the renter must meet ('comply with each rule, regulation, or requirement of the rental agreement,' (Utah Code Ann. § 57-22-5(1)(h))), and 'A renter is not entitled to a renter remedy if the renter is not in compliance with all requirements under Section 57-22-5.' (Utah Code Ann. § 57-22-6(4)(b)), so the term could strip the statutory remedy by another route. Case law not read. Decision: the library does not offer such a term; `designated-repairer-ut` as drafted limits only repairs at the landlord's expense outside the statute and leaves the statutory remedy as written. (E_habitability)
- CD5 and bounded absences (slice F). Four slice F topics are Confirmed absent although the adopted national codes are not held: steam-radiator-covers (International Mechanical Code), balcony-inspection (IBC, IRC, IEBC), sprinkler-disclosure (IFC) and defective-drywall-disclosure (IBC, IRC). Each is a tenant-notice or periodic-inspection subject that, on other states' rows, sits in a landlord-tenant statute or a stand-alone act, not in a construction code, and each row's claim is bounded to "the Utah Code or Constitution" and says the code text is not held. Main-pass decision (not put to Taylor): keep Confirmed absent with the bounded claim. Class decision 5 applies to a topic whose answer would sit in an unheld source; periodic balcony inspection, radiator-cover riders, sprinkler disclosure and drywall disclosure are, in every state found, statute or local-ordinance subjects, not national-code subjects, and each row says the codes and ordinances were not read. The alternative reading of CD5 would make them Present (partly) or Not located with fetches of whole national codes for subjects those codes are not known to address. Where a code plausibly holds the answer (sprinkler duty, water heater temperature, window guards, pool barriers, common-area lighting, asbestos work, pesticide notice, well water) slice F used Present (partly) or Not located with a fetch. (F_safety)
- Contaminated property and renting (slice F, hazardous-contamination-disclosure). The Illegal Drug Operations Site Reporting and Decontamination Act (Utah Code Ann. §§ 19-6-902 to 19-6-906, read whole) has no notice to renters and no express bar on renting a listed property before decontamination. Row edu-hazardous-contamination-disclosure-ut tells landlords not to rent a listed property until it is decontaminated and off the list, resting on 'may not rent the premises unless they are safe, sanitary, and fit for human occupancy; and' (Utah Code Ann. § 57-22-4(1)(a)) read with the definition of contamination as pollution 'that cause property to be unfit for human habitation or use' (Utah Code Ann. § 19-6-902(3)(a)). Case law not read. Main-pass decision (class decision 2, not put to Taylor): keep the cautious instruction as written (it is labelled a cautious reading in the notes); the alternative is to state only the meth lease disclosure and leave renting to the landlord's judgment. (F_safety)
- criminal-activity (slice G; main-pass decision under rule 54, not put to Taylor): the original Utah pass declined a criminal-activity lease clause (notes of `edu-expedited-criminal-eviction-ut`: "No criminal-activity lease clause offered (UT log s6, rule 54 list)"), apparently because Utah Code Ann. § 78B-6-802(1)(g) already gives a no-cure ground. Slice G tagged `criminal-activity-ky` for UT anyway, under rule 54 as amended at the NE sync (offer every lawful optional clause): the statutory ground reaches only the tenant's own criminal act on the premises, while the clause adds occupants, guests and conduct near the property (enforced through Utah Code Ann. § 78B-6-802(1)(h)). Slice C made the same call for `drug-free-housing-ca`. Decision: keep the tag (CONDITIONAL, never default), because rule 54 offers every lawful optional clause and the earlier note gives no Utah bar; a finding on the earlier row records that its note is superseded; `edu-criminal-activity-ut` reads correctly either way except its pointer to the optional clause. (G_eviction_termination)
- automatic-renewal (slice H): the shared clause `automatic-renewal-ks` (KS;SC) is not tagged UT. Its sentence "Rent during any renewal term will be the Rent then in effect unless Landlord has given Tenant written notice of a change at least {{renewal_notice_days}} days before the renewal begins" lets Landlord set a renewal rent by notice, with no amount or method in the lease and on the same deadline as the tenant's non-renewal notice. Whether rent is an 'other cost' (Utah Code Ann. § 57-22-4(5)(b)) is case law not read; under class decisions 1 and 2 the Utah clause `automatic-renewal-ut` fixes the renewal rent in the clause or requires the tenant's signed agreement, so it works under every reading. Not put to Taylor: the cautious course is clear. (H_lease_terms)
- tenant-portal (slice H): `tenant-portal-mn` (MN;SD;TX;GA;SC;NC) is not tagged UT. It provides "If Landlord requires or permits payment through the portal, Landlord will provide an alternative way to pay whenever the portal is not working." Utah's non-waivable right to refuse further electronic transactions ('The right granted by Subsection (3)(a) may not be waived by agreement.' (Utah Code Ann. § 46-4-105(3)(b))) clearly limits portal-only signatures and notices; whether it reaches the payment method is case law not read. Under class decision 2 the Utah clause `tenant-portal-ut` always keeps a non-portal payment method and switches to paper on written refusal. Not put to Taylor: the cautious course is clear. (H_lease_terms)
- rent-escalation (slice H): `rent-increase-midterm-ky` (10 states) is not tagged UT. It lets Landlord raise Monthly Rent during the Term by 30 days' written notice in an amount Landlord then chooses, with a tenant exit right. Whether rent is an 'other cost' (Utah Code Ann. § 57-22-4(5)(b)) that may not be charged 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)) is case law not read; under class decisions 1 and 2 the Utah lease uses `rent-escalation-la` (amount or index fixed in the lease) instead. Not put to Taylor: the cautious course is clear and the option remains if Taylor prefers it. (H_lease_terms)
- rules-regulations (slice H, main-pass review note on rule 26 [NV-gaps 1]): the tag of `rules-wi` first proposed in this slice is withdrawn. Its text binds Tenant to attached rules without limiting fines in them, and the Utah condition (a fine only in an amount the rental agreement states, Utah Code Ann. § 57-22-4(5)(b)(i); class decision 1) sat only in a Builder note. Replaced by `rules-ut`, which carries the condition, and the copy-of-rules duty (Utah Code Ann. § 57-22-4(7)(b)(ii)), in its text. The other slice H tags were re-checked: `rent-escalation-la` and `tax-insurance-escalation-la` keep every condition of lawfulness in their text, and their remaining notes point (the pre-application estimate or disclosure, Utah Code Ann. § 57-22-4(3)) is practice in a separate document, now said plainly; `guaranty-as`, `rent-installments-or` and `emergency-contact-co` have no Builder condition. (H_lease_terms)
- Electric and gas resale (slice I, electric-submetering-disclosure). Title 54 counts as a public utility an electrical or gas corporation that 'sells or furnishes gas or electricity to any member or consumers within the state, for domestic, commercial, or industrial use, for which any compensation or payment is received,' (Utah Code Ann. § 54-2-1(24)(b)(ii)); the tenant exclusions are framed for a 'producer' (Utah Code Ann. § 54-2-1(10)(b)(ii)) or a gas 'maker or producer' (Utah Code Ann. § 54-2-1(14)(a)). Whether a landlord that resells purchased electricity or gas by submeter or formula is covered is unsettled in the Code (case law not read; commission rules and tariffs not held, fetches queued). Cautious course taken under class decision 2, not put to Taylor: the slice offers no Utah clause billing electricity or natural gas through a landlord submeter or allocation formula; `utility-apportionment-ut` covers water, sewer, storm water and trash only, and `utility-allowance-cap-ut` allows electricity or gas only on a utility-owned meter serving only the unit. Alternative if the fetched rules or tariffs permit landlord submetering at cost: add an electric and gas option to `utility-apportionment-ut` with the conditions they set. (I_utilities)
- utility-allowance-cap (slice I): `utility-allowance-cap-co` (11 states) is not tagged for Utah. Its overage method (the provider's bill) meets class decision 1, but it may be filled with any utility, including electricity or gas measured by a landlord submeter or a shared meter, which the cautious course in `edu-electric-submetering-ut` avoids (Utah Code Ann. § 54-2-1(24)(b)(ii)), and a tag cannot add that limit to the clause text. `utility-allowance-cap-ut` carries the limit in its own builder note, adds the no-markup and bill-copy terms and the no-shutoff promise. (I_utilities)
- ev-charging-end-of-tenancy (slice I): `ev-charging-end-of-tenancy-co` is not tagged for Utah. Its rule_type is REQUIRED and its ownership sentence ("remains Tenant's property") states as a fixed term what Utah law leaves to the parties; Utah's only rule is for association owners (Utah Code Ann. § 57-8-8.2(5)). `ev-charger-removal-restoration-nd` is not tagged either: its landlord-removal charge is "the actual documented cost" with no no-markup or bill-copy term (class decision 1). Utah relies on the end-of-lease choice inside `ev-charger-installation-hi` (tagged under ev-charging-requirements) and the education row `edu-ev-charging-end-of-tenancy-ut`. (I_utilities)
- ev-charging-shared-area (slice I): `ev-charging-shared-area-co` (7 states) is not tagged for Utah. It lets Landlord charge "a reasonable fee to reserve the specific parking spot" with no amount or method in the clause, which class decision 1 treats as not an amount agreed under Utah Code Ann. § 57-22-4(5)(b)(i), and it binds "any tenant who later has exclusive rights to that space", a person not party to the lease. `ev-charging-shared-area-ut` states the space charge in the clause. (I_utilities)
- parking-rules-notice (slice I): `parking-rules-notice-co` (CO, SC) is not tagged for Utah: its rule_type is REQUIRED and it records delivery of a separate parking document before agreeing to the lease, a Colorado requirement Utah lacks; Utah requires only 'a copy of any rules and regulations applicable to the residential rental unit.' (Utah Code Ann. § 57-22-4(7)(b)(ii)) at or before the term begins. `parking-rules-notice-mn` is Minnesota-specific (its towing sentence cites Minnesota law). `parking-rules-notice-ut` is written for Utah. (I_utilities)
- edu-rental-licensing-ut (2026-11-06 sweep paragraph) checked against the 2026 recodification for slice J: its section numbers exist in the 2026 Code and its rules match the text read whole (Utah Code Ann. §§ 16-1a-503, 16-1a-506, 42-2-201, 42-2-205, 78B-3-204, 78B-3-205, 78B-3-206). No finding_existing filed. Two non-defects noted for the record: its body says "An out-of-state LLC or corporation" where the statute reaches every 'filing foreign entity' (limited partnerships, statutory trusts and other filed entities too) (Utah Code Ann. § 16-1a-503(1)); and its notes say only that the quotes are in docs/sweeps/GA-to-WV-14.md. `edu-nonresident-owner-agent-ut` states the broader class and quotes each section, and points to edu-rental-licensing-ut by id. (J_general)
- construction-liens: the shared optional clause no-liens-ar (15 states) was not tagged UT. Its sentence "will pay Landlord's reasonable costs caused by it" makes Tenant pay a cost Landlord incurs with no amount or objective method in the clause, which gaps log s4 class decision 1 treats as not an amount agreed under Utah Code Ann. § 57-22-4(5)(b)(i). Because UT is not on the row and the topic had no Utah row, the fix is a new Utah clause (`tenant-work-liens-ut`) with the main-pass objective method and a sentence confirming the clause does not limit lien claimants (Utah Code Ann. § 38-1a-105(1)(b)), rather than a finding_existing. (J_general)
- Prompt item 10 open item (UT log s10.1), checked in slice J: the 2026 Code still has the stale cross-reference. Utah Code Ann. § 78B-6-802(1)(f) reads 'private nuisance as defined in Section 78B-6-1107' (Utah Code Ann. § 78B-6-802(1)(f)), and no Utah Code Ann. § 78B-6-1107 exists in the corpus (sec.py: no section; also listed by slice C's cross-reference check). The private nuisance definitions now sit in Title 78B, Chapter 6a (Laws of Utah 2026, ch. 401). Stated in `edu-purpose-limitation-ut` notes; no row change proposed. (J_general)
- Item 6, class decision (actual cost): a clause making the tenant pay a cost the landlord incurs, with no amount or method fixed in the lease, is not shown to be an amount agreed (Utah Code Ann. § 57-22-4(5)(b)(i)) or a cost allowed by law (Utah Code Ann. § 57-22-4(8)); case law not read, so overrides `keys-ut`, `parking-vehicle-rules-ut`, `smoking-policy-ut` and `hoa-compliance-ut` are proposed in s6 with an objective method (third-party bill or parts price, no markup, copy given). Helpers apply the same rule (CLASS_DECISIONS CD1). (M_main)
- Item 6, `pet-policy`: reads correctly in Utah. The entry rule is a default the lease may change ('Except as otherwise provided in the rental agreement' (Utah Code Ann. § 57-22-4(2))), so the pet-removal entry term is not barred; no Utah statute limits exculpatory, hold-harmless or indemnity terms in a residential lease (UTG-A-002, `edu-exculpatory-clauses-ut`), and the clause already limits non-liability to "the extent applicable law permits". Whether removing a pet without court process is lawful is case law not read; `pet-policy-md` remains the model if Taylor wants that limit. Its "responsible for all damage, waste removal, odor, and disturbance" allocates liability and does not charge a landlord cost, so the item 6 class decision does not reach it. (M_main)
- Item 7, `smoking-policy`: consistent with Title 26B, Chapter 4 (no housing protection; `edu-no-cannabis-housing-protection-ut`) and with `smoke-drift-waiver-ut` (one bans smoking at the property, the other discloses drift from other units); fee wording overridden under item 6. (M_main)
- Item 7, `no-alterations`: its carve-out ("does not limit any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform") covers Utah Code Ann. § 57-21-5(4)(a); no Utah telecom-access or solar-access statute for tenants was found (slice I answers `telecom-access` and `portable-solar`). (M_main)
- Item 7, `addendum-precedence`: confirmed; it yields to "any disclosure, notice, or addendum that applicable law requires", which keeps Utah's statutory notices (Utah Code Ann. §§ 57-22-4(7), 57-17-2, 78B-6-901.5) in control. (M_main)
- Item 8(a): early termination fee rests only on unread penalty case law; `early-termination-ut` proposed in s6 (flat one month). (M_main)
- Item 8(b): `holdover-ca` and `holdover-rate-ut` confirmed against Utah Code Ann. § 78B-6-811 (damages for unlawful detainer: judgment for the rent and three times the damages assessed) and the notice rules in Utah Code Ann. § 78B-6-802. (M_main)
- Item 8(c): no UT eviction row contradicts `edu-cares-act-notice` (`edu-notices-to-quit-ut`, `edu-eviction-process-ut`, `edu-nuisance-eviction-ut`, `edu-expedited-criminal-eviction-ut` checked); `periodic-tenancy-notice-ut` gets a minor s6 finding (longer federal notice). (M_main)
- Item 9: `arbitration-agreement` is not tagged UT. The Utah Uniform Arbitration Act allows agreements to arbitrate (Utah Code Ann. § 78B-11-107(1)), but whether the Consumer Sales Practices Act reaches residential leases, and so whether Utah Code Ann. § 13-11-4(2)(q) and the fines in Utah Code Ann. § 13-11-17(4)(a) attach, turns on case law; `edu-binding-arbitration-ut` says the library does not offer the clause (Taylor's decision 2026-11-07). (M_main)
- Item 10 (stale cross-reference): the 2026 code still cites repealed Utah Code Ann. § 78B-6-1107 in Utah Code Ann. § 78B-6-802(1)(f) ('including private nuisance as defined in Section 78B-6-1107') and in Utah Code Ann. § 78B-7-1302(1)(c)(i); private nuisance is now defined in Utah Code Ann. § 78B-6a-101(10). Rows citing the nuisance ground cite both. (M_main)
- Main-pass review of slices B and C (2026-11-08): validated (0 errors), quote-checked (0 misses) and replayed. Slice C's question on Utah Code Ann. § 70C-7-107 was converted to a decision (cautious course clear). bat.py now refuses a helper battery id unless UTBAT_LOG names the slice log (slice C sop). Stale cross-references slice C found in the 2026 code, beyond item 10: Utah Code Ann. § 57-8a-102(24) cites former Utah Code Ann. § 77-27-21.7 (the condominium act's Utah Code Ann. § 57-8-3(37) correctly cites Utah Code Ann. § 53-29-306), and Utah Code Ann. § 61-2f-202.5 cites Utah Code Ann. § 61-2f-102(31)(a) where property management is now (32)(a); rows quote them as printed. (M_main)
- Slice D's question (should the library offer a Utah month-to-month term-change clause) is resolved by class decision 2, not put to Taylor: `term-change-notice-ut` (CONDITIONAL, never default) lets Landlord propose changes on 15 calendar days' written notice that bind only on Tenant's signed acceptance, so it works whether or not staying on is acceptance (case law not read). (M_main)
- Slice D review: `rental-inspection-cooperation-mn` not tagged UT (its promise to correct any inspection finding would become a rental-agreement requirement reachable through Utah Code Ann. § 57-22-6); `fire-code-compliance-mn` not tagged (unstated reasonable-cost charge, class decision 1), Utah version `fire-code-compliance-ut` added. Possible stale reference noted, not relied on: Utah Code Ann. § 15A-2-104(1)(d) sends pre-1976 mobile homes to Chapter 3, Part 8, while the pre-1976 standards sit in Utah Code Ann. § 15A-3-901. (M_main)
- Slice E review: the finding on `permitted-occupants` (Utah Code Ann. § 57-22-5(1)(f) written-permission rule not in the clause text) needs no UT override, because `renter-duties-ut` states the rule in lease text; Claude Code may still adopt the override wording in s6 if it prefers a single clause. Slice E's designated-repairer question is resolved by class decision 2 (no term may require a statutory repair-and-deduct renter to use Landlord's repairer). (M_main)
- Slice I review: the tag of `ev-charger-installation-hi` was withdrawn and replaced by `ev-charger-installation-ut`, because the HI item (d) bracket allows "Landlord's reasonable calculation" and the Utah condition (an objective method, class decision 1) sat only in the tag's notes, which rule 26 forbids. Rows relying on proposed overrides (`parking-vehicle-rules-ut`, `hoa-compliance-ut`, `keys-ut`, `smoking-policy-ut`, `early-termination-ut`) assume Claude Code applies s6 at sync; if an override is not applied, the pointing rows need their pointer changed to the shared row. (M_main)
- Stale or misnumbered cross-references in the 2026 code found during the pass (none is relied on for a rule; rows quote them as printed): Utah Code Ann. § 78B-6-802(1)(f) and Utah Code Ann. § 78B-7-1302(1)(c)(i) cite repealed Utah Code Ann. § 78B-6-1107 (now Utah Code Ann. § 78B-6a-101(10)); Utah Code Ann. § 57-8a-102(24) cites former Utah Code Ann. § 77-27-21.7; Utah Code Ann. § 61-2f-202.5 cites subsection (31)(a) of Utah Code Ann. § 61-2f-102 for property management, now (32)(a); Utah Code Ann. § 78B-2-305(2)(b)(i), (c) cite "78B-9-103" for actions in Utah Code Ann. § 78A-9-103; Utah Code Ann. § 15A-2-104(1)(d) may point pre-1976 mobile homes to the wrong part (standards are in Utah Code Ann. § 15A-3-901); Utah Code Ann. § 31A-14-210 cites a section of Title 16, Chapter 6a not in the corpus; Utah Code Ann. § 32B-4-208(6) cites Utah Code Ann. § 76-9-1305 for a different offense; Utah Code Ann. § 57-13c-102 cites a Title 17 section not in the corpus. (M_main)
- Index gap fixed by the main pass (slice J sop): Utah Const. art. III (Ordinance) is held in the corpus XML as article text without sections and was not indexed. build_index.py now indexes it (190 constitution units); every battery log was replayed; changed batteries were rerun under new ids with supersedes and the rows citing them corrected (gaps log s3). (M_main)
- Independent check r1, batch 2, errata #30 and #31 rejected: the checker read the CA notes segment of `drug-free-housing-ca` as if its body had a victim-protection last paragraph, but the clause text (bodyText) has only the controlled-substance covenant and the unlawful-purpose and nuisance sentence, so the UT tag's two-way check stands; the mismatch between the CA notes and the body is already reported for California (s7, slice C). (M_main)
- Independent check r1, batch 3: the tag of `security-devices-wy` was withdrawn (its third paragraph charges "Landlord's reasonable cost", class decision 1; the slice F tag note treated it as no landlord charge). Replaced by `security-devices-ut`. Every other tag's full clause text was rescreened for charges by script; none other charges an unstated cost. (M_main)
- Bounded absences next to unheld code sources (main-pass decision, cited by `edu-no-steam-radiator-cover-rule-ut`, `edu-no-sprinkler-disclosure-ut`, `edu-no-balcony-inspection-rule-ut` and `edu-no-drywall-disclosure-ut`): class decision 5 applies where a topic's answer would sit in an unheld source; radiator-cover riders, periodic balcony inspection, sprinkler disclosure to tenants and drywall disclosure are, in every state found, statute or local-ordinance subjects rather than national model-code or Fire Prevention Board subjects, so these rows keep Confirmed absent bounded to the Utah Code and Constitution, and each says the codes, Admin Code rules and ordinances were not read. Rows where the answer plausibly sits in an unheld code or rule (sprinkler duty, water heaters, window guards, pools, lighting, asbestos, pesticides, wells, certificates of occupancy, utility account and data rules) are Present (partly) or Not located with fetches. (M_main)
- Variables: no new {{variables}}. Every variable in a new clause's text (for example {{monthly_rent}}, {{pet_rent_amount}}, {{rule_change_notice_days}}, {{pool_minimum_age}}, {{pool_guest_limit}}, {{smart_access_method}}, {{excluded_appliance_list}}, {{landlord_repair_contact}}) is already used in the library (checked by script against lease-clauses.csv). (M_main)

#### Questions to Taylor

- None.

### 5. Independent check

Independent checker agents (general-purpose, separate context; one agent at a time; brief `brief/CHECK_BRIEF.md`) read each row against the statutes themselves, from frozen copies of the delta. Round 1 covered every new row, every tag and every proposed row; round 2 covered every row edited or created after round 1. Each defect, with the statute words and the fix, is in `check/rN/bN.errata.jsonl`; every applied fix (old and new text) is in `check/applied.jsonl`.

#### Round 1: 315 ids checked, 187 clean, 27 ERROR and 116 WARN

- ERROR `edu-habitability-modifiable-ut` [notes] (r1/b1:#2, fixed): The note says only §§ 57-22-3 and 57-22-4 vary by agreement in the Fit Premises Act. That is wrong: § 57-22-6 lets the rental agreement set how a notice of deficient condition is served, and § 57-22-2(1) lets an agent opt out in the rental agreement. Battery UTG-A-019 only searched "except/unless otherwise" phrasings, so it could not have found these.
- ERROR `edu-habitability-modifiable-ut` [bodyText] (r1/b1:#3, fixed): The body states a bounded absence (no rule for a unit without a well or utility water supply) that no logged battery searched. The question also sits partly in sources not held: § 57-22-3(1) ties the duty to board of health rules, and drinking-water rules are Admin Code R309 (not held). The Act itself already answers part of it, because every unit must have hot and cold water.
- ERROR `edu-no-general-nonwaiver-statute-ut` [bodyText] (r1/b1:#5, fixed): The body reverses § 57-22-5.1(3)(d). The statute requires the owner to REFUSE the perpetrator a key; the body says the owner may not refuse one. It also says the tenant installed the lock, but under (3)(a) the owner installs it at a crime victim's request and the renter pays. The rule covers all listed crime victims, not only domestic violence.
- ERROR `edu-unconscionability-ut` [bodyText] (r1/b1:#10, fixed): The body says a court in an action under the Act may strike or limit an unconscionable clause, as if this were a general remedy. Under § 13-11-17(2)(b) the power exists only in a division class action, on the division's motion, and only if it appears the defendant is about to remove, conceal or dispose of property. A consumer's own action under § 13-11-19 gives declaratory relief, an injunction and actual damages. The notes' account ("in a division class action") also omits the motion and asset conditions.
- ERROR `edu-eviction-charges-ut` [bodyText] (r1/b1:#11, fixed): The body describes the notice-service fee clause wrongly. notice-service-fee-ut does not charge actual documented cost: it charges a fixed [amount] that the parties agree is a reasonable estimate of cost. A landlord following the pointer would get a different clause from the one described.
- ERROR `edu-liquidated-damages-ut` [bodyText] (r1/b1:#13, fixed): The body says both figure clauses carry "reasonable estimate of a loss that is hard to measure" wording. Only holdover-rate-ut does. Neither early-termination-ks nor the proposed UT override early-termination-ut has that sentence: each charges a flat fee for a tenant-chosen early exit.
- ERROR `edu-prohibited-lease-terms-ut` [bodyText] (r1/b1:#16, fixed): The fee rule is stated without its exceptions. § 57-22-4(5)(b)(ii) allows a charge not in the agreement on a month-to-month agreement after 15 days' notice, and § 57-22-4(8) preserves fees 'allowed by law'. As written, the row denies the landlord both.
- ERROR `edu-lease-content-requirements-ut` [bodyText] (r1/b1:#26, fixed): The fee rule leaves out the statutory exception. A charge not in the rental agreement may be made on a month-to-month agreement after a 15-day notice, and § 57-22-4(8) preserves costs allowed by law. As written, the landlord loses a right Utah gives.
- ERROR `edu-written-notices-ut` [bodyText] (r1/b1:#31, fixed): The occupancy rule is reversed. § 57-22-5(1)(f) requires the OWNER's written permission before the renter adds occupants beyond the number in the rental agreement. It is not a tenant's notice and not the tenant's permission. The row's own notes quote 'written permission of the owner'.
- ERROR `edu-no-deposit-surrender-notice-ut` [bodyText] (r1/b1:#43, fixed): The body says a month-to-month tenant may leave "without the notice the law requires". Utah law sets no notice for the tenant: § 78B-6-802(1)(b)(i) governs the OWNER's 15-day notice. The library's periodic-tenancy-notice-ut says the tenant's notice comes from the lease. The row's own Related note cites the owner's notice section.
- ERROR `fees-and-charges-ut` [bodyText] (r1/b1:#54, fixed): The bracket asks the user to list a late fee and a returned-payment fee but doesn't state Utah's limits on them. Those limits are conditions of lawfulness for the amounts entered here and appear only in the notes (rule 26). A user filling in a $100 late fee on $600 rent, or a $35 dishonored-check fee, produces an unlawful term.
- ERROR `edu-dv-eviction-protection-ut` [bodyText] (r1/b2:#3, fixed): The body says the calls-for-help rule is Utah's only eviction protection tied to domestic violence. That is wrong. Property removed when an eviction order is carried out is treated as abandoned property under Utah Code Ann. § 78B-6-816, and that section makes the owner give a domestic violence victim up to 15 more calendar days to recover it. Also, the calls-for-help rule protects every renter, not only victims. The battery's eviction-near-victim limbs did not reach 78B-6-816 because it says "domestic violence" with "abandoned property", not "evict".
- ERROR `edu-employee-screening-ut` [bodyText] (r1/b2:#17, fixed): The body says the licensing duty for managing other people's property starts January 1, 2027. That is wrong. The January 1, 2027 date is only in Utah Code Ann. § 61-2f-201(1)(d), which covers persons generally, and in the property-manager fingerprint rule. The individual rule the body paraphrases, § 61-2f-201(3), has no date. Managing another person's property for consideration is already a principal broker act, which § 61-2f-201(1)(a)-(b) requires a license for today. A landlord hiring an unlicensed manager now could be misled.
- ERROR `edu-no-senior-housing-work-card-ut` [bodyText] (r1/b2:#19, fixed): The body dates the licensing requirement for staff who manage property for others to January 1, 2027. Managing another person's property for consideration is already a principal broker act that needs a license now. Only the separate property manager license and its fingerprint rule start in 2027. This repeats the defect logged for `edu-employee-screening-ut`.
- ERROR `drug-free-housing-ca` [segment] (r1/b2:#30, see decisions (s4)): The two-way check is wrong. The clause's last paragraph promises not to enforce the drug covenant against anyone because that person is or has been a victim of abuse, violence or a crime, or because anyone summoned help for such a victim or an emergency. Utah has no victim-status limit like that, and Utah's calls-for-help rule covers only reasonable requests for public-safety help, inside the Fit Premises Act. The CA segment shows the paragraph was written for Cal. Civ. Code § 1946.8 and Code Civ. Proc. § 1161.3, so the clause rests on another state's statute and gives away a right Utah leaves with the landlord. The accommodation sentence also commits the landlord to a written response that no Utah statute requires for cannabis, since illegal use of a federally controlled substance is not a disability (Utah Code Ann. § 57-21-2(11)(b)).
- ERROR `edu-rental-inspection-ut` [bodyText] (r1/b2:#32, fixed): The body limits the bar on random building inspections to cities with a good landlord program. The statute is not limited that way: it says "A municipality may not", which binds every city and town, whether or not it runs a program. A landlord in a city without a program would wrongly conclude the bar doesn't apply.
- ERROR `edu-no-certificate-of-occupancy-disclosure-ut` [verdict] (r1/b2:#45, fixed): The verdict is Confirmed absent, but whether a building may be occupied, and so rented, before a certificate of occupancy is issued is governed by the International Building Code and International Residential Code. Utah incorporates both by reference as the State Construction Code, and their text is not held. The battery searched only the Utah Code, so it could not reach the rule. The row does not argue why the subject does not sit there (class decision 5). The body's "none bars collecting rent for a unit that lacks one" can therefore leave a landlord thinking occupancy without a certificate is lawful.
- ERROR `edu-fire-sprinkler-duty-ut` [bodyText] (r1/b3:#1, fixed): The body states the NFPA 13R in-unit waterflow alarm as an unconditional rule, and the notes quote cuts off the condition. Utah's amendment applies only when a fire alarm system is not required by IFC 907.2.
- ERROR `edu-no-steam-radiator-cover-rule-ut` [verdict] (r1/b3:#6, fixed): Confirmed absent rests on a Code and Constitution battery, but the notes concede the adopted 2024 International Mechanical Code (and board of health rules, Admin Code R392) is not held, and a rule on guarding hot heating surfaces would sit there. The row gives no reason the subject cannot sit there and queues no fetch (class decision 5).
- ERROR `security-devices-wy` [segment] (r1/b3:#9, see decisions (s4)): The UT segment says the clause makes no landlord charge, but its third paragraph makes Tenant pay 'Landlord's reasonable cost of rekeying or replacing' locks and devices and lets Landlord deduct it from the deposit, with no amount or objective method in the clause. Class decision 1 (settled, Utah item 6) says such a clause is not to be tagged; a finding_existing proposing a UT override is required (the keys-ut model).
- ERROR `edu-no-drywall-disclosure-ut` [bodyText] (r1/b3:#31, fixed): The body says you must maintain the electrical system "and appliances". The Fit Premises Act's maintenance duty for appliances reaches only appliances the lease specifically contracts for; the cited subsection (1)(b)(ii) covers electrical systems, plumbing, heating and hot and cold water, not appliances.
- ERROR `edu-tenant-bankruptcy-ut` [notes] (r1/b3:#51, fixed): Both federal exception quotes are cut so as to drop the words that limit them: (b)(22) and (b)(23) are exceptions only 'under subsection (a)(3)' (acts to obtain possession), not to the whole stay. The body then states the pre-petition judgment exception as lifting the stay on continuing the eviction without that limit; how far it reaches the (a)(1) and (a)(2) stays is bankruptcy case law not read.
- ERROR `edu-actual-notice-method-ut` [bodyText] (r1/b4:#14, fixed): The service methods are listed as free alternatives. Leaving a copy with a person of suitable age is allowed only if the tenant is absent, and posting only if no such person can be found; a landlord following the body could post first and serve defectively.
- ERROR `edu-no-lease-option-statute-ut` [bodyText] (r1/b4:#22, fixed): The claim that Utah has no seller property-condition disclosure statute is wrong, and the body implies the meth disclosure reaches only leases. Utah Code Ann. § 57-27-201 binds an owner selling or conveying, and any 'other transaction related to the contaminated property', so a lease-option, and a sale when the option is exercised, carries the meth disclosure. Battery UTG-H-030's seller-disclosure terms could not find it because the section says 'owner or lessor' and 'conveyance', not 'seller disclosure'.
- ERROR `edu-no-meter-conservation-charge-ut` [verdict] (r1/b4:#41, fixed): The verdict is Confirmed absent although the row itself says a meter-attached on-bill charge would appear in the Public Service Commission's rules or the utilities' tariffs, which are not held. Under class decision 5 a topic whose answer would sit in an unheld source may not be Confirmed absent; and the Code does answer part of it (the commission may approve a line-item demand-side-management charge on every customer's bill).
- ERROR `edu-no-utility-transfer-rule-ut` [verdict] (r1/b4:#54, fixed): Confirmed absent on the question whether a landlord may have a utility left in the landlord's name shut off. Whether a regulated electric or gas utility will close or disconnect an account holder's service while a tenant occupies, and on what notice to occupants, would sit in the Public Service Commission's rules (Utah Admin. Code R746-200) or the tariffs, which are not held. Sibling rows in the same slice say so (edu-utility-landlord-account-ut: rules on notice to each unit before a shutoff and on shutting off tenants for a landlord's unpaid bill "would be in the Public Service Commission's rules or the provider's tariff"). Class decision 5 bars Confirmed absent here unless the row argues why the subject does not sit there, and it does not.
- ERROR `parking-rules-notice-ut` [bodyText] (r1/b4:#66, fixed): The clause lets Landlord change the parking rules mid-term by notice alone. The same batch's Utah rules clause and education row take the cautious course that, in a fixed term, a new or changed rule binds the tenant only with the tenant's signed agreement or on renewal, because whether a landlord may change rules mid-term without consent is case law not read. Used together, rules-ut and this clause contradict each other, and this clause's change sentence does not work under every reading (class decision 2).
- WARN: 116 raised, 109 fixed as proposed or in substance; the rest are recorded in the errata file with the main pass's reason in s4 where one was needed.

#### Round 2: 128 ids checked, 52 clean, 4 ERROR and 96 WARN

- ERROR `edu-habitability-modifiable-ut` [notes] (r2/b1:#1, fixed): The r1/b1:#3 fix replaced the body's water-supply absence but left the notes' unqualified absence sentence in place. No logged battery searched water supply (UTG-A-019 searches only rental-agreement variance phrasings), the duty runs to board-of-health rules not held (CD5), and the notes now contradict the body, which says those rules sit in sources the library has not read.
- ERROR `edu-rent-acceptance-waiver-ut` [bodyText] (r2/b1:#15, fixed): The body limits the tenant's right to save the lease to payment "within the three business days the notice gives". The current statute sets no such limit: it lets the tenant (or a subtenant, mortgagee or other interested person) perform 'After service of the notice and the time period required for the notice'. On its face a full tender after the three days can still save the lease; how long that right lasts is case law not read. A landlord relying on the row could refuse a late full tender or treat the lease as forfeited when it may not be. The r1/b1:#15 sentence built on this premise ("during or after that period").
- ERROR `edu-fire-sprinkler-duty-ut` [notes] (r2/b2:#17, fixed): r1/b3:#1 fixed the body but not the notes (its fix asked for both): the notes quote still starts after the condition, so it is cut in a way that changes its meaning (it reads as an unconditional in-unit alarm duty) and no longer supports the corrected body.
- ERROR `edu-no-foreclosure-disclosure-ut` [bodyText] (r2/b2:#67, fixed): The sentence added by r1/b4:#9 says that without a rental-purpose loan "your tenant may hear nothing until the sale". For a trustee's sale the statute requires every notice of sale to be posted in a conspicuous place on the property at least 20 days before the sale, whatever the loan's purpose; only the tenant-specific door posting or mailing and the tenant statement depend on the rental purpose.
- WARN: 96 raised, 96 fixed as proposed or in substance; the rest are recorded in the errata file with the main pass's reason in s4 where one was needed.

#### Rows edited after the last round (r2)

- `edu-habitability-modifiable-ut`
- `edu-no-general-nonwaiver-statute-ut`
- `edu-no-deposit-nonwaiver-statute-ut`
- `edu-exculpatory-clauses-ut`
- `edu-unconscionability-ut`
- `edu-eviction-charges-ut`
- `edu-liquidated-damages-ut`
- `edu-rent-acceptance-waiver-ut`
- `edu-prohibited-lease-terms-ut`
- `edu-casualty-mitigation-waiver-ut`
- `edu-lease-content-requirements-ut`
- `edu-written-notices-ut`
- `edu-no-initials-requirement-ut`
- `edu-statute-of-frauds-lease-ut`
- `edu-lease-term-limits-ut`
- `edu-deposit-cost-schedule-ut`
- `deposit-cost-schedule-ut`
- `edu-no-carpet-cleaning-rule-ut`
- `carpet-cleaning-ut`
- `edu-deposit-escheat-ut`
- `edu-no-deposit-installments-ut`
- `edu-deposit-last-month-rent-ut`
- `edu-security-deposit-holding-ut`
- `edu-no-security-deposit-standards-ut`
- `edu-no-fee-in-lieu-of-deposit-ut`
- `fees-and-charges-ut`
- `edu-no-fee-unprovided-service-ut`
- `edu-fees-as-rent-ut`
- `edu-statutory-caps-ut`
- `edu-lockout-for-rent-delinquency-ut`
- `keys-ut`
- `parking-vehicle-rules-ut`
- `smoking-policy-ut`
- `early-termination-ut`
- `edu-property-manager-license-ut`
- `edu-no-dv-confidentiality-rule-ut`
- `edu-dv-eviction-protection-ut`
- `edu-no-immigration-status-rule-ut`
- `edu-employee-screening-ut`
- `edu-no-senior-housing-work-card-ut`
- `edu-political-access-ut`
- `edu-no-rights-responsibilities-guide-ut`
- `edu-substandard-property-enforcement-ut`
- `edu-lead-state-notices-ut`
- `edu-no-certificate-of-occupancy-disclosure-ut`
- `edu-portfolio-thresholds-ut`
- `edu-home-business-ut`
- `edu-no-habitability-statement-ut`
- `heat-freeze-protection-ut`
- `landlord-self-cure-ut`
- `edu-subsidy-habitability-proration-ut`
- `edu-fire-sprinkler-duty-ut`
- `edu-no-sprinkler-disclosure-ut`
- `edu-pool-safety-ut`
- `pool-and-spa-use-ut`
- `edu-no-smart-access-law-ut`
- `edu-no-key-control-policy-ut`
- `edu-pest-control-notice-ut`
- `edu-no-steam-radiator-cover-rule-ut`
- `edu-no-waterbed-rule-ut`
- `edu-no-drywall-disclosure-ut`
- `edu-criminal-activity-ut`
- `automatic-renewal-ut`
- `edu-sale-or-management-change-ut`
- `edu-actual-notice-method-ut`
- `edu-no-lease-option-statute-ut`
- `edu-disaster-duties-ut`
- `edu-no-meter-conservation-charge-ut`
- `utility-allowance-cap-ut`
- `edu-utility-interruption-ut`
- `edu-no-utility-transfer-rule-ut`
- `edu-ev-charging-requirements-ut`
- `parking-rules-notice-ut`
- `edu-farmland-hunting-rights-ut`
- `edu-no-foreclosure-disclosure-ut`
- `security-devices-ut`

### 6. Findings on existing rows

#### 6.1 `edu-no-deposit-interest-ut` (UT)

The row says: "Utah does not require a landlord to pay interest on security deposits or to hold them in a separate or interest-bearing account." For an owner managing its own rental that holds (Battery UTG-B-010, a dedicated interest and account search the row says was not run). But a licensed property manager holding tenant deposits must associate with a Utah real estate trust account: 'Except as provided in Subsection (4), and subject to Subsection (5), a property manager shall associate with at least one real estate trust account in a bank or credit union:' (Utah Code Ann. § 61-2f-411(3)), used for 'tenant security deposits;' (Utah Code Ann. § 61-2f-411(3)(b)(i)); the account is non-interest-bearing unless the management-contract parties agree in writing (Utah Code Ann. § 61-2f-411(3)(c)); the exemption needs both the management agreement and a lease statement (Utah Code Ann. § 61-2f-411(4)); a broker-affiliated manager must use the principal broker's trust account (Utah Code Ann. § 61-2f-411(5)); commingling is a disciplinary ground (Utah Code Ann. § 61-2f-401(4)(b)). Proposed wording: "Utah does not require a landlord to pay interest on security deposits. An owner managing its own rental need not hold deposits in a separate or interest-bearing account. A licensed property manager must keep tenant deposits in a Utah real estate trust account, non-interest-bearing unless the management contract provides otherwise, unless both the management agreement and the lease state that the manager need not; see edu-security-deposit-holding-ut."

#### 6.2 `edu-self-help-eviction-ut` (UT)

The row says: "The only exception is removing contents and retaking the premises after the tenant has abandoned them, following the statutory abandonment procedure." Utah Code Ann. § 78B-6-814 itself has only that proviso, but Utah Code Ann. § 57-22-5.1 adds a statutory exclusion of a renter: an owner who installs a crime victim's new lock 'shall refuse to provide a copy of the key that opens the new lock to the perpetrator' (Utah Code Ann. § 57-22-5.1(3)(d)), and 'Notwithstanding Section 78B-6-814, if an owner refuses to provide a copy of the key under Subsection (3)(d) to a perpetrator who is not barred from the residential rental unit by a protective order but is a renter on the rental agreement, the perpetrator may file a petition' (Utah Code Ann. § 57-22-5.1(3)(e)) (same text in both versions of the section). Proposed wording: "The statute's only exception is removing contents and retaking the premises after the tenant has abandoned them, following the statutory abandonment procedure. Separately, when you install new locks for a crime victim, the law requires you to refuse a key to the perpetrator, even one on the lease (see edu-crime-victim-locks-ut)." Low severity: the row is correct about rent-related lockouts.

#### 6.3 `edu-no-retaliation-statute-ut` (UT)

Slice C (tenant-right-to-organize): the row's body says "Utah has no general statute barring retaliation against residential tenants for complaints or code reports. Two specific protections exist:" (fair housing reprisal and police calls). That is right as to a general statute, but it omits a third Utah tenant retaliation rule that its own notes find and set aside as mobile-home-only: 'A park operator may not alter or refuse to renew an existing rental agreement, change a rule of the mobile home park, enforce a mobile home park rule in an unreasonable or nonuniform way, bring or threaten to bring an eviction action or other civil action, or take any other action in retaliation based primarily on a resident:' (Utah Code Ann. § 57-16-16(11)(a)) complaining to a government agency, complaining in good faith to the operator, suing or testifying; it 'does not limit a defense available under the law to a resident in an eviction action.' (Utah Code Ann. § 57-16-16(11)(b)). A landlord who rents mobile home spaces reading the row would miss it. Proposed wording for the body: replace "Two specific protections exist:" with "Three specific protections exist:" and add after the police-call sentence: "And a mobile home park operator may not refuse to renew, change or unevenly enforce rules, threaten or bring an eviction, or otherwise retaliate based primarily on a resident's complaint to a government agency or good-faith complaint to the operator, lawsuit, or testimony (see edu-tenant-right-to-organize-ut)."

#### 6.4 `edu-rental-licensing-ut` (UT)

edu-rental-licensing-ut says "Counties have parallel powers." and its notes say "County analog Utah Code Ann. § 17-79-611 and the county licensing sections not read in full." Read whole 2026-11-08: Utah Code Ann. § 17-79-611 is only the county egress-window and nonconforming-use limit ('A county ordinance may not:' (Utah Code Ann. § 17-79-611(2))), and no section of Title 17 provides a regulatory business license for rental dwellings, an inspection condition, a disproportionate rental fee or a good landlord program (Battery UTG-D-001 (rentdwell 1; reglic 0; goodll 0; licinsp.ab 4; licinsp.ba 3; licinsp.and 7; rentlic.ab 4; rentlic.ba 4; rentlic.and 6 units hit when run; 5 of 5 positives passed; controls passed (nonsense 0, must-hit 47))). The only county licensing power is general: the legislative body may by ordinance 'provide for the licensing of businesses within the unincorporated areas of the county for the purpose of regulation; and' (Utah Code Ann. § 17-64-505(2)(a)) and 'impose fees on businesses to recover the county's costs of regulation.' (Utah Code Ann. § 17-64-505(2)(b)). Proposed UT wording in place of "Counties have parallel powers.": "Counties have no rental-dwelling licensing statute of their own: a county may license businesses in its unincorporated area for regulation and charge fees to recover its costs, and it may not require egress-window or other retrofits beyond those state law lists." and in the notes replace the county sentence with Utah Code Ann. §§ 17-64-505(2), 17-79-611 read whole. The body could also add, from Utah Code Ann. § 10-1-203.5(3)(c) and (3)(f), that a city may not 'without cause and notice, require a residential landlord to submit to a random building inspection;' (Utah Code Ann. § 10-1-203.5(3)(c)) and may not 'prohibit a residential landlord from passing on to the tenant the license or disproportionate fee.' (Utah Code Ann. § 10-1-203.5(3)(f)). Rental inspection itself is now answered in `edu-rental-inspection-ut`.

#### 6.5 `permitted-occupants` (54 states)

UT segment says "Utah Code Ann. § 57-22-5(1)(f): the renter may not increase the number of occupants above those in the rental agreement without the owner's written permission." (library notes text) The shared clause text only says "Tenant will notify Landlord promptly if any additional occupant takes up residence at the property." The statute: each renter shall 'occupy the residential rental unit in the manner for which it was designed, but the renter may not increase the number of occupants above that specified in the rental agreement without written permission of the owner;' (Utah Code Ann. § 57-22-5(1)(f)). The clause is not wrong (the statute applies anyway), but a Utah tenant reading it may think notice is enough. Slice E's renter-duties-ut restates the written-permission rule in lease text, so no change is needed if both clauses are used; otherwise a UT override would read "Tenant will not add any occupant beyond those named above without Landlord's written permission." Main pass to decide.

#### 6.6 `edu-alarms-ut` (UT)

edu-alarms-ut says: "Utah's landlord-tenant statutes set no smoke or carbon monoxide alarm duty for rentals. Alarm requirements come from the State Construction and Fire Codes adopted under Title 15A and local ordinances." and its notes leave "The Title 15A code amendments were not read (open item)." Slice F read the State Fire Code amendments for existing buildings: Utah rewrites IFC 1103.9 as '1103.9 Carbon Monoxide Detection. Existing Groups E, I-1, I-2, I-4, and R occupancies shall be equipped with carbon monoxide detection in accordance with Section 915.' (Utah Code Ann. § 15A-5-205.5(1)(g)), and deletes the IFC's existing-building fire alarm and smoke detection sections for Group R-1 and R-2 (IFC 1103.7.5 to 1103.7.6) (Utah Code Ann. § 15A-5-205.5(1)(e)). The IRC amendments add accessory dwelling units to the smoke and CO alarm triggers on alterations and repairs (Utah Code Ann. § 15A-3-202(31), (32)). The row is not wrong but is incomplete. Proposed added sentence for the UT row: "Utah's version of the fire code requires existing residential (Group R) buildings, including existing apartment buildings and rental homes, to have carbon monoxide detection as the fire code provides, while removing the national fire code's retroactive fire alarm requirements for existing apartment and hotel buildings; the national text itself (IFC Section 915 and Chapter 11) is not in the library's sources." Keep the existing fetch of IFC chapter 9 (slice B) and add Chapter 11. (Slice F, while reading Title 15A for fire-sprinkler-duty.)

#### 6.7 `edu-foreclosure-tenants-ut` (UT)

edu-foreclosure-tenants-ut (topic foreclosure) says: "When a trust deed on residential rental property is foreclosed by trustee's sale, the trustee must post the notice of sale ..." and cites only Utah Code Ann. §§ 57-1-25(1)(c), (3)(b) for the tenant notice. It omits the judicial-foreclosure notice: 'Within 20 days after filing an action under this part to foreclose property that includes or constitutes residential rental property, the plaintiff in the action shall:' (Utah Code Ann. § 78B-6-901.5(2)) post or mail a 14-point Notice to Tenant whose statement says the tenant may stay 'until your rental agreement expires, or until 90 days after the sale of the property at auction, whichever is later.' (Utah Code Ann. § 78B-6-901.5(3)(d)), measured from the sale rather than from a notice to vacate as in Utah Code Ann. § 57-1-25(3)(b). Proposed added sentence after the first: "If the lender forecloses in court instead, the plaintiff must post or mail a similar 14-point notice to tenants within 20 days after filing the action." and add Utah Code Ann. § 78B-6-901.5 to the notes. Not wrong as written; a completeness fix (slice H, foreclosure-disclosure).

#### 6.8 `edu-towing-ut` (UT)

Slice I (parking-rules-notice; Utah Code Ann. § 72-9-603 now read whole, as amended by Laws of Utah 2026, ch. 115). `edu-towing-ut` says a tow company "may tow from private property at the owner's request only with the vehicle owner's consent or with signage meeting state requirements" and lists the signage exceptions. The statute has a third route: a tow truck operator may not tow at a private owner's request unless the owner consents or there is compliant signage, 'Except as provided in Subsection (3)(b) or (9),' (Utah Code Ann. § 72-9-603(3)(a)), and the owner may enforce parking by 'requesting a tow from a tow truck motor carrier after providing 24-hour written notice in accordance with Subsection (9).' (Utah Code Ann. § 72-9-603(4)(a)(iii)); the notice must 'indicate the exact time when the written notice is affixed to the vehicle, vessel, or outboard motor;' (Utah Code Ann. § 72-9-603(9)(b)(i)) and be placed on the driver's side window (Utah Code Ann. § 72-9-603(9)(b)(iv)). The row's exception list also omits places where 'it is reasonably apparent that the location is not open to parking;' (Utah Code Ann. § 72-9-603(3)(b)(ii)) and tows 'pursuant to a legal repossession.' (Utah Code Ann. § 72-9-603(3)(b)(vi)), and the row omits that enforcement is 'subject to the requirements of a local ordinance,' (Utah Code Ann. § 72-9-603(4)(a)). Proposed wording: "A Utah tow company may tow a vehicle from private property at the owner's request only if the vehicle owner consents, the property has signs meeting state requirements at each entrance, or the owner has placed a written 24-hour warning notice on the driver's side window stating the exact time it was placed. Signs and notice are not required for towing from a detached single-family home or duplex, from places where parking is prohibited by law (fire lanes, near hydrants, disabled spaces without a placard), from places plainly not open to parking, from gated or attended lots, where the vehicle materially interferes with access, or for a legal repossession. A city or county may add requirements." Severity: low (omission of a lawful landlord route). The notes' "read in context; not read whole" can then become read whole.

#### 6.9 `edu-self-help-eviction-ut` (UT)

Slice I (utility-interruption-submeter). The row's notes say "no residential utility-shutoff rule for landlords". The 2026 code has one, for water and sewer special districts: 'An owner of land or the owner's agent may request that service be temporarily discontinued for maintenance-related activities.' (Utah Code Ann. § 17B-1-901(3)(b)(i)); 'An owner of land or the owner's agent may not request temporary discontinuance of service under Subsection (3)(b)(i) if the request is for the purpose of debt collection, eviction, or any other unlawful purpose.' (Utah Code Ann. § 17B-1-901(3)(b)(ii)); and the district 'may not suspend furnishing any commodity, service, or facility to a customer if discontinuance of the service is requested by a private third party,' (Utah Code Ann. § 17B-1-901(3)(a)). History line: Amended by Laws of Utah 2026, ch. 105 (session-law text not held, so whether Subsection (3) is new in 2026 is not confirmed). Proposed: add to the body "A water or sewer special district may not shut off service at your request to collect a debt or to evict a tenant; you may ask for a temporary shutoff only for maintenance." and in the notes replace the parenthetical with "(whole-code search: no general landlord utility-shutoff statute; special districts bar an owner's discontinuance request for debt collection or eviction, Utah Code Ann. § 17B-1-901(3)(b)(ii); see `edu-utility-interruption-ut`)". Severity: low to medium (the row's practical advice is unchanged; the notes' absence claim is now too broad).

#### 6.10 `hoa-compliance` (48 states)

Utah item 6. The clause reads "Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility." The amount is not stated. An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). The clause is otherwise consistent with Utah Code Ann. §§ 57-8-10.1, 57-8-53, 57-8a-209 and 57-8a-310 (read whole): those sections bind the owner and, through the rent-demand procedure and any lease addendum the association requires, the tenant; none bars a lease term making the tenant follow association rules. Two Utah points the shared clause does not carry: a tenant's payments to the association after a rent demand count as rent ('the tenant's payment of lease payments to the association of unit owners does not constitute a default under the terms of the lease with the unit owner.' (Utah Code Ann. § 57-8-53(4)(b)(iii))), and the cautious reading of the rules-copy duty (Utah Code Ann. § 57-22-4(7)(b)(ii)) is to give the tenant the association rules. Proposed: `hoa-compliance-ut` (below), modelled on `hoa-compliance-co` and `hoa-compliance-oh`; at sync remove UT from `hoa-compliance` states.

#### 6.11 `edu-hoa-rental-rules-ut` (UT)

Utah item 6 (Sections 57-8-10.1 and 57-8-53 now read whole). The row's notes say "Condominium analogs Utah Code Ann. §§ 57-8-10.1, 57-8-53 not read in full", and its body speaks only of "A Utah homeowners association". The condominium sections carry the same rules: Utah Code Ann. § 57-8-10.1(1), (8), (9)(e) and § 57-8-53. The body also says an association may not "charge extra because a lot is rented" with no exception, but 'An association that permits at least 35% of the lots in the association to be rental lots may charge a lot owner who owns a rental lot a fee of up to $200 once every 12 months to defray the association's additional administrative expenses directly related to a lot that is a rental lot, as detailed in a notice described in Subsection (12).' (Utah Code Ann. § 57-8a-209(9)(c)), with the condominium match in Utah Code Ann. § 57-8-10.1(9)(c). Proposed body edits: "A Utah homeowners or condominium association may restrict or prohibit rentals ..."; replace "charge extra because a lot is rented" with "charge extra because a unit or lot is rented (except, where at least 35% may be rented, an administrative fee of up to $200 a year after a noticed board vote)"; notes: cite Utah Code Ann. §§ 57-8-10.1 and 57-8-53 as read whole 2026-11-08.

#### 6.12 `keys` (43 states)

Utah item 6. The clause reads "Landlord may re-key the applicable locks and charge the cost to Tenant." An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). Proposed: `keys-ut` (below), modelled on `keys-co`, with the crime-victim lock carve-out the UT segment already flags: the renter 'pays for the cost of installing the new lock.' (Utah Code Ann. § 57-22-5.1(3)(a)(ii)) and 'Notwithstanding any rental agreement, an owner who installs a new lock under Subsection (3)(a) shall refuse to provide a copy of the key that opens the new lock to the perpetrator of the act listed in Subsection (1).' (Utah Code Ann. § 57-22-5.1(3)(d)). At sync remove UT from `keys` states.

#### 6.13 `parking-vehicle-rules` (38 states)

Utah item 6. The clause says Landlord "may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant." An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). The towing sentence is not a charge by the owner (the tow operator charges the vehicle owner) and already defers to Utah Code Ann. § 72-9-603. Proposed: `parking-vehicle-rules-ut` (below), modelled on `parking-vehicle-rules-ma`. At sync remove UT from `parking-vehicle-rules` states.

#### 6.14 `smoking-policy` (44 states)

Utah item 6. The clause says "Tenant will be responsible for any cost Landlord incurs to remediate odor, staining, or damage caused by smoking". An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). The Fit Premises Act makes the renter 'comply with each rule, regulation, or requirement of the rental agreement, including any prohibition on, or the allowance of, smoking tobacco products within the residential rental unit, or on the premises, or both.' (Utah Code Ann. § 57-22-5(1)(h)), but gives the owner no money remedy for a breach; the deposit chapter lets a deposit be applied to 'damages to the premises beyond reasonable wear and tear, other costs and fees provided for in the contract, or cleaning of the unit.' (Utah Code Ann. § 57-17-3(1)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). Proposed: `smoking-policy-ut` (below). It keeps the shared prohibition word for word, fixes the remediation amount, and adds one sentence that the clause is not a promise against drifting smoke (Utah Code Ann. § 78B-6a-405(2)(c), already in the UT segment). Item 7 checks (cannabis, smoke drift) are unaffected. At sync remove UT from `smoking-policy` states.

#### 6.15 `early-termination-ks` (21 states)

Utah item 8(a). UT is tagged on a clause charging "an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater". The fee is stated in the agreement, so the fee rule is met: the owner may not charge a fee 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)). Whether a fee that grows with the remaining term is an unenforceable penalty is case law not read (`edu-liquidated-damages-ut`). Cautious course: propose `early-termination-ut` (below), a flat one-month fee as in `early-termination-ga`, carrying Utah's domestic-violence termination (Utah Code Ann. § 57-22-5.1(4)-(6), `edu-dv-termination-ut`). At sync remove UT from `early-termination-ks` states.

#### 6.16 `periodic-tenancy-notice-ut` (UT)

Utah item 8(c) (minor). The row says "Landlord may end it by serving Tenant written notice at least 15 calendar days before the end of a rental period, and the tenancy will end at the end of that period." Utah's own CARES section limits the federal 30-day notice but does not exclude a periodic-tenancy notice: the federal notice 'applies only to a notice provided to a tenant of a covered dwelling in a covered property as that term is defined in 15 U.S.C. Sec. 9058(a);' (Utah Code Ann. § 78B-6-802(5)(a)), 'applies only to the amount of time before a tenant may be required to vacate a covered property through an order of restitution as provided by Section 78B-6-812;' (Utah Code Ann. § 78B-6-802(5)(b)), and 'does not apply to a notice provided under Subsections (1)(d) through (h);' (Utah Code Ann. § 78B-6-802(5)(e)), which leaves the (1)(b) periodic notice inside it. No contradiction with `edu-cares-act-notice`, but the clause reads as if 15 days always ends the tenancy. Proposed added sentence: "If federal law requires Landlord to give Tenant a longer notice before Tenant may be required to vacate, Landlord will give that notice." (cf. FEDERAL: 15 U.S.C. § 9058(c)).

#### 6.17 `edu-expedited-criminal-eviction-ut` (UT)

Slice G review (low severity, notes only). The row's notes say "No criminal-activity lease clause offered (UT log s6, rule 54 list)." The gaps pass tags `criminal-activity-ky` for UT under rule 54 (offer every lawful optional clause): the statutory no-cure ground reaches a 'criminal act on the premises' (Utah Code Ann. § 78B-6-802(1)(g)) by the tenant, and the clause adds occupants, guests and conduct near the property through the covenant ground (Utah Code Ann. § 78B-6-802(1)(h)); no Utah statute bars or shapes such a term (slice G battery UTG-G-003; `edu-criminal-activity-ut`). Proposed notes edit: replace that sentence with "Optional criminal-activity covenant: `criminal-activity-ky` (UT tag, gaps pass 2026-11-08)."

#### Proposed rows (every field filled; not in the delta)

##### `edu-property-manager-license-ut` (A landlord requirement Utah answers that no UT row states: from 2027-01-01 third-party property management needs a license (topic landlord-registration currently has only edu-rental-licensing-ut, on local programs). Kept out of employee-screening's own row (rule 57, one subject per row).)

- **id:** edu-property-manager-license-ut
- **group:** Compliance & Prohibited Terms
- **title:** Property Manager License from 2027
- **states:** UT
- **is_active:** 
- **supersedes:** 
- **bodyText:** An individual may not, for consideration, manage residential or other real estate owned by another person (advertising or arranging rentals, collecting rent, or signing leases or addenda with tenants) unless licensed under Utah's real estate licensing law. Managing others' property for pay is already a principal broker's act, so today it needs a principal broker, associate broker, sales agent or dual broker license. From January 1, 2027, Utah adds a separate property manager license, which covers residential rental units only. Applicants must complete the state's education program and examination (with shortcuts for those licensed in another state or already holding a broker or sales agent license) and submit fingerprints for a state and FBI background check with ongoing monitoring. An individual needs no license to manage property that individual owns or leases; whether an entity owner's own staff need one is not settled by the text (Real Estate Commission rules not held), so check before relying on it; members of the owner's immediate family, unlicensed or remote assistants of a property manager, people who only do maintenance and repairs or bookkeeping, and regional managers or corporate officials of a rental agency who do none of the management acts are also exempt. Hotel management and stays of under 30 days in tourist accommodations are not property management.
- **rule_type:** REQUIRED
- **content_type:** LANDLORD_EDUCATION
- **verification_status:** VERIFIED
- **notes:** UT: Present. Utah Code Ann. §§ 61-2f-201(1)(d), (3), (4), 61-2f-202.5, 61-2f-102(32), 61-2f-203(1)(b)(iv), (1)(d)(iii)-(iv), (1)(e)(iii)-(iv), (7), 61-2f-204(1)(d) (Laws of Utah 2026, ch. 142). 'An individual licensed as a property manager under this chapter:' (Utah Code Ann. § 61-2f-201(4)) 'may not engage in an activity listed in Subsection (4)(a) in relation to real estate other than a residential rental unit.' (Utah Code Ann. § 61-2f-201(4)(b)). Stale cross-reference in Utah Code Ann. § 61-2f-202.5 to Utah Code Ann. § 61-2f-102(31)(a) (now "principal property manager"; property management is (32)(a)). Found while answering employee-screening (slice C); no active UT row cites Title 61, Chapter 2f (lib.py secnum 61-2f-201, 61-2f-202.5: 0 rows). Today: a principal broker includes an individual who 'with the expectation of receiving valuable consideration, manages property owned by another person;' (Utah Code Ann. § 61-2f-102(30)(b)(v)); Utah Code Ann. § 61-2f-201(3) bars unlicensed management for consideration with no date of its own, while the license issues 'on or after January 1, 2027, a property manager license.' (Utah Code Ann. § 61-2f-203(1)(b)(iv)) and Utah Code Ann. § 61-2f-201(1)(d) reaches 'on or after January 1, 2027, engage in property management.' (Utah Code Ann. § 61-2f-201(1)(d)). Utah Code Ann. § 61-2f-203 read whole 2026-11-09. Read section-open 2026-11-08 from the Legislature's official Utah Code XML (corpus-UT-20261108; gaps log s1, s3): the sections listed; Utah Code Ann. § 61-2f-203 read in its property manager subsections only (main pass may read it whole before adopting).
- **effective_from:** 
- **last_checked:** 
- **choice_group:** 
- **is_default:** 
- **topic_key:** landlord-registration
- **lease_clause_basis:** 

##### `hoa-compliance-ut` (Fine amount unstated under Utah Code Ann. § 57-22-4(5)(b)(i); cautious course per Utah item 6.)

- **id:** hoa-compliance-ut
- **group:** Disclosures
- **title:** Homeowner / Condominium Association Compliance
- **states:** UT
- **is_active:** TRUE
- **supersedes:** hoa-compliance
- **bodyText:** If the property is in a condominium or homeowners association, Tenant will comply with the association's declaration, bylaws, rules and regulations that apply to the property, a copy of whose rules and regulations Landlord has given Tenant, and will sign any addendum to this Lease that Utah law allows the association to require. A violation of those rules by Tenant, an occupant or a guest is a breach of this Lease, and Tenant will pay Landlord, as Landlord's damages for that breach, the amount of any fine the association imposes on Landlord because of it, with no markup or added fee; Landlord will give Tenant a copy of the association's notice of the fine when Landlord charges Tenant. This Section does not make Tenant pay any association dues or assessment. If the association lawfully directs Tenant to pay Rent to it because Landlord has not paid an assessment, Tenant will do so, and each payment Tenant makes to the association counts as Rent paid to Landlord and is not a default under this Lease.
- **rule_type:** RECOMMENDED
- **content_type:** LEASE_CLAUSE
- **verification_status:** VERIFIED
- **notes:** UT: Override of `hoa-compliance` (UT gaps pass 2026-11-08, Utah item 6). An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). The fine is passed through at the amount the association imposes, with a copy of its notice (gaps log s4 class decision 1). Rules copy: 'a copy of any rules and regulations applicable to the residential rental unit.' (Utah Code Ann. § 57-22-4(7)(b)(ii)). Addendum: Utah Code Ann. §§ 57-8-10.1(9)(e), 57-8a-209(9)(d). Rent demand: Utah Code Ann. §§ 57-8-53, 57-8a-310; the tenant's notice must say 'the tenant's payment of lease payments to the association does not constitute a default under the terms of the lease with the lot owner.' (Utah Code Ann. § 57-8a-310(4)(b)(iii)). Association documents: `edu-no-association-disclosure-ut`, `edu-hoa-rental-rules-ut`. Read section-open 2026-11-08 from the Legislature's official Utah Code XML (corpus-UT-20261108: le.utah.gov title files, hashes verified against its manifest; history lines through the 2026 General Session; no 2026 special session met): Utah Code Ann. §§ 57-8-10.1, 57-8-53, 57-8a-209, 57-8a-310, 57-22-4; whole Code and Constitution searched by battery (gaps log s1, s3).
- **effective_from:** 2026-11-08
- **last_checked:** 2026-11-08
- **choice_group:** 
- **is_default:** 
- **topic_key:** hoa-compliance
- **lease_clause_basis:** CONSTRAINED_TERM: Utah Code Ann. § 57-22-4(5)(b) | SERVES_LANDLORD

##### `keys-ut` (Charge is the unstated "cost" under Utah Code Ann. § 57-22-4(5)(b)(i); cautious course per Utah item 6.)

- **id:** keys-ut
- **group:** Rules & Regulations
- **title:** Keys
- **states:** UT
- **is_active:** TRUE
- **supersedes:** keys
- **bodyText:** At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or asks for a replacement key, Landlord may re-key the applicable locks or replace the key and charge Tenant only the amount a locksmith or other third party bills Landlord for that work or, if Landlord does the work itself, the price Landlord paid for the keys, lock cylinders or other parts used, with no markup, labor charge or added fee; Landlord will give Tenant a copy of the bill or receipt when Landlord charges Tenant. Tenant may not duplicate keys without Landlord's consent. This Section does not apply to a new lock that Tenant requires as a crime victim under Utah Code Ann. § 57-22-5.1; for that lock, Tenant pays the cost of installing it as that section provides, Landlord may keep a copy of the new key, and Landlord will refuse to give a copy of it to the perpetrator.
- **rule_type:** RECOMMENDED
- **content_type:** LEASE_CLAUSE
- **verification_status:** VERIFIED
- **notes:** UT: Override of `keys` (UT gaps pass 2026-11-08, Utah item 6). An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). Crime-victim locks: the renter 'pays for the cost of installing the new lock.' (Utah Code Ann. § 57-22-5.1(3)(a)(ii)); 'An owner who installs a new lock under Subsection (3)(a) may retain a copy of the key that opens the new lock.' (Utah Code Ann. § 57-22-5.1(3)(c)); refusal to the perpetrator 'Notwithstanding any rental agreement' (Utah Code Ann. § 57-22-5.1(3)(d)) (the same subsections appear in the version effective January 1, 2027) (`edu-crime-victim-locks-ut`). These Fit Premises Act rules cover a residential rental unit, which 'means a renter's principal place of residence' (Utah Code Ann. § 57-22-2(5)) and 'does not include facilities contained in a boarding or rooming house or similar facility, mobile home lot, or recreational property rented on an occasional basis.' (Utah Code Ann. § 57-22-2(5)). Read section-open 2026-11-08 from the Legislature's official Utah Code XML (corpus-UT-20261108: le.utah.gov title files, hashes verified against its manifest; history lines through the 2026 General Session; no 2026 special session met): Utah Code Ann. §§ 57-22-4, 57-22-5.1; whole Code and Constitution searched by battery (gaps log s1, s3).
- **effective_from:** 2026-11-08
- **last_checked:** 2026-11-08
- **choice_group:** 
- **is_default:** 
- **topic_key:** keys
- **lease_clause_basis:** CONSTRAINED_TERM: Utah Code Ann. § 57-22-4(5)(b); Utah Code Ann. § 57-22-5.1(3) | SERVES_LANDLORD

##### `parking-vehicle-rules-ut` (Tag and card charge is the unstated "cost" under Utah Code Ann. § 57-22-4(5)(b)(i); cautious course per Utah item 6.)

- **id:** parking-vehicle-rules-ut
- **group:** Parking & Storage
- **title:** Parking & Vehicle Requirements
- **states:** UT
- **is_active:** TRUE
- **supersedes:** parking-vehicle-rules
- **bodyText:** Only operable, currently registered passenger vehicles may be parked at the property; commercial vehicles, recreational vehicles, trailers, and oversized vehicles are not permitted without Landlord's prior written consent. Landlord may require Tenant to provide vehicle registration information and may issue parking tags, decals, or access cards without charge; Landlord may charge Tenant for replacing a lost or damaged tag, decal or card only the amount its supplier charges Landlord for the replacement, with no markup or added fee, and will give Tenant a copy of the supplier's bill or receipt when Landlord charges Tenant. Landlord may, in accordance with applicable law, have a vehicle towed at the vehicle owner's expense if it is illegally parked, abandoned, inoperable, or has expired registration. Vehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.
- **rule_type:** RECOMMENDED
- **content_type:** LEASE_CLAUSE
- **verification_status:** VERIFIED
- **notes:** UT: Override of `parking-vehicle-rules` (UT gaps pass 2026-11-08, Utah item 6). An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). Towing: the clause's towing sentence is not a charge by the owner (the tow operator charges the vehicle owner) and defers to applicable law; the tow notice and cost rules are in Utah Code Ann. § 72-9-603 (`edu-towing-ut`). Firearms in vehicles: Utah Code Ann. § 34-45-103 (`edu-firearm-vehicle-storage-ut`); the clause does not touch them. These Fit Premises Act rules cover a residential rental unit, which 'means a renter's principal place of residence' (Utah Code Ann. § 57-22-2(5)) and 'does not include facilities contained in a boarding or rooming house or similar facility, mobile home lot, or recreational property rented on an occasional basis.' (Utah Code Ann. § 57-22-2(5)). Read section-open 2026-11-08 from the Legislature's official Utah Code XML (corpus-UT-20261108: le.utah.gov title files, hashes verified against its manifest; history lines through the 2026 General Session; no 2026 special session met): Utah Code Ann. § 57-22-4; whole Code and Constitution searched by battery (gaps log s1, s3).
- **effective_from:** 2026-11-08
- **last_checked:** 2026-11-08
- **choice_group:** 
- **is_default:** 
- **topic_key:** parking-vehicle-rules
- **lease_clause_basis:** CONSTRAINED_TERM: Utah Code Ann. § 57-22-4(5)(b) | SERVES_LANDLORD

##### `smoking-policy-ut` (Remediation charge is the unstated "cost" under Utah Code Ann. § 57-22-4(5)(b)(i); cautious course per Utah item 6.)

- **id:** smoking-policy-ut
- **group:** Tenant Responsibilities
- **title:** Smoking Policy
- **states:** UT
- **is_active:** TRUE
- **supersedes:** smoking-policy
- **bodyText:** Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted anywhere on the property, including inside the dwelling, on porches, balconies, or in any common area. If smoking by Tenant, an occupant, or a guest or invitee of Tenant in violation of this Section causes odor, staining or damage, Tenant will pay Landlord, as damages, the amount a cleaning, painting, repair or other contractor bills Landlord to remediate it or, if Landlord does the work itself, the price Landlord paid for the materials used, with no markup, labor charge or added fee, and Landlord will give Tenant a copy of the bill or receipt when Landlord charges Tenant. A violation may be treated as a default under this Lease. This Section restricts smoking at the property; it is not a promise that the property will be free of smoke drifting from elsewhere.
- **rule_type:** RECOMMENDED
- **content_type:** LEASE_CLAUSE
- **verification_status:** VERIFIED
- **notes:** UT: Override of `smoking-policy` (UT gaps pass 2026-11-08, Utah item 6). An owner may not charge a renter 'a fee, fine, assessment, interest, or other cost:' (Utah Code Ann. § 57-22-4(5)(b)) 'in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i)); and 'Nothing in this section prohibits any fee, fine, assessment, interest, or cost that is allowed by law or stated in the rental agreement.' (Utah Code Ann. § 57-22-4(8)). Whether a term that makes the tenant pay the cost the landlord incurs, with no amount or method stated, is an amount 'agreed to in the rental agreement' (Utah Code Ann. § 57-22-4(5)(b)(i)), or a cost 'allowed by law' (Utah Code Ann. § 57-22-4(8)), turns on case law not read (gaps log s4 class decision 1). Cautious course: a UT override that fixes, in the clause, an objective method for the amount (what a third party bills the landlord, or the price of parts or materials, no markup, labor charge or added fee, with a copy of the bill or receipt). Lease smoking rules: Utah Code Ann. § 57-22-5(1)(h). Drifting tobacco smoke: a landlord is exposed only where the lease provides the unit will not be subject to drifting tobacco smoke, the renter gave written notice and the landlord knowingly lets the nuisance continue (Utah Code Ann. § 78B-6a-405(2)(c)); for fumes from unlawful drug use, a landlord is exposed after a renter's written statement if it 'knowingly allows the continuation of a drug nuisance after receipt of written notice' (Utah Code Ann. § 78B-6a-405(3)(c)(ii)), whatever the lease says, so act on written complaints ('It is a defense to a drug nuisance if the defendant can prove that the defendant is lawfully entitled to the possession or use of a controlled substance.' (Utah Code Ann. § 78B-6a-405(4))); the last sentence keeps this clause from being read as that promise. These Fit Premises Act rules cover a residential rental unit, which 'means a renter's principal place of residence' (Utah Code Ann. § 57-22-2(5)) and 'does not include facilities contained in a boarding or rooming house or similar facility, mobile home lot, or recreational property rented on an occasional basis.' (Utah Code Ann. § 57-22-2(5)). Cannabis: Title 26B, Chapter 4 has no housing protection (`edu-no-cannabis-housing-protection-ut`). Companion: `smoke-drift-waiver-ut`. Read section-open 2026-11-08 from the Legislature's official Utah Code XML (corpus-UT-20261108: le.utah.gov title files, hashes verified against its manifest; history lines through the 2026 General Session; no 2026 special session met): Utah Code Ann. §§ 57-17-3, 57-22-4, 57-22-5, 78B-6a-405; whole Code and Constitution searched by battery (gaps log s1, s3).
- **effective_from:** 2026-11-08
- **last_checked:** 2026-11-08
- **choice_group:** 
- **is_default:** 
- **topic_key:** smoking-policy
- **lease_clause_basis:** CONSTRAINED_TERM: Utah Code Ann. § 57-22-4(5)(b); Utah Code Ann. § 78B-6a-405(2)(c) | SERVES_LANDLORD

##### `early-termination-ut` (Fee scaling with remaining Rent rests only on unread penalty case law; prompt item 8(a) asks for the flat-fee override.)

- **id:** early-termination-ut
- **group:** Default & Termination
- **title:** Early Termination
- **states:** UT
- **is_active:** TRUE
- **supersedes:** early-termination-ks
- **bodyText:** Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay Landlord, by the termination date, an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. If Tenant gives that notice, pays the fee and delivers possession of the property by the termination date, Tenant owes no Rent for any period after the termination date. If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by Utah law. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or other periodic tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant abandons the property as Utah law defines abandonment; Landlord will regain possession only through a court proceeding or the abandonment procedure Utah law provides. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, a Tenant's right to terminate as a victim of domestic violence under Utah Code Ann. § 57-22-5.1 on the terms that section sets, or a Tenant's rights if the property becomes unfit through no fault of Tenant.
- **rule_type:** CONDITIONAL
- **content_type:** LEASE_CLAUSE
- **verification_status:** VERIFIED
- **notes:** UT: Override of `early-termination-ks` (UT gaps pass 2026-11-08, Utah item 8(a)). Flat one-month fee instead of the greater of one month or 30% of remaining Rent: the fee is stated, so the fee rule ('in an amount greater than the amount agreed to in the rental agreement; or' (Utah Code Ann. § 57-22-4(5)(b)(i))) is met; penalty case law not read (`edu-liquidated-damages-ut`), and a fee that scales with the remaining term is the cautious-course risk. Domestic violence: a renter 'may terminate all of the renter's future obligations under a rental agreement if the renter:' (Utah Code Ann. § 57-22-5.1(4)) (same text in the version effective January 1, 2027) meets the section's conditions and pays its termination fee (`edu-dv-termination-ut`). Unfit premises: Utah Code Ann. § 57-22-6 (`edu-renter-remedies-ut`). Military: FEDERAL: 50 U.S.C. § 3955. Claude Code applies the override at sync (prompt item 8(a)). Possession: 'It is unlawful for an owner to willfully exclude a tenant from the tenant's premises in any manner except by judicial process' (Utah Code Ann. § 78B-6-814); abandonment: Utah Code Ann. § 78B-6-815. These Fit Premises Act rules cover a residential rental unit, which 'means a renter's principal place of residence' (Utah Code Ann. § 57-22-2(5)) and 'does not include facilities contained in a boarding or rooming house or similar facility, mobile home lot, or recreational property rented on an occasional basis.' (Utah Code Ann. § 57-22-2(5)). Read section-open 2026-11-08 from the Legislature's official Utah Code XML (corpus-UT-20261108: le.utah.gov title files, hashes verified against its manifest; history lines through the 2026 General Session; no 2026 special session met): Utah Code Ann. §§ 57-22-4, 57-22-5.1, 57-22-6; whole Code and Constitution searched by battery (gaps log s1, s3).
- **effective_from:** 2026-11-08
- **last_checked:** 2026-11-08
- **choice_group:** 
- **is_default:** 
- **topic_key:** early-termination
- **lease_clause_basis:** SERVES_LANDLORD

### 7. Findings for other states

- CA (seen while tagging drug-free-housing-ca for UT, slice C): the CA notes segment says "THE LAST PARAGRAPH IS NOT OPTIONAL DRAFTING: without it the clause risks being a provision that prohibits or limits ... the right to summon help" under Cal. Civ. Code § 1946.8(b), and refers to an accommodation sentence, but the row's bodyText has only two sentences (the controlled-substance covenant and the unlawful-purpose/nuisance sentence) and contains no summon-help paragraph or accommodation sentence. Either the body lost its last paragraph or the CA note describes a different version; the CA owner should reconcile them. The UT tag does not depend on the missing paragraph (Utah Code Ann. § 57-22-5.1(10) is not engaged by the two sentences present). (C_dv_classes)
- portable-cooling-device-wy (WY): the bodyText prints "[Choose one.]" and then only "[Option A — permitted with conditions.]"; there is no Option B, and the notes describe "Option A or Option B" and a "final paragraph" carving out disability modification and accommodation requests (Wyo. Stat. § 40-26-107(c)(i)-(ii)) that the body does not contain. The body appears truncated; recommend restoring Option B and the disability paragraph from the drafting source, or removing "[Choose one.]" and the notes' references. Found while checking a Utah tag (slice F, portable-cooling-device). (F_safety)
- All states using `animal-care-access-vi` (9 states including UT; independent check r1): its title reads "Animal Care in Tenant's Absence (Virgin Islands)", so a lease in any other state shows a Virgin Islands label. Proposed shared edit (rule 62): retitle it "Animal Care in Tenant's Absence". The clause text itself names no Virgin Islands law and works in Utah as written. `lock-change-ak` has the same legacy-label pattern. (M_main)

### Proposed SOP changes

- Battery scope and fetched files (slice B, 2026-11-08): the main pass saved files into /home/claude/gaps/fetched/ while helpers were running, which changed the scope-all unit set (28088 to 28110) and made Battery UTG-B-001 permanently fail replay (wear: logged 12, then 13 after the first fetch batch (FEDERAL: 42 U.S.C. § 3604) and 15 at the final replay with 28120 units). UTG-B-001 is superseded by UTG-B-002 and cited nowhere. Proposed rule: a battery whose claim is about the Utah Code and Constitution runs with scope code+const, so later fetches cannot break replay; a battery meant to reach Admin Code or federal text names scope fetched explicitly and is rerun after each fetch batch. The replay of this slice's log shows exactly this one mismatch. (B_deposits_fees)
- Trap list additions (slice B): (1) "animal fee" without a trailing word boundary matches "animal feeding" (UTG-B-026 hits in Title 17, Chapter 81); add \b after short nouns inside alternations. (2) "receipt" is mostly "receipt of a notice/payment"; a receipt-duty battery must search receipt-giving verbs ("provide a signed receipt", "entitled to a receipt"), as UTG-B-031 did, which found Utah Code Ann. § 78B-5-803 outside the landlord-tenant titles (the CA/GU receipt-miss shape again). (3) "delinquen" near subsidy words returns only juvenile delinquency and child support. (4) A role-word figure battery (statutory-caps) misses money rules phrased for issuer/holder/creditor/debtor (dishonored checks, collection fees, interest) and mobile home "resident"; run a companion with owner/resident/lessor words in Titles 57 and 78B and pick up the role-free sections by subject. (B_deposits_fees)
- Slice C (UT gaps, dv-protection-order-chapter-moved): in a recodification year, a battery on known former numbers is not enough; a mechanical scan of every section-number reference against the corpus (scripts xref_titles_76_77_78B.py, xref_by_prefix.py, xref_ut_rows.py with output xref_check_out.txt in /home/claude/gaps/slices/C_dv_classes/) found a same-session conflict the battery would have missed: Utah Code Ann. § 78B-7-1302 (enacted by Laws of Utah 2026, ch. 113) cites Utah Code Ann. § 78B-6-1107, which Laws of Utah 2026, ch. 401 replaced with Title 78B, Chapter 6a. The whole-Code scan also lists stale references outside landlord-tenant law (for example Utah Code Ann. § 77-23a-8 to Title 76, Chapter 8 numbers not in the corpus, and Utah Code Ann. § 57-13c-102 to Utah Code Ann. § 17-41-501); suggest running it once per state run and recording the output in the log. (C_dv_classes)
- Slice C: bat.py writes to /home/claude/gaps/work/battery_log.jsonl (the main pass's log) whenever UTBAT_LOG is unset. One slice C run (UTG-C-026) landed there when a chained command lost the variable; I removed that single line (verified it was the only UTG-C entry and the last line) and reran the battery into the slice log with identical counts. Suggest bat.py refuse to run for an id with a slice letter (UTG-X-) unless UTBAT_LOG points at that slice's folder. (C_dv_classes)
- Slice E battery lessons: (1) a real positive must be a unit containing BOTH limbs of a near term; two positives failed because the chosen unit used other role words (Utah Code Ann. § 78B-6-809 says plaintiff and defendant; Utah Code Ann. § 57-12-5 has no tenant word in the window); check the unit's wording before naming it. (2) A case-insensitive "section 8" limb matches citations such as "Section 80-2-1002"; use "section 8\\b" or "Section 8 (?:housing|voucher)". (3) Subsection labels sit inside the flattened text, so a word-gap pattern needs room for them (UTG-E-001). (E_habitability)
- Slice F lesson (fire-sprinkler-duty): a word-boundary-anchored number such as "\b313\b" cannot match an alphanumeric code section such as "R313", because there is no word boundary between R and 3; the first exploratory grep missed Utah's replacement of IRC R313.1 to R313.2.1 (Utah Code Ann. § 15A-3-202(30)) and a draft wrongly said no amendment named R313. The battery term "R313" (no word boundary) did hit; the error came from relying on the grep context and not reading the hit unit whole. Rule: for code-section numbers with letter prefixes search the bare token ("R313", "P2904", "R312") and read every hit unit whole before writing an absence about it. Corrected before hand-back. (F_safety)
- Slice G (UT gaps, limitation-of-actions and entity-landlord-court-representation): stale statutory cross-reference met while reading, for the main pass's list beside item 10. Utah Code Ann. § 78B-2-305(2)(b)(i) and (2)(c) (repealed and re-enacted by Laws of Utah 2026, ch. 307) give the limitation periods for unauthorized-practice actions 'described in Subsection 78B-9-103(4)' (Utah Code Ann. § 78B-2-305(2)(b)(i)) and (5), but those actions are in Utah Code Ann. § 78A-9-103(4), (5); Utah Code Ann. § 78B-9-103 is the post-conviction remedies applicability section. Utah Code Ann. § 78A-9-103(6) itself points to Utah Code Ann. § 78B-2-305, so the intended period (three years) is clear. No row rests on it; edu-limitation-of-actions-ut does not cite (2). (G_eviction_termination)
- Slice G battery lessons: (1) a length-capped class such as [^.;]{1,80}? slipped into a plain term (UTG-G-023) and was rerun as a 1,200-character near term (UTG-G-024); grep specs for "{1," or "{0," before running. (2) Real positives fail on wording the pattern lacks: "not fit for occupancy" (not "unfit"), "lessor"/"lease" (not "lessee"), "seven years after" (not "within seven years"), and a section with "holiday" but no eviction word (UTG-G-007, -015, -026). Read the positive unit's exact words before choosing it. (3) A full bat.py replay takes about two minutes per ten batteries on this corpus; replaying the new id before each save and the whole log once at the end keeps the 0-mismatch check without timeouts. (4) The fetched 24 C.F.R. § 982.310 answers several eviction topics for voucher tenancies (lease must state criminal grounds, PHA nonpayment not a ground, no owner-use termination in the initial term); slices touching termination should search scope fetched. (G_eviction_termination)
- Slice H lessons (2026-11-08): (1) assemble.py check passes a quote MISS, so a helper emit script that appends after --check can save a row with a MISS; slice H's emit.py now refuses unless assemble shows 0 errors and qc shows 0 MISS, 0 NO-CITE, 0 UNRESOLVED (one eminent-domain row was re-emitted after a MISS). (2) Two MISS shapes: a statute phrase containing a plural possessive ("90 days' written notice", "the parties' conduct") ends the single-quoted passage early; quote around it. (3) Inflection warnings recur on rent/rental/premium/font/sale/vacate/extension; writing rents?, rentals?, sales?, vacat(?:e|es|ed|ing) from the start avoids reruns. (4) A plain term with a bare number such as \b211\b hits section-number cross-references across the Code; avoid numeric plain terms. (5) A real positive must contain the exact words of both limbs: the deposit successor section has no word "deposit", the mobile home lease-contents section says "dates on which the payment of rent, fees, and service charges are due", and the Fit Premises Act remedy section says "not fit for occupancy", not "unfit". (H_lease_terms)
- Slice I: six of seventeen batteries were rerun only because a positive failed or an INFLECTION warning appeared after logging (UTG-I-012 failed positive; UTG-I-002, UTG-I-006, UTG-I-007, UTG-I-011, UTG-I-016 inflections). A dry-run that tests positives and the inflection probe without writing to the log would save reruns and keep logs short. The slice used a local script (slices/I_utilities/pretest.py, positives only, no logging); a `bat.py check SPEC.json` mode that also runs the inflection probe would cover both. Proposal only; bat.py not changed. (I_utilities)
- Corpus gap (slice J, 2026-11-08): the Utah Constitution in the index has 189 sections across Articles 0, I, II, IV-XVIII, XX and XXII-XXIV; Article III (Ordinance) is absent (sec.py --const "Article III, Section 2" returns no section; no const unit's number starts with Article III). Every battery run with scope const or code+const therefore cannot reach Article III. Rows whose absence claim could turn on it (Indian and public lands, taxation of nonresidents' land, religious toleration, public schools) should say "the Constitution (Article III indexed 2026-11-08)" until the main pass adds the article to the corpus and reruns. Slice J rows affected: `edu-tribal-land-lease-approval-ut`, `edu-foreign-ownership-ut` (its notes say so). Proposed rule: the HELD.md generator should list the Constitution articles held, not only the section count. RESOLVED by the main pass 2026-11-08: Article III is held in the corpus XML as <arttext> without <section> elements, which build_index.py skipped; the index now carries it (190 constitution units), every battery log was replayed (only UTG-J-015 changed, rerun as UTG-J-016), and the affected rows were corrected. Keep the proposed rule: the index build should count articles as well as sections. (J_general)
- Independent check (Utah gaps, 2026-11-08): the checker's brief should tell it to judge a tagged clause by its bodyText as the product shows it, never by other states' notes segments; one round 1 checker read a California notes segment as clause text and proposed withdrawing a sound tag. Also: before tagging, screen the whole clause text for any charge by script (a slice tag missed a "Landlord's reasonable cost" sentence in a clause's third paragraph). (M_main)

### Proposed topic questions

- `fire-sprinkler-duty`: Does the state amend the IRC to make residential sprinklers optional for one- and two-family dwellings and townhouses? Utah replaces IRC R313.1 to R313.2.1 with a design rule for systems 'When installed,' (Utah Code Ann. § 15A-3-202(30)), and its fire code lets a local authority require sprinklers in an IRC home 'only by ordinance and only if any of the following conditions exist:' (Utah Code Ann. § 15A-5-203(1)(a)). (F_safety)
- `private-well-testing`: Does a landlord whose own well serves enough units or people become a regulated public water system (Utah: at least 15 service connections or an average of 25 individuals daily for at least 60 days a year, Utah Code Ann. § 19-4-102(8)(a)), with monitoring and public-notice duties to the tenants it serves? (F_safety)
- `hazardous-contamination-disclosure`: Does the state's environmental covenant act require a copy of a recorded covenant to be given to 'each person in possession of the real property subject to the covenant' (Utah Code Ann. § 57-25-107(1)(c)), which reaches a tenant, even though no lease disclosure is required? (F_safety)
- `utility-landlord-account`: Does a water or sewer district statute bar the provider from suspending service at the request of a private third party who is not the customer, and bar an owner from asking for a temporary shutoff for debt collection or eviction? (Utah: Utah Code Ann. § 17B-1-901(3), special districts only; a maintenance-related temporary discontinuance is allowed.) (I_utilities)
- `ev-charging-requirements`: Does the state tax electricity sold through an EV charger, so that a landlord who charges tenants a per-kilowatt-hour, hourly or subscription fee for charging must register, collect and remit the tax and itemize it on invoices? (Utah: Utah Code Ann. §§ 59-30-101 to 59-30-103, 12.5% on retail sales by a 'charging station operator'.) (I_utilities)

# Topic gaps sync (Claude Code, 2026-11-09)

**Merge.** Base be0ba6a: 281 new rows and 28 shared rows tagged, matching the log; no other row changed. All 2,148 single-quoted Utah Code quotations in the delta and in log §4-§6 match the corpus (corpus-UT-20261108, from le.utah.gov). The statute spot-check covered five core sections, §§ 57-22-4, 57-22-6, 57-17-3, 78B-6-802 and 78B-6-811: each matches the live le.utah.gov XML sentence for sentence (only blank-line spacing in § 57-17-3's form differs). The running record's last line ("Independent check not yet run") is stale; its own check section and the log header record two rounds.

**§6 applied:**
- Overrides `keys-ut`, `parking-vehicle-rules-ut`, `smoking-policy-ut` and `hoa-compliance-ut` (Utah item 6): a landlord cost charged to the tenant has an objective method stated in the lease (Utah Code Ann. § 57-22-4(5)(b)(i), (8); class decision 1). UT is untagged from the four shared rows.
- `early-termination-ut` (item 8(a)): flat one-month fee. UT is untagged from `early-termination-ks`.
- `edu-property-manager-license-ut`: new; the license is required from 2027-01-01. It was delivered blank for is_active and dates, which were set at sync.
- Education rows:
  - 6.1 `edu-no-deposit-interest-ut`: the property manager's trust account.
  - 6.2 and 6.9 `edu-self-help-eviction-ut`: the crime-victim key refusal and the special-district shutoff rule.
  - 6.3 `edu-no-retaliation-statute-ut`: the mobile home park bar.
  - 6.4 `edu-rental-licensing-ut`: counties.
  - 6.6 `edu-alarms-ut`: carbon monoxide detection in existing Group R buildings.
  - 6.7 `edu-foreclosure-tenants-ut`: the judicial-foreclosure notice.
  - 6.8 `edu-towing-ut`: the 24-hour notice route.
  - 6.11 `edu-hoa-rental-rules-ut`: condominiums and the $200 fee.
  - 6.16 `periodic-tenancy-notice-ut`: the longer federal notice.
  - 6.17 `edu-expedited-criminal-eviction-ut`: notes only.
- 6.5 `permitted-occupants`: no override, because `renter-duties-ut` states the written-permission rule.

**Fixes at sync.**
- Twenty UT clauses carried basis citations against `check-clause-basis.py` (Utah ran on SOP 2.02); the citations were moved to notes.
- Four section pointers were corrected to the titles Utah's clauses carry: `deposit-cost-schedule-ut`, `carpet-cleaning-ut`, `ev-charging-shared-area-ut` and `unbundled-parking-ut`.
- `rules-ut` was retitled "Rules and Regulations": the bare "Rules" turned Guam's generic wording into a dangling pointer.

**Re-check of the 76 rows edited after round 2 (rule 80).** A fresh checker read them against the corpus and found 1 ERROR and 1 FIX. Claude Code confirmed both from the corpus text.
- ERROR: `edu-habitability-modifiable-ut` made the lease's notice method exclusive. Under § 57-22-6(2)(b)(v), the eviction-statute methods and the lease method are alternatives, so a landlord could have rejected a valid notice of a deficient condition.
- FIX: `edu-portfolio-thresholds-ut` now covers every § 57-21-5(2) practice that loses the exemption.
- The other 74 rows were clean.

**Decisions.** The log asked Taylor no questions. Arbitration is not offered: the Consumer Sales Practices Act's reach is case law (Taylor's 2026-11-07 rule).

**Open boundaries.** Nine rows are Not located (PARTIAL in the citations file) until the sources in the log §1 fetch queue are read. They are listed in the backlog's UT note 1. These are bounded, VERIFIED rows under rule 36, not NEEDS_REVIEW.

**§7.**
- `drug-free-housing-ca` (notes describe a paragraph its body lacks): flagged in the backlog, not fixed.
- `portable-cooling-device-wy` (truncated choice): flagged in the backlog, not fixed.
- The `animal-care-access-vi` and `lock-change-ak` title labels: flagged in the backlog, not fixed.

**Records.**
- Citations: 315 rows (281 new, 28 tags and the 6 proposed rows, with 9 PARTIAL); the 5 untagged rows are noted.
- Topic questions: 5, under existing keys.
- SOP 2.05.
- No new `{{variables}}`.

**Result.** Utah has 359 UT-only active rows and 437 visible, all VERIFIED. The state filter shows 137 UT clauses (68 before), with no same-topic pairs, and every other state's visible set is unchanged.
