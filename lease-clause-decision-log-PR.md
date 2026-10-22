# Lease clause decision log — Puerto Rico (PR, #52, a territory)
- **Pass:** run 2026-10-21 in one chat, Puerto Rico's only Desktop chat (rule 8). The session resumed several times after context summaries, and every working file survived each time. No earlier Puerto Rico output existed: no row was tagged PR and no `-pr` id existed (Step A), so there was nothing to delete (rule 8).
- **Inputs (SHA-256):**
  - `lease-clauses.csv`: 2a1be1590849a7c2a73a19ac0e2f068c5f514db23cb827bd141df2fca63f3a37
  - `lease-clause-sop.md` (v1.79, 2026-10-20): a442d67cea296a901cfcc8106df9b29421f39a159713239aa8b1761a5d5eb531
  - `lease-clause-topics.md`: c4734f7faae86e2b41acc53ce89c66ddcb850d1432d5a0474fa3a408a9548e92
  - `KICKOFF-PROMPT.md`: b80d5de8d71719dfa362fac5c13b3198c2715d1188ef89efa4fa41ec24cd07d4
  - `log-format-example.md`: 72f46c69065ab94a35b8ce26b77e819ad63ef8356c2b415e1d6a58a0a7234120
  - `corpus-PR-20261020-text.tar.xz`: 1858c23c30ad8402978ab217b60b07176e47f27a37adf05e19eab459a76ef8ad
  - `corpus-PR-20261020-pdf.tar.xz`: 57f6d9646f83495a6886f87ec41e019ce0ccaea1916a16b2a4d6063333ce2f4a
  - Both corpus hashes match the kickoff.
- **Outputs:** `lease-clauses-PR-delta.csv` and this log.
- **Kickoff vs SOP:** no conflict was found. The kickoff's "Puerto Rico is not a state" instruction is applied throughout: rows say "Puerto Rico", and an integrity check bars "the state" in PR bodyText (§8).

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A: files, counts, per-state counts (rule 23) | Done | §1.1 |
| Channel and corpus proof (rule 24) | Done: corpus, with the official site unreachable from the workspace; browser hash checks | §1.1 |
| Currency (rule 16) | Done | §1.2 |
| Constitution, court rules, regulations (rules 21, 35, 39) | Done; DACO regulations partly unreachable | §1.3, §7 |
| Tag-first: 120 shared and blank-states clauses, plus `edu-cares-act-notice` | Done: 59 tagged, 21 overridden, 41 not tagged | §2 |
| Single-state triage (rule 26) | Done: 534 read, 0 taggable | §2.3 |
| Topic canvass: 360 topics (rules 27, 36) | Done: every topic has a PR row | §18 |
| New rows | Done: 49 clauses and 352 education rows | §3 |
| Layout and placement (rule 40) | Done | §4 |
| Dormant rows (rule 25) | Done: none existed | §5 |
| Optional clauses (rule 54) | Done | §6.1 |
| Integrity checks | Done: 0 failures | §8 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Step D screens (rules 40-53) | Done | §11 |
| Independent check (rule 80) | Done | §13 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A (rule 23):** the attached `lease-clauses.csv` is 23,638,982 bytes, has CRLF row ends (8,816), no BOM and 17 columns.
  - It holds 8,815 rows, 8,706 of them active: 1,302 lease clauses and 7,404 education rows. Every per-state count matches the kickoff.
  - Of the active clauses, 119 are shared by two or more states, 1,182 are single-state, and 1 has blank states (`security-deposit-return`).
  - No row was tagged PR and no `-pr` id existed (rule 25: nothing to re-verify).
- **Official site:** one request to bvirtualogp.pr.gov from the workspace shell failed (proxy CONNECT 403), and one through the fetch tool failed. So the corpus is the channel, as the kickoff directs.
- **Corpus verification:** `verify_pr.py` reports:
  - 3,225 downloads, 0 not HTTP 200.
  - 42 files shipped whole, with 0 hash mismatches.
  - 3,219 PDFs with text, and 0 files outside the manifests.
  - One manifest entry is a .docx (Compras/151-2004) with no text extract. It is irrelevant to leases.
- **Completeness against `ogp_items.json` (rule 19):**
  - The library lists 14,867 items: 14,283 files and 584 folders.
  - The crawl's selection rule (type "Ley según enmendada", or a NNNN-2025/2026 file name) selects 3,168 files. The manifest has exactly those 3,168 URLs, with no duplicates and none extra.
  - 2025 laws 1-185 and 2026 laws 1-210 are all present.
  - 13 of the 2025-2026 files are scans with no text layer (Leyes 57-59, 71-72, 199-200 and 205-210 of 2026). Their titles were screened, and only 205-2026 (Municipal Code) and 208-2026 (older adults) touch housing; neither amends a cited article.
  - **Gap:** 262 files that are untyped or typed "Ley original", outside the original-law folders, have no consolidated copy in the corpus. Their titles were screened, and ten lease-relevant laws among them were fetched live (next bullet).
- **Taylor's browser approval (§6.2):** used for three things, all in the built-in browser:
  1. **Whole-PDF hash checks (rule 24, instead of re-fetching about five sections).** Every core law and every text-only law a delivered row cites was fetched live from its manifest URL and hashed in-page (SHA-256, whole file, compared with the manifest). The record is `browser_hash_checks.md`, in four rounds:
     - **First:** 7 core PDFs (Civil Code 55-2020, Code Civ. Proc. Códigos/6-1933, Justicia/0-1905, Ley 5-1973, Ley 121-2019, Ley 129-2020, Constitution).
     - **Batch 1:** 131 PDFs, every law cited after the first three slices.
     - **Batch 2:** 165 PDFs (144 laws) first cited later.
     - **Last:** the 1930 Civil Code's archival print.
     - **Result:** all 304 match. A whole-file match proves every article in it. Basis lines in 174 rows were updated to say "official PDF hash-verified live 2026-10-21".
  2. **Laws the corpus missed.** These were fetched live with pdf.js 3.11.174 text extraction. Each bundle was hashed, staged into the workspace, and its hash re-matched. The laws are 138-1975, 157-1995, 132-2015, 85-1956, 234-2014, 7-2014, 39-2012, 36-1989, 48-1990 (student housing, whose art. 8(g) requires a lease clause) and Municipios/222-1938 (repealed by Ley 107-2020).
  3. **Regulations.**
     - The registry app.estado.gobierno.pr was blocked in the built-in browser (ERR_BLOCKED_BY_CLIENT, two attempts).
     - DACO's own 2024 transition-report lists were read instead (regulations in force, administrative orders in force, laws DACO administers), plus DACO Reg. No. 6451 (collection agencies, docs.pr.gov).
     - DACO's student-housing regulation was found only as a copy hosted by UPRM: PDF SHA-256 e0ea2c51…, 20 pages, text hash re-matched after staging.
     - The certified scan of Ley 157-2026 was downloaded and its hash matched the manifest, so page 5 could be read as an image (§1.2).
     - Not reached: DACO Reg. Nos. 9158, 6728 and 6811 (docs.pr.gov 404). §7 has the request made to Taylor under rule 13.
- **Next corpus:** select the official library's items by file and number, not by its type field (Proposed SOP changes).

### §1.2 Currency and dated versions (rule 16)
- **Consolidation dates:**
  - Civil Code (Ley 55-2020): Rev. 21 Aug 2026, which includes Ley 122-2026 (art. 1343: writing required only for leases over six years).
  - Code of Civil Procedure (Códigos/6-1933): Rev. 2 Jun 2026, which includes Leyes 31-2026 (arts. 623, 632) and 95-2026 (arts. 621, 627).
  - The separate "Ley de Procedimientos Legales Especiales" print (Justicia/0-1905), also Rev. 2 Jun 2026, omits Ley 31-2026. This was found by script diff, so 0-1905 was not relied on.
  - Ley 54-1989: Rev. 12 Sep 2026. Constitution: "Revisado 15 de abril de 2024".
- **The overlay script** (`currency.py`, accent-insensitive) searches all 463 session-law files of 2025-2026 for the law's number, its long-form title and "Ley Núm. N de <date>" within 400 characters of the article number. The long-form search was added mid-pass, after a slice found that short names missed amendments; earlier runs were redone where they had used a bare name. Every relied-on article carries a currency line in its row. Amendments found and handled:
  - **Ley 145-2025** rewrites Ley 140-1974 art. 2's opening sentence and subsections A and J. The consolidation prints the new J but the old opening sentence and A; five rows' currency lines were corrected.
  - **Ley 157-2026** (Condominium Act) takes effect about 29 Oct 2026, 90 days after its 31 Jul 2026 approval, and is already printed in the consolidation. Its § 3 rewrites art. 49; the OCR stops after (a)(2)(i). The certified scan, hash-matched, shows an ellipsis after (a)(2)(i) and another closing the article, so (a)(2)(ii)-(iii) are unchanged. Arts. 17, 47, 49, 52, 57 and 65-76 are amended or renumbered (old art. 70 becomes art. 68); rows citing them state both regimes and the date.
  - **Ley 181-2026** rewrites Ley 76-2013 art. 9 and keeps the long-term-care reprisal sentence. **Ley 79-2026 and Ley 87-2026** amend Ley 121-2019 arts. 3 and 9(j)-(k), not 4 or 9(a). **Ley 104-2026** adds art. 20 to Ley 238-2004.
  - **Ley 131-2026** amends Civil Code art. 1327 (a loan is gratuitous unless interest is agreed). **Ley 8-2026** amends Ley 195-2011 arts. 8 and 12 (not cited). **Ley 138-2025** inserts Ley 54-1989 art. 1.3(q) and re-letters the later definitions; no delivered row cites a re-lettered definition.
  - **Ley 254-1974:** art. 3 as amended now eliminates misdemeanours automatically after 30 days, while art. 2's certificate warning still says six months. The statute contradicts itself; the row says so.
  - **Ley 57-2020:** the title mentions eviction measures, but the consolidation prints no such article in force.
- **Scanned 2026 laws without text** (57-59, 71-72, 199-200, 205-210): their titles were screened, and none amends a cited article. Each currency line says so.
- **Bills (rule 18):** none relied on.

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- **Constitution:** proved complete. Arts. I-IX have every section (art. II §§ 1-19; § 20 struck by Congress and not printed). Batteries PR-M-CN01-CN09 ran with controls; must-hit "Gobernador" returned 19 hits.
  - Art. II §§ 3, 4 and 7 (religion, speech, contracts clause) bind only the government.
  - §§ 1 (dignity; no discrimination by race, colour, sex, birth, origin, social condition, political or religious ideas), 6 (association) and 8 (privacy) are general. How they apply between private parties is a case-law question, not searched (§7).
- **Court rules and forms (Judicial Branch files in the corpus):**
  - Rules of Civil Procedure, including R. 4.4 (service on an agent), 8.7 (English documents) and 35.4.
  - Eviction forms: OAT-972 summons, OAT-1801 answer, OAT-1742 pro se motion, and OAT-931, whose item 7 recites a prior request to vacate and pay.
  - The court's eviction guides, which include the Eviction Prevention Program (§7).
- **Regulations:**
  - DACO's 2024 in-force list contains no residential-lease regulation.
  - DACO Reg. No. 6451 (collection agencies) was read.
  - The DACO student-housing regulation was read from an unofficial copy (§1.1).
  - DACO Administrative Order 2021-010 (expedited student-housing complaints) is noted.
  - DACO Order 2026-006 (31 Jul 2026, drought price freeze) was read by fetch-tool summary. It covers water goods and services, not rent.
  - Reg. Nos. 9158, 6728 and 6811 were not reached, nor were Department of Health, Housing, Fire Bureau or Energy Bureau regulations. Rows that turn on them say so (§7).
- **Federal law:** it applies in Puerto Rico unchanged (FHA, lead disclosure, SCRA, CARES Act, PTFA, FCRA). The federal texts are not in the corpus. Rows that rest on them cite the U.S.C. or C.F.R. section, and the independent check verified the federal claims against official federal text where it could (§13).

### §1.4 Agents and usage
- **Usage budget (kickoff):**
  - Big files were read by script.
  - At most two agents ran at a time throughout: seven canvass helpers (C1-C7, 52/52/52/52/52/52/48 topics), then two triage helpers (TA, TB, 267 clauses each), each saving after every topic or clause. No helper was restarted; none hit a usage limit.
  - The independent check ran one agent at a time (§13).
- **Research mode** was not turned on. Proofs of absence were run by local batteries over the whole corpus with controls (rule 19), which the canvass did for every topic. No statute language stayed ambiguous enough to need it, and the cross-chapter search was the outside-title census (§17).
- **Mid-pass corrections that affected helpers:**
  - **Page footers.** The footer cleaner dropped real lines in browser texts. Fixed: the line after an OGP footer is dropped only if it looks like a running title.
  - **Article indentation.** The heading splitter ignored articles indented 7-14 spaces, as in Ley 150-2008 and Ley 173-2016. Fixed: 353 files gained 2,605 article units (58,491 → 61,096), no file lost units, and the core codes split exactly as before.
  - **Effect on earlier batteries.** Text was always indexed, so earlier batteries searched the same words. Only article attribution and per-unit counts changed. Helpers reran affected batteries under new numbers, and boundary lines state the unit count at the run.

### §1.5 Batteries (rule 19)
- **Engine:** local regex over the corpus units (`prlib.battery`).
  - Text is normalised (footers dropped, whitespace collapsed, quotes straightened).
  - Every run has a nonsense control (always 0) and a must-hit control, plus named positives. A positive must be a unit the author read that contains the term.
  - Patterns are written in Spanish and accent-tolerant.
  - Tenancy-filtered runs are repeated without the filter before an absence is cited.
- **Count:** 456 batteries: 38 main-pass (PR-M-*), and 418 by helpers (PR-C1-001 to PR-C7-076).
  - 64 ran with a positive that failed, and 57 ran with no positive. A script confirmed that every delivered row citing one of these discloses it ("recorded as failed", "not relied on", or "rerun as …").
  - The two main-pass retaliation batteries without a positive (PR-M-RET01/RET02) were rerun as PR-M-RET03/RET04, with Ley 76-2013 art. 9 as the positive. That rerun surfaced the reprisal rights of older adults and people with disabilities (Ley 121-2019 art. 4(A)(ii); Ley 238-2004 art. 4(b)), now stated in `no-just-cause-eviction-pr` and `edu-retaliation-pr`.
- **Boundary statement in every absence row:** the corpus index includes OGP consolidated laws, 2025-2026 session laws, Judicial Branch rules, forms and guides, the browser-fetched laws, DACO's 2024 lists and Reg. No. 6451, and states the unit count at the run. It excludes other regulations, municipal ordinances and case law (there is no case-law corpus).

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,302 active lease clauses.
  - The 120 shared and blank-states clauses, plus `edu-cares-act-notice` (kickoff), were each read in full, first in the main pass (a preliminary verdict for each) and then by the canvass slice holding the topic. Every recommendation was reviewed in the main pass before tagging, and each tag's reason is written into its " | PR: …" segment.
  - Fee screens (kickoff; rule 26): `keys` and `hoa-compliance` pass. Puerto Rico has no closed fee list, no upfront-fee ban and no domestic-violence lock-change statute. A card surcharge is barred by Ley 150-2008, and condominium fines are capped by Ley 129-2020 art. 49(i). Every charge clause's segment records its screen.
- **Result:** 59 tagged PR as written (58 clauses plus `edu-cares-act-notice`), 21 overridden by Puerto Rico clauses, 41 not tagged.
- **`edu-cares-act-notice` is tagged:** its "your state's notices" reads as Puerto Rico's demand under warning and end-of-term notice, and the 30 days run alongside them.

