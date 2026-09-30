# Tennessee — lease-clause decision log (state #18)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12, §13: Tenn. Code Ann. Title 66 Chapters 7 and 28 and Title 29 Chapter 18 read whole, section by section, from Justia's host copy of the 2025 Tennessee Code with every history line; every 2025 and 2026 public chapter screened in full text; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Tennessee REALTORS® Form RF421, 'Residential Lease Agreement for Single Family Dwelling', 10 pages, 'Version 01/01/2018', still listed in the 2025 Tennessee REALTORS forms index) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 85 scenarios, Claude-generated, SC §16 and NC §16 models plus Tennessee-specific, including 12 Act-county / other-county pairs) |
| Gap-discovery source 4 — outside-title search | Done (§17: LexisNexis Tennessee Code Unannotated free public access, terms-and-connectors search of the whole code, 66 searches including a control term at start and end; outside-title sections read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC) is closed. No re-audit of any completed state is planned. Targeted work on a specific row is welcome (a scalpel, not a hammer); this pass changed no other state's row except by adding a `TN` tag and a `TN:` note.

> **COUNTY-LAYER PILOT — GUINEA PIG FLAG (Taylor, 2026-09-28).** Tennessee is the test case for the future county/local layer across all states ("I eventually want to do county/local level too across the board, so this would be a good guinea pig"). Every TN row's notes open with a `TN-SCOPE:` marker and carry the pilot note; §13 records the design, and §14 the product flag.

**Date:** 2026-09-28 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why).
**Scope:** Tennessee state law only. Municipal ordinances (Metro Nashville-Davidson, Memphis, Knoxville, Chattanooga and others) out of scope, flagged where met, not resolved (instruction 20). State statutes that reach only named or population-bracketed counties and cities are recorded as the county layer (§13), flagged, not resolved. Short-term rentals (Tenn. Code Ann. §§ 13-7-601 to 13-7-606) out of scope. Excluded from the Act and recorded, not researched: institutional residence, contract-for-sale occupancy, transient lodging, condominium and co-op owners, agricultural premises, and public housing where federal rules conflict (Tenn. Code Ann. § 66-28-102(c)-(d)). Deprioritized: mobile home parks (no park tenancy act located).
**Input CSV:** `lease-clauses.csv`, **1,244 rows, 16 columns**; active counts AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TX 135, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids, no blank status, no dangling `supersedes`, every row 16 fields, CRLF. One TN row: the dormant `late-fee-limit-tn` (inactive, UNVERIFIED). Outputs folder was empty at start (instruction 43).
**Output CSV:** `lease-clauses-TN-sync.csv`, **1,320 rows, 1,287 active. TN 129 active: 76 lease clauses (52 tagged shared rows + 24 Tennessee rows), 53 education; all 129 VERIFIED.** Every other state's active count unchanged.

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **Tenn. Code Ann. Title 66 Chapter 28 (Uniform Residential Landlord and Tenant Act) whole; Title 66 Chapter 7 (Landlord and Tenant, general) whole; Title 29 Chapter 18 (Forcible Entry and Detainer) whole**, section by section in the built-in browser from Justia's host copy of the 2025 Tennessee Code (the official code is published by LexisNexis), each with its history line. Also read section-open: Tenn. Code Ann. §§ 4-21-601, 4-21-602, 6-54-511, 13-21-301, 13-21-302, 13-21-311, 13-21-314, 15-1-101, 29-3-101, 36-3-601, 37-1-415, 39-16-304, 39-17-118, 40-29-108, 47-9-102 (definitions), 47-9-108, 47-10-103, 47-10-105, 47-10-107, 47-29-101 to 47-29-103, 47-50-112, 55-5-122, 66-5-207, 66-27-123, 66-27-507 (part), 66-31-102, 66-31-107, 67-6-205 (part), 68-102-151, 68-120-112, 68-131-401 to 68-131-406, 68-212-501 to 68-212-508, 68-221-620. Read by title or opening text only, and labelled so: §§ 39-17-1313, 53-11-452, 66-2-301 to 66-2-308, 13-6-106. |
| County scope (the centre of this pass) | **Settled with Taylor: two versions where the lease wording must differ (§6 decision 1, §13).** The Act covers 17 counties by 2010 census, frozen (§13.1). Three lease pairs; four rules enacted twice so they apply statewide; every row scope-marked. |
| Step 1 — tag first | **Done.** 52 shared rows tagged TN (§2.1). 14 bases not tagged: TN override or variant instead (§2.2). Every other state-specific row screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new TN rows | 24 TN lease clauses (one of them the rewritten dormant row) and 53 education rows (§3). |
| Instruction 24 families | **Both closed, by hand:** `security-deposit-return-tn-act` / `-tn-other` (pair; the parent `security-deposit-return` is not tagged); `assistance-animal-accommodation-tn` (override; Tenn. Code Ann. §§ 66-7-111, 66-28-406). |
| Instruction 27 | **No active TN row has a blank status**; all 129 VERIFIED. |
| Instruction 33 | **Checked.** Tennessee's no-cure routes are non-remediable breaches (14 days) and the 3-day violence, danger and unauthorized-occupant termination in Act counties (Tenn. Code Ann. §§ 66-28-505(a)(3), 66-28-517), and the 3-day violence and drug termination elsewhere (§ 66-7-109(d)). The shared `default-by-tenant` carve-out preserves both; it was kept (§2.1). The shared `early-termination` (10-day cure) was not tagged; `early-termination-ks` used. |
| Instruction 44 | **Checked.** No Tennessee notice statute makes a lease-designated delivery method mandatory. Tenn. Code Ann. § 66-28-106(b) requires notice to the address in the lease, which `notices` supplies. |
| Instruction 47 | **Checked - no exclusion.** Tennessee's UETA excludes only wills, testamentary trusts and most UCC articles (Tenn. Code Ann. § 47-10-103(b)); in Act counties the lease e-mail address is a statutory notice route (§ 66-28-108) - `electronic-notice-tn`. |
| Instruction 48 | **Hit (reverse shape).** The lease may WAIVE the nonpayment notice in 12-point bold (Tenn. Code Ann. § 66-28-505(b)); `nonpayment-notice-waiver-tn` overrides the shared `default-by-tenant` written-notice sentence. |
| Instruction 49 | **Hit.** Willful use of a lease with known-prohibited terms gives actual damages (Tenn. Code Ann. § 66-28-203(b)); shared `pet-policy`, `parking`, `storage-space`, `tenants-property-insurance`, `services-utilities-provided` and `late-fee` not tagged. |
| Instruction 50 | **Checked.** Justia prints the 2025 code; all 1,142 public chapters of the 114th General Assembly and the seven 2025 First Extraordinary Session acts screened in full text; 2026 Pub. Ch. 606 and 657 cited by chapter and confirmed codified on the LexisNexis site (§1.1). |
| Dormant row | `late-fee-limit-tn` **rewritten and activated** as the Act-county late-fee clause (§5). |
| Named-topic checklist | **Done.** TN column in all 10 state-column tables (69 rows, no blank cell); TN answers appended to the 61-row backfill table; 18 new Tennessee topics; candidate-topic table 248 refs (156 answered, 92 not located, not checked or not researched). Instructions 51-53 added (county-limited acts; population-bracket statutes; rules enacted twice). |
| Layout rules (instruction 28) | **One type-size rule** (12-point bold waiver, Tenn. Code Ann. § 66-28-505(b)), four timing rules, four omission sanctions, a county-attribute builder gap and a collateral-itemization gap (§4). |
| Proof-of-absence | **Run** on the whole code (§17): each confirmed absence has its own row. |
| Kickoff leads | All resolved (§12). **One was wrong:** the late-fee cap is Tenn. Code Ann. § 66-28-201(d), Act counties only, not § 47-50-112. |
| Open for Taylor | **None.** Decisions 1-4 answered 2026-09-28 and applied (§6). |

## 1. Process notes

### 1.1 Source and currency
- **Host copy.** Every Tennessee section was read on Justia's host copy of the 2025 Tennessee Code (law.justia.com/codes/tennessee), which prints each section's history line. Tennessee's official code is published by LexisNexis; the free LexisNexis "Tennessee Code Unannotated" public-access site (advance.lexis.com, terms accepted 2026-09-28 on Taylor's go-ahead) was used for currency and for the whole-code searches (§17). Each row's notes say "Read section-open 2026-09-28 ... from Justia's host copy".
- **Session laws.** Every public chapter of the 114th General Assembly (2025 and 2026, Pub. Ch. 1 to 1142) and the seven 2025 First Extraordinary Session acts were opened as PDFs from publications.tnsosfiles.com and their text searched for Title 66, Title 29 Chapter 18 and landlord-tenant terms. Hits that change landlord-tenant law: **2026 Pub. Ch. 606** (SB 350; tenant firearms; Tenn. Code Ann. §§ 66-7-113, 66-28-206, 66-28-402(a)(7); effective 2027-01-01 for agreements entered into, amended, extended or renewed on or after that date), **2026 Pub. Ch. 657** (SB 1993; no public broadcast of eviction service or execution by private parties; § 29-18-136), **2025 Pub. Ch. 90** (§ 29-18-132, commercial squatters), **2025 Pub. Ch. 424** (human smuggling, § 39-17-118) and **2025 Pub. Ch. 471** (Human Rights Commission restructuring, Title 4 Chapter 21). 2024 acts traced from history lines: ch. 1009 (§ 29-18-135 squatters), ch. 907 (§ 66-28-302 maintenance portal), ch. 755 (§ 29-18-130 appeal bond), ch. 754 (§ 66-28-406).
- **Currency cross-check.** The LexisNexis site already prints the 2026 Pub. Ch. 606 sections (with their 2027 effective date) and § 29-18-136, so the codified text matched the enrolled acts.
- **Census.** 2010 county populations from the Census Bureau's `co-est2019-alldata.csv` (column CENSUS2010POP), fetched in the browser from www2.census.gov (the Census API needed a key) (§13.1).

### 1.2 How the text was obtained, and why research mode was not used
Sections were fetched in the built-in browser from Justia (one helper that opens the section page and returns the text with its history line); session-law PDFs were read with pdf.js in the browser; LexisNexis searches were run in the browser and each hit list recorded (§17). Every statute this pass needed was reachable this way, no host copy blocked twice, and no text conflicted, so none of the three research-mode triggers arose and Taylor was not asked to paste anything.

### 1.3 Section-open vs recall (instruction 22)
Every Tennessee citation in a TN row was read section-open in this session, or read by title or opening text as a search hit and labelled so, or labelled "not read" (§7). Nothing rests on recall.

## 2. Step 1 — tag first

### 2.1 Tagged TN as written (52)
Each tagged row carries a ' | TN: Tagged 2026-09-28 (...)' note with its basis and a `TN-SCOPE:` marker. Summary:

