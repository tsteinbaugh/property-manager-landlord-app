# North Carolina — lease-clause decision log (state #16)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12: N.C. Gen. Stat. Chapter 42 read whole on the official ncleg.gov chapter page with every history line; 2024-2026 session laws read; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: NC REALTORS® Standard Form 410-T, Residential Rental Contract, revised 7/2025, from ncrealtors.org) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 62 scenarios, Claude-generated, AZ §18.1 and GA §16 models plus North Carolina-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: exact-match regular-expression search of the full official compilation, all 396 chapters, 44 searches incl. a control term; outside-title sections read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA) is closed. No re-audit of any completed state is planned. Targeted work on a specific row is welcome (a scalpel, not a hammer); this pass changed no other state's row except by adding an `NC` tag and an `NC:` note.

**Date:** 2026-09-28 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why it was not needed).
**Scope:** North Carolina state law only. Municipal ordinances (Charlotte, Raleigh, Durham and others) flagged where met, not resolved (instruction 20). Carved out: vacation rentals under 90 days (Chapter 42A) and transient occupancies (§ 42-14.6). Deprioritized: manufactured home spaces and communities, agricultural tenancies (Article 2), lease-option contracts (Chapter 47G), rental referral agencies.
**Input CSV:** `lease-clauses.csv`, **1,126 rows, 16 columns**; active counts AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids, no blank status, no dangling `supersedes`, every row 16 fields, CRLF. One dormant NC row (`late-fee-limit-nc`). Outputs folder was empty at start; nothing to delete (instruction 43).
**Output CSV:** `lease-clauses-NC-sync.csv`, **1,185 rows, 1,151 active. NC 111 active: 68 lease clauses, 43 education; all 111 VERIFIED.** Every other state's active count unchanged.

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **N.C. Gen. Stat. Chapter 42, whole** (§§ 42-1 to 42-76: 96 sections, not counting reserved, expired and repealed numbers), verbatim from the official chapter page on ncleg.gov in the built-in browser, with every history line. **Also whole:** Chapter 41A (State Fair Housing Act); Chapter 127B Article 4 (N.C. Servicemembers Civil Relief Act, §§ 127B-25 to 127B-36); Chapter 168 Article 1 (§§ 168-1 to 168-13). **Section-open, outside Chapter 42:** §§ 1A-1 Rule 68.1 (by search), 6-21.2, 6-21.3, 6-21.6, 7A-228, 14-159.13, 14-159.50 to 14-159.56, 14-395.1, 19-6.1 (part), 20-137.6 (part), 20-219.2, 22-2, 25-3-506, 28A-25-2, 28A-25-7, 42A-2 to 42A-4, 45-21.16A, 45-21.17, 45-21.29(k)-(m), 47A-36, 47C-4-106, 62-110(g), 66-313, 72-1, 90-108(a) (part), 116B-53, 130A-131.7, 130A-131.9 to 130A-131.9H, 130A-280 (part), 130A-284, 143-151.42, 160D-1204, 160D-1207, 168A-3. **Session laws read with amendment markers:** S.L. 2019-161, 2017-156, 2023-5, 2024-47, 2025-45, 2025-52, 2025-54, 2025-88; all 97 session laws of 2025 and all 61 of 2026 fetched and screened for Chapter 42 and landlord-tenant terms. |
| Step 1 — tag first | **Done.** 51 shared rows tagged NC (§2.1). 10 bases not tagged: NC override or variant instead (§2.2). Every other state-specific row screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new NC rows | 16 new lease clauses plus the dormant row rewritten and activated (17 NC-only lease clauses), and 43 education rows (§3). |
| Instruction 24 families | **Both closed:** `security-deposit-return-nc`; `assistance-animal-accommodation-nc` (override; § 168-4.2 has no direct-threat limit). |
| Instruction 33 | **Checked.** North Carolina's no-cure route is Article 7 (criminal activity, §§ 42-59 to 42-76); the shared carve-out preserves it; opt-in `criminal-activity-nc` makes criminal activity a no-cure lease breach (§2.1). |
| Instruction 44 | **Checked.** No North Carolina notice statute makes a lease-designated delivery method mandatory. New instruction 47: the UETA excludes default, cure and eviction notices (G.S. 66-313(e)(2)). |
| Dormant row | **Rewritten and activated** (§5). Pattern holds. |
| Named-topic checklist | **Done.** NC column in all 10 state-column tables (69 rows, no blank cell); NC answers appended to the 61-row gap-discovery backfill table; 19 new North Carolina topics; candidate-topic table 215 refs (126 answered, 86 not located, 3 N/A). Instructions 46 and 47 added. |
| Layout rules (instruction 28) | **No typography rule for residential leases** (code-wide search); 6 written-lease or timing rules and 4 omission sanctions (§4). |
| Proof-of-absence | **Run** on the full official compilation (§17): 16 topics confirmed absent code-wide, each with its own row. |
| Kickoff leads | All resolved (§12). One lead was stale: § 42-45 now reaches only military technicians (S.L. 2019-161); servicemembers moved to Chapter 127B. |
| Open for Taylor | Four decisions (§6). |

## 1. Process notes

### 1.1 Source and currency
- **Official source.** Every Chapter 42 section was read on the official ncleg.gov chapter page (`EnactedLegislation/Statutes/HTML/ByChapter/Chapter_42.html`), which prints each section's history line. No host copy (Justia, Casetext) was used for any row.
- **Currency.** Chapter 42's newest history-line entries are S.L. 2025-45, s. 10, 2025-52, s. 3(a) and 2025-54, s. 12.4(a) (all § 42-46). Every 2025 session law (S.L. 2025-1 to 2025-97) and every 2026 session law (S.L. 2026-1 to 2026-61; 62 onward return 404) was fetched and screened for 'G.S. 42-', 'Chapter 42', landlord, tenant, lessee, rental agreement and squatter terms. Hits that matter: S.L. 2025-45, -52, -54 (§ 42-46); S.L. 2025-88 (squatters, new G.S. 14-159.50 to 14-159.56, effective 2025-12-01); S.L. 2026-59, s. 52 (G.S. 62-110(g), pre-1989 mobile home parks; deprioritized). No 2026 act amends Chapter 42. Session laws are numbered continuously across regular and extra sessions, so the screen also covers any special session.
- **Compilation glitch (new instruction 46).** S.L. 2025-52 and 2025-54 (both approved 2025-07-02, both 'effective retroactively to September 9, 2024') each struck 'If the landlord is the prevailing party' from § 42-46(i)(3) and moved the frivolous-appeal fee rule into a new (i)(4) conditioned on the landlord prevailing. The official compilation prints '(4) court and the landlord is the prevailing party, delay.' followed by a '(5)' carrying S.L. 2024-47's older sentence. The rows follow the enacted text (`eviction-fees-nc` notes).
- **Effective dates (instruction 34).** S.L. 2024-47 became law 2024-09-09 over a veto (§§ 42-14.1, 42-46); S.L. 2025-45 approved 2025-07-01, Part X effective when it became law (§ 42-46(l)); S.L. 2025-88 effective 2025-12-01; S.L. 2023-5 became law 2023-03-19 (§ 42-14.6).
- **Stale kickoff lead.** § 42-45 was amended by S.L. 2019-161, s. 1(d) to strike 'member of the Armed Forces of the United States, the Active Guard and Reserve'; it now covers only military technicians under 10 U.S.C. § 10216. Servicemembers are protected by the N.C. Servicemembers Civil Relief Act (Chapter 127B, Article 4), which incorporates the federal SCRA.

### 1.2 How the text was obtained
- The shell cannot reach ncleg.gov (proxy 403). The built-in browser could: Taylor allowed ncleg.gov for the browser pane, and chapter pages and session laws were read verbatim through in-page scripts. Session-law amendment markers (`<s>` and `<u>`) were preserved as [-deleted-] and {+added+} when read.
- **Full-code search.** All 396 chapter pages listed on the General Statutes table of contents were loaded into the browser page (57.4 million characters, 0 errors) and searched with exact regular expressions, with each hit mapped back to its section number. The control term returned 0 and 'security deposit' returned 46 hits in 25 sections. This did the proof-of-absence and cross-title work directly, which is why **research mode was not needed** (§17).
- No section needed a paste from Taylor (§5a.2 never triggered).
- **Real lease (§15):** WebFetch of the NC REALTORS PDF on ncrealtors.org gave a paragraph-by-paragraph outline. Per instructions 6 and 45 it is a lead only; every point relied on rests on statute text read for this pass.

