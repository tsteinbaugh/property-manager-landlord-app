# Virginia — lease-clause decision log (state #19)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12, §13: Va. Code Ann. Title 55.1 Chapter 12, the Virginia Residential Landlord and Tenant Act, §§ 55.1-1200 to 55.1-1262, read whole, section by section, on the official Code of Virginia site with every history line and every version printed with a delayed effective date; every 2024, 2025 and 2026 act in those history lines read in chaptered text on lis.virginia.gov with its effective-date clause; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Virginia REALTORS® Residential Lease, 'VAR FORM 200 Revised 07/23 Reviewed 07/23', 15 pages, copy posted by a Richmond property manager; the 07-2026 edition is listed in the Virginia REALTORS forms library but is members-only) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 114 scenarios, Claude-generated, TN §16 and NC §16 models plus Virginia-specific, including 11 scenarios in portfolio-size pairs (4 or fewer units vs more than 4) and 4 on the Act's own scope) |
| Gap-discovery source 4 — outside-title search | Done (§17: regex search of the whole Code of Virginia, 34,086 sections, built in the browser from the official Law Library title files overlaid with the official 2026 update pages; 64 searches including a control term at start and end; outside-title sections read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN) is closed. No re-audit of any completed state is planned. Targeted work on a specific row is welcome (a scalpel, not a hammer); this pass changed no other state's row except by adding a `VA` tag and a `VA:` note.

> **PORTFOLIO-SIZE TIERS (Taylor, 2026-09-28).** Virginia has no small-landlord exemption: the Act covers every residential landlord. Some duties turn on how many rental units the landlord owns in Virginia (more than 4 vs 4 or fewer). Taylor chose two versions only where the lease wording must differ, as in Tennessee's county pilot, and asked that the need for a 'units owned' attribute be flagged across states (he noted Colorado's unit count also changes court procedure). §13 records the design, §14 the product flag.

**Date:** 2026-09-28 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why).
**Scope:** Virginia state law only. City and county ordinances (Richmond, Norfolk, Arlington, Fairfax and others) out of scope, flagged where met, not resolved (instruction 20); the Act itself supersedes local landlord-tenant ordinances, so the local layer is thin (`edu-local-preemption-va`). Short-term rentals out of scope. Excluded from the Act and recorded, not researched: institutional residence, fraternal housing, condominium and co-op owners, campgrounds, rent-free occupancy, employee housing, contract-for-sale purchasers, recovery residences and transient lodging under 90 days (Va. Code Ann. § 55.1-1201(C)-(D)). Manufactured home lots (Chapter 13) and nonresidential tenancies (Chapter 14) deprioritized.
**Input CSV:** `lease-clauses.csv`, **1,320 rows, 16 columns**; active counts AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids, no blank status, no dangling `supersedes`, every row 16 fields, CRLF. Three VA rows, all dormant (inactive, UNVERIFIED): `late-fee-limit-va`, `meth-disclosure-va`, `mold-disclosure-va`. No other row carried `Va. Code Ann.` anywhere. Outputs folder was empty at start (instruction 43).
**Output CSV:** `lease-clauses-VA-sync.csv`, **1,405 rows, 1,375 active. VA 137 active: 90 lease clauses (49 tagged shared rows + 41 Virginia rows), 47 education; all 137 VERIFIED.** Every other state's active count unchanged.

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **Va. Code Ann. Title 55.1 Chapter 12 whole** (§§ 55.1-1200 to 55.1-1262; 71 sections plus the repealed § 55.1-1243), section by section in the built-in browser from the official 'vacodefull' chapter page on law.lis.virginia.gov, which prints each section's history line and every version with a delayed effective date side by side. **Every 2024, 2025 and 2026 act in those history lines** read in chaptered text through the lis.virginia.gov legislation-text service, struck and added text marked, effective-date clauses checked (§1.1). Also read section-open: Va. Code Ann. §§ 36-96.1:1, 36-96.2, 36-96.3, 36-96.3:1, 36-96.3:2, 36-99.5, 36-105.4, 36-106(E), 36-139, 36-139.01, 8.01-27.1, 8.01-27.2, 8.01-126, 8.01-128, 8.01-129, 8.01-130.01, 8.01-130.4 to 8.01-130.13, 8.01-226.7, 16.1-107, 11-2, 15.2-922, 34-4, 34-4.3, 34-4.4, 34-22, 34-25, 44-102.1, 44-209, 46.2-1231, 51.5-44.1, 51.5-45, 51.5-46, 55.1-703, 55.1-1400, 55.1-1604, 55.1-1609, 55.1-1982(C)-(F), 55.1-2500, 55.1-2900, 59.1-481, 60.2-600; read in part or by opening text and labelled so: §§ 8.01-226.12 (definitions), 8.01-470, 15.2-907.2, 15.2-2119, 15.2-2119.4, 18.2-258, 36-105.1:1, 46.2-1232 to 46.2-1233.1, 55.1-407, 58.1-602. Former §§ 55-248.3:1 and 55-225.01 read in the 2019 enrolled acts (§12). |
| Act scope (the first question) | **No small-landlord exemption and no opt-in or opt-out** in the current Act (§12, §13). Settled with Taylor: two versions only where the lease wording differs by portfolio size (§6 decision 1). Four `va-size-*` pairs; every VA row scope-marked. |
| Step 1 — tag first | **Done.** 49 shared rows tagged VA (§2.1). 14 bases not tagged: VA override or variant instead (§2.2). Every other state-specific row screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new VA rows | 41 VA lease clauses (three of them the rewritten dormant rows) and 47 education rows (§3). |
| Instruction 24 families | **Both closed, by hand:** `security-deposit-return-va` (override, REQUIRED; the parent `security-deposit-return` is not tagged); `assistance-animal-accommodation-va` (override, REQUIRED; Va. Code Ann. §§ 36-96.3:1, 36-96.3:2, 51.5-45). |
| Instruction 27 | **No active VA row has a blank status**; all 137 VERIFIED. |
| Instruction 31 | **Checked.** No just-cause or good-cause renewal law in Virginia; `surrender-end-of-term` tagged. |
| Instruction 32 | **Checked.** No Virginia statute forces text into a fee, deposit or other shared clause the state is tagged on; the verbatim fee-disclosure sentence (Va. Code Ann. § 55.1-1204.1) is carried by its own row, `fee-disclosure-statement-va`. |
| Instruction 33 | **Checked.** Virginia's no-cure routes are the non-remediable breach (30 days), the intentional repeat of a like breach (30 days) and immediate termination for criminal or willful acts that threaten health or safety (Va. Code Ann. § 55.1-1245(C), (E)). The shared `default-by-tenant` carve-out preserves all three; it was kept (§2.1). The shared `early-termination` (10-day cure) was not tagged; `early-termination-ks` used. |
| Instruction 44 | **Checked.** No Virginia notice statute makes a lease-designated delivery method mandatory; 'notice' is written, by mail or hand delivery with a certificate of service (Va. Code Ann. §§ 55.1-1200, 55.1-1202); electronic delivery only if the lease provides, and the tenant may elect paper (§ 55.1-1202) - `electronic-notices-va`. |
| Instruction 47 | **Checked - no exclusion.** Virginia's UETA excludes only wills, testamentary trusts and UCC titles (Va. Code Ann. § 59.1-481). |
| Instruction 48 | **Checked.** No Virginia statute lets the lease serve as the nonpayment notice; the 14-day notice is separate (Va. Code Ann. § 55.1-1245(F)). Lease text does activate several statutory rights (§3.4). |
| Instruction 49 | **Hit.** A prohibited lease term is unenforceable, and if the landlord sues to enforce it the tenant recovers actual damages and fees (Va. Code Ann. § 55.1-1208(B)); shared `services-utilities-provided`, `parking`, `storage-space` and `tenants-property-insurance` carry exculpatory sentences and were not tagged (their `-ks-oh` / `-ks-oh-ca` variants were). |
| Instruction 50 | **Checked.** The official section pages print 2026 text and every delayed version; all Chapter 12 acts of 2024, 2025 and 2026 read in chaptered text; 2026 Special Session I produced only the budget act (ch. 1) (§1.1). Delayed effective dates: 2027-01-01 (2026 Acts chs. 998, 1052, 1111, 1117, 1118) and 2027-07-01 (chs. 640, 783, 784, 1050, 1066, 1105). |
| Dormant rows | All three **rewritten and activated** (§5). |
| Named-topic checklist | **Done.** VA column in all 10 state-column tables (69 rows, no blank cell); VA answers appended to the 61-row backfill table; 26 new Virginia topics; candidate-topic table 266 refs (206 answered, 60 not located or not checked). Instructions 54-56 added (portfolio-size tiers; stale bulk compilation files; exemptions that no longer exist). |
| Layout rules (instruction 28) | **Two type or placement rules in force now** (first-page fee disclosure with a verbatim sentence; DHCD statement in 14-point type or larger), one more in 2027, plus timing rules, omission sanctions and the portfolio-size attribute (§4). |
| Proof-of-absence | **Run** on the whole code (§17); each confirmed absence has its own row. |

## 1. Process notes

