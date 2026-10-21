# Lease clause decision log — District of Columbia (DC, state #51)
- **Pass:** run 2026-10-20 in one chat, the District's only Desktop chat (rule 8). The session resumed once after a context summary; every working file survived. No earlier District output existed: the only row naming the District before this pass was the dormant `landlords-access-hi-ky-ri-dc` (§5).
- **Inputs (SHA-256):**
  - `KICKOFF-PROMPT.md` 9b7d7d73…
  - `lease-clause-sop.md` (v1.78) 00bfb4ed…
  - `lease-clause-topics.md` d239a803…
  - `log-format-example.md` 0fe78d13…
  - `lease-clauses.csv` 97122959… (matches the kickoff)
  - `corpus-DC-20261020.tar.xz` f12da97b… (matches the kickoff)
- **The District is not a state.** Rows say "the District". It has no constitution; the Home Rule Act (the District Charter, D.C. Code §§ 1-201.01 et seq.) was screened in its place (§1.3, §17). Scope is District law only.
- **Outputs:** `lease-clauses-DC-delta.csv` and this log.

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A: inputs, corpus, channel, currency | Done | §1 |
| Tag-first screen of all 1,273 active lease clauses | Done | §2 |
| New rows (rule_type, basis, citation) | Done | §3 |
| Layout and placement (rule 40) | Done | §4 |
| Dormant rows (rule 25) | Done | §5 |
| Optional clauses (rule 54) and questions to Taylor (rule 76) | Done | §6 |
| Open items with search boundaries | Done | §7 |
| Integrity checks on the delta | Done | §8 |
| Propagation notes (rule 62) | Done | §9 |
| Findings for other states or the product | Done | §10 |
| Step D screens (rules 40-53) | Done | §11 |
| Other Step C screens (rules 30-39) | Done | §12 |
| Independent check (rule 80) | Done | §13 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Topic canvass (rules 27, 36): 360 of 360 topics | Done | §18 |
| Conformance-table entry | Done | §19 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A (rule 23):** the attached `lease-clauses.csv` has SHA-256 9712295917005877a87f4d9cb74cc365fc8d33ad4a69f1515183d47809616904, 22,430,440 bytes, CRLF row ends, no BOM and 17 columns.
  - It has 8,419 rows, 8,310 of them active: 1,273 lease clauses (119 shared by two or more states, 1,153 single-state, 1 with blank states: `security-deposit-return`) and 7,037 education rows. Every per-state count matches the kickoff.
  - No active row was tagged DC; the one inactive row naming DC is `landlords-access-hi-ky-ri-dc` (§5).
- **Corpus:** the Claude Code corpus `corpus-DC-20261020.tar.xz` (hash matches the kickoff). Its manifest lists 28,458 files, all present with matching hashes.
  - **D.C. Code:** the Council's bulk XML (law-xml-codified), current through 2026-09-26: 24,817 section includes, none missing (24,198 section files plus 564 title-99 "(Perm)" files, which are stale prior versions and were never relied on as current law).
  - **14 DCMR:** 134 chapter pages and 1,189 section texts (the txt files are derived from the .doc files, as the corpus README says).
  - **Superior Court rules:** 222 of 225 Landlord and Tenant, Small Claims and Civil rule PDFs; the three missing are the two compiled rule-set PDFs and a domestic-violence rule outside scope.
  - **Laws and acts:** D.C. Laws (485) and Acts (411) of Council Periods 25-26.
- **Why the corpus, not the live site:** WebFetch on code.dccouncil.gov returns only a summary, and the container's shell is blocked from code.dccouncil.gov and lims.dccouncil.gov by the proxy. Taylor approved the built-in browser (§6.2 Q1), which was used for the section match, currency, court forms, the official handbook and the real lease.
- **Section match (rule 24):** six sections were fetched from code.dccouncil.gov in the built-in browser; the body text (from "(a)" to the history line, whitespace collapsed, quotes straightened) hashed identically to the corpus rendering: §§ 42-3505.31 (ce094014…), 42-3505.01 (cddb3ae5…, 32,570 characters), 42-3505.51 (9431f660…), 42-3502.17 (1d52ab6e…), 42-3505.10 (0647821b…) and 16-1501 (ff4390c9…).
- **Reading tools:** `scripts/dclib.py` (`show` prints a whole section with its history notes and logs each read to `work/readlog.jsonl`; `battery` runs a search with a nonsense control, a must-hit control and positives, and refuses a duplicate battery name), `scripts/quotecheck.py` (rule 59).

### §1.2 Currency and dated versions (rule 16)
- **Live code site:** "Current through Sept. 26, 2026; Last codified D.C. Law: Law 26-187 effective Sept. 26, 2026; Last codified Emergency Law: Act 26-416 effective Aug. 13, 2026" — the corpus's own recency.
- **LIMS (2026-10-20, built-in browser):** Council Period 26 laws after 26-187 are 26-188 (LEARNS, education), 26-189 (Fiscal Year 2027 Budget Support Act of 2026, effective 2026-10-02) and 26-190 (Schools First). Emergency acts run to A26-0443; none reaches residential landlord-tenant law.
- **D.C. Law 26-189:** its enrolled text (Bill 26-661 Enrollment17, 215 pages, SHA-256 d5a2201a…; the signed act PDF is image-only) was searched whole for housing changes. Title II, Subtitle B (the Rent Payment Reporting Amendment Act of 2026) makes the rent payment reporting program in § 42-3505.71 permanent as new Title V-C § 541, with subsections (a)-(g) matching the emergency text, applicable as of 2026-10-01 (§ 9001); codification is pending. `edu-rent-reporting-dc` says so. Other hits: vacant-building fees (ch. 42-31), a receivership fund deposit (§ 42-3651.06(j)(2)), a TOPA cross-reference fix (§ 42-1102(14A)) and CPPA amendments tied to § 28-3820 — none changes a District row.
- **Dated versions in force:** D.C. Law 26-80 (RENTAL Act, effective 2025-12-31: 10-day nonpayment notice of intent, § 42-3505.01(a-1)); D.C. Law 26-156 (effective 2026-08-14: the fee ban in § 42-3505.10(b-2), the deposit notice of unpaid amounts in § 42-3502.17(e), and § 42-3505.11 utility billing from 2027-01-01); D.C. Law 26-187 (effective 2026-09-26: § 28-3904 restructured, all-in pricing at (a)(12)).
- **Temporary and expiring laws** (legal watch, §10): D.C. Law 26-136 (registration portal in § 42-3502.05(f), expires 2027-01-22); D.C. Law 26-165 (DC Water shutoff notice, 21 DCMR § 431, expires 2027-03-27); the temporary text in § 14-310 (expires 2027-05-08).
- **"Not Funded" laws** are not stated as law: D.C. Law 25-308 (pets in housing; § 42-3502.17(d), § 42-3501.03(6A)), D.C. Law 25-262 (tenant EV charging), D.C. Law 26-172 (amendments to §§ 28-3814 and 28-3904), and D.C. Law 22-260's § 42-3509.09 (repealed by D.C. Law 24-45).
- **Pending bills** are not law (rule 18).

### §1.3 Charter, court rules and administrative rules (rules 21, 35, 39)
- **Charter:** the 139 sections of D.C. Code §§ 1-201.01 to 1-207.71 in the corpus match the 139 includes of the official Title 1 index. Batteries DC-M-CH01 to CH07 ran over them with controls (nonsense 0; must-hit 123; positives passed). § 1-206.02 was read whole: its limits bind only the Council. Nothing in the Charter reaches a private residential lease or protects conduct a shared clause restricts (§17).
- **Court rules:** every Superior Court Landlord and Tenant Rule was read (R. 1-16 with 3-I, 3-II, 12-I, 13, 13-I, 14, 14-I, 14-II, 15). The court's 34 Landlord and Tenant forms were listed on dccourts.gov and the complaint, redemption, summons and writ forms screened (rule 39 [AK 6]; §12).
- **Administrative rules:** 14 DCMR chs. 1 (§§ 101, 106), 3 (§§ 300-399), 4-9 (housing code duties) and 41-43 (rent stabilization and evictions) were read; other DCMR titles (12 Construction Codes, 15 Public Service Commission, 18 vehicles, 20 environment, 21 water) are not in the corpus, and rows that could turn on them say so.

### §1.4 Agents and usage
- **Usage budget (kickoff):** large files were read by script. At most two agents ran at a time throughout: seven canvass helpers (C1-C7), then two triage helpers (TA, TB), each saving after every topic or clause. The independent check ran one agent at a time, for at most three rounds (§13).
- **Research mode** was not used: no rule 9 trigger arose.
- **Triage of single-state clauses (rule 26):** §2.3.

### §1.5 Batteries (rule 19)
- **Engine:** local regex over the corpus (`dclib.battery`), whitespace collapsed and quotes straightened, with a nonsense control (always 0) and a must-hit control in every run, and named positives; a failed positive is recorded and rerun under a new name.
- **Count:** 320 batteries: 25 in the main pass (DC-M-F01-F13, CH01-CH07, OT01, PP01, CN01, OPT01-02, CAS01), 294 by the canvass helpers (DC-C1-001 to DC-C7-050), 1 by TB. Every failed positive is disclosed in the row that cites the battery and was rerun.

## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,273 active lease clauses. The 120 shared and blank-states clauses (and the federal education row `edu-cares-act-notice`, at the kickoff's request) were read one by one in the main pass against the District text; the canvass helpers re-read the shared clauses on their topics and their recommendations were applied (§6.4). The 1,153 single-state clauses were triaged (§2.3).
- **Result:** 54 tagged DC as written (including `edu-cares-act-notice`); 16 overridden by District clauses; 51 not tagged.

