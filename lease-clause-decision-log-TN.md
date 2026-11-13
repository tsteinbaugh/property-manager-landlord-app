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

---

## Retro checks (SOP 1.4), 2026-09-30

2026-09-30, in TN's chat (SOP rule 8). A scalpel, not a re-audit: only the ten rules below were checked.

**Files and setup:**
- Old outputs deleted first: the 2026-09-28 `lease-clauses-TN-sync.csv`, `lease-clause-decision-log-TN.md` and `lease-clause-decision-log-named-topic-checklist.md`.
- Source of truth: the uploaded `lease-clauses.csv` (1,800 rows, 17 columns, TN 132 active). It supersedes this chat's 2026-09-28 figures (TN 129 before the 2026-09-29 scrub and split).

**Sources:**
- **LexisNexis:** the Tennessee Code Unannotated free-access site was searched with terms-and-connectors over the whole code. The control term returned 0 at the start and at the end, and the known-positive search "security deposit" returned 12, the same as 2026-09-28. The 23 searches are saved as `lexis-battery-2026-09-30.md` in the TN source folder.
- **Blocked reads:** Justia now shows a Cloudflare "verify you are human" check, and the LexisNexis document view asks for a captcha, so I opened no section page. Taylor pasted § 29-18-127 (saved as `tn-29-18-127.txt`). Sections read section-open on 2026-09-28 are cited as such.
- **Court rules:** Tenn. R. Civ. P. 1 was read on tncourts.gov.
- Research mode was not used.

| Rule | Verdict | What was read; rows changed |
|---|---|---|
| **37** tenancy type | **Fixed** | `edu-termination-notice-periods-tn` (from the 2026-09-29 scrub) said "Tennessee sets" 30-day and 10-day minimums statewide. It also cited § 66-7-109 for them. Those periods exist only in the 17 Act counties (§ 66-28-512(a)-(b)); § 66-7-109 covers default terminations only and skips rental periods under 14 days. Rewritten by county and tenancy type, with the citation format fixed. No cap in TN counts by lease year or renewal: no deposit cap, and the late fee is per payment. `periodic-tenancy-notice-tn` already splits week-to-week from month-to-month. |
| **39** eviction duties | **Fixed** | The post-writ duties sat only in `edu-eviction-process-tn` under another key. New `edu-post-eviction-property-tn` covers: the 48-hour placement duty, suspension of local-government action, immunity except for malice shown by clear and convincing evidence (§ 29-18-127(b)-(d), text Taylor pasted), and re-entry as a Class C misdemeanor (§ 29-18-133(a)). No animal duty was found (43-hit search). The lockout ban and record sealing already have rows (`edu-self-help-eviction-tn`, `edu-no-eviction-record-sealing-tn`). Court rules: Tenn. R. Civ. P. 1 excludes general sessions courts except after appeal or transfer, when they exercise circuit or chancery jurisdiction, and for Rule 69 execution. No statewide general sessions rule and no pending eviction amendment was found. Boundary: the warehouse-storage option in ejectment actions (§ 29-15-124) seen by title and opening only. |
| **41b** `for-cause-eviction` row | **Fixed** | New `edu-no-for-cause-eviction-tn`, a confirmed absence: "good cause" / "just cause" returned 21 hits, none residential. It points to the situational limits in their own rows: retaliation (§ 66-28-514), DV (§§ 66-28-205, 66-7-112, 66-28-517(g), 66-7-109(e)), 60 days' notice for elderly-facility redevelopment (§§ 66-28-523, 66-7-109), condo conversion (§ 66-27-123) and fair housing. There is no rent-escrow bar and no tenants'-association protection (10-hit search). |
| **43** cure promises | **Already covered, TN log §0 (instruction 33) and `edu-termination-notices-tn` notes** | `default-by-tenant` was re-read. Its carve-out ("except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure") also preserves two routes the §0 line didn't name: the 7-day repeat termination in Act counties (§ 66-28-505(a)(2)(B)), and the 14-day repeat and 30-day other-default notices in the other counties (§ 66-7-109). `application-of-payments` promises no cure period; its last sentence only preserves the tenant's statutory cure. No change. |
| **48** separate documents | **Fixed** | § 66-28-304(c)-(d) calls the tenant-repair agreement "the separate agreement", which cannot be a condition of the rental agreement. It is the only residential hit for separate-document wording. `tenant-repair-agreement-tn` sat inside the Lease and merely declared itself separate. It is now a separate signed writing with a bracketed instruction, following the AZ and AL pattern. Builder gap (Addendum M.12): a separate-document output. |
| **49** collection costs | **Checked, no issue** | No Tennessee statute bars collection costs or "costs and expenses" in a lease (search: 1 hit, unrelated). Landlord fees are allowed "as provided in the rental agreement" (§ 66-28-505(d)). `default-by-tenant`'s "reasonable costs and expenses" and fee sentence are lawful. `assistance-animal-accommodation-tn`'s fees track § 66-28-505(f)(3). `abandoned-property-tn`'s storage, sale and attorney's fees track § 66-28-405(c). `possession-bond-tn` asks for no costs; the court adds them (§ 29-18-123(b)). No change. |
| **50** "the lease controls" | **Checked; one new clause** | 24 hits across two searches. Each choice point and the library's deliberate choice:<br>• § 66-28-201(c): rent place and time, and the notice waiver in a written agreement. Choices: `rent-payment`, `acceptable-payment-methods`, `nonpayment-notice-waiver-tn`.<br>• § 66-28-404: dwelling-only use; the lease may require notice of absences. Choices: `residential-use-only`, `extended-absence-notice-ks`.<br>• § 66-28-403(e)(5): showings in the last 30 days only if the lease says so. Included in `landlords-access-tn-act`.<br>• § 66-28-301(b)(1)(A): the no-show waiver notice goes in the lease. Included in `security-deposit-return-tn-act`.<br>• § 66-28-504: essential services "as provided in the rental agreement". `services-utilities-provided-ks-oh`.<br>• § 66-28-512(c): other lease damages. `holdover-ca`, `holdover-rate-tn`.<br>• § 66-28-521: utility transfer. `utility-transfer-tn`.<br>• §§ 66-28-206 / 66-7-113: remedies "expressly agreed upon". `firearm-carry-rules-tn` states them.<br>• §§ 66-28-205 / 66-7-112: agreed release and vacate dates. Education only; the lease cannot change the right.<br>• § 66-28-305 ("unless otherwise agreed", seller release): left silent on purpose, so the release that favors the landlord applies.<br>• §§ 66-28-522 / 66-7-109: manager testimony "notwithstanding a rental agreement". No clause touches it.<br>• § 66-7-102 (other counties; casualty surrender unless a written agreement says otherwise): asked Taylor. **Taylor, 2026-09-30:** a tenant who caused the damage keeps paying; broaden it from fire to any damage the tenant causes. New `tenant-caused-damage-tn`:<br>&nbsp;&nbsp;– Rent doesn't abate while the lease continues.<br>&nbsp;&nbsp;– If the lease ends, actual damages include lost rent to the end of the Term, less rent from re-renting.<br>&nbsp;&nbsp;– It does not narrow § 66-28-503(a), which has no fault exception.<br>&nbsp;&nbsp;– How a court measures those damages rests on case law I haven't read. |
| **51** plain language / consumer contract | **Fixed (one row NEEDS_REVIEW)** | No plain-language or readability statute for leases (46 hits; insurance only). New `edu-no-plain-language-rule-tn`. The Consumer Protection Act's definition of "trade" (§ 47-18-103(24)) includes the lease or rental of real property. It prescribes no lease wording or statement of waivers. New `edu-consumer-protection-act-tn` is **NEEDS_REVIEW**: I saw § 47-18-103(24) only in result-list context, and the text pasted in chat was § 47-18-1003. To verify, read §§ 47-18-103(24) and 47-18-111. |
| **53** figure vs shared clause | **Fixed** | `returned-payments` gave only a ceiling ("maximum amount permitted"). Tennessee caps the handling charge on a dishonored check, draft or order at $30 (§ 47-29-102, whole section visible). TN was removed from `returned-payments`; only its TN tag, its own TN note and `last_checked` changed. New `returned-payments-tn` has a bracketed amount stating the $30 cap. No conflict in the others:<br>• `rent-payment`: the weekend/holiday roll only delays the due date, and the 5-day grace (§ 66-28-201(d)) counts from it.<br>• `default-by-tenant`: "time period specified by applicable law" is 14 days in both regimes.<br>• `surrender-end-of-term`: left property follows `abandoned-property-tn` (§ 66-28-405) or the 48-hour rule after a writ; the shared text sets no figure.<br>• `holdover-ca`: its actual-damages promise is itself the "other damages provided for in the lease" that § 66-28-512(c) allows. |
| **27** seven topics | **Fixed, 7 rows** | Present:<br>• fees-as-rent: `edu-fees-as-rent-tn`, § 66-28-104(13), Act counties.<br>• landlord-self-cure: `landlord-self-cure-tn`, an optional clause for the other 78 counties. **Taylor, 2026-09-30:** in the 17 counties the right is statutory (§ 66-28-506), so no clause is needed there; the text tracks the statute so it is harmless if used.<br>• statutory-forms: `edu-statutory-forms-tn`.<br>Confirmed absent:<br>• algorithmic-rent-setting: `edu-no-algorithmic-rent-rule-tn` (0 hits; known positive 8).<br>• lease-completeness: `edu-no-lease-completeness-rule-tn` (0 hits; known positive 33).<br>• quiet-possession: `edu-no-quiet-possession-statute-tn` (5 hits, none a covenant).<br>• tenant-security-cameras: `edu-no-tenant-camera-rule-tn` (3 hits, none a tenant rule).<br>Boundary for every search: rules, case law and local codes. |

**Delta:** `lease-clauses-TN-retro-delta.csv`, 16 rows (3 changed, 13 new), 17 columns, CRLF, same header as the master.
- **Changed:** `edu-termination-notice-periods-tn`, `tenant-repair-agreement-tn`, `returned-payments` (TN tag and TN note only).
- **New:** `returned-payments-tn`, `edu-no-for-cause-eviction-tn`, `edu-post-eviction-property-tn`, `edu-no-plain-language-rule-tn`, `edu-consumer-protection-act-tn` (NEEDS_REVIEW), `edu-no-algorithmic-rent-rule-tn`, `edu-fees-as-rent-tn`, `landlord-self-cure-tn`, `edu-no-lease-completeness-rule-tn`, `edu-no-quiet-possession-statute-tn`, `edu-statutory-forms-tn`, `edu-no-tenant-camera-rule-tn`, `tenant-caused-damage-tn`.
- **Checks, merged against the master:** no duplicate ids, no dangling `supersedes`, no TN display collision. TN goes from 132 to 144 active (+13 new, −1 `returned-payments`), and every other state is unchanged. Every lease clause has a `lease_clause_basis`, and no other state's rows carry the `Tenn. Code Ann.` prefix.

**For Claude Code / the product (flagged, not fixed):**
- **County-attribute backlog item (Taylor, 2026-09-30):** link it to `landlord-self-cure-tn`, which is shown only outside the 17 counties, alongside `possession-bond-tn`, the three `tn-urlta-*` pairs and the Act-only clauses (TN log §14).
- **Separate-document output (M.12):** needed for `tenant-repair-agreement-tn`.
- **No new builder variables.**

**Proposed topic questions:**
- `tenant-caused-damage`: does a statutory casualty or untenantability termination right exclude tenant-caused damage? If not, can the landlord still recover lost rent as damages?
- `post-eviction-property`: does a separate ejectment statute give a warehouse-storage option different from the detainer rule?

### Proposed SOP changes
1. **New shared clause "tenant-caused damage", screened state by state.** Rent doesn't abate while the lease continues, and the tenant owes lost-rent damages (less re-renting) when damage they, an occupant or a guest caused ends the lease. Taylor asked for it in TN and asked why it shouldn't apply everywhere. Each state's casualty, abatement and penalty statutes differ, so it needs a targeted check per state before tagging.
2. **When the host copy and the official vendor block automated reads, ask Taylor for the exact sections in one batch, and check that each pasted section number matches the request before relying on it.** Reason: Justia (Cloudflare) and the LexisNexis document view (captcha) both blocked reads on 2026-09-30, and one pasted section was a near-number (§ 47-18-1003 for § 47-18-103).
3. **Rule 37 should also screen rows created by later scrubs, not only the state's own pass.** Reason: the TN error was in `edu-termination-notice-periods-tn`, a row the 2026-09-29 three-bucket scrub created, which flattened a county-limited period into a statewide one.

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.52), 2026-10-04

2026-10-04, in TN's chat (SOP rule 8). A scalpel, not a re-audit: only rules 35c and 79 and the four targeted fixes in the prompt were checked.

**Files and setup:**
- Old outputs deleted first: the 2026-09-30 `lease-clause-decision-log-TN-retro.md` and `lease-clauses-TN-retro-delta.csv`.
- Source of truth: the uploaded `lease-clauses.csv` (2,876 rows, as the prompt states; 17 columns). TN is tagged on 146 rows, 144 active: 95 TN-only rows and 51 shared rows. These figures supersede every earlier count in this chat (129, 132 and 144 before the 2026-09-30 sync).

**Sources:**
- **Constitution:** the 2025-2026 Tennessee Blue Book (Secretary of State), the PDF's text extracted in the browser and searched as full text. sos.tn.gov links only scans of the 1796, 1834 and 1870 originals, and the General Assembly's PDF link is dead.
- **Statutes:** Justia loaded without a bot check today. All of Title 66 Chapter 28 and Chapter 7 (59 sections) and Title 29 Chapter 18 (35 sections) were fetched and searched as full text. Every section relied on is read section-open, with its history line.
- **Saved:** searches, hashes and quoted operative text are in `tn-retro-1.52-sources-2026-10-04.md` in the TN source folder.
- **Not solved:** the LexisNexis document view still asks for a captcha, so no history line was compared with the official copy. Currency rests on the 2026-09-28 screen of every 2025 and 2026 public chapter (§1).
- Research mode was not used.

| Rule / fix | Verdict | What was read; rows changed |
|---|---|---|
| **35c** constitution screen | **Checked, no issue** | No earlier constitution screen in this log. **Control terms:** "Legislature" 48 hits, "Governor" 53, nonsense term 0.<br>**Cannabis:** 0 hits. `smoking-policy`'s marijuana and vaping ban stands.<br>**Firearms:** Art. I § 26 (bear arms "for their common defense"; the Legislature may regulate the wearing of arms). Firearms in leases are governed by statute (`firearm-carry-rules-tn`, §§ 66-7-113 / 66-28-206).<br>**Speech, signs, flags:** Art. I § 19 binds lawmaking ("no law shall ever be made to restrain"). No sign or flag provision. `common-area-use` stands.<br>**Privacy:** only Art. I § 7 (searches and seizures, warrants).<br>**Binds only the State:** Art. I §§ 3, 7, 18, 19, 20, 23, 26. None reaches a private lease term.<br>**Other hits:**<br>• Art. II § 28 taxes residential property with two or more rental units as commercial (tax, not lease terms).<br>• Art. XI § 13 (hunt and fish) "does not abrogate any private ... property rights".<br>• Art. XI § 19 (right to work) concerns employment.<br>**Initiated amendments:** Tennessee has none. Art. XI § 3 amends only through the General Assembly or a convention, so no initiated article can be void. |
| **79** re-read before trusting a summary | **Fixed, 2 rows** | **Secondary sources:** no row's basis is agreeing secondary sources. Every research-pass row and every TN segment on a shared row names its artifact ("section-open ... Justia host copy with history line", or for an absence a whole-code search with terms and hit counts).<br>**No basis:** 2 of 146 TN-tagged rows record no basis:<br>• 0 rows the research pass wrote.<br>• 2 rows the 2026-09-29 scrub created: `edu-dv-lease-termination-tn` and `edu-casualty-termination-tn`.<br>• 0 shared rows tagged TN have no TN segment.<br>Both scrub rows got the source row's basis carried forward and were re-read section-open, sentence by sentence.<br>**`edu-dv-lease-termination-tn`:** matches § 66-28-205. The citation now also names § 66-7-112, the identical all-county section.<br>**`edu-casualty-termination-tn`:** two qualifier errors fixed.<br>1. The Act right turns on use being "substantially impaired", defined in § 66-28-104(15) as "deemed unfit for human habitation by a governmental authority". The text made the government finding one example ("including by a government finding") rather than the condition.<br>2. The § 66-7-102(a) summary dropped "without fault or neglect by the lessee" and the rule that only rent after the surrender is released.<br>The 2026-09-30 sync rewrite had lost the definition, though the source row's note carried it. |
| **Fix 3** `holdover-rate-tn` (rule 53) | **Fixed** | § 66-28-512(c) read: "after expiration of the term of the rental agreement or its termination", with "any other damages provided for in the lease".<br>(a) The old trigger ("after the end of the Term") is lawful.<br>(b) The statute reaches any termination, so the trigger is extended to an earlier termination under the Lease or law (`holdover-rate-nc` wording).<br>(c) **Nonpayment terminations are excluded.** The Act caps any late charge "however described" at 10% (§ 66-28-201(d)). There is no tender, redemption or cure-until-judgment right after termination: full-text search of Ch. 28, Ch. 7 and Title 29 Ch. 18 found none, and outside the Act the cure ends at the date in the notice (§ 66-7-109(a)(2)).<br>**No multiplier.** Willful holdover gives actual damages and attorney's fees only. A "double / treble / multiple" search found only the § 29-18-130 appeal bond, so the `holdover-rate-mo` sentence isn't needed.<br>**Added:** "Landlord will not recover both this charge and Rent for the same day." § 66-28-505(c) keeps the lease enforceable "for the collection of rent for the remaining term" after a breach notice.<br>**Other counties:** no holdover statute, multiplier or tender right, so the charge is contract. The one statewide text keeps the exclusion there too, giving up a small right where late fees are uncapped. |
| **Fix 4** scrub-trimmed clauses (rules 78, 47) | **Fixed, 1 row; 2 checked, no issue** | **`late-fee-limit-tn`: two conditions restored** (§ 66-28-201(d) and § 15-1-101 read).<br>1. The Sunday and legal-holiday roll, which includes election days. Without it, the trimmed clause charges a fee on the next-business-day payment the statute protects, and no number check can see that.<br>2. The 10% cap on any late charge "however described". A daily fee, or a second charge for the same late payment, can add up past it where the M.13 number check can't see. A flat fee above 10% is still M.13's job.<br>Both sentences are the pre-scrub text, re-checked against the statute.<br>**`security-deposit-return-tn-act`: no issue.** It keeps the § 66-28-301(b)(1)(A) waiver notice and the (h) account location, and promises nothing narrower than (b)-(g).<br>**`casualty-termination-tn`: no issue.** It is the landlord's § 66-28-503(b) right with both of its conditions: restoration requires the tenant to vacate, and termination comes within 14 days of written notice. It also keeps tenant liability for fault, and states nothing contrary to the (c) refund. No condition the statute attaches is missing, including any the pre-scrub text never carried.<br>**`periodic-tenancy-notice-tn`** (the scrub's notice rewrite) keeps "at least" floors matching § 66-28-512(a)-(b). It has no "full days" floor to lose.<br>**Required lease content:** Ch. 28, Ch. 7 and Title 29 Ch. 18 were searched as full text, not only each clause's citation. Every provision found is carried by an active TN row:<br>• § 66-28-201(a) advisory: `renters-insurance-advisory-tn`<br>• § 66-28-301(b)(1)(A) and (h): `security-deposit-return-tn-act`<br>• § 66-28-302: `landlord-disclosure-tn`<br>• § 66-28-505(b) 12-point bold waiver: `nonpayment-notice-waiver-tn`<br>• § 66-28-403 last-30-days showings: `landlords-access-tn-act`<br>• § 66-28-108: `electronic-notice-tn`<br>• § 66-28-106(b): `notices`<br>• § 29-18-123: `possession-bond-tn` |
| **Fix 5** tenant-chore split (rule 48) | **Fixed, 3 rows** | **No single-family split and no consideration requirement.** § 66-28-304(c)-(d) read: "may agree in writing that the tenant perform specified repairs, maintenance tasks ...", and (d) calls that "the separate agreement", which may not be "a condition to any obligation or performance of any rental agreement". Tennessee dropped the uniform act's single-family subsection and the "separate writing ... adequate consideration" words, but kept the "separate agreement" no-condition rule for every dwelling.<br>This log's 2026-09-30 retro (rule 48) already read (d) as making the agreement a separate writing. Rule 48's every-dwelling branch (Oklahoma, Montana; settled) therefore applies:<br>• `landscaping-irrigation` and `snow-removal`: TN removed. Only the TN tag, the TN segment and `last_checked` changed.<br>• `tenant-repair-agreement-tn`: rebuilt on the `maintenance-allocation-az` / `-nd` pattern with checkbox tasks (the two shared clauses' chores in their current wording, plus filters and bulbs), an optional consideration line (no builder variable), the separate-document instruction, the (d) no-condition rule, and the § 66-28-304(a)(1)-(4) duties excluded.<br>**Outside the 17 Act counties** § 66-28-304 doesn't apply and the two clauses would be lawful. They can be re-tagged for those counties when the builder knows the county (county-attribute backlog item, §14). |
| **Fix 6** rule 62 vetting | **Both vouched** | Recorded under "Vouches given" below. No shared text edited. |

