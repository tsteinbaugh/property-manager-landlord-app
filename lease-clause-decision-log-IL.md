# Illinois — lease-clause decision log (state #23)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§1, §14: Landlord and Tenant Act (765 ILCS 705), Security Deposit Return Act (765 ILCS 710), Security Deposit Interest Act (765 ILCS 715), Landlord Retaliation Act (765 ILCS 721), Rent Concession Act (765 ILCS 730), Rental Property Utility Service Act (765 ILCS 735), Tenant Utility Payment Disclosure Act (765 ILCS 740), Residential Tenants' Right to Repair Act (765 ILCS 742), Safe Homes Act (765 ILCS 750), Summary of Rights for Safer Homes Act (765 ILCS 752), Immigrant Tenant Protection Act (765 ILCS 755) and Code of Civil Procedure Article IX Parts 2 and 3 (735 ILCS 5/9-201 to 5/9-321) read whole from ilga.gov with every source note; Article IX Part 1 index read and its landlord-facing sections read whole; section index diffed against the IL rows) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: MainStreet REALTORS® Residential Lease, Rev. 1.2026, with Illinois REALTORS® Forms 421 and 422L, published by the REALTOR® Association of West/South Suburban Chicagoland (MainStreet) and posted on chicagorealtor.com; secondary: Chicago Association of REALTORS® 2025 Chicago Residential Lease V12.0) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 72 scenarios, Claude-generated, AZ §18.1 / UT §16 model plus Illinois-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: regular-expression search of the whole Illinois Compiled Statutes (all 3,486 acts, 73,378 section versions) loaded in the built-in browser, 127-search battery with two control terms at 0 hits; the 854 Public Acts of the 104th General Assembly screened in full text; Ill. S. Ct. R. 139 and R. 99.2 read) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `IL` tag and an `IL:` note.

**Date:** 2026-09-30 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** the whole ILCS loaded as official text in the browser, which gave full-text proof of absence and cross-chapter search directly; the one ambiguity (the P.A. 104-479 effective date) is a records conflict that research mode could not resolve, so it went to Taylor instead (§6.1; rule 9; only Taylor can switch research mode on).
**Kickoff vs SOP:** no conflict noticed; the kickoff's settings, citation format and deliverables match SOP rules 9, 21 and 70-75.
**Scope:** Illinois state law only. Local ordinances (Chicago Residential Landlord and Tenant Ordinance, Cook County Residential Tenant Landlord Ordinance, Evanston, Urbana, Mount Prospect, and home rule units generally) flagged, not resolved (rule 3; `edu-scope-il`). Out of scope and named: Mobile Home Landlord and Tenant Rights Act (765 ILCS 745), farm tenancies, public housing rules, hotels and short stays.
**Input CSV:** `lease-clauses.csv`, **1,698 rows, 17 columns, CRLF, 1,575 active (438 lease clauses, 1,137 education)**; active counts AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 108, SC 111, SD 99, TN 132, TX 137, UT 122, VA 135, WY 107, matching the kickoff exactly (rule 23). No duplicate ids. No IL rows, active or dormant (rule 25). One active row has a blank `states` field: the intentional parent `security-deposit-return`. Two rows are NEEDS_REVIEW; the rest VERIFIED.
**Output CSV:** `lease-clauses-IL-delta.csv`, **148 rows, 17 columns, CRLF**: 54 existing rows with `IL` added to `states`, an `IL:` note appended and `last_checked` 2026-09-30, and 94 new IL rows. **IL 148 active: 76 lease clauses, 72 education; all VERIFIED.** Merged with the master: 1,792 rows, 1,669 active; every other state's active count unchanged. **No shared row's text changed.**
**Rule 8:** the outputs folder was empty at the start of this chat, so nothing was deleted; the files Taylor uploaded for this task are the only source of truth used.

---

## 0. Completion status

| | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§1, §14: Landlord and Tenant Act (765 ILCS 705), Security Deposit Return Act (765 ILCS 710), Security Deposit Interest Act (765 ILCS 715), Landlord Retaliation Act (765 ILCS 721), Rent Concession Act (765 ILCS 730), Rental Property Utility Service Act (765 ILCS 735), Tenant Utility Payment Disclosure Act (765 ILCS 740), Residential Tenants' Right to Repair Act (765 ILCS 742), Safe Homes Act (765 ILCS 750), Summary of Rights for Safer Homes Act (765 ILCS 752), Immigrant Tenant Protection Act (765 ILCS 755) and Code of Civil Procedure Article IX Parts 2 and 3 (735 ILCS 5/9-201 to 5/9-321) read whole from ilga.gov with every source note; Article IX Part 1 index read and its landlord-facing sections read whole; section index diffed against the IL rows) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: MainStreet REALTORS® Residential Lease, Rev. 1.2026, with Illinois REALTORS® Forms 421 and 422L, published by the REALTOR® Association of West/South Suburban Chicagoland (MainStreet) and posted on chicagorealtor.com; secondary: Chicago Association of REALTORS® 2025 Chicago Residential Lease V12.0) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 72 scenarios, Claude-generated, AZ §18.1 / UT §16 model plus Illinois-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: regular-expression search of the whole Illinois Compiled Statutes (all 3,486 acts, 73,378 section versions) loaded in the built-in browser, 127-search battery with two control terms at 0 hits; the 854 Public Acts of the 104th General Assembly screened in full text; Ill. S. Ct. R. 139 and R. 99.2 read) |
| Primary text read | **Read whole, saved:** 765 ILCS 705, 710, 715, 721, 730, 735, 740, 742, 750, 752, 755; 735 ILCS 5/9-201 to 5/9-218 and 5/9-301 to 5/9-321. **Read whole, saved, in the sections cited:** 735 ILCS 5/9-101, 9-106, 9-106.2, 9-106.3, 9-107.10, 9-108, 9-117, 9-118, 9-119, 9-120, 9-121; Illinois Human Rights Act 775 ILCS 5/3-101, 3-102, 3-102.1, 3-102.5, 3-104.1, 3-105.1, 3-106 and 1-103 (excerpts); 420 ILCS 46/15, 20, 26, 30, 35; 425 ILCS 60/3; 430 ILCS 135/10; 410 ILCS 45/9.1; 50 ILCS 825/5, 10; 410 ILCS 130/40; 740 ILCS 40/11; 310 ILCS 120/5, 10, 15; 815 ILCS 333/3; 765 ILCS 1085/10, 35; 810 ILCS 5/3-806; 815 ILCS 205/2; 330 ILCS 63/35, 50; 55 ILCS 5/5-1005.10; 765 ILCS 605/30; 430 ILCS 160 (Peephole Installation Act); 225 ILCS 454/15-20. **Read in the browser, saved as excerpts:** 410 ILCS 45/2; 765 ILCS 1026/15-102, 15-201; 65 ILCS 5/1-2-1.5; 410 ILCS 705/10-5, 10-30; 735 ILCS 5/2-1301(c); 625 ILCS 5/4-203(f); 765 ILCS 605/18(n); 35 ILCS 145/2(5); 765 ILCS 1090/17(h); 720 ILCS 5/48-8; 735 ILCS 5/9-102(e); 430 ILCS 66/65(a-10), (b); 765 ILCS 160/1-35; 215 ILCS 5/143.10e. **Court rules:** Ill. S. Ct. R. 139 and R. 99.2 read whole. **Session law:** P.A. 104-479 read whole (enrolled text and status). |
| Step B — tag first | **Done.** 54 existing rows tagged IL (§2.1): the shared generic clauses lawful as written, the ks-oh-ca / ks-oh / ks-ne / ks variants where the base fails, three other states' rows whose text fits Illinois (`holdover-ca`, `tenant-forward-proceedings-ca`, `acceptable-payment-methods-nj`) and two Colorado EV rows (`ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`). 13 bases not tagged, with a variant or IL row instead (§2.2). Every single-state clause screened (§2.3). No shared text edited. |
| Step E — new IL rows | 22 lease clauses (6 REQUIRED, 9 CONDITIONAL, 1 CONSTRAINED, 6 RECOMMENDED; 6 optional under rule 54 or the standing GA rule) and 72 education rows, including 12 confirmed-absence rows (§3). |
| Instruction 24 family | `security-deposit-return-il` (REQUIRED; itemized statement with receipts within 30 days after the later of vacating or end of possession; personal delivery, postmarked mail or verified email; full return within 45 days without it; 765 ILCS 710/1). |
| Step D screens | All run (§19). Hits: rule 40 (first-page fee box, 765 ILCS 705/35(b), versus first-page summary, 765 ILCS 752/20: §6.2), rule 42 (required sentence on criminal use, 735 ILCS 5/9-120(a)), rule 43 (`early-termination` 10-day cure gives away 735 ILCS 5/9-210; `default-by-tenant` carve-out holds), rule 45 (no UETA exclusion; statutory service methods control), rule 46 (9-320(b) lease notice in lieu of posting), rule 48 (flood and radon pre-signing delivery, shared-meter statement, lead brochure), rule 49 (eviction-notice fee ban), rule 50 (710/1 lease-specified costs; 705/15(d) tenant rekey), rule 52 (765 ILCS 705/1 voids exculpation: ks-oh-ca variants and `pet-policy-il`), rule 53 (`returned-payments` and base `holdover` ceiling wording replaced). |
| Optional clauses (rule 54) | 6 offered as optional clauses (lease-specified deposit costs, casualty termination, Cook County tenant rekey right, drug-free housing addendum, subsidized-housing inspection refusal, cannabis cultivation ban), plus `landlord-disclosure-il`, a conditional required disclosure the lease may carry instead of a posted notice (735 ILCS 5/9-320(b)); 9 not offered with reasons (§6.3). |
| Questions to Taylor (rule 76) | 2 asked 2026-09-30 (§6.1-6.2): the P.A. 104-479 effective-date conflict (Taylor: apply now) and the first-page conflict (Taylor: the summary is an attachment; the fee box is the lease's first page). Both match the drafted rows. |
| Proof of absence | 12 confirmed absences with their own rows; every topic in the reference ends Present, Confirmed absent, Not located or Not applicable (§18). |
| Independent check | A separate agent checked about 750 claims against the saved texts and battery logs and reported 27 items (4 wrong, the rest imprecise or resting on defective searches); all fixed, and the same agent re-verified the fixes and the log (§13). |
| Currency | ILCS current through P.A. 104-852 in the source notes; the 104th GA list runs to P.A. 104-854; uncompiled and future-dated changes handled (§1.2). One records conflict (P.A. 104-479) asked of Taylor. |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes:** ilga.gov, the Illinois General Assembly's official ILCS site. Each act has an `Articles?ActID=…` index and a full-text page that prints every section with its source note ('(Source: P.A. …, eff. …)'), which is Illinois' history line. Delayed-effective text is flagged in the section header ('This Section may contain text from a Public Act with a delayed effective date') and multiple versions print as '(Text of Section from P.A. …)'. The container shell and the device shell both get a proxy 403 on ilga.gov; the built-in browser reaches it.
- **Session laws:** Public Acts, cited `P.A. 104-479`, at `/Legislation/PublicActs/View/104-0479`; large acts at `/documents/legislation/PublicActs/104/<id>.htm`. Bill status pages give passage, approval and effective dates.
- **Court rules:** Illinois Supreme Court rules at illinoiscourts.gov/rules/supreme-court-rules, served as PDFs from ilcourtsaudio.blob.core.windows.net; cited `Ill. S. Ct. R. 139`.
- **Agency material:** the Department of Human Rights' Summary of Rights (dhr.illinois.gov/safer-homes), a government publication, not a rule (rule 21 flag). `Ill. Adm. Code` not relied on.
- **Save protocol (rule 14):** text returned from the browser, written to disk, then SHA-256 compared between the browser (`crypto.subtle`) and Python; every one of the 23 source files and 4 battery files matched. Registry with hashes: `sources/IL-source-registry.tsv`.

### 1.2 Currency (rule 16)
- **Compilation:** ILCS source notes cite 104th GA Public Acts up to P.A. 104-852; the General Assembly's Public Act list runs 104-0001 to 104-0854. All 854 texts were loaded (141 very large acts from the documents path) and screened for amendments to every Act and section relied on.
- **Uncompiled:** P.A. 104-852 (general revisory act, eff. 8-21-2026) makes technical changes to 420 ILCS 46/26(b) ('not mitigated' to 'not mitigate', 'tenant's dwelling unit', spelled-out date) not yet in the ILCS text; the radon form in (f) is unchanged. P.A. 104-853 and 104-854 touch nothing relied on. Other uncompiled items (815 ILCS 505/2MMMM duplicate numbering; 775 ILCS 5/7A-102 procedure) do not affect lease content.
- **Future versions printed in the ILCS:** 775 ILCS 5/1-103 (P.A. 104-793, eff. 1-1-27, menopause-related terms in the pregnancy definition; P.A. 104-744, eff. 6-1-27, 'whether by purpose or effect' and 'criteria or methods'); 765 ILCS 160/1-35 (text before amendment by P.A. 104-734, not read). `edu-fair-housing-il` states current law and notes the dates.
- **P.A. 104-479 (765 ILCS 705/35, rental fee transparency):** passed both houses 4/8/2026, sent to the Governor 5/7/2026, approved 6/26/2026. The Public Act page, bill status and the ILCS source note all say effective **January 1, 2027**; the enrolled Act's own Section 99 says '**This Act takes effect July 1, 2026.**' (saved: `PA-104-0479_enrolled-text_and-status.txt`). The body of 705/35 in the Act was compared with the ILCS text and matches. The section applies to leases 'entered into after the effective date' (705/35(e)). Decision: the fee-box clause applies now (complying early is harmless); `edu-rental-fee-law-il`, `edu-application-fees-il`, `edu-late-fee-il` and the tagged fee-related notes state both dates, and other rows say 'for leases it covers' (§6.1). Legal watch: confirm which date governs.
- **Recent effective dates handled in rows:** P.A. 103-1031 (752, eff. 1-1-26); P.A. 104-317 (735 ILCS 5/9-106, 9-121, eff. 1-1-26); P.A. 104-29 (735 ILCS 5/9-102(e), eff. 1-1-26); P.A. 104-417 (eff. 8-15-25: 705/25, 705/30, 721/20, 775 ILCS 5/3-106); P.A. 103-831 (721, eff. 1-1-25); P.A. 103-809 (705/3.5, eff. 1-1-25); P.A. 103-754 (705/25, eff. 1-1-25); P.A. 103-840 (705/30, eff. 1-1-25); P.A. 103-224 (710/1, eff. 1-1-24); P.A. 103-132 (705/4, eff. 1-1-24); P.A. 103-298 (radon, eff. 1-1-24); P.A. 103-161 (705/20, eff. 1-1-24); P.A. 103-53 and 103-605 (EV).
- **Special session:** none located for 2026 in the Public Act list screened.

### 1.3 Corpus and method (rule 19)
- **Load:** all 3,486 ILCS acts (646 repealed) listed from the chapter indexes; every act's full-text page fetched and split into 73,378 section versions (multiple printed versions of one section kept separate). Proof of completeness: the act count equals the chapter indexes' total; every section cited in the delta (193 citations) exists in the loaded set.
- **Engine:** case-insensitive JavaScript regular expressions over each section's text; `NEAR(a, b, n)` finds a within n characters of b either way. Two control terms (batteries 1 and 88) returned 0 hits, so the engine reports true empties.
- **Batteries:** 127 searches saved in `batteries/` (four parts; README lists the patterns that were unreliable because of ungrouped alternation — 7, 9, 10, 11, 20, 26, 27, 29, 38, 39, 45, 46, 52 — or too narrow — 18, 75, 112, 113 — and the grouped reruns that replace them).
- **Boundary:** statutes and the two court rules read. Not searched: case law, the Illinois Administrative Code, local ordinances, federal law (except as cited and flagged), Supreme Court standardized forms. Every absence row names its battery.

### 1.4 Section-open vs recall (rule 15)
Every IL row was written with its sections open in this chat, from the saved files or, for the excerpts noted, the browser. No row rests on recall. Read in the browser but not saved (named in the log only; no row rests on them alone): the texts of P.A. 104-852, 104-793 and 104-744; the MainStreet and CAR leases; 815 ILCS 309/5; 735 ILCS 5/12-904; 765 ILCS 5/8 and 5/11; the act names shown in the ILCS index for battery hits. P.A. 104-734 (765 ILCS 160/1-35) and the repeal of 420 ILCS 46/25 were seen only as notes in the ILCS text. Two points rest on secondary knowledge and say so in the row: Cook County as the only county over 3,000,000 (census not read) and the courts' implied warranty of habitability (case law not read).

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged IL as written (54)
| Row | Topic | IL reason (from the row note) |
|---|---|---|
| `rental-application-accuracy` | rental-application-accuracy | The Illinois Human Rights Act bars application forms, records and inquiries indicating a protected-class preference and allows arrest-record and immigration-status inquiry only as law authorizes (775 ILCS 5/3-102(F); 775 ILCS 5/3-106(K), (M)); the last sentenc… |
| `lead-based-paint` | lead-based-paint | Federal disclosure (40 CFR 745.113; 42 U.S.C. 4852d; rule 21 flag). Illinois adds the Department of Public Health brochure before a lease of pre-1978 housing and mitigation-notice duties (410 ILCS 45/9.1), in edu-lead-il; the brochure is a separate pre-lease d… |
| `hoa-compliance` | hoa-compliance | Condominium instruments and rules on use of the unit and common elements are deemed incorporated in the lease, and the owner must give the board a lease copy (765 ILCS 605/18(n); edu-condo-leasing-il). |
| `utilities-paid-by-landlord` | utilities-paid-by-landlord | A landlord who agrees to pay water, gas or electric service must pay on time (765 ILCS 735/1) and may not switch to tenant-paid utilities during the term (765 ILCS 735/1.2(b)); whether utilities are included in rent must be disclosed in the lease or listing (7… |
| `appliances-included` | appliances-included | No Illinois statute on landlord-supplied appliances located in the Acts read whole or the whole-code searches. |
| `landlord-maintenance` | landlord-maintenance | No general Illinois repair statute; 'within a reasonable time, consistent with applicable law' preserves the tenant's repair-and-deduct right (765 ILCS 742/5) and the common-law implied warranty (case law not read). edu-habitability-il. |
| `notices` | notices | Statutory eviction notices are served under 735 ILCS 5/9-211, which the second sentence preserves; the landlord address in the Lease is where repair-and-deduct notices go (765 ILCS 742/5). Step D rule 45: Illinois' electronic-transactions act lists no exclusio… |
| `governing-law` | governing-law | No Illinois statute limits a governing-law clause in a residential lease; the reference to city or county law covers home rule ordinances (flagged, not read). |
| `severability` | severability | No Illinois statute on severability clauses in leases located. |
| `entire-agreement` | entire-agreement | No Illinois statute lets a landlord amend a lease by notice; the 'as applicable law permits' limb is inert for IL. Condominium rules are incorporated by statute (765 ILCS 605/18(n)). |
| `addendum-precedence` | addendum-precedence | The required-disclosure carve-out keeps the Summary of Rights (765 ILCS 752/20), flood (765 ILCS 705/25) and radon (420 ILCS 46/26) forms controlling over any conflicting lease term. |
| `electronic-signatures` | electronic-signatures | The Uniform Electronic Transactions Act (815 ILCS 333/3) excludes no residential lease; the Summary of Rights may be signed in an electronic version of the lease (765 ILCS 752/15(b)). |
| `assigned-parking-space` | assigned-parking-space | No Illinois statute on assigned parking in residential leases located; a required parking charge is a non-optional fee listed on page 1 (765 ILCS 705/35(b)). The fee law applies to leases entered into after its effective date (January 1, 2027 in official recor… |
| `parking-vehicle-rules` | parking-vehicle-rules | Towing 'in accordance with applicable law': 625 ILCS 5/4-203(f) reaches vehicles left 'without permission', so a tenant's permitted vehicle may need other authority (edu-towing-il). A tag or decal cost that every tenant must pay is a non-optional fee that must… |
| `pet-insurance-requirement` | pet-insurance-requirement | The assistance-animal exclusion matches 310 ILCS 120/10(f) (no pet deposit, fee or special insurance for an assistance animal). |
| `assistance-animal-accommodation` | assistance-animal-accommodation | Consistent with the Assistance Animal Integrity Act (310 ILCS 120/10): documentation only when the disability or need is not readily apparent; no pet deposit or fee; the resident pays for damage beyond reasonable wear and tear; the clause's denial grounds are … |
| `rent-payment` | rent-payment | No Illinois statute on rent timing; 'without ... deduction, or setoff, except as permitted by applicable law' preserves repair-and-deduct (765 ILCS 742/5), landlord-paid utility deductions (765 ILCS 735/1) and radon mitigation deductions (420 ILCS 46/30(b)). |
| `late-fee` | late-fee | No statewide Illinois late-fee cap or grace period (edu-late-fee-il). The non-waiver sentence does not conflict with the statutory partial-payment rule for 5-day notices (735 ILCS 5/9-209). The fee must also appear on page 1 (765 ILCS 705/35(b); fee-disclosure… |
| `due-at-signing` | due-at-signing | Any non-optional fee listed here must also appear on page 1 (765 ILCS 705/35(b)); a banned fee (765 ILCS 705/35(c)) may not be listed. The fee law applies to leases entered into after its effective date (January 1, 2027 in official records; the Act's text says… |
| `application-of-payments` | application-of-payments | No Illinois statute sets the order in which a tenant's payment is applied (none located in the Acts read whole). Rent-first is the library default. |
| `guest-policy` | guest-policy | No Illinois statute on guests located; a landlord may also bar a non-tenant by written notice (735 ILCS 5/9-106.2(f)). |
| `guest-policy-day-limit` | guest-policy-day-limit | No Illinois statute on guest stays located. |
| `common-area-use` | common-area-use | No Illinois flag or display statute for tenants (whole-code batteries 18 and 119; edu-no-flag-display-rule-il); the carve-out is inert for IL. |
| `fire-safety-grilling` | fire-safety-grilling | No Illinois statute on grills at rental housing located; local fire codes not read. |
| `landscaping-irrigation` | landscaping-irrigation | No Illinois statute limits assigning yard care to a tenant. |
| `snow-removal` | snow-removal | No Illinois statute limits assigning snow removal to a tenant; the Snow and Ice Removal Act (745 ILCS 75) not read. |
| `inspection-rights` | inspection-rights | No Illinois entry statute (edu-no-entry-statute-il); a fee for a move-in or move-out walk-through is banned (765 ILCS 705/35(c)(11)) and none is charged here. The fee law applies to leases entered into after its effective date (January 1, 2027 in official reco… |
| `security-deposit-use` | security-deposit-use | Withholding for damage beyond normal wear and tear requires the itemized statement (765 ILCS 710/1(a)); security-deposit-return-il and deposit-cost-schedule-il supply the Illinois mechanics. |
| `residential-use-only` | residential-use-only | No Illinois statute on residential-use clauses located. |
| `existing-condition` | existing-condition | No Illinois move-in inspection statute (whole-code battery 101: 5 sections, 765 ILCS 705/35, which bans a walk-through fee, 405 ILCS 125/30 (Housing is Recovery Pilot Program Act), 810 ILCS 5/9-102, 810 ILCS 5/9-311 and 815 ILCS 180/5, none a landlord inspecti… |
| `permitted-occupants` | permitted-occupants | Reasonable occupancy limits are exempt from the Human Rights Act (775 ILCS 5/3-106(D)); familial-status discrimination is not (775 ILCS 5/3-102). |
| `no-disturbance` | disturbance | No Illinois statute on tenant conduct clauses located. |
| `smoking-policy` | smoking-policy | A landlord may prohibit smoking cannabis (410 ILCS 130/40(a)(1)) and need not allow a lessee to use cannabis on the property (410 ILCS 705/10-30(c)); no smoke-free housing statute (whole-code battery 70, 0 hits). |
| `utilities-responsibility` | utilities-responsibility | If a tenant-paid meter also serves common areas or other units, the written statement and 12 months of bills must precede the lease offer (765 ILCS 735/1.2(a); edu-shared-meter-utilities-il). |
| `utility-service-continuity` | utility-service-continuity | No Illinois statute limits this tenant duty; the landlord's own shutoff ban is 765 ILCS 735/1.4. |
| `utility-payment-evidence` | utility-payment-evidence | No Illinois statute on this located. |
| `tenant-maintenance` | tenant-maintenance | No Illinois statute sets tenant maintenance duties beyond alarms (425 ILCS 60/3(d); 430 ILCS 135/10(c); smoke-co-alarms-il); the carve-out preserves landlord duties. |
| `no-sublet-assign` | sublet-assign | No Illinois statute limits a landlord's consent to subletting (whole-code battery 61; 95 found only 765 ILCS 155/10 and 65 ILCS 5/8-10-14, unrelated). Chicago's ordinance limits refusal (flag, not read). |
| `joint-liability` | joint-liability | No Illinois statute on co-tenant liability located. |
| `no-alterations` | alterations | The carve-out preserves disability modifications (775 ILCS 5/3-102.1(C)(1)), EV charger installation (765 ILCS 1085/35), Safe Homes lock changes (765 ILCS 750/20) and radon mitigation with consent (420 ILCS 46/30(b)). |
| `landlords-access` | landlord-entry | No Illinois entry statute (edu-no-entry-statute-il); 24 hours' notice is the Lease's term. |
| `default-by-tenant` | default-by-tenant | Step D rule 43: the cure promise for other breaches carves out cases where 'applicable law permits Landlord to proceed without giving Tenant an opportunity to cure', which covers the 10-day notice to quit (735 ILCS 5/9-210) and voiding for crimes or drugs (735… |
| `tenant-forward-proceedings-ca` | tenant-forward-proceedings | No Illinois statute on this located. |
| `early-termination-ks` | early-termination | early-termination not tagged: its 10-day cure for a material breach would give away the no-cure 10-day notice to quit (735 ILCS 5/9-210; Step D rule 43). The early-termination fee is the tenant's option under the lease, not a renewal or modification fee barred… |
| `holdover-ca` | holdover | holdover not tagged: its 'maximum amount permitted by applicable law' states only a ceiling (rule 53). Illinois sets its own measures (double yearly value after written demand for a willful holdover, 735 ILCS 5/9-202; double rent after the tenant's own notice,… |
| `surrender-end-of-term-ks-ne` | surrender-end-of-term | Points to abandoned-property-il ('Handling of Property Left Behind'). A fixed term ends without notice (735 ILCS 5/9-213); Illinois has no just-cause statute (Step D rule 41). |
| `tenants-property-insurance-ks-oh-ca` | tenants-property-insurance | Tagged instead of tenants-property-insurance, whose 'Landlord is not liable for any such loss or damage' is void to the extent it covers the landlord's negligence (765 ILCS 705/1; Step D rule 52). No statute regulates a landlord's renter's-insurance requiremen… |
| `parking-ks-oh-ca` | parking | Tagged instead of parking, whose 'not liable for damage to or theft of a vehicle' is void to the extent it covers the landlord's negligence (765 ILCS 705/1; Step D rule 52). |
| `storage-space-ks-oh-ca` | storage-space | Tagged instead of storage-space, whose 'not liable for damage to or theft of items' is void to the extent it covers the landlord's negligence (765 ILCS 705/1; Step D rule 52). |
| `services-utilities-provided-ks-oh` | services-utilities-provided | Tagged instead of services-utilities-provided, whose 'not liable for any interruption' could reach the landlord's own negligence (765 ILCS 705/1; Step D rule 52). Landlord-paid utilities: 765 ILCS 735/1. |
| `possession-delay` | possession-delay | No Illinois statute on delivery of possession located; the clause's rent abatement and 30-day termination are Lease terms. |
| `acceptable-payment-methods-nj` | acceptable-payment-methods | Tagged instead of acceptable-payment-methods (which allows an electronic-only list): a landlord may not require payment by electronic funds transfer (765 ILCS 705/4, leases executed after 2024-01-01; from 90 days after that date a violation is a Consumer Fraud… |
| `ev-charging-shared-area-co` | ev-charging-shared-area | Matches 765 ILCS 1085/35(a)(2)(C) (reasonable fee to reserve a space in an area accessible to other tenants) and (d)(1)-(2) (tenant and successive tenants responsible for damage and upkeep unless otherwise agreed in writing). Requirements: ev-charging-requirem… |
| `ev-charging-end-of-tenancy-co` | ev-charging-end-of-tenancy | Matches 765 ILCS 1085/35(e) (system installed at the tenant's cost is the tenant's property; may remove or sell at an agreed price; no duty to buy). |

### 2.2 Not tagged — Illinois variant or IL row instead (13 bases)

| Base | Instead | Why the base fails in Illinois |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-il` | Instruction 24; 765 ILCS 710/1 |
| `acceptable-payment-methods` | `acceptable-payment-methods-nj` (tagged) | Allows an electronic-only list; 765 ILCS 705/4, 705/3.5 |
| `returned-payments` | `returned-payments-il` | Ceiling-only wording (rule 53); fee must be a stated figure on page 1 (765 ILCS 705/35(b)) |
| `holdover` | `holdover-ca` (tagged) | 'Maximum amount permitted' is ceiling wording against 735 ILCS 5/9-202 and 9-203 (rule 53) |
| `early-termination` | `early-termination-ks` (tagged) | 10-day cure for material breach gives away the 735 ILCS 5/9-210 no-cure notice (rule 43) |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) + `abandoned-property-il` | 'Disposed of at Tenant's cost' with no procedure |
| `keys` | `keys-il` | Charging for the Cook County turnover rekey (765 ILCS 705/15) |
| `pet-policy` | `pet-policy-il` | Indemnity and 'without liability' reach landlord negligence (765 ILCS 705/1) |
| `tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided` | ks-oh-ca / ks-oh variants (tagged) | 'Not liable' sentences void to the extent of landlord negligence (765 ILCS 705/1; rule 52) |
| `ev-charging-requirements-co` | `ev-charging-requirements-il` | Omits 765 ILCS 1085/35(c) written-agreement items and 14-day deadlines |

Also screened and not tagged: `extended-absence-notice-ks` (no Illinois statute; its willful-failure damages sentence rests on the Kansas act), `default-by-tenant-ks-ne` (the base `default-by-tenant`, with a prevailing-party fee sentence Illinois does not bar, was tagged instead), `late-fee-ne` (the base `late-fee` fits), `possession-delay-ca` (the base `possession-delay` fits; no Illinois delivery statute), `surrender-end-of-term-mn-nd` (points to a Minnesota-style section).

### 2.3 Other states' specific rows screened, not tagged
All 370 single-state lease clauses were read (full text for every topic Illinois law touches). Tagged: `acceptable-payment-methods-nj`, `holdover-ca`, `tenant-forward-proceedings-ca`, `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`. Not tagged because the text rests on another state's statute, form or figure: every `-ks`/`-ne`/`-mn`/`-nd`/`-sd`/`-oh`/`-ca`/`-nv`/`-tx`/`-nj`/`-fl`/`-az`/`-ga`/`-nc`/`-sc`/`-tn`/`-va`/`-al`/`-pa`/`-ut`/`-wy`/`-co` row on radon, flood, owner disclosure, abandoned property, alarms, casualty, periodic notice, pets, payment methods and returned payments (Illinois rows written instead, §3), and the rest as state-specific. `pet-policy-pa`'s text was the model for `pet-policy-il` and `casualty-termination-pa`/`-ut` for `casualty-termination-il`; `nonrefundable-deposit-notice-wy` has no Illinois basis.

## 3. New IL rows

### 3.1 Shared-row edits: none
No shared row's text changed; every existing-row change is an added `IL` tag with an `IL:` note.

### 3.2 New IL lease clauses (22)
| Row | rule_type | Basis | topic_key | Rests on | Optional? |
|---|---|---|---|---|---|
| `summary-of-rights-il` | REQUIRED | REQUIRED_DISCLOSURE: 765 ILCS 752/20 | tenant-rights-statement | 765 ILCS 752/20, 765 ILCS 752/15(a), 220 ILCS 5/8-201.6, 65 ILCS 5/1-2-1.5, 55 ILCS 5/5-1005.10 … | — |
| `fee-disclosure-first-page-il` | REQUIRED | REQUIRED_DISCLOSURE: 765 ILCS 705/35(b) | fee-transparency | 765 ILCS 705/35(b), 765 ILCS 705/35(c)(9), 765 ILCS 705/35(e), 765 ILCS 752/20 | — |
| `flood-disclosure-il` | REQUIRED | REQUIRED_DISCLOSURE: 765 ILCS 705/25(b)-(d) | flood-disclosure | 765 ILCS 705/25 | — |
| `radon-disclosure-il` | CONDITIONAL | REQUIRED_DISCLOSURE: 420 ILCS 46/26(a), (f) | radon-disclosure | 420 ILCS 46/26, 420 ILCS 46/20(9), 420 ILCS 46/30(c), 420 ILCS 46/26(b), 420 ILCS 46/15 | Conditional |
| `criminal-activity-notice-il` | REQUIRED | REQUIRED_DISCLOSURE: 735 ILCS 5/9-120(a) | criminal-activity | 735 ILCS 5/9-120(a) | — |
| `security-deposit-return-il` | REQUIRED | SERVES_LANDLORD | security-deposit-return | 765 ILCS 710/1(a), 765 ILCS 710/1(b), 765 ILCS 710/1(c) | —; supersedes `security-deposit-return` |
| `deposit-cost-schedule-il` | CONDITIONAL | SERVES_LANDLORD | deposit-cost-schedule | 765 ILCS 710/1(a) | Yes (rule 54) |
| `returned-payments-il` | RECOMMENDED | CONSTRAINED_TERM + SERVES_LANDLORD | returned-payments | 765 ILCS 705/35(b), 810 ILCS 5/3-806, 815 ILCS 205/4(1), 765 ILCS 705/4, 765 ILCS 705/3.5 | —; supersedes `returned-payments` |
| `pet-policy-il` | RECOMMENDED | SERVES_LANDLORD | pet-policy | 765 ILCS 705/1(a), 765 ILCS 710/1(a), 310 ILCS 120/10(f), 765 ILCS 745/9 | —; supersedes `pet-policy` |
| `abandoned-property-il` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | 735 ILCS 5/9-318, 765 ILCS 745/9.5, 735 ILCS 5/9-301, 735 ILCS 5/9-102(e), 625 ILCS 5/4-203(f) | — |
| `periodic-tenancy-notice-il` | RECOMMENDED | SERVES_LANDLORD | termination-notice | 735 ILCS 5/9-207(b), 735 ILCS 5/9-205, 735 ILCS 5/9-211, 735 ILCS 5/9-207.5 | — |
| `landlord-disclosure-il` | CONDITIONAL | REQUIRED_DISCLOSURE: 735 ILCS 5/9-320(b) | owner-identity-disclosure | 735 ILCS 5/9-320(a) | Conditional |
| `utility-formula-il` | CONDITIONAL | REQUIRED_DISCLOSURE: 765 ILCS 740/5(a) | utility-apportionment | 765 ILCS 740/5(a), 765 ILCS 735/1.2 | Conditional |
| `smoke-co-alarms-il` | REQUIRED | REQUIRED_DISCLOSURE: 425 ILCS 60/3(d); 430 ILCS 135/10(c) + SERVES_LANDLORD | alarm-duties | 425 ILCS 60/3(d), 430 ILCS 135/10(c), 425 ILCS 60/3(a), 430 ILCS 135/10(a) | — |
| `casualty-termination-il` | CONDITIONAL | SERVES_LANDLORD | casualty-termination | 765 ILCS 605/14, 765 ILCS 745/21 | Yes (standing GA rule) |
| `rent-concessions-il` | CONDITIONAL | SERVES_LANDLORD | rent-concession | 765 ILCS 730/2, 765 ILCS 730/3, 765 ILCS 730/4, 765 ILCS 730/6, 765 ILCS 730/5a | Conditional |
| `keys-il` | RECOMMENDED | SERVES_LANDLORD | keys | 765 ILCS 705/15(b), 765 ILCS 705/35(c)(9) | —; supersedes `keys` |
| `tenant-rekey-right-il` | CONDITIONAL | SERVES_LANDLORD | security-devices | 765 ILCS 705/15(d), 765 ILCS 705/15(f), 765 ILCS 750/20(b)(2) | Yes (rule 54) |
| `ev-charging-requirements-il` | CONSTRAINED | SERVES_LANDLORD | ev-charging-requirements | 765 ILCS 1085/35, 765 ILCS 1085/10(b) | — |
| `drug-free-housing-addendum-il` | CONDITIONAL | SERVES_LANDLORD | drug-free-housing-addendum | 765 ILCS 705/5(a) | Yes (rule 54) |
| `subsidized-inspection-refusal-il` | CONDITIONAL | SERVES_LANDLORD | subsidized-inspection-refusal | 735 ILCS 5/9-119(b)(2), 735 ILCS 5/9-119(a) | Yes (rule 54) |
| `cannabis-cultivation-il` | RECOMMENDED | SERVES_LANDLORD | cannabis | 410 ILCS 705/10-5(b)(5), 410 ILCS 130/40(a)(1), 410 ILCS 705/10-30(c) | Yes (rule 54) |

### 3.3 New IL education rows (72)
All RECOMMENDED, `lease_clause_basis` blank (rule 55).

| Row | topic_key | Rests on |
|---|---|---|
| `edu-rental-fee-law-il` | fee-transparency | 765 ILCS 705/35(a), 765 ILCS 705/35(e) |
| `edu-application-fees-il` | application-fees | 765 ILCS 705/35(c)(1), 765 ILCS 705/30 |
| `edu-payment-methods-il` | acceptable-payment-methods | 765 ILCS 705/4, 765 ILCS 705/3.5, 735 ILCS 5/9-218, 765 ILCS 705/3 |
| `edu-late-fee-il` | late-fee | 765 ILCS 705/35, 765 ILCS 745/6.5, 765 ILCS 745/12, 735 ILCS 5/9-104.1, 310 ILCS 125/5-5 |
| `edu-rent-control-preemption-il` | rent-control | 50 ILCS 825/5, 50 ILCS 825/10 |
| `edu-no-rent-increase-notice-il` | rent-increase-notice | CONFIRMED ABSENT; 765 ILCS 721/5, 765 ILCS 735/4, 735 ILCS 5/15-1704, 35 ILCS 200/15-175, 410 ILCS 43/30 … |
| `edu-rent-receipts-il` | rent-receipts | CONFIRMED ABSENT; 765 ILCS 745/6, 735 ILCS 5/15-1224 |
| `edu-rent-tax-il` | rent-tax | 35 ILCS 145/2(5) |
| `edu-nonpayment-notice-il` | nonpayment-notice | 735 ILCS 5/9-209, 735 ILCS 5/9-211 |
| `edu-interest-on-unpaid-amounts-il` | unpaid-damages-interest | 815 ILCS 205/2, 810 ILCS 5/3-806, 815 ILCS 205/4 |
| `edu-deposit-return-rules-il` | security-deposit-penalty | 765 ILCS 710/1(a), 735 ILCS 5/9-120(c), 765 ILCS 705/5(b), 740 ILCS 40/11(b), 420 ILCS 46/30(c) |
| `edu-deposit-interest-il` | security-deposit-interest | 765 ILCS 715/1, 765 ILCS 715/2, 765 ILCS 715/3, 765 ILCS 710/1.1 |
| `edu-no-security-deposit-cap-il` | security-deposit-cap | CONFIRMED ABSENT; 775 ILCS 5/3-102.1(C)(1) |
| `edu-deposit-on-sale-il` | security-deposit-on-sale | 765 ILCS 710/1.1, 765 ILCS 710/1.2 |
| `edu-deposit-escheat-il` | deposit-escheat | 765 ILCS 1026/15-102, 765 ILCS 1026/15-201(15), 765 ILCS 1026/15-210 |
| `edu-habitability-il` | landlord-maintenance | 325 ILCS 3/20-45, 310 ILCS 105/25, 735 ILCS 5/15-1704, 720 ILCS 5/29D-15.1, 765 ILCS 705/25 … |
| `edu-repair-and-deduct-il` | tenant-repair-remedies | 765 ILCS 742/5, 765 ILCS 742/10, 765 ILCS 742/15, 765 ILCS 742/20, 765 ILCS 742/25 … |
| `edu-senior-housing-heating-il` | heating | 765 ILCS 705/20 |
| `edu-rekey-cook-county-il` | security-devices | 765 ILCS 705/15, 430 ILCS 160/1, 430 ILCS 160/2, 430 ILCS 160/3 |
| `edu-landlord-paid-utilities-il` | utility-landlord-account | 765 ILCS 735/1, 765 ILCS 735/1.1, 765 ILCS 735/1.3, 765 ILCS 735/2, 765 ILCS 735/2.2 … |
| `edu-shared-meter-utilities-il` | utilities-responsibility | 765 ILCS 735/1.2, 765 ILCS 740/5 |
| `edu-disability-modifications-il` | disability-accommodation | 775 ILCS 5/3-102.1(A), 775 ILCS 5/3-104.1 |
| `edu-unit-count-thresholds-il` | portfolio-thresholds | 765 ILCS 705/35(e), 765 ILCS 742/10, 775 ILCS 5/3-106(B), 765 ILCS 705/15(e), 735 ILCS 5/9-320(a) … |
| `edu-no-entry-statute-il` | landlord-entry | CONFIRMED ABSENT; 425 ILCS 60/3(d), 430 ILCS 135/10(c), 410 ILCS 45/9.1, 420 ILCS 46/26, 765 ILCS 705/15 … |
| `edu-notices-to-quit-il` | termination-notice | 735 ILCS 5/9-205, 735 ILCS 5/9-207, 735 ILCS 5/9-207.5, 735 ILCS 5/9-208, 735 ILCS 5/9-209 … |
| `edu-notice-service-il` | notice-delivery-methods | 735 ILCS 5/9-211, 765 ILCS 710/1(a), 815 ILCS 333/3, 765 ILCS 742/5 |
| `edu-eviction-process-il` | eviction-process | 735 ILCS 5/9-106(a), 735 ILCS 5/9-108, 735 ILCS 5/9-117 |
| `edu-minor-defendants-il` | minor-tenant-filing | 735 ILCS 5/9-106(b), 735 ILCS 5/9-121(c) |
| `edu-eviction-sealing-il` | eviction-record-sealing | 735 ILCS 5/9-121, 735 ILCS 5/9-207.5, 735 ILCS 5/15-1701(h)(6), 735 ILCS 5/9-106 |
| `edu-expedited-criminal-eviction-il` | expedited-criminal-eviction | 735 ILCS 5/9-120, 735 ILCS 5/9-118, 765 ILCS 705/5, 65 ILCS 5/1-2-1.5, 55 ILCS 5/5-1005.10 |
| `edu-drug-nuisance-il` | nuisance | 740 ILCS 40/11 |
| `edu-self-help-eviction-il` | self-help-eviction | 735 ILCS 5/9-101, 765 ILCS 735/1.4, 765 ILCS 735/2.1 |
| `edu-post-eviction-property-il` | post-eviction-property | CONFIRMED ABSENT; 735 ILCS 5/9-318, 765 ILCS 745/9.5, 735 ILCS 5/19-129 |
| `edu-mitigation-il` | abandonment-and-mitigation | 735 ILCS 5/9-213.1 |
| `edu-holdover-damages-il` | holdover | 735 ILCS 5/9-202, 735 ILCS 5/9-203 |
| `edu-distress-for-rent-il` | landlord-lien | 735 ILCS 5/9-301, 735 ILCS 5/9-302, 735 ILCS 5/9-303, 735 ILCS 5/9-313, 735 ILCS 5/9-315 … |
| `edu-foreclosure-tenants-il` | foreclosure | 735 ILCS 5/9-207.5, 735 ILCS 5/9-118, 735 ILCS 5/9-119, 735 ILCS 5/9-120, 735 ILCS 5/9-201 … |
| `edu-unauthorized-occupants-il` | unauthorized-occupant-removal | 735 ILCS 5/9-102(e), 720 ILCS 5/21-3, 735 ILCS 5/9-102 |
| `edu-no-just-cause-il` | for-cause-eviction | 735 ILCS 5/9-213, 735 ILCS 5/9-207, 765 ILCS 721/5, 775 ILCS 5/3-102, 735 ILCS 5/9-106.2 … |
| `edu-no-tenant-death-rule-il` | tenant-death | CONFIRMED ABSENT; 755 ILCS 15/1, 735 ILCS 5/9-216, 735 ILCS 5/9-217, 765 ILCS 945/10, 765 ILCS 1005/1c … |
| `edu-retaliation-il` | retaliation | 765 ILCS 721/5, 765 ILCS 721/10, 765 ILCS 721/15, 765 ILCS 721/20, 765 ILCS 721/95 |
| `edu-safe-homes-il` | dv-lease-termination | 765 ILCS 750/15, 765 ILCS 750/30, 765 ILCS 750/35, 735 ILCS 5/9-106.2(a), 765 ILCS 752/20 |
| `edu-dv-lock-change-il` | dv-lockchange | 765 ILCS 750/20, 765 ILCS 750/25, 765 ILCS 750/30, 765 ILCS 750/20(a)(2) |
| `edu-dv-confidentiality-il` | dv-confidentiality | 765 ILCS 750/27, 765 ILCS 750/29 |
| `edu-police-calls-il` | emergency-assistance-right | 65 ILCS 5/1-2-1.5, 55 ILCS 5/5-1005.10, 735 ILCS 5/9-106.2(a), 735 ILCS 5/9-106.2(f) |
| `edu-immigrant-tenant-protection-il` | immigration-status | 765 ILCS 755/10, 765 ILCS 755/15, 735 ILCS 5/9-106.3, 775 ILCS 5/3-102, 775 ILCS 5/3-106(M) |
| `edu-servicemember-rights-il` | servicemember-rights | 765 ILCS 705/16, 735 ILCS 5/9-107.10, 330 ILCS 63/35, 330 ILCS 63/50 |
| `edu-fair-housing-il` | fair-housing | 775 ILCS 5/3-102, 775 ILCS 5/3-106, 775 ILCS 5/1-103(B-5) |
| `edu-source-of-income-il` | source-of-income | 775 ILCS 5/1-103(O-5), 775 ILCS 5/3-102, 775 ILCS 5/3-106(B) |
| `edu-protected-class-inquiry-il` | protected-class-inquiry-ban | 775 ILCS 5/3-102(F), 775 ILCS 5/3-106(B) |
| `edu-assistance-animals-il` | assistance-animal-accommodation | 310 ILCS 120/10, 310 ILCS 120/15, 775 ILCS 5/3-104.1 |
| `edu-no-housing-misrepresentation-penalty-il` | service-animal-misrepresentation | CONFIRMED ABSENT; 720 ILCS 5/48-8 |
| `edu-radon-tenant-rights-il` | radon-disclosure | 420 ILCS 46/26(b), 420 ILCS 46/30, 420 ILCS 46/20(9), 420 ILCS 46/35 |
| `edu-lead-il` | lead-based-paint | 410 ILCS 45/9.1, 410 ILCS 45/2, 410 ILCS 45/9 |
| `edu-no-mold-disclosure-il` | mold-disclosure | CONFIRMED ABSENT; — |
| `edu-no-bed-bug-rule-il` | bed-bug-disclosure | CONFIRMED ABSENT; 815 ILCS 309/5, 765 ILCS 705/35(c)(10) |
| `edu-no-meth-disclosure-il` | meth-disclosure | CONFIRMED ABSENT; 735 ILCS 5/9-118, 725 ILCS 150/9, 730 ILCS 180/15 |
| `edu-condo-leasing-il` | hoa | 765 ILCS 605/18(n), 765 ILCS 605/18, 765 ILCS 605/9.2 |
| `edu-condo-conversion-il` | conversion-notice | 765 ILCS 605/30 |
| `edu-towing-il` | towing | 625 ILCS 5/4-203(f) |
| `edu-ev-charging-il` | ev-charging | 765 ILCS 1085/35, 765 ILCS 1085/10(b) |
| `edu-cannabis-il` | cannabis | 410 ILCS 705/10-5(b)(5), 410 ILCS 705/10-30(b), 410 ILCS 130/40(a) |
| `edu-prohibited-lease-terms-il` | prohibited-lease-terms | 765 ILCS 705/1, 735 ILCS 5/9-108, 765 ILCS 705/4, 765 ILCS 705/35(b), 765 ILCS 750/30 … |
| `edu-attorney-fees-il` | attorney-fees | 625 ILCS 5/11-208.7, 810 ILCS 5/2A-108, 765 ILCS 515/10, 765 ILCS 735/1.3, 765 ILCS 750/25 … |
| `edu-statutory-forms-il` | statutory-forms | 765 ILCS 705/25(d), 420 ILCS 46/26(f), 735 ILCS 5/9-120(a), 735 ILCS 5/9-209, 735 ILCS 5/9-210 … |
| `edu-scope-il` | scope | — |
| `edu-sex-offender-landlord-il` | sex-offender-occupancy | 765 ILCS 705/10, 775 ILCS 5/3-106(J) |
| `edu-firearms-il` | firearms | 430 ILCS 66/65(a-10), 430 ILCS 66/65(d), 310 ILCS 10/25, 520 ILCS 5/3.1, 735 ILCS 5/9-118 |
| `edu-no-flag-display-rule-il` | tenant-display-rights | CONFIRMED ABSENT; 820 ILCS 151/5 |
| `edu-no-lease-copy-rule-il` | lease-copy | 765 ILCS 745/6, 765 ILCS 745/8, 765 ILCS 605/18(n), 765 ILCS 160/1-35, 765 ILCS 752/25 |
| `edu-no-renters-insurance-rule-il` | renters-insurance-rules | CONFIRMED ABSENT; 215 ILCS 5/143.10e, 215 ILCS 136/15, 215 ILCS 5/500-105, 215 ILCS 5/500-107, 625 ILCS 5/6-305.2 … |
| `edu-no-stigmatized-property-rule-il` | stigmatized-property | 225 ILCS 454/15-20 |

New `topic_key`s (rule 58): `deposit-cost-schedule`, `rent-concession`, `drug-free-housing-addendum`, `subsidized-inspection-refusal`.

## 4. Layout and placement (rule 40)

**Code-wide typography and placement search** (batteries 123-127): bold, boldface, underline, capital letters, point or type size near lease, rental agreement, lessee, tenant or landlord (8 hits in 6 sections: foreclosure abandonment notices (735 ILCS 5/15-1505.8), self-storage (770 ILCS 95/7.5), motor-vehicle leasing (815 ILCS 636), mortgage rescue (765 ILCS 940/30), 625 ILCS 27/20); 'conspicuous' near lease (11 sections, none a residential lease-term rule: 765 ILCS 705/35 listing disclosure, 765 ILCS 735/3 utility notice, 765 ILCS 605/30 purchase contract, 735 ILCS 5/9-106.2 posted barring notice, Smoke Free Illinois signs); 'separate document/writing/agreement' near lease (13 sections, only 765 ILCS 750/30 relevant: no waiver 'in any lease or separate agreement'); 'substantially similar / in the following form' near lease (14 sections; lease-relevant: 765 ILCS 705/5, 705/25, 735 ILCS 5/9-206, 9-210); 'first page' near lease (3 sections: 765 ILCS 705/35, 752/5, 752/20). **No bold, capitals or type-size rule for any residential lease term.**

| Rule | Requirement | Where it lives |
|---|---|---|
| 765 ILCS 752/20 | IDHR summary attached as the **first page** of every written lease and renewal; each tenant signs the bottom of each page | `summary-of-rights-il` (builder: prepend the current summary) |
| 765 ILCS 705/35(b) | Every non-optional fee explicitly on the **first page** of the lease, or not owed; lease or listing states whether utilities are included | `fee-disclosure-first-page-il` (builder: first box of the lease body, §6.2) |
| 765 ILCS 705/25(b)-(d) | Flood disclosure in writing **before signing**, also in the lease or renewal, signed by both; form 'substantially similar' | `flood-disclosure-il` (builder: deliver before signing too) |
| 420 ILCS 46/26(a), (f) | Radon pamphlet, records and statutory form at application or before the lease (units below the third story) | `radon-disclosure-il` |
| 735 ILCS 5/9-120(a) | Written lease must notify the lessee of the felony / Class A misdemeanor void right | `criminal-activity-notice-il` |
| 735 ILCS 5/9-320(b) | Manager-and-insurer notice may go in the lease instead of a posted notice of at least 20 square inches | `landlord-disclosure-il` |
| 765 ILCS 740/5(a) | Allocation formula in writing, in the lease or another written agreement, before demanding a share of master-metered utilities | `utility-formula-il` |
| 765 ILCS 730/3 | 'Concession Granted' legend in letters at least one-half inch high across a lease whose concession is not stated | `rent-concessions-il` states the concession, avoiding the legend |
| 765 ILCS 705/5(d) | HUD drug-free housing addendum or a substantially similar document, signed | `drug-free-housing-addendum-il` |
| 735 ILCS 5/9-119(b)(2)(D) | Lease must state that refusals of inspection may result in eviction | `subsidized-inspection-refusal-il` |
| 765 ILCS 735/1.2(a) | Shared-meter statement and 12 months of bills **before** a lease is offered (separate document) | `edu-shared-meter-utilities-il` (builder: pre-lease form) |
| 410 ILCS 45/9.1 | IDPH lead brochure before a lease of pre-1978 housing (separate delivery) | `edu-lead-il` |
| 735 ILCS 5/9-209 | Nonpayment notice must 'prominently state' the full-payment sentence | `edu-nonpayment-notice-il` (a notice, not the lease) |
| 425 ILCS 60/3(d); 430 ILCS 135/10(c) | Written alarm testing and maintenance information to one tenant per unit | `smoke-co-alarms-il` |

**Omission sanctions that forfeit money:** fee not on page 1 is not owed (765 ILCS 705/35(b)); deposit statement refused or in bad faith: twice the deposit, costs and fees (765 ILCS 710/1(c)); willful failure to pay deposit interest: an amount equal to the deposit (765 ILCS 715/2); summary not attached: greater of actual damages up to $2,000 or $100, plus fees (765 ILCS 752/30); flood non-disclosure: termination and refund of prepaid rent and fees within 15 days, damages (765 ILCS 705/25(e)); utility shutoff by landlord: full rent abatement plus damages (765 ILCS 735/2.1); retaliation: greater of 2 months' rent or twice damages (765 ILCS 721/10); EV violation: up to $1,000 (765 ILCS 1085/35(f)); Safe Homes disclosure and immigrant-status violations: up to $2,000 (765 ILCS 750/29; 765 ILCS 755/15); condominium conversion without notice: moving costs up to $1,500 plus 3 months' rent (765 ILCS 605/30(a)(2)); servicemember termination refused: civil rights violation (765 ILCS 705/16(e)).

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged IL.

## 6. Decisions

### 6.1 Question asked of Taylor (rule 76), 2026-09-30: the P.A. 104-479 effective date
**What it is:** the new rental-fee law (for example, the $50 application-fee cap and the rule that every required fee must be on page 1 of the lease) says in its own text that it starts July 1, 2026, but the General Assembly's records and the statute books say January 1, 2027. **Recommendation sent:** no research mode (it cannot settle a records conflict); comply now and cite both dates. **Taylor (2026-09-30): apply it now, better safe than sorry.** `fee-disclosure-first-page-il` applies now; the main education rows state both dates and the others say 'for leases it covers'; §10 flags it for the legal watch.

### 6.2 Question asked of Taylor (rule 76), 2026-09-30: two statutes each want the first page
**What it is:** one law requires the Department of Human Rights' summary of domestic-violence protections to be attached as the first page of every lease (765 ILCS 752/20), and another requires every required fee to be on the first page of the lease (765 ILCS 705/35(b)); both cannot literally be page 1. **Recommendation sent:** put the summary pages first as an attachment ('attach … as the first page'), open the lease body itself with a 'Fees and Utilities' box listing every non-optional fee and whether utilities are included; note that courts have not read these together (unread) and that the fee statute exempts owner-occupied buildings of 6 or fewer units. **Taylor (2026-09-30): the summary is an attachment, not part of the lease itself, so the fee box goes on the lease's first page.** `summary-of-rights-il` (attachment, first pages) and `fee-disclosure-first-page-il` (first box of the lease body). The fee box also lists the late fee and returned-payment fee so that a court reading them as non-optional finds them on page 1 (Claude's decision, landlord-protective).

### 6.3 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| Lease-specified cleaning, repair and replacement costs withheld from the deposit | 765 ILCS 710/1(a) 'If a written lease specifies the cost … the lessor may withhold the dollar amount specified' | **Offered** (`deposit-cost-schedule-il`, CONDITIONAL). Decided by Claude: the statute expressly lets the lease decide |
| Tenant right to rekey instead of the landlord's Cook County turnover rekey | 765 ILCS 705/15(d) | **Offered** (`tenant-rekey-right-il`, CONDITIONAL). Decided by Claude |
| Manager-and-insurer notice in the lease instead of posting | 735 ILCS 5/9-320(b) | **Offered as a conditional required disclosure** (`landlord-disclosure-il`): the notice is required; the lease is one permitted vehicle |
| Drug-free housing addendum (Class X felony voiding) | 765 ILCS 705/5(d) | **Offered** (`drug-free-housing-addendum-il`, CONDITIONAL); the HUD form itself not read (rule 21) |
| Subsidized-housing inspection-refusal statement | 735 ILCS 5/9-119(b)(2)(D) | **Offered** (`subsidized-inspection-refusal-il`, CONDITIONAL) |
| Cannabis cultivation ban | 410 ILCS 705/10-5(b)(5) | **Offered** (`cannabis-cultivation-il`) |
| Landlord or tenant termination after a casualty | no Illinois statute (batteries 89, 97, 98) | **Offered** (`casualty-termination-il`, CONDITIONAL); standing GA decision |
| Stipulated holdover rate | 735 ILCS 5/9-202, 9-203 set statutory measures | **Not offered** (standing GA rule: only where no statutory measure exists) |
| Notice-service or eviction-notice fee | 765 ILCS 705/35(c)(4) bans it | **Barred;** `edu-rental-fee-law-il` |
| Confession of judgment | 735 ILCS 5/2-1301(c) bans it in 'consumer transactions' (goods, services, intangibles); reach to real-property leases unread | **Not offered;** `edu-prohibited-lease-terms-il` |
| Jury-trial waiver | 735 ILCS 5/9-108: either party may demand a jury 'notwithstanding any waiver' | **Barred** |
| Waiver of exemptions or homestead | 735 ILCS 5/12-904 (homestead releases); 735 ILCS 5/12-1001 not read | **Not offered:** no landlord use in a residential lease was identified, and the personal-property exemption statute was not read |
| Waiver of the 5-day demand or 10-day notice | none in Article IX (read whole in Parts 2-3) | **Not offered:** no statute lets a lease waive them; case law not read |
| Separate crime-free clause | 735 ILCS 5/9-120 (void at lessor's option for felony or Class A misdemeanor use); 740 ILCS 40/11 (drugs); 735 ILCS 5/9-118 | **Not offered:** `criminal-activity-notice-il` already carries the statutory right and `residential-use-only` bars illegal use; municipal crime-free ordinances are limited by 65 ILCS 5/1-2-1.5 and 55 ILCS 5/5-1005.10. Decided by Claude |
| Landlord barring notice clause | 735 ILCS 5/9-106.2(f) works 'whether or not this provision is contained in the lease' | **Not needed** |
| Firearm restriction | 430 ILCS 66/65(a-10) (owner may bar concealed carry on property under its control; whether a leased unit is, unread) | **Not offered;** `edu-firearms-il` |

### 6.4 Other drafting decisions made by Claude (recorded, not asked)
- `security-deposit-return-il` promises the balance after deductions within 45 days of vacating; the statute states 45 days only for full return without a statement. A lease promise at least as generous as the statute.
- `abandoned-property-il` sets a contract procedure (notice, at least 10 days to collect) because Illinois has no statute; the 10-day floor is a caution, not a statutory figure.
- `periodic-tenancy-notice-il` uses a fixed 30 days for both parties, ending on the last day of a rental month (no new variable).
- `keys-il` adds a statewide exception for any lock change the law requires between tenancies (one version lawful everywhere in Illinois, rule 32).
- `ev-charging-requirements-il` written in Illinois' own words rather than tagging the Colorado row.
- `early-termination-ks`: the early-termination fee is the tenant's option under the lease, not a renewal or modification fee barred by 765 ILCS 705/35(c)(3).
- `edu-source-of-income-il`: the definition does not list vouchers; the row says it is 'generally read to include' them, not statutory text.

## 7. Open items (none blocking)

| Item | Boundary / what would close it |
|---|---|
| P.A. 104-479 effective date | Taylor decided to apply now (§6.1); which date governs stays on the legal watch. |
| First-page layout | Taylor decided (§6.2); no case law read on reading 765 ILCS 752/20 and 765 ILCS 705/35(b) together. |
| Case law (not read) | Implied warranty of habitability and its waiver; penalty doctrine for late and returned-payment fees; waiver by accepting rent outside 735 ILCS 5/9-209; whether month-to-month notice must end on a period's last day; lockouts under 735 ILCS 5/9-101; conversion of abandoned property; control of a leased unit under 430 ILCS 66/65(a-10); constructive eviction and casualty. |
| Sections not read beyond context | 735 ILCS 5/15-1224 ('bona fide lease'), 5/15-1701(h)(6), 5/12-1001 (exemptions); 720 ILCS 5/21-3 (criminal trespass); 765 ILCS 1085/35(h) (associations); 765 ILCS 1026 holder duties and 15-210; 430 ILCS 66/65(d) (signs); 410 ILCS 45/9 (mitigation notices); 765 ILCS 77 (Residential Real Property Disclosure Act, sales); 765 ILCS 60 (Property Owned By Noncitizens Act); 815 ILCS 601 (Automatic Contract Renewal Act) as to leases; 65 ILCS 5/11-31-2 and 11-139-8; 770 ILCS 60 (Mechanics Lien Act); 740 ILCS 80 (Frauds Act); 765 ILCS 160/1-35 after P.A. 104-734. |
| Administrative and agency material | The current IDHR summary (V.2025-12.3 seen; builder must fetch the current version); IEMA radon pamphlet; IDPH lead brochure; Supreme Court standardized eviction forms; Ill. Adm. Code not read. |
| Federal (rule 21) | Lead disclosure (40 CFR 745.113; 42 U.S.C. 4852d), SCRA, Fair Housing Act, HUD drug-free housing addendum: cited or referred to, not read. |
| Local ordinances | Chicago RLTO, Cook County RTLO, Evanston, Urbana, Mount Prospect: flagged, not resolved (rule 3). |
| Mobile homes | 765 ILCS 745 out of scope. |

## 8. Integrity checks on the delta
- **Format:** 148 rows plus header; 17 columns, header identical to the master's; CRLF record endings (149); 4 line feeds inside the `flood-disclosure-il` body field, which keeps the statutory form's paragraph breaks (the master also has line feeds inside fields); every record parses to 17 fields.
- **Ids and links:** no duplicate ids; no new id collides with a master id; no dangling `supersedes` (`security-deposit-return-il` → `security-deposit-return`, `returned-payments-il` → `returned-payments`, `pet-policy-il` → `pet-policy`, `keys-il` → `keys`, all existing); no superseded row is tagged IL.
- **Topics:** no two IL lease clauses share a `topic_key` (companions use new keys: `deposit-cost-schedule`, `drug-free-housing-addendum`, `subsidized-inspection-refusal`; `rent-concession` is a new subject).
- **Required fields:** every IL row has `verification_status` (all VERIFIED), `effective_from` / `last_checked` 2026-09-30 for new rows and `last_checked` 2026-09-30 for tagged rows. Every new IL lease clause has a `lease_clause_basis`; no education row has one. Every new row's notes start 'IL:'.
- **Tagged rows:** for each of the 54, only `states` (+IL), `notes` (the old notes are an exact prefix, then ' | IL: …') and `last_checked` changed.
- **Counts:** IL 0 → 148 active (76 lease clauses, 72 education). Every other state's active count unchanged: AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 108, SC 111, SD 99, TN 132, TX 137, UT 122, VA 135, WY 107.
- **Variables (rule 60):** new rows use only kickoff names: `monthly_rent`, `late_fee_amount`, `late_fee_grace_days`, `landlord_name`, `property_address`, `pet_deposit`, `pet_rent_amount`. No new variable. No bracket next to a variable.
- **Citation screen (rules 21-22):** every ILCS citation in IL text carries the full prefix (continuation forms such as '765 ILCS 742/5, 742/10' expanded; programmatic check found 0 bare section references). All 193 distinct ILCS sections cited in IL text exist in the loaded current code. Non-ILCS citations: Ill. S. Ct. R. 139 and R. 99.2 (court rules), 40 CFR 745.113 and 42 U.S.C. 4852d (federal), all flagged.

## 9. Propagation notes (rule 62)
**None owed.** No shared row's text changed. Every change to an existing row is an added `IL` tag with an `IL:` note, a states-only change under §5a.1.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Stale cross-reference (rule 77).** 420 ILCS 46/15 says the Radon Awareness Act applies to leased properties 'to the extent specified in Section 25', a repealed section; the lease rules now live in 46/26 and 46/30. Legal watch.
2. **P.A. 104-479 effective-date conflict** (§1.2, §6.1): the Act's text says July 1, 2026; every official record says January 1, 2027. Legal watch.
3. **Two first-page mandates** (765 ILCS 752/20 and 765 ILCS 705/35(b)). The builder needs a page-order feature: the summary attachment first, then the lease body opening with `fee-disclosure-first-page-il`. **For Claude Code (Taylor, 2026-09-30, to work out in the app):** check whether the builder produces a cover page or table of contents. Under 765 ILCS 705/35(b) a cover page or table of contents bound into the lease would likely count as its 'first page', and any non-optional fee not on that page is not owed. For Illinois leases (outside the owner-occupied 6-units-or-fewer exemption), nothing that is part of the lease may come before the fee box. Either omit the cover page and table of contents, put the fee box (with parties, property and rent) on the cover page, or move the table of contents after page 1. The DV summary is an attachment and may come first (§6.2). The row's builder note was not changed; Taylor will decide the layout in the app.
4. **Non-optional fees scattered in shared clauses.** `parking-vehicle-rules` (tag or decal cost), `pet-policy-il` (pet rent), `utility-formula-il`, `returned-payments-il` and `late-fee` each carry a charge that, if mandatory, must be on page 1 in Illinois. The builder should pull every charge the landlord enters into the first-page box automatically.
5. **New `{{variables}}`:** none.
6. **Consolidation candidates.** The base `acceptable-payment-methods` allows an electronic-only list; Illinois and New Jersey both need a non-electronic option (`acceptable-payment-methods-nj`). Ceiling-only `returned-payments` has now been replaced in UT and IL. `keys` charges turnover rekeys that Illinois' Cook County rule makes the landlord's duty. Not changed (rule 62).
7. **Real leases in circulation.** The MainStreet 2026 lease exempts the landlord from liability except for gross negligence and adds an indemnity, which 765 ILCS 705/1 voids for residential leases; the Chicago Association of REALTORS 2025 Chicago lease (V12.0) predates the 2026 summary-of-rights requirement. Informational.
8. **Future-dated law:** IHRA definitions (P.A. 104-793, 1-1-27; P.A. 104-744, 6-1-27) and CICAA 1-35 (P.A. 104-734) need a legal-watch date.
9. **Cook County** as the only county over 3,000,000 rests on secondary knowledge; the census was not read.
10. **Battery quality.** The independent check found three absence claims resting on search patterns that could not match the statute's own wording (apostrophe placement, 'copy of the signed lease', plural 'flags'); reruns fixed them (§13). Proposed SOP change below.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-IL-delta.csv` | 148 rows (54 tagged, 94 new); IL 148 active, all VERIFIED; integrity checks pass (§8) |
| `lease-clause-decision-log-IL.md` | This file |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| 1. Deposit thresholds, return, penalties, sale | **Partly held.** The Return Act has **no** unit threshold since P.A. 103-224 (eff. 1-1-24); 30-day itemized statement with receipts, 45-day full return, double damages for bad faith (765 ILCS 710/1). The Interest Act applies at **25 or more units**, deposits held over 6 months (765 ILCS 715/1-2). Sale: transferee liable, transferor jointly (710/1.1); foreclosure transfer notice in 21 days (710/1.2). |
| 2. Landlord and Tenant Act: exculpation, fees, payment methods | **Held and grew.** 705/1 voids exculpation for landlord negligence (residential). Payment: no required EFT (705/4), portal-fee alternative (705/3.5). New since the lead: flood disclosure (705/25), reusable screening report (705/30), rental fee transparency and junk-fee ban (705/35, P.A. 104-479), 55+ heating (705/20), Cook County rekey (705/15), military termination (705/16), Class X voiding (705/5), sex-offender landlord (705/10). |
| 3. Eviction by tenancy type, waiver, sealing, property, court rules | **Held.** 5-day rent demand with a required partial-payment sentence (9-209); 10-day notice to quit, no cure (9-210); 7/30/60 days by tenancy type (9-205, 9-207); foreclosure 90 days (9-207.5); sealing (9-121); minors not named (9-106); jury waiver ineffective (9-108); no statute on property left behind; Ill. S. Ct. R. 139 and R. 99.2. |
| 4. IHRA classes, exemptions; Immigrant Tenant Protection Act | **Held.** Source of income, arrest record and immigration status are protected; exemptions for owner-occupied 4 or fewer units and rooms (not advertising, and only for Section 3-102); the Immigrant Tenant Protection Act (765 ILCS 755) exists. |
| 5. Retaliation, Safe Homes, utilities, rent control | **Held with a correction.** 765 ILCS 720 is repealed; the Landlord Retaliation Act is 765 ILCS 721 (P.A. 103-831). Safe Homes (765 ILCS 750) and the Summary of Rights Act (765 ILCS 752). Utilities: 765 ILCS 735 and 740. Rent control preempted (50 ILCS 825). |
| 6. Radon, alarms, bed bugs, flood | **Held except bed bugs.** Radon disclosure form (420 ILCS 46/26); alarm duties split (425 ILCS 60/3(d); 430 ILCS 135/10(c)); flood disclosure (765 ILCS 705/25); **no** bed bug statute (the Bedbug Inspection Act covers furniture rental). |
| 7. Local ordinances | Flagged, not resolved; state rows do not depend on them. Home rule: 765 ILCS 705/35(d) lets local fee rules only be stricter; 765 ILCS 742/30 bars diminishing repair rights; 50 ILCS 825/10 bars home-rule rent control. |

## 13. Independent check
A separate agent, which had not seen the drafting, checked every IL row against the saved sources and battery logs: about 750 claims, including 4 verbatim texts, about 120 numbers and about 30 absence claims, and it re-ran three logged search patterns against the saved texts. It reported 27 items: 4 wrong (the radon entry claim, battery 101's count, and the renter's-insurance and lease-copy absence bases) and 23 imprecise or resting on narrow searches. After the fixes the same agent re-verified all 27 (26 fixed; 1 partly fixed, the fee-law date condition, then completed) and checked this log against the CSV (four inconsistencies in counts and wording, corrected). Results and fixes:
- **Verbatim:** the 9-209 sentence is exact; the radon and flood forms match apart from the listed changes (now listed completely in the notes; the flood form keeps its paragraph breaks); the 9-120(a) clause was reworded, so it now follows the statutory sentence with three listed substitutions.
- **Wrong, fixed:** a claim that the radon statute gives an entry right (removed); a note that miscounted battery 101's hits (corrected).
- **Absence bases defective, fixed by reruns:** renter's insurance (battery 75 could not match "renter's": batteries 116-117), lease copy (112 too narrow: 118, which found the common-interest community rule, now in the row), flags and displays (18 too narrow: 119), security devices (39 unreliable: 121, which **found the Peephole Installation Act**, now in `edu-rekey-cook-county-il`); also post-eviction property (120) and stigmatized property (122, which found the Real Estate License Act's licensee rule, now in the row).
- **Imprecise, fixed:** rental-fee law rows now state the effective-date condition; IHRA exemptions limited to Section 3-102; foreclosure successors keep the grounds preserved by 9-207.5(c); EV right limited to buildings with parking spaces; payment-method dates 'after' and the 90-day Consumer Fraud Act start; assistance-animal qualifier placed correctly; barring-notice content and court-order defense added; returned-check demand conditions; utility fee-shifting threshold; cannabis cite (10-5(b)(5)); unidentified battery hits named (310 ILCS 125, 405 ILCS 125, 310 ILCS 105, 765 ILCS 515, 410 ILCS 43/30, 730 ILCS 180, 740 ILCS 20, 765 ILCS 945, 765 ILCS 1005, 755 ILCS 75); source-of-income gloss moved out of the definition; the 'move-in fee' example removed from the fee box with a builder note.
- **Unsupported (not errors):** listed in §7 as not read.
- **Lease clauses:** none found unlawful under the saved statutes.

## 14. Statute walk (gap-discovery source 1)
Every section of the Acts read whole was diffed programmatically against the citations in IL text (continuation forms expanded). Uncited by design:
- **Short titles, purposes, definitions, effective dates, severability:** 765 ILCS 705/0.01; 710/0.01, 710/2; 715/0.01; 721/1; 730/0.01, 730/1, 730/5; 735/0.01; 740/1; 742/1; 750/1, 750/5, 750/10 (definitions applied in the rows); 752/1, 752/5, 752/99; 755/1, 755/5 (definitions), 755/97, 755/905, 755/910, 755/999.
- **Cross-reference only:** 765 ILCS 705/3 (points to 735 ILCS 5/9-218; now cited in `edu-payment-methods-il`).
- **Utility company's own duties:** 765 ILCS 735/5.
- **Article IX Part 2:** 735 ILCS 5/9-204 (ejectment after half a year's arrears; landlord's older remedy, not a lease term), 9-206.1 (farm life tenancies), 9-212 (evidence of service), 9-214 (definition), 9-215 (grantee remedies).
- **Article IX Part 3:** distress procedure sections 9-304 to 9-312, 9-314, 9-316.1, 9-317, 9-319, 9-321 (summarized in `edu-distress-for-rent-il` through 9-301, 9-302, 9-303, 9-313, 9-315, 9-316; farm-crop sections out of scope).
One level down, 765 ILCS 705/35 (a)-(f), 705/25 (a)-(f), 705/15 (a)-(f), 710/1 (a)-(c), 735/1.2 (a)-(d), 750/20 (a)-(c), 752/15-30, 755/10 (a)-(g), 735 ILCS 5/9-106 (a)-(f), 9-106.2 (a)-(f), 9-120 (a)-(g) and 420 ILCS 46/26 (a)-(g) are each cited by subsection.

## 15. Real-lease comparison (gap-discovery source 2)
**Primary:** MainStreet REALTORS® Residential Lease, Rev. 1.2026 ('REALTOR® Association of West/South Suburban Chicagoland' in the PDF metadata), 11 pages plus Illinois REALTORS® Form 421 (02/2025) and Form 422L (01/2024, radon), posted at chicagorealtor.com (`/wp-content/uploads/2026/01/Suburban-Residential-Lease.pdf`). It is a Realtor association form for suburban Illinois, marked not for use in Chicago or Cook County; it prints the IDHR summary V.2025-12.3 as pages 1-4 and starts rent and fees on page 5. Not a relabelled template (Illinois-specific citations and forms throughout). **Secondary:** Chicago Association of REALTORS® 2025 Chicago Residential Lease V12.0 (asknagel.com host), a Chicago RLTO form without the 2026 summary. Both are leads about wording, not law; no copyrighted text is reproduced here.

### 15.1 Provision map

| Lease provision (MainStreet unless noted) | Library answer for IL |
|---|---|
| IDHR summary as pages 1-4, tenant initials each page | `summary-of-rights-il` |
| Rent, fees and 'Non-Refundable Move-In Fee' after the summary | `fee-disclosure-first-page-il` (page-1 box; move-in fee must not pay for banned items) |
| Late fee (default 5% after 5 days) | `late-fee` (tagged; no state cap) |
| Security deposit, return default 30 days | `security-deposit-return-il`, `security-deposit-use` |
| Utilities apportioned as a percentage of the building | `utility-formula-il` (765 ILCS 740/5 formula) |
| Tenant pays repairs; appliances not warranted; constructive-eviction waiver | `landlord-maintenance` (tagged), `edu-habitability-il`; no waiver clause offered (implied warranty case law unread) |
| No vacancy over 30 days | Not adopted; no Illinois statute (battery 106) |
| Landlord casualty termination | `casualty-termination-il` |
| Prevailing-party attorney's fees | `default-by-tenant` (tagged) |
| Holdover at 3x monthly rent | Not adopted; Illinois measures are statutory (`edu-holdover-damages-il`) |
| 'Not liable other than gross negligence' plus indemnity | Void under 765 ILCS 705/1 to the extent of negligence; ks-oh-ca variants, `pet-policy-il` (§10.7) |
| Showings on 2 days' notice; keybox | `landlords-access` (24 hours; no statute) |
| Email notice | `notices` (tagged; statutory eviction service controls), `edu-notice-service-il` |
| Returned-check fee 5%; lost key $10 or cost | `returned-payments-il` (stated figure, 810 ILCS 5/3-806), `keys-il` |
| Landlord re-keys before possession | `edu-rekey-cook-county-il`, `tenant-rekey-right-il` |
| Smoking permitted / not permitted choice | `smoking-policy` (tagged) |
| Radon disclosure (Form 422L) | `radon-disclosure-il` |
| Flood disclosure | `flood-disclosure-il` |
| Attorney review clause | Not adopted (not a legal requirement) |
| CAR Chicago: bed bugs, heating-cost disclosure, deposit interest, criminal-activity void, 30/60/120-day nonrenewal | Chicago ordinance rules (flagged); state answers: `edu-no-bed-bug-rule-il`, `edu-deposit-interest-il`, `criminal-activity-notice-il`, `edu-notices-to-quit-il`; no state heating-cost disclosure (battery 78) |

### 15.2 What it produced
The lease confirmed the page-1 summary practice and the 2026 fee layout (§6.2), the radon and flood forms in use, and apportioned-utility billing (which triggered `utility-formula-il`). It surfaced two conflicts with Illinois law in the form itself (§10.7). No shared row is changed on its account (rule 62).

## 16. Landlord-scenario screen (gap-discovery source 3)
72 everyday situations, Claude-generated (AZ §18.1 / UT §16 model plus Illinois-specific), each run against the IL rows; where no row answered, the statutes were searched and hits read section-open.

| # | Scenario | IL answer |
|---|---|---|
| 1 | Advertising a unit with required fees | `edu-rental-fee-law-il` (listing must disclose non-optional fees) |
| 2 | Charging an application fee | `edu-application-fees-il` ($50 cap; reusable report) |
| 3 | Applicant offers a reusable screening report | `edu-application-fees-il` |
| 4 | Asking about arrest records or immigration status | `edu-protected-class-inquiry-il`, `edu-fair-housing-il` |
| 5 | Applicant pays with a housing voucher | `edu-source-of-income-il` |
| 6 | Owner-occupied two-flat choosing tenants | `edu-fair-housing-il` (exemption limits), `edu-unit-count-thresholds-il` |
| 7 | Applicant with an assistance animal | `edu-assistance-animals-il`, `assistance-animal-accommodation` |
| 8 | Holding deposit before signing | Confirmed absent (battery 105) |
| 9 | Deciding page order of the lease | `summary-of-rights-il`, `fee-disclosure-first-page-il` |
| 10 | Unit in a flood zone or basement unit that flooded | `flood-disclosure-il` |
| 11 | Ground-floor unit, radon | `radon-disclosure-il`, `edu-radon-tenant-rights-il` |
| 12 | Pre-1978 building | `lead-based-paint`, `edu-lead-il` |
| 13 | Building with shared meter in tenant's name | `edu-shared-meter-utilities-il` |
| 14 | Billing tenants a share of the water bill | `utility-formula-il` |
| 15 | Offering one month free | `rent-concessions-il` |
| 16 | Collecting a security deposit (how much) | `edu-no-security-deposit-cap-il` |
| 17 | 30-unit building holding deposits | `edu-deposit-interest-il` |
| 18 | Setting cleaning charges in advance | `deposit-cost-schedule-il` |
| 19 | Requiring autopay | `edu-payment-methods-il`, `acceptable-payment-methods-nj` |
| 20 | Using a rent portal that charges a fee | `edu-payment-methods-il` |
| 21 | 150-unit complex with a leasing office | `edu-payment-methods-il` (9-218) |
| 22 | Setting a late fee | `late-fee`, `edu-late-fee-il` |
| 23 | Tenant's check bounces | `returned-payments-il` |
| 24 | Charging a renewal fee | Barred (`edu-rental-fee-law-il`) |
| 25 | Charging for after-hours maintenance calls | Barred (`edu-rental-fee-law-il`) |
| 26 | Handing over keys; Cook County turnover | `keys-il`, `edu-rekey-cook-county-il`, `tenant-rekey-right-il` |
| 27 | New 6-unit building's entry doors | `edu-rekey-cook-county-il` (peepholes, 430 ILCS 160) |
| 28 | Installing alarms; who changes batteries | `smoke-co-alarms-il` |
| 29 | Entering to show the unit | `landlords-access`, `edu-no-entry-statute-il` |
| 30 | Tenant asks for a repair; nothing happens | `edu-repair-and-deduct-il` |
| 31 | Heat in a 55+ building | `edu-senior-housing-heating-il` |
| 32 | Landlord fails to pay the gas bill | `edu-landlord-paid-utilities-il` |
| 33 | Shutting off water for repairs | `edu-self-help-eviction-il` (7 days' notice) |
| 34 | Tenant wants an EV charger | `edu-ev-charging-il`, `ev-charging-requirements-il`, CO rows tagged |
| 35 | Tenant wants to sublet | `no-sublet-assign` (no statute) |
| 36 | Tenant adds a roommate / guest stays long | `permitted-occupants`, `guest-policy-day-limit` |
| 37 | Tenant grows cannabis | `cannabis-cultivation-il`, `edu-cannabis-il` |
| 38 | Tenant smokes | `smoking-policy` |
| 39 | Condo unit rented | `hoa-compliance`, `edu-condo-leasing-il` |
| 40 | Tenant keeps a gun | `edu-firearms-il` |
| 41 | Tenant hangs a flag or sign | `edu-no-flag-display-rule-il` |
| 42 | Rent unpaid on the 5th | `edu-nonpayment-notice-il` |
| 43 | Tenant offers half the rent after the notice | `edu-nonpayment-notice-il` (required sentence) |
| 44 | Tenant breaches another term | `edu-notices-to-quit-il` (10-day notice), `default-by-tenant` |
| 45 | Drug dealing in the unit | `edu-drug-nuisance-il`, `criminal-activity-notice-il` |
| 46 | Tenant charged with a Class X felony | `drug-free-housing-addendum-il`, `edu-expedited-criminal-eviction-il` |
| 47 | Shooting or violent crime on the premises | `edu-expedited-criminal-eviction-il` (9-118) |
| 48 | Subsidized tenant refuses inspections | `subsidized-inspection-refusal-il` |
| 49 | Tenant calls police about domestic violence | `edu-police-calls-il`, `edu-safe-homes-il` |
| 50 | Tenant asks for a lock change after abuse | `edu-dv-lock-change-il` |
| 51 | Tenant leaves early citing sexual violence | `edu-safe-homes-il` |
| 52 | New landlord asks about a prior tenant's DV termination | `edu-dv-confidentiality-il` |
| 53 | Threatening to report immigration status | `edu-immigrant-tenant-protection-il` |
| 54 | Tenant deployed or transferred | `edu-servicemember-rights-il` |
| 55 | Tenant complains to the city, then rent goes up | `edu-retaliation-il` |
| 56 | Filing an eviction | `edu-eviction-process-il` (Rule 139) |
| 57 | Naming a 16-year-old occupant | `edu-minor-defendants-il` |
| 58 | Eviction order not enforced in 4 months | `edu-eviction-process-il` (9-117) |
| 59 | Tenant asks to seal the eviction file | `edu-eviction-sealing-il` |
| 60 | Changing the locks on a nonpaying tenant | `edu-self-help-eviction-il` |
| 61 | Seizing tenant property for rent | `edu-distress-for-rent-il` |
| 62 | Squatter or ex-guest won't leave | `edu-unauthorized-occupants-il` |
| 63 | Tenant stays after the lease ends | `holdover-ca`, `edu-holdover-damages-il` |
| 64 | Month-to-month tenancy ending | `periodic-tenancy-notice-il`, `edu-notices-to-quit-il` |
| 65 | Tenant abandons the unit mid-lease | `edu-mitigation-il`, `abandoned-property-il` |
| 66 | Belongings left after move-out | `abandoned-property-il`, `edu-post-eviction-property-il` |
| 67 | Returning the deposit | `security-deposit-return-il`, `edu-deposit-return-rules-il` |
| 68 | Tenant can't be found to refund | `edu-deposit-escheat-il` |
| 69 | Tenant dies | `edu-no-tenant-death-rule-il` |
| 70 | Fire damages the unit | `casualty-termination-il` |
| 71 | Selling the building | `edu-deposit-on-sale-il` |
| 72 | Converting to condominiums; lender forecloses | `edu-condo-conversion-il`; `edu-foreclosure-tenants-il` |

Scenario hits that produced rows during the screen: 27 (peepholes, via the rerun security-device battery), 15 (rent concession), 46 and 48 (optional clauses).

## 17. Outside-title search and proof of absence (gap-discovery source 4)
Whole-ILCS batteries (§1.3) over every chapter, with hits read section-open. Findings outside the landlord-tenant chapter that produced rows: Human Rights Act (775 ILCS 5), Radon Awareness Act (420 ILCS 46), Smoke Detector Act (425 ILCS 60), Carbon Monoxide Alarm Detector Act (430 ILCS 135), Peephole Installation Act (430 ILCS 160), Lead Poisoning Prevention Act (410 ILCS 45), Rent Control Preemption Act (50 ILCS 825), cannabis acts (410 ILCS 130, 705), Controlled Substance and Cannabis Nuisance Act (740 ILCS 40), Assistance Animal Integrity Act (310 ILCS 120), UETA (815 ILCS 333), EV Charging Act (765 ILCS 1085), UCC dishonored checks (810 ILCS 5/3-806), Interest Act (815 ILCS 205), Service Member Civil Relief Act (330 ILCS 63), Municipal and Counties Codes (65 ILCS 5/1-2-1.5; 55 ILCS 5/5-1005.10), Vehicle Code towing (625 ILCS 5/4-203), Condominium Property Act (765 ILCS 605/18, 30), Common Interest Community Association Act (765 ILCS 160/1-35), Hotel Operators' Occupation Tax (35 ILCS 145), Receivership Act (765 ILCS 1090), unclaimed property (765 ILCS 1026), concealed carry (430 ILCS 66/65), Real Estate License Act (225 ILCS 454/15-20), Insurance Code dog-breed rule (215 ILCS 5/143.10e), and Supreme Court Rules 139 and 99.2.

**Confirmed absences** (battery number; boundary: statutes only): deposit cap (2); rent-increase notice (55); bed bugs (12); mold (13, 63); meth disclosure (14, 64); flag and display rights (18, 119); tenant death (60, 96); statutory habitability warranty (41, 42); quiet enjoyment for leases (43); rent receipts except mobile homes (23); pet rules except mobile homes (24); window guards (35); sprinklers (36); smoke-free housing (70); renter's-insurance rules (116, 117); residential abandoned-property procedure (19, 120); general entry notice (62); holding deposits, installments, fee in lieu (102-105); waterbeds (107); double letting (109); infirmity termination (110); translation duty (114); casualty (89, 97, 98); service-animal misrepresentation in housing (84, 86); security cameras (91); shutdown protection (100); landlord self-cure (94). **No statute found, recorded as 'none located' in the rows:** statewide late-fee cap (59, 81), just cause (Article IX read; no battery hit), a tenant's lease-copy right (118), a landlord's own stigmatized-property duty (122, which found only the licensee rule).

## 18. Topic reference canvass (rules 27, 36)
299 topics (292 plus the 7 'no row yet' topics): 131 answered by an IL row; 168 without an IL row: Not located 61, Present 54, Not applicable 31, Confirmed absent 22.

### 18.1 Topics answered by an IL row
`statutory-forms` (edu-statutory-forms-il); `acceptable-payment-methods` (acceptable-payment-methods-nj, edu-payment-methods-il); `application-fees` (edu-application-fees-il); `application-of-payments` (application-of-payments); `due-at-signing` (due-at-signing); `fee-transparency` (fee-disclosure-first-page-il, edu-rental-fee-law-il); `late-fee` (late-fee, edu-late-fee-il); `rent-control` (edu-rent-control-preemption-il); `rent-increase-notice` (edu-no-rent-increase-notice-il); `rent-payment` (rent-payment); `rent-receipts` (edu-rent-receipts-il); `rent-tax` (edu-rent-tax-il); `returned-payments` (returned-payments-il); `deposit-escheat` (edu-deposit-escheat-il); `security-deposit-cap` (edu-no-security-deposit-cap-il); `security-deposit-interest` (edu-deposit-interest-il); `security-deposit-on-sale` (edu-deposit-on-sale-il); `security-deposit-penalty` (edu-deposit-return-rules-il); `security-deposit-return` (security-deposit-return-il); `security-deposit-use` (security-deposit-use); `unpaid-damages-interest` (edu-interest-on-unpaid-amounts-il); `alterations` (no-alterations); `disturbance` (no-disturbance); `existing-condition` (existing-condition); `joint-liability` (joint-liability); `permitted-occupants` (permitted-occupants); `residential-use-only` (residential-use-only); `smoking-policy` (smoking-policy); `sublet-assign` (no-sublet-assign); `tenant-forward-proceedings` (tenant-forward-proceedings-ca); `tenant-maintenance` (tenant-maintenance); `utilities-responsibility` (utilities-responsibility, edu-shared-meter-utilities-il); `utility-payment-evidence` (utility-payment-evidence); `utility-service-continuity` (utility-service-continuity); `alarm-duties` (smoke-co-alarms-il); `appliances-included` (appliances-included); `disability-accommodation` (edu-disability-modifications-il); `heating` (edu-senior-housing-heating-il); `landlord-maintenance` (landlord-maintenance, edu-habitability-il); `portfolio-thresholds` (edu-unit-count-thresholds-il); `security-devices` (tenant-rekey-right-il, edu-rekey-cook-county-il); `services-utilities-provided` (services-utilities-provided-ks-oh); `tenant-repair-remedies` (edu-repair-and-deduct-il); `utilities-paid-by-landlord` (utilities-paid-by-landlord); `utility-apportionment` (utility-formula-il); `utility-landlord-account` (edu-landlord-paid-utilities-il); `landlord-entry` (landlords-access, edu-no-entry-statute-il); `abandoned-property` (abandoned-property-il); `abandonment-and-mitigation` (edu-mitigation-il); `attorney-fees` (edu-attorney-fees-il); `casualty-termination` (casualty-termination-il); `conversion-notice` (edu-condo-conversion-il); `criminal-activity` (criminal-activity-notice-il); `default-by-tenant` (default-by-tenant); `dv-lease-termination` (edu-safe-homes-il); `dv-lockchange` (edu-dv-lock-change-il); `early-termination` (early-termination-ks); `eviction-process` (edu-eviction-process-il); `eviction-record-sealing` (edu-eviction-sealing-il); `expedited-criminal-eviction` (edu-expedited-criminal-eviction-il); `for-cause-eviction` (edu-no-just-cause-il); `foreclosure` (edu-foreclosure-tenants-il); `holdover` (holdover-ca, edu-holdover-damages-il); `landlord-lien` (edu-distress-for-rent-il); `minor-tenant-filing` (edu-minor-defendants-il); `nonpayment-notice` (edu-nonpayment-notice-il); `nuisance` (edu-drug-nuisance-il); `possession-delay` (possession-delay); `post-eviction-property` (edu-post-eviction-property-il); `rental-application-accuracy` (rental-application-accuracy); `retaliation` (edu-retaliation-il); `self-help-eviction` (edu-self-help-eviction-il); `servicemember-rights` (edu-servicemember-rights-il); `surrender-end-of-term` (surrender-end-of-term-ks-ne); `tenant-death` (edu-no-tenant-death-rule-il); `termination-notice` (periodic-tenancy-notice-il, edu-notices-to-quit-il); `unauthorized-occupant-removal` (edu-unauthorized-occupants-il); `addendum-precedence` (addendum-precedence); `dv-confidentiality` (edu-dv-confidentiality-il); `electronic-signatures` (electronic-signatures); `emergency-assistance-right` (edu-police-calls-il); `entire-agreement` (entire-agreement); `governing-law` (governing-law); `notice-delivery-methods` (edu-notice-service-il); `notices` (notices); `renters-insurance-rules` (edu-no-renters-insurance-rule-il); `scope` (edu-scope-il); `severability` (severability); `tenants-property-insurance` (tenants-property-insurance-ks-oh-ca); `assistance-animal-accommodation` (assistance-animal-accommodation, edu-assistance-animals-il); `pet-insurance-requirement` (pet-insurance-requirement); `pet-policy` (pet-policy-il); `service-animal-misrepresentation` (edu-no-housing-misrepresentation-penalty-il); `assigned-parking-space` (assigned-parking-space); `ev-charging` (edu-ev-charging-il); `ev-charging-end-of-tenancy` (ev-charging-end-of-tenancy-co); `ev-charging-requirements` (ev-charging-requirements-il); `ev-charging-shared-area` (ev-charging-shared-area-co); `parking` (parking-ks-oh-ca); `parking-vehicle-rules` (parking-vehicle-rules); `storage-space` (storage-space-ks-oh-ca); `towing` (edu-towing-il); `common-area-use` (common-area-use); `fire-safety-grilling` (fire-safety-grilling); `firearms` (edu-firearms-il); `guest-policy` (guest-policy); `guest-policy-day-limit` (guest-policy-day-limit); `inspection-rights` (inspection-rights); `keys` (keys-il); `landscaping-irrigation` (landscaping-irrigation); `snow-removal` (snow-removal); `tenant-display-rights` (edu-no-flag-display-rule-il); `bed-bug-disclosure` (edu-no-bed-bug-rule-il); `fair-housing` (edu-fair-housing-il); `flood-disclosure` (flood-disclosure-il); `hoa-compliance` (hoa-compliance); `lead-based-paint` (lead-based-paint, edu-lead-il); `lease-copy` (edu-no-lease-copy-rule-il); `meth-disclosure` (edu-no-meth-disclosure-il); `mold-disclosure` (edu-no-mold-disclosure-il); `owner-identity-disclosure` (landlord-disclosure-il); `protected-class-inquiry-ban` (edu-protected-class-inquiry-il); `radon-disclosure` (radon-disclosure-il, edu-radon-tenant-rights-il); `sex-offender-occupancy` (edu-sex-offender-landlord-il); `source-of-income` (edu-source-of-income-il); `stigmatized-property` (edu-no-stigmatized-property-rule-il); `tenant-rights-statement` (summary-of-rights-il); `cannabis` (cannabis-cultivation-il, edu-cannabis-il); `hoa` (edu-condo-leasing-il); `immigration-status` (edu-immigrant-tenant-protection-il); `prohibited-lease-terms` (edu-prohibited-lease-terms-il)

### 18.2 Topics with no IL row (status and reason)
| Topic | Status | Reason and boundary |
|---|---|---|
| `algorithmic-rent-setting` | Confirmed absent | Battery 90 (algorithm, pricing software, rent-setting): 21 sections, none on rent setting (765 ILCS 1075/5 is the Right of Publicity Act). |
| `fees-as-rent` | Not located | Battery 92 ('additional rent'): 1 hit, 415 ILCS 5/57.12A, unrelated. No statute makes fees rent. |
| `landlord-self-cure` | Confirmed absent | Battery 94: 0 hits. |
| `lease-completeness` | Not located | Battery 93 (blank near lease): 14 sections, none on residential leases (815 ILCS 636/25 is motor-vehicle leasing). |
| `quiet-possession` | Confirmed absent (statutes) | Battery 43: only 765 ILCS 5/8 and 5/11 (deed covenants), 720 ILCS 5/21.1-1, 810 ILCS 5/9-610. Common-law covenant not read. |
| `tenant-security-cameras` | Confirmed absent | Battery 91: 0 hits. |
| `collection-fee` | Present | edu-rental-fee-law-il (eviction-notice and filing fee ban, 765 ILCS 705/35(c)(4)); returned-payments-il (dishonored-check collection costs, 810 ILCS 5/3-806). No general collection-fee statute located. |
| `fee-unprovided-service` | Present | edu-rental-fee-law-il (765 ILCS 705/35(c)(5)-(11) bans listed service fees). |
| `nonresident-owner-agent` | Confirmed absent | Battery 99: only 625 ILCS 5/6-305 and 765 ILCS 705/1, unrelated. 735 ILCS 5/9-320 (posted manager notice) is in landlord-disclosure-il; 765 ILCS 725/1 (noncitizen farm landlords) is farm-only. |
| `notice-service-fee` | Present | edu-rental-fee-law-il: a fee for an eviction notice is banned (765 ILCS 705/35(c)(4)); no notice-service fee clause offered (§6.3). |
| `rent-escalation` | Present | edu-no-rent-increase-notice-il: the Landlord Retaliation Act has no escalation-clause safe harbor (765 ILCS 721/15). |
| `required-fees` | Present | fee-disclosure-first-page-il (765 ILCS 705/35(b)). |
| `shutdown-rent-protection` | Confirmed absent | Battery 100: 0 hits. |
| `statutory-caps` | Present | Illinois caps only the application fee ($50, edu-application-fees-il); no deposit, late-fee or rent cap (edu-no-security-deposit-cap-il, edu-late-fee-il, edu-rent-control-preemption-il). |
| `subsidy-late-fee` | Not located | Late-fee batteries 59 and 81 found no subsidy rule. |
| `term-change-notice` | Present | edu-no-rent-increase-notice-il (no statutory modification notice; 30-day termination for month-to-month). |
| `veterans-incentive` | Not applicable | Florida pilot program; no Illinois equivalent searched. |
| `waiver-by-acceptance` | Present | edu-nonpayment-notice-il (735 ILCS 5/9-209 partial-payment rule). |
| `condition-inspection` | Confirmed absent | Battery 101: no inspection duty; walk-through fee banned (765 ILCS 705/35(c)(11)); existing-condition tagged. |
| `deposit-installments` | Confirmed absent | Battery 102: 0 hits (edu-no-security-deposit-cap-il notes). |
| `deposit-last-month-rent` | Confirmed absent | Battery 103: 1 hit, 105 ILCS 45/1-50, unrelated. |
| `deposit-surrender-notice` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; 765 ILCS 710 has no advance-notice condition. |
| `dv-deposit-timing` | Not located | Safe Homes Act (765 ILCS 750) read whole: no deposit timing rule. |
| `expedited-deposit-disposition` | Not located | 765 ILCS 710 read whole: no expedited procedure. |
| `fee-in-lieu-of-deposit` | Confirmed absent | Battery 104: 0 hits. |
| `holding-deposit` | Confirmed absent | Battery 105: 0 hits. |
| `inspection-notice-penalty` | Not applicable | No Illinois inspection statute (condition-inspection). |
| `nonrefundable-deposit-notice` | Not located | No statute on nonrefundable deposits (battery 71 hits unrelated); any nonrefundable fee must be on page 1 (fee-disclosure-first-page-il). |
| `nonrefundable-deposit-separate-notice` | Not located | As nonrefundable-deposit-notice. |
| `security-deposit-holding` | Present | edu-no-security-deposit-cap-il (no holding rule) and edu-disability-modifications-il (restoration escrow, 775 ILCS 5/3-102.1(C)(1)). |
| `security-deposit-nonwaiver` | Not located | 765 ILCS 710 and 715 read whole: no nonwaiver clause. |
| `security-deposit-standards` | Not located | 765 ILCS 710 read whole: no posted-standards rule. |
| `utility-deposit-return` | Not applicable | Utility deposits are ICC-regulated; Wyoming-specific topic. |
| `bed-bug-cooperation` | Present | edu-no-bed-bug-rule-il. |
| `children-occupancy` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; familial status is protected (edu-fair-housing-il). |
| `cold-weather-vacate-notice` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `construction-liens` | Present | edu-repair-and-deduct-il (765 ILCS 742/25). Mechanics Lien Act (770 ILCS 60) not read. |
| `dv-qualifying-documents` | Present | edu-safe-homes-il, edu-dv-lock-change-il. |
| `extended-absence-notice` | Confirmed absent | Battery 106: hits were UCC leases of goods, motor-vehicle leasing and unrelated; extended-absence-notice-ks not tagged (§2.2). |
| `guest-rights` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `municipal-utility-lien` | Not located | Battery 108: 1 hit, 770 ILCS 95/4 (self-storage liens), unrelated. Municipal Code water-lien sections (65 ILCS 5/11-139-8 and similar) not read. |
| `prohibited-acts-renter` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; criminal-activity-notice-il covers criminal use. |
| `purpose-limitation` | Present | residential-use-only tagged; no statutory remedy located. |
| `tenant-repair-agreement` | Present | edu-habitability-il: no statute allows or limits shifting repairs by agreement. |
| `tenant-statutory-duties` | Present | smoke-co-alarms-il (the only statutory tenant duties located: 425 ILCS 60/3(d), 430 ILCS 135/10(c)). |
| `utility-interruption-submeter` | Not located | Battery 25 (submeter): only 765 ILCS 1085/30 and 35 (EV). |
| `utility-transfer` | Not located | 765 ILCS 735 read whole: no landlord cutoff right. |
| `waterbed` | Confirmed absent | Battery 107: 0 hits. |
| `alt-housing` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `appliances-excluded` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; appliances-included tagged. |
| `balcony-inspection` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `confirmed-absences-habitability` | Present | edu-habitability-il. |
| `designated-repairer` | Not applicable | Nevada structure; Illinois repair-and-deduct requires a licensed, insured tradesperson (edu-repair-and-deduct-il). |
| `disaster-duties` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `double-letting` | Confirmed absent | Battery 109: 0 hits. |
| `emergency-contact` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; 735 ILCS 5/9-320 manager notice is the nearest (landlord-disclosure-il). |
| `fire-code-standard` | Not applicable | North Dakota structure. |
| `frozen-standard-incorporation` | Not applicable | No Illinois landlord statute incorporates a dated outside standard in the Acts read. |
| `habitability-materiality` | Not applicable | No Illinois habitability statute (edu-habitability-il). |
| `habitability-modifiable` | Not applicable | As habitability-materiality. |
| `habitability-presumption` | Not applicable | As habitability-materiality. |
| `health-district-rental-rules` | Not applicable | Nevada structure. |
| `landlord-breach-remedy` | Present | edu-repair-and-deduct-il, edu-landlord-paid-utilities-il, edu-self-help-eviction-il (statutory tenant remedies); no general landlord-breach statute. |
| `other-landlord-facilities` | Not applicable | California structure. |
| `part5-nonwaivable` | Not applicable | Colorado structure. |
| `pool-safety` | Confirmed absent | Battery 34: only 765 ILCS 745/11 (mobile homes). |
| `rent-demand-bar` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `rent-reporting` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `repair-cost-termination` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `repair-escrow-exemption-notice` | Not applicable | Ohio structure. |
| `repair-notice` | Present | edu-repair-and-deduct-il (registered or certified mail notice). |
| `senior-housing-work-card` | Not located | 765 ILCS 705/20 (55+ heating) read; no staff rule located. |
| `stove-refrigerator` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `subsidy-habitability-proration` | Not applicable | Colorado structure. |
| `substandard-property-receivership` | Not located | 765 ILCS 735/2 (utility receivership) is in edu-landlord-paid-utilities-il; Municipal Code building receivership (65 ILCS 5/11-31-2) not read. |
| `tenant-screening` | Present | edu-application-fees-il (reusable screening report), edu-fair-housing-il (arrest record, source of income), edu-protected-class-inquiry-il. |
| `utility-allowance-cap` | Not applicable | Colorado subsidized-housing structure. |
| `utility-disclosure-attachment` | Present | utility-formula-il (765 ILCS 740/5). |
| `utility-shutoff-statute` | Present | edu-self-help-eviction-il (765 ILCS 735/1.4), edu-landlord-paid-utilities-il. |
| `utility-submetering-disclosure` | Present | utility-formula-il, edu-shared-meter-utilities-il. |
| `key-control-policy` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `periodic-services-entry` | Not applicable | No Illinois entry statute (edu-no-entry-statute-il). |
| `casualty-and-mitigation-waivable` | Present | casualty-termination-il (no casualty statute); edu-mitigation-il (735 ILCS 5/9-213.1; waivability not addressed by statute). |
| `cure-and-eviction-grounds` | Present | edu-notices-to-quit-il. |
| `environmental-event-termination` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `eviction-hardship-stay` | Not located | Article IX Part 1 read in the sections cited; 735 ILCS 5/9-110 (stay for purchase contracts) not relied on. |
| `eviction-service-party` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `forfeiture-redemption` | Not applicable | California structure; 735 ILCS 5/9-204 (ejectment for half a year's arrears; tender before judgment) is the nearest and is uncited by design (§14). |
| `guarantor-renewal` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `holdover-rate` | Present | edu-holdover-damages-il (statutory measures; no opt-in rate, §6.3). |
| `homestead-waiver` | Not located | 735 ILCS 5/12-904 (homestead release in writing) read in context; personal-property exemptions (735 ILCS 5/12-1001) not read; no waiver clause offered (§6.3). |
| `infirmity-termination` | Confirmed absent | Battery 110: 0 hits. |
| `landlord-remedies-termination` | Present | edu-notices-to-quit-il, edu-mitigation-il, edu-holdover-damages-il, edu-distress-for-rent-il. |
| `lockout-for-rent-delinquency` | Present | edu-self-help-eviction-il (735 ILCS 5/9-101). |
| `notice-to-quit-waiver` | Not located | No Illinois statute lets a lease waive the 735 ILCS 5/9-209 demand or 735 ILCS 5/9-210 notice; case law not read; not offered (§6.3). |
| `owner-move-in-reservation` | Not applicable | California just-cause structure; Illinois has no just-cause statute (edu-no-just-cause-il). |
| `possession-bond` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `redemption` | Present | edu-nonpayment-notice-il (partial payment and the notice). |
| `rent-into-court-counterclaim` | Not located | 735 ILCS 5/9-106(f) (only germane matters) read; no pay-into-court statute located in Article IX Parts 1-3 as read. |
| `sale-or-management-change` | Present | edu-deposit-on-sale-il, edu-foreclosure-tenants-il; no general notice-of-sale statute located. |
| `social-security-defense` | Not applicable | California structure. |
| `statutory-early-termination` | Present | flood-disclosure-il (765 ILCS 705/25(e)), edu-radon-tenant-rights-il, edu-safe-homes-il, edu-servicemember-rights-il, edu-retaliation-il, edu-landlord-paid-utilities-il (765 ILCS 735/1). |
| `tenancy-at-will` | Present | edu-notices-to-quit-il (no separate at-will notice located). |
| `adverse-proceeding-notice` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; tenant-forward-proceedings-ca tagged. |
| `automatic-renewal` | Not located | Battery 111: Automatic Contract Renewal Act (815 ILCS 601/5, 601/10) hit; its reach to residential leases not read (§7). The library's IL rows contain no automatic-renewal term. |
| `confirmed-absences-misc` | Present | §17 and the absence rows listed in §3.3. |
| `confirmed-absences-outside-title` | Present | §17. |
| `consumer-protection-act` | Present | edu-payment-methods-il (765 ILCS 705/4(c) Consumer Fraud Act violation); edu-prohibited-lease-terms-il. The Consumer Fraud Act's general reach to leases not read. |
| `disaster-displaced-guests` | Not applicable | California structure. |
| `dv-protection-order-chapter-moved` | Not applicable | North Dakota history note. |
| `landlord-liability-insurance` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `law-enforcement-cooperation` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `lease-notice-initial-requirement` | Not applicable | North Dakota structure. |
| `lease-term-limitation` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; statute of frauds not read. |
| `notice-to-vacate-additional-terms` | Not applicable | Kansas structure. |
| `plain-language-consumer-statement` | Confirmed absent | Battery 28 (plain language): no lease statute. |
| `rent-receipt-anti-waiver` | Not applicable | Kansas structure. |
| `rental-inspection` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; local rental inspection ordinances flagged, not read. |
| `tenant-insurance-claims` | Present | edu-no-renters-insurance-rule-il. |
| `tenant-records` | Present | edu-dv-confidentiality-il (the only tenant-records rule located). |
| `tpa-sunset` | Not applicable | California. |
| `pet-fees` | Present | pet-policy-il (pet deposit is part of the Security Deposit); edu-assistance-animals-il. |
| `service-animal-denial-penalty` | Present | edu-assistance-animals-il (civil rights violation, 775 ILCS 5/3-104.1); no criminal housing penalty (battery 86). |
| `parking-rules-notice` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; towing in edu-towing-il. |
| `unbundled-parking` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `portable-solar` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `religious-cultural-display` | Present | edu-no-flag-display-rule-il (batteries 18, 119). |
| `rules-regulations` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run; no statute on house-rule enforceability. |
| `smoke-drift-waiver` | Confirmed absent | Battery 70 (smoking near multi-unit or apartment): 0 hits; smoking-policy tagged. |
| `telecom-access` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `defective-drywall-disclosure` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `dv-eviction-protection` | Present | edu-safe-homes-il (735 ILCS 5/9-106.2). |
| `electric-submetering-disclosure` | Not located | Battery 25: only EV sections. |
| `foreclosure-disclosure` | Present | edu-foreclosure-tenants-il (no landlord disclosure duty located). |
| `inspection-condemnation-disclosure` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `lead-safe-certification` | Present | edu-lead-il (certificate of compliance before a new lease after a mitigation notice, 410 ILCS 45/9.1). |
| `meter-conservation-charge` | Not applicable | South Carolina structure. |
| `military-air-zone-disclosure` | Not applicable | Virginia structure. |
| `ordnance-demolition-meter-disclosures` | Present (shared meters) | edu-shared-meter-utilities-il (765 ILCS 735/1.2); ordnance and demolition not located. |
| `pest-control-notice` | Present | edu-no-bed-bug-rule-il (pest-abatement fee ban). |
| `private-well-testing` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `prop65-rental-warning` | Not applicable | California. |
| `property-tax-rent-disclosure` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `required-disclosures` | Present | edu-statutory-forms-il and §4. |
| `sex-offender-disclosure` | Present | edu-sex-offender-landlord-il. |
| `sfr-occupancy-disclosure` | Not applicable | Nevada structure. |
| `steam-radiator-covers` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `tpa-exemption-notice` | Not applicable | California. |
| `tpa-notice` | Not applicable | California. |
| `truth-in-renting` | Present | summary-of-rights-il is Illinois' closest analogue (a state-agency summary, limited to domestic and sexual violence protections). |
| `window-guards` | Confirmed absent | Battery 35: 0 hits. |
| `condemned-premises-rent-bar` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `confession-of-judgment` | Present | edu-prohibited-lease-terms-il (735 ILCS 5/2-1301(c)); no clause (§6.3). |
| `employee-screening` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `eviction-penalty-clause-ban` | Present | edu-rental-fee-law-il (eviction-notice and pre-order filing fee ban). |
| `exculpatory-clauses` | Present | edu-prohibited-lease-terms-il (765 ILCS 705/1); Step D rule 52 variants. |
| `fire-sprinkler-duty` | Confirmed absent | Battery 36: 0 hits. |
| `foreign-ownership` | Not located | Battery 30: 765 ILCS 60 (Property Owned By Noncitizens Act) and 765 ILCS 725 (farm leases) hit; neither restricts residential leasing as read (765 ILCS 725/1 read; 765 ILCS 60 not read in full). |
| `governmental-fines` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |
| `jury-waiver` | Present | edu-prohibited-lease-terms-il, edu-eviction-process-il (735 ILCS 5/9-108). |
| `landlord-registration` | Present | edu-scope-il (no statewide registration located; local ordinances flagged). |
| `lease-content-requirements` | Present | §4 and edu-statutory-forms-il. |
| `plain-language` | Confirmed absent | Battery 28. |
| `statute-of-frauds-lease-term` | Not located | Frauds Act (740 ILCS 80) not read. |
| `tenant-right-to-organize` | Present | edu-retaliation-il (765 ILCS 721/5(5)). |
| `translation-duty` | Confirmed absent | Battery 114: 0 hits. |
| `unconscionability` | Not located | No residential-lease unconscionability statute located; 810 ILCS 5/2A-108 governs leases of goods; case law not read. |
| `written-notice-required` | Not located | Not located: no provision in the 11 landlord-tenant Acts and Article IX Parts 2-3 read whole; no targeted whole-code search run. |

### 18.3 'Topics no state has a row for yet'
All seven answered in 18.2: `algorithmic-rent-setting` (Confirmed absent), `fees-as-rent` (Not located), `landlord-self-cure` (Confirmed absent), `lease-completeness` (Not located), `quiet-possession` (Confirmed absent in statutes), `tenant-security-cameras` (Confirmed absent); `statutory-forms` has an IL row (`edu-statutory-forms-il`), the first in the library.

## 19. Step D screens (rules 40-53), one line each
- **Rule 40 (formatting and placement):** batteries 123-127; no type-size or bold rule for lease terms; two first-page mandates (§4, §6.2); omission sanctions listed in §4.
- **Rule 41 (just cause):** no statewide just-cause rule; a fixed term ends without notice (735 ILCS 5/9-213); `surrender-end-of-term-ks-ne` is correct as written.
- **Rule 42 (required text inside a shared clause):** 735 ILCS 5/9-120(a) forces a sentence into the lease (`criminal-activity-notice-il`); 765 ILCS 705/35(b) forces fees onto page 1 (`fee-disclosure-first-page-il`); no deposit or fee clause needs statutory words.
- **Rule 43 (cure promises):** `early-termination` not tagged (its 10-day cure gives away the 735 ILCS 5/9-210 no-cure notice); `default-by-tenant`'s carve-out preserves 9-210, 9-120 and 740 ILCS 40/11.
- **Rule 44 (terms that become landlord duties):** 765 ILCS 742/5 sends repair notices to the landlord address 'as indicated on the lease' (the `notices` clause supplies it); no 'as agreed in the lease' notice-method trap found.
- **Rule 45 (electronic notices):** UETA (815 ILCS 333/3) has no eviction exclusion, but 735 ILCS 5/9-211 lists no email; the `notices` clause designates no alternative; `edu-notice-service-il`.
- **Rule 46 (lease as the notice):** 735 ILCS 5/9-320(b) lets the lease carry the manager-and-insurer notice (`landlord-disclosure-il`); no shared clause promises a separate notice for it.
- **Rule 47 (knowing-use penalties):** none for using a prohibited lease term, except 765 ILCS 730/6 (misdemeanor for exhibiting a lease without the concession legend), avoided by `rent-concessions-il`; 765 ILCS 705/4(c) makes requiring EFT a Consumer Fraud Act practice (avoided by the NJ variant).
- **Rule 48 (separate documents):** flood disclosure before signing (765 ILCS 705/25(b)), radon materials at application (420 ILCS 46/26(a)), shared-meter statement before the lease offer (765 ILCS 735/1.2(a)) and lead brochure before the lease (410 ILCS 45/9.1): builder notes in the rows.
- **Rule 49 (collection-cost bans):** 765 ILCS 705/35(c)(4) bans eviction-notice and pre-order filing fees but preserves court costs; `default-by-tenant`'s 'reasonable costs and expenses' is limited by 'applicable law'.
- **Rule 50 ('the lease controls'):** 765 ILCS 710/1(a) lease-specified costs (`deposit-cost-schedule-il`); 765 ILCS 705/15(d) tenant rekey right (`tenant-rekey-right-il`); 735 ILCS 5/9-119(b)(2)(D) (`subsidized-inspection-refusal-il`); 765 ILCS 160/1-35 'unless otherwise provided in the community instruments' (association matter, not a lease choice).
- **Rule 51 (plain language):** no plain-language or consumer-lease statute reaches residential leases (battery 28).
- **Rule 52 (exculpation):** 765 ILCS 705/1 voids exemptions from liability for landlord negligence; ks-oh-ca variants tagged, `pet-policy-il` written; `edu-prohibited-lease-terms-il`.
- **Rule 53 (figures that contradict shared clauses):** `returned-payments` and base `holdover` ceiling wording replaced; `late-fee` has no Illinois cap to contradict; `guest-policy-day-limit` and `early-termination-ks` figures do not contradict any Illinois number.

## Proposed SOP changes
1. **Test every absence battery against a known positive before trusting zero hits:** run the pattern on a saved section that contains the term (singular and plural, apostrophe forms, the statute's own phrasing). Reason: three Illinois absence claims rested on patterns that could not match the statutes' own words ("renter's", "copy of the signed lease", "flags"); the reruns found the Peephole Installation Act and two licensee and association rules.
2. **When the shell cannot reach the official site, save browser text by hash round-trip** (browser SHA-256 compared with the saved file's). Reason: it made every Illinois source file provably identical to what was read.
3. **Read the enrolled effective-date clause of every recent act relied on and compare it with the Public Act page and bill status; if they disagree, record both, ask Taylor, and state both in education rows.** Reason: P.A. 104-479's text says July 1, 2026 while every official record says January 1, 2027.
4. **Screen the state's latest general revisory act for uncompiled changes to sections relied on.** Reason: P.A. 104-852 changed 420 ILCS 46/26 after the compilation.
5. **Check for two statutes that each claim the same place in the lease (first page, first clause) and settle the page order with Taylor before drafting.** Reason: 765 ILCS 752/20 and 765 ILCS 705/35(b).

## Proposed topic questions
- `fee-transparency`: Must every non-optional fee appear on the lease's first page, and does that collide with another first-page requirement?
- `tenant-rights-statement`: Must a state-agency summary be attached as the first page of every lease and renewal, with each tenant signing each page?
- `security-devices`: Peephole or door-viewer requirement for multi-unit rentals, triggered by construction date.
- `radon-disclosure`: Is the radon disclosure limited by the unit's floor level?
- `criminal-activity`: Must the lease itself state the landlord's statutory right to void it for criminal use?
- `utility-landlord-account`: Can tenants petition for a rent receiver when the landlord does not pay the utility?
- `security-deposit-use`: May the lease pre-set cleaning and repair charges that the landlord can withhold from the deposit?

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.39), 2026-10-03

Run 2026-10-03 in IL's existing chat (SOP rule 8), on the attached files: `lease-clauses.csv` (2,876 rows, as the prompt states, counted at the attached path), `lease-clause-sop.md` 1.39, `lease-clause-topics.md`, this log and `lease-clause-citations-IL.csv`. Those files are the only source of truth. This chat's earlier IL pass was built on a 1,698-row master. Where its working files differ from the attached ones, the attached ones govern, and every row in this delta was rebuilt from them. Old outputs deleted before starting: `lease-clause-decision-log-IL.md` and `lease-clauses-IL-delta.csv` (the 2026-09-30 IL deliverables). Scope: the 2 [Retro] rules and 2 targeted fixes in the prompt only (rule 1). This log had no earlier record of any of the four, so each was run with the text open.

- **Rule 54t, tenant-caused damage: fixed.**
  - *Routes checked for a tenant-fault exception:*
    - Casualty: there is no Illinois statute for a house or apartment. `casualty-termination-il` was checked first; it already excludes casualty caused by Tenant, household members or guests.
    - Repair and deduct: 765 ILCS 742/5 has its own fault exception.
    - Essential services: 765 ILCS 735/1, 735/1.4 and 735/2.1 (terminate, pay-and-deduct, abatement) and 410 ILCS 45/10 (lead withholding) all turn on the landlord's own failure. They carry no fault exception, so the clause preserves them.
    - Landlord-breach termination: the only statutory right is 765 ILCS 735/1.
    - Rent into court: none.
  - *Gap filled:* no statute measures lost rent when a lease ends over tenant-caused damage. Mitigation is kept (735 ILCS 5/9-213.1).
  - *Read:*
    - Section-open, matched by normalised hash to the saved copies: 765 ILCS 742/5, 710/1, 705/1, 705/35, 735/1, 735/1.4, 735/2, 735/2.1 and 735/3; 735 ILCS 5/9-207 and 5/9-213.1; 410 ILCS 45/10.
    - The whole ILCS (3,486 acts, 72,939 section units) was reloaded from the official full-text pages. Retro batteries f1 to f7 were run (saved before any hit was read). Nonsense control: 0 hits. Known positives (742/5 phrase, 9-202 phrase): passed. Every relevant hit was read in context.
    - TN, GA and MO models: read; the TN row is not tagged.
  - *Unread case law, labelled:* the fire-insurance co-insured question; lost rent through the end of the Term; the implied warranty; constructive eviction.
  - *Rows:* new `tenant-caused-damage-il` (CONDITIONAL, SERVES_LANDLORD) and `edu-tenant-caused-damage-il`. Changed `casualty-termination-il` (notes only: battery attribution corrected and a retro segment added; text unchanged).
- **Rule 35c, constitution screen: fixed (one education row extended); no clause reached.**
  - *Read:*
    - The Illinois Constitution of 1970, whole, from the Legislative Reference Bureau (lrb.ilga.gov, `conent.htm`, 110,642 characters, SHA-256 194e51a3…, identical on a second fetch), plus the 16 per-article pages (146 sections on both).
    - Article I and Article XI saved and hash-matched.
    - No currency statement is printed. The newest amendment Source line is November 8, 2022 (art. I, § 25).
    - The only initiative route is art. XIV, § 3 (Article IV structure only), so no initiated article needed a struck-down check.
    - The amendment dates and art. XIV, § 3 were read in the browser on `conent.htm` and not saved; Articles I and XI are the saved texts.
  - *Searched:* 25 patterns (saved in the battery file).
    - Controls: "General Assembly" (101 hits) and "Governor" (75). Nonsense control: 0.
    - Subject terms: cannabis, marijuana or hemp (0); smoking, vaping or tobacco (0); arms (§ 22); speech (§ 4); assembly (§ 5); signs or flags (bill-signing only); privacy, search or eavesdropping (§ 6, § 8.1, § 12); religion (§ 3, § 17, § 20; also the preamble, art. III, § 8 and art. IX, § 6, none lease-related); rent, lease or tenant (§ 17 and § 19; the other hits were "Lieutenant" and the art. IX, § 6 "rent credits"); discrimination; disability; property; debt; jury; environment (art. XI, § 2); eminent domain; contracts.
  - *Findings:*
    - Art. I, § 17 (no discrimination by race, color, creed, national ancestry or sex in the rental of property, enforceable without legislation) and § 19 (handicap) reach residential leases. `edu-fair-housing-il` now says so.
    - § 4 (speech), § 5 (assembly), § 6 (privacy) and § 22 (arms, "subject only to the police power") do not say on their face whether they bind private parties. § 6's privacy and eavesdropping clause is not limited to the State in its text. Whether any of them reaches a private landlord is case law, not read, and not relied on.
    - No shared clause is reached. `smoking-policy`'s cannabis ban has no constitutional counterpart. `common-area-use` already saves displays "that applicable law entitles Tenant to make". No IL firearm or entry clause restricts what these sections protect.
    - Art. I, § 20 only "condemn[s]" communications.
    - Art. XI, § 2 (healthful environment, enforceable "against any party, governmental or private") is not contradicted by any clause.
  - *Rows:* changed `edu-fair-housing-il`.
- **Fix 3, holdover rate after the NE amendment to rule 54: fixed.**
  - *Verdict:*
    - Both Illinois measures are conditional. 735 ILCS 5/9-202 applies only to a holdover that is wilful, after the expiration of the term, and after a written demand for possession; it gives double the yearly value. 735 ILCS 5/9-203 gives double rent only after the tenant's own notice to quit.
    - Other holdovers get actual damages only (9-201: "fair and reasonable satisfaction for the use and occupation"). That is a gap.
  - *Clause:* `holdover-rate-il` is offered on the GA-family model (`holdover-rate-nc` text, which excludes nonpayment terminations), plus a no-stacking sentence: the landlord takes either the statutory double amount or the charge for any day.
    - The nonpayment exclusion is kept as a caution. There is no statewide late-fee cap, but the 9-204 ejectment tender is available "at any time before final judgment".
    - Builder: the charge must appear in the first-page fee box (765 ILCS 705/35(b), (e)).
  - *Read:*
    - Section-open, hash-matched: 735 ILCS 5/9-201, 9-202, 9-203, 9-204, 9-207, 9-209 and 9-210; 765 ILCS 705/35; 740 ILCS 105/10.
    - Retro batteries h1 (hold over) and h2 (double near rent or yearly value): only 9-202, 9-203 and 9-311 (distress bond) set an amount.
    - Penalty doctrine: case law, not read (labelled).
  - *Superseded entries:* this replaces the "Not offered" entry in §6.3 and the "Not adopted" entry in §15.1 for a holdover rate, the §16 scenario 63 answer (now also `holdover-rate-il`), and the `holdover-rate` line in §18.2. The conformance-table holdover cell for IL changes from "n" to ✓.
  - *Rows:* new `holdover-rate-il` (CONDITIONAL, CONSTRAINED_TERM). Changed `edu-holdover-damages-il` (body and notes). Changed shared `holdover-ca` (IL notes segment and `last_checked` only; text and states untouched, no propagation owed).
- **Fix 4, rule 62 vetting of `default-by-tenant` (MN's carve-out sentence): checked, no issue. Vouched; shared text not edited.**
  - *Read:* 735 ILCS 5/9-209, 9-204 and 9-210, section-open and hash-matched.
  - *Reasoning:*
    - Illinois's only nonpayment route without a prior demand is ejectment for half a year's arrears, "without any formal demand" (9-204). There the tenant keeps a statutory tender right until final judgment, which a lease cure promise neither gives nor takes away.
    - An eviction for nonpayment otherwise runs through the 9-209 written demand of at least 5 days. No statute lets a landlord skip it, so the self-limiting carve-out ("except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure") cannot be read to drop it.
    - Whether a written lease may waive the 9-209 demand is case law, not read. The library offers no such waiver, and the carve-out creates none.
    - Moving the carve-out to its own sentence reaching both limbs is lawful and accurate in Illinois. It also stops the rent limb adding a contractual notice to the 9-204 route.
  - *Rows:* none.

**Independent check (rule 80).** A separate agent checked the delta and this section against the saved texts in four rounds, re-checking the edited rows each time.
- *Round 1:* 11 findings, all fixed. They included the tenant's periodic-notice citation, "withholding" in the saving sentence, the actor list aligned with `casualty-termination-il`, the fee-box builder line, deposit wording and per-row basis lines.
- *Round 2:* 4 findings, all fixed: the missing 765 ILCS 735/1 termination and pay-and-deduct right (the section was then hash-checked), the casualty retro segment's "house or apartment" wording, 415 ILCS 105/4 in the f2 summary, and the holdover basis line.
- *Round 3:* 3 findings, all fixed: a leftover contradiction in route (iv), an over-broad hash claim, and the education row's "water, gas or electric service" wording.
- *Round 4:* the round-3 fixes were confirmed, and five wording points in this section were fixed (round counts, the reach of § 4 and § 6, religion hits, a file location, and what was saved).
- *Integrity:* the header and CRLF line endings match the master. Only the intended fields changed; on `holdover-ca`, only the IL segment and `last_checked` changed. Every citation carries the full ILCS prefix. IL active rows go from 148 to 151 (78 clauses, 73 education); no other state's count changes.

**Sources added** (IL sources folder, except the retro batteries file, which is in the batteries folder):
- `IL-Constitution-Art-I_Bill-of-Rights.txt`
- `IL-Constitution-Art-XI_Environment.txt`
- `IL-retro-other-sections_410-45-10_740-105-10.txt`
- `IL-constitution-battery-2026-10-03.txt`
- `IL-retro-batteries-2026-10-03.tsv`
- `IL-retro-source-record-2026-10-03.tsv` (21 section and article hashes, live against saved, all matched)

### Vouches given (rule 62; for §9, Propagation notes)
- `default-by-tenant`, MN's proposal (2026-10-02) to put the no-cure carve-out in its own sentence reaching both limbs: **vouched, no change needed** for Illinois (reasons under fix 4 above).

### Proposed SOP changes
1. **Rule 19: collapse whitespace in the corpus before matching a multi-word phrase.**
   - What happened: the official Illinois full-text pages break lines inside sentences. The first retro run returned 0 hits for the known-positive phrase from 765 ILCS 742/5, and every battery was rerun on collapsed text.
   - Why the change: the known-positive test caught it, but collapsing first prevents it.
2. **Rule 35: put a leading word boundary on "tenant" (and "lease") in constitution batteries.**
   - What happened: "tenant" matches "Lieutenant". In Illinois, 7 of the 10 rent/lease/tenant section hits were Lieutenant Governor sections.
3. **Rule 54t, essential services: read the landlord-paid-utility statute whole and treat its remedies as exit and abatement routes.**
   - What happened: Illinois lets a tenant end the lease, or pay and deduct, when the landlord doesn't pay a utility it must pay (765 ILCS 735/1). The remedy has no fault exception because it turns on the landlord's failure, so the clause's saving sentence must preserve a right to end the lease as well as abatement and deduction.
   - Why the change: the drafted clause missed this until the independent check's second round.

## Circle-back sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 2b10851`: 3 new rows (`tenant-caused-damage-il`, `edu-tenant-caused-damage-il`, `holdover-rate-il`) and 4 updated (`casualty-termination-il`, `edu-holdover-damages-il`, `edu-fair-housing-il`, and the IL segment of shared `holdover-ca`, merged onto the current master since that row had moved after the base); nothing refused. IL active 148 → 151; no same-topic pairs.
- **Citations file:** rows added for the three new rows; the four edited rows re-dated, with 9-201 added to `edu-holdover-damages-il` and Ill. Const. art. I, §§ 17 and 19 to `edu-fair-housing-il`.
- **Rule 62:** IL vouched for MN's no-cure-sentence edit to `default-by-tenant`; recorded in the backlog tally.
- **Builder:** `holdover-rate-il`'s charge is a fee that must appear in the first-page fee box (765 ILCS 705/35(b), (e)); added to the existing M.12 first-page layout item.
- **Guards:** all pass. **Statute spot-check:** not possible from here (ilga.gov returns empty pages to this machine). The pass hash-matched every section it relied on against its saved official copies, and an independent agent reviewed it in four rounds.
- **SOP 1.40:** all three proposals adopted (rule 19 whitespace and the "Lieutenant" boundary; rule 54's utility-statute exit route). Conformance cells for IL's 54t, 35c and holdover set to ✓.

## Propagated shared-row edit, 2026-10-03 (from the NJ circle-back)

- `acceptable-payment-methods-nj` (tagged NJ and IL): NJ changed the change-on-notice sentence so the landlord "will always accept at least one method that is not an electronic funds transfer and will not require payment by electronic funds transfer". Uniform for IL: it states the rule IL was tagged for (765 ILCS 705/4), so no IL override is needed. Claude Code's call at sync (rule 76); IL's note on the row records it.