### §2.1 Tagged DC as written (54)
`acceptable-payment-methods`, `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `cannabis-restrictions-ak`, `common-area-use`, `edu-cares-act-notice`, `electronic-notice-ma`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `extended-absence-notice-ks`, `fire-safety-grilling`, `furnishings-included-la`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `informal-dispute-resolution-or`, `inspection-rights`, `joint-liability`, `landlord-maintenance`, `landlord-maintenance-nd`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `notices`, `parking-ks-oh-ca`, `pet-insurance-requirement`, `pet-policy-or`, `possession-delay`, `prohibited-acts-renter-wy`, `rent-concession-wi`, `rent-installments-or`, `rent-payment`, `rental-application-accuracy`, `residential-use-only`, `returned-payments`, `rules-wi`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `surrender-end-of-term`, `tenant-caused-damage-nm`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility-ky`, `utility-payment-evidence`, `utility-service-continuity`.
Each tag's reason is in its " | DC: …" notes segment.
- **Fee screens (rule 26; kickoff):** every tagged clause that lets the landlord charge for something was screened against § 42-3505.10(b)(3) (no fee but an application fee before signing), (b-2) (no fee for services the landlord must provide, naming utilities, trash, locks and third-party billing), 14 DCMR § 301.3-.4 and, for rent-stabilized units, § 42-3502.11a: `hoa-compliance` (association fines for the tenant's own violations are damages, not a fee for a required service or a pre-lease fee — tagged); `returned-payments`, `pet-insurance-requirement`, `rent-installments-or` (tagged, notes say why); `keys` (its re-key charge runs into (b-2), which names locks — overridden by `keys-dc`); `parking-vehicle-rules` (decal and card charges are a mandatory fee for a related facility in a rent-stabilized unit — overridden).
- **Payment methods:** no District statute limits the payment methods a landlord may require; receipts are required for every payment except a personal check (14 DCMR § 306); at the eviction stage the court's redemption form allows only cash, cashier's check or money order and requires the landlord to accept full payment (§12). Noted on `acceptable-payment-methods`.

### §2.2 Clauses read in the main pass and not tagged, with reasons
- **Class decision (rule 52; 14 DCMR § 304.3):** no lease may exempt or limit the owner's liability for injury or damage caused by the owner's negligence. Every shared clause with an unqualified "Landlord is not liable" disclaimer is untagged: `parking`, `parking-mn`, `storage-space`, `storage-space-mn`, `tenants-property-insurance`, `tenants-property-insurance-mn`; the `-ks-oh-ca` variants without the disclaimer are tagged.
- **Class decision (14 DCMR § 304.4):** no lease may waive a jury trial, require the tenant to pay the owner's court costs or legal fees, or authorize confession of judgment. Every fee- or cost-shifting clause is untagged (`default-by-tenant`, `default-by-tenant-co`, `default-by-tenant-ks-ne`; the cost sentence of `no-liens-ar`).
- **Class decision (just cause; D.C. Code § 42-3505.01(a)(1); § 42-3202(b); 14 DCMR § 4300.3):** a landlord cannot end a District residential tenancy at the end of the term or by notice. Untagged: `holdover`, `end-of-term-notice-ga`, `periodic-tenancy-notice-mt`, `owner-occupancy-termination-ar`, `casualty-termination-mt`, `surrender-end-of-term-ks-ne`, `surrender-end-of-term-mn-nd`.
- **Overrides (16):** `assistance-animal-accommodation` → `assistance-animal-accommodation-dc`; `default-by-tenant` → `default-by-tenant-dc`; `due-at-signing` → `due-at-signing-dc`; `early-termination-ks` → `early-termination-dc`; `governing-law` → `governing-law-dc`; `holdover-ca` → `holdover-dc`; `keys` → `keys-dc`; `landlords-access` → `landlords-access-dc`; `late-fee` → `late-fee-dc`; `no-liens-ar` → `construction-liens-dc`; `no-sublet-assign` → `sublet-assign-dc`; `parking-vehicle-rules` → `parking-vehicle-rules-dc`; `permitted-occupants` → `permitted-occupants-dc`; `security-deposit-return` → `security-deposit-return-dc`; `security-deposit-use` → `security-deposit-use-dc`; `tenant-death-contact-nh` → `tenant-death-contact-dc` (round 1 of the independent check found its cross-reference to a "Handling of Property Left Behind Section" points to nothing in a District lease).
- **Every other untagged clause, with its reason:**
  - `acceptable-payment-methods-nj`: Rests on New Jersey's non-EFT rule; District uses the base clause.
  - `appliances-excluded-la`: Louisiana civil-law basis; in the District the owner's implied warranty (14 DCMR § 301.1) and the bar on waiving ch. 3 (14 DCMR § 304.1) make an 'items not maintained' carve-out risky.
  - `association-approval-la`: Louisiana-based; the clause makes the tenant pay an association fee, which in the District can collide with § 42-3505.10(b)(3) (no fee but an application fee before signing) and (b-2).
  - `carpet-cleaning-ar`: 14 DCMR § 301.4 bars charging a fee or withholding deposit for professional cleaning or other expenses due to ordinary wear and tear; a flat professional-cleaning requirement collides with it.
  - `casualty-termination-mt`: District just-cause law (§ 42-3505.01) gives the landlord no casualty ground to end a tenancy; a landlord casualty-termination clause is not lawful (rule 54 'n').
  - `criminal-activity-ky`: Its "Landlord may terminate this Lease for it" overstates District law: eviction for an illegal act needs a court determination and a 30-day (or 10-day) notice under § 42-3505.01(c), and an occupant's act counts only if the tenant knew or should have known. The District's optional `criminal-activity-dc` states the District grounds instead.
  - `default-by-tenant-co`: Same prevailing-party fee sentence (14 DCMR § 304.4).
  - `default-by-tenant-ks-ne`: Its recovery of "reasonable costs and expenses" can be read to include court costs the tenant may not be made to pay (14 DCMR § 304.4); District uses default-by-tenant-dc.
  - `detector-care-la`: Its duties fit the District, but its sentence that the tenant 'will pay the reasonable cost of repairing or replacing' a detector is a charge, during the tenancy, for equipment the owner must install and maintain (D.C. Code § 6-751.02), which risks the fee ban in § 42-3505.10(b-2)(1)(A); the ban's only express exception is withholding the deposit for tenant-caused damage (§ 42-3505.10(b-2)(1)(B)). Treated like `landlord-self-cure-nm` in the triage; the District's alarm-tampering education row covers the subject.
  - `early-termination`: District uses early-termination-dc.
  - `end-of-term-notice-ga`: In the District the end of the Term does not end the tenancy (§ 42-3505.01(a)(1); § 42-3202(b); 14 DCMR § 4300.3).
  - `ev-charging-end-of-tenancy-co`: Rests on Colorado's EV-charging statute; no District counterpart.
  - `ev-charging-shared-area-co`: Rests on Colorado's EV-charging statute; no District counterpart.
  - `firearm-rules-la`: Its vehicle-storage sentence restates a Louisiana statute; District firearm law differs.
  - `government-fee-reimbursement-ky`: The District rental unit fee (§ 42-3504.01) is the housing provider's; passing it through is a rent increase for rent-stabilized units and a mandatory fee barred by § 42-3502.11a.
  - `holdover`: It treats staying after the Term as holding over, but a District tenant who keeps paying may stay (D.C. Code § 42-3505.01(a)(1); § 42-3202(b); 14 DCMR § 4300.3); the District uses `holdover-dc`.
  - `improvements-ownership-la`: Louisiana civil-code basis.
  - `landlords-access-mi`: Michigan-based.
  - `late-fee-ky`: District uses late-fee-dc.
  - `late-fee-ne`: District uses late-fee-dc.
  - `maintenance-allocation-ks`: Kansas separate-writing structure; the District has no such statute.
  - `nonrefundable-fees-wv`: District bars any fee but an application fee before signing (§ 42-3505.10(b)(3)) and, for rent-stabilized units, unapproved mandatory fees (§ 42-3502.11a); answered by the canvass row.
  - `owner-occupancy-termination-ar`: District owner-use ground needs a natural person with a freehold interest, a 90-day notice and a 12-month no-rent bar (§ 42-3505.01(d)); a 30-day lease option conflicts.
  - `parking`: Its "not liable for damage to or theft of a vehicle" reaches the owner's negligence (14 DCMR § 304.3).
  - `parking-mn`: Disclaims ordinary negligence (14 DCMR § 304.3).
  - `parking-vehicle-rules-id`: Idaho-based.
  - `periodic-tenancy-notice-mt`: A District landlord cannot end a periodic residential tenancy by notice (§ 42-3202(b); § 42-3505.01).
  - `pest-cooperation-la`: Its fault-based cost shift does not follow the District's allocation of extermination duties by dwelling type and number of infested units (14 DCMR § 805), and charging the tenant for extermination the owner must provide risks D.C. Code § 42-3505.10(b-2)(1)(A); the District offers `bed-bug-cooperation-dc` instead.
  - `pet-policy`: Its entry to remove a pet is not an emergency entry under § 42-3505.51(b)(1); District uses pet-policy-or.
  - `possession-delay-ca`: District uses the base clause.
  - `prompt-payment-discount-la`: A discount lost the day after the due date works as a late charge before the 5-day grace (§ 42-3505.31(b)(2)).
  - `rent-escalation-la`: Rent-stabilized units: increases limited and none during a lease that sets the rent for its term (§ 42-3502.08(e), (g)-(h)); all units: 60 days' notice (§ 42-3509.04(b)); answered by canvass row.
  - `rent-increase-midterm-ky`: 30 days' notice is shorter than § 42-3509.04(b)'s 60 days.
  - `rental-application-accuracy-la`: District uses the base clause.
  - `returned-payments-ky`: District uses the base clause.
  - `rules-ia`: It lets the landlord adopt binding new rules during the Term by notice; no District statute authorizes that, a lease violation supports eviction only if it breaches an obligation 'contained in a valid lease' (14 DCMR § 4301.2), and a later rule could be read as changing the rental agreement without the tenant's consent; the District uses `rules-wi`.
  - `scheduled-services-entry-la`: Its short or electronic notice does not track § 42-3505.51(a)(1)'s written-acknowledgment rule.
  - `services-utilities-provided`: District uses the -ks-oh variant.
  - `showing-notice-la`: Same-day phone or text notice does not track § 42-3505.51(a)(1).
  - `storage-space`: Disclaimer reaches the owner's negligence (14 DCMR § 304.3).
  - `storage-space-mn`: Disclaims ordinary negligence (14 DCMR § 304.3).
  - `surrender-end-of-term-ks-ne`: Lacks the saving phrase the District's just-cause rule needs.
  - `surrender-end-of-term-mn-nd`: Lacks the saving phrase the District's just-cause rule needs.
  - `surrender-end-of-term-nh`: District uses the base clause.
  - `tax-insurance-escalation-la`: A tax or insurance share is Rent (§ 42-3501.03(28)); limited for rent-stabilized units and needs 60 days' notice (§ 42-3509.04(b)).
  - `tenant-maintenance-nv`: District uses the base clause.
  - `tenant-repair-agreement-hi`: Hawaii-based.
  - `tenants-property-insurance`: Disclaimer reaches the owner's negligence (14 DCMR § 304.3).
  - `tenants-property-insurance-mn`: Disclaims ordinary negligence (14 DCMR § 304.3).
  - `utilities-responsibility`: It has no carve-out for utilities District law requires the owner to supply (14 DCMR §§ 501.4, 600.3, 606.2), so it could be read to shift them to the tenant, which 14 DCMR § 304.1 voids; the District uses `utilities-responsibility-ky`.
  - `utility-allowance-cap-co`: Billing the tenant for utility overage the landlord supplies risks § 42-3505.10(b-2) (no fee related to utilities the landlord must provide) and, for rent-stabilized units, § 42-3502.11a.

### §2.3 Single-state clauses (rule 26 triage)
- **Screened:** 1,153 single-state clauses. A script excluded the 603 whose title or body names another state or its statute (`work/main/triage_excluded.json`). Two helpers (TA, TB; `TRIAGE-BRIEF`) read the remaining 550 in full, 275 each, against the District law map.
- **Verdicts:** TA 0 TAGGABLE / 275 NOT / 0 UNSURE; TB 0 / 273 / 2. 530 rest on their own state's statute (a statutory form, figure, notice period, safe harbour or opt-in right). The rest either repeat a subject the District already answers (a tagged shared clause or a District clause) or conflict with District law (just cause, § 42-3505.51 entry, 14 DCMR § 304.3-.4, § 42-3505.10(b-2), 14 DCMR §§ 301.4, 308.2, § 42-3505.31, § 42-3509.04(b), § 42-3502.08(e), § 6-751.02).
- **UNSURE, resolved NOT in the main pass:** `landlord-self-cure-nm` (billing the tenant during the tenancy for repairs the owner must make risks § 42-3505.10(b-2)(1)(A), whose only express exception is deposit withholding for tenant-caused damage, (b-2)(1)(B)); `animal-care-access-la` (animal care is not a § 42-3505.51(a)(2) purpose and the emergency exception in (b)(1) protects premises and persons). Both topics have District education rows. `detector-care-la`, a shared clause, was decided the same way (§2.2).
- **Leads checked:** `tenant-notice-of-adverse-proceeding-nd` (subject covered by the tagged `tenant-forward-proceedings-ca`); `lease-copy-receipt-mn`, `-hi`, `-wi` (copy duty answered by `required-disclosures-dc` and 14 DCMR § 303.1); `pet-policy-or` (its indemnity carve-out reaches the landlord's negligence, which is what 14 DCMR § 304.3 requires — no District problem).

## §3 New rows (rule_type, basis, citation)
### §3.1 District lease clauses (29 new)
| Row | rule_type | basis | topic_key | supersedes | source | key citations |
|---|---|---|---|---|---|---|
| `assistance-animal-accommodation-dc` | RECOMMENDED | SERVES_LANDLORD | assistance-animal-accommodation | `assistance-animal-accommodation` | main | § 7-1006; § 2-1402.21 |
| `association-obligations-disclosure-dc` | CONDITIONAL | REQUIRED_DISCLOSURE: D.C. Code § 42-3402.02(a)(4) | association-obligations-disclosure | — | C6 | § 42-3402.02 |
| `bed-bug-cooperation-dc` | RECOMMENDED/CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | bed-bug-cooperation | — | C2 | 14 DCMR § 805.1-805.5; § 42-3505.51; § 42-3505.10 |
| `collection-fee-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | collection-fee | — | C1 | § 28-3814; § 42-3501.03; § 42-3502.11a; § 42-3502.17; 14 DCMR § 304.4 |
| `construction-liens-dc` | RECOMMENDED | SERVES_LANDLORD + CONSTRAINED_TERM | construction-liens | `no-liens-ar` | C2 | 14 DCMR § 304.4; § 40-301.01 |
| `criminal-activity-dc` | RECOMMENDED | SERVES_LANDLORD | criminal-activity | — | main | § 42-3505.01; 14 DCMR § 4300.11; 14 DCMR § 4302.2 |
| `default-by-tenant-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | default-by-tenant | `default-by-tenant` | main | 14 DCMR § 304.4; § 42-3509.01; § 42-3505.01; 14 DCMR § 4300.6; 14 DCMR § 4301.2 |
| `due-at-signing-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | due-at-signing | `due-at-signing` | main | 14 DCMR § 308.2; 14 DCMR § 308.1; § 42-3505.10; § 42-3501.03; 14 DCMR § 4307.8 |
| `early-termination-dc` | RECOMMENDED | SERVES_LANDLORD | early-termination | `early-termination-ks` | main | § 42-3505.52; § 42-3505.07; 14 DCMR § 302.1-.2; § 42-3505.54 |
| `energy-data-release-dc` | RECOMMENDED | SERVES_LANDLORD | energy-data-release | — | C4 | § 34-1507; § 34-1671.11; § 6-1451.03 |
| `governing-law-dc` | RECOMMENDED | SERVES_LANDLORD | governing-law | `governing-law` | main | § 1-204.04; § 1-206.01 |
| `holdover-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | holdover | `holdover-ca` | main | § 42-3505.01; § 42-3202; 14 DCMR § 4300.3; § 42-3207 |
| `keys-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | keys | `keys` | main | § 42-3505.10; 14 DCMR § 607.2; § 42-3505.08 |
| `landlords-access-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | landlord-entry | `landlords-access` | main | § 42-3505.51; § 8-231.06 |
| `landlords-access-short-notice-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | landlord-entry | — | main | § 42-3505.51; § 8-231.06 |
| `late-fee-dc` | CONSTRAINED/CONDITIONAL | CONSTRAINED_TERM + REQUIRED_DISCLOSURE: D.C. Code § 42-3505.31(b)(1); 14 DCMR § 4306.1 | late-fee | `late-fee` | main (merged with C1 draft) | § 42-3505.31; 14 DCMR § 4306.1; 14 DCMR § 4306.3; § 42-3509.01; 14 DCMR § 4306.8-.10 |
| `lead-based-paint-dc` | REQUIRED/CONDITIONAL | REQUIRED_DISCLOSURE: D.C. Code § 8-231.04(a)-(c), (f) | lead-based-paint | — | C6 | § 8-231.04 |
| `lead-state-notices-dc` | REQUIRED | REQUIRED_DISCLOSURE: D.C. Code § 8-231.04(e) + REQUIRED_DISCLOSURE: D.C. Code § 42-3271(a) | lead-state-notices | — | C6 | § 8-231.04; § 42-3271 |
| `parking-vehicle-rules-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | parking-vehicle-rules | `parking-vehicle-rules` | main | § 42-3502.11a; § 42-3501.03; § 50-2462; § 50-2431; § 50-2463 |
| `permitted-occupants-dc` | REQUIRED | REQUIRED_DISCLOSURE: 14 DCMR § 400.2 + SERVES_LANDLORD | permitted-occupants | `permitted-occupants` | C2 | 14 DCMR § 400.2; 14 DCMR § 402; § 2-1402.21 |
| `required-disclosures-dc` | REQUIRED | REQUIRED_DISCLOSURE: D.C. Code § 42-3502.05(d) + REQUIRED_DISCLOSURE: D.C. Code § 42-3502.13(d) + REQUIRED_DISCLOSURE: 14 DCMR § 300.1 | required-disclosures | — | C6 | § 42-3502.22; § 42-3502.05; § 42-3502.13; § 8-231.04; 14 DCMR § 300.1 |
| `security-deposit-return-dc` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | main (merged with C2 draft) | 14 DCMR § 309.1; 14 DCMR § 309.2; 14 DCMR § 308.7; 14 DCMR § 310.1; 14 DCMR § 310.4 |
| `security-deposit-use-dc` | REQUIRED/CONSTRAINED | REQUIRED_DISCLOSURE: 14 DCMR § 308.6 + CONSTRAINED_TERM | security-deposit-use | `security-deposit-use` | main (merged with C2 draft) | 14 DCMR § 308.6; 14 DCMR § 308.2; 14 DCMR § 308.3; 14 DCMR § 311.1; 14 DCMR § 311.2 |
| `sidewalk-snow-removal-dc` | RECOMMENDED | SERVES_LANDLORD | snow-removal | — | main | § 9-601; § 9-606 |
| `sublet-assign-dc` | CONDITIONAL/CONSTRAINED | SERVES_LANDLORD + CONSTRAINED_TERM | sublet-assign | `no-sublet-assign` | C2 | § 42-3505.55; § 42-3505.10; 14 DCMR § 4307.9; § 42-3502.06; § 30-201.02 |
| `tenant-death-contact-dc` | RECOMMENDED | SERVES_LANDLORD | tenant-death | `tenant-death-contact-nh` | main | § 42-3505.01a |
| `tenant-repair-agreement-dc` | RECOMMENDED/CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | tenant-repair-agreement | — | C2 | 14 DCMR § 301.1; 14 DCMR § 400.4; 14 DCMR § 304.1; § 9-601 |
| `termination-notice-dc` | CONSTRAINED | CONSTRAINED_TERM | termination-notice | — | C4 | § 42-3505.54; § 42-3505.53; § 42-3505.01; 14 DCMR § 4300.3; § 42-3205 |
| `unpaid-damages-interest-dc` | CONSTRAINED | CONSTRAINED_TERM + SERVES_LANDLORD | unpaid-damages-interest | — | C1 | § 28-3814; § 28-3301; § 28-3302; § 42-3505.31; § 42-3501.03 |
- Every optional clause opens "[Optional.]" (or a bracketed use note) and is never a default; `is_default` is blank on every row.
- **Merged or dropped canvass drafts (rule 27 [MD 5]):** `late-fee-dc` (C1's draft was a subset of the main row); `security-deposit-use-dc` (C2's (a)-(d) list of permitted uses and the § 42-3502.17(c)(2)-(3) wear-and-tear wording were merged into the main row); `security-deposit-return-dc` (C2's § 42-3502.17(e) notice of unpaid amounts — photographs, dispute statement, 30-day dispute window, 10-day reply — was merged; the main draft had left it to an education row although the statute ties the claim to "the terms of the lease agreement"); C1's draft security-deposit-holding clause (dropped; covered by the two deposit clauses); C1's sidewalk clause keyed to `governmental-fines` (its § 9-606(b) fine-reimbursement sentence merged into `sidewalk-snow-removal-dc`; its sanding sentence not, because § 9-601(b) is not delegable under (a)'s proviso); C4's draft District surrender clause (dropped: the shared `surrender-end-of-term` is lawful through its saving phrase, rule 28).
- **Narrowed canvass drafts:** `collection-fee-dc` and `unpaid-damages-interest-dc` (C1) were limited to amounts owed after the tenancy, after the § 42-3502.17(e) notice and dispute window (and, for collection, 60 days after the notice, § 42-3502.17(e)(4)); interest on late rent during the tenancy is not offered (§6.1). `lead-based-paint-dc` (C6) was made a companion of the federal `lead-based-paint` rather than an override, so the federal Lead Warning Statement and pamphlet acknowledgment stay in District leases.

### §3.2 District education rows (367 new)
- One or more rows per topic: C1 52, C2 52, C3 52, C4 52, C5 52, C6 53, C7 51, main pass 3 (`edu-exemption-ends-rent-dc`, `edu-hotel-conversion-ban-dc` and `edu-alteration-after-notice-dc`, all from gap discovery).
- By the opening of their notes: Present 211, Confirmed absent 151, mixed or partly absent 4, Not applicable 1 (`farmland-hunting-rights`). Ids of Present rows carry no `no-` prefix (rule 27); three canvass ids were renamed for that reason (`edu-nonrefundable-deposits-dc`, `edu-repair-fee-terms-dc`, and, after round 1 of the independent check found the 14 DCMR § 4300.19 rent suspension, `edu-condemned-premises-rent-dc`).
- Groups (all existing names): Default & Termination 69, Disclosures 46, Landlord Responsibilities 46, Notices & General 43, Rent & Payment 38, Tenant Responsibilities 32, Security Deposit 26, Rules & Regulations 25, Other / Miscellaneous 23, Parking & Storage 12, Compliance & Prohibited Terms 11, Pets 9, Access & Entry 9, Building & Safety 7 (counts include the clauses).
- Every row is VERIFIED; none is NEEDS_REVIEW. Where only case law could settle a point, the row states the cautious course (Part 5 policy).

### §3.3 Shared rows changed (55)
Each changed only in three fields, checked by script against the master (§8): `states` (";DC" appended), `notes` (a " | DC: …" segment appended) and `last_checked` (2026-10-20). The 54 tagged rows are listed in §2.1; the 55th is the dormant `landlords-access-hi-ky-ri-dc` (note only, still inactive; §5).

## §4 Layout and placement table (rule 40)
Batteries run from the corpus loader before drafting, over the whole Code, 14 DCMR and the court rules, first without a tenancy limb and then with one ("tenan", "lease", "lessor", "lessee", "landlord", "housing provider", "rental unit", "residential purposes", "lease of space", "rental agreement", "dwelling"), with number words spelled out:
| Battery | Query (short) | Hits | Result |
|---|---|---|---|
| DC-M-F01 | underlin* | 5 | none reaches residential lease text |
| DC-M-F02 | bold* | 24 | Rent Administrator elderly-increase notice "in bold, twelve (12)-point font" (§ 42-3502.24(f)(1); 14 DCMR § 4205) — a notice, not lease text; self-storage and locator contracts (not residential leases) |
| DC-M-F03 | conspicuous* | 239 | UCC goods leases, consumer credit, brokerage disclosures; none for residential lease text |
| DC-M-F04 | separate document/writing/instrument | 23 | none for a residential lease term |
| DC-M-F05 / F12 | substantially equivalent/similar form | 208 / 37 | F05's positive (§ 42-3505.01) recorded as failed (pattern lacked "substantively"), rerun as F12: prescribed notice texts (§ 42-3505.01(a-1)(2) "the following or substantively similar language") — notices, not lease text |
| DC-M-F06 / F13 | type size (number words, "point") | 44 / 18 | receivership notices 12-point (§ 42-3651.06; 14 DCMR § 6907); condominium foreclosure notice 18-point (§ 42-1903.13); inclusionary-zoning deeds (14 DCMR § 2216) — none for a lease |
| DC-M-F07 | capitals | 9 | brokerage-relationship disclosure "conspicuous, printed in bold lettering, all capitals, underlined, or within a separate box" (§ 42-1703(h)(1), buyer/seller); none for lease text |
| DC-M-F08 | plain language / legible | 67 | none reaches a residential lease |
| DC-M-F09 | first page / placement | 11 | none for a residential lease |
| DC-M-F11 | F01-F03, F07 with tenancy limb | 54 | read in context; no lease-text rule |
- **Result:** no District rule on type size, bold, underlining, capitals, placement or a separate document for residential lease text. **Lease-content hit:** a real estate licensee must disclose its brokerage relationship to a landlord or tenant it does not represent "in writing and included in all applications for lease or in the lease itself, whichever occurs first" (§ 47-2853.196(d); not for residential terms under 2 months) — answered in the required-disclosures education rows as a CONDITIONAL duty.
- **Omission sanctions that forfeit money:** no late fee unless the written lease states the maximum (§ 42-3505.31(b)(1)) and, for Rental Housing Act units, explicitly states the grace period (14 DCMR § 4306.1); deposit terms must be stated in the lease or on the receipt (14 DCMR § 308.6). Both are in District clauses. No two rules claim the same place in the lease, so no placement question arose for Taylor.

## §5 Dormant rows resolved (rule 25)
- **`landlords-access-hi-ky-ri-dc`: verified and left switched off.** Its "reasonable access ... during normal business hours" and unqualified "48 hours' notice" do not track § 42-3505.51: entry only for a listed reasonable purpose, on written notice at least 48 hours ahead (or a shorter period the tenant agrees to in writing), between 9 a.m. and 5 p.m. and not on a Sunday or federal holiday unless the tenant agrees, with a paper notice when an electronic notice is not acknowledged. The District is answered by `landlords-access-dc` and the optional `landlords-access-short-notice-dc`. The row's notes gain a " | DC: …" segment saying so; `is_active` stays FALSE and `states` is unchanged (it already lists DC).
- No other row was tagged DC or carried a `-dc` id before this pass.

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Every offered clause opens "[Optional.]" (or a bracketed use note) and is never a default. Lease-invoked wording was searched in the Code (DC-M-OPT01) and in 14 DCMR (DC-M-OPT02), and casualty rights in DC-M-CAS01.
**Offered (District clauses):**
- `landlords-access-short-notice-dc` — a shorter entry notice "as agreed to by the tenant in writing" (§ 42-3505.51(a)(1)), limited to repairs the tenant asked for and scheduled pest treatment, withdrawable for later entries. Canvass helper C3 read the statute as needing a later, specific writing; the main pass offered the narrow clause because the Office of the Tenant Advocate's Tenant Bill of Rights reads the rule as 48 hours unless the lease states otherwise or the tenant otherwise agrees.
- `sidewalk-snow-removal-dc` — delegation of the public-sidewalk snow duty "by written agreement" (§ 9-601(a)) and reimbursement of a fine "pursuant to the delegation of the owner's responsibility in a written agreement" (§ 9-606(b)).
- `sublet-assign-dc` — a sole-discretion ban, valid only if "the prohibition is included in the lease" (§ 42-3505.55).
- `criminal-activity-dc` — an illegal-act term tracking § 42-3505.01(c) (court determination; 30-day notice, or a 10-day notice for listed violent crimes with filing still deferred 30 days by 14 DCMR § 4302.2(a); another occupant's act counts only if the tenant knew or should have known that the illegal act was taking place).
- `collection-fee-dc` and `unpaid-damages-interest-dc` — express lease authority for a collection fee and interest (§ 28-3814(g)(3)-(4); § 28-3301(a)), offered narrowly for post-tenancy amounts only.
- `construction-liens-dc`, `tenant-repair-agreement-dc`, `bed-bug-cooperation-dc`, `energy-data-release-dc` (written consent to release utility data for benchmarking, § 34-1507(a)(1)).
- Constrained figures the lease sets: the late fee and a grace period longer than 5 days (§ 42-3505.31(b)(2); `late-fee-dc`); the early-termination fee option (`early-termination-dc`).
**Offered (shared clauses tagged DC):** `tenant-caused-damage-nm` (rule 54's tenant-caused-damage question: no District statute gives a general casualty exit or abatement — DC-M-CAS01 — but the clause's saving sentence preserves the regulatory rent suspension while a tenant of a covered unit is displaced by administrative order (14 DCMR § 4300.19) and the void-lease rule (14 DCMR § 302.2); lost rent is limited by § 42-3505.52 mitigation); `cannabis-restrictions-ak` and `smoking-policy` (§ 48-904.01(a)(1E)); `extended-absence-notice-ks`, `rent-concession-wi`, `furnishings-included-la`, `informal-dispute-resolution-or`; and the District's own `tenant-death-contact-dc` (an emergency contact, which also receives the eviction-day notice under § 42-3505.01a(d)(1)).
**Lawful options not offered, each with an education row:**
- Interest on late rent during the tenancy: lawful in principle under § 28-3301(a), but it would work as a second, repeating late charge beside the single 5% fee (§ 42-3505.31(c)(3)) and, demanded as a condition of occupancy, is rent (§ 42-3501.03(28)) that a rent-stabilized unit's ceiling governs; `edu-legal-interest-dc` says so.
- A landlord self-cure-and-bill clause and a no-notice animal-care entry clause (§2.3): `edu-no-landlord-self-cure-dc`, `edu-no-animal-care-entry-right-dc`.
**Not lawful, so no clause (education row says why):** landlord casualty termination and any landlord option to end the tenancy at the term's end or by notice (§ 42-3505.01; `casualty-termination-mt`, `owner-occupancy-termination-ar` untagged); mandatory arbitration in a residential lease (§ 16-4403(d)); a stipulated holdover rate for a paying tenant (with just cause no tenant "holds over" while rent is paid; the only statutory measure, double rent after the tenant's own notice, § 42-3207, is in `holdover-dc`); waiver of notice to quit under § 42-3208 (displaced for covered units by § 42-3505.01 and 14 DCMR § 304.1); an auto-renewal clause requiring more than 30 days' tenant notice unless §§ 42-3505.53-.54(b) are met.

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A; recommendation "Yes"): use the built-in browser on Taylor's linked computer to re-fetch about five Code sections from code.dccouncil.gov, check currency in LIMS, and fetch items the corpus README lists as missing (court forms, agency forms, a real District lease). Answer: "Yes (Recommended)".
No other question arose; every other legal and drafting call was made in the pass and is listed in §6.3.

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Illegal-act filing wait:** the 10-day notice for a dangerous crime or crime of violence (§ 42-3505.01(c)(2)(A)(i), D.C. Law 26-80) sits beside 14 DCMR § 4302.2(a), adopted earlier, which still bars filing until 30 days after an illegal-act notice. Rows give both and tell landlords to wait 30 days before filing (found in round 3, §13).
- **Nonpayment notice period:** § 42-3505.01(a-1)(1) now requires only 10 days' notice before filing (D.C. Law 26-80), but the statute's own prescribed text says the landlord may file if the balance is not paid "within 30 days of this notice", and 14 DCMR § 4300.6-.7 still say 30 days. Rows tell landlords to wait 30 days (cautious course) and flag the conflict (§10).
- **Coverage (kickoff lead 8):** the library handles the two coverage layers by stating scope in each row rather than building two clause sets. The Rental Housing Act's eviction, notice, fee, late-fee, entry and deposit rules reach every rental unit except the § 42-3502.05(e) exclusions; rent stabilization (§§ 42-3502.06-.16, 42-3502.11a, 14 DCMR § 3899) reaches only units not exempt under § 42-3502.05(a). Every District clause is lawful for both; where a rule binds only rent-stabilized units (no unapproved mandatory fees, no mid-lease increase, rent-history form in the lease), the clause either complies everywhere (`parking-vehicle-rules-dc` charges nothing for decals) or carries a bracketed limb (`required-disclosures-dc`).
- **§ 42-3509.07 sunset:** read literally, it ends subchapters V-A and V-B (late fees, entry, tenant notices) on 2030-12-31 along with rent stabilization; rows mention it only as having no present effect.
- **Fee ban (b-2) and tenant-caused costs:** a charge during the tenancy for work the owner must do is avoided; tenant-caused damage is recovered as damages or from the deposit under (b-2)(1)(B) (`keys-dc`, `detector-care-la` untagged, `landlord-self-cure-nm` NOT).
- **Unreturned keys:** whether a lost key is "damage" the deposit may cover is unsettled; `keys-dc` self-limits ("only to the extent District law allows").
- **DV lock-change cost:** § 42-3505.08(b) lets the landlord recover it within 45 days, but whether (b-2)'s ban on lock-related fees now bars that is unsettled; `keys-dc` promises no lock fee (lawful, and the cautious course the education rows give).
- **Late-fee validation:** `late-fee-dc` states its own 5-day floor and 5% cap; the builder should reject a `{{late_fee_amount}}` above 5% of `{{monthly_rent}}` or a `{{late_fee_grace_days}}` below 5 (§10).
- **Prepaid last month's rent:** whether it is "security" under 14 DCMR § 308 is unsettled; `due-at-signing-dc` omits it from its example and the education row tells landlords to count it toward the one-month cap.
- **Renewal for lead notices:** a month-to-month continuation is read as not a "renewal" for § 8-231.04(e) and § 42-3271; landlords are told to give the notices with any rent-increase notice in any case.
- **Two deposit notices:** 14 DCMR § 309.1(2)'s notice of intent to withhold (personal delivery or certified mail) and § 42-3502.17(e)(2)'s notice of unpaid amounts (personal delivery, e-mail or certified mail) are kept as two duties; one notice delivered personally or by certified mail to the forwarding address with the (e)(2) contents serves both.

### §6.4 Canvass helpers' questions and the main pass's answers
- **C1:** `collection-fee-dc` and `unpaid-damages-interest-dc` NEEDS_REVIEW → settled narrowly (§3.1, §6.1), rows VERIFIED. § 3899 "mandatory fee" breadth → rows read it as written (14 DCMR § 3899.2 lists utility and other non-opt-in fees) and limit it to rent-stabilized units.
- **C2:** shared-clause recommendations applied: `no-liens-ar`, `permitted-occupants`, `no-sublet-assign` overridden; `pest-cooperation-la` and `utilities-responsibility` untagged; `utilities-responsibility-ky` and `landlord-maintenance-nd` tagged; `smoking-policy` tagged. New variable `{{max_occupants}}` accepted (§10).
- **C3:** `keys-dc` DV sentence checked (consistent); `early-termination-dc` already preserves the § 42-3505.07 release; the shorter-entry-notice reading (§6.1); scheduled-services and showing addenda considered and not offered (both need per-event 48-hour written notice, which `landlords-access-dc` already gives); a tenant-side casualty clause not offered (no District statute to track; rows explain the common-law position is not searched).
- **C4:** `holdover-dc` supersedes `holdover-ca` (one `supersedes` per row; `holdover` is untagged); binding arbitration void; surrender variant dropped (§3.1); C4's claim that §§ 6-751.03-.10 and ch. 42-8 were missing from the corpus was wrong — the Council XML marks them placeholder="Repealed" — and later helpers were told so.
- **C5:** `assistance-animal-accommodation` overridden (§ 7-1006(b), (d)); `parking-vehicle-rules-dc` towing grounds narrowed to Title 50's definitions; § 42-306(b) seal and power-of-attorney rule flagged for the builder (§10).
- **C6:** `rules-ia` untagged and `rules-wi` tagged (14 DCMR § 4301.2); `lead-based-paint-dc` made a companion; `firearm-rules-la` stays untagged (its vehicle-storage sentence restates a Louisiana statute; rule 26).
- **C7:** `detector-care-la` stays untagged (§2.2); TOPA new-building notice before the lease (§ 42-3404.02b(d)(1)) is a pre-signing duty, answered in education rows.
- **TA/TB:** §2.3.

## §7 Open items, each with its search boundary
1. **Case law was not searched** (no case-law corpus). Each row that turns on one of these states the cautious course: whether the Consumer Protection Procedures Act reaches landlord-tenant transactions; the implied warranty's rent-abatement and withholding remedies; constructive eviction and quiet enjoyment (the Tenant Bill of Rights cites Caesar v. Westchester Corp., 280 A.3d 176 (D.C. 2022)); unconscionability under 14 DCMR § 301.2 of a collection-fee percentage or an interest rate near 24%; whether a lease clause counts as the tenant's written agreement to shorter entry notice; self-help eviction damages; whether a direct-threat exception applies to a service animal under § 7-1006(b); whether `early-termination-dc`'s fixed one-month fee could be attacked as a penalty (the clause makes it an option the tenant chooses and keeps the mitigation rule for a tenant who leaves without it).
2. **Not in the corpus:** 12 DCMR (Construction Codes: fire, sprinkler, window, balcony, water-heater rules), 15 DCMR (utility termination), 18 DCMR (towing), 20 DCMR (asbestos notices), 21 DCMR (water), 4 DCMR (Human Rights rules), 11 DCMR (zoning); the D.C. Register (Rent Administrator and OTA forms, rulemakings); the Court of Appeals Rule 49 (unauthorized practice, for LLC landlords in court); federal law (24 CFR, FAA preemption of § 16-4403(d)). Rows bound their absences accordingly.
3. **Unsettled readings stated as such in rows:** RUBS and utility overage charges in rent-stabilized units (§ 42-3505.11(b) vs 14 DCMR § 3899.2 and § 42-3502.11a); portal convenience fees vs (b-2)'s "administrative fees for third-party billing"; pet rent in a rent-stabilized unit; whether the Automatic Renewal Protections Act (ch. 28A-2) reaches residential leases; whether lease-scheduled increases satisfy § 42-3509.04(b)'s 60-day notice (rows advise a separate notice); price gouging (§§ 28-4101-4102) as applied to rent; foreclosure survival of the tenancy (just cause plus § 42-815.05(b); no express text); whether § 42-3505.10(b-2)'s ban on lock-related fees now bars the domestic-violence lock-change cost recovery in § 42-3505.08(b) (`keys-dc` charges nothing); whether an unreturned key is damage the deposit may cover.
4. **Tenant Bill of Rights date:** the revised version (FORM OTA 2026.09.25) becomes mandatory 90 days after its D.C. Register notice; the Register issue date was not found (the notice page does not print it and the dcregs search errored). Rows say to give the version OTA currently publishes.

## §8 Integrity checks on the delta
Run by `scripts/integrity.py` on the delivered delta and this log (rule 71; the pointer check covers every row id the log names, including its no-row lines).
| Check | Result | Detail |
|---|---|---|
| Encoding, BOM, row ends | Pass | UTF-8, no BOM, CRLF; 2,169,692 bytes, SHA-256 7b699aace66e4d30bddde516290127a717549ce4658d36e9d8b353921cc41d09 |
| Header identical to master | Pass | 17 columns |
| 17 fields on every row | Pass | 451 rows |
| Byte-exact round trip | Pass |  |
| Ids unique | Pass |  |
| New vs changed rows | Pass | 396 new, 55 existing changed |
| Existing rows: only states/notes/last_checked changed; master notes a verbatim prefix | Pass | 55 rows |
| New rows: states DC, active, dates 2026-10-20, notes start "DC: " | Pass |  |
| supersedes = first "Overrides `x`" note; target exists | Pass | 16 overrides |
| verification_status set on every row | Pass | all VERIFIED |
| lease_clause_basis on every clause, blank on education rows | Pass |  |
| rule_type values | Pass |  |
| Groups are existing names | Pass |  |
| Every topic has a District row (rule 27) | Pass | 360/360 |
| New {{variables}} listed in §10 | Pass | max_occupants |
| Row pointers in District notes resolve | Pass |  |
| Every row id named in the log exists (incl. no-row lines) | Pass | 193 names checked |
| "log §N" pointers in notes name existing log sections | Pass |  |
| No working-file or brief pointers in delivered rows | Pass |  |
| No "the state" wording in District education rows | Pass |  |
| §0 gap-discovery labels exact, Done with § reference | Pass |  |
| Log section order (rule 71) | Pass | §0 §1 §2 §3 §4 §5 §6 §7 §8 §9 §10 §11 §12 §13 §14 §15 §16 §17 §18 §19 Proposed SOP changes Proposed topic questions |
| Quote checker over every District notes segment | Pass | quotes 1294 bad 0 |
- **Assembly:** `scripts/assemble.py` builds the delta from the frozen row files plus once-only errata (`work/main/merge_config.py`), asserting each erratum's old text occurs exactly once; its own checks (field set, groups, rule_type values, supersedes against the first "Overrides" note, `[Optional.]` never default, no brief pointers, no working language) also pass. Rows: 396 new (29 clauses, 367 education) and 55 existing (54 tagged, 1 dormant note).

## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 54 tagged rows changed only in `states` (";DC" appended), `notes` (a " | DC: …" segment appended) and `last_checked` (2026-10-20); the dormant `landlords-access-hi-ky-ri-dc` changed only in `notes` and `last_checked`. The assembler checks that each master row's notes are a verbatim prefix of the delivered notes (§8).
- **Overrides** (`supersedes` set; the shared rows are untouched): the 16 in §2.2.
- **Companion, not override:** `lead-based-paint-dc` sits beside the tagged federal `lead-based-paint`; `landlords-access-short-notice-dc` beside `landlords-access-dc`; `sidewalk-snow-removal-dc` beside the tagged `snow-removal`.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
- **New builder variable:** `{{max_occupants}}` (used by `permitted-occupants-dc`): the maximum number of occupants the housing regulations permit for the unit (14 DCMR §§ 400.2, 402; the Human Rights Act presumption in § 2-1402.21(c)(2) that a limit stricter than 2 per efficiency or 2 per bedroom plus 1 discriminates against families with children). It needs hand entry or a calculator from the unit's floor areas.
- **Builder checks:**
  - Reject a `{{late_fee_amount}}` above 5% of `{{monthly_rent}}` and a `{{late_fee_grace_days}}` below 5 (§ 42-3505.31(a), (b)(2)).
  - Warn when `{{pet_deposit}}` plus `{{security_deposit}}` (plus any prepaid last month's rent) exceeds one month's rent (14 DCMR § 308.2).
  - Do not offer a no-pets choice for locally assisted housing for elderly persons or persons with disabilities (§§ 8-2031-8-2035).
  - **Signature block:** no estate in real property 'for a longer term than 1 year' may 'be created or take effect, except by deed signed and sealed by the grantor, lessor, or declarant, in person or by power of attorney or by will' (D.C. Code § 42-306(b)); agents may sign longer leases only for commercial property (D.C. Code § 42-306(c)). For District leases over 1 year the signature block needs a seal ("(SEAL)") and an attorney-in-fact line for a manager signing for the owner. Education rows `edu-lease-term-limitation-dc` and `edu-statute-of-frauds-lease-dc` explain it.
  - Never pair `informal-dispute-resolution-or` or any clause with a mandatory arbitration term (§ 16-4403(d)).
- **Legal watch (District):**
  - Nonpayment notice: § 42-3505.01(a-1)(1) (10 days) vs the prescribed text's "30 days" and 14 DCMR § 4300.6-.7; 14 DCMR § 4300.7(f) adds a redeemable-tenancy statement not in the statute.
  - Illegal-act notice: § 42-3505.01(c)(2)(A)(i) (10-day notice for violent crimes, cases filed after 2025-12-31) vs 14 DCMR § 4302.2(a) (no filing until 30 days after the notice).
  - § 16-1502a (2025 preliminary protective order at the ledger amount) vs Super. Ct. L&T R. 12-I (hearing first).
  - § 42-3509.07 sunset (2030-12-31) reads literally to reach subchapters V-A and V-B and IX.
  - Temporary laws: D.C. Law 26-136 (§ 42-3502.05(f) registration portal, expires 2027-01-22); D.C. Law 26-165 (21 DCMR § 431 DC Water shutoff notice of 30 working days, expires 2027-03-27); § 14-310 temporary text (expires 2027-05-08).
  - Codification pending: § 42-3505.71 (rent payment reporting) made permanent by D.C. Law 26-189; the Council's code still prints the emergency expiry note.
  - Enacted but Not Funded (watch for funding): D.C. Law 25-308 (pets in housing: separate pet deposit capped at 15% of rent, pet rent at 1%, no breed, size or weight limits); D.C. Law 25-262 (tenant EV charging right, § 6-1451.03d); D.C. Law 26-172 (§§ 28-3814, 28-3904 amendments); § 42-3502.17(d).
  - Tenant Bill of Rights revision: mandatory 90 days after its D.C. Register notice (date not found, §7).
  - D.C. Law 26-152 (§ 6-1415): single-stair rulemaking due by 2027-07-01.
- **Stale cross-references and text errors (rule 77):**
  - § 47-2828 is repealed but still cited by § 42-3505.01(q), § 16-1501(c)(1), Super. Ct. L&T R. 3(c)(1)(C) and R. 16(a)(4), and 14 DCMR § 200.1; 14 DCMR § 4300.4(b) cites § 47-2851.03(a)(6)(B) instead.
  - 14 DCMR § 315 is tied to the repealed § 42-3502.07.
  - § 2-1402.21(f)(1) cites § 4-1301.02(14), which now defines "kinship caregiver" (the law-enforcement definition is (15)).
  - 14 DCMR § 4302.3(e)(1) cites a nonexistent "§ 4202.1(a)"; 14 DCMR § 4300.1(c)(2) cites § 42-3505.01(e) for owner use, which is in (d).
  - § 42-3505.31(c)(5) reads "rather that" (sic).
  - 14 DCMR § 606.5 still names DCRA; frozen standards: 14 DCMR § 501.3 (1951 ASHVE guide), § 502.2 (1941 and 1961 Building Codes), § 904.3 (1986 Fire Prevention Code).
  - § 42-3505.55's history shows D.C. Act 26-416 § 2012(b) (tied to the new Title V-C); its text is unchanged.
- **Court publication out of date:** the Superior Court's "Checklist Supplement for NPR Cases" (2022-02) still refers to STAY DC and a payment plan "pursuant to D.C. Code. 42-3192.01", a section not in the current Code (battery DC-M-PP01).
- **Shared-row repair proposed (not made; rule 62):** `tenant-death-contact-nh` refers to "this Lease's Handling of Property Left Behind Section"; round 1 proposed adding "if this Lease has one", which is safe for every tagged state (each has such a section) and would let a state without one tag it. The District instead overrides it with `tenant-death-contact-dc`; Claude Code may make the uniform edit at sync.
- **For other states:** Hawaii's independent check found `pet-policy-or` untaggable there; its carve-out does reach negligence, so it stays tagged for the District (no change needed elsewhere).

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4. No District type-size, bold, capitals, underlining, placement or separate-document rule reaches residential lease text (batteries DC-M-F01-F09 without a tenancy limb, DC-M-F11-F13 with one, number words spelled out). The one lease-content hit is the brokerage-relationship disclosure (D.C. Code § 47-2853.196(d)), a CONDITIONAL row. Omission sanctions that forfeit money: no late fee unless the written lease states the maximum (D.C. Code § 42-3505.31(b)(1)) and, for Rental Housing Act units, the grace period (14 DCMR § 4306.1); deposit terms must be stated in the lease or receipt (14 DCMR § 308.6).
- **41 Just-cause:** the District is a just-cause jurisdiction. The end of the term does not end the tenancy (D.C. Code § 42-3505.01(a)(1); § 42-3202(b); 14 DCMR § 4300.3). `for-cause-eviction` carries the rule with every ground and notice period; `holdover-dc` and `default-by-tenant-dc` replace the shared clauses that end the tenancy at the term's end or on default.
- **42 Required text inside a shared clause:** the late-fee maximum and grace period (late-fee-dc), deposit terms (security-deposit-use-dc), the maximum number of occupants (permitted-occupants-dc, 14 DCMR § 400.2), and the sublet prohibition statement (sublet-assign-dc, § 42-3505.55) are written into District clauses.
- **43 Cure promises:** `default-by-tenant-dc` gives the 30-day notice to correct or vacate for lease violations (§ 42-3505.01(b)) and states the nonpayment notices (§ 42-3505.01(a-1)); the tenant's right to redeem before the eviction is completed (Super. Ct. L&T R. 14-II; L&T Form 6) is not waived or capped. No no-cure carve-out is offered except where § 42-3505.01 itself allows one.
- **44 Terms the statute turns into landlord duties:** a listed appliance or facility becomes a "related facility" whose later removal is a reduction in facilities for a rent-stabilized unit (D.C. Code §§ 42-3501.03(26), 42-3502.11); the implied warranty covers the whole housing code (14 DCMR § 301.1). Noted on `appliances-included` and `services-utilities-provided-ks-oh`.
- **45 Electronic notices:** the District UETA (D.C. Code ch. 28-49) has no landlord-tenant exclusion; a record must be capable of retention (§ 28-4907(a), (c)), a law prescribing a delivery method still governs (§ 28-4907(b)), and the right to refuse further electronic dealings cannot be waived (§ 28-4904(c)). Entry notices may be electronic only with the tenant's written acknowledgment (§ 42-3505.51(a)(1)); nonpayment notices go by certified mail and hand delivery or posting (§ 42-3505.01(a-1)(3)); notices to quit by § 42-3206's methods. `electronic-notice-ma` and `notices` defer to those methods.
- **46 The lease as the required notice:** the lease is a permitted vehicle for the maximum-occupants notice (14 DCMR § 400.2), the late-fee maximum (§ 42-3505.31(b)(1)) and the deposit terms (14 DCMR § 308.6); no District statute lets a lease paragraph replace a notice to vacate. `addendum-precedence` ranks required disclosures above the lease.
- **47 Penalties for knowingly using a prohibited term:** treble damages for a bad-faith violation of §§ 42-3505.53-.55 or 14 DCMR § 304 (D.C. Code § 42-3509.01(a-2)); excess or treble and $100-$5,000 fines for late-fee violations (§ 42-3509.01(a-1)); civil fines up to $5,000 for willful violations (§ 42-3509.01(b)). The debt-collection law reaches a landlord collecting its own rent or other amounts more than 30 days past due (D.C. Code § 28-3814(b)), so collecting under a void fee term can be an unfair collection practice (§ 28-3814(g)(4)).
- **48 Separate-document requirements:** none for residential lease terms. The sidewalk-snow delegation needs only a "written agreement" (§ 9-601(a)), which the lease supplies. Chores are allocated by the housing code itself (14 DCMR §§ 800-805), so `landscaping-irrigation` and `snow-removal` are tagged without a single-family limit; `tenant-repair-agreement-dc` (canvass C2) is the optional repair agreement.
- **49 Collection-cost bans:** a residential lease may not require the tenant to pay the owner's court costs or legal fees (14 DCMR § 304.4). Every shared clause that shifts "costs and expenses" or attorney's fees is untagged (§2.2 class decision); `collection-fee-dc` excludes attorney's fees and court costs. No District statute makes a one-way fee clause reciprocal (none needed, since none is offered).
- **50 "The lease controls" wording:** choices the law leaves to the lease are made on purpose: a longer late-fee grace period (§ 42-3505.31(b)(2)); a shorter entry notice by the tenant's written agreement (§ 42-3505.51(a)(1); optional `landlords-access-short-notice-dc`); a sole-discretion sublet ban (§ 42-3505.55); a longer tenant notice only on the § 42-3505.53/.54 conditions; the sidewalk-snow delegation and fine reimbursement (§§ 9-601(a), 9-606(b)); notice-to-quit terms under § 42-3208, which § 42-3505.01 overrides for a landlord's notice.
- **51 Plain-language and consumer-contract statutes:** the District has no plain-language lease statute (formatting batteries). The Consumer Protection Procedures Act defines its terms to include leases (D.C. Code § 28-3901) and lists unfair practices, including the all-in pricing rule (§ 28-3904(a)(12), D.C. Law 26-187); whether the CPPA reaches landlord-tenant transactions is case law, not searched (§7). The housing regulations let a court void unconscionable lease provisions (14 DCMR § 301.2).
- **52 Exculpation and liability waivers:** 14 DCMR § 304.3 forbids any lease provision exempting or limiting the owner's liability for its negligence. Class decision in §2.2: `parking`, `storage-space`, `tenants-property-insurance` and similar disclaimers are untagged; the `-ks-oh-ca` variants without the disclaimer are tagged.
- **53 A figure that contradicts a shared clause:** `late-fee` (any figure), `landlords-access` (24 hours, business hours), `security-deposit-use` (no cap), `early-termination-ks` (30% of remaining rent), `holdover-ca` (holdover rent after the lease ends, where the District's double rent applies only after the tenant's own notice, § 42-3207) and `due-at-signing` (separate pet deposit and last month's rent above the one-month cap) are overridden. `holdover-dc` charges double rent only for the days the tenant wrongfully stays after its own notice, in place of regular rent, and no daily charge runs after a nonpayment termination because the tenant may redeem until the eviction is completed.

## §12 Other Step C screens
- **30 Read beyond the section:** read whole in the main pass: ch. 42-35 (all subchapters), ch. 42-32, § 42-3541 (criminal screening), Title 16 ch. 15, the L&T Rules, 14 DCMR chs. 1 (§§ 101, 106), 3, 4-9, 41-43, §§ 8-231.01-.13, 8-241.01-.05, 42-3271, and the Charter (§17); the canvass helpers read the neighbouring sections of every section they cited. Section titles were never trusted: §§ 6-751.03-.10, read as a gap by one helper, are repealed placeholders.
- **31 Enacted twice:** late fee (§ 42-3505.31 and 14 DCMR § 4306: the regulation adds that the lease must "explicitly" state the grace period — both stated in `late-fee-dc`); nonpayment notice (statute 10 days, regulation 30 — rows say wait 30); protective orders (§ 16-1502a vs L&T R. 12-I — both described); tenant notice to vacate (§ 42-3202(b) and § 42-3505.54 — the same 30 days to the first of a month; `termination-notice-dc`); deposit (§ 42-3502.17 and 14 DCMR §§ 308-311 — both in the deposit clauses).
- **32 Coverage by place or size:** the District is a single jurisdiction (no county or municipal layer). Size and ownership change coverage: rent stabilization's exemptions (§ 42-3502.05(a): subsidized, built after 1975, small owner with 4 or fewer units and a filed claim, cooperatives), the criminal-screening exclusion for owner-occupied buildings of 3 or fewer units (§ 42-3541.03), TOPA's tiers (single-family, 2-4 units, 5+ units), multiple-dwelling water testing (§ 42-3252: 3+ units). Each row states its scope; every District clause is lawful for every unit (§6.3).
- **33 Real lease:** §15.
- **34 Landlord scenarios:** §16.
- **35 Outside-title search:** §17.
- **36 Topics top-down:** every one of the 360 topics in `lease-clause-topics.md` has a District row keyed to it (script, §8); each answer is Present, Confirmed absent or Not applicable with its search boundary.
- **37 Tenancy type:** rows say where an answer differs: the tenant's 30-day notice runs to the first of a month for periodic tenancies (§ 42-3505.54) and a longer notice for a fixed term only on § 42-3505.53's conditions; just cause applies to fixed-term and periodic tenancies alike; `early-termination-dc`'s fee applies only to a fixed Term; deposit interest is due only on tenancies of 12 months or more (14 DCMR § 311.2); the § 8-231.04(e) lead notice follows each lease, renewal and rent-increase notice.
- **38 No imported structure:** every eviction ground, notice period and cure right was taken from § 42-3505.01 and 14 DCMR chs. 43 themselves; the District has no casualty-termination, abandonment-retaking or self-cure statute, and rows say so rather than borrowing another state's.
- **39 Court rules and forms:** the L&T Rules were read whole (redemption R. 14-II; ledgers to every hearing R. 10(b); default only if the complaint meets § 16-1501 and § 42-3505.01, R. 11(b)(3)(E); SCRA affidavit R. 14(c)(1); costs R. 15(b); corporations and partnerships appear only through a D.C. Bar member, R. 9(b)). Court forms screened 2026-10-20 in the built-in browser, text extracted with pdf.js (hashes in `src/court/lt-forms-2026-10-20.md`): Form 1A (fees "defined as rent" in the lease can be part of the possession claim only for a unit "not subsidized and is exempt from rent control"; late fees go only in the money judgment; $600 floor), Form 1B (lease-violation conduct within six months of notice; no cure right only in federally subsidized housing), L&T Form 6 (the tenant may redeem before the eviction is completed and the landlord must accept; at the eviction only cash, cashier's check or money order; late fees and other costs excluded unless a judge approves), the summons and writ forms. These are cited as court publications in the rows that turn on them. Computation of time (rule 39 [LA 3]): Super. Ct. Civ. R. 6(a), which L&T R. 2 applies in Landlord and Tenant cases, governs 'any statute that does not specify a method of computing time': count every day, including weekends and holidays, and carry a last day that falls on a weekend or legal holiday to the next such day that is not one. District periods that exclude days say so themselves (14 DCMR § 310.1 excludes Saturdays, Sundays and holidays for the deposit inspection; § 42-3505.01a's 7-day storage excludes Sundays and federal holidays; § 42-3505.08(a) counts business days), and the rows state those as written.

## §13 Independent check (rule 80)
The check used one agent per round, run one at a time, for at most three rounds (kickoff limit), with briefs in `work/check/` (CHECK-BRIEF, with round-specific versions). Each checker was told:
- to check against the statute and regulation text, not the notes, because earlier findings (helpers', the main pass's or an earlier round's) may be wrong;
- to read every section whole with `dclib.show` (which prints the whole section and its history notes) and to check that each single-quoted passage supports the claim it is used for;
- to write every ERROR and FIX as an exact old-to-new erratum whose old text occurs once in its field, and to quote any subsection a proposed wording relies on;
- to save a line per row as it went, so an interruption loses nothing.
The row generators were frozen when round 1 started; every later change went in as a once-only erratum (`work/main/merge_config.py`, asserted by the assembler), so a regeneration cannot undo one (rule 80 [MS 7]).

### Round 1 (all 451 delivered rows: 28 District clauses, 56 shared rows with their District segments, 367 education rows)
- **Findings:** ERROR 4, FIX 34, NOTE 7, on 38 rows; 413 rows OK.
- **ERRORs (all applied after the main pass re-read the cited text):** three rows said nothing suspends rent when a covered unit becomes unsafe, but 'The displacement of a tenant by administrative order due to unsafe premises shall suspend the tenant's obligation to pay rent but shall not terminate a lawful tenancy unless and until the unit has been offered for reoccupation to the tenant and the tenant has waived that right.' (14 DCMR § 4300.19) (`edu-condemned-premises-rent-dc`, renamed from its `no-` id; `edu-no-disaster-tenancy-rule-dc`); energy benchmarking reaches buildings of 10,000 square feet since 2025, not only 50,000 (§ 6-1451.03(c)(2)(B)(vi); `edu-energy-data-release-dc`); an owner who raises rents to pay an energy-loan assessment must pass the savings through (§ 47-895.32(c); `edu-no-meter-conservation-charge-dc`).
- **FIX patterns:** (1) 16 single-quoted passages cut at a possessive apostrophe with the remainder pasted after the citation (a canvass helper's quoting script); the main pass then extended `scripts/quotecheck.py` to flag any quote whose source continues with "'s", which found 6 more (21 in all), all repaired; (2) the 10-day notice to vacate for a dangerous crime or crime of violence (§ 42-3505.01(c)(2), cases filed after 2025-12-31) missing or stated without its conditions (`criminal-activity-dc`, `edu-police-call-protection-dc`, `edu-cares-act-notice`), and `default-by-tenant-dc` promising a 30-day cure for grounds that have none (now excepted); (3) the domestic-violence lock-change reimbursement (§ 42-3505.08(b)) stated as settled despite the (b-2) ban on lock-related fees (`edu-dv-lock-change-dc`, `edu-statutory-caps-dc` now give the cautious course, consistent with `keys-dc`); (4) single fixes on scope or accuracy (`edu-application-disclosures-dc`, `edu-association-rules-tenants-dc`, `edu-abandoned-property-dc`, `edu-landlord-registration-dc`, `edu-exemption-ends-rent-dc`, `edu-surrender-end-of-term-dc`, `smoking-policy`, `tenant-caused-damage-nm`).
- **Shared-clause finding:** `tenant-death-contact-nh` cross-references a "Handling of Property Left Behind Section" that a District lease lacks. The checker proposed a uniform edit ("if this Lease has one"); the main pass did not edit the shared text (rule 62) and instead overrode it with `tenant-death-contact-dc` (§2.2, §10).
- **NOTEs acted on:** § 4300.19 added to `edu-no-casualty-statute-dc` and `edu-violation-report-disclosure-dc`; the repealed basis of 14 DCMR § 315 noted in `edu-nonrefundable-deposits-dc`; the rent-ceiling question noted on `holdover-dc` and `pet-policy-or`. Not acted on: the condominium notice "before occupancy" for a tenant already in place (the clause is for new tenancies) and the `landlord-maintenance` cost-allocation note (no change needed).
- **Checker's own repair:** partway through, the checker wrote 139 OK lines against the wrong ids (it used the whole-library id list for row order); it removed them and rewrote OK lines for the rows it had actually checked, by index. Its ERROR and FIX lines used explicit ids and were unaffected. The main pass accepted the repair because every ERROR and FIX row was re-read, and round 2 re-checked every edited row.
- **Main-pass edits made between rounds 1 and 2** (also sent to round 2): `edu-rent-reporting-dc` (permanent law, §1.2); citation placement and quote style in nine main clauses' notes; `assistance-animal-accommodation-dc` rule_type to RECOMMENDED; `holdover-dc` battery pointer.

### Round 2 (51 rows edited since round 1, each with its previous text)
- **Findings:** ERROR 0, FIX 18 (plus 4 lines on `states`, an artefact of the round-2 export that omitted ";DC" on shared rows; the delivered delta carries DC, §8), NOTE 3; 33 rows OK.
- **Verified from round 1:** the § 4300.19 sentences, the 10-day-notice conditions in `criminal-activity-dc` and `edu-cares-act-notice`, the lock-change wording, and every repaired quote.
- **FIXes applied:** the § 4300.19 waiver condition restored in `edu-no-disaster-tenancy-rule-dc` and limited to Rental Housing Act units in `tenant-caused-damage-nm`; "self-defense or defense of another" in `edu-police-call-protection-dc`; `smoking-policy` no longer says the fee ban "expressly preserves" odor remediation; `edu-application-disclosures-dc` now says to list any pending petition or surcharge for an exempt unit (or say there is none); the § 34-1261.01(a)(2) exception added; `edu-rent-reporting-dc` title; sections-read lists and bases completed in five rows; `edu-surrender-end-of-term-dc`'s two sentences reconciled; a stray single-quoted internal term in `holdover-dc`; quote style in `edu-cares-act-notice`.
- **NOTEs acted on:** the 10-day exception added to `edu-no-residential-use-only-dc`; `edu-no-tenant-death-statute-dc` now points to `tenant-death-contact-dc`. The third NOTE (the checker could not verify D.C. Law 26-189 from the corpus) is answered by the main pass's reading of the enrolled text in LIMS (§1.2).

### Round 3 (last round)
- **Findings:** 29 rows (17 edited since round 2, 12 in a consistency set resting on the illegal-act notice, § 4300.19 and the lock-change cost). ERROR 0, FIX 9 on 6 rows, NOTE 1; 23 rows OK.
- **Verified:** every § 4300.19 sentence and quote; the 10-day-notice conditions; the lock-change wording in `edu-dv-lock-change-dc` and `keys-dc`; the round-2 changes to `edu-application-disclosures-dc`, `edu-surrender-end-of-term-dc`, `edu-rent-reporting-dc` and `edu-energy-data-release-dc`.
- **New finding across rows:** the 10-day illegal-act notice (§ 42-3505.01(c)(2)(A)(i), D.C. Law 26-80) collides with 14 DCMR § 4302.2(a), which still bars filing until 'no less than thirty (30) days' (14 DCMR § 4302.2(a)) after an illegal-act notice — the same split as the nonpayment notice. The main pass re-read § 4302.2 and applied the round's FIXes and the same cautious course (wait 30 days before filing) to the seven other rows the checker named, and recorded it on `criminal-activity-dc` (§6.3, §10).
- **Round 3 still produced changes, so it was the last round (kickoff limit).** Its errata were applied, and these rows are listed for Claude Code to read against the statute at sync:

### Edited after the last check
| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `criminal-activity-dc` | round 3 | round 3 | notes: § 4302.2(a) 30-day filing wait recorded (round-3 NOTE) |
| `edu-association-rules-tenants-dc` | round 3 | round 3 | notes: citation widened to § 34-1261.01(a)(1)-(2), (c) (round-3 FIX) |
| `edu-criminal-activity-dc` | round 1 | round 3 | body and notes: 30-day filing wait under 14 DCMR § 4302.2(a) added beside the 10-day notice (main pass, round-3 cross-row finding) |
| `edu-cure-and-eviction-grounds-dc` | round 1 | round 3 | same filing-wait addition |
| `edu-expedited-criminal-eviction-dc` | round 1 | round 3 | same filing-wait addition |
| `edu-for-cause-eviction-dc` | round 1 | round 3 | same filing-wait addition |
| `edu-keys-locks-dc` | round 3 | round 3 | body: DV lock-change cost given the cautious course (do not charge), trigger and cap restored (round-3 FIX) |
| `edu-no-disturbance-dc` | round 1 | round 3 | same filing-wait addition; knowledge test reworded to "knew or should have known that the illegal act was taking place" |
| `edu-no-drug-free-addendum-dc` | round 1 | round 3 | same filing-wait addition |
| `edu-no-purpose-limitation-dc` | round 1 | round 3 | same filing-wait addition; knowledge test reworded as above |
| `edu-no-residential-use-only-dc` | round 3 | round 3 | body and notes: 10-day notice condition, knowledge test, filing wait (round-3 FIXes) |
| `edu-police-call-protection-dc` | round 3 | round 3 | body and notes: filing wait added (round-3 FIXes) |
| `smoking-policy` | round 3 | round 3 | District notes segment: cautious course for odor remediation stated; § 42-3502.17(e)(2)(A)(ii) added (round-3 FIX) |

## §14 Gap-discovery source 1 — statute walk (rule 29)
- **Read whole, section-open, in the main pass (NOTES law map):** D.C. Code ch. 42-35 (Rental Housing Act of 1985, subchapters I-IX, including V-A late fees, V-B entry and tenant notices, and the 2026 amendments by D.C. Laws 26-80, 26-156 and 26-187), ch. 42-32 (landlord and tenant general provisions), ch. 42-35B/42-3541 (criminal record screening), Title 16 ch. 15 (landlord and tenant actions), 14 DCMR chs. 1 (§§ 101, 106), 3 (§§ 300-399 landlord and tenant), 4-9 (housing code duties) and 41-43 (rent stabilization and evictions), the Superior Court Landlord and Tenant Rules (all), §§ 8-231.01-.13 (lead), 8-241.01-.05 (mold), and § 42-3271. Neighbouring sections were read after each answer (rule 30).
- **Diff** (`work/main/statute_walk.py` over every delivered District row and the District segments of the tagged shared rows): 170 sections in D.C. Code chs. 42-32, 42-35 (with 42-3531, 42-3541, 42-3551) and 16-15; 14 repealed or reserved; 99 cited by at least one District row; 57 live sections uncited before the walk's own additions. Of 59 sections of 14 DCMR ch. 3 and chs. 41-43, 39 are cited and 20 are not (3 reserved, 2 repealed).
- **Uncited sections, classified:**
  - Agency structure, funds, findings, reports and rulemaking (no landlord duty): §§ 42-3501.01-.02; 42-3502.01-.02b; 42-3502.03-.03b, .03e, .04a-.04c; 42-3502.20, .23; 42-3504.02; 42-3507.05; 42-3508.01-.05 (tax abatement and distressed-property programs); 42-3509.03; 42-3531.01-.02, .05-.06, .09-.10, .12-.14, .16 (Office of the Tenant Advocate and its funds); 42-3541.06-.07, .09.
  - Tenant Assistance Program (government payments to eligible families; no lease term): §§ 42-3503.01-.08.
  - Rent-stabilization petitions and procedure (housing-provider petitions, adjustment procedure, remedy, judicial review) and their rules: §§ 42-3502.10, .12, .14, .16, .18, .19; 14 DCMR §§ 4201, 4204, 4206, 4208, 4210, 4212, 4217, 4199, 4299. The District's rent-stabilization education rows state the caps, notice and elderly/disability limits; petition practice is agency procedure, not lease content.
  - Registration and exemption filings: 14 DCMR §§ 4104 (defective registration), 4106 (claims of exemption), 4108 (cooperative exemption), 4109 (registration fee). Read; covered in substance by the registration and exemption rows (a claim of exemption must be filed for an exemption to exist, 14 DCMR § 4106.1).
  - Online filing (§ 42-3502.03d) and forms defining "rent charged" (§ 42-3502.22a): agency form duties; no lease term.
  - Leases held by minors or persons with a mental disability, and actions of debt on life leases (§§ 42-3220, 42-3223, 42-3226-.3228): estate-administration rules outside a residential lease library; no row.
  - Lead-in-water enforcement procedure (§§ 42-3253-.3255): government notice-of-violation and fines; the landlord duties (§§ 42-3252, 42-3271) are cited.
  - Judgment and execution for possession (§ 16-1503): court procedure; the eviction-process rows cite the L&T Rules that carry it out.
  - Unit-reduction fee (§ 42-3509.10): a fee owed to the Mayor when a 4-10 unit building reduces its units; development, not lease content. Recorded, no row.
- **Gaps the walk found, now filled:** (1) conversion of rental housing to hotel or other transient use is banned (§§ 42-3506.01-.02) → `edu-hotel-conversion-ban-dc`; (2) rent caps and the 30-day refiling duty when an exemption ends (§ 42-3502.09; 14 DCMR §§ 4202-4203) → `edu-exemption-ends-rent-dc` (also found by the scenario screen, §16).
- **One level down (sections cited only in part):** §§ 42-3505.01 (every live subsection from (a) to (t) is cited by at least one row: just cause, nonpayment notices, grounds and notice periods, weather bar, ERAP stays; (l) is expired and (o)-(p) are repealed), 42-3505.10 ((b), (b-1), (b-2), (c), (d)), 42-3502.17 ((a), (c), (e)), 42-3502.22 ((b)(1)(A)-(L), (1A), (1B), (2)), 42-3505.51 ((a)(1)-(3), (b)(1)-(3)) and 14 DCMR §§ 308-311 were checked subdivision by subdivision against the rows; § 42-3502.17(d) is Not Funded and correctly uncited.

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)
- **Search for a professional District lease.** The Greater Capital Area Association of REALTORS® residential lease is available only to members; a formspal.com page offering a "GCAAR lease" was an HTML page, not the form, and was rejected; generic multi-state template sites (lawinsider and similar) were excluded under rule 33. No apartment-association or property-manager District lease was found free. Per rule 33 the best free District lease was used, as a lead only: the District of Columbia Housing Authority's public-housing dwelling lease.
- **Lease used:** DCHA "Sample Lease" (English), https://www.dchousing.org/wordpress/wp-content/uploads/2022/05/Sample-Lease-English.pdf, publisher District of Columbia Housing Authority, upload path dated 2022-05 (no edition date printed), 29 pages, 1,796,016 bytes, SHA-256 18b7e9dc…; text extracted with pdf.js in Taylor's built-in browser (96,477 characters, SHA-256 ddc3e3de…), saved as `src/lease/dc-dcha-sample-lease-text.txt` (hash re-checked in the container). It is DCHA's own lease, not a relabelled template (its articles track HUD's public-housing lease rules and DCHA's 14 DCMR chs. 57-64 policies).
- **Why it is weaker:** it is a public-housing lease governed by federal rules (24 CFR part 966) and DCHA's own regulations, so its rent, recertification, transfer, community-service, grievance and "Schedule of Charges" terms do not reflect a private landlord's position, and several of its charges (lock-out, replacement-key and other posted charges; a late charge with no grace period) would collide with the District's private-housing fee and late-fee rules (D.C. Code §§ 42-3505.10(b-2), 42-3505.31). It was used only as a lead about subjects and wording, never as law. The Office of the Tenant Advocate's revised Tenant Bill of Rights (FORM OTA 2026.09.25) and Tenant Resource Guide were read beside it as the official handbook (rule 33 [AK 5]; §1).
- **Map by article (lease article → District rows):**
  | DCHA article | District rows |
  |---|---|
  | II Description of premises | shared clauses on property and appliances (`appliances-included`) |
  | III Household members | `permitted-occupants-dc`; occupancy and fair-housing education rows |
  | IV Visitors, guests, live-in aides | `guest-policy`, `guest-policy-day-limit` (tagged); assistance/aide accommodation via `assistance-animal-accommodation-dc` and fair-housing rows |
  | V Effective date and term | `holdover-dc`, `termination-notice-dc`, `surrender-end-of-term` |
  | VI Security deposit | `security-deposit-use-dc`, `security-deposit-return-dc`, `due-at-signing-dc` |
  | VII Rent and other charges | `late-fee-dc`, `returned-payments`, `acceptable-payment-methods`, fee-ban education rows |
  | VIII Use of premises | `residential-use-only`, `no-disturbance`, `parking-vehicle-rules-dc`, `criminal-activity-dc` |
  | IX Community service; X Recertification; XI Transfers | public-housing only (federal); no private-lease subject |
  | XII Keys, locks, entry devices | `keys-dc` (no fee for keys, locks, lock changes or re-keying; DV lock change) |
  | XIII Fire | `tenant-caused-damage-nm`, `fire-safety-grilling`; casualty education rows (no District casualty statute) |
  | XIV Pets and service animals | `pet-policy-or`, `assistance-animal-accommodation-dc` |
  | XV Inspections and entries | `landlords-access-dc`, `inspection-rights`, optional `landlords-access-short-notice-dc` |
  | XVI Move-out / deposit refund | `security-deposit-return-dc` (45-day notice of unpaid amounts with photos), `surrender-end-of-term` |
  | XVII Authority responsibilities | `landlord-maintenance`, `landlord-maintenance-nd` |
  | XVIII Additional lessee obligations | `tenant-maintenance`, `rules-wi`, `no-alterations`, `bed-bug-cooperation-dc` |
  | XIX Termination by lessee | `termination-notice-dc`, `early-termination-dc` (DV release preserved) |
  | XX Termination by authority | `default-by-tenant-dc`, for-cause education rows (just cause) |
  | XXI Notices | `notices`, `electronic-notice-ma` |
  | XXII Grievance procedure | public-housing only; `informal-dispute-resolution-or` for private leases |
  | XXIII Miscellaneous; XXIV Representations | `entire-agreement`, `severability`, `rental-application-accuracy` |
- **Leads it produced:** (1) its § 18.2.3 preserves the intrafamily-offense protections of D.C. Code § 42-3505.01(c-1); eight District rows already cite § 42-3505.01(c-1). (2) Its lock-out and replacement-key charges prompted a re-check of `keys-dc` against § 42-3505.10(b-2): the District clause's no-fee promise stands. (3) Its forwarding-address and last-known-address mailing step matches § 42-3502.17(e)(1) and 14 DCMR § 309.1(2), both in `security-deposit-return-dc`. No lease article revealed a subject without a District row; no shared row was changed because of it (rule 62 not triggered).

## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 172 (`work/main/scenarios.tsv`), from advertising and screening through signing, move-in money, rent, repairs, entry, the tenancy, sale and conversion, ending the tenancy, and eviction (advertise 5, screen 17, sign 19, move-in 10, rent 21, repairs 14, entry 4, tenancy 48, end 12, evict 22). District-specific scenarios added: application-fee cap and the one-fee-in-30-days rule; holding deposits from voucher holders; the criminal-screening exclusion for small owner-occupied buildings; renting a condominium or cooperative unit; the exempt-unit notice and the rent-history form; a lease over one year signed by a manager; mandatory arbitration; elderly and disabled rent caps; voluntary agreements and petitions; an exemption ending; common-area and vacant-unit utility charges from 2027; a tenant taking water service in its own name; DC Water shutoff notice; receiverships; vacant-building registration; business licence and inspection; the domestic-violence lock change and lease release; non-resident owner's agent; owner move-in, sale-for-personal-use and rehabilitation notices; protective orders; the 75-day writ; extreme-weather days; ERAP stays.
- **Run:** each scenario's search terms were run against every delivered District row and tag segment (`work/main/scenario_screen.py`).
- **No row found → searched and resolved:**
  - *Rent when a rent-stabilization exemption ends:* § 42-3502.09 and 14 DCMR § 4203 read → new row `edu-exemption-ends-rent-dc`.
  - *Window guards:* answered by canvass row `edu-no-window-guard-rule-dc` (confirmed absent in the corpus; 12 DCMR not in corpus).
  - *Rental housing locators:* § 28-3819 read: it regulates locators who charge prospective tenants, and excludes "a rental unit owned or managed by such person"; it puts no duty on a landlord — no row needed.
  - *Payments applied to fees before rent:* answered by the tagged `application-of-payments` (its tag note: no District statutory payment order; consistent with § 42-3505.31(c)(2)); the screen's text search missed it only because tag segments carry the reason, not the clause text.

## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus and engine:** local batteries over the whole D.C. Code (24,762 section records), 14 DCMR and the court rules (§1.5).
- **Charter:** §1.3. The District has no constitution; the Home Rule Act's 139 sections were proved complete against the official index and searched with controls (DC-M-CH01-07): no provision reaches a private residential lease or protects tenant conduct; § 1-206.02's limits bind only the Council; the federal Constitution is outside District-law scope.
- **Whole-Code tenancy battery DC-M-OT01** (landlord, tenant, tenancy, lessee, lessor, housing provider, rental unit, residential lease; positive § 42-3505.51 passed): 774 hits; 422 outside Title 42 and ch. 16-15 after dropping UCC goods-lease articles, listed in `work/main/ot01_hits.tsv` and read by heading and context. Most concern government leasing, tax abatements, business improvement districts and assistance programs. Those reaching private residential leases, and where they are answered:
  - § 34-1261.01 (a residential landlord may not interfere with cable installation): utility and telecom rows.
  - §§ 6-731.01-.04 (no alteration making a unit uninhabitable after a notice to vacate; a crime): **new row `edu-alteration-after-notice-dc`**.
  - §§ 42-3506.01-.02 (no conversion or demolition of rental housing for hotel or transient use; found by the statute walk, §14): **new row `edu-hotel-conversion-ban-dc`**.
  - § 7-1006 (disability access, service animals, documentation limits): `assistance-animal-accommodation-dc`.
  - §§ 8-2031-8-2035 (pets in locally assisted elderly and disability housing): pet rows.
  - §§ 34-2301-.2304, 34-2407.01 (water service in the tenant's name; receivers; shutoffs), §§ 34-1551-.1553 (submetering), § 34-1507 (energy data): utility rows and `energy-data-release-dc`.
  - § 30-201.07 (a short-term rental guest is not a tenant): sublet and short-term rows.
  - §§ 16-1101-.1124 (ejectment), § 40-301.03 (a lessee can be an "owner" for a mechanics' lien), §§ 9-601, 9-606 (sidewalk snow), § 48-904.01 (cannabis), § 28-3814 (debt collection), § 28-3904 (consumer protection), § 2-1402.21 (Human Rights Act), § 47-2853.196 (brokerage disclosure), § 42-306 (seal), § 16-4403 (arbitration): cited in the rows on those topics.
  - Recorded, no row needed: § 6-915 (a tenant whose neglect causes condemnation commits a misdemeanor; a tenant duty already covered by the tenant-maintenance rows), §§ 7-138 and 8-101.05a (government inspectors' access), § 22-1705 (gambling premises), §§ 47-1382-.1383 (a tax-sale purchaser takes subject to residential leases), § 2-1221.01 (security-deposit assistance program).
- **Cannabis (DC-M-CN01):** no landlord duty in the medical-cannabis chapter; medical use at the patient's residence is allowed only "if permitted" (§ 7-1671.03(b)(1)); the owner may ban marijuana on its property (§ 48-904.01(a)(1E)).
- **Topic batteries:** the canvass helpers ran 294 batteries on firearms, signs and speech, privacy and data security, smoking, towing, detectors, fair housing, domestic violence, military service, debt collection, consumer protection, arbitration, insurance, utilities and others (§18), each with controls, and read every hit in context.
- **Payment plans (DC-M-PP01):** no District payment-plan duty in force (the pandemic-era § 42-3192.01 is gone); § 42-3501.03 excludes payment-plan content from a "rent ledger".

## §18 Topic canvass (rules 27, 36)
- **Method:** seven slices (C1-C6 with 52 topics each, C7 with 48), covering every `topic_key` in `lease-clause-topics.md`. At most two agents ran at a time, each saving one JSON line per topic, and its rows, after every topic (`CANVASS-BRIEF`; brief quotes verified against the corpus by script before launch). Later slices were given the main pass's settled points and every earlier slice's decisions on shared clauses.
  - The brief listed the Act's whole-section scope exceptions (§ 42-3502.05(e); the rent-stabilization exemption list; 14 DCMR § 308.8's limit to § 308) and recurring conditions (written notice, the 48-hour entry rule, rent-stabilized-only rules) up front (rule 27 [AK 3]).
- **Answers:** Present 204, Confirmed absent 155, Not applicable 1 (C1 34/18/0; C2 28/24/0; C3 36/16/0; C4 27/25/0; C5 33/19/0; C6 17/35/0; C7 29/18/1).
- **Rows:** 364 helper education rows (the main pass added 3) and 19 helper clauses: 13 delivered (two narrowed, one made a companion), 6 merged into main clauses or dropped (§3.1).
- **Coverage check (rule 27):** a script confirmed that each of the 360 topics has a delivered District row keyed to it (§8).
- **Merges across slices (rule 27 [MD 5]):** same-id drafts merged into main rows (3); duplicate subjects merged or pointed (C6 and C7 Tenant Bill of Rights rows kept under their two different topic keys, with consistent text; C3/C6 submetering rows point to each other).

## §19 Conformance-table entry
DC (2026-10-20), drawn from this log's §§ 4, 6.1, 11, 12 and 14-18. Proposed column (Claude Code sets it at sync):
| Rule | DC | Where |
|---|---|---|
| 26 tag-first, fee screens, single-state triage | Done (54 tagged, 16 overrides; 550 triaged, 0 taggable) | §2 |
| 27 every topic answered | Done (360/360) | §18, §8 |
| 29 statute walk | Done | §14 |
| 33 real lease | Done (DCHA public-housing lease as lead; OTA handbook) | §15 |
| 34 landlord scenarios | Done (172) | §16 |
| 35 outside-title search incl. Charter | Done | §17 |
| 39 court rules and forms | Done | §12 |
| 40 layout | Done (no lease-text rule) | §4 |
| 41 just cause | Present | §11 |
| 54 optional clauses | Done | §6.1 |
| 80 independent check | Done | §13 |

## Proposed SOP changes
- **Rule 19 (corpus reading):** when a corpus comes from the D.C. Council's XML (or any source that marks repealed sections with a placeholder attribute), tell helpers in the brief that a placeholder section is repealed law, not a corpus gap. Reason: canvass helper C4 reported §§ 6-751.03-.10 and ch. 42-8 as "missing" when the XML marks them placeholder="Repealed".
- **Rule 27 (merging canvass drafts):** before dropping a helper's draft of a clause the main pass also wrote, diff the two subdivision by subdivision against the statute. Reason: C2's draft of `security-deposit-return-dc` carried the new § 42-3502.17(e) notice of unpaid amounts, which the main draft had left to an education row although the statute ties the claim to the lease's terms.
- **Rule 16 (currency):** read every budget support act passed after the corpus date subtitle by subtitle for housing changes; budget acts carry substantive law. Reason: the District's FY2027 Budget Support Act made the emergency rent-payment-reporting section permanent, which a canvass row had marked as expiring.
- **Rule 33 (official handbook):** in Step A, check the agency's site for a revised version of every form a statute makes a required disclosure. Reason: the Office of the Tenant Advocate revised the District's Tenant Bill of Rights on 2026-09-25, three weeks before the pass, with a 90-day phase-in.
- **Rule 59 (tag notes):** run the quote checker over the tag-note segments of shared rows too, and have it list single-quoted text not followed by a citation. Reason: 14 District tag reasons first quoted shared-clause text in single quotes; a script converted them to double quotes before delivery.

## Proposed topic questions
- `lease-term-limitation`: Must a residential lease longer than one year be executed with particular formalities (a seal, the owner's own signature or a power of attorney)? (District: D.C. Code § 42-306(b)-(c).)
- `conversion-notice`: Does the state forbid converting rental housing to hotel or other transient use, or demolishing it for that purpose? (District: D.C. Code §§ 42-3506.01-.02.)
- `notice-to-vacate-additional-terms`: Does the state forbid alterations that make a unit uninhabitable while a notice to vacate is pending? (District: D.C. Code §§ 6-731.01-.04.)
- `rent-control`: When a rent-control exemption ends, what rent may the landlord charge, and must it re-register? (District: D.C. Code § 42-3502.09; 14 DCMR § 4203.)

## Sync review (Claude Code, 2026-10-20)
- **Merge:** `merge-delta.py` against base 75357fa: 396 new rows and 55 existing rows changed only in their DC tag and note segment (the dormant `landlords-access-hi-ky-ri-dc` in its note only); 8,815 rows, byte-exact CRLF round trip. The delta's SHA-256 matched §8 (7b699aac...1d09).
- **Source:** Claude Code read from its own corpus (the Council's codified XML, current through 2026-09-26, and 14 DCMR as downloaded 2026-10-20).
- **Edited after the last check (§13):** the 13 rows were read against D.C. Code § 42-3505.01(c)(1)-(2) (the 30-day and 10-day illegal-act notices, the occupant knowledge test, the good-faith alternatives duty), 14 DCMR § 4302.2(a) ("no less than thirty (30) days" before filing), § 42-3505.08(a)-(c) and § 42-3505.10(b-2)(1) (lock change and the fee ban), § 2-1402.21(f)(3)(C) (police and emergency calls, not waivable) and § 34-1261.01(a)(1)-(2), (c): no errors.
- **Core rules read:** late fee (§ 42-3505.31: 5% cap, 5-day floor, maximum stated in the lease, one fee, no eviction on a late fee) against `late-fee-dc`; entry (§ 42-3505.51) against `landlords-access-dc`; deposit cap (14 DCMR § 308.2) and return (§ 42-3502.17(c), (e); 14 DCMR § 309) against the deposit clauses; subletting (§ 42-3505.55) against `sublet-assign-dc`; nonpayment notice (§ 42-3505.01(a-1)(1)-(2)): no errors.
- **Every-reading rule (SOP Part 5):** `landlords-access-short-notice-dc` let a term signed at lease signing stand as the tenant's written agreement to 24 hours' notice; whether a lease term alone satisfies § 42-3505.51(a)(1)'s "a shorter period of time as agreed to by the tenant in writing" is unsettled (§6.1, §7 item 1). Redrafted so each shorter notice rests on the tenant's written agreement for that entry (for a repair the tenant asked for), which works under either reading; scheduled pest treatment now takes the ordinary 48-hour notice. `edu-optional-lease-terms-dc` updated to match. `early-termination-dc` already uses the flat one-month fee and supersedes `early-termination-ks`; the nonpayment and illegal-act notice splits already take the cautious course (wait 30 days).
- **Section pointers:** `collection-fee-dc` and `unpaid-damages-interest-dc` pointed to "the Security Deposit section", which names no District clause; both now name "Return of Security Deposit (District of Columbia)", the clause that holds the notice of unpaid amounts.
- **Shared-row repair proposed in §10 (`tenant-death-contact-nh`, "if this Lease has one"):** not made. The District overrides it with `tenant-death-contact-dc`, and every state tagged on it has a Handling of Property Left Behind section, so nothing needs it now.
- **Same-topic pairs:** `snow-removal` with `sidewalk-snow-removal-dc`, `lead-based-paint` with `lead-based-paint-dc`, and `landlords-access-dc` with `landlords-access-short-notice-dc` are companions (§9). No choice group needed.
- **Open items (§7):** no row is NEEDS_REVIEW; case-law questions are stated in their rows with the cautious course; the DCMR titles outside the corpus (12, 15, 18, 20, 21, 4, 11) and the D.C. Register are the stated boundary.
- **Citations file:** `lease-clause-citations-DC.csv`, 450 active rows (263 CITED, 160 CONFIRMED_ABSENT, 27 GENERIC: shared contract terms whose DC note cites nothing).
- **Legal watch:** `legal-watch-dc.yml`, held until after December 23, 2028 (first run January 23, 2029, day 23 at 14:00 UTC); 501 D.C. Code sections keyed by bare number, queried as `"42-3505.01" AND "D.C. Official Code"` (the bills' own wording); manual items for the statute-regulation splits, the Not Funded laws, and 14 DCMR, court rules and forms and the Tenant Bill of Rights. The dated items that fall before the first run (temporary laws expiring 2027-01-22, 2027-03-27 and 2027-05-08; the Tenant Bill of Rights phase-in; the 2027-07-01 single-stair rulemaking) are in `docs/backlog.md`.
- **SOP 1.79:** all five proposals adopted. Four topic questions added (360 topics). One new `{{variable}}` (`max_occupants`) and §10's builder checks are in the backlog.