**Delta:** `lease-clauses-TN-retro-delta.csv`, 7 changed rows, 0 new, 17 columns, CRLF, same header as the master.
- **TN rows:** `holdover-rate-tn`, `late-fee-limit-tn`, `tenant-repair-agreement-tn`, `edu-dv-lease-termination-tn`, `edu-casualty-termination-tn`.
- **Shared rows, TN tag, TN segment and `last_checked` only:** `landscaping-irrigation`, `snow-removal`.

**Checks, merged against the master:**
- No duplicate ids and no dangling `supersedes`.
- TN goes from 144 to 142 active (−2 shared tags). Every other state is unchanged.
- Only `{{holdover_daily_rate}}` and `{{late_fee_amount}}` appear as builder variables, both existing.
- The two shared rows' other 23 state segments are byte-identical to the master.
- No active TN row points to the two untagged rows. The mention in `tenant-repair-agreement-tn`'s note is provenance.

**For Claude Code / the product (flagged, not fixed):**
- **Separate-document output (M.12):** still needed for `tenant-repair-agreement-tn`, which now carries Tennessee's lawn and snow chores.
- **County-attribute backlog item:** add `landscaping-irrigation` and `snow-removal` as candidates to re-tag for the 78 non-Act counties.
- **`tenant-repair-agreement-ok`'s note** says "Unlike URLTA and Tennessee (`tenant-repair-agreement-tn`), Oklahoma's rule is not limited by dwelling type". Tennessee's rule isn't limited by dwelling type either (§ 66-28-304(c)). That is OK's segment, so it is not edited here.