### §2.1 Tagged PR as written (59)
`addendum-precedence`, `appliances-excluded-la`, `appliances-included`, `assistance-animal-accommodation`, `association-approval-la`, `cannabis-restrictions-ak`, `carpet-cleaning-ar`, `common-area-use`, `criminal-activity-ky`, `detector-care-la`, `due-at-signing`, `early-termination-ks`, `edu-cares-act-notice`, `electronic-notice-ma`, `electronic-signatures`, `entire-agreement`, `extended-absence-notice-ks`, `fire-safety-grilling`, `furnishings-included-la`, `guest-policy-day-limit`, `hoa-compliance`, `improvements-ownership-la`, `joint-liability`, `keys`, `landlord-maintenance`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `nonrefundable-fees-wv`, `notices`, `owner-occupancy-termination-ar`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `pet-policy-or`, `possession-delay`, `prompt-payment-discount-la`, `rent-concession-wi`, `rent-escalation-la`, `rent-installments-or`, `rent-payment`, `rental-application-accuracy`, `residential-use-only`, `rules-wi`, `security-deposit-use`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `storage-space-ks-oh-ca`, `tax-insurance-escalation-la`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`.

Each tag's reason, with its fee screen where it charges anything, is in its " | PR: …" notes segment.

### §2.2 Clauses read in the main pass and not tagged, with reasons
The class decisions below were recorded once and applied to every shared clause in their class (rule 26). Each is referred to in delivered notes as "log §2.2 class decision N".
1. **Disclaimers (P.R. Civ. Code art. 1249(d)):** in an adhesion contract a clause 'que excluye o limita la responsabilidad de la parte que la redactó' is especially annullable. Every shared clause with an unqualified "Landlord is not liable" sentence is untagged, and Puerto Rico uses the disclaimer-free variants (`services-utilities-provided-ks-oh`, `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`).
2. **Unilateral changes (art. 1249(b)):** a clause letting the drafter change the contract's elements alone (new rules on notice, mid-term rent increases, new fees or payment methods on notice) is untagged.
3. **Renewal on silence (art. 1249(f)):** no automatic renewal on the tenant's silence. The art. 1335 continuation on the same terms is the law's own default, not a renewal.
4. **Limits on the tenant's actions or evidence (art. 1249(c), (g)):** no conclusive acknowledgments, pre-suit conditions or agency-exclusion clauses. An acknowledgment of condition is tied to the signed move-in report with a reporting window (`existing-condition-pr`).
5. **Entry (art. 1346(h)):** inspection 'por causas justificadas y mediante aviso previo de siete (7) días'. Every shared entry clause with shorter notice is untagged, and `landlords-access-pr` carries the rule, with an emergency limb as a drafting judgment.
6. **End of term (art. 1335):** the lease continues on the same terms until either party gives notice. Clauses that end the lease automatically, or tie continuation to acceptance of rent, are untagged (`end-of-term-pr`, `holdover-pr`).
7. **Default (arts. 1255, 1348):** the implied power to resolve requires the defaulting party to be in default and a demand under warning. The shared default clauses are overridden by `default-by-tenant-pr`.
8. **Governing law:** `governing-law-pr`.
9. **Main-pass clauses:** entry, holdover, holdover rate, termination notice, default, governing law, early termination and for-cause eviction were drafted in the main pass.
10. **Snow:** not applicable.
11. **Rows the main pass wrote first:** listed so slices pointed to them rather than duplicating. `early-termination-ks` is tagged (art. 1350 agreed early termination; its fee is an art. 1257 penalty clause).
12. **No retaliation statute and no statutory end-of-term notice period:** the lease supplies the period (`end-of-term-pr`). §1.5 has the reprisal rights later found for older adults and people with disabilities.
13. **Ley 35-1941:** willfully cutting a service the lease includes, or interfering with peaceful enjoyment, is a crime. The exception is three or more months unpaid after a certified-mail demand giving 5 working days. No clause promises a service cutoff.
14. **Ley 140-1974:** a municipal judge may provisionally order urgent repairs and resolve disturbance disputes. As amended by Ley 145-2025 (§1.2).
15. **Health and water laws** bear on habitability rows only.
16. **Special districts (Ley 351-2000 art. 6.06; Ley 214-2004 art. 20):** the bold acknowledgment `special-district-representation-pr`.
17. **The 1930 Code (Códigos/48-1930)** governs leases running on 28 Nov 2020 (art. 1813; the 2020 Code took effect 180 days after its 1 Jun 2020 approval, art. 1820).
18. **Special-district and student-housing clauses** were written in the main pass.
19. **Index rebuild (§1.4):** batteries affected by it were rerun.
20. **Penalty clauses vs pre-calculated damages (arts. 1257, 1249(c)):**
    - A charge written as a cláusula penal is allowed: the court may moderate it 'en casos de extrema desproporción económica'. This covers late fees, early-termination fees, the optional holdover charge and actual re-key costs.
    - The art. 1257 "cálculo anticipado del daño" variety, which bars the tenant from proving a smaller loss, is not written into a form lease.
    - So there is no preset schedule of cleaning or repair deductions. `deposit-cost-schedule-pr` is delivered switched off, and the education row says such a schedule is lawful between negotiating parties.
21. **Ley 128-1941 § 5(b):** renting a dwelling the Health Secretary declared unfit, before repairs are made, forfeits rent.
22. **Ley 157-2026:** in force about 29 Oct 2026 (§1.2).
23. **Ley 57-2014 art. 1.3(l):** resale of electricity makes a person an electric service company (see 31).
24. **Scanned 2026 laws:** currency caveat (§1.2).
25. **Section titles used across rows:** "Landlord's Right of Entry", "Ending the Lease at or After the End of the Term", "Holding Over After the Lease Ends", "Default by Tenant", "move-in condition report".
26. **Consumer and payment laws found by C1, and their reach.** Leyes 209-2016, 95-2006 and 5-1973 art. 7A are read as reaching a landlord who rents dwellings as a business. Each speaks of a merchant or business dealing with a consumer, and none excludes leases. This is the cautious reading, with case law not searched; rows state it and are VERIFIED under the NEEDS_REVIEW policy (§7).
27. **Ley 132-2015 art. 2:** an adhesion contract may be ended the same way it was made, and the provider must say before signing how it can be ended. Read as reaching a form lease offered by a landlord renting as a business, so the tenant's notice may go the way the lease was signed (`end-of-term-pr`). It does not change the term.
28. **Currency tool:** long-form law names were added to the search (§1.2).
29. **Main-pass topics:** the canvass answered them with education rows and findings, not clauses.
30. **Electronic notices (Ley 148-2006 art. 3(b)(5)):** the Electronic Transactions Act does not apply to notices of default, acceleration, repossession, eviction or the right to cure on a principal-residence lease. Those notices go on paper (hand delivery or certified mail), and an e-mail copy is a courtesy only. `default-by-tenant-pr`, `end-of-term-pr`, `notices` and `electronic-notice-ma` reflect this, and `electronic-signatures` covers signing only.
31. **Electricity pass-throughs:** a tenant may reimburse an electric bill only for the unit's own meter, at the billed amount, with no markup. Allocating a shared meter or submetering is not offered (`utility-transfer-pr`, `utility-allowance-cap-pr`).
32. **Tenant-caused damage:** `tenant-caused-damage-pr` (arts. 1346(c), 1348(b), 1176), with at-fault persons matching `casualty-termination-pr`.
33. **Currency lines are rerun by each author**, never copied.
34. **Laws found by C4:** Penal Code art. 196(c), possessory injunction (Code Civ. Proc. arts. 690-695), Registry Act arts. 5 and 112, Military Code art. 3.16, forfeiture, homestead, the 2024 Arbitration Act, other protective-order laws, Ley 244-2003 art. 11(b).
35. **Civil Code facts:**
    - The age of majority is 21 (art. 97).
    - A receipt for the last installment with no reservation presumes earlier ones paid (art. 1130), so receipt rows tell landlords to note unpaid rent on every receipt.
    - A creditor who refuses payment without reason risks a 5% sanction (art. 1137).
    - Art. 1334 "salvo pacto distinto" allows the optional `sale-termination-pr`.
36. **Fee screens for `keys` and `hoa-compliance`:** see the scope bullet above.
37. **Laws found by C6:** Ley 21-1987 and Ley 104-1958 are repealed archive copies; the three situational lease statements; condominium fine caps; the tenant's rent deposit for a delinquent owner's fees (Ley 129-2020 art. 59; Ley 107-2020 art. 3.010(b)).
38. **Ley 5-1973 art. 7A's special-law exception:** a lease under the general Civil Code lease chapter is read as outside it, and item 6 of the article names a lodging tenant. The 14 rows relying on art. 7A state this.
39. **Unread regulations:** an unread regulation listed in an absence row's boundary is a search boundary, not a NEEDS_REVIEW ground (DACO Reg. No. 9158 in about 60 rows). A row is NEEDS_REVIEW only when it relies on the regulation's content, or when the regulation is the known home of the rule the row answers: Energy Bureau rules for electricity resale, DACO Reg. Nos. 6811, 6728 and 6753, the Housing subsidy regulation, the adopted fire and building codes, and the student-housing regulation's in-force status.
40. **Paragraphs reprinted by Ley 157-2026:** a row quoting a Condominium Act paragraph whose pre-29-Oct-2026 wording was not read is NEEDS_REVIEW for that paragraph, and states both regimes.

**Not tagged (41), with the reason in brief:**
- `services-utilities-provided`: Class decision 1: its Landlord is not liable sentence meets art. 1249(d); force majeure is already default law (art. 1166).
- `default-by-tenant-co`: Class decision 7.
- `early-termination`: One curated answer; early-termination-ks handles periodic tenancies.
- `holdover`: Starts holdover at 'the end of the Term' and makes continuation depend on Landlord accepting Rent; in Puerto Rico the lease continues on the same terms until a party gives notice (P.R. Civ. Code art. 1335), and 'holdover damages in the maximum amount permitted by applicable law' points to a measure Puerto Rico does not set (art. 1248 reads it against the drafter).
- `tenants-property-insurance`: 'Landlord is not liable for any such loss or damage' is a disclaimer annullable in an adhesion contract: P.R. Civ. Code art. 1249(d) (class decision 1).
- `pet-policy`: 'may enter the property and remove a pet, without liability to Tenant' is an art. 1249(d) disclaimer (class decision 1) and an entry/removal power outside P.R. Civ. Code art. 1346(h) (class decision 5).
- `parking`: 'is not liable for damage to or theft of a vehicle or its contents' is an art. 1249(d) disclaimer (class decision 1); also inconsistent with Ley 120-1973 art. 8's depositary rule where that Act applies.
- `storage-space`: 'Landlord is not liable for damage to or theft of items stored there' is an art. 1249(d) disclaimer (class decision 1).
- `guest-policy`: Its "period specified by Landlord within a given time frame" is not fixed in the lease, so the landlord would set or change it unilaterally: art. 1249(b) (main-pass decision 2). Puerto Rico takes guest-policy-day-limit.
- `snow-removal`: Not applicable: snow does not fall in Puerto Rico (main-pass decision 10).
- `inspection-rights`: Class decision 5: reasonable notice does not state the art. 1346(h) justified-cause and seven-day rule; landlords-access-pr covers inspections.
- `ev-charging-shared-area-co`: Rests on CO/IL right-to-charge statutes (statutory installation right and reservation fee); PR has none (PR-C5-042). Any EV electricity charge risks Ley 57-2014 art. 1.3(l) (class decision 31).
- `ev-charging-end-of-tenancy-co`: Consistent with P.R. Civ. Code art. 1347 in substance, but REQUIRED in CO/IL on their right-to-charge statutes; PR has none (PR-C5-042), so rule 26 calls for PR's own row (`edu-ev-charging-end-of-tenancy-pr`); landlords allowing a charger can use tagged `improvements-ownership-la`.
- `default-by-tenant-ks-ne`: Class decision 7.
- `tenants-property-insurance-mn`: 'Landlord is not liable, including for ordinary negligence' limits the drafter's liability: art. 1249(d) (class decision 1); the gross-negligence carve-out does not cure it.
- `parking-mn`: 'not liable, including for ordinary negligence' limits the drafter's liability: art. 1249(d) (class decision 1).
- `storage-space-mn`: 'not liable, including for ordinary negligence' limits the drafter's liability: art. 1249(d) (class decision 1).
- `landlord-maintenance-nd`: Lawful, but it carries only the notice sentence that landlord-maintenance already contains (rule 6: one curated answer); its saving sentence adds nothing PR needs once landlord-maintenance is tagged.
- `late-fee-ne`: Same subject as late-fee; Puerto Rico takes late-fee-pr.
- `possession-delay-ca`: Rule 6 one curated answer; 'as the law permits' adds nothing for Puerto Rico (art. 1255).
- `surrender-end-of-term-mn-nd`: Points to an abandoned-property provision by a name the PR lease lacks.
- `surrender-end-of-term-ks-ne`: Points to a 'Handling of Property Left Behind Section' the PR lease lacks.
- `tenant-maintenance-nv`: Not unlawful, but it restates Nevada/Alaska URLTA statutory duties (its basis rests on those statutes, rule 26) and duplicates tenant-maintenance for PR (rule 6: one curated answer); its household/guest fault-payment sentence is better carried by C4's tenant-caused-damage answer.
- `acceptable-payment-methods-nj`: Built for New Jersey/Illinois/Connecticut/New Hampshire electronic-payment rules Puerto Rico lacks, and it keeps the unilateral "Landlord may change the accepted methods on reasonable written notice" (art. 1249(b)).
- `parking-vehicle-rules-id`: Its 'towed or booted' limb: PR has no private booting procedure (PR-C5-045); immobilizing a tenant's car is self-help and risks Ley 35-1941 art. 1 (interference with peaceful enjoyment). PR takes `parking-vehicle-rules`.
- `end-of-term-notice-ga`: NOT (art. 1335; end-of-term-pr)
- `landlords-access-mi`: Class decision 5.
- `rules-ia`: "Landlord may adopt new written rules during the Term by giving Tenant reasonable notice" is a unilateral change by the drafter (art. 1249(b), main-pass decision 2) and conflicts with art. 1344 (changes need the lease's own form); its Iowa URLTA reasonableness test has no Puerto Rico source.
- `tenant-caused-damage-nm`: Rule 6 one curated answer; its at-fault persons differ from casualty-termination-pr; PR uses tenant-caused-damage-pr (decision 32).
- `maintenance-allocation-ks`: Built on Kansas's separate-writing-with-consideration rule (K.S.A. 58-2553(c)), which Puerto Rico does not have; its single-family/multi-unit instructions would mislead.
- `periodic-tenancy-notice-mt`: NOT (MT statutory floors; end-of-term-pr)
- `informal-dispute-resolution-or`: Its pre-suit notice-and-meeting step conditions the tenant's court action: P.R. Civ. Code art. 1249(c) (31 L.P.R.A. § 9803) ('la que le prohíbe o limita al adherente la interposición de acciones'), class decision 4. The saving sentence does not remove the precondition.
- `late-fee-ky`: Same subject as late-fee; its "once for each late payment" is folded into late-fee-pr.
- `returned-payments-ky`: Its single "[amount]" fee for any returned payment invites a check fee above the $10 Ley 208-1995 § 2-502(g) sets; Puerto Rico takes returned-payments-pr.
- `utilities-responsibility-ky`: Lawful, but its added 'or that applicable law requires Landlord to supply' points to a duty Puerto Rico law does not impose (rests on Kentucky's URLTA, rule 26) and duplicates utilities-responsibility (rule 6).
- `rent-increase-midterm-ky`: Lets Landlord raise rent during the Term on 30 days' notice: a unilateral change to the price, which the parties or a third party they name must set (art. 1340), and especially annullable in an adhesion contract (art. 1249(b)); main-pass decision 2.
- `surrender-end-of-term-nh`: Points to a 'Handling of Property Left Behind Section' the PR lease lacks.
- `scheduled-services-entry-la`: Class decision 5: shortens the art. 1346(h) seven-day notice.
- `showing-notice-la`: Class decision 5: shortens art. 1346(h).
- `rental-application-accuracy-la`: Rests on Louisiana's expungement statute; rule 6 one curated answer. Puerto Rico's record certificate already omits eliminated convictions (Ley 254-1974 art. 6).
- `firearm-rules-la`: Lawful in Puerto Rico as written, but its last sentence (no bar on firearms locked in vehicles in the parking areas) answers La. R.S. 32:292.1 and Miss. Code Ann. § 45-9-55; Puerto Rico has no parking-lot statute (PR-C6-004), so the sentence would give up a landlord choice for no legal reason (rule 26: its basis rests on other states' statutes). Puerto Rico takes firearm-rules-pr, which tracks the Weapons Act (Ley 168-2019 arts. 2.02(e), 6.14) and adds the locked-and-fixed storage rule of art. 2.02(e)(10).

**Overridden (21), shared row → Puerto Rico clause:** `late-fee` → `late-fee-pr`; `returned-payments` → `returned-payments-pr`; `application-of-payments` → `application-of-payments-pr`; `existing-condition` → `existing-condition-pr`; `acceptable-payment-methods` → `acceptable-payment-methods-pr`; `no-sublet-assign` → `no-sublet-assign-pr`; `landlords-access` → `landlords-access-pr`; `default-by-tenant` → `default-by-tenant-pr`; `surrender-end-of-term` → `surrender-end-of-term-pr`; `governing-law` → `governing-law-pr`; `assigned-parking-space` → `assigned-parking-space-pr`; `utility-allowance-cap-co` → `utility-allowance-cap-pr`; `prohibited-acts-renter-wy` → `prohibited-acts-renter-pr`; `holdover-ca` → `holdover-pr`; `casualty-termination-mt` → `casualty-termination-pr`; `government-fee-reimbursement-ky` → `government-fee-reimbursement-pr`; `tenant-death-contact-nh` → `tenant-death-contact-pr`; `tenant-repair-agreement-hi` → `tenant-repair-agreement-pr`; `pest-cooperation-la` → `pest-cooperation-pr`; `no-liens-ar` → `no-liens-pr`; `security-deposit-return` → `security-deposit-return-pr`.

### §2.3 Single-state clauses (rule 26 triage)
- **Screened:** 1,182 single-state clauses.
  - A script excluded the 648 whose title or body names another state or its statute.
  - Two helpers (TA, TB; `TRIAGE-BRIEF`) read the remaining 534 in full, 267 each, against the Puerto Rico rows, the tags and the class decisions.
- **Verdicts:** TA 0 TAGGABLE / 267 NOT / 0 UNSURE; TB 0 / 267 / 0. Across both:
  - 395 rest on their own state's statute (OWN_STATUTE).
  - 56 conflict with Puerto Rico law (PR_CONFLICT): entry notice under seven days, holdover charges written as pre-agreed damages, continuation tied to accepting rent, liability limits, unilateral changes, renewal on silence, and e-mail service of default notices.
  - 75 answer a subject Puerto Rico already answers (PR_ANSWERED). The two helpers coded this differently, but the result is NOT either way.
  - 8 cannot arise in Puerto Rico (snow, heating, two energy-benchmarking programs, one Maryland association).
- **Gaps the triage surfaced, all closed:**
  - `sex-offender-occupancy`: `edu-sex-offender-residence-pr`, Ley 266-2004 art. 4(f).
  - `children-occupancy`: `edu-children-occupancy-pr`, Ley 10-1994 art. 31(15) and the FHA.
  - `tenant-employee-housing`: `employer-housing-pr`, `edu-employee-housing-pr`.
  - `foreign-ownership`: `edu-no-foreign-ownership-rule-pr`.
  - Optional rent acceleration: declined in `edu-landlord-remedies-termination-pr` (§6.1).
- **Closest call:** `ev-charging-requirements-co`. Its terms assume Colorado's statutory right to install a charger, which Puerto Rico lacks, and Puerto Rico answers the topic with `edu-no-ev-charging-requirements-pr`.

## §3 New rows (rule_type, basis, citation)
- **Every new id ends in `-pr`** and has `states` = PR, `last_checked` 2026-10-21, and notes opening with "PR: Present.", "PR: Confirmed absent.", "PR: Mixed" or "PR: Not applicable." Each records:
  - the Spanish text quoted with its citation and translation;
  - a currency line;
  - a battery line, with boundary, for any absence;
  - its basis ("section-open, OGP consolidation … (official PDF hash-verified live 2026-10-21)"; "browser-fetched official PDF text"; "unofficial copy, text-only"; or "fetch-tool summary");
  - "Rule 15: written section-open."
- **Quote check (rule 59):** `quotecheck.py` resolves each quote's citation to the cited article (or the L.P.R.A. section) and requires the quote to appear there. Result on the delivered delta: 1,864 quotes in the PR rows' notes and the PR segments of shared rows, and 1,857 in a separate run over the PR rows' notes and bodies, all with 0 MISS and 0 NO CITATION. One quote is "found elsewhere in corpus": R.C. 16-2022 § 1, a joint resolution the checker doesn't resolve, read by eye.

### §3.1 Puerto Rico lease clauses (49 new)
| Row | active | rule_type | basis | topic_key | supersedes | status | written by | key citations |
|---|---|---|---|---|---|---|---|---|
| `abandoned-property-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | abandoned-property |  | VERIFIED | C3 | P.R. Civ. Code art. 747; P.R. Civ. Code art. 746; P.R. Civ. Code arts. 746 |
| `acceptable-payment-methods-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | acceptable-payment-methods | `acceptable-payment-methods` | VERIFIED | C1 | P.R. Civ. Code art. 1249(b); P.R. Civ. Code art. 1074; Ley 150-2008, art. 1 |
| `animal-care-access-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | animal-care-access |  | VERIFIED | C5 | P.R. Civ. Code art. 1346(h); P.R. Civ. Code art. 14; P.R. Civ. Code art. 232 |
| `application-of-payments-pr` | TRUE | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | application-of-payments | `application-of-payments` | VERIFIED | C1 | P.R. Civ. Code art. 1126; P.R. Civ. Code art. 1249(c); P.R. Civ. Code art. 1127 |
| `assigned-parking-space-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | assigned-parking-space | `assigned-parking-space` | VERIFIED | C5 | P.R. Civ. Code art. 1249; P.R. Civ. Code art. 1331; P.R. Civ. Code art. 1344 |
| `condominium-lease-statement-pr` | TRUE | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Ley 129-2020 art. 37 (31 L.P.R.A. § 1922i) + SERVES_LANDLORD | association-obligations-disclosure |  | VERIFIED | C6 | Ley 129-2020, art. 37; Ley 104-1958, art. 15; Ley 129-2020 art. 37 |
| `access-control-lease-statement-pr` | TRUE | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Ley 107-2020 art. 3.016(b) (21 L.P.R.A. § 7426(b)) | association-obligations-disclosure |  | VERIFIED | C6 | Ley 107-2020, art. 3.016(b); Ley 21-1987 § 17; Ley 107-2020 art. 3.016 |
| `pest-cooperation-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | bed-bug-cooperation | `pest-cooperation-la` | VERIFIED | C2 | P.R. Civ. Code art. 1346(h); P.R. Civ. Code art. 1346(g); P.R. Civ. Code art. 1346(c) |
| `casualty-termination-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | casualty-termination | `casualty-termination-mt` | VERIFIED | C3 | P.R. Civ. Code art. 1176; P.R. Civ. Code art. 1177; P.R. Civ. Code art. 1178 |
| `collection-fee-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD + CONSTRAINED_TERM | collection-fee |  | VERIFIED | C1 | P.R. Civ. Code art. 1257; Ley 143-1968, art. 17(10); Ley 143-1968 art. 17 |
| `no-liens-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | construction-liens | `no-liens-ar` | VERIFIED | C2 | Ley 73-1931, § 1; P.R. Civ. Code art. 1233; Ley 73-1931 § 2 |
| `default-by-tenant-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | default-by-tenant | `default-by-tenant` | VERIFIED | main | P.R. Civ. Code art. 1255; P.R. Civ. Code art. 1348; P.R. Civ. Code art. 1159 |
| `deposit-cost-schedule-pr` | FALSE | CONDITIONAL | SERVES_LANDLORD | deposit-cost-schedule |  | VERIFIED | C1 | P.R. Civ. Code art. 1257; P.R. Civ. Code art. 1249(c); P.R. Civ. Code art. 1346(i) |
| `designated-repairer-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | designated-repairer |  | VERIFIED | C2 | P.R. Civ. Code art. 1346(d); Ley 244-2003 art. 11; P.R. Civ. Code art. 14 |
| `existing-condition-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | existing-condition | `existing-condition` | VERIFIED | C2 | P.R. Civ. Code art. 1346(i); P.R. Civ. Code art. 1345(a); P.R. Civ. Code art. 1249(c) |
| `no-hunting-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | farmland-hunting-rights |  | VERIFIED | C7 | Ley 241-1999, art. 22; P.R. Civ. Code art. 1249(b); Ley 241-1999 art. 22 |
| `fees-and-charges-pr` | TRUE | CONDITIONAL/RECOMMENDED | REQUIRED_DISCLOSURE: Ley 209-2016, art. 3 (10 L.P.R.A. § 4243), on the cautious reading that a lease is a document addressed to the consumer + SERVES_LANDLORD | fee-transparency |  | VERIFIED | C1 | Ley 209-2016, art. 3; Ley 209-2016 art. 2(a); Ley 5-1973 art. 7A |
| `firearm-rules-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | firearms |  | VERIFIED | C6 | Ley 168-2019, art. 6.14; Ley 168-2019, art. 2.02(e); Ley 168-2019, art. 2.02(e)(10) |
| `flood-zone-notice-pr` | TRUE | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Ley 3-1961 art. 8(b) (23 L.P.R.A. § 225g(b)) + SERVES_LANDLORD | flood-disclosure |  | VERIFIED | C6 | Ley 3-1961, art. 8(b); Ley 3-1961, art. 8; Ley 3-1961, art. 9(a) |
| `governing-law-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | governing-law | `governing-law` | VERIFIED | main |  |
| `government-fee-reimbursement-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | government-fee-reimbursement | `government-fee-reimbursement-ky` | VERIFIED | C1 | P.R. Civ. Code art. 1346(f); Ley 209-2016, art. 3 |
| `government-fines-reimbursement-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | governmental-fines |  | VERIFIED | C1 | P.R. Civ. Code art. 1167; P.R. Civ. Code art. 1165 |
| `guaranty-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | guarantor-renewal |  | VERIFIED | C4 | P.R. Civ. Code art. 1335; P.R. Civ. Code art. 1482; P.R. Civ. Code art. 1472 |
| `holdover-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | holdover | `holdover-ca` | VERIFIED | main | P.R. Civ. Code art. 1335; P.R. Code Civ. Proc. art. 621; P.R. Civ. Code art. 1167 |
| `holdover-rate-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | holdover-rate |  | VERIFIED | main | P.R. Civ. Code art. 1257; P.R. Civ. Code art. 1257(b) |
| `joint-liability-reservation-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | joint-liability |  | VERIFIED | C2 | P.R. Civ. Code art. 1105; P.R. Civ. Code art. 1096 |
| `landlords-access-pr` | TRUE | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | landlord-entry | `landlords-access` | VERIFIED | main | P.R. Civ. Code art. 1346(h); P.R. Civ. Code art. 1346(l); P.R. Civ. Code art. 15 |
| `landlord-self-cure-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | landlord-self-cure |  | VERIFIED | C4 | P.R. Civ. Code art. 1080; P.R. Civ. Code art. 1233; P.R. Civ. Code art. 1346(c) |
| `late-fee-pr` | TRUE | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | late-fee | `late-fee` | VERIFIED | C1 | P.R. Civ. Code art. 1257; P.R. Civ. Code art. 29(e); P.R. Civ. Code art. 29 |
| `subsidy-lease-conditions-pr` | TRUE | CONDITIONAL | REQUIRED_DISCLOSURE: Ley 173-1996, arts. 6(2), 7 (17 L.P.R.A. §§ 1494-1495) | lease-content-requirements |  | NEEDS_REVIEW | C5 | Ley 173-1996, art. 7; Ley 173-1996, art. 2; Ley 173-1996, art. 4(b) |
| `prohibited-acts-renter-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | prohibited-acts-renter | `prohibited-acts-renter-wy` | VERIFIED | C2 | P.R. Civ. Code art. 1346(h); P.R. Civ. Code art. 1346(c); P.R. Civ. Code art. 1346(i) |
| `principal-residence-tax-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | rent-tax |  | VERIFIED | C1 | Ley 1-2011, Sección 4030.14; Ley 209-2016, art. 3; Ley 1-2011, Sección 4030.14(a) |
| `returned-payments-pr` | TRUE | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | returned-payments | `returned-payments` | VERIFIED | C1 | Ley 208-1995, Sección 2; P.R. Civ. Code art. 1257; Ley 208-1995 § 2 |
| `sale-termination-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | sale-or-management-change |  | VERIFIED | C5 | P.R. Civ. Code art. 1334; P.R. Civ. Code art. 1350; P.R. Civ. Code art. 304 |
| `security-deposit-no-interest-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | security-deposit-interest |  | VERIFIED | C1 | P.R. Civ. Code art. 1454; P.R. Civ. Code art. 1456; P.R. Civ. Code art. 1327 |
| `security-deposit-return-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | VERIFIED | C2 | P.R. Civ. Code art. 1248; P.R. Civ. Code art. 1160(b); P.R. Civ. Code art. 1346(i) |
| `special-district-representation-pr` | TRUE | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Ley 351-2000, art. 6.06 + REQUIRED_DISCLOSURE: Ley 214-2004, art. 20 | special-district-representation |  | VERIFIED | main | Ley 351-2000, art. 6.06; Ley 214-2004, art. 20; Ley 56-1958, art. 15 |
| `student-housing-certification-pr` | TRUE | CONDITIONAL/REQUIRED | REQUIRED_DISCLOSURE: Ley 48-1990, art. 8(g) | student-housing |  | NEEDS_REVIEW | main | Ley 48-1990, art. 2(b); Ley 48-1990, art. 3; Ley 48-1990, art. 14 |
| `no-sublet-assign-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | sublet-assign | `no-sublet-assign` | VERIFIED | C2 | P.R. Civ. Code art. 1336; P.R. Civ. Code art. 1248; Ley 129-2020, art. 40 |
| `surrender-end-of-term-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | surrender-end-of-term | `surrender-end-of-term` | VERIFIED | C4 | P.R. Civ. Code art. 1335; P.R. Civ. Code art. 1346(i); P.R. Civ. Code art. 1345 |
| `tenant-caused-damage-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage |  | VERIFIED | C4 | P.R. Civ. Code art. 1346(c); P.R. Civ. Code art. 1346(i); P.R. Civ. Code art. 1348 |
| `tenant-death-contact-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | tenant-death | `tenant-death-contact-nh` | VERIFIED | C4 | P.R. Civ. Code art. 1334; P.R. Civ. Code art. 1233; P.R. Civ. Code arts. 1233 |
| `employer-housing-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | tenant-employee-housing |  | VERIFIED | C7 | P.R. Civ. Code art. 1350; P.R. Civ. Code art. 1249(b); P.R. Civ. Code art. 1331 |
| `tenant-repair-agreement-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | tenant-repair-agreement | `tenant-repair-agreement-hi` | VERIFIED | C2 | P.R. Civ. Code art. 1346(c); P.R. Civ. Code art. 1345(b); P.R. Civ. Code art. 1345(c) |
| `end-of-term-pr` | TRUE | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | termination-notice |  | VERIFIED | main | P.R. Civ. Code art. 1335; P.R. Civ. Code art. 1249(f); P.R. Civ. Code art. 1333 |
| `unpaid-amounts-interest-pr` | TRUE | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | unpaid-damages-interest |  | VERIFIED | C1 | P.R. Civ. Code art. 1169; Ley 1-1973, art. 1; Ley 1-1973, art. 3 |
| `usufructuary-lessor-pr` | TRUE | CONDITIONAL | SERVES_LANDLORD | usufructuary-lessor |  | VERIFIED | C7 | P.R. Civ. Code art. 1338; P.R. Civ. Code art. 896; P.R. Civ. Code art. 910 |
| `utility-allowance-cap-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | utility-allowance-cap | `utility-allowance-cap-co` | NEEDS_REVIEW | C3 | Ley 57-2014, art. 1.3(l); P.R. Civ. Code art. 1233; Ley 57-2014 art. 1.3(l) |
| `utility-transfer-pr` | TRUE | RECOMMENDED | SERVES_LANDLORD | utility-transfer |  | NEEDS_REVIEW | C3 | P.R. Civ. Code art. 1346(f); Ley 35-1941, art. 1; Ley 57-2014, art. 1.3(l) |

