# Oklahoma — lease-clause decision log (state #27)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: Okla. Stat. tit. 41 read whole from oklegislature.gov, all 95 entries (79 live sections, 16 repealed), saved and hash-matched; Okla. Stat. tit. 12, §§ 1148.1-1148.16 read whole; the section index diffed against every OK citation, each uncited section listed with a reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Oklahoma Real Estate Commission 2026 Residential Lease (01-01-2026) with its Tenancy Guidelines, Pet Addendum, Keys and Re-keying Addendum, Tenant Flood Notice and Lease Supplement, from oklahoma.gov/orec; text extracted, saved and hash-matched; mapped provision by provision) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 74 scenarios, Claude-generated on the IN §16 / MO model plus Oklahoma-specific ones) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole Oklahoma Statutes (88 title files, 47,809 sections, load proved against each file's own index) and the Oklahoma Constitution (415 sections) loaded in the built-in browser; 115 batteries, control terms 0 hits; relied-on hits read whole and saved; District Court and court-administration rules searched on oscn.net) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `OK` tag and an `OK:` note.

**Dates:** 2026-09-30 to 2026-10-01 (the built-in browser link dropped overnight; the corpus was rebuilt on 10-01 with identical counts and the affected batteries re-run with identical results). **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole code and Constitution loaded into the browser gave full-text proof of absence and cross-chapter search directly (rule 9).
**Kickoff vs SOP:** no conflict noticed. Rows use the kickoff's citation format (`Okla. Stat. tit. 41, § 115(B)`; session laws as `HB 3431 (2026)` or `2025 Okla. Sess. Laws ch. 486`; court rules named by their OSCN titles), with the full prefix on every citation in `bodyText` and `notes` (programmatic check, §8). This log abbreviates to '§ 41-115' or '41 § 115'.
**Scope:** Oklahoma state law only. Oklahoma City, Tulsa and other local ordinances (floodplain notices, towing, inspection, nuisance and crime-free programs, fire codes) are flagged, not resolved (rule 3); state law bars municipal rent control and municipal registration of real property (§ 11-14-101.1, § 11-22-110.1) and smoke-detector duties beyond the statute (§ 74-324.11a(F)). Deprioritized and named: mobile home parks, public housing authorities (e.g. § 74-2900.1, a battery hit), agricultural leases and crop liens (41 §§ 23-28), nonresidential leases (41 §§ 51-52), furniture rental (41 § 136).
**Input CSV:** `lease-clauses.csv`, **2,137 rows, 17 columns, 2,014 active (515 lease clauses, 1,499 education)**; active counts per state match the kickoff (rule 23). No OK rows existed and no row mentions Oklahoma except an unrelated KS note (rule 25). The outputs folder was empty when checked; nothing to delete (rule 8).
**Output CSV:** `lease-clauses-OK-delta.csv`, **144 rows, 17 columns, CRLF**: 51 existing rows with `OK` added to `states`, an `OK:` note appended and `last_checked` 2026-10-01, and 93 new OK rows. **OK 144 active: 69 lease clauses (51 tagged + 18 new), 75 education; all VERIFIED.** Merged with the master: 2,230 rows, 2,107 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, each file hash-matched to the browser text (`sources/registry.tsv`, 17 files):** Okla. Stat. tit. 41 whole; Okla. Stat. tit. 12, §§ 1148.1-1148.16; Okla. Stat. tit. 75, §§ 11, 12, 13, 31.2-31.4 (official publication); outside sections in `okla-stat-outside-1.txt` to `-7.txt` (smoke detectors; medical marijuana; double rent; rent control and registration bans; squatter removal; sex-offender residency; minors' housing contracts; servicemember protections; harboring; psychologically impacted property; foreign ownership of land; utility resale; firearms; towing; association flag display; statute of frauds and recording; dishonored-check fee and suits; small claims; jury waiver; fair housing; penalties and liquidated damages; consumer protection; electronic transactions; goods auto-renewal; emergency price limits; land definition and resident-alien exception; sales and lodging tax); Okla. Const. art. XXII, § 1 and art. II, § 26. **Session laws:** enrolled HB 3127 (2026), HB 3431 (2026) and SB 893 (2026), full text. **Court rules:** Rules for District Courts of Oklahoma (40 documents) and Rules for the Administration of Courts (15 documents) full-text searched on oscn.net; Rules 5 and 10 read. **Read in context only (labelled so in the rows):** battery hits named in §17. |
| Step B — tag first | **Done.** 51 existing rows tagged OK (§2.1): the shared generic clauses lawful as written, the ks-oh-ca / ks-oh / ks-ne / ks variants, and three other states' rows whose text fits Oklahoma (`holdover-ca`, `possession-delay-ca`, `tenant-forward-proceedings-ca`). 6 bases not tagged, with an OK variant or a tagged variant instead (§2.2); landscaping and snow removal moved to a separate agreement on Taylor's decision. Every single-state clause screened (§2.3). No shared text edited. |
| Step E — new OK rows | 18 lease clauses (9 optional under rule 54) and 75 education rows; 16 rows carry a CONFIRMED ABSENT search record, 13 of them pure absence rows (`edu-no-*`) (§3). |
| Instruction 24 family | `security-deposit-return-ok` (REQUIRED; written demand by the tenant; itemized statement by mail, return receipt requested, or in person; 45 days after termination, delivery of possession and written demand; the six-month reversion stated as a warning; § 41-115(B)). |
| Step D screens | All run (§19). Hits: rule 40 (§ 41-113a and § 41-116 'prominently and in writing'; § 41-118(B) conspicuous separate writing); rule 43 (`default-by-tenant-ks-ne` and `criminal-activity-ok` no-cure carve-outs); rule 48 (§ 41-118(B): `tenant-repair-agreement-ok` is a separate document); rule 49 ('reasonable costs and expenses' vs § 41-113(A)(3), case law unread); rule 50 (eight 'unless otherwise agreed' choices made on purpose); rule 52 (§ 41-113(A)(4) voids exculpation: variants used, base `pet-policy` indemnity dropped); rule 53 (base `holdover`, `possession-delay`, `default-by-tenant`, `early-termination`, `surrender-end-of-term`, `returned-payments` overridden). Constitution: art. II, § 26 (arms) limits government only; art. XXII, § 1 (alien land ownership); no cannabis provision. |
| Optional clauses (rule 54) | 9 offered (casualty termination, tenant-caused damage, criminal activity, rules and rule changes, tenant maintenance agreement as a separate document, tenant-death contact, marijuana cultivation ban, tax-credit felony-information termination, registered-offender cohabitation); 12 not offered, with reasons (§6.1). |
| Questions to Taylor (rule 76) | One asked and answered (§6.2): lawn and snow chores go in a separate agreement under § 41-118(B). |
| Proof of absence | 16 rows with a CONFIRMED ABSENT search record (battery, hit count, known-positive test); every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered or Not applicable (§18). Fourteen batteries failed or were found too narrow when their positives were run; each was rerun and recorded (§1.3). |
| Independent check | A separate agent checked all 144 rows against the saved sources only: 4 errors, 8 unsupported points and 7 imprecisions or drafting risks; all fixed or answered (§13). |
| Currency | Compilation current through the 2025 session (LSB note 'last updated November 18th, 2025'; files Last-Modified 30-31 Dec 2025; OSCN 'Current through the 2025 Legislative Session'). All 465 measures with a 2026 governor action screened by title; three reach sections relied on (HB 3127, HB 3431, SB 893), each read in full with its effective-date clause. No 2025 or 2026 special session listed. §1.2. |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes:** the Oklahoma Legislative Service Bureau's whole-title RTF files on oklegislature.gov (`/OK_Statutes/CompleteTitles/osN.rtf`), which print each section with its history line; parsed in the browser (RTF to text, split on the file's own section index). OSCN (oscn.net) hosts the same statutes with history notes. **Neither is the official publisher:** under the Uniform Electronic Legal Material Act the Secretary of State is the official publisher (Okla. Stat. tit. 75, § 31.2(3)(c), eff. Jan. 1, 2026), the original enrolled acts govern (Okla. Stat. tit. 75, § 12) and the Secretary may publish electronically through a vendor (Okla. Stat. tit. 75, § 13) (all read and saved, `okla-stat-tit75-misc.txt`). LSB was used as the reading text because it prints history lines and serves whole titles; currency was taken from history lines and the 2026 acts themselves (rule 16).
- **The shell cannot reach the Oklahoma sites (proxy 403); the built-in browser could.** Text was whitespace-normalized, hashed with SHA-256 in the browser, transcribed to `sources/` (as a JSON string, decoded in Python) and re-hashed; every file matched (`sources/registry.tsv`).
- **Constitution:** `AllOKConstitutionArticles.rtf` (Last-Modified 2022-01-04; per-article files the same date), parsed into 415 sections. The file predates any 2022-2026 amendment; no amendment touching leases is known to this pass, and none was searched for beyond this file (§7).
- **Session laws:** enrolled bills on oklegislature.gov (`/cf_pdf/2025-26 ENR/...`), extracted with pdf.js 3.11.174 (cdnjs). pdf.js drops underline and strike-through; for HB 3431 they were read from the PDF's own drawing operations (a filled line just below the text baseline is an underline, one about 3 points above it is a strike-through) and checked against the text: new words ', foreign terrorist organization ... Specially Designated National ... Control,', ', own, or lease', 'or critical minerals, as determined by the United States Geological Survey,' and 'Oklahoma'; struck words 'or' after 'title to' and 'of this state'. The alien/non-citizen words are not struck. The 2026 governor-action report (webapps.oklegislature.gov) supplied the session's enacted measures on 2026-09-30; it was unreachable from the browser on 10-01 (two attempts), which did not matter because the screen was complete.
- **Court rules:** OSCN court-rule indexes (`STOKRUCPDC`, `STOKRUCAAD`); the Supreme Court administrative-directive index returned no links (§7). OSCN later served a Turnstile challenge, which was not bypassed.
- **Real lease:** Oklahoma Real Estate Commission contract forms page (oklahoma.gov/orec), 2026 forms, text extracted and saved (`orec-2026-residential-lease.txt`, `orec-2026-addenda.txt`), hash-matched.
- **Agency rules:** none read (Oklahoma Administrative Code: Corporation Commission submetering, State Fire Marshal smoke-detector rules, Tax Commission) (rule 21).
- **Citation format:** the kickoff's; log references written 'OK log §N'.