### Vouches given (rule 62; file under §9, Propagation notes, at the merge)
- **`surrender-end-of-term`** (CA's proposal, 2026-10-03): adding "unless applicable law entitles Tenant to remain" is **vouched, no change needed** in TN.
  - The qualified wording is lawful and accurate. Tennessee has no just-cause rule, but law can let a tenant stay past a termination: retaliation bars an action for possession (§ 66-28-514), and in a domestic-abuse termination "only the perpetrator may be evicted" (§ 66-28-517(g); § 66-7-109(e)).
  - The current unqualified "will surrender ... immediately" therefore overstates the duty in those cases, though only slightly. The edit is self-limiting and changes nothing this state's TN segment relies on.
- **`default-by-tenant`** (MN's proposal, 2026-10-02): moving the no-cure carve-out into its own sentence reaching both limbs is **vouched, support the edit**.
  - It can't be read to drop a notice Tennessee requires. In Act counties the 14-day nonpayment notice (§ 66-28-505(a)(2)) goes only through the 12-point bold lease waiver (§ 66-28-505(b), `nonpayment-notice-waiver-tn`), and a lease can't otherwise waive Act rights (§ 66-28-201(a)). Outside them § 66-7-109(a) requires 14 days' notice after demand. The carve-out speaks only to an opportunity to cure, and both statutes impose their notices whatever the lease says.
  - What the edit reaches are the no-cure routes this state's segment already relies on: the Act's 7-day repeat termination (§ 66-28-505(a)(2)(B)) and the non-Act 14-day repeat (§ 66-7-109(a)(2)).
  - Where the bold waiver is signed, it drops only the lease's own promise of written notice of a rent default, which law then doesn't require. Taylor's Indiana (2026-10-03) and Pennsylvania (2026-10-04) decision applies: the lease follows the statute, with no optional notice clause.
  - **Education row for Claude Code to update at the merge:** `edu-termination-notices-tn` should tell landlords they may still give written notice of a rent default first, even where the tenant signed the waiver or the breach is a repeat.

### Proposed SOP changes
1. **Rule 48:** a statute can require a separate agreement without saying "separate writing".
   - Tennessee's § 66-28-304(c) says only "in writing", but (d) calls it "the separate agreement" that can't condition the rental agreement. That is the uniform act with the single-family and consideration words deleted.
   - Treat such a statute as the every-dwelling branch, and read the next subsection, not only the permission sentence.
2. **Rule 79:** re-read provenance-repaired rows section-open when the section is reachable.
   - Carrying a basis forward is enough to restore provenance, but it would have missed both errors in `edu-casualty-termination-tn`. They came from a later rewrite (the 2026-09-30 sync), not from the scrub that created the row.
   - The row was rewritten "from the verified source row", yet it dropped a defined term and a fault qualifier the source note carried.
3. **Rule 53:** when a holdover trigger is extended to an earlier termination, check whether the statute keeps the lease enforceable for rent after a breach notice (Tenn. Code Ann. § 66-28-505(c)).
   - If it does, add "Landlord will not recover both this charge and Rent for the same day". Otherwise the charge and rent for the rest of the Term cover the same days.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base f48b67b` (TN's restage base): 5 TN rows updated (`holdover-rate-tn`, `late-fee-limit-tn`, `tenant-repair-agreement-tn`, `edu-dv-lease-termination-tn`, `edu-casualty-termination-tn`) and TN untagged from `landscaping-irrigation` and `snow-removal` (rule 48's every-dwelling branch; the chores now sit in the rebuilt `tenant-repair-agreement-tn`); nothing refused. TN active 144 → 142; no same-topic pairs; section pointers resolve.
- **Citations file:** the two untagged rows removed; the five TN rows re-dated, with §§ 66-7-112, 66-28-104(15), 15-1-101, 66-28-505(c), 66-28-201(d) and 66-28-304(c)-(d) added where the rows now rely on them.
- **Rule 62:** TN vouched for CA's `surrender-end-of-term` qualifier and supports MN's `default-by-tenant` edit under Taylor's settled notice decision; at the merge, `edu-termination-notices-tn` should say landlords may still give written notice of a rent default first (backlog). Both recorded in the backlog tally.
- **Flagged:** `tenant-repair-agreement-ok`'s OK segment says Tennessee's chore rule is limited by dwelling type; it isn't (§ 66-28-304(c)). OK's segment, so left for OK's next pass (backlog). `landscaping-irrigation` and `snow-removal` are candidates to re-tag for the 78 non-Act counties once the builder knows the county (county-attribute item).
- **Guards:** all pass. **Statute spot-check:** not possible from here (Justia serves a bot check to this machine and the official Lexis copy a captcha); the pass read each section from Justia's host copy with its history line and saved the quoted text in `tn-retro-1.52-sources-2026-10-04.md`.
- **SOP 1.53:** all three proposals adopted (rules 48, 53, 79). TN's 35c and 79 cells set to ✓.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no TN override. TN's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where TN law lets Landlord proceed without a cure opportunity. Uniform; no TN override. `edu-termination-notices-tn` now says no further notice is required where the tenant signed the bold waiver or a repeat breach allows termination, and that landlords may still give one.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for TN. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any TN row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach TN's law; to be confirmed at TN's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-07): Desktop's running record

## TN topic gaps: running record

Pass: Tennessee topic gaps (GAPS-PROMPT.md staged 2026-11-06 23:36, SOP 1.98), 2026-11-07.

### Status: COMPLETE (final delivery 2026-11-07, late evening MT)

- **Delta:** 239 rows answering all 239 missing topics.
  - 237 new LANDLORD_EDUCATION rows.
  - 2 tags: carpet-cleaning-ar and nonrefundable-fees-wv.
  - Final SHA-256 c890bc8d…0bb1bb.
- **Log:** gaps-log-TN.md, SHA-256 961aa7eb…0abe1. Sections §1–§7, then SOP proposals and topic questions.

### Channel
- **Source:** Lexis Tennessee Code Unannotated, free public access. Currency line: "Current through the 2026 Regular Session and the 2026 2nd Extraordinary Session."
- **CAPTCHA:** one; Taylor cleared it.
- **Coverage:** 174 sections read section-open; 588 searches saved.
- **Not read:** the Constitution and federal sources.

### Independent check (rule 80)
- **Round 1:** all rows; 18 findings, fixed in 48 rows.
- **Round 2:** the 48 edited rows; 13 findings, fixed.
- **Edits:** recorded as exact replacements in fixes/r1.py and fixes/r2.py. Rows edited after the last round are listed in log §5.
- **Key corrections:**
  - § 13-6-106 public-nuisance receivership: the receiver's lien is first, ahead of mortgages.
  - § 66-28-105(b): nonresident landlord's agent for service.
  - § 66-28-104(15): "substantially impaired" means deemed unfit by a governmental authority.
  - § 66-7-109(a)(1)(C), (c), (f): notice periods.

### Decisions
- **9a:** early-termination-ks passes; no TN variant.
- **9b:** holdover-rate-tn confirmed.
- **9c:** see F3.
- **8:** confirmed.
- **7:** no conflict; optional notes line.
- **6:** shared row not tagged.
- **D17:** rows whose only hits are unread sections say so: rent tax, construction liens, criminal trespass, nuisance statute, elevators, non-agricultural foreign ownership.

### Findings on existing rows (log §6)
- **F1:** possession-bond-tn and edu-prohibited-lease-terms-tn vs § 25-2-101(a).
- **F2:** edu-no-for-cause-eviction-tn vs § 29-18-102(b).
- **F3:** nonpayment-notice-waiver-tn needs a CARES Act § 9058(c) pointer.

### Open question to Taylor
- **Q1 (rule 12):** may the federal sections be saved? Recommended: yes.

# Topic gaps pass (end-of-run consistency pass, 2026-11-07): Desktop's log

## Topic gaps: Tennessee (end-of-run consistency pass) — gaps log

Cumulative log, SOP 1.98. 239 delta rows (237 new, 2 tagged) answering 239 of 239 missing topics; 0 topics still open. Built 2026-11-08T03:02Z.

### §1 Sources, channel and currency

**Step A (2026-11-07): passed.** `lease-clauses.csv` 55,756,124 bytes, SHA-256 887af16e…f9743b; 14,729 rows, 14,617 active; 143 active rows carry TN (125 topics); `missing-topics-TN.md` lists 239 topics. The corpus tar's SHA-256 matches and `verify_tn.py` checked 25 files with 0 problems. Old output copies in `/mnt/user-data/outputs` (the 2026-10-04 retro delta, log and sources file) were deleted before work began.

**Channel.** Every Tennessee Code section relied on was read on the LexisNexis Tennessee Code Unannotated free public-access site (reached from http://www.lexisnexis.com/hottopics/tncode; pages on advance.lexis.com), in the built-in browser, whole, on its own document page. The page text was saved with the site's currency line and the section's history line (`src/<section>.txt` in the workspace: CITE, SOURCE with the Lexis document id, READ time, CURRENCY, HISTORY, a hash of the normalised body, then the body). 174 sections have been read this way (2026-11-07, evening, Mountain time). Whole-Code searches ran on the same site's terms-and-connectors search, scoped to "Statutes and Legislation"; all 588 searches are saved with their counts and result lists (`battery/lexis_log_20261107.json`), and every battery line in the delta and in §3 is generated from that file.

**Currency.** Every document page printed: "Current through the 2026 Regular Session and the 2026 2nd Extraordinary Session." Each row's notes give the latest act on the history line of each section it relies on. Sections relied on so far whose history lines show a 2025 or 2026 act: Tenn. Code Ann. § 47-18-104 (2026 Pub. Ch. 614, 647, 866, 1029, 1117, among others; read only for the general bar on unfair or deceptive acts), § 62-20-115 (2026 Pub. Ch. 1039; read for scope only), § 26-2-301 (2026 Pub. Ch. 709, homestead for a disabled adult child; the current text was read), § 39-17-1803 (2025 Pub. Ch. 87) and § 66-28-206 (2026 Pub. Ch. 606 § 2, effective January 1, 2027). § 66-28-402 is printed in two versions; both were read (the version in force until January 1, 2027, and the version effective that day, which adds (a)(7) under Pub. Ch. 606 § 3). Its subsection (b), relied on, is the same in both. Cross-check against the 2026 abstracts held in the corpus ("Compilation of Abstracts ... 2026", Office of Legal Services, August 27, 2026): the 2026 acts listed as amending Titles 25, 26, 28, 29, 39 Chapter 17 or 66, Title 47 Chapters 14 and 18, Title 62 Chapter 20 or Title 68 Chapter 221 were screened by their abstracts. The two Landlord and Tenant acts are Pub. Ch. 606 (firearms: new §§ 66-7-113 and 66-28-206, and § 66-28-402(a)(7), all effective January 1, 2027) and Pub. Ch. 657 (eviction-service videos: new § 29-18-136). All four sections were read section-open. The other acts in those titles (for example Pub. Ch. 684, statute of repose; 727, 731 and 914, real property and associations; 866, hotel booking sites; 952 and 1113, utilities; 1039, professions; 1089, infrastructure districts) concern other subjects, and none appears on the history line of a section relied on. The 2025 and 2026 Public Chapter PDFs on publications.tnsosfiles.com were not reached by script (README: 403 "Request blocked"). No row in this batch relies on an act's text that Lexis does not already print. Before the final delivery, the acts on the history lines of relied-on sections (2026 Pub. Ch. 606, 866 and 1039, and the others on § 47-18-104) will be opened in the built-in browser and checked against the Lexis text (item 11).

**CAPTCHA.** The first document view raised a "Captcha Validation" page. Work stopped and Taylor was asked in the chat to clear it in the browser pane; he did ("done", 18:52 MT) and no further CAPTCHA appeared. It was never worked around. Justia showed a Cloudflare check; it was not attempted, the tab was closed, and Justia is not used.

**Not read this pass.** Case law (penalty doctrine, American rule on fees, partial-payment tolling) was not searched; rows that touch it say so and state no case law. Federal sources (15 U.S.C. § 1692f) are referred to generally and not quoted; see §4 Q1. Tennessee Public Utility Commission rules (Tenn. Comp. R. & Regs.) were not read. The Tennessee Constitution is outside the Code search scope ("trial by jury" w/10 inviolate: 0 hits) and has not been read; no row relies on it.

**Batches.** Batch 1 (money, fees, deposits): 29 new education rows and 2 tags of shared clauses. Batch 2 (waivers, prohibited terms): 15 new education rows. Batch 3 (remedies and termination, items 8 and 9): 16 new education rows. Batch 4 (domestic violence, landscaping and snow, keys, associations; items 3, 6 and 7): 11 new education rows. Batch 5 (building, safety and environmental disclosures): 34 new education rows, mostly confirmed absences. Batch 6 (utilities, EV charging, lease formation and notices): 38 new education rows. Batch 7 (fair housing and animals, eviction procedure, rent, privacy, land and local topics, and the three confirmed-absence summary topics): 94 new education rows. All 239 topics now have a row. Every single-quoted span of statute text in the delta was checked by script against the saved section texts (`scripts/qcheck.py`: all found).

**Result lists.** From search 571 on, the saved log keeps the first 60 results of each search (the count is always the site's full count). Battery lines that show hits list only results from the saved portion and say "and others" where more exist.

### §2 Topics answered

| Topic | Row id | Status | Citation |
|---|---|---|---|
| `abandonment-and-mitigation` | `edu-abandonment-mitigation-tn` | Present | Tenn. Code Ann. §§ 66-28-505(c), 66-28-507(c), 66-28-515(a), 66-28-405(a) |
| `accessory-dwelling-unit` | `edu-no-adu-rental-rule-tn` | Absent | Tenn. Code Ann. §§ 13-7-502, 68-221-402 |
| `actual-notice-method` | `edu-actual-notice-method-tn` | Present | Tenn. Code Ann. §§ 66-28-106(a), 66-28-108 |
| `adverse-proceeding-notice` | `edu-no-adverse-proceeding-notice-tn` | Absent | None (absence; battery in §3) |
| `alarm-tampering-fee` | `edu-alarm-tampering-tn` | Present | Tenn. Code Ann. §§ 68-102-151(b)(2), 68-120-112(b)(2) |
| `alt-housing` | `edu-alt-housing-tn` | Present | Tenn. Code Ann. § 66-28-502 |
| `animal-care-access` | `edu-no-animal-care-access-rule-tn` | Absent | Tenn. Code Ann. §§ 66-28-403, 66-28-507 |
| `appliances-excluded` | `edu-no-appliance-presumption-tn` | Absent | Tenn. Code Ann. § 66-28-502(a)(3) |
| `asbestos-hazards` | `edu-no-asbestos-notice-tn` | Absent | None (absence; battery in §3) |
| `association-obligations-disclosure` | `edu-no-association-disclosure-rule-tn` | Absent | Tenn. Code Ann. § 66-28-402 |
| `attorney-fees` | `edu-attorney-fees-tn` | Present | Tenn. Code Ann. §§ 66-28-505(d), 66-28-510, 66-28-501(a) |
| `automatic-renewal` | `edu-automatic-renewal-tn` | Present | Tenn. Code Ann. § 47-18-133(a) |
| `balcony-inspection` | `edu-no-balcony-inspection-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `bed-bug-cooperation` | `edu-no-bed-bug-cooperation-rule-tn` | Absent | Tenn. Code Ann. § 66-28-401(2) |
| `binding-arbitration` | `edu-binding-arbitration-tn` | Present | Tenn. Code Ann. §§ 29-5-307(a), 29-5-304(c), 29-5-305(b)(4), 66-28-515(b) |
| `cannabis` | `edu-no-cannabis-protection-tn` | Absent | Tenn. Code Ann. § 39-17-1802 |
| `carpet-cleaning` | `carpet-cleaning-ar` | Tagged | Tenn. Code Ann. §§ 66-28-104, 66-28-301(b), 66-28-301(e), 66-28-301(g) |
| `casualty-and-mitigation-waivable` | `edu-casualty-mitigation-waiver-tn` | Present | Tenn. Code Ann. §§ 66-28-104(15), 66-7-102(a) |
| `certificate-of-occupancy-disclosure` | `edu-certificate-of-occupancy-tn` | Absent | Tenn. Code Ann. §§ 13-21-301, 13-21-308 |
| `children-occupancy` | `edu-children-occupancy-tn` | Absent | Tenn. Code Ann. §§ 4-21-601, 4-21-602 |
| `cold-weather-vacate-notice` | `edu-no-cold-weather-rule-tn` | Absent | None (absence; battery in §3) |
| `collection-fee` | `edu-collection-fee-tn` | Absent | Tenn. Code Ann. § 66-28-104(13) |
| `common-area-lighting` | `edu-no-common-area-lighting-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `communal-land-lease-approval` | `edu-no-communal-land-rule-tn` | Absent | None (absence; battery in §3) |
| `condemned-premises-rent-bar` | `edu-no-condemned-rent-bar-tn` | Absent | Tenn. Code Ann. §§ 66-28-502(a)(1), 13-6-102(12) |
| `confession-of-judgment` | `edu-confession-of-judgment-tn` | Present | Tenn. Code Ann. §§ 66-28-203(a)(1), 25-2-101(a), 29-18-123(a) |
| `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `confirmed-absences-misc` | `edu-confirmed-absences-misc-tn` | Absent | None (absence; battery in §3) |
| `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-tn` | Present | Tenn. Code Ann. §§ 29-18-135, 68-102-151, 39-16-304, 4-21-601, 26-2-301 |
| `construction-liens` | `edu-construction-liens-tn` | Absent | None (absence; battery in §3) |
| `cure-and-eviction-grounds` | `edu-cure-and-eviction-grounds-tn` | Present | Tenn. Code Ann. §§ 66-28-505(a)(1), 66-28-517(a), 66-7-109(a), 66-28-201(a) |
| `defective-drywall-disclosure` | `edu-no-drywall-disclosure-tn` | Absent | None (absence; battery in §3) |
| `deposit-cost-schedule` | `edu-no-deposit-cost-schedule-tn` | Absent | Tenn. Code Ann. §§ 66-28-104(14), 66-28-301(b)(1) |
| `deposit-escheat` | `edu-deposit-escheat-tn` | Present | Tenn. Code Ann. §§ 66-28-301(f), 66-29-105(a)(14), 66-29-102(10) |
| `deposit-installments` | `edu-no-deposit-installments-tn` | Absent | None (absence; battery in §3) |
| `deposit-last-month-rent` | `edu-no-deposit-last-month-rule-tn` | Absent | Tenn. Code Ann. § 66-28-501(b) |
| `deposit-surrender-notice` | `edu-deposit-move-out-notice-tn` | Present | Tenn. Code Ann. § 66-28-301(b)(1) |
| `designated-repairer` | `edu-no-designated-repairer-rule-tn` | Absent | Tenn. Code Ann. § 66-28-505(a)(2) |
| `disability-accommodation` | `edu-disability-accommodation-tn` | Present | Tenn. Code Ann. §§ 4-21-601(b)(2), 66-7-104(a) |
| `disaster-displaced-guests` | `edu-no-disaster-guest-rule-tn` | Absent | None (absence; battery in §3) |
| `disaster-duties` | `edu-disaster-duties-tn` | Present | Tenn. Code Ann. §§ 66-28-503, 66-7-102 |
| `double-letting` | `edu-no-double-letting-rule-tn` | Absent | Tenn. Code Ann. § 66-28-501(a) |
| `drug-free-housing-addendum` | `edu-no-drug-free-addendum-rule-tn` | Absent | Tenn. Code Ann. §§ 66-7-107, 66-28-517 |
| `dv-confidentiality` | `edu-dv-confidentiality-tn` | Present | Tenn. Code Ann. §§ 66-7-112(b)(3), 40-38-606(a) |
| `dv-deposit-timing` | `edu-no-dv-deposit-timing-rule-tn` | Absent | Tenn. Code Ann. §§ 66-28-205(c), 66-28-301 |
| `dv-eviction-protection` | `edu-dv-eviction-protection-tn` | Present | Tenn. Code Ann. §§ 66-28-517(g)(1), 36-3-601, 66-7-109(e), 66-28-205(d)(2) |
| `dv-lockchange` | `edu-no-dv-lockchange-rule-tn` | Absent | Tenn. Code Ann. §§ 36-3-606(a)(4), 66-28-517(g)(2) |
| `dv-protection-order-chapter-moved` | `edu-dv-protection-order-citations-tn` | Present | Tenn. Code Ann. §§ 36-3-601, 66-7-109(e) |
| `dv-qualifying-documents` | `edu-dv-qualifying-documents-tn` | Present | Tenn. Code Ann. §§ 66-7-112(b)(1), 66-28-517(g)(4) |
| `electric-submetering-disclosure` | `edu-no-electric-resale-rule-tn` | Absent | None (absence; battery in §3) |
| `emergency-contact` | `edu-emergency-contact-tn` | Present | Tenn. Code Ann. § 66-28-302 |
| `eminent-domain` | `edu-no-eminent-domain-rent-rule-tn` | Absent | None (absence; battery in §3) |
| `employee-screening` | `edu-no-employee-screening-rule-tn` | Absent | None (absence; battery in §3) |
| `energy-data-release` | `edu-no-energy-data-rule-tn` | Absent | None (absence; battery in §3) |
| `entity-landlord-court-representation` | `edu-no-entity-representation-statute-tn` | Absent | None (absence; battery in §3) |
| `environmental-event-termination` | `edu-no-environmental-termination-tn` | Absent | Tenn. Code Ann. § 66-28-503 |
| `ev-charging-end-of-tenancy` | `edu-no-ev-end-of-tenancy-rule-tn` | Absent | None (absence; battery in §3) |
| `ev-charging-requirements` | `edu-no-ev-resale-rule-tn` | Absent | None (absence; battery in §3) |
| `ev-charging-shared-area` | `edu-ev-charging-hoa-tn` | Present | Tenn. Code Ann. § 66-27-1002 |
| `eviction-hardship-stay` | `edu-no-hardship-stay-tn` | Absent | Tenn. Code Ann. §§ 29-18-126, 29-18-130 |
| `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-rule-tn` | Absent | Tenn. Code Ann. §§ 66-28-510, 29-18-125 |
| `exculpatory-clauses` | `edu-exculpatory-clauses-tn` | Present | Tenn. Code Ann. §§ 66-28-203(a)(2), 66-28-201(a) |
| `expedited-criminal-eviction` | `edu-expedited-criminal-eviction-tn` | Present | Tenn. Code Ann. §§ 66-28-517, 66-7-109, 66-7-107 |
| `expedited-deposit-disposition` | `edu-no-expedited-deposit-disposition-tn` | Absent | Tenn. Code Ann. § 66-28-301(b)(2) |
| `family-child-care` | `edu-no-family-child-care-right-tn` | Absent | None (absence; battery in §3) |
| `farmland-hunting-rights` | `edu-farmland-hunting-tn` | Present | Tenn. Code Ann. § 70-4-106(a)(1) |
| `fee-in-lieu-of-deposit` | `edu-no-fee-in-lieu-of-deposit-rule-tn` | Absent | Tenn. Code Ann. §§ 66-28-301, 66-28-104 |
| `fee-transparency` | `edu-no-fee-transparency-rule-tn` | Absent | Tenn. Code Ann. § 47-18-104 |
| `fee-unprovided-service` | `edu-no-fee-unprovided-service-rule-tn` | Absent | Tenn. Code Ann. § 66-28-516 |
| `fire-code-standard` | `edu-building-code-source-tn` | Present | Tenn. Code Ann. § 68-120-101(a)(2) |
| `fire-sprinkler-duty` | `edu-no-sprinkler-retrofit-rule-tn` | Absent | Tenn. Code Ann. § 68-120-101(a)(4) |
| `foreclosure-disclosure` | `edu-no-foreclosure-disclosure-tn` | Absent | None (absence; battery in §3) |
| `foreign-ownership` | `edu-foreign-ownership-tn` | Present | Tenn. Code Ann. §§ 66-2-302(5), 66-2-303(b)(1), 66-2-302(10), 66-2-302(9), 66-2-303(d), 66-2-301 |
| `forfeiture-redemption` | `edu-no-forfeiture-redemption-tn` | Absent | None (absence; battery in §3) |
| `frozen-standard-incorporation` | `edu-no-frozen-standard-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304(a)(1) |
| `furnishings-included` | `edu-no-furnishings-rule-tn` | Absent | None (absence; battery in §3) |
| `good-cause-notice` | `edu-no-good-cause-notice-tn` | Absent | None (absence; battery in §3) |
| `government-fee-reimbursement` | `edu-no-government-fee-rule-tn` | Absent | Tenn. Code Ann. § 66-28-104 |
| `governmental-fines` | `edu-governmental-fines-tn` | Absent | Tenn. Code Ann. § 66-28-104 |
| `guarantor-renewal` | `edu-no-guarantor-renewal-rule-tn` | Absent | None (absence; battery in §3) |
| `guest-rights` | `edu-no-guest-rights-statute-tn` | Absent | None (absence; battery in §3) |
| `habitability-materiality` | `edu-habitability-materiality-tn` | Present | Tenn. Code Ann. §§ 66-28-304, 66-28-502, 66-28-104 |
| `habitability-modifiable` | `edu-habitability-modifiable-tn` | Present | Tenn. Code Ann. §§ 66-28-304(c), 66-28-502(a)(3), 66-28-201(a) |
| `habitability-presumption` | `edu-no-habitability-presumption-tn` | Absent | None (absence; battery in §3) |
| `habitability-statement` | `edu-no-habitability-statement-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `habitability-waiver` | `edu-habitability-waiver-tn` | Present | Tenn. Code Ann. §§ 66-28-304(a)(2), 66-28-201(a) |
| `hazardous-contamination-disclosure` | `edu-no-contamination-disclosure-tn` | Absent | Tenn. Code Ann. §§ 66-5-201, 66-5-202 |
| `health-district-rental-rules` | `edu-no-health-district-rules-tn` | Absent | None (absence; battery in §3) |
| `heating` | `edu-heating-tn` | Present | Tenn. Code Ann. § 66-28-502(a)(3) |
| `hoa` | `edu-hoa-leasing-tn` | Present | Tenn. Code Ann. §§ 66-27-703, 66-27-701(6) |
| `holding-deposit` | `edu-no-holding-deposit-rule-tn` | Absent | None (absence; battery in §3) |
| `home-business` | `edu-no-home-business-rule-tn` | Absent | Tenn. Code Ann. § 66-28-404 |
| `homestead-waiver` | `edu-homestead-waiver-tn` | Present | Tenn. Code Ann. §§ 26-2-301(a)(1), 26-2-103(a) |
| `informal-dispute-resolution` | `edu-informal-dispute-resolution-tn` | Absent | Tenn. Code Ann. § 66-28-201 |
| `inspection-condemnation-disclosure` | `edu-no-inspection-condemnation-disclosure-tn` | Absent | None (absence; battery in §3) |
| `inspection-notice-penalty` | `edu-no-inspection-notice-penalty-tn` | Absent | Tenn. Code Ann. § 66-28-513 |
| `jury-waiver` | `edu-jury-waiver-tn` | Present | Tenn. Code Ann. §§ 29-18-119(a), 29-18-120(b), 29-2-101(a) |
| `key-control-policy` | `edu-no-key-control-rule-tn` | Absent | None (absence; battery in §3) |
| `knowing-use-penalty` | `edu-knowing-use-penalty-tn` | Present | Tenn. Code Ann. §§ 66-28-203(b), 66-28-206(d) |
| `landlord-breach-remedy` | `edu-tenant-remedies-landlord-breach-tn` | Present | Tenn. Code Ann. §§ 66-28-501(a), 66-28-301, 66-28-502, 66-28-201(a) |
| `landlord-liability-insurance` | `edu-no-landlord-insurance-mandate-tn` | Absent | Tenn. Code Ann. § 66-28-201 |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-tn` | Present | Tenn. Code Ann. §§ 66-28-510, 66-28-505(c), 29-18-119(a) |
| `landscaping-irrigation` | `edu-landscaping-tn` | Present | Tenn. Code Ann. § 66-28-304(c) |
| `late-fee-limit` | `edu-late-fee-limit-tn` | Present | Tenn. Code Ann. § 66-28-201(d) |
| `lead-safe-certification` | `edu-no-lead-safe-certificate-tn` | Absent | Tenn. Code Ann. §§ 68-131-402, 68-131-404 |
| `lead-state-notices` | `edu-no-state-lead-notice-tn` | Absent | Tenn. Code Ann. §§ 68-131-402, 68-131-404 |
| `lease-content-requirements` | `edu-no-lease-content-rule-tn` | Absent | Tenn. Code Ann. § 66-28-201(a) |
| `lease-copy` | `edu-no-lease-copy-rule-tn` | Absent | Tenn. Code Ann. § 66-28-302 |
| `lease-notice-initial-requirement` | `edu-no-initialing-rule-tn` | Absent | None (absence; battery in §3) |
| `lease-registration` | `edu-lease-registration-tn` | Present | Tenn. Code Ann. § 66-7-101 |
| `lease-term-limitation` | `edu-lease-formalities-tn` | Present | Tenn. Code Ann. § 29-2-101(a)(4) |
| `lease-type-parity` | `edu-no-lease-parity-rule-tn` | Absent | None (absence; battery in §3) |
| `lease-type-size` | `edu-lease-type-size-tn` | Present | Tenn. Code Ann. § 66-28-505(b) |
| `limitation-of-actions` | `edu-limitation-of-actions-tn` | Present | Tenn. Code Ann. §§ 28-3-109(a), 66-28-301(d) |
| `liquidated-damages` | `edu-liquidated-damages-tn` | Absent | Tenn. Code Ann. §§ 66-28-515, 66-28-201 |
| `lockout-for-rent-delinquency` | `edu-no-lockout-for-rent-tn` | Present | Tenn. Code Ann. §§ 66-28-511, 29-18-102(a) |
| `maintenance-duty-shift` | `edu-maintenance-duty-shift-tn` | Present | Tenn. Code Ann. §§ 66-28-304(c), 66-28-201(a) |
| `meter-conservation-charge` | `edu-no-meter-conservation-charge-tn` | Absent | None (absence; battery in §3) |
| `military-air-zone-disclosure` | `edu-no-military-zone-disclosure-tn` | Absent | None (absence; battery in §3) |
| `minor-tenant-filing` | `edu-no-minor-defendant-rule-tn` | Absent | Tenn. Code Ann. § 29-18-115 |
| `municipal-utility-lien` | `edu-no-municipal-utility-lien-rule-tn` | Absent | Tenn. Code Ann. § 68-221-620 |
| `nonrefundable-deposit-notice` | `nonrefundable-fees-wv` | Tagged | Tenn. Code Ann. § 66-28-104 |
| `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-tn` | Absent | None (absence; battery in §3) |
| `nonresident-owner-agent` | `edu-nonresident-owner-agent-tn` | Present | Tenn. Code Ann. § 66-28-105(b) |
| `notice-service-fee` | `edu-no-notice-service-fee-rule-tn` | Absent | Tenn. Code Ann. § 66-28-201(d) |
| `notice-to-quit-waiver` | `edu-notice-to-quit-waiver-tn` | Present | Tenn. Code Ann. §§ 66-28-505(b), 66-28-201(c), 66-28-201(a), 29-18-113, 66-7-109(a)(1) |
| `notice-to-vacate-additional-terms` | `edu-no-vacate-period-alteration-rule-tn` | Absent | Tenn. Code Ann. §§ 66-28-304, 66-28-504 |
| `nuisance` | `edu-nuisance-tn` | Present | Tenn. Code Ann. §§ 13-6-106(c)(1), 13-6-102(2) |
| `optional-lease-terms` | `edu-option-to-purchase-tn` | Present | Tenn. Code Ann. §§ 66-5-201, 66-5-202, 66-5-208 |
| `ordnance-demolition-meter-disclosures` | `edu-no-ordnance-disclosure-tn` | Absent | None (absence; battery in §3) |
| `other-landlord-facilities` | `edu-no-facility-duty-rule-tn` | Present | None (absence; battery in §3) |
| `owner-move-in-reservation` | `edu-no-owner-move-in-rule-tn` | Absent | None (absence; battery in §3) |
| `parking-rules-notice` | `edu-parking-towing-tn` | Present | Tenn. Code Ann. §§ 66-28-518, 66-28-519, 66-28-520, 66-28-402 |
| `part5-nonwaivable` | `edu-part5-nonwaivable-tn` | Present | Tenn. Code Ann. §§ 66-28-201(a), 66-28-203(b), 66-28-505(b), 66-28-201(c), 66-28-515(b) |
| `periodic-services-entry` | `edu-periodic-services-entry-tn` | Absent | Tenn. Code Ann. § 66-28-403 |
| `pest-control-notice` | `edu-no-pest-control-notice-tn` | Absent | Tenn. Code Ann. § 66-28-403(a) |
| `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-tn` | Absent | None (absence; battery in §3) |
| `plain-language-consumer-statement` | `edu-no-plain-language-statute-tn` | Absent | None (absence; battery in §3) |
| `political-access` | `edu-no-political-access-rule-tn` | Absent | None (absence; battery in §3) |
| `pool-safety` | `edu-no-pool-safety-rule-tn` | Absent | Tenn. Code Ann. § 68-14-322 |
| `portable-cooling-device` | `edu-no-cooling-device-right-tn` | Absent | None (absence; battery in §3) |
| `portable-solar` | `edu-no-portable-solar-right-tn` | Absent | Tenn. Code Ann. § 66-9-207 |
| `portfolio-thresholds` | `edu-no-portfolio-threshold-tn` | Present | Tenn. Code Ann. §§ 66-28-102, 4-21-602 |
| `private-well-testing` | `edu-no-well-testing-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `prohibited-acts-renter` | `edu-prohibited-acts-renter-tn` | Present | Tenn. Code Ann. § 66-28-401 |
| `promises-to-repair` | `edu-no-promises-to-repair-rule-tn` | Absent | Tenn. Code Ann. §§ 47-18-104, 66-28-304 |
| `prop65-rental-warning` | `edu-no-prop65-equivalent-tn` | Absent | None (absence; battery in §3) |
| `property-tax-rent-disclosure` | `edu-no-property-tax-statement-tn` | Absent | None (absence; battery in §3) |
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-tn` | Present | Tenn. Code Ann. § 4-21-601(a)(5) |
| `purpose-limitation` | `edu-purpose-limitation-tn` | Present | Tenn. Code Ann. §§ 66-7-105, 66-7-107(a)(1) |
| `recycling-notice` | `edu-no-recycling-notice-tn` | Absent | Tenn. Code Ann. § 66-28-304(a)(4) |
| `redemption` | `edu-no-redemption-right-tn` | Absent | Tenn. Code Ann. §§ 66-28-505, 66-28-508 |
| `religious-cultural-display` | `edu-no-religious-display-rule-tn` | Absent | None (absence; battery in §3) |
| `rent-concession` | `edu-no-rent-concession-rule-tn` | Absent | None (absence; battery in §3) |
| `rent-demand-bar` | `edu-rent-demand-tn` | Present | Tenn. Code Ann. §§ 66-28-201(c), 66-7-109(a)(1) |
| `rent-escalation` | `edu-no-rent-escalation-rule-tn` | Absent | Tenn. Code Ann. § 66-28-514 |
| `rent-installments` | `edu-rent-installments-tn` | Present | Tenn. Code Ann. § 66-28-201 |
| `rent-into-court-counterclaim` | `edu-no-rent-into-court-tn` | Absent | Tenn. Code Ann. § 29-18-130(b)(2) |
| `rent-receipt-anti-waiver` | `edu-no-rent-receipt-anti-waiver-tn` | Absent | Tenn. Code Ann. § 66-28-304(c) |
| `rent-reporting` | `edu-no-rent-reporting-rule-tn` | Absent | None (absence; battery in §3) |
| `rent-tax` | `edu-rent-tax-tn` | Absent | None (absence; battery in §3) |
| `repair-cost-termination` | `edu-repair-cost-termination-tn` | Present | Tenn. Code Ann. §§ 66-28-503(b), 66-28-514(b)(1) |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-notice-tn` | Absent | None (absence; battery in §3) |
| `repair-notice` | `edu-repair-notice-tn` | Present | Tenn. Code Ann. §§ 66-28-501(a), 66-28-505(a)(2), 66-28-201(a) |
| `required-disclosures` | `edu-no-required-coverage-notice-tn` | Absent | Tenn. Code Ann. § 66-28-302 |
| `required-fees` | `edu-no-required-fee-list-tn` | Absent | Tenn. Code Ann. §§ 66-28-104(13), 66-28-402(b) |
| `rights-responsibilities-guide` | `edu-no-rights-guide-tn` | Absent | None (absence; battery in §3) |
| `sanitary-code-variance` | `edu-no-sanitary-variance-rule-tn` | Absent | None (absence; battery in §3) |
| `seasonal-tenancy` | `edu-seasonal-tenancy-tn` | Present | Tenn. Code Ann. §§ 66-28-102, 13-7-602 |
| `security-deposit-holding` | `edu-security-deposit-holding-tn` | Present | Tenn. Code Ann. § 66-28-301(a) |
| `security-deposit-nonwaiver` | `edu-security-deposit-nonwaiver-tn` | Present | Tenn. Code Ann. §§ 66-28-201(a), 66-28-203(b) |
| `security-deposit-on-sale` | `edu-security-deposit-on-sale-tn` | Present | Tenn. Code Ann. § 66-28-305 |
| `security-deposit-penalty` | `edu-security-deposit-penalty-tn` | Present | Tenn. Code Ann. § 66-28-301(c) |
| `security-deposit-standards` | `edu-no-deposit-standards-rule-tn` | Absent | None (absence; battery in §3) |
| `security-devices` | `edu-no-security-device-rule-tn` | Absent | None (absence; battery in §3) |
| `senior-housing-work-card` | `edu-no-senior-work-card-rule-tn` | Absent | None (absence; battery in §3) |
| `service-animal-denial-penalty` | `edu-service-animal-denial-penalty-tn` | Present | Tenn. Code Ann. § 66-7-106(d) |
| `service-animal-misrepresentation` | `edu-service-animal-misrepresentation-tn` | Present | Tenn. Code Ann. §§ 39-16-304(b)(1), 66-7-111, 66-28-406, 66-28-505(f) |
| `sex-offender-occupancy` | `edu-sex-offender-residence-tn` | Present | Tenn. Code Ann. § 40-39-211(a)(1) |
| `sfr-occupancy-disclosure` | `edu-no-sfr-occupancy-disclosure-tn` | Absent | None (absence; battery in §3) |
| `shoreline-access-disclosure` | `edu-no-shoreline-disclosure-tn` | Absent | None (absence; battery in §3) |
| `showing-notice-waiver` | `edu-showing-notice-waiver-tn` | Present | Tenn. Code Ann. §§ 66-28-403(e)(5), 66-28-201(a) |
| `shutdown-rent-protection` | `edu-no-shutdown-protection-tn` | Absent | None (absence; battery in §3) |
| `single-family-zone-lease-limit` | `edu-no-single-family-zone-limit-tn` | Absent | None (absence; battery in §3) |
| `smart-access` | `edu-no-smart-access-rule-tn` | Absent | Tenn. Code Ann. § 66-28-403(d) |
| `smoke-drift-waiver` | `edu-smoke-drift-tn` | Present | Tenn. Code Ann. §§ 39-17-1803(a)(9), 39-17-1804(8), 39-17-1810, 39-17-1802, 66-28-201(a) |
| `snow-removal` | `edu-snow-removal-tn` | Present | Tenn. Code Ann. §§ 66-28-304(a)(3), 6-2-201(17) |
| `social-security-defense` | `edu-no-benefit-delay-defense-tn` | Absent | None (absence; battery in §3) |
| `special-district-representation` | `edu-no-special-district-rule-tn` | Absent | None (absence; battery in §3) |
| `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-tn` | Absent | None (absence; battery in §3) |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-tn` | Present | Tenn. Code Ann. §§ 29-2-101(a)(4), 66-7-101 |
| `statutory-caps` | `edu-statutory-caps-tn` | Present | Tenn. Code Ann. §§ 66-28-201(d), 47-14-103, 66-35-102(a), 29-18-130(b)(2) |
| `statutory-early-termination` | `edu-statutory-early-termination-tn` | Present | Tenn. Code Ann. §§ 66-28-104(15), 66-7-102(a), 66-28-103(c) |
| `steam-radiator-covers` | `edu-no-radiator-cover-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `stove-refrigerator` | `edu-no-appliance-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `student-housing` | `edu-student-housing-tn` | Present | Tenn. Code Ann. §§ 66-28-102, 4-21-602 |
| `subsidized-inspection-refusal` | `edu-no-subsidized-inspection-rule-tn` | Absent | None (absence; battery in §3) |
| `subsidy-habitability-proration` | `edu-no-subsidy-proration-rule-tn` | Absent | None (absence; battery in §3) |
| `subsidy-late-fee` | `edu-no-subsidy-late-fee-rule-tn` | Absent | Tenn. Code Ann. § 66-28-201 |
| `substandard-property-receivership` | `edu-substandard-receivership-tn` | Present | Tenn. Code Ann. §§ 13-6-106(c)(1), 13-6-102(2), 13-6-102(14), 13-6-106(c)(2) |
| `tax-escalation` | `edu-no-tax-escalation-rule-tn` | Absent | Tenn. Code Ann. § 66-28-104 |
| `telecom-access` | `edu-no-telecom-access-rule-tn` | Absent | None (absence; battery in §3) |
| `tenancy-at-will` | `edu-no-tenancy-at-will-statute-tn` | Absent | Tenn. Code Ann. § 66-28-202 |
| `tenant-bankruptcy` | `edu-no-tenant-bankruptcy-rule-tn` | Absent | None (absence; battery in §3) |
| `tenant-confidential-information` | `edu-tenant-confidential-info-tn` | Present | Tenn. Code Ann. § 66-7-112(b)(3) |
| `tenant-employee-housing` | `edu-no-employee-housing-rule-tn` | Absent | None (absence; battery in §3) |
| `tenant-insurance-claims` | `edu-no-tenant-claim-rule-tn` | Absent | None (absence; battery in §3) |
| `tenant-portal` | `edu-tenant-portal-tn` | Present | Tenn. Code Ann. §§ 66-28-302, 66-28-108 |
| `tenant-records` | `edu-no-tenant-records-rule-tn` | Absent | None (absence; battery in §3) |
| `tenant-repair-remedies` | `edu-tenant-repair-remedies-tn` | Present | Tenn. Code Ann. §§ 66-28-501(a), 66-28-502(a)(1) |
| `tenant-right-to-organize` | `edu-no-tenant-organizing-rule-tn` | Absent | Tenn. Code Ann. § 66-28-514 |
| `tenant-rights-statement` | `edu-no-tenant-rights-statement-tn` | Absent | None (absence; battery in §3) |
| `tenant-statutory-duties` | `edu-tenant-statutory-duties-tn` | Present | Tenn. Code Ann. §§ 66-28-401(1), 66-28-402 |
| `term-change-notice` | `edu-term-change-notice-tn` | Absent | Tenn. Code Ann. § 66-28-512(b) |
| `tpa-exemption-notice` | `edu-no-tpa-exemption-notice-tn` | Absent | Tenn. Code Ann. § 66-35-102 |
| `tpa-notice` | `edu-no-tpa-notice-tn` | Absent | None (absence; battery in §3) |
| `tpa-sunset` | `edu-no-tpa-sunset-tn` | Absent | Tenn. Code Ann. § 66-28-102 |
| `translation-duty` | `edu-no-translation-duty-tn` | Absent | None (absence; battery in §3) |
| `trespass-notice` | `edu-trespass-notice-tn` | Present | Tenn. Code Ann. §§ 66-28-202(b), 29-18-135 |
| `truth-in-renting` | `edu-no-truth-in-renting-tn` | Absent | Tenn. Code Ann. § 66-28-203 |
| `unbundled-parking` | `edu-no-unbundled-parking-rule-tn` | Absent | None (absence; battery in §3) |
| `unconscionability` | `edu-unconscionability-tn` | Present | Tenn. Code Ann. §§ 66-28-204(a), 66-28-505(f)(1) |
| `unpaid-damages-interest` | `edu-unpaid-amount-interest-tn` | Present | Tenn. Code Ann. §§ 47-14-103(2), 47-14-121(c), 29-18-125, 66-28-201(d) |
| `usufructuary-lessor` | `edu-no-usufruct-rule-tn` | Absent | None (absence; battery in §3) |
| `utility-allowance-cap` | `edu-no-utility-allowance-rule-tn` | Absent | None (absence; battery in §3) |
| `utility-apportionment` | `edu-no-utility-apportionment-rule-tn` | Absent | Tenn. Code Ann. § 66-28-104(13) |
| `utility-deposit-return` | `edu-no-utility-deposit-rule-tn` | Absent | Tenn. Code Ann. §§ 66-29-105(a)(12), 68-221-620(d)(1) |
| `utility-disclosure-attachment` | `edu-no-utility-disclosure-attachment-tn` | Absent | None (absence; battery in §3) |
| `utility-disconnection-notice-authorization` | `edu-no-utility-disconnection-notice-rule-tn` | Absent | None (absence; battery in §3) |
| `utility-interruption-submeter` | `edu-no-submeter-interruption-rule-tn` | Absent | Tenn. Code Ann. § 66-28-502 |
| `utility-landlord-account` | `edu-utility-landlord-account-tn` | Present | Tenn. Code Ann. §§ 66-28-521, 66-28-504 |
| `utility-shutoff-statute` | `edu-utility-shutoff-tn` | Absent | Tenn. Code Ann. § 68-102-153 |
| `utility-submetering-disclosure` | `edu-no-submetering-rule-tn` | Absent | Tenn. Code Ann. § 68-221-620 |
| `veterans-incentive` | `edu-no-veterans-incentive-tn` | Absent | None (absence; battery in §3) |
| `waiver-by-acceptance` | `edu-waiver-by-acceptance-tn` | Present | Tenn. Code Ann. §§ 66-28-508, 66-28-202(a) |
| `water-heater-temperature` | `edu-no-water-heater-temperature-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `waterbed` | `edu-no-waterbed-rule-tn` | Absent | None (absence; battery in §3) |
| `window-guards` | `edu-no-window-guard-rule-tn` | Absent | Tenn. Code Ann. § 66-28-304 |
| `written-notice-required` | `edu-written-notice-tn` | Present | Tenn. Code Ann. §§ 66-28-106(b), 66-28-108 |

Open topics: 

### §3 Batteries for every absence

Each line is generated from the saved search log (`battery/lexis_log_20261107.json`), never typed. All searches: Lexis Tennessee Code Unannotated, whole-Code terms-and-connectors search, TOC scope "Statutes and Legislation", run in the built-in browser 2026-11-07 (evening, Mountain time). Controls in the same session: nonsense term "zqxvbnmwt" 0 hits each of the 10 times it was run; must-hit "Legislature" 275 hits. Engine checks: quoted phrases do not stem plurals ("security deposit" 12, "security deposits" 10), the ! expander, OR, AND and w/n work.

- `edu-abandonment-mitigation-tn` (Present): "abandon! w/20 (tenant OR "dwelling unit")" 6 hits (§§ 66-28-507, 66-28-405, 66-28-403, 66-28-301, 66-28-511, 66-28-517); "mitigat! w/20 (landlord OR lessor OR rent!)" 0 hits.
- `edu-no-adu-rental-rule-tn` (Absent): ""accessory dwelling unit!" OR "accessory dwelling"" 2 hits (§§ 68-221-402, 13-7-502).
- `edu-actual-notice-method-tn` (Present): "notice w/10 ("electronic mail" OR "text message")" 17 hits (§§ 66-29-130, 62-6-116, 66-32-114, 62-6-411, 62-2-307, 68-221-608, and others); ""actual notice" OR "actual knowledge"" 141 hits (§§ 21-1-205, 29-34-205, 50-6-201, 34-6-105, and others).
- `edu-no-adverse-proceeding-notice-tn` (Absent): "(tenant OR lessee) w/20 (notif! OR notice) AND (foreclos! OR condemn! OR "adverse claim")" 0 hits.
- `edu-alarm-tampering-tn` (Present): "(smoke w/3 (detector! OR alarm!)) AND (tamper! OR remov! OR disabl!)" 7 hits (§§ 68-102-151, 68-120-112, 37-2-412, and others); ""carbon monoxide" w/20 (detector! OR alarm!)" 6 hits (§§ 68-120-112, 55-9-218, and others).
- `edu-alt-housing-tn` (Present): "(relocat! OR "alternate housing" OR "alternative housing") w/20 (tenant OR landlord)" 3 hits (§§ 13-11-107, 67-4-2109).
- `edu-no-animal-care-access-rule-tn` (Absent): "(animal OR pet) w/20 (abandon!) AND (premises OR tenant OR landlord OR enter!)" 4 hits (§§ 39-14-202, 39-14-217, 39-14-212, 39-14-215); "(pet OR dog OR cat OR animal) w/20 (evict! OR abandon!) AND (tenant OR landlord)" 0 hits.
- `edu-no-appliance-presumption-tn` (Absent): "appliance! w/20 (landlord OR tenant OR "dwelling unit" OR "rental")" 0 hits.
- `edu-no-asbestos-notice-tn` (Absent): "asbestos" 35 hits (§§ 29-34-702, 29-34-602, 29-34-606, 29-34-707, 29-34-704, 29-34-706, 8-6-109, 29-34-708, and others).
- `edu-no-association-disclosure-rule-tn` (Absent): "(condominium OR "homeowners association" OR "property owners association") w/30 (lease OR lessee OR tenant)" 15 hits (§§ 66-27-405, 66-27-306, 66-27-120, 66-27-203, 66-27-202, 66-27-507, and others); "(association) w/30 (lessee OR tenant) AND (rent OR leas!)" 17 hits (§§ 12-10-109, 7-4-101, 62-13-102, 55-50-102, and others).
- `edu-attorney-fees-tn` (Present): ""attorney's fees" w/30 ("rental agreement" OR lease) AND (landlord OR tenant)" 6 hits (§§ 66-28-512, 66-28-513, 66-28-505, 66-28-501, 66-28-517, 66-28-510); "reciproc! w/20 "attorney"" 19 hits (§§ 56-16-109, 56-16-110, 56-16-204, 56-16-116, and others).
- `edu-automatic-renewal-tn` (Present): "("automatic renewal" OR "automatically renew!" OR "auto-renew!")" 12 hits (§§ 62-3-120, 47-18-603, 66-29-105, 47-18-103, 66-29-134, 62-32-325, 47-18-133, 47-18-505, and others).
- `edu-no-balcony-inspection-rule-tn` (Absent): "(balcon! OR deck! OR "exterior elevated element!") w/20 inspect!" 0 hits.
- `edu-no-bed-bug-cooperation-rule-tn` (Absent): ""bed bug!" OR bedbug!" 0 hits.
- `edu-binding-arbitration-tn` (Present): ""Uniform Arbitration Act"" 33 hits (§§ 29-5-315, 29-5-313, 29-5-306, 29-5-308, and others); "arbitrat! w/20 (residence OR "real property" OR lease OR tenant)" 3 hits (§§ 29-4-101, 47-2A-501, 13-6-102); "arbitrat! w/20 (agreement OR contract) AND (consumer OR residential)" 6 hits (§§ 65-5-202, 36-6-404, 56-2-208, 65-5-109, 47-18-5706, 47-18-5809); "initial! w/10 (provision OR clause OR waiver) AND (lease OR "rental agreement" OR contract)" 4 hits (§§ 4-1-412, 66-32-113, 47-18-305, 56-42-105).
- `edu-no-cannabis-protection-tn` (Absent): "(marijuana OR cannabis) w/30 (lease OR tenant OR landlord OR rental OR residen!)" 0 hits; "marijuana OR cannabis" 54 hits (§§ 68-7-102, 24-7-103, 39-17-455, 68-7-109, 39-17-417, and others).
- `carpet-cleaning-ar` (Tagged): "carpet! w/30 (tenant OR landlord OR lease OR "rental agreement")" 0 hits; "deposit! w/20 (cleaning OR carpet!)" 2 hits (§§ 68-221-1004, 43-24-103); ""wear and tear"" 10 hits (§§ 55-24-103, 66-28-104, 66-32-114, 56-6-1101, 66-7-109, 56-2-126, 4-21-601, 55-10-425, and others).
- `edu-casualty-mitigation-waiver-tn` (Present): ""fire or casualty"" 3 hits (§§ 32-3-111, 66-28-503, 66-28-201); ""agreement to the contrary" w/30 (lessee OR tenant OR lease)" 3 hits (§§ 66-7-102, 66-7-109, 66-28-522); "mitigat! w/20 (landlord OR lessor OR rent!)" 0 hits.
- `edu-certificate-of-occupancy-tn` (Absent): ""certificate of occupancy" w/30 (tenant OR lease OR rent!)" 1 hit (§ 13-21-308).
- `edu-children-occupancy-tn` (Absent): "child! w/20 (lease OR rental OR tenant) AND (refuse OR occupan!)" 6 hits (§§ 49-2-142, 66-7-109, 66-28-517, 49-1-201, 39-13-606, 49-2-203).
- `edu-no-cold-weather-rule-tn` (Absent): "(cold OR winter OR freez!) w/20 (vacate OR evict! OR tenant)" 2 hits (§§ 39-15-502, 47-18-2111).
- `edu-collection-fee-tn` (Absent): ""collection agency" w/30 fee!" 2 hits (§§ 40-24-101, 67-1-1445); ""collection" w/10 (cost! OR fee!) AND (debtor OR consumer)" 12 hits (§§ 68-211-835, 62-20-124, 62-20-102, 57-4-302, 8-13-108, 68-14-704, 47-9-626, 47-9-607, and others); "(collection OR collect!) w/20 (rent OR tenant OR landlord)" 69 hits (§§ 68-11-608, 7-55-112, 13-30-109, 68-211-911, 64-1-1103, 9-21-407, 7-67-113, 12-10-112, and others).
- `edu-no-common-area-lighting-rule-tn` (Absent): ""common area" w/20 (electric! OR light!) AND tenant" 0 hits.
- `edu-no-communal-land-rule-tn` (Absent): "(tribal OR "Indian land" OR communal) w/20 lease" 0 hits.
- `edu-no-condemned-rent-bar-tn` (Absent): "(condemn! OR "unfit for human habitation") w/20 rent!" 1 hit (§ 66-28-104); ""unfit for human habitation" w/30 (repair! OR demol!)" 0 hits; "(condemn! OR "unfit for human habitation") w/30 (disclos! OR notif!) AND (tenant OR lessee)" 0 hits.
- `edu-confession-of-judgment-tn` (Present): ""confess judgment" OR "confession of judgment" OR "confessing judgment" OR "warrant of attorney"" 36 hits (§§ 29-18-123, 40-24-103, 25-2-102, 25-2-101, 47-18-5528, and others).
- `edu-confirmed-absences-habitability-tn` (Absent): ""fit for human habitation"" 0 hits; "(habitab! OR "fit and habitable") w/30 (waive! OR agree!)" 0 hits; ""fit and habitable"" 2 hits (§§ 66-28-304, 13-6-102).
- `edu-confirmed-absences-misc-tn` (Absent): ""tenant protection" OR "renter protection"" 0 hits; ""plain language" w/20 (contract OR lease OR consumer)" 0 hits; "(deadbolt OR "dead bolt" OR "door viewer" OR peephole OR rekey!)" 0 hits.
- `edu-confirmed-absences-outside-title-tn` (Present): "squatter! OR (unauthorized w/5 occupant!)" 4 hits (§§ 66-28-517, 66-7-109, 29-18-132, 29-18-135).
- `edu-construction-liens-tn` (Absent): "(lien w/20 (improvement! OR material! OR labor)) AND (lessee OR tenant)" 7 hits (§§ 66-19-302, 66-11-102, 66-11-147, 67-4-409, 47-2A-306, and others).
- `edu-cure-and-eviction-grounds-tn` (Present): "noncompliance w/20 tenant" 6 hits (§§ 66-28-505, 66-28-506, 66-28-502, 66-28-501, 66-28-406, 66-7-111); ""detainer warrant" w/20 (breach OR noncompliance)" 1 hit (§ 66-28-505); ""materially affecting health and safety"" 4 hits (§§ 66-28-505, 66-28-304, 66-28-401, 66-28-506).
- `edu-no-drywall-disclosure-tn` (Absent): "drywall OR "gypsum board"" 1 hit (§ 67-6-396).
- `edu-no-deposit-cost-schedule-tn` (Absent): "deposit! w/30 (cleaning OR repair!) AND (schedule OR "estimated cost" OR listing)" 2 hits (§§ 66-28-301, 59-8-110); "deposit! w/20 (cleaning OR carpet!)" 2 hits (§§ 68-221-1004, 43-24-103).
- `edu-deposit-escheat-tn` (Present): "unclaimed w/20 deposit!" 11 hits (§§ 45-2-1501, 56-9-333, 66-29-115, 66-29-148, 44-17-503, 4-51-123, and others); ""security deposit" w/50 (abandon! OR unclaimed OR presum!)" 1 hit (§ 66-28-301).
- `edu-no-deposit-installments-tn` (Absent): "installment! w/10 deposit!" 4 hits (§§ 50-6-232, 45-3-701, 45-3-104, 47-31-103); "deposit! w/20 installment!" 6 hits (§§ 50-6-232, 45-3-701, 45-3-104, 47-31-103, 45-3-707, 9-4-103); ""security deposit" w/30 account" 1 hit (§ 66-28-301).
- `edu-no-deposit-last-month-rule-tn` (Absent): ""last month" w/10 rent" 0 hits; ""last month's rent"" 0 hits; "prepaid w/5 rent!" 5 hits (§§ 66-28-501, 66-28-503, 66-30-103, 66-28-504, 66-28-405).
- `edu-deposit-move-out-notice-tn` (Present): ""intent to vacate"" 1 hit (§ 66-28-301); "deposit! w/30 "intent to vacate"" 0 hits.
- `edu-no-designated-repairer-rule-tn` (Absent): "repair! w/20 (licensed OR contractor) AND (tenant OR landlord)" 0 hits; "("repair and deduct" OR "deduct" w/10 rent)" 1 hit (§ 66-28-502).
- `edu-disability-accommodation-tn` (Present): ""Tennessee Human Rights Act" OR (discriminat! w/20 (housing OR "real property" OR dwelling))" 15 hits (§§ 4-21-302, 4-21-601, 4-21-304, 4-21-306, 4-21-603, 4-21-311, and others); "handicap! w/20 (housing OR dwelling)" 8 hits (§§ 13-23-202, 13-23-203, 13-23-204, and others).
- `edu-no-disaster-guest-rule-tn` (Absent): "(disaster OR emergency) w/20 (guest! OR displaced OR evacuee!)" 7 hits (§§ 63-10-207, 58-2-110, 58-2-402, 58-2-403, 50-7-803, and others).
- `edu-disaster-duties-tn` (Present): "(disaster OR "state of emergency") w/20 (rent OR tenant OR lease)" 2 hits (§§ 67-6-235, 58-2-117).
- `edu-no-double-letting-rule-tn` (Absent): ""double letting" OR (let w/10 "more than one")" 1 hit (§ 12-3-305).
- `edu-no-drug-free-addendum-rule-tn` (Absent): ""drug-free" OR "drug free" w/20 (housing OR lease)" 0 hits; "(eviction OR evict! OR detainer) w/20 (drug OR criminal OR violent)" 8 hits (§§ 40-31-104, 40-31-101, 40-31-107, 40-31-105, 40-31-102, and others).
- `edu-dv-confidentiality-tn` (Present): ""address confidentiality"" 15 hits (§§ 2-6-206, 40-38-602, 40-38-603, 40-38-606, and others); "victim w/20 (address OR location) AND confidential!" 23 hits (§§ 40-38-602, 40-38-603, 40-38-606, 40-38-610, and others); ""substitute address" w/30 (landlord OR lease OR tenant OR "private")" 1 hit (§ 40-38-606).
- `edu-no-dv-deposit-timing-rule-tn` (Absent): "deposit! w/30 ("domestic abuse" OR victim)" 10 hits (§§ 39-15-505, 39-15-504, 67-4-602, 29-13-403, 9-4-205, 40-38-506, 24-2-109, 9-4-214, and others).
- `edu-dv-eviction-protection-tn` (Present): ""domestic abuse" w/30 (landlord OR lease OR tenant)" 4 hits (§§ 66-7-112, 66-28-205, 66-28-517, 66-7-109); ""order of protection" w/20 (landlord OR lessor)" 0 hits.
- `edu-no-dv-lockchange-rule-tn` (Absent): "(lock OR locks) w/30 (victim OR "domestic abuse" OR "order of protection")" 0 hits; "(deadbolt OR "dead bolt" OR "door viewer" OR peephole OR rekey!)" 0 hits; ""order of protection" w/30 (possession OR residence OR dwelling)" 15 hits (§§ 36-3-625, 39-14-401, 36-3-604, 39-11-611, and others).
- `edu-dv-protection-order-citations-tn` (Present): ""36-3-601"" 35 hits (§§ 36-3-601, 66-7-109, 39-13-113, 40-11-150, 66-7-112, 66-28-205, and others).
- `edu-dv-qualifying-documents-tn` (Present): ""domestic abuse" w/30 (landlord OR lease OR tenant)" 4 hits (§§ 66-7-112, 66-28-205, 66-28-517, 66-7-109).
- `edu-no-electric-resale-rule-tn` (Absent): "electric! w/20 (submeter! OR resell! OR resale)" 3 hits (§§ 67-4-3101, 7-51-910, 7-52-303); "(utilit! OR electric! OR water) w/20 (resell! OR resale OR "actual cost") AND (tenant OR landlord OR apartment)" 3 hits (§ 67-6-102); "submeter! OR "sub-meter!" OR "submetering"" 2 hits (§§ 68-221-620, 12-4-118).
- `edu-emergency-contact-tn` (Present): "(portal OR "online") w/20 (tenant OR rent OR landlord)" 1 hit (§ 66-28-302).
- `edu-no-eminent-domain-rent-rule-tn` (Absent): "("eminent domain" OR condemnation) w/30 (lessee OR tenant OR leasehold)" 7 hits (§§ 64-1-804, 64-1-102, 9-21-107, 5-19-107, 13-20-703, and others).
- `edu-no-employee-screening-rule-tn` (Absent): "(employee! OR staff) w/20 ("background check" OR "criminal history") AND (apartment OR landlord OR tenant)" 1 hit (§ 49-7-149).
- `edu-no-energy-data-rule-tn` (Absent): "(energy w/5 (usage OR consumption OR data)) AND (tenant OR owner OR benchmark!)" 7 hits (§§ 68-205-102, 67-5-1002, 68-102-147, 68-205-107, 7-70-101, 10-7-504).
- `edu-no-entity-representation-statute-tn` (Absent): "(corporation OR entity OR "limited liability") w/30 (represent! OR appear!) AND ("general sessions" OR "detainer")" 7 hits (§§ 16-3-905, 40-35-302, 40-11-302, 68-221-604, 68-221-1304, and others).
- `edu-no-environmental-termination-tn` (Absent): "(flood! OR "natural disaster" OR tornado OR environmental) w/20 (lease OR tenan!) AND terminat!" 3 hits (§§ 11-3-111, 7-67-109, 7-89-109).
- `edu-no-ev-end-of-tenancy-rule-tn` (Absent): ""electric vehicle" w/30 (tenant OR lessee OR landlord OR lease)" 0 hits.
- `edu-no-ev-resale-rule-tn` (Absent): ""electric vehicle" w/30 (tenant OR lessee OR landlord OR lease)" 0 hits; "electric! w/20 (submeter! OR resell! OR resale)" 3 hits (§§ 67-4-3101, 7-51-910, 7-52-303).
- `edu-ev-charging-hoa-tn` (Present): ""electric vehicle" w/30 (association OR condominium OR "common area")" 2 hits (§§ 66-27-1002, 66-27-419); ""electric vehicle" w/30 (tenant OR lessee OR landlord OR lease)" 0 hits.
- `edu-no-hardship-stay-tn` (Absent): "(detainer OR eviction) w/20 (stay OR continuance) AND hardship" 0 hits.
- `edu-no-eviction-penalty-rule-tn` (Absent): "penalt! w/20 (lease OR "rental agreement") AND (eviction OR detainer)" 2 hits (§§ 66-7-112, 66-28-205); "penalt! w/10 (void OR unenforceable)" 5 hits (§§ 40-11-311, 50-6-412, 47-14-108, 47-2-718, 49-7-2802); ""liquidated damages"" 22 hits (§§ 43-16-134, 47-11-107, 12-3-701, 47-2A-103, 47-18-2603, 59-13-132, and others).
- `edu-exculpatory-clauses-tn` (Present): "(exculpat! OR indemnif! OR "hold harmless") w/30 (lease OR tenant OR landlord OR lessee)" 5 hits (§§ 66-28-203, 7-54-105, 56-32-105, 69-5-808, 7-57-502); "(exculpat! OR "limit the landlord" OR "liability of the landlord")" 8 hits (§§ 40-30-404, 70-7-205, 40-30-123, 35-15-1008, 40-30-304, 35-15-105, 66-28-203, 40-35-322); ""indemnify the landlord" OR "exculpate"" 2 hits (§§ 66-28-203, 40-35-322).
- `edu-expedited-criminal-eviction-tn` (Present): "(eviction OR evict! OR detainer) w/20 (drug OR criminal OR violent)" 8 hits (§§ 40-31-104, 40-31-101, 40-31-107, 40-31-105, 40-31-102, and others).
- `edu-no-expedited-deposit-disposition-tn` (Absent): "deposit! w/30 (abandon! OR "without giving written notice")" 10 hits (§§ 66-29-109, 56-9-333, 29-17-106, 66-29-115, 66-29-148, 66-29-110, and others).
- `edu-no-family-child-care-right-tn` (Absent): ""family child care" OR "child care" w/20 (home OR residence) AND (tenant OR lease OR landlord)" 7 hits (§§ 71-3-502, 68-11-1602, 37-5-502, 37-5-520).
- `edu-farmland-hunting-tn` (Present): "(hunt! OR fish!) w/20 (lessee OR tenant) AND (owner OR permission)" 2 hits (§§ 70-2-204, 55-4-303).
- `edu-no-fee-in-lieu-of-deposit-rule-tn` (Absent): ""in lieu of" w/10 "security deposit"" 1 hit (§ 50-6-1016); ""deposit alternative" OR "surety bond" w/20 tenant" 0 hits; "(deposit! OR fee!) w/10 "in lieu of"" 56 hits (§§ 47-25-1218, 43-16-145, 40-25-103, 8-24-103, and others).
- `edu-no-fee-transparency-rule-tn` (Absent): ""total price" OR "all-in" OR "mandatory fee!"" 35 hits (§§ 49-7-1603, 49-4-944, 49-7-1602, 49-4-923, and others); "(fee! OR charge!) w/10 disclos! AND (tenant OR rental)" 2 hits (§§ 47-18-140, 50-6-215).
- `edu-no-fee-unprovided-service-rule-tn` (Absent): "fee! w/20 service! AND (tenant OR landlord) AND (not provided OR "not provide")" 3 hits (§§ 57-4-102, 50-7-207).
- `edu-building-code-source-tn` (Present): ""building code" w/20 (edition OR adopt!)" 4 hits (§§ 6-54-502, 68-120-101, 62-2-102, 68-102-152); ""International Property Maintenance Code" OR "International Fire Code" OR "International Residential Code"" 3 hits (§§ 68-120-101, 68-120-122, 68-102-123); ""fire prevention code" OR "fire code" w/20 adopt!" 5 hits (§§ 68-102-123, 68-11-202, 68-120-101).
- `edu-no-sprinkler-retrofit-rule-tn` (Absent): "sprinkler! w/20 (residential OR apartment OR "multi-family" OR dwelling)" 2 hits (§§ 68-11-257, 68-120-101).
- `edu-no-foreclosure-disclosure-tn` (Absent): "foreclos! w/30 (tenant OR lessee) AND (disclos! OR notice)" 0 hits.
- `edu-no-forfeiture-redemption-tn` (Absent): "forfeit! w/20 lease!" 4 hits (§§ 39-11-710, 56-3-402, 39-17-505, 56-3-303).
- `edu-no-frozen-standard-rule-tn` (Absent): ""building code" w/20 (edition OR adopt!)" 4 hits (§§ 6-54-502, 68-120-101, 62-2-102, 68-102-152).
- `edu-no-furnishings-rule-tn` (Absent): "(furnish! OR furniture) w/20 (lease OR tenant OR "dwelling unit")" 52 hits (§§ 62-25-104, 67-5-1301, 66-7-104, 67-5-501, 7-67-109, and others).
- `edu-no-good-cause-notice-tn` (Absent): "("good cause" OR "just cause") w/20 (evict! OR terminat!) AND tenan!" 0 hits.
- `edu-no-government-fee-rule-tn` (Absent): "(fee! OR tax!) w/20 (pass! AND through) AND tenant!" 4 hits (§§ 67-4-2109, 67-4-2004, 57-4-102).
- `edu-governmental-fines-tn` (Absent): "(fee! OR tax!) w/20 (pass! AND through) AND tenant!" 4 hits (§§ 67-4-2109, 67-4-2004, 57-4-102); "nuisance w/30 (owner) AND (tenant OR occupant) AND (cost! OR fine!)" 2 hits (§§ 13-6-106, 54-21-105).
- `edu-no-guarantor-renewal-rule-tn` (Absent): "(guarant! OR surety OR cosign! OR "co-sign!") w/20 (lease OR rent OR tenant)" 18 hits (§§ 67-5-608, 65-6-130, 68-215-201, 45-8-210, and others); "guarant! w/20 renew!" 11 hits (§§ 56-7-1102, 56-7-2810, 56-7-2806, and others).
- `edu-no-guest-rights-statute-tn` (Absent): "guest! w/20 (tenant OR lessee OR resident)" 7 hits (§§ 66-28-518, 66-28-104, 47-2A-216, 66-7-109, 68-120-112, and others).
- `edu-habitability-materiality-tn` (Present): ""materially affecting health and safety"" 4 hits (§§ 66-28-505, 66-28-304, 66-28-401, 66-28-506).
- `edu-habitability-modifiable-tn` (Present): "(habitab! OR "fit and habitable") w/30 (waive! OR agree!)" 0 hits; "habitab! w/20 (lease OR "rental agreement")" 0 hits.
- `edu-no-habitability-presumption-tn` (Absent): "presum! w/20 (habitab! OR "fit for human habitation")" 0 hits.
- `edu-no-habitability-statement-tn` (Absent): "habitab! w/20 (lease OR "rental agreement")" 0 hits.
- `edu-habitability-waiver-tn` (Present): ""fit and habitable"" 2 hits (§§ 66-28-304, 13-6-102); "(habitab! OR "fit and habitable") w/30 (waive! OR agree!)" 0 hits; ""fit for human habitation"" 0 hits; "(rent w/10 reduc!) AND (condition! OR habitab!) AND tenant" 0 hits.
- `edu-no-contamination-disclosure-tn` (Absent): "(contaminat! OR brownfield OR "hazardous substance") w/30 (lease OR tenant OR lessee) AND disclos!" 0 hits.
- `edu-no-health-district-rules-tn` (Absent): "("board of health" OR "health department") w/30 (rental OR tenant OR "dwelling" OR housing)" 1 hit (§ 14-1-101).
- `edu-heating-tn` (Present): "heat w/20 (tenant OR landlord OR "dwelling unit")" 3 hits (§§ 66-28-502, 67-4-2903, 68-120-114); ""heating" w/20 (degrees OR temperature)" 3 hits (§§ 68-131-304, 62-10-103, 67-3-103).
- `edu-hoa-leasing-tn` (Present): "(association) w/20 (rent w/10 (tenant OR lessee)) AND (delinquen! OR unpaid)" 0 hits; "(association OR declarant) w/20 (approv! w/10 (lease OR lessee OR tenant))" 0 hits; "(condominium OR "homeowners association" OR "property owners association") w/30 (lease OR lessee OR tenant)" 15 hits (§§ 66-27-405, 66-27-306, 66-27-120, 66-27-203, 66-27-202, 66-27-507, and others).
- `edu-no-holding-deposit-rule-tn` (Absent): ""holding deposit" OR "earnest money" OR "application deposit"" 2 hits (§§ 7-8-105, 47-32-102); ""earnest money"" 2 hits (§§ 47-32-102, 7-8-105); "(prospective w/3 tenant!) AND deposit!" 1 hit (§ 68-221-620).
- `edu-no-home-business-rule-tn` (Absent): "("home-based business" OR "home business" OR "home occupation")" 1 hit (§ 29-34-203).
- `edu-homestead-waiver-tn` (Present): "homestead w/20 waive!" 1 hit (§ 26-2-301); "(exemption! OR exempt) w/20 waive! AND (personal property OR wages OR homestead)" 3 hits (§§ 26-2-301, 26-2-114, 50-7-708); "(personal w/3 property) w/10 exempt! AND waive!" 1 hit (§ 26-2-114); "lease w/20 (spouse OR "both spouses" OR homestead)" 13 hits (§§ 7-66-102, 55-4-257, 55-4-251, 13-20-511, and others).
- `edu-informal-dispute-resolution-tn` (Absent): "(mediat! OR "dispute resolution") w/20 (landlord OR tenant)" 0 hits.
- `edu-no-inspection-condemnation-disclosure-tn` (Absent): "(condemn! OR "unfit for human habitation") w/30 (disclos! OR notif!) AND (tenant OR lessee)" 0 hits.
- `edu-no-inspection-notice-penalty-tn` (Absent): "(inspection OR inspect!) w/20 (penalt! OR forfeit!) AND tenant" 0 hits.
- `edu-jury-waiver-tn` (Present): "(jury) w/20 ("general sessions" OR detainer)" 9 hits (§§ 39-15-401, 29-18-119, 54-10-206, 40-10-106, and others); "jury w/20 (waive! OR waiver)" 21 hits (§§ 40-20-105, 39-13-205, 40-1-109, 40-35-301, and others); "(waive! OR waiver) w/20 jury AND (contract OR agreement)" 2 hits (§§ 40-35-301, 47-16-105); ""trial by jury" w/10 inviolate" 0 hits.
- `edu-no-key-control-rule-tn` (Absent): "key! w/20 (apartment OR tenant OR "dwelling unit") AND (control OR policy)" 3 hits (§§ 67-4-2109, 67-4-2004); "(deadbolt OR "dead bolt" OR "door viewer" OR peephole OR rekey!)" 0 hits; "(lock! OR "security device!") w/20 (tenant OR landlord OR "dwelling unit")" 0 hits.
- `edu-knowing-use-penalty-tn` (Present): ""known by the landlord" OR "known to be prohibited"" 1 hit (§ 66-28-203); "(void OR unenforceable) w/20 ("rental agreement" OR lease) AND tenant" 2 hits (§§ 11-3-111, 66-28-203).
- `edu-tenant-remedies-landlord-breach-tn` (Present): "noncompliance w/20 tenant" 6 hits (§§ 66-28-505, 66-28-506, 66-28-502, 66-28-501, 66-28-406, 66-7-111); ""written notice" w/20 (repair! OR noncompliance) AND landlord" 2 hits (§§ 66-28-501, 66-28-505); "tenant w/10 terminat! AND "rental agreement"" 8 hits (§§ 66-7-109, 66-28-512, 66-28-504, 66-28-517, 66-28-503, 66-28-505, 66-28-513, 66-28-521).
- `edu-no-landlord-insurance-mandate-tn` (Absent): "(landlord OR owner OR lessor) w/20 ("liability insurance") AND (rental OR residential)" 1 hit (§ 56-7-1120).
- `edu-landlord-remedies-termination-tn` (Present): "landlord w/20 remed!" 27 hits (§§ 66-28-510, 66-28-512, 66-28-505, 66-28-506, 66-28-509, 66-28-511, 66-28-501, 66-28-201, 66-28-517, 66-28-513, and others).
- `edu-landscaping-tn` (Present): "(lawn OR yard OR landscap! OR mowing) w/20 (tenant OR lessee OR landlord)" 0 hits; "(vegetation OR tree! OR plant!) w/20 ("power line!" OR "electric line!" OR "utility line!") AND (tenant OR lessee OR occupant)" 0 hits.
- `edu-late-fee-limit-tn` (Present): ""late fee" OR "late charge" OR "late payment"" 38 hits (§§ 43-20-213, 50-3-107, 71-5-1006, 7-84-528, 7-84-628, 7-84-418, and others); "("mobile home" OR "manufactured home") w/30 (late OR fee!)" 21 hits (§§ 68-126-207, 55-4-402, 55-4-405, 55-4-406, 68-126-404, 68-126-102, 67-6-216, 55-4-407, and others); "(voucher OR "section 8" OR subsid!) w/30 (late OR fee!)" 22 hits (§§ 8-26-105, 45-3-1504, 62-9-104, and others).
- `edu-no-lead-safe-certificate-tn` (Absent): ""lead-safe" OR "lead free" OR "lead-free" w/20 (certif! OR housing)" 0 hits; "lead w/5 (paint OR hazard! OR poison!) AND (tenant OR rental OR lease OR "target housing")" 2 hits (§§ 68-131-404, 68-131-402).
- `edu-no-state-lead-notice-tn` (Absent): "lead w/5 (paint OR hazard! OR poison!) AND (tenant OR rental OR lease OR "target housing")" 2 hits (§§ 68-131-404, 68-131-402).
- `edu-no-lease-content-rule-tn` (Absent): ""first page" w/20 (lease OR contract OR agreement)" 3 hits (§§ 56-3-506, 66-27-506, 66-30-103).
- `edu-no-lease-copy-rule-tn` (Absent): ""rental agreement" w/20 (copy OR copies)" 0 hits; "copy w/10 (lease OR "rental agreement") AND (tenant OR deliver!)" 3 hits (§§ 65-25-114, 67-3-401, 66-24-101); ""signed copy"" 9 hits (§§ 48-1-103, 46-1-207, 61-2-103, 61-2-206, 37-2-403, 46-2-106, 57-9-115, 48-1-106).
- `edu-no-initialing-rule-tn` (Absent): "initial! w/10 (provision OR clause OR waiver) AND (lease OR "rental agreement" OR contract)" 4 hits (§§ 4-1-412, 66-32-113, 47-18-305, 56-42-105).
- `edu-lease-registration-tn` (Present): "copy w/10 (lease OR "rental agreement") AND (tenant OR deliver!)" 3 hits (§§ 65-25-114, 67-3-401, 66-24-101).
- `edu-lease-formalities-tn` (Present): ""statute of frauds"" 8 hits (§§ 47-2A-201, 47-2-201, 47-3-419, 39-13-301, 47-8-113, 47-2-209, 47-2-326, 29-2-101).
- `edu-no-lease-parity-rule-tn` (Absent): "(month-to-month OR periodic) w/20 (fixed OR term) AND tenant AND (burdensom! OR same)" 1 hit (§ 66-32-102).
- `edu-lease-type-size-tn` (Present): "("type size" OR "point type" OR "point bold" OR "font") w/20 (lease OR "rental agreement" OR contract)" 10 hits (§§ 47-16-106, 47-22-404, 66-28-505, 47-18-1006, 47-14-108, 47-50-110, 56-31-127, 66-4-403, and others).
- `edu-limitation-of-actions-tn` (Present): "(contract! OR lease!) w/20 "six (6) years" OR "within six (6) years"" 4 hits (§§ 49-6-2101, 52-3-101, 28-3-109, 41-8-111).
- `edu-liquidated-damages-tn` (Absent): ""liquidated damages"" 22 hits (§§ 43-16-134, 47-11-107, 12-3-701, 47-2A-103, 47-18-2603, 59-13-132, 49-9-706, 46-1-209, 12-3-515, 47-2-718, and others); "damages w/10 "determined in anticipation" OR "agreed damages"" 0 hits.
- `edu-no-lockout-for-rent-tn` (Present): "lockout OR "lock out" OR "change the locks" OR "changing the locks"" 5 hits (§§ 50-1-207, 50-1-102, 70-9-108, 55-18-102, 50-7-303); "(lock! OR exclu!) w/20 tenant AND rent" 2 hits (§§ 66-28-504, 66-28-104).
- `edu-maintenance-duty-shift-tn` (Present): ""specified repairs"" 1 hit (§ 66-28-304); "(habitab! OR "fit and habitable") w/30 (waive! OR agree!)" 0 hits.
- `edu-no-meter-conservation-charge-tn` (Absent): "(conservation OR efficiency) w/20 (charge OR meter) AND (tenant OR landlord)" 1 hit (§ 11-10-101).
- `edu-no-military-zone-disclosure-tn` (Absent): "(military OR airport OR "air installation") w/30 (disclos! OR notice) AND (lease OR lessee OR tenant)" 1 hit (§ 66-29-302).
- `edu-no-minor-defendant-rule-tn` (Absent): "(minor OR "under eighteen") w/20 (lease OR rental OR tenant)" 16 hits (§§ 45-2-904, 39-17-914, 45-3-509, 16-10-212, 70-9-105, and others).
- `edu-no-municipal-utility-lien-rule-tn` (Absent): "lien w/20 (water OR sewer OR utility OR garbage) AND (tenant OR occupant OR lessee)" 5 hits (§§ 65-35-104, 65-10-111, 65-10-113, 56-3-402, 56-3-303).
- `nonrefundable-fees-wv` (Tagged): ""however denominated"" 20 hits (§§ 47-1-201, 33-9-201, 48-249-106, 61-3-112, 48-54-101, 47-11-102, and others); "(nonrefundable OR non-refundable) w/30 deposit!" 0 hits; "escrow w/10 "rental agreement"" 1 hit (§ 66-28-104).
- `edu-no-nonrefundable-separate-notice-tn` (Absent): "(nonrefundable OR non-refundable) w/20 (tenant OR lease OR landlord OR rental)" 0 hits; "(nonrefundable OR non-refundable) w/30 deposit!" 0 hits; "nonrefundable OR non-refundable" 142 hits (§§ Appendix7-8-3954, 4-28-110, 48-1-125, and others).
- `edu-nonresident-owner-agent-tn` (Present): "nonresident w/20 (owner OR landlord OR lessor) AND (agent OR rent!)" 8 hits (§§ 55-4-115, 20-2-203, 69-4-105, 54-10-203, 29-16-105, and others).
- `edu-no-notice-service-fee-rule-tn` (Absent): "(notice OR eviction OR detainer) w/10 fee! AND (tenant OR lease)" 12 hits (§§ 62-13-503, 66-31-104, 54-3-114, 29-18-132, 66-28-205, 55-8-198, 66-7-112, 29-18-135, and others); "penalt! w/20 (lease OR "rental agreement") AND (eviction OR detainer)" 2 hits (§§ 66-7-112, 66-28-205).
- `edu-notice-to-quit-waiver-tn` (Present): ""notice to quit"" 1 hit (§ 29-18-113); "(waive! OR waiver) w/20 notice AND (rent OR tenant)" 4 hits (§§ 4-1-412, 66-28-505, 66-28-201, 66-28-301); "tenant w/20 waive!" 8 hits (§§ 66-28-301, 66-28-505, 66-28-201, 66-28-203, 66-28-508, 66-7-112, 66-28-205, 62-19-118).
- `edu-no-vacate-period-alteration-rule-tn` (Absent): ""notice to vacate" OR (vacat! w/10 notice) AND (alter! OR uninhabitable) AND tenant" 2 hits (§§ 29-18-135, 66-27-507).
- `edu-nuisance-tn` (Present): "nuisance w/30 (tenant! OR lessee! OR lease!)" 3 hits (§§ 29-3-101, 66-28-520, 44-18-101); ""drug-related nuisance" OR "public nuisance" w/20 (lease! OR tenant!)" 0 hits.
- `edu-option-to-purchase-tn` (Present): "option w/5 purchas! w/20 (lease OR lessee OR tenant)" 23 hits (§§ 48-101-301, 7-5-103, 64-9-104, 67-5-605, 7-53-101, 7-57-301, and others).
- `edu-no-ordnance-disclosure-tn` (Absent): "ordnance OR munition! OR "demolition" w/20 (disclos! OR notice) AND (lease OR tenant)" 0 hits.
- `edu-no-facility-duty-rule-tn` (Present): "(elevator! OR "garage door") w/20 (landlord OR owner OR apartment)" 11 hits (§§ 68-121-106, 68-121-107, 66-27-102, 68-121-105, 68-121-102, 68-121-118, and others).
- `edu-no-owner-move-in-rule-tn` (Absent): "(owner OR landlord) w/20 (occup! OR "move in" OR "personal use") AND terminat! AND tenan!" 10 hits (§§ 66-7-107, 66-27-318, 66-28-102, 66-28-517, 66-28-512, and others).
- `edu-parking-towing-tn` (Present): "(parking OR tow!) w/30 (tenant OR apartment OR "residential complex") AND (notice OR sign!)" 13 hits (§§ 55-10-205, 66-28-518, 55-10-106, 55-10-102, 39-14-405, and others).
- `edu-part5-nonwaivable-tn` (Present): ""cannot provide that the tenant agrees to waive"" 1 hit (§ 66-28-201); "(waive OR forego) w/20 (rights OR remedies) AND tenant" 5 hits (§§ 66-28-201, 66-28-203, 66-28-204, 67-5-2701, 13-20-202); ""unless otherwise agreed" AND ("rental agreement" OR tenant)" 3 hits (§§ 66-28-201, 66-28-305, 66-28-404).
- `edu-periodic-services-entry-tn` (Absent): "(enter OR entry OR access) w/20 ("pest control" OR "scheduled" OR "periodic") AND tenant" 0 hits.
- `edu-no-pest-control-notice-tn` (Absent): "(pesticide! OR "pest control") w/20 (notice OR notif!) AND (tenant OR occupant OR resident)" 0 hits.
- `edu-no-pet-eviction-fact-sheet-tn` (Absent): "(pet OR animal) w/20 (eviction OR evict!) AND ("fact sheet" OR notice)" 0 hits.
- `edu-no-plain-language-statute-tn` (Absent): ""plain language" w/20 (contract OR lease OR consumer)" 0 hits; "(tenant OR renter) w/20 (rights AND (statement OR summary OR guide OR handbook OR brochure))" 0 hits.
- `edu-no-political-access-rule-tn` (Absent): "(candidate! OR canvass! OR political) w/20 (apartment OR "multi-unit" OR tenant! OR resident!)" 35 hits (§§ 68-11-1405, 2-7-143, 2-5-104, 49-4-702, 2-5-102, and others).
- `edu-no-pool-safety-rule-tn` (Absent): "(pool OR "swimming") w/20 (fence OR barrier OR enclosure) AND (residential OR apartment)" 0 hits; ""public swimming pool"" 23 hits (§§ 68-14-317, 68-14-302, 68-14-311, 68-14-309, and others).
- `edu-no-cooling-device-right-tn` (Absent): "("air condition!" OR cooling) w/20 (tenant OR lease OR landlord)" 0 hits.
- `edu-no-portable-solar-right-tn` (Absent): "solar w/20 (tenant OR lease OR landlord OR lessee OR "restrictive covenant")" 3 hits (§§ 66-9-207, 4-10-116, 66-9-403).
- `edu-no-portfolio-threshold-tn` (Present): "("four (4) or fewer" OR "four (4) units" OR "units or fewer") w/20 (landlord OR rental OR "dwelling units")" 3 hits (§§ 68-205-114, 62-13-405, 57-4-102).
- `edu-no-well-testing-rule-tn` (Absent): "(well OR wells) w/20 (water AND test!) AND (tenant OR lease OR rental)" 2 hits (§ 60-1-202).
- `edu-prohibited-acts-renter-tn` (Present): "(tenant OR occupant) w/20 (deliberately OR negligently) AND (destroy! OR damage!)" 1 hit (§ 66-28-502).
- `edu-no-promises-to-repair-rule-tn` (Absent): "(promise! OR agree!) w/20 repair! AND (writing OR written)" 18 hits (§§ 40-38-120, 7-56-208, 66-36-103, 66-28-505, 54-1-119, 47-2A-310, and others).
- `edu-no-prop65-equivalent-tn` (Absent): "(contaminat! OR brownfield OR "hazardous substance") w/30 (lease OR tenant OR lessee) AND disclos!" 0 hits.
- `edu-no-property-tax-statement-tn` (Absent): "("property tax" OR "property taxes") w/20 (rent OR renter! OR tenant!) AND (relief OR credit OR statement)" 2 hits (§§ 67-4-713, 7-53-305).
- `edu-protected-class-inquiry-tn` (Present): "(inquir! OR inquiry) w/20 (race OR religion OR "national origin" OR handicap OR "familial status")" 0 hits.
- `edu-no-recycling-notice-tn` (Absent): "recycl! w/20 (tenant OR apartment OR multi-family OR residential)" 3 hits (§§ 7-51-2002, 64-10-102, 55-8-101).
- `edu-no-redemption-right-tn` (Absent): "(redeem! OR redemption OR reinstat!) w/20 (lease OR tenan!)" 5 hits (§§ 47-2A-510, 47-2A-403, 7-56-208, 47-18-607, 13-22-113).
- `edu-no-religious-display-rule-tn` (Absent): "(religious OR religion) w/20 (display OR symbol!) AND (tenant OR resident OR owner)" 0 hits.
- `edu-no-rent-concession-rule-tn` (Absent): "concession! w/20 rent!" 5 hits (§§ 42-3-111, 42-5-115, 7-87-109, 42-4-109, 66-27-402).
- `edu-rent-demand-tn` (Present): "demand w/10 rent AND (before OR prior)" 2 hits (§§ 67-5-2503, 66-7-109).
- `edu-no-rent-escalation-rule-tn` (Absent): "rent! w/10 (increase! OR escalat!) AND (lease OR "rental agreement")" 0 hits.
- `edu-rent-installments-tn` (Present): "rent! w/10 installment!" 3 hits (§§ 47-2A-522, 66-28-201, 12-10-112).
- `edu-no-rent-into-court-tn` (Absent): "counterclaim w/20 (tenant OR detainer)" 0 hits; "(rent OR "rental payment!") w/20 ("clerk of the court" OR "into court" OR escrow)" 1 hit (§ 66-28-104).
- `edu-no-rent-receipt-anti-waiver-tn` (Absent): "rent! w/20 (obligation! AND maintain)" 2 hits (§§ 49-3-1206, 66-28-103); ""obligations to maintain"" 1 hit (§ 68-221-607); ""receipt of rent" OR "receive rent" OR "receives rent"" 2 hits (§§ 56-6-1201, 66-31-102).
- `edu-no-rent-reporting-rule-tn` (Absent): ""positive rent" OR "rent reporting"" 0 hits; "rent! w/20 ("credit report!" OR "consumer reporting agenc!" OR "credit bureau")" 0 hits.
- `edu-rent-tax-tn` (Absent): "(sales w/3 tax) AND (rent! OR lease!) AND (residential OR dwelling OR apartment)" 9 hits (§§ 67-6-102, 67-6-205, 67-4-3202, 67-5-1008, 67-6-233, and others).
- `edu-repair-cost-termination-tn` (Present): "repair! w/20 (cost! OR expens!) AND terminat!" 16 hits (§§ 47-25-1906, 48-101-301, 47-25-1305, 67-4-1907, 67-5-2209, 66-28-505, and others).
- `edu-no-repair-escrow-notice-tn` (Absent): "escrow w/20 (rent OR repair!)" 2 hits (§§ 66-32-106, 66-28-104).
- `edu-repair-notice-tn` (Present): ""written notice" w/20 (repair! OR noncompliance) AND landlord" 2 hits (§§ 66-28-501, 66-28-505).
- `edu-no-required-coverage-notice-tn` (Absent): ""tenant protection" OR "renter protection"" 0 hits.
- `edu-no-required-fee-list-tn` (Absent): "fee! w/20 (tenant OR lessee) AND (lease OR "rental agreement")" 34 hits (§§ 68-221-620, 66-11-102, 66-28-205, 47-2A-108, 66-7-112, 66-28-512, and others); ""rental agreement" w/20 fee!" 9 hits (§§ 66-31-104, 66-28-504, 66-28-501, 66-28-505, 66-28-513, 36-3-606, 66-28-510, 66-28-512, and others); "(fee OR fees OR charge!) w/20 ("rental agreement" OR lease) AND (disclos! OR list!)" 23 hits (§§ 67-5-2003, 7-53-305, 47-18-702, 55-10-419, 47-9-613, 4-21-102, 67-6-102, 7-53-302, and others).
- `edu-no-rights-guide-tn` (Absent): "(landlord OR tenant) w/20 (handbook OR brochure OR guide OR pamphlet)" 1 hit (§ 66-7-106); "(tenant OR renter) w/20 (rights AND (statement OR summary OR guide OR handbook OR brochure))" 0 hits.
- `edu-no-sanitary-variance-rule-tn` (Absent): "(variance OR exception OR waiver OR exemption) w/20 ("housing code" OR "building code")" 0 hits.
- `edu-seasonal-tenancy-tn` (Present): "(seasonal OR vacation OR "short-term rental") w/20 (rental OR tenant OR occup!)" 38 hits (§§ 13-7-604, 67-4-1502, 67-4-1413, 13-7-603, 7-4-202, 7-4-103, and others).
- `edu-security-deposit-holding-tn` (Present): ""security deposit" w/30 account" 1 hit (§ 66-28-301).
- `edu-security-deposit-nonwaiver-tn` (Present): "waive! w/30 "security deposit"" 0 hits; "(waive OR forego) w/20 (rights OR remedies) AND tenant" 5 hits (§§ 66-28-201, 66-28-203, 66-28-204, 67-5-2701, 13-20-202).
- `edu-security-deposit-on-sale-tn` (Present): ""security deposit" w/40 (purchaser OR conveyance OR transfer!)" 1 hit (§ 66-28-305); "deposit! w/20 (sale OR sold OR purchaser) AND tenant" 9 hits (§§ 66-28-305, 50-7-207, 67-6-103, 67-4-2004, 67-6-102, 67-4-409).
- `edu-security-deposit-penalty-tn` (Present): ""security deposit" w/40 (retain OR forfeit! OR damages)" 3 hits (§§ 66-28-301, 66-28-104, 56-22-106).
- `edu-no-deposit-standards-rule-tn` (Absent): "deposit! w/30 standard! AND (tenant OR landlord)" 0 hits; ""security deposit" w/30 account" 1 hit (§ 66-28-301).
- `edu-no-security-device-rule-tn` (Absent): "(deadbolt OR "dead bolt" OR "door viewer" OR peephole OR rekey!)" 0 hits; "(lock! OR "security device!") w/20 (tenant OR landlord OR "dwelling unit")" 0 hits.
- `edu-no-senior-work-card-rule-tn` (Absent): "("housing for older persons" OR "fifty-five (55)") w/20 (employee! OR staff)" 2 hits (§§ 50-6-242, 8-36-201).
- `edu-service-animal-denial-penalty-tn` (Present): "("service animal" OR "dog guide" OR "guide dog") w/30 (refus! OR deny OR denies OR discriminat!)" 3 hits (§§ 66-7-106, 62-7-112, 8-50-103).
- `edu-service-animal-misrepresentation-tn` (Present): "("service animal" OR "support animal") w/30 (misrepresent! OR fraudulent! OR falsely)" 4 hits (§§ 39-16-304, 66-28-505, 66-28-406, 66-7-111).
- `edu-sex-offender-residence-tn` (Present): ""sex offender" OR "sexual offender" w/20 (landlord OR lease OR tenant OR rental)" 0 hits.
- `edu-no-sfr-occupancy-disclosure-tn` (Absent): ""first page" w/20 (lease OR contract OR agreement)" 3 hits (§§ 56-3-506, 66-27-506, 66-30-103); "("type size" OR "point type" OR "point bold" OR "font") w/20 (lease OR "rental agreement" OR contract)" 10 hits (§§ 47-16-106, 47-22-404, 66-28-505, 47-18-1006, 47-14-108, and others).
- `edu-no-shoreline-disclosure-tn` (Absent): "(shoreline OR "public access" OR beach) w/20 (disclos! OR lease)" 3 hits (§§ 64-1-603, 64-1-804, 64-1-102).
- `edu-showing-notice-waiver-tn` (Present): "("prospective" w/5 tenant!) w/30 (notice OR "twenty-four (24) hours")" 1 hit (§ 66-28-403); ""prospective tenants" OR "prospective purchasers" w/20 (enter OR access OR showing)" 1 hit (§ 66-28-403).
- `edu-no-shutdown-protection-tn` (Absent): "("government shutdown" OR furlough!) w/20 (rent OR evict! OR tenant)" 0 hits.
- `edu-no-single-family-zone-limit-tn` (Absent): "(zone OR zoning) w/20 ("single-family" OR "single family") AND (rent! OR lease! OR owner-occup!)" 1 hit (§ 62-13-501).
- `edu-no-smart-access-rule-tn` (Absent): "("smart lock" OR "electronic lock" OR keyless OR "access control") w/20 (tenant OR rental OR landlord)" 0 hits.
- `edu-smoke-drift-tn` (Present): "(smoke OR smoking) w/20 (drift OR migrat! OR "secondhand")" 0 hits; "smok! w/20 (lease OR tenant OR landlord OR apartment)" 5 hits (§§ 68-120-112, 4-4-121, 68-102-151, 39-17-1551, 39-17-1603); ""Non-Smoker Protection Act" OR (smoking w/20 ("enclosed public place" OR "multi-unit"))" 13 hits (§§ 39-17-1806, 39-17-1805, 39-17-1807, 39-17-1803, and others).
- `edu-snow-removal-tn` (Present): "(snow OR ice) w/20 (remov! OR clear!) AND (tenant OR landlord OR owner OR sidewalk)" 2 hits (§§ 6-2-201, 6-19-101).
- `edu-no-benefit-delay-defense-tn` (Absent): "("social security" OR benefit!) w/30 (rent OR evict! OR detainer)" 6 hits (§§ 61-1-202, 33-2-1404, 66-12-101, 7-57-301, 64-1-1103, and others).
- `edu-no-special-district-rule-tn` (Absent): "("special district" OR "utility district" OR "improvement district") w/20 (tenant OR lessee OR lease)" 6 hits (§§ 64-10-106, 7-35-201, 7-84-301, 68-221-209, 68-221-1303, and others).
- `edu-no-sprinkler-disclosure-tn` (Absent): "sprinkler! w/30 (disclos! OR lease OR tenant)" 2 hits (§§ 68-11-910, 68-11-257); "sprinkler! w/20 (residential OR apartment OR "multi-family" OR dwelling)" 2 hits (§§ 68-11-257, 68-120-101).
- `edu-statute-of-frauds-lease-tn` (Present): ""statute of frauds"" 8 hits (§§ 47-2A-201, 47-2-201, 47-3-419, 39-13-301, 47-8-113, 47-2-209, 47-2-326, 29-2-101).
- `edu-statutory-caps-tn` (Present): ""not to exceed" w/20 (rent OR tenant OR lessee)" 3 hits (§§ 13-11-107, 12-10-109, 71-5-1409); ""security deposit" OR "security deposits"" 20 hits (§§ 66-28-301, 50-6-1010, 55-12-105, 7-35-201, and others).
- `edu-statutory-early-termination-tn` (Present): "tenant w/10 terminat! AND "rental agreement"" 8 hits (§§ 66-7-109, 66-28-512, 66-28-504, 66-28-517, 66-28-503, 66-28-505, 66-28-513, 66-28-521); "("service animal" OR "support animal") w/30 (misrepresent! OR fraudulent! OR falsely)" 4 hits (§§ 39-16-304, 66-28-505, 66-28-406, 66-7-111).
- `edu-no-radiator-cover-rule-tn` (Absent): "radiator!" 3 hits (§§ 67-6-529, 56-2-201, 67-6-340).
- `edu-no-appliance-rule-tn` (Absent): "(stove OR refrigerator OR range) w/20 (landlord OR tenant OR "dwelling unit")" 0 hits; "appliance! w/20 (landlord OR tenant OR "dwelling unit" OR "rental")" 0 hits.
- `edu-student-housing-tn` (Present): "(student! OR dormitor!) w/20 (housing OR lease OR rental)" 107 hits (§§ 49-7-149, 49-7-171, 49-7-136, 49-50-1702, 49-1-704, and others).
- `edu-no-subsidized-inspection-rule-tn` (Absent): "("housing choice voucher" OR "section 8" OR "housing assistance") w/30 (inspect! OR landlord OR owner)" 2 hits (§§ 7-60-103, 13-23-103).
- `edu-no-subsidy-proration-rule-tn` (Absent): "(voucher OR "section 8" OR subsid!) w/30 (late OR fee!)" 22 hits (§§ 8-26-105, 45-3-1504, 62-9-104, 49-7-104, 56-1-209, and others).
- `edu-no-subsidy-late-fee-rule-tn` (Absent): "(voucher OR "section 8" OR subsid!) w/30 (late OR fee!)" 22 hits (§§ 8-26-105, 45-3-1504, 62-9-104, 49-7-104, 56-1-209, and others).
- `edu-substandard-receivership-tn` (Present): "receiver! w/20 (property OR premises OR building) AND (nuisance OR "unfit" OR substandard OR blight!)" 2 hits (§§ 13-6-106, 13-6-102).
- `edu-no-tax-escalation-rule-tn` (Absent): "tax! w/20 (increase! OR escalat!) AND (tenant! OR lessee!)" 9 hits (§§ 67-5-601, 67-6-103, 67-4-2109, 67-5-1412, 67-6-702, and others).
- `edu-no-telecom-access-rule-tn` (Absent): "(cable OR "video service" OR satellite OR broadband OR telecommunication!) w/30 (tenant OR landlord OR apartment OR "multiple dwelling")" 1 hit (§ 7-59-303).
- `edu-no-tenancy-at-will-statute-tn` (Absent): ""tenancy at will" OR "tenant at will"" 0 hits.
- `edu-no-tenant-bankruptcy-rule-tn` (Absent): "bankrupt! w/20 (tenant OR lessee OR lease)" 1 hit (§ 45-2-901).
- `edu-tenant-confidential-info-tn` (Present): "(tenant OR applicant) w/20 (confidential! OR "personal information")" 29 hits (§§ 2-2-142, 8-30-301, 50-9-105, 38-6-106, 68-115-207, and others); ""breach of the security of the system" OR "information holder"" 1 hit (§ 47-18-2107).
- `edu-no-employee-housing-rule-tn` (Absent): "(employee OR employer) w/20 (housing OR dwelling) AND (terminat! OR vacate)" 12 hits (§§ 4-29-248, 50-6-121, 37-2-603, 67-6-224, 38-6-102, and others).
- `edu-no-tenant-claim-rule-tn` (Absent): "(tenant OR lessee) w/20 (insurance) AND (claim! OR subrogat!)" 2 hits (§§ 35-15-510, 45-2-905).
- `edu-tenant-portal-tn` (Present): "(portal OR "online") w/20 (tenant OR rent OR landlord)" 1 hit (§ 66-28-302).
- `edu-no-tenant-records-rule-tn` (Absent): "(rent OR tenant) w/20 (ledger OR records) AND (landlord OR request)" 7 hits (§§ 66-28-406, 66-7-111, 39-17-505, 29-40-117, 47-18-2108, and others).
- `edu-tenant-repair-remedies-tn` (Present): "("repair and deduct" OR "deduct" w/10 rent)" 1 hit (§ 66-28-502); "escrow w/20 (rent OR repair!)" 2 hits (§§ 66-32-106, 66-28-104); "(rent OR "rental payment!") w/20 ("clerk of the court" OR "into court" OR escrow)" 1 hit (§ 66-28-104).
- `edu-no-tenant-organizing-rule-tn` (Absent): "(tenant! OR resident!) w/20 (organiz! OR association OR assembl!)" 163 hits (§§ 40-35-123, 7-62-103, 7-62-104, 7-62-105, 68-14-403, and others).
- `edu-no-tenant-rights-statement-tn` (Absent): "(tenant OR renter) w/20 (rights AND (statement OR summary OR guide OR handbook OR brochure))" 0 hits; ""truth in renting" OR (tenant w/20 "clearly established")" 0 hits.
- `edu-tenant-statutory-duties-tn` (Present): ""materially affecting health and safety"" 4 hits (§§ 66-28-505, 66-28-304, 66-28-401, 66-28-506).
- `edu-term-change-notice-tn` (Absent): "(change OR modif!) w/20 (terms OR "rental agreement") AND notice AND tenant" 3 hits (§§ 48-101-513, 66-28-402).
- `edu-no-tpa-exemption-notice-tn` (Absent): ""tenant protection" OR "renter protection"" 0 hits.
- `edu-no-tpa-notice-tn` (Absent): ""tenant protection" OR "renter protection"" 0 hits.
- `edu-no-tpa-sunset-tn` (Absent): ""tenant protection" OR "renter protection"" 0 hits.
- `edu-no-translation-duty-tn` (Absent): "(translat! OR "language other than English" OR Spanish) w/20 (lease OR "rental agreement" OR tenant)" 0 hits.
- `edu-trespass-notice-tn` (Present): "trespass w/20 (landlord OR tenant OR "common area")" 2 hits (§§ 44-8-301, 66-28-202); ""criminal trespass"" 12 hits (§§ 39-12-203, 37-1-702, 70-4-127, 40-39-216, and others).
- `edu-no-truth-in-renting-tn` (Absent): ""truth in renting" OR (tenant w/20 "clearly established")" 0 hits.
- `edu-no-unbundled-parking-rule-tn` (Absent): "parking w/20 (separate! OR unbundl!) AND (rent OR lease)" 3 hits (§§ 67-6-712, 67-6-103, 57-4-102).
- `edu-unconscionability-tn` (Present): "unconscionab!" 12 hits (§§ 47-14-117, 45-5-403, 47-18-5528, 47-2-302, 47-2-309, 47-2-719, 47-2A-108, 47-2A-503, 66-28-204, 66-29-133, 47-18-708, 66-27-405).
- `edu-unpaid-amount-interest-tn` (Present): ""legal rate" OR "rate of interest" w/20 (judgment OR contract)" 27 hits (§§ 47-15-104, 56-1-911, 47-14-106, 56-36-104, 56-9-325, 47-14-121, and others); "interest w/10 (unpaid OR past-due OR delinquent) AND rent" 16 hits (§§ 67-4-1415, 11-25-115, 7-90-112, 68-212-401, and others).
- `edu-no-usufruct-rule-tn` (Absent): "usufruct! OR "life estate" w/20 lease" 0 hits.
- `edu-no-utility-allowance-rule-tn` (Absent): "electric! w/20 (submeter! OR resell! OR resale)" 3 hits (§§ 67-4-3101, 7-51-910, 7-52-303); "(utilit! OR water OR electric!) w/20 (apportion! OR allocat!) AND (tenant OR "dwelling unit")" 0 hits.
- `edu-no-utility-apportionment-rule-tn` (Absent): "(utilit! OR water OR electric!) w/20 (apportion! OR allocat!) AND (tenant OR "dwelling unit")" 0 hits; "(rebill! OR "ratio utility" OR allocat!) w/20 (utilit! OR water) AND (tenant OR resident)" 1 hit (§ 55-4-310).
- `edu-no-utility-deposit-rule-tn` (Absent): ""utility deposit" OR "customer deposit"" 0 hits; "deposit! w/20 utilit! AND (refund! OR return!)" 3 hits (§§ 39-13-314, 66-29-102, 66-29-105).
- `edu-no-utility-disclosure-attachment-tn` (Absent): "(utilit!) w/20 (disclos!) AND (lease OR tenant OR "rental agreement")" 0 hits.
- `edu-no-utility-disconnection-notice-rule-tn` (Absent): "(utility OR electric! OR water) w/30 (notif! OR notice) AND (landlord OR owner) AND tenant!" 5 hits (§§ 67-5-2701, 7-35-201, 65-35-104, 68-221-209, 66-28-405).
- `edu-no-submeter-interruption-rule-tn` (Absent): "submeter! OR "sub-meter!" OR "submetering"" 2 hits (§§ 68-221-620, 12-4-118); "electric! w/20 (submeter! OR resell! OR resale)" 3 hits (§§ 67-4-3101, 7-51-910, 7-52-303).
- `edu-utility-landlord-account-tn` (Present): "(utilit! OR "essential services") w/20 (interrupt! OR discontinu!) AND (landlord OR tenant)" 1 hit (§ 66-28-504).
- `edu-utility-shutoff-tn` (Absent): "(disconnect! OR "termination of service") w/20 (utility OR electric! OR gas OR water) AND (notice OR weather OR medical)" 3 hits (§§ 68-102-153, 67-5-2701, 68-135-108); "(cold OR winter OR freez!) w/20 (vacate OR evict! OR tenant)" 2 hits (§§ 39-15-502, 47-18-2111).
- `edu-no-submetering-rule-tn` (Absent): "submeter! OR "sub-meter!" OR "submetering"" 2 hits (§§ 68-221-620, 12-4-118); "(rebill! OR "ratio utility" OR allocat!) w/20 (utilit! OR water) AND (tenant OR resident)" 1 hit (§ 55-4-310); "(utilit! OR electric! OR water) w/20 (resell! OR resale OR "actual cost") AND (tenant OR landlord OR apartment)" 3 hits (§ 67-6-102).
- `edu-no-veterans-incentive-tn` (Absent): "veteran! w/20 (rent! OR housing OR landlord OR tenant)" 11 hits (§§ 67-5-207, 13-23-102, 35-3-120, 58-7-108, 45-20-102, and others).
- `edu-waiver-by-acceptance-tn` (Present): ""acceptance of rent"" 1 hit (§ 66-28-202); "(accept! w/5 rent) AND (waive! OR waiver)" 1 hit (§ 66-28-508); ""without reservation"" 4 hits (§§ 66-28-202, 66-28-508, 47-2-605, 8-50-116); "reservation w/10 rent" 8 hits (§§ 66-28-202, 66-28-508, 66-12-111, 47-2A-514, 56-3-402, 13-20-603, 56-3-303, 7-56-208).
- `edu-no-water-heater-temperature-rule-tn` (Absent): ""water heater" w/20 (temperature OR degrees)" 0 hits; ""heating" w/20 (degrees OR temperature)" 3 hits (§§ 68-131-304, 62-10-103, 67-3-103).
- `edu-no-waterbed-rule-tn` (Absent): "waterbed! OR "water bed" OR "liquid-filled furniture"" 0 hits.
- `edu-no-window-guard-rule-tn` (Absent): ""window guard!" OR (window w/10 (bar OR bars OR guard!)) AND (child OR escape)" 0 hits.
- `edu-written-notice-tn` (Present): ""written notice" w/20 (tenant OR landlord)" 18 hits (§§ 66-28-301, 66-28-502, 66-7-112, 66-28-205, 66-28-517, 62-25-105, 66-28-505, 66-28-512, and others).

### §4 Decisions and questions to Taylor

**Decisions (batch 1).**

- D1. Interest on late rent (`edu-unpaid-amount-interest-tn`). Whether interest charged because rent is late is a "charge or fee ... for the late payment of rent" under Tenn. Code Ann. § 66-28-201(d) is not settled by the text. The row takes the cautious reading for the Act counties (keep interest and late fees together inside the 10% cap) and says the question is open.
- D2. Unclaimed deposit refunds outside the Act counties (`edu-deposit-escheat-tn`). The Unclaimed Property Act names no landlord-deposit category. The row presents its catch-all three-year presumption (§ 66-29-105(a)(14)) as a risk, not a rule, and advises against a non-Act forfeiture clause.
- D3. Forfeiture for mishandled deposits (`edu-security-deposit-penalty-tn`). § 66-28-301(c) joins its two failures with "and". The row states the two together, as the statute does, and does not tell landlords that either failure alone forfeits the deposit.
- D4. Item 4 pointers. The deposit rows point to the existing `edu-security-deposit-rules-tn`, `security-deposit-return-tn-act`, `edu-no-deposit-interest-tn` and `edu-fees-as-rent-tn` rather than repeating them. Fee rows point to `late-fee-limit-tn`, `late-fee-tn-other` and `edu-late-fee-rules-tn`.
- D5. Tags. `carpet-cleaning-ar` and `nonrefundable-fees-wv` were tagged TN (both tiers; reasons in each TN segment). `showing-notice-la` was declined: its notice period conflicts with the Act's 24-hour rule for final-month showings (§ 66-28-403(e)(5)). The showing topic is answered in batch 2.

- D6. Batch 2 scope labels. The waiver rows are BOTH REGIMES: they state the Act-county rule and then what applies elsewhere. The homestead row is STATEWIDE because Title 26 Chapter 2 applies in every county. After the independent check, every row that states an Act-county rule beside a statewide one is labelled BOTH REGIMES; this includes the smoke-drift and jury rows (log §5).
- D7. Non-Act casualty rule (`edu-casualty-mitigation-waiver-tn`). § 66-7-102 lets an "express agreement to the contrary ... in writing" vary the casualty-surrender rule. Neither § 66-7-102 nor § 66-28-503 says whether § 66-7-102 also applies in Act counties. The row applies § 66-28-503 there and § 66-7-102 elsewhere.
- D8. Jury waiver (`edu-jury-waiver-tn`). The library adds no jury-waiver clause. The Constitution has not been read, and case law on pre-dispute jury waivers was not searched.
- D9. Arbitration (`edu-binding-arbitration-tn`). The library adds no arbitration clause. In the Act counties it is unsettled whether such a clause can reach the Act's remedies or a possession case.

- D10 (item 9a). `early-termination-ks` checked; **no `early-termination-tn` proposed.** The clause is a tenant-elected option. The tenant gives 30 days' notice and pays the greater of one month's rent or 30% of the remaining rent, and the lease ends. It is not an abandonment, so the § 66-28-507(c) duty to rerent and the § 66-28-405 abandonment procedure are not triggered by its use. Its sentence "Landlord may terminate this Lease early ... if Tenant vacates or abandons the property without notifying Landlord" ends the lease but authorizes no retaking of possession: § 66-28-511 still limits possession to court action, abandonment or surrender, and in the Act counties abandonment is shown under § 66-28-405. The clause's "Nothing in this Section limits any right either party has under applicable law" keeps both rules. The § 66-28-515(a) duty to mitigate concerns damages for breach, not the price of an option the tenant chooses. Whether a 30%-of-remaining-rent fee on a long lease is an unenforceable penalty is case law, which was not searched (rule 16). The risk is recorded in `edu-liquidated-damages-tn`. **Recommendation:** keep the tag; if Taylor wants a lower ceiling for long Tennessee leases, a TN variant capping the fee at two months' rent is the conservative alternative. Not proposed unless asked.
- D11 (item 9b). `holdover-rate-tn` confirmed against § 66-28-512(c): 'the landlord may bring an action for possession, back rent and reasonable attorney's fees as well as any other damages provided for in the lease'. The clause is a damages term "provided for in the lease". It excludes holdovers the landlord consented to, which § 66-28-512(c) sends to § 66-28-201(c). Replacing the willful-holdover actual damages with the stated rate gives up only the landlord's own right. Outside the Act counties the rate is a contract term. No change.
- D12 (item 9c). No Tennessee eviction row contradicts `edu-cares-act-notice`. One row reads close to it: see §6 F3 (`nonpayment-notice-waiver-tn`). `edu-eviction-process-tn` begins "After the required termination notice", which leaves room for the federal notice.
- D13 (item 8). One line each, both tiers:
  - `smoking-policy`: confirmed. No statute limits a lease smoking ban (battery in `edu-smoke-drift-tn`; "smok! w/20 (lease OR tenant OR landlord OR apartment)": 5 hits, none a limit). The state ban already covers common areas (§ 39-17-1803(a)(9)), and the private-residence exemption (§ 39-17-1804(8)) exempts units from the state ban without limiting a lease ban.
  - `no-alterations`: confirmed. No Tennessee statute gives tenants a right to alter. § 66-28-401(4) bars damaging or defacing the premises. The clause's carve-out keeps reasonable modifications under fair housing law and any § 66-28-304(c) agreement.
  - `addendum-precedence`: confirmed. No statute sets precedence. The clause's exception keeps the Act's required statements (§ 66-28-201(a) insurance notice, § 66-28-301(h) account location, § 66-28-505(b) bold waiver) controlling.

- D14 (item 7). Checked `keys` and `hoa-compliance` against §§ 66-28-201(a), 66-28-203 and 66-28-104(13). **No conflict.** Neither clause waives an Act right, confesses judgment, exculpates the landlord or makes the tenant indemnify the landlord's own liability to the tenant. A pass-through of an association fine, or a rekeying cost, is not "liability of the landlord to the tenant arising under law" (§ 66-28-203(a)(2)). One consequence for the Act counties: both charges are "payments to be made to the landlord under the rental agreement", so they are "Rents" under § 66-28-104(13). An unpaid rekey charge or passed-on fine can therefore be treated like unpaid rent and applied against the deposit as "other amounts due and owing" (§ 66-28-301(e)). Neither charge is a late fee, so § 66-28-201(d) does not cap it. Risk for `hoa-compliance` only: an association rule adopted after signing binds the tenant through the lease. In the Act counties a landlord's own later rule binds only on reasonable notice and if it does not substantially modify the lease (§ 66-28-402(b)), and a court may read incorporated association rules the same way. **Recommendation:** add one line to each TN segment recording the § 66-28-104(13) consequence. For `hoa-compliance`, also add: "In the Act counties give the tenant reasonable notice of any association rule adopted after signing (§ 66-28-402(b))." No text change. These are recommendations, not findings of error, so they are not repeated in §6.
- D15 (item 6). `landscaping-irrigation` was not tagged; its TN tag was removed 2026-10-04. No snow clause was tagged. The new `edu-landscaping-tn` and `edu-snow-removal-tn` point to `tenant-repair-agreement-tn`, whose own text already says the lease does not make the tenant responsible for lawn care or snow removal. No opt-in clause was written, because the existing separate agreement already serves both tiers.
- D16 (item 3). The six DV topics are answered from §§ 66-28-205, 66-7-112, 66-28-517(g), 66-7-109(e), 36-3-601, 36-3-602, 36-3-605 and 36-3-606, and the address confidentiality program (§§ 40-38-601, 40-38-602, 40-38-606), all read. Searches for lock-change, confidentiality and deposit-timing rules: lock-change 0 hits; confidentiality found only the program and the termination statutes' nondisclosure rule; deposit-timing found none. All rows point to `edu-dv-lease-termination-tn` and `edu-dv-tenancy-protections-tn` and do not repeat them.

- D17 (batch 7). Where a topic's only Code hits are in sections not read this pass (sales tax for `rent-tax`; the mechanics' lien chapter for `construction-liens`; criminal trespass for `trespass-notice`; the general nuisance statute for `nuisance`; the elevator chapter for `other-landlord-facilities`; the non-agricultural foreign-ownership sections for `foreign-ownership`), the row says so and states no rule from those sections. These are the first candidates for a follow-up read if Taylor wants fuller answers.
- D18. The three confirmed-absence summary topics (`confirmed-absences-habitability`, `confirmed-absences-misc`, `confirmed-absences-outside-title`) are short rows that list the absence rows they summarize and repeat a few batteries. They add no new rule.

**Questions to Taylor.**

- Q1 (rule 12). Some topics in later batches need federal text: FDCPA 15 U.S.C. § 1692f, the Fair Housing Act, CARES Act § 4024 notice (15 U.S.C. § 9058), PTFA and the lead-disclosure rule. **Recommendation:** approve saving these from uscode.house.gov and ecfr.gov into the corpus folder, read whole, the same way as the state sections. Until then, the rows refer to federal law only in general terms and quote nothing.

### §5 Independent check

Two rounds were run (rule 80), one agent at a time. Each agent was a fresh general-purpose agent with no access to my reasoning. It was given the delta, the saved section texts (`src/`) and the search log, and told to treat `src/` as the only source of statute text. All edits are recorded as exact old-to-new replacements in `fixes/r1.py` and `fixes/r2.py`. `scripts/build.py` applies them and fails if any old text is not found exactly once. After each round the quote check and the integrity check were re-run; both passed (135 quoted spans, all found).

**Round 1 (all 239 rows).** The quotes and every battery line matched the log. There were 18 findings. The substantive ones:
- The § 13-6-106 public-nuisance receivership, whose receiver's lien is a first lien ahead of mortgages, had been reported as absent in two rows.
- § 66-28-105(b) (nonresident landlord's agent for service) was missed by the "nonresident" search because the statute says "not a resident".
- Incomplete non-Act notice periods under § 66-7-109(a)(1)(C), (c) and (f).
- The Act's definition of "substantially impaired" (§ 66-28-104(15): deemed unfit for human habitation by a governmental authority) was missing from five casualty rows.
- Penalty-doctrine and tax statements had been made without reading the case law or the sections.
- An elevator-chapter description had been taken from search headings only.
- Smaller wording errors, and five utility rows' search-hit descriptions that did not match their own searches.

All were fixed in 48 rows. **Rows edited after round 1:** `edu-attorney-fees-tn`, `edu-casualty-mitigation-waiver-tn`, `edu-cure-and-eviction-grounds-tn`, `edu-deposit-escheat-tn`, `edu-deposit-move-out-notice-tn`, `edu-disability-accommodation-tn`, `edu-disaster-duties-tn`, `edu-dv-protection-order-citations-tn`, `edu-ev-charging-hoa-tn`, `edu-foreign-ownership-tn`, `edu-habitability-materiality-tn`, `edu-habitability-modifiable-tn`, `edu-jury-waiver-tn`, `edu-limitation-of-actions-tn`, `edu-liquidated-damages-tn`, `edu-no-appliance-rule-tn`, `edu-no-balcony-inspection-rule-tn`, `edu-no-condemned-rent-bar-tn`, `edu-no-deposit-cost-schedule-tn`, `edu-no-drug-free-addendum-rule-tn`, `edu-no-dv-deposit-timing-rule-tn`, `edu-no-electric-resale-rule-tn`, `edu-no-ev-resale-rule-tn`, `edu-no-eviction-penalty-rule-tn`, `edu-no-facility-duty-rule-tn`, `edu-no-municipal-utility-lien-rule-tn`, `edu-no-notice-service-fee-rule-tn`, `edu-no-pool-safety-rule-tn`, `edu-no-radiator-cover-rule-tn`, `edu-no-submetering-rule-tn`, `edu-no-utility-allowance-rule-tn`, `edu-no-utility-apportionment-rule-tn`, `edu-no-utility-deposit-rule-tn`, `edu-no-water-heater-temperature-rule-tn`, `edu-no-well-testing-rule-tn`, `edu-no-window-guard-rule-tn`, `edu-nonresident-owner-agent-tn`, `edu-notice-to-quit-waiver-tn`, `edu-nuisance-tn`, `edu-purpose-limitation-tn`, `edu-rent-tax-tn`, `edu-smoke-drift-tn`, `edu-statutory-early-termination-tn`, `edu-student-housing-tn`, `edu-substandard-receivership-tn`, `edu-tenant-confidential-info-tn`, `edu-trespass-notice-tn`, `edu-waiver-by-acceptance-tn`.

**Round 2 (the 48 edited rows; final round).** Most round-1 edits were confirmed. There were 13 further findings:
- The § 13-6-106 transfer bar applies only when a certificate of public nuisance is attached.
- "Municipal corporation" includes counties (§ 13-6-102(8)).
- Receiver appointment follows only after failed abatement by the owner or an interested person.
- The receiver has tax-enforcement receiver powers (§ 67-5-2103, not read).
- The landlord's own casualty termination right is not a tenant right the Act bars waiving.
- The § 66-28-301(g) later-discovered-damage rule.
- Fuller § 66-2-302 definitions.
- The exact § 66-28-502 trigger.
- Notes citations, and three scope labels.

All were fixed. **Rows edited after the last round (round 2), not re-checked by an independent agent:** `edu-casualty-mitigation-waiver-tn`, `edu-cure-and-eviction-grounds-tn`, `edu-dv-protection-order-citations-tn`, `edu-foreign-ownership-tn`, `edu-habitability-materiality-tn`, `edu-habitability-modifiable-tn`, `edu-no-condemned-rent-bar-tn`, `edu-no-deposit-cost-schedule-tn`, `edu-no-electric-resale-rule-tn`, `edu-no-ev-resale-rule-tn`, `edu-no-submetering-rule-tn`, `edu-no-utility-allowance-rule-tn`, `edu-no-utility-apportionment-rule-tn`, `edu-nonresident-owner-agent-tn`, `edu-notice-to-quit-waiver-tn`, `edu-nuisance-tn`, `edu-statutory-early-termination-tn`, `edu-student-housing-tn`, `edu-substandard-receivership-tn`, `edu-tenant-confidential-info-tn`. Each edit adopts the round-2 agent's suggested wording or a close variant checked against `src/`.

**Source-file correction found in round 1.** The importer re-imported every saved export on each run. That overwrote `src/66-28-402.txt` with the 2027 version. It now maps each Lexis version to its own file: `66-28-402.txt` is the version in force until 2027-01-01, and `66-28-402~2027.txt` is the version effective that day. No row was affected, because subsections (a)(6) and (b), which the rows rely on, are the same in both.

### §6 Findings on existing rows

**F1. `possession-bond-tn` and `edu-prohibited-lease-terms-tn`: the general voidness statute for pre-suit confessions of judgment is not addressed.** Tenn. Code Ann. § 25-2-101(a) (history: Code 1932, § 8848) reads: 'Any power of attorney or authority to confess judgment which is given before an action is instituted and before the service of process in such action, is declared void; and any judgment based on such power of attorney or authority is likewise declared void.' Subsection (b) saves only an authority 'given after an action is instituted and after the service of process'. The § 29-18-123 lease bond is, by its own terms, an authority given in the lease, before any action, to 'confess a judgment for possession'. `possession-bond-tn` (NON-ACT COUNTIES ONLY) offers that bond, and its notes list three unresolved risks (the court term, federal cognovit case law, and the § 66-7-109 notices) but not § 25-2-101. `edu-prohibited-lease-terms-tn` says: "Outside the Act counties these rules do not apply, and an old statute still allows a lease bond in which the tenant authorizes a confessed judgment for possession at the end of the term". Both statutes were carried into the 1932 Code (§ 29-18-123's history: "mod. Code 1932, §§ 9279-9281"), and neither text says which controls. The specific bond statute may survive as an exception, but that is a reading, not something either text states. **Recommendation:** add a fourth risk to `possession-bond-tn`'s notes: "(4) Tenn. Code Ann. § 25-2-101(a) declares void any authority to confess judgment given before an action is instituted and served; whether the older, specific § 29-18-123 bond survives it is unresolved — take advice." Add one clause to the edu row's sentence: "… at the end of the term, though a general statute voids pre-suit confessions of judgment and how the two fit is unresolved". The new `edu-confession-of-judgment-tn` already says this. No existing row was changed.

**F2. `edu-no-for-cause-eviction-tn`: § 29-18-102(b) is not mentioned.** Tenn. Code Ann. § 29-18-102(b) reads: 'No action for forcible entry and detainer shall lie against any tenant who has paid all rent due for current occupancy of the premises and who is not in violation of any law nor otherwise in breach of the tenant's written lease, but this subsection (b) shall not apply in any manner to farm property, nor shall this subsection (b) be construed to alter or amend any valid lease agreement in effect on May 31, 1979.' The row says: "Tennessee has no just-cause or good-cause eviction rule in either the 17 Act counties or the other 78: a landlord may decline to renew a fixed-term lease, or end a periodic tenancy with the required notice, without giving a reason." On its text, § 29-18-102(b) bars only the forcible entry and detainer action as defined in § 29-18-102(a) (entry by force, threats, putting goods out of doors). Unlawful detainer is defined separately in § 29-18-104: a tenant who 'willfully and without force, holds over the possession from the landlord'. So the row's conclusion probably stands. But a reader of § 29-18-102(b) could take it as a general paid-up-tenant protection, and the row's search battery did not surface it. **Recommendation:** add to the row's notes: "Tenn. Code Ann. § 29-18-102(b) (no forcible entry and detainer action against a paid-up tenant not in breach of a written lease; farm property excepted) limits only the forcible-entry action defined in § 29-18-102(a); the holdover action is unlawful detainer under § 29-18-104, which (b) does not mention. Case law on (b) was not searched." The row's text needs no change.

**F3. `nonpayment-notice-waiver-tn`: no pointer to the federal 30-day notice.** The clause says: "If Rent is not paid by the end of the five-day grace period in this Lease, Landlord may file a detainer warrant to recover possession immediately, without first giving Tenant written notice of the nonpayment." The shared `edu-cares-act-notice` (tagged TN) says that on a property with a federally backed mortgage or in a covered program "you may not require the tenant to vacate until 30 days after you give a notice to vacate (15 U.S.C. § 9058(c))" and "the safe course is to give at least 30 days' written notice to vacate before filing". The clause waives only the state notice, so the two rows do not strictly conflict. But a landlord on a covered property who reads the clause alone could file without the federal notice. The clause's notes do not mention the CARES Act. **Recommendation:** add to the notes: "On a property covered by 15 U.S.C. § 9058 (see `edu-cares-act-notice`), the waiver does not excuse the federal 30-day notice to vacate; the safe course there is to give it before filing." Optionally add one body sentence: "This waiver does not affect any notice federal law requires." No existing row was changed.

### §7 Findings for other states

None.

### Proposed SOP changes

- S1. Add a mechanical quote check before delivery: every single-quoted span of statute text in a delta row's notes or basis is matched, after normalising whitespace, curly quotes and dashes, against the saved section texts read this pass, and any miss blocks delivery. In this pass it caught a clause phrase written in single quotes (now in double quotes, as rule 19's quoting convention requires).
- S2. Generate battery lines from the saved search log instead of typing counts by hand. Every count and hit list in a row then matches the log, and the log is the evidence. Prose about which sections the hits are should be written only after reading the full hit list; this pass corrected six such descriptions before delivery.
- S3. Record post-check edits as exact old-to-new replacements in a fixes file that the build applies and verifies (each old text must occur once). Then "rows edited after the last round" in §5 is generated from that file, and the original row text stays reviewable.
- S4. Keep each Lexis document version (e.g. "[Effective until …]" and "[Effective on …]") in its own source file. Make the importer idempotent so a re-run cannot overwrite one version with another.
- S5. For absence searches, also search the statute's own phrasing variants ("not a resident" as well as "nonresident"). The independent check found § 66-28-105(b) only that way.

### Proposed topic questions

- `security-deposit-penalty`: Does the deposit statute make forfeiture of the whole deposit depend on two failures together (no separate account **and** no damage listing), so that either failure alone does not forfeit it? (Tennessee: Tenn. Code Ann. § 66-28-301(c).)
- `rent-receipt-anti-waiver`: Did the state leave out the uniform act's rule that the right to receive rent cannot be separated from the duty to maintain (URLTA § 1.404 analogue)? Check the purposes section for a stray "obligations" phrase before concluding. (Tennessee: absent; § 66-28-103.)
- `confession-of-judgment`: Does a general statute void every pre-suit authority to confess judgment, and does an older landlord-tenant statute still authorize a lease bond to confess judgment for possession? If both exist, say which controls or that it is unresolved. (Tennessee: Tenn. Code Ann. §§ 25-2-101(a), 29-18-123.)
- `casualty-and-mitigation-waivable`: Outside the URLTA, does a general casualty statute let an express written agreement override the tenant's right to surrender an untenantable building? (Tennessee: Tenn. Code Ann. § 66-7-102.)

# Topic gaps sync (Claude Code, 2026-11-07)

Merged on base 8fa1f6f: 237 new rows, 2 tags (`carpet-cleaning-ar`, `nonrefundable-fees-wv`), matching the log. The Tennessee Code is on Lexis only (browser, CAPTCHA), so no script spot-check was possible; Desktop's mechanical quote check matched all 135 quoted spans against the pages it saved. The 20 rows edited after round 2 each adopt the round-2 checker's wording or a close variant checked against the saved pages; not re-checked at sync (no corpus). §6: F1 applied (`possession-bond-tn` risk (4) and `edu-prohibited-lease-terms-tn` body clause, Tenn. Code Ann. § 25-2-101(a)); F2 applied (`edu-no-for-cause-eviction-tn` notes, § 29-18-102(b)); F3 applied (`nonpayment-notice-waiver-tn` CARES notes line and the body sentence "This waiver does not affect any notice federal law requires."). §4 D14 notes lines added to the TN segments of `keys` and `hoa-compliance`. D10 accepted: TN keeps `early-termination-ks` (no TN variant). Arbitration: not offered, consistent with D9 and with the final held group (Tenn. Code Ann. § 66-28-203(b) actual damages for willfully using a known prohibited provision). Q1 (federal sources): already answered yes by Taylor (SOP rule 12). 239 citation rows (76 confirmed absent), 4 topic questions, SOP 2.01 (rules 16, 19).

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-ks` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.