### §3.2 Puerto Rico education rows (352 new)
- By author: C1 52, C2 48, C3 51, C4 47, C5 51, C6 52, C7 48, main 3.
- By the opening of their notes: Confirmed absent 169, Present 109, Mixed 67, Not applicable 7.
- Status: VERIFIED 335, NEEDS_REVIEW 17.
- Groups: Default & Termination 57, Landlord Responsibilities 42, Disclosures 41, Notices & General 37, Rent & Payment 35, Tenant Responsibilities 27, Security Deposit 24, Rules & Regulations 22, Other / Miscellaneous 19, Compliance & Prohibited Terms 15, Parking & Storage 10, Pets 8, Building & Safety 8, Access & Entry 7.
- Ids: `edu-abandoned-property-pr`, `edu-abandonment-mitigation-pr`, `edu-adverse-proceeding-notice-pr`, `edu-agreed-notice-methods-pr`, `edu-alarm-duties-pr`, `edu-alterations-pr`, `edu-animal-care-access-pr`, `edu-appliances-excluded-pr`, `edu-appliances-included-pr`, `edu-application-of-payments-pr`, `edu-arbitration-pr`, `edu-assistance-animals-pr`, `edu-assisted-living-termination-pr`, `edu-association-obligations-pr`, `edu-attorney-fees-pr`, `edu-automatic-renewal-pr`, `edu-cannabis-pr`, `edu-cares-act-notice-pr`, `edu-casualty-mitigation-waiver-pr`, `edu-casualty-pr`, `edu-children-occupancy-pr`, `edu-code-editions-pr`, `edu-cold-weather-vacate-notice-na-pr`, `edu-collection-fee-pr`, `edu-common-area-lighting-pr`, `edu-common-area-use-pr`, `edu-condemned-premises-pr`, `edu-condition-inspection-pr`, `edu-confession-of-judgment-pr`, `edu-confirmed-absences-habitability-pr`, `edu-confirmed-absences-misc-pr`, `edu-confirmed-absences-outside-title-pr`, `edu-construction-liens-pr`, `edu-consumer-protection-pr`, `edu-criminal-activity-pr`, `edu-cure-and-grounds-pr`, `edu-default-notice-delivery-pr`, `edu-deposit-cost-schedule-pr`, `edu-deposit-escheat-pr`, `edu-deposit-last-month-rent-pr`, `edu-disability-accommodation-pr`, `edu-disaster-duties-pr`, `edu-disturbance-pr`, `edu-double-letting-pr`, `edu-due-at-signing-pr`, `edu-dv-confidentiality-pr`, `edu-dv-eviction-protection-pr`, `edu-dv-lock-change-pr`, `edu-dv-protection-order-law-pr`, `edu-early-termination-pr`, `edu-electric-submetering-pr`, `edu-electronic-signatures-pr`, `edu-emergency-assistance-right-pr`, `edu-emergency-contact-pr`, `edu-eminent-domain-pr`, `edu-employee-housing-pr`, `edu-employee-screening-pr`, `edu-entire-agreement-pr`, `edu-entity-landlord-representation-pr`, `edu-ev-charging-end-of-tenancy-pr`, `edu-eviction-hardship-pr`, `edu-eviction-process-pr`, `edu-eviction-record-confidentiality-pr`, `edu-eviction-service-pr`, `edu-exculpatory-clauses-pr`, `edu-exemption-waiver-pr`, `edu-extended-absence-pr`, `edu-fair-housing-pr`, `edu-family-child-care-pr`, `edu-fee-in-lieu-of-deposit-pr`, `edu-fee-transparency-pr`, `edu-fee-unprovided-service-pr`, `edu-fees-as-rent-pr`, `edu-fire-code-standard-pr`, `edu-fire-safety-grilling-pr`, `edu-fire-sprinkler-duty-pr`, `edu-firearms-pr`, `edu-flood-disclosure-pr`, `edu-foreclosure-tenants-pr`, `edu-furnishings-included-pr`, `edu-governing-law-pr`, `edu-government-fees-pr`, `edu-government-fines-pr`, `edu-guarantor-renewal-pr`, `edu-guest-day-limit-pr`, `edu-guest-policy-pr`, `edu-guest-rights-pr`, `edu-habitability-materiality-pr`, `edu-habitability-modifiable-pr`, `edu-habitability-waiver-pr`, `edu-health-rules-pr`, `edu-heating-na-pr`, `edu-hoa-compliance-pr`, `edu-hoa-pr`, `edu-holding-deposit-pr`, `edu-home-business-pr`, `edu-hunting-rights-pr`, `edu-immigration-status-pr`, `edu-indefinite-lease-pr`, `edu-informal-dispute-resolution-pr`, `edu-inspection-rights-pr`, `edu-joint-liability-pr`, `edu-jury-waiver-na-pr`, `edu-keys-pr`, `edu-landlord-breach-remedy-pr`, `edu-landlord-entry-pr`, `edu-landlord-maintenance-pr`, `edu-landlord-registration-pr`, `edu-landlord-remedies-termination-pr`, `edu-landlord-self-cure-pr`, `edu-landscaping-pr`, `edu-late-fee-pr`, `edu-law-enforcement-cooperation-pr`, `edu-lead-based-paint-pr`, `edu-lease-completeness-pr`, `edu-lease-content-requirements-pr`, `edu-lease-continuation-pr`, `edu-lease-copy-pr`, `edu-lease-law-scope-pr`, `edu-lease-term-limits-pr`, `edu-limitation-of-actions-pr`, `edu-liquidated-damages-pr`, `edu-minor-tenants-pr`, `edu-no-adu-statute-pr`, `edu-no-alarm-tampering-fee-pr`, `edu-no-algorithmic-rent-rule-pr`, `edu-no-alt-housing-duty-pr`, `edu-no-application-fee-rule-pr`, `edu-no-asbestos-rule-pr`, `edu-no-balcony-inspection-rule-pr`, `edu-no-bed-bug-disclosure-pr`, `edu-no-bed-bug-rule-pr`, `edu-no-benefit-delay-defense-pr`, `edu-no-carpet-cleaning-rule-pr`, `edu-no-condemnation-disclosure-pr`, `edu-no-contamination-disclosure-pr`, `edu-no-conversion-notice-pr`, `edu-no-cooling-device-rule-pr`, `edu-no-deposit-installments-pr`, `edu-no-deposit-surrender-notice-pr`, `edu-no-disaster-displaced-guests-pr`, `edu-no-drug-free-addendum-pr`, `edu-no-drywall-disclosure-pr`, `edu-no-dv-deposit-timing-pr`, `edu-no-dv-lease-termination-pr`, `edu-no-dv-qualifying-documents-pr`, `edu-no-energy-data-release-pr`, `edu-no-environmental-event-termination-pr`, `edu-no-ev-charging-requirements-pr`, `edu-no-ev-charging-right-pr`, `edu-no-ev-charging-shared-area-pr`, `edu-no-eviction-penalty-rule-pr`, `edu-no-expedited-criminal-eviction-pr`, `edu-no-expedited-deposit-disposition-pr`, `edu-no-foreclosure-disclosure-pr`, `edu-no-foreign-ownership-rule-pr`, `edu-no-forfeiture-redemption-pr`, `edu-no-good-cause-notice-pr`, `edu-no-habitability-presumption-pr`, `edu-no-habitability-statement-pr`, `edu-no-infirmity-termination-pr`, `edu-no-initials-requirement-pr`, `edu-no-inspection-notice-penalty-pr`, `edu-no-key-control-mandate-pr`, `edu-no-knowing-use-penalty-pr`, `edu-no-landlord-insurance-mandate-pr`, `edu-no-landlord-lien-pr`, `edu-no-late-fee-limit-pr`, `edu-no-lead-safe-certificate-pr`, `edu-no-lead-state-notices-pr`, `edu-no-lease-placement-rule-pr`, `edu-no-lease-type-parity-rule-pr`, `edu-no-lease-type-size-rule-pr`, `edu-no-lockout-pr`, `edu-no-maintenance-duty-shift-pr`, `edu-no-meter-conservation-charge-pr`, `edu-no-meth-disclosure-pr`, `edu-no-military-zone-disclosure-pr`, `edu-no-mold-disclosure-pr`, `edu-no-nonrefundable-deposit-separate-notice-pr`, `edu-no-notice-service-fee-rule-pr`, `edu-no-notice-to-vacate-terms-rule-pr`, `edu-no-ordnance-disclosure-pr`, `edu-no-other-landlord-facilities-pr`, `edu-no-owner-identity-disclosure-pr`, `edu-no-parking-rules-notice-rule-pr`, `edu-no-pest-control-notice-pr`, `edu-no-pet-eviction-fact-sheet-pr`, `edu-no-plain-language-statement-pr`, `edu-no-political-access-rule-pr`, `edu-no-pool-safety-rule-pr`, `edu-no-portfolio-thresholds-pr`, `edu-no-possession-bond-pr`, `edu-no-promises-to-repair-rule-pr`, `edu-no-property-tax-rent-statement-pr`, `edu-no-radon-disclosure-pr`, `edu-no-rent-control-pr`, `edu-no-rent-receipt-anti-waiver-pr`, `edu-no-repair-cost-termination-pr`, `edu-no-repair-remedy-exemption-pr`, `edu-no-sanitary-variance-rule-pr`, `edu-no-security-deposit-cap-pr`, `edu-no-security-deposit-interest-pr`, `edu-no-security-deposit-nonwaiver-pr`, `edu-no-security-deposit-standards-pr`, `edu-no-security-device-rule-pr`, `edu-no-service-animal-misrepresentation-rule-pr`, `edu-no-sex-offender-disclosure-pr`, `edu-no-shoreline-disclosure-pr`, `edu-no-shutdown-rent-protection-pr`, `edu-no-single-family-zone-limit-pr`, `edu-no-smart-access-rule-pr`, `edu-no-sprinkler-disclosure-pr`, `edu-no-statutory-lease-form-pr`, `edu-no-stove-refrigerator-rule-pr`, `edu-no-submeter-disclosure-rule-pr`, `edu-no-submeter-regime-pr`, `edu-no-subsidy-inspection-rule-pr`, `edu-no-subsidy-late-fee-rule-pr`, `edu-no-subsidy-proration-rule-pr`, `edu-no-telecom-access-rule-pr`, `edu-no-tenant-insurance-claim-rule-pr`, `edu-no-tenant-law-sunset-pr`, `edu-no-tenant-purchase-right-pr`, `edu-no-tenant-rights-guide-pr`, `edu-no-tenant-rights-statement-pr`, `edu-no-tpa-exemption-notice-pr`, `edu-no-truth-in-renting-pr`, `edu-no-unbundled-parking-rule-pr`, `edu-no-utility-deposit-rule-pr`, `edu-no-utility-disclosure-attachment-pr`, `edu-no-utility-lien-pr`, `edu-no-utility-notice-authorization-pr`, `edu-no-utility-transfer-cutoff-pr`, `edu-no-water-heater-rule-pr`, `edu-no-waterbed-rule-pr`, `edu-no-well-testing-rule-pr`, `edu-no-window-guard-rule-pr`, `edu-nonpayment-notice-pr`, `edu-nonrefundable-deposit-notice-pr`, `edu-nonresident-owner-pr`, `edu-nonwaivable-rights-pr`, `edu-notice-delivery-methods-pr`, `edu-notice-to-quit-waiver-pr`, `edu-notices-pr`, `edu-nuisance-pr`, `edu-optional-lease-terms-pr`, `edu-owner-move-in-pr`, `edu-parking-pr`, `edu-partial-payment-pr`, `edu-payment-methods-pr`, `edu-permitted-occupants-pr`, `edu-pet-fees-pr`, `edu-pet-insurance-pr`, `edu-pet-policy-pr`, `edu-plain-language-pr`, `edu-portable-solar-pr`, `edu-possession-delay-pr`, `edu-post-eviction-property-pr`, `edu-prohibited-lease-terms-pr`, `edu-prop65-na-pr`, `edu-protected-class-inquiry-pr`, `edu-purpose-limitation-pr`, `edu-quiet-possession-pr`, `edu-recycling-pr`, `edu-religious-display-pr`, `edu-rent-concession-pr`, `edu-rent-demand-bar-pr`, `edu-rent-escalation-pr`, `edu-rent-increase-notice-pr`, `edu-rent-installments-pr`, `edu-rent-into-court-pr`, `edu-rent-payment-pr`, `edu-rent-receipts-pr`, `edu-rent-reporting-pr`, `edu-rent-tax-pr`, `edu-rental-application-accuracy-pr`, `edu-rental-inspection-pr`, `edu-renters-insurance-pr`, `edu-repair-notice-pr`, `edu-repair-orders-no-receivership-pr`, `edu-required-disclosures-pr`, `edu-required-fees-pr`, `edu-residential-use-pr`, `edu-retaliation-pr`, `edu-returned-payments-pr`, `edu-rules-regulations-pr`, `edu-sale-or-management-change-pr`, `edu-scheduled-services-entry-pr`, `edu-seasonal-rentals-pr`, `edu-security-deposit-holding-pr`, `edu-security-deposit-on-sale-pr`, `edu-security-deposit-penalty-pr`, `edu-security-deposit-return-pr`, `edu-security-deposit-use-pr`, `edu-self-help-eviction-pr`, `edu-senior-housing-staff-certification-pr`, `edu-service-animal-denial-penalty-pr`, `edu-servicemember-rights-pr`, `edu-services-utilities-provided-pr`, `edu-severability-pr`, `edu-sex-offender-residence-pr`, `edu-showing-notice-pr`, `edu-smoke-drift-pr`, `edu-smoking-policy-pr`, `edu-snow-removal-na-pr`, `edu-source-of-income-pr`, `edu-statute-of-frauds-pr`, `edu-statutory-caps-pr`, `edu-steam-radiator-na-pr`, `edu-stigmatized-property-pr`, `edu-storage-space-pr`, `edu-student-housing-license-pr`, `edu-sublet-assign-pr`, `edu-tax-escalation-pr`, `edu-tenant-bankruptcy-pr`, `edu-tenant-caused-damage-pr`, `edu-tenant-confidential-information-pr`, `edu-tenant-death-pr`, `edu-tenant-display-rights-pr`, `edu-tenant-duties-pr`, `edu-tenant-forward-proceedings-pr`, `edu-tenant-maintenance-pr`, `edu-tenant-organizing-pr`, `edu-tenant-portal-pr`, `edu-tenant-records-pr`, `edu-tenant-repair-remedies-pr`, `edu-tenant-screening-pr`, `edu-tenant-security-cameras-pr`, `edu-tenant-termination-grounds-pr`, `edu-tenants-insurance-clause-pr`, `edu-term-change-notice-pr`, `edu-towing-pr`, `edu-translation-duty-pr`, `edu-trespass-notice-pr`, `edu-unauthorized-occupants-pr`, `edu-unconscionability-pr`, `edu-unpaid-damages-interest-pr`, `edu-use-permit-pr`, `edu-usufructuary-lessor-pr`, `edu-utilities-paid-by-landlord-pr`, `edu-utilities-responsibility-pr`, `edu-utility-apportionment-pr`, `edu-utility-landlord-account-pr`, `edu-utility-payment-evidence-pr`, `edu-utility-service-continuity-pr`, `edu-utility-shutoff-rules-pr`, `edu-vehicle-rules-pr`, `edu-veterans-incentive-pr`, `edu-waiver-by-acceptance-pr`, `edu-written-notices-pr`, `no-just-cause-eviction-pr`.