### 1.3 Section-open vs recall (instruction 22)
Every row was drafted with its section text in view in this session. The recall subset is empty. **No case law is relied on**; where North Carolina law turns on case law (waiver by accepting rent, penalty doctrine for early-termination fees, § 6-21.2's reach to leases, how § 42-12 and § 42-42 interact after a casualty, whether a lease may lengthen § 42-14 notice), the row says so (instruction 16).

## 2. Step 1 — tag first

### 2.1 Tagged NC as written (51)
`rent-payment`, `returned-payments`, `due-at-signing`, `application-of-payments`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided` (base), `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access`, `possession-delay`, `surrender-end-of-term`, `early-termination`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `rental-application-accuracy`, and the variants `tenant-forward-proceedings-ca`, `holdover-ca`, `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `default-by-tenant-ks-ne`.

Every tagged row has an `NC:` note naming the controlling section. The ones that matter:
- **`default-by-tenant-ks-ne` instead of `default-by-tenant`.** The shared clause's last sentence gives the prevailing party 'court costs and reasonable attorneys' fees and expenses'. North Carolina allows only the litigation costs listed in § 42-46(i) (filing fees, service costs, and attorneys' fees 'pursuant to a written lease' capped at 15%), makes it 'contrary to public policy' for a lease to provide for any other eviction litigation cost (§ 42-46(h)(3a)) and voids contrary terms (§ 42-46(h)(4)); the tenant side has no statutory basis (§ 6-21.6 excludes consumer contracts). The fee-sentence-free variant plus the opt-in `eviction-fees-nc` covers it. Decision 3 asks Taylor to confirm.
- **Instruction 33.** Without a forfeiture clause, forfeiture for nonpayment needs a demand and 10 days (§ 42-3); tender of rent and costs before judgment ends the case (§ 42-33). The no-cure route is Article 7 (criminal activity), which the shared carve-out preserves.
- **Variants over bases (parking, storage, renter's insurance).** The bases' blanket 'Landlord is not liable' would reach loss caused by a failure to repair; § 42-42(b) says the landlord is not released of its § 42-42 duties by any acceptance, and § 42-44(a) makes them enforceable by civil action. Same choice as GA decision 5.
- **`holdover-ca` instead of `holdover` (K.3).** No statutory multiplier (confirmed absent); damages for occupation (§ 42-28); month-to-month ends on 7 days' notice (§ 42-14).
- **`notices` and `electronic-signatures`.** Tagged; the UETA excludes default, cure and eviction notices (G.S. 66-313(e)(2)); `notices` designates no electronic method.
- **`returned-payments`.** $35 processing-fee cap for NSF checks (G.S. 25-3-506) gives 'maximum permitted by law' a referent for checks; no statute for failed ACH or card payments.
- **`utilities-paid-by-landlord`.** Its 'included in Monthly Rent' is the lease agreement G.S. 143-151.42(b)(2) needs for a master-metered post-1977 building.

### 2.2 Not tagged — NC override or variant instead (10 bases)

| Base | Instead | Why the base fails in North Carolina |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-nc` | Instruction 24. 30 days after termination AND delivery of possession; interim/final 30/60; unknown address six months; transfer on sale (§§ 42-52, 42-54) |
| `security-deposit-use` | `security-deposit-use-nc` | Deposits 'shall be permitted only for' eight listed purposes (§ 42-51(a)); 'remedy a Tenant default' and the cleaning sentence are broader |
| `late-fee` | `late-fee-limit-nc` (dormant row rewritten) | Free grace-days and amount fields could produce a void fee (§ 42-46(a)-(b), (h)(4)) |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-nc` | Instruction 24. § 168-4.2 gives a right to keep a service animal on leased premises with no direct-threat limit; the base's denial sentence reaches every animal |
| `pet-policy` | `pet-policy-nc` | Its 'enter the property and remove a pet, without liability' conflicts with § 42-25.7 (rights in tenant property only under listed procedures), § 42-25.8 (contrary terms void) and § 42-25.9(b) |
| `default-by-tenant` | `default-by-tenant-ks-ne` (tagged) | Fee sentence (§ 42-46(h)(3a), (i)) |
| `holdover` | `holdover-ca` (tagged) | K.3: no referent |
| `parking`, `storage-space`, `tenants-property-insurance` | the `-ks-oh-ca` variants (tagged) | Blanket disclaimers; § 42-42(b) |

**L.2 exhaustive generic-clause audit (run on the output CSV):** all 55 generic lease clauses are tagged NC or superseded by an NC row. Variants deliberately not tagged: `services-utilities-provided-ks-oh` (NC takes the base), `surrender-end-of-term-mn-nd` and `-ks-ne` (they point to lease sections NC does not use).

### 2.3 Other states' specific rows screened, not tagged
All 335 other active lease clauses were listed and screened. None applies as written; each encodes its own state's statute. Closest analogues and what NC took instead: DV rows → `dv-lease-termination-nc` (NC's documents, safety plan and lock-change mechanics differ); casualty rows → `casualty-termination-nc` (modelled on GA/WY, displacing § 42-12); `authorized-person-contact-az`, `deceased-tenant-contact-tx` → `emergency-contact-nc` (NC's contact person is written into G.S. 28A-25-7); `crime-free-addendum-az`, `serious-misconduct-prohibition-ga` → `criminal-activity-nc` (built on the § 42-59 definition); `utility-billing-disclosure-az` → `utility-billing-nc`; smoke-detector rows → `smoke-co-alarms-nc`; `periodic-tenancy-notice-wy` → `periodic-tenancy-notice-nc`; `tenant-repair-agreement-tx/-nv` not copied (§ 42-42(b) allows only a *subsequent* separate written contract with other consideration, which a lease clause cannot be); `electronic-notice-consent-tx`, `electronic-notice-addendum-fl` not copied (G.S. 66-313(e)(2)).

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type` or `content_type` changed. Each new clause was checked against the library by `topic_key`; none could be merged into a multi-state row without blurring a real divergence (instruction 26, priority rule). No two NC lease clauses share a `topic_key` without a supersedes link (programmatic check).

### 3.2 New NC lease clauses (16) and the rewritten dormant clause

| Row | Rule | Rests on | Opt-in? |
|---|---|---|---|
| `security-deposit-use-nc` | REQUIRED/PROHIBITED | § 42-51(a), § 42-52 | — |
| `security-deposit-cap-nc` | CONSTRAINED | § 42-51(b), § 42-53 | — |
| `security-deposit-holding-nc` | REQUIRED | § 42-50, § 42-55 | — |
| `security-deposit-return-nc` | REQUIRED | §§ 42-52, 42-54, 42-55 | — |
| `late-fee-limit-nc` (dormant, rewritten) | CONSTRAINED | § 42-46(a)-(b), (d), (h) | — |
| `eviction-fees-nc` | CONDITIONAL | § 42-46(e)-(k); S.L. 2025-52, 2025-54 | **Yes** (written lease required) |
| `partial-payment-nonwaiver-nc` | CONDITIONAL | § 42-26(c) | **Yes** ('the lease may provide') |
| `criminal-activity-nc` | CONDITIONAL | § 42-59(2), § 42-26(a)(2) | Yes (instruction 33) |
| `assistance-animal-accommodation-nc` | REQUIRED | §§ 168-4.2 to 168-4.5, 41A-4(f), 41A-6(b) | — |
| `pet-policy-nc` | RECOMMENDED | §§ 42-25.7, 42-25.8, 42-53 | — |
| `dv-lease-termination-nc` | RECOMMENDED | §§ 42-40(4), 42-42.2, 42-42.3, 42-45.1, 42-51(a)(3) | — |
| `casualty-termination-nc` | CONDITIONAL | § 42-12 displaced by agreement; §§ 42-9, 42-10 | Yes |
| `renters-insurance-nc` | CONDITIONAL | § 42-46(l) (S.L. 2025-45) | With any insurance requirement |
| `emergency-contact-nc` | CONDITIONAL | G.S. 28A-25-7(b)(8), (c), (h); § 42-36.3 | Yes |
| `smoke-co-alarms-nc` | RECOMMENDED | §§ 42-42(a)(5), (5a), (7), 42-43(a)(4), (7), 42-44(a1)-(a2) | — |
| `utility-billing-nc` | CONDITIONAL | § 42-42.1; § 42-26(b); § 42-46(d); G.S. 62-110(g)-(j) | **Yes** (written rental agreement) |
| `periodic-tenancy-notice-nc` | CONDITIONAL | § 42-14 minimums | Yes |

### 3.3 New NC education rows (43)
- Deposits and fees: `edu-security-deposit-rules-nc`, `edu-late-and-eviction-fees-nc`, `edu-dishonored-payment-remedies-nc`, `edu-utility-billing-nc`.
- Duties: `edu-landlord-repair-duties-nc`, `edu-lead-hazards-nc`, `edu-meth-decontamination-nc`, `edu-tenant-misconduct-crimes-nc`.
- Eviction and ending the tenancy: `edu-eviction-process-nc`, `edu-self-help-eviction-nc` (PROHIBITED), `edu-retaliation-nc`, `edu-abandoned-property-nc`, `edu-tenant-death-nc`, `edu-periodic-tenancy-notice-nc`, `edu-expedited-criminal-eviction-nc`, `edu-unauthorized-occupant-removal-nc`, `edu-foreclosure-tenant-rights-nc`, `edu-sale-of-rented-property-nc`, `edu-condo-conversion-notice-nc`.
- Rights and compliance: `edu-servicemember-rights-nc`, `edu-fair-housing-nc`, `edu-service-animal-law-nc`, `edu-local-preemption-nc`, `edu-stigmatized-property-nc`, `edu-towing-nc`, `edu-electronic-notices-nc`, `edu-vacation-rental-scope-nc`.
- **16 confirmed absences, each with its own row:** deposit interest, entry notice, rent-increase notice, application-fee cap, immigration inquiry, source of income, radon, mold and bed bugs, flood disclosure, EV charging, cash receipts, holdover measure, right to call police, owner disclosure, eviction record sealing, move-in inspection. Tenant-death termination is recorded as confirmed absent inside `edu-tenant-death-nc`, meth-lab disclosure inside `edu-meth-decontamination-nc`, and firearms inside `edu-fair-housing-nc`.

## 4. Layout and placement requirements (instruction 28)

**Code-wide typography search** (boldface, bold type, bold print, capital letters, conspicuous, underlin*, point type, separate document, separately signed, within 300 characters of lease, tenant, lessee or rental agreement): 13 hits in 9 sections. The only Chapter 42 hits are 'posted conspicuously' (§ 42-25.9(e), abandonment notice) and 'conspicuous part of the premises' (§ 42-29, service). The rest are vacation rentals (§ 42A-11), lease-option contracts (G.S. 47G-2, 14-point bold), leases of goods, rental referral agencies and unrelated titles. **No bold, capitals, type-size or separate-document rule for residential leases.**

| Rule | Requirement | Where it lives |
|---|---|---|
| § 42-46(e)-(g), (i)(3) | Eviction administrative fees and attorneys' fees only 'pursuant to a written lease' | `eviction-fees-nc` |
| § 42-26(c) | Partial-payment non-waiver only if 'the lease' provides it | `partial-payment-nonwaiver-nc` |
| § 42-42.1(a) | Utility charge-back only 'pursuant to a written rental agreement' | `utility-billing-nc` |
| § 42-50 | Deposit location or bond insurer disclosed **within 30 days after the lease term begins** | `security-deposit-holding-nc` |
| § 42-42(a)(5), (7) | Alarms operable and fresh batteries **at the beginning of each tenancy** (battery allocation changeable only by written agreement) | `smoke-co-alarms-nc` |
| G.S. 66-313(e)(2) | Default, cure and eviction notices for a primary residence are outside the UETA: deliver on paper | `edu-electronic-notices-nc` |

**Omission sanctions that forfeit money** (second half of instruction 28):
- willful failure of the deposit, bond or 30-day notice rules voids the right to retain any of the deposit (§ 42-55);
- no written lease clause, no eviction administrative fees or attorneys' fees (§ 42-46(e)-(g), (i)(3));
- a late-fee or other fee term contrary to § 42-46 is void (§ 42-46(h)(4));
- no lease provision on casualty leaves the tenant's § 42-12 surrender right in place.

These add to the **Addendum M.12** case for a `formatting` field; North Carolina adds no new value to it.

## 5. Dormant row (instruction 21)

| Row | Right | Wrong or missing | Outcome |
|---|---|---|---|
| `late-fee-limit-nc` | The $15-or-5% cap; the five-day threshold | No weekly-rent cap; not 'calendar' days counted from the day after the due date (S.L. 2024-47); nothing on once-per-payment, no deduction from a later payment, no late fee for landlord-billed water or sewer, subsidized tenant's share; was not linked to the shared `late-fee` | Rewritten as the NC late-fee clause; activated; supersedes `late-fee`; `topic_key` normalised from `late-fee-limit-nc` to `late-fee`; prior text kept in notes |

**Pattern holds again:** one real fact, part of the operative rule missed.

## 6. Decisions for Taylor

| # | Question | Recommendation | Why |
|---|---|---|---|
| 1 | **Prepaid last-month rent: deposit or rent?** North Carolina's Act caps 'security deposits' (§ 42-51(b)) but never defines the term and never mentions prepaid rent. | Treat it the way you decided for Georgia: money paid in advance toward the last month counts toward the cap and is held and returned with the deposit, unless the lease expressly makes it Rent for a named calendar month. Add that sentence to `security-deposit-cap-nc`. | Consistency with GA; it is the safer reading of a silent statute, because if a court treats unapplied prepaid rent as security, a landlord who collected two months' deposit plus last month's rent would be over the cap. Today the row says nothing either way. |
| 2 | **Offer an opt-in stipulated holdover rate for North Carolina (like `holdover-rate-ga`)?** | No, unless you want parity with Georgia. | North Carolina already gives 'damages for the occupation of the premises since the cessation of the estate' in the summary ejectment itself (§ 42-28), and a stipulated rate would rest only on penalty case law. |
| 3 | **Confirm `default-by-tenant-ks-ne` (no fee sentence) plus opt-in `eviction-fees-nc`, instead of the shared `default-by-tenant`.** | Confirm. | The shared fee sentence provides for uncapped fees and 'expenses' that § 42-46(h)(3a) makes contrary to public policy for eviction complaints, and nothing supports the tenant side. The NC clause states exactly what the statute allows. |
| 4 | **Keep the four new opt-in clauses** (`criminal-activity-nc`, `casualty-termination-nc`, `periodic-tenancy-notice-nc`, `emergency-contact-nc`)? | Keep. | Each gives the landlord a right it otherwise lacks or forfeits: a no-cure lease breach for criminal activity (§ 42-59(2)); a casualty rule in place of § 42-12's narrow surrender right; a longer notice than § 42-14's 7 days; a named contact for G.S. 28A-25-7. The NC REALTORS lease has the first two. |

## 7. Open items and read list (none blocking)

| Item | What would close it |
|---|---|
| L.5 dependencies not read | G.S. 50B-1 (domestic violence definition), Chapter 50C, Chapter 14 sexual assault and stalking definitions, § 15C-4 (Address Confidentiality Program), § 50B-9; § 90-95 (by title); § 143-143.7 (elevators, by title); § 44A-4 (towing liens); § 47A-35 (offering statement); § 14-163.1; G.S. 105-164.4 (accommodations tax); NFPA 72 and the NC Fire Code. Each is labelled in its row |
| Agency rules (instruction 16) | NCUC utility-billing rules (incl. Rule 18-6); Real Estate Commission trust-account rules (21 NCAC 58A); DHHS service-animal registration rules (10A NCAC); meth decontamination rules (15A NCAC); lead rules |
| Federal (instruction 16) | SCRA lease termination (50 U.S.C. § 3955); PTFA; VAWA (34 U.S.C. § 12491); FHA (42 U.S.C. § 3604); lead (42 U.S.C. § 4852d, 24 CFR Part 35, 40 CFR Part 745) — cited, not re-read |
| Case law, not relied on | Waiver by accepting rent; penalty test for early-termination fees and liquidated damages; § 6-21.2's reach to leases; § 42-12 vs § 42-42 after a casualty; enforceability of lease notice periods longer than § 42-14; UDTPA (G.S. 75-1.1) reach to residential leases |
| Local ordinances | Charlotte, Raleigh, Durham and others: housing codes, heat (G.S. 160D-1204 threshold), towing, the rental registration G.S. 160D-1207 still allows — flagged, not resolved |
| Not resolved | Trust land (Eastern Band of Cherokee); self-service storage act reach to landlord-provided storage (G.S. 44A-40 ff.) |

## 8. Integrity and screens
- **CSV:** 1,185 rows; every row has 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair, all states); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF, as in the input. 52 existing rows changed: 51 tags (states, an appended ' | NC: ...' note, `last_checked` 2026-09-28) plus the dormant rewrite. For every tagged row, `bodyText`, `rule_type`, `content_type`, `supersedes` and the pre-existing notes are unchanged (checked programmatically); every other existing row is unchanged.
- **Counts:** NC 0 → 111 (68 lease clauses, 43 education; all VERIFIED). Every other state's active count unchanged: AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106.
- **Instruction 37 (citation inventory):** Chapter 42's 96 section numbers were extracted from the official chapter page and diffed against the `bodyText` and NC notes of every active NC row (ranges expanded). The first diff found 24 uncited sections; that produced two rows (`edu-sale-of-rented-property-nc` for §§ 42-2, 42-6, 42-8; `edu-tenant-misconduct-crimes-nc` for §§ 42-11, 42-13) and added §§ 42-27, 42-32, 42-36.1 and 42-38 to row notes. The rest were deprioritized layers, now cited as such in `edu-vacation-rental-scope-nc`'s notes: § 42-1 (commercial profit-share leases), § 42-7 and Article 2 (§§ 42-15 to 42-25: agricultural, turpentine, mining and timber leases), § 42-14.3 (manufactured home communities). Re-run on the final CSV: no uncited section.
- **Instruction 11 (citation screen):** every North Carolina cite in NC rows was read section-open in this session, or read by title as a search hit and labelled so, or labelled 'not read' (§7).
- **Instruction 16 (non-statute citations):** federal lead, SCRA, PTFA, VAWA, FHA; NCUC rules; 21 NCAC 58A; 10A NCAC; 15A NCAC; NFPA. No administrative rule and no case law is relied on.
- **Instructions 19/38:** every row id named in this log, in the NC checklist cells and sections, and in NC row notes exists in the output CSV. The only ids named that are not NC-tagged are the deliberate 'not tagged' references (`default-by-tenant`, `late-fee`, `security-deposit-use`, `pet-policy`, `holdover`, the bases of the variants).
- **Instruction 14:** every NC addition to a shared row's `notes` is delimited ' | NC: ...'.
- **Kickoff citation format:** every North Carolina code cite in NC row text is written `N.C. Gen. Stat. § 42-46` style (prefix, section sign, hyphenated chapter-section, decimals kept), including cites outside Chapter 42 (e.g. `N.C. Gen. Stat. § 62-110(g)`); applied programmatically, with a doubled-prefix check. Session-law references (`S.L. 2025-52, s. 3`) are left unprefixed so the legal-watch tripwire does not read them as code sections.

## 9. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every change to an existing shared row is an added `NC` tag with an `NC:` note, which is a states-only change under §5a.1.

### 9.1 Flags for Claude CLI
**None.** No specific defect was found in another state's row. (The `pet-policy` pet-removal sentence is wrong for North Carolina because of §§ 42-25.7 to 42-25.9; whether it is right for its six tagged states depends on each state's own self-help law, which this pass did not read, so it is not flagged.)

### Vouches given
- **2026-10-03:** `surrender-end-of-term` (CA's proposal), vouched for NC; reasoning in "Circle-back checks (SOP 1.45)" at the end of this log.

## 10. Findings worth Taylor's attention
1. **North Carolina polices landlord fees more tightly than any state so far.** Late fees, eviction administrative fees and litigation costs are a closed list with caps, most need a written lease, and anything else is void (§ 42-46). That is why the shared `default-by-tenant` and `late-fee` were not tagged.
2. **The deposit's bank notice is a forfeiture trap.** Telling the tenant where the deposit is held within 30 days of the term's start is statutory, and a willful miss voids the right to keep any of the deposit (§§ 42-50, 42-55).
3. **Month-to-month tenancies end on seven days' notice** (§ 42-14), unless the lease says otherwise (`periodic-tenancy-notice-nc`).
4. **Eviction and default notices should not go by e-mail or text:** the UETA excludes them (G.S. 66-313(e)(2)). The NC REALTORS lease allows electronic notices generally.
5. **Service animals get a flat right with no direct-threat limit and no species limit** (G.S. 168-4.2), plus criminal penalties both ways (§ 168-4.5).
6. **Self-help is barred, including over pets and belongings** (§§ 42-25.6 to 42-25.9); the shared pet clause's removal sentence would be void.
7. **New in 2025:** the squatter procedure (G.S. 14-159.50 ff., from 2025-12-01) and the renter's-insurance limits (§ 42-46(l)). **New in 2024:** local governments may not mandate voucher acceptance (§ 42-14.1(b)).
8. **The official compilation misprints § 42-46(i)(4)-(5)** (instruction 46).
9. **Servicemembers are now protected under Chapter 127B**, not § 42-45 (which covers only military technicians since 2019).

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-NC-sync.csv` | 1,185 rows, 1,151 active; NC 111 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-NC.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | NC column in all 10 state-column tables; NC answers in the backfill table; North Carolina sections at the end; instructions 46-47 |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| Residential Rental Agreements Act, §§ 42-38 to 42-46; duties §§ 42-42, 42-43; non-waiver § 42-42(b); fees § 42-46 incl. recent amendments | **Confirmed.** § 42-46 amended by S.L. 2024-47 (calendar-day late-fee count; litigation costs), 2025-45 (renter's insurance) and 2025-52/2025-54 (attorneys' fees, retroactive to 2024-09-09; compilation garbled) |
| Tenant Security Deposit Act, §§ 42-50 to 42-56 | **Confirmed:** tiered cap (2 weeks / 1.5 months / 2 months); trust account or bond with a 30-day notice; nonrefundable reasonable pet fee; 30-day itemization with 60-day final; six-month hold for unknown address; willful noncompliance voids retention |
| Periodic notice § 42-14; summary ejectment Article 3 | **Confirmed:** 7 days month-to-month, 2 days week-to-week, 1 month year-to-year, 60 days manufactured home space; Article 3 = §§ 42-26 to 42-36.3 |
| Self-help § 42-25.6; retaliation § 42-37.1 | **Confirmed:** Article 2A (§§ 42-25.6 to 42-25.9); Article 4A (§§ 42-37.1 to 42-37.3) |
| DV and military termination §§ 42-40, 42-45, 42-45.1 | **Confirmed in part:** § 42-45.1 and § 42-42.3 as expected; **§ 42-45 now covers only military technicians** (S.L. 2019-161); servicemembers are under Chapter 127B, Article 4 |
| Preemption § 42-14.1 | **Confirmed and widened:** rent amount, plus (since S.L. 2024-47) any local ban on refusing federally assisted tenants; four exceptions |
| State Fair Housing Act, Chapter 41A | **Confirmed:** tracks federal classes; exemptions; accommodation and modification duties |
| 2025 or 2026 squatter law | **Enacted:** S.L. 2025-88 (SB 55), approved 2025-08-06, effective 2025-12-01, G.S. 14-159.50 to 14-159.56. No 2026 act |
| Dormant `late-fee-limit-nc` | Rewritten and activated (§5) |
| Chapter 42A | Scope recorded and carved out (`edu-vacation-rental-scope-nc`) |
| Not in the leads | § 42-14.4 (attorney tenants' files); § 42-14.5 (no duty to screen); § 42-14.6 (transient occupancy, 2023); § 42-26(c) (opt-in partial-rent non-waiver); § 42-42.1 and G.S. 62-110 (utility billing); G.S. 66-313(e)(2) (UETA exclusion); G.S. 168-4.2 to 168-4.5 (service animals); G.S. 160D-1207 (registration limits); G.S. 28A-25-7 (tenant death); G.S. 47A-36 (condo conversion); G.S. 130A-131.7 ff. (lead); G.S. 14-395.1 (sexual harassment) |

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** North Carolina Association of REALTORS®, **Standard Form 410-T, 'Residential Rental Contract'**, revised 7/2025 (footer '© 7/2025'). **Where from:** the association's own site, `ncrealtors.org/wp-content/uploads/markedup0725-410-T.pdf` (the July 2025 revision the association posts with its form changes). **Why it qualifies:** it is the state Realtors association's residential lease (instruction 36, option (a)), published by the association itself. **Addenda named but not obtained:** 430-T (lead), 440-T (maintenance), 442-T (pet), 443-T (assistance animal), 445-T (guaranty). **Method:** mapped by topic from a fetch-tool outline (no text reproduced; copyrighted). The lease is a lead only (instruction 6); every point below rests on primary text read for this pass.

### 15.1 Provision map

| Lease provision (by topic) | NC library coverage | Result |
|---|---|---|
| ¶1 Termination and renewal; automatic renewal periods; notice periods | `surrender-end-of-term`, `holdover-ca`, `periodic-tenancy-notice-nc`, `edu-periodic-tenancy-notice-nc` | Covered; statute floors in § 42-14 |
| ¶2 Rent, proration, due date; possession withheld until rent and deposit paid | `rent-payment`, `due-at-signing` | Covered |
| ¶3 Late fee (5 days, $15 or 5%); returned check fee (max $35) | `late-fee-limit-nc`, `returned-payments`, `edu-dishonored-payment-remedies-nc` | Covered; matches § 42-46(a) and G.S. 25-3-506 |
| ¶4 Security deposit under the Act; interest to landlord; unclaimed deposits under $100 to charity after a year; transfer under § 42-54 | `security-deposit-*-nc`, `edu-no-deposit-interest-nc`, `edu-security-deposit-rules-nc` | Covered. Charity rule: no statute located (rests on Real Estate Commission rules, not read) |
| ¶5 Tenant obligations incl. no smoking or vaping any substance | `tenant-maintenance`, `residential-use-only`, `no-disturbance`, `smoking-policy` | Covered (§ 42-43) |
| ¶6 Landlord obligations incl. imminently dangerous conditions; recovery of tenant-caused repair costs | `landlord-maintenance`, `edu-landlord-repair-duties-nc` | Covered (§ 42-42) |
| ¶7 Utilities allocation; tenant keeps utilities on | `utilities-responsibility`, `utility-service-continuity`, `utilities-paid-by-landlord` | Covered |
| ¶8 Smoke and CO alarms per § 42-42 | `smoke-co-alarms-nc` | Covered (same allocation) |
| ¶9 Rules; new rules on 30 days' notice; HOA | `hoa-compliance`, `common-area-use` | Covered; no statute on rule changes |
| ¶10 Right of entry at reasonable hours; emergencies | `landlords-access`, `edu-no-entry-notice-statute-nc` | Covered (contract governs) |
| ¶11 Tenant pays for damage it caused | `tenant-maintenance`, `security-deposit-use-nc` | Covered |
| ¶12 Pets only by addendum; fine per animal | `pet-policy-nc` | Covered; per-animal fines are contract (not a § 42-46 fee) |
| ¶13 Alterations; new locks' keys to landlord | `no-alterations`, `keys` | Covered |
| ¶14 Occupants; fine per unauthorized person | `permitted-occupants`, `guest-policy` | Covered |
| ¶15 Rental application warranty | `rental-application-accuracy` | Covered |
| ¶16 Early termination: reasonable efforts to re-rent; move-out duties; forwarding address | `early-termination`, `surrender-end-of-term`, `security-deposit-return-nc` | Covered; mitigation is not statutory in NC |
| ¶17 Rent default and criminal activity are immediate breaches; 5-day cure for others; § 42-46 fees; partial rent no waiver (§ 42-26) | `default-by-tenant-ks-ne`, `criminal-activity-nc`, `eviction-fees-nc`, `partial-payment-nonwaiver-nc` | **Gaps → three rows** (criminal activity, eviction fees, partial-payment non-waiver) |
| ¶18 Landlord default: notice and cure; tenant damages limited; no consequential damages except willful or wanton | none | **Divergence recorded:** § 42-42(b) bars release of the landlord's fitness duties; how far a damages limitation survives is case law. The library does not copy it |
| ¶19 Bankruptcy termination | none | Not copied: ipso facto clauses are limited by federal bankruptcy law (11 U.S.C. § 365(e), not read) |
| ¶20 Renter's insurance optional or required; landlord additional insured; release and indemnity except landlord negligence | `tenants-property-insurance-ks-oh-ca`, `renters-insurance-nc` | Covered; carrier choice and proof mechanics from § 42-46(l) |
| ¶21 Agent | none | Not needed (§ 42-40(3) defines landlord to include agents; § 42-44(c1)) |
| ¶22 Form construction; ¶25 no assignment, non-waiver, joint liability; ¶30 entire agreement | `severability`, `no-sublet-assign`, `joint-liability`, `entire-agreement` | Covered |
| ¶23 Amendment of laws: landlord may elect new statute | none | Not copied; no NC statute authorizes amendment by notice |
| ¶24 Eminent domain and casualty: landlord may terminate on 30 days' notice | `casualty-termination-nc` | **Gap → `casualty-termination-nc`** (displaces § 42-12) |
| ¶26 Tenant may inspect and give a written assessment within set days | `existing-condition`, `edu-no-move-in-inspection-rule-nc` | Covered; no statutory inspection |
| ¶27 Addenda (lead, maintenance, pet, assistance animal, guaranty) | `lead-based-paint`, `assistance-animal-accommodation-nc` | Covered |
| ¶29 Tenant information to credit bureaus | none | Not needed (FCRA; federal) |
| ¶31 Electronic signature; notices by e-mail, text or fax | `electronic-signatures`, `notices`, `edu-electronic-notices-nc` | **Divergence:** G.S. 66-313(e)(2) excludes default, cure and eviction notices from the UETA → new education row and instruction 47 |

### 15.2 What it produced
- **(a) Missing required clause:** none.
- **(b) Corrections to NC rows:** none.
- **(c) New NC rows:** `criminal-activity-nc`, `eviction-fees-nc`, `partial-payment-nonwaiver-nc`, `casualty-termination-nc` (each confirmed against statute), and `edu-electronic-notices-nc`.
- **(d) Divergences recorded as questions:** landlord-default damages limitation (¶18); electronic notices (¶31); bankruptcy termination (¶19); unclaimed-deposit charity rule (¶4); amendment-of-laws election (¶23).
- **(e) Confirmed absences:** none new from the form.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** Arizona's scenario map (AZ log §18.1) and Georgia's (GA log §16), re-run against the NC-active library, plus North Carolina-specific scenarios (attorney tenant's files, tenant death with a named contact, utility charge-back, condo conversion, squatters under the 2025 act, military technicians vs other servicemembers, vacation rental boundary). Where no row answered, the full-code search was run (§17) and every landlord-relevant hit was read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 62 scenarios: 43 covered by rows written in the statute walk; 8 gaps, each producing one or more rows; 6 confirmed absences, each with its own row; 1 open question for Taylor (last month's rent, decision 1); 2 not located with no row (holding deposit, contractor liens); 2 out of scope.

| Scenario | NC coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **Not located**; the Act does not define a deposit. No row |
| Application fee; screening; criminal history | `edu-no-application-fee-cap-nc`, `edu-fair-housing-nc` | Covered (§ 42-14.5 no duty to screen) |
| Voucher holder applies | `edu-no-source-of-income-rule-nc`, `edu-local-preemption-nc` | Covered |
| Applicant lied on the application | `rental-application-accuracy` | Covered |
| Required disclosures at signing | `lead-based-paint`, `security-deposit-holding-nc`, `edu-no-owner-disclosure-rule-nc` | Covered |
| Unit floods regularly; radon; mold | `edu-no-flood-disclosure-nc`, `edu-no-radon-disclosure-nc`, `edu-no-mold-bedbug-disclosure-nc` | Covered (confirmed absent) |
| Someone died in the unit; offender lives nearby | `edu-stigmatized-property-nc` | Covered (§ 42-14.2) |
| Unit not ready on move-in day | `possession-delay` | Covered |
| How big a deposit may be; pet fee on top | `security-deposit-cap-nc`, `pet-policy-nc` | Covered |
| Last month's rent collected at signing | `due-at-signing`, `security-deposit-cap-nc` | Open (decision 1) |
| Where to keep the deposit | `security-deposit-holding-nc` | Covered |
| Property in an HOA | `hoa-compliance` | Covered |
| City requires registration or inspection | `edu-local-preemption-nc` | Covered (G.S. 160D-1207) |
| Short vacation stay rather than a lease | `edu-vacation-rental-scope-nc` | Covered (carve-out) |
| **Rent and money** | | |
| Rent is late | `late-fee-limit-nc`, `default-by-tenant-ks-ne`, `edu-eviction-process-nc` | Covered |
| Tenant pays part of the rent | `partial-payment-nonwaiver-nc`, `application-of-payments` | **Gap → `partial-payment-nonwaiver-nc`** (§ 42-26(c)) |
| Check bounces | `returned-payments`, `edu-dishonored-payment-remedies-nc` | Covered |
| Cash rent and receipts | `edu-no-cash-receipt-duty-nc` | Covered (confirmed absent) |
| Raising rent | `edu-no-rent-increase-notice-nc` | Covered (confirmed absent) |
| Landlord bills water or electricity | `utility-billing-nc`, `edu-utility-billing-nc` | **Gap → both rows** (§ 42-42.1; G.S. 62-110) |
| Charging for the eviction | `eviction-fees-nc`, `edu-late-and-eviction-fees-nc` | **Gap → both rows** |
| Tenant won't show proof of renter's insurance | `renters-insurance-nc` | **Gap → row** (§ 42-46(l)) |
| **During the tenancy** | | |
| Heat fails in January | `landlord-maintenance`, `edu-landlord-repair-duties-nc` | Covered (65 degrees, § 42-42(a)(8)h.) |
| Tenant withholds rent over repairs | `edu-landlord-repair-duties-nc` | Covered (§ 42-44(c)) |
| Smoke or CO alarm dead or disabled | `smoke-co-alarms-nc` | Covered |
| Child found with lead poisoning | `edu-lead-hazards-nc` | Covered |
| Former meth lab | `edu-meth-decontamination-nc` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access`, `edu-no-entry-notice-statute-nc` | Covered |
| Tenant changes locks; DV victim wants locks changed | `keys`, `dv-lease-termination-nc` | Covered (§ 42-42.3) |
| Guest won't leave | `guest-policy-day-limit`, `edu-eviction-process-nc` | Covered (summary ejectment; not a squatter) |
| Squatters in a vacant unit | `edu-unauthorized-occupant-removal-nc` | Covered (S.L. 2025-88) |
| Tenant lists the unit on Airbnb | `no-sublet-assign` | Covered |
| Drug dealing in the unit or by a guest | `criminal-activity-nc`, `edu-expedited-criminal-eviction-nc` | **Gap → `criminal-activity-nc`**; Article 7 row |
| Unapproved pet; landlord wants to remove it | `pet-policy-nc`, `edu-self-help-eviction-nc` | Covered (no seizure) |
| Service animal; emotional support animal | `assistance-animal-accommodation-nc`, `edu-service-animal-law-nc` | Covered |
| Disability modification request | `no-alterations`, `edu-fair-housing-nc` | Covered (§ 41A-4(f)(1)) |
| Tenant hires a contractor (liens) | none | **Not located** as a landlord-tenant rule (Chapter 44A Article 2 not read). No row |
| Car towed from the lot | `parking-vehicle-rules`, `edu-towing-nc` | Covered |
| Tenant willfully damages the unit | `edu-tenant-misconduct-crimes-nc` | **Gap → row** (§ 42-11, found by the citation inventory) |
| Fire or storm damage | `casualty-termination-nc` | Covered (§ 42-12 displaced) |
| Tenant calls police repeatedly | `edu-no-police-call-protection-nc` | Covered (confirmed absent) |
| Tenant wants an EV charger | `edu-no-ev-charging-right-nc` | Covered (confirmed absent) |
| Tenant complains to the city, then gets a nonrenewal | `edu-retaliation-nc` | Covered |
| Landlord's agent demands sexual favours | `edu-fair-housing-nc` | Covered (§ 14-395.1) |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination` | Covered |
| DV, sexual assault or stalking victim wants out | `dv-lease-termination-nc` | Covered |
| Soldier gets PCS orders; Guard on State duty | `edu-servicemember-rights-nc` | Covered (Chapter 127B; § 42-45) |
| Month-to-month: how much notice | `edu-periodic-tenancy-notice-nc`, `periodic-tenancy-notice-nc` | Covered |
| Tenant stays after the lease | `holdover-ca`, `edu-no-holdover-multiplier-nc` | Covered |
| Tenant disappears; belongings left | `surrender-end-of-term`, `edu-abandoned-property-nc` | Covered |
| Attorney tenant leaves client files | `edu-abandoned-property-nc` | Covered (§ 42-14.4) |
| Tenant dies | `edu-tenant-death-nc`, `emergency-contact-nc` | **Gap → `emergency-contact-nc`** (G.S. 28A-25-7) |
| Eviction for nonpayment | `edu-eviction-process-nc` | Covered |
| Eviction record sealing | `edu-no-eviction-record-sealing-nc` | Covered (confirmed absent) |
| Landlord changes the locks or cuts utilities | `edu-self-help-eviction-nc` | Covered |
| Move-out and deposit dispute | `security-deposit-return-nc` | Covered |
| **Owner changes** | | |
| Owner sells the property | `edu-sale-of-rented-property-nc` | **Gap → row** (§§ 42-2, 42-8, 42-54) |
| Lender forecloses | `edu-foreclosure-tenant-rights-nc` | Covered |
| Owner converts to condominiums | `edu-condo-conversion-notice-nc` | Covered (found by §17) |
| Owner switches managers | none needed | No statute (`edu-no-owner-disclosure-rule-nc`) |
| Unit is a manufactured-home space | none | **Out of scope** (deprioritized layer; § 42-14 proviso noted) |
| Furnished stay under 90 days | `edu-vacation-rental-scope-nc` | **Out of scope** (Chapter 42A) |

(The 8 gaps produced 12 rows in all; several were also found by the statute walk.)

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engine:** all 396 chapter pages of the official General Statutes (ncleg.gov, chapter list from the General Statutes table of contents) loaded into the built-in browser page on 2026-09-28 and searched with JavaScript regular expressions (case-insensitive; exact strings; word forms and plurals written into each pattern; hits mapped to section numbers). **Control terms:** 'zqxvbnmwt' returned 0 (a true empty); 'security deposit' returned 46 hits in 25 sections, 'carbon monoxide' 54 in 11, so ordinary terms return hits. Instruction 39: a probe is a screen, never a verdict; every landlord-relevant hit was read in context and the key sections read section-open.

| # | Search (regex) | Hits / sections | Result |
|---|---|---|---|
| 1 | zqxvbnmwt (control) | 0 | True empty |
| 2 | security deposits? (control and deposit sweep) | 46 / 25 | Residential: Article 6 and Chapter 42A only; no interest rule → `edu-no-deposit-interest-nc` |
| 3 | landlords? \| residential (tenant\|lessee\|lease\|rental)s? \| rental agreements? \| lease agreements? (outside ch. 42/42A) | 358 / 138 | Read: G.S. 14-159.50 ff., 14-395.1, 28A-25-7, 41A-4, 45-21.16A, 45-21.17, 45-21.29, 47A-36, 47E-9, 66-313, 143-151.42, 160D-1204, 160D-1207 → rows; rest vehicle, goods, insurance, public-finance and bingo leases |
| 4 | late (fee\|fees\|charge\|charges\|payment fee) | 160 / 70 | Only § 42-46 for dwellings |
| 5 | (application\|screening) fees? near rent/tenant/landlord/housing | 1 | None → `edu-no-application-fee-cap-nc` |
| 6 | (landlord\|lessor) … (enter\|entry\|access) … notice | 0 | None → `edu-no-entry-notice-statute-nc` |
| 7 | (right of/to entry\|may enter\|to enter\|entry) near tenant/dwelling unit/leased premises | 9 | None a landlord entry rule |
| 8 | \bradon\b | 1 (G.S. 47E-4, sales) | → `edu-no-radon-disclosure-nc` |
| 9 | mold\|molds\|mildew\|bed ?bugs?\|fungus\|fungal | 47 / 14 | Only § 42-42(a)(8)l.; bed bug 0 → `edu-no-mold-bedbug-disclosure-nc` |
| 10 | carbon monoxide | 54 / 11 | § 42-42(a)(7) present → `smoke-co-alarms-nc` |
| 11 | smoke (alarm\|detector) | 64 / 10 | §§ 42-42, 42-43, 42-44 present; Chapter 42A; G.S. 143-138 (building code) |
| 12 | clandestine\|methamphetamine | 74 / 21 | § 130A-284 decontamination; no disclosure → `edu-meth-decontamination-nc` |
| 13 | source of income\|lawful source\|housing choice voucher\|section 8\|housing assistance program | 37 / 28 | § 42-14.1(b) preemption only → `edu-no-source-of-income-rule-nc` |
| 14 | (immigration\|citizenship) near tenant/landlord/rent/dwelling/housing | 1 | None → `edu-no-immigration-inquiry-rule-nc` |
| 15 | electric vehicle\|charging station | 65 / 14 | None for tenants → `edu-no-ev-charging-right-nc` |
| 16 | (increase\|raise\|raising) … rent \| rent increase | 1 | None → `edu-no-rent-increase-notice-nc` |
| 17 | receipts? (for\|of) (rent\|payment) \| rent receipt; \bcash\b … \brent\b | 22 / 19; 0 | None → `edu-no-cash-receipt-duty-nc` |
| 18 | hold(s\|ing)? ?over\|holdover\|double (the )?rent\|at sufferance | 56 / 36 | No multiplier → `edu-no-holdover-multiplier-nc` |
| 19 | (death\|dies\|died\|deceased\|decedent) near (tenant\|lessee\|occupant) | 57 / 30 | No termination right; §§ 42-5, 42-36.3, 28A-25-7 → `edu-tenant-death-nc` |
| 20 | renters?' insurance \| insurance coverage for the leased premises | 2 | § 42-46(l) → `renters-insurance-nc` |
| 21 | firearms? near lease/tenant/lessee/landlord/rental | 8 / 6 | None for private leases (recorded in `edu-fair-housing-nc`) |
| 22 | emotional support\|assistance animal\|support animal\|comfort animal; service animal | 17 / 3; 30 / 5 | Chapter 168 → `assistance-animal-accommodation-nc` |
| 23 | lead poisoning\|lead-based paint\|lead hazard | 66 / 24 | **Found: G.S. 130A-131.7 ff.** → `edu-lead-hazards-nc` |
| 24 | flood near lease/tenant/lessee/rental/landlord | 1 (G.S. 146-32) | None → `edu-no-flood-disclosure-nc` |
| 25 | (lock\|locks\|lockout\|padlock\|rekey\|deadbolt) near tenant/landlord | 6 / 2 | §§ 42-36.2, 42-42.3 only |
| 26 | (law enforcement\|police\|911\|emergency assistance) near tenant | 4 | None → `edu-no-police-call-protection-nc` |
| 27 | typography terms near lease/tenant (instruction 28) | 13 / 9 | No residential rule (§4) |
| 28 | (disclose\|disclosure\|identify) … (owner\|landlord) … (tenant\|rental agreement) | 4 | § 42-44(c1) only → `edu-no-owner-disclosure-rule-nc` |
| 29 | (expunge\|expunction\|seal*) near (ejectment\|eviction) | 0 | → `edu-no-eviction-record-sealing-nc` |
| 30 | (move-in\|inventory\|condition report\|checklist) near tenant | 0 | → `edu-no-move-in-inspection-rule-nc` |
| 31 | \bflags?\b near tenant/lessee/lease | 0 | No display right |
| 32 | sublet\|sublease\|sublessee | 60 / 24 | § 42-14.1 only for dwellings |
| 33 | summary ejectment\|eviction (outside ch. 42/42A) | 58 / 31 | G.S. 7A-222 to 7A-232, 14-159.50 ff., 45-21.29, 47G-7, 66-313, 157-29, 160D-1207 read or by title |
| 34 | tenant near dwelling/residential/rental unit/apartment (outside ch. 42/42A) | 23 / 18 | G.S. 47A-36 (**found**), 62-110, 130A-131.9, 143-151.42, 160D-1129/1203 |
| 35 | abandon* near tenant/premises/dwelling | 5 / 4 | § 42-25.9, 44A-2 (manufactured homes), 160D-1203 |
| 36 | (dispose\|disposal) … personal property … tenant | 0 | Only Chapter 42 procedures |
| 37 | charit* near deposit/trust | 118 / 45 (trust law) | No deposit charity rule (REALTORS ¶4 rests on agency rules) |
| 38 | confession of judgment | 17 hits | No lease rule (Rule 68.1; §§ 25A-18, 53-181) |
| 39 | unconscionab* | 18 sections | Goods and consumer credit only |
| 40 | (exceeding\|more than\|in excess of) three years | 62 / 56 (8 near 'lease') | G.S. 22-2, 47-18 |
| 41 | (condemn\|unfit for human habitation) near rent | 3 (not landlord-tenant) | No rent-after-condemnation bar |
| 42 | public swimming pool | 14 / 7 | G.S. 130A-280 (health rules; single-family private pools excluded) |
| 43 | keep or maintain any … dwelling | 1 | G.S. 90-108(a)(7) (drug premises crime) |
| 44 | nonresident\|out-of-state\|resides outside near rent/lease/landlord/dwelling | 21 / 18 | No non-resident owner broker rule |

**Other titles read section-open** (found by the searches, the statute walk's cross-references, or the scenario screen): Chapter 41A (whole); Chapter 127B Article 4 (whole); Chapter 168 Article 1 (whole); G.S. 6-21.2, 6-21.3, 6-21.6; 7A-228; 14-159.13, 14-159.50 to 14-159.56, 14-395.1; 19-6.1 (part); 20-137.6 (part), 20-219.2; 22-2; 25-3-506; 28A-25-2, 28A-25-7; 42A-2, 42A-3, 42A-4; 45-21.16A, 45-21.17, 45-21.29(k)-(m); 47A-36; 47C-4-106; 62-110(g); 66-313; 72-1; 90-108(a) (part); 116B-53; 130A-131.7, 130A-131.9 to 130A-131.9H, 130A-280 (part), 130A-284; 143-151.42; 160D-1204, 160D-1207; 168A-3.

---

## Decisions that need Taylor (short list)

1. **Prepaid last-month rent** — recommend the Georgia rule (counts toward the cap unless the lease makes it Rent for a named month); add one sentence to `security-deposit-cap-nc`.
2. **Opt-in holdover rate for NC** — recommend no (§ 42-28 already gives occupation damages).
3. **`default-by-tenant-ks-ne` + `eviction-fees-nc` instead of the shared `default-by-tenant`** — recommend confirm (§ 42-46(h)(3a)).
4. **Keep the four new opt-ins** (`criminal-activity-nc`, `casualty-termination-nc`, `periodic-tenancy-notice-nc`, `emergency-contact-nc`) — recommend keep.

**Integrity:** 1,185 rows (1,126 + 59 new; 1 dormant row rewritten and activated); NC 111 active (all VERIFIED); every other state's count unchanged (AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row.

## 18. Sync note (Claude Code, 2026-09-28)

- Installed as delivered, with one correction: `security-deposit-holding-nc`'s NC note read "contrast GA N.C. Gen. Stat. § 44-7-36". That is a Georgia section (O.C.G.A. § 44-7-36, Georgia's small-landlord exemption) that the programmatic citation-format pass relabeled. The note now reads "contrast GA O.C.G.A. § 44-7-36". Notes only; no clause text changed. A scan of every NC row found no other section from another state carrying the NC prefix.
- Spot-checked against official ncleg.gov text: §§ 42-14, 42-46(a)-(b), 42-50, 42-51(b), 42-52. Each matched the rows that rely on it.

- **Taylor's answers to §6 (2026-09-28):** decision 1, yes, same as GA: `security-deposit-cap-nc` now counts prepaid last-month rent toward the cap unless the lease makes it Rent for a named calendar month (notes updated in `due-at-signing` and `edu-security-deposit-rules-nc` too). Decision 2, yes, same as GA: new opt-in `holdover-rate-nc`, text identical to `holdover-rate-ga`, written at sync after reading N.C. Gen. Stat. §§ 42-4, 42-26, 42-28 and all of § 42-46 on ncleg.gov (the penalty test is case law, not read; builder note to keep the rate near the daily rental value). Decisions 3 and 4 are still open.
- **Decision 3 (2026-09-28): confirmed.** NC uses `default-by-tenant-ks-ne` plus `eviction-fees-nc`, not the shared `default-by-tenant`. Taylor also wants `eviction-fees-nc` on every NC lease by default; recorded in the row's notes (the app's 'include by default' setting is per landlord).
- **Decision 4 (2026-09-28): keep all four** opt-in clauses (`criminal-activity-nc`, `casualty-termination-nc`, `periodic-tenancy-notice-nc`, `emergency-contact-nc`) as built. All four §6 decisions are now closed.

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `dv-lease-termination-nc` → `edu-dv-lease-termination-nc`; `security-deposit-cap-nc` and `security-deposit-return-nc` → the existing `edu-security-deposit-rules-nc`.
- **Trimmed:** `late-fee-limit-nc` keeps the fee and its five-day trigger (rules in `edu-late-and-eviction-fees-nc`).

### Verdict for every lease clause

All 18 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-termination-nc` | Education | — | tenant right |
| `security-deposit-cap-nc` | Education | — | cap |
| `security-deposit-return-nc` | Education | — | landlord duty |
| `late-fee-limit-nc` | Split | CONSTRAINED_TERM | keep fee; cap and rules to edu |
| `assistance-animal-accommodation-nc` | Keep | SERVES_LANDLORD |  |
| `casualty-termination-nc` | Keep | SERVES_LANDLORD | contract choice |
| `criminal-activity-nc` | Keep | SERVES_LANDLORD |  |
| `emergency-contact-nc` | Keep | SERVES_LANDLORD |  |
| `eviction-fees-nc` | Keep | SERVES_LANDLORD | opt-in |
| `holdover-rate-nc` | Keep | CONSTRAINED_TERM |  |
| `partial-payment-nonwaiver-nc` | Keep | SERVES_LANDLORD | opt-in |
| `periodic-tenancy-notice-nc` | Keep | CONSTRAINED_TERM |  |
| `pet-policy-nc` | Keep | SERVES_LANDLORD |  |
| `renters-insurance-nc` | Keep | SERVES_LANDLORD |  |
| `security-deposit-holding-nc` | Keep | REQUIRED_DISCLOSURE: N.C. Gen. Stat. § 42-50 |  |
| `security-deposit-use-nc` | Keep | SERVES_LANDLORD |  |
| `smoke-co-alarms-nc` | Keep | SERVES_LANDLORD |  |
| `utility-billing-nc` | Keep | SERVES_LANDLORD | opt-in |

## Targeted fix, 2026-09-29: bed-bug and mold rows split

`edu-no-mold-bedbug-disclosure-nc` covered two subjects in one row. It is switched off, and its content moved unchanged into `edu-no-bed-bug-disclosure-nc` and `edu-no-mold-disclosure-nc`, matching the separate rows most states have. The research and citation are copied to both rows (the same search covered both subjects); no new research. Reason: each row carries one `topic_key`, so a combined row hid one of the two subjects from the cross-state coverage check.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.21), 2026-10-02

**Date:** 2026-10-02. **Scope:** a scalpel, not a re-audit (rule 1). Only the 18 [Retro] rules and the 7 targeted fixes in the PROMPT were checked; nothing else was reopened. **Settings:** Opus, high effort. Research mode was not used, because the full official code and constitution were loaded and searched directly (rule 9).

**Inputs:** the attached files were the only source of truth.
- `lease-clauses.csv` has 2,444 rows, 17 columns, CRLF, matching the PROMPT.
- The attached files matched my working copies by SHA-256 when they were re-sent mid-run.
- Old outputs were deleted first: `lease-clause-decision-log-NC.md`, `lease-clause-decision-log-named-topic-checklist.md` and `lease-clauses-NC-sync.csv`.
- Where this chat's 2026-09-28 work differs from the attached library (for example the 2026-09-29 scrub and the propagated edits), the attached files were followed.

**Sources:**
- *Sections:* 57 sections were read on ncleg.gov in the built-in browser. Each was fetched twice, with matching hashes and the heading number checked. 48 are saved to the NC retro source folder, each SHA-256-matched to the browser text. The other 9 have a browser hash only and nothing rests on them for a change: §§ 42-4, 42-9, 42-38, 42-40, 42-42.3, 42-64, 6-21.3, 6-21.6, 7A-228.
- *Full-text corpus:* all 396 chapters on the General Statutes table of contents (0 fetch errors), plus the NC Constitution decoded as windows-1252. 57,561,854 characters. Control term 0 hits; `security deposit` 46/25, the same as on 2026-09-28. Every battery, its known positive (real or synthetic) and a heading-only screen are in `battery_NC_retro_2026-10-02.md`.
- *Court rules:* the General Rules of Practice (codified 6 August 2025) were parsed in the browser with pdf.js. Only the full-text hash was recorded, a weaker method (rule 14), and the text is not on disk.
- *Session laws:* no new NC session law since 2026-09-28; 2026 still ends at S.L. 2026-61.

**Delta:** `lease-clauses-NC-retro-delta.csv` has 47 rows: 33 changed and 14 new. NC goes from 111 to 123 active rows (67 lease clauses, 56 education rows). No other state's count changed, and no shared row's `bodyText`, `rule_type` or `content_type` changed.

| # | Rule / fix | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| 1 | **Rule 37**, tenancy type | **Fixed** | §§ 42-14, 42-28, 42-26, 42-3, 42-46(a), 42-51(b), 42-45, 42-45.1, 42-45.2, 45-21.16A(b)(2); scrub-created rows screened | `early-termination` → `early-termination-ks` (NC untagged / tagged): fee on "remaining Rent due under the Term" reached a periodic tenancy that § 42-14 ends on 7 or 2 days' notice with no fee. `returned-payments-nc` ("during any 12-month period"). `holdover-rate-nc` (the end of a periodic tenancy by notice is now a trigger). `edu-foreclosure-tenant-rights-nc`: the notice text's "entered into or renewed on or after October 1, 2007" vs the dateless § 42-45.2 right; treat every tenant as covered. `edu-dv-lease-termination-nc` (scrub row) screened: no tenancy assumption. Deposit tiers already in `edu-security-deposit-rules-nc` (§ 42-51(b)); late fee is Monthly-Rent-only, so the weekly cap can't arise. |
| 2 | **Rule 39**, eviction duties | **Fixed** (education); no new duty found | §§ 42-36.2, 42-25.7, 42-25.9, 42-34, 7A-228, 7A-109; General Rules of Practice (TOC; Rules 5(e), 15, 27, 29 read whole; 0 hits for ejectment, evict, landlord, tenant, CARES); AOC Remote Public Access and public-records pages; batteries B39a–d, H39 | `edu-no-eviction-record-sealing-nc`: now says no statute *or court rule* seals eviction records; records are open (§ 7A-109(a)) and remotely licensed (§ 7A-109(d)). `edu-abandoned-property-nc`: no post-writ animal rule; § 42-14.4(b) "in accordance with the lease agreement". Lockout ban already in `edu-self-help-eviction-nc` (log §3.3). No CARES Act filing condition in statute or rules. Not read: the AOC Director's record-keeping rules, local rules. |
| 3 | **Rule 41**, just cause | **Checked, no issue** | Battery B41a/b (+ synthetic positive), H41 | North Carolina has no just-cause rule. Nothing in `no-alterations`, `early-termination`, `keys`, `holdover-ca` or `holdover-rate-nc` converts end-of-term possession into a for-cause event. Note added on `keys`. |
| 4 | **Rule 41b**, `for-cause-eviction` row | **Fixed** (new row) | §§ 42-14, 42-37.1, 42-42.2, 47A-36, 42-34(b); B41a–f (positives § 42-42.2, § 47A-36, § 42-37.1, § 42-34 passed) | NEW `edu-no-for-cause-eviction-nc`: confirmed absent. Situational limits: retaliation (incl. tenants' organization), victim nondiscrimination, condo-conversion 90 days. Noted, not covered: public housing (§ 157-29) and manufactured-home community closure (§ 42-14.3). No repair rent-escrow; the § 42-34 appeal bond only. |
| 5 | **Rule 42**, required text inside a shared clause | **Already covered in §4** (written-lease and timing table); re-checked, no issue | §§ 42-46(l), 42-50, 42-51, 25-3-506 | None. No statute forces a sentence into `due-at-signing`, `pet-insurance-requirement` or the fee and deposit clauses. |
| 6 | **Rule 43**, cure promises | **Fixed** | §§ 42-3, 42-26(a), 42-33, 42-43(b), 42-59, 42-59.1, 42-63, 42-73, 66-313(e)(2) | NEW `default-by-tenant-nc` (NC untagged from `default-by-tenant-ks-ne`). The carve-out is now its own sentence reaching both limbs and naming criminal activity. Rent limb: summary ejectment always needs a demand for surrender (§ 42-26(a)), but no statute sets a nonpayment cure period where the lease itself provides the forfeiture (§ 42-26(a)(2)). The 10 days after demand come from the forfeiture § 42-3 implies where a lease does not. So the clause gives a 10-day written cure by contract (rule 43). This is a deliberate choice: it keeps the library's cure-for-rent default and matches the period North Carolina implies. The carve-out waives only the cure, not the § 42-26(a) demand or the § 42-43(b) written notice. `early-termination` landlord limb replaced via `early-termination-ks` (defers to default). `application-of-payments` (preserves the § 42-33 tender) and `eviction-fees-nc` make no cure promise. `criminal-activity-nc` is already its own no-cure sentence; pointer updated. |
| 7 | **Rule 46**, lease as the required notice | **Already covered in §4 and §3.2**; re-checked, no issue | B46 (positive § 28A-25-7 passed); §§ 42-50, 28A-25-7 | None. The only statutes letting a lease paragraph serve as the notice are § 42-50 (`security-deposit-holding-nc`, which already reconciles: named in the lease, or given within 30 days after the term begins) and § 28A-25-7 (`emergency-contact-nc`). No shared clause promises a separate notice. |
| 8 | **Rule 47**, penalties for prohibited terms | **Fixed** | §§ 42-46(h)(4), 42-25.8, 75-1.1, 75-16, 75-16.1, 75-50, 75-54, 75-55, 75-56, 42-26(c), 127B-34 | Penalties exist through collection: § 75-55(2) (charge "unless legally entitled") and § 75-56(b) ($500–$4,000 per violation). Whether a landlord is a "debt collector" is case law, not read. UDTPA treble damages also apply. NEW `edu-consumer-protection-act-nc` records it. Start list: `late-fee-limit-nc` fixed (fix 22). `early-termination` untagged (rule 37). `notices` and `common-area-use` carry no NC-prohibited term. `partial-payment-nonwaiver-nc` tracks § 42-26(c), which has an express Chapter 75 safe harbor. |
| 9 | **Rule 48**, separate-document requirements | **Already covered in §2.3** (§ 42-42(b) subsequent contract); notes added | B48 (positive § 42-42 passed), § 42-42(b), § 42-43(a)(1) | `landscaping-irrigation`, `snow-removal` (notes): not a uniform-act split state. § 42-42(b) reaches only § 42-42 duties; these chores in tenant-used areas are not § 42-42 duties. No single-family note or separate agreement is needed. |
| 10 | **Rule 49**, collection-cost bans | **Fixed** | § 42-46(h)(3), (3a), (4), (i), (j) | `default-by-tenant-ks-ne` untagged for NC. Its "reasonable costs and expenses" provides for eviction litigation costs beyond § 42-46(i), which (h)(3a) makes contrary to public policy, and "available under applicable law" hides the conflict. NEW `default-by-tenant-nc` limits filing charges to § 42-46. `eviction-fees-nc` checked: matches (e)–(k), no issue. |
| 11 | **Rule 50**, "the lease controls" wording | **Checked**; every choice made on purpose | B50 (positive § 42-12 passed): §§ 42-10, 42-12, 42-14.4(b), 42-26(b)-(c), 42-42(a)(5),(7), 42-42.1, 42-43(a)(7), 42-46(a),(e)-(i), 42-50, 42-53, 28A-25-7, 143-151.42 | Each choice already has a clause, except two declined options now recorded in education: battery allocation (`edu-landlord-repair-duties-nc`) and § 42-10 accidental damage (NEW `edu-tenant-caused-damage-nc`). § 42-14.4(b) is answered in `edu-abandoned-property-nc`. |
| 12 | **Rule 51**, plain-language and consumer acts | **Fixed** (two new rows) | §§ 75-1.1, 75-16, 75-16.1, 75-50 to 75-56; B51a–c, H51; rule 40 typography battery already run (log §4) | NEW `edu-consumer-protection-act-nc`: no enumerated lease list and no blank-space or copy-at-signing item; the general standard's reach is case law, unread. NEW `edu-no-plain-language-law-nc`: confirmed absent; unconscionability statutes cover goods and associations only. |
| 13 | **Rule 53**, figures and triggers | **Fixed** | §§ 25-3-506, 42-46, 42-28, 42-26, 42-3, 168-4.2 (log); start list read | `returned-payments` untagged (ceiling only; § 25-3-506 covers checks "in payment for goods or services", which may not include rent). NEW `returned-payments-nc` states the $35 figure. `edu-dishonored-payment-remedies-nc` qualifier restored. `holdover-rate-nc` trigger: fix 19. Checked, no issue: `rent-payment` (next-business-day due date only helps the § 42-46(a) count); `surrender-end-of-term` (no figure; the qualifier keeps it inside §§ 42-25.7 to 42-25.9 and 42-36.2); `holdover-ca` (§ 42-28 has no figure); `eviction-fees-nc` (every figure and trigger matches § 42-46(e)–(j), using the enacted (i)(3)–(4)); `assistance-animal-accommodation-nc` (no figure; trigger matches § 168-4.2). |
| 14 | **Rule 54**, optional clauses | **Checked**; two declined options now in education | Same sections as rule 50, plus §§ 42-37.1(c)(2),(5),(6) and 42-45(b) | Offered already: late fee, eviction fees, partial-payment non-waiver, criminal activity, casualty termination, holdover rate, periodic notice, emergency contact, utility billing, renter's insurance, pet fee, bond-or-trust choice. NEW offered: `tenant-caused-damage-nc` (rule 54t). Declined, with education: § 42-10 accidental-damage liability (sits uneasily with the non-waivable § 42-42 duty and the § 42-43(a)(6) exceptions); start-of-tenancy batteries to the tenant (low value; the landlord checks every alarm anyway). No clause needed: retaliation safe harbors § 42-37.1(c)(2) and (5) need no lease wording; § 42-45(b) liquidated damages are statutory. |
| 15 | **Rule 54t**, tenant-caused damage | **Fixed** (clause and education row) | §§ 42-12, 42-41, 42-42(a)(2),(a)(8),(b), 42-43(a)(4),(6), 42-34(b), 42-37.1(c)(3), 42-10, 42-51(a) | NEW `tenant-caused-damage-nc` (opt-in; text as `tenant-caused-damage-ga`, "make repairs as North Carolina law requires"). Part (1) is narrowed to "as long as Landlord makes the repairs within a reasonable time", so the no-abatement promise never reaches the landlord's own delay (§§ 42-41, 42-42(b)); my drafting call under rule 76. § 42-12 has its own negligence exception and is displaceable. § 42-42(a)(8): the landlord repairs even when the tenant is at fault, then recovers the cost. Unread risk, now narrowed: rent abatement under § 42-41 for a tenant-caused condition. NEW `edu-tenant-caused-damage-nc`. Casualty row checked first: `casualty-termination-nc` already excludes tenant, household, guest and invitee damage. |
| 16 | **Rule 35c**, constitution screen | **Checked, no issue** | NC Constitution loaded into the corpus (K0–K10): art. I §§ 14, 19, 20, 30, 38; art. X §§ 1–2; no cannabis or tobacco text, no privacy clause | None. No provision reaches a private residential lease or protects conduct a shared clause restricts (`smoking-policy`, `common-area-use`, firearms). |
| 17 | **Rule 27**, the seven topics | **Fixed** (7 new rows) | B27alg–cam, H27a–g, with positives | NEW: `edu-no-algorithmic-rent-rule-nc` (confirmed absent); `edu-fees-as-rent-nc` (confirmed absent, with §§ 42-26(b) and 42-46(b),(h)(2),(j) limits); `edu-no-landlord-self-cure-nc` (confirmed absent; § 42-42(a)(8) and § 42-44(a2) narrower rules); `edu-no-lease-completeness-rule-nc` (confirmed absent); `edu-no-quiet-possession-statute-nc` (confirmed absent as a covenant; § 42-59.1 policy statement; case law not located); `edu-statutory-forms-nc` (present: § 7A-232 Form 11, § 42-34(d), § 6-21.3); `edu-no-tenant-camera-rule-nc` (confirmed absent). |
| 18 | **Rule 79**, re-read before trusting a summary | **Checked**; one qualifier fixed | Citations file: 111 rows (75 CITED, 19 GENERIC, 17 CONFIRMED_ABSENT); 0 rest on secondary sources (keyword screen 0) | **41 of 111 rows record no basis** in their own notes (count from `lease-clauses.csv`). Their basis sits only in log §1.3. 14 cite only sections re-read section-open today, and their qualifiers were checked against the sentences they attach to (none misplaced): `rent-payment`, `due-at-signing`, `application-of-payments`, `existing-condition`, `no-disturbance`, `tenant-maintenance`, `services-utilities-provided`, `appliances-included`, `landlord-maintenance`, `early-termination`, `notices`, `keys`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`. Listed, not edited: 13 GENERIC rows with no citation (`residential-use-only`, `utility-payment-evidence`, `joint-liability`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `assigned-parking-space`, `guest-policy`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `hoa-compliance`), and 14 that cite at least one section not re-read this pass: `permitted-occupants` (41A-4, 41A-6), `utilities-responsibility` (42-42.1, 62-110), `utility-service-continuity` (42-42.1), `no-alterations` (41A-4), `utilities-paid-by-landlord` (143-151.42), `surrender-end-of-term` (28A-25-2, 28A-25-7), `electronic-signatures` (66-311 to 66-330), `pet-insurance-requirement` (168-4.4), `parking-vehicle-rules` (20-219.2), `guest-policy-day-limit` (14-159.50), `default-by-tenant-ks-ne` (42-76), `tenant-forward-proceedings-ca` (45-21.17), `rental-application-accuracy` (42-14.5), `edu-dv-lease-termination-nc` (15C-4, 50B-1, 50B-9). After this pass, 36 still record no basis. Fixed: `edu-dishonored-payment-remedies-nc` had dropped § 25-3-506's "in payment for goods or services". |
| 19 | **Fix 19**, `holdover-rate-nc` trigger | **Fixed** | §§ 42-28, 42-26(a), 42-3, 42-14, 42-4 | (a) Lawful: North Carolina measures occupation damages "since the cessation of the estate" (§ 42-28), not from a notice date. (b) Extended to an earlier end of the Lease: forfeiture for a non-rent breach (§ 42-26(a)(2)) or a periodic tenancy ended by notice (§ 42-14). The exception is a termination for nonpayment of Rent. There a landlord-set daily charge would work as a repeating charge for late rent, beyond the single capped late fee § 42-46(a)-(b) allows (void under (h)(4); collection exposed under § 75-55(2)); and § 42-33 lets the tenant end the case by tender. Actual occupation damages under § 42-28 remain for that case. Text is `holdover-rate-ga`'s as extended at GA's retro, plus "(other than a termination for nonpayment of Rent)". Proposed for GA's attention below. |
| 20 | **Fix 20**, dangling pointers | **Fixed** (notes only) | — | `due-at-signing` → `edu-security-deposit-rules-nc`; `keys` → `edu-dv-lease-termination-nc`. Rule 78 search of every NC row also fixed `security-deposit-use-nc` (cap and return pointers) and `criminal-activity-nc` (→ `default-by-tenant-nc`), plus `edu-dishonored-payment-remedies-nc` (→ `returned-payments-nc`). Provenance notes left as history. |
| 21 | **Fix 21**, NE's carve-out sentence for `default-by-tenant-ks-ne` | **Lawful and accurate in NC** | §§ 42-3, 42-26(a)(2), 42-33, 42-59.1, 42-63 | Lawful: it waives nothing. The § 42-26(a) demand for surrender, the § 42-3 ten days (where the lease relies on the implied forfeiture) and the § 42-33 tender before judgment survive, because North Carolina law does not "permit Landlord to proceed without" them. Accurate: in North Carolina it reaches Article 7 criminal activity (no cure; "deemed to apply to all residential rental agreements"). For rent it has no effect unless a lease stipulates forfeiture without cure, which this clause does not. NC no longer uses the row (rule 49), but has no objection to the merge. NC's own override uses an NC-specific version naming criminal activity. |
| 22 | **Fix 22**, scrub-trimmed `late-fee-limit-nc` | **Fixed** | § 42-46(a), (b), (d), (h)(4), (h)(5); required-content search (B46, B50) | Restored two conditions a number check can't catch: one fee per late payment (§ 42-46(b)), and the subsidized-tenant cap on the tenant's share (§ 42-46(h)(5)). Not restored, with reasons in notes: the $15/5% cap (builder M.13); the weekly cap (Monthly Rent only); no-deduction (secured by `application-of-payments`); water and sewer (rent-only clause; `utility-billing-nc`). No lease-content text the scrub removed is statutorily required. |
| 23 | **Fix 23**, scrub switched off `security-deposit-return-nc` | **Checked**: it only restated a right; no clause restored | §§ 42-50, 42-52, 42-54, 42-55 | None. No statute requires the lease or a move-in writing to state the return duties. § 42-52 binds whatever the lease says. The one written notice in Article 6 (§ 42-50 location, 30 days; willful failure voids retention under § 42-55) is still carried by the active `security-deposit-holding-nc`. |
| 24 | **Fix 24**, AZ's "during any 12-month period" for `returned-payments` | **Lawful in NC** (no statute speaks to it) | § 25-3-506 | Used in NEW `returned-payments-nc`. NC is no longer tagged on the shared row (rule 53). |
| 25 | **Fix 25**, WY's "or such shorter notice and cure period as applicable law permits" for `early-termination` | **Lawful in NC; changes nothing here** | §§ 42-3, 42-14, 42-26(a)(2), 42-59.1, 42-63 | North Carolina sets no notice or cure period for non-rent breaches; the lease's stipulations govern forfeiture (§ 42-26(a)(2)), so the phrase has no shorter statutory referent. The current 30-day/10-day promise gave up no statutory North Carolina route: Article 7 (no cure) and the § 42-3 nonpayment route sit outside the lease and were preserved by "Nothing in this Section limits any right ... under applicable law". NC moved to `early-termination-ks` for rule 37 reasons anyway. |

**Rule 22 (applied with the edits):** the 2026-09-28 citation-format pass left a doubled prefix (a section sign followed by a second "N.C. Gen. Stat."). It was corrected to "§§" in 17 rows (`utilities-responsibility`, `surrender-end-of-term`, `electronic-signatures`, `lead-based-paint`, `default-by-tenant-ks-ne`, `parking-ks-oh-ca`, `criminal-activity-nc` and 10 NC education rows). Two cites the 2026-09-29 scrub wrote without the prefix or section sign, in `edu-dv-lease-termination-nc`, now follow the kickoff format. The independent check then found about 60 bare short-form cites ("§ 42-42(b)") in NC-owned text of delta rows, plus two single-§ lists. All were expanded by script to the kickoff format ("N.C. Gen. Stat. §", or "§§" for lists and ranges), as rule 22 requires. Each expansion was reviewed by hand: every inferred title is a North Carolina chapter (42, 42A, 44A, 47, 47A, 47C, 6, 7A, 25A, 41, 75, 122A, 127B, 157), and no other state's cite was touched. A final scan of every active NC row found no doubled, bare or missing prefix.

**Integrity checks on the delta (script):**
- File format: 17 fields on every row, header identical to the master, CRLF only.
- IDs and references: no duplicate ids, no dangling `supersedes`, no NC display collision, and no two active NC lease clauses share a `topic_key`.
- Shared rows: only `states`, NC note segments and `last_checked` differ, and every other state's segments are byte-identical.
- Statuses and dates: every delta row is VERIFIED with `last_checked` 2026-10-02, and every active NC lease clause has a `lease_clause_basis`.
- Pointers: every `-nc` id named in NC-owned text is active, or appears as history ("switched off", "moved from", "split from").
- Citations file: rows for the 14 new ids and the 3 untaggings are left to the sync.

**Independent check (a separate agent that did not write the delta):** it checked every delta row against the saved sections, the shared-row diff, the counts and the citation format. It confirmed the counts, the shared-row discipline and the statutory figures. It raised 13 findings, all resolved before delivery:
- `holdover-rate-nc` nonpayment trigger: excluded.
- `default-by-tenant-nc` rent-limb rationale: corrected. The 10 days are a contractual cure matching § 42-3, not a statutory pre-suit rule.
- `default-by-tenant-nc` carve-out: narrowed from "notice or an opportunity to cure" to the cure only, keeping the § 42-26(a) demand.
- `tenant-caused-damage-nc` part (1): narrowed, rather than put to Taylor, because narrowing an optional clause is a rule 76 drafting call.
- Qualifiers restored:
  - `edu-statutory-forms-nc`: § 7A-232 states two rules, not an exception.
  - `edu-consumer-protection-act-nc`: § 75-16.1 "unwarranted refusal".
  - `returned-payments-nc`: § 25-3-506 "goods or services".
  - `edu-landlord-repair-duties-nc`: the 10-year lithium exception.
  - `edu-no-for-cause-eviction-nc`: § 42-37.1(c)(6) "complete displacement".
- Unsupported phrasing removed:
  - § 42-50 does not say "in writing".
  - The § 157-29 and § 42-14.3 claims are now labelled search hits.
  - `landscaping-irrigation` does not exclude common areas.
- Citation format: fixed as above.
- § 42-63 was read but not saved: now saved and hash-matched.

**For Taylor (no decision needed):**
- `default-by-tenant-nc` keeps decision 3 of 2026-09-28: no fee sentence, plus `eviction-fees-nc`. It only removes the "costs and expenses" phrase and moves the carve-out into its own sentence.
- Builder finding: the deposit cap is a number check (M.13), but the prepaid last-month rent rule (decision 1) is not. A "last month's Monthly Rent" line in `due-at-signing` should count toward the NC cap in the builder.

### Proposed SOP changes
1. **Rule 47:** add "check the state's debt-collection statute". Where it reaches 'any person' collecting a consumer debt (NC § 75-50(3)), collecting under a void fee term carries per-violation penalties even though the term itself is merely void. This turns a void-only state into a penalty state.
2. **Rule 19:** wrap every alternation in a group before adding a proximity limb. NC's B27form and B48 bound the proximity to the first and last alternatives only. The result was a broader screen, not a false empty, but the reverse error would hide a hit.
3. **Rule 39:** where court rules are published only as a long PDF the session cannot save to disk, allow recording the full-text hash with the rule sections relied on quoted in the log, and name it a weaker method. This makes rule 14's existing weaker-method clause explicit for court rules.
4. **Rule 53 (holdover triggers), for GA's and other states' attention:** `holdover-rate-ga`'s "earlier termination under this Lease or applicable law" also reaches a termination for nonpayment of rent. In a state that caps late fees, as North Carolina does, a landlord-set daily charge after a nonpayment termination can work as a second, repeating late charge. Each state that adopted the extended trigger should check it against its late-fee rule. The NC version excludes nonpayment terminations.

## Retro sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base 4892b3e` (the attached CSV is byte-identical to it): 33 rows updated, 14 new, no refusals; nine shared rows had Iowa notes added since the base and were merged onto the current rows. NC active 111 → 123 (67 lease clauses), no same-topic pairs; every other state's set unchanged. NC untagged `returned-payments`, `early-termination` and `default-by-tenant-ks-ne` in favour of `returned-payments-nc`, `early-termination-ks` and `default-by-tenant-nc`.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 6 of 6, against ncleg.gov (read by Claude Code at sync):** § 42-46(a), (b), (h)(4)-(5) match `late-fee-limit-nc` (5 calendar days, one fee per late payment, the subsidized tenant's share); § 25-3-506 ($35, "a check in payment for goods or services") matches `returned-payments-nc`; § 42-3 (10 days after demand) matches `default-by-tenant-nc`'s rent limb; § 42-28 ("since the cessation of the estate") supports `holdover-rate-nc`; § 42-26(a) (demand for surrender; forfeiture by the lease's stipulations) matches the carve-out's limits.
- **Citations file:** the three untagged rows removed, 14 rows added (7 confirmed-absence rows), changed rows dated; one truncated cite (§ 25-3-506) fixed by hand.
- **Rule 62 answers recorded:** NC finds AZ's `returned-payments` wording, WY's `early-termination` wording and NE's `default-by-tenant-ks-ne` sentence lawful, but no longer uses any of the three rows, so it drops out of their vetting lists.
- **Holdover trigger (proposal 4):** only `holdover-rate-ga` uses the extended trigger; Georgia has no late-fee cap, so the check went to GA's next circle-back as a targeted item.
- **Builder:** a "last month's Monthly Rent" line in `due-at-signing` should count toward North Carolina's deposit cap (decision 1); added to backlog M.13.
- **Rule 79:** 36 NC rows still record no basis (listed above), for NC's next circle-back.
- **SOP 1.23:** all four proposals adopted (rules 19, 39, 47, 53). NC's conformance column is complete.

## Circle-back checks (SOP 1.45), 2026-10-03

**Scope:** a scalpel, not a re-audit (rule 1). The PROMPT lists 0 [Retro] rules and 1 targeted fix; nothing else was reopened. That includes the 36 NC rows that still record no basis, which the 1.21 sync note queued for "NC's next circle-back": this PROMPT does not list rule 79, so they are untouched. **Settings:** Opus, high effort. Research mode was not used; no rule 9 trigger arose.

**Inputs:** the attached files were the only source of truth.
- `lease-clauses.csv`: 2,876 rows, 17 columns, matching the PROMPT.
- The attached NC log already contains the 1.21 retro section and Claude Code's 2026-10-02 sync note, so this chat's 1.21 work is superseded by the attached files wherever they differ.
- Old outputs deleted first: `lease-clause-decision-log-NC-retro.md` and `lease-clauses-NC-retro-delta.csv` (the 1.21 deliverables, already merged).

**Sources:**
- *Sections:* 14 sections read section-open on ncleg.gov in the built-in browser on 2026-10-03, each fetched twice with identical text.
  - 10 were already saved on 2026-10-02 and today's SHA-256 matches the saved file exactly, so they are unchanged: §§ 42-14, 42-25.6, 42-26, 42-28, 42-34, 42-37.1, 42-42.2, 42-45, 42-45.1, 47A-36.
  - 4 were new and are saved with a SHA-256 match to the browser text: §§ 42-14.3, 42-37.2, 42-37.3, 127B-28.
- *Currency:* S.L. 2026-61 is still the last 2026 session law (S.L. 2026-62 to -66 return 404).

**Delta:** none. No row changed, so `lease-clauses-NC-retro-delta.csv` is not delivered (PROMPT, Deliver 1).

| # | Rule / fix | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| — | Retro rules | None listed in this PROMPT | — | — |
| 1 | **Fix 1**, rule 62 vetting of CA's proposed `surrender-end-of-term` qualifier ("unless applicable law entitles Tenant to remain") | **Vouched, no change needed.** The qualified wording is lawful and accurate in NC. The current wording states a duty NC law does not back in a few narrow cases. | §§ 42-26(a), 42-28, 42-14, 42-25.6, 42-34(b), 42-37.1(b)-(c), 42-37.2(a), 42-37.3, 42-42.2, 47A-36(a), 42-14.3(a), 127B-28(a); NC's own note segment on the row | None (shared text not edited; NC stays tagged) |

**Fix 1, the reasoning.**

*Does the current wording state a duty NC law doesn't back?* Mostly no, with a few narrow exceptions. NC has no just-cause rule (`edu-no-for-cause-eviction-nc`). A tenant who holds over after the term "has expired", or after the estate has ceased under the lease, is removable by summary ejectment after a demand for surrender (§ 42-26(a)(1)-(2)). The landlord recovers damages for occupation "since the cessation of the estate" (§ 42-28). So the general duty to surrender at the end of the Lease is backed. But NC law lets a tenant stay past the Lease's end in these cases, and the unqualified "immediately" overstates the duty there:
- **Condominium conversion:** "No tenant or subtenant may be required to vacate upon less than 90 days' notice", except for default grounds, and failure to give the notice "is a defense to an action for possession" (§ 47A-36(a)).
- **Retaliation:** if the court finds the ejectment retaliatory it "shall deny the request for ejectment" (§ 42-37.2(a)), and the tenant cannot waive this (§ 42-37.3). This can reach a periodic tenancy ended by notice. It does not reach a fixed term with no option to renew, because the landlord prevails on that holdover (§ 42-37.1(c)(2)).
- **Victim status:** a landlord "shall not terminate a tenancy, fail to renew a tenancy" based substantially on a tenant's status as a victim of domestic violence, sexual assault or stalking (§ 42-42.2). The statute names no remedy, so whether a tenant can rely on it to stay is a case-law question, not read.
- **Appeal stay:** an appeal stays execution of a summary ejectment judgment while the tenant pays rent into the clerk (§ 42-34(b)).
- **Federal SCRA:** its protections, which § 127B-28(a) incorporates, may stay proceedings. The federal text was not read.
- **Manufactured-home community conversion:** 180 days' notice "regardless of the term of the tenancy" (§ 42-14.3(a)). This is a deprioritized layer.

None of these makes the current clause void or dangerous in NC. It is a duty sentence, not a self-help right, and a residential tenant can be removed only by court process anyway (§ 42-25.6). The exposure is wording, as CA found.

*Rule 62, question 1: can the qualified text be read to drop a cure or notice NC requires?* No. It narrows only the tenant's promise. It removes no demand, notice or court step: the § 42-26(a) demand for surrender and the § 42-36.2 writ procedure are unaffected.

*Rule 62, question 2: does it change what the clause promises in NC?* Only by matching it to the law in the cases above. NC's note segment on this row has no "gives up" or "kept on purpose" language, and no NC note relies on an unqualified surrender duty. `holdover-ca` (month-to-month continuation "terminable only as provided by law") and `holdover-rate-nc` (charge "after this Lease ends") read consistently with it. The qualifier also does not let a tenant stay merely because a lease clause allows it, because it is limited to "applicable law". NC needs no override and supports the edit as uniform.

### Vouches given
*Claude Code: per rule 62, please file this line under NC log §9 (Propagation notes), subheading "Vouches given".*
- `surrender-end-of-term`, CA proposal 2026-10-03 (add "unless applicable law entitles Tenant to remain" to the surrender sentence): **vouched, no change needed for NC.** It is lawful and accurate here. It drops no NC notice or cure, and it reopens no route NC gave up on purpose. NC law lets a tenant remain past the Lease's end in narrow cases: § 47A-36(a) conversion notice, §§ 42-37.2(a) and 42-37.3 retaliation, the § 42-34(b) appeal stay, and possibly § 42-42.2. Read section-open 2026-10-03.

### Proposed SOP changes
None.

## Circle-back sync (Claude Code, 2026-10-03)

- **No delta:** the pass changed no rows, as it reported. NC active 123, unchanged.
- **Rule 62:** NC vouched for CA's `surrender-end-of-term` qualifier; recorded in the backlog tally and, as the pass asked, under §9 "Vouches given".
- **Guards:** all pass. **Statute spot-check, 2 of 2, on ncleg.gov:** G.S. 47A-36(a) (conversion notice no later than 90 days before the tenant must vacate) and G.S. 42-37.2(a) (a court that finds the ejectment retaliatory "shall deny the request for ejectment").
- **Still open for a later NC pass:** the 36 NC rows with no recorded basis (rule 79), outside this prompt's scope.
- **SOP:** no proposals.
