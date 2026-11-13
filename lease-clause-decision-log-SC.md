# South Carolina — lease-clause decision log (state #17)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12: S.C. Code Ann. Title 27 Chapter 40 read whole on the official scstatehouse.gov chapter page with every history line; Chapters 33, 35, 37 and 39 read whole; all 2025 and 2026 acts screened in full text; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: South Carolina Association of REALTORS® Form 410, 'South Carolina Residential Rental Agreement', 7 pages; edition not printed; copy uploaded to its host in 2021, so 2021 or earlier) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 67 scenarios, Claude-generated, AZ §18.1, GA §16 and NC §16 models plus South Carolina-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: exact-match regular-expression search of the full official Code, all 1,304 chapter pages, 58 searches incl. a control term; outside-title sections read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC) is closed. No re-audit of any completed state is planned. Targeted work on a specific row is welcome (a scalpel, not a hammer); this pass changed no other state's row except by adding an `SC` tag and an `SC:` note.

**Date:** 2026-09-28 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why).
**Scope:** South Carolina state law only. Municipal ordinances (Charleston, Columbia, Greenville, Myrtle Beach and others) out of scope, flagged where met, not resolved (instruction 20). Carved out and recorded, not researched: vacation rentals under 90 days (Vacation Rental Act, S.C. Code Ann. § 27-50-230) and transient accommodations (S.C. Code Ann. § 27-40-120(4)). Deprioritized: manufactured home park lots (Chapter 47 of Title 27), agricultural tenancies, distress for rent beyond its existence (Chapter 39 Article 3).
**Input CSV:** `lease-clauses.csv`, **1,186 rows, 16 columns**; active counts AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids, no blank status, no dangling `supersedes`, every row 16 fields, CRLF. No SC rows of any kind (no dormant row). Outputs folder was empty at start; nothing to delete (instruction 43).
**Output CSV:** `lease-clauses-SC-sync.csv`, **1,244 rows, 1,210 active. SC 110 active: 69 lease clauses, 41 education; all 110 VERIFIED.** Every other state's active count unchanged.

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **S.C. Code Ann. Title 27, Chapter 40 (Residential Landlord and Tenant Act), whole** (45 sections, S.C. Code Ann. § 27-40-10 to S.C. Code Ann. § 27-40-940), verbatim from the official chapter page on scstatehouse.gov in the built-in browser, with every history line. **Also whole:** Chapter 33 (Landlord and Tenant Generally), Chapter 35 (Leasehold Estates), Chapter 37 (Ejectment), Chapter 39 (Rent). **2026 acts read in full (ratified text):** Act No. 184 (H.3569, domestic violence termination, new S.C. Code Ann. § 27-40-350), Act No. 214 (H.4270, eviction record removal, new S.C. Code Ann. § 30-2-60, effective 2027-01-01), Act No. 252 (H.3387, unlawful occupants, new Chapter 37 Article 3, S.C. Code Ann. § 27-40-800 rewritten, new S.C. Code Ann. § 16-11-790). **Section-open outside Title 27 Chapter 40:** S.C. Code Ann. §§ 5-25-1310 to 5-25-1370, 8-21-1010(9), 12-8-540, 12-36-920 (part), 15-67-610 to 15-67-630, 15-67-760, 15-67-770, 16-9-460 (part), 16-11-620 (part), 16-25-10 (part), 20-4-20, 23-9-155, 25-1-4010 to 25-1-4080, 26-6-30, 27-1-60, 27-31-420 to 27-31-440, 27-50-90, 27-50-230 (part), 31-21-40, 31-21-70, 34-11-70, 40-57-136 (part), 43-33-20, 43-33-70, 43-33-530, 43-33-560, 43-33-570, 44-53-380 (part), 44-53-1430, 47-3-920, 47-3-980, 56-5-2525 (part), 58-37-50(H). **Acts screened in full text:** every 2025 act (Act Nos. 1-94) and every 2026 act (Act Nos. 95-274); 2024 act titles screened. |
| Step 1 — tag first | **Done.** 52 shared rows tagged SC (§2.1). 9 bases not tagged: SC override or variant instead (§2.2). Every other state-specific row screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new SC rows | 17 SC lease clauses and 41 education rows (§3). |
| Instruction 24 families | **Both closed:** `security-deposit-return-sc`; `assistance-animal-accommodation-sc` (override; S.C. Code Ann. § 43-33-70(d) has no direct-threat limit). |
| Instruction 33 | **Checked.** South Carolina's no-cure routes are breaches that cannot be remedied (S.C. Code Ann. § 27-40-710(A)) and illegal activity (S.C. Code Ann. § 27-40-540, reached by S.C. Code Ann. § 27-40-710(B)); the shared carve-out preserves both. The shared `early-termination` was not tagged because its 10-day cure is shorter than the statutory 14 days. |
| Instruction 44 | **Checked.** No South Carolina notice statute makes a lease-designated delivery method mandatory. |
| Instruction 47 | **Hit.** The UETA does not apply to default, eviction or cure notices under a rental agreement for a primary residence (S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)); `edu-electronic-notices-sc`. |
| Dormant row | None existed. |
| Named-topic checklist | **Done.** SC column in all 10 state-column tables (69 rows, no blank cell); SC answers appended to the 61-row gap-discovery backfill table; 14 new South Carolina topics; candidate-topic table 234 refs (164 answered, 70 not located). Instructions 48-50 added (lease-as-notice reconciliation; penalty states and savings sentences; compilation currency statement). |
| Layout rules (instruction 28) | **Two bold/conspicuous lease rules** (S.C. Code Ann. § 27-37-10(B), § 27-40-530(b)(2)), one timing rule and five omission sanctions (§4). |
| Proof-of-absence | **Run** on the full official Code (§17): 17 topics confirmed absent code-wide, each with its own row. |
| Kickoff leads | All resolved (§12). None was wrong; "24 hours' notice" holds but has two statutory exceptions, and three 2026 acts not in the online Code changed the law. |
| Open for Taylor | **None.** Decisions 1-4 answered 2026-09-28 and applied (§6). Taylor found no copy of Form 410 newer than the 2021 upload, so §15 stands on it. |

## 1. Process notes

### 1.1 Source and currency
- **Official source.** Every Title 27 section was read on the official Code pages at scstatehouse.gov (chapter pages print each section's HISTORY line and Code Commissioner's and editor's notes). No host copy (Justia, Casetext) was used for any row. The Code pages are "Unannotated".
- **Currency.** The Code page states: "The South Carolina Code on the General Assembly's website is now current through the 2025 Session of the General Assembly." Chapter 40's newest history-line entries are 1999 Act No. 59 (§ 27-40-710) and 1999 Act No. 55 (§ 27-40-800). **Instruction 35 applies:** the compilation does not show 2026 law, so every act of 2026 (Act Nos. 95-274, from the Legislature's own act list) was fetched and its full text searched for "27-40-", "27-37-", "27-39-", landlord, tenant(s), "rental agreement", "residential lease", lessee, eviction and ejectment. The same was done for all 94 acts of 2025 to confirm the compilation (no 2025 act amends Chapter 40). **Hits that change landlord-tenant law, all 2026:**
  - **Act No. 184** (H.3569), signed 2026-05-18, effective on approval: new S.C. Code Ann. § 27-40-350 (DV termination) and S.C. Code Ann. § 27-40-210(19)-(20).
  - **Act No. 252** (H.3387), signed 2026-06-30, effective on approval: new Chapter 37 Article 3 (S.C. Code Ann. § 27-37-200 to S.C. Code Ann. § 27-37-350, ex parte removal of unlawful occupants); Chapter 37 retitled; S.C. Code Ann. § 27-40-800 rewritten (no stay of ejectment on appeal except on the tenant's rent affidavit); new S.C. Code Ann. § 16-11-790; S.C. Code Ann. § 45-2-65 (RV parks).
  - **Act No. 214** (H.4270), signed 2026-05-19, **effective 2027-01-01** (instruction 34): new S.C. Code Ann. § 30-2-60 (eviction records removed from public indexes after seven years).
  - Minor: Act No. 155 (magistrate landlord-proceeding fee $20 to $40, effective 2027-01-01); Act No. 233 (housing authority representatives in magistrate court); Act No. 146 (DHEC restructuring renames agencies across Title 44; not traced).
  - 2025 Act No. 41 (Energy Security Act) touched S.C. Code Ann. § 58-37-50; the section's current text (meter conservation charge notice to tenants) was read in the compilation.
- **Special sessions:** the act list is numbered continuously for the 2025-2026 session; no extra-session acts appear.
- **Instruction 45:** statute text came from the browser, not the fetch tool; the fetch tool was used only to outline the real lease (§15).

### 1.2 How the text was obtained
- The shell cannot reach scstatehouse.gov (proxy CONNECT refused). Taylor's built-in browser could; site access was granted "for this site" on request. Chapter pages, act lists and ratified act texts were read through in-page scripts.
- **Full-code search.** All 1,304 chapter pages listed on the 63 title pages were loaded into the browser page (49.3 million characters, 0 fetch errors) and searched with exact regular expressions, each hit mapped to its section header. Control term 'zqxvbnmwt' returned 0; 'security deposit' 34 hits in 26 sections; 'carbon monoxide' 6 hits in 4 sections. This did the proof-of-absence and cross-title work directly, which is why **research mode was not needed**.
- No section needed a paste from Taylor (§5a.2 never triggered).

### 1.3 Section-open vs recall (instruction 22)
Every row was drafted with its section text in view in this session (browser reads are in the session record). The recall subset is empty. **No case law is relied on**; where South Carolina law turns on case law (penalty test for late fees and holdover rates, how Chapter 35's double-rent holdover sections interact with the Act, the reach of the Guide Dog article's misrepresentation fine to housing, the validity note on the DV "household member" definitions), the row says so (instruction 16).

## 2. Step 1 — tag first

### 2.1 Tagged SC as written (52)
`rent-payment`, `late-fee`, `returned-payments`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided` (base), `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access`, `default-by-tenant`, `surrender-end-of-term`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `rental-application-accuracy`, and the variants `holdover-ca`, `tenant-forward-proceedings-ca`, `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `early-termination-ks`.

Every tagged row has an `SC:` note naming the controlling section. The ones that matter:
- **`default-by-tenant` (kept, decision 2).** The fee sentence is self-limited; South Carolina gives landlords fees only with an attorney and wilful noncompliance or nonpayment not in good faith (S.C. Code Ann. § 27-40-710(C)), and after termination (S.C. Code Ann. § 27-40-750); no reciprocity or bold-text rule (instruction 32, contrast NC and NJ). Its "after receiving written notice" for nonpayment is reconciled with the lease-notice route by `nonpayment-notice-sc`. Its sentence that an unpaid late fee alone is not grounds gives up a small right, because late charges are "rent" (S.C. Code Ann. § 27-40-210(11)); Taylor chose to keep it.
- **`early-termination-ks` instead of `early-termination`.** The base lets the landlord terminate after a 10-day cure; South Carolina gives 14 days to cure a remediable breach (S.C. Code Ann. § 27-40-710(A)), a right the lease may not waive (S.C. Code Ann. § 27-40-330(a)(1)), and knowingly using a prohibited term carries a money penalty (S.C. Code Ann. § 27-40-330(b)). The KS variant defers to the default provisions. The fee is protected as bona fide liquidated damages for lost rent on premature termination (S.C. Code Ann. § 27-40-330(c)).
- **Variants over bases (parking, storage, renter's insurance).** A South Carolina lease may not exculpate or limit the landlord's liability arising under law, or make the tenant indemnify it (S.C. Code Ann. § 27-40-330(a)(3)); the bases' blanket "Landlord is not liable" does both.
- **`holdover-ca` instead of `holdover` (K.3).** South Carolina's holdover recovery is statutory and lump-sum, not a per-day "maximum permitted by law": fees if not in good faith; if wilful, the greater of three months' periodic rent or twice actual damages (S.C. Code Ann. § 27-40-770(c)).
- **`notices` and `electronic-signatures`.** Tagged; the UETA excludes default, cure and eviction notices (S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)); `notices` designates no electronic method.
- **`returned-payments`.** $30 service-charge cap for dishonored checks, drafts and other written orders (S.C. Code Ann. § 34-11-70(a)(3)) gives "maximum permitted by law" a referent; no statute for failed ACH or card payments.
- **`landlords-access`.** Matches the 24-hour rule (S.C. Code Ann. § 27-40-530(c)); it does not claim the no-notice periodic-services entry, which needs conspicuous lease text (`periodic-services-entry-sc`).
- **`common-area-use`.** Its savings sentence covers the flag statute (S.C. Code Ann. § 27-1-60).

### 2.2 Not tagged — SC override or variant instead (9 bases)

| Base | Instead | Why the base fails in South Carolina |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-sc` | Instruction 24. 30 days after the later of termination plus possession, or the tenant's demand; written forwarding address; treble damages (S.C. Code Ann. § 27-40-410) |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-sc` | Instruction 24. S.C. Code Ann. § 43-33-70(d) gives an assistance dog full and equal housing access with no direct-threat limit; ESA questions and documentation rule in S.C. Code Ann. § 31-21-70(N) |
| `possession-delay` | `possession-delay-sc` | The base makes the tenant wait 30 days; the statute allows termination on 5 days' notice (S.C. Code Ann. § 27-40-620) |
| `pet-policy` | `pet-policy-sc` | Unqualified indemnity and "remove a pet, without liability" (S.C. Code Ann. §§ 27-40-330(a)(3), 27-40-530(d)) |
| `early-termination` | `early-termination-ks` (tagged) | 10-day cure vs 14 (S.C. Code Ann. § 27-40-710(A)) |
| `holdover` | `holdover-ca` (tagged) | K.3 |
| `parking`, `storage-space`, `tenants-property-insurance` | the `-ks-oh-ca` variants (tagged) | Exculpation (S.C. Code Ann. § 27-40-330(a)(3)) |

**L.2 exhaustive generic-clause audit (run on the output CSV):** all 65 generic lease clauses are tagged SC or superseded by an SC-tagged row, except four variants SC does not need because it takes the base: `default-by-tenant-ks-ne`, `services-utilities-provided-ks-oh`, `surrender-end-of-term-mn-nd`, `surrender-end-of-term-ks-ne`.

### 2.3 Other states' specific rows screened, not tagged
All 310 other single-state active lease clauses were listed and screened. Beyond `early-termination-ks` (tagged), none applies as written. Closest analogues, and what SC took instead:
- **URLTA-family rows.** KS, NE and AZ rows share South Carolina's URLTA structure but carry their own numbers: `possession-delay-ks`/`-ne`/`-az` (1.5x, 3x, 2x figures) → `possession-delay-sc` (3 months or 2x); `fire-casualty-termination-ks`, `casualty-termination-az` (5 and 14 days) → `casualty-termination-sc` (7 days); `abandoned-property-ks` (10 days' default, newspaper sale) → `abandoned-property-sc` (15 days, $500 disposal).
- **`identity-change-liability-ks`.** Keeps the seller liable for the deposit in all cases; South Carolina releases the seller once the deposit is transferred and the tenant notified (S.C. Code Ann. § 27-40-450(a)). Not tagged; the rule is in `security-deposit-return-sc` and `edu-sale-of-rented-property-sc`.
- **`extended-absence-notice-ks`/`-ne`.** The South Carolina Act has no absence-notice section (Chapter 40 read whole).
- **Remaining rows.** DV rows → `dv-lease-termination-sc` (South Carolina's qualifying incident is much narrower). Smoke rows → `smoke-detectors-sc`. Disclosure rows → `landlord-disclosure-sc`. `tenant-repair-agreement-nv`/`-tx` → `tenant-repair-agreement-sc`. `holdover-rate-ga`/`-nc` → `holdover-rate-sc`. `electronic-notice-consent-tx` and `electronic-notice-addendum-fl` not copied (S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)). `flag-display-oh`/`-nv` not copied (savings sentence in `common-area-use`). Every remaining state-specific row encodes its own state's statute.

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type` or `content_type` changed. Each new clause was checked against the library by `topic_key`; none could be merged into a multi-state row without blurring a real divergence (instruction 26, priority rule). No two SC lease clauses share a `topic_key` without a supersedes link (programmatic check).

### 3.2 New SC lease clauses (17)

| Row | Rule | Rests on | Opt-in? |
|---|---|---|---|
| `security-deposit-return-sc` | REQUIRED | S.C. Code Ann. §§ 27-40-410, 27-40-450 | — |
| `security-deposit-standards-sc` | CONDITIONAL | S.C. Code Ann. § 27-40-410(c) | More than four adjoining units with differing standards |
| `landlord-disclosure-sc` | REQUIRED | S.C. Code Ann. § 27-40-420 | — |
| `nonpayment-notice-sc` | RECOMMENDED | S.C. Code Ann. §§ 27-40-710(B), 27-37-10(B) | **Yes**: exists only in the lease; recommended for every SC lease |
| `possession-delay-sc` | RECOMMENDED | S.C. Code Ann. § 27-40-620 | — |
| `pet-policy-sc` | RECOMMENDED | S.C. Code Ann. §§ 27-40-330, 27-40-530(d) | — |
| `assistance-animal-accommodation-sc` | REQUIRED | S.C. Code Ann. §§ 43-33-70, 31-21-70(G), (K), (N) | — |
| `dv-lease-termination-sc` | RECOMMENDED | S.C. Code Ann. § 27-40-350 (2026 Act No. 184) | — |
| `casualty-termination-sc` | RECOMMENDED | S.C. Code Ann. § 27-40-650 | — |
| `casualty-landlord-termination-sc` | CONDITIONAL | contract; S.C. Code Ann. § 27-40-310(a) | **Yes** (decision 3) |
| `holdover-rate-sc` | CONDITIONAL | contract; text identical to GA and NC | **Yes** (decision 1) |
| `periodic-services-entry-sc` | CONDITIONAL | S.C. Code Ann. § 27-40-530(b)(2) | **Yes** (conspicuous lease text required) |
| `tenant-repair-agreement-sc` | CONDITIONAL | S.C. Code Ann. § 27-40-440(c)-(d) | **Yes** |
| `appliances-excluded-sc` | CONDITIONAL | S.C. Code Ann. § 27-40-440(a)(5) | **Yes** |
| `smoke-detectors-sc` | RECOMMENDED | S.C. Code Ann. §§ 5-25-1310 to 5-25-1370, 23-9-155 | — |
| `meter-conservation-charge-notice-sc` | CONDITIONAL | S.C. Code Ann. § 58-37-50(H)(3) | If a charge is on file |
| `abandoned-property-sc` | RECOMMENDED | S.C. Code Ann. § 27-40-730 | — |

**Opt-in landlord rights (instruction 30).** Rights that exist only if the lease invokes them, each offered as a row: the lease-contained nonpayment notice (S.C. Code Ann. § 27-40-710(B)); no-notice periodic-services entry (S.C. Code Ann. § 27-40-530(b)(2)); tenant-performed repairs by written agreement (S.C. Code Ann. § 27-40-440(c)-(d)); appliance exclusion (S.C. Code Ann. § 27-40-440(a)(5)); utilities shifted by written agreement (S.C. Code Ann. § 27-33-50(A); `utilities-paid-by-landlord`); sublease only with written consent (S.C. Code Ann. § 27-35-60; `no-sublet-assign`); liquidated damages for lost rent on early termination (S.C. Code Ann. § 27-40-330(c); `early-termination-ks`). Contract-only additions offered on Taylor's decisions: holdover rate, landlord casualty termination. **Not offered:** a contractual lien on household goods (void, S.C. Code Ann. § 27-40-740(a)).

### 3.3 New SC education rows (41)
- **Deposits and money:** `edu-security-deposit-rules-sc`, `edu-dishonored-payment-remedies-sc`, `edu-nonresident-landlord-withholding-sc`, `edu-utilities-sc`.
- **Duties and rules:** `edu-landlord-repair-duties-sc`, `edu-rules-and-regulations-sc`, `edu-lead-hazards-sc`, `edu-prohibited-lease-terms-sc`.
- **Ending the tenancy and eviction:** `edu-eviction-process-sc`, `edu-self-help-eviction-sc` (PROHIBITED), `edu-retaliation-sc`, `edu-periodic-tenancy-notice-sc`, `edu-holdover-remedies-sc`, `edu-unauthorized-occupant-removal-sc`, `edu-eviction-record-removal-sc`, `edu-sale-of-rented-property-sc`, `edu-condo-conversion-notice-sc`.
- **Rights and compliance:** `edu-servicemember-rights-sc`, `edu-fair-housing-sc`, `edu-service-animal-law-sc`, `edu-local-preemption-sc`, `edu-electronic-notices-sc`, `edu-towing-sc`, `edu-scope-exclusions-sc`.
- **17 confirmed absences, each with its own row:** deposit cap, deposit interest, late-fee cap, application-fee cap, rent-increase notice, source of income, immigration inquiry, radon, mold and bed bugs, CO alarms, flood disclosure, EV charging, cash receipts (with the eviction-proceeding receipt exception), right to call police, tenant death, move-in inspection, drug-lab disclosure.

## 4. Layout and placement requirements (instruction 28)

**Code-wide typography search** (bold, boldface, bold type, capital letters, conspicuous, underlin*, point type, separate document, separately signed, within 200 characters of lease, tenant, lessee or rental agreement): 21 hits in 18 sections. Landlord-tenant hits: S.C. Code Ann. § 27-37-10(B), § 27-40-530(b)(2), § 27-40-710(B), § 27-40-410(c) (posting), § 27-37-30 (service posting). The rest are motor-vehicle leases, consumer credit, insurance, storage units and utilities.

| Rule | Requirement | Where it lives |
|---|---|---|
| S.C. Code Ann. § 27-37-10(B) | The lease must specify "in **bold conspicuous type**" that nonpayment within five days of the due date is notice; the S.C. Code Ann. § 27-40-710(B) text satisfies it | `nonpayment-notice-sc` (**Addendum M.12 builder gap: bold**) |
| S.C. Code Ann. § 27-40-710(B) | The notice must be "contained in **conspicuous language** in a written rental agreement"; statutory wording supplied, with an all-capitals heading | `nonpayment-notice-sc` (verbatim; heading capitals are the statute's) |
| S.C. Code Ann. § 27-40-530(b)(2) | The periodic-services entry right must be "**conspicuously** set forth in writing in the rental agreement" | `periodic-services-entry-sc` (**M.12 gap: conspicuous/bold**) |
| S.C. Code Ann. § 27-40-410(c) | Deposit standards posted, or given to each prospective tenant, **before the rental agreement is consummated** | `security-deposit-standards-sc` (timing) |
| S.C. Code Ann. § 27-40-420(a) | Owner or agent disclosure **in writing at or before commencement** | `landlord-disclosure-sc` |

**Omission sanctions that forfeit money** (second half of instruction 28):
- deposit or prepaid rent not returned with the itemized notice: three times the amount wrongfully withheld plus fees (S.C. Code Ann. § 27-40-410(b));
- no deposit-standards statement where required: the excess over the lowest comparable deposit cannot be used for damages (S.C. Code Ann. § 27-40-410(c));
- deliberate use of a lease containing known-prohibited terms: actual damages plus up to the deposit amount and fees, or up to three months' rent if malicious (S.C. Code Ann. § 27-40-330(b));
- no meter-conservation-charge notice: the tenant deducts the charge from rent for up to half the term (S.C. Code Ann. § 58-37-50(H)(3));
- no lease nonpayment notice: a separate written notice is needed once per lease term before filing (S.C. Code Ann. § 27-40-710(B)); no bold notice, no S.C. Code Ann. § 27-37-10(B) shortcut.

**Outside the lease** (for the builder's notice workflows): the eviction notice must clearly tell the tenant that belongings put on the street will be removed after 48 hours (S.C. Code Ann. § 27-40-710(D)); a bounced-check demand in the statutory form by certified mail (S.C. Code Ann. § 34-11-70(a)(1)); default and eviction notices on paper (S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)).

These add to the **Addendum M.12** case for a `formatting` field. South Carolina adds no new value to it: "bold" and "conspicuous" are already there (TX, NJ).

## 5. Dormant row (instruction 21)
None. No SC row existed in the library, active or dormant (kickoff confirmed by query).

## 6. Decisions for Taylor

Asked in this chat on 2026-09-28; answered the same day and applied.

| # | Question | Taylor's answer | What changed |
|---|---|---|---|
| 1 | Offer an opt-in daily holdover rate for SC, like GA and NC? | Yes, same as GA/NC | New `holdover-rate-sc` (CONDITIONAL), text identical to `holdover-rate-ga`; notes record that S.C. Code Ann. § 27-40-770(c) is a separate statutory remedy |
| 2 | Keep the shared `default-by-tenant` although its late-fee sentence gives up the right to evict over an unpaid late fee (late charges are rent in SC)? | Keep the shared clause | Tagged as written; SC note records the decision |
| 3 | Add an opt-in landlord right to end the lease after a fire or casualty (the statute gives only the tenant rights)? | Yes | New `casualty-landlord-termination-sc` (CONDITIONAL), kept separate from `casualty-termination-sc` so the statutory tenant rights stay intact |
| 4 | Use the SC REALTORS Form 410 copy on esign.com (edition not printed) for the real-lease comparison? | Asked for the source to look for a newer copy; reported back that the only date he can find is the 2021 upload, nothing more recent | §15 uses the 2021-or-earlier copy, with the limit recorded. It still tests current law: Chapter 40's newest amendment before 2026 is from 1999, so a 2021 form reflects the same Act; the only later changes (2026 Acts No. 184, 214, 252) are covered by rows from the statute walk and are marked as post-form in §15 |

## 7. Open items and read list (none blocking)

| Item | What would close it |
|---|---|
| Real lease | Optional: if a post-2021 SC REALTORS Form 410 surfaces (members-only), compare it in this chat; not needed for completion (decision 4) |
| L.5 dependencies not read | "Assistance dog" undefined in S.C. Code Ann. § 43-33-70 (Title 43 Chapter 33 Article 1 has no definitions section located); Title 20 Chapter 4 and Title 16 Chapter 25 read only for definitions; S.C. Code Ann. § 12-36-920 read in part; Chapter 47 (manufactured home parks) and the Vacation Rental Act not read beyond scope sections; State Fire Marshal detector regulations (S.C. Code Ann. § 23-9-155) |
| Agency rules (instruction 16) | Fire Marshal regulations; DHEC/Department of Public Health lead rules; PSC utility disconnection rules; Real Estate Commission trust-account rules |
| Federal (instruction 16) | SCRA (50 U.S.C. § 3955); PTFA; VAWA (34 U.S.C. § 12491); FHA (42 U.S.C. § 3604); lead (42 U.S.C. § 4852d, 24 CFR Part 35, 40 CFR Part 745); 28 C.F.R. § 36.302; OTARD antenna rule (47 CFR § 1.4000, from the real lease) — cited, not read |
| Case law, not relied on | Penalty test for late fees, holdover rates and early-termination fees; interplay of S.C. Code Ann. §§ 27-35-170, 27-35-180 with S.C. Code Ann. § 27-40-770(c); reach of S.C. Code Ann. § 47-3-980 to housing; Jane Doe v. State (2017) validity note on "household member" |
| 2026 Act No. 146 | DHEC restructuring renamed agencies across Title 44; not traced into S.C. Code Ann. § 44-53-1430 |
| Local ordinances | Charleston, Columbia, Greenville, Myrtle Beach and others: registration, inspection, towing, short-term rentals — flagged, not resolved (instruction 20) |

## 8. Integrity and screens
- **CSV:** 1,244 rows; every row has 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair, all states); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF, as in the input; unchanged rows are byte-identical (round-trip check). 52 existing rows changed: `states` (+SC), an appended ' | SC: ...' note, `last_checked` 2026-09-28. For every changed row, all other fields and the pre-existing notes are unchanged (checked programmatically).
- **Counts:** SC 0 → 110 (69 lease clauses, 41 education; all VERIFIED). Every other state's active count unchanged: AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106.
- **Instruction 37 (citation inventory):** Chapter 40's 45 section numbers (plus S.C. Code Ann. § 27-40-350 from 2026 Act No. 184) were extracted from the official chapter page and diffed against the `bodyText` and SC notes of every active SC row. The first diff found 8 uncited sections: §§ 27-40-10, -20, -30, -40 (general provisions), -50 (duty to mitigate), -220 (good faith), -320 (unsigned agreements), -780 (access remedies). Each was added to the notes of the row it bears on (`default-by-tenant`, `landlords-access`, `electronic-signatures`, `edu-prohibited-lease-terms-sc`, `edu-scope-exclusions-sc`). Re-run on the final CSV: no uncited section. Chapters 33, 35, 37 and 39 are cited where relevant (27 sections).
- **Instruction 11 (citation screen):** every South Carolina cite in SC rows was read section-open in this session, or read by title as a search hit and labelled so, or labelled "not read" (§7).
- **Instruction 16 (non-statute citations):** federal lead, SCRA, PTFA, VAWA, FHA, 28 C.F.R. § 36.302, OTARD; NFPA 72E and 74 (frozen editions in S.C. Code Ann. § 5-25-1310); Fire Marshal regulations. No S.C. Code Ann. Regs. rule and no case law is relied on.
- **Instructions 19/38:** every row id named in this log, in the SC checklist cells and sections, and in SC row notes exists in the output CSV. The only ids named that are not SC-tagged are the deliberate "not tagged" references (`security-deposit-return`, `assistance-animal-accommodation`, `possession-delay`, `pet-policy`, `early-termination`, `holdover`, `parking`, `storage-space`, `tenants-property-insurance`, and other states' comparison rows).
- **Instruction 14:** every SC addition to a shared row's `notes` is delimited ' | SC: ...'.
- **Kickoff citation format:** every South Carolina code cite in SC row text is written `S.C. Code Ann. § 27-40-410` style (prefix, section sign, hyphenated title-chapter-section), including cites outside Title 27 (e.g. `S.C. Code Ann. § 58-37-50(H)(3)`); built with one helper, not a find-and-replace. Act references ("2026 Act No. 184") are left unprefixed so the legal-watch tripwire does not read them as code sections. **Cross-state check:** no row outside SC carries the `S.C. Code Ann.` prefix, and no SC note segment prefixes another state's section (programmatic scan; the NC-pass defect did not recur).

## 9. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every change to an existing shared row is an added `SC` tag with an `SC:` note, a states-only change under §5a.1.

### 9.1 Flags for Claude Code
**None.** No specific defect was found in another state's row. For information only: a search result showed NC REALTORS posting "July 2026 Changes to RESIDENTIAL RENTAL CONTRACT" (Form 410-T); the NC log's §15 compared the 7/2025 revision. Nothing in NC's rows is known to be affected; not a flag.

### Vouches given
- **2026-10-04:** `default-by-tenant` (MN's proposal), supported for SC under Taylor's settled notice decision; reasoning in "Circle-back checks (SOP 1.50)" at the end of this log.

## 10. Findings worth Taylor's attention
1. **The online Code is a session behind, and 2026 changed three things.** A new DV termination right (S.C. Code Ann. § 27-40-350), a fast squatter-removal procedure plus a rewritten appeal-stay rule (2026 Act No. 252), and eviction-record removal from 2027 (S.C. Code Ann. § 30-2-60). None is on the Code website yet.
2. **One lease paragraph saves every nonpayment notice.** South Carolina lets the lease itself be the 5-day nonpayment notice, in statutory words and bold conspicuous type (S.C. Code Ann. §§ 27-40-710(B), 27-37-10(B)). That is `nonpayment-notice-sc`, and the bold needs a builder formatting field (M.12).
3. **South Carolina penalizes knowingly using a bad lease term.** Waivers, exculpation, indemnity for the landlord's own liability and confession of judgment are void, and a landlord who deliberately uses them owes damages plus up to the deposit, or three months' rent if malicious (S.C. Code Ann. § 27-40-330). That is why the shared pet, parking, storage, insurance and early-termination clauses were not tagged.
4. **No deposit cap, no interest, no escrow**, but a 30-day itemized return and treble damages (S.C. Code Ann. § 27-40-410).
5. **The DV right is narrow.** It applies only when the abuser is also a tenant on the same lease, with a protective order or conviction.
6. **Entry is 24 hours' notice with two statutory exceptions**, one of which (regular filter or pest service) exists only if the lease says so conspicuously.
7. **Assistance dogs get a flat statutory right with no extra charge; ESAs get a two-question, documentation-based process** written into state law in 2019 (S.C. Code Ann. §§ 43-33-70(d), 31-21-70(N)).
8. **Holdover can cost a wilful tenant three months' rent or double damages** by statute (S.C. Code Ann. § 27-40-770(c)).
9. **Outside Title 27:** smoke detectors in rental one- and two-family homes (Title 5), the meter-conservation-charge notice (Title 58), and income-tax withholding on rent paid to nonresident owners of more than four units (Title 12).

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-SC-sync.csv` | 1,244 rows, 1,210 active; SC 110 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-SC.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | SC column in all 10 state-column tables; SC answers in the backfill table; South Carolina sections at the end; instructions 48-50 |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| Act scope, exclusions, prohibited-terms section | **Confirmed:** nine exclusions (S.C. Code Ann. § 27-40-120, incl. transient accommodations and shelters); prohibited provisions with a money penalty (S.C. Code Ann. § 27-40-330); also S.C. Code Ann. §§ 27-40-340, 27-40-740(a), 27-1-60 |
| Deposits (§ 27-40-410): deadline, itemization, penalties, cap ("reportedly none") | **Confirmed:** 30 days after the later of termination plus possession, or demand; itemized; written forwarding address; treble plus fees; **no cap** (confirmed absent code-wide); differing-standards rule for more than four adjoining units |
| Owner and agent disclosure; maintenance duties; entry ("reportedly 24 hours") | **Confirmed:** S.C. Code Ann. §§ 27-40-420, 27-40-440, 27-40-510; entry 24 hours at reasonable times, **plus** no-notice emergency entry, 9-6 periodic services (lease must say so conspicuously) and 8-8 tenant-requested services (S.C. Code Ann. § 27-40-530) |
| Late fees and other fees; what a lease must say | **No cap or grace statute** (confirmed absent); late charges are part of "rent" (S.C. Code Ann. § 27-40-210(11)); $30 dishonored-check charge (S.C. Code Ann. § 34-11-70); attorney's fees only with counsel and wilful or bad-faith default (S.C. Code Ann. § 27-40-710(C)) |
| Nonpayment notice; can a lease term serve as it? | **Yes.** 5 days; a lease clause in the statutory words, bold and conspicuous, is the notice for the whole tenancy incl. month-to-month (S.C. Code Ann. §§ 27-40-710(B), 27-37-10(B)) |
| Periodic notice, holdover, abandoned property | **Confirmed:** 7/30 days (S.C. Code Ann. § 27-40-770(a)-(b)); holdover remedies (S.C. Code Ann. § 27-40-770(c); older double-rent sections in Chapter 35); abandonment 15 days, $500 disposal, else Chapter 37 (S.C. Code Ann. § 27-40-730) |
| Retaliation, self-help, magistrate ejectment (Chapter 37) | **Confirmed:** S.C. Code Ann. § 27-40-910; §§ 27-40-660, 27-40-760; Chapter 37 (rule to vacate or show cause, 10 days; writ, 24 hours). **Changed 2026:** appeal stay only on a rent affidavit (2026 Act No. 252) |
| Preemption of local rent control | **Confirmed, narrowly:** only the amount of rent, for private single-family, multi-unit residential and commercial property (S.C. Code Ann. § 27-39-60). Nothing else is preempted |
| 2024-2026 acts | **2026 Act No. 184** (DV termination), **No. 252** (unlawful occupants; appeal stays; new crimes), **No. 214** (eviction records, 2027). No 2024 or 2025 act amends Chapter 40 |
| Not in the leads | Smoke detectors (Title 5); meter conservation charge notice (Title 58); nonresident rent withholding (Title 12); condominium conversion (Chapter 31 of Title 27); US flag right (S.C. Code Ann. § 27-1-60); UETA exclusion; SC Servicemembers Civil Relief Act (Title 25); ESA questions in the Fair Housing Law (2019) |

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** South Carolina Association of REALTORS®, **Form 410, "South Carolina Residential Rental Agreement"**, 7 pages (footer "Form 410 ... PAGE x OF 7"); **no edition or revision date printed on this copy; Taylor checked and the file was uploaded to its host in 2021, with nothing more recent available, so the edition is 2021 or earlier.** **Where from:** a copy hosted at `esign.com/wp-content/uploads/South-Carolina-Association-of-Realtors-Residential-Lease-Agreement.pdf`. **Why it qualifies, and its limits:** the publisher is the state Realtors association (instruction 36, option (a)), and the form carries SCR's own reproduction notice; but the host is a form site, not SCR, and the edition is unknown (instruction 41: provenance and content can come apart). The current edition is distributed to SCR members only; Taylor looked for a newer copy and found none (decision 4). **Why a 2021-or-earlier form is still a valid test:** Chapter 40's last amendment before 2026 is from 1999, so the form was written against the Act as it stands today, except for the three 2026 acts (DV termination, unlawful occupants and appeal stays, eviction-record removal), which no pre-2026 form could reflect and which the statute walk covered. **Method:** mapped by topic from a fetch-tool outline (no text reproduced; copyrighted). The lease is a lead only (instruction 6); every point below rests on primary text read for this pass.

### 15.1 Provision map

| Lease provision (by topic) | SC library coverage | Result |
|---|---|---|
| ¶1-3 Governing law (the Act); property; term; return with keys | `governing-law`, `surrender-end-of-term` | Covered |
| ¶4 Lead-based paint | `lead-based-paint` | Covered |
| ¶5 Application accuracy; false statement allows termination and damages | `rental-application-accuracy` | Covered |
| ¶6 Rent due on the 1st; five-day period before eviction; late fees; proration | `rent-payment`, `late-fee`, `nonpayment-notice-sc` | Covered (the five-day structure is S.C. Code Ann. § 27-40-710(B); library row found in the statute walk) |
| ¶7 Occupants | `permitted-occupants` | Covered |
| ¶8 Returned-check fee; certified funds after repeats | `returned-payments`, `edu-dishonored-payment-remedies-sc` | Covered ($30 cap, S.C. Code Ann. § 34-11-70(a)(3)) |
| ¶9 Renewal; 30-day notice; month-to-month | `holdover-ca`, `edu-periodic-tenancy-notice-sc` | Covered |
| ¶10 Subletting; guest limit | `no-sublet-assign`, `guest-policy-day-limit` | Covered |
| ¶11 Utilities; tenant pays connection fees | `utilities-responsibility`, `edu-utilities-sc` | Covered (S.C. Code Ann. § 27-33-50) |
| ¶12 Tenant obligations incl. yard work; report problems in 5 days; no rent deductions for repairs | `tenant-maintenance`, `landscaping-irrigation`, `edu-landlord-repair-duties-sc` | Covered. **Divergence:** a blanket "no deductions" cannot displace the essential-services procure-and-deduct remedy (S.C. Code Ann. §§ 27-40-630(a)(1), 27-40-330(a)(1)); the library does not copy it |
| ¶13 Landlord maintenance; tenant must report pests in 3 days or waive the claim | `landlord-maintenance` | **Divergence:** a lease waiver of the landlord's duty claims is prohibited (S.C. Code Ann. § 27-40-330(a)(1)); the statute's own 14-day notice rule for defenses (S.C. Code Ann. § 27-40-640(b)) is in `edu-landlord-repair-duties-sc` |
| ¶14 Essential services; appliances listed | `appliances-included`, `appliances-excluded-sc` | Covered (S.C. Code Ann. § 27-40-440(a)(5)) |
| ¶15 Renter's insurance; mutual release for fire and casualty losses | `tenants-property-insurance-ks-oh-ca` | **Divergence:** a release of the landlord's liability arising under law is prohibited (S.C. Code Ann. § 27-40-330(a)(3)); not copied |
| ¶16 Access: emergency; scheduled services 9-6; requested services 8-8; otherwise 24 hours | `landlords-access`, `periodic-services-entry-sc` | Covered; the form uses the S.C. Code Ann. § 27-40-530(b)(2) opt-in the library now offers |
| ¶17 Military termination on PCS orders, 30 days' notice | `early-termination-ks`, `edu-servicemember-rights-sc` | Covered (SCRA; library decision since GA: no SCRA clause) |
| ¶18 30-day notice runs to the end of the following calendar month | `edu-periodic-tenancy-notice-sc` | **Divergence:** lengthens the statutory 30 days (S.C. Code Ann. § 27-40-770(b)); not copied |
| ¶19 Destruction or damage | `casualty-termination-sc` | Covered |
| ¶20 Condemnation: tenant waives award claims | none | Not copied (eminent domain; case law) |
| ¶21 Abandonment: 15 days; dispose of property under $500 | `abandoned-property-sc` | Covered |
| ¶22 Deposit: 30-day itemization; no forwarding address means forfeiture | `security-deposit-return-sc` | **Divergence:** the statute bars only damages, not the deposit itself, when no address is given and the landlord mails to the last known address (S.C. Code Ann. § 27-40-410(a)); library follows the statute |
| ¶23-24 14-day cure; 5-day nonpayment; remedies after termination incl. fees and collection costs | `default-by-tenant`, `nonpayment-notice-sc` | Covered (fees per S.C. Code Ann. §§ 27-40-710(C), 27-40-750; collection costs not statutory) |
| ¶25 Notice effective when delivered to the landlord's business address | `notices` | Covered (S.C. Code Ann. § 27-40-240(B)(2)) |
| ¶26 No antennas or satellite dishes, waterbeds, space heaters | `common-area-use`, `no-alterations` | Covered in part. **Divergence:** federal OTARD (47 CFR § 1.4000, not read) limits antenna bans in tenant-controlled areas |
| ¶27 Inventory of furnished items | `existing-condition`, `edu-no-move-in-inspection-rule-sc` | Covered |
| ¶28 Pets by consent; nonrefundable deposit; pet rent; removal after complaint | `pet-policy-sc` | Covered |
| ¶29 Tenant waives maintenance defense without 14 days' notice before rent due | `edu-landlord-repair-duties-sc` | Covered (statutory, S.C. Code Ann. § 27-40-640(b)) |
| ¶30-32 Quiet enjoyment; successors; subordination | `entire-agreement` | Covered or not needed |
| ¶33 Rent increase after the initial term on 15 days' notice | `edu-no-rent-increase-notice-sc` | Contract term; no statute (confirmed absent) |
| ¶34 Broker keeps deposit interest | `edu-no-deposit-interest-sc` | Covered |
| ¶35 Rules and regulations | `edu-rules-and-regulations-sc` | Covered (S.C. Code Ann. § 27-40-520) |
| ¶36 Landlord's contact information | `landlord-disclosure-sc` | Covered (S.C. Code Ann. § 27-40-420) |
| ¶37 Joint responsibility | `joint-liability` | Covered |
| ¶39 Fax and electronic communications and signatures | `electronic-signatures`, `notices`, `edu-electronic-notices-sc` | **Divergence:** UETA excludes default, eviction and cure notices (S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)) |

### 15.2 What it produced
- **(a) Missing required clause:** none. The form carries owner and agent contact information and a five-day nonpayment structure; both were already SC rows from the statute walk.
- **(b) Corrections to SC rows:** none.
- **(c) New SC rows:** none new from the form. It confirms four opt-in rows found in the statute walk (`periodic-services-entry-sc`, `appliances-excluded-sc`, `nonpayment-notice-sc`, `abandoned-property-sc`).
- **(d) Divergences recorded as questions:** no-deduction and pest-waiver terms (¶12, ¶13); mutual release (¶15); calendar-month notice (¶18); condemnation waiver (¶20); forfeiture for no forwarding address (¶22); antenna ban (¶26); electronic notices (¶39).
- **(e) Confirmed absences:** none new from the form.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the AZ (§18.1), GA (§16) and NC (§16) scenario maps, re-run against the SC-active library, plus South Carolina-specific scenarios (lease notice for nonpayment, conspicuous service entry, appliance exclusion, meter conservation charge, nonresident owner withholding, squatters under the 2026 act, DV with a co-tenant abuser, appeal stays under the 2026 act, condominium conversion). Where no row answered, the full-code search was run (§17) and every landlord-relevant hit was read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 67 scenarios: 48 covered by rows written in the statute walk (one of them, a death in the unit, answered in the checklist with no row); 7 gaps, each producing a row; 7 confirmed absences, each with its own row; 3 not located with no row (holding deposit, contractor liens, foreclosure); 2 out of scope.

| Scenario | SC coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **Not located**; "security deposit" secures performance of a lease (S.C. Code Ann. § 27-40-210(18)). No row |
| Application fee; screening; drug conviction question | `edu-no-application-fee-cap-sc`, `edu-fair-housing-sc` | Covered (S.C. Code Ann. § 31-21-70(L)) |
| Voucher holder applies | `edu-no-source-of-income-rule-sc` | Covered |
| Applicant lied on the application | `rental-application-accuracy` | Covered |
| Required disclosures at signing | `landlord-disclosure-sc`, `lead-based-paint`, `security-deposit-standards-sc`, `meter-conservation-charge-notice-sc` | Covered |
| Unit floods; radon; mold | `edu-no-flood-disclosure-sc`, `edu-no-radon-disclosure-sc`, `edu-no-mold-bedbug-disclosure-sc` | Covered (confirmed absent) |
| Someone died in the unit | none | No rental statute; S.C. Code Ann. § 27-50-90 is for sales. Recorded in checklist; no row |
| Unit not ready on move-in day | `possession-delay-sc` | Covered |
| How big a deposit may be; pet deposit on top | `edu-no-deposit-cap-sc`, `pet-policy-sc` | Covered |
| Different deposits for different tenants in a complex | `security-deposit-standards-sc` | **Gap → row** (S.C. Code Ann. § 27-40-410(c)) |
| Last month's rent collected at signing | `due-at-signing`, `security-deposit-return-sc` | Covered (no cap; prepaid rent returned with the notice) |
| Owner lives out of state | `edu-nonresident-landlord-withholding-sc`, `landlord-disclosure-sc` | **Gap → row** (S.C. Code Ann. § 12-8-540, found by §17) |
| Property in an HOA | `hoa-compliance` | Covered |
| City requires registration or inspection | `edu-local-preemption-sc` | Covered at state level; local layer flagged |
| Short vacation stay rather than a lease | `edu-scope-exclusions-sc` | Covered (carve-out) |
| **Rent and money** | | |
| Rent is late | `late-fee`, `nonpayment-notice-sc`, `default-by-tenant`, `edu-eviction-process-sc` | Covered |
| Tenant pays part of the rent after the eviction case starts | `edu-eviction-process-sc` | Covered (acceptance after the rule is not a waiver, S.C. Code Ann. § 27-37-150) |
| Check bounces | `returned-payments`, `edu-dishonored-payment-remedies-sc` | Covered |
| Cash rent and receipts | `edu-no-cash-receipt-duty-sc` | Covered (confirmed absent, with the S.C. Code Ann. § 27-40-790(a) exception) |
| Raising rent | `edu-no-rent-increase-notice-sc` | Covered (confirmed absent) |
| Utility account has a meter conservation charge | `meter-conservation-charge-notice-sc` | **Gap → row** (found by §17) |
| Utility company wants the landlord to guarantee the tenant's account | `edu-utilities-sc` | Covered (S.C. Code Ann. § 27-33-50(B)) |
| Charging attorney's fees for an eviction | `default-by-tenant`, `edu-eviction-process-sc` | Covered (S.C. Code Ann. § 27-40-710(C)) |
| **During the tenancy** | | |
| Heat or AC fails | `landlord-maintenance`, `edu-landlord-repair-duties-sc` | Covered (essential services; no temperature standard) |
| Tenant deducts repair costs from rent | `edu-landlord-repair-duties-sc` | Covered (no repair-and-deduct, S.C. Code Ann. § 27-40-630(c)) |
| Smoke detector dead or disabled | `smoke-detectors-sc` | Covered |
| CO alarm | `edu-no-co-alarm-duty-sc` | Covered (confirmed absent) |
| Child found with lead poisoning | `edu-lead-hazards-sc` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access`, `edu-landlord-repair-duties-sc` | Covered (S.C. Code Ann. §§ 27-40-530, 27-40-780) |
| Pest control on a regular schedule | `periodic-services-entry-sc` | **Gap → row** (opt-in) |
| Tenant changes the locks | `keys` | Covered (S.C. Code Ann. § 27-40-530(e)) |
| Guest won't leave | `guest-policy-day-limit`, `edu-eviction-process-sc` | Covered |
| Squatters in a vacant unit | `edu-unauthorized-occupant-removal-sc` | Covered (2026 Act No. 252) |
| Tenant lists the unit on Airbnb | `no-sublet-assign` | Covered |
| Drug dealing in the unit | `residential-use-only`, `default-by-tenant`, `edu-eviction-process-sc` | Covered (illegal activity, S.C. Code Ann. §§ 27-40-540, 27-40-710(B); keeping a drug house is a crime, S.C. Code Ann. § 44-53-380(6)) |
| Unapproved pet; landlord wants to remove it | `pet-policy-sc`, `edu-self-help-eviction-sc` | Covered |
| Service animal; emotional support animal | `assistance-animal-accommodation-sc`, `edu-service-animal-law-sc` | Covered |
| Disability modification request | `no-alterations`, `edu-fair-housing-sc` | Covered (S.C. Code Ann. § 31-21-70(G)(1)) |
| Tenant wants to fly a US flag | `common-area-use`, `edu-prohibited-lease-terms-sc` | Covered (S.C. Code Ann. § 27-1-60) |
| Tenant hires a contractor (liens) | none | **Not located** as a landlord-tenant rule beyond S.C. Code Ann. § 27-40-630(c) (lien from unauthorized tenant repairs unenforceable). No row |
| Leftover appliance the landlord won't maintain | `appliances-excluded-sc` | **Gap → row** (opt-in) |
| Single-family tenant agrees to do upkeep | `tenant-repair-agreement-sc` | **Gap → row** (opt-in) |
| Car towed from the lot | `parking-vehicle-rules`, `edu-towing-sc` | Covered |
| Fire or storm damage | `casualty-termination-sc`, `casualty-landlord-termination-sc` | Covered (decision 3) |
| Tenant calls police repeatedly | `edu-no-police-call-protection-sc` | Covered (confirmed absent) |
| Tenant wants an EV charger | `edu-no-ev-charging-right-sc` | Covered (confirmed absent) |
| Tenant complains to the city, then gets a nonrenewal | `edu-retaliation-sc` | Covered |
| New house rule mid-lease | `edu-rules-and-regulations-sc` | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination-ks` | Covered |
| DV victim whose abuser is a co-tenant wants out | `dv-lease-termination-sc` | Covered (2026 Act No. 184) |
| DV victim whose abuser is not on the lease | `dv-lease-termination-sc` notes | Covered: no statutory right (narrow qualifying incident) |
| Soldier gets PCS orders; Guard on state duty | `edu-servicemember-rights-sc` | Covered |
| Month-to-month: how much notice | `edu-periodic-tenancy-notice-sc` | Covered |
| Tenant stays after the lease | `holdover-ca`, `holdover-rate-sc`, `edu-holdover-remedies-sc` | Covered |
| Tenant disappears; belongings left | `abandoned-property-sc` | Covered |
| Tenant dies | `edu-no-tenant-death-termination-sc` | Covered (confirmed absent) |
| Eviction for nonpayment | `edu-eviction-process-sc` | Covered |
| Tenant appeals the eviction | `edu-eviction-process-sc` | Covered (2026 Act No. 252 rent affidavit) |
| Eviction record | `edu-eviction-record-removal-sc` | Covered (from 2027) |
| Landlord changes the locks or cuts utilities | `edu-self-help-eviction-sc` | Covered |
| Move-out and deposit dispute | `security-deposit-return-sc` | Covered |
| **Owner changes** | | |
| Owner sells the property | `edu-sale-of-rented-property-sc` | Covered |
| Lender forecloses | `edu-sale-of-rented-property-sc` notes | **Not located** at state level (search 0 hits); federal PTFA. Recorded, no separate row |
| Owner converts to condominiums | `edu-condo-conversion-notice-sc` | **Gap → row** (found by §17) |
| Owner switches managers | `landlord-disclosure-sc`, `edu-sale-of-rented-property-sc` | Covered (S.C. Code Ann. §§ 27-40-420(b), 27-40-450(b)) |
| Manufactured-home lot | `edu-scope-exclusions-sc` | **Out of scope** (Chapter 47) |
| Furnished stay under 90 days | `edu-scope-exclusions-sc` | **Out of scope** (Vacation Rental Act) |

("Covered" counts rows written in the statute walk. The seven gaps produced the seven rows named: three came from §17's outside-title search (withholding, meter charge, condominium conversion) and four from Chapter 40 provisions the scenario brought forward as opt-in or conditional rows.)

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engine:** all 1,304 chapter pages of the official South Carolina Code of Laws (scstatehouse.gov, chapter lists from the 63 title pages) loaded into the built-in browser page on 2026-09-28 and searched with JavaScript regular expressions (case-insensitive; exact strings; word forms and plurals written into each pattern; hits mapped to the enclosing section header). **Control terms:** 'zqxvbnmwt' returned 0 (a true empty); 'security deposit' returned 34 hits in 26 sections, 'carbon monoxide' 6 in 4, so ordinary terms return hits. Instruction 39: a probe is a screen, never a verdict; every landlord-relevant hit was read in context and the key sections read section-open. One early pattern ('section 8\b') matched every "Section 8-..." cross-reference and was rewritten; a section-mapping bug that mis-assigned in-text "SECTION" references was fixed before any absence was certified.

| # | Search (regex) | Hits / sections | Result |
|---|---|---|---|
| 1 | zqxvbnmwt (control) | 0 | True empty |
| 2 | security deposits? | 34 / 26 | Residential only in Chapter 40, S.C. Code Ann. § 27-47-520 (parks), S.C. Code Ann. § 40-57-136 (trust accounts) → `edu-no-deposit-cap-sc` |
| 3 | deposits? … (exceed\|not more than\|maximum\|in excess of) … (rent\|month) | 2 | Public funds only → `edu-no-deposit-cap-sc` |
| 4 | interest … security deposit (both orders) | 0 | → `edu-no-deposit-interest-sc` |
| 5 | late (fee\|fees\|charge\|charges) … (rent\|tenant\|lease\|landlord\|dwelling) | 1 | S.C. Code Ann. § 27-40-210(11) only → `edu-no-late-fee-cap-sc` |
| 6 | (application\|screening) fees? … (rent\|tenant\|landlord\|housing\|lease) | 0 | → `edu-no-application-fee-cap-sc` |
| 7 | (increase\|raise\|raising) … rent \| rent increase | 2 / 1 | S.C. Code Ann. § 27-40-910 only → `edu-no-rent-increase-notice-sc` |
| 8 | (landlord\|lessor) … (enter\|entry\|access) … (notice\|consent) | 1 | S.C. Code Ann. § 27-40-530 only (present) |
| 9 | carbon monoxide | 6 / 4 | None for dwellings → `edu-no-co-alarm-duty-sc` |
| 10 | smoke (alarm\|detector)s? | 27 / 11 | **Found: S.C. Code Ann. §§ 5-25-1310 to 5-25-1370; § 23-9-155** → `smoke-detectors-sc` |
| 11 | \bradon\b | 1 | S.C. Code Ann. § 27-50-40 (sales) → `edu-no-radon-disclosure-sc` |
| 12 | mold\|molds\|mildew\|fungal; bed ?bugs?\|bedbugs? | 38 / 13; 0 | None → `edu-no-mold-bedbug-disclosure-sc` |
| 13 | flood … (lease\|tenant\|lessee\|rental\|landlord), both orders | 2 | None → `edu-no-flood-disclosure-sc` |
| 14 | clandestine\|methamphetamine (lab\|laborator); methamphetamine … (property\|dwelling\|…) | 0; 1 | None → `edu-no-drug-lab-disclosure-sc` |
| 15 | lead poisoning\|lead-based paint\|lead hazard | 19 / 9 | **Found: S.C. Code Ann. § 44-53-1430** → `edu-lead-hazards-sc` |
| 16 | section 8 (housing\|voucher\|program\|tenant)\|housing choice voucher\|source of income\|lawful source | 21 / 17 | None a housing protection → `edu-no-source-of-income-rule-sc` |
| 17 | (immigration\|citizenship\|alien) … (tenant\|landlord\|rent\|lease\|dwelling\|housing\|shelter); harbor … shelter | 10 / 9; 5 / 2 | S.C. Code Ann. § 16-9-460 read → `edu-no-immigration-inquiry-rule-sc` |
| 18 | electric vehicle … (tenant\|lease\|rental\|landlord\|condominium\|association) | 0 | → `edu-no-ev-charging-right-sc` |
| 19 | receipts? (for\|of) (rent\|payment)\|rent receipt | 9 / 9 | Only S.C. Code Ann. § 27-40-340 → `edu-no-cash-receipt-duty-sc` (S.C. Code Ann. § 27-40-790(a) exception from the Chapter 40 read) |
| 20 | hold(s\|ing)? ?over\|holdover\|double (the )?(rent\|value)\|at sufferance | 43 / 33 | S.C. Code Ann. §§ 27-35-170, 27-35-180, 27-40-770, 15-67-760, 15-67-770 → `edu-holdover-remedies-sc` |
| 21 | (death\|dies\|died\|deceased\|decedent) … (tenant\|lessee) … (lease\|rental agreement\|terminat) | 0 | → `edu-no-tenant-death-termination-sc` |
| 22 | renters?'? insurance\|tenants?'? insurance | 0 | No renter's-insurance rule |
| 23 | firearms? … (lease\|tenant\|lessee\|landlord\|rental) | 17 / 5 | None for private leases (recorded in `edu-fair-housing-sc`) |
| 24 | \bflags?\b … (tenant\|lessee\|lease\|landlord\|rental\|residen) | 4 / 2 | **Found: S.C. Code Ann. § 27-1-60** → `common-area-use`, `edu-prohibited-lease-terms-sc` |
| 25 | (lockout\|padlock\|rekey\|deadbolt\|change (the )?locks?) … (tenant\|landlord\|dwelling) | 1 | S.C. Code Ann. § 27-40-530(e) only |
| 26 | (law enforcement\|police\|911\|emergency assistance) … (tenant\|lessee\|lease) … (evict\|terminat\|penal\|waive) | 0 | → `edu-no-police-call-protection-sc` |
| 27 | typography terms near lease/tenant (instruction 28) | 21 / 18 | §4 |
| 28 | UETA scope: (eviction\|rental agreement\|primary residence\|landlord) in Title 26 Chapter 6 | 4 / 1 | **Found: S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)** → `edu-electronic-notices-sc` |
| 29 | service charge … (check\|draft\|instrument), both orders | 8 / 4 | **S.C. Code Ann. § 34-11-70** → `edu-dishonored-payment-remedies-sc` |
| 30 | service animal\|guide dog\|assistance animal\|emotional support\|support animal\|comfort animal | 220 / 26 | S.C. Code Ann. §§ 43-33-70, 31-21-70(N), 47-3-920, 47-3-980 → `assistance-animal-accommodation-sc`, `edu-service-animal-law-sc` |
| 31 | discriminat … (sale or rental\|rental of a dwelling\|dwelling) | 5 / 2 | S.C. Code Ann. §§ 31-21-40, 31-21-70 → `edu-fair-housing-sc` |
| 32 | (housing\|dwelling\|rental\|lease\|landlord\|apartment) in Title 43 Chapter 33 | 11 / 5 | **Found: S.C. Code Ann. §§ 43-33-70, 43-33-530** |
| 33 | (servicemember\|service member\|military service\|active duty\|military orders) … (lease\|rental agreement\|tenant\|terminat); (national guard\|state active duty\|servicemember\|military) … (lease\|rent\|tenan\|landlord) | 18 / 13; many | **S.C. Code Ann. §§ 25-1-4010 to 25-1-4080** → `edu-servicemember-rights-sc` |
| 34 | (tow\|towed\|towing\|wrecker) … (private property\|parking lot\|…); towing | 2 / 2; 131 / 49 | S.C. Code Ann. § 56-5-2525 → `edu-towing-sc` |
| 35 | (deposit\|rent) … (unclaimed\|abandoned property) | 5 / 5 | Uniform Unclaimed Property Act general rules only |
| 36 | psychologically (impacted\|affected)\|stigmatized\|(homicide\|suicide\|death) … disclos | 4 / 3 | S.C. Code Ann. § 27-50-90 (sales only) |
| 37 | sex offender … (tenant\|lease\|rent\|landlord\|housing\|dwelling\|disclos) | 4 / 4 | No landlord duty |
| 38 | conver(t\|sion) … (condominium\|horizontal property) … (tenant\|lessee) | 2 / 2 | **Found: S.C. Code Ann. §§ 27-31-420, 27-31-430** → `edu-condo-conversion-notice-sc` |
| 39 | foreclos … (tenant\|lessee), both orders | 0 | No state foreclosure tenant rule |
| 40 | master[- ]meter | 1 | S.C. Code Ann. § 27-33-50(C) → `edu-utilities-sc` |
| 41 | meter conservation charge | 19 / 3 | **Found: S.C. Code Ann. § 58-37-50(H)(3)** → `meter-conservation-charge-notice-sc` |
| 42 | (security\|rental) deposits? … (trust account\|escrow) | 1 | S.C. Code Ann. § 40-57-136 (licensees) |
| 43 | (expunge\|expunction\|seal\|remov) … (ejectment\|eviction) | 2 / 2 | None in the compilation; S.C. Code Ann. § 30-2-60 is 2026 Act No. 214 → `edu-eviction-record-removal-sc` |
| 44 | (move-in\|move in\|inventory\|condition report\|checklist) … (tenant\|lessee\|rental) | 0 | → `edu-no-move-in-inspection-rule-sc` |
| 45 | rental (dwelling\|property\|…) … (inspect\|registr\|licens\|permit) | 3 / 2 | No limit on local registration → `edu-local-preemption-sc` |
| 46 | (county\|municipal) … ordinance … (landlord\|tenant\|rental propert) | 0 | Only S.C. Code Ann. § 27-39-60 (from the Chapter 39 read) |
| 47 | sublet\|sublease\|sublessee | 70 / 36 | S.C. Code Ann. § 27-35-60 only for dwellings |
| 48 | abandon* … (tenant\|lessee\|dwelling unit\|rental) | 11 / 5 | Chapter 40, S.C. Code Ann. §§ 27-37-30, 27-39-210 |
| 49 | confess(ion of)? judgment | 22 / 12 | S.C. Code Ann. § 27-40-330(a)(2) plus consumer-credit bans |
| 50 | unconscionab | 92 / 25 | S.C. Code Ann. § 27-40-230 for leases |
| 51 | (nonresident\|non-resident\|out-of-state\|resides outside) … (rent\|lease\|landlord\|dwelling) | 11 / 11 | **Found: S.C. Code Ann. § 12-8-540** → `edu-nonresident-landlord-withholding-sc` |
| 52 | medical (cannabis\|marijuana)\|compassionate care | 1 | Julian's Law research article only (S.C. Code Ann. § 44-53-1840); no legalisation |
| 53 | trespass … (notice\|told\|ordered\|request) … (leave\|depart) | 1 | Pattern missed S.C. Code Ann. § 16-11-620, which was then read directly (warned or asked to leave) |
| 54 | swimming pool … (apartment\|rental\|landlord\|tenant\|residential) | 1 | No landlord pool rule located |
| 55 | (septic\|private well) … (tenant\|lessee\|landlord\|rental) | 0 | None |
| 56 | sprinkler … (apartment\|rental\|residential\|dwelling) | 4 / 4 | S.C. Code Ann. § 6-9-55 (no local mandate for one- and two-family dwellings); no retrofit duty |
| 57 | (condemn\|unfit for human habitation) … (rent\|tenant) | 3 / 3 | No rent-after-condemnation bar |
| 58 | (maintain\|keep) … (dwelling\|building\|premises\|house) … (controlled substance\|drug) | 2 / 2 | S.C. Code Ann. § 44-53-380(6) (crime) |

**Other titles read section-open** (found by the searches, the statute walk's cross-references, or the scenario screen): Title 5 (S.C. Code Ann. §§ 5-25-1310 to 5-25-1370); Title 8 (§ 8-21-1010(9)); Title 12 (§§ 12-8-540, 12-36-920 part); Title 15 (§§ 15-67-610 to 15-67-630, 15-67-760, 15-67-770); Title 16 (§§ 16-9-460 part, 16-11-620 part, 16-25-10 part); Title 20 (§ 20-4-20); Title 23 (§ 23-9-155); Title 25 (§§ 25-1-4010 to 25-1-4080); Title 26 (§ 26-6-30); Title 27 outside Chapter 40 (Chapters 33, 35, 37, 39 whole; §§ 27-1-60, 27-31-420 to 27-31-440, 27-50-90, 27-50-230 part); Title 31 (§§ 31-21-40, 31-21-70); Title 34 (§ 34-11-70); Title 40 (§ 40-57-136 part); Title 43 (§§ 43-33-20, 43-33-70, 43-33-530, 43-33-560, 43-33-570); Title 44 (§§ 44-53-380 part, 44-53-1430, 44-53-1810 part, 44-53-1840); Title 47 (§§ 47-3-920, 47-3-980); Title 56 (§ 56-5-2525 part); Title 58 (§ 58-37-50(H)).

---

## Decisions that need Taylor (short list)

None open. Decided 2026-09-28 and applied: 1 (`holdover-rate-sc`), 2 (keep the shared `default-by-tenant`), 3 (`casualty-landlord-termination-sc`), 4 (§15 stands on the 2021-or-earlier Form 410; no newer copy available).

**Integrity:** 1,244 rows (1,186 + 58 new); SC 110 active (all VERIFIED); every other state's count unchanged (AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row.

## 18. Sync note (Claude Code, 2026-09-28)

- Installed as delivered; no corrections needed. The cross-state prefix scan (no `S.C. Code Ann.` outside SC rows) was repeated at sync and passed.
- Statute spot-check against the official Code on scstatehouse.gov (Title 27, Chapter 40 page): §§ 27-40-330 (prohibited terms and the deliberate/malicious-use penalties), 27-40-410(a)-(b) (30-day itemized return after the later of possession or demand; forwarding address; treble damages), 27-40-530 (24-hour notice; the conspicuous periodic-services exception; the tenant-requested-services window), 27-40-710(B) (the lease-as-notice wording, quoted word for word in `nonpayment-notice-sc`) and 27-40-770 (7- and 30-day periodic notice; wilful holdover up to three months' rent or twice actual damages). All match the SC rows.
- Legal watch: `stateConfig.js` SC entry (125 sections, bare-number queries) and `legal-watch-sc.yml` (Mondays 17:00 UTC), validated offline. The live dry-run and seed-baseline wait for LegiScan's October allowance.

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `possession-delay-sc`, `dv-lease-termination-sc`, `casualty-termination-sc` (new rows).
- **Trimmed:** `security-deposit-return-sc` keeps the withholding right and forwarding-address duty.
- **Optional (pattern 3):** `security-deposit-standards-sc`, with `edu-security-deposit-rules-sc`.

### Verdict for every lease clause

All 17 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `casualty-termination-sc` | Education | — | tenant right |
| `dv-lease-termination-sc` | Education | — | tenant right |
| `possession-delay-sc` | Education | — | tenant remedies |
| `security-deposit-return-sc` | Split | SERVES_LANDLORD | keep forwarding-address duty; rest edu |
| `security-deposit-standards-sc` | Optional + education | SERVES_LANDLORD | statement before signing |
| `abandoned-property-sc` | Keep | SERVES_LANDLORD |  |
| `appliances-excluded-sc` | Keep | SERVES_LANDLORD | opt-in |
| `assistance-animal-accommodation-sc` | Keep | SERVES_LANDLORD |  |
| `casualty-landlord-termination-sc` | Keep | SERVES_LANDLORD | opt-in |
| `holdover-rate-sc` | Keep | CONSTRAINED_TERM |  |
| `landlord-disclosure-sc` | Keep | REQUIRED_DISCLOSURE: S.C. Code Ann. § 27-40-420 |  |
| `meter-conservation-charge-notice-sc` | Keep | REQUIRED_DISCLOSURE: S.C. Code Ann. § 58-37-50(H)(3) |  |
| `nonpayment-notice-sc` | Keep | SERVES_LANDLORD | opt-in |
| `periodic-services-entry-sc` | Keep | SERVES_LANDLORD | opt-in |
| `pet-policy-sc` | Keep | SERVES_LANDLORD |  |
| `smoke-detectors-sc` | Keep | SERVES_LANDLORD |  |
| `tenant-repair-agreement-sc` | Keep | SERVES_LANDLORD | opt-in |

## Targeted fix, 2026-09-29: bed-bug and mold rows split

`edu-no-mold-bedbug-disclosure-sc` covered two subjects in one row. It is switched off, and its content moved unchanged into `edu-no-bed-bug-disclosure-sc` and `edu-no-mold-disclosure-sc`, matching the separate rows most states have. The research and citation are copied to both rows (the same search covered both subjects); no new research. Reason: each row carries one `topic_key`, so a combined row hid one of the two subjects from the cross-state coverage check.

---

## Retro checks (SOP 1.9), 2026-09-30

**Date:** 2026-09-30 · **Settings:** Opus, high effort, built-in browser; research mode not used (no rule 9 trigger). **Scope:** the 12 [Retro] rules and 2 targeted fixes in the SC retro prompt only; nothing else reopened (rule 1).

**Source of truth.** The files attached for this task are the only source of truth: `lease-clauses.csv` (1,909 rows, 17 columns, SC 111 active: 66 lease clauses, 45 education), `lease-clause-sop.md` 1.9, `lease-clause-topics.md`, this log and `lease-clause-citations-SC.csv`. Where they differ from the earlier part of this chat, they win: the CSV now has a 17th column (`lease_clause_basis`); SC had 110 rows at the end of phase 1, not 111; `possession-delay-sc`, `dv-lease-termination-sc` and `casualty-termination-sc` are switched off and replaced by `edu-` rows; and `casualty-landlord-termination-sc` now carries topic_key `casualty-termination`. Old outputs deleted at the start of the task: `lease-clauses-SC-sync.csv`, `lease-clause-decision-log-SC.md`, `lease-clause-decision-log-named-topic-checklist.md`.

**Sources (rule 14).** The site still says it is current through the 2025 session, and the 2026 act list is unchanged (Acts 95 to 274). The whole Code was reloaded in the built-in browser: 1,304 chapter pages from 63 title pages, 49,336,058 characters, 0 fetch errors, control term 0. 2026 Act No. 184 (§ 27-40-350) and Act No. 252 (§ 27-40-800, Article 3) were read from the ratified texts. 39 primary texts are saved, one file per section, each matched to the browser by SHA-256 (39 of 39 OK):
- **Title 27, Chapter 40:** S.C. Code Ann. §§ 27-40-50, -210, -230, -310, -320, -330, -410, -440, -450, -510, -540, -610, -630, -640, -650, -710, -720, -730, -750, -770, -790 and -910.
- **Other Title 27:** S.C. Code Ann. §§ 27-37-10, 27-37-160, 27-39-60 and 27-31-420.
- **2026 acts:** S.C. Code Ann. § 27-40-350 (2026 Act No. 184) and § 27-40-800 (2026 Act No. 252).
- **Outside Title 27:** S.C. Code Ann. §§ 34-11-70, 37-2-106, 39-5-10 and 39-5-20.
- **Court rules and orders:** SC Rules of Magistrates Court (SCRMC) Rules 2, 16, 18 and 19; Supreme Court orders 2026-07-22-01, 2026-08-14-01 and 2026-08-17-01.

Search batteries B1 to B14 were each saved with the exact pattern, hit counts and sections before any hit was read; positive controls are noted per battery. One extractor defect was found and fixed before any verdict (see Proposed SOP changes, item 1).

| Rule | Verdict | What was read | Rows changed |
|---|---|---|---|
| **37** Tenancy type | **Fixed** | The rows with periods, figures or windows (screen of every SC row for term, renewal, expiration, month, week and day figures), read against S.C. Code Ann. §§ 27-40-310(d), 27-40-350(A)(2), 27-40-730(c), 27-40-770(a)-(c), 27-40-910(g) and 27-31-420(A). This includes the rows the 2026-09-29 scrub created. | `abandoned-property-sc`: the periodic term is one month or one week, per § 27-40-730(c). `edu-dv-lease-termination-sc`: "end of the term" became the statute's "end of the lease", noting that a periodic lease has no fixed end; the citation also gets its § sign. `edu-holdover-remedies-sc`: week-to-week for a roomer paying weekly (§ 27-40-310(d)). `edu-condo-conversion-notice-sc`: a periodic tenant may stay at least 120/90 days. `edu-retaliation-sc`: the 75-day rule is written for an expiring lease, and the statute is silent on periodic tenancies. `early-termination-ks` (shared): SC note only; the fee and notice assume a fixed Term, while a periodic tenant ends on 7/30 days' notice with no fee (§§ 27-40-770(a)-(b), 27-40-330(a)(1)). Shared-text proposal below. |
| **39** Eviction duties | **Already covered** in §16 (eviction rows) and §17 search 43; **re-checked, no issue** | Chapters 37 and 40 (battery B3: no animal term; personal-property duties only in §§ 27-40-710(D) and 27-40-730). 2026 Act No. 252 (B4). All 24 SCRMC rules (B5): landlord-tenant timing only, in Rule 16 (jury verdict final in 5 days) and Rule 19 (new-trial and amend motions within 5 days), so out of scope. 2026 Supreme Court orders (B6): forms approvals only, SCCA 771, 772 and 657. No pending magistrate-rule amendment. | None. The existing rows cover every duty, prohibition and immunity found: the 48-hour street-property notice (§ 27-40-710(D)) and the ill or elderly writ delay (§ 27-37-160) in `edu-eviction-process-sc`; the lockout and utility-cut ban in `edu-self-help-eviction-sc`; record removal in `edu-eviction-record-removal-sc`; owner non-liability and $1,000 wrongful-removal damages (2026 Act No. 252) in `edu-unauthorized-occupant-removal-sc`; the $500 disposal rule in `abandoned-property-sc`. |
| **41** Just cause | **Checked, no issue** | Chapter 40 (§ 27-40-770), § 27-37-10(A)(2) and the code-wide tenant-organizing search. SC has no just-cause rule. | None. The wording screen of `security-deposit-use`, `no-alterations`, `keys`, `early-termination-ks`, `holdover-ca`, `holdover-rate-sc` and `abandoned-property-sc` is consistent with SC law. |
| **41b** `for-cause-eviction` row | **Fixed** | S.C. Code Ann. §§ 27-40-770, 27-37-10, 27-40-910, 27-40-350(D)-(E), 27-31-420 and 27-40-790. | New `edu-no-for-cause-eviction-sc`: confirmed absence, naming the situational limits (retaliation and the 75-day bar, the DV 60-day and no-retaliation rules, condo conversion 120/90 days, rent into court as a condition rather than a bar, and no tenants'-association protection). |
| **43** Cure promises | **Already covered** in §0 instruction 33 and §2.1; **re-checked, no issue** | S.C. Code Ann. § 27-40-710(A)-(B), § 27-40-720(b) and § 27-40-540. | None. In `default-by-tenant`, SC's only no-cure routes (non-remediable breach and illegal activity) belong to the non-rent limb, and its carve-out covers them. The rent limb runs on the statute's 5 days from the due date, and SC has no no-cure rent route. `application-of-payments` only preserves the tenant's cure. |
| **48** Separate documents | **Already covered** in §4 (typography search incl. "separate document"); **re-checked, no issue** | Code-wide battery B14: no residential-lease separate-document rule. § 27-40-410(c) read. | None. `security-deposit-standards-sc` does not supply the pre-signing statement. It records that the statement was given before signing, which § 27-40-410(c) requires. |
| **49** Collection costs | **Checked, no issue** | Code-wide battery B13. The only fee bans (§§ 37-2-413, 37-3-404) cover consumer credit and leases of goods (§ 37-2-106). §§ 27-40-710(C) and 27-40-750 read. | None. The "reasonable costs and expenses" and the self-limited fee sentence in `default-by-tenant` meet no South Carolina ban (fee conditions already in §2.1, decision 2). |
| **50** "The lease controls" | **Mostly covered** in §3.2 (opt-in list); **checked, no issue** | Batteries B1 and B2 over Chapters 33, 35, 37, 39 and 40. Every hit is listed in the battery file. | None. Each choice is made on purpose: utilities (§ 27-33-50(A); `utilities-responsibility`, `utilities-paid-by-landlord`); sublease consent (§ 27-35-60; `no-sublet-assign`); time and place of rent (§ 27-40-310(c); `rent-payment`, `acceptable-payment-methods`); appliance exclusion and tenant repairs (§ 27-40-440(a)(5), (c), (d); `appliances-excluded-sc`, `tenant-repair-agreement-sc`); periodic-services entry (§ 27-40-530(b)(2)); dwelling-only use (§ 27-40-540; `residential-use-only`); the lease nonpayment notice (§§ 27-40-710(B), 27-37-10(B)). Left silent on purpose, because the statute's default serves the landlord: daily apportionment of rent (§ 27-40-310(c)) and seller and manager release after notice (§ 27-40-450(a)-(b)). |
| **51** Plain-language and consumer statutes | **Checked, no issue** | Code-wide batteries B10 and B12. §§ 39-5-10 and 39-5-20 (the Unfair Trade Practices Act has a general standard and no list). § 37-2-106 (consumer lease means goods). | None. No statute reaches residential leases with plain-language, blank-space or copy-at-signing rules. Recorded in `edu-no-lease-completeness-rule-sc`. |
| **53** Figure vs shared clause | **Fixed** | §§ 34-11-70, 27-40-730(d)-(f), 27-40-770, 27-40-310(c), 27-40-630 and 27-40-710(C) read. | `returned-payments` is ceiling-only and SC has a $30 cap (§ 34-11-70(a)(3)): SC removed from `returned-payments` and new `returned-payments-sc` added (stated fee with the figure shown; TN and AL pattern). `surrender-end-of-term`'s "after Tenant vacates ... to the extent permitted" hides the $500 figure and its conditions (§ 27-40-730(d)-(e)): SC removed and tagged on `surrender-end-of-term-mn-nd`, which points to `abandoned-property-sc` (AL pattern). No issue in `rent-payment` (its carve-out preserves the § 27-40-630(a)(1) essential-services deduction, and the weekend roll-forward only helps the tenant), `default-by-tenant` (no figure; the fee trigger is self-limited and settled by decision 2) or `holdover-ca` (no figure; month-to-month continuation is a lease choice). |
| **54t** Tenant-caused damage | **Fixed** (Taylor decided 2026-09-30) | §§ 27-40-650, 27-40-610(a)(2), 27-40-630(d), 27-40-790(a), 27-40-510(6), 27-40-410, 27-40-710(C), 27-40-720, 27-40-750, 27-40-50 and 27-40-330 read. `tenant-caused-damage-tn` and `-al` read; the TN row was not tagged. The casualty rows were checked first. | New `edu-tenant-caused-damage-sc`. New optional `tenant-caused-damage-sc` (CONDITIONAL, SERVES_LANDLORD): lost-rent measure only, with a periodic-tenancy limit and the tenant's casualty rights kept. TN's part (1), no abatement, is not offered. § 27-40-650(a) has no fault exception (only (b), deposit and prepaid rent, has one), so part (1) would waive a chapter right, and knowingly using such a term carries a penalty (§ 27-40-330(b)). **Asked in chat:** Taylor first asked whether the casualty clause already covers this. Answer: no, `casualty-landlord-termination-sc` only ends the lease. He then chose "offer clause + edu row". **Unread risk:** no SC case law was read on whether a court awards lost rent after a § 27-40-650(a)(1) exit. |
| **27** Seven topics | **Fixed**: 3 Present, 4 Confirmed absent | Code-wide batteries B7 to B11. §§ 27-40-210(11), 27-40-720, 27-40-710(B), 34-11-70(a)(1), 27-40-800(c) (2026 text), 27-39-60, 39-5-20, 27-40-230 and 27-40-320 read. | **Present:** `edu-fees-as-rent-sc` (rent includes late charges and excludes other charges), `edu-landlord-self-cure-sc` (§ 27-40-720(a), reimbursement rather than rent; no clause, as VA and AL decided) and `edu-statutory-forms-sc` (lease notice, dishonored-check notice, appeal affidavit; court forms named). **Confirmed absent:** `edu-no-algorithmic-rent-rule-sc`, `edu-no-lease-completeness-rule-sc`, `edu-no-quiet-possession-statute-sc` and `edu-no-tenant-camera-rule-sc`. The voyeurism and interception statutes were located by search but not read, so they are named only generally. |
| **Fix 13** `casualty-landlord-termination-sc` | **Fixed** | §§ 27-40-650(b), 27-40-410(a)-(b) and 27-40-330(a)(1). | The pointers to the switched-off "Fire or Casualty Damage terms" were replaced with what SC law provides: return of unearned prepaid Rent and the deposit, with the itemized notice, "as South Carolina law and this Lease's Security Deposit terms provide". The last sentence now keeps "any right South Carolina law gives Tenant after a fire or casualty" (AL model). **Rule 78 follow-through:** the id scan found three SC notes still pointing at the switched-off `casualty-termination-sc` (this row, `security-deposit-return-sc` and `edu-landlord-repair-duties-sc`). Each now points to `edu-casualty-termination-sc`; notes only. A section-name scan of every SC clause found no other dangling "this Lease's … terms" pointer. |
| **Fix 14** `holdover-rate-sc` | **Fixed** | § 27-40-770(c). | (a) The trigger is lawful: SC starts holdover remedies when the tenant stays "after expiration of the term ... or its termination", with no notice-date trigger, so VA's issue does not arise. (b) The trigger is extended from "after the end of the Term" to also cover "after this Lease is otherwise terminated" (breach termination, or a periodic tenancy ended by notice), with the matching "before ... this Lease was terminated" in the last sentence. The pointer to `holdover-ca` is unchanged. |

**Delta (`lease-clauses-SC-retro-delta.csv`): 24 rows.** 13 changed and 11 new.
- **Changed, SC's own rows:** `holdover-rate-sc`, `casualty-landlord-termination-sc`, `abandoned-property-sc`, `edu-dv-lease-termination-sc`, `edu-holdover-remedies-sc`, `edu-condo-conversion-notice-sc`, `edu-retaliation-sc`, `security-deposit-return-sc` (notes only) and `edu-landlord-repair-duties-sc` (notes only).
- **Changed, shared rows** (states, SC note segment and last_checked only; checked programmatically that every other state's segment is unchanged): `returned-payments` (−SC), `surrender-end-of-term` (−SC), `surrender-end-of-term-mn-nd` (+SC) and `early-termination-ks` (SC note).
- **New:** `returned-payments-sc`, `tenant-caused-damage-sc`, `edu-tenant-caused-damage-sc`, `edu-no-for-cause-eviction-sc` and the seven rule-27 rows.
- **Counts:** SC active goes from 111 to 121 (67 lease clauses, 54 education). Every other state's count is unchanged.
- **Integrity:** no duplicate ids and no dangling `supersedes`. No two active SC lease clauses share a topic_key, and no SC row sits beside a base it supersedes. Citations use the `S.C. Code Ann. §` form, and none leaked into another state's note segment. The header and CRLF records match the master, and a master round trip is byte-identical.

**Shared-text proposal (rule 62), not made:** `early-termination-ks`. Add "This Section applies only if this Lease has a fixed Term." Alternatively, the builder could offer the clause only for fixed-term leases. Uniform reasoning: every tagged state (KS, SC, TN, VA, AL, PA, UT, IL, ID) gives either side a statutory notice to end a periodic tenancy. A fee measured on "the remaining Rent due under the Term" has no meaning there, and charging one on a statutory notice would burden that right.

**Flags for Claude Code (not fixed; outside this prompt's scope):**
- `edu-casualty-termination-sc` and `edu-possession-delay-sc`, both created by the 2026-09-29 scrub, cite "S.C. Code Ann. 27-40-…" without the § sign. The legal-watch citation pattern may not read them.
- `holdover-ca` (shared) speaks only of "the end of the Term". `holdover-rate-sc` now also runs after an earlier termination, where SC's statutory remedies apply.

### Proposed SOP changes
1. Rule 14: an in-page section extractor must anchor on the section's header line (a newline, "SECTION n.", then the catch-line), not the first "SECTION n." in the text. Why: SC's chapter page prints cross-references as "SECTION 27-40-440.", which made a first-match extractor return the wrong text for § 27-40-440. It was caught before use, and all 18 earlier files re-hashed identical.
2. Rule 19: statutory-form batteries should include "substantially as follows" and "as follows:" along with "following form". Why: the SC dishonored-check notice (§ 34-11-70(a)(1)) uses "substantially as follows", and the first pattern missed it.
3. Rule 37: the screen should also check shared clauses whose figures only make sense in a fixed Term, such as an early-termination fee measured on "the remaining Rent due under the Term", when the lease may be periodic. Why: SC's `early-termination-ks` note now limits it to fixed terms, and the shared row says nothing.
4. Rule 54t: check each abatement or exit provision separately for a tenant-fault exception (landlord-breach termination, essential services, rent into court, casualty). Why: SC has the exception in three of them (§§ 27-40-610(a)(2), 27-40-630(d), 27-40-790(a)) but not in the casualty section (§ 27-40-650(a)). That decides whether TN's "no abatement" part can be used.
5. Rule 78: the dangling-reference search should cover `notes` coverage pointers ("Lease rows: `id`") in clause and education rows, not only clause text. Why: three SC notes still named the switched-off `casualty-termination-sc` after the scrub.

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.50), 2026-10-04

**Date:** 2026-10-04 · **Settings:** Opus, high effort, built-in browser; research mode not used (no rule 9 trigger). **Scope:** rules 35c and 79 and targeted fixes 3 and 4 only; nothing else reopened (rule 1).

**Source of truth.** The prompt required a row-count check first: `lease-clauses.csv` has 2,876 rows, as stated. The files attached for this task are the only source of truth: `lease-clauses.csv`, `lease-clause-sop.md` 1.50, `lease-clause-topics.md`, this log and `lease-clause-citations-SC.csv`. Where they differ from the earlier part of this chat, they win:
- the library is now 2,876 rows (it was 1,909 at the SOP 1.9 retro);
- `early-termination-ks` now limits the option and fee to a fixed Term (the SC retro proposal, merged);
- `appliances-included` now says "as provided in this Lease and applicable law".

Old outputs deleted at the start: `lease-clauses-SC-retro-delta.csv` and `lease-clause-decision-log-SC-retro.md` (the SOP 1.9 retro).

**Sources (rule 14).**
- **Currency.** The Code and Constitution pages both say "current through the 2025 Session". The whole Code was reloaded: 1,304 chapter pages from 63 title pages, 0 fetch errors, control term 0, and "security deposit" 34 hits as in phase 1.
- **Constitution.** Loaded from the official article PDFs on scstatehouse.gov, all 22 files listed on the Constitution page (Introduction, Preamble, Articles I to XVII including VIII-A, Amendments, Signatures), read with pdf.js in the browser.
- **Saved texts.**
  - 36 primary texts are saved, each matched to the browser by SHA-256 (36 of 36 OK).
  - 17 of them were reused from the SOP 1.9 retro. Each was first compared by hash with the live text today: 16 Chapter 40 sections are byte-identical, and S.C. Code Ann. § 27-40-350 matches the live ratified text of 2026 Act No. 184.
  - 19 are new:
    - Title 27, Chapter 40: S.C. Code Ann. §§ 27-40-110, -240, -520, -530, -660, -780 and -930.
    - Other Title 27: S.C. Code Ann. §§ 27-1-60, 27-33-50, 27-35-60 and 27-39-20.
    - Outside Title 27: S.C. Code Ann. §§ 26-6-30, 31-21-70, 43-33-70, 44-53-1430 and 56-5-2525.
    - S.C. Const. art. I, §§ 2, 10 and 20.

| Rule | Verdict | What was read | Rows changed |
|---|---|---|---|
| **35c** Constitution screen | **Checked, no issue** | The full Constitution (22 official PDFs), searched with collapsed whitespace. Control "General Assembly": 265 hits; nonsense control: 0. Battery, with hits: cannabis, marijuana, hemp, controlled substance or drugs (0); smok, tobacco or vap (1, a delegate's surname); arms, firearm, weapon or militia (19; art. I, § 20 right to bear arms, the rest militia and office-holding); speech, press, assembly, petition, religion, signs or flags (32; art. I, § 2, the rest procedural); privacy, searches or seizures (6, all art. I, § 10); landlord, tenant, lease, rent, lessee, lessor or dwelling (8, all tax and municipal finance); homestead or exemption from attachment (7: art. III, § 28 debtor exemptions left to statute; art. X, § 3 tax); impairing contracts or imprisonment for debt (4: art. I, §§ 4, 19); hunting (6, art. I, § 25). Art. I, §§ 2, 10 and 20 were read section-open. | None. South Carolina has no cannabis article, so `smoking-policy`'s marijuana and vaping ban is untouched (unlike Missouri). Art. I, § 2 ("The General Assembly shall make no law…") and art. I, § 20 restrain the State. Art. I, § 10's "unreasonable invasions of privacy" sits in the search-and-seizure guarantee. None reaches a private lease term, so `common-area-use` (sign rule plus the statutory flag right, S.C. Code Ann. § 27-1-60), `landlords-access` and `inspection-rights` stand. Whether courts apply art. I, § 10 to private landlords is case law, not read. No SC-tagged clause restricts firearms. |
| **79** Re-read before trusting a summary | **Fixed** | **Keyword screen** for secondary sources (Nolo, "sources agree", law-firm and management sites, FindLaw, Justia, fetch-tool, summary) over every SC row's `notes` and every SC segment on a shared row: 0 real hits (1 false positive, "summary ejectment" in `edu-unauthorized-occupant-removal-sc`). The citations file has no secondary-basis row either. **Rows with no recorded basis**, counted from `lease-clauses.csv` notes (rule 79), by group:<br>• **SC's own rows written by a research pass:** 0 of 68.<br>• **SC's own rows created by the 2026-09-29 scrub:** 2 of 2 (`edu-possession-delay-sc`, `edu-casualty-termination-sc`).<br>• **SC segments on shared rows:** 50 of 51 had no basis line. 42 cite sections; 8 are generic and cite none (`utility-payment-evidence`, `addendum-precedence`, `assigned-parking-space`, `guest-policy`, `guest-policy-day-limit`, `fire-safety-grilling`, `hoa-compliance`, `tenant-forward-proceedings-ca`).<br>• **Shared rows tagged SC with no SC segment:** 0.<br>Every section the 42 segments cite was read section-open today, and each segment was parsed sentence by sentence against the statute. | **42 shared rows:** the SC segment now ends with a one-line basis; notes and last_checked only. **Corrected while doing so (SC segment text only):**<br>• `residential-use-only`: dropped "unless otherwise agreed" (§ 27-40-540).<br>• `utilities-responsibility`: missing the § 27-33-50(C) master-meter exception.<br>• `utility-service-continuity`: dropped the "unexplained absence" condition in § 27-40-730(b).<br>• `notices`: the UETA exclusion reaches only a notice "required by law" (§ 26-6-30(B)(2)(c)).<br>• `electronic-signatures`: § 27-40-320's tenant-side condition is possession and payment of rent.<br>• `parking-vehicle-rules`: § 56-5-2525 says "immediately"; one hour is the forfeiture deadline.<br>• `lead-based-paint`: § 44-53-1430's trigger is an identified hazard where a child lives, not a blood-lead result. `edu-lead-hazards-sc` already said this correctly.<br>• `early-termination-ks`: stale pointer to a proposal since merged.<br>**Clause fix found by the re-read:** the old SC segment on `services-utilities-provided` said the landlord's essential-services liability arises "only" for negligent or wilful failure. But § 27-40-610(b) gives actual damages for "any noncompliance" with § 27-40-440, which includes running water, hot water and heat ((a)(4)), with no fault element. The clause's "not liable for any interruption … beyond Landlord's reasonable control" therefore limits a liability arising under law, which § 27-40-330(a)(3) bars, with the penalty in (b). SC was removed from `services-utilities-provided` and tagged on `services-utilities-provided-ks-oh` (first sentence only; the fix 18 states use, and the fix SC already took for parking, storage and renter's insurance).<br>**2 scrub-created rows:** basis carried forward from `possession-delay-sc` and `casualty-termination-sc` (provenance repair, not re-verification).<br>**8 generic segments:** listed above; no section to read.<br>The citations file is a derived summary, so Claude Code refreshes it at sync. |
| **Fix 3** Scrub-trimmed clauses | **Fixed** | `security-deposit-return-sc`, diffed against the pre-scrub text (phase-1 delivery, 2026-09-28) and read against S.C. Code Ann. §§ 27-40-410, 27-40-450 and 27-40-510. **Required-content battery**, run code-wide before deciding: "rental agreement/lease shall/must contain…" (14 hits), "contained/set forth in the rental agreement/lease" (2), "lease specifies … bold/conspicuous/notice" (4), conspicuous near rental agreement/lease (8), "before/at signing/consummation" (4), "landlord shall disclose … in writing" (1). The landlord-tenant requirements are S.C. Code Ann. §§ 27-37-10(B), 27-40-710(B), 27-40-530(b)(2), 27-40-440(a)(5) and 27-40-420. Each is still carried, unchanged since phase 1, by `nonpayment-notice-sc`, `periodic-services-entry-sc`, `appliances-excluded-sc` and `landlord-disclosure-sc`; `meter-conservation-charge-notice-sc` (§ 58-37-50(H)(3)) is also unchanged. § 27-40-410(c) is a pre-signing statement with no "with the lease" vehicle words. | **`security-deposit-return-sc` (body restored):** the trim had left the withholding right without the statute's conditions. Restored "only"; the itemized written notice with any amount due, within 30 days after the later of termination plus possession or the tenant's demand (§ 27-40-410(a); treble damages under (b)); and the § 27-40-410(c) rule that a landlord of more than four adjoining units who used differing deposit standards and gave no pre-signing statement may not use the excess over the lowest comparable deposit for damages. The (c) condition was not in the pre-scrub text either, but the trimmed clause could break it. Neither is a number the M.13 cap check can catch. Not restored: last-known-address mailing (a landlord protection) and the sale rules, which stay in `edu-security-deposit-rules-sc` and break no limit when omitted. Wear and tear stays in the tagged `security-deposit-use`. **Other scrubbed rows, no change:** `security-deposit-standards-sc` was demoted from CONDITIONAL to RECOMMENDED. Rule 78 counts that as a trim, so the vehicle words were re-read: § 27-40-410(c) is a pre-signing statement that may be in any writing ("post … or provide each prospective tenant with a statement"), and the clause's own condition stays in its first sentence and its notes, so the demotion holds. `possession-delay-sc`, `dv-lease-termination-sc` and `casualty-termination-sc` restated tenant rights (§§ 27-40-620, 27-40-350, 27-40-650), and no statute requires their text in the lease. |
| **Fix 4** Rule 62 vetting: `default-by-tenant` carve-out in its own sentence reaching both limbs | **Vouched, supported**; shared text not edited | S.C. Code Ann. §§ 27-40-710(A)-(C), 27-37-10(B) and 27-40-540, plus SC's own segment on the row. | None (vouch only). **Q1, can it drop a cure or pre-suit notice SC requires for nonpayment?** No. SC requires written notice of nonpayment and 5 days from the due date. The notice duty is satisfied once per lease term, or by the lease itself (`nonpayment-notice-sc`). The 5-day window always runs: no SC route lets a landlord terminate for unpaid rent without it, so the self-limiting carve-out cannot remove it. **Q2, does it change what the clause promises in SC?** Only in one way. Without `nonpayment-notice-sc`, the rent limb today promises a fresh written notice for every default; after the edit the lease would follow the statute (one notice per lease term). That is exactly the case Taylor settled for Indiana (2026-10-03) and Pennsylvania (2026-10-04): the lease follows the statute, with no optional notice clause. SC's segment has no "gives up" or "kept on purpose" wording about notice; its "gives up" note is about the late-fee sentence, which the edit does not touch. **Education row** that should tell landlords they may still give written notice first: `edu-eviction-process-sc` (Claude Code updates it at the merge). Please file this under "Vouches given" in §9, Propagation notes. |

**Delta (`lease-clauses-SC-retro-delta.csv`): 46 changed rows, 0 new.**
- 42 shared rows: SC note segment and last_checked only.
- `services-utilities-provided`: −SC, plus SC note.
- `services-utilities-provided-ks-oh`: +SC, plus SC note.
- `security-deposit-return-sc`: body, notes and last_checked.
- `edu-possession-delay-sc` and `edu-casualty-termination-sc`: notes and last_checked.

SC stays at 121 active rows, and every other state's count is unchanged. Checks: every shared row's other state segments are byte-identical, with segments ended at " | " plus any capital letter (rule 79). There are no duplicate SC clause topic_keys, and no SC row sits beside a base it supersedes. Citations use the `S.C. Code Ann. §` form with no leakage into other states' segments. The header and CRLF records match the master, and the master round trip is byte-identical.

### Proposed SOP changes
1. Rule 79: when a shared row's state segment says a liability arises "only" in some cases (fault, notice), re-read every remedy section for that duty, not only the one cited. Why: SC's `services-utilities-provided` segment rested on § 27-40-630(a) (negligent or wilful) and missed § 27-40-610(b) (any noncompliance with § 27-40-440), which made the clause's disclaimer an exculpation.
2. Rule 78: when restoring conditions to a scrub-trimmed clause, also check the statute's conditions that the pre-scrub text never carried; the trim's diff alone won't show them. Why: § 27-40-410(c)'s differing-standards limit on deductions was missing before the scrub too, and the trimmed withholding clause could break it.
3. Rule 35: search the constitution with whitespace collapsed, and record which provisions bind only the State ("The General Assembly shall make no law…"). Why: SC's speech, arms and privacy hits all restrain government, which settles the shared-clause question without reaching case law.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 2b10851`: 46 rows updated (`security-deposit-return-sc` body restored; two scrub-created rows' basis carried forward; SC's segment on 43 shared rows, including SC's move from `services-utilities-provided` to `services-utilities-provided-ks-oh`), no new rows, nothing refused. SC active 121, unchanged; no same-topic pairs.
- **Citations file:** the changed rows re-dated and noted with their basis; SC's `services-utilities-provided` row is now `services-utilities-provided-ks-oh` (supersedes the base) and cites §§ 27-40-610(b), 27-40-440(a)(4), 27-40-330(a)(3).
- **Rule 62:** SC supports MN's `default-by-tenant` edit under Taylor's settled notice decision (IN, PA); at the merge, `edu-eviction-process-sc` should say landlords may still give written notice first (backlog).
- **Guards:** all pass. **Statute spot-check, 2 of 2, on scstatehouse.gov:** S.C. Code Ann. § 27-40-610(b) (actual damages "for any noncompliance by the landlord with the rental agreement or SECTION 27-40-440", no fault element) and § 27-40-410(a) (itemized written notice within thirty days after termination and delivery of possession and demand, whichever is later).
- **SOP 1.51:** all three proposals adopted (rules 35, 78, 79). SC's 35c and 79 cells set to ✓.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where SC law lets Landlord proceed without a cure opportunity. Uniform; no SC override. `edu-eviction-process-sc` now says the lease doesn't promise a fresh notice for each late payment where the bold lease notice satisfies the statute, and that landlords may still give one.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for SC. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any SC row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach SC's law; to be confirmed at SC's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-07): Desktop's running record

## SC topic gaps — running record (SOP 1.98, 2026-11-07) — COMPLETE

Final delivery 2026-11-07: `lease-clauses-SC-gaps-delta.csv` (266 records: 223 edu rows + 1 optional clause `licensee-status-disclosure-sc`, all states=SC; 42 shared clauses tagged SC) and `gaps-log-SC.md`. 253/253 topics answered; 617 statute quotes machine-matched to the saved official text; independent check 2 rounds (round 1: 4 ERROR / 4 GAP / 16 MINOR, all fixed; round 2: 0 ERROR / 1 GAP / 10 MINOR, all fixed; 11 rows edited after the last round are listed in log §5).

Workspace: `/home/claude/scgaps/` (rows/b1-b7.py, log/, tools/assemble.py, batteries.jsonl, check-round1.md, check-round2.md). Corpus saved 2026-11-07 from scstatehouse.gov via the built-in browser (Code parts sha 5c91a795 / 0a1753de / 0ad534b0 / 8d61b9a4; regs; constitution; acts 2024-26). Late fetches read in-page: Regs. ch. 27 (Word, sha df135597…) and "Chapter 61-80 through 61-92" (PDF, sha 042ace23…).

### Batches
1. Waivers/remedies/Chapter 40 core — 33 topics (`edu-waiver-by-acceptance-sc` replaced the batch-1 absence row: § 27-37-150).
2. Domestic violence — 6 topics (§ 27-40-350, 2026 Act No. 184 eff 2026-05-18).
3. Deposits/fees — 26 topics; 6 tags.
4. Local limits/inspections/nuisance — 18 topics (+ `edu-lease-option-disclosure-sc`, `licensee-status-disclosure-sc` on required-disclosures).
5. Unlawful occupants/ejectment — 16 topics (2026 Act No. 252 eff 2026-06-30; Act No. 214 eff 2027-01-01).
6/7. 154 remaining topics drafted by two parallel agents (b6: 63 rows, 25 tags; b7: 66 rows, 11 tags), reviewed and machine-checked.

### Findings needing Taylor (log §6)
1. `early-termination-ks` (SC tagged): "30% of the remaining Rent" limb fails the cautious reading of § 27-40-330(c) with § 27-40-730(c)/§ 27-40-50(a); proposed `early-termination-sc` override with the flat one-month fee (as GA/AZ). Not done (scope fence).
2. `nonpayment-notice-sc` statutory "no other notice" vs CARES 30-day notice: proposed one-sentence pointer in `edu-eviction-process-sc`.
Other findings (no approval strictly needed): `edu-lead-hazards-sc` misses § 44-53-1440 and Act 146 agency change; four no-disclosure rows (radon, mold, drug lab, flood) incomplete for lease-options (§ 27-50-20(3)); `hoa-compliance` optional notes line; R. 103-535(O) vs § 27-33-50(B).
Decision for Taylor's awareness: `arbitration-agreement` not tagged for SC (§ 15-48-10(a) first-page notice).

# Topic gaps pass (end-of-run consistency pass, 2026-11-07): Desktop's log

## South Carolina — topic gaps log (end-of-run consistency pass, SOP 1.98)

Run date 2026-11-07. Scope: answer the 253 topics in `missing-topics-SC.md` with new rows (or SC tags on existing shared rows), plus the 11 South Carolina items in GAPS-PROMPT.md. No existing row's text was changed. This log is cumulative and is replaced at each batch delivery.

**Status:** complete. All 253 topics are answered by 224 new rows (223 education rows and 1 optional lease clause, `licensee-status-disclosure-sc`) plus South Carolina tags on 42 existing shared clauses: 266 delta records. Every single-quoted statute quotation (617) was matched by script against the saved official text. The independent check ran two rounds (§5). Two findings need your approval (§6 items 1 and 2).

### §1 Sources, channel, currency

**Channel.** The workspace shell can't reach scstatehouse.gov (the proxy returns 403), so every source was fetched with the built-in browser on Taylor's computer, saved as a blob download to the Downloads folder, staged into the workspace, and checked against a SHA-256 computed in the page over the same bytes (37 files, all matched; `manifest-downloads.txt`). Every quotation in a row was then checked by script against the saved text of the cited section (SOP rule 59).

**Code of Laws.** All 1,319 chapter pages of the official Code of Laws on scstatehouse.gov, saved 2026-11-07 in four parts (part1 5c91a795…, part2 0a1753de…, part3 0ad534b0…, part4 8d61b9a4…). Each page reads "current through the 2026 Session of the General Assembly". Split into 31,342 sections by their SECTION headers; 137 sections print two versions (for example S.C. Code Ann. § 8-21-1010, a version effective until January 1, 2027 and one effective from that date), and rows quote the version in force and say when the other starts.

**Regulations.** Code of Regulations chapters 8, 28, 60, 61 (sub-files 1-17, 18-58 and 71), 64, 65, 71, 103, 105 and 117, saved as the official PDFs 2026-11-07. Each reads "current through State Register Volume 50, Issue 3, effective March 27, 2026". A regulation chapter not in this set is a fetch request, not an absence (SOP rule 36). Two more were fetched late in the pass to answer fetch requests: "Chapter 61-80 through 61-92" (official PDF, 568,045 bytes, SHA-256 042ace237b273aa3158d34e83f7ec945ec41b300effe44e108c5e29dde357e80, for Regs. 61-86.1) and chapter 27 (official Word file from getfile.php, 352,696 bytes, SHA-256 df1355971bdfc291e1ca2de2d245d826d452aa189f35c5f1e4b0689d06719119). Both were read in the page: the PDF with pdf.js 4.0.379 from cdnjs, the Word file by unzipping document.xml. Every other chapter 61 file (61-62 to 61-79, 61-93 to 61-125) was screened in the page for lead rules. Both downloads failed to land in the Downloads folder, so they aren't in the workspace and their text isn't available to the quote checker.

**Constitution.** The preamble, articles I-XVII (with VIII-A) and the amendments page, saved as the official PDFs 2026-11-07.

**Session laws.** The 2024, 2025 and 2026 act lists (148, 94 and 180 acts) and each act's text page, saved 2026-11-07 (da84b08e…). Effective-date sections were read for each 2026 act relied on (SC item 11).

**Court rules.** Cited as `Rule 4(d), SCRCP` and `Rule 1, SCRMC`. The South Carolina Judicial Branch's rule set doesn't print an abbreviation for the magistrates' court rules; SCRMC is used for consistency with the earlier SC logs.

**Case law.** Not searched (SOP). Where a topic turns on case law, the row says so and gives the cautious course (Part 5).


### §2 Topics answered

253 of 253 topics answered so far (224 new rows, 42 tagged rows). One line per topic: topic, row id, result, citation.

- `habitability-waiver`: `edu-habitability-waiver-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-330(b); S.C. Code Ann. § 27-40-340
- `habitability-modifiable`: `edu-habitability-modifiable-sc` (edu, CONSTRAINED), Present; S.C. Code Ann. § 27-40-440(a)(5); S.C. Code Ann. § 27-40-440(a)(4); S.C. Code Ann. § 27-40-440(b)
- `maintenance-duty-shift`: `edu-maintenance-duty-shift-sc` (edu, CONSTRAINED), Present; S.C. Code Ann. § 27-40-440(c); S.C. Code Ann. § 27-40-440(d); S.C. Code Ann. § 27-40-440(d)(1)
- `notice-to-quit-waiver`: `edu-notice-to-quit-waiver-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-710(A); S.C. Code Ann. § 27-40-770(a)
- `showing-notice-waiver`: `edu-showing-notice-waiver-sc` (edu, CONSTRAINED), Present; S.C. Code Ann. § 27-40-530(a); S.C. Code Ann. § 27-40-530(c); S.C. Code Ann. § 27-40-330(a)(1)
- `security-deposit-nonwaiver`: `edu-security-deposit-nonwaiver-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-410(b)
- `part5-nonwaivable`: `edu-part5-nonwaivable-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-330(b); S.C. Code Ann. § 27-40-330(c)
- `smoke-drift-waiver`: `edu-no-smoke-drift-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 5-25-1310 to 5-25-1340, 23-9-155; S.C. Code Ann. § 44-95-20; S.C. Code Ann. § 44-95-20(5)
- `jury-waiver`: `edu-jury-waiver-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-37-80; S.C. Const. art. I, § 14; S.C. Code Ann. §§ 14-7-1090, 14-25-125, 16-3-20, 62-1-306
- `confession-of-judgment`: `edu-confession-of-judgment-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-330(a)(2); S.C. Code Ann. § 27-40-330(b)
- `exculpatory-clauses`: `edu-exculpatory-clauses-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-330(a)(3); S.C. Code Ann. § 27-40-330(b)
- `unconscionability`: `edu-unconscionability-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-230(a)(1); S.C. Code Ann. § 27-40-230(a)(2); S.C. Code Ann. § 27-40-230(a)(3)
- `attorney-fees`: `edu-attorney-fees-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-710(C); S.C. Code Ann. § 27-40-750; S.C. Code Ann. § 27-40-770(c)
- `collection-fee`: `edu-no-collection-fee-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-37-155(B)(5); S.C. Code Ann. §§ 37-2-413, 37-3-404; S.C. Code Ann. § 37-2-106
- `notice-service-fee`: `edu-no-notice-service-fee-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 58-37-50; S.C. Code Ann. § 4-12-30; S.C. Code Ann. § 27-40-210(11)
- `eviction-penalty-clause-ban`: `edu-no-eviction-fee-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 16-17-560; S.C. Code Ann. § 8-21-1010(A)(9); S.C. Code Ann. § 8-21-1010
- `liquidated-damages`: `edu-liquidated-damages-sc` (edu, CONSTRAINED), Present; S.C. Code Ann. § 27-40-330(c)
- `casualty-and-mitigation-waivable`: `edu-casualty-and-mitigation-waivable-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 27-40-650(a); S.C. Code Ann. § 27-40-50(a)
- `waiver-by-acceptance`: `edu-waiver-by-acceptance-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-37-150; S.C. Code Ann. §§ 27-40-320, 27-37-150; S.C. Code Ann. § 27-40-320(a)
- `knowing-use-penalty`: `edu-knowing-use-penalty-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-330(b); S.C. Code Ann. § 27-40-350, 2026
- `abandonment-and-mitigation`: `edu-abandonment-and-mitigation-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-730(a); S.C. Code Ann. § 27-40-730(b); S.C. Code Ann. § 27-40-730(c)
- `landlord-breach-remedy`: `edu-landlord-breach-remedy-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-610(a); S.C. Code Ann. § 27-40-610(a)(2); S.C. Code Ann. § 27-40-610(b)
- `landlord-remedies-termination`: `edu-landlord-remedies-termination-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-710(A); S.C. Code Ann. § 27-40-710(C)
- `tenant-repair-remedies`: `edu-tenant-repair-remedies-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-630(a); S.C. Code Ann. § 27-40-630(a)(1); S.C. Code Ann. § 27-40-630(a)(2)
- `rent-receipt-anti-waiver`: `edu-rent-receipt-anti-waiver-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-340; S.C. Code Ann. § 27-40-410(e); S.C. Code Ann. § 27-40-420(b)
- `rent-into-court-counterclaim`: `edu-rent-into-court-counterclaim-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-790; S.C. Code Ann. § 27-40-790(a); S.C. Code Ann. § 27-40-790(b)
- `landlord-lien`: `edu-landlord-lien-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-740(a); S.C. Code Ann. § 27-40-740(b); S.C. Code Ann. § 27-39-210
- `habitability-materiality`: `edu-habitability-materiality-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-610(a); S.C. Code Ann. § 27-40-630(a); S.C. Code Ann. § 27-40-640(b)(1)
- `habitability-presumption`: `edu-no-habitability-presumption-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(5); S.C. Code Ann. § 27-40-910(e)
- `habitability-statement`: `edu-no-habitability-statement-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-430; S.C. Code Ann. § 27-40-440(a); S.C. Code Ann. § 27-40-710(B)
- `cure-and-eviction-grounds`: `edu-cure-and-eviction-grounds-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-710(A); S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-540
- `tenant-statutory-duties`: `edu-tenant-statutory-duties-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-510; S.C. Code Ann. § 27-40-510(1); S.C. Code Ann. § 27-40-510(2)
- `confirmed-absences-habitability`: `edu-confirmed-absences-habitability-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-630(c); S.C. Code Ann. § 27-40-790; S.C. Code Ann. § 27-40-800(d)
- `dv-confidentiality`: `edu-no-dv-confidentiality-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 1-7-1110, 16-3-2070, 63-7-1990; S.C. Code Ann. § 16-25-130(B); S.C. Code Ann. § 16-25-130(B)(2)(b)
- `dv-deposit-timing`: `edu-dv-deposit-timing-sc` (edu, CONSTRAINED), Present; S.C. Code Ann. § 27-40-350(A)(2); S.C. Code Ann. § 27-40-350(C); 2026 Act No. 184
- `dv-eviction-protection`: `edu-dv-eviction-protection-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-350(D)(1); S.C. Code Ann. § 27-40-350(E); S.C. Code Ann. § 27-40-350(C)
- `dv-lockchange`: `edu-no-dv-lockchange-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-530(e); S.C. Code Ann. § 20-4-60(C)(3); S.C. Code Ann. § 20-4-60(A)(2)
- `dv-protection-order-chapter-moved`: `edu-dv-protection-order-chapter-moved-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-210(20); 2026 Act No. 184; S.C. Code Ann. § 20-4-10
- `dv-qualifying-documents`: `edu-dv-qualifying-documents-sc` (edu, CONDITIONAL), Present; S.C. Code Ann. § 27-40-350(B); S.C. Code Ann. § 27-40-210(20); S.C. Code Ann. § 27-40-350(A)(1)
- `deposit-cost-schedule`: `edu-no-deposit-cost-schedule-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-510(8); S.C. Code Ann. § 27-40-330(a)(1)
- `deposit-escheat`: `edu-deposit-escheat-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-18-20(10)(b); S.C. Code Ann. § 27-18-20(8); S.C. Code Ann. § 27-18-30(A)
- `deposit-installments`: `edu-no-deposit-installments-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 11-48-50; S.C. Code Ann. § 27-40-210(18)
- `deposit-last-month-rent`: `edu-no-deposit-last-month-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-410(b); S.C. Code Ann. § 27-40-210(18)
- `deposit-surrender-notice`: `edu-no-deposit-surrender-notice-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. §§ 27-40-410; S.C. Code Ann. § 27-40-330(a)(1)
- `expedited-deposit-disposition`: `edu-no-expedited-deposit-disposition-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-130(a); S.C. Code Ann. § 27-40-410(b)
- `fee-in-lieu-of-deposit`: `edu-no-fee-in-lieu-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(18)
- `fee-transparency`: `edu-no-fee-transparency-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 40-8-150, 27-32-60; S.C. Code Ann. § 39-5-20(a); S.C. Code Ann. § 39-5-10(b)
- `fee-unprovided-service`: `edu-no-fee-unprovided-service-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-47-310(E); S.C. Code Ann. § 39-5-20(a)
- `holding-deposit`: `edu-no-holding-deposit-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 22-3-10(13); S.C. Code Ann. § 27-18-175; S.C. Code Ann. § 37-11-90
- `nonrefundable-deposit-separate-notice`: `edu-no-nonrefundable-separate-notice-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-50-240(B); S.C. Code Ann. § 37-2-706; S.C. Code Ann. § 27-40-210(18)
- `pet-fees`: `edu-pet-fees-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-210(18); S.C. Code Ann. § 40-57-136(C)(2); S.C. Code Ann. § 27-40-210(11)
- `security-deposit-holding`: `edu-security-deposit-holding-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-210(18); S.C. Code Ann. § 40-57-136(A)(3); S.C. Code Ann. § 40-57-136(C)(1)(a)
- `security-deposit-on-sale`: `edu-security-deposit-on-sale-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-450(a); S.C. Code Ann. § 27-40-410(e); S.C. Code Ann. § 27-40-450(b)
- `security-deposit-penalty`: `edu-security-deposit-penalty-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-410(b); S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-410(c)
- `statutory-caps`: `edu-statutory-caps-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-39-60; S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-660
- `late-fee-limit`: `edu-no-park-late-fee-cap-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-47-310(D)(7)
- `subsidy-late-fee`: `edu-no-subsidy-late-fee-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(11)
- `utility-deposit-return`: `edu-utility-deposit-return-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(18); S.C. Code Ann. § 27-18-90(A)
- `alarm-tampering-fee`: `edu-alarm-tampering-fee-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 5-25-1330(C); S.C. Code Ann. § 27-40-510(6)
- `accessory-dwelling-unit`: `edu-no-adu-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 6-29-720(A); S.C. Code Ann. § 27-39-60
- `single-family-zone-lease-limit`: `edu-no-owner-occupancy-zone-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 11-11-156, 12-37-220; S.C. Code Ann. § 27-39-60
- `landlord-registration`: `edu-no-landlord-registration-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 6-1-825; S.C. Code Ann. §§ 40-57-370, 40-57-520; S.C. Code Ann. § 27-40-420(a)
- `landlord-liability-insurance`: `edu-no-landlord-insurance-mandate-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 37-4-202; S.C. Code Ann. § 38-75-60; S.C. Code Ann. § 27-39-60
- `rental-inspection`: `edu-rental-inspection-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 31-15-20; S.C. Code Ann. § 31-15-30(4); S.C. Code Ann. §§ 31-15-320, 31-15-330
- `substandard-property-receivership`: `edu-no-substandard-receivership-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 31-15-20; S.C. Code Ann. § 31-15-30(6); S.C. Code Ann. § 23-9-150
- `health-district-rental-rules`: `edu-no-health-district-rules-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(1); S.C. Code Ann. § 27-39-60
- `good-cause-notice`: `edu-no-good-cause-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-770(a); S.C. Code Ann. § 27-40-910(a); S.C. Code Ann. § 27-39-60
- `tpa-notice`: `edu-condo-conversion-tenant-offer-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-31-420(A); S.C. Code Ann. § 27-31-420(A)(3); S.C. Code Ann. § 27-31-420(B)
- `tpa-exemption-notice`: `edu-no-tpa-exemption-notice-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-31-420; S.C. Code Ann. § 27-39-60
- `tpa-sunset`: `edu-no-tpa-sunset-sc` (edu, RECOMMENDED), Absent; 1986 Act No. 336; 2026 Act No. 155
- `required-disclosures`: `edu-required-disclosures-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-420(a); S.C. Code Ann. § 27-40-410(c); S.C. Code Ann. § 27-40-710(B)
- `portfolio-thresholds`: `edu-portfolio-thresholds-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-440(a)(3); S.C. Code Ann. § 27-40-410(c); S.C. Code Ann. § 27-40-910(e)
- `rent-demand-bar`: `edu-no-rent-demand-bar-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-640(a); S.C. Code Ann. § 27-40-790(a); S.C. Code Ann. § 27-40-630(a)
- `condemned-premises-rent-bar`: `edu-no-condemned-rent-bar-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 31-15-30(4); S.C. Code Ann. § 27-40-440(a)(2); S.C. Code Ann. § 27-40-610
- `inspection-condemnation-disclosure`: `edu-no-condemnation-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 31-15-30(2); S.C. Code Ann. § 31-15-30(4)
- `subsidized-inspection-refusal`: `edu-no-subsidized-inspection-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 4-9-195; S.C. Code Ann. § 31-21-40(4)
- `nuisance`: `edu-nuisance-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 15-43-10(A); S.C. Code Ann. § 15-43-80; S.C. Code Ann. § 15-43-110
- `required-disclosures`: `edu-lease-option-disclosure-sc` (edu, REQUIRED), Present; S.C. Code Ann. § 27-50-20; S.C. Code Ann. § 27-50-20(3); S.C. Code Ann. § 27-50-40(A)
- `required-disclosures`: `licensee-status-disclosure-sc` (clause, CONDITIONAL), Present; S.C. Code Ann. § 40-57-135(F)(1); S.C. Code Ann. § 40-57-135(F)(1)(c); S.C. Code Ann. § 40-57-135(F)(1)(a)
- `trespass-notice`: `edu-trespass-notice-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 16-11-620; S.C. Code Ann. § 27-37-310; 2026 Act No. 252
- `expedited-criminal-eviction`: `edu-no-expedited-criminal-eviction-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-710(A)
- `criminal-activity`: `edu-criminal-activity-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 44-53-380(a)(6)
- `possession-bond`: `edu-possession-bond-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-800(b); S.C. Code Ann. § 27-40-800(c); S.C. Code Ann. § 27-40-800(d)
- `eviction-hardship-stay`: `edu-no-eviction-hardship-stay-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-800(b); S.C. Code Ann. § 27-37-160; S.C. Code Ann. §§ 27-40-800
- `post-eviction-property`: `edu-post-eviction-property-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-710(D); S.C. Code Ann. § 27-40-730(d); S.C. Code Ann. § 27-37-160
- `tenant-records`: `edu-tenant-records-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-790(a); S.C. Code Ann. § 40-57-136(F)(2)(c); S.C. Code Ann. § 40-57-136(F)(1)
- `eviction-service-party`: `edu-eviction-service-party-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-420(a); S.C. Code Ann. § 27-40-420(c); S.C. Code Ann. § 27-37-30(A)
- `minor-tenant-filing`: `edu-minor-tenant-filing-sc` (edu, RECOMMENDED), Present / Absent; S.C. Const. art. XVII, § 14; S.C. Code Ann. § 63-5-310; S.C. Code Ann. § 27-37-160
- `redemption`: `edu-no-redemption-right-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-37-150; S.C. Code Ann. § 27-40-790(a)
- `forfeiture-redemption`: `edu-no-forfeiture-relief-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-640(a); S.C. Code Ann. § 27-40-790
- `social-security-defense`: `edu-no-benefit-delay-defense-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-710(B)
- `tenant-bankruptcy`: `edu-no-tenant-bankruptcy-rule-sc` (edu, RECOMMENDED), Absent; FEDERAL: 11 U.S.C. § 362(a
- `confirmed-absences-outside-title`: `edu-confirmed-absences-outside-title-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-37-200(5); S.C. Code Ann. § 27-37-210; S.C. Code Ann. § 27-37-230(A)
- `lockout-for-rent-delinquency`: `edu-no-rent-lockout-sc` (edu, PROHIBITED), Present; S.C. Code Ann. § 27-40-760; S.C. Code Ann. § 27-40-660; S.C. Code Ann. § 27-40-330(a)(1)
- `written-notice-required`: `edu-written-notice-required-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-240(B); S.C. Code Ann. § 27-40-240(B)(3); S.C. Code Ann. §§ 27-40-420(a), 27-40-710(A)
- `actual-notice-method`: `edu-no-agreed-notice-method-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-240(B); S.C. Code Ann. § 27-40-240(B)(1); S.C. Code Ann. § 27-40-240(B)(3)
- `adverse-proceeding-notice`: `edu-no-adverse-proceeding-notice-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-35-80; S.C. Code Ann. § 27-35-50; S.C. Code Ann. § 31-15-60
- `animal-care-access`: `edu-no-animal-care-entry-right-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 27-37-240, 27-37-250; S.C. Code Ann. § 27-40-530(d); S.C. Code Ann. §§ 27-40-720
- `alt-housing`: `edu-no-alt-housing-duty-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 39-5-145; S.C. Code Ann. § 27-40-650(a); S.C. Code Ann. § 27-40-630(a)(1)
- `asbestos-hazards`: `edu-asbestos-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-50-20; S.C. Code Ann. § 27-50-20(3); S.C. Code Ann. § 27-50-40(A)(6)
- `association-obligations-disclosure`: `edu-no-association-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-1-60; S.C. Code Ann. §§ 27-31-420 to 27-31-440; S.C. Code Ann. § 27-30-130(A)(1)
- `hoa`: `edu-hoa-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-31-100(h); S.C. Code Ann. § 27-31-170; S.C. Code Ann. § 27-31-280
- `automatic-renewal`: `edu-no-automatic-renewal-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-31-420; S.C. Code Ann. § 27-40-910; S.C. Code Ann. § 27-40-310(a)
- `balcony-inspection`: `edu-no-balcony-inspection-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 45-5-50; S.C. Code Ann. § 6-9-50(A); S.C. Code Ann. § 6-9-60
- `binding-arbitration`: `edu-binding-arbitration-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 15-48-10(a); S.C. Code Ann. § 15-48-10(b)(4); S.C. Code Ann. § 27-40-130(a)
- `cannabis`: `edu-cannabis-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 44-53-370(c); S.C. Code Ann. § 44-53-110; S.C. Code Ann. § 46-55-20(A)(1)
- `certificate-of-occupancy-disclosure`: `edu-no-certificate-of-occupancy-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-31-30; S.C. Code Ann. § 6-9-50(A); S.C. Code Ann. § 27-40-440(a)(1)
- `children-occupancy`: `edu-children-occupancy-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 31-21-30(6); S.C. Code Ann. § 31-21-40(1); S.C. Code Ann. § 31-21-40(2)
- `cold-weather-vacate-notice`: `edu-no-cold-weather-vacate-notice-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 40-10-20; S.C. Code Ann. § 27-40-510(5); S.C. Code Ann. § 27-40-530(b)(1)
- `communal-land-lease-approval`: `edu-communal-land-lease-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-15-10; S.C. Code Ann. § 27-15-20; S.C. Code Ann. § 27-16-30(10)
- `construction-liens`: `edu-construction-liens-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 29-5-10(a); S.C. Code Ann. § 27-40-630(c)
- `consumer-protection-act`: `edu-consumer-protection-act-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 39-5-20(a); S.C. Code Ann. § 39-5-10(b); S.C. Code Ann. § 39-5-40(a)
- `disaster-duties`: `edu-disaster-duties-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 39-5-145(B)(1)(b); S.C. Code Ann. § 39-5-145(C)(1)(b); S.C. Code Ann. § 39-5-145(D)
- `disaster-displaced-guests`: `edu-no-disaster-guest-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 31-6-90, 31-7-90; S.C. Code Ann. §§ 25-9-20, 25-9-420; S.C. Code Ann. § 39-5-145(B)(1)(b)
- `defective-drywall-disclosure`: `edu-no-drywall-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 40-11-410; S.C. Code Ann. § 27-50-20; S.C. Code Ann. § 27-50-20(3)
- `designated-repairer`: `edu-no-designated-repairer-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-630; S.C. Code Ann. § 27-40-440(c); S.C. Code Ann. § 27-40-630(a)(1)
- `disability-accommodation`: `edu-disability-accommodation-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 31-21-70(G)(2); S.C. Code Ann. § 31-21-70(G)(1); S.C. Code Ann. § 31-21-40(6)
- `double-letting`: `edu-no-double-letting-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-620(a); S.C. Code Ann. § 27-40-620(a)(1); S.C. Code Ann. § 27-40-620(b)
- `electric-submetering-disclosure`: `edu-no-submetering-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 58-27-10(7); S.C. Code Ann. § 58-33-220(20); S.C. Code Ann. § 27-33-50(C)
- `employee-screening`: `edu-no-employee-screening-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 40-57-510(F)
- `entity-landlord-court-representation`: `edu-entity-landlord-court-representation-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 33-1-103; S.C. Code Ann. § 31-3-70; 2026 Act No. 233
- `environmental-event-termination`: `edu-no-environmental-event-termination-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 44-4-570; S.C. Code Ann. § 27-40-650(a); S.C. Code Ann. § 27-40-650(a)(1)
- `ev-charging-requirements`: `edu-ev-charging-requirements-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 58-27-1060(A); S.C. Code Ann. § 58-27-1060(A)(1); S.C. Code Ann. § 27-40-310(a)
- `ev-charging-shared-area`: `edu-ev-charging-shared-area-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(3)
- `ev-charging-end-of-tenancy`: `edu-ev-charging-end-of-tenancy-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-510(8); S.C. Code Ann. § 27-40-730(d)
- `family-child-care`: `edu-family-child-care-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 63-13-210(A); S.C. Code Ann. § 27-40-540
- `home-business`: `edu-home-business-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 48-60-20; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-39-60
- `fire-code-standard`: `edu-fire-code-standard-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 6-9-50(A); S.C. Code Ann. § 6-9-60; S.C. Code Ann. § 27-40-440(a)(1)
- `fire-sprinkler-duty`: `edu-no-fire-sprinkler-duty-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 12-6-3622, 12-37-220, 12-37-3130; S.C. Code Ann. § 6-9-55(B); S.C. Code Ann. § 23-9-155
- `firearms`: `edu-firearms-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 23-31-220(A)(2); S.C. Code Ann. § 23-31-220(B); S.C. Code Ann. § 16-11-620
- `foreclosure`: `edu-foreclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-35-50; S.C. Code Ann. § 27-31-210(a); FEDERAL: Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note (cited for context, not read in this pass
- `foreign-ownership`: `edu-foreign-ownership-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-13-10; S.C. Code Ann. § 27-13-30; S.C. Code Ann. § 27-13-40
- `frozen-standard-incorporation`: `edu-code-editions-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 6-9-50(A); S.C. Code Ann. § 6-9-40(A); S.C. Code Ann. § 1-34-30(A)
- `guest-rights`: `edu-no-guest-rights-statute-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-510(7); S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-520(a)
- `hazardous-contamination-disclosure`: `edu-no-contamination-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-50-40(A)(6); S.C. Code Ann. § 27-50-20; S.C. Code Ann. § 27-50-20(3)
- `heating`: `edu-heating-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-440(a)(4); S.C. Code Ann. § 27-40-440(a)(5); S.C. Code Ann. § 27-40-210(17)
- `homestead-waiver`: `edu-no-homestead-waiver-sc` (edu, RECOMMENDED), Absent; S.C. Const. art. III, § 28; S.C. Code Ann. § 15-41-30(A); S.C. Code Ann. § 27-40-740
- `infirmity-termination`: `edu-no-infirmity-termination-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-730(c); S.C. Code Ann. § 31-21-70(G)(2)
- `key-control-policy`: `edu-no-key-control-policy-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-530(e); S.C. Code Ann. § 27-40-530(d); S.C. Code Ann. § 27-40-530(d)(1)
- `lead-state-notices`: `edu-lead-state-notices-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 44-53-1430(A)(1); S.C. Code Ann. § 44-53-1430(A)(2); S.C. Code Ann. § 44-53-1430(B)
- `lead-safe-certification`: `edu-no-lead-safe-certification-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 44-53-1440; S.C. Code Ann. § 44-53-1320(4); 2026 Act No. 146
- `lease-content-requirements`: `edu-lease-content-requirements-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-420(a); S.C. Code Ann. § 27-40-410(c); S.C. Code Ann. § 27-40-530(b)(2)
- `lease-copy`: `edu-no-lease-copy-duty-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 39-20-40; S.C. Code Ann. § 40-57-135(D)(1); S.C. Code Ann. § 40-57-135(D)(1)(a)
- `lease-notice-initial-requirement`: `edu-no-lease-initials-requirement-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-37-10; S.C. Code Ann. § 27-40-530(b)(2)
- `lease-registration`: `edu-lease-recording-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 30-7-10; S.C. Code Ann. § 27-35-50
- `lease-term-limitation`: `edu-lease-term-limits-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-23-60; S.C. Code Ann. § 32-3-10(4); S.C. Code Ann. § 30-7-10
- `lease-type-parity`: `edu-no-lease-type-parity-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-310(d); S.C. Code Ann. § 27-40-770(a)
- `lease-type-size`: `edu-no-lease-type-size-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 27-40-710(B), 27-37-10, 27-40-530(b)(2); S.C. Code Ann. § 40-57-135(F)(1)(c); S.C. Code Ann. § 15-48-10(a)
- `inspection-notice-penalty`: `edu-no-inspection-notice-penalty-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-410(b)
- `law-enforcement-cooperation`: `edu-no-law-enforcement-cooperation-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-40-530(d)(3); S.C. Code Ann. § 15-43-10(A)
- `limitation-of-actions`: `edu-limitation-of-actions-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 15-3-530; S.C. Code Ann. § 15-3-530(2); S.C. Code Ann. § 15-3-530(3)
- `military-air-zone-disclosure`: `edu-no-military-zone-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 6-1-320; S.C. Code Ann. § 27-39-60
- `municipal-utility-lien`: `edu-municipal-utility-lien-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-33-50(A); S.C. Code Ann. § 27-33-50(B); S.C. Code Ann. § 27-33-50(C)
- `notice-to-vacate-additional-terms`: `edu-no-notice-to-vacate-terms-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(2); S.C. Code Ann. § 27-40-760; S.C. Code Ann. § 27-40-530(c)
- `optional-lease-terms`: `edu-optional-lease-terms-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-310(c); S.C. Code Ann. § 27-40-310(d); S.C. Code Ann. § 27-40-540
- `ordnance-demolition-meter-disclosures`: `edu-no-ordnance-demolition-meter-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-910(c); S.C. Code Ann. § 58-37-50(H)(3)
- `other-landlord-facilities`: `edu-other-landlord-facilities-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(5); S.C. Code Ann. § 27-40-440(a)(3); S.C. Code Ann. § 27-40-210(10)
- `confirmed-absences-misc`: `edu-confirmed-absences-misc-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-310(a)
- `pest-control-notice`: `edu-no-pest-control-notice-rule-sc` (edu, CONDITIONAL), Absent; S.C. Code Ann. § 27-40-530(b)(2); S.C. Code Ann. § 27-40-530(c); S.C. Code Ann. § 46-13-30(C)
- `pet-eviction-fact-sheet`: `edu-no-pet-eviction-fact-sheet-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 47-1-70(A); S.C. Code Ann. § 27-40-710(D); S.C. Code Ann. § 27-40-730
- `plain-language`: `edu-no-plain-language-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 38-61-30; S.C. Code Ann. § 37-2-106(1); S.C. Code Ann. § 27-40-520(a)(4)
- `plain-language-consumer-statement`: `edu-no-consumer-restrictions-statement-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-330(a)(1); S.C. Code Ann. § 27-40-330(a)(2); S.C. Code Ann. § 27-40-330(a)(3)
- `political-access`: `edu-no-political-access-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-16-130; S.C. Code Ann. § 48-62-310; S.C. Code Ann. § 27-40-520(a)
- `pool-safety`: `edu-pool-safety-sc` (edu, CONDITIONAL), Present / Absent; S.C. Code Ann. § 44-55-2320(5); S.C. Code Ann. § 44-55-2340(B); S.C. Code Ann. § 44-55-2340(C)
- `portable-cooling-device`: `edu-no-portable-cooling-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-510(5); S.C. Code Ann. § 27-40-210(17); S.C. Code Ann. § 27-40-440(a)(5)
- `portable-solar`: `edu-no-portable-solar-right-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 58-27-2610, 58-27-2660; S.C. Code Ann. § 27-40-510(5); S.C. Code Ann. § 27-40-520(a)
- `private-well-testing`: `edu-no-well-testing-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 44-55-20; S.C. Code Ann. § 44-55-20(14); S.C. Code Ann. § 16-3-1020
- `promises-to-repair`: `edu-promises-to-repair-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(12); S.C. Code Ann. § 27-40-610(a); S.C. Code Ann. § 27-40-610(b)
- `prop65-rental-warning`: `edu-no-chemical-warning-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 40-43-30; S.C. Code Ann. § 44-56-200; FEDERAL: 42 U.S.C. § 4852d (lead disclosure
- `property-tax-rent-disclosure`: `edu-no-property-tax-rent-statement-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 12-44-20
- `protected-class-inquiry-ban`: `edu-protected-class-inquiry-sc` (edu, CONSTRAINED), Absent; S.C. Code Ann. § 31-21-40(3); S.C. Code Ann. § 31-21-70(L); S.C. Code Ann. § 31-21-70(N)(1)
- `purpose-limitation`: `edu-purpose-limitation-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 15-43-10(A)
- `recycling-notice`: `edu-no-recycling-notice-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 16-17-680; S.C. Code Ann. § 27-40-510(3); S.C. Code Ann. § 27-40-440(a)(3)
- `religious-cultural-display`: `edu-no-religious-display-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-1-60(B)(3); S.C. Code Ann. § 31-21-40(2); S.C. Code Ann. § 27-40-520(a)(3)
- `tenant-display-rights`: `edu-tenant-display-rights-sc` (edu, CONSTRAINED), Present / Absent; S.C. Code Ann. § 27-1-60(A); S.C. Code Ann. § 27-1-60(B)(3); S.C. Code Ann. § 27-1-60(C)(4)
- `rent-reporting`: `edu-no-rent-reporting-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. §§ 37-20-110 to 37-20-180; FEDERAL: 15 U.S.C. § 1681s-2 (duties of furnishers
- `rent-tax`: `edu-rent-tax-sc` (edu, CONDITIONAL), Present / Absent; S.C. Code Ann. § 12-36-920(A); S.C. Code Ann. § 12-36-920(A)(1); S.C. Code Ann. § 12-36-920(A)(2)
- `renters-insurance-rules`: `edu-no-renters-insurance-rules-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 38-75-60; S.C. Code Ann. § 27-40-330(a)(3)
- `tenant-insurance-claims`: `edu-tenant-insurance-claims-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 38-75-60; S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-710(C)
- `repair-notice`: `edu-repair-notice-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-610(a); S.C. Code Ann. § 27-40-630(a); S.C. Code Ann. § 5-25-1330(B)
- `repair-cost-termination`: `edu-no-repair-cost-termination-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(2); S.C. Code Ann. § 27-40-650(a); S.C. Code Ann. § 27-40-910(c)(3)
- `repair-escrow-exemption-notice`: `edu-no-repair-escrow-exemption-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-790; S.C. Code Ann. §§ 27-40-610, 27-40-630; S.C. Code Ann. § 27-40-630(c)
- `rights-responsibilities-guide`: `edu-no-rights-guide-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-420(a); S.C. Code Ann. § 27-39-60
- `tenant-rights-statement`: `edu-no-tenant-rights-statement-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-420(a); S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-530(b)(2)
- `sanitary-code-variance`: `edu-no-code-variance-notice-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(1); S.C. Code Ann. § 27-40-210(2); S.C. Code Ann. § 27-39-60
- `seasonal-tenancy`: `edu-seasonal-tenancy-sc` (edu, CONDITIONAL), Present / Absent; S.C. Code Ann. § 27-50-230(3); S.C. Code Ann. § 27-50-220(B)(3); S.C. Code Ann. § 27-50-240(A)
- `security-devices`: `edu-no-security-devices-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-530(e); S.C. Code Ann. § 27-40-440(a)(1); S.C. Code Ann. §§ 27-40-410(a), 27-40-510(8)
- `smart-access`: `edu-no-smart-access-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 39-1-90; S.C. Code Ann. § 27-40-530(c); S.C. Code Ann. § 27-40-530(e)
- `service-animal-denial-penalty`: `edu-no-service-animal-denial-penalty-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 43-33-70(d); S.C. Code Ann. § 43-33-40(A)(1); S.C. Code Ann. § 43-33-40(B)
- `service-animal-misrepresentation`: `edu-service-animal-misrepresentation-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 47-3-980(A); S.C. Code Ann. § 47-3-980(B); S.C. Code Ann. § 47-3-980(C)
- `senior-housing-work-card`: `edu-no-senior-housing-work-card-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 31-21-70(L); S.C. Code Ann. § 31-21-30(8); S.C. Code Ann. § 31-21-30(8)(b)
- `sex-offender-disclosure`: `edu-no-sex-offender-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 23-3-520(B); S.C. Code Ann. § 23-3-525; S.C. Code Ann. § 27-50-90(B)(3)
- `sex-offender-occupancy`: `edu-sex-offender-occupancy-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 23-3-535(B); S.C. Code Ann. § 23-3-535(A)(4); S.C. Code Ann. § 23-3-535(C)
- `stigmatized-property`: `edu-stigmatized-property-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 40-57-740(A); S.C. Code Ann. § 40-57-740(A)(2); S.C. Code Ann. § 40-57-740(B)
- `tenant-screening`: `edu-tenant-screening-sc` (edu, CONSTRAINED), Absent; S.C. Code Ann. § 31-21-70(F); S.C. Code Ann. § 31-21-70(E); S.C. Code Ann. § 31-21-70(K)
- `sfr-occupancy-disclosure`: `edu-no-sfr-occupancy-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 40-57-135(F)(1)(c); S.C. Code Ann. § 40-57-135(F)(1); S.C. Code Ann. § 27-40-210(14)
- `shoreline-access-disclosure`: `edu-no-shoreline-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 48-39-330; S.C. Code Ann. §§ 48-39-250(8), 48-39-260(6)
- `special-district-representation`: `edu-no-special-district-statement-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(11)
- `steam-radiator-covers`: `edu-no-steam-radiator-cover-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 40-11-410; S.C. Code Ann. § 27-40-440(a)(4)
- `shutdown-rent-protection`: `edu-no-shutdown-rent-protection-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-710(B)
- `sprinkler-disclosure`: `edu-no-sprinkler-disclosure-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 12-6-3622(A)(1); S.C. Code Ann. § 12-6-3622(A)(2); S.C. Code Ann. § 12-6-3622(C)
- `statute-of-frauds-lease-term`: `edu-statute-of-frauds-lease-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-23-60; S.C. Code Ann. § 27-23-50; S.C. Code Ann. § 32-3-10(4)
- `tenancy-at-will`: `edu-tenancy-at-will-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-33-10(3); S.C. Code Ann. § 27-35-130; S.C. Code Ann. § 27-35-30
- `statutory-early-termination`: `edu-statutory-early-termination-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-40-350(A)(1); 2026 Act No. 184; S.C. Code Ann. § 27-40-620
- `stove-refrigerator`: `edu-no-stove-refrigerator-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(5); S.C. Code Ann. § 27-40-210(17); S.C. Code Ann. § 27-40-210(13)
- `student-housing`: `edu-student-housing-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-120(1); S.C. Code Ann. § 31-21-70(M); S.C. Code Ann. § 59-23-540(D)
- `subsidy-habitability-proration`: `edu-no-subsidy-proration-rule-sc` (edu, RECOMMENDED), Absent; FEDERAL: 24 C.F.R. § 982.404 and the HUD tenancy addendum (cited for context, not read in this pass
- `tenant-confidential-information`: `edu-no-tenant-information-statute-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 39-1-90(A); S.C. Code Ann. § 37-20-180(A)(1); S.C. Code Ann. § 16-25-130(D)
- `tenant-employee-housing`: `edu-tenant-employee-housing-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-120(5); S.C. Code Ann. § 27-37-10(A); S.C. Code Ann. § 27-35-130
- `tenant-right-to-organize`: `edu-no-tenant-organizing-right-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-910(a)(1); S.C. Code Ann. § 27-40-520(a); FEDERAL: 24 C.F.R. § 245.100 (tenant organizations in certain HUD multifamily housing
- `term-change-notice`: `edu-no-term-change-notice-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-31-170; S.C. Code Ann. § 27-40-770(a); S.C. Code Ann. § 27-40-520(b)
- `translation-duty`: `edu-no-translation-duty-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-530(b)(2); S.C. Code Ann. § 27-40-230
- `truth-in-renting`: `edu-no-truth-in-renting-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-330(a); S.C. Code Ann. § 39-5-20(a)
- `unbundled-parking`: `edu-no-unbundled-parking-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-40-210(10)
- `usufructuary-lessor`: `edu-usufructuary-lessor-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-41-10; S.C. Code Ann. § 27-41-20; S.C. Code Ann. § 27-41-30
- `veterans-incentive`: `edu-no-veterans-incentive-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 31-21-40(1)
- `utility-apportionment`: `edu-no-utility-apportionment-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-33-50(C); S.C. Code Ann. § 27-33-50(A)
- `utility-disclosure-attachment`: `edu-utility-disclosure-attachment-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 58-37-50(H)(3)
- `utility-interruption-submeter`: `edu-utility-interruption-submeter-sc` (edu, RECOMMENDED), Present / Absent; S.C. Code Ann. § 27-40-660; S.C. Code Ann. § 27-40-760; S.C. Code Ann. § 27-40-630(a)
- `utility-landlord-account`: `edu-utility-landlord-account-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 27-33-50(A); S.C. Code Ann. § 27-33-50(B)(1); S.C. Code Ann. § 27-33-50(C)
- `utility-shutoff-statute`: `edu-utility-shutoff-rules-sc` (edu, RECOMMENDED), Present; S.C. Code Ann. § 58-27-2520(A); S.C. Code Ann. § 58-27-2540
- `utility-submetering-disclosure`: `edu-no-submetering-disclosure-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-33-50(A)
- `water-heater-temperature`: `edu-no-water-heater-temperature-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(4); S.C. Code Ann. § 27-40-440(a)(5)
- `window-guards`: `edu-no-window-guard-rule-sc` (edu, RECOMMENDED), Absent; S.C. Code Ann. § 27-40-440(a)(1); S.C. Code Ann. § 27-40-210(2); S.C. Code Ann. § 27-39-60
- `nonrefundable-deposit-notice`: `nonrefundable-fees-wv`, tagged; S.C. Code Ann. § 27-40-210(18); S.C. Code Ann. § 27-40-330(a)(1)
- `carpet-cleaning`: `carpet-cleaning-ar`, tagged; S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-510(8)
- `required-fees`: `fees-and-charges-vi`, tagged; S.C. Code Ann. § 39-5-20(a); S.C. Code Ann. § 27-47-310(D)(7); S.C. Code Ann. § 27-40-210(11)
- `unpaid-damages-interest`: `interest-on-unpaid-amounts-ca`, tagged; S.C. Code Ann. § 34-31-20(A); S.C. Code Ann. § 34-31-20(B); S.C. Code Ann. § 37-2-106
- `government-fee-reimbursement`: `government-fee-reimbursement-ky`, tagged; S.C. Code Ann. § 27-39-60; S.C. Code Ann. § 27-40-330(a)(3); S.C. Code Ann. § 27-40-210(11)
- `governmental-fines`: `tenant-caused-fines-as`, tagged; S.C. Code Ann. § 27-40-710(C); S.C. Code Ann. § 27-40-330(a)(3)
- `hoa`: `association-approval-la`, tagged; S.C. Code Ann. § 27-31-100(h); S.C. Code Ann. § 27-40-430; S.C. Code Ann. § 27-40-620(a)
- `automatic-renewal`: `automatic-renewal-ks`, tagged; S.C. Code Ann. § 27-40-310(a); S.C. Code Ann. § 27-40-310(d); S.C. Code Ann. § 27-40-330(a)(1)
- `bed-bug-cooperation`: `pest-cooperation-pr`, tagged; S.C. Code Ann. § 27-40-530; S.C. Code Ann. § 27-40-510(2); S.C. Code Ann. § 27-40-510(6)
- `cannabis`: `cannabis-restrictions-ak`, tagged; S.C. Code Ann. § 44-53-370(c); S.C. Code Ann. § 46-55-20(A)(1); S.C. Code Ann. § 27-40-540
- `cold-weather-vacate-notice`: `cold-weather-vacate-notice-wy`, tagged; S.C. Code Ann. § 27-40-510(5); S.C. Code Ann. § 27-40-530(b)(1); S.C. Code Ann. § 27-40-440(a)(4)
- `common-area-lighting`: `common-area-lighting-ks`, tagged; S.C. Code Ann. § 27-47-450; S.C. Code Ann. § 27-40-310(a); S.C. Code Ann. § 27-40-440(a)(3)
- `construction-liens`: `no-liens-ar`, tagged; S.C. Code Ann. § 29-5-10(a); S.C. Code Ann. § 27-40-710(C); S.C. Code Ann. § 27-40-330(a)(3)
- `disability-accommodation`: `disability-modification-restoration-mn`, tagged; S.C. Code Ann. § 31-21-70(G)(1); S.C. Code Ann. § 43-33-70(c); S.C. Code Ann. § 27-40-330(a)(1)
- `drug-free-housing-addendum`: `drug-free-housing-ca`, tagged; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-40-710(B); S.C. Code Ann. § 27-40-710(A)
- `emergency-contact`: `emergency-contact-co`, tagged; S.C. Code Ann. § 27-40-530(d); S.C. Code Ann. § 27-40-330(a)(1)
- `eminent-domain`: `eminent-domain-vi`, tagged; S.C. Code Ann. § 28-2-30(6); S.C. Code Ann. § 28-2-230(B); S.C. Code Ann. § 28-11-10
- `energy-data-release`: `energy-data-release-wy`, tagged; S.C. Code Ann. § 27-40-330(a)(1)
- `ev-charging-requirements`: `ev-charger-installation-conditions-nd`, tagged; S.C. Code Ann. § 27-40-310(a); S.C. Code Ann. § 58-27-1060(A); S.C. Code Ann. § 58-27-1060(A)(2)
- `ev-charging-shared-area`: `ev-charging-shared-area-co`, tagged; S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-330(a)(3)
- `extended-absence-notice`: `extended-absence-notice-ks`, tagged; S.C. Code Ann. § 27-40-540; S.C. Code Ann. § 27-40-310(a); S.C. Code Ann. § 27-40-530
- `farmland-hunting-rights`: `hunting-rights-ms`, tagged; S.C. Code Ann. § 50-1-90; S.C. Code Ann. § 27-3-20(c); S.C. Code Ann. § 27-40-530
- `firearms`: `firearm-rules-ks`, tagged; S.C. Code Ann. § 23-31-220(A)(2); S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-330(a)(3)
- `foreclosure-disclosure`: `foreclosure-disclosure-nv`, tagged; S.C. Code Ann. § 39-5-20(a); S.C. Code Ann. § 27-40-330(a)(1)
- `furnishings-included`: `furnishings-included-la`, tagged; S.C. Code Ann. § 27-40-410(a); S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-440(a)(5)
- `guarantor-renewal`: `guaranty-as`, tagged; S.C. Code Ann. § 32-3-10(2); S.C. Code Ann. § 32-3-10; S.C. Code Ann. § 27-40-330(a)(1)
- `informal-dispute-resolution`: `informal-dispute-resolution-or`, tagged; S.C. Code Ann. § 27-40-330(a)(1); S.C. Code Ann. § 27-40-130(a)
- `key-control-policy`: `lock-change-ak`, tagged; S.C. Code Ann. § 27-40-530(e); S.C. Code Ann. § 27-40-530(b); S.C. Code Ann. § 27-40-330(a)(1)
- `lease-copy`: `lease-copy-receipt-hi`, tagged; S.C. Code Ann. § 27-40-520(a)(6); S.C. Code Ann. § 27-40-330(a)(1)
- `owner-move-in-reservation`: `owner-occupancy-termination-ar`, tagged; S.C. Code Ann. § 27-33-10; S.C. Code Ann. § 27-40-310(a); S.C. Code Ann. § 27-40-770(b)
- `parking-rules-notice`: `parking-rules-notice-co`, tagged; S.C. Code Ann. § 27-40-520(a)(6); S.C. Code Ann. § 27-40-520(b); S.C. Code Ann. § 27-40-330(a)(1)
- `prohibited-acts-renter`: `prohibited-acts-renter-wy`, tagged; S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-510(7); S.C. Code Ann. § 27-40-530(a)
- `rent-concession`: `rent-concession-wi`, tagged; S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-40-210(12); S.C. Code Ann. § 27-40-330(c)
- `rent-escalation`: `rent-escalation-la`, tagged; S.C. Code Ann. § 27-40-910; S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-40-910(a)
- `rent-installments`: `rent-installments-or`, tagged; S.C. Code Ann. § 27-40-310(c); S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-40-710(B)
- `tax-escalation`: `tax-insurance-escalation-la`, tagged; S.C. Code Ann. § 12-4-540; S.C. Code Ann. § 27-40-310(a); S.C. Code Ann. § 27-40-330(a)(3)
- `telecom-access`: `telecom-access-mn`, tagged; S.C. Code Ann. § 58-9-3040; S.C. Code Ann. § 27-40-510(6); FEDERAL: 47 C.F.R. § 1.4000, cited for context, not read in this pass
- `tenant-portal`: `tenant-portal-mn`, tagged; S.C. Code Ann. § 26-6-50(B); S.C. Code Ann. § 26-6-50(C); S.C. Code Ann. § 26-6-30(B)(2)(c)(ii)
- `utility-allowance-cap`: `utility-allowance-cap-co`, tagged; S.C. Code Ann. § 27-33-50(A); S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. §§ 27-40-760, 27-40-660
- `utility-disconnection-notice-authorization`: `utility-shutoff-notice-authorization-co`, tagged; S.C. Code Ann. § 58-27-2530; S.C. Code Ann. § 27-33-50(A)
- `utility-transfer`: `utility-transfer-nj`, tagged; S.C. Code Ann. § 27-33-50(A); S.C. Code Ann. § 27-40-210(11); S.C. Code Ann. § 27-40-660
- `waterbed`: `waterbed-mn`, tagged; S.C. Code Ann. § 27-40-510(8); S.C. Code Ann. § 27-40-510(6); S.C. Code Ann. § 27-40-210(18)

Not yet answered (0): 

### §3 Batteries

Every battery runs over the whole saved Code (1,319 chapters, 31,342 sections) with a null control ("zqxvbnmwt", must be 0 hits) and a positive control ("General Assembly", must exceed 1,000) in the same run, and each pattern is first tested against a known positive string. "Tenancy-filtered" counts the hits with a tenancy word (tenan, landlord, lease, rental, dwelling unit, lessee) within the context window.

**SC-B1-001** (`waiver-by-acceptance`). Controls: null 0, positive 3389. Title 27 and whole Code; rent-acceptance-after-default waiver rule
- "accept-rent" `accept\w*\W+(?:of\W+)?(?:\w+\W+){0,3}(?:rent|payment)`: 112 hits in 82 sections; tenancy-filtered 3: 27-40-320, 27-50-240
- "waive-accept" `(?:waiv\w*|waiver)\W+(?:\w+\W+){0,12}(?:accept\w*|receiv\w*|receipt)\W+(?:\w+\W+){0,4}(?:rent|payment)`: 1 hits in 1 sections; tenancy-filtered 0: none
- "accept-waive" `(?:accept\w*|receipt|receiv\w*)\W+(?:\w+\W+){0,4}(?:rent|payment)\W+(?:\w+\W+){0,15}(?:waiv\w*|waiver)`: 1 hits in 1 sections; tenancy-filtered 0: none
- "reservation" `without reservation|under reservation|with reservation|reservation of rights`: 14 hits in 9 sections; tenancy-filtered 2: 27-40-320

**SC-B1-002** (`jury-waiver`). Controls: null 0, positive 3389. jury waiver in leases
- "jury-waive" `\bjury\b\W+(?:\w+\W+){0,10}waiv\w*|waiv\w*\W+(?:\w+\W+){0,10}(?:trial by )?\bjury\b`: 17 hits in 13 sections; tenancy-filtered 0: none
- "jury-ll" `\bjury\b`: 972 hits in 318 sections; tenancy-filtered 9: 15-67-100, 27-37-155, 27-37-70, 27-37-80, 27-37-90

**SC-B1-003** (`collection-fee`). Controls: null 0, positive 3389. collection fees on rent debts
- "collection-cost" `(?:collection\W+(?:cost|fee|charge|expense)s?|costs?\W+of\W+collection|collection\W+agenc\w+)`: 63 hits in 32 sections; tenancy-filtered 1: 27-37-155

**SC-B1-004** (`notice-service-fee`). Controls: null 0, positive 3389. lease charge for serving a notice
- "fee-notice" `(?:fee|charge|cost)s?\W+(?:\w+\W+){0,4}(?:serv\w+|prepar\w+|post\w+|deliver\w+)\W+(?:\w+\W+){0,3}notices?`: 7 hits in 7 sections; tenancy-filtered 0: none
- "notice-fee" `notices?\W+(?:\w+\W+){0,6}(?:fee|charge)\b`: 36 hits in 25 sections; tenancy-filtered 4: 4-12-30, 58-37-50

**SC-B1-005** (`eviction-penalty-clause-ban`). Controls: null 0, positive 3389. lease charges for an eviction
- "fee-evict" `(?:fee|charge|penalt\w+|cost)s?\W+(?:\w+\W+){0,8}(?:evict\w*|eject\w*)`: 1 hits in 1 sections; sections: 16-17-560
- "evict-fee" `(?:evict\w*|eject\w*)\W+(?:\w+\W+){0,8}(?:fee|charge|penalt\w+)`: 6 hits in 4 sections; sections: 36-2-715, 38-43-80, 56-19-70, 56-3-890

**SC-B1-005b** (`eviction-penalty-clause-ban`). Controls: null 0, positive 3389. lease charges for an eviction; rerun with leading word boundary (SC-B1-005 matched "rejected")
- "fee-evict" `(?:fee|charge|penalt\w+|cost)s?\W+(?:\w+\W+){0,8}\b(?:evict\w*|eject\w*)`: 1 hits in 1 sections; sections: 16-17-560
- "evict-fee" `\b(?:evict\w*|eject\w*)\W+(?:\w+\W+){0,8}(?:fee|charge|penalt\w+)`: 0 hits in 0 sections; sections: 
- "landlord-proceeding-fee" `landlord\W+(?:\w+\W+){0,6}(?:proceeding|action|case)s?\W+(?:\w+\W+){0,8}(?:fee|charge|cost)`: 0 hits in 0 sections; sections: 

**SC-B1-006** (`smoke-drift-waiver`). Controls: null 0, positive 3389. smoke drift, smoke-free housing, workplace law reach to apartment common areas
- "smoke-dwelling" `\bsmok\w*\W+(?:\w+\W+){0,20}(?:apartment|multi-?unit|multifamily|dwelling|condominium|common area|hallway|residen\w+)`: 6 hits in 5 sections; sections: 23-9-155, 44-95-20, 5-25-1160, 5-25-1330, 5-25-1340
- "dwelling-smoke" `(?:apartment|multi-?unit|multifamily|dwelling|condominium|common area|hallway)\W+(?:\w+\W+){0,20}\bsmok\w*`: 6 hits in 3 sections; sections: 23-9-155, 5-25-1310, 5-25-1330

**SC-B1-007** (`confession-of-judgment`). Controls: null 0, positive 3389. confessed judgments
- "confess" `confess\w*\W+(?:\w+\W+){0,3}judgment|judgment\W+(?:\w+\W+){0,3}confession`: 36 hits in 23 sections; sections: 14-17-540, 14-17-560, 15-35-180, 15-35-350, 15-35-360, 15-35-370, 15-35-380, 15-50-70, 22-3-10, 27-40-330, 33-41-310, 34-29-170, 36-3-104, 37-2-415, 37-2-712, 37-3-407, 37-5-202, 49-19-1820, 56-9-352, 56-9-354, 56-9-360, 62-8-212, 8-21-310

**SC-B1-008** (`habitability-modifiable`). Controls: null 0, positive 3389. No statute on wells/catchment in rentals, rent reduction in exchange for accepting conditions, or as-is rentals.
- "well-water" `\b(?:private|domestic|individual|drinking water|potable) (?:water )?wells?\b`: 6 hits in 3 sections; tenancy-filtered 2: 6-1-190
- "rent-reduction" `\brent\b.{0,30}\b(?:abat|reduc|diminish)\w*|\b(?:abat|reduc|diminution)\w*.{0,25}\brent`: 8 hits in 6 sections; tenancy-filtered 8: 12-6-3795, 27-40-620, 27-40-630, 27-40-650, 27-40-790, 31-1-630
- "accept-condition" `\b(?:as is|as-is)\b`: 384 hits in 355 sections; tenancy-filtered 8: 10-1-179, 27-40-910, 27-50-110, 54-15-250, 55-9-90, 56-16-60, 58-17-2780, 59-31-250

**SC-B1-009** (`habitability-presumption`). Controls: null 0, positive 3389. Presumptions near tenancy words; looking for any habitability presumption.
- "presume" `\bpresum\w*`: 427 hits in 282 sections; tenancy-filtered 14: 15-67-260, 16-27-55, 16-3-2090, 25-11-820, 27-18-170, 27-40-440, 27-40-910, 37-1-201, 40-54-10, 44-53-586, 62-2-805, 62-7-917, 63-3-530, 63-7-2570
- "prima-facie" `\bprima facie\b`: 252 hits in 171 sections; tenancy-filtered 1: 36-2A-503

**SC-B1-010** (`confirmed-absences-habitability`). Controls: null 0, positive 3389. Residential heat standard; rent escrow or withholding outside S.C. Code Ann. § 27-40-790.
- "temperature" `\b\d{2} degrees\b|\bdegrees fahrenheit\b`: 49 hits in 18 sections; tenancy-filtered 0: none
- "escrow" `\bescrow\w*`: 277 hits in 102 sections; tenancy-filtered 41: 11-47-30, 13-7-10, 24-3-40, 27-32-55, 27-32-90, 27-40-800, 31-23-40, 37-11-50, 37-11-90, 37-7-108, 38-12-270, 38-12-30, 38-12-480, 40-6-150, 48-46-30
- "withhold-rent" `\bwithh\w* (?:the |of )?rent\b|\brent\b.{0,20}\bwithh\w*`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B2-001** (`dv-lockchange`). Controls: null 0, positive 3389. Lock-change right for a domestic-violence victim; any lock-change rule.
- "lock-dv" `\block(?:s|ed|smith)?\b(?:\W+\w+){0,25}?\W+(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)|(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)(?:\W+\w+){0,25}?\W+\block(?:s|ed|smith)?\b`: 0 hits in 0 sections; tenancy-filtered 0: none
- "change-locks" `\bchang\w* (?:the |of )?locks?\b|\block(?:s)? (?:be |are )?(?:changed|rekeyed|re-keyed)\b|\brekey\w*`: 2 hits in 2 sections; tenancy-filtered 1: 27-40-530

**SC-B2-002** (`dv-confidentiality`). Controls: null 0, positive 3389. Landlord duty to keep domestic-violence information confidential.
- "confid-dv" `\bconfidential\w*(?:\W+\w+){0,30}?\W+(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)|(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)(?:\W+\w+){0,30}?\W+confidential\w*`: 44 hits in 35 sections; tenancy-filtered 5: 1-7-1110, 16-3-2070, 38-9-180, 44-81-40, 63-7-1990
- "disclos-dv" `\bdisclos\w*(?:\W+\w+){0,20}?\W+(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)`: 20 hits in 14 sections; tenancy-filtered 1: 63-7-940

**SC-B2-003** (`dv-eviction-protection`). Controls: null 0, positive 3389. Eviction protection for victims; nuisance or police-call protection.
- "evict-victim" `\b(?:evict\w*|eject\w*|terminat\w* (?:the |a )?(?:tenancy|lease|rental agreement))(?:\W+\w+){0,25}?\W+(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)|(?:domestic|victim|protection order|order of protection|restraining order|stalk|abuse)(?:\W+\w+){0,25}?\W+(?:evict\w*|\beject\w*)`: 0 hits in 0 sections; tenancy-filtered 0: none
- "police-call" `\b(?:call\w*|request\w*|summon\w*)\W+(?:\w+\W+){0,4}(?:police|law enforcement|emergency assistance|peace officer)`: 49 hits in 43 sections; tenancy-filtered 4: 23-31-215, 30-2-510, 56-1-3350

**SC-B1-011** (`eviction-penalty-clause-ban`). Controls: null 0, positive 3389. General statute voiding fixed charges as penalties (outside S.C. Code Ann. § 27-40-330(c)).
- "liquidated" `\bliquidated damages?\b`: 8 hits in 8 sections; tenancy-filtered 1: 48-20-170
- "penalty-contract" `\b(?:penalty|forfeiture)\b(?:\W+\w+){0,8}?\W+(?:contract|agreement|lease)\b`: 9 hits in 9 sections; tenancy-filtered 1: 48-43-380

**SC-B3-001** (`deposit-installments`). Controls: null 0, positive 3389. Deposit installment right.
- "deposit-installment" `\binstall?ments?\b(?:\W+\w+){0,6}?\W+deposit|\bdeposit\w*(?:\W+\w+){0,6}?\W+install?ments?\b`: 2 hits in 1 sections; tenancy-filtered 0: none

**SC-B3-002** (`deposit-last-month-rent`). Controls: null 0, positive 3389. Rule on applying a deposit to the last month.
- "last-month" `\b(?:last|final) month'?s'? rent\b|\blast month of (?:the )?(?:tenancy|lease|term)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B3-003** (`holding-deposit`). Controls: null 0, positive 3389. Pre-lease holding deposits.
- "holding" `\bholding deposit|\bdeposit to hold\b|\bearnest money\b|\bapplication deposit\b|\breservation (?:deposit|fee)\b`: 17 hits in 8 sections; tenancy-filtered 4: 22-3-10, 27-18-175, 37-11-90

**SC-B3-004** (`fee-in-lieu-of-deposit`). Controls: null 0, positive 3389. Fee in lieu of a deposit.
- "in-lieu" `\bin lieu of (?:a |the |any )?(?:security )?deposit|\bdeposit (?:alternative|waiver|replacement)\b|\bsurety bond\b(?:\W+\w+){0,6}?\W+(?:security )?deposit`: 13 hits in 10 sections; tenancy-filtered 0: none

**SC-B3-005** (`fee-transparency`). Controls: null 0, positive 3389. Fee-transparency or all-in pricing rule.
- "fee-trans" `\bjunk fees?\b|\btotal price\b|\ball-in (?:price|rent)\b|\b(?:mandatory|nonoptional|non-optional|required|hidden) fees?\b|\bdrip pricing\b`: 109 hits in 79 sections; tenancy-filtered 2: 27-32-60, 40-8-150

**SC-B3-006** (`nonrefundable-deposit-notice`). Controls: null 0, positive 3389. Nonrefundable deposits or fees in tenancies.
- "nonrefundable" `\bnon-?refundable\b`: 132 hits in 97 sections; tenancy-filtered 4: 27-50-240, 37-11-90, 37-2-706, 56-1-2090

**SC-B3-007** (`pet-fees`). Controls: null 0, positive 3389. Pet deposits and fees.
- "pet-money" `\bpet (?:deposits?|fees?|rent)\b`: 1 hits in 1 sections; tenancy-filtered 1: 40-57-136

**SC-B3-008** (`carpet-cleaning`). Controls: null 0, positive 3389. Carpet-cleaning charges or condition-and-age tests.
- "carpet" `\bcarpets?\b|\bprofessional(?:ly)? clean\w*`: 2 hits in 2 sections; tenancy-filtered 0: none

**SC-B3-009** (`deposit-surrender-notice`). Controls: null 0, positive 3389. Conditions on a deposit refund (notice, keys, address).
- "refund-condition" `\b(?:return|surrender)\w* (?:of )?(?:the |all )?keys?\b|\bnotice of (?:intent to )?vacat\w*|\bforwarding address\b`: 5 hits in 4 sections; tenancy-filtered 2: 27-40-410, 27-47-520

**SC-B3-010** (`alarm-tampering-fee`). Controls: null 0, positive 3389. Fee or penalty for tampering with alarms.
- "alarm-fee" `\b(?:smoke|carbon monoxide|fire) (?:detectors?|alarms?)\b(?:\W+\w+){0,25}?\W+(?:fee|charge|tamper\w*|disabl\w*|remov\w*)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B3-011** (`governmental-fines`). Controls: null 0, positive 3389. Passing government fines or fees to tenants.
- "fine-pass" `\b(?:fines?|penalt(?:y|ies))\b(?:\W+\w+){0,12}?\W+(?:tenants?|lessees?|occupants?)\b`: 6 hits in 6 sections; tenancy-filtered 6: 12-21-2716, 27-35-170, 37-1-107, 37-13-40, 41-18-150, 52-19-360
- "gov-fee" `\b(?:false alarm|re-?inspection|special pick-?up|impound) (?:fees?|charges?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B3-012** (`subsidy-late-fee`). Controls: null 0, positive 3389. Late fees where a subsidy pays part of the rent.
- "subsidy-late" `\b(?:housing assistance|subsid\w*|section 8|vouchers?|housing authority)\b(?:\W+\w+){0,20}?\W+late\b`: 4 hits in 4 sections; tenancy-filtered 0: none

**SC-B3-013** (`security-deposit-holding`). Controls: null 0, positive 3389. How a deposit must be held.
- "deposit-held" `\b(?:security|rental|pet|damage) deposits?\b(?:\W+\w+){0,15}?\W+(?:trust|escrow|interest|bank|financial institution)\b`: 4 hits in 3 sections; tenancy-filtered 4: 27-40-210, 37-2-407, 40-57-136

**SC-B3-014** (`unpaid-damages-interest`). Controls: null 0, positive 3389. Contract interest on unpaid rent; usury limits.
- "contract-rate" `\b(?:rate of interest|interest rate)\b(?:\W+\w+){0,15}?\W+(?:agree\w*|written|contract\w*)`: 30 hits in 19 sections; tenancy-filtered 1: 6-24-100
- "usury" `\busur\w*`: 21 hits in 15 sections; tenancy-filtered 0: none

**SC-B3-015** (`late-fee-limit`). Controls: null 0, positive 3389. Late-fee caps, including the Manufactured Home Park Tenancy Act.
- "late-charge" `\blate (?:fees?|charges?|payment (?:fees?|charges?))\b`: 43 hits in 30 sections; tenancy-filtered 2: 27-32-335, 27-40-210

**SC-B3-016** (`expedited-deposit-disposition`). Controls: null 0, positive 3389. Fast-track or special procedure for deposit disputes.
- "deposit-proc" `\b(?:security|rental|security/rental) deposits?\b(?:\W+\w+){0,30}?\W+(?:hearing|expedit\w*|priority|small claims|summary|interpleader|mediat\w*)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B3-017** (`fee-unprovided-service`). Controls: null 0, positive 3389. Fee for a service the landlord does not provide.
- "user-fee" `\buser fees?\b`: 513 hits in 115 sections; tenancy-filtered 9: 12-2-110, 12-28-1730, 12-28-310, 12-6-3780, 27-47-210, 27-47-310
- "service-not" `\b(?:fees?|charges?)\b(?:\W+\w+){0,10}?\W+(?:services?|amenit\w*)\b(?:\W+\w+){0,6}?\W+not (?:provided|rendered|furnished|available)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B3-018** (`deposit-cost-schedule`). Controls: null 0, positive 3389. Pre-set deduction or cleaning charges against a deposit.
- "schedule" `\b(?:schedule|list)\b(?:\W+\w+){0,6}?\W+(?:of )?(?:charges|costs|fees|deductions)\b(?:\W+\w+){0,20}?\W+(?:deposit|tenant|lease)`: 0 hits in 0 sections; tenancy-filtered 0: none
- "cleaning" `\bclean(?:ing)? (?:fees?|charges?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B4-001** (`accessory-dwelling-unit`). Controls: null 0, positive 3389. State limits on local ADU rules.
- "adu" `\baccessory (?:dwelling|apartment|living) (?:units?|quarters)?|\bgranny (?:flat|unit)|\bin-law (?:suite|unit|apartment)|\bgarage apartment`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B4-002** (`single-family-zone-lease-limit`). Controls: null 0, positive 3389. Owner-occupancy conditions on renting in single-family zones.
- "owner-occ" `\bowner[- ]occup\w*`: 43 hits in 19 sections; tenancy-filtered 27: 11-11-155, 11-11-156, 11-11-157, 12-3-10, 12-37-220, 12-37-252, 12-43-215, 12-43-220, 12-43-350, 12-6-3535, 31-13-450, 38-75-485, 4-10-970, 5-37-100, 5-37-40, 5-37-50

**SC-B4-003** (`landlord-registration`). Controls: null 0, positive 3389. State landlord or rental registration.
- "register-rental" `\b(?:regist\w*|licens\w*|permit\w*)\b(?:\W+\w+){0,6}?\W+(?:rental (?:property|properties|units?|dwellings?|housing)|landlords?)\b|\b(?:rental (?:property|properties|units?|dwellings?|housing)|landlords?)\b(?:\W+\w+){0,6}?\W+(?:regist\w*|licens\w*|permit)\b`: 5 hits in 4 sections; tenancy-filtered 5: 27-40-210, 40-57-370, 40-57-520, 6-1-825

**SC-B4-004** (`landlord-liability-insurance`). Controls: null 0, positive 3389. Mandatory landlord insurance.
- "ll-insurance" `\b(?:landlords?|lessors?|rental property owners?)\b(?:\W+\w+){0,10}?\W+(?:liability )?insurance\b`: 2 hits in 2 sections; tenancy-filtered 2: 37-4-202, 38-75-60

**SC-B4-005** (`rental-inspection`). Controls: null 0, positive 3389. Rental inspection programs; inspector entry.
- "inspect-rental" `\binspect\w*\b(?:\W+\w+){0,10}?\W+(?:rental (?:property|properties|units?|dwellings?|housing)|dwelling units?|dwellings?)\b`: 4 hits in 3 sections; tenancy-filtered 4: 31-21-40, 5-25-340, 5-25-370

**SC-B4-006** (`substandard-property-receivership`). Controls: null 0, positive 3389. Code-enforcement or nuisance receivership of rentals.
- "receiver-housing" `\breceiver\w*\b(?:\W+\w+){0,20}?\W+(?:dwellings?|rental|housing|tenants?|rents)\b`: 4 hits in 4 sections; tenancy-filtered 0: none

**SC-B4-007** (`health-district-rental-rules`). Controls: null 0, positive 3389. Health-district rental regulations.
- "health-rental" `\bhealth (?:districts?|departments?|officers?)\b(?:\W+\w+){0,20}?\W+(?:rental|tenants?|landlords?|dwellings?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B4-008** (`good-cause-notice`). Controls: null 0, positive 3389. Just-cause or good-cause eviction rules and notices.
- "good-cause" `\b(?:good|just) cause\b(?:\W+\w+){0,15}?\W+(?:evict\w*|terminat\w*|tenan\w*|leases?)\b`: 11 hits in 4 sections; tenancy-filtered 0: none

**SC-B4-009** (`tpa-notice`). Controls: null 0, positive 3389. Tenant opportunity-to-purchase rules.
- "tenant-offer" `\b(?:right of first refusal|opportunity to purchase|offer to (?:sell|convey))\b(?:\W+\w+){0,20}?\W+tenants?\b|\btenants?\b(?:\W+\w+){0,20}?\W+(?:right of first refusal|opportunity to purchase|offer to (?:sell|convey))\b`: 3 hits in 2 sections; tenancy-filtered 3: 15-61-25, 27-31-420

**SC-B4-010** (`tpa-sunset`). Controls: null 0, positive 3389. Dated repeal of a tenant-protection statute.
- "sunset" `\b(?:shall expire|expires on|is repealed|are repealed|sunset)\b`: 414 hits in 278 sections; tenancy-filtered 7: 11-11-240, 48-39-130, 50-11-500, 56-1-40, 59-146-50, 60-11-110

**SC-B4-011** (`required-disclosures`). Controls: null 0, positive 3389. Lease notices of law coverage; option-to-purchase disclosures.
- "option-purchase" `\boption to (?:purchase|buy)\b`: 40 hits in 33 sections; tenancy-filtered 18: 12-54-122, 27-28-30, 27-50-20, 31-23-20, 31-9-60, 36-1-203, 36-2A-218, 37-13-10, 37-2-105, 44-7-1540, 48-3-80, 56-15-70, 56-16-120, 59-31-240, 62-3-715, 62-7-816
- "law-coverage-notice" `\b(?:rent stabiliz\w*|rent control|rent increase law|just cause)\b`: 44 hits in 35 sections; tenancy-filtered 0: none

**SC-B4-012** (`portfolio-thresholds`). Controls: null 0, positive 3389. Duties tiered by number of units.
- "unit-threshold" `\b(?:more than|fewer than|less than) (?:one|two|three|four|five|ten|\d+) (?:adjoining )?(?:residential )?(?:dwelling |rental )?units?\b`: 9 hits in 9 sections; tenancy-filtered 7: 12-36-510, 27-32-250, 27-40-410, 27-40-440, 27-40-910, 27-50-20, 34-28-30

**SC-B4-013** (`condemned-premises-rent-bar`). Controls: null 0, positive 3389. Bar on demanding or collecting rent for condemned or unfit premises.
- "rent-unfit" `\b(?:collect\w*|demand\w*|charg\w*|recover\w*|accept\w*)\b(?:\W+\w+){0,6}?\W+rent\b(?:\W+\w+){0,25}?\W+(?:unfit|condemn\w*|substandard|uninhabitable|code violations?|placard\w*)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B4-014** (`inspection-condemnation-disclosure`). Controls: null 0, positive 3389. Disclosure of inspection or condemnation orders.
- "disclose-order" `\bdisclos\w*\b(?:\W+\w+){0,15}?\W+(?:code violations?|condemn\w*|inspection (?:orders?|reports?)|unfit)\b`: 1 hits in 1 sections; tenancy-filtered 0: none

**SC-B4-015** (`subsidized-inspection-refusal`). Controls: null 0, positive 3389. Subsidized tenancies, inspections, source of income.
- "voucher" `\b(?:housing (?:choice )?vouchers?|section 8|housing assistance payments?|source of income)\b`: 2309 hits in 1639 sections; tenancy-filtered 97: 1-23-280, 11-50-50, 16-1-100, 2-15-60, 2-17-80, 20-3-150, 23-3-430, 23-3-436, 23-3-437, 23-3-460, 23-3-462, 23-3-463, 23-3-490, 23-3-538, 27-40-790, 34-19-120, 34-19-20, 34-19-60, 34-19-70, 34-3-360, 37-2-102, 37-2-105, 37-2-106, 37-2-202, 37-2-401

**SC-B4-015b** (`subsidized-inspection-refusal`). Controls: null 0, positive 3389. Rerun of SC-B4-015 with a case-sensitive "Section 8" (the first run matched SECTION 8 in history lines).
- "voucher" `\bhousing (?:choice )?vouchers?\b|(?-i:\bSection 8)(?![-\d.])|\bhousing assistance payments?\b|\bsource of income\b`: 22 hits in 19 sections; tenancy-filtered 2: 4-9-195, 8-13-1301

**SC-B1-001b** (`waiver-by-acceptance`). Controls: null 0, positive 3389. Rerun of SC-B1-001 with a wider window after S.C. Code Ann. § 27-37-150 surfaced in batch 5 (the first run allowed only three words between "accept" and "rent").
- "accept-rent-wide" `\baccept\w*\W+(?:\w+\W+){0,8}?(?:rents?|payments?)\b`: 155 hits in 116 sections; tenancy-filtered 11: 27-37-150, 27-40-320, 27-50-240, 36-2A-221, 36-2A-523, 41-10-60, 56-1-10, 56-1-2030, 56-5-5630
- "waiv-rent" `\bwaiv\w*\b(?:\W+\w+){0,25}?\W+(?:ejectment|evict\w*|possession|terminat\w*)\b`: 22 hits in 20 sections; tenancy-filtered 3: 27-37-150, 33-44-404, 63-9-820

**SC-B5-001** (`redemption`). Controls: null 0, positive 3389. Tenant redemption or reinstatement by paying before ejectment.
- "pay-before" `\b(?:pay\w*|tender\w*)\b(?:\W+\w+){0,15}?\W+(?:before|prior to)\b(?:\W+\w+){0,8}?\W+(?:ejectment|eviction|writ|judgment)\b`: 4 hits in 3 sections; tenancy-filtered 0: none
- "redeem" `\bredeem\w*\b|\bredemption\b`: 540 hits in 239 sections; tenancy-filtered 12: 11-9-620, 12-51-130, 12-51-96, 29-3-10, 44-7-1560, 59-127-510, 59-130-440, 59-147-40, 6-21-390, 6-21-440

**SC-B5-002** (`social-security-defense`). Controls: null 0, positive 3389. Continuance when a benefit payment is late.
- "benefit-late" `\b(?:social security|benefits?|public assistance|subsid\w*|voucher)\b(?:\W+\w+){0,20}?\W+(?:continuance|late|delay\w*)\b`: 3 hits in 3 sections; tenancy-filtered 0: none

**SC-B5-003** (`tenant-bankruptcy`). Controls: null 0, positive 3389. Writ enforcement after a tenant bankruptcy.
- "bankruptcy" `\bbankrupt\w*`: 176 hits in 110 sections; tenancy-filtered 6: 31-21-30, 33-41-20, 36-1-203, 43-5-220

**SC-B5-004** (`eviction-hardship-stay`). Controls: null 0, positive 3389. Hardship stays of eviction.
- "stay-eject" `\bstay\w*\b(?:\W+\w+){0,10}?\W+(?:ejectment|eviction|writ)\b`: 11 hits in 5 sections; tenancy-filtered 8: 27-37-130, 27-40-800
- "ill-elderly" `\b(?:ill|elderly|hardship|medical)\b(?:\W+\w+){0,10}?\W+(?:tenants?|dispossess\w*|eviction)\b`: 1 hits in 1 sections; tenancy-filtered 1: 27-37-160

**SC-B5-005** (`eviction-service-party`). Controls: null 0, positive 3389. Lease-designated agent to accept eviction papers.
- "agent-service" `\bagent\b(?:\W+\w+){0,10}?\W+service of process\b|\bservice of process\b(?:\W+\w+){0,10}?\W+agent\b`: 110 hits in 81 sections; tenancy-filtered 2: 27-40-420, 27-47-410

**SC-B5-006** (`criminal-activity`). Controls: null 0, positive 3389. Crime-free addenda; mandatory eviction duties.
- "crime-free" `\bcrime[- ]free\b`: 0 hits in 0 sections; tenancy-filtered 0: none
- "mandatory-evict" `\b(?:shall|must)\b(?:\W+\w+){0,6}?\W+(?:evict|terminate the (?:lease|tenancy|rental agreement))\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B5-007** (`tenant-records`). Controls: null 0, positive 3389. Rent-ledger duties.
- "ledger" `\b(?:rent|payment) (?:ledgers?|records?|histor(?:y|ies))\b|\bledger\b(?:\W+\w+){0,8}?\W+tenants?\b`: 13 hits in 13 sections; tenancy-filtered 1: 12-6-3550

**SC-B5-008** (`minor-tenant-filing`). Controls: null 0, positive 3389. Minors as tenants or eviction defendants; age of majority for leases.
- "minor-lease" `\b(?:minors?|infan\w*|under (?:the age of )?eighteen)\b(?:\W+\w+){0,15}?\W+(?:leases?|rental agreements?|tenan\w*|eject\w*|evict\w*)\b|\b(?:leases?|rental agreements?|tenan\w*|eject\w*|evict\w*)\b(?:\W+\w+){0,15}?\W+(?:minors?|infan\w*)\b`: 5 hits in 4 sections; sections: 34-19-30, 34-28-640, 34-30-1650, 63-5-660

**SC-B5-009** (`lockout-for-rent-delinquency`). Controls: null 0, positive 3389. Opt-in lockout for rent delinquency.
- "lockout" `\block(?:ed)?[- ]?out\b|\bchang\w* (?:the )?locks?\b|\bexclud\w* the tenant\b`: 11 hits in 10 sections; tenancy-filtered 2: 27-40-530, 27-40-660

**SC-B6-001** (`actual-notice-method`). Controls: null 0, positive 3389. Agreed additional method of giving actual notice (text, e-mail) in a tenancy.
- "agreed-method" `\b(?:agree\w*|agreement)\b(?:\W+\w+){0,8}?\W+(?:method|manner|means)\b(?:\W+\w+){0,4}?\W+(?:notice|notification|delivery)\b`: 3 hits in 3 sections; tenancy-filtered 0: none
- "text-notice" `\btext messag\w*\b(?:\W+\w+){0,8}?\W+notic\w*|\bnotic\w*\b(?:\W+\w+){0,8}?\W+text messag\w*`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B7-001** (`pest-control-notice`). Controls: null 0, positive 3389. Landlord or applicator notice to tenants of pesticide or pest-control treatment.
- "pest-notice" `\b(?:pest\w*|fumigat\w*|exterminat\w*|termite\w*|insecticid\w*|rodenticid\w*)\b(?:\W+\w+){0,10}?\W+(?:notice|notices|notif\w*|disclos\w*|warn\w*|post\w*)\b|\b(?:notice|notices|notif\w*|disclos\w*|warn\w*)\b(?:\W+\w+){0,10}?\W+(?:pest\w*|fumigat\w*|exterminat\w*|termite\w*)\b`: 9 hits in 6 sections; tenancy-filtered 0: none
- "pest-tenancy" `\b(?:pesticid\w*|pest control|pest treatment|fumigat\w*|exterminat\w*|termite\w*)\b(?:\W+\w+){0,25}?\W+(?:tenan\w*|lessees?|occupants?|dwelling units?|apartments?|residents?|rental agreements?|leases?)\b|\b(?:tenan\w*|lessees?|occupants?|dwelling units?|apartments?|rental agreements?|leases?)\b(?:\W+\w+){0,25}?\W+(?:pesticid\w*|pest control|pest treatment|fumigat\w*|exterminat\w*|termite\w*)\b`: 1 hits in 1 sections; tenancy-filtered 1: 27-40-530

**SC-B6-002** (`adverse-proceeding-notice`). Controls: null 0, positive 3389. Landlord duty to tell tenants of proceedings affecting the property; tenant duty to forward notices of proceedings to the landlord.
- "notify-tenant-proceeding" `\b(?:notif\w*|notice|inform\w*|serve\w*)\b(?:\W+\w+){0,8}?\W+(?:tenants?|occupants?|lessees?)\b(?:\W+\w+){0,12}?\W+(?:proceeding|action|suit|foreclos\w*|condemn\w*|summons)\b`: 2 hits in 2 sections; sections: 39-20-45, 44-96-85
- "tenant-forward" `\b(?:tenants?|lessees?)\b(?:\W+\w+){0,10}?\W+(?:inform|notify|deliver|forward)\w*\b(?:\W+\w+){0,10}?\W+(?:landlord|lessor)\b`: 6 hits in 5 sections; sections: 27-40-610, 27-40-650, 27-40-910, 36-2A-508, 36-2A-516

**SC-B7-002** (`pet-eviction-fact-sheet`). Controls: null 0, positive 3389. State fact sheet or other duty about pets when a tenant is evicted.
- "pet-eviction" `\b(?:pets?|dogs?|cats?|animals?|companion animals?)\b(?:\W+\w+){0,15}?\W+(?:evict\w*|eject\w*|dispossess\w*|writs?|abandon\w*)\b|\b(?:evict\w*|eject\w*|dispossess\w*)\b(?:\W+\w+){0,15}?\W+(?:pets?|dogs?|cats?|animals?)\b`: 10 hits in 7 sections; tenancy-filtered 0: none
- "fact-sheet" `fact sheets?|informational (?:sheet|pamphlet|brochure)`: 13 hits in 6 sections; tenancy-filtered 0: none

**SC-B7-003** (`plain-language`). Controls: null 0, positive 3389. Plain-language or readability law reaching residential leases; statement of consumer restrictions.
- "plain-language" `plain language|plain english|readab\w*|easily understood|understandable language|everyday words`: 60 hits in 47 sections; tenancy-filtered 0: none
- "consumer-statement" `\b(?:statement|summary|list)\b(?:\W+\w+){0,6}?\W+(?:consumer restrictions|restrictions on the consumer|waivers?)\b`: 6 hits in 5 sections; tenancy-filtered 0: none

**SC-B6-003** (`animal-care-access`). Controls: null 0, positive 3389. Landlord right to enter a dwelling to care for or remove a tenant animal; tenant animal left without care.
- "enter-animal" `\b(?:enter|entry|access)\w*\b(?:\W+\w+){0,10}?\W+(?:animals?|pets?)\b|\b(?:animals?|pets?)\b(?:\W+\w+){0,10}?\W+(?:enter|entry|access)\w*\b`: 40 hits in 26 sections; tenancy-filtered 3: 27-37-240, 27-37-250, 47-3-720
- "animal-tenant" `\b(?:tenant|lessee|occupant)\w*\b(?:\W+\w+){0,10}?\W+(?:animals?|pets?)\b(?:\W+\w+){0,10}?\W+(?:care|feed|remov\w*|abandon\w*)`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B6-004** (`alt-housing`). Controls: null 0, positive 3389. Landlord duty to provide or pay for alternative or substitute housing, relocation of tenants.
- "substitute-housing" `\b(?:substitute|alternative|alternate|temporary|comparable|replacement)\s+(?:housing|dwelling|lodging|accommodations?|quarters|premises|units?)\b`: 21 hits in 10 sections; tenancy-filtered 11: 10-5-220, 10-5-250, 27-40-410, 39-5-145
- "relocation" `\breloca\w*\b(?:\W+\w+){0,10}?\W+(?:tenants?|occupants?|residents?|households?)\b|\b(?:tenants?|occupants?|residents?)\b(?:\W+\w+){0,10}?\W+reloca\w*`: 10 hits in 5 sections; tenancy-filtered 0: none

**SC-B7-004** (`political-access`). Controls: null 0, positive 3389. Candidate, canvasser or petition-circulator access to apartment buildings or tenants.
- "political-access" `\b(?:candidat\w*|campaign\w*|canvasser\w*|petition circulat\w*|voter registration|door[- ]to[- ]door|political)\b(?:\W+\w+){0,20}?\W+(?:apartments?|multi[- ]?(?:unit|family)\w*|tenan\w*|residential (?:buildings?|propert\w*|premises)|dwelling units?|condominiums?)\b|\b(?:apartments?|multi[- ]?(?:unit|family)\w*|tenan\w*|residential (?:buildings?|propert\w*|premises)|dwelling units?)\b(?:\W+\w+){0,20}?\W+(?:candidat\w*|campaign\w*|canvasser\w*|petition circulat\w*|door[- ]to[- ]door)\b`: 2 hits in 2 sections; tenancy-filtered 0: none

**SC-B6-005** (`asbestos-hazards`). Controls: null 0, positive 3389. Asbestos disclosure, notice or management duty running to tenants; asbestos licensing.
- "asbestos" `\basbestos\b`: 124 hits in 34 sections; tenancy-filtered 0: none
- "asbestos-notice" `\basbestos\b(?:\W+\w+){0,10}?\W+(?:disclos\w*|notif\w*|notice|warn\w*|inform\w*)|\b(?:disclos\w*|notif\w*|notice|warn\w*|inform\w*)\b(?:\W+\w+){0,10}?\W+asbestos\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B6-006** (`hoa`). Controls: null 0, positive 3389. Association rules on tenants: approval of leases, rent collection from tenants, disclosure of association documents to tenants.
- "assoc-tenant" `\b(?:associations?|co-owners?|regime|condominiums?)\b(?:\W+\w+){0,10}?\W+(?:tenants?|lessees?|renters?)\b|\b(?:tenants?|lessees?|renters?)\b(?:\W+\w+){0,10}?\W+(?:homeowners associations?|co-owners?|regime|condominiums?)\b`: 26 hits in 18 sections; tenancy-filtered 26: 23-35-175, 27-1-60, 27-31-30, 27-31-420, 27-31-430, 27-31-440, 31-23-40, 33-41-720, 33-47-410, 34-28-620, 48-28-30, 57-5-1495, 58-11-10, 58-27-10, 58-5-920, 58-9-10, 58-9-297, 62-1-501
- "assoc-lease-approval" `\b(?:approv\w*|consent)\b(?:\W+\w+){0,8}?\W+(?:lease|leasing|rental)\b(?:\W+\w+){0,8}?\W+(?:units?|apartments?|lots?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B7-005** (`pool-safety`). Controls: null 0, positive 3389. Pool barrier, safety-notice or lease duty on residential landlords; regs searched too.
- "pool-barrier" `\b(?:swimming pools?|pools?|spas?|hot tubs?)\b(?:\W+\w+){0,12}?\W+(?:fenc\w*|barriers?|enclos\w*|gates?|alarms?|covers?|safety notice|warnings?)\b`: 1 hits in 1 sections; tenancy-filtered 0: none
- "pool-tenancy" `\b(?:swimming pools?|spas?|hot tubs?)\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|lessees?|landlords?|rental\w*|apartments?|leases?)\b|\b(?:tenan\w*|lessees?|landlords?|rental\w*|apartments?|leases?)\b(?:\W+\w+){0,20}?\W+(?:swimming pools?|spas?|hot tubs?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B6-007** (`automatic-renewal`). Controls: null 0, positive 3389. Automatic renewal of residential leases: format, reminder notice, limits.
- "auto-renew" `\b(?:automatic\w*\W+(?:\w+\W+){0,3}?renew\w*|renew\w*\W+(?:\w+\W+){0,3}?automatic\w*)`: 29 hits in 11 sections; tenancy-filtered 1: 27-31-420
- "renew-notice-tenant" `\brenew\w*\b(?:\W+\w+){0,10}?\W+(?:tenants?|lessees?|rental agreement|lease)\b|\b(?:tenants?|lessees?|rental agreement|lease)\b(?:\W+\w+){0,10}?\W+renew\w*`: 54 hits in 28 sections; tenancy-filtered 54: 1-11-55, 1-11-56, 12-37-3150, 12-37-620, 12-37-940, 12-54-122, 27-40-910, 27-47-310, 31-23-40, 36-1-203, 36-2A-103, 36-2A-201, 37-5-109, 37-5-110, 37-9-101, 38-12-30, 4-29-70, 40-57-135, 58-27-2560, 58-27-2600, 58-27-2610, 58-27-2620, 58-27-2630, 58-27-2660, 58-39-130

**SC-B7-006** (`portable-cooling-device`). Controls: null 0, positive 3389. Tenant right to install a portable or window cooling device; heat-event rules.
- "cooling-tenancy" `\b(?:air[- ]condition\w*|cooling (?:devices?|units?|systems?|equipment)|window units?|heat pumps?|evaporative coolers?)\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|lessees?|landlords?|leases?|rental agreements?|residents?|renters?)\b|\b(?:tenan\w*|lessees?|landlords?|leases?|rental agreements?|renters?)\b(?:\W+\w+){0,20}?\W+(?:air[- ]condition\w*|cooling (?:devices?|units?|systems?|equipment)|window units?|heat pumps?)\b`: 4 hits in 4 sections; tenancy-filtered 4: 27-40-510, 27-47-210, 38-12-270, 38-12-480
- "heat-event" `extreme heat|heat (?:event|emergenc\w*|advisor\w*|wave)|maximum (?:indoor )?temperature`: 1 hits in 1 sections; tenancy-filtered 0: none

**SC-B7-007** (`portable-solar`). Controls: null 0, positive 3389. Tenant solar right; statute voiding covenant or lease restrictions on solar devices.
- "solar-restriction" `\bsolar\b(?:\W+\w+){0,15}?\W+(?:covenants?|restrict\w*|deeds?|leases?|tenan\w*|renters?|homeowners|associations?|prohibit\w*|void\w*)\b|\b(?:covenants?|restrict\w*|leases?|tenan\w*|renters?|associations?|prohibit\w*)\b(?:\W+\w+){0,15}?\W+solar\b`: 2 hits in 2 sections; sections: 58-27-2610, 58-27-2660
- "plug-in-solar" `plug[- ]in (?:solar|generat\w*)|portable (?:solar|generat\w*)|balcony solar|solar (?:generation )?devices?`: 0 hits in 0 sections; sections: 

**SC-B6-008** (`bed-bug-cooperation`). Controls: null 0, positive 3389. Tenant duty to report or cooperate with bed bug or pest inspection and treatment; cost allocation.
- "pests" `\bbed ?bugs?\b|\bvermin\b|\bextermin\w*|\binfestation\w*`: 27 hits in 17 sections; tenancy-filtered 0: none
- "pest-tenant" `\b(?:pests?|insects?|rodents?)\b(?:\W+\w+){0,10}?\W+(?:tenants?|lessees?|dwelling units?)\b|\b(?:tenants?|lessees?|dwelling units?)\b(?:\W+\w+){0,10}?\W+(?:pests?|insects?|rodents?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B6-009** (`balcony-inspection`). Controls: null 0, positive 3389. Periodic balcony, deck or exterior elevated element inspection duty.
- "balcony" `\bbalcon\w*|\bdecks?\b(?:\W+\w+){0,6}?\W+(?:inspect\w*|load|repair\w*)|\bexterior elevated\b|\belevated (?:walkway|landing|structure)s?\b`: 9 hits in 4 sections; sections: 45-4-60, 45-5-50, 56-5-1570, 56-5-2530

**SC-B7-008** (`private-well-testing`). Controls: null 0, positive 3389. Private well testing or disclosure of results to tenants; regs searched too.
- "well-tenancy" `\bwells?\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|lessees?|landlords?|leases?|rental\w*|renters?|lessors?)\b|\b(?:tenan\w*|lessees?|landlords?|leases?|rental\w*|renters?|lessors?)\b(?:\W+\w+){0,20}?\W+(?:private|domestic|individual|residential) (?:water )?wells?\b`: 7 hits in 7 sections; sections: 16-3-1020, 27-33-10, 48-43-30, 48-43-390, 55-11-630, 6-17-70, 62-7-920
- "well-testing" `\b(?:private|domestic|individual|residential) (?:drinking )?(?:water )?wells?\b(?:\W+\w+){0,20}?\W+(?:test\w*|sampl\w*|analy\w*|results?|disclos\w*)\b`: 0 hits in 0 sections; sections: 

**SC-B6-010** (`binding-arbitration`). Controls: null 0, positive 3389. Arbitration of residential landlord-tenant disputes; lease arbitration clauses.
- "arbitration" `\barbitrat\w*`: 278 hits in 94 sections; tenancy-filtered 2: 56-28-90, 62-5-422
- "arb-lease" `\barbitrat\w*\b(?:\W+\w+){0,12}?\W+(?:lease|rental agreement|tenan\w*|landlord|dwelling)\b|\b(?:lease|rental agreement|tenan\w*|landlord|dwelling)\b(?:\W+\w+){0,12}?\W+arbitrat\w*`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B6-011** (`cannabis`). Controls: null 0, positive 3389. Medical-cannabis or hemp housing protection; landlord limits on cannabis smoking or growing (SC item: Title 44 Ch. 53).
- "cannabis-housing" `\b(?:marijuana|cannabi\w*|hemp)\b(?:\W+\w+){0,12}?\W+(?:tenants?|landlords?|lease|rental|housing|dwelling|residen\w*)\b|\b(?:tenants?|landlords?|lease|rental|housing|dwelling)\b(?:\W+\w+){0,12}?\W+(?:marijuana|cannabi\w*|hemp)\b`: 0 hits in 0 sections; sections: 
- "medical-cannabis" `\bmedical (?:cannabis|marijuana)\b`: 1 hits in 1 sections; sections: 44-53-1840

**SC-B7-009** (`promises-to-repair`). Controls: null 0, positive 3389. Landlord promises to repair or clean: writing, completion date, timing rules.
- "repair-promise" `\b(?:promis\w*|agreed|agreements?|represent\w*)\b(?:\W+\w+){0,8}?\W+(?:repair\w*|clean\w*|improvements?|renovat\w*)\b|\b(?:repairs?|improvements?)\b(?:\W+\w+){0,8}?\W+(?:promised|agreed to|in writing|completion date)\b`: 34 hits in 34 sections; tenancy-filtered 8: 13-12-40, 13-19-40, 13-21-50, 27-40-530, 32-2-10, 36-2A-309, 36-2A-310, 56-3-840

**SC-B7-010** (`prop65-rental-warning`). Controls: null 0, positive 3389. Chemical-exposure warning (Prop 65 style, formaldehyde notice) for rental housing.
- "chemical-warning" `formaldehyde|carcinogen\w*|reproductive (?:toxicity|harm)|(?:chemical|toxic\w*) (?:exposure )?warnings?|Proposition 65`: 5 hits in 2 sections; tenancy-filtered 0: none

**SC-B7-011** (`property-tax-rent-disclosure`). Controls: null 0, positive 3389. Statement of property-tax share of rent; renter property-tax credit.
- "rent-property-tax" `\b(?:rent|rental payments?)\b(?:\W+\w+){0,12}?\W+(?:property tax\w*|real property tax\w*|ad valorem)\b|\b(?:property tax\w*|ad valorem tax\w*)\b(?:\W+\w+){0,12}?\W+(?:paid as rent|attributable to rent|portion of (?:the )?rent|renters?|tenants?)\b`: 1 hits in 1 sections; sections: 12-44-20
- "renter-credit" `renters?'? (?:tax )?credit|rent rebate|property tax (?:credit|rebate|refund)\w*(?:\W+\w+){0,10}?\W+(?:renters?|tenants?)`: 0 hits in 0 sections; sections: 

**SC-B6-012** (`certificate-of-occupancy-disclosure`). Controls: null 0, positive 3389. Disclosure to tenants of certificate-of-occupancy status; rent bar without a certificate.
- "co-disclose" `\bcertificates? of occupancy\b`: 27 hits in 17 sections; tenancy-filtered 0: none
- "co-tenant" `\bcertificates? of occupancy\b(?:\W+\w+){0,15}?\W+(?:tenants?|lease|rent\w*|lessees?|disclos\w*)\b|\b(?:tenants?|lease|rent\w*|lessees?|disclos\w*)\b(?:\W+\w+){0,15}?\W+certificates? of occupancy\b`: 1 hits in 1 sections; tenancy-filtered 0: none

**SC-B6-013** (`children-occupancy`). Controls: null 0, positive 3389. Lease content on children; familial-status occupancy rules; occupancy standards.
- "children-lease" `\b(?:children|minors?|child)\b(?:\W+\w+){0,10}?\W+(?:tenants?|lease|rental agreement|dwelling unit|occupan\w*)\b|\b(?:tenants?|lease|rental agreement|dwelling unit)\b(?:\W+\w+){0,10}?\W+(?:children|minors?)\b`: 11 hits in 10 sections; tenancy-filtered 8: 34-19-30, 34-28-640, 34-30-1650, 44-53-1430, 44-53-1440, 62-1-201, 63-5-660
- "occupancy-standard" `\b(?:occupancy|occupants?)\b(?:\W+\w+){0,6}?\W+(?:standards?|limits?|maximum)\b|\bpersons? per (?:bedroom|room|square)`: 4 hits in 4 sections; tenancy-filtered 2: 31-21-70, 34-26-500

**SC-B7-012** (`protected-class-inquiry-ban`). Controls: null 0, positive 3389. Ban on inquiring about or recording a protected class, distinct from the discrimination ban.
- "class-inquiry" `\b(?:inquir\w*|ask\w*|questions?|records?|application)\b(?:\W+\w+){0,12}?\W+(?:race|color|religion|national origin|familial status|handicap|disabilit\w*|sex|sexual orientation|gender identity|immigration status|citizenship)\b`: 42 hits in 33 sections; tenancy-filtered 1: 31-21-70

**SC-B6-014** (`cold-weather-vacate-notice`). Controls: null 0, positive 3389. Tenant notice before vacating in cold weather; freeze protection.
- "freeze" `\bfreez\w*\b(?:\W+\w+){0,10}?\W+(?:pipes?|plumbing)\b|\b(?:pipes?|plumbing)\b(?:\W+\w+){0,10}?\W+freez\w*`: 1 hits in 1 sections; sections: 40-10-20
- "cold-vacate" `\b(?:cold weather|winter|heating season)\b(?:\W+\w+){0,15}?\W+(?:vacat\w*|abandon\w*|tenants?|notice)\b`: 0 hits in 0 sections; sections: 

**SC-B7-013** (`purpose-limitation`). Controls: null 0, positive 3389. Statute voiding or annulling a lease when premises are used for a prohibited purpose.
- "lease-void" `\b(?:leases?|rental agreements?|tenanc\w*|lessees?|demise)\b(?:\W+\w+){0,20}?\W+(?:void\w*|forfeit\w*|annul\w*)\b|\b(?:void\w*|forfeit\w*|annul\w*)\b(?:\W+\w+){0,20}?\W+(?:leases?|rental agreements?|tenanc\w*)\b`: 26 hits in 26 sections; tenancy-filtered 25: 10-9-10, 12-37-3150, 27-15-50, 27-23-40, 27-50-270, 31-1-190, 31-1-610, 36-2A-304, 36-2A-305, 36-2A-308, 37-2-407, 37-2-415, 48-43-380, 51-1-60, 58-17-740, 59-117-65, 59-125-130, 59-127-85, 59-130-60, 59-133-60, 59-53-1784, 59-53-2430, 59-53-290, 59-53-630, 59-53-740
- "unlawful-use-tenancy" `\b(?:nuisance|prostitut\w*|lewd\w*|gaming|gambl\w*|controlled substances?|illegal activit\w*|unlawful purpose)\b(?:\W+\w+){0,25}?\W+(?:leases?|rental agreements?|tenan\w*|lessees?|lessors?)\b|\b(?:leases?|rental agreements?|tenan\w*|lessees?|lessors?)\b(?:\W+\w+){0,25}?\W+(?:nuisance|prostitut\w*|lewd\w*|gaming|gambl\w*|illegal activit\w*|unlawful purpose)\b`: 4 hits in 4 sections; tenancy-filtered 4: 15-43-10, 16-1-10, 16-15-100, 27-40-540

**SC-B7-014** (`recycling-notice`). Controls: null 0, positive 3389. Landlord duty to provide or tell tenants about recycling.
- "recycling-tenancy" `\brecycl\w*\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|multi[- ]?family|multi[- ]?unit|apartments?|landlords?|residential rental|lessees?|occupants?)\b|\b(?:tenan\w*|multi[- ]?family|multi[- ]?unit|apartments?|landlords?|lessees?)\b(?:\W+\w+){0,20}?\W+recycl\w*`: 1 hits in 1 sections; sections: 16-17-680

**SC-B7-015** (`religious-cultural-display`). Controls: null 0, positive 3389. Tenant or owner right to display religious or cultural items.
- "religious-display" `\b(?:religious|cultural)\b(?:\W+\w+){0,10}?\W+(?:displays?|symbols?|items?|objects?|signs?|decorations?|mezuzah\w*)\b`: 9 hits in 8 sections; tenancy-filtered 3: 57-25-140, 57-25-430, 57-25-640

**SC-B6-015** (`common-area-lighting`). Controls: null 0, positive 3389. Common-area lighting on a tenant-paid electric service; common-area lighting duty.
- "common-light" `\bcommon (?:areas?|hallways?|stairways?|elements?)\b(?:\W+\w+){0,12}?\W+(?:meter\w*|electric\w*|lights?|lighting|utilit\w*)\b|\b(?:meter\w*|lighting|lights?)\b(?:\W+\w+){0,12}?\W+common (?:areas?|hallways?|stairways?)\b`: 1 hits in 1 sections; sections: 27-47-450
- "tenant-meter" `\btenant\W+s?\W*(?:own\W+)?(?:meter|electric service)\b|\b(?:meter|electric service)\b(?:\W+\w+){0,6}?\W+serv\w*\b(?:\W+\w+){0,6}?\W+(?:outside|other units?|common)`: 0 hits in 0 sections; sections: 

**SC-B6-016** (`communal-land-lease-approval`). Controls: null 0, positive 3389. Government approval of leases of tribal, communal or public trust land.
- "tribal-lease" `\b(?:Indian|tribal|Tribe|native|communal|reservation)\b(?:\W+\w+){0,10}?\W+(?:lands?)\b(?:\W+\w+){0,12}?\W+(?:lease\w*|leasing)\b|\blease\w*\b(?:\W+\w+){0,10}?\W+(?:Indian|tribal|Catawba)\b`: 5 hits in 4 sections; tenancy-filtered 5: 27-15-20, 27-15-40, 27-15-50, t27c015
- "lease-approval" `\blease\w*\b(?:\W+\w+){0,10}?\W+(?:approv\w*|consent)\b(?:\W+\w+){0,8}?\W+(?:Governor|Secretary|Board|Commission|department)\b`: 10 hits in 10 sections; tenancy-filtered 10: 31-1-180, 4-29-67, 56-3-840, 58-27-1300, 59-125-130, 59-130-50, 59-133-50, 59-135-50, 59-136-150, 59-19-250

**SC-B7-016** (`tenant-display-rights`). Controls: null 0, positive 3389. Tenant display rights: flags, political signs, banners; lease or covenant limits.
- "display-tenancy" `\b(?:display\w*|flags?|political signs?|campaign signs?|banners?|yard signs?)\b(?:\W+\w+){0,15}?\W+(?:tenan\w*|lease|rental agreements?|restrictive covenants?|homeowners.? association\w*)\b|\b(?:tenan\w*|lease|rental agreements?|restrictive covenants?)\b(?:\W+\w+){0,15}?\W+(?:display\w*|flags?|political signs?|campaign signs?|banners?)\b`: 12 hits in 7 sections; tenancy-filtered 12: 27-1-60, 34-26-410, 37-2-307, 37-2-308, 57-25-430, 57-25-640, 58-23-50
- "political-sign" `political (?:campaign )?signs?|campaign signs?`: 3 hits in 1 sections; tenancy-filtered 0: none

**SC-B6-017** (`construction-liens`). Controls: null 0, positive 3389. Construction liens for tenant-ordered work and the landlord interest; notice of nonresponsibility.
- "lien-lessee" `\b(?:mechanic\W*s|construction|materialm[ae]n\W*s)?\s*liens?\b(?:\W+\w+){0,15}?\W+(?:tenants?|lessees?|lessors?|leasehold)\b|\b(?:tenants?|lessees?|lessors?|leasehold)\b(?:\W+\w+){0,15}?\W+(?:mechanic\W*s|construction) liens?\b`: 14 hits in 11 sections; tenancy-filtered 14: 27-39-10, 27-40-630, 27-40-740, 29-1-10, 29-1-20, 29-13-10, 29-13-30, 31-13-170, 36-9-317, 36-9-521, 56-19-10
- "nonresponsibility" `\bnotice of non-?responsibility\b|\bnot (?:be )?subject to (?:any )?liens?\b`: 1 hits in 1 sections; tenancy-filtered 0: none

**SC-B7-017** (`rent-concession`). Controls: null 0, positive 3389. Rent concessions: statement in lease, clawback, disclosure.
- "rent-concession" `\b(?:rent(?:al)?|move[- ]in)\b(?:\W+\w+){0,4}?\W+(?:concessions?|credits?|rebates?|discounts?|abatements?|free)\b|\bfree rent\b|\bconcessions?\b(?:\W+\w+){0,8}?\W+(?:rent|tenan\w*|lease)`: 13 hits in 7 sections; tenancy-filtered 13: 41-18-30, 41-18-40, 57-3-205, 57-5-1320, 59-20-20, 59-31-260, 59-31-270

**SC-B6-018** (`consumer-protection-act`). Controls: null 0, positive 3389. Consumer protection act reach to residential leases; blank spaces and copy-at-signing as unlawful practices.
- "utpa-lease" `\b(?:unfair|deceptive)\b(?:\W+\w+){0,10}?\W+(?:practices?|acts?)\b(?:\W+\w+){0,15}?\W+(?:lease|leases|rental agreements?|tenants?|landlords?|dwelling units?)\b`: 0 hits in 0 sections; tenancy-filtered 0: none
- "blank-copy" `\bblank spaces?\b|\b(?:copy|copies)\b(?:\W+\w+){0,6}?\W+(?:lease|rental agreement)\b(?:\W+\w+){0,6}?\W+(?:sign\w*|execut\w*)`: 1 hits in 1 sections; tenancy-filtered 0: none

**SC-B7-018** (`rent-escalation`). Controls: null 0, positive 3389. Rent escalation or mid-term increase clauses; limits, notice, retaliation interplay.
- "rent-escalation" `\b(?:escalat\w*|index\w*|consumer price index|cost[- ]of[- ]living)\b(?:\W+\w+){0,12}?\W+(?:rent|rental|lease)\b|\b(?:rent|rental payments?)\b(?:\W+\w+){0,12}?\W+(?:escalat\w*|consumer price index|adjust\w*)\b|\b(?:increas\w*|rais\w*)\b(?:\W+\w+){0,6}?\W+rent\b`: 3 hits in 1 sections; tenancy-filtered 3: 27-40-910

**SC-B7-019** (`rent-installments`). Controls: null 0, positive 3389. Rent paid in installments; partial-payment treatment; installment late charges.
- "rent-installments" `partial (?:payments?|rent)|installments?\b(?:\W+\w+){0,8}?\W+(?:of )?rent\b|\brent\b(?:\W+\w+){0,20}?\W+installments?\b`: 21 hits in 19 sections; tenancy-filtered 2: 27-40-310, 36-2A-522

**SC-B7-020** (`rent-reporting`). Controls: null 0, positive 3389. Positive rent reporting offers; notice before reporting late rent to a credit bureau.
- "rent-reporting" `\b(?:rent(?:al)? payments?|rent(?:al)? history|payment history)\b(?:\W+\w+){0,15}?\W+(?:report\w*|credit (?:bureau|reporting)|consumer reporting)\b|\b(?:credit (?:bureaus?|reporting agenc\w*)|consumer reporting agenc\w*)\b(?:\W+\w+){0,15}?\W+(?:rent\w*|tenan\w*|landlords?|lease)\b`: 0 hits in 0 sections; sections: 

**SC-B6-019** (`disaster-duties`). Controls: null 0, positive 3389. Declared disaster effects on tenancies and rent; housing displaced persons as guests.
- "disaster-tenancy" `\b(?:disasters?|states? of emergency|hurricanes?|evacuat\w*)\b(?:\W+\w+){0,15}?\W+(?:tenan\w*|lease\w*|rental agreements?|evict\w*|ejectment|rent)\b|\b(?:tenan\w*|lease\w*|rental agreements?|evict\w*|ejectment)\b(?:\W+\w+){0,15}?\W+(?:disasters?|states? of emergency|hurricanes?|evacuat\w*)\b`: 4 hits in 2 sections; sections: 27-50-260, 39-5-145
- "displaced" `\b(?:displaced|evacuees?|disaster victims?)\b(?:\W+\w+){0,15}?\W+(?:guests?|housing|shelter\w*|occupan\w*|lodging|tenants?)\b`: 4 hits in 4 sections; sections: 25-9-20, 25-9-420, 31-6-90, 31-7-90

**SC-B6-020** (`defective-drywall-disclosure`). Controls: null 0, positive 3389. Defective or corrosive drywall disclosure.
- "drywall" `\bdrywall\b|\bsheetrock\b|\bgypsum (?:board|wallboard)\b|\bwallboard\b`: 1 hits in 1 sections; sections: 40-11-410

**SC-B7-021** (`rent-tax`). Controls: null 0, positive 3389. Sales or rental tax on residential rent; transient accommodations tax reach; pass-through of taxes to tenants.
- "rent-tax-tenancy" `\b(?:sales|excise|rental|occupancy|accommodations?) tax\w*\b(?:\W+\w+){0,20}?\W+(?:residential (?:rent\w*|leases?|propert\w*)|dwelling units?|apartments?|tenan\w*)\b|\b(?:residential (?:rent\w*|leases?)|dwelling units?|apartments?|tenan\w*)\b(?:\W+\w+){0,20}?\W+(?:sales|excise|rental|occupancy|accommodations?) tax\w*\b`: 1 hits in 1 sections; sections: 11-11-157
- "tax-pass-through" `\bpass\w*\b(?:\W+\w+){0,6}?\W+(?:through|on)\b(?:\W+\w+){0,8}?\W+(?:tenants?|lessees?|renters?)\b`: 4 hits in 3 sections; sections: 36-2A-219, 38-12-270, 38-12-480

**SC-B7-022** (`renters-insurance-rules`). Controls: null 0, positive 3389. Renter's insurance requirements: carrier choice, force-placed cost, advisory notice.
- "renters-insurance" `renters?'?s? insurance|tenants?'?s? insurance|\b(?:tenan\w*|lessees?|renters?)\b(?:\W+\w+){0,12}?\W+(?:insurance (?:polic\w*|coverage)|insurers?|insure)\b|\b(?:insurance (?:polic\w*|coverage)|insurers?)\b(?:\W+\w+){0,12}?\W+(?:tenan\w*|lessees?|renters?)\b`: 18 hits in 12 sections; tenancy-filtered 18: 13-7-30, 36-2A-220, 38-12-30, 38-43-500, 38-57-75, 38-75-60, 38-97-40, 39-5-180, 41-18-100, 41-18-90, 58-23-50, 62-2-803

**SC-B6-021** (`designated-repairer`). Controls: null 0, positive 3389. Landlord-designated repairer; tenant-made repairs at landlord cost.
- "repairer" `\b(?:designat\w*|approv\w*|authoriz\w*)\b(?:\W+\w+){0,6}?\W+(?:repair\w*|contractors?|repairm[ae]n)\b(?:\W+\w+){0,12}?\W+(?:tenants?|landlords?|dwelling units?|rental)\b`: 1 hits in 1 sections; tenancy-filtered 1: 27-40-630
- "tenant-repair" `\btenants?\b(?:\W+\w+){0,10}?\W+(?:make|makes|making|perform\w*)\W+(?:\w+\W+){0,3}?repairs?\b`: 2 hits in 2 sections; tenancy-filtered 2: 27-40-440, 27-40-630

**SC-B7-023** (`repair-notice`). Controls: null 0, positive 3389. Form or method of tenant repair notices; lease designation of notice method.
- "repair-request" `\b(?:repair|maintenance) requests?\b|\brequests? for (?:repairs?|maintenance)\b|\b(?:notice|notify|notif\w*)\b(?:\W+\w+){0,8}?\W+(?:of )?(?:the )?(?:need for |needed )?repairs?\b`: 17 hits in 14 sections; tenancy-filtered 5: 5-25-1330, 57-1-430, 57-1-470, 58-36-20

**SC-B6-022** (`double-letting`). Controls: null 0, positive 3389. Double letting of a room or unit; remedies.
- "double-let" `\b(?:double|twice)\W+(?:let\w*|rent\w*|lease\w*|book\w*)\b|\b(?:rent|lease|let)\w*\b(?:\W+\w+){0,6}?\W+(?:same|identical)\W+(?:\w+\W+){0,3}?(?:room|unit|dwelling|premises)\b(?:\W+\w+){0,8}?\W+(?:two|more than one|another)\b`: 0 hits in 0 sections; sections: 

**SC-B6-023** (`drug-free-housing-addendum`). Controls: null 0, positive 3389. Drug-free or crime-free lease addendum rules.
- "drug-free" `\bdrug[- ]free\b(?:\W+\w+){0,10}?\W+(?:hous\w*|lease|addend\w*|tenan\w*|rental)\b|\bcrime[- ]free\b`: 0 hits in 0 sections; sections: 
- "drug-lease" `\b(?:controlled substances?|drugs?)\b(?:\W+\w+){0,12}?\W+(?:lease|rental agreement|tenancy|tenants?)\b(?:\W+\w+){0,12}?\W+(?:terminat\w*|evict\w*|breach)\b`: 0 hits in 0 sections; sections: 

**SC-B7-024** (`repair-cost-termination`). Controls: null 0, positive 3389. Termination of a lease because repair cost exceeds a threshold.
- "repair-cost-threshold" `\b(?:cost|costs|expense)s?\b(?:\W+\w+){0,8}?\W+(?:repair\w*|rehabilitat\w*|restor\w*)\b(?:\W+\w+){0,12}?\W+(?:exceed\w*|more than|greater than|percent)\b|\b(?:repair\w*|rehabilitat\w*)\b(?:\W+\w+){0,10}?\W+(?:exceed\w*|more than)\b(?:\W+\w+){0,6}?\W+(?:value|percent)\b`: 24 hits in 11 sections; tenancy-filtered 0: none

**SC-B7-025** (`repair-escrow-exemption-notice`). Controls: null 0, positive 3389. Rent escrow or repair remedies with a small-landlord exemption notice.
- "rent-escrow-exemption" `\b(?:rent|rents)\b(?:\W+\w+){0,6}?\W+(?:escrow\w*|withh\w*|deposited with the court|into court|paid into)\b|\b(?:payment|pay|deposit)\w* of rent into court\b|\bescrow\w*\b(?:\W+\w+){0,10}?\W+(?:rent|tenan\w*)\b|repair and deduct|(?:three|four) or fewer dwelling units`: 3 hits in 3 sections; tenancy-filtered 3: 27-40-790, 27-47-520, 38-12-30

**SC-B7-026** (`rights-responsibilities-guide`). Controls: null 0, positive 3389. State-published rights guide or statement of tenant rights given with the lease.
- "rights-guide" `\b(?:guide|handbook|pamphlet|brochure|summary|statement|booklet)\b(?:\W+\w+){0,10}?\W+(?:rights|responsibilities)\b(?:\W+\w+){0,10}?\W+(?:tenan\w*|landlords?|renters?|lessees?)\b|\b(?:tenan\w*|landlords?|renters?)\b(?:\W+\w+){0,4}?\W+(?:rights|bill of rights)\b(?:\W+\w+){0,10}?\W+(?:guide|handbook|pamphlet|brochure|summary|statement|booklet)\b`: 0 hits in 0 sections; sections: 

**SC-B6-024** (`electric-submetering-disclosure`). Controls: null 0, positive 3389. Electric submetering, master metering and resale of electricity to tenants.
- "submeter" `\bsub-?meter\w*|\bmaster[- ]meter\w*|\bindividual meter\w*`: 2 hits in 2 sections; tenancy-filtered 1: 27-33-50
- "resale" `\bresold\b|\bresell\w*\b|\bresale\b(?:\W+\w+){0,6}?\W+(?:electric\w*|current|power|water|gas)\b`: 96 hits in 58 sections; tenancy-filtered 12: 16-11-910, 16-11-915, 16-11-930, 27-32-55, 56-16-10, 58-27-10, 58-31-310, 58-33-220, 58-4-150

**SC-B6-025** (`emergency-contact`). Controls: null 0, positive 3389. Emergency contact or emergency phone requirements in tenancies.
- "emergency-contact" `\bemergency contact\w*|\b(?:contact|telephone|phone) (?:number|information)\b(?:\W+\w+){0,10}?\W+emergenc\w*`: 7 hits in 7 sections; tenancy-filtered 0: none

**SC-B6-026** (`eminent-domain`). Controls: null 0, positive 3389. Effect of eminent domain on residential leases; tenant share of award.
- "condemn-lease" `\b(?:condemn\w*|eminent domain|taking)\b(?:\W+\w+){0,12}?\W+(?:lease\w*|tenan\w*|lessee\w*|rental agreements?)\b|\b(?:lease\w*|tenan\w*|lessee\w*|rental agreements?)\b(?:\W+\w+){0,12}?\W+(?:condemn\w*|eminent domain)\b`: 17 hits in 17 sections; sections: 11-40-40, 16-15-100, 27-50-240, 3-5-100, 31-3-450, 36-1-201, 36-2A-103, 44-113-20, 48-11-110, 49-19-1440, 55-11-10, 55-11-140, 55-11-340, 55-11-630, 55-9-80, 55-9-90, 57-25-190

**SC-B7-027** (`sanitary-code-variance`). Controls: null 0, positive 3389. Notice to tenants of a housing, sanitary or building code variance or exception.
- "variance-tenancy" `\b(?:variances?|exceptions?|waivers?)\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|lessees?|occupants?|rental agreements?|leases?)\b|\b(?:tenan\w*|lessees?|occupants?)\b(?:\W+\w+){0,20}?\W+(?:variances?)\b`: 15 hits in 13 sections; tenancy-filtered 14: 27-35-30, 27-37-150, 33-31-1202, 36-2A-208, 36-2A-514, 37-1-107, 37-15-40, 39-57-20, 4-12-30, 50-11-160, 59-23-230, 6-29-770
- "code-variance" `\b(?:variances?|exceptions?)\b(?:\W+\w+){0,10}?\W+(?:building|housing|sanitary|health|fire) codes?\b|\b(?:building|housing|sanitary|fire) codes?\b(?:\W+\w+){0,10}?\W+(?:variances?|exceptions?)\b`: 2 hits in 2 sections; tenancy-filtered 0: none

**SC-B7-028** (`seasonal-tenancy`). Controls: null 0, positive 3389. Seasonal or vacation tenancies: scope, nonrenewal, special eviction rules.
- "seasonal-rental" `\bseasonal\b(?:\W+\w+){0,10}?\W+(?:tenan\w*|leases?|rentals?|occupan\w*|dwellings?|residen\w*)\b|\bvacation rentals?\b|\bwinter (?:rental|tenan\w*)|\bsummer (?:rental|tenan\w*)`: 37 hits in 13 sections; sections: 12-43-220, 16-17-446, 27-18-175, 27-50-110, 27-50-210, 27-50-220, 27-50-230, 27-50-240, 27-50-260, 27-50-270, 27-50-40, 40-57-710, 6-1-825

**SC-B6-027** (`employee-screening`). Controls: null 0, positive 3389. Background screening of apartment or property-management employees.
- "employee-bg" `\b(?:background|criminal (?:history|record))\W+(?:check\w*|screen\w*|investigat\w*)\b(?:\W+\w+){0,15}?\W+(?:apartment|landlord|property manag\w*|rental|tenants?|leasing|maintenance)\b|\b(?:apartment|landlord|property manag\w*|leasing|maintenance)\b(?:\W+\w+){0,15}?\W+(?:background|criminal (?:history|record))\W+(?:check\w*|screen\w*)`: 3 hits in 1 sections; sections: 40-57-510

**SC-B6-028** (`energy-data-release`). Controls: null 0, positive 3389. Release of tenant energy usage data to owners; benchmarking.
- "energy-data" `\b(?:energy|electric\w*|utility|usage|consumption)\W+(?:usage\W+)?data\b|\bbenchmark\w*`: 33 hits in 23 sections; tenancy-filtered 1: 44-96-330
- "customer-info" `\bcustomer\W+(?:information|data|records?)\b(?:\W+\w+){0,10}?\W+(?:utilit\w*|electric\w*|release|disclos\w*)`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B6-029** (`environmental-event-termination`). Controls: null 0, positive 3389. Landlord right to end a lease after an environmental or public-health event or government order.
- "env-event" `\b(?:environmental|public health)\W+(?:\w+\W+){0,2}?(?:events?|emergenc\w*|hazards?)\b(?:\W+\w+){0,15}?\W+(?:lease\w*|tenan\w*|rental agreements?|terminat\w*)\b`: 2 hits in 1 sections; sections: 44-4-570
- "uninhabitable-term" `\b(?:uninhabitable|unfit for (?:human )?habitation|condemned)\b(?:\W+\w+){0,15}?\W+(?:landlord|lessor)\b(?:\W+\w+){0,10}?\W+terminat\w*`: 0 hits in 0 sections; sections: 

**SC-B7-029** (`security-devices`). Controls: null 0, positive 3389. Landlord security-device and rekey duties; smart-lock or electronic access rules.
- "lock-tenancy" `\b(?:dead ?bolts?|door viewers?|peepholes?|re-?key\w*|security devices?|window latch\w*|keyless (?:bolting|entry)|locks?)\b(?:\W+\w+){0,15}?\W+(?:tenan\w*|landlords?|dwelling units?|rental\w*|lessees?|apartments?)\b|\b(?:tenan\w*|landlords?|dwelling units?|rental\w*|apartments?)\b(?:\W+\w+){0,15}?\W+(?:dead ?bolts?|door viewers?|peepholes?|re-?key\w*|security devices?|locks?)\b`: 1 hits in 1 sections; tenancy-filtered 1: 27-40-530
- "smart-access" `smart (?:locks?|access)|electronic (?:locks?|entry|access)|key ?(?:fobs?|cards?|codes?)|access (?:codes?|credentials?)|biometric\w*`: 29 hits in 21 sections; tenancy-filtered 1: 39-1-90

**SC-B6-030** (`ev-charging-requirements`). Controls: null 0, positive 3389. EV charging in tenancies: installation conditions, shared areas, removal at end of tenancy (covers ev-charging-requirements, ev-charging-shared-area, ev-charging-end-of-tenancy).
- "ev" `\belectric vehicle charg\w*|\bcharging (?:station|system|equipment)s?\b|\bplug-in electric vehicles?\b`: 22 hits in 4 sections; tenancy-filtered 0: none
- "ev-tenancy" `\b(?:electric vehicle|charging station|charging system)s?\b(?:\W+\w+){0,15}?\W+(?:tenants?|lease|landlords?|rental|parking (?:space|spot)s?|associations?|condominium)\b`: 0 hits in 0 sections; tenancy-filtered 0: none

**SC-B7-030** (`service-animal-denial-penalty`). Controls: null 0, positive 3389. Penalty for denying an assistance or service animal in housing; misrepresentation penalty reach.
- "animal-penalty" `\b(?:unlawful|misdemeanor|guilty|fined?|penalt\w*)\b(?:\W+\w+){0,25}?\W+(?:assistance dogs?|guide dogs?|service animals?|dog guides?|assistance animals?)\b|\b(?:assistance dogs?|guide dogs?|service animals?|assistance animals?)\b(?:\W+\w+){0,25}?\W+(?:unlawful|misdemeanor|guilty|penalt\w*)\b`: 22 hits in 11 sections; sections: 16-1-100, 31-21-70, 47-3-920, 47-3-930, 47-3-940, 47-3-950, 47-3-960, 47-3-970, 47-3-980, 47-3-990, 56-7-10
- "animal-housing" `\b(?:housing accommodations?|dwellings?|rental housing|tenan\w*|landlords?|lease)\b(?:\W+\w+){0,30}?\W+(?:assistance dogs?|guide dogs?|service animals?|assistance animals?|emotional support animals?)\b|\b(?:assistance dogs?|guide dogs?|service animals?|assistance animals?|emotional support animals?)\b(?:\W+\w+){0,30}?\W+(?:housing accommodations?|dwellings?|rental housing|tenan\w*|landlords?)\b`: 3 hits in 2 sections; sections: 31-21-70, 43-33-70

**SC-B7-031** (`senior-housing-work-card`). Controls: null 0, positive 3389. Work cards or background checks for staff in 55+ or senior housing.
- "senior-staff-check" `work (?:cards?|permits?)\b(?:\W+\w+){0,20}?\W+(?:housing|apartments?|residen\w*|senior|elderly|age)|\b(?:senior|elderly|age[- ]restricted|55 (?:and|or) older|older persons)\b(?:\W+\w+){0,20}?\W+(?:background checks?|criminal (?:history|records?) checks?|employees?|staff)\b`: 6 hits in 5 sections; tenancy-filtered 0: none

**SC-B6-031** (`farmland-hunting-rights`). Controls: null 0, positive 3389. Hunting, fishing or sporting rights on leased residential or farm land.
- "hunt-lease" `\b(?:hunt\w*|fishing|trapping|sporting)\W+(?:\w+\W+){0,3}?rights?\b(?:\W+\w+){0,12}?\W+(?:lease\w*|tenan\w*|lessee\w*|reserv\w*)\b|\b(?:lease\w*|tenan\w*|lessee\w*)\b(?:\W+\w+){0,12}?\W+(?:hunt\w*|fishing) rights?\b`: 0 hits in 0 sections; sections: 

**SC-B6-032** (`extended-absence-notice`). Controls: null 0, positive 3389. Tenant notice of extended absence; landlord entry during absence.
- "absence-notice" `\b(?:extended|anticipated|prolonged)\W+absence\b|\babsen\w*\b(?:\W+\w+){0,10}?\W+(?:notif\w*|notice)\b(?:\W+\w+){0,10}?\W+(?:landlord|lessor)\b`: 0 hits in 0 sections; sections: 

**SC-B6-033** (`family-child-care`). Controls: null 0, positive 3389. Tenant family child care home: landlord or association limits, insurance.
- "childcare-lease" `\bchild ?care\b(?:\W+\w+){0,15}?\W+(?:lease|landlord|tenants?|rental|lessor|restrictive covenants?)\b|\b(?:lease|landlord|tenants?|rental)\b(?:\W+\w+){0,15}?\W+(?:family|group) child ?care\b`: 2 hits in 2 sections; sections: 12-6-3440, 59-19-125

**SC-B6-034** (`home-business`). Controls: null 0, positive 3389. Tenant home business: statutory right or limits; landlord consent.
- "home-business" `\bhome[- ]based business\w*|\bhome (?:business|occupation)s?\b|\bbusiness\b(?:\W+\w+){0,8}?\W+(?:residence|dwelling unit|home)\b(?:\W+\w+){0,10}?\W+(?:lease|tenant|landlord|rental)\b`: 1 hits in 1 sections; sections: 48-60-20

**SC-B7-032** (`sex-offender-occupancy`). Controls: null 0, positive 3389. Sex-offender occupancy or disclosure duties of landlords; stigmatized-property disclosure.
- "offender-tenancy" `(?:sex offenders?|offender registry|registered offenders?)\b(?:\W+\w+){0,25}?\W+(?:landlords?|tenan\w*|lease|rental agreements?|rent|lessees?|lessors?|renters?|apartments?)\b|\b(?:landlords?|tenan\w*|lease|rental agreements?|lessees?|lessors?)\b(?:\W+\w+){0,25}?\W+(?:sex offenders?|offender registry|registered offenders?)\b`: 0 hits in 0 sections; sections: 
- "offender-cohabitation" `(?:sex offenders?)\b(?:\W+\w+){0,12}?\W+(?:resid\w*|reside|live|living)\b(?:\W+\w+){0,12}?\W+(?:together|same (?:dwelling|residence|household)|another (?:sex )?offender)`: 0 hits in 0 sections; sections: 
- "stigma" `psychologically (?:affected|impacted)|stigmas?\b|psychological (?:impacts?|effects?)`: 11 hits in 6 sections; sections: 27-50-90, 40-57-740, 44-33-10, 44-53-110, 47-6-10, 53-3-205

**SC-B6-035** (`fire-sprinkler-duty`). Controls: null 0, positive 3389. Fire sprinkler retrofit or installation duty for residential rentals; apartment fire protection.
- "sprinkler-res" `\bsprinkler\w*\b(?:\W+\w+){0,15}?\W+(?:apartments?|residential|dwellings?|rental|landlords?|tenants?|multi-?family)\b|\b(?:apartments?|residential|dwellings?|rental|multi-?family)\b(?:\W+\w+){0,15}?\W+sprinkler\w*`: 4 hits in 4 sections; sections: 12-37-220, 12-37-3130, 12-6-3622, 6-9-55
- "fire-protection" `\bfire protection system\b`: 10 hits in 8 sections; sections: 23-9-155, 4-19-10, 4-19-160, 4-19-50, 4-23-1220, 58-5-390, 6-11-140, 6-11-180

**SC-B7-033** (`tenant-screening`). Controls: null 0, positive 3389. Tenant screening rules: criminal-history timing, look-backs, income tests, negligence shield.
- "screening-tenancy" `\b(?:screen\w*|background checks?|criminal (?:history|records?|convictions?)|credit (?:checks?|reports?|history)|minimum income|income requirements?)\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|applicants? for (?:housing|rental)|rental housing|landlords?|lease|lessees?|renters?)\b|\b(?:tenan\w*|landlords?|rental housing|lessees?|renters?)\b(?:\W+\w+){0,20}?\W+(?:screen\w*|background checks?|criminal (?:history|records?|convictions?))\b`: 2 hits in 2 sections; sections: 37-2-308, 37-20-160
- "record-negligence-shield" `\b(?:negligen\w*|liab\w*)\b(?:\W+\w+){0,20}?\W+(?:criminal (?:history|records?|convictions?)|ex-offenders?|formerly incarcerated)\b(?:\W+\w+){0,20}?\W+(?:hous\w*|rent\w*|leas\w*|tenan\w*)\b`: 0 hits in 0 sections; sections: 

**SC-B6-036** (`firearms`). Controls: null 0, positive 3389. Landlord firearm rules in private rentals; carry on premises.
- "firearm-tenancy" `\b(?:firearms?|handguns?|concealable weapons?|guns?)\b(?:\W+\w+){0,15}?\W+(?:tenants?|landlords?|lease|rental agreements?|dwelling units?|apartments?)\b|\b(?:tenants?|landlords?|rental agreements?|dwelling units?)\b(?:\W+\w+){0,15}?\W+(?:firearms?|handguns?|concealable weapons?)\b`: 2 hits in 2 sections; sections: 16-23-30, 16-23-530
- "premises-carry" `\bperson in legal possession or control\b`: 3 hits in 1 sections; sections: 23-31-220

**SC-B6-037** (`foreclosure`). Controls: null 0, positive 3389. Tenant rights in foreclosure; landlord disclosure of pending foreclosure (covers foreclosure and foreclosure-disclosure).
- "foreclosure-tenant" `\bforeclos\w*\b(?:\W+\w+){0,15}?\W+(?:tenants?|lessees?|occupants?|leases?|rental agreements?)\b|\b(?:tenants?|lessees?|occupants?|leases?|rental agreements?)\b(?:\W+\w+){0,15}?\W+foreclos\w*`: 2 hits in 2 sections; sections: 12-37-3150, 27-31-210
- "foreclosure-notice" `\bforeclos\w*\b(?:\W+\w+){0,10}?\W+(?:disclos\w*|notif\w*|notice)\b(?:\W+\w+){0,10}?\W+(?:tenants?|prospective|occupants?)\b`: 0 hits in 0 sections; sections: 

**SC-B7-034** (`sfr-occupancy-disclosure`). Controls: null 0, positive 3389. Single-family rental occupancy disclosure with font or first-page placement rules.
- "sfr-disclosure" `\bsingle[- ]family (?:residences?|homes?|dwellings?|houses?)\b(?:\W+\w+){0,25}?\W+(?:disclos\w*|notices?|font|type size|first page)\b|\b(?:font|type size|first page)\b(?:\W+\w+){0,20}?\W+(?:leases?|rental agreements?)\b`: 2 hits in 1 sections; tenancy-filtered 2: 40-57-135

**SC-B7-035** (`shoreline-access-disclosure`). Controls: null 0, positive 3389. Shoreline or beachfront public access disclosure in leases.
- "shore-disclosure" `\b(?:disclos\w*)\b(?:\W+\w+){0,25}?\W+(?:setback line|beachfront|shoreline|seaward|baseline|critical area|tidelands?|public access)\b|\b(?:setback line|beachfront|shoreline|seaward|baseline)\b(?:\W+\w+){0,25}?\W+(?:disclos\w*)\b`: 2 hits in 2 sections; sections: 40-47-190, 48-39-330
- "shore-tenancy" `\b(?:beach\w*|shore\w*|tidelands?|setback line)\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|lease|rental agreements?|lessees?)\b|\b(?:tenan\w*|rental agreements?|lessees?)\b(?:\W+\w+){0,20}?\W+(?:beach\w*|shore\w*|tidelands?|setback line)\b`: 0 hits in 0 sections; sections: 

**SC-B6-038** (`foreign-ownership`). Controls: null 0, positive 3389. Foreign or alien ownership or leasing of land; nonresident-alien statements in leases.
- "alien-land" `\b(?:aliens?|foreign (?:persons?|entit\w*|corporations?|nationals?|adversar\w*))\b(?:\W+\w+){0,12}?\W+(?:land|real property|real estate|lease\w*|own\w*)\b`: 12 hits in 7 sections; sections: 27-13-30, 27-13-40, 33-4-104, 33-9-100, 33-9-110, 38-90-10, 5-7-40
- "nonresident-tenant" `\bnonresident aliens?\b(?:\W+\w+){0,12}?\W+(?:lease|tenant|lessee|statement)\b`: 0 hits in 0 sections; sections: 

**SC-B7-036** (`special-district-representation`). Controls: null 0, positive 3389. Lease acknowledgment or disclosure of a special district.
- "district-disclosure" `\b(?:special (?:tax|taxing|assessment|purpose) districts?|improvement districts?|assessment districts?|benefit charges?)\b(?:\W+\w+){0,25}?\W+(?:disclos\w*|tenan\w*|lease|purchaser|buyer|acknowledg\w*)\b`: 7 hits in 6 sections; tenancy-filtered 4: 4-29-65, 55-9-30, 6-11-345

**SC-B7-037** (`steam-radiator-covers`). Controls: null 0, positive 3389. Steam radiator covers or burn-protection rider.
- "radiator" `radiators?|steam heat\w*|steam boilers?`: 2 hits in 1 sections; tenancy-filtered 0: none

**SC-B7-038** (`shutdown-rent-protection`). Controls: null 0, positive 3389. Rent-timing or eviction protection for government workers during a shutdown.
- "shutdown" `(?:government|federal) (?:shutdown|furlough\w*)|lapse in (?:federal )?appropriations|furlough\w*\b(?:\W+\w+){0,20}?\W+(?:rent|tenan\w*|evict\w*|eject\w*)`: 0 hits in 0 sections; sections: 

**SC-B6-039** (`guarantor-renewal`). Controls: null 0, positive 3389. Lease guaranty scope over renewals and extensions.
- "guaranty-lease" `\bguarant\w*\b(?:\W+\w+){0,12}?\W+(?:leases?|rental agreements?|tenants?|rent|renewals?)\b|\b(?:leases?|rental agreements?|tenants?)\b(?:\W+\w+){0,12}?\W+guarant(?:or|y|ies)\b`: 4 hits in 4 sections; tenancy-filtered 3: 44-7-3230, 57-3-205, 58-17-750

**SC-B6-040** (`guest-rights`). Controls: null 0, positive 3389. Tenant right to receive guests or service providers; guest limits.
- "guest-rights" `\bguests?\b(?:\W+\w+){0,10}?\W+(?:tenants?|dwelling units?|rental|landlords?|apartments?)\b|\b(?:tenants?|landlords?)\b(?:\W+\w+){0,10}?\W+guests?\b`: 0 hits in 0 sections; sections: 

**SC-B7-039** (`sprinkler-disclosure`). Controls: null 0, positive 3389. Sprinkler disclosure to tenants; sprinkler retrofit duties or programs.
- "sprinkler" `\bsprinkler\w*\b(?:\W+\w+){0,25}?\W+(?:tenan\w*|leases?|rental\w*|dwelling units?|apartments?|residential|disclos\w*|notice)\b|\b(?:tenan\w*|leases?|apartments?|residential|dwelling units?)\b(?:\W+\w+){0,25}?\W+sprinkler\w*`: 11 hits in 9 sections; sections: 12-37-220, 12-37-3130, 12-6-3622, 40-10-20, 40-10-230, 40-10-40, 40-11-410, 45-5-80, 6-9-55

**SC-B6-041** (`furnishings-included`). Controls: null 0, positive 3389. Furnished rentals: furniture inventory, deposit, condition.
- "furnished" `\bfurnish(?:ed|ings)\b(?:\W+\w+){0,10}?\W+(?:rental|dwelling units?|apartments?|tenants?|lease)\b|\b(?:furniture)\b(?:\W+\w+){0,10}?\W+(?:tenants?|landlords?|dwelling units?|deposits?|inventory)\b`: 12 hits in 7 sections; sections: 11-1-120, 11-35-3030, 27-32-250, 27-37-30, 29-5-440, 31-1-610, 57-5-1660

**SC-B7-040** (`stove-refrigerator`). Controls: null 0, positive 3389. Duty to supply a stove or refrigerator; tenant-supplied appliance.
- "appliance" `\b(?:refrigerators?|stoves?|ranges?|cooking (?:appliances?|facilities))\b(?:\W+\w+){0,20}?\W+(?:landlords?|tenan\w*|rental\w*|dwelling units?|lease)\b|\b(?:landlords?|tenan\w*|dwelling units?)\b(?:\W+\w+){0,20}?\W+(?:refrigerators?|stoves?|cooking (?:appliances?|facilities))\b`: 2 hits in 1 sections; sections: 27-40-210

**SC-B7-041** (`student-housing`). Controls: null 0, positive 3389. Student housing rules: exemptions, college-owned housing termination procedures.
- "student-housing" `\bstudent (?:housing|dwellings?|residen\w*|apartments?)\b|\bdormitor\w*\b|\b(?:students?)\b(?:\W+\w+){0,12}?\W+(?:tenan\w*|leases?|rental agreements?|landlords?)\b`: 29 hits in 25 sections; sections: 13-11-60, 23-3-465, 23-37-10, 31-21-70, 46-39-140, 5-25-630, 59-101-290, 59-101-450, 59-109-30, 59-117-65, 59-122-10, 59-123-220, 59-123-230, 59-125-130, 59-127-85, 59-130-220, 59-130-420, 59-130-60, 59-133-60, 59-136-310, 59-136-505, 59-147-30, 59-23-540, 59-4-20, 59-53-630

**SC-B6-042** (`hazardous-contamination-disclosure`). Controls: null 0, positive 3389. Disclosure to tenants of contamination, Superfund, brownfield or environmental-covenant restrictions.
- "contam-tenant" `\b(?:contaminat\w*|hazardous substances?|hazardous waste|environmental covenants?|restrictive covenants?)\b(?:\W+\w+){0,15}?\W+(?:lease\w*|tenants?|lessees?|renters?|rental)\b|\b(?:lease\w*|tenants?|lessees?)\b(?:\W+\w+){0,15}?\W+(?:contaminat\w*|hazardous substances?)\b`: 2 hits in 2 sections; sections: 27-1-60, 27-50-40
- "contam-disclose" `\b(?:contaminat\w*|hazardous substances?|brownfields?)\b(?:\W+\w+){0,12}?\W+(?:disclos\w*|notif\w*)\b`: 0 hits in 0 sections; sections: 

**SC-B7-042** (`statutory-early-termination`). Controls: null 0, positive 3389. Statutory early-termination rights and any lease statement of them.
- "early-termination" `\bearly termination\b|\bterminat\w*\b(?:\W+\w+){0,6}?\W+(?:early|before the end of the term|prior to the expiration)\b|\b(?:fraudulent(?:ly)? misrepresent\w*|misrepresentation)\b(?:\W+\w+){0,20}?\W+(?:lease|rental agreement|tenan\w*)\b`: 15 hits in 7 sections; tenancy-filtered 6: 27-40-350, 39-54-20, 39-54-40

**SC-B6-043** (`homestead-waiver`). Controls: null 0, positive 3389. Lease waiver of homestead or debtor exemptions.
- "waive-exempt" `\bwaiv\w*\b(?:\W+\w+){0,10}?\W+(?:exemptions?|homestead)\b|\b(?:exemptions?|homestead)\b(?:\W+\w+){0,10}?\W+waiv\w*`: 19 hits in 16 sections; tenancy-filtered 0: none

**SC-B6-044** (`infirmity-termination`). Controls: null 0, positive 3389. Tenant early termination for age, infirmity, illness or care-facility admission.
- "infirm" `\b(?:nursing (?:home|facility)|assisted living|medical condition|disabilit\w*|infirm\w*|age of sixty|senior citizen|elderly)\b(?:\W+\w+){0,15}?\W+(?:terminat\w*|lease|rental agreement)\b(?:\W+\w+){0,10}?\W+(?:tenants?|lessees?|rental agreement|lease)\b`: 0 hits in 0 sections; sections: 

**SC-B6-045** (`informal-dispute-resolution`). Controls: null 0, positive 3389. Informal dispute resolution or mediation of landlord-tenant disputes.
- "mediation" `\bmediat\w*\b(?:\W+\w+){0,12}?\W+(?:tenants?|landlords?|lease|rental|ejectment|magistrate\w*|housing)\b|\b(?:tenants?|landlords?|ejectment|magistrate\w*)\b(?:\W+\w+){0,12}?\W+mediat\w*`: 0 hits in 0 sections; sections: 

**SC-B6-046** (`key-control-policy`). Controls: null 0, positive 3389. Landlord key-control policy; lock changes by tenant or landlord.
- "key-control" `\bkey[- ]control\w*|\b(?:master )?keys?\b(?:\W+\w+){0,10}?\W+(?:policy|log|records?|secur\w*)\b(?:\W+\w+){0,10}?\W+(?:dwelling|apartment|tenant|landlord|employee)`: 1 hits in 1 sections; tenancy-filtered 0: none
- "lock-change" `\b(?:change|rekey|re-key|replace)\w*\W+(?:\w+\W+){0,2}?locks?\b`: 2 hits in 2 sections; tenancy-filtered 1: 27-40-530

**SC-B7-043** (`subsidy-habitability-proration`). Controls: null 0, positive 3389. Abatement or proration of a rent subsidy for failed habitability inspections; tenant share.
- "subsidy-abatement" `\b(?:housing assistance payments?|subsid\w*|vouchers?|Section 8|housing quality standards)\b(?:\W+\w+){0,25}?\W+(?:abat\w*|withh\w*|suspend\w*|prorat\w*|inspect\w*)\b|\babat\w*\b(?:\W+\w+){0,15}?\W+(?:housing assistance|subsid\w*)\b`: 19 hits in 19 sections; sections: 12-54-44, 12-6-3795, 12-60-30, 14-17-560, 33-49-160, 38-73-1060, 40-55-140, 40-75-160, 46-13-90, 56-3-660, 63-17-1460, 63-17-1570, 63-17-1890, 8-1-100, 8-11-33, 8-11-96, 8-13-1127, 8-13-1366, 8-13-360

**SC-B7-044** (`tax-escalation`). Controls: null 0, positive 3389. Passing real estate tax or insurance increases to a residential tenant.
- "tax-pass-through" `\b(?:propert\w* tax\w*|real (?:estate|property) tax\w*|ad valorem tax\w*|insurance premiums?)\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|lessees?|renters?)\b(?:\W+\w+){0,15}?\W+(?:pay\w*|reimburs\w*|shar\w*|increas\w*)\b|\b(?:tenan\w*|lessees?)\b(?:\W+\w+){0,10}?\W+(?:pay\w*|reimburs\w*)\b(?:\W+\w+){0,10}?\W+(?:propert\w* tax\w*|real (?:estate|property) tax\w*|ad valorem tax\w*)\b`: 1 hits in 1 sections; tenancy-filtered 1: 12-4-540

**SC-B7-045** (`telecom-access`). Controls: null 0, positive 3389. Cable, satellite or broadband access to multi-unit rentals; subscriber rent differential.
- "telecom-tenancy" `\b(?:cable (?:television|operators?|services?|systems?)|satellite (?:dishes|dish|television)|antennas?|video service providers?|broadband|internet service)\b(?:\W+\w+){0,25}?\W+(?:tenan\w*|landlords?|multiple dwelling\w*|apartments?|multi[- ]?unit|lessees?|residents?)\b|\b(?:tenan\w*|landlords?|apartments?|multi[- ]?unit|multiple dwelling\w*)\b(?:\W+\w+){0,25}?\W+(?:cable (?:television|operators?|services?)|satellite|antennas?|broadband)\b`: 4 hits in 3 sections; sections: 58-9-2660, 58-9-3040, 63-17-2310

**SC-B7-043b** (`subsidy-habitability-proration`). Controls: null 0, positive 3389. Rerun of SC-B7-043 with a case-sensitive Section 8 limb (the first run matched SECTION 8 headings).
- "subsidy-abatement" `\b(?:housing assistance payments?|subsid\w*|vouchers?|(?-i:Section 8 (?:housing|voucher|tenant|program))|housing quality standards|housing choice)\b(?:\W+\w+){0,25}?\W+(?:abat\w*|withh\w*|suspend\w*|prorat\w*|inspect\w*)\b|\babat\w*\b(?:\W+\w+){0,15}?\W+(?:housing assistance|subsid\w*)\b`: 0 hits in 0 sections; sections: 

**SC-B6-047** (`lead-safe-certification`). Controls: null 0, positive 3389. State lead-safe certification or inspection of rentals; lead notices to tenants (covers lead-safe-certification and lead-state-notices).
- "lead-cert" `\blead[- ](?:safe|free)\b|\blead\b(?:\W+\w+){0,8}?\W+(?:certif\w*|inspection|risk assessment|abatement)\b(?:\W+\w+){0,12}?\W+(?:rental|dwelling|tenants?|landlords?|owners?)\b`: 0 hits in 0 sections; sections: 
- "lead-tenant" `\blead-based\b(?:\W+\w+){0,15}?\W+(?:tenants?|rent\w*|lease\w*|landlords?|occupan\w*)\b`: 1 hits in 1 sections; sections: 44-53-1440

**SC-B7-046** (`tenant-confidential-information`). Controls: null 0, positive 3389. Bar on landlord disclosure of tenant information; consent rules.
- "tenant-info" `\b(?:disclos\w*|shar\w*|sell\w*|releas\w*)\b(?:\W+\w+){0,15}?\W+(?:tenant|applicant|lessee|renter)s?.? (?:information|data|records?|personal)\b|\b(?:tenant|applicant|lessee|renter)s?.? (?:information|data|records?)\b`: 1 hits in 1 sections; sections: 59-25-115

**SC-B7-047** (`tenant-portal`). Controls: null 0, positive 3389. Requiring rent payment, notices or signatures through an online portal.
- "portal" `\b(?:online|electronic|web)\b(?:\W+\w+){0,4}?\W+(?:portals?|payment systems?|platforms?)\b(?:\W+\w+){0,20}?\W+(?:rent|tenan\w*|lease|landlords?)\b|\b(?:rent|tenan\w*|landlords?)\b(?:\W+\w+){0,20}?\W+(?:online|electronic) (?:portals?|payments?)\b`: 0 hits in 0 sections; sections: 

**SC-B7-048** (`tenant-right-to-organize`). Controls: null 0, positive 3389. Tenant right to organize, join a tenant association or meet; retaliation for organizing.
- "organize" `\b(?:tenants?'? (?:associations?|unions?|organizations?|councils?)|organiz\w*)\b(?:\W+\w+){0,15}?\W+(?:tenan\w*|landlords?|lease|dwelling|apartments?|residents?)\b|\b(?:tenan\w*)\b(?:\W+\w+){0,10}?\W+(?:organiz\w*|assembl\w*|meet\w*)\b`: 54 hits in 40 sections; tenancy-filtered 28: 12-21-3980, 12-21-4020, 27-32-250, 27-40-210, 31-21-30, 31-21-70, 31-23-20, 33-44-101, 33-49-250, 33-57-140, 37-2-106, 38-12-270, 38-12-30, 38-12-480, 38-33-50, 4-31-360, 4-31-60, 43-39-100, 43-41-100, 43-43-100, 48-9-30, 57-5-1495, 58-21-30, 58-27-1310, 58-7-50

**SC-B7-049** (`term-change-notice`). Controls: null 0, positive 3389. Notice to change the terms of a periodic tenancy (rent or other terms).
- "term-change" `\b(?:chang\w*|modif\w*|amend\w*)\b(?:\W+\w+){0,10}?\W+(?:terms?|conditions?)\b(?:\W+\w+){0,15}?\W+(?:tenanc\w*|rental agreements?|leases?|month[- ]to[- ]month|periodic)\b`: 1 hits in 1 sections; tenancy-filtered 1: 27-31-170

**SC-B6-048** (`lease-content-requirements`). Controls: null 0, positive 3389. Residential lease form rules: required content, first-page items, copy delivery, initials, type size (covers lease-content-requirements, lease-copy, lease-notice-initial-requirement, lease-type-size).
- "lease-contain" `\b(?:lease|rental agreement)s?\b(?:\W+\w+){0,4}?\W+(?:must|shall)\W+(?:\w+\W+){0,2}?(?:contain|include|state|set forth)\b`: 13 hits in 12 sections; tenancy-filtered 13: 12-37-620, 22-3-10, 27-31-30, 31-23-40, 37-2-308, 39-20-40, 4-12-20, 4-12-30, 4-29-60, 4-29-67, 51-1-60, 59-144-100
- "first-page" `\bfirst page\b(?:\W+\w+){0,12}?\W+(?:lease|rental agreement|contract)\b|\b(?:lease|rental agreement|contract)\b(?:\W+\w+){0,12}?\W+first page\b`: 4 hits in 3 sections; tenancy-filtered 2: 40-57-135
- "copy-deliver" `\bcopy\b(?:\W+\w+){0,10}?\W+(?:lease|rental agreement)\b(?:\W+\w+){0,10}?\W+(?:given|deliver\w*|furnish\w*|provid\w*)\b(?:\W+\w+){0,6}?\W+(?:tenant|occupant|lessee)\b`: 0 hits in 0 sections; tenancy-filtered 0: none
- "initials" `\binitial(?:s|ed|led)\b(?:\W+\w+){0,10}?\W+(?:tenant|lessee|occupant)\b|\b(?:tenant|lessee)\b(?:\W+\w+){0,10}?\W+initial(?:s|ed|led)\b`: 0 hits in 0 sections; tenancy-filtered 0: none
- "type-size" `\b\w+[- ]point (?:type|font)\b|\btype size\b`: 30 hits in 26 sections; tenancy-filtered 0: none

**SC-B6-049** (`lease-type-parity`). Controls: null 0, positive 3389. Parity between month-to-month and fixed-term lease terms or rent.
- "parity" `\bmonth[- ]to[- ]month\b(?:\W+\w+){0,15}?\W+(?:fixed[- ]term|term lease|lease term|more (?:burdensome|onerous)|higher rent|premium)\b|\b(?:fixed[- ]term)\b(?:\W+\w+){0,15}?\W+month[- ]to[- ]month\b`: 1 hits in 1 sections; sections: 27-40-710

**SC-B6-050** (`lease-term-limitation`). Controls: null 0, positive 3389. Formalities or maximum terms for long residential leases; spousal joinder.
- "spouse-lease" `\b(?:spouses?|husband|wife)\b(?:\W+\w+){0,12}?\W+(?:join\w*|consent\w*|sign\w*)\b(?:\W+\w+){0,10}?\W+(?:lease|leasing)\b`: 0 hits in 0 sections; sections: 
- "max-term" `\blease\w*\b(?:\W+\w+){0,10}?\W+(?:exceed\w*|longer than|more than)\b(?:\W+\w+){0,7}?\W+(?:years?|lives)\b`: 7 hits in 7 sections; sections: 12-37-3150, 27-15-10, 27-23-60, 4-29-67, 44-7-3110, 48-52-660, 55-15-40

**SC-B7-050** (`translation-duty`). Controls: null 0, positive 3389. Lease translation duty; prescribed type sizes.
- "translation" `\b(?:translat\w*|Spanish|language other than English|primary language|foreign language)\b(?:\W+\w+){0,20}?\W+(?:leases?|rental agreements?|tenan\w*|contracts?|landlords?)\b|\b(?:leases?|rental agreements?|tenan\w*|contracts?)\b(?:\W+\w+){0,20}?\W+(?:translat\w*|Spanish|language other than English|primary language)\b`: 0 hits in 0 sections; sections: 
- "type-size" `\b(?:\d+|ten|twelve|fourteen)[- ]point type\b|\btype size\b`: 14 hits in 13 sections; sections: 26-2-70, 27-32-410, 37-11-35, 37-2-202, 37-2-305, 37-3-202, 37-3-305, 37-3-413, 38-61-30, 38-71-1940, 38-87-40, 39-57-30, 46-53-50

**SC-B7-051** (`truth-in-renting`). Controls: null 0, positive 3389. Truth-in-renting act or statement; voiding of lease terms that misstate the law.
- "truth-in-renting" `truth in renting|\b(?:misstat\w*|misrepresent\w*)\b(?:\W+\w+){0,12}?\W+(?:rights)\b(?:\W+\w+){0,12}?\W+(?:tenan\w*|lessees?|consumers?)\b|\b(?:leases?|rental agreements?)\b(?:\W+\w+){0,15}?\W+(?:violat\w*|contrary to) (?:the )?(?:law|statute)`: 0 hits in 0 sections; sections: 

**SC-B7-052** (`unbundled-parking`). Controls: null 0, positive 3389. Unbundled or separately charged parking in residential leases.
- "parking-tenancy" `\bparking\b(?:\W+\w+){0,20}?\W+(?:tenan\w*|rent\b|leases?|rental agreements?|dwelling units?|apartments?|residential)\b|\bunbundl\w*`: 9 hits in 6 sections; tenancy-filtered 2: 38-12-270, 38-12-480

**SC-B7-053** (`veterans-incentive`). Controls: null 0, positive 3389. Rent concessions or preferences for veterans; veteran status protection.
- "veteran-housing" `\b(?:veterans?|servicemembers?|military)\b(?:\W+\w+){0,20}?\W+(?:rent\w*|tenan\w*|landlords?|leases?|housing|discount\w*|concessions?|preference\w*)\b`: 19 hits in 12 sections; tenancy-filtered 8: 16-23-240, 25-1-1370, 25-1-1620, 3-1-40, 40-36-520, 55-1-200, 59-63-33

**SC-B6-051** (`inspection-notice-penalty`). Controls: null 0, positive 3389. Notice of move-in or move-out inspection rights and penalties for omitting it.
- "inspect-notice" `\b(?:move-?in|move-?out|pre-?move|walk-?through|condition)\W+(?:inspection|checklist|report)\b|\binspection\b(?:\W+\w+){0,10}?\W+(?:security deposit|deposit)\b`: 2 hits in 2 sections; sections: 27-18-240, 35-11-530

**SC-B6-052** (`law-enforcement-cooperation`). Controls: null 0, positive 3389. Landlord cooperation with law enforcement: access, crime-free programs, reporting, penalties for calling police.
- "police-tenancy" `\b(?:law enforcement|police|sheriff)\b(?:\W+\w+){0,12}?\W+(?:tenants?|landlords?|rental|lease|dwelling units?)\b(?:\W+\w+){0,12}?\W+(?:cooperat\w*|access|report\w*|evict\w*|addend\w*|summon\w*)\b`: 0 hits in 0 sections; sections: 
- "crime-free" `\bcrime[- ]free\b|\bnuisance (?:property|abatement) (?:ordinance|program)\b`: 0 hits in 0 sections; sections: 

**SC-B6-053** (`military-air-zone-disclosure`). Controls: null 0, positive 3389. Disclosure of military air installation noise or accident zones to tenants or buyers.
- "military-zone" `\b(?:air installation|AICUZ|accident potential zone|noise zone|military (?:installation|base|airfield|air ?base)s?)\b`: 76 hits in 33 sections; tenancy-filtered 2: 6-1-320

**SC-B6-054** (`municipal-utility-lien`). Controls: null 0, positive 3389. Municipal utility charges as liens on property; tenant-account exemptions.
- "utility-lien" `\b(?:water|sewer\w*|garbage|solid waste|utility)\b(?:\W+\w+){0,10}?\W+(?:charges?|bills?|fees?|rates?)\b(?:\W+\w+){0,12}?\W+liens?\b`: 13 hits in 9 sections; sections: 5-31-2010, 5-31-2030, 5-31-2040, 6-1-1040, 6-11-1210, 6-11-1230, 6-11-1240, 6-15-110, 6-15-90
- "tenant-lien-exempt" `\bliens?\b(?:\W+\w+){0,15}?\W+(?:tenants?|lessees?|occupants?)\b(?:\W+\w+){0,10}?\W+(?:water|sewer\w*|garbage|utility|utilities)\b|\b(?:tenants?|lessees?|occupants?)\b(?:\W+\w+){0,15}?\W+(?:water|sewer\w*|garbage|utility)\b(?:\W+\w+){0,10}?\W+liens?\b`: 0 hits in 0 sections; sections: 

**SC-B6-055** (`notice-to-vacate-additional-terms`). Controls: null 0, positive 3389. Landlord conduct limits while a notice to vacate is pending.
- "ntv-terms" `\bnotice to (?:vacate|quit)\b(?:\W+\w+){0,15}?\W+(?:alter\w*|renovat\w*|uninhabitable|services?|repair\w*)\b|\b(?:alter\w*|renovat\w*)\b(?:\W+\w+){0,15}?\W+notice to (?:vacate|quit)\b`: 0 hits in 0 sections; sections: 

**SC-B6-056** (`ordnance-demolition-meter-disclosures`). Controls: null 0, positive 3389. Disclosures of former ordnance sites, pending demolition and shared utility meters.
- "ordnance" `\b(?:ordnance|munitions)\b(?:\W+\w+){0,15}?\W+(?:disclos\w*|notice|tenants?|lease|buyers?|purchasers?)\b`: 0 hits in 0 sections; sections: 
- "demolition" `\bdemoli\w*\b(?:\W+\w+){0,15}?\W+(?:tenants?|prospective tenants?|lease|rental|disclos\w*)\b`: 1 hits in 1 sections; sections: 27-40-910
- "shared-meter" `\b(?:gas|electric\w*|utility)\W+meters?\b(?:\W+\w+){0,12}?\W+(?:serv\w*|shared|common|other units?|outside)\b(?:\W+\w+){0,10}?\W+(?:tenants?|dwelling units?|premises)\b`: 0 hits in 0 sections; sections: 

**SC-B6-057** (`other-landlord-facilities`). Controls: null 0, positive 3389. Landlord duties for shared facilities and amenities beyond the general maintenance duty.
- "facility-duty" `\b(?:garage door openers?|elevators?|laundry|swimming pools?|amenit\w*|shared facilit\w*)\b(?:\W+\w+){0,15}?\W+(?:landlords?|tenants?|rental|dwelling units?)\b`: 2 hits in 2 sections; sections: 27-40-440, 27-47-310

**SC-B6-058** (`owner-move-in-reservation`). Controls: null 0, positive 3389. Owner move-in or owner-occupancy termination of a residential lease.
- "owner-occupy" `\b(?:owner|landlord)\W+(?:\w+\W+){0,4}?(?:occup\w*|move[- ]in|personal use|own use)\b(?:\W+\w+){0,15}?\W+(?:terminat\w*|tenants?|lease|rental agreement|notice)\b`: 8 hits in 8 sections; tenancy-filtered 3: 27-33-10, 39-20-40, 39-20-47

**SC-B6-059** (`parking-rules-notice`). Controls: null 0, positive 3389. Written parking rules or notice for tenants.
- "parking-rules" `\bparking\b(?:\W+\w+){0,6}?\W+(?:rules?|regulations?|policies?)\b(?:\W+\w+){0,15}?\W+(?:tenants?|landlords?|lease|rental|apartment|residents?)\b|\b(?:tenants?|landlords?|lease|apartment|residents?)\b(?:\W+\w+){0,15}?\W+parking\W+(?:rules?|regulations?)\b`: 0 hits in 0 sections; sections: 

**SC-B7-054** (`utility-submetering-disclosure`). Controls: null 0, positive 3389. Landlord submetering, ratio or allocated utility billing; disclosure; resale. Also used for utility-apportionment.
- "submeter-allocation" `sub-?meter\w*|master[- ]meter\w*|ratio (?:utility )?billing|allocat\w*\b(?:\W+\w+){0,10}?\W+(?:utilit\w*|water|electric\w*|gas) (?:charges?|bills?|costs?|usage)|resale of (?:electric\w*|water|gas)|resell\w*\b(?:\W+\w+){0,6}?\W+(?:electric\w*|water|natural gas)`: 3 hits in 3 sections; sections: 27-33-50, 58-27-1060, 58-27-2630

**SC-B7-055** (`utility-transfer`). Controls: null 0, positive 3389. Tenant duty to transfer utility accounts; landlord cutoff of landlord-name service.
- "account-transfer" `\b(?:transfer\w*|put|place|open\w*)\b(?:\W+\w+){0,8}?\W+(?:utilit\w*|accounts?|services?)\b(?:\W+\w+){0,8}?\W+(?:tenant.s name|name of the tenant|own name|customer of record)\b|\btenants?\b(?:\W+\w+){0,15}?\W+(?:utility accounts?)\b`: 1 hits in 1 sections; sections: t36c008

**SC-B7-056** (`utility-allowance-cap`). Controls: null 0, positive 3389. Utility allowance with tenant-paid overage; caps on rebilling.
- "utility-allowance" `utility allowances?|\b(?:allowance|cap)\b(?:\W+\w+){0,8}?\W+(?:utilit\w*|electric\w*|water)\b(?:\W+\w+){0,10}?\W+(?:tenan\w*|rent)\b|\b(?:overage|excess)\b(?:\W+\w+){0,8}?\W+(?:utilit\w*|electric\w*|water) (?:charges?|costs?|usage)`: 0 hits in 0 sections; sections: 

**SC-B7-057** (`utility-shutoff-statute`). Controls: null 0, positive 3389. Utility disconnection rules: notice, winter or medical protection, emergency moratorium.
- "shutoff-moratorium" `\b(?:disconnect\w*|terminat\w*|shut ?off|discontinu\w*)\b(?:\W+\w+){0,15}?\W+services?\b(?:\W+\w+){0,25}?\W+(?:emergenc\w*|hurricane|storm|extreme (?:heat|cold)|winter|December through March|temperature)\b|\bservices?\b(?:\W+\w+){0,15}?\W+(?:emergenc\w*|hurricane|storm|extreme (?:heat|cold)|winter|December through March|temperature)\b(?:\W+\w+){0,15}?\W+(?:disconnect\w*|terminat\w*|shut ?off|discontinu\w*)\b`: 2 hits in 2 sections; sections: 58-31-540, 6-11-2540

**SC-B7-058** (`utility-disclosure-attachment`). Controls: null 0, positive 3389. Utility cost, tariff or availability disclosure attached to a lease.
- "utility-disclosure" `\b(?:disclos\w*|notice|notif\w*)\b(?:\W+\w+){0,15}?\W+(?:utilit\w*|electric\w*|energy|water|gas) (?:charges?|costs?|bills?|availability|tariffs?|usage)\b(?:\W+\w+){0,25}?\W+(?:tenan\w*|lease|rental|landlords?)\b|\b(?:tenan\w*|landlords?)\b(?:\W+\w+){0,20}?\W+(?:notice of meter conservation charge)`: 2 hits in 1 sections; sections: 58-37-50

**SC-B7-059** (`utility-landlord-account`). Controls: null 0, positive 3389. Utility shutoff where the landlord holds the account; tenant protections; notice to units.
- "landlord-account" `\blandlord.?s?\b(?:\W+\w+){0,15}?\W+(?:accounts?|bills?|nonpayment|delinquen\w*|arrear\w*)\b(?:\W+\w+){0,20}?\W+(?:utilit\w*|electric\w*|gas|water|sewer\w*|service)\b|\b(?:utilit\w*|electric\w*|gas|water|sewer\w*) (?:service|utility)\b(?:\W+\w+){0,25}?\W+landlord.?s?\b(?:\W+\w+){0,10}?\W+(?:accounts?|nonpayment|fail\w*)`: 1 hits in 1 sections; sections: 27-33-50

**SC-B7-060** (`water-heater-temperature`). Controls: null 0, positive 3389. Water heater temperature setting at new occupancy.
- "water-heater" `\bwater heaters?\b(?:\W+\w+){0,20}?\W+(?:temperature|degrees|thermostat|setting)\b|\b(?:temperature|degrees)\b(?:\W+\w+){0,15}?\W+(?:hot water|water heaters?)\b`: 0 hits in 0 sections; sections: 

**SC-B7-061** (`waterbed`). Controls: null 0, positive 3389. Waterbed or liquid-filled furniture rules in leases.
- "waterbed" `water ?beds?|flotation (?:bedding|beds?)|liquid[- ]filled (?:furniture|beds?)`: 0 hits in 0 sections; sections: 

**SC-B7-062** (`window-guards`). Controls: null 0, positive 3389. Window guards, security bars and release mechanisms in rentals.
- "window-guard" `window (?:guards?|stops?|fall prevention)|\b(?:security|burglar) bars?\b|\bbars?\b(?:\W+\w+){0,6}?\W+windows?\b(?:\W+\w+){0,12}?\W+(?:release|escape|egress)\b`: 0 hits in 0 sections; sections: 

### §4 Decisions and questions to Taylor

No questions to Taylor so far; every call below was made on the cautious course.

- **`showing-notice-waiver`: `showing-notice-la` not tagged.** The shared clause lets showings run on shorter notice than the entry section. South Carolina requires at least 24 hours' notice for any entry outside emergencies, scheduled periodic services and tenant-requested services (S.C. Code Ann. § 27-40-530(c)), and a tenant can't waive rights under the Act (S.C. Code Ann. § 27-40-330(a)(1)). New edu row `edu-showing-notice-waiver-sc` instead (two-way basis check: the clause's basis fails in SC; the statute's rule is answered by the edu row).
- **`jury-waiver`.** South Carolina gives either side a jury in ejectment (S.C. Code Ann. § 27-37-80) and preserves the jury right (S.C. Const. art. I, § 14); no statute addresses advance lease waivers, and the Chapter 40 waiver ban doesn't name Chapter 37. Enforceability is case law. Cautious course: no jury waiver in SC leases; row stays VERIFIED (Part 5).
- **`waiver-by-acceptance`, `collection-fee`, `notice-service-fee`, `eviction-penalty-clause-ban`.** No statute (batteries SC-B1-001, -003, -004, -005b). Each row states the cautious course; the penalty doctrine and acceptance-waiver rules are case law.
- **`casualty-and-mitigation-waivable`.** Treated as non-waivable: both rules are in Chapter 40 and S.C. Code Ann. § 27-40-330(a)(1) bars waiving Chapter 40 rights. This matches the 2026-09-30 retro, which declined the no-abatement sentence for SC.

- **DV topics (SC item 2).** South Carolina has one domestic-violence provision, S.C. Code Ann. § 27-40-350 (2026 Act No. 184, effective on approval May 18, 2026; effective-date section read). Read with S.C. Code Ann. § 27-40-210(19)-(20). Batteries SC-B2-001 to -003 found no lock-change, confidentiality or general eviction-protection rule. Cautious courses: honor a protection order granting exclusive possession (S.C. Code Ann. § 20-4-60(C)(3)) and rekey on request, but never lock out a co-tenant without an order (S.C. Code Ann. § 27-40-660); keep abuse documents confidential (VAWA requires it in covered housing, 34 U.S.C. § 12491(c)(4)).
- **`dv-qualifying-documents`: late orders.** The 60 days run from "the date of a documented qualifying incident" (S.C. Code Ann. § 27-40-350(A)(1)), and the statute is silent where the order comes more than 60 days after the incident. Cautious course: accept a notice given within 60 days after the documenting order or conviction, relying on the good-faith protection in S.C. Code Ann. § 27-40-350(F). Row is CONDITIONAL and stays VERIFIED (Part 5).
- **`dv-deposit-timing`: periodic tenancies.** The deposit waits "until the end of the lease"; for a periodic tenancy, treat that as the date the tenancy ends for all tenants, then apply the 30-day return. This is the same gap the existing `edu-dv-lease-termination-sc` notes.
- **Session-law effective dates (SC item 11, so far).** 2026 Act No. 184: "This act takes effect upon approval by the Governor." (approved May 18, 2026). 2026 Act No. 155: "This act takes effect on January 1, 2027." (magistrate fees, S.C. Code Ann. § 8-21-1010). 2026 Act No. 252 rewrote S.C. Code Ann. § 27-40-800 effective June 30, 2026 (Code history line; the act's own section is read in batch 5).
- **Tag-first screen, deposits and fees (rule 26, two-way basis check).** Tagged SC: `nonrefundable-fees-wv` (no SC bar; keeps security money inside the deposit), `carpet-cleaning-ar` (no SC carpet rule; deducts actual cost as lease-breach damages, which S.C. Code Ann. § 27-40-410(a) allows through § 27-40-510(8)), `fees-and-charges-vi` (no SC fee-listing rule; cautious course), `interest-on-unpaid-amounts-ca` (no cap on a lease rate; legal rate 8.75% otherwise, S.C. Code Ann. § 34-31-20(A)), `government-fee-reimbursement-ky` (no SC bar; drafting judgment that an agreed share of a registration fee is not indemnity under S.C. Code Ann. § 27-40-330(a)(3)), `tenant-caused-fines-as` (tenant-caused amounts only = actual damages, S.C. Code Ann. § 27-40-710(C)). Not tagged: `detector-care-la`, because `smoke-detectors-sc` already states South Carolina's statutory version (S.C. Code Ann. § 5-25-1330); new `edu-alarm-tampering-fee-sc` answers the topic.
- **`deposit-escheat`: individual landlords.** The Unclaimed Property Act's presumption reaches property held "in the ordinary course of a holder's business" (S.C. Code Ann. § 27-18-30(A)), which isn't defined. Cautious course stated: treat an uncashed refund as reportable after five years.
- **Local limits (SC item 4).** S.C. Code Ann. § 27-39-60 read whole: it bars cities and counties only from regulating "the amount of rent" on private rentals, and saves local regulation of their own property and rent agreements with private persons. Rows on ADUs, owner-occupancy zoning, registration, inspections and just cause state that the state settles only rent amounts and leave the rest to local ordinance, pointing to `edu-local-preemption-sc`; no city or county research.
- **`tpa-notice`.** South Carolina's only tenant purchase right is the condominium-conversion offer (S.C. Code Ann. § 27-31-420); answered as Present for that case.
- **Battery SC-B4-015 rerun.** Its case-insensitive "section 8" matched "SECTION 8" in history lines; SC-B4-015b used a case-sensitive pattern.
- **Correction to a batch 1 row (own row, not yet in the master).** `edu-no-waiver-by-acceptance-rule-sc` (delivered in batches 1-4) said no statute addressed waiver by accepting rent. Reading Chapter 37 for batch 5 found S.C. Code Ann. § 27-37-150: once the rule to vacate or show cause issues, accepting rent doesn't waive ejectment. Battery SC-B1-001 had allowed only three words between "accept" and "rent"; rerun as SC-B1-001b. The row is replaced by `edu-waiver-by-acceptance-sc` (Present after filing / Confirmed absent before filing). The old id no longer appears in the delta.
- **Unlawful occupants and ejectment (SC item 5).** Read S.C. Code Ann. §§ 27-37-200 to 27-37-350 and § 16-11-790 (2026 Act No. 252; effective-date section: "This act takes effect upon approval by the Governor.", approved June 30, 2026), § 27-40-800 (rewritten by the same act), and § 30-2-60 (2026 Act No. 214; "This act takes effect on January 1, 2027."). Used for `trespass-notice`, `expedited-criminal-eviction`, `possession-bond`, `eviction-hardship-stay`, `post-eviction-property`, `tenant-records`, pointing to `edu-unauthorized-occupant-removal-sc`, `edu-eviction-record-removal-sc` and `edu-eviction-process-sc` unchanged. The headings of §§ 27-37-200 to 27-37-350 and § 16-11-790 print without bold on the chapter pages; the splitter keyed on "SECTION n." and found all of them.
- **`possession-bond`: two appeal rules.** S.C. Code Ann. § 27-37-130 (appeal bond for costs and damages, five days) and § 27-40-800 (rent affidavit stays execution) both speak to residential appeals, and neither says how they fit together. Row states both and treats the later, specific § 27-40-800 as the cautious guide.
- **`trespass-notice`: common areas vs the unit.** Drafting judgment from "the person in possession" in S.C. Code Ann. § 16-11-620: the landlord can warn non-tenants off common areas, but not off a tenant's unit; a tenant's guest likely has "good excuse". Guest defenses are case law.
- **SC item 6: `keys` and `hoa-compliance` (no conflict found).** `keys` charges the cost of rekeying when keys aren't returned and bars duplicating keys without consent. That fits "A tenant shall not change locks on the dwelling unit without the permission of the landlord." (S.C. Code Ann. § 27-40-530(e)), and the rekey cost is damages for breaching the lease, which a deposit may cover because the tenant must "(8) comply with the lease and rules and regulations which are enforceable pursuant to SECTION 27-40-520." (S.C. Code Ann. § 27-40-510(8); S.C. Code Ann. § 27-40-410(a)). Neither clause waives a Chapter 40 right (S.C. Code Ann. § 27-40-330(a)). `hoa-compliance` makes the tenant follow the association's rules and pay fines the tenant causes; Chapters 30 and 31 bind owners ("Each co-owner shall comply strictly with the bylaws and with the administrative rules and regulations adopted pursuant thereto", S.C. Code Ann. § 27-31-170) and say nothing about tenants. S.C. Code Ann. § 27-40-520 governs rules the *landlord* adopts (later rules that "substantially modify the tenant's bargain" fail if the tenant objects in writing within 30 days, § 27-40-520(b)). An association rule adopted mid-lease isn't a landlord rule on the text, so there's no conflict; noted as a residual risk, not a finding.
- **SC item 7: central edits read correctly in SC.** `smoking-policy`: a lease term agreed at signing; no South Carolina statute limits a smoking ban or protects cannabis use in housing (battery and reading by agent b6 under `cannabis`, see below). `no-alterations`: its savings sentence keeps the fair-housing right to reasonable modifications at the tenant's expense (S.C. Code Ann. § 31-21-70(G)(1), per the SC retro). `addendum-precedence`: the carve-out lets a legally required notice control, which covers the statutory "IF YOU DO NOT PAY YOUR RENT ON TIME" paragraph (S.C. Code Ann. § 27-40-710(B)).
- **SC item 8(a): holdover rows confirmed.** `holdover-ca` matches S.C. Code Ann. § 27-40-770(c) (possession action, fees if not in good faith, the greater of three months' rent or twice actual damages if wilful). One wrinkle: the clause says a consented holdover continues month to month, while "the tenancy is week to week in case of a roomer who pays weekly rent and in all other cases month to month." (S.C. Code Ann. § 27-40-310(d)). The clause's month-to-month term is an agreed term, which (d) allows ("Unless the rental agreement fixes a definite term"), so it isn't a conflict. `holdover-rate-sc` is an opt-in liquidated charge that keeps the statutory remedies. S.C. Code Ann. § 27-40-330(c) protects liquidated damages only "for loss of rent resulting from a premature termination of a lease", so a holdover charge rests on the general penalty doctrine (case law, not searched); its "reasonable estimate" wording is the cautious drafting. The older general statutes (double value after a three-month written demand, S.C. Code Ann. § 27-35-170; double rent after a tenant's own notice to quit, S.C. Code Ann. § 27-35-180) are already described in `edu-holdover-remedies-sc`. No change.
- **SC item 8(c): CARES.** No SC eviction row contradicts `edu-cares-act-notice`. However, the statutory lease paragraph in `nonpayment-notice-sc` tells the tenant "You will get no other notice as long as you live in this rental unit." For a property covered by 15 U.S.C. § 9058(c), the landlord still owes a 30-day notice to vacate. The paragraph's words are fixed by S.C. Code Ann. § 27-40-710(B), so it can't be edited; see the §6 finding, which proposes a pointer in the edu row instead.
- **Batches 6 and 7 (154 topics) were drafted by two parallel agents** working from this pass's saved corpus, tools and style brief (`rows/AGENT-BRIEF.md`). Every row went through the same machine checks as batches 1-5: quotes, citations, ids, topic coverage and references. The lead reviewed all 36 tags and the flagged items. Their full tag-first screens and drafting calls follow as §4.1 and §4.2.
- **FETCH requests (rule 36), all resolved in this pass.** (1) Regs. 61-86.1 (asbestos): fetched from the official "Chapter 61-80 through 61-92" PDF (SHA-256 042ace23…7e80) and read. Projects at private residential buildings of four or fewer units may be exempt, with exceptions; `edu-asbestos-sc` updated. (2) Lead regulations under S.C. Code Ann. § 44-53-1450: every chapter 61 file not already held was screened in the page; there is no lead-poisoning regulation; `edu-lead-state-notices-sc` and `edu-no-lead-safe-certification-sc` updated. (3) Regs. chapter 27 (pesticides): fetched as the official Word file (SHA-256 df135597…9119) and searched; it has no tenant notice rule, only licensing of structural pest control in rented housing (Regs. 27-1085(L)(1)); `edu-no-pest-control-notice-rule-sc` updated. (4) Regs. 61-44 (wells): it was already in the held 61-18 to 61-58 PDF, but the splitter had missed its header; read, and `edu-no-well-testing-rule-sc` updated. The quote checker holds no text for items 1, 3 and 4, so those rows quote them in double quotes with the citation.
- **`binding-arbitration`.** `arbitration-agreement` NOT TAGGED. South Carolina's arbitration act requires underlined capital-letter notice on the contract's first page (S.C. Code Ann. § 15-48-10(a)). The clause's notes record your rule of offering it only where it works without relying on federal preemption and carries no penalty for using a prohibited term, and SC fails that as drafted. The edu row `edu-binding-arbitration-sc` explains this. Recommendation: leave SC off the clause unless you want a builder rule that adds the first-page notice.

#### §4.1 Batch b6 decisions (topics actual-notice-method to parking-rules-notice)


##### Tag-first screens, cautious-course calls and drafting judgments

###### actual-notice-method
- NOT TAGGED actual-notice-method-or — names Oregon law ("Where Oregon law requires actual notice"); not state-neutral.
- NOT TAGGED actual-notice-method-nd — cites N.D.C.C. sections throughout; not state-neutral.
- Edu row `edu-no-agreed-notice-method-rule-sc`: SC has no actual-notice standard; answered from the § 27-40-240 notice definitions. Battery SC-B6-001.

###### adverse-proceeding-notice
- NOT TAGGED tenant-notice-of-adverse-proceeding-nd, adverse-proceeding-notice-co, adverse-proceeding-notice-wy, tenant-notice-of-adverse-proceeding-ks, adverse-proceeding-notice-mn — the subject (tenant forwards notices of proceedings) is already covered for SC by `tenant-forward-proceedings-ca` (condition 3); CO's names a "public trustee" (CO office) and MN's a contract-for-deed cancellation, so neither is state-neutral in any case.
- Edu row `edu-no-adverse-proceeding-notice-sc`. Battery SC-B6-002. Found § 27-35-80 (attornment to a stranger void) — useful context; no existing SC row states it (not a landlord duty, so not proposed as a row).

###### alt-housing
- NOT TAGGED substitute-premises-after-damage-nd — its last sentence preserves rights "under North Dakota law"; not state-neutral.
- Edu row `edu-no-alt-housing-duty-sc`. Battery SC-B6-004. Drafting judgment: SC's § 27-40-630 omits the model act's substitute-housing remedy (only essential services may be procured), stated in the body.

###### animal-care-access
- NOT TAGGED animal-care-access-me, -la, -ms, -pr, -wy, -ks, -mn, -oh, -fl — each names its own state's terms or law (Louisiana succession terms, Florida/Ohio statutes, etc.) or adds terms drafted to that state's entry statute.
- NOT TAGGED animal-care-access-vi (carries VI;AS;MP;CO;TX;NJ;GA) — its basis notes rest on the absence of an entry statute; SC has one that limits access to listed cases (§ 27-40-530(d)) and requires 24 hours' notice except in (b) cases (§ 27-40-530(c)). A lease clause letting the landlord admit a third party without notice outside an emergency risks waiving § 27-40-530 rights (§ 27-40-330(a)(1)). Same reasoning as the FL pass (FL drafted its own). Cautious course: edu row only; no SC clause drafted (the emergency limb may cover a real animal emergency, but that is case law).
- Battery SC-B6-003.

###### asbestos-hazards
- NOT TAGGED asbestos-disposal-site-disclosure-nh — REQUIRED_DISCLOSURE basis is a New Hampshire statute; no SC counterpart (battery SC-B6-005).
- Edu row `edu-asbestos-sc` (licensing present; no tenant disclosure).
- FETCH: Regs. chapter 61 (61-86.1, DES asbestos standards and licensing) — topic asbestos-hazards — the corpus holds 61-1 to 61-58 and 61-71 only; whether residential rental renovations are asbestos projects needing a license (and any homeowner/residential exemption) is set there.

###### association-obligations-disclosure
- NOT TAGGED montgomery-association-docs-md, condo-repair-contact-ma, cic-notice-ct, association-obligations-disclosure-dc, condominium-lease-statement-pr, access-control-lease-statement-pr, condominium-apartment-particulars-gu — each rests on a REQUIRED_DISCLOSURE basis from another state's statute (or names that state's act); no SC counterpart (battery SC-B6-006).
- NOT TAGGED association-documents-provided-co — state-neutral in wording but bundles a promise that the landlord pays all assessments and never charges the tenant for common-area maintenance and a no-markup, cure-first fine rule; those are CO policy choices, not SC law, and conflict in part with the SC-tagged `hoa-compliance` (fines are the tenant's responsibility). Not tagged to avoid two inconsistent fine rules.
- NOT TAGGED association-documents-delivery-ks — state-neutral and lawful in SC, but the subject (tenant bound by association documents) is already covered for SC by `hoa-compliance`; edu row tells the landlord to give copies (§ 27-40-520(a)(6) notice). Judgment call recorded.
- Edu row `edu-no-association-disclosure-sc`.

###### hoa
- TAGGED association-approval-la — state-neutral; SERVES_LANDLORD holds (no SC approval statute; master deed may restrict leasing, § 27-31-100(h)); two-way check against §§ 27-40-430, 27-40-620 and 27-40-330 passes (clause matches rent abatement and return of amounts; doesn't limit wilful-nondelivery damages).
- NOT TAGGED association-approval-fl (Florida fee-cap statute basis), columbia-association-md (Maryland/Columbia Association), association-approval-co (CO duplicate of the -la clause with a landlord-pays-all-fees rule; SC tagged -la instead), condo-documents-wi (Wisconsin delivery statute basis).
- Edu row `edu-hoa-sc`. Title 27 Ch. 30 read whole; Ch. 31 read for every tenant/lease/rent term. Found § 27-1-60 (flag display, binds leases and association documents).

##### Findings on existing rows
- `hoa-compliance` (SC item 6 check, Chapters 30 and 31 and §§ 27-40-330, 27-40-410, 27-40-520): no conflict found. "Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility." recovers damages caused by the tenant's breach (§ 27-40-710(C)), not indemnity of the landlord's own liability "arising under law" (§ 27-40-330(a)(3)); Chapters 30 and 31 contain no rule on passing fines to tenants. One gap, not an error: association rules adopted after signing that substantially modify the bargain may be invalid against a tenant who objects in writing within 30 days (§ 27-40-520(b)) if they are treated as landlord rules. Suggested SC notes line (not a text change): "SC: association rules bind the tenant as lease rules only with notice at signing or on adoption (S.C. Code Ann. § 27-40-520(a)(6)); fines recover the tenant's breach (S.C. Code Ann. § 27-40-710(C))."

###### automatic-renewal
- TAGGED automatic-renewal-ks — state-neutral text; SERVES_LANDLORD holds under § 27-40-310(a); no SC auto-renewal statute (battery SC-B6-007); two-way check against §§ 27-40-310(d), 27-40-330(a)(1), 27-40-910 passes.
- NOT TAGGED auto-renewal-formatting-ca (California boldface statute basis), automatic-renewal-nd (ND first-class-mail reminder rule), lease-end-continuation-mt (Montana default-extension statute), auto-renewal-ny and auto-renewal-wi (NY/WI reminder windows; WI names its statute), lease-end-continuation-wa and fixed-term-end-without-cause-wa (Washington good-cause regime, RCW cited), automatic-renewal-md, -ri, -vt, -hi, -la, -mn (each built to its own state's renewal statute or names that state's law), automatic-renewal-co (adds CO nonrenewal-penalty rules and says "Colorado law"), lease-renewal-and-holdover-wy (cites Wyo. Stat.).
- Edu row `edu-no-automatic-renewal-rule-sc` added as well, to state the service-contract and management-agreement rules. Drafting judgment: a lease is not a "service contract" under § 37-1-301(32).

###### balcony-inspection
- No shared clause listed. Edu row `edu-no-balcony-inspection-rule-sc`; battery SC-B6-009 (regs searched too: only pool barriers and R. 8-1211 guards). Property maintenance and existing-building codes are local options (§ 6-9-60), noted with the LOCAL sentence.

###### bed-bug-cooperation
- TAGGED pest-cooperation-pr (carries PR;GU;AS;MP;NE;SD;TX;AZ) — state-neutral; entry defers to the lease's entry section (so § 27-40-530 governs); fault-based cost split matches §§ 27-40-510(2), (6) and 27-40-440(a)(2). Battery SC-B6-008.
- NOT TAGGED pest-cooperation-la — same subject; its "at reasonable times, after reasonable notice" entry could be read as less than § 27-40-530(c)'s 24 hours; -pr defers to the entry section instead.
- NOT TAGGED bed-bug-cooperation-ca, -ct, -ri, -nh, -me, -dc, -co, -mn; pest-cooperation-vt, -wy, -ks, -oh, -nv, -nj, -fl; pest-bed-bug-cooperation-nd — each cites or is built to its own state's bed-bug or entry statute (notice periods of 48 hours/two days, reporting procedures, rooming-house rules) or says the state has no pest duty; one SC tag is enough (rule 26).
- No edu row: the tag answers the topic; `edu-no-bed-bug-disclosure-sc` already states the absence of a bed-bug statute.

###### binding-arbitration
- NOT TAGGED arbitration-agreement — its notes record Taylor's choice to offer it only where state law allows arbitration "without depending on federal preemption and with no penalty for using a prohibited term". SC fails both legs as drafted: (1) the SC Uniform Arbitration Act applies only if notice is typed in underlined capitals or rubber-stamped on the FIRST PAGE of the contract (§ 15-48-10(a)) — a layout requirement the clause text doesn't supply, so in SC it would rest on the FAA; (2) SC penalises deliberate use of a known prohibited term (§ 27-40-330(b)), and whether a lease arbitration clause "waive[s] or forego[es] rights or remedies under this chapter" (§ 27-40-330(a)(1)) is unsettled (case law not searched). Recommendation to the lead: leave SC off unless Taylor wants it with a builder rule adding the first-page notice.
- NOT TAGGED arbitration-agreement-ak, arbitration-agreement-wy — name Alaska/Wyoming statutes.
- Edu row `edu-binding-arbitration-sc`; battery SC-B6-010.

###### cannabis (SC assigned item)
- Title 44 Chapter 53 searched for every cannabis/marijuana/hemp term (and Title 46 Chapter 55 hemp): SC has no medical-cannabis or adult-use program and no housing protection. Only carve-outs: low-THC cannabidiol for physician-certified severe epilepsy is excluded from "marijuana" (§ 44-53-110), and the Article 18 clinical-trial immunity (§ 44-53-1840(A)), which creates no tenancy right. Hemp growing needs a license (§ 46-55-20(A)(1)). 2024-2026 acts screened (only 2026 Acts No. 146 and 157 mention the terms, neither relevant). Result: no statute changes the conclusion that a landlord may bar smoking or growing cannabis; this also confirms SC item 7 for `smoking-policy` as to statutes.
- TAGGED cannabis-restrictions-ak (carries AK;MS;DC;PR;GU;AS;MP;CO;TX;FL;GA) — state-neutral; SERVES_LANDLORD holds; consistent with § 27-40-540.
- NOT TAGGED cannabis-cultivation-il, -mo, -ok, -mi, -oh, -nm, -mt, -or, -ma, -me; cannabis-restrictions-de, -vi, -nv, -ca — built to those states' legalisation statutes (home-grow, smoking-only limits, "marihuana" spelling, grow-site registration) or name them; -ak covers SC.
- Edu row `edu-cannabis-sc`; battery SC-B6-011.

###### certificate-of-occupancy-disclosure
- NOT TAGGED certificate-of-occupancy-notice-ny — REQUIRED_DISCLOSURE under N.Y. Real Prop. Law § 235-bb; no SC counterpart (battery SC-B6-012).
- Edu row `edu-no-certificate-of-occupancy-disclosure-sc`.

###### children-occupancy
- NOT TAGGED children-occupancy-nv (NRS 118A.200 required disclosure), children-occupancy-mn (MN basis; its landlord-adopted "rules to protect the safety of minors" risk familial-status discrimination in terms under § 31-21-40(2) and need § 27-40-520 handling), children-occupancy-limit-nd (ND-specific text).
- Edu row `edu-children-occupancy-sc` (Fair Housing Law §§ 31-21-30(6), 31-21-40, 31-21-70(L); lead rental bar § 44-53-1440). Battery SC-B6-013.

###### cold-weather-vacate-notice
- TAGGED cold-weather-vacate-notice-wy — state-neutral; SERVES_LANDLORD holds; entry ties to the SC weather-emergency entry right (§ 27-40-530(b)(1)); liability limited to tenant-caused freeze damage (§ 27-40-510(5)-(6)); no shift of the § 27-40-440(a)(4) heat duty.
- NOT TAGGED cold-weather-vacate-notice-mn — says "Minnesota law makes failure to give this notice a criminal offense".
- Edu row `edu-no-cold-weather-vacate-notice-sc`; battery SC-B6-014.

###### common-area-lighting
- TAGGED common-area-lighting-ks — state-neutral; CONSTRAINED_TERM holds under § 27-40-440(a)(3) (landlord keeps common-area duty; only the electricity cost moves, § 27-40-310(a)). Battery SC-B6-015.
- NOT TAGGED common-area-lighting-ma (Mass. regulation basis), common-area-lighting-tenant-meter-wy (cites Wyo. Stat.), common-area-lighting-tenant-metered-nd (state-neutral and lawful, but duplicates -ks; one tag is enough), common-area-lighting-ca (California Civ. Code § 1940.9 disclosure basis).
- No edu row: the tag carries the absence battery.

###### communal-land-lease-approval
- NOT TAGGED communal-land-lease-approval-as (American Samoa Governor approval) and -wy (Wyoming state trust land).
- Edu row `edu-communal-land-lease-sc` (Catawba lands, §§ 27-15-10, 27-15-20; settlement, §§ 27-16-30(10), 27-16-100(2)). Battery SC-B6-016. Drafting judgment: the 1808 Catawba lease rules are stated with a caution because the 1993 settlement put the Reservation in federal trust.

###### construction-liens
- TAGGED no-liens-ar (carries AR;MS;GU;VI;AS;MP;WY;MN;NE;SD;TX;GA) — state-neutral; SERVES_LANDLORD holds (§ 29-5-10(a) "by consent of" test; no lessor-protection statute); two-way check against § 27-40-330(a)(3) passes (tenant pays only for its own ordered work, § 27-40-710(C)).
- NOT TAGGED no-liens-fl and no-liens-ky (each rests on its state's lessor-exclusion statute: "will not be subject to liens" has no SC basis and would mislead), no-liens-ri, -la, -pr, -co, -ks, -nv, -nj, -az, construction-liens-dc, no-construction-liens-nd (state terms/statutes or duplicates of -ar).
- Edu row `edu-construction-liens-sc`; battery SC-B6-017. Found § 27-40-630(c) (lien from unauthorized essential-services repairs unenforceable).

###### consumer-protection-act
- No shared clause listed. Edu row `edu-consumer-protection-act-sc` (§§ 39-5-10(b), 39-5-20(a), 39-5-40(a), 39-5-140, 39-5-145). Battery SC-B6-018. Whether the UTPA reaches residential landlords is case law (not searched); stated as such.

###### defective-drywall-disclosure
- NOT TAGGED defective-drywall-disclosure-va — "as defined in Virginia law".
- Edu row `edu-no-drywall-disclosure-sc`; battery SC-B6-020 (regs searched: R. 105-14 disclosure form lists "corrosion-causing sheetrock").

###### disaster-duties
- NOT TAGGED fire-relocation-benefit-notice-ma (Massachusetts insurance statute), disaster-duties-mn ("under Minnesota law").
- Edu row `edu-disaster-duties-sc` (price gouging § 39-5-145; casualty § 27-40-650; vacation-rental evacuation § 27-50-260). Battery SC-B6-019.

###### disaster-displaced-guests
- No shared clause. Edu row `edu-no-disaster-guest-rule-sc`; battery SC-B6-019.

###### asbestos-hazards (amended)
- Row amended after finding § 27-50-20(3): the Residential Property Condition Disclosure Act applies to a "lease with an option to purchase contract" for 1-4 units, and the statement covers asbestos (§ 27-50-40(A)(6)), due before signing (§ 27-50-50(A)).

##### Findings on existing rows (continued)
- `edu-required-disclosures-sc` (lead's b4 row, not yet in the CSV): its body says "A lease with an option to purchase isn't treated by statute as triggering the seller's property-condition disclosure at signing; whether it is due when the option is exercised depends on that sale." Wrong. 'This article applies to the following transfers of residential real property consisting of at least one but not more than four dwelling units:' (S.C. Code Ann. § 27-50-20), including '(3) lease with an option to purchase contract.' (S.C. Code Ann. § 27-50-20(3)); "Purchaser" includes a "tenant" in a real estate contract (§ 27-50-10(5)); the owner 'shall deliver to the purchaser the disclosure form required by this article before a real estate contract is signed by the purchaser and owner, or as otherwise agreed in the real estate contract.' (§ 27-50-50(A)). Battery SC-B4-011 missed it (the statute's phrase is "lease with an option to purchase contract"). Proposed replacement sentence: "A lease with an option to purchase a home of one to four units is covered by the Residential Property Condition Disclosure Act: before it is signed (or as the contract provides), the owner must give the tenant-buyer the Real Estate Commission's disclosure statement (S.C. Code Ann. Regs. 105-14), unless both parties agree in writing not to; a knowing false or incomplete statement makes the owner liable for actual damages."
- `edu-no-radon-disclosure-sc`, `edu-no-mold-disclosure-sc`, `edu-no-drug-lab-disclosure-sc`, `edu-no-flood-disclosure-sc` (existing SC rows): each says SC has no disclosure duty. True for ordinary leases, incomplete for a lease with an option to purchase (§ 27-50-20(3)): the statement covers 'presence of lead-based paint, asbestos, radon gas, methane gas, underground storage tank, hazardous material or toxic material, buried or covered, and other environmental contamination;' (§ 27-50-40(A)(6)), and the R. 105-14 form asks about toxic mold, methamphetamine production and flooding. Proposed fix: add to each body "(Leases with an option to purchase a one-to-four-unit home are different: the state property-condition disclosure statement, which asks about [radon / mold / methamphetamine production / flooding], must be given before signing; see `edu-lease-option-disclosure-sc`.)"
- Proposed new row (SC already answers `required-disclosures`; this states an unstated landlord duty): id `edu-lease-option-disclosure-sc`; topic_key `required-disclosures`; group Disclosures; rule_type REQUIRED; content_type LANDLORD_EDUCATION; lease_clause_basis empty; bodyText: "If you lease a home of one to four units with an option to purchase, South Carolina's Residential Property Condition Disclosure Act applies. Before the lease-option is signed (or as the contract provides), give the tenant the Real Estate Commission's disclosure statement covering, among other things, the water and sewer systems, structure and roof, mechanical systems, wood-destroying insects, zoning and covenants, lead-based paint, asbestos, radon and other environmental contamination, existing leases, any meter conservation charge, and any homeowners association. For each item you may state actual knowledge or make no representation. Skipping the form doesn't void the contract, but a knowing false, incomplete or misleading statement makes you liable for actual damages and court costs, and possibly attorney's fees. The parties may agree in writing not to complete the statement."; notes: "SC: Present. 'This article applies to the following transfers of residential real property consisting of at least one but not more than four dwelling units:' (S.C. Code Ann. § 27-50-20), including '(3) lease with an option to purchase contract.' (S.C. Code Ann. § 27-50-20(3)); contents (S.C. Code Ann. § 27-50-40(A)(1)-(9)); options (S.C. Code Ann. § 27-50-40(B)); delivery (S.C. Code Ann. § 27-50-50(A)); no voiding (S.C. Code Ann. § 27-50-50(B)); liability (S.C. Code Ann. § 27-50-65); written opt-out (S.C. Code Ann. § 27-50-30(13)); form (S.C. Code Ann. Regs. 105-14). " + BASIS.

###### designated-repairer
- NOT TAGGED designated-repairer-nv, -gu, -vi, -wy, -ks, -mn, -oh, -fl (name their states' law); -pr (built on P.R. Civ. Code urgent-repair right); -as ("will not ... deduct any repair cost from Rent, unless Landlord first consents" would bar the SC essential-services procure-and-deduct remedy, § 27-40-630(a)(1), a waiver under § 27-40-330(a)(1)); -mp (lawful wording "or applicable law allows it", but its emergency example is "typhoon damage" and its self-help reimbursement is an MP choice; edu row chosen instead).
- Edu row `edu-no-designated-repairer-rule-sc`; battery SC-B6-021.

###### disability-accommodation (SC assigned item)
- § 43-33-70 quoted exactly in the row: (a) "Blind persons, visually handicapped persons, and other physically disabled persons shall be entitled to full and equal access ... to all housing accommodations offered for rent, lease, or compensation in this State ..."; (d) "Every handicapped person who has an assistance dog ... is entitled to full and equal access to all housing accommodations ... not required to pay extra compensation for the dog but is liable for any damage done to the premises by the dog." The statute says "assistance dog" (not "guide or assistance dog"); Article 1 (§§ 43-33-10 to 43-33-70) has no definition of it — SC log open item 10 closed as "undefined in the Code". Fair Housing Law §§ 31-21-30(7), 31-21-40(6)-(7), 31-21-70(G)(1)-(2), (K), (N) read whole.
- TAGGED disability-modification-restoration-mn — state-neutral; tracks § 31-21-70(G)(1).
- NOT TAGGED disability-modification-restoration-id (Idaho Code basis), -hi, -wy (name their states), disability-modification-oh (escrow/interest and permit-assurance terms come from Ohio's statute; not SC law), disability-modification-restoration-nv (interest-bearing deposit rule is Nevada's), disability-accommodation-request-co (its "not obvious" limit on documentation diverges from SC's animal documentation rule, § 31-21-70(N)(2), and it is a CO-drafted process clause).
- Edu row `edu-disability-accommodation-sc`.

###### double-letting
- No shared clause. Edu row `edu-no-double-letting-rule-sc` (§ 27-40-620; § 16-11-790(B)); battery SC-B6-022.

###### drug-free-housing-addendum
- TAGGED drug-free-housing-ca — body is state-neutral (no California law named); SERVES_LANDLORD holds (§ 27-40-540; § 44-53-370(c)); victim/police-call and accommodation sentences are lawful landlord choices in SC. Battery SC-B6-023.
- NOT TAGGED drug-free-housing-addendum-il, -wy, drug-activity-prohibition-oh (name their states or statutes).

###### electric-submetering-disclosure
- NOT TAGGED electric-submeter-disclosure-tx (Tex. code), utility-submetering-energy-md (COMAR basis), electric-submeter-billing-co (CO figures: 2% / $10 admin cap and not-rent rule are CO statute), electric-submetering-disclosure-mn (Minn. Stat. basis).
- Edu row `edu-no-submetering-disclosure-sc` (R. 103-327 individual metering; § 58-27-10(7) "not resold" exclusion). Battery SC-B6-024 (regs searched). Cautious course: avoid submeter resale; open question flagged as case law/PSC practice.

###### emergency-contact
- TAGGED emergency-contact-co (carries CO;AZ) — state-neutral; no SC statute; no entry right for the contact (§ 27-40-530(d)). Battery SC-B6-025.
- NOT TAGGED emergency-phone-tx (Tex. code), emergency-contact-consent-ny (NY statute), emergency-contact-mn (duplicate subject; -co chosen), emergency-contact-ne, -nd (name their states), emergency-contact-oh (neutral but bundles an emergency-phone/written-notice section that overlaps `notices`; one tag enough), social-services-hotline-lease-notice-nj (NJ statute).

###### eminent-domain
- TAGGED eminent-domain-vi (carries 12 states) — state-neutral; SERVES_LANDLORD holds; tenant in possession is a "condemnee" (§ 28-2-30(6)); relocation payments carved out (§ 28-11-10). Battery SC-B6-026.
- NOT TAGGED condemnation-ar, -ms, -gu, eminent-domain-co, -wy (name their states/statutes).

###### employee-screening
- No shared clause. Edu row `edu-no-employee-screening-rule-sc` (§ 40-57-510(F)); battery SC-B6-027.

###### energy-data-release
- TAGGED energy-data-release-wy (carries WY;SD;NV;TX;FL;GA) — state-neutral; SERVES_LANDLORD holds; fits the PSC customer-data consent rule, R. 103-823.2(C)(1), (C)(4). Battery SC-B6-028 (regs searched).
- NOT TAGGED energy-data-release-vt (Vermont statute), -dc (DC benchmarking), -co (Colorado), -mn (Minn. Stat. required disclosure), energy-data-consent-ca (duplicate subject; -wy chosen).

###### entity-landlord-court-representation
- No shared clause. Edu row `edu-entity-landlord-court-representation-sc` (§ 33-1-103 as rewritten by 2026 Act No. 233, effective on approval May 19, 2026 — act's SECTION 3 read; § 31-3-70 added by the same act). Present, so no battery. Court rules (SCRMC/SCACR) not in the corpus; circuit-court representation left to them (stated in notes, not an absence claim).

###### environmental-event-termination
- NOT TAGGED environmental-event-termination-co (Colorado), -wy (cites Wyo. Stat.).
- Edu row `edu-no-environmental-event-termination-sc`; points to `casualty-landlord-termination-sc`. Battery SC-B6-029.

###### ev-charging-requirements / ev-charging-shared-area / ev-charging-end-of-tenancy
- One battery SC-B6-030 covers all three (no EV tenancy rule; § 58-27-1060 charging-station utility exemption found).
- TAGGED ev-charger-installation-conditions-nd (requirements) — state-neutral; SERVES_LANDLORD holds; § 58-27-1060(A) fits its electricity-cost term.
- TAGGED ev-charging-shared-area-co (shared-area; carries CO;IL;KS;MN;NE;TX) — state-neutral; fee and damage terms lawful; § 27-40-440(a)(3) duty stays with landlord.
- NOT TAGGED ev-charging-requirements-co, -il, ev-charger-installation-hi (built to those states' EV-right statutes), -wy, -mn (name their states).
- NOT TAGGED ev-charging-end-of-tenancy-co (CO statute-based REQUIRED term) and ev-charger-removal-restoration-nd — the ND clause lets the landlord "treat the equipment as Landlord's property" if not removed; for a plug-in (non-fixture) unit that would bypass SC's abandoned-property rule (§ 27-40-730(d)-(f)) and could be a waiver (§ 27-40-330(a)(1)); fixture status is case law. Cautious course: edu row `edu-ev-charging-end-of-tenancy-sc` recommends a signed removal-or-surrender choice at approval. Listed in UNTAGGED because the edu row names it.
- Edu rows `edu-ev-charging-requirements-sc`, `edu-ev-charging-shared-area-sc`, `edu-ev-charging-end-of-tenancy-sc`.

###### extended-absence-notice
- TAGGED extended-absence-notice-ks (carries 32 states) — state-neutral; SC dropped the model act's absence section (battery SC-B6-032, 0 hits); consistent with §§ 27-40-540, 27-40-530, 27-40-730(a).
- NOT TAGGED extended-absence-notice-ne, -al, -ri, -de, -hi, -ca (duplicates of -ks; one tag enough), -ak (AS 34.03.150 disclosure), -gu, -wy, -mn, -fl (name their states).
- No edu row (tag carries the battery).

###### family-child-care
- NOT TAGGED family-child-care-or (Oregon's parent-waiver/insurance election comes from ORS), -wy, -consent-nd, -fl (name their states).
- Edu row `edu-family-child-care-sc` (§ 63-13-210(A)); battery SC-B6-033.

###### farmland-hunting-rights
- TAGGED hunting-rights-ms — state-neutral; SERVES_LANDLORD; § 50-1-90 (consent of owner or manager) and § 27-3-20(c) (tenant is an "owner" for recreational permission) show why the reservation matters. Battery SC-B6-031.
- NOT TAGGED no-hunting-pr (Puerto Rico), farmland-sporting-rights-co, farmland-hunting-rights-wy, farmland-hunting-rights-reserved-nd (duplicates; -ms is the shortest neutral version).

###### home-business
- NOT TAGGED home-business-permission-co, home-business-wy, home-business-use-restriction-nd — SC's subject is already covered by the SC-tagged `residential-use-only` (condition 3); ND's cites N.D.C.C.
- Edu row `edu-home-business-sc`; battery SC-B6-034.

###### fire-code-standard / fire-sprinkler-duty (SC assigned item)
- Read § 23-9-155 (apartment smoke detectors where no fire protection system; tenant-caused malfunction; Fire Marshal to promulgate regulations) and §§ 5-25-1310 to 5-25-1340 (one- and two-family rentals) — these are answered by the existing `smoke-detectors-sc`; not duplicated, pointed to. Regs ch. 71 (held) read: R. 71-8300.1 and 71-8300.2 make the IFC the non-waivable statewide minimum for all buildings; no Fire Marshal regulation addressed to rentals or implementing § 23-9-155 was found (search of ch. 71 for apartment/rental/landlord/tenant/dwelling unit). Regs ch. 8 (held): R. 8-1213 (no residential sprinklers in one- and two-family dwellings or townhouses).
- NOT TAGGED fire-code-compliance-mn (REQUIRED in MN; "State Fire Code" is a MN term of art; SC already has `fire-safety-grilling` for tenant fire conduct).
- Edu rows `edu-fire-code-standard-sc` (Present, no battery) and `edu-no-fire-sprinkler-duty-sc` (battery SC-B6-035, regs searched).

###### firearms
- TAGGED firearm-rules-ks — state-neutral; SERVES_LANDLORD; § 23-31-220(A)(2) preserves owner/possessor carry rules. Battery SC-B6-036.
- NOT TAGGED firearm-carry-rules-tn (built to Tennessee's tenant-carry statute), firearm-discharge-mt, firearm-rules-la (its locked-vehicle sentence mirrors parking-lot statutes in LA/MS/AZ/GA; SC has none, so -ks is the cleaner fit), firearms-restriction-hi, firearm-rules-pr, -gu, -vi, -as, firearms-mp, firearms-co, firearm-rules-wy, -mn, -fl (name their jurisdictions).
- Edu row `edu-firearms-sc`.

###### foreclosure / foreclosure-disclosure
- Battery SC-B6-037 covers both (no SC tenant-in-foreclosure or disclosure rule).
- foreclosure: no shared clause; edu row `edu-foreclosure-sc` (federal PTFA cited for context only).
- foreclosure-disclosure: TAGGED foreclosure-disclosure-nv — state-neutral voluntary disclosure; SERVES_LANDLORD in SC (UTPA § 39-5-20(a) risk). NOT TAGGED foreclosure-disclosure-mn (contract-for-deed and redemption-period terms are MN law), foreclosure-notice-az, foreclosure-disclosure-or, -la (REQUIRED_DISCLOSURE bases in their states).

###### foreign-ownership
- NOT TAGGED nonresident-alien-statement-ak (AS 09.25.010(b) required statement; no SC counterpart).
- Edu row `edu-foreign-ownership-sc` (§§ 27-13-10 to 27-13-40); battery SC-B6-038.

###### frozen-standard-incorporation
- No shared clause. Edu row `edu-code-editions-sc` (§§ 6-9-40, 6-9-50, 1-34-30; Regs. ch. 8 adopts the 2021 IBC/IFC/IRC with modifications; R. 71-8300.2(B)). Present; no battery.

###### furnishings-included
- TAGGED furnishings-included-la (carries 20 states) — state-neutral; consistent with §§ 27-40-410(a), 27-40-510(6), 27-40-440(a)(5). Battery SC-B6-041 (hits are bond and timeshare sections).
- NOT TAGGED furnishings-included-ks, -nd (name their states), furnishings-included-ri (Rhode Island furniture-deposit statute: $5,000 threshold, 20 days), furnishings-de, furnishings-included-ca (duplicates of -la).

###### guarantor-renewal
- TAGGED guaranty-as (carries 11 states) — state-neutral; statute of frauds § 32-3-10(2) satisfied by the signed guaranty; renewal choice explicit. Battery SC-B6-039.
- NOT TAGGED guaranty-pr (its five-year cap and withdrawal terms come from P.R. Civil Code), guaranty-gu, -vi, -wy, guaranty-renewals-nd, guaranty-of-lease-ca (name their states/statutes).

###### guest-rights
- NOT TAGGED guest-policy-wy, guest-rights-nd (cite their statutes); SC already has `guest-policy` and `guest-policy-day-limit`.
- Edu row `edu-no-guest-rights-statute-sc`; battery SC-B6-040 (0 hits: the Code doesn't use "guest" near tenancy words).

###### hazardous-contamination-disclosure
- NOT TAGGED contamination-disclosure-mo, superfund-disclosure-ia, activity-use-limitation-ma, activity-use-limitation-notice-ct, activity-use-restriction-nh, brownfield-notice-ms, environmental-covenant-incorporation-co, environmental-covenant-notice-and-compliance-nd, environmental-use-restriction-az — each rests on its state's environmental-covenant or disclosure statute; SC has no uniform environmental covenants act (battery SC-B6-042: no tenancy hit beyond § 27-50-40(A)(6)).
- Edu row `edu-no-contamination-disclosure-sc` (lease-option disclosure; brownfield restrictive covenant § 44-56-750).

###### heating
- NOT TAGGED tenant-supplied-heat-nj, heat-agreement-me, heat-freeze-protection-co (bodies neutral, but each is built to its state's heat statute; SC's freeze-protection subject is already carried by the SC tag on `cold-weather-vacate-notice-wy`, and SC's tenant-controlled-heat exception in § 27-40-440(a)(4) is self-executing), tenant-supplied-heat-wy, heating-mn (name their states).
- Edu row `edu-heating-sc` (Present; §§ 27-40-440(a)(4)-(5), 27-40-210(17), 27-40-630). Regs ch. 103 (held) read for heat/winter disconnection terms: none on landlord heat; R. 103-535 landlord-agreement text noted below.

###### homestead-waiver
- NOT TAGGED homestead-waiver-va, exemption-waiver-al, -ga, -ks (each relies on its state's statute authorizing a waiver; SC has none).
- Edu row `edu-no-homestead-waiver-sc` (S.C. Const. art. III, § 28; § 15-41-30). Battery SC-B6-043. Cautious course: leave any waiver out.

###### infirmity-termination
- NOT TAGGED early-termination-senior-infirmity-mi (Michigan required disclosure).
- Edu row `edu-no-infirmity-termination-sc`; battery SC-B6-044 (0 hits).

###### informal-dispute-resolution
- TAGGED informal-dispute-resolution-or (carries 20 states) — state-neutral; preserves all statutory notices, deadlines and remedies. Battery SC-B6-045 (no mediation rule in the Code; court ADR rules not in the corpus — not claimed absent in the tag beyond the Code).
- NOT TAGGED mediation-agreement-ak, informal-dispute-resolution-nd, -ca (name their states).

###### key-control-policy
- TAGGED lock-change-ak — state-neutral; applies § 27-40-530(e) with landlord's advance emergency permission. Battery SC-B6-046.
- NOT TAGGED key-control-exempt-setting-mn (Minn. Stat. § 325F required disclosure).
- Edu row `edu-no-key-control-policy-sc`.

##### Findings on existing rows / other items (continued)
- Possible regulation-statute conflict (for whoever owns utility topics): R. 103-535 (PSC wastewater-utility rule, Regs. ch. 103 held) says 'In the case of a landlord/tenant relationship where the tenant is the customer, the utility may require the landlord to execute an agreement wherein such landlord agrees to be responsible for all charges billed to that premises', while S.C. Code Ann. § 27-33-50(B)(1) says an entity or utility providing 'gas, electric, water, sewerage, or garbage services must not: (1) require a landlord to execute an agreement to be responsible for all charges billed to premises leased by a tenant' (2002 Act No. 336; except buildings of four or more units on a master meter, § 27-33-50(C)). The statute controls; any SC utility row citing R. 103-535 should say so. Not researched further (not my topic).

###### lead-state-notices / lead-safe-certification (SC assigned item)
- Read §§ 44-53-1310 to 44-53-1495 whole. § 44-53-1430: the department posts notice in a conspicuous place (not removed until remediation), gives written notice to the householder, and orders the owner to remediate; owner may appeal as a contested case. § 44-53-1440: no renting a posted/ordered unit to children until remediated; no eviction of a family with children for that reason. Penalties §§ 44-53-1480, 44-53-1485; no private action § 44-53-1490.
- 2026 Act No. 146: SECTION 167 amended § 44-53-1320(4) and (13) to read "Department of Public Health" (formerly "Department of Health and Environmental Control"); SECTION 298 "This act takes effect upon approval by the Governor."; approved May 15, 2026. So the Department of Public Health acts under the lead article from May 15, 2026 (the act's SECTIONS 294-295 refer to the DHEC split under 2023 Act No. 60 as of July 1, 2024). SC log open item 10 (Act 146 and § 44-53-1430) closed.
- NOT TAGGED lead-safe-certification-nj, lead-certification-de, lead-risk-reduction-md, lead-law-certification-ma, lead-hazard-order-disclosure-nh, lead-rrpm-disclosure-vt, lead-state-notices-dc, lead-in-drinking-water-disclosure-nj, lead-service-line-notice-nj — all REQUIRED_DISCLOSURE under other states' statutes.
- Edu rows `edu-lead-state-notices-sc` (Present) and `edu-no-lead-safe-certification-sc` (battery SC-B6-047, regs searched).
- FETCH: Regs. chapter 61 (any Department of Public Health regulation under § 44-53-1450 implementing the lead article, if one exists outside 61-1 to 61-58 and 61-71) — topics lead-state-notices / lead-safe-certification — the statute authorizes regulations and none is in the held chapters; the rows say so rather than claiming absence.
- Finding (existing row): `edu-lead-hazards-sc` doesn't state the § 44-53-1440 rental bar and no-eviction rule, and its notes say the Act 146 effect "was not traced". Both now answered by `edu-lead-state-notices-sc`; suggest adding to its notes: "Agency is the Department of Public Health from May 15, 2026 (2026 Act No. 146, SECTIONS 167, 298); see `edu-lead-state-notices-sc` for S.C. Code Ann. § 44-53-1440."

###### lease-content-requirements / lease-copy / lease-notice-initial-requirement / lease-type-size
- One battery SC-B6-048 (required content, first page, copy delivery, initials, type size). Found § 40-57-135(F)(1)(c): a licensee in a personal rental must reveal licence status in bold, underlined capitals on the first page of the lease — stated in the content and type-size rows.
- lease-content-requirements: NOT TAGGED utility-repair-obligations-md (Md. required disclosure), subsidy-lease-conditions-pr (Ley 173-1996). Edu row `edu-lease-content-requirements-sc`.
- lease-copy: TAGGED lease-copy-receipt-hi (carries HI;GU;VI;AS;MP;KS;NE;AZ;FL;GA) — state-neutral; supports § 27-40-520(a)(6) notice. NOT TAGGED lease-copy-receipt-mn, -wi, -oh, -nv, -nj (built to their states' copy-delivery statutes; -hi is the neutral one). Edu row `edu-no-lease-copy-duty-sc`.
- lease-notice-initial-requirement: NOT TAGGED lease-notice-initial-requirement-nd (N.D.C.C. § 47-16-15(4) required disclosure). Edu row `edu-no-lease-initials-requirement-sc`.
- lease-type-size: no shared clause. Edu row `edu-no-lease-type-size-sc`.

###### lease-registration
- No shared clause. Edu row `edu-lease-recording-sc` (Present: § 30-7-10 reaches written leases longer than twelve months). No battery (Present).

###### lease-term-limitation
- NOT TAGGED lease-term-and-recording-wy (Wyo. Stat.), lease-term-limitation-mn (Minn. Stat. required disclosure).
- Edu row `edu-lease-term-limits-sc` (§ 27-23-60 parol leases; § 32-3-10). Battery SC-B6-050 (first run failed its own positive on the "ninety-nine years" window before anything was recorded; rerun under the same id with a 7-word window — only one SC-B6-050 record exists in batteries.jsonl).

###### lease-type-parity
- No shared clause. Edu row `edu-no-lease-type-parity-sc`; battery SC-B6-049.

###### inspection-notice-penalty
- No shared clause. Edu row `edu-no-inspection-notice-penalty-sc`; battery SC-B6-051.

###### law-enforcement-cooperation
- No shared clause. Edu row `edu-no-law-enforcement-cooperation-rule-sc`; battery SC-B6-052 (0 hits).

###### limitation-of-actions
- No shared clause. Edu row `edu-limitation-of-actions-sc` (Present: §§ 15-3-530, 15-3-520(b), 15-3-120, 15-3-30). Whether a lease is a "sealed instrument" left as case law.

###### military-air-zone-disclosure
- NOT TAGGED military-air-zone-disclosure-va (body says "as defined in Virginia law"-type terms / VA basis), military-installation-disclosure-in (Indiana required disclosure).
- Edu row `edu-no-military-zone-disclosure-sc` (§ 6-1-320); battery SC-B6-053.

###### municipal-utility-lien
- NOT TAGGED municipal-water-lien-mi (Michigan affidavit procedure; no SC counterpart).
- Edu row `edu-municipal-utility-lien-sc` (§ 27-33-50; sewer liens §§ 5-31-2040, 6-11-1240, 6-15-100). Battery SC-B6-054 (first attempt failed its own tenant-exemption positive before recording; rerun under the same id; one record).

###### notice-to-vacate-additional-terms
- No shared clause. Edu row `edu-no-notice-to-vacate-terms-rule-sc`; battery SC-B6-055.

###### optional-lease-terms
- No shared clause. Edu row `edu-optional-lease-terms-sc` (Present: §§ 27-40-310(c)-(d), 27-40-540, 27-40-530(b)(2), 27-40-710(B), 27-40-440(c), 27-40-330(c), 27-50-20(3)).

###### ordnance-demolition-meter-disclosures
- NOT TAGGED ordnance-demolition-meter-disclosures-ca (California Civ. Code disclosures).
- Edu row `edu-no-ordnance-demolition-meter-disclosure-sc`; battery SC-B6-056.

###### other-landlord-facilities
- NOT TAGGED shared-facilities-closure-co (ends "under Colorado law"), garage-door-opener-duty-mn (Minn. Stat. ch. 325F), other-landlord-facilities-nd (N.D.C.C. throughout).
- Edu row `edu-other-landlord-facilities-sc`; battery SC-B6-057.

###### owner-move-in-reservation
- TAGGED owner-occupancy-termination-ar (carries 15 states) — state-neutral; SERVES_LANDLORD; 30-day floor matches § 27-40-770(b); court-only recovery matches § 27-40-760. Battery SC-B6-058 (first attempt failed its own positive before recording; rerun under the same id).
- NOT TAGGED owner-move-in-reservation-ca, -me, owner-recovery-ak, owner-occupancy-termination-hi, owner-move-in-reservation-la ("eviction procedure Louisiana law provides"), owner-occupancy-termination-nd (name their states), owner-move-in-reservation-mn, owner-occupancy-termination-nv (neutral bodies but duplicates of -ar).
- No edu row: the tag carries the battery; `edu-no-for-cause-eviction-sc` covers periodic tenancies.

###### parking-rules-notice
- TAGGED parking-rules-notice-co — state-neutral; SERVES_LANDLORD in SC (supports § 27-40-520(a)(6) and (b)). Battery SC-B6-059 (0 hits).
- NOT TAGGED parking-rules-tx (Tex. Prop. Code required disclosure), parking-rules-notice-mn ("as Minnesota law allows"), parking-rules-notice-nd (N.D.C.C.).

###### confirmed-absences-misc
- No shared clause. Summary edu row `edu-confirmed-absences-misc-sc` pointing to this batch's absence rows (pattern of `edu-confirmed-absences-outside-title-sc`).

##### Findings for other states
- None noticed beyond the tag screens (several shared clauses carry states whose notes rest on that state's own statute; not reviewed).

##### Proposed SOP changes
- Battery positives: bat.run asserts positives before recording, so a failed positive leaves no record; the brief's "-b suffix" rule could say that a battery that failed only its own positive before being written may be rerun under the same id (done here for SC-B6-050, -054, -058; one record each).
- When a topic's absence turns on sale-disclosure statutes, check whether the statute's scope list includes a "lease with an option to purchase" (SC § 27-50-20(3) was missed by SC-B4-011).

##### Proposed topic questions
- Does the state's residential property condition disclosure act cover a lease with an option to purchase, so that the landlord must deliver the disclosure statement before the lease-option is signed? (South Carolina: S.C. Code Ann. §§ 27-50-20(3), 27-50-50(A).)
- Must a real estate licensee leasing their own property state their licence status on the first page of the lease in a set format? (South Carolina: S.C. Code Ann. § 40-57-135(F)(1)(c), bold, underlined capital letters.)
- Do municipal or district sewer charges become a lien on the landlord's property for a tenant's unpaid account despite a statute making the tenant solely responsible for utilities? (South Carolina: S.C. Code Ann. §§ 5-31-2040, 27-33-50(A).)

#### §4.2 Batch b7 decisions (topics pest-control-notice to window-guards)


##### pest-control-notice
- NOT TAGGED pest-control-notice-ca — basis is California's Civ. Code §§ 1940.8, 1940.8.5; SC has no such notice statute (SC-B7-001).
- NOT TAGGED pest-control-cooperation-nd — title names North Dakota ("no North Dakota notice statute"); its notice sentence sets no minimum, while SC requires 24 hours' notice except for conspicuous-clause periodic services (S.C. Code Ann. § 27-40-530(b)(2), (c)); SC entry for pest treatment is already answered by `periodic-services-entry-sc`.
- FETCH: Regs. chapter 27 (Clemson University, Department of Pesticide Regulation; structural pest control and applicator notice rules) — topic pest-control-notice — S.C. Code Ann. § 46-13-30(C) authorizes notice rules by regulation; whether any reaches tenants of a treated building is in that chapter. Row written as Confirmed absent (Code) / Not located (Regs. ch. 27).

##### pet-eviction-fact-sheet
- NOT TAGGED pet-eviction-fact-sheet-md — basis is Maryland Real Prop. § 14-804 and the text links Maryland's fact sheet.
- Cautious course: tell the tenant animals must leave with them; call animal control for an animal left behind (S.C. Code Ann. § 47-1-70(A) applies to the owner).

##### plain-language / plain-language-consumer-statement
- One battery (SC-B7-003) for both; two rows. Consumer Protection Code "consumer lease" is leases of goods (S.C. Code Ann. § 37-2-106(1)).
- NOT TAGGED consumer-restrictions-statement-pa — basis is 73 P.S. § 2205(d); text says "Pennsylvania law".

##### political-access
- No shared clause. Drafting judgment: an access rule for common areas is tested under S.C. Code Ann. § 27-40-520(a). Noted for tenant-display-rights: S.C. Code Ann. § 7-25-210 (removing a lawfully placed political campaign sign).

##### pool-safety
- NOT TAGGED pool-safety-notice-az — Arizona Department of Health Services notice.
- NOT TAGGED pool-safety-ms — title names Mississippi; notes rest on Miss. Code Ann. § 45-43-5 scope.
- NOT TAGGED pool-and-spa-use-wy — body cites Wyo. Stat. §§ 35-28-109, 35-28-110, 1-21-1203(a)(ii).
- NOT TAGGED spa-pool-notice-mn — Minnesota statutory notice text.
- Present row from S.C. Code Ann. §§ 44-55-2320, 44-55-2340 and R. 61-51 (paraphrased).
- TOOL NOTE for lead: `sc.reg('61-51')` returns None — R. 61-51 (Public Swimming Pools) is in sc-regs-ch61-18to58 text but the regs() header splitter doesn't key it; quotes from it can't be checked, so the row paraphrases it.

##### portable-cooling-device
- NOT TAGGED portable-cooling-device-wa / -or / -restriction-co — each rests on its state's cooling statute (RCW 59.18.740, ORS 90.355, Colorado's four grounds).
- NOT TAGGED portable-cooling-device-wy — body cites Wyo. Stat. § 40-26-107; would be taggable in substance. Possible future: a state-neutral copy citing the federal Fair Housing Act only.

##### portable-solar
- NOT TAGGED portable-solar-va-small (Virginia unit-count condition), plug-in-solar-vt (Vermont law, 1,200-watt limit), portable-solar-device-rules-co (Colorado law feature), portable-solar-consent-wy (Wyo. Stat. citations in (a), (f)-(h)), portable-solar-devices-nj (New Jersey law).

##### private-well-testing
- NOT TAGGED private-well-test-results-nj (NJ Private Well Testing Act), well-water-testing-notice-or (ORS 90.321(8)), private-well-disclosure-md (Md. Envir. § 9-4A-04), private-well-notice-ct (Conn. Gen. Stat. § 19a-37(d)), well-water-disclosure-wy (Wyo. Stat. citations in body).
- FETCH: Regs. 61-44 (Individual Residential Well and Irrigation Well Permitting; within the held 61-18 to 61-58 range by number but absent from the corpus file) — topic private-well-testing — the Department's fee regulation (in the held file) mentions bacteriological analysis for new individual residential wells; 61-44 would say whether a new-well sample result goes to the owner. Row states the absence of a tenant testing/disclosure duty from the Code and R. 61-71 and names 61-44 as not held in the notes.
- Cautious course: test before a new tenancy and give the result.

##### prohibited-acts-renter
- TAGGED prohibited-acts-renter-wy — state-neutral; every limb tracks S.C. Code Ann. §§ 27-40-510(6)-(7), 27-40-530(a); sets no notice, so § 27-40-530(c) still governs; nothing engaged under § 27-40-330(a). Overlaps but doesn't contradict `no-disturbance`, `tenant-maintenance`, `landlords-access` (no SC row keyed to this topic).
- NOT TAGGED prohibited-acts-renter-pr — near-duplicate of the -wy clause; one tag suffices.
- NOT TAGGED prohibited-acts-renter-mn — names Minnesota law (statutory unlawful-activities covenant).
- NOT TAGGED prohibited-acts-renter-nd — crimes "under the laws of North Dakota"; ND rescission purpose statement.
- NOT TAGGED prohibited-acts-renter-ca — victim and emergency-call carve-out rests on California law; SC has no such statute (`edu-no-police-call-protection-sc`).

##### promises-to-repair
- NOT TAGGED promised-repairs-wi — body neutral, but basis is REQUIRED_DISCLOSURE: Wis. Admin. Code ATCP § 134.07; rule 26 bars tagging a clause whose basis rests on another state's law. A SC-neutral version would be SERVES_LANDLORD (records promises so the integration clause doesn't swallow them); proposed for the lead only if wanted.
- NOT TAGGED promised-repairs-wy — cites Wyo. Stat. § 1-21-1203.
- Drafting judgment: an oral repair promise is part of the "rental agreement" (S.C. Code Ann. § 27-40-210(12)); the integration clause interaction is case law (not searched); cautious course stated.

##### prop65-rental-warning
- NOT TAGGED formaldehyde-health-notice-mn — Minnesota statutory notice.

##### property-tax-rent-disclosure / protected-class-inquiry-ban
- No shared clauses. protected-class-inquiry-ban: rule_type CONSTRAINED (statement ban with express permitted questions, S.C. Code Ann. §§ 31-21-40(3), 31-21-70(L), (N)).

##### purpose-limitation
- NOT TAGGED purpose-limitation-wy — cites Wyo. Stat. §§ 1-21-1204, 6-6-201, 6-6-204, 1-21-1002, 1-21-1003.

##### recycling-notice
- NOT TAGGED recycling-notice-or (Oregon statewide collection list, ORS 90.318), recycling-source-separation-ca (California organic-waste law). Local recycling rules left to local ordinance.

##### religious-cultural-display
- NOT TAGGED religious-display-nv — NRS 118A.200(3)(o). Cautious course: neutral decoration rule (S.C. Code Ann. § 31-21-40(2)).

##### tenant-display-rights (done out of order, with religious-cultural-display)
- NOT TAGGED us-flag-display-la — closest fit, but SC's right applies "Regardless of any ... rule ... concerning flags" (S.C. Code Ann. § 27-1-60(A)) and gives no landlord placement power; the clause's placement rules could be used to keep the flag off the premises. The SC row states the right and the cautious course instead.
- NOT TAGGED flag-display-nv (NRS), us-flag-display-ar (Arkansas, 12+ units), tenant-display-rules-co (item-count cap could bar the one U.S. flag S.C. Code Ann. § 27-1-60 protects; CO organizing carve-out), display-and-signage-rules-wy (Wyo. Stat. § 8-3-110), tenant-display-rights-nd (ND title and covenant rule).
- Drafting judgment: don't remove a tenant's campaign sign yourself (S.C. Code Ann. § 7-25-210(A)).

##### rent-concession
- TAGGED rent-concession-wi — state-neutral, SERVES_LANDLORD; no SC concession statute (SC-B7-017); no clawback, so no penalty issue; any clawback should be framed under S.C. Code Ann. § 27-40-330(c).
- NOT TAGGED rent-concessions-il (Illinois "expressly stated" requirement as basis; duplicate), rent-concession-az (clawback of the whole concession on any default — a penalty risk under SC liquidated-damages law, case law not searched), rent-concession-ma (duplicate), rent-concession-wy (Wyo. Stat. §§ 1-21-1301 to 1-21-1304), rent-concession-nd (title names North Dakota).

##### rent-escalation (20 clauses screened)
- TAGGED rent-escalation-la — state-neutral scheduled/index option; SERVES_LANDLORD; no SC limit (SC-B7-018); retaliation bar (S.C. Code Ann. § 27-40-910(a), (e)) reaches only increases above fair-market value after protected conduct.
- NOT TAGGED rent-increase-midterm-ky / -wv / -nh (unilateral mid-term increase on 30 days' notice with tenant exit): neutral text, but a unilateral rent change in a fixed term is a contract-formation question (case law not searched); cautious course is the agreed schedule in rent-escalation-la. Also one tag answers the topic.
- NOT TAGGED rent-escalation-ga (pass-through of utilities/taxes/insurance belongs to tax-escalation; GA/TX basis), midterm-rent-increase-in (Indiana market-rate basis), rent-cost-adjustment-mi (Michigan cost-pass-through statute), rent-increase-terms-ma (940 CMR 3.17), rent-increase-midterm-ct (fair rent commission), rent-increase-midterm-ri (60-day RI notice), midterm-rent-increase-me (Maine 45/75-day rule, habitability bar), midterm-rent-increase-vt (Vermont actual notice), rent-increase-midterm-hi (45-day floor, emergency rules), rent-increase-midterm-gu / -mp, rent-escalation-mp (territory law, title), rent-increase-midterm-mn (Minnesota notice-parity), rent-escalation-nd (title names North Dakota), rent-escalation-oh (near-duplicate of the -la clause; Midwest index example), rent-escalation-nv (Nevada all-fee single figure rule).

##### rent-installments
- TAGGED rent-installments-or — neutral; S.C. Code Ann. § 27-40-310(c) lets the parties fix time of payment; no partial-payment rule (SC-B7-019).
- NOT TAGGED prorated-rent-mn (Minn. Stat. § 504B.146; SC default is day-to-day apportionment, S.C. Code Ann. § 27-40-310(c), a different subject), rent-installments-mn (8% Minnesota late-fee cap, cash receipt rule), rent-installments-nd (ND title, mobile-home drafting note), rent-installments-oh (duplicate; one tag suffices), rent-installments-nv (fixed-term-only drafting from Nevada).

##### rent-reporting
- NOT TAGGED rent-reporting-offer-md — Md. Real Prop. § 8-208.4(c).

##### rent-tax
- NOT TAGGED excise-tax-number-disclosure-hi, principal-residence-tax-pr, hotel-room-tax-vi, hotel-occupancy-tax-as — each rests on its territory's tax law.
- S.C. Code Ann. § 12-36-920 read whole (SC item 10 closed for this topic): it reaches only accommodations "furnished to transients"; the same-person "ninety continuous days" exclusion is printed in (A) and repeated in R. 117-307.3(B). No residential-rent exemption section is needed because ordinary rent isn't within the tax base (S.C. Code Ann. § 12-36-60).

##### renters-insurance-rules
- NOT TAGGED renters-insurance-nc — three-business-day proof deadline and $50 administrative fee come from North Carolina's statute (rule 19: copy structure, not thresholds); SC sets none.
- NOT TAGGED renters-insurance-advisory-tn (Tenn. Code Ann. § 66-28-201(a) prescribed advisory), renters-insurance-notice-va (Va. Code § 55.1-1206(D), Virginia flood website), renters-insurance-requirement-wy ("insurer authorised to do business in Wyoming").
- SC already answers the requirement itself with `tenants-property-insurance-ks-oh-ca` (rule 26(3)); the new row covers the rules question only.

##### tenant-insurance-claims (done with renters-insurance-rules)
- NOT TAGGED insurance-claims-and-losses-nd — title and body name North Dakota law. Its proceeds and deductible logic is consistent with S.C. Code Ann. § 38-75-60, but it says nothing of the subrogation bar, the SC-specific point.
- Present row from S.C. Code Ann. § 38-75-60 (quoted exactly, as assigned). Open reading: whether § 38-75-60 limits the landlord's own claim for a loss already paid by its insurer — not stated; cautious course (recover only uncompensated loss, e.g. the deductible).

##### repair-notice
- NOT TAGGED habitability-notice-co (C.R.S. § 38-12-505), repair-notice-method-ar (Arkansas habitability list, title), repair-request-procedure-ne (neutral text but basis rests on Neb. Rev. Stat. § 76-1419 "written or actual notice"; rule 26). A SC-neutral repair-request clause would be SERVES_LANDLORD; not proposed (the existing `notices` row and `landlord-disclosure-sc` cover the address).

##### repair-cost-termination / repair-escrow-exemption-notice
- No shared clause for the first; NOT TAGGED repair-escrow-exemption-notice-oh (R.C. 5321.07(C)).

##### rights-responsibilities-guide / tenant-rights-statement / sanitary-code-variance
- NOT TAGGED rights-guide-receipt-de (25 Del. C. § 5124(c)); tenant-rights-statement-va (Virginia DHCD form), summary-of-rights-il (765 ILCS 752/20), habitability-rights-statement-co (C.R.S. § 38-12-505(3)(c)), tenants-bill-of-rights-md (Md. Real Prop. § 8-208(c)(4)), ag-summary-receipt-de (25 Del. C. § 5118); sanitary-code-variance-ma (105 CMR 410.700), safety-exception-notice-nj (N.J.S.A. 55:13A-11(d)).
- SC item 4 applied: rows state the state rule (none) and leave local handouts/variances to local ordinance, pointing to `edu-local-preemption-sc`.
- Battery SC-B7-026 shared by the guide and statement rows.

##### seasonal-tenancy
- NOT TAGGED seasonal-tenancy-ri (Rhode Island seasonal eviction without cure), seasonal-nonrenewable-lease-de (Delaware hundreds, 120 days), seasonal-tenancy-wy (Wyoming recreational-rental exclusion; SC has no principal-residence exclusion).
- Vacation Rental Act (S.C. Code Ann. §§ 27-50-210 to 27-50-270) read whole; § 27-40-120 read (SC item 10 closed for this topic). Open point stated in notes: the "weekly or monthly basis pursuant to Chapter 40" carve-out in §§ 27-50-220(B)(3), 27-50-230(3) is circular; cautious course stated.

##### security-devices / smart-access
- NOT TAGGED security-devices-ca — neutral one-sentence reporting duty, but its notes rest on Civ. Code § 1941.3(b) (notice-shifting of a statutory lock duty SC doesn't have); rule 26.
- NOT TAGGED security-devices-tx (Texas Property Code text), tenant-rekey-right-il (Cook County), security-devices-wy (body neutral and consistent with S.C. Code Ann. § 27-40-530(e), but notes rest on Wyo. Stat. §§ 1-21-1208(a), 1-21-1203(a)(iv); also its "Landlord may change or rekey the locks ... at any other time" needs SC entry notice). SC `keys` row (already SC) covers keys and rekey cost.
- NOT TAGGED smart-access-system-wy, smart-access-system-mn — landlord-burdening promises drafted from those states' rows; SC has no smart-access statute (SC-B7-029).
- Finding check (SC item 6, keys): not re-audited here; the security-devices row reads `keys` as consistent with S.C. Code Ann. §§ 27-40-410(a), 27-40-510(8).

##### senior-housing-work-card / service-animal-denial-penalty / service-animal-misrepresentation
- No shared clauses for these three.
- S.C. Code Ann. § 43-33-70 quoted exactly ((d), (b)); the misdemeanor in § 43-33-40 reaches only the § 43-33-20 places (which include "hotels, lodging places"), not housing. Cautious course: treat a vacation rental as a covered lodging place.
- SC item 10 ("assistance dog" undefined) closed: no definition anywhere in the Code (8 uses, 3 sections, all in Chapter 33 of Title 43).
- Misrepresentation: S.C. Code Ann. § 47-3-980 quoted; housing reach left open as in `edu-service-animal-law-sc` (consistent; no finding).

##### sex-offender-disclosure / sex-offender-occupancy / stigmatized-property / tenant-screening
- NOT TAGGED sex-offender-registry-notice-ca (Penal Code § 290.46 text), -wi (Wisconsin DOC), -la (La. R.S. 15:540). An SC notice would name the county sheriff (S.C. Code Ann. § 23-3-525); not drafted as a clause because the statute's vehicle is a brokerage's listing/representation/sales agreement, not the lease (rule 55: no statute requires it in the lease). Cautious course in the edu row.
- NOT TAGGED sex-offender-occupancy-oh (Ohio registry and distance statute), sex-offender-statement-al (Birmingham), sex-offender-cohabitation-ok (Oklahoma Act), sex-offender-occupancy-wy (Wyo. Stat. § 6-2-320). SC's residency limit (S.C. Code Ann. § 23-3-535) binds the offender, with local zones preempted ((E)); edu row only.
- stigmatized-property: S.C. Code Ann. § 40-57-740 ("transaction"; owner or licensee) and § 27-50-90 (covered transfers: sale, installment, lease-option). Open: whether § 40-57-740 reaches a plain lease without a licensee; cautious course stated.
- tenant-screening: NOT TAGGED lihtc-felony-screening-ok (Okla. Stat. tit. 68). SC item 4 applied.
- Done out of order: tenant-screening (needed by the sex-offender-occupancy row).

##### sfr-occupancy-disclosure / shoreline-access-disclosure / special-district-representation / steam-radiator-covers / shutdown-rent-protection
- NOT TAGGED sfr-occupancy-disclosure-nv (NRS 118A.200(4)), shoreline-access-disclosure-ri (R.I. Gen. Laws § 34-18-20(e)), shoreline-right-of-way-gu (title names Guam; Guam right-of-way law), special-district-representation-pr (Ley 351-2000, 214-2004), steam-radiator-cover-notice-nj (N.J.S.A. 52:27D-198.20). No shared clause for shutdown-rent-protection.
- Cautious course (shoreline): S.C. Code Ann. § 48-39-330 reaches a "contract of sale or transfer"; whether a long lease is a transfer is undefined; include the statement in long oceanfront leases.

##### FINDING on existing row (lead's b4 row `edu-required-disclosures-sc`, not yet in the master)
- The row lists five lease disclosures and says there is "no state form that must be the first page", but omits a real first-page lease rule for licensees: 'A licensee clearly shall reveal his license status in a personal transaction involving the purchase, sale, exchange, rental, lease, or auction of real estate:' (S.C. Code Ann. § 40-57-135(F)(1)), '(c) in bold, underlined, capital letters on the first page of a contract for the purchase, sale, exchange, rental, or lease of real property.' (S.C. Code Ann. § 40-57-135(F)(1)(c)). Proposed fix: add item "(6) if you are a licensed real estate agent or broker renting property you own (a personal transaction), state your license status in bold, underlined capital letters on the first page of the lease," and change "no state form that must be the first page" to "no state form that must be the first page (apart from a licensee's own status statement)". Proposed companion clause (for the lead to decide; topic required-disclosures): id `licensee-status-disclosure-sc`, group Disclosures, rule_type CONDITIONAL, lease_clause_basis "REQUIRED_DISCLOSURE: S.C. Code Ann. § 40-57-135(F)(1)(c)", bodyText "[Use only if Landlord, or an owner of the property, is a South Carolina real estate licensee renting in a personal transaction. Print on the first page in bold, underlined capital letters.] LANDLORD IS A LICENSED REAL ESTATE {{licensee_type}} IN SOUTH CAROLINA.", notes quoting § 40-57-135(F)(1) and (F)(1)(c) and noting trust-fund rule (F)(2) (personal rental trust funds go in the licensee's own account, not read whole here).

##### sprinkler-disclosure / statute-of-frauds-lease-term / tenancy-at-will / statutory-early-termination / stove-refrigerator / student-housing
- NOT TAGGED sprinkler-disclosure-ny (RPL § 231-a), high-rise-sprinkler-notice-md (Md. Pub. Safety § 9-403(d)), sprinkler-notice-ct (Conn. Gen. Stat. § 47a-3f). Topic question answered: SC has a sprinkler retrofit incentive, a property-tax and income-tax credit (S.C. Code Ann. § 12-6-3622), transferable to the tenant.
- statute-of-frauds: no shared clause. S.C. Code Ann. §§ 27-23-50, 27-23-60, 32-3-10, 27-40-320(c), 27-33-30 read. Interaction of the Act's oral-agreement definition with § 27-23-60 left as case law.
- tenancy-at-will (done with statute-of-frauds): NOT TAGGED holdover-tenancy-by-sufferance-wy (Wyo. Stat. §§ 34-2-128, 34-2-129). Cautious course: Act notices for dwelling tenants; 20-day notice (S.C. Code Ann. § 27-35-130) only for no-agreement occupants.
- NOT TAGGED early-termination-rights-statement-tx (Tex. Prop. Code § 92.016(f)).
- NOT TAGGED stove-refrigerator-ca (Civ. Code § 1941.1(a)(11)(B)), stove-refrigerator-mn (Minnesota habitability carve-outs); SC answered by `appliances-excluded-sc` mechanics.
- NOT TAGGED student-housing-certification-pr (Ley 48-1990), student-housing-oh (R.C. 5321.031).

##### subsidy-habitability-proration / tax-escalation / telecom-access
- subsidy: battery SC-B7-043 flawed (case-insensitive "Section 8" matched SECTION 8 headings); rerun as SC-B7-043b; row cites both.
- TAGGED tax-insurance-escalation-la — multi-state, neutral, SERVES_LANDLORD; no SC limit (SC-B7-044). Open: whether the share is rent under S.C. Code Ann. § 27-40-210(11); cautious course stated in tag.
- NOT TAGGED tax-escalation-ma (ch. 186 § 15C), -ri (RI 60/120-day notice), -nh (NH deposit-statute basis), -de (title names Delaware), tax-insurance-escalation-mp (typhoon; title), -nd (title), tax-escalation-oh (near-duplicate).
- TAGGED telecom-access-mn — neutral, saving sentence preserves state and federal rights; its MN notes rest on absence (no MN statute), not on a MN statute, so rule 26's "rests on the other state's statute" bar doesn't apply.
- NOT TAGGED telecom-access-wy — notes rest on Wyo. Stat. § 1-21-1203(a)(iv) maintenance-by-contract drafting; would also work, one tag suffices.

##### tenant-confidential-information / tenant-employee-housing / tenant-portal / tenant-right-to-organize / term-change-notice
- No shared clauses for confidential-information or right-to-organize.
- tenant-employee-housing (11 clauses): NOT TAGGED any. tenant-employee-de (25 Del. C. § 5123(b)); employee-housing-ar ("as Arkansas law requires"); employee-housing-occupancy-hi (body neutral but its condition is "employment by Landlord as [job title]" without SC's "in and about the premises" limb (S.C. Code Ann. § 27-40-120(5)), so it would overstate the exclusion; notes rest on HRS § 521-7(6)); employee-housing-la, employer-housing-pr, tenant-employee-housing-wy, employee-housing-occupancy-ks ("Kansas Residential Landlord and Tenant Act" in body), tenant-employee-housing-mn, employee-occupancy-conditional-ne, employee-housing-nj (NJ good-cause notice), employee-housing-fl — each rests on its state's exclusion or eviction statute. A SC clause could be drafted SERVES_LANDLORD with the "in and about the premises" wording; not drafted (edu row gives the cautious course; rule 54 satisfied by the edu row).
- TAGGED tenant-portal-mn — neutral; voluntary portal notices and backup payment method are consistent with S.C. Code Ann. § 26-6-50(C) (non-waivable refusal right) and § 26-6-30(B)(2)(c)(ii) (eviction/default notices outside UETA).
- NOT TAGGED electronic-communications-and-portal-wy (Wyo. Stat. § 40-21-105), portal-rent-payment-ne (portal as exclusive place of payment, processing charge on tenant; risky under S.C. Code Ann. § 26-6-50(C)), tenant-portal-nd (ND fee-free paper rule), tenant-portal-oh (Ohio electronic notice designations; SC default/eviction notices excluded from UETA), tenant-portal-nv (Nevada bank-information rule), tenant-portal-fl (option B requires portal payment).
- NOT TAGGED term-change-notice-gu (Guam 7-day rule, title), term-change-notice-wy (Wyo. Stat. §§ 1-21-1202(d), 34-2-128, 34-2-129), term-change-notice-ca (California 7-day agreed-notice rule). SC item 4 applied.

##### translation-duty / truth-in-renting / unbundled-parking / usufructuary-lessor / veterans-incentive
- No shared clause for translation-duty.
- NOT TAGGED truth-in-renting-statement-nj (DCA statement), truth-in-renting-notice-mi (Mich. Comp. Laws § 554.634(2)).
- NOT TAGGED unbundled-parking-ca (Civ. Code § 1947.1), -co (title names Colorado), -wy (Wyo. Stat. §§ 31-5-111, 1-21-1203, 40-26-107 in body), -mn (MN total-payment rule), -nd (body names North Dakota), -oh (body names Ohio). SC parking already answered by `parking-ks-oh-ca`, `assigned-parking-space`, `parking-vehicle-rules`.
- NOT TAGGED usufructuary-lessor-la (La. Civ. Code), -pr (Puerto Rico Civil Code), life-tenant-lessor-status-wy (Wyo. Stat. § 34-1-111). Present row from S.C. Code Ann. §§ 27-41-10 to 27-41-30; the end-at-death rule itself is common law (assumed by the statutes), case law not searched.
- NOT TAGGED veteran-servicemember-concession-ne (title names Nebraska).

##### Utility topics (9): Regs. chapter 103 read (electric 103-300s: 103-327, 103-342, 103-343, 103-352; gas 103-452; sewer 103-535, 103-535.1; water 103-735, 103-735.1); Code §§ 27-33-50, 58-27-2510 to 58-27-2540, 58-37-50(H). No FETCH needed (chapter 103 held whole).
- utility-allowance-cap: TAGGED utility-allowance-cap-co (multi-state, neutral, actual-cost reimbursement, not rent). NOT TAGGED -pr, -vi (titles/territory), utility-cost-allocation-wy (Wyo. Stat.), -ks, -mn, -oh (duplicates or state-specific notes), utility-allowance-overage-ne (title names Nebraska).
- utility-apportionment: edu row. NOT TAGGED utility-apportionment-mn, utility-formula-il (765 ILCS 740/5), shared-utility-disclosure-or (ORS 90.315), utility-billing-wv, ratio-utility-billing-md, common-area-utility-agreement-me, utility-nonconsumption-charges-de, utility-apportionment-wy, -nd, utility-allocation-fl — each built on its state's allocation statute or notes; SC has none, and R. 103-327 individual metering makes an allocation clause a narrow case. Drafting judgment: don't mark up; whether a reselling landlord is a regulated "electrical utility" is unaddressed.
- utility-disclosure-attachment: Present via S.C. Code Ann. § 58-37-50(H)(3) (existing `meter-conservation-charge-notice-sc`). NOT TAGGED energy-tariff-disclosure-nh, water-power-availability-gu, electric-allocation-disclosure-tx.
- utility-disconnection-notice-authorization: TAGGED utility-shutoff-notice-authorization-co — SC regs require utilities to copy termination notices to a customer-named third party (R. 103-352(f), 103-452(f), 103-535.1(C), 103-735.1(D)); § 58-27-2530. NOT TAGGED the other 12 (each cites or is titled for its state's program; -nj names N.J.S.A. 48:2-29.42 acceptance mechanics).
- utility-interruption-submeter: edu row. NOT TAGGED electric-submeter-interruption-tx, utility-meter-request-waiver-vi, utility-interruption-submeter-mn (names Minnesota statutes).
- utility-landlord-account: edu row. NOT TAGGED landlord-billed-utilities-md, utility-landlord-account-wy.
- utility-shutoff-statute: Present edu row from R. 103-352, 103-452, 103-535.1, 103-735.1 and § 58-27-2520, 2540. Municipal and cooperative special-needs articles (Title 5, Title 33) not read; noted in row.
- utility-submetering-disclosure: edu row; 18 clauses NOT TAGGED (each a REQUIRED_DISCLOSURE under its own statute or drafted from it; the -nc, -de, -ia SERVES_LANDLORD ones restate their state's billing statutes).
- utility-transfer: TAGGED utility-transfer-nj (neutral; actual-cost reimbursement; landlord won't shut off). NOT TAGGED utility-transfer-tn (Tennessee URLTA counties, 3-day cutoff right SC doesn't give), -pr, -gu, -vi (territory titles), -reimbursement-co, -wy (deposit timetable "under Wyoming's"), -mn, -ne (title), -nd (duplicates).
- OBSERVATION (not a row finding): R. 103-535(O) (sewer) still authorizes a utility to require a landlord's agreement to be responsible for a tenant's charges; S.C. Code Ann. § 27-33-50(B) (2002 Act No. 336, 2003 Act No. 63) bars that except master-metered buildings of four or more units. `edu-utilities-sc` states the statute correctly; the new `edu-utility-landlord-account-sc` notes the conflict. Reported for the lead/Taylor, no fix needed.

##### water-heater-temperature / waterbed / window-guards
- No shared clause for water-heater-temperature. Regulation temperature limits (100-120°F at fixtures) are care-facility rules in chapter 60; not applied to rentals. Cautious course stated.
- TAGGED waterbed-mn (MN;AZ) — neutral, absence-based, no charge created; SC check: any money taken against waterbed damage is a security deposit (S.C. Code Ann. § 27-40-210(18)).
- NOT TAGGED waterbed-ca (Civ. Code § 1940.5), flotation-bedding-fl (Fla. Stat. § 83.535 insurance rule), waterbed-co (notes rest on Colorado fee/deposit caps), waterbed-and-liquid-filled-furniture-wy (local-code drafting; one tag suffices), waterbed-permission-nd (title and body name North Dakota), waterbed-nj (duplicate).
- NOT TAGGED window-guard-notice-nj (N.J.A.C. 5:10-27.1). SC item 4 applied (local codes).

##### Proposed SOP changes
- Helper scratch folders: b6 and b7 were given the same scratchpad directory and b6 overwrote b7's helper scripts (`wc.py`, `h.py`) mid-run; b7 moved to a private subfolder. Rule 27 [VT 7] already says this; the brief should name a per-agent scratch path.
- `sc.reg()` keying: R. 61-51 (Public Swimming Pools) is present in the held text but not keyed by the regs() splitter, so quotes from it can't be checked. A splitter fix (or a note in the brief listing unkeyed regulations) would let rows quote it.

##### Proposed topic questions
- utility-landlord-account: "Does a utility regulation still authorize a landlord-guarantee agreement that a later statute bars, so the regulation should be read as superseded?" (South Carolina: R. 103-535(O) vs S.C. Code Ann. § 27-33-50(B).)
- sprinkler-disclosure: "Does the state offer a property or income tax credit for voluntary sprinkler retrofits that the owner may transfer to the tenant?" (South Carolina: S.C. Code Ann. § 12-6-3622(C).)
- required-disclosures (not b7's topic): "Must a real estate licensee renting their own property state their license status on the lease's first page?" (South Carolina: S.C. Code Ann. § 40-57-135(F)(1)(c).)

##### Findings for other states
- None noticed beyond what the NOT TAGGED notes record.

##### Full-id screen list (every shared clause in remaining.json for b7 topics; reasons in the topic sections above)
- NOT TAGGED pest-control-notice-ca — topic pest-control-notice
- NOT TAGGED pest-control-cooperation-nd — topic pest-control-notice
- NOT TAGGED pet-eviction-fact-sheet-md — topic pet-eviction-fact-sheet
- NOT TAGGED consumer-restrictions-statement-pa — topic plain-language-consumer-statement
- NOT TAGGED pool-safety-notice-az — topic pool-safety
- NOT TAGGED pool-safety-ms — topic pool-safety
- NOT TAGGED pool-and-spa-use-wy — topic pool-safety
- NOT TAGGED spa-pool-notice-mn — topic pool-safety
- NOT TAGGED portable-cooling-device-wa — topic portable-cooling-device
- NOT TAGGED portable-cooling-device-or — topic portable-cooling-device
- NOT TAGGED portable-cooling-restriction-co — topic portable-cooling-device
- NOT TAGGED portable-cooling-device-wy — topic portable-cooling-device
- NOT TAGGED portable-solar-va-small — topic portable-solar
- NOT TAGGED plug-in-solar-vt — topic portable-solar
- NOT TAGGED portable-solar-device-rules-co — topic portable-solar
- NOT TAGGED portable-solar-consent-wy — topic portable-solar
- NOT TAGGED portable-solar-devices-nj — topic portable-solar
- NOT TAGGED private-well-test-results-nj — topic private-well-testing
- NOT TAGGED well-water-testing-notice-or — topic private-well-testing
- NOT TAGGED private-well-disclosure-md — topic private-well-testing
- NOT TAGGED private-well-notice-ct — topic private-well-testing
- NOT TAGGED well-water-disclosure-wy — topic private-well-testing
- TAGGED prohibited-acts-renter-wy — topic prohibited-acts-renter
- NOT TAGGED prohibited-acts-renter-pr — topic prohibited-acts-renter
- NOT TAGGED prohibited-acts-renter-mn — topic prohibited-acts-renter
- NOT TAGGED prohibited-acts-renter-nd — topic prohibited-acts-renter
- NOT TAGGED prohibited-acts-renter-ca — topic prohibited-acts-renter
- NOT TAGGED promised-repairs-wi — topic promises-to-repair
- NOT TAGGED promised-repairs-wy — topic promises-to-repair
- NOT TAGGED formaldehyde-health-notice-mn — topic prop65-rental-warning
- NOT TAGGED purpose-limitation-wy — topic purpose-limitation
- NOT TAGGED recycling-notice-or — topic recycling-notice
- NOT TAGGED recycling-source-separation-ca — topic recycling-notice
- NOT TAGGED religious-display-nv — topic religious-cultural-display
- NOT TAGGED rent-concessions-il — topic rent-concession
- NOT TAGGED rent-concession-az — topic rent-concession
- TAGGED rent-concession-wi — topic rent-concession
- NOT TAGGED rent-concession-ma — topic rent-concession
- NOT TAGGED rent-concession-wy — topic rent-concession
- NOT TAGGED rent-concession-nd — topic rent-concession
- NOT TAGGED rent-escalation-ga — topic rent-escalation
- NOT TAGGED midterm-rent-increase-in — topic rent-escalation
- NOT TAGGED rent-cost-adjustment-mi — topic rent-escalation
- NOT TAGGED rent-increase-midterm-ky — topic rent-escalation
- NOT TAGGED rent-increase-midterm-wv — topic rent-escalation
- NOT TAGGED rent-increase-terms-ma — topic rent-escalation
- NOT TAGGED rent-increase-midterm-ct — topic rent-escalation
- NOT TAGGED rent-increase-midterm-ri — topic rent-escalation
- NOT TAGGED rent-increase-midterm-nh — topic rent-escalation
- NOT TAGGED midterm-rent-increase-me — topic rent-escalation
- NOT TAGGED midterm-rent-increase-vt — topic rent-escalation
- NOT TAGGED rent-increase-midterm-hi — topic rent-escalation
- TAGGED rent-escalation-la — topic rent-escalation
- NOT TAGGED rent-increase-midterm-gu — topic rent-escalation
- NOT TAGGED rent-increase-midterm-mp — topic rent-escalation
- NOT TAGGED rent-escalation-mp — topic rent-escalation
- NOT TAGGED rent-increase-midterm-mn — topic rent-escalation
- NOT TAGGED rent-escalation-nd — topic rent-escalation
- NOT TAGGED rent-escalation-oh — topic rent-escalation
- NOT TAGGED rent-escalation-nv — topic rent-escalation
- TAGGED rent-installments-or — topic rent-installments
- NOT TAGGED prorated-rent-mn — topic rent-installments
- NOT TAGGED rent-installments-mn — topic rent-installments
- NOT TAGGED rent-installments-nd — topic rent-installments
- NOT TAGGED rent-installments-oh — topic rent-installments
- NOT TAGGED rent-installments-nv — topic rent-installments
- NOT TAGGED rent-reporting-offer-md — topic rent-reporting
- NOT TAGGED excise-tax-number-disclosure-hi — topic rent-tax
- NOT TAGGED principal-residence-tax-pr — topic rent-tax
- NOT TAGGED hotel-room-tax-vi — topic rent-tax
- NOT TAGGED hotel-occupancy-tax-as — topic rent-tax
- NOT TAGGED renters-insurance-nc — topic renters-insurance-rules
- NOT TAGGED renters-insurance-advisory-tn — topic renters-insurance-rules
- NOT TAGGED renters-insurance-notice-va — topic renters-insurance-rules
- NOT TAGGED renters-insurance-requirement-wy — topic renters-insurance-rules
- NOT TAGGED repair-escrow-exemption-notice-oh — topic repair-escrow-exemption-notice
- NOT TAGGED habitability-notice-co — topic repair-notice
- NOT TAGGED repair-notice-method-ar — topic repair-notice
- NOT TAGGED repair-request-procedure-ne — topic repair-notice
- NOT TAGGED rights-guide-receipt-de — topic rights-responsibilities-guide
- NOT TAGGED sanitary-code-variance-ma — topic sanitary-code-variance
- NOT TAGGED safety-exception-notice-nj — topic sanitary-code-variance
- NOT TAGGED seasonal-tenancy-ri — topic seasonal-tenancy
- NOT TAGGED seasonal-nonrenewable-lease-de — topic seasonal-tenancy
- NOT TAGGED seasonal-tenancy-wy — topic seasonal-tenancy
- NOT TAGGED security-devices-ca — topic security-devices
- NOT TAGGED security-devices-tx — topic security-devices
- NOT TAGGED tenant-rekey-right-il — topic security-devices
- NOT TAGGED security-devices-wy — topic security-devices
- NOT TAGGED sex-offender-registry-notice-ca — topic sex-offender-disclosure
- NOT TAGGED sex-offender-registry-notice-wi — topic sex-offender-disclosure
- NOT TAGGED sex-offender-registry-notice-la — topic sex-offender-disclosure
- NOT TAGGED sex-offender-occupancy-oh — topic sex-offender-occupancy
- NOT TAGGED sex-offender-statement-al — topic sex-offender-occupancy
- NOT TAGGED sex-offender-cohabitation-ok — topic sex-offender-occupancy
- NOT TAGGED sex-offender-occupancy-wy — topic sex-offender-occupancy
- NOT TAGGED sfr-occupancy-disclosure-nv — topic sfr-occupancy-disclosure
- NOT TAGGED shoreline-access-disclosure-ri — topic shoreline-access-disclosure
- NOT TAGGED shoreline-right-of-way-gu — topic shoreline-access-disclosure
- NOT TAGGED smart-access-system-wy — topic smart-access
- NOT TAGGED smart-access-system-mn — topic smart-access
- NOT TAGGED special-district-representation-pr — topic special-district-representation
- NOT TAGGED sprinkler-disclosure-ny — topic sprinkler-disclosure
- NOT TAGGED high-rise-sprinkler-notice-md — topic sprinkler-disclosure
- NOT TAGGED sprinkler-notice-ct — topic sprinkler-disclosure
- NOT TAGGED early-termination-rights-statement-tx — topic statutory-early-termination
- NOT TAGGED steam-radiator-cover-notice-nj — topic steam-radiator-covers
- NOT TAGGED stove-refrigerator-ca — topic stove-refrigerator
- NOT TAGGED stove-refrigerator-mn — topic stove-refrigerator
- NOT TAGGED student-housing-certification-pr — topic student-housing
- NOT TAGGED student-housing-oh — topic student-housing
- NOT TAGGED tax-escalation-ma — topic tax-escalation
- NOT TAGGED tax-escalation-ri — topic tax-escalation
- NOT TAGGED tax-escalation-nh — topic tax-escalation
- NOT TAGGED tax-escalation-de — topic tax-escalation
- TAGGED tax-insurance-escalation-la — topic tax-escalation
- NOT TAGGED tax-insurance-escalation-mp — topic tax-escalation
- NOT TAGGED tax-insurance-escalation-nd — topic tax-escalation
- NOT TAGGED tax-escalation-oh — topic tax-escalation
- NOT TAGGED telecom-access-wy — topic telecom-access
- TAGGED telecom-access-mn — topic telecom-access
- NOT TAGGED holdover-tenancy-by-sufferance-wy — topic tenancy-at-will
- NOT TAGGED flag-display-nv — topic tenant-display-rights
- NOT TAGGED us-flag-display-la — topic tenant-display-rights
- NOT TAGGED us-flag-display-ar — topic tenant-display-rights
- NOT TAGGED tenant-display-rules-co — topic tenant-display-rights
- NOT TAGGED display-and-signage-rules-wy — topic tenant-display-rights
- NOT TAGGED tenant-display-rights-nd — topic tenant-display-rights
- NOT TAGGED tenant-employee-de — topic tenant-employee-housing
- NOT TAGGED employee-housing-occupancy-hi — topic tenant-employee-housing
- NOT TAGGED employee-housing-la — topic tenant-employee-housing
- NOT TAGGED employee-housing-ar — topic tenant-employee-housing
- NOT TAGGED employer-housing-pr — topic tenant-employee-housing
- NOT TAGGED tenant-employee-housing-wy — topic tenant-employee-housing
- NOT TAGGED employee-housing-occupancy-ks — topic tenant-employee-housing
- NOT TAGGED tenant-employee-housing-mn — topic tenant-employee-housing
- NOT TAGGED employee-occupancy-conditional-ne — topic tenant-employee-housing
- NOT TAGGED employee-housing-nj — topic tenant-employee-housing
- NOT TAGGED employee-housing-fl — topic tenant-employee-housing
- NOT TAGGED insurance-claims-and-losses-nd — topic tenant-insurance-claims
- NOT TAGGED electronic-communications-and-portal-wy — topic tenant-portal
- TAGGED tenant-portal-mn — topic tenant-portal
- NOT TAGGED portal-rent-payment-ne — topic tenant-portal
- NOT TAGGED tenant-portal-nd — topic tenant-portal
- NOT TAGGED tenant-portal-oh — topic tenant-portal
- NOT TAGGED tenant-portal-nv — topic tenant-portal
- NOT TAGGED tenant-portal-fl — topic tenant-portal
- NOT TAGGED tenant-rights-statement-va — topic tenant-rights-statement
- NOT TAGGED summary-of-rights-il — topic tenant-rights-statement
- NOT TAGGED habitability-rights-statement-co — topic tenant-rights-statement
- NOT TAGGED tenants-bill-of-rights-md — topic tenant-rights-statement
- NOT TAGGED ag-summary-receipt-de — topic tenant-rights-statement
- NOT TAGGED lihtc-felony-screening-ok — topic tenant-screening
- NOT TAGGED term-change-notice-gu — topic term-change-notice
- NOT TAGGED term-change-notice-wy — topic term-change-notice
- NOT TAGGED term-change-notice-ca — topic term-change-notice
- NOT TAGGED truth-in-renting-statement-nj — topic truth-in-renting
- NOT TAGGED truth-in-renting-notice-mi — topic truth-in-renting
- NOT TAGGED unbundled-parking-ca — topic unbundled-parking
- NOT TAGGED unbundled-parking-co — topic unbundled-parking
- NOT TAGGED unbundled-parking-wy — topic unbundled-parking
- NOT TAGGED unbundled-parking-mn — topic unbundled-parking
- NOT TAGGED unbundled-parking-nd — topic unbundled-parking
- NOT TAGGED unbundled-parking-oh — topic unbundled-parking
- NOT TAGGED usufructuary-lessor-la — topic usufructuary-lessor
- NOT TAGGED usufructuary-lessor-pr — topic usufructuary-lessor
- NOT TAGGED life-tenant-lessor-status-wy — topic usufructuary-lessor
- TAGGED utility-allowance-cap-co — topic utility-allowance-cap
- NOT TAGGED utility-allowance-cap-pr — topic utility-allowance-cap
- NOT TAGGED utility-allowance-cap-vi — topic utility-allowance-cap
- NOT TAGGED utility-cost-allocation-wy — topic utility-allowance-cap
- NOT TAGGED utility-allowance-cap-ks — topic utility-allowance-cap
- NOT TAGGED utility-allowance-cap-mn — topic utility-allowance-cap
- NOT TAGGED utility-allowance-overage-ne — topic utility-allowance-cap
- NOT TAGGED utility-allowance-cap-oh — topic utility-allowance-cap
- NOT TAGGED utility-apportionment-mn — topic utility-apportionment
- NOT TAGGED utility-formula-il — topic utility-apportionment
- NOT TAGGED shared-utility-disclosure-or — topic utility-apportionment
- NOT TAGGED utility-billing-wv — topic utility-apportionment
- NOT TAGGED ratio-utility-billing-md — topic utility-apportionment
- NOT TAGGED common-area-utility-agreement-me — topic utility-apportionment
- NOT TAGGED utility-nonconsumption-charges-de — topic utility-apportionment
- NOT TAGGED utility-apportionment-wy — topic utility-apportionment
- NOT TAGGED utility-apportionment-nd — topic utility-apportionment
- NOT TAGGED utility-allocation-fl — topic utility-apportionment
- NOT TAGGED energy-tariff-disclosure-nh — topic utility-disclosure-attachment
- NOT TAGGED water-power-availability-gu — topic utility-disclosure-attachment
- NOT TAGGED electric-allocation-disclosure-tx — topic utility-disclosure-attachment
- NOT TAGGED utility-notice-authorization-wi — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-authorization-md — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-copy-ak — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-copy-gu — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-designee-vi — topic utility-disconnection-notice-authorization
- TAGGED utility-shutoff-notice-authorization-co — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-disconnection-notice-authorization-mn — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-disconnection-notice-authorization-ne — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-disconnection-notice-authorization-nd — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-designee-oh — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-designee-nv — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-disconnection-notice-authorization-nj — topic utility-disconnection-notice-authorization
- NOT TAGGED utility-shutoff-notice-designee-fl — topic utility-disconnection-notice-authorization
- NOT TAGGED electric-submeter-interruption-tx — topic utility-interruption-submeter
- NOT TAGGED utility-meter-request-waiver-vi — topic utility-interruption-submeter
- NOT TAGGED utility-interruption-submeter-mn — topic utility-interruption-submeter
- NOT TAGGED landlord-billed-utilities-md — topic utility-landlord-account
- NOT TAGGED utility-landlord-account-wy — topic utility-landlord-account
- NOT TAGGED utility-submetering-disclosure-co — topic utility-submetering-disclosure
- NOT TAGGED utility-submetering-disclosure-tx — topic utility-submetering-disclosure
- NOT TAGGED utility-billing-disclosure-az — topic utility-submetering-disclosure
- NOT TAGGED water-submeter-disclosure-ca — topic utility-submetering-disclosure
- NOT TAGGED utility-billing-schedule-mn — topic utility-submetering-disclosure
- NOT TAGGED utility-billing-nc — topic utility-submetering-disclosure
- NOT TAGGED utility-billing-va — topic utility-submetering-disclosure
- NOT TAGGED water-sewer-billing-disclosure-in — topic utility-submetering-disclosure
- NOT TAGGED utility-charges-disclosure-ia — topic utility-submetering-disclosure
- NOT TAGGED utility-bill-copies-nm — topic utility-submetering-disclosure
- NOT TAGGED utility-allocation-wi — topic utility-submetering-disclosure
- NOT TAGGED utility-billing-or — topic utility-submetering-disclosure
- NOT TAGGED submetered-water-md — topic utility-submetering-disclosure
- NOT TAGGED water-submetering-ma — topic utility-submetering-disclosure
- NOT TAGGED utility-submetering-de — topic utility-submetering-disclosure
- NOT TAGGED onsite-renewable-power-disclosure-hi — topic utility-submetering-disclosure
- NOT TAGGED water-submetering-ms — topic utility-submetering-disclosure
- NOT TAGGED utility-responsibility-and-allocation-wy — topic utility-submetering-disclosure
- NOT TAGGED utility-transfer-tn — topic utility-transfer
- NOT TAGGED utility-transfer-pr — topic utility-transfer
- NOT TAGGED utility-transfer-gu — topic utility-transfer
- NOT TAGGED utility-transfer-vi — topic utility-transfer
- NOT TAGGED utility-transfer-reimbursement-co — topic utility-transfer
- NOT TAGGED utility-transfer-wy — topic utility-transfer
- NOT TAGGED utility-transfer-mn — topic utility-transfer
- NOT TAGGED utility-transfer-ne — topic utility-transfer
- NOT TAGGED utility-transfer-nd — topic utility-transfer
- TAGGED utility-transfer-nj — topic utility-transfer
- NOT TAGGED veteran-servicemember-concession-ne — topic veterans-incentive
- NOT TAGGED waterbed-ca — topic waterbed
- NOT TAGGED flotation-bedding-fl — topic waterbed
- NOT TAGGED waterbed-co — topic waterbed
- NOT TAGGED waterbed-and-liquid-filled-furniture-wy — topic waterbed
- TAGGED waterbed-mn — topic waterbed
- NOT TAGGED waterbed-permission-nd — topic waterbed
- NOT TAGGED waterbed-nj — topic waterbed
- NOT TAGGED window-guard-notice-nj — topic window-guards
- Count: 243 clauses screened; 11 tagged.

### §5 Independent check

Rule 80, two rounds, one agent at a time. Each checker had not written the rows, worked from the saved official text, and wrote findings only. Checker reports are in the workspace as `check-round1.md` and `check-round2.md`.

**Round 1 (all 266 records: 224 new rows, 42 tags).** 24 issues: 4 ERROR, 4 GAP, 16 MINOR. All were fixed in 25 rows. The ERRORs and GAPs:
- `edu-confirmed-absences-habitability-sc` missed the 15-day smoke-detector repair deadline (S.C. Code Ann. § 5-25-1330(C)).
- `edu-portfolio-thresholds-sc` said "never" a portfolio rule (S.C. Code Ann. § 31-21-70(B)(1)) and missed the master-meter exception (S.C. Code Ann. § 27-33-50(C)).
- `edu-statute-of-frauds-lease-sc` had the oral-lease and recording rules wrong (S.C. Code Ann. §§ 27-35-10, 27-35-20, 30-7-10).
- `edu-confirmed-absences-outside-title-sc` dropped the "knowing" and "intentional" elements (S.C. Code Ann. § 16-11-790).
- `edu-required-disclosures-sc` missed the meter-conservation-charge notice and the smoke-detector instructions (S.C. Code Ann. §§ 58-37-50(H)(3), 5-25-1330(A)).
- `edu-entity-landlord-court-representation-sc` missed the broker or property-manager writ role (S.C. Code Ann. § 27-40-710(C)).
- `licensee-status-disclosure-sc` missed first-contact and advertising disclosure and the trust account rule (S.C. Code Ann. § 40-57-135(F)).

The MINORs (titles naming another state on two tags, REQUIRED and CONSTRAINED rule_types reflecting the source state, the illegal-activity cure question, penalty and fee wording, the appeal-bond interplay with S.C. Code Ann. § 27-40-920, and the sprinkler-bar date) were fixed by text in the new rows or by sentences in the SC note segment of the tags. A tag can't change a shared row's title or rule_type under the scope fence. The checker reviewed 33 rows only lightly; they are listed at the end of `check-round1.md`.

**Round 2 (the 25 edited rows only).** No ERROR; 1 GAP; 10 MINOR. Every round-1 issue on those rows was confirmed fixed. Round 2's items were all fixed after the round:
- the GAP: the owner-occupied four-family exemption and the beneficial-interest limb (S.C. Code Ann. § 31-21-70(A), (B)(3));
- a bare section number in a body;
- the brokerage trust-account exception;
- "associate" terminology;
- rent paid to the landlord, not into court (S.C. Code Ann. § 27-40-790(a));
- hedged certainty on S.C. Code Ann. § 27-23-60 vs § 27-35-10;
- notes-only fixes for S.C. Code Ann. §§ 27-40-910(b) and 6-9-55(A);
- the parking-rules notice condition (S.C. Code Ann. § 27-40-520(a));
- the two remaining rows that stated the no-cure reading as settled, which now point to `edu-cure-and-eviction-grounds-sc`.

The checker accepted the illegal-activity reading of S.C. Code Ann. § 27-40-710(A)-(B) as defensible and adequately hedged.

**Rows edited after the last round (not re-checked; rule 80 allows two rounds):** `edu-portfolio-thresholds-sc`, `edu-cure-and-eviction-grounds-sc`, `licensee-status-disclosure-sc`, `edu-required-disclosures-sc`, `edu-confirmed-absences-habitability-sc`, `edu-statute-of-frauds-lease-sc`, `edu-attorney-fees-sc` (notes), `edu-no-sprinkler-disclosure-sc` (notes), `parking-rules-notice-co` (SC segment), `edu-no-expedited-criminal-eviction-sc`, `edu-criminal-activity-sc`. Each edit applies the checker's proposed wording, and all quotes in them passed the machine check.


### §6 Findings on existing rows

1. **`early-termination-ks` (SC tagged): the "30% of the remaining Rent" limb fails the cautious reading (SC item 8(b)).** The clause charges "an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater". South Carolina protects such terms only as "bona fide liquidated damage provisions which shall establish the amount of damages for loss of rent resulting from a premature termination of a lease." (S.C. Code Ann. § 27-40-330(c)). Separately, "If the tenant abandons the dwelling unit, the landlord shall make reasonable efforts to rent it at a fair rental." (S.C. Code Ann. § 27-40-730(c)), and "The aggrieved party has a duty to mitigate damages." (S.C. Code Ann. § 27-40-50(a)). A fee that grows with the remaining term (on a 24-month lease with 20 months left, six months' rent) is hard to call a bona fide estimate of lost rent when the landlord must re-rent at a fair rental; whether it is a penalty is case law (not searched). This is the same result as in NV, TX, NJ, AZ and GA, each of which now has its own override. **Proposed:** a South Carolina override `early-termination-sc` (group Default & Termination, rule_type REQUIRED, lease_clause_basis SERVES_LANDLORD, topic_key early-termination, supersedes `early-termination-ks`), with the text of `early-termination-ga`/`-az` (flat one-month fee; no Rent after the termination date if the tenant gives notice, pays and leaves). The sentence about leaving without the option would read "If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by South Carolina law, including Landlord's duty to make reasonable efforts to re-rent the property at a fair rental." The savings sentence would read "…including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act; as a protected tenant under South Carolina's domestic violence law; due to the property becoming uninhabitable through no fault of Tenant, including fire or casualty under South Carolina law; or any other termination right or limitation provided by applicable law." SC would come off `early-termination-ks`. Not done here (scope fence: no edits to existing rows); **needs your approval**, as GA's override did.
2. **`nonpayment-notice-sc` and the CARES Act (no edit possible; pointer proposed).** The required statutory paragraph says "You will get no other notice as long as you live in this rental unit." (text fixed by S.C. Code Ann. § 27-40-710(B)). For a property with a federally backed mortgage or in a covered federal program, FEDERAL: 15 U.S.C. § 9058(c) still requires 30 days' notice to vacate (per `edu-cares-act-notice`). **Proposed:** add one sentence to `edu-eviction-process-sc`: "If the property has a federally backed mortgage or is in a covered federal housing program, give the 30-day notice to vacate described in `edu-cares-act-notice` before filing, even though the lease's statutory nonpayment paragraph says no other notice will be given." Not done (scope fence).
3. **`edu-lead-hazards-sc` (existing SC row): misses the rental bar and the no-eviction rule.** "A person must not rent or offer for occupancy a dwelling or dwelling unit to be occupied by children which has been posted and ordered remediated of lead-based hazards until the identified hazards have been remediated. If the presence of the lead-based hazard becomes known when the dwelling or dwelling unit is already rented to a family with children, the family of the children must not be evicted for that reason." (S.C. Code Ann. § 44-53-1440). The row also says the effect of 2026 Act No. 146 "was not traced". That act moved the lead article to the Department of Public Health, effective on approval: "This act takes effect upon approval by the Governor." (2026 Act No. 146, SECTION 298; approved May 15, 2026). The new row `edu-lead-state-notices-sc` states both points. **Proposed:** add to its notes "Agency is the Department of Public Health from May 15, 2026 (2026 Act No. 146); see `edu-lead-state-notices-sc` for S.C. Code Ann. § 44-53-1440." Found by agent b6.
4. **`edu-no-radon-disclosure-sc`, `edu-no-mold-disclosure-sc`, `edu-no-drug-lab-disclosure-sc`, `edu-no-flood-disclosure-sc` (existing SC rows): incomplete for lease-options.** Each says South Carolina has no disclosure duty. That's true for an ordinary lease, but the Residential Property Condition Disclosure Act reaches a "(3) lease with an option to purchase contract." (S.C. Code Ann. § 27-50-20(3)). Its statement covers "presence of lead-based paint, asbestos, radon gas, methane gas, underground storage tank, hazardous material or toxic material, buried or covered, and other environmental contamination" (S.C. Code Ann. § 27-50-40(A)(6)), and the Real Estate Commission form (S.C. Code Ann. Regs. 105-14) asks about mold, methamphetamine production and flooding. **Proposed:** add to each body "(Leases with an option to purchase a one-to-four-unit home are different: the state property-condition disclosure statement, which asks about [radon / mold / methamphetamine production / flooding], must be given before signing; see `edu-lease-option-disclosure-sc`.)" The new row `edu-lease-option-disclosure-sc` is in the delta. Found by agent b6.
5. **`hoa-compliance` (SC tagged): no conflict; an optional notes line.** See §4, SC item 6. Agent b6 suggests adding to the SC segment: "association rules bind the tenant as lease rules only with notice at signing or on adoption (S.C. Code Ann. § 27-40-520(a)(6)); fines recover the tenant's breach (S.C. Code Ann. § 27-40-710(C))." Optional.
6. **Regulation vs. statute (no row is wrong).** Agents b6 and b7 both noted that S.C. Code Ann. Regs. 103-535(O) (sewer utilities) still lets a utility require the landlord to guarantee a tenant's account. S.C. Code Ann. § 27-33-50(B) now bars that outside master-metered buildings of four or more units. The statute controls, and the existing `edu-utilities-sc` already states the statute correctly. Recorded for awareness only.
7. **Own rows corrected during this pass (not existing-row findings, listed for transparency):** `edu-no-waiver-by-acceptance-rule-sc` was replaced by `edu-waiver-by-acceptance-sc` (S.C. Code Ann. § 27-37-150; see §4). `edu-required-disclosures-sc` was corrected to cover lease-options (S.C. Code Ann. § 27-50-20(3), found by b6) and licensee status on the first page (S.C. Code Ann. § 40-57-135(F)(1)(c), found by b7). Added with it: `edu-lease-option-disclosure-sc` and the optional disclosure clause `licensee-status-disclosure-sc` (REQUIRED_DISCLOSURE: S.C. Code Ann. § 40-57-135(F)(1)(c); its layout needs first page, bold, underlined, capitals; no new variable, since the license type is a bracketed choice).

### §7 Findings for other states

None. The tag-first screens recorded why each other state's clause was not tagged for South Carolina; none of those reasons suggested an error in the other state's row (agents b6 and b7 reported the same).


### Proposed SOP changes

- **Batteries: put word boundaries on short stems.** Battery SC-B1-005 used "eject" with no leading word boundary and matched "rejected"; it was rerun as SC-B1-005b. Rule 19 could say that a stem shorter than about six letters needs `\b` on both sides unless a known positive shows otherwise.

- **Batteries: allow enough words between linked terms.** SC-B1-001 allowed three words between "accept" and "rent" and missed "acceptance by the landlord of any rent" (S.C. Code Ann. § 27-37-150), which surfaced only when Chapter 37 was read for another topic. Rule 19 could set a minimum window (about eight words) for proximity patterns and require that the known positive be the longest phrasing likely in the state's style.
- **Sale-disclosure statutes and lease-options.** When an absence turns on whether a seller-disclosure statute reaches leases, check its scope list for "lease with an option to purchase" (S.C. Code Ann. § 27-50-20(3) was missed by SC-B4-011 and found by agent b6).
- **Batch agents need their own scratch folders.** Two parallel agents shared one scratchpad and one overwrote the other's helper scripts; the brief should give each agent its own path.
- **Regulation splitter coverage.** The saved text of Regs. 61-44 and 61-51 is present but wasn't keyed by the section splitter, so it looked "not held" (61-44 was briefly logged as a fetch request). Before logging a FETCH, grep the held text for the section number.
- **A battery that fails only its own known positive** stops before anything is recorded; rerunning it under the same id (as b6 did three times) leaves one clean record. Rule 19 could say so, keeping the "b" suffix for batteries that were recorded and then found flawed.

### Proposed topic questions

- `required-disclosures`: "Does the state's residential property condition disclosure act cover a lease with an option to purchase, so that the landlord must deliver the disclosure statement before the lease-option is signed?" (South Carolina: S.C. Code Ann. §§ 27-50-20(3), 27-50-50(A).)
- `required-disclosures`: "Must a real estate licensee leasing their own property state their license status on the first page of the lease in a set format?" (South Carolina: S.C. Code Ann. § 40-57-135(F)(1)(c), bold, underlined capital letters.)
- `utility-landlord-account`: "Does a utility regulation still authorize a landlord-guarantee agreement that a later statute bars, so the regulation should be read as superseded?" (South Carolina: S.C. Code Ann. Regs. 103-535(O) vs S.C. Code Ann. § 27-33-50(B).)
- `municipal-utility-lien`: "Do municipal or district sewer charges become a lien on the landlord's property for a tenant's unpaid account despite a statute making the tenant solely responsible for utilities?" (South Carolina: S.C. Code Ann. §§ 5-31-2040, 27-33-50(A).)
- `sprinkler-disclosure`: "Does the state offer a property or income tax credit for voluntary sprinkler retrofits that the owner may transfer to the tenant?" (South Carolina: S.C. Code Ann. § 12-6-3622(C).)
- `waiver-by-acceptance`: "Does the eviction chapter say that accepting rent after the court issues its rule or summons doesn't waive the eviction?" (South Carolina: S.C. Code Ann. § 27-37-150.)

# Topic gaps sync (Claude Code, 2026-11-07)

Merged on base 8fa1f6f: 224 new rows, 42 tags (266 records, matching the log). Spot-check on scstatehouse.gov: S.C. Code Ann. §§ 27-40-330, 27-40-410, 27-40-530, 27-39-60, 15-48-10(a), 44-53-1440, 27-50-20 match. The 11 rows edited after round 2 were re-checked by a Claude Code checker against the corpus (the live chapter URLs began redirecting during the check; quotes relied on were confirmed in hash-matched corpus pages or the live pages fetched earlier the same day): 5 hold; fixes applied to `edu-portfolio-thresholds-sc` (2), `edu-cure-and-eviction-grounds-sc` (2), `edu-confirmed-absences-habitability-sc`, `edu-statute-of-frauds-lease-sc`, `edu-criminal-activity-sc`, and the optional owner-name bracket in `licensee-status-disclosure-sc`. §6: item 1 `early-termination-sc` added (Taylor approved; SC untagged from `early-termination-ks`); item 2 CARES pointer added to `edu-eviction-process-sc` (Taylor approved); item 3 `edu-lead-hazards-sc` gained § 44-53-1440 and the agency note; item 4 the lease-option sentence added to the radon, mold, drug-lab and flood rows; item 5 the `hoa-compliance` SC notes line added. Arbitration: SC stays off `arbitration-agreement` and joins the held group (S.C. Code Ann. § 27-40-330(b) adds damages for deliberately using a known prohibited term). SOP 1.99. Six topic questions added.

- **2026-11-12 (Claude Code, MO topic gaps sync):** shared `lock-change-ak` retitled from "Lock Changes (Alaska)" to "Lock Changes" (MO gaps log §7). Title only, uniform; the body and this state's tag are unchanged.

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-sc` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.