### 1.1 Source and currency
- **Official code.** Every Chapter 12 section was read on law.lis.virginia.gov's full-chapter page, which prints the section text, every version marked 'Effective until' or 'Effective' with its date, and the history line. Each VA row's notes say 'Read section-open 2026-09-28 in the built-in browser on the official Code of Virginia'.
- **Session laws.** Every act named in a Chapter 12 history line from 2024 on was opened on lis.virginia.gov through the site's own legislation-text service (chaptered text with struck and added text marked) and its enactment clauses read for a delayed effective date. For bills whose effective date is not stated, the constitutional July 1 default applies (Va. Const. art. IV, § 13, not read; FEDERAL/STATE-CONSTITUTION citation flagged). 2019 acts for the former small-landlord opt-out read on legacylis.virginia.gov (§12).
- **Pay-or-quit.** 2026 Acts ch. 353 (HB 15) and ch. 354 (SB 48), approved 2026-04-08, changed the nonpayment notice from 5 to 14 days in every version of Va. Code Ann. § 55.1-1245(F) with no delayed clause, so 14 days has applied since 2026-07-01.
- **Whole-code corpus (instruction 55).** The official Law Library publishes one CSV per title; those files were compiled before the 2026 session (§ 55.1-1245's history ended at 2025). The official '2026 Updates' pages list every section that 'took effect on July 1, 2026, unless otherwise noted'; all 1,976 were fetched section-open and overlaid (1,464 replaced, 512 added), giving 34,086 sections current through the 2026 session (§17).

### 1.2 How the text was obtained, and why research mode was not used
Sections were read in the built-in browser from the official code (the container's own network could not reach the site); session laws through the lis.virginia.gov legislation-text service; the whole-code corpus built in the browser (§17). Every statute this pass needed was reachable this way, no source blocked twice, and no text conflicted, so none of the three research-mode triggers arose and Taylor was not asked to paste any section.

### 1.3 Section-open vs recall (instruction 22)
Every Virginia citation in a VA row was read section-open in this session, or read in part or by opening text and labelled so, or labelled 'not read' (§7). Nothing rests on recall.

## 2. Step 1 — tag first

### 2.1 Tagged VA as written (49)
Each basis below is the `VA:` segment added to the row's notes.

- `rent-payment` - Va. Code Ann. § 55.1-1204(D): rent payable without demand or notice at the agreed time and place; the weekend/holiday roll is contractual and lawful; 'deduction or setoff, except as permitted by applicable law' preserves repair-and-deduct (Va. Code Ann. § 55.1-1244.1) and escrow (Va. Code Ann. § 55.1-1244).
- `due-at-signing` - No Virginia statute limits what is due at signing beyond the two-month deposit cap (Va. Code Ann. §§ 55.1-1226(A), 55.1-1206(C)); rent paid more than one month in advance must be escrowed (Va. Code Ann. § 55.1-1205). Does NOT satisfy the first-page fee disclosure (Va. Code Ann. § 55.1-1204.1) - that is fee-disclosure-statement-va (REQUIRED).
- `application-of-payments` - No Virginia payment-application statute; 'Rent' means all money other than a security deposit owed under the lease (Va. Code Ann. § 55.1-1200); rent-first ordering is lawful. Form 200 (Rev. 07/23) § 3(a) applies deposits to fees first - library default kept (VA log §15).
- `security-deposit-use` - Consistent with Va. Code Ann. § 55.1-1226(A) (four permitted uses; the clause's limits on wear and tear, pre-existing damage and cleaning are narrower than (iii) 'other damages or charges as provided in the rental agreement' and lawful). Cap, timing and procedure are in security-deposit-return-va.
- `residential-use-only` - Va. Code Ann. § 55.1-1232: unless otherwise agreed, the tenant occupies only as a residence. A lease may allow child care in an apartment building (Va. Code Ann. § 55.1-1208.1) - opt-in to allow, not needed to prohibit.
- `existing-condition` - Contractual acknowledgment; subject to the statutory move-in report and five-day objection window (Va. Code Ann. § 55.1-1214) in move-in-inspection-va, which with addendum-precedence and Va. Code Ann. § 55.1-1208(A)(1) controls.
- `permitted-occupants` - Consistent: an owner or managing agent may set occupancy standards, two persons per bedroom presumed reasonable, subject to fair housing law (Va. Code Ann. § 36-105.4; Va. Code Ann. § 36-96.2(G)); 'authorized occupant' defined in Va. Code Ann. § 55.1-1200.
- `no-disturbance` - Va. Code Ann. § 55.1-1227(A)(12): tenant responsible for own and consenting persons' conduct so neighbors' peaceful enjoyment is not disturbed.
- `smoking-policy` - No Virginia statute limits a residential smoking ban; no tenant cannabis-use protection located (regex '(marijuana|cannabis)' within 200 characters of landlord-tenant terms: only § 4.1-809, licensee premises; VA log §17). Form 200 (Rev. 07/23) § 6(a) bans smoking.
- `utilities-responsibility` - Contractual allocation; tenant must keep tenant-paid utilities on (Va. Code Ann. § 55.1-1227(A)(6)); landlord billing of utilities needs a clear lease statement (utility-billing-va, Va. Code Ann. § 55.1-1212(B)).
- `utility-service-continuity` - Consistent with Va. Code Ann. § 55.1-1227(A)(6).
- `utility-payment-evidence` - No conflicting Virginia statute.
- `tenant-maintenance` - Va. Code Ann. § 55.1-1227(A)(1), (2), (4), (5), (7); the carve-out for conditions the landlord must repair preserves Va. Code Ann. § 55.1-1220. Additional Virginia tenant duties are in tenant-duties-va.
- `no-alterations` - Consistent; its prior-written-consent requirement for paint and alterations is the lease provision that activates Va. Code Ann. § 55.1-1227(A)(11) in pre-1978 housing where lead disclosures were given (OPT-IN term carried here). Savings sentence preserves reasonable modifications (Va. Code Ann. § 36-96.3(B)) and tenant security devices (Va. Code Ann. § 55.1-1229(D)). Plug-in solar from 2027: portable-solar-va / -va-small.
- `joint-liability` - No conflicting Virginia statute.
- `services-utilities-provided-ks-oh` - Tagged in place of the base services-utilities-provided, whose 'Landlord is not liable for any interruption' sentence is an agreed limitation of the landlord's liability that Va. Code Ann. § 55.1-1208(A)(5) prohibits (instruction 49: § 55.1-1208(B) actual damages and fees if enforced). Essential services now include landlord-supplied central air conditioning operating at the lease's effective date (Va. Code Ann. § 55.1-1200, 2026 Acts ch. 624).
- `utilities-paid-by-landlord` - Contractual; utilities may be included in rent (Va. Code Ann. § 55.1-1212(I)); essential-service remedies Va. Code Ann. § 55.1-1239.
- `appliances-included` - Maintenance of supplied appliances is a landlord duty (Va. Code Ann. § 55.1-1220(A)(4)); consistent.
- `landlord-maintenance` - Consistent with Va. Code Ann. § 55.1-1220(A) and 'consistent with applicable law'; Virginia allows written repair notice requirements; repair-and-deduct 14-day clock runs from written notice (Va. Code Ann. § 55.1-1244.1(B)). No repair fees (Va. Code Ann. § 55.1-1208(C)).
- `possession-delay` - Non-fault delay is contractual and lawful; willful failure to deliver is governed by Va. Code Ann. § 55.1-1238 (rent abates; termination on five days' written notice with refund of prepaid rent and deposits, or suit for possession and damages). Form 200 (Rev. 07/23) § 10 uses 15 days (VA log §15).
- `default-by-tenant` - KEPT FOR VA (instructions 32, 33, 48 checked). Nonpayment cure 'within the time period specified by applicable law after receiving written notice' matches the 14-day notice (Va. Code Ann. § 55.1-1245(F), 2026 Acts ch. 353/354). The 'except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure' carve-out preserves non-remediable breaches, repeat breaches and immediate termination for criminal or willful acts (Va. Code Ann. § 55.1-1245(C), (E)). No statute forces text into the fee clause; landlord fees are recoverable 'as contracted for in the rental agreement or as provided by law' (Va. Code Ann. § 55.1-1245(H)-(I)), and 'to the extent permitted' preserves the reasonable-failure exception. Mitigation and no accelerated rent: Va. Code Ann. § 55.1-1251. Library policy that a late fee alone is not grounds for termination is narrower than Virginia law (late charges are 'rent', Va. Code Ann. § 55.1-1200) and lawful.
- `surrender-end-of-term` - No just-cause or good-cause renewal law in Virginia (instruction 31 checked); Va. Code Ann. § 55.1-1233 (vacate, remove property, good and clean order less reasonable wear and tear); left property 'to the extent permitted by applicable law' is governed by abandoned-property-va (Va. Code Ann. § 55.1-1254).
- `early-termination-ks` - Tagged in place of early-termination, whose 10-day cure is shorter than Virginia's 21-day cure / 30-day termination (Va. Code Ann. § 55.1-1245(A)) and so would waive an Act right (Va. Code Ann. § 55.1-1208(A)(1)); this variant defers to the default provisions. Military and DV statutory rights preserved (military-lease-termination-va, dv-lease-termination-va; no liquidated damages under Va. Code Ann. §§ 55.1-1235(C), 55.1-1236(D)).
- `holdover-ca` - Tagged in place of the base holdover (K.3: the base's 'maximum amount permitted by applicable law' has no Virginia figure unless the lease adopts the § 55.1-1253(C) liquidated amount). Va. Code Ann. § 55.1-1253(C)-(D): possession plus actual damages, fees and costs; holdover with consent continues on the lease terms with rent change on 30 days' written notice. Opt-in liquidated damages: holdover-rate-va.
- `notices` - Va. Code Ann. §§ 55.1-1200 ('Notice': writing by regular mail or hand delivery with a certificate of service; 'Written notice'), 55.1-1202 (landlord served at place of business or place held out; tenant at last known residence, which may be the unit). The clause designates no alternative method (instruction 44 checked: no Virginia notice statute makes a lease-designated method mandatory); electronic notice is opt-in (electronic-notices-va). UETA scope has no landlord-tenant exclusion (Va. Code Ann. § 59.1-481; instruction 47).
- `governing-law` - Consistent; the Act supersedes local landlord-tenant ordinances (Va. Code Ann. § 55.1-1201(E)), so 'any additional applicable laws of the city or county' reaches only what localities may still regulate (edu-local-preemption-va).
- `severability` - No conflicting Virginia statute.
- `tenants-property-insurance-ks-oh-ca` - Tagged in place of the base, whose 'Landlord is not liable for any such loss or damage' is an agreed exculpation (Va. Code Ann. § 55.1-1208(A)(5); instruction 49). A landlord may require renter's insurance 'as specified in the rental agreement' (Va. Code Ann. § 55.1-1206(B)). Does NOT carry the § 55.1-1206(D) notice - that is renters-insurance-notice-va.
- `entire-agreement` - Consistent: unilateral changes need notice and both parties' written consent (Va. Code Ann. § 55.1-1204(I)); later rules bind on reasonable notice without substantial modification (Va. Code Ann. § 55.1-1228(B)).
- `addendum-precedence` - No conflicting Virginia statute; state-required disclosures control.
- `electronic-signatures` - Virginia UETA (Va. Code Ann. § 59.1-479 et seq.; scope § 59.1-481 read, no landlord-tenant exclusion); written notices may carry electronic signatures (Va. Code Ann. §§ 55.1-1200, 55.1-1202(E)).
- `pet-insurance-requirement` - No Virginia pet-insurance statute; the assistance-animal exclusion is consistent with Va. Code Ann. § 36-96.3:1(A) (no pet fee, deposit or additional rent).
- `parking-ks-oh-ca` - Tagged in place of the base parking row ('not liable for damage to or theft of a vehicle' is an agreed exculpation, Va. Code Ann. § 55.1-1208(A)(5)).
- `assigned-parking-space` - No conflicting statute; reassignment agreed in the lease is not a unilateral change under Va. Code Ann. § 55.1-1204(I); accessible-parking requests are accommodation requests (Va. Code Ann. § 36-96.3:2(B)).
- `parking-vehicle-rules` - Towing 'in accordance with applicable law': Va. Code Ann. § 46.2-1231 (posted signs with phone numbers unless a local ordinance under § 46.2-1232 applies) - edu-towing-va.
- `storage-space-ks-oh-ca` - Tagged in place of the base storage-space row ('not liable for damage to or theft of items' exculpates, Va. Code Ann. § 55.1-1208(A)(5)).
- `keys` - No rekeying statute for ordinary tenancies; protective-order lock changes are governed by Va. Code Ann. § 55.1-1230 and landlords with more than 200 units need key policies (Va. Code Ann. § 55.1-1209.1).
- `guest-policy` - No conflicting statute; 'guest or invitee' defined (Va. Code Ann. § 55.1-1200); barring a guest: Va. Code Ann. § 55.1-1246.
- `guest-policy-day-limit` - No conflicting statute. Form 200 (Rev. 07/23) § 6(c) uses 7 consecutive / 14 days per year.
- `common-area-use` - No Virginia flag-display or sign statute for tenants (edu-no-flag-display-rule-va); religious displays are protected expression (Va. Code Ann. § 36-96.1:1); the savings sentence is harmless. Cable and satellite access rules: Va. Code Ann. § 55.1-1222 (edu-cable-and-satellite-va).
- `fire-safety-grilling` - No conflicting Virginia statute (Statewide Fire Prevention Code, a regulation, not read).
- `landscaping-irrigation` - A written agreement that the tenant perform specified maintenance tasks is authorized if made in good faith (Va. Code Ann. § 55.1-1220(D)); the lease clause is that writing.
- `snow-removal` - Same basis as landscaping-irrigation (Va. Code Ann. § 55.1-1220(D)).
- `inspection-rights` - Va. Code Ann. § 55.1-1229(A)(1) (inspection is a permitted purpose; consent not unreasonably withheld); notice per landlords-access-va.
- `lead-based-paint` - Federal disclosure applies (42 U.S.C. § 4852d; FEDERAL). Virginia adds agent immunity on compliance and continuing disclosure (Va. Code Ann. § 8.01-226.7) and the painting-consent rule (Va. Code Ann. § 55.1-1227(A)(11)) - edu-lead-paint-rules-va. Form 200 (Rev. 07/23) § 34 has it as an initialed option.
- `hoa-compliance` - No conflicting Virginia statute.
- `rental-application-accuracy` - Consistent; the clause's final sentence excludes information the landlord may not request or consider (e.g. Va. Code Ann. §§ 55.1-1203, 36-96.3). Form 200 (Rev. 07/23) § 15 lets the landlord terminate immediately for material misrepresentation; the library keeps the material-breach route (VA log §15).
- `extended-absence-notice-ks` - OPT-IN landlord right (instruction 30). Va. Code Ann. § 55.1-1249: 'If the rental agreement requires the tenant to give notice to the landlord of an anticipated extended absence in excess of seven days and the tenant fails to do so, the landlord may recover actual damages'; the clause's 'willfully' is narrower than the statute (lawful). First sentence matches Va. Code Ann. § 55.1-1232. Form 200 (Rev. 07/23) § 9(d) has the same notice.
- `tenant-forward-proceedings-ca` - No conflicting Virginia statute.

### 2.2 Not tagged — VA override or variant instead (14 bases)

| Shared row | Why not | VA row used |
|---|---|---|
| `late-fee` | No written-lease condition or cap; Virginia caps at the lesser of 10% of periodic rent or 10% of the remaining balance (Va. Code Ann. § 55.1-1204(E)) | `late-fee-limit-va` (supersedes) |
| `returned-payments` | Fee must be a stated amount up to $50; future cashier's-check demand collides with § 55.1-1204(J)(1) (check and money order must be accepted) | `returned-payments-va` (supersedes) |
| `acceptable-payment-methods` | Lets the landlord change methods on notice (a unilateral change, § 55.1-1204(I)); must include check and money order; card rule is size-tiered | `acceptable-payment-methods-va` / `-va-small` (pair) |
| `security-deposit-return` | REQUIRED family; Virginia's cap, 45-day return, move-out inspection and joint-check rules | `security-deposit-return-va` (supersedes) |
| `no-sublet-assign` | Missing the 10-business-day deemed approval (§ 55.1-1204(G)) | `no-sublet-assign-va` (supersedes) |
| `landlords-access` | 24-hour notice and business-hours limit do not track the 72-hour routine-maintenance rule, pesticide notice or opt-in showing remedy (§§ 55.1-1229, 55.1-1223) | `landlords-access-va` (supersedes) |
| `services-utilities-provided`, `parking`, `storage-space`, `tenants-property-insurance` | Exculpatory sentences prohibited by § 55.1-1208(A)(5), with the § 55.1-1208(B) enforcement penalty (instruction 49) | Their `-ks-oh` / `-ks-oh-ca` variants tagged |
| `early-termination` | 10-day cure is shorter than the 21-day cure / 30-day termination (§ 55.1-1245(A)) | `early-termination-ks` tagged |
| `holdover` | 'Maximum amount permitted by applicable law' has no Virginia figure unless the lease adopts § 55.1-1253(C) (K.3) | `holdover-ca` tagged; opt-in `holdover-rate-va` |
| `pet-policy` | Indemnity sentence (§ 55.1-1208(A)(5)) and pet-removal entry beyond § 55.1-1229(C) | `pet-policy-va` (supersedes) |
| `assistance-animal-accommodation` | REQUIRED family; Virginia's own housing statute | `assistance-animal-accommodation-va` (supersedes) |
| `default-by-tenant-ks-ne`, `surrender-*` state variants | The base rows fit Virginia | Bases tagged |

### 2.3 Other states' specific rows screened, not tagged
Every active row whose `states` lacks VA was screened. Tagged from other states' variants: `services-utilities-provided-ks-oh`, `early-termination-ks`, `extended-absence-notice-ks` (matches Va. Code Ann. § 55.1-1249 in substance), `holdover-ca`, `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `tenant-forward-proceedings-ca`. Not tagged: every row that restates another state's statute, and `holdover-rate-sc` (Virginia's cap differs; `holdover-rate-va` written instead).

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type` or `content_type` changed (§9).

### 3.2 New VA lease clauses (41)

| id | Scope | Type | Basis |
|---|---|---|---|
| `late-fee-limit-va` (supersedes `late-fee`) | STATEWIDE | CONSTRAINED | Va. Code Ann. §§ 55.1-1204, 55.1-1226, 55.1-1250, 55.1-1212, 55.1-1245 |
| `meth-disclosure-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1219, 32.1-11.7 |
| `mold-disclosure-va` | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1215, 55.1-1200, 55.1-1220, 55.1-1227, 55.1-1231 |
| `returned-payments-va` (supersedes `returned-payments`) | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1200, 55.1-1245, 55.1-1204 |
| `acceptable-payment-methods-va` (supersedes `acceptable-payment-methods`) | MORE THAN 4 VIRGINIA UNITS; `va-size-payment-methods` default | RECOMMENDED | Va. Code Ann. § 55.1-1204 |
| `acceptable-payment-methods-va-small` (supersedes `acceptable-payment-methods`) | 4 OR FEWER VIRGINIA UNITS ONLY; `va-size-payment-methods` alternative | CONDITIONAL | Va. Code Ann. § 55.1-1204 |
| `security-deposit-return-va` (supersedes `security-deposit-return`) | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1226, 55.1-1200, 55.1-1206, 55.1-1208 |
| `expedited-deposit-disposition-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. § 55.1-1226 |
| `move-in-inspection-va` | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1214, 55.1-1215, 55.1-1220, 55.1-1208 |
| `defective-drywall-disclosure-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1218, 36-156.1 |
| `military-air-zone-disclosure-va` | LOCALITY-SPECIFIC | CONDITIONAL | Va. Code Ann. § 55.1-1217 |
| `tenant-rights-statement-va` | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1204, 36-139 |
| `fee-disclosure-statement-va` | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1204.1, 55.1-1200 |
| `landlord-disclosure-va` | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1216, 55.1-1200 |
| `nonresident-owner-agent-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. § 55.1-1211 |
| `renters-insurance-notice-va` | STATEWIDE | REQUIRED | Va. Code Ann. §§ 55.1-1206, 55.1-1208 |
| `damage-insurance-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1226, 55.1-1206, 55.1-1208, 55.1-1200 |
| `landlords-access-va` (supersedes `landlords-access`) | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1229, 55.1-1248, 55.1-1249, 55.1-1223, 55.1-1210 |
| `no-sublet-assign-va` (supersedes `no-sublet-assign`) | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1204, 55.1-1226, 55.1-1200 |
| `holdover-rate-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. § 55.1-1253 |
| `redemption-rights-va` | MORE THAN 4 VIRGINIA UNITS; `va-size-redemption` default | RECOMMENDED | Va. Code Ann. §§ 55.1-1250, 55.1-1243.1 |
| `redemption-limit-va-small` | 4 OR FEWER VIRGINIA UNITS ONLY (pair alternative); `va-size-redemption` alternative | CONDITIONAL | Va. Code Ann. §§ 55.1-1250, 55.1-1243.1 |
| `renewal-notice-va` | MORE THAN 4 VIRGINIA UNITS; `va-size-renewal` default | RECOMMENDED | Va. Code Ann. §§ 55.1-1204, 55.1-1253 |
| `renewal-notice-va-small` | 4 OR FEWER VIRGINIA UNITS ONLY (pair alternative); `va-size-renewal` alternative | CONDITIONAL | Va. Code Ann. §§ 55.1-1204, 55.1-1253 |
| `portable-solar-va` | MORE THAN 4 VIRGINIA UNITS; `va-size-solar` default | RECOMMENDED | Va. Code Ann. § 55.1-1212.1 |
| `portable-solar-va-small` | 4 OR FEWER VIRGINIA UNITS ONLY (pair alternative); `va-size-solar` alternative | CONDITIONAL | Va. Code Ann. § 55.1-1212.1 |
| `tenant-duties-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1227, 3.2-3900, 15.2-922, 55.1-1223, 55.1-1208 |
| `smoke-co-alarms-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1220, 55.1-1227, 55.1-1229, 15.2-922, 36-99.5, 36-139.01 |
| `dv-lease-termination-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1236, 18.2-60.3, 16.1-253.1, 16.1-279.1, 16.1-228, 18.2-67.10 |
| `military-lease-termination-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1235, 55.1-1208, 36-96.1:1 |
| `abandoned-property-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1249, 55.1-1251, 55.1-1254, 55.1-1226, 55.1-1255, 55.1-1256 |
| `casualty-termination-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1240, 55.1-1411, 55.1-1227, 55.1-1243.2, 55.1-1208 |
| `periodic-tenancy-notice-va` | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1253, 55.1-1251, 55.1-1204, 55.1-1225 |
| `emergency-contact-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1256, 55.1-1202, 55.1-1254, 55.1-1251 |
| `foreclosure-notice-va` | STATEWIDE (single-family residences) | RECOMMENDED | Va. Code Ann. § 55.1-1237 |
| `utility-billing-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1212, 55.1-1202, 56-245.3, 15.2-2119.4 |
| `tenant-repair-agreement-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1220, 55.1-1208 |
| `assistance-animal-accommodation-va` (supersedes `assistance-animal-accommodation`) | STATEWIDE | REQUIRED | Va. Code Ann. §§ 36-96.1:1, 36-96.3:1, 59.1-200, 36-96.3:2, 36-96.3, 51.5-45 |
| `pet-policy-va` (supersedes `pet-policy`) | STATEWIDE | RECOMMENDED | Va. Code Ann. §§ 55.1-1200, 55.1-1226, 55.1-1227, 55.1-1229, 55.1-1248, 55.1-1249 |
| `electronic-notices-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 55.1-1202, 55.1-1200, 59.1-481 |
| `homestead-waiver-va` | STATEWIDE | CONDITIONAL | Va. Code Ann. §§ 34-22, 34-26, 34-27, 34-29, 34-4, 34-25 |

### 3.3 New VA education rows (47)

- `edu-vrlta-scope-va` - Who the Virginia Residential Landlord and Tenant Act Covers (STATEWIDE)
- `edu-portfolio-size-rules-va` - Landlord Portfolio Size Rules (STATEWIDE)
- `edu-prohibited-lease-terms-va` - Lease Terms Virginia Prohibits (STATEWIDE)
- `edu-application-fees-va` - Rental Applications, Application Fees and Deposits (STATEWIDE)
- `edu-security-deposit-rules-va` - Virginia Security Deposit Rules (STATEWIDE)
- `edu-no-deposit-interest-va` - No Interest on Security Deposits (STATEWIDE)
- `edu-late-fee-rules-va` - Late Fees in Virginia (STATEWIDE)
- `edu-rent-payment-rules-va` - Rent Payments, Receipts and Statements (STATEWIDE)
- `edu-dishonored-payment-remedies-va` - Bounced Checks and Rejected Electronic Payments (STATEWIDE)
- `edu-required-disclosures-va` - Virginia Required Lease Disclosures and Their Timing (STATEWIDE)
- `edu-no-radon-disclosure-va` - No Radon Disclosure Rule for Leases (STATEWIDE)
- `edu-no-sex-offender-disclosure-va` - No Sex Offender Registry Notice Required in Leases (STATEWIDE)
- `edu-no-bedbug-disclosure-va` - No Bed Bug Disclosure Rule (STATEWIDE)
- `edu-no-flood-disclosure-va` - No Separate Flood Disclosure for Leases (STATEWIDE)
- `edu-no-stigmatized-property-rule-va` - No Lease Rule on Deaths or Crimes in the Unit (STATEWIDE)
- `edu-no-ev-charging-right-va` - No Tenant Electric Vehicle Charging Right (STATEWIDE)
- `edu-no-flag-display-rule-va` - No Tenant Flag Display Statute (STATEWIDE)
- `edu-no-police-call-protection-va` - No Right-to-Call-Police Statute (STATEWIDE)
- `edu-no-pet-fee-limit-va` - Pet Deposits and Pet Rent (STATEWIDE)
- `edu-local-preemption-va` - Local Landlord-Tenant Rules and Rent Control (STATEWIDE)
- `edu-fair-housing-va` - Virginia Fair Housing Law (STATEWIDE)
- `edu-assistance-animals-va` - Assistance Animals, Service Dogs and Accommodations (STATEWIDE)
- `edu-entry-and-access-va` - Entry, Access and Temporary Relocation (STATEWIDE)
- `edu-landlord-repair-duties-va` - Repair Duties and Tenant Remedies (STATEWIDE)
- `edu-mold-rules-va` - Mold (STATEWIDE)
- `edu-termination-notices-va` - Termination Notices for Tenant Default (STATEWIDE)
- `edu-acceptance-of-rent-with-reservation-va` - Accepting Rent With Reservation, and the Right of Redemption (STATEWIDE)
- `edu-eviction-process-va` - Eviction (Unlawful Detainer) Process (STATEWIDE)
- `edu-eviction-record-expungement-va` - Eviction Record Expungement (STATEWIDE)
- `edu-self-help-eviction-va` - No Self-Help Eviction (STATEWIDE)
- `edu-retaliation-va` - Retaliation (STATEWIDE)
- `edu-holdover-remedies-va` - Holdover Remedies (STATEWIDE)
- `edu-periodic-tenancies-va` - Periodic Tenancies and Mass Nonrenewals (STATEWIDE)
- `edu-renewal-and-rent-increase-va` - Renewals and Rent Increases (STATEWIDE)
- `edu-dv-tenancy-protections-va` - Domestic and Sexual Violence Protections (STATEWIDE)
- `edu-servicemember-rights-va` - Servicemember Rights (STATEWIDE)
- `edu-deceased-tenant-va` - When a Sole Tenant Dies (STATEWIDE)
- `edu-sale-and-foreclosure-va` - Selling or Losing a Rented Property (STATEWIDE)
- `edu-distress-for-rent-va` - Landlord's Lien and Distress for Rent (STATEWIDE)
- `edu-tenant-records-va` - Tenant Records and Confidentiality (STATEWIDE)
- `edu-rules-and-regulations-va` - Rules and Regulations (STATEWIDE)
- `edu-towing-va` - Towing From Rental Property (STATEWIDE)
- `edu-lead-paint-rules-va` - Lead-Based Paint (STATEWIDE)
- `edu-insurance-requirements-va` - Renter's Insurance and Damage Insurance Rules (STATEWIDE)
- `edu-cable-and-satellite-va` - Cable, Satellite and Internet Providers (STATEWIDE (multifamily))
- `edu-unauthorized-occupant-removal-va` - Squatters and Unauthorized Occupants (STATEWIDE)
- `edu-firearms-va` - Firearms in Rental Housing (STATEWIDE)

### 3.4 Opt-in landlord rights (instruction 30)
A right that exists only if the lease invokes it is lost by a lease that is silent. Offered, each where valid: damages for an unjustified refusal of showings (Va. Code Ann. § 55.1-1229(A)(3), in `landlords-access-va`); notice of an absence over 7 days (§ 55.1-1249, `extended-absence-notice-ks`); holdover liquidated damages up to 150% of per diem rent (§ 55.1-1253(C), `holdover-rate-va`); redemption limited to once per lease period for landlords of 4 or fewer units (§ 55.1-1250, `redemption-limit-va-small`); an expedited deposit disposition fee (§ 55.1-1226(D), `expedited-deposit-disposition-va`); damage insurance in place of a deposit (§§ 55.1-1206, 55.1-1226(I)-(J), `damage-insurance-va`); electronic notices (§ 55.1-1202, `electronic-notices-va`); submetering, energy allocation or ratio billing (§ 55.1-1212, `utility-billing-va`); tenant-performed duties by written agreement (§ 55.1-1220(D), `tenant-repair-agreement-va`); painting and alteration consent in pre-1978 housing (§ 55.1-1227(A)(11), carried by `no-alterations`); a lease-set periodic termination period (§ 55.1-1253(A), `periodic-tenancy-notice-va`); the homestead waiver (§ 34-22, `homestead-waiver-va`). Recorded, not offered: child care in apartments (§ 55.1-1208.1; `residential-use-only` note).

## 4. Layout and placement requirements (instruction 28)

| Rule | Where | Builder gap |
|---|---|---|
| **First page, verbatim sentence:** fee disclosure beginning on the first page, itemizing deposit, rent and one-time charges, with the statutory sentence immediately above the list | Va. Code Ann. § 55.1-1204.1 (2025 Acts ch. 567, for leases entered, extended or renewed from 2025-07-01) | **Addendum M.12**: `fee-disclosure-statement-va` must render on page 1 of the lease, not in an addendum; the sentence is fixed text |
| **Separate signed form, 14-point type:** DHCD statement of tenant rights and responsibilities with a signed acknowledgment, offered with the lease; copies within 10 business days; no suit until provided | §§ 55.1-1204(B), (H), 36-139 | Builder must attach the current DHCD form and the acknowledgment page; `tenant-rights-statement-va` records it |
| **Separate writing:** tenant's request for expedited deposit disposition | § 55.1-1226(D) | `expedited-deposit-disposition-va`: the request cannot be a lease clause |
| **Mandated wording:** acceptance of partial rent with reservation; 24-hour abandoned-property statement in the termination notice | §§ 55.1-1250, 55.1-1254 | Notice templates, not the lease; recorded in `redemption-rights-va` and `abandoned-property-va` |
| **Timing:** renter's-insurance and flood notice before signing when the lease does not require renter's insurance; air-zone, drywall and meth disclosures before signing | §§ 55.1-1206(D), 55.1-1217 to 55.1-1219 | Pre-signing delivery, not only lease text |
| **Timing:** owner and manager identity at or before the start; move-in report within 5 days | §§ 55.1-1216, 55.1-1214 | `landlord-disclosure-va` blanks; `move-in-inspection-va` |
| **Type rule (voucher tenants):** termination notice legal-aid information 'in type no smaller or less legible than that otherwise used' on the first page | § 55.1-1202(D) | Notice template |
| **Colored paper (public housing authorities):** pink or orange recertification information with a nonpayment notice | § 55.1-1245(G) | Out of lease scope; recorded |
| **2027:** DHCD sample payment plan in 14-point type (landlords of more than 4 units) | 2026 Acts ch. 1105 | Future notice template |
| **Portfolio-size attribute** | §13 | Builder needs 'rental units owned in Virginia' to pick the `va-size-*` variant (§14) |
| **Omission sanctions:** no suit until the DHCD statement (§ 55.1-1204(H)); no suit by an unregistered nonresident owner (§ 55.1-1211); tenant termination for missing air-zone, drywall or meth disclosure (§§ 55.1-1217 to 55.1-1219) and for a missing foreclosure notice (§ 55.1-1237) | as listed | Each carried by its row |

## 5. Dormant rows (instruction 21)
- `late-fee-limit-va` said the fee 'will not exceed the lesser of 10% of the periodic Rent or 10% of the remaining balance'. Correct cap, but it omitted that a late charge is allowed only if the written lease provides it, and was written as a free-standing cap rather than the fee clause. **Rewritten and activated** as Virginia's late-fee clause, superseding `late-fee` (CONSTRAINED; Va. Code Ann. § 55.1-1204(E)).
- `mold-disclosure-va` said the landlord discloses visible mold in the move-in report. Correct in substance, but it omitted the 5-day objection, the tenant's termination or remediation option and the 5-business-day remediation (§ 55.1-1215). **Rewritten and activated** (REQUIRED, part of the move-in report).
- `meth-disclosure-va` matched § 55.1-1219 in outline (actual knowledge, not cleaned up to the § 32.1-11.7 guidelines, 60-day termination). **Rewritten and activated** (CONDITIONAL), with the before-signing timing stated.

## 6. Decisions for Taylor (all answered 2026-09-28 and applied)

1. **Act scope and portfolio size.** The kickoff expected an exemption for small landlords with an opt-in; the current Act has none (§12). Put to Taylor: (1) statewide clauses that state the size rule in the text, or (2) two versions where the wording differs. Taylor: "Why recommend 1? I am leaning toward 2. 2 keeps suit with how TN was handled depending on county. I know in CO, how many units/houses a landlord owns changes how judicial proceedings take place, so eventually, we will need to have the same info/features." After a plain restatement he chose **four pairs with the more-than-4 variant as default**. Applied: `va-size-payment-methods`, `va-size-redemption`, `va-size-renewal`, `va-size-solar`; scope markers on every row; the cross-state flag (§14).
2. **Homestead waiver.** Virginia lets a debtor waive the homestead exemption in a writing using the statute's words (Va. Code Ann. § 34-22). I recommended education only; Taylor chose **"Offer as optional clause"**. Applied: `homestead-waiver-va` (CONDITIONAL, statutory words, the excluded exemptions and the judgment wording noted, risk stated in the notes).

## 7. Open items and read list (none blocking)
1. Card acceptance by landlords of more than 4 units: § 55.1-1204(J) does not require cards; `acceptable-payment-methods-va` leaves cards optional.
2. 'Once per lease period' (§ 55.1-1250) is not defined; `redemption-limit-va-small` uses the statute's words.
3. When holdover liquidated damages start: 'after the termination date in the landlord's notice' (§ 55.1-1253(C)); a lease-end holdover without a notice is not addressed.
4. Which localities have military air installation zone maps (§ 55.1-1217) is not listed; `military-air-zone-disclosure-va` is LOCALITY-SPECIFIC.
5. § 8.01-226.12 read for definitions only; subsection (E) remediation standards not re-read.
6. The act that removed the former deposit-interest duty, and the act that dropped the two-single-family-house opt-out, were not traced (§12).
7. Definitions in §§ 16.1-228 (family abuse) and 18.2-67.10 (sexual abuse) cited by § 55.1-1236 not read.
8. § 36-156.1 (defective drywall definition), § 54.1-2108 and § 32.1-46.1 not read; § 8.01-470 read in part.
9. Va. Const. art. IV, § 13 (July 1 default effective date) not read.
10. Title 36 Chapter 5.1 enforcement (§§ 36-96.8 to 36-96.21) read by title only.
11. Non-statute citations (instruction 16), all flagged in row notes: federal lead disclosure (42 U.S.C. § 4852d; 40 C.F.R. Part 745), SCRA (50 U.S.C. §§ 3901, 3955), PTFA, Fair Housing Act, FTC Credit Practices Rule (16 C.F.R. § 444.2, not read), the DHCD statement and forms (agency documents, not regulations), the Statewide Fire Prevention Code and building code (regulations, not read). No Virginia Administrative Code rule and no case law is relied on.

## 8. Integrity and screens
- **CSV:** 1,405 rows (1,320 + 85 new; the 3 dormant rows rewritten in place); every row has 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair, all states; each `va-size-*` group has exactly one default); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF as in the input.
- **Counts:** VA 0 active → 137 (90 lease clauses, 47 education; all VERIFIED). Every other state's active count unchanged: AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, WY 106.
- **Instruction 37 (citation inventory):** every Chapter 12 section number (71) was diffed against the `bodyText` and VA notes of every active VA row. The first diff found §§ 55.1-1207 and 55.1-1261 uncited; each was added to the row it bears on (`edu-periodic-tenancies-va`, `edu-eviction-process-va`). The final diff finds none missing.
- **Instruction 11 (citation screen):** every outside-title Virginia cite in VA rows exists in the whole-code corpus and was read section-open, or read in part and labelled so, or labelled 'not read' (§7).
- **Instructions 19/38:** every row id named in this log, in the VA checklist cells and sections, and in VA row notes exists in the output CSV.
- **Instruction 14:** every VA addition to a shared row's `notes` is delimited ' | VA: ...'.
- **Kickoff citation format:** every Virginia code cite in VA row text is written `Va. Code Ann. § 55.1-1226` style; acts are written '2026 Acts ch. 353' so the legal-watch tripwire does not read them as sections; comparison cites to other states carry their own prefixes (`Tenn. Code Ann.`, `N.C. Gen. Stat.`). **Cross-state check:** no row outside VA, and no text outside a row's `VA:` segment, contains `Va. Code Ann.`.

## 9. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every change to an existing shared row is an added `VA` tag with a `VA:` note, a states-only change under §5a.1.

**Later propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

### 9.1 Flags for Claude Code
**None.** No specific defect was found in another state's row.

## 10. Findings worth Taylor's attention
1. **No small-landlord exemption.** Every Virginia residential landlord is under the Act, including an owner renting one house. The two-house opt-out many landlords remember was dropped when the Act was recodified.
2. **Pay-or-quit is now 14 days** (5 days until 2026-07-01). The Virginia REALTORS form Taylor's users are likely to know (Rev. 07/23) still says five.
3. **Fee disclosure on page 1, in the statute's words.** Leases from 2025-07-01 must list the deposit, rent and one-time charges starting on the first page under a fixed sentence. This is a builder layout field.
4. **No lawsuit until the tenant has the state's tenant-rights statement**, and a nonresident owner cannot sue until a Virginia agent is on file.
5. **Size tiers already in the law and coming in 2027:** landlords with more than 4 units owe renewal and rent-increase notice (90 days from 2027-07-01), cannot ban plug-in solar (2027-01-01) and must offer a payment plan before a nonpayment eviction (2027-07-01); landlords with 4 or fewer may refuse cards, may limit redemption and may decline voucher holders.
6. **No repair or maintenance fees** unless the tenant caused the problem (every landlord since 2026-07-01).
7. **Lease-set holdover damages are capped** at 150% of daily rent (100% in HUD units), and only if the lease says so.
8. **A tenant can stop an eviction by paying everything up to 48 hours before it**, and landlords of 4 or fewer units may limit that to once per lease period by written notice.
9. **Two more gaps closed by this pass's own screens:** occupancy standards (two per bedroom presumed reasonable) and condominium-conversion notice with a 60-day purchase right.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-VA-sync.csv` | 1,405 rows, 1,375 active; VA 137 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-VA.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | VA column in all 10 state-column tables; VA answers in the backfill table; Virginia sections at the end; instructions 54-56 |

## 12. Kickoff leads — what each turned out to be

| Lead | Finding |
|---|---|
| Act scope, exemptions and opt-in (§§ 55.1-1200, 55.1-1201) | **No small-landlord exemption and no opt-in or opt-out.** The Act applies to all single-family and multifamily units (Va. Code Ann. § 55.1-1201(B)); exclusions are by occupancy type (§ 55.1-1201(C)-(D)). An opt-out for an owner of two or fewer single-family houses existed in former §§ 55-248.3:1(B) and 55-225.01(B)(1) (read in 2019 Acts chs. 180 and 700) and is absent from § 55.1-1201 as recodified and as reprinted by 2022 Acts chs. 732 and 755; the dropping act was not pinned (§7). Chapter 14 governs nonresidential tenancies only (§ 55.1-1400), so no residential landlord falls back on it. The Act may not be waived or modified by any locality or court (§ 55.1-1201(A)) - `edu-vrlta-scope-va`, `edu-portfolio-size-rules-va` |
| Prohibited lease provisions | § 55.1-1208(A)(1)-(8); unenforceable, damages and fees if the landlord sues to enforce (§ 55.1-1208(B)); no repair fees (§ 55.1-1208(C)) - `edu-prohibited-lease-terms-va` |
| Statement of tenant rights and responsibilities | Confirmed: DHCD statement offered with the lease, signed acknowledgment, copies in 10 business days, no action until provided (§§ 55.1-1204(B), (H), 36-139) - `tenant-rights-statement-va`. Other required disclosures listed in `edu-required-disclosures-va` |
| Security deposits (two months, return, move-in report, interest) | Confirmed: 2 months incl. insurance premiums; 45 days; +15 for contractor itemization; move-out inspection right; one joint check; unclaimed after a year (§ 55.1-1226); move-in report in 5 days (§ 55.1-1214); **no interest** (§17) - `security-deposit-return-va`, `move-in-inspection-va`, `edu-no-deposit-interest-va` |
| Application and other fees; late fee (lesser of 10%s) | Confirmed: application fee $50 plus actual screening cost (§ 55.1-1203); late fee only in a written lease, lesser of 10% of periodic rent or 10% of the remaining balance (§ 55.1-1204(E)); processing fees only with a fee-free method (§ 55.1-1204(J)) |
| Entry, maintenance, mold | 72-hour routine-maintenance notice (§ 55.1-1229(A)(4)); landlord duties (§ 55.1-1220) incl. mold prevention; mold disclosure at move-in (§ 55.1-1215) and remediation relocation (§ 55.1-1231) |
| Nonpayment notice ('changed recently') | **14 days since 2026-07-01** (2026 Acts chs. 353, 354; no delayed clause) |
| Other notices, periodic tenancy, holdover, abandoned property | 21/30-day cure, 30-day non-remediable, immediate criminal (§ 55.1-1245); 7/30 days before the next due date unless the lease differs (§ 55.1-1253(A)); holdover actual or capped liquidated damages (§ 55.1-1253(C)); abandoned property (§§ 55.1-1249, 55.1-1254 to 55.1-1256) |
| Retaliation, self-help, unlawful detainer, redemption | § 55.1-1258 (rewritten 2027-01-01); § 55.1-1243.1 (greater of $5,000 or 4 months' rent); Title 8.01 (§§ 8.01-126, 8.01-128, 8.01-129, each amended in 2026; expungement § 8.01-130.01); **redemption to 48 hours before eviction** (§ 55.1-1250) |
| DV and military termination, assistance animals, fair housing (source of income) | § 55.1-1236 (28 days, 2025); § 55.1-1235 (2026 amendment removed the 60-day limit); §§ 36-96.3:1, 36-96.3:2; source of funds protected, **owners of 4 or fewer units exempt** (§ 36-96.2(I)) |
| Local rent control | **Barred in substance:** the Act supersedes local landlord-tenant ordinances and no statute authorizes rent control (§ 55.1-1201) - `edu-local-preemption-va` |
| 2024-2026 acts | Every act in the Chapter 12 history lines from 2024 on read in chaptered text; delayed dates listed in §0 (instruction 50) |
| Dormant rows | All three rewritten and activated (§5) |

## 13. Portfolio size — the centre of this pass

### 13.1 Which rules turn on units owned

| Rule | Tier | Lease wording differs? | Approach |
|---|---|---|---|
| Card payments (Va. Code Ann. § 55.1-1204(J)(2)) | 4 or fewer may refuse cards | Yes | Pair `va-size-payment-methods` |
| Redemption once per lease period (§ 55.1-1250) | 4 or fewer, by written notice | Yes | Pair `va-size-redemption` |
| Renewal and rent-increase notice (§ 55.1-1204(K); 90 days from 2027-07-01) | More than 4 | Yes (promise vs none) | Pair `va-size-renewal` |
| Plug-in solar (§ 55.1-1212.1, 2027-01-01) | More than 4 may not prohibit | Yes | Pair `va-size-solar` |
| Source-of-funds exemption (§ 36-96.2(I)) | 4 or fewer (and no more than 10% interest in more than 4) | No | Education (`edu-fair-housing-va`) |
| Payment plan before nonpayment eviction (2026 Acts ch. 1105, 2027-07-01) | More than 4 | No (notice practice) | Education |
| Ledger on a records request (2026 Acts ch. 640, 2027-07-01) | Not required of landlords with fewer than 4 units unless rental assistance is involved | No | Education |
| Key-control and employee background checks (§ 55.1-1209.1) | More than 200 units on one property | No | Education; `keys` note |

### 13.2 The approach
The more-than-4 variant is the default in each pair because it is lawful for every landlord (a small landlord who accepts cards, gives renewal notice, allows redemption without limit or permits solar breaks no rule). Each `-small` variant is CONDITIONAL, titled 'Landlord With Four or Fewer Virginia Units', and its notes explain the counting rule (units held individually or through a business entity, as the statute counts them).

## 14. Addendum M product flag — landlord 'units owned' attribute (cross-state)
The app tags clauses by state and stores nothing about the landlord's portfolio. For Virginia the builder needs one landlord-level attribute, 'How many rental dwelling units do you own in Virginia (directly or through entities)?', to pick the variant in the four `va-size-*` choice groups and to show the tier-specific education. Until then the more-than-4 variant is the group default and each small-landlord variant says so in its title. **Cross-state:** Taylor noted that in Colorado the number of units or houses a landlord owns changes how court proceedings run, so the attribute should be designed once for all states (alongside Tennessee's property-county attribute, TN §14), not as a Virginia-only field.

## 15. Real-lease comparison (gap-discovery source 2)

**Lease:** Virginia REALTORS® Residential Lease, 'VAR FORM 200 Revised 07/23 Reviewed 07/23', 15 pages, 38 sections, copy posted by Cobb & Co. Property Management (Richmond) and read in the built-in browser with pdf.js. The current edition, 'Form 200 - Residential Lease - 07-2026', is listed in the Virginia REALTORS forms library but needs a member login (checked 2026-09-28), so the 07/23 edition was compared against the current Act; its gaps against 2024-2026 amendments are expected and are recorded as such.

### 15.1 Provision map

| Form 200 section | Library row(s) | Note |
|---|---|---|
| 1 Summary of terms (rent, per diem, late fee, deposits, 1(j) renewal notice) | `rent-payment`, `late-fee-limit-va`, `fee-disclosure-statement-va`, `renewal-notice-va` | Late fee states the lesser-of-10% cap; no first-page fee-disclosure sentence (2025 rule postdates the edition) |
| 2 Applicable Virginia law | `governing-law` | Names the VRLTA |
| 3 Security deposit | `security-deposit-return-va`, `security-deposit-use`, `damage-insurance-va` | Gives **30** more days for contractor itemization (statute: 15, § 55.1-1226(E)); applies the deposit to fees before rent; lets the landlord pay one tenant for all (statute: one check to all unless each agrees in writing, § 55.1-1226(B)); no last-month setoff |
| 4 Rent | `rent-payment`, `acceptable-payment-methods-va`, `returned-payments-va` | Cash receipt 'upon the request of Tenant' (mandatory since 2026) |
| 5 Inspection and condition; mold | `move-in-inspection-va`, `mold-disclosure-va`, `existing-condition` | Mold section includes a tenant release and indemnity (prohibited, § 55.1-1208(A)(5)) |
| 6 Use, occupancy and maintenance; smoke and CO alarms; pesticides | `tenant-duties-va`, `smoke-co-alarms-va`, `smoking-policy`, `permitted-occupants` | Tenant's 24-hour pesticide-concern notice matches § 55.1-1223; the landlord's 48-hour notice is not stated |
| 7 Utilities | `utilities-responsibility`, `utility-billing-va` | |
| 8 Personal property of tenant; renter's insurance | `tenants-property-insurance-ks-oh-ca`, `renters-insurance-notice-va` | 'Sole risk of Tenant' exculpation; no § 55.1-1206(D) flood notice |
| 9 Access; temporary relocation | `landlords-access-va`, `edu-entry-and-access-va` | 72-hour routine notice and 30-day relocation track the statute |
| 10 Inability to deliver possession | `possession-delay` | 15-day mutual termination |
| 11-12 Casualty, condemnation | `casualty-termination-va` | Makes 'substantially impaired' the landlord's 'sole determination' and says rent does not abate during repairs; the statute gives the tenant its own termination right (§ 55.1-1240) |
| 13 Liability of landlord/agent | none | **Broad exculpation** ('not liable for negligence or tort'), prohibited by § 55.1-1208(A)(5); not copied |
| 14 Animals | `pet-policy-va`, `assistance-animal-accommodation-va` | Unauthorized-animal fee |
| 15 Representations in application | `rental-application-accuracy` | Immediate termination for material misrepresentation |
| 16 Financial responsibility | none | Landlord liability limited to its interest in the property: a limitation of liability the library does not copy |
| 17 Notice | `notices`, `electronic-notices-va` | Electronic notices with the tenant's paper election |
| 18 Military | `military-lease-termination-va` | Still has the 60-day-before-separation limit removed by 2026 Acts chs. 82, 83 |
| 19 Cancellation; renewal; DV termination | `periodic-tenancy-notice-va`, `renewal-notice-va`, `dv-lease-termination-va` | DV list predates 2025 (no stalking or trafficking) |
| 20 Default | `default-by-tenant`, `edu-termination-notices-va` | **Five-day** nonpayment notice (14 since 2026-07-01); 21/30, repeat, non-remediable and criminal tracks match § 55.1-1245 |
| 21 Unlawful detainers; acceptance with reservation | `redemption-rights-va`, `edu-acceptance-of-rent-with-reservation-va` | Cites the unlawful detainer statute as '8.01-374 et seq.', which is the lost-papers section; unlawful detainer is § 8.01-124 et seq. |
| 22-24 No waiver, subordination, severability | `severability`, `entire-agreement` | Subordination: no library row (lender practice) |
| 25 Discrimination | `edu-fair-housing-va` | |
| 26 Attorney fees | `default-by-tenant` | Fees whether or not suit is filed, as § 55.1-1245(H) allows |
| 27 Rules and regulations | `edu-rules-and-regulations-va` | |
| 28 Holdover | `holdover-ca`, `holdover-rate-va` | Uses the 150% / HUD 100% cap |
| 29 Modification, law, successors | `entire-agreement` | |
| 30 'Statutory notice to tenant' (sex offenders) | `edu-no-sex-offender-disclosure-va` | Borrows the sales notice; no lease duty |
| 31 Bankruptcy termination | none | Federal Bankruptcy Code limits ipso facto clauses; out of scope |
| 32 Mediation | none | Contractual |
| 34 Optional provisions (lead, defective drywall, asbestos, air zone, diplomats, guarantor) | `lead-based-paint`, `defective-drywall-disclosure-va`, `military-air-zone-disclosure-va` | Initialed options; asbestos and diplomat clauses have no Virginia statute behind them in Chapter 12 |
| 36 Waiver of homestead exemption | `homestead-waiver-va` | Decision 2 |
| 37-38 Electronic signatures, wire fraud alert | `electronic-signatures` | |

### 15.2 What it produced
Confirmation that Virginia landlords already use the Act's 21/30-day, 72-hour, 150% holdover and redemption mechanics, which the library now carries; eight divergences the library does not copy (30-day itemization extension, 5-day nonpayment notice, cash receipt on request, military 60-day limit, pre-2025 DV list, landlord's sole determination of casualty impairment, the exculpation and nonrecourse sections, the wrong unlawful-detainer citation). Form 200 has no page-1 fee statement, the clearest sign that the 2025 layout rule is new.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the TN and NC scenario maps, re-run against the VA-active library, plus Virginia-specific scenarios, including pairs in which the same situation arises for a landlord with 4 or fewer Virginia units and one with more, and scenarios on the Act's own scope. Where no row answered, the whole-code search was run (§17) and landlord-relevant hits read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 114 scenarios: 101 covered by rows written in the statute walk; 2 gaps, each closed by a row edit; 6 confirmed absences with their own rows; 1 not located with no row; 4 out of scope or deprioritized. 11 scenarios are portfolio-size pairs (the same situation for a landlord with 4 or fewer Virginia units and one with more), and 4 turn on the Act's own scope (owner-occupied room, employee unit, extended-stay resident, squatter).

| Scenario | VA coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a $75 application fee plus a credit report cost | `edu-application-fees-va` | Fee capped at $50 plus actual third-party screening cost (Va. Code Ann. § 55.1-1203) |
| Applicant is rejected after paying a deposit by money order | `edu-application-fees-va` | Refund in 10 days (cash, certified check or money order) or 20 days otherwise, itemized (§ 55.1-1203) |
| Applicant with a criminal conviction | `edu-fair-housing-va` | Inquiry and exact-cost record check allowed; clear-and-present-threat denial (§ 36-96.2(F)) |
| Applicant who is a DV victim with a low credit score | `edu-application-fees-va`, `edu-dv-tenancy-protections-va` | Landlord must consider evidence of the abuse's effect on credit (§ 55.1-1203) |
| Applicant with a housing voucher - landlord owns 3 Virginia units | `edu-fair-housing-va` | May decline on source of funds (§ 36-96.2(I)) |
| Same applicant - landlord owns 12 Virginia units | `edu-fair-housing-va` | May not decline on source of funds (§ 36-96.3); may decline if not approved within 15 days (§ 36-96.2(J)) |
| Family of five applies for a two-bedroom unit | `permitted-occupants`, `edu-fair-housing-va` | **Gap found:** two persons per bedroom presumed reasonable (§ 36-105.4) was in no row; added to `edu-fair-housing-va` and the VA note on `permitted-occupants` |
| Applicant asks whether a sex offender lives nearby | `edu-no-sex-offender-disclosure-va` | Confirmed absent for leases; sales notice only (§ 55.1-703) |
| Unit is in a military air installation noise zone | `military-air-zone-disclosure-va` | Disclose before signing or the tenant may terminate within 30 days (§ 55.1-1217) |
| Unit had a meth lab, not cleaned up | `meth-disclosure-va` | Disclose before signing; 60-day termination (§ 55.1-1219) |
| Unit has defective drywall | `defective-drywall-disclosure-va` | § 55.1-1218 |
| Pre-1978 building | `lead-based-paint`, `edu-lead-paint-rules-va` | Federal disclosure; state immunity and painted-surface rules (§§ 8.01-226.7, 36-106(E)) |
| Flood-prone property; lease does not require renter's insurance | `renters-insurance-notice-va`, `edu-no-flood-disclosure-va` | Notice before signing incl. flood and FEMA pointers (§ 55.1-1206(D)) |
| A death occurred in the unit last year | `edu-no-stigmatized-property-rule-va` | Confirmed absent (search 0) |
| Bed bugs treated last year | `edu-no-bedbug-disclosure-va` | Confirmed absent |
| Radon test results high | `edu-no-radon-disclosure-va` | Confirmed absent for leases |
| **Signing** | | |
| Landlord hands over the lease without the DHCD statement | `tenant-rights-statement-va` | No action, including unlawful detainer, until the statement is provided (§ 55.1-1204(H)) |
| Lease lists pet fee and admin fee on page 4 | `fee-disclosure-statement-va` | Fees must be itemized starting on page 1 under the statutory sentence (§ 55.1-1204.1) |
| Owner lives in Maryland and self-manages | `nonresident-owner-agent-va` | Virginia agent named in every lease; no suit until filed (§ 55.1-1211) |
| Property manager signs for the owner | `landlord-disclosure-va` | Names and addresses at or before the start (§ 55.1-1216) |
| Deposit of 2.5 months' rent requested | `security-deposit-return-va` | Capped at 2 months incl. insurance premiums (§§ 55.1-1226(A), 55.1-1208(A)(7)) |
| Tenant offers damage insurance instead of a deposit | `damage-insurance-va` | § 55.1-1226(I)-(J) |
| Landlord wants a homestead waiver | `homestead-waiver-va` | Statutory words (§ 34-22); decision 2 |
| Lease for two years, never signed by the landlord | `edu-periodic-tenancies-va` | Effective for one year only (§ 55.1-1207) |
| Move-in: landlord gives no inspection report | `move-in-inspection-va` | Report due within 5 days (§ 55.1-1214) |
| Move-in report shows visible mold | `mold-disclosure-va` | Tenant may terminate or landlord remediates in 5 business days (§ 55.1-1215) |
| Unit uninhabitable on move-in day | `edu-landlord-repair-duties-va` | 7-day notice; refund within 15 business days (§ 55.1-1234.1) |
| Landlord cannot deliver possession on the start date | `possession-delay` | Non-fault delay contractual; willful: § 55.1-1238 |
| **Rent and money** | | |
| Tenant wants to pay by card - landlord owns 3 units | `acceptable-payment-methods-va-small` | Need not accept cards (§ 55.1-1204(J)(2)) |
| Same - landlord owns 40 units | `acceptable-payment-methods-va` | No card rule, but any processing fee needs a fee-free alternative (§ 55.1-1204(J)) |
| Landlord charges a $3 online-payment convenience fee | `acceptable-payment-methods-va` | Only with a fee-free method; capped at the actual third-party cost (§ 55.1-1204(J)) |
| Tenant pays cash and wants a receipt | `acceptable-payment-methods-va` | Written receipt required (2026) |
| Rent paid on the 8th; lease late fee 15% | `late-fee-limit-va` | Lesser of 10% of periodic rent or remaining balance (§ 55.1-1204(E)) |
| Rent check bounces | `returned-payments-va` | $50 fee; 14-day notice (§§ 55.1-1200, 55.1-1245(F), 8.01-27.1) |
| Tenant asks for a rent ledger | `edu-rent-payment-rules-va`, `edu-tenant-records-va` | Within 10 business days of written request (§ 55.1-1204(D)) |
| Landlord wants to raise rent mid-lease | `entire-agreement`, `edu-renewal-and-rent-increase-va` | No unilateral change (§ 55.1-1204(I)) |
| Landlord bills water by ratio (RUBS) | `utility-billing-va` | Only if clearly stated in the lease; $5 late cap (§ 55.1-1212) |
| Tenant prepays six months' rent | `edu-rent-payment-rules-va` | Escrowed until due (§ 55.1-1205) |
| **Repairs and access** | | |
| Heat fails in January | `landlord-maintenance`, `edu-landlord-repair-duties-va` | Essential service; substitute housing or damages (§ 55.1-1239) |
| Central air fails in July (supplied at lease start) | `edu-landlord-repair-duties-va` | Essential service since 2026 (2026 Acts ch. 624) |
| Tenant hires a contractor and deducts $1,200 | `edu-landlord-repair-duties-va` | Repair and deduct up to the greater of one month's rent or $1,500 after 14 days (§ 55.1-1244.1) |
| Tenant stops paying rent over repairs | `edu-landlord-repair-duties-va` | Rent escrow (§ 55.1-1244); defense (§ 55.1-1241) |
| Landlord charges a $50 maintenance-call fee | `edu-prohibited-lease-terms-va` | Barred unless tenant-caused (§ 55.1-1208(C)) |
| Tenant breaks a window; landlord fixes and bills | `landlords-access-va`, `edu-termination-notices-va` | Bill due as rent (§ 55.1-1248) |
| Mold appears mid-tenancy | `edu-mold-rules-va` | Remediation; relocation at landlord cost (§§ 55.1-1220(A)(5), 55.1-1231) |
| Bed bugs found mid-tenancy | `tenant-duties-va`, `landlords-access-va` | Tenant keeps free of pests, pays added cost if delayed; 48-hour pesticide notice (§§ 55.1-1227(A)(3), (14), 55.1-1223) |
| Landlord wants routine HVAC filter change | `landlords-access-va` | 72 hours' notice, done within 14 days (§ 55.1-1229(A)(4)) |
| Tenant refuses showings to buyers | `landlords-access-va` | Opt-in damages if the lease says so (§ 55.1-1229(A)(3)) |
| Landlord needs the unit empty for two weeks for a repair | `edu-entry-and-access-va` | 30 days' notice; comparable unit or hotel at landlord cost (§ 55.1-1229(B)) |
| Tenant installs a camera doorbell | `edu-entry-and-access-va` | Allowed without permanent damage; keys to landlord (§ 55.1-1229(D)) |
| Tenant disables the smoke alarm | `smoke-co-alarms-va`, `tenant-duties-va` | § 55.1-1227(A)(8) |
| Tenant asks for a CO alarm | `smoke-co-alarms-va` | Within 90 days; reasonable fee (§ 55.1-1229(E)) |
| Deaf tenant asks for a strobe smoke alarm | `smoke-co-alarms-va` | § 36-99.5 |
| Landlord asks tenant to mow and shovel | `landscaping-irrigation`, `snow-removal`, `tenant-repair-agreement-va` | Written good-faith agreement (§ 55.1-1220(D)) |
| Tenant wants to paint (1960s building) | `no-alterations`, `edu-lead-paint-rules-va` | Prior written approval if the lease says so (§ 55.1-1227(A)(11)) |
| **Occupants, animals and use** | | |
| Tenant gets an emotional support dog; landlord bans pets | `assistance-animal-accommodation-va` | No pet fee; documentation limits (§ 36-96.3:1) |
| Pet deposit on top of a 2-month deposit | `pet-policy-va` | Pet deposit is a security deposit, inside the cap (§ 55.1-1200) |
| Tenant smokes marijuana in the unit | `smoking-policy` | No tenant cannabis protection (search: 1 unrelated hit) |
| Tenant keeps a handgun (private building) | `edu-firearms-va` | Public housing only (§ 55.1-1208(A)(6)) |
| Tenant flies a flag / displays religious symbols | `common-area-use`, `edu-no-flag-display-rule-va` | No flag rule; religious display is fair-housing protected (§ 36-96.1:1) |
| Tenant runs in-home child care | `residential-use-only` | Lease may allow it (§ 55.1-1208.1) |
| Guest stays three weeks | `guest-policy-day-limit` | Contractual |
| Landlord bans an ex-boyfriend guest | `guest-policy`, `edu-unauthorized-occupant-removal-va` | Written bar notice, then trespass (§ 55.1-1246) |
| Tenant's car towed for a parking-rule breach | `parking-vehicle-rules`, `edu-towing-va` | Signs at all entrances (§ 46.2-1231) |
| Tenant wants an EV charger | `edu-no-ev-charging-right-va` | Condo and co-op only |
| Tenant wants a plug-in solar panel (2027) - landlord owns 3 units | `portable-solar-va-small` | May prohibit |
| Same - landlord owns 30 units | `portable-solar-va` | May not prohibit; reasonable restrictions (§ 55.1-1212.1) |
| Satellite dish on the balcony | `common-area-use`, `edu-cable-and-satellite-va` | State cable-access rules (§ 55.1-1222); federal OTARD rule not read |
| Tenant wants to sublet; landlord never answers | `no-sublet-assign-va` | Deemed approved after 10 business days (§ 55.1-1204(G)) |
| Tenant away 10 days without telling the landlord | `extended-absence-notice-ks` | Opt-in damages (§ 55.1-1249) |
| **Default and eviction** | | |
| Rent unpaid on the 1st (2026 lease) | `edu-termination-notices-va`, `default-by-tenant` | 14-day notice (§ 55.1-1245(F)) |
| Same in 2027 - landlord owns 30 units | `edu-termination-notices-va` | Payment-plan offer and ledger in the notice (2026 Acts chs. 1105, 783, 784) |
| Same in 2027 - landlord owns 2 units | `edu-termination-notices-va` | No payment-plan duty; ledger duty applies to the notice |
| Tenant pays in full two days before the eviction | `redemption-rights-va` | Eviction cancelled if paid 48 hours before (§ 55.1-1250) |
| Third late payment this lease - landlord owns 4 units | `redemption-limit-va-small` | Redemption may be limited to once per lease period by written notice (§ 55.1-1250) |
| Landlord accepts partial rent after filing | `edu-acceptance-of-rent-with-reservation-va` | Written reservation in the statute's words (§ 55.1-1250) |
| Tenant keeps a noisy dog after warning | `edu-termination-notices-va` | 21-day cure / 30-day termination (§ 55.1-1245(A)) |
| Drug dealing from the unit | `default-by-tenant`, `edu-termination-notices-va` | Immediate termination; hearing within 15 days (§ 55.1-1245(C)) |
| Landlord changes the locks | `edu-self-help-eviction-va` | Greater of $5,000 or 4 months' rent (§ 55.1-1243.1) |
| Eviction case dismissed; tenant wants the record cleared | `edu-eviction-record-expungement-va` | Automatic after 30 days (§ 8.01-130.01) |
| Federal employee during a shutdown can't pay | `edu-eviction-process-va` | 60-day continuance (§ 44-209) |
| Tenant loses and cannot afford the appeal bond | `edu-eviction-process-va` | Indigent tenants need not post (2026 Acts ch. 579) |
| Landlord wants a lien on the tenant's furniture | `edu-distress-for-rent-va` | Court distress only; residential 6 months' rent (§ 8.01-130.6) |
| Tenant complains to code enforcement; rent goes up | `edu-retaliation-va` | § 55.1-1258; rewritten 2027-01-01 |
| Tenant arrested and jailed for 60 days | `abandoned-property-va` | Not located as its own rule; abandonment and absence rules only (§ 55.1-1249) |
| Tenant files for bankruptcy | none | Federal automatic stay; out of scope |
| **Ending the tenancy** | | |
| Month-to-month; landlord wants the unit back | `periodic-tenancy-notice-va` | 30 days before the next due date unless the lease differs (§ 55.1-1253(A)) |
| Lease ending - landlord owns 30 units, raising rent | `renewal-notice-va` | 60 days before the end; 90 from 2027-07-01 (§ 55.1-1204(K)) |
| Same - landlord owns 2 units | `renewal-notice-va-small` | No statutory notice duty |
| Landlord declines to renew 25 month-to-month tenants at once | `periodic-tenancy-notice-va` | 60 days (§ 55.1-1253(B)) |
| Tenant stays two weeks after the lease ends | `holdover-ca`, `holdover-rate-va` | Actual damages; opt-in 150% per diem (§ 55.1-1253(C)) |
| Tenant breaks lease to buy a house | `early-termination-ks` | Mitigation; no acceleration (§ 55.1-1251) |
| Soldier gets PCS orders | `military-lease-termination-va` | § 55.1-1235 |
| Guard member called to state active duty for 45 days | `edu-servicemember-rights-va` | SCRA rights extended (§ 44-102.1(A)); added from source 4 |
| DV victim with a protective order | `dv-lease-termination-va` | 28 days (§ 55.1-1236) |
| Fire makes the unit unlivable | `casualty-termination-va` | 14 days, 21 from 2027 (§ 55.1-1240) |
| Building condemned after tenant's code complaint | `casualty-termination-va`, `edu-landlord-repair-duties-va` | § 55.1-1243.2 |
| Sole tenant dies | `emergency-contact-va`, `edu-deceased-tenant-va` | § 55.1-1256 |
| Tenant moves out, no forwarding address | `security-deposit-return-va` | Hold; State Treasurer after one year (§ 55.1-1226(B)) |
| Damage exceeds the deposit; contractor needed | `security-deposit-return-va` | Notice in 45 days, 15 more to itemize (§ 55.1-1226(E)) |
| Tenant wants to attend the move-out inspection | `security-deposit-return-va` | Written request; within 72 hours of possession (§ 55.1-1226(G)) |
| Tenant wants the deposit returned early for a fee | `expedited-deposit-disposition-va` | Separate written request (§ 55.1-1226(D)) |
| Tenant leaves furniture behind | `abandoned-property-va` | 24-hour statement or 10-day notice (§ 55.1-1254) |
| **Sale, structure and scope** | | |
| Landlord sells the building | `landlord-disclosure-va`, `edu-sale-and-foreclosure-va` | Buyer's name and contact; deposits transfer (§§ 55.1-1216, 55.1-1213) |
| Lender starts foreclosure on a rented house | `foreclosure-notice-va` | 5 business days (§ 55.1-1237) |
| Owner converts the apartment building to condominiums | `edu-sale-and-foreclosure-va` | **Gap found:** declarant's formal notice and 60-day exclusive purchase right (§ 55.1-1982(C)-(D)) were in no row; added to `edu-sale-and-foreclosure-va` |
| Room rented in the owner's own house | `edu-vrlta-scope-va`, `edu-fair-housing-va` | Act applies (no owner-occupant exclusion); fair-housing exemption for owner-occupied up to 4 families (§ 36-96.2(B)) |
| Apartment for the building's maintenance employee | `edu-vrlta-scope-va` | Excluded (§ 55.1-1201(C)(6)) |
| Extended-stay motel resident for 4 months as a primary residence | `edu-vrlta-scope-va` | Covered after 90 days (§ 55.1-1201(D)) |
| Squatter in a vacant single-family house | `edu-unauthorized-occupant-removal-va` | Emergency hearing after 72-hour notice (§ 8.01-126) |
| Local ordinance caps rent increases | `edu-local-preemption-va` | Superseded (§ 55.1-1201); flagged |
| Short-term rental of the unit | none | Out of scope |
| Manufactured home lot | none | Chapter 13, deprioritized |
| Office lease in the same building | none | Chapter 14 nonresidential, out of scope |

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engine:** a regex search of the whole Code of Virginia, run in the built-in browser. Corpus: the official Law Library title files (law.lis.virginia.gov, 76 CSV files, 33,702 sections, compiled before the 2026 session) overlaid with every section on the official '2026 Updates' pages (1,976 fetched section-open: 1,464 replaced, 512 added), 34,086 sections in all (instruction 55). Searches are case-insensitive JavaScript regular expressions; 'within N' means within N characters; every word form was written into the pattern (e.g. 'bed ?bugs?|bedbug|cimex'). **Control term** 'zqxvbnmwt' returned 0 at the start and at the end. Every landlord-relevant hit was opened section-open.

| # | Search | Hits | Result |
|---|---|---|---|
| 1 | zqxvbnmwt (control, start) | 0 | True empty |
| 2 | security deposit ... interest / interest ... security deposit | 7 sections | Only § 54.1-2108.1 (foreclosure), § 55.1-1204 ('10 percent interest'), transfer of 'any accrued interest' (§§ 55.1-1213, 55.1-1317, 55.1-1405), § 55.1-1226 ('landlord's interest'), § 55.1-2500 → **no interest duty**; `edu-no-deposit-interest-va` |
| 3 | radon | 6 | Sales disclosure only (§ 55.1-703) → `edu-no-radon-disclosure-va` |
| 4 | sex offender within 200 characters of lease / tenant / landlord / rental | 0 | `edu-no-sex-offender-disclosure-va`; Form 200 § 30 borrows the sales notice (§ 55.1-703) |
| 5 | bed bug / bed bugs / bedbug / cimex | 0 | `edu-no-bedbug-disclosure-va` |
| 6 | psychologically impacted / stigmatiz / homicide / suicide / death on property, within 200 of landlord-tenant terms | 0 | `edu-no-stigmatized-property-rule-va` |
| 7 | electric vehicle / charging station within 200 of landlord-tenant terms | 2 | Condominium (§ 55.1-1962.1) and co-op proprietary lessee (§ 55.1-2139.1) only → `edu-no-ev-charging-right-va` |
| 8 | flag within 120 of landlord-tenant terms | 0 | `edu-no-flag-display-rule-va` |
| 9 | police / emergency call within 200 of evict / terminat | 0 | `edu-no-police-call-protection-va` |
| 10 | pet (deposit / fee / rent) | 2 | § 36-96.3:1 (no pet fee for assistance animals), § 55.1-1200 (pet deposit is a security deposit) → `edu-no-pet-fee-limit-va` |
| 11 | rent control / rent stabiliz / rent regulation / control of rents | 6 | None housing → `edu-local-preemption-va` |
| 12 | marijuana / cannabis within 200 of tenant / landlord / lease / rental | 1 | § 4.1-809 (2026, licensee premises) → no tenant protection; `smoking-policy` tagged |
| 13 | immigration / citizenship within 200 of landlord-tenant terms | 0 | Checklist rows (immigration-status inquiry; immigrant tenant act) |
| 14 | waterbed / flotation | 0 landlord-tenant | Not located |
| 15 | early termination fee | 0 landlord-tenant | Not located |
| 16 | unconscionab | UCC only | §§ 8.2-302, 8.2A-108 (sales, goods leases); no residential rule |
| 17 | deposit installment / pay the security deposit in installments | 0 | Not located |
| 18 | (lease / demise) within 80 of (more than / exceeding) (five / seven / twenty-one) years | 4 | State-agency and mineral leases (§§ 2.2-1151, 29.1-105, 45.2-1726, 53.1-31); § 11-2(6) (statute of frauds) and § 55.1-407 (recording) read directly |
| 19 | (false / incomplete / misrepresent) within 120 of application, Chapter 12 only | 0 | No misrepresentation termination rule |
| 20 | rent / let ... more than one tenant ... same room | 0 | No double-letting rule |
| 21 | farm / agricultur in Chapters 12-14 | 4 | § 55.1-1400 (nonresidential incl. agricultural) → Chapter 14, deprioritized |
| 22 | well / septic within 150 of tenant / landlord / lessee | 59 | Titles scanned; none a landlord or tenant duty |
| 23 | winter / cold weather / temperature within 200 of disconnect / terminat ... service | 0 | No cold-weather rule |
| 24 | sales / use tax within 150 of rent / lease / lodging ... residential / 90 | 0 | Then 'accommodations ... fewer than / less than 90': § 58.1-602 (transient lodging taxable) |
| 25 | (Indian / tribal) (reservation / land) within 200 of lease / tenant | 0 | Not located |
| 26 | foreign adversar | 3 | §§ 55.1-507, 55.1-508 (agricultural land), § 3.2-102 → no lease rule |
| 27 | receipt / collect rent ... assignment / deed of trust ... duty | 0 | Not located |
| 28 | radon within 200 of construction / building code | 0 | Not located |
| 29 | tow ... kickback / rebate / compensation ... owner / landlord | 4 | Unrelated (§§ 21-188, 21-268, 33.2-2107, 46.2-116) |
| 30 | receiver within 200 of rents / blight / nuisance / derelict | 8 | § 15.2-907.2 (derelict-building receivership; opening read); others bond and authority remedies |
| 31 | common nuisance / drug blight / keeping a house for drugs | 12 | § 18.2-258 (premises used for illegal drugs a common nuisance; opening read) |
| 32 | vacat within 120 of freez / winter / heat | 0 | Not located |
| 33 | minor / child within 120 of unlawful detainer | 0 | Not located |
| 34 | condemn / unfit for human / placard within 200 of tenant / rent / lease / occupant | 16 | Eminent domain and agency sections; landlord-tenant: § 55.1-1243.2 (Chapter 12) |
| 35 | (electronic / online / digital) payment / portal within 200 of rent / tenant | 3 | § 55.1-1209 (records), court-clerk sections |
| 36 | "Self-service storage facility" means | 1 | § 55.1-2900: storage incident to a residential lease excluded |
| 37 | sprinkler within 150 of residential / dwelling / apartment | 0 | Not located |
| 38 | apply payment ... first / priority / order ... rent | 2 | § 8.4A-106 (funds transfers), § 55.1-1203 → no order-of-application rule |
| 39 | quiet enjoyment / quiet possession / peaceable possession / peaceful possession | 6 | § 55.1-1604 (short-form lease covenant, read); § 55.1-360 (deed covenant) |
| 40 | attorns / attorned / attornment | 2 | §§ 55.1-1608, 55.1-1609 (attornment to a stranger void, read) |
| 41 | home warranty | 1 | § 55.1-3201 (exemptions), unrelated |
| 42 | (real estate / property) tax ... portion / share ... rent | 0 | Not located |
| 43 | window guard | 0 | Not located |
| 44 | (elderly / senior / 55 years) within 200 of pet / animal | 1 | Unrelated (§ 6.2-103.2) |
| 45 | algorithm | 14 | None rent-setting |
| 46 | guaranty / guarantor / cosigner within 200 of rental agreement / lease / tenant | 3 | Insurance and utility sections; no residential guaranty rule |
| 47 | occupancy standard / occupancy limit | 3 | **§ 36-105.4** (two per bedroom presumed reasonable, read whole) → `edu-fair-housing-va`, `permitted-occupants` note |
| 48 | (servicemember / military / armed forces) within 200 of rental application | 0 | Not located |
| 49 | Servicemembers Civil Relief Act | 12 | **§ 44-102.1(A)** (Guard on Title 32 or state active duty, read) → `edu-servicemember-rights-va`; § 55.1-1208 already cited; others unrelated |
| 50 | (active duty / military service) within 200 of unlawful detainer / eviction | 0 | Not located |
| 51 | (prior / previous / former) (occupant / tenant / resident) ... bill / charges / account / service | 1 | § 15.2-2119.4 (opening read) |
| 52 | blank space(s) / line(s) ... lease / rental agreement | 0 | Not located |
| 53 | (assistance / service / support) animal ... liab / immun | 1 | § 36-96.3:1 (no immunity) |
| 54 | (association / declarant) ... rental / lease ... fee / charge / deposit | 0 | Not located |
| 55 | crime-free / crime free | 0 | Not located |
| 56 | (writ of possession / eviction) within 200 of trespass | 1 | § 8.01-470 (writ binds tenants, occupants, guests and trespassers; read in part) |
| 57 | (shall not / no court) require ... form ... notice / pleading / lease | 1 | Unrelated (§ 9.1-908) |
| 58 | elevated blood lead / lead poison | 3 | **§ 36-106(E)** (painted surfaces, tenant termination, retaliation; read) → `edu-lead-paint-rules-va`; §§ 8.01-226.7, 32.1-46.1 |
| 59 | squat | 0 | Not located; `edu-unauthorized-occupant-removal-va` (§ 8.01-126) |
| 60 | sexual harassment within 200 of tenant / housing / dwelling / rental | 0 | Not located |
| 61 | conver ... condominium ... tenant | 1 | **§ 55.1-1982** (read (C)-(F)) → `edu-sale-and-foreclosure-va` (found by the scenario screen) |
| 62 | nonresident ... rent ... withh | 0 | Not located |
| 63 | (energy / efficiency) ... charge / meter ... tenant | 0 | Not located |
| 64 | zqxvbnmwt (control, end) | 0 | True empty |

## Decisions that need Taylor (short list)

None open. Decided 2026-09-28 and applied: 1 (two versions only where wording differs by portfolio size: four `va-size-*` pairs, more-than-4 default, cross-state 'units owned' flag), 2 (`homestead-waiver-va` offered as an optional clause).

**Integrity:** 1,405 rows (1,320 + 85 new); VA 137 active (all VERIFIED); every other state's count unchanged (AZ 109, CA 157, CO 116, FL 107, GA 103, KS 129, MN 139, NC 112, ND 122, NE 123, NJ 85, NV 121, OH 97, SC 110, SD 99, TN 129, TX 135, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row.

## 18. Sync note (Claude Code, 2026-09-28)

- Installed as delivered; no corrections needed. The cross-state prefix scan (no `Va. Code Ann.` outside VA rows) was repeated at sync and passed.
- Statute spot-check against the official Code of Virginia (law.lis.virginia.gov, read directly): § 55.1-1201 (no small-landlord exemption; the exemptions are transient lodging and similar), § 55.1-1204(E) (late charge only if in the written lease; the lesser of 10% of periodic rent or 10% of the remaining balance), § 55.1-1226 (two months' cap; 45-day itemized return; notice of the right to attend the move-out inspection within five days of a notice to vacate; inspection within 72 hours of possession), § 55.1-1245(F) (14-day pay-or-quit, in the version effective until 2027-07-01), § 55.1-1250 (payment 48 hours before the eviction cancels it; a landlord of four or fewer units may limit redemption to once per lease period by written notice) and § 55.1-1253(C) (lease liquidated holdover damages up to 150% of the daily rent, 100% for HUD housing, after the termination date in the landlord's notice). All match the VA rows. One wording note, not a defect: `holdover-rate-va` also applies "after this Lease otherwise ends", where the statute speaks only of the date in the landlord's notice; the log's §7 item 3 already records that gap.
- The four `va-size-*` pairs are choice groups with the more-than-4-units variant as default, so a landlord with four or fewer units must swap to the `-small` variant by hand until the app stores how many units a landlord owns (the cross-state flag in §14).
- Legal watch: `stateConfig.js` VA entry (96 sections, queries paired with "Code of Virginia", eCFR 24 CFR 100.204 and 40 CFR 745.113, LegiScan-US 50 U.S.C. § 3955) and `legal-watch-va.yml` (Mondays 17:30 UTC), validated offline. The live dry-run and seed-baseline wait for LegiScan's October allowance.

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Full verdict list: `lease-clause-scrub-verdicts.md`. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `redemption-rights-va`, `portable-solar-va`, `military-lease-termination-va` (new rows); `security-deposit-return-va`, `renewal-notice-va`, `dv-lease-termination-va`, `foreclosure-notice-va` → existing rows that already state them. In three unit-count choice groups (redemption, renewal notice, plug-in solar), the more-than-4-units member moved to education; the four-or-fewer rows left the groups and are now plain optional clauses (the payment-methods pair is unchanged).
- **Trimmed:** `late-fee-limit-va`, `returned-payments-va`, `acceptable-payment-methods-va`, `casualty-termination-va` (landlord's termination right with its 2027 conditions; tenant options → `edu-casualty-termination-va`).
- **Optional (pattern 3):** `meth-disclosure-va`, `defective-drywall-disclosure-va`, `military-air-zone-disclosure-va`, with `edu-pre-signing-disclosures-va`.
