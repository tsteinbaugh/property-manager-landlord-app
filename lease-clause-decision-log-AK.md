# Lease clause decision log — Alaska (AK, state #46)
- **Pass:** staged 2026-10-16 18:41 (kickoff); run 2026-10-16 to 2026-10-17 in one chat (Alaska's only Desktop chat, rule 8; no earlier output files existed in this chat, so none were deleted). SOP v1.73. The files Taylor uploaded for this task (kickoff, SOP, topic reference, log-format example, `lease-clauses.csv`, `corpus-AK-20261016.zip` and its `.sha256`) are the only source of truth used.
- **Settings:** Opus, high effort. Research mode was **not** turned on (I can't toggle it, and none of the three rule 9 triggers needed it): proof of absence and the cross-chapter gap search were done by 320 logged batteries over the full hash-verified corpus (§1.5), and ambiguous statute language is handled by reading the sections whole and recording each reading as a drafting judgment (§6.3).
- **Scope:** Alaska state law only (rule 3). Coverage is "state law, verified" (rule 4): the Alaska Statutes, Administrative Code, Constitution, 2025-2026 session laws, court rules and court forms in the corpus. Case law, federal law (except where named and read) and municipal codes (Anchorage, Fairbanks, Juneau and others) were not searched; rows say so.
- **Result:** 399 delta rows: 343 new Alaska rows (26 lease clauses, 317 education rows) and 56 existing rows tagged AK (55 shared clauses and the federal `edu-cares-act-notice`). Every one of the 354 topics has an Alaska row (§8). Every row is VERIFIED.

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A counts (rule 23):** the attached `lease-clauses.csv` (SHA-256 9ed8ee0037e5459ec022d49bfd3d75b7415ace9f851ab329f8248ee00d1ba0dd, CRLF, no BOM) has 6,609 rows, 6,500 active (1,118 lease clauses, 5,382 education rows); all 45 per-state active counts match the kickoff by script; no row carries AK.
- **First request with my own tools** (kickoff): the shell's request to www.akleg.gov was refused at the proxy (`CONNECT tunnel failed, response 403`); WebFetch reached the page but returns only a model summary ("This page is no longer used please use www.akleg.gov"), which is a lead, never text (rule 12). So the corpus was used.
- **Corpus:** `corpus-AK-20261016.zip` (SHA-256 d9c83306f7b16493c19a529a33830ff5a7f9237456fd393abf8e2f7ea015e04d, matching the attached `.sha256`). `manifest.jsonl`: 1,363 requests (1,361 HTTP 200, 2 HTTP 404 on an unrelated rules-comment link and a browser-compatibility page); every file's SHA-256 matches its manifest line; no file outside the manifest. Pages are windows-1252 (curly quotes as 0x93/0x94); decoded as cp1252 strictly (rule 14).
- **Completeness (rule 19):** the statute parser splits each title print page on its `<a name="NN.NN.NNN">` anchors: 20,854 section blocks, 20,846 unique numbers, equal to the 20,846 non-chapter-note entries in the site's 989 chapter tables of contents (none missing, none extra); 8 sections carry two printed versions (03.10.030, 08.13.030, 11.46.140, 14.03.127, 14.40.710, 21.09.210, 41.06.055, 44.19.600), both kept. Administrative Code: 25,848 sections in 774 chapters; every table-of-contents chapter without text is labelled repealed, relocated, deleted, reorganized, reserved or "No Regulations Filed", or is a title or part entry, plus 3 AAC 56 (prints no sections), matching the README. Constitution: 241 section blocks; all 236 entries of the page's own contents list are present (art. XIV is repealed; art. III, §§ 14-18 print twice). Session laws: all 87 chapters (26 for 2025 incl. ch. 1, FSSLA 2025; 61 for 2026), split into 1,463 act sections; section 1 found in every act (rule 16, CT 6). Court rules: 460 rule units from the Civil, District Court Civil, Administrative, Evidence, Appellate, Probate and Criminal rules PDFs (reading-order extraction; Civil Rules also extracted in layout order because some rules extract column-jumbled; rows rely on the layout text for Rule 85 and Rule 82). Forms: 70 PDFs, CIV-105 to CIV-865 (the README says 72; the manifest and folder hold 70, all hashed).
- **Live match through Taylor's built-in browser** (Taylor approved "Yes (Recommended)", §6.2): the print views of titles 9, 18 and 34 were fetched in-page and their **whole-page SHA-256 matched the manifest byte for byte** (09: 37bb8ee4…1a25ab; 18: f4a8fc8f…4b1228; 34: e1eeb102…4259b1), which proves every section on those pages; the normalized text of AS 34.03.040, 34.03.070, 34.03.220, 09.45.100 and 18.80.240 also matched the corpus hash for hash (e.g. AS 34.03.070: b16f0281…ead86).
- **Fetched outside the zip** (for the next staging): the Department of Law's handbook "The Alaska Landlord & Tenant Act: what it means to you" (2024, law.alaska.gov/pdf/consumer/LandlordTenant_web.pdf, 60 pages, SHA-256 cd8d6b1f…b42998; the README said none was found) and the lease template in §15. Both are leads, not law, read in the browser with pdf.js and not saved to disk (no shell route from the browser), so their use is limited to the hashed passages quoted in §15 (weaker method, rule 14).
- **Search and quoting conventions:** the battery index collapses whitespace and normalizes curly quotes and dashes to straight forms, so patterns use straight quotes; every quote in notes was matched by script against that normalized text (§8).

### §1.2 Currency and dated versions (rule 16)
- **Currency statement:** the site labels the code "Alaska Statutes 2025" (34th Legislature). akleg.gov prints no history lines, so currency rests on the label and the session laws (rule 16: "Where the site prints no currency statement ... rely on ... the acts' effective-date clauses").
- **Which sessions are compiled:** a script compared every "is amended to read" section of the 2025-2026 acts with the compiled text: 2025 acts are compiled (sampled amendments show no missing words), and most 2026 acts are **not** (e.g. ch. 8, SLA 2026, § 1 adds words absent from AS 44.88.070). All 1,072 amending sections are listed by target.
- **2026 acts reaching rows (each effective-date section read):** ch. 9, SLA 2026 (§ 57 adds AS 12.62.160(f), marijuana conviction records, effective January 1, 2027 under § 92; § 87 repeals (f)(4) effective January 1, 2028 under § 93; § 75 adds AS 44.21.022, address confidentiality, effective July 1, 2026 under § 94); ch. 23, SLA 2026, § 35 (AS 34.35.050 liens, effective May 31, 2026, § 47); ch. 48, SLA 2026 (unclaimed property, AS 34.45; § 73 adds "virtual currency" to AS 34.45.760(11), which already lists "security deposits"; no general effective-date section, so the default rule of AS 01.10.070(a), 90 days after becoming law, applies and the signing date is not in the corpus, §7); ch. 25, SLA 2026 (optional municipal property-tax exemptions, AS 29.45.050(aa)-(ee); no effective-date section, same default); ch. 50, SLA 2026, § 5 (adds a virtual-currency paragraph to AS 45.50.471(b), effective October 1, 2026, § 6); ch. 49, SLA 2026, § 3 (UCC; AS 09.80.190(17) definition, immaterial). **No 2025 or 2026 act amends AS 34.03, AS 09.45.060 - 09.45.160 or AS 18.80** (script search of every act section for AS 34.03, AS 09.45.06-.16, AS 18.80, landlord, tenant, rental agreement, dwelling unit, security deposit, eviction, forcible entry).
- **Overlay on cited sections:** every 2025-2026 amendment was overlaid on the 1,040+ section numbers the delta cites; the hits are battery-hit lists or sections whose amendments were read and are immaterial to the rows (§14).
- **Special session:** only the 2025 first special session produced a chapter (ch. 1, FSSLA 2025, Permanent Fund dividend verification), immaterial.
- **Not available:** session laws before 2025, the Alaska Administrative Register (Code supplements) and Supreme Court orders amending the rules were not downloaded (README); the rules PDFs are the current compilations.

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- Constitution: in the index (label CONST, 241 units), proved against its own contents list; control 'legislature' returns 76 constitutional hits (AK-K1-CONSTCTRL). Screen in §17.
- Court rules read for rows: Alaska R. Civ. P. 82 (attorney's fees), 85 (forcible entry and detainer), 100 (mediation), 38 (jury demand), Alaska Admin. R. 37.6, 37.8 and 40 (public access, sealing, public index), Alaska Dist. Ct. R. Civ. P. (screened). Forms read: CIV-720 (eviction booklet, Aug. 2023), CIV-725 to CIV-729 (notices to quit), CIV-730, CIV-731 (federal 30-day notice affidavit, 2/26), CIV-732, CIV-735, CIV-740. Court forms are cited as court publications, not law.
- Administrative Code chapters relied on: 6 AAC 30 (Human Rights Commission; 6 AAC 30.610 service animals, applied to landlords by 30.610(n); 6 AAC 30.990(b) shared-dwelling exemption), 13 AAC 50 (fire code adoption), 3 AAC 52 (utility service and disconnection), 8 AAC 15.160 (employer lodging deductions), 18 AAC 30 (pools), 18 AAC 90 (pesticides). Each is flagged in its row as a regulation (rule 21).

### §1.4 Agents and usage
- **Triage of single-state clauses:** two helpers (TA 263, TB 264 clauses), run together, briefed with `AK-BRIEF` (Alaska law map, checked against the sections before sending, rule 27) and `TRIAGE-BRIEF`, each saving one verdict line per clause.
- **Topic canvass:** six slices (C1 55, C2 69, C3 69, C4 57, C5 63, C6 41 topics), **two agents at a time** (C1+C2, C3+C4, C5+C6), each saving one JSON line per topic; slices C3-C6 got an addendum of earlier findings (`CANVASS-ADDENDUM`). No usage limit was hit; no slice was restarted.
- **Independent check:** one agent at a time; round 1 in two sequential parts (R1A 196 rows: every lease clause, every Alaska tag segment and the high-stakes education rows; R1B the other 203 education rows), round 2 (73 edited rows plus a 97-row consistency set), round 3 (57 rows edited in round 2). §13.

### §1.5 Batteries (rule 19)
320 battery runs, every one logged before any hit was read, over an index labelled, from the loaded index, "AAC 25848 ; CODE 20854 ; CONST 241 ; FORM 70 ; RULE 460 ; RULEDOC 27 ; SLA 87 ; SLAS 1463 ; total 49050" (a run scoped to some labels records the scope in its label line and its purpose). Prefixes: AK-F1 (9, formatting, run as soon as the corpus was loaded and before drafting), AK-X1/X2 (8, exploration), AK-M1 (8, main-pass tag screens), AK-K1 (2, constitution), AK-TA/TB (8, triage), AK-C1 to AK-C6 (284, canvass), AK-T0 (tool self-test).
- **Controls:** each run carries a nonsense control (0 hits in every run) and a 'legislature' control generated in the same call (1,371 hits on the whole index; never 0 in any run).
- **Positives:** every run tests real saved sections or statute-style synthetic positives and reject strings; 28 runs recorded a failed positive and were rerun under a new number; every row citing one says "recorded as failed, rerun as N" (checked by script, §8). The tool refuses a reused name and prints a heading-only screen.

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,118 active lease clauses: the 86 shared or blank-states clauses were read one by one in the main pass; the 1,032 single-state clauses were triaged (§2.3).
- **Result:** Alaska is tagged on 56 existing rows: 49 shared clauses, 6 single-state clauses that fit Alaska as written, and `edu-cares-act-notice`. Each tag note opens "AK: Tagged as written (tag-first screen, rules 26-28, AK log §2.1)" and gives the Alaska sections and battery facts.

### §2.1 Tagged AK as written (56)
`acceptable-payment-methods`, `addendum-precedence`, `no-alterations`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `no-disturbance`, `due-at-signing`, `electronic-signatures`, `entire-agreement`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `holdover-ca`, `inspection-rights`, `joint-liability`, `keys`, `landlords-access-mi`, `landlord-maintenance-nd`, `landscaping-irrigation`, `snow-removal`, `maintenance-allocation-ks`, `lead-based-paint`, `electronic-notice-ma`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `possession-delay-ca`, `rent-concession-wi`, `rent-installments-or`, `rent-payment`, `residential-use-only`, `returned-payments-ky`, `rules-ia`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `storage-space-ks-oh-ca`, `surrender-end-of-term-ks-ne`, `tenant-death-contact-nh`, `tenant-forward-proceedings-ca`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility-ky`, `utility-payment-evidence`, `utility-service-continuity`; single-state clauses taken up for Alaska: `late-fee-ky`, `tenant-maintenance-nv`, `tenant-caused-damage-nm` (optional), `prohibited-acts-renter-wy`, `rent-increase-midterm-ky` (optional); federal: `edu-cares-act-notice`.
- **Fee screens (kickoff, rule 26):** Alaska has no closed list of allowed lease fees, no upfront-fee ban, no payment-method rule and no domestic-violence lock-change statute (AK-C1-paymethod-01; AK-M1-REKEY; AK-C3-dvlock and edu-no-dv-lockchange-ak). `keys` is tagged (a re-key charge is actual damages, AS 34.03.220(c)); `hoa-compliance` is **not** (its fine pass-through reads as an indemnity barred by AS 34.03.040(a)(3)); Alaska's version is `hoa-compliance-ak`.
- **Federal row:** `edu-cares-act-notice` is tagged; Alaska's court complaint packet includes affidavit CIV-731 on the federal 30-day notice, so the row reads correctly here.
- **Kentucky and West Virginia mid-term increase rows are identical;** only `rent-increase-midterm-ky` is tagged. Duplicates the triage found (`returned-payments-ok`/`-wi`/`-nh`, `maintenance-allocation-ia`/`-az`/`-ky`, `tenant-duties-ne`, `habitability-baseline-mn`, `late-fee-nh`, `rent-concession-ma`, `tenant-death-contact-mt`, `utilities-responsibility-wv`, `electronic-notice-nm`) were not tagged because a shared row on the same topic already is.

### §2.2 Clauses read in the main pass and not tagged, with reasons
- **Class decision (rule 26, rule 52): "Landlord is not liable" disclaimers and indemnities.** A rental agreement may not provide that the tenant or landlord 'agrees to the exculpation or limitation of any liability of the landlord or tenant arising under the law or to indemnify the landlord or tenant for that liability or the costs connected with it' (AS 34.03.040(a)(3)); the bar runs both ways. Not tagged: `parking`, `storage-space`, `tenants-property-insurance`, `services-utilities-provided`, `pet-policy`, `pet-policy-or`, `landlord-maintenance` (its repair-duty exception for tenant misuse limits the AS 34.03.100(a)(1) duty), `hoa-compliance`. The KS-OH-CA variants without the disclaimer are tagged.
- **Class decision: attorney's-fee and fee-shifting sentences.** A rental agreement may not provide that the tenant 'agrees to pay the landlord's attorney fees' (AS 34.03.040(a)(4)); a mutual prevailing-party sentence includes that promise, and "reasonable costs and expenses" can carry it (rule 49). Prevailing-party fees come from statute, AS 34.03.350, with Alaska R. Civ. P. 82. Not tagged: `default-by-tenant`, `default-by-tenant-co`, `default-by-tenant-ks-ne` (replaced by `default-by-tenant-ak`).
- **Class decision: pre-breach non-waiver sentences.** 'Acceptance of rent with knowledge of a default ... constitutes a waiver of the right of the landlord to terminate the rental agreement for that breach, unless otherwise agreed after the breach has occurred.' (AS 34.03.240). Not tagged: `late-fee`, `late-fee-ne` (replaced by tagging `late-fee-ky`).
- **Others:** `no-sublet-assign` (sole discretion and a flat short-term-rental ban conflict with AS 34.03.060(b)); `possession-delay` (its 30-day wait cuts the AS 34.03.170(a)(1) 10-day termination right); `security-deposit-use` (deductions beyond AS 34.03.070(b)); `security-deposit-return` (blank-states parent; replaced by `security-deposit-return-ak`); `extended-absence-notice-ks` (timing differs from AS 34.03.150); `existing-condition` (Alaska's vehicle is the AS 34.03.020(e) premises condition statement); `tenant-maintenance` (a fault-free "same condition as delivered" duty shifts maintenance without the AS 34.03.100(c)-(d) writing); `landlords-access` (no consent wording, AS 34.03.140(c)); `assistance-animal-accommodation` (documentation and withdrawal grounds differ from 6 AAC 30.610, which reaches landlords); `early-termination` and `early-termination-ks` (landlord termination on vacating without notice is broader than abandonment, AS 34.03.360(1)); `rental-application-accuracy` (Alaska adds the AS 12.62.180(d) lawful-denial carve-out); `acceptable-payment-methods-nj`, `ev-charging-end-of-tenancy-co`, `ev-charging-shared-area-co`, `utility-allowance-cap-co`, `rules-wi`, `surrender-end-of-term`, `surrender-end-of-term-mn-nd`, `surrender-end-of-term-nh`, `holdover` (rest on their own states' law or are covered by the tagged variant).

### §2.3 Single-state clauses (rule 26 triage)
- 1,032 single-state clauses. 505 name another state or its statute in title or body: not taggable as written.
- 527 read in full by the two helpers: RESTS_ON_OWN_STATE 414, CONFLICT 80, TAGGABLE 20, NEEDS_AK_VERSION 11, NEEDS_MAIN_PASS 2.
- TAGGABLE verdicts passed the basis check in the main pass; 6 were tagged (§2.1), the rest are duplicates of a tagged shared row. NEEDS_AK_VERSION and NEEDS_MAIN_PASS were resolved by new Alaska rows (`criminal-activity-ak`, `early-termination-ak`, `unpaid-amounts-interest-ak`, `tenant-assumed-duties-ak`) or by tagging (`possession-delay-ca` for `possession-delay-ky`; `holdover-ca` for `holdover-nd`; `snow-removal` plus `maintenance-allocation-ks` for `snow-removal-ri`), or declined with an education row (`notice-service-fee-ct` → edu-notice-service-fee-ak; `government-fee-reimbursement-ky` → edu-government-fees-ak; `association-approval-fl` → edu-hoa-leasing-ak; `landlord-self-cure-nm` → edu-no-landlord-self-cure-ak; `ev-charging-requirements-co` → edu-no-ev-charging-right-ak; `appliances-excluded-wv` → `appliances-included` with the Alaska note).

## §3 New rows (rule_type, basis, citation)
### §3.1 AK lease clauses (26 new)
`lease_clause_basis`: SERVES_LANDLORD 21, REQUIRED_DISCLOSURE 4 (each written "REQUIRED_DISCLOSURE: <cite>"), CONSTRAINED_TERM 1. Overrides (`supersedes` generated from each "Overrides `x`" note, rule 22): 11.
| Row | rule_type | basis | topic_key | supersedes | key citations |
|---|---|---|---|---|---|
| default-by-tenant-ak | RECOMMENDED | SERVES_LANDLORD | default-by-tenant | default-by-tenant | AS 34.03.220(a)-(e), 09.45.090(c), 09.45.100(c) |
| extended-absence-notice-ak | REQUIRED | REQUIRED_DISCLOSURE: AS 34.03.150 | extended-absence-notice | extended-absence-notice-ks | AS 34.03.150, 34.03.230 |
| security-deposit-use-ak | REQUIRED;CONSTRAINED | REQUIRED_DISCLOSURE: AS 34.03.070(c) | security-deposit-use | security-deposit-use | AS 34.03.070, 34.03.120(c) |
| security-deposit-return-ak | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | security-deposit-return | AS 34.03.070(b), (g) |
| pet-policy-ak | CONSTRAINED | CONSTRAINED_TERM | pet-policy | pet-policy | AS 34.03.070(h), 34.03.040(a)(3) |
| no-sublet-assign-ak | CONSTRAINED | SERVES_LANDLORD | sublet-assign | no-sublet-assign | AS 34.03.060, 18.80.240(3) |
| hoa-compliance-ak | RECOMMENDED | SERVES_LANDLORD | hoa-compliance | hoa-compliance | AS 34.03.040(a)(3), 34.03.130, 34.08.470 |
| existing-condition-ak | CONDITIONAL | SERVES_LANDLORD | existing-condition | existing-condition | AS 34.03.020(e), 34.03.090(b), 34.03.335 |
| abandoned-property-ak | RECOMMENDED | SERVES_LANDLORD | abandoned-property | | AS 34.03.260, 09.35.140 |
| carpet-cleaning-ak | CONDITIONAL | SERVES_LANDLORD | surrender-end-of-term | | AS 34.03.120(c) |
| owner-manager-disclosure-ak | REQUIRED | REQUIRED_DISCLOSURE: AS 34.03.080(a) | owner-identity-disclosure | | AS 34.03.080, 34.03.340 |
| water-supply-waiver-ak | CONDITIONAL | SERVES_LANDLORD | habitability-modifiable | | AS 34.03.100(a)(5)(B) |
| mediation-agreement-ak | CONDITIONAL | SERVES_LANDLORD | informal-dispute-resolution | | AS 34.03.345(a) |
| arbitration-agreement-ak | CONDITIONAL | SERVES_LANDLORD | informal-dispute-resolution | | AS 34.03.345(b), 09.43.310(b) |
| criminal-activity-ak | CONDITIONAL | SERVES_LANDLORD | criminal-activity | | AS 34.03.120(b), 34.03.220(a)(1), 09.45.090(a)(2)(G) |
| lock-change-ak | RECOMMENDED | SERVES_LANDLORD | key-control-policy | | AS 34.03.120(a)(8) |
| police-response-fee-conduct-ak | RECOMMENDED | SERVES_LANDLORD | governmental-fines | | AS 34.03.120(a)(9), 29.35.125 |
| assistance-animal-accommodation-ak | RECOMMENDED | SERVES_LANDLORD | assistance-animal-accommodation | assistance-animal-accommodation | 6 AAC 30.610, AS 34.03.070(h) |
| early-termination-ak | CONDITIONAL | SERVES_LANDLORD | early-termination | early-termination-ks | AS 34.03.020(a), 34.03.070(b) |
| rental-application-accuracy-ak | RECOMMENDED | SERVES_LANDLORD | rental-application-accuracy | rental-application-accuracy | AS 12.62.180(d), 18.80.240(3) |
| utility-shutoff-notice-copy-ak | CONDITIONAL | SERVES_LANDLORD | utility-disconnection-notice-authorization | | 3 AAC 52.410(b)(10), AS 34.03.220(e) |
| tenant-assumed-duties-ak | CONDITIONAL | SERVES_LANDLORD | maintenance-duty-shift | | AS 34.03.100(c), 18.70.095(b) |
| unpaid-amounts-interest-ak | CONDITIONAL | SERVES_LANDLORD | unpaid-damages-interest | | AS 45.45.010(b), 09.30.070 |
| owner-recovery-ak | CONDITIONAL | SERVES_LANDLORD | owner-move-in-reservation | | AS 09.45.090(a)(2)(D), 34.03.310(c) |
| cannabis-restrictions-ak | CONDITIONAL | SERVES_LANDLORD | cannabis | | AS 17.38.220(d) |
| nonresident-alien-statement-ak | REQUIRED;CONDITIONAL | REQUIRED_DISCLOSURE: AS 09.25.010(b) | foreign-ownership | | AS 09.25.010(b) |

### §3.2 AK education rows (317)
- All 317 come from the canvass (C1 48, C2 57, C3 63, C4 51, C5 58, C6 40); the five canvass clauses (C1, C2, C3, C5, C6 one each) are in §3.1. The main pass wrote no education row of its own; its rows point to canvass rows by id.
- **Canvass answers (354 topics):** Confirmed absent 181, Present 118, Answered by main-pass row 47, Not applicable 8, Not located 0. Every topic has an AK row keyed to it (§8).

### §3.3 Shared rows changed
- 56 existing rows changed only in `states` (";AK" appended), `notes` (AK segment appended after " | ") and `last_checked` (2026-10-16). Checked by script: no other field changed, and each row's old notes are an unchanged prefix (§8). No shared row's text changed.

## §4 Layout and placement table (rule 40)
**Batteries:** AK-F1-TYPESIZE (53 hits), -BOLD (41), -UNDERLINE (6; session laws excluded because enrolled bills use underlining as amendment markup), -CAPITALS (10), -CONSPIC (235, broad contract context), -SEPDOC (74), -FORM (140), -PLAIN (20), -SIGNPLACE (9), all over the whole index with no tenancy limb (CONSPIC and FORM with a broad contract or tenancy context limb), run as soon as the corpus was loaded and before drafting; every hit's chapter was checked. Hits outside title 34 are insurance, trusts, elections, motor vehicle repair, lease-purchase of goods (AS 45.35, personal property), cruise ships, telephone and charitable solicitations, regulatory filings and court procedure: none reaches a residential lease.
| Rule | Where | Applies to residential leases? | Library handling |
|---|---|---|---|
| Rules 'shall be posted prominently on the premises' | AS 34.03.130(a) | Yes (landlord rules, not lease text) | `rules-ia` AK note; edu-rules-regulations-ak |
| Premises condition statement may be in, referenced in, or 'a separate attachment to the rental agreement' | AS 34.03.020(e) | Yes (optional) | existing-condition-ak |
| Tenant repair/maintenance agreement 'set out in a separate writing signed by the parties' | AS 34.03.100(d)(1) | Yes, any dwelling other than a single family residence | `maintenance-allocation-ks` (separate document); `landscaping-irrigation`, `snow-removal` single family only |
| Mediation or arbitration scope within the agreement, referenced, or 'as a separate attachment' | AS 34.03.345 | Yes (optional) | mediation-agreement-ak, arbitration-agreement-ak (scope in the lease) |
| Separate instrument to shorten warranty limitation | AS 34.08.660(a) | No (unit purchasers) | none |
No type-size, boldface, capitals, initials, signature-placement or plain-language rule reaches a residential lease (edu-no-lease-type-size-ak, edu-no-initials-requirement-ak, edu-no-plain-language-lease-law-ak). No two rules claim the same place in the lease, so nothing needed settling with Taylor.

## §5 Dormant rows resolved (rule 25)
None: the kickoff says no rows were in the library for Alaska, and the Step A script found no row carrying AK or ending in `-ak`.

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Each is offered as optional ("[Optional.]" or a use note), never as a default.
| Clause | Verdict | Why |
|---|---|---|
| Premises condition statement and inventory | Offered: existing-condition-ak | 'If required by the landlord' (AS 34.03.020(e)) |
| Water/hot-water waiver (no well or utility water) | Offered: water-supply-waiver-ak | 'the rental agreement specifically states' (AS 34.03.100(a)(5)(B)) |
| Tenant takes on garbage, water/heat, locks, detectors (one- or two-family) | Offered: tenant-assumed-duties-ak (single family; two-family uses the separate agreement); `maintenance-allocation-ks` for other dwellings | AS 34.03.100(c)-(e) |
| Mediation; binding arbitration | Offered: mediation-agreement-ak, arbitration-agreement-ak | AS 34.03.345 |
| Professional carpet cleaning at move-out | Offered: carpet-cleaning-ak | 'in the landlord's discretion' (AS 34.03.120(c)) |
| Tenant-caused damage | Offered: `tenant-caused-damage-nm` (tagged) | AS 34.03.200 has no fault exception; the clause keeps the casualty rights (rule 54t) |
| Crime/illegal activity | Offered: criminal-activity-ak | AS 34.03.120(b), 34.03.220(a)(1) |
| Owner use, remodeling, code work, sale | Offered: owner-recovery-ak | AS 09.45.090(a)(2)(D) refers to 'the period of notice ... set out in the rental agreement' |
| Early termination buyout | Offered: early-termination-ak | Contract term (AS 34.03.020(a)) |
| Mid-term rent increase | Offered: `rent-increase-midterm-ky` (tagged; Taylor IN library decision) | No statute; AS 34.03.310 limits retaliation |
| Interest on unpaid amounts | Offered: unpaid-amounts-interest-ak | rate 'by express agreement' (AS 45.45.010(b)); no rate above it |
| Marijuana restrictions | Offered: cannabis-restrictions-ak | AS 17.38.220(d) |
| Utility shutoff-notice copy | Offered: utility-shutoff-notice-copy-ak | 3 AAC 52.410(b)(10) |
| Nonresident-alien statement | Offered as required where it applies: nonresident-alien-statement-ak | AS 09.25.010(b) |
| Landlord casualty termination | Declined: edu-casualty-termination-ak | Could cut the tenant's AS 34.03.200(a)(2) right to stay in the usable part (AS 34.03.040(a)(1)) |
| Premium holdover rate | Declined: edu-holdover-rate-ak | AS 34.03.290(c) already sets up to 1.5x actual damages for a wilful, bad-faith holdover; `holdover-ca` covers actual damages otherwise (KY, uniform-act precedent) |
| Eviction/notice-service fee | Declined: edu-notice-service-fee-ak | No statutory basis; close to the AS 34.03.040(a)(3)-(4) bars |
| Attorney-fee clause | Declined: edu-attorney-fees-ak | AS 34.03.040(a)(4); AS 34.03.350 |
| Collection fee | Declined: edu-collection-fee-ak | AS 34.03.040(a)(4) |
| Government-fee and property-tax pass-through | Declined: edu-government-fees-ak, edu-no-tax-escalation-ak | Reads as indemnity (AS 34.03.040(a)(3)) |
| Statutory waivers (exemption, jury, notice to quit) | Declined: edu-homestead-waiver-ak, edu-jury-waiver-ak, edu-no-notice-to-quit-waiver-ak | Exemption waiver before levy unenforceable (AS 09.38.105); jury waiver unsettled; AS 34.03.040(a)(1) |
| Opt-out of AS 09.45.690 redemption | Declined: edu-redemption-ak | Reach to AS 34.03 tenancies unsettled |
| "Specific agreement to the contrary" on abandonment termination (AS 34.03.230(b)) | Declined: edu-extended-absence-ak | Only limits the landlord's remedy |
| Sublet without consent (AS 34.03.060(a)) | Declined: edu-sublet-assign-ak | Gives up the consent procedure |
| Seller release variation (AS 34.03.110) | Declined: edu-security-deposit-on-sale-ak | Could only add to the landlord's liability |
| Emergency animal caretaker | Declined: edu-no-animal-care-entry-right-ak | Would widen entry beyond AS 34.03.140 |
| Smoke-drift waiver | Declined: edu-no-smoke-drift-waiver-ak | AS 34.03.040(a)(1), (3) |
| Alarm-tampering fee | Declined: edu-no-alarm-tampering-fee-ak | No statute; actual damages only |

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A, recommendation "Yes"): Taylor chose "Yes (Recommended)". That approved the live match (§1.1) and fetching sources missing from the zip where a row depends on them (the Department of Law handbook and the lease template, §15).
No other question was needed: the remaining calls were legal or drafting judgments (§6.3) or decisions the SOP and earlier library decisions settle (Taylor IN: offer the mid-term increase option; Taylor PA: caps are education rows; Taylor AZ: application accuracy clause; rule 48 settled: chore clauses single-family-only with a separate agreement).

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Two-family residences:** AS 34.03.100(c) lets a 'one- or two-family residence' shift duties 'in writing', while AS 34.03.100(d) requires a separate writing for any dwelling 'other than a single family residence'. The library takes the cautious reading: a two-family residence uses the separate signed agreement.
- **Deposits above $2,000 rent:** AS 34.03.070 as a whole 'does not apply to rental units where the rent exceeds $2,000 a month'. Clauses keep the deposit promises for every tenancy (a landlord may promise more); education rows say the statute does not reach those units (applied across 30+ rows after the independent check).
- **Deposit return timing:** security-deposit-return-ak promises 14 days (30 with damage deductions) in every case, meeting the statute whether or not an AS 34.03.290 notice was given.
- **Partial payment after the 7-day notice:** AS 34.03.220(b) allows accepting it and extending the eviction date; AS 34.03.240 and the court booklet point to waiver. Neither reading is stated as settled; landlords are told to put any extension in a written agreement made after the breach (edu-waiver-by-acceptance-ak).
- **Illegal-activity notice:** 5 days, so the AS 34.03.220(a)(1) window and the AS 09.45.090(a)(2)(G) five-day holding period agree.
- **Mailed notices:** a notice to quit may be mailed only by registered or certified mail (AS 09.45.100(c)), and mailing adds three days (AS 09.45.090(c)); every clause and education row states both.
- **Sublease offers:** marital status dropped (AS 18.80.240(3)); the under-18 ground left out (federal familial status, not read); short-term hosting not labelled "commercial activity" in the clause.
- **Owner-ground recoveries during a fixed term:** whether AS 09.45.090(a)(2)(D) lets a landlord end a fixed term when the lease is silent is unsettled; owner-recovery-ak makes the right express.
- **Nonresident-alien statement:** the one-year exception sits in AS 09.25.010(b)'s first sentence; the clause is used for any nonresident alien tenant (required at least for terms over one year).
- **Arbitration:** possession actions excluded; the right to counsel kept (AS 09.43.310(b)(4)).
- **Service animals:** 6 AAC 30.610 applied to housing through 30.610(n); its "3 AAC 30.990(b)" cross-reference read as 6 AAC 30.990(b) (§10).
- **Late fee:** `late-fee-ky` (once per late payment, no non-waiver) tagged; the court's forms say a tenant can't be evicted for late fees, and default-by-tenant-ak says so.
- **Fire sprinklers:** edu-fire-sprinklers-ak states the R-2 rule in the code's own term and tells landlords to confirm a building's class with the fire official, since the model code's definitions are not in the corpus (it was NEEDS_REVIEW in the canvass).

## §7 Open items, each with its search boundary
1. **Case law not searched** (no case-law corpus): whether the consumer protection act reaches residential leases (AS 45.50.481(a)(1)); whether AS 34.03.350 awards full or Rule 82 scheduled fees; penalty limits on late fees and early-termination fees; arbitration of possession actions; private reach of the privacy clause (Alaska Const. art. I, § 22); unilateral rent-increase clauses. Each row states the cautious course.
2. **Federal law not read in this pass:** Fair Housing Act (familial status, assistance animals, reasonable modifications), SCRA, lead disclosure (the tagged federal row), CARES Act (tagged federal row). Rows say so.
3. **Municipal ordinances** (Anchorage, Fairbanks, Juneau, others): not read (rule 3), including AS 29.35.125 police-response fee ordinances and rental codes.
4. **Collection agency practices (rule 47):** AS 08.24 (collection agency licensing and prohibited practices) was not read for per-violation exposure from collecting under a void fee term; no general debt-collection practices statute was searched beyond the C1 batteries.
5. **Effective dates not determinable from the corpus:** ch. 48, SLA 2026 and ch. 25, SLA 2026 have no effective-date section; under AS 01.10.070(a) they take effect 90 days after becoming law, and the signing dates are not in the corpus (bill status pages not fetched).
6. **Not in the corpus:** the Alaska Administrative Register (AAC supplements since the last print), Supreme Court rule-amendment orders, the 2021 IBC/IFC model code text, regulations implementing AS 44.21.022 (address confidentiality), session laws before 2025.
7. **3 AAC 52.410(b)(10)** reaches utilities regulated by the Regulatory Commission of Alaska; whether municipal or exempt utilities offer third-party shutoff copies was not checked.
8. **AS 09.45.690** (redemption before judgment "unless otherwise provided in the lease"): reach to AS 34.03 tenancies unsettled.
9. **AS 09.17.080** (allocation of fault) and joint and several rent liability: not checked.
10. **Real-lease and handbook text** were read in the browser and hashed but not saved to disk (§15).

## §8 Integrity checks on the delta
Run by script on the final delta (the checks file and the quote check were rerun after every errata round).
| Check | Result | Detail |
|---|---|---|
| Duplicate ids | Pass | 399 unique |
| New ids not in master; end "-ak" | Pass | 343 new |
| `supersedes` resolve; generated from "Overrides `x`" notes (rule 22) | Pass | 11 overrides |
| Groups valid; clause groups not education-only | Pass | |
| verification_status set | Pass | 399 VERIFIED |
| rule_type values; lease_clause_basis per bucket | Pass | education rows blank |
| Shared rows change only states, notes, last_checked; old notes prefix (rule 62) | Pass | 56 rows |
| Every topic has an AK row (rule 27) | Pass | 354 of 354 |
| Topic keys known | Pass | no new topic_key |
| Education body length | 1 long | edu-cure-rights-ak 248 words (accepted; it carries the mail and due-care conditions the check added) |
| Bracket beside a variable (rule 60) | 1 flag | `maintenance-allocation-ks` (shared text, flagged §10) |
| Row pointers in AK notes and bodies resolve to active rows (rule 63) | Pass | |
| No exculpation, indemnity or fee promise in AK clauses | Pass | new and tagged |
| Citation forms (kickoff) | Pass | no "A.S.", "AS §", bare "SLA 26", missing leading zero |
| Cited AS/AAC sections exist | Pass with 4 explained | "3 AAC 30.990" (the regulation's own misprint, quoted), AS 44.21.022 (enacted by ch. 9, SLA 2026, § 75, not yet compiled), AS 34.06.020 (repealed chapter cited by 3 AAC 90) |
| Basis recorded in notes (rule 79) | Pass | 343 of 343 new rows; 56 of 56 tag segments |
| Rule 15 line | Pass | |
| No working-file paths in notes | Pass | |
| Cited batteries exist; failed positives disclosed | Pass | 28 failed runs, each disclosed as "recorded as failed, rerun as N" |
| Quote check (rule 59) | Pass with 9 by eye | 1,823 single-quoted passages matched against the cited section (falling back to every section the row cites); the 9 the parser can't split are adjacent quotes ('rent' means 'the uniform periodic payment ...'), verified by eye. Non-statute quotes (search terms, clause text, handbook text) were converted to double quotes before the check |
| Delta file | Pass | 17 columns, master header, CRLF, UTF-8 |
| Pointer check on every row id this log names | Pass | run on the final log (every backticked or "-ak" id resolves to a delta or master row) |

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 56 tagged rows changed only in `states`, an AK note segment and `last_checked`. No propagation note is owed to any other state's log.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
1. **Stale cross-references (rule 77):** 6 AAC 30.610(n) cites '3 AAC 30.990(b)', apparently meaning 6 AAC 30.990(b); 3 AAC 90 (emergency rent review) still cites the repealed AS 34.06.
2. **`maintenance-allocation-ks` prints a bracket beside variables** ({{tenant_maintained_items}} [check each that applies ...], {{maintenance_agreement_consideration}} [state what Landlord gives ...]); the same pattern is in the AZ, IA and KY versions. Neither variable is in the kickoff's builder list. Affects every state tagged on those rows.
3. **Builder scoping (Alaska and other uniform-act states):** `landscaping-irrigation` and `snow-removal` must be offered only for a single family residence; otherwise `maintenance-allocation-ks`. Deposit caps to enforce: prepaid rent plus deposit at most two months' periodic rent, pet deposit at most one month, neither cap where rent exceeds $2,000 a month (AS 34.03.070(a), (h)).
4. **`electronic-notice-ma` (rule 46):** it lets the tenant e-mail "any notice under this Lease or applicable law" but has no sentence saying it controls over the shared `notices` clause, whose last sentence says nothing designates an alternative method for a notice governed by law. Check for every tagged state.
5. **Product, data protection:** Steinoak stores applicants' Social Security numbers; Alaska's Personal Information Protection Act (AS 45.48: breach notice, SSN use limits, disposal policies) may apply to Steinoak itself for Alaska residents (edu-tenant-records-ak).
6. **Product, licensing:** managing others' rentals for a fee may need an Alaska real estate license (AS 08.88; the Department of Law handbook says five or more units; AS 08.88.900(a)(16) exempts four or fewer); a warning for property-manager users may be worth considering (edu-no-landlord-registration-ak).
7. **Library gap:** there is no topic for a lease with an option to purchase; in Alaska it triggers the seller disclosure statement for one- or two-family property (AS 34.70.010, 34.70.200(4)), noted in edu-required-disclosures-ak and edu-management-change-ak.
8. **Legal watch:** AS 12.62.160(f) (marijuana conviction records) from January 1, 2027, request requirement repealed January 1, 2028 (ch. 9, SLA 2026, §§ 57, 87, 92, 93); AS 44.21.022 address confidentiality from July 1, 2026 (ch. 9, SLA 2026, §§ 75, 94); AS 45.50.471(b) new paragraph October 1, 2026 (ch. 50, SLA 2026, § 6); ch. 48 and ch. 25, SLA 2026 effective 90 days after signing (dates not in the corpus). Every 2026 act is uncompiled in "Alaska Statutes 2025"; the next compilation should be re-checked for AS 34.45 and AS 29.45.050.
9. **New `{{variables}}`:** none created by this pass.
10. **Court form CIV-731** (federal 30-day notice affidavit) is filed with every Alaska eviction complaint; useful for the legal tracker.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4; only AS 34.03.130(a) posting, AS 34.03.020(e) and 34.03.345 attachments and AS 34.03.100(d) separate writings reach residential leases.
- **41 Just-cause:** none (edu-no-for-cause-eviction-ak): periodic tenancies end on 14 or 30 days' notice (AS 34.03.290(a)-(b)), a fixed term at its end; situational limits: retaliation (AS 34.03.310), fair housing (AS 18.80.240), conversion notice 180 days (AS 34.08.620), owner-ground recoveries 30 days (AS 09.45.090(a)(2)(D)).
- **42 Required text in shared clauses:** the deposit-withholding terms (AS 34.03.070(c)) and the absence-notice term (AS 34.03.150) are required lease text; both are Alaska rows (security-deposit-use-ak, extended-absence-notice-ak).
- **43 Cure promises:** default-by-tenant-ak puts the no-cure grounds in their own sentence reaching both limbs; the rent limb's written notice is what Alaska requires (AS 34.03.220(b)); the repeat-breach shortcut carries 'in the absence of due care'; continuing cure (AS 09.45.690) left to law.
- **44 Terms turned into duties:** AS 34.03.160(a) reaches 'a material noncompliance by the landlord with the rental agreement', so listed appliances, landlord-paid utilities and promised snow plowing become remedy triggers; tag notes say so.
- **45 Electronic notices:** AS 09.80 read whole; agreement required (020(b)), unwaivable right to refuse (020(c)), retention (050), exclusion of eviction, default and cure notices for a primary residence (010(c)(1)(B)); `electronic-notice-ma` fits.
- **46 Lease as the notice:** the absence-notice clause is required; the owner/manager disclosure may be the lease; `addendum-precedence` fits; see §10 item 4.
- **47 Knowing-use penalties:** 'If a landlord or tenant wilfully uses a rental agreement containing provisions known by the person to be prohibited, the other party may recover the amount of actual damages.' (AS 34.03.040(b)); the consumer protection act may add treble damages (unsettled; edu-consumer-protection-act-ak, edu-knowing-use-penalty-ak); collection-agency law not read (§7).
- **48 Separate documents:** AS 34.03.100(d) for any dwelling other than a single family residence; settled rule 48 applied.
- **49 Collection costs:** AS 34.03.040(a)(4); "costs and expenses" sentences not tagged; collection fee declined.
- **50 "Lease controls" wording:** AS 34.03.020(c)-(d), 030, 060(a), 110, 150, 230(b), 260(a), 100(a)(5)(B), 345, AS 09.45.690 and 09.45.090(a)(2)(D) each decided (§6.1).
- **51 Plain language and consumer contracts:** no plain-language lease law; AS 45.50.471 has no lease-specific list but (b)(14) and the general standard may reach leases (unsettled).
- **52 Exculpation:** class decision §2.2; KS-OH-CA variants tagged.
- **53 Figures against shared clauses:** holdover multiple (AS 34.03.290(c)) and `holdover-ca` consistent; pre-breach non-waiver rows untagged; possession-delay 10 days; absence 7 days; illegal-activity 5 days; deposit timing 14/30 days; no late-fee or returned-payment cap.

## §12 Other Step C screens
- **30 Read beyond the section:** AS 34.03 read whole in the main pass; AS 09.45.060 - 09.45.160 and 09.45.630 - 09.45.700 read whole; neighbouring sections read for every absence by the canvass.
- **31 Enacted twice:** AS 34.05.100 restates the illegal-activity duty for premises outside AS 34.03; AS 09.45.090(b) gives the non-URLTA unlawful-holding list; AS 09.45.690's redemption sits in the general recovery article; rows use the AS 34.03 and 09.45.090(a) versions.
- **32 Place or size:** rent over $2,000 a month (deposit statute); single family residence vs one- or two-family vs other dwellings (AS 34.03.100(b)-(d)); undeveloped rural area (AS 34.03.100(b), 34.03.360(23)); fire regulations and buildings of four or more units (AS 18.70.080(a)(2)); license exemption for four or fewer units managed for others (AS 08.88.900(a)(16)). Each row carries its scope in the body.
- **37 Tenancy type:** week-to-week (14 days, only 'While rent is current'), month-to-month (30 days before a rental due date), fixed term; a consented holdover follows AS 34.03.020(d) (week to week for weekly rent).
- **38 Imported structure:** none; every figure comes from Alaska text.
- **39 Eviction duties:** no post-writ property statute beyond AS 34.03.260 (edu-post-eviction-property-ak); federal pre-filing condition via form CIV-731; record sealing only under the general rules (Alaska Admin. R. 37.6, 40; edu-no-eviction-record-sealing-ak); hearing within 15 days, summons two days before (Alaska R. Civ. P. 85(a)(2)).

## §13 Independent check (rule 80)
Brief: `check/CHECK-BRIEF.md`. It told each checker to check against the statute, not the notes; that earlier findings may be wrong; to print and read whole sections; to give exact old/new errata quoting every subsection relied on; and to save findings line by line. Errata were applied by script with a once-only assertion and a guard that no erratum reaches another state's note segment (rule 80, RI 5).
| Round | Rows checked | ERROR | FIX | NOTE | Errata applied | Result |
|---|---|---|---|---|---|---|
| 1 (part A: clauses, tag segments, high-stakes education) | 196 | 2 | 23 | 5 | 30 + 2 main-pass follow-ons | default-by-tenant-ak repeat breach needed 'in the absence of due care'; edu-fees-as-rent-ak told landlords to take fees from the deposit |
| 1 (part B: other education rows) | 203 | 1 | 31 | 14 | 46 | edu-no-ordnance-demolition-disclosure-ak missed the 30-day owner-ground floor |
| 2 (73 edited rows + 97-row consistency set) | 170 | 4 | 56 | 8 | 68 | the 30-day floor in 4 more rows; $2,000 deposit exception and registered/certified mail across ~30 rows; one round-1 edit (prejudgment interest) partly reversed |
| 3 (57 rows edited in round 2) | 57 | 1 | 2 | 0 | 3 | carbon monoxide wording narrower than AS 18.70.095(d)(3) |

### Edited after the last check
Found by script: each final row was diffed against the version the round-3 checker saw. Claude Code reads these against the statute at sync (kickoff; rule 80).
| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| edu-optional-lease-terms-ak | round 3 | round 3 erratum | carbon monoxide detector condition widened to 'contains or is serviced by' (AS 18.70.095(d)(3)) |
| edu-lease-content-requirements-ak | round 3 | round 3 erratum | rules bind only if known at signing and meeting the AS 34.03.130(a) tests |
| edu-retaliation-ak | round 3 | round 3 erratum | "removal" renamed "end-of-residential-use" (AS 34.03.310(c)(6)) |

## §14 Gap-discovery source 1 — statute walk (rule 29)
AS 34.03 was read whole, and each core chapter's section index was diffed by script against every section number cited in the delta's AK rows and tag segments.
| Chapter | Sections | Repealed, renumbered or empty | Live | Uncited live sections |
|---|---|---|---|---|
| AS 34.03 | 43 | 1 | 42 | 1 (34.03.010, purpose and construction) |
| AS 09.45 | 130 | 7 | 123 | 98, none in 09.45.060 - 09.45.160 or 09.45.630 - 09.45.700 (the rest are quiet title, boundaries, partition, liens, nuisance, construction defects) |
| AS 18.80 | 34 | 0 | 34 | 0 |
| AS 18.70 | 29 | 3 | 26 | 9 (mutual aid, fire services personnel fund) |
| AS 34.05 | 6 | 2 | 4 | 2 (agricultural tenants, rental equipment) |
| AS 09.80 | 18 | 0 | 18 | 12 (attribution, notarization, admissibility, transferable records, government records) |
| AS 34.45 | 53 | 1 | 52 | 8 (unclaimed property general provisions) |
| AS 29.35, AS 45.50, AS 09.38, AS 09.35 | 285 | 16 | 269 | 250 (only the sections reaching leases are cited) |
No uncited live section of AS 34.03 or AS 09.45.060 - 09.45.160 raises a landlord duty or right without a row.

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Searches for a qualifying lease:** Alaska Association of REALTORS (members only; no free copy found); Alaska Housing Finance Corporation (public housing manuals and applications found, AP01 2026 and 2022, and admissions and occupancy policy chapters 6 and 8, but no dwelling lease posted); North Haven Communities at Fort Wainwright (leasing guide only; federal-enclave military housing); City and Borough of Yakutat (a Head Start rental agreement: commercial, not residential); property managers in Anchorage, Fairbanks and Juneau (none posted). No free professional Alaska residential lease was found (DE 7).
- **Lease used (weaker, a lead only):** "ALASKA RESIDENTIAL LEASE AGREEMENT" (ipropertymanagement.com, `Standard-Alaska-Residential-Lease-Agreement-Template.pdf`, 11 pages incl. an Alaska "Tenant Occupancy Disclosure" and the federal lead form; PDF SHA-256 bf5bcc0b235f315227d9c4a2eabf1b73dc62cd222bb7c478d3d9737800ed314d; extracted text SHA-256 06313b9466083a8675742fa7b1e48ff951904c693c3f7dc084bd858042f02984, read whole in the browser). It is a generic template with an Alaska wrapper, not a professional form. No text is reproduced here.
- **Map against the library (lead about wording):** late fee per day or per occurrence (Alaska has no cap; the library charges once, `late-fee-ky`); fees-first application of payments (library rent first, `application-of-payments`; CIV-725 bars evicting for fees); deposit deductions for late fees, utilities, flat cleaning, early termination and brokerage fees (conflict with AS 34.03.070(b); security-deposit-use-ak); a stipulation that the property is in good repair (existing-condition-ak uses the statutory statement); a flat no-sublet option (conflicts with AS 34.03.060(b); no-sublet-assign-ak); entry "for any reasonable purpose" on hours' notice (conflicts with AS 34.03.140; `landlords-access-mi`); automatic termination after a possession delay (conflicts with AS 34.03.170; `possession-delay-ca`); tenant pays HVAC and plumbing repairs (conflicts with AS 34.03.100(c)-(d)); pet "held harmless" and a general "Landlord shall not be liable" indemnity (AS 34.03.040(a)(3)); attorney-fee reimbursement (AS 34.03.040(a)(4)); abandonment removal of belongings "without incurring any liability" (conflicts with AS 34.03.260); an absence disclosure keyed to "seven (7) or more days" (the statute says 'in excess of seven days'). It omits the AS 34.03.080 owner/manager disclosure and the AS 34.03.070(c) withholding terms. No change to a shared row follows from it; its errors fed the scenario screen.
- **Department of Law handbook** (lead): "The Alaska Landlord & Tenant Act: what it means to you" (2024; approved under AS 44.23.020(b)(8); "This publication is not landlord and tenant law"). Passages compared: late charges (a small flat fee that approximates actual cost may be legal; no eviction for late fees: consistent with edu-late-fees-ak); "it is NOT lawful to charge a fee that becomes the security deposit if the tenant moves in but is forfeited if the tenant decides not to take the rental unit" (added to edu-no-holding-deposit-rule-ak as the official view); with a lease, "the landlord cannot raise the rent ... during the period of the lease" (added to the `rent-increase-midterm-ky` AK note: describes a lease silent on increases); five or more managed units need a license (§10 item 6); locks (consistent with lock-change-ak).

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 142 generated, from advertising and screening through move-in disclosures, deposits, rent and fees, utilities (including heating oil and hauled water), repairs, entry, absence, guests and occupants, subletting and short-term hosting, police-response fees, crime, cannabis, firearms in vehicles, parking and towing, associations, insurance, fire and disaster, notices to quit and mail service, partial payments, repeat breaches, retaliation, owner move-in, conversion, early termination, servicemembers, holdover, the eviction case, fees, prohibited terms, dispute resolution, abandonment and property left behind, tenant death, move-out, deposit return and escheat, sale, lease options, foreclosure, collection from a dividend, electronic signing and notices, and municipal ordinances.
- **Result:** each scenario maps to one or more existing AK row ids (checked by script; no missing id). Rows added or fixed from the screen: utility-shutoff-notice-copy-ak (heating season), edu-no-for-cause-eviction-ak (owner grounds during a fixed term only if the lease gives the right), and the template's errors above.

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus:** the whole index ("AAC 25848 ; CODE 20854 ; CONST 241 ; FORM 70 ; RULE 460 ; RULEDOC 27 ; SLA 87 ; SLAS 1463 ; total 49050"); the Constitution was loaded before any battery; every run's 'legislature' control returned hits.
- **Found outside AS 34.03 and used in rows:** AS 09.25.010 (statute of frauds; nonresident-alien statement), AS 09.30.070 and 45.45.010 (interest), AS 09.38.105 (exemption waivers), AS 09.43 (arbitration), AS 09.50.170 - 09.50.240 (nuisance abatement), AS 09.68.115 (bad checks), AS 09.80 (electronic transactions), AS 08.88 (real estate licensing; stigmatized property AS 08.88.615), AS 11.71.040(a)(5) (keeping a drug house), AS 12.62.160, 12.62.180 (criminal records), AS 17.38.220(d) (marijuana), AS 18.35.301 (smoke-free common areas), AS 18.56.096 (AHFC-financed housing nondiscrimination), AS 18.65.800 (firearms in vehicles), AS 18.66 (protective orders), AS 18.70.095 (detectors), AS 18.80 and 6 AAC 30 (fair housing, service animals), AS 26.05.135 (state militia SCRA extension), AS 28.10.502, 28.11 (towing, abandoned vehicles), AS 29.35.125 (police-response fees), AS 29.45.040 (senior and disabled-veteran renter payments), AS 34.08.620 (conversion notice), AS 34.20.070 (foreclosure notice to occupants), AS 34.35 (construction liens), AS 34.45 (unclaimed deposits), AS 34.70 (seller disclosure for lease options), AS 42.05.754 (meter conservation charge), AS 43.23.140 (dividend levy), AS 44.21.022 (address confidentiality, uncompiled), AS 45.48 (personal information), AS 45.50.471 (consumer protection), AS 46.03.500 - 46.03.599 (drug labs), 3 AAC 52 (utilities), 8 AAC 15.160 (employer lodging), 13 AAC 50 (fire code), 18 AAC 30 (pools), 18 AAC 90 (pesticides).
- **Constitution screen** (AK-K1-CONSTSCREEN: 34 hits read): art. I, § 1, 3, 4, 5, 7, 14, 15, 16, 18, 19, 20, 22 and others. Provisions binding only the State: § 15 ('No law impairing the obligation of contracts'), § 19's individual-right sentence ('shall not be denied or infringed by the State or a political subdivision of the State'), § 3 (the legislature implements). § 22 (privacy) and § 16 (civil jury over $250) were weighed for screening, cameras and jury waivers; whether § 22 reaches private landlords is case law not read (§7). No constitutional provision makes a shared clause unlawful.

## §18 Topic canvass (rules 27, 36)
- **Method:** six slices (C1-C6), two agents at a time, each saving one JSON line per topic, briefed with `AK-BRIEF`, `MAIN-PASS-ROWS` (the main pass's tags and rows, so no duplicate was drafted) and `CANVASS-BRIEF` (absence method, row format, citation form); C3-C6 also got `CANVASS-ADDENDUM` (earlier findings: partial payments, DV law, marital-status inquiry, the $2,000 deposit exception, smoke-free common areas, firearms in vehicles, towing). Duplicates across slices were checked by id and subject before the check; none needed merging.
- **Answers (354 topics):** Present 118, Confirmed absent 181, Answered by main-pass row 47, Not applicable 8, Not located 0. 322 rows drafted (5 lease clauses, 317 education rows), all in the delta. Every topic has an AK row keyed to it (§8). The "optional lease terms" education row (edu-optional-lease-terms-ak) was re-read item by item against §6.1 before the check (NH 2).
- **Topic questions:** each row's notes answer the questions listed under its topic in `lease-clause-topics.md` ("Q: ... A: ...").

## §19 Conformance-table entry
AK (2026-10-16), from this log's §§ 4, 6.1, 11, 12 and 14-18. It ran on SOP 1.73 under the usage budget and read every row section-open, so 79 is ✓. It offers a criminal-activity clause (criminal-activity-ak), a tenant-caused-damage clause (`tenant-caused-damage-nm`, tagged), an owner-recovery clause (owner-recovery-ak) and the uniform act's statutory options (condition statement, water waiver, duty shift, mediation, arbitration, carpet cleaning). Its "n": landlord casualty termination (would cut the tenant's AS 34.03.200(a)(2) right; edu-casualty-termination-ak), a premium holdover rate (AS 34.03.290(c) already sets up to 1.5x actual damages; edu-holdover-rate-ak), statutory waivers (exemption waiver before levy unenforceable, AS 09.38.105; jury waiver unsettled; notice-to-quit waiver barred by AS 34.03.040(a)(1)) and an eviction-fee clause (edu-notice-service-fee-ak). Rule 27: all 354 topics have AK rows.

## Proposed SOP changes
- Rule 24: where the built-in browser can reach the official site, fetch the corpus's whole-title print pages in-page and compare their byte SHA-256 with the manifest; a match proves every section on the page, which is stronger than matching five sections (AK: titles 9, 18 and 34 matched byte for byte).
- Rule 16: where a code prints no history lines, decide which sessions are compiled by script, comparing each "is amended to read" section of the recent acts with the compiled text, and record the result before relying on any amended section (AK: 2025 compiled, 2026 not).
- Rule 27 / rule 80: before the canvass, list in the helper brief every whole-section scope exception in the core act ("This section does not apply to ...") and every recurring statutory condition ("in the absence of due care", "not to exceed", "registered or certified mail", a floor in the eviction statute), and have the assembler flag rows citing those sections whose body omits the condition (AK: rounds 1-2 found about 40 rows missing the $2,000 deposit exception, the mail method, the due-care condition or the 30-day owner-ground floor).
- Rule 59: canvass briefs should tell helpers to put search terms, control-term names and clause text in double quotes; AK helpers single-quoted the 'legislature' control in 266 rows, which the quote checker then reported as misquotes.
- Rule 33: when no free professional lease exists, also read the state's official landlord-tenant handbook (an attorney-general or real estate commission publication) as a lead beside the template; it supplies the official reading on unsettled points (AK: the holding-deposit forfeiture and mid-term rent increase views).
- Rule 39: screen the court's notice-to-quit and default forms for statements of law ("A tenant can't be evicted for nonpayment of late fees", CIV-725) and cite them as court publications in the rows that turn on them.

## Proposed topic questions
- `security-deposit-cap`: Does the deposit statute's exemption for higher-rent units exclude the whole section (trust account, withholding terms, deadlines, penalty), not just the cap? (Alaska, AS 34.03.070(a).)
- `extended-absence-notice`: Does a statute require the rental agreement itself to contain an absence-notice term, and how is the notice timed? (Alaska, AS 34.03.150.)
- `nonpayment-notice`: May a notice to quit be mailed only by registered or certified mail, and does mailing add days to the period? (Alaska, AS 09.45.090(c), 09.45.100(c).)
- `owner-move-in-reservation`: Does the eviction statute set a minimum holding period for owner-use, remodeling or sale recoveries that the lease may lengthen? (Alaska, AS 09.45.090(a)(2)(D).)
- `foreign-ownership`: Does a statute of frauds require an instrument creating a real-property interest in a nonresident alien, including a lease, to say so and give the alien's name and address? (Alaska, AS 09.25.010(b).)
- `utility-disconnection-notice-authorization`: Do utility regulations let a tenant-customer designate the landlord to be copied on shutoff notices? (Alaska, 3 AAC 52.410(b)(10).)
- `habitability-modifiable`: May the lease waive the water or hot-water supply duty where the premises have no well or utility water? (Alaska, AS 34.03.100(a)(5)(B).)

## Sync review (Claude Code, 2026-10-17)
- **Merge:** `merge-delta.py` against base 69348e1: 343 new rows and 56 existing rows changed only in their AK tag and note segment; 6,952 rows, byte-exact CRLF round trip. The delta's SHA-256 matched this log's file.
- **Edited after the last check (§13):** `edu-optional-lease-terms-ak`, `edu-lease-content-requirements-ak` and `edu-retaliation-ak` read against AS 18.70.095, 34.03.130, 34.03.210, 34.03.310 and 09.45.090(a)(2)(D) in the corpus: no errors.
- **Statute spot-check:** AS 34.03.060, 34.03.070, 34.03.120(a)(8) and (c), 34.03.140, 34.03.150, 34.03.220, 34.03.230(c), 09.45.090 (including (c), three days added for mail) and 09.45.100(c) against `default-by-tenant-ak`, `security-deposit-use-ak`, `security-deposit-return-ak`, `extended-absence-notice-ak`, `no-sublet-assign-ak`, `lock-change-ak`, `owner-recovery-ak`, `carpet-cleaning-ak` and the AK tag on `landlords-access-mi`: the clauses match.
- **Clause change (every-reading rule, SOP Part 5):** `early-termination-ak` already used a flat fee the landlord states; it now also says a Tenant who gives the notice, pays the fee and delivers possession owes no Rent after the termination date, and that a Tenant who leaves without the option is left to Alaska law (AS 34.03.230(c)), as in `early-termination-ct`, `-ri`, `-vt` and `-de`.
- **Section pointers:** the tagged `surrender-end-of-term-ks-ne` and `tenant-death-contact-nh` point to "Handling of Property Left Behind"; `abandoned-property-ak` was titled "Handling of Property Left Behind (Alaska)", so it now carries the plain title the other states' versions use.
- **Same-topic pairs:** the state filter showed two pairs; `carpet-cleaning-ak` is now keyed `carpet-cleaning` and `arbitration-agreement-ak` `binding-arbitration`, each with a topic question. No pairs remain and no other state's view changed.
- **Open items (§7) read at sync:** the effective dates the log couldn't find: HB 13 (ch. 25, SLA 2026) became law without signature on June 22, 2026 and took effect September 20, 2026; SB 86 (ch. 48, SLA 2026) became law without signature on June 30, 2026, effective under the 90-day rule (akleg.gov bill status pages); notes added to `edu-rent-tax-ak` and `edu-deposit-escheat-ak`. The other items are boundaries the rows already state (case law, federal law, municipal codes, the Administrative Register, AS 08.24); no row waits on them.
- **NEEDS_REVIEW:** none; all active Alaska rows are VERIFIED, and every topic has an Alaska row.
- **Corpus notes for the next staging:** Claude Code's README said 72 forms (the zip holds 70) and that no official handbook was found; the pass found the Department of Law's 2024 handbook at law.alaska.gov. Both are corrected for the next state's crawler (backlog).
- **Citations file:** `lease-clause-citations-AK.csv`, 399 rows (198 CITED, 199 CONFIRMED_ABSENT, 2 GENERIC: shared rows whose AK note cites no section); every AS and AAC citation resolves to the corpus except the three this log explains (the "3 AAC 30.990" misprint, repealed AS 34.06.020 cited by 3 AAC 90, and "former AS 25.35.020", quoted from AS 11.46.350(a)(3)) and the uncompiled AS 44.21.022.
- **Legal watch:** `legal-watch-ak.yml`, held until after July 18, 2028 (first run August 18, 2028, day 18 at 14:00 UTC); 670 sections keyed by bare number (`34.03.070`), queried as `"AS 34.03.070"`; manual items for the uncompiled 2026 laws and for the regulations, court rules, forms and handbook.
- **SOP 1.74:** all six proposals adopted. Nine topic questions added (seven from this log, two for the re-keyed companions); `carpet-cleaning` and `binding-arbitration` are new topics (356). No new `{{variables}}`.
