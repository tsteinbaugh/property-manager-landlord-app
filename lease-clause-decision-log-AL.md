# Alabama — lease-clause decision log (state #20)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12: Ala. Code Title 35 Chapter 9A read whole, all 48 section numbers, from the official Code of Alabama on ALISON with every history line; Chapters 9 and 9B of Title 35 and the unlawful detainer article read; every 2024, 2025 and 2026 act touching landlord-tenant terms screened; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Alabama Association of REALTORS® Form 401, 'Residential Lease – Long Version', 10 pages, dated 12-11-2006; the current RF 3.1 (revised 4/1/2026) is sold only to members and licensees; Taylor decision 5) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 65 scenarios, Claude-generated, SC §16 and GA §16 models plus Alabama-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: regular-expression search of the full official Code of Alabama, 49,638 section versions, 66 battery searches plus targeted ones, control term 0; outside-title sections read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN, VA) is closed. No re-audit of any completed state is planned. This pass changed no other state's row except by adding an `AL` tag and an `AL:` note.

**Date:** 2026-09-28 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why).
**Scope:** Alabama state law only. City and county ordinances (Birmingham, Huntsville, Mobile, Montgomery and others) out of scope, flagged where met, not resolved (instruction 20). Short-term and vacation rentals out of scope. Deprioritized: manufactured-home lots and abandoned manufactured homes (Title 35 Chapter 12A), agricultural rentals (excluded by the Act), crop and commercial liens (Title 35 Chapters 9 and 11).
**Input CSV:** `lease-clauses.csv`, **1,405 rows, 16 columns**; active counts AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, VA 137, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids, no dangling `supersedes`, every row 16 fields, CRLF. No AL rows of any kind (no dormant row). The outputs folder was empty at the start; nothing to delete (instruction 43).
**Output CSV:** `lease-clauses-AL-sync.csv`, **1,467 rows, 1,437 active. AL 112 active: 66 lease clauses, 46 education; all 112 VERIFIED.** Every other state's active count unchanged.

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **Ala. Code Title 35 Chapter 9A (Alabama Uniform Residential Landlord and Tenant Act), whole**: Ala. Code § 35-9A-101 to Ala. Code § 35-9A-603, 48 section numbers including the reserved Ala. Code § 35-9A-403, verbatim from the Legislature's official code service behind alison.legislature.state.al.us, with every history line (newest: Act 2018-473). **Also read:** Title 35 Chapter 9 (general landlord-tenant, incl. Ala. Code § 35-9-1 to § 35-9-15, § 35-9-60 to § 35-9-65, § 35-9-100), Chapter 9B (squatters, Act 2024-237, whole); unlawful detainer (Ala. Code § 6-6-310, -314, -317, -332, -350, -351). **Section-open outside Title 35 Chapter 9A:** Ala. Code § 6-5-155.1, -155.2, -156.3; § 6-6-796; § 6-10-2, -6, -120 to -126; § 8-1A-3; § 8-8-15; § 8-19J-1 to -3; § 11-40-12; § 11-80-8.1; § 13A-7-1 (part), -2, -3, -7; § 13A-8-23; § 13A-9-13.1, -13.2, -22, -23; § 13A-11-204; § 21-7-1, -4, -9; § 22-37A-1 to -3 (and -4 in part); § 24-8-3, -4, -7; § 24-8A-1 to -5; § 31-12-1 to -10; § 31-13-3, -13, -13.1, -33; § 31-2C-11; § 32-13-1, -2; § 34-27-100; § 35-1-5.1; § 35-8A-412; § 35-12-72. **Acts screened:** the ALISON act list for the 2024, 2025 and 2026 regular sessions and the 2026 First Special Session (2 election acts) by full-text search for landlord, tenant, residential lease, rental agreement, eviction, unlawful detainer and squatter; every code section whose history line cites a 2023-2026 act and whose text uses landlord-tenant terms (AL log §1.1). |
| Step 1 — tag first | **Done.** 50 shared rows tagged AL (§2.1). 10 bases not tagged: AL override or variant instead (§2.2). Every other state-specific row screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new AL rows | 16 AL lease clauses and 46 education rows (§3). |
| Instruction 24 families | **Both closed:** `security-deposit-return-al`; `assistance-animal-accommodation-al` (override; Ala. Code § 21-7-9 has no direct-threat limit for service animals, and Ala. Code § 24-8A-2(4) limits documentation to the person's medical provider). |
| Instruction 33 | **Checked.** Alabama's no-cure routes (intentional misrepresentation; illegal drugs; illegal firearm use; criminal assault; a repeat within six months; more than two cures in 12 months, Ala. Code § 35-9A-421(a), (d)) are preserved by the carve-out in `default-by-tenant-al`. The shared `early-termination` was not tagged (10 calendar days can be shorter than 7 business days). |
| Instruction 44 | **Checked.** No Alabama notice statute makes a lease-designated delivery method mandatory. |
| Instruction 47 | **Hit.** UETA does not apply to default, eviction or cure notices under a rental agreement for a primary residence (Ala. Code § 8-1A-3(c)(2)b.); `edu-electronic-notices-al`. |
| Instruction 48 | **Reverse hit.** Alabama requires certain notices and agreements to be SEPARATE from the lease (Ala. Code § 35-9A-303(b)(4), (d); § 35-9A-204(d)(1)); new instruction 57. |
| Instruction 49 | **Hit.** Alabama penalizes knowingly enforcing a prohibited term (Ala. Code § 35-9A-163(b)); the fee, exculpation and indemnity bases were not tagged (§2.2). |
| Kickoff scope question | **Statewide, no split** (Ala. Code § 35-9A-121, § 35-9A-122; Chapter 9A searched for county, municipal, population and units). The Tennessee/Virginia two-version approach was not needed. |
| Dormant row | None existed. |
| Named-topic checklist | **Done.** AL column in all 10 state-column tables (69 rows, no blank cell); AL answers appended to the 61-row gap-discovery backfill table; 18 new Alabama topics; candidate-topic table 292 refs. Instructions 57-59 added. |
| Layout rules (instruction 28) | **No bold or type-size rule; three separate-document rules** and one timing rule (§4). |
| Proof-of-absence | **Run** on the full official Code (§17): 18 topics confirmed absent code-wide, each with its own row. |
| Kickoff leads | All resolved (§12). One correction: the nonpayment notice is seven **business** days. |
| Open for Taylor | **None.** Decisions 1-5 answered 2026-09-28 and applied (§6). |

## 1. Process notes

### 1.1 Source and currency
- **Official source.** Every Alabama section was read from the official Code of Alabama 1975 served by the Alabama Legislature's ALISON site (the page at `alison.legislature.state.al.us/code-of-alabama?section=...` loads each section from the Legislature's GraphQL endpoint `/graphql`, query `codesOfAlabama`, fields `content`, `history`, `effectiveDate`, `supersessionDate`). No host copy (Justia, Casetext, FindLaw) was used for any row (instruction 45).
- **Currency.** ALISON returns, for a section amended with a delayed effective date, both the current version (with a supersession date) and the new version (with its effective date); 1,165 such versions exist, most effective 2026-10-01, some 2027-2029. So the compilation already prints the 2026 regular session. Chapter 9A has no pending version; its newest history entry is Act 2018-473 (Ala. Code § 35-9A-421). **Instruction 50 check:** the ALISON act list shows the 2024 and 2025 regular sessions, the 2026 regular session and the 2026 First Special Session (Acts 2026-612 and 2026-613, both elections). Full-text act search for landlord (30 acts), tenant (62), squatter (1), eviction (10) and related terms surfaced only: **Act 2024-237** (HB182, squatter removal, effective 2024-06-01: Chapter 9B; Ala. Code § 13A-7-7; § 13A-9-22); **Act 2026-536** (SB292, Alabama Property Protection Act of 2026, effective 2026-10-01: § 13A-9-22 amended to a Class D felony with intent to defraud, new § 13A-9-23, Chapter 35-21 title-fraud process, § 8-19J listing verification); **Act 2024-380** (Uniform Commercial Real Estate Receivership Act, effective 2025-01-01, § 6-6-796(h)); **Act 2026-511** (Class 1 vacant-property registration, § 11-67C-1 ff., 2026-10-01); **Act 2026-545** (Class 1 community land trusts); **Act 2025-453** (repealed § 31-13-13 harboring; § 31-13-33 untouched); **Act 2025-59** and **Act 2025-380** (brokerage disclosures, no landlord-tenant duty); **Act 2026-285** (unclaimed property amendments). None amends Chapter 9A.
- **Special sessions:** one in 2026, elections only (instruction 29).

