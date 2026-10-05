# New York — lease-clause decision log (state #32)

**Pass date:** 2026-10-03. **SOP:** `lease-clause-sop.md` v1.29 (2026-10-03), followed start to finish; where the kickoff and the SOP differ, the SOP governs (none noticed). **Settings:** Opus, high effort. Research mode was not used: none of rule 9's triggers needed it, because every absence below rests on a whole-code battery over a corpus loaded in the built-in browser (§1.3), and Claude cannot switch the mode itself. **Inputs:** the six files attached to the kickoff, read from the upload folder; `lease-clauses.csv` is the only source of truth for rows (rule 8). **Outputs:** `lease-clauses-NY-delta.csv` and this log. This is New York's only Desktop chat (rule 8); no earlier New York output files existed to delete.

**Scope** (kickoff recommendation, adopted; §6.2): market-rate residential tenancies statewide under New York State law. Rent-stabilized and rent-controlled units are out of scope and get one education row (`edu-scope-ny`). State statutes limited to New York City or large cities (Multiple Dwelling Law, N.Y. Real Prop. Law §§ 232, 232-a, 235-d) are in scope with the place limit stated. New York City's Administrative Code and Health Code and all other local law are flagged, not resolved (rule 3; §10.4).


## 0. Completion status

| Item | Status |
|---|---|
| Step A — file and count check (rule 23) | Done: 2,842 rows; 2,720 active (665 clauses, 2,055 education); all 31 per-state active counts match the kickoff (§1.1) |
| Source registry (rule 24) | Done, §1.1 |
| Currency (rule 16) | Done, §1.2 |
| Corpus and batteries (rule 19) | Done, §1.3 and §17 (86 batteries over the whole consolidated laws and Constitution) |
| Dormant rows (rule 25) | Done, §5 |
| Tag-first screen (rules 26-28) | Done, §2 (39 rows tagged) |
| Gap-discovery source 1 — statute walk | Done, §14 |
| Gap-discovery source 2 — real-lease comparison | Done, §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done, §16 |
| Gap-discovery source 4 — outside-title search | Done, §17 |
| Topic canvass (rules 27, 36) | Done, §18 |
| Step D screens (rules 40-53) | Done, §19 |
| Optional clauses (rule 54) | Done, §6.1 |
| New rows | 29 lease clauses and 108 education rows (§3) |
| Delta CSV (rule 70) | `lease-clauses-NY-delta.csv`, 178 rows, integrity checks §8 |
| Independent check (rule 80) | Done, §13 |


## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)

| Source | Where | How read | Proof |
|---|---|---|---|
| Consolidated Laws of New York, court acts, unconsolidated laws, Constitution | nysenate.gov, "The Laws of New York" (Open Legislation pages, `/legislation/laws/{LAW}/{section}`) | Crawled whole in the built-in browser into IndexedDB (§1.3) | Each relied-on section exported to disk as gzip+base64 NDJSON batches, SHA-256 matched (`sources/corpus/batch-*.ndjson`, `import-log.tsv`) |
| Session laws 2019-2026 | nysenate.gov bill pages (enrolled text, chapter number and signing date in the actions list); legislation.nysenate.gov PDFs for L. 2019 ch. 36 and L. 2024 ch. 56 (pdf.js in the browser) | Read as enrolled; effective-date clause of each read | SHA-256 matched (`sources/acts/`, `sources/ny-session-law-*.txt`) |
| Signed-bill screen, 2023-24 and 2025-26 sessions | nysenate.gov signed-bill listings, each bill page's "Laws Affected" line | All 2,479 signed bills listed and screened (§1.2) | `sources/ny-signed-bills-2023-2026.json`, SHA-256 matched |
| Court rules | nycourts.gov: 22 NYCRR Parts 208, 210, 212, 214 (Uniform Civil Rules of the New York City Civil, City, District and Justice Courts) and 216 (sealing) | Read whole | SHA-256 matched (`sources/court/`) |
| Real lease | New York State Consumer Protection Board, Model Residential Lease (with DHCR), hosted by Cornell Cooperative Extension of Tompkins County | Text extracted | SHA-256 7e364fb9…, `sources/ny-real-lease-nys-cpb-model-residential-lease.txt` (§15) |

Citation forms follow the kickoff (statutes by consolidated law; session laws as `L. 2025, ch. 431`, the kickoff's form, with the chapter number each act's page prints; court rules as `22 NYCRR 208.42`). The site prints no section history lines and no global currency statement; each section page prints "Viewing most recent revision (from DATE)" and a list of earlier revision dates, which the crawler saved (`rv`, `rvs`). Channels tried and why: the Open Legislation API needs a key (401) and was not used (the session's safety rules bar entering API keys); the shell cannot reach nysenate.gov or nycourts.gov (egress blocked), so the built-in browser was the only channel (rule 19). Kickoff counts (rule 23): the CSV at the upload path has 2,842 rows, 2,720 active (665 clauses, 2,055 education), and every per-state active count in the kickoff matched (AL 126 … WY 122).

### 1.2 Currency (rule 16)

nysenate.gov has no currency statement and no history lines, so currency rests on (a) each section's "most recent revision" date, (b) a screen of every bill signed in the 2023-24 and 2025-26 sessions (2,479 bills, including 2026 chapters through the latest listed) by their "Laws Affected" lines for the Real Property Law, Real Property Actions and Proceedings Law, General Obligations Law, Multiple Dwelling and Multiple Residence Laws, Executive Law article 15, General Business Law, Public Health Law, Penal Law, Cannabis Law, Civil Rights Law, State Technology Law and Military Law, and (c) reading every act found that touches a section the rows cite. Extraordinary-session bills are numbered within the same session years, so the listing covers them (Claude's understanding of the site; not separately confirmed). New York has no annual general revisory act; its technical corrections come as chapter amendments ("as proposed in …"), each of which was screened in the same listing. Every cited section's revision date was compared with the acts below; where a section's revision date has no matching act (N.Y. Gen. Bus. Law §§ 352-e, 352-eeee, 2025-11-07), it is an open item (§7).

The two acts the kickoff named were read as enrolled: L. 2019, ch. 36 (Housing Stability and Tenant Protection Act; 74 pages, text hash f0eae330…) and L. 2024, ch. 56 (2024-25 budget, parts HH (Good Cause Eviction Law) and II (squatters); signed April 20, 2024 per the bill page; part HH § 7: article 6-A effective immediately, N.Y. Real Prop. Law §§ 226-c, 231-c and the N.Y. Real Prop. Acts. Law changes on the 120th day (August 18, 2024), whole part repealed June 15, 2034; part II effective immediately).