### §3.3 Shared rows changed (59)
Each changed in exactly three fields, checked by script against the master (§8):
- `states`: ";PR" appended.
- `notes`: " | PR: …" appended, with the master notes kept verbatim as the prefix.
- `last_checked`: 2026-10-21.

The 59 are the tagged rows in §2.1. No shared bodyText changed, and no other state's segment was touched.

## §4 Layout and placement table (rule 40)
The batteries ran from the corpus loader in Step C, before drafting, over the whole corpus: first without a tenancy limb, then with one ("arrendamient", "arrendador", "arrendatari", "inquilin", "alquiler", "contrato de vivienda"). Number words and plurals were spelled out. They ran on the 58,400-unit index; the later index rebuild (§1.4) added no text, so the hits are unchanged.
| Battery | Query (short) | Hits | Result |
|---|---|---|---|
| PR-M-F01A / F01B | bold, underlined, dark letters, highlighted (no limb / limb) | 35 / 5 | **Bold acknowledgment required** in leases of property in the Convention Center District (Ley 351-2000 art. 6.06) and the Science, Technology and Research Trust district (Ley 214-2004 art. 20): `special-district-representation-pr`, CONDITIONAL/REQUIRED, printed in bold. Ley 56-1958 art. 15-A applies only to the Public Buildings Authority's own property, Ley 153-2013 to credit repair, and Ley 67-2000 to rent-to-own movables; none reaches a residential lease. |
| PR-M-F02A / F02B | type size ("tamaño de letra", "no menor de … puntos") | 41 / 8 | Ley 5-1973 art. 6 lets DACO require consumer documents in Spanish, unless the consumer prefers English, in type of at least 10 points. It is a power to regulate, not self-executing, and DACO's in-force list has no implementing lease regulation. Ley 67-2000 covers movables. No type-size rule reaches a lease. |
| PR-M-F03A / F03B | capitals, conspicuous, visible place | 120 / 22 | **Posting:** student-housing businesses must post DACO's list of requirements in a conspicuous place (Ley 48-1990 art. 8), and the regulation adds the license, a copy of the regulation and health and fire certificates (Regla 8). Covered in `edu-student-housing-license-pr`. No capitals rule for lease text. |
| PR-M-F04A / F04B | separate document or writing | 9 / 1 | The one tenancy hit is credit repair (Ley 153-2013). No separate-document rule reaches a residential lease (rule 48). |
| PR-M-F05A / F05B | "substantially in the following form" | 58 / 3 | No statutory residential lease form or prescribed lease text. Hits: Ley 3-2003, Ley 181-2009 and UCC § 8-511, none a lease. |
| PR-M-F06A / F06B | initials beside, immediately above the signature | 7 / 0 | No initials or signature-placement rule (`edu-no-initials-requirement-pr`). |
| PR-M-F07A / F07B | plain language, easily legible, language of drafting | 127 / 9 | **Language:** Civil Code art. 1249(a) makes especially annullable an adhesion clause not written 'de manera clara, completa y fácilmente legible, en idioma español o inglés'. Every library clause is plain English; the builder may offer Spanish (§10). Civil Code art. 26: where a law's Spanish and English texts differ, the Spanish prevails unless the law says otherwise (`edu-translation-duty-pr`). |