### 1.2 Currency (rule 16)
- **Compilation:** LSB states the statutes were 'last updated November 18th, 2025'; the title files carry Last-Modified dates of 30-31 December 2025; OSCN's index says 'Current through the 2025 Legislative Session'. History lines include acts effective January 1, 2026 (2025 Okla. Sess. Laws ch. 486, the sentencing reclassification, e.g. §§ 21-446, 57-590, 57-590.1, 15-753, 15-761.1). Anomaly noted: § 52-117's history line prints 'Laws 2026, c. 486' for what is evidently 2025 c. 486 (not relied on; §10).
- **2026 Regular Session:** the governor-action report lists 465 measures with action dated 2026; all were screened by title. **Three reach sections relied on, each read in full as enrolled with its effective-date clause:** HB 3127 (amends § 63-427.8; effective November 1, 2026; subsection C changes only 'Section 420 et seq. of Title 63 of the Oklahoma Statutes' to 'this title'); HB 3431 (amends § 60-121(B) to add leasing; effective November 1, 2026; which words are new and which struck was read from the enrolled PDF's underline and strike-through marks, as described in §1.1); SB 893 (Military Installation and Critical Infrastructure Protection Act of 2026, new §§ 60-128.1 to 60-128.4 and 74-13001 to -13003; effective July 1, 2027). The compilation shows neither amendment yet, so the rows state both the current text and the dated change. The Title 41 citation report for 2026 shows 22 bills, none enacted (HB 3386, eviction mediation, died on Senate General Order). Also not enacted: HB 3389 (2026, pet fees), HB 1083 (2025, retaliation).
- **Special sessions:** the Legislature's session list shows 2024 Third and Fourth Special Sessions and none in 2025 or 2026; 2024 acts are within the compilation.
- **General revisory act:** none identified in 2026 touching sections relied on.
- **Bulk lag:** the whole-title files print 2025 acts effective November 1, 2025 and January 1, 2026; no lag against the November 2025 update was found.
- **Real-lease probe:** the OREC lease cites 'Title 41 O.S. §130.1A' for the death-contact designation; § 41-130.1(A) matches (no renumbering).

### 1.3 Corpus and method (rule 19)
- **Loaded:** 88 title files (89 links, one duplicate), sequentially, into the corpus tab, which was never navigated afterwards (other pages were read in a second tab). **47,809 sections against 47,809 index entries, 0 missing.** The splitter's first heading regex missed headings printed without a period (e.g. '§11-43-109.1  Suit…'); a relaxed regex validated against each file's index fixed it before any battery ran. Constitution: 415 sections against 415 index entries.
- **Engine:** JavaScript regular expressions over each section's normalized text, headings excluded, first match per section. Control terms: 0 hits (batteries 1, 2). Calibration: 'security deposit' 22 sections including § 41-115 (battery 3). Oklahoma's number style 'forty-five (45) days', 'one (1) year' used in positives.
- **Known positives, two kinds (legend for the battery files):** `PASS:<title>-<section>` means the pattern was run against that real section; `PASS:<quoted fragment>` means a statute-style test phrase written for this purpose, which asserts nothing about Oklahoma law (e.g. battery 54's radon sentence). True absences can only be tested the second way; every absence row cites a battery whose pattern passed at least one positive in the same step.
- **Failures, all rerun:** 9 (rent control, no word boundaries) and 11 (missed § 11-14-101.1, whose text says 'regulates the amount of rent' and whose heading alone says 'Rent control'; the synthetic positives used the wrong verb) → 18; 12 and 16 (preemption; missed 'No municipal governing body') → 17/18; 19 and 27 (dishonored checks: unbounded 'NSF' matched 'transfer'; a `[^.]` window could not cross '$25.00') → 29; 21 (lodging tax, positive failed) → 28; 40 and 44 (unbounded 'tenant' matched 'appurtenant') → 45, 46; 48 (noisy bare 'Section 8') → 51; 49, 58, 62, 94 (one word order only) → 52, 64, 63, 95; 59 (noisy) → 65; 84 (missed 'one (1) year') → 88; 83 → 89; 98 (positive chosen from the wrong section) → 101; 100 (sanction pattern failed § 41-115) → 102; 103 (missed Oklahoma's 'plain and understandable language') → 115. Battery 4 was discarded (wrong act name). Proposed SOP changes 1-3.
- **Boundary:** statutes, the Constitution and the two court-rule sets named. Administrative rules, case law, Attorney General opinions, local codes and adopted building and fire codes were not searched or read, and nothing is claimed about them.
- **Saved:** batteries 1-115 (`batteries-OK-001-018.tsv`, `-019-095.tsv`, `-096-102.tsv`, `-103-115.tsv`; each body hash-matched to the browser export), every section relied on, the real lease, the enrolled acts, the registry.

### 1.4 Section-open vs recall (rule 15)
Every row was drafted with the saved primary text open; the recall subset is empty. Sections read only in context are labelled so in the notes (battery snippets for Title 50 nuisance, the Unit Ownership Estate Act, Title 60 association hits). **Case law is not relied on anywhere:** the penalty doctrine for late fees, returned-payment fees and early-termination fees; waiver by accepting rent; the scope of § 41-113(A)(4) for indemnities; whether 'reasonable costs and expenses' is an attorney-fee promise under § 41-113(A)(3); how 'immediate termination' under § 41-132(D) is carried out; whether a residential lease is a lease of 'land' under § 60-121; whether renting to an unlawfully present person is 'harboring' under § 21-446; whether the Consumer Protection Act reaches leases; whether a landlord may bar firearms inside the tenant's unit; severability beyond § 41-113(B) — each flagged as unread.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged OK as written (51)
`acceptable-payment-methods`, `addendum-precedence`, `application-of-payments`, `appliances-included`, `assigned-parking-space`, `assistance-animal-accommodation`, `common-area-use`, `default-by-tenant-ks-ne`, `due-at-signing`, `early-termination-ks`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance`, `landlords-access`, `late-fee`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `possession-delay-ca`, `rent-payment`, `rental-application-accuracy`, `residential-use-only`, `security-deposit-use`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `storage-space-ks-oh-ca`, `surrender-end-of-term-ks-ne`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`.

Every tagged row carries an `OK:` note naming the controlling Oklahoma section and ending 'Read section-open 2026-09-30 to 2026-10-01 from oklegislature.gov (OK log §1). s5a.1: states-only change, no propagation owed.' The ones that matter:
- **`security-deposit-use`.** § 41-115(B) allows the deposit to be applied to accrued rent and damages from noncompliance with the act and the rental agreement; the clause's 'remedy a Tenant default' sits within that. § 41-115(F): no last-month use 'except as otherwise provided by the rental agreement'; the clause keeps the default.
- **`smoking-policy`.** § 63-427.8(C) lets an owner bar smoking and vaping medical marijuana on the premises and within ten feet of the entry; non-smoked products stay allowed; the clause bans smoking and vaping only. HB 3127 (2026) re-enacts (C) without substantive change.
- **`tenant-maintenance`.** Restates § 41-127 duties and assigns no specified task, so § 41-118(B)'s separate-writing rule is not triggered; its 'clean, safe, and sanitary condition' standard drops § 41-127(1)'s qualifier 'as the condition of the premises permits' (a risk noted on the row; same structure tagged in other separate-writing states).
- **`no-sublet-assign`.** § 41-10 (written assent for terms up to two years); the older § 41-11 re-entry right sits outside the act, and possession of a dwelling unit is recovered by court action (§§ 41-103(B), 41-123).
- **`landlords-access`.** § 41-128 requires at least one day's notice except in emergency or where impracticable; the clause's 24 hours equals it.
- **`late-fee`.** No statute; penalty doctrine (§§ 15-213 to 15-215; § 23-97) and the OREC lease's liquidated-damages framing noted; case law unread.
- **`electronic-signatures`, `notices`.** UETA applies only between parties who agreed to transact electronically (§ 12A-15-105(b)); termination notices follow § 41-111(E) (§ 12A-15-108(b)(2)).
- **`parking-vehicle-rules`.** Towing under § 47-954A (48 hours abandoned or without permission; Class AA wrecker; Tow Request form; joint inventory), in addition to local procedures; no rule may bar storing a firearm in a locked vehicle (§§ 21-1289.7a, 21-1290.22(B)).
- **`holdover-ca`** instead of the base: the base claims holdover damages 'in the maximum amount permitted by applicable law for each day', but Oklahoma's extra measure applies only to a willful, bad-faith holdover (§ 41-111(D): up to twice the average monthly rental, prorated daily); holdover-ca claims actual damages and its month-to-month sentence displaces the § 41-35 renewal presumption.
- **`possession-delay-ca`** instead of the base: § 41-120(A) lets the tenant terminate at once by written notice; the base's 30-day wait would limit a statutory remedy (§ 41-113(A)(1)).
- **`default-by-tenant-ks-ne`** instead of the base: the base's prevailing-party fee sentence is an agreement to pay the other party's attorney's fees, barred by § 41-113(A)(3) ('to the extent permitted' hides the conflict, rule 53); statutory fees come from § 41-105(B) and § 12-1148.9.
- **`early-termination-ks`** instead of the base: no separate 10-day cure (rule 43); DV termination 'without penalty' (§ 41-111(F)) preserved; penalty doctrine unread.
- **`surrender-end-of-term-ks-ne`** instead of the base: the base's disposal language is broader than § 41-130; the variant points to `abandoned-property-ok`.
- **The ks-oh-ca / ks-oh variants.** § 41-113(A)(4) makes exculpation, limitation or indemnification of liability for the parties' acts or omissions in operating or maintaining the premises unenforceable, so every 'Landlord is not liable' base is replaced (rule 52).
- **`assistance-animal-accommodation`.** § 41-113.2(B)-(D) (documentation, verification, purchased documentation presumed fraudulent, no landlord liability, false-claim remedies); the clause fits.
- **`keys`, `common-area-use`, `hoa-compliance`.** No Oklahoma statute limits these terms (batteries 38, 42, 67, 95); the flag statute (§ 60-858) binds associations, not landlords.

### 2.2 Not tagged — Oklahoma variant or OK row instead (6 bases, plus the variant choices and Taylor's decision)

| Base | Instead | Why the base fails in Oklahoma |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-ok` | Instruction 24; § 41-115(B): written demand, 45 days after termination, possession and demand; six-month reversion |
| `returned-payments` | `returned-payments-ok` | Ceiling-only wording points at no statutory maximum (rule 53); the § 14A-2-202.1 limit covers consumer credit sales only |
| `pet-policy` | `pet-policy-ok` | Indemnity sentence vs § 41-113(A)(4); entry-and-removal sentence vs § 41-128(D); a refundable pet deposit is a 'deposit' (§ 41-102(2)) |
| `holdover` | `holdover-ca` (tagged) | 'Maximum permitted … for each day' vs § 41-111(D)'s willful-holdover measure (rule 53) |
| `possession-delay` | `possession-delay-ca` (tagged) | 30-day wait vs § 41-120(A) |
| `default-by-tenant` | `default-by-tenant-ks-ne` (tagged) | Prevailing-party fee promise vs § 41-113(A)(3) |
| `early-termination` | `early-termination-ks` (tagged) | Separate 10-day cure (rule 43) |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) + `abandoned-property-ok` | Disposal broader than § 41-130 |
| `tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided` | the ks-oh-ca / ks-oh variants (tagged) | 'Not liable' sentences; § 41-113(A)(4); rule 52 |
| `landscaping-irrigation`, `snow-removal` | `tenant-repair-agreement-ok` (separate document) + `edu-tenant-maintenance-agreement-ok` | **Taylor, 2026-09-30:** § 41-118(B) requires 'a conspicuous writing independent of the rental agreement' for specified tenant tasks (§6.2) |

**Generic-coverage check (programmatic):** every generic lease clause is tagged OK or superseded by an OK row, except these, each deliberate: `landscaping-irrigation` and `snow-removal` (Taylor), `ev-charging-shared-area-co` and `ev-charging-end-of-tenancy-co` (no Oklahoma EV statute, battery 68), `extended-absence-notice-ks` (no absence statute, battery 39), and `late-fee-ne`, `surrender-end-of-term-mn-nd`, `acceptable-payment-methods-nj` (the base or another variant is tagged and fits Oklahoma; the mn-nd text points to a section name the OK lease does not use).

### 2.3 Other states' specific rows screened, not tagged
All 444 active single-state lease clauses were listed by `topic_key` and every plausible analogue read in full (`holdover-ca`, `possession-delay-ca`, `tenant-forward-proceedings-ca` fit as written; the rest name their own state's statute). What OK took instead:
- **Deposits.** `security-deposit-return-mo` / `-in` led to `security-deposit-return-ok`. Nonrefundable-deposit notices (WY, AZ, UT), deposit cost schedules and carpet-cleaning charges (IL, MO), fee-in-lieu and damage insurance (FL, VA), deposit-surrender notice (TX) and expedited disposition (VA): no Oklahoma basis.
- **Opt-in rows.** `casualty-termination-mo` → `casualty-termination-ok`; `tenant-caused-damage-tn` → `tenant-caused-damage-ok`; `criminal-activity-mo` / `-in` → `criminal-activity-ok` (tied to § 41-132(D)); `rules-amendment-in` → `rules-ok` (§ 41-126); `tenant-repair-agreement-tn` / `-al` → `tenant-repair-agreement-ok`; `emergency-contact-va`, `deceased-tenant-contact-tx`, `tenant-representative-in` → `tenant-death-contact-ok` (§ 41-130.1(A)); `cannabis-cultivation-mo` → `cannabis-cultivation-ok`; `sex-offender-occupancy-oh` → `sex-offender-cohabitation-ok` (§ 57-590.1). Not offered: `holdover-rate-*`, `homestead-waiver-va` / `exemption-waiver-al`, `landlord-lien-tx` / `household-goods-lien-tn`, `nonpayment-notice-waiver-tn`, `notice-to-quit-waiver-pa`, `lockout-rent-delinquency-tx`, `notice-service-fee-*`, `collection-fee-*`, `unpaid-*-interest-*`, `crime-free-addendum-az`, `drug-free-housing-addendum-il`, `smoke-drift-waiver-ut`, `dv-termination-fee-mo`, `firearm-carry-rules-tn` (§6.1).
- **Disclosures.** Owner-identity rows → `landlord-disclosure-ok` (§ 41-116); `flood-disclosure-*` → `flood-disclosure-ok` (§ 41-113a); `meth-disclosure-*` → `meth-disclosure-ok` (§ 41-118(C)); `smoke-detectors-ks` / `-id` → `smoke-detector-ok` (§ 74-324.11a(C)). Military-zone, radon, mold, bed-bug, lead-safe, window-guard, pool and submetering disclosures: no Oklahoma duty (absence rows or §18.2).
- **Other.** `periodic-tenancy-notice-mo` / `-in` → `periodic-tenancy-notice-ok`; `abandoned-property-mo` / `-in` → `abandoned-property-ok`; `electronic-notice-*` not copied (UETA gives no substitute for § 41-111(E) service; `edu-notice-service-ok`); `move-in-inventory-*` not copied (no statute, battery 34).

## 3. New OK rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type`, `content_type`, `lease_clause_basis` or any field other than `states`, `notes` and `last_checked` changed (programmatic check, §8).

### 3.2 New OK lease clauses (18)
| id | rule_type | basis | controlling citation | supersedes |
|---|---|---|---|---|
| `security-deposit-return-ok` | REQUIRED | SERVES_LANDLORD | Okla. Stat. tit. 41, § 115(B) | `security-deposit-return` |
| `landlord-disclosure-ok` | REQUIRED | REQUIRED_DISCLOSURE: Okla. Stat. tit. 41, § 116(A) | Okla. Stat. tit. 41, § 116(A) |  |
| `flood-disclosure-ok` | CONDITIONAL | REQUIRED_DISCLOSURE: Okla. Stat. tit. 41, § 113a(A) | Okla. Stat. tit. 41, § 113a(A) |  |
| `meth-disclosure-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 118(C) |  |
| `abandoned-property-ok` | RECOMMENDED | SERVES_LANDLORD | Okla. Stat. tit. 41, § 130(A) |  |
| `tenant-death-contact-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 130.1(A) |  |
| `periodic-tenancy-notice-ok` | RECOMMENDED | SERVES_LANDLORD | Okla. Stat. tit. 41, § 111(A) |  |
| `returned-payments-ok` | RECOMMENDED | SERVES_LANDLORD | Okla. Stat. tit. 14A, § 2-202.1 | `returned-payments` |
| `pet-policy-ok` | RECOMMENDED | SERVES_LANDLORD | Okla. Stat. tit. 41, § 113(A)(4) | `pet-policy` |
| `smoke-detector-ok` | RECOMMENDED | SERVES_LANDLORD | Okla. Stat. tit. 74, § 324.11a(C) |  |
| `casualty-termination-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 122(A) |  |
| `tenant-caused-damage-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 122(A) |  |
| `criminal-activity-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 127(8) |  |
| `rules-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 126(A) |  |
| `tenant-repair-agreement-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 118(B) |  |
| `cannabis-cultivation-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 63, § 427.12(A) |  |
| `lihtc-felony-screening-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 41, § 201(A) |  |
| `sex-offender-cohabitation-ok` | CONDITIONAL | SERVES_LANDLORD | Okla. Stat. tit. 57, § 590.1(A)(1) |  |

### 3.3 New OK education rows (75)
| id | topic_key | rule_type | controlling citation, or absence basis |
|---|---|---|---|
| `edu-tenant-maintenance-agreement-ok` | landscaping-irrigation | RECOMMENDED | Okla. Stat. tit. 41, § 118(A) |
| `edu-security-deposit-rules-ok` | security-deposit-penalty | REQUIRED | Okla. Stat. tit. 41, § 115(A) |
| `edu-no-deposit-cap-ok` | security-deposit-cap | RECOMMENDED | CONFIRMED ABSENT (battery 32) |
| `edu-no-deposit-interest-ok` | security-deposit-interest | RECOMMENDED | Okla. Stat. tit. 41, § 115(A) |
| `edu-deposit-holding-ok` | security-deposit-holding | REQUIRED | Okla. Stat. tit. 41, § 115(A) |
| `edu-deposit-last-month-ok` | deposit-last-month-rent | RECOMMENDED | Okla. Stat. tit. 41, § 115(F) |
| `edu-deposit-on-sale-ok` | security-deposit-on-sale | REQUIRED | Okla. Stat. tit. 41, § 115(C) |
| `edu-pet-deposit-ok` | pet-fees | RECOMMENDED | Okla. Stat. tit. 41, § 102(2) |
| `edu-deposit-unclaimed-ok` | deposit-escheat | RECOMMENDED | Okla. Stat. tit. 41, § 115(B) |
| `edu-no-move-in-inspection-rule-ok` | condition-inspection | RECOMMENDED | CONFIRMED ABSENT (battery 34) |
| `edu-fees-as-rent-ok` | fees-as-rent | RECOMMENDED | Okla. Stat. tit. 41, § 102(11) |
| `edu-rent-payment-default-ok` | rent-payment | RECOMMENDED | Okla. Stat. tit. 41, § 109(A) |
| `edu-retaliation-ok` | retaliation | RECOMMENDED | Okla. Stat. tit. 41, § 113.3 |
| `edu-rent-control-ok` | rent-control | RECOMMENDED | Okla. Stat. tit. 11, § 14-101.1 |
| `edu-landlord-duties-ok` | landlord-maintenance | REQUIRED | Okla. Stat. tit. 41, § 118(A) |
| `edu-tenant-repair-remedies-ok` | tenant-repair-remedies | RECOMMENDED | Okla. Stat. tit. 41, § 121(A) |
| `edu-entry-ok` | landlord-entry | REQUIRED | Okla. Stat. tit. 41, § 128(A) |
| `edu-possession-delivery-ok` | possession-delay | REQUIRED | Okla. Stat. tit. 41, §§ 117(A) |
| `edu-nonpayment-notice-ok` | nonpayment-notice | REQUIRED | Okla. Stat. tit. 41, § 131(A) |
| `edu-noncompliance-notice-ok` | cure-and-eviction-grounds | REQUIRED | Okla. Stat. tit. 41, § 132(A) |
| `edu-landlord-self-cure-ok` | landlord-self-cure | RECOMMENDED | Okla. Stat. tit. 41, § 132(A) |
| `edu-self-help-eviction-ok` | self-help-eviction | PROHIBITED | Okla. Stat. tit. 41, § 123 |
| `edu-eviction-process-ok` | eviction-process | RECOMMENDED | Okla. Stat. tit. 12, §§ 1148.1-1148.16 |
| `edu-post-eviction-property-ok` | post-eviction-property | RECOMMENDED | Okla. Stat. tit. 41, § 130(A) |
| `edu-holdover-ok` | holdover | RECOMMENDED | Okla. Stat. tit. 41, § 111(D) |
| `edu-dv-protections-ok` | dv-lease-termination | PROHIBITED | Okla. Stat. tit. 41, § 113.3 |
| `edu-unauthorized-occupant-ok` | unauthorized-occupant-removal | RECOMMENDED | Okla. Stat. tit. 41, § 111(G) |
| `edu-abandonment-mitigation-ok` | abandonment-and-mitigation | RECOMMENDED | Okla. Stat. tit. 41, §§ 105(A) |
| `edu-casualty-ok` | casualty-termination | RECOMMENDED | Okla. Stat. tit. 41, § 122(A) |
| `edu-tenant-caused-damage-ok` | tenant-caused-damage | RECOMMENDED | Okla. Stat. tit. 41, §§ 127(5) |
| `edu-tenant-duties-ok` | tenant-statutory-duties | RECOMMENDED | Okla. Stat. tit. 41, §§ 127 |
| `edu-tenant-death-ok` | tenant-death | RECOMMENDED | Okla. Stat. tit. 41, § 130.1 |
| `edu-landlord-lien-ok` | landlord-lien | RECOMMENDED | Okla. Stat. tit. 41, §§ 133 |
| `edu-prohibited-lease-terms-ok` | prohibited-lease-terms | PROHIBITED | Okla. Stat. tit. 41, §§ 113(A) |
| `edu-attorney-fees-ok` | attorney-fees | RECOMMENDED | Okla. Stat. tit. 41, §§ 105(B) |
| `edu-scope-ok` | scope | RECOMMENDED | Okla. Stat. tit. 41, §§ 103 |
| `edu-occupancy-ok` | permitted-occupants | RECOMMENDED | Okla. Stat. tit. 41, § 117(B) |
| `edu-sale-or-management-change-ok` | sale-or-management-change | RECOMMENDED | Okla. Stat. tit. 41, §§ 119(A) |
| `edu-emergency-assistance-ok` | emergency-assistance-right | PROHIBITED | Okla. Stat. tit. 41, § 113(A)(6) |
| `edu-notice-service-ok` | notice-delivery-methods | RECOMMENDED | Okla. Stat. tit. 41, §§ 111(E) |
| `edu-fair-housing-ok` | fair-housing | PROHIBITED | Okla. Stat. tit. 25, § 1451(A)(6) |
| `edu-source-of-income-ok` | source-of-income | RECOMMENDED | CONFIRMED ABSENT (battery 48 and 51) |
| `edu-assistance-animals-ok` | service-animal-misrepresentation | PROHIBITED | Okla. Stat. tit. 41, § 113.2(A) |
| `edu-immigration-status-ok` | immigration-status | RECOMMENDED | Okla. Stat. tit. 21, § 446(B) |
| `edu-foreign-ownership-ok` | foreign-ownership | RECOMMENDED | Okla. Const. art. XXII, § 1 |
| `edu-sex-offender-residency-ok` | sex-offender-occupancy | RECOMMENDED | Okla. Stat. tit. 57, § 590.1(A)(1) |
| `edu-tenant-screening-ok` | tenant-screening | RECOMMENDED | Okla. Stat. tit. 41, § 201(A) |
| `edu-no-application-fee-rule-ok` | application-fees | RECOMMENDED | CONFIRMED ABSENT (battery 37) |
| `edu-medical-marijuana-ok` | cannabis | PROHIBITED | Okla. Stat. tit. 63, § 425(A) |
| `edu-firearms-ok` | firearms | RECOMMENDED | Okla. Stat. tit. 21, § 1289.7a(A) |
| `edu-towing-ok` | towing | RECOMMENDED | Okla. Stat. tit. 47, § 954A(A) |
| `edu-servicemember-rights-ok` | servicemember-rights | RECOMMENDED | Okla. Stat. tit. 44, § 208.1 |
| `edu-stigmatized-property-ok` | stigmatized-property | RECOMMENDED | Okla. Stat. tit. 59, § 858-513(A) |
| `edu-no-mold-disclosure-ok` | mold-disclosure | RECOMMENDED | CONFIRMED ABSENT (battery 55) |
| `edu-no-radon-disclosure-ok` | radon-disclosure | RECOMMENDED | CONFIRMED ABSENT (battery 54) |
| `edu-no-bed-bug-rule-ok` | bed-bug-disclosure | RECOMMENDED | CONFIRMED ABSENT (battery 56) |
| `edu-no-rent-receipt-rule-ok` | rent-receipts | RECOMMENDED | CONFIRMED ABSENT (battery 8 and 15) |
| `edu-no-eviction-sealing-ok` | eviction-record-sealing | RECOMMENDED | CONFIRMED ABSENT (battery 73) |
| `edu-for-cause-eviction-ok` | for-cause-eviction | RECOMMENDED | CONFIRMED ABSENT (Title 41 read whole) |
| `edu-waiver-by-acceptance-ok` | waiver-by-acceptance | RECOMMENDED | Okla. Stat. tit. 41, § 35 |
| `edu-no-foreclosure-tenant-rule-ok` | foreclosure | RECOMMENDED | CONFIRMED ABSENT (battery 74) |
| `edu-no-nuisance-eviction-rule-ok` | nuisance | RECOMMENDED | Okla. Stat. tit. 41, § 132(D) |
| `edu-penalties-liquidated-damages-ok` | liquidated-damages | RECOMMENDED | Okla. Stat. tit. 15, §§ 213 |
| `edu-consumer-protection-ok` | consumer-protection-act | RECOMMENDED | Okla. Stat. tit. 15, § 752(2) |
| `edu-electronic-records-ok` | electronic-signatures | RECOMMENDED | Okla. Stat. tit. 12A, §§ 15-103 |
| `edu-dishonored-check-remedies-ok` | returned-payments | RECOMMENDED | Okla. Stat. tit. 12, § 937 |
| `edu-statute-of-frauds-ok` | statute-of-frauds-lease-term | RECOMMENDED | Okla. Stat. tit. 15, § 136(4) |
| `edu-minor-tenants-ok` | minor-tenant-filing | RECOMMENDED | Okla. Stat. tit. 10A, § 1-9-125(A) |
| `edu-rent-tax-ok` | rent-tax | RECOMMENDED | Okla. Stat. tit. 68, § 1354(A)(7) |
| `edu-rent-increases-ok` | rent-increase-notice | RECOMMENDED | CONFIRMED ABSENT (battery 26) |
| `edu-utility-resale-ok` | utility-submetering-disclosure | RECOMMENDED | Okla. Stat. tit. 17, § 161.1(A) |
| `edu-no-ev-charging-rule-ok` | ev-charging | RECOMMENDED | CONFIRMED ABSENT (battery 68) |
| `edu-no-lease-copy-rule-ok` | lease-copy | RECOMMENDED | CONFIRMED ABSENT (battery 92) |
| `edu-no-condo-conversion-rule-ok` | conversion-notice | RECOMMENDED | CONFIRMED ABSENT (battery 75) |
| `edu-no-display-rights-rule-ok` | tenant-display-rights | RECOMMENDED | CONFIRMED ABSENT (battery 67) |

## 4. Layout and placement (rule 40)

**Formatting batteries (96-102, run before delivery; the drafted rows were re-screened against the hits):** 'conspicuous', 'prominent(ly)', bold, underline, capital letters, type or point size, font, separate or independent writing, 'substantially the following form', 'as follows:', 'following form', near lease, tenant, landlord, lessee or rental-agreement terms, in Title 41, Title 12 §§ 1148.x and the whole code; each pattern passed a positive (98 and 100 were rerun as 101 and 102). **Three residential form rules, all in Title 41:** § 41-113a ('prominently and in writing as part of any written rental agreements'), § 41-116(A) ('As a part of any rental agreement the lessor shall prominently and in writing identify …') and § 41-118(B) ('a conspicuous writing independent of the rental agreement'). The only statutory form in Title 41 or the eviction sections is the writ of execution (§ 12-1148.10), a court form. No first-page, first-clause, capitals, type-size or initialing rule for a lease term. **No competing-placement question for Taylor (rule 40).**

| Rule | Requirement | Where it lives |
|---|---|---|
| § 41-116(A) | Person to accept service and notices, 'prominently and in writing' as part of the rental agreement; manager and owner (or agent) disclosed in writing at or before commencement, kept current | `landlord-disclosure-ok` (REQUIRED; builder: capitalized heading, near the top) |
| § 41-113a(A) | Known flooding within five years, 'prominently and in writing' as part of the written rental agreement; damages for omission | `flood-disclosure-ok` (CONDITIONAL; builder: capitalized heading; landlord yes/no input) |
| § 41-118(C) | Known meth manufacture disclosed to a prospective tenant before commencement (no form or writing rule; assessment exception) | `meth-disclosure-ok` (CONDITIONAL; builder: shown before signing) |
| § 41-118(B) | Tenant's specified repairs or tasks only by a conspicuous writing independent of the rental agreement | `tenant-repair-agreement-ok` (separate document, not an addendum) |
| § 41-130.1(A) | Death-contact statement 'on the landlord's written request' | `tenant-death-contact-ok` (CONDITIONAL; in the lease, which is a written request answered at signing) |
| § 74-324.11a(C) | Lessor explains smoke-detector testing | `smoke-detector-ok` (acknowledgment) |
| § 41-115(B) | Itemized statement of deductions by mail, return receipt requested, or in person | `security-deposit-return-ok` |
| § 41-111(E) | Service of termination notices (personal; family member over 12; posting plus certified mail) | `periodic-tenancy-notice-ok`, `notices` (tagged), `edu-notice-service-ok` |
| 40 CFR 745.113 | Federal lead warning statement | `lead-based-paint` (tagged) |

**Omission sanctions that forfeit money (battery 102):**
- Deposit rules not followed, or prepaid rent not returned: the tenant recovers the deposit and prepaid rent (§ 41-115(E)); misappropriating a deposit is a crime (§ 41-115(A)).
- Flooding not disclosed: the tenant recovers personal-property flood damages (§ 41-113a(A)).
- Disclosure under § 41-116 not made: the person who failed becomes the landlord's agent for service and for the landlord's obligations (§ 41-116(B)).
- Wrongful removal or exclusion: possession or termination, plus not more than twice the average monthly rental or twice actual damages, whichever is greater (§ 41-123); willful bad-faith retention of possession against an incoming tenant: up to twice the monthly rent prorated daily for each month (§ 41-120(B)).
- Abandoned-property procedure violated deliberately or negligently: actual damages (§ 41-130(E)); tenant-death procedure knowingly violated: actual damages to the estate (§ 41-130.1(F)).
- Utility resale over 10%: treble damages (§ 17-161.1(C)).
- (Tenant side) knowingly false assistance-animal claim: costs, fees and up to $1,000 (§ 41-113.2(D)); smoke-detector tampering: misdemeanor (§ 74-324.11a(E)).

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged OK.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| Landlord termination after a casualty | § 41-122 gives the tenant, not the landlord, a termination right; nothing bars a landlord right; tenant-fault exception in (A) | **Offered** (`casualty-termination-ok`, CONDITIONAL); tenant's statutory rights kept (§ 41-113(A)(1)). Decided by Claude |
| Tenant-caused damage (always asked) | Each abatement or exit provision has its own tenant-fault exception: casualty § 41-122(A); repair, essential services and habitability § 41-121(E); FED cure § 12-1148.10B (rests on § 41-121(C)); tenant duty § 41-127(5); mitigation §§ 41-105(A), 41-129(B) | **Offered** (`tenant-caused-damage-ok`, CONDITIONAL; no abatement while repaired, actual damages including lost rent if the lease ends) with `edu-tenant-caused-damage-ok`. A no-abatement term waives nothing because no statute gives abatement for tenant-caused damage. Decided by Claude |
| Criminal-activity clause | § 41-132(D) ('shall be grounds for immediate termination'); § 41-127(8); victim protection § 41-113.3 | **Offered** (`criminal-activity-ok`, CONDITIONAL), in the statute's words, with a victim carve-out and a no-cure sentence reaching every other provision; how 'immediate termination' is carried out is case law, unread. Decided by Claude |
| Rules adopted and changed during the term | § 41-126(A)-(B) (rules 'from time to time', six conditions; a substantial modification needs written consent) | **Offered** (`rules-ok`, CONDITIONAL), stating the statute's conditions; model `rules-amendment-in`, the kind Taylor approved for IN. Decided by Claude |
| Tenant performs specified repairs or chores | § 41-118(B) (conspicuous writing independent of the rental agreement; not limited by dwelling type) | **Offered — Taylor, 2026-09-30** (`tenant-repair-agreement-ok`, CONDITIONAL, a separate document) with `edu-tenant-maintenance-agreement-ok`; `landscaping-irrigation` and `snow-removal` not tagged |
| Tenant-death contact named in the lease | § 41-130.1(A) (on written request the tenant names a contact and signs an authorization), (C) procedure, (D) other agreed procedures | **Offered** (`tenant-death-contact-ok`, CONDITIONAL), following (C); model `emergency-contact-va` / `tenant-representative-in`; the OREC lease has the same paragraph. Decided by Claude |
| Ban on marijuana cultivation | § 63-427.12(A) (a patient may grow on rented property only with the owner's written permission), (C) hazardous extraction banned; § 63-425(A) (no penalty for patient status) | **Offered** (`cannabis-cultivation-ok`, CONDITIONAL); restricts conduct, not status; OREC lease has the same ban. Decided by Claude |
| Tax-credit property: termination for false felony-conviction information | § 41-201(A)-(B) ('the right to impose conditions in any lease agreement'; listed offense types; the lease may add others) | **Offered** (`lihtc-felony-screening-ok`, CONDITIONAL, tax-credit properties only), limited to the incomplete-or-false-information trigger; federal program rules unread. Decided by Claude |
| Registered offenders living together | § 57-590.1(A), (E)-(F) (two registrants may not share an individual dwelling except spouses and blood relatives; knowingly leasing where they do is a crime); § 25-1452(C) (no other protected classes) | **Offered** (`sex-offender-cohabitation-ok`, CONDITIONAL), restating the prohibition as a tenant duty; precedent kind `sex-offender-occupancy-oh`; federal criminal-records guidance unread. Decided by Claude |
| Stipulated holdover rate | § 41-111(D) gives an extra measure only for a willful, bad-faith holdover; § 23-69 doubles rent where the tenant gave notice and stays; otherwise actual damages | **Not offered:** a fixed daily rate is a stipulated damages amount, valid only where actual damage is 'impracticable or extremely difficult to fix' (§ 15-215(A); penalties void, §§ 15-213, 15-214); holdover loss (rental value) is readily fixed, so the clause likely fails; recorded in `edu-holdover-ok` and `edu-penalties-liquidated-damages-ok`. Decided by Claude |
| Shortened or waived nonpayment notice | § 41-131 (five days after written demand); § 41-113(A)(1) bars waiving rights under the act | **Barred; not offered** (`edu-nonpayment-notice-ok`) |
| Contractual lien on tenant property | § 41-113(A)(5) bars liens except as the act allows; statutory lien §§ 41-133, 41-134 | **Barred; not offered** (`edu-landlord-lien-ok`) |
| Attorney-fee clause | § 41-113(A)(3); statutory prevailing-party fees § 41-105(B), § 12-1148.9 | **Barred; not offered** (`edu-attorney-fees-ok`) |
| Last month's rent paid from the deposit | § 41-115(F) ('Except as otherwise provided by the rental agreement') | **Not offered as a clause:** `security-deposit-use` keeps the statutory default (no application); `edu-deposit-last-month-ok` explains the option. Decided by Claude |
| Waiver of the jury | § 12-591 (waiver in contract actions by consent at trial, written consent filed with the clerk, or oral consent in court); possession is tried without a jury anyway (§ 12-1148.7) | **Not offered:** a pre-dispute lease waiver is not one of the listed methods; case law unread. Decided by Claude |
| Waiver of exemptions or homestead | No statute authorizes one (batteries 83, 89); § 41-113(A)(1) | **Not offered** |
| Interest on unpaid amounts at a contract rate | § 15-266 (6% legal rate absent contract; parties may agree to 'any rate as may be authorized by law') | **Not offered:** the rate limits that § 15-266 incorporates (Consumer Credit Code) were not read. Decided by Claude |
| Notice-service or collection fee | No statute; penalty doctrine (§§ 15-213 to 15-215) | **Not offered:** no statutory basis; case law unread. Decided by Claude |
| Firearms rules in the unit | §§ 21-1289.7a, 21-1290.22 (locked-vehicle storage protected; owners may otherwise control weapons on property they own or control) | **Not offered:** whether an owner's control reaches the tenant's own home is unresolved (`edu-firearms-ok`). Decided by Claude |
| DV early-termination fee | § 41-111(F) (termination 'without penalty') | **Barred; not offered** |
| Lockout for nonpayment | § 41-123 | **Barred; not offered** (`edu-self-help-eviction-ok`) |

### 6.2 Questions asked of Taylor (rule 76)
1. **2026-09-30, about 23:10 MT.** Plain-sentence opener: 'Oklahoma requires any agreement that the tenant will do specific repairs or chores, like mowing or snow removal, to be a conspicuous writing separate from the lease (§ 41-118(B)).' Question: tag the shared `landscaping-irrigation` and `snow-removal` clauses as written, tag them for single-family homes only, or move the chores into a separate agreement? Recommended: separate agreement (the statute is not limited by dwelling type; a lease section cannot be the independent writing, rule 48). **Taylor: 'Separate agreement (Recommended)'.** Result: neither shared clause tagged; `tenant-repair-agreement-ok` (separate document, optional) and `edu-tenant-maintenance-agreement-ok` (topic `landscaping-irrigation`). The OREC forms do the same thing: their chores sit in a separately signed 'Tenancy Guidelines' document (§15), though the OREC lease itself also has a landscaping paragraph.

No other question was needed: every other call in §6.1 and §6.3 was made with the statute open and is recorded with its reasoning.

### 6.3 Other drafting decisions made by Claude (recorded, not asked)
- **The deposit-return clause warns of the six-month reversion** (§ 41-115(B)) because the reversion is the landlord-serving reason the clause exists; the statute does not require the warning.
- **A refundable pet deposit is a deposit** held in escrow and returned under § 41-115 (§ 41-102(2)); a nonrefundable pet fee or pet rent is 'rent' (§ 41-102(11)).
- **Returned-payment fee is a hand-filled bracket**, not a builder figure, because no statute caps it and the penalty doctrine is unread (rule 55: the landlord's own figure).
- **The meth disclosure is SERVES_LANDLORD, not REQUIRED_DISCLOSURE:** § 41-118(C) requires a disclosure but not a writing or the lease as its vehicle.
- **`edu-tenant-maintenance-agreement-ok` uses topic `landscaping-irrigation`** so the cross-state check shows why Oklahoma has no tagged landscaping clause.
- **`edu-foreign-ownership-ok` states the November 1, 2026 leasing ban and the July 1, 2027 military-proximity ban with their dates and the open 'lease of land' question**, and recommends no citizenship screening (fair-housing risk). No clause offered.
- **New topic key `liquidated-damages`** (rule 58): no existing key covers the general contract-penalty doctrine that governs late, early-termination and other fixed fees.
- **`edu-rent-increases-ok` carries the emergency 10% limit** (§ 15-777.4), found by battery 26, because it limits what a landlord may charge a new or renewing tenant during and after a declared emergency.

## 7. Open items (none blocking)

| Item | Boundary / what would close it |
|---|---|
| Case law | Penalty doctrine for late, returned-payment and early-termination fees; waiver by accepting rent; scope of § 41-113(A)(4) for indemnities; whether 'reasonable costs and expenses' is a fee promise under § 41-113(A)(3); procedure for 'immediate termination' (§ 41-132(D)); severability beyond § 41-113(B); 'lease … land' under § 60-121; 'harboring' under § 21-446; Consumer Protection Act and leases; firearms inside the unit. None read. |
| Future-dated law (legal watch) | HB 3127 and HB 3431 take effect November 1, 2026; SB 893 on July 1, 2027 (its whistleblower provision 180 days later). The compilation will need re-reading once the Secretary of State and LSB publish them. |
| Constitution currency | The LSB constitution file is dated 2022-01-04; later amendments, if any, were not searched (no lease-relevant amendment known). |
| Supreme Court administrative directives | The OSCN directive index returned no links on 2026-10-01 and OSCN later presented a Turnstile challenge; eviction-record sealing therefore rests on statutes and the two court-rule sets (`edu-no-eviction-sealing-ok`). |
| Not read beyond context | Okla. Stat. tit. 42, § 91 (lien enforcement, cited by § 41-134); Okla. Stat. tit. 60, §§ 651 et seq. (Uniform Unclaimed Property Act) beyond battery snippets; Title 50 nuisance (§§ 50-5, 50-16 snippets); Unit Ownership Estate Act hits (§§ 60-503, 520, 524); § 63-420 (patient possession limits); § 68-2357.403 (state tax credits, named in § 41-201); § 74-2900.1 (state housing agencies and federal cooperation; public housing out of scope); Consumer Credit Code rate limits (for § 15-266). |
| Administrative rules (rule 21) | Corporation Commission (submetering, towing rates), State Fire Marshal (smoke detectors under § 74-324.11a(G)), Tax Commission (lodging), Department of Public Safety (tow form). Not read. |
| Federal (rule 21) | SCRA (50 U.S.C. §§ 3951, 3955); PTFA; Fair Housing Act and HUD criminal-records guidance; FCRA; lead (42 U.S.C. § 4852d, 40 CFR 745.113); OTARD (47 C.F.R. § 1.4000); LIHTC program rules. Cited, not read. |
| Local ordinances | Oklahoma City, Tulsa and others (Tulsa Regulatory Floodplain notice in the OREC flood form; towing; inspection; nuisance and crime-free programs; fire codes): flagged, not resolved (rule 3). |
| Place-based facts | Whether a property is within ten miles of a military installation, military operating area or critical infrastructure (SB 893, from July 1, 2027); flood history (landlord input). Data, not law. |

## 8. Integrity checks on the delta
Run by script (`work/build.py`, `work/check.py`) on the final delta; output summarised:
- header identical to the master: True | 17 columns | 144 records + header, every line CRLF (145 CRLF), bare LF 0
- duplicate ids in delta: none | new ids colliding with the master: none | every new id ends `-ok`
- tagged rows with any change other than `states`, `notes` (appended, original text kept as prefix) and `last_checked`: none
- other states' active counts after merge: unchanged | merged 2,230 rows, 2,107 active | OK active 144 (LC 69, EDU 75)
- blank or non-VERIFIED status: none | rule types all valid | `is_active` TRUE on every row
- LC missing basis: none | EDU with basis: none | new notes start 'OK: ': all | `effective_from` and `last_checked` 2026-10-01 on all new rows
- topic keys: all in the reference except the new `liquidated-damages`
- supersedes: `security-deposit-return`, `returned-payments`, `pet-policy` (all exist)
- generic clauses neither tagged nor superseded: the deliberate ones in §2.2
- variables used in new rows: `pet_deposit`, `pet_rent_amount` (kickoff list) | new: none
- citation format: no bare '§' in bodyText or OK notes except log pointers, federal (U.S.C., C.F.R.) and constitutional cites; no 'O.S.'; no doubled prefixes; session laws written 'HB 3431 (2026)' or '2025 Okla. Sess. Laws ch. 486' (an earlier 'Laws 2024, c. 110' style was converted by script). A prefix-expansion pass once attached a bare cite to the wrong title (a Title 15 section after a Title 41 cite); every expansion was listed and reviewed by hand and eight mis-scoped cites were rewritten explicitly before the final build.
- id pointers in OK notes (`…-ok`): all resolve | 'OK log §N' pointers used: §§1, 1.2, 1.3, 2, 4, 6, 6.2, 7, 15, 17, each matching this log
- **Citation existence:** all 124 Oklahoma title-section pairs and ranges cited in OK text exist in the loaded corpus (checked in the browser; ranges resolved to their endpoints), except § 60-128.3, cited deliberately as the section SB 893 creates from July 1, 2027. § 12-1148.8 is cited as repealed.

## 9. Propagation notes (rule 62)
None. No shared row's text, rule type, content type or basis changed; every change to an existing row is the `OK` tag, an appended `OK:` note and `last_checked` (programmatic check, §8).

## 10. Findings for other states or the product (flagged, not fixed)
- **New `{{variables}}`: none.**
- **Builder placement:** `landlord-disclosure-ok` and `flood-disclosure-ok` need visible headings ('prominently', §§ 41-116(A), 41-113a); `flood-disclosure-ok` and `meth-disclosure-ok` need a landlord yes/no input and must be shown before signing; `tenant-repair-agreement-ok` must be output as its own signed document, never as an addendum (an addendum is part of the 'rental agreement'); the optional clauses (§6.1) shown only on opt-in; `lihtc-felony-screening-ok` only for tax-credit properties.
- **Builder rules:** no deposit cap for OK; returned-payment fee is a hand-filled figure; holdover rate not offered.
- **New topic key:** `liquidated-damages` (penalty doctrine), useful for states whose late-fee and early-termination rows rest on general contract law.
- **Shared-clause risk across states (not changed):** `default-by-tenant-ks-ne`'s 'reasonable costs and expenses' sits close to URLTA's attorney-fee ban (§ 41-113(A)(3) here, the same section in other URLTA states); `tenant-maintenance`'s 'clean, safe, and sanitary condition' omits URLTA's qualifier 'as the condition of the premises permits' in states with a separate-writing rule. Both noted on the OK rows; worth a look at each state's next retro.
- **Statute tensions (legal watch):** HB 3431's leasing ban covers non-resident aliens while § 60-122 exempts bona fide residents; whether 'lease land' reaches a residential tenancy is open. § 41-130.1(D) lets the parties agree to another death procedure; the clause follows (C). § 23-69 (double rent where the tenant gave notice) and § 41-111(D) (willful holdover) overlap; their interaction is unread.
- **Stale cross-references (rule 77):** §§ 41-122(B) and 41-123 refer to 'Section 15 of this act' (the 1978 act's numbering; it is § 41-115). § 52-117's history line prints 'Laws 2026, c. 486' (evidently 2025). § 63-427.8 before HB 3127 refers to 'Section 420 et seq. of Title 63', which HB 3127 changes to 'this title'. None changes a row.
- **Real-lease drift (OREC 2026 lease, leads about that form only):** tenant indemnities for personal-property loss, mechanic's liens, pets and mold or air quality, and 'not responsible' disclaimers (§ 41-113(A)(4)); a prevailing-party attorney-fee clause (lease ¶ 24, Pet Addendum ¶ 14; § 41-113(A)(3)); 'all deposits will be forfeited' for disturbances or police calls (¶ 29.C; deposits apply only to rent and damages, § 41-115(B)); one day's 'verbal' notice of entry (§ 41-128(C) says notice, not a form); tenant responsible for future pest infestations; a landscaping paragraph inside the lease (¶ 10.C) as well as in the separately signed Tenancy Guidelines (§ 41-118(B)); abandoned-property and casualty paragraphs that track §§ 41-130 and 41-122. The flood paragraph asks about the 100-year floodplain as well as § 41-113a's five-year history.
- **`security-deposit-return`** still has a blank `states` field (the intentional parent); unchanged.

## 11. Deliverables
- `lease-clauses-OK-delta.csv`: 144 rows (51 tagged, 93 new), 17 columns, CRLF.
- `lease-clause-decision-log-OK.md`: this log.
- Working sources (not delivered; kept in the session): `sources/` (Title 41, Title 12 §§ 1148.x, Title 75 excerpts, outside sections, enrolled acts, the OREC forms, the registry), `batteries/`, `work/` (row sources, build and check scripts, Taylor's decision).

## 12. Kickoff leads — what each turned out to be
1. **Where the law lives.** Confirmed: the Oklahoma Residential Landlord and Tenant Act, Okla. Stat. tit. 41, §§ 101-136, with older general landlord-tenant provisions in §§ 1-61 (displaced for dwelling units to the extent they conflict, § 41-103(B)) and the tax-credit screening section § 41-201; forcible entry and detainer in Okla. Stat. tit. 12, §§ 1148.1-1148.16, small claims § 12-1751; squatter removal in Okla. Stat. tit. 21, §§ 1351-1357 (2024). All read whole (`edu-scope-ok`, `edu-eviction-process-ok`, `edu-unauthorized-occupant-ok`). Official text: the Secretary of State publishes officially under UELMA (§ 75-31.2); oklegislature.gov (LSB) and oscn.net are unofficial hosts with history lines.
2. **Deposits.** No cap, no interest; escrow in an Oklahoma federally insured institution; misappropriation a crime; returned within 45 days after termination, delivery of possession and the tenant's written demand, with an itemized statement; reverts to the landlord if no demand within six months; no last-month use unless the lease allows; transfer on sale (§ 41-115). Refundable pet deposits are deposits (§ 41-102(2)).
3. **Eviction by tenancy type.** Month-to-month or at will: 30 days' written notice; shorter than month-to-month: 7 days (§ 41-111(A)-(B)); fixed term ends without notice unless agreed (§ 41-111(C)); default rule month-to-month, roomers paying weekly week-to-week (§ 41-110). Nonpayment: five days after written demand, which is also the demand for possession (§ 41-131). Other breaches: 10 days to remedy, termination not less than 15 days after receipt; repeat breach immediate; imminent irremediable harm and criminal or drug activity immediate (§ 41-132). Willful bad-faith holdover: up to twice the average monthly rent, prorated daily (§ 41-111(D)). Property left behind: § 41-130 (30 days conclusive). No sealing (statutes and court rules). Court rules: Rules 5 and 10 (no pretrial conference in FED with a jury waived; no default notice in FED).
4. **Landlord duties and remedies.** § 41-118(A) duties, not waivable; tenant remedies § 41-121 (14-day cure or 30-day termination; repair-and-deduct up to one month's rent; essential services; tenant-fault exception); casualty § 41-122; lockouts § 41-123; entry § 41-128 (one day's notice). **Retaliation:** no general statute; DV-victim protections (§ 41-113.3).
5. **Preemption.** Municipal rent control barred (§ 11-14-101.1); municipal real-property registration barred, contact lists allowed without fee (§ 11-22-110.1); local smoke-detector duties capped (§ 74-324.11a(F)); local medical-marijuana rules limited (§ 63-427.8(B)). No general preemption of local landlord-tenant regulation (battery 16).
6. **Fair housing.** Race, color, religion, gender, national origin, age, familial status, disability; 'no other categories' (§ 25-1452(C)); no source-of-income protection; exemptions for small single-family owners without brokers or discriminatory ads and owner-occupied buildings of four or fewer families (§ 25-1453); medical-marijuana patient status protected (§ 63-425(A)); guide dogs and assistance animals (§§ 41-113.1, 41-113.2, 25-1452(A)(13)-(14)).
7. **Disclosures.** Required: person to accept service, manager and owner (§ 41-116); conditional: flooding within five years (§ 41-113a), meth manufacture (§ 41-118(C)). Smoke detectors: owner installs, lessor explains testing, tenant checks (§ 74-324.11a). No mold, radon, bed-bug, lead (beyond federal), CO or move-in rules; psychologically impacted property need not be disclosed (§ 59-858-513).
8. **Local ordinances.** Flagged, not resolved; Tulsa's regulatory floodplain appears in the OREC flood form.

## 13. Independent check
A separate agent that had not seen the drafting checked every new OK row (bodyText and notes) and every appended OK note on the 51 tagged rows against the saved sources only, on 2026-10-01, using Python to parse the delta and grep the sources. **Findings: 4 errors, 8 unsupported points, 7 imprecisions or drafting risks; citation format clean.** All fixed or answered; the delta was rebuilt and every §8 check re-run.
- **Errors (fixed):** `edu-medical-marijuana-ok` reversed § 63-425(A)'s exception ('unless doing so' → 'unless leasing to that person would put you at risk'); `edu-eviction-process-ok` said the tenant 'must' post a supersedeas bond (§ 12-1148.10A(F) says 'may'); `edu-possession-delivery-ok` dropped 'for each month, or portion thereof' from § 41-120(B); `tenant-death-contact-ok`'s discard condition was narrower than § 41-130.1(C) ('prior to the date of discarding').
- **Unsupported (fixed):** Okla. Const. art. II, § 26 was cited as saved before it was (now saved, `okla-const-art2-sec26.txt`); `criminal-activity-ok` cited § 63-420 et seq. (now § 63-427.8(F), saved); session-law chapter numbers for the 2026 acts were not in the saved enrolled texts (removed; acts cited as 'HB 3431 (2026)'); 'felony classes only' for the 2025 ch. 486 amendments was unverifiable (now 'per the history line; current text read'); § 41-201(D)'s 'on or after' wording restored; the court clerk's help limited to small-claims-docket cases (§ 12-1148.14); `severability`'s 'without voiding the rest' replaced with §§ 41-113(B), 41-103(B) wording; `parking-vehicle-rules`' 'only by a Class AA wrecker' replaced with § 47-954A(A)'s 'in addition to any procedure provided by local ordinance'.
- **Imprecise (fixed):** the 24-month limit on the single-family fair-housing exemption (§ 25-1453(C)(2)) added; 'may be liable' for guide-dog damage (§ 25-1452(A)(14)); § 60-858's four association types; `security-deposit-return-ok`'s 'Oklahoma law' narrowed to 'the Oklahoma Residential Landlord and Tenant Act' (§ 41-115(B)); `no-sublet-assign`'s note now says § 41-11 re-entry sits outside the act and possession is by court action; `tenant-maintenance`'s wording risk noted. **Re-verification:** the same agent confirmed every fix and found two residual points (the § 41-127(1) quotation in the `tenant-maintenance` note; § 41-136 missing from the receipt-hit list in `edu-no-rent-receipt-rule-ok`), both fixed.
- **Drafting risks the agent raised and the rows already disclosed:** fixed fees under the penalty doctrine (`returned-payments-ok`, `late-fee`, `early-termination-ks`); 'reasonable costs and expenses' in `default-by-tenant-ks-ne`. No § 41-113 problem found in any new clause.


## 14. Statute walk (gap-discovery source 1)
Okla. Stat. tit. 41 was read whole from the saved text: 95 index entries, 79 live sections and 16 repealed (§§ 25, 29, 31, 32, 34, 39, 41-43, 71-77). Okla. Stat. tit. 12, §§ 1148.1-1148.16 read whole (16 entries, 3 repealed). The section index was then diffed against every citation in the OK rows and notes (programmatic; ranges resolved): **49 of the 79 live Title 41 sections are cited** (every section of the Residential Landlord and Tenant Act that bears on a lease or a landlord duty, plus §§ 4-7, 9-12, 35, 37, 38, 61 and 201, and § 136 as a battery hit only). Not cited, with reason:
- §§ 41-1, 41-2, 41-3, 41-8 (tenancy at will, holding over after a term of years, periodic holding by rent interval, when no notice to quit is needed): older general provisions; for dwelling units the act's own rules govern where they conflict (§ 41-103(B)): § 41-110 (default month-to-month) and § 41-111 (notices; a definite term ends without notice). § 41-2's rule that an unwritten lease expires with the calendar year was read and has no counterpart row (oral residential tenancies are month-to-month under § 41-110).
- §§ 41-13 to 41-22 (attornment to strangers, sublessees, alienees, life-estate rents, executors, occupants without contract, joint tenants, remaindermen): estate and title matters; no landlord duty or lease term. § 41-19 (occupant without contract liable for rent) is matched by § 41-109(B)'s fair-rental-value rule, which is cited.
- §§ 41-23, 41-24, 41-26, 41-27, 41-28 (crop rent and liens, attachment for rent): agricultural; out of scope.
- § 41-30 (taxation of improvements), § 41-40 (release of forfeited leases from record): recording and tax matters; no residential lease term.
- § 41-33 (lease presumed for one year where no usage) and § 41-36 (renewal unless notice equal to the term, not over one month): older presumptions; for dwelling units § 41-110 and § 41-111 govern; the library's month-to-month holdover term (`holdover-ca`) settles the point by agreement.
- §§ 41-51, 41-52 (abandoned property in nonresidential rental property): nonresidential; read to confirm the residential rule is § 41-130.
- §§ 41-101 (short title), 41-106 (settlement of disputed claims), 41-107 (good faith), 41-112 (duties end on rightful termination), 41-135 (liberal construction): general provisions; applied through the rows, no separate landlord duty.
- **Title 12:** §§ 1148.2, 1148.3 (court powers and jurisdiction), 1148.6 (answer), 1148.13 (codification): procedure; within `edu-eviction-process-ok`'s range citation.
- **One level down:** sections cited in part were re-read subdivision by subdivision for the rows that rely on them (§ 41-102 definitions; § 41-111(A)-(G); § 41-113(A)(1)-(6); § 41-115(A)-(G); § 41-117(A)-(C); § 41-118(A)-(C); § 41-121(A)-(E); § 41-128(A)-(E); § 41-130(A)-(E); § 41-130.1(A)-(F); § 41-132(A)-(D)); each subdivision is in a row or outside scope.

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** the Oklahoma Real Estate Commission's 2026 'Residential Lease' (form dated 01-01-2026, 7 pages, 'created by the Oklahoma Real Estate Contract Form Committee and approved by the Oklahoma Real Estate Commission'), with the 2026 Tenancy Guidelines, Pet Addendum, Keys and Re-keying Addendum, Tenant Flood Notice and Residential Lease Supplement, from https://oklahoma.gov/orec/contract-forms-and-related-addenda.html (PDFs under `/content/dam/ok/en/orec/documents/contracts-and-forms-page/2026-contract-forms/`). Text extracted with pdf.js and saved (`sources/orec-2026-residential-lease.txt`, `sources/orec-2026-addenda.txt`), hash-matched. **Why it qualifies:** a state agency's lease (rule 33), Oklahoma-specific (cites ORLTA and '41 O.S. §130.1A'; Tulsa floodplain option), current edition, not a relabelled multi-state template. **Weakness:** it is drafted for broker-managed properties (notice to the 'Owner's Broker') and contains several terms that conflict with § 41-113 (§10); it is a lead about wording, not law. Not reproduced here.

### 15.1 Provision map
| OREC provision | Library answer for OK | Note |
|---|---|---|
| ¶1.A Term; 30 days' notice of intent to vacate or extend; nonpayment 5 days after written demand | `rent-payment`, `periodic-tenancy-notice-ok`, `edu-nonpayment-notice-ok` | Statute: § 41-131 |
| ¶1.B Holdover with consent is month-to-month, not renewal | `holdover-ca`, `edu-holdover-ok` | Displaces § 41-35's presumption, as the library does |
| ¶2 Rent in advance on the 1st; prorating; last month by certified funds | `rent-payment`, `acceptable-payment-methods` | — |
| ¶2.A Late fee as liquidated damages, recited as reasonable | `late-fee`, `edu-penalties-liquidated-damages-ok` | § 15-215(A) test; library states no recital |
| ¶2.B Dishonored checks: replace in 24 hours; fee; certified funds after a second | `returned-payments-ok`, `edu-dishonored-check-remedies-ok` | No statutory cap |
| ¶3 Deposit; 45 days after written request and possession; itemized list by return-receipt mail; FDIC-insured escrow; interest to owner | `security-deposit-return-ok`, `security-deposit-use`, `edu-deposit-holding-ok`, `edu-no-deposit-interest-ok` | Matches § 41-115 |
| ¶4-5 Animals; assistance-animal documentation | `pet-policy-ok`, `assistance-animal-accommodation`, `edu-assistance-animals-ok` | Tracks § 41-113.2(B) |
| ¶6 Application accuracy; possession delay (return of sums paid) | `rental-application-accuracy`, `possession-delay-ca` | — |
| ¶7 Inspect within 24 hours of keys | `existing-condition`, `edu-no-move-in-inspection-rule-ok` | No statute |
| ¶8 + Keys Addendum (owner chooses who pays rekeying) | `keys` | No statute (battery 42) |
| ¶9 Legal use; no business or day care | `residential-use-only` | § 41-129(A) |
| ¶10.A Pest control: owner first 30 days, tenant after | `landlord-maintenance`, `edu-no-bed-bug-rule-ok` | Tenant-pays term vs § 41-118(A)(2) habitability: a lead, not adopted |
| ¶10.B Smoke detectors: tenant checks every 30 days, replaces batteries | `smoke-detector-ok` | § 74-324.11a(C) |
| ¶10.C-D Landscaping; routine maintenance; HVAC filters | `tenant-maintenance`, `tenant-repair-agreement-ok` | § 41-118(B) separate writing (Taylor) |
| ¶11 No smoking or vaping, including marijuana | `smoking-policy` | § 63-427.8(C) |
| ¶12 No growing, selling or distributing marijuana | `cannabis-cultivation-ok` | § 63-427.12(A) |
| ¶13 Utilities | `utilities-responsibility`, `utilities-paid-by-landlord` | — |
| ¶14 Occupants; two per bedroom; 14-night guest limit | `permitted-occupants`, `guest-policy-day-limit`, `edu-occupancy-ok` | § 41-117(C) presumption |
| ¶15 Emergency and death contact; authority on death | `tenant-death-contact-ok` | § 41-130.1(A) |
| ¶16 Alterations; mechanic's-lien indemnity | `no-alterations` | Indemnity not adopted (§ 41-113(A)(4)) |
| ¶17 Application of funds (maintenance, fees, utilities, deposits, fees, court costs, then rent) | `application-of-payments` | No statute; library applies to rent first |
| ¶18 HOA rules; fines passed through | `hoa-compliance` | — |
| ¶19 No sublet or assignment | `no-sublet-assign` | § 41-10 |
| ¶20 Personal property at tenant's risk with indemnity; renter's insurance; perishables; flood insurance | `tenants-property-insurance-ks-oh-ca` | Indemnity and disclaimers not adopted (§ 41-113(A)(4)) |
| ¶21 + Flood Notice (100-year floodplain; flooding in last five years; Tulsa floodplain) | `flood-disclosure-ok` | § 41-113a is the five-year history; floodplain and Tulsa items are extras or local |
| ¶22 Inventory of appliances; remotes | `appliances-included` | — |
| ¶23 Entry: one day's verbal notice; court order or termination on refusal | `landlords-access`, `edu-entry-ok` | § 41-128 |
| ¶24 Prevailing-party attorney fees | `edu-attorney-fees-ok` | Barred in a lease (§ 41-113(A)(3)); not adopted |
| ¶25 Notices; service by personal delivery, family member over 12, posting plus certified mail | `notices`, `edu-notice-service-ok` | § 41-111(E) |
| ¶26 Surrender, cleaning, carpet cleaning cap; abandoned property (no value / 30 days / certified notice) | `surrender-end-of-term-ks-ne`, `abandoned-property-ok` | § 41-130 |
| ¶27 Casualty: tenant may vacate and terminate; proportional rent | `edu-casualty-ok`, `casualty-termination-ok` | § 41-122 (tenant side only in OREC) |
| ¶28 Foreclosure does not release tenant | `edu-no-foreclosure-tenant-rule-ok` | — |
| ¶29.A Joint liability | `joint-liability` | — |
| ¶29.B 10-day cure / 15-day termination; 5-day for rent | `default-by-tenant-ks-ne`, `edu-noncompliance-notice-ok` | § 41-132(B) |
| ¶29.C-D Disturbance or police calls: notice to vacate and deposits forfeited; criminal and drug activity: immediate termination | `criminal-activity-ok` | Deposit forfeiture not adopted (§ 41-115(B)); criminal limb tracks § 41-132(D) |
| ¶30 Non-waiver; acceptance of rent | `late-fee`, `edu-waiver-by-acceptance-ok` | No statute |
| ¶31 Oklahoma law; county venue | `governing-law` | — |
| ¶32 Fair housing statement; lead; broker disclosure | `edu-fair-housing-ok`, `lead-based-paint` | — |
| ¶33-34 Air quality and mold disclaimers with hold-harmless | `edu-no-mold-disclosure-ok` | Not adopted (§ 41-113(A)(4)) |
| ¶35 Exterior security cameras | none (battery 104: no camera statute) | §18.2 `tenant-security-cameras` |
| ¶36 SCRA termination | `edu-servicemember-rights-ok` | Federal |
| ¶37 Entire agreement; copy received; accepts present condition | `entire-agreement`, `existing-condition`, `edu-no-lease-copy-rule-ok` | — |
| Tenancy Guidelines (separately signed: yard care, filters, pests, locks, antennas, CO detectors optional, vehicles, trip charge, cold weather) | `tenant-repair-agreement-ok`, `parking-vehicle-rules`, `edu-towing-ok` | The OREC form uses a separate signed writing for chores, consistent with § 41-118(B) |
| Pet Addendum (nonrefundable pet fee not escrowed; renter's insurance; indemnity; strict liability; prevailing-party fees; removal on one day's notice) | `pet-policy-ok`, `pet-insurance-requirement`, `edu-pet-deposit-ok` | Indemnity and fee terms not adopted |

### 15.2 What it produced
`cannabis-cultivation-ok` (confirmed as common practice), the separate-writing approach for chores (supports Taylor's decision), `tenant-death-contact-ok` (same § 41-130.1(A) paragraph), the late-fee liquidated-damages framing (recorded on `late-fee`), and the §10 drift list. No row was changed to follow the OREC text where it conflicts with § 41-113.

## 16. Landlord-scenario screen (gap-discovery source 3)
74 everyday situations, application to move-out, sale and foreclosure, run against the OK rows; where no row answered, the statutes were searched and any hit read with the section open.

| # | Scenario | Oklahoma answer (row) |
|---|---|---|
| 1 | Advertising a unit; can I say 'no kids'? | No: familial status (`edu-fair-housing-ok`) |
| 2 | Applicant uses a housing voucher | No state protection (`edu-source-of-income-ok`) |
| 3 | Screening on credit, eviction and criminal history | No state statute; tax-credit felony rule; drug-manufacture convictions excepted (`edu-tenant-screening-ok`, `lihtc-felony-screening-ok`) |
| 4 | Charging an application fee or holding deposit | No rule; a returnable holding deposit is a deposit (`edu-no-application-fee-rule-ok`) |
| 5 | Applicant is a medical marijuana patient | May not refuse solely for that (`edu-medical-marijuana-ok`) |
| 6 | Applicant asks for an emotional support animal | Documentation rules; no landlord liability; false-claim remedy (`edu-assistance-animals-ok`, `assistance-animal-accommodation`) |
| 7 | Applicant lies on the application | Lease breach (`rental-application-accuracy`); tax-credit felony information (`lihtc-felony-screening-ok`) |
| 8 | Applicant is a DV victim or ended a prior lease as one | May not refuse (`edu-dv-protections-ok`) |
| 9 | Renting a room in my own home | Fair-housing exemption for owner-occupied four-family buildings (`edu-fair-housing-ok`) |
| 10 | Applicant is not a U.S. citizen | Harboring statute; HB 3431 leasing ban for non-resident aliens from Nov. 1, 2026; fair-housing risk (`edu-immigration-status-ok`, `edu-foreign-ownership-ok`) |
| 11 | Two registered sex offenders want to share a unit | Unlawful except spouses or blood relatives; landlord exposure (`edu-sex-offender-residency-ok`, `sex-offender-cohabitation-ok`) |
| 12 | 16-year-old wants to rent | Only with a certification of unaccompanied status (`edu-minor-tenants-ok`) |
| 13 | How much deposit can I take? | No cap (`edu-no-deposit-cap-ok`) |
| 14 | Pet deposit on top | Refundable pet deposit is a deposit; pet fee is rent (`edu-pet-deposit-ok`, `pet-policy-ok`) |
| 15 | Where do I keep the deposit? | Escrow in an Oklahoma federally insured institution (`edu-deposit-holding-ok`) |
| 16 | Interest on the deposit? | No (`edu-no-deposit-interest-ok`) |
| 17 | First and last month plus deposit | Deposit is not last month's rent unless the lease says so (`edu-deposit-last-month-ok`) |
| 18 | What must the lease disclose? | Service and owner/manager; flooding and meth if applicable; federal lead (§4) |
| 19 | Former meth lab | Disclose before commencement unless assessed below 0.1 mcg/100 cm² (`meth-disclosure-ok`) |
| 20 | Radon, mold, bed bugs | No state duty (edu-no-* rows) |
| 21 | Someone died in the unit | Not material; no cause of action (`edu-stigmatized-property-ok`) |
| 22 | Lease signed electronically | Valid between parties who agreed (`electronic-signatures`, `edu-electronic-records-ok`) |
| 23 | Oral lease for two years | Statute of frauds: over one year must be written (`edu-statute-of-frauds-ok`) |
| 24 | Five-year lease and a later buyer | Record to bind third persons (`edu-statute-of-frauds-ok`) |
| 25 | Occupancy limit for a family | Two per bedroom presumed reasonable (`edu-occupancy-ok`) |
| 26 | Unit not ready on the start date | Rent abates; tenant may end at once (`possession-delay-ca`, `edu-possession-delivery-ok`) |
| 27 | Move-in checklist required? | No (`edu-no-move-in-inspection-rule-ok`) |
| 28 | Rent is late; how much can I charge? | No cap; penalty doctrine (`late-fee`, `edu-penalties-liquidated-damages-ok`) |
| 29 | Rent check bounces | Landlord's own fee; check-suit fees after certified demand (`returned-payments-ok`, `edu-dishonored-check-remedies-ok`) |
| 30 | Cash rent receipt? | No duty (`edu-no-rent-receipt-rule-ok`) |
| 31 | Accepting partial or late rent | No acceptance-waiver statute; § 41-35 renewal presumption (`edu-waiver-by-acceptance-ok`) |
| 32 | Raising rent on a month-to-month | No notice statute; end with 30 days' notice; emergency 10% cap (`edu-rent-increases-ok`) |
| 33 | City wants to cap rent or register rentals | Barred (`edu-rent-control-ok`) |
| 34 | Changing house rules mid-lease | § 41-126 conditions; substantial changes need consent (`rules-ok`) |
| 35 | Sales tax on rent | Not on ordinary leases; hotels and rooming houses taxed (`edu-rent-tax-ok`) |
| 36 | Entering to make repairs | One day's notice, reasonable times (`landlords-access`, `edu-entry-ok`) |
| 37 | Tenant refuses entry | Court order or termination (`edu-entry-ok`) |
| 38 | Tenant demands repairs | § 41-118 duties; § 41-121 remedies (`edu-landlord-duties-ok`, `edu-tenant-repair-remedies-ok`) |
| 39 | Tenant repairs and deducts | Up to one month's rent after 14 days' notice (`edu-tenant-repair-remedies-ok`) |
| 40 | I want the tenant to mow and shovel | Separate signed writing (`tenant-repair-agreement-ok`, `edu-tenant-maintenance-agreement-ok`) |
| 41 | I resell electricity to tenants | 10% markup cap; itemized bills (`edu-utility-resale-ok`) |
| 42 | Smoke detectors | Explain testing; tenant checks; tampering a crime (`smoke-detector-ok`) |
| 43 | Tenant wants a ramp | Reasonable modification at tenant's cost; surety bond (`edu-fair-housing-ok`) |
| 44 | Tenant smokes or grows marijuana | Smoking ban allowed; growing needs written permission (`smoking-policy`, `cannabis-cultivation-ok`) |
| 45 | Tenant keeps a gun | Locked-vehicle storage protected; in-unit rule unresolved (`edu-firearms-ok`) |
| 46 | Guest moves in | Reasonable limits; trespass after written request (`guest-policy-day-limit`, `edu-unauthorized-occupant-ok`) |
| 47 | Tenant lists the unit on Airbnb | Assignment and sublet bar (`no-sublet-assign`) |
| 48 | Towing a car from the lot | 48 hours or no permission; Class AA wrecker; form and inventory (`edu-towing-ok`, `parking-vehicle-rules`) |
| 49 | Noise complaints | Tenant duty not to disturb (`no-disturbance`) |
| 50 | Drug dealing in the unit | Immediate termination (`criminal-activity-ok`) |
| 51 | Tenant assaults a neighbor | Immediate termination (`criminal-activity-ok`, `edu-noncompliance-notice-ok`) |
| 52 | Protected tenant wants out | Written notice with protective order within 30 days (`edu-dv-protections-ok`) |
| 53 | Tenant deployed | Federal SCRA; state duty extended (`edu-servicemember-rights-ok`) |
| 54 | Tenant wants out early | Early-termination fee; mitigation (`early-termination-ks`, `edu-abandonment-mitigation-ok`) |
| 55 | Tenant stops paying | Five days after written demand; FED (`edu-nonpayment-notice-ok`, `edu-eviction-process-ok`) |
| 56 | Can I change the locks or cut utilities? | No; twice rent or damages (`edu-self-help-eviction-ok`) |
| 57 | Tenant complains to the city, then I end the lease | No general retaliation statute; DV limits (`edu-retaliation-ok`) |
| 58 | Ending a month-to-month | 30 days; 7 for shorter periods (`periodic-tenancy-notice-ok`) |
| 59 | Not renewing a fixed lease | No notice or cause needed (`edu-for-cause-eviction-ok`) |
| 60 | Tenant stays after the lease ends | Actual damages; willful bad faith up to twice rent (`holdover-ca`, `edu-holdover-ok`) |
| 61 | Tenant gave notice, then stayed | Double rent under § 23-69 (`edu-holdover-ok`) |
| 62 | Tenant vanished owing rent | Mitigation; abandonment (`edu-abandonment-mitigation-ok`) |
| 63 | Belongings left after moving out | § 41-130 (`abandoned-property-ok`) |
| 64 | Belongings left after judgment | Same section; writ procedure (`edu-post-eviction-property-ok`) |
| 65 | Squatters in a vacant rental | Sheriff removal on verified complaint; tenants excluded (`edu-unauthorized-occupant-ok`) |
| 66 | Sole tenant dies | § 41-130.1 contact procedure (`tenant-death-contact-ok`, `edu-tenant-death-ok`) |
| 67 | Fire destroys the unit | Tenant may vacate and terminate; landlord option clause (`edu-casualty-ok`, `casualty-termination-ok`) |
| 68 | Tenant's candle causes the fire | No tenant remedy; lost-rent clause (`tenant-caused-damage-ok`) |
| 69 | Deposit return | Written demand; 45 days; itemized; six-month reversion (`security-deposit-return-ok`) |
| 70 | Tenant never asks for the deposit | Reverts after six months (`edu-deposit-unclaimed-ok`) |
| 71 | Eviction record sealing | None (`edu-no-eviction-sealing-ok`) |
| 72 | Selling the property with tenants | Deposit transfer and written notice (`edu-deposit-on-sale-ok`, `edu-sale-or-management-change-ok`) |
| 73 | Bank forecloses | No state rule; federal not read (`edu-no-foreclosure-tenant-rule-ok`) |
| 74 | Tornado emergency declared; can I raise rent for new tenants? | 10% cap during the declaration, 30 days after and 180 more days (`edu-rent-increases-ok`) |

Every scenario has an OK row. Scenarios 10, 11, 41, 61 and 74 rested on the outside-title search (§§ 60-121/122, 57-590.1, 17-161.1, 23-69, 15-777.4).

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole Oklahoma Statutes (47,809 sections) and the Oklahoma Constitution (415 sections) were loaded in the built-in browser and searched with 115 batteries (`batteries/batteries-OK-*.tsv`). Real findings outside Title 41, each read whole and saved:
- **Constitution:** art. XXII, § 1 (aliens may not own land; bona fide residents excepted) → `edu-foreign-ownership-ok`; art. II, § 26 (arms) → `edu-firearms-ok`. No cannabis provision.
- **Fair housing:** §§ 25-1451, 1452, 1453, 1502.2, 1506.3 → `edu-fair-housing-ok`, `edu-source-of-income-ok`, `edu-assistance-animals-ok`.
- **Medical marijuana:** §§ 63-425, 63-427.8 (and HB 3127), 63-427.12 → `edu-medical-marijuana-ok`, `cannabis-cultivation-ok`, `smoking-policy`.
- **Smoke detectors:** § 74-324.11a → `smoke-detector-ok`.
- **Local regulation:** §§ 11-14-101.1, 11-22-110.1 → `edu-rent-control-ok`.
- **Possession and occupants:** §§ 21-1351 to 21-1357 → `edu-unauthorized-occupant-ok`; § 23-69 → `edu-holdover-ok`; §§ 12-1751, 12-591, 12-937 → `edu-eviction-process-ok`, §6.1, `edu-dishonored-check-remedies-ok`.
- **Sex offenders:** §§ 57-590, 57-590.1 → `edu-sex-offender-residency-ok`, `sex-offender-cohabitation-ok`.
- **Minors, military, immigration, foreign ownership:** § 10A-1-9-125 → `edu-minor-tenants-ok`; § 44-208.1 → `edu-servicemember-rights-ok`; § 21-446 → `edu-immigration-status-ok`; §§ 60-6, 60-121, 60-122, HB 3431, SB 893 → `edu-foreign-ownership-ok`.
- **Disclosures:** § 59-858-513 → `edu-stigmatized-property-ok`.
- **Money and contracts:** §§ 15-213, 214, 215, 23-97 → `edu-penalties-liquidated-damages-ok`; §§ 15-752, 753, 754, 761.1 → `edu-consumer-protection-ok`; § 14A-2-202.1 → `returned-payments-ok`; §§ 12A-15-103, 105, 107, 108 → `edu-electronic-records-ok`, `electronic-signatures`; §§ 15-136, 16-15 → `edu-statute-of-frauds-ok`; § 15-777.4 → `edu-rent-increases-ok`; §§ 68-1354, 68-1370.9 → `edu-rent-tax-ok`; § 15-222 (auto-renewal of goods rentals; read, not a lease rule).
- **Utilities, vehicles, firearms, associations:** § 17-161.1 → `edu-utility-resale-ok`; §§ 47-954A, 47-966 → `edu-towing-ok`, `parking-vehicle-rules`; §§ 21-1289.7a, 21-1290.22 → `edu-firearms-ok`; § 60-858 → `common-area-use`, `edu-no-display-rights-rule-ok`.

**Absence batteries (summary; full patterns, hit lists and positives in the battery files):** controls 1-2; deposit calibration 3; late fees 6, 13; application fees 7, 14; receipts 8, 15; rent control and preemption 9-12, 16-18; rent increase 10; dishonored checks 19, 27, 29; legal interest 20; lodging tax 21, 28, 30; acceptance waiver 22; nonresident owner 23; algorithms and fee transparency 24; shutdown 25; emergency prices 26; deposits 31-33; inspection 34; unclaimed deposits 35; nonrefundable 36; holding deposits 37; waterbeds 38; absence notice 39; utilities 40/45; CO 41; locks 42; pools 43; telecom 44/46; fair housing 47; source of income 48/51; immigration 49/52; sex offenders 50; meth 53; radon 54; mold 55; bed bugs 56; lead 57; flood 58/64; stigma 59/65; military 60; foreign ownership 61; firearms 62/63; towing 66; displays 67; EV 68; solar 69; servicemembers 70-71; protective orders 72; sealing 73; foreclosure 74; condo conversion 75; eviction cross-chapter 76; consumer protection 77; liquidated damages 78; unconscionability 79; UETA 80; jury waiver 81; confession of judgment 82; exemption waivers 83/89; statute of frauds 84/88; translation 85/114; auto-renewal 86; renter's insurance 87; nuisance 90; lease forfeiture 91; lease copy 92; marijuana cultivation 93; associations 94/95; formatting 96-102; plain language 103/115; cameras 104; quiet enjoyment 105; utility shutoff 106; rent reporting 107; guarantors 108; window guards 109; sprinklers 110; pesticide notice 111; double letting 112; infirmity termination 113.

## 18. Topic reference canvass (rules 27, 36)

### 18.1 Topics answered by an OK row (129, plus the new `liquidated-damages`)
| Topic | OK rows |
|---|---|
| acceptable-payment-methods | `acceptable-payment-methods` |
| application-fees | `edu-no-application-fee-rule-ok` |
| application-of-payments | `application-of-payments` |
| due-at-signing | `due-at-signing` |
| fees-as-rent | `edu-fees-as-rent-ok` |
| late-fee | `late-fee` |
| rent-control | `edu-rent-control-ok` |
| rent-increase-notice | `edu-rent-increases-ok` |
| rent-payment | `rent-payment`, `edu-rent-payment-default-ok` |
| rent-receipts | `edu-no-rent-receipt-rule-ok` |
| rent-tax | `edu-rent-tax-ok` |
| returned-payments | `returned-payments-ok`, `edu-dishonored-check-remedies-ok` |
| waiver-by-acceptance | `edu-waiver-by-acceptance-ok` |
| condition-inspection | `edu-no-move-in-inspection-rule-ok` |
| deposit-escheat | `edu-deposit-unclaimed-ok` |
| deposit-last-month-rent | `edu-deposit-last-month-ok` |
| security-deposit-cap | `edu-no-deposit-cap-ok` |
| security-deposit-holding | `edu-deposit-holding-ok` |
| security-deposit-interest | `edu-no-deposit-interest-ok` |
| security-deposit-on-sale | `edu-deposit-on-sale-ok` |
| security-deposit-penalty | `edu-security-deposit-rules-ok` |
| security-deposit-return | `security-deposit-return-ok` |
| security-deposit-use | `security-deposit-use` |
| alterations | `no-alterations` |
| disturbance | `no-disturbance` |
| existing-condition | `existing-condition` |
| joint-liability | `joint-liability` |
| permitted-occupants | `permitted-occupants`, `edu-occupancy-ok` |
| residential-use-only | `residential-use-only` |
| smoking-policy | `smoking-policy` |
| sublet-assign | `no-sublet-assign` |
| tenant-forward-proceedings | `tenant-forward-proceedings-ca` |
| tenant-maintenance | `tenant-maintenance` |
| tenant-repair-agreement | `tenant-repair-agreement-ok` |
| tenant-statutory-duties | `edu-tenant-duties-ok` |
| utilities-responsibility | `utilities-responsibility` |
| utility-payment-evidence | `utility-payment-evidence` |
| utility-service-continuity | `utility-service-continuity` |
| alarm-duties | `smoke-detector-ok` |
| appliances-included | `appliances-included` |
| landlord-maintenance | `landlord-maintenance`, `edu-landlord-duties-ok` |
| services-utilities-provided | `services-utilities-provided-ks-oh` |
| tenant-repair-remedies | `edu-tenant-repair-remedies-ok` |
| tenant-screening | `lihtc-felony-screening-ok`, `edu-tenant-screening-ok` |
| utilities-paid-by-landlord | `utilities-paid-by-landlord` |
| landlord-entry | `landlords-access`, `edu-entry-ok` |
| abandoned-property | `abandoned-property-ok` |
| abandonment-and-mitigation | `edu-abandonment-mitigation-ok` |
| attorney-fees | `edu-attorney-fees-ok` |
| casualty-termination | `casualty-termination-ok`, `edu-casualty-ok` |
| conversion-notice | `edu-no-condo-conversion-rule-ok` |
| criminal-activity | `criminal-activity-ok` |
| cure-and-eviction-grounds | `edu-noncompliance-notice-ok` |
| default-by-tenant | `default-by-tenant-ks-ne` |
| dv-lease-termination | `edu-dv-protections-ok` |
| early-termination | `early-termination-ks` |
| eviction-process | `edu-eviction-process-ok` |
| eviction-record-sealing | `edu-no-eviction-sealing-ok` |
| for-cause-eviction | `edu-for-cause-eviction-ok` |
| foreclosure | `edu-no-foreclosure-tenant-rule-ok` |
| holdover | `holdover-ca`, `edu-holdover-ok` |
| landlord-lien | `edu-landlord-lien-ok` |
| landlord-self-cure | `edu-landlord-self-cure-ok` |
| minor-tenant-filing | `edu-minor-tenants-ok` |
| nonpayment-notice | `edu-nonpayment-notice-ok` |
| nuisance | `edu-no-nuisance-eviction-rule-ok` |
| possession-delay | `possession-delay-ca`, `edu-possession-delivery-ok` |
| post-eviction-property | `edu-post-eviction-property-ok` |
| rental-application-accuracy | `rental-application-accuracy` |
| retaliation | `edu-retaliation-ok` |
| sale-or-management-change | `edu-sale-or-management-change-ok` |
| self-help-eviction | `edu-self-help-eviction-ok` |
| servicemember-rights | `edu-servicemember-rights-ok` |
| surrender-end-of-term | `surrender-end-of-term-ks-ne` |
| tenant-caused-damage | `tenant-caused-damage-ok`, `edu-tenant-caused-damage-ok` |
| tenant-death | `tenant-death-contact-ok`, `edu-tenant-death-ok` |
| termination-notice | `periodic-tenancy-notice-ok` |
| unauthorized-occupant-removal | `edu-unauthorized-occupant-ok` |
| addendum-precedence | `addendum-precedence` |
| electronic-signatures | `electronic-signatures`, `edu-electronic-records-ok` |
| emergency-assistance-right | `edu-emergency-assistance-ok` |
| entire-agreement | `entire-agreement` |
| governing-law | `governing-law` |
| notice-delivery-methods | `edu-notice-service-ok` |
| notices | `notices` |
| scope | `edu-scope-ok` |
| severability | `severability` |
| statute-of-frauds-lease-term | `edu-statute-of-frauds-ok` |
| tenants-property-insurance | `tenants-property-insurance-ks-oh-ca` |
| assistance-animal-accommodation | `assistance-animal-accommodation` |
| pet-fees | `edu-pet-deposit-ok` |
| pet-insurance-requirement | `pet-insurance-requirement` |
| pet-policy | `pet-policy-ok` |
| service-animal-misrepresentation | `edu-assistance-animals-ok` |
| assigned-parking-space | `assigned-parking-space` |
| ev-charging | `edu-no-ev-charging-rule-ok` |
| parking | `parking-ks-oh-ca` |
| parking-vehicle-rules | `parking-vehicle-rules` |
| storage-space | `storage-space-ks-oh-ca` |
| towing | `edu-towing-ok` |
| cannabis | `cannabis-cultivation-ok`, `edu-medical-marijuana-ok` |
| common-area-use | `common-area-use` |
| fire-safety-grilling | `fire-safety-grilling` |
| firearms | `edu-firearms-ok` |
| guest-policy | `guest-policy` |
| guest-policy-day-limit | `guest-policy-day-limit` |
| inspection-rights | `inspection-rights` |
| keys | `keys` |
| landscaping-irrigation | `edu-tenant-maintenance-agreement-ok` |
| rules-regulations | `rules-ok` |
| tenant-display-rights | `edu-no-display-rights-rule-ok` |
| bed-bug-disclosure | `edu-no-bed-bug-rule-ok` |
| fair-housing | `edu-fair-housing-ok` |
| flood-disclosure | `flood-disclosure-ok` |
| hoa-compliance | `hoa-compliance` |
| immigration-status | `edu-immigration-status-ok` |
| lead-based-paint | `lead-based-paint` |
| lease-copy | `edu-no-lease-copy-rule-ok` |
| meth-disclosure | `meth-disclosure-ok` |
| mold-disclosure | `edu-no-mold-disclosure-ok` |
| owner-identity-disclosure | `landlord-disclosure-ok` |
| radon-disclosure | `edu-no-radon-disclosure-ok` |
| sex-offender-occupancy | `sex-offender-cohabitation-ok`, `edu-sex-offender-residency-ok` |
| source-of-income | `edu-source-of-income-ok` |
| stigmatized-property | `edu-stigmatized-property-ok` |
| utility-submetering-disclosure | `edu-utility-resale-ok` |
| consumer-protection-act | `edu-consumer-protection-ok` |
| foreign-ownership | `edu-foreign-ownership-ok` |
| prohibited-lease-terms | `edu-prohibited-lease-terms-ok` |
| liquidated-damages (new) | `edu-penalties-liquidated-damages-ok` |

### 18.2 Topics with no OK row (177): status and reason
Status codes: **CA** confirmed absent (battery or read whole, boundary in §17); **AE** answered elsewhere (row named); **NO** not offered (§6.1); **NA** not applicable (another state's statute-specific feature with no Oklahoma counterpart found: Title 41 read whole and the battery named, or the feature is a program, form or numbering quirk of that state); **NL** not located (searched, nothing found, boundary stated).

| Topic | Status | Reason |
|---|---|---|
| algorithmic-rent-setting | CA | Battery 24: 8 sections, none a rent-algorithm rule |
| collection-fee | NO | No statute; penalty doctrine (§6.1) |
| fee-transparency | CA | Battery 24 (all-in price, mandatory fees): no rental rule |
| fee-unprovided-service | NA | Title 41 read whole: no rule on fees for services not provided |
| government-fee-reimbursement | NA | Municipal registration is barred and contact lists are free (§ 11-22-110.1), so no fee to pass through (`edu-rent-control-ok`) |
| nonresident-owner-agent | AE | § 41-116 requires a person to accept service, without a residency rule (`landlord-disclosure-ok`); battery 23 |
| notice-service-fee | NO | No statute (§6.1) |
| rent-concession | NA | No concession statute (Title 41 read whole) |
| rent-escalation | NA | No retaliation safe harbour or escalation statute; a mid-term increase is a matter of the lease (`edu-rent-increases-ok`) |
| required-fees | AE | Fees are 'rent' (`edu-fees-as-rent-ok`); no fee-disclosure statute (battery 24) |
| shutdown-rent-protection | CA | Battery 25: no tenant shutdown protection |
| statutory-caps | AE | No deposit, late-fee or rent cap; emergency 10% limit only (`edu-rent-increases-ok`) |
| subsidy-late-fee | NA | No statute on late fees for subsidy portions |
| term-change-notice | AE | Rules changes: § 41-126 (`rules-ok`); no general change-notice statute |
| unpaid-damages-interest | NO | Legal rate § 15-266 (6% absent contract); agreed-rate limits unread (§6.1) |
| veterans-incentive | NA | No such program in Title 41 |
| deposit-cost-schedule | NA | No pre-set charge rule; deductions are actual damages (§ 41-115(B)) |
| deposit-installments | NA | No installment statute (Title 41 read whole) |
| deposit-surrender-notice | NA | No statute conditioning refund on a surrender notice; the tenant's written demand is the statutory condition (`security-deposit-return-ok`) |
| dv-deposit-timing | AE | DV termination 'without penalty' (§ 41-111(F)); deposit returned under § 41-115 (`edu-dv-protections-ok`) |
| expedited-deposit-disposition | NA | No such procedure |
| fee-in-lieu-of-deposit | NA | No statute; a returnable sum is a deposit (§ 41-102(2)) |
| holding-deposit | AE | `edu-no-application-fee-rule-ok` (battery 37) |
| inspection-notice-penalty | NA | No inspection statute (battery 34) |
| nonrefundable-deposit-notice | AE | No nonrefundable-deposit statute (battery 36); a nonrefundable fee is rent (`edu-pet-deposit-ok`, `edu-fees-as-rent-ok`) |
| nonrefundable-deposit-separate-notice | AE | As above |
| security-deposit-nonwaiver | AE | § 41-113(A)(1) bars waiving any right under the act (`edu-prohibited-lease-terms-ok`) |
| security-deposit-standards | NA | No rule on differing deposit standards |
| utility-deposit-return | NA | Utility deposits are utility-regulated, not landlord matters |
| bed-bug-cooperation | AE | `edu-no-bed-bug-rule-ok` (battery 56) |
| children-occupancy | AE | Familial status protected (`edu-fair-housing-ok`); occupancy presumption excludes children born during the lease (`edu-occupancy-ok`) |
| cold-weather-vacate-notice | NA | No winter-vacancy statute (Title 41 read whole) |
| construction-liens | NL | Mechanic's lien law (Title 42) not read beyond § 42-91's heading; no lease rule found in Title 41 |
| dv-qualifying-documents | AE | § 41-111(F) requires a protective order (`edu-dv-protections-ok`) |
| extended-absence-notice | CA | Battery 39: 0 hits |
| guest-rights | AE | `guest-policy`, `edu-unauthorized-occupant-ok` (§ 41-117(B)) |
| municipal-utility-lien | NL | Municipal utility liens (Title 11) not searched beyond battery 45; no landlord rule found |
| prohibited-acts-renter | AE | § 41-127 tenant duties (`edu-tenant-duties-ok`) |
| purpose-limitation | AE | § 41-129(A) (`residential-use-only`) |
| utility-interruption-submeter | NA | No submeter interruption statute (battery 45) |
| utility-transfer | NA | No statute |
| waterbed | CA | Battery 38: no landlord waterbed rule (`common-area-use`) |
| alt-housing | AE | § 41-121(C) substitute housing for essential services (`edu-tenant-repair-remedies-ok`) |
| appliances-excluded | AE | § 41-118(A)(3) covers appliances supplied (`appliances-included`) |
| balcony-inspection | NA | No statute |
| confirmed-absences-habitability | AE | Habitability absences recorded per topic (mold, radon, bed bugs, CO, rekey) |
| designated-repairer | NA | No statute; § 41-121(B) repair by the tenant 'in a workmanlike manner' |
| disability-accommodation | AE | § 25-1452(A)(16) (`edu-fair-housing-ok`) |
| disaster-duties | AE | Casualty § 41-122 (`edu-casualty-ok`); emergency price limit (`edu-rent-increases-ok`) |
| double-letting | CA | Battery 112: 0 hits |
| emergency-contact | AE | `tenant-death-contact-ok` (§ 41-130.1) |
| fire-code-standard | NL | Adopted fire codes and State Fire Marshal rules not read (rule 21) |
| frozen-standard-incorporation | NA | § 41-118 incorporates no code edition |
| habitability-materiality | AE | § 41-121(A) 'materially affects health and safety' (`edu-tenant-repair-remedies-ok`) |
| habitability-modifiable | AE | Not waivable (§§ 41-103(B), 41-113(A)(1)); § 41-118(B) separate writing (`edu-landlord-duties-ok`) |
| habitability-presumption | NA | No presumption statute |
| health-district-rental-rules | NL | Local health rules not researched (rule 3) |
| heating | AE | § 41-118(A)(5) reasonable heat (`edu-landlord-duties-ok`) |
| landlord-breach-remedy | AE | § 41-121 (`edu-tenant-repair-remedies-ok`) |
| other-landlord-facilities | AE | § 41-118(A)(1)-(4) (`edu-landlord-duties-ok`) |
| part5-nonwaivable | AE | § 41-113(A)(1) (`edu-prohibited-lease-terms-ok`) |
| pool-safety | CA | Battery 43: 10 sections, none a rental disclosure (snippets) |
| portfolio-thresholds | NA | No Oklahoma rule turns on units owned except the fair-housing exemption (`edu-fair-housing-ok`) |
| quiet-possession | AE | Battery 105: § 41-127(6), § 41-132(D) peaceful enjoyment (`no-disturbance`); no statutory landlord covenant |
| rent-demand-bar | NA | No statute |
| rent-reporting | CA | Battery 107: no rental rule |
| repair-cost-termination | AE | § 41-121(A) termination (`edu-tenant-repair-remedies-ok`) |
| repair-escrow-exemption-notice | NA | No rent-escrow statute |
| repair-notice | AE | § 41-125 tenant reports defects (`landlord-maintenance`, `edu-tenant-repair-remedies-ok`) |
| security-devices | CA | Battery 42 (`keys`) |
| senior-housing-work-card | NA | No program |
| stove-refrigerator | AE | `appliances-included` |
| subsidy-habitability-proration | NA | No statute |
| substandard-property-receivership | NL | Municipal abatement (Title 11) not read for receivership |
| telecom-access | CA | Battery 46: 0 hits |
| utility-allowance-cap | NA | No statute |
| utility-apportionment | AE | § 17-161.1 resale limit (`edu-utility-resale-ok`); no ratio-billing statute (battery 45) |
| utility-disclosure-attachment | AE | § 17-161.1(B) bill disclosure (`edu-utility-resale-ok`) |
| utility-landlord-account | AE | § 41-121(C) essential services (`utility-service-continuity`) |
| utility-shutoff-statute | CA | Battery 106: no tenant-notice shutoff statute in Titles 11, 17, 27A, 52, 82; Corporation Commission rules unread |
| key-control-policy | AE | `keys` (battery 42) |
| periodic-services-entry | AE | § 41-128 (`edu-entry-ok`) |
| casualty-and-mitigation-waivable | AE | Not waivable (§ 41-113(A)(1)); `casualty-termination-ok` keeps tenant rights |
| drug-free-housing-addendum | NO | Federal HUD form; `criminal-activity-ok` covers § 41-132(D) |
| dv-lockchange | CA | Battery 42; § 41-113.3 has no lock rule (`keys`) |
| environmental-event-termination | AE | Casualty only (`edu-casualty-ok`) |
| eviction-hardship-stay | NA | No statute (Title 12 §§ 1148.x read whole) |
| eviction-service-party | AE | § 12-1148.5 service (`edu-eviction-process-ok`) |
| expedited-criminal-eviction | AE | § 41-132(D) immediate termination (`criminal-activity-ok`); no special court track |
| forfeiture-redemption | NA | No redemption statute; § 12-1148.10B cure only for minimum-services claims |
| guarantor-renewal | CA | Battery 108: no rental guaranty rule |
| holdover-rate | NO | § 15-215 (§6.1) |
| homestead-waiver | NO | Batteries 83, 89 (§6.1) |
| infirmity-termination | CA | Battery 113: no tenant termination for infirmity |
| landlord-remedies-termination | AE | §§ 41-131, 41-132 (`edu-nonpayment-notice-ok`, `edu-noncompliance-notice-ok`) |
| lockout-for-rent-delinquency | NO | Barred (§ 41-123) |
| notice-to-quit-waiver | NO | Barred (§ 41-113(A)(1)) |
| owner-move-in-reservation | NA | No just-cause regime (`edu-for-cause-eviction-ok`) |
| possession-bond | NA | No statute |
| redemption | AE | § 12-1148.10B (`edu-eviction-process-ok`) |
| rent-into-court-counterclaim | AE | Rent into court on appeal, § 12-1148.10A(F) (`edu-eviction-process-ok`) |
| social-security-defense | NA | No statute |
| statutory-early-termination | AE | DV (`edu-dv-protections-ok`), SCRA (`edu-servicemember-rights-ok`) |
| subsidized-inspection-refusal | NA | No statute |
| tenancy-at-will | AE | § 41-111(A) (`periodic-tenancy-notice-ok`) |
| adverse-proceeding-notice | AE | § 41-38 (`tenant-forward-proceedings-ca`) |
| automatic-renewal | AE | No lease auto-renewal statute; § 15-222 covers goods only; § 41-35 renewal on acceptance of rent (`edu-waiver-by-acceptance-ok`); battery 86 |
| confirmed-absences-misc | AE | Absences recorded per topic |
| confirmed-absences-outside-title | AE | Absences recorded per topic (§17) |
| disaster-displaced-guests | NA | No statute |
| dv-confidentiality | NA | No landlord confidentiality duty in § 41-113.3 or § 41-111(F) |
| dv-protection-order-chapter-moved | NA | Numbering quirk of another state |
| landlord-liability-insurance | NA | No statute |
| law-enforcement-cooperation | AE | § 41-113(A)(6) right to summon police (`edu-emergency-assistance-ok`) |
| lease-completeness | NA | No blank-space statute (§ 15-753 list read) |
| lease-notice-initial-requirement | NA | No statute |
| lease-term-limitation | NA | No maximum residential term; statute of frauds and recording only (`edu-statute-of-frauds-ok`) |
| notice-to-vacate-additional-terms | NA | No statute |
| plain-language-consumer-statement | CA | Batteries 103/115: plain-language rules only for OBA eviction forms and debt waivers |
| rent-receipt-anti-waiver | AE | `edu-no-rent-receipt-rule-ok` |
| rental-inspection | AE | Registration barred (§ 11-22-110.1); local inspection codes flagged (`edu-rent-control-ok`) |
| renters-insurance-rules | CA | Battery 87: no statute (`tenants-property-insurance-ks-oh-ca`) |
| statutory-forms | AE | OBA eviction affidavit and summons (§§ 12-1148.15, .16); no lease form (`edu-eviction-process-ok`) |
| tenant-insurance-claims | NA | No statute |
| tenant-records | NA | No statute |
| tpa-sunset | NA | California program |
| service-animal-denial-penalty | AE | § 41-113.1, § 25-1452(A)(13)-(14), § 25-1506.3 remedies (`edu-assistance-animals-ok`, `edu-fair-housing-ok`) |
| ev-charging-end-of-tenancy | CA | Battery 68 (`edu-no-ev-charging-rule-ok`) |
| ev-charging-requirements | CA | Battery 68 |
| ev-charging-shared-area | CA | Battery 68 |
| parking-rules-notice | NA | No parking-rules notice statute; towing § 47-954A (`edu-towing-ok`) |
| unbundled-parking | NA | No statute |
| portable-solar | CA | Battery 69: 2 sections, neither a tenant or landlord rule (snippets) |
| religious-cultural-display | CA | Battery 67 (`edu-no-display-rights-rule-ok`) |
| smoke-drift-waiver | NA | No smoke-drift statute |
| snow-removal | AE | **Taylor:** separate writing under § 41-118(B) (`tenant-repair-agreement-ok`, `edu-tenant-maintenance-agreement-ok`) |
| tenant-security-cameras | CA | Battery 104: 0 hits |
| defective-drywall-disclosure | NA | No statute |
| dv-eviction-protection | AE | § 41-113.3 (`edu-dv-protections-ok`) |
| electric-submetering-disclosure | AE | § 17-161.1 (`edu-utility-resale-ok`) |
| foreclosure-disclosure | CA | Battery 74 (`edu-no-foreclosure-tenant-rule-ok`) |
| hazardous-contamination-disclosure | AE | Meth only (`meth-disclosure-ok`); battery 53 |
| inspection-condemnation-disclosure | NA | No statute |
| lead-safe-certification | CA | Battery 57: Title 27A lead-based paint sections cover abatement and contractor work (snippets, not read whole); no rental certification or disclosure duty found (`lead-based-paint`) |
| meter-conservation-charge | NA | No statute |
| military-air-zone-disclosure | CA | Battery 60: no disclosure statute; SB 893 restricts foreign principals from July 1, 2027 (`edu-foreign-ownership-ok`) |
| ordnance-demolition-meter-disclosures | NA | No statute |
| pest-control-notice | CA | Battery 111: 0 hits |
| private-well-testing | NA | No statute |
| prop65-rental-warning | NA | California program |
| property-tax-rent-disclosure | NA | No statute |
| protected-class-inquiry-ban | AE | § 25-1452(A)(3) advertising and statements (`edu-fair-housing-ok`) |
| required-disclosures | AE | §4 layout table |
| sex-offender-disclosure | CA | Battery 50: no landlord disclosure duty (`edu-sex-offender-residency-ok`) |
| sfr-occupancy-disclosure | NA | No statute |
| steam-radiator-covers | NA | No statute |
| tenant-rights-statement | NA | No state-issued statement; the OREC 'Landlord/Tenant You Need to Know' attachment is a broker form, not a statutory duty |
| tpa-exemption-notice | NA | California program |
| tpa-notice | NA | California program |
| truth-in-renting | NA | New Jersey program |
| window-guards | CA | Battery 109: 0 hits |
| condemned-premises-rent-bar | NA | No statute |
| confession-of-judgment | AE | § 41-113(A)(2) (`edu-prohibited-lease-terms-ok`); battery 82 |
| employee-screening | NA | Not a landlord-tenant subject |
| eviction-penalty-clause-ban | AE | § 41-113 list (`edu-prohibited-lease-terms-ok`) |
| exculpatory-clauses | AE | § 41-113(A)(4) (`edu-prohibited-lease-terms-ok`; variants, §2.2) |
| fire-sprinkler-duty | CA | Battery 110: 0 hits |
| governmental-fines | NA | No statute |
| hoa | AE | `hoa-compliance` (battery 95) |
| jury-waiver | NO | § 12-591 (§6.1) |
| landlord-registration | AE | Municipal registration barred (§ 11-22-110.1; `edu-rent-control-ok`) |
| lease-content-requirements | AE | § 41-116 and § 41-113a (§4) |
| plain-language | CA | Batteries 103/115 |
| tenant-right-to-organize | NA | No statute |
| translation-duty | CA | Batteries 85/114: no lease translation rule |
| unconscionability | AE | § 15-761.1(B), § 23-97 (`edu-consumer-protection-ok`, `edu-penalties-liquidated-damages-ok`); battery 79 |
| written-notice-required | AE | §§ 41-111, 41-131, 41-132 written notices (`edu-notice-service-ok`) |

### 18.3 'Topics no state has a row for yet'
The reference (2,014 active rows, 306 topics) no longer carries that list; every one of its 306 topics has rows in at least one state, and each is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** batteries 96-102: three Title 41 form rules (§§ 41-113a, 41-116 'prominently'; § 41-118(B) conspicuous separate writing), handled in §4; no first-page or competing-placement rule.
- **41 just cause:** none; a definite term ends without notice unless agreed (§ 41-111(C)); `edu-for-cause-eviction-ok` keyed `for-cause-eviction`, with the DV and fair-housing limits.
- **42 required text in a shared clause:** none forced into a shared clause; the § 41-116 and § 41-113a texts live in their own rows.
- **43 cure promises:** `default-by-tenant-ks-ne` carves out no-cure grounds ('except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure'), reaching § 41-132(C)-(D); Oklahoma's nonpayment notice is statutory (§ 41-131), so the rent limb's written notice adds nothing by contract; `criminal-activity-ok` puts its no-cure sentence in its own paragraph controlling every other provision; `early-termination-ks` used instead of the base's separate cure.
- **44 terms turned into duties:** § 41-118(A)(3) makes appliances 'supplied or required to be supplied' landlord duties, so `appliances-included` creates duties (noted on the row); § 41-121(C) essential services the landlord must supply.
- **45 electronic notices:** UETA has no eviction exclusion but requires agreement (§ 12A-15-105(b)) and keeps statutory delivery methods (§ 12A-15-108(b)); termination notices follow § 41-111(E) (`edu-electronic-records-ok`).
- **46 lease as the notice:** § 41-116 and § 41-113a must be in the rental agreement itself; § 41-130.1(A) statement fits in the lease; no statute lets the lease serve as a notice to quit.
- **47 knowing-use penalties:** none for prohibited lease terms (§ 41-113(B) only makes them unenforceable); the Consumer Protection Act's unconscionability penalty (§ 15-761.1(B)) applies only if the Act reaches leases (unread).
- **48 separate documents:** § 41-118(B) → `tenant-repair-agreement-ok` as its own document (Taylor); no other.
- **49 collection costs:** no statutory ban on 'costs and expenses'; § 41-113(A)(3) bars attorney-fee promises; `default-by-tenant-ks-ne`'s 'reasonable costs and expenses' noted as a case-law question.
- **50 'the lease controls':** § 41-111(C) (definite term ends without notice 'unless otherwise agreed': library uses `holdover-ca`); § 41-111(D) ('unless the parties otherwise agree': month-to-month holdover); § 41-115(F) (deposit as last rent: default kept); § 41-117(B) (occupancy limits: `permitted-occupants`, `guest-policy-day-limit`); § 41-119(C) (sale and manager release 'unless otherwise agreed': left to the statute, `edu-deposit-on-sale-ok`); § 41-129(A) (use as abode 'unless otherwise agreed': `residential-use-only`); § 41-130.1(D) (death procedure: clause follows (C)); § 41-109(B) (rent time and place as agreed: `rent-payment`). Each made on purpose.
- **51 plain language and consumer contracts:** no plain-language statute for leases (batteries 103/115); the Consumer Protection Act's list has no blank-space or copy item (§ 15-753) and its reach to leases is unread (`edu-consumer-protection-ok`); no copy duty (battery 92); formatting battery run before delivery.
- **52 exculpation:** § 41-113(A)(4) voids exculpation, limitation and indemnification; ks-oh-ca / ks-oh variants used; base `pet-policy` indemnity dropped in `pet-policy-ok`.
- **53 figures vs shared clauses:** `holdover` ('maximum … for each day' vs § 41-111(D)), `possession-delay` (30 days vs § 41-120(A)), `default-by-tenant` (fee promise), `returned-payments` (ceiling-only) and `surrender-end-of-term` overridden; `landlords-access` (24 hours = one day), `late-fee`, `early-termination-ks`, `keys` and `security-deposit-use` checked with no Oklahoma figure in conflict; no deposit cap to enforce.

## Proposed SOP changes
1. Run a heading-only screen alongside each absence battery, because an Oklahoma section can carry the term of art only in its heading ('Rent control' in § 11-14-101.1, whose text says 'regulates the amount of rent'); batteries 9 and 11 missed it until battery 18.
2. Write synthetic positives with the statute's own verbs and number style, and prefer a real saved section as the positive wherever one exists; Oklahoma batteries 11, 84 and 103 passed synthetic positives but missed real text ('regulates the amount of rent', 'one (1) year', 'plain and understandable language').
3. Never use a `[^.]` proximity window across text that may contain dollar amounts or abbreviations; '$25.00' and 'Okla.' break it (batteries 19 and 27).
4. When an enrolled act is extracted with pdf.js, read underline and strike-through from the PDF's drawing operations (filled lines just below the baseline are underlines, lines through the x-height are strike-throughs) before describing what an amendment adds; Oklahoma's HB 3431 text reads as one sentence until the marks are recovered.
5. After any automatic citation-prefix expansion, list every expansion with its inferred title and review it by hand; in Oklahoma eight bare cites inherited the wrong title from the previous full cite.

## Proposed topic questions
1. `foreign-ownership`: Does the state's alien land law, or a recent amendment, bar non-resident aliens or foreign adversaries from leasing land, and is a residential tenancy a lease of 'land'?
2. `tenant-repair-agreement`: Is the separate-writing rule for tenant repairs and chores limited to single-family residences, or does it reach every dwelling unit?
3. `sex-offender-occupancy`: Does the state make it a crime to knowingly lease a dwelling where two registered offenders live together?
4. `cannabis`: Does the medical marijuana law let a patient grow on rented property only with the owner's written permission?
5. `tenant-screening`: Does a statute let tax-credit property owners set lease conditions on prior felony convictions?
6. `rent-increase-notice`: Does an emergency price-gouging statute cap rent for dwelling units during and after a declared emergency?
7. `security-deposit-return`: Is the refund conditioned on a written demand by the tenant, with the deposit reverting to the landlord if none is made in time?

**Sync note (Claude Code, 2026-10-01):** this pass started from the 2,137-row library (ba2ab63, the Indiana sync); since then the AZ and WY retros and the shared `appliances-included` edit landed. Merged with `merge-delta.py --base ba2ab63`: 51 tagged rows took only the OK tag, the OK note segment and `last_checked`; 93 new rows; 2,262 rows. The delta had appended each `OK:` note with a space instead of the library's " | " separator, so the merge tool first read it as an edit to the previous state's segment; the separator was corrected in a copy (each row checked: base notes unchanged, OK text purely appended). Of the five tagged rows that moved since the base, only `appliances-included` changed text (now "as provided in this Lease and applicable law"); the OK note (§ 41-118(A)(3)) still holds. Twenty new rows used groups outside the app's lists and were regrouped: `lihtc-felony-screening-ok` "Lease Basics" → Default & Termination (`CLAUSE_GROUPS` is closed), and the education rows "Fair Housing" and "Prohibited Terms" → Compliance & Prohibited Terms, "Required Disclosures" → Disclosures, "Rules & Use" → Rules & Regulations, "Lease Basics" and "Notices & Communication" → Notices & General, "Utilities" → Tenant Responsibilities. Under SOP rule 54 as amended 2026-10-01, the declined contract interest rate (§6.1) got `edu-legal-interest-ok` (Okla. Stat. tit. 15, § 266, read section-open at sync). Statute spot-check, 5 of 5, from the oklegislature.gov whole-title file `os41.rtf` (the shell reached it): § 41-113(A)-(B), § 41-115(B), § 41-118(A)-(B), § 41-131, § 41-132(A)-(B). OK 145 active (69 clauses, 76 education). Citations file built from the OK notes (145 rows). Legal watch: OK config (117 sections, `"41 O.S." AND "Section 115"` queries) and `legal-watch-ok.yml`, held until after December 27 (first run 2027-01-27). The five "Proposed SOP changes" became SOP 1.17 (all [Fwd]); the seven topic questions were added. Consistency check (topics in 18 or more states that OK lacks): only `snow-removal` (26 states), absent on purpose: Taylor's §6.2 decision moves chores into the separate § 41-118(B) agreement (`tenant-repair-agreement-ok`; `edu-tenant-maintenance-agreement-ok` sits under `landscaping-irrigation`).
