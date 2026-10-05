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