**Order of placement:** only one placement rule applies (bold in special districts), so nothing needed settling with Taylor (rule 40). The three situational statements are ordinary lease clauses with no placement rule:
- condominium: `condominium-lease-statement-pr`, Ley 129-2020 art. 37;
- gated community: `access-control-lease-statement-pr`, Ley 107-2020 art. 3.016(b);
- flood-prone zone: `flood-zone-notice-pr`, Ley 3-1961 art. 8(b), whose omission is a misdemeanour under art. 9.

The required student-housing certification (Ley 48-1990 art. 8(g)) is in `student-housing-certification-pr`. **Omission sanctions:** student-housing fines up to $10,000 per violation (Ley 48-1990 art. 15). The flood-zone misdemeanour is above. No sanction forfeits rent or the deposit.

## §5 Dormant rows resolved (rule 25)
None existed. No row was tagged PR, carried a `-pr` id, or was switched off with Puerto Rico in its notes before this pass (Step A). One Puerto Rico row is delivered switched off: `deposit-cost-schedule-pr` (log §2.2 class decision 20). It was written by C1 and turned off in the main pass, and its notes say why.

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Every offered clause opens "[Optional.]" or a bracketed use note and is never a default. Lease-invoked wording ("salvo pacto en contrario", "salvo pacto distinto", "a menos que se pacte", "las partes pueden pactar") was searched in the lease chapter and the general contract title. The lease chapter's defaults that the parties may change are art. 1333 (one-year term), art. 1334 (death or sale), art. 1336 (subletting), art. 1341 (payment in arrears), art. 1346(f) (who pays services) and art. 1347 (improvements). Each has an offered clause or a tagged shared clause.

**Offered (Puerto Rico clauses):** `security-deposit-no-interest-pr`, `collection-fee-pr`, `government-fee-reimbursement-pr`, `government-fines-reimbursement-pr`, `principal-residence-tax-pr`, `unpaid-amounts-interest-pr`, `pest-cooperation-pr`, `no-liens-pr`, `joint-liability-reservation-pr`, `tenant-repair-agreement-pr`, `designated-repairer-pr`, `utility-transfer-pr`, `utility-allowance-cap-pr`, `abandoned-property-pr`, `casualty-termination-pr`, `guaranty-pr`, `holdover-rate-pr`, `landlord-self-cure-pr`, `tenant-caused-damage-pr`, `tenant-death-contact-pr`, `sale-termination-pr`, `animal-care-access-pr`, `assigned-parking-space-pr`, `firearm-rules-pr`, `usufructuary-lessor-pr`, `no-hunting-pr`, `employer-housing-pr`.

**Offered (shared clauses tagged as optional):** `prompt-payment-discount-la`, `rent-escalation-la`, `tax-insurance-escalation-la`, `furnishings-included-la`, `nonrefundable-fees-wv`, `improvements-ownership-la`, `carpet-cleaning-ar`, `appliances-excluded-la`, `owner-occupancy-termination-ar`, `association-approval-la`, `electronic-notice-ma`, `cannabis-restrictions-ak`, `detector-care-la`.

**Declined, each with its reason in the education row named:**
- **A preset cleaning or repair deduction schedule:** art. 1257 pre-calculated damages risk art. 1249(c). `deposit-cost-schedule-pr` is delivered switched off; reason in `edu-deposit-cost-schedule-pr`.
- **Rent acceleration on default:** the term ends early only under art. 313 (insolvency or lost guarantees). A resolved lease leaves only proven damages (art. 1255(e)), and an agreed amount is a moderable penalty. `edu-landlord-remedies-termination-pr`.
- **A blanket no-waiver clause on rent receipts:** it would override the art. 1130 receipt presumption in a form lease (art. 1249(c)). `edu-waiver-by-acceptance-pr`.
- **A domestic-violence exit clause:** it serves the tenant, and the library offers it only where a statute requires it. `edu-dv-eviction-protection-pr`.
- **Waiving the quiet-enjoyment warranty:** art. 1249(d).
- **Advance consent to entry by a housing inspector:** Ley 81-1912 art. 30.
- **Shortened entry notice for scheduled services or showings:** art. 1346(h).
- **Copies of utility shutoff notices to the landlord:** no Puerto Rico mechanism.
- **Assigning the tenant's condemnation award to the landlord:** Ley 12-1903 § 2; P.R. Const. art. II, § 9.
- **A lease-named agent to receive service:** risk under R. Civ. P. 4.4(a).
- **An environmental-event termination:** covered by the casualty clause and arts. 1176-1178.
- **A smoke-drift acknowledgment and waiver:** art. 1249(d). `edu-smoke-drift-pr`.
- **A booting or private immobilization limb:** no procedure exists; self-help. `edu-towing-pr`.
- **A shared-meter electricity allocation:** log §2.2 class decision 31. `edu-electric-submetering-pr`.
- **An unbundled-parking or EV right-to-charge clause:** no statutory right; `edu-no-ev-charging-right-pr`.

The canvass recorded 36 offered and 28 declined option verdicts in its answer files. Every declined option is answered in its topic's education row.

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A; recommendation "Yes, all three"): use the built-in browser on Taylor's computer to (1) hash-check corpus PDFs live, (2) reach the regulation registry, and (3) fetch laws the corpus missed. **Answer: "Yes, all three (Recommended)".**
2. **Regulation texts (rule 13, after two failed retrievals each):** DACO Reg. Nos. 9158, 6811 and 6728 (or its successor), and an official copy or in-force confirmation of the student-housing regulation. Recommendation: supply what's easy, otherwise leave the rows as written (they state what wasn't read). **Answer:** none had arrived when the pass was delivered. The affected rows stand as written, and §7 lists them for sync.

No other question arose. Every other legal and drafting call was made in the pass and is listed in §6.3.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Entry emergency limb:** art. 1346(h) prints no emergency exception. `landlords-access-pr` allows entry without notice only for a danger that cannot wait, with an after-the-fact report, resting on art. 1346(l) (tolerating urgent works) and good faith (art. 15). The seven days count under art. 29(a), so weekends count.
- **End-of-term notice:** the Code sets no period. The lease supplies a bracketed figure (e.g. 30 days) that applies to both parties and is not a renewal on silence. The landlord's notice goes on paper (Ley 148-2006 art. 3(b)(5), read cautiously), and the tenant's may go the way the lease was signed (Ley 132-2015 art. 2).
- **Holdover:** a tenant who stays after the term with no notice is not holding over (art. 1335). The daily figure (Monthly Rent/30) is the parties' measure of use value. Accepting money after the lease has ended does not renew it unless agreed in writing; this was screened against art. 1249(c).
- **Default:** cure periods are contract figures in brackets. The art. 1348 grounds (two consecutive unpaid periods, abandonment or change of use, failure to conserve) allow ending without a cure period. A late fee alone never supports eviction. The prevailing-party fee sentence is mutual.
- **Student-housing scope:** read cautiously, Ley 48-1990 art. 2(b)'s exclusion means a business exists when the owner lives there or when three or more post-secondary students rent the unit. The 30-day move-out floor from the DACO regulation (Regla 7(D)) is read as applying to any move-out the landlord requires, alongside court eviction.
- **Reach of consumer laws** (Leyes 5-1973 art. 7A, 209-2016, 95-2006, 132-2015, 234-2014): read as reaching a landlord who rents dwellings as a business. Case law was not searched. Rows state the cautious course and are VERIFIED (§7).
- **Electricity:** passing on the bill for the unit's own meter at cost is read as not resale under Ley 57-2014 art. 1.3(l).
- **Security deposit:** no statute governs it. The optional `security-deposit-no-interest-pr` makes the arrangement a loan of money (arts. 1456, 1327) rather than a custody deposit with fruits (art. 1454). `security-deposit-return-pr` sets a landlord-chosen period with an itemized statement, read against the drafter if left open (art. 1248).
- **Abandoned property:** a lease procedure with notice, a retrieval period of at least 15 days, and deemed abandonment (art. 747 occupation, with the intent to abandon supplied by the tenant's agreement). Vehicles, identity documents and medicines are carved out.
- **Guaranty:** a new kind of clause in the library (no state had an active one). It is optional. Its continuation limb, an express consent to the art. 1335 continuation against the rule that guaranties end then, may fail, and the notes say so.
- **Sale termination:** art. 1334 "salvo pacto distinto". The trigger is narrowed to a signed sale contract, with paper notice, and the clause is for a fixed term only.
- **Lesion (arts. 1258-1260):** measured at the original signing, since the continuation runs on the same terms.
- **Solar easement (art. 963):** read as a neighbour easement that does not reach a lease rule on equipment on the landlord's own building.
- **Flood-zone statement (Ley 3-1961 art. 8(b)):** "terrenos" is read as reaching dwelling leases. The clause is CONDITIONAL/REQUIRED.
- **Condominium statement (Ley 129-2020 art. 37):** the lessor's statement, with the tenant's undertaking to comply kept as well.
- **Ley 33-1985:** art. 3(a) gives 20 days to pay or object, while art. 4 refers to 15. The row uses 20.
- **Ley 364-2000:** limited by art. 2 to credit bureaus and furnishers. A landlord that only uses reports falls under the FCRA directly.
- **Ley 131-1943 § 1(d)** bans discriminatory advertising for home purchases only. Landlords are told to treat rental advertising the same way (federal § 3604(c)).

### §6.4 Canvass helpers' questions and the main pass's answers
- **C1:**
  - Reach of 209-2016, 95-2006 and 5-1973 art. 7A: the cautious reading (decisions 26, 38).
  - `security-deposit-no-interest-pr`: kept.
  - Currency short names: tool fixed (decision 28).
  - New laws passed to later slices: decision 26.
- **C2:** recommendations applied. 19 TAG; 7 OVERRIDE (`existing-condition-pr`, `no-sublet-assign-pr`, `pest-cooperation-pr`, `no-liens-pr`, `prohibited-acts-renter-pr`, `tenant-repair-agreement-pr`, `security-deposit-return-pr`); 4 NOT. Its Ley 140-1974 currency line was corrected in five rows (§1.2).
- **C3:**
  - E-mailed default notices: decision 30, applied in `default-by-tenant-pr` and `end-of-term-pr`.
  - Electricity: decision 31.
  - `abandoned-property-pr`: kept as optional.
  - Ley 157-2026 art. 49: settled from the scan (§1.2).
  - The tenant-caused-damage clause: assigned to C4 (decision 32).
  - The art. 29(a) count: added to `landlords-access-pr`.
  - DACO Reg. Nos. 6728 and 9158: §7.
- **C4:**
  - Findings on `no-just-cause-eviction-pr` applied: insolvent-family officials at removal, the older-adult protection order, "no general statute" on retaliation, and Ley 57-2020 not in force.
  - The art. 1249(c) screen of the holdover acceptance sentence: added.
  - Federal texts: verified in the independent check where reachable (§13).
  - `guaranty-pr`: kept as optional.
- **C5:**
  - Art. 7A special-law exception: decision 38.
  - Ley 120-1973 reach to landlords: the cautious reading, rows VERIFIED with the doubt stated.
  - Fire-safety clause: tagged.
  - DACO Reg. No. 6811: not reached. DACO Order 2026-006 read instead (§1.3).
- **C6:**
  - Art. 963, the flood-zone scope and the condominium statement: §6.3.
  - The Spanish Lead Warning Statement: §10.
  - The smoking workplace rule: added to `edu-smoking-policy-pr`.
- **C7:**
  - The veterans branch of `subsidy-lease-conditions-pr` covers only collective housing (P.L. 88-450); note added.
  - Ley 254-1974 contradiction: note added.
  - The other answers are in §6.3.
- **TB:** rent acceleration declined (§6.1).

## §7 Open items, each with its search boundary
1. **Case law was not searched** (there is no case-law corpus). Each row that turns on one of the questions below states the cautious course and is VERIFIED under the NEEDS_REVIEW policy:
   - the reach of the consumer laws to residential leases;
   - whether a notice ending the art. 1335 continuation is a "desahucio" notice under Ley 148-2006;
   - how art. II §§ 1 and 8 of the Constitution apply between private parties;
   - whether a retaliatory non-renewal is an abuse of right (art. 18) or breaches the reprisal rights of older adults and people with disabilities;
   - whether a guarantor may consent in advance to the continuation;
   - whether the electricity pass-through rule reaches a single-meter bill at cost.
2. **Regulations not reached** (registry blocked; docs.pr.gov 404; two attempts each; Taylor asked under rule 13, §6.2):
   - DACO Reg. No. 9158 (commercial practices). `edu-consumer-protection-pr` is NEEDS_REVIEW.
   - DACO Reg. No. 6811 (price freezes).
   - DACO Reg. No. 6728 (condominiums; conversion protections). `edu-no-conversion-notice-pr` says so.
   - The in-force status of the student-housing regulation: the two student-housing rows are NEEDS_REVIEW.
   - Department of Health, Housing (subsidy eviction rules under Code Civ. Proc. art. 632), Fire Bureau, Energy Bureau and Treasury regulations. The affected rows say what wasn't read.
3. **Federal texts:** not in the corpus. The independent check read every federal provision a row relies on from official federal sources by fetch tool (§13). No row is NEEDS_REVIEW for a federal text alone.
4. **Municipal ordinances** (78 municipalities): flagged, not researched (rule 3). Rows on short-term rentals, signs, noise and parking say so.
5. **The court's Eviction Prevention Program** (a 60-day stay, and the case kept confidential at the tenant's request) appears only in the court's community guide. Its orders are not in the corpus, and whether it still runs is unconfirmed. `edu-eviction-hardship-pr` says so.
6. **Ley 129-2020 art. 17(a)(6) as in force before Ley 157-2026:** not read. `edu-recycling-pr` is NEEDS_REVIEW for that sentence.

**NEEDS_REVIEW rows at delivery:** 21: `student-housing-certification-pr`, `edu-student-housing-license-pr`, `edu-no-rent-control-pr`, `edu-no-submeter-regime-pr`, `edu-alarm-duties-pr`, `edu-utilities-paid-by-landlord-pr`, `utility-allowance-cap-pr`, `utility-transfer-pr`, `edu-no-utility-transfer-cutoff-pr`, `edu-no-conversion-notice-pr`, `edu-disaster-duties-pr`, `edu-emergency-contact-pr`, `subsidy-lease-conditions-pr`, `edu-lease-content-requirements-pr`, `edu-nonresident-owner-pr`, `edu-tenant-records-pr`, `edu-parking-pr`, `edu-recycling-pr`, `edu-electric-submetering-pr`, `edu-no-utility-disclosure-attachment-pr`, `edu-consumer-protection-pr`.

