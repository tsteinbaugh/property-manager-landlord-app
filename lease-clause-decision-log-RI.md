# Rhode Island — lease-clause decision log (state #41)
**Dates:** research pass, independent check and delivery 2026-10-09 (one Desktop chat; the session's context was compacted more than once and resumed each time from the saved work files, with nothing lost). **Settings:** Opus, high effort. Research mode was not turned on. All three rule 9 triggers came up (proof of absence, ambiguous text such as § 34-37-4's flush paragraph and § 34-18-67's heading, and cross-chapter gap searches), but each was answered from the saved official text with logged whole-corpus batteries (§17). A web research run would have searched secondary sources, not the primary text, so it was not needed and Taylor was not asked to switch it on.
**Step A (rule 23):** the attached `lease-clauses.csv` has 4,863 rows (sha256 fbb1c54eb8a4b7e4b3c39f3704f25e3c2689b26000e5804c221e417d58cc8b8e). 4,749 are active (965 lease clauses, 3,784 education rows), and every per-state active count matched the kickoff. Before this pass, Rhode Island had one row, the dormant `landlords-access-hi-ky-ri-dc` (§5).
**Result:** 384 delta rows: 338 new Rhode Island rows (32 lease clauses, 306 education rows) and 46 changed rows (44 shared clauses and `edu-cares-act-notice` tagged RI, plus the dormant row's note). After merge, Rhode Island has 383 active rows (76 clauses, 307 education rows).

## 0. Completion status
| | Status |
|---|---|
| Step A row count (rule 23) | Done, matches the kickoff (above) |
| Sources, currency, corpus (rules 16, 19, 24) | Done, §1 |
| Tag-first screen (rules 26-28) | Done, §2 |
| New rows (rules 29-60) | Done, §3 |
| Layout and placement (rule 40) | Done, §4 (batteries run after drafting; see Proposed SOP changes) |
| Dormant row (rule 25) | Done, §5 |
| Optional clauses (rule 54) | Done, §6.1 |
| Gap-discovery source 1 — statute walk | Done, §14 |
| Gap-discovery source 2 — real-lease comparison | Done, §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done, §16 |
| Gap-discovery source 4 — outside-title search | Done, §17 |
| Topic canvass (rules 27, 36) | Done, §18 (344 of 344 topics) |
| Step D screens (rules 40-54) | Done, §19 |
| Independent check (rule 80) | Done, 3 rounds, §13 |
| Integrity checks | Done, §8 |
| Deliverables | Done, §11 |

## 1. Sources, currency and corpus (rules 16, 19, 24)
### 1.1 Source registry (rule 24)
- **Channel:** the shell's network reaches none of the Rhode Island sites. With Taylor's approval (§6.2), the built-in browser on his computer fetched each official page in-page and saved JSON exports to his Downloads folder. Each file was identified by SHA-256, copied into the workspace and hashed again there; the hashes match in all three places (`work/sha-manifest.txt`).
- **General Laws:** webserver.rilegislature.gov/Statutes, one page per section, crawled from every title and chapter index. Saved as `ri-gl-corpus-20261009-part1..7.json` (sha256 prefixes d2384243, 2a431399, b38f38f8, e63b8522, e2cf63eb, f6ffa7eb, e1ce9ad6; 34,777 section pages, including the "_" version pages that carry every dated version of a section), and the index pages as `ri-gl-indexes-20261009.json` (f9c66690, 3,062 index pages).
- **Public laws:** the old `/PublicLaws/` path the kickoff named returns 404. The acts are published at `/PublicLaws/law25/` and `/law26/` (`lawYYNNN.htm`), with chapter lists under `/Lawrevision/plshort/`. All 2025 acts (471; 57e83c0b) and all 2026 acts (427; e3696c0e) are saved. Additions and deletions are kept as `[+added+]` and `[-struck-]` markup from the pages' inline styles.
- **Constitution:** rilegislature.gov/riconstitution, full text (a2a16a5e), split into 135 units.
- **Regulations (RICR, rules.sos.ri.gov):** 216-RICR-50-15-2 (radon), 216-RICR-50-15-3 (lead poisoning prevention) and 860-RICR-00-00-2 (`ri-ricr-selected-20261009.json`, 3d3d1959). A bulk listing run tripped a Cloudflare check. Rather than retry, the work waited for the check to clear and then loaded only targeted parts. The regulation PDFs are CORS-blocked, so the page text was used.
- **Court rules:** District Court Civil Rules (916161d0), Supreme Court public-access rules (a6ac4120) and Article X e-filing rules (8c65bae4), as PDFs with text extracts.
- **Real lease:** the State-Wide Multiple Listing Service Residential Lease Agreement (Rev. Dec. 2012), as hosted for e-signing (dd13f20f; §15).
- **Lead only:** the Executive Office of Housing landlord-tenant handbook (July 2026; 03ef2bdf). It was read for leads and never cited.
### 1.2 Currency (rule 16)
- **Compilation:** the history lines show every 2025 public law compiled (the newest chapter 34-18 entries are R.I. Pub. L. 2025, chs. 395, 396, effective July 2, 2025). No 2026 law is compiled. The 2026 session list (`sal2026.htm`) shows 427 public laws as of 7/20/2026, no special session, and two vetoes, both on building energy benchmarking (no tenancy effect).
- **2026 acts:** all 427 were screened by script for tenancy words (110 hits, `work/acts2026-tenancy-screen.json`), and an index of the sections each act amends or adds was built (`work/acts-index.json`). The acts that change Rhode Island rows were read whole and are cited "added by" or "as amended by" the act:
  - R.I. Pub. L. 2026, chs. 147, 148: survivor protections, adding §§ 34-18-63 to -67 and renumbering the § 34-18-11 definitions, effective July 1, 2026.
  - chs. 165, 166: the shoreline access disclosure, § 34-18-20(e), effective January 1, 2027.
  - chs. 44, 45: the asbestos abatement amendments, effective on passage.
  - chs. 282 (jury-waiver timing, effective January 1, 2027) and 327, 328 (SAFE Units, § 45-24-31).
### 1.3 Corpus and method (rule 19)
- **Units:** General Laws sections are keyed by their own heading number, not the file name; that matters for version pages and for one misfiled page (file 42-162-4 in directory 42-164 holds § 42-164-4). Act, Constitution, regulation and court-rule units are kept separately, and each unit has a flattened text (`tools/corpus.py`).
- **Batteries:** `tools/battery.py` appends every run to `work/batteries.jsonl` before any hit is read. Each run includes a nonsense control (must be 0), a "general assembly" control (must hit the General Laws and the Constitution), real positives tested with context, synthetic positives tested on the pattern limb only, and a heading-only screen. 520 runs were made before the independent check (448 OK; 72 recorded as FAILED and rerun under new numbers), plus the RI-CHK and RI-FIX runs. Eight names were reused for different runs (for example `RI-rent-concession-1`, `RI-lease-copy-1`). Every reuse stays in the log under its timestamp, and the rows that cite those names say which run they mean (§13, Proposed SOP changes).
- **Quote check (rule 59):** `tools/quotecheck.py` checks every single-quoted passage in Rhode Island notes against the units cited near it, then against the whole corpus. Final run: 1,994 quotes, 0 found nowhere. 20 are found verbatim only in a unit other than the one cited nearby (all 2026-act quotes whose act citation sits earlier in the note, or "however denominated" quoted beside § 34-18-19). 71 have no citation within the script's short window but a cited unit in scope.
### 1.4 Section-open vs recall; case law (rules 15, 21)
- Every Rhode Island row was written with its sections open from the saved corpus; the notes end "Rule 15: written section-open" or state their basis. Chapter 34-18 was read whole (`work/read-34-18.md`).
- **Case law:** none searched or read. Rows that turn on a judicial question say "case law not searched" or "the statute doesn't say", or carry NEEDS_REVIEW (§7).

## 2. Tag-first results (rules 26-28)
### 2.1 Tagged RI as written (45)
Each tag note starts "RI: Tagged as written (tag-first screen, rules 26-28, RI log §2.1)" and gives the full reason. The RI segment is appended after the other states' notes, which are unchanged. Fee clauses were screened against the § 34-18-15(a)(1) same-section rule, the § 34-18-19 one-month cap ("however denominated"), § 34-18-59 (application fees), § 34-18-61 (convenience fees) and the § 34-18-65 domestic-violence lock change (kickoff fee screens).
- `acceptable-payment-methods`: Fee screen (rule 26): no Rhode Island statute requires a non-electronic method, but R.I. Gen. Laws § 34-18-61 bars a convenience fee on a rent payment unless Landlord accepts a form of payment that requires none, so a landlord who lists or switches to fee-bearing methods only may not charge the fee (`edu-convenience-fee-ri`). Rent is payable at the time and place agreed (§ 34-18-15(c)).
- `addendum-precedence`: No Rhode Island statute makes an optional addendum control over the lease; the lead disclosure (own page or stand-alone, 216-RICR-50-15-3.5.3(A)(3)(e)) and the shoreline disclosure (§ 34-18-20(e), added by R.I. Pub. L. 2026, chs. 165, 166, § 1, effective January 1, 2027; not yet in the compiled General Laws) are law-required and control under the clause's exception.
- `appliances-included`: No conflict. Rule 44: the landlord must maintain appliances 'supplied or required to be supplied by the landlord' (§ 34-18-22(a)(4)), and § 34-18-28(a) gives remedies for 'noncompliance by the landlord with the rental agreement', so a listed appliance becomes a remedy trigger. Stove and refrigerator duties: § 45-24.3-7 (`edu-appliances-excluded-ri`).
- `application-of-payments`: No Rhode Island statute sets an order for applying payments (canvass, `edu-no-payment-application-order-ri`); the clause's rent-first default and its savings sentence preserve the nonpayment cure by tender (§ 34-18-35(e)). Partial payment does not waive the balance (§ 34-18-41).
- `assigned-parking-space`: No Rhode Island parking statute for residential leases (`edu-no-parking-statute-ri`); a parking fee would be a fee beyond rent for the rent section (§ 34-18-15(a)(1); `fee-disclosure-ri`).
- `assistance-animal-accommodation`: Consistent with R.I. Gen. Laws § 34-37-4(e): reasonable accommodations, and a person with a guide dog or personal assistive animal 'shall not be required to pay extra compensation' but 'shall be liable for any damage done to the premises' (§ 34-37-4(e)(2)); direct-threat limit § 34-37-4(j) (worded around the tenancy; the clause applies it to the animal, consistent with the federal standard, federal law not read). See `edu-assistance-animals-ri`.
- `common-area-use`: No Rhode Island statute gives tenants a flag or sign display right (`edu-no-flag-sign-right-ri`); the clause's carve-out covers the religious-item right at the unit entry (§ 34-37-5.5, `edu-religious-display-ri`).
- `electronic-notice-ma`: Matches Rhode Island's electronic transactions act: e-mail only by agreement (§ 42-127.1-5(b)), either party may refuse further electronic dealings and that right 'may not be waived by agreement' (§ 42-127.1-5(c)), statutory delivery methods must be followed (§ 42-127.1-8(b)), and a record the recipient cannot print or store is unenforceable (§ 42-127.1-8(c)). The clause excludes nonpayment, default, termination and eviction notices, which chapter 34-18 ties to mailing (§§ 34-18-35, -36, -37, -56). Optional (rule 54).
- `electronic-signatures`: Rhode Island's electronic transactions act gives electronic signatures and records legal effect where the parties agree to transact electronically (§§ 42-127.1-5(b), 42-127.1-7); no exclusion reaches a residential lease (§ 42-127.1-3).
- `entire-agreement`: Consistent with § 34-18-25(b) (a later rule that 'works a substantial modification' of the bargain needs the tenant's written consent) and the 60-day rent increase notice (§ 34-18-16.1).
- `existing-condition`: An acknowledgment of condition is evidence, not a waiver; it cannot displace the landlord's duties to deliver possession in compliance with § 34-18-22 (§ 34-18-21) or the non-waivable maintenance duties (§§ 34-18-17(a)(1), 34-18-18). See `edu-existing-condition-ri`.
- `fire-safety-grilling`: No General Laws conflict (canvass battery RI-fire-safety-grilling-1); the Rhode Island Fire Safety Code regulations were not loaded, so stricter open-flame rules may apply (fire code not searched).
- `governing-law`: No conflict. Rhode Island has no county government; local law comes from cities and towns, which the clause's "city or county" wording still reaches.
- `guest-policy`: No Rhode Island statute limits guest policies (canvass, `edu-guest-policy-ri`); occupancy rules must respect § 34-37-4 (familial status) and § 45-24.3-11 occupancy standards.
- `guest-policy-day-limit`: No Rhode Island statute limits guest stays (`edu-guest-policy-ri`).
- `hoa-compliance`: Fee screen (rule 26): a fine passed through for the tenant's own violation is a mid-tenancy reimbursement, not a fee that applies to the rental, though a landlord who expects to pass fines through should list the possibility in the rent section (§ 34-18-15(a)(1)). For a condominium under the older Condominium Ownership Act, 'tenants of the owners' 'shall be subject to this chapter and to the declaration and bylaws adopted pursuant to the provisions of this chapter' (§ 34-36-34(a)); the Condominium Act (ch. 34-36.1, condominiums created after July 1, 1982) binds unit owners and has no matching tenant provision, so there the tenant's duty to follow association rules comes from this clause. Where an assessment 'has remained unpaid for a period of sixty (60) days' (§ 34-36.1-3.15(g)(1)), the association may, subject to a superior lienholder, demand the arrears and later assessments from a tenant, and amounts paid are 'a credit against the rent owed for occupancy of the unit' (§ 34-36.1-3.15(g)(1); `edu-condo-tenant-rules-ri`).
- `holdover-ca`: Fits § 34-18-43 (after termination the landlord has a claim 'for a sum for reasonable use and occupation') and § 34-18-38(c) (willful bad-faith holdover: up to three months' periodic rent or treble damages; with consent and no term, week-to-week if rent is paid weekly, otherwise month-to-month). The clause's month-to-month continuation assumes monthly rent, which the builder uses. No stipulated holdover rate is offered (`edu-holdover-rate-ri`).
- `inspection-rights`: Entry for inspection is a purpose for which the tenant 'shall not unreasonably withhold consent' (§ 34-18-26(a)), on two days' notice (§ 34-18-26(c)), through `landlords-access-ri`. See `edu-inspection-rights-ri`.
- `joint-liability`: Consistent with § 34-18-38(d)(11) (joint and several liability of grace-period tenants); a survivor who ends the lease under § 34-18-63 owes rent only through the later of termination or vacating (§ 34-18-63(d)), which the clause does not override. See `edu-joint-liability-ri`.
- `landlord-maintenance`: Consistent with § 34-18-22(a); repairs needed because of the tenant's misuse are the tenant's (§§ 34-18-24(6), 34-18-39). Rule 44: lease promises become remedy triggers under § 34-18-28(a). The clause's written-notice request cannot narrow the tenant's statutory remedies (§§ 34-18-30, -31). See `edu-landlord-maintenance-ri`.
- `no-alterations`: The carve-out preserves Rhode Island installations the tenant is entitled to: survivor lock changes (§ 34-18-65(e), added by R.I. Pub. L. 2026, chs. 147, 148, § 2, effective July 1, 2026; not yet in the compiled General Laws), disability modifications (§ 34-37-4(d)) and repair-and-deduct (§ 34-18-30). A landlord's written consent to tenant work could be read as the written assent that subjects the landlord's interest to mechanics' liens (§ 34-28-2); the optional `no-liens-ri` addresses it. See `edu-tenant-alterations-ri`.
- `no-disturbance`: Tracks the tenant duty in § 34-18-24(7) (conduct 'in a manner that will not disturb his or her neighbors' peaceful enjoyment of the premises').
- `no-sublet-assign`: No Rhode Island statute requires a landlord to consent to a sublease or assignment or limits a short-term-rental ban (`edu-sublet-assign-ri`).
- `notices`: Defers to statutory methods: chapter 34-18's demand, noncompliance and termination notices are mailed in the § 34-18-56 forms (§§ 34-18-35, -36, -37), and § 34-18-14 defines notice and receipt. See `edu-notice-delivery-methods-ri`.
- `parking-ks-oh-ca`: The base `parking` disclaims liability, unenforceable under § 34-18-17(a)(4); this variant has no disclaimer.
- `permitted-occupants`: Naming occupants is lawful; asking an occupant's age or familial status is not, apart from whether a person is 18 or older (§ 34-37-4(a)), so the builder should collect names only. Occupancy limits: § 45-24.3-11.
- `pet-insurance-requirement`: A renters-insurance requirement 'must be stated in the lease' (§ 34-18-15(a)(4)); this clause states it. Assistance animals are carved out (§ 34-37-4(e)(2)).
- `possession-delay-ca`: Fits § 34-18-29(a): if the landlord fails to deliver possession, 'rent abates until possession is delivered' and the tenant may terminate on at least five days' written notice, with prepaid rent and security returned. The base `possession-delay` would delay the tenant's exit for 30 days, so it is not tagged.
- `rent-concession-wi`: A neutral statement of any concession; no Rhode Island statute regulates concessions. Optional.
- `rent-installments-or`: Rent is payable at the time and place agreed, and 'Unless otherwise agreed' monthly at the beginning of each month (§ 34-18-15(c)); each installment is rent due on its date for the § 34-18-35(a) 15-day trigger.
- `rent-payment`: The clause's "without demand" matches § 34-18-15(c) ('Rent is payable without demand or notice at the time and place agreed upon by the parties'); "except as permitted by applicable law" preserves the tenant's deductions (§§ 34-18-30, -31). The rent section must also carry the fee list (§ 34-18-15(a)(1); `fee-disclosure-ri`).
- `rental-application-accuracy`: The exception for information Landlord may not request covers Rhode Island's inquiry bans: immigration or citizenship status (§ 34-18-62) and the protected-class and domestic-abuse inquiries in § 34-37-4(a).
- `residential-use-only`: Consistent with § 34-18-27 ('Unless otherwise agreed, a tenant shall occupy his or her dwelling unit only as a dwelling unit'). "Illegal" purposes do not reach lawful cannabis consumption by non-smoked means or home cultivation within the limits (§§ 21-28.11-22, 21-28.11-29(h)).
- `rules-ia`: Its tests are Rhode Island's own (§ 34-18-25(a)(1)-(6)), and its last sentence matches § 34-18-25(b) (a rule adopted later that 'works a substantial modification of his or her bargain' is not valid without written consent).
- `services-utilities-provided-ks-oh`: The base `services-utilities-provided` disclaims liability for interruptions, unenforceable under § 34-18-17(a)(4); this variant has no disclaimer. Essential services: §§ 34-18-22(a)(6), 34-18-31.
- `severability`: No conflict; consistent with § 34-18-13(a)(1) (a court may enforce the remainder without an unconscionable provision).
- `smoking-policy`: The clause bans only smoking and vaping. R.I. Gen. Laws § 21-28.11-29(h): a landlord 'may not prohibit the consumption of cannabis by non-smoked or non-vaporized means, or the transfer without compensation of cannabis by the tenant'; smoking and vaping may be prohibited. Residential buildings of more than four units also fall under the common-area smoking ban in § 23-20.10-3 (`edu-smoking-policy-ri`).
- `storage-space-ks-oh-ca`: The base `storage-space` disclaims liability, unenforceable under § 34-18-17(a)(4); this variant has no disclaimer. Storage inside the tenancy stays under chapter 34-18, so no landlord lien (§ 34-18-42).
- `surrender-end-of-term`: Self-limiting ("to the extent permitted by applicable law"); Rhode Island has no statute on disposing of property left behind (`edu-no-abandoned-property-procedure-ri`), no landlord lien (§ 34-18-42) and no self-help (§ 34-18-44); the optional `abandoned-property-ri` supplies a notice procedure. Property removed on execution: § 34-18-50.
- `tenant-forward-proceedings-ca`: No conflict.
- `tenant-maintenance`: Tracks § 34-18-24(1)-(6) (ordinary tenant duties); the carve-out for conditions the law makes Landlord's preserves § 34-18-22. It shifts no landlord repair work, so § 34-18-22(c) does not apply. See `edu-tenant-statutory-duties-ri`.
- `tenants-property-insurance-ks-oh-ca`: The base clause says Landlord "is not liable", unenforceable under § 34-18-17(a)(4); this variant has no disclaimer. A renters-insurance requirement 'must be stated in the lease' (§ 34-18-15(a)(4)), which this clause does. See `edu-renters-insurance-ri`.
- `utility-payment-evidence`: No Rhode Island statute conflicts; a utility lien on the property for unpaid water or sewer charges makes the evidence useful (`edu-municipal-utility-lien-ri`).
- `utility-service-continuity`: No Rhode Island statute conflicts; landlord-supplied heat, water and hot water remain the landlord's duty (§§ 34-18-22(a)(6), 34-18-31).
- `edu-cares-act-notice`: Rhode Island law does not make the federal row read wrongly. For nonpayment, Rhode Island requires a mailed five-day demand once rent is 15 days in arrears, with suit no earlier than the sixth day after mailing (§ 34-18-35(a)-(b)); on a covered property the federal 30-day notice to vacate is in addition. Terminations of periodic tenancies use the § 34-18-37 periods. No Rhode Island court rule found requiring a CARES Act statement at filing (District Court civil rules loaded; not every form read).
### 2.2 Screened and not tagged
- `late-fee`: overridden by `late-fee-ri`. Its "does not waive ... any other remedy" sentence reads as preserving termination, which § 34-18-41 makes unsafe. Rhode Island has no late-fee cap (`edu-no-late-fee-limit-ri`).
- `early-termination` / `early-termination-ks`: overridden by `early-termination-ri` (abandonment, mitigation and § 34-18-15(e), (f) exits).
- `landlords-access`: overridden by `landlords-access-ri` (consent not unreasonably withheld, two days' notice, § 34-18-26).
- `extended-absence-notice-ks`: overridden by `extended-absence-notice-ri`. Rhode Island lets a lease require notice only of absences over 10 days (§ 34-18-27), and entry without consent is allowed only during absences over 7 days when reasonably necessary to protect the property (§ 34-18-26(b)).
- `keys`: overridden by `keys-ri` (fee screen; the § 34-18-65 lock change, added by R.I. Pub. L. 2026, chs. 147, 148).
- `security-deposit-use`: overridden by `security-deposit-use-ri` (the § 34-18-19(b) closed deduction list).
- `due-at-signing`: overridden by `due-at-signing-ri` (pet and other deposits count toward the cap; the § 34-18-19(e) furniture deposit; no application fee).
- `utilities-responsibility` and `utilities-paid-by-landlord`: replaced by `utilities-responsibility-ri`, the § 34-18-15(a)(3) included and tenant-paid disclosure. `utilities-paid-by-landlord` covers only half of that disclosure, so it is not tagged; the builder should not offer it in Rhode Island (§10).
- `lead-based-paint`: overridden by `lead-disclosure-ri` (216-RICR-50-15-3.5.3 additions; own page).
- `default-by-tenant`, `pet-policy`, `returned-payments`, `parking-vehicle-rules`, `landscaping-irrigation`, `snow-removal`: each overridden by its `-ri` row, which records the reason ("Overrides `x`" in the note, checked by script, §8). The chore clauses need a signed writing with adequate consideration and specified tasks for every dwelling (§ 34-18-22(c)).
- **Disclaimer variants:** Rhode Island voids exculpation (§ 34-18-17(a)(4)), so the `-ks-oh-ca` variants without the disclaimer are tagged (`tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`) and the base clauses are not.
- **Other shared clauses:** every other active shared clause names another state's statute or figure, or duplicates one of the above. None was tagged.
### 2.3 Single-state clauses screened (rule 26 triage)
The library has 965 active clauses; 886 are single-state. A script split the 886 (recomputed for this log; the working split, with a slightly narrower pattern, was 426/141/319):
- **424** name another state, its statute or its agency in `bodyText`. Not tagged.
- **143** are another state's figure or wording variant of a topic Rhode Island answers with its own row or a §2.1-2.2 shared clause (for example `late-fee-limit-md`, `landlords-access-co`, `pet-policy-ks`). Not tagged; the topic is answered there.
- **319** were triaged one by one (`work/single-triage.jsonl`): 0 TAG, 315 NO, 4 CANDIDATE. The candidates became `automatic-renewal-ri` (from `auto-renewal-ny`) and three declined options with education rows: `maintenance-allocation-az` (separate tenant maintenance agreement; `edu-tenant-maintenance-agreement-ri`), `association-approval-fl` (association fee or deposit risks §§ 34-18-59, 34-18-19; `edu-condo-leasing-rules-ri`) and `informal-dispute-resolution-or` (`edu-no-pre-suit-resolution-statute-ri`). See §6.1.

## 3. New RI rows
### 3.1 RI lease clauses (32)
`lease_clause_basis` (first basis): SERVES_LANDLORD 20, CONSTRAINED_TERM 6, REQUIRED_DISCLOSURE 6. 15 are overrides (`supersedes` set; each note says "Overrides `id`", checked by script, §8). 12 are optional ("[Optional.]", never default; §6.1). Status: VERIFIED 31, NEEDS_REVIEW 1 (`early-termination-ri`: penalty and liquidated-damages case law not searched).
| Row | rule_type | lease_clause_basis | topic_key | supersedes | status | key citations |
|---|---|---|---|---|---|---|
| `abandoned-property-ri` | RECOMMENDED | SERVES_LANDLORD | abandoned-property |  | VERIFIED | R.I. Gen. Laws § 34-18-11(1); § 34-18-42; § 34-18-50. |
| `appliances-excluded-ri` | CONDITIONAL | SERVES_LANDLORD | appliances-excluded |  | VERIFIED | R.I. Gen. Laws § 34-18-22(a)(4); § 45-24.3-7(1)(iii); § 34-18-18 |
| `automatic-renewal-ri` | CONDITIONAL | SERVES_LANDLORD | automatic-renewal |  | VERIFIED | § 6-13-14; § 6-13-14(a); § 34-18-15(a) |
| `bed-bug-cooperation-ri` | RECOMMENDED | SERVES_LANDLORD | bed-bug-cooperation |  | VERIFIED | R.I. Gen. Laws § 34-18-26(a); § 34-18-24(1); § 45-24.3-6(i) |
| `casualty-termination-ri` | CONDITIONAL | SERVES_LANDLORD | casualty-termination |  | VERIFIED | R.I. Gen. Laws § 34-18-33(a); § 34-18-33(a)(1); § 34-18-19 |
| `criminal-activity-ri` | RECOMMENDED | SERVES_LANDLORD | criminal-activity |  | VERIFIED | R.I. Gen. Laws § 34-18-24(8); § 21-28-4.06; § 34-18-24(8) |
| `default-by-tenant-ri` | REQUIRED | SERVES_LANDLORD | default-by-tenant | `default-by-tenant` | VERIFIED | R.I. Gen. Laws § 34-18-17(a)(3); § 34-18-17(b) |
| `due-at-signing-ri` | CONSTRAINED | CONSTRAINED_TERM | due-at-signing | `due-at-signing` | VERIFIED | R.I. Gen. Laws § 34-18-19(a); § 34-18-19(a); § 34-18-19(e) |
| `early-termination-ri` | RECOMMENDED | SERVES_LANDLORD | early-termination | `early-termination-ks` | NEEDS_REVIEW | R.I. Gen. Laws § 34-18-11(1); § 34-18-11(1); § 34-18-40 |
| `extended-absence-notice-ri` | CONDITIONAL | SERVES_LANDLORD | extended-absence-notice | `extended-absence-notice-ks` | VERIFIED | R.I. Gen. Laws § 34-18-27; § 34-18-27; § 34-18-26(b) |
| `fee-disclosure-ri` | REQUIRED | REQUIRED_DISCLOSURE | fee-transparency |  | VERIFIED | R.I. Gen. Laws § 34-18-15(a)(1) |
| `furnishings-included-ri` | CONSTRAINED | CONSTRAINED_TERM | furnishings-included |  | VERIFIED | R.I. Gen. Laws § 34-18-19(e); § 34-18-19(f); § 34-18-19(h) |
| `housing-code-violations-disclosure-ri` | RECOMMENDED | SERVES_LANDLORD | inspection-condemnation-disclosure |  | VERIFIED | R.I. Gen. Laws § 34-18-22.1(b); § 34-18-22.1(b); R.I. Gen. Laws § 45-24.3-17(j) |
| `keys-ri` | CONSTRAINED | CONSTRAINED_TERM | keys | `keys` | VERIFIED | R.I. Gen. Laws § 34-18-65; § 2; § 34-18-65(d) |
| `landlord-insurance-disclosure-ri` | REQUIRED | REQUIRED_DISCLOSURE | landlord-liability-insurance |  | VERIFIED | R.I. Gen. Laws § 34-18-22(a)(7) |
| `landlord-self-cure-ri` | CONSTRAINED | SERVES_LANDLORD | landlord-self-cure |  | VERIFIED | R.I. Gen. Laws § 34-18-39; § 34-18-24; § 34-18-24(1) |
| `landlords-access-ri` | CONSTRAINED | SERVES_LANDLORD | landlord-entry | `landlords-access` | VERIFIED | R.I. Gen. Laws § 34-18-26(a); § 34-18-26(a); § 34-18-26(b) |
| `landscaping-irrigation-ri` | RECOMMENDED | SERVES_LANDLORD | landscaping-irrigation | `landscaping-irrigation` | VERIFIED | R.I. Gen. Laws § 34-18-22(c); § 34-18-22(c) |
| `late-fee-ri` | CONSTRAINED | CONSTRAINED_TERM | late-fee | `late-fee` | VERIFIED | R.I. Gen. Laws § 34-18-41; § 34-18-17(a)(1); § 34-18-17(b) |
| `lead-disclosure-ri` | CONDITIONAL | REQUIRED_DISCLOSURE | lead-based-paint | `lead-based-paint` | VERIFIED | 216-RICR-50-15-3.5.3; 40 CFR 745.113; 42 U.S.C. 4852d |
| `no-liens-ri` | RECOMMENDED | SERVES_LANDLORD | construction-liens |  | VERIFIED | R.I. Gen. Laws § 34-28-2; § 34-28-2.; § 34-28-2 |
| `owner-manager-disclosure-ri` | REQUIRED | REQUIRED_DISCLOSURE | owner-identity-disclosure |  | VERIFIED | R.I. Gen. Laws § 34-18-20(a) |
| `parking-vehicle-rules-ri` | RECOMMENDED | SERVES_LANDLORD | parking-vehicle-rules | `parking-vehicle-rules` | VERIFIED | R.I. Gen. Laws § 39-12.1-12; § 34-18-15(a)(1) |
| `pet-policy-ri` | RECOMMENDED | SERVES_LANDLORD | pet-policy | `pet-policy` | VERIFIED | § 34-18-17(a)(4); R.I. Gen. Laws § 34-18-17(a)(4); § 34-18-26(d) |
| `rent-increase-midterm-ri` | CONDITIONAL | SERVES_LANDLORD | rent-escalation |  | VERIFIED | R.I. Gen. Laws § 34-18-16.1(a); § 34-18-16.1(a); § 34-18-16.1(b) |
| `returned-payments-ri` | RECOMMENDED | SERVES_LANDLORD | returned-payments | `returned-payments` | VERIFIED | R.I. Gen. Laws § 34-18-15(a)(1); § 34-18-15(a)(5); § 34-18-61 |
| `seasonal-tenancy-ri` | CONDITIONAL | SERVES_LANDLORD | seasonal-tenancy |  | VERIFIED | R.I. Gen. Laws § 34-18-36(f); § 34-18-36(f); § 34-18-38. |
| `security-deposit-use-ri` | CONSTRAINED | CONSTRAINED_TERM | security-deposit-use | `security-deposit-use` | VERIFIED | R.I. Gen. Laws § 34-18-19(b); § 34-18-24; § 34-18-19(b) |
| `shoreline-access-disclosure-ri` | CONDITIONAL | REQUIRED_DISCLOSURE | shoreline-access-disclosure |  | VERIFIED | R.I. Gen. Laws § 34-18-20(e) (R.I. Pub. L. 2026, chs. 165, 166, § 1) |
| `snow-removal-ri` | RECOMMENDED | SERVES_LANDLORD | snow-removal | `snow-removal` | VERIFIED | R.I. Gen. Laws § 34-18-22(c); § 34-18-22(c) |
| `tax-escalation-ri` | CONSTRAINED | CONSTRAINED_TERM | tax-escalation |  | VERIFIED | R.I. Gen. Laws § 6; § 34-18-16.1; § 34-18-16.1(b) |
| `utilities-responsibility-ri` | REQUIRED | REQUIRED_DISCLOSURE | utilities-responsibility | `utilities-responsibility` | VERIFIED | R.I. Gen. Laws § 34-18-15(a)(3) |
### 3.2 RI education rows (306)
Status: VERIFIED 290, NEEDS_REVIEW 16 (§7). rule_type: RECOMMENDED 153, CONSTRAINED 48, PROHIBITED 39, CONDITIONAL 34, REQUIRED 27, mixed 5. Groups: Default & Termination 48, Compliance & Prohibited Terms 40, Landlord Responsibilities 34, Rent & Payment 33, Disclosures 31, Notices & General 25, Security Deposit 23, Rules & Regulations 20, Building & Safety 13, Other / Miscellaneous 9, Access & Entry 9, Parking & Storage 8, Tenant Responsibilities 7, Pets 6. The canvass agents drafted most of them (§18); the lead drafted the rest, including the two rows from the landlord-scenario screen (`edu-asbestos-hazards-ri`, `edu-no-tenant-bankruptcy-rule-ri`; §16). New topic keys: `shoreline-access-disclosure`, `seasonal-tenancy`, `asbestos-hazards`, `tenant-bankruptcy`. One row moved topic: `edu-religious-display-ri`, from `common-area-use` to `religious-cultural-display` (rules 57-58).

## 4. Layout and placement (rule 40)
Formatting batteries (RI-FMT-underline, -boldface, -conspicuous, -separate, -substantially, -typesize, -placement) ran over the whole corpus: statutes with every dated version, the Constitution, loaded RICR parts, court rules and the 2025-2026 acts. Each ran first with no tenancy limb (-1: 4, 58, 378, 44, 297, 45 and 53 hits) and then with one (-2: 1, 4, 44, 3, 16, 4 and 3 hits). Every tenancy hit was read by heading, and every residential one in context. They ran after drafting, not in Step C as rule 40 asks; the drafted rows already met each rule found, and no row changed as a result (Proposed SOP changes).
| Provision | Requirement | Reaches residential leases? | Library effect |
|---|---|---|---|
| § 34-18-15(a)(1) | Fees beyond rent "in the same section as the rent disclosure", plus a statement that additional fees may apply; does not apply where a subsidy requires a different lease format | Yes, every written lease | `fee-disclosure-ri` (REQUIRED) carries a use bracket placing it in the Rent section; builder flag (§10) |
| 216-RICR-50-15-3.5.3 | Lead disclosure acknowledgment "must be a stand-alone document, which includes the property address, or its own separate page when included in a written lease" | Yes, pre-1978 housing | `lead-disclosure-ri` use bracket; builder flag (§10) |
| § 34-18-20(e)(2) (added by R.I. Pub. L. 2026, chs. 165, 166, from January 1, 2027) | Shoreline disclosure "may be satisfied by incorporating it into any written rental agreement" or a separate notice | Yes, shoreline property | `shoreline-access-disclosure-ri`; no format rule |
| § 34-18-22(a)(7) | Liability-insurance declaration page given to the tenant with the lease | Yes, every tenancy covered | `landlord-insurance-disclosure-ri` says the page is attached; builder flag (§10) |
| §§ 34-18-35(a), 34-18-36, 34-18-37 | Demand, cure and termination notices "in a form substantially similar to" the § 34-18-56 forms | Notices, not the lease | Education rows (`edu-termination-notice-ri`, `edu-eviction-process-ri`) |
| § 34-18-10, § 45-24.3-17(f), § 34-45-5 | Posting "conspicuously" (service, code notices, Section 8 termination notices) | Procedure, not lease text | Education rows only |
| § 31-44-7 | Mobile home park lease terms (conspicuous rules, copy) | Mobile home parks, outside the library | `edu-scope-ri` |
| Bold, underline, type size | No rule reaching a residential lease (hits are consumer credit, insurance, motor vehicle, solar and goods-lease statutes) | No | None |
No two rules claim the same place in the lease (the fee list goes in the Rent section, the lead acknowledgment on its own page), so there was nothing to settle with Taylor. No omission sanction forfeits money except § 34-18-15(a)(5): a fee the lease doesn't disclose can be recovered by the tenant (`edu-fee-disclosure-ri`).

## 5. Dormant rows resolved (rule 25)
- **`landlords-access-hi-ky-ri-dc`** (dormant, LEASE_CLAUSE, UNVERIFIED): **verified and left switched off.** Its "48 hours' notice" is close to, but not the same as, Rhode Island's "at least two (2) days' notice" (§ 34-18-26(c)). Its "right of reasonable access ... during normal business hours" doesn't reflect the consent rule (§ 34-18-26(a): the tenant "shall not unreasonably withhold consent"). Rhode Island uses `landlords-access-ri`. The HI, KY and DC parts were not reviewed. Only the note changed (an appended RI segment).

## 6. Decisions
### 6.1 Optional clauses found (rule 54)
**Offered (never default; 12):**
- Lead-drafted: `seasonal-tenancy-ri` (§ 34-18-36(f) seasonal windows), `rent-increase-midterm-ri` (scheduled increases or a 60/120-day reserved increase with a free exit, § 34-18-16.1), `casualty-termination-ri` (a landlord's option the statute leaves to contract; § 34-18-33 gives only tenant rights) and `automatic-renewal-ri` (no Rhode Island statute regulates residential automatic renewal; § 6-13-14, the only automatic-renewal notice statute, covers leases of personal property only).
- Canvass-drafted and accepted: `tax-escalation-ri` (§ 6A-2.1-222), `bed-bug-cooperation-ri`, `no-liens-ri` (§ 34-28-4.1), `appliances-excluded-ri` (§ 45-24.3-7), `furnishings-included-ri` (§ 34-18-19(e) furniture deposit), `landlord-self-cure-ri` (§ 34-18-39 with § 34-18-26(c) notice), `abandoned-property-ri` (§ 34-18-40) and `criminal-activity-ri` (§ 34-18-24, § 34-18-36(f)).
**Considered and not offered (each has an education row):**
- Holdover rate: `edu-holdover-rate-ri`. Holdover is week-to-week or month-to-month with consent, § 34-18-38(c), and use and occupation, § 34-18-43.
- Tenant-caused damage clause: `edu-tenant-caused-damage-ri`.
- Jury waiver: `edu-jury-waiver-ri`.
- Association approval: `edu-condo-leasing-rules-ri`.
- Informal dispute resolution: `edu-no-pre-suit-resolution-statute-ri`.
- Separate tenant maintenance agreement: `edu-tenant-maintenance-agreement-ri`. The chore clauses `landscaping-irrigation-ri` and `snow-removal-ri` carry the § 34-18-22(c) conditions themselves.
- Cannabis cultivation ban: `edu-cannabis-ri`. § 21-28.11-29(h) and § 21-28.6-4(d) already let a landlord refuse or prohibit.
- Collection-agency fee pass-through: `edu-collection-fee-ri`; § 19-14.9-8(a) needs express authorization, but no Rhode Island statute authorizes it for leases.
### 6.2 Questions asked of Taylor (rule 76)
1. 2026-10-09: approval to use the built-in browser on his computer to read the official Rhode Island sources, save them to his Downloads folder, and read that folder. **Answer:** "Yes (Recommended)".
No other question came up that the saved law and the SOP couldn't settle. Nothing was asked about landlord practice outside Colorado or about buying a lease (rules 2, 33).
### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
- **Late fee:** Rhode Island has no cap or grace period, so `late-fee-ri` uses `{{late_fee_amount}}` and `{{late_fee_grace_days}}`. It drops the shared sentence that reads as keeping termination after accepting late rent (§ 34-18-41: acceptance with knowledge of default waives termination unless written notice is given within 10 days).
- **Deposits:** any deposit "however denominated" (pet, key, other) counts toward the one-month cap. The furniture deposit sits outside the cap only on its § 34-18-19(e) conditions (up to one month's rent, furniture worth $5,000 or more). Prepaid last month's rent is treated as rent, not deposit, because the act keeps "prepaid rent" separate from "security" (§§ 34-18-28(d), 34-18-33(b)). This is a drafting judgment, recorded in `edu-last-month-rent-ri`.
- **Entry:** consent-based (`landlords-access-ri`). The § 34-18-39 repair entry and absence entry are each stated with their own conditions.
- **Fee disclosure:** `fee-disclosure-ri` is a REQUIRED clause the builder must place in the Rent section. Fee-bearing clauses (pet rent, returned payment, keys) say they are also listed there. The subsidy exception is in the use bracket and in every education row that states the rule (round 1 sweep, §13).
- **Survivor protections (R.I. Pub. L. 2026, chs. 147, 148):** cited as added by the act, effective July 1, 2026. A waiver falls under § 34-18-17(a)(1), so the § 34-18-17(b) knowing-use penalty applies alongside § 34-18-67's voidness (drafting judgment, upheld in round 2). § 34-18-67's heading says "through 34-18-64" and its text says "through 34-18-65"; rows follow the text (§10).
- **Condominium tenants:** only the older Condominium Ownership Act binds tenants to the declaration and bylaws (§ 34-36-34(a)). Under the Condominium Act (ch. 34-36.1) that duty rests on the lease (`hoa-compliance` note, `edu-condo-tenant-rules-ri`). § 34-36.1-1.02 settles which conversion statute applies (§ 34-36.1-4.12 for any condominium created after July 1, 1982), so `edu-tenant-purchase-rights-ri` no longer says "follow the stricter".
- **Rent tax:** the rooming-house definition in § 44-18-7.1(n)(ii) is broad. `edu-rent-tax-ri` tells landlords renting rooms, or any unit on a lease shorter than 12 months, to ask the Division of Taxation (drafting judgment; Division guidance not read).
- **Federal row:** `edu-cares-act-notice` tagged; Rhode Island law doesn't make it read wrongly (§2.1).
- **Out of scope by rule 3:** municipal registration, inspection and housing-code rules (Providence, Warwick, Newport and others) are flagged in the rows that mention them, not resolved. Mobile home parks (ch. 31-44) and leased-land dwellings (ch. 34-18.2) are noted where they create exceptions, not covered.

## 7. Open items (none blocking)
- **NEEDS_REVIEW rows (17), each with its boundary in the note:** `early-termination-ri` (penalty case law), `edu-rent-installments-ri` and `edu-no-deposit-refund-conditions-ri` (one inferred sentence each), `edu-no-inspection-notice-penalty-ri` (§ 23-24.6-28 read at (o) and the tenant lines), `edu-pest-treatment-ri` (SAFE Unit acts chs. 327, 328 not read whole), `edu-alarm-duties-ri` (Fire Safety Code and NFPA editions not loaded), `edu-abandoned-building-receivership-ri` (the round-1 checker found its open items supported; left for the sync read), `edu-service-animal-denial-penalty-ri` (round-1 checker read § 34-37-5 (b), (h), (l), (n) and found them supportive), `edu-no-flood-disclosure-ri` and `edu-no-contamination-disclosure-ri` (§ 5-20.8-2 form lists), `edu-private-well-testing-ri` (DOH private-well regulation not loaded), `edu-no-radon-disclosure-ri` (§ 23-61-3 and the radon rule's definitions), `edu-required-disclosures-ri`, `edu-accessory-dwelling-unit-ri` (§ 45-24-31 not read whole), `edu-no-key-control-mandate-ri`, `edu-prohibited-lease-terms-ri` (sections read at the subsections cited) and `edu-no-window-guard-rule-ri` (building code regulations not loaded).
- **Regulations not loaded:** every RICR part except the three in §1.1. That leaves out the Fire Safety Code and its NFPA 1/101 adoptions, the State Building Code (SBC-1, SBC-6 property maintenance), DOH private-well rules, PUC utility termination rules (810/815-RICR) and DEM remediation rules. Rows that depend on them say so. Whether to load them is a product decision; nothing in this pass depends on it.
- **Case law:** not searched (§1.4).
- **Municipal rules:** flagged, not resolved (rule 3).
- **Round-1 NOTE findings not applied** (wording precision, no legal error): `edu-tenant-screening-ri` (expungement hedge), `edu-no-portable-solar-right-ri`, `edu-no-prop65-warning-ri`, `edu-redemption-ri` (the § 34-18-35(e) six-month condition read literally would bar every hearing cure; the row should label its reading as a drafting judgment), `edu-statute-of-frauds-ri` (§ 9-1-4's writing clause printed inside item (7)), `edu-electronic-records-ri`, `edu-no-abandoned-property-procedure-ri`, `edu-no-minor-tenant-filing-ri`, `edu-no-initials-requirement-ri` (one repeated sentence), `edu-rent-increase-notice-ri` (§ 34-18-16.1(c)'s "any other state or federal law or regulation"). Also `lead-disclosure-ri`: its use bracket is over-inclusive (safe); it doesn't offer the 216-RICR-50-15-3.2.1(A)(4)(a) exemptions for lead-safe premises, compliant renewals and leases of 100 days or less.

## 8. Integrity checks on the delta
Run by `rows/merge.py`, `tools/checks.py` and `tools/quotecheck.py` on the delivered file:
- **Rows:** 384 (46 changed, 338 new). Header identical to the master; all 17 columns; CRLF record endings; no duplicate ids; no id collides with a master id except the 46 changed rows.
- **Changed rows:** only `states` (RI appended), `notes` (RI segment appended) and `last_checked` differ. Each master note is a verbatim prefix of the delta note (script check).
- **Groups:** every group is an existing one. **Supersedes:** each of the 15 is an active master id, and the note says "Overrides `x`" for the same id. **Basis:** every new active clause has a `lease_clause_basis`; no education row has one. **Statuses:** VERIFIED or NEEDS_REVIEW only. **Dates:** `effective_from` and `last_checked` 2026-10-09.
- **Variables:** only kickoff variables used (`late_fee_amount`, `late_fee_grace_days`, `monthly_rent`, `security_deposit`, `property_address`, `pet_rent_amount`); no new variable; no `[bracket]` beside a variable for the same item.
- **Topics:** four new topic keys (§3.2); every Rhode Island row's topic exists in the topic reference or is one of the four.
- **Pointers:** every row id named in a Rhode Island note or body resolves to an active row: 0 dangling. Every row id this log names (backticked ids, no-row lines included) was checked against the merged library by script: 0 unresolved.
- **Quotes:** §1.3. **Counts after merge:** 5,201 rows, 5,087 active; Rhode Island active 383.
- **Errata:** the 334 independent-check edits are applied by `rows/merge.py` from `work/check/errata-*.jsonl`. Each text edit asserts that its old text occurs exactly once in the field (and, for shared rows, only in the RI segment). All 334 applied.

## 9. Propagation notes (rule 62)
- **No shared row's text was edited.** On the 45 tagged rows only `states`, `notes` (an appended `RI:` segment) and `last_checked` changed. The dormant row got a note only. Round-1 fixes to `addendum-precedence`, `hoa-compliance` and `no-alterations` touched only their RI segments (script-enforced).
- **Vouches given:** none requested this pass.

## 10. Findings for other states or the product (flagged, not fixed)
- **New `{{variable}}`s:** none.
- **Builder flags:**
  - Place `fee-disclosure-ri` inside the Rent section and fill its list from the fee clauses chosen (late fee, returned payment, pet rent, parking, keys, early termination). The same-section rule is the law, not a style choice.
  - `lead-disclosure-ri` must print on its own page, or as a stand-alone document with the property address.
  - `landlord-insurance-disclosure-ri` needs the declaration page attached.
  - `shoreline-access-disclosure-ri` applies only to shoreline property and to tenancies starting on or after 2027-01-01.
  - `seasonal-tenancy-ri` should check the term against its two date windows (May 1-October 15; September 1-June 1).
  - Don't offer `utilities-paid-by-landlord` in Rhode Island; use `utilities-responsibility-ri` (§2.2).
- **Legal watch:**
  - § 34-18-67's heading and text disagree on the range ("34-18-64" vs "34-18-65").
  - The § 34-18-11 definitions are renumbered from July 1, 2026, so pinpoint cites to § 34-18-11(x) in other sections and in other libraries go stale; Rhode Island rows cite by term (rule 77).
  - 216-RICR-50-15-3.2.1(A)(3)(a) carries a stale statutory cross-reference.
  - § 45-24.3-6 and § 34-18-22(a)(5) state overlapping trash duties with different thresholds (rule 31 pair; both stated).
  - The official § 34-37-4 page prints the 18-or-older proviso as an unnumbered paragraph after (a), and a checker misread it as part of (b) (§13).
  - § 34-18-63 doesn't say what happens to a co-tenant's obligations when a survivor terminates (`edu-dv-lease-termination-ri` says the text doesn't say).
- **Library-wide:**
  - The MLS lease's force majeure (para. 27) and subordination (para. 38) terms have no library topic; no Rhode Island rule was found (§15).
  - The battery tool allowed reused names (§1.3).
  - Subsidy-format exceptions like § 34-18-15(a)(1)'s may exist in other states' fee-disclosure rules.

## 11. Deliverables
- `lease-clauses-RI-delta.csv` (384 rows; sha256 91016dfef20fec1dd7762c913b59be37c4a39ba2bcd4ecf7cc56186a45c32531).
- `lease-clause-decision-log-RI.md` (this file).
Both were delivered to Taylor's Downloads folder and to the chat; sizes and hashes were checked after delivery.

## 12. Kickoff leads — what each turned out to be
1. **Currency.** Confirmed: every 2025 law is compiled and no 2026 law is. The 2026 acts were found at `/PublicLaws/law26/`, screened (427) and indexed. Those that change Rhode Island rows are chs. 147, 148 (survivors, §§ 34-18-63 to -67, July 1, 2026), chs. 165, 166 (shoreline disclosure, 2027), chs. 44, 45 (asbestos), ch. 282 (jury-waiver timing, 2027) and chs. 327, 328 (SAFE Units) (§1.2).
2. **Fee and utility disclosure.** `fee-disclosure-ri` (REQUIRED, Rent section, subsidy exception), `utilities-responsibility-ri` (REQUIRED), renters insurance in `edu-renters-insurance-ri` with the shared `tenants-property-insurance-ks-oh-ca` tagged; recovery of undisclosed fees in `edu-fee-disclosure-ri`; layout §4.
3. **Fees.** Application-fee ban and the report-cost exception in `edu-application-fees-ri` and `due-at-signing-ri`; convenience fees in `edu-convenience-fee-ri` (the shared `acceptable-payment-methods` tagged with that note). `keys` overridden (`keys-ri`); `hoa-compliance` tagged with the fee and condominium notes; pet fees in `pet-policy-ri` and `edu-pet-fees-ri`.
4. **Deposits.** Confirmed; "however denominated" sweeps in pet and other deposits (`due-at-signing-ri`, `edu-security-deposit-cap-ri`). Last month's rent is treated as prepaid rent (§6.3). No interest or escrow rule (`edu-no-deposit-interest-ri`, `edu-no-deposit-holding-rule-ri`; batteries RI-deposit-interest-1 to -4, RI-deposit-escrow-1, RI-deposit-holding-1 to -3).
5. **Rent increases.** Confirmed (`edu-rent-increase-notice-ri`, `rent-increase-midterm-ri`); the assisted-living exclusion and § 34-18-16.1(c) recorded.
6. **Prohibited terms.** Confirmed (`edu-prohibited-lease-terms-ri`, `edu-knowing-use-penalty-ri`). No late-fee limit anywhere in the code (`edu-no-late-fee-limit-ri`; RI-late-fee-1 to -5).
7. **Entry.** Confirmed; consent-based. The dormant row was verified and left off (§5).
8. **Ending a tenancy.** Confirmed in `default-by-tenant-ri`, `edu-eviction-process-ri`, `edu-termination-notice-ri`, `edu-rental-registry-ri` (the § 34-18-58 registration condition), `edu-eviction-record-sealing-ri`, `edu-post-eviction-property-ri`, `abandoned-property-ri` and `edu-foreclosure-tenants-ri` (§ 34-18-38.2, with its sale-contract and FHA exceptions after round 3).
9. **Disclosures and registration.** `owner-manager-disclosure-ri`, `edu-adverse-proceeding-notice-ri` (120-day delinquency notice), `edu-nonresident-landlord-agent-ri`, `edu-rental-registry-ri`, `edu-lead-certificate-ri`; the exits in `early-termination-ri`, `edu-infirmity-termination-ri` and `edu-servicemember-rights-ri`.
10. **Lead.** `lead-disclosure-ri` (state additions, own page), `edu-lead-certificate-ri`, `edu-lead-tenant-notices-ri` (including lead service lines, § 23-24.6-28).
11. **Fair housing and screening.** `edu-fair-housing-ri`, `edu-source-of-income-ri` (lawful source of income, R.I. Pub. L. 2021, chs. 3, 4), domestic-abuse victim status in `edu-dv-eviction-protection-ri`, `edu-immigration-status-ri` (an inquiry ban, § 34-18-62(a)), `edu-tenant-screening-ri`.
12. **Whole-code search.** Chapter 34-18.2 (an exception noted where it applies, outside scope), chapter 34-36.1 (§6.3), § 34-18-57 (`edu-absentee-landlord-registration-ri`), the Deceptive Trade Practices Act (`edu-consumer-protection-act-ri`), mobile homes (outside the library; exceptions noted, e.g. `edu-no-lease-copy-duty-ri`); §17.
13. **Local rules.** Flagged, not resolved (rule 3).

## 13. Independent check
Separate agents, none of which drafted rows, checked the rows against the saved sources, one at a time (`work/check/CHECK-BRIEF.md`). Each was told that earlier findings may be wrong and that proposed wording must quote the subsections it relies on. Fixes were made by separate fixer agents in rounds 1 and by the lead in rounds 2-3. Every fix was re-read against the statute and recorded as an errata line (`work/check/errata-*.jsonl`) that the merge script applies with assertions.
| Round | Rows | ERROR | FIX | NOTE | Edits applied | Notes |
|---|---|---|---|---|---|---|
| 1 | 384 (4 batches, one agent at a time) | 10 | 98 | 33 | 299 errata lines on 164 rows | 1 finding rejected by the lead (`permitted-occupants`: the 18-or-older proviso is the unnumbered paragraph after § 34-37-4(a), "Nothing in this section ..."); library-wide sweeps added "up to" to awards, the § 34-18-15(a)(1) subsidy exception, "the statute doesn't say" for undecided points, and removed working-file pointers |
| 2 | 164 (rows edited in round 1; 2 batches) | 1 | 15 | 8 | 24 errata lines on 18 rows | ERROR: `edu-condo-tenant-rules-ri` denied an antenna rule that § 39-19-10(2) states; also cleared NEEDS_REVIEW on `edu-cannabis-ri` and `edu-eviction-service-party-ri` after whole-section reads |
| 3 | 18 (rows edited in round 2) | 0 | 7 | 0 | 11 errata lines on 8 rows | All round-2 edits correct; the FIXes were gaps the edits exposed |
Round-1 ERRORs, all fixed:
- `lead-disclosure-ri`: elderly and disability exemption.
- `edu-rent-escalation-ri`: § 6A-2.1-222.
- `edu-rent-increase-notice-ri` and `edu-no-habitability-presumption-ri`: the retaliation presumption.
- `edu-rent-tax-ri`: rooming houses.
- `edu-no-purpose-limitation-ri`: §§ 11-19-23, 11-30-6.
- `edu-no-lease-copy-duty-ri`: § 31-44-7.2.
- `edu-no-pest-control-notice-ri`: § 23-25-38(a).
- `edu-immigration-status-ri`: an inquiry ban, not a decision ban.
- `edu-knowing-use-penalty-ri`: the § 34-18-17(b) penalty reaches waivers of the 2026 sections.
**Edited after the last check** (round 3's FIXes, applied; Claude Code reads them against the statute at sync):
- `automatic-renewal-ri` (notes: "the only statute requiring notice of an automatic lease renewal, § 6-13-14").
- `edu-eviction-service-party-ri` (notes: dropped "read for that passage only").
- `edu-for-cause-eviction-ri` (body: the § 34-18-38.2(a) sale-contract and FHA grounds as separate grounds).
- `edu-foreclosure-tenants-ri` (body: the same grounds; sibling fix).
- `edu-holdover-rate-ri` (notes: § 34-18-49 quote).
- `edu-no-health-district-rules-ri` (body and notes: the § 34-18-46(c) exceptions).
- `edu-no-property-tax-rent-statement-ri` (notes: § 44-33-9(1) quote).
- `edu-rent-tax-ri` (notes: subsection label (n)(ii) and a duplicate quote removed).

## 14. Statute walk (gap-discovery source 1)
Chapter 34-18 (68 sections in the official index, §§ 34-18-1 to 34-18-62 with decimals) was read whole from the saved corpus (`work/read-34-18.md`), and R.I. Pub. L. 2026, chs. 147 (§§ 34-18-63 to -67) and 165 (§ 34-18-20(e)) were read whole. A script diffed the chapter index against every section cited in a Rhode Island row. Five sections are not cited, and none carries lease content:
- § 34-18-1 (short title) and § 34-18-2 (purposes and construction).
- § 34-18-12 (obligation of good faith on every duty and remedy; a general principle, no lease term).
- § 34-18-54 (savings clause for pre-1987 transactions) and § 34-18-55 (severability of the chapter).
The walk also read §§ 34-36.1-1.02 and 34-36.1-4.12, chapter 34-45, §§ 34-37-4 and 34-37-5.5, chapter 45-24.3 (housing maintenance code, at the sections cited), chapter 42-128.1 (lead), § 21-28.11-29 and § 21-28.6-4 (cannabis), and § 39-12.1-12 (towing).

## 15. Real-lease comparison (gap-discovery source 2)
- **Lease:** the State-Wide Multiple Listing Service Residential Lease Agreement, Rev. Dec. 2012 (45 numbered paragraphs; text saved as `ri-mls-residential-lease.txt`). It is a Realtor form widely used in Rhode Island and a landlord-side document; it was read for terms the library might lack, not as law.
- **Mapping:**
  - Parties, date, premises, term (1-4) → builder fields and `notices`.
  - Joint and several (5) → `joint-liability`.
  - Rent (6) → `rent-payment`, `late-fee-ri`, `returned-payments-ri`, `fee-disclosure-ri`.
  - Deposits (7) and return (31) → `due-at-signing-ri`, `security-deposit-use-ri`, `edu-security-deposit-return-ri`.
  - Appliances (8) → `appliances-included`, `appliances-excluded-ri`.
  - Condition (9) → `existing-condition`.
  - Utilities (10, which quotes § 34-18-22's heat and hot-water duty) → `utilities-responsibility-ri`, `edu-heating-ri`.
  - Trash (11) → `tenant-maintenance`, `edu-tenant-statutory-duties-ri`.
  - Occupants and guests (12) → `permitted-occupants`, `guest-policy`.
  - Assignment (13) → `no-sublet-assign`.
  - Use (14) → `residential-use-only`, `rules-ia`, `smoking-policy`.
  - Noise (15) → `no-disturbance`.
  - Alterations (16) → `no-alterations`.
  - Storage and parking (17, 18) → `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `parking-vehicle-rules-ri`.
  - Pets (19) → `pet-policy-ri`.
  - Tenant duties (20) → `tenant-maintenance`, `landscaping-irrigation-ri`, `snow-removal-ri`.
  - Lead notice (21) → `lead-disclosure-ri`, `edu-lead-tenant-notices-ri`.
  - Absence and abandonment (22) → `extended-absence-notice-ri`, `abandoned-property-ri`.
  - Access (23) → `landlords-access-ri`.
  - Code violations (24) → `housing-code-violations-disclosure-ri`.
  - Landlord duties (25) → `landlord-maintenance`.
  - Tenant property (26, a "not liable" disclaimer) → `tenants-property-insurance-ks-oh-ca`. The disclaimer itself is void in Rhode Island (`edu-no-exculpatory-clauses-ri`).
  - Holdover (28) → `holdover-ca`, `edu-holdover-rate-ri`.
  - Rent increase (29) → `edu-rent-increase-notice-ri`.
  - Surrender (30) → `surrender-end-of-term`.
  - Change of ownership (32) → `edu-sale-or-management-change-ri`, `edu-deposit-on-sale-ri`.
  - Remedies (33, 34) → `default-by-tenant-ri`, `edu-landlord-remedies-ri`, `edu-tenant-repair-remedies-ri`.
  - Non-resident landlord (35) → `edu-nonresident-landlord-agent-ri`.
  - Notices (36) → `notices`, `electronic-notice-ma`.
  - Forms receipt (37) → `lead-disclosure-ri`, `landlord-insurance-disclosure-ri`.
  - Recording (39) → `edu-statute-of-frauds-ri` (§ 34-11-1 recording).
  - Law, severability, modification, entire lease, addenda (40-44) → `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`.
- **Not in the library:** force majeure (27) and subordination (38). Batteries RI-mls-force-majeure-1 (3 hits: aviation leases, a tax credit) and RI-mls-subordination-1 (7 hits: recording of subordination agreements, § 34-24-8; receivership; goods leases) found no Rhode Island rule on either in a residential lease. No row was added; both are flagged as library-wide topics (§10).

## 16. Landlord-scenario screen (gap-discovery source 3)
Claude generated 110 scenarios from application to move-out, sale and foreclosure (`tools/scenarios.py`), including Rhode Island-specific ones: the rental registry, shoreline disclosure, housing-code violation disclosure, seasonal tenancies, condominium conversion and private wells. Each was run against the merged Rhode Island rows. Three had at most one answer: mold (answered by the confirmed absence `edu-no-mold-disclosure-ri`), asbestos and tenant bankruptcy. The last two were searched:
- **Asbestos** (RI-scen-asbestos-1, 4 hits): chapter 23-24.5 bars an owner from letting anyone be exposed to friable asbestos in violation of the chapter, its rules or an abatement plan (§ 23-24.5-5(a)). It also lets any occupant request a Department of Health inspection with a 45-day answer and confidentiality (§ 23-24.5-11). New row `edu-asbestos-hazards-ri` (PROHIBITED after round 1).
- **Tenant bankruptcy** (RI-scen-bankruptcy-1, 11 hits): no Rhode Island rule; § 34-18-3(a) lists bankruptcy among the supplementary principles. New confirmed-absence row `edu-no-tenant-bankruptcy-rule-ri`, which points to federal law (not checked).
The table gives each scenario and the best-matching rows (a script ranks id and topic matches above title and body matches; eight entries were corrected by hand where the keyword match was weak):
| # | Scenario | RI rows (best matches) |
|---|---|---|
| A1 | Applicant asks what screening fee can be charged | `edu-application-fees-ri`, `due-at-signing-ri`, `edu-due-at-signing-ri` |
| A2 | Landlord wants to run a credit/background check; what may be asked | `edu-tenant-screening-ri`, `edu-application-fees-ri`, `edu-no-employee-screening-mandate-ri` |
| A3 | Applicant pays with a housing voucher (source of income) | `edu-source-of-income-ri`, `edu-voucher-inspections-ri`, `edu-cares-act-notice` |
| A4 | Landlord asks about immigration status | `edu-immigration-status-ri`, `edu-no-foreign-ownership-rule-ri`, `edu-no-rental-application-accuracy-ri` |
| A5 | Applicant has an eviction record that was sealed | `edu-eviction-record-sealing-ri`, `edu-eviction-process-ri`, `edu-no-rental-application-accuracy-ri` |
| A6 | Applicant has a criminal record | `criminal-activity-ri`, `edu-criminal-eviction-track-ri`, `edu-application-fees-ri` |
| A7 | Applicant with children / familial status, occupancy limits | `edu-families-with-children-ri`, `edu-no-certificate-of-occupancy-disclosure-ri`, `edu-no-lease-font-rules-ri` |
| A8 | Applicant asks for a reasonable accommodation (disability) | `assistance-animal-accommodation`, `edu-assistance-animals-ri`, `edu-disability-accommodation-ri` |
| A9 | Holding deposit to take unit off the market | `edu-no-deposit-holding-rule-ri`, `edu-no-holding-deposit-rule-ri`, `edu-attorney-fees-ri` |
| A10 | Landlord must register the unit before renting | `edu-absentee-landlord-registration-ri`, `edu-rental-registry-ri`, `edu-sex-offender-occupancy-ri` |
| A11 | Advertising the rental (discriminatory ads, fees in ads) | `common-area-use`, `edu-consumer-protection-act-ri`, `edu-fair-housing-ri` |
| A12 | Broker fee / finder fee charged to tenant | `edu-application-fees-ri`, `due-at-signing-ri` |
| B1 | What goes in the security deposit; maximum | `edu-deposit-nonwaiver-ri`, `edu-deposit-on-sale-ri`, `edu-deposit-penalty-ri` |
| B2 | Last month rent collected up front | `edu-last-month-rent-ri`, `edu-due-at-signing-ri` |
| B3 | Pet deposit on top of security deposit | `edu-pet-fees-ri`, `assistance-animal-accommodation`, `edu-security-deposit-cap-ri` |
| B4 | Owner/manager identity disclosure | `edu-owner-manager-disclosure-ri`, `owner-manager-disclosure-ri`, `edu-no-emergency-contact-rule-ri` |
| B5 | Lead paint disclosure, pre-1978 | `edu-lead-certificate-ri`, `edu-lead-disclosure-ri`, `edu-lead-tenant-notices-ri` |
| B6 | Move-in condition checklist | `edu-existing-condition-ri`, `edu-no-move-in-inspection-rule-ri`, `edu-no-owner-move-in-reservation-ri` |
| B7 | Signing electronically | `edu-electronic-records-ri`, `electronic-signatures` |
| B8 | Translation / language of lease | `edu-no-plain-language-lease-law-ri`, `edu-no-translation-duty-ri`, `edu-quiet-possession-ri` |
| B9 | Copy of lease to tenant | `edu-no-lease-copy-duty-ri`, `edu-lead-disclosure-ri`, `edu-lease-content-requirements-ri` |
| B10 | Fees disclosure in the lease | `edu-fee-disclosure-ri`, `fee-disclosure-ri` |
| B11 | Utilities: who pays, shared meters | `edu-municipal-utility-lien-ri`, `edu-no-submeter-interruption-ri`, `edu-no-utility-allowance-rule-ri` |
| B12 | Renters insurance required | `edu-no-tenant-insurance-claim-rule-ri`, `edu-renters-insurance-ri`, `tenants-property-insurance-ks-oh-ca` |
| B13 | Smoke/CO detectors | `edu-no-smoke-drift-waiver-ri`, `edu-alarm-duties-ri`, `criminal-activity-ri` |
| B14 | Flood zone / flood history disclosure | `edu-no-flood-disclosure-ri`, `edu-no-disaster-tenancy-rule-ri` |
| B15 | Foreclosure / mortgage delinquency disclosure | `edu-foreclosure-tenants-ri`, `edu-adverse-proceeding-notice-ri`, `edu-for-cause-eviction-ri` |
| B16 | Shoreline access disclosure | `shoreline-access-disclosure-ri`, `edu-lease-content-requirements-ri`, `edu-no-flood-disclosure-ri` |
| B17 | Housing code violations disclosure | `housing-code-violations-disclosure-ri`, `edu-for-cause-eviction-ri`, `edu-government-fines-passthrough-ri` |
| B18 | Bed bugs | `bed-bug-cooperation-ri`, `edu-no-bed-bug-disclosure-ri`, `edu-pest-treatment-ri` |
| B19 | Mold | `edu-no-mold-disclosure-ri` |
| B20 | Radon | `edu-no-radon-disclosure-ri`, `edu-no-contamination-disclosure-ri`, `edu-no-prop65-warning-ri` |
| B21 | Asbestos | `edu-asbestos-hazards-ri` |
| B22 | Private well water | `edu-private-well-testing-ri`, `edu-no-certificate-of-occupancy-disclosure-ri`, `edu-no-contamination-disclosure-ri` |
| C1 | Rent due date, grace period, late fee | `edu-late-fee-ri`, `edu-no-late-fee-limit-ri`, `edu-no-subsidy-late-fee-rule-ri` |
| C2 | Bounced check | `edu-returned-payments-ri`, `returned-payments-ri`, `edu-statutory-caps-ri` |
| C3 | Cash payment receipt | `edu-no-rent-receipt-rule-ri`, `abandoned-property-ri`, `edu-abandonment-mitigation-ri` |
| C4 | Online payment convenience fee | `edu-convenience-fee-ri`, `assigned-parking-space`, `edu-confirmed-absences-misc-ri` |
| C5 | Rent increase notice | `edu-rent-increase-notice-ri`, `rent-increase-midterm-ri`, `edu-tax-escalation-ri` |
| C6 | Entry for repairs/showings | `edu-accessory-dwelling-unit-ri`, `edu-landlord-entry-ri`, `edu-no-candidate-access-rule-ri` |
| C7 | Emergency entry | `edu-no-emergency-assistance-right-ri`, `edu-no-emergency-contact-rule-ri`, `bed-bug-cooperation-ri` |
| C8 | Tenant away for weeks | `edu-confirmed-absences-habitability-ri`, `edu-confirmed-absences-misc-ri`, `edu-confirmed-absences-outside-title-ri` |
| C9 | Repairs: landlord duties, habitability | `edu-confirmed-absences-habitability-ri`, `edu-habitability-waiver-ri`, `edu-landlord-maintenance-ri` |
| C10 | Tenant withholds rent / repair and deduct | `edu-self-help-eviction-ri`, `bed-bug-cooperation-ri`, `edu-attorney-fees-ri` |
| C11 | No heat in winter | `edu-heating-ri`, `edu-unclaimed-deposit-refund-ri`, `edu-water-heater-temperature-ri` |
| C12 | Hot water | `edu-water-heater-temperature-ri`, `edu-alt-housing-ri`, `edu-confirmed-absences-habitability-ri` |
| C13 | Pest infestation | `edu-no-pest-control-notice-ri`, `edu-pest-treatment-ri`, `bed-bug-cooperation-ri` |
| C14 | Tenant changes locks / asks for lock change (DV) | `edu-dv-lockchange-ri`, `edu-no-lockout-for-rent-ri`, `edu-keys-ri` |
| C15 | Guests staying long / unauthorized occupant | `edu-guest-policy-ri`, `edu-no-disaster-guest-rule-ri`, `edu-no-guest-rights-ri` |
| C16 | Subletting / Airbnb by tenant | `edu-sublet-assign-ri`, `no-sublet-assign`, `edu-accessory-dwelling-unit-ri` |
| C17 | Pets and assistance animals | `assistance-animal-accommodation`, `edu-assistance-animals-ri`, `edu-no-pet-eviction-fact-sheet-ri` |
| C18 | Smoking, cannabis | `edu-cannabis-ri`, `edu-no-smoke-drift-waiver-ri`, `edu-smoking-policy-ri` |
| C19 | Noise / disturbances | `edu-disturbance-ri`, `edu-quiet-possession-ri`, `no-disturbance` |
| C20 | Parking and towing | `assigned-parking-space`, `edu-no-parking-statute-ri`, `edu-no-unbundled-parking-rule-ri` |
| C21 | Snow removal | `edu-snow-removal-ri`, `snow-removal-ri` |
| C22 | Lawn care | `edu-landscaping-ri`, `landscaping-irrigation-ri` |
| C23 | Tenant alterations, painting | `edu-tenant-alterations-ri`, `no-alterations`, `edu-condemned-premises-ri` |
| C24 | Satellite dish / antenna | `edu-condo-tenant-rules-ri`, `edu-telecom-access-ri` |
| C25 | Grills / fire safety | `edu-fire-code-standard-ri`, `edu-fire-sprinkler-duty-ri`, `edu-no-firearms-lease-rule-ri` |
| C26 | Fire, casualty damage | `casualty-termination-ri`, `edu-casualty-mitigation-nonwaivable-ri`, `edu-casualty-termination-ri` |
| C27 | Retaliation after complaint | `edu-retaliation-ri`, `edu-attorney-fees-ri`, `edu-dv-eviction-protection-ri` |
| C28 | Utility shutoff by landlord | `edu-no-submeter-interruption-ri`, `edu-utility-service-continuity-ri`, `edu-utility-shutoff-rules-ri` |
| C29 | Landlord fails to pay utility bill (tenant pays utility) | `edu-abandoned-building-receivership-ri`, `utility-payment-evidence`, `edu-fees-as-rent-ri` |
| C30 | Sale of the property / new owner | `edu-deposit-on-sale-ri`, `edu-no-utility-transfer-cutoff-ri`, `edu-sale-or-management-change-ri` |
| C31 | Tenant is victim of domestic violence | `edu-dv-confidentiality-ri`, `edu-dv-deposit-timing-ri`, `edu-dv-eviction-protection-ri` |
| C32 | Military deployment | `edu-servicemember-rights-ri`, `early-termination-ri` |
| C33 | Tenant dies | `edu-tenant-death-ri` |
| C34 | Abandoned property / tenant left belongings | `abandoned-property-ri`, `edu-abandoned-building-receivership-ri`, `edu-abandonment-mitigation-ri` |
| C35 | Tenant files bankruptcy | `edu-no-tenant-bankruptcy-rule-ri` |
| C36 | Rental property in an HOA / condo | `edu-condo-leasing-rules-ri`, `edu-condo-tenant-rules-ri`, `edu-no-association-disclosure-ri` |
| C37 | Window guards / child safety | `edu-no-window-guard-rule-ri`, `edu-no-portable-cooling-right-ri`, `edu-disturbance-ri` |
| C38 | Electric vehicle charging | `edu-no-ev-charging-requirements-ri`, `edu-no-ev-charging-end-of-tenancy-ri`, `edu-no-ev-charging-right-ri` |
| C39 | Religious/cultural displays, flags | `edu-no-flag-sign-right-ri`, `edu-religious-display-ri`, `common-area-use` |
| C40 | Rent concession / discount | `edu-rent-concession-ri`, `rent-concession-wi` |
| C41 | Water submetering | `edu-no-submeter-disclosure-ri`, `edu-no-submeter-interruption-ri` |
| C42 | Tax escalation pass-through | `edu-no-property-tax-rent-statement-ri`, `edu-rent-tax-ri`, `edu-tax-escalation-ri` |
| C43 | Tenant caused damage | `edu-no-liquidated-damages-rule-ri`, `edu-tenant-caused-damage-ri`, `edu-unpaid-damages-interest-ri` |
| C44 | Interest on deposit | `edu-no-deposit-interest-ri`, `edu-unpaid-damages-interest-ri`, `edu-collection-fee-ri` |
| C45 | Landlord liability insurance | `landlord-insurance-disclosure-ri`, `edu-landlord-liability-insurance-ri`, `edu-lease-content-requirements-ri` |
| C46 | Tenant asks to see code inspection / calls inspector | `edu-code-violation-disclosure-ri`, `edu-inspection-rights-ri`, `edu-no-balcony-inspection-ri` |
| C47 | Accessible parking / modifications for disability | `edu-disability-accommodation-ri` |
| C48 | Tenant organizing / tenant union | `edu-tenant-organizing-ri`, `edu-criminal-eviction-track-ri`, `edu-fair-housing-ri` |
| D1 | Month-to-month termination notice | `edu-no-periodic-services-entry-ri`, `edu-termination-notice-ri`, `early-termination-ri` |
| D2 | Fixed-term ends; holdover | `edu-holdover-rate-ri`, `holdover-ca`, `edu-attorney-fees-ri` |
| D3 | Automatic renewal clause | `automatic-renewal-ri`, `edu-no-automatic-renewal-rule-ri`, `edu-no-guarantor-rule-ri` |
| D4 | Tenant breaks lease early; mitigation | `early-termination-ri`, `edu-abandonment-mitigation-ri`, `edu-casualty-mitigation-nonwaivable-ri` |
| D5 | Nonpayment eviction notice | `default-by-tenant-ri`, `edu-nonpayment-notice-ri`, `edu-redemption-ri` |
| D6 | Breach other than rent, cure period | `edu-cure-and-eviction-grounds-ri`, `landlord-self-cure-ri`, `edu-severability-limits-ri` |
| D7 | Eviction court process, summons | `edu-criminal-eviction-track-ri`, `edu-cure-and-eviction-grounds-ri`, `edu-dv-eviction-protection-ri` |
| D8 | Lockout / self-help eviction | `appliances-excluded-ri`, `edu-appliances-excluded-ri`, `edu-no-lockout-for-rent-ri` |
| D9 | Accepting rent after notice (waiver) | `edu-deposit-nonwaiver-ri`, `edu-habitability-waiver-ri`, `edu-jury-waiver-ri` |
| D10 | Security deposit return timing and itemization | `edu-no-utility-deposit-ri`, `edu-security-deposit-return-ri`, `edu-deposit-nonwaiver-ri` |
| D11 | Move-out cleaning, carpet charges | `tenant-maintenance`, `edu-common-area-lighting-ri`, `edu-deposit-nonwaiver-ri` |
| D12 | Forwarding address | `abandoned-property-ri`, `edu-deposit-penalty-ri`, `edu-no-abandoned-property-procedure-ri` |
| D13 | Seasonal rental ends | `seasonal-tenancy-ri`, `edu-cure-and-eviction-grounds-ri`, `edu-disturbance-ri` |
| D14 | Foreclosure of landlord: tenant rights | `edu-foreclosure-tenants-ri`, `edu-adverse-proceeding-notice-ri`, `edu-for-cause-eviction-ri` |
| D15 | Condo conversion; tenant purchase rights | `edu-condo-conversion-ri`, `edu-tenant-purchase-rights-ri`, `edu-deposit-on-sale-ri` |
| D16 | Elderly/disabled tenant extra time on eviction | `edu-rent-increase-notice-ri` (120 days over 62), `edu-infirmity-termination-ri`, `early-termination-ri` |
| D17 | Jury trial waiver / attorney fees | `edu-attorney-fees-ri`, `edu-jury-waiver-ri`, `criminal-activity-ri` |
| D18 | Rent receivership / court rent escrow | `edu-rent-into-court-ri`, `edu-tenant-repair-remedies-ri`, `edu-abandoned-building-receivership-ri` |
| D19 | Criminal activity in unit | `criminal-activity-ri`, `edu-no-drug-free-addendum-ri`, `edu-criminal-eviction-track-ri` |
| D20 | Keys returned at move-out | `edu-keys-ri`, `keys-ri`, `edu-no-employee-screening-mandate-ri` |
| D21 | Surrender of premises | `edu-no-deposit-refund-conditions-ri`, `edu-surrender-end-of-term-ri`, `surrender-end-of-term` |
| D22 | Tenant's spouse/co-tenant leaves | `edu-joint-liability-ri`, `joint-liability`, `edu-dv-deposit-timing-ri` |
| D23 | Mobile/manufactured home lots (not covered) | out of scope (mobile home parks, ch. 31-44); `edu-scope-ri` |
| D24 | Rooming house / lodger / hotel guest exclusion | `edu-rent-tax-ri`, `edu-accessory-dwelling-unit-ri`, `edu-consumer-protection-act-ri` |
| D25 | Landlord moves in / owner occupancy | `edu-no-single-family-zone-lease-limit-ri`, `edu-accessory-dwelling-unit-ri`, `edu-fair-housing-ri` |
| D26 | Rent control / local rent stabilization | `edu-no-rent-control-ri` (municipal rules flagged, rule 3) |
| D27 | Eviction record sealing after case | `edu-eviction-record-sealing-ri`, `edu-eviction-process-ri`, `edu-no-rental-application-accuracy-ri` |
| D28 | Sale: deposit transfer to new owner | `edu-no-utility-transfer-cutoff-ri`, `criminal-activity-ri`, `edu-cannabis-ri` |

## 17. Outside-title search and proof of absence (gap-discovery source 4)
- **Loaded before the first battery:** the whole General Laws (34,777 section pages, every dated version), the Constitution (135 units), three RICR parts, the District Court civil rules and two Supreme Court rule sets, and every 2025 and 2026 public law (§1.1).
- **Outside title 34, found and used:**
  - The Deceptive Trade Practices Act (§§ 6-13.1-1, -2; `edu-consumer-protection-act-ri`) and UCC Article 2A's tax pass-through (§ 6A-2.1-222; `tax-escalation-ri`, `edu-rent-escalation-ri`).
  - Collection agencies (§ 19-14.9-8), cannabis (§§ 21-28.11-29, 21-28.6-4), lead (chapters 42-128.1, 23-24.6), asbestos (chapter 23-24.5), radon (chapter 23-61) and private wells (§ 23-1-5.3).
  - Fire safety (chapter 23-28.1), towing (§ 39-12.1-12), utility shutoffs (§§ 39-1.1-1, 39-2-1.1), cable antennas (§ 39-19-10), sewer-fee shutoffs (§§ 45-6-9(c), 46-25-22.1(d)) and the housing maintenance code (chapter 45-24.3).
  - Nuisance and gambling-house leases (§§ 11-30-6, 11-19-23), rent tax (§§ 44-18-7.1, 44-18-18, 44-18-36.1), property tax relief (§§ 44-33-3, 44-33-9) and the statute of frauds and recording (§§ 9-1-4, 34-11-1).
  - Federally assisted housing (chapter 34-45), mobile homes (chapter 31-44, exceptions only) and the District Court Language Assistance Notice (D.C.R. 4(d)).
- **Confirmed absences** (each with its own row and battery): no late-fee cap; no deposit interest or escrow; no abandoned-property procedure beyond § 34-18-40 and § 34-18-50; no rent control; no general just-cause law; no automatic-renewal rule for leases; no radon, mold, flood, bed-bug or meth disclosure; no plain-language or type-size rule; no tenant-bankruptcy rule. The topic canvass (§18) holds 142 more. Each absence row names the corpus searched in its body (round-1 rule 19 fixes).

## 18. Topic reference canvass (rules 27, 36)
Two agents at a time canvassed the 344 topics in `lease-clause-topics.md` in eight slices (A1-A4, B1-B4), each saving one JSON line per topic, briefed with the planned Rhode Island clauses (`work/canvass/BRIEF.md`). One slice stopped at 38 of 43 topics and the next agent finished it. 24 erratum lines were applied at merge. Statuses: Present 138, Present (clause) 61, Confirmed absent 142, Not located 2 (`frozen-standard-incorporation`, `fire-sprinkler-duty`: the fire code regulations are not loaded, §7), Not applicable 1 (`prop65-rental-warning`). Eighteen topics have no row keyed to them but are answered by rows under another key, shown below. The four new topics are in §3.2.
- `acceptable-payment-methods`: Present (clause). Rows: `acceptable-payment-methods`, `edu-convenience-fee-ri`
- `algorithmic-rent-setting`: Confirmed absent. Rows: `edu-no-algorithmic-rent-rule-ri`
- `application-fees`: Present. Rows: `edu-application-fees-ri`
- `application-of-payments`: Present (clause). Rows: `application-of-payments`, `edu-no-payment-application-order-ri`
- `collection-fee`: Present. Rows: `edu-collection-fee-ri`
- `due-at-signing`: Present (clause). Rows: `due-at-signing-ri`, `edu-due-at-signing-ri`
- `fee-transparency`: Present (clause). Rows: `edu-fee-disclosure-ri`, `fee-disclosure-ri`
- `fee-unprovided-service`: Confirmed absent. Rows: `edu-no-fee-unprovided-service-ri`
- `fees-as-rent`: Present. Rows: `edu-fees-as-rent-ri`
- `government-fee-reimbursement`: Confirmed absent. Rows: `edu-no-government-fee-passthrough-ri`
- `late-fee`: Present. Rows: `edu-late-fee-ri`, `late-fee-ri`
- `late-fee-limit`: Confirmed absent. Rows: `edu-no-late-fee-limit-ri`
- `lease-type-parity`: Confirmed absent. Rows: `edu-no-lease-type-parity-ri`
- `notice-service-fee`: Confirmed absent. Rows: `edu-no-notice-fee-rule-ri`
- `rent-concession`: Present (clause). Rows: `edu-rent-concession-ri`, `rent-concession-wi`
- `rent-control`: Confirmed absent. Rows: `edu-no-rent-control-ri`
- `rent-escalation`: Present (clause). Rows: `edu-rent-escalation-ri`, `rent-increase-midterm-ri`
- `rent-increase-notice`: Present. Rows: `edu-rent-increase-notice-ri`
- `rent-installments`: Present (clause). Rows: `edu-rent-installments-ri`, `rent-installments-or`
- `rent-payment`: Present (clause). Rows: `rent-payment`
- `rent-receipts`: Confirmed absent. Rows: `edu-no-rent-receipt-rule-ri`
- `rent-reporting`: Confirmed absent. Rows: `edu-no-rent-reporting-rule-ri`
- `rent-tax`: Present. Rows: `edu-rent-tax-ri`
- `required-fees`: Present (clause). No row keyed here; covered by `fee-disclosure-ri`, `edu-fee-disclosure-ri`
- `returned-payments`: Present. Rows: `edu-returned-payments-ri`, `returned-payments-ri`
- `shutdown-rent-protection`: Confirmed absent. Rows: `edu-no-shutdown-protection-ri`
- `statutory-caps`: Present. Rows: `edu-statutory-caps-ri`
- `subsidy-late-fee`: Confirmed absent. Rows: `edu-no-subsidy-late-fee-rule-ri`
- `tax-escalation`: Present. Rows: `edu-tax-escalation-ri`, `tax-escalation-ri`
- `unpaid-damages-interest`: Present. Rows: `edu-unpaid-damages-interest-ri`
- `veterans-incentive`: Confirmed absent. Rows: `edu-no-veterans-incentive-ri`
- `waiver-by-acceptance`: Present. Rows: `edu-waiver-by-acceptance-ri`
- `condition-inspection`: Confirmed absent. Rows: `edu-no-move-in-inspection-rule-ri`
- `deposit-cost-schedule`: Confirmed absent. Rows: `edu-no-deposit-cost-schedule-ri`
- `deposit-escheat`: Present. Rows: `edu-unclaimed-deposit-refund-ri`
- `deposit-installments`: Confirmed absent. Rows: `edu-no-deposit-installments-ri`
- `deposit-last-month-rent`: Confirmed absent. Rows: `edu-last-month-rent-ri`
- `deposit-surrender-notice`: Confirmed absent. Rows: `edu-no-deposit-refund-conditions-ri`
- `dv-deposit-timing`: Present. Rows: `edu-dv-deposit-timing-ri`
- `expedited-deposit-disposition`: Confirmed absent. Rows: `edu-no-expedited-deposit-ri`
- `fee-in-lieu-of-deposit`: Confirmed absent. Rows: `edu-no-fee-in-lieu-of-deposit-ri`
- `holding-deposit`: Confirmed absent. Rows: `edu-no-holding-deposit-rule-ri`
- `inspection-notice-penalty`: Confirmed absent. Rows: `edu-no-inspection-notice-penalty-ri`
- `nonrefundable-deposit-notice`: Confirmed absent. Rows: `edu-no-nonrefundable-deposit-ri`
- `nonrefundable-deposit-separate-notice`: Confirmed absent. Rows: `edu-no-nonrefundable-deposit-separate-notice-ri`
- `security-deposit-cap`: Present. Rows: `edu-security-deposit-cap-ri`
- `security-deposit-holding`: Confirmed absent. Rows: `edu-no-deposit-holding-rule-ri`
- `security-deposit-interest`: Confirmed absent. Rows: `edu-no-deposit-interest-ri`
- `security-deposit-nonwaiver`: Present. Rows: `edu-deposit-nonwaiver-ri`
- `security-deposit-on-sale`: Present. Rows: `edu-deposit-on-sale-ri`
- `security-deposit-penalty`: Present. Rows: `edu-deposit-penalty-ri`
- `security-deposit-return`: Present. Rows: `edu-security-deposit-return-ri`
- `security-deposit-standards`: Confirmed absent. Rows: `edu-no-deposit-standards-rule-ri`
- `security-deposit-use`: Present (clause). Rows: `edu-security-deposit-use-ri`, `security-deposit-use-ri`
- `utility-deposit-return`: Confirmed absent. Rows: `edu-no-utility-deposit-ri`
- `alterations`: Present (clause). Rows: `edu-tenant-alterations-ri`, `no-alterations`
- `bed-bug-cooperation`: Present. Rows: `bed-bug-cooperation-ri`, `edu-pest-treatment-ri`
- `cold-weather-vacate-notice`: Confirmed absent. Rows: `edu-no-cold-weather-vacate-notice-ri`
- `common-area-lighting`: Present. Rows: `edu-common-area-lighting-ri`
- `construction-liens`: Present. Rows: `edu-construction-liens-ri`, `no-liens-ri`
- `disturbance`: Present (clause). Rows: `edu-disturbance-ri`, `no-disturbance`
- `existing-condition`: Present (clause). Rows: `edu-existing-condition-ri`, `existing-condition`
- `extended-absence-notice`: Present (clause). Rows: `edu-extended-absence-ri`, `extended-absence-notice-ri`
- `family-child-care`: Confirmed absent. Rows: `edu-no-family-child-care-rule-ri`
- `home-business`: Confirmed absent. Rows: `edu-no-home-business-rule-ri`
- `joint-liability`: Present (clause). Rows: `edu-joint-liability-ri`, `joint-liability`
- `landscaping-irrigation`: Present (clause). Rows: `edu-landscaping-ri`, `landscaping-irrigation-ri`
- `municipal-utility-lien`: Present. Rows: `edu-municipal-utility-lien-ri`
- `permitted-occupants`: Present (clause). Rows: `edu-occupancy-limits-ri`, `permitted-occupants`
- `prohibited-acts-renter`: Present. Rows: `edu-tenant-prohibited-acts-ri`
- `purpose-limitation`: Confirmed absent. Rows: `edu-no-purpose-limitation-ri`
- `residential-use-only`: Present (clause). Rows: `residential-use-only`
- `smoking-policy`: Present (clause). Rows: `edu-smoking-policy-ri`, `smoking-policy`
- `sublet-assign`: Present (clause). Rows: `edu-sublet-assign-ri`, `no-sublet-assign`
- `tenant-forward-proceedings`: Confirmed absent. Rows: `edu-no-tenant-forward-duty-ri`, `tenant-forward-proceedings-ca`
- `tenant-insurance-claims`: Confirmed absent. Rows: `edu-no-tenant-insurance-claim-rule-ri`
- `tenant-maintenance`: Present (clause). Rows: `edu-tenant-maintenance-agreement-ri`, `tenant-maintenance`
- `tenant-statutory-duties`: Present. Rows: `edu-tenant-statutory-duties-ri`
- `utilities-responsibility`: Present (clause). Rows: `edu-utilities-responsibility-ri`, `utilities-responsibility-ri`
- `utility-interruption-submeter`: Confirmed absent. Rows: `edu-no-submeter-interruption-ri`
- `utility-payment-evidence`: Present (clause). Rows: `utility-payment-evidence`
- `utility-service-continuity`: Present (clause). Rows: `edu-utility-service-continuity-ri`, `utility-service-continuity`
- `alarm-duties`: Present. Rows: `edu-alarm-duties-ri`
- `alarm-tampering-fee`: Confirmed absent. Rows: `edu-no-alarm-tampering-fee-ri`
- `alt-housing`: Present. Rows: `edu-alt-housing-ri`
- `appliances-excluded`: Present. Rows: `appliances-excluded-ri`, `edu-appliances-excluded-ri`
- `appliances-included`: Present (clause). Rows: `appliances-included`
- `balcony-inspection`: Confirmed absent. Rows: `edu-no-balcony-inspection-ri`
- `condemned-premises-rent-bar`: Present. Rows: `edu-condemned-premises-ri`
- `confirmed-absences-habitability`: Confirmed absent. Rows: `edu-confirmed-absences-habitability-ri`
- `designated-repairer`: Confirmed absent. Rows: `edu-no-designated-repairer-ri`
- `disability-accommodation`: Present. Rows: `edu-disability-accommodation-ri`
- `disaster-duties`: Confirmed absent. Rows: `edu-no-disaster-tenancy-rule-ri`
- `double-letting`: Confirmed absent. Rows: `edu-no-double-letting-ri`
- `emergency-contact`: Confirmed absent. Rows: `edu-no-emergency-contact-rule-ri`
- `fire-code-standard`: Present. Rows: `edu-fire-code-standard-ri`
- `frozen-standard-incorporation`: Not located. No row keyed here; covered by `edu-fire-code-standard-ri`
- `furnishings-included`: Present. Rows: `furnishings-included-ri`
- `habitability-materiality`: Present. No row keyed here; covered by `edu-tenant-repair-remedies-ri`
- `habitability-modifiable`: Present. No row keyed here; covered by `edu-tenant-maintenance-agreement-ri`, `edu-habitability-waiver-ri`
- `habitability-presumption`: Confirmed absent. Rows: `edu-no-habitability-presumption-ri`
- `habitability-statement`: Confirmed absent. Rows: `edu-no-habitability-lease-statement-ri`
- `habitability-waiver`: Present. Rows: `edu-habitability-waiver-ri`
- `health-district-rental-rules`: Confirmed absent. Rows: `edu-no-health-district-rules-ri`
- `heating`: Present. Rows: `edu-heating-ri`
- `landlord-breach-remedy`: Present. No row keyed here; covered by `edu-tenant-repair-remedies-ri`
- `landlord-maintenance`: Present (clause). Rows: `edu-landlord-maintenance-ri`, `landlord-maintenance`
- `landlord-self-cure`: Present. Rows: `landlord-self-cure-ri`
- `maintenance-duty-shift`: Present. No row keyed here; covered by `edu-tenant-maintenance-agreement-ri`, `edu-habitability-waiver-ri`
- `other-landlord-facilities`: Present. Rows: `edu-other-landlord-facilities-ri`
- `pool-safety`: Present. Rows: `edu-pool-safety-ri`
- `promises-to-repair`: Confirmed absent. Rows: `edu-no-promises-to-repair-rule-ri`
- `quiet-possession`: Confirmed absent. Rows: `edu-quiet-possession-ri`
- `rent-demand-bar`: Present. Rows: `edu-rent-suspension-code-order-ri`
- `rent-receipt-anti-waiver`: Present. No row keyed here; covered by `edu-landlord-maintenance-ri`, `edu-habitability-waiver-ri`
- `rental-inspection`: Present. Rows: `edu-rental-inspection-ri`
- `repair-cost-termination`: Confirmed absent. Rows: `edu-no-repair-cost-termination-ri`
- `repair-escrow-exemption-notice`: Confirmed absent. Rows: `edu-no-small-landlord-remedy-exemption-ri`
- `repair-notice`: Present. Rows: `edu-repair-notice-ri`
- `security-devices`: Confirmed absent. Rows: `edu-no-security-devices-rule-ri`
- `services-utilities-provided`: Present (clause). Rows: `services-utilities-provided-ks-oh`
- `stove-refrigerator`: Present. No row keyed here; covered by `edu-appliances-excluded-ri`, `appliances-excluded-ri`
- `subsidy-habitability-proration`: Confirmed absent. Rows: `edu-no-subsidy-proration-rule-ri`
- `substandard-property-receivership`: Present. Rows: `edu-abandoned-building-receivership-ri`
- `telecom-access`: Present. Rows: `edu-telecom-access-ri`
- `tenant-repair-agreement`: Present. No row keyed here; covered by `edu-tenant-maintenance-agreement-ri`, `tenant-maintenance`
- `tenant-repair-remedies`: Present. Rows: `edu-tenant-repair-remedies-ri`
- `utilities-paid-by-landlord`: Present (clause). No row keyed here; covered by `utilities-responsibility-ri`, `edu-utilities-responsibility-ri`
- `utility-allowance-cap`: Confirmed absent. Rows: `edu-no-utility-allowance-rule-ri`
- `utility-apportionment`: Confirmed absent. Rows: `edu-no-utility-apportionment-ri`
- `utility-disclosure-attachment`: Confirmed absent. No row keyed here; covered by `edu-no-utility-apportionment-ri`, `edu-no-submeter-disclosure-ri`, `utilities-responsibility-ri`
- `utility-disconnection-notice-authorization`: Confirmed absent. Rows: `edu-no-utility-notice-authorization-ri`
- `utility-landlord-account`: Present. Rows: `edu-utility-landlord-account-ri`
- `utility-shutoff-statute`: Present. Rows: `edu-utility-shutoff-rules-ri`
- `utility-submetering-disclosure`: Confirmed absent. No row keyed here; covered by `edu-no-submeter-disclosure-ri`, `edu-no-submeter-interruption-ri`, `edu-no-utility-apportionment-ri`
- `utility-transfer`: Confirmed absent. Rows: `edu-no-utility-transfer-cutoff-ri`
- `dv-lockchange`: Present. Rows: `edu-dv-lockchange-ri`
- `landlord-entry`: Present (clause). Rows: `edu-landlord-entry-ri`, `landlords-access-ri`
- `periodic-services-entry`: Confirmed absent. Rows: `edu-no-periodic-services-entry-ri`
- `smart-access`: Confirmed absent. Rows: `edu-no-smart-access-law-ri`
- `abandoned-property`: Confirmed absent. Rows: `abandoned-property-ri`, `edu-no-abandoned-property-procedure-ri`
- `abandonment-and-mitigation`: Present. Rows: `edu-abandonment-mitigation-ri`
- `attorney-fees`: Present. Rows: `edu-attorney-fees-ri`
- `cares-act-notice`: Present (clause). Rows: `edu-cares-act-notice`
- `casualty-termination`: Present (clause). Rows: `casualty-termination-ri`, `edu-casualty-termination-ri`
- `conversion-notice`: Present. Rows: `edu-condo-conversion-ri`
- `criminal-activity`: Present. Rows: `criminal-activity-ri`
- `cure-and-eviction-grounds`: Present. Rows: `edu-cure-and-eviction-grounds-ri`
- `default-by-tenant`: Present (clause). Rows: `default-by-tenant-ri`
- `drug-free-housing-addendum`: Confirmed absent. Rows: `edu-no-drug-free-addendum-ri`
- `dv-eviction-protection`: Present. Rows: `edu-dv-eviction-protection-ri`
- `dv-lease-termination`: Present. Rows: `edu-dv-lease-termination-ri`
- `dv-qualifying-documents`: Present. Rows: `edu-dv-qualifying-documents-ri`
- `early-termination`: Present. Rows: `early-termination-ri`
- `eminent-domain`: Confirmed absent. Rows: `edu-no-eminent-domain-rule-ri`
- `environmental-event-termination`: Confirmed absent. Rows: `edu-no-environmental-event-termination-ri`
- `eviction-hardship-stay`: Confirmed absent. Rows: `edu-no-hardship-stay-rule-ri`
- `eviction-process`: Present. Rows: `edu-eviction-process-ri`
- `eviction-record-sealing`: Present. Rows: `edu-eviction-record-sealing-ri`
- `eviction-service-party`: Present. Rows: `edu-eviction-service-party-ri`
- `expedited-criminal-eviction`: Present. Rows: `edu-criminal-eviction-track-ri`
- `for-cause-eviction`: Present. Rows: `edu-for-cause-eviction-ri`
- `foreclosure`: Present. Rows: `edu-foreclosure-tenants-ri`
- `forfeiture-redemption`: Confirmed absent. No row keyed here; covered by `edu-redemption-ri`
- `guarantor-renewal`: Confirmed absent. Rows: `edu-no-guarantor-rule-ri`
- `holdover`: Present (clause). Rows: `holdover-ca`
- `holdover-rate`: Confirmed absent. Rows: `edu-holdover-rate-ri`
- `homestead-waiver`: Confirmed absent. Rows: `edu-no-exemption-waiver-ri`
- `infirmity-termination`: Present. Rows: `edu-infirmity-termination-ri`
- `landlord-lien`: Present. Rows: `edu-no-landlord-lien-ri`
- `landlord-remedies-termination`: Present. Rows: `edu-landlord-remedies-ri`
- `liquidated-damages`: Confirmed absent. Rows: `edu-no-liquidated-damages-rule-ri`
- `lockout-for-rent-delinquency`: Present. Rows: `edu-no-lockout-for-rent-ri`
- `minor-tenant-filing`: Confirmed absent. Rows: `edu-no-minor-tenant-filing-ri`
- `nonpayment-notice`: Present. Rows: `edu-nonpayment-notice-ri`
- `notice-to-quit-waiver`: Present. Rows: `edu-notice-to-quit-waiver-ri`
- `nuisance`: Present. Rows: `edu-nuisance-ri`
- `owner-move-in-reservation`: Confirmed absent. Rows: `edu-no-owner-move-in-reservation-ri`
- `possession-bond`: Confirmed absent. Rows: `edu-no-possession-bond-ri`
- `possession-delay`: Present (clause). Rows: `edu-possession-delay-ri`, `possession-delay-ca`
- `post-eviction-property`: Present. Rows: `edu-post-eviction-property-ri`
- `redemption`: Present. Rows: `edu-redemption-ri`
- `rent-into-court-counterclaim`: Present. Rows: `edu-rent-into-court-ri`
- `rental-application-accuracy`: Present (clause). Rows: `edu-no-rental-application-accuracy-ri`, `rental-application-accuracy`
- `retaliation`: Present. Rows: `edu-retaliation-ri`
- `self-help-eviction`: Present. Rows: `edu-self-help-eviction-ri`
- `servicemember-rights`: Present. Rows: `edu-servicemember-rights-ri`
- `social-security-defense`: Confirmed absent. Rows: `edu-no-social-security-defense-ri`
- `statutory-early-termination`: Present. Rows: `edu-statutory-early-termination-ri`
- `surrender-end-of-term`: Present (clause). Rows: `edu-surrender-end-of-term-ri`, `surrender-end-of-term`
- `tenancy-at-will`: Confirmed absent. Rows: `edu-no-tenancy-at-will-ri`
- `tenant-caused-damage`: Present (clause). Rows: `edu-tenant-caused-damage-ri`
- `tenant-death`: Present. Rows: `edu-tenant-death-ri`
- `termination-notice`: Present. Rows: `edu-termination-notice-ri`
- `unauthorized-occupant-removal`: Present. Rows: `edu-unauthorized-occupant-removal-ri`
- `actual-notice-method`: Confirmed absent. Rows: `edu-no-actual-notice-rule-ri`
- `addendum-precedence`: Present (clause). Rows: `addendum-precedence`, `edu-no-addendum-precedence-ri`
- `adverse-proceeding-notice`: Present. Rows: `edu-adverse-proceeding-notice-ri`
- `automatic-renewal`: Confirmed absent. Rows: `automatic-renewal-ri`, `edu-no-automatic-renewal-rule-ri`
- `confirmed-absences-misc`: Confirmed absent. Rows: `edu-confirmed-absences-misc-ri`
- `confirmed-absences-outside-title`: Confirmed absent. Rows: `edu-confirmed-absences-outside-title-ri`
- `dv-protection-order-chapter-moved`: Confirmed absent. Rows: `edu-dv-law-citations-ri`
- `electronic-signatures`: Present (clause). Rows: `edu-electronic-records-ri`, `electronic-signatures`
- `emergency-assistance-right`: Confirmed absent. Rows: `edu-no-emergency-assistance-right-ri`
- `entire-agreement`: Present (clause). Rows: `edu-lease-changes-ri`, `entire-agreement`
- `governing-law`: Present (clause). Rows: `governing-law`
- `informal-dispute-resolution`: Confirmed absent. Rows: `edu-no-pre-suit-resolution-statute-ri`
- `landlord-liability-insurance`: Present (clause). Rows: `edu-landlord-liability-insurance-ri`, `landlord-insurance-disclosure-ri`
- `landlord-registration`: Present. Rows: `edu-absentee-landlord-registration-ri`, `edu-rental-registry-ri`
- `lease-completeness`: Confirmed absent. Rows: `edu-no-lease-completeness-rule-ri`
- `lease-copy`: Confirmed absent. Rows: `edu-no-lease-copy-duty-ri`
- `lease-notice-initial-requirement`: Confirmed absent. Rows: `edu-no-initials-requirement-ri`
- `lease-term-limitation`: Present. Rows: `edu-lease-term-limitation-ri`
- `nonresident-owner-agent`: Present. Rows: `edu-nonresident-landlord-agent-ri`
- `notice-delivery-methods`: Present. Rows: `edu-notice-delivery-methods-ri`, `electronic-notice-ma`
- `notice-to-vacate-additional-terms`: Confirmed absent. Rows: `edu-no-notice-to-vacate-terms-rule-ri`
- `notices`: Present (clause). Rows: `notices`
- `optional-lease-terms`: Present. Rows: `edu-optional-lease-terms-ri`
- `plain-language-consumer-statement`: Confirmed absent. Rows: `edu-no-plain-language-lease-law-ri`
- `portfolio-thresholds`: Present. Rows: `edu-portfolio-thresholds-ri`
- `renters-insurance-rules`: Present. Rows: `edu-renters-insurance-ri`
- `sale-or-management-change`: Present. Rows: `edu-sale-or-management-change-ri`
- `scope`: Present. Rows: `edu-scope-ri`
- `severability`: Present (clause). Rows: `edu-severability-limits-ri`, `severability`
- `statute-of-frauds-lease-term`: Present. Rows: `edu-statute-of-frauds-ri`
- `statutory-forms`: Present. Rows: `edu-statutory-forms-ri`
- `tenant-portal`: Confirmed absent. Rows: `edu-tenant-portal-ri`
- `tenant-records`: Present. Rows: `edu-tenant-records-ri`
- `tenants-property-insurance`: Present (clause). Rows: `tenants-property-insurance-ks-oh-ca`
- `term-change-notice`: Present. No row keyed here; covered by `edu-lease-changes-ri`, `edu-rent-increase-notice-ri`, `edu-fee-disclosure-ri`
- `tpa-sunset`: Confirmed absent. Rows: `edu-no-tenant-law-sunset-ri`
- `translation-duty`: Confirmed absent. Rows: `edu-no-translation-duty-ri`
- `written-notice-required`: Present. Rows: `edu-written-notices-ri`
- `assistance-animal-accommodation`: Present (clause). Rows: `assistance-animal-accommodation`, `edu-assistance-animals-ri`
- `pet-eviction-fact-sheet`: Confirmed absent. Rows: `edu-no-pet-eviction-fact-sheet-ri`
- `pet-fees`: Present. Rows: `edu-pet-fees-ri`
- `pet-insurance-requirement`: Present (clause). Rows: `pet-insurance-requirement`
- `pet-policy`: Present. Rows: `edu-pet-policy-ri`, `pet-policy-ri`
- `service-animal-denial-penalty`: Present. Rows: `edu-service-animal-denial-penalty-ri`
- `service-animal-misrepresentation`: Present. Rows: `edu-service-animal-misrepresentation-ri`
- `assigned-parking-space`: Present (clause). Rows: `assigned-parking-space`
- `ev-charging`: Confirmed absent. Rows: `edu-no-ev-charging-right-ri`
- `ev-charging-end-of-tenancy`: Confirmed absent. Rows: `edu-no-ev-charging-end-of-tenancy-ri`
- `ev-charging-requirements`: Confirmed absent. Rows: `edu-no-ev-charging-requirements-ri`
- `ev-charging-shared-area`: Confirmed absent. Rows: `edu-no-ev-charging-shared-area-ri`
- `parking`: Confirmed absent. Rows: `edu-no-parking-statute-ri`, `parking-ks-oh-ca`
- `parking-rules-notice`: Present. Rows: `edu-parking-rules-notice-ri`
- `parking-vehicle-rules`: Present. Rows: `parking-vehicle-rules-ri`
- `storage-space`: Present (clause). Rows: `storage-space-ks-oh-ca`
- `towing`: Present. Rows: `edu-towing-ri`
- `unbundled-parking`: Confirmed absent. Rows: `edu-no-unbundled-parking-rule-ri`
- `cannabis`: Present. Rows: `edu-cannabis-ri`
- `common-area-use`: Present (clause). Rows: `common-area-use`
- `disaster-displaced-guests`: Confirmed absent. Rows: `edu-no-disaster-guest-rule-ri`
- `fire-safety-grilling`: Present (clause). Rows: `fire-safety-grilling`
- `firearms`: Confirmed absent. Rows: `edu-no-firearms-lease-rule-ri`
- `guest-policy`: Present (clause). Rows: `edu-guest-policy-ri`, `guest-policy`
- `guest-policy-day-limit`: Present (clause). Rows: `guest-policy-day-limit`
- `guest-rights`: Confirmed absent. Rows: `edu-no-guest-rights-ri`
- `inspection-rights`: Present (clause). Rows: `edu-inspection-rights-ri`, `inspection-rights`
- `keys`: Present (clause). Rows: `edu-keys-ri`, `keys-ri`
- `political-access`: Confirmed absent. Rows: `edu-no-candidate-access-rule-ri`
- `portable-cooling-device`: Confirmed absent. Rows: `edu-no-portable-cooling-right-ri`
- `portable-solar`: Confirmed absent. Rows: `edu-no-portable-solar-right-ri`
- `recycling-notice`: Confirmed absent. Rows: `edu-no-recycling-notice-ri`
- `religious-cultural-display`: Present. Rows: `edu-religious-display-ri`
- `rules-regulations`: Present (clause). Rows: `rules-ia`
- `smoke-drift-waiver`: Confirmed absent. Rows: `edu-no-smoke-drift-waiver-ri`
- `snow-removal`: Present (clause). Rows: `edu-snow-removal-ri`, `snow-removal-ri`
- `tenant-display-rights`: Present. Rows: `edu-no-flag-sign-right-ri`
- `tenant-security-cameras`: Confirmed absent. Rows: `edu-no-tenant-camera-rule-ri`
- `waterbed`: Confirmed absent. Rows: `edu-no-waterbed-rule-ri`
- `association-obligations-disclosure`: Confirmed absent. Rows: `edu-no-association-disclosure-ri`
- `bed-bug-disclosure`: Confirmed absent. Rows: `edu-no-bed-bug-disclosure-ri`
- `certificate-of-occupancy-disclosure`: Confirmed absent. Rows: `edu-no-certificate-of-occupancy-disclosure-ri`
- `defective-drywall-disclosure`: Confirmed absent. Rows: `edu-no-drywall-disclosure-ri`
- `electric-submetering-disclosure`: Confirmed absent. Rows: `edu-no-submeter-disclosure-ri`
- `flood-disclosure`: Confirmed absent. Rows: `edu-no-flood-disclosure-ri`
- `foreclosure-disclosure`: Present. No row keyed here; covered by `edu-adverse-proceeding-notice-ri`
- `good-cause-notice`: Confirmed absent. Rows: `edu-no-good-cause-notice-ri`
- `hazardous-contamination-disclosure`: Confirmed absent. Rows: `edu-no-contamination-disclosure-ri`
- `hoa`: Present. Rows: `edu-condo-leasing-rules-ri`
- `hoa-compliance`: Present (clause). Rows: `edu-condo-tenant-rules-ri`, `hoa-compliance`
- `inspection-condemnation-disclosure`: Present (clause). Rows: `edu-code-violation-disclosure-ri`, `housing-code-violations-disclosure-ri`
- `lead-based-paint`: Present (clause). Rows: `edu-lead-disclosure-ri`, `lead-disclosure-ri`
- `lead-safe-certification`: Present. Rows: `edu-lead-certificate-ri`
- `lead-state-notices`: Present. Rows: `edu-lead-tenant-notices-ri`
- `meter-conservation-charge`: Confirmed absent. Rows: `edu-no-meter-conservation-charge-ri`
- `meth-disclosure`: Confirmed absent. Rows: `edu-no-meth-disclosure-ri`
- `military-air-zone-disclosure`: Confirmed absent. Rows: `edu-no-military-zone-disclosure-ri`
- `mold-disclosure`: Confirmed absent. Rows: `edu-no-mold-disclosure-ri`
- `ordnance-demolition-meter-disclosures`: Confirmed absent. Rows: `edu-no-ordnance-demolition-meter-disclosure-ri`
- `owner-identity-disclosure`: Present (clause). Rows: `edu-owner-manager-disclosure-ri`, `owner-manager-disclosure-ri`
- `pest-control-notice`: Confirmed absent. Rows: `edu-no-pest-control-notice-ri`
- `private-well-testing`: Present. Rows: `edu-private-well-testing-ri`
- `prop65-rental-warning`: Not applicable. Rows: `edu-no-prop65-warning-ri`
- `property-tax-rent-disclosure`: Confirmed absent. Rows: `edu-no-property-tax-rent-statement-ri`
- `radon-disclosure`: Confirmed absent. Rows: `edu-no-radon-disclosure-ri`
- `required-disclosures`: Present. Rows: `edu-required-disclosures-ri`
- `sanitary-code-variance`: Confirmed absent. Rows: `edu-no-code-variance-notice-ri`
- `sex-offender-disclosure`: Confirmed absent. Rows: `edu-no-sex-offender-disclosure-ri`
- `sex-offender-occupancy`: Present. Rows: `edu-sex-offender-occupancy-ri`
- `sfr-occupancy-disclosure`: Confirmed absent. Rows: `edu-no-lease-font-rules-ri`
- `source-of-income`: Present. Rows: `edu-source-of-income-ri`
- `sprinkler-disclosure`: Confirmed absent. Rows: `edu-no-sprinkler-disclosure-ri`
- `stigmatized-property`: Present. Rows: `edu-stigmatized-property-ri`
- `tenant-rights-statement`: Confirmed absent. Rows: `edu-no-tenant-rights-statement-ri`
- `tpa-exemption-notice`: Confirmed absent. Rows: `edu-no-tpa-exemption-notice-ri`
- `tpa-notice`: Present. Rows: `edu-tenant-purchase-rights-ri`
- `truth-in-renting`: Confirmed absent. Rows: `edu-no-truth-in-renting-ri`
- `accessory-dwelling-unit`: Present. Rows: `edu-accessory-dwelling-unit-ri`
- `casualty-and-mitigation-waivable`: Present. Rows: `edu-casualty-mitigation-nonwaivable-ri`
- `children-occupancy`: Present. Rows: `edu-families-with-children-ri`
- `confession-of-judgment`: Present. Rows: `edu-no-confession-of-judgment-ri`
- `consumer-protection-act`: Present. Rows: `edu-consumer-protection-act-ri`
- `dv-confidentiality`: Present. Rows: `edu-dv-confidentiality-ri`
- `employee-screening`: Confirmed absent. Rows: `edu-no-employee-screening-mandate-ri`
- `eviction-penalty-clause-ban`: Confirmed absent. Rows: `edu-no-eviction-penalty-rule-ri`
- `exculpatory-clauses`: Present. Rows: `edu-no-exculpatory-clauses-ri`
- `fair-housing`: Present. Rows: `edu-fair-housing-ri`
- `fire-sprinkler-duty`: Not located. Rows: `edu-fire-sprinkler-duty-ri`
- `foreign-ownership`: Confirmed absent. Rows: `edu-no-foreign-ownership-rule-ri`
- `governmental-fines`: Confirmed absent. Rows: `edu-government-fines-passthrough-ri`
- `immigration-status`: Present. Rows: `edu-immigration-status-ri`
- `jury-waiver`: Confirmed absent. Rows: `edu-jury-waiver-ri`
- `key-control-policy`: Confirmed absent. Rows: `edu-no-key-control-mandate-ri`
- `knowing-use-penalty`: Present. Rows: `edu-knowing-use-penalty-ri`
- `law-enforcement-cooperation`: Confirmed absent. Rows: `edu-no-crime-free-lease-statute-ri`
- `lease-content-requirements`: Present. Rows: `edu-lease-content-requirements-ri`
- `lease-type-size`: Confirmed absent. Rows: `edu-no-lease-type-size-ri`
- `part5-nonwaivable`: Present. No row keyed here; covered by `edu-habitability-waiver-ri`, `edu-prohibited-lease-terms-ri`
- `plain-language`: Confirmed absent. No row keyed here; covered by `edu-no-plain-language-lease-law-ri`
- `prohibited-lease-terms`: Present. Rows: `edu-prohibited-lease-terms-ri`
- `protected-class-inquiry-ban`: Present. Rows: `edu-protected-class-inquiries-ri`
- `senior-housing-work-card`: Confirmed absent. Rows: `edu-no-senior-housing-work-card-ri`
- `single-family-zone-lease-limit`: Confirmed absent. Rows: `edu-no-single-family-zone-lease-limit-ri`
- `steam-radiator-covers`: Confirmed absent. Rows: `edu-no-steam-radiator-covers-ri`
- `subsidized-inspection-refusal`: Present. Rows: `edu-voucher-inspections-ri`
- `tenant-confidential-information`: Confirmed absent. Rows: `edu-tenant-confidential-information-ri`
- `tenant-right-to-organize`: Present. Rows: `edu-tenant-organizing-ri`
- `tenant-screening`: Present. Rows: `edu-tenant-screening-ri`
- `unconscionability`: Present. No row keyed here; covered by `edu-severability-limits-ri`, `edu-habitability-waiver-ri`
- `water-heater-temperature`: Present. Rows: `edu-water-heater-temperature-ri`
- `window-guards`: Confirmed absent. Rows: `edu-no-window-guard-rule-ri`

## 19. Step D screens (rules 40-54), one line each
- **40, formatting and placement:** §4. Same-section fee rule and lead own page; no bold, underline or type-size rule reaches a residential lease.
- **41, just cause:** no general just-cause law. Situational limits: after foreclosure (§ 34-18-38.2, with its sale-contract and FHA exceptions) and during code enforcement proceedings (§ 45-24.3-21(c)(4)). `edu-for-cause-eviction-ri` records the verdict under `for-cause-eviction`.
- **42, required text in a shared clause:** the fee list in the Rent section (`fee-disclosure-ri`); the utilities split (`utilities-responsibility-ri`); the renters-insurance statement (`edu-renters-insurance-ri`); lead additions (`lead-disclosure-ri`).
- **43, cure promises:** `default-by-tenant-ri` leaves every cure period to applicable law (the § 34-18-35 demand, the § 34-18-36 20-day notice), puts the no-cure carve-out in its own sentence reaching the rent and non-rent limbs (§ 34-18-36(e) repeat breaches, (f) immediate filing), and doesn't let an unpaid late fee alone end the lease. The cure by payment is statutory (`edu-redemption-ri`) and the lease doesn't state or cap it.
- **44, terms turned into landlord duties:** § 34-18-28(a) gives remedies for "noncompliance by the landlord with the rental agreement", and § 34-18-22(a)(4) reaches appliances "supplied or required to be supplied by the landlord", so appliance and service promises are remedy triggers. `appliances-included` is tagged with that note, and `edu-tenant-repair-remedies-ri` explains it.
- **45, electronic notices:** UETA (chapter 42-127.1) read; the agreement-to-transact condition is met by `electronic-notice-ma` and `electronic-signatures` (tagged). The act's conditions (agreement to transact electronically, a record the recipient can print or store) are in `edu-electronic-records-ri`; statutory delivery rules such as the mailed § 34-18-35(a) demand still control their own notices.
- **46, the lease as the notice:** the shoreline disclosure may be incorporated in the lease (`shoreline-access-disclosure-ri`). Absence notice is a lease option (`extended-absence-notice-ri`). `addendum-precedence` is tagged; no optional statutory addendum needs its own control sentence.
- **47, knowing-use penalty:** § 34-18-17(b) (up to three months' rent and attorney's fees), reaching waivers of the 2026 sections (`edu-knowing-use-penalty-ri`). The Deceptive Trade Practices Act's reach is not settled by the text (`edu-consumer-protection-act-ri`).
- **48, separate documents and tenant chores:** § 34-18-22(c) requires a signed writing with adequate consideration and specified tasks for every dwelling, with no single-family split. `landscaping-irrigation-ri` and `snow-removal-ri` carry those conditions; `tenant-maintenance` is tagged for general care only. The lead acknowledgment's own page is in §4.
- **49, collection costs:** no reciprocal-fee statute. A tenant may not agree to pay the landlord's attorney's fees "inconsistent with this chapter" (§ 34-18-17(a)(3); see § 34-18-35(d); `edu-attorney-fees-ri`). Collection-agency fees need express authorization (`edu-collection-fee-ri`).
- **50, "the lease controls":** chosen on purpose: absence notice (§ 34-18-27), place of rent payment (§ 34-18-15(c)), seasonal leases (§ 34-18-36(f)), furniture deposit (§ 34-18-19(e)), tenant maintenance agreements (§ 34-18-22(c)) and use as a dwelling "unless otherwise agreed" (§ 34-18-27).
- **51, plain language and consumer statutes:** no plain-language statute (`edu-no-plain-language-lease-law-ri`). The Deceptive Trade Practices Act has an enumerated list and a general standard, and its reach to leases is not settled by the text (`edu-consumer-protection-act-ri`).
- **52, exculpation:** void (§ 34-18-17(a)(4)); the disclaimer-free variants are tagged (§2.2).
- **53, figures:** checked: deposit cap (one month), deposit return (20 days), rent increase notice (60 and 120 days), periodic termination (10 days, 30 days, three months), absence (7 and 10 days), entry (two days), DV lock change (two business days). `holdover-ca` states no holdover figure (§ 34-18-38(c), § 34-18-43 govern); no shared clause states a conflicting figure after the overrides.
- **54, optional clauses:** §6.1.

## Proposed SOP changes
- **Make the battery tool refuse a name it has already logged.** Eight names were reused for different runs, and a round-2 checker had to sort out which `RI-lease-copy-1` a note meant by timestamp.
- **Give the quote checker regulation-style cites ("216-RICR-50-15-3"), court rules and any act cited in the note, and add a whole-corpus fallback reported separately.** Without them, a scoped checker reports verbatim quotes as missing and timed out on whole-corpus searches.
- **Run the rule 40 formatting batteries from the corpus loader, so they can't slip to after drafting.** In Rhode Island they ran after drafting. No row changed, but the SOP's order was missed.
- **Tell checkers to read unnumbered paragraphs between lettered subsections.** A round-1 checker read § 34-37-4's section-wide 18-or-older proviso as part of (b) and proposed a wrong fix, which the lead rejected.
- **Have independent-check fixes applied by a fixer that writes exact old→new errata lines, which the merge applies with once-only assertions.** This kept 334 edits reproducible and blocked edits to other states' segments.
- **When a statute sentence carries its own exception (§ 34-18-15(a)(1)'s subsidy-format carve-out), sweep every row that states the rule.** About 30 rows stated it as unconditional.

## Proposed topic questions
- `fee-transparency`: "Does the fee-disclosure rule exempt tenancies whose state or federal subsidy requires a different lease format? (Rhode Island, § 34-18-15(a)(1).)"
- `purpose-limitation`: "Does a criminal or nuisance statute void or annul the lease when the premises are used for a prohibited purpose? (Rhode Island, §§ 11-19-23, 11-30-6.)"
- `retaliation`: "Does the retaliation presumption arise only from a complaint, and is it lost where the complaint followed the landlord's notice of the increase or other act? (Rhode Island, § 34-18-46(b).)"
- `rent-tax`: "Does the sales or hotel tax reach rooms let to permanent tenants (a rooming house) unless the written lease is 12 months or more? (Rhode Island, §§ 44-18-7.1(n)(ii), 44-18-18.)"
- `knowing-use-penalty`: "Does a later-added section's own voidness clause displace the chapter's penalty for knowingly using a prohibited term? (Rhode Island, §§ 34-18-17(b), 34-18-67.)"
- `security-deposit-cap`: "Does a separate furniture deposit sit outside the cap only above a replacement-value threshold? (Rhode Island, § 34-18-19(e): up to one month's rent, furniture worth $5,000 or more.)"

## Sync (Claude Code, 2026-10-09)

- **Merge:** `merge-delta.py` against the kickoff base ee78823 (the attached CSV's sha256 matches the log header; the delta's matches §11): 338 new rows, 46 updated (45 tagged shared rows and the dormant row, RI tag and note segment only). 4,863 → 5,201 rows. Rhode Island has 383 active rows (76 lease clauses, 307 education rows) on 330 topic keys.
- **Guard fix (tooling, not RI content):** `check-section-pointers.py` matched titles as substrings, so the new title "Property Left Behind" (`abandoned-property-ri`) matched inside existing pointers to the "Handling of Property Left Behind Section" and reported 16 false dangling pointers in other states. The check now skips a match that sits inside a longer title; it was tested to still catch a real dangling pointer.
- **Edited after the last check (§13):** all eight rows read against the official text on webserver.rilegislature.gov: §§ 6-13-14(a)-(c), 34-18-10(c), 34-18-38.2(a), 34-18-49, 34-18-46(b)-(c), 44-33-9(1), 44-18-7.1 (rooming house), 44-18-18. No error found.
- **Statute spot-check (all match):** § 34-18-19(a), (b), (e), (h) (one month "however denominated", the closed deduction list, 20 days, the furniture deposit, no waiver); § 34-18-26 (consent, two days' notice, seven-day absence); § 34-18-41 (10-day written notice after accepting rent with knowledge of a default; partial payment); § 34-18-35(a), (d), (e) (15 days, five-day demand, cure); § 34-18-15(a)(1)-(5) (fees in the rent section, utilities, renters insurance); § 34-18-17; § 34-18-59. Checked against `due-at-signing-ri`, `security-deposit-use-ri`, `late-fee-ri`, `default-by-tenant-ri`, `landlords-access-ri`, `fee-disclosure-ri` and `utilities-responsibility-ri`.
- **Targeted fix (§7's open item on `edu-redemption-ri`):** § 34-18-35(e)'s hearing cure is lost, and (d)'s attorney's fees are earned, if the tenant received a demand notice "within the six (6) months immediately preceding the filing of the action". Read literally that includes the notice for the case itself, which every nonpayment case must follow, so the hearing cure would never be available. Five rows stated the rule without saying which reading they took (`edu-redemption-ri`, `edu-cure-and-eviction-grounds-ri`, `edu-nonpayment-notice-ri`, `edu-no-social-security-defense-ri`, `edu-no-notice-fee-rule-ri`); each now says "an earlier demand notice (before the one for this case)" and its note labels that a drafting judgment (case law not searched).
- **Same-topic check:** no unexplained pairs among the 76 RI clauses.
- **Comparison with recent states:** 383 active rows against CT 339, MA 394, MD 386; lease clauses 76 (CT 84, MA 78, MD 80); 330 topic keys, the most of any state. The topics 20 or more states have that Rhode Island lacks (`utilities-paid-by-landlord`, `tenant-repair-agreement`, `utility-submetering-disclosure`), and `unconscionability`, are each answered in §18 by an RI row under a related key; `utilities-paid-by-landlord` is deliberately replaced by `utilities-responsibility-ri` (§2.2). 17 NEEDS_REVIEW rows, each with its boundary (fewer than MA's 42 and CT's 70; queued with theirs for the consistency pass). Optional clauses match other states' range; a holdover premium is declined as in CT, IA and NM.
- **Citations file:** `lease-clause-citations-RI.csv` (383 rows: 232 CITED, 144 CONFIRMED_ABSENT, 7 GENERIC shared clauses tagged as written). "to" ranges are expanded; off-point battery hits named in notes appear in the citation list, as in the CT, MA and MD files.
- **Legal watch:** `stateConfig.js` RI entry reads the "R.I. Gen. Laws §" parts and queries the quoted section number (`"34-18-19"`), as for New Jersey, since bills amend by "Section 34-18-19 of the General Laws in Chapter 34-18" or list several sections; 509 sections; lead CFR and § 4852d checks; three manual items (uncompiled 2026 acts and the § 34-18-67 heading mismatch; regulations; the rental registry). `legal-watch-ri.yml` is held until after February 13, 2028 (first run March 13, 2028, day 13 at 14:00 UTC).
- **Topic questions:** all six added, in the general form with full citations.
- **Builder flags (§10):** added to the backlog's Rhode Island known-issues line; no new `{{variable}}`s.
- **SOP 1.67:** RI 1 (rule 19), RI 2 (rule 59), RI 3 (rule 40), RI 4 and 6 (rule 79), RI 5 (rule 80) adopted, plus the drafting-judgment label from this sync (rule 79). RI conformance column added (statutory waivers n).
- **Guards:** check-gap-discovery `--all`, checklist reconciliation, clause basis, section pointers (after the fix above) and checkConfigIds all pass; generated files and `lease-clause-topics.md` (348 topics, 684 questions) regenerated.
