# Lease clause decision log — Vermont (VT, state #44)
- **Pass:** staged 2026-10-15 22:39 (kickoff); run 2026-10-15 to 2026-10-16 in one chat (Vermont's only Desktop chat, rule 8; no earlier output files existed, so none were deleted). SOP v1.71.
- **Settings:** Opus, high effort. Research mode was **not** turned on. The rule 9 triggers were met inside the pass instead: proof of absence and cross-chapter gap search by 634 logged batteries over the full hash-verified corpus (§1.5), and the one ambiguous statute phrase (9 V.S.A. § 4468b, "lighted cannabis or cannabis products intended for inhalation") by a section-open reading with the parallel amendment to 18 V.S.A. § 4230a checked on the enacted PDF (§6.3). The 2025-26 acts were all read in their enacted PDFs; no case law was searched anywhere.
- **Files Taylor uploaded for this task are the only source of truth** (rule 8): `KICKOFF-PROMPT.md`, `lease-clause-sop.md` (v1.71), `lease-clause-topics.md`, `lease-clauses.csv` (5,900 rows), `log-format-example.md`, `corpus-VT-20261015.zip` and its `.sha256`.
- **Deliverables:** `lease-clauses-VT-delta.csv` (416 rows, all 17 columns) and this log.

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A: file check (5,900 rows; 5,788 active; 1,054 clauses / 4,734 education; 43 per-state counts) | Done, all match | §1.1 |
| Source registry, channel, corpus hash and completeness, live match | Done | §1.1 |
| Currency (2025 compiled; 2026 acts read) | Done | §1.2 |
| Tag-first screen of every active clause (rule 26) | Done | §2 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Topic canvass, all 350 topics (rules 27, 36) | Done | §18 |
| Step D screens (rules 40-53) | Done | §11 |
| Optional clauses (rule 54) | Done | §6.1 |
| Dormant row (rule 25) | Done | §5 |
| Integrity checks | Done, all pass | §8 |
| Independent check (rule 80), 3 rounds | Done | §13 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **First request with my own tools** (kickoff): the shell's request to legislature.vermont.gov was refused at the proxy (`CONNECT tunnel failed, response 403`). WebFetch of `statutes/section/09/137/04467` returned only a model summary, not the page text. Neither is a usable channel.
- **Channel used: Claude Code's corpus** `corpus-VT-20261015.zip` (SHA-256 a60c6a655cc7599ba5e0f52bc10910281a02147eeec9122476831e7e713a3bf6, matching the `.sha256` file and the kickoff). Unzipped into its own folder; no corpus script was run.
- **Hash check:** my own script re-hashed every file against `manifest.jsonl`: 4,007 requests, all HTTP 200, 0 missing, 0 mismatches, 0 files on disk outside the manifest.
- **Completeness (rule 19), proved with my own parser:** 46 titles on the site's title index; 1,697 chapters on the title pages, each with its chapter page and full-text page; 26,486 sections listed on the chapter pages. Every listed section was found in the parsed text: by number (ranges expanded, em-dash labels in Title 9A normalized, charter labels "App. § C-N" matched to "§ N"), on its own section page, or by text (34 residual labels: 32 revoked Title 3 executive orders printed as plain paragraphs, the repealed range "§§ 6501-6952" printed as "6501-6592", and "App. § 5-404, 405. Repealed."). The parser was proved before any battery ran.
- **Constitution:** saved page headed "AMENDED THROUGH MARCH 31, 2021", but its text carries the 2022 amendments (ch. I, art. 1's slavery and indentured-servitude language; art. 22). Parsed into 98 provisions: ch. I arts. 1-22 and ch. II §§ 1-76, proved sequential. Loaded into the battery index before the outside-title batteries.
- **Live match (rule 24), approved by Taylor (§6.2 Q1):** six sections fetched through the built-in browser (same-origin fetch of `statutes/section/09/137/<S>`) and compared by SHA-256 of normalized text (U+FEFF/U+00A0 as space, whitespace collapsed, lowercased) with the corpus full-chapter block: 9 V.S.A. §§ 4451, 4455, 4456a, 4460, 4461, 4467: **all six match.**
- **Fetched outside the zip** (for the next state's zip, rule 24): the Burlington Housing Authority "Model Lease" PDF (`burlingtonhousing.org/uploads/files/1567782113_Model_Lease.pdf`, PDF SHA-256 6edf6b87035d8a4ede317297035a162d79a27b9bfd5c78f885c5782e4d02f5ea), read with pdf.js in the browser; saved text matches the browser extraction (normalized SHA-256 83cf9d536aedca78a7cf38a805988d1e2806ab2e82d1e923658f861f717b9cfe, 24,947 characters). The zip's README listed "official model lease: none found"; no other outside fetch was made.
- **Not available** (README; recorded as a search boundary, rule 19): Vermont Rules of Civil Procedure and other court rules, and the Code of Vermont Rules other than the rental housing code (all LexisNexis-only, CAPTCHA-gated). The Attorney General's consumer rule list (CP 100-121) was seen as a fetch-tool summary of ago.vermont.gov: none on rental housing (lead only, not a read).
- **Official text status:** the site says "The Vermont Statutes Online is an unofficial copy of the Vermont Statutes Annotated"; the annotated official edition is LexisNexis-only. The legislature's text is treated as primary, as for other states.

### §1.2 Currency and dated versions (rule 16)
- **Currency statement** (every statutes page): "The Statutes below include the actions of the 2025 session of the General Assembly." The 2026 session is not compiled. All 179 acts of 2025-26 (Nos. 1-73 of 2025, 74-179 of 2026) were extracted from the enacted PDFs and screened in full text (battery VT-ACT-01, 43 acts with landlord-tenant vocabulary, each read in context), and the legislature's "Acts Affecting VSA Sections" table (2,705 lines) was filtered for titles 7, 9, 10, 12, 18, 20, 24, 27, 27A, 30 and 32.
- **2026 acts that change landlord-tenant law** (strike-through checked on rendered page images, since pdftotext drops it):
  - 2026 Vt. Acts & Resolves No. 176, § 30: new 9 V.S.A. § 4468b (cannabis), effective July 1, 2026 (§ 32(e)); § 31 narrows 18 V.S.A. § 4230a(b)(2)(E) (page 27 checked). Compiled number pending.
  - 2026 Vt. Acts & Resolves No. 149, § 2: new 30 V.S.A. § 256 (plug-in solar), (g) tenant notice and landlord restrictions; § 4 amends 27 V.S.A. § 544(c); effective July 1, 2026 (§ 6). Compiled number pending.
  - 2026 Vt. Acts & Resolves No. 103, §§ 3-4: amends 9 V.S.A. § 4452(b) (recovery residences) and strikes the July 1, 2026 repeal of § 4452(b) in 2024 Vt. Acts & Resolves No. 163, § 5(a) (page 6 checked: the repeal is struck and "[Repealed.]" substituted). **The compiled site still prints "(b) [Repealed.]" effective July 1, 2026; that is stale** (§10).
  - 2026 Vt. Acts & Resolves No. 165, §§ 40d-40g: tenant representation pilot made statewide; § 4555 HRC files. No lease content.
  - 2026 Vt. Acts & Resolves No. 168, §§ 31-32: 27A V.S.A. § 1-204(a)(3) and new § 3-125 (EV charging in common interest communities), effective July 1, 2026.
  - 2026 Vt. Acts & Resolves No. 162, § 8: open-burning permit exceptions in 10 V.S.A. § 2645 replaced by "Category 1" fires (found by the independent check, §13).
  - Others read and found to carry no lease rule: Nos. 116 (repeals the lead annual report, 18 V.S.A. § 1756), 179 (studies; ADU and duplex zoning), 164 and 170 (property tax), 145 (data privacy from January 1, 2028), 88 (Adjutant General rename).
- **2025 acts, compiled:** 2025 Vt. Acts & Resolves No. 69, § 10 (9 V.S.A. § 4456a, effective July 1, 2025) and §§ 11-13 (§§ 4501-4503); No. 13, § 1 (12 V.S.A. § 4854, effective May 5, 2025); No. 18 (technical corrections). Compiled text matches.
- **Lead terminology:** the kickoff's "essential maintenance practices" is the pre-2022 name; since 2018 Vt. Acts & Resolves No. 149, § 2 (effective October 21, 2022) the statute uses RRPM.

### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- Constitution loaded and proved (§1.1); batteries VT-SRC4-CONST-01b to -06 (§17).
- Court rules: not reachable (LexisNexis). Eviction timing is statutory in the rows (12 V.S.A. ch. 169); V.R.C.P. references are flagged as unread (rule 21).
- Agency rules: the Division of Fire Safety's Residential Rental Housing Health & Safety Code (effective December 31, 2023) is in the corpus and was read whole; it is cited as `Vt. Residential Rental Housing Health & Safety Code § [section]` and flagged as an agency rule for monitoring. The Fire and Building Safety Code, Department of Health rules (lead, asbestos), Public Utility Commission rules (disconnection, submetering) and Real Estate Commission rules were not reachable; 13 rows stay NEEDS_REVIEW for that reason alone (§7).

### §1.4 Agents and usage
- **Triage of single-state clauses:** two helpers (slices A and B, 272 clauses each), briefed with the Vermont law brief (`VT-BRIEF`), whose quoted statute wording was checked against the corpus by script before sending (rule 27). A scratch-script collision between the helpers was caught by helper A; both answer files were proved to cover exactly their own slice (no foreign, missing or duplicate ids).
- **Topic canvass:** four slices (C1-C4, 88/88/88/86 topics), at most two agents at a time, each saving one JSON line per topic (rule 27); an addendum of cross-cutting findings went to C3-C4.
- **Real-lease finder:** one web-only helper (no files).
- **Scenario screen:** one helper (168 scenarios).
- **Independent check:** three rounds, one agent at a time (§13).

### §1.5 Batteries (rule 19)
634 battery runs, all logged before any hit was read (`batteries.jsonl`), every one over an index labelled (generated from the loaded index) "ACT 179 ; CONST 98 ; FORM 1 ; RULE 1 ; VSA 26653 ; total 26932".
- **Controls:** each run carries a nonsense control (0 hits in every run) and a "General Assembly|Legislature" control generated in the same call.
- **Engine proof:** VT-ENG-01 matched a body-only phrase of 9 V.S.A. § 4451(1) (the index holds section bodies, not just headings).
- **Positives:** 41 runs recorded a failed positive and 245 ran with none (mostly exploratory or locating runs). The tool refuses a positive whose text isn't in the named section and refuses a reused name. Every row that cites a battery whose positive failed or was absent says so ("not relied on alone", or "superseded by -NN"); the absence rows rest on runs whose real positive passed.
- **By family:** C1 177, C2 161, C3 145, C4 107, scenario 11, locating 9, formatting 9, outside-title constitution 6, checker 6, engine 2, acts 1.

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,054 active clauses. The 81 shared or blank-states clauses were read one by one in the main pass; the 973 single-state clauses were triaged (§2.3).
- **Result:** Vermont is tagged on 55 existing rows: 49 shared clauses, 5 single-state clauses and the federal education row `edu-cares-act-notice` (kickoff). Each tag note opens "VT: Tagged as written (tag-first screen, rules 26-28, VT log §2.1; sections cited were read section-open)" and gives the reason; it is appended after the other states' notes, which the assembler proves are an unchanged prefix.

### §2.1 Tagged VT as written (55)
`acceptable-payment-methods`, `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `assistance-animal-accommodation`, `default-by-tenant`, `due-at-signing`, `electronic-notice-ma`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `extended-absence-notice-ks`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance-nd`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `permitted-occupants`, `pet-insurance-requirement`, `pet-policy-or`, `possession-delay`, `rent-concession-wi`, `rent-installments-or`, `rent-payment`, `residential-use-only`, `returned-payments-ky`, `rules-wi`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `surrender-end-of-term-nh`, `tenant-death-contact-nh`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility-ky`, `utility-payment-evidence`, `utility-service-continuity`, `edu-cares-act-notice`.
- **Fee screens (kickoff, rule 26):** Vermont's only upfront-fee rule is the total application-fee ban (9 V.S.A. § 4456a(a)); there is no closed list of fees and no payment-method rule. `keys` (re-key charge) and `hoa-compliance` (association fines) are lawful; the DV lock rule leaves lock costs on the protected tenant "Unless otherwise agreed" (§ 4473(5)), so `keys` doesn't conflict. Because every charge payable to the landlord is "rent" (§ 4451(7)), the tag notes on `late-fee`, `returned-payments-ky`, `assigned-parking-space` and `hoa-compliance` tell landlords to set charges at signing; a new charge mid-tenancy needs 60 days' actual notice (§ 4455(b)).
- **Cannabis screen (kickoff lead 2):** `smoking-policy` bans smoking (including marijuana) and vaping only, which § 4468b allows; tagged with the reading in §6.3. `residential-use-only` doesn't reach possession. `criminal-activity-ky` was not tagged (its "possession of a controlled substance" could be read federally); `criminal-activity-vt` carves lawful cannabis out.

### §2.2 Clauses read in the main pass and not tagged (32), with reasons
- **Class decision (rule 26, rule 52): "Landlord is not liable" disclaimers.** Vermont has no statute voiding exculpatory lease terms (canvass `edu-no-exculpatory-clause-statute-vt`); the limits are §§ 4454 and 4457(b). Vermont takes the no-disclaimer variants, so `parking`, `storage-space`, `tenants-property-insurance` and `services-utilities-provided` are not tagged (one curated answer, rule 6).
- `landlords-access`: 24 hours, "normal business hours" and a general emergency exception; Vermont requires 48 hours, 9 A.M.-9 P.M. and imminent danger (§ 4460). Override `landlords-access-vt`. `landlords-access-mi`: same timing problem.
- `security-deposit-use`: uses beyond the four § 4461(b) grounds and no "beyond the control of the tenant" exception. Override `security-deposit-use-vt`.
- `security-deposit-return` (blank states): replaced for Vermont by `security-deposit-return-vt` (RECOMMENDED from Vermont's own statute, rule 56).
- `common-area-use`: blocks a plug-in solar device and a protected tenant's security measures. Override `common-area-use-vt`.
- `rental-application-accuracy`: sealed and expunged records. Override `rental-application-accuracy-vt`.
- `parking-vehicle-rules`: towing for expired registration hides a conflict with 23 V.S.A. §§ 2151-2152 (only vehicles left without consent). Override `parking-vehicle-rules-vt`. `parking-vehicle-rules-id`: booting has no Vermont basis.
- `holdover`: "maximum amount permitted by applicable law" has no Vermont measure. `holdover-ca`: its "acceptance of Rent continues the lease" sentence would give away 9 V.S.A. § 4467(j)(1) after a non-rent termination (scenario screen). Override `holdover-vt`.
- `early-termination` (base, CO family) and `early-termination-ks`: landlord termination when the tenant "vacates ... without notifying" goes beyond § 4462(a) (scenario screen). Override `early-termination-vt`.
- `surrender-end-of-term`, `-ks-ne`, `-mn-nd`: "Upon the expiration ... Tenant will surrender" isn't true for a written Vermont lease without § 4467(e) notice; `surrender-end-of-term-nh` tagged instead.
- `pet-policy`: landlord entry and pet removal conflict with §§ 4460, 4463(c); `pet-policy-or` tagged instead.
- `returned-payments`: "maximum amount permitted by applicable law" has no Vermont figure; `returned-payments-ky` tagged.
- `utilities-responsibility`: puts unlisted utilities, including trash removal, on the tenant against § 4457(c) and Rental Housing Health & Safety Code §§ 5.5.2.1, 12.1.3; `utilities-responsibility-ky` tagged.
- `landlord-maintenance`: a voluntary repair promise becomes a § 4459 "material provision" trigger (rule 44); `landlord-maintenance-nd` tagged.
- `rules-ia`: its standards come from a uniform-act rule statute Vermont doesn't have; `rules-wi` tagged.
- `default-by-tenant-co`, `default-by-tenant-ks-ne`: state variants; the shared `default-by-tenant` fits Vermont.
- `late-fee-ne`, `possession-delay-ca`, `acceptable-payment-methods-nj`: state-specific variants; the base clauses fit.
- `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`: rest on Colorado and Illinois statutes; Vermont's EV law reaches common interest communities, not leases.
- `utility-allowance-cap-co`: depends on Public Utility Commission resale rules not in the corpus (canvass `edu-utility-allowance-vt`, Not located).

### §2.3 Single-state clauses (rule 26 triage)
- 973 single-state clauses. 429 name another state in title or body: not taggable as written.
- 544 read in full by the two helpers (including 82 that carry a citation): RESTS_ON_OWN_STATE 393, CONFLICT 81, NEEDS_VT_VERSION 30, NEEDS_MAIN_PASS 26, TAGGABLE 14.
- **The 14 TAGGABLE verdicts were each re-read by the main pass with their basis and notes (rule 26):** tagged on Vermont's own law: `pet-policy-or`, `surrender-end-of-term-nh`, `landlord-maintenance-nd`, `rules-wi`, `utilities-responsibility-ky`. Not tagged, Vermont row written instead: `criminal-activity-ky` (cannabis reading) → `criminal-activity-vt`; `tenant-caused-damage-in`, `-mn`, `-nm`, `-tn`, `-wy` (their fault wording reaches persons outside Vermont's statutory exception) → `tenant-caused-damage-vt`; `habitability-baseline-mn` (duplicate of the ND row); `tenant-death-contact-mt` (duplicate of the tagged NH row); `utilities-responsibility-wv` (duplicate of the KY row).
- The CONFLICT and NEEDS_VT_VERSION verdicts fed the Vermont rows (entry, deposits, abandonment, auto-renewal, notice periods, rent increases, sublets, criminal activity); the NEEDS_MAIN_PASS questions are answered in §6.

## §3 New rows (rule_type, basis, citation)
### §3.1 VT lease clauses (23)
`lease_clause_basis`: SERVES_LANDLORD 16, CONSTRAINED_TERM 5, REQUIRED_DISCLOSURE 2. Eight are overrides (`supersedes` set; each note says "Overrides `id`", or "Replaces" for the blank parent). Twelve are optional ("[Optional.]").
| Row | rule_type | basis | topic_key | supersedes | key citations |
|---|---|---|---|---|---|
| `landlords-access-vt` | CONSTRAINED | CONSTRAINED_TERM | landlord-entry | landlords-access | 9 V.S.A. § 4460(a)-(c) |
| `security-deposit-use-vt` | CONSTRAINED | CONSTRAINED_TERM | security-deposit-use | security-deposit-use | § 4461(a)-(b) |
| `security-deposit-return-vt` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | security-deposit-return | § 4461(c)-(e) |
| `common-area-use-vt` | RECOMMENDED | SERVES_LANDLORD | common-area-use | common-area-use | 30 V.S.A. § 256(g); 9 V.S.A. § 4473 |
| `rental-application-accuracy-vt` | RECOMMENDED | SERVES_LANDLORD | rental-application-accuracy | rental-application-accuracy | 13 V.S.A. §§ 7606(b), 7607(b) |
| `parking-vehicle-rules-vt` | RECOMMENDED | SERVES_LANDLORD | parking-vehicle-rules | parking-vehicle-rules | 23 V.S.A. §§ 2151-2152 |
| `holdover-vt` | RECOMMENDED | SERVES_LANDLORD | holdover | holdover | 9 V.S.A. §§ 4467(j), 4468 |
| `early-termination-vt` | RECOMMENDED | SERVES_LANDLORD | early-termination | early-termination | §§ 4462(a)-(b), 4472 |
| `abandoned-property-vt` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | | § 4462(a), (c)-(d); 12 V.S.A. § 4854a |
| `flood-disclosure-vt` [separate document] | REQUIRED | REQUIRED_DISCLOSURE | flood-disclosure | | 9 V.S.A. § 4466 |
| `lead-rrpm-disclosure-vt` | CONDITIONAL | REQUIRED_DISCLOSURE | lead-state-notices | | 18 V.S.A. §§ 1751, 1759(c)-(e) |
| `criminal-activity-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | criminal-activity | | 9 V.S.A. §§ 4467(b)(2), 4468b, 4503 |
| `tenant-caused-damage-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage | | §§ 4456(c), 4458(b), 4459(b), 4472 |
| `holdover-rate-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | holdover-rate | | § 4468; 12 V.S.A. §§ 4773, 4924 |
| `sublessee-notice-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | sublet-assign | | 9 V.S.A. § 4456b |
| `auto-renewal-vt` (opt.) | CONDITIONAL | CONSTRAINED_TERM | automatic-renewal | | 9 V.S.A. §§ 2451a(2), 2453(e), 2454a |
| `casualty-termination-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | casualty-termination | | §§ 4454, 4457(b), 4458 |
| `midterm-rent-increase-vt` (opt.) | CONDITIONAL | CONSTRAINED_TERM | rent-escalation | | §§ 4455(b), 4465 |
| `plug-in-solar-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | portable-solar | | 30 V.S.A. § 256(a), (g) |
| `energy-data-release-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | energy-data-release (new) | | 30 V.S.A. § 63(a)(2) |
| `pest-cooperation-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | bed-bug-cooperation | | Rental Housing Health & Safety Code §§ 6.1-6.2, 12.1.3 |
| `tenant-notice-period-vt` (opt.) | CONDITIONAL | SERVES_LANDLORD | termination-notice | | 9 V.S.A. § 4456(d) |
| `unpaid-damages-interest-vt` (opt.) | CONDITIONAL | CONSTRAINED_TERM | unpaid-damages-interest | | 9 V.S.A. § 41a(a) |

### §3.2 VT education rows (338)
- From the canvass 328, the six absence rows the canvass left without a row keyed to their topic (`edu-no-nonrefundable-deposit-notice-vt`, `edu-no-parking-rules-notice-vt`, `edu-no-pet-fact-sheet-vt`, `edu-no-plain-language-statement-vt`, `edu-no-small-landlord-exemption-notice-vt`, `edu-no-casualty-mitigation-waiver-rule-vt`), and four from the scenario screen (`edu-month-to-month-after-lease-vt`, `edu-no-co-tenant-deposit-rule-vt`, `edu-farm-employee-housing-vt`, `edu-recovery-residences-vt`).
- **Answers:** Present 154, Confirmed absent 176, Not located 8.
- **Status:** VERIFIED 325, NEEDS_REVIEW 13 (each waits only on an agency or court rule the pass couldn't reach, §7).
- **rule_type:** RECOMMENDED 149, CONDITIONAL 63, CONSTRAINED 42, REQUIRED 32, PROHIBITED 22, REQUIRED/CONDITIONAL 15, PROHIBITED/CONDITIONAL 8, and 7 other combinations of one row each.
- Four canvass ids were renamed to the `edu-no-` form because their answer is a confirmed absence: `edu-no-casualty-statute-vt`, `edu-no-condemned-premises-rent-bar-vt`, `edu-no-dv-deposit-timing-rule-vt`, `edu-no-early-termination-statute-vt`; pointers were rewritten by script. The two `confirmed-absences-*` list rows keep their names (one item in each is present).
- Each row's notes quote the statute in single quotes next to its citation, record "read section-open (corpus ...)" and cite batteries by name with hits and positive status generated from the log.

### §3.3 Shared rows changed
- 55 existing rows changed only in three fields: `states` (";VT" appended), `notes` (VT segment appended) and `last_checked` (2026-10-15). Checked by script: no other field changed, and each row's old notes are an unchanged prefix (§8).
- The dormant `landlords-access-vt` is rewritten in place (§5).

## §4 Layout and placement table (rule 40)
**Batteries:** VT-F1-TYPESIZE, -BOLD, -UNDERLINE, -CAPITALS, -CONSPIC, -SEPDOC, -FORM, -PLAIN, -SIGNPLACE, all over the whole index with no tenancy limb, run as soon as the corpus was loaded and before drafting (known positives passed where a real one exists). Hits near tenancy vocabulary were read section-open.
| Rule | Where | Applies to residential leases? | Library handling |
|---|---|---|---|
| Auto-renewal terms "clearly and conspicuously ... in plain, unambiguous language in bold-face type", with a separate opt-in | 9 V.S.A. § 2454a(a)(1)-(2) | Yes, for an initial term of one year or longer that renews for more than one month | `auto-renewal-vt`: whole section printed in **bold face** (REQUIRED format) with an initialled opt-in line |
| Flood disclosure "in a separate written document substantially in the form prescribed" | 9 V.S.A. § 4466(a) | Yes, every rental, at or before signing | `flood-disclosure-vt` is a separate document, never lease text (rule 48) |
| Lead materials and RRPM statement "Prior to entering into a lease agreement" | 18 V.S.A. § 1759(d)(1) | Rental target housing | Delivered before signing; `lead-rrpm-disclosure-vt` is an acknowledgment (rule 78) |
| Tenant summons notice "written in at least 14-point type" | 12 V.S.A. § 4932(c)(2) | Foreclosing plaintiff's papers, not the lease | Education only |
| Farm-housing termination notice statements "in boldface print" | 9 V.S.A. § 4469a(c) | Farm-employee housing only (outside default scope) | `edu-farm-employee-housing-vt` |
| Type-size, bold or conspicuous rules for agricultural finance leases, rent-to-own merchandise, self-storage, credit-card-terminal finance leases, mobile-home park leases, short-term-rental postings | 9 V.S.A. §§ 2382, 41b, 3903, 2482i; 10 V.S.A. § 6236; 20 V.S.A. § 2678 | No (not residential dwelling leases, or outside scope) | None |
No type-size, underlining, capitals or signature-placement rule reaches a residential lease, and no two rules claim the same place, so no order question arose for Taylor.

## §5 Dormant rows resolved (rule 25)
- `landlords-access-vt` (dormant, LEASE_CLAUSE, UNVERIFIED): verified against 9 V.S.A. § 4460 (live-site hash match 2026-10-15). It is **rewritten and activated** with the same id as Vermont's entry clause (CONSTRAINED, CONSTRAINED_TERM), overriding `landlords-access`.

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Each is offered as optional ("[Optional.]" or a use note), never as a default.
| Clause | Verdict | Why |
|---|---|---|
| Attorney's fees in ejectment | Offered through the tagged `default-by-tenant` | The court may award fees "when a written rental agreement so provides" (12 V.S.A. § 4854); the shared mutual sentence is that written term |
| Holdover charge | Offered: `holdover-rate-vt` | No statutory measure (§ 4468); nonpayment terminations excluded (§ 4467(a); 12 V.S.A. § 4773); no multiplier reaches a written-lease holdover (12 V.S.A. § 4924) |
| Casualty termination | Offered: `casualty-termination-vt` | No casualty statute; habitability remedies preserved |
| Tenant-caused damage (54t) | Offered: `tenant-caused-damage-vt` | Every abatement or exit route has the "tenant or a person on the premises with the tenant's consent" fault exception (§§ 4458(b), 4459(b)) except the protected-tenant exit, preserved by name |
| Criminal activity | Offered: `criminal-activity-vt` | § 4467(b)(2) 14-day notice; cannabis and victim carve-outs |
| Sublessee name and contact notice | Offered: `sublessee-notice-vt` | Lease-invoked right, § 4456b(a)(1) |
| Automatic renewal | Offered: `auto-renewal-vt` | Lawful only on § 2454a's terms |
| Mid-term rent increase | Offered: `midterm-rent-increase-vt` | § 4455(b) 60 days' actual notice; Taylor's IN pattern (tenant exit; landlord cap as a bracket) |
| Plug-in solar restrictions | Offered: `plug-in-solar-vt` | § 256(g) "reasonable restrictions" |
| Energy data release | Offered: `energy-data-release-vt` | "clause in a lease", 30 V.S.A. § 63(a)(2) |
| Pest cooperation | Offered: `pest-cooperation-vt` | Restates occupant duties; owner triggers kept (§ 12.1.3) |
| Tenant's notice period | Offered: `tenant-notice-period-vt` | § 4456(d) "Unless inconsistent with a written rental agreement" |
| Interest on unpaid damages | Offered: `unpaid-damages-interest-vt` | Legal rate 12% (§ 41a(a)); rent excluded |
| Cannabis smoking/vaping ban | Offered through the tagged `smoking-policy` | § 4468b exception |
| Cannabis cultivation ban | Not offered | Whether a growing ban prohibits "possessing cannabis" under § 4468b is unsettled (cannabis includes the plant); `edu-cannabis-vt` says so |
| Statutory waivers (notice to quit, jury, exemptions, confession of judgment) | Not offered | § 4454 voids terms circumventing ch. 137 remedies; confessions of judgment are void (9 V.S.A. § 2456); a jury waiver is presumptively unconscionable in a business landlord's form lease (§ 6055(a)(2)); no exemption-waiver statute (`edu-no-exemption-waiver-vt`, `edu-notice-to-quit-waiver-vt`) |
| Eviction or notice-service fee | Not offered | No statute; fees reach the tenant only as court-awarded attorney's fees (`edu-no-notice-service-fee-rule-vt`) |
| Landlord self-cure charge | Not offered as a clause | No statute (`edu-no-landlord-self-cure-vt`); tenant damage is covered by § 4456(e) |
| Owner move-in mid-term termination | Not offered | § 4467(e) ties no-cause termination of a written lease to the end of its term; a mid-term right is doubtful under § 4454 (canvass `owner-move-in-reservation`) |

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (asked with AskUserQuestion at Step A, recommendation "Yes"). Taylor chose "Yes (Recommended)". That approved the six-section live match and fetching sources the zip's README lists as missing, if the pass needs them; the only such fetch was the Burlington Housing Authority model lease (README: "official model lease: none found").
No other question was needed: every remaining call was a legal or drafting judgment (§6.3) under rule 76.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Cannabis, § 4468b:** "the use of lighted cannabis or cannabis products intended for inhalation" is read as two items, lighted cannabis and inhaled products, so vaping may be banned. Read the other way, "lighted" would make "intended for inhalation" surplus; the parallel amendment to 18 V.S.A. § 4230a(b)(2)(E) uses the same words. No case law exists yet. `smoking-policy` is tagged on that reading.
- **Cultivation:** not offered (§6.1); a cultivation ban could be a ban on possessing plants.
- **Fees are rent (§ 4451(7)):** whether an unpaid fee alone supports a 14-day nonpayment notice is unsettled (§ 4461(b) lists rent and "other charges" separately). Rows tell landlords not to rest a nonpayment notice on fees alone; `default-by-tenant` already gives up termination for an unpaid late fee alone.
- **Deposit retention list (§ 4461(b))** read as closed; cleaning recoverable only as damage beyond normal wear and tear.
- **Written lease at the end of its term:** a written Vermont lease doesn't end possession by itself; the no-cause notice of § 4467(e) is needed. Which notice applies to a month-to-month continuation of a written lease (§ 4467(c) or (e)) is open; `edu-month-to-month-after-lease-vt` gives the course that satisfies both (60/90 days) and is VERIFIED because only case law could settle it (SOP Part 5).
- **§ 2454a reaches residential leases:** "goods" or "services" include "real estate" (§ 2451a(2)) and § 2453 applies to real estate transactions (§ 2453(e)); `auto-renewal-vt` complies either way.
- **Disclaimers:** no-disclaimer variants used (§2.2) without deciding whether Vermont voids exculpatory terms.
- **Plug-in solar:** standing restrictions in `plug-in-solar-vt` apply "unless Landlord's response states otherwise", and the clause keeps the landlord's duty to answer each 10-day notice.
- **Casualty termination:** the 30-day floor for a landlord's notice borrows the § 4467(b)(1) breach period as a reasonable minimum (a drafting figure, not statutory).
- **Separate documents:** the flood form reproduces the Department's form content (government form) without letterhead.
- **Interest clause:** damages for breach treated as outside "rent" (§ 4451(7) "consideration ... under the rental agreement").

## §7 Open items, each with its search boundary
1. **13 NEEDS_REVIEW education rows wait on agency or court rules that are LexisNexis-only:** `edu-smoke-co-alarms-vt` and `edu-grills-fire-safety-vt`, `edu-sprinkler-requirements-vt`, `edu-code-editions-vt` (Fire and Building Safety Code); `edu-asbestos-work-vt` (Department of Health asbestos rules); `edu-pest-control-notice-vt` (pesticide rules); `edu-environmental-restrictions-vt` (Agency of Natural Resources cleanup rule); `edu-no-electric-submetering-rule-vt`, `edu-utility-allowance-vt`, `edu-utility-submetering-vt`, `edu-utility-notice-authorization-vt` (Public Utility Commission rules); `edu-entity-landlord-representation-vt`, `edu-no-eviction-record-sealing-vt` (court rules). Boundary: whole statute corpus searched (batteries cited on each row); the rules themselves not read. These are the only rows a sync can't close from the corpus.
2. **Case law:** none searched anywhere; rows that turn on it say so (penalty doctrine for fees, exculpatory terms, rule-change by notice, contractual casualty termination, § 4467(c)/(e) for month-to-month).
3. **Municipal ordinances:** flagged, not resolved (§10).

## §8 Integrity checks on the delta
Run by script on the final delta (`checks.json`, `quotecheck.json`, `citecheck.json`); every structural check passes.
| Check | Result | Detail |
|---|---|---|
| Header equals the master's 17 columns | Pass | |
| Duplicate ids | 0 | 416 rows (361 Vermont-only: 338 education, 23 clauses; 55 tagged existing rows) |
| Dangling `supersedes` | 0 | |
| Blank `verification_status` | 0 | |
| Groups in the allowed list (education-only groups not on clauses) | Pass | |
| `rule_type` values | Pass | |
| Shared rows: only states, notes (prefix unchanged), last_checked changed | Pass | 55 rows |
| "Overrides `x`" note equals `supersedes` | Pass | |
| `edu-no-` id iff "Confirmed absent" | Pass | list rows excepted |
| Every topic in the library has a VT row keyed to it | Pass | 350 of 350, plus 1 new topic `energy-data-release` |
| Bracket next to a `{{variable}}` | 0 | |
| VT clauses with a basis | 23 of 23 | |
| VT rows whose notes record a read basis | 361 of 361 VT-only rows; every tag note records its own | 0 rows without a basis; 0 shared rows tagged VT without a VT segment |
| Backticked ids in VT text point at active rows or topics | Pass | |
| Quote checker (rule 59): single-quoted passages found word for word, anchored on their own citation | 711 of 870 in the cited section; 156 found elsewhere in the corpus, reviewed (resolver limits: quotes inside a citation run, "RRHHS Code 12.1.1" form, uncompiled 2026 sections) | 3 verified by eye: two copies of the amended 18 V.S.A. § 4230a(b)(2)(E) wording ('banning use of lighted cannabis or cannabis products intended for inhalation in a lease agreement'), which the act text prints with the struck "possession or" (page 27 image checked); and 24 V.S.A. § 4412(15) in 2026 Act 179, whose PDF text breaks "owner- occupied" across a line |
| Session-law citation form (rule 22) | Normalized by script to `YYYY Vt. Acts & Resolves No. N, § S`, outside quotes only | 143 changes listed (`citefmt_log.json`); "(Adj. Sess.)" acts converted to the following year as the enacted acts themselves do |
| Bare section cites that switched titles (rule 22) | Expanded by script outside quotes, preferring chapter 137/139 and 12 V.S.A. ch. 169 | 100 expansions listed and reviewed (`expandcite_log.json`); 3 more fixed by hand; one wrong expansion ("Burlington charter § 48") caught and reverted |
| Section-existence screen | Every cited section exists, except uncompiled 2026 sections (9 V.S.A. § 4468b, 30 V.S.A. § 256, 27A V.S.A. § 3-125, 9 V.S.A. §§ 2415a-2415b) and chapter ranges | |
| Pointer check on ids this log names | Pass | every backticked id here is in the master or the delta, or is named as not tagged |
| `{{variables}}` used in VT rows | 5 names (`landlord_name`, `monthly_rent`, `property_address`, `security_deposit`, `holdover_daily_rate`); one not in the kickoff's builder list: `{{holdover_daily_rate}}` (§10) | |

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 55 tagged rows changed only in `states`, a VT note segment and `last_checked`. No propagation note is owed to any other state's log.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
1. **Stale compilation (legal watch):** the site's 9 V.S.A. § 4452 shows "(b) [Repealed.]" effective July 1, 2026, but 2026 Vt. Acts & Resolves No. 103, § 4 struck that repeal and § 3 amended (b). Uncompiled 2026 sections the rows cite: 9 V.S.A. § 4468b, 30 V.S.A. § 256, 27A V.S.A. § 3-125; watch for compiled numbers.
2. **Legal-watch dates:** July 1, 2026 (cannabis, plug-in solar, recovery residences, EV charging in CICs); January 1, 2028 (2026 Act 145 data privacy, which treats housing decisions as decisions with significant effect).
3. **New `{{variable}}` (rule 60):** `{{holdover_daily_rate}}` (`holdover-rate-vt`); not in the kickoff's builder list, though other states' holdover-rate rows use it.
4. **Builder (layout):** `auto-renewal-vt` must render in bold face with an initialled opt-in line (9 V.S.A. § 2454a); `flood-disclosure-vt` is a separate document given at or before signing.
5. **Municipal (flag only, rule 3):** Burlington's charter (24 V.S.A. App. ch. 3, § 48(64)-(65)) authorizes ordinances on longer no-cause notice (90/120 days without a written lease), two-period tenant notice and 90-day rent-increase notice; the Burlington Housing Authority lease applies a 90-day Burlington rent-increase notice. Town security-deposit ordinances under 9 V.S.A. § 4461(g) (interest, housing board review). Municipal abandoned-vehicle ordinances aren't preempted (23 V.S.A. § 2157). None was searched.
6. **Kickoff wording:** the lead item's "essential maintenance practices" is the pre-2022 term (RRPM now).
7. **Corpus tooling (Claude Code):** pdftotext drops strike-through in the enacted acts, so any amendment a row relies on needs a rendered page image; a future zip could add page images or a strike-aware extraction for the session's acts.
8. **Possible library-wide question:** in states that define rent as all consideration (Vermont § 4451(7)), shared clauses that treat fees as separate from rent (`utility-allowance-cap-co`) work only as the landlord's own limit; worth a note when other such states are tagged.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4; only § 2454a (bold, auto-renewal) and § 4466 (separate document) reach a residential lease.
- **41 Just-cause:** none. A written lease ends at its term after § 4467(e) no-cause notice; situational limits: retaliation presumption (§ 4465(c)), protected tenants (§§ 4471-4475, § 4503), condo conversion (27 V.S.A. ch. 15, subch. 2). Row: `edu-no-for-cause-eviction-vt`. Vermont imports no short-notice-only rule like Maine's § 6001(1-B), so `default-by-tenant` needs no override.
- **42 Required text inside a shared clause:** none found (no statute forces a sentence into a fee or deposit clause).
- **43 Cure promises:** `default-by-tenant`'s no-cure sentence stands alone and reaches both limbs; Vermont gives no statutory cure for breach and a pay-through-the-period cure for nonpayment (§ 4467(a)) plus a once-a-year payment into court (12 V.S.A. § 4773), which the clause leaves to law.
- **44 Terms turned into duties:** § 4459 repair and deduct reaches "a material provision of the rental agreement"; `landlord-maintenance` not tagged, `appliances-included` tagged with that warning.
- **45 Electronic notices:** UETA read (9 V.S.A. §§ 272, 274, 277); `electronic-notice-ma` tagged.
- **46 Lease as the notice:** no statute lets a lease paragraph serve as a required notice; pre-signing lead materials and the flood form are separate.
- **47 Knowing-use penalties:** none specific; § 6055(d) statutory damages for trying to enforce a presumptively unconscionable term found unconscionable; § 2453 for unfair practices.
- **48 Separate documents:** flood form (§ 4466); no tenant-chore separate-writing rule, so `landscaping-irrigation` and `snow-removal` are tagged.
- **49 Collection costs:** no statute makes a one-way fee clause reciprocal; landlord fees in a tenant's illegal-eviction action only for a bad-faith frivolous suit (§ 4464(b)), noted on `default-by-tenant`.
- **50 "Lease controls":** § 4456(d) (tenant notice), § 4456b(a) (sublets), 12 V.S.A. § 4854 (fees), § 4473(5) (lock costs), 30 V.S.A. § 63(a)(2) (energy data); each chosen on purpose (§6.1). No deposit uplift.
- **51 Plain language / consumer act:** no plain-language lease statute; consumer act reaches real estate (§§ 2451a(2), 2453(e)) with § 2454a's enumerated renewal rule; no enumerated list of lease practices; standard-form unconscionability statute § 6055.
- **52 Exculpation:** class decision §2.2.
- **53 Figures against shared clauses:** 48 hours vs 24 (entry) and deposit uses → overrides; towing trigger → override; holdover acceptance → override; no late-fee or returned-check cap; no deposit cap.

## §12 Other Step C screens
- **30 Read beyond the section:** 9 V.S.A. ch. 137 and 12 V.S.A. ch. 169 read whole, with ch. 139, the UETA core sections, 18 V.S.A. ch. 38's operative sections, 20 V.S.A. ch. 172 and the Rental Housing Health & Safety Code whole; cross-references followed (§ 4451 definitions, 12 V.S.A. § 4853b, 13 V.S.A. §§ 7606-7607, 23 V.S.A. §§ 2151-2152, 27 V.S.A. ch. 15 subch. 2).
- **31 Enacted twice:** habitability non-waiver (§ 4457(b)) and the general anti-circumvention rule (§ 4454) agree; the code's § 12.1.3 adds the agency-rule version. Acceptance of rent after termination: § 4467(a) (nonpayment, cure) and (j) (other grounds) are consistent and drafted together.
- **32 Place or size:** fair-housing owner-occupied exemption (3 or fewer units, § 4504(2)); lead law exclusions (0-bedroom, elderly or disabled buildings, owner-occupied rooms); EV charging (CICs of 12 or more units, § 1-201, § 1-203). Each carried into the body.
- **37 Tenancy type:** weekly (21 or 7 days), monthly with or without a written agreement, shared occupancy (15/7), seasonal (60-day deposit return; no heat duty for summer rentals) stated wherever they differ.
- **39 Eviction duties:** post-writ property (12 V.S.A. § 4854a), rent escrow (§ 4853a), lockout ban (§ 4463), 60-day filing deadline (§ 4467(k)); CARES Act row tagged; court rules not reachable (§1.3).

## §13 Independent check (rule 80)
Brief: `CHECK-BRIEF.md`. It told the checker to check against the statute, not the notes; that earlier findings may be wrong; to print and read whole sections; to render the enacted PDF for any 2026 amendment; to save findings per row; and to propose exact old-to-new errata, which the merge applied with once-only assertions (re-validated against the current row after every round).
| Round | Rows checked | ERROR | FIX | NOTE | Errata applied | Result |
|---|---|---|---|---|---|---|
| 1 | 415 (all rows) | 1 | 16 | 24 | 39 of 40 (one rejected, below) + 1 main-pass replacement | ERROR: open-burning exceptions changed by 2026 Act 162, § 8 |
| 2 | 32 (edited since round 1) | 0 | 4 | 11 | 18 | Title 27 pinpoints restored; EV rows' § 1-203 small-community exception |
| 3 | 12 (edited since round 2) | 0 | 2 | 3 | 4 | a dropped period; a 12 V.S.A. title slip |
- **Rejected:** round 1 proposed setting `edu-month-to-month-after-lease-vt` to NEEDS_REVIEW because its notes said so; the notes were corrected instead (§6.3). Round 2 confirmed the status and notes agree.
- **Main-pass changes after round 1:** none beyond the errata, except the new optional clause below.

### Edited after the last check
Found by script: each final row was diffed against the version the round-3 checker saw. Claude Code reads these against the statute at sync (kickoff; rule 80).
| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `edu-asbestos-work-vt` | round 3 | round 3 erratum | period restored after "imminent danger)" |
| `edu-ev-charging-vt` | round 3 | round 3 erratum | "effectively prohibits or unreasonably restricts" (27A V.S.A. § 3-125(b)(1)) |
| `edu-no-ev-charging-standards-vt` | round 3 | round 3 erratum (notes) | "on or before January 1, 2011" |
| `edu-redemption-vt` | round 3 | round 3 erratum (notes) | "12 V.S.A. §§ 4773, 4853a" |
| `unpaid-damages-interest-vt` | never (new) | added after round 3 | new optional clause (9 V.S.A. § 41a(a)); read § 41a and § 4451(7), 12 V.S.A. § 4773 |

## §14 Gap-discovery source 1 — statute walk (rule 29)
The core chapters were read whole, and each chapter's section index was diffed by script against every citation in the delta's Vermont rows and tag notes (1,015 distinct title-section pairs cited).
| Chapter | Sections | Repealed or recodified | Live | Uncited live sections |
|---|---|---|---|---|
| 9 V.S.A. ch. 137 | 30 | 3 | 27 | none |
| 12 V.S.A. ch. 169 | 33 | 4 | 29 | §§ 4762-4766 (general ejectment), 4817-4824 (betterments), 4855 (close-jail execution), 4856 (judgment for defendant): none sets a landlord duty or lease term |
| 9 V.S.A. ch. 139 | 9 | 2 | 7 | § 4500 (legislative intent) |
| 9 V.S.A. ch. 20 (UETA) | 21 | 0 | 21 | 17 general sections (definitions, attribution, errors, notarization, retention, transferable records, government use) |
| 18 V.S.A. ch. 38 | 18 | 2 | 16 | §§ 1752-1755 (training, fees, education, testing), 1762-1764 (lenders, public assistance, inspectors' insurance) |
| 20 V.S.A. ch. 172 | 3 | 0 | 3 | none |
- **One level down:** ch. 137 sections cited only in part were re-read; every subsection with a landlord rule is stated in a row (e.g. § 4467(d) sale, (g) conversion, (h) shared occupancy, (i) multiple notices, (k) filing deadline).

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Lease used:** Burlington Housing Authority "Model Lease" ("LEASE AGREEMENT", footer "©Nadine L. Scibek, Attorney at Law 2006", "In compliance with VAWA - 12/8/06"), linked as "Housing Provider - Model Lease" on burlingtonhousing.org/resources; 9 pages, free; text saved and hash-matched (§1.1).
- **Why it's weaker:** no Realtor or landlord-association form is free (the Vermont Association of Realtors and the Vermont Landlord Association restrict forms to members; Taylor won't buy one, rule 33). It is a housing-authority form written for subsidized landlords ("family", "contract unit"), from 2006 (before 2019 Act 48's victim protections, 2025's application rules and 2026's cannabis and solar rules), and cites no statute. A lead about wording only; no shared row changed because of it.
- **Mapped by section:** term and month-to-month continuation (30/60-day no-cause notice) → `edu-month-to-month-after-lease-vt`, `surrender-end-of-term-nh`, `holdover-vt`; utilities and appliances table (including trash and snow) → `utilities-responsibility-ky`, `utilities-paid-by-landlord`, `appliances-included`, `snow-removal`; washers, pools, smoking within 50 feet → rules rows, `smoking-policy`, `edu-smoking-rules-vt`; occupancy, subletting, home business, soliciting → `permitted-occupants`, `no-sublet-assign`, `residential-use-only`, `edu-no-home-business-rule-vt`; entry (48 hours, "except in an emergency") → `landlords-access-vt` (Vermont's exception is imminent danger only); damage reimbursement within 30 days, rent while tenant-caused damage is repaired → `tenant-caused-damage-vt`; late charge and returned-check fee → `late-fee`, `returned-payments-ky`; locks and key charges → `keys` (the 2006 form lacks the § 4473 victim lock-change right); alterations list including satellite dishes → `no-alterations`, `edu-no-telecom-access-statute-vt`; common areas and municipal fines → `common-area-use-vt`, `edu-no-government-fines-rule-vt`; insurance → `tenants-property-insurance-ks-oh-ca`; pets, noise, parking, 14-day guests → tagged rows; owner termination grounds and notice of grounds → subsidized-program terms, outside the library (education rows on termination); criminal activity including "illegal use or possession of a controlled substance" → `criminal-activity-vt` (cannabis carve-out needed from July 1, 2026); security deposit (deductions for keys, late fees and other amounts; 14-day return; not usable as last month's rent) → `security-deposit-use-vt`, `security-deposit-return-vt`; mandatory recycling → rental code § 5.5 rows (Burlington ordinance flagged); discrimination list → `edu-fair-housing-vt` (the 2006 list lacks gender identity, citizenship, immigration status, victims); notices by hand or first-class mail → `notices`; lead disclosure → `lead-based-paint` plus `lead-rrpm-disclosure-vt` (the form lacks Vermont's RRPM materials); one-way attorney's fees → `default-by-tenant` (mutual); surrender and breaking the lease (turnover costs, rent until re-let) → `early-termination-vt`, `edu-abandonment-rent-liability-vt`.
- **Terms in the lease that would now be wrong in Vermont** (noted, not imported): forfeiting the whole deposit for short notice of vacating (not a § 4461(b) ground); emergency entry without the imminent-danger limit (§ 4460(c)); a blanket controlled-substance possession ground reaching lawful cannabis (§ 4468b).
- **New rows from this source:** none; every topic it raises already has a Vermont row.

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 168 generated (VT-scen-001 to VT-scen-168) from advertising through move-out, sale, foreclosure, death, abandonment, DV, military service and eviction, plus Vermont cases (flood form, RRPM, age-restricted increases, shared occupancy, farm housing, seasonal rentals, recovery residences, municipal flags). Results: answered 153, partly 7, gap outside statute 5 (FCRA notice, PUC rules, FCC dish rule, SCRA), gap in Vermont law 3.
- **Rows added:** `edu-month-to-month-after-lease-vt` (scen-116), `edu-no-co-tenant-deposit-rule-vt` (scen-128), `edu-farm-employee-housing-vt` (scen-160), `edu-recovery-residences-vt` (scen-162), each checked in round 1.
- **Row problems found and fixed:** `holdover-ca` (acceptance of rent after a no-cause notice) → `holdover-vt`; `early-termination-ks` (termination when the tenant "vacates ... without notifying") → `early-termination-vt`.
- **Batteries:** VT-SCEN-ADVACT-01 to -03, MTM-01 to -03, COTEN-01 to -03, FARM-01, RECRES-01 (failed or missing positives disclosed; the rows rest on -02/-03 runs whose real positives passed).

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus:** the whole index ("ACT 179 ; CONST 98 ; FORM 1 ; RULE 1 ; VSA 26653 ; total 26932"); the Constitution was loaded before any outside-title battery.
- **Topical batteries:** run inside the canvass across every outside-title family: fees and collection (9 V.S.A. § 2311; 13 V.S.A. § 2022), consumer protection (§§ 2451a, 2453, 2454a, 2456, 6055), electronic transactions, animals, cannabis (18 V.S.A. §§ 4230a, 4230e), firearms, signs and display, solar (30 V.S.A. § 256; 27 V.S.A. § 544), smoking (18 V.S.A. § 1421), lead, asbestos, wells, insurance (8 V.S.A. § 4724), DV and protective orders, military (20 V.S.A. § 609), screening (9 V.S.A. § 2480e; 13 V.S.A. §§ 7606-7607, 8014), foreclosure (12 V.S.A. § 4932), condo conversion (27 V.S.A. ch. 15), utilities (24 V.S.A. §§ 3306, 3614, 5143; 30 V.S.A. § 63), towing (23 V.S.A. §§ 2151-2157), drug premises (18 V.S.A. §§ 4252, 4252a), unclaimed property (27 V.S.A. ch. 18), landlord certificate (32 V.S.A. § 6069), rooms tax (32 V.S.A. §§ 9202, 9241), data privacy (2026 Act 145), EV charging in CICs (27A V.S.A. § 3-125).
- **Constitution:** VT-SRC4-CONST-01b (control, 43 hits, real positive passed), -02 (tenancy words: 0), -03 (arms: ch. I, art. 16), -04 (speech, assembly, religion: 7), -05 (search, property: 6), -06 (provisions binding only the State: art. 22). No provision reaches residential leases; the arms, speech, assembly, search and reproductive-liberty articles restrain the State, which settles the shared-clause questions without reaching case law (whether any applies to private lessors was not searched).
- **Findings that changed rows:** § 4468b and 30 V.S.A. § 256 (2026 acts), § 2454a (auto-renewal), § 6055 (standard-form contracts), 12 V.S.A. § 4854 (lease-invoked fees), § 4932(c)(3) (owner's foreclosure notice to new tenants), 23 V.S.A. § 2151 (towing), 30 V.S.A. § 63 (energy data), 20 V.S.A. § 2729(d) (CO detectors in rented buildings).

## §18 Topic canvass (rules 27, 36)
- **Method:** four slices (C1-C4), at most two agents at a time, each saving one JSON line per topic, briefed with `VT-BRIEF`, the main-pass row list, the canvass brief (absence method) and, for C3-C4, an addendum of findings; model rows from Maine (or the nearest recent state) for format only.
- **Answers (350 topics):** Confirmed absent 177, Present 151, Answered by main-pass row 14, Not located 8.
- **Rows:** 328 drafted; 6 absence rows added by the main pass where a topic had no row keyed to it (§3.2); the script check confirms every topic has a VT row (§8).
- **Clause suggestions acted on:** attorney's fees (via `default-by-tenant`), plug-in solar, energy data, pest cooperation, tenant notice period, holdover charge, casualty termination, interest on damages, sublessee notice, auto-renewal; declined with reasons in §6.1.

## §19 Conformance-table entry
VT (2026-10-16), from this log's §§ 4, 6.1, 11, 12 and 14-18. It ran on SOP 1.71 under the usage budget and read every row section-open, so 79 is ✓. It offers a holdover rate (`holdover-rate-vt`; no statutory measure), casualty termination (`casualty-termination-vt`), a criminal-activity clause (`criminal-activity-vt`) and a tenant-caused-damage clause (`tenant-caused-damage-vt`). Its eviction-fee cell is ✓ through the mutual attorney's-fee sentence in `default-by-tenant` (12 V.S.A. § 4854). Its "n" mark: statutory waivers (§ 4454; confession of judgment void, § 2456; jury waiver presumptively unconscionable, § 6055(a)(2)). Rule 27: all topics have VT rows. The Retro rules in the table were checked in this pass: 35 in §17; 37 in §12; 39 in §12; 40 in §4; 41 and 41b in §11 (`edu-no-for-cause-eviction-vt`); 42-53 in §11; 54 and 54t in §6.1; 55 in §3; 57 by the one-topic-per-row check; 79 by section-open reading.

## Proposed SOP changes
- Rule 16: when a pass relies on an amendment in an enacted act, render the act's page image to read strike-through and underline, because pdftotext keeps struck words unmarked (VT: 2026 Act 103's struck repeal of § 4452(b) and 2026 Act 176's struck "possession or" would both have read wrongly from text alone).
- Rule 22: run a bare-citation screen that flags a bare "§ N" whose number doesn't exist in the last full title cited, and expand it from the chapter it belongs to, listing every expansion (VT: 212 bare cites in canvass notes silently switched titles, e.g. "§ 4461" after a 12 V.S.A. cite).
- Rule 22: normalize session-law citations to the kickoff's form by script outside quotes, converting "(Adj. Sess.)" acts to the following year as the enacted acts do (VT: about 140 informal "2026 Act 176 Sec. 30" cites).
- Rule 26: when a state defines rent as all consideration payable under the lease (VT § 4451(7)), screen every shared clause that separates fees from rent and every education row on fees for the consequences (60-day notice for a new fee; whether a fee alone supports a nonpayment notice).
- Rule 59: the quote checker should mask quotes when inferring a citation's title and treat agency-rule section numbers ("RRHHS Code 12.1.1") as resolvable, since most of its "found elsewhere" reports in VT were these two forms.
- Rule 80: an independent-check erratum that changes a row's verification_status should be reviewed against Part 5's NEEDS_REVIEW policy before merging (VT: round 1 proposed NEEDS_REVIEW for a row whose open point only case law could settle).
- Rule 24: a helper scratchpad must be per-helper: two triage helpers sharing scratch file names overwrote each other's scripts (VT; caught, no answers mixed).

## Proposed topic questions
- `cannabis`: Does a new statute bar a lease from prohibiting cannabis possession on the premises or non-inhaled use in the unit, while allowing a ban on "lighted cannabis or cannabis products intended for inhalation", and does a cultivation ban count as a possession ban? (Vermont, 9 V.S.A. § 4468b.)
- `portable-solar`: Does a statute give tenants a right to install plug-in solar devices after notice, with the landlord limited to reasonable restrictions given within a set time? (Vermont, 30 V.S.A. § 256(g).)
- `automatic-renewal`: Does a general consumer-contract auto-renewal statute reach leases with a "lessor" (bold-face terms, affirmative opt-in, pre-renewal notice)? (Vermont, 9 V.S.A. § 2454a.)
- `fees-as-rent`: Does the state define rent as all consideration payable to the landlord, so that every fee is rent for notice and nonpayment purposes? (Vermont, 9 V.S.A. § 4451(7).)
- `energy-data-release`: Does a statute let a lease clause authorize release of a tenant's energy usage data to the owner for benchmarking? (Vermont, 30 V.S.A. § 63(a)(2).)
- `foreclosure-disclosure`: Must an owner who has received a foreclosure complaint tell each new tenant before signing? (Vermont, 12 V.S.A. § 4932(c)(3).)
- `jury-waiver`: Does a standard-form contract statute make a jury or class-action waiver presumptively unconscionable when a business contracts with an individual? (Vermont, 9 V.S.A. § 6055.)

## Sync review (Claude Code, 2026-10-16)
- **Merge:** `merge-delta.py` against base 1824fed: 360 new rows, 55 shared rows changed only in their VT tag and note segment, `landlords-access-vt` rewritten in place; 6,260 rows, byte-exact CRLF round trip.
- **Edited after the last check (§13):** `edu-ev-charging-vt`, `edu-no-ev-charging-standards-vt`, `edu-redemption-vt` and `unpaid-damages-interest-vt` read against 12 V.S.A. § 4773, 9 V.S.A. §§ 41a(a), 4451(7), 4467(a), 27A V.S.A. §§ 1-201(a), 1-203(a) and 2026 Act 168, §§ 31-32 (enacted PDF): every quote matches, no errors. `edu-asbestos-work-vt` was rewritten in the close-out below.
- **Statute spot-check:** 9 V.S.A. §§ 4454, 4455(b), 4460, 4461, 4467, 2454a and the § 4468b text in 2026 Act 176, § 30, against `landlords-access-vt`, `security-deposit-use-vt`, `security-deposit-return-vt`, `midterm-rent-increase-vt`, `auto-renewal-vt` and the cannabis rows: the clauses match.
- **Two clause changes (every-reading rule, SOP Part 5):**
  - `smoking-policy-vt` (new override of `smoking-policy`, VT untagged from the shared row): the shared text plus a closing sentence that leaves possession and non-lit, non-inhaled use alone and bans vaping cannabis "only as far as Vermont law allows a rental agreement to". The pass's reading of § 4468b ("intended for inhalation" reaching vaping) is likely but untested; the clause now works under either reading, as `smoking-policy-me` does. `edu-cannabis-vt` now states that doubt and the cautious course.
  - `early-termination-vt`: the "one month's Rent or 30% of the remaining Rent, whichever is greater" fee is now a flat one month's Rent that ends liability for later Rent, as in `early-termination-ct` and `early-termination-ri` (2026-10-15); a tenant who leaves without the option is left to § 4462(b).
- **Technical fixes:** 21 Vermont clauses carried an explanation inside `lease_clause_basis`, which `check-clause-basis.py` accepts only for REQUIRED_DISCLOSURE; the explanations moved to each row's notes. `holdover-rate-vt` now points to "the Holdover Tenancy section" (the title of `holdover-vt`).
- **NEEDS_REVIEW closed (§7):** all 13 rows. A helper read the rules on the issuing bodies' own sites: the Fire & Building Safety Code, 2025 edition (effective November 4, 2025; alarms, sprinklers, code editions, grills); the Department of Health asbestos regulations; the Agency of Agriculture pesticide rule (CVR 20-031-012); PUC Rule 3.300 (effective October 4, 2024) and the PUC rules list; ANR's contaminated-properties rule (effective February 23, 2024); 12 V.S.A. § 5536; and the Supreme Court's 2026 public-access order. Three rows had said no duty existed where a rule creates one: tenant notice before an indoor pesticide treatment (§ 7.03, 24 hours to 7 days), a utility's notice to a rental owner of a disconnection (Rule 3.302(C)(3)-(4)), and a certified inspector's asbestos assessment before renovating a rental building (§ 9.1). Claude Code re-read §§ 7.03 and 3.302(C) itself. The submetering and utility-allowance rows now say whether a reselling landlord becomes a utility is unsettled, with the cautious course; the two court-rule rows now point the landlord to the court rather than depending on rules published only through LexisNexis. All 416 active Vermont rows are VERIFIED.
- **Sublet pair:** `no-sublet-assign` and the optional `sublessee-notice-vt` share a topic on purpose (the second applies once the landlord consents).
- **Citations file:** `lease-clause-citations-VT.csv`, 416 rows; every statute citation resolves to a section in the corpus or a new 2026 section.
- **Legal watch:** `legal-watch-vt.yml`, held until after May 16, 2028 (first run June 16, 2028, day 16 at 14:00 UTC); 354 sections keyed `9 V.S.A. § 4467`; manual items for uncompiled 2026 sections, 2026 Act 145 (January 1, 2028) and the rules and flood form.
- **SOP 1.72:** all seven proposals adopted (rule 27 holds the per-helper scratch rule). Seven topic questions added; `energy-data-release` is a new topic (351). `{{holdover_daily_rate}}` gains VT in M.14.