## §8 Integrity checks on the delta
Run by `scripts/assemble.py` on the delivered delta, plus a pointer check over this log (rule 71). Result: 0 failures.
| Check | Result | Detail |
|---|---|---|
| ids unique in delta | PASS | 0   |
| new ids not already in master | PASS | 0   |
| PR ids end -pr | PASS | 0   |
| 17 columns | PASS | 0   |
| states field | PASS | 0   |
| supersedes points to an existing row | PASS | 0   |
| verification_status set | PASS | 0   |
| content_type valid | PASS | 0   |
| group valid | PASS | 0   |
| clause basis set | PASS | 0   |
| education basis blank | PASS | 0   |
| rule_type set | PASS | 0   |
| topic_key set | PASS | 0   |
| notes open with PR: | PASS | 0   |
| dates | PASS | 0   |
| variables known (new ones listed in §10) | PASS | 0 new: []  |
| no bracket beside a variable | PASS | 0   |
| Present education rows have no no- prefix | PASS | 0   |
| no "the state" in PR bodyText | PASS | 0   |
| no working-file pointers in PR notes | PASS | 0   |
| PR rule 61: shared rows carry a PR segment | PASS | 0   |
| shared rows: master notes verbatim prefix | PASS | 0   |
| shared rows: only states/notes/last_checked changed | PASS | 0   |
| every `id` named in PR notes exists | PASS | 0   |
| supersedes matches the note's "Overrides `x`" | PASS | 0   |
| every canvass topic has a PR row keyed to it | PASS | 0   |
| new topic keys | INFO | ['special-district-representation', 'student-housing'] |
| counts | INFO | PR rows 401 (49 clauses, 352 education); shared rows tagged 59; errata applied 583; delta rows 460 |
| Log pointer check (every backticked name in this log) | PASS | 559 names: row ids in the master or the delta, topic keys, or column names; unknown 0 [] |

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 59 tagged rows changed only in `states`, `notes` (a " | PR: …" segment) and `last_checked`. Every PR erratum was asserted to touch only the PR segment (§8).
- **Overrides** (`supersedes` set; the shared rows are untouched): the 21 in §2.
- **Wording points for other states (flagged, not changed):**
  - `edu-cares-act-notice` says "your state's notices". In a territory this reads as the territory's notices; consider "the notices your state or territory requires".
  - `lead-based-paint` is English only. For a Spanish lease the federal rule requires the disclosure elements in the lease's language (40 C.F.R. § 745.113(b), read in the independent check; §10). The independent check also found that the shared body omits two § 745.113(b) elements: the agent's statement where an agent is involved, and the signatures with dates. That affects every tagged state.
  - `appliances-excluded-la`'s saving sentence ("does not limit Landlord's liability for causing physical injury or for intentional or gross fault") can be read as limiting liability for other negligence, which Puerto Rico's art. 1249(d) reaches. Puerto Rico's tag note relies on the carve-outs; consider widening the saving sentence for every tagged state.
  - `firearm-rules-la`'s vehicle sentence answers Louisiana and Mississippi parking-lot statutes. It is lawful elsewhere but carries their policy.

## §10 Findings for other states or the product (flagged, not fixed)
- **New builder variables:** none.
- **Spanish-language leases:**
  - Civil Code art. 1249(a) accepts Spanish or English. Many Puerto Rico tenants read only Spanish, and a form signed in a language the tenant can't read invites a clarity challenge (`edu-translation-duty-pr`). The builder should offer a Spanish rendering for Puerto Rico.
  - The federal lead disclosure must be in the lease's language (40 C.F.R. § 745.113(b), verified in the independent check), so a Spanish lease needs the Spanish Lead Warning Statement and disclosure.
- **Paper notices:** the product's default and nonpayment notice flows must offer hand delivery or certified mail for Puerto Rico. An e-mail-only notice does not satisfy Ley 148-2006 art. 3(b)(5).
- **Guarantor:** `guaranty-pr` needs a third signer. If the product can't take one, switch the clause off; `edu-guarantor-renewal-pr` still advises a new guaranty each term.
- **Age of majority 21** (Civil Code art. 97): application and signing flows should not assume 18 for Puerto Rico.
- **Stale cross-references (rule 77):**
  - Ley 254-1974 art. 2's certificate warning still says six months, while art. 3 now eliminates misdemeanours after 30 days.
  - Ley 33-1985 says 20 days in art. 3(a) and 15 in art. 4.
  - The Justicia/0-1905 print omits Ley 31-2026.
  - The corpus's L.P.R.A. field for Ley 5-1973 art. 13 reads § 341e, where the heading prints "§ 341 l".
- **Corpus:**
  - The OGP crawl missed 262 files because their type field was blank or "Ley original" (§1.1).
  - Some texts store accents in decomposed form (Ley 131-1943). The quote checker now normalises to NFC.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** §4. Only the special-district bold acknowledgment and the student-housing posting rule apply; Ley 5-1973 art. 6 is an unused power.
- **41 Just-cause:** none. The end of the term does not end the lease: it continues on the same terms until notice (art. 1335). `no-just-cause-eviction-pr` (topic `for-cause-eviction`) records the confirmed absence with its situational limits: subsidized housing, CARES, the insolvent-family, veteran, older-adult and disability procedures, protective orders, and the long-term-care and reprisal rights.
- **42 Required text inside a shared clause:** none found. No statute forces a sentence into a fee, deposit or other shared clause. The special-district, student-housing, condominium, access-control, flood-zone and subsidy statements are separate Puerto Rico clauses.
- **43 Cure promises:** `default-by-tenant-pr` gives bracketed cure periods. Its art. 1348 grounds (abandonment, change of use, two consecutive unpaid periods) need no cure, in a sentence of their own. Puerto Rico requires no pre-suit nonpayment notice by statute; the art. 1255 demand under warning is the Code's own resolution requirement. No post-notice statutory cure right exists (`edu-cure-and-grounds-pr`; tender and deposit in court under arts. 1133-1137, `edu-rent-into-court-pr`).
- **44 Terms that become landlord duties:**
  - Listing a service makes it one "the lease includes", so willfully cutting it is a crime (Ley 35-1941 art. 1). Tag notes on `utilities-paid-by-landlord` and `services-utilities-provided-ks-oh` say so.
  - Puerto Rico's tenant remedies reach the landlord's art. 1345 duties and its contract promises, through general breach (arts. 1255, 1349).
  - No statute turns "as agreed in the lease" into a separate remedy trigger.
- **45 Electronic notices:** Ley 148-2006 was read whole, including the exclusions in art. 3(b). Default, eviction and cure notices on a principal-residence lease are excluded (decision 30), and art. 3(b)(4) excludes basic-service termination notices. Art. 5 covers agreement and revocation, and art. 8 sets the retainability condition (`electronic-notice-ma` bars non-printable e-mail).
- **46 The lease as the required notice:** no statute lets a lease paragraph serve as a notice. `addendum-precedence` was checked: no Puerto Rico statute makes an optional separate document control over the lease, and the required statements are lease clauses.
- **47 Penalties for knowingly using a prohibited term:**
  - No Puerto Rico statute penalizes using a void lease term as such (`edu-no-knowing-use-penalty-pr`).
  - Ley 132-2015 art. 3 lets DACO fine up to $5,000 per violation for a contrary termination clause.
  - Collecting under a void fee through a collection agency engages Ley 143-1968 and DACO Reg. No. 6451 (`edu-collection-fee-pr`).
- **48 Separate-document requirements:** none (PR-M-F04A/B). Tenant chores need no separate writing: `landscaping-irrigation` is tagged, `maintenance-allocation-ks` is not, and `tenant-repair-agreement-pr` keeps fitness and urgent repairs with the landlord.
- **49 Collection-cost bans:**
  - Ley 143-1968 art. 17(10) bars a collection agency from charging the debtor additional charges or its collection costs, except as a final judgment authorizes (DACO Reg. No. 6451 implements the Act). `collection-fee-pr` makes the reimbursement of actual reasonable costs, up to a cap, owed to the landlord, and keeps the agency from demanding it without a judgment; it is not a pre-calculated damages clause.
  - No statute makes a one-way fee clause reciprocal, but `default-by-tenant-pr` makes its fee sentence mutual anyway.
- **50 "The lease controls" wording:** every Civil Code default the lease may change (arts. 1333, 1334, 1336, 1341, 1346(f), 1347) was chosen on purpose (§6.1). The deposit has no statutory uplift.
- **51 Plain-language and consumer-contract statutes:**
  - Ley 5-1973 art. 7A (copy before signing; no blanks; reach read cautiously, decision 38) applies.
  - Ley 132-2015 (ending adhesion contracts) and Ley 209-2016 (itemized charges) apply.
  - Civil Code art. 1249 is the adhesion list.
  - DACO Reg. No. 9158 was not reached (§7).
  - No plain-language statute requires a waiver statement (`edu-no-plain-language-statement-pr`).