| Act | Bill | Signed | Effective (from the act's own clause) | Sections relied on |
|---|---|---|---|---|
| L. 2025, ch. 431 | A. 56-B | Oct 16, 2025 | immediately; applies to proceedings commenced on or after | N.Y. Real Prop. Law § 238-a(2-a); N.Y. Gen. Oblig. Law § 5-328 |
| L. 2025, ch. 437 | S. 7882 | Oct 16, 2025 | 60th day (Dec 15, 2025) | N.Y. Gen. Bus. Law § 340-b |
| L. 2025, ch. 436 | S. 952-B | Oct 16, 2025 | 30th day (Nov 15, 2025); applies to leases and renewals entered into on or after | N.Y. Gen. Oblig. Law § 7-107 (rent-stabilized; out of scope) |
| L. 2025, ch. 416 | A. 7653 | Sep 26, 2025 | 90th day | N.Y. Real Prop. Acts. Law § 741 (Schenectady) |
| L. 2025, ch. 99 | S. 820 | Feb 28, 2025 | with 2024 ch. 672 | N.Y. Real Prop. Law art. 12-D |
| L. 2025, ch. 77 | S. 751 | Feb 14, 2025 | with 2024 ch. 488 | N.Y. Real Prop. Law § 235-j |
| L. 2025, ch. 21 | A. 519 | Feb 14, 2025 | Dec 31, 2025 for the common-space alarm rule | N.Y. Exec. Law § 378(5-b) |
| L. 2025, ch. 649 | A. 4040-A | Dec 19, 2025 | immediately; housing claims arising on or after | N.Y. Exec. Law § 296(5-a) |
| L. 2025, ch. 706 | S. 8338 | Dec 19, 2025 | immediately (employment) | N.Y. Exec. Law § 296 (not relied on) |
| L. 2025, ch. 600 | S. 3398 | Dec 5, 2025 | immediately | N.Y. Exec. Law § 296(7) |
| L. 2025, ch. 435 | A. 6869 | Oct 16, 2025 | immediately | N.Y. Exec. Law §§ 292, 296 (appraisers; not relied on) |
| L. 2025, ch. 708 | S. 8416 | Dec 19, 2025 | 60th day (Feb 17, 2026) | N.Y. Gen. Bus. Law §§ 348, 349 |
| L. 2026, ch. 94 | S. 8811 | Mar 27, 2026 | with 2025 ch. 708 | N.Y. Gen. Bus. Law § 349 |
| L. 2026, ch. 137 | A. 10338 | Jun 26, 2026 | immediately | N.Y. Real Prop. Acts. Law § 749-a (extended to June 30, 2028) |
| L. 2024, ch. 672 | S. 885-C | Dec 21, 2024 | 275th day (as rewritten by L. 2025, ch. 99, § 27; tax provisions apply to rent collected from March 1, 2025) | N.Y. Real Prop. Law art. 12-D (S. 885-C print saved on re-fetch; its section 11 set the 120th day) |
| L. 2024, ch. 488 | A. 9329 | Nov 22, 2024 | 30th day | N.Y. Real Prop. Law § 235-j |
| L. 2024, ch. 465 | A. 5730-B | Nov 22, 2024 | immediately (changed to December 31, 2025 by L. 2025, ch. 21) | N.Y. Exec. Law § 378 |
| L. 2024, ch. 501 | S. 940 | Nov 22, 2024 | 120th day | N.Y. Exec. Law § 296(15) |
| L. 2024, ch. 129 | A. 9166-B | Jun 28, 2024 | immediately | N.Y. Real Prop. Acts. Law § 749-a |
| L. 2024, ch. 64 | S. 8014 | Feb 7, 2024 | with 2023 ch. 544 | N.Y. Real Prop. Acts. Law § 741 (Syracuse) |
| L. 2024, ch. 13 | S. 8036 | Jan 26, 2024 | with 2023 ch. 637 | N.Y. Gen. Bus. Law § 390-e |
| L. 2024, ch. 1 | A. 8494 | Jan 26, 2024 | with 2023 ch. 635 | N.Y. Mult. Dwell. Law § 15; N.Y. Mult. Resid. Law § 16 |
| L. 2023, ch. 637 | A. 2258-B | Nov 17, 2023 | immediately | N.Y. Gen. Bus. Law § 390-e |
| L. 2023, ch. 635 | A. 2134-A | Nov 17, 2023 | 90th day | N.Y. Mult. Dwell. Law § 15; N.Y. Mult. Resid. Law § 16 |
| L. 2023, ch. 632 | A. 458 | Nov 17, 2023 | 90th day | N.Y. Real Prop. Law § 236-a |
| L. 2023, ch. 631 | A. 1029-C | Nov 16, 2023 | one year (Nov 16, 2024) | N.Y. Exec. Law § 296(16); N.Y. Crim. Proc. Law § 160.57 |
| L. 2023, ch. 656 | S. 3255 | Nov 17, 2023 | 90th day | N.Y. Exec. Law § 297 (limitations; not relied on) |
| L. 2023, ch. 630 | S. 6577 | Nov 14, 2023 | 30th day | N.Y. Real Prop. Acts. Law § 756-a (deed theft; noted) |
| L. 2023, ch. 579, ch. 544 | A. 7265, A. 3110 | Oct 25, 2023 | 90th day | N.Y. Real Prop. Acts. Law § 741 (Newburgh, Syracuse) |
| L. 2023, ch. 36 | A. 983 | Mar 3, 2023 | with the 2022 Tenant Dignity and Safe Housing Act | N.Y. Real Prop. Acts. Law art. 7-D |
| L. 2023, ch. 22 | A. 631 | Mar 3, 2023 | with the 2022 flood-disclosure act | N.Y. Real Prop. Law § 231-b |
| L. 2023, ch. 42 | A. 998 | Mar 3, 2023 | with the 2022 act | utility contract release for DV victims (not relied on) |

Acts earlier than the 2023 session (the 2022 acts that created N.Y. Real Prop. Law § 231-b and N.Y. Real Prop. Acts. Law art. 7-D) were not read; the rows rely on the current compiled text, whose revision dates postdate them.


### 1.3 Corpus and method (rule 19)

**Load.** The crawler started at nysenate.gov's index of laws (`/legislation/laws/CONSOLIDATED`, which lists the consolidated laws, the court acts, the unconsolidated laws and the Constitution: 135 roots) and followed every child link of every page, storing each page's heading, text, child links and revision dates in IndexedDB keyed by URL. Completeness is proved two ways (manifest in §1.3.1): every child link of every stored page was itself fetched (no dangling link), and no page ended in an error after five retries. Deviation from rule 19's "sequential" guidance: the site was unthrottled (no 403 or 429 in the whole run; a handful of transient 504s, each retried successfully), so the crawl ran three concurrent workers per tab, in up to three tabs at once; recorded here as a deliberate deviation.

**Engine.** Batteries ran in the browser over the whole IndexedDB corpus (`bat_engine.js`, same semantics as `engine.py`): every section page is one index entry (two-version and duplicate-numbered sections, such as `GBS 390-E*2`, are separate entries); text is normalized (curly quotes, dashes, non-breaking spaces, whitespace); the section's own catchline is excluded from the searchable body and reported as a heading-only match whenever the section is not counted; the first match per section counts; an optional section-wide context filter and an optional scope on the law code apply; the nonsense control `zqxjvwpl` runs in every battery; real-section and synthetic known positives run in the same step and a battery whose positive fails is recorded as failed. **Two-channel check:** four batteries run in both engines (the browser over IndexedDB, Python over the saved batches for the laws on disk) returned identical hit lists and heading-only lists (late fee 3, casualty 7, guest 19, illegal use 9). The full corpus could not be exported to disk through the browser bridge (about 262,000 characters per call against a corpus of well over 100 MB), so: the batteries ran in the browser and their results (pattern, counts, every hit key, heading-only keys, positives, the first 60 snippets) were exported and saved to `batteries/ny-batteries-final.jsonl`; every section a row relies on was exported and hash-matched (§1.1). This is a weaker method than a fully saved corpus (rule 14) and is named as such.

**Quotation check (rule 59).** Every single-quoted passage in every new row's notes and every NY tag note was checked by script against the saved section texts, enrolled acts, court rules and library text; the final run reports zero unmatched quotations (§8).

**Batteries:** 86, listed in §17 with patterns, hits, control, heading-only counts and positives.


### 1.4 Section-open vs recall; case law (rules 15, 21)

Every new row and every NY tag note was written with the section open in the browser or from the saved text, and the quotation check confirmed each quoted passage; there are no recall rows. Case law was not searched in this pass. Questions that turn on case law, each recorded in its row as unread (rule 21):
1. Whether a lease non-waiver clause preserves remedies after accepting rent (`edu-waiver-by-acceptance-ny`): not searched.
2. Whether first month's rent and a holding deposit fall within N.Y. Real Prop. Law § 238-a(1)(a)'s ban on payments at the start of the tenancy (`due-at-signing-ny`, `edu-holding-deposit-ny`): not searched; Attorney General and DHCR guidance not read.
3. Whether a stipulated holdover premium or a large early-termination fee is a penalty (`edu-holdover-rate-ny`, `edu-no-early-termination-fee-rule-ny`): not searched.
4. Whether N.Y. Real Prop. Law § 251 (no implied covenants in conveyances) reaches leases (`edu-quiet-possession-ny`): not searched.
5. Whether home cannabis cultivation under the Penal Law is 'conduct authorized under this chapter' for N.Y. Cannabis Law § 127(2) (`edu-cannabis-ny`): not searched.
6. Federal litigation over N.Y. Penal Law § 265.01-d's private-property rule (`edu-firearms-ny`): not searched.
7. Enforceability of residential lease jury waivers outside N.Y. Real Prop. Law § 259-c (`edu-jury-waiver-ny`): not searched.
8. Whether unpaid rent is a 'consumer debt' (N.Y. Civ. Prac. L. & R. 5004) or a 'consumer claim' (N.Y. Gen. Bus. Law § 600(1)) (`edu-legal-interest-ny`, `edu-knowing-use-ny`): not searched.
9. Whether the 2024 squatter sentences of N.Y. Real Prop. Acts. Law § 711 interact with N.Y. Real Prop. Acts. Law § 768's 30-day protection (`edu-unauthorized-occupant-ny`): not searched; rows tell landlords to use the court.
10. Reach of N.Y. Gen. Bus. Law § 349(h)'s private action to residential leases (`edu-consumer-protection-ny`): not searched.
11. Common-law repair-and-deduct and bailment duties (`edu-no-repair-deduct-ny`, `edu-abandoned-property-ny`): not searched.


## 2. Tag-first results (rules 26-28)

### 2.1 Tagged NY as written (39)

Each row gets `NY` in `states`, a `| NY: …` note and `last_checked` 2026-10-03; no shared text was edited (§9).

| Row | Topic | NY note (summary) |
|---|---|---|
| `addendum-precedence` | addendum-precedence | Applies as written. New York's required lease text (the sprinkler notice, N.Y. Real Prop. Law § 231-a; the flood notice, N.Y. Real Prop. Law § 231-b; the Good Cause Eviction notice, N.Y. Real Prop. Law § 231-c; `sprinkler-disclosu… |
| `no-alterations` | alterations | Applies as written. Its last sentence preserves the reasonable modifications a tenant with a disability may make at the tenant's expense; the landlord may, where reasonable, condition permission on the renter's agreeing to restore… |
| `appliances-included` | appliances-included | Applies as written. Appliances the landlord supplies fall under the warranty of habitability where their failure makes the unit unfit or dangerous (N.Y. Real Prop. Law § 235-b(1)), and in a multiple dwelling every part must be kep… |
| `application-of-payments` | application-of-payments | Applies as written. In a summary proceeding 'the term "rent" shall mean the monthly or weekly amount charged in consideration for the use and occupation of a dwelling', and 'No fees, charges or penalties other than rent may be sou… |
| `assigned-parking-space` | assigned-parking-space | Applies as written. Where the Good Cause Eviction Law applies, separate parking charges are not 'rent' unless imposed or increased to circumvent the law (N.Y. Real Prop. Law § 211(5)). |
| `assistance-animal-accommodation` | assistance-animal-accommodation | Applies as written. It is an unlawful discriminatory practice to refuse 'reasonable accommodations in rules, policies, practices, or services ... including the use of an animal as a reasonable accommodation to alleviate symptoms o… |
| `no-disturbance` | disturbance | Applies as written. A tenant who commits or permits a nuisance or whose 'conduct is such as to interfere with the comfort and safety of the landlord or other tenants' gives good cause for removal where the Good Cause Eviction Law … |
| `electronic-signatures` | electronic-signatures | Applies as written. New York's Electronic Signatures and Records Act gives an electronic signature the same validity and effect as a handwritten one (N.Y. State Tech. Law § 304(2)); consent covers signing, not service of the statu… |
| `entire-agreement` | entire-agreement | Applies as written. A written modification signed by the party to be charged needs no consideration (N.Y. Gen. Oblig. Law § 5-1103). |
| `fire-safety-grilling` | fire-safety-grilling | Applies as written; no New York statute gives tenants a grilling right. The state Uniform Fire Prevention and Building Code and local fire codes (not read) set open-flame rules; New York City rules are flagged, not resolved (rule … |
| `governing-law` | governing-law | Applies as written. |
| `hoa-compliance` | hoa-compliance | Applies as written. |
| `inspection-rights` | inspection-rights | Applies as written; its 'Access & Entry terms' are the tagged `landlords-access`. Unreasonably refusing access for necessary repairs or improvements required by law, or for showing the unit to a prospective purchaser or mortgagee,… |
| `joint-liability` | joint-liability | Applies as written. Co-tenants who sign one lease are jointly liable by its terms; the roommate law lets tenants share the unit with occupants, who acquire no tenancy rights without the landlord's express written permission (N.Y. … |
| `landlords-access` | landlord-entry | Applies as written. No New York statute sets a statewide notice period for landlord entry (NY battery 62 (landlord entry notice / right of access): 2 hits, control 0; known positives passed (0 real, 1 synthetic)); New York City's … |
| `lead-based-paint` | lead-based-paint | Applies as written (federal: 42 U.S.C. § 4852d; 40 C.F.R. § 745.113). New York adds no statewide lead disclosure for rentals in the consolidated laws (NY battery 47 (lead-based paint disclosure / notice (rental)): 9 hits, control … |
| `notices` | notices | Applies as written. New York prescribes the method for its statutory notices, and the clause yields to them: the 14-day rent demand is served as a notice of petition is (N.Y. Real Prop. Acts. Law §§ 711(2), 735), the late-rent not… |
| `pet-insurance-requirement` | pet-insurance-requirement | Applies as written; no New York statute bars a renter's insurance requirement (NY battery 45 (renter's insurance requirement): 2 hits, control 0; known positives passed (0 real, 1 synthetic)). It excludes assistance animals (N.Y. … |
| `rent-payment` | rent-payment | Applies as written. 'Except as permitted by applicable law' preserves the tenant's statutory offsets, such as payments to a utility for service the landlord failed to pay for (N.Y. Real Prop. Law § 235-a(1)) and heating-oil purcha… |
| `rental-application-accuracy` | rental-application-accuracy | Applies as written. Its last sentence matters in New York: a landlord may not refuse to rent because of an applicant's past or pending landlord-tenant case (N.Y. Real Prop. Law § 227-f(1)), and may not use an application form or m… |
| `residential-use-only` | residential-use-only | Applies as written. Using the premises 'for any illegal trade, manufacture or other business' voids the lease and lets the landlord re-enter (N.Y. Real Prop. Law § 231(1)). |
| `severability` | severability | Applies as written. A court may also refuse to enforce an unconscionable clause and enforce the rest of the lease (N.Y. Real Prop. Law § 235-c(1)). |
| `tenant-maintenance` | tenant-maintenance | Applies as written. In a multiple dwelling the tenant is liable 'if a violation is caused by his own wilful act, assistance or negligence or that of any member of his family or household or his guest' (N.Y. Mult. Dwell. Law § 78(1… |
| `utilities-paid-by-landlord` | utilities-paid-by-landlord | Applies as written. A landlord whose lease requires a service and who wilfully or intentionally fails to furnish it when it is necessary to the proper or customary use of the building commits a violation (N.Y. Real Prop. Law § 235… |
| `utilities-responsibility` | utilities-responsibility | Applies as written. |
| `utility-payment-evidence` | utility-payment-evidence | Applies as written. |
| `utility-service-continuity` | utility-service-continuity | Applies as written. |
| `tenant-forward-proceedings-ca` | tenant-forward-proceedings | Applies as written. New York imposes the duty by statute, with a heavy penalty: a tenant served with process in an action to recover the property or its possession 'must forthwith give notice thereof to his landlord; otherwise he … |
| `parking-ks-oh-ca` | parking | Applies as written in place of the base `parking`, whose 'not liable' sentence would exempt the landlord from liability for its own negligence, which is void in any lease of real property (N.Y. Gen. Oblig. Law § 5-321; rule 52). |
| `storage-space-ks-oh-ca` | storage-space | Applies as written in place of the base, whose 'not liable' sentence is void under N.Y. Gen. Oblig. Law § 5-321 (rule 52). |
| `tenants-property-insurance-ks-oh-ca` | tenants-property-insurance | Applies as written in place of the base, whose 'not liable' sentence is void under N.Y. Gen. Oblig. Law § 5-321 (rule 52). No New York statute bars a renter's insurance requirement (NY battery 45 (renter's insurance requirement): … |
| `services-utilities-provided-ks-oh` | services-utilities-provided | Applies as written in place of the base, whose 'Landlord is not liable' sentence would exempt the landlord from liability for negligence (N.Y. Gen. Oblig. Law § 5-321; rule 52). |
| `possession-delay` | possession-delay | Applies as written. New York implies a condition that the lessor will deliver possession at the beginning of the term, with a right to rescind and recover the consideration paid, but only 'In the absence of an express provision to… |
| `default-by-tenant` | default-by-tenant | Applies as written. Rent: a written 14-day demand, served in the manner N.Y. Real Prop. Acts. Law § 735 prescribes and with the N.Y. Real Prop. Law § 231-c notice appended, must precede a nonpayment proceeding (N.Y. Real Prop. Act… |
| `early-termination-ks` | early-termination | Applies as written. No New York statute caps or bars an agreed early-termination option (NY battery 31 (early termination fee / buyout): 3 hits, control 0; known positives passed (0 real, 1 synthetic)); a tenant who uses the optio… |
| `late-fee` | late-fee | Applies as written with builder caps (NY log §10): New York allows a late fee only if rent 'has not been made within five days of the date it was due', capped at 'fifty dollars or five percent of the monthly rent, whichever is les… |
| `common-area-use` | common-area-use | Applies as written. No New York statute gives tenants a right to display signs or flags or bars waterbeds or candle rules (NY battery 41 (flag / political sign display by residents): 11 hits, control 0; known positives passed (0 r… |
| `landscaping-irrigation` | landscaping-irrigation | Applies as written. New York has no statute requiring a separate writing to shift chores to a tenant (NY battery 5 (separate document / writing / instrument / rider): 20 hits, control 0; known positives passed (0 real, 1 synthetic… |
| `snow-removal` | snow-removal | Applies as written. No New York statute requires a separate writing for chore shifting (NY battery 5 (separate document / writing / instrument / rider): 20 hits, control 0; known positives passed (0 real, 1 synthetic); rule 48); t… |

### 2.2 Screened and not tagged (34)

| Row | Reason | NY answer |
|---|---|---|
| `keys` | Lets Landlord re-key and charge the cost whenever Tenant 'requires a replacement', so a request for a key copy could be charged as a lock change above the 110% copy cap of N.Y. Real Prop. Law § 235-i. Replaced by `keys-ny` (independent check round 3, NY log §13). | `keys-ny` |
| `acceptable-payment-methods-nj` | Lets Landlord change the accepted methods on notice with no limit, so it could move to electronic-only payment, which N.Y. Real Prop. Law § 235-g(1) bars; the limit would sit only in the note (rule 53). Replaced by `acceptable-payment-methods-ny` (independent check, NY log §13). | `acceptable-payment-methods-ny` |
| `parking-vehicle-rules` | Lets Landlord charge Tenant for parking tags, decals or access cards with no limit on when, so the charge could fall at the start of the tenancy, which N.Y. Real Prop. Law § 238-a(1)(a) bars and N.Y. Real Prop. Law § 238-a(3) makes unwaivable. Replaced by `parking-vehicle-rules-ny` (independent check, NY log §13). | `parking-vehicle-rules-ny` |
| `permitted-occupants` | Restricts occupancy to named persons; N.Y. Real Prop. Law § 235-f(2) voids such restrictions. Replaced by `permitted-occupants-ny`. | `permitted-occupants-ny` |
| `pet-policy` | Pet deposit on top of the security deposit can exceed the one-month cap (N.Y. Gen. Oblig. Law § 7-108(1-a)(a)); removal 'without liability' risks N.Y. Real Prop. Acts. Law § 768. Replaced by `pet-policy-ny`. | `pet-policy-ny` |
| `acceptable-payment-methods` | Lets the landlord specify methods, which could be electronic-only; N.Y. Real Prop. Law § 235-g(1) bars that. Replaced by `acceptable-payment-methods-ny`. | `acceptable-payment-methods-ny` |
| `services-utilities-provided` | Its 'Landlord is not liable' sentence is void under N.Y. Gen. Oblig. Law § 5-321 (rule 52). `services-utilities-provided-ks-oh` tagged instead. | `services-utilities-provided-ks-oh` |
| `early-termination` | One curated answer per topic (rule 6): `early-termination-ks` (fee only in a fixed Term; landlord termination through the default provisions) tagged instead. | `early-termination-ks` |
| `holdover` | Ceiling-only measure and an end-of-term trigger that ignores the Good Cause Eviction Law (rules 41, 53). Replaced by `holdover-ny`. | `holdover-ny` |
| `tenants-property-insurance` | 'Not liable' sentence void under N.Y. Gen. Oblig. Law § 5-321 (rule 52). `tenants-property-insurance-ks-oh-ca` tagged instead. | `tenants-property-insurance-ks-oh-ca` |
| `parking` | 'Not liable' sentence void under N.Y. Gen. Oblig. Law § 5-321 (rule 52). `parking-ks-oh-ca` tagged instead. | `parking-ks-oh-ca` |
| `storage-space` | 'Not liable' sentence void under N.Y. Gen. Oblig. Law § 5-321 (rule 52). `storage-space-ks-oh-ca` tagged instead. | `storage-space-ks-oh-ca` |
| `guest-policy-day-limit` | Requires consent to add an occupant after 14 days; a sole tenant may add one occupant without consent (N.Y. Real Prop. Law § 235-f(3), (5), (7)). `guest-policy-ny` answers the topic. | `guest-policy-ny` |
| `guest-policy` | Prior written consent for guests beyond a period conflicts with N.Y. Real Prop. Law § 235-f. Replaced by `guest-policy-ny`. | `guest-policy-ny` |
| `ev-charging-shared-area-co` | Rests on Colorado's and Illinois's tenant EV-charging statutes; New York has none (NY battery 43 (EV charging in rentals): 10 hits, control 0; known positives passed (0 real, 1 synthetic)). `edu-no-ev-charging-rule-ny`. | `edu-no-ev-charging-rule-ny` |
| `ev-charging-end-of-tenancy-co` | Same: rests on statutes New York lacks (NY battery 43 (EV charging in rentals): 10 hits, control 0; known positives passed (0 real, 1 synthetic)). | — |
| `default-by-tenant-ks-ne` | Variant built on the URLTA states' notice rules; base `default-by-tenant` tagged (rule 26). | `default-by-tenant` |
| `extended-absence-notice-ks` | Rests on the URLTA absence-notice rule (rule 26); New York has no such statute. No New York row offered; topic recorded in NY log §18. | — |
| `late-fee-ne` | Rests on Nebraska's waiver-by-acceptance statute (rule 26). Base `late-fee` tagged. | `late-fee` |
| `possession-delay-ca` | One curated answer (rule 6): base `possession-delay` tagged as the 'express provision to the contrary' N.Y. Real Prop. Law § 223-a allows. | `possession-delay` |
| `surrender-end-of-term` | Requires surrender 'Upon the expiration' regardless of the Good Cause Eviction Law (rule 41). Replaced by `surrender-end-of-term-ny`. | `surrender-end-of-term-ny` |
| `surrender-end-of-term-mn-nd` | Same end-of-term trigger and a pointer to a property section New York has no statute for. `surrender-end-of-term-ny` answers the topic. | `surrender-end-of-term-ny` |
| `surrender-end-of-term-ks-ne` | Same. `surrender-end-of-term-ny` answers the topic. | `surrender-end-of-term-ny` |
| `parking-vehicle-rules-id` | Rests on Idaho's towing statute (rule 26). Base `parking-vehicle-rules` tagged. | `parking-vehicle-rules` |
| `landlords-access-mi` | Rests on Michigan's entry statute (rule 26). Base `landlords-access` tagged. | `landlords-access` |
| `no-sublet-assign` | 'Sole discretion' conflicts with N.Y. Real Prop. Law § 226-b. Replaced by `no-sublet-assign-ny`. | `no-sublet-assign-ny` |
| `due-at-signing` | Example amounts exceed the one-month cap and the N.Y. Real Prop. Law § 238-a fee ban. Replaced by `due-at-signing-ny`. | `due-at-signing-ny` |
| `existing-condition` | Stands in for the move-in inspection offer N.Y. Gen. Oblig. Law § 7-108(1-a)(c) prescribes. Replaced by `existing-condition-ny`. | `existing-condition-ny` |
| `landlord-maintenance` | Excuses repairs a multiple dwelling owner must make (N.Y. Mult. Dwell. Law § 78(1)). Replaced by `landlord-maintenance-ny`. | `landlord-maintenance-ny` |
| `returned-payments` | Ceiling-only fee; New York requires the fee to be provided for in the lease (N.Y. Real Prop. Law § 238-a(2-a)). Replaced by `returned-payments-ny`. | `returned-payments-ny` |
| `security-deposit-use` | Open-ended retention list including cleaning; New York's list is closed (N.Y. Gen. Oblig. Law § 7-108(1-a)(b)). Replaced by `security-deposit-use-ny`. | `security-deposit-use-ny` |
| `security-deposit-return` | Blank-states parent (rule 25 family). Replaced by `security-deposit-return-ny`. | `security-deposit-return-ny` |
| `smoking-policy` | Bans cannabis vaping and use beyond what N.Y. Cannabis Law § 127(2)(b) allows. Replaced by `smoking-policy-ny`. | `smoking-policy-ny` |
| `holdover-ca` | Treats every holdover as a wrongdoer, untrue under the Good Cause Eviction Law. Replaced by `holdover-ny`. | `holdover-ny` |

### 2.3 Single-state clauses screened (592), none tagged

Triage (rule 26), from `triage.json`: 280 name another state or its statute in the title or text; 141 rest their basis on another state's statute (REQUIRED_DISCLOSURE, CONSTRAINED_TERM or a REQUIRED rule_type); 87 sit on a topic New York answers with its own row; the remaining 84 were read in full. Of those 84, none was tagged: the abandoned-property clauses (KS, MN, ND, SD, NV, TN, AL, OK, NM, MT, FL) implement their states' statutes and New York has none (`surrender-end-of-term-ny` instead); the cannabis-cultivation bans (IL, MO, OK, MI, NM, MT) are declined for New York (`edu-cannabis-ny`); the maintenance-allocation agreements (AZ, FL, IA, ND, NM, KS) rest on separate-writing statutes New York lacks; the tenant-death contact clauses (MT, OK, NM, VA, IN, TX) point to property-handling sections New York's lease does not have; the landlord self-cure clauses (TN, IA, NM) rest on URLTA; the rest are state-specific disclosures or mechanisms (bed bugs CO/CA/AZ, foreclosure NV/MN/AZ, meth SD/OK, military zones VA, ordnance CA, fee-in-lieu FL, flotation bedding FL, rent escalation GA/IN/MI, concessions IL/AZ, periodic-services entry SC, appliances-excluded SC, partial-payment non-waiver NC/MN, renters-insurance NC, deposit standards SC, nonpayment notice SC, eviction service party TN, firearms TN/MT, smoke drift UT, tenant records VA, rekey IL, EV IL/CO, fees-not-rent CO, end-of-term notice GA, association approval FL, no-liens FL, adverse-proceeding notice ND, extended absence NE/AL, security devices CA, sex-offender occupancy OH, utility billing VA/IA, unpaid-damages interest WY, prohibited acts WY, initial inspection MN, move-in damage list GA, deposit last-month TX, owner disclosure TX, tenant-supplied heat NJ). Each has a New York answer in §18 or none is needed.


## 3. New NY rows

### 3.1 New NY lease clauses (29)

| id | group | rule_type | lease_clause_basis | topic_key | supersedes | key citations |
|---|---|---|---|---|---|---|
| `good-cause-notice-ny` | Disclosures | REQUIRED | REQUIRED_DISCLOSURE: N.Y. Real Prop. Law § 231-c(1) | good-cause-notice |  | N.Y. Real Prop. Law § 231-c(1); N.Y. Real Prop. Law § 211(2); L. 2024, ch. 56 |
| `sprinkler-disclosure-ny` | Disclosures | REQUIRED | REQUIRED_DISCLOSURE: N.Y. Real Prop. Law § 231-a | sprinkler-disclosure |  | N.Y. Real Prop. Law § 231-a(1); N.Y. Real Prop. Law § 231-a(3); N.Y. Exec. Law § 155-a |
| `flood-disclosure-ny` | Disclosures | REQUIRED | REQUIRED_DISCLOSURE: N.Y. Real Prop. Law § 231-b | flood-disclosure |  | N.Y. Real Prop. Law § 231-b(1); N.Y. Real Prop. Law § 231-b(2) |
| `certificate-of-occupancy-notice-ny` | Disclosures | CONDITIONAL | REQUIRED_DISCLOSURE: N.Y. Real Prop. Law § 235-bb(1) | certificate-of-occupancy-disclosure |  | N.Y. Real Prop. Law § 235-bb(1); N.Y. Real Prop. Law § 235-bb(2); N.Y. Mult. Dwell. Law § 3(1)-(2) |
| `returned-payments-ny` | Rent & Payment | CONSTRAINED | CONSTRAINED_TERM | returned-payments | `returned-payments` | N.Y. Real Prop. Law § 238-a(2-a)(a)-(b); N.Y. Gen. Oblig. Law § 5-328(3)(a); N.Y. Gen. Oblig. Law § 5-328(3)(b) |
| `security-deposit-use-ny` | Security Deposit | CONSTRAINED | CONSTRAINED_TERM | security-deposit-use | `security-deposit-use` | N.Y. Gen. Oblig. Law § 7-108(1-a)(a); N.Y. Gen. Oblig. Law § 7-108(4)-(6); N.Y. Gen. Oblig. Law § 7-108(1-a)(b) |
| `security-deposit-return-ny` | Security Deposit | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | N.Y. Gen. Oblig. Law § 7-108(1-a)(e); N.Y. Gen. Oblig. Law § 7-108(1-a)(d); N.Y. Gen. Oblig. Law § 7-103(2) |
| `deposit-bank-notice-ny` | Security Deposit | CONDITIONAL | REQUIRED_DISCLOSURE: N.Y. Gen. Oblig. Law § 7-103(2) | security-deposit-holding |  | N.Y. Gen. Oblig. Law § 7-103(2); N.Y. Gen. Oblig. Law § 7-103(2-a); N.Y. Gen. Oblig. Law § 7-103(2-b) |
| `existing-condition-ny` | Tenant Responsibilities | RECOMMENDED | SERVES_LANDLORD | existing-condition | `existing-condition` | N.Y. Gen. Oblig. Law § 7-108(1-a)(c); N.Y. Gen. Oblig. Law § 7-108(3) |
| `due-at-signing-ny` | Rent & Payment | CONSTRAINED | CONSTRAINED_TERM | due-at-signing | `due-at-signing` | N.Y. Real Prop. Law § 238-a(1)(a); N.Y. Gen. Oblig. Law § 7-108(1-a)(a); N.Y. Real Prop. Law § 238-a(1)(b) |
| `permitted-occupants-ny` | Tenant Responsibilities | CONSTRAINED | CONSTRAINED_TERM | permitted-occupants | `permitted-occupants` | N.Y. Real Prop. Law § 235-f(2); N.Y. Real Prop. Law § 235-f(3); N.Y. Real Prop. Law § 235-f(4) |
| `guest-policy-ny` | Rules & Regulations | RECOMMENDED | SERVES_LANDLORD | guest-policy | `guest-policy` | N.Y. Real Prop. Law § 235-f(3); N.Y. Real Prop. Law § 235-f(5); N.Y. Real Prop. Law § 235-f(7) |
| `no-sublet-assign-ny` | Tenant Responsibilities | CONSTRAINED | CONSTRAINED_TERM | sublet-assign | `no-sublet-assign` | N.Y. Real Prop. Law § 226-b(1); N.Y. Real Prop. Law § 226-b(2)(a); N.Y. Real Prop. Law § 226-b(2)(b)-(c) |
| `holdover-ny` | Default & Termination | RECOMMENDED | SERVES_LANDLORD | holdover | `holdover-ca` | N.Y. Real Prop. Law § 216(1); N.Y. Real Prop. Law § 220; N.Y. Real Prop. Acts. Law § 749(3) |
| `surrender-end-of-term-ny` | Default & Termination | RECOMMENDED | SERVES_LANDLORD | surrender-end-of-term | `surrender-end-of-term` | N.Y. Real Prop. Law §§ 215; N.Y. Gen. Oblig. Law § 7-108(1-a)(b); N.Y. Real Prop. Law § 227-a |
| `landlord-maintenance-ny` | Landlord Responsibilities | RECOMMENDED | SERVES_LANDLORD | landlord-maintenance | `landlord-maintenance` | N.Y. Mult. Dwell. Law § 78(1); N.Y. Mult. Resid. Law § 174; N.Y. Real Prop. Law § 235-b(1) |
| `pet-policy-ny` | Pets | RECOMMENDED | SERVES_LANDLORD | pet-policy | `pet-policy` | N.Y. Gen. Oblig. Law § 7-108(1-a)(a); N.Y. Gen. Oblig. Law § 5-321; N.Y. Real Prop. Acts. Law § 768(1)(a)(iii) |
| `smoking-policy-ny` | Tenant Responsibilities | RECOMMENDED | SERVES_LANDLORD | smoking-policy | `smoking-policy` | N.Y. Cannabis Law § 127(2); N.Y. Pub. Health Law § 1399-n(8)-(9); N.Y. Cannabis Law § 127(2)(b) |
| `rules-ny` | Rules & Regulations | CONDITIONAL | SERVES_LANDLORD | rules-regulations |  | N.Y. Real Prop. Law § 216(1)(b) |
| `electronic-notice-ny` | Notices & General | CONDITIONAL | SERVES_LANDLORD | notice-delivery-methods |  | N.Y. State Tech. Law § 305(3); N.Y. Real Prop. Acts. Law § 711(2); N.Y. Real Prop. Law § 235-e(d) |
| `emergency-contact-consent-ny` | Notices & General | CONDITIONAL | REQUIRED_DISCLOSURE: N.Y. Mult. Dwell. Law § 15(2); N.Y. Mult. Resid. Law § 16(2) | emergency-contact |  | N.Y. Mult. Dwell. Law § 4(7); N.Y. Mult. Resid. Law § 4(33); N.Y. Mult. Dwell. Law § 3(1)-(2) |
| `smoke-detector-duties-ny` | Tenant Responsibilities | CONDITIONAL | REQUIRED_DISCLOSURE: N.Y. Mult. Dwell. Law § 68(4)(c); N.Y. Mult. Resid. Law § 15(4)(c) | alarm-duties |  | N.Y. Mult. Dwell. Law § 68(4); N.Y. Mult. Dwell. Law § 68(5); N.Y. Mult. Dwell. Law § 68(7) |
| `casualty-termination-ny` | Default & Termination | CONDITIONAL | SERVES_LANDLORD | casualty-termination |  | N.Y. Real Prop. Law § 227; N.Y. Real Prop. Law § 235-b; N.Y. Real Prop. Acts. Law § 711 |
| `tenant-caused-damage-ny` | Default & Termination | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage |  | N.Y. Real Prop. Law § 235-b(1); N.Y. Real Prop. Law § 227; N.Y. Real Prop. Acts. Law § 755(1)(c) |
| `criminal-activity-ny` | Tenant Responsibilities | CONDITIONAL | SERVES_LANDLORD | criminal-activity |  | N.Y. Real Prop. Law § 231(1); N.Y. Real Prop. Acts. Law § 711(5); N.Y. Real Prop. Acts. Law § 715(1) |
| `auto-renewal-ny` | Notices & General | CONDITIONAL | SERVES_LANDLORD | automatic-renewal |  | N.Y. Gen. Oblig. Law § 5-905; N.Y. Real Prop. Law § 226-c; N.Y. Real Prop. Law § 216(1)(j) |
| `acceptable-payment-methods-ny` | Tenant Responsibilities | CONSTRAINED | CONSTRAINED_TERM | acceptable-payment-methods | `acceptable-payment-methods` | N.Y. Real Prop. Law § 235-g(1); N.Y. Real Prop. Law § 235-g(2) |
| `parking-vehicle-rules-ny` | Parking & Storage | CONSTRAINED | CONSTRAINED_TERM | parking-vehicle-rules | `parking-vehicle-rules` | N.Y. Real Prop. Law § 238-a(1)(a); N.Y. Real Prop. Law § 238-a(3); N.Y. Veh. & Traf. Law § 1210(c) |
| `keys-ny` | Rules & Regulations | CONSTRAINED | CONSTRAINED_TERM | keys | `keys` | N.Y. Real Prop. Law § 235-i; N.Y. Real Prop. Acts. Law § 768(1)(a)(iii); N.Y. Real Prop. Acts. Law § 711 |

### 3.2 New NY education rows (108)

All `LANDLORD_EDUCATION`, `rule_type` RECOMMENDED, basis blank, VERIFIED, read section-open.

| id | group | topic_key | key citations |
|---|---|---|---|
| `edu-scope-ny` | Notices & General | scope | L. 1974, ch. 576; N.Y. Real Prop. Law § 214(5); N.Y. Gen. Oblig. Law § 7-108 |
| `edu-rent-control-ny` | Rent & Payment | rent-control | N.Y. Real Prop. Law § 211(8); N.Y. Real Prop. Law § 211(7); N.Y. Real Prop. Law § 216(1)(a)(i) |
| `edu-rent-increase-notice-ny` | Rent & Payment | rent-increase-notice | N.Y. Real Prop. Law § 226-c(1)(a); N.Y. Real Prop. Law § 226-c(2)(a)-(d); N.Y. Real Prop. Law § 232-a |
| `edu-for-cause-eviction-ny` | Default & Termination | for-cause-eviction | N.Y. Real Prop. Law § 215; N.Y. Real Prop. Law § 216(1); N.Y. Real Prop. Law § 216(1)(g) |
| `edu-late-fee-ny` | Rent & Payment | late-fee | N.Y. Real Prop. Law § 238-a(2); N.Y. Real Prop. Law § 238-a(3); N.Y. Real Prop. Acts. Law § 702(1) |
| `edu-application-fee-ny` | Rent & Payment | application-fees | N.Y. Real Prop. Law § 238-a(1)(a); N.Y. Real Prop. Law § 238-a(1)(b); N.Y. Real Prop. Law § 238-a(3) |
| `edu-fees-as-rent-ny` | Rent & Payment | fees-as-rent | N.Y. Real Prop. Acts. Law § 702(1); N.Y. Real Prop. Law § 234-a |
| `edu-rent-receipts-ny` | Rent & Payment | rent-receipts | N.Y. Real Prop. Law § 235-e(a); N.Y. Real Prop. Law § 235-e(b); N.Y. Real Prop. Law § 235-e(c) |
| `edu-rent-demand-ny` | Default & Termination | nonpayment-notice | N.Y. Real Prop. Law § 235-e(d); N.Y. Real Prop. Acts. Law § 711(2); N.Y. Real Prop. Acts. Law § 735(1) |
| `edu-legal-interest-ny` | Rent & Payment | unpaid-damages-interest | N.Y. Real Prop. Law § 238-a(2); N.Y. Gen. Oblig. Law § 5-501; N.Y. Banking Law § 14-a |
| `edu-waiver-by-acceptance-ny` | Rent & Payment | waiver-by-acceptance | N.Y. Real Prop. Law § 232-c; N.Y. Real Prop. Acts. Law § 711(1); N.Y. Real Prop. Acts. Law § 711(3) |
| `edu-deposit-rules-ny` | Security Deposit | security-deposit-cap | N.Y. Gen. Oblig. Law § 7-108(1-a)(a)-(e); N.Y. Gen. Oblig. Law § 7-103(1); N.Y. Gen. Oblig. Law §§ 7-103(3) |
| `edu-deposit-interest-ny` | Security Deposit | security-deposit-interest | N.Y. Gen. Oblig. Law § 7-103(2-a); N.Y. Gen. Oblig. Law § 7-103(2); N.Y. Gen. Oblig. Law § 7-103(3) |
| `edu-deposit-on-sale-ny` | Security Deposit | security-deposit-on-sale | N.Y. Gen. Oblig. Law § 7-105(1); N.Y. Gen. Oblig. Law § 7-105(2); N.Y. Gen. Oblig. Law § 7-105(3) |
| `edu-deposit-penalty-ny` | Security Deposit | security-deposit-penalty | N.Y. Gen. Oblig. Law § 7-108(1-a)(e); N.Y. Gen. Oblig. Law § 7-108(1-a)(f); N.Y. Gen. Oblig. Law § 7-108(1-a)(g) |
| `edu-deposit-escheat-ny` | Security Deposit | deposit-escheat | N.Y. Aband. Prop. Law § 1317; N.Y. Gen. Oblig. Law § 7-103(1) |
| `edu-holding-deposit-ny` | Security Deposit | holding-deposit | N.Y. Real Prop. Law § 238-a(1)(a); N.Y. Gen. Oblig. Law § 7-108(1-a)(a)-(b) |
| `edu-pet-deposit-ny` | Pets | pet-fees | N.Y. Gen. Oblig. Law § 7-108(1-a)(a)-(b); N.Y. Real Prop. Law § 238-a(1)(a); N.Y. Exec. Law § 296(5)(a)(2) |
| `edu-algorithmic-rent-ny` | Rent & Payment | algorithmic-rent-setting | N.Y. Gen. Bus. Law § 340-b(3); L. 2025, ch. 437 |
| `edu-termination-notice-ny` | Default & Termination | termination-notice | N.Y. Real Prop. Law § 232-b; N.Y. Real Prop. Law § 226-c(1)(a); N.Y. Real Prop. Law § 232-a |
| `edu-holdover-ny` | Default & Termination | holdover | N.Y. Real Prop. Law § 232-c; N.Y. Real Prop. Law § 229; N.Y. Real Prop. Law § 220 |
| `edu-holdover-rate-ny` | Default & Termination | holdover-rate | N.Y. Real Prop. Law § 229; N.Y. Real Prop. Law § 220; N.Y. Real Prop. Law §§ 215 |
| `edu-unlawful-eviction-ny` | Default & Termination | self-help-eviction | N.Y. Real Prop. Acts. Law § 768(1)(a)(i)-(iii); N.Y. Real Prop. Acts. Law § 768(1)(b); N.Y. Real Prop. Acts. Law § 768(2)(a) |
| `edu-eviction-process-ny` | Default & Termination | eviction-process | N.Y. Real Prop. Acts. Law §§ 711; N.Y. Real Prop. Acts. Law § 741(5-a)-(5-b); L. 2023, ch. 579 |
| `edu-eviction-stay-ny` | Default & Termination | eviction-hardship-stay | N.Y. Real Prop. Acts. Law § 753(1); N.Y. Real Prop. Acts. Law § 753(2); N.Y. Real Prop. Acts. Law § 753(3) |
| `edu-eviction-records-ny` | Default & Termination | eviction-record-sealing | N.Y. Real Prop. Law § 227-f(1); N.Y. Real Prop. Law § 227-f(2); N.Y. Real Prop. Acts. Law § 757 |
| `edu-post-eviction-property-ny` | Default & Termination | post-eviction-property | N.Y. Real Prop. Acts. Law § 749(2)(b); N.Y. Real Prop. Acts. Law § 768(1)(a)(iii); N.Y. Gen. Oblig. Law § 7-108(1-a)(b) |
| `edu-unauthorized-occupant-ny` | Default & Termination | unauthorized-occupant-removal | N.Y. Real Prop. Acts. Law § 711; L. 2024, ch. 56; N.Y. Real Prop. Acts. Law § 713(3) |
| `edu-retaliation-ny` | Default & Termination | retaliation | N.Y. Real Prop. Law § 223-b(1)(a)-(c); N.Y. Real Prop. Law § 223-b(5-a); N.Y. Real Prop. Law § 223-b(6) |
| `edu-dv-termination-ny` | Default & Termination | dv-lease-termination | N.Y. Real Prop. Law § 227-c(1)-(2); N.Y. Real Prop. Law § 227-c(3)(b); N.Y. Real Prop. Law § 227-c(3)(d) |
| `edu-dv-eviction-ny` | Default & Termination | dv-eviction-protection | N.Y. Real Prop. Law § 227-d(1)-(2); N.Y. Real Prop. Acts. Law § 744(1); N.Y. Real Prop. Law § 227-d(2)(a) |
| `edu-senior-termination-ny` | Default & Termination | infirmity-termination | N.Y. Real Prop. Law § 227-a(1); N.Y. Exec. Law § 292(21); N.Y. Real Prop. Law § 227-a(2)(a)-(b) |
| `edu-tenant-death-ny` | Default & Termination | tenant-death | N.Y. Real Prop. Law § 236-a; L. 2023, ch. 632; N.Y. Real Prop. Law § 236 |
| `edu-mitigation-ny` | Default & Termination | abandonment-and-mitigation | N.Y. Real Prop. Law § 227-e(1); L. 2019, ch. 36 |
| `edu-attorney-fees-ny` | Default & Termination | attorney-fees | N.Y. Real Prop. Law § 234; N.Y. Real Prop. Law § 234-a(a); N.Y. Real Prop. Law § 234-a(b) |
| `edu-casualty-ny` | Default & Termination | casualty-termination | N.Y. Real Prop. Law § 227; N.Y. Real Prop. Law § 235-b(2) |
| `edu-fair-housing-ny` | Disclosures | fair-housing | N.Y. Exec. Law § 296(5)(a)(1)-(3); N.Y. Exec. Law § 296(5)(a)(4)(i); N.Y. Exec. Law § 296(5)(a)(4)(ii) |
| `edu-source-of-income-ny` | Disclosures | source-of-income | N.Y. Exec. Law § 296(5)(a)(1)-(3); N.Y. Exec. Law § 292(36) |
| `edu-immigration-status-ny` | Disclosures | immigration-status | N.Y. Exec. Law § 296(5)(a)(1)-(3) |
| `edu-protected-class-inquiry-ny` | Disclosures | protected-class-inquiry-ban | N.Y. Exec. Law § 296(5)(a)(3); N.Y. Exec. Law § 296(5)(a)(4)(i) |
| `edu-tenant-screening-ny` | Other / Miscellaneous | tenant-screening | N.Y. Real Prop. Law § 238-a(1); N.Y. Real Prop. Law § 227-f; N.Y. Exec. Law § 296(16) |
| `edu-assistance-animals-ny` | Pets | assistance-animal-accommodation | N.Y. Exec. Law § 296(18)(2); N.Y. Civ. Rights Law § 47(1); N.Y. Civ. Rights Law § 47(2) |
| `edu-disability-accommodation-ny` | Landlord Responsibilities | disability-accommodation | N.Y. Exec. Law § 296(18)(1); N.Y. Exec. Law § 296(18)(2); N.Y. Exec. Law § 296(7) |
| `edu-habitability-ny` | Landlord Responsibilities | landlord-maintenance | N.Y. Real Prop. Law § 235-b(1); N.Y. Real Prop. Law § 235-b(2); N.Y. Mult. Dwell. Law §§ 78 |
| `edu-heat-ny` | Landlord Responsibilities | heating | N.Y. Mult. Dwell. Law § 79(1); N.Y. Mult. Dwell. Law § 3; N.Y. Real Prop. Law § 235(1) |
| `edu-tenant-repair-remedies-ny` | Landlord Responsibilities | tenant-repair-remedies | N.Y. Real Prop. Law § 235-b(1); N.Y. Real Prop. Acts. Law § 755(1)(a)-(b); N.Y. Real Prop. Acts. Law § 755(2) |
| `edu-security-devices-ny` | Landlord Responsibilities | security-devices | N.Y. Mult. Dwell. Law § 50-a(1)-(2); N.Y. Mult. Dwell. Law § 51-a; N.Y. Mult. Dwell. Law § 51-c |
| `edu-smoke-co-detectors-ny` | Landlord Responsibilities | alarm-duties | N.Y. Exec. Law § 378(5-a); N.Y. Exec. Law § 378(5-b)(a); N.Y. Mult. Dwell. Law § 68 |
| `edu-bed-bug-ny` | Disclosures | bed-bug-disclosure | N.Y. Real Prop. Law § 235-j(1)-(4); L. 2024, ch. 488; L. 2025, ch. 77 |
| `edu-landlord-entry-ny` | Access & Entry | landlord-entry | N.Y. Gen. Oblig. Law § 7-108(1-a)(d); N.Y. Real Prop. Law § 216(1)(f); N.Y. Real Prop. Law § 231-c |
| `edu-utility-shutoff-ny` | Landlord Responsibilities | utility-shutoff-statute | N.Y. Real Prop. Acts. Law § 756; N.Y. Real Prop. Law § 235-a(1); N.Y. Pub. Serv. Law §§ 33 |
| `edu-tenant-organizing-ny` | Other / Miscellaneous | tenant-right-to-organize | N.Y. Real Prop. Law § 230(1); N.Y. Real Prop. Law § 230(2); N.Y. Real Prop. Law § 223-b(1)(c) |
| `edu-prohibited-terms-ny` | Other / Miscellaneous | prohibited-lease-terms | N.Y. Gen. Oblig. Law § 5-321; N.Y. Real Prop. Law §§ 235-b(2); N.Y. Real Prop. Law § 237 |
| `edu-exculpation-ny` | Other / Miscellaneous | exculpatory-clauses | N.Y. Gen. Oblig. Law § 5-321 |
| `edu-unconscionability-ny` | Other / Miscellaneous | unconscionability | N.Y. Real Prop. Law § 235-c(1)-(2) |
| `edu-plain-language-ny` | Other / Miscellaneous | plain-language | N.Y. Gen. Oblig. Law § 5-702(a); N.Y. Gen. Oblig. Law § 5-702(b); N.Y. Gen. Oblig. Law § 5-702(c) |
| `edu-small-print-ny` | Other / Miscellaneous | lease-type-size | N.Y. Real Prop. Law § 231-a(1); N.Y. Real Prop. Law § 235-bb(1) |
| `edu-statute-of-frauds-ny` | Notices & General | statute-of-frauds-lease-term | N.Y. Gen. Oblig. Law § 5-703(1); N.Y. Real Prop. Law § 235-b(1) |
| `edu-stigmatized-property-ny` | Disclosures | stigmatized-property | N.Y. Real Prop. Law § 443-a(1); N.Y. Real Prop. Law § 443-a(2)(a); N.Y. Real Prop. Law § 443-a(3) |
| `edu-certificate-of-occupancy-ny` | Disclosures | certificate-of-occupancy-disclosure | N.Y. Real Prop. Law § 235-bb; N.Y. Mult. Dwell. Law § 302(1)(b) |
| `edu-sale-management-change-ny` | Notices & General | sale-or-management-change | N.Y. Gen. Oblig. Law §§ 7-105; N.Y. Mult. Dwell. Law § 325(1); N.Y. Mult. Dwell. Law § 325(2) |
| `edu-local-registration-ny` | Other / Miscellaneous | landlord-registration | N.Y. Real Prop. Acts. Law § 741; L. 2025, ch. 416; N.Y. Mult. Dwell. Law § 325 |
| `edu-short-term-rental-ny` | Tenant Responsibilities | sublet-assign | N.Y. Real Prop. Law §§ 447-a; L. 2024, ch. 672; L. 2025, ch. 99 |
| `edu-consumer-protection-ny` | Other / Miscellaneous | consumer-protection-act | N.Y. Gen. Bus. Law § 349(a); N.Y. Gen. Bus. Law § 349(a)(1)-(2); N.Y. Gen. Bus. Law § 349(b) |
| `edu-knowing-use-ny` | Other / Miscellaneous | knowing-use-penalty | N.Y. Real Prop. Law § 223-b(5-a); N.Y. Real Prop. Law § 223-b(6); N.Y. Real Prop. Law § 227-c(6)(a) |
| `edu-cannabis-ny` | Rules & Regulations | cannabis | N.Y. Cannabis Law § 127(2); N.Y. Penal Law § 222.15(1); N.Y. Penal Law § 222.15(2) |
| `edu-firearms-ny` | Rules & Regulations | firearms | N.Y. Penal Law § 265.01-d(1); N.Y. Penal Law § 265.01-d; N.Y. Civ. Rights Law § 4 |
| `edu-lead-ny` | Disclosures | lead-based-paint | N.Y. Pub. Health Law § 1370-a(1); N.Y. Pub. Health Law §§ 1373; N.Y. Real Prop. Law § 216(1)(a)(ii) |
| `edu-no-radon-disclosure-ny` | Disclosures | radon-disclosure | N.Y. Real Prop. Law § 462 |
| `edu-no-meth-disclosure-ny` | Disclosures | meth-disclosure | N.Y. Real Prop. Law § 235-b(1) |
| `edu-no-renters-insurance-rule-ny` | Notices & General | renters-insurance-rules | N.Y. Real Prop. Law § 231-b(2); N.Y. Gen. Oblig. Law § 5-321 |
| `edu-no-application-order-rule-ny` | Rent & Payment | application-of-payments | N.Y. Real Prop. Acts. Law § 702(1) |
| `edu-no-early-termination-fee-rule-ny` | Default & Termination | early-termination | N.Y. Real Prop. Law §§ 227-c; N.Y. Real Prop. Law § 227-e |
| `edu-no-landlord-lien-ny` | Default & Termination | landlord-lien | N.Y. Real Prop. Acts. Law § 768(1)(a); N.Y. Real Prop. Law § 231(4); N.Y. Real Prop. Law § 227-a(3) |
| `edu-no-repair-deduct-ny` | Landlord Responsibilities | landlord-self-cure | N.Y. Real Prop. Law § 235-a(1); N.Y. Mult. Dwell. Law § 302-c; N.Y. Mult. Resid. Law § 305-c |
| `edu-lease-completeness-ny` | Notices & General | lease-completeness | N.Y. Gen. Oblig. Law § 5-702 |
| `edu-emergency-assistance-ny` | Notices & General | emergency-assistance-right | N.Y. Civ. Rights Law § 91(1); N.Y. Civ. Rights Law § 91(2); N.Y. Civ. Rights Law § 92 |
| `edu-no-ev-charging-rule-ny` | Parking & Storage | ev-charging | N.Y. Real Prop. Law § 339-ll |
| `edu-no-camera-rule-ny` | Rules & Regulations | tenant-security-cameras | N.Y. Gen. Bus. Law § 395-b(1); N.Y. Gen. Bus. Law § 395-b(2); N.Y. Gen. Bus. Law § 395-b(3)(a)(iv) |
| `edu-no-display-rule-ny` | Rules & Regulations | tenant-display-rights | N.Y. Exec. Law § 296(5)(a)(2) |
| `edu-towing-ny` | Parking & Storage | towing | N.Y. Veh. & Traf. Law § 1210(c); N.Y. Real Prop. Acts. Law § 768(1)(a)(iii) |
| `edu-utility-submetering-ny` | Landlord Responsibilities | utility-submetering-disclosure | N.Y. Gen. Oblig. Law § 7-108(1-a)(b); N.Y. Real Prop. Acts. Law § 702(1) |
| `edu-conversion-ny` | Default & Termination | conversion-notice | N.Y. Gen. Bus. Law § 352-e; N.Y. Gen. Bus. Law § 352-eee; N.Y. Gen. Bus. Law § 352-eeee |
| `edu-dv-confidentiality-ny` | Notices & General | dv-confidentiality | N.Y. Real Prop. Law § 227-c(5)(a)-(b); N.Y. Real Prop. Law § 227-c(6)(a) |
| `edu-foreclosure-ny` | Default & Termination | foreclosure | N.Y. Real Prop. Acts. Law § 1303(1)(b); N.Y. Real Prop. Acts. Law § 1305(2); N.Y. Real Prop. Acts. Law § 1305(3) |
| `edu-statutory-forms-ny` | Notices & General | statutory-forms | N.Y. Real Prop. Law § 231-c(1); N.Y. Real Prop. Law § 231-b(2); 22 NYCRR 208.42 |
| `edu-quiet-possession-ny` | Landlord Responsibilities | quiet-possession | N.Y. Real Prop. Law § 235(1); N.Y. Real Prop. Acts. Law § 768(1)(a)(ii); N.Y. Real Prop. Law § 251 |
| `edu-illegal-use-eviction-ny` | Default & Termination | expedited-criminal-eviction | N.Y. Real Prop. Law § 231(1); N.Y. Real Prop. Law § 231(2); N.Y. Real Prop. Law § 231(3) |
| `edu-nuisance-ny` | Default & Termination | nuisance | N.Y. Real Prop. Acts. Law § 711(1); N.Y. Real Prop. Law § 216(1)(c) |
| `edu-cure-ny` | Default & Termination | cure-and-eviction-grounds | N.Y. Real Prop. Acts. Law §§ 711(2); N.Y. Real Prop. Law § 216(1)(b); N.Y. Real Prop. Acts. Law § 753(4) |
| `edu-tenant-duties-ny` | Tenant Responsibilities | tenant-statutory-duties | N.Y. Mult. Dwell. Law § 78(1); N.Y. Mult. Resid. Law § 174; N.Y. Mult. Resid. Law § 15(5) |
| `edu-owner-identity-ny` | Disclosures | owner-identity-disclosure | N.Y. Mult. Dwell. Law § 325(1); N.Y. Real Prop. Law § 214(1) |
| `edu-no-double-letting-rule-ny` | Landlord Responsibilities | double-letting | N.Y. Real Prop. Acts. Law § 711(1); N.Y. Real Prop. Law § 223-a |
| `edu-no-dv-lockchange-ny` | Default & Termination | dv-lockchange | N.Y. Real Prop. Law § 227-c; N.Y. Real Prop. Acts. Law § 768(1)(a)(iii) |
| `edu-servicemember-ny` | Default & Termination | servicemember-rights | N.Y. Mil. Law § 310(2); N.Y. Mil. Law § 310(3); N.Y. Mil. Law § 310(1) |
| `edu-abandoned-property-ny` | Default & Termination | abandoned-property | N.Y. Gen. Oblig. Law § 7-108(1-a)(b); N.Y. Real Prop. Acts. Law § 749(2)(a)-(b); N.Y. Real Prop. Acts. Law § 768(1)(a)(iii) |
| `edu-no-mold-disclosure-ny` | Disclosures | mold-disclosure | N.Y. Real Prop. Law § 216(1)(a)(ii); N.Y. Real Prop. Acts. Law § 1308; N.Y. Real Prop. Law § 462 |
| `edu-no-sex-offender-rule-ny` | Disclosures | sex-offender-occupancy | N.Y. Exec. Law § 259-c(14); N.Y. Exec. Law § 296(16) |
| `edu-no-lease-copy-rule-ny` | Notices & General | lease-copy | (see notes) |
| `edu-move-in-inspection-ny` | Security Deposit | condition-inspection | N.Y. Gen. Oblig. Law § 7-108(1-a)(c)-(d) |
| `edu-service-animal-penalty-ny` | Pets | service-animal-denial-penalty | N.Y. Civ. Rights Law § 47(1)-(2); N.Y. Civ. Rights Law § 47-c; N.Y. Exec. Law § 296(14) |
| `edu-no-service-animal-misrep-ny` | Pets | service-animal-misrepresentation | N.Y. Exec. Law § 296(18)(2) |
| `edu-no-fee-transparency-rule-ny` | Rent & Payment | fee-transparency | N.Y. Real Prop. Law § 238-a(1)(a); N.Y. Gen. Oblig. Law § 7-108(1-a)(a); N.Y. Gen. Bus. Law § 349 |
| `edu-no-foreign-ownership-rule-ny` | Other / Miscellaneous | foreign-ownership | N.Y. Real Prop. Law § 10(2); N.Y. Exec. Law § 296(5)(a) |
| `edu-telecom-access-ny` | Landlord Responsibilities | telecom-access | N.Y. Pub. Serv. Law § 228(1) |
| `edu-rent-tax-ny` | Rent & Payment | rent-tax | N.Y. Tax Law § 1105(e)(1); N.Y. Tax Law § 1101(c)(5); L. 2024, ch. 672 |
| `edu-notice-service-ny` | Notices & General | notice-delivery-methods | N.Y. Real Prop. Acts. Law §§ 711(2); N.Y. Real Prop. Law § 232-a; N.Y. Real Prop. Law § 235-e(d) |
| `edu-jury-waiver-ny` | Other / Miscellaneous | jury-waiver | N.Y. Real Prop. Acts. Law § 745(1); N.Y. Real Prop. Law § 259-c |

## 4. Layout and placement (rule 40)

Formatting batteries (§17, run before drafting): bold, conspicuous, type size, underlining, separate document, statutory forms, first page, translation, forfeiture sanctions. Each hit's chapter was checked; only these reach a residential lease:

| Rule | Text it governs | Requirement | Where the library puts it |
|---|---|---|---|
| N.Y. Real Prop. Law § 231-a(1), (3) | Sprinkler notice, every residential lease | 'conspicuous notice in bold face type'; last maintenance and inspection date if a system exists | `sprinkler-disclosure-ny`, whole clause bold (`**` markup); builder must render bold |
| N.Y. Real Prop. Law § 235-bb(1) | Certificate of occupancy notice (real property of 3 or fewer rental units) | 'conspicuous notice in bold face type', 'Prior to executing' the lease; a copy of the certificate satisfies it | `certificate-of-occupancy-notice-ny`, bold; builder should show it before the signature step |
| N.Y. Real Prop. Law § 231-c(1) | Good Cause Eviction Law notice, every initial and renewal lease | verbatim form; 'append to or incorporate into'; no type or placement rule | `good-cause-notice-ny` (section or rider) |
| N.Y. Real Prop. Law § 231-b(2) | Flood paragraph, every residential lease | verbatim; no type or placement rule | `flood-disclosure-ny` |
| N.Y. Civ. Prac. L. & R. 4544 | Whole printed lease | print 'clear and legible' and at least 8 points (5.5 points for upper case), or the small part is inadmissible for the landlord | builder requirement (§10.1); `edu-small-print-ny` |
| N.Y. Gen. Oblig. Law § 5-702(a) | Whole lease | plain language; 'Appropriately divided and captioned by its various sections' | builder's captioned sections; `edu-plain-language-ny` |
| N.Y. Mult. Dwell. Law §§ 15(2) / N.Y. Mult. Resid. Law § 16(2) | Emergency contact list | written notice and specific written consent at each lease or renewal | `emergency-contact-consent-ny` |

Hits checked and excluded: N.Y. Real Prop. Law §§ 227-a(3-a) and 227-b(9) (18-point notices that bind senior housing and care facilities a tenant moves into, not the landlord being left); N.Y. Real Prop. Acts. Law §§ 1303-1304 (foreclosure notices, 14-point); N.Y. Real Prop. Law §§ 265-b, 280-b, 337-b, 339-aa (homeowner, mortgage, land-sale and condominium notices); Banking, Agriculture and other titles. No first-page, signature-line, separate-document or translation rule reaches a residential lease (batteries `fmt-first-page`, `fmt-separate`, `fmt-language`). No two rules claim the same place, so no placement question went to Taylor (rule 40). Omission sanctions that forfeit money: the deposit forfeiture for a late statement (N.Y. Gen. Oblig. Law § 7-108(1-a)(e)) and the rent bar for an unregistered New York City multiple dwelling (N.Y. Mult. Dwell. Law § 325(2)) and for occupation without a certificate (N.Y. Mult. Dwell. Law § 302(1)(b)); none is a lease-text omission.


## 5. Dormant rows resolved (rule 25)

- `late-fee-limit-ny`: Re-verified 2026-10-03 and left inactive. Its figures match N.Y. Real Prop. Law § 238-a(2) (no late fee unless rent unpaid 'within five days of the date it was due'; at most 'fifty dollars or five percent of the monthly rent, whichever is less'), but under the three-bucket test (rule 55) it restates a landlord limit no statute requires in the lease, so it is education, not a clause. The limit now lives in `edu-late-fee-ny`, and the tagged `late-fee` clause carries builder caps on {{late_fee_grace_days}} and {{late_fee_amount}} (NY log §§5, 10; rule 78 successor: `edu-late-fee-ny` plus the builder caps).
- `security-deposit-return-ny-hi`: Re-verified for New York 2026-10-03 and left inactive; New York is answered by `security-deposit-return-ny`, which supersedes the blank-states parent. Its 14-day figure matches N.Y. Gen. Oblig. Law § 7-108(1-a)(e), but it omits New York's pre-move-out inspection notice (N.Y. Gen. Oblig. Law § 7-108(1-a)(d)) and states the rule 'as required by law in these states', which a single-state row should not (NY log §5). Hawaii's part not reviewed.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Option | Basis | Verdict | Row |
|---|---|---|---|
| Building rules made part of the lease | N.Y. Real Prop. Law § 216(1)(b) (rules count only if 'accepted in writing by the tenant or made a part of the lease at the beginning of the lease term') | Offered | `rules-ny` |
| Landlord casualty termination | Left to contract; N.Y. Real Prop. Law § 227 keeps the tenant's exit | Offered | `casualty-termination-ny` |
| Waiving the tenant's casualty exit | N.Y. Real Prop. Law § 227 ('no express agreement to the contrary has been made in writing') | Lawful, declined (leaves tenant paying for an unusable home) | `edu-casualty-ny` |
| Tenant-caused damage (54t) | Every abatement or exit provision checked for its own fault exception: N.Y. Real Prop. Law §§ 235-b(1), 227, N.Y. Real Prop. Acts. Law § 755(1)(c), N.Y. Mult. Dwell. Law §§ 78(1), 80(5), N.Y. Mult. Resid. Law § 174 all have one; N.Y. Real Prop. Law § 223-b(6) (retaliation) has one too; N.Y. Real Prop. Law § 235-a and N.Y. Mult. Dwell. Law § 302-c have none and are left untouched | Offered | `tenant-caused-damage-ny` |
| Illegal-use / criminal-activity clause | N.Y. Real Prop. Law § 231(1); N.Y. Real Prop. Acts. Law §§ 711(5), 715 | Offered | `criminal-activity-ny` |
| Automatic renewal | N.Y. Gen. Oblig. Law § 5-905 (operative only with the landlord's 15-30-day reminder) | Offered | `auto-renewal-ny` |
| Express provision on delivery of possession | N.Y. Real Prop. Law § 223-a ('In the absence of an express provision to the contrary') | Offered (base clause tagged) | `possession-delay` |
| Dishonored-check fee | N.Y. Real Prop. Law § 238-a(2-a)(b) (only 'if such payment, fee, or charge was provided for in the lease') | Offered | `returned-payments-ny` |
| Late fee | N.Y. Real Prop. Law § 238-a(2) caps | Offered (base tagged with builder caps) | `late-fee` |
| E-mail for routine communications | N.Y. State Tech. Law §§ 304-305, 309 | Offered | `electronic-notice-ny` |
| Holdover premium rate | No statutory measure for a good-faith holdover beyond N.Y. Real Prop. Law § 220; N.Y. Real Prop. Law § 229 double rent only after a tenant's notice | Lawful, declined | `edu-holdover-rate-ny` |
| Agreement that rent accepted after expiry creates no month-to-month tenancy | N.Y. Real Prop. Law § 232-c ('unless an agreement either express or implied is made providing otherwise') | Lawful, declined | `edu-holdover-ny` |
| Objectionable-tenant termination clause | N.Y. Real Prop. Acts. Law § 711(1) (maintainable only on proof the tenant is objectionable) | Lawful, declined | `edu-nuisance-ny` |
| Seasonal-use deposit uplift | N.Y. Gen. Oblig. Law § 7-108(4)(a) (lease must expressly state registration, ≤120 days, primary residence) | Lawful, declined (seasonal rentals out of scope) | `edu-deposit-rules-ny` |
| Jury waiver beyond N.Y. Real Prop. Law § 259-c | N.Y. Real Prop. Acts. Law § 745(1); N.Y. Real Prop. Law § 259-c | Lawful for non-injury claims (case law unread), declined | `edu-jury-waiver-ny` |
| Contractual interest on unpaid balances | N.Y. Civ. Prac. L. & R. 5004; N.Y. Gen. Oblig. Law § 5-501 | Lawful within usury limits, declined (acts as a second late charge) | `edu-legal-interest-ny` |
| Cannabis cultivation ban | N.Y. Cannabis Law § 127(2); N.Y. Penal Law § 222.15 | Not offered: likely barred, unsettled | `edu-cannabis-ny` |
| Eviction-fee / legal-fee clause | N.Y. Real Prop. Law § 234-a (no legal or administrative fees without a court order) | Barred: no clause ("n") | `edu-attorney-fees-ny` |
| Statutory waivers (notice to quit, stays, exemptions) | N.Y. Real Prop. Acts. Law § 753(5); N.Y. Real Prop. Law §§ 218, 235-b(2), 238-a(3); no statute supports an exemption waiver | Barred or unsupported: none ("n") | `edu-prohibited-terms-ny` |
| Firearms clause | N.Y. Penal Law § 265.01-d | No statute keys a lease term; not offered | `edu-firearms-ny` |

Deposit transfer opt-out (N.Y. Gen. Oblig. Law § 7-105(2) last sentence) was considered and is not a landlord option: it would only keep the seller liable, and N.Y. Gen. Oblig. Law § 7-108(3) voids waivers of the buyer-liability rules.

### 6.2 Questions asked of Taylor (rule 76)

1. **Scope** (asked in the chat at the start, with the kickoff's recommendation): market-rate statewide; rent-regulated units out with one education row; New York City-only state statutes in scope with the place limit; local law flagged. No answer arrived during the pass, so Claude proceeded on the recommendation (working unattended); `edu-scope-ny` records it. If Taylor wants a different scope, the rows affected are `edu-scope-ny`, `edu-rent-control-ny` and the place notes.
2. **Downloads** (asked in the chat: permission to download bill PDFs into the Downloads folder): no answer arrived; not needed in the end, because the PDFs were parsed in the browser with pdf.js (rule 14) and the other acts were read from the bill pages.

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)

1. Every New York lease carries the Good Cause Eviction Law notice, including leases of exempt units, because N.Y. Real Prop. Law § 231-c binds every 'landlord' in N.Y. Real Prop. Law § 211(2) (`good-cause-notice-ny`).
2. Shared clauses that say the end of the term ends possession are replaced, not tagged (rule 41): `holdover-ny`, `surrender-end-of-term-ny`.
3. `security-deposit-use-ny` drops cleaning as a separate deduction; cleaning a condition that is damage beyond normal wear and tear falls under the damage item, which is how Claude reads the 'repairs or cleaning' in the pre-move-out statement of N.Y. Gen. Oblig. Law § 7-108(1-a)(d) alongside the closed list in N.Y. Gen. Oblig. Law § 7-108(1-a)(b).
4. Prepaid last month's rent is an 'advance' within the one-month cap (`due-at-signing-ny`).
5. `smoking-policy-ny` adopts the Public Health Law's definition of smoking so the cannabis carve-out is limited to smoking.
6. `surrender-end-of-term-ny` sets a 30-day notice-and-hold procedure for belongings, since New York has no statute (rule 54: a measure the statute does not set).
7. `permitted-occupants-ny` and `guest-policy-ny` restate the roommate law's limits so the clauses cannot be read to restrict occupancy (N.Y. Real Prop. Law § 235-f(2)).
8. The chore clauses (`landscaping-irrigation`, `snow-removal`) are tagged for every dwelling because New York has no separate-writing rule (rule 48), with the multiple-dwelling carve-out in the note.
9. `edu-tenant-death-ny` tells landlords to follow N.Y. Real Prop. Law § 236-a for older periodic tenancies too (rule 37).
10. First month's rent collected at signing, plus a security deposit of up to one month's rent, does not exceed the one-month cap on deposits and advances: the first month's rent is the rent for that month, not money held as security or applied to a later payment (`due-at-signing-ny`; Claude's reading of N.Y. Gen. Oblig. Law §§ 7-103(1) and 7-108(1-a)(a); Attorney General guidance not read, NY log §1.4). A prepaid last month's rent does count toward the cap.
11. Pet rent starts with the second month of the Term, so that nothing for the pet is collected at the start of the tenancy (N.Y. Real Prop. Law § 238-a(1)(a)); unpaid pet rent is not 'rent' for a summary proceeding (`pet-policy-ny`).


## 7. Open items (none blocking)

1. N.Y. Gen. Bus. Law §§ 352-e and 352-eeee print a revision of 2025-11-07, but no 2025-26 signed bill in the screen lists them; the amending act was not identified. Boundary: the signed-bill listing's "Laws Affected" lines. Only `edu-conversion-ny` cites them, at a high level.
2. N.Y. Tax Law §§ 1101 and 1105 print 2026 revisions (2026-06-19, 2026-06-05) whose amending acts were not identified; `edu-rent-tax-ny` relies on the text as printed. Local occupancy taxes (the N.Y. Tax Law § 1202 series) are flagged, not read (rule 3).
3. N.Y. Pub. Serv. Law §§ 33 and 34 (utility notices to tenants of multiple and two-family dwellings) were not read; `edu-utility-shutoff-ny` cites them only as the payments N.Y. Real Prop. Law § 235-a(1) lets tenants offset. N.Y. Pub. Serv. Law § 228 was read and answers topic `telecom-access` (`edu-telecom-access-ny`).
4. Local law (rule 3): DHCR's list of Good Cause opt-in localities and their small-landlord and rent thresholds; New York City Administrative Code (Housing Maintenance Code access, harassment, lead (Local Law 1 of 2004), window guards (N.Y.C. Health Code § 131.15), smoking-policy disclosure, bed bug disclosure, broker fees (FARE Act), short-term rentals (Local Law 18 of 2022), Fair Chance for Housing); local rental registration and inspection laws; local towing and sidewalk snow laws.
5. Administrative rules not read: 9 NYCRR (rent regulation), 16 NYCRR Part 96 (submetering), 19 NYCRR (Uniform Fire Prevention and Building Code), Division of Human Rights rules.
6. Case-law questions in §1.4.
7. Abandoned Property Law categories for uncashed deposit refund checks (beyond N.Y. Aband. Prop. Law § 1317) and the historical abolition of distress for rent were not traced.
8. The Good Cause Eviction Law's tenant definition (N.Y. Real Prop. Law § 211(4)) and family members who lived with a deceased tenant: not resolved.
9. N.Y. Civ. Prac. L. & R. 3218 (confession of judgment) and the Lien Law were not read.
10. Resolved during the pass, recorded for the method: the independent check found that the saved texts of the eight amended bills (A. 56-B, A. 4040-A, S. 952-B, S. 885-C, A. 1029-C, A. 2134-A, A. 5730-B, A. 9166-B) were their introduced prints, because the bill page carries every print and the extractor took the first. All eight were re-fetched as the named print, hash-matched and saved (the earlier files kept as `.introduced-print.txt`); three effective dates in the table above changed as a result (ch. 436, ch. 465, ch. 631), and the rows citing them were corrected (§13). The chapter numbers and signing dates come from the signed-bill listing (`sources/ny-signed-bills-2023-2026.json`) and the bill pages' action lists.
11. N.Y. Mult. Resid. Law § 305-c (tenant payment for heating oil) prints a revision of 2026-05-01 whose amending act was not identified; `edu-no-repair-deduct-ny` cites only its long-standing rule that such payments are deductible from rent.
12. N.Y. Penal Law § 222.15(9): home cultivation (subdivisions 1-5) takes effect only once the Office of Cannabis Management issues home-cultivation regulations; whether it has was not checked. `edu-cannabis-ny` states the condition.
13. Not read: N.Y. Pub. Health Law §§ 1373 and 1377 (lead abatement orders; `edu-lead-ny` no longer relies on them) and N.Y. Penal Law § 250.45 (unlawful surveillance; `edu-no-camera-rule-ny` names it as not reviewed).


## 8. Integrity checks on the delta

| Check | Result | Detail |
|---|---|---|
| Header identical to master (17 columns) | PASS | id,group,title,states,is_active,supersedes,bodyText,rule_typ |
| Every record has 17 fields | PASS |  |
| Record terminators are CRLF | PASS | 179 CRLF for 179 records |
| Ids unique in delta | PASS | 178 rows |
| New ids absent from master | PASS | 137 new |
| Changed rows differ from master only in states, notes, last_checked | PASS |  |
| Tagged rows: states = master + NY | PASS | 39 tagged |
| Changed rows keep master notes as prefix and add an NY segment | PASS |  |
| Dormant rows stay inactive | PASS | late-fee-limit-ny, security-deposit-return-ny-hi |
| last_checked = 2026-10-03 on every delta row | PASS |  |
| New rows: states NY, active, VERIFIED, effective_from 2026-10-03, notes start "NY:" | PASS |  |
| Every delta row has a verification_status | PASS |  |
| Every supersedes target exists in master | PASS | returned-payments-ny→returned-payments, security-deposit-use-ny→security-deposit-use, security-deposit-return-ny→security-deposit-return, existing-condition-ny→existing-condition, due-at-signing-ny→due-at-signing, permitted-occupants-ny→permitted-occupants, guest-policy-ny→guest-policy, no-sublet-as |
| Groups are existing app groups | PASS |  |
| content_type valid | PASS |  |
| rule_type valid | PASS |  |
| Clause basis in the three buckets; REQUIRED_DISCLOSURE carries an N.Y. citation | PASS | 29 clauses |
| Education rows have blank basis and RECOMMENDED rule_type | PASS | 108 education rows |
| topic_key present on every row | PASS |  |
| New topic keys (rule 58) | INFO | certificate-of-occupancy-disclosure, good-cause-notice, lease-type-size, sprinkler-disclosure |
| Variables: only kickoff variables plus {{nsf_fee}} (listed in §10.1) | PASS | monthly_rent, nsf_fee, occupant_names, pet_rent_amount, security_deposit, tenant_names |
| No bracket printed next to a variable (rule 60) | PASS |  |
| Every `row` pointer in NY text names an existing row (rule 63) | PASS | [] |
| Every "NY log §N" pointer names a log section | PASS | [] |
| No unfilled battery placeholder | PASS |  |
| No continuation citation left without its law name (rule 22; kickoff format) | PASS | [] |
| Session laws in the kickoff form (L. 2019, ch. 36), none as "N.Y. Laws ch." | PASS |  |
| Every single-quoted passage in NY notes matches saved source text (rule 59) | PASS | [] |
| good-cause-notice-ny body equals the N.Y. Real Prop. Law § 231-c form word for word | PASS | 17780 chars |
| flood-disclosure-ny carries the N.Y. Real Prop. Law § 231-b(2) paragraph verbatim | PASS |  |
| Every new row records its basis in notes (rule 79) | PASS |  |
| Delta composition | INFO | 178 rows: 39 tagged shared rows, 29 new clauses, 108 new education rows, 2 dormant rows re-verified |
| Delta file SHA-256 | INFO | f46d122b3d7f5b3218e99b50ced56970bbac28ac8c1b9555078e3029e75a0eb8 |


## 9. Propagation notes (rule 62)

None. No shared clause's `bodyText`, title, rule_type or basis was edited. The 39 tagged rows changed only by adding `NY` to `states`, appending a `| NY: …` note and setting `last_checked`; the two dormant rows changed only by an appended `NY:` note and `last_checked`.


## 10. Findings for other states or the product (flagged, not fixed)

### 10.1 Builder requirements and caps (backlog M.13)
1. `late-fee` in New York: {{late_fee_grace_days}} at least 5; {{late_fee_amount}} at most the lesser of $50 or 5% of {{monthly_rent}} (N.Y. Real Prop. Law § 238-a(2)).
2. New variable **{{nsf_fee}}** (`returned-payments-ny`): at most the greater of $20 or the landlord's actual returned-check cost; above $20 the landlord must substantiate on request (N.Y. Real Prop. Law § 238-a(2-a)).
3. Deposits: {{security_deposit}} + {{pet_deposit}} + any prepaid rent or other advance at most {{monthly_rent}} (N.Y. Gen. Oblig. Law § 7-108(1-a)(a)).
4. Screening fee: at most the lesser of $20 or actual cost; no other fee before or at the start of the tenancy (N.Y. Real Prop. Law § 238-a(1)).
5. Type size: render New York leases at 8 points or larger (5.5 points for all-capital text) (N.Y. Civ. Prac. L. & R. 4544).
6. Bold: `sprinkler-disclosure-ny` and `certificate-of-occupancy-notice-ny` use `**` markup and must print bold; the certificate notice must reach the tenant before signing.
7. `good-cause-notice-ny` body is the verbatim N.Y. Real Prop. Law § 231-c form with its blanks; line breaks were added between items for readability, wording unchanged. The builder may fill the street, unit, city, state and ZIP blanks from {{property_address}} if it can do so without altering the text.
8. `emergency-contact-consent-ny` needs a per-occupant consent block at each lease, renewal or amendment.

### 10.2 Legal watch
1. Good Cause Eviction Law (N.Y. Real Prop. Law art. 6-A) and N.Y. Real Prop. Law § 231-c repealed June 15, 2034; N.Y. Real Prop. Law § 226-c(1)(a) switches to its pre-2024 version that day; N.Y. Real Prop. Acts. Law § 711(2)'s Good Cause sentence also lapses.
2. N.Y. Real Prop. Acts. Law § 749-a (New York City marshals' e-filing) repeals June 30, 2028.
3. N.Y. Exec. Law § 296(5-a) (disparate impact, from December 19, 2025) and the FAIR Business Practices Act (N.Y. Gen. Bus. Law § 349, from February 17, 2026) are new and untested.
4. N.Y. State Tech. Law § 307(1) prints two versions (one effective until December 12, 2027); not relied on.

### 10.3 Cross-state observations
1. New York is the first state in the library with a statute reaching coordinating rent-pricing software (N.Y. Gen. Bus. Law § 340-b); other states' `algorithmic-rent-setting` rows say no state statute exists in their state, which is unaffected.
2. N.Y. Civ. Prac. L. & R. 4544 is a whole-lease type-size rule found only by the rule 40 battery over the civil practice law; other states' procedural codes may hide similar rules.
3. Two sections share one number in the General Business Law (N.Y. Gen. Bus. Law § 390-e, keyless security devices; N.Y. Gen. Bus. Law § 390-e*2, skimming notice); citations need the heading to disambiguate.

### 10.4 Local-law flags (rule 3)
See §7 item 4.

### 10.5 Stale cross-references (rule 77)
None found in the sections relied on: N.Y. Real Prop. Law § 238-a(2-a)(c) points to N.Y. Gen. Oblig. Law § 5-328 (present, amended by the same act); N.Y. Real Prop. Acts. Law § 711(2) and N.Y. Real Prop. Law § 226-c point to N.Y. Real Prop. Law § 231-c (present); N.Y. Real Prop. Law § 235-a points to N.Y. Pub. Serv. Law §§ 33, 34, 116 (not read, §7); N.Y. Cannabis Law § 127 and N.Y. Pub. Health Law § 1399-n(8) point to N.Y. Penal Law § 222.00 (present).


## 11. Deliverables

- `lease-clauses-NY-delta.csv`: all 17 columns, same header and CRLF record endings as the master.
- `lease-clause-decision-log-NY.md`: this file.
Working files (corpus batches, battery log, acts, court rules, row modules and scripts) stay in the session workspace.


## 12. Kickoff leads — what each turned out to be

1. Core law: N.Y. Real Prop. Law art. 7 (N.Y. Real Prop. Law §§ 220-238-a) and art. 6-A, N.Y. Real Prop. Acts. Law art. 7, N.Y. Gen. Oblig. Law §§ 7-101 to 7-109 read whole; Multiple Dwelling and Multiple Residence Law sections relied on read section-open (§14).
2. HSTPA (L. 2019, ch. 36): read as enrolled; its fee, deposit, late-fee, notice, mitigation, retaliation and stay changes are the current compiled text the rows cite.
3. Fees and deposits: N.Y. Real Prop. Law § 238-a (screening fee, late fee, NSF fee as amended in 2025) and N.Y. Gen. Oblig. Law § 7-108 (cap, refund, inspections) drive `due-at-signing-ny`, `security-deposit-use-ny`, `security-deposit-return-ny`, `existing-condition-ny`, `returned-payments-ny`, `deposit-bank-notice-ny`; cap shapes in §10.1.
4. Notices: N.Y. Real Prop. Law § 235-e(d), N.Y. Real Prop. Acts. Law § 711(2), N.Y. Real Prop. Law § 226-c and N.Y. Real Prop. Law §§ 232-a/232-b in `edu-rent-demand-ny`, `edu-rent-increase-notice-ny`, `edu-termination-notice-ny`; shared clauses checked (§19).
5. Good Cause Eviction Law: `edu-for-cause-eviction-ny` (rule 41b row), `good-cause-notice-ny`; opt-in list flagged.
6. Habitability and non-waivable terms: `edu-habitability-ny`, `edu-mitigation-ny`, `edu-attorney-fees-ny`, `edu-prohibited-terms-ny`, `edu-exculpation-ny`; N.Y. Gen. Oblig. Law § 5-321 led to the no-disclaimer variants.
7. Required disclosures: sprinkler and flood, plus the Good Cause notice, certificate of occupancy notice, emergency contact consent and smoke-detector duties; type size (N.Y. Civ. Prac. L. & R. 4544).
8. Roommates and assignment: `permitted-occupants-ny`, `guest-policy-ny`, `no-sublet-assign-ny`.
9. DV, retaliation, discrimination: `edu-dv-termination-ny`, `edu-dv-eviction-ny`, `edu-dv-confidentiality-ny`, `edu-retaliation-ny`, `edu-fair-housing-ny`, `edu-source-of-income-ny`, `edu-assistance-animals-ny`.
10. Eviction procedure and court rules: `edu-eviction-process-ny`, `edu-eviction-stay-ny`, `edu-eviction-records-ny`, `edu-post-eviction-property-ny`; Parts 208, 210, 212, 214 and 216 read whole; no federal pre-filing condition.
11. Tenant-chore split: none in New York (no separate-writing rule); chore clauses tagged (§19, rule 48).
12. 2024-2026 session laws: §1.2.
13. Dormant rows: §5.


## 13. Independent check

Four agents that had not seen the drafting checked the delta against the saved sources only (statute sections through a lookup script over `sources/corpus/`, enrolled acts, court rules, the real lease), each on its own slice: A1, the new clauses and the two dormant rows; A2, the tagged shared rows; B and C, the education rows in two halves. They checked quotations, statements of law, citation form and clause legality. The agents could not write files, so their tables came back as text and are saved as `check/findings-round1` with the resolution of each.

Round 1 reported 82 findings (11 ERROR, 52 WARN, 19 NOTE); grouped by row they are the 76 lines below. Every ERROR and WARN was fixed or answered; no finding was rejected.

| Slice | Row | Severity | Finding | Resolution |
|---|---|---|---|---|
| A1 | `tenant-caused-damage-ny` | ERROR | No-abatement sentence reached negligence and guests, wider than N.Y. Real Prop. Law § 235-b(1)'s misconduct exception; notes said the clause 'waives nothing'. | Fixed: abatement sentence now uses N.Y. Real Prop. Law § 235-b(1)'s own exception; notes rewritten (N.Y. Real Prop. Law § 227 narrowing stated as a written agreement the statute allows). |
| A1 | `criminal-activity-ny` | ERROR | Voiding sentence attributed 'any illegal purpose' to N.Y. Real Prop. Law § 231, which voids only for illegal trade, manufacture or business. | Fixed: voiding sentence limited to N.Y. Real Prop. Law § 231(1)'s words; wider illegal use is a lease breach. |
| A1 | `certificate-of-occupancy-notice-ny` | WARN | Trigger said 'owner has three or fewer units'; statute counts units in the real property. N.Y. Mult. Dwell. Law § 302 sentence dropped the place limit and the N.Y. Mult. Dwell. Law § 301 condition. | Fixed both. |
| A1 | `due-at-signing-ny` | WARN | 'Not credited against Rent' clashed with prepaid rent as an advance; screening fee lacked N.Y. Real Prop. Law § 238-a(1)(b)'s waiver and copy-and-receipt conditions; pointed to a non-existent section name. | Fixed: fee cap and both conditions written into the clause; credit sentence rewritten. |
| A1 | `permitted-occupants-ny` | WARN | Two-tenant cap could be read against the occupants the clause itself names. | Fixed: statutory allowance is in addition to named persons. |
| A1 | `no-sublet-assign-ny` | WARN | Flat short-term-rental ban cut down the N.Y. Real Prop. Law § 226-b(2)(a) sublet right in 4+ unit buildings. | Fixed: ban limited to buildings of 3 or fewer units; in larger buildings a short stay is a sublet needing consent. |
| A1 | `pet-policy-ny` | WARN | Indemnity carve-out omitted agents, servants and employees (N.Y. Gen. Oblig. Law § 5-321). | Fixed. |
| A1 | `holdover-ny` | WARN | Any accepted rent created a month-to-month tenancy, contrary to N.Y. Real Prop. Acts. Law § 711(1) after a proceeding starts; use-and-occupancy not addressed. | Fixed. |
| A1 | `casualty-termination-ny` | WARN | Notes said the clause keeps the statutory exit; it narrows it. | Fixed notes. |
| A1 | `security-deposit-use-ny` | WARN | Notes said N.Y. Gen. Oblig. Law § 7-108 does not apply in listed facilities; only N.Y. Gen. Oblig. Law § 7-108(1-a) is excluded. | Fixed. |
| A1 | `surrender-end-of-term-ny` | WARN | Notes overstated N.Y. Real Prop. Acts. Law § 749(2). | Fixed. |
| A1 | `tenant-caused-damage-ny` | NOTE | Quote attributed to three sections; typo 'rule 54t'. | Fixed. |
| A1 | `good-cause-notice-ny` | NOTE | Bare '§ 7(a)'. | Fixed. |
| A1 | `emergency-contact-consent-ny` | NOTE | Cite N.Y. Mult. Resid. Law § 4(33). | Fixed. |
| A1 | `electronic-notice-ny` | NOTE | ESRA range should be N.Y. State Tech. Law §§ 302-309; no variation section. | Fixed. |
| A2 | `parking-vehicle-rules` | ERROR | Tag unsafe: tag/decal/card charge could fall at the start of the tenancy, barred by N.Y. Real Prop. Law § 238-a(1)(a). | Untagged; new `parking-vehicle-rules-ny` (first issue free, replacement charge only). |
| A2 | `acceptable-payment-methods-nj` | WARN | Unlimited change of methods could go electronic-only (N.Y. Real Prop. Law § 235-g(1)); limit only in the note. | Untagged; new `acceptable-payment-methods-ny`. |
| A2 | `default-by-tenant` | WARN | Fee note conflated 'legal proceedings' with a court order; costs and default-judgment bar not addressed; Good Cause summary dropped conditions; deposit use for late fees not addressed. | Fixed note (three findings). |
| A2 | `possession-delay` | WARN | Landlord-fault delays still fall under N.Y. Real Prop. Law § 223-a. | Fixed note. |
| A2 | `keys` | WARN | Lock right stated for every multiple dwelling; N.Y. Mult. Dwell. Law § 51-c exclusions and the Multiple Dwelling Law place limit missing. | Fixed note. |
| A2 | `no-alterations` | WARN | Same as keys. | Fixed note. |
| A2 | `rental-application-accuracy` | WARN | Overstated the inquiry ban; exemptions missing. | Fixed note. |
| A2 | `landlords-access` | WARN | Showing ground limited to buyers, mortgagees and others with a legitimate interest. | Fixed note. |
| A2 | `landscaping-irrigation` | WARN | Stated reason conflicted with N.Y. Mult. Dwell. Law § 80(1). | Fixed note; tag stands. |
| A2 | `inspection-rights` | WARN | Tenant-requested pre-move-out inspection timing omitted. | Fixed note. |
| A2 | `default-by-tenant` | NOTE | Pin cites N.Y. Real Prop. Law § 234(1) and N.Y. Real Prop. Law § 234-a(a). | Fixed. |
| A2 | `utilities-paid-by-landlord` | NOTE | Loose paraphrase of N.Y. Real Prop. Law § 235(1). | Fixed. |
| A2 | `snow-removal` | NOTE | 'Usually fall on the owner' had no source. | Fixed. |
| B | `edu-rent-control-ny` | ERROR | Quote attributed to N.Y. Real Prop. Law § 216(1)(j) came from the N.Y. Real Prop. Law § 231-c form. | Fixed: N.Y. Real Prop. Law § 216(1)(j) quoted verbatim. |
| B | `edu-tenant-repair-remedies-ny` | ERROR | Article 7-D proceeding also barred in Nassau and Suffolk. | Fixed. |
| B | `edu-eviction-process-ny` | ERROR | '2025 N.Y. Laws ch. 137' should be a 2026 chapter. | Fixed: L. 2026, ch. 137 (A. 10338 of the 2025-2026 session). |
| B | `edu-tenant-repair-remedies-ny` | WARN | Article 7-C county exclusions missing. | Fixed. |
| B | `edu-for-cause-eviction-ny` | WARN | Owner-use ground missing principal residence, no-other-unit and clear-and-convincing conditions; 'disabled person' is defined. | Fixed. |
| B | `edu-unauthorized-occupant-ny` | WARN | 10-day notice to quit omitted; 'lawfully' omitted. | Fixed (two findings). |
| B | `edu-deposit-rules-ny` | WARN | Cleaning statement conflicted with N.Y. Gen. Oblig. Law § 7-108(1-a)(d); pre-move-out inspection steps missing. | Fixed (two findings). |
| B | `edu-deposit-interest-ny` | WARN | Bank notice applies to every banked deposit. | Fixed. |
| B | `edu-eviction-stay-ny` | WARN | Objectionable-holdover exception missing. | Fixed. |
| B | `edu-fair-housing-ny` | WARN | Senior exemption covers age and familial status only. | Fixed. |
| B | `edu-assistance-animals-ny` | WARN | Pet-rule waiver stated as law. | Fixed: labelled as Claude's reading. |
| B | `edu-prohibited-terms-ny` | WARN | N.Y. Real Prop. Law § 237 makes a no-children clause an offense; it does not void it. | Fixed. |
| B | `edu-security-devices-ny` | WARN | Intercom duty limited to post-1968 class A buildings of 8+ apartments. | Fixed. |
| B | `edu-eviction-process-ny` | WARN | Only the notice of petition is a mandatory form. | Fixed. |
| B | `edu-holdover-ny` | WARN | N.Y. Real Prop. Law § 232-c applies only after a term longer than one month. | Fixed. |
| B | `edu-waiver-by-acceptance-ny` | WARN | Same; N.Y. Real Prop. Acts. Law § 711(3) taxes rule. | Fixed. |
| B | `edu-landlord-entry-ny` | NOTE | Mention the 48-hour deposit inspection notice. | Fixed. |
| B | `edu-heat-ny` | NOTE | The Multiple Dwelling Law's test is cities of 325,000 or more. | Fixed. |
| B | `edu-habitability-ny` | NOTE | Heat duty is Multiple Dwelling Law only. | Fixed. |
| B | `edu-smoke-co-detectors-ny` | NOTE | 'Every dwelling unit' overstated N.Y. Exec. Law § 378(5-b)(a). | Fixed. |
| B | `edu-rent-demand-ny` | NOTE | Cite N.Y. Real Prop. Acts. Law § 711(2)'s own effective note; service sequence. | Fixed. |
| B | `edu-deposit-penalty-ny` | NOTE | N.Y. Gen. Oblig. Law § 7-109 reaches any violation. | Fixed. |
| B | `edu-security-devices-ny` | NOTE | Unclosed parenthesis. | Fixed. |
| B | `edu-tenant-repair-remedies-ny` | NOTE | Bare section number for N.Y. Real Prop. Acts. Law § 797-a. | Fixed. |
| B | (several) | NOTE | Mixed session-law citation forms. | Fixed: every session law now in the kickoff form 'L. 2019, ch. 36', rows and log. |
| B | (several) | NOTE | Acts not saved (L. 2024 ch. 56 parts HH and II, L. 2019 ch. 36 part M, others): chapter numbers and dates unverifiable from disk. | No change: read on nysenate.gov during the pass (NY log §1.2); recorded. |
| C | `edu-consumer-protection-ny` | ERROR | 'Without showing they are consumer-oriented' relied on N.Y. Gen. Bus. Law §§ 348 and 349(b)(3), both repealed by L. 2026, ch. 94 before taking effect. | Fixed body and notes. |
| C | `edu-short-term-rental-ny` | ERROR | Effective date was the 120th day; L. 2025, ch. 99, § 27 made it the 275th. Saved S. 885 text is the introduced version, not the chaptered S. 885-C. | Fixed; NY log §1.2 and §7 record the source gap. |
| C | `edu-abandoned-property-ny` | ERROR | N.Y. Real Prop. Acts. Law § 749(2) does not govern belongings after execution. | Fixed. |
| C | `edu-no-camera-rule-ny` | ERROR | N.Y. Gen. Bus. Law § 395-b excludes private dwellings. | Fixed. |
| C | `edu-tenant-duties-ny` | ERROR | Quote verbatim only for N.Y. Mult. Dwell. Law § 78(1). | Fixed. |
| C | `edu-tenant-duties-ny` | WARN | Misconduct; repair violation; N.Y. Mult. Dwell. Law § 68(5)'s class B and SRO exclusion. | Fixed. |
| C | `edu-no-repair-deduct-ny` | WARN | Heating-oil deduction and Good Cause vacate-order cure contradict 'no statute'. | Fixed. |
| C | `edu-lead-ny` | WARN | Abatement-order claim rested on unsaved sections. | Fixed: claim dropped; sections marked not read. |
| C | `edu-short-term-rental-ny` | WARN | Registry and local-ban exclusions; host duties wait for the registry. | Fixed. |
| C | `edu-cannabis-ny` | WARN | Household 6/6 cap and the OCM-regulation condition missing. | Fixed; regulation status added to NY log §7. |
| C | `edu-servicemember-ny` | WARN | Landlord's court application; proration limited to non-monthly leases. | Fixed. |
| C | `edu-foreclosure-ny` | WARN | Qualifying-lease and subsidy conditions missing. | Fixed. |
| C | `edu-nuisance-ny` | WARN | Good Cause grounds stated generally; 'substantially' dropped. | Fixed. |
| C | `edu-notice-service-ny` | WARN | Posting only after no one can be found; landlord replies under N.Y. Real Prop. Law §§ 236, 236-a by registered or certified mail. | Fixed. |
| C | `edu-no-fee-transparency-rule-ny` | WARN | Ignored statutory payments such as the deposit. | Fixed. |
| C | `edu-statutory-forms-ny` | WARN | Good Cause notice with rent increases of 5% or more only. | Fixed. |
| C | `edu-knowing-use-ny` | WARN | Owner-occupied exemption and bona fide condition complaint missing. | Fixed. |
| C | `edu-sale-management-change-ny` | WARN | N.Y. Real Prop. Law § 216(1)(f) creates no access right. | Fixed. |
| C | `edu-no-landlord-lien-ny` | WARN | N.Y. Real Prop. Acts. Law § 768 wording; N.Y. Real Prop. Law § 231(4) exempt-property pledge omitted. | Fixed. |
| C | `edu-sale-management-change-ny` | NOTE | Cite N.Y. Mult. Dwell. Law § 325(2). | Fixed. |
| C | `edu-small-print-ny` | NOTE | 'Size rules' illustrated by bold-type rules. | Fixed. |
| C | `edu-firearms-ny` | NOTE | Offense not limited to licensed carriers. | Fixed. |

Items the checkers could not verify from disk and did not count: the `late-fee` tag depends on the builder's caps (§10.1, not in the saved sources); the base clauses' 'not liable' sentences behind four tagged variants; chapter numbers and signing dates of acts read on nysenate.gov but saved without their action lists.

Round 2: three agents re-checked the 74 rows edited after round 1 (rule 80). They reported 2 ERROR, 32 WARN and 38 NOTE findings; both ERRORs came from the script that writes out continuation citations (rule 22), which had expanded two bare section numbers to the wrong law. That led to a hand review of every expansion whose section number exists in more than one law. The same round showed that eight saved bill texts were introduced prints, not the amended prints the log cited; all eight were re-fetched (§1.2, §7 item 10).

| Round | Row | Severity | Finding | Resolution |
|---|---|---|---|---|
| R2-A | `tenant-caused-damage-ny` | ERROR | The round-1 rewrite's continuation cite N.Y. Real Prop. Law § 227 was expanded by script to the wrong law (Multiple Residence Law). | Fixed: written out as N.Y. Real Prop. Law § 227; every script expansion where a section number exists in more than one law was then reviewed by hand (85 of 200; one more wrong expansion found, a bill section read as N.Y. Real Prop. Law § 10, fixed). |
| R2-B2 | `edu-smoke-co-detectors-ny` | ERROR | Same script-expansion fault: N.Y. Exec. Law § 378 expanded to the Multiple Residence Law. | Fixed: N.Y. Exec. Law § 378. |
| R2-A | `returned-payments-ny` | WARN | Saved A. 56-B text was the introduced print; money orders, cashier's and certified checks are excluded by N.Y. Gen. Oblig. Law § 5-328(3)(b). | Fixed: exclusion added; A. 56-B print re-fetched (it reads 'whichever is greater', matching the compiled section). |
| R2-A | `good-cause-notice-ny` | WARN | L. 2024, ch. 56 quotations not found in sources/acts. | No change: the enrolled act is saved as sources/ny-session-law-L2024-ch56-S8306C.txt (the checker looked only in sources/acts). |
| R2-A | `due-at-signing-ny` | WARN | 'Only' list conflicted with pet deposit, prepaid rent and first month's pet rent. | Fixed. |
| R2-A | `pet-policy-ny` | WARN | Pet-rent reasoning did not cover the first month's pet rent. | Fixed: same reading as due-at-signing-ny, labelled. |
| R2-A | `casualty-termination-ny` | WARN | Flat proportional abatement could cap warranty rights; clashed with the tenant-fault rule. | Fixed. |
| R2-A | `criminal-activity-ny` | WARN | Cannabis carve-out dropped N.Y. Cannabis Law § 127(2)(a)-(b) exceptions. | Fixed. |
| R2-A | `keys` | WARN | N.Y. Real Prop. Acts. Law § 768 paraphrased too narrowly; re-keying. | Fixed. |
| R2-A | `snow-removal` | WARN | Cited sections do not mention snow. | Fixed: labelled as Claude's reading, aligned with landscaping-irrigation. |
| R2-A | `parking-vehicle-rules-ny` | WARN | N.Y. Veh. & Traf. Law § 1210(c) conditions dropped. | Fixed (with the NOTE items: actual cost, N.Y. Real Prop. Acts. Law § 768 labelled, accommodation). |
| R2-A | (seven rows) | NOTE | default-by-tenant wording; criminal-activity N.Y. Real Prop. Acts. Law § 715 200 feet; casualty scope; emergency-contact Multiple Residence Law scope; inspection-rights steps; landscaping N.Y. Mult. Dwell. Law § 80(5) exception; pet-policy 'or resulting from'; permitted-occupants 'in writing'. | Fixed. |
| R2-B1 | `edu-assistance-animals-ny` | WARN | Documentation permission stated without a New York source. | Fixed: attributed to federal guidance, not reviewed. |
| R2-B1 | `edu-consumer-protection-ny` | WARN | 'or knowingly' and discretionary fees. | Fixed. |
| R2-B1 | `edu-deposit-interest-ny` | WARN | In-state bank rule applies to every banked deposit. | Fixed. |
| R2-B1 | `edu-deposit-rules-ny` | WARN | Rent-controlled exemption missing from body; S. 952-B saved text did not match ch. 436. | Fixed; S. 952-B print re-fetched: effective on the 30th day, for leases entered on or after (log §1.2 corrected). |
| R2-B1 | `edu-eviction-process-ny` | WARN | 14-day demand and every petition must carry the N.Y. Real Prop. Law § 231-c notice. | Fixed. |
| R2-B1 | `edu-fair-housing-ny` | WARN | Discriminatory ad ends the exemption. | Fixed. |
| R2-B1 | `edu-firearms-ny` | WARN | Tenant-consent statement unsupported. | Fixed. |
| R2-B1 | `edu-habitability-ny` | WARN | 'Misconduct' dropped. | Fixed. |
| R2-B1 | (twelve rows) | NOTE | bed-bug order; cannabis pin cite; deposit-penalty scope; deposit-rules co-op and aggregation; for-cause written notice; heat population fact; knowing-use wording; fair-housing vouchers cite; signing dates not in saved bill texts. | Fixed, except the signing dates, which come from the saved signed-bill listing. |
| R2-B2 | `edu-no-landlord-lien-ny` | WARN | Round-1 fix added unsupported 'holding' and dropped N.Y. Real Prop. Acts. Law § 768's occupant condition. | Fixed. |
| R2-B2 | `edu-no-repair-deduct-ny` | WARN | Heating-oil right and N.Y. Real Prop. Law § 216(1)(d) cure misstated. | Fixed. |
| R2-B2 | `edu-retaliation-ny` | WARN | Presumption scope overstated. | Fixed. |
| R2-B2 | `edu-sale-management-change-ny` | WARN | Registration place limit. | Fixed. |
| R2-B2 | `edu-short-term-rental-ny` | WARN | Own-registry exclusion is only for registries existing at the effective date. | Fixed; S. 885-C print re-fetched and the source-gap note replaced. |
| R2-B2 | `edu-tenant-death-ny` | WARN | N.Y. Real Prop. Law § 236-a applies to leases made or renewed after its effective date. | Fixed. |
| R2-B2 | `edu-tenant-duties-ny` | WARN | N.Y. Mult. Resid. Law § 15(5) duty omitted. | Fixed. |
| R2-B2 | `edu-tenant-repair-remedies-ny` | WARN | N.Y. Real Prop. Acts. Law § 755 stay described too narrowly; rent deposit condition. | Fixed. |
| R2-B2 | `edu-servicemember-ny` | WARN | Occupancy condition of N.Y. Mil. Law § 310(1)(b). | Fixed. |
| R2-B2 | (nine rows) | NOTE | no-camera (N.Y. Penal Law § 250.45 is saved); fee-transparency pin; nuisance repetition; rent-control laws; rent-demand weekly rent and under-door service; small-print cites; tenant-screening exception; tag-name suffixes; unauthorized-occupant act. | Fixed (N.Y. Penal Law § 250.45 read and described); tag keys are the library's existing ids; the 2024 act is saved in sources/. |

Round 3: two agents re-checked the 44 rows edited after round 2. No ERROR; 6 WARN, 9 NOTE.

| Round | Row | Severity | Finding | Resolution |
|---|---|---|---|---|
| R3-A | `returned-payments-ny` | WARN | A fixed {{nsf_fee}} could exceed the per-check cap (greater of $20 or that check's actual costs). | Fixed: cap written into the clause. |
| R3-A | `keys` | WARN | Re-keying charge for any 'replacement' could exceed the N.Y. Real Prop. Law § 235-i copy cap. | Untagged; new `keys-ny` (copy cap; re-keying only for lost, stolen or unreturned keys; new keys with any re-keying). |
| R3-A | casualty-termination-ny / tenant-caused-damage-ny | WARN | 'Caused' versus 'fault' contradicted between the two rows. | Fixed: tenant-caused-damage-ny now uses fault or neglect. |
| R3-A | pet-policy-ny / due-at-signing-ny | WARN | First month's pet rent at the start relied on an unaddressed reading (pet rent is not 'rent' under N.Y. Real Prop. Acts. Law § 702(1)). | Fixed: pet rent starts with the second month; due-at-signing-ny no longer lists it. |
| R3-A | (four rows) | NOTE | due-at-signing reasoning and cumulative check fee; landscaping quote truncated; returned-payments act description; default-by-tenant paraphrase. | Fixed. |
| R3-B | `edu-servicemember-ny` | WARN | Round-2 fix overstated dependents-only occupancy. | Fixed. |
| R3-B | `edu-tenant-repair-remedies-ny` | WARN | Notes did not cite N.Y. Real Prop. Acts. Law § 755(1)(b) and N.Y. Real Prop. Acts. Law § 755(2). | Fixed. |
| R3-B | (four rows) | NOTE | eviction-process four cities; no-camera purpose element; retaliation judgment prong; tenant-death 10-day request. | Fixed. |
| R3-B | (several rows) | NOTE | Signing dates are not in the saved bill prints or the signed-bill listing. | No change: dates were read from each bill page's action list during the pass (§1.2); chapter numbers match the saved listing. |

Round 4: one agent re-checked the 17 rows edited after round 3. 1 ERROR, 4 WARN, 6 NOTE.

| Round | Row | Severity | Finding | Resolution |
|---|---|---|---|---|
| R4 | `tenant-caused-damage-ny` | ERROR | Notes said retaliation protections have no fault exception; N.Y. Real Prop. Law § 223-b(6) has one. | Fixed (and the same statement in NY log §6.1). |
| R4 | `keys-ny` | WARN | A lost-key copy request could still be answered with a full re-key charge. | Fixed: copy requests always under the 110% cap; re-keying only for unreturned keys or where security reasonably requires it. |
| R4 | `casualty-termination-ny` | WARN | 'No fault' versus 'fault or neglect'; the landlord's exit was also conditioned on no tenant fault. | Fixed: fault or neglect for the tenant's exit; the landlord's exit applies whoever caused the damage. |
| R4 | `returned-payments-ny` | WARN | 'provide for' in quotation marks is not the statute's wording. | Fixed. |
| R4 | (five rows) | NOTE | tenant-caused-damage scope wording; due-at-signing reading label; security-devices date, device examples and N.Y. Gen. Bus. Law § 390-e case; unlawful-eviction 'lawfully'; repair-remedies quote placement. | Fixed. |
| R4 | (three rows) | NOTE | Signing dates not in saved sources. | No change (bill pages' action lists, read during the pass; §1.2). |

Round 5: the 8 rows edited after round 4. No ERROR; 3 WARN, 5 NOTE.

| Round | Row | Severity | Finding | Resolution |
|---|---|---|---|---|
| R5 | `casualty-termination-ny` | WARN | No abatement when the whole property is unusable and the lease continues. | Fixed (reduced to zero if none can be used); NOTE on N.Y. Real Prop. Law § 216(1)(d) conditions also fixed. |
| R5 | `edu-unlawful-eviction-ny` | WARN | 'Without giving a key' attached to disabling a lock. | Fixed. |
| R5 | `edu-tenant-repair-remedies-ny` | WARN | Stay's fault exception missing from the body. | Fixed; NOTE on the defense claim labelled as case law, not searched. |
| R5 | (three rows) | NOTE | security-devices exceptions; keys-ny new-key cost; due-at-signing first-month-rent reading. | Fixed the first two; the third stays labelled as Claude's reading and is listed for Taylor in §6.3. |

Round 6: the 5 rows edited after round 5. 1 ERROR (the new `keys-ny` could have locked out a tenant holding over), 4 WARN.

| Round | Row | Severity | Finding | Resolution |
|---|---|---|---|---|
| R6 | `keys-ny` | ERROR | End-of-Term re-keying could lock out a tenant holding over without a key (N.Y. Real Prop. Acts. Law § 768(1)(a)(iii), N.Y. Real Prop. Acts. Law § 711). | Fixed: new keys whenever anyone remains in possession; end-of-Term re-keying only after the tenant has moved out and surrendered. |
| R6 | `casualty-termination-ny` | WARN | Vacate-order ground conditions incomplete in the notes. | Fixed. |
| R6 | `edu-unlawful-eviction-ny` | WARN | Restoration duty understated; 'other court order' omitted. | Fixed. |
| R6 | `edu-tenant-repair-remedies-ny` | WARN | Pointer to the narrow self-help offsets; 'or his agent'; 30-day occupancy for the repair proceeding. | Fixed. |
| R6 | `edu-security-devices-ny` | WARN | Keyless rule also bars installations that adversely affect access; device examples are not statutory. | Fixed. |

Round 7: the 5 rows edited after round 6. No ERROR; 2 WARN (`keys-ny` new keys for every occupant in possession; `edu-unlawful-eviction-ny` the special-proceeding rule for every tenant and lawful occupant) and 1 NOTE, all fixed.
Round 8: the three sentences changed after round 7. No ERROR; 3 WARN (the daily restoration penalty and helpers' liability in `edu-unlawful-eviction-ny`; the context of the cure-and-credit right in `casualty-termination-ny`) and 2 NOTE, all fixed using the checker's own wording.
Round 9: the changed wording from round 8. No findings. Every row edited after any round went back to a checker before delivery (rule 80); the last round returned clean.

What the rounds show: most findings were dropped conditions (place limits, building classes, exceptions) and readings stated as law; misquotes were rare after the script check (§19, rule 59). The three shared rows untagged by the check (`parking-vehicle-rules`, `acceptable-payment-methods-nj`, `keys`) and their New York replacements are in §2.2 and §3.1.


## 14. Statute walk (gap-discovery source 1)

Read whole: N.Y. Real Prop. Law art. 6-A (N.Y. Real Prop. Law §§ 210-218) and art. 7 (N.Y. Real Prop. Law §§ 220-238-a); N.Y. Real Prop. Acts. Law art. 7 (N.Y. Real Prop. Acts. Law §§ 701-768) and arts. 7-A, 7-C, 7-D (headings and grounds); N.Y. Gen. Oblig. Law §§ 7-101 to 7-109 and N.Y. Gen. Oblig. Law §§ 5-321, 5-702, 5-703, 5-905; N.Y. Real Prop. Law art. 12-D; the Multiple Dwelling and Multiple Residence Law sections the rows rely on. Section-index diff against the rows (sections no row cites, with the reason):

- N.Y. Real Prop. Law: N.Y. Real Prop. Law § 217 (procedural preservation clause of art. 6-A); N.Y. Real Prop. Law § 221 (life leases); N.Y. Real Prop. Law § 223 (grantee's remedies; cited in `edu-sale-management-change-ny`'s reasoning, not needed in a row); N.Y. Real Prop. Law § 224 (attornment); N.Y. Real Prop. Law § 226 (renewal and sub-leases); N.Y. Real Prop. Law § 226-a (fixtures on a new lease); N.Y. Real Prop. Law § 227-b (senior facility contracts; facilities only); N.Y. Real Prop. Law §§ 233, 233-a, 233-b (manufactured home parks; out of scope); N.Y. Real Prop. Law § 233-c (ground-lease co-ops); N.Y. Real Prop. Law § 235-d (New York City loft-building harassment; narrow, noted); N.Y. Real Prop. Law § 235-h (commercial leases); N.Y. Real Prop. Law § 238 (privileges to deal with occupants).
- N.Y. Real Prop. Acts. Law: N.Y. Real Prop. Acts. Law § 701 (jurisdiction); N.Y. Real Prop. Acts. Law § 713-a (adult homes); N.Y. Real Prop. Acts. Law § 715-a (commercial cannabis tenants); N.Y. Real Prop. Acts. Law § 721 (who may sue); N.Y. Real Prop. Acts. Law §§ 732, 733, 734, 743, 746, 747, 751 (procedure; summarized in `edu-eviction-process-ny`); N.Y. Real Prop. Acts. Law § 756-a (deed-theft stays); N.Y. Real Prop. Acts. Law §§ 761-767 (redemption where more than five years remain).
- N.Y. Gen. Oblig. Law: N.Y. Gen. Oblig. Law § 7-101 (personal property rentals); N.Y. Gen. Oblig. Law § 7-106 (installation deposits).
Sections cited only in part were checked subdivision by subdivision; no further gap was found.


## 15. Real-lease comparison (gap-discovery source 2)

**Lease:** New York State Consumer Protection Board, *Model Residential Lease* (published with the Division of Housing and Community Renewal; plain-language model for housing that is not public housing, rent controlled or rent stabilized), as hosted by Cornell Cooperative Extension of Tompkins County (ccetompkins.org/resources/model-residential-lease). A state agency's lease, so it qualifies (rule 33). Edition: undated; it names Governor Pataki and consumer.state.ny.us, so it predates 2007 and the 2019 HSTPA and the 2024 Good Cause Eviction Law. That makes it weaker as a wording lead and useful as a stale-law probe (rule 16): its 10-day late-fee trigger, 30-day deposit return and absent sprinkler, flood and Good Cause notices all confirm that the current statutes changed later. Not a relabelled template. Text saved (hash 7e364fb9…); no text reproduced here.

### 15.1 Provision map

| Model lease ¶ | Subject | Library row | Note |
|---|---|---|---|
| 1-2 | Parties, apartment, term | builder fields | |
| 3 | Rent, receipts | `rent-payment`; `edu-rent-receipts-ny` | |
| 4 | Late fee after 10 days | `late-fee`; `edu-late-fee-ny` | now 5 days and capped (N.Y. Real Prop. Law § 238-a(2)) |
| 5-6 | Deposit held separately; bank and interest | `security-deposit-use-ny`; `deposit-bank-notice-ny`; `edu-deposit-interest-ny` | |
| 7 | Deposit return within 30 days; transfer on sale | `security-deposit-return-ny`; `edu-deposit-on-sale-ny` | now 14 days (N.Y. Gen. Oblig. Law § 7-108(1-a)(e)) |
| 8 | Unit not ready; tenant may cancel | `possession-delay` | |
| 9 | Residential use; no illegal activity; quiet enjoyment | `residential-use-only`; `criminal-activity-ny`; `no-disturbance` | |
| 10 | Condition at end | `surrender-end-of-term-ny`; `existing-condition-ny` | |
| 11 | Services provided | `services-utilities-provided-ks-oh`; `utilities-paid-by-landlord` | |
| 12 | Habitability | `landlord-maintenance-ny`; `edu-habitability-ny` | |
| 13 | Rent withholding; utility payments | `edu-tenant-repair-remedies-ny`; `edu-utility-shutoff-ny` | |
| 14 | Fire damage; partial abatement | `casualty-termination-ny` | model lets tenant cancel on 3 days' notice; N.Y. Real Prop. Law § 227 sets no notice period |
| 15 | Entry on notice | `landlords-access`; `edu-landlord-entry-ny` | |
| 16 | Extra lock | `keys-ny`; `edu-security-devices-ny` | N.Y. Mult. Dwell. Law § 51-c |
| 17 | Building rules | `rules-ny` | |
| 18 | Subletting | `no-sublet-assign-ny` | |
| 19 | Retaliation; tenant organizing | `edu-retaliation-ny`; `edu-tenant-organizing-ny` | |
| 20 | Cure notice then termination; no self-help | `default-by-tenant`; `edu-unlawful-eviction-ny` | |
| 21 | Notices | `notices`; `electronic-notice-ny` | |
| 22 | Condition, repairs, other charges, signatures | `existing-condition-ny`; `entire-agreement` | |

### 15.2 What it produced
No new row came only from the model lease; it confirmed coverage. One wording point: its partial-damage abatement (¶ 14) is reflected in `casualty-termination-ny`. No shared row is changed because of it (rule 62).


## 16. Landlord-scenario screen (gap-discovery source 3)

66 scenarios, generated by Claude on the model of the Montana and New Mexico logs' §16 (which follow the AZ log §18.1 map; the AZ log itself was not attached), with New York additions marked (NY). Each scenario was run against the final rows. Every scenario resolves to a row; where none existed, the statutes were searched and the row was written (listed after the table).

| Stage | Scenario | Answered by |
|---|---|---|
| Application | Applicant asks what fees they must pay to apply | edu-application-fee-ny; due-at-signing-ny |
| Application | Landlord wants a holding deposit to take the unit off the market | edu-holding-deposit-ny |
| Application | Applicant pays with a Section 8 voucher or other assistance | edu-source-of-income-ny |
| Application | Applicant has a past housing court case | edu-eviction-records-ny |
| Application | Applicant has an arrest, sealed conviction or Clean Slate record | edu-tenant-screening-ny |
| Application | Landlord wants to ask about citizenship or immigration status | edu-immigration-status-ny; edu-protected-class-inquiry-ny |
| Application | Applicant is a domestic violence victim | edu-dv-eviction-ny; edu-fair-housing-ny |
| Application | Family with children applies | edu-fair-housing-ny (N.Y. Real Prop. Law §§ 237, 237-a) |
| Application | Landlord uses rent-pricing software that pools competitors' data (NY) | edu-algorithmic-rent-ny |
| Signing | What must be in or attached to the lease (NY) | good-cause-notice-ny; sprinkler-disclosure-ny; flood-disclosure-ny; lead-based-paint; certificate-of-occupancy-notice-ny (≤3 units) |
| Signing | Owner of a multiple dwelling keeps an emergency contact list (NY) | emergency-contact-consent-ny |
| Signing | How large may the lease print be; plain language (NY) | edu-small-print-ny; edu-plain-language-ny |
| Signing | Lease longer than a year signed electronically | edu-statute-of-frauds-ny; electronic-signatures |
| Signing | Amounts due at move-in, including last month's rent and pet deposit | due-at-signing-ny; edu-deposit-rules-ny; edu-pet-deposit-ny |
| Signing | Where the deposit is banked; interest | deposit-bank-notice-ny; edu-deposit-interest-ny |
| Move-in | Unit not ready on the start date | possession-delay (tagged); edu-no-double-letting-rule-ny |
| Move-in | Recording the unit's condition | existing-condition-ny; edu-move-in-inspection-ny |
| Move-in | Smoke and CO detectors | smoke-detector-duties-ny; edu-smoke-co-detectors-ny |
| Tenancy | Tenant adds a roommate or partner | permitted-occupants-ny; guest-policy-ny |
| Tenancy | Tenant wants to sublet or list on Airbnb | no-sublet-assign-ny; edu-short-term-rental-ny |
| Tenancy | Rent paid in cash; receipt | edu-rent-receipts-ny |
| Tenancy | Tenant insists on paying by check, not the portal | acceptable-payment-methods-ny |
| Tenancy | Rent is late: late fee and notice | late-fee; edu-late-fee-ny; edu-rent-demand-ny |
| Tenancy | Check bounces | returned-payments-ny |
| Tenancy | Partial payment offered | edu-waiver-by-acceptance-ny; edu-no-application-order-rule-ny |
| Tenancy | Landlord needs to enter for repairs or showings | landlords-access; edu-landlord-entry-ny |
| Tenancy | Tenant reports no heat or a code violation | edu-heat-ny; edu-habitability-ny; edu-tenant-repair-remedies-ny; edu-retaliation-ny |
| Tenancy | Tenant withholds rent over repairs | edu-tenant-repair-remedies-ny; edu-no-repair-deduct-ny |
| Tenancy | Utility shut off because landlord didn't pay | edu-utility-shutoff-ny |
| Tenancy | Bed bugs found in one unit (NY) | edu-bed-bug-ny |
| Tenancy | Tenant installs their own lock (NY) | keys-ny; edu-security-devices-ny |
| Tenancy | Landlord installs a fob or app entry system (NY) | edu-security-devices-ny (N.Y. Gen. Bus. Law § 390-e) |
| Tenancy | Tenant asks for an emotional support animal | assistance-animal-accommodation; edu-assistance-animals-ny |
| Tenancy | Tenant with a disability asks to install grab bars | edu-disability-accommodation-ny; no-alterations |
| Tenancy | Smoking and cannabis in the building | smoking-policy-ny; edu-cannabis-ny |
| Tenancy | Tenant grows cannabis plants | edu-cannabis-ny |
| Tenancy | Tenant keeps a firearm | edu-firearms-ny |
| Tenancy | Tenants form an association and want the community room | edu-tenant-organizing-ny |
| Tenancy | Tenant damages the unit; fire caused by tenant | tenant-caused-damage-ny; casualty-termination-ny |
| Tenancy | Fire makes the unit unlivable | casualty-termination-ny; edu-casualty-ny |
| Tenancy | Tenant runs an illegal business from the unit | criminal-activity-ny; edu-illegal-use-eviction-ny |
| Tenancy | Noise and nuisance complaints | no-disturbance; edu-nuisance-ny |
| Renewal | Raising the rent at renewal | edu-rent-increase-notice-ny; edu-rent-control-ny; good-cause-notice-ny |
| Renewal | Not renewing a tenant's lease | edu-for-cause-eviction-ny; edu-termination-notice-ny |
| Renewal | Lease automatically renews | auto-renewal-ny |
| Renewal | Changing house rules mid-lease | rules-ny |
| Ending | Tenant wants to leave early | early-termination-ks; edu-mitigation-ny; edu-no-early-termination-fee-rule-ny |
| Ending | Tenant is a domestic violence victim and must leave | edu-dv-termination-ny; edu-dv-confidentiality-ny |
| Ending | Senior tenant moves to assisted living | edu-senior-termination-ny |
| Ending | Tenant called to active duty | edu-servicemember-ny |
| Ending | Tenant dies | edu-tenant-death-ny |
| Ending | Tenant stays after the lease ends | holdover-ny; edu-holdover-ny; edu-holdover-rate-ny |
| Ending | Pre-move-out inspection and deposit return | security-deposit-return-ny; security-deposit-use-ny; edu-deposit-penalty-ny |
| Ending | Belongings left behind | surrender-end-of-term-ny; edu-abandoned-property-ny |
| Eviction | Starting a nonpayment case | edu-rent-demand-ny; edu-eviction-process-ny; edu-fees-as-rent-ny |
| Eviction | Changing the locks on a tenant who won't pay | edu-unlawful-eviction-ny |
| Eviction | Squatter or ex-partner of the tenant won't leave | edu-unauthorized-occupant-ny |
| Eviction | Tenant asks the court for more time | edu-eviction-stay-ny; edu-cure-ny |
| Eviction | Legal fees after winning | edu-attorney-fees-ny |
| Eviction | Pets at the eviction | edu-post-eviction-property-ny |
| Sale | Selling the building with tenants in place | edu-sale-management-change-ny; edu-deposit-on-sale-ny |
| Sale | Converting to co-op or condo | edu-conversion-ny |
| Foreclosure | Lender forecloses on the landlord | edu-foreclosure-ny |
| Local | City requires registration or inspection (NY) | edu-local-registration-ny |
| Local | Building has no certificate of occupancy (NY) | certificate-of-occupancy-notice-ny; edu-certificate-of-occupancy-ny |
| Local | New York City-only rules (lead, window guards, harassment, HMC access) | edu-scope-ny (flagged, rule 3) |

Rows added because of this screen: `edu-algorithmic-rent-ny` (pricing software), `edu-security-devices-ny` (keyless entry), `edu-short-term-rental-ny` (Airbnb), `edu-conversion-ny` (co-op conversion) and `edu-foreclosure-ny`.


## 17. Outside-title search and proof of absence (gap-discovery source 4)

Corpus: the whole of nysenate.gov's laws index (consolidated laws, court acts, unconsolidated laws and the Constitution; §1.3), so the Constitution was loaded before the batteries (rule 35). Searched: statutes and the Constitution. Not searched: administrative rules, case law, local codes. Outside-title findings that reached rows: N.Y. Cannabis Law § 127 (`smoking-policy-ny`, `edu-cannabis-ny`); N.Y. Pub. Health Law § 1399-n (smoking definition); N.Y. Penal Law §§ 222.15, 265.01-d; N.Y. Exec. Law §§ 292, 296, 378; N.Y. Civ. Rights Law §§ 47, 47-c; N.Y. Gen. Bus. Law §§ 340-b, 349, 390-e, 395-b, 600-601; N.Y. Mil. Law §§ 309, 310; N.Y. State Tech. Law §§ 302-309; N.Y. Civ. Prac. L. & R. 4544, 5004; N.Y. Real Prop. Law § 443-a; N.Y. Aband. Prop. Law § 1317. Constitution screen (rule 35): no provision reaches residential leases or protects conduct a shared clause restricts; art. I, § 11 (equal protection and civil rights) adds nothing beyond the Human Rights Law, there is no arms or privacy clause aimed at private conduct, and art. I, § 19 (environmental rights) binds the state. No initiated amendments exist in New York (amendments come only through the Legislature), so rule 35's struck-initiative check does not apply.

Every battery below ran over the whole corpus unless a scope is shown; patterns are JavaScript regular expressions matched case-insensitively against normalized section text with the catchline removed. "Heading-only" counts sections whose heading matched but whose body was not counted.

| # | Battery | Pattern (JS, case-insensitive) | Context / scope | Hits | Control | Heading-only | Positives |
|---|---|---|---|---|---|---|---|
| 1 | bold face type (whole code) | `bold[- ]?face¦bold[- ]faced¦bold type¦in bold\b¦boldface` | `` | 156 | 0 | 0 | passed (2 real, 1 syn) |
| 2 | conspicuous (lease/tenant context) | `conspicuous` | `\b(lease¦lessee¦tenant¦rental agreement)` | 133 | 0 | 2 | passed (2 real, 1 syn) |
| 3 | type size (point type / points in depth) | `\bpoints? in depth¦\b(\d+¦five¦six¦seven¦eight¦nine¦ten¦eleven¦twelve¦fourteen¦sixteen¦eighteen¦twenty)[- ]point\b¦point type¦type size¦size of type` | `` | 187 | 0 | 0 | passed (2 real, 2 syn) |
| 4 | underlined / underscored | `underlin¦underscor` | `\b(lease¦lessee¦tenant¦rental)` | 1 | 0 | 0 | passed (0 real, 1 syn) |
| 5 | separate document / writing / instrument / rider | `separate (document¦writing¦instrument¦sheet¦page¦rider¦agreement)` | `\b(lease¦lessee¦tenant¦rental agreement)` | 20 | 0 | 0 | passed (0 real, 1 syn) |
| 6 | statutory form wording | `substantially (in )?the following form¦substantially as follows¦in substantially the (following )?form¦form which follows¦following form¦substantially the form¦shall read as follows¦the following notice` | `\b(lease¦lessee¦tenant¦landlord¦lessor)` | 42 | 0 | 0 | passed (3 real, 1 syn) |
| 7 | first page / above the signature placement | `first page¦top of the (first )?page¦(immediately )?(above¦before¦next to) the signature¦signature line` | `\b(lease¦lessee¦tenant¦rental)` | 7 | 0 | 0 | passed (0 real, 1 syn) |
| 8 | language other than English / translation (lease context) | `\b(spanish¦translat\w*¦language other than english¦primary language)\b` | `\b(lease¦lessee¦tenant¦rental agreement)` | 17 | 0 | 3 | passed (0 real, 1 syn) |
| 9 | omission sanction forfeiting rent or deposit | `(forfeit¦shall not be (entitled¦recovered)¦no rent shall be recovered)` | `\b(lease¦lessee¦tenant¦premises)` | 167 | 0 | 59 | passed (2 real, 1 syn) |
| 10 | late fee / late charge (rent) | `late (payment¦fee¦charge)s?` | `\brent` | 11 | 0 | 3 | passed (1 real, 1 syn) |
| 11 | rent cap / maximum rent outside rent regulation | `(maximum¦cap¦limit\w*¦ceiling) (on ¦of )?(the )?(annual )?rent (increase¦charged)¦rent increase (cap¦limit)` | `\b(tenant¦lessee¦landlord)` | 2 | 0 | 0 | passed (0 real, 2 syn) |
| 12 | "additional rent" fees in summary proceedings | `additional rent¦fees, charges or penalties other than rent` | `` | 8 | 0 | 1 | passed (2 real, 1 syn) |
| 13 | statutory interest rate / usury | `per (centum¦cent) per annum¦usur` | `\binterest\b` | 157 | 0 | 7 | passed (2 real, 1 syn) |
| 14 | acceptance of rent waives breach | `accept\w*( of)? (the )?(rent¦payment)` | `waiv¦terminat¦expir / ^(RPP¦RPA¦GOB¦MDW¦MRE) ` | 3 | 0 | 0 | passed (2 real, 1 syn) |
| 15 | holdover damages / double rent / use and occupation | `double (the )?rent¦holding over¦holds? over¦use and occupation` | `\b(rent¦tenant¦landlord) / ^(RPP¦RPA¦GOB) ` | 13 | 0 | 1 | passed (2 real, 1 syn) |
| 16 | algorithmic / software rent setting | `algorithm\w*¦data analytics` | `\brent` | 1 | 0 | 0 | passed (1 real, 1 syn) |
| 17 | all-in pricing / total price disclosure (rental) | `all[- ]in (price¦pricing¦rent)¦total (monthly )?(price¦cost¦rent)¦mandatory fees?` | `\b(rent¦lease¦tenant)` | 76 | 0 | 1 | passed (0 real, 1 syn) |
| 18 | broker fee paid by tenant | `broker\w*.{0,60}\b(fee¦commission)` | `\b(tenant¦lessee¦rental)` | 20 | 0 | 3 | passed (1 real, 1 syn) |
| 19 | tax on residential rent | `tax\w* on (the )?(rent¦rents¦rental)¦rent (tax¦surcharge)` | `\b(residen¦dwelling¦apartment)` | 11 | 0 | 0 | passed (0 real, 1 syn) |
| 20 | deposit deduction for cleaning | `clean\w*` | `\bdeposit / ^(GOB¦RPP¦RPA¦MDW¦MRE) ` | 3 | 0 | 4 | passed (1 real, 1 syn) |
| 21 | unclaimed / abandoned security deposit | `(unclaimed¦abandoned) (security )?deposit¦security deposit` | `^ABP ` | 2 | 0 | 1 | passed (1 real, 1 syn) |
| 22 | holding deposit / deposit to reserve a unit | `holding (deposit¦fee)¦deposit to (hold¦reserve)¦reserv\w* (the ¦a )?(unit¦dwelling¦apartment)` | `\b(tenant¦lessee¦landlord¦rent)` | 1 | 0 | 0 | passed (0 real, 1 syn) |
| 23 | pet fee / pet rent / pet deposit | `\bpet (fee¦rent¦deposit¦charge)s?\b¦\bpets?\b.{0,40}\b(fee¦deposit¦rent)` | `\b(tenant¦lessee¦landlord¦rental)` | 1 | 0 | 0 | passed (0 real, 1 syn) |
| 24 | fee in lieu of deposit / deposit insurance | `in lieu of (a ¦the )?(security )?deposit¦deposit (alternative¦insurance)¦surety bond` | `\b(tenant¦lessee¦rent)` | 21 | 0 | 6 | passed (0 real, 1 syn) |
| 25 | tenant property left behind (abandoned, technical) | `abandon\w*.{0,80}\b(personal property¦belongings¦possessions¦effects¦property of the (tenant¦lessee¦occupant))¦(personal property¦belongings¦possessions¦effects).{0,80}abandon\w*` | `\b(tenant¦lessee¦landlord¦premises)` | 0 | 0 | 0 | passed (0 real, 2 syn) |
| 26 | tenant belongings left behind (everyday words) | `(left¦remain\w*) (behind¦on the premises¦in the (unit¦premises¦dwelling))¦stor\w* (of )?(the )?(tenant¦occupant)\W?s (belongings¦property¦possessions)` | `\b(tenant¦lessee¦occupant)` | 2 | 0 | 0 | passed (1 real, 1 syn) |
| 27 | family succession to a tenancy | `succession¦successor (tenant¦occupant)¦remaining family member` | `\b(tenant¦lessee¦occupan) / ^(RPP¦RPA¦GOB¦MDW¦MRE¦EXC) ` | 2 | 0 | 0 | passed (0 real, 1 syn) |
| 28 | fire or casualty (tenancy) | `(destroy\w*¦injur\w*¦damag\w*) by (fire¦the elements)¦untenantable¦unfit for occupancy¦casualty` | `\b(lease¦lessee¦tenant) / ^(RPP¦RPA¦GOB¦MDW¦MRE) ` | 7 | 0 | 0 | passed (1 real, 1 syn) |
| 29 | landlord duty to mitigate | `mitigat\w*` | `\b(lease¦lessee¦tenant) / ^(RPP¦RPA¦GOB) ` | 3 | 0 | 0 | passed (1 real, 1 syn) |
| 30 | landlord's lien / distress for rent | `landlord\W?s lien¦lien (of¦in favor of) the landlord¦distress (for¦of) rent¦distrain` | `` | 4 | 0 | 0 | passed (0 real, 2 syn) |
| 31 | early termination fee / buyout | `(early termination¦termination¦buyout¦break)\W{0,3}(fee¦charge¦penalty)` | `\b(lease¦lessee¦tenant)` | 3 | 0 | 0 | passed (0 real, 1 syn) |
| 32 | servicemember lease termination | `military (service¦duty)¦active duty¦armed forces` | `\blease / ^(MIL¦RPP¦GOB) ` | 5 | 0 | 13 | passed (1 real, 1 syn) |
| 33 | waiver of notice to quit / jury (lease) | `waiv\w*.{0,60}(notice¦jury)¦(notice¦jury).{0,60}waiv\w*` | `\b(lease¦lessee¦tenant) / ^(RPP¦RPA¦GOB) ` | 4 | 0 | 0 | passed (1 real, 1 syn) |
| 34 | illegal use / drug / bawdy-house eviction | `bawdy¦illegal (trade¦business¦use¦purpose)¦controlled substance` | `\b(tenant¦lessee¦landlord¦premises) / ^(RPP¦RPA) ` | 9 | 0 | 0 | passed (3 real, 1 syn) |
| 35 | guest / visitor definition or limit | `\bguests?\b¦\bvisitors?\b` | `\b(tenant¦lessee¦occupan) / ^(RPP¦RPA¦GOB¦MDW¦MRE¦EXC) ` | 19 | 0 | 1 | passed (1 real, 1 syn) |
| 36 | occupancy limit / overcrowding | `overcrowd\w*¦persons per (room¦bedroom)¦occupancy (limit¦standard)¦square feet per` | `\b(dwelling¦apartment¦occupan)` | 12 | 0 | 0 | passed (0 real, 1 syn) |
| 37 | house rules / rules and regulations | `rules (and¦or) regulations (governing¦of the) (said )?(premises¦building)¦house rules¦landlord\W?s rules` | `` | 5 | 0 | 0 | passed (1 real, 1 syn) |
| 38 | smoking / vaping definition and smoke-free housing | `smok\w*¦vap(e¦ing)` | `\b(dwelling¦residen¦apartment¦landlord¦lease)` | 37 | 0 | 9 | passed (1 real, 1 syn) |
| 39 | home cannabis cultivation and landlords | `cultivat\w*` | `\b(landlord¦lessor¦lease¦private residence¦residen)` | 38 | 0 | 6 | passed (1 real, 1 syn) |
| 40 | firearms on private / residential property | `firearm¦rifle¦shotgun¦pistol` | `\b(lease¦lessee¦landlord¦tenant¦private property¦residen)` | 45 | 0 | 44 | passed (1 real, 1 syn) |
| 41 | flag / political sign display by residents | `\bflags?\b¦political sign¦display (of )?(a )?sign` | `\b(tenant¦lessee¦landlord¦resident¦unit owner¦lease)` | 11 | 0 | 19 | passed (0 real, 1 syn) |
| 42 | security cameras / surveillance in rentals | `camera¦video (recording¦surveillance)¦surveillance device` | `\b(tenant¦lessee¦landlord¦dwelling¦apartment)` | 40 | 0 | 20 | passed (0 real, 1 syn) |
| 43 | EV charging in rentals | `electric vehicle (charging¦supply)¦charging station` | `\b(tenant¦lessee¦landlord¦lease¦residen)` | 10 | 0 | 3 | passed (0 real, 1 syn) |
| 44 | towing from private residential property | `\btow(ing¦ed)?\b` | `private (property¦lot)¦parking (lot¦area)` | 6 | 0 | 8 | passed (0 real, 1 syn) |
| 45 | renter's insurance requirement | `renter\W?s insurance¦tenant\W?s insurance¦require\w* (the )?(tenant¦lessee) to (obtain¦maintain¦purchase¦carry) (liability ¦renters ¦property )?insurance` | `` | 2 | 0 | 0 | passed (0 real, 1 syn) |
| 46 | cable / telecom access to residential buildings | `cable television¦telecommunication\w* (facilities¦service¦provider)¦satellite (dish¦antenna)` | `\b(tenant¦landlord¦multiple dwelling¦apartment)` | 9 | 0 | 6 | passed (1 real, 1 syn) |
| 47 | lead-based paint disclosure / notice (rental) | `lead[- ]based paint¦lead paint¦lead poison\w*` | `\b(lease¦lessee¦tenant¦rental¦dwelling)` | 9 | 0 | 2 | passed (0 real, 1 syn) |
| 48 | radon disclosure | `\bradon\b` | `\b(lease¦lessee¦tenant¦rental¦landlord¦seller¦buyer¦purchaser)` | 3 | 0 | 0 | passed (0 real, 1 syn) |
| 49 | mold disclosure / remediation duty (rental) | `\bmou?ld\b` | `\b(lease¦lessee¦tenant¦rental¦landlord¦dwelling)` | 5 | 0 | 3 | passed (1 real, 1 syn) |
| 50 | methamphetamine contamination disclosure | `methamphetamine¦meth lab¦clandestine (drug )?lab` | `\b(lease¦lessee¦tenant¦rental¦landlord¦seller¦dwelling¦real property)` | 2 | 0 | 10 | FAILED (0 real, 1 syn) |
| 51 | sex offender residency / disclosure (rental) | `sex offender` | `\b(lease¦lessee¦tenant¦rental¦landlord¦residen)` | 27 | 0 | 8 | passed (0 real, 1 syn) |
| 52 | flood disclosure (lease) | `\bflood` | `\blease / ^(RPP¦GOB¦RPA¦EXC) ` | 5 | 0 | 2 | passed (1 real, 1 syn) |
| 53 | bed bug disclosure in lease | `bed ?bug` | `` | 2 | 0 | 0 | passed (1 real, 1 syn) |
| 54 | owner / manager name and address disclosure to tenant | `name and (business )?address of (the )?(owner¦landlord¦managing agent¦agent)` | `\b(tenant¦lessee¦dwelling¦lease)` | 5 | 0 | 0 | passed (0 real, 1 syn) |
| 55 | copy of signed lease to tenant | `(copy¦copies) of (the ¦such ¦a )?(executed ¦signed ¦fully executed )?(lease¦rental agreement)` | `\b(tenant¦lessee)` | 2 | 0 | 0 | passed (0 real, 1 syn) |
| 56 | blank spaces / lease completeness | `blank (spaces?¦lines?)¦spaces? left blank¦unfilled` | `\b(lease¦agreement¦contract)` | 16 | 0 | 2 | passed (0 real, 1 syn) |
| 57 | right to summon police / emergency assistance | `(summon¦call\w*¦request\w*) (for )?(police¦law enforcement¦emergency) (assistance¦services¦help)` | `\b(tenant¦lessee¦landlord¦resident)` | 1 | 0 | 0 | FAILED (0 real, 1 syn) |
| 58 | locks / peephole / intercom (outside Multiple Dwelling Law) | `peephole¦self-locking¦intercommunication¦deadbolt¦lock\w* on (the ¦each )?(entrance )?door` | `\b(dwelling¦tenant¦apartment)` | 7 | 0 | 0 | passed (2 real, 1 syn) |
| 59 | minimum heat temperature | `(sixty¦fifty)[- ]\w+ degrees¦\b\d\d degrees` | `\b(heat¦dwelling¦tenant)` | 12 | 0 | 0 | passed (1 real, 1 syn) |
| 60 | no rent without certificate of occupancy / compliance | `no rent shall be recovered¦not (be )?entitled to (recover )?rent` | `` | 6 | 0 | 0 | passed (2 real, 1 syn) |
| 61 | repair and deduct (tenant self-help repair) | `(deduct¦offset¦withh[oe]ld)\w*.{0,80}(cost¦expense)s? of (the )?(repair¦work)¦repair and deduct¦make (the )?repairs? and deduct` | `\b(tenant¦lessee¦rent)` | 0 | 0 | 0 | passed (0 real, 1 syn) |
| 62 | landlord entry notice / right of access | `(enter¦entry¦access) (to ¦into )?(the )?(dwelling¦apartment¦unit¦premises)` | `\b(notice¦hours) / ^(RPP¦RPA¦GOB¦MDW¦MRE) ` | 2 | 0 | 0 | passed (0 real, 1 syn) |
| 63 | short-term rental registration | `short-term rental¦less than thirty consecutive days` | `` | 9 | 0 | 0 | passed (2 real, 1 syn) |
| 64 | criminal history in housing decisions | `(arrest¦conviction¦criminal (history¦record¦accusation))` | `\bhousing\b / ^(EXC¦COR¦RPP¦CPL) ` | 16 | 0 | 62 | passed (1 real, 1 syn) |
| 65 | verify immigration status (landlord) | `immigration status¦citizenship` | `\b(landlord¦lessor¦tenant¦lessee¦housing accommodation¦rental)` | 8 | 0 | 3 | passed (1 real, 1 syn) |
| 66 | assistance animal documentation / misrepresentation | `emotional support¦assistance animal¦support animal¦(misrepresent¦fraudulent\w*).{0,60}(service¦guide) (dog¦animal)` | `` | 5 | 0 | 0 | passed (0 real, 2 syn) |
| 67 | order of applying tenant payments | `appl(y¦ied¦ication of) (the )?(payment¦payments¦partial payment)` | `\b(rent¦tenant¦lessee)` | 0 | 0 | 1 | passed (0 real, 1 syn) |
| 68 | utility submetering / ratio billing to tenants | `submeter\w*¦sub-meter\w*¦ratio utility¦master[- ]meter` | `\b(tenant¦resident¦dwelling¦apartment)` | 6 | 0 | 0 | passed (0 real, 1 syn) |
| 69 | co-op / condo conversion tenant protections | `non-?purchasing tenant¦conversion plan¦eviction plan` | `` | 10 | 0 | 0 | passed (1 real, 1 syn) |
| 70 | consumer protection act and leases | `(deceptive¦abusive) acts or practices` | `` | 7 | 0 | 2 | passed (1 real, 1 syn) |
| 71 | debt collection: enforcing a right known not to exist | `(claim¦attempt¦threaten)\w* to enforce a right with knowledge¦reason to know that the right does not exist` | `` | 2 | 0 | 0 | passed (1 real, 1 syn) |
| 72 | double letting / leasing the same premises twice | `double.{0,20}(let¦lease)¦(let¦lease)s? the same (premises¦property)¦second lessee¦new lessee is entitled to possession` | `` | 1 | 0 | 0 | passed (1 real, 1 syn) |
| 73 | domestic violence lock change | `chang\w* (the )?locks?¦lock\w* (be )?chang¦new lock` | `domestic violence¦order of protection¦family offense` | 0 | 0 | 0 | passed (0 real, 1 syn) |
| 74 | quiet enjoyment / covenant of quiet possession | `quiet (enjoyment¦possession)¦repose, peace or quiet` | `\b(lease¦lessee¦tenant¦occupant) / ^(RPP¦RPA¦GOB¦MDW¦MRE) ` | 6 | 0 | 0 | passed (2 real, 1 syn) |
| 75 | tenant must forward process / notice of adverse claim | `forthwith give notice thereof to his landlord¦three years.? rent` | `` | 1 | 0 | 0 | passed (1 real, 1 syn) |
| 76 | tenant rights in foreclosure | `foreclos\w*` | `\b(tenant¦lessee) / ^(RPP¦RPA¦GOB) ` | 18 | 0 | 12 | passed (2 real, 1 syn) |
| 77 | foreign ownership / alien land restrictions | `foreign (adversary¦principal¦country of concern¦government)¦\b(aliens?¦noncitizens?)\b.{0,80}(real property¦lands?)\b` | `(own¦acquir¦hold¦purchas¦take)` | 41 | 0 | 1 | passed (1 real, 1 syn) |
| 78 | misrepresenting a service animal | `(misrepresent¦falsely (represent¦claim)¦fraudulent\w*).{0,80}(service¦guide¦hearing¦support) (dog¦animal)¦(service¦guide¦hearing¦support) (dog¦animal).{0,80}(misrepresent¦falsely)` | `` | 0 | 0 | 0 | passed (0 real, 1 syn) |
| 79 | constitution: property, privacy, speech, arms, discrimination | `privacy¦search(es)? and seizures?¦freedom of speech¦speak, write and publish¦bear arms¦equal protection¦discrimination¦private property¦housing` | `^CNS ` | 12 | 0 | 1 | passed (3 real, 1 syn) |
| 80 | constitution: clean air and water / environmental rights | `clean air and water¦healthful environment` | `^CNS ` | 1 | 0 | 0 | passed (1 real, 1 syn) |
| 81 | rent cap everyday rerun (how much rent may be raised) | `(raise¦increase)\w* (the )?rent¦rent increase` | `\b(percent¦per centum¦limit¦maximum)` | 27 | 0 | 0 | passed (2 real, 1 syn) |
| 82 | holding deposit everyday rerun (money before lease) | `before (the )?(lease¦tenancy¦occupancy) (is signed¦begins¦commences)¦before or at the beginning of the tenancy` | `` | 1 | 0 | 0 | passed (1 real, 1 syn) |
| 83 | landlord entry everyday rerun (notice before entering) | `(notice¦notif\w*) (before¦prior to) (enter\w*¦entry¦access)¦(enter¦entry).{0,40}(reasonable¦advance) notice` | `` | 2 | 0 | 1 | passed (0 real, 1 syn) |
| 84 | repair everyday rerun (tenant fixes and subtracts from rent) | `(subtract¦deduct)\w* .{0,40}from (any ¦the )?(future )?(payment of )?rent` | `\b(tenant¦lessee)` | 4 | 0 | 0 | passed (1 real, 1 syn) |
| 85 | methamphetamine contamination disclosure (rerun of the failed battery) | `methamphetamine¦meth lab¦clandestine (drug )?lab` | `\b(lease¦lessee¦tenant¦rental¦landlord¦seller¦dwelling¦real property)` | 2 | 0 | 10 | passed (0 real, 1 syn) |
| 86 | right to summon police / emergency assistance (rerun of the failed battery) | `(summon¦call\w*¦request\w*¦seek\w*) (for )?(police¦law enforcement¦emergency)\b.{0,40}(assistance¦services¦help)` | `\b(tenant¦lessee¦landlord¦resident)` | 4 | 0 | 1 | passed (0 real, 1 syn) |

Everyday-word reruns (rule 19) ran wherever every positive was synthetic and the battery returned no hits: `rent-cap-everyday`, `holding-deposit-everyday`, `landlord-entry-everyday`, `repair-deduct-everyday`, `abandoned-property-everyday`.


## 18. Topic reference canvass (rules 27, 36)

314 topics in `lease-clause-topics.md`. New topic keys created: `certificate-of-occupancy-disclosure`, `good-cause-notice`, `lease-type-size`, `sprinkler-disclosure`.

### 18.1 Topics answered by an NY row (159)

| Topic | NY rows |
|---|---|
| `acceptable-payment-methods` | `acceptable-payment-methods-ny` |
| `algorithmic-rent-setting` | `edu-algorithmic-rent-ny` |
| `application-fees` | `edu-application-fee-ny` |
| `application-of-payments` | `application-of-payments`, `edu-no-application-order-rule-ny` |
| `due-at-signing` | `due-at-signing-ny` |
| `fee-transparency` | `edu-no-fee-transparency-rule-ny` |
| `fees-as-rent` | `edu-fees-as-rent-ny` |
| `late-fee` | `late-fee`, `edu-late-fee-ny` |
| `rent-control` | `edu-rent-control-ny` |
| `rent-increase-notice` | `edu-rent-increase-notice-ny` |
| `rent-payment` | `rent-payment` |
| `rent-receipts` | `edu-rent-receipts-ny` |
| `rent-tax` | `edu-rent-tax-ny` |
| `returned-payments` | `returned-payments-ny` |
| `unpaid-damages-interest` | `edu-legal-interest-ny` |
| `waiver-by-acceptance` | `edu-waiver-by-acceptance-ny` |
| `condition-inspection` | `edu-move-in-inspection-ny` |
| `deposit-escheat` | `edu-deposit-escheat-ny` |
| `holding-deposit` | `edu-holding-deposit-ny` |
| `security-deposit-cap` | `edu-deposit-rules-ny` |
| `security-deposit-holding` | `deposit-bank-notice-ny` |
| `security-deposit-interest` | `edu-deposit-interest-ny` |
| `security-deposit-on-sale` | `edu-deposit-on-sale-ny` |
| `security-deposit-penalty` | `edu-deposit-penalty-ny` |
| `security-deposit-return` | `security-deposit-return-ny` |
| `security-deposit-use` | `security-deposit-use-ny` |
| `alterations` | `no-alterations` |
| `criminal-activity` | `criminal-activity-ny` |
| `disturbance` | `no-disturbance` |
| `existing-condition` | `existing-condition-ny` |
| `joint-liability` | `joint-liability` |
| `permitted-occupants` | `permitted-occupants-ny` |
| `residential-use-only` | `residential-use-only` |
| `smoking-policy` | `smoking-policy-ny` |
| `sublet-assign` | `no-sublet-assign-ny`, `edu-short-term-rental-ny` |
| `tenant-forward-proceedings` | `tenant-forward-proceedings-ca` |
| `tenant-maintenance` | `tenant-maintenance` |
| `tenant-statutory-duties` | `edu-tenant-duties-ny` |
| `utilities-responsibility` | `utilities-responsibility` |
| `utility-payment-evidence` | `utility-payment-evidence` |
| `utility-service-continuity` | `utility-service-continuity` |
| `alarm-duties` | `smoke-detector-duties-ny`, `edu-smoke-co-detectors-ny` |
| `appliances-included` | `appliances-included` |
| `disability-accommodation` | `edu-disability-accommodation-ny` |
| `double-letting` | `edu-no-double-letting-rule-ny` |
| `emergency-contact` | `emergency-contact-consent-ny` |
| `heating` | `edu-heat-ny` |
| `landlord-maintenance` | `landlord-maintenance-ny`, `edu-habitability-ny` |
| `landlord-self-cure` | `edu-no-repair-deduct-ny` |
| `quiet-possession` | `edu-quiet-possession-ny` |
| `security-devices` | `edu-security-devices-ny` |
| `services-utilities-provided` | `services-utilities-provided-ks-oh` |
| `telecom-access` | `edu-telecom-access-ny` |
| `tenant-repair-remedies` | `edu-tenant-repair-remedies-ny` |
| `utilities-paid-by-landlord` | `utilities-paid-by-landlord` |
| `utility-shutoff-statute` | `edu-utility-shutoff-ny` |
| `utility-submetering-disclosure` | `edu-utility-submetering-ny` |
| `landlord-entry` | `landlords-access`, `edu-landlord-entry-ny` |
| `abandoned-property` | `edu-abandoned-property-ny` |
| `abandonment-and-mitigation` | `edu-mitigation-ny` |
| `attorney-fees` | `edu-attorney-fees-ny` |
| `casualty-termination` | `casualty-termination-ny`, `edu-casualty-ny` |
| `conversion-notice` | `edu-conversion-ny` |
| `cure-and-eviction-grounds` | `edu-cure-ny` |
| `default-by-tenant` | `default-by-tenant` |
| `dv-eviction-protection` | `edu-dv-eviction-ny` |
| `dv-lease-termination` | `edu-dv-termination-ny` |
| `dv-lockchange` | `edu-no-dv-lockchange-ny` |
| `early-termination` | `early-termination-ks`, `edu-no-early-termination-fee-rule-ny` |
| `eviction-hardship-stay` | `edu-eviction-stay-ny` |
| `eviction-process` | `edu-eviction-process-ny` |
| `eviction-record-sealing` | `edu-eviction-records-ny` |
| `expedited-criminal-eviction` | `edu-illegal-use-eviction-ny` |
| `for-cause-eviction` | `edu-for-cause-eviction-ny` |
| `foreclosure` | `edu-foreclosure-ny` |
| `holdover` | `holdover-ny`, `edu-holdover-ny` |
| `holdover-rate` | `edu-holdover-rate-ny` |
| `infirmity-termination` | `edu-senior-termination-ny` |
| `landlord-lien` | `edu-no-landlord-lien-ny` |
| `nonpayment-notice` | `edu-rent-demand-ny` |
| `nuisance` | `edu-nuisance-ny` |
| `possession-delay` | `possession-delay` |
| `post-eviction-property` | `edu-post-eviction-property-ny` |
| `rental-application-accuracy` | `rental-application-accuracy` |
| `retaliation` | `edu-retaliation-ny` |
| `self-help-eviction` | `edu-unlawful-eviction-ny` |
| `servicemember-rights` | `edu-servicemember-ny` |
| `surrender-end-of-term` | `surrender-end-of-term-ny` |
| `tenant-caused-damage` | `tenant-caused-damage-ny` |
| `tenant-death` | `edu-tenant-death-ny` |
| `termination-notice` | `edu-termination-notice-ny` |
| `unauthorized-occupant-removal` | `edu-unauthorized-occupant-ny` |
| `addendum-precedence` | `addendum-precedence` |
| `automatic-renewal` | `auto-renewal-ny` |
| `dv-confidentiality` | `edu-dv-confidentiality-ny` |
| `electronic-signatures` | `electronic-signatures` |
| `emergency-assistance-right` | `edu-emergency-assistance-ny` |
| `entire-agreement` | `entire-agreement` |
| `governing-law` | `governing-law` |
| `lease-completeness` | `edu-lease-completeness-ny` |
| `lease-copy` | `edu-no-lease-copy-rule-ny` |
| `notice-delivery-methods` | `electronic-notice-ny`, `edu-notice-service-ny` |
| `notices` | `notices` |
| `renters-insurance-rules` | `edu-no-renters-insurance-rule-ny` |
| `sale-or-management-change` | `edu-sale-management-change-ny` |
| `scope` | `edu-scope-ny` |
| `severability` | `severability` |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-ny` |
| `statutory-forms` | `edu-statutory-forms-ny` |
| `tenants-property-insurance` | `tenants-property-insurance-ks-oh-ca` |
| `assistance-animal-accommodation` | `assistance-animal-accommodation`, `edu-assistance-animals-ny` |
| `pet-fees` | `edu-pet-deposit-ny` |
| `pet-insurance-requirement` | `pet-insurance-requirement` |
| `pet-policy` | `pet-policy-ny` |
| `service-animal-denial-penalty` | `edu-service-animal-penalty-ny` |
| `service-animal-misrepresentation` | `edu-no-service-animal-misrep-ny` |
| `assigned-parking-space` | `assigned-parking-space` |
| `ev-charging` | `edu-no-ev-charging-rule-ny` |
| `parking` | `parking-ks-oh-ca` |
| `parking-vehicle-rules` | `parking-vehicle-rules-ny` |
| `storage-space` | `storage-space-ks-oh-ca` |
| `towing` | `edu-towing-ny` |
| `cannabis` | `edu-cannabis-ny` |
| `common-area-use` | `common-area-use` |
| `fire-safety-grilling` | `fire-safety-grilling` |
| `firearms` | `edu-firearms-ny` |
| `guest-policy` | `guest-policy-ny` |
| `inspection-rights` | `inspection-rights` |
| `keys` | `keys-ny` |
| `landscaping-irrigation` | `landscaping-irrigation` |
| `rules-regulations` | `rules-ny` |
| `snow-removal` | `snow-removal` |
| `tenant-display-rights` | `edu-no-display-rule-ny` |
| `tenant-security-cameras` | `edu-no-camera-rule-ny` |
| `bed-bug-disclosure` | `edu-bed-bug-ny` |
| `fair-housing` | `edu-fair-housing-ny` |
| `flood-disclosure` | `flood-disclosure-ny` |
| `hoa-compliance` | `hoa-compliance` |
| `lead-based-paint` | `lead-based-paint`, `edu-lead-ny` |
| `meth-disclosure` | `edu-no-meth-disclosure-ny` |
| `mold-disclosure` | `edu-no-mold-disclosure-ny` |
| `owner-identity-disclosure` | `edu-owner-identity-ny` |
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-ny` |
| `radon-disclosure` | `edu-no-radon-disclosure-ny` |
| `sex-offender-occupancy` | `edu-no-sex-offender-rule-ny` |
| `source-of-income` | `edu-source-of-income-ny` |
| `stigmatized-property` | `edu-stigmatized-property-ny` |
| `consumer-protection-act` | `edu-consumer-protection-ny` |
| `exculpatory-clauses` | `edu-exculpation-ny` |
| `foreign-ownership` | `edu-no-foreign-ownership-rule-ny` |
| `immigration-status` | `edu-immigration-status-ny` |
| `jury-waiver` | `edu-jury-waiver-ny` |
| `knowing-use-penalty` | `edu-knowing-use-ny` |
| `landlord-registration` | `edu-local-registration-ny` |
| `plain-language` | `edu-plain-language-ny` |
| `prohibited-lease-terms` | `edu-prohibited-terms-ny` |
| `tenant-right-to-organize` | `edu-tenant-organizing-ny` |
| `tenant-screening` | `edu-tenant-screening-ny` |
| `unconscionability` | `edu-unconscionability-ny` |

### 18.2 Topics with no NY row (155): status and reason

| Topic | States | Status | Reason |
|---|---|---|---|
| `collection-fee` | 2 | Answered elsewhere | Legal and administrative fees may not be charged without a court order (N.Y. Real Prop. Law § 234-a); see `edu-attorney-fees-ny`. |
| `fee-unprovided-service` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `government-fee-reimbursement` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `late-fee-limit` | 1 | Answered elsewhere | Dormant `late-fee-limit-ny` left inactive (§5); the cap is in `edu-late-fee-ny` and the builder caps (§10). |
| `nonresident-owner-agent` | 4 | Not located | No statute requires a nonresident owner to appoint a New York agent for tenants; N.Y. Mult. Dwell. Law § 325 registration covers multiple dwellings (`edu-owner-identity-ny`). Tax withholding on rent not searched. |
| `notice-service-fee` | 2 | Answered elsewhere | N.Y. Real Prop. Law § 234-a bars fees for legal services; `edu-attorney-fees-ny`. No notice-service fee offered (rule 54, §6.1). |
| `rent-concession` | 2 | Not located | No statute on rent concessions; no statute keys any right to a lease concession term, so it is not a rule 54 option. Recapture on default would face the penalty doctrine (case law not searched). |
| `rent-escalation` | 3 | Answered elsewhere | Mid-lease escalation clauses are not addressed by statute; where the Good Cause Eviction Law applies, increases above the local rent standard are presumed unreasonable (`edu-rent-control-ny`), and increases of 5% or more at renewal need N.Y. Real Prop. Law § 226-c notice (`edu-rent-increase-notice-ny`). No statute keys a right to an escalation term (not a rule 54 option). |
| `required-fees` | 3 | Answered elsewhere | `edu-no-fee-transparency-rule-ny` (upfront fees barred, N.Y. Real Prop. Law § 238-a(1)). |
| `shutdown-rent-protection` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `statutory-caps` | 1 | Answered elsewhere | Caps are stated topic by topic: `edu-late-fee-ny`, `edu-application-fee-ny`, `edu-deposit-rules-ny`, `returned-payments-ny`. |
| `subsidy-late-fee` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `term-change-notice` | 5 | Answered elsewhere | `edu-rent-increase-notice-ny` (N.Y. Real Prop. Law §§ 226-c, 216(1)(j)). |
| `veterans-incentive` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `deposit-cost-schedule` | 2 | Answered elsewhere | Retentions are a closed list with no pre-set charges (`security-deposit-use-ny`). |
| `deposit-installments` | 5 | Not located | No installment right in N.Y. Gen. Oblig. Law art. 7 (read whole). |
| `deposit-last-month-rent` | 9 | Answered elsewhere | Prepaid last month's rent is an 'advance' within the one-month cap (`due-at-signing-ny`, `edu-deposit-rules-ny`). |
| `deposit-surrender-notice` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `dv-deposit-timing` | 1 | Answered elsewhere | N.Y. Real Prop. Law § 227-c(3)(b), (d) (`edu-dv-termination-ny`). |
| `expedited-deposit-disposition` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `fee-in-lieu-of-deposit` | 3 | Confirmed absent | NY battery 24 (fee in lieu of deposit / deposit insurance): 21 hits, control 0; known positives passed (0 real, 1 synthetic): no statute; a nonrefundable fee in lieu of a deposit would be a fee barred by N.Y. Real Prop. Law § 238-a(1)(a) if charged at the start (Claude's reading). |
| `inspection-notice-penalty` | 1 | Answered elsewhere | `edu-move-in-inspection-ny`, `edu-deposit-penalty-ny`. |
| `nonrefundable-deposit-notice` | 4 | Answered elsewhere | The entire deposit is refundable (N.Y. Gen. Oblig. Law § 7-108(1-a)(b)); `edu-deposit-rules-ny`. |
| `nonrefundable-deposit-separate-notice` | 1 | Answered elsewhere | Same as `nonrefundable-deposit-notice`. |
| `security-deposit-nonwaiver` | 2 | Answered elsewhere | N.Y. Gen. Oblig. Law §§ 7-103(3), 7-108(3) stated in `edu-deposit-rules-ny`. |
| `security-deposit-standards` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `utility-deposit-return` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `bed-bug-cooperation` | 1 | Not located | No tenant cooperation duty in N.Y. Real Prop. Law § 235-j; `edu-bed-bug-ny`. |
| `children-occupancy` | 1 | Answered elsewhere | N.Y. Real Prop. Law §§ 237, 237-a in `edu-fair-housing-ny`. |
| `cold-weather-vacate-notice` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `construction-liens` | 1 | Not located | Lien Law not searched for a lease-based exclusion (§7). |
| `dv-qualifying-documents` | 2 | Answered elsewhere | N.Y. Real Prop. Law § 227-c(2)(c) in `edu-dv-termination-ny`. |
| `extended-absence-notice` | 8 | Not located | No absence-notice statute; `extended-absence-notice-ks` rests on URLTA and is not tagged (§2.2). |
| `municipal-utility-lien` | 7 | Not located | Water and sewer liens are local; no state statute lets a lease keep a tenant's utility bill off the property (rule 3). |
| `prohibited-acts-renter` | 2 | Answered elsewhere | Tenant liability for wilful or negligent violations (N.Y. Mult. Dwell. Law § 78(1)); `edu-tenant-duties-ny`. |
| `purpose-limitation` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `utility-interruption-submeter` | 1 | Answered elsewhere | `edu-utility-submetering-ny` (PSC rules not read). |
| `utility-transfer` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `waterbed` | 2 | Not located | No statute; `common-area-use` (tagged) bars water-filled furniture without consent. |
| `alt-housing` | 5 | Not located | No relocation duty for market-rate tenants outside agency vacate orders (N.Y. Real Prop. Law § 216(1)(d) gives a tenant the right to resume possession). |
| `appliances-excluded` | 1 | Answered elsewhere | `appliances-included` tagged; no statute on excluded appliances. |
| `balcony-inspection` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `confirmed-absences-habitability` | 1 | Answered elsewhere | `edu-habitability-ny`. |
| `designated-repairer` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `disaster-duties` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `fire-code-standard` | 1 | Answered elsewhere | N.Y. Exec. Law § 378 standards (`edu-smoke-co-detectors-ny`); the Uniform Code (19 NYCRR) not read. |
| `frozen-standard-incorporation` | 1 | Not applicable | No New York statute incorporates a frozen code edition into the warranty of habitability. |
| `furnishings-included` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `habitability-materiality` | 1 | Answered elsewhere | `edu-habitability-ny`. |
| `habitability-modifiable` | 2 | Answered elsewhere | Waiver void (N.Y. Real Prop. Law § 235-b(2)); `edu-habitability-ny`. |
| `habitability-presumption` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `habitability-waiver` | 1 | Answered elsewhere | N.Y. Real Prop. Law § 235-b(2) ('Any agreement by a lessee or tenant of a dwelling waiving or modifying his rights as set forth in this section shall be void'); `edu-habitability-ny`. |
| `health-district-rental-rules` | 1 | Not applicable | Local health rules (rule 3). |
| `landlord-breach-remedy` | 1 | Answered elsewhere | `edu-tenant-repair-remedies-ny`. |
| `maintenance-duty-shift` | 1 | Answered elsewhere | No statute; N.Y. Mult. Dwell. Law § 78 duties cannot be shifted (`landscaping-irrigation`, `snow-removal` tag notes). |
| `other-landlord-facilities` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `part5-nonwaivable` | 1 | Not applicable | Colorado-specific. |
| `pool-safety` | 3 | Not located | No landlord pool-notice statute; the Uniform Code's barrier rules (19 NYCRR) not read. |
| `portfolio-thresholds` | 3 | Answered elsewhere | Portfolio-size rules: Good Cause small-landlord exemption (`edu-for-cause-eviction-ny`), deposit interest at six or more units (`edu-deposit-interest-ny`), certificate of occupancy notice at three or fewer units (`certificate-of-occupancy-notice-ny`), retaliation exemption under four units (`edu-retaliation-ny`). |
| `rent-demand-bar` | 1 | Answered elsewhere | No rent while a multiple dwelling lacks a certificate of occupancy or registration (`edu-certificate-of-occupancy-ny`, `edu-sale-management-change-ny`). |
| `rent-reporting` | 2 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `repair-cost-termination` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `repair-escrow-exemption-notice` | 1 | Not applicable | Single-state rule; New York's rent deposit proceedings (`edu-tenant-repair-remedies-ny`) have no exemption notice. |
| `repair-notice` | 3 | Not located | No statute prescribes how a tenant gives repair notice; `notices` tagged. |
| `senior-housing-work-card` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `stove-refrigerator` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `subsidy-habitability-proration` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `substandard-property-receivership` | 2 | Answered elsewhere | N.Y. Real Prop. Acts. Law art. 7-A administrators and art. 7-C rent deposit proceedings in `edu-tenant-repair-remedies-ny`. |
| `tenant-repair-agreement` | 18 | Not located | No statute on separate tenant repair agreements; no separate-writing rule (NY battery 5 (separate document / writing / instrument / rider): 20 hits, control 0; known positives passed (0 real, 1 synthetic)), so the tagged chore clauses bind as lease terms (rule 48; §19). |
| `utility-allowance-cap` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `utility-apportionment` | 2 | Answered elsewhere | `edu-utility-submetering-ny`. |
| `utility-disclosure-attachment` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `utility-landlord-account` | 5 | Answered elsewhere | `edu-utility-shutoff-ny` (N.Y. Real Prop. Law § 235-a; N.Y. Real Prop. Acts. Law § 756). |
| `key-control-policy` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `periodic-services-entry` | 1 | Answered elsewhere | No entry statute (`edu-landlord-entry-ny`). |
| `casualty-and-mitigation-waivable` | 1 | Answered elsewhere | Casualty exit waivable by written agreement (declined, `edu-casualty-ny`); mitigation waiver void (`edu-mitigation-ny`). |
| `drug-free-housing-addendum` | 1 | Answered elsewhere | `criminal-activity-ny`. |
| `environmental-event-termination` | 2 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `eviction-service-party` | 1 | Not located | Service follows N.Y. Real Prop. Acts. Law § 735; no statute lets a lease name a service agent. |
| `forfeiture-redemption` | 1 | Answered elsewhere | N.Y. Real Prop. Acts. Law §§ 761-767 redemption applies only where more than five years of the term remain (§14 statute walk); no row needed for typical residential leases. |
| `guarantor-renewal` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `homestead-waiver` | 4 | Not located | No statute lets a residential lease waive a tenant's exemptions; no clause offered (rule 54, §6.1). |
| `landlord-remedies-termination` | 1 | Answered elsewhere | `default-by-tenant` (tagged), `edu-eviction-process-ny`. |
| `liquidated-damages` | 1 | Answered elsewhere | `edu-holdover-rate-ny`, `edu-no-early-termination-fee-rule-ny` (penalty doctrine unread). |
| `lockout-for-rent-delinquency` | 1 | Answered elsewhere | Unlawful (N.Y. Real Prop. Acts. Law § 768); `edu-unlawful-eviction-ny`. |
| `minor-tenant-filing` | 4 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `notice-to-quit-waiver` | 1 | Confirmed absent | No statute lets a lease waive the N.Y. Real Prop. Law § 226-c / N.Y. Real Prop. Law § 232-a notices; N.Y. Real Prop. Acts. Law § 753(5) voids waivers of stay rights. No clause offered (§6.1). NY battery 33 (waiver of notice to quit / jury (lease)): 4 hits, control 0; known positives passed (1 real, 1 synthetic). |
| `owner-move-in-reservation` | 1 | Answered elsewhere | Owner occupancy is a statutory good-cause ground where article 6-A applies (`edu-for-cause-eviction-ny`); no lease reservation needed elsewhere. |
| `possession-bond` | 1 | Not applicable | Pennsylvania-specific. |
| `redemption` | 1 | Answered elsewhere | `edu-eviction-process-ny` (vacatur on tender, N.Y. Real Prop. Acts. Law § 749(3)). |
| `rent-into-court-counterclaim` | 3 | Answered elsewhere | New York City rent deposit after adjournments (N.Y. Real Prop. Acts. Law § 745(2)) noted in `edu-eviction-process-ny`. |
| `social-security-defense` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `statutory-early-termination` | 5 | Answered elsewhere | `edu-dv-termination-ny`, `edu-senior-termination-ny`, `edu-tenant-death-ny`, `edu-servicemember-ny`. |
| `subsidized-inspection-refusal` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `tenancy-at-will` | 2 | Answered elsewhere | N.Y. Real Prop. Law § 228 in `edu-termination-notice-ny`. |
| `adverse-proceeding-notice` | 1 | Answered elsewhere | N.Y. Real Prop. Law § 225; `tenant-forward-proceedings-ca` tagged; `edu-tenant-duties-ny`. |
| `confirmed-absences-misc` | 1 | Answered elsewhere | Absences recorded topic by topic (§18). |
| `confirmed-absences-outside-title` | 1 | Answered elsewhere | Squatters: `edu-unauthorized-occupant-ny`; receipts: `edu-rent-receipts-ny`; registration precondition: `edu-local-registration-ny`. |
| `disaster-displaced-guests` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `dv-protection-order-chapter-moved` | 1 | Not applicable | Single-state renumbering note. |
| `landlord-liability-insurance` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `law-enforcement-cooperation` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `lease-notice-initial-requirement` | 1 | Answered elsewhere | `good-cause-notice-ny` (notice required in every initial lease). |
| `lease-term-limitation` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `notice-to-vacate-additional-terms` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `optional-lease-terms` | 1 | Answered elsewhere | Optional clauses listed in §6.1. |
| `plain-language-consumer-statement` | 1 | Answered elsewhere | `edu-plain-language-ny` (no statement of waivers required). |
| `rent-receipt-anti-waiver` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `rental-inspection` | 7 | Answered elsewhere | Local inspection laws flagged in `edu-local-registration-ny` (rule 3). |
| `tenant-insurance-claims` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `tenant-records` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `tpa-sunset` | 1 | Answered elsewhere | Good Cause Eviction Law repeal June 15, 2034 (`edu-for-cause-eviction-ny`; legal watch §10). |
| `ev-charging-end-of-tenancy` | 2 | Confirmed absent | NY battery 43 (EV charging in rentals): 10 hits, control 0; known positives passed (0 real, 1 synthetic); `edu-no-ev-charging-rule-ny`. |
| `ev-charging-requirements` | 2 | Confirmed absent | NY battery 43 (EV charging in rentals): 10 hits, control 0; known positives passed (0 real, 1 synthetic); `edu-no-ev-charging-rule-ny`. |
| `ev-charging-shared-area` | 2 | Confirmed absent | NY battery 43 (EV charging in rentals): 10 hits, control 0; known positives passed (0 real, 1 synthetic); `edu-no-ev-charging-rule-ny`. |
| `parking-rules-notice` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `unbundled-parking` | 1 | Answered elsewhere | Separate parking charges are not 'rent' under article 6-A (N.Y. Real Prop. Law § 211(5)); `assigned-parking-space` tag note. |
| `guest-policy-day-limit` | 31 | Answered elsewhere | Not tagged (N.Y. Real Prop. Law § 235-f); `guest-policy-ny`. |
| `guest-rights` | 3 | Answered elsewhere | `guest-policy-ny`, `permitted-occupants-ny`. |
| `political-access` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `portable-solar` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `religious-cultural-display` | 1 | Confirmed absent | NY battery 41 (flag / political sign display by residents): 11 hits, control 0; known positives passed (0 real, 1 synthetic); `edu-no-display-rule-ny`. |
| `smoke-drift-waiver` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `defective-drywall-disclosure` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `electric-submetering-disclosure` | 1 | Answered elsewhere | `edu-utility-submetering-ny`. |
| `foreclosure-disclosure` | 4 | Not located | No statute requires a landlord to disclose a pending foreclosure to a new tenant; `edu-foreclosure-ny`. |
| `hazardous-contamination-disclosure` | 2 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `inspection-condemnation-disclosure` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `lead-safe-certification` | 1 | Answered elsewhere | `edu-lead-ny` (no state certificate; local laws flagged). |
| `meter-conservation-charge` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `military-air-zone-disclosure` | 2 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `ordnance-demolition-meter-disclosures` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `pest-control-notice` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `private-well-testing` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `prop65-rental-warning` | 1 | Not applicable | California-specific. |
| `property-tax-rent-disclosure` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `required-disclosures` | 1 | Answered elsewhere | Required lease text: `good-cause-notice-ny`, `sprinkler-disclosure-ny`, `flood-disclosure-ny`, `certificate-of-occupancy-notice-ny`, `emergency-contact-consent-ny`, `smoke-detector-duties-ny`, `deposit-bank-notice-ny`, `lead-based-paint`. |
| `sex-offender-disclosure` | 3 | Confirmed absent | NY battery 51 (sex offender residency / disclosure (rental)): 27 hits, control 0; known positives passed (0 real, 1 synthetic); `edu-no-sex-offender-rule-ny`. |
| `sfr-occupancy-disclosure` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `steam-radiator-covers` | 1 | Not located | New Jersey-specific; no New York statute. |
| `tenant-rights-statement` | 3 | Not located | No state tenant-rights statement must be attached; the Good Cause Eviction Law notice is the nearest analogue (`good-cause-notice-ny`). |
| `tpa-exemption-notice` | 1 | Answered elsewhere | The N.Y. Real Prop. Law § 231-c form states whether the unit is exempt from article 6-A and why (`good-cause-notice-ny`). |
| `tpa-notice` | 1 | Answered elsewhere | `good-cause-notice-ny`. |
| `truth-in-renting` | 2 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `window-guards` | 1 | Not applicable | N.Y.C. Health Code § 131.15 (local, rule 3). |
| `condemned-premises-rent-bar` | 1 | Answered elsewhere | N.Y. Mult. Dwell. Law § 302(1)(b) in `edu-certificate-of-occupancy-ny`. |
| `confession-of-judgment` | 2 | Not located | N.Y. Civ. Prac. L. & R. 3218 (confession of judgment) not read; no lease confession offered. |
| `employee-screening` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `eviction-penalty-clause-ban` | 1 | Answered elsewhere | `edu-attorney-fees-ny`, `edu-prohibited-terms-ny`. |
| `fire-sprinkler-duty` | 1 | Not located | No statewide retrofit duty located; the lease notice is `sprinkler-disclosure-ny`. |
| `governmental-fines` | 1 | Not located | Not located (boundary: the whole consolidated laws and Constitution searched by the NY batteries in §17 where a battery is cited; otherwise the landlord-tenant articles read whole, N.Y. Real Prop. Law arts. 6-A, 7, 12-D; N.Y. Real Prop. Acts. Law art. 7; N.Y. Gen. Oblig. Law arts. 5, 7; the Multiple Dwelling and Multiple Residence Laws; N.Y. Exec. Law art. 15) |
| `hoa` | 6 | Answered elsewhere | `hoa-compliance` tagged; condominium governance (N.Y. Real Prop. Law art. 9-B) not restated. |
| `lease-content-requirements` | 1 | Answered elsewhere | `edu-plain-language-ny`, `edu-small-print-ny`, required-disclosure rows. |
| `translation-duty` | 2 | Confirmed absent | NY battery 8 (language other than English / translation (lease context)): 17 hits, control 0; known positives passed (0 real, 1 synthetic): no translation duty for residential leases (hits concern court interpreters, foreclosure and other notices). |
| `written-notice-required` | 1 | Answered elsewhere | `notices` tagged; `edu-notice-service-ny`. |

### 18.3 'Topics no state has a row for yet'
The topic reference lists none outstanding beyond those in 18.2.


## 19. Step D screens (rules 40-53), one line each

- **40 Formatting and placement:** §4; type-size rule for the whole lease (N.Y. Civ. Prac. L. & R. 4544) and two bold notices; no placement conflict.
- **41 Just cause:** Good Cause Eviction Law; `holdover`, `holdover-ca` and the surrender clauses replaced; `edu-for-cause-eviction-ny` is the `for-cause-eviction` row.
- **42 Required text in a shared clause:** the NSF fee must be in the lease (`returned-payments-ny`); the deposit bank notice (`deposit-bank-notice-ny`); no shared clause needed a forced sentence beyond those overrides.
- **43 Cure promises:** `default-by-tenant-co` (NY moved from `default-by-tenant` at the 2026-10-04 circle-back) ties cure to written notice and the period 'specified by applicable law'; New York requires a 14-day rent demand and (under art. 6-A) a 10-day cure notice, both statutory. Outside article 6-A the non-rent written-notice cure is the lease's own promise, subject to the no-cure sentence (corrected 2026-10-04; see `edu-cure-ny`).
- **44 Terms turned into duties:** `notices` and `electronic-notice-ny` keep statutory methods; no 'as agreed in the lease' wording makes a generous term mandatory.
- **45 Electronic notices:** N.Y. State Tech. Law §§ 301-309 read whole: electronic signatures and records have paper's effect (N.Y. State Tech. Law §§ 304(2), 305(3)); use is voluntary (N.Y. State Tech. Law § 309); exceptions (N.Y. State Tech. Law § 307) cover wills, powers of attorney and negotiable instruments, not leases; no variation-by-agreement section exists. Statutory notices keep their own methods (`edu-notice-service-ny`).
- **46 Lease as the notice:** the lease carries the Good Cause notice, sprinkler and flood notices, certificate of occupancy notice, deposit bank notice, move-in inspection offer, pre-move-out inspection notice, emergency contact notice and smoke-detector duties notice.
- **47 Knowing-use penalties:** `edu-knowing-use-ny` (N.Y. Real Prop. Law § 223-b(5-a) treble, N.Y. Real Prop. Law § 227-c(6), N.Y. Gen. Oblig. Law § 7-108(1-a)(g), N.Y. Gen. Bus. Law §§ 349, 601(2)); the debt-collection article reaches 'consumer claims' from credit transactions, and whether rent qualifies is unread.
- **48 Separate documents:** no separate-writing rule for leases (`fmt-separate`); chore clauses tagged for every dwelling.
- **49 Collection costs:** N.Y. Real Prop. Law § 234-a voids legal and administrative fees without a court order; `default-by-tenant-co` (since 2026-10-04) drops the one-way "reasonable costs and expenses", and its fee sentence is mutual and court-tied.
- **50 'The lease controls':** N.Y. Real Prop. Law §§ 223-a, 227, 232-c, 238-a(2-a) and 216(1)(b), N.Y. Gen. Oblig. Law §§ 5-905 and 7-108(4) each considered (§6.1).
- **51 Plain language and consumer statutes:** N.Y. Gen. Oblig. Law § 5-702 reaches residential leases (no statement of waivers required); N.Y. Gen. Bus. Law art. 22-A has no enumerated list of lease practices, and its general unfair, deceptive and abusive standard is live (`edu-consumer-protection-ny`).
- **52 Exculpation:** void (N.Y. Gen. Oblig. Law § 5-321); the KS/OH/CA variants without disclaimers are tagged.
- **53 Figures that contradict shared clauses:** late fee (caps), returned payment (fee must be in the lease), deposits (one month; closed list), due at signing, holdover (trigger), pet deposit; each replaced or capped (§2.2).


## Proposed SOP changes

1. Where a state's site serves sections only as browser pages and the corpus is too large to export through the bridge, run the batteries in the browser over the stored corpus, export each battery's full result (pattern, counts, every hit key, positives) and every relied-on section, and prove the browser engine against the saved-section engine on a sample of batteries; name it in the log as a weaker method (rule 14, 19). Reason: New York's consolidated laws exceed 100 MB and the bridge carries about 262,000 characters per call.
2. Add a script check that every single-quoted passage in a row's notes appears verbatim in the saved sources (rule 59). Reason: in New York it caught near-quotes in rows citing N.Y. Real Prop. Acts. Law §§ 702(1), 753(4)-(5) and 768(2), N.Y. Gen. Oblig. Law § 7-103(2-a), N.Y. Mult. Dwell. Law § 51-c and N.Y. Real Prop. Law §§ 223-b(6), 227-c and 227-e (paraphrases inside quotation marks), plus one claim the cited text did not support (N.Y. Real Prop. Law § 231(2)), all before the independent check.
3. Search procedural codes (civil practice acts) in the rule 40 type-size battery, not only the landlord-tenant and consumer titles. Reason: New York's whole-lease 8-point rule sits in N.Y. Civ. Prac. L. & R. 4544.
4. In the tag-first screen (rules 26-28), run every shared clause that lets the landlord charge for anything (tags, keys, cards, fees, costs) or change a term unilaterally against the state's upfront-fee ban and payment-method rules, and record the result in the tag note. Reason: New York's independent check untagged `parking-vehicle-rules` (a tag charge that could fall at the start of the tenancy, barred by N.Y. Real Prop. Law § 238-a(1)(a)), `keys` (a re-keying charge for any replacement key, above the copy cap of N.Y. Real Prop. Law § 235-i) and `acceptable-payment-methods-nj` (an unlimited change of methods that could go electronic-only, barred by N.Y. Real Prop. Law § 235-g(1)).
5. When an education row states a rule from the Multiple Dwelling Law, Multiple Residence Law or another place-limited code, carry the place and building-class limits into the body, not only the notes. Reason: about a third of New York's independent-check findings were dropped conditions (cities of 325,000 or more, class A, post-1968, the county exclusions in N.Y. Real Prop. Acts. Law §§ 796-a(4) and 797(3)).
6. Rule 14: after saving a bill's text, confirm the saved version is the chaptered print (its print number and the act title) before citing it as read as enrolled. Reason: in New York the bill page carries every print and the extractor took the first, so all eight amended bills were saved as their introduced prints; three effective dates in the log were wrong until they were re-fetched.
7. Where a state compiles two sections under one number, cite them with a distinguishing heading and keep both versions in the battery index. Reason: N.Y. Gen. Bus. Law § 390-e appears twice.

## Proposed topic questions

1. `algorithmic-rent-setting`: Does a state antitrust statute make it unlawful for a residential landlord to set rents or lease terms on a coordinating algorithm's recommendations? (New York, N.Y. Gen. Bus. Law § 340-b.)
2. `required-disclosures`: Does the state require a notice of whether the unit is covered by a just-cause or rent-increase law in every lease and renewal? (New York, N.Y. Real Prop. Law § 231-c.)
3. `lease-type-size` (new): Does any statute set a minimum type size for the whole printed lease, with an evidentiary sanction? (New York, N.Y. Civ. Prac. L. & R. 4544.)

## Sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 928f1f6` (the 2,842-row library the kickoff was staged from), after the CA retro and the AL circle-back: 39 shared rows tagged NY (34 had other states' notes added since the base and were merged onto the current rows), 2 dormant rows given NY notes, 137 new. Library 3,013 rows; NY 176 active (68 lease clauses, 108 education); no same-topic pairs; every other state's set unchanged. All seven rule 27 topics have NY rows; the two common topics without one (`tenant-repair-agreement`, `guest-policy-day-limit`) are answered in §18.2.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check: not done at sync.** nysenate.gov refuses Claude Code's shell (403) and the Open Legislation API needs a key; the pass's quotations were checked word for word against saved official text by script (§8) and by the three-round independent check (§13).
- **Scope:** as recommended in the kickoff and agreed by Taylor; recorded in `edu-scope-ny`.
- **Citations file** `lease-clause-citations-NY.csv`: 176 rows (151 cited, 18 confirmed-absent, 7 generic clauses), each citation naming its consolidated law.
- **Legal watch:** NY config with law-qualified keys ("Real Prop. Law|238-a") and queries pairing the section with the law's name ('"238-a" AND "real property law"'), lead CFR and 42 U.S.C. § 4852d, and manual recheck items for the 2034 Good Cause sunset and opt-in list, the new untested laws, and the rules and local codes. New York is state #32, so it runs on day 4 at 14:00 UTC. `legal-watch-ny.yml` is held until after 2027-05-04; first run 2027-06-04.
- **Rule 62:** New York tagged `default-by-tenant`, so it now vets CO's and MN's pending edits to that row; queued in `retro-extras.csv` (no NY circle-back folder exists yet).
- **Variables:** `{{nsf_fee}}` already listed in M.14; NY added there. **Topic questions:** all three added (new topic `lease-type-size`); reference regenerated.
- **SOP 1.34:** all seven proposals adopted (rules 14, 19, 26, 32, 40, 59); NY column added.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant-co`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where NY law lets Landlord proceed without a cure opportunity. Uniform; no NY override.

## Circle-back checks (SOP 1.57), 2026-10-04

**Date:** 2026-10-04, in New York's existing chat (rule 8). **Inputs:** `lease-clauses.csv` (3,340 rows, matching the prompt's count), `lease-clause-sop.md` v1.57, `lease-clause-topics.md`, NY's log and `lease-clause-citations-NY.csv`, all staged 2026-10-04. These files are the only source of truth for this check.

**Old outputs deleted** before starting, from the session workspace: `lease-clauses-NY-delta.csv`, `lease-clause-decision-log-NY.md`, `integrity.md`, `citation-expansions.tsv` and `log-citation-expansions.tsv` (all from the 2026-10-03 pass).

**Where the attached files differ from earlier in this chat:**
- In this chat I said Taylor had not answered the scope question. The attached log's sync section says the scope was agreed by Taylor. The log governs.
- The library carries NY's rows as merged at the 2026-10-03 sync, with other states' later notes, not the delta delivered in this chat. Every row changed below was edited from the attached library.

**Scope:** no [Retro] rules were listed for New York (0 rules), so none were run, and nothing else was reopened (rule 1). One targeted fix was listed.

| Item | Verdict | What was read | Rows changed |
|---|---|---|---|
| Targeted fix 1, part (1): does 'and reasonable costs and expenses' in `default-by-tenant`'s remedies sentence risk reading as a barred fee in New York? | **Fixed.** Yes. New York leaves the shared row and is tagged on the existing override `default-by-tenant-co` (CO), which is word for word the same except that it drops the phrase. Shared text not edited. | N.Y. Real Prop. Law §§ 234, 234-a; N.Y. Gen. Oblig. Law § 7-108(1-a)(b); N.Y. Real Prop. Acts. Law § 702(1); both rows' text and notes | `default-by-tenant` (NY removed from `states`, NY segment added); `default-by-tenant-co` (NY added, NY note) |
| Targeted fix 1, part (2): MN's proposal to move the no-cure carve-out into its own sentence reaching both limbs | **Checked, no issue.** Lawful and accurate in New York; vouched below. | N.Y. Real Prop. Acts. Law §§ 711(2), 731(4), 735, 749(3), 753(1), (3)-(5); N.Y. Real Prop. Law §§ 216(1)(b)-(f), 235-e(d); NY's note segment on the row | None |
| Knock-on: NY rows that point to `default-by-tenant` | **Fixed.** Five pointers now name `default-by-tenant-co`. Two were also wrong on their own terms and were corrected: `edu-waiver-by-acceptance-ny` said the default clause has a non-waiver sentence (it has none) and now names only `late-fee`; `edu-cure-ny` said the clause adds no notice beyond the statute, but outside article 6-A its non-rent written-notice cure is the lease's own promise (lawful, subject to the no-cure carve-out). NY log §19's rule 43 line ('promises nothing extra') has the same slip; the `edu-cure-ny` note now governs. | The five rows' notes; both rows' `bodyText` | `edu-waiver-by-acceptance-ny`, `edu-mitigation-ny`, `edu-attorney-fees-ny`, `edu-emergency-assistance-ny` (notes and `last_checked`); `edu-cure-ny` (notes, `last_checked`, and one `bodyText` sentence: the 30-day post-judgment cure now carries N.Y. Real Prop. Acts. Law § 753's objectionable-holdover and rooming-house limits, found by the independent check) |

**Reasoning, part (1).** Every section was re-read on 2026-10-04 from the saved copies of the nysenate.gov text that were read section-open and hash-matched on 2026-10-03 (§1).

The phrase sits in the list of remedies 'available under applicable law'. In New York the default costs a landlord would charge under it are mostly legal services. Those include 'administrative fees incurred by the owner, lessor or agent in connection with management of the building'. They may be assessed only 'pursuant to a court order', and 'Any agreement or assessment contrary to this section shall be void' (N.Y. Real Prop. Law § 234-a(a)-(c)). Such charges also cannot be sought in a summary proceeding (N.Y. Real Prop. Acts. Law § 702(1)). A shared clause that names them as a lease remedy can be read as the agreement § 234-a(c) voids.

Dropping the phrase loses New York landlords no lawful remedy:
- Damages for breach stay among the remedies 'available under applicable law'.
- The itemized costs N.Y. Gen. Oblig. Law § 7-108(1-a)(b) lets a landlord keep from the deposit (reasonable and itemized costs for tenant damage beyond normal wear and tear, unpaid utilities payable directly to the landlord, and moving and storage) stay available under that section.
- Attorneys' fees and court costs stay with the mutual prevailing-party sentence, which N.Y. Real Prop. Law § 234(1) makes reciprocal anyway.

The sentence's 'less amounts obtained from the Security Deposit' nets the recovery against amounts lawfully applied; it does not authorize deductions beyond § 7-108(1-a)(b)'s list. That is why it is not a reason for the move, and why the same netting next to 'late fees' in `default-by-tenant-co` is acceptable (Claude's reading, recorded in the NY note).

The 2026-10-03 pass had handled this in the NY note alone. The independent check flagged the fee reading as a WARN (§13), and the note was the fix. Rule 53 asks that a tagged clause be safe as written, so the override is the better answer. This is a legal and drafting call under rule 76, so Taylor was not asked.

The override was tagged rather than a new NY row written (tag first, rule 26). Its `id` keeps the `-co` suffix, as other multi-state variants do (`default-by-tenant-ks-ne` carries KS, NE, OH and OK).

**Reasoning, part (2).** MN's proposed sentence takes the shape already used in `default-by-tenant-ks-ne`. On rule 62's two questions:

1. **Can it drop a cure or notice New York requires?** No.
   - **Rent.** New York has no route to a nonpayment proceeding without the 14-day written demand offering 'the payment of the rent, or the possession of the premises' (N.Y. Real Prop. Acts. Law § 711(2)). The tenant's later chances to pay also cannot be contracted away: full payment before the hearing must be accepted (N.Y. Real Prop. Acts. Law § 731(4)), and on tender before execution the court must vacate the warrant (N.Y. Real Prop. Acts. Law § 749(3)). The tender right has one exception: it does not apply where 'the tenant withheld the rent due in bad faith' (N.Y. Real Prop. Acts. Law § 749(3)). So on the rent limb the carve-out can reach only that post-judgment tender, and only where the landlord establishes bad-faith withholding; the 14-day demand and payment before the hearing remain in every case.
   - **Other breaches.** Where the Good Cause Eviction Law applies, the notice to cease within ten days (N.Y. Real Prop. Law § 216(1)(b)) is required by law, so the carve-out leaves it in place. The 30-day post-judgment cure for a breach-based holdover cannot be waived (N.Y. Real Prop. Acts. Law § 753(4)-(5)); it does not apply where the landlord proves an objectionable-tenant holdover or to hotel, lodging-house and rooming-house rooms (N.Y. Real Prop. Acts. Law § 753(1), (3)).
   - **The settled Indiana and Pennsylvania question** (a lease's own written notice of a rent default that the state does not require) does not arise. New York requires written notice twice: the 14-day demand and the five-day certified-mail notice (N.Y. Real Prop. Law § 235-e(d)).
2. **Does it change what the clause promises in New York?** No. NY's note segment gives up nothing on purpose on this row ('gives up' and 'kept on purpose' do not appear in it). On the non-rent limb, the move only relocates the existing carve-out, which still preserves the Good Cause grounds that need no notice to cease (N.Y. Real Prop. Law § 216(1)(c), (e), (f)). Paragraph (d), the vacate-order ground, gives the tenant its own statutory right to pay for a cure the landlord does not undertake, which the carve-out cannot remove.

### Vouches given

- `default-by-tenant` / `default-by-tenant-co`, MN's no-cure-sentence edit: vouched for New York, no change needed (reasons above). `default-by-tenant-co`'s notes say the edit will also reach that row when it merges, so the vouch now matters for the row New York uses.
- `default-by-tenant`, CO's deletion of 'and reasonable costs and expenses': supported for New York. New York now takes the deletion through the override instead of the shared row.

### For the sync (flagged, not done here)

- `lease-clause-citations-NY.csv`: the `default-by-tenant` row becomes `default-by-tenant-co`, with `supersedes` set to `default-by-tenant`. Keep its citations, widen N.Y. Real Prop. Law § 234-a(a) to § 234-a(a)-(c), and add N.Y. Real Prop. Acts. Law §§ 731(4), 749(3), 753(1), (3)-(5) and N.Y. Real Prop. Law § 216(1)(c), (e), (f).
- NY log §19: repoint the rule 43 and rule 49 lines to `default-by-tenant-co`, and replace the rule 43 line's 'promises nothing extra' with the `edu-cure-ny` wording (outside article 6-A the non-rent written-notice cure is the lease's own promise, subject to the no-cure carve-out).
- **Propagation (rule 62):** no shared `bodyText` was edited. `default-by-tenant-co` now carries CO and NY; CO's segment on it is untouched. NY's §9 "Vouches given" takes the two lines above.

### Checks on the delta

- `lease-clauses-NY-retro-delta.csv` has 7 rows, the master's header and CRLF record endings (8 terminators for 8 records).
- Each row differs from the library only in `states`, `notes` and `last_checked`, except `edu-cure-ny`, whose `bodyText` also changes in one sentence (table above). `default-by-tenant` was already dated 2026-10-04 by another state, so its `last_checked` is unchanged.
- Every single-quoted passage in the new NY text matches the saved statute text or the row's own `bodyText` (script check).
- No continuation citation lacks its law name.
- An independent agent that had not seen the drafting checked the delta and this section against the saved sources. Round 1 found no ERROR, 5 WARN and 1 NOTE: the deposit argument overstated § 7-108(1-a)(b) and did not fit the late-fee netting the override keeps; § 216(1)(d) was wrongly listed as a no-cure ground; § 749(3)'s bad-faith exception was missing; the repointed `edu-cure-ny` note made a wrong claim; and the Good Cause scope qualifier was missing in this section. All were fixed. Round 2, on the edited text, found no ERROR, 1 WARN (the § 753 cure's objectionable-holdover and rooming-house limits) and 7 NOTEs (§ 7-108(1-a)'s facility exceptions, § 731(4)'s full-payment and § 749(3)'s burden wording, the bad-faith point's reach, a dropped wear-and-tear qualifier, an unsupported §19 pointer in `edu-emergency-assistance-ny`, and two sync-list gaps). All were fixed. Round 3, on the wording changed after round 2, found 1 WARN (the § 753 limits joined with 'and' in the `default-by-tenant-co` note) and three out-of-scope notes (the same § 753 gap in `edu-cure-ny`'s body, a 'shared clauses' label on a New York row, and § 753(1), (3) missing from this section's table); all were fixed. Round 4, on those three sentences, confirmed the `default-by-tenant-co` and `edu-emergency-assistance-ny` wording and found one dropped condition in the new `edu-cure-ny` sentence: § 753(3) applies only where the case is brought because the tenant is objectionable. That sentence was corrected to the checker's own suggested wording. Round 5 checked the corrected sentence against the saved text and returned no findings, so every edit has been re-checked (rule 80).

## Proposed SOP changes

1. **Rule 78:** when a state leaves a shared clause for a variant (untagging, not switching off), search that state's own rows for backtick pointers to the old id, repoint them, and re-read what each pointer claims about the new target. Reason: five New York education rows still pointed to `default-by-tenant` after the move. Two of them described the clause wrongly (a non-waiver sentence it does not have, and a cure promise said to add nothing beyond the statute).

### Vouches given (propagation, rule 62)
- **2026-10-04:** `default-by-tenant` / `default-by-tenant-co` (MN's proposal), vouched for NY; CO's deletion of "and reasonable costs and expenses" supported, taken through the override.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 03ecae8`: 7 rows updated (NY moved from `default-by-tenant` to `default-by-tenant-co`, five NY pointers repointed, `edu-cure-ny`'s § 753 sentence); nothing refused. NY active 176, unchanged.
- **Rule 62, edit merged.** NY was the last state to vet MN's no-cure sentence. It merged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY), with IN's, NM's, PA's, SC's and TN's held changes; every tagged state's log records it. No shared edit is now pending.
- **Citations file:** NY's `default-by-tenant` row is now `default-by-tenant-co` (supersedes `default-by-tenant`), with N.Y. Real Prop. Law § 234-a(a)-(c), N.Y. Real Prop. Acts. Law §§ 731(4), 749(3), 753(1), (3)-(5) and N.Y. Real Prop. Law § 216(1)(c), (e), (f) added.
- **Log §19:** the rule 43 and rule 49 lines now name `default-by-tenant-co`; the rule 43 line's "promises nothing extra" is superseded by `edu-cure-ny`'s note (outside article 6-A, the non-rent written-notice cure is the lease's own promise, subject to the no-cure sentence).
- **Guards:** all pass. **Statute spot-check:** not possible from here (nysenate.gov blocks this machine, as at NY's first sync). The pass re-read every section from the copies saved and hash-matched on 2026-10-03, and was independently checked over five rounds.
- **SOP 1.59:** NY's proposal adopted (rule 78: repoint and re-read a state's pointers when it leaves a shared clause for a variant).