- `rent-payment` - Tenn. Code Ann. § 66-28-201(c) (Act counties): rent payable without demand at the agreed time and place; the weekend/holiday roll is contractual and lawful everywhere.
- `returned-payments` - Tenn. Code Ann. § 47-29-102 caps the handling charge for a check, draft or order dishonored for no account, insufficient funds or a bad signature at $30.00, giving 'maximum amount permitted by applicable law' a referent; no statute for failed ACH or card ...
- `due-at-signing` - No Tennessee statute limits amounts due at signing; no deposit cap (edu-no-deposit-cap-tn).
- `application-of-payments` - 'Rents' means all payments to be made to the landlord under the rental agreement (Tenn. Code Ann. § 66-28-104(13)); rent-first ordering is lawful and leaves the § 66-28-201(d) grace period untouched.
- `security-deposit-use` - Consistent with the Act-county definition of a security deposit (Tenn. Code Ann. § 66-28-104(14): damage beyond ordinary wear and tear and monetary damage from breach) and § 66-28-301(e) (application to unpaid rent); the cleaning limit is more protective ...
- `residential-use-only` - Tenn. Code Ann. § 66-28-404 (Act counties): unless otherwise agreed, the tenant occupies the unit only as a dwelling unit.
- `existing-condition` - No Tennessee move-in inspection or inventory statute (edu-no-move-in-inspection-rule-tn); contractual acknowledgment.
- `permitted-occupants` - No Tennessee occupancy statute; unauthorized occupants may be removed on 3 days' notice (Tenn. Code Ann. § 66-28-517(a)(4); § 66-7-109(f)).
- `no-disturbance` - Tenn. Code Ann. § 66-28-401(5) (Act counties): tenant must not disturb neighbors' peaceful enjoyment.
- `smoking-policy` - No Tennessee statute limits a residential smoking ban.
- `utilities-responsibility` - Utility allocation is contractual; Act-county opt-in utility transfer at utility-transfer-tn (Tenn. Code Ann. § 66-28-521).
- `utility-service-continuity` - Consistent with Tenn. Code Ann. § 66-28-401 duties; no conflicting statute.
- `utility-payment-evidence` - No conflicting statute.
- `acceptable-payment-methods` - No Tennessee payment-method or cash-acceptance statute (LexisNexis '(receipt w/10 rent) or (cash w/10 rent)' 7 hits, none landlord-tenant; TN log §17).
- `tenant-maintenance` - Tenn. Code Ann. § 66-28-401(1)-(4) (Act counties): code duties, clean and safe, waste disposal, no damage or illegal conduct; the 'except ... any condition that applicable law requires Landlord to repair' carve-out preserves § 66-28-304.
- `no-sublet-assign` - No Tennessee sublet or assignment statute; unauthorized subtenants may be removed on 3 days' notice (Tenn. Code Ann. § 66-28-517(a)(4); § 66-7-109(f)); short-term rental rules are out of scope.
- `no-alterations` - No Tennessee tenant-alteration statute; the savings sentence preserves the fair-housing reasonable-modification right (Tenn. Code Ann. § 4-21-601(b)(2)(A)).
- `joint-liability` - No conflicting statute.
- `services-utilities-provided-ks-oh` - Tagged in place of the base because the base's 'Landlord is not liable for any interruption' sentence limits liability, which Tenn. Code Ann. § 66-28-203(a)(2) makes unenforceable in Act counties (with an actual-damages penalty for willful use, § ...
- `utilities-paid-by-landlord` - Contractual; essential-services remedies in Act counties (Tenn. Code Ann. § 66-28-502).
- `appliances-included` - No appliance-exclusion statute (contrast SC § 27-40-440(a)(5)).
- `landlord-maintenance` - Consistent with Tenn. Code Ann. § 66-28-304 (Act counties: codes, fit and habitable, common areas, receptacles) and 'consistent with applicable law'; outside Act counties the duty is contractual.
- `default-by-tenant` - KEPT FOR TN (instructions 32, 33, 48 checked). Cure language is self-limited and satisfies both regimes: Act counties 14-day cure for remediable breaches and non-remediable 14-day and 3-day routes (Tenn. Code Ann. §§ 66-28-505(a), -517); other counties 14 ...
- `surrender-end-of-term` - No just-cause or good-cause renewal law in Tennessee (instruction 31 checked); left property 'to the extent permitted by applicable law' is governed by abandoned-property-tn (Tenn. Code Ann. § 66-28-405) or, after a detainer judgment, § 29-18-127(b).
- `notices` - Tenn. Code Ann. § 66-28-106(b) (Act counties): written notice to 'the last known or designated address contained in the lease agreement' - the clause names the lease addresses and designates no alternative method (instruction 44 checked); Tennessee's UETA ...
- `governing-law` - Consistent; in Act counties the county government may not add landlord-tenant regulations (Tenn. Code Ann. § 66-28-102(e)); 'any additional applicable laws' is self-limited.
- `severability` - No conflicting statute.
- `entire-agreement` - Consistent; later rules bind only with reasonable notice and without substantial modification (Tenn. Code Ann. § 66-28-402(b), Act counties).
- `addendum-precedence` - No conflicting statute.
- `electronic-signatures` - Tennessee UETA: Tenn. Code Ann. §§ 47-10-103, 47-10-105, 47-10-107 (no landlord-tenant exclusion).
- `pet-insurance-requirement` - No pet-insurance statute; assistance-animal exclusion consistent with Tenn. Code Ann. §§ 66-7-111, 66-28-406.
- `assigned-parking-space` - No conflicting statute.
- `parking-vehicle-rules` - Towing 'in accordance with applicable law' is self-limited: Act-county procedures in Tenn. Code Ann. §§ 66-28-518 to -520 (posted 10-day or 24-hour notices; immediate towing only under posted signage); no landlord towing statute elsewhere (edu-towing-tn).
- `keys` - No rekeying statute.
- `guest-policy` - No conflicting statute.
- `guest-policy-day-limit` - No conflicting statute.
- `common-area-use` - No Tennessee tenant flag-display statute (edu-no-flag-display-rule-tn); the savings sentence is harmless.
- `fire-safety-grilling` - No conflicting statute.
- `landscaping-irrigation` - No conflicting statute.
- `snow-removal` - No conflicting statute.
- `inspection-rights` - Tenn. Code Ann. § 66-28-403(a) (Act counties): consent to inspect not unreasonably withheld; ties to landlords-access-tn-act / -tn-other.
- `lead-based-paint` - Federal disclosure applies (42 U.S.C. § 4852d; FEDERAL); Tennessee abatement certification in edu-lead-abatement-certification-tn.
- `hoa-compliance` - No conflicting statute.
- `rental-application-accuracy` - Consistent; the TN REALTORS RF421 (2018) § 8 likewise lets the landlord terminate for misleading or untrue application information (TN log §15).
- `holdover-ca` - Tagged in place of the base holdover (K.3: the base's 'maximum amount permitted by applicable law' has no Tennessee figure). Tenn. Code Ann. § 66-28-512(c) (Act counties): possession, back rent, fees and other lease damages; actual damages if willful. ...
- `tenant-forward-proceedings-ca` - No conflicting statute.
- `storage-space-ks-oh-ca` - Tagged in place of the base: the base's 'Landlord is not liable for damage to or theft of items' exculpates, which Tenn. Code Ann. § 66-28-203(a)(2) makes unenforceable in Act counties (instruction 49).
- `parking-ks-oh-ca` - Tagged in place of the base: the base's 'not liable for damage to or theft of a vehicle' exculpates (Tenn. Code Ann. § 66-28-203(a)(2); instruction 49).
- `tenants-property-insurance-ks-oh-ca` - Tagged in place of the base (exculpation, Tenn. Code Ann. § 66-28-203(a)(2)). Does NOT satisfy the § 66-28-201(a) advisory wording - that is renters-insurance-advisory-tn (REQUIRED).
- `early-termination-ks` - Tagged in place of early-termination: the base's 10-day cure is shorter than the Act's 14 days (Tenn. Code Ann. § 66-28-505(a)(2)) and than § 66-7-109's 14/30 days, and a lease cannot waive Act rights (§ 66-28-201(a)); this variant defers to the default ...
- `possession-delay` - No Tennessee statute on failure to deliver possession beyond Tenn. Code Ann. § 66-28-303 (landlord shall deliver possession, Act counties); the rent abatement and 30-day termination are contractual and lawful.
- `extended-absence-notice-ks` - Text matches Tenn. Code Ann. § 66-28-404 (lease may require notice of an absence over 7 days, on or before the first day) and § 66-28-507(a) (willful failure: actual damages), Act counties; OPT-IN landlord right (instruction 30); contractual in other ...

### 2.2 Not tagged — TN override or variant instead (14 bases)

| Shared row | Why not | TN row used |
|---|---|---|
| `late-fee` | Its non-waiver sentence ('acceptance ... does not waive') collides with Tenn. Code Ann. § 66-28-508 in Act counties; no grace-period or cap wording | `late-fee-limit-tn` (Act) / `late-fee-tn-other` (other counties; shared text) |
| `security-deposit-return` | REQUIRED family; Act counties have their own procedure (§ 66-28-301) | `security-deposit-return-tn-act` / `-tn-other` |
| `landlords-access` | Act entry rules (§§ 66-28-403, 66-28-506, 66-28-507(b)) differ from the shared text; no statute elsewhere | `landlords-access-tn-act` / `-tn-other` |
| `pet-policy` | Unqualified indemnity (§ 66-28-203(a)(2); instruction 49) and a pet-removal entry § 66-28-403(e) does not allow | `pet-policy-tn` |
| `assistance-animal-accommodation` | REQUIRED family; Tennessee statutes set documentation, verification and misrepresentation rules | `assistance-animal-accommodation-tn` |
| `early-termination` | 10-day cure shorter than 14 days (§§ 66-28-505(a)(2), 66-7-109) | `early-termination-ks` (tagged) |
| `holdover` | 'Maximum amount permitted by applicable law' has no Tennessee figure (K.3) | `holdover-ca` (tagged); opt-in `holdover-rate-tn` |
| `parking`, `storage-space`, `tenants-property-insurance`, `services-utilities-provided` | Exculpatory sentences (§ 66-28-203(a)(2); instruction 49) | the `-ks-oh-ca` / `-ks-oh` variants (tagged) |
| `default-by-tenant-ks-ne`, `surrender-end-of-term-mn-nd`, `surrender-end-of-term-ks-ne` | State-specific variants; the shared bases fit Tennessee | `default-by-tenant`, `surrender-end-of-term` (tagged) |

### 2.3 Other states' specific rows screened, not tagged
Every active row whose `states` lacks TN was screened. Tagged from other states' variants: `services-utilities-provided-ks-oh`, `holdover-ca`, `tenant-forward-proceedings-ca`, `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `early-termination-ks`, `extended-absence-notice-ks` (it matches Tenn. Code Ann. § 66-28-404 word for word in substance). Not tagged: every row that restates another state's statute; `holdover-rate-sc` text was copied into `holdover-rate-tn` (same text, TN notes) rather than tagged, so the SC row's notes stay SC-only. The only generic rows left untagged are Colorado's and Minnesota's statute-specific variants.

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type` or `content_type` changed (§9).

### 3.2 New TN lease clauses (24)

| id | Scope | Type | Basis |
|---|---|---|---|
| `abandoned-property-tn` | Statewide text (statute binds Act counties) | RECOMMENDED | Tenn. Code Ann. §§ 66-28-405, 66-28-507(c) |
| `assistance-animal-accommodation-tn` (supersedes `assistance-animal-accommodation`) | Statewide (enacted twice) | REQUIRED | Tenn. Code Ann. §§ 66-28-406, 66-7-111, 66-28-505(f), 66-28-204(c) |
| `casualty-termination-tn` | Statewide text satisfying both regimes | RECOMMENDED | Tenn. Code Ann. §§ 66-28-503, 66-7-102 |
| `dv-lease-termination-tn` | Statewide (enacted twice) | RECOMMENDED | Tenn. Code Ann. §§ 66-28-205, 66-7-112; § 36-3-601 |
| `electronic-notice-tn` | Statewide text (statutory in Act counties; UETA elsewhere) | CONDITIONAL | Tenn. Code Ann. § 66-28-108; § 47-10-103(b) |
| `eviction-service-party-tn` | Statewide | CONDITIONAL | Tenn. Code Ann. § 29-18-115(a)(3) (decision 4) |
| `firearm-carry-rules-tn` | Statewide (enacted twice), from 2027-01-01 | CONDITIONAL | Tenn. Code Ann. §§ 66-7-113, 66-28-206, 66-28-402(a)(7); 2026 Pub. Ch. 606 |
| `holdover-rate-tn` | Statewide | CONDITIONAL | Tenn. Code Ann. § 66-28-512(c); text = `holdover-rate-sc` (decision 3) |
| `household-goods-lien-tn` | Act counties only | CONDITIONAL | Tenn. Code Ann. § 66-28-509; §§ 47-9-102, 47-9-108(e)(2) (decision 4) |
| `landlord-disclosure-tn` | Statewide text (REQUIRED in Act counties) | REQUIRED | Tenn. Code Ann. §§ 66-28-302, 66-28-104(5) |
| `landlords-access-tn-act` (supersedes `landlords-access`) | Act counties (pair default) | RECOMMENDED, cg `tn-urlta-landlord-entry` (default) | Tenn. Code Ann. §§ 66-28-403, 66-28-506, 66-28-507(b), 66-28-513 |
| `landlords-access-tn-other` (supersedes `landlords-access`) | Other counties (pair) | RECOMMENDED, cg `tn-urlta-landlord-entry` | No entry statute; contractual 24 hours |
| `late-fee-limit-tn` (supersedes `late-fee`) | Act counties (pair default); dormant row rewritten | CONSTRAINED, cg `tn-urlta-late-fee` (default) | Tenn. Code Ann. §§ 66-28-201(d), 66-28-508; § 15-1-101 |
| `late-fee-tn-other` (supersedes `late-fee`) | Other counties (pair) | CONSTRAINED, cg `tn-urlta-late-fee` | No late-fee statute; text = shared `late-fee` |
| `nonpayment-notice-waiver-tn` | Act counties only | CONDITIONAL | Tenn. Code Ann. §§ 66-28-505(b), 66-28-201(c); 12-point bold (M.12) |
| `periodic-tenancy-notice-tn` | Statewide text (statute in Act counties; contract elsewhere) | CONDITIONAL | Tenn. Code Ann. § 66-28-512(a)-(b) |
| `pet-policy-tn` (supersedes `pet-policy`) | Statewide | RECOMMENDED | Tenn. Code Ann. §§ 66-28-203(a)(2), 66-28-403(e); text adapted from `pet-policy-sc` |
| `possession-bond-tn` | Other counties only; void in Act counties | CONDITIONAL | Tenn. Code Ann. § 29-18-123; § 66-28-203(a)(1) (decision 4) |
| `renters-insurance-advisory-tn` | Statewide text (REQUIRED in Act counties) | REQUIRED | Tenn. Code Ann. § 66-28-201(a) |
| `security-deposit-return-tn-act` (supersedes `security-deposit-return`) | Act counties (pair default) | REQUIRED, cg `tn-urlta-deposit-return` (default) | Tenn. Code Ann. §§ 66-28-301, 66-28-104(14) |
| `security-deposit-return-tn-other` (supersedes `security-deposit-return`) | Other counties (pair) | REQUIRED, cg `tn-urlta-deposit-return` | No deposit statute; contractual 30-day return |
| `smoke-alarms-tn` | Statewide | RECOMMENDED | Tenn. Code Ann. §§ 68-102-151, 68-120-112 |
| `tenant-repair-agreement-tn` | Statewide text (statute in Act counties) | CONDITIONAL | Tenn. Code Ann. § 66-28-304(c)-(d) |
| `utility-transfer-tn` | Act counties only | CONDITIONAL | Tenn. Code Ann. § 66-28-521 |

### 3.3 New TN education rows (53)

- `edu-child-abuse-investigation-cooperation-tn` - Cooperating with Child Abuse Investigations (STATEWIDE)
- `edu-condo-conversion-notice-tn` - Condominium Conversion (COUNTY-SPECIFIC)
- `edu-criminal-record-negligence-shield-tn` - Renting to Applicants with Criminal Records (STATEWIDE)
- `edu-disability-lease-termination-tn` - Lease Termination for Public Housing Acceptance (Physical Disability) (STATEWIDE)
- `edu-dishonored-payment-remedies-tn` - Bounced Checks (STATEWIDE)
- `edu-drug-nuisance-eviction-tn` - Drug and Prostitution Activity at Rental Property (STATEWIDE)
- `edu-dv-tenancy-protections-tn` - Domestic Abuse: Evicting Only the Perpetrator (STATEWIDE)
- `edu-electronic-notices-tn` - Electronic Notices (STATEWIDE)
- `edu-eviction-process-tn` - Eviction (Detainer) Process (STATEWIDE)
- `edu-fair-housing-tn` - Tennessee Fair Housing Law (STATEWIDE)
- `edu-holdover-remedies-tn` - Holdover Remedies (BOTH REGIMES)
- `edu-immigration-harboring-tn` - Immigration Status and the 2025 Harboring Law (STATEWIDE)
- `edu-landlord-registration-davidson-tn` - Landlord Registration (Metro Nashville / Davidson County) (COUNTY-SPECIFIC)
- `edu-landlord-repair-duties-tn` - Repair Duties and Tenant Remedies (ACT COUNTIES for the duties; STATEWIDE for the explanation)
- `edu-late-fee-rules-tn` - Late Fees in Tennessee (ACT COUNTIES for the cap; STATEWIDE for the explanation)
- `edu-lead-abatement-certification-tn` - Lead Paint: State Abatement Certification (STATEWIDE)
- `edu-local-preemption-tn` - Local Rent Control and Housing Mandates Preempted (STATEWIDE)
- `edu-meth-lab-quarantine-tn` - Methamphetamine Lab Quarantine and Reporting (STATEWIDE)
- `edu-no-application-fee-cap-tn` - No Application Fee Limit (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-cash-receipt-duty-tn` - No Rent Receipt Duty (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-co-alarm-duty-tn` - No Carbon Monoxide Alarm Duty for Rentals (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-deposit-cap-tn` - No Limit on Security Deposit Amount (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-deposit-interest-tn` - No Interest on Security Deposits (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-ev-charging-right-tn` - No Tenant EV Charging Right (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-eviction-record-sealing-tn` - No Eviction Record Sealing (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-flag-display-rule-tn` - No Tenant Flag Display Statute (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-flood-disclosure-tn` - No Flood Disclosure Rule (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-foreclosure-tenant-statute-tn` - No State Foreclosure Protection for Tenants (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-mold-bedbug-disclosure-tn` - No Mold or Bed Bug Disclosure Rule (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-move-in-inspection-rule-tn` - No Move-In Inspection Rule (STATEWIDE)
- `edu-no-pet-fee-limit-tn` - No Limit on Pet Deposits or Pet Fees (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-police-call-protection-tn` - No Right-to-Call-Police Statute (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-radon-disclosure-tn` - No Radon Disclosure Rule (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-rent-increase-notice-tn` - No Rent Increase Notice Rule (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-sex-offender-disclosure-tn` - No Sex Offender Disclosure Rule (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-source-of-income-rule-tn` - No Source-of-Income Protection (STATEWIDE. CONFIRMED ABSENT)
- `edu-no-tenant-death-termination-tn` - No Lease Termination on a Tenant's Death (STATEWIDE. CONFIRMED ABSENT)
- `edu-prohibited-lease-terms-tn` - Lease Terms Tennessee Voids (BOTH REGIMES)
- `edu-rental-inspection-districts-tn` - Rental Inspection Districts and Code-Violation Inspections (COUNTY/CITY-SPECIFIC)
- `edu-retaliation-tn` - Retaliation (ACT COUNTIES ONLY)
- `edu-rules-and-regulations-tn` - Rules and Regulations (ACT COUNTIES ONLY)
- `edu-sale-of-rented-property-tn` - Selling a Rented Property (BOTH REGIMES)
- `edu-security-deposit-rules-tn` - Tennessee Security Deposit Rules (ACT COUNTIES for the procedure; STATEWIDE for the absence of cap and interest)
- `edu-self-help-eviction-tn` - No Self-Help Eviction (BOTH REGIMES, labeled)
- `edu-service-animal-law-tn` - Service and Support Animal Law (STATEWIDE)
- `edu-servicemember-rights-tn` - Servicemember Rights (STATEWIDE. CONFIRMED ABSENT)
- `edu-stigmatized-property-tn` - No Duty to Disclose a Death, Crime or Non-Transmissible Illness (STATEWIDE)
- `edu-tenant-firearms-tn` - Tenant Firearm Rights (from 2027) (STATEWIDE)
- `edu-termination-notices-tn` - Termination Notices for Tenant Default (BOTH REGIMES, labeled)
- `edu-towing-tn` - Towing from Rental Property (ACT COUNTIES for the procedure; STATEWIDE for § 55-5-122)
- `edu-unauthorized-occupant-removal-tn` - Squatters and Unauthorized Occupants (STATEWIDE)
- `edu-urlta-county-scope-tn` - Which Tennessee Landlord-Tenant Law Applies Where (STATEWIDE)
- `edu-water-authority-tenant-form-hamilton-tn` - Water and Wastewater Tenant Form (Hamilton County) (COUNTY-SPECIFIC)

### 3.4 Opt-in landlord rights (instruction 30)
Offered as optional clauses, each limited to where it is valid: waiver of the nonpayment notice (Act counties only), utility-transfer cutoff (Act counties only; § 66-28-521), tenant-repair agreement (statewide text; statutory in Act counties, § 66-28-304(c)), e-mail notices (statewide text; § 66-28-108 in Act counties, the UETA elsewhere), extended-absence notice (`extended-absence-notice-ks`; § 66-28-404 in Act counties), holdover rate, periodic-tenancy notice (supplies a period where no statute does), and on decision 4: a named party for eviction service (statewide; § 29-18-115(a)(3)), an end-of-term possession bond (other counties only; § 29-18-123), and a UCC-perfected security interest in itemized household goods (Act; § 66-28-509). The Act-county landlord casualty termination (§ 66-28-503(b)) is statutory, so it sits inside `casualty-termination-tn` rather than a separate opt-in.

## 4. Layout and placement requirements (instruction 28)

| Rule | Where | Builder gap |
|---|---|---|
| **12-point bold or larger** for the tenant's waiver of the nonpayment notice | Tenn. Code Ann. § 66-28-505(b) | **Addendum M.12**: `nonpayment-notice-waiver-tn` must render in 12-point bold or larger, or the waiver fails and the 14-day § 66-28-505(a) notice is needed. RF421's waiver is one line in its default section; bold was not detectable in the PDF text layer |
| **Timing:** deposit account location told at signing and payment | § 66-28-301(h) | Deposit clause blank for the institution |
| **Timing:** owner, manager and maintenance-contact disclosure at or before commencement, kept current | § 66-28-302(a)-(b) | `landlord-disclosure-tn` blanks |
| **Timing:** rules must be known at signing; later rules need reasonable notice | § 66-28-402 | none |
| **Timing (Hamilton County):** water-authority tenant form completed at lease or renewal and sent within one business day | § 68-221-620 | County layer (education only) |
| **Omission sanction:** no separate account AND no damage list = no deposit retention | § 66-28-301(c) | none |
| **Omission sanction:** knowingly prohibited terms = actual damages | § 66-28-203(b) | none |
| **Omission sanction:** a person who does not disclose becomes agent for service; a nondisclosing manager is a 'landlord' | §§ 66-28-302(c), 66-28-104(5) | none |
| **Omission sanction (Hamilton County):** landlord renting without the form is liable for the tenant's water charges | § 68-221-620 | County layer |
| **County attribute** to pick the pair variant and to hide county-limited clauses | § 66-28-102(a) | **Addendum M flag (§14)**: the three pairs, the Act-only clauses (`nonpayment-notice-waiver-tn`, `utility-transfer-tn`, `household-goods-lien-tn`) and the other-county-only `possession-bond-tn` (which also names the 17 counties in its text as a backstop) |
| **Itemized collateral list** in the lien clause | § 47-9-108(e)(2) | Builder must require a specific list; 'household goods' alone does not attach |

## 5. Dormant row (instruction 21)
`late-fee-limit-tn` (inactive, UNVERIFIED, from an old nationwide pass) said the cap applied in "generally a county with a population over 75,000". That was right about scope but omitted the 2010-census freeze, the rule that the due date counts as day one of the grace period, and the Sunday / legal-holiday (including election-day) roll. **Rewritten and activated** as the Act-county variant of the `tn-urlta-late-fee` pair (default), superseding `late-fee`; the shared non-waiver sentence was dropped because of § 66-28-508 (§2.2). The kickoff lead that the cap sits in § 47-50-112 is wrong: that section is a general rule that signed contracts are enforced as written. Outside Act counties there is no late-fee statute ('late fee' / 'late charge' / 'late payment of rent': 13 hits, only § 66-28-201 for residential), so `late-fee-tn-other` keeps the shared text and `edu-late-fee-rules-tn` explains the difference.

## 6. Decisions for Taylor (all answered 2026-09-28 and applied)

1. **County scope.** Options put: (1) self-limiting single clauses, (2) two versions per county regime. Taylor leaned to (2), asked why I recommended (1), and after a plain-language restatement chose **two versions only where the lease wording must differ**, and asked that Tennessee be flagged as the guinea pig for a future county/local layer across all states. Applied: three pairs, scope markers on every row, the pilot flag (header, §13, §14).
2. **LexisNexis terms.** Taylor said yes to accepting the free public-access terms; used for currency and the whole-code searches.
3. **Holdover rate.** Yes, same as GA/NC/SC: `holdover-rate-tn` (text identical to `holdover-rate-sc`; stronger footing here because § 66-28-512(c) lets an Act-county landlord recover 'any other damages provided for in the lease').
4. **Three statutory landlord options.** Put plainly (service person; end-of-term possession bond that pre-confesses judgment; UCC lien on household goods), with the recommendation to keep all three as education only. Taylor chose **all three**. Applied: `eviction-service-party-tn` (statewide), `possession-bond-tn` (other counties only; void in Act counties by § 66-28-203(a)(1)), `household-goods-lien-tn` (Act counties; itemized list; court process only). Each is CONDITIONAL and carries its risks in its notes (§7 items 1-3).
Also confirmed by default, not asked separately: the Act variant is `is_default` TRUE in each pair (most Tennessee renters live in Act counties); RF421 (2018) as the real lease (no newer copy found).

## 7. Open items and read list (none blocking)
1. `possession-bond-tn`: courts of general sessions do not sit in 'terms' as 1870 circuit courts did, so how to 'expressly name' a term (§ 29-18-123(a)) is unclear; federal due-process case law on cognovit clauses not read; whether the bond excuses § 66-7-109 notices unresolved (the clause is limited to end-of-term holdover).
2. `eviction-service-party-tn`: which act added § 29-18-115(a)(3) not traced (history: 2015 ch. 160, 2018 ch. 670, 2019 ch. 160); service on a named person who has not agreed is untested.
3. `household-goods-lien-tn`: the statutory release duty at lease end limits its value; FTC Credit Practices Rule (16 C.F.R. § 444.2) not read; a contractual security interest outside Act counties not researched.
4. Unclaimed property: 'security deposit' is listed in Tenn. Code Ann. § 66-29-102; how that interacts with the landlord's 60-day retention right (§ 66-28-301(f)) is not resolved.
5. § 8-24-101 (Class 1 and 2 counties for condo conversion, § 66-27-123) not read, so which counties qualify is open.
6. § 71-4-1102 ('permanently and totally disabled', used by § 66-7-110) not read.
7. § 39-16-304 penalty grade not confirmed.
8. §§ 40-35-120 and 40-39-202 (cross-references in the criminal-record shield) not read.
9. Title 4 Chapter 21 Parts 3-5 (fair-housing enforcement, election rights) not read.
10. § 53-11-452 innocent-owner provisions not read.
11. § 13-21-314 city population brackets not matched to named cities.
12. Whether a city (as opposed to the county government) in an Act county may add landlord-tenant rules under § 66-28-102(e).
13. § 39-14-405 (criminal trespass), § 13-6-106 (receiver hit), §§ 66-2-301 to 66-2-308 (foreign parties) read by title only; Title 55 Chapter 16 (abandoned vehicles) and Title 29 Chapter 3 procedure beyond § 29-3-101 not read.
14. Utility-regulator (TPUC) disconnection rules not read.
15. Non-statute citations (instruction 16), all flagged in row notes: federal lead disclosure (42 U.S.C. § 4852d), SCRA, PTFA, VAWA (34 U.S.C. § 12491), Fair Housing Act (42 U.S.C. § 3603(b)(2)), FTC Credit Practices Rule (16 C.F.R. § 444.2); no Tenn. Comp. R. & Regs. rule and no case law is relied on.

## 8. Integrity and screens
- **CSV:** 1,320 rows (1,244 + 76 new); every row has 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair, all states; the three TN pairs share one choice group each with one default); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF as in the input, 106 embedded line feeds as in the input; unchanged rows field-identical. 53 existing rows changed: 52 tagged rows (`states` +TN, an appended ' | TN: ...' note, `last_checked` 2026-09-28) and the rewritten `late-fee-limit-tn`.
- **Counts:** TN 0 active → 129 (76 lease clauses, 53 education; all VERIFIED). Every other state's active count unchanged: AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TX 135, WY 106.
- **Instruction 37 (citation inventory):** every section number in Chapter 28, Chapter 7 and Title 29 Chapter 18 was diffed against the `bodyText` and TN notes of every active TN row. First diff found uncited: §§ 66-28-101, -103, -105, -515, -516, -522, -510, -501(b) and 66-7-101, -103, -105, -108, and most of Chapter 18's procedural sections. Each was added to the row it bears on (`edu-urlta-county-scope-tn`, `edu-termination-notices-tn`, `edu-eviction-process-tn`). Final diff: none uncited.
- **Instruction 11 (citation screen):** every Tennessee cite in TN rows read section-open, or read by title and labelled so, or labelled "not read" (§7).
- **Instructions 19/38:** every row id named in this log, in the TN checklist cells and sections, and in TN row notes exists in the output CSV. Ids named but not TN-tagged are the deliberate "not tagged" references (§2.2) and other states' comparison rows (`holdover-rate-sc`, `pet-policy-sc`, `landlord-lien-tx`).
- **Instruction 14:** every TN addition to a shared row's `notes` is delimited ' | TN: ...'.
- **Kickoff citation format:** every Tennessee code cite in TN row text is written `Tenn. Code Ann. § 66-28-301` style; chained short forms ('-107', '§§ 66-28-504, -511') were expanded to full sections programmatically inside TN text only and then hand-checked. Public chapters ("2026 Pub. Ch. 606") are left unprefixed so the legal-watch tripwire does not read them as sections. **Cross-state check:** no row outside TN, and no pre-existing note segment of a TN-tagged shared row, carries the `Tenn. Code Ann.` prefix (the input had none anywhere).

## 9. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every change to an existing shared row is an added `TN` tag with a `TN:` note, a states-only change under §5a.1.

### 9.1 Flags for Claude Code
**None.** No specific defect was found in another state's row.

## 10. Findings worth Taylor's attention
1. **Tennessee has two landlord-tenant laws.** The full Uniform Act runs in 17 counties (4,061,812 of Tennessee's 6,346,105 people in 2010, about 64%); the other 78 counties have a short general chapter with 14/30/3-day notices and little else. The county list is frozen to the 2010 census, so it will not grow as counties do (Putnam is at 72,321 and stays out).
2. **The late-fee cap is county-limited.** 10% after a 5-day grace period in Act counties; no cap anywhere else. The kickoff's § 47-50-112 lead was wrong.
3. **A lease can waive the nonpayment notice entirely** in Act counties, but only in 12-point bold (Tenn. Code Ann. § 66-28-505(b)). That is a builder formatting field (M.12).
4. **No deposit return deadline anywhere in Tennessee.** Act counties instead use a separate account, a joint move-out inspection with a signed damage list, and total forfeiture if the landlord skips both the account and the list. If a tenant ignores the refund notice for 60 days, the landlord keeps the refund.
5. **Four rules apply statewide because the legislature enacted them twice:** DV early termination, assistance-animal rules, DV-limited evictions, and (from 2027) tenant firearm rights.
6. **From January 1, 2027, no lease or rule may ban a tenant's lawful firearms** (2026 Pub. Ch. 606) - leases signed, amended or renewed from then.
7. **Squatters can be removed by the sheriff without court** (2024), and since 2026 private process servers may not broadcast video of evictions.
8. **County-level rules already in state statutes:** Davidson landlord registration, city rental inspection districts, a Hamilton County water-authority tenant form that makes a landlord liable for the tenant's water bill if skipped, and condo-conversion notice in large counties. These are the first entries for the county layer.
9. **All three optional landlord terms Taylor chose are now in the library**, each with its risk noted; the possession bond is the only confession-of-judgment device in the library and is limited to non-Act counties.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-TN-sync.csv` | 1,320 rows, 1,287 active; TN 129 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-TN.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | TN column in all 10 state-column tables; TN answers in the backfill table; Tennessee sections at the end; instructions 51-53 |

## 12. Kickoff leads — what each turned out to be

| Lead | Finding |
|---|---|
| URLTA scope and exclusions (§§ 66-28-102, 66-28-103) | Counties over 75,000 by the 2010 census, frozen since 2021-07-01 (2021 Pub. Ch. 182 § 2); 17 counties (§13.1). Exclusions in § 66-28-102(c)-(d). § 66-28-103 is liberal construction with law and equity supplementing the Act; good faith is § 66-28-516. County preemption added as § 66-28-102(e) |
| Prohibited provisions | § 66-28-203: no confession of judgment, no exculpation, limitation or indemnity for the landlord's legal liability; unenforceable; actual damages for willful use; no waiver of Act rights (§ 66-28-201(a)); unconscionability (§ 66-28-204); liens (§ 66-28-509) - `edu-prohibited-lease-terms-tn` |
| Security deposits | Act counties: separate account, location told at signing, move-out inspection right with notice, signed damage list, forfeiture if no account and no list, later damage within 30 days / 7 days, refund notice and 60-day retention (§ 66-28-301); no deadline, no itemization deadline, no cap, no interest anywhere - pair plus `edu-security-deposit-rules-tn`, `edu-no-deposit-cap-tn`, `edu-no-deposit-interest-tn` |
| Late fees (10%, 5-day grace, § 47-50-112) | **Wrong citation.** § 66-28-201(d), Act counties only; § 47-50-112 is general contract enforcement (§5) |
| Entry, maintenance, disclosure | Act: consent not unreasonably withheld, listed no-consent entries, showing in the last 30 days on 24 hours' notice if the lease says so (§ 66-28-403); maintenance duties both ways (§§ 66-28-304, 66-28-401); disclosure (§ 66-28-302, 2024 portal amendment). Other counties: no statute |
| Termination notices, periodic notice, holdover, abandonment | Two regimes (§§ 66-28-505, 66-28-517 / § 66-7-109); periodic 10/30 days in Act counties only (§ 66-28-512); holdover damages per lease (§ 66-28-512(c)); abandonment procedure Act-only (§ 66-28-405), post-writ 48-hour rule statewide (§ 29-18-127) |
| Retaliation, self-help, detainer | Retaliation Act-only (§ 66-28-514; protects complaints 'of a violation under § 66-28-301' as enacted); self-help barred both ways (§§ 66-28-504, 66-28-511; §§ 29-18-101 to 29-18-103); detainer procedure statewide (Title 29 Chapter 18) |
| Rent-control preemption (§ 66-35-102) | Confirmed and broader than 'rent control': no local control of rent for private residential or commercial property, no mandatory below-market or inclusionary requirement (including through zoning or permits), voluntary incentives allowed, and a damages action |
| DV and military termination; assistance animals | DV termination statewide (§§ 66-28-205, 66-7-112); no state military termination (federal SCRA); assistance animals statewide (§§ 66-28-406, 66-7-111), misrepresentation a crime (§ 39-16-304) |
| 2024-2026 public chapters | 2024 ch. 1009 (squatters, § 29-18-135), ch. 907 (disclosure portal), ch. 755 (appeal bond), ch. 754 (animals); 2025 ch. 90 (commercial squatters), ch. 424 (harboring), ch. 471 (fair-housing commission); 2026 Pub. Ch. 606 (firearms, 2027) and 657 (eviction video). No fee legislation found |
| Dormant `late-fee-limit-tn` | Rewritten and activated (§5) |

## 13. County scope — the centre of this pass

### 13.1 Which counties the Act covers
Tenn. Code Ann. § 66-28-102(a): 'This chapter applies only in counties having a population of more than seventy-five thousand (75,000), according to the 2010 federal census.' 2021 Pub. Ch. 182 § 2 (read in the enrolled PDF) deleted 'or any subsequent federal census', effective 2021-07-01, so the list is frozen; § 1 added subsection (e) (in those counties the Act 'occupies and preempts the entire field' and the county government may not add to it). 2010 census counts (Census Bureau `co-est2019-alldata.csv`, CENSUS2010POP):

| In (17) | 2010 pop. | | Just out | 2010 pop. |
|---|---|---|---|---|
| Shelby | 927,644 | | Putnam | 72,321 |
| Davidson | 626,681 | | Greene | 68,831 |
| Knox | 432,226 | | Robertson | 66,283 |
| Hamilton | 336,463 | | Hamblen | 62,544 |
| Rutherford | 262,604 | | Tipton | 61,081 |
| Williamson | 183,182 | | | |
| Montgomery | 172,331 | | | |
| Sumner | 160,645 | | | |
| Sullivan | 156,823 | | | |
| Blount | 123,010 | | | |
| Washington | 122,979 | | | |
| Wilson | 113,993 | | | |
| Bradley | 98,963 | | | |
| Madison | 98,294 | | | |
| Sevier | 89,889 | | | |
| Maury | 80,956 | | | |
| Anderson | 75,129 | | | |

### 13.2 What applies statewide
Title 66 Chapter 7 (general landlord-tenant: § 66-7-101 writing for leases over three years; § 66-7-102 casualty surrender; § 66-7-104 and § 66-7-106 blind persons and guide dogs; § 66-7-107 DA-initiated drug and prostitution eviction; § 66-7-109 termination notices, which by its own terms do not apply in Act counties or to rental periods under 14 days; § 66-7-110 termination by a permanently and totally disabled tenant accepted into public housing; plus the four double-enacted rules); Title 29 Chapter 18 (detainer, squatters, post-writ property); § 47-29-101 to § 47-29-103 (bad checks, $30 charge); §§ 68-102-151 and 68-120-112 (smoke alarms); § 4-21-601 (fair housing, adds creed); § 66-35-102 (rent-control preemption); § 40-29-108; § 39-16-304; § 68-212-501 to § 68-212-508 (meth).

### 13.3 Rules enacted twice (so they reach every county)
DV early termination (§§ 66-28-205 / 66-7-112); assistance animals (§§ 66-28-406 / 66-7-111); DV-limited eviction (§§ 66-28-517(g) / 66-7-109(e)); firearms from 2027 (§§ 66-28-206 / 66-7-113). Instruction 53.

### 13.4 The approach, rule by rule (kickoff: 'record which')

| Rule limited to Act counties | Approach | Rows |
|---|---|---|
| Late-fee cap and grace (§ 66-28-201(d)) | **Two versions** | `late-fee-limit-tn` / `late-fee-tn-other` (cg `tn-urlta-late-fee`) |
| Deposit procedure (§ 66-28-301) | **Two versions** | `security-deposit-return-tn-act` / `-tn-other` (cg `tn-urlta-deposit-return`) |
| Entry (§§ 66-28-403, 66-28-506, 66-28-507) | **Two versions** | `landlords-access-tn-act` / `-tn-other` (cg `tn-urlta-landlord-entry`) |
| Nonpayment-notice waiver (§ 66-28-505(b)); utility transfer (§ 66-28-521); household-goods lien (§ 66-28-509) | **Act-only clause**, scope-marked; builder hides it elsewhere (§14) | single rows |
| E-mail notice (§ 66-28-108); tenant-repair agreement (§ 66-28-304(c)) | **One text used statewide**: statutory in Act counties, lawful by contract (and the UETA) elsewhere | `electronic-notice-tn`, `tenant-repair-agreement-tn` |
| Possession bond (§ 29-18-123; void in Act counties) | **Other-counties-only clause**, with the 17 counties named in the text | `possession-bond-tn` |
| Casualty (§ 66-28-503 / § 66-7-102) | **One text satisfying both** | `casualty-termination-tn` |
| Periodic notice (§ 66-28-512) | **One text**: the statute's periods, supplied by contract where no statute applies | `periodic-tenancy-notice-tn` |
| Holdover (§ 66-28-512(c)); abandonment (§ 66-28-405); owner disclosure (§ 66-28-302); renter's-insurance advisory (§ 66-28-201(a)) | **One text used statewide** (lawful and useful everywhere; the statute binds only Act counties) | `holdover-rate-tn`, `abandoned-property-tn`, `landlord-disclosure-tn`, `renters-insurance-advisory-tn` |
| Retaliation, repair duties, rules, towing, prohibited terms, termination notices | **Education, both regimes explained** | `edu-*-tn` |

Pair mechanics: same `topic_key`; the Act variant is `is_default` TRUE; both supersede the shared base; the check found no display collision.

## 14. Addendum M product flag — property county attribute (pilot)
The app tags clauses by state and stores no county. For Tennessee the builder needs one property-level attribute, 'Is the property in one of the 17 URLTA counties?' (or the county itself), to (a) pick the pair variant in the three `tn-urlta-*` choice groups, (b) show the Act-only clauses only in Act counties, and (c) show `possession-bond-tn` only outside them. Until then the Act variant is the default and each Act-only clause says so in its title. This is the same shape as Colorado's for-cause-eviction setting, and it is the first concrete requirement for the county/local layer Taylor wants across all states: the same attribute would carry Davidson registration, Hamilton's water form, rental inspection districts and, later, municipal ordinances. Taylor decides whether and when to build it.

## 15. Real-lease comparison (gap-discovery source 2)

**Lease:** Tennessee REALTORS® Form RF421, 'Residential Lease Agreement for Single Family Dwelling', 10 pages, 'Copyright 2014 © Tennessee Realtors®, Version 01/01/2018'. Copy on freeforms.com (made fillable by that site; uploaded 2020-02); the 2025 Tennessee REALTORS forms index still lists RF421 (and RF422 for a broker acting as property manager). Searches for a 2022-2026 edition found none. Read in the built-in browser with pdf.js.

### 15.1 Provision map

| RF421 section | Library row(s) | Note |
|---|---|---|
| 1 Property, included and third-party items, fuel | `appliances-included`, `existing-condition` | |
| 2 Term; rent without notice or demand; 5-day grace counting the due date; Sunday, legal holiday or election day rolls to the next business day; late charge never over 10%; returned-check charge; tenant waives notice and demand | `rent-payment`, `late-fee-limit-tn`, `returned-payments`, `nonpayment-notice-waiver-tn` | Election-day roll matches § 15-1-101 - adopted in `late-fee-limit-tn` |
| 3 Deposit: holder, separate account and bank named, notice if moved; uses; inspection notice and timing; no-show waiver; signed list conclusive; dissent in writing; forfeiture; later damage 30/7 days; refund notice, 60 days then retain | `security-deposit-use`, `security-deposit-return-tn-act` | Mirrors § 66-28-301 closely |
| 4 Repairs: acknowledgment; checkbox allocation; landlord repair after written notice; 14-day tenant repair or landlord bills as rent; negligence repairs | `tenant-maintenance`, `landlord-maintenance`, `tenant-repair-agreement-tn` | The 14-day bill-as-rent rule is § 66-28-506 (education); the allocation is a § 66-28-304(c) agreement, which the statute says must be separate and in good faith - RF421 puts it in the lease |
| 5 Lead paint | `lead-based-paint` | |
| 6 Insurance: tenant insures property; landlord not responsible unless gross negligence or willful | `tenants-property-insurance-ks-oh-ca`, `renters-insurance-advisory-tn` | **Divergence:** the 'not responsible' sentence limits liability (§ 66-28-203(a)(2)); library does not copy it |
| 7 Holdover / renewal: 30-day notice; month-to-month at stated rent | `holdover-ca`, `holdover-rate-tn`, `periodic-tenancy-notice-tn` | |
| 8 Application accuracy; landlord may terminate | `rental-application-accuracy` | |
| 9-10 Condition, alterations, rules; no lock changes; vehicles removed after 10-day posted notice; pets; freezing pipes; rules effective on delivery | `no-alterations`, `keys`, `parking-vehicle-rules`, `pet-policy-tn`, `edu-rules-and-regulations-tn` | 'Effective on delivery' omits § 66-28-402(b)'s no-substantial-modification limit |
| 11 Utilities in tenant's name; landlord SHALL terminate if not within 3 days; no satellite dish | `utility-transfer-tn`, `utilities-responsibility` | **Divergence:** statute says 'may' (§ 66-28-521); a dish ban meets the federal OTARD rule (FEDERAL, not read) |
| 12 Casualty / substantially impaired | `casualty-termination-tn` | Mirrors § 66-28-503 |
| 13 Landlord pays mortgage, taxes, HOA; tenant may pay and credit | none | Contract only; not adopted |
| 14 Sublet / assign | `no-sublet-assign` | |
| 15 Default: notice waiver; 14-day cure; repeat 7 days; non-remediable 14 days; rent for whole term; abandonment; punitive for willful destruction | `default-by-tenant`, `nonpayment-notice-waiver-tn`, `edu-termination-notices-tn` | Waiver needs 12-point bold (§4) |
| 16 Attorney fees for landlord | `default-by-tenant` | § 66-28-505(d) |
| 17 Access: mirrors § 66-28-403, showing in last 30 days on 24 hours' notice | `landlords-access-tn-act` | |
| 18 Abandonment: § 66-28-405 procedure; sale balance held 6 months then becomes landlord's | `abandoned-property-tn` | **Divergence:** the statute says the balance is held for six months; RF421 adds that it then becomes the landlord's |
| 19 Violence: 3-day termination | `edu-termination-notices-tn` | **Divergence:** RF421 omits § 66-28-517(a)(4) (unauthorized occupant) |
| 20 Notices incl. e-mail if provided | `notices`, `electronic-notice-tn` | |
| 21 Repair notice; landlord not liable for temporary malfunctions unless gross negligence | `landlord-maintenance` | **Divergence:** exculpatory (§ 66-28-203(a)(2)) |
| 22 Property management company disclosure | `landlord-disclosure-tn` | |
| 23-28 Condemnation, broker, entire agreement, Tennessee law, holidays list, equal housing, severability, e-signatures, special stipulations | `governing-law`, `entire-agreement`, `severability`, `electronic-signatures`, `edu-fair-housing-tn` | RF421's equal-housing list omits creed (§ 4-21-601) |

### 15.2 What it produced
The election-day holiday rule in `late-fee-limit-tn`; confirmation that the library's pair texts track what Tennessee landlords already use in Act counties; five divergences the library does not copy (two exculpatory sentences, 'shall' terminate utilities, the six-month forfeiture, the missing unauthorized-occupant route). RF421 is written for Act counties throughout and says nothing about the other 78, which supports the two-version design.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the SC and NC scenario maps, re-run against the TN-active library, plus Tennessee-specific scenarios, and 12 pairs in which the same situation arises in an Act county and in a non-Act county. Where no row answered, the whole-code search was run (§17) and landlord-relevant hits read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 85 scenarios: 47 covered by rows written in the statute walk; 20 gaps, each producing a row or a clause; 12 confirmed absences with their own rows; 3 not located with no row; 3 out of scope.

| Scenario | TN coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **Not located**; security deposit defined by what it secures (Tenn. Code Ann. § 66-28-104(14)). No row |
| Application fee; screening; criminal-record question | `edu-no-application-fee-cap-tn`, `edu-fair-housing-tn`, `edu-criminal-record-negligence-shield-tn` | Covered; negligence shield found by source 4 |
| Voucher holder applies; city wants an inclusionary set-aside | `edu-no-source-of-income-rule-tn`, `edu-local-preemption-tn` | Covered (Tenn. Code Ann. § 66-35-102(b)) |
| Applicant asks about creed or religion-based house rules | `edu-fair-housing-tn` | Covered; creed is Tennessee's added class |
| Owner-occupied duplex landlord wants to choose tenants freely | `edu-fair-housing-tn` | Covered; 2-unit exemption narrower than federal (§ 4-21-602) |
| Blind applicant with a guide dog; landlord wants a pet deposit | `assistance-animal-accommodation-tn`, `edu-service-animal-law-tn` | Covered; deposit barred and refusal a misdemeanor (§ 66-7-106) |
| Applicant with a website ESA certificate | `assistance-animal-accommodation-tn` | Covered; website certificates are not reliable documentation (§ 66-28-406(a)) |
| Physically disabled applicant asks for a ground-floor unit in a 4-story building | `edu-fair-housing-tn` | Covered (§ 66-7-104(c)) |
| Immigrant applicant; landlord asks about status | `edu-immigration-harboring-tn` | Covered; 2025 harboring-for-gain offense (§ 39-17-118) |
| **Lease signing and disclosures** | | |
| Which county regime applies? Property in Maury (Act) vs Putnam (not) | `edu-urlta-county-scope-tn` | Covered; list frozen to 2010 census |
| PAIR: owner and manager disclosure - Davidson (Act) vs Greene (other) | `landlord-disclosure-tn` | Required in Act counties (§ 66-28-302); same text used statewide as good practice |
| Renter's-insurance advisory | `renters-insurance-advisory-tn` | Gap → REQUIRED row in the statute's words (§ 66-28-201(a)) |
| Landlord wants the tenant to waive the 14-day nonpayment notice | `nonpayment-notice-waiver-tn` | Gap → Act-only clause, 12-point bold (M.12) |
| PAIR: nonpayment-notice waiver - Knox (Act) vs Hamblen (other) | `nonpayment-notice-waiver-tn` | Act only; § 66-7-109 silent on waiver, so not offered elsewhere |
| Lead paint in a 1960 house | `lead-based-paint`, `edu-lead-abatement-certification-tn` | Federal; state certification only |
| Radon, mold, bed bugs, flood, sex offenders, past meth lab, a death in the unit | `edu-no-radon-disclosure-tn`, `edu-no-mold-bedbug-disclosure-tn`, `edu-no-flood-disclosure-tn`, `edu-no-sex-offender-disclosure-tn`, `edu-meth-lab-quarantine-tn`, `edu-stigmatized-property-tn` | Confirmed absent with rows; stigmatized-property shield (§ 66-5-207) |
| Lease over three years | `edu-urlta-county-scope-tn` notes | Must be written and registered to bind third parties (§ 66-7-101) |
| Tenant e-mail as a notice address | `electronic-notice-tn` | Gap → Act-county opt-in (§ 66-28-108); UETA elsewhere |
| Hamilton County: water-authority tenant form | `edu-water-authority-tenant-form-hamilton-tn` | Gap → education row (county layer) |
| Davidson County: landlord registration | `edu-landlord-registration-davidson-tn` | Gap → education row (county layer) |
| Condo conversion of an occupied building in a large county | `edu-condo-conversion-notice-tn` | Gap → education row; Class 1/2 list open (§7) |
| **Money** | | |
| PAIR: rent paid on day 5 - Rutherford (Act) vs Robertson (other) | `late-fee-limit-tn` / `late-fee-tn-other`, `edu-late-fee-rules-tn` | Act: no fee (day 5 is still grace); other: lease governs |
| Rent due on Election Day falls at the end of grace | `late-fee-limit-tn` | Rolls to next business day (§ 15-1-101) |
| Late fee of 15% of rent | `late-fee-limit-tn`, `edu-late-fee-rules-tn` | Act: capped at 10%; other: penalty doctrine only |
| Bounced check | `returned-payments`, `edu-dishonored-payment-remedies-tn` | $30 cap (§ 47-29-102); treble route (§ 47-29-101) |
| Tenant pays in cash and asks for a receipt | `edu-no-cash-receipt-duty-tn` | Confirmed absent |
| Mid-lease rent increase on a month-to-month | `edu-no-rent-increase-notice-tn`, `periodic-tenancy-notice-tn` | Confirmed absent; end the tenancy with notice |
| Landlord offers a deposit-alternative fee | none | Not located. No row |
| Pet deposit $1,000 plus pet rent | `pet-policy-tn`, `edu-no-pet-fee-limit-tn` | Confirmed absent (no cap) |
| Deposit of three months' rent | `edu-no-deposit-cap-tn` | Confirmed absent |
| Landlord keeps deposit in the operating account | `security-deposit-return-tn-act`, `edu-security-deposit-rules-tn` | Act: separate account required; forfeiture if no list too (§ 66-28-301(c)) |
| **During the tenancy** | | |
| PAIR: landlord wants to enter for a routine inspection - Shelby (Act) vs Tipton (other) | `landlords-access-tn-act` / `-tn-other` | Act: consent not unreasonably withheld, statutory entries; other: contractual 24 hours |
| Tenant refuses all entry | `landlords-access-tn-act`, `edu-landlord-repair-duties-tn` | Injunction or termination plus damages (§ 66-28-513(a)) |
| Landlord enters repeatedly to harass | `edu-landlord-repair-duties-tn` | § 66-28-513(b) |
| Tenant away 10 days in winter; pipes at risk | `extended-absence-notice-ks`, `landlords-access-tn-act` | Lease may require notice; entry during absence over 7 days (§§ 66-28-404, 66-28-507) |
| PAIR: heat fails in January - Knox (Act) vs Greene (other) | `edu-landlord-repair-duties-tn` | Act: essential-services remedies (§ 66-28-502); other: no statute, lease and case law |
| Tenant agrees to do the lawn and small repairs for lower rent | `tenant-repair-agreement-tn` | Gap → opt-in, separate good-faith writing (§ 66-28-304(c)-(d) in Act counties; contract elsewhere) |
| Tenant leaves garbage piling up; landlord fixes and bills | `edu-landlord-repair-duties-tn` | § 66-28-506 bill as rent after 14 days |
| Tenant keeps a handgun; lease bans firearms | `firearm-carry-rules-tn`, `edu-tenant-firearms-tn` | Gap → clause and education (from 2027-01-01) |
| Landlord adds a new house rule mid-lease | `edu-rules-and-regulations-tn` | § 66-28-402(b) |
| Tenant leaves utilities in the landlord's name | `utility-transfer-tn` | Gap → Act opt-in (§ 66-28-521, 'may') |
| Unregistered car in the lot for two weeks | `parking-vehicle-rules`, `edu-towing-tn` | Act: 10-day posted notice (§§ 66-28-518 to 66-28-520); other: no landlord procedure |
| Tenant installs a satellite dish | `common-area-use` | Federal OTARD rule; not a Tennessee statute |
| Smoke alarm battery dead | `smoke-alarms-tn` | Gap → clause: tenant maintains by statute (§§ 68-102-151, 68-120-112) |
| CO alarm in a gas-heated rental | `edu-no-co-alarm-duty-tn` | Confirmed absent (hotels only) |
| Tenant asks for EV charging or flag display | `edu-no-ev-charging-right-tn`, `edu-no-flag-display-rule-tn` | Confirmed absent |
| Tenant calls police repeatedly; landlord wants to evict | `edu-no-police-call-protection-tn` | Confirmed absent |
| DCS investigator asks the landlord for access | `edu-child-abuse-investigation-cooperation-tn` | Gap → education row (§ 37-1-415) |
| Meth lab discovered in the unit | `edu-meth-lab-quarantine-tn` | Gap → education row; 24-hour report duty |
| City code officer wants to inspect after three violations | `edu-rental-inspection-districts-tn` | Gap → education row (§ 6-54-511; districts § 13-21-3xx) |
| Fire makes the unit unlivable | `casualty-termination-tn` | One text satisfies §§ 66-28-503 and 66-7-102 |
| PAIR: casualty - Hamilton (Act) vs Robertson (other) | `casualty-termination-tn` | Act: 14-day notice, landlord may terminate; other: surrender unless written agreement |
| **Default and termination** | | |
| PAIR: rent unpaid - Davidson (Act) vs Putnam (other) | `edu-termination-notices-tn`, `default-by-tenant` | Act: 14-day cure after grace (unless waived); other: 14 days on demand, curable |
| PAIR: tenant keeps an unauthorized dog - Williamson (Act) vs Hamblen (other) | `edu-termination-notices-tn` | Act: 14-day cure; other: 30 days |
| PAIR: tenant assaults a neighbor - Sumner (Act) vs Tipton (other) | `edu-termination-notices-tn`, `edu-drug-nuisance-eviction-tn` | 3 days both regimes (§§ 66-28-517, 66-7-109(d)) |
| Same breach again within six months | `edu-termination-notices-tn` | Act 7 days; other 14 days |
| Drug dealing from the unit; DA letter arrives | `edu-drug-nuisance-eviction-tn` | § 66-7-107; nuisance § 29-3-101 |
| Tenant's boyfriend moves in and refuses to leave | `edu-unauthorized-occupant-removal-tn` | 3 days both regimes |
| Stranger squats in a vacant rental | `edu-unauthorized-occupant-removal-tn` | Gap → education row: sheriff removal (§ 29-18-135) |
| DV victim wants out of the lease | `dv-lease-termination-tn`, `edu-dv-tenancy-protections-tn` | Gap → clause; statewide (double-enacted) |
| Servicemember gets PCS orders | `edu-servicemember-rights-tn`, `early-termination-ks` | Confirmed absent (state); federal SCRA |
| Disabled tenant accepted into public housing | `edu-disability-lease-termination-tn` | Gap → education row (§ 66-7-110) |
| Tenant dies mid-lease | `edu-no-tenant-death-termination-tn` | Confirmed absent; Act entry right (§ 66-28-403(e)(4)) |
| Tenant complains about the deposit account; rent raised next month | `edu-retaliation-tn` | Act only; statute's cross-reference to § 66-28-301 as enacted |
| PAIR: month-to-month ending - Madison (Act) vs Greene (other) | `periodic-tenancy-notice-tn` | Act 30 days (§ 66-28-512); other: no statute, clause supplies it |
| Tenant holds over after lease end | `holdover-ca`, `holdover-rate-tn`, `edu-holdover-remedies-tn` | Act: lease damages (§ 66-28-512(c)); opt-in rate |
| Landlord in a small county wants a pre-signed possession judgment | `possession-bond-tn` | Decision 4 → other-counties-only clause (§ 29-18-123) |
| Tenant dodges the process server | `eviction-service-party-tn`, `edu-eviction-process-tn` | Decision 4 → statewide clause (§ 29-18-115(a)(3)) |
| Landlord wants security in the tenant's furniture | `household-goods-lien-tn` | Decision 4 → Act-only clause (§ 66-28-509) |
| Landlord changes the locks | `edu-self-help-eviction-tn` | Barred everywhere |
| Tenant appeals the detainer judgment | `edu-eviction-process-tn` | One year's rent bond (§ 29-18-130) |
| Process server live-streams the lockout | `edu-eviction-process-tn` | Gap → added to education (§ 29-18-136, 2026) |
| Eviction record hurts the tenant's next application | `edu-no-eviction-record-sealing-tn` | Confirmed absent |
| **Move-out** | | |
| PAIR: deposit return - Blount (Act) vs Hamblen (other) | `security-deposit-return-tn-act` / `-tn-other` | Act: inspection, list, refund notice, 60-day retention; other: contract (30 days) |
| Tenant never answers the refund notice | `security-deposit-return-tn-act` | Landlord may retain after 60 days (§ 66-28-301(f)); unclaimed-property question open |
| Damage found three weeks after move-out | `security-deposit-return-tn-act` | 30 days / 7 days rule |
| PAIR: tenant vanishes leaving belongings - Wilson (Act) vs Robertson (other) | `abandoned-property-tn` | Act: § 66-28-405; other: no statute, clause supplies a procedure |
| Belongings left after the officer executes the writ | `edu-eviction-process-tn` | 48 hours, then discard (§ 29-18-127) |
| Tenant leaves early; landlord re-lets | `edu-termination-notices-tn` | Mitigation and re-rent (§§ 66-28-515, 66-28-507(c)) |
| Tenant leaves a pet behind | none | Not located. No row |
| **Sale, foreclosure and structure** | | |
| Landlord sells the building | `edu-sale-of-rented-property-tn` | § 66-28-305 |
| Lender forecloses | `edu-no-foreclosure-tenant-statute-tn` | Confirmed absent; federal PTFA |
| Short-term rental of the unit | none | Out of scope |
| Mobile home lot rental | none | Deprioritized; no park act located |
| Storage unit in the building | `storage-space-ks-oh-ca` | Self-service storage act excludes residential property (§ 66-31-102(9)) |

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engine:** LexisNexis Tennessee Code Unannotated, free public access (advance.lexis.com), terms-and-connectors search of the whole code's table of contents and text, 2026-09-28. Quotation marks = phrase; `!` = root expander; `w/n` = within n words; plurals matched automatically. `w/n` binds tighter than `or`, so OR-groups were parenthesised after the first mixed query. **Control term** 'zqxvbnmwt' returned 0 at the start and at the end. Every landlord-relevant hit was opened on Justia and read section-open, or labelled 'by title'.

| # | Search | Hits | Result |
|---|---|---|---|
| 1 | zqxvbnmwt (control, start) | 0 | True empty |
| 2 | "security deposit" | 12 | Residential only §§ 66-28-104, 66-28-301, 66-28-305; unclaimed property § 66-29-102 → `edu-no-deposit-cap-tn`, `edu-no-deposit-interest-tn` |
| 3 | landlord | 94 | Titles scanned; outside-title sections read (§0) |
| 4 | tenant | 207 | Titles scanned; outside-title sections read (§0) |
| 5 | "late fee" or "late charge" or "late payment of rent" | 13 | Residential only § 66-28-201 → `late-fee-tn-other`, `edu-late-fee-rules-tn` |
| 6 | "application fee" or "rental application" or "screening fee" | 122 | All licensing and permits → `edu-no-application-fee-cap-tn` |
| 7 | radon or mold or mildew or "bed bug" or bedbug | 16 | None landlord-tenant → `edu-no-radon-disclosure-tn`, `edu-no-mold-bedbug-disclosure-tn` |
| 8 | "carbon monoxide" | 11 | Hotels only (§ 68-120-112) → `edu-no-co-alarm-duty-tn` |
| 9 | (clandestine or methamphetamine) w/15 (landlord or tenant or rent! or lease) | 0 | Part 5 of Title 68 Chapter 212 read whole instead → `edu-meth-lab-quarantine-tn` |
| 10 | "sex offender" w/25 (landlord or tenant or rent! or lease) | 0 | → `edu-no-sex-offender-disclosure-tn` |
| 11 | flag w/15 (tenant or landlord or lease or lessee) | 0 | → `edu-no-flag-display-rule-tn` |
| 12 | (expunge! or expunction or seal!) w/25 (detainer or eviction) | 0 | → `edu-no-eviction-record-sealing-tn` |
| 13 | renter's-insurance variants | 5 | None landlord-tenant → `renters-insurance-advisory-tn` |
| 14 | retaliat! w/25 (tenant or landlord) | 1 | § 66-28-514 only → `edu-retaliation-tn` |
| 15 | ("holding over" or holdover or "hold over") w/20 (tenant or rent! or lease) | 3 | §§ 66-28-512, 29-18-123, 29-18-104 → `edu-holdover-remedies-tn` |
| 16 | "month to month" or month-to-month or "tenancy at will" or "week to week" | 8 | Landlord-tenant only §§ 66-28-202, 66-28-507, 66-28-512 → `periodic-tenancy-notice-tn` |
| 17 | ("notice to quit" or "notice to vacate" or "notice of termination") w/25 tenant | 2 | §§ 66-7-109, 66-28-523 → `edu-termination-notices-tn` |
| 18 | abandon! w/25 (tenant or lessee or occupant) w/25 (property or possessions or belongings) | 5 | All Chapter 28 → `abandoned-property-tn` |
| 19 | (death or deceased or dies or decedent) w/15 (tenant or lessee) w/30 (lease or rent! or dwelling) | 4 | § 66-28-403(e)(4) only → `edu-no-tenant-death-termination-tn` |
| 20 | (tow! or wrecker) w/25 (landlord or tenant or apartment or residential) | 16 | Landlord procedure §§ 66-28-518 to 66-28-520; § 55-5-122 → `edu-towing-tn` |
| 21 | (firearm or weapon or gun) w/25 (tenant or landlord or lessee or "rental agreement") | 5 | §§ 66-28-206, 66-7-113 (2027), 39-17-1313 → `firearm-carry-rules-tn` |
| 22 | (EV or "charging station" or satellite or antenna) w/25 (tenant or lessee or landlord) | 1 | Unrelated → `edu-no-ev-charging-right-tn` |
| 23 | rent-increase variants or "rental rate" | 7 | §§ 66-28-514, 66-27-123 → `edu-no-rent-increase-notice-tn` |
| 24 | (squat! or "unauthorized occupant" or "unlawful occupant" or "unlawfully occupying" or "unauthorized person") w/25 (residential or dwelling) | 2 | §§ 29-18-135, 66-7-109 → `edu-unauthorized-occupant-removal-tn` |
| 25 | assistance-animal terms w/30 (tenant or landlord or housing or dwelling) | 6 | §§ 66-28-406, 66-7-111, 39-16-304, 66-28-505, 66-7-104, 66-7-106 → `assistance-animal-accommodation-tn` |
| 26 | "lead-based paint" or "lead poisoning" or "lead hazard" or lead-based | 9 | Certification only (§§ 68-131-401 to 68-131-406) → `edu-lead-abatement-certification-tn` |
| 27 | foreclos! w/30 (tenant or lessee or "rental agreement") | 1 | Unrelated (§ 68-215-204) → `edu-no-foreclosure-tenant-statute-tn` |
| 28 | "master meter" or submeter! or "prorated billing" or "allocation formula" | 4 | § 68-221-620 (Hamilton) → `edu-water-authority-tenant-form-hamilton-tn` |
| 29 | (immigra! or alien) w/25 (rent! or lease or landlord or tenant or harbor!) | 1 | § 39-17-118 → `edu-immigration-harboring-tn` |
| 30 | flood w/25 (tenant or lessee or lease or landlord or rental) | 10 | None a disclosure → `edu-no-flood-disclosure-tn` |
| 31 | (jury w/5 waive!) or "confession of judgment" or "confess judgment" or "confess a judgment" | 47 | Residential §§ 29-18-123, 66-28-203 → `edu-prohibited-lease-terms-tn`, `possession-bond-tn` |
| 32 | "short-term rental" or "vacation lodging" or "vacation rental" or "mobile home park" or "manufactured home community" | 32 | STR Act §§ 13-7-601 to 13-7-606 (out of scope); no park act |
| 33 | habitab! or untenantable or "unfit for human habitation" | 9 | §§ 66-28-304, 66-28-104, 66-7-102 → `edu-landlord-repair-duties-tn`, `casualty-termination-tn` |
| 34 | ("residential rental" or "rental property" or "rental unit") w/25 (registr! or inspect! or permit) | 19 | §§ 13-21-301 to 13-21-314, 6-54-511 → `edu-rental-inspection-districts-tn` |
| 35 | (utility or utilities or electric! or water) w/20 landlord w/30 tenant | 5 | All Chapter 28 → `utility-transfer-tn` |
| 36 | ("credit report" or "consumer report" or "criminal history" or "background check") w/30 (tenant or rental or landlord or housing) | 2 | Unrelated; § 40-29-108 found via 'landlord' scan → `edu-criminal-record-negligence-shield-tn` |
| 37 | (pet w/10 deposit) or "pet fee" or "pet rent" | 0 | → `edu-no-pet-fee-limit-tn` |
| 38 | (receipt w/10 rent) or (cash w/10 rent) | 7 | Unrelated → `edu-no-cash-receipt-duty-tn` |
| 39 | Typography terms w/30 (tenant or lessee or "rental agreement" or "residential lease") | 11 | Landlord-tenant only § 66-28-505 (12-point bold) → §4 |
| 40 | ("rental agreement" or lease) w/15 ("set forth" or "set out" or "provided for" or "provides for" or "if the lease" or "agreed upon") w/40 (landlord or tenant) | 9 | Lease-incorporation screen (instruction 44): none makes a delivery method mandatory |
| 41 | (military or servicemember or "service member" or "armed forces") w/25 (lease or "rental agreement") | 7 | None a tenant right → `edu-servicemember-rights-tn` |
| 42 | "source of income" or "housing choice voucher" or "section 8" or "rental assistance" | 40 | None landlord-tenant → `edu-no-source-of-income-rule-tn` |
| 43 | (police or "law enforcement" or 911 or "emergency assistance") w/25 (tenant or lessee) w/25 (evict! or terminat! or penal!) | 0 | → `edu-no-police-call-protection-tn` |
| 44 | (lockout or padlock or rekey! or deadbolt or "change the locks" or "change locks") w/25 (tenant or landlord or dwelling) | 0 | No lockout or rekey statute; self-help rules in Chapter 28 and Title 29 |
| 45 | (stigmatiz! or "psychologically impacted" or homicide or suicide) w/25 disclos! w/25 (property or dwelling or lease) | 1 | § 66-5-207 → `edu-stigmatized-property-tn` |
| 46 | ("holding deposit" or "earnest money" or "application deposit") w/25 (rent! or lease or tenant) | 1 | Unrelated (§ 7-8-105); not located |
| 47 | (well or septic) w/25 (tenant or landlord or lessee) | 8 | 'well' matched 'as well as'; no landlord well or septic duty |
| 48 | (cannabis or marijuana) w/25 (tenant or landlord or lease or lessee or rental) | 0 | No cannabis legalisation |
| 49 | sprinkler w/25 (residential or dwelling or apartment) | 3 | Care-facility disclosures and the building-code section; no retrofit duty |
| 50 | "swimming pool" w/25 (fence or barrier or enclos!) | 0 | No pool-barrier duty |
| 51 | "foreign adversary" or "foreign principal" or "prohibited foreign" | 30 | §§ 66-2-301 to 66-2-308 (land ownership; by title); no lease rule |
| 52 | radon w/25 (construction or "building code" or builder) | 1 | Schools only (§ 49-2-121) |
| 53 | receiver w/25 nuisance | 1 | § 13-6-106 (by title) |
| 54 | nuisance w/25 (lease or tenant or lessee) w/25 (void or cancel! or terminat! or forfeit!) | 0 | Broadened next |
| 55 | nuisance w/50 (tenant or lessee or lease) | 5 | § 29-3-101 read (owner, agent or lessee maintaining a nuisance); § 66-28-520 towing |
| 56 | tow! w/25 (rebate or kickback or "anything of value" or gratuity) | 2 | Unrelated; no towing-kickback ban |
| 57 | (condemn! or "unfit for human" or placard!) w/25 (tenant or rent or lease or occupant) | 23 | Eminent domain and definitions; no condemnation rent bar or disclosure |
| 58 | "self-service storage" | 16 | § 66-31-102(9) excludes residential property (read) |
| 59 | (counterclaim or "pay into court" or "paid into court" or escrow!) w/25 (tenant or detainer or lessee) | 1 | Unrelated; no pay-into-court rule |
| 60 | "quiet enjoyment" or "quiet possession" or "peaceful possession" | 4 | None landlord-tenant (§ 29-18-109 is a limitation rule) |
| 61 | (disconnect! or terminat! or cutoff) w/25 (utility or electric! or gas or water) w/25 (winter or weather or temperature or freezing) | 0 | No winter-disconnection statute |
| 62 | lien w/25 (water or sewer or utility or electric!) w/25 (tenant or lessee or occupant) | 1 | Unrelated (§ 65-10-113) |
| 63 | (minor or child!) w/25 ("detainer warrant" or "unlawful detainer" or "writ of possession") | 0 | No minor-defendant rule |
| 64 | ("sales tax" or "occupancy tax" or "privilege tax") w/25 (ninety or "90") w/25 (days or continuous!) | 1 | Unrelated hit; § 67-6-205(c)(1) read directly (90-day lodging exclusion) |
| 65 | (electronic or online or digital) w/10 (payment or portal) w/25 (rent or tenant or landlord) | 2 | § 66-28-302 (maintenance portal); § 65-35-102 (utility tampering) |
| 66 | zqxvbnmwt (control, end) | 0 | True empty |

## Decisions that need Taylor (short list)

None open. Decided 2026-09-28 and applied: 1 (two versions for county-limited rules; Tennessee flagged as the county-layer guinea pig), 2 (LexisNexis terms accepted), 3 (`holdover-rate-tn`), 4 (all three statutory landlord options offered: `eviction-service-party-tn`, `possession-bond-tn`, `household-goods-lien-tn`).

**Integrity:** 1,320 rows (1,244 + 76 new); TN 129 active (all VERIFIED); every other state's count unchanged (AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TX 135, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row.

## 18. Sync note (Claude Code, 2026-09-28)

- Installed as delivered; no corrections needed. The cross-state prefix scan (no `Tenn. Code Ann.` outside TN rows) was repeated at sync and passed.
- The three county pairs are choice groups (`tn-urlta-late-fee`, `tn-urlta-deposit-return`, `tn-urlta-landlord-entry`), so a lease can hold only one of each pair; the Act-county variant is the group default, so "Add my default clauses" picks it. A landlord in one of the 78 non-Act counties must swap to the `-other` variant by hand until a county attribute exists (the county-layer pilot, §13-14).
- `check-checklist-reconciliation.py` now accepts choice-group names, since TN's checklist cells cite the pairs by group.
- Legal watch: `stateConfig.js` TN entry (88 sections, bare-number queries, eCFR 24 CFR 100.204 and 40 CFR 745.113, LegiScan-US 50 U.S.C. § 3955) and `legal-watch-tn.yml` (Mondays 17:15 UTC), validated offline. The live dry-run and seed-baseline wait for LegiScan's October allowance.
- Statute spot-check, 5 of 5, from text Taylor pasted (Justia's 2025 Tennessee Code with history lines; Justia and FindLaw block automated reads and the official code is on LexisNexis): § 66-28-102 (75,000 by the 2010 census; exclusions; the (e) county preemption) matches `edu-urlta-county-scope-tn`; § 66-28-201 ((d) five-day grace counting the due date, the Sunday/holiday rule, 10% of rent past due; (c) notice waiver only in a written agreement; (a) the insurance advisory, which `renters-insurance-advisory-tn` states verbatim) matches `late-fee-limit-tn`; § 66-28-301 (separate account, account location at signing, the inspection procedure and waiver notice, forfeiture only if both the account and the list are missing, the 60-day unanswered-refund rule, the 30-day/7-day discovery limits) matches `security-deposit-return-tn-act`; § 66-28-505 (14-day cure, prior written approval of tenant repairs, 7-day repeat rule, the 12-point bold waiver that doesn't shorten the grace period, the (f) assistance-animal misrepresentation default) matches `nonpayment-notice-waiver-tn`, `edu-termination-notices-tn` and the assistance-animal rows; § 66-7-109 (14/30/3/3-day notices, cure, the disabled-tenant exception, the domestic-abuse rules, and (g) not applying in Act counties) matches the other-counties half of `edu-termination-notices-tn`. No defects.

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `dv-lease-termination-tn` → `edu-dv-lease-termination-tn`.
- **Trimmed:** `late-fee-limit-tn` (fee and grace period), `security-deposit-return-tn-act` (only the restated no-show inspection duty removed), `casualty-termination-tn` (landlord's termination right; tenant options → `edu-casualty-termination-tn`).
- **Kept whole:** `security-deposit-return-tn-other` — outside the URLTA counties no deposit statute applies, so its return terms are the lease's own (verdict revised from split).
- **Notice periods (pattern 2):** `periodic-tenancy-notice-tn` states the chosen periods; minimums → `edu-termination-notice-periods-tn`.

### Verdict for every lease clause

All 24 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-termination-tn` | Education | — | tenant right |
| `casualty-termination-tn` | Split | SERVES_LANDLORD | keep landlord termination right; tenant rights to edu |
| `late-fee-limit-tn` | Split | CONSTRAINED_TERM | keep fee; grace and cap to edu |
| `security-deposit-return-tn-act` | Split | SERVES_LANDLORD | keep account-location statement; rest edu |
| `periodic-tenancy-notice-tn` | Notice-period rewrite | CONSTRAINED_TERM | statutory periods restated |
| `abandoned-property-tn` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-tn` | Keep | SERVES_LANDLORD |  |
| `electronic-notice-tn` | Keep | SERVES_LANDLORD | opt-in |
| `eviction-service-party-tn` | Keep | SERVES_LANDLORD | opt-in |
| `firearm-carry-rules-tn` | Keep | SERVES_LANDLORD |  |
| `holdover-rate-tn` | Keep | CONSTRAINED_TERM |  |
| `household-goods-lien-tn` | Keep | SERVES_LANDLORD | opt-in |
| `landlord-disclosure-tn` | Keep | REQUIRED_DISCLOSURE: Tenn. Code Ann. § 66-28-302 |  |
| `landlords-access-tn-act` | Keep | SERVES_LANDLORD |  |
| `landlords-access-tn-other` | Keep | SERVES_LANDLORD |  |
| `late-fee-tn-other` | Keep | CONSTRAINED_TERM |  |
| `nonpayment-notice-waiver-tn` | Keep | SERVES_LANDLORD | opt-in |
| `pet-policy-tn` | Keep | SERVES_LANDLORD |  |
| `possession-bond-tn` | Keep | SERVES_LANDLORD | opt-in |
| `renters-insurance-advisory-tn` | Keep | REQUIRED_DISCLOSURE: prescribed advisory (Tenn. Code Ann. § 66-28-201(a)) |  |
| `security-deposit-return-tn-other` | Keep | SERVES_LANDLORD | kept whole: no deposit statute outside the URLTA counties, so the return terms are the lease's own (revised from split 2026-09-29) |
| `smoke-alarms-tn` | Keep | SERVES_LANDLORD |  |
| `tenant-repair-agreement-tn` | Keep | SERVES_LANDLORD | opt-in |
| `utility-transfer-tn` | Keep | SERVES_LANDLORD | opt-in |

## Targeted fix, 2026-09-29: bed-bug and mold rows split

`edu-no-mold-bedbug-disclosure-tn` covered two subjects in one row. It is switched off, and its content moved unchanged into `edu-no-bed-bug-disclosure-tn` and `edu-no-mold-disclosure-tn`, matching the separate rows most states have. The research and citation are copied to both rows (the same search covered both subjects); no new research. Reason: each row carries one `topic_key`, so a combined row hid one of the two subjects from the cross-state coverage check.