### 1.2 How the text was obtained
- The shell cannot reach alison.legislature.state.al.us (proxy CONNECT 403). Taylor's built-in browser could; site access was granted on request.
- **Whole-code corpus (instruction 59).** The section query accepts `limit` and `offset`, so all sections were loaded in 25 pages of 2,000 inside the ALISON page: **49,638 records, 62.5 million characters of text, 0 fetch errors**. Offset paging repeated 9 records; completeness was checked against the service's own title index (`codeOfAlabamaTitles`, 49,293 section ids): every id loaded except 5 index artifacts the service does not return as sections (`23-2-1`, `23-2-40`, `23-2-80`, `32-6-16`, `36-15-4`). All 1,165 pending and superseded versions are in the corpus. Searches ran as JavaScript regular expressions (case-insensitive) over text and hits were mapped to their section and version. Control term 'zqxvbnmwt' returned 0; 'security deposit' 24 hits and 'carbon monoxide' 2, so the engine returns hits. This did the proof-of-absence and cross-title work directly, which is why **research mode was not needed**.
- No section needed a paste from Taylor (§5a.2 never triggered).

### 1.3 Section-open vs recall (instruction 22)
Every row was drafted with its section text in view in this session. The recall subset is empty. **No case law is relied on**; where Alabama law turns on case law (penalty test for late and early-termination fees and holdover charges; how the older double-rent sections apply to Act tenancies; the enforceability of Ala. Code § 31-13-33 after the federal HB 56 litigation; whether Ala. Code § 8-8-15 reaches landlords; the FTC Credit Practices Rule and lease exemption waivers), the row says so (instruction 16).

## 2. Step 1 — tag first

### 2.1 Tagged AL as written (50)
`rent-payment`, `late-fee-ne`, `returned-payments`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `surrender-end-of-term`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `rental-application-accuracy`, and the variants `holdover-ca`, `early-termination-ks`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `services-utilities-provided-ks-oh`, `tenant-forward-proceedings-ca`.

Every tagged row has an `AL:` note naming the controlling section. The ones that matter:
- **`late-fee-ne` instead of `late-fee`.** Alabama's acceptance-waiver section (Ala. Code § 35-9A-424) is word for word Nebraska's § 76-1433: accepting rent with knowledge of a default waives termination for that breach unless otherwise agreed after the breach. The base's 'or to pursue any other remedy' overstates what a standing sentence preserves; the NE text claims only future timely payment, later late fees and other breaches.
- **`notices` and `electronic-signatures`.** UETA excludes default, cure and eviction notices (Ala. Code § 8-1A-3(c)(2)b.); `notices` designates no electronic method.
- **`returned-payments`.** Ala. Code § 8-8-15 caps a bad check charge at the greater of $30 or the bank's charge for lenders, creditors and merchants; whether it reaches rent is unsettled; 'maximum permitted by law' is safe either way.
- **`security-deposit-use`.** Narrower than the statute (wear and tear, pre-existing damage, cleaning), so lawful; the statutory limit at termination is in `security-deposit-return-al`.
- **`surrender-end-of-term`.** 'At Tenant's cost' is damages, not a collection cost (Ala. Code § 35-9A-163(a)(3) read).

### 2.2 Not tagged — AL override or variant instead (10 bases)

| Base | Instead | Why the base fails in Alabama |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-al` | Instruction 24. 60 days after termination and delivery of possession; written forwarding address; 90-day forfeiture of unclaimed refunds; double the original deposit (Ala. Code § 35-9A-201) |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-al` | Instruction 24. Service animals: full housing access with no direct-threat limit, vaccination proof only (Ala. Code § 21-7-9); other assistance animals: documentation only from the person's medical provider (Ala. Code § 24-8A-2(4), § 24-8A-3) |
| `default-by-tenant` | `default-by-tenant-al` | A lease may not make the tenant pay the landlord's attorney's fees **or costs of collection** (Ala. Code § 35-9A-163(a)(3)); penalty for knowing enforcement (§ 35-9A-163(b)). `default-by-tenant-ks-ne` also fails: it keeps 'reasonable costs and expenses' (instruction 58) |
| `landlords-access` | `landlords-access-al` | 24 hours vs two days; a lease-based showing right where the statute requires a separate signed notice (Ala. Code § 35-9A-303(b)(4), (c)) |
| `possession-delay` | `possession-delay-al` | The base makes the tenant wait 30 days; Alabama allows termination on written notice with a 5-day refund (Ala. Code § 35-9A-402) |
| `pet-policy` | `pet-policy-al` | Unqualified indemnity and 'remove a pet, without liability' (Ala. Code § 35-9A-163(a)(4), (b)) |
| `early-termination` | `early-termination-ks` (tagged) | 10 calendar days can be shorter than the statutory 7 business days (Ala. Code § 35-9A-421(a)); penalty state |
| `holdover` | `holdover-ca` (tagged) | K.3: Alabama's measure is lump-sum (Ala. Code § 35-9A-441(c)) |
| `late-fee` | `late-fee-ne` (tagged) | Ala. Code § 35-9A-424 |
| `parking`, `storage-space`, `tenants-property-insurance`, `services-utilities-provided` | the `-ks-oh-ca` / `-ks-oh` variants (tagged) | Exculpation ban with a penalty (Ala. Code § 35-9A-163(a)(4), (b)); instruction 49 |

**L.2 exhaustive generic-clause audit (run on the output CSV):** every generic lease clause is tagged AL or superseded by an AL-tagged row. The only uncovered ids are other states' scope or tier variants (`month-to-month-notice-co-*`, `possession-delay-mn-new-construction`, the `-tn-act`/`-tn-other` and `-va-small` rows), which are state-specific by design.