- **52 Exculpation and liability waivers:** art. 1249(d) (decision 1). The disclaimer-free variants are used, and every unqualified "not liable" clause is untagged.
- **53 A figure that contradicts a shared clause:**
  - Returned checks: Ley 208-1995 § 2-502(g) sets a $10 charge plus legal interest, so `returned-payments` and `returned-payments-ky` are overridden by `returned-payments-pr`.
  - Condominium fines are capped (art. 49(i)), and `hoa-compliance` passes on only the fine imposed.
  - Holdover: there is no statutory measure. `holdover-rate-pr` is a non-stacking optional penalty clause, excluded after a nonpayment termination.
  - Late fees: there is no cap. `late-fee-pr` is a penalty clause in calendar days (art. 29(e)'s weekday rule for periods under seven days).
  - Interest: Ley 1-1973 caps the agreed rate, and `unpaid-amounts-interest-pr` is bracketed below it.

## §12 Other Step C screens
- **30 Read beyond the section:**
  - Read whole in the main pass: the Civil Code lease chapter (arts. 1331-1350), with each general contract and obligation article it points to read section-open as cited (§14 lists the uncited ones); Code Civ. Proc. arts. 620-634; Ley 35-1941; Ley 48-1990; Ley 148-2006 art. 3; Ley 132-2015; Ley 5-1973 art. 7A; the Constitution.
  - Each slice read whole the acts behind its topics (`CANVASS-BRIEF` §6), e.g. the Condominium Act's tenant-relevant articles, Ley 209-2016 and Ley 143-1968.
- **31 Enacted twice:**
  - Eviction articles in two prints (6-1933 current, 0-1905 lagging; §1.2).
  - Access control, in Ley 107-2020 and the repealed Ley 21-1987.
  - The Condominium Act and the repealed Ley 104-1958.
  - Rows cite only the current law.
- **32 Coverage by place or size:**
  - Special districts (two statutes) and flood-prone zones.
  - Condominiums and gated communities.
  - Student housing (three or more post-secondary students, or an owner-occupied rooming house).
  - Long-term care and assisted-living projects (Leyes 76-2013, 244-2003).
  - Hotel Keepers Act establishments with 15+ bedrooms (Ley 85-1956 § 15).
  - Each is a CONDITIONAL clause or a stated scope in education.
- **36 Topics top-down:** two new topic keys came from the statute, `special-district-representation` and `student-housing`. The proposed topic questions are at the end.
- **37 Tenancy type:**
  - Every row states whether its answer differs for a fixed term, the art. 1335 continuation, and an oral or indefinite lease.
  - Leases running on 28 Nov 2020 stay under the 1930 Code (art. 1813), noted wherever it matters (`edu-lease-continuation-pr`).
- **38 Another state's structure:** no URLTA or statutory-notice structure was imported. Puerto Rico's answers follow the Civil Code's default-and-agreement structure and the art. 1249 adhesion list.
- **39 Eviction procedure:** screened for landlord duties and immunities, all in rows:
  - the 10-day hearing;
  - receipt-only defence (art. 627, as amended by Ley 95-2026);
  - agency notices and the 20-day removal period (arts. 623, 632, as amended by Ley 31-2026);
  - insolvent-family officials at removal;
  - the 5-day appeal with bond;
  - the possessory injunction;
  - the Penal Code dispossession offence;
  - Ley 35-1941.

## §13 Independent check (rule 80)
The check used one agent per round, one at a time, for at most three rounds (kickoff limit). The briefs are `work/CHECK-BRIEF.md` and the round notes in `work/check/R2/ROUND2.md` and `work/check/R3/ROUND3.md`. Each checker was told:
- to check against the statute and regulation text, not the notes, because earlier findings (the helpers', the main pass's or an earlier round's) may be wrong;
- to quote every subsection any proposed wording relies on, and to re-run the quote checker on it;
- to write fixes as exact old→new errata lines. The merge applies each with a once-only assertion and re-validates its old text against the current row after every round;
- to keep working-file pointers out of delivered text;
- the Part 5 NEEDS_REVIEW policy;
- that it may read official federal sources by fetch tool.

Later rounds re-checked only the rows edited since the previous round, each against its previous text. Each round also took a consistency set of rows resting on the many-row patterns the previous round reported (rule 80, MD 7). This is recorded as a deviation from the kickoff's edited-rows-only scope, made because the SOP prevails.

### Round 1 (all 460 delivered rows: 49 Puerto Rico clauses, 59 shared rows with their PR segments, 352 education rows)
- **Findings:**
  - By row: 366 OK, 5 with NOTEs only, 87 with at least one FIX, 2 with an ERROR.
  - By line: 2 ERROR, 120 FIX, 8 NOTE.
- **ERRORs (both applied, after the main pass re-read the cited text):**
  - `edu-fees-as-rent-pr` said a court may join a fee claim to a nonpayment eviction. Code Civ. Proc. art. 627 allows joinder only exceptionally, on request, and only for the unpaid rent or price the eviction rests on.
  - `edu-service-animal-denial-penalty-pr` said "up to $200" for later violations. Ley 51-1970 art. 3 sets a fine of 'no menor de doscientos (200) dólares', jail of up to 60 days, or both.
- **Federal text read** (official federal sources: Cornell LII and eCFR, 2026-10-21):
  - 24 C.F.R. § 100.203(a)
  - 47 C.F.R. § 1.4000(a)(1)
  - 40 C.F.R. §§ 745.107(a)(1), 745.113(b)
  - 15 U.S.C. § 9058(c)
  - 15 U.S.C. §§ 1681b, 1681m(a)
  - 34 U.S.C. § 12491
  - PTFA § 702 with Pub. L. 115-174 § 304
  - 50 U.S.C. §§ 3911, 3951, 3955
  - 11 U.S.C. § 362
  - 42 U.S.C. §§ 3602(k), 3603(b), 3604, 3607(b)
  - Pub. L. 109-243 §§ 3-4

  11 rows that were NEEDS_REVIEW only because a federal text was unread were confirmed and set VERIFIED: `edu-foreclosure-tenants-pr`, `edu-servicemember-rights-pr`, `edu-tenant-bankruptcy-pr`, `edu-guest-day-limit-pr`, `edu-tenant-display-rights-pr`, `edu-hoa-compliance-pr`, `edu-lead-based-paint-pr`, `edu-children-occupancy-pr`, `edu-fair-housing-pr`, `edu-tenant-screening-pr` and `edu-lease-content-requirements-pr`. The last was VERIFIED under the policy, since its only remaining doubt was interpretive.
- **Statuses set NEEDS_REVIEW (11):** each row depends on an unread regulation that is the known home of its rule (log §2.2 class decision 39): Energy Bureau rules, DACO Reg. Nos. 6811, 6728 and 6753, the Department of Housing program regulation, and the adopted fire and building codes.
- **Main FIX themes:**
  - Process language left in notes.
  - The art. 7A reach paragraph appended to rows that don't rely on art. 7A. It was removed from seven rows: four by the checker, and three more by the main pass.
  - The art. 632 20-day period, which also covers insolvent families on the cautious reading.
  - The art. 1479 five-year limit on a general guaranty, now in `guaranty-pr` and `edu-guarantor-renewal-pr`.
  - The art. 1253 proportional-reduction paragraph cited in the casualty, eminent-domain and tenant-caused-damage rows.
  - Hedges on the Ley 132-2015 reach and the private reach of the speech guarantee.
  - The lead warning in the lease's language (40 C.F.R. § 745.113(b), verified).
  - `prohibited-acts-renter-pr`'s rule_type corrected from PROHIBITED, which had been carried over from the Wyoming parent.
- **Applied:** all 122 errata, as exact old/new lines asserted once each (`work/errata/97-check-r1.jsonl`), with three main-pass adjustments:
  - Single-quoted English federal text became double quotes, so that the quote checker verifies only the Spanish.
  - "a point no case law it searched settles" became "… case law was not searched".
  - The reach paragraph was also removed from `edu-no-utility-deposit-rule-pr`, `edu-utilities-responsibility-pr` and `edu-no-tenant-rights-guide-pr`.
- **NOTEs:**
  - **DACO Reg. No. 9158 as boundary or NEEDS_REVIEW ground:** settled by log §2.2 class decision 39 as a boundary.
  - **`smoking-policy`:** basis and currency lines added (Ley 204-2026 amends Ley 42-2017 art. 24(c)-(d); the employment-only reading stands).
  - **Rule 62 points on shared bodies** (`appliances-excluded-la` saving sentence; `lead-based-paint` missing two § 745.113(b) elements): §9.
  - **Decisions 27 and 38 against the NEEDS_REVIEW policy:** the rows follow the policy (VERIFIED, with the doubt stated).

### Round 2 (95 rows edited since round 1, each with its previous text, plus a 53-row consistency set on round 1's three many-row patterns)
- **Patterns in the consistency set:**
  - the art. 632 20-day period;
  - the Ley 95-2026 amendments to Code Civ. Proc. arts. 621 and 627;
  - the Ley 157-2026 renumbering of the Condominium Act.
- **Findings:**
  - By row: edited rows 79 OK, 4 NOTE, 11 FIX, 1 ERROR; consistency rows 35 OK, 18 FIX.
  - By line: 114 OK, 5 NOTE, 34 FIX, 1 ERROR.
- **ERROR (applied):** a round-1 rewrite of `edu-disaster-duties-pr` said neither Ley 52-2019 nor Ley 228-1942 names rent or leases. Ley 228-1942 art. 15(a) defines "venta" to include "arrendamiento", as `edu-no-rent-control-pr` already said. Round 1's search had missed it.
  - The row now cautions landlords not to raise rent during a declared emergency without checking DACO's orders.
  - It is NEEDS_REVIEW, because DACO Reg. No. 6811 was not read (log §2.2 class decision 39).
- **FIX themes:**
  - **Ley 95-2026's art. 627 change:** a tenant may also defend with evidence of contributions as a co-owner. It was added to seven bodies that said "only a receipt".
  - **Self-contradicting currency lines:** the template "except as noted … 0 files … no [Enmiendas] note" was corrected in ten rows' notes.
  - **Insolvent-family rule:** `edu-eviction-process-pr` now says the family can't be removed unless Family and Housing officials are present, and that the 20 days run from the court's notice to the agencies.
  - **Ley 157-2026 § 10** both renumbers and amends the article, and the certified scan shows ellipses. Old art. 72 becomes new art. 70, and old art. 70 becomes new art. 68. Rows citing them now give both numbers and the changeover date.
  - **Round-1 edits that reached only one field** were completed: `edu-habitability-materiality-pr`, `edu-post-eviction-property-pr` and `edu-fire-code-standard-pr`.
  - **Utility rows:** removing the art. 7A reach paragraph from `edu-no-utility-deposit-rule-pr` and `edu-utilities-responsibility-pr` had dropped a real doubt. Art. 7A's own exclusion could reach the electric and water providers' contracts that item 9 addresses. The doubt is now stated, and both rows stay VERIFIED.
  - **`edu-lease-content-requirements-pr`** is back to NEEDS_REVIEW. Its item (5) lists the subsidy conditions, one of which comes from the unread Department of Housing regulation.
- **NOTEs:**
  - **Ley 209-2016 regulation:** the "no regulation under Ley 209-2016" inference rests on DACO's list of titles only. The rows say what was read.
  - **`edu-foreclosure-tenants-pr`:** its 90-day point is unchanged.
  - **Unread pre-amendment paragraph:** `edu-emergency-contact-pr` and `edu-recycling-pr` treated the same gap differently. Settled by log §2.2 class decision 40: a row that quotes a reprinted Condominium Act paragraph whose pre-amendment wording wasn't read is NEEDS_REVIEW. `edu-emergency-contact-pr` was set NEEDS_REVIEW by the main pass.
- **Applied:** 35 errata from round 2, plus the main-pass status change (`work/errata/99-check-r2.jsonl`). Every `old` text was re-validated against the current row before it was applied.

### Round 3 (last round: 30 rows edited since round 2, with their previous text; a 4-row consistency set; a scripted sweep of all 460 rows for the art. 627 receipt-only rule and the art. 632 20-day period)
- **Findings:** 37 rows. 19 OK and 18 FIX (20 FIX lines). No ERROR and no NOTE.
- **Verified:**
  - Every round-2 edit applied cleanly. Its quotes, citations and translations are correct.
  - The Ley 157-2026 ellipses, read from the certified scan, pp. 5 and 8: § 3 keeps art. 49(a)(2)(ii)-(iii), and § 10 keeps the IFC 2009 sentence.
  - The pre-2026 print of art. 632 (Justicia/0-1905) applied the 20 days to insolvent families, which supports the cautious reading.
  - Ley 228-1942 art. 15(a) ("venta" includes "arrendamiento") is correctly quoted in `edu-disaster-duties-pr`.
  - The R.C. 16-2022 quote is in § 1.
- **FIX themes:**
  - Notes not updated with their body. Bodies now carry the art. 627 co-owner point, but notes still described Ley 95-2026 without saying what it added.
  - The receipt-only rule surviving in other wordings ("only proof of payment counts").
  - The last four copies of the self-contradicting currency template.
  - Two rows newly set NEEDS_REVIEW whose notes didn't say why.
- **Applied:** all 20 errata (`work/errata/99-zcheck-r3.jsonl`), each re-validated against the current row. After these, a script finds no remaining receipt-only statement and no self-contradicting currency line in the 460 rows.
- **Stopping:** this was the third and last round allowed by the kickoff. Round 3 produced changes, so the rows it touched are listed next.

### Edited after the last check
These 18 rows took round 3's errata (20 FIX lines; round 3 found no ERROR) and were not checked again. Claude Code reads them against the statute at sync.
| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `no-just-cause-eviction-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: art. 632 quote completed; the 20 days stated for insolvent families too (cautious reading), counted from the court's notice |
| `edu-fees-as-rent-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-rent-demand-bar-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-rent-receipts-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-confirmed-absences-habitability-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-no-habitability-presumption-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-landlord-breach-remedy-pr` | round 3 (2026-10-21) | round 3 errata (bodyText, notes) | body and notes: same co-owner point |
| `edu-tenant-repair-remedies-pr` | round 3 (2026-10-21) | round 3 errata (bodyText, notes) | body and notes: receipt-only wording replaced by the art. 627 co-owner point (Ley 95-2026) |
| `edu-eviction-process-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: aligned with the body on the 20-day period for insolvent families |
| `edu-no-forfeiture-redemption-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `landlord-self-cure-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-no-possession-bond-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: currency line corrected (arts. 630-631 unamended in 2025-2026; older [Enmiendas] notes printed) |
| `edu-post-eviction-property-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: currency line corrected (Ley 31-2026 amended art. 632) |
| `edu-servicemember-rights-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: currency line corrected (Ley 31-2026 amended arts. 623, 632) |
| `edu-no-benefit-delay-defense-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: the currency line or quote now says what Ley 95-2026 added to Code Civ. Proc. art. 627 (evidence of contributions as a co-owner), matching the body |
| `edu-tenant-bankruptcy-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: currency line corrected (Ley 31-2026 amended arts. 623, 632) |
| `edu-emergency-contact-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: numbering sentence corrected; reason for NEEDS_REVIEW stated (pre-amendment wording not read) |
| `edu-lease-content-requirements-pr` | round 3 (2026-10-21) | round 3 errata (notes) | notes: reason for NEEDS_REVIEW stated (the Secretary of Housing's unread regulation, Ley 173-1996 art. 7(d)) |


## §14 Gap-discovery source 1 — statute walk (rule 29)
- **Read whole, section-open, in the main pass:**
  - the Civil Code lease chapter (arts. 1331-1350);
  - the general rules it points to (arts. 14-18, 29, 1126-1137, 1159-1169, 1233-1260, 1472-1490);
  - the eviction articles (Code Civ. Proc. arts. 620-634) in the current print (6-1933), diffed by script against the 0-1905 print;
  - the 1930 Code's lease articles (1432-1472), for leases running on 28 Nov 2020;
  - Ley 35-1941;
  - Ley 48-1990;
  - the Condominium Act arts. 37-44 and 49.
- **Diff:** `statute_walk.py` ran over every delivered PR row and every PR segment of the tagged shared rows, expanding citation ranges.
  - **Fully cited:** the lease chapter 1331-1350, Code Civ. Proc. 620-634 and Ley 35-1941.
  - **Civil Code general and property articles:** 76 of 157 core articles cited. The uncited ones and their dispositions:
    - **General obligations: arts. 1132, 1161, 1163.** Tender, default and fault are carried by the cited arts. 1126-1131, 1133-1137, 1159-1160 and 1255. Art. 1161 bears on a tenant's defence that the landlord had to perform first, which `edu-landlord-breach-remedy-pr` covers. No clause needs any of the three.
    - **Formation: arts. 1234, 1238-1244, 1246, 1250-1252.** These are offer, acceptance, revocation, future-thing, public-instrument and third-party stipulation rules, with no rule specific to leases. Pre-lease offers are covered by `edu-holding-deposit-pr`.
    - **Guaranty: arts. 1473, 1480-1481, 1489-1490.** These govern guarantor-debtor relations and capacity. `guaranty-pr` cites the articles that shape the clause.
    - **Possession: arts. 711-723, 726-734.** These are presumptions and the good- or bad-faith possessor's fruits and improvements. Art. 724-725 (protection of possession; no self-help) is cited, and a tenant's improvements follow art. 1347.
    - **Usufruct: arts. 877-918.** Arts. 896 and 899 (the usufructuary's leases and how they end) are cited by `usufructuary-lessor-pr` and `edu-usufructuary-lessor-pr`. The rest govern the usufructuary and the owner.
  - **1930 Code lease articles:** 9 of 41 cited. The library writes to the 2020 Code. `edu-lease-continuation-pr` states the transition rule (art. 1813) and the 1930 articles that matter most (1455-1457, 1471). For a pre-2020 lease, the rest (for example art. 1459 eviction grounds, art. 1461 a buyer's right to end the lease) are flagged as a class: read the 1930 article.
  - **Ley 48-1990 arts. 1, 6, 9, 11-13:** title, administration, inspection procedure, regulations. No lease-content rule.
  - **Ley 129-2020 arts. 43-44:** common elements cannot be divided, and their use. These bind owners, and through them occupants (art. 39); covered by the condominium rows.
- **Uncited articles adding a row:** none. Two subjects surfaced during the pass and were written in: the art. 313 loss of term (rent acceleration declined, §6.1) and the art. 26 language rule (`edu-translation-duty-pr`).

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Search for a professional Puerto Rico lease:**
  - No Realtors-association or apartment-association form is free. The searches ran before and during the pass.
  - The public-housing search ("contrato de arrendamiento vivienda pública … Administración de Vivienda Pública") found only Supreme Court opinions, Guaynabo ordinances, and the AFV Section 8 owners' kit (Rev. 09-21-18). The kit mentions a suggested lease and the HUD Tenancy Addendum in the voucher package but contains neither.
  - The Civil Code template search found Hacienda's Carta Circular 1300-16-05, Anejo 2: form SC 854.1 (16 Mar 2005), a lease of premises to the government for 5-30 years. It is not residential and was rejected.
  - Ayuda Legal PR's pages link to an interactive lease-drafting tool, but the link could not be retrieved. Running an interview tool would mean entering data into a form, so it was not run.
- **Lease used (weaker, lead only):** "Contrato de un Hospedaje o Vivienda de Alquiler".
  - Publisher: Departamento de Residencias Estudiantiles, Decanato de Estudiantes, Recinto Universitario de Mayagüez, 2005.
  - URL: https://www.uprm.edu/vivienda/wp-content/uploads/sites/34/2024/06/contrato-de-vivienda.pdf (SHA-256 a6ef1665…, 11 pages; text saved).
  - It is a university housing office's guide with a contract outline, not a signed-form lease, and it cites the 1930 Code. That is why it is weaker. It is not a relabelled multi-state template.
- **Handbook-type lead:** Ayuda Legal Puerto Rico, "Derechos y responsabilidades de las personas que alquilan" and "Caja de herramientas para los alquileres dignos" vol. 1 (May 2023; page updated 29 Nov 2023). It is a legal-aid nonprofit; Puerto Rico has no agency landlord-tenant handbook.
- **Map (outline item → library rows):**
  - Parties, property description: lease form basics (no row needed).
  - Guarantor/co-debtor → `guaranty-pr`, `edu-guarantor-renewal-pr`.
  - Start and end dates → `end-of-term-pr`, `edu-lease-continuation-pr`.
  - Deposit use → `security-deposit-use`, `security-deposit-return-pr`.
  - Monthly rent and due date → `rent-payment`, `edu-rent-payment-pr`.
  - Pets → `pet-policy-or`, `edu-pet-policy-pr`.
  - Furnishings included → `furnishings-included-la`.
  - Subletting → `no-sublet-assign-pr`.
  - Keys → `keys`.
  - Alterations → `no-alterations`, `improvements-ownership-la`.
  - Late penalty → `late-fee-pr`.
  - Damage → `tenant-caused-damage-pr`.
  - Services included → `utilities-paid-by-landlord`, `services-utilities-provided-ks-oh`.
  - Access → `landlords-access-pr`.
  - Additional costs → `fees-and-charges-pr`.
  - House rules → `rules-wi`.
  - Use limits → `residential-use-only`.
  - Rescission → `default-by-tenant-pr`.
  - Condition and responsibility → `existing-condition-pr`, `landlord-maintenance`.
  - Renewal → `end-of-term-pr`.
  - Inventory → `existing-condition-pr`, `furnishings-included-la`.
- **Leads it gave:**
  - "Por disposiciones del Reglamento de Hospedaje requiere notificación previa con 30 días de anticipación" led to DACO's student-housing regulation and its 30-day move-out floor, now in `student-housing-certification-pr`.
  - Its statement that rent can't be raised during the term matches log §2.2 class decision 2.
  - Its list of unlawful self-help (cutting services, changing locks, entering without consent, holding property as security) is covered by Ley 35-1941, `edu-self-help-eviction-pr`, `edu-no-lockout-pr` and `edu-no-landlord-lien-pr`.
  - "21 years" majority matches art. 97.
- **The Ayuda Legal pages agree with the rows:** 7 days' notice for inspection, two consecutive unpaid periods, one-year default term, six-month survivors, and that a sale or the landlord's death doesn't shorten the lease.
- **No shared-row change suggested (rule 62).**

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 160 (`work/main/scenarios.tsv`), generated by Claude (rule 2). They run from advertising and screening through signing, move-in money, rent, repairs, entry, the tenancy, sale and conversion, ending the tenancy, and eviction.
- **Run:** each scenario's search terms were matched against every delivered PR row and tag segment (`scenario_map.tsv`). The keyword matches were then read, and 46 were hand-corrected where the match was wrong.
- **Result:** every scenario is answered by at least one row. Scenarios that raised a gap during the pass, now answered:
  - S010 hair-style discrimination: Ley 106-2024 in `edu-fair-housing-pr`.
  - S014 immigration status: `edu-immigration-status-pr`.
  - S018 minor tenant under 21: `edu-minor-tenants-pr`.
  - S021 recording a 6+ year lease: Registry Act art. 5 in `edu-statute-of-frauds-pr`.
  - S088 hurricane: `casualty-termination-pr`, `edu-disaster-duties-pr`.
  - S112 service cuts: Ley 35-1941 rows.
  - S150 insolvent family at removal: added to `no-just-cause-eviction-pr`.
  - S156 community-property claim: a court-procedure detail under Code Civ. Proc. art. 627, as amended by Ley 95-2026, in `edu-eviction-process-pr`.

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus and engine:** local batteries over the whole corpus (§1.5). Every canvass battery ran over every consolidated law and 2025-2026 session law, not only the Civil Code and the eviction articles.
- **Census:** 68 law files have tenant and dwelling words in one unit (`outside_title_census.txt`). Laws no row cites, with their dispositions:
  - **Government housing and land programs, not private leases:**
    - Ley 143-1975 (titles to tenants of workers' neighbourhoods)
    - Ley 53-1921 (Hogares Seguros lot leases)
    - Ley 55-1996 (public-housing transfer)
    - Ley 53-1953 and 363-1949 (housing authority)
    - Ley 146-1961 (housing finance bank)
    - Ley 97-1972 art. 4 (relocation payments on government acquisition, paid to tenant or landlord)
    - Ley 131-1975 (repealed)
    - Ley 212-2002 (repealed incentives)
    - Ley 83-1991 (repealed municipal property tax)
  - **Finance, insurance and administrative statutes:**
    - Ley 428-1950 (chauffeurs' insurance)
    - Ley 121-1977
    - Ley 247-2010 (mortgage lending)
    - Ley 402-2000 (assistive-technology warranties)
    - Ley 189-1996
    - Ley 68-2016
    - Ley 187-2015
    - Ley 75-2017
    - Ley 241-2010
    - Ley 52-1989
  - **Court documents** (eviction-prevention guide, community guide, educational guide, OAT-931, appointed-counsel rules): cited through the eviction rows.
  - **The 1930 Code:** see §14.
- **Repealed laws in subject folders:** the OGP library keeps them with a "DEROGADA" banner (Ley 21-1987, Ley 104-1958, Ley 81-1991, Ley 43-1988). Rows cite them only as repealed predecessors.
- **Constitution:** §1.3.

## §18 Topic canvass (rules 27, 36)
- **Method:**
  - Seven slices covered every `topic_key` in `lease-clause-topics.md`: C1-C6 with 52 topics each and C7 with 48, 360 in all.
  - At most two agents ran at a time. Each saved its rows and one JSON line per topic after every topic (`CANVASS-BRIEF`).
  - The brief carried:
    - the law map;
    - the recurring conditions, quoted (art. 1249's list, art. 1346(h), art. 1335, art. 1255, art. 1257);
    - the row format;
    - the battery and quote-check rules;
    - an instruction to run the quote checker before reporting.
  - The class decisions grew from 25 to 38 as slices reported and were passed to running slices by message.
- **Result:** every one of the 360 topics has an active PR row keyed to it, or a tagged shared row (integrity check, §8). Verdicts across the 360: Present, Confirmed absent, Mixed or Not applicable (§3.2 counts the education rows by opening).
- **New topic keys:** `special-district-representation` and `student-housing`.

## §19 Conformance-table entry
PR (2026-10-21), drawn from this log's §§ 4, 6.1, 11, 12 and 14-18. Proposed column (Claude Code sets it at sync):
| Rule | PR | Where |
|---|---|---|
| 26 tag first, fee screens | ✓ (keys, hoa-compliance pass) | §2 |
| 33 real lease | ✓ (weaker lead, recorded) | §15 |
| 40 formatting | ✓ (bold in special districts) | §4 |
| 41 just-cause | ✓ (absent; situational limits) | §11 |
| 43 cure | ✓ | §11 |
| 45 e-notices | ✓ (Ley 148-2006 art. 3(b)(5)) | §11 |
| 48 separate document | ✓ (none) | §11 |
| 52 exculpation | ✓ (art. 1249(d)) | §2.2 |
| 53 figures | ✓ ($10 check charge; condo fine caps) | §11 |
| 54 optional clauses | ✓ | §6.1 |
| 59 quote check | ✓ (0 misses) | §3 |
| 80 independent check | ✓ | §13 |

## Proposed SOP changes
- **Rule 24 (corpus selection):** a corpus crawl selects the official library's items by file and law number, not by the library's type field. Reason: Puerto Rico's crawl chose items typed "Ley según enmendada" and missed 262 untyped or "Ley original" files, among them student housing (Ley 48-1990), whose art. 8(g) requires a lease clause.
- **Rule 14/19 (corpus loader):** test the heading splitter by counting articles per file and listing files with zero or one unit before any battery runs. Reason: OGP prints indent some article headings 7-14 spaces, and 353 files were indexed as one block until mid-pass. The text was searched, but article attribution and unit counts were wrong.
- **Rule 14 (browser text):** a page-footer cleaner may drop the line after a footer only if that line is a running title. Reason: pdf.js places running titles elsewhere, and an unconditional skip deleted article headings in the browser-fetched texts.
- **Rule 16 (two compilations):** where the official library prints the same articles in two compilations, diff them by script. Reason: Puerto Rico's Code of Civil Procedure and its "Ley de Procedimientos Legales Especiales" print carry different amendments under the same Rev. date.
- **Rule 16 (currency tool):** search session laws for the amended act's long-form title and "Ley Núm. N de <date>", not only "N-YYYY". Reason: older acts are amended under their long names (Ley 98-2026 amended Ley 143-1968 and a short-form search missed it).
- **Rule 26/52 (adhesion statutes):** in a jurisdiction with a statutory list of abusive adhesion clauses (P.R. Civ. Code art. 1249), screen every shared clause against each listed class as a class decision, as rule 52 does for waiver statutes. Reason: five of Puerto Rico's untag classes came from one article.
- **Rule 45 (e-notices):** read the electronic-transactions act's exclusion list for lease-default, eviction and cure notices before tagging any e-notice or notices clause. Reason: Ley 148-2006 art. 3(b)(5) excludes them for a principal residence; the shared notices clauses had to state paper delivery.
- **Rule 19 (batteries):** give every battery a positive, including one cited only for context; rerun any battery that lacks one before an absence row ships. Reason: two main-pass retaliation batteries without a positive, rerun with one, surfaced reprisal rights for older adults and people with disabilities that the absence row had missed.
- **Rule 59 (quote checker):** resolve L.P.R.A.-only citations through an index of each unit's printed L.P.R.A. section; NFC-normalise accents; treat "(id.)" as unresolved. Reason: the Puerto Rico corpus stores some accents decomposed, and one helper cited a quote as "(id.)".
- **Rule 27 (briefs):** tell helpers to run the quote checker on a last-version file of their rows before reporting, and to put each quote immediately before its own citation. Reason: Puerto Rico's first helper topics single-quoted law numbers and English.
- **Rule 27 (class decisions in flight):** number the main pass's class decisions in a file the helpers read before every topic, and give delivered notes a fixed form for citing them ("log §2.2 class decision N"). Reason: helpers wrote "main-pass decision N" and "MAIN-DECISIONS N" in 129 rows, all rewritten by script at merge.
- **Rule 80 (NEEDS_REVIEW policy at drafting):** put the Part 5 policy in the canvass brief, not only the check brief. Reason: helpers marked 31 rows NEEDS_REVIEW for interpretive doubts only, and the merge had to set them VERIFIED with the cautious course stated.
- **Rule 13 (unreachable regulations):** when a territory's or state's regulation registry is blocked, look for the agency's own transition-report or in-force lists (Puerto Rico's transicion2024.pr.gov SharePoint libraries listed DACO's regulations in force). Reason: it proved which regulations exist, even where their texts could not be fetched.
- **Tooling:** never run `pkill -f` with a pattern that also matches the shell command running it. Reason: it killed the working shell twice in this pass.

## Proposed topic questions
- `electronic-signatures`: Does the electronic-transactions act exclude notices of default, eviction or the right to cure on a principal-residence lease, so those notices must go on paper? (Puerto Rico: Ley 148-2006, art. 3(b)(5).)
- `prohibited-lease-terms`: Is there a statutory list of clauses "especially annullable" in adhesion contracts (disclaimers, unilateral changes, renewal on silence, limits on evidence, agency exclusion), and does it reach form leases? (Puerto Rico: P.R. Civ. Code art. 1249.)
- `termination-notice`: Does an adhesion contract have to be terminable by the same means it was entered into, with the means disclosed before signing? (Puerto Rico: Ley 132-2015, art. 2.)
- `retaliation`: Do protected-group bills of rights (older adults, people with disabilities) give a right to be free from reprisal for exercising civil rights that could reach a landlord? (Puerto Rico: Ley 121-2019, art. 4(A)(ii); Ley 238-2004, art. 4(b).)
- `retaliation`: Does a long-term-care ombudsman law bar retaliation against residents who complain? (Puerto Rico: Ley 76-2013, art. 9.)
- `acceptable-payment-methods`: Does a general card-surcharge ban reach rent because it names leases? (Puerto Rico: Ley 150-2008, art. 1.)
- `collection-fee`: Does the collection-agency law bar the agency from adding collection costs or unagreed attorney's fees unless a final judgment awards them? (Puerto Rico: Ley 143-1968, art. 17(10).)
- `fee-transparency`: Does a general fee-transparency law reaching anyone who offers goods or services "for rent" require mandatory lease fees to be itemized? (Puerto Rico: Ley 209-2016, arts. 2-3.)
- `rent-control`: Does an emergency price-freeze law whose definition of "sale" includes "lease" freeze dwelling rent during a declared emergency? (Puerto Rico: Ley 52-2019, art. 4; Ley 228-1942, art. 15(a).)
- `rent-receipts`: Does a receipt for the last installment without a reservation create a presumption that earlier installments were paid? (Puerto Rico: P.R. Civ. Code art. 1130.)
- `rent-reporting`: Must a landlord who reports late rent to a credit bureau notify the tenant in writing? (Puerto Rico: Ley 364-2000, art. 6.)
- `deposit-escheat`: Is an unclaimed deposit refund presumed abandoned after a set period, with an annual report? (Puerto Rico: Ley 36-1989, arts. 2(f), 4(b).)
- `holding-deposit`: Is a pre-lease holding deposit earnest money that the landlord must return doubled if it backs out? (Puerto Rico: P.R. Civ. Code art. 1256(b).)
- `security-deposit-holding`: Must a licensed broker who collects a tenant's deposit hold it in a special escrow account? (Puerto Rico: Ley 10-1994, arts. 2(h), 21.)
- `joint-liability`: Does accepting one co-tenant's share of rent without a reservation waive joint and several liability for that co-tenant? (Puerto Rico: P.R. Civ. Code art. 1105.)
- `permitted-occupants`: Who may take over a dwelling lease when the tenant dies, and after how long living there? (Puerto Rico: P.R. Civ. Code art. 1334, six months.)
- `sublet-assign`: Is a consent-to-sublet clause an "express prohibition" that displaces the statutory limits on refusal? (Puerto Rico: P.R. Civ. Code art. 1336.)
- `utility-shutoff-statute`: Does the law bar utility disconnection for nonpayment during a declared storm or hurricane emergency? (Puerto Rico: Ley 59-2023, art. 3.)
- `association-obligations-disclosure`: Must a condominium lease contain the owner's statement that it knows the condominium law and bylaws, with a copy to the board? Must a lease in an access-controlled community contain the tenant's statement? (Puerto Rico: Ley 129-2020, art. 37; Ley 107-2020, art. 3.016(b).)
- `flood-disclosure`: Must a lease of property in a declared flood-prone zone warn the tenant in writing? (Puerto Rico: Ley 3-1961, art. 8(b).)
- `hoa`: When a unit owner falls behind on association fees, may the court order the tenant to pay rent into court for the association? (Puerto Rico: Ley 129-2020, art. 59; Ley 107-2020, art. 3.010(b).)
- `hoa-compliance`: Are association fines on an occupant's violation capped per violation? (Puerto Rico: Ley 129-2020, art. 49(i).)
- `tenant-security-cameras`: Does audio recording by a video doorbell need every party's consent? (Puerto Rico: Penal Code (Ley 146-2012), art. 169.)
- `tenant-display-rights`: May a tenant, as possessor, authorize a temporary political or religious sign without a permit? (Puerto Rico: Ley 355-1999, art. 10(b).)
- `confession-of-judgment`: Do the civil procedure rules allow judgment by consent without suit only on a separate sworn writing for a set sum? (Puerto Rico: P.R. R. Civ. P. 35.4.)
- `fair-housing`: Does the real estate licensing law bar brokers and property managers from discriminating in leases on grounds the general civil-rights law omits (familial status, disability, national origin)? (Puerto Rico: Ley 10-1994, art. 31(15).)
- `stigmatized-property`: Does an HIV bill of rights bar conditioning a rental on HIV status or referring to a person's diagnosis without consent? (Puerto Rico: Ley 248-2018, art. 3.)
- `unconscionability`: Can a court revise or end a running lease for supervening excessive onerousness, and within what period? (Puerto Rico: P.R. Civ. Code arts. 1259-1260, six months.)
- `tenant-employee-housing`: Does the eviction statute expressly reach caretakers and others the owner placed on the property? (Puerto Rico: P.R. Code Civ. Proc. art. 621.)
- `for-cause-eviction`: Must officials of the family and housing agencies be present when a family of proven insolvency is removed? (Puerto Rico: P.R. Code Civ. Proc. art. 632.)
- `minor-tenant-filing`: Is the age of majority above 18? (Puerto Rico: P.R. Civ. Code art. 97, 21.)
- `translation-duty`: When a law's two official language texts differ, which prevails? (Puerto Rico: P.R. Civ. Code art. 26, Spanish unless the law says otherwise.)

## Sync review (Claude Code, 2026-10-21)
Merged with `merge-delta.py --base 3492cfd` (401 new rows, 59 shared rows tagged; 9,216 rows, then 9,217 with `early-termination-pr`). All guards pass.
- **Edited-after rows (§13, 18):** read against the enacted texts of Ley 95-2026 § 2 (Code Civ. Proc. art. 627: receipt-only evidence, plus contributions through a community of property by a preponderance) and Ley 31-2026 §§ 1-2 (arts. 623 and 632; its statement of motives confirms art. 623 already named older adults and people with disabilities, and the amendment added the Veterans Advocate and, in art. 632, the post-judgment notices). No errors. The art. 632 twenty-day period is stated for insolvent families on the cautious reading, as the rows say.
- **Statute spot-check:** P.R. Civ. Code arts. 1333, 1335, 1336, 1346(h) and 1348 read against `landlords-access-pr`, `end-of-term-pr`, `no-sublet-assign-pr` and `default-by-tenant-pr`; Code Civ. Proc. arts. 627 and 632 as above. No errors.
- **Guard fixes:** `deposit-cost-schedule-pr` (switched off) had a basis set; cleared. `holdover-rate-pr` pointed to "Holding Over Section"; now names "Holding Over After the Lease Ends Section".
- **NEEDS_REVIEW closed (21 of 21):** the Department of State's regulation registry is reachable at `app.estado.pr.gov` (the `app.estado.gobierno.pr` links are an alias that did not resolve locally); its agency-filtered search listed every regulation, and the PDFs were read (scans read page by page). Each row's notes record the quotes.
  - Student housing: Reg. No. 6628 is Activo; the registry copy matches the quotes (`student-housing-certification-pr`, `edu-student-housing-license-pr`).
  - Condominiums: Reg. No. 6728 is repealed by Reg. No. 9386 (2022), whose conversion rules give tenants no notice or purchase right (`edu-no-conversion-notice-pr`). The pre-Ley 157-2026 texts of Ley 129-2020 arts. 17(a)(6) and 70 were read in the OGP library's version history (version 0.8, Rev. 31 de mayo de 2026); both bodies now state both regimes (`edu-recycling-pr`, `edu-emergency-contact-pr`).
  - Emergency prices: Reg. No. 6811 reaches anything leased or rented that the emergency makes necessary, by DACO order; housing is not named, so the cautious course stays (`edu-disaster-duties-pr`, `edu-no-rent-control-pr`).
  - Commercial practices: Reg. No. 9158 defines goods to include leased real property, so it reaches landlords. `edu-consumer-protection-pr` was rewritten with its lease rules; the PR clauses were screened against Reglas 7(b), 8, 14(b)(14), (18), (19) and (21); `fees-and-charges-pr` gained the basic-services sentence; `end-of-term-pr` (the art. 1335 continuation applies by law) is not a contractual automatic renewal. The stale "could not be fetched" boundary was updated in 211 notes.
  - Fire code: Reg. No. 7364 (NFPA 1-2003 as adopted, with NFPA 101) requires smoke alarms in dwellings, assigns compliance to the owner, operator or occupant, and has no CO rule (`edu-alarm-duties-pr` rewritten).
  - Electricity: Reg. Nos. 8618, 8701 and 9182 make anyone offering billing or resale of electricity a certified electric service company, with no landlord exception. On the every-reading rule, no PR clause now lets the landlord charge for electricity: `utility-allowance-cap-pr` excludes it, `utility-transfer-pr` puts it in the tenant's name from day one, and five education rows say so.
  - Privacy: Reg. Nos. 8568 and 7376 read; `edu-tenant-records-pr` lists the privacy-policy contents.
  - Parking: Reg. No. 6753 limits licensing to public, for-profit lots; the Act's own definition is broader, so the cautious course stays (`edu-parking-pr`).
  - Rent subsidies: Reg. No. 9622 (older adults; repeals Reg. No. 9121) and the Veterans Advocate's Reg. No. 9593 add no lease condition beyond Ley 173-1996 art. 6; condition (d) stays a fill-in. Reg. No. 9622 art. XXX(c) requires mediation and the Department's complaint process before a program project evicts, now in `no-just-cause-eviction-pr` and `edu-no-benefit-delay-defense-pr`.
  - `edu-nonresident-owner-pr`: no statement depends on the unread Treasury rule; VERIFIED with the doubt stated.
- **Early termination:** Puerto Rico was untagged from `early-termination-ks` and given its own flat-fee `early-termination-pr` (one month's Rent, no later Rent; arts. 1350, 1257, 1349(a)), as at the HI, LA, AR, MS and DC syncs; `edu-early-termination-pr` updated.
- **Shared-row points (§9):** not changed; queued in the backlog's end-of-run pass (item 8), including `lead-based-paint`'s two missing 40 C.F.R. § 745.113(b) elements (read on eCFR) and the E-SIGN exclusion for default and eviction notices (15 U.S.C. § 7003(b)(2)(B), read on govinfo).
- **Consistency check:** no topic that 35 or more jurisdictions have is missing for Puerto Rico. 459 active PR rows (460 delivered, less the `early-termination-ks` tag plus `early-termination-pr`, less the switched-off `deposit-cost-schedule-pr`).
- **Legal watch:** LegiScan does not cover Puerto Rico; no workflow (backlog item 34).
- **SOP 1.80:** thirteen proposals adopted, one rejected; conformance column added. 32 topic questions added.