### 2.3 Other states' specific rows screened, not tagged
All active single-state lease clauses were listed by topic and screened. Beyond `late-fee-ne`, `early-termination-ks` and the CA/KS variants (tagged), none applies as written. The closest analogues and what AL took instead:
- **URLTA-family rows.** `extended-absence-notice-ks` (7 days, first day) and `-ne` → `extended-absence-notice-al` (14 days, fifth day); `possession-delay-ks`/`-ne`/`-az`/`-sc` (1.5x, 3x, 2x figures) → `possession-delay-al` (3 months or actual); `casualty-termination-az` (accounts as of vacating) → `casualty-termination-al` (as of the casualty); `abandoned-property-ks`/`-sc`/`-tn` → `abandoned-property-al` (14 days, no notice); `landlord-disclosure-ks`/`-tn` → `landlord-disclosure-al` (business addresses); `tenant-repair-agreement-sc`/`-tn`/`-va` → `tenant-repair-agreement-al`; `default-by-tenant-ks-ne` (keeps costs) → `default-by-tenant-al`.
- **`security-deposit-cap-*`** (AZ 1.5 months, GA 2, NC tiered, NV, CA) → `security-deposit-cap-al` (1 month with open exceptions).
- **Opt-in rows.** `holdover-rate-sc` and `casualty-landlord-termination-sc` copied with Alabama named (decision 2). `electronic-notice-*` rows not copied (UETA exclusion). `flag-display-*` not copied (Alabama's flag statute binds associations only). `nonpayment-notice-sc` not copied (Alabama has no lease-as-notice route). DV rows: Alabama has none (`edu-no-dv-termination-al`). Smoke rows: no rental statute (`edu-no-smoke-alarm-duty-al`).

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type` or `content_type` changed. Each new clause was checked against the library by `topic_key`; none could be merged into a multi-state row without blurring a real divergence (instruction 26, priority rule). No two AL lease clauses share a `topic_key` (programmatic check).

### 3.2 New AL lease clauses (16)

| Row | Rule | Rests on | Opt-in? |
|---|---|---|---|
| `security-deposit-return-al` | REQUIRED | Ala. Code § 35-9A-201(b)-(h), § 35-9A-205(a) | — |
| `security-deposit-cap-al` | CONSTRAINED | Ala. Code § 35-9A-201(a) | — |
| `landlord-disclosure-al` | REQUIRED | Ala. Code § 35-9A-202 | — |
| `default-by-tenant-al` | REQUIRED | Ala. Code § 35-9A-163(a)(3), § 35-9A-421, § 35-9A-426 | — |
| `landlords-access-al` | RECOMMENDED | Ala. Code § 35-9A-303, § 35-9A-442 | — |
| `possession-delay-al` | RECOMMENDED | Ala. Code § 35-9A-203, § 35-9A-402 | — |
| `pet-policy-al` | RECOMMENDED | Ala. Code § 35-9A-163(a)(4), § 35-9A-201(a) | — |
| `assistance-animal-accommodation-al` | REQUIRED | Ala. Code § 21-7-9, § 24-8A-2, § 24-8A-3, § 24-8-7(k) | — |
| `casualty-termination-al` | RECOMMENDED | Ala. Code § 35-9A-406 | — |
| `casualty-landlord-termination-al` | CONDITIONAL | contract | **Yes** (decision 2) |
| `holdover-rate-al` | CONDITIONAL | contract; text identical to SC and GA | **Yes** (decision 2) |
| `extended-absence-notice-al` | CONDITIONAL | Ala. Code § 35-9A-304, § 35-9A-423(a)-(b) | **Yes** (exists only if the lease requires it) |
| `tenant-repair-agreement-al` | CONDITIONAL | Ala. Code § 35-9A-204(c)-(e) | **Yes** |
| `abandoned-property-al` | RECOMMENDED | Ala. Code § 35-9A-423(c)-(e) | — |
| `sex-offender-statement-al` | CONDITIONAL | Ala. Code § 13A-11-204(e) | **Yes** (Birmingham only; decision 3) |
| `exemption-waiver-al` | CONDITIONAL | Ala. Code § 6-10-120, § 6-10-121, § 6-10-123, § 6-10-126 | **Yes** (decision 4) |

### 3.3 New AL education rows (46)
- **Scope, terms and money:** `edu-scope-exclusions-al`, `edu-local-preemption-al`, `edu-prohibited-lease-terms-al`, `edu-security-deposit-rules-al`, `edu-dishonored-payment-remedies-al`, `edu-utilities-al`, `edu-exemption-waiver-al`.
- **Duties and access:** `edu-landlord-repair-duties-al`, `edu-rules-and-regulations-al`, `edu-entry-and-access-al`, `edu-lead-hazards-al`.
- **Ending the tenancy and eviction:** `edu-eviction-process-al`, `edu-self-help-eviction-al` (PROHIBITED), `edu-retaliation-al`, `edu-periodic-tenancy-notice-al`, `edu-holdover-remedies-al`, `edu-rent-into-court-counterclaim-al`, `edu-unauthorized-occupant-removal-al`, `edu-sale-of-rented-property-al`, `edu-condo-conversion-notice-al`, `edu-drug-nuisance-al`.
- **Rights and compliance:** `edu-servicemember-rights-al`, `edu-fair-housing-al`, `edu-service-animal-law-al`, `edu-electronic-notices-al`, `edu-towing-al`, `edu-immigration-rental-restriction-al`, `edu-birmingham-sex-offender-residence-al`.
- **18 confirmed absences, each with its own row:** deposit interest, late-fee cap, application-fee cap, rent-increase notice, source of income, radon, mold and bed bugs, CO alarms, smoke alarms (rentals), flood disclosure, EV charging, cash receipts, right to call police, tenant death, move-in inspection, drug-lab disclosure, DV termination, eviction-record sealing.

### 3.4 Opt-in landlord rights (instruction 30)
Rights that exist only if the lease invokes them, each offered as a row: extended-absence notice (Ala. Code § 35-9A-304); tenant-performed repairs by written agreement (Ala. Code § 35-9A-204(c)-(d)); utilities shifted by lease (Ala. Code § 35-9A-404(a); `utilities-paid-by-landlord`); the Birmingham tenant statement safe harbor (Ala. Code § 13A-11-204(e)); the personal-property exemption waiver (Ala. Code § 6-10-121; decision 4). Contract-only additions offered on Taylor's decisions: holdover rate, landlord casualty termination. **Not offered:** a homestead waiver (needs a separate witnessed instrument, Ala. Code § 6-10-122); a household-goods lien (unenforceable, Ala. Code § 35-9A-425); a separate showing or scheduled-service notice (must be outside the lease; builder gap, §4).

## 4. Layout and placement requirements (instruction 28)

**Code-wide typography search** (boldface, bold type, capital letters, conspicuous, underlin*, point type, separate document or writing, separately signed, within 200 characters of lease, tenant, lessee, rental agreement or landlord): 11 hits in 9 sections; the only residential landlord-tenant hit is Ala. Code § 35-9A-204. The rest are self-storage, rent-to-own, UCC leases and insurance. A second search, 'separate from the (rental agreement|lease)', found Ala. Code § 35-9A-303. **No bold, capitals or type-size rule for residential leases.**

| Rule | Requirement | Where it lives |
|---|---|---|
| Ala. Code § 35-9A-303(b)(4) | Entry to show without consent needs a general notice, **separate from the rental agreement**, signed by the tenant; within 4 months of expiration; in the prospect's company | `landlords-access-al` (**M.12 builder gap: separate signed-notice document**) |
| Ala. Code § 35-9A-303(d) | A general notice or advance schedule of more than two days for repairs, maintenance, pest control or health and safety services, **separate from the lease**, dispenses with further notice | `landlords-access-al` (**M.12 gap: separate notice**) |
| Ala. Code § 35-9A-204(d)(1) | Tenant repair agreement for a non-single-family unit must be a **separate writing** signed by the parties **and supported by adequate consideration** | `tenant-repair-agreement-al` (**M.12 gap: separate agreement with a consideration field**) |
| Ala. Code § 35-9A-202(a) | Owner and manager disclosure in writing **at or before commencement** | `landlord-disclosure-al` (timing) |
| Ala. Code § 13A-11-204(e) | Birmingham safe harbor needs the tenant's **signed** statement in the application or lease | `sex-offender-statement-al` (signature placement; municipality attribute gap) |

**Omission sanctions that forfeit money** (second half of instruction 28):
- late deposit refund or accounting: double the original deposit (Ala. Code § 35-9A-201(f));
- knowing enforcement of a prohibited term: actual damages plus up to one month's periodic rent and reasonable attorney's fees (Ala. Code § 35-9A-163(b));
- no owner and manager disclosure: the person who signed becomes the landlord's agent for service, notices and landlord obligations, including spending rent collected (Ala. Code § 35-9A-202(c));
- acceptance of rent with knowledge of a default: termination for that breach waived unless otherwise agreed after the breach (Ala. Code § 35-9A-424).

**Outside the lease** (for the builder's notice workflows): nonpayment and breach notices must be written, give at least 7 business days, and for rent state the rent and late fees owed (Ala. Code § 35-9A-421(a)-(b)); default, cure and eviction notices on paper (Ala. Code § 8-1A-3(c)(2)b.); entry notices may be posted on the primary door (Ala. Code § 35-9A-303(c)); the squatter affidavit follows the statutory form (Ala. Code § 35-9B-2(b)).

These add a new value to the **Addendum M.12** `formatting` field: **separate document** (with signature and, for repair agreements, consideration), alongside bold and conspicuous (TX, NJ, SC).

## 5. Dormant row (instruction 21)
None. No AL row existed in the library, active or dormant (kickoff confirmed by query).

## 6. Decisions for Taylor

Asked in this chat on 2026-09-28; answered the same day and applied.

| # | Question | Taylor's answer | What changed |
|---|---|---|---|
| 1 | Keep the library's late-fee sentence ('an unpaid late fee alone won't support termination') in Alabama's default clause, although late fees are rent and may go in the 7-business-day notice (Ala. Code § 35-9A-141(12), § 35-9A-421(b))? | Keep it | `default-by-tenant-al` keeps the sentence; the AL note records the decision |
| 2 | Which opt-in landlord clauses: daily holdover charge; landlord termination after a fire? | Both | New `holdover-rate-al` and `casualty-landlord-termination-al` (CONDITIONAL), texts identical to SC with Alabama named |
| 3 | Birmingham offender co-residence rule and its lease-statement safe harbor (Ala. Code § 13A-11-204): education only, or an optional clause too? | Optional clause too | New `sex-offender-statement-al` (CONDITIONAL, Birmingham only) plus `edu-birmingham-sex-offender-residence-al`; municipality attribute flagged (§14) |
| 4 | Offer an optional personal-property exemption waiver (Ala. Code § 6-10-120, § 6-10-121, § 6-10-126)? Taylor asked to see the clause and wanted more discussion; the FTC Credit Practices Rule was then read (16 CFR § 444.1, § 444.2(a)(2): lenders and retail installment sellers only, no mention of real-property leases) | 'I personally don't like this clause, but I think we should add it, give others the option and keeps things consistent' | New `exemption-waiver-al` (CONDITIONAL, not default), text as shown to Taylor; `edu-exemption-waiver-al` points to it. (An earlier handoff this evening wrongly closed this as education-only; superseded.) |
| 5 | Real lease: use the public Form 401 (2006) since RF 3.1 (4/1/2026) is sold only to members and licensees? | Use Form 401 | §15 compares Form 401 and records its age; its stale deposit and cure terms are logged as divergences |

## 7. Open items and read list (none blocking)

| Item | What would close it |
|---|---|
| Real lease | Optional: compare the current RF 3.1 (revised 4/1/2026) if a licensee copy becomes available |
| Exemption waiver | Unconscionability of `exemption-waiver-al` in a residential lease (Ala. Code § 35-9A-143); Alabama Constitution exemption article; wage-limit sections Ala. Code § 5-19-15, § 6-10-7 — not read |
| Case law, not relied on | Penalty test for late, early-termination and holdover charges; how Ala. Code § 6-6-314 and § 35-9-100(3) apply to Act tenancies; enforceability of Ala. Code § 31-13-33; whether Ala. Code § 8-8-15 reaches landlords; which of Ala. Code § 35-9A-201(d) and the Unclaimed Property Act controls an uncashed refund |
| Federal (instruction 16) | SCRA (50 U.S.C. § 3955); PTFA; VAWA (34 U.S.C. § 12491); FHA (42 U.S.C. § 3604); lead (42 U.S.C. § 4852d, 24 CFR Part 35, 40 CFR Part 745); ADA service-animal definition (28 C.F.R. § 36.104) — cited, not read. FTC Credit Practices Rule (16 CFR § 444.1, § 444.2) read on eCFR; no case law |
| Agency rules (instruction 16) | State Fire Marshal and building-code rules (smoke and CO alarms); Real Estate Commission trust-account rules; PSC disconnection rules; State Board of Health lead rules |
| Instruction 52 | Class 1 = 300,000 or more under the 1970 census (Ala. Code § 11-40-12); the section's own references to the Jefferson County Sheriff and the Birmingham Police Department identify Birmingham; census figures not independently pulled |
| Not read beyond titles or snippets | Ala. Code § 6-5-155 to § 6-5-156.5 (other than .1, .2, 156.3); § 6-6-783; § 15-20A-11 beyond (a)-(b); § 32-8-84 (2026 version); § 35-1-1.1; § 11-67C; Chapter 35-12A; Chapter 35-21; § 40-26-1 |
| Tribal land | Poarch Band of Creek Indians trust land: jurisdiction over residential leases not researched (backfill row) |
| Local ordinances | Birmingham, Huntsville, Mobile, Montgomery building and code enforcement; Class 1 vacant-property registration — flagged, not resolved (instruction 20) |

## 8. Integrity and screens
- **CSV:** 1,467 rows; every row has 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair, all states); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF, as in the input; unchanged rows are byte-identical (round-trip check of the input before editing). 50 existing rows changed: `states` (+AL), an appended ' | AL: ...' note, `last_checked` 2026-09-28. For every changed row, all other fields and the pre-existing notes are unchanged.
- **Counts:** AL 0 → 112 (66 lease clauses, 46 education; all VERIFIED). Every other state's active count unchanged: AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, VA 137, WY 106.
- **Instruction 37 (citation inventory):** Chapter 9A's 48 section numbers (from the service's own section list, incl. the reserved § 35-9A-403) were diffed against the `bodyText` and AL notes of every active AL row. The first diff found one uncited section (§ 35-9A-403, reserved), added to `edu-scope-exclusions-al`. Re-run on the final CSV: no uncited section. The general provisions (§ 35-9A-101 to -107, -121 to -123, -141 to -144, -161, -162, -601 to -603) are cited in `edu-scope-exclusions-al`.
- **Instruction 11 (citation screen):** every Alabama cite in AL rows was read section-open in this session, or read by search snippet and labelled so, or labelled 'not read' (§7).
- **Instruction 16 (non-statute citations):** federal SCRA, PTFA, VAWA, FHA, lead, ADA, FTC rule; Alabama Rules of Civil and Appellate Procedure (cited by Ala. Code § 35-9A-461, not read); agency rules above. No Alabama Administrative Code rule and no case law relied on.
- **Instructions 19/38:** every row id named in this log, in the AL checklist cells and sections, and in AL row notes exists in the output CSV (programmatic check). The only named ids not AL-tagged are the deliberate 'not tagged' references and other states' comparison rows.
- **Instruction 14:** every AL addition to a shared row's `notes` is delimited ' | AL: ...'.
- **Kickoff citation format:** every Alabama code cite in AL rows is written `Ala. Code § 35-9A-201` style (prefix, section sign, title-chapter-section, lettered chapters kept), including cites outside Title 35 (e.g. `Ala. Code § 8-1A-3(c)(2)b.`) and range endpoints (`Ala. Code § 35-9B-1 to Ala. Code § 35-9B-9`); a programmatic scan found no bare 35-9A, 35-9B or 35-9 cite in AL text. Act references ('Act 2024-237') are left unprefixed. **Cross-state check:** no row outside AL carries the `Ala. Code` prefix, and no AL note segment prefixes another state's section.

## 9. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every change to an existing shared row is an added `AL` tag with an `AL:` note, a states-only change under §5a.1.

**Later propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

### 9.1 Flags for Claude Code
**None.** No specific defect was found in another state's row. For information only: Tennessee (Act counties) has the same URLTA acceptance-waiver rule as Alabama (Tenn. Code Ann. § 66-28-508); its Act-county late-fee row (`late-fee-limit-tn`) carries no 'any other remedy' sentence, so nothing is affected.

## 10. Findings worth Taylor's attention
1. **Lease fee clauses are banned, not just limited.** An Alabama lease may not make the tenant pay the landlord's attorney's fees or even collection costs, and a landlord who enforces a term it knows is banned owes up to a month's rent plus fees (Ala. Code § 35-9A-163). Alabama gets its own default clause; the landlord still gets statutory fees.
2. **Nonpayment and breach notices are 7 business days**, and some breaches can't be cured at all: drugs, illegal firearm use, assault on the premises, lying on the application, or repeating the same breach within six months. No breach may be cured more than twice a year.
3. **Deposit: one month's rent, 60 days, double penalty.** The cap has open exceptions for pets, alterations and "increased liability risks"; a late refund costs double the original deposit; a refund the tenant never claims is forfeited after 90 days.
4. **Showing the unit needs a separate signed notice.** Two days' notice for entry, and showing without consent only in the last four months under a notice kept separate from the lease. The builder needs a separate-document output (instruction 57).
5. **Local governments can't regulate landlords.** The Act supersedes county and city landlord-tenant ordinances and rent control is banned (Ala. Code § 35-9A-121; § 11-80-8.1).
6. **No state DV termination, no smoke or CO alarm statute for rentals, no deposit interest, no late-fee cap.**
7. **2024 squatter law:** owner affidavit to law enforcement, removal without an eviction case; fraudulent leasing becomes a felony on 2026-10-01.
8. **Two animal laws:** service animals get full housing access with no extra charge and no direct-threat limit; other assistance animals' paperwork must come from the person's own medical provider, and misrepresentation is penalized.
9. **Outside Title 35:** Birmingham offender co-residence fine with a lease-statement safe harbor; the unlawful-presence rental statute still printed in Title 31; personal-property exemption waivers (optional clause); drug-nuisance suits that can escrow rent.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-AL-sync.csv` | 1,467 rows, 1,437 active; AL 112 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-AL.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | AL column in all 10 state-column tables; AL answers in the backfill table; Alabama sections at the end; instructions 57-59 |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| The Act: scope, exclusions, what a lease may not contain | **Confirmed:** statewide, exclusive remedy, eight exclusions plus squatters (Ala. Code § 35-9A-121, § 35-9A-122, § 35-9B-9); prohibited provisions with a penalty (Ala. Code § 35-9A-163); **no county, city or unit-count split** |
| Deposits: 'reported one-month cap' with pet, alteration and liability exceptions; deadline, itemization, penalty | **Confirmed:** cap and exceptions (Ala. Code § 35-9A-201(a)); 60 days; itemized list; double the original deposit; forwarding address; 90-day forfeiture (§ 35-9A-201(b)-(f)) |
| Owner and agent disclosure; maintenance duties; entry 'reportedly two days' | **Confirmed:** Ala. Code § 35-9A-202, § 35-9A-204, § 35-9A-301; entry two days **plus** separate-notice rules for showings and scheduled services (§ 35-9A-303) |
| Late fees: any statute? | **None** (confirmed absent); late fees may be included in the nonpayment notice (Ala. Code § 35-9A-421(b)) |
| Nonpayment and other termination notices 'reportedly short'; periodic notice; holdover; abandoned property | **Corrected:** 7 **business** days for both (Ala. Code § 35-9A-421(a)-(b)); 7/30 days periodic (§ 35-9A-441); willful holdover 3 months' rent or actual damages plus fees (§ 35-9A-441(c)); property left 14 days after termination may be disposed of; 7 days without electricity is abandonment (§ 35-9A-423) |
| Retaliation, self-help, unlawful detainer, rent into court on appeal | **Confirmed:** Ala. Code § 35-9A-501; § 35-9A-427, § 35-9A-407; § 35-9A-461 and § 6-6-310 ff.; appeal within 7 days, no stay unless rent is paid into court (§ 35-9A-461(d); § 6-6-351); 7-day writ stay |
| Local rent control | **Barred expressly** (Ala. Code § 11-80-8.1), and all local landlord-tenant ordinances superseded (Ala. Code § 35-9A-121) |
| DV and military termination; assistance animals; fair housing | **No state DV right** (confirmed absent); **no state military termination** (SCRA, extended to the Guard on state duty, Ala. Code § 31-12-2); assistance animals (Ala. Code § 21-7-9; Chapter 24-8A); fair housing tracks federal (Ala. Code § 24-8-4) |
| 2024-2026 acts (squatters, eviction procedure) | **Act 2024-237** (squatters, burglary, fraudulent lease); **Act 2026-536** (fraudulent lease felony from 2026-10-01); **no act amended Chapter 9A or the unlawful detainer article** |
| Not in the leads | Separate-document rules; collection-cost ban; unclaimed-refund forfeiture; Birmingham offender rule; Ala. Code § 31-13-33; personal-property exemption waivers (optional clause); drug-nuisance suits; receivership lease protection; condominium conversion notice; utilities in the tenant's name (Ala. Code § 35-9-14, § 35-9-15) |

## 14. Product flags (Addendum M)
- **Separate-document outputs (M.12 extension).** Three Alabama rules need a document the builder produces separately from the lease: the showing notice (Ala. Code § 35-9A-303(b)(4)), the scheduled-service notice (§ 35-9A-303(d)) and the non-single-family repair agreement with a consideration field (§ 35-9A-204(d)(1)).
- **Municipality attribute.** `sex-offender-statement-al` applies only in a Class 1 municipality (Birmingham); the builder has no city field (compare TN's county attribute and VA's unit-count attribute).
- **Deposit automation.** The 60-day clock runs from termination AND delivery of possession; the 90-day forfeiture of unclaimed refunds should drive a reminder, not an automatic retention, while the unclaimed-property question is open.

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** Alabama Association of REALTORS®, Inc., **Form 401, 'Residential Lease – Long Version'**, 10 pages, footer 'Last Updated: 12-11-2006', with the notice that the form 'is made available as a service to the members' of the Association. **Where from:** a copy hosted at `esign.com/wp-content/uploads/Alabama-Assoc-of-Realtors-Residential-Lease.pdf` (a brokerage-hosted copy at `tmirealestate.com/images/Lease.pdf` was unreachable). **Why it qualifies, and its limits:** the publisher is the state Realtors association (instruction 36), but the host is a form site and the form was **superseded** when AAR relaunched its forms: the current form is **RF 3.1 Residential Lease Agreement, revised 4/1/2026**, sold only to members and Alabama real estate licensees ($350 a year for non-members, per the AAR 2026 Legal Forms Preview page). Form 401 predates Act 2009-633, Act 2011-700, Act 2014-279 and Act 2018-473, so several of its terms track the 2006 Act (instruction 41: provenance and content can come apart). Taylor chose Form 401 (decision 5). A companion short form (Form 402, 12-26-2006, posted by RealtySouth) was outlined as a cross-check. **Method:** mapped by topic from a fetch-tool outline (no text reproduced; copyrighted). The lease is a lead only (instruction 6); every point below rests on primary text read for this pass.

### 15.1 Provision map

| Form 401 provision (by topic) | AL library coverage | Result |
|---|---|---|
| ¶1-3 Governing law (the 2006 Act); property; term; return in good condition | `governing-law`, `surrender-end-of-term` | Covered |
| ¶4 Lead-based paint | `lead-based-paint` | Covered |
| ¶5 Application accuracy; false statement allows termination and damages | `rental-application-accuracy` | Covered, and statutory: intentional misrepresentation is noncurable (Ala. Code § 35-9A-421(a), added after 2006) |
| ¶6 Rent due before the 1st; daily and second late fees; proration | `rent-payment`, `late-fee-ne` | Covered (no late-fee statute) |
| ¶7 Occupants and maximum | `permitted-occupants` | Covered (Ala. Code § 24-8-7(l)) |
| ¶8 Returned-check fee; certified funds after one bounce; bounced deposit or first rent voids the lease | `returned-payments`, `edu-dishonored-payment-remedies-al` | Covered; 'voids the lease' is a contract term with no statutory basis (not copied) |
| ¶9 Renewal; 30-day notice; month-to-month | `holdover-ca`, `edu-periodic-tenancy-notice-al` | Covered (Ala. Code § 35-9A-441(b)) |
| ¶10 Subletting; guest limit | `no-sublet-assign`, `guest-policy-day-limit` | Covered |
| ¶11 Utilities; connection fees | `utilities-responsibility`, `edu-utilities-al` | Covered (Ala. Code § 35-9A-404(a); § 35-9-14; § 35-9-15) |
| ¶12 Tenant obligations incl. yard, fire ants, filters, smoke-detector batteries; report problems within 5 days of occupancy; no rent deductions for repairs; no lock changes | `tenant-maintenance`, `landscaping-irrigation`, `keys` | Covered. 'No deductions' matches Alabama (no repair-and-deduct; Ala. Code § 35-9A-164). **Divergence:** in a non-single-family unit, tenant repair tasks need a separate signed writing with consideration (Ala. Code § 35-9A-204(d)); `tenant-repair-agreement-al` |
| ¶13 Landlord maintains fit and habitable premises and supplied systems incl. smoke detectors | `landlord-maintenance`, `edu-landlord-repair-duties-al` | Covered; smoke detector duty is contractual in Alabama (`edu-no-smoke-alarm-duty-al`) |
| ¶14 Essential services; appliance checklist | `appliances-included` | Covered |
| ¶15 Renter's insurance for tenant's possessions | `tenants-property-insurance-ks-oh-ca` | Covered |
| ¶16 Access: consent not unreasonably withheld; emergency; 2 days' notice, posting on the primary door | `landlords-access-al` | Covered; the form does **not** use a lease-based showing right, consistent with Ala. Code § 35-9A-303(b)(4) |
| ¶17 Military clause (PCS orders, 30 days' notice) | `early-termination-ks`, `edu-servicemember-rights-al` | Covered (SCRA; library decision: no SCRA clause) |
| ¶18 Destruction or damage: vacate within 14 days or partial abatement | `casualty-termination-al` | Covered (Ala. Code § 35-9A-406) |
| ¶19 Condemnation: tenant waives award claims | none | Not copied (eminent domain; case law) |
| ¶20 Abandonment: 15 days' unexplained absence after rent default; forcible entry to remove property | `abandoned-property-al` | **Divergence (stale):** the current Act deems abandonment after 7 days without electric service and lets the landlord dispose of property left 14 days after termination (Ala. Code § 35-9A-423(d)-(e), Act 2011-700, Act 2014-279); 'forcible entry' is not copied (self-help bar, § 35-9A-427) |
| ¶21 Deposit: itemized accounting within **35 days**; forwarding address | `security-deposit-return-al` | **Divergence (stale):** now 60 days, with the 90-day forfeiture and double-deposit penalty (Ala. Code § 35-9A-201, Act 2014-279) |
| ¶22 Non-rent breach: **14 days** to remedy; rent: unpaid **5 days** after due date plus notice; landlord repairs after **14 days**; damages and court costs; credit reporting | `default-by-tenant-al` | **Divergence (stale):** now 7 business days for both, with noncurable grounds and the two-cure limit (Ala. Code § 35-9A-421); landlord self-repair after 7 days (§ 35-9A-422). The form has **no attorney-fee clause**, consistent with Ala. Code § 35-9A-163(a)(3) |
| ¶23 Remedy after termination: possession, rent, damages, court costs | `default-by-tenant-al` | Covered (Ala. Code § 35-9A-426 adds reasonable attorney's fees by statute since Act 2011-700) |
| ¶24 Notice to the landlord at its business place | `notices` | Covered (Ala. Code § 35-9A-144(c)(2)) |
| ¶25 No antennas, satellite dishes, waterbeds or space heaters without consent | `common-area-use`, `no-alterations` | Covered in part. **Divergence:** federal OTARD (47 CFR § 1.4000, not read) limits antenna bans in tenant-controlled areas |
| ¶26 Inventory of furnished items | `existing-condition`, `edu-no-move-in-inspection-rule-al` | Covered |
| ¶27 Pets by consent; nonrefundable fee and refundable deposit; removal after first complaint | `pet-policy-al` | Covered (pet security is outside the cap, Ala. Code § 35-9A-201(a)) |
| ¶28 Tenant waives landlord-duty defenses to nonpayment without 14 days' notice | `edu-landlord-repair-duties-al` | **Divergence:** a lease may not waive rights under Ala. Code § 35-9A-204, -401 or -404 (Ala. Code § 35-9A-163(a)(1)); counterclaims with rent into court (§ 35-9A-405). Not copied |
| ¶29 Quiet enjoyment | none | Not needed (no lease covenant statute) |
| ¶30-31 Successors; subordination | `entire-agreement` | Covered or not needed (library decision: no subordination) |
| ¶32 Rent change after the initial term on 15 days' mailed notice | `edu-no-rent-increase-notice-al` | Contract term; no statute (confirmed absent); a month-to-month change is safest at a new period after 30 days' notice (§ 35-9A-441(b)) |
| ¶33 Rules and regulations, current and future | `edu-rules-and-regulations-al` | **Divergence:** a later rule that substantially modifies use needs written consent (Ala. Code § 35-9A-302(c)) |
| ¶34 Joint responsibility | `joint-liability` | Covered |
| ¶35 Landlord's address for communications | `landlord-disclosure-al` | **Partial:** the statute requires the names and business addresses of the manager and of an owner or service agent (Ala. Code § 35-9A-202) |
| ¶36 Captions | — | Not needed |
| ¶37 Fax and electronic communications and signatures | `electronic-signatures`, `edu-electronic-notices-al` | **Divergence:** UETA excludes default, cure and eviction notices (Ala. Code § 8-1A-3(c)(2)b.) |
| ¶38 Megan's Law: broker not responsible for registry information | `sex-offender-statement-al`, `edu-birmingham-sex-offender-residence-al` | Covered for Birmingham; statewide the registrant bears residence duties (Ala. Code § 15-20A-11) |
| ¶39-40 Entire agreement; time of the essence; non-reliance | `entire-agreement` | Covered (library decision: no time-of-essence boilerplate) |

### 15.2 What it produced
- **(a) Missing required clause:** none. The form carries no owner and manager disclosure in the statutory form (¶35 is partial); `landlord-disclosure-al` was already written from the statute walk.
- **(b) Corrections to AL rows:** none.
- **(c) New AL rows:** none new from the form. It confirms the two-day entry rule, the 14-day casualty rule and the absence of any attorney-fee clause.
- **(d) Divergences recorded as questions:** stale abandonment, deposit and cure terms (¶20-22); defense waiver (¶28); later rules (¶33); electronic notices (¶37); antennas (¶25); condemnation waiver (¶19); 'voids the lease' on a bounced first payment (¶8).
- **(e) Confirmed absences:** none new from the form.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the SC (§16), GA (§16) and AZ (§18.1) scenario maps, re-run against the AL-active library, plus Alabama-specific scenarios (separate showing notice, squatters under Act 2024-237, Birmingham offender rule, unclaimed deposit refunds, exemption waivers, receivership, drug-nuisance suits, unlawful-presence rental statute). Where no row answered, the whole-code search (§17) was run and every landlord-relevant hit read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 65 scenarios: 44 covered by rows written in the statute walk (one of them, a death in the unit, answered in the checklist with no row); 8 gaps, each producing a row or rows; 9 confirmed absences, each with its own row; 3 not located with no row (holding deposit, contractor liens, tribal trust land); 1 out of scope.

| Scenario | AL coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **Not located** (search 0 hits); cap reaches security 'for tenant's obligations under a rental agreement' (Ala. Code § 35-9A-201(a)). No row |
| Application fee; screening; drug conviction question | `edu-no-application-fee-cap-al`, `edu-fair-housing-al` | Covered (Ala. Code § 24-8-7(f), (l)) |
| Voucher holder applies | `edu-no-source-of-income-rule-al` | Covered |
| Applicant lied on the application | `rental-application-accuracy`, `default-by-tenant-al` | Covered (noncurable, Ala. Code § 35-9A-421(a)) |
| Required disclosures at signing | `landlord-disclosure-al`, `lead-based-paint` | Covered |
| Unit floods; radon; mold | `edu-no-flood-disclosure-al`, `edu-no-radon-disclosure-al`, `edu-no-mold-bedbug-disclosure-al` | Covered (confirmed absent) |
| Someone died in the unit | none | No rental or sale disclosure statute (stigmatized-property search 3 hits, none). Recorded in checklist; no row |
| Unit not ready on move-in day | `possession-delay-al` | Covered |
| How big a deposit may be; pet deposit on top | `security-deposit-cap-al`, `pet-policy-al` | Covered |
| Last month's rent collected at signing | `security-deposit-cap-al`, `due-at-signing` | Covered (prepaid rent for a specific period is not security) |
| Owner lives out of state | `landlord-disclosure-al`, `edu-scope-exclusions-al` | Covered (service under ARCP 4, Ala. Code § 35-9A-123(b)); no withholding statute located |
| Property in an HOA | `hoa-compliance` | Covered |
| City requires registration or inspection | `edu-local-preemption-al` | Covered (field preemption; Class 1 vacant registration flagged) |
| Short vacation stay rather than a lease | `edu-scope-exclusions-al` | **Out of scope** (transient occupancy excluded, Ala. Code § 35-9A-122(4)) |
| Unlawfully present applicant | `edu-immigration-rental-restriction-al` | **Gap → row** (found by §17, Ala. Code § 31-13-33) |
| Birmingham property; applicant is a registered offender | `sex-offender-statement-al`, `edu-birmingham-sex-offender-residence-al` | **Gap → rows** (found by §17; decision 3) |
| **Rent and money** | | |
| Rent is late | `late-fee-ne`, `default-by-tenant-al`, `edu-eviction-process-al` | Covered |
| Landlord accepts late rent, then wants to evict for it | `late-fee-ne`, `edu-eviction-process-al` | Covered (Ala. Code § 35-9A-424 waiver) |
| Check bounces | `returned-payments`, `edu-dishonored-payment-remedies-al` | Covered |
| Cash rent and receipts | `edu-no-cash-receipt-duty-al` | Covered (confirmed absent) |
| Raising rent | `edu-no-rent-increase-notice-al` | Covered (confirmed absent) |
| Utility company wants the landlord to pay the tenant's bill | `edu-utilities-al` | Covered (Ala. Code § 35-9-15) |
| Charging attorney's fees for an eviction | `default-by-tenant-al`, `edu-prohibited-lease-terms-al` | Covered (statutory only) |
| Judgment collection; tenant claims exemptions | `exemption-waiver-al`, `edu-exemption-waiver-al` | **Gap → rows** (found by §17; decision 4) |
| **During the tenancy** | | |
| Heat or AC fails | `landlord-maintenance`, `edu-landlord-repair-duties-al` | Covered (reasonable heat; no AC or temperature rule) |
| Tenant deducts repair costs or withholds rent | `edu-landlord-repair-duties-al` | Covered (no repair-and-deduct; Ala. Code § 35-9A-164) |
| Smoke detector dead | `edu-no-smoke-alarm-duty-al` | Covered (no rental statute; code-compliance duty) |
| CO alarm | `edu-no-co-alarm-duty-al` | Covered (confirmed absent) |
| Child found with lead poisoning | `edu-lead-hazards-al` | Covered (no state landlord abatement duty located) |
| Landlord wants to show the unit to buyers | `landlords-access-al`, `edu-entry-and-access-al` | Covered (two days; separate notice for no-consent showings) |
| Regular pest control | `landlords-access-al` | Covered (separate advance schedule, Ala. Code § 35-9A-303(d)) |
| Tenant refuses entry | `edu-entry-and-access-al` | Covered (Ala. Code § 35-9A-442(a)) |
| Tenant away for a month | `extended-absence-notice-al` | **Gap → row** (opt-in, Ala. Code § 35-9A-304) |
| Tenant changes the locks | `keys` | Covered (contract; no statute) |
| Guest won't leave | `guest-policy-day-limit`, `edu-eviction-process-al` | Covered |
| Squatters in a vacant unit | `edu-unauthorized-occupant-removal-al` | Covered (Act 2024-237) |
| Tenant lists the unit on Airbnb | `no-sublet-assign` | Covered |
| Drug dealing in the unit; neighbors sue | `residential-use-only`, `default-by-tenant-al`, `edu-drug-nuisance-al` | **Gap → row** for the nuisance suit (found by §17) |
| Unapproved pet; landlord wants it gone | `pet-policy-al`, `edu-self-help-eviction-al` | Covered |
| Service animal; emotional support animal | `assistance-animal-accommodation-al`, `edu-service-animal-law-al` | Covered |
| Disability modification request | `no-alterations`, `edu-fair-housing-al` | Covered (Ala. Code § 24-8-7(g)(1)) |
| Tenant hires a contractor (liens) | none | **Not located** as a landlord-tenant rule. No row |
| Single-family tenant agrees to do upkeep | `tenant-repair-agreement-al` | **Gap → row** (opt-in) |
| Tenant's car abandoned in the lot | `parking-vehicle-rules`, `edu-towing-al` | Covered |
| Fire or storm damage | `casualty-termination-al`, `casualty-landlord-termination-al` | Covered (decision 2) |
| Tenant calls police repeatedly | `edu-no-police-call-protection-al` | Covered (confirmed absent) |
| Tenant wants an EV charger | `edu-no-ev-charging-right-al` | Covered (confirmed absent) |
| Tenant complains to the city, then gets a nonrenewal | `edu-retaliation-al` | Covered |
| New house rule mid-lease | `edu-rules-and-regulations-al` | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination-ks` | Covered |
| DV victim wants out | `edu-no-dv-termination-al` | Covered (confirmed absent) |
| Soldier gets PCS orders; Guard on state duty | `edu-servicemember-rights-al` | Covered |
| Month-to-month: how much notice | `edu-periodic-tenancy-notice-al` | Covered |
| Tenant stays after the lease | `holdover-ca`, `holdover-rate-al`, `edu-holdover-remedies-al` | Covered |
| Tenant disappears; power shut off; belongings left | `abandoned-property-al` | Covered |
| Tenant dies | `edu-no-tenant-death-termination-al` | Covered (confirmed absent) |
| Eviction for nonpayment | `edu-eviction-process-al` | Covered |
| Tenant appeals the eviction | `edu-eviction-process-al`, `edu-rent-into-court-counterclaim-al` | Covered (rent into court) |
| Eviction record | `edu-no-eviction-record-sealing-al` | Covered (confirmed absent) |
| Landlord changes the locks or cuts utilities | `edu-self-help-eviction-al` | Covered |
| Move-out deposit dispute; refund check never cashed | `security-deposit-return-al`, `edu-security-deposit-rules-al` | Covered (90-day forfeiture; unclaimed-property conflict recorded) |
| **Owner changes** | | |
| Owner sells the property | `edu-sale-of-rented-property-al` | Covered |
| Lender forecloses; a receiver is appointed | `edu-sale-of-rented-property-al` | **Gap → row content** (receivership, found by §17); foreclosure not located (federal PTFA) |
| Owner converts to condominiums | `edu-condo-conversion-notice-al` | **Gap → row** (found by §17) |
| Property on tribal trust land | none | **Not located**; Poarch Band trust land not researched. No row |

("Covered" counts rows written in the statute walk. The eight gaps produced the rows named: six came from §17's outside-title search (unlawful-presence rental, Birmingham rule, exemption waiver, drug nuisance, receivership content, condominium conversion) and two from Chapter 9A provisions the scenario brought forward as opt-in rows.)

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engine:** the whole official Code of Alabama loaded into the ALISON page in the built-in browser on 2026-09-28 from the Legislature's own code service (49,638 section versions incl. pending and superseded versions; completeness checked against the title index, §1.2), searched with JavaScript regular expressions (case-insensitive; exact strings; word forms and plurals written into each pattern; hits mapped to section and version; Title 45 local laws counted separately). **Control terms:** 'zqxvbnmwt' returned 0 (a true empty); 'security deposit' 24 hits and 'carbon monoxide' 2, so ordinary terms return hits. Instruction 39: a probe is a screen, never a verdict; every landlord-relevant hit was read in context, and the key sections read section-open. One broad pattern ('eviction|rental agreement|primary residence') was used only to find the UETA section and is not an absence certificate.

| # | Search (regex, abbreviated) | Hits / sections (T45 = local laws) | Result |
|---|---|---|---|
| 1 | zqxvbnmwt (control) | 0 | True empty |
| 2 | money as security\|security deposit\|damage deposit\|pet deposit | 26 / 25 (9) | Residential only Ala. Code § 35-9A-163, § 35-9A-201 |
| 3 | deposits? … (exceed\|not more than\|maximum\|in excess of) … (rent\|month) | 0 | Cap only in § 35-9A-201(a) (worded 'in excess of one month's periodic rent', read directly) |
| 4 | interest near security deposit | 2 / 2 | Public contracts → `edu-no-deposit-interest-al` |
| 5 | late fee near rent/tenant/lease/landlord/dwelling | 10 / 7 | Only § 35-9A-421(b) residential → `edu-no-late-fee-cap-al` |
| 6 | application or screening fee near rental terms | 2 / 2 | Licensing → `edu-no-application-fee-cap-al` |
| 7 | (increase\|raise) … rent \| rent increase | 1 / 1 | Crop lien → `edu-no-rent-increase-notice-al` |
| 8 | landlord … (enter\|entry\|access) … (notice\|consent) | 2 / 1 | § 35-9A-303 only |
| 9 | carbon monoxide | 2 / 2 | None for dwellings → `edu-no-co-alarm-duty-al` |
| 10 | smoke (alarm\|detector)s? | 7 / 5 | Hotels only (§ 34-15-4) → `edu-no-smoke-alarm-duty-al` |
| 11 | \bradon\b | 0 | → `edu-no-radon-disclosure-al` |
| 12-13 | mold\|molds\|mildew; bed ?bugs? | 12 / 8; 0 | None → `edu-no-mold-bedbug-disclosure-al` |
| 14 | flood near rental terms | 4 / 4 | None → `edu-no-flood-disclosure-al` |
| 15 | clandestine\|methamphetamine lab (+ disclosure pattern) | 14 / 6; 0 | None → `edu-no-drug-lab-disclosure-al` |
| 16 | lead-based paint\|lead poisoning\|lead hazard | 30 / 5 | **Chapter 22-37A** → `edu-lead-hazards-al` |
| 17 | source of income\|housing choice voucher\|section 8 … | 125 / 117 (104) | None a housing protection → `edu-no-source-of-income-rule-al` |
| 18-19 | immigration/citizenship/alien near housing; harbor or conceal alien | 5 / 5; 1 | **Found: § 31-13-33** → `edu-immigration-rental-restriction-al` |
| 20 | electric vehicle near rental terms | 0 | → `edu-no-ev-charging-right-al` |
| 21 | rent receipts | 22 / 19 (4) | None → `edu-no-cash-receipt-duty-al` |
| 22 | holdover\|double rent\|at sufferance | 37 / 32 (3) | **§ 6-6-314, § 35-9-100** → `edu-holdover-remedies-al` |
| 23 | death … tenant … lease | 1 / 1 | UCC → `edu-no-tenant-death-termination-al` |
| 24 | renters' insurance | 2 / 2 | Insurance reporting only |
| 25 | firearms near lease terms | 2 / 2 | § 35-9A-421 only |
| 26 | flags near residence terms | 0 | Association flag rule found separately (§ 35-1-5.1, history search) |
| 27 | lockout\|rekey\|deadbolt\|change locks near tenant | 0 | No lock statute |
| 28 | police/911 … tenant … evict/penal | 0 | → `edu-no-police-call-protection-al` |
| 29-30 | typography near lease terms; separate from the lease | 11 / 9; 2 / 1 | §4 (instruction 57) |
| 31 | UETA scope (eviction\|rental agreement\|primary residence) | locator | **Found: § 8-1A-3(c)(2)b.** → `edu-electronic-notices-al` |
| 32 | returned/dishonored check … fee/charge | 2 / 2 | **§ 8-8-15** → `edu-dishonored-payment-remedies-al` |
| 33 | service/assistance/support animals | 101 / 23 | **§ 21-7-9; Chapter 24-8A** |
| 34 | discrimination … dwelling | 5 / 2 | § 24-8-4, § 24-8-7 |
| 35 | servicemember/active duty near lease | 12 / 6 | None a lease rule; **§ 31-12-2** read → `edu-servicemember-rights-al` |
| 36 | tow/remove vehicle near private property/lot | 3 / 3 | **§ 32-13-2** (read via chapter), § 11-67A-3, § 11-67B-3 → `edu-towing-al` |
| 37 | unclaimed near deposit/rent | 8 / 5 | **§ 35-12-72** → `edu-security-deposit-rules-al` |
| 38 | stigmatized/psychologically impacted | 3 / 3 | None |
| 39 | sex offender near landlord/lease/rent | 77 / 32 | **§ 13A-11-204** → Birmingham rows |
| 40 | condominium conversion | 5 / 4 | **§ 35-8A-412** → `edu-condo-conversion-notice-al` |
| 41 | foreclosure near tenant | 6 / 2 | None; receivership found by history search (§ 6-6-796) |
| 42 | submeter\|master meter | 2 / 1 | None residential |
| 43 | expunge/seal … eviction | 0 | → `edu-no-eviction-record-sealing-al` |
| 44 | move-in/inventory/checklist near tenant | 0 | → `edu-no-move-in-inspection-rule-al` |
| 45 | rent control\|controlling the amount of rent | 1 / 1 | **§ 11-80-8.1** → `edu-local-preemption-al` |
| 46 | ordinance/resolution near landlord or rental housing | 4 / 3 | § 35-9A-121 |
| 47 | sublet\|sublease | 81 / 45 (18) | None for dwellings beyond § 35-9-11 |
| 48 | abandon near tenant | 8 / 7 (1) | § 35-9A-423; Chapter 35-12A (manufactured homes) |
| 49 | confession of judgment | 14 / 12 | § 35-9A-163(a)(2) for leases |
| 50 | unconscionab | 43 / 18 | § 35-9A-143 for leases |
| 51 | nonresident near rent/lease/landlord | 11 / 11 | No rent withholding statute |
| 52 | medical cannabis near housing | 1 / 1 | None |
| 53 | trespass … order … leave | 0 | § 13A-7-1(3) read directly |
| 54-56 | pool; septic/well; sprinkler near rental terms | 0; 1; 5 / 3 | None for landlords |
| 57 | condemned/unfit … rent | 5 / 4 | Eminent domain only |
| 58 | drug-related nuisance | 47 / 11 | **§ 6-5-155.1 ff.** → `edu-drug-nuisance-al` |
| 59 | squatter\|unauthorized individual | 20 / 5 | **Chapter 35-9B** → `edu-unauthorized-occupant-removal-al` |
| 60 | fraudulent (sale or )lease | 6 / 4 | **§ 13A-9-22, § 13A-9-23** |
| 61 | domestic violence/stalking near housing | 9 / 7 (2) | None → `edu-no-dv-termination-al` |
| 62 | utility shutoff near tenant/landlord | 2 / 2 | § 35-9A-407, § 35-9A-427 |
| 63 | foreign adversary/principal near land | 1 / 1 | § 35-1-1.1 (no lease rule) |
| 64 | lien near household goods | 2 / 2 | § 35-9A-425 |
| 65 | attorney's fees near lease | 3 / 3 | § 35-9A-163, § 35-9A-426 (and a municipal lease) |
| 66 | waive … homestead\|exemption | 8 / 5 | **§ 6-10-120 to § 6-10-126** → `exemption-waiver-al`, `edu-exemption-waiver-al` |

**Targeted searches for the candidate-topic and backfill tables** (all 0 or none landlord-relevant unless stated): guarantor near lease (10, none residential); algorithm near rent (0); waterbed (11, boating); sexual near tenant or landlord (0); window guard (0); crime-free (0); association limits on tenants (0); key control (1, insurance); heat standard in degrees (0); home warranty (1, service agreements); holding or application deposit near rent (0); minor as eviction defendant (0); property tax near rent (0); translation near lease (0); postdated (1, UCC); dormancy charge (0); vacation rental (4, none landlord-tenant); homestead waiver (see #66); mandatory landlord eviction duty (0); firearms near rental housing (1, § 35-9A-421); vacant property (49, **§ 11-67C-1 ff.**); quiet enjoyment (7, conveyances); enters or remains unlawfully (12, **§ 13A-7-1**); seller disclosure (0); Poarch or Indian trust land (68, none on leases).

**Also found by history-line search** (every section whose history cites a 2023-2026 act and whose text uses landlord-tenant terms): Act 2024-237 (Chapter 35-9B; § 13A-7-7; § 13A-9-22), Act 2026-536 (§ 13A-9-22, § 13A-9-23, § 8-19J), Act 2024-380 (§ 6-6-796), Act 2022-228 (§ 35-1-5.1), Act 2025-453 (§ 31-13-3, § 31-13-13 repealed), Act 2026-545 (§ 24-1B-3 ff.), Act 2026-285 (§ 35-12-72).

---

## Decisions that need Taylor (short list)

None open. Decided 2026-09-28 and applied: 1 (keep the late-fee sentence in `default-by-tenant-al`), 2 (`holdover-rate-al`, `casualty-landlord-termination-al`), 3 (`sex-offender-statement-al`), 4 (`exemption-waiver-al`, optional), 5 (§15 on Form 401).

**Integrity:** 1,467 rows (1,405 + 62 new); AL 112 active (all VERIFIED); every other state's count unchanged (AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, VA 137, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row.

## 18. Sync note (Claude Code, 2026-09-28)

- Installed as delivered; no corrections needed. The cross-state prefix scan (no `Ala. Code` outside AL rows) was repeated at sync and passed, and no AL lease clause contains attorney-fee or collection-cost language.
- Statute spot-check, read directly from the official Code of Alabama through ALISON's code service: § 35-9A-201 (one month's cap with the pet/alteration/liability exceptions; 60-day refund or itemized list; forwarding address; 90-day forfeiture; double-deposit penalty), § 35-9A-303 (two days' notice; door posting; showings in the last four months only under a separately signed general notice), § 35-9A-421 (7 business days; misrepresentation not curable; no more than two cures in 12 months; the non-curable defaults), § 35-9A-163 (no attorney's-fee or collection-cost terms; the one-month-rent penalty) and § 35-9A-121 (the Act supersedes county and city landlord ordinances). All match the AL rows.
- Legal watch: `stateConfig.js` AL entry (135 sections, bare-number queries, eCFR 24 CFR 100.204 and 40 CFR 745.113, LegiScan-US 50 U.S.C. § 3955) and `legal-watch-al.yml` (Mondays 17:45 UTC), validated offline. The live dry-run and seed-baseline wait for LegiScan's October allowance.
