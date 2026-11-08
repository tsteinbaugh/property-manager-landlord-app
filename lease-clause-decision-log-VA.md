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
| **Mandated wording:** acceptance of partial rent with reservation; 24-hour abandoned-property statement in the termination notice | §§ 55.1-1250, 55.1-1254 | Notice templates, not the lease; recorded in `edu-redemption-rights-va` (pointer corrected at the 2026-09-30 retro sync; `redemption-rights-va` was switched off 2026-09-29) and `abandoned-property-va` |
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

### Vouches given
- **2026-10-04:** `surrender-end-of-term` (CA's proposal) and `default-by-tenant` (MN's proposal), both vouched for VA; reasoning in "Circle-back checks (SOP 1.55)" at the end of this log.

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

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `redemption-rights-va`, `portable-solar-va`, `military-lease-termination-va` (new rows); `security-deposit-return-va`, `renewal-notice-va`, `dv-lease-termination-va`, `foreclosure-notice-va` → existing rows that already state them. In three unit-count choice groups (redemption, renewal notice, plug-in solar), the more-than-4-units member moved to education; the four-or-fewer rows left the groups and are now plain optional clauses (the payment-methods pair is unchanged).
- **Trimmed:** `late-fee-limit-va`, `returned-payments-va`, `acceptable-payment-methods-va`, `casualty-termination-va` (landlord's termination right with its 2027 conditions; tenant options → `edu-casualty-termination-va`).
- **Optional (pattern 3):** `meth-disclosure-va`, `defective-drywall-disclosure-va`, `military-air-zone-disclosure-va`, with `edu-pre-signing-disclosures-va`.

### Verdict for every lease clause

All 41 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-termination-va` | Education | — | tenant right |
| `foreclosure-notice-va` | Education | — | landlord duty, tenant remedy |
| `military-lease-termination-va` | Education | — | tenant right |
| `portable-solar-va` | Education | — | tenant right |
| `redemption-rights-va` | Education | — | tenant right |
| `renewal-notice-va` | Education | — | landlord duty |
| `security-deposit-return-va` | Education | — | cap and landlord duties |
| `acceptable-payment-methods-va` | Split | CONSTRAINED_TERM | keep methods; receipt and fee rules to edu |
| `casualty-termination-va` | Split | SERVES_LANDLORD | keep landlord termination right; tenant rights to edu |
| `late-fee-limit-va` | Split | CONSTRAINED_TERM | keep fee (must be in lease to be charged); cap to edu |
| `returned-payments-va` | Split | CONSTRAINED_TERM | keep fee; $50 cap to edu |
| `defective-drywall-disclosure-va` | Optional + education | SERVES_LANDLORD | disclosure before signing |
| `meth-disclosure-va` | Optional + education | SERVES_LANDLORD | disclosure before signing |
| `military-air-zone-disclosure-va` | Optional + education | SERVES_LANDLORD | disclosure before signing |
| `abandoned-property-va` | Keep | SERVES_LANDLORD |  |
| `acceptable-payment-methods-va-small` | Keep | SERVES_LANDLORD | opt-in |
| `assistance-animal-accommodation-va` | Keep | SERVES_LANDLORD |  |
| `damage-insurance-va` | Keep | SERVES_LANDLORD |  |
| `electronic-notices-va` | Keep | SERVES_LANDLORD | opt-in |
| `emergency-contact-va` | Keep | SERVES_LANDLORD |  |
| `expedited-deposit-disposition-va` | Keep | SERVES_LANDLORD | opt-in |
| `fee-disclosure-statement-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1204 |  |
| `holdover-rate-va` | Keep | CONSTRAINED_TERM | opt-in |
| `homestead-waiver-va` | Keep | SERVES_LANDLORD | opt-in |
| `landlord-disclosure-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1216 |  |
| `landlords-access-va` | Keep | SERVES_LANDLORD |  |
| `mold-disclosure-va` | Keep | SERVES_LANDLORD | report deemed correct unless tenant objects |
| `move-in-inspection-va` | Keep | SERVES_LANDLORD | report deemed correct unless tenant objects |
| `no-sublet-assign-va` | Keep | SERVES_LANDLORD |  |
| `nonresident-owner-agent-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1211 |  |
| `periodic-tenancy-notice-va` | Keep | CONSTRAINED_TERM | lease may set the period |
| `pet-policy-va` | Keep | SERVES_LANDLORD |  |
| `portable-solar-va-small` | Keep | SERVES_LANDLORD | opt-in |
| `redemption-limit-va-small` | Keep | SERVES_LANDLORD | opt-in |
| `renewal-notice-va-small` | Keep | CONSTRAINED_TERM |  |
| `renters-insurance-notice-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1206(D) |  |
| `smoke-co-alarms-va` | Keep | SERVES_LANDLORD |  |
| `tenant-duties-va` | Keep | SERVES_LANDLORD |  |
| `tenant-repair-agreement-va` | Keep | SERVES_LANDLORD | opt-in |
| `tenant-rights-statement-va` | Keep | SERVES_LANDLORD | acknowledgment of required statement |
| `utility-billing-va` | Keep | SERVES_LANDLORD | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1212 | opt-in |

---

## Retro checks (SOP 1.6), 2026-09-30

**Date:** 2026-09-30. **Scope:** the 11 [Retro] rules and 1 targeted fix named in the task prompt, nothing else (rule 1). **Delta:** `lease-clauses-VA-retro-delta.csv`: 23 rows (14 new, 9 changed), all VA-only rows. **No shared row was touched**, and no shared text edit is proposed.

**Housekeeping (rule 8).** At the start I deleted the old output files from this chat's first pass: `lease-clause-decision-log-VA.md`, `lease-clause-decision-log-named-topic-checklist.md` and `lease-clauses-VA-sync.csv`. The files uploaded for this task are the only source of truth. Where they conflict with earlier material in this chat or in the VA log, they win:
- The master now has 1,813 rows and 135 active VA rows. The log's "137" figures (§0, §8) predate the 2026-09-29 scrub.
- Log §4 says the § 55.1-1250 wording is recorded in `redemption-rights-va`. That row was switched off on 2026-09-29, and the wording now lives in `edu-redemption-rights-va`. The log's pointer should be corrected at sync (rule 63).
- My earlier suggestion in this chat to change `periodic-tenancy-notice-va` was withdrawn after Taylor's answer (see Decisions below).

**How the statutes were read (rules 11, 12, 14, 15).**
- Every section relied on was read section-open on 2026-09-30 in the built-in browser, on the official Code of Virginia (law.lis.virginia.gov), and saved under `src/`.
- Each saved file's SHA-256 matches the browser's SHA-256 of the same text:

| File | Contents | SHA-256 |
|---|---|---|
| `batch1.txt` | Title 8.01, Chapter 3, Articles 13, 13.1 and 14 (unlawful detainer, distress, ejectment); Title 55.1 Chapter 16; §§ 8.01-470, 8.01-471, 16.1-94.01, 16.1-106, 16.1-107 | `79a0a735…ff159b9` |
| `batch2a.txt` | §§ 59.1-198, 59.1-199, 59.1-200 (all versions), 59.1-204, 8.01-156, 8.01-454, 8.01-296, 18.2-59.1, 16.1-88.03, 36-7.2 | `5f630b96…a85` |
| `batch2b.txt` | §§ 55.1-1255, 55.1-1256, 55.1-1254, 55.1-1229, 55.1-1230, 55.1-1248, 55.1-1240, 55.1-1411, 55.1-1227, 55.1-1226, 8.01-226.12, 59.1-207.45, 59.1-501.2 | `ec68dd8b…e39` |
| `batch3.txt` | §§ 36-99.5, 36-139, 55.1-1410, 55.1-1604, 55.1-1600, 36-96.2, 36-96.3, 36-96.3:1, 8.01-130.8, 8.01-130.9, 8.01-130.12, 55.1-1248, 55.1-1200, 44-209 | `7b619479…a2a` |
| `rules-part7B.txt` | Rules of the Supreme Court of Virginia, Part Seven B (pdf pages 569–580 of the Court's rules PDF) | `28135289…724` |

- Chapter 12 (81 section versions): the saved copy was re-verified against the live vacodefull chapter page. Per-section hash chain `a436a614d6fd9801889aea117495c92f0a9af584b640eb757194508294c31c57`.
- Search battery: `src/battery-2026-09-30.txt`. It records each pattern, hit count, the sections hit, the positive tests and the control, and was saved before any hit was read.
  - Engine: in-browser regex over the whole Code of Virginia. That is 34,086 sections: the official Law Library title files overlaid with every section on the official 2026 Updates pages (VA log §17).
  - Control 'zqxvbnmwt' returned 0 hits at the start and at the end.
- Research mode was not used (rule 9). The whole code was loaded and searched directly, and no statute read as ambiguous in a way that research would settle.
- No row in the delta rests on recall. Sections read only in part, or not at all, are labelled that way in the notes.

### One line per rule

| Rule | Verdict | What was read | Rows changed |
|---|---|---|---|
| **37** Tenancy type | **Fixed.** Five rows were checked for how they work in fixed-term vs periodic tenancies (details after this table). | §§ 55.1-1204(C), (F), (K) (both versions); 55.1-1250(A); 55.1-1253(A)–(D); 8.01-130.9; plus the scrub-created rows | `redemption-limit-va-small`, `edu-renewal-and-rent-increase-va`, `edu-periodic-tenancies-va`, `edu-distress-for-rent-va` |
| **39** Eviction duties | **Fixed.** Part 7B read whole: no rule suspends a statute, and the pending-amendments page lists no Part 7B change. Findings after this table. | Title 8.01, Chapter 3, Articles 13, 13.1, 14; §§ 8.01-156, 8.01-296, 8.01-454, 8.01-470, 8.01-471, 16.1-88.03, 16.1-94.01, 16.1-106, 16.1-107, 18.2-59.1, 36-7.2, 44-209, 55.1-1250, 55.1-1255 (whole); every `unlawful detainer` / `evict` hit outside Chapter 12 screened in context (battery, 42 + 42 hits); Rules Part 7B whole; whole rules PDF searched (6 hits) | New `edu-post-eviction-property-va`, `edu-eviction-landlord-duties-va`; changed `edu-eviction-process-va`, `edu-distress-for-rent-va`, `edu-fair-housing-va` |
| **41b** `for-cause-eviction` | **Fixed** (new row). No just-cause or good-cause rule. Log §0 (instruction 31) had already found no just-cause renewal law, but VA had no row with this key. | Whole-code battery (just-cause pattern: 2 unrelated hits; refuse-to-renew pattern: 6 hits); § 55.1-1258 (both versions; (D) "for any other reason not prohibited by law"), §§ 55.1-1245(D), 55.1-1253(B), 55.1-1410(B), 55.1-1208(A)(2), 55.1-1204(H), 36-7.2 | New `edu-no-for-cause-eviction-va` |
| **43** Cure promises | **Already covered in §0** (instruction 33 row). Neither starting row gives away a no-cure right (details after this table). | `default-by-tenant`, `application-of-payments` re-read against § 55.1-1245 | None |
| **48** Separate documents | **Fixed.** Log §4 already covered most of this; one rule was missing (details after this table). | §§ 55.1-1226(D), 55.1-1204(B), (H), 55.1-1250, 55.1-1254, 55.1-1410(B) | `edu-periodic-tenancies-va` |
| **49** Collection costs | **Fixed** (education sentence added). Virginia has no outright ban on collection costs, but it limits them (details after this table). | § 55.1-1208(A)(4); § 55.1-1245(H)–(I), which become (J)–(K) from 2027-07-01; §§ 55.1-1247, 55.1-1251, 55.1-1212, 55.1-1229(A)(3), 55.1-1250; the five starting rows | `edu-prohibited-lease-terms-va` |
| **50** "Lease controls" wording | **Fixed.** Log §3.4 had already made most of these choices on purpose. One right had been recorded but not offered, and is now offered (details after this table). | Chapter 12 regex for "if the rental agreement so provides", "unless otherwise agreed", "as specified in the rental agreement" and similar (42 hits in 19 sections), each read in its section; § 8.01-126(F)(3) | New `tenant-records-copy-charge-va` |
| **51** Plain language / consumer statutes | **Fixed** (two new rows). | Battery (plain-language pattern: 72 hits, 11 in a contract context, none reaching leases; consumer-contract pattern: 4 hits); §§ 59.1-198, 59.1-199, 59.1-200 (all four versions), 59.1-204 whole; § 36-139(26) | New `edu-consumer-protection-act-va`, `edu-no-plain-language-rule-va` |
| **53** Figure vs shared clause | **Fixed** one own row; the other six starting rows checked, no issue (details after this table). | § 55.1-1253(C)–(D); §§ 55.1-1204(D), (J), 55.1-1233, 55.1-1244, 55.1-1244.1, 55.1-1245(F); §§ 36-99.5, 55.1-1220(A)(8), 55.1-1229(E) | `holdover-rate-va` |
| **54t** Tenant-caused damage | **Fixed** (education row). The law already covers it, so no clause is offered. `tenant-caused-damage-tn` was read but not tagged (details after this table). | §§ 55.1-1227(A)(7), (A)(12); 55.1-1245(H); 55.1-1248; 55.1-1226(A)(ii); 55.1-1240 (both versions); 55.1-1251; 55.1-1411; 55.1-1208(A)(1); `casualty-termination-va` and `edu-casualty-termination-va` first | New `edu-tenant-caused-damage-va` |
| **27** Seven topics | **Fixed.** All seven now have a row; each outcome is listed after this table. | Battery (patterns for algorithm, blank, camera / security, fees as rent, quiet enjoyment, forms); sections as listed | Seven new rows (listed after this table) |
| **Fix 12** `edu-casualty-termination-va` | **Scope confirmed statewide; row fixed.** Details after this table. | § 55.1-1240 (both versions; 2026 Acts ch. 1117); § 55.1-1201; §§ 55.1-1251, 55.1-1411 | `edu-casualty-termination-va` |

#### Details

**Rule 37 (tenancy type).**
- **Redemption limit.** § 55.1-1250(A) lets a small landlord limit redemption to "once per lease period", but a periodic tenancy may start a new "lease period" every week or month. The clause now carries a hand-filled prompt: use only in a fixed-term lease.
- **Renewal notice.** The § 55.1-1204(K) notice runs from "the end of the rental agreement term". It excludes § 55.1-1253(C) holdovers and is silent on leases written as periodic. That open question went to education, on Taylor's answer (see Decisions).
- **Distress.** Under § 8.01-130.9, a periodic tenancy counts as one continuing lease for the six-month priority limit.
- **Checked, no issue:**
  - Deposit cap: "two months' periodic rent" (§ 55.1-1226(A)), not counted per lease year.
  - Late fee: per periodic rent.
  - Holdover liquidated damages: per diem of the monthly rent.
  - `periodic-tenancy-notice-va`: states a floor.
  - Scrub-created rows: `edu-casualty-termination-va` is covered under fix 12. `edu-pre-signing-disclosures-va`, `edu-redemption-rights-va`, `edu-portable-solar-va` and `edu-military-lease-termination-va` state no tenancy-type figure.

**Rule 39 (eviction duties).** Screening found these landlord duties, prohibitions and immunities:
- § 8.01-126(E): disclose payments to the court.
- § 8.01-126(F)(1)–(3): separate written notice to amend the amount; no later suits for amounts that could have been included; mark the judgment satisfied if the unit is re-rented.
- § 8.01-128(B): 15-day mailed notice before a continuance date.
- §§ 8.01-454 and 16.1-94.01: mark a paid judgment satisfied within 30 days ($100 fine; costs and attorney fees).
- § 55.1-1250(D): tell the sheriff when the tenant redeems.
- § 8.01-471: writ within 180 days, void if not executed within 30 days; no writ after a new written lease.
- § 8.01-470: 72-hour notice; forcible entry; the writ binds occupants, guests and trespassers.
- § 8.01-296(2)(b): posted service must also be mailed.
- § 16.1-88.03: entities may file without a lawyer.
- § 16.1-107(C): appeal bond; rent to the landlord by the 5th.
- § 55.1-1255: post-writ property (24 hours; no liability for risk of loss; sale proceeds).
- Animals: **confirmed absent** (word-bounded patterns, 0 hits).
- § 18.2-59.1(B): sexual extortion by threatening eviction.
- § 44-209(B), (D): shutdown continuance exception; owner's foreclosure stay.
- § 36-7.2: public housing authorities only.
- Lockouts and record sealing were already covered by `edu-self-help-eviction-va` and `edu-eviction-record-expungement-va`.
- `edu-eviction-process-va` fixes:
  - Its "full month's rent where rent is due in advance" hid the § 8.01-126(F)(3) condition that the lease make rent "due and payable on the first of the month in advance for the entire month".
  - Its shutdown sentence lacked the § 44-209(B) exception.
  - Its § 8.01-470 citation had been read "title and summary only"; it is now read whole.

**Rule 43 (cure promises).** Already covered in log §0 (instruction 33 row).
- `default-by-tenant` carves out "where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure", which preserves § 55.1-1245(C), (E).
- `application-of-payments` preserves only a *statutory* cure for nonpayment and promises no cure for other breaches.

**Rule 48 (separate documents).** Log §4 already recorded § 55.1-1226(D) (expedited disposition request), §§ 55.1-1204(B), (H) (DHCD statement and signed form) and §§ 55.1-1250 / 55.1-1254 (notice wording).
- Missing: the § 55.1-1410(B) change-of-use notice "shall not be contained in the rental agreement or lease, but shall be a separate writing". It is recorded here.
- `edu-periodic-tenancies-va` now says it in its text. Its note had claimed "(VA log §4)"; that pointer is corrected.
- No clause tries to supply any of these notices.

**Rule 49 (collection costs).** Virginia has no outright ban, but it limits collection costs:
- Costs only "if court action has been filed" (§ 55.1-1245(H)(v)).
- No attorney fees if the tenant's failure was reasonable (§ 55.1-1245(I)(iv)).
- Notice-service cost capped at $12 (§§ 55.1-1247, 55.1-1251).
- No attorney-fee term "except as provided in this chapter" (§ 55.1-1208(A)(4)).

All five starting rows stay within these limits: `default-by-tenant` ("to the extent permitted"), `landlords-access-va` (§ 55.1-1229(A)(3)), `holdover-rate-va`, `redemption-limit-va-small` and `utility-billing-va` (§ 55.1-1212).

**Rule 50 ("lease controls" wording).** Each lease-choice spot and its row:

| Statute | Row |
|---|---|
| Damage insurance (§§ 55.1-1200, 55.1-1206(A)) | `damage-insurance-va` |
| Submetering and billing period (§§ 55.1-1200, 55.1-1212) | `utility-billing-va` |
| Electronic notices (§ 55.1-1202(A)) | `electronic-notices-va` |
| Rent time and place (§ 55.1-1204(D)) | `rent-payment` |
| Tenancy period and notice (§§ 55.1-1204(F), 55.1-1253(A)) | `periodic-tenancy-notice-va` |
| Sublet approval (§ 55.1-1204(G)) | `no-sublet-assign-va` |
| Change notice (§ 55.1-1204(I)) | `edu-renewal-and-rent-increase-va` |
| Renter's insurance (§ 55.1-1206(B)) | `tenants-property-insurance-ks-oh-ca`, `renters-insurance-notice-va` |
| **Copy charge (§ 55.1-1209(E))** | **new `tenant-records-copy-charge-va`** |
| Utilities in rent (§ 55.1-1212) | `services-utilities-provided-ks-oh` |
| Expedited deposit disposition (§ 55.1-1226(D)) | `expedited-deposit-disposition-va` |
| Showing damages (§ 55.1-1229(A)(3)) | `landlords-access-va` |
| Residence use (§ 55.1-1232) | `residential-use-only` |
| Absence notice (§ 55.1-1249) | `extended-absence-notice-ks` |
| Holdover liquidated damages (§ 55.1-1253(C)) | `holdover-rate-va` |
| Emergency contact (§ 55.1-1256) | `emergency-contact-va` |
| Tenant duties agreement (§ 55.1-1220(D)) | `tenant-repair-agreement-va` |
| Homestead waiver (§ 34-22) | `homestead-waiver-va` |

- The copy charge had been recorded but not offered ("trivial value"). SOP rule 54 now says to offer every lawful optional clause, so it is offered, never as a default.
- Deliberately not offered:
  - § 55.1-1226(B): each co-tenant's written agreement to split the deposit refund. This is the tenants' choice and needs no lease term.
  - § 55.1-1224: "unless otherwise agreed", a seller or managing agent is released from liability. A silent lease keeps the release, which serves the landlord.
  - § 55.1-1242: escrow disbursement by agreement. This is court procedure.
  - § 8.01-126(F)(3): the whole-month rule. Education only; it depends on the landlord's own due date.

**Rule 51 (plain language and consumer statutes).**
- No plain-language statute reaches leases.
- The Virginia Consumer Protection Act excludes Residential Landlord and Tenant Act transactions unless the landlord commits a § 59.1-200 misrepresentation or fraudulent practice (§ 59.1-199(5)).
- Section 59.1-200(A)(13) reaches "using in any contract or lease" a void liquidated-damages or penalty clause or a waiver of defense.
- Remedies (§ 59.1-204): actual damages or $500; up to 3× or $1,000 if willful; fees.

**Rule 53 (figure vs shared clause).**
- `holdover-rate-va` applied the liquidated amount "after this Lease otherwise ends". Section 55.1-1253(C) allows it only after "the termination date specified in the landlord's notice".
  - A void liquidated-damages trigger is exactly what § 59.1-200(A)(13) reaches.
  - The trigger is now the landlord's written notice, which may name the last day of the Term.
  - This closes log §7 item 3 and the §18 sync wording note.
- Checked, no issue:
  - `rent-payment`: "except as permitted by applicable law" preserves the tenant's statutory deductions (§§ 55.1-1244, 55.1-1244.1) and hides no Virginia figure.
  - `default-by-tenant`: no figure; the cure period follows the 14-day § 55.1-1245(F).
  - `surrender-end-of-term`: no figure.
  - `holdover-ca`: actual damages; its K.3 note already stands.
  - `acceptable-payment-methods-va-small`: fee at actual third-party cost, as § 55.1-1204(J) says.
  - `smoke-co-alarms-va`: the § 36-99.5 deposit cap ("original or replacement cost, whichever is greater") and no rent increase match; §§ 55.1-1220(A)(8) and 55.1-1229(E) match.

**Rule 54t (tenant-caused damage).**
- What the law already gives the landlord:
  - Repair-and-bill as rent (§ 55.1-1248).
  - Damages (§ 55.1-1245(H)).
  - Deposit deductions (§ 55.1-1226(A)(ii)).
  - After a casualty the tenant caused, actual damages including rent to the end of the term or re-rental, with mitigation and no acceleration (§§ 55.1-1240, 55.1-1251).
  - No rent reduction where the tenant was at fault (§ 55.1-1411).
  - From 2027, landlord termination without the meeting-and-offer steps (§ 55.1-1240(C)(2)).
- The tenant may still terminate under § 55.1-1240, which has no fault exception, and § 55.1-1208(A)(1) bars a waiver. So no state version of `tenant-caused-damage-tn` is offered: both of its parts are already Virginia law, and anything more would be void.

**Rule 27 (seven topics).**

| Topic | Outcome | Row |
|---|---|---|
| algorithmic-rent-setting | Confirmed absent | `edu-no-algorithmic-rent-rule-va` |
| fees-as-rent | Present (§§ 55.1-1200, 55.1-1206, 55.1-1212, 55.1-1248, 55.1-1204.1) | `edu-fees-as-rent-va` |
| landlord-self-cure | Present (§ 55.1-1248; statutory, so education) | `edu-landlord-self-cure-va` |
| lease-completeness | Confirmed absent | `edu-no-lease-completeness-rule-va` |
| quiet-possession | Present as the § 55.1-1604 short-form covenant only | `edu-quiet-possession-va` |
| statutory-forms | Present (§§ 55.1-1600, 36-139(26), (28), 55.1-1250, 55.1-1204.1, 34-22, 8.01-130.4) | `edu-statutory-forms-va` |
| tenant-security-cameras | Present as § 55.1-1229(D) security systems; cameras not named | `edu-tenant-security-systems-va` |

**Fix 12 (`edu-casualty-termination-va`).**
- Scope: § 55.1-1240 has no size, owner-occupant or single-family limit, and the Act has none (§ 55.1-1201; log §12–§13). The scope is statewide.
- The scrub text had dropped two statutory conditions. Both are restored:
  - The landlord's § 55.1-1251 actual damages where the tenant's side caused the damage.
  - The § 55.1-1411 condition that rent is reduced only for destruction "without fault or negligence".
- The 14/21-day rule is now tied to the version of the law in force, not to the date the tenant moves out.

### Decisions (rule 76)
1. **Does the 60-day notice change `periodic-tenancy-notice-va`?** I raised whether larger landlords' month-to-month leases need a 60-day default because of § 55.1-1204(K). Taylor, 2026-09-30: "hmmm, this sounds to me like an education row, not a clause. Help me understand. What is your justification for it being a clause?" I agreed: the clause says "at least 30 days", which is a floor, so it is not wrong for any landlord. Applied: the clause is unchanged. The open question is in `edu-renewal-and-rent-increase-va`, with a pointer from `edu-periodic-tenancies-va`.

No other question needed Taylor. These calls rest on plain statutory text:
- The holdover trigger.
- The redemption prompt.
- Offering the copy-charge clause (rule 54).
- The tenant-caused-damage verdict.

Risks that rest on case law I did not read are labelled "unread" in the notes of `redemption-limit-va-small`, `edu-renewal-and-rent-increase-va`, `edu-tenant-caused-damage-va`, `edu-quiet-possession-va` and `edu-tenant-security-systems-va`.

### Integrity checks on the delta
- The header line is byte-identical to the master. Every row has 17 fields. Line endings are CRLF, with no bare LF.
- No duplicate ids. None of the 14 new ids exists in the master. All 9 changed ids exist, and each is a VA-only row.
- On changed rows, only `bodyText`, `notes`, `verification_status` and `last_checked` differ from the master. The prior notes are kept, and the retro notes are appended as a `| VA:` segment.
- Every `group`, `topic_key`, `content_type`, `rule_type` and `lease_clause_basis` value already exists in the master. No new `topic_key`.
- Every delta row is `is_active` TRUE, VERIFIED, `last_checked` 2026-09-30, and marked `VA-SCOPE`.
- The one new clause carries `SERVES_LANDLORD`; the education rows carry no basis.
- No `choice_group` or `supersedes` is used, so there are no display collisions.
- No bracket sits next to a `{{variable}}`. No new `{{variable}}`.
- `Va. Code Ann.` appears only in VA rows.
- Every section cited in new text is in a saved source, or is labelled as a screened search hit or "not read" (§§ 8.01-546.1, 8.01-546.2, Title 19.2).
- After sync: master 1,827 rows; VA active 149 (135 + 14). Other states unchanged.
- Delta SHA-256: `29fb9e98ec76da83ddaf5ae70a7a9e7684b79ceb616ea15c92f1724efd20f9d9`.

### Proposed SOP changes
1. **When a library-wide pass turns a clause into an education row, re-read the statute's conditions and cross-references before rewording.** Reason: the 2026-09-29 scrub dropped § 55.1-1251 damages and § 55.1-1411's no-fault condition from `edu-casualty-termination-va`.
2. **Rule 53 should check when a figure applies, not only its size.** Reason: `holdover-rate-va` had the right 150 percent cap but a trigger ("after this Lease otherwise ends") the statute does not allow. In Virginia, collecting under such a trigger is a Consumer Protection Act practice.
3. **Rule 37 should name "per lease period" and "per term" limits alongside "lease year" and "renewal".** Reason: Virginia's small-landlord redemption limit is counted "once per lease period", which a periodic tenancy may reset every month.
4. **A lease figure stated as a floor ("at least 30 days") is not a figure conflict when a stricter rule may apply to some landlords. Put the open question in education, not in the clause.** Reason: Taylor's answer on `periodic-tenancy-notice-va`, 2026-09-30.
5. **At retro time, check every "log §N" pointer in `notes` against that log section.** Reason: `edu-periodic-tenancies-va` cited VA log §4 for a separate-writing rule the §4 table did not list.
6. **In absence patterns, put word boundaries on short words (cat, dog, pet).** Reason: an unbounded animal pattern returned 5 false hits (words containing 'cat' or 'dog') before the bounded re-run returned 0.

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.55), 2026-10-04

**Date:** 2026-10-04. **Scope:** rules 35c and 79 and targeted fixes 3–6 from the task prompt, nothing else (rule 1). **Delta:** `lease-clauses-VA-retro-delta.csv`: 21 changed rows, no new rows.
- Body text changed on four of VA's own rows: `late-fee-limit-va`, `acceptable-payment-methods-va`, `casualty-termination-va` and `edu-pre-signing-disclosures-va`.
- The other 17 rows changed only in their notes. Three of them are shared rows (`security-deposit-use`, `no-alterations`, `early-termination-ks`), where only this state's `VA:` segment and `last_checked` changed.
- No shared text was edited, and no shared text edit is proposed.

**Housekeeping (rule 8).**
- The attached `lease-clauses.csv` has 2,876 rows, matching the staging note; 149 VA rows are active.
- At the start I deleted the old output files from the 2026-09-30 retro: `lease-clause-decision-log-VA-retro.md` and `lease-clauses-VA-retro-delta.csv`.
- The files attached for this task are the only source of truth.
- One conflict with earlier material: log §0 says "Proof-of-absence: run on the whole code (§17)", but neither the first pass nor the 2026-09-30 retro loaded the constitution. Rule 35c below closes that.

**How the law was read (rules 11, 12, 14, 15, 79).**
- Everything was read on 2026-10-04 in the built-in browser on the official site, law.lis.virginia.gov, and saved under `src/` with SHA-256 proof (`src/PROVENANCE-2026-10-04.txt`).
- Constitution: `va-constitution-2026-10-04.txt`, the whole text from `/constitutionfull/`. SHA-256 `70cc8281…3356d7` (browser and saved file agree).
  - The text has 130 section headings, matching the 130 section links on the official index (`/constitutionexpand/`).
- Chapter 12: the 81 section versions saved on 2026-09-28 were compared with the live chapter page by normalised-text hash (rule 79). All match, and the live page has no new version.
  - The only byte difference was a tool footer stored after the last history line in the saved file.
- §§ 8.01-27.1 and 8.01-27.2: `s8.01-27.1-27.2.txt`, SHA-256 `f0f0f429…d2d33b`.
- Research mode was not used (rule 9). The constitution and the chapter were loaded whole and read directly.

### One line per rule

| Rule | Verdict | What was read | Rows changed |
|---|---|---|---|
| **35c** Constitution screen | **Checked, no issue.** No provision reaches a residential lease between private parties or protects conduct a VA-tagged clause restricts (details after this table). | Whole constitution, battery saved in `src/battery-2026-10-04-constitution.txt` before reading hits. Controls: 'zqxvbnmwt' 0, 'General Assembly' 261, 'Governor' 141. Positive tests: 'keep and bear arms' 1, 'freedom of speech' 2. Art. I §§ 1, 10–13, Art. XI § 4 and Art. XII read whole. | None |
| **79** Re-read before trusting a summary | **Fixed** (provenance repair). The keyword screen found no row resting on secondary sources (details after this table). | Every active VA row's notes in `lease-clauses.csv` (149); §§ 55.1-1212.1, 55.1-1217 to 55.1-1219, 55.1-1235, 55.1-1250 re-read section-open | `edu-redemption-rights-va`, `edu-portable-solar-va`, `edu-military-lease-termination-va`, `edu-pre-signing-disclosures-va` |
| **Fix 3** Dangling pointers | **Fixed.** 14 rows repointed (details after this table). | Sweep of `bodyText` and each VA note segment on all 149 active VA rows, for the ids of every inactive row in the master and for section-name references | 3 shared rows (`VA:` segment and `last_checked` only), 11 own rows |
| **Fix 4** Scrub-trimmed clauses | **Fixed** three clauses; one more checked, no issue (details after this table). | §§ 55.1-1204(C), (E), (J) (both versions); 55.1-1237; 55.1-1240 (both versions); 55.1-1245(F)–(G) (all three versions); 8.01-27.1, 8.01-27.2; 55.1-1217 to 55.1-1219; a Chapter 12 search for required-content and pre-signing wording (results after this table) | `late-fee-limit-va`, `acceptable-payment-methods-va`, `casualty-termination-va`, `edu-pre-signing-disclosures-va` |
| **Fix 5** `security-deposit-return-va` | **Checked, no restore** (details after this table). | § 55.1-1226 whole; §§ 55.1-1206, 55.1-1208(A)(7) | None |
| **Fix 6** Rule 62 vetting | **Both vouched, no change needed** (see "Vouches given"). | § 55.1-1233; § 55.1-1245(F)–(G) (all three versions); this state's note segments on both rows | None |

#### Details

**Rule 35c (constitution).**
- No cannabis provision. The only hit is the Literary Fund's use of drug-forfeiture proceeds (Art. VIII § 8). The shared `smoking-policy` ban on smoking or vaping marijuana stands.
- Smoking and tobacco: no hits.
- Speech (Art. I § 12) binds only the State: "the General Assembly shall not pass any law abridging…". The `common-area-use` sign rule stands, and its savings sentence already defers to any display the law protects.
- Warrants (Art. I § 10) are addressed to "an officer or messenger".
- Due process, contracts, discrimination and takings (Art. I § 11) bind the State: "the General Assembly shall not…", "governmental discrimination".
- Arms (Art. I § 13) names no actor, and no VA-tagged clause restricts firearms. `edu-firearms-va` records the public-housing-only statute.
- Hunting (Art. XI § 4) is subject to general law.
- Every lease-word hit is a government lease, an oyster-bed bar, a property-tax exemption or 'tenant' inside 'Lieutenant'.
- Virginia has no initiated amendments (Art. XII), so there is no void-initiative check to run.
- Case law and unratified amendments not read (rules 4, 18).

**Rule 79 (re-read before trusting a summary).**
- Rows whose notes record no basis:
  - Rows a research pass wrote: **0 of 144**. The 10 absence rows record a statute-wide search with terms and hit counts.
  - Rows a library-wide pass created or renamed: **4 of 5** recorded none. These were scrub rows that carried citations without a basis; the fifth, `edu-casualty-termination-va`, got its basis at the 2026-09-30 retro.
  - Shared rows with no `VA:` segment: **0 of 49**.
- Repair: the source row's basis is carried forward on all 4 rows (provenance repair, not re-verification). Each section was then re-read against the row's text; every scope, timing and exception qualifier is still carried.
- After repair: **0 of 149** rows record no basis.
- The citations file is a derived summary, and `lease-clause-citations-VA.csv` was not regenerated here. Claude Code should refresh the basis line for these 4 rows at sync.

**Fix 3 (dangling pointers).**
- The two named pointers: `security-deposit-use` now points to `edu-security-deposit-rules-va`, and `no-alterations` now points to `portable-solar-va-small` and `edu-portable-solar-va`.
- The full sweep found 12 more coverage pointers to rows switched off on 2026-09-29: `early-termination-ks` (shared), `renewal-notice-va-small`, `portable-solar-va-small`, `edu-portfolio-size-rules-va`, `edu-security-deposit-rules-va`, `edu-required-disclosures-va`, `edu-no-ev-charging-right-va`, `edu-acceptance-of-rent-with-reservation-va`, `edu-renewal-and-rent-increase-va`, `edu-dv-tenancy-protections-va`, `edu-servicemember-rights-va` and `edu-sale-and-foreclosure-va`.
- Each was repointed to the active row, or marked "(switched off 2026-09-29)" where it is history.
- Provenance notes ("Moved from … by the scrub") were left alone.
- No `bodyText` points at a switched-off row, by id or by section name.
- Re-sweep after the delta: none dangle.

**Fix 4 (scrub-trimmed clauses).**
- **`late-fee-limit-va`.**
  - The 10%-of-periodic-Rent cap is a number the builder can check (backlog M.13).
  - The "10 percent of the remaining balance due and owed" limb of § 55.1-1204(E) depends on what is unpaid when the fee is charged, so no build-time check can catch it. Restored in the statute's words.
  - Also added two conditions the pre-scrub text never carried (rule 78):
    - No late fee after a foreclosure until the successor owner gives written notice of where to pay (§ 55.1-1237).
    - From 2027-07-01, no further late fees on rent in a statutory payment plan while the tenant pays on time (§ 55.1-1245(G), version effective July 1, 2027; landlords with more than four units).
- **`acceptable-payment-methods-va`.** The clause invites the landlord to list portals and cards. A fee filled in there can break § 55.1-1204(J)(1): no processing fee unless a fee-free method is offered, and no card or electronic fee above actual third-party cost. Restored the fee sentence; the `-small` variant already had it. The receipt duty stays in `edu-rent-payment-rules-va`.
- **`casualty-termination-va`.** Restored the 2027 reevaluation request (§ 55.1-1240(D)). It conditions the landlord's own termination right: the lease ends at the end of the notice period only if, after meeting or trying to meet with the tenant, the landlord still finds the home unusable. The tenant's own termination right, the deposit rules and proration stay in `edu-casualty-termination-va`.
- **`returned-payments-va`** (also trimmed). Checked, no issue. The dropped $50 is the § 8.01-27.1(A) processing charge, a cap a number check can catch (backlog M.13: `{{nsf_fee}}` ≤ $50). No condition was lost.
- **Required lease text.** A Chapter 12 search for required-content wording ("rental agreement shall state", "prior to the execution", "at or before the commencement", "on the first page", "separate writing", "shall disclose") found these provisions. Each is carried by an active row or isn't lease text:
  - § 55.1-1204.1, the first-page fee list and fixed sentence: `fee-disclosure-statement-va`.
  - § 55.1-1206, the pre-signing insurance notices and summaries: `renters-insurance-notice-va`, `damage-insurance-va`.
  - § 55.1-1215, mold in the move-in report: `mold-disclosure-va`.
  - § 55.1-1216, owner and manager identity: `landlord-disclosure-va`.
  - § 55.1-1226(D), the expedited request, which must be a separate writing.
  - §§ 55.1-1217 to 55.1-1219, the pre-signing disclosures.

  No trimmed clause lost text a statute requires in the lease itself.
- **Demotions (rule 78).** `military-air-zone-disclosure-va`, `defective-drywall-disclosure-va` and `meth-disclosure-va` went from CONDITIONAL to RECOMMENDED.
  - Each statute says the landlord "shall provide to a prospective tenant a written disclosure… prior to the execution by the tenant of a written lease agreement". No words put the disclosure in or with the lease, so RECOMMENDED is right, and each clause keeps its condition.
  - Fixed `edu-pre-signing-disclosures-va` to say the disclosure must be given before signing. A sentence inside the lease is given at signing, not before it.

**Fix 5 (`security-deposit-return-va`).** No statute requires a notice at signing or in the lease that this clause carried:
- The move-out inspection notice (§ 55.1-1226(G)) is due when the landlord asks the tenant to vacate, or within five days after the tenant's notice of intent to vacate. That is a termination-time notice and never lease text (rule 78).
- The utility-withholding notice (§ 55.1-1226(C)) goes in a termination notice, a vacating confirmation or a separate notice at least 15 days before disposition.
- In-tenancy deduction notices (§ 55.1-1226(E)) and the 45-day itemization (§ 55.1-1226(A)) come later.
- The two-month cap, including premiums paid before the tenancy starts (§§ 55.1-1206, 55.1-1208(A)(7)), is a number for the builder (backlog M.13), with the deposit amount in the fee disclosure.
- The clause only restated rights and duties that apply whatever the lease says. `edu-security-deposit-rules-va` states them, and `security-deposit-use` carries the permitted uses.

### Vouches given (rule 62)
1. **`surrender-end-of-term` (CA proposal, 2026-10-03): vouched, no change needed.**
   - The current wording states a duty Virginia law backs: § 55.1-1233 says the tenant "shall promptly vacate" at the end of the term.
   - "Unless applicable law entitles Tenant to remain" is lawful and accurate here. Virginia has no just-cause rule (`edu-no-for-cause-eviction-va`), but the law can still let a tenant stay: a redemption (§ 55.1-1250), a statutory continuance (§ 44-209), or a holdover the landlord accepts (§ 55.1-1253(D)).
   - This state's note segment records nothing given up on purpose.
2. **`default-by-tenant` (MN proposal, 2026-10-02; ND and CA support): vouched, no change needed.**
   - Virginia requires a 14-day written notice before any nonpayment termination, in every version of § 55.1-1245(F). From 2027-07-01, landlords with more than four units must also send the § 55.1-1245(G) payment-plan notice.
   - Virginia law never lets a landlord proceed on nonpayment without notice, so a self-limiting carve-out reaching both limbs has nothing to remove. The nonpayment limb's written-notice promise matches Virginia law.
   - This state's segment calls the carve-out "KEPT FOR VA" to preserve the § 55.1-1245(C), (E) no-cure routes, and moving it keeps them.
   - The Indiana/Pennsylvania notice decision doesn't arise here, because Virginia's notice is required. The education row that tells landlords about it is `edu-termination-notices-va`, which already states the 14-day notice; nothing to add at the merge.

### Integrity checks on the delta
- The header line is byte-identical to the master's. Every row has 17 fields. Line endings are CRLF, with no bare LF.
- No duplicate ids and no new ids.
- On the 3 shared rows, only `notes` and `last_checked` differ, and every non-VA note segment is byte-identical to the master's.
- On own rows, only `bodyText`, `notes`, `verification_status` (VERIFIED) and `last_checked` (2026-10-04) differ.
- No bracket sits next to a `{{variable}}`. No new `{{variable}}`.
- `Va. Code Ann.` appears only in VA rows and VA segments.
- After sync: master still 2,876 rows; VA active still 149.
- Delta SHA-256: `575dcbd500158f39ef3a17b5b46abf4c00ac5b79114632c9dc7b01e9ccc09d75`.

### For Claude Code
- **Backlog M.13** (builder number checks) for Virginia:
  - `{{late_fee_amount}}` ≤ 10% of periodic Rent.
  - `{{nsf_fee}}` ≤ $50.
  - Security deposit ≤ two months' periodic Rent. If damage or renter's insurance premiums are paid to the landlord before the tenancy starts, the deposit plus those premiums ≤ two months' periodic Rent.
- **Citations file:** refresh the basis line for `edu-redemption-rights-va`, `edu-portable-solar-va`, `edu-military-lease-termination-va` and `edu-pre-signing-disclosures-va`.
- **Log pointer from the 2026-09-30 retro:** log §4 still names `redemption-rights-va`. Correct it at sync.

### Proposed SOP changes
1. **Rule 35's control should prove the constitution is in the same corpus as the code battery, not only that it loads.** Reason: Virginia's log §0 recorded proof-of-absence "on the whole code" while the constitution was never in the corpus. A separate constitution load with its own controls and a section count against the official index closes the gap.
2. **Rule 78's restore check should also ask whether a cap has a limb that varies with facts after signing.** Reason: Virginia's late-fee cap is "the lesser of 10 percent of the periodic rent or 10 percent of the remaining balance". The first limb is a build-time number; the second depends on the unpaid balance on the day the fee is charged, so only clause text can carry it.
3. **When a pre-signing disclosure is offered as a lease clause, the education row should say the disclosure must come before signing.** Reason: a sentence inside the lease is given at execution, not "prior to the execution" (Va. Code Ann. §§ 55.1-1217 to 55.1-1219), so a landlord relying on the clause alone could miss the statute's timing.
4. **Rule 79's hash comparison should strip tool footers from saved files before hashing.** Reason: Virginia's saved Chapter 12 file carried a browser-tool footer after its last history line, which made the final section look changed when the law was identical.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 2b10851`: 21 rows updated (bodies of `late-fee-limit-va`, `acceptable-payment-methods-va`, `casualty-termination-va` and `edu-pre-signing-disclosures-va`; notes on 14 repointed rows and 3 shared-row VA segments), no new rows, nothing refused. VA active 149, unchanged.
- **Citations file:** the 21 rows re-dated; the four provenance-repaired rows note their basis; `late-fee-limit-va` adds §§ 55.1-1237 and 55.1-1245(G), `acceptable-payment-methods-va` § 55.1-1204(J)(1), `casualty-termination-va` § 55.1-1240(D).
- **Log pointer:** the pass asked that log §4's mention of `redemption-rights-va` be corrected; it already was, at the 2026-09-30 retro sync (it now names `edu-redemption-rights-va`).
- **Rule 62:** VA vouched for CA's `surrender-end-of-term` qualifier and MN's `default-by-tenant` sentence (Virginia's 14-day notice is required, so the Indiana/Pennsylvania question doesn't arise); recorded in the backlog tally. CA's edit now waits only on WY.
- **Builder, M.13 (backlog):** `{{late_fee_amount}}` at most 10% of periodic rent; `{{nsf_fee}}` at most $50; deposit plus any premiums paid before the tenancy at most two months' periodic rent.
- **Guards:** all pass. **Statute spot-check, 2 of 2, on law.lis.virginia.gov:** § 55.1-1204(E) (late charge not more than the lesser of 10 percent of the periodic rent or 10 percent of the remaining balance) and § 55.1-1240(D) (tenant's written request to reevaluate within seven days of a casualty termination notice).
- **SOP 1.56:** all four proposals adopted (rules 35, 78, 79). VA's 35c and 79 cells set to ✓.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no VA override. VA's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where VA law lets Landlord proceed without a cure opportunity. Uniform; no VA override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for VA. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any VA row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach VA's law; to be confirmed at VA's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-07/08): Desktop's running record

## VA topic gaps: running record

Pass: Virginia topic gaps (GAPS-PROMPT.md staged 2026-11-07 12:03, SOP 1.99), 2026-11-07 21:04 MT to 2026-11-08. **Status: complete; final delta and log delivered.**

### Step A (passed)
- lease-clauses.csv 56,387,150 bytes, SHA-256 bf1550aa808d…ab953; 14,954 rows / 14,842 active / 150 VA; 236 missing topics. Corpus dbd959d4…57c2ff, 2,097 files verified. Master unchanged at the end (sha bf1550aa808d).
- Taylor approved saving federal sections (rule 12).

### Final delivery (2026-11-08)
- `lease-clauses-VA-gaps-delta.csv`: 254 rows, 17 columns, CRLF (delta sha c321c31f…): 243 new VA rows (228 education, 15 clauses), all VERIFIED, plus 11 existing rows tagged VA (states + VA notes segment only). 236 of 236 topics answered. No new {{variables}}.
- `gaps-log-VA.md` (§1–§7, SOP proposals, topic questions, fetch list).
- Workspace: /home/claude/vagaps (answers/, batteries.jsonl, saved/, ref/check/ errata files and findings summaries, tools/).

### Key outcomes for sync
- New required clause: submetering-lease-statement-va (20VAC5-305-20 three lease statements for submetered/allocated electricity or gas in apartment houses).
- Browser-read regulations (SHA-256 checked): 18VAC62-20 (Fair Housing certification, owners of units occupied by 5+ families), 12VAC5-462 (apartment/condo pool water-quality posting), 20VAC5-305, 20VAC5-330.
- Findings on existing VA rows (§6): hoa-compliance; keys; utility-billing-va; edu-towing-va; tenant-maintenance; edu-no-radon-disclosure-va; edu-no-flood-disclosure-va; edu-rent-payment-rules-va; edu-dv-tenancy-protections-va; edu-tenant-records-va.
- Proposed override: early-termination-va (flat one-month fee), for Taylor at sync.
- Declined clauses (rule 76), each with an edu row: jury waiver, fixed move-out charges, interest clause, fine pass-through, tax escalation, repair-cost termination, environmental-event termination, animal caretaker entry, guarantor sue-first waiver, barred-guest covenant, veterans concession, life-estate clause, materiality labels. Arbitration meets Taylor's rule.

### Independent check (rule 80)
- Round 1: four batches, all rows; 0 ERROR; fixes applied to 69 rows (mostly dropped statutory qualifiers; stale "not held" lines).
- Round 2: the 70 edited rows; 0 ERROR, 5 FIX, 5 NOTE applied. Not clean; no third round allowed. 12 rows edited after the last round are listed in log §5.
- Battery re-run: 1,231 terms; nothing lost; 33 gain only browser-saved sections, all opened.

### Open items
2025 Acts enactment clauses (eviction diversion expiry); Rules of Court Part Six; NIST Handbook 44 / 2VAC5; 24 C.F.R. Part 8; 15 U.S.C. § 1692f; § 36-156.1; Va. Const. art. IV § 13; future Board of Health pool regulations under § 32.1-248.1.

# Topic gaps pass (end-of-run consistency pass, 2026-11-07/08): Desktop's log

## Virginia topic gaps (SOP 1.99): decision log

Pass of 2026-11-07 on GAPS-PROMPT.md (staged 2026-11-07 12:03). Appended by Claude Code to `lease-clause-decision-log-VA.md` at sync. Add-rows-only: no existing row text changed; tags change only `states` and the VA `notes` segment.

### §1 Sources, channel and currency

**Step A.** `lease-clauses.csv` decompressed from `lease-clauses.csv.xz`: 56,387,150 bytes, SHA-256 `bf1550aa808dea7008e4f34338f6f9c0dd0e9fe9be68231b9854faadb28ab953`; 14,954 rows, 14,842 active, 150 active rows carrying VA; `missing-topics-VA.md` lists 236 topics. All matched the prompt. Old outputs deleted at the start: `lease-clause-decision-log-VA-retro.md` and `lease-clauses-VA-retro-delta.csv` (the 2026-10-04 retro). The attached files are the only source of truth; nothing from this chat's earlier passes was relied on where they differ.

**Channel: the Claude Code corpus.** `corpus-VA-20261107.tar.xz` (SHA-256 `dbd959d4b75ffea243fab56ebd571ef8dace66a66a1e4fb21ab5df6b7357c2ff`, matching its `.sha256` file); all 2,097 shipped files hash-checked against `manifest.jsonl` by this pass's own script (0 mismatches; the shipped `verify_va.py` was not run). Official sources only (law.lis.virginia.gov, legacylis.virginia.gov, vacourts.gov). Held and searched: the whole Code of Virginia (`STATUTES.TXT`, 34,494 section records in 76 titles, every version of a multi-version section kept as its own record; 2,360 records are 2026 Updates pages); the Constitution (131 units from `Constitution.csv`); the Rules of the Supreme Court of Virginia (whole rulebook, PDF modified 2026-09-15; 319 rule headings split, matching an independent count of rule-heading lines); VAC chapters 13VAC5-63, 13VAC5-52, 13VAC5-51 (repealed), 18VAC135-50, 18VAC135-20, 18VAC15-30, 18VAC15-20 (repealed), 12VAC5-630 and 12VAC5-460 (628 sections); 2024 Acts chapters 32, 42, 54, 267, 302, 353, 511, 788, 826 and 831. Battery engine: Python regex, case-insensitive and DOTALL, over whitespace-collapsed section bodies, with headings screened separately; controls "zqxvbnmwt" (0) and "Commonwealth" (10,181 units) run in every battery.

**Federal sections (rule 12; Taylor approved saving them at Step A, 2026-11-07).** Saved in the built-in browser and hash-checked: 42 U.S.C. §§ 3602-3607, 3617, 4852d; 15 U.S.C. §§ 1681a, 1681m, 1681s-2, 1681w, 7001, 7003, 7006, 9058; 50 U.S.C. §§ 3931, 3951, 3955; 34 U.S.C. § 12491; 12 U.S.C. § 5220 (with the Protecting Tenants at Foreclosure Act, Pub. L. 111-22 § 702, printed in its notes); 11 U.S.C. §§ 362, 365; 9 U.S.C. § 2 (govinfo link service, United States Code 2024 edition); 24 C.F.R. §§ 5.2005, 5.2007, 100.202-100.204, 982.308, 982.310, 982.404; 16 C.F.R. § 682.3; 40 C.F.R. § 745.113; 47 C.F.R. § 1.4000 (eCFR, titles up to date as of 2026-11-05). Any other federal law is cited "FEDERAL, not read".

**Virginia texts read in the browser during the pass.** 18VAC62-20-10 to -60 and -80 (Fair Housing Certification Regulations, amended eff. January 14, 2026), law.lis.virginia.gov, 2026-11-07, SHA-256 per section matched on disk. Also 12VAC5-462-10, -20, -60, -280, -290 and -300 (water-quality posting at public pools), 20VAC5-305-10 to -120 (State Corporation Commission submetering rules) and 20VAC5-330-10 to -50 (medical-condition disconnection limits), same site and checks; per-section provenance in `saved/PROVENANCE.txt`. 18VAC62-10 (public participation) and 18VAC135-60 (repealed; named in error by a canvass fetch request) were read and not relied on. The browser link closed before the last fetch request (2025 Acts chs. 476 and 490, on the eviction diversion program's former expiry) could be read; that item is open (§4).

**Canvass.** Ten topic slices, canvassed by agents at most two at a time, each saving after every topic; the main pass decided every question they filed (rule 76) and reviewed each slice on hand-back. One deviation: for a few minutes three agents ran at once (S02 finishing while S03 and S04 started).

**Not held.** 2025 and 2026 Acts of Assembly (lis.virginia.gov serves them only through a JavaScript application; their codified text is in the 2026 Updates overlay, but uncodified provisions and enactment clauses are not); other VAC chapters (including the State Corporation Commission's 20VAC5 utility rules and the Department of Housing and Community Development's other chapters); the model codes the building and fire codes adopt by reference (IBC, IRC, IPMC, IFC, NFPA); local ordinances; court opinions. Rows whose answer lies only there say so (rule 36).

**Currency.** The Code text is the Law Library title CSV compiled before the 2026 session, overlaid with every section on the official "2026 Updates" list (the site says the list holds sections that "took effect on July 1, 2026, unless otherwise noted"). A section's currency comes from its History line and, for the 2026 session, from its Updates page heading; where a section prints two or three dated versions (for example § 55.1-1245, with versions effective until July 1, 2027, from July 1, 2027, and from the later of July 1, 2028 or seven years after the COVID-19 emergency expires), rows quote the version in force on 2026-11-07 and say when the next starts. No delayed effective date in a row rests on an act read outside the corpus; each rests on the version heading the official site prints. The README's one CSV-text slip (§ 8.01-66.9:2(B)) is in a section no row relies on.

### §2 Topics answered

236 of 236 missing topics answered; 243 new rows, 11 existing rows tagged.

| Topic | Row | Verdict | Citation |
|---|---|---|---|
| `abandonment-and-mitigation` | `edu-abandonment-and-mitigation-va` (edu) | Present | Va. Code Ann. § 55.1-1249; Va. Code Ann. § 55.1-1251; Va. Code Ann. § 8.01-126(F)(3) |
| `accessory-dwelling-unit` | `edu-accessory-dwelling-unit-va` (edu) | Present | Va. Code Ann. § 15.2-2292.4; Va. Code Ann. § 15.2-2292.4(B); Va. Code Ann. § 15.2-2292.4(D) |
| `actual-notice-method` | `edu-actual-notice-method-va` (edu) | Present | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1202(A); Va. Code Ann. § 59.1-483(b) |
| `adverse-proceeding-notice` | `edu-adverse-proceeding-notice-va` (edu) | Confirmed absent (tenant duty); present (attornment and landlord notices) | Va. Code Ann. § 55.1-1609; Va. Code Ann. § 55.1-1608; Va. Code Ann. § 55.1-1216(B) |
| `alarm-tampering-fee` | `edu-no-alarm-tampering-fee-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1227(A); Va. Code Ann. § 55.1-1248; Va. Code Ann. § 55.1-1245(A) |
| `alt-housing` | `edu-alt-housing-va` (edu) | Present | Va. Code Ann. § 55.1-1239(A)(2); Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1229(B) |
| `animal-care-access` | `edu-no-animal-care-entry-right-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1229(C); Va. Code Ann. § 55.1-1249; Va. Code Ann. § 3.2-6569(A) |
| `appliances-excluded` | `appliances-excluded-va` (clause) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(4); Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1208(A)(1) |
| `asbestos-hazards` | `edu-asbestos-hazards-va` (edu) | Present | Va. Code Ann. § 36-99.7(A); Va. Code Ann. § 36-99.7(C); 13VAC5-63-80 |
| `association-obligations-disclosure` | `edu-association-disclosure-va` (edu) | Confirmed absent (lease disclosure); present (association information rights) | Va. Code Ann. § 55.1-1806(B); Va. Code Ann. § 55.1-1973(B); Va. Code Ann. § 55.1-1228(A)(6) |
| `attorney-fees` | `edu-attorney-fees-va` (edu) | Present | Va. Code Ann. § 55.1-1208(A)(4); Va. Code Ann. § 55.1-1245(H); Va. Code Ann. § 55.1-1245(I) |
| `automatic-renewal` | `edu-automatic-renewal-va` (edu) | Present | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1204(C); Va. Code Ann. § 55.1-1204(K) |
| `automatic-renewal` | `automatic-renewal-va` (clause) | Present | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1204(K); Va. Code Ann. § 59.1-207.46(E) |
| `balcony-inspection` | `edu-no-balcony-inspection-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(1); Va. Code Ann. § 55.1-1220(A)(3); 13VAC5-63-520 |
| `bed-bug-cooperation` | `edu-bed-bug-cooperation-va` (edu) | Present | Va. Code Ann. § 55.1-1227(A); Va. Code Ann. § 55.1-1223(A); Va. Code Ann. § 55.1-1248 |
| `binding-arbitration` | `edu-binding-arbitration-va` (edu) | Present | Va. Code Ann. § 8.01-581.01; Va. Code Ann. § 8.01-581.02(A); Va. Code Ann. § 8.01-581.05 |
| `cannabis` | `edu-cannabis-va` (edu) | Present | Va. Code Ann. § 4.1-1101(A); Va. Code Ann. § 4.1-1101(C); Va. Code Ann. § 4.1-1100 |
| `cannabis` | `cannabis-restrictions-ak` (tagged) | Tagged | Va. Code Ann. § 4.1-1101; Va. Code Ann. § 55.1-1228(B); Va. Code Ann. §§ 4.1-1600 |
| `carpet-cleaning` | `edu-no-carpet-cleaning-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1233; Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1208(C) |
| `casualty-and-mitigation-waivable` | `edu-casualty-mitigation-nonwaivable-va` (edu) | Present | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1240; Va. Code Ann. § 55.1-1251 |
| `certificate-of-occupancy-disclosure` | `edu-no-certificate-of-occupancy-disclosure-va` (edu) | Confirmed absent | 13VAC5-63-160; 13VAC5-63-490; Va. Code Ann. § 15.2-907(B)(1)(c) |
| `children-occupancy` | `edu-children-occupancy-va` (edu) | Present | Va. Code Ann. § 36-96.1:1; Va. Code Ann. § 36-96.2(G); Va. Code Ann. § 36-105.4 |
| `cold-weather-vacate-notice` | `edu-no-cold-weather-vacate-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1227(A)(6); Va. Code Ann. § 55.1-1249; Va. Code Ann. § 56-245.1:3(B) |
| `collection-fee` | `edu-collection-fee-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1245(H); Va. Code Ann. § 55.1-1208(A)(4); Va. Code Ann. § 55.1-1204(J)(1) |
| `common-area-lighting` | `edu-common-area-lighting-va` (edu) | Present | Va. Code Ann. § 55.1-1220(A)(3); 13VAC5-63-524; 13VAC5-63-540 |
| `communal-land-lease-approval` | `edu-no-communal-land-lease-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 36-105.5; Va. Code Ann. § 36-105.5(A); Va. Code Ann. § 2.2-1149 |
| `condemned-premises-rent-bar` | `edu-condemned-premises-rent-bar-va` (edu) | Present | Va. Code Ann. § 55.1-1243.2(A); Va. Code Ann. § 55.1-1240; Va. Code Ann. § 55.1-1234.1(A) |
| `confession-of-judgment` | `edu-confession-of-judgment-va` (edu) | Present | Va. Code Ann. § 55.1-1208(A)(3); Va. Code Ann. § 8.01-431; Va. Code Ann. § 8.01-432 |
| `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1220(D); Va. Code Ann. § 55.1-1234 |
| `confirmed-absences-misc` | `edu-confirmed-absences-misc-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1227(A)(8); Va. Code Ann. § 55.1-1220; Va. Code Ann. § 55.1-1203 |
| `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-va` (edu) | Present and confirmed absent (mixed) | Va. Code Ann. § 8.01-126(B); Va. Code Ann. § 55.1-1204(J)(1); Va. Code Ann. § 36-105.1:1 |
| `construction-liens` | `edu-construction-liens-va` (edu) | Present; tagged shared optional clause | Va. Code Ann. § 43-3(A); Va. Code Ann. § 43-20; Va. Code Ann. § 43-3(C) |
| `construction-liens` | `no-liens-ar` (tagged) | Tagged | Va. Code Ann. § 43-3(A); Va. Code Ann. § 43-20; Va. Code Ann. § 43-3(C) |
| `conversion-notice` | `edu-conversion-notice-va` (edu) | Present | Va. Code Ann. § 55.1-1410(B); Va. Code Ann. § 55.1-1208(A)(2); Va. Code Ann. § 55.1-1982(C) |
| `criminal-activity` | `criminal-activity-va` (clause) | Present | Va. Code Ann. § 55.1-1245(C); Va. Code Ann. § 55.1-1245; Va. Code Ann. § 55.1-1245(D) |
| `criminal-activity` | `edu-criminal-activity-va` (edu) | Present | Va. Code Ann. § 55.1-1245(C); Va. Code Ann. § 55.1-1245; Va. Code Ann. § 18.2-258 |
| `cure-and-eviction-grounds` | `edu-cure-and-eviction-grounds-va` (edu) | Present | Va. Code Ann. § 55.1-1245(A); Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1208(B) |
| `deposit-cost-schedule` | `edu-no-deposit-cost-schedule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1233; Va. Code Ann. § 55.1-1208(C) |
| `deposit-escheat` | `edu-deposit-escheat-va` (edu) | Present | Va. Code Ann. § 55.1-1226(B); Va. Code Ann. § 55.1-2500; Va. Code Ann. § 55.1-2501 |
| `deposit-installments` | `edu-no-deposit-installments-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1226(A) |
| `deposit-last-month-rent` | `edu-last-month-rent-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1205; Va. Code Ann. § 55.1-1238 |
| `deposit-surrender-notice` | `move-out-forwarding-address-va` (clause) | Present | Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1226(B); Va. Code Ann. § 55.1-1202(B) |
| `designated-repairer` | `edu-designated-repairer-va` (edu) | Present | Va. Code Ann. § 55.1-1244.1(C); Va. Code Ann. § 55.1-1244(D)(5); Va. Code Ann. § 55.1-1208(A)(1) |
| `disability-accommodation` | `edu-disability-accommodation-va` (edu) | Present | Va. Code Ann. § 36-96.3(B); Va. Code Ann. § 36-96.3:2(A); 18VAC135-50-200 |
| `disability-accommodation` | `disability-modification-restoration-mn` (tagged) | Tagged | Va. Code Ann. § 36-96.3(B); 18VAC135-50-200 |
| `disaster-displaced-guests` | `edu-no-disaster-guest-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1227(A)(12); Va. Code Ann. § 44-146.17(1) |
| `disaster-duties` | `edu-disaster-duties-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1240; Va. Code Ann. § 59.1-527; Va. Code Ann. § 59.1-526 |
| `double-letting` | `edu-no-double-letting-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1238; Va. Code Ann. § 55.1-1200 |
| `drug-free-housing-addendum` | `edu-no-drug-free-addendum-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1245(C); Va. Code Ann. § 55.1-1245; Va. Code Ann. § 55.1-1208(A)(1) |
| `dv-confidentiality` | `edu-dv-confidentiality-va` (edu) | Present | Va. Code Ann. § 55.1-1209(A); Va. Code Ann. § 55.1-1209(B); Va. Code Ann. § 55.1-1209 |
| `dv-deposit-timing` | `edu-dv-deposit-timing-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1226(B); Va. Code Ann. § 55.1-1236(C) |
| `dv-eviction-protection` | `edu-dv-eviction-protection-va` (edu) | Present | Va. Code Ann. § 55.1-1245(D); Va. Code Ann. § 55.1-1245; Va. Code Ann. § 55.1-1246(A) |
| `dv-lockchange` | `edu-dv-lockchange-va` (edu) | Present | Va. Code Ann. § 55.1-1230(A); Va. Code Ann. § 55.1-1230(C); Va. Code Ann. § 55.1-1230(D) |
| `dv-protection-order-chapter-moved` | `edu-dv-law-citations-va` (edu) | Present | Va. Code Ann. § 55.1-1236(A); Va. Code Ann. § 15.2-907(A); Va. Code Ann. § 19.2-152.8(C) |
| `dv-qualifying-documents` | `edu-dv-qualifying-documents-va` (edu) | Present | Va. Code Ann. § 55.1-1236(B); Va. Code Ann. § 55.1-1236(A); Va. Code Ann. § 55.1-1203(D) |
| `electric-submetering-disclosure` | `edu-electric-submetering-disclosure-va` (edu) | Present | Va. Code Ann. § 55.1-1212(B); Va. Code Ann. § 56-245.3(C); Va. Code Ann. § 56-245.3(B) |
| `electric-submetering-disclosure` | `submetering-lease-statement-va` (clause) | Present | 20VAC5-305-20; 20VAC5-305-10; Va. Code Ann. § 55.1-1212(B) |
| `emergency-contact` | `edu-emergency-contact-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1216(A); Va. Code Ann. § 55.1-1256(A); Va. Code Ann. § 55.1-1229(A)(4) |
| `eminent-domain` | `edu-eminent-domain-va` (edu) | Confirmed absent (lease effect); tagged shared optional clause | Va. Code Ann. § 25.1-234(A); Va. Code Ann. § 25.1-209(D); Va. Code Ann. § 25.1-410(A) |
| `eminent-domain` | `eminent-domain-vi` (tagged) | Tagged | Va. Code Ann. § 25.1-234(C); Va. Code Ann. §§ 25.1-407; Va. Code Ann. § 55.1-1208(A)(1) |
| `employee-screening` | `edu-employee-screening-va` (edu) | Present | Va. Code Ann. § 55.1-1209.1(A); Va. Code Ann. § 55.1-1209.1(B)(1); Va. Code Ann. § 55.1-1209.1(C) |
| `energy-data-release` | `edu-no-energy-data-release-va` (edu) | Confirmed absent | Va. Code Ann. § 56-594.3; Va. Code Ann. § 55.1-1212(F); Va. Code Ann. § 55.1-1209(A) |
| `entity-landlord-court-representation` | `edu-entity-landlord-court-representation-va` (edu) | Present | Va. Code Ann. § 16.1-88.03(A); Va. Code Ann. § 16.1-88.03(B); Va. Code Ann. § 55.1-1257 |
| `environmental-event-termination` | `edu-no-environmental-event-termination-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1240; Va. Code Ann. § 55.1-1234.1(A); Va. Code Ann. § 55.1-1215 |
| `ev-charging-end-of-tenancy` | `edu-no-ev-charging-end-of-tenancy-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1227(A)(7); Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1254 |
| `ev-charging-requirements` | `edu-ev-charging-requirements-va` (edu) | Present | Va. Code Ann. § 56-1.2(2); Va. Code Ann. § 56-232.2:1; Va. Code Ann. § 56-1.2:1(A)(1) |
| `ev-charging-requirements` | `ev-charger-installation-hi` (tagged) | Tagged | Va. Code Ann. § 55.1-1962.1(C); Va. Code Ann. § 55.1-2139.1(C); Va. Code Ann. § 55.1-1823.1(B) |
| `ev-charging-shared-area` | `edu-no-ev-charging-shared-area-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1228(A); Va. Code Ann. § 55.1-1228(B); Va. Code Ann. § 55.1-1200 |
| `eviction-hardship-stay` | `edu-no-eviction-hardship-stay-va` (edu) | Confirmed absent | Va. Code Ann. § 8.01-129(A); Va. Code Ann. § 8.01-129(B); Va. Code Ann. § 8.01-470 |
| `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1245(H); Va. Code Ann. § 55.1-1251; Va. Code Ann. § 55.1-1208(A)(4) |
| `eviction-service-party` | `edu-eviction-service-party-va` (edu) | Confirmed absent | Va. Code Ann. § 8.01-296; Va. Code Ann. § 8.01-293(A); Va. Code Ann. § 8.01-126(B) |
| `exculpatory-clauses` | `edu-exculpatory-clauses-va` (edu) | Present | Va. Code Ann. § 55.1-1208(A)(5); Va. Code Ann. § 55.1-1208(B); Va. Code Ann. § 55.1-1220(B) |
| `expedited-criminal-eviction` | `edu-expedited-criminal-eviction-va` (edu) | Present | Va. Code Ann. § 55.1-1245(C); Va. Code Ann. § 55.1-1245; Va. Code Ann. § 18.2-258.01 |
| `family-child-care` | `edu-family-child-care-va` (edu) | Present | Va. Code Ann. § 55.1-1208.1; Va. Code Ann. § 55.1-1232; Va. Code Ann. § 22.1-289.02 |
| `family-child-care` | `family-child-care-va` (clause) | Present | Va. Code Ann. § 55.1-1208.1; Va. Code Ann. § 55.1-1232; Va. Code Ann. § 22.1-289.02 |
| `farmland-hunting-rights` | `edu-farmland-hunting-rights-va` (edu) | Confirmed absent | Va. Code Ann. § 18.2-132; Va. Code Ann. § 18.2-134; Va. Code Ann. § 18.2-134.1(A) |
| `farmland-hunting-rights` | `farmland-hunting-rights-va` (clause) | Confirmed absent | Va. Code Ann. §§ 18.2-134.1(A); Va. Code Ann. § 29.1-301(C); Va. Code Ann. § 29.1-509(D) |
| `fee-unprovided-service` | `edu-no-fee-unprovided-service-va` (edu) | Confirmed absent | Va. Code Ann. § 59.1-199(5); Va. Code Ann. § 59.1-200(A)(14); Va. Code Ann. § 55.1-1204(J)(1) |
| `fire-code-standard` | `edu-fire-code-standard-va` (edu) | Present | Va. Code Ann. § 27-96; Va. Code Ann. § 27-97; Va. Code Ann. § 27-98 |
| `fire-sprinkler-duty` | `edu-fire-sprinkler-duty-va` (edu) | Confirmed absent | 13VAC5-63-240; Va. Code Ann. § 36-99.5:1(B); 13VAC5-63-210 |
| `foreclosure` | `edu-foreclosure-va` (edu) | Present | Va. Code Ann. § 55.1-1237(A); Va. Code Ann. § 55.1-1237(C); Va. Code Ann. § 55.1-321(A)(a) |
| `foreclosure-disclosure` | `edu-foreclosure-disclosure-va` (edu) | Present | Va. Code Ann. § 55.1-1237(A); Va. Code Ann. § 55.1-1216(C); Va. Code Ann. § 54.1-2133(B) |
| `foreign-ownership` | `edu-foreign-ownership-va` (edu) | Present (agricultural-land restriction); other restrictions confirmed absent | Va. Code Ann. § 55.1-100; Va. Code Ann. § 55.1-508(A); Va. Code Ann. § 55.1-508(B) |
| `forfeiture-redemption` | `edu-forfeiture-redemption-va` (edu) | Present | Va. Code Ann. § 55.1-1245(F); Va. Code Ann. § 55.1-1250(C); Va. Code Ann. § 55.1-1400(B) |
| `frozen-standard-incorporation` | `edu-frozen-standard-incorporation-va` (edu) | Present | Va. Code Ann. § 36-99(B); Va. Code Ann. § 36-100; Va. Code Ann. § 36-102 |
| `furnishings-included` | `furnishings-included-la` (tagged) | Tagged | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1227(A)(7) |
| `good-cause-notice` | `edu-no-good-cause-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1258(D); Va. Code Ann. § 55.1-1258(B); Va. Code Ann. § 55.1-1258(C) |
| `government-fee-reimbursement` | `edu-government-fee-reimbursement-va` (edu) | Present | Va. Code Ann. § 55.1-1212(H); Va. Code Ann. § 55.1-1212(A); Va. Code Ann. § 55.1-1204.1 |
| `governmental-fines` | `edu-governmental-fines-va` (edu) | Confirmed absent | Va. Code Ann. § 36-106(A); Va. Code Ann. § 36-106(F); Va. Code Ann. § 36-97 |
| `guarantor-renewal` | `edu-guarantor-renewal-va` (edu) | Confirmed absent | Va. Code Ann. § 11-2; Va. Code Ann. § 49-25; Va. Code Ann. § 49-26 |
| `guarantor-renewal` | `guaranty-va` (clause) | Confirmed absent | Va. Code Ann. § 11-2; Va. Code Ann. § 55.1-1200; Va. Code Ann. §§ 49-25 |
| `guest-rights` | `edu-guest-rights-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1227(A); Va. Code Ann. § 55.1-1246(A) |
| `habitability-materiality` | `edu-habitability-materiality-va` (edu) | Present | Va. Code Ann. § 55.1-1220(A)(1); Va. Code Ann. § 55.1-1234; Va. Code Ann. § 55.1-1244(A) |
| `habitability-modifiable` | `edu-habitability-modifiable-va` (edu) | Present | Va. Code Ann. § 55.1-1220; Va. Code Ann. § 55.1-1220(A)(7); Va. Code Ann. § 55.1-1220(C) |
| `habitability-presumption` | `edu-habitability-presumption-va` (edu) | Present | Va. Code Ann. § 55.1-1241(A); Va. Code Ann. § 55.1-1244(B); Va. Code Ann. § 55.1-1244(D) |
| `habitability-statement` | `edu-no-habitability-statement-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(2); Va. Code Ann. § 55.1-1204(C)(1); Va. Code Ann. § 55.1-1204(B) |
| `habitability-waiver` | `edu-habitability-waiver-va` (edu) | Present | Va. Code Ann. § 55.1-1220(A)(1); Va. Code Ann. § 55.1-1220(B); Va. Code Ann. § 55.1-1208(A)(1) |
| `hazardous-contamination-disclosure` | `edu-no-contamination-disclosure-va` (edu) | Confirmed absent | Va. Code Ann. §§ 10.1-1238; Va. Code Ann. § 10.1-1241(A); Va. Code Ann. § 10.1-1242 |
| `hazardous-contamination-disclosure` | `environmental-covenant-va` (clause) | Confirmed absent | Va. Code Ann. § 10.1-1241(A); Va. Code Ann. § 10.1-1242; Va. Code Ann. § 10.1-1247(A)(4) |
| `health-district-rental-rules` | `edu-no-health-district-rental-rules-va` (edu) | Confirmed absent | Va. Code Ann. § 32.1-30; Va. Code Ann. § 32.1-31(C); Va. Code Ann. § 32.1-34 |
| `heating` | `edu-heating-va` (edu) | Present | Va. Code Ann. § 55.1-1220(A)(7); Va. Code Ann. § 55.1-1220(A)(4); Va. Code Ann. § 55.1-1220(A)(1) |
| `hoa` | `edu-hoa-va` (edu) | Present; absences recorded | Va. Code Ann. § 55.1-1806(A); Va. Code Ann. § 55.1-1973(A); Va. Code Ann. §§ 55.1-1805 |
| `holding-deposit` | `edu-holding-deposit-va` (edu) | Present | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1203(A); Va. Code Ann. § 54.1-2108.1(B)(3) |
| `home-business` | `edu-home-business-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1232; Va. Code Ann. § 15.2-2288.1; Va. Code Ann. § 55.1-1821(A) |
| `immigration-status` | `edu-no-immigration-status-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1203(B); Va. Code Ann. § 36-96.3(A)(1); 18VAC135-50-270 |
| `infirmity-termination` | `edu-no-infirmity-termination-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1256(C); Va. Code Ann. § 55.1-1201(C); Va. Code Ann. §§ 55.1-1251 |
| `informal-dispute-resolution` | `informal-dispute-resolution-or` (tagged) | Tagged | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1244; Va. Code Ann. § 55.1-1243.1 |
| `inspection-condemnation-disclosure` | `edu-no-condemnation-disclosure-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1216(C); Va. Code Ann. § 55.1-1237(A); 13VAC5-63-485 |
| `inspection-notice-penalty` | `edu-inspection-notice-penalty-va` (edu) | Present | Va. Code Ann. § 55.1-1226(G); Va. Code Ann. § 55.1-1226(E); Va. Code Ann. § 55.1-1214(A) |
| `jury-waiver` | `edu-jury-waiver-va` (edu) | Present | Va. Const. art. I, § 11; Va. Code Ann. § 8.01-336(A); Va. Code Ann. § 8.01-336(B) |
| `key-control-policy` | `edu-key-control-policy-va` (edu) | Present | Va. Code Ann. § 55.1-1209.1(A); Va. Code Ann. § 55.1-1209.1(B); Va. Code Ann. § 55.1-1209.1(C) |
| `knowing-use-penalty` | `edu-knowing-use-penalty-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1208(B); Va. Code Ann. § 59.1-200(A)(13); Va. Code Ann. § 59.1-199(5) |
| `landlord-breach-remedy` | `edu-landlord-breach-remedy-va` (edu) | Present | Va. Code Ann. § 55.1-1234; Va. Code Ann. § 55.1-1234.1; Va. Code Ann. § 55.1-1238 |
| `landlord-liability-insurance` | `edu-no-landlord-insurance-mandate-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(E); Va. Code Ann. § 55.1-1206(D); Va. Code Ann. § 55.1-1206(E) |
| `landlord-registration` | `edu-landlord-registration-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(E); Va. Code Ann. § 36-105.1:1; Va. Code Ann. § 36-105.1:1(C)(2) |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-va` (edu) | Present | Va. Code Ann. § 55.1-1245(H); Va. Code Ann. § 55.1-1251; Va. Code Ann. § 55.1-1247 |
| `late-fee-limit` | `edu-late-fee-cap-va` (edu) | Present | Va. Code Ann. § 55.1-1204(E); Va. Code Ann. § 55.1-1212(C); Va. Code Ann. § 55.1-1302(F) |
| `law-enforcement-cooperation` | `edu-law-enforcement-cooperation-va` (edu) | Confirmed absent (crime-free statute; landlord cooperation duty); present (related rules) | Va. Code Ann. § 55.1-1209(A)(5); Va. Code Ann. § 19.2-68; Va. Code Ann. § 19.2-70.2 |
| `lead-safe-certification` | `edu-no-lead-safe-certificate-va` (edu) | Confirmed absent | Va. Code Ann. § 54.1-503(C); Va. Code Ann. § 54.1-500; Va. Code Ann. § 54.1-512(E) |
| `lead-state-notices` | `edu-lead-state-notices-va` (edu) | Present | FEDERAL: 40 C.F.R. § 745.113; FEDERAL: 42 U.S.C. § 4852d; Va. Code Ann. § 54.1-2133(B) |
| `lease-content-requirements` | `edu-lease-content-requirements-va` (edu) | Present | Va. Code Ann. § 55.1-1204; Va. Code Ann. § 55.1-1204(B); Va. Code Ann. § 55.1-1204.1 |
| `lease-copy` | `edu-lease-copy-va` (edu) | Present | Va. Code Ann. § 55.1-1204(H); Va. Code Ann. § 55.1-1204(B); 18VAC135-20-310 |
| `lease-notice-initial-requirement` | `edu-no-lease-initials-requirement-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1204(B); Va. Code Ann. § 55.1-1226(D); Va. Code Ann. § 55.1-1410(B) |
| `lease-registration` | `edu-lease-registration-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-407(A)(1); Va. Code Ann. § 55.1-1601(A); Va. Code Ann. § 58.1-807(A) |
| `lease-term-limitation` | `edu-lease-term-limits-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-101(B); Va. Code Ann. § 11-2(6); Va. Code Ann. § 11-2 |
| `lease-type-parity` | `edu-no-lease-type-parity-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1253(A); Va. Code Ann. § 55.1-1253(D); Va. Code Ann. § 55.1-1302(A) |
| `lease-type-size` | `edu-no-lease-type-size-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 36-139; Va. Code Ann. § 55.1-1202(D) |
| `limitation-of-actions` | `edu-limitation-of-actions-va` (edu) | Present | Va. Code Ann. § 8.01-246(A)(2); Va. Code Ann. § 8.01-246(A)(4); Va. Code Ann. § 8.01-243(B) |
| `liquidated-damages` | `edu-liquidated-damages-va` (edu) | Present | Va. Code Ann. § 55.1-1253(C); Va. Code Ann. § 55.1-1235(C); Va. Code Ann. § 55.1-1236(D) |
| `lockout-for-rent-delinquency` | `edu-no-lockout-for-rent-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1252; Va. Code Ann. § 55.1-1243.1(A); Va. Code Ann. § 55.1-1243.1(D) |
| `maintenance-duty-shift` | `edu-maintenance-duty-shift-va` (edu) | Present | Va. Code Ann. § 55.1-1220(D); Va. Code Ann. § 55.1-1208(C); Va. Code Ann. § 55.1-1227(A)(1) |
| `meter-conservation-charge` | `edu-meter-conservation-charge-va` (edu) | Present | Va. Code Ann. § 56-585.7(E)(5); Va. Code Ann. § 56-585.7(E)(6); Va. Code Ann. § 56-585.7(F) |
| `meter-conservation-charge` | `meter-conservation-charge-va` (clause) | Present | Va. Code Ann. § 56-585.7(E)(5); Va. Code Ann. § 56-585.7(E)(6); Va. Code Ann. § 55.1-1208(C) |
| `minor-tenant-filing` | `edu-minor-tenants-va` (edu) | Confirmed absent | Va. Code Ann. § 1-204; Va. Code Ann. § 1-207; Va. Code Ann. § 16.1-334 |
| `municipal-utility-lien` | `edu-municipal-utility-lien-va` (edu) | Present | Va. Code Ann. § 15.2-2119.4(B); Va. Code Ann. § 15.2-2119.4(F); Va. Code Ann. § 15.2-2119.4(I) |
| `municipal-utility-lien` | `municipal-utility-lien-va` (clause) | Present | Va. Code Ann. § 15.2-2118.1; Va. Code Ann. § 15.2-2119.4(B); Va. Code Ann. § 15.2-2119.4(G) |
| `nonpayment-notice` | `edu-nonpayment-notice-va` (edu) | Present | Va. Code Ann. § 55.1-1245(F); Va. Code Ann. § 55.1-1245(G); Va. Code Ann. § 55.1-1202(E) |
| `nonrefundable-deposit-notice` | `edu-nonrefundable-fees-va` (edu) | Tagged | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1204.1 |
| `nonrefundable-deposit-notice` | `nonrefundable-fees-wv` (tagged) | Tagged | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1204.1 |
| `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1226(D); Va. Code Ann. § 55.1-1203 |
| `notice-service-fee` | `edu-notice-service-fee-va` (edu) | Present | Va. Code Ann. § 55.1-1247; Va. Code Ann. § 55.1-1251; Va. Code Ann. § 55.1-1245(H) |
| `notice-to-quit-waiver` | `edu-notice-to-quit-waiver-va` (edu) | Present | Va. Code Ann. § 55.1-1245; Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 8.01-126(D) |
| `notice-to-vacate-additional-terms` | `edu-no-notice-to-vacate-terms-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1204(I); Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1226(G) |
| `nuisance` | `edu-nuisance-va` (edu) | Present | Va. Code Ann. § 18.2-258; Va. Code Ann. §§ 18.2-258.01; Va. Code Ann. § 48-16(C) |
| `optional-lease-terms` | `edu-optional-lease-terms-va` (edu) | Present | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. §§ 55.1-1202(A); Va. Code Ann. § 55.1-1249 |
| `ordnance-demolition-meter-disclosures` | `edu-ordnance-demolition-meter-disclosures-va` (edu) | Present | Va. Code Ann. § 55.1-1216(C); Va. Code Ann. § 55.1-1410(B); Va. Code Ann. § 36-7.2(A) |
| `other-landlord-facilities` | `edu-other-landlord-facilities-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A); Va. Code Ann. § 55.1-1220(B); Va. Code Ann. § 55.1-1200 |
| `owner-move-in-reservation` | `owner-occupancy-termination-ar` (tagged) | Tagged | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1253(A); Va. Code Ann. § 55.1-1208(A)(1) |
| `parking-rules-notice` | `edu-no-parking-rules-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1228(A); Va. Code Ann. § 55.1-1204(I); Va. Code Ann. § 46.2-1231(A) |
| `part5-nonwaivable` | `edu-nonwaivable-rights-va` (edu) | Present | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1208(B); Va. Code Ann. § 55.1-1201(A) |
| `periodic-services-entry` | `scheduled-services-entry-va` (clause) | Confirmed absent | Va. Code Ann. § 55.1-1229(A)(1); Va. Code Ann. § 55.1-1229(A)(4) |
| `periodic-services-entry` | `edu-periodic-services-entry-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1229(A)(1); Va. Code Ann. § 55.1-1229(A)(4); Va. Code Ann. § 55.1-1229(C) |
| `pest-control-notice` | `edu-pest-control-notice-va` (edu) | Present | Va. Code Ann. § 55.1-1223(A); Va. Code Ann. § 55.1-1223(B); Va. Code Ann. § 55.1-1223(C) |
| `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-va` (edu) | Confirmed absent | Va. Code Ann. § 3.2-6585; Va. Code Ann. § 3.2-6569 |
| `plain-language-consumer-statement` | `edu-no-plain-language-consumer-statement-va` (edu) | Confirmed absent | Va. Code Ann. § 36-139(26); Va. Code Ann. § 55.1-1204(B); Va. Code Ann. § 55.1-1204.1 |
| `political-access` | `edu-no-political-access-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 24.2-412(C) |
| `pool-safety` | `edu-pool-safety-va` (edu) | Present | 13VAC5-63-336; 13VAC5-63-520; Va. Code Ann. § 15.2-921 |
| `portable-cooling-device` | `edu-no-portable-cooling-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(7); Va. Code Ann. § 55.1-1220(A)(4); Va. Code Ann. § 55.1-1200 |
| `possession-bond` | `edu-no-possession-bond-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1208(A)(3); Va. Code Ann. § 55.1-1208(B); Va. Code Ann. § 55.1-1253(C) |
| `private-well-testing` | `edu-no-well-testing-rule-va` (edu) | Confirmed absent | 12VAC5-630-30; 12VAC5-630-431; Va. Code Ann. § 32.1-176.5(A) |
| `prohibited-acts-renter` | `prohibited-acts-renter-va` (clause) | Present | Va. Code Ann. § 55.1-1227(A); Va. Code Ann. § 55.1-1229(A)(1); Va. Code Ann. § 55.1-1245(A) |
| `promises-to-repair` | `edu-no-promises-to-repair-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1234; Va. Code Ann. § 55.1-1244(A) |
| `prop65-rental-warning` | `edu-no-chemical-warning-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 32.1-240; Va. Code Ann. § 32.1-245; Va. Code Ann. §§ 59.1-310.3 |
| `property-tax-rent-disclosure` | `edu-no-property-tax-rent-statement-va` (edu) | Confirmed absent | Va. Code Ann. § 58.1-3210(A); Va. Code Ann. § 58.1-3210(B); Va. Code Ann. § 55.1-3000 |
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-va` (edu) | Present | 18VAC135-50-200; FEDERAL: 24 C.F.R. § 100.202; 18VAC135-50-110 |
| `purpose-limitation` | `edu-purpose-limitation-va` (edu) | Present | Va. Code Ann. § 55.1-1232; Va. Code Ann. § 48-12; Va. Code Ann. § 48-16(B) |
| `recycling-notice` | `edu-no-recycling-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(6); Va. Code Ann. § 55.1-1227(A)(4); Va. Code Ann. § 15.2-937(A) |
| `religious-cultural-display` | `edu-religious-display-va` (edu) | Present | Va. Code Ann. § 36-96.1:1; Va. Code Ann. § 36-96.3(A)(2); 18VAC135-50-90 |
| `rent-concession` | `rent-concession-wi` (tagged) | Tagged | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1204(I) |
| `rent-demand-bar` | `edu-no-rent-demand-bar-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1241(A); Va. Code Ann. § 55.1-1241(C)(1); Va. Code Ann. § 55.1-1244 |
| `rent-escalation` | `edu-rent-escalation-va` (edu) | Present | Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1204(I) |
| `rent-escalation` | `rent-escalation-va` (clause) | Present | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1204(I) |
| `rent-installments` | `rent-installments-or` (tagged) | Tagged | Va. Code Ann. § 55.1-1204(D); Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1250(A) |
| `rent-into-court-counterclaim` | `edu-rent-into-court-va` (edu) | Present | Va. Code Ann. § 16.1-88.01; Va. Code Ann. § 55.1-1241; Va. Code Ann. § 55.1-1242(A) |
| `rent-receipt-anti-waiver` | `edu-no-rent-receipt-anti-waiver-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1220(A)(2); Va. Code Ann. § 55.1-1220(D) |
| `rent-receipts` | `edu-rent-receipts-va` (edu) | Present | Va. Code Ann. § 55.1-1204(J)(1); Va. Code Ann. § 55.1-1204(D); Va. Code Ann. § 55.1-1202(E) |
| `rent-reporting` | `edu-no-rent-reporting-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1209(A); Va. Code Ann. § 55.1-1203; 18VAC135-20-181 |
| `rent-tax` | `edu-rent-tax-va` (edu) | Confirmed absent | Va. Code Ann. § 58.1-602; Va. Code Ann. § 58.1-603; Va. Code Ann. § 58.1-609.5(9) |
| `rental-inspection` | `edu-rental-inspection-va` (edu) | Present | Va. Code Ann. § 55.1-1201(E); Va. Code Ann. § 36-105.1:1; Va. Code Ann. § 36-105.1:1(B)(2) |
| `repair-cost-termination` | `edu-no-repair-cost-termination-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(2); Va. Code Ann. § 55.1-1240; Va. Code Ann. § 55.1-1258(C) |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-exemption-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(B); Va. Code Ann. §§ 55.1-1234; Va. Code Ann. § 55.1-1208(A)(1) |
| `repair-notice` | `edu-repair-notice-va` (edu) | Present | Va. Code Ann. § 55.1-1234; Va. Code Ann. § 55.1-1239(B); Va. Code Ann. § 55.1-1244(B)(1) |
| `required-fees` | `edu-required-fees-va` (edu) | Present | Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1204(E) |
| `rights-responsibilities-guide` | `edu-rights-responsibilities-guide-va` (edu) | Present | Va. Code Ann. § 55.1-1204(B); Va. Code Ann. § 55.1-1204(H); Va. Code Ann. § 36-139 |
| `sanitary-code-variance` | `edu-no-code-variance-notice-va` (edu) | Confirmed absent | 13VAC5-63-480; Va. Code Ann. § 36-99(A); Va. Code Ann. § 36-105(A) |
| `seasonal-tenancy` | `edu-no-seasonal-tenancy-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(C)(4); Va. Code Ann. § 55.1-1201(D)(3); Va. Code Ann. § 55.1-1220(A)(7) |
| `security-deposit-cap` | `edu-security-deposit-cap-va` (edu) | Present | Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1208(A)(7) |
| `security-deposit-holding` | `edu-security-deposit-holding-va` (edu) | Confirmed absent | Va. Code Ann. § 54.1-2108.1(B)(2); Va. Code Ann. § 54.1-2108.1(B)(4); Va. Code Ann. § 54.1-2108.1(B)(5) |
| `security-deposit-nonwaiver` | `edu-security-deposit-nonwaiver-va` (edu) | Present | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1208(A)(7); Va. Code Ann. § 55.1-1226 |
| `security-deposit-on-sale` | `edu-security-deposit-on-sale-va` (edu) | Present | Va. Code Ann. § 55.1-1213; Va. Code Ann. § 55.1-1226(E); Va. Code Ann. § 55.1-1216(B) |
| `security-deposit-penalty` | `edu-security-deposit-penalty-va` (edu) | Present | Va. Code Ann. § 55.1-1226(E); Va. Code Ann. § 55.1-1259(A); Va. Code Ann. § 55.1-1208(B) |
| `security-deposit-standards` | `edu-no-security-deposit-standards-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 36-96.3(A)(2); Va. Code Ann. § 36-96.3(A)(9) |
| `security-devices` | `edu-security-devices-va` (edu) | Present | Va. Code Ann. § 55.1-1221; 13VAC5-63-245; 13VAC5-63-520 |
| `senior-housing-work-card` | `edu-no-senior-housing-work-card-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1209.1(B); Va. Code Ann. § 63.2-1720(A); Va. Code Ann. § 55.1-1201(C) |
| `service-animal-denial-penalty` | `edu-no-service-animal-denial-penalty-va` (edu) | Confirmed absent | Va. Code Ann. § 51.5-45(B); Va. Code Ann. § 51.5-46(A); Va. Code Ann. § 51.5-46(C) |
| `service-animal-misrepresentation` | `edu-service-animal-misrepresentation-va` (edu) | Confirmed absent | Va. Code Ann. § 51.5-44.1; Va. Code Ann. § 36-96.3:1(F); Va. Code Ann. §§ 59.1-196 |
| `sex-offender-occupancy` | `edu-no-sex-offender-occupancy-rule-va` (edu) | Confirmed absent | Va. Code Ann. §§ 9.1-900; Va. Code Ann. § 9.1-912(A); Va. Code Ann. § 9.1-918 |
| `sfr-occupancy-disclosure` | `edu-no-sfr-occupancy-disclosure-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1204(B); Va. Code Ann. § 36-139 |
| `shoreline-access-disclosure` | `edu-no-shoreline-disclosure-va` (edu) | Confirmed absent | Va. Code Ann. § 28.2-1200; Va. Code Ann. § 28.2-1202(A); Va. Code Ann. § 28.2-1202(C) |
| `showing-notice-waiver` | `edu-showing-notice-waiver-va` (edu) | Present | Va. Code Ann. § 55.1-1229(A)(4); Va. Code Ann. § 55.1-1229(A)(1); Va. Code Ann. § 55.1-1229(A)(3) |
| `shutdown-rent-protection` | `edu-shutdown-rent-protection-va` (edu) | Present | Va. Code Ann. § 44-209(B); Va. Code Ann. § 58.1-3916; 13VAC5-63-310 |
| `single-family-zone-lease-limit` | `edu-single-family-zone-lease-limit-va` (edu) | Present | Va. Code Ann. § 15.2-987(A); Va. Code Ann. § 15.2-987(B); Va. Code Ann. § 15.2-2286(A)(5) |
| `smart-access` | `edu-smart-access-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1229(A)(4); Va. Code Ann. § 55.1-1210; Va. Code Ann. § 55.1-1252 |
| `smoke-drift-waiver` | `edu-no-smoke-drift-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1227(A)(12); Va. Code Ann. § 55.1-1220(A)(2) |
| `social-security-defense` | `edu-no-benefit-delay-defense-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1250(B); Va. Code Ann. § 55.1-1262(A)(2); Va. Code Ann. § 55.1-1242(A) |
| `source-of-income` | `edu-source-of-funds-va` (edu) | Present | Va. Code Ann. § 36-96.1:1; Va. Code Ann. § 36-96.3(A)(1); Va. Code Ann. § 36-96.2(I) |
| `special-district-representation` | `edu-no-special-district-statement-va` (edu) | Confirmed absent | Va. Code Ann. § 15.2-2400; Va. Code Ann. § 15.2-2403; Va. Code Ann. §§ 15.2-5114 |
| `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-va` (edu) | Confirmed absent | Va. Code Ann. § 36-166(A); Va. Code Ann. § 59.1-548(A); Va. Code Ann. § 59.1-280.1 |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-term-va` (edu) | Present | Va. Code Ann. § 11-2; Va. Code Ann. § 11-1; Va. Code Ann. § 55.1-407(A)(1) |
| `statutory-caps` | `edu-statutory-caps-va` (edu) | Present | Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 55.1-1206(C); Va. Code Ann. § 55.1-1203(C) |
| `statutory-early-termination` | `edu-statutory-early-termination-va` (edu) | Present | Va. Code Ann. § 55.1-1235; FEDERAL: 50 U.S.C. § 3955; Va. Code Ann. § 55.1-1236 |
| `steam-radiator-covers` | `edu-no-radiator-cover-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(4); Va. Code Ann. § 55.1-1220(B); 13VAC5-63-540 |
| `stove-refrigerator` | `edu-no-stove-refrigerator-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(4); Va. Code Ann. § 55.1-1200; 13VAC5-63-540 |
| `student-housing` | `edu-no-student-housing-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(C); Va. Code Ann. § 11-2(4); Va. Code Ann. § 36-99.3 |
| `subsidized-inspection-refusal` | `edu-subsidized-inspection-refusal-va` (edu) | Confirmed absent | Va. Code Ann. § 36-96.3(A)(1); Va. Code Ann. § 36-96.2(I); Va. Code Ann. § 36-96.2(J) |
| `subsidy-habitability-proration` | `edu-no-subsidy-proration-rule-va` (edu) | Confirmed absent | FEDERAL: 24 C.F.R. § 982.404; FEDERAL: 24 C.F.R. § 982.310; Va. Code Ann. § 55.1-1201(A) |
| `subsidy-late-fee` | `edu-subsidy-late-fee-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(A); Va. Code Ann. § 55.1-1204(E); FEDERAL: 24 C.F.R. § 982.310 |
| `substandard-property-receivership` | `edu-substandard-property-receivership-va` (edu) | Present | Va. Code Ann. § 15.2-907.2; Va. Code Ann. § 15.2-907.2(A); Va. Code Ann. § 15.2-907.2(A)(8) |
| `tax-escalation` | `edu-tax-escalation-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1602; Va. Code Ann. § 58.1-3944; Va. Code Ann. § 58.1-3340 |
| `tenancy-at-will` | `edu-tenancy-at-will-va` (edu) | Present | Va. Code Ann. § 55.1-1225; Va. Code Ann. § 55.1-1204(F); Va. Code Ann. § 55.1-1253(A) |
| `tenant-bankruptcy` | `edu-tenant-bankruptcy-va` (edu) | Confirmed absent (state rule); federal law stated | FEDERAL: 11 U.S.C. § 362; FEDERAL: 11 U.S.C. § 365; Va. Code Ann. § 55.1-1250(D) |
| `tenant-confidential-information` | `edu-tenant-confidential-information-va` (edu) | Present | Va. Code Ann. § 55.1-1209(A); Va. Code Ann. § 55.1-1209(B); Va. Code Ann. § 55.1-1209(D) |
| `tenant-employee-housing` | `edu-tenant-employee-housing-va` (edu) | Present | Va. Code Ann. § 55.1-1201(C); Va. Code Ann. § 8.01-126(B); Va. Code Ann. § 32.1-205 |
| `tenant-insurance-claims` | `edu-tenant-insurance-claims-va` (edu) | Present | Va. Code Ann. § 55.1-1206(B); Va. Code Ann. § 55.1-1206(D); Va. Code Ann. § 55.1-1206(E) |
| `tenant-portal` | `edu-tenant-portal-va` (edu) | Present | Va. Code Ann. § 55.1-1204(J)(1); Va. Code Ann. § 55.1-1202(A); Va. Code Ann. § 59.1-483(b) |
| `tenant-repair-remedies` | `edu-tenant-repair-remedies-va` (edu) | Present | Va. Code Ann. § 55.1-1244(A); Va. Code Ann. § 55.1-1244(B)(2); Va. Code Ann. § 55.1-1244(C) |
| `tenant-right-to-organize` | `edu-tenant-organizing-va` (edu) | Present | Va. Code Ann. § 55.1-1258(A); Va. Code Ann. § 55.1-1258; Va. Code Ann. § 55.1-1314 |
| `tenant-screening` | `edu-tenant-screening-va` (edu) | Present | Va. Code Ann. § 55.1-1203(B); Va. Code Ann. § 55.1-1203; Va. Code Ann. § 36-96.2(F) |
| `term-change-notice` | `edu-term-change-notice-va` (edu) | Present | Va. Code Ann. § 55.1-1204(I); Va. Code Ann. § 55.1-1228(B); Va. Code Ann. § 55.1-1253(D) |
| `tpa-exemption-notice` | `edu-no-tpa-exemption-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1208(B); Va. Code Ann. § 55.1-1201(C) |
| `tpa-notice` | `edu-no-tpa-notice-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1201(E); Va. Code Ann. § 59.1-527; Va. Code Ann. § 59.1-526 |
| `tpa-sunset` | `edu-tpa-sunset-va` (edu) | Present | Va. Code Ann. § 55.1-1245(J)(1); Va. Code Ann. § 55.1-1243; Va. Code Ann. § 55.1-1308.2 |
| `translation-duty` | `edu-no-translation-duty-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1206(D); Va. Code Ann. § 55.1-1301; Va. Code Ann. § 36-139.02 |
| `trespass-notice` | `edu-trespass-notice-va` (edu) | Present | Va. Code Ann. § 18.2-119; Va. Code Ann. § 55.1-1246(A); Va. Code Ann. § 55.1-1246 |
| `truth-in-renting` | `edu-no-truth-in-renting-va` (edu) | Confirmed absent | Va. Code Ann. §§ 55.1-1204(B); Va. Code Ann. § 55.1-1208(A)(1); Va. Code Ann. § 55.1-1208(B) |
| `unbundled-parking` | `edu-no-unbundled-parking-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1204.1; Va. Code Ann. § 55.1-1204(I) |
| `unconscionability` | `edu-no-unconscionability-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 8.2; Va. Code Ann. §§ 8.2-302; Va. Code Ann. § 8.2-102 |
| `unpaid-damages-interest` | `edu-unpaid-amount-interest-va` (edu) | Confirmed absent | Va. Code Ann. § 6.2-301(A); Va. Code Ann. § 6.2-301(B); Va. Code Ann. § 6.2-302(A) |
| `usufructuary-lessor` | `edu-usufructuary-lessor-va` (edu) | Present | Va. Code Ann. § 55.1-1703; Va. Code Ann. § 8.01-94; Va. Code Ann. § 8.01-95 |
| `utility-allowance-cap` | `edu-utility-allowance-cap-va` (edu) | Present | Va. Code Ann. § 56-1.2(1); Va. Code Ann. § 56-245.3(A); Va. Code Ann. § 56-245.3(B) |
| `utility-allowance-cap` | `utility-allowance-cap-va` (clause) | Present | Va. Code Ann. § 56-1.2(1); Va. Code Ann. § 55.1-1212(B); Va. Code Ann. § 55.1-1200 |
| `utility-apportionment` | `edu-utility-apportionment-va` (edu) | Present | Va. Code Ann. § 55.1-1212(B); Va. Code Ann. § 55.1-1212(A); Va. Code Ann. § 55.1-1212(F) |
| `utility-deposit-return` | `edu-utility-deposit-return-va` (edu) | Present | Va. Code Ann. § 55.1-1226(C); Va. Code Ann. § 55.1-1226(A); Va. Code Ann. § 15.2-2119.4(B) |
| `utility-disclosure-attachment` | `edu-no-utility-disclosure-attachment-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1212(B); Va. Code Ann. § 55.1-1212(C); Va. Code Ann. § 55.1-1204.1 |
| `utility-disconnection-notice-authorization` | `edu-utility-disconnection-notice-authorization-va` (edu) | Present | Va. Code Ann. § 15.2-2119.4(H); Va. Code Ann. § 15.2-2119.4(D); Va. Code Ann. § 15.2-5139. |
| `utility-interruption-submeter` | `edu-utility-interruption-submeter-va` (edu) | Present | 20VAC5-305-90; 20VAC5-305-110; Va. Code Ann. § 55.1-1243.1(A) |
| `utility-landlord-account` | `edu-utility-landlord-account-va` (edu) | Present | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1239(A); Va. Code Ann. § 55.1-1244(A) |
| `utility-shutoff-statute` | `edu-utility-shutoff-statute-va` (edu) | Present | Va. Code Ann. § 56-245.1:3(B); Va. Code Ann. § 56-245.1:3(C); Va. Code Ann. § 56-245.1:3(D) |
| `utility-transfer` | `edu-no-utility-transfer-cutoff-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1243.1(A); Va. Code Ann. § 55.1-1252; Va. Code Ann. § 55.1-1200 |
| `veterans-incentive` | `edu-no-veterans-incentive-va` (edu) | Confirmed absent | Va. Code Ann. § 36-96.1:1; Va. Code Ann. § 36-96.3(A); Va. Code Ann. § 58.1-3219.5(A) |
| `water-heater-temperature` | `edu-no-water-heater-setting-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1220(A)(7); Va. Code Ann. § 55.1-1220(A)(4); Va. Code Ann. § 55.1-1220(B) |
| `waterbed` | `edu-no-waterbed-rule-va` (edu) | Confirmed absent | Va. Code Ann. § 55.1-1204(A); Va. Code Ann. § 55.1-1228(B); Va. Code Ann. § 55.1-1206(B) |
| `window-guards` | `edu-no-window-guard-rule-va` (edu) | Confirmed absent | 13VAC5-63-245; 13VAC5-63-210; 13VAC5-63-431 |
| `written-notice-required` | `edu-written-notice-required-va` (edu) | Present | Va. Code Ann. § 55.1-1200; Va. Code Ann. § 55.1-1202(A); Va. Code Ann. § 55.1-1245(A) |

### §3 Batteries

Every battery below was logged by script at the time it ran (terms, scope, unit counts, hit ids, positives, controls). Reproducibility: every logged term was re-run by script (`tools/recheck.py`) against the final unit index. All 1,231 logged terms were re-run on 2026-11-08 (`ref/recheck.json`). 1,198 reproduce their logged hit lists exactly. The other 33 lose no hit; each gains only sections of the Virginia regulations saved from the browser after the term ran (18VAC62-20, 12VAC5-462, 20VAC5-305), and every gained section was opened. Two gains bore on a row and the row was amended: VA-G-0718 terms [3]-[4] now reach 20VAC5-305-90 (owner-paid areas may not be measured through a unit's submeter; added to edu-ordnance-demolition-meter-disclosures-va), and VA-G-0404 term [0] now reaches 12VAC5-462-10 (apartment pools; pointer added to edu-no-health-district-rental-rules-va). The rest (for example VA-G-0209 and VA-G-0216, noted in their rows) are not on point. Unit counts logged for all-source terms before the saves are 18, 24, 25 or 31 lower than a rerun, depending on which saved texts existed when the term ran (35,536, 35,542, 35,543 or 35,549 then; 35,567 now); hit lists are unaffected. Where a hit set was opened by category and sample rather than one by one (VA-G-0924 term [1], VA-G-0927 term [1]), the row says so.

**VA-G-0001** [cannabis]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:marijuana|cannabis|marihuana)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|rental agreements?|\bleases?\b|\bleased\b|\bdwelling units?\b|\bresidential\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|rental agreements?|\bleases?\b|\bleased\b|\bdwelling units?\b|\bresidential\b)[\s\S]{0,1200}(?:marijuana|cannabis|marihuana)` / all (35536 units) / 11 hits: 4.1-225, 4.1-248, 4.1-809, 4.1-810, 4.1-1113, 4.1-1300, 4.1-1402, 18.2-258, 18.2-308.09, 19.2-389, 19.2-389#v2
- `\A(?=[\s\S]*(?:marijuana|cannabis|marihuana))(?=[\s\S]*(?:\blandlords?\b|\brental agreements?\b))` / all (35536 units) / 1 hits: 4.1-809
- `\bmarijuana\b` / code:4\.1-11 (42 units) / 20 hits: 4.1-1100, 4.1-1101, 4.1-1101.1, 4.1-1102, 4.1-1103, 4.1-1104, 4.1-1105, 4.1-1105.1, 4.1-1106, 4.1-1106.1, 4.1-1107, 4.1-1108 +8
- `(?:prohibit|regulat|restrict)\w*[\s\S]{0,1200}(?:marijuana|cannabis)[\s\S]{0,1200}\bprivate property\b|\bprivate property\b[\s\S]{0,1200}(?:marijuana|cannabis)` / all (35536 units) / 0 hits
- `\bcannabis (?:oil|products?)\b[\s\S]{0,1200}(?:discriminat\w*|penaliz\w*|denied)|(?:discriminat\w*|penaliz\w*)[\s\S]{0,1200}\bcannabis (?:oil|products?)\b` / code (34494 units) / 3 hits: 4.1-1604, 4.1-1604#v2, 40.1-27.4
- `\bhome cultivation\b|\bcultivate up to four\b` / all (35536 units) / 1 hits: 4.1-1101
- positive [0] 4.1-809: passed
- positive [2] 4.1-1101: passed
- positive [4] 40.1-27.4: passed
- positive [5] 4.1-1101: passed
**VA-G-0002** [pool-safety]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `swimming pools?` / saved (13 units) / 4 hits: 12VAC5-462-10, 12VAC5-462-20, 12VAC5-462-60, 12VAC5-462-300
- `lifeguard` / saved (13 units) / 0 hits
- `\A(?=[\s\S]*\b(?:pool|spa)s?\b)(?=[\s\S]*\b(?:apartment|condominium|tenant|lessee|residential)\b)` / saved (13 units) / 2 hits: 12VAC5-462-10, 12VAC5-462-60
- positive [0] 12VAC5-462-10: passed
- positive [2] 12VAC5-462-10: passed
**VA-G-0003** [electric-submetering-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:rental agreements?|leases?)[\s\S]{0,1200}(?:submeter\w*|energy allocation)` / saved (31 units) / 4 hits: 20VAC5-305-10, 20VAC5-305-20, 20VAC5-305-30, 20VAC5-305-90
- `(?:submeter\w*|energy allocation)[\s\S]{0,1200}(?:rental agreements?|leases?)` / saved (31 units) / 3 hits: 20VAC5-305-20, 20VAC5-305-30, 20VAC5-305-90
- `\b(?:disconnect\w*|terminat\w*|interrupt\w*|shut ?off)\b[\s\S]{0,1200}(?:submeter\w*|energy allocation|tenant)` / saved (31 units) / 2 hits: 20VAC5-305-90, 20VAC5-305-110
- `(?:third[- ]party|landlord|property owner|master[- ]meter\w*)[\s\S]{0,1200}\b(?:notice|notif\w*)\b` / saved (31 units) / 0 hits
- `\b(?:notice|notif\w*)\b[\s\S]{0,1200}(?:third[- ]party|landlord|property owner|master[- ]meter\w*)` / saved (31 units) / 0 hits
- positive [0] 20VAC5-305-20: passed
- positive [2] 20VAC5-305-110: passed
**VA-G-0101** [habitability-waiver]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bwaive[sd]?\b|\bwaivers?\b|\bforgo\b|\bforego\b)[\s\S]{0,1200}\bhabitab|\bhabitab[\s\S]{0,1200}(?:\bwaive[sd]?\b|\bwaivers?\b|\bforgo\b|\bforego\b)` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bhabitab)(?=[\s\S]*(?:\bwaive[sd]?\b|\bwaivers?\b))` / code (34494 units) / 0 hits
- `\b(?:reductions?|reduced?|abatements?|abated?)\b[\s\S]{0,1200}\brents?\b[\s\S]{0,1200}\b(?:conditions?|defects?|repairs?)\b|\b(?:conditions?|defects?|repairs?)\b[\s\S]{0,1200}\brents?\b[\s\S]{0,1200}\b(?:reductions?|reduced?|abatements?|abated?)\b` / code:55\.1-1[234] (153 units) / 3 hits: 55.1-1244, 55.1-1244#v2, 55.1-1411
- `\babatements? of rent\b|\brent abatements?\b|\breduction of (?:the )?rent\b|\breduced rent\b` / code:55\.1-1[234] (153 units) / 3 hits: 55.1-1244, 55.1-1244#v2, 55.1-1411
- `\bas[- ]is\b(?! necessary)(?! mentioned)(?! described)|\bwith all faults\b|\bpresent condition\b|\bexisting condition\b` / code:55\.1-1[234] (153 units) / 1 hits: 55.1-1426
- positive [3] 55.1-1244: passed
- positive [3] 55.1-1411: passed
**VA-G-0102** [knowing-use-penalty]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bknowingly\b|\bknowing\b` / code:55\.1-1[234] (153 units) / 0 hits
- `(?:\bknowingly\b|\bdeliberately\b|\bwillfully\b|\bwilfully\b)[\s\S]{0,1200}\b(?:prohibited|unenforceable|void)\b|\b(?:prohibited|unenforceable|void)\b[\s\S]{0,1200}(?:\bknowingly\b|\bdeliberately\b|\bwillfully\b|\bwilfully\b)` / code:55\.1-1[234] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:prohibited|unenforceable)\b)(?=[\s\S]*(?:\bknowingly\b|\bdeliberately\b|\bwillfully\b|\bwilfully\b))` / code:55\.1-1[234] (153 units) / 0 hits
- `\b(?:knowingly|deliberately|willfully|wilfully) (?:uses?|used|using|includes?|included|including|inserts?|inserted)\b` / code (34494 units) / 18 hits: 3.2-3939, 8.01-40, 10.1-1425.21, 18.2-121.2, 18.2-152.15, 18.2-160.1, 18.2-216.1, 18.2-308.3, 19.2-386.16, 46.2-347, 46.2-347#v2, 46.2-1173 +6
- `\bwillful(?:ly)?\b` / code:55\.1-12 (91 units) / 9 hits: 55.1-1226, 55.1-1238, 55.1-1239, 55.1-1243.1, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250, 55.1-1252
- positive [4] 55.1-1226: passed
**VA-G-0103** [liquidated-damages]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bliquidated damages?\b|\bliquidated damage penalty\b` / all (35536 units) / 41 hits: 2.2-4335, 8.01-44.4, 8.2-718, 8.2A-103, 13.1-329, 13.1-1093, 15.2-958.4:1, 15.2-2108.22, 16.1-77, 16.1-88.01, 19.2-69, 29.1-533 +29
- `\bliquidated damages?\b` / code:(?:8\.01|11|59\.1)- (2060 units) / 8 hits: 8.01-44.4, 59.1-21.12, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4, 59.1-475.1, 59.1-508.4
- `\bpenalty clauses?\b|\bvoid as a penalty\b|\bin the nature of a penalty\b|\bunenforceable (?:as )?a penalty\b` / all (35536 units) / 6 hits: 8.2-718, 56-235.1, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4
- `\bdamages?\b[\s\S]{0,1200}\b(?:fixed|agreed|stipulated|predetermined|determined) (?:in advance|in anticipation)\b|\b(?:in advance|in anticipation)\b[\s\S]{0,1200}\bdamages?\b` / code:(?:8\.01|11|59\.1)- (2060 units) / 0 hits
- `\bstipulated damages?\b|\bagreed damages?\b|\bpredetermined damages?\b` / all (35536 units) / 0 hits
- `\A(?=[\s\S]*\bpenalt(?:y|ies)\b)(?=[\s\S]*\bbreach(?:es|ed)?\b)` / code:11- (40 units) / 0 hits
- positive [0] 55.1-1253: passed
- positive [2] 8.2-718: passed
**VA-G-0104** [attorney-fees]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\breciprocal(?:ly)?\b|\breciprocity\b` / code (34494 units) / 144 hits: 2.2-409, 2.2-2034.1, 2.2-2472, 3.2-1001, 3.2-3801, 3.2-3934, 4.1-206.3, 4.1-1101.1, 4.1-1103, 5.1-158, 8.01-412.10, 9.1-140 +132 / heading-only: 2.2-2039, 8.01-412.14, 15.2-2108.26, 45.2-526, 45.2-1118, 46.2-307
- `\breciproc[\s\S]{0,1200}\battorney|\battorney[\s\S]{0,1200}\breciproc` / code (34494 units) / 30 hits: 2.2-409, 17.1-328, 18.2-308.014, 18.2-308.014#v2, 18.2-308.016, 38.2-100, 38.2-1201, 38.2-1209, 38.2-1210, 38.2-1211, 38.2-1213, 38.2-1216 +18
- `\A(?=[\s\S]*\breciproc)(?=[\s\S]*\battorney)(?=[\s\S]*\b(?:lease|leases|leased|rental agreements?|tenants?|lessees?)\b)` / code (34494 units) / 2 hits: 46.2-703, 59.1-318
- `\bprevailing party\b` / code:55\.1-12 (91 units) / 1 hits: 55.1-1234.1
- `\battorney\'?s?\'? fees?\b[\s\S]{0,1200}\b(?:either party|both parties|each party|the other party)\b|\b(?:either party|both parties|each party|the other party)\b[\s\S]{0,1200}\battorney\'?s?\'? fees?\b` / code:55\.1-1[234] (153 units) / 2 hits: 55.1-1244, 55.1-1244#v2
- positive [3] 55.1-1234.1: passed
**VA-G-0105** [collection-fee]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bcosts? of collection\b|\bcollection costs?\b|\bcollection fees?\b|\bcollection charges?\b|\bcollection expenses?\b` / all (35536 units) / 24 hits: 2.2-803, 6.2-400, 8.01-436, 8.4-204, 10.1-1311, 10.1-1500, 12.1-15, 15.2-2119, 19.2-305.1, 19.2-354, 19.2-354#v2, 38.2-509 +12
- `\bcollect(?:ion|ing|s|ed)?\b[\s\S]{0,1200}\b(?:fees?|charges?|costs?)\b[\s\S]{0,1200}\b(?:rent|tenants?|lessees?|rental agreements?)\b|\b(?:rent|tenants?|lessees?|rental agreements?)\b[\s\S]{0,1200}\b(?:fees?|charges?|costs?)\b[\s\S]{0,1200}\bcollect(?:ion|ing|s|ed)?\b` / code:55\.1-1[234] (153 units) / 9 hits: 55.1-1203#v2, 55.1-1204, 55.1-1204#v2, 55.1-1212, 55.1-1212#v2, 55.1-1236, 55.1-1302, 55.1-1306, 55.1-1404
- `\A(?=[\s\S]*\bcollection agenc(?:y|ies)\b)(?=[\s\S]*\b(?:fees?|charges?|costs?)\b)(?=[\s\S]*\b(?:debtors?|consumers?|tenants?)\b)` / code (34494 units) / 7 hits: 2.2-4806, 6.2-2005, 6.2-2014, 55.1-1209, 55.1-1209#v2, 58.1-3916, 59.1-444.2
- `\bdebt collect(?:ors?|ion)\b` / code:(?:6\.2|8\.01|11|55\.1|59\.1)- (3928 units) / 8 hits: 6.2-1816, 6.2-2000, 6.2-2014, 6.2-2026, 6.2-2040, 6.2-2215, 59.1-611, 59.1-612 / heading-only: 8.01-271.2
- `\bfee for the collection\b` / code:55\.1-12 (91 units) / 2 hits: 55.1-1204, 55.1-1204#v2
- positive [4] 55.1-1204: passed
**VA-G-0106** [eviction-penalty-clause-ban]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\beviction fees?\b|\beviction charges?\b|\beviction penalt(?:y|ies)\b|\bfiling fees?\b[\s\S]{0,200}\b(?:tenants?|lessees?)\b` / all (35536 units) / 1 hits: 46.2-1530
- `\b(?:evict(?:ion|ed|ing|s)?|unlawful detainer)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\brental agreements?\b|\brental agreements?\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:evict(?:ion|ed|ing|s)?|unlawful detainer)\b` / code:55\.1-12 (91 units) / 10 hits: 55.1-1200, 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250, 55.1-1251, 55.1-1258#v2
- `\A(?=[\s\S]*\b(?:evict(?:ion|ed|ing|s)?|unlawful detainer)\b)(?=[\s\S]*\bpenalt(?:y|ies)\b)` / code:(?:55\.1-12|8\.01-12[4-9]|8\.01-13[0-9]) (122 units) / 2 hits: 55.1-1245#v2, 55.1-1245#v3
- `\b(?:charge|charges|charged|charging|assess|assessed)\b[\s\S]{0,200}\bfor (?:filing|bringing|instituting) (?:an |any )?(?:action|suit|case|summons)\b` / code (34494 units) / 0 hits
- positive [1] 55.1-1250: passed
**VA-G-0107** [unconscionability]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bunconscionab` / all (35536 units) / 21 hits: 8.01-465.18, 8.01-576.12, 8.01-581.26, 8.2-302, 8.2-309, 8.2-719, 8.2A-108, 8.2A-503, 20-109, 20-151, 55.1-2109, 55.1-2136 +9
- `\bunconscionab` / code:55\.1-1[234] (153 units) / 0 hits
- `\bunconscionab[\s\S]{0,1200}\b(?:rental agreements?|tenants?|landlords?|lessees?|lessors?|dwellings?)\b|\b(?:rental agreements?|tenants?|landlords?|lessees?|lessors?|dwellings?)\b[\s\S]{0,1200}\bunconscionab` / code (34494 units) / 3 hits: 8.2A-108, 8.2A-503, 55.1-2136
- `\A(?=[\s\S]*\bunconscionab)(?=[\s\S]*\b(?:rental agreements?|dwelling units?|residential|real property|real estate)\b)` / code (34494 units) / 1 hits: 55.1-2136
- `\bgrossly unfair\b|\boppressive (?:terms?|contracts?|clauses?)\b|\bone-sided\b|\bshocks? the conscience\b` / all (35536 units) / 0 hits
- positive [0] 8.2A-108: passed
**VA-G-0108** [jury-waiver]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bwaive[sd]?\b|\bwaiving\b|\bwaivers?\b)[\s\S]{0,1200}\b(?:jury|juries)\b|\b(?:jury|juries)\b[\s\S]{0,1200}(?:\bwaive[sd]?\b|\bwaiving\b|\bwaivers?\b)` / code:(?:8\.01|11|16\.1|55\.1|59\.1)- (3413 units) / 8 hits: 8.01-216.12, 8.01-229, 8.01-336, 8.01-423, 16.1-241, 16.1-249, 16.1-269.1, 59.1-21.11
- `\A(?=[\s\S]*\b(?:jury|juries)\b)(?=[\s\S]*\b(?:rental agreements?|tenants?|landlords?|lessees?|lessors?)\b)` / code (34494 units) / 8 hits: 3.2-6569, 8.01-167, 15.2-1812.2, 20-107.3, 25.1-209, 36-96.18, 55.1-1236, 55.1-1418
- `\b(?:jury|juries)\b` / code:55\.1-1[234] (153 units) / 3 hits: 55.1-123, 55.1-1236, 55.1-1418
- `(?:\bwaive[sd]?\b|\bwaivers?\b)[\s\S]{0,1200}\bjury\b|\bjury\b[\s\S]{0,1200}(?:\bwaive[sd]?\b|\bwaivers?\b)` / rules (319 units) / 6 hits: R. 1:27, R. 3:19, R. 3:21, R. 3A:9, R. 3A:13, R. 3A:25
- `\btrial by jury\b` / const (131 units) / 2 hits: Const art. I, § 8. , Const art. I, § 11
- `\bjury trial\b|\btrial by jury\b|\bright to (?:a )?jury\b` / code:(?:8\.01|16\.1)- (1574 units) / 18 hits: 8.01-36, 8.01-107, 8.01-125, 8.01-129, 8.01-195.4, 8.01-267.3, 8.01-267.6, 8.01-336, 8.01-374.1, 8.01-383, 8.01-576.1, 8.01-576.2 +6 / heading-only: 8.01-188
- positive [4] Const art. I, § 11: passed
- positive [0] 8.01-336: passed
**VA-G-0109** [smoke-drift-waiver]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bsecond[- ]?hand smoke\b|\bsmoke drift\b|\bdrifting smoke\b|\btobacco smoke\b|\benvironmental tobacco smoke\b|\bsmoke infiltration\b` / all (35536 units) / 0 hits
- `\bsmok(?:e|es|ing|ed)\b(?!\s+(?:alarms?|detectors?|detection|projectors?|screens?|bombs?))[\s\S]{0,1200}\b(?:tenants?|dwelling units?|rental agreements?|apartments?)\b|\b(?:tenants?|dwelling units?|rental agreements?|apartments?)\b[\s\S]{0,1200}\bsmok(?:e|es|ing|ed)\b(?!\s+(?:alarms?|detectors?|detection|projectors?|screens?|bombs?))` / code (34494 units) / 3 hits: 10.1-1159, 38.2-1881, 55.1-1819.1
- `\A(?=[\s\S]*\bsmoking\b)(?=[\s\S]*\b(?:tenants?|dwelling units?|apartments?|multifamily|residential)\b)` / code (34494 units) / 3 hits: 4.1-100#v2, 15.2-2824, 55.1-1819.1
- `\bodou?rs?\b[\s\S]{0,1200}\b(?:tenants?|dwelling units?|neighbou?rs?)\b|\b(?:tenants?|dwelling units?|neighbou?rs?)\b[\s\S]{0,1200}\bodou?rs?\b` / code:55\.1- (897 units) / 0 hits
- `\bsmoking\b` / code:15\.2-28 (22 units) / 12 hits: 15.2-2820, 15.2-2821, 15.2-2823, 15.2-2824, 15.2-2825, 15.2-2826, 15.2-2827, 15.2-2828, 15.2-2830, 15.2-2831, 15.2-2832, 15.2-2833
- positive [4] 15.2-2824: passed
**VA-G-0110** [plain-language-consumer-statement]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bplain[- ]language\b` / code (34494 units) / 19 hits: 6.2-1347.1, 6.2-1816, 6.2-2215, 8.01-126, 8.01-126#v2, 8.01-512.3, 8.01-512.3#v2, 32.1-330.2, 36-139, 36-139#v2, 36-177, 38.2-606 +7
- `\bstatements? of (?:consumer )?restrictions?\b|\bconsumer restrictions?\b|\breadability\b|\bFlesch\b|\breading ease\b` / all (35536 units) / 7 hits: 32.1-23.1, 32.1-330.2, 38.2-233, 38.2-3116, 38.2-3404, 38.2-3724, 38.2-3735
- `\A(?=[\s\S]*\bplain[- ]language\b)(?=[\s\S]*\b(?:leases?|leased|rental agreements?|tenants?|lessees?)\b)` / code (34494 units) / 6 hits: 8.01-126, 8.01-126#v2, 36-139, 36-139#v2, 36-177, 59.1-207.45
- `\bplain[- ]language\b[\s\S]{0,1200}\b(?:consumers?|contracts?|agreements?|leases?)\b|\b(?:consumers?|contracts?|agreements?|leases?)\b[\s\S]{0,1200}\bplain[- ]language\b` / code (34494 units) / 9 hits: 6.2-2215, 8.01-126, 8.01-126#v2, 36-139, 36-139#v2, 38.2-606, 59.1-207.45, 59.1-595, 59.1-612
- `\bclear and (?:understandable|coherent|conspicuous) (?:language|manner|terms)\b|\beveryday meanings?\b|\beasily understood\b|\bsimple language\b` / code:(?:55\.1|59\.1|8\.01|11)- (2957 units) / 3 hits: 59.1-207.16:1, 59.1-207.41, 59.1-207.46
- positive [0] 36-139: passed
**VA-G-0111** [lease-content-requirements]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bfirst page\b` / code:55\.1-12\d (91 units) / 3 hits: 55.1-1202, 55.1-1202#v2, 55.1-1204.1
- `\b(?:beginning|commencement|start(?:ing)?|ending|expiration|end) dates?\b[\s\S]{0,1200}\b(?:first page|face of the (?:lease|rental agreement))\b|\b(?:first page|face of the (?:lease|rental agreement))\b[\s\S]{0,1200}\b(?:beginning|commencement|start(?:ing)?|ending|expiration|end) dates?\b` / code:55\.1-1[234] (153 units) / 2 hits: 55.1-1204.1, 55.1-1302
- `\A(?=[\s\S]*\b(?:written )?rental agreements?\b)(?=[\s\S]*\bshall (?:contain|include|state|specify|set forth|designate)\b)` / code:55\.1-12\d (91 units) / 12 hits: 55.1-1204#v2, 55.1-1204.1, 55.1-1206, 55.1-1212#v2, 55.1-1217, 55.1-1229, 55.1-1245, 55.1-1245#v2, 55.1-1250, 55.1-1256, 55.1-1260, 55.1-1262
- `\bconspicuous(?:ly)?\b|\bbold(?:face)?\b|\bcapital letters\b|\bpoint type\b|\btype size\b` / code:55\.1-12\d (91 units) / 4 hits: 55.1-1223, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- positive [0] 55.1-1204.1: passed
**VA-G-0112** [statutory-caps]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\$\s?\d` / code:55\.1-12\d (91 units) / 11 hits: 55.1-1200, 55.1-1203, 55.1-1203#v2, 55.1-1211, 55.1-1212, 55.1-1212#v2, 55.1-1243.1, 55.1-1244.1, 55.1-1245, 55.1-1245#v2, 55.1-1247
- `\b\d+ percent\b|\bper ?cent\b` / code:55\.1-12\d (91 units) / 10 hits: 55.1-1204, 55.1-1204#v2, 55.1-1209#v2, 55.1-1212.1, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250, 55.1-1253, 55.1-1262
- `\btwo months\'? (?:periodic )?rent\b|\btwo months of rent\b|\bone month\'s rent\b|\bfour months\' rent\b` / code:55\.1-12\d (91 units) / 9 hits: 55.1-1204, 55.1-1204#v2, 55.1-1206, 55.1-1208, 55.1-1226, 55.1-1243.1, 55.1-1244.1, 55.1-1245#v2, 55.1-1245#v3
- `\bper diem\b` / code:55\.1-12\d (91 units) / 1 hits: 55.1-1253
- `\bactual (?:out-of-pocket )?(?:costs?|expenses?)\b|\bactual and reasonable cost\b` / code:55\.1-12\d (91 units) / 12 hits: 55.1-1203, 55.1-1203#v2, 55.1-1204, 55.1-1204#v2, 55.1-1206, 55.1-1209, 55.1-1209#v2, 55.1-1212, 55.1-1212#v2, 55.1-1230, 55.1-1244.1, 55.1-1248
- `\breasonable (?:fees?|charges?|costs?)\b` / code:55\.1-12\d (91 units) / 10 hits: 55.1-1212, 55.1-1226, 55.1-1229, 55.1-1230, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1248, 55.1-1254, 55.1-1255
- `\bnot (?:to )?exceed\b|\bshall not exceed\b|\bno more than\b|\bup to\b` / code:55\.1-12\d (91 units) / 17 hits: 55.1-1200, 55.1-1203, 55.1-1203#v2, 55.1-1204, 55.1-1204#v2, 55.1-1206, 55.1-1212, 55.1-1212#v2, 55.1-1220, 55.1-1229, 55.1-1231, 55.1-1242 +5
- positive [0] 55.1-1247: passed
**VA-G-0201** [deposit-cost-schedule]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bcarpets?\b` / all (35536 units) / 3 hits: 43-63, 62.1-44.34:32, 13VAC5-63-120
- `\bcarpet[- ]?cleaning\b|\bprofessional(?:ly)? clean(?:ed|ing)?\b` / all (35536 units) / 0 hits
- `\bcleaning (?:fees?|charges?|costs?)\b|\bcleaning deposits?\b` / all (35536 units) / 0 hits
- `\bschedule of (?:charges|fees|deductions|damages|costs)\b` / all (35536 units) / 25 hits: 3.2-4730, 3.2-5616, 6.2-1816, 10.1-1197.6, 10.1-1402, 10.1-1434, 15.2-5209, 15.2-5356, 15.2-5378, 32.1-102.2, 36-55.30, 37.2-504 +13
- `\bsecurity deposits?\b[\s\S]{0,1200}\b(?:clean|cleaned|cleaning|cleanliness|carpets?|repaint(?:ing)?|painting)\b|\b(?:clean|cleaned|cleaning|cleanliness|carpets?|repaint(?:ing)?|painting)\b[\s\S]{0,1200}\bsecurity deposits?\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:cleaning|carpets?|repainting)\b)` / code (34494 units) / 1 hits: 55.1-1200
- `\b(?:pre-?set|predetermined|pre-?established|fixed|flat|set) (?:cleaning |repair |damage )?(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|deposits?)\b|\b(?:tenants?|lessees?|deposits?)\b[\s\S]{0,1200}\b(?:pre-?set|predetermined|pre-?established|fixed|flat|set) (?:cleaning |repair |damage )?(?:fees?|charges?)\b` / code (34494 units) / 2 hits: 2.2-4519, 38.2-1401
- positive [0] 43-63: passed
- positive [4] 55.1-1226: recorded as failed
- positive [3] 6.2-1816: passed
**VA-G-0202** [deposit-cost-schedule]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0201 (positive on term 4 named 55.1-1226, which carries no cleaning word; replaced by a real positive on term 5)
- `\bcarpets?\b` / all (35536 units) / 3 hits: 43-63, 62.1-44.34:32, 13VAC5-63-120
- `\bcarpet[- ]?cleaning\b|\bprofessional(?:ly)? clean(?:ed|ing)?\b` / all (35536 units) / 0 hits
- `\bcleaning (?:fees?|charges?|costs?)\b|\bcleaning deposits?\b` / all (35536 units) / 0 hits
- `\bschedule of (?:charges|fees|deductions|damages|costs)\b` / all (35536 units) / 25 hits: 3.2-4730, 3.2-5616, 6.2-1816, 10.1-1197.6, 10.1-1402, 10.1-1434, 15.2-5209, 15.2-5356, 15.2-5378, 32.1-102.2, 36-55.30, 37.2-504 +13
- `\bsecurity deposits?\b[\s\S]{0,1200}\b(?:clean|cleaned|cleaning|cleanliness|carpets?|repaint(?:ing)?|painting)\b|\b(?:clean|cleaned|cleaning|cleanliness|carpets?|repaint(?:ing)?|painting)\b[\s\S]{0,1200}\bsecurity deposits?\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:cleaning|carpets?|repainting)\b)` / code (34494 units) / 1 hits: 55.1-1200
- `\b(?:pre-?set|predetermined|pre-?established|fixed|flat|set) (?:cleaning |repair |damage )?(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|deposits?)\b|\b(?:tenants?|lessees?|deposits?)\b[\s\S]{0,1200}\b(?:pre-?set|predetermined|pre-?established|fixed|flat|set) (?:cleaning |repair |damage )?(?:fees?|charges?)\b` / code (34494 units) / 2 hits: 2.2-4519, 38.2-1401
- positive [0] 43-63: passed
- positive [5] 55.1-1200: passed
- positive [3] 6.2-1816: passed
**VA-G-0203** [deposit-cost-schedule]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bdeduct(?:s|ed|ing|ion|ions|ible)?\b[\s\S]{0,1200}\bdeposits?\b|\bdeposits?\b[\s\S]{0,1200}\bdeduct(?:s|ed|ing|ion|ions|ible)?\b` / code (34494 units) / 29 hits: 2.2-2744, 5.1-2.25, 8.01-589, 8.9A-607, 15.2-1544, 19.2-159, 33.2-3100, 38.2-415, 38.2-1031, 38.2-1223, 51.1-514, 51.1-1139 +17
- `\A(?=[\s\S]*\bdeduct(?:s|ed|ing|ion|ions)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\bdeposits?\b)` / code (34494 units) / 5 hits: 2.2-4519, 6.2-1100, 54.1-2108.1, 55.1-1226, 55.1-2155
- `\bwear and tear\b` / all (35536 units) / 17 hits: 22.1-132, 32.1-163, 36-96.3, 38.2-129, 38.2-2600, 44-108, 46.2-1530, 46.2-1542, 46.2-1569, 55.1-1226, 55.1-1233, 55.1-1603 +5
- `\bmove-?out\b` / all (35536 units) / 4 hits: 55.1-1212, 55.1-1212#v2, 55.1-1226, 55.1-1404
- positive [0] 55.1-1226: passed
- positive [2] 55.1-1226: passed
- positive [3] 55.1-1226: passed
**VA-G-0204** [deposit-escheat]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bunclaimed\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|lessors?)\b|\b(?:tenants?|landlords?|lessees?|lessors?)\b[\s\S]{0,1200}\bunclaimed\b` / code (34494 units) / 3 hits: 45.2-1620, 46.2-644.01, 55.1-1226
- `\A(?=[\s\S]*\bunclaimed\b)(?=[\s\S]*\b(?:tenants?|landlords?|lessees?)\b)` / code (34494 units) / 2 hits: 46.2-644.01, 55.1-1226
- `\bsecurity deposits?\b|\brent(?:al)? (?:deposits?|credits?|prepayments?)\b|\bprepaid rent\b` / code:55\.1-25 (47 units) / 1 hits: 55.1-2500
- `\bforwarding address(?:es)?\b` / all (35536 units) / 2 hits: 55.1-609, 55.1-1226
- `\bundeliverable\b|\breturned (?:as )?undelivered\b` / all (35536 units) / 15 hits: 2.2-515.2, 13.1-610, 13.1-810#v2, 18.2-183, 24.2-410.5, 24.2-428.1, 24.2-703, 46.2-1576, 55.1-1815, 55.1-1949, 55.1-2503, 55.1-2511 +3
- `\bpresumed abandoned\b[\s\S]{0,1200}\bdeposits?\b|\bdeposits?\b[\s\S]{0,1200}\bpresumed abandoned\b` / code (34494 units) / 4 hits: 55.1-2503, 55.1-2506, 55.1-2510, 55.1-2524
- `\babandon(?:ed|s|ment)?\b[\s\S]{0,1200}\b(?:refunds?|security deposits?)\b[\s\S]{0,1200}\b(?:tenants?|landlords?)\b` / code (34494 units) / 1 hits: 55.1-1254
- positive [0] 55.1-1226: passed
- positive [2] 55.1-2500: passed
- positive [3] 55.1-1226: passed
- positive [5] 55.1-2510: passed
**VA-G-0205** [deposit-installments]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\binstall?ments?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\binstall?ments?\b` / code (34494 units) / 2 hits: 55.1-1204, 55.1-1204#v2
- `\A(?=[\s\S]*\binstall?ments?\b)(?=[\s\S]*\bsecurity deposits?\b)` / code (34494 units) / 2 hits: 55.1-1204, 55.1-1204#v2
- `\binstall?ments?\b[\s\S]{0,1200}\bdeposits?\b|\bdeposits?\b[\s\S]{0,1200}\binstall?ments?\b` / code:55\.1- (897 units) / 3 hits: 55.1-1204, 55.1-1204#v2, 55.1-2303
- `\bpayment plans?\b[\s\S]{0,1200}\bdeposits?\b|\bdeposits?\b[\s\S]{0,1200}\bpayment plans?\b` / code (34494 units) / 4 hits: 15.2-2121.3, 24.2-948.7, 46.2-223, 56-245.1:4
- `\b(?:pay|pays|paid|paying)\b[\s\S]{0,60}\bdeposits?\b[\s\S]{0,60}\b(?:over time|in parts|in portions|partial(?:ly)?)\b` / code (34494 units) / 0 hits
- `\bpartial (?:payments?|deposits?)\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bpartial (?:payments?|deposits?)\b` / code (34494 units) / 0 hits
- positive [1] 55.1-1204: passed
- positive [0] 55.1-1204: passed
**VA-G-0206** [deposit-installments]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bdeposit installments?\b|\binstallment deposits?\b|\bdeposits? (?:paid|payable) in installments?\b` / all (35536 units) / 0 hits
- `\binstallment payments?\b` / all (35536 units) / 53 hits: 2.2-2417, 6.2-400, 6.2-437, 6.2-1524, 15.2-718, 15.2-740, 15.2-4606, 15.2-4705, 15.2-5158, 19.2-349, 19.2-349#v2, 19.2-353.5 +41 / heading-only: 15.2-2413, 58.1-502
- positive [1] 55.1-1204: recorded as failed
**VA-G-0207** [deposit-installments]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0206 (positive named § 55.1-1204, which has no "installment payment"; replaced by a real positive)
- `\bdeposit installments?\b|\binstallment deposits?\b|\bdeposits? (?:paid|payable) in installments?\b` / all (35536 units) / 0 hits
- `\binstallment payments?\b` / all (35536 units) / 53 hits: 2.2-2417, 6.2-400, 6.2-437, 6.2-1524, 15.2-718, 15.2-740, 15.2-4606, 15.2-4705, 15.2-5158, 19.2-349, 19.2-349#v2, 19.2-353.5 +41 / heading-only: 15.2-2413, 58.1-502
- positive [1] 38.2-2233: passed
**VA-G-0208** [deposit-last-month-rent]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\blast month'?s?'? ?rent\b|\bfinal month'?s?'? ?rent\b|\blast (?:month|rental period|installment) of (?:the )?(?:rent|term|tenancy)\b` / all (35536 units) / 0 hits
- `\bprepaid rent\b|\brent paid in advance\b|\badvance rent\b|\bpaid more than one month in advance\b` / all (35536 units) / 7 hits: 55.1-1200, 55.1-1205, 55.1-1238, 55.1-1240, 55.1-1240#v2, 55.1-1243.2, 18VAC135-20-181
- `\bsecurity deposits?\b[\s\S]{0,1200}\b(?:last|final) (?:month|period|installment)\b|\b(?:last|final) (?:month|period|installment)\b[\s\S]{0,1200}\bsecurity deposits?\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:last|final) month\b)` / code (34494 units) / 0 hits
- `\bcredit\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bcredit\b` / code (34494 units) / 5 hits: 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-1251, 55.1-2500
- positive [1] 55.1-1205: passed
- positive [4] 55.1-1226: passed
**VA-G-0209** [deposit-last-month-rent]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0208 (INFLECTION line on term 4 (credits/credited); inflections added)
- `\blast month'?s?'? ?rent\b|\bfinal month'?s?'? ?rent\b|\blast (?:month|rental period|installment) of (?:the )?(?:rent|term|tenancy)\b` / all (35536 units) / 0 hits
- `\bprepaid rent\b|\brent paid in advance\b|\badvance rent\b|\bpaid more than one month in advance\b` / all (35536 units) / 7 hits: 55.1-1200, 55.1-1205, 55.1-1238, 55.1-1240, 55.1-1240#v2, 55.1-1243.2, 18VAC135-20-181
- `\bsecurity deposits?\b[\s\S]{0,1200}\b(?:last|final) (?:month|period|installment)\b|\b(?:last|final) (?:month|period|installment)\b[\s\S]{0,1200}\bsecurity deposits?\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:last|final) month\b)` / code (34494 units) / 0 hits
- `\bcredit(?:s|ed|ing)?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bcredit(?:s|ed|ing)?\b` / code (34494 units) / 6 hits: 55.1-1204, 55.1-1204#v2, 55.1-1209#v2, 55.1-1226, 55.1-1251, 55.1-2500
- positive [1] 55.1-1205: passed
- positive [4] 55.1-1226: passed
**VA-G-0210** [security-deposit-cap]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:additional|increased?|increases?|increasing) (?:in )?(?:the |any )?(?:amount of (?:the |any )?)?(?:security )?deposits?\b` / code:55\.1- (897 units) / 2 hits: 55.1-1204.1, 55.1-1302
- `\btwo months'? (?:of )?(?:periodic )?rent\b|\bone month'?s'? (?:periodic )?rent\b` / code (34494 units) / 8 hits: 55.1-1204, 55.1-1204#v2, 55.1-1206, 55.1-1208, 55.1-1226, 55.1-1244.1, 55.1-1245#v2, 55.1-1245#v3
- `\bsecurity deposits?\b[\s\S]{0,1200}\b(?:furniture|furnished|pets?|waterbeds?)\b|\b(?:furniture|furnished|pets?|waterbeds?)\b[\s\S]{0,1200}\bsecurity deposits?\b` / code (34494 units) / 2 hits: 55.1-1200, 55.1-1302
- positive [0] 55.1-1204.1: passed
- positive [1] 55.1-1226: passed
- positive [2] 55.1-1200: passed
**VA-G-0211** [security-deposit-holding]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bescrow\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bescrow\b` / code (34494 units) / 2 hits: 54.1-2108.1, 55.1-1226
- `\b(?:separate|segregated|trust|interest-bearing|insured) (?:bank )?accounts?\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?)\b|\b(?:tenants?|landlords?|lessees?)\b[\s\S]{0,1200}\b(?:separate|segregated|trust|interest-bearing|insured) (?:bank )?accounts?\b` / code (34494 units) / 2 hits: 6.2-1100, 33.2-2105
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:account|accounts|depository|depositories)\b)` / code (34494 units) / 13 hits: 15.2-2119.4, 36-139#v2, 54.1-2108.1, 55.1-1200, 55.1-1206, 55.1-1226, 55.1-1237, 55.1-1251, 55.1-1254, 55.1-1255, 55.1-1416, 55.1-2500 +1
- `\bcommingl(?:e|ed|es|ing)\b` / all (35536 units) / 52 hits: 2.2-3101, 3.2-3104, 3.2-3114, 3.2-3615, 5.1-30.3, 6.2-1417, 6.2-1618, 6.2-1944, 6.2-1952, 8.7-207, 8.9A-204, 8.9A-205 +40
- `\bfederally insured\b` / code:55\.1- (897 units) / 6 hits: 55.1-1205, 55.1-1827, 55.1-1944, 55.1-1983, 55.1-2220, 55.1-2303
- `\b(?:bond|surety)\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\b(?:bond|surety)\b` / code (34494 units) / 4 hits: 55.1-1200, 55.1-2500, 65.2-802, 65.2-1203
- positive [0] 55.1-1226: passed
- positive [0] 54.1-2108.1: passed
- positive [3] 18VAC135-20-181: passed
- positive [4] 55.1-1205: passed
**VA-G-0212** [security-deposit-on-sale]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\btransfer(?:s|red|ring)?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\btransfer(?:s|red|ring)?\b` / code (34494 units) / 6 hits: 54.1-2108.1, 55.1-1200, 55.1-1213, 55.1-1226, 55.1-1317, 55.1-1405
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:purchasers?|buyers?|new owners?|successors?|grantees?)\b)` / code (34494 units) / 7 hits: 54.1-2103, 54.1-2108.1, 55.1-1209#v2, 55.1-1213, 55.1-1226, 55.1-1237, 55.1-1405
- `\bdeposits?\b[\s\S]{0,1200}\b(?:new owner|purchaser|successor in interest|grantee)s?\b|\b(?:new owner|purchaser|successor in interest|grantee)s?\b[\s\S]{0,1200}\bdeposits?\b` / code:55\.1-1[2-6] (169 units) / 3 hits: 55.1-1213, 55.1-1237, 55.1-1405
- positive [0] 55.1-1213: passed
- positive [1] 55.1-1226: passed
**VA-G-0213** [security-deposit-penalty]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:twice|double|doubled|treble|trebled|three times)\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\b(?:twice|double|doubled|treble|trebled|three times)\b` / code (34494 units) / 0 hits
- `\bwillful(?:ly)?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bwillful(?:ly)?\b` / code (34494 units) / 3 hits: 55.1-1226, 55.1-1238, 55.1-1243.1
- `\bforfeit(?:s|ed|ing|ure)?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bforfeit(?:s|ed|ing|ure)?\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:penalty|penalties|statutory damages|civil penalty)\b)` / code (34494 units) / 3 hits: 15.2-2119.4, 55.1-1243.1, 55.1-1302
- `\bwrongful(?:ly)? (?:withheld|withholding|retained|retention|kept)\b` / all (35536 units) / 3 hits: 40.1-28.6, 55.1-1203, 55.1-1203#v2
- positive [1] 55.1-1226: passed
- positive [4] 55.1-1203: passed
**VA-G-0214** [security-deposit-standards]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:standards?|criteria|formula|methods?)\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\b(?:standards?|criteria|formula|methods?)\b` / code (34494 units) / 8 hits: 55.1-1200, 55.1-1204, 55.1-1204#v2, 55.1-1209#v2, 55.1-1226, 56-592, 65.2-801, 65.2-802
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:post|posted|posting)\b)` / code (34494 units) / 7 hits: 32.1-138.5:1, 55.1-1204, 55.1-1204#v2, 55.1-1251, 55.1-1255, 55.1-1416, 63.2-1808.2
- `\badjoining (?:dwelling )?units?\b|\bmore than four (?:adjoining )?(?:rental )?(?:dwelling )?units\b` / all (35536 units) / 22 hits: 15.2-716, 15.2-961.1, 32.1-164.1:1, 36-96.2, 36-96.2#v2, 55.1-701, 55.1-1204, 55.1-1204#v2, 55.1-1209#v2, 55.1-1212.1, 55.1-1245, 55.1-1245#v2 +10
- `\bdifferent (?:amounts?|standards?|deposits?)\b[\s\S]{0,1200}\b(?:tenants?|deposits?)\b|\b(?:tenants?|deposits?)\b[\s\S]{0,1200}\bdifferent (?:amounts?|standards?|deposits?)\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 55.1-1200: passed
- positive [2] 55.1-1204: passed
**VA-G-0215** [nonrefundable-deposit-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bnon-?refundable\b` / all (35536 units) / 101 hits: 3.2-3925, 3.2-4114.2, 3.2-4115, 3.2-4122, 3.2-4765, 3.2-5509, 3.2-6038, 4.1-1700, 6.2-1508.1, 6.2-1607, 6.2-1807, 6.2-1931 +89
- `\bnon-?refundable\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|rental agreements?|dwelling units?)\b|\b(?:tenants?|lessees?|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\bnon-?refundable\b` / code (34494 units) / 3 hits: 55.1-1200, 55.1-1203, 55.1-1203#v2
- `\A(?=[\s\S]*\bnon-?refundable\b)(?=[\s\S]*\b(?:tenants?|landlords?)\b)` / code (34494 units) / 3 hits: 55.1-1200, 55.1-1203, 55.1-1203#v2
- `\b(?:move-?in|pet|cleaning|redecorating|turnover|amenity|administrative|admin) fees?\b` / code:55\.1- (897 units) / 1 hits: 55.1-1226
- `\bnot refundable\b|\bshall not be refunded\b|\bnon-?returnable\b` / all (35536 units) / 14 hits: 4.1-230, 4.1-243, 4.1-1000, 13.1-615, 13.1-815, 13.1-815#v2, 13.1-1062, 13.1-1252, 46.2-1571, 50-73.67, 58.1-2701, 58.1-2701#v2 +2
- positive [0] 55.1-1203: passed
- positive [1] 55.1-1200: passed
- positive [3] 55.1-1206: recorded as failed
**VA-G-0216** [nonrefundable-deposit-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0215 (term 3 did not match "administrative or other fees" in § 55.1-1206, so its positive failed; pattern widened)
- `\bnon-?refundable\b` / all (35536 units) / 101 hits: 3.2-3925, 3.2-4114.2, 3.2-4115, 3.2-4122, 3.2-4765, 3.2-5509, 3.2-6038, 4.1-1700, 6.2-1508.1, 6.2-1607, 6.2-1807, 6.2-1931 +89
- `\bnon-?refundable\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|rental agreements?|dwelling units?)\b|\b(?:tenants?|lessees?|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\bnon-?refundable\b` / code (34494 units) / 3 hits: 55.1-1200, 55.1-1203, 55.1-1203#v2
- `\A(?=[\s\S]*\bnon-?refundable\b)(?=[\s\S]*\b(?:tenants?|landlords?)\b)` / code (34494 units) / 3 hits: 55.1-1200, 55.1-1203, 55.1-1203#v2
- `\b(?:move-?in|pet|cleaning|redecorating|turnover|amenity|administrative|admin)(?: or other)? fees?\b` / code:55\.1- (897 units) / 2 hits: 55.1-1206, 55.1-1226
- `\bnot refundable\b|\bshall not be refunded\b|\bnon-?returnable\b` / all (35536 units) / 14 hits: 4.1-230, 4.1-243, 4.1-1000, 13.1-615, 13.1-815, 13.1-815#v2, 13.1-1062, 13.1-1252, 46.2-1571, 50-73.67, 58.1-2701, 58.1-2701#v2 +2
- positive [0] 55.1-1203: passed
- positive [1] 55.1-1200: passed
- positive [3] 55.1-1206: passed
**VA-G-0217** [nonrefundable-deposit-separate-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bseparate (?:written )?(?:notices?|documents?|statements?|addend(?:um|a)|disclosures?|writings?)\b` / code:55\.1-1[2-6] (169 units) / 5 hits: 55.1-1204.1, 55.1-1226, 55.1-1254, 55.1-1302, 55.1-1410
- `\bseparate (?:written )?(?:notices?|documents?|statements?|disclosures?)\b[\s\S]{0,1200}\b(?:fees?|deposits?|non-?refundable)\b|\b(?:fees?|deposits?|non-?refundable)\b[\s\S]{0,1200}\bseparate (?:written )?(?:notices?|documents?|statements?|disclosures?)\b` / code (34494 units) / 9 hits: 3.2-6515, 6.2-888, 38.2-1845.13, 38.2-3113.3, 46.2-1530, 54.1-1117.1, 55.1-1226, 59.1-298, 59.1-475.1
- `\A(?=[\s\S]*\bnon-?refundable\b)(?=[\s\S]*\b(?:notices?|disclos(?:e|ed|ure|ures))\b)(?=[\s\S]*\b(?:tenants?|landlords?)\b)` / code (34494 units) / 1 hits: 55.1-1200
- positive [0] 55.1-1226: passed
- positive [1] 55.1-1226: passed
**VA-G-0218** [holding-deposit]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bholding (?:deposits?|fees?)\b|\breservation (?:deposits?|fees?)\b|\bdeposits? to hold\b|\bhold(?:ing)? the (?:dwelling )?unit\b` / all (35536 units) / 4 hits: 4.1-133, 38.2-4904.1, 38.2-4922, 55.1-1962.1 / heading-only: 38.2-1057, 46.2-455
- `\bearnest money\b[\s\S]{0,1200}\b(?:tenants?|lease|leases|leased|rental|rent)\b|\b(?:tenants?|lease|leases|leased|rental|rent)\b[\s\S]{0,1200}\bearnest money\b` / code (34494 units) / 3 hits: 16.1-77, 54.1-2108.1, 55.1-2303
- `\bapplication deposits?\b` / all (35536 units) / 8 hits: 36-139#v2, 54.1-2108.1, 55.1-1200, 55.1-1203, 55.1-1203#v2, 55.1-1209#v2, 18VAC135-20-10, 18VAC135-20-181
- `\bdouble (?:the )?(?:deposit|amount)\b|\breturn(?:ed)? (?:it )?doubled\b` / code (34494 units) / 19 hits: 3.2-1819, 6.2-945, 8.01-66, 8.01-66.1, 8.01-178.2, 8.01-553, 9.1-704, 25.1-243, 38.2-1049, 38.2-1058, 43-70, 44-109 +7
- positive [2] 55.1-1203: passed
- positive [1] 18VAC135-20-181: recorded as failed
**VA-G-0219** [holding-deposit]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0218 (positive on term 1 named an admin unit outside the term's code scope; replaced by § 54.1-2108.1)
- `\bholding (?:deposits?|fees?)\b|\breservation (?:deposits?|fees?)\b|\bdeposits? to hold\b|\bhold(?:ing)? the (?:dwelling )?unit\b` / all (35536 units) / 4 hits: 4.1-133, 38.2-4904.1, 38.2-4922, 55.1-1962.1 / heading-only: 38.2-1057, 46.2-455
- `\bearnest money\b[\s\S]{0,1200}\b(?:tenants?|lease|leases|leased|rental|rent)\b|\b(?:tenants?|lease|leases|leased|rental|rent)\b[\s\S]{0,1200}\bearnest money\b` / code (34494 units) / 3 hits: 16.1-77, 54.1-2108.1, 55.1-2303
- `\bapplication deposits?\b` / all (35536 units) / 8 hits: 36-139#v2, 54.1-2108.1, 55.1-1200, 55.1-1203, 55.1-1203#v2, 55.1-1209#v2, 18VAC135-20-10, 18VAC135-20-181
- `\bdouble (?:the )?(?:deposit|amount)\b|\breturn(?:ed)? (?:it )?doubled\b` / code (34494 units) / 19 hits: 3.2-1819, 6.2-945, 8.01-66, 8.01-66.1, 8.01-178.2, 8.01-553, 9.1-704, 25.1-243, 38.2-1049, 38.2-1058, 43-70, 44-109 +7
- positive [2] 55.1-1203: passed
- positive [1] 54.1-2108.1: passed
**VA-G-0220** [required-fees]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bcommon (?:areas?|elements?)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\btenants?\b|\btenants?\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\bcommon (?:areas?|elements?)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\b(?:mark-?ups?|surcharges?)\b[\s\S]{0,1200}\btenants?\b|\btenants?\b[\s\S]{0,1200}\b(?:mark-?ups?|surcharges?)\b` / code (34494 units) / 1 hits: 36-55.38
- `\btotal monthly (?:payment|rent|cost)\b|\ball-in (?:rent|price)\b` / all (35536 units) / 2 hits: 6.2-1816.1, 6.2-2215.1
- `\bactual (?:out-of-pocket )?(?:costs?|expenses?)\b` / code:55\.1-12 (91 units) / 11 hits: 55.1-1203, 55.1-1203#v2, 55.1-1204, 55.1-1204#v2, 55.1-1206, 55.1-1209, 55.1-1209#v2, 55.1-1212, 55.1-1212#v2, 55.1-1230, 55.1-1244.1
- positive [3] 55.1-1204: passed
- positive [0] 55.1-1212: recorded as failed
**VA-G-0221** [required-fees]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0220 (positive on term 0 named § 55.1-1212, which has no common-area fee wording; term 0 has no real positive in scope, so the battery relies on the passing positive on term 3 and adds a plain common-area term)
- `\bcommon (?:areas?|elements?)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\btenants?\b|\btenants?\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\bcommon (?:areas?|elements?)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\b(?:mark-?ups?|surcharges?)\b[\s\S]{0,1200}\btenants?\b|\btenants?\b[\s\S]{0,1200}\b(?:mark-?ups?|surcharges?)\b` / code (34494 units) / 1 hits: 36-55.38
- `\btotal monthly (?:payment|rent|cost)\b|\ball-in (?:rent|price)\b` / all (35536 units) / 2 hits: 6.2-1816.1, 6.2-2215.1
- `\bactual (?:out-of-pocket )?(?:costs?|expenses?)\b` / code:55\.1-12 (91 units) / 11 hits: 55.1-1203, 55.1-1203#v2, 55.1-1204, 55.1-1204#v2, 55.1-1206, 55.1-1209, 55.1-1209#v2, 55.1-1212, 55.1-1212#v2, 55.1-1230, 55.1-1244.1
- `\bcommon area maintenance\b|\bcommon area (?:fees?|charges?)\b` / all (35536 units) / 0 hits
- positive [3] 55.1-1204: passed
**VA-G-0222** [fee-unprovided-service]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:services?|goods) (?:that (?:are|were|is|was) )?not (?:actually )?(?:provided|rendered|furnished|performed|supplied|delivered)\b` / all (35536 units) / 5 hits: 18.2-471, 46.2-118, 54.1-2998, 58.1-3401, 58.1-3403
- `\b(?:fees?|charges?)\b[\s\S]{0,200}\bnot (?:actually )?(?:provided|rendered|furnished|performed|supplied)\b` / code (34494 units) / 6 hits: 18.2-471, 21-423, 22.1-388, 22.1-388#v2, 38.2-6106, 46.2-118
- `\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:services?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\bnot (?:provided|rendered|furnished|performed|supplied)\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\bnot (?:provided|rendered|furnished|performed|supplied)\b)(?=[\s\S]*\b(?:fees?|charges?)\b)(?=[\s\S]*\btenants?\b)` / code (34494 units) / 0 hits
- positive [3] 55.1-1226: recorded as failed
**VA-G-0223** [fee-unprovided-service]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0222 (positive on the AND term named § 55.1-1226, which does not carry "not provided"; replaced by real positives; negation widened)
- `\b(?:services?|goods) (?:that (?:are|were|is|was) )?not (?:actually )?(?:provided|rendered|furnished|performed|supplied|delivered)\b` / all (35536 units) / 5 hits: 18.2-471, 46.2-118, 54.1-2998, 58.1-3401, 58.1-3403
- `\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:services?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\b(?:not|never) (?:been )?(?:provided|rendered|furnished|performed|supplied)\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\b(?:not|never) (?:been )?(?:provided|rendered|furnished|performed|supplied)\b)(?=[\s\S]*\b(?:fees?|charges?)\b)(?=[\s\S]*\btenants?\b)` / code (34494 units) / 0 hits
- `\bservices? not (?:rendered|performed)\b` / all (35536 units) / 2 hits: 18.2-471, 46.2-118
- positive [0] 46.2-118: passed
- positive [3] 18.2-471: passed
**VA-G-0224** [late-fee-limit]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\blate (?:charges?|fees?|payment charges?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|rent|rental)\b|\b(?:tenants?|lessees?|rent|rental)\b[\s\S]{0,1200}\blate (?:charges?|fees?|payment charges?)\b` / code (34494 units) / 20 hits: 6.2-311, 8.01-126, 8.01-126#v2, 16.1-107, 55.1-1202#v2, 55.1-1204, 55.1-1204#v2, 55.1-1212, 55.1-1212#v2, 55.1-1237, 55.1-1244#v2, 55.1-1245 +8
- `\A(?=[\s\S]*\blate (?:charges?|fees?)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / code (34494 units) / 20 hits: 6.2-311, 8.01-126, 8.01-126#v2, 16.1-107, 21-118.4, 54.1-1117.1, 55.1-1202#v2, 55.1-1204, 55.1-1204#v2, 55.1-1212, 55.1-1212#v2, 55.1-1237 +8
- `\bcharges? for late payment\b` / all (35536 units) / 5 hits: 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-2133, 2024 Acts ch. 831
- positive [0] 55.1-1204: passed
- positive [2] 55.1-1226: passed
**VA-G-0225** [rent-receipts]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\breceipts?\b[\s\S]{0,1200}\b(?:debtors?|obligors?|payors?|creditors?|obligees?|payees?)\b|\b(?:debtors?|obligors?|payors?|creditors?|obligees?|payees?)\b[\s\S]{0,1200}\breceipts?\b` / code:(?:11|8\.01|8\.1A|8\.2|8\.2A|8\.3A|6\.2)- (2407 units) / 28 hits: 6.2-414, 6.2-418, 6.2-502, 6.2-503, 6.2-705, 6.2-931, 6.2-1140, 6.2-1159, 6.2-1524, 6.2-1923, 6.2-1947, 6.2-2014 +16
- `\b(?:give|gives|deliver|delivers|provide|provides|furnish|furnishes|issue|issues|execute|executes)\b (?:to [a-z ]{1,40})?(?:a |an )?(?:written )?receipts?\b` / code:(?:11|8\.01|8\.1A|8\.2|8\.2A|8\.3A|6\.2)- (2407 units) / 7 hits: 6.2-1923, 6.2-2304, 8.01-294, 8.01-312, 8.01-329, 8.01-520, 8.01-601
- `\b(?:give|gives|deliver|delivers|provide|provides|furnish|furnishes|issue|issues)\b (?:the tenant with )?(?:a |an )?(?:written )?receipts?\b` / code (34494 units) / 17 hits: 6.2-1923, 8.01-294, 8.01-312, 8.01-329, 8.01-520, 8.01-601, 9.1-185.10, 12.1-17, 15.2-540, 28.2-201.1, 38.2-1056, 46.2-1231 +5
- `\breceipts?\b[\s\S]{0,1200}\b(?:rent|rents|rental)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b|\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\b(?:rent|rents|rental)\b[\s\S]{0,1200}\breceipts?\b` / code (34494 units) / 41 hits: 6.2-2304, 6.2-2310, 8.01-226.7, 8.2A-406, 8.2A-508, 8.2A-522, 8.2A-526, 18.2-340.16, 21-184, 21-264, 33.2-503, 46.2-819.1 +29
- `\A(?=[\s\S]*\b(?:written )?receipts?\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\brent\b)` / code (34494 units) / 23 hits: 4.1-206.3, 8.01-226.7, 54.1-2108.1, 55.1-1202#v2, 55.1-1204, 55.1-1204#v2, 55.1-1205, 55.1-1217, 55.1-1226, 55.1-1241, 55.1-1244, 55.1-1244#v2 +11
- `\bpresum(?:e|ed|es|ption)\b[\s\S]{0,1200}\b(?:prior|previous|earlier) (?:installments?|payments?)\b|\b(?:prior|previous|earlier) (?:installments?|payments?)\b[\s\S]{0,1200}\bpresum(?:e|ed|es|ption)\b` / all (35536 units) / 0 hits
- positive [2] 55.1-1204: passed
- positive [3] 55.1-1204: passed
- positive [2] 12.1-17: passed
**VA-G-0226** [rent-receipts]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0225 (INFLECTION line on the section-wide AND (rents/rented/renting); rerun of that term inflected, plus a cash/money-order receipt term; the other VA-G-0225 terms stand as logged)
- `\A(?=[\s\S]*\b(?:written )?receipts?\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\brent(?:s|ed|ing)?\b)` / code (34494 units) / 28 hits: 4.1-206.3, 8.01-226.7, 15.2-1133, 21-118.4, 21-184, 21-264, 23.1-2607, 54.1-2108.1, 55.1-1202#v2, 55.1-1204, 55.1-1204#v2, 55.1-1205 +16
- `\breceipts?\b[\s\S]{0,1200}\b(?:cash|money orders?)\b|\b(?:cash|money orders?)\b[\s\S]{0,1200}\breceipts?\b` / code:55\.1-1[2-4] (153 units) / 6 hits: 55.1-1204, 55.1-1204#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250
- positive [0] 55.1-1204: passed
- positive [1] 55.1-1204: passed
**VA-G-0227** [rent-receipt-anti-waiver]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\breceipt of (?:the )?rents?\b|\brents? free of\b` / all (35536 units) / 1 hits: 55.1-1309
- `\b(?:trust deed|deed of trust|security instrument|assignment of rents?|conveyance)\b[\s\S]{0,1200}\b(?:habitab\w*|fit and habitable|fit premises|maintain fit)\b|\b(?:habitab\w*|fit and habitable|fit premises|maintain fit)\b[\s\S]{0,1200}\b(?:trust deed|deed of trust|security instrument|assignment of rents?|conveyance)\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\b(?:assignment of rents?|rents? and profits)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / code (34494 units) / 1 hits: 8.01-81
- `\bmortgagee in possession\b` / all (35536 units) / 3 hits: 15.2-983, 55.1-1200, 55.1-1300
- positive [3] 55.1-1200: passed
- positive [1] 55.1-1220: recorded as failed
**VA-G-0228** [rent-receipt-anti-waiver]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0227 (positive on term 1 named § 55.1-1220, which carries no conveyance word; replaced by real positives; AND term widened)
- `\breceipt of (?:the )?rents?\b|\brents? free of\b` / all (35536 units) / 1 hits: 55.1-1309
- `\b(?:trust deed|deed of trust|security instrument|assignment of rents?|conveyance)\b[\s\S]{0,1200}\b(?:habitab\w*|fit and habitable|fit premises|maintain fit)\b|\b(?:habitab\w*|fit and habitable|fit premises|maintain fit)\b[\s\S]{0,1200}\b(?:trust deed|deed of trust|security instrument|assignment of rents?|conveyance)\b` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*\b(?:assignment of rents?|rents? and profits|assign(?:s|ed|ment)? (?:the )?rents?)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:repairs?|habitab\w*|fit)\b)` / code (34494 units) / 0 hits
- `\bmortgagee in possession\b` / all (35536 units) / 3 hits: 15.2-983, 55.1-1200, 55.1-1300
- `\brents? and profits\b` / code (34494 units) / 15 hits: 6.2-1002, 8.01-78, 8.01-81, 8.01-170, 8.01-462, 34-18, 36-33, 55.1-360, 55.1-2412, 55.1-2413, 55.1-2427, 64.2-451 +3
- positive [3] 55.1-1200: passed
- positive [0] 55.1-1309: passed
- positive [4] 8.01-81: passed
**VA-G-0229** [unpaid-damages-interest]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\binterest\b(?! in (?:the |more than |four |any )?(?:premises|rental|units?|dwelling|four))[\s\S]{0,1200}\b(?:unpaid|overdue|delinquent|past[- ]due)\b[\s\S]{0,1200}\b(?:rent|rents|damages)\b|\b(?:rent|rents|damages)\b[\s\S]{0,1200}\b(?:unpaid|overdue|delinquent|past[- ]due)\b[\s\S]{0,1200}\binterest\b(?! in (?:the |more than |four |any )?(?:premises|rental|units?|dwelling|four))` / code:55\.1-1[2-6] (169 units) / 1 hits: 55.1-1237
- `\A(?=[\s\S]*\b(?:legal rate|judgment rate|rate of interest|interest rate|per annum|percent per year|annual rate)\b)(?=[\s\S]*\b(?:tenants?|lessees?|landlords?)\b)` / code (34494 units) / 10 hits: 2.2-4519, 6.2-2311, 8.2A-103, 15.2-2605, 36-176, 46.2-703, 55.1-2146, 59.1-284.31, 64.2-105, 64.2-305
- `\blegal (?:rate of )?interest\b|\bjudgment rate\b` / code (34494 units) / 48 hits: 2.2-4805, 4.1-103, 4.1-604, 5.1-2.25, 6.2-108, 6.2-301, 6.2-302, 8.01-27.1, 8.01-382, 8.01-424.1, 8.3A-112, 8.7-209 +36 / heading-only: 6.2-303
- `\bprejudgment interest\b|\bpre-judgment interest\b` / all (35536 units) / 2 hits: 6.2-302, 40.1-29
- positive [2] 6.2-301: passed
- positive [2] 8.01-27.1: passed
- positive [3] 6.2-302: passed
**VA-G-0230** [utility-deposit-return]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\butility deposits?\b|\bdeposits? (?:held )?(?:by|with) (?:a |the )?utilit(?:y|ies)\b` / all (35536 units) / 0 hits / heading-only: 55.1-2510
- `\bdeposits?\b[\s\S]{0,1200}\b(?:utility|utilities|water|sewer|electric(?:ity)?|gas)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b|\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\b(?:utility|utilities|water|sewer|electric(?:ity)?|gas)\b[\s\S]{0,1200}\bdeposits?\b` / code (34494 units) / 7 hits: 15.2-2119.4, 15.2-5138, 55.1-1200, 55.1-1209#v2, 55.1-1226, 55.1-1234.1, 64.2-778
- `\A(?=[\s\S]*\bdeposits?\b)(?=[\s\S]*\b(?:utility|utilities)\b)(?=[\s\S]*\btenants?\b)` / code (34494 units) / 8 hits: 36-55.26, 55.1-1200, 55.1-1209#v2, 55.1-1226, 55.1-1244, 55.1-1244#v2, 55.1-2217, 59.1-444.2
- positive [0] 55.1-2510: recorded as failed
- positive [1] 15.2-2119.4: passed
- positive [2] 55.1-1226: passed
**VA-G-0231** [utility-deposit-return]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0230 (term 0 did not match the body of § 55.1-2510 ("made by a subscriber with a utility"), so its positive failed; pattern widened)
- `\butility deposits?\b|\bdeposits?\b[\s\S]{0,1200}\bwith a utility\b|\bdeposits? held by utilities\b` / all (35536 units) / 1 hits: 55.1-2510
- `\bdeposits?\b[\s\S]{0,1200}\b(?:utility|utilities|water|sewer|electric(?:ity)?|gas)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b|\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\b(?:utility|utilities|water|sewer|electric(?:ity)?|gas)\b[\s\S]{0,1200}\bdeposits?\b` / code (34494 units) / 7 hits: 15.2-2119.4, 15.2-5138, 55.1-1200, 55.1-1209#v2, 55.1-1226, 55.1-1234.1, 64.2-778
- `\A(?=[\s\S]*\bdeposits?\b)(?=[\s\S]*\b(?:utility|utilities)\b)(?=[\s\S]*\btenants?\b)` / code (34494 units) / 8 hits: 36-55.26, 55.1-1200, 55.1-1209#v2, 55.1-1226, 55.1-1244, 55.1-1244#v2, 55.1-2217, 59.1-444.2
- positive [0] 55.1-2510: passed
- positive [1] 15.2-2119.4: passed
- positive [2] 55.1-1226: passed
**VA-G-0232** [lockout-for-rent-delinquency]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\block(?:s|ed|ing)? out\b|\blockouts?\b|\bchang(?:e|es|ed|ing) (?:the |of )?locks?\b` / all (35536 units) / 8 hits: 33.2-3100, 38.2-111, 40.1-66, 40.1-73, 45.2-815, 45.2-927, 60.2-612, 60.2-618
- `\bself-help\b` / all (35536 units) / 11 hits: 8.2A-501, 51.5-161, 54.1-3501, 55.1-1201, 55.1-1400, 55.1-1415, 59.1-501.15, 59.1-506.5, 59.1-508.16, 63.2-1612, 63.2-1615
- `\b(?:exclud(?:e|ed|es|ing)|exclusion|remov(?:e|ed|es|ing)|refus(?:e|ed|es|al) to permit)\b[\s\S]{0,1200}\b(?:tenants?|occupants?|lessees?|guests?)\b[\s\S]{0,1200}\b(?:rent|nonpayment|payment)\b` / code:55\.1-1[2-6] (169 units) / 8 hits: 55.1-1200, 55.1-1230, 55.1-1241, 55.1-1243.1, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1316
- `\A(?=[\s\S]*\b(?:locks?|lockouts?)\b)(?=[\s\S]*\b(?:rent|nonpayment)\b)(?=[\s\S]*\b(?:tenants?|lessees?|occupants?|guests?)\b)` / code (34494 units) / 1 hits: 55.1-1230
- positive [1] 55.1-1201: passed
- positive [2] 55.1-1243.1: passed
- positive [0] 55.1-1236: recorded as failed
**VA-G-0233** [lockout-for-rent-delinquency]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0232 (positive on term 0 named § 55.1-1236, which carries no lock-out word; replaced by a real positive)
- `\block(?:s|ed|ing)? out\b|\blockouts?\b|\bchang(?:e|es|ed|ing) (?:the |of )?locks?\b` / all (35536 units) / 8 hits: 33.2-3100, 38.2-111, 40.1-66, 40.1-73, 45.2-815, 45.2-927, 60.2-612, 60.2-618
- `\bself-help\b` / all (35536 units) / 11 hits: 8.2A-501, 51.5-161, 54.1-3501, 55.1-1201, 55.1-1400, 55.1-1415, 59.1-501.15, 59.1-506.5, 59.1-508.16, 63.2-1612, 63.2-1615
- `\b(?:exclud(?:e|ed|es|ing)|exclusion|remov(?:e|ed|es|ing)|refus(?:e|ed|es|al) to permit)\b[\s\S]{0,1200}\b(?:tenants?|occupants?|lessees?|guests?)\b[\s\S]{0,1200}\b(?:rent|nonpayment|payment)\b` / code:55\.1-1[2-6] (169 units) / 8 hits: 55.1-1200, 55.1-1230, 55.1-1241, 55.1-1243.1, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1316
- `\A(?=[\s\S]*\b(?:locks?|lockouts?)\b)(?=[\s\S]*\b(?:rent|nonpayment)\b)(?=[\s\S]*\b(?:tenants?|lessees?|occupants?|guests?)\b)` / code (34494 units) / 1 hits: 55.1-1230
- positive [1] 55.1-1201: passed
- positive [2] 55.1-1243.1: passed
- positive [0] 40.1-66: passed
**VA-G-0234** [subsidy-late-fee]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\blate (?:charges?|fees?)\b[\s\S]{0,1200}\b(?:subsid\w*|housing assistance|vouchers?|Housing Choice|Section 8|rental assistance|public housing|housing authority)\b|\b(?:subsid\w*|housing assistance|vouchers?|Housing Choice|Section 8|rental assistance|public housing|housing authority)\b[\s\S]{0,1200}\blate (?:charges?|fees?)\b` / all (35536 units) / 5 hits: 55.1-1202#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250
- `\A(?=[\s\S]*\blate (?:charges?|fees?)\b)(?=[\s\S]*\b(?:subsid\w*|housing assistance|vouchers?|rental assistance|public housing)\b)` / code (34494 units) / 5 hits: 55.1-1202#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250
- `\b(?:Department of Housing and Urban Development|HUD)\b` / code:55\.1-12 (91 units) / 6 hits: 55.1-1200, 55.1-1201, 55.1-1203, 55.1-1203#v2, 55.1-1250, 55.1-1253
- `\bhousing assistance payments?\b|\bportion of the rent\b` / all (35536 units) / 6 hits: 8.01-99, 8.2A-522, 15.2-957, 18.2-340.16, 55.1-1250, 58.1-439.12:04
- positive [2] 55.1-1201: passed
- positive [3] 24 C.F.R. § 982.310: recorded as failed
- positive [1] 55.1-1245: passed
**VA-G-0235** [subsidy-late-fee]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0234 (positive on term 3 named a saved federal section outside the term scope; scope widened to all,fed for terms 0 and 3)
- `\blate (?:charges?|fees?)\b[\s\S]{0,1200}\b(?:subsid\w*|housing assistance|vouchers?|Housing Choice|Section 8|rental assistance|public housing|housing authority)\b|\b(?:subsid\w*|housing assistance|vouchers?|Housing Choice|Section 8|rental assistance|public housing|housing authority)\b[\s\S]{0,1200}\blate (?:charges?|fees?)\b` / all,fed (35571 units) / 5 hits: 55.1-1202#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250
- `\A(?=[\s\S]*\blate (?:charges?|fees?)\b)(?=[\s\S]*\b(?:subsid\w*|housing assistance|vouchers?|rental assistance|public housing)\b)` / code (34494 units) / 5 hits: 55.1-1202#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250
- `\b(?:Department of Housing and Urban Development|HUD)\b` / code:55\.1-12 (91 units) / 6 hits: 55.1-1200, 55.1-1201, 55.1-1203, 55.1-1203#v2, 55.1-1250, 55.1-1253
- `\bhousing assistance payments?\b|\bportion of the rent\b` / all,fed (35571 units) / 7 hits: 8.01-99, 8.2A-522, 15.2-957, 18.2-340.16, 55.1-1250, 58.1-439.12:04, 24 C.F.R. § 982.310
- positive [2] 55.1-1201: passed
- positive [3] 24 C.F.R. § 982.310: passed
- positive [1] 55.1-1245: passed
**VA-G-0236** [rent-concession]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:rent|rental) (?:concessions?|discounts?|credits?|abatements?|rebates?)\b|\bfree rent\b|\brent-free\b` / all (35536 units) / 2 hits: 55.1-1302, 58.1-3295.1
- `\b(?:concessions?|discounts?|rebates?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|residents?)\b|\b(?:tenants?|lessees?|residents?)\b[\s\S]{0,1200}\b(?:concessions?|discounts?|rebates?)\b` / code:55\.1-1[2-6] (169 units) / 1 hits: 55.1-1302
- `\A(?=[\s\S]*\b(?:concessions?|discounts?)\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\brent(?:s|al)?\b)` / code (34494 units) / 2 hits: 4.1-206.3, 55.1-1302
- positive [1] 55.1-1302: passed
- positive [2] 55.1-1302: passed
**VA-G-0237** [rent-installments]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\binstall?ments?\b[\s\S]{0,1200}\brent(?:s|al)?\b|\brent(?:s|al)?\b[\s\S]{0,1200}\binstall?ments?\b` / code:55\.1-1[2-6] (169 units) / 4 hits: 55.1-1204, 55.1-1204#v2, 55.1-1245#v2, 55.1-1245#v3
- `\bpartial (?:payments?|rent)\b|\bpartial payment of rent\b` / code:55\.1-1[2-6] (169 units) / 1 hits: 55.1-1250
- `\bsemi-?monthly\b|\bbi-?weekly\b|\btwice (?:a|per|each) month\b` / code:55\.1-1[2-6] (169 units) / 0 hits
- positive [0] 55.1-1204: passed
- positive [1] 55.1-1250: passed
**VA-G-0238** [rent-receipt-anti-waiver]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0228 (heading screen found § 55.1-1403 (perfection of interest in leases, rents, or profits), which the "rents and profits" term missed; pattern widened and a rent-assignment AND added)
- `\brents?,? (?:and|or) profits\b|\bleases, rents\b` / code (34494 units) / 20 hits: 6.2-1002, 8.01-78, 8.01-81, 8.01-170, 8.01-462, 23.1-816, 28.2-1206, 34-18, 36-33, 38.2-133, 55.1-360, 55.1-1101 +8
- `\A(?=[\s\S]*\b(?:assign(?:s|ed|ing|ment|or|ee)?|pledg(?:e|ed|or|ee))\b)(?=[\s\S]*\brents?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:repairs?|habitab\w*|fit and habitable)\b)` / code (34494 units) / 11 hits: 2.2-2340, 10.1-1603, 15.2-4905, 15.2-6308, 36-55.34:1, 36-97, 46.2-1569, 55.1-1226, 55.1-1982, 55.1-2100, 64.2-105
- positive [0] 55.1-1403: passed
- positive [0] 8.01-81: passed
**VA-G-0301** [dv-lockchange]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\blocks?\b|\bre-?key(?:s|ed|ing)?\b|\bsecurity devices?\b|\bdead-?bolts?\b|\bkeys?\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection)` / all (35536 units) / 0 hits
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection)[\s\S]{0,1200}(?:\blocks?\b|\bre-?key(?:s|ed|ing)?\b|\bsecurity devices?\b|\bdead-?bolts?\b|\bkeys?\b)` / all (35536 units) / 1 hits: 55.1-1230
- `\A(?=[\s\S]*(?:\blocks?\b|\bre-?key(?:s|ed|ing)?\b|\bsecurity devices?\b|\bdead-?bolts?\b|\bkeys?\b))(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection))` / all (35536 units) / 2 hits: 16.1-228, 55.1-1230
- `\bchang(?:e|es|ed|ing)\b[\s\S]{0,40}\blocks?\b|\blocks?\b[\s\S]{0,40}\bchang(?:e|es|ed|ing)\b|\bnew locks?\b|\block[- ]?change` / all (35536 units) / 4 hits: 10.1-107, 10.1-402, 55.1-1230, 13VAC5-63-245
- positive [1] 55.1-1230: passed
- positive [2] 55.1-1230: passed
- positive [3] 55.1-1230: passed
**VA-G-0302** [dv-lockchange]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\blocks?\b|\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b|\bdead-?bolts?\b|\bkeys?\b|\bkey codes?\b)[\s\S]{0,1200}(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b|\bviolence\b|\babused\b|\babusing\b)` / code:55\.1- (897 units) / 0 hits
- `(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b|\bviolence\b|\babused\b|\babusing\b)[\s\S]{0,1200}(?:\blocks?\b|\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b|\bdead-?bolts?\b|\bkeys?\b|\bkey codes?\b)` / code:55\.1- (897 units) / 0 hits
- `\A(?=[\s\S]*(?:\blocks?\b|\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b|\bdead-?bolts?\b|\bkeys?\b|\bkey codes?\b))(?=[\s\S]*(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b|\bviolence\b|\babused\b|\babusing\b))` / code (34494 units) / 1 hits: 16.1-228
- `\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b` / all (35536 units) / 6 hits: 9.1-138, 9.1-139, 9.1-140, 9.1-140.1, 9.1-141, 9.1-143
- positive [2] 53.1-68: recorded as failed
**VA-G-0303** [dv-lockchange]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0302 (positive in 53.1-68 failed (no victim word there); real positives substituted)
- `(?:\blocks?\b|\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b|\bdead-?bolts?\b|\bkeys?\b|\bkey codes?\b)[\s\S]{0,1200}(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b|\bviolence\b|\babused\b|\babusing\b)` / code:55\.1- (897 units) / 0 hits
- `(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b|\bviolence\b|\babused\b|\babusing\b)[\s\S]{0,1200}(?:\blocks?\b|\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b|\bdead-?bolts?\b|\bkeys?\b|\bkey codes?\b)` / code:55\.1- (897 units) / 0 hits
- `\A(?=[\s\S]*(?:\blocks?\b|\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b|\bdead-?bolts?\b|\bkeys?\b|\bkey codes?\b))(?=[\s\S]*(?:\bvictims?\b|\babusers?\b|\bperpetrators?\b|\bviolence\b|\babused\b|\babusing\b))` / code (34494 units) / 1 hits: 16.1-228
- `\blocksmiths?\b|\bre-?key(?:s|ed|ing)?\b` / all (35536 units) / 6 hits: 9.1-138, 9.1-139, 9.1-140, 9.1-140.1, 9.1-141, 9.1-143
- positive [2] 16.1-228: passed
- positive [3] 9.1-138: passed
**VA-G-0304** [dv-confidentiality]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bconfidential(?:ity|ly)?\b|\bdisclos(?:e|es|ed|ing|ure|ures)\b|\brelease\b|\breleased\b|\breleasing\b|\breveal(?:s|ed|ing)?\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b)` / code:55\.1- (897 units) / 0 hits
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b)[\s\S]{0,1200}(?:\bconfidential(?:ity|ly)?\b|\bdisclos(?:e|es|ed|ing|ure|ures)\b|\brelease\b|\breleased\b|\breleasing\b|\breveal(?:s|ed|ing)?\b)` / code:55\.1- (897 units) / 0 hits
- `\A(?=[\s\S]*(?:\blandlords?\b|\blessors?\b|\bowners? of (?:a |the |any )?(?:residential |rental )?(?:dwelling|property|premises)|\bmanaging agents?\b))(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b))(?=[\s\S]*(?:\bconfidential(?:ity|ly)?\b|\bdisclos(?:e|es|ed|ing|ure|ures)\b|\brelease\b|\breleased\b|\breleasing\b|\breveal(?:s|ed|ing)?\b))` / code (34494 units) / 3 hits: 18.2-60.5, 36-96.2, 36-96.2#v2
- `(?:\bconfidential(?:ity|ly)?\b|\bdisclos(?:e|es|ed|ing|ure|ures)\b|\brelease\b|\breleased\b|\breleasing\b|\breveal(?:s|ed|ing)?\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b)` / all (35536 units) / 100 hits: 2.2-446, 2.2-515.1, 2.2-515.2, 2.2-3705.2, 2.2-3705.4, 2.2-3705.7, 2.2-3706, 2.2-3706.1, 2.2-3711, 2.2-3711#v2, 2.2-3711#v3, 2.2-3711#v4 +88
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b)[\s\S]{0,1200}(?:\bconfidential(?:ity|ly)?\b|\bdisclos(?:e|es|ed|ing|ure|ures)\b|\brelease\b|\breleased\b|\breleasing\b|\breveal(?:s|ed|ing)?\b)` / all (35536 units) / 113 hits: 2.2-446, 2.2-515.1, 2.2-515.2, 2.2-3705.2, 2.2-3705.4, 2.2-3705.7, 2.2-3706, 2.2-3706.1, 2.2-3711, 2.2-3711#v2, 2.2-3711#v3, 2.2-3711#v4 +101
- `\A(?=[\s\S]*(?:\bconfidential(?:ity|ly)?\b|\bdisclos(?:e|es|ed|ing|ure|ures)\b|\brelease\b|\breleased\b|\breleasing\b|\breveal(?:s|ed|ing)?\b))(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b))` / all (35536 units) / 167 hits: 2.2-446, 2.2-515.1, 2.2-515.2, 2.2-3705.2, 2.2-3705.4, 2.2-3705.7, 2.2-3706, 2.2-3706.1, 2.2-3711, 2.2-3711#v2, 2.2-3711#v3, 2.2-3711#v4 +155
- positive [5] 2.2-515.2: passed
- positive [2] 36-96.2: passed
- positive [4] 16.1-253.1: passed
**VA-G-0305** [dv-confidentiality]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bprivacy\b|\bprivate(?:ly)?\b|\bsecret(?:s|ly)?\b|\bshar(?:e|es|ed|ing)\b|\bkeep (?:it |such |the )?(?:information )?(?:private|secret)\b)[\s\S]{0,1200}(?:\bvictims?\b|\babusers?\b|\babused\b|\babuse\b|\bviolence\b|\bstalk(?:ing|ed|er|ers)?\b)` / code:55\.1-,code:36-96,admin (1506 units) / 1 hits: 18VAC135-50-200
- `(?:\bvictims?\b|\babusers?\b|\babused\b|\babuse\b|\bviolence\b|\bstalk(?:ing|ed|er|ers)?\b)[\s\S]{0,1200}(?:\bprivacy\b|\bprivate(?:ly)?\b|\bsecret(?:s|ly)?\b|\bshar(?:e|es|ed|ing)\b|\bkeep (?:it |such |the )?(?:information )?(?:private|secret)\b)` / code:55\.1-,code:36-96,admin (1506 units) / 0 hits
- `\A(?=[\s\S]*(?:\bprivacy\b|\bprivate(?:ly)?\b|\bsecret(?:s|ly)?\b|\bshar(?:e|es|ed|ing)\b|\bkeep (?:it |such |the )?(?:information )?(?:private|secret)\b))(?=[\s\S]*(?:\bvictims?\b|\babusers?\b|\babused\b|\babuse\b|\bviolence\b|\bstalk(?:ing|ed|er|ers)?\b))` / code:55\.1-,code:36-96,admin (1506 units) / 3 hits: 36-96.2, 36-96.2#v2, 18VAC135-50-200
- positive [0] 18VAC135-50-200: passed
- positive [2] 36-96.2: passed
**VA-G-0306** [dv-eviction-protection]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bterminat(?:e|es|ed|ing|ion)\b|\bnonrenew(?:al|ed)?\b|\b(?:refuse|refuses|refused|refusal) to (?:rent|renew|lease)\b|\bden(?:y|ies|ied|ial)\b|\bpossession\b|\bunlawful detainer\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b)` / code:55\.1-,code:36-96,code:8\.01-12,admin (1518 units) / 5 hits: 55.1-1230, 55.1-1236, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b)[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bterminat(?:e|es|ed|ing|ion)\b|\bnonrenew(?:al|ed)?\b|\b(?:refuse|refuses|refused|refusal) to (?:rent|renew|lease)\b|\bden(?:y|ies|ied|ial)\b|\bpossession\b|\bunlawful detainer\b)` / code:55\.1-,code:36-96,code:8\.01-12,admin (1518 units) / 7 hits: 55.1-1230, 55.1-1236, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 36-96.2, 36-96.2#v2
- `\A(?=[\s\S]*(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bterminat(?:e|es|ed|ing|ion)\b|\bnonrenew(?:al|ed)?\b|\b(?:refuse|refuses|refused|refusal) to (?:rent|renew|lease)\b|\bden(?:y|ies|ied|ial)\b|\bpossession\b|\bunlawful detainer\b))(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b))` / code:55\.1-,code:36-96,code:8\.01-12,admin (1518 units) / 8 hits: 55.1-1203#v2, 55.1-1230, 55.1-1236, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 36-96.2, 36-96.2#v2
- `\A(?=[\s\S]*(?:\blandlords?\b|\blessors?\b|\btenants?\b|\blessees?\b|\brental agreements?\b))(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b))(?=[\s\S]*(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bterminat(?:e|es|ed|ing|ion)\b|\bnonrenew(?:al|ed)?\b|\b(?:refuse|refuses|refused|refusal) to (?:rent|renew|lease)\b|\bden(?:y|ies|ied|ial)\b|\bpossession\b|\bunlawful detainer\b))` / code (34494 units) / 9 hits: 2.2-3705.2, 36-96.2, 36-96.2#v2, 55.1-1203#v2, 55.1-1230, 55.1-1236, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainer\b|\bterminat(?:e|es|ed|ing|ion)\b (?:of )?(?:the |a |any |such )?(?:lease|tenancy|rental agreement|occupancy))[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b)|(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b)[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainer\b|\bterminat(?:e|es|ed|ing|ion)\b (?:of )?(?:the |a |any |such )?(?:lease|tenancy|rental agreement|occupancy))` / all (35536 units) / 10 hits: 16.1-106, 17.1-272, 18.2-59.1, 55.1-1230, 55.1-1236, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, R. 2:615, 2024 Acts ch. 302
- positive [1] 55.1-1245: passed
- positive [3] 55.1-1236: passed
**VA-G-0307** [dv-deposit-timing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bdeposits?\b|\bdeposited\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b|\bperpetrators?\b)` / code:55\.1-,code:36-96,admin (1506 units) / 0 hits
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b|\bperpetrators?\b)[\s\S]{0,1200}(?:\bdeposits?\b|\bdeposited\b)` / code:55\.1-,code:36-96,admin (1506 units) / 2 hits: 55.1-1203, 55.1-1203#v2
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b|\bperpetrators?\b))` / all (35536 units) / 0 hits
- `\bco-?tenants?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bco-?tenants?\b|\bremaining tenants?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bremaining tenants?\b` / all (35536 units) / 0 hits
- `\bsecurity deposits?\b` / code:55\.1-12 (91 units) / 19 hits: 55.1-1200, 55.1-1204, 55.1-1204#v2, 55.1-1204.1, 55.1-1206, 55.1-1208, 55.1-1209#v2, 55.1-1213, 55.1-1226, 55.1-1234, 55.1-1237, 55.1-1238 +7
- positive [4] 55.1-1226: passed
- positive [0] 55.1-1203: recorded as failed
**VA-G-0308** [dv-deposit-timing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0307 (positive set on the wrong word order (term 0); real positive on term 1)
- `(?:\bdeposits?\b|\bdeposited\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b|\bperpetrators?\b)` / code:55\.1-,code:36-96,admin (1506 units) / 0 hits
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b|\bperpetrators?\b)[\s\S]{0,1200}(?:\bdeposits?\b|\bdeposited\b)` / code:55\.1-,code:36-96,admin (1506 units) / 2 hits: 55.1-1203, 55.1-1203#v2
- `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b|\bperpetrators?\b))` / all (35536 units) / 0 hits
- `\bco-?tenants?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bco-?tenants?\b|\bremaining tenants?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bremaining tenants?\b` / all (35536 units) / 0 hits
- `\bsecurity deposits?\b` / code:55\.1-12 (91 units) / 19 hits: 55.1-1200, 55.1-1204, 55.1-1204#v2, 55.1-1204.1, 55.1-1206, 55.1-1208, 55.1-1209#v2, 55.1-1213, 55.1-1226, 55.1-1234, 55.1-1237, 55.1-1238 +7
- positive [4] 55.1-1226: passed
- positive [1] 55.1-1203: passed
**VA-G-0309** [dv-qualifying-documents]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bfalse(?:ly)?\b|\bfraud(?:ulent|ulently)?\b|\bfalsif(?:y|ies|ied|ying|ication)\b|\bmisrepresent(?:s|ed|ing|ation)?\b|\bforg(?:e|ed|ery)\b)[\s\S]{0,1200}(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b)` / code:55\.1-,code:36-96,admin (1506 units) / 0 hits
- `(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b)[\s\S]{0,1200}(?:\bfalse(?:ly)?\b|\bfraud(?:ulent|ulently)?\b|\bfalsif(?:y|ies|ied|ying|ication)\b|\bmisrepresent(?:s|ed|ing|ation)?\b|\bforg(?:e|ed|ery)\b)` / code:55\.1-,code:36-96,admin (1506 units) / 0 hits
- `\A(?=[\s\S]*(?:\bfalse(?:ly)?\b|\bfraud(?:ulent|ulently)?\b|\bfalsif(?:y|ies|ied|ying|ication)\b|\bmisrepresent(?:s|ed|ing|ation)?\b|\bforg(?:e|ed|ery)\b))(?=[\s\S]*(?:family abuse|domestic violence|protective orders?|sexual abuse|sexual assault|\bstalking\b|order of protection|\bvictims?\b|\btrafficking\b))` / code:55\.1-,code:36-96,admin (1506 units) / 0 hits
- `\bfraudulent supporting documentation\b` / code:36-96 (27 units) / 1 hits: 36-96.3:1
- positive [3] 36-96.3:1: passed
**VA-G-0310** [immigration-status]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:immigration|citizenship|\bunlawfully present\b|\bnoncitizens?\b|\baliens?\b|\bimmigrants?\b|\bundocumented\b)` / code:55\.1-12,code:55\.1-13,code:55\.1-14,code:55\.1-16,code:36-96,admin (772 units) / 1 hits: 18VAC135-50-215
- `(?:immigration|citizenship|\bunlawfully present\b|\bnoncitizens?\b|\baliens?\b|\bimmigrants?\b|\bundocumented\b)[\s\S]{0,1200}(?:\brent(?:al|s|ed|ing)?\b|\bhousing\b|\bdwellings?\b|\blandlords?\b|\btenants?\b|\brental agreements?\b)` / all (35536 units) / 4 hits: 2.2-2497, 18.2-308.2:2, 63.2-209.1, 18VAC135-50-215
- `(?:\brent(?:al|s|ed|ing)?\b|\bhousing\b|\bdwellings?\b|\blandlords?\b|\btenants?\b|\brental agreements?\b)[\s\S]{0,1200}(?:immigration|citizenship|\bunlawfully present\b|\bnoncitizens?\b|\baliens?\b|\bimmigrants?\b|\bundocumented\b)` / all (35536 units) / 5 hits: 2.2-2497, 18.2-308.2:2, 62.1-44.33, 63.2-209.1, 18VAC135-50-215
- `\A(?=[\s\S]*(?:\blandlords?\b|\blessors?\b|\brental agreements?\b|\btenants?\b))(?=[\s\S]*(?:immigration|citizenship|\bunlawfully present\b|\bnoncitizens?\b|\baliens?\b|\bimmigrants?\b|\bundocumented\b))` / code (34494 units) / 2 hits: 18.2-340.16, 38.2-100
- `(?:immigration|citizenship|\bunlawfully present\b|\bnoncitizens?\b|\baliens?\b|\bimmigrants?\b|\bundocumented\b)` / code:55\.1- (897 units) / 2 hits: 55.1-100, 55.1-2606
- positive [4] 55.1-100: passed
- positive [1] 18VAC135-50-215: passed
**VA-G-0311** [immigration-status]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bvisas?\b|\bgreen cards?\b|\bpassports?\b|\bdeport(?:ed|ation|s)?\b|\bnational origin\b|\bcountry of (?:origin|birth)\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\bapplicants? for tenancy\b|\bprospective tenants?\b)` / code:55\.1-,code:36-96,admin (1506 units) / 2 hits: 18VAC135-50-80, 18VAC135-50-90
- `(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\bapplicants? for tenancy\b|\bprospective tenants?\b)[\s\S]{0,1200}(?:\bvisas?\b|\bgreen cards?\b|\bpassports?\b|\bdeport(?:ed|ation|s)?\b|\bnational origin\b|\bcountry of (?:origin|birth)\b)` / code:55\.1-,code:36-96,admin (1506 units) / 3 hits: 55.1-1310, 18VAC135-50-80, 18VAC135-50-270
- `\A(?=[\s\S]*(?:\bvisas?\b|\bgreen cards?\b|\bpassports?\b|\bdeport(?:ed|ation|s)?\b|\bnational origin\b|\bcountry of (?:origin|birth)\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\bapplicants? for tenancy\b|\bprospective tenants?\b))` / code:55\.1-,code:36-96,admin (1506 units) / 7 hits: 55.1-1310, 36-96.2, 36-96.2#v2, 36-96.3, 18VAC135-50-80, 18VAC135-50-90, 18VAC135-50-270
- `\bnational origin\b` / code:36-96 (27 units) / 7 hits: 36-96.1, 36-96.1:1, 36-96.2, 36-96.2#v2, 36-96.3, 36-96.4, 36-96.6
- positive [3] 36-96.3: passed
**VA-G-0312** [protected-class-inquiry-ban]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\binquir(?:e|es|ed|ing|y|ies)\b|\bask(?:s|ed|ing)?\b|\bquestions?\b|\brequire (?:an applicant|applicants?|the applicant) to disclose\b|\bdisclos(?:e|ure) by the applicant\b|\brequiring information\b)[\s\S]{0,1200}(?:\brace\b|\bcolor\b|\breligio(?:n|us)\b|\bnational origin\b|\bsex\b|\belderliness\b|\bfamilial status\b|\bsource of funds\b|\bsexual orientation\b|\bgender identity\b|\bmilitary status\b|\bdisabilit(?:y|ies)\b|\bhandicap\b|\bmarital status\b|\bages?\b)` / code:55\.1-12,code:36-96,admin:18VAC135-50 (175 units) / 5 hits: 36-96.2, 36-96.2#v2, 36-96.3:1, 36-96.6, 18VAC135-50-200
- `(?:\brace\b|\bcolor\b|\breligio(?:n|us)\b|\bnational origin\b|\bsex\b|\belderliness\b|\bfamilial status\b|\bsource of funds\b|\bsexual orientation\b|\bgender identity\b|\bmilitary status\b|\bdisabilit(?:y|ies)\b|\bhandicap\b|\bmarital status\b|\bages?\b)[\s\S]{0,1200}(?:\binquir(?:e|es|ed|ing|y|ies)\b|\bask(?:s|ed|ing)?\b|\bquestions?\b|\brequire (?:an applicant|applicants?|the applicant) to disclose\b|\bdisclos(?:e|ure) by the applicant\b|\brequiring information\b)` / code:55\.1-12,code:36-96,admin:18VAC135-50 (175 units) / 6 hits: 36-96.2, 36-96.2#v2, 36-96.3:1, 36-96.4, 36-96.6, 18VAC135-50-200
- `\A(?=[\s\S]*(?:\binquir(?:e|es|ed|ing|y|ies)\b|\bask(?:s|ed|ing)?\b|\bquestions?\b|\brequire (?:an applicant|applicants?|the applicant) to disclose\b|\bdisclos(?:e|ure) by the applicant\b|\brequiring information\b))(?=[\s\S]*(?:\brace\b|\bcolor\b|\breligio(?:n|us)\b|\bnational origin\b|\bsex\b|\belderliness\b|\bfamilial status\b|\bsource of funds\b|\bsexual orientation\b|\bgender identity\b|\bmilitary status\b|\bdisabilit(?:y|ies)\b|\bhandicap\b|\bmarital status\b|\bages?\b))` / code:55\.1-12,code:36-96,admin:18VAC135-50 (175 units) / 6 hits: 36-96.2, 36-96.2#v2, 36-96.3:1, 36-96.4, 36-96.6, 18VAC135-50-200
- `\bmake an inquiry\b|\bmake inquiry\b` / all (35536 units) / 7 hits: 6.2-501, 8.01-586, 28.2-1000, 45.2-301, 58.1-23, 63.2-1231, 18VAC135-50-200
- positive [3] 18VAC135-50-200: passed
- positive [1] 36-96.2: passed
**VA-G-0313** [tenant-screening]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bconditional offers?\b|\blook-?back\b|\bindividuali[sz]ed assessment\b` / all (35536 units) / 5 hits: 9.1-116.01, 15.2-1705, 19.2-389.2, 23.1-407.1, 59.1-502.5
- `\bincome\b[\s\S]{0,1200}\b(?:times|multiple|ratio|percent(?:age)?)\b[\s\S]{0,200}\brent\b|\brent\b[\s\S]{0,1200}\b(?:times|multiple|ratio)\b[\s\S]{0,200}\bincome\b` / code:55\.1-,code:36-96,code:19\.2-392,admin (1533 units) / 0 hits
- `\bminimum income\b|\bincome (?:requirements?|standards?|criteria)\b|\bincome[- ]to[- ]rent\b|\brent[- ]to[- ]income\b` / all (35536 units) / 8 hits: 15.2-936, 15.2-2305, 15.2-2305.1, 21-118.4, 23.1-503, 36-55.38, 56-594.3, 18VAC135-50-80
- `\A(?=[\s\S]*\b(?:applicants?|prospective tenants?)\b)(?=[\s\S]*\bcriminal (?:records?|histor(?:y|ies)|convictions?|background)\b)` / code:55\.1-,code:36-96,code:19\.2-392,admin (1533 units) / 4 hits: 55.1-1209.1, 36-96.2, 36-96.2#v2, 13VAC5-52-530
- `\btenant screening\b|\bscreening reports?\b|\bbusiness screening services?\b|\bconsumer reports?\b` / code (34494 units) / 43 hits: 16.1-336.1, 16.1-338, 16.1-339, 16.1-340.1, 16.1-340.4, 16.1-345, 16.1-345.2, 16.1-345.5, 19.2-169.6, 19.2-392.13, 19.2-392.16, 37.2-505 +31
- positive [3] 36-96.2: passed
- positive [4] 19.2-392.16: passed
- positive [2] 18VAC135-50-80: passed
**VA-G-0314** [service-animal-denial-penalty]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\b(?:assistance|service|guide|hearing|support|therapy) (?:animals?|dogs?)\b|\bdog guides?\b)[\s\S]{0,1200}(?:\bmisdemeanor\b|\bfelony\b|\bguilty\b|\bcivil penalty\b|\bfined?\b|\bpunish(?:able|ed|ment)?\b)` / all (35536 units) / 2 hits: 46.2-933, 51.5-44.1
- `(?:\bmisdemeanor\b|\bfelony\b|\bguilty\b|\bcivil penalty\b|\bfined?\b|\bpunish(?:able|ed|ment)?\b)[\s\S]{0,1200}(?:\b(?:assistance|service|guide|hearing|support|therapy) (?:animals?|dogs?)\b|\bdog guides?\b)` / all (35536 units) / 1 hits: 3.2-6588
- `\A(?=[\s\S]*(?:\b(?:assistance|service|guide|hearing|support|therapy) (?:animals?|dogs?)\b|\bdog guides?\b))(?=[\s\S]*(?:\bmisdemeanor\b|\bfelony\b|\bguilty\b|\bcivil penalty\b|\bfined?\b|\bpunish(?:able|ed|ment)?\b))(?=[\s\S]*(?:\bden(?:y|ies|ied|ial)\b|\brefus(?:e|es|ed|al)\b|\bexclud(?:e|es|ed)\b|\bwithhold\b|\binterfer(?:e|es|ed|ence|ing)\b))` / all (35536 units) / 1 hits: 3.2-6588
- `\A(?=[\s\S]*(?:\b(?:assistance|service|guide|hearing|support|therapy) (?:animals?|dogs?)\b|\bdog guides?\b))(?=[\s\S]*(?:\bhousing\b|\bdwellings?\b|\blandlords?\b|\btenants?\b|\brent\b|\brental\b))` / all (35536 units) / 5 hits: 3.2-6513.2, 36-96.1:1, 36-96.3:1, 36-96.3:2, 51.5-45
- positive [0] 51.5-44.1: passed
- positive [3] 51.5-45: passed
**VA-G-0315** [service-animal-misrepresentation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\b(?:assistance|service|guide|hearing|support|therapy|leader) (?:animals?|dogs?)\b|\bdog guides?\b|\bemotional support\b)[\s\S]{0,1200}(?:\bmisrepresent(?:s|ed|ing|ation)?\b|\bfraudulent(?:ly)?\b|\bfalse(?:ly)?\b|\bpretend(?:s|ed|ing)?\b|\bfak(?:e|ed)\b|\brepresent that\b)` / all (35536 units) / 2 hits: 36-96.3:1, 51.5-44.1
- `(?:\bmisrepresent(?:s|ed|ing|ation)?\b|\bfraudulent(?:ly)?\b|\bfalse(?:ly)?\b|\bpretend(?:s|ed|ing)?\b|\bfak(?:e|ed)\b|\brepresent that\b)[\s\S]{0,1200}(?:\b(?:assistance|service|guide|hearing|support|therapy|leader) (?:animals?|dogs?)\b|\bdog guides?\b|\bemotional support\b)` / all (35536 units) / 1 hits: 51.5-44.1
- `\A(?=[\s\S]*(?:\b(?:assistance|service|guide|hearing|support|therapy|leader) (?:animals?|dogs?)\b|\bdog guides?\b|\bemotional support\b))(?=[\s\S]*(?:\bmisrepresent(?:s|ed|ing|ation)?\b|\bfraudulent(?:ly)?\b|\bfalse(?:ly)?\b|\bpretend(?:s|ed|ing)?\b|\bfak(?:e|ed)\b|\brepresent that\b))` / all (35536 units) / 3 hits: 36-96.3:1, 46.2-2099.48, 51.5-44.1
- positive [1] 51.5-44.1: passed
- positive [0] 36-96.3:1: passed
**VA-G-0316** [sex-offender-occupancy]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902)[\s\S]{0,1200}(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\brental\b|\brent(?:s|ed)?\b|\blease[sd]?\b|\bdwellings?\b|\bapartments?\b)` / all (35536 units) / 3 hits: 15.2-983, 46.2-2099.53, 46.2-2099.53#v2
- `(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\brental\b|\brent(?:s|ed)?\b|\blease[sd]?\b|\bdwellings?\b|\bapartments?\b)[\s\S]{0,1200}(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902)` / all (35536 units) / 6 hits: 15.2-983, 16.1-228, 63.2-100, 63.2-1503, 63.2-1503#v2, 63.2-1506
- `\A(?=[\s\S]*(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental agreements?\b))` / code (34494 units) / 2 hits: 46.2-2099.53, 46.2-2099.53#v2
- `\A(?=[\s\S]*(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902))(?=[\s\S]*(?:\bresid(?:e|es|ing|ence|ences)\b|\blive(?:s)? with\b|\bco-?resid))(?=[\s\S]*\b(?:knowingly|permit|allow)\w*\b)` / code:9\.1-9,code:18\.2-370 (33 units) / 0 hits
- positive [3] 18.2-370.3: recorded as failed
- positive [0] 16.1-228: recorded as failed
**VA-G-0317** [sex-offender-occupancy]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0316 (positives set on terms whose words those sections lack (term 3 lacked "offender" alone; 16.1-228 matches the reverse order))
- `(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902)[\s\S]{0,1200}(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\brental\b|\brent(?:s|ed)?\b|\blease[sd]?\b|\bdwellings?\b|\bapartments?\b)` / all (35536 units) / 3 hits: 15.2-983, 46.2-2099.53, 46.2-2099.53#v2
- `(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\brental\b|\brent(?:s|ed)?\b|\blease[sd]?\b|\bdwellings?\b|\bapartments?\b)[\s\S]{0,1200}(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902)` / all (35536 units) / 6 hits: 15.2-983, 16.1-228, 63.2-100, 63.2-1503, 63.2-1503#v2, 63.2-1506
- `\A(?=[\s\S]*(?:\bsex offenders?\b|Sex Offender and Crimes Against Minors Registry|\bregistered offenders?\b|\boffenders? required to register\b|\brequired to register\b|§ 9\.1-902))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\blessors?\b|\brental agreements?\b))` / code (34494 units) / 2 hits: 46.2-2099.53, 46.2-2099.53#v2
- `\A(?=[\s\S]*\boffenders?\b)(?=[\s\S]*(?:\bresid(?:e|es|ing|ence|ences)\b|\blive(?:s)? with\b|\bco-?resid))(?=[\s\S]*\b(?:knowingly|knows?|permit|allow)\w*\b)` / code:9\.1-9,code:18\.2-370 (33 units) / 1 hits: 18.2-370.3
- positive [3] 18.2-370.3: passed
- positive [1] 16.1-228: passed
**VA-G-0318** [drug-free-housing-addendum]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bdrug[- ]free\b|\bcrime[- ]free\b` / all (35536 units) / 9 hits: 2.2-3313, 2.2-4312, 4.1-1120, 18.2-258.1, 18.2-258.1#v2, 22.1-279.3:1, 32.1-162.9:1, 37.2-431.1, 65.2-813.2
- `(?:\baddend(?:um|ums|a)\b|\blease (?:provisions?|clauses?|terms?)\b|\bprovision in (?:the|a|any) (?:lease|rental agreement)\b)[\s\S]{0,1200}(?:\bdrug-free\b|\bcrime-free\b|\bcontrolled substances?\b|\billegal drugs?\b|\bdrug activity\b|\bcriminal activity\b)` / all (35536 units) / 0 hits
- `(?:\bdrug-free\b|\bcrime-free\b|\bcontrolled substances?\b|\billegal drugs?\b|\bdrug activity\b|\bcriminal activity\b)[\s\S]{0,1200}(?:\baddend(?:um|ums|a)\b|\blease (?:provisions?|clauses?|terms?)\b|\bprovision in (?:the|a|any) (?:lease|rental agreement)\b)` / all (35536 units) / 0 hits
- `\A(?=[\s\S]*\baddend(?:um|ums|a)\b)(?=[\s\S]*(?:\bcontrolled substances?\b|\bdrugs?\b|\bcriminal\b))` / code (34494 units) / 2 hits: 38.2-4905, 63.2-1231
- `\billegal drug activity\b` / code:55\.1- (897 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- positive [4] 55.1-1245: passed
**VA-G-0319** [purpose-limitation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\brental agreements?\b|\blease[sd]?\b|\btenanc(?:y|ies)\b|\bleasehold\b)[\s\S]{0,1200}(?:\bvoid(?:able|ed)?\b|\bforfeit(?:s|ed|ure)?\b|\bannul(?:s|led|ment)?\b)|(?:\bvoid(?:able|ed)?\b|\bforfeit(?:s|ed|ure)?\b|\bannul(?:s|led|ment)?\b)[\s\S]{0,1200}(?:\brental agreements?\b|\blease[sd]?\b|\btenanc(?:y|ies)\b|\bleasehold\b)` / code:18\.2-,code:48- (1026 units) / 2 hits: 18.2-242.1, 18.2-283.2
- `\A(?=[\s\S]*(?:\brental agreements?\b|\blease[sd]?\b|\btenanc(?:y|ies)\b|\bleasehold\b))(?=[\s\S]*(?:\bvoid(?:able|ed)?\b|\bforfeit(?:s|ed|ure)?\b|\bannul(?:s|led|ment)?\b))(?=[\s\S]*(?:\bnuisances?\b|\bbawdy\b|\bunlawful purposes?\b|\billegal purposes?\b|\bgambling\b|\bprostitution\b|\blewdness\b|\bcontrolled substances?\b))` / all (35536 units) / 7 hits: 19.2-13, 19.2-13#v2, 54.1-2953.1, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4
- `\A(?=[\s\S]*(?:\bnuisances?\b|\bbawdy\b|\bunlawful purposes?\b|\billegal purposes?\b|\bgambling\b|\bprostitution\b|\blewdness\b|\bcontrolled substances?\b))(?=[\s\S]*\b(?:owner|lessor|landlord)s?\b)(?=[\s\S]*\b(?:lease[sd]?|tenants?|rental agreements?)\b)` / code:18\.2-,code:48-,code:15\.2-9 (1172 units) / 7 hits: 18.2-258, 18.2-258#v2, 18.2-258.01, 18.2-329, 48-16, 48-17, 15.2-907
- positive [2] 48-7: recorded as failed
- positive [2] 18.2-258: passed
**VA-G-0320** [purpose-limitation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0319 (positive 48-7 failed because term 2 lacked the verb "own"; term 2 widened)
- `(?:\brental agreements?\b|\blease[sd]?\b|\btenanc(?:y|ies)\b|\bleasehold\b)[\s\S]{0,1200}(?:\bvoid(?:able|ed)?\b|\bforfeit(?:s|ed|ure)?\b|\bannul(?:s|led|ment)?\b)|(?:\bvoid(?:able|ed)?\b|\bforfeit(?:s|ed|ure)?\b|\bannul(?:s|led|ment)?\b)[\s\S]{0,1200}(?:\brental agreements?\b|\blease[sd]?\b|\btenanc(?:y|ies)\b|\bleasehold\b)` / code:18\.2-,code:48- (1026 units) / 2 hits: 18.2-242.1, 18.2-283.2
- `\A(?=[\s\S]*(?:\brental agreements?\b|\blease[sd]?\b|\btenanc(?:y|ies)\b|\bleasehold\b))(?=[\s\S]*(?:\bvoid(?:able|ed)?\b|\bforfeit(?:s|ed|ure)?\b|\bannul(?:s|led|ment)?\b))(?=[\s\S]*(?:\bnuisances?\b|\bbawdy\b|\bunlawful purposes?\b|\billegal purposes?\b|\bgambling\b|\bprostitution\b|\blewdness\b|\bcontrolled substances?\b))` / all (35536 units) / 7 hits: 19.2-13, 19.2-13#v2, 54.1-2953.1, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4
- `\A(?=[\s\S]*(?:\bnuisances?\b|\bbawdy\b|\bunlawful purposes?\b|\billegal purposes?\b|\bgambling\b|\bprostitution\b|\blewdness\b|\bcontrolled substances?\b))(?=[\s\S]*\b(?:own|owns|owner|owners|lessor|lessors|landlord|landlords)\b)(?=[\s\S]*\b(?:lease[sd]?|tenants?|rental agreements?)\b)` / code:18\.2-,code:48-,code:15\.2-9 (1172 units) / 8 hits: 18.2-258, 18.2-258#v2, 18.2-258.01, 18.2-329, 48-7, 48-16, 48-17, 15.2-907
- positive [2] 48-7: passed
- positive [2] 18.2-258: passed
**VA-G-0321** [political-access]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bcanvass(?:ing|ers?|es|ed)?\b|\bcampaign (?:signs?|literature|materials?|workers?)\b|\bpolitical (?:signs?|literature|materials?|campaigns?|activit(?:y|ies)|speech|candidates?)\b|\bcandidates? for (?:public )?office\b|\bvoter registration\b|\bcircula(?:te|ting|tion of) (?:a |any )?petitions?\b|\belection materials?\b)[\s\S]{0,1200}(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\bapartments?\b|\bmultifamily\b|\bresidential (?:buildings?|communit(?:y|ies)|property)\b|\bcommon interest communit(?:y|ies)\b|\bunit owners?\b|\blot owners?\b)` / all (35536 units) / 0 hits
- `(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\bapartments?\b|\bmultifamily\b|\bresidential (?:buildings?|communit(?:y|ies)|property)\b|\bcommon interest communit(?:y|ies)\b|\bunit owners?\b|\blot owners?\b)[\s\S]{0,1200}(?:\bcanvass(?:ing|ers?|es|ed)?\b|\bcampaign (?:signs?|literature|materials?|workers?)\b|\bpolitical (?:signs?|literature|materials?|campaigns?|activit(?:y|ies)|speech|candidates?)\b|\bcandidates? for (?:public )?office\b|\bvoter registration\b|\bcircula(?:te|ting|tion of) (?:a |any )?petitions?\b|\belection materials?\b)` / all (35536 units) / 1 hits: 24.2-412
- `\A(?=[\s\S]*(?:\bcanvass(?:ing|ers?|es|ed)?\b|\bcampaign (?:signs?|literature|materials?|workers?)\b|\bpolitical (?:signs?|literature|materials?|campaigns?|activit(?:y|ies)|speech|candidates?)\b|\bcandidates? for (?:public )?office\b|\bvoter registration\b|\bcircula(?:te|ting|tion of) (?:a |any )?petitions?\b|\belection materials?\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\bapartments?\b|\bmultifamily\b|\bresidential (?:buildings?|communit(?:y|ies)|property)\b|\bcommon interest communit(?:y|ies)\b|\bunit owners?\b|\blot owners?\b))` / all (35536 units) / 1 hits: 24.2-412
- `(?:\bcanvass(?:ing|ers?|es|ed)?\b|\bcampaign (?:signs?|literature|materials?|workers?)\b|\bpolitical (?:signs?|literature|materials?|campaigns?|activit(?:y|ies)|speech|candidates?)\b|\bcandidates? for (?:public )?office\b|\bvoter registration\b|\bcircula(?:te|ting|tion of) (?:a |any )?petitions?\b|\belection materials?\b)` / code:55\.1- (897 units) / 1 hits: 55.1-2830
- `(?:\bcanvass(?:ing|ers?|es|ed)?\b|\bcampaign (?:signs?|literature|materials?|workers?)\b|\bpolitical (?:signs?|literature|materials?|campaigns?|activit(?:y|ies)|speech|candidates?)\b|\bcandidates? for (?:public )?office\b|\bvoter registration\b|\bcircula(?:te|ting|tion of) (?:a |any )?petitions?\b|\belection materials?\b)` / code:24\.2- (603 units) / 111 hits: 24.2-101, 24.2-101#v2, 24.2-103.1, 24.2-105, 24.2-105.1, 24.2-106.1, 24.2-107, 24.2-114, 24.2-124.1, 24.2-126.2, 24.2-128, 24.2-129 +99 / heading-only: 24.2-418.1, 24.2-509, 24.2-602, 24.2-947.6, 24.2-947.7
- positive [2] 24.2-412: passed
- positive [4] 24.2-106.1: passed
**VA-G-0322** [translation-duty]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\btranslat(?:e|es|ed|ing|ion|ions|or|ors)\b|\blanguages? other than English\b|\bnon-?English\b|\blimited English\b|\bSpanish\b|\bprimary language\b|\bnative language\b|\binterpret(?:er|ers)\b)[\s\S]{0,1200}(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\blessees?\b)` / all (35536 units) / 3 hits: 36-139.02, 55.1-1206, 55.1-1301
- `(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\blessees?\b)[\s\S]{0,1200}(?:\btranslat(?:e|es|ed|ing|ion|ions|or|ors)\b|\blanguages? other than English\b|\bnon-?English\b|\blimited English\b|\bSpanish\b|\bprimary language\b|\bnative language\b|\binterpret(?:er|ers)\b)` / all (35536 units) / 3 hits: 36-139.02, 55.1-1206, 55.1-1301
- `\A(?=[\s\S]*(?:\btranslat(?:e|es|ed|ing|ion|ions|or|ors)\b|\blanguages? other than English\b|\bnon-?English\b|\blimited English\b|\bSpanish\b|\bprimary language\b|\bnative language\b|\binterpret(?:er|ers)\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\blessors?\b|\blessees?\b))` / all (35536 units) / 4 hits: 36-139.02, 38.2-1887, 55.1-1206, 55.1-1301
- `(?:\btranslat(?:e|es|ed|ing|ion|ions|or|ors)\b|\blanguages? other than English\b|\bnon-?English\b|\blimited English\b|\bSpanish\b|\bprimary language\b|\bnative language\b|\binterpret(?:er|ers)\b)` / code:55\.1-12,code:55\.1-13,code:55\.1-14,code:55\.1-16,code:36-96 (190 units) / 2 hits: 55.1-1206, 55.1-1301
- positive [1] 55.1-1206: passed
- positive [2] 36-139.02: passed
**VA-G-0323** [rent-reporting]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bcredit bureaus?\b|\bconsumer reporting agenc(?:y|ies)\b|\bcredit report(?:s|ing)?\b|\bcredit histor(?:y|ies)\b|\bcredit scores?\b|\bfurnish(?:es|ed|ing)? information\b)[\s\S]{0,1200}(?:\brent(?:s|al)?\b|\brental payments?\b|\bpayment histor(?:y|ies)\b|\btenants?\b|\blandlords?\b)` / all (35536 units) / 8 hits: 6.2-2610, 8.01-465.29, 38.2-2126, 38.2-2235, 55.1-1203, 55.1-1203#v2, 59.1-444.2, 18VAC135-20-181
- `(?:\brent(?:s|al)?\b|\brental payments?\b|\bpayment histor(?:y|ies)\b|\btenants?\b|\blandlords?\b)[\s\S]{0,1200}(?:\bcredit bureaus?\b|\bconsumer reporting agenc(?:y|ies)\b|\bcredit report(?:s|ing)?\b|\bcredit histor(?:y|ies)\b|\bcredit scores?\b|\bfurnish(?:es|ed|ing)? information\b)` / all (35536 units) / 6 hits: 6.2-2610, 38.2-2126, 55.1-1203, 55.1-1203#v2, 59.1-444.2, 18VAC135-20-181
- `\A(?=[\s\S]*(?:\bcredit bureaus?\b|\bconsumer reporting agenc(?:y|ies)\b|\bcredit report(?:s|ing)?\b|\bcredit histor(?:y|ies)\b|\bcredit scores?\b|\bfurnish(?:es|ed|ing)? information\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\brental agreements?\b))` / code (34494 units) / 4 hits: 38.2-2126, 55.1-1203, 55.1-1203#v2, 59.1-444.2
- `\bpositive rent\b|\brent reporting\b|\breport(?:s|ed|ing)? (?:rent|rental) payments?\b|\brental payment (?:data|information|reporting)\b` / all (35536 units) / 0 hits
- positive [2] 55.1-1203#v2: passed
- positive [1] 55.1-1203: passed
**VA-G-0324** [tenant-right-to-organize]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\btenants?'? (?:organizations?|associations?|unions?|councils?|meetings?)\b|\bresidents?'? (?:organizations?|associations?|councils?|meetings?)\b|\btenant organiz(?:ing|ers?)\b)` / all (35536 units) / 5 hits: 36-176, 36-177, 38.2-4910, 55.1-1258#v2, 55.1-1314#v2
- `(?:\borganiz(?:e|es|ed|ing)\b|\bassembl(?:e|y|ies)\b|\bmeet(?:s|ing|ings)?\b|\bdistribut(?:e|ing) (?:literature|leaflets|flyers)\b|\bcommunity rooms?\b)[\s\S]{0,1200}(?:\btenants?\b|\bresidents?\b)|(?:\btenants?\b|\bresidents?\b)[\s\S]{0,1200}(?:\borganiz(?:e|es|ed|ing)\b|\bassembl(?:e|y|ies)\b|\bmeet(?:s|ing|ings)?\b|\bdistribut(?:e|ing) (?:literature|leaflets|flyers)\b|\bcommunity rooms?\b)` / code:55\.1-12,code:55\.1-13,code:36- (471 units) / 24 hits: 55.1-1202, 55.1-1202#v2, 55.1-1203#v2, 55.1-1204#v2, 55.1-1208.1, 55.1-1209#v2, 55.1-1212, 55.1-1212#v2, 55.1-1212.1, 55.1-1230, 55.1-1240#v2, 55.1-1244#v2 +12
- `\A(?=[\s\S]*(?:\btenants?'? (?:organizations?|associations?|unions?|councils?|meetings?)\b|\bresidents?'? (?:organizations?|associations?|councils?|meetings?)\b|\btenant organiz(?:ing|ers?)\b))(?=[\s\S]*\b(?:landlords?|owners?)\b)` / code (34494 units) / 4 hits: 36-176, 36-177, 55.1-1258#v2, 55.1-1314#v2
- positive [0] 55.1-1258#v2: passed
- positive [2] 36-177: passed
**VA-G-0325** [religious-cultural-display]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\breligious (?:items?|symbols?|displays?|objects?|decorations?|dress(?:ing)?)\b|\bdisplay(?:s|ed|ing)? (?:of )?(?:religious|cultural)\b|\bmezuzah?s?\b|\bmezuzot\b|\bdoorpost\b|\bcultural (?:items?|symbols?|displays?|decorations?)\b|\bholiday decorations?\b)` / all (35536 units) / 11 hits: 2.2-2901.1, 2.2-3004, 2.2-3901, 15.2-853, 15.2-965, 15.2-1500.1, 15.2-1604, 22.1-295.2, 22.1-306, 36-96.1:1, 55.1-1310
- `\A(?=[\s\S]*(?:\breligious (?:items?|symbols?|displays?|objects?|decorations?|dress(?:ing)?)\b|\bdisplay(?:s|ed|ing)? (?:of )?(?:religious|cultural)\b|\bmezuzah?s?\b|\bmezuzot\b|\bdoorpost\b|\bcultural (?:items?|symbols?|displays?|decorations?)\b|\bholiday decorations?\b))(?=[\s\S]*(?:\blandlords?\b|\btenants?\b|\brental agreements?\b|\bdwellings?\b|\bunit owners?\b|\blot owners?\b|\bassociations?\b|\bresidents?\b))` / code (34494 units) / 3 hits: 15.2-853, 36-96.1:1, 55.1-1310
- `\breligio(?:n|us)\b[\s\S]{0,1200}\b(?:display|displays|displayed|signs?|decorat\w*)\b|\b(?:display|displays|displayed|signs?|decorat\w*)\b[\s\S]{0,1200}\breligio(?:n|us)\b` / code:55\.1-,code:36-96,admin (1506 units) / 4 hits: 55.1-1310, 36-96.1:1, 18VAC135-50-110, 18VAC135-50-290
- positive [0] 36-96.1:1: passed
- positive [1] 36-96.1:1: passed
**VA-G-0326** [source-of-income]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsource of (?:funds|income)\b|\bhousing choice vouchers?\b|\bvouchers?\b|\bsection 8\b|\brental assistance\b|\btenant-based\b)[\s\S]{0,1200}(?:\brental agreements?\b|\blease (?:shall|must) (?:state|include|contain)\b|\bwritten statement\b|\bdisclos(?:e|ure)\b)` / code:55\.1-,code:36-96,admin (1506 units) / 3 hits: 55.1-1202#v2, 55.1-1258#v2, 55.1-1314#v2
- `(?:\brental agreements?\b|\blease (?:shall|must) (?:state|include|contain)\b|\bwritten statement\b|\bdisclos(?:e|ure)\b)[\s\S]{0,1200}(?:\bsource of (?:funds|income)\b|\bhousing choice vouchers?\b|\bvouchers?\b|\bsection 8\b|\brental assistance\b|\btenant-based\b)` / code:55\.1-,code:36-96,admin (1506 units) / 4 hits: 55.1-1202, 55.1-1202#v2, 55.1-1258#v2, 55.1-1314#v2
- `\A(?=[\s\S]*\bsource of (?:funds|income)\b)(?=[\s\S]*\brental agreements?\b)` / code (34494 units) / 0 hits
- `\bsource of funds\b` / code:36-96,admin (609 units) / 16 hits: 36-96.1, 36-96.1:1, 36-96.2, 36-96.2#v2, 36-96.3, 18VAC135-50-50, 18VAC135-50-80, 18VAC135-50-90, 18VAC135-50-100, 18VAC135-50-110, 18VAC135-50-120, 18VAC135-50-130 +4
- positive [3] 36-96.2: passed
- positive [0] 55.1-1258#v2: passed
**VA-G-0327** [disability-accommodation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bmodifications?\b|\brestor(?:e|ation|ations)\b|\breasonable accommodations?\b)[\s\S]{0,1200}\b(?:included|include|includes|stated|set forth) in (?:the |any |a )?(?:rental agreements?|leases?)\b` / all (35536 units) / 0 hits
- `\b(?:rental agreements?|leases?) (?:shall|must) (?:include|contain|state)\b[\s\S]{0,1200}(?:\bmodifications?\b|\brestor(?:e|ation|ations)\b|\breasonable accommodations?\b)` / all (35536 units) / 0 hits
- `\A(?=[\s\S]*\breasonable modifications?\b)(?=[\s\S]*(?:\brental agreements?\b|\bleases?\b|\blease agreements?\b))` / all (35536 units) / 1 hits: 36-96.3
- `\breasonable modifications?\b` / code:36-96,admin (609 units) / 3 hits: 36-96.3, 18VAC135-50-200, 18VAC135-50-560
- positive [3] 36-96.3: passed
- positive [2] 18VAC135-50-200: recorded as failed
**VA-G-0328** [disability-accommodation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0327 (second positive (18VAC135-50-200 on term 2) failed: the regulation has no lease word; lease alternatives also narrowed per the lease/release trap)
- `(?:\bmodifications?\b|\brestor(?:e|ation|ations)\b|\breasonable accommodations?\b)[\s\S]{0,1200}\b(?:included|include|includes|stated|set forth) in (?:the |any |a )?(?:rental agreements?|lease)\b` / all (35536 units) / 0 hits
- `\b(?:rental agreements?|lease) (?:shall|must) (?:include|contain|state)\b[\s\S]{0,1200}(?:\bmodifications?\b|\brestor(?:e|ation|ations)\b|\breasonable accommodations?\b)` / all (35536 units) / 0 hits
- `\A(?=[\s\S]*\breasonable modifications?\b)(?=[\s\S]*(?:\brental agreements?\b|\blease (?:agreements?|terms?|provisions?)\b|\b(?:in|of) (?:the|any|a) lease\b))` / all (35536 units) / 0 hits
- `\breasonable modifications?\b` / code:36-96,admin (609 units) / 3 hits: 36-96.3, 18VAC135-50-200, 18VAC135-50-560
- positive [3] 36-96.3: passed
**VA-G-0329** [children-occupancy]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bchild(?:ren)?\b|\bminors?\b|\bfamilial status\b)[\s\S]{0,1200}(?:\b(?:rental agreements?|lease) (?:shall|must) (?:include|contain|state|address|provide)\b|\b(?:included|include|stated|set forth|disclosed) in (?:the |any |a )?(?:rental agreements?|lease)\b)` / code:55\.1-,code:36-,admin (1823 units) / 0 hits
- `(?:\b(?:rental agreements?|lease) (?:shall|must) (?:include|contain|state|address|provide)\b|\b(?:included|include|stated|set forth|disclosed) in (?:the |any |a )?(?:rental agreements?|lease)\b)[\s\S]{0,1200}(?:\bchild(?:ren)?\b|\bminors?\b|\bfamilial status\b)` / code:55\.1-,code:36-,admin (1823 units) / 0 hits
- `\A(?=[\s\S]*\bfamilial status\b)(?=[\s\S]*\brental agreements?\b)` / code (34494 units) / 0 hits
- `\bfamilial status\b` / code:36-96 (27 units) / 8 hits: 36-96.1, 36-96.1:1, 36-96.2, 36-96.2#v2, 36-96.3, 36-96.4, 36-96.6, 36-96.7
- positive [3] 36-96.1:1: passed
**VA-G-0401** [landlord-registration]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\blandlord|\brental|\blessor)s?\s+(?:registration|registry|license|licensing|licence|permit)s?\b` / all (35536 units) / 1 hits: 15.2-983
- `\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b[\s\S]{0,1200}(?:\blandlords?\b|\blessors?\b|residential rental|rental dwelling|rental propert(?:y|ies)|rental units?|rental housing)|(?:\blandlords?\b|\blessors?\b|residential rental|rental dwelling|rental propert(?:y|ies)|rental units?|rental housing)[\s\S]{0,1200}\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b` / code (34494 units) / 38 hits: 2.2-2455, 6.2-1700, 8.1A-203, 8.9A-102, 8.9A-505, 16.1-88.03, 18.2-340.18, 18.2-340.33, 19.2-70.2, 29.1-733.2, 36-99.5, 36-105.1:1 +26
- `\A(?=[\s\S]*\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b)(?=[\s\S]*(?:\blandlords?\b|residential rental dwelling))` / code (34494 units) / 19 hits: 16.1-88.03, 18.2-340.18, 18.2-340.33, 19.2-62, 19.2-70.2, 29.1-301, 36-99.5, 36-105.1:1, 38.2-1330, 46.2-649.3, 46.2-1231, 46.2-1232 +7
- `\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b[\s\S]{0,300}\b(?:rents?|renting|leases|leased|leasing)\b[\s\S]{0,100}\b(?:dwelling|residential|real property|real estate)\b` / code (34494 units) / 0 hits
- `registration requirement` / code:36- (344 units) / 1 hits: 36-105.1:1
- positive [4] 36-105.1:1: passed
- positive [1] 58.1-316: recorded as failed
**VA-G-0402** [landlord-registration]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0401 (positive 58.1-316 failed: landlord/rental alternatives lacked "rental of real property")
- `(?:\blandlord|\brental|\blessor)s?\s+(?:registration|registry|license|licensing|licence|permit)s?\b` / all (35536 units) / 1 hits: 15.2-983
- `\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b[\s\S]{0,1200}(?:\blandlords?\b|\blessors?\b|residential rental|rental dwelling|rental propert(?:y|ies)|rental units?|rental housing|rental of (?:real|residential)|short-term rental)|(?:\blandlords?\b|\blessors?\b|residential rental|rental dwelling|rental propert(?:y|ies)|rental units?|rental housing|rental of (?:real|residential)|short-term rental)[\s\S]{0,1200}\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b` / code (34494 units) / 40 hits: 2.2-2455, 6.2-1700, 8.1A-203, 8.9A-102, 8.9A-505, 15.2-983, 16.1-88.03, 18.2-340.18, 18.2-340.33, 19.2-70.2, 29.1-733.2, 36-99.5 +28
- `\A(?=[\s\S]*\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b)(?=[\s\S]*(?:\blandlords?\b|residential rental dwelling|rental of real property))` / code (34494 units) / 20 hits: 16.1-88.03, 18.2-340.18, 18.2-340.33, 19.2-62, 19.2-70.2, 29.1-301, 36-99.5, 36-105.1:1, 38.2-1330, 46.2-649.3, 46.2-1231, 46.2-1232 +8
- `\bregist(?:er|ers|ered|ering|ry|ries|ration|rations|rant|rants)\b[\s\S]{0,1200}\b(?:rents?|renting|rental|leases|leased|leasing)\b[\s\S]{0,1200}\b(?:dwellings?|residential|real property|real estate)\b` / code (34494 units) / 16 hits: 6.2-1000, 6.2-1700, 15.2-983, 15.2-2305.1, 19.2-392.15, 21-185, 21-265, 36-105.1:1, 54.1-2344, 55.1-1216, 55.1-1244.1, 55.1-1982 +4
- `registration requirement` / code:36- (344 units) / 1 hits: 36-105.1:1
- positive [4] 36-105.1:1: passed
- positive [1] 58.1-316: passed
- positive [1] 15.2-983: passed
**VA-G-0403** [rental-inspection]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\binspectors?\b|building officials?|code officials?|building department|maintenance code official|housing inspector|fire officials?)[\s\S]{0,1200}\bconsent\w*\b[\s\S]{0,1200}(?:rental agreements?|\bleases?\b|\blessees?\b|\btenants?\b)|(?:rental agreements?|\bleases?\b|\blessees?\b|\btenants?\b)[\s\S]{0,1200}\bconsent\w*\b[\s\S]{0,1200}(?:\binspectors?\b|building officials?|code officials?|building department|maintenance code official|housing inspector|fire officials?)` / code,admin (35076 units) / 5 hits: 13.1-665, 36-105, 45.2-1620, 13VAC5-63-40, 13VAC5-63-480
- `\A(?=[\s\S]*(?:\binspectors?\b|building officials?|code officials?|building department|maintenance code official|housing inspector|fire officials?))(?=[\s\S]*\bconsent\w*\b)(?=[\s\S]*(?:rental agreements?|\btenants?\b))` / code,admin (35076 units) / 4 hits: 13.1-665, 36-105, 13VAC5-63-40, 13VAC5-63-480
- `(?:rental agreements?|\bleases?\b)[\s\S]{0,1200}(?:authoriz\w+|permit\w*|allow\w*)[\s\S]{0,300}(?:\binspect\w*\b)` / code:55\.1-12 (91 units) / 0 hits
- `\binspection warrants?\b` / code,admin (35076 units) / 20 hits: 3.2-1001, 10.1-1197.10, 10.1-1456, 15.2-1723.2#v2, 15.2-2286, 15.2-2286#v2, 19.2-60.1, 19.2-393, 19.2-394, 19.2-395, 23.1-815.1#v2, 27-95 +8 / heading-only: 22.1-289.033, 63.2-1718
- `\b(?:let|admit|allow)\w*\b[\s\S]{0,200}\b(?:inspectors?|officials?)\b[\s\S]{0,200}\b(?:enter|entry|into)\b` / code (34494 units) / 1 hits: 19.2-121
- positive [3] 36-105: passed
- positive [0] 36-105: passed
**VA-G-0404** [health-district-rental-rules]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:health districts?|local health departments?|health directors?|boards? of health|department of health|health officials?)[\s\S]{0,1200}(?:rental dwellings?|rental units?|rental housing|residential rental|\btenants?\b|\blandlords?\b|rental agreements?)|(?:rental dwellings?|rental units?|rental housing|residential rental|\btenants?\b|\blandlords?\b|rental agreements?)[\s\S]{0,1200}(?:health districts?|local health departments?|health directors?|boards? of health|department of health|health officials?)` / all (35536 units) / 10 hits: 15.2-2288.9, 15.2-5138, 15.2-5138.1, 21-118.4, 21-184, 21-264, 36-105, 36-139, 36-139#v2, 13VAC5-63-320
- `\A(?=[\s\S]*(?:health districts?|local health departments?|health directors?|boards? of health|department of health|health officials?))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))` / code,admin (35076 units) / 12 hits: 2.2-3705.2, 15.2-5137, 15.2-5138, 15.2-5138.1, 21-118.4, 21-184, 21-264, 36-105, 36-139, 36-139#v2, 13VAC5-63-210, 13VAC5-63-320
- `health district` / code (34494 units) / 5 hits: 4.1-603, 15.2-411, 15.2-5370, 32.1-263, 54.1-3420.2
- `(?:sanitary|health)\s+(?:code|regulations?|rules?)[\s\S]{0,1200}\b(?:dwellings?|housing|apartments?)\b` / code:32\.1- (879 units) / 1 hits: 32.1-211
- `\b(?:copy|copies)\b[\s\S]{0,300}\b(?:regulations?|rules)\b[\s\S]{0,300}\b(?:tenants?|renters?|occupants?)\b` / code (34494 units) / 2 hits: 55.1-1228, 55.1-1250
- positive [2] 32.1-31: recorded as failed
**VA-G-0405** [health-district-rental-rules]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0404 (positive 32.1-31 failed: the section says "district health department", not "health district")
- `(?:health districts?|district health departments?|local health departments?|health directors?|boards? of health|department of health|health officials?)[\s\S]{0,1200}(?:rental dwellings?|rental units?|rental housing|residential rental|\btenants?\b|\blandlords?\b|rental agreements?)|(?:rental dwellings?|rental units?|rental housing|residential rental|\btenants?\b|\blandlords?\b|rental agreements?)[\s\S]{0,1200}(?:health districts?|district health departments?|local health departments?|health directors?|boards? of health|department of health|health officials?)` / all (35536 units) / 10 hits: 15.2-2288.9, 15.2-5138, 15.2-5138.1, 21-118.4, 21-184, 21-264, 36-105, 36-139, 36-139#v2, 13VAC5-63-320
- `\A(?=[\s\S]*(?:health districts?|district health departments?|local health departments?|health directors?|boards? of health|department of health|health officials?))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))` / code,admin (35076 units) / 12 hits: 2.2-3705.2, 15.2-5137, 15.2-5138, 15.2-5138.1, 21-118.4, 21-184, 21-264, 36-105, 36-139, 36-139#v2, 13VAC5-63-210, 13VAC5-63-320
- `health districts?|district health departments?` / code (34494 units) / 19 hits: 4.1-603, 15.2-411, 15.2-2824, 15.2-5370, 32.1-31, 32.1-46, 32.1-48.02, 32.1-48.05, 32.1-48.001, 32.1-163.4, 32.1-164, 32.1-176.4 +7
- `(?:sanitary|health)\s+(?:code|regulations?|rules?)[\s\S]{0,1200}\b(?:dwellings?|housing|apartments?)\b` / code:32\.1- (879 units) / 1 hits: 32.1-211
- `\b(?:copy|copies)\b[\s\S]{0,1200}\b(?:health|sanitary)\b[\s\S]{0,1200}\b(?:tenants?|renters?|occupants?)\b|\b(?:tenants?|renters?|occupants?)\b[\s\S]{0,1200}\b(?:health|sanitary)\b[\s\S]{0,1200}\b(?:copy|copies)\b` / code:55\.1-1[23] (127 units) / 1 hits: 55.1-1303
- positive [2] 32.1-31: passed
**VA-G-0406** [good-cause-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:good|just)[- ]cause evictions?|good cause (?:for|to) (?:evict|terminat)\w*|(?:evict|terminat)\w* (?:only )?for (?:good|just) cause` / all (35536 units) / 0 hits
- `(?:good cause|just cause|\bcause\b)[\s\S]{0,1200}(?:\bevict\w*|terminat\w*|nonrenew\w*|non-renew\w*|refus\w* to renew|fail\w* to renew)[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|dwelling units?)|(?:\btenan\w*|rental agreements?|dwelling units?)[\s\S]{0,1200}(?:\bevict\w*|terminat\w*|nonrenew\w*|non-renew\w*|refus\w* to renew|fail\w* to renew)[\s\S]{0,1200}(?:good cause|just cause|\bcause\b)` / code:55\.1- (897 units) / 8 hits: 55.1-1240, 55.1-1240#v2, 55.1-1243.1, 55.1-1244, 55.1-1244#v2, 55.1-1250, 55.1-1258#v2, 55.1-1314#v2
- `\A(?=[\s\S]*(?:good cause|just cause))(?=[\s\S]*\btenan\w*)(?=[\s\S]*(?:\bevict\w*|terminat\w*|nonrenew\w*|non-renew\w*|refus\w* to renew|fail\w* to renew))` / code (34494 units) / 9 hits: 3.2-6569, 15.2-2286, 15.2-2286#v2, 20-107.3, 36-106, 38.2-4905, 55.1-1243.1, 55.1-1258#v2, 55.1-1314#v2
- `\b(?:reason|reasons|grounds?)\b[\s\S]{0,1200}\b(?:nonrenew\w*|not renew\w*|terminat\w*)\b` / code:55\.1-12 (91 units) / 5 hits: 55.1-1226, 55.1-1234.1, 55.1-1244#v2, 55.1-1258, 55.1-1258#v2
- `any other reason not prohibited by law` / code (34494 units) / 2 hits: 55.1-1258, 55.1-1258#v2
- positive [4] 55.1-1258: passed
**VA-G-0407** [good-cause-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0406 (INFLECTION line on term [1]: cause/causes/caused added)
- `(?:good|just)[- ]cause evictions?|good cause (?:for|to) (?:evict|terminat)\w*|(?:evict|terminat)\w* (?:only )?for (?:good|just) cause` / all (35536 units) / 0 hits
- `(?:good cause|just cause|\bcause(?:s|d|ing)?\b)[\s\S]{0,1200}(?:\bevict\w*|terminat\w*|nonrenew\w*|non-renew\w*|refus\w* to renew|fail\w* to renew)[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|dwelling units?)|(?:\btenan\w*|rental agreements?|dwelling units?)[\s\S]{0,1200}(?:\bevict\w*|terminat\w*|nonrenew\w*|non-renew\w*|refus\w* to renew|fail\w* to renew)[\s\S]{0,1200}(?:good cause|just cause|\bcause(?:s|d|ing)?\b)` / code:55\.1- (897 units) / 12 hits: 55.1-1234, 55.1-1240, 55.1-1240#v2, 55.1-1241, 55.1-1243.1, 55.1-1244, 55.1-1244#v2, 55.1-1250, 55.1-1258, 55.1-1258#v2, 55.1-1314, 55.1-1314#v2
- `\A(?=[\s\S]*(?:good cause|just cause))(?=[\s\S]*\btenan\w*)(?=[\s\S]*(?:\bevict\w*|terminat\w*|nonrenew\w*|non-renew\w*|refus\w* to renew|fail\w* to renew))` / code (34494 units) / 9 hits: 3.2-6569, 15.2-2286, 15.2-2286#v2, 20-107.3, 36-106, 38.2-4905, 55.1-1243.1, 55.1-1258#v2, 55.1-1314#v2
- `\b(?:reason|reasons|grounds?)\b[\s\S]{0,1200}\b(?:nonrenew\w*|not renew\w*|terminat\w*)\b` / code:55\.1-12 (91 units) / 5 hits: 55.1-1226, 55.1-1234.1, 55.1-1244#v2, 55.1-1258, 55.1-1258#v2
- `any other reason not prohibited by law` / code (34494 units) / 2 hits: 55.1-1258, 55.1-1258#v2
- positive [4] 55.1-1258: passed
**VA-G-0408** [single-family-zone-lease-limit]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:owner[- ]occup\w*|occupied by the (?:property )?owner|owner\W{0,3}s? (?:primary|principal) residence|primary residence of the owner)[\s\S]{0,1200}(?:\brent\w*|\blease\w*|\blet\b|tenan\w*)|(?:\brent\w*|\blease\w*|\blet\b|tenan\w*)[\s\S]{0,1200}(?:owner[- ]occup\w*|occupied by the (?:property )?owner|owner\W{0,3}s? (?:primary|principal) residence|primary residence of the owner)` / code:15\.2-|code:36-|code:55\.1- (2333 units) / 4 hits: 15.2-958, 15.2-983, 15.2-987, 15.2-2292.4
- `\A(?=[\s\S]*(?:owner[- ]occup\w*|occupied by the (?:property )?owner|owner\W{0,3}s? (?:primary|principal) residence|primary residence of the owner))(?=[\s\S]*(?:single[- ]family|zoning|zoned|residential district))(?=[\s\S]*(?:\brent\w*|\blease\w*|\blet\b|tenan\w*))` / code (34494 units) / 6 hits: 15.2-958, 15.2-983, 15.2-987, 15.2-2292.4, 36-166, 55.1-1200
- `(?:single[- ]family|zoning|zoned|residential district)[\s\S]{0,1200}\b(?:prohibit\w*|restrict\w*|limit\w*)\b[\s\S]{0,1200}\b(?:rent\w*|leas\w*)\b` / code:15\.2-22 (153 units) / 5 hits: 15.2-2201, 15.2-2201#v2, 15.2-2201#v3, 15.2-2209.4, 15.2-2288.9
- `number of unrelated persons` / code (34494 units) / 2 hits: 15.2-2286, 15.2-2286#v2
- `\b(?:live|lives|living|reside|resides|residing)\b[\s\S]{0,200}\b(?:on the (?:same )?(?:lot|property|parcel))\b` / code (34494 units) / 6 hits: 3.2-6540.03, 3.2-6540.04, 3.2-6541, 15.2-2292.4, 18.2-52.2, 23.1-2603
- positive [3] 15.2-2286: passed
- positive [0] 15.2-983: passed
**VA-G-0409** [owner-move-in-reservation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `owner[- ]move[- ]in|owner occupancy|own personal use|for (?:his|her|their) own use|(?:landlord|owner)\W{0,3}s? (?:own|personal) use` / all (35536 units) / 25 hits: 3.2-4764, 15.2-2292.4, 17.1-316, 18.2-118, 18.2-186.3, 18.2-248.1, 29.1-516, 29.1-539, 29.1-801, 38.2-1220, 45.2-1706.1, 46.2-451 +13
- `(?:owner|landlord|lessor)\W{0,3}s?\b[\s\S]{0,60}\b(?:own use|personal use|occupy|occupancy|move in|moves in|reside|residence|family member|immediate family)[\s\S]{0,1200}(?:terminat\w*|recover\w* (?:of )?possession|evict\w*|end\w* the (?:lease|tenancy|rental agreement))|(?:terminat\w*|recover\w* (?:of )?possession|evict\w*|end\w* the (?:lease|tenancy|rental agreement))[\s\S]{0,1200}(?:owner|landlord|lessor)\W{0,3}s?\b[\s\S]{0,60}\b(?:own use|personal use|occupy|occupancy|move in|moves in|reside|residence|family member|immediate family)` / code:55\.1- (897 units) / 10 hits: 55.1-709, 55.1-1201, 55.1-1237, 55.1-1249, 55.1-1253, 55.1-1308, 55.1-1410, 55.1-1937, 55.1-2210, 55.1-2507
- `\A(?=[\s\S]*(?:owner|landlord)\W{0,3}s?\b[\s\S]{0,60}\b(?:occupy|occupancy|reside|own use|personal use))(?=[\s\S]*(?:terminat\w*|recover\w* (?:of )?possession|evict\w*|end\w* the (?:lease|tenancy|rental agreement)))(?=[\s\S]*\btenants?\b)` / code:55\.1- (897 units) / 9 hits: 55.1-1201, 55.1-1203#v2, 55.1-1237, 55.1-1249, 55.1-1253, 55.1-1300, 55.1-1302, 55.1-1410, 55.1-1937
- `early termination` / code:55\.1-12 (91 units) / 1 hits: 55.1-1253 / heading-only: 55.1-1235, 55.1-1236
- `\b(?:move|moves|moving)\b[\s\S]{0,1200}\b(?:back|into)\b[\s\S]{0,1200}\b(?:tenant|rental agreement)\b` / code:55\.1-12 (91 units) / 2 hits: 55.1-1226, 55.1-1240#v2
- positive [3] 55.1-1253: passed
**VA-G-0410** [term-change-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:increas\w*|rais\w*|chang\w*|modif\w*|amend\w*)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\bnotices?\b|\bnotices?\b[\s\S]{0,1200}\b(?:increas\w*|rais\w*|chang\w*|modif\w*|amend\w*)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b` / code:55\.1-12 (91 units) / 8 hits: 55.1-1204, 55.1-1204#v2, 55.1-1241, 55.1-1244#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1258#v2
- `\A(?=[\s\S]*\b(?:increas\w*|chang\w*)\b[\s\S]{0,200}\b(?:fees?|charges?)\b)(?=[\s\S]*\bnotice)` / code:55\.1-12 (91 units) / 1 hits: 55.1-1258#v2
- `unilateral change` / code:55\.1- (897 units) / 2 hits: 55.1-1204, 55.1-1204#v2
- `(?:change|modification)s? (?:in|of|to) (?:the )?terms` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-1204, 55.1-1204#v2, 55.1-1302 / heading-only: 55.1-1225
- positive [2] 55.1-1204: passed
- positive [3] 55.1-1225: recorded as failed
**VA-G-0411** [term-change-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0410 (positive 55.1-1225 failed: the section says "change ... in any terms"; window widened)
- `\b(?:increas\w*|rais\w*|chang\w*|modif\w*|amend\w*)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\bnotices?\b|\bnotices?\b[\s\S]{0,1200}\b(?:increas\w*|rais\w*|chang\w*|modif\w*|amend\w*)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b` / code:55\.1-12 (91 units) / 8 hits: 55.1-1204, 55.1-1204#v2, 55.1-1241, 55.1-1244#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1258#v2
- `\A(?=[\s\S]*\b(?:increas\w*|chang\w*)\b[\s\S]{0,1200}\b(?:fees?|charges?)\b)(?=[\s\S]*\bnotice)` / code:55\.1-12 (91 units) / 6 hits: 55.1-1204, 55.1-1204#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1258#v2
- `unilateral change` / code:55\.1- (897 units) / 2 hits: 55.1-1204, 55.1-1204#v2
- `\b(?:change|changes|changed|modification|modifications)\b[\s\S]{0,60}\b(?:in|of|to)\b[\s\S]{0,30}\bterms\b` / code:55\.1-1[2-4] (153 units) / 5 hits: 55.1-1204, 55.1-1204#v2, 55.1-1225, 55.1-1301, 55.1-1302
- positive [2] 55.1-1204: passed
- positive [3] 55.1-1225: passed
**VA-G-0412** [accessory-dwelling-unit]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `accessory dwellings?|\bADUs?\b` / all (35536 units) / 3 hits: 15.2-2292.4, 36-139.9, 13VAC5-63-210
- `accessory (?:apartments?|living units?|units?|suites?)|granny flats?|in-law (?:suites?|apartments?|units?)|secondary dwellings?|second dwelling units?|backyard cottages?|carriage houses?` / all (35536 units) / 0 hits
- `\baccessory\b[\s\S]{0,1200}\b(?:dwelling units?|residential units?)\b[\s\S]{0,1200}\b(?:rent\w*|leas\w*|tenan\w*)\b|\b(?:rent\w*|leas\w*|tenan\w*)\b[\s\S]{0,1200}\b(?:dwelling units?|residential units?)\b[\s\S]{0,1200}\baccessory\b` / code (34494 units) / 1 hits: 15.2-2292.4
- `\A(?=[\s\S]*\baccessory\b)(?=[\s\S]*\bdwelling units?\b)(?=[\s\S]*\b(?:rent\w*|leas\w*)\b)` / code (34494 units) / 3 hits: 4.1-100#v2, 15.2-2292.4, 36-139.9
- positive [0] 15.2-2292.4: passed
**VA-G-0413** [home-business]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `home[- ]based business(?:es)?|home occupations?|home businesses|home business` / all (35536 units) / 7 hits: 10.1-1425.27, 15.2-2288.1, 55.1-1821, 55.1-2310, 58.1-439.12:07, 2024 Acts ch. 54, 2024 Acts ch. 511
- `\b(?:business|commercial|occupation)\w*\b[\s\S]{0,1200}\b(?:dwelling units?|residence)\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?|lessees?)\b|\b(?:tenants?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:dwelling units?|residence)\b[\s\S]{0,1200}\b(?:business|commercial|occupation)\w*\b` / code:55\.1-12 (91 units) / 17 hits: 55.1-1200, 55.1-1202, 55.1-1202#v2, 55.1-1204, 55.1-1204#v2, 55.1-1209#v2, 55.1-1212, 55.1-1212.1, 55.1-1215, 55.1-1226, 55.1-1229, 55.1-1234.1 +5
- `\A(?=[\s\S]*(?:home[- ]based business|home occupation|home business))(?=[\s\S]*\b(?:tenants?|lessees?|rental)\b)` / code (34494 units) / 0 hits
- `work(?:ing)? from home|work at home|telework\w*|remote work\w*` / code:55\.1-|code:15\.2- (897 units) / 0 hits
- `only as a residence` / code:55\.1-12 (91 units) / 1 hits: 55.1-1232
- positive [4] 55.1-1232: passed
- positive [0] 55.1-1821: passed
**VA-G-0414** [student-housing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:students?|dormitor(?:y|ies)|residence halls?|universit(?:y|ies)|colleges?|institutions? of higher education)\b[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b)[\s\S]{0,1200}\b(?:students?|dormitor(?:y|ies)|residence halls?|universit(?:y|ies)|colleges?|institutions? of higher education)\b` / code:55\.1- (897 units) / 0 hits
- `\A(?=[\s\S]*\b(?:students?|dormitor(?:y|ies)|residence halls?|universit(?:y|ies)|colleges?|institutions? of higher education)\b)(?=[\s\S]*(?:\btenants?\b|rental agreements?))` / code (34494 units) / 9 hits: 2.2-3705.2, 15.2-1133, 15.2-2403, 23.1-2607, 36-99.5, 54.1-1101, 56-484.19, 58.1-811, 58.1-811#v2
- `student housing|student apartments?|student dwellings?|student rentals?` / all (35536 units) / 4 hits: 23.1-802, 23.1-802.2, 23.1-1100, 54.1-3408
- `\bparents?\b[\s\S]{0,1200}\b(?:guarant\w*|co-?sign\w*)\b[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b)[\s\S]{0,1200}\b(?:guarant\w*|co-?sign\w*)\b[\s\S]{0,1200}\bparents?\b` / code:55\.1- (897 units) / 0 hits
- `educational, counseling, religious` / code:55\.1-12 (91 units) / 1 hits: 55.1-1201
- positive [4] 55.1-1201: passed
- positive [2] 23.1-802.2: passed
**VA-G-0415** [seasonal-tenancy]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:seasonal|seasons?|summer|winter|vacation|resort|holiday)\b[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b|dwelling units?)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b|dwelling units?)[\s\S]{0,1200}\b(?:seasonal|seasons?|summer|winter|vacation|resort|holiday)\b` / code:55\.1- (897 units) / 4 hits: 55.1-1201, 55.1-1220, 55.1-1244, 55.1-1244#v2
- `\A(?=[\s\S]*\b(?:seasonal|vacation)\b)(?=[\s\S]*(?:\btenants?\b|rental agreements?))` / code (34494 units) / 8 hits: 4.1-206.3, 15.2-2286, 15.2-2286#v2, 21-118, 55.1-1201, 59.1-280.1, 59.1-284.30, 59.1-284.31
- `seasonal (?:tenan\w*|rentals?|leases?|occupan\w*|dwellings?|housing)|vacation rentals?|summer rentals?` / all (35536 units) / 0 hits
- `\b(?:part of the year|part-year|few months|several months|months of the year)\b` / code:55\.1- (897 units) / 1 hits: 55.1-122
- `vacation residential facility` / code:55\.1-12 (91 units) / 1 hits: 55.1-1201
- positive [4] 55.1-1201: passed
**VA-G-0416** [sfr-occupancy-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bfont\b|\bfonts\b|point type|\d+-point|\bboldface\b|\bbold\b|type size|size of (?:the )?type|\bin type\b|capital letters|all caps|conspicuous\w*|first page|separate writing|separate written)[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b)[\s\S]{0,1200}(?:\bfont\b|\bfonts\b|point type|\d+-point|\bboldface\b|\bbold\b|type size|size of (?:the )?type|\bin type\b|capital letters|all caps|conspicuous\w*|first page|separate writing|separate written)` / code:55\.1-1[2-4] (153 units) / 14 hits: 55.1-1202, 55.1-1202#v2, 55.1-1204.1, 55.1-1223, 55.1-1226, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1254, 55.1-1301, 55.1-1302, 55.1-1313 +2
- `\A(?=[\s\S]*(?:\bfont\b|point type|\bboldface\b|\bbold\b|type size|\bin type\b|first page))(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b))` / code (34494 units) / 18 hits: 36-139, 36-139#v2, 46.2-1530, 54.1-1117.1, 54.1-1505, 54.1-2138, 54.1-2139.01, 54.1-2139.1, 55.1-321, 55.1-1202, 55.1-1202#v2, 55.1-1204.1 +6
- `single[- ]family residences?[\s\S]{0,1200}\b(?:occupan\w*|occupy)\b[\s\S]{0,1200}\b(?:disclos\w*|notice)\b` / code (34494 units) / 1 hits: 55.1-1200
- `\b(?:larger|bigger|largest)\b[\s\S]{0,200}\b(?:print|letters|type)\b|\btop of the (?:first )?page\b` / code:55\.1- (897 units) / 2 hits: 55.1-357, 55.1-1976
- `beginning on the first page` / code:55\.1-12 (91 units) / 1 hits: 55.1-1204.1
- positive [4] 55.1-1204.1: passed
- positive [0] 55.1-1202: passed
**VA-G-0417** [certificate-of-occupancy-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:certificates? of occupancy|occupancy permits?|occupancy certificates?|certificates? of use|use and occupancy permits?)[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b|\brent(?:al|ed|ing)?\b)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\blandlords?\b|\brent(?:al|ed|ing)?\b)[\s\S]{0,1200}(?:certificates? of occupancy|occupancy permits?|occupancy certificates?|certificates? of use|use and occupancy permits?)` / all (35536 units) / 7 hits: 15.2-2305, 15.2-2305.1, 36-105, 36-105.1:1, 13VAC5-63-150, 13VAC5-63-470, 13VAC5-63-490
- `\A(?=[\s\S]*(?:certificates? of occupancy|occupancy permits?|occupancy certificates?|certificates? of use|use and occupancy permits?))(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b))` / code,admin (35076 units) / 12 hits: 15.2-907, 15.2-958.3, 36-105, 36-105.1:1, 54.1-1101, 13VAC5-52-150, 13VAC5-63-80, 13VAC5-63-150, 13VAC5-63-200, 13VAC5-63-210, 13VAC5-63-470, 13VAC5-63-490
- `(?:certificates? of occupancy|occupancy permits?|occupancy certificates?|certificates? of use|use and occupancy permits?)` / code:55\.1- (897 units) / 3 hits: 55.1-702, 55.1-1905, 55.1-2172
- `\b(?:legal(?:ly)? to (?:live|occupy)|approved for (?:living|occupancy)|lawful occupancy)\b` / code (34494 units) / 0 hits
- `certificate of occupancy` / code:54\.1-11 (69 units) / 1 hits: 54.1-1101
- positive [4] 54.1-1101: passed
- positive [0] 36-105.1:1: passed
**VA-G-0418** [inspection-condemnation-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:notices? of violation|violation notices?|correction notices?|code violations?|notices? of unsafe|unsafe structures?|condemn\w*|placard\w*|orders? to vacate|vacate orders?)[\s\S]{0,1200}\b(?:disclos\w*|inform\w*|notify\w*|notif\w*|copy|copies|tell)\b[\s\S]{0,1200}(?:prospective tenants?|\btenants?\b|\blessees?\b|rental agreements?)|(?:prospective tenants?|\btenants?\b|\blessees?\b|rental agreements?)[\s\S]{0,1200}\b(?:disclos\w*|inform\w*|notify\w*|notif\w*|copy|copies|tell)\b[\s\S]{0,1200}(?:notices? of violation|violation notices?|correction notices?|code violations?|notices? of unsafe|unsafe structures?|condemn\w*|placard\w*|orders? to vacate|vacate orders?)` / code,admin (35076 units) / 14 hits: 25.1-209, 25.1-417, 28.2-618, 46.2-684.2, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1313, 55.1-2164, 13VAC5-63-150, 13VAC5-63-470, 13VAC5-63-480 +2
- `\A(?=[\s\S]*(?:notices? of violation|violation notices?|correction notices?|code violations?|notices? of unsafe|unsafe structures?|condemn\w*|placard\w*|orders? to vacate|vacate orders?))(?=[\s\S]*\b(?:disclos\w*)\b)(?=[\s\S]*(?:prospective tenants?|\btenants?\b|\blessees?\b|rental agreements?))` / code,admin (35076 units) / 5 hits: 15.2-2286, 15.2-2286#v2, 15.2-2403, 25.1-417, 55.1-2155
- `\bcondemn\w*` / code:55\.1-12 (91 units) / 4 hits: 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2
- `\b(?:problems?|defects?|violations?)\b[\s\S]{0,1200}\b(?:before|prior to)\b[\s\S]{0,200}\b(?:signing|execution|entering into)\b` / code:55\.1-12 (91 units) / 0 hits
- `existing plan for tenant displacement` / code:55\.1-12 (91 units) / 1 hits: 55.1-1216
- positive [4] 55.1-1216: passed
- positive [2] 55.1-1243.2: passed
**VA-G-0419** [condemned-premises-rent-bar]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:condemn\w*|unfit for (?:human )?(?:habitation|occupancy)|unsafe structures?|placard\w*|orders? to vacate|ordered to vacate|prohibited from occupancy|occupancy (?:has been )?prohibited)[\s\S]{0,1200}\b(?:rent|rents|rental payments?)\b|\b(?:rent|rents|rental payments?)\b[\s\S]{0,1200}(?:condemn\w*|unfit for (?:human )?(?:habitation|occupancy)|unsafe structures?|placard\w*|orders? to vacate|ordered to vacate|prohibited from occupancy|occupancy (?:has been )?prohibited)` / code,admin (35076 units) / 15 hits: 8.01-76, 15.2-5406, 21-168, 21-248, 25.1-417, 28.2-623, 33.2-1230, 33.2-3805, 36-51, 36-51.1, 55.1-1241, 55.1-1243.2 +3
- `\A(?=[\s\S]*(?:condemn\w*|unfit for (?:human )?(?:habitation|occupancy)|unsafe structures?|placard\w*|orders? to vacate|ordered to vacate|prohibited from occupancy|occupancy (?:has been )?prohibited))(?=[\s\S]*\b(?:rent|rents|rental payments?)\b)(?=[\s\S]*\btenants?\b)` / code,admin (35076 units) / 9 hits: 15.2-5406, 21-118.4, 25.1-417, 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1982, 55.1-2164
- `(?:no|not)\b[\s\S]{0,60}\b(?:collect|demand|receive|recover)\w*\b[\s\S]{0,60}\brent\b` / code:55\.1-12|code:36- (91 units) / 3 hits: 55.1-1204, 55.1-1204#v2, 55.1-1250
- `\b(?:can\W?t|cannot|may not|shall not)\b[\s\S]{0,200}\b(?:live|stay|occupy)\b` / code:55\.1-12 (91 units) / 0 hits
- `subsequent to the unit being condemned` / code:55\.1-12 (91 units) / 1 hits: 55.1-1243.2
- positive [4] 55.1-1243.2: passed
**VA-G-0420** [sanitary-code-variance]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:variances?|modifications?|exceptions?|waivers?|exemptions?)\b[\s\S]{0,1200}\b(?:notice|notify|copy|copies|attach\w*|post\w*|provide\w*)\b[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\boccupants?\b)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\boccupants?\b)[\s\S]{0,1200}\b(?:notice|notify|copy|copies|attach\w*|post\w*|provide\w*)\b[\s\S]{0,1200}\b(?:variances?|modifications?|exceptions?|waivers?|exemptions?)\b` / code:36-|admin:13VAC5-63 (344 units) / 5 hits: 36-37, 36-96.2, 36-96.2#v2, 36-105, 36-105.1:1
- `\A(?=[\s\S]*\b(?:variances?|modifications?)\b)(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b))` / code:36-|admin (344 units) / 1 hits: 36-105
- `\b(?:health|sanitary|housing|building|maintenance) code\b[\s\S]{0,300}\b(?:variances?|modifications?|exceptions?|waivers?)\b` / all (35536 units) / 32 hits: 36-98.1, 36-99, 36-105, 36-118, 54.1-402, 13VAC5-52-150, 13VAC5-52-180, 13VAC5-52-200, 13VAC5-52-210, 13VAC5-52-220, 13VAC5-52-240, 13VAC5-52-260 +20
- `Issuance of modifications` / admin (582 units) / 3 hits: 13VAC5-63-60, 13VAC5-63-420, 13VAC5-63-480
- `\b(?:allowed|permitted|approved)\b[\s\S]{0,100}\b(?:instead of|in place of|in lieu of)\b[\s\S]{0,100}\b(?:requirements?|code)\b` / code:36- (344 units) / 0 hits
- positive [3] 13VAC5-63-480: passed
- positive [1] 36-105: passed
**VA-G-0421** [sanitary-code-variance]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0420 (scope strings "code:36-|admin..." matched Title 36 only; rerun with comma-separated scopes)
- `\b(?:variances?|modifications?|exceptions?|waivers?|exemptions?)\b[\s\S]{0,1200}\b(?:notice|notify|copy|copies|attach\w*|post\w*|provide\w*)\b[\s\S]{0,1200}(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\boccupants?\b)|(?:\btenan\w*|rental agreements?|\blease\b|\bleases\b|\blessees?\b|\boccupants?\b)[\s\S]{0,1200}\b(?:notice|notify|copy|copies|attach\w*|post\w*|provide\w*)\b[\s\S]{0,1200}\b(?:variances?|modifications?|exceptions?|waivers?|exemptions?)\b` / code:36-,admin (926 units) / 27 hits: 36-37, 36-96.2, 36-96.2#v2, 36-105, 36-105.1:1, 13VAC5-52-70, 13VAC5-52-90, 13VAC5-52-110, 13VAC5-52-150, 13VAC5-52-160, 13VAC5-52-220, 13VAC5-52-540 +15
- `\A(?=[\s\S]*\b(?:variances?|modifications?)\b)(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b))` / code,admin (35076 units) / 24 hits: 8.2A-103, 8.2A-209, 8.2A-407, 15.2-852, 15.2-2286, 15.2-2286#v2, 15.2-2287.1, 15.2-2289, 15.2-2310, 36-105, 46.2-1232, 46.2-1569 +12
- `\b(?:health|sanitary|housing|building|maintenance) code\b[\s\S]{0,300}\b(?:variances?|modifications?|exceptions?|waivers?)\b` / all (35536 units) / 32 hits: 36-98.1, 36-99, 36-105, 36-118, 54.1-402, 13VAC5-52-150, 13VAC5-52-180, 13VAC5-52-200, 13VAC5-52-210, 13VAC5-52-220, 13VAC5-52-240, 13VAC5-52-260 +20
- `Issuance of modifications` / admin (582 units) / 3 hits: 13VAC5-63-60, 13VAC5-63-420, 13VAC5-63-480
- `\b(?:allowed|permitted|approved)\b[\s\S]{0,100}\b(?:instead of|in place of|in lieu of)\b[\s\S]{0,100}\b(?:requirements?|code)\b` / code:36-,admin (926 units) / 0 hits
- positive [3] 13VAC5-63-480: passed
- positive [1] 36-105: passed
- positive [0] 36-105: passed
**VA-G-0422** [substandard-property-receivership]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\breceivers?(?:hip|ships)?\b[\s\S]{0,1200}\b(?:derelict|blight\w*|spot blight)\b|\b(?:derelict|blight\w*|spot blight)\b[\s\S]{0,1200}\breceivers?(?:hip|ships)?\b` / all (35536 units) / 1 hits: 15.2-907.2
- `\breceivers?(?:hip|ships)?\b[\s\S]{0,1200}(?:\btenan\w*|\brents?\b|dwelling units?|rental)|(?:\btenan\w*|\brents?\b|dwelling units?|rental)[\s\S]{0,1200}\breceivers?(?:hip|ships)?\b` / code:(?:15\.2|36|55\.1)- (3574 units) / 15 hits: 15.2-907.2, 15.2-2609, 15.2-4910, 15.2-5213, 15.2-5357, 15.2-5382, 15.2-6616, 15.2-6642, 15.2-7217, 15.2-7416, 36-22, 36-33 +3
- `\A(?=[\s\S]*\breceivers?(?:hip|ships)?\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\b(?:repair\w*|code|uninhabit\w*|substandard)\b)` / code (34494 units) / 0 hits
- `\bsubstandard\b[\s\S]{0,1200}\b(?:housing|dwellings?|buildings?|propert(?:y|ies))\b` / code:(?:15\.2|36|55\.1)- (3574 units) / 6 hits: 15.2-735, 36-51, 36-51.1, 36-55.25, 36-55.35, 36-99.01
- `\b(?:takes? over|take control|run the building|manage the property)\b` / code:(?:15\.2|36|55\.1)- (3574 units) / 8 hits: 15.2-816, 15.2-930, 15.2-934, 15.2-2109, 15.2-5334, 15.2-5344, 36-26, 36-55.31
- positive [0] 15.2-907.2: passed
**VA-G-0423** [governmental-fines]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:fines?|penalt(?:y|ies)|civil penalt(?:y|ies)|citations?|summons(?:es)?|abatement costs?|costs? of (?:the )?abatement)\b[\s\S]{0,1200}\b(?:reimburs\w*|pass\w*(?: on| through)?|charg\w* (?:to|against) the tenant|recover\w*|indemnif\w*|liable to the (?:owner|landlord))\b[\s\S]{0,1200}(?:\btenan\w*|\blessees?\b|\boccupants?\b|rental agreements?)|(?:\btenan\w*|\blessees?\b|\boccupants?\b|rental agreements?)[\s\S]{0,1200}\b(?:reimburs\w*|pass\w*(?: on| through)?|charg\w* (?:to|against) the tenant|recover\w*|indemnif\w*|liable to the (?:owner|landlord))\b[\s\S]{0,1200}\b(?:fines?|penalt(?:y|ies)|civil penalt(?:y|ies)|citations?|summons(?:es)?|abatement costs?|costs? of (?:the )?abatement)\b` / code:(?:15\.2|36|55\.1)-,admin:13VAC5 (3779 units) / 9 hits: 55.1-1204, 55.1-1204#v2, 55.1-1209, 55.1-1209#v2, 55.1-1240#v2, 55.1-1245#v2, 55.1-1250, 55.1-1253, 55.1-1258#v2
- `\A(?=[\s\S]*\b(?:fines?|civil penalt(?:y|ies))\b)(?=[\s\S]*\b(?:reimburs\w*|indemnif\w*)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / code (34494 units) / 6 hits: 21-118.4, 33.2-503, 46.2-1231, 46.2-1232, 55.1-358, 55.1-2133
- `liable to the owner|liable to the landlord|reimburse the (?:owner|landlord)` / all (35536 units) / 14 hits: 3.2-6019, 8.01-156, 18.2-104.1, 25.1-318, 25.1-418, 32.1-164.1:01, 33.2-1029.1, 36-51, 36-96.2, 36-96.2#v2, 55.1-1230, 55.1-1305 +2
- `\b(?:ticket|tickets|ticketed)\b[\s\S]{0,1200}\b(?:lessors?|sublessors?|owners?|tenants?)\b` / code:36- (344 units) / 1 hits: 36-106
- `lessor or sublessor of a residential dwelling unit` / code:36- (344 units) / 1 hits: 36-106
- positive [4] 36-106: passed
- positive [3] 36-106: passed
**VA-G-0424** [lease-registration]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:rental agreements?|\bleases?\b|\blease agreements?\b|memorand(?:um|a) of (?:such )?lease)[\s\S]{0,1200}\b(?:record|recorded|recordation|recording|register|registered|registration|registry|file|filed|filing)\b|\b(?:record|recorded|recordation|recording|register|registered|registration|registry|file|filed|filing)\b[\s\S]{0,1200}(?:rental agreements?|\bleases?\b|\blease agreements?\b|memorand(?:um|a) of (?:such )?lease)` / code:55\.1-12 (91 units) / 25 hits: 55.1-1201, 55.1-1204, 55.1-1204#v2, 55.1-1211, 55.1-1216, 55.1-1217, 55.1-1226, 55.1-1229, 55.1-1230, 55.1-1234.1, 55.1-1237, 55.1-1238 +13
- `\A(?=[\s\S]*(?:rental agreements?|residential lease))(?=[\s\S]*\b(?:recorded|recordation|registration)\b)(?=[\s\S]*\b(?:clerk|land records|circuit court)\b)` / code (34494 units) / 3 hits: 46.2-819.1, 46.2-819.3:1, 46.2-819.5
- `memorand(?:um|a) of (?:such )?lease` / code (34494 units) / 2 hits: 55.1-1601, 55.1-2117
- `\b(?:put|place|file)\w*\b[\s\S]{0,200}\b(?:on record|in the land records|with the clerk)\b` / code:55\.1- (897 units) / 11 hits: 55.1-339, 55.1-650, 55.1-651, 55.1-652, 55.1-1829, 55.1-1941, 55.1-2211, 55.1-2223, 55.1-3101, 55.1-3102, 55.1-3103
- `mere possession of real estate` / code:55\.1- (897 units) / 1 hits: 55.1-407
- positive [2] 55.1-1601: passed
- positive [4] 55.1-407: passed
**VA-G-0425** [lease-registration]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0424 (term [0] of VA-G-0424 included "file/filed/filing", which catches court filings; narrowed to recording and registration words)
- `(?:rental agreements?|\bleases?\b|\blease agreements?\b)[\s\S]{0,1200}\b(?:record|recorded|recordation|recording|register|registered|registration|registry)\b|\b(?:record|recorded|recordation|recording|register|registered|registration|registry)\b[\s\S]{0,1200}(?:rental agreements?|\bleases?\b|\blease agreements?\b)` / code:55\.1-12 (91 units) / 7 hits: 55.1-1204, 55.1-1204#v2, 55.1-1211, 55.1-1216, 55.1-1217, 55.1-1244.1, 55.1-1257
- `(?:admitted to record|recorded in the (?:county|city)|land records)[\s\S]{0,1200}(?:rental agreements?|\btenan\w*)|(?:rental agreements?|\btenan\w*)[\s\S]{0,1200}(?:admitted to record|recorded in the (?:county|city)|land records)` / code (34494 units) / 6 hits: 25.1-306, 33.2-1020, 36-105, 36-177, 55.1-609, 58.1-3960
- `memorand(?:um|a) of (?:such )?lease` / code (34494 units) / 2 hits: 55.1-1601, 55.1-2117
- positive [2] 55.1-1601: passed
**VA-G-0426** [special-district-representation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:service districts?|special (?:taxing|tax|assessment|service|improvement) districts?|community development authorit(?:y|ies)|special assessments?|transportation (?:service|improvement) districts?|business improvement districts?|tax increment)[\s\S]{0,1200}(?:\btenan\w*|\blessees?\b|rental agreements?|\bleases\b|\blease\b|\brenters?\b)|(?:\btenan\w*|\blessees?\b|rental agreements?|\bleases\b|\blease\b|\brenters?\b)[\s\S]{0,1200}(?:service districts?|special (?:taxing|tax|assessment|service|improvement) districts?|community development authorit(?:y|ies)|special assessments?|transportation (?:service|improvement) districts?|business improvement districts?|tax increment)` / code (34494 units) / 10 hits: 15.2-2403, 15.2-5114, 15.2-5114#v2, 15.2-5158, 33.2-2103, 55.1-2209, 55.1-2244, 58.1-3231, 58.1-3234, 64.2-1068
- `\A(?=[\s\S]*(?:service districts?|special (?:taxing|tax|assessment|service|improvement) districts?|community development authorit(?:y|ies)|special assessments?|transportation (?:service|improvement) districts?|business improvement districts?|tax increment))(?=[\s\S]*\b(?:disclos\w*)\b)(?=[\s\S]*(?:\btenan\w*|\blessees?\b|rental agreements?|\bleases\b|\blease\b|\brenters?\b))` / code (34494 units) / 2 hits: 15.2-2403, 55.1-2244
- `(?:service districts?|special (?:taxing|tax|assessment|service|improvement) districts?|community development authorit(?:y|ies)|special assessments?|transportation (?:service|improvement) districts?|business improvement districts?|tax increment)` / code:55\.1-12 (91 units) / 0 hits
- `\b(?:extra|additional|special)\b[\s\S]{0,100}\b(?:taxes|assessments?|levies)\b[\s\S]{0,300}\b(?:tenants?|renters?)\b` / code (34494 units) / 1 hits: 64.2-1068
- `service districts?` / code:15\.2-24 (67 units) / 9 hits: 15.2-2400, 15.2-2401, 15.2-2402, 15.2-2402.1, 15.2-2403, 15.2-2403.1, 15.2-2403.2, 15.2-2403.3, 15.2-2403.4
- positive [4] 15.2-2400: passed
**VA-G-0427** [rent-tax]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:tax|taxes|taxed|taxable|excise|levy|levied)\b[\s\S]{0,1200}(?:\brents?\b|\brental (?:of|for) (?:a )?(?:dwelling|residential|apartment)|residential (?:rent|rental|lease)|dwelling units?|apartments?)|(?:\brents?\b|\brental (?:of|for) (?:a )?(?:dwelling|residential|apartment)|residential (?:rent|rental|lease)|dwelling units?|apartments?)[\s\S]{0,1200}\b(?:tax|taxes|taxed|taxable|excise|levy|levied)\b` / code:58\.1- (1832 units) / 25 hits: 58.1-302, 58.1-339.7, 58.1-402, 58.1-417, 58.1-439.12:04, 58.1-439.12:06, 58.1-486.2, 58.1-603, 58.1-603#v2, 58.1-612, 58.1-623.2, 58.1-1003.3 +13
- `\A(?=[\s\S]*\b(?:tax|taxes)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:residential|dwelling)\b)(?=[\s\S]*\brents?\b)` / code:58\.1- (1832 units) / 1 hits: 58.1-439.12:04
- `(?:rent|rental|lease) tax|tax on (?:residential )?(?:rent|rents|rentals|leases)|tax upon (?:residential )?(?:rent|rents)` / all (35536 units) / 26 hits: 15.2-2403, 38.2-1410, 44-146.28:2, 58.1-439.12:06, 58.1-439.12:08, 58.1-461, 58.1-486.2, 58.1-490, 58.1-1736, 58.1-1738, 58.1-1741, 58.1-1821 +14
- `accommodations furnished to transients` / code:58\.1-6 (114 units) / 4 hits: 58.1-602, 58.1-603, 58.1-603#v2, 58.1-609.5
- `\b(?:tax|taxes)\b[\s\S]{0,1200}\b(?:tenants?|renters?)\b[\s\S]{0,1200}\b(?:pass\w*|collect\w*|add\w*)\b` / code:58\.1- (1832 units) / 2 hits: 58.1-3212, 58.1-3948
- positive [3] 58.1-602: passed
- positive [0] 58.1-3819: recorded as failed
**VA-G-0428** [rent-tax]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0427 (positive 58.1-3819 failed: the section says "rented"; rent alternatives widened to rented/renting)
- `\b(?:tax|taxes|taxed|taxable|excise|levy|levied)\b[\s\S]{0,1200}(?:\brent(?:s|ed|ing)?\b|\brental (?:of|for) (?:a )?(?:dwelling|residential|apartment)|residential (?:rent|rental|lease)|dwelling units?|apartments?)|(?:\brent(?:s|ed|ing)?\b|\brental (?:of|for) (?:a )?(?:dwelling|residential|apartment)|residential (?:rent|rental|lease)|dwelling units?|apartments?)[\s\S]{0,1200}\b(?:tax|taxes|taxed|taxable|excise|levy|levied)\b` / code:58\.1- (1832 units) / 49 hits: 58.1-302, 58.1-339.7, 58.1-402, 58.1-409, 58.1-410, 58.1-417, 58.1-439.6, 58.1-439.6:1, 58.1-439.12:04, 58.1-439.12:06, 58.1-486.2, 58.1-603 +37
- `\A(?=[\s\S]*\b(?:tax|taxes)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:residential|dwelling)\b)(?=[\s\S]*\brent(?:s|ed|al)?\b)` / code:58\.1- (1832 units) / 1 hits: 58.1-439.12:04
- `(?:rent|rental|lease) tax|tax on (?:residential )?(?:rent|rents|rentals|leases)|tax upon (?:residential )?(?:rent|rents)` / all (35536 units) / 26 hits: 15.2-2403, 38.2-1410, 44-146.28:2, 58.1-439.12:06, 58.1-439.12:08, 58.1-461, 58.1-486.2, 58.1-490, 58.1-1736, 58.1-1738, 58.1-1741, 58.1-1821 +14
- `accommodations furnished to transients` / code:58\.1-6 (114 units) / 4 hits: 58.1-602, 58.1-603, 58.1-603#v2, 58.1-609.5
- `\b(?:tax|taxes)\b[\s\S]{0,1200}\b(?:tenants?|renters?)\b[\s\S]{0,1200}\b(?:pass\w*|collect\w*|add\w*)\b` / code:58\.1- (1832 units) / 2 hits: 58.1-3212, 58.1-3948
- positive [3] 58.1-602: passed
- positive [0] 58.1-3819: passed
**VA-G-0429** [rent-tax]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0428 (term [2] lacked word boundaries, so "rent tax" matched inside "current tax" (current/rent trap))
- `\b(?:tax|taxes|taxed|taxable|excise|levy|levied)\b[\s\S]{0,1200}(?:\brent(?:s|ed|ing)?\b|\brental (?:of|for) (?:a )?(?:dwelling|residential|apartment)|residential (?:rent|rental|lease)|dwelling units?|apartments?)|(?:\brent(?:s|ed|ing)?\b|\brental (?:of|for) (?:a )?(?:dwelling|residential|apartment)|residential (?:rent|rental|lease)|dwelling units?|apartments?)[\s\S]{0,1200}\b(?:tax|taxes|taxed|taxable|excise|levy|levied)\b` / code:58\.1- (1832 units) / 49 hits: 58.1-302, 58.1-339.7, 58.1-402, 58.1-409, 58.1-410, 58.1-417, 58.1-439.6, 58.1-439.6:1, 58.1-439.12:04, 58.1-439.12:06, 58.1-486.2, 58.1-603 +37
- `\A(?=[\s\S]*\b(?:tax|taxes)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:residential|dwelling)\b)(?=[\s\S]*\brent(?:s|ed|al)?\b)` / code:58\.1- (1832 units) / 1 hits: 58.1-439.12:04
- `\b(?:rent|rental|lease) tax(?:es)?\b|\btax(?:es)? on (?:residential )?(?:rent|rents|rentals|leases)\b|\btax(?:es)? upon (?:residential )?(?:rent|rents)\b` / all (35536 units) / 4 hits: 15.2-2403, 44-146.28:2, 58.1-1736, 58.1-1741
- `accommodations furnished to transients` / code:58\.1-6 (114 units) / 4 hits: 58.1-602, 58.1-603, 58.1-603#v2, 58.1-609.5
- `\b(?:tax|taxes)\b[\s\S]{0,1200}\b(?:tenants?|renters?)\b[\s\S]{0,1200}\b(?:pass\w*|collect\w*|add\w*)\b` / code:58\.1- (1832 units) / 2 hits: 58.1-3212, 58.1-3948
- positive [3] 58.1-602: passed
- positive [0] 58.1-3819: passed
- positive [2] 58.1-1736: passed
**VA-G-0430** [tax-escalation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:real estate tax\w*|real property tax\w*|property tax\w*|\btaxes\b|tax increases?|assessments?)[\s\S]{0,1200}\b(?:escalat\w*|increas\w*|pass\w* (?:on|through)|reimburs\w*|pay the taxes|share of)\b[\s\S]{0,1200}(?:\btenan\w*|\blessees?\b|rental agreements?)|(?:\btenan\w*|\blessees?\b|rental agreements?)[\s\S]{0,1200}\b(?:escalat\w*|increas\w*|pass\w* (?:on|through)|reimburs\w*|pay the taxes|share of)\b[\s\S]{0,1200}(?:real estate tax\w*|real property tax\w*|property tax\w*|\btaxes\b|tax increases?|assessments?)` / code:55\.1-1[2-6] (169 units) / 1 hits: 55.1-1602
- `\A(?=[\s\S]*(?:real estate tax|real property tax|property tax))(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\brent(?:s|al)?\b)` / code (34494 units) / 9 hits: 15.2-907, 15.2-5431.27, 18.2-340.16, 25.1-417, 36-105.1:1, 58.1-602, 58.1-3510.4, 58.1-3510.6, 58.1-3901
- `tax escalat\w*|escalation clauses?|tax stop|pass[- ]through of (?:taxes|tax increases)` / all (35536 units) / 0 hits
- `to pay the taxes` / code:55\.1-16 (10 units) / 1 hits: 55.1-1602
- `\b(?:higher|went up|goes up|raise\w*)\b[\s\S]{0,300}\b(?:taxes|tax bill)\b[\s\S]{0,300}\brent\b` / code (34494 units) / 0 hits
- positive [3] 55.1-1602: passed
- positive [1] 58.1-3295: recorded as failed
**VA-G-0431** [tax-escalation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0430 (positive 58.1-3295 recorded as failed (its text says real estate assessor, not real estate tax); positive moved to § 58.1-3901 and a Chapter 39 limb added)
- `(?:real estate tax\w*|real property tax\w*|property tax\w*|\btaxes\b|tax increases?|assessments?)[\s\S]{0,1200}\b(?:escalat\w*|increas\w*|pass\w* (?:on|through)|reimburs\w*|pay the taxes|share of)\b[\s\S]{0,1200}(?:\btenan\w*|\blessees?\b|rental agreements?)|(?:\btenan\w*|\blessees?\b|rental agreements?)[\s\S]{0,1200}\b(?:escalat\w*|increas\w*|pass\w* (?:on|through)|reimburs\w*|pay the taxes|share of)\b[\s\S]{0,1200}(?:real estate tax\w*|real property tax\w*|property tax\w*|\btaxes\b|tax increases?|assessments?)` / code:55\.1-1[2-6] (169 units) / 1 hits: 55.1-1602
- `\A(?=[\s\S]*(?:real estate tax|real property tax|property tax))(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\brent(?:s|al)?\b)` / code (34494 units) / 9 hits: 15.2-907, 15.2-5431.27, 18.2-340.16, 25.1-417, 36-105.1:1, 58.1-602, 58.1-3510.4, 58.1-3510.6, 58.1-3901
- `tax escalat\w*|escalation clauses?|tax stop|pass[- ]through of (?:taxes|tax increases)` / all (35536 units) / 0 hits
- `to pay the taxes` / code:55\.1-16 (10 units) / 1 hits: 55.1-1602
- `\btaxes\b[\s\S]{0,1200}\btenants?\b[\s\S]{0,1200}\b(?:rents?|credit)\b|\btenants?\b[\s\S]{0,1200}\btaxes\b[\s\S]{0,1200}\b(?:rents?|credit)\b` / code:58\.1-39 (125 units) / 1 hits: 58.1-3944
- positive [3] 55.1-1602: passed
- positive [1] 58.1-3901: passed
- positive [4] 58.1-3944: passed
**VA-G-0432** [property-tax-rent-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:real estate tax\w*|real property tax\w*|property tax\w*)[\s\S]{0,1200}\b(?:statements?|certificat\w*|portion|share|attributable|percentage)\b[\s\S]{0,1200}\brent(?:s|al|ed)?\b|\brent(?:s|al|ed)?\b[\s\S]{0,1200}\b(?:statements?|certificat\w*|portion|share|attributable|percentage)\b[\s\S]{0,1200}(?:real estate tax\w*|real property tax\w*|property tax\w*)` / all (35536 units) / 10 hits: 15.2-104, 55.1-2244, 55.1-2310, 55.1-3003, 58.1-1740, 58.1-3506, 58.1-3510.4, 58.1-3510.5, 2024 Acts ch. 54, 2024 Acts ch. 511
- `renters?'? (?:tax )?(?:credits?|rebates?|relief|refunds?)|rent (?:credits?|rebates?|relief grants?)|circuit[- ]breaker|rent constituting property tax` / all (35536 units) / 10 hits: 17.1-1002, 18.2-85, 22.1-253.13:1, 45.2-501, 45.2-810, 45.2-822, 45.2-928, 45.2-935, 45.2-1101, 13VAC5-63-540 / heading-only: 45.2-929
- `\A(?=[\s\S]*(?:real estate tax\w*|real property tax\w*|property tax\w*))(?=[\s\S]*\b(?:renters?|tenants?)\b)(?=[\s\S]*\b(?:credit|relief|rebate|refund)\b)` / code:58\.1- (1832 units) / 5 hits: 58.1-602, 58.1-3219.5, 58.1-3219.9, 58.1-3219.14, 58.1-3223
- `\b(?:how much|part|amount)\b[\s\S]{0,200}\brent\b[\s\S]{0,200}\b(?:goes to|pays for|is for)\b[\s\S]{0,100}\btax` / code (34494 units) / 0 hits
- `real estate tax relief` / code:58\.1-32 (148 units) / 1 hits: 58.1-3219.3
- positive [4] 58.1-3210: recorded as failed
**VA-G-0433** [property-tax-rent-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0432 (positive § 58.1-3210 recorded as failed (its text does not use "real estate tax relief"); positives moved to sections read whole)
- `(?:real estate tax\w*|real property tax\w*|property tax\w*)[\s\S]{0,1200}\b(?:statements?|certificat\w*|portion|share|attributable|percentage)\b[\s\S]{0,1200}\brent(?:s|al|ed)?\b|\brent(?:s|al|ed)?\b[\s\S]{0,1200}\b(?:statements?|certificat\w*|portion|share|attributable|percentage)\b[\s\S]{0,1200}(?:real estate tax\w*|real property tax\w*|property tax\w*)` / all (35536 units) / 10 hits: 15.2-104, 55.1-2244, 55.1-2310, 55.1-3003, 58.1-1740, 58.1-3506, 58.1-3510.4, 58.1-3510.5, 2024 Acts ch. 54, 2024 Acts ch. 511
- `renters?'? (?:tax )?(?:credits?|rebates?|relief|refunds?)|rent (?:credits?|rebates?|relief grants?)|circuit[- ]breaker|rent constituting property tax` / all (35536 units) / 10 hits: 17.1-1002, 18.2-85, 22.1-253.13:1, 45.2-501, 45.2-810, 45.2-822, 45.2-928, 45.2-935, 45.2-1101, 13VAC5-63-540 / heading-only: 45.2-929
- `\A(?=[\s\S]*(?:real estate tax\w*|real property tax\w*|property tax\w*))(?=[\s\S]*\b(?:renters?|tenants?)\b)(?=[\s\S]*\b(?:credit|relief|rebate|refund)\b)` / code:58\.1- (1832 units) / 5 hits: 58.1-602, 58.1-3219.5, 58.1-3219.9, 58.1-3219.14, 58.1-3223
- `\b(?:how much|part|amount)\b[\s\S]{0,200}\brent\b[\s\S]{0,200}\b(?:goes to|pays for|is for)\b[\s\S]{0,100}\btax` / code (34494 units) / 0 hits
- `real estate tax relief|exemption or deferral of (?:real estate )?taxes` / code:58\.1-32 (148 units) / 1 hits: 58.1-3219.3 / heading-only: 58.1-3210
- positive [4] 58.1-3219.3: passed
- positive [2] 58.1-3223: passed
**VA-G-0434** [landlord-registration]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:certif\w*|regist\w*|licens\w*)[\s\S]{0,1200}(?:landlord|lessor|renting dwellings|rental (?:dwelling|property|unit|housing)|residential rental)` / saved,admin (589 units) / 7 hits: 18VAC62-20-20, 13VAC5-63-470, 18VAC135-20-10, 18VAC135-20-181, 18VAC135-20-220, 18VAC135-20-280, 18VAC135-20-300
- `(?:landlord|lessor|renting dwellings|rental (?:dwelling|property|unit|housing)|residential rental)[\s\S]{0,1200}(?:certif\w*|regist\w*|licens\w*)` / saved,admin (589 units) / 12 hits: 18VAC62-20-10, 18VAC62-20-20, 13VAC5-63-470, 13VAC5-63-485, 18VAC135-20-10, 18VAC135-20-181, 18VAC135-20-220, 18VAC135-20-280, 18VAC135-20-300, 18VAC135-50-10, 18VAC135-50-90, 18VAC135-50-140
- `\A(?=[\s\S]*(?:certif\w*|regist\w*|licens\w*))(?=[\s\S]*(?:landlord|lessor|renting dwellings|rental (?:dwelling|property|unit|housing)|residential rental))` / saved,admin (589 units) / 15 hits: 18VAC62-20-10, 18VAC62-20-20, 13VAC5-63-470, 13VAC5-63-485, 18VAC135-20-10, 18VAC135-20-181, 18VAC135-20-220, 18VAC135-20-280, 18VAC135-20-300, 18VAC135-50-10, 18VAC135-50-90, 18VAC135-50-110 +3
- positive [0] 18VAC62-20-20: passed
**VA-G-0501** [water-heater-temperature]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bwater heat(?:er|ers|ing)\b|\bhot water (?:heaters?|tanks?|supply|systems?)\b)[\s\S]{0,1200}(?:\btemperatures?\b|\bthermostat(?:s|ic|ically)?\b|\bdegrees?\b|°F|\bscald(?:s|ing)?\b)|(?:\btemperatures?\b|\bthermostat(?:s|ic|ically)?\b|\bdegrees?\b|°F|\bscald(?:s|ing)?\b)[\s\S]{0,1200}(?:\bwater heat(?:er|ers|ing)\b|\bhot water (?:heaters?|tanks?|supply|systems?)\b)` / all (35536 units) / 7 hits: 40.1-51.5, 40.1-51.8, 58.1-322.03, 13VAC5-63-310, 13VAC5-63-336, 13VAC5-63-530, 13VAC5-63-540
- `\A(?=[\s\S]*(?:\bwater heat(?:er|ers|ing)\b|\bhot water (?:heaters?|tanks?|supply|systems?)\b))(?=[\s\S]*(?:\btemperatures?\b|\bthermostat(?:s|ic|ically)?\b|\bdegrees?\b|°F|\bscald(?:s|ing)?\b))` / all (35536 units) / 8 hits: 40.1-51.5, 40.1-51.8, 58.1-322.03, 13VAC5-63-210, 13VAC5-63-310, 13VAC5-63-336, 13VAC5-63-530, 13VAC5-63-540
- `\b(?:anti-?)?scald(?:s|ing)?\b` / all (35536 units) / 1 hits: 13VAC5-63-336
- `\bhot water\b[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\bnew occupan(?:t|ts|cy)\b)|(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\bnew occupan(?:t|ts|cy)\b)[\s\S]{0,1200}\bhot water\b` / all (35536 units) / 2 hits: 55.1-1200, 55.1-1220
- `\A(?=[\s\S]*\bhot water\b)(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))` / code (34494 units) / 2 hits: 55.1-1200, 55.1-1220
- positive [0] 13VAC5-63-530: passed
- positive [2] 13VAC5-63-336: passed
- positive [3] 55.1-1220: passed
**VA-G-0502** [stove-refrigerator]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bstoves?\b|\bovens?\b|\brefrigerators?\b|\bfreezers?\b|\bcooktops?\b|\bcooking (?:appliances?|facilities|equipment)\b|\bkitchen (?:appliances?|facilities|equipment)\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b)[\s\S]{0,1200}(?:\bstoves?\b|\bovens?\b|\brefrigerators?\b|\bfreezers?\b|\bcooktops?\b|\bcooking (?:appliances?|facilities|equipment)\b|\bkitchen (?:appliances?|facilities|equipment)\b)` / all (35536 units) / 6 hits: 55.1-1200, 13VAC5-52-150, 13VAC5-63-210, 13VAC5-63-264, 13VAC5-63-540, 18VAC135-50-200
- `\A(?=[\s\S]*(?:\bstoves?\b|\bovens?\b|\brefrigerators?\b|\bfreezers?\b|\bcooktops?\b|\bcooking (?:appliances?|facilities|equipment)\b|\bkitchen (?:appliances?|facilities|equipment)\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b))` / all (35536 units) / 9 hits: 15.2-2820, 46.2-100, 55.1-1200, 13VAC5-52-150, 13VAC5-63-210, 13VAC5-63-264, 13VAC5-63-310, 13VAC5-63-540, 18VAC135-50-200
- `\brefrigerators?\b` / code (34494 units) / 16 hits: 10.1-1425.27, 18.2-319, 29.1-208, 34-26, 36-85.16, 38.2-1439, 46.2-1500, 55.1-1200, 58.1-322.03, 58.1-639.1, 58.1-3504, 59.1-101 +4
- `\bstoves?\b|\branges? and ovens?\b` / code (34494 units) / 13 hits: 10.1-1300, 28.2-508, 28.2-524, 28.2-646, 34-26, 36-85.16, 38.2-1439, 45.2-719, 45.2-931, 55.1-1200, 58.1-609.10, 58.1-2201 +1
- `\A(?=[\s\S]*(?:\bstoves?\b|\bovens?\b|\brefrigerators?\b|\bfreezers?\b|\bcooktops?\b|\bcooking (?:appliances?|facilities|equipment)\b|\bkitchen (?:appliances?|facilities|equipment)\b))(?=[\s\S]*(?:\bshall (?:provide|supply|furnish)\b|\bmust (?:provide|supply|furnish)\b))` / all (35536 units) / 3 hits: 13VAC5-52-360, 13VAC5-63-210, 13VAC5-63-540
- positive [0] 55.1-1200: passed
- positive [2] 55.1-1200: passed
- positive [3] 55.1-1200: passed
**VA-G-0503** [appliances-excluded]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bappliances?\b|\bfacilities\b|\bequipment\b|\bfixtures?\b)[\s\S]{0,1200}(?:\bpresum(?:e|ed|es|ption|ptions)\b|\bdeemed\b)|(?:\bpresum(?:e|ed|es|ption|ptions)\b|\bdeemed\b)[\s\S]{0,1200}(?:\bappliances?\b|\bfacilities\b|\bequipment\b|\bfixtures?\b)` / code:55\.1-1[2-4] (153 units) / 7 hits: 55.1-1200, 55.1-1212, 55.1-1212#v2, 55.1-1229, 55.1-1241, 55.1-1244, 55.1-1244#v2
- `\A(?=[\s\S]*(?:\bappliances?\b|\bfacilities\b|\bequipment\b|\bfixtures?\b))(?=[\s\S]*(?:\bpresum(?:e|ed|es|ption|ptions)\b|\bdeemed\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b))` / all (35536 units) / 65 hits: 2.2-2340, 2.2-2355, 2.2-4519, 4.1-100, 4.1-100#v2, 4.1-206.3, 8.01-226.12, 10.1-1432, 15.2-968.1, 15.2-968.1#v2, 15.2-968.1#v3, 15.2-4606 +53
- `\bsupplied or required to be supplied\b` / all (35536 units) / 2 hits: 55.1-1220, 55.1-1303
- `(?:\bexclud(?:e|ed|es|ing)\b|\bnot (?:supplied|provided|included)\b)[\s\S]{0,1200}\bappliances?\b|\bappliances?\b[\s\S]{0,1200}(?:\bexclud(?:e|ed|es|ing)\b|\bnot (?:supplied|provided|included)\b)` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\bleft (?:behind )?by (?:a |the )?(?:prior|previous|former) (?:tenants?|occupants?|owners?)\b` / all (35536 units) / 0 hits
- positive [2] 55.1-1220: passed
- positive [0] 55.1-1227: recorded as failed
**VA-G-0504** [appliances-excluded]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0503 (positive for term [0] chose a section without the presume/deemed words; term [1] scope narrowed to Title 55.1)
- `(?:\bappliances?\b|\bfacilities\b|\bequipment\b|\bfixtures?\b)[\s\S]{0,1200}(?:\bpresum(?:e|ed|es|ption|ptions)\b|\bdeemed\b)|(?:\bpresum(?:e|ed|es|ption|ptions)\b|\bdeemed\b)[\s\S]{0,1200}(?:\bappliances?\b|\bfacilities\b|\bequipment\b|\bfixtures?\b)` / code:55\.1-1[2-4] (153 units) / 7 hits: 55.1-1200, 55.1-1212, 55.1-1212#v2, 55.1-1229, 55.1-1241, 55.1-1244, 55.1-1244#v2
- `\A(?=[\s\S]*\bappliances?\b)(?=[\s\S]*(?:\bpresum(?:e|ed|es|ption|ptions)\b|\bdeemed\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b))` / code:55\.1- (897 units) / 0 hits
- `\bsupplied or required to be supplied\b` / all (35536 units) / 2 hits: 55.1-1220, 55.1-1303
- `(?:\bexclud(?:e|ed|es|ing)\b|\bnot (?:supplied|provided|included)\b)[\s\S]{0,1200}\bappliances?\b|\bappliances?\b[\s\S]{0,1200}(?:\bexclud(?:e|ed|es|ing)\b|\bnot (?:supplied|provided|included)\b)` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\bleft (?:behind )?by (?:a |the )?(?:prior|previous|former) (?:tenants?|occupants?|owners?)\b` / all (35536 units) / 0 hits
- positive [2] 55.1-1220: passed
- positive [0] 55.1-1241: passed
**VA-G-0505** [furnishings-included]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bfurnished\b|\bunfurnished\b|\bfurniture\b|\bfurnishings\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b|\bleased premises\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b|\bleased premises\b)[\s\S]{0,1200}(?:\bfurnished\b|\bunfurnished\b|\bfurniture\b|\bfurnishings\b)` / all (35542 units) / 43 hits: 4.1-315, 6.2-311, 8.2A-103, 8.9A-102, 10.1-500, 13.1-330, 13.1-665, 15.2-716, 15.2-5114, 15.2-5114#v2, 15.2-5118, 15.2-5120 +31 / heading-only: 58.1-3516.2
- `\A(?=[\s\S]*(?:\bfurnished\b|\bunfurnished\b|\bfurniture\b|\bfurnishings\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b|\bleased premises\b))` / code:55\.1- (897 units) / 10 hits: 55.1-202, 55.1-1200, 55.1-1201, 55.1-1216, 55.1-1302, 55.1-1916, 55.1-1949, 55.1-2103, 55.1-2148, 55.1-2900
- `\bfurnished (?:apartments?|units?|dwellings?|rooms?|rentals?|premises|homes?|houses?)\b` / all (35542 units) / 0 hits
- `\binventor(?:y|ies)\b[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b)|(?:\btenants?\b|\blandlords?\b)[\s\S]{0,1200}\binventor(?:y|ies)\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 34-26: recorded as failed
- positive [2] 55.1-1201: recorded as failed
**VA-G-0506** [furnishings-included]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0505 (both positives were chosen without the term: rerun with real positives)
- `(?:\bfurnished\b|\bunfurnished\b|\bfurniture\b|\bfurnishings\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b|\bleased premises\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b|\bleased premises\b)[\s\S]{0,1200}(?:\bfurnished\b|\bunfurnished\b|\bfurniture\b|\bfurnishings\b)` / all (35542 units) / 43 hits: 4.1-315, 6.2-311, 8.2A-103, 8.9A-102, 10.1-500, 13.1-330, 13.1-665, 15.2-716, 15.2-5114, 15.2-5114#v2, 15.2-5118, 15.2-5120 +31 / heading-only: 58.1-3516.2
- `\A(?=[\s\S]*(?:\bfurnished\b|\bunfurnished\b|\bfurniture\b|\bfurnishings\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\blessors?\b|\brental agreements?\b|\bdwelling units?\b|\bleased premises\b))` / code:55\.1- (897 units) / 10 hits: 55.1-202, 55.1-1200, 55.1-1201, 55.1-1216, 55.1-1302, 55.1-1916, 55.1-1949, 55.1-2103, 55.1-2148, 55.1-2900
- `\bfurnished (?:apartments?|units?|dwellings?|rooms?|rentals?|premises|homes?|houses?)\b` / all (35542 units) / 0 hits
- `\binventor(?:y|ies)\b[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b)|(?:\btenants?\b|\blandlords?\b)[\s\S]{0,1200}\binventor(?:y|ies)\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 55.1-1201: passed
- positive [1] 55.1-1200: passed
**VA-G-0507** [waterbed]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bwaterbeds?\b|\bwater beds?\b|\bflotation (?:beds?|mattress(?:es)?)\b` / all (35542 units) / 0 hits
- `\bliquid[- ]filled\b` / all (35542 units) / 1 hits: 13VAC5-63-540
- `(?:\btenants?\b|\blessees?\b)[\s\S]{0,1200}\b(?:furniture|beds?|mattress(?:es)?)\b|\b(?:furniture|beds?|mattress(?:es)?)\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b)` / code (34494 units) / 11 hits: 8.2A-103, 15.2-983, 28.2-618, 28.2-618#v2, 28.2-640, 28.2-818, 28.2-1208, 46.2-1143, 58.1-3510.4, 59.1-284.30, 59.1-284.31
- `\A(?=[\s\S]*\b(?:furniture|beds?|mattress(?:es)?)\b)(?=[\s\S]*\btenants?\b)` / code:55\.1- (897 units) / 0 hits
- `\b(?:heavy|weight of|floor load(?:s|ing)?)\b[\s\S]{0,1200}(?:\btenants?\b|\brental agreements?\b)|(?:\btenants?\b|\brental agreements?\b)[\s\S]{0,1200}\b(?:heavy|weight of|floor load(?:s|ing)?)\b` / code:55\.1- (897 units) / 0 hits
- positive [1] 13VAC5-63-540: passed
**VA-G-0508** [steam-radiator-covers]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bradiators?\b` / all (35542 units) / 3 hits: 58.1-3295.3, 59.1-136.1, 18VAC15-30-20
- `(?:\bradiators?\b|\bsteam (?:heat|heating|pipes?|risers?|systems?|boilers?)\b|\bheating (?:units?|elements?) covers?\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\boccupants?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\boccupants?\b)[\s\S]{0,1200}(?:\bradiators?\b|\bsteam (?:heat|heating|pipes?|risers?|systems?|boilers?)\b|\bheating (?:units?|elements?) covers?\b)` / all (35542 units) / 1 hits: 18VAC15-30-20
- `\A(?=[\s\S]*(?:\bradiators?\b|\bsteam (?:heat|heating|pipes?|risers?|systems?|boilers?)\b|\bheating (?:units?|elements?) covers?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\boccupants?\b))` / all (35542 units) / 1 hits: 18VAC15-30-20
- `\b(?:radiator|heater|heating) (?:covers?|guards?|enclosures?|shields?)\b` / all (35542 units) / 0 hits
- `\bhot surfaces?\b|\bburns? (?:hazard|injur(?:y|ies))\b` / all (35542 units) / 3 hits: 13VAC5-52-180, 13VAC5-52-270, 13VAC5-63-310
- positive [0] 18VAC15-30-20: passed
- positive [4] 13VAC5-52-270: passed
**VA-G-0509** [portable-cooling-device]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bair conditioners?\b|\bair[- ]conditioning (?:units?|devices?|equipment)\b|\bwindow (?:units?|air conditioners?)\b|\bportable (?:air conditioners?|cooling (?:devices?|units?)|fans?)\b|\bcooling (?:devices?|units?|systems?|equipment)\b|\bheat pumps?\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b)|(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b)[\s\S]{0,1200}(?:\bair conditioners?\b|\bair[- ]conditioning (?:units?|devices?|equipment)\b|\bwindow (?:units?|air conditioners?)\b|\bportable (?:air conditioners?|cooling (?:devices?|units?)|fans?)\b|\bcooling (?:devices?|units?|systems?|equipment)\b|\bheat pumps?\b)` / all (35542 units) / 1 hits: 56-596.2:1
- `\A(?=[\s\S]*(?:\bair conditioners?\b|\bair[- ]conditioning (?:units?|devices?|equipment)\b|\bwindow (?:units?|air conditioners?)\b|\bportable (?:air conditioners?|cooling (?:devices?|units?)|fans?)\b|\bcooling (?:devices?|units?|systems?|equipment)\b|\bheat pumps?\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b))` / all (35542 units) / 5 hits: 36-85.16, 56-596.2:1, 63.2-100, 13VAC5-63-210, 18VAC15-30-20
- `\bair[- ]conditioning\b` / code:55\.1- (897 units) / 5 hits: 55.1-1200, 55.1-1220, 55.1-1227, 55.1-1300, 55.1-1303
- `\A(?=[\s\S]*(?:\bair conditioners?\b|\bcooling\b|\bair[- ]conditioning\b))(?=[\s\S]*(?:\bshall not (?:prohibit|restrict)\b|\bmay not (?:prohibit|restrict)\b|\bprohibit or restrict\b|\bunreasonably restrict\b))` / all (35542 units) / 0 hits
- `\b(?:fans?|window units?)\b[\s\S]{0,1200}\b(?:tenants?|landlords?)\b|\b(?:tenants?|landlords?)\b[\s\S]{0,1200}\b(?:fans?|window units?)\b` / code:55\.1- (897 units) / 0 hits
- positive [2] 55.1-1220: passed
- positive [0] 18VAC15-30-20: recorded as failed
**VA-G-0510** [portable-cooling-device]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0509 (positive for term [0] was chosen without the tenancy word; same terms, real positive)
- `(?:\bair conditioners?\b|\bair[- ]conditioning (?:units?|devices?|equipment)\b|\bwindow (?:units?|air conditioners?)\b|\bportable (?:air conditioners?|cooling (?:devices?|units?)|fans?)\b|\bcooling (?:devices?|units?|systems?|equipment)\b|\bheat pumps?\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b)|(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b)[\s\S]{0,1200}(?:\bair conditioners?\b|\bair[- ]conditioning (?:units?|devices?|equipment)\b|\bwindow (?:units?|air conditioners?)\b|\bportable (?:air conditioners?|cooling (?:devices?|units?)|fans?)\b|\bcooling (?:devices?|units?|systems?|equipment)\b|\bheat pumps?\b)` / all (35542 units) / 1 hits: 56-596.2:1
- `\A(?=[\s\S]*(?:\bair conditioners?\b|\bair[- ]conditioning (?:units?|devices?|equipment)\b|\bwindow (?:units?|air conditioners?)\b|\bportable (?:air conditioners?|cooling (?:devices?|units?)|fans?)\b|\bcooling (?:devices?|units?|systems?|equipment)\b|\bheat pumps?\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b))` / all (35542 units) / 5 hits: 36-85.16, 56-596.2:1, 63.2-100, 13VAC5-63-210, 18VAC15-30-20
- `\bair[- ]conditioning\b` / code:55\.1- (897 units) / 5 hits: 55.1-1200, 55.1-1220, 55.1-1227, 55.1-1300, 55.1-1303
- `\A(?=[\s\S]*(?:\bair conditioners?\b|\bcooling\b|\bair[- ]conditioning\b))(?=[\s\S]*(?:\bshall not (?:prohibit|restrict)\b|\bmay not (?:prohibit|restrict)\b|\bprohibit or restrict\b|\bunreasonably restrict\b))` / all (35542 units) / 0 hits
- `\b(?:fans?|window units?)\b[\s\S]{0,1200}\b(?:tenants?|landlords?)\b|\b(?:tenants?|landlords?)\b[\s\S]{0,1200}\b(?:fans?|window units?)\b` / code:55\.1- (897 units) / 0 hits
- positive [2] 55.1-1220: passed
- positive [0] 56-596.2:1: passed
**VA-G-0511** [security-devices]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bre-?key(?:s|ed|ing)?\b` / all (35543 units) / 1 hits: 9.1-138
- `\bchang(?:e|es|ed|ing) (?:the |all )?(?:locks?|lock cylinders?|keys?)\b|\b(?:locks?|keys?) (?:shall|must) be changed\b` / all (35543 units) / 0 hits
- `(?:\blocks?\b|\blocking devices?\b|\bdead-?bolts?\b|\bsecurity devices?\b|\bpeepholes?\b|\bdoor viewers?\b|\bkeys?\b)[\s\S]{0,1200}(?:\bnew tenants?\b|\bturnover\b|\bprior tenants?\b|\bprevious (?:tenants?|occupants?)\b|\bvacat(?:e|es|ed|ing)\b|\bmove-?in\b)|(?:\bnew tenants?\b|\bturnover\b|\bprior tenants?\b|\bprevious (?:tenants?|occupants?)\b|\bvacat(?:e|es|ed|ing)\b|\bmove-?in\b)[\s\S]{0,1200}(?:\blocks?\b|\blocking devices?\b|\bdead-?bolts?\b|\bsecurity devices?\b|\bpeepholes?\b|\bdoor viewers?\b|\bkeys?\b)` / all (35543 units) / 1 hits: 55.1-1230
- `\A(?=[\s\S]*(?:\blocks?\b|\blocking devices?\b|\bdead-?bolts?\b|\bsecurity devices?\b|\bpeepholes?\b|\bdoor viewers?\b|\bkeys?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b))` / code:55\.1- (897 units) / 4 hits: 55.1-1209.1, 55.1-1221, 55.1-1229, 55.1-1230
- `\bdead-?bolts?\b|\bpeepholes?\b|\bdoor viewers?\b|\bcharlie bars?\b` / all (35543 units) / 4 hits: 9.1-138, 18.2-130, 55.1-1221, 13VAC5-63-245
- positive [0] 9.1-138: passed
- positive [4] 55.1-1221: passed
- positive [3] 55.1-1230: passed
**VA-G-0512** [smart-access]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsmart (?:locks?|home|devices?|access)\b|\bkeyless\b|\belectronic (?:locks?|locking devices?|keys?|key codes?|access (?:systems?|devices?|codes?)|entry)\b|\baccess codes?\b|\bkey (?:cards?|fobs?|codes?)\b|\bconnected devices?\b|\binternet-connected (?:devices?|locks?)\b)` / all (35543 units) / 14 hits: 9.1-138, 18.2-186.6, 18.2-196.1, 22.1-79.3:1, 22.1-206, 22.1-274.01:1, 22.1-277, 38.2-621, 55.1-1209.1, 58.1-2228, 58.1-2233, 58.1-2236 +2
- `(?:\bsmart (?:locks?|home|devices?|access)\b|\bkeyless\b|\belectronic (?:locks?|locking devices?|keys?|key codes?|access (?:systems?|devices?|codes?)|entry)\b|\baccess codes?\b|\bkey (?:cards?|fobs?|codes?)\b|\bconnected devices?\b|\binternet-connected (?:devices?|locks?)\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bresidents?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bresidents?\b)[\s\S]{0,1200}(?:\bsmart (?:locks?|home|devices?|access)\b|\bkeyless\b|\belectronic (?:locks?|locking devices?|keys?|key codes?|access (?:systems?|devices?|codes?)|entry)\b|\baccess codes?\b|\bkey (?:cards?|fobs?|codes?)\b|\bconnected devices?\b|\binternet-connected (?:devices?|locks?)\b)` / all (35543 units) / 3 hits: 18.2-186.6, 18.2-196.1, 55.1-1209.1
- `\A(?=[\s\S]*(?:\bsmart (?:locks?|home|devices?|access)\b|\bkeyless\b|\belectronic (?:locks?|locking devices?|keys?|key codes?|access (?:systems?|devices?|codes?)|entry)\b|\baccess codes?\b|\bkey (?:cards?|fobs?|codes?)\b|\bconnected devices?\b|\binternet-connected (?:devices?|locks?)\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bresidents?\b))` / all (35543 units) / 4 hits: 18.2-186.6, 18.2-196.1, 38.2-621, 55.1-1209.1
- `\b(?:user accounts?|account managers?|device protection requests?)\b` / all (35543 units) / 1 hits: 63.2-1900
- `\b(?:apps?|mobile applications?|smartphones?)\b[\s\S]{0,1200}\b(?:locks?|doors?|entry|keys?)\b|\b(?:locks?|doors?|entry|keys?)\b[\s\S]{0,1200}\b(?:apps?|mobile applications?|smartphones?)\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 55.1-1209.1: passed
- positive [1] 55.1-1209.1: passed
**VA-G-0513** [window-guards]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bwindow guards?\b|\bwindow fall\b|\bwindow (?:opening )?control devices?\b|\bwindow (?:stops?|bars?|grilles?)\b|\b(?:burglar|security) bars?\b)` / all (35543 units) / 3 hits: 13VAC5-52-220, 13VAC5-63-431, 13VAC5-63-550
- `\bwindows?\b[\s\S]{0,1200}\b(?:child|children|minors?)\b|\b(?:child|children|minors?)\b[\s\S]{0,1200}\bwindows?\b` / code (34494 units) / 4 hits: 4.1-802, 22.1-253.13:3, 46.2-1056, 59.1-548
- `\A(?=[\s\S]*\bwindows?\b)(?=[\s\S]*\b(?:child|children)\b)(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\boccupants?\b))` / all (35543 units) / 7 hits: 59.1-548, 13VAC5-63-260, 13VAC5-63-431, 13VAC5-63-520, 18VAC15-30-20, 18VAC15-30-541, 18VAC15-30-550
- `\bwindows?\b[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\boccupants?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\boccupants?\b)[\s\S]{0,1200}\bwindows?\b` / code:55\.1- (897 units) / 1 hits: 55.1-1221
- `\b(?:bars|grilles|grates)\b[\s\S]{0,1200}\b(?:release|releasable|removable)\b` / all (35543 units) / 2 hits: 13VAC5-52-220, 13VAC5-63-545
- positive [0] 13VAC5-63-431: passed
- positive [3] 55.1-1221: passed
- positive [4] 13VAC5-63-545: passed
**VA-G-0514** [common-area-lighting]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\blighting\b|\billuminat(?:e|ed|es|ing|ion)\b|\blights\b|\blight fixtures?\b|\blighted\b|\bartificial light\b)[\s\S]{0,1200}(?:\bcommon (?:areas?|halls?|hallways?)\b|\bhallways?\b|\bstairways?\b|\bstairwells?\b|\bparking (?:lots?|areas?)\b|\bwalkways?\b|\bpublic halls?\b)|(?:\bcommon (?:areas?|halls?|hallways?)\b|\bhallways?\b|\bstairways?\b|\bstairwells?\b|\bparking (?:lots?|areas?)\b|\bwalkways?\b|\bpublic halls?\b)[\s\S]{0,1200}(?:\blighting\b|\billuminat(?:e|ed|es|ing|ion)\b|\blights\b|\blight fixtures?\b|\blighted\b|\bartificial light\b)` / all (35543 units) / 10 hits: 15.2-735, 15.2-740, 28.2-1403, 12VAC5-460-180, 13VAC5-52-170, 13VAC5-52-220, 13VAC5-63-438, 13VAC5-63-510, 13VAC5-63-524, R. 3B:2
- `\A(?=[\s\S]*(?:\blighting\b|\billuminat(?:e|ed|es|ing|ion)\b|\blights\b|\blight fixtures?\b|\blighted\b|\bartificial light\b))(?=[\s\S]*(?:\bcommon (?:areas?|halls?|hallways?)\b|\bhallways?\b|\bstairways?\b|\bstairwells?\b|\bparking (?:lots?|areas?)\b|\bwalkways?\b|\bpublic halls?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b))` / all (35543 units) / 5 hits: 15.2-735, 13VAC5-52-220, 13VAC5-52-240, 13VAC5-63-434, 13VAC5-63-440
- `\bcommon areas?\b` / code:55\.1-12 (91 units) / 1 hits: 55.1-1220
- `\black of (?:heat, running water, )?light\b|\black of light\b` / code:55\.1-12 (91 units) / 3 hits: 55.1-1241, 55.1-1244, 55.1-1244#v2
- `(?:\blighting\b|\billuminat(?:e|ed|es|ing|ion)\b|\blights\b|\blight fixtures?\b|\blighted\b|\bartificial light\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b)[\s\S]{0,1200}(?:\blighting\b|\billuminat(?:e|ed|es|ing|ion)\b|\blights\b|\blight fixtures?\b|\blighted\b|\bartificial light\b)` / code:55\.1- (897 units) / 0 hits
- positive [0] 13VAC5-63-524: passed
- positive [2] 55.1-1220: passed
- positive [3] 55.1-1241: passed
**VA-G-0515** [fire-sprinkler-duty]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b)` / code (34494 units) / 21 hits: 15.2-2113, 27-5, 32.1-126.2, 32.1-126.3, 36-99.3, 36-99.5:1, 36-99.9, 36-99.9:1, 36-166, 38.2-112, 38.2-126, 45.2-838 +9
- `(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bresidential (?:buildings?|structures?|occupanc(?:y|ies))\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bresidential (?:buildings?|structures?|occupanc(?:y|ies))\b)[\s\S]{0,1200}(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b)` / all (35543 units) / 15 hits: 36-99.5:1, 54.1-1106, 54.1-1108, 54.1-1108.2, 13VAC5-52-150, 13VAC5-52-200, 13VAC5-52-680, 13VAC5-63-80, 13VAC5-63-210, 13VAC5-63-235, 13VAC5-63-240, 13VAC5-63-245 +3
- `\A(?=[\s\S]*(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b))(?=[\s\S]*(?:\bretrofit(?:s|ted|ting)?\b|\bregardless of when\b|\bexisting buildings?\b))` / all (35543 units) / 22 hits: 32.1-126.2, 32.1-126.3, 36-99.3, 36-99.5:1, 36-99.9, 36-99.9:1, 59.1-548, 13VAC5-52-170, 13VAC5-52-200, 13VAC5-52-210, 13VAC5-52-240, 13VAC5-52-430 +10
- `\A(?=[\s\S]*(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bresidential (?:buildings?|structures?|occupanc(?:y|ies))\b))` / code:55\.1- (897 units) / 0 hits
- `\b(?:tax credits?|grants?|loans?)\b[\s\S]{0,1200}(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b)|(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b)[\s\S]{0,1200}\b(?:tax credits?|grants?|loans?)\b` / code (34494 units) / 6 hits: 36-166, 54.1-1106, 54.1-1108, 54.1-1108.2, 59.1-280.1, 59.1-548
- positive [0] 36-99.3: passed
- positive [2] 13VAC5-63-435: passed
- positive [1] 13VAC5-63-240: passed
**VA-G-0516** [sprinkler-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b)[\s\S]{0,1200}(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwritten statements?\b|\brental agreements?\b|\bleases?\b|\bprospective tenants?\b|\bpurchasers?\b)|(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwritten statements?\b|\brental agreements?\b|\bleases?\b|\bprospective tenants?\b|\bpurchasers?\b)[\s\S]{0,1200}(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b)` / all (35543 units) / 11 hits: 54.1-1100, 58.1-3506, 13VAC5-52-170, 13VAC5-52-210, 13VAC5-63-30, 13VAC5-63-210, 13VAC5-63-240, 13VAC5-63-420, 13VAC5-63-438, 13VAC5-63-440, 13VAC5-63-545
- `\A(?=[\s\S]*(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b))(?=[\s\S]*\bdisclos(?:e|ed|es|ing|ure|ures)\b)` / all (35543 units) / 0 hits
- `\A(?=[\s\S]*(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))` / code (34494 units) / 2 hits: 59.1-280.1, 59.1-548
- `\bfire safety (?:disclosures?|notices?|information)\b|\bfire protection (?:disclosures?|notices?)\b` / all (35543 units) / 0 hits
- `\b(?:residential property disclosures?|disclosure statements?)\b` / code:55\.1- (897 units) / 7 hits: 55.1-703, 55.1-703#v2, 55.1-709, 55.1-714, 55.1-1000, 55.1-2183, 55.1-2217 / heading-only: 55.1-1204.1, 55.1-1302
- positive [2] 54.1-1106: recorded as failed
- positive [0] 13VAC5-63-545: passed
- positive [4] 55.1-1217: recorded as failed
**VA-G-0517** [sprinkler-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0516 (positives for terms [2] and [4] were chosen without the term; same terms, real positives)
- `(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b)[\s\S]{0,1200}(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwritten statements?\b|\brental agreements?\b|\bleases?\b|\bprospective tenants?\b|\bpurchasers?\b)|(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwritten statements?\b|\brental agreements?\b|\bleases?\b|\bprospective tenants?\b|\bpurchasers?\b)[\s\S]{0,1200}(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b)` / all (35543 units) / 11 hits: 54.1-1100, 58.1-3506, 13VAC5-52-170, 13VAC5-52-210, 13VAC5-63-30, 13VAC5-63-210, 13VAC5-63-240, 13VAC5-63-420, 13VAC5-63-438, 13VAC5-63-440, 13VAC5-63-545
- `\A(?=[\s\S]*(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b))(?=[\s\S]*\bdisclos(?:e|ed|es|ing|ure|ures)\b)` / all (35543 units) / 0 hits
- `\A(?=[\s\S]*(?:\bsprinklers?\b|\bsprinkler systems?\b|\bfire suppression systems?\b|\bsprinklered\b|\bfire protection systems?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))` / code (34494 units) / 2 hits: 59.1-280.1, 59.1-548
- `\bfire safety (?:disclosures?|notices?|information)\b|\bfire protection (?:disclosures?|notices?)\b` / all (35543 units) / 0 hits
- `\b(?:residential property disclosures?|disclosure statements?)\b` / code:55\.1- (897 units) / 7 hits: 55.1-703, 55.1-703#v2, 55.1-709, 55.1-714, 55.1-1000, 55.1-2183, 55.1-2217 / heading-only: 55.1-1204.1, 55.1-1302
- positive [2] 59.1-548: passed
- positive [0] 13VAC5-63-545: passed
- positive [4] 55.1-709: passed
**VA-G-0518** [frozen-standard-incorporation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bInternational (?:Building|Residential|Fire|Property Maintenance|Existing Building|Plumbing|Mechanical|Fuel Gas|Energy Conservation) Code\b|\bNFPA\b|\bNational (?:Fire Protection Association|Electrical Code)\b|\bLife Safety Code\b|\bANSI\b|\bASTM\b|\bICC\b)` / code (34494 units) / 48 hits: 2.2-1150.2, 8.01-226.7, 8.01-227.11, 8.01-227.16, 8.01-227.20, 9.1-203, 9.1-210, 10.1-1425.21, 10.1-1425.22, 15.2-961.1, 15.2-1804.1, 15.2-2295 +36
- `(?:\bInternational (?:Building|Residential|Fire|Property Maintenance|Existing Building|Plumbing|Mechanical|Fuel Gas|Energy Conservation) Code\b|\bNFPA\b|\bNational (?:Fire Protection Association|Electrical Code)\b|\bLife Safety Code\b|\bANSI\b|\bASTM\b|\bICC\b)[\s\S]{0,300}(?:\b(?:19|20)\d\d (?:edition|ed\.)\b|\bedition\b|\b(?:19|20)\d\d\b|\bas amended from time to time\b|\bmost recent(?:ly published)? edition\b)|(?:\b(?:19|20)\d\d (?:edition|ed\.)\b|\bedition\b|\b(?:19|20)\d\d\b|\bas amended from time to time\b|\bmost recent(?:ly published)? edition\b)[\s\S]{0,300}(?:\bInternational (?:Building|Residential|Fire|Property Maintenance|Existing Building|Plumbing|Mechanical|Fuel Gas|Energy Conservation) Code\b|\bNFPA\b|\bNational (?:Fire Protection Association|Electrical Code)\b|\bLife Safety Code\b|\bANSI\b|\bASTM\b|\bICC\b)` / code (34494 units) / 13 hits: 8.01-226.7, 8.01-227.11, 10.1-1425.22, 15.2-961.1, 15.2-1804.1, 27-14, 27-95, 40.1-79.1, 45.2-929, 45.2-2200, 55.1-1212.1, 56-585.5 +1
- `\A(?=[\s\S]*(?:\bInternational (?:Building|Residential|Fire|Property Maintenance|Existing Building|Plumbing|Mechanical|Fuel Gas|Energy Conservation) Code\b|\bNFPA\b|\bNational (?:Fire Protection Association|Electrical Code)\b|\bLife Safety Code\b|\bANSI\b|\bASTM\b|\bICC\b))(?=[\s\S]*(?:\b(?:19|20)\d\d (?:edition|ed\.)\b|\bedition\b|\b(?:19|20)\d\d\b|\bas amended from time to time\b|\bmost recent(?:ly published)? edition\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\bdwelling units?\b|\brental\b))` / code (34494 units) / 4 hits: 8.01-226.7, 36-96.3, 55.1-1212.1, 56-596.8
- `\b2021 (?:edition|International)\b|\b2021 editions\b` / admin (582 units) / 7 hits: 13VAC5-52-30, 13VAC5-52-680, 13VAC5-63-10, 13VAC5-63-30, 13VAC5-63-400, 13VAC5-63-450, 13VAC5-63-550
- `\bin effect (?:on|at the time|prior to)\b[\s\S]{0,200}\b(?:code|regulations?)\b` / admin:13VAC5- (205 units) / 6 hits: 13VAC5-52-20, 13VAC5-52-140, 13VAC5-63-30, 13VAC5-63-420, 13VAC5-63-510, 13VAC5-63-545
- positive [0] 36-99: passed
- positive [1] 15.2-961.1: passed
- positive [3] 13VAC5-63-10: passed
**VA-G-0519** [pool-safety]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bswimming pools?\b` / code (34494 units) / 14 hits: 15.2-820, 15.2-921, 15.2-1110, 15.2-1810, 15.2-1811, 32.1-248.1, 35.1-9, 35.1-13, 36-97, 40.1-100, 43-2, 55.1-2200 +2
- `(?:\bswimming pools?\b|\bpools?\b|\bhot tubs?\b|\bspas?\b|\bwading pools?\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bmultifamily\b|\bresidential\b|\bcommon interest communit(?:y|ies)\b|\bassociations?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bmultifamily\b|\bresidential\b|\bcommon interest communit(?:y|ies)\b|\bassociations?\b)[\s\S]{0,1200}(?:\bswimming pools?\b|\bpools?\b|\bhot tubs?\b|\bspas?\b|\bwading pools?\b)` / code (34494 units) / 31 hits: 2.2-2648, 2.2-2649, 2.2-4519, 2.2-5206, 2.2-5208, 2.2-5211, 2.2-5212, 3.2-3114, 3.2-3300, 3.2-5901.2, 15.2-1110, 15.2-2703 +19
- `\A(?=[\s\S]*\bswimming pools?\b)(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental\b|\bapartments?\b))` / all (35543 units) / 7 hits: 36-97, 43-2, 56-245.2, 13VAC5-63-80, 13VAC5-63-200, 13VAC5-63-210, 13VAC5-63-320
- `\b(?:pool|spa) (?:barriers?|fences?|fencing|enclosures?|gates?|covers?|alarms?)\b|\b(?:drain covers?|suction outlets?|entrapment)\b` / all (35543 units) / 6 hits: 45.2-501, 45.2-1101, 13VAC5-63-210, 13VAC5-63-264, 13VAC5-63-336, 13VAC5-63-520
- `\blifeguards?\b|\bno lifeguard\b` / all (35543 units) / 4 hits: 22.1-207, 40.1-100, 12VAC5-460-150, 12VAC5-460-320
- positive [0] 12VAC5-460-10: recorded as failed
- positive [2] 12VAC5-460-10: recorded as failed
- positive [3] 13VAC5-63-520: passed
- positive [4] 12VAC5-460-320: passed
**VA-G-0520** [pool-safety]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0519 (positives for terms [0] and [2] named an admin section outside the term scope or without a tenancy word; same terms, real positives)
- `\bswimming pools?\b` / code (34494 units) / 14 hits: 15.2-820, 15.2-921, 15.2-1110, 15.2-1810, 15.2-1811, 32.1-248.1, 35.1-9, 35.1-13, 36-97, 40.1-100, 43-2, 55.1-2200 +2
- `(?:\bswimming pools?\b|\bpools?\b|\bhot tubs?\b|\bspas?\b|\bwading pools?\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bmultifamily\b|\bresidential\b|\bcommon interest communit(?:y|ies)\b|\bassociations?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bdwelling units?\b|\bapartments?\b|\bmultifamily\b|\bresidential\b|\bcommon interest communit(?:y|ies)\b|\bassociations?\b)[\s\S]{0,1200}(?:\bswimming pools?\b|\bpools?\b|\bhot tubs?\b|\bspas?\b|\bwading pools?\b)` / code (34494 units) / 31 hits: 2.2-2648, 2.2-2649, 2.2-4519, 2.2-5206, 2.2-5208, 2.2-5211, 2.2-5212, 3.2-3114, 3.2-3300, 3.2-5901.2, 15.2-1110, 15.2-2703 +19
- `\A(?=[\s\S]*\bswimming pools?\b)(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental\b|\bapartments?\b))` / all (35543 units) / 7 hits: 36-97, 43-2, 56-245.2, 13VAC5-63-80, 13VAC5-63-200, 13VAC5-63-210, 13VAC5-63-320
- `\b(?:pool|spa) (?:barriers?|fences?|fencing|enclosures?|gates?|covers?|alarms?)\b|\b(?:drain covers?|suction outlets?|entrapment)\b` / all (35543 units) / 6 hits: 45.2-501, 45.2-1101, 13VAC5-63-210, 13VAC5-63-264, 13VAC5-63-336, 13VAC5-63-520
- `\blifeguards?\b|\bno lifeguard\b` / all (35543 units) / 4 hits: 22.1-207, 40.1-100, 12VAC5-460-150, 12VAC5-460-320
- positive [0] 15.2-921: passed
- positive [2] 36-97: passed
- positive [3] 13VAC5-63-520: passed
- positive [4] 12VAC5-460-320: passed
**VA-G-0521** [balcony-inspection]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bbalcon(?:y|ies)\b` / all (35543 units) / 5 hits: 18.2-51.3, 55.1-1912, 55.1-2113, 13VAC5-52-220, 13VAC5-63-410
- `(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\bporch(?:es)?\b|\bexterior elevated elements?\b|\bexterior stairways?\b)[\s\S]{0,1200}(?:\binspect(?:s|ed|ing|ion|ions)?\b|\bengineer(?:s|ing)?\b|\bstructural(?:ly)? (?:sound|evaluation|assessment)\b)|(?:\binspect(?:s|ed|ing|ion|ions)?\b|\bengineer(?:s|ing)?\b|\bstructural(?:ly)? (?:sound|evaluation|assessment)\b)[\s\S]{0,1200}(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\bporch(?:es)?\b|\bexterior elevated elements?\b|\bexterior stairways?\b)` / all (35543 units) / 6 hits: 45.2-735, 45.2-740, 12VAC5-460-440, 13VAC5-52-530, 13VAC5-63-220, 18VAC15-30-20
- `\A(?=[\s\S]*(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\bporch(?:es)?\b|\bexterior elevated elements?\b|\bexterior stairways?\b))(?=[\s\S]*(?:\binspect(?:s|ed|ing|ion|ions)?\b|\bengineer(?:s|ing)?\b|\bstructural(?:ly)? (?:sound|evaluation|assessment)\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\bdwelling units?\b|\bapartments?\b|\bmultifamily\b))` / all (35543 units) / 4 hits: 13VAC5-52-220, 13VAC5-52-530, 13VAC5-63-210, 18VAC15-30-20
- `\bevery (?:three|five|six) years\b[\s\S]{0,1200}\b(?:balcon(?:y|ies)|decks?|porch(?:es)?)\b|\b(?:balcon(?:y|ies)|decks?|porch(?:es)?)\b[\s\S]{0,1200}\bevery (?:three|five|six) years\b` / all (35543 units) / 0 hits
- `\bdecks?\b[\s\S]{0,1200}\b(?:tenants?|landlords?|rental agreements?)\b|\b(?:tenants?|landlords?|rental agreements?)\b[\s\S]{0,1200}\bdecks?\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 13VAC5-63-410: passed
- positive [1] 13VAC5-52-220: recorded as failed
**VA-G-0522** [balcony-inspection]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0521 (positive for term [1] named a section without the inspection word; same terms, real positive)
- `\bbalcon(?:y|ies)\b` / all (35543 units) / 5 hits: 18.2-51.3, 55.1-1912, 55.1-2113, 13VAC5-52-220, 13VAC5-63-410
- `(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\bporch(?:es)?\b|\bexterior elevated elements?\b|\bexterior stairways?\b)[\s\S]{0,1200}(?:\binspect(?:s|ed|ing|ion|ions)?\b|\bengineer(?:s|ing)?\b|\bstructural(?:ly)? (?:sound|evaluation|assessment)\b)|(?:\binspect(?:s|ed|ing|ion|ions)?\b|\bengineer(?:s|ing)?\b|\bstructural(?:ly)? (?:sound|evaluation|assessment)\b)[\s\S]{0,1200}(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\bporch(?:es)?\b|\bexterior elevated elements?\b|\bexterior stairways?\b)` / all (35543 units) / 6 hits: 45.2-735, 45.2-740, 12VAC5-460-440, 13VAC5-52-530, 13VAC5-63-220, 18VAC15-30-20
- `\A(?=[\s\S]*(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\bporch(?:es)?\b|\bexterior elevated elements?\b|\bexterior stairways?\b))(?=[\s\S]*(?:\binspect(?:s|ed|ing|ion|ions)?\b|\bengineer(?:s|ing)?\b|\bstructural(?:ly)? (?:sound|evaluation|assessment)\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\bdwelling units?\b|\bapartments?\b|\bmultifamily\b))` / all (35543 units) / 4 hits: 13VAC5-52-220, 13VAC5-52-530, 13VAC5-63-210, 18VAC15-30-20
- `\bevery (?:three|five|six) years\b[\s\S]{0,1200}\b(?:balcon(?:y|ies)|decks?|porch(?:es)?)\b|\b(?:balcon(?:y|ies)|decks?|porch(?:es)?)\b[\s\S]{0,1200}\bevery (?:three|five|six) years\b` / all (35543 units) / 0 hits
- `\bdecks?\b[\s\S]{0,1200}\b(?:tenants?|landlords?|rental agreements?)\b|\b(?:tenants?|landlords?|rental agreements?)\b[\s\S]{0,1200}\bdecks?\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 13VAC5-63-410: passed
- positive [1] 13VAC5-63-220: passed
**VA-G-0523** [lead-state-notices]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\bblood[- ]lead\b|\blead[- ]safe\b|\blead free\b|\blead pigment\b|\blead abatement\b|\bpaint-lead\b|\bdust-lead\b)` / code (34494 units) / 18 hits: 8.01-226.7, 32.1-46.01, 32.1-46.1, 32.1-46.2, 36-106, 36-107.1, 54.1-500, 54.1-501, 54.1-503, 54.1-512, 54.1-516, 54.1-2133 +6
- `(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\bblood[- ]lead\b|\blead[- ]safe\b|\blead free\b|\blead pigment\b|\blead abatement\b|\bpaint-lead\b|\bdust-lead\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\blessors?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\brent(?:ed|ing)?\b)|(?:\btenants?\b|\blessees?\b|\blessors?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\brent(?:ed|ing)?\b)[\s\S]{0,1200}(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\bblood[- ]lead\b|\blead[- ]safe\b|\blead free\b|\blead pigment\b|\blead abatement\b|\bpaint-lead\b|\bdust-lead\b)` / all (35543 units) / 6 hits: 8.01-226.7, 36-106, 54.1-2133, 55.1-1227, 55.1-1244, 55.1-1244#v2
- `\A(?=[\s\S]*(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\bblood[- ]lead\b|\blead[- ]safe\b|\blead free\b|\blead pigment\b|\blead abatement\b|\bpaint-lead\b|\bdust-lead\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blessors?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\brent(?:ed|ing)?\b))(?=[\s\S]*(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bpamphlets?\b|\bcertificates?\b|\bcertif(?:y|ied|ication)\b|\bwritten statements?\b))` / all (35543 units) / 7 hits: 8.01-226.7, 36-106, 54.1-2133, 55.1-1227, 55.1-1244, 55.1-1244#v2, 12VAC5-630-10
- `(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\bblood[- ]lead\b|\blead[- ]safe\b|\blead free\b|\blead pigment\b|\blead abatement\b|\bpaint-lead\b|\bdust-lead\b)[\s\S]{0,1200}(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bpamphlets?\b|\bcertificates?\b|\bcertif(?:y|ied|ication)\b|\bwritten statements?\b)|(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bpamphlets?\b|\bcertificates?\b|\bcertif(?:y|ied|ication)\b|\bwritten statements?\b)[\s\S]{0,1200}(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\bblood[- ]lead\b|\blead[- ]safe\b|\blead free\b|\blead pigment\b|\blead abatement\b|\bpaint-lead\b|\bdust-lead\b)` / code (34494 units) / 11 hits: 8.01-226.7, 32.1-46.01, 36-106, 36-107.1, 54.1-2133, 54.1-2901, 55.1-703, 55.1-703#v2, 55.1-1227, 55.1-1244, 55.1-1244#v2
- `\bpeeling\b|\bchipping\b|\bflaking\b` / all (35543 units) / 2 hits: 13VAC5-63-520, 18VAC15-30-20
- positive [0] 8.01-226.7: passed
- positive [1] 55.1-1227: passed
- positive [2] 8.01-226.7: passed
- positive [4] 13VAC5-63-520: passed
**VA-G-0524** [lead-safe-certification]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\blead[- ]safe\b` / all (35543 units) / 1 hits: 18VAC15-30-25
- `(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\blead abatement\b|\blead[- ]safe\b)[\s\S]{0,1200}(?:\bcertificates?\b|\bcertif(?:y|ied|ication|ications)\b|\bexhibits?\b|\battach(?:ed|ment|ments)?\b|\bregist(?:er|ered|ration|ry)\b)|(?:\bcertificates?\b|\bcertif(?:y|ied|ication|ications)\b|\bexhibits?\b|\battach(?:ed|ment|ments)?\b|\bregist(?:er|ered|ration|ry)\b)[\s\S]{0,1200}(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\blead abatement\b|\blead[- ]safe\b)` / all (35543 units) / 25 hits: 13VAC5-63-520, 18VAC15-30-10, 18VAC15-30-20, 18VAC15-30-25, 18VAC15-30-52, 18VAC15-30-53, 18VAC15-30-54, 18VAC15-30-390, 18VAC15-30-437, 18VAC15-30-450, 18VAC15-30-460, 18VAC15-30-470 +13
- `\A(?=[\s\S]*(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\blead abatement\b|\blead[- ]safe\b))(?=[\s\S]*(?:\bcertificates?\b|\bcertif(?:y|ied|ication|ications)\b|\bexhibits?\b|\battach(?:ed|ment|ments)?\b|\bregist(?:er|ered|ration|ry)\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blandlords?\b|\bleases?\b|\brental\b))` / all (35543 units) / 0 hits
- `\bclearance (?:testing|tests?|examinations?|reports?)\b` / all (35543 units) / 3 hits: 54.1-500, 54.1-503, 13VAC5-63-120
- `\blead[- ]free (?:certificates?|certification|units?|housing|dwellings?)\b` / all (35543 units) / 0 hits
- positive [3] 54.1-503: passed
- positive [1] 8.01-226.7: recorded as failed
- positive [2] 54.1-2133: recorded as failed
**VA-G-0525** [lead-safe-certification]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0524 (positives for terms [1] and [2] were not confirmed before the run; same terms, positives from hits read)
- `\blead[- ]safe\b` / all (35543 units) / 1 hits: 18VAC15-30-25
- `(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\blead abatement\b|\blead[- ]safe\b)[\s\S]{0,1200}(?:\bcertificates?\b|\bcertif(?:y|ied|ication|ications)\b|\bexhibits?\b|\battach(?:ed|ment|ments)?\b|\bregist(?:er|ered|ration|ry)\b)|(?:\bcertificates?\b|\bcertif(?:y|ied|ication|ications)\b|\bexhibits?\b|\battach(?:ed|ment|ments)?\b|\bregist(?:er|ered|ration|ry)\b)[\s\S]{0,1200}(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\blead abatement\b|\blead[- ]safe\b)` / all (35543 units) / 25 hits: 13VAC5-63-520, 18VAC15-30-10, 18VAC15-30-20, 18VAC15-30-25, 18VAC15-30-52, 18VAC15-30-53, 18VAC15-30-54, 18VAC15-30-390, 18VAC15-30-437, 18VAC15-30-450, 18VAC15-30-460, 18VAC15-30-470 +13
- `\A(?=[\s\S]*(?:\blead[- ]based paint\b|\blead paint\b|\blead hazards?\b|\blead poisoning\b|\blead abatement\b|\blead[- ]safe\b))(?=[\s\S]*(?:\bcertificates?\b|\bcertif(?:y|ied|ication|ications)\b|\bexhibits?\b|\battach(?:ed|ment|ments)?\b|\bregist(?:er|ered|ration|ry)\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blandlords?\b|\bleases?\b|\brental\b))` / all (35543 units) / 0 hits
- `\bclearance (?:testing|tests?|examinations?|reports?)\b` / all (35543 units) / 3 hits: 54.1-500, 54.1-503, 13VAC5-63-120
- `\blead[- ]free (?:certificates?|certification|units?|housing|dwellings?)\b` / all (35543 units) / 0 hits
- positive [3] 54.1-503: passed
- positive [0] 18VAC15-30-25: passed
- positive [1] 13VAC5-63-520: passed
**VA-G-0526** [asbestos-hazards]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\basbestos\b|\basbestos-containing\b|\bACM\b)` / code (34494 units) / 41 hits: 1-405, 2.2-617, 2.2-1162, 2.2-1163, 2.2-1164, 2.2-1166, 2.2-1167, 2.2-4002, 2.2-4002#v2, 8.01-249, 8.01-250.1, 8.01-267.9 +29
- `(?:\basbestos\b|\basbestos-containing\b|\bACM\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\boccupants?\b|\bresidents?\b|\bdwelling units?\b)|(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\boccupants?\b|\bresidents?\b|\bdwelling units?\b)[\s\S]{0,1200}(?:\basbestos\b|\basbestos-containing\b|\bACM\b)` / all (35543 units) / 5 hits: 2.2-1164, 40.1-51.23, 54.1-500, 55.1-1982, 13VAC5-63-80
- `\A(?=[\s\S]*(?:\basbestos\b|\basbestos-containing\b|\bACM\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\boccupants?\b|\bresidents?\b|\bdwelling units?\b))(?=[\s\S]*(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwarn(?:ing|ings)?\b|\bpost(?:ed|ing)?\b|\binform(?:ed|ation)?\b))` / all (35543 units) / 3 hits: 2.2-1164, 55.1-1982, 13VAC5-63-80
- `(?:\basbestos\b|\basbestos-containing\b|\bACM\b)[\s\S]{0,1200}(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwarn(?:ing|ings)?\b|\bpost(?:ed|ing)?\b|\binform(?:ed|ation)?\b)|(?:\bdisclos(?:e|ed|es|ing|ure|ures)\b|\bnotif(?:y|ied|ies|ication)\b|\bnotices?\b|\bwarn(?:ing|ings)?\b|\bpost(?:ed|ing)?\b|\binform(?:ed|ation)?\b)[\s\S]{0,1200}(?:\basbestos\b|\basbestos-containing\b|\bACM\b)` / code (34494 units) / 10 hits: 2.2-1162, 2.2-1164, 8.01-335, 40.1-51.20, 40.1-51.26, 40.1-51.28, 40.1-51.32, 54.1-300, 54.1-504.1, 55.1-1982
- `\b(?:popcorn ceilings?|vermiculite|pipe insulation|floor tiles?)\b` / all (35543 units) / 0 hits
- positive [0] 36-99.7: passed
- positive [3] 54.1-504.1: passed
**VA-G-0527** [private-well-testing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bprivate wells?\b` / code (34494 units) / 14 hits: 10.1-1413.3, 32.1-164, 32.1-176.1, 32.1-176.2, 32.1-176.3, 32.1-176.4, 32.1-176.5, 32.1-176.5:1, 32.1-176.5:2, 32.1-176.8:1, 32.1-248.4, 62.1-44.18 +2
- `(?:\bprivate wells?\b|\bwater wells?\b|\bwell water\b|\bdrinking water wells?\b|\bwells? (?:water|supply|supplies)\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\boccupants?\b|\bresidents?\b|\brent(?:ed|ing)?\b)|(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\boccupants?\b|\bresidents?\b|\brent(?:ed|ing)?\b)[\s\S]{0,1200}(?:\bprivate wells?\b|\bwater wells?\b|\bwell water\b|\bdrinking water wells?\b|\bwells? (?:water|supply|supplies)\b)` / all (35543 units) / 4 hits: 36-97, 45.2-1648, 12VAC5-630-10, 13VAC5-63-200 / heading-only: 10.1-1413.3
- `\A(?=[\s\S]*(?:\bprivate wells?\b|\bwater wells?\b|\bwell water\b|\bdrinking water wells?\b|\bwells? (?:water|supply|supplies)\b))(?=[\s\S]*(?:\btest(?:s|ed|ing)?\b|\bsampl(?:e|es|ed|ing)\b|\banaly(?:sis|ses|zed)\b|\bresults?\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bleases?\b|\boccupants?\b|\bresidents?\b|\brent(?:ed|ing)?\b))` / all (35543 units) / 7 hits: 36-97, 45.2-1600, 45.2-1648, 12VAC5-630-10, 13VAC5-63-200, 13VAC5-63-210, 13VAC5-63-320 / heading-only: 10.1-1413.3
- `(?:\bprivate wells?\b|\bwater wells?\b|\bwell water\b|\bdrinking water wells?\b|\bwells? (?:water|supply|supplies)\b)[\s\S]{0,1200}(?:\btest(?:s|ed|ing)?\b|\bsampl(?:e|es|ed|ing)\b|\banaly(?:sis|ses|zed)\b|\bresults?\b)|(?:\btest(?:s|ed|ing)?\b|\bsampl(?:e|es|ed|ing)\b|\banaly(?:sis|ses|zed)\b|\bresults?\b)[\s\S]{0,1200}(?:\bprivate wells?\b|\bwater wells?\b|\bwell water\b|\bdrinking water wells?\b|\bwells? (?:water|supply|supplies)\b)` / code (34494 units) / 9 hits: 32.1-176.4, 32.1-176.5, 32.1-176.5:1, 32.1-176.5:2, 32.1-176.8:1, 45.2-1600, 45.2-1648, 54.1-1128, 62.1-44.18 / heading-only: 10.1-1413.3
- `\b(?:coliform|nitrates?|bacteriological)\b` / all (35543 units) / 12 hits: 18.2-248, 18.2-248#v2, 32.1-169, 32.1-170, 62.1-44.19:3, 62.1-44.19:3#v2, 62.1-65, 12VAC5-630-10, 12VAC5-630-431, 13VAC5-52-70, 13VAC5-52-150, 13VAC5-52-620
- positive [0] 32.1-176.8:1: passed
- positive [3] 32.1-176.8:1: passed
- positive [4] 12VAC5-630-431: passed
**VA-G-0528** [habitability-statement]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bhabitab(?:le|ility)\b|\bfit (?:for|and) (?:human )?habitation\b|\bfit and habitable\b|\bfitness for habitation\b|\bwarranty of habitability\b)` / code:55\.1- (897 units) / 9 hits: 55.1-357, 55.1-1200, 55.1-1212.1, 55.1-1220, 55.1-1240#v2, 55.1-1259, 55.1-1303, 55.1-1320, 55.1-1955
- `(?:\bhabitab(?:le|ility)\b|\bfit (?:for|and) (?:human )?habitation\b|\bfit and habitable\b|\bfitness for habitation\b|\bwarranty of habitability\b)[\s\S]{0,1200}(?:\b(?:rental agreements?|leases?|written rental agreements?) shall (?:state|contain|include|provide|set forth)\b|\bshall be (?:stated|included|set forth) in (?:the|any|every) (?:rental agreement|lease)\b|\binclude in (?:the|a|any|every) (?:rental agreement|lease)\b)|(?:\b(?:rental agreements?|leases?|written rental agreements?) shall (?:state|contain|include|provide|set forth)\b|\bshall be (?:stated|included|set forth) in (?:the|any|every) (?:rental agreement|lease)\b|\binclude in (?:the|a|any|every) (?:rental agreement|lease)\b)[\s\S]{0,1200}(?:\bhabitab(?:le|ility)\b|\bfit (?:for|and) (?:human )?habitation\b|\bfit and habitable\b|\bfitness for habitation\b|\bwarranty of habitability\b)` / all (35543 units) / 0 hits
- `\A(?=[\s\S]*(?:\bhabitab(?:le|ility)\b|\bfit (?:for|and) (?:human )?habitation\b|\bfit and habitable\b|\bfitness for habitation\b|\bwarranty of habitability\b))(?=[\s\S]*(?:\brental agreements?\b|\bleases?\b))` / code (34494 units) / 6 hits: 36-85.16, 55.1-357, 55.1-1200, 55.1-1240#v2, 55.1-1259, 55.1-1303
- `(?:\b(?:rental agreements?|leases?|written rental agreements?) shall (?:state|contain|include|provide|set forth)\b|\bshall be (?:stated|included|set forth) in (?:the|any|every) (?:rental agreement|lease)\b|\binclude in (?:the|a|any|every) (?:rental agreement|lease)\b)` / code:55\.1-1[2-4] (153 units) / 5 hits: 55.1-1204, 55.1-1204#v2, 55.1-1204.1, 55.1-1253, 55.1-1302
- `\b(?:livable|safe to live in|fit to live in|good repair)\b[\s\S]{0,1200}\b(?:rental agreements?|leases?)\b|\b(?:rental agreements?|leases?)\b[\s\S]{0,1200}\b(?:livable|safe to live in|fit to live in|good repair)\b` / code:55\.1- (897 units) / 1 hits: 55.1-1603
- positive [0] 55.1-1220: passed
- positive [2] 55.1-1259: passed
**VA-G-0529** [habitability-presumption]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b)` / code:55\.1-12 (91 units) / 19 hits: 55.1-1200, 55.1-1201, 55.1-1206, 55.1-1212, 55.1-1212#v2, 55.1-1214, 55.1-1215, 55.1-1217, 55.1-1226, 55.1-1229, 55.1-1241, 55.1-1244 +7
- `\brebuttable presumption\b` / all (35543 units) / 64 hits: 2.2-3909, 3.2-6503.1, 8.01-226.12, 8.01-413, 10.1-1232, 10.1-1418.1, 13.1-847.1, 15.2-937, 15.2-968.1, 15.2-968.1#v2, 15.2-968.1#v3, 15.2-1507 +52 / heading-only: 59.1-514.1
- `(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b)[\s\S]{0,1200}(?:\bviolations?\b|\bcode\b|\bcondition\b|\brepairs?\b|\bhabitab(?:le|ility)\b)|(?:\bviolations?\b|\bcode\b|\bcondition\b|\brepairs?\b|\bhabitab(?:le|ility)\b)[\s\S]{0,1200}(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b)` / code:55\.1-1[2-4] (153 units) / 13 hits: 55.1-135, 55.1-1206, 55.1-1214, 55.1-1215, 55.1-1229, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250 +1
- `\A(?=[\s\S]*(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))(?=[\s\S]*(?:\brepairs?\b|\bhabitab(?:le|ility)\b|\bnoncompliance\b))` / code (34494 units) / 16 hits: 2.2-2340, 15.2-907, 18.2-340.16, 54.1-2139, 55.1-306.1, 55.1-1214, 55.1-1226, 55.1-1229, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1245 +4
- `\bshall be presumed\b[\s\S]{0,1200}\b(?:landlords?|tenants?)\b|\b(?:landlords?|tenants?)\b[\s\S]{0,1200}\bshall be presumed\b` / all (35543 units) / 6 hits: 54.1-2130, 54.1-2139.01, 55.1-135, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- positive [1] 55.1-1241: passed
- positive [0] 55.1-1244: passed
**VA-G-0530** [habitability-presumption]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0529 (INFLECTION line on term [2]: inflected forms added)
- `(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b)` / code:55\.1-12 (91 units) / 19 hits: 55.1-1200, 55.1-1201, 55.1-1206, 55.1-1212, 55.1-1212#v2, 55.1-1214, 55.1-1215, 55.1-1217, 55.1-1226, 55.1-1229, 55.1-1241, 55.1-1244 +7
- `\brebuttable presumptions?\b` / all (35543 units) / 68 hits: 2.2-3909, 3.2-6503.1, 8.01-226.12, 8.01-413, 10.1-1232, 10.1-1418.1, 13.1-847.1, 15.2-937, 15.2-968.1, 15.2-968.1#v2, 15.2-968.1#v3, 15.2-1507 +56 / heading-only: 59.1-514.1
- `(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b)[\s\S]{0,1200}(?:\bviolat(?:e|es|ed|ing|ion|ions)\b|\bcodes?\b|\bconditions?\b|\brepair(?:s|ed|ing)?\b|\bhabitab(?:le|ility)\b)|(?:\bviolat(?:e|es|ed|ing|ion|ions)\b|\bcodes?\b|\bconditions?\b|\brepair(?:s|ed|ing)?\b|\bhabitab(?:le|ility)\b)[\s\S]{0,1200}(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b)` / code:55\.1-1[2-4] (153 units) / 16 hits: 55.1-135, 55.1-1200, 55.1-1201, 55.1-1206, 55.1-1214, 55.1-1215, 55.1-1229, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1245, 55.1-1245#v2 +4
- `\A(?=[\s\S]*(?:\bpresum(?:e|ed|es|ption|ptions|ptive)\b|\bprima facie\b|\bdeemed\b|\bburden (?:of proof )?shall be\b|\bburden of proof\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b))(?=[\s\S]*(?:\brepair(?:s|ed|ing)?\b|\bhabitab(?:le|ility)\b|\bnoncompliance\b))` / code (34494 units) / 16 hits: 2.2-2340, 15.2-907, 18.2-340.16, 54.1-2139, 55.1-306.1, 55.1-1214, 55.1-1226, 55.1-1229, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1245 +4
- `\bshall be presumed\b[\s\S]{0,1200}\b(?:landlords?|tenants?)\b|\b(?:landlords?|tenants?)\b[\s\S]{0,1200}\bshall be presumed\b` / all (35543 units) / 6 hits: 54.1-2130, 54.1-2139.01, 55.1-135, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- positive [1] 55.1-1241: passed
- positive [0] 55.1-1244: passed
**VA-G-0531** [habitability-materiality]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bmaterially affecting health and safety\b|\bmaterial noncompliance\b` / code:55\.1-1[2-4] (153 units) / 18 hits: 55.1-1209, 55.1-1209#v2, 55.1-1220, 55.1-1227, 55.1-1229, 55.1-1234, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1245, 55.1-1245#v2 +6
- `\bserious threat to the life, health, or safety\b` / all (35543 units) / 6 hits: 55.1-1234.1, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1259
- `\b(?:cosmetic|minor|trivial|decorative|insubstantial|de minimis)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|rental agreements?)\b|\b(?:tenants?|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:cosmetic|minor|trivial|decorative|insubstantial|de minimis)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:cosmetic|trivial|decorative|insubstantial|de minimis)\b)(?=[\s\S]*\b(?:tenants?|landlords?)\b)(?=[\s\S]*\b(?:repairs?|conditions?|defects?)\b)` / code (34494 units) / 1 hits: 55.1-306.1
- `\b(?:fresh paint|small cracks|floor coverings?|rugs)\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 55.1-1234: passed
- positive [1] 55.1-1234.1: passed
**VA-G-0532** [confirmed-absences-habitability]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bwithh(?:o|e)ld(?:s|ing)?\b[\s\S]{0,1200}\brent\b|\brent\b[\s\S]{0,1200}\bwithh(?:o|e)ld(?:s|ing)?\b` / code:55\.1-12 (91 units) / 3 hits: 55.1-1203, 55.1-1203#v2, 55.1-1226
- `\A(?=[\s\S]*\bwithh(?:o|e)ld(?:s|ing)?\b)(?=[\s\S]*\brent\b)(?=[\s\S]*\b(?:repairs?|conditions?|noncompliance)\b)` / code (34494 units) / 5 hits: 2.2-3705.7, 38.2-3407.10, 46.2-1569, 55.1-1226, 55.1-1229
- `\bescrow\b` / code:55\.1-12 (91 units) / 7 hits: 55.1-1205, 55.1-1206, 55.1-1226, 55.1-1237, 55.1-1242, 55.1-1244, 55.1-1244#v2
- `\b(?:deduct(?:s|ed|ing)?|offset|set off|setoff)\b[\s\S]{0,1200}\brent\b|\brent\b[\s\S]{0,1200}\b(?:deduct(?:s|ed|ing)?|offset|set off|setoff)\b` / code:55\.1-12 (91 units) / 2 hits: 55.1-1200, 55.1-1244.1
- positive [2] 55.1-1244: passed
- positive [3] 55.1-1244.1: passed
**VA-G-0601** [tenant-repair-remedies]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bescrow(?:ed|s)?\b[\s\S]{0,1200}(?:unlawful detainer|\bpossession\b|\bevict\w*)|(?:unlawful detainer|\bpossession\b|\bevict\w*)[\s\S]{0,1200}\bescrow(?:ed|s)?\b` / code (34494 units) / 8 hits: 2.2-4403, 2.2-4404, 6.2-1081, 19.2-368.20, 55.1-1226, 55.1-1242, 55.1-1244, 55.1-1244#v2
- `\A(?=[\s\S]*\bescrow(?:ed|s)?\b)(?=[\s\S]*(?:unlawful detainer|\bevict\w*))(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / code (34494 units) / 4 hits: 55.1-1226, 55.1-1242, 55.1-1244, 55.1-1244#v2
- `unfit for (?:human )?habitation|\bcertif(?:y|ied|ies|ication)\b[\s\S]{0,200}\bunfit\b` / all (35536 units) / 5 hits: 3.2-6514, 3.2-6515, 3.2-6516, 54.1-204, 13VAC5-63-180
- `\bwithh(?:o|e)ld(?:s|ing)?\b[\s\S]{0,1200}\brent\b|\brent\b[\s\S]{0,1200}\bwithh(?:o|e)ld(?:s|ing)?\b` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-1203, 55.1-1203#v2, 55.1-1226
- positive [0] 55.1-1242: passed
- positive [1] 55.1-1242: passed
**VA-G-0602** [repair-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:verbal(?:ly)?|oral(?:ly)?)\b[\s\S]{0,1200}\bnotic(?:e|es|ed)\b|\bnotic(?:e|es|ed)\b[\s\S]{0,1200}\b(?:verbal(?:ly)?|oral(?:ly)?)\b` / code:55\.1-1[2-4] (153 units) / 4 hits: 55.1-1200, 55.1-1217, 55.1-1218, 55.1-1219
- `\A(?=[\s\S]*\b(?:verbal(?:ly)?|oral(?:ly)?)\b)(?=[\s\S]*\bnotic(?:e|es|ed)\b)(?=[\s\S]*\b(?:landlords?|tenants?|lessors?|lessees?)\b)(?=[\s\S]*\brepair(?:s|ed|ing)?\b)` / code (34494 units) / 1 hits: 46.2-1232
- `\bwaive(?:s|d|r)?\b[\s\S]{0,1200}\bwritten notice\b|\bwritten notice\b[\s\S]{0,1200}\bwaive(?:s|d|r)?\b` / code:55\.1-1[2-4] (153 units) / 7 hits: 55.1-1206, 55.1-1229, 55.1-1250, 55.1-1305, 55.1-1308, 55.1-1309, 55.1-1410
- `\b(?:telephone|phone|text message|e-?mail)\b[\s\S]{0,1200}\brepair(?:s|ed|ing)?\b|\brepair(?:s|ed|ing)?\b[\s\S]{0,1200}\b(?:telephone|phone|text message|e-?mail)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\bmaintenance requests?\b|\brepair requests?\b|\brequests? (?:for|a) (?:maintenance|repairs?)\b` / all (35542 units) / 2 hits: 23.1-208, 55.1-1229
- positive [0] 55.1-1200: passed
- positive [4] 55.1-1229: passed
**VA-G-0603** [promises-to-repair]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bpromis(?:e|es|ed|ing)\b[\s\S]{0,1200}\b(?:repair(?:s|ed|ing)?|clean(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|renovat(?:e|es|ed|ion|ions)|decorat(?:e|es|ed|ion|ions))\b|\b(?:repair(?:s|ed|ing)?|clean(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|renovat(?:e|es|ed|ion|ions)|decorat(?:e|es|ed|ion|ions))\b[\s\S]{0,1200}\bpromis(?:e|es|ed|ing)\b` / all (35542 units) / 10 hits: 2.2-3705.6, 2.2-3705.6#v2, 18.2-200.1, 38.2-1845.12, 51.5-112, 55.1-101, 55.1-1411, 55.1-2165, 55.1-2217, 55.1-2234
- `\A(?=[\s\S]*\bpromis(?:e|es|ed|ing)\b)(?=[\s\S]*\b(?:repair(?:s|ed|ing)?|clean(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|renovat(?:e|es|ed|ion|ions)|decorat(?:e|es|ed|ion|ions))\b)(?=[\s\S]*\b(?:landlords?|tenants?|lessors?|lessees?|rental agreements?)\b)` / code (34494 units) / 5 hits: 2.2-3705.6, 2.2-3705.6#v2, 55.1-1200, 55.1-1411, 55.1-2217
- `\bagreed[- ]upon (?:repairs?|services?|improvements?)\b|\bagreed (?:repairs?|improvements?)\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1229
- `\bcompletion date\b|\bdate (?:of|for) completion\b|\bto be completed\b` / code:55\.1 (897 units) / 0 hits
- `\b(?:prior to|before)\b[\s\S]{0,1200}\b(?:execution|signing|sign(?:s|ed)?)\b[\s\S]{0,1200}\b(?:repair(?:s|ed|ing)?|clean(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|renovat(?:e|es|ed|ion|ions)|decorat(?:e|es|ed|ion|ions))\b|\b(?:repair(?:s|ed|ing)?|clean(?:s|ed|ing)?|improve(?:s|d|ment|ments)?|renovat(?:e|es|ed|ion|ions)|decorat(?:e|es|ed|ion|ions))\b[\s\S]{0,1200}\b(?:prior to|before)\b[\s\S]{0,1200}\b(?:execution|signing|sign(?:s|ed)?)\b` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-1208, 55.1-1219, 55.1-1303
- positive [2] 55.1-1229: passed
**VA-G-0604** [designated-repairer]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bdesignat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:contractors?|repair(?:s|er|ers|man|men|ing|ed)?|vendors?|pest(?:icide)? business(?:es)?)\b|\b(?:contractors?|repair(?:s|er|ers|man|men|ing|ed)?|vendors?|pest(?:icide)? business(?:es)?)\b[\s\S]{0,1200}\bdesignat(?:e|es|ed|ing|ion)\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1209, 55.1-1209#v2
- `\A(?=[\s\S]*\bdesignat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*\bcontractors?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:landlords?|lessors?)\b)` / code (34494 units) / 5 hits: 38.2-1887, 54.1-2130, 54.1-2139.1, 55.1-1209, 55.1-1209#v2
- `\bcontractors? chosen by the landlord\b|\blicensed contractors?\b|\bthird-party (?:licensed )?contractors?\b` / code:55\.1 (897 units) / 4 hits: 55.1-1226, 55.1-1244, 55.1-1244#v2, 55.1-1244.1
- `\b(?:approved|preferred|selected|chosen) (?:by the landlord )?(?:contractors?|vendors?|repairers?|repairm[ae]n)\b` / all (35542 units) / 6 hits: 2.2-4303.1, 15.2-1723.2, 22.1-253.13:1, 23.1-815.1, 52-4.5, 56-585.7
- positive [2] 55.1-1244: passed
- positive [2] 55.1-1244.1: passed
**VA-G-0605** [repair-cost-termination]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:costs?|expenses?)\b (?:of|to) (?:the )?(?:repairs?|repair|restor\w*|rehabilitat\w*|remedy|correct\w*)\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:costs?|expenses?)\b (?:of|to) (?:the )?(?:repairs?|repair|restor\w*|rehabilitat\w*|remedy|correct\w*)\b` / code (34494 units) / 7 hits: 8.2A-309, 8.2A-310, 38.2-2119, 55.1-1226, 55.1-1229, 55.1-1241, 55.1-2145
- `\A(?=[\s\S]*\b(?:costs?|expenses?)\b (?:of|to) (?:the )?(?:repairs?|repair|restor\w*|rehabilitat\w*|remedy|correct\w*)\b)(?=[\s\S]*\bterminat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|leases?)\b)` / code (34494 units) / 6 hits: 8.2A-309, 8.2A-310, 55.1-1226, 55.1-1229, 55.1-1241, 55.1-2145
- `\b(?:alteration|remodeling|demolition)\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:alteration|remodeling|demolition)\b` / code:55\.1-1[2-4] (153 units) / 4 hits: 55.1-1258, 55.1-1258#v2, 55.1-1314#v2, 55.1-1410
- `\b(?:economically (?:in)?feasible|not economical|uneconomical|too expensive|cost-prohibitive|prohibitively expensive)\b` / all (35543 units) / 19 hits: 2.2-507, 2.2-510, 10.1-636, 15.2-931, 15.2-2108.29, 16.1-69.39:1, 18.2-273.2, 19.2-349, 19.2-349#v2, 33.2-804, 33.2-3100, 45.2-1028 +7
- `\brepairs?\b[\s\S]{0,1200}\b(?:percent|one-half)\b[\s\S]{0,1200}\b(?:value|assessed)\b` / code:55\.1 (897 units) / 0 hits
- positive [2] 55.1-1258: passed
**VA-G-0606** [repair-escrow-exemption-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:exempt(?:s|ed|ion|ions)?|opt(?:s|ed)? out|not (?:be )?(?:subject|applicable))\b[\s\S]{0,1200}\b(?:escrow(?:ed|s)?|tenant\'s assertion|remedy by repair|repairs?)\b|\b(?:escrow(?:ed|s)?|tenant\'s assertion|remedy by repair|repairs?)\b[\s\S]{0,1200}\b(?:exempt(?:s|ed|ion|ions)?|opt(?:s|ed)? out|not (?:be )?(?:subject|applicable))\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:exempt(?:s|ed|ion|ions)?|opt(?:s|ed)? out)\b)(?=[\s\S]*\bescrow(?:ed|s)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / code (34494 units) / 1 hits: 55.1-1206
- `\b(?:four|two|three) or fewer\b[\s\S]{0,1200}\b(?:units?|dwellings?)\b` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-1204, 55.1-1204#v2, 55.1-1250
- `\bexempt(?:s|ed|ion|ions)? from (?:the provisions of )?this chapter\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1201
- `\bsmall landlords?\b|\b(?:single-family )?(?:homeowners?|owners?) who (?:own|rent|lease)s?\b[\s\S]{0,300}\b(?:units?|dwellings?)\b` / all (35543 units) / 1 hits: 44-209
- positive [3] 55.1-1201: passed
- positive [0] 55.1-1201: recorded as failed
**VA-G-0607** [repair-escrow-exemption-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0606 (VA-G-0606 named § 55.1-1201 as a positive for term [0], which it does not contain (exempt is not near escrow or repair there); rerun with correct positives and a 1,200-character window on term [4])
- `\b(?:exempt(?:s|ed|ion|ions)?|opt(?:s|ed)? out|not (?:be )?(?:subject|applicable))\b[\s\S]{0,1200}\b(?:escrow(?:ed|s)?|tenant\'s assertion|remedy by repair|repairs?)\b|\b(?:escrow(?:ed|s)?|tenant\'s assertion|remedy by repair|repairs?)\b[\s\S]{0,1200}\b(?:exempt(?:s|ed|ion|ions)?|opt(?:s|ed)? out|not (?:be )?(?:subject|applicable))\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:exempt(?:s|ed|ion|ions)?|opt(?:s|ed)? out)\b)(?=[\s\S]*\bescrow(?:ed|s)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / code (34494 units) / 1 hits: 55.1-1206
- `\b(?:four|two|three) or fewer\b[\s\S]{0,1200}\b(?:units?|dwellings?)\b` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-1204, 55.1-1204#v2, 55.1-1250
- `\bexempt(?:s|ed|ion|ions)? from (?:the provisions of )?this chapter\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1201
- `\bsmall landlords?\b|\b(?:single-family )?(?:homeowners?|owners?) who (?:own|rent|lease)s?\b[\s\S]{0,1200}\b(?:units?|dwellings?)\b` / all (35543 units) / 1 hits: 44-209
- positive [3] 55.1-1201: passed
- positive [2] 55.1-1204: passed
**VA-G-0608** [rent-into-court-counterclaim]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:paid|pay|pays|paying|deposit(?:s|ed|ing)?|escrow(?:ed)?)\b[\s\S]{0,80}\binto (?:the |a )?(?:general district )?(?:court|registry|court escrow account)\b` / code (34494 units) / 49 hits: 6.2-1002, 6.2-1083, 8.01-364, 8.01-373, 8.01-421, 8.01-427, 8.01-456, 8.01-517, 15.2-1904, 15.2-1912, 15.2-1916, 19.2-148 +37 / heading-only: 25.1-241
- `\A(?=[\s\S]*\b(?:paid|pay|pays|paying|deposit(?:s|ed|ing)?|escrow(?:ed)?)\b[\s\S]{0,80}\binto (?:the |a )?(?:general district )?(?:court|registry|court escrow account)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:landlords?|lessors?|rent)\b)` / code (34494 units) / 5 hits: 55.1-1242, 55.1-1244, 55.1-1244#v2, 55.1-1250, 55.1-1262
- `\b(?:paid|pay|pays|paying|deposit(?:s|ed|ing)?|escrow(?:ed)?)\b[\s\S]{0,80}\binto (?:the |a )?(?:general district )?(?:court|registry|court escrow account)\b[\s\S]{0,1200}\bdefen[cs]es?\b|\bdefen[cs]es?\b[\s\S]{0,1200}\b(?:paid|pay|pays|paying|deposit(?:s|ed|ing)?|escrow(?:ed)?)\b[\s\S]{0,80}\binto (?:the |a )?(?:general district )?(?:court|registry|court escrow account)\b` / code (34494 units) / 2 hits: 55.1-1242, 55.1-2441
- `\bregistry of the court\b|\bcourt registry\b` / all (35543 units) / 0 hits
- `\bjury\b[\s\S]{0,1200}\brent(?:s|al)?\b|\brent(?:s|al)?\b[\s\S]{0,1200}\bjury\b` / code:(?:8\.01-1[23]|16\.1|55\.1) (1390 units) / 2 hits: 55.1-1236, 55.1-1418
- `\b(?:adjourn\w*|postpone\w*|continuances?)\b[\s\S]{0,1200}\brent\b|\brent\b[\s\S]{0,1200}\b(?:adjourn\w*|postpone\w*|continuances?)\b` / code:(?:8\.01-1[23]|16\.1|55\.1-1[2-4]) (646 units) / 6 hits: 8.01-128, 8.01-130.9, 55.1-1242, 55.1-1244, 55.1-1244#v2, 55.1-1262
- positive [0] 55.1-1244: passed
- positive [2] 55.1-1242: passed
- positive [5] 55.1-1242: passed
**VA-G-0609** [rent-into-court-counterclaim]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\binto (?:the |a )?(?:general district |circuit )?(?:court|court escrow account|court account)\b[\s\S]{0,1200}\bdefen[cs]es?\b|\bdefen[cs]es?\b[\s\S]{0,1200}\binto (?:the |a )?(?:general district |circuit )?(?:court|court escrow account|court account)\b` / code (34494 units) / 2 hits: 55.1-1242, 55.1-2441
- `\A(?=[\s\S]*\binto (?:the |a )?(?:general district |circuit )?(?:court|court escrow account|court account)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\brent(?:s|al)?\b)` / code (34494 units) / 8 hits: 16.1-107, 46.2-819.5, 55.1-1237, 55.1-1242, 55.1-1244, 55.1-1244#v2, 55.1-1250, 55.1-1262
- `\A(?=[\s\S]*\binto (?:the |a )?(?:general district |circuit )?(?:court|court escrow account|court account)\b)(?=[\s\S]*\bunlawful detainer\b)` / code (34494 units) / 6 hits: 16.1-107, 55.1-1242, 55.1-1244, 55.1-1244#v2, 55.1-1250, 55.1-1262
- `\bcourt (?:escrow )?accounts?\b[\s\S]{0,1200}\b(?:tenants?|defendants?)\b|\b(?:tenants?|defendants?)\b[\s\S]{0,1200}\bcourt (?:escrow )?accounts?\b` / code:(?:8\.01|16\.1|55\.1) (2471 units) / 4 hits: 16.1-107, 55.1-1237, 55.1-1242, 55.1-1244#v2
- positive [1] 55.1-1244: passed
- positive [2] 16.1-107: passed
- positive [0] 55.1-1242: passed
**VA-G-0610** [subsidy-habitability-proration]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:housing assistance payments?|rental assistance|rent(?:al)? subsid(?:y|ies)|subsidi[sz]ed|subsid(?:y|ies)|vouchers?|section 8|public agency paying)\b[\s\S]{0,1200}\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|es|ed|ion|ing)|apportion(?:s|ed|ment)?|reduc(?:e|es|ed|tion|ing))\b|\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|es|ed|ion|ing)|apportion(?:s|ed|ment)?|reduc(?:e|es|ed|tion|ing))\b[\s\S]{0,1200}\b(?:housing assistance payments?|rental assistance|rent(?:al)? subsid(?:y|ies)|subsidi[sz]ed|subsid(?:y|ies)|vouchers?|section 8|public agency paying)\b` / code:(?:55\.1|36-) (1241 units) / 1 hits: 36-142
- `\A(?=[\s\S]*\b(?:housing assistance payments?|rental assistance|rent(?:al)? subsid(?:y|ies)|subsidi[sz]ed|subsid(?:y|ies)|vouchers?|section 8|public agency paying)\b)(?=[\s\S]*\b(?:abat(?:e|es|ed|ement|ing)|prorat(?:e|es|ed|ion|ing)|apportion(?:s|ed|ment)?|reduc(?:e|es|ed|tion|ing))\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:repairs?|habitab\w*|unfit|deficienc\w*|condition)\b)` / code (34494 units) / 0 hits
- `\btenant-based rental assistance\b|\bHousing Choice Voucher\b` / all (35543 units) / 5 hits: 55.1-1202, 55.1-1202#v2, 55.1-1258#v2, 55.1-1314#v2, 58.1-439.12:04
- `\b(?:tenant\'s|family\'s) (?:share|portion)\b|\bportion of (?:the )?rent\b` / code (34494 units) / 5 hits: 8.01-99, 8.2A-522, 18.2-340.16, 55.1-1250, 58.1-439.12:04
- `\bhousing quality standards?\b|\bHQS\b` / all (35543 units) / 0 hits
- positive [2] 55.1-1202: passed
**VA-G-0611** [subsidized-inspection-refusal]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:source of funds|vouchers?|housing assistance|rental assistance|subsid(?:y|ies|ized)|section 8|request for tenancy approval)\b[\s\S]{0,1200}\binspect(?:s|ed|ing|ion|ions)?\b|\binspect(?:s|ed|ing|ion|ions)?\b[\s\S]{0,1200}\b(?:source of funds|vouchers?|housing assistance|rental assistance|subsid(?:y|ies|ized)|section 8|request for tenancy approval)\b` / code:(?:36-|55\.1) (1241 units) / 1 hits: 36-96.3
- `\A(?=[\s\S]*\b(?:source of funds|vouchers?|housing assistance|rental assistance|subsid(?:y|ies|ized)|section 8|request for tenancy approval)\b)(?=[\s\S]*\binspect(?:s|ed|ing|ion|ions)?\b)(?=[\s\S]*\b(?:rent(?:s|al)?|landlords?|owners?)\b)` / all (35543 units) / 9 hits: 2.2-3705.7, 15.2-2160, 33.2-3100, 36-96.3, 56-265.4:4, 13VAC5-52-480, 18VAC135-50-50, 18VAC135-50-100, 18VAC135-50-120
- `\brequest for tenancy approval\b` / all (35543 units) / 2 hits: 36-96.2, 36-96.2#v2
- `\b(?:refus\w*|decline\w*|deny|denies|denied|denying)\b[\s\S]{0,1200}\b(?:program requirements?|paperwork|contract with the (?:housing )?(?:authority|agency))\b|\b(?:program requirements?|paperwork|contract with the (?:housing )?(?:authority|agency))\b[\s\S]{0,1200}\b(?:refus\w*|decline\w*|deny|denies|denied|denying)\b` / code:(?:36-|55\.1) (1241 units) / 0 hits
- positive [2] 36-96.2: passed
**VA-G-0612** [alt-housing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:substitute|alternate|alternative|temporary|replacement|emergency) (?:housing|lodging|accommodations?|dwellings?|shelter)\b` / code:55\.1 (897 units) / 2 hits: 55.1-1239, 55.1-2219
- `\A(?=[\s\S]*\b(?:substitute|alternate|alternative|temporary|replacement|emergency) (?:housing|lodging|accommodations?|dwellings?|shelter)\b)(?=[\s\S]*\b(?:landlords?|lessors?|owners?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?)\b)` / all (35543 units) / 3 hits: 25.1-400, 25.1-417, 55.1-1239
- `\b(?:hotels?|motels?|comparable dwelling units?)\b[\s\S]{0,1200}\b(?:relocat\w*|vacate\w*)\b|\b(?:relocat\w*|vacate\w*)\b[\s\S]{0,1200}\b(?:hotels?|motels?|comparable dwelling units?)\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1229, 55.1-1231
- `\brelocation (?:assistance|benefits|payments?|expenses?|costs?)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|owners?)\b|\b(?:tenants?|landlords?|owners?)\b[\s\S]{0,1200}\brelocation (?:assistance|benefits|payments?|expenses?|costs?)\b` / code (34494 units) / 5 hits: 25.1-230.1, 25.1-411, 36-27, 36-55.26, 55.1-1308.1 / heading-only: 15.2-737
- positive [0] 55.1-1239: passed
- positive [2] 55.1-1229: passed
**VA-G-0613** [disaster-duties]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b[\s\S]{0,1200}\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b|\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b[\s\S]{0,1200}\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b` / code:(?:55\.1|44-) (1131 units) / 4 hits: 44-208, 55.1-1229, 55.1-1245, 55.1-1245#v2 / heading-only: 55.1-1245#v3
- `\A(?=[\s\S]*\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b)(?=[\s\S]*\brent\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\bterminat(?:e|es|ed|ion|ing)\b)` / code (34494 units) / 3 hits: 55.1-1229, 55.1-1245, 55.1-1245#v2
- `\b(?:inaccessible|cannot be reached|unable to (?:access|reach|occupy)|prevent\w* (?:the tenant )?from occupying)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\b(?:hurricanes?|tornado(?:es|s)?|earthquakes?|flood(?:s|ing|ed)?|storms?|wildfires?)\b[\s\S]{0,1200}\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b|\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b[\s\S]{0,1200}\b(?:hurricanes?|tornado(?:es|s)?|earthquakes?|flood(?:s|ing|ed)?|storms?|wildfires?)\b` / code:55\.1 (897 units) / 2 hits: 55.1-1206, 55.1-1301
- `\bunconscionable price\b` / code (34494 units) / 3 hits: 59.1-527, 59.1-529.1, 59.1-535
- positive [0] 55.1-1229: passed
- positive [3] 55.1-1206: passed
- positive [4] 59.1-527: passed
- positive [2] 55.1-1235: recorded as failed
**VA-G-0614** [disaster-duties]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0613 (VA-G-0613 term [2] did not match "prevents the service member from occupying" in § 55.1-1235 (positive recorded as failed); widened the phrase and added an all-sources AND)
- `\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b[\s\S]{0,1200}\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b|\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b[\s\S]{0,1200}\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b` / code:(?:55\.1|44-) (1131 units) / 4 hits: 44-208, 55.1-1229, 55.1-1245, 55.1-1245#v2 / heading-only: 55.1-1245#v3
- `\A(?=[\s\S]*\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b)(?=[\s\S]*\brent\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\bterminat(?:e|es|ed|ion|ing)\b)` / code (34494 units) / 3 hits: 55.1-1229, 55.1-1245, 55.1-1245#v2
- `\b(?:inaccessible|cannot be reached|unable to (?:access|reach|occupy))\b|\bprevent\w* (?:\w+ ){0,3}from occupying\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1235
- `\b(?:hurricanes?|tornado(?:es|s)?|earthquakes?|flood(?:s|ing|ed)?|storms?|wildfires?)\b[\s\S]{0,1200}\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b|\b(?:rent|tenants?|lessees?|rental agreements?|tenancy|tenancies)\b[\s\S]{0,1200}\b(?:hurricanes?|tornado(?:es|s)?|earthquakes?|flood(?:s|ing|ed)?|storms?|wildfires?)\b` / code:55\.1 (897 units) / 2 hits: 55.1-1206, 55.1-1301
- `\bunconscionable price\b` / code (34494 units) / 3 hits: 59.1-527, 59.1-529.1, 59.1-535
- `\A(?=[\s\S]*\b(?:disasters?|states? of emergency|emergency declared|declared emergency|major disaster)\b)(?=[\s\S]*\b(?:landlords?|lessors?)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` / all (35543 units) / 3 hits: 55.1-1229, 55.1-1245, 55.1-1245#v2
- positive [0] 55.1-1229: passed
- positive [3] 55.1-1206: passed
- positive [4] 59.1-527: passed
- positive [2] 55.1-1235: passed
**VA-G-0615** [disaster-displaced-guests]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:displaced(?: persons?| families| residents)?|evacuees?|evacuated|evacuation)\b[\s\S]{0,1200}\b(?:guests?|invitees?|occupants?|tenants?|rental agreements?|lessees?)\b|\b(?:guests?|invitees?|occupants?|tenants?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:displaced(?: persons?| families| residents)?|evacuees?|evacuated|evacuation)\b` / code:(?:55\.1|44-|36-) (1475 units) / 2 hits: 55.1-1982, 55.1-2164
- `\A(?=[\s\S]*\b(?:displaced(?: persons?| families| residents)?|evacuees?|evacuated|evacuation)\b)(?=[\s\S]*\b(?:guests?|invitees?|authorized occupants?)\b)(?=[\s\S]*\b(?:landlords?|lessors?|owners?)\b)` / all (35543 units) / 3 hits: 38.2-1887, 13VAC5-52-160, 13VAC5-63-210
- `\bguests? or invitees?\b[\s\S]{0,1200}\b(?:disasters?|emergenc(?:y|ies))\b|\b(?:disasters?|emergenc(?:y|ies))\b[\s\S]{0,1200}\bguests? or invitees?\b` / code:55\.1-1[2-4] (153 units) / 4 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1256
- `\bguests? or invitees?\b` / code:55\.1-1[2-4] (153 units) / 24 hits: 55.1-1200, 55.1-1227, 55.1-1234, 55.1-1239, 55.1-1240, 55.1-1240#v2, 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1245 +12
- `\b(?:temporar(?:y|ily)) (?:stay\w*|living|residing|reside|house|housing|shelter\w*)\b[\s\S]{0,1200}\b(?:family|relatives?|friends?)\b|\b(?:family|relatives?|friends?)\b[\s\S]{0,1200}\btemporar(?:y|ily) (?:stay\w*|living|residing|reside|house|housing|shelter\w*)\b` / code:55\.1 (897 units) / 0 hits
- positive [3] 55.1-1200: passed
- positive [2] 55.1-1229: recorded as failed
**VA-G-0616** [disaster-displaced-guests]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0615 (VA-G-0615 named § 55.1-1229 as a positive for term [2], which it does not contain (recorded as failed); rerun with the verified positive only)
- `\b(?:displaced(?: persons?| families| residents)?|evacuees?|evacuated|evacuation)\b[\s\S]{0,1200}\b(?:guests?|invitees?|occupants?|tenants?|rental agreements?|lessees?)\b|\b(?:guests?|invitees?|occupants?|tenants?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:displaced(?: persons?| families| residents)?|evacuees?|evacuated|evacuation)\b` / code:(?:55\.1|44-|36-) (1475 units) / 2 hits: 55.1-1982, 55.1-2164
- `\A(?=[\s\S]*\b(?:displaced(?: persons?| families| residents)?|evacuees?|evacuated|evacuation)\b)(?=[\s\S]*\b(?:guests?|invitees?|authorized occupants?)\b)(?=[\s\S]*\b(?:landlords?|lessors?|owners?)\b)` / all (35543 units) / 3 hits: 38.2-1887, 13VAC5-52-160, 13VAC5-63-210
- `\bguests? or invitees?\b[\s\S]{0,1200}\b(?:disasters?|emergenc(?:y|ies))\b|\b(?:disasters?|emergenc(?:y|ies))\b[\s\S]{0,1200}\bguests? or invitees?\b` / code:55\.1-1[2-4] (153 units) / 4 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1256
- `\bguests? or invitees?\b` / code:55\.1-1[2-4] (153 units) / 24 hits: 55.1-1200, 55.1-1227, 55.1-1234, 55.1-1239, 55.1-1240, 55.1-1240#v2, 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1245 +12
- `\b(?:temporar(?:y|ily)) (?:stay\w*|living|residing|reside|house|housing|shelter\w*)\b[\s\S]{0,1200}\b(?:family|relatives?|friends?)\b|\b(?:family|relatives?|friends?)\b[\s\S]{0,1200}\btemporar(?:y|ily) (?:stay\w*|living|residing|reside|house|housing|shelter\w*)\b` / code:55\.1 (897 units) / 0 hits
- positive [3] 55.1-1200: passed
**VA-G-0617** [environmental-event-termination]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:environmental|contaminat(?:e|es|ed|ion|ing)|hazardous (?:substances?|materials?|wastes?)|spills?|spilled|toxic|sewage|chemicals?|radon|asbestos|methamphetamine|mold)\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:environmental|contaminat(?:e|es|ed|ion|ing)|hazardous (?:substances?|materials?|wastes?)|spills?|spilled|toxic|sewage|chemicals?|radon|asbestos|methamphetamine|mold)\b` / code:55\.1-1[2-4] (153 units) / 6 hits: 55.1-1215, 55.1-1219, 55.1-1231, 55.1-1234.1, 55.1-1244, 55.1-1244#v2
- `\A(?=[\s\S]*\b(?:environmental|contaminat(?:e|es|ed|ion|ing)|hazardous (?:substances?|materials?|wastes?)|spills?|toxic)\b)(?=[\s\S]*\bterminat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:rental agreements?|leases?|tenancy)\b)` / code (34494 units) / 3 hits: 25.1-400, 58.1-602, 64.2-778
- `\bcasualty\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1240, 55.1-1240#v2
- `\b(?:gas leaks?|carbon monoxide|boil[- ]water|unsafe (?:to|for) (?:occupy|occupancy|habitation)|uninhabitable|unfit for (?:human )?(?:habitation|occupancy))\b` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-1227, 55.1-1229, 55.1-1243.1 / heading-only: 55.1-1234.1
- positive [0] 55.1-1219: passed
- positive [2] 55.1-1240: passed
**VA-G-0618** [statutory-early-termination]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:fraud(?:s|ulent|ulently)?|misrepresent(?:s|ed|ing|ation|ations)?|false(?:ly)?|decepti(?:ve|on))\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:fraud(?:s|ulent|ulently)?|misrepresent(?:s|ed|ing|ation|ations)?|false(?:ly)?|decepti(?:ve|on))\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:fraud(?:s|ulent|ulently)?|misrepresent(?:s|ed|ing|ation|ations)?|false(?:ly)?|decepti(?:ve|on))\b)(?=[\s\S]*\bterminat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:rental agreements?|lease agreements?|residential leases?)\b)` / code (34494 units) / 0 hits
- `\bforfeit(?:s|ed|ing|ure|ures)?\b` / code:55\.1-1[2-4] (153 units) / 5 hits: 55.1-1235, 55.1-1415, 55.1-1418, 55.1-1420, 55.1-1421 / heading-only: 55.1-1423
- `\bearly termination\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1253 / heading-only: 55.1-1235, 55.1-1236
- `\b(?:lied|lying|tricked|misled|untrue)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- positive [3] 55.1-1253: passed
- positive [0] 55.1-1203: recorded as failed
**VA-G-0619** [statutory-early-termination]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0618 (VA-G-0618 named § 55.1-1203 as a positive for term [0] without reading it first (recorded as failed); rerun with the verified positive only)
- `\b(?:fraud(?:s|ulent|ulently)?|misrepresent(?:s|ed|ing|ation|ations)?|false(?:ly)?|decepti(?:ve|on))\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:fraud(?:s|ulent|ulently)?|misrepresent(?:s|ed|ing|ation|ations)?|false(?:ly)?|decepti(?:ve|on))\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:fraud(?:s|ulent|ulently)?|misrepresent(?:s|ed|ing|ation|ations)?|false(?:ly)?|decepti(?:ve|on))\b)(?=[\s\S]*\bterminat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:rental agreements?|lease agreements?|residential leases?)\b)` / code (34494 units) / 0 hits
- `\bforfeit(?:s|ed|ing|ure|ures)?\b` / code:55\.1-1[2-4] (153 units) / 5 hits: 55.1-1235, 55.1-1415, 55.1-1418, 55.1-1420, 55.1-1421 / heading-only: 55.1-1423
- `\bearly termination\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1253 / heading-only: 55.1-1235, 55.1-1236
- `\b(?:lied|lying|tricked|misled|untrue)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- positive [3] 55.1-1253: passed
**VA-G-0620** [infirmity-termination]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:nursing (?:homes?|facilit(?:y|ies))|assisted living|long-term care|care facilit(?:y|ies)|hospice|hospitali[sz](?:ed|ation))\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:nursing (?:homes?|facilit(?:y|ies))|assisted living|long-term care|care facilit(?:y|ies)|hospice|hospitali[sz](?:ed|ation))\b` / code (34494 units) / 27 hits: 2.2-2203.4, 16.1-241, 18.2-404.1, 19.2-182.9, 32.1-27.1, 32.1-125.3, 32.1-126.6, 32.1-137.12, 32.1-316, 32.1-317, 32.1-325, 32.1-325.1:1 +15
- `\A(?=[\s\S]*\b(?:nursing (?:homes?|facilit(?:y|ies))|assisted living|long-term care|care facilit(?:y|ies)|hospice|hospitali[sz](?:ed|ation))\b)(?=[\s\S]*\b(?:tenants?|lessees?|tenancy|tenancies)\b)(?=[\s\S]*\b(?:rental agreements?|leases?|rent)\b)(?=[\s\S]*\bterminat(?:e|es|ed|ing|ion)\b)` / code (34494 units) / 1 hits: 55.1-2136
- `\b(?:elderly|elderliness|senior citizens?|disabilit(?:y|ies)|disabled|incapacit(?:y|ated|ies)|infirm(?:ity|ities)?|illness(?:es)?|medical condition)\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\b(?:elderly|elderliness|senior citizens?|disabilit(?:y|ies)|disabled|incapacit(?:y|ated|ies)|infirm(?:ity|ities)?|illness(?:es)?|medical condition)\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-127
- `\A(?=[\s\S]*\b(?:elderly|elderliness|senior citizens?|disabilit(?:y|ies)|disabled|incapacit(?:y|ated|ies)|infirm(?:ity|ities)?|illness(?:es)?|medical condition)\b)(?=[\s\S]*\b(?:tenants?|lessees?|tenancy|tenancies)\b)(?=[\s\S]*\brental agreements?\b)(?=[\s\S]*\bterminat(?:e|es|ed|ing|ion)\b)` / code (34494 units) / 2 hits: 36-139, 36-139#v2
- `\bincapacity to contract\b|\bdeath or incapacity\b` / all (35543 units) / 8 hits: 13.1-663, 13.1-847, 13.1-847#v2, 46.2-1569, 46.2-1573.5, 46.2-1573.17, 46.2-1573.28, 64.2-1910
- `\bdeath\b[\s\S]{0,1200}\bterminat(?:e|es|ed|ing|ion)\b|\bterminat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}\bdeath\b` / code:55\.1-1[2-4] (153 units) / 3 hits: 55.1-124, 55.1-127, 55.1-1256
- positive [5] 55.1-1256: passed
**VA-G-0621** [bed-bug-cooperation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bbed ?bugs?\b|\bbedbugs?\b|\bcimex\b` / all (35543 units) / 0 hits
- `\binsects? or pests?\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1223, 55.1-1227
- `\b(?:infestations?|infested|exterminat\w*)\b[\s\S]{0,1200}\b(?:cooperat\w*|prepar\w*|access|entry|enter)\b|\b(?:cooperat\w*|prepar\w*|access|entry|enter)\b[\s\S]{0,1200}\b(?:infestations?|infested|exterminat\w*)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:infestations?|infested|pests?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|occupants?)\b)(?=[\s\S]*\b(?:landlords?|owners?|lessors?)\b)` / all (35543 units) / 12 hits: 3.2-702, 15.2-2403, 55.1-1223, 55.1-1227, 55.1-1234.1, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1259, 13VAC5-52-150, 13VAC5-63-520
- positive [1] 55.1-1227: passed
- positive [2] 55.1-1227: recorded as failed
**VA-G-0622** [bed-bug-cooperation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0621 (VA-G-0621 named § 55.1-1227 as a positive for term [2] without checking that a cooperation or entry word lies within 1,200 characters (recorded as failed); rerun with the verified positive only)
- `\bbed ?bugs?\b|\bbedbugs?\b|\bcimex\b` / all (35543 units) / 0 hits
- `\binsects? or pests?\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1223, 55.1-1227
- `\b(?:infestations?|infested|exterminat\w*)\b[\s\S]{0,1200}\b(?:cooperat\w*|prepar\w*|access|entry|enter)\b|\b(?:cooperat\w*|prepar\w*|access|entry|enter)\b[\s\S]{0,1200}\b(?:infestations?|infested|exterminat\w*)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:infestations?|infested|pests?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|occupants?)\b)(?=[\s\S]*\b(?:landlords?|owners?|lessors?)\b)` / all (35543 units) / 12 hits: 3.2-702, 15.2-2403, 55.1-1223, 55.1-1227, 55.1-1234.1, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1259, 13VAC5-52-150, 13VAC5-63-520
- positive [1] 55.1-1227: passed
**VA-G-0623** [periodic-services-entry]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\broutine maintenance\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1229, 55.1-1300
- `\b(?:regularly scheduled|scheduled services?|periodic(?:ally)? (?:services?|maintenance|inspections?)|recurring (?:services?|maintenance))\b` / all (35543 units) / 71 hits: 2.2-1153, 2.2-2415, 2.2-4023.1, 3.2-703, 6.2-409, 6.2-437, 9.1-700, 9.1-703, 10.1-602, 10.1-610.1, 10.1-1413, 10.1-1418.2 +59 / heading-only: 35.1-22
- `\bconspicuous(?:ly)?\b[\s\S]{0,1200}\b(?:enter|entry|access)\b|\b(?:enter|entry|access)\b[\s\S]{0,1200}\bconspicuous(?:ly)?\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1414
- `\bwithout (?:prior )?notice\b[\s\S]{0,1200}\b(?:enter|entry|access)\b|\b(?:enter|entry|access)\b[\s\S]{0,1200}\bwithout (?:prior )?notice\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\A(?=[\s\S]*\b(?:filters?|pest (?:control|treatments?)|landscap\w*|lawn)\b)(?=[\s\S]*\b(?:enter|entry|access)\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)` / code (34494 units) / 1 hits: 55.1-1244.1
- positive [0] 55.1-1229: passed
**VA-G-0624** [periodic-services-entry]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0623 (VA-G-0623 term [1] searched scheduled-service words alone (71 hits, mostly non-tenancy); rerun ties them to tenancy words so every hit can be opened; VA-G-0623 terms [0], [2]-[4] remain valid and are cited)
- `\b(?:regularly scheduled|scheduled services?|periodic(?:ally)? (?:services?|maintenance|inspections?)|recurring (?:services?|maintenance)|routine maintenance)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|lessors?|rental agreements?)\b|\b(?:tenants?|landlords?|lessees?|lessors?|rental agreements?)\b[\s\S]{0,1200}\b(?:regularly scheduled|scheduled services?|periodic(?:ally)? (?:services?|maintenance|inspections?)|recurring (?:services?|maintenance)|routine maintenance)\b` / all (35543 units) / 5 hits: 36-105.1:1, 55.1-1229, 55.1-1300, 59.1-470, 13VAC5-63-470
- `\A(?=[\s\S]*\b(?:regularly scheduled|scheduled services?|periodic(?:ally)? (?:services?|maintenance|inspections?)|recurring (?:services?|maintenance)|routine maintenance)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:landlords?|lessors?|owners?)\b)` / all (35543 units) / 6 hits: 36-105.1:1, 55.1-1229, 55.1-1300, 55.1-1949, 62.1-44.15:24, 13VAC5-63-470
- positive [0] 55.1-1229: passed
- positive [1] 55.1-1229: passed
**VA-G-0625** [animal-care-access]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b[\s\S]{0,1200}\b(?:enter(?:s|ed|ing)?|entry|access)\b|\b(?:enter(?:s|ed|ing)?|entry|access)\b[\s\S]{0,1200}\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1200
- `\A(?=[\s\S]*\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b)(?=[\s\S]*\b(?:enter(?:s|ed|ing)?|entry|access)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:landlords?|lessors?)\b)` / all (35543 units) / 3 hits: 8.2A-103, 8.9A-102, 55.1-1200
- `\b(?:animals?|pets?|dogs?|cats?)\b` / code:55\.1-1[2-4] (153 units) / 2 hits: 55.1-1200, 55.1-1227
- `\A(?=[\s\S]*\b(?:animals?|pets?|dogs?|cats?)\b)(?=[\s\S]*\b(?:dwellings?|residences?|premises)\b)(?=[\s\S]*\b(?:absent|absence|hospitali[sz]ed|incarcerat\w*|arrest\w*|detained)\b)` / code:3\.2-6 (204 units) / 2 hits: 3.2-6500, 3.2-6585
- positive [2] 55.1-1227: passed
**VA-G-0626** [pet-eviction-fact-sheet]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:fact sheets?|pamphlets?|brochures?|information sheets?|informational materials?|statement of (?:rights|information))\b[\s\S]{0,1200}\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b|\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b[\s\S]{0,1200}\b(?:fact sheets?|pamphlets?|brochures?|information sheets?|informational materials?|statement of (?:rights|information))\b` / all (35543 units) / 1 hits: 3.2-3600
- `\b(?:evict\w*|unlawful detainer|writ of (?:eviction|possession)|terminat(?:e|es|ed|ion) (?:of )?(?:the|a)? ?(?:tenancy|rental agreement|lease))\b[\s\S]{0,1200}\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b|\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b[\s\S]{0,1200}\b(?:evict\w*|unlawful detainer|writ of (?:eviction|possession)|terminat(?:e|es|ed|ion) (?:of )?(?:the|a)? ?(?:tenancy|rental agreement|lease))\b` / all (35543 units) / 0 hits
- `\A(?=[\s\S]*\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b)(?=[\s\S]*\b(?:evict\w*|unlawful detainer)\b)` / all (35543 units) / 1 hits: 55.1-1200
- `\b(?:fact sheets?|pamphlets?|brochures?|information sheets?|informational materials?|statement of (?:rights|information))\b` / code:55\.1 (897 units) / 1 hits: 55.1-2219
- `\A(?=[\s\S]*\b(?:landlords?|lessors?|rental)\b)(?=[\s\S]*\b(?:animals?|pets?|dogs?|cats?|companion animals?)\b)` / code:3\.2- (1207 units) / 2 hits: 3.2-6402, 3.2-6513.2
- positive [3] 55.1-2219: passed
**VA-G-0627** [carpet-cleaning]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bcarpet(?:s|ing|ed)?\b|\brugs?\b` / all (35543 units) / 4 hits: 43-63, 62.1-44.34:32, 13VAC5-52-540, 13VAC5-63-120
- `\bprofessional(?:ly)? clean\w*\b|\bclean(?:ed|ing)? professionally\b|\bsteam[- ]clean\w*\b` / all (35543 units) / 0 hits
- `\bclean(?:s|ed|ing)?\b[\s\S]{0,1200}\bsecurity deposits?\b|\bsecurity deposits?\b[\s\S]{0,1200}\bclean(?:s|ed|ing)?\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\bclean order\b` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1233
- `\b(?:useful life|depreciat\w*|years? old|age of the)\b[\s\S]{0,1200}\b(?:deposits?|deduct\w*|damages?)\b|\b(?:deposits?|deduct\w*|damages?)\b[\s\S]{0,1200}\b(?:useful life|depreciat\w*|years? old|age of the)\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- `\bflooring\b|\bfloor coverings?\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- positive [3] 55.1-1233: passed
**VA-G-0628** [alarm-tampering-fee]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b[\s\S]{0,1200}\b(?:fees?|charges?|penalt(?:y|ies)|fines?|liquidated)\b|\b(?:fees?|charges?|penalt(?:y|ies)|fines?|liquidated)\b[\s\S]{0,1200}\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b` / code:(?:55\.1|36-|27-) (1387 units) / 2 hits: 36-99.5, 55.1-1229
- `\A(?=[\s\S]*\btamper\w*\b)(?=[\s\S]*\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b)(?=[\s\S]*\b(?:fees?|charges?|penalt(?:y|ies)|fines?|liquidated)\b)` / all (35543 units) / 0 hits
- `\btamper\w*\b[\s\S]{0,1200}\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b|\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b[\s\S]{0,1200}\btamper\w*\b` / all (35543 units) / 3 hits: 55.1-1227, 13VAC5-52-210, 13VAC5-63-545
- `\b(?:disabl\w*|disconnect\w*|cover\w*)\b[\s\S]{0,1200}\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b|\b(?:smoke|carbon monoxide|CO|fire) (?:alarms?|detectors?|detection)\b[\s\S]{0,1200}\b(?:disabl\w*|disconnect\w*)\b` / code:(?:55\.1|36-) (1241 units) / 0 hits
- positive [0] 55.1-1229: passed
- positive [2] 55.1-1227: passed
**VA-G-0629** [tenant-insurance-claims]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:additional insureds?|additional interests?|interested part(?:y|ies)|loss payees?)\b[\s\S]{0,1200}\b(?:tenants?|renters?|lessees?)\b|\b(?:tenants?|renters?|lessees?)\b[\s\S]{0,1200}\b(?:additional insureds?|additional interests?|interested part(?:y|ies)|loss payees?)\b` / all (35543 units) / 2 hits: 15.2-5136, 55.1-2139.1
- `\A(?=[\s\S]*\brenter\'s insurance\b)(?=[\s\S]*\bclaims?\b)` / all (35543 units) / 4 hits: 38.2-1877, 38.2-1883, 55.1-1206, 55.1-1208
- `\bsubrogat\w*\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b|\b(?:tenants?|landlords?|lessees?|lessors?|renters?)\b[\s\S]{0,1200}\bsubrogat\w*\b` / all (35543 units) / 4 hits: 15.2-2119.4, 38.2-1434, 55.1-1206, 55.1-2145
- `\b(?:file|make|submit|filing|making)s? (?:a |any )?claims?\b[\s\S]{0,1200}\b(?:tenants?|renters?|lessees?)\b|\b(?:tenants?|renters?|lessees?)\b[\s\S]{0,1200}\b(?:file|make|submit|filing|making)s? (?:a |any )?claims?\b` / code:(?:55\.1|38\.2) (2802 units) / 2 hits: 38.2-1877, 38.2-1883
- `\brenter\'?s insurance\b|\brenters insurance\b|\btenant\'?s insurance\b` / all (35543 units) / 5 hits: 38.2-1877, 38.2-1883, 55.1-1200, 55.1-1206, 55.1-1208
- positive [2] 55.1-1206: passed
- positive [1] 55.1-1206: passed
- positive [4] 55.1-1206: passed
**VA-G-0630** [landlord-liability-insurance]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:liability insurance|general liability|insurance coverage|proof of insurance|certificate of insurance|insurance polic(?:y|ies))\b[\s\S]{0,1200}\b(?:landlords?|lessors?|rental (?:dwelling|units?|propert(?:y|ies)|housing)|residential rental)\b|\b(?:landlords?|lessors?|rental (?:dwelling|units?|propert(?:y|ies)|housing)|residential rental)\b[\s\S]{0,1200}\b(?:liability insurance|general liability|insurance coverage|proof of insurance|certificate of insurance|insurance polic(?:y|ies))\b` / code (34494 units) / 24 hits: 6.2-311, 8.2A-220, 15.2-968.1, 15.2-968.1#v2, 15.2-968.1#v3, 38.2-1881, 38.2-1882, 38.2-1883, 38.2-1884, 38.2-3521.2, 38.2-6401, 46.2-882.1 +12
- `\A(?=[\s\S]*\binsurance\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:shall (?:obtain|maintain|carry|procure)|required to (?:obtain|maintain|carry))\b)` / code:(?:55\.1|36-|15\.2) (3574 units) / 1 hits: 55.1-1206
- `\bregist(?:er|ers|ered|ering|ration|ry)\b[\s\S]{0,1200}\binsurance\b[\s\S]{0,1200}\b(?:rental|landlords?|lessors?)\b|\b(?:rental|landlords?|lessors?)\b[\s\S]{0,1200}\bregist(?:er|ers|ered|ering|ration|ry)\b[\s\S]{0,1200}\binsurance\b` / code:(?:15\.2|36-|55\.1) (3574 units) / 2 hits: 15.2-968.1#v2, 15.2-968.1#v3
- `\A(?=[\s\S]*\b(?:insured|insurance)\b)(?=[\s\S]*\b(?:rents?|leases?|lets?)\b (?:a |any )?(?:dwelling|residen\w*|housing|apartment))` / code:38\.2 (1905 units) / 0 hits
- positive [0] 55.1-1206: passed
**VA-G-0701** [electric-submetering-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)` / all (35549 units) / 10 hits: 55.1-1200, 55.1-1202#v2, 55.1-1209#v2, 55.1-1212, 55.1-1212#v2, 55.1-1212.1, 55.1-1404, 56-245.2, 56-245.3, 56-596.8
- `(?:\bdisclos\w*|\bnotices?\b|\bnotif\w*|\bforms?\b)[\s\S]{0,1200}(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)|(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)[\s\S]{0,1200}(?:\bdisclos\w*|\bnotices?\b|\bnotif\w*|\bforms?\b)` / all (35549 units) / 5 hits: 55.1-1200, 55.1-1202#v2, 55.1-1209#v2, 55.1-1212.1, 56-596.8
- `\A(?=[\s\S]*(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b))(?=[\s\S]*(?:\bdisclos\w*|\bnotices?\b|\bforms?\b))` / all (35549 units) / 5 hits: 55.1-1200, 55.1-1202#v2, 55.1-1209#v2, 55.1-1212.1, 56-596.8
- `\bmaster[- ]meter\w*|\bresell\w*\s+(?:electricity|gas)\b|\bresale of (?:electricity|natural gas|gas)\b|\bresale\b[\s\S]{0,200}\belectric` / all (35549 units) / 6 hits: 18.2-215, 56-245.3, 56-257.2, 56-265.4:6, 58.1-2900, 58.1-2901
- positive [0] 55.1-1212: passed
- positive [1] 55.1-1202#v2: passed
- positive [3] 56-245.3: passed
**VA-G-0702** [energy-data-release]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bbenchmark\w*[\s\S]{0,1200}(?:\benergy\b|\belectric\w*|\butility\b|\bbuildings?\b)|(?:\benergy\b|\belectric\w*|\butility\b|\bbuildings?\b)[\s\S]{0,1200}\bbenchmark\w*` / all (35549 units) / 1 hits: 56-609
- `\benergy (?:usage|use|consumption) data\b|\busage data\b|\bconsumption data\b|\bcustomer data\b|\bcustomer information\b|\bmeter data\b|\benergy data\b|\busage information\b` / all (35549 units) / 12 hits: 6.2-888, 6.2-1125, 6.2-1607, 38.2-629, 45.2-1900, 46.2-216.1, 46.2-1568.1, 56-231.34:1, 56-231.50:1, 56-576, 56-594.3, 56-594.4
- `(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b)[\s\S]{0,1200}(?:\busage data\b|\bconsumption data\b|\busage information\b|\benergy (?:usage|use|consumption)\b|\bbilling and usage\b|\bconsumption\b)|(?:\busage data\b|\bconsumption data\b|\busage information\b|\benergy (?:usage|use|consumption)\b|\bbilling and usage\b|\bconsumption\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b)` / all (35549 units) / 13 hits: 2.2-2340, 4.1-200, 4.1-206.3, 15.2-2119, 15.2-2820, 15.2-5151, 18.2-340.33, 46.2-649.3, 55.1-1212.1, 56-245.3, 56-265.1, 58.1-609.1 +1
- `\A(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b))(?=[\s\S]*(?:\busage data\b|\bconsumption data\b|\busage information\b|\benergy (?:usage|use|consumption)\b|\bbilling and usage\b|\bconsumption\b))` / all (35549 units) / 23 hits: 2.2-2340, 4.1-100, 4.1-100#v2, 4.1-200, 4.1-201, 4.1-206.3, 4.1-604, 15.2-2119, 15.2-2820, 15.2-5151, 18.2-340.33, 29.1-529 +11
- positive [0] 56-609: passed
- positive [1] 56-594.3: passed
- positive [2] 56-245.3: passed
**VA-G-0703** [ev-charging-requirements]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b)` / all (35549 units) / 53 hits: 2.2-614.5, 2.2-1176.2, 2.2-1182, 2.2-1183, 4.1-100, 4.1-100#v2, 9.1-201, 10.1-1322.5, 15.2-958.3, 15.2-958.3:1, 15.2-967.2, 15.2-1804.1 +41
- `(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b)[\s\S]{0,1200}(?:\bweights and measures\b|\bmeasuring devices?\b|\bHandbook 44\b|\bsealers?\b|\bweighing and measuring\b)|(?:\bweights and measures\b|\bmeasuring devices?\b|\bHandbook 44\b|\bsealers?\b|\bweighing and measuring\b)[\s\S]{0,1200}(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b)` / all (35549 units) / 0 hits
- `\A(?=[\s\S]*(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b))(?=[\s\S]*(?:\bweights and measures\b|\bmeasuring devices?\b|\bHandbook 44\b|\bsealers?\b|\bweighing and measuring\b))` / all (35549 units) / 0 hits
- `(?:\bweights and measures\b|\bmeasuring devices?\b|\bHandbook 44\b|\bsealers?\b|\bweighing and measuring\b)` / all (35549 units) / 46 hits: 3.2-4324, 3.2-5600, 3.2-5601, 3.2-5603, 3.2-5604, 3.2-5606, 3.2-5607, 3.2-5608, 3.2-5609, 3.2-5611, 3.2-5613, 3.2-5614 +34 / heading-only: 3.2-5709
- `(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b)[\s\S]{0,1200}(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b)|(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b)` / all (35549 units) / 7 hits: 4.1-100, 4.1-100#v2, 15.2-958.3, 15.2-5704, 46.2-1219.3, 55.1-2139.1, 56-1.2
- `\A(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b))(?=[\s\S]*(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b))` / all (35549 units) / 8 hits: 4.1-100, 4.1-100#v2, 15.2-958.3, 15.2-5704, 46.2-100, 46.2-1219.3, 55.1-2139.1, 56-1.2
- positive [0] 55.1-1962.1: passed
- positive [3] 3.2-5620: passed
- positive [4] 55.1-2139.1: passed
**VA-G-0704** [ev-charging-shared-area]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b|\bchargers?\b|\bplug-in\b)[\s\S]{0,1200}(?:\bcommon areas?\b|\bcommon elements?\b|\bshared\b|\bparking (?:areas?|spaces?|lots?|garages?|spots?|stalls?)\b|\bgarages?\b)|(?:\bcommon areas?\b|\bcommon elements?\b|\bshared\b|\bparking (?:areas?|spaces?|lots?|garages?|spots?|stalls?)\b|\bgarages?\b)[\s\S]{0,1200}(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b|\bchargers?\b|\bplug-in\b)` / all (35549 units) / 7 hits: 15.2-958.3, 15.2-2242#v2, 46.2-1219.3, 55.1-1823.1, 55.1-1962.1, 55.1-2139.1, 13VAC5-52-240
- `\A(?=[\s\S]*(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b|\bchargers?\b|\bplug-in\b))(?=[\s\S]*(?:\bcommon areas?\b|\bcommon elements?\b|\bshared\b|\bparking (?:areas?|spaces?|lots?|garages?|spots?|stalls?)\b|\bgarages?\b))` / all (35549 units) / 12 hits: 4.1-100, 4.1-100#v2, 15.2-958.3, 15.2-2242#v2, 46.2-100, 46.2-1219.3, 55.1-1823.1, 55.1-1962.1, 55.1-2139.1, 56-576, 13VAC5-52-240, 13VAC5-63-210
- `\bchargers?\b|\bplug-in\b` / all (35549 units) / 9 hits: 2.2-1176.2, 4.1-100#v2, 18.2-371.2, 45.2-1710, 46.2-1219.3, 56-1, 58.1-639.1, 59.1-577.1, 13VAC5-63-210
- `\breserv\w*\b[\s\S]{0,1200}\bparking\b|\bparking\b[\s\S]{0,1200}\breserv\w*\b` / code:55\.1-1[2-4] (153 units) / 0 hits
- positive [0] 55.1-1823.1: passed
- positive [2] 46.2-1219.3: passed
**VA-G-0705** [ev-charging-end-of-tenancy]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b|\bchargers?\b)[\s\S]{0,1200}(?:\bremov\w*|\bterminat\w*|\bend of (?:the )?(?:lease|tenancy|term|rental agreement)\b|\bvacat\w*|\bsurrender\w*|\babandon\w*|\bmove-out\b)|(?:\bremov\w*|\bterminat\w*|\bend of (?:the )?(?:lease|tenancy|term|rental agreement)\b|\bvacat\w*|\bsurrender\w*|\babandon\w*|\bmove-out\b)[\s\S]{0,1200}(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b|\bchargers?\b)` / all (35549 units) / 6 hits: 46.2-100, 46.2-602.3, 46.2-1048, 55.1-1962.1, 55.1-2139.1, 58.1-2201
- `\A(?=[\s\S]*(?:\belectric (?:motor )?vehicles?\b|\bEVs?\b|\bcharging stations?\b|\bvehicle charging\b|\belectric vehicle supply equipment\b|\bEVSE\b|\bchargers?\b))(?=[\s\S]*(?:\bremov\w*|\bterminat\w*|\bend of (?:the )?(?:lease|tenancy|term|rental agreement)\b|\bvacat\w*|\bsurrender\w*|\babandon\w*|\bmove-out\b))` / all (35549 units) / 10 hits: 4.1-100, 4.1-100#v2, 46.2-100, 46.2-602.3, 46.2-1048, 55.1-1962.1, 55.1-2139.1, 56-1, 56-576, 58.1-2201
- `\btrade fixtures?\b|\bfixtures?\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b)|(?:\btenants?\b|\blessees?\b)[\s\S]{0,1200}\bfixtures?\b` / code (34494 units) / 11 hits: 6.2-1186, 8.2A-103, 8.2A-309, 36-55.26, 46.2-665, 54.1-2133, 55.1-1227, 55.1-2100, 58.1-609.3, 59.1-284.30, 59.1-284.31
- positive [0] 55.1-1962.1: passed
- positive [2] 55.1-1227: passed
**VA-G-0706** [meter-conservation-charge]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b)` / all (35549 units) / 1 hits: 56-585.7
- `(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent\b)[\s\S]{0,1200}(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b)` / all (35549 units) / 0 hits
- `\A(?=[\s\S]*(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent\b))` / all (35549 units) / 0 hits
- `\bmeter readings?\b[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent\b)[\s\S]{0,1200}\bmeter readings?\b` / all (35549 units) / 1 hits: 15.2-5151
- `(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)[\s\S]{0,1200}(?:\bstatements?\b|\breadings?\b)|(?:\bstatements?\b|\breadings?\b)[\s\S]{0,1200}(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)` / all (35549 units) / 2 hits: 55.1-1202#v2, 55.1-1209#v2
- `\A(?=[\s\S]*(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b))(?=[\s\S]*(?:\bstatements?\b|\breadings?\b))` / all (35549 units) / 2 hits: 55.1-1202#v2, 55.1-1209#v2
- positive [0] 56-585.7: passed
- positive [3] 15.2-5151: passed
- positive [4] 55.1-1209#v2: passed
**VA-G-0707** [meter-conservation-charge]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0706 (INFLECTION line on term [3] (15.2-5114 second version): rent inflections rents, rented, rental, renting added to the tenancy words in every term)
- `(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b)` / all (35549 units) / 1 hits: 56-585.7
- `(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|al|ing)?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|al|ing)?\b)[\s\S]{0,1200}(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b)` / all (35549 units) / 0 hits
- `\A(?=[\s\S]*(?:\bconservation charges?\b|\benergy savings charges?\b|\bon-bill\b|\bon bill tariff\b|\bmeter conservation\b|\befficiency charges?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|al|ing)?\b))` / all (35549 units) / 0 hits
- `\bmeter readings?\b[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|al|ing)?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|al|ing)?\b)[\s\S]{0,1200}\bmeter readings?\b` / all (35549 units) / 2 hits: 15.2-5114#v2, 15.2-5151
- `(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)[\s\S]{0,1200}(?:\bstatements?\b|\breadings?\b)|(?:\bstatements?\b|\breadings?\b)[\s\S]{0,1200}(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)` / all (35549 units) / 2 hits: 55.1-1202#v2, 55.1-1209#v2
- `\A(?=[\s\S]*(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b))(?=[\s\S]*(?:\bstatements?\b|\breadings?\b))` / all (35549 units) / 2 hits: 55.1-1202#v2, 55.1-1209#v2
- positive [0] 56-585.7: passed
- positive [3] 15.2-5151: passed
- positive [4] 55.1-1209#v2: passed
**VA-G-0708** [utility-allowance-cap]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\butility allowances?\b` / all (35549 units) / 0 hits
- `(?:\ballowances?\b|\boverages?\b|\bexcess (?:usage|consumption|use)\b)[\s\S]{0,1200}(?:\butilit\w*|\belectric\w*|\bwater\b|\bsewer\b|\bnatural gas\b|\bgas\b)|(?:\butilit\w*|\belectric\w*|\bwater\b|\bsewer\b|\bnatural gas\b|\bgas\b)[\s\S]{0,1200}(?:\ballowances?\b|\boverages?\b|\bexcess (?:usage|consumption|use)\b)` / code:55\.1-,code:56-,code:15\.2-21 (1747 units) / 15 hits: 56-235.9, 56-247, 56-520, 56-585.1, 56-585.3, 56-596.2:3, 56-603, 56-604, 56-605, 56-609, 56-610, 56-625 +3
- `\A(?=[\s\S]*(?:\ballowances?\b|\boverages?\b|\bexcess (?:usage|consumption|use)\b))(?=[\s\S]*(?:\butilit\w*|\belectric\w*|\bwater\b|\bsewer\b|\bnatural gas\b|\bgas\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|al|ing)?\b))` / all (35549 units) / 11 hits: 15.2-1636.14, 15.2-2119, 15.2-2241.2, 15.2-2305, 15.2-2305.1, 21-181, 21-261, 36-55.26, 58.1-439.12:06, 58.1-1401, 13VAC5-52-220
- `\bover and above the cost\b|\bactually billed\b|\bonly that portion\b` / all (35549 units) / 6 hits: 45.2-1131, 56-1.2, 56-245.3, 58.1-303, 58.1-3219.9, 58.1-3219.14
- positive [3] 56-245.3: passed
- positive [1] 56-247: passed
**VA-G-0709** [utility-disclosure-attachment]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\battach\w*|\baddend\w*|\bexhibits?\b|\bseparate(?:ly)? sign\w*|\bfirst page\b|\btype size\b|\bpoint type\b|\bboldface\b|\bconspicuous\w*)[\s\S]{0,1200}(?:\butilit\w*|\bwater and sewer\b|\bsubmeter\w*|\bratio utility billing\b|\belectricity\b|\bnatural gas\b)|(?:\butilit\w*|\bwater and sewer\b|\bsubmeter\w*|\bratio utility billing\b|\belectricity\b|\bnatural gas\b)[\s\S]{0,1200}(?:\battach\w*|\baddend\w*|\bexhibits?\b|\bseparate(?:ly)? sign\w*|\bfirst page\b|\btype size\b|\bpoint type\b|\bboldface\b|\bconspicuous\w*)` / code:55\.1-,code:56-,code:15\.2-21,code:15\.2-51 (1820 units) / 24 hits: 55.1-306.1, 55.1-1202#v2, 55.1-2200, 55.1-2217, 56-16.3, 56-236.1, 56-249.6:1, 56-249.6:2, 56-249.8, 56-265.15, 56-458, 56-462 +12
- `\A(?=[\s\S]*(?:\butilit\w*|\bwater and sewer\b|\bsubmeter\w*|\bratio utility billing\b|\belectricity\b|\bnatural gas\b))(?=[\s\S]*(?:\battach\w*|\baddend\w*|\bexhibits?\b|\bseparate(?:ly)? sign\w*|\bfirst page\b|\btype size\b|\bpoint type\b|\bboldface\b|\bconspicuous\w*))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bleases?\b))` / all (35549 units) / 29 hits: 8.9A-102, 10.1-500, 15.2-2118.1, 15.2-2119.4, 15.2-6405, 15.2-6900, 15.2-7207, 18.2-308.2:2, 21-118.4, 23.1-1301, 29.1-733.2, 33.2-1204 +17
- `\b(?:rental agreement|lease) shall (?:contain|state|include|set forth|disclose)\b` / code:55\.1- (897 units) / 5 hits: 55.1-1204.1, 55.1-1302, 55.1-1601, 55.1-1982, 55.1-2901
- positive [0] 15.2-2119.4: passed
- positive [2] 55.1-1204#v2: recorded as failed
**VA-G-0710** [utility-disclosure-attachment]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0709 (positive on term [2] named § 55.1-1204 (2027 version), which does not use that wording; positive moved to § 55.1-1204.1, opened in VA-G-0709 hits)
- `(?:\battach\w*|\baddend\w*|\bexhibits?\b|\bseparate(?:ly)? sign\w*|\bfirst page\b|\btype size\b|\bpoint type\b|\bboldface\b|\bconspicuous\w*)[\s\S]{0,1200}(?:\butilit\w*|\bwater and sewer\b|\bsubmeter\w*|\bratio utility billing\b|\belectricity\b|\bnatural gas\b)|(?:\butilit\w*|\bwater and sewer\b|\bsubmeter\w*|\bratio utility billing\b|\belectricity\b|\bnatural gas\b)[\s\S]{0,1200}(?:\battach\w*|\baddend\w*|\bexhibits?\b|\bseparate(?:ly)? sign\w*|\bfirst page\b|\btype size\b|\bpoint type\b|\bboldface\b|\bconspicuous\w*)` / code:55\.1-,code:56-,code:15\.2-21,code:15\.2-51 (1820 units) / 24 hits: 55.1-306.1, 55.1-1202#v2, 55.1-2200, 55.1-2217, 56-16.3, 56-236.1, 56-249.6:1, 56-249.6:2, 56-249.8, 56-265.15, 56-458, 56-462 +12
- `\A(?=[\s\S]*(?:\butilit\w*|\bwater and sewer\b|\bsubmeter\w*|\bratio utility billing\b|\belectricity\b|\bnatural gas\b))(?=[\s\S]*(?:\battach\w*|\baddend\w*|\bexhibits?\b|\bseparate(?:ly)? sign\w*|\bfirst page\b|\btype size\b|\bpoint type\b|\bboldface\b|\bconspicuous\w*))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bleases?\b))` / all (35549 units) / 29 hits: 8.9A-102, 10.1-500, 15.2-2118.1, 15.2-2119.4, 15.2-6405, 15.2-6900, 15.2-7207, 18.2-308.2:2, 21-118.4, 23.1-1301, 29.1-733.2, 33.2-1204 +17
- `\b(?:rental agreement|lease) shall (?:contain|state|include|set forth|disclose)\b` / code:55\.1- (897 units) / 5 hits: 55.1-1204.1, 55.1-1302, 55.1-1601, 55.1-1982, 55.1-2901
- positive [0] 15.2-2119.4: passed
- positive [2] 55.1-1204.1: passed
**VA-G-0711** [utility-disconnection-notice-authorization]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bthird[- ]part(?:y|ies)\b|\bdesignat\w*|\bduplicate\b|\bcopy\b)[\s\S]{0,1200}(?:\bdisconnect\w*|\bterminat\w*\b[\s\S]{0,40}\bservice\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b|\bdiscontinu\w*)|(?:\bdisconnect\w*|\bterminat\w*\b[\s\S]{0,40}\bservice\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b|\bdiscontinu\w*)[\s\S]{0,1200}(?:\bthird[- ]part(?:y|ies)\b|\bdesignat\w*|\bduplicate\b|\bcopy\b)` / code:56-,code:15\.2-21,code:15\.2-51,code:15\.2-54 (1002 units) / 5 hits: 56-245.1:4, 56-265.15, 15.2-2119, 15.2-2119.4, 15.2-2121.3
- `\A(?=[\s\S]*(?:\bowners?\b|\blandlords?\b|\blessors?\b))(?=[\s\S]*(?:\bdisconnect\w*|\bterminat\w*\b[\s\S]{0,40}\bservice\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b|\bdiscontinu\w*))(?=[\s\S]*(?:\bnotices?\b|\bnotif\w*))` / code:56- (738 units) / 2 hits: 56-264.1, 56-265.15
- `\bthird[- ]party notif\w*|\bdesignated? (?:a )?(?:third party|representative)\b` / all (35549 units) / 43 hits: 10.1-537, 19.2-310.4, 19.2-354, 19.2-354#v2, 22.1-271.1, 24.2-612, 24.2-705, 25.1-417, 27-34, 27-34.1, 29.1-314, 29.1-316 +31
- positive [0] 15.2-2119.4: passed
- positive [1] 56-264.1: passed
- positive [2] 55.1-1212: passed
**VA-G-0712** [utility-disconnection-notice-authorization]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0711 (termination-of-service phrase used a 40-character window flagged naming-only; replaced with a word-count phrase so no limb has a narrow window)
- `(?:\bthird[- ]part(?:y|ies)\b|\bdesignat\w*|\bduplicate\b|\bcopy\b)[\s\S]{0,1200}(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b|\bdiscontinu\w*)|(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b|\bdiscontinu\w*)[\s\S]{0,1200}(?:\bthird[- ]part(?:y|ies)\b|\bdesignat\w*|\bduplicate\b|\bcopy\b)` / code:56-,code:15\.2-21,code:15\.2-51,code:15\.2-54 (1002 units) / 5 hits: 56-245.1:4, 56-265.15, 15.2-2119, 15.2-2119.4, 15.2-2121.3
- `\A(?=[\s\S]*(?:\bowners?\b|\blandlords?\b|\blessors?\b))(?=[\s\S]*(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b|\bdiscontinu\w*))(?=[\s\S]*(?:\bnotices?\b|\bnotif\w*))` / code:56- (738 units) / 2 hits: 56-264.1, 56-265.15
- `\bthird[- ]party notif\w*|\bdesignated? (?:a )?(?:third party|representative)\b` / all (35549 units) / 43 hits: 10.1-537, 19.2-310.4, 19.2-354, 19.2-354#v2, 22.1-271.1, 24.2-612, 24.2-705, 25.1-417, 27-34, 27-34.1, 29.1-314, 29.1-316 +31
- positive [0] 15.2-2119.4: passed
- positive [1] 56-264.1: passed
- positive [2] 55.1-1212: passed
**VA-G-0713** [utility-interruption-submeter]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\binterrupt\w*` / code:55\.1- (897 units) / 4 hits: 55.1-360, 55.1-1243.1, 55.1-1252, 55.1-1604
- `(?:\binterrupt\w*|\boutages?\b|\bshut\w*[- ]?off\b|\bturn\w* off\b|\bcut\w* off\b|\bdisconnect\w*)[\s\S]{0,1200}(?:\bnotices?\b|\bnotif\w*)|(?:\bnotices?\b|\bnotif\w*)[\s\S]{0,1200}(?:\binterrupt\w*|\boutages?\b|\bshut\w*[- ]?off\b|\bturn\w* off\b|\bcut\w* off\b|\bdisconnect\w*)` / code:55\.1-1[2-4] (153 units) / 1 hits: 55.1-1212.1
- `\A(?=[\s\S]*(?:\binterrupt\w*|\boutages?\b|\bshut\w*[- ]?off\b|\bturn\w* off\b|\bcut\w* off\b|\bdisconnect\w*))(?=[\s\S]*(?:\bnotices?\b|\bnotif\w*))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b))` / code:55\.1-,code:56- (1635 units) / 3 hits: 55.1-1212.1, 55.1-2148, 56-264.1
- `(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)[\s\S]{0,1200}(?:\binterrupt\w*|\boutages?\b|\bshut\w*[- ]?off\b|\bturn\w* off\b|\bcut\w* off\b|\bdisconnect\w*)|(?:\binterrupt\w*|\boutages?\b|\bshut\w*[- ]?off\b|\bturn\w* off\b|\bcut\w* off\b|\bdisconnect\w*)[\s\S]{0,1200}(?:\bsub-?meter\w*|\benergy allocation\b|\bratio utility billing\b)` / all (35549 units) / 1 hits: 56-596.8
- positive [0] 55.1-1243.1: passed
- positive [3] 56-596.8: passed
**VA-G-0714** [utility-landlord-account]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bdeduct\w*|\bset[- ]?off\b|\boffset\w*)[\s\S]{0,1200}(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b)|(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b)[\s\S]{0,1200}(?:\bdeduct\w*|\bset[- ]?off\b|\boffset\w*)` / code:55\.1-,code:56-,code:15\.2-21,code:15\.2-51 (1820 units) / 30 hits: 55.1-1212.1, 55.1-1226, 55.1-1244.1, 55.1-2510, 56-242, 56-249.6:1, 56-249.6:2, 56-249.8, 56-523, 56-576, 56-585.1, 56-585.1:8 +18
- `\A(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\boccupants?\b))(?=[\s\S]*(?:\bmaster[- ]meter\w*|\bsingle meter\b|\bone meter\b|\bserves multiple\b))(?=[\s\S]*(?:\bnotices?\b|\bnotif\w*))` / all (35549 units) / 2 hits: 15.2-2119, 15.2-2119.4
- `\breceivers?(?:hip)?\b[\s\S]{0,1200}(?:\brents?\b|\btenants?\b)|(?:\brents?\b|\btenants?\b)[\s\S]{0,1200}\breceivers?(?:hip)?\b` / code:55\.1- (897 units) / 1 hits: 55.1-1403
- `\b(?:each|every|all) (?:dwelling |rental |residential )?units?\b[\s\S]{0,1200}(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b)|(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b)[\s\S]{0,1200}\b(?:each|every|all) (?:dwelling |rental |residential )?units?\b` / code:56-,code:15\.2-21,code:15\.2-51 (923 units) / 0 hits
- `\bin the name of (?:such |the )?(?:property )?(?:owner|landlord)\b|\blandlord\W?s (?:utility )?(?:bill|account)s?\b` / all (35549 units) / 19 hits: 15.2-716, 15.2-2118.1, 15.2-2119.4, 15.2-2412, 29.1-733.19, 29.1-733.20, 29.1-733.22, 32.1-164.1:2, 35.1-18, 38.2-2206, 38.2-2232, 46.2-621 +7
- positive [0] 15.2-2119.4: passed
- positive [1] 15.2-2119.4: passed
- positive [4] 15.2-2119.4: passed
**VA-G-0715** [utility-shutoff-statute]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b)[\s\S]{0,1200}(?:\bstate of emergency\b|\bdeclared emergency\b|\bemergency conditions?\b|\bdisasters?\b|\bhurricanes?\b|\bstorms?\b|\bextreme weather\b|\bwinter\b|\bcold weather\b|\bheating season\b|\bmoratori\w*|\bdegrees Fahrenheit\b)|(?:\bstate of emergency\b|\bdeclared emergency\b|\bemergency conditions?\b|\bdisasters?\b|\bhurricanes?\b|\bstorms?\b|\bextreme weather\b|\bwinter\b|\bcold weather\b|\bheating season\b|\bmoratori\w*|\bdegrees Fahrenheit\b)[\s\S]{0,1200}(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b)` / code:56-,code:15\.2-21,code:15\.2-51,code:44- (1157 units) / 3 hits: 56-245.1:3, 15.2-2121.2, 44-146.29:4
- `\A(?=[\s\S]*(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bcessation\b|\bshut\w*[- ]?off\b))(?=[\s\S]*(?:\bstate of emergency\b|\bdeclared emergency\b|\bemergency conditions?\b|\bdisasters?\b|\bhurricanes?\b|\bstorms?\b|\bextreme weather\b|\bwinter\b|\bcold weather\b|\bheating season\b|\bmoratori\w*|\bdegrees Fahrenheit\b))` / all (35549 units) / 10 hits: 15.2-2119, 15.2-2121.2, 44-146.29:4, 45.2-1600, 56-245.1:3, 56-265.15, 12VAC5-630-10, 13VAC5-52-480, 13VAC5-63-210, 13VAC5-63-320
- `\bmoratori\w*` / code:56-,code:15\.2- (3071 units) / 5 hits: 56-484.27, 15.2-1636.9, 15.2-2209.1, 15.2-2209.1:1, 15.2-2316.5 / heading-only: 15.2-3902
- positive [0] 56-245.1:3: passed
- positive [1] 15.2-2121.2: passed
**VA-G-0716** [utility-transfer]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:in|into) (?:the )?(?:tenant|lessee)\W?s(?:\W)? (?:own )?name\b|\bin the name of (?:such |the )?(?:lessee|tenant)\b` / all (35549 units) / 1 hits: 15.2-2119.4
- `\btransfer\w*[\s\S]{0,1200}(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b)|(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b)[\s\S]{0,1200}\btransfer\w*` / code:55\.1-1[2-4],code:15\.2-21,code:15\.2-51 (338 units) / 2 hits: 55.1-1200, 55.1-1234.1
- `\A(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b))(?=[\s\S]*(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bshut\w*[- ]?off\b|\bcut\w* off\b|\bturn\w* off\b|\binterrupt\w*))` / all (35549 units) / 1 hits: 15.2-2119.4
- positive [0] 15.2-2119.4: passed
- positive [2] 55.1-1212.1: recorded as failed
**VA-G-0717** [utility-transfer]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0716 (positive on term [2] named § 55.1-1212.1, which the term does not match; positive moved to § 15.2-2119.4, the one hit, opened)
- `\b(?:in|into) (?:the )?(?:tenant|lessee)\W?s(?:\W)? (?:own )?name\b|\bin the name of (?:such |the )?(?:lessee|tenant)\b` / all (35549 units) / 1 hits: 15.2-2119.4
- `\btransfer\w*[\s\S]{0,1200}(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b)|(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b)[\s\S]{0,1200}\btransfer\w*` / code:55\.1-1[2-4],code:15\.2-21,code:15\.2-51 (338 units) / 2 hits: 55.1-1200, 55.1-1234.1
- `\A(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*(?:\butilit\w*|\bwater and sewer\b|\belectric service\b|\bgas service\b|\belectricity\b))(?=[\s\S]*(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bshut\w*[- ]?off\b|\bcut\w* off\b|\bturn\w* off\b|\binterrupt\w*))` / all (35549 units) / 1 hits: 15.2-2119.4
- `\A(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\bessential services?\b)(?=[\s\S]*(?:\bdisconnect\w*|\bterminat\w* (?:\S+ ){0,4}service\b|\bcease supplying\b|\bshut\w*[- ]?off\b|\bcut\w* off\b|\bturn\w* off\b|\binterrupt\w*))` / code:55\.1- (897 units) / 2 hits: 55.1-1243.1, 55.1-1252
- positive [0] 15.2-2119.4: passed
- positive [2] 15.2-2119.4: passed
- positive [3] 55.1-1243.1: passed
**VA-G-0718** [ordnance-demolition-meter-disclosures]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bordnance\b|\bmunitions?\b|\bunexploded\b|\bmilitary (?:training|firing) (?:area|range)s?\b|\bformer (?:military|defense) (?:site|installation)s?\b)` / all (35549 units) / 7 hits: 1-405, 9.1-102, 9.1-102#v2, 19.2-83.3, 19.2-83.4, 44-82, 44-103
- `(?:\bordnance\b|\bmunitions?\b|\bunexploded\b|\bmilitary (?:training|firing) (?:area|range)s?\b|\bformer (?:military|defense) (?:site|installation)s?\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bprospective (?:tenant|purchaser|buyer)s?\b)|(?:\btenants?\b|\blessees?\b|\blandlords?\b|\brental agreements?\b|\bprospective (?:tenant|purchaser|buyer)s?\b)[\s\S]{0,1200}(?:\bordnance\b|\bmunitions?\b|\bunexploded\b|\bmilitary (?:training|firing) (?:area|range)s?\b|\bformer (?:military|defense) (?:site|installation)s?\b)` / all (35549 units) / 0 hits
- `\A(?=[\s\S]*(?:\bordnance\b|\bmunitions?\b|\bunexploded\b|\bmilitary (?:training|firing) (?:area|range)s?\b|\bformer (?:military|defense) (?:site|installation)s?\b))(?=[\s\S]*(?:\bdisclos\w*|\bnotif\w*|\bnotices?\b))` / all (35549 units) / 2 hits: 9.1-102, 9.1-102#v2
- `\bmeters?\b[\s\S]{0,1200}(?:\bcommon areas?\b|\boutside (?:the |his |a )?(?:tenant\W?s )?(?:dwelling )?unit\b|\bother (?:dwelling )?units\b|\bowner-paid areas\b)|(?:\bcommon areas?\b|\boutside (?:the |his |a )?(?:tenant\W?s )?(?:dwelling )?unit\b|\bother (?:dwelling )?units\b|\bowner-paid areas\b)[\s\S]{0,1200}\bmeters?\b` / all (35549 units) / 1 hits: 56-245.3
- `\A(?=[\s\S]*\bmeter\w*)(?=[\s\S]*(?:\bcommon areas?\b|\boutside (?:the |his |a )?(?:tenant\W?s )?(?:dwelling )?unit\b|\bother (?:dwelling )?units\b|\bowner-paid areas\b))(?=[\s\S]*\btenants?\b)` / all (35549 units) / 2 hits: 56-245.3, 13VAC5-63-210
- `\bdemoli\w*|\bdemolish\w*` / code:55\.1-1[2-4] (153 units) / 5 hits: 55.1-1216, 55.1-1258, 55.1-1258#v2, 55.1-1314#v2, 55.1-1410
- positive [0] 1-405: passed
- positive [3] 56-245.3: passed
- positive [5] 55.1-1216: passed
**VA-G-0719** [recycling-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\brecycl\w*[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\bapartments?\b|\bmultifamily\b|\bmulti-family\b|\bresidential (?:rental|building|unit)s?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\bapartments?\b|\bmultifamily\b|\bmulti-family\b|\bresidential (?:rental|building|unit)s?\b)[\s\S]{0,1200}\brecycl\w*` / all (35549 units) / 4 hits: 15.2-937, 55.1-1212, 55.1-1212#v2, 55.1-1404
- `\A(?=[\s\S]*\brecycl\w*)(?=[\s\S]*(?:\bnotices?\b|\bnotif\w*|\binform\w*|\binstruct\w*|\bpost(?:ed|ing)?\b|\bsignage\b|\bsigns?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\bapartments?\b|\bmultifamily\b|\bmulti-family\b|\bresidential (?:rental|building|unit)s?\b))` / all (35549 units) / 1 hits: 58.1-609.3
- `(?:\bgarbage\b|\btrash\b|\brefuse\b|\brubbish\b|\bwaste\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b)|(?:\btenants?\b|\blandlords?\b)[\s\S]{0,1200}(?:\bgarbage\b|\btrash\b|\brefuse\b|\brubbish\b|\bwaste\b)` / code:55\.1-1[2-4] (153 units) / 8 hits: 55.1-1212, 55.1-1212#v2, 55.1-1220, 55.1-1227, 55.1-1303, 55.1-1304, 55.1-1310, 55.1-1404
- positive [0] 15.2-937: passed
- positive [2] 55.1-1227: passed
**VA-G-0720** [recycling-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0719 (INFLECTION line on term [2] came from the trap word refuse/refused; term [2] rerun with refuse limited to refuse collection, disposal, containers or receptacles and plural forms written out)
- `\brecycl\w*[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\bapartments?\b|\bmultifamily\b|\bmulti-family\b|\bresidential (?:rental|building|unit)s?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\bapartments?\b|\bmultifamily\b|\bmulti-family\b|\bresidential (?:rental|building|unit)s?\b)[\s\S]{0,1200}\brecycl\w*` / all (35549 units) / 4 hits: 15.2-937, 55.1-1212, 55.1-1212#v2, 55.1-1404
- `\A(?=[\s\S]*\brecycl\w*)(?=[\s\S]*(?:\bnotices?\b|\bnotif\w*|\binform\w*|\binstruct\w*|\bpost(?:ed|ing)?\b|\bsignage\b|\bsigns?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\bapartments?\b|\bmultifamily\b|\bmulti-family\b|\bresidential (?:rental|building|unit)s?\b))` / all (35549 units) / 1 hits: 58.1-609.3
- `(?:\bgarbages?\b|\btrash\w*|\brefuse (?:collection|disposal|containers?|receptacles?)\b|\brubbish\w*|\bwastes?\b|\bsolid waste\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b)|(?:\btenants?\b|\blandlords?\b)[\s\S]{0,1200}(?:\bgarbages?\b|\btrash\w*|\brefuse (?:collection|disposal|containers?|receptacles?)\b|\brubbish\w*|\bwastes?\b|\bsolid waste\b)` / code:55\.1-1[2-4] (153 units) / 7 hits: 55.1-1212, 55.1-1212#v2, 55.1-1220, 55.1-1227, 55.1-1303, 55.1-1304, 55.1-1404
- positive [0] 15.2-937: passed
- positive [2] 55.1-1227: passed
**VA-G-0721** [unbundled-parking]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bunbundl\w*` / all (35549 units) / 6 hits: 56-235.8, 56-585.1, 58.1-400.1, 58.1-2662.1, 58.1-2900, 65.2-605
- `(?:\bparking\b|\bgarages?\b|\bcarports?\b)[\s\S]{0,1200}(?:\brent(?:s|ed|al)?\b|\btenants?\b|\blessees?\b|\brental agreements?\b)|(?:\brent(?:s|ed|al)?\b|\btenants?\b|\blessees?\b|\brental agreements?\b)[\s\S]{0,1200}(?:\bparking\b|\bgarages?\b|\bcarports?\b)` / code:55\.1- (897 units) / 3 hits: 55.1-2136, 55.1-2139.1, 55.1-2310
- `\A(?=[\s\S]*(?:\bparking\b|\bgarages?\b|\bcarports?\b))(?=[\s\S]*(?:\brent(?:s|ed|al)?\b|\btenants?\b|\blessees?\b|\brental agreements?\b))(?=[\s\S]*(?:\bseparate(?:ly)?\b|\boptional\b|\bcharges?\b|\bfees?\b|\bpric\w*))` / code:55\.1-,code:15\.2-22,code:36- (1394 units) / 5 hits: 55.1-2139.1, 55.1-2310, 15.2-2286, 15.2-2286#v2, 15.2-2292.4
- positive [0] 56-585.1: passed
- positive [1] 55.1-2139.1: passed
**VA-G-0722** [parking-rules-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bparking\b[\s\S]{0,1200}(?:\brules?\b|\bregulations?\b|\bpolic(?:y|ies)\b|\baddend\w*)|(?:\brules?\b|\bregulations?\b|\bpolic(?:y|ies)\b|\baddend\w*)[\s\S]{0,1200}\bparking\b` / code:55\.1-1[2-4],code:46\.2-12 (233 units) / 9 hits: 46.2-1220, 46.2-1221, 46.2-1223, 46.2-1226, 46.2-1227, 46.2-1228, 46.2-1229, 46.2-1231, 46.2-1242 / heading-only: 46.2-1219, 46.2-1219.1, 46.2-1220.1, 46.2-1222, 46.2-1222.1
- `\A(?=[\s\S]*\bparking\b)(?=[\s\S]*(?:\bpermits?\b|\bdecals?\b|\bregistry\b|\bstickers?\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b))` / all (35549 units) / 16 hits: 4.1-206.3, 15.2-2286, 15.2-2286#v2, 15.2-2288.3:1, 15.2-2305.1, 33.2-3100, 46.2-100, 46.2-752, 46.2-1224, 46.2-1231, 46.2-1232, 46.2-1508.2 +4
- `(?:\bvehicle (?:registration|information|data|identification)\b|\blicense plates?\b|\bplate numbers?\b|\bregistration (?:card|number)s?\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b)|(?:\btenants?\b|\blandlords?\b|\blessees?\b|\brental agreements?\b|\bresidents?\b)[\s\S]{0,1200}(?:\bvehicle (?:registration|information|data|identification)\b|\blicense plates?\b|\bplate numbers?\b|\bregistration (?:card|number)s?\b)` / code:55\.1-,code:46\.2-12 (977 units) / 5 hits: 55.1-1806, 55.1-1973, 46.2-1213, 46.2-1231, 46.2-1232
- positive [0] 46.2-1231: passed
- positive [1] 46.2-1231: passed
- positive [2] 46.2-1231: passed
**VA-G-0724** [cold-weather-vacate-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bfreez\w*|\bfrozen\b|\bcold weather\b|\bwinter\b|\bheating season\b|\bheat in season\b|\bdegrees Fahrenheit\b)[\s\S]{0,1200}(?:\bvacat\w*|\babandon\w*|\babsen\w*|\bmov\w* out\b|\bmove-out\b|\bleav\w* the (?:premises|dwelling|unit)\b)|(?:\bvacat\w*|\babandon\w*|\babsen\w*|\bmov\w* out\b|\bmove-out\b|\bleav\w* the (?:premises|dwelling|unit)\b)[\s\S]{0,1200}(?:\bfreez\w*|\bfrozen\b|\bcold weather\b|\bwinter\b|\bheating season\b|\bheat in season\b|\bdegrees Fahrenheit\b)` / all (35549 units) / 4 hits: 45.2-1600, 46.2-1302, 54.1-2806, 54.1-2811.1
- `\A(?=[\s\S]*(?:\bfreez\w*|\bfrozen\b|\bcold weather\b|\bwinter\b|\bheating season\b|\bheat in season\b|\bdegrees Fahrenheit\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\boccupants?\b))(?=[\s\S]*(?:\bvacat\w*|\babandon\w*|\babsen\w*|\bmov\w* out\b|\bmove-out\b|\bleav\w* the (?:premises|dwelling|unit)\b))` / all (35549 units) / 4 hits: 45.2-1600, 13VAC5-52-210, 13VAC5-63-310, 13VAC5-63-540
- `(?:\bfreez\w*|\bfrozen\b|\bcold weather\b|\bwinter\b|\bheating season\b|\bheat in season\b|\bdegrees Fahrenheit\b)` / code:55\.1-,admin (1479 units) / 11 hits: 55.1-1220, 55.1-1244, 55.1-1244#v2, 13VAC5-52-210, 13VAC5-52-280, 13VAC5-63-210, 13VAC5-63-240, 13VAC5-63-264, 13VAC5-63-310, 13VAC5-63-320, 13VAC5-63-540
- positive [2] 55.1-1244: passed
- positive [2] 13VAC5-63-540: passed
**VA-G-0725** [shutdown-rent-protection]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bfurlough\w*|\bshutdowns?\b|\bshut down\b|\blapse (?:of|in) appropriations?\b|\bclosure of the United States government\b|\bgovernment closure\b)` / all (35549 units) / 26 hits: 18.2-64.1, 18.2-251.03, 18.2-251.03#v2, 44-209, 45.2-801, 45.2-920, 53.1-37, 53.1-38, 53.1-71.4, 53.1-132, 53.1-265, 58.1-3916 +14
- `(?:\bfurlough\w*|\bshutdowns?\b|\bshut down\b|\blapse (?:of|in) appropriations?\b|\bclosure of the United States government\b|\bgovernment closure\b)[\s\S]{0,1200}(?:\brent(?:s|ed|al)?\b|\btenants?\b|\blate (?:fees?|charges?)\b|\bevict\w*|\bunlawful detainer\b)|(?:\brent(?:s|ed|al)?\b|\btenants?\b|\blate (?:fees?|charges?)\b|\bevict\w*|\bunlawful detainer\b)[\s\S]{0,1200}(?:\bfurlough\w*|\bshutdowns?\b|\bshut down\b|\blapse (?:of|in) appropriations?\b|\bclosure of the United States government\b|\bgovernment closure\b)` / all (35549 units) / 1 hits: 44-209
- `\A(?=[\s\S]*(?:\bfurlough\w*|\bshutdowns?\b|\bshut down\b|\blapse (?:of|in) appropriations?\b|\bclosure of the United States government\b|\bgovernment closure\b))(?=[\s\S]*(?:\brent(?:s|ed|al)?\b|\btenants?\b|\blate (?:fees?|charges?)\b|\bevict\w*|\bunlawful detainer\b))` / all (35549 units) / 2 hits: 44-209, 13VAC5-63-310
- `\bgrace period\b[\s\S]{0,1200}(?:\brent\b|\btenants?\b)|(?:\brent\b|\btenants?\b)[\s\S]{0,1200}\bgrace period\b` / code:55\.1-,code:8\.01-,code:44- (2249 units) / 0 hits
- positive [0] 44-209: passed
**VA-G-0801** [automatic-renewal]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `automatic(?:ally)? renew|renew(?:s|ed)? automatically|auto-?renew|automatically renewable` / all (35549 units) / 17 hits: 6.2-2602, 55.1-1204, 55.1-1204#v2, 55.1-1302, 55.1-1837, 55.1-1940.1, 55.1-2503, 58.1-623.2, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4 +5
- `\brenew(?:al|als|s|ed|ing)?\b[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)|(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)[\s\S]{0,1200}\brenew(?:al|als|s|ed|ing)?\b` / code:55\.1-1[2-6]\d\d (150 units) / 12 hits: 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-1253, 55.1-1258#v2, 55.1-1300, 55.1-1302, 55.1-1308, 55.1-1314#v2, 55.1-1320, 55.1-1500, 55.1-1601
- `\A(?=[\s\S]*\brenew(?:al|als|s|ed|ing)?\b)(?=[\s\S]*(?:rental agreements?|\blessees?\b|\bleases?\b))(?=[\s\S]*\btenants?\b)` / code (34494 units) / 12 hits: 10.1-500, 25.1-234, 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-1253, 55.1-1258#v2, 55.1-1300, 55.1-1302, 55.1-1308, 55.1-1314#v2, 64.2-105
- `\breminders?\b[\s\S]{0,1200}\brenew(?:al|als|s|ed|ing)?\b|\brenew(?:al|als|s|ed|ing)?\b[\s\S]{0,1200}\breminders?\b` / all (35549 units) / 0 hits
- `roll(?:s|ed)? over|\brollover\b|extend(?:s|ed)? (?:the|such) (?:lease|rental agreement|term)` / code:55\.1-1[2-6]\d\d (150 units) / 0 hits
- positive [0] 55.1-1204: passed
- positive [1] 55.1-1204: passed
- positive [2] 55.1-1302: passed
- positive [3] 59.1-207.46: recorded as failed
**VA-G-0802** [automatic-renewal]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0801 (term [3] positive named a section without the word reminder; added term [5] with a real positive)
- `automatic(?:ally)? renew|renew(?:s|ed)? automatically|auto-?renew|automatically renewable` / all (35549 units) / 17 hits: 6.2-2602, 55.1-1204, 55.1-1204#v2, 55.1-1302, 55.1-1837, 55.1-1940.1, 55.1-2503, 58.1-623.2, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4 +5
- `\brenew(?:al|als|s|ed|ing)?\b[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)|(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)[\s\S]{0,1200}\brenew(?:al|als|s|ed|ing)?\b` / code:55\.1-1[2-6]\d\d (150 units) / 12 hits: 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-1253, 55.1-1258#v2, 55.1-1300, 55.1-1302, 55.1-1308, 55.1-1314#v2, 55.1-1320, 55.1-1500, 55.1-1601
- `\A(?=[\s\S]*\brenew(?:al|als|s|ed|ing)?\b)(?=[\s\S]*(?:rental agreements?|\blessees?\b|\bleases?\b))(?=[\s\S]*\btenants?\b)` / code (34494 units) / 12 hits: 10.1-500, 25.1-234, 55.1-1204, 55.1-1204#v2, 55.1-1226, 55.1-1253, 55.1-1258#v2, 55.1-1300, 55.1-1302, 55.1-1308, 55.1-1314#v2, 64.2-105
- `\breminders?\b[\s\S]{0,1200}\brenew(?:al|als|s|ed|ing)?\b|\brenew(?:al|als|s|ed|ing)?\b[\s\S]{0,1200}\breminders?\b` / all (35549 units) / 0 hits
- `roll(?:s|ed)? over|\brollover\b|extend(?:s|ed)? (?:the|such) (?:lease|rental agreement|term)` / code:55\.1-1[2-6]\d\d (150 units) / 0 hits
- `\bnotif(?:y|ies|ied|ication)\b[\s\S]{0,1200}(?:\bcancel(?:s|led|lation)?\b|\brenew(?:al|als|s|ed|ing)?\b)|(?:\bcancel(?:s|led|lation)?\b|\brenew(?:al|als|s|ed|ing)?\b)[\s\S]{0,1200}\bnotif(?:y|ies|ied|ication)\b` / code:55\.1-1[2-6]\d\d,code:59\.1-207\.4\d (160 units) / 2 hits: 55.1-1302, 59.1-207.46
- positive [0] 55.1-1204: passed
- positive [1] 55.1-1204: passed
- positive [2] 55.1-1302: passed
- positive [5] 59.1-207.46: passed
**VA-G-0803** [lease-notice-initial-requirement]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\binitials\b|\binitial(?:l)?ed\b|\binitial(?:l)?ing\b|\binitial(?:s)? (?:by|of) the (?:tenant|lessee))` / all (35549 units) / 31 hits: 13.1-544.1, 13.1-762, 13.1-1054, 13.1-1104, 16.1-94, 18.2-494, 19.2-270.3, 28.2-517, 29.1-354, 38.2-2201, 38.2-2206, 45.2-731 +19
- `(?:\binitials\b|\binitial(?:l)?ed\b|\binitial(?:l)?ing\b|\binitial(?:s)? (?:by|of) the (?:tenant|lessee))[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b|\blessors?\b|\blandlords?\b)|(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b|\blessors?\b|\blandlords?\b)[\s\S]{0,1200}(?:\binitials\b|\binitial(?:l)?ed\b|\binitial(?:l)?ing\b|\binitial(?:s)? (?:by|of) the (?:tenant|lessee))` / all (35549 units) / 2 hits: 16.1-94, 28.2-517
- `\A(?=[\s\S]*(?:\binitials\b|\binitial(?:l)?ed\b|\binitial(?:l)?ing\b|\binitial(?:s)? (?:by|of) the (?:tenant|lessee)))(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b|\blessors?\b|\blandlords?\b))` / code (34494 units) / 2 hits: 16.1-94, 28.2-517
- `separately signed|signed separately|separate signature|signed or initialed|separate written document|separate writing|separately acknowledg` / all (35549 units) / 13 hits: 6.2-437, 8.2-205, 8.2-209, 8.2A-205, 8.2A-208, 13.1-330, 20-170, 21-296, 55.1-1226, 55.1-1410, 55.1-2226, 64.2-620 +1 / heading-only: 64.2-400
- `acknowledg(?:e|es|ed|ing|ment|ments)\b[\s\S]{0,1200}(?:rental agreements?|\bleases?\b)|(?:rental agreements?|\bleases?\b)[\s\S]{0,1200}acknowledg(?:e|es|ed|ing|ment|ments)\b` / code:55\.1-1[2-6]\d\d (150 units) / 4 hits: 55.1-1204, 55.1-1204#v2, 55.1-1262, 55.1-1303
- positive [0] 38.2-2206: passed
- positive [1] 28.2-517: passed
- positive [2] 28.2-517: passed
- positive [3] 55.1-1226: passed
- positive [4] 55.1-1204: passed
**VA-G-0804** [lease-term-limitation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bspouses?\b|\bhusband\b|\bwife\b)[\s\S]{0,1200}(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)|(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)[\s\S]{0,1200}(?:\bspouses?\b|\bhusband\b|\bwife\b)` / code:55\.1-,code:64\.2-,code:20-,code:11- (2048 units) / 2 hits: 55.1-127, 64.2-1634
- `\A(?=[\s\S]*(?:\bspouses?\b|\bhusband\b|\bwife\b))(?=[\s\S]*(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?))(?=[\s\S]*(?:\bconsent|\bjoin(?:s|ed|der)?\b))` / code (34494 units) / 21 hits: 22.1-387, 22.1-387#v2, 22.1-388, 22.1-388#v2, 29.1-301, 32.1-371, 46.2-752, 54.1-700.1, 54.1-700.2, 54.1-700.2#v2, 54.1-2729.02, 54.1-2953.1 +9
- `(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)[\s\S]{0,300}(?:for a term|for any term|for a period|term)\b[\s\S]{0,60}(?:not exceeding|not to exceed|of not more than|up to|not longer than|longer than|more than)\s+(?:\w+(?:-\w+)?|\d+)\s+years?|(?:for a term|for any term|for a period|term)\b[\s\S]{0,60}(?:not exceeding|not to exceed|of not more than|up to|not longer than|longer than|more than)\s+(?:\w+(?:-\w+)?|\d+)\s+years?[\s\S]{0,300}(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)` / code (34494 units) / 24 hits: 2.2-1151, 2.2-2263, 2.2-2273, 4.1-206.3, 5.1-2.14, 10.1-109, 10.1-112, 10.1-201, 15.2-1816, 15.2-2100, 16.1-322.5, 23.1-2213 +12
- `(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)[\s\S]{0,1200}(?:for a term|for any term|for a period|term)\b[\s\S]{0,60}(?:not exceeding|not to exceed|of not more than|up to|not longer than|longer than|more than)\s+(?:\w+(?:-\w+)?|\d+)\s+years?|(?:for a term|for any term|for a period|term)\b[\s\S]{0,60}(?:not exceeding|not to exceed|of not more than|up to|not longer than|longer than|more than)\s+(?:\w+(?:-\w+)?|\d+)\s+years?[\s\S]{0,1200}(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)` / code:55\.1-1[2-6]\d\d,code:11- (190 units) / 1 hits: 55.1-1207
- `(?:\bseals?\b|\bsealed\b|under seal)[\s\S]{0,1200}(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)|(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)[\s\S]{0,1200}(?:\bseals?\b|\bsealed\b|under seal)` / code:55\.1-,code:11- (937 units) / 0 hits
- `\bpower of attorney\b[\s\S]{0,1200}(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)|(?:\bleases?\b|\bleased\b|\blessees?\b|rental agreements?)[\s\S]{0,1200}\bpower of attorney\b` / code:55\.1-1[2-6]\d\d (150 units) / 0 hits
- positive [0] 55.1-127: passed
- positive [2] 2.2-1151: passed
- positive [3] 55.1-1207: passed
**VA-G-0805** [lease-type-parity]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:month-to-month|week-to-week|periodic tenanc(?:y|ies)|tenanc(?:y|ies) from month to month|year-to-year)[\s\S]{0,1200}(?:fixed[- ]term|term of (?:one|1|two|2|twelve|12) (?:years?|months)|longer term|term of the (?:lease|rental agreement)|lease term)|(?:fixed[- ]term|term of (?:one|1|two|2|twelve|12) (?:years?|months)|longer term|term of the (?:lease|rental agreement)|lease term)[\s\S]{0,1200}(?:month-to-month|week-to-week|periodic tenanc(?:y|ies)|tenanc(?:y|ies) from month to month|year-to-year)` / code:55\.1-1[2-6]\d\d (150 units) / 2 hits: 55.1-1253, 55.1-1305
- `(?:month-to-month|week-to-week|periodic tenanc(?:y|ies)|tenanc(?:y|ies) from month to month|year-to-year)[\s\S]{0,1200}(?:more burdensome|less favorable|unfavorable|\bpremium\b|surcharge|higher rent|additional rent|different (?:rent|terms))|(?:more burdensome|less favorable|unfavorable|\bpremium\b|surcharge|higher rent|additional rent|different (?:rent|terms))[\s\S]{0,1200}(?:month-to-month|week-to-week|periodic tenanc(?:y|ies)|tenanc(?:y|ies) from month to month|year-to-year)` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*(?:month-to-month|week-to-week|periodic tenanc(?:y|ies)|tenanc(?:y|ies) from month to month|year-to-year))(?=[\s\S]*(?:more burdensome|less favorable|unfavorable|\bpremium\b|surcharge|higher rent|additional rent|different (?:rent|terms)))` / code (34494 units) / 0 hits
- `more burdensome|less favorable terms|same terms (?:and conditions )?(?:as|for)` / all (35549 units) / 34 hits: 2.2-2275, 4.1-101.05, 6.2-1070, 10.1-109, 10.1-110, 10.1-1149, 10.1-1150, 13.1-322, 13.1-354, 15.2-736, 15.2-2110, 23.1-1011 +22
- `(?:month-to-month|week-to-week|periodic tenanc(?:y|ies)|tenanc(?:y|ies) from month to month|year-to-year)` / code:55\.1-1[2-6]\d\d (150 units) / 6 hits: 55.1-1204, 55.1-1204#v2, 55.1-1253, 55.1-1305, 55.1-1410, 55.1-1413
- positive [0] 55.1-1253: passed
- positive [4] 55.1-1204: passed
**VA-G-0806** [lease-type-size]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfont\b|\bfonts\b|\btypeface\b|\bboldface\b|\bbold type\b)` / all (35549 units) / 127 hits: 3.2-4008, 3.2-4123, 3.2-5145.4:1, 3.2-6515, 3.2-6519, 4.1-209.1, 4.1-1405, 4.1-1407, 4.1-1602, 4.1-1701, 6.2-402, 6.2-1416 +115
- `(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfont\b|\bfonts\b|\btypeface\b|\bboldface\b|\bbold type\b)[\s\S]{0,1200}(?:rental agreements?|\bleases?\b|\blessees?\b|\btenants?\b)|(?:rental agreements?|\bleases?\b|\blessees?\b|\btenants?\b)[\s\S]{0,1200}(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfont\b|\bfonts\b|\btypeface\b|\bboldface\b|\bbold type\b)` / code (34494 units) / 12 hits: 36-139, 36-139#v2, 38.2-3407.17:1, 46.2-1530, 54.1-1117.1, 54.1-1505, 55.1-1301, 55.1-1974, 55.1-2901, 59.1-207.16:1, 59.1-207.31, 59.1-417
- `\A(?=[\s\S]*(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfont\b|\bfonts\b|\btypeface\b|\bboldface\b|\bbold type\b))(?=[\s\S]*(?:rental agreements?|\bleases?\b))(?=[\s\S]*\btenants?\b)` / code (34494 units) / 3 hits: 36-139, 36-139#v2, 55.1-1301
- `(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfont\b|\bfonts\b|\btypeface\b|\bboldface\b|\bbold type\b)[\s\S]{0,1200}(?:admissib\w*|\bevidence\b|unenforceable|\bvoid\b)|(?:admissib\w*|\bevidence\b|unenforceable|\bvoid\b)[\s\S]{0,1200}(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfont\b|\bfonts\b|\btypeface\b|\bboldface\b|\bbold type\b)` / code,rules (34813 units) / 14 hits: 6.2-1816.1, 8.01-433.1, 11-4, 22.1-289.022, 24.2-613, 38.2-233, 38.2-3724, 38.2-3737, 54.1-534, 55.1-2211, 55.1-2221, 55.1-2228 +2
- `\blegible\b|\blegibly\b|\bconspicuous(?:ly)?\b|\bprinted in\b` / code:55\.1-1[2-6]\d\d (150 units) / 9 hits: 55.1-1200, 55.1-1202, 55.1-1202#v2, 55.1-1223, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1313, 55.1-1414
- positive [0] 36-139: passed
- positive [1] 36-139: passed
- positive [4] 55.1-1202: passed
**VA-G-0807** [lease-type-size]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0806 (INFLECTION lines on terms [0] and [3]: added boldfaced, bold-faced, pica, typefaces, evidenced, voided)
- `(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfonts?\b|\btypefaces?\b|\bboldfaced?\b|\bbold-faced\b|\bbold type\b|\bpica\b)` / all (35549 units) / 133 hits: 3.2-4008, 3.2-4123, 3.2-5145.4:1, 3.2-6515, 3.2-6519, 4.1-209.1, 4.1-1405, 4.1-1407, 4.1-1602, 4.1-1701, 6.2-402, 6.2-1416 +121
- `(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfonts?\b|\btypefaces?\b|\bboldfaced?\b|\bbold-faced\b|\bbold type\b|\bpica\b)[\s\S]{0,1200}(?:rental agreements?|\bleases?\b|\blessees?\b|\btenants?\b)|(?:rental agreements?|\bleases?\b|\blessees?\b|\btenants?\b)[\s\S]{0,1200}(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfonts?\b|\btypefaces?\b|\bboldfaced?\b|\bbold-faced\b|\bbold type\b|\bpica\b)` / code (34494 units) / 12 hits: 36-139, 36-139#v2, 38.2-3407.17:1, 46.2-1530, 54.1-1117.1, 54.1-1505, 55.1-1301, 55.1-1974, 55.1-2901, 59.1-207.16:1, 59.1-207.31, 59.1-417
- `\A(?=[\s\S]*(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfonts?\b|\btypefaces?\b|\bboldfaced?\b|\bbold-faced\b|\bbold type\b|\bpica\b))(?=[\s\S]*(?:rental agreements?|\bleases?\b))(?=[\s\S]*\btenants?\b)` / code (34494 units) / 3 hits: 36-139, 36-139#v2, 55.1-1301
- `(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfonts?\b|\btypefaces?\b|\bboldfaced?\b|\bbold-faced\b|\bbold type\b|\bpica\b)[\s\S]{0,1200}(?:admissib\w*|\bevidenc\w*|unenforceable|\bvoid(?:s|ed)?\b)|(?:admissib\w*|\bevidenc\w*|unenforceable|\bvoid(?:s|ed)?\b)[\s\S]{0,1200}(?:point type|point font|type size|size of (?:the )?type|\b\d+-point\b|\b(?:six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|eighteen)-point\b|\bfonts?\b|\btypefaces?\b|\bboldfaced?\b|\bbold-faced\b|\bbold type\b|\bpica\b)` / all (35549 units) / 20 hits: 6.2-402, 6.2-1816.1, 6.2-2014, 6.2-2040, 8.01-433.1, 11-4, 22.1-289.022, 24.2-613, 29.1-826, 32.1-138, 38.2-233, 38.2-3424 +8
- `\blegible\b|\blegibly\b|\bconspicuous(?:ly)?\b|\bprinted in\b` / code:55\.1-1[2-6]\d\d (150 units) / 9 hits: 55.1-1200, 55.1-1202, 55.1-1202#v2, 55.1-1223, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1313, 55.1-1414
- positive [0] 36-139: passed
- positive [1] 36-139: passed
- positive [3] 8.01-433.1: passed
- positive [4] 55.1-1202: passed
**VA-G-0808** [tenancy-at-will]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\btenan(?:t|ts|cy|cies)|\bestates?|\blessees?)\b (?:at will|at sufferance)` / all (35549 units) / 4 hits: 8.01-126, 8.01-126#v2, 8.01-178.3, 55.1-1225
- `\bat will\b[\s\S]{0,1200}(?:\btenants?\b|\btenancy\b|rental agreements?|\bleases?\b|\bpremises\b)|(?:\btenants?\b|\btenancy\b|rental agreements?|\bleases?\b|\bpremises\b)[\s\S]{0,1200}\bat will\b` / code:55\.1-,code:8\.01- (2015 units) / 2 hits: 55.1-1225, 8.01-178.3
- `\A(?=[\s\S]*\bat (?:will|sufferance)\b)(?=[\s\S]*\btenan(?:t|ts|cy|cies)\b)` / code (34494 units) / 4 hits: 8.01-126, 8.01-126#v2, 8.01-178.3, 55.1-1225
- `\bsufferance\b|no fixed term|without (?:a )?(?:fixed|definite) term|indefinite (?:term|period)|terminable at` / all (35549 units) / 11 hits: 8.01-126, 8.01-126#v2, 15.2-513, 15.2-613, 15.2-708, 15.2-808, 15.2-1503, 15.2-2261, 28.2-808, 53.1-144, 55.1-1235
- positive [0] 55.1-1225: passed
- positive [2] 8.01-126: passed
- positive [3] 8.01-126: passed
**VA-G-0809** [guarantor-renewal]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing|eed)\b[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)|(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)[\s\S]{0,1200}\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing|eed)\b` / code:55\.1-,code:49-,code:11-,code:8\.01- (2085 units) / 2 hits: 55.1-1200, 8.01-226.12
- `\A(?=[\s\S]*\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing|eed)\b)(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b))(?=[\s\S]*(?:\brenew(?:al|als|s|ed|ing)?\b|\bextension\b|\bextended\b|month-to-month|hold-?over))` / code (34494 units) / 15 hits: 2.2-115, 3.2-304, 6.2-1186, 10.1-1408.1, 15.2-5519, 33.2-3100, 38.2-513.1, 38.2-1422, 38.2-1800, 38.2-6401, 38.2-6403, 46.2-1569 +3
- `\bco-?sign(?:s|ed|er|ers|ing)?\b|\bco-?makers?\b` / all (35549 units) / 10 hits: 6.2-303, 6.2-1501, 6.2-1522, 6.2-1801, 6.2-2201, 8.01-226.12, 8.01-511, 32.1-127, 54.1-2621, 55.1-1200
- `\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing|eed)\b[\s\S]{0,1200}(?:maximum|\bend date|expiration date|termination date|\blimit of liability)|(?:maximum|\bend date|expiration date|termination date|\blimit of liability)[\s\S]{0,1200}\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing|eed)\b` / code:49-,code:11-,code:55\.1-12 (161 units) / 0 hits
- `(?:\bsurety\b|\bsureties\b|\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing|eed)\b)[\s\S]{0,1200}(?:discharg\w*|releas\w*|forfeit\w*)` / code:49-,code:11- (70 units) / 3 hits: 49-12, 49-14, 49-15
- positive [0] 55.1-1200: passed
- positive [2] 55.1-1200: passed
- positive [4] 49-26: recorded as failed
**VA-G-0810** [guarantor-renewal]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0809 (term [4] positive § 49-26 recorded as failed (word order); INFLECTION on term [1] (extensions))
- `\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)|(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b)[\s\S]{0,1200}\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b` / code:55\.1-,code:49-,code:11-,code:8\.01- (2085 units) / 2 hits: 55.1-1200, 8.01-226.12
- `\A(?=[\s\S]*\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b)(?=[\s\S]*(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b))(?=[\s\S]*(?:\brenew(?:al|als|s|ed|ing)?\b|\bextensions?\b|\bextended\b|month-to-month|hold-?over))` / code (34494 units) / 17 hits: 2.2-115, 2.2-2279, 3.2-304, 6.2-1186, 10.1-1408.1, 15.2-5519, 33.2-3100, 38.2-513.1, 38.2-1330, 38.2-1422, 38.2-1800, 38.2-6401 +5
- `\bco-?sign(?:s|ed|er|ers|ing)?\b|\bco-?makers?\b` / all (35549 units) / 10 hits: 6.2-303, 6.2-1501, 6.2-1522, 6.2-1801, 6.2-2201, 8.01-226.12, 8.01-511, 32.1-127, 54.1-2621, 55.1-1200
- `\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b[\s\S]{0,1200}(?:maximum|\bend date|expiration date|termination date|\blimit of liability)|(?:maximum|\bend date|expiration date|termination date|\blimit of liability)[\s\S]{0,1200}\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b` / code:49-,code:11-,code:55\.1-12 (161 units) / 0 hits
- `(?:\bsurety\b|\bsureties\b|\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b)[\s\S]{0,1200}(?:discharg\w*|releas\w*|forfeit\w*)|(?:discharg\w*|releas\w*|forfeit\w*)[\s\S]{0,1200}(?:\bsurety\b|\bsureties\b|\bguarant(?:y|ies|or|ors|ee|ees|eed|eeing)\b)` / code:49-,code:11- (70 units) / 5 hits: 49-12, 49-14, 49-15, 49-26, 11-11
- positive [0] 55.1-1200: passed
- positive [2] 55.1-1200: passed
- positive [4] 49-26: passed
**VA-G-0811** [minor-tenant-filing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\binfants?\b|\binfancy\b|\bminors?\b|under (?:the age of )?(?:18|eighteen)(?: years)?|age of majority)[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b|unlawful detainer|\blandlords?\b)|(?:\btenants?\b|rental agreements?|\blessees?\b|\bleases?\b|unlawful detainer|\blandlords?\b)[\s\S]{0,1200}(?:\binfants?\b|\binfancy\b|\bminors?\b|under (?:the age of )?(?:18|eighteen)(?: years)?|age of majority)` / code:55\.1-1[2-6]\d\d,code:8\.01-12\d,code:8\.01-13\d,code:16\.1-7\d,code:16\.1-8\d,rules (531 units) / 0 hits
- `\A(?=[\s\S]*(?:\binfants?\b|\binfancy\b|\bminors?\b|under (?:the age of )?(?:18|eighteen)(?: years)?|age of majority))(?=[\s\S]*\btenants?\b)(?=[\s\S]*(?:rental agreements?|\bleases?\b))` / code (34494 units) / 2 hits: 16.1-107, 64.2-105
- `plea of infancy|\bnecessaries\b|disaffirm\w*|\bvoidable\b[\s\S]{0,1200}(?:\binfants?\b|\binfancy\b|\bminors?\b|under (?:the age of )?(?:18|eighteen)(?: years)?|age of majority)` / all (35549 units) / 6 hits: 6.2-2401, 8.01-53, 8.01-278, 38.2-1522, 55.1-202, 60.2-600
- `(?:\binfants?\b|\binfancy\b|\bminors?\b|under (?:the age of )?(?:18|eighteen)(?: years)?|age of majority)` / code:8\.01-[1-9]\b,code:8\.01-[1-9]\d?\b (159 units) / 14 hits: 8.01-2, 8.01-8, 8.01-27.5, 8.01-36, 8.01-37, 8.01-40, 8.01-40.5, 8.01-42.3, 8.01-43, 8.01-44, 8.01-44.4, 8.01-50 +2
- positive [2] 8.01-278: passed
- positive [3] 8.01-8: passed
**VA-G-0812** [notice-to-vacate-additional-terms]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:notices? to vacate|intent(?:ion)? to vacate|vacating date|\bmove-?out\b|notice of termination|termination notice)` / code:55\.1-1[2-6]\d\d (150 units) / 25 hits: 55.1-1202, 55.1-1202#v2, 55.1-1204, 55.1-1204#v2, 55.1-1209, 55.1-1209#v2, 55.1-1212, 55.1-1212#v2, 55.1-1217, 55.1-1225, 55.1-1226, 55.1-1229 +13
- `(?:notices? to vacate|intent(?:ion)? to vacate|vacating date|\bmove-?out\b|notice of termination|termination notice)[\s\S]{0,1200}(?:additional terms|terms not (?:contained|included|stated)|not contained in the (?:rental agreement|lease)|\bboldface\b|\bbold type\b)|(?:additional terms|terms not (?:contained|included|stated)|not contained in the (?:rental agreement|lease)|\bboldface\b|\bbold type\b)[\s\S]{0,1200}(?:notices? to vacate|intent(?:ion)? to vacate|vacating date|\bmove-?out\b|notice of termination|termination notice)` / all (35549 units) / 0 hits
- `\A(?=[\s\S]*(?:notices? to vacate|intent(?:ion)? to vacate|vacating date|\bmove-?out\b|notice of termination|termination notice))(?=[\s\S]*(?:additional terms|terms not (?:contained|included|stated)|not contained in the (?:rental agreement|lease)|\bboldface\b|\bbold type\b))` / code (34494 units) / 0 hits
- `\A(?=[\s\S]*(?:notices? to vacate|intent(?:ion)? to vacate|vacating date|\bmove-?out\b|notice of termination|termination notice))(?=[\s\S]*(?:\balteration\w*|\brenovat\w*|\bremodel\w*|\bdemoli\w*|\bconstruction\b))(?=[\s\S]*\btenants?\b)` / code (34494 units) / 3 hits: 55.1-1229, 55.1-1410, 55.1-2164
- `(?:\balteration\w*|\brenovat\w*|\bremodel\w*|\bdemoli\w*|\bconstruction\b)[\s\S]{0,1200}(?:uninhabitable|untenantable|\bunfit\b|unlivable)|(?:uninhabitable|untenantable|\bunfit\b|unlivable)[\s\S]{0,1200}(?:\balteration\w*|\brenovat\w*|\bremodel\w*|\bdemoli\w*|\bconstruction\b)` / code:55\.1-1[2-6]\d\d (150 units) / 0 hits
- positive [0] 55.1-1226: passed
- positive [3] 55.1-1410: passed
**VA-G-0813** [emergency-contact]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:emergency (?:telephone|phone|contacts?|numbers?|line|maintenance|repairs?)|\b24-hour\b|twenty-four-hour|\bafter-hours\b|\bon-call\b|persons? to contact|contact persons?)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|rental agreements?|\blessees?\b|dwelling units?)|(?:\btenants?\b|\blandlords?\b|rental agreements?|\blessees?\b|dwelling units?)[\s\S]{0,1200}(?:emergency (?:telephone|phone|contacts?|numbers?|line|maintenance|repairs?)|\b24-hour\b|twenty-four-hour|\bafter-hours\b|\bon-call\b|persons? to contact|contact persons?)` / code:55\.1-1[2-6]\d\d (150 units) / 5 hits: 55.1-1229, 55.1-1254, 55.1-1255, 55.1-1256, 55.1-1416
- `(?:emergency (?:telephone|phone|contacts?|numbers?|line|maintenance|repairs?)|\b24-hour\b|twenty-four-hour|\bafter-hours\b|\bon-call\b|persons? to contact|contact persons?)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|rental agreements?|\blessees?\b|dwelling units?)|(?:\btenants?\b|\blandlords?\b|rental agreements?|\blessees?\b|dwelling units?)[\s\S]{0,1200}(?:emergency (?:telephone|phone|contacts?|numbers?|line|maintenance|repairs?)|\b24-hour\b|twenty-four-hour|\bafter-hours\b|\bon-call\b|persons? to contact|contact persons?)` / all (35549 units) / 8 hits: 37.2-421.1, 46.2-1231, 55.1-1229, 55.1-1254, 55.1-1255, 55.1-1256, 55.1-1416, 13VAC5-63-210
- `\A(?=[\s\S]*\bemergenc\w*)(?=[\s\S]*(?:telephone|phone number))(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)` / code (34494 units) / 2 hits: 55.1-1245, 55.1-1245#v2
- `\bhotlines?\b|website address|management website` / code:55\.1-1[2-6]\d\d,code:36- (494 units) / 6 hits: 55.1-1202, 55.1-1202#v2, 55.1-1245, 55.1-1245#v2, 36-139, 36-139#v2
- positive [0] 55.1-1256: passed
- positive [3] 55.1-1202: passed
**VA-G-0814** [truth-in-renting]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `truth[- ]in[- ]renting|truth in leasing|rights and responsibilities of tenants` / all (35549 units) / 2 hits: 36-139, 36-139#v2
- `(?:statement|notice|summary|booklet|guide)s? of (?:the )?(?:tenant|tenants|landlord and tenant)\W{0,3}s? rights` / all (35549 units) / 6 hits: 36-139, 36-139#v2, 55.1-1204, 55.1-1204#v2, 55.1-1303, 2024 Acts ch. 831
- `(?:offer|offering|offers|offered)[\s\S]{0,1200}(?:prohibited|void|unenforceable)[\s\S]{0,1200}(?:rental agreements?|\bleases?\b)|(?:rental agreements?|\bleases?\b)[\s\S]{0,1200}(?:prohibited|void|unenforceable)[\s\S]{0,1200}(?:offer|offering|offers|offered)` / code:55\.1-1[2-6]\d\d,code:59\.1- (1052 units) / 7 hits: 55.1-1204, 55.1-1204#v2, 55.1-1308.3, 59.1-200, 59.1-200#v2, 59.1-200#v3, 59.1-200#v4
- positive [0] 36-139: passed
- positive [1] 55.1-1204: passed
**VA-G-0815** [guest-rights]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bguests?\b|\binvitees?\b|\bvisitors?\b)` / code:55\.1-1[2-6]\d\d (150 units) / 25 hits: 55.1-1200, 55.1-1201, 55.1-1227, 55.1-1234, 55.1-1239, 55.1-1240, 55.1-1240#v2, 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1244.1 +13
- `(?:\bguests?\b|\binvitees?\b|\bvisitors?\b)[\s\S]{0,1200}(?:\bright to (?:have|receive|invite|entertain)|shall not (?:prohibit|restrict|limit|charge)|may not (?:prohibit|restrict|limit|charge)|\bfees?\b|\bcharges?\b)|(?:\bright to (?:have|receive|invite|entertain)|shall not (?:prohibit|restrict|limit|charge)|may not (?:prohibit|restrict|limit|charge)|\bfees?\b|\bcharges?\b)[\s\S]{0,1200}(?:\bguests?\b|\binvitees?\b|\bvisitors?\b)` / code:55\.1-1[2-6]\d\d (150 units) / 7 hits: 55.1-1234, 55.1-1239, 55.1-1241, 55.1-1244#v2, 55.1-1258#v2, 55.1-1306, 55.1-1314#v2
- `\A(?=[\s\S]*(?:\bguests?\b|\binvitees?\b|\bvisitors?\b))(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*(?:\bright to (?:have|receive|invite|entertain)|shall not (?:prohibit|restrict|limit|charge)|may not (?:prohibit|restrict|limit|charge)|\bfees?\b|\bcharges?\b))` / code (34494 units) / 14 hits: 29.1-301, 55.1-1200, 55.1-1234, 55.1-1239, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1258#v2, 55.1-1300 +2
- `(?:service providers?|\bsuppliers?\b|delivery|caregivers?|home health)[\s\S]{0,1200}(?:\btenants?\b[\s\S]{0,200}(?:access|enter|visit))` / code:55\.1-1[2-6]\d\d (150 units) / 5 hits: 55.1-1209, 55.1-1209#v2, 55.1-1222, 55.1-1229, 55.1-1306
- positive [0] 55.1-1246: passed
- positive [2] 55.1-1200: passed
**VA-G-0816** [other-landlord-facilities]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `garage doors?|door openers?` / all (35549 units) / 2 hits: 13VAC5-63-210, 13VAC5-63-550
- `(?:garage doors?|door openers?|\bmailboxe?s?\b|mail receptacles?|window screens?|\bscreens\b|laundry|washers?|dryers?|\bintercoms?\b|\bgates?\b)[\s\S]{0,1200}(?:\btenants?\b|rental agreements?|dwelling units?)|(?:\btenants?\b|rental agreements?|dwelling units?)[\s\S]{0,1200}(?:garage doors?|door openers?|\bmailboxe?s?\b|mail receptacles?|window screens?|\bscreens\b|laundry|washers?|dryers?|\bintercoms?\b|\bgates?\b)` / code:55\.1-1[2-6]\d\d (150 units) / 0 hits
- `\A(?=[\s\S]*(?:garage doors?|door openers?|\bmailboxe?s?\b|mail receptacles?|window screens?|\bscreens\b|laundry|washers?|dryers?|\bintercoms?\b|\bgates?\b))(?=[\s\S]*\btenants?\b)(?=[\s\S]*(?:\blandlords?\b|\blessors?\b|\bowners?\b))` / code (34494 units) / 2 hits: 21-364, 46.2-672
- `\bfacilit(?:y|ies)\b[\s\S]{0,1200}\blandlords?\b|\blandlords?\b[\s\S]{0,1200}\bfacilit(?:y|ies)\b` / code:55\.1-12\d\d (81 units) / 12 hits: 55.1-1200, 55.1-1201, 55.1-1220, 55.1-1222, 55.1-1227, 55.1-1228, 55.1-1234.1, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1259
- positive [0] 13VAC5-63-210: passed
- positive [3] 55.1-1220: passed
**VA-G-0817** [double-letting]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `part of a room|\bdouble[- ]?let\w*|more than one family|two or more families|\bdouble[- ]rent\w*|\bdouble[- ]book\w*` / all (35549 units) / 0 hits
- `(?:same (?:dwelling(?: unit)?|room|premises|unit|apartment)|part of a room)[\s\S]{0,1200}(?:more than one|two or more|another|second|other)\s+(?:\btenants?\b|\bpersons?\b|\bfamil(?:y|ies)\b|\bhouseholds?\b)|(?:more than one|two or more|another|second|other)\s+(?:\btenants?\b|\bpersons?\b|\bfamil(?:y|ies)\b|\bhouseholds?\b)[\s\S]{0,1200}(?:same (?:dwelling(?: unit)?|room|premises|unit|apartment)|part of a room)` / code:55\.1-1[2-6]\d\d (150 units) / 0 hits
- `\A(?=[\s\S]*(?:same (?:dwelling(?: unit)?|room|premises|unit|apartment)|part of a room))(?=[\s\S]*\btenants?\b)(?=[\s\S]*(?:\brent(?:s|ed)?\b|\blet\b|\bleased?\b))` / code (34494 units) / 0 hits
- `wrongfully in possession|(?:fails?|failure) to deliver possession` / code:55\.1-1[2-6]\d\d (150 units) / 1 hits: 55.1-1238
- positive [3] 55.1-1238: passed
**VA-G-0818** [tenant-employee-housing]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bemployees?\b|\bemployment\b|\bemployers?\b|\bcaretakers?\b|\bsuperintendents?\b|\bresident managers?\b|on-site managers?)[\s\S]{0,1200}(?:\boccupan(?:cy|t|ts)\b|dwelling units?|\btenants?\b|rental agreements?)|(?:\boccupan(?:cy|t|ts)\b|dwelling units?|\btenants?\b|rental agreements?)[\s\S]{0,1200}(?:\bemployees?\b|\bemployment\b|\bemployers?\b|\bcaretakers?\b|\bsuperintendents?\b|\bresident managers?\b|on-site managers?)` / code:55\.1-1[2-6]\d\d,code:8\.01-12\d (161 units) / 12 hits: 55.1-1201, 55.1-1209, 55.1-1209#v2, 55.1-1209.1, 55.1-1217, 55.1-1220, 55.1-1229, 55.1-1257, 55.1-1260, 55.1-1306, 8.01-126, 8.01-126#v2
- `\A(?=[\s\S]*(?:\bemployees?\b|\bemployment\b|\bemployers?\b|\bcaretakers?\b|\bsuperintendents?\b|\bresident managers?\b|on-site managers?))(?=[\s\S]*(?:\bhousing\b|\boccupan(?:cy|t|ts)\b|dwelling units?|living quarters|\blodging\b))(?=[\s\S]*(?:conditioned upon employment|condition of employment|terminat\w+ of (?:his |the )?employment|vacate))` / code (34494 units) / 8 hits: 8.01-126, 8.01-126#v2, 15.2-1507, 33.2-3100, 36-11, 55.1-1201, 55.1-1229, 55.1-2209
- `migrant (?:labor|worker|farmworker)s?|labor camps?|employer-provided housing|employee housing|housing (?:provided|furnished) by (?:the |an )?employer` / all (35549 units) / 8 hits: 2.2-2056, 15.2-6300.1, 32.1-203, 32.1-204, 32.1-205, 32.1-206, 32.1-211, 35.1-1
- positive [0] 55.1-1201: passed
- positive [1] 55.1-1201: passed
**VA-G-0819** [senior-housing-work-card]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `work cards?|\bsheriff\W?s cards?|work identification cards?|work permits? for (?:staff|employees)` / all (35549 units) / 0 hits
- `(?:housing for older persons|older persons|(?:55|62) years of age or older|senior (?:citizen )?housing|age-restricted|retirement communit\w+|assisted living facilit\w+)[\s\S]{0,1200}(?:\bemployees?\b|\bstaff\b|background checks?|criminal history|fingerprint\w*|work cards?)|(?:\bemployees?\b|\bstaff\b|background checks?|criminal history|fingerprint\w*|work cards?)[\s\S]{0,1200}(?:housing for older persons|older persons|(?:55|62) years of age or older|senior (?:citizen )?housing|age-restricted|retirement communit\w+|assisted living facilit\w+)` / code (34494 units) / 38 hits: 4.1-315, 8.01-42.6, 15.2-2291, 19.2-389, 19.2-389#v2, 32.1-37.1, 32.1-102.3:2, 51.5-135, 51.5-160, 54.1-2400.6, 54.1-2901, 54.1-2984 +26
- `\A(?=[\s\S]*(?:housing for older persons|(?:55|62) years of age or older|senior (?:citizen )?housing|age-restricted))(?=[\s\S]*(?:\bemployees?\b|\bstaff\b))(?=[\s\S]*(?:background checks?|criminal history|fingerprint\w*))` / code (34494 units) / 0 hits
- positive [1] 63.2-1720: passed
**VA-G-0820** [senior-housing-work-card]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0819 (INFLECTION line on term [1]: added staffed, staffing, staffs)
- `work cards?|\bsheriff\W?s cards?|work identification cards?|work permits? for (?:staff|employees)` / all (35549 units) / 0 hits
- `(?:housing for older persons|older persons|(?:55|62) years of age or older|senior (?:citizen )?housing|age-restricted|retirement communit\w+|assisted living facilit\w+)[\s\S]{0,1200}(?:\bemployees?\b|\bstaff(?:s|ed|ing)?\b|background checks?|criminal history|fingerprint\w*|work cards?)|(?:\bemployees?\b|\bstaff(?:s|ed|ing)?\b|background checks?|criminal history|fingerprint\w*|work cards?)[\s\S]{0,1200}(?:housing for older persons|older persons|(?:55|62) years of age or older|senior (?:citizen )?housing|age-restricted|retirement communit\w+|assisted living facilit\w+)` / code (34494 units) / 40 hits: 4.1-315, 8.01-42.6, 15.2-2291, 19.2-389, 19.2-389#v2, 32.1-37.1, 32.1-102.3:2, 44-146.19, 51.5-135, 51.5-160, 54.1-2400.6, 54.1-2901 +28
- `\A(?=[\s\S]*(?:housing for older persons|(?:55|62) years of age or older|senior (?:citizen )?housing|age-restricted))(?=[\s\S]*(?:\bemployees?\b|\bstaff(?:s|ed|ing)?\b))(?=[\s\S]*(?:background checks?|criminal history|fingerprint\w*))` / code (34494 units) / 0 hits
- positive [1] 63.2-1720: passed
**VA-G-0821** [senior-housing-work-card]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0820 (terms missed ages written as words (fifty-five, sixty-two) in § 36-96.7; added them and a Title 36 term)
- `work cards?|\bsheriff\W?s cards?|work identification cards?|work permits? for (?:staff|employees)` / all (35567 units) / 0 hits
- `(?:(?:55|62|fifty-five|sixty-two) years of age(?: or older)?|housing for older persons|senior (?:citizen )?housing|age-restricted|older persons|retirement communit\w+|assisted living facilit\w+)[\s\S]{0,1200}(?:\bemployees?\b|\bstaff(?:s|ed|ing)?\b|background checks?|criminal history|fingerprint\w*|work cards?)|(?:\bemployees?\b|\bstaff(?:s|ed|ing)?\b|background checks?|criminal history|fingerprint\w*|work cards?)[\s\S]{0,1200}(?:(?:55|62|fifty-five|sixty-two) years of age(?: or older)?|housing for older persons|senior (?:citizen )?housing|age-restricted|older persons|retirement communit\w+|assisted living facilit\w+)` / code (34494 units) / 41 hits: 4.1-315, 8.01-42.6, 15.2-2291, 18.2-308.016, 19.2-389, 19.2-389#v2, 32.1-37.1, 32.1-102.3:2, 44-146.19, 51.5-135, 51.5-160, 54.1-2400.6 +29
- `\A(?=[\s\S]*(?:(?:55|62|fifty-five|sixty-two) years of age(?: or older)?|housing for older persons|senior (?:citizen )?housing|age-restricted))(?=[\s\S]*(?:\bemployees?\b|\bstaff(?:s|ed|ing)?\b))(?=[\s\S]*(?:background checks?|criminal history|fingerprint\w*))` / code (34494 units) / 0 hits
- `(?:(?:55|62|fifty-five|sixty-two) years of age(?: or older)?|housing for older persons|senior (?:citizen )?housing|age-restricted)` / code:36- (344 units) / 1 hits: 36-96.7
- positive [1] 63.2-1720: passed
- positive [3] 36-96.7: passed
**VA-G-0822** [veterans-incentive]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bveterans?\W?s?\b[\s\S]{0,1200}(?:\brent(?:al|s|ed)?\b|\bhousing\b|\blandlords?\b|\btenants?\b|\bleases?\b|\blessors?\b|dwelling)|(?:\brent(?:al|s|ed)?\b|\bhousing\b|\blandlords?\b|\btenants?\b|\bleases?\b|\blessors?\b|dwelling)[\s\S]{0,1200}\bveterans?\W?s?\b` / code:2\.2-,code:36-,code:55\.1-,code:58\.1- (4598 units) / 8 hits: 2.2-231, 2.2-2004, 36-96.1:1, 55.1-1310, 58.1-3219.5, 58.1-3219.6, 58.1-3219.8, 58.1-3506
- `\A(?=[\s\S]*\bveterans?\W?s?\b)(?=[\s\S]*(?:\blandlords?\b|\blessors?\b|rental (?:housing|units?|property)))(?=[\s\S]*(?:\bincentives?\b|tax credits?|\bcredits?\b|\bgrants?\b|\bdiscounts?\b|\bconcessions?\b|\bexempt\w*|\bpreference\w*))` / code (34494 units) / 5 hits: 4.1-604, 18.2-340.16, 20-108.2, 46.2-100, 58.1-3506
- `military status` / all (35567 units) / 45 hits: 2.2-2048, 2.2-2901.1, 2.2-3004, 2.2-3900, 2.2-3901, 2.2-3902, 2.2-3904, 2.2-3905, 15.2-853, 15.2-854, 15.2-965, 15.2-1500.1 +33 / heading-only: 18.2-177.1
- `HUD-VASH|\bVASH\b|supportive housing for (?:homeless )?veterans|veterans affairs supportive housing` / all (35567 units) / 0 hits
- positive [0] 58.1-3219.5: passed
- positive [2] 36-96.3: passed
**VA-G-0901** [abandonment-and-mitigation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bmitigat(?:e|es|ed|ing|ion)\b` / code (34494 units) / 196 hits: 1-4, 1-239, 2.2-220.5, 2.2-220.6, 2.2-222.1, 2.2-222.3, 2.2-447, 2.2-2009, 2.2-2012.1, 2.2-2760, 2.2-3005, 2.2-3005.1 +184
- `\bmitigat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\brent\b)|(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\brent\b)[\s\S]{0,1200}\bmitigat(?:e|es|ed|ing|ion)\b` / code (34494 units) / 10 hits: 15.2-958.3, 36-96.2, 36-96.2#v2, 46.2-915.1, 46.2-1569, 55.1-1203, 55.1-1203#v2, 55.1-1249, 55.1-1251, 55.1-1256
- `\A(?=[\s\S]*\bmitigat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*(?:\btenants?\b|\blessees?\b))` / code (34494 units) / 9 hits: 4.1-604, 15.2-958.3, 46.2-915.1, 46.2-1569, 55.1-1203, 55.1-1203#v2, 55.1-1249, 55.1-1251, 55.1-1256
- `\bre-?let(?:s|ting|ted)?\b|\bre-?rent(?:s|ed|ing|al)?\b|\breasonable efforts? to rent\b|\bfair rental\b` / all (35549 units) / 11 hits: 3.2-302, 6.2-884, 6.2-1186, 8.01-126, 8.01-126#v2, 21-358, 25.1-417, 46.2-1569, 55.1-1239, 58.1-1736, 59.1-207.8
- positive [0] 55.1-1251: passed
- positive [1] 55.1-1249: passed
- positive [2] 55.1-1256: passed
**VA-G-0902** [abandonment-and-mitigation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0901 (INFLECTION line on term [1]: rent widened to rents/rented/renting)
- `\bmitigat(?:e|es|ed|ing|ion)\b` / code (34494 units) / 196 hits: 1-4, 1-239, 2.2-220.5, 2.2-220.6, 2.2-222.1, 2.2-222.3, 2.2-447, 2.2-2009, 2.2-2012.1, 2.2-2760, 2.2-3005, 2.2-3005.1 +184
- `\bmitigat(?:e|es|ed|ing|ion)\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|ing)?\b)|(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\brent(?:s|ed|ing)?\b)[\s\S]{0,1200}\bmitigat(?:e|es|ed|ing|ion)\b` / code (34494 units) / 12 hits: 3.2-3900, 15.2-958.3, 29.1-749.3, 36-96.2, 36-96.2#v2, 46.2-915.1, 46.2-1569, 55.1-1203, 55.1-1203#v2, 55.1-1249, 55.1-1251, 55.1-1256
- `\A(?=[\s\S]*\bmitigat(?:e|es|ed|ing|ion)\b)(?=[\s\S]*(?:\btenants?\b|\blessees?\b))` / code (34494 units) / 9 hits: 4.1-604, 15.2-958.3, 46.2-915.1, 46.2-1569, 55.1-1203, 55.1-1203#v2, 55.1-1249, 55.1-1251, 55.1-1256
- `\bre-?let(?:s|ting|ted)?\b|\bre-?rent(?:s|ed|ing|al)?\b|\breasonable efforts? to rent\b|\bfair rental\b` / all (35567 units) / 11 hits: 3.2-302, 6.2-884, 6.2-1186, 8.01-126, 8.01-126#v2, 21-358, 25.1-417, 46.2-1569, 55.1-1239, 58.1-1736, 59.1-207.8
- positive [0] 55.1-1251: passed
- positive [1] 55.1-1249: passed
- positive [2] 55.1-1256: passed
- positive [3] 8.01-126: passed
**VA-G-0903** [cure-and-eviction-grounds]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b` / code (34494 units) / 36 hits: 8.01-581.020, 13.1-522, 13.1-1040.1, 15.2-930, 15.2-934, 15.2-5121, 16.1-345.2, 16.1-345.3, 16.1-345.4, 38.2-1345, 38.2-4905, 38.2-4923 +24 / heading-only: 59.1-507.1
- `\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b[\s\S]{0,1200}(?:\bmeans\b|\bdefined\b|\bdeemed\b|\bshall include\b|\bincludes\b)|(?:\bmeans\b|\bdefined\b|\bdeemed\b|\bshall include\b|\bincludes\b)[\s\S]{0,1200}\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b` / code:55\.1-1[2-4],code:8\.01- (1271 units) / 5 hits: 55.1-1209, 55.1-1209#v2, 55.1-1241, 55.1-1244.1, 8.01-581.020
- `\A(?=[\s\S]*\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b)(?=[\s\S]*(?:\bmeans\b|\bdefined\b|\bdeemed\b|\bshall include\b|\bincludes\b))` / code:55\.1-1[2-4],code:8\.01- (1271 units) / 10 hits: 55.1-1209, 55.1-1209#v2, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 8.01-581.020
- `\bmaterial (?:terms?|provisions?|obligations?|covenants?) of (?:the|a|any|such) (?:written )?(?:lease|rental agreement|tenancy)` / all (35567 units) / 0 hits
- `\bmaterial\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b)|(?:\btenants?\b|\blessees?\b)[\s\S]{0,1200}\bmaterial\b` / code:55\.1-12 (91 units) / 12 hits: 55.1-1209, 55.1-1209#v2, 55.1-1234, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1258#v2, 55.1-1259
- positive [0] 55.1-1245: passed
- positive [1] 55.1-1209: passed
- positive [2] 55.1-1241: passed
**VA-G-0904** [cure-and-eviction-grounds]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0903 (INFLECTION line on term [4]: material widened to materials/materially)
- `\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b` / code (34494 units) / 36 hits: 8.01-581.020, 13.1-522, 13.1-1040.1, 15.2-930, 15.2-934, 15.2-5121, 16.1-345.2, 16.1-345.3, 16.1-345.4, 38.2-1345, 38.2-4905, 38.2-4923 +24 / heading-only: 59.1-507.1
- `\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b[\s\S]{0,1200}(?:\bmeans\b|\bdefined\b|\bdeemed\b|\bshall include\b|\bincludes\b)|(?:\bmeans\b|\bdefined\b|\bdeemed\b|\bshall include\b|\bincludes\b)[\s\S]{0,1200}\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b` / code:55\.1-1[2-4],code:8\.01- (1271 units) / 5 hits: 55.1-1209, 55.1-1209#v2, 55.1-1241, 55.1-1244.1, 8.01-581.020
- `\A(?=[\s\S]*\bmaterial(?:ly)? (?:noncompliances?|non-compliances?|breach(?:es|ed)?|violations?)\b)(?=[\s\S]*(?:\bmeans\b|\bdefined\b|\bdeemed\b|\bshall include\b|\bincludes\b))` / code:55\.1-1[2-4],code:8\.01- (1271 units) / 10 hits: 55.1-1209, 55.1-1209#v2, 55.1-1241, 55.1-1244, 55.1-1244#v2, 55.1-1244.1, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 8.01-581.020
- `\bmaterial (?:terms?|provisions?|obligations?|covenants?) of (?:the|a|any|such) (?:written )?(?:lease|rental agreement|tenancy)` / all (35567 units) / 0 hits
- `\bmaterial(?:s|ly)?\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b)|(?:\btenants?\b|\blessees?\b)[\s\S]{0,1200}\bmaterial(?:s|ly)?\b` / code:55\.1-12 (91 units) / 20 hits: 55.1-1200, 55.1-1209, 55.1-1209#v2, 55.1-1212, 55.1-1220, 55.1-1227, 55.1-1229, 55.1-1231, 55.1-1234, 55.1-1241, 55.1-1244, 55.1-1244#v2 +8
- positive [0] 55.1-1245: passed
- positive [1] 55.1-1209: passed
- positive [2] 55.1-1241: passed
- positive [4] 55.1-1245: passed
**VA-G-0905** [nonpayment-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bmail(?:s|ed|ing)?\b[\s\S]{0,1200}(?:\b(?:shall|will|are|is) (?:be )?added to (?:the|such|any)\b|\bdays? (?:shall|will|are|is) (?:be )?added\b)|(?:\b(?:shall|will|are|is) (?:be )?added to (?:the|such|any)\b|\bdays? (?:shall|will|are|is) (?:be )?added\b)[\s\S]{0,1200}\bmail(?:s|ed|ing)?\b` / code (34494 units) / 8 hits: 13.1-1064, 13.1-1254, 50-73.69, 54.1-2400, 58.1-12, 58.1-308, 58.1-1114, 58.1-2611
- `\bmail(?:s|ed|ing)?\b[\s\S]{0,1200}(?:\b(?:shall|will|are|is) (?:be )?added to (?:the|such|any)\b|\bdays? (?:shall|will|are|is) (?:be )?added\b)|(?:\b(?:shall|will|are|is) (?:be )?added to (?:the|such|any)\b|\bdays? (?:shall|will|are|is) (?:be )?added\b)[\s\S]{0,1200}\bmail(?:s|ed|ing)?\b` / code:55\.1-1[2-4],code:8\.01-,code:16\.1- (1727 units) / 0 hits
- `\A(?=[\s\S]*\bmail(?:s|ed|ing)?\b)(?=[\s\S]*(?:\b(?:shall|will|are|is) (?:be )?added to (?:the|such|any)\b|\bdays? (?:shall|will|are|is) (?:be )?added\b))` / code:55\.1-1[2-4],code:8\.01-,code:16\.1- (1727 units) / 0 hits
- `(?:\b(?:shall|will|are|is) (?:be )?added to (?:the|such|any)\b|\bdays? (?:shall|will|are|is) (?:be )?added\b)` / rules (319 units) / 4 hits: R. 1:7, R. 2A:2, R. 5A:30, R. 7A:2
- `\b(?:three|five|3|5) (?:additional |extra )?days\b[\s\S]{0,1200}\bmail(?:s|ed|ing)?\b|\bmail(?:s|ed|ing)?\b[\s\S]{0,1200}\b(?:three|five|3|5) (?:additional |extra )?days\b` / code:55\.1-12 (91 units) / 0 hits
- positive [0] 54.1-2400: passed
- positive [3] R. 7A:2: passed
**VA-G-0906** [eviction-hardship-stay]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bhardships?\b[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)[\s\S]{0,1200}\bhardships?\b` / all (35567 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `\A(?=[\s\S]*\bhardships?\b)(?=[\s\S]*(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b))` / all (35567 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `\bstay(?:s|ed|ing)? (?:of )?(?:the )?(?:execution|eviction|writ|proceedings?)\b[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)[\s\S]{0,1200}\bstay(?:s|ed|ing)? (?:of )?(?:the )?(?:execution|eviction|writ|proceedings?)\b` / code:8\.01-,code:16\.1-,code:55\.1-,rules (2790 units) / 0 hits
- `(?:\bextreme weather\b|\binclement\b|\bwinter\b|\bfreezing\b|\bcold weather\b|\bheat (?:advisory|emergency)\b|\bschool year\b)[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)[\s\S]{0,1200}(?:\bextreme weather\b|\binclement\b|\bwinter\b|\bfreezing\b|\bcold weather\b|\bheat (?:advisory|emergency)\b|\bschool year\b)` / all (35567 units) / 0 hits
- `(?:\bpostpon(?:e|es|ed|ing|ement)\b|\bdelay(?:s|ed|ing)?\b|\bdefer(?:s|red|ring|ral)?\b)[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of eviction\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of eviction\b)[\s\S]{0,1200}(?:\bpostpon(?:e|es|ed|ing|ement)\b|\bdelay(?:s|ed|ing)?\b|\bdefer(?:s|red|ring|ral)?\b)` / code:8\.01-,code:16\.1-,code:55\.1-,rules (2790 units) / 0 hits
- `\bhardships?\b` / code:55\.1-12,code:8\.01-12,code:8\.01-47 (115 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- positive [0] 55.1-1245: passed
- positive [2] 8.01-676.1: recorded as failed
**VA-G-0907** [eviction-hardship-stay]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0906 (positive on term [2] recorded as failed (8.01-676.1 has no eviction word); stay pattern widened (such/any/action/judgment) and Title 44 added to the scope)
- `\bhardships?\b[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)[\s\S]{0,1200}\bhardships?\b` / all (35567 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `\A(?=[\s\S]*\bhardships?\b)(?=[\s\S]*(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b))` / all (35567 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `\bstay(?:s|ed|ing)? (?:of )?(?:the |such |any |an |that )?(?:execution|eviction|writ|proceedings?|action|judgment)\b[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)[\s\S]{0,1200}\bstay(?:s|ed|ing)? (?:of )?(?:the |such |any |an |that )?(?:execution|eviction|writ|proceedings?|action|judgment)\b` / code:8\.01-,code:16\.1-,code:55\.1-,code:44-,rules (3024 units) / 1 hits: 44-209
- `(?:\bextreme weather\b|\binclement\b|\bwinter\b|\bfreezing\b|\bcold weather\b|\bheat (?:advisory|emergency)\b|\bschool year\b)[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bunlawful detainers?\b|\bwrits? of (?:eviction|possession)\b|\bpossession of the (?:premises|dwelling unit)\b)[\s\S]{0,1200}(?:\bextreme weather\b|\binclement\b|\bwinter\b|\bfreezing\b|\bcold weather\b|\bheat (?:advisory|emergency)\b|\bschool year\b)` / all (35567 units) / 0 hits
- `(?:\bpostpon(?:e|es|ed|ing|ement)\b|\bdelay(?:s|ed|ing)?\b|\bdefer(?:s|red|ring|ral)?\b)[\s\S]{0,1200}(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of eviction\b|\bunlawful detainers?\b)|(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of eviction\b|\bunlawful detainers?\b)[\s\S]{0,1200}(?:\bpostpon(?:e|es|ed|ing|ement)\b|\bdelay(?:s|ed|ing)?\b|\bdefer(?:s|red|ring|ral)?\b)` / code:8\.01-,code:16\.1-,code:55\.1-,code:44-,rules (3024 units) / 2 hits: 55.1-1242, 44-209
- `\bhardships?\b` / code:55\.1-12,code:8\.01-12,code:8\.01-47 (115 units) / 3 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3
- `\A(?=[\s\S]*\bstay(?:s|ed|ing)? (?:of )?(?:the |such |any |an |that )?(?:execution|eviction|writ|proceedings?|action|judgment)\b)(?=[\s\S]*(?:\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of eviction\b|\bunlawful detainers?\b))` / code:8\.01-,code:16\.1-,code:55\.1-,code:44-,rules (3024 units) / 1 hits: 44-209
- positive [0] 55.1-1245: passed
- positive [2] 44-209: passed
- positive [4] 44-209: passed
**VA-G-0908** [eviction-service-party]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bunlawful detainers?\b)|(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bunlawful detainers?\b)[\s\S]{0,1200}(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b)` / code (34494 units) / 13 hits: 3.2-6569, 4.1-200, 8.01-103, 8.01-296, 8.01-470, 15.2-5136, 15.2-5431.25, 16.1-69.48:2, 25.1-209, 55.1-1216, 55.1-1244, 55.1-1244#v2 +1
- `\A(?=[\s\S]*(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\brental agreements?\b|\bunlawful detainers?\b))` / code:55\.1-1[2-4],code:8\.01-,code:16\.1- (1727 units) / 8 hits: 55.1-1216, 55.1-1244, 55.1-1244#v2, 8.01-103, 8.01-296, 8.01-470, 16.1-69.48:2, 16.1-107
- `(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address\b)[\s\S]{0,1200}(?:\bprocess\b|\bsummons(?:es)?\b|\bserv(?:e|ed|ice|ing)\b)|(?:\bprocess\b|\bsummons(?:es)?\b|\bserv(?:e|ed|ice|ing)\b)[\s\S]{0,1200}(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address\b)` / all (35567 units) / 11 hits: 2.2-2042, 8.01-513, 16.1-283.3, 32.1-351, 51.1-124.22, 54.1-2901, 63.2-608, 63.2-610, 63.2-801, 63.2-921, 63.2-922
- `\bagents? (?:for|to receive|to accept) (?:the )?(?:service|process|notices?)\b|\bdesignate[sd]? (?:an |such )?agents?\b` / all (35567 units) / 157 hits: 2.2-423, 2.2-2309, 2.2-2310, 2.2-2311.1, 3.2-2408, 3.2-4205, 3.2-4208, 6.2-1379, 6.2-1953, 8.01-262, 8.01-309, 8.01-310 +145 / heading-only: 38.2-1857.9, 46.2-601, 54.1-1113
- `\baddress confidentiality\b` / all (35567 units) / 6 hits: 2.2-515.1, 2.2-515.2, 22.1-4.1, 24.2-418, 24.2-418#v2, 24.2-418#v3
- positive [0] 55.1-1211: recorded as failed
- positive [2] 2.2-515.2: recorded as failed
- positive [4] 2.2-515.2: passed
- positive [1] 55.1-1216: passed
**VA-G-0909** [eviction-service-party]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0908 (positives on terms [0] and [2] recorded as failed: lease added to the tenancy words (with word boundaries) and mail/services added to the process words)
- `(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\bunlawful detainers?\b)|(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\bunlawful detainers?\b)[\s\S]{0,1200}(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b)` / code (34494 units) / 21 hits: 3.2-6569, 4.1-200, 8.01-103, 8.01-296, 8.01-470, 15.2-5136, 15.2-5431.25, 16.1-69.48:2, 22.1-26.1, 25.1-209, 33.2-3100, 36-55.33:2 +9
- `\A(?=[\s\S]*(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\bunlawful detainers?\b))` / code:55\.1-1[2-4],code:8\.01-,code:16\.1- (1727 units) / 11 hits: 55.1-1211, 55.1-1216, 55.1-1244, 55.1-1244#v2, 55.1-1401, 8.01-103, 8.01-296, 8.01-470, 16.1-69.48:2, 16.1-107, 16.1-323
- `(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address\b)[\s\S]{0,1200}(?:\bprocess\b|\bsummons(?:es)?\b|\bserv(?:e|ed|ice|ing)\b|\bservices?\b|\bmail\b)|(?:\bprocess\b|\bsummons(?:es)?\b|\bserv(?:e|ed|ice|ing)\b|\bservices?\b|\bmail\b)[\s\S]{0,1200}(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address\b)` / all (35567 units) / 20 hits: 2.2-515.2, 2.2-2042, 2.2-2747, 8.01-513, 16.1-283.3, 32.1-351, 32.1-351.1, 51.1-124.22, 53.1-133.9, 54.1-2901, 54.1-3408, 63.2-608 +8
- `\bagents? (?:for|to receive|to accept) (?:the )?(?:service|process|notices?)\b|\bdesignate[sd]? (?:an |such )?agents?\b` / all (35567 units) / 157 hits: 2.2-423, 2.2-2309, 2.2-2310, 2.2-2311.1, 3.2-2408, 3.2-4205, 3.2-4208, 6.2-1379, 6.2-1953, 8.01-262, 8.01-309, 8.01-310 +145 / heading-only: 38.2-1857.9, 46.2-601, 54.1-1113
- `\baddress confidentiality\b` / all (35567 units) / 6 hits: 2.2-515.1, 2.2-515.2, 22.1-4.1, 24.2-418, 24.2-418#v2, 24.2-418#v3
- `\A(?=[\s\S]*(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address\b))(?=[\s\S]*(?:\bprocess\b|\bsummons(?:es)?\b|\bunlawful detainers?\b|\btenants?\b))` / all (35567 units) / 5 hits: 2.2-2042, 8.01-513, 32.1-351, 63.2-801, 63.2-922
- positive [0] 55.1-1211: passed
- positive [2] 2.2-515.2: passed
- positive [4] 2.2-515.2: passed
- positive [1] 55.1-1216: passed
**VA-G-0910** [eviction-service-party]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0909 (INFLECTION line on term [5]: process widened to processes/processed/processing (and the same forms in [2]))
- `(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\bunlawful detainers?\b)|(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\bunlawful detainers?\b)[\s\S]{0,1200}(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b)` / code (34494 units) / 21 hits: 3.2-6569, 4.1-200, 8.01-103, 8.01-296, 8.01-470, 15.2-5136, 15.2-5431.25, 16.1-69.48:2, 22.1-26.1, 25.1-209, 33.2-3100, 36-55.33:2 +9
- `\A(?=[\s\S]*(?:\bservice of (?:any )?process\b|\b(?:accept|receive)s? (?:service|process)\b|\bagents? for (?:the )?(?:service|receipt) of\b|\bto be served\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\bunlawful detainers?\b))` / code:55\.1-1[2-4],code:8\.01-,code:16\.1- (1727 units) / 11 hits: 55.1-1211, 55.1-1216, 55.1-1244, 55.1-1244#v2, 55.1-1401, 8.01-103, 8.01-296, 8.01-470, 16.1-69.48:2, 16.1-107, 16.1-323
- `(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address(?:es)?\b)[\s\S]{0,1200}(?:\bprocess(?:es|ed|ing)?\b|\bsummons(?:es)?\b|\bserv(?:e|es|ed|ice|ing)\b|\bservices?\b|\bmail(?:s|ed|ing)?\b)|(?:\bprocess(?:es|ed|ing)?\b|\bsummons(?:es)?\b|\bserv(?:e|es|ed|ice|ing)\b|\bservices?\b|\bmail(?:s|ed|ing)?\b)[\s\S]{0,1200}(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address(?:es)?\b)` / all (35567 units) / 20 hits: 2.2-515.2, 2.2-2042, 2.2-2747, 8.01-513, 16.1-283.3, 32.1-351, 32.1-351.1, 51.1-124.22, 53.1-133.9, 54.1-2901, 54.1-3408, 63.2-608 +8
- `\bagents? (?:for|to receive|to accept) (?:the )?(?:service|process|notices?)\b|\bdesignate[sd]? (?:an |such )?agents?\b` / all (35567 units) / 157 hits: 2.2-423, 2.2-2309, 2.2-2310, 2.2-2311.1, 3.2-2408, 3.2-4205, 3.2-4208, 6.2-1379, 6.2-1953, 8.01-262, 8.01-309, 8.01-310 +145 / heading-only: 38.2-1857.9, 46.2-601, 54.1-1113
- `\baddress confidentiality\b` / all (35567 units) / 6 hits: 2.2-515.1, 2.2-515.2, 22.1-4.1, 24.2-418, 24.2-418#v2, 24.2-418#v3
- `\A(?=[\s\S]*(?:\baddress confidentiality\b|\bprogram participants?\b|\bdesignated address(?:es)?\b))(?=[\s\S]*(?:\bprocess(?:es|ed|ing)?\b|\bsummons(?:es)?\b|\bunlawful detainers?\b|\btenants?\b))` / all (35567 units) / 6 hits: 2.2-2042, 8.01-513, 32.1-351, 54.1-2901, 63.2-801, 63.2-922
- positive [0] 55.1-1211: passed
- positive [2] 2.2-515.2: passed
- positive [4] 2.2-515.2: passed
- positive [1] 55.1-1216: passed
**VA-G-0911** [possession-bond]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bpossession bonds?\b|\bbonds? (?:to|for) (?:the )?(?:deliver(?:y of)?|surrender(?: of)?|yield(?:ing)?|quit) (?:up )?(?:the )?(?:possession|premises)\b` / all (35567 units) / 0 hits
- `\bbonds?\b[\s\S]{0,1200}(?:\bpossession\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b)|(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b)[\s\S]{0,1200}(?:\bpossession\b)[\s\S]{0,1200}\bbonds?\b|(?:\bpossession\b)[\s\S]{0,1200}\bbonds?\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b)` / code:55\.1-,code:8\.01-,code:16\.1- (2471 units) / 4 hits: 8.01-130.7, 8.01-178.4, 16.1-94, 16.1-107
- `\A(?=[\s\S]*\bbonds?\b)(?=[\s\S]*\bdeliver(?:s|ed|ing|y)? (?:up )?(?:of )?(?:the )?possession\b)(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b))` / all (35567 units) / 0 hits
- `\bconfess(?:es|ed|ing|ion)?\b[\s\S]{0,1200}(?:\bpossession\b|\bejectment\b|\bunlawful detainers?\b)|(?:\bpossession\b|\bejectment\b|\bunlawful detainers?\b)[\s\S]{0,1200}\bconfess(?:es|ed|ing|ion)?\b` / all (35567 units) / 3 hits: 8.3A-104, 55.1-1208, R. 3A:11
- `\bend of (?:the )?(?:term|tenancy|lease)\b[\s\S]{0,1200}\bbonds?\b|\bbonds?\b[\s\S]{0,1200}\bend of (?:the )?(?:term|tenancy|lease)\b` / all (35567 units) / 1 hits: 56-551
- positive [1] 8.01-129: recorded as failed
- positive [3] 8.01-431: recorded as failed
**VA-G-0912** [possession-bond]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0911 (both positives recorded as failed (8.01-129 has no tenancy word; 8.01-431 has no possession word); positives moved to sections that contain the terms; rental agreement added to term [3])
- `\bpossession bonds?\b|\bbonds? (?:to|for) (?:the )?(?:deliver(?:y of)?|surrender(?: of)?|yield(?:ing)?|quit) (?:up )?(?:the )?(?:possession|premises)\b` / all (35567 units) / 0 hits
- `\bbonds?\b[\s\S]{0,1200}(?:\bpossession\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b)|(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b)[\s\S]{0,1200}(?:\bpossession\b)[\s\S]{0,1200}\bbonds?\b|(?:\bpossession\b)[\s\S]{0,1200}\bbonds?\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b)` / code:55\.1-,code:8\.01-,code:16\.1- (2471 units) / 4 hits: 8.01-130.7, 8.01-178.4, 16.1-94, 16.1-107
- `\A(?=[\s\S]*\bbonds?\b)(?=[\s\S]*\bdeliver(?:s|ed|ing|y)? (?:up )?(?:of )?(?:the )?possession\b)(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b|\btenancy\b))` / all (35567 units) / 0 hits
- `\bconfess(?:es|ed|ing|ion)?\b[\s\S]{0,1200}(?:\bpossession\b|\bejectment\b|\bunlawful detainers?\b|\brental agreements?\b)|(?:\bpossession\b|\bejectment\b|\bunlawful detainers?\b|\brental agreements?\b)[\s\S]{0,1200}\bconfess(?:es|ed|ing|ion)?\b` / all (35567 units) / 3 hits: 8.3A-104, 55.1-1208, R. 3A:11
- `\bend of (?:the )?(?:term|tenancy|lease)\b[\s\S]{0,1200}\bbonds?\b|\bbonds?\b[\s\S]{0,1200}\bend of (?:the )?(?:term|tenancy|lease)\b` / all (35567 units) / 1 hits: 56-551
- positive [1] 16.1-107: passed
- positive [3] 55.1-1208: passed
**VA-G-0913** [rent-demand-bar]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:shall not|may not|no landlord shall|not be entitled to|is not entitled to|shall be barred from|prohibited from)\b[\s\S]{0,80}\b(?:demand(?:ing)?|collect(?:ing)?|receiv(?:e|ing)|recover(?:ing)?|charg(?:e|ing)|accept(?:ing)?|seek(?:ing)?)\b[\s\S]{0,40}\brent(?:s|al payments?)?\b` / code (34494 units) / 5 hits: 23.1-1116, 55.1-1204, 55.1-1204#v2, 55.1-1251, 55.1-1302
- `\b(?:shall not|may not|no landlord shall|not be entitled to|is not entitled to|shall be barred from|prohibited from)\b[\s\S]{0,80}\b(?:demand(?:ing)?|collect(?:ing)?|receiv(?:e|ing)|recover(?:ing)?|charg(?:e|ing)|accept(?:ing)?|seek(?:ing)?)\b[\s\S]{0,40}\brent(?:s|al payments?)?\b[\s\S]{0,1200}(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)|(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)[\s\S]{0,1200}\b(?:shall not|may not|no landlord shall|not be entitled to|is not entitled to|shall be barred from|prohibited from)\b[\s\S]{0,80}\b(?:demand(?:ing)?|collect(?:ing)?|receiv(?:e|ing)|recover(?:ing)?|charg(?:e|ing)|accept(?:ing)?|seek(?:ing)?)\b[\s\S]{0,40}\brent(?:s|al payments?)?\b` / all (35567 units) / 0 hits
- `\A(?=[\s\S]*\b(?:shall not|may not|no landlord shall|not be entitled to|is not entitled to|shall be barred from|prohibited from)\b[\s\S]{0,80}\b(?:demand(?:ing)?|collect(?:ing)?|receiv(?:e|ing)|recover(?:ing)?|charg(?:e|ing)|accept(?:ing)?|seek(?:ing)?)\b[\s\S]{0,40}\brent(?:s|al payments?)?\b)(?=[\s\S]*(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b))` / all (35567 units) / 0 hits
- `\brent(?:s)? (?:shall |is |be )?(?:abate[sd]?|suspended|excused|withheld)\b|\b(?:abate(?:ment)?|suspen(?:d|sion)|excus(?:e|ed)) (?:of |from )?(?:paying |payment of )?(?:the )?rent\b|\brent (?:abatement|suspension|withholding)\b|\bexcused from paying rent\b` / all (35567 units) / 4 hits: 55.1-1238, 55.1-1239, 55.1-1244, 55.1-1244#v2
- `\bwithhold(?:s|ing)? (?:the |any |all )?rent\b|\brent withholding\b` / all (35567 units) / 0 hits
- positive [3] 55.1-1238: passed
- positive [3] 55.1-1239: passed
**VA-G-0914** [rent-demand-bar]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)[\s\S]{0,1200}\brent(?:s|ed|ing)?\b|\brent(?:s|ed|ing)?\b[\s\S]{0,1200}(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)` / all (35567 units) / 22 hits: 8.01-76, 15.2-5406, 21-168, 21-248, 25.1-417, 28.2-623, 33.2-3805, 36-51, 36-51.1, 36-55.25, 36-97, 55.1-1241 +10
- `\A(?=[\s\S]*(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b))(?=[\s\S]*\brent(?:s|ed|ing)?\b)(?=[\s\S]*(?:\btenants?\b|\blessees?\b))` / all (35567 units) / 17 hits: 15.2-5406, 21-118.4, 25.1-417, 28.2-623, 36-97, 36-105.1:1, 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 55.1-1258, 55.1-1258#v2 +5
- `(?:\bdemand(?:s|ed|ing)?\b|\bcollect(?:s|ed|ing|ion)?\b)[\s\S]{0,1200}\brent(?:s|ed|ing)?\b[\s\S]{0,1200}(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)|(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)[\s\S]{0,1200}(?:\bdemand(?:s|ed|ing)?\b|\bcollect(?:s|ed|ing|ion)?\b)[\s\S]{0,1200}\brent(?:s|ed|ing)?\b|\brent(?:s|ed|ing)?\b[\s\S]{0,1200}(?:\bdemand(?:s|ed|ing)?\b|\bcollect(?:s|ed|ing|ion)?\b)[\s\S]{0,1200}(?:\bcode violations?\b|\bviolations? of (?:the |any |an )?(?:applicable )?(?:building|housing|maintenance|health)\b|\buninhabitable\b|\bunfit for (?:human )?(?:habitation|occupancy)\b|\bcondemn(?:ed|ation)\b|\buntenantable\b|\bsubstandard\b)` / all (35567 units) / 2 hits: 15.2-5406, 33.2-3805
- positive [0] 55.1-1243.2: passed
- positive [1] 55.1-1241: passed
**VA-G-0915** [social-security-defense]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bsocial security\b|\bsupplemental security income\b|\bpublic assistance\b|\bgovernment(?:al)? benefits?\b|\bbenefit (?:payments?|checks?)\b|\bvouchers?\b|\brental assistance\b|\bsubsid(?:y|ies|ized)\b)[\s\S]{0,1200}(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bnonpayment of rent\b|\bwrits? of eviction\b)|(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bnonpayment of rent\b|\bwrits? of eviction\b)[\s\S]{0,1200}(?:\bsocial security\b|\bsupplemental security income\b|\bpublic assistance\b|\bgovernment(?:al)? benefits?\b|\bbenefit (?:payments?|checks?)\b|\bvouchers?\b|\brental assistance\b|\bsubsid(?:y|ies|ized)\b)` / all (35567 units) / 3 hits: 55.1-1202#v2, 55.1-1226, 55.1-1258#v2
- `\A(?=[\s\S]*(?:\bsocial security\b|\bsupplemental security income\b|\bpublic assistance\b|\bgovernment(?:al)? benefits?\b|\bbenefit (?:payments?|checks?)\b|\bvouchers?\b|\brental assistance\b|\bsubsid(?:y|ies|ized)\b))(?=[\s\S]*(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bnonpayment of rent\b|\bwrits? of eviction\b))` / all (35567 units) / 3 hits: 55.1-1202#v2, 55.1-1226, 55.1-1258#v2
- `(?:\blate\b|\bdelay(?:s|ed)?\b|\bdelinquen(?:t|cy)\b|\bfail(?:s|ed|ure)? to (?:pay|mail|deliver|issue|make)\b)[\s\S]{0,1200}(?:\bsocial security\b|\bsupplemental security income\b|\bpublic assistance\b|\bgovernment(?:al)? benefits?\b|\bbenefit (?:payments?|checks?)\b|\bvouchers?\b|\brental assistance\b|\bsubsid(?:y|ies|ized)\b)|(?:\bsocial security\b|\bsupplemental security income\b|\bpublic assistance\b|\bgovernment(?:al)? benefits?\b|\bbenefit (?:payments?|checks?)\b|\bvouchers?\b|\brental assistance\b|\bsubsid(?:y|ies|ized)\b)[\s\S]{0,1200}(?:\blate\b|\bdelay(?:s|ed)?\b|\bdelinquen(?:t|cy)\b|\bfail(?:s|ed|ure)? to (?:pay|mail|deliver|issue|make)\b)` / code:55\.1-1[2-4],code:8\.01-,code:16\.1-,code:36-,code:63\.2- (2576 units) / 10 hits: 55.1-1202#v2, 55.1-1226, 8.01-413, 8.01-617, 16.1-224, 16.1-260, 16.1-260#v2, 63.2-323, 63.2-520, 63.2-1937
- `\bsocial security\b` / code:55\.1-12,code:8\.01-12,code:16\.1- (559 units) / 5 hits: 55.1-1203, 55.1-1203#v2, 55.1-1226, 16.1-69.54:1, 16.1-224
- `\bcheck (?:is |was )?(?:late|delayed)\b|\blate (?:check|payment) from (?:a|the|any) (?:government|agency)\b|\bagency (?:fail(?:s|ed|ure)?|delay(?:s|ed)?)\b` / all (35567 units) / 5 hits: 2.2-3006, 2.2-4026, 9.1-1502, 58.1-528, 60.2-114.01
- positive [0] 55.1-1202#v2: passed
- positive [2] 55.1-1202#v2: passed
**VA-G-0916** [limitation-of-actions]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bpart(?:ial)? payments?\b|\bpayments? on account\b|\bpart payment\b)[\s\S]{0,1200}(?:\bstatutes? of limitations?\b|\blimitations? periods?\b|\bperiods? of limitations?\b|\btoll(?:s|ed|ing)?\b|\brevived?\b)|(?:\bstatutes? of limitations?\b|\blimitations? periods?\b|\bperiods? of limitations?\b|\btoll(?:s|ed|ing)?\b|\brevived?\b)[\s\S]{0,1200}(?:\bpart(?:ial)? payments?\b|\bpayments? on account\b|\bpart payment\b)` / code (34494 units) / 3 hits: 19.2-340#v2, 19.2-341#v2, 20-88.72
- `\A(?=[\s\S]*(?:\bpart(?:ial)? payments?\b|\bpayments? on account\b|\bpart payment\b))(?=[\s\S]*(?:\bstatutes? of limitations?\b|\blimitations? periods?\b|\bperiods? of limitations?\b|\btoll(?:s|ed|ing)?\b|\brevived?\b))` / code (34494 units) / 3 hits: 19.2-340#v2, 19.2-341#v2, 20-88.72
- `(?:\bpart(?:ial)? payments?\b|\bpayments? on account\b|\bpart payment\b)` / code:8\.01-2[2-5] (104 units) / 0 hits
- `\backnowledg(?:e|es|ed|ing|ment|ments)\b[\s\S]{0,1200}(?:\bpromise\b|\bpayment\b)|(?:\bpromise\b|\bpayment\b)[\s\S]{0,1200}\backnowledg(?:e|es|ed|ing|ment|ments)\b` / code:8\.01-2[2-5] (104 units) / 2 hits: 8.01-229, 8.01-232
- positive [0] 19.2-341#v2: passed
- positive [3] 8.01-229: passed
**VA-G-0917** [limitation-of-actions]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:one|two|three|four|five|six|seven|ten|\d+)[- ]years?\b` / code:55\.1-12 (91 units) / 5 hits: 55.1-121, 55.1-124, 55.1-126, 55.1-1207, 55.1-1226 / heading-only: 55.1-1245#v2, 55.1-1245#v3
- `(?:\bstatutes? of limitations?\b|\blimitations? periods?\b|\bperiods? of limitations?\b|\bshall be (?:brought|commenced|filed) within\b|\bbarred\b)` / code:55\.1-12 (91 units) / 4 hits: 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1246
- `\b(?:one|two|three|four|five|six|seven|ten|\d+)[- ]years?\b[\s\S]{0,1200}(?:\bactions?\b|\bclaims?\b|\bsuits?\b)|(?:\bactions?\b|\bclaims?\b|\bsuits?\b)[\s\S]{0,1200}\b(?:one|two|three|four|five|six|seven|ten|\d+)[- ]years?\b` / code:55\.1-12,code:8\.01-12,code:8\.01-13 (128 units) / 2 hits: 55.1-1226, 8.01-130.4
- positive [0] 55.1-1226: passed
**VA-G-0918** [informal-dispute-resolution]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\binformal(?:ly)? (?:resol\w*|settle\w*|dispute)|\bmediat(?:e|es|ed|ing|ion|or|ors)\b|\bmeet and confer\b|\bgood[- ]faith (?:efforts?|attempts?) to resolve\b|\bconciliat\w*|\breconciliatory\b)[\s\S]{0,1200}(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\blessees?\b)|(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\blessees?\b)[\s\S]{0,1200}(?:\binformal(?:ly)? (?:resol\w*|settle\w*|dispute)|\bmediat(?:e|es|ed|ing|ion|or|ors)\b|\bmeet and confer\b|\bgood[- ]faith (?:efforts?|attempts?) to resolve\b|\bconciliat\w*|\breconciliatory\b)` / code (34494 units) / 3 hits: 28.2-618, 36-96.18, 55.1-1201
- `\A(?=[\s\S]*(?:\binformal(?:ly)? (?:resol\w*|settle\w*|dispute)|\bmediat(?:e|es|ed|ing|ion|or|ors)\b|\bmeet and confer\b|\bgood[- ]faith (?:efforts?|attempts?) to resolve\b|\bconciliat\w*|\breconciliatory\b))(?=[\s\S]*(?:\btenants?\b|\blandlords?\b|\brental agreements?\b|\blessees?\b))` / code:55\.1-1[2-6],code:8\.01- (1287 units) / 1 hits: 55.1-1201
- `\b(?:before|prior to) (?:filing|bringing|commencing|instituting) (?:a|an|any|such) (?:suit|action|lawsuit|proceeding)\b` / code:55\.1-1[2-6],code:8\.01-12,code:8\.01-13 (206 units) / 0 hits
- positive [0] 55.1-1201: passed
**VA-G-0919** [tenant-bankruptcy]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bbankrupt(?:cy|cies|s|ed)?\b[\s\S]{0,1200}(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of (?:eviction|possession)\b|\bpossession\b|\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b)|(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of (?:eviction|possession)\b|\bpossession\b|\btenants?\b|\blessees?\b|\bleases?\b|\brental agreements?\b)[\s\S]{0,1200}\bbankrupt(?:cy|cies|s|ed)?\b` / all (35567 units) / 15 hits: 6.2-2401, 6.2-2402, 8.1A-201, 8.5A-102, 8.9A-102, 13.1-662, 13.1-665, 29.1-733.2, 29.1-733.20, 32.1-164.1:1, 46.2-633, 54.1-2103 +3
- `\A(?=[\s\S]*\bbankrupt(?:cy|cies|s|ed)?\b)(?=[\s\S]*(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bwrits? of eviction\b|\btenants?\b))` / all (35567 units) / 3 hits: 13.1-662, 13.1-665, 54.1-2103
- `\bbankrupt(?:cy|cies|s|ed)?\b` / code:55\.1-1[2-6],code:8\.01-12,code:8\.01-13,code:8\.01-4[67],code:16\.1- (725 units) / 1 hits: 16.1-110
- `\bautomatic stay\b|\bstay of (?:the )?(?:bankruptcy|federal) court\b|\bnotice of (?:the )?filing (?:of|for) (?:a )?(?:bankruptcy|petition)\b` / all (35567 units) / 6 hits: 16.1-355, 22.1-288.2, 25.1-212, 25.1-223, 45.2-1609, 45.2-1625 / heading-only: 16.1-305.2, 25.1-209
- positive [0] 55.1-2135: passed
- positive [3] 45.2-1609: passed
**VA-G-0920** [foreclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\brescind(?:s|ed|ing)?\b|\brescission\b|\bcancel(?:s|ed|led|ing|ling|lation)?\b)[\s\S]{0,1200}\bforeclos(?:e|es|ed|ing|ure|ures)\b|\bforeclos(?:e|es|ed|ing|ure|ures)\b[\s\S]{0,1200}(?:\brescind(?:s|ed|ing)?\b|\brescission\b|\bcancel(?:s|ed|led|ing|ling|lation)?\b)` / code (34494 units) / 6 hits: 3.2-603, 6.2-1524, 38.2-2114, 38.2-2114#v2, 55.1-2153, 55.1-2236
- `\A(?=[\s\S]*(?:\brescind(?:s|ed|ing)?\b|\brescission\b|\bcancel(?:s|ed|led|ing|ling|lation)?\b))(?=[\s\S]*\bforeclos(?:e|es|ed|ing|ure|ures)\b)(?=[\s\S]*(?:\btenants?\b|\bleases?\b|\brental agreements?\b|\brepurchase\b|\bleaseback\b))` / code (34494 units) / 2 hits: 3.2-603, 55.1-1900
- `\brents?\b[\s\S]{0,1200}\bforeclos(?:e|es|ed|ing|ure|ures)\b|\bforeclos(?:e|es|ed|ing|ure|ures)\b[\s\S]{0,1200}\brents?\b` / code:59\.1-,code:55\.1-,code:6\.2-,code:54\.1-21 (2827 units) / 4 hits: 59.1-200.1, 55.1-1244, 55.1-1244#v2, 54.1-2108.1
- `\bequity skimm\w*|\bsale[- ]and[- ]leaseback\b|\bsale[- ]leaseback\b|\blease-?back\b|\bforeclosure rescue\b` / all (35567 units) / 5 hits: 15.2-1816, 56-231.24, 56-575.8, 58.1-609.10, 62.1-199 / heading-only: 59.1-200.1
- positive [0] 55.1-2236: passed
- positive [2] 59.1-200.1: passed
- positive [3] 56-231.24: passed
**VA-G-0921** [foreclosure-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bforeclos(?:e|es|ed|ing|ure|ures)\b|\bmortgage default\b|\bdeed of trust\b|\btrustee(?:\x27s)? sale\b)[\s\S]{0,1200}(?:\bprospective tenants?\b|\bapplicants? for tenancy\b|\btenants?\b|\blessees?\b)|(?:\bprospective tenants?\b|\bapplicants? for tenancy\b|\btenants?\b|\blessees?\b)[\s\S]{0,1200}(?:\bforeclos(?:e|es|ed|ing|ure|ures)\b|\bmortgage default\b|\bdeed of trust\b|\btrustee(?:\x27s)? sale\b)` / all (35567 units) / 34 hits: 6.2-1100, 6.2-1700, 8.01-126, 8.01-126#v2, 15.2-852, 15.2-2287.1, 28.2-634, 33.2-1232, 36-55.31, 36-176, 38.2-1434, 44-209 +22
- `\A(?=[\s\S]*(?:\bforeclos(?:e|es|ed|ing|ure|ures)\b|\bmortgage default\b|\bdeed of trust\b|\btrustee(?:\x27s)? sale\b))(?=[\s\S]*(?:\bprospective tenants?\b|\bapplicants? for tenancy\b|\btenants?\b|\blessees?\b))(?=[\s\S]*(?:\bdisclos(?:e|es|ed|ing|ure|ures)\b|\bnotif(?:y|ies|ied|ication)\b|\bnotice\b))` / all (35567 units) / 23 hits: 6.2-1100, 8.01-126, 8.01-126#v2, 15.2-852, 15.2-958.3, 15.2-2287.1, 33.2-1232, 36-55.31, 36-176, 44-209, 54.1-2103, 54.1-2108.1 +11
- `\bprospective tenants?\b` / code (34494 units) / 17 hits: 36-7.2, 54.1-2103, 54.1-2108.1, 54.1-2133, 54.1-2134, 55.1-1200, 55.1-1203, 55.1-1203#v2, 55.1-1204, 55.1-1204#v2, 55.1-1209, 55.1-1209#v2 +5
- `\bunder foreclosure\b|\bin foreclosure\b|\bpending foreclosure\b|\bforeclosure (?:status|proceedings?|complaint|notice)\b` / all (35567 units) / 7 hits: 28.2-634, 36-55.36, 44-209, 55.1-1832, 55.1-1935, 55.1-2300, 63.2-1934 / heading-only: 63.2-1935
- positive [0] 55.1-1237: passed
- positive [2] 55.1-1216: passed
**VA-G-0922** [conversion-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bconver(?:t|ts|ted|ting|sion|sions)\b[\s\S]{0,1200}(?:\bhotels?\b|\bmotels?\b|\btransient\b|\bshort-term rentals?\b|\bapartment hotels?\b)|(?:\bhotels?\b|\bmotels?\b|\btransient\b|\bshort-term rentals?\b|\bapartment hotels?\b)[\s\S]{0,1200}\bconver(?:t|ts|ted|ting|sion|sions)\b` / code (34494 units) / 4 hits: 32.1-203, 55.1-1216, 55.1-1410, 55.1-2200
- `\A(?=[\s\S]*\bconver(?:t|ts|ted|ting|sion|sions)\b)(?=[\s\S]*(?:\bhotels?\b|\bmotels?\b|\btransient\b|\bshort-term rentals?\b|\bapartment hotels?\b))(?=[\s\S]*(?:\bprohibit(?:s|ed|ing)?\b|\bunlawful\b|\bshall not\b|\bmay not\b|\bmoratori(?:um|a)\b))(?=[\s\S]*(?:\btenants?\b|\bresidential\b|\bdwelling units?\b|\bapartments?\b))` / code (34494 units) / 2 hits: 55.1-1410, 58.1-602
- `\bmoratori(?:um|a|ums)\b[\s\S]{0,1200}(?:\bcondominiums?\b|\bcooperatives?\b|\bconver(?:t|ts|ted|ting|sion|sions)\b)|(?:\bcondominiums?\b|\bcooperatives?\b|\bconver(?:t|ts|ted|ting|sion|sions)\b)[\s\S]{0,1200}\bmoratori(?:um|a|ums)\b` / code (34494 units) / 0 hits
- `\bchange (?:in|of) (?:the )?use\b[\s\S]{0,1200}(?:\btenants?\b|\bresidential\b|\bdwelling units?\b|\bapartments?\b)|(?:\btenants?\b|\bresidential\b|\bdwelling units?\b|\bapartments?\b)[\s\S]{0,1200}\bchange (?:in|of) (?:the )?use\b` / code:55\.1-,code:15\.2-,code:36- (3574 units) / 4 hits: 55.1-703#v2, 55.1-1308, 55.1-1410, 15.2-907.2
- positive [0] 55.1-1410: passed
- positive [1] 55.1-1216: recorded as failed
- positive [3] 55.1-1410: passed
**VA-G-0923** [conversion-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0922 (positive on term [1] recorded as failed (55.1-1216 has no prohibition word); positive moved to 55.1-1410)
- `\bconver(?:t|ts|ted|ting|sion|sions)\b[\s\S]{0,1200}(?:\bhotels?\b|\bmotels?\b|\btransient\b|\bshort-term rentals?\b|\bapartment hotels?\b)|(?:\bhotels?\b|\bmotels?\b|\btransient\b|\bshort-term rentals?\b|\bapartment hotels?\b)[\s\S]{0,1200}\bconver(?:t|ts|ted|ting|sion|sions)\b` / code (34494 units) / 4 hits: 32.1-203, 55.1-1216, 55.1-1410, 55.1-2200
- `\A(?=[\s\S]*\bconver(?:t|ts|ted|ting|sion|sions)\b)(?=[\s\S]*(?:\bhotels?\b|\bmotels?\b|\btransient\b|\bshort-term rentals?\b|\bapartment hotels?\b))(?=[\s\S]*(?:\bprohibit(?:s|ed|ing)?\b|\bunlawful\b|\bshall not\b|\bmay not\b|\bmoratori(?:um|a)\b))(?=[\s\S]*(?:\btenants?\b|\bresidential\b|\bdwelling units?\b|\bapartments?\b))` / code (34494 units) / 2 hits: 55.1-1410, 58.1-602
- `\bmoratori(?:um|a|ums)\b[\s\S]{0,1200}(?:\bcondominiums?\b|\bcooperatives?\b|\bconver(?:t|ts|ted|ting|sion|sions)\b)|(?:\bcondominiums?\b|\bcooperatives?\b|\bconver(?:t|ts|ted|ting|sion|sions)\b)[\s\S]{0,1200}\bmoratori(?:um|a|ums)\b` / code (34494 units) / 0 hits
- `\bchange (?:in|of) (?:the )?use\b[\s\S]{0,1200}(?:\btenants?\b|\bresidential\b|\bdwelling units?\b|\bapartments?\b)|(?:\btenants?\b|\bresidential\b|\bdwelling units?\b|\bapartments?\b)[\s\S]{0,1200}\bchange (?:in|of) (?:the )?use\b` / code:55\.1-,code:15\.2-,code:36- (3574 units) / 4 hits: 55.1-703#v2, 55.1-1308, 55.1-1410, 15.2-907.2
- positive [0] 55.1-1410: passed
- positive [1] 55.1-1410: passed
- positive [3] 55.1-1410: passed
**VA-G-0924** [eminent-domain]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\beminent domain\b|\btak(?:e|en|ing) for public uses?\b|\bjust compensation\b|\bcondemn(?:s|ed|ing|ation|ations|or|ors)?\b|\bpublic uses?\b)[\s\S]{0,1200}(?:\brent(?:s|ed|ing)?\b|\brental agreements?\b|\bleases?\b|\btenants?\b|\blessees?\b)|(?:\brent(?:s|ed|ing)?\b|\brental agreements?\b|\bleases?\b|\btenants?\b|\blessees?\b)[\s\S]{0,1200}(?:\beminent domain\b|\btak(?:e|en|ing) for public uses?\b|\bjust compensation\b|\bcondemn(?:s|ed|ing|ation|ations|or|ors)?\b|\bpublic uses?\b)` / code:55\.1-1[2-6],code:25\.1-,code:8\.01- (1398 units) / 10 hits: 55.1-1241, 55.1-1243.2, 55.1-1244, 55.1-1244#v2, 25.1-209, 25.1-234, 25.1-306, 25.1-417, 25.1-421, 8.01-76
- `\A(?=[\s\S]*(?:\beminent domain\b|\bpublic uses?\b|\bjust compensation\b))(?=[\s\S]*(?:\brent(?:s|ed|ing)?\b|\brental agreements?\b|\bleases?\b|\btenants?\b|\blessees?\b))` / code (34494 units) / 83 hits: 2.2-2263, 2.2-2276, 2.2-2340, 5.1-1, 5.1-1#v2, 5.1-2.2:1, 5.1-2.5, 5.1-40, 5.1-160, 10.1-114, 10.1-201, 10.1-1432 +71
- `\beminent domain\b|\bjust compensation\b|\bpublic uses?\b` / code:55\.1-1[2-6] (169 units) / 0 hits
- `\b(?:abate|apportion|reduc(?:e|ed|tion))\w*\b[\s\S]{0,300}\brent\b[\s\S]{0,1200}(?:\beminent domain\b|\btak(?:en|ing)\b)|(?:\beminent domain\b|\btak(?:en|ing)\b)[\s\S]{0,1200}\b(?:abate|apportion|reduc(?:e|ed|tion))\w*\b[\s\S]{0,300}\brent\b` / code:55\.1-,code:25\.1- (1008 units) / 1 hits: 55.1-2164
- positive [0] 25.1-234: passed
- positive [1] 25.1-417: passed
**VA-G-0925** [construction-liens]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bnon-?responsib\w*|\bnot (?:be )?(?:responsible|liable)\b|\bdisclaim\w*)[\s\S]{0,1200}\bliens?\b|\bliens?\b[\s\S]{0,1200}(?:\bnon-?responsib\w*|\bnot (?:be )?(?:responsible|liable)\b|\bdisclaim\w*)` / code:43-,code:55\.1- (964 units) / 3 hits: 55.1-202, 55.1-1958, 55.1-2227
- `\bliens?\b[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\bleases?\b|\bleaseholds?\b)|(?:\btenants?\b|\blessees?\b|\bleases?\b|\bleaseholds?\b)[\s\S]{0,1200}\bliens?\b` / code:43- (67 units) / 2 hits: 43-20, 43-29
- `\A(?=[\s\S]*\bmechanics?\x27? liens?\b)(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\bleases?\b|\bleaseholds?\b))` / code (34494 units) / 2 hits: 17.1-229, 55.1-2300
- `\bnotice of non-?responsibility\b|\bnon-?responsibility\b` / all (35567 units) / 2 hits: 2.2-4359, 2.2-4365
- positive [0] 55.1-1958: passed
- positive [1] 43-20: passed
- positive [1] 43-29: passed
**VA-G-0926** [adverse-proceeding-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\btenants?\b|\blessees?\b)[\s\S]{0,1200}(?:\bejectment\b|\badverse claims?\b|\bparamount title\b|\btax sales?\b|\bclaims? (?:to|of) (?:the )?title\b|\bstrangers?\b)|(?:\bejectment\b|\badverse claims?\b|\bparamount title\b|\btax sales?\b|\bclaims? (?:to|of) (?:the )?title\b|\bstrangers?\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b)` / all (35567 units) / 6 hits: 8.01-470, 55.1-1255, 55.1-1416, 55.1-1419, 55.1-1609, 55.1-2135
- `\A(?=[\s\S]*(?:\btenants?\b|\blessees?\b))(?=[\s\S]*(?:\bproceedings?\b|\bejectment\b|\btax sales?\b|\bforeclos\w*))(?=[\s\S]*(?:\bnotif(?:y|ies|ied|ication)\b|\binform(?:s|ed|ing)?\b|\bforward(?:s|ed|ing)?\b))(?=[\s\S]*(?:\blandlords?\b|\blessors?\b))` / code:55\.1-,code:8\.01-,code:58\.1- (3847 units) / 9 hits: 55.1-1200, 55.1-1237, 55.1-1244, 55.1-1244#v2, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1250, 55.1-1314
- `\btenants? shall (?:promptly |immediately |forthwith )?(?:notify|inform|give (?:written )?notice to|deliver to|forward to) (?:the |his |its )?(?:landlord|lessor|owner)\b` / all (35567 units) / 1 hits: 55.1-1310
- `\battornment\b` / all (35567 units) / 2 hits: 55.1-1608, 55.1-1609
- positive [0] 55.1-1609: passed
- positive [1] 55.1-1237: passed
- positive [3] 55.1-1608: passed
**VA-G-0927** [association-obligations-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bdeclarations?\b|\bbylaws\b|\bcondominium instruments\b|\bgoverning documents\b|\bassociation documents\b|\bresale certificates?\b|\bdisclosure packets?\b|\bassociation\x27s rules\b)[\s\S]{0,1200}(?:\btenants?\b|\blessees?\b|\brental agreements?\b)|(?:\btenants?\b|\blessees?\b|\brental agreements?\b)[\s\S]{0,1200}(?:\bdeclarations?\b|\bbylaws\b|\bcondominium instruments\b|\bgoverning documents\b|\bassociation documents\b|\bresale certificates?\b|\bdisclosure packets?\b|\bassociation\x27s rules\b)` / code:55\.1-,code:54\.1-23 (956 units) / 44 hits: 55.1-358, 55.1-1200, 55.1-1244, 55.1-1244#v2, 55.1-1419, 55.1-1806, 55.1-1819, 55.1-1901, 55.1-1910, 55.1-1916, 55.1-1926, 55.1-1937 +32
- `\A(?=[\s\S]*(?:\bdeclarations?\b|\bbylaws\b|\bcondominium instruments\b|\bgoverning documents\b|\bassociation documents\b|\bresale certificates?\b|\bdisclosure packets?\b|\bassociation\x27s rules\b))(?=[\s\S]*(?:\btenants?\b|\blessees?\b|\brental agreements?\b))(?=[\s\S]*(?:\bdisclos(?:e|es|ed|ing|ure)\b|\bcop(?:y|ies)\b|\bprovid(?:e|es|ed|ing)\b|\bdeliver(?:s|ed|ing|y)?\b|\bfurnish(?:es|ed|ing)?\b))` / code (34494 units) / 60 hits: 2.2-2204, 2.2-2237, 2.2-2263, 2.2-2340, 2.2-2355, 4.1-103, 4.1-604, 6.2-1302, 13.1-662, 15.2-983, 15.2-4905, 15.2-5114 +48
- `\backnowledg(?:e|es|ed|ment)\b[\s\S]{0,1200}\brules\b[\s\S]{0,1200}\btenants?\b|\btenants?\b[\s\S]{0,1200}\backnowledg(?:e|es|ed|ment)\b[\s\S]{0,1200}\brules\b` / code:55\.1- (897 units) / 2 hits: 55.1-1806, 55.1-1973
- `\b(?:homeowners?|property owners|condominium|unit owners)\x27? associations?\b[\s\S]{0,1200}\b(?:prospective tenants?|applicants?)\b|\b(?:prospective tenants?|applicants?)\b[\s\S]{0,1200}\b(?:homeowners?|property owners|condominium|unit owners)\x27? associations?\b` / all (35567 units) / 8 hits: 15.2-2206, 15.2-2288.7, 15.2-2288.7#v2, 15.2-2297, 15.2-2298, 15.2-2303, 54.1-2349, 55.1-1905
- positive [0] 55.1-1806: passed
- positive [1] 55.1-1973: passed
- positive [2] 55.1-1806: passed
**VA-G-0928** [hoa]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bassociations?\b)[\s\S]{0,1200}\brents?\b|\brents?\b[\s\S]{0,1200}(?:\bassociations?\b)` / code:55\.1-1[89],code:55\.1-2[0-3] (320 units) / 4 hits: 55.1-1982, 55.1-2100, 55.1-2244, 55.1-2310
- `\A(?=[\s\S]*(?:\bassociations?\b))(?=[\s\S]*\brents?\b)(?=[\s\S]*(?:\btenants?\b|\boccupants?\b))` / code (34494 units) / 17 hits: 4.1-100, 4.1-100#v2, 4.1-206.3, 13.1-330, 33.2-2900, 36-55.26, 36-96.1:1, 36-96.2, 36-96.2#v2, 36-176, 54.1-2103, 54.1-2130 +5
- `\bcollect(?:s|ed|ing)? (?:the |any |such )?rents?\b|\bpay(?:s|ing)? (?:the |any )?rents? (?:directly )?to (?:the |such )?association\b|\brent(?:s)? (?:due|owed|payable) (?:to )?(?:the )?(?:unit )?owner\b[\s\S]{0,1200}\bassociation\b` / code (34494 units) / 28 hits: 2.2-2340, 3.2-3116, 5.1-30.5, 8.01-126, 8.01-126#v2, 10.1-603.19, 10.1-603.33, 10.1-1237, 15.2-1133, 15.2-1816, 15.2-2424, 15.2-2435 +16
- `\b(?:unit|lot) owner\x27?s? tenants?\b|\btenants? of (?:any|the|a) (?:lot|unit) owners?\b` / code (34494 units) / 2 hits: 55.1-1806, 55.1-1973
- positive [0] 55.1-1982: passed
- positive [3] 55.1-1806: passed
**VA-G-0929** [hoa]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bamend(?:s|ed|ing|ment|ments)?\b[\s\S]{0,1200}(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b)|(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b)[\s\S]{0,1200}\bamend(?:s|ed|ing|ment|ments)?\b` / code:55\.1-1[89],code:55\.1-2[0-3] (320 units) / 0 hits
- `\A(?=[\s\S]*\bamend(?:s|ed|ing|ment|ments)?\b)(?=[\s\S]*(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b))(?=[\s\S]*(?:\bconsent(?:s|ed)?\b|\bgrandfather\w*|\bexisting (?:lot |unit )?owners?\b|\bprior to (?:the )?(?:adoption|recordation|effective date)\b))` / code:55\.1-1[89],code:55\.1-2[0-3] (320 units) / 0 hits
- `\bgrandfather\w*` / code:55\.1- (897 units) / 0 hits
- positive [0] 55.1-2310: recorded as failed
**VA-G-0930** [hoa]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0929 (positive on term [0] recorded as failed (55.1-2310 has no amendment word near its rental item); bare rental-restriction term added to carry real positives)
- `\bamend(?:s|ed|ing|ment|ments)?\b[\s\S]{0,1200}(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b)|(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b)[\s\S]{0,1200}\bamend(?:s|ed|ing|ment|ments)?\b` / code:55\.1-1[89],code:55\.1-2[0-3] (320 units) / 0 hits
- `\A(?=[\s\S]*\bamend(?:s|ed|ing|ment|ments)?\b)(?=[\s\S]*(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b))(?=[\s\S]*(?:\bconsent(?:s|ed)?\b|\bgrandfather\w*|\bexisting (?:lot |unit )?owners?\b|\bprior to (?:the )?(?:adoption|recordation|effective date)\b))` / code:55\.1-1[89],code:55\.1-2[0-3] (320 units) / 0 hits
- `\bgrandfather\w*` / code:55\.1- (897 units) / 0 hits
- `(?:\brental of (?:a |any |the )?(?:lots?|units?)\b|\brent(?:al)? restrictions?\b|\bleasing restrictions?\b|\bability to rent\b|\bcondition or prohibit the rental\b)` / code:55\.1-1[89],code:55\.1-2[0-3] (320 units) / 3 hits: 55.1-1806, 55.1-1973, 55.1-2310
- positive [3] 55.1-1806: passed
- positive [3] 55.1-2310: passed
**VA-G-0931** [entity-landlord-court-representation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bcorporations?\b|\blimited liability compan(?:y|ies)\b|\bbusiness entit(?:y|ies)\b|\bpartnerships?\b|\bbusiness trusts?\b)[\s\S]{0,1200}(?:\bwithout (?:the intervention of )?(?:an )?attorney\b|\bnot represented by (?:an )?(?:attorney|counsel)\b|\bnon-?lawyers?\b|\bwithout counsel\b|\brepresented by an? (?:owner|officer|member|employee)\b|\bpro se representation\b)|(?:\bwithout (?:the intervention of )?(?:an )?attorney\b|\bnot represented by (?:an )?(?:attorney|counsel)\b|\bnon-?lawyers?\b|\bwithout counsel\b|\brepresented by an? (?:owner|officer|member|employee)\b|\bpro se representation\b)[\s\S]{0,1200}(?:\bcorporations?\b|\blimited liability compan(?:y|ies)\b|\bbusiness entit(?:y|ies)\b|\bpartnerships?\b|\bbusiness trusts?\b)` / code (34494 units) / 5 hits: 16.1-81.1, 16.1-88.03, 16.1-122.4, 55.1-1257, 55.1-1417
- `\A(?=[\s\S]*(?:\bcorporations?\b|\blimited liability compan(?:y|ies)\b|\bbusiness entit(?:y|ies)\b|\bpartnerships?\b|\bbusiness trusts?\b))(?=[\s\S]*(?:\bwithout (?:the intervention of )?(?:an )?attorney\b|\bnot represented by (?:an )?(?:attorney|counsel)\b|\bnon-?lawyers?\b|\bwithout counsel\b|\brepresented by an? (?:owner|officer|member|employee)\b|\bpro se representation\b))` / code (34494 units) / 5 hits: 16.1-81.1, 16.1-88.03, 16.1-122.4, 55.1-1257, 55.1-1417
- `(?:\bwithout (?:the intervention of )?(?:an )?attorney\b|\bnot represented by (?:an )?(?:attorney|counsel)\b|\bnon-?lawyers?\b|\bwithout counsel\b|\brepresented by an? (?:owner|officer|member|employee)\b|\bpro se representation\b)|\bbona fide employee\b` / rules (319 units) / 18 hits: R. 1:5, R. 1:27, R. 3:23, R. 3A:11, R. 3A:25, R. 4:1, R. 5:1, R. 5:1A, R. 5:17, R. 5:17A, R. 5A:1, R. 5A:1A +6
- `\bcircuit court\b[\s\S]{0,1200}(?:\bwithout (?:the intervention of )?(?:an )?attorney\b|\bnot represented by (?:an )?(?:attorney|counsel)\b|\bnon-?lawyers?\b|\bwithout counsel\b|\brepresented by an? (?:owner|officer|member|employee)\b|\bpro se representation\b)|(?:\bwithout (?:the intervention of )?(?:an )?attorney\b|\bnot represented by (?:an )?(?:attorney|counsel)\b|\bnon-?lawyers?\b|\bwithout counsel\b|\brepresented by an? (?:owner|officer|member|employee)\b|\bpro se representation\b)[\s\S]{0,1200}\bcircuit court\b` / code (34494 units) / 10 hits: 8.01-412.10, 8.01-428, 16.1-278.2, 19.2-165, 32.1-48.04, 37.2-814, 37.2-814#v2, 37.2-821, 53.1-40.2, 53.1-40.4
- positive [0] 16.1-88.03: passed
- positive [0] 16.1-122.4: passed
- positive [2] R. 7B:7: passed
**VA-G-0932** [law-enforcement-cooperation]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bcrime[- ]free\b` / all (35567 units) / 0 hits
- `\A(?=[\s\S]*(?:\blaw-enforcement\b|\blaw enforcement\b|\bpolice\b|\bsheriffs?\b|\bchild protective services\b))(?=[\s\S]*(?:\blandlords?\b|\bowners? of (?:any |the )?(?:rental|residential|real) (?:property|premises|dwelling)\b|\bproperty managers?\b|\bmanaging agents?\b))(?=[\s\S]*\bshall (?:immediately |promptly |forthwith )?(?:furnish|provide|permit|allow|give|disclose|report|notify|cooperate)\b)` / code (34494 units) / 8 hits: 15.2-907, 18.2-340.18, 19.2-68, 46.2-1231, 55.1-1209#v2, 55.1-1250, 55.1-1255, 55.1-1416
- `(?:\blaw-enforcement\b|\blaw enforcement\b|\bpolice\b|\bsheriffs?\b|\bchild protective services\b)[\s\S]{0,1200}(?:\blandlords?\b|\bowners? of (?:any |the )?(?:rental|residential|real) (?:property|premises|dwelling)\b|\bproperty managers?\b|\bmanaging agents?\b)|(?:\blandlords?\b|\bowners? of (?:any |the )?(?:rental|residential|real) (?:property|premises|dwelling)\b|\bproperty managers?\b|\bmanaging agents?\b)[\s\S]{0,1200}(?:\blaw-enforcement\b|\blaw enforcement\b|\bpolice\b|\bsheriffs?\b|\bchild protective services\b)` / code:55\.1-1[2-4],code:15\.2-9,code:18\.2-,code:19\.2-,code:63\.2- (2607 units) / 15 hits: 55.1-1203, 55.1-1203#v2, 55.1-1209, 55.1-1209#v2, 55.1-1236, 55.1-1247, 55.1-1250, 55.1-1251, 55.1-1255, 55.1-1416, 15.2-907, 19.2-62 +3
- `\b(?:any|every) person\b[\s\S]{0,300}\bshall (?:immediately |promptly |forthwith )?(?:report|notify)\b[\s\S]{0,1200}(?:\blaw-enforcement\b|\blaw enforcement\b|\bpolice\b|\bsheriffs?\b|\bchild protective services\b)|(?:\blaw-enforcement\b|\blaw enforcement\b|\bpolice\b|\bsheriffs?\b|\bchild protective services\b)[\s\S]{0,1200}\b(?:any|every) person\b[\s\S]{0,300}\bshall (?:immediately |promptly |forthwith )?(?:report|notify)\b` / code (34494 units) / 13 hits: 16.1-237, 19.2-83.6, 22.1-3.1, 27-97.1, 29.1-516, 29.1-539, 37.2-833, 46.2-208, 46.2-208#v2, 46.2-208#v3, 46.2-221, 46.2-341.11 +1
- `\bany other person having knowledge\b|\bevery person having knowledge\b|\bany person (?:who )?(?:has|having) knowledge\b` / code (34494 units) / 5 hits: 3.2-6522, 20-64, 32.1-283, 38.2-2710, 38.2-6011
- positive [1] 19.2-68: passed
- positive [2] 55.1-1209: passed
- positive [3] 59.1-139: passed
- positive [4] 32.1-283: passed
**VA-G-0933** [confirmed-absences-misc]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bfalse\b|\bfraudulent(?:ly)?\b|\bmisrepresent(?:s|ed|ing|ation|ations)?\b|\buntrue\b|\binaccurate\b)[\s\S]{0,1200}(?:\brental applications?\b|\bapplications? for (?:tenancy|rental|occupancy)\b|\bapplicants? for tenancy\b|\bprospective tenants?\b)|(?:\brental applications?\b|\bapplications? for (?:tenancy|rental|occupancy)\b|\bapplicants? for tenancy\b|\bprospective tenants?\b)[\s\S]{0,1200}(?:\bfalse\b|\bfraudulent(?:ly)?\b|\bmisrepresent(?:s|ed|ing|ation|ations)?\b|\buntrue\b|\binaccurate\b)` / all (35567 units) / 3 hits: 54.1-2133, 54.1-2134, 55.1-1217
- `\A(?=[\s\S]*(?:\bfalse\b|\bfraudulent(?:ly)?\b|\bmisrepresent(?:s|ed|ing|ation|ations)?\b|\buntrue\b|\binaccurate\b))(?=[\s\S]*(?:\bapplications?\b|\bapplicants?\b))(?=[\s\S]*(?:\bterminat(?:e|es|ed|ion)\b|\bevict(?:s|ed|ion)?\b))(?=[\s\S]*(?:\btenants?\b|\brental agreements?\b))` / code (34494 units) / 1 hits: 38.2-4905
- `(?:\bsmoke (?:detectors?|alarms?)\b|\bcarbon monoxide (?:detectors?|alarms?)\b)[\s\S]{0,1200}(?:\bevidence\b|\badmissib\w*|\binsur(?:e|er|ers|ance|ed)\b|\bnegligen(?:t|ce)\b)|(?:\bevidence\b|\badmissib\w*|\binsur(?:e|er|ers|ance|ed)\b|\bnegligen(?:t|ce)\b)[\s\S]{0,1200}(?:\bsmoke (?:detectors?|alarms?)\b|\bcarbon monoxide (?:detectors?|alarms?)\b)` / all (35567 units) / 2 hits: 55.1-1220, 55.1-1227
- `\A(?=[\s\S]*(?:\bsmoke (?:detectors?|alarms?)\b|\bcarbon monoxide (?:detectors?|alarms?)\b))(?=[\s\S]*(?:\badmissib\w*|\bnot be (?:considered|construed as) evidence\b|\binsurers?\b))` / all (35567 units) / 0 hits
- positive [0] 54.1-2134: passed
- positive [2] 55.1-1227: passed
**VA-G-0934** [confirmed-absences-outside-title]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\b(?:may|shall) not maintain (?:any |an |a )?(?:action|suit|proceeding)s?\b|\bno action shall be maintained\b|\bshall not be entitled to maintain\b|\bmay not bring or maintain\b|\bshall maintain an action\b)` / code (34494 units) / 13 hits: 8.01-51, 8.01-247, 13.1-758, 13.1-920, 13.1-920#v2, 13.1-1057, 13.1-1247, 15.2-1248, 50-73.59, 50-73.140, 55.1-1211, 55.1-1401 +1
- `(?:\bregist(?:er|ered|ering|ration|rations)\b|\blicens(?:e|ed|es|ing)\b|\bcertificates? of (?:occupancy|registration|authority)\b|\bdesignation\b)[\s\S]{0,1200}(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bjudgment for possession\b|\border of possession\b)|(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bjudgment for possession\b|\border of possession\b)[\s\S]{0,1200}(?:\bregist(?:er|ered|ering|ration|rations)\b|\blicens(?:e|ed|es|ing)\b|\bcertificates? of (?:occupancy|registration|authority)\b|\bdesignation\b)` / code (34494 units) / 5 hits: 16.1-88.03, 17.1-272, 55.1-1257, 55.1-1417, 55.1-1982
- `\A(?=[\s\S]*(?:\bregist(?:er|ered|ering|ration|rations)\b|\blicens(?:e|ed|es|ing)\b|\bcertificates? of (?:occupancy|registration|authority)\b|\bdesignation\b))(?=[\s\S]*(?:\bunlawful detainers?\b|\bevict(?:s|ed|ing|ion|ions)?\b|\bjudgment for possession\b|\border of possession\b))(?=[\s\S]*(?:\blandlords?\b|\brental\b))` / all (35567 units) / 8 hits: 16.1-88.03, 55.1-1200, 55.1-1226, 55.1-1257, 55.1-1417, 55.1-1982, 55.1-2164, 18VAC135-50-80
- `\brental (?:registration|license|licensing|permit)s?\b|\blandlord (?:registration|license|licensing)\b|\bregistry of (?:landlords|rental)\b` / all (35567 units) / 0 hits
- positive [0] 13.1-1057: passed
- positive [0] 59.1-76: passed
- positive [0] 55.1-1211: passed
- positive [1] 55.1-1257: passed
**VA-G-0935** [foreign-ownership]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\baliens?\b|\bforeign (?:nationals?|persons?|governments?|principals?|adversar(?:y|ies)|entit(?:y|ies)|citizens?)\b|\bnonresident aliens?\b)[\s\S]{0,1200}(?:\bleases?\b|\bleaseholds?\b|\btenants?\b|\btenancy\b|\brental agreements?\b|\blessees?\b)|(?:\bleases?\b|\bleaseholds?\b|\btenants?\b|\btenancy\b|\brental agreements?\b|\blessees?\b)[\s\S]{0,1200}(?:\baliens?\b|\bforeign (?:nationals?|persons?|governments?|principals?|adversar(?:y|ies)|entit(?:y|ies)|citizens?)\b|\bnonresident aliens?\b)` / all (35567 units) / 1 hits: 59.1-207.45
- `\A(?=[\s\S]*(?:\baliens?\b|\bforeign (?:nationals?|persons?|governments?|principals?|adversar(?:y|ies)|entit(?:y|ies)|citizens?)\b|\bnonresident aliens?\b))(?=[\s\S]*(?:\breal (?:property|estate)\b|\bland\b))(?=[\s\S]*(?:\bprohibit(?:s|ed)?\b|\bshall not\b|\bmay not\b|\bvoid\b))` / code (34494 units) / 14 hits: 2.2-3711, 2.2-3711#v2, 2.2-3711#v3, 2.2-3711#v4, 3.2-102, 13.1-514, 13.1-1002, 13.1-1002#v2, 38.2-208, 55.1-507, 55.1-508, 58.1-402 +2
- `\bforeign adversar(?:y|ies|y\x27s)\b` / all (35567 units) / 3 hits: 3.2-102, 55.1-507, 55.1-508
- `\b(?:foreign adversar(?:y|ies)|agricultural land)\b[\s\S]{0,1200}\b(?:inquir(?:e|y|ies)|determin(?:e|es|ed|ation)|verif(?:y|ies|ied|ication)|certif(?:y|ies|ied|ication)|affidavit)\b|\b(?:inquir(?:e|y|ies)|determin(?:e|es|ed|ation)|verif(?:y|ies|ied|ication)|certif(?:y|ies|ied|ication)|affidavit)\b[\s\S]{0,1200}\bforeign adversar(?:y|ies)\b` / code:55\.1-5,code:3\.2- (1217 units) / 1 hits: 55.1-507
- positive [0] 55.1-1203: recorded as failed
- positive [2] 55.1-508: passed
- positive [1] 55.1-508: passed
- positive [3] 55.1-507: passed
**VA-G-0936** [foreign-ownership]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-0935 (positive on term [0] recorded as failed (55.1-1203 has no foreign-person word); positive moved to 59.1-207.45, a hit read before the rerun)
- `(?:\baliens?\b|\bforeign (?:nationals?|persons?|governments?|principals?|adversar(?:y|ies)|entit(?:y|ies)|citizens?)\b|\bnonresident aliens?\b)[\s\S]{0,1200}(?:\bleases?\b|\bleaseholds?\b|\btenants?\b|\btenancy\b|\brental agreements?\b|\blessees?\b)|(?:\bleases?\b|\bleaseholds?\b|\btenants?\b|\btenancy\b|\brental agreements?\b|\blessees?\b)[\s\S]{0,1200}(?:\baliens?\b|\bforeign (?:nationals?|persons?|governments?|principals?|adversar(?:y|ies)|entit(?:y|ies)|citizens?)\b|\bnonresident aliens?\b)` / all (35567 units) / 1 hits: 59.1-207.45
- `\A(?=[\s\S]*(?:\baliens?\b|\bforeign (?:nationals?|persons?|governments?|principals?|adversar(?:y|ies)|entit(?:y|ies)|citizens?)\b|\bnonresident aliens?\b))(?=[\s\S]*(?:\breal (?:property|estate)\b|\bland\b))(?=[\s\S]*(?:\bprohibit(?:s|ed)?\b|\bshall not\b|\bmay not\b|\bvoid\b))` / code (34494 units) / 14 hits: 2.2-3711, 2.2-3711#v2, 2.2-3711#v3, 2.2-3711#v4, 3.2-102, 13.1-514, 13.1-1002, 13.1-1002#v2, 38.2-208, 55.1-507, 55.1-508, 58.1-402 +2
- `\bforeign adversar(?:y|ies|y\x27s)\b` / all (35567 units) / 3 hits: 3.2-102, 55.1-507, 55.1-508
- `\b(?:foreign adversar(?:y|ies)|agricultural land)\b[\s\S]{0,1200}\b(?:inquir(?:e|y|ies)|determin(?:e|es|ed|ation)|verif(?:y|ies|ied|ication)|certif(?:y|ies|ied|ication)|affidavit)\b|\b(?:inquir(?:e|y|ies)|determin(?:e|es|ed|ation)|verif(?:y|ies|ied|ication)|certif(?:y|ies|ied|ication)|affidavit)\b[\s\S]{0,1200}\bforeign adversar(?:y|ies)\b` / code:55\.1-5,code:3\.2- (1217 units) / 1 hits: 55.1-507
- positive [0] 59.1-207.45: passed
- positive [2] 55.1-508: passed
- positive [1] 55.1-508: passed
- positive [3] 55.1-507: passed
**VA-G-1001** [hazardous-contamination-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\benvironmental covenants?\b|\bactivity and use limitations?\b` / all (35567 units) / 11 hits: 10.1-1238, 10.1-1239, 10.1-1240, 10.1-1241, 10.1-1242, 10.1-1243, 10.1-1244, 10.1-1245, 10.1-1246, 10.1-1247, 10.1-1248
- `(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b)` / all (35567 units) / 9 hits: 1-405, 8.01-226.7, 10.1-1230, 10.1-1409, 10.1-1427, 32.1-176.3, 45.2-1720, 46.2-341.4, 52-8.4
- `\A(?=[\s\S]*(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|notices?)\b)` / all (35567 units) / 9 hits: 8.01-226.7, 10.1-1408.1, 10.1-1409, 15.2-2286, 15.2-2286#v2, 64.2-105, 65.2-101, 13VAC5-52-160, 13VAC5-63-210
- `(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b)` / code:55\.1- (897 units) / 1 hits: 55.1-2417
- `(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b)[\s\S]{0,1200}\b(?:disclos\w*)\b|\b(?:disclos\w*)\b[\s\S]{0,1200}(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b)` / all (35567 units) / 18 hits: 2.2-3705.7, 2.2-3711, 2.2-3711#v2, 2.2-3711#v3, 2.2-3711#v4, 10.1-1186.1:1, 10.1-1233, 10.1-1400, 10.1-1409, 10.1-1455, 15.2-2242, 15.2-2242#v2 +6
- `(?:\bcontaminat\w*|\bhazardous (?:substances?|materials?|wastes?)\b|\bbrownfields?\b|\benvironmental covenants?\b)` / code:55\.1-7\d\d (19 units) / 0 hits
- positive [0] 10.1-1243: passed
- positive [1] 10.1-1230: passed
- positive [2] 8.01-226.7: passed
- positive [3] 55.1-2417: passed
- positive [4] 10.1-1233: passed
**VA-G-1002** [hazardous-contamination-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\btoxic\w*|\bpollut\w*|\bsuperfund\b|\bnational priorities list\b|\bclean[- ]?ups?\b|\bpetroleum\b|\bunderground storage tanks?\b|\bchemicals?\b|\bcarcinogen\w*)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\btoxic\w*|\bpollut\w*|\bsuperfund\b|\bnational priorities list\b|\bclean[- ]?ups?\b|\bpetroleum\b|\bunderground storage tanks?\b|\bchemicals?\b|\bcarcinogen\w*)` / all (35567 units) / 32 hits: 2.2-2279, 10.1-1181.1, 10.1-1230, 10.1-1409, 10.1-1427, 10.1-2128, 15.2-1812.2, 15.2-2114, 15.2-4901, 15.2-4905, 15.2-5137, 29.1-554 +20
- `\A(?=[\s\S]*(?:\btoxic\w*|\bpollut\w*|\bsuperfund\b|\bnational priorities list\b|\bclean[- ]?ups?\b|\bpetroleum\b|\bunderground storage tanks?\b|\bchemicals?\b|\bcarcinogen\w*))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|notices?|warn\w*)\b)` / code:55\.1- (897 units) / 0 hits
- `\bsuperfund\b|\bnational priorities list\b|\bCERCLIS\b` / all (35567 units) / 4 hits: 2.2-617, 10.1-1235, 10.1-1402, 38.2-1341
- `\bclean(?:ed)?[- ]?up\b[\s\S]{0,1200}\b(?:dwelling units?|rental (?:units?|property|properties|housing))\b|\b(?:dwelling units?|rental (?:units?|property|properties|housing))\b[\s\S]{0,1200}\bclean(?:ed)?[- ]?up\b` / all (35567 units) / 2 hits: 55.1-708, 55.1-1219
- positive [0] 15.2-2114: passed
- positive [2] 10.1-1235: passed
- positive [3] 55.1-1219: passed
**VA-G-1003** [prop65-rental-warning]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bproposition 65\b|\bprop\.? 65\b|\bknown to the (?:state|commonwealth) to cause\b` / all (35567 units) / 0 hits
- `(?:\bcarcinogen\w*|\bcaus\w* cancer\b|\bcancer\b|\breproductive (?:harm|toxi\w*)\b|\bbirth defects?\b|\bformaldehyde\b|\bproposition 65\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bcarcinogen\w*|\bcaus\w* cancer\b|\bcancer\b|\breproductive (?:harm|toxi\w*)\b|\bbirth defects?\b|\bformaldehyde\b|\bproposition 65\b)` / all (35567 units) / 2 hits: 36-96.1:1, 51.5-40.1
- `\A(?=[\s\S]*(?:\bcarcinogen\w*|\bcaus\w* cancer\b|\bcancer\b|\breproductive (?:harm|toxi\w*)\b|\bbirth defects?\b|\bformaldehyde\b|\bproposition 65\b))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:warn\w*)\b)` / all (35567 units) / 0 hits
- `(?:\bcarcinogen\w*|\bcaus\w* cancer\b|\bcancer\b|\breproductive (?:harm|toxi\w*)\b|\bbirth defects?\b|\bformaldehyde\b|\bproposition 65\b)[\s\S]{0,1200}\b(?:warn\w*)\b|\b(?:warn\w*)\b[\s\S]{0,1200}(?:\bcarcinogen\w*|\bcaus\w* cancer\b|\bcancer\b|\breproductive (?:harm|toxi\w*)\b|\bbirth defects?\b|\bformaldehyde\b|\bproposition 65\b)` / all (35567 units) / 2 hits: 59.1-310.3, 59.1-310.4
- `\b(?:chemicals?|toxic substances?)\b[\s\S]{0,1200}\b(?:warn\w*)\b|\b(?:warn\w*)\b[\s\S]{0,1200}\b(?:chemicals?|toxic substances?)\b` / all (35567 units) / 6 hits: 44-146.16, 45.2-912, 46.2-1023, 54.1-3462, 13VAC5-52-210, 13VAC5-52-480
- `(?:\btoxic\w*|\bexposures?\b|\bfumes\b|\bhealth hazards?\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\btoxic\w*|\bexposures?\b|\bfumes\b|\bhealth hazards?\b)` / all (35567 units) / 12 hits: 8.01-226.7, 8.01-226.12, 16.1-322.5, 38.2-1887, 38.2-2105, 38.2-2126, 38.2-4231, 38.2-5101, 53.1-262, 62.1-44.15:24, 12VAC5-630-10, 13VAC5-63-540
- `\b(?:warn\w*)\b[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:warn\w*)\b` / code:55\.1- (897 units) / 0 hits
- positive [1] 36-96.1:1: passed
- positive [3] 59.1-310.4: passed
- positive [4] 54.1-3462: passed
- positive [5] 8.01-226.12: passed
**VA-G-1004** [shoreline-access-disclosure]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bshore(?:s|line|lines|front)?\b|\bbeach(?:es)?\b|\bwaterfront\b|\bforeshore\b|\bmean (?:low|high)[- ]water\b|\bpublic access\b|\briparian\b|\bsand dunes?\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bshore(?:s|line|lines|front)?\b|\bbeach(?:es)?\b|\bwaterfront\b|\bforeshore\b|\bmean (?:low|high)[- ]water\b|\bpublic access\b|\briparian\b|\bsand dunes?\b)` / all (35567 units) / 40 hits: 2.2-1136, 2.2-1157, 10.1-1159, 15.2-958.3, 15.2-2100, 15.2-2306, 15.2-6606, 15.2-6632, 15.2-7406, 22.1-129, 28.2-312, 28.2-528 +28
- `\A(?=[\s\S]*(?:\bshore(?:s|line|lines|front)?\b|\bbeach(?:es)?\b|\bwaterfront\b|\bforeshore\b|\bmean (?:low|high)[- ]water\b|\bpublic access\b|\briparian\b|\bsand dunes?\b))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|notices?)\b)` / all (35567 units) / 36 hits: 2.2-3705.1, 15.2-958.3, 15.2-2201, 15.2-2201#v2, 15.2-2201#v3, 15.2-2403, 15.2-6606, 15.2-6632, 15.2-7406, 28.2-528, 28.2-606, 28.2-618 +24
- `(?:\bshore(?:s|line|lines|front)?\b|\bbeach(?:es)?\b|\bwaterfront\b|\bforeshore\b|\bmean (?:low|high)[- ]water\b|\bpublic access\b|\briparian\b|\bsand dunes?\b)` / code:55\.1- (897 units) / 2 hits: 55.1-703, 55.1-703#v2
- `\bpublic access\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?)\b|\b(?:disclos\w*|notif\w*|notices?)\b[\s\S]{0,1200}\bpublic access\b` / all (35567 units) / 14 hits: 2.2-3701, 2.2-3705.1, 2.2-3705.8, 2.2-3707, 2.2-3708.2, 2.2-3708.3, 2.2-5506, 15.2-2108.19, 32.1-267, 32.1-271, 38.2-6200, 62.1-44.19:6 +2
- `\bpublic (?:shore|beach)(?:line)? access\b|\bbeach access\b|\baccess to the (?:shore|beach|water)\b` / all (35567 units) / 3 hits: 15.2-2201, 15.2-2201#v2, 15.2-2201#v3
- `\b(?:lakefront|oceanfront|riverfront|bayfront|water access|boat ramps?|boat slips?)\b[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:lakefront|oceanfront|riverfront|bayfront|water access|boat ramps?|boat slips?)\b` / all (35567 units) / 3 hits: 15.2-6606, 28.2-1203, 29.1-113
- `\bresource protection areas?\b[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}\bresource protection areas?\b` / all (35567 units) / 0 hits
- positive [0] 28.2-630: passed
- positive [1] 28.2-606: passed
- positive [2] 55.1-703: passed
- positive [3] 62.1-44.19:6: passed
- positive [4] 15.2-2201: passed
- positive [5] 29.1-113: passed
**VA-G-1005** [farmland-hunting-rights]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\b(?:hunt|hunts|hunted|hunting|hunter|hunters)\b[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:hunt|hunts|hunted|hunting|hunter|hunters)\b` / all (35567 units) / 22 hits: 3.2-6508.1, 10.1-1107, 10.1-1151, 10.1-1159, 15.2-6017, 18.2-134.1, 18.2-308.2:2, 28.2-503, 28.2-1302, 29.1-103, 29.1-113, 29.1-301 +10
- `\A(?=[\s\S]*\b(?:hunt|hunts|hunted|hunting|hunter|hunters)\b)(?=[\s\S]*\b(?:tenants?|lessees?|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:reserv\w*|grant\w*|consent\w*|permission)\b)` / all (35567 units) / 5 hits: 4.1-206.3, 29.1-301, 29.1-509, 29.1-516, 29.1-529
- `\bhunting rights?\b|\bright to hunt\b|\bhunting privileges?\b|\bhunting leases?\b|\bleases? (?:for|of) hunting\b|\bleas\w* land for hunting\b|\bhunting clubs?\b` / all (35567 units) / 3 hits: 29.1-322, 29.1-521, Const art. XI, § 4
- `\bsporting rights?\b|\bgame rights?\b|\bfishing rights?\b` / all (35567 units) / 2 hits: 28.2-611, 29.1-106
- `\b(?:fish|fishes|fished|fishing|trap|traps|trapped|trapping|game|wildlife|sporting)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|rental agreements?|lessees?)\b|\b(?:tenants?|landlords?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:fish|fishes|fished|fishing|trap|traps|trapped|trapping|game|wildlife|sporting)\b` / all (35567 units) / 28 hits: 3.2-901, 10.1-1159, 15.2-1130, 15.2-2820, 15.2-6017, 15.2-6308, 18.2-134.1, 18.2-140, 18.2-340.16, 18.2-340.33, 19.2-70.2, 28.2-618 +16
- `\b(?:hunt|hunts|hunted|hunting|hunter|hunters)\b|\bemblements?\b[\s\S]{0,1200}\b(?:game|wildlife|fish\w*)\b` / code:55\.1- (897 units) / 0 hits
- positive [0] 29.1-301: passed
- positive [1] 29.1-509: passed
- positive [2] 29.1-521: passed
- positive [3] 29.1-106: passed
- positive [4] 29.1-337: passed
**VA-G-1006** [communal-land-lease-approval]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)` / all (35567 units) / 4 hits: 2.2-1149, 29.1-521, 64.2-2600, 18VAC135-50-270
- `\A(?=[\s\S]*(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:approv\w*|consent\w*)\b)` / all (35567 units) / 5 hits: 2.2-1149, 29.1-301, 29.1-521, 18VAC135-50-270, R. 3C:2
- `(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)[\s\S]{0,1200}\b(?:approv\w*|consent\w*)\b|\b(?:approv\w*|consent\w*)\b[\s\S]{0,1200}(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)` / all (35567 units) / 9 hits: 2.2-1149, 10.1-2305, 24.2-128, 29.1-521, 30-415, 51.1-700, 56-46.1, 60.2-507.1, R. 3C:2
- `\b(?:communal|land held in common|common lands?|lands? in common)\b[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:communal|land held in common|common lands?|lands? in common)\b` / all (35567 units) / 0 hits
- `\bcommunity land trusts?\b` / all (35567 units) / 3 hits: 55.1-1200, 58.1-3295.2, 58.1-3970.1
- positive [0] 2.2-1149: passed
- positive [2] 36-105.5: recorded as failed
- positive [4] 55.1-1200: passed
**VA-G-1007** [communal-land-lease-approval]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-1006 (positive for term 2 (36-105.5) had no approve or consent word; positive moved to 2.2-1149)
- `(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)` / all (35567 units) / 4 hits: 2.2-1149, 29.1-521, 64.2-2600, 18VAC135-50-270
- `\A(?=[\s\S]*(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:approv\w*|consent\w*)\b)` / all (35567 units) / 5 hits: 2.2-1149, 29.1-301, 29.1-521, 18VAC135-50-270, R. 3C:2
- `(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)[\s\S]{0,1200}\b(?:approv\w*|consent\w*)\b|\b(?:approv\w*|consent\w*)\b[\s\S]{0,1200}(?:\bindian (?:reservations?|tribes?|lands?)\b|\btribal (?:lands?|trust|councils?|governments?|nations?)\b|\btribes?\b|\bpamunkey\b|\bmattaponi\b|\bchickahominy\b|\breservation lands?\b|\bfederally recognized\b|\brecognized tribes?\b|\bnative (?:american|lands?)\b)` / all (35567 units) / 9 hits: 2.2-1149, 10.1-2305, 24.2-128, 29.1-521, 30-415, 51.1-700, 56-46.1, 60.2-507.1, R. 3C:2
- `\b(?:communal|land held in common|common lands?|lands? in common)\b[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:communal|land held in common|common lands?|lands? in common)\b` / all (35567 units) / 0 hits
- `\bcommunity land trusts?\b` / all (35567 units) / 3 hits: 55.1-1200, 58.1-3295.2, 58.1-3970.1
- positive [0] 2.2-1149: passed
- positive [2] 2.2-1149: passed
- positive [4] 55.1-1200: passed
**VA-G-1008** [usufructuary-lessor]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\busufruct\w*|\bnaked owner\w*` / all (35567 units) / 6 hits: 15.2-4602, 15.2-4701, 15.2-4801, 33.2-2000, 33.2-2700, 64.2-778
- `(?:\blife tenants?\b|\blife estates?\b|\btenants? for life\b|\bestates? for life\b|\bfor (?:his|her|their) li(?:fe|ves)\b|\bremaindermen\b|\bremainderman\b|\bpur autre vie\b)[\s\S]{0,1200}\b(?:leases?|leased|leasing|lessees?|lessors?|tenancy|tenancies|landlords?|rental agreements?|rents?)\b|\b(?:leases?|leased|leasing|lessees?|lessors?|tenancy|tenancies|landlords?|rental agreements?|rents?)\b[\s\S]{0,1200}(?:\blife tenants?\b|\blife estates?\b|\btenants? for life\b|\bestates? for life\b|\bfor (?:his|her|their) li(?:fe|ves)\b|\bremaindermen\b|\bremainderman\b|\bpur autre vie\b)` / all (35567 units) / 4 hits: 8.01-94, 8.01-95, 55.1-1703, 58.1-3216
- `\A(?=[\s\S]*(?:\blife tenants?\b|\blife estates?\b|\btenants? for life\b|\bestates? for life\b|\bfor (?:his|her|their) li(?:fe|ves)\b|\bremaindermen\b|\bremainderman\b|\bpur autre vie\b))(?=[\s\S]*\b(?:leases?|leased|leasing|lessees?|lessors?|tenancy|tenancies|landlords?|rental agreements?|rents?)\b)(?=[\s\S]*\b(?:death|dies|died|deceased|terminat\w*|expir\w*)\b)` / all (35567 units) / 4 hits: 55.1-1703, 55.1-1916, 58.1-3216, 64.2-305
- `(?:\blife tenants?\b|\blife estates?\b|\btenants? for life\b|\bestates? for life\b|\bfor (?:his|her|their) li(?:fe|ves)\b|\bremaindermen\b|\bremainderman\b|\bpur autre vie\b)` / code:55\.1-1[2-4]\d\d (134 units) / 0 hits
- `(?:\bdeath of (?:the|a|such) (?:landlord|lessor|owner)\b|\b(?:landlord|lessor|owner) dies\b|\b(?:landlord|lessor)\W?s death\b|\buncertain interest\b|\blimited estate\b)` / all (35567 units) / 13 hits: 1-233, 6.2-1173, 15.2-718, 15.2-4314, 46.2-633.2, 54.1-2310, 55.1-1703, 58.1-3219.1, 58.1-3342, 64.2-612, 64.2-614, 64.2-621 +1
- positive [0] 64.2-778: passed
- positive [1] 55.1-1703: passed
- positive [2] 55.1-1703: passed
- positive [4] 55.1-1703: passed
**VA-G-1009** [tpa-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\btenant protections? act\b` / all (35567 units) / 0 hits
- `\brent control\w*|\brent stabiliz\w*|\brent caps?\b|\bcaps? on rents?\b|\blimit\w* (?:on )?(?:the amount of )?rent increases?\b|\brent increases? (?:may|shall) not exceed\b|\brent (?:freeze|ceiling)s?\b` / all (35567 units) / 0 hits
- `\b(?:just|good) cause\b[\s\S]{0,1200}\b(?:evict\w*|tenanc(?:y|ies)|unlawful detainer)\b|\b(?:evict\w*|tenanc(?:y|ies)|unlawful detainer)\b[\s\S]{0,1200}\b(?:just|good) cause\b` / all (35567 units) / 3 hits: 16.1-77, 55.1-1258#v2, 55.1-1314#v2
- `\brent increases?\b` / code:55\.1-1[23]\d\d (108 units) / 1 hits: 55.1-1204#v2 / heading-only: 55.1-1320
- `\A(?=[\s\S]*\brent increases?\b)(?=[\s\S]*\bpercent\b)(?=[\s\S]*\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)` / all (35567 units) / 1 hits: 55.1-1204#v2
- `(?:\bright of first refusal\b|\bopportunity to purchase\b|\bright to purchase\b|\boffer to (?:convey|sell)\b)[\s\S]{0,1200}\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bright of first refusal\b|\bopportunity to purchase\b|\bright to purchase\b|\boffer to (?:convey|sell)\b)` / all (35567 units) / 22 hits: 13.1-559, 15.2-2305, 15.2-2305.1, 18.2-180, 18.2-273.9, 18.2-308.2:2, 36-85.16, 36-176, 46.2-507, 46.2-1568, 46.2-1569, 55.1-358 +10
- `\bunconscionable price\b[\s\S]{0,1200}\bhousing\b|\bhousing\b[\s\S]{0,1200}\bunconscionable price\b` / all (35567 units) / 0 hits
- positive [3] 55.1-1204: passed
- positive [4] 55.1-1204: passed
- positive [5] 55.1-1308.3: passed
- positive [6] 59.1-527: recorded as failed
**VA-G-1010** [tpa-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181; supersedes VA-G-1009 (positive for term 6 failed: housing is in 59.1-526, the unconscionable-price ban in 59.1-527; split into two bare terms)
- `\btenant protections? act\b` / all (35567 units) / 0 hits
- `\brent control\w*|\brent stabiliz\w*|\brent caps?\b|\bcaps? on rents?\b|\blimit\w* (?:on )?(?:the amount of )?rent increases?\b|\brent increases? (?:may|shall) not exceed\b|\brent (?:freeze|ceiling)s?\b` / all (35567 units) / 0 hits
- `\b(?:just|good) cause\b[\s\S]{0,1200}\b(?:evict\w*|tenanc(?:y|ies)|unlawful detainer)\b|\b(?:evict\w*|tenanc(?:y|ies)|unlawful detainer)\b[\s\S]{0,1200}\b(?:just|good) cause\b` / all (35567 units) / 3 hits: 16.1-77, 55.1-1258#v2, 55.1-1314#v2
- `\brent increases?\b` / code:55\.1-1[23]\d\d (108 units) / 1 hits: 55.1-1204#v2 / heading-only: 55.1-1320
- `\A(?=[\s\S]*\brent increases?\b)(?=[\s\S]*\bpercent\b)(?=[\s\S]*\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)` / all (35567 units) / 1 hits: 55.1-1204#v2
- `(?:\bright of first refusal\b|\bopportunity to purchase\b|\bright to purchase\b|\boffer to (?:convey|sell)\b)[\s\S]{0,1200}\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b|\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b[\s\S]{0,1200}(?:\bright of first refusal\b|\bopportunity to purchase\b|\bright to purchase\b|\boffer to (?:convey|sell)\b)` / all (35567 units) / 22 hits: 13.1-559, 15.2-2305, 15.2-2305.1, 18.2-180, 18.2-273.9, 18.2-308.2:2, 36-85.16, 36-176, 46.2-507, 46.2-1568, 46.2-1569, 55.1-358 +10
- `\bunconscionable prices?\b` / all (35567 units) / 3 hits: 59.1-527, 59.1-529.1, 59.1-535
- `\bnecessary goods and services\b[\s\S]{0,1200}\bhousing\b` / all (35567 units) / 1 hits: 59.1-526
- positive [3] 55.1-1204: passed
- positive [4] 55.1-1204: passed
- positive [5] 55.1-1308.3: passed
- positive [6] 59.1-527: passed
- positive [7] 59.1-526: passed
**VA-G-1011** [tpa-exemption-notice]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bexemption notices?\b|\bnotices? of exemption\b|\bstatements? of exemption\b|\bexemption statements?\b` / all (35567 units) / 1 hits: 22.1-271.2
- `\A(?=[\s\S]*\bexempt\w*)(?=[\s\S]*\brent increases?\b)(?=[\s\S]*\b(?:leases?|leased|lessees?|lessors?|tenants?|tenancy|tenancies|landlords?|rental agreements?)\b)` / all (35567 units) / 0 hits
- `\bexempt\w*[\s\S]{0,1200}\b(?:notice|notif\w*|disclos\w*|statement)\b|\b(?:notice|notif\w*|disclos\w*|statement)\b[\s\S]{0,1200}\bexempt\w*` / code:55\.1-1[23]\d\d (108 units) / 6 hits: 55.1-1201, 55.1-1212.1, 55.1-1245, 55.1-1245#v2, 55.1-1245#v3, 55.1-1308.3
- `\bnot subject to\b[\s\S]{0,1200}\b(?:rent|evict\w*|just cause|good cause)\b` / code:55\.1-1[23]\d\d (108 units) / 0 hits
- positive [0] 22.1-271.2: passed
- positive [2] 55.1-1201: passed
**VA-G-1012** [tpa-sunset]: controls "zqxvbnmwt" 0, "Commonwealth" 10181
- `\bshall expire\b|\bexpires? on\b|\bsunset\w*|\bis repealed effective\b|\bshall be repealed\b|\bremain in effect until\b|\bshall not be effective after\b` / code:55\.1-1[23]\d\d (108 units) / 0 hits
- `\buntil the later of\b|\(expires\b|\brepeal effective\b|\bexpires\)` / code:55\.1-1[23]\d\d (108 units) / 0 hits / heading-only: 55.1-1245#v2, 55.1-1245#v3
- `\bexpir\w*` / code:55\.1-1[23]\d\d (108 units) / 23 hits: 55.1-1201, 55.1-1202#v2, 55.1-1203#v2, 55.1-1204#v2, 55.1-1209#v2, 55.1-1212#v2, 55.1-1226, 55.1-1233, 55.1-1240, 55.1-1240#v2, 55.1-1244#v2, 55.1-1245 +11
- `\brepeal\w*` / code:55\.1-1[23]\d\d (108 units) / 2 hits: 55.1-1243, 55.1-1308.2
- `\bCOVID-19\b` / code:55\.1-1[23]\d\d (108 units) / 2 hits: 55.1-1245, 55.1-1245#v2 / heading-only: 55.1-1245#v3
- `\A(?=[\s\S]*(?:\bshall expire\b|\bexpires? on\b|\bsunset\w*|\bis repealed effective\b|\bshall be repealed\b|\bremain in effect until\b|\bshall not be effective after\b))(?=[\s\S]*\b(?:landlords?|tenants?|rental agreements?|dwelling units?|lot rental)\b)` / acts (10 units) / 2 hits: 2024 Acts ch. 32, 2024 Acts ch. 42
- `\bshall expire\b|\bexpires? on\b|\bsunset\w*|\bis repealed effective\b|\bshall be repealed\b|\bremain in effect until\b|\bshall not be effective after\b` / code:(?:8\.01-12[4-9]|8\.01-1[3-9]\d|36-9[6-9]|36-176|36-17[7-9]|36-180) (167 units) / 0 hits
- positive [2] 55.1-1245: passed
- positive [3] 55.1-1308.2: passed
- positive [4] 55.1-1245: passed
- positive [5] 2024 Acts ch. 32: passed

### §4 Decisions and questions asked of Taylor

**Class decisions** (the canvass brief's `standards.md`, applied by every slice; cited in notes as "VA gaps log §4 class decision N"):
1. Non-waiver: Va. Code Ann. § 55.1-1208(A)(1) and (B). Including a prohibited term is not penalised by itself; damages and fees attach only if the landlord sues to enforce it. A waiver of a rule Virginia doesn't have is empty, not lawful.
2. Local preemption: Va. Code Ann. § 55.1-1201(A), (E). Rows on local topics say what stays local (reconciliatory commissions, property maintenance code enforcement, and what another statute authorizes) and point to `edu-local-preemption-va`. No city or county ordinance was researched (rule 3).
3. Scope: Va. Code Ann. § 55.1-1201(B)-(D); Chapter 13 (manufactured home lots) and Chapter 14 (nonresidential) don't govern a dwelling lease.
4. Versions: quote the version in force on 2026-11-07 and give the next version's start date from its official heading.
5. Not held: 2025-2026 Acts (codified text is in the overlay), other VAC chapters, model codes, ordinances, case law; such answers are Not located with the missing source named.
6. NEEDS_REVIEW only where a controlling primary source couldn't be read; interpretive doubt is stated with the cautious course and the row stays VERIFIED (Taylor, 2026-10-15).
7. Existing VA rows were not edited; defects are reported in §6.

**Questions asked of Taylor.** Step A, rule 12: may the federal sections a residential canvass needs be saved? Taylor: yes (2026-11-07). No other question needed Taylor; the canvass questions below were decided by the main pass under rule 76, as recorded.

**Virginia items.** Item 1 (waivers): one hub row, `edu-nonwaivable-rights-va`, with each waiver topic keyed to its own short row pointing to it. Item 3 (deposits): see the S02 decision on the M.13 builder note. Item 4 (local limits): see the S04 rows. Item 8 (arbitration): Virginia meets the offer rule (decision below). Items 5, 6 and 7 follow.

Item 9 (general statutes outside the landlord-tenant title): see the S09 rows for entity, assumed-name, jurisdiction and reporting rules; each battery for those topics has at least one limb with no tenancy word. Item 10 (VA log §7 open items): read where a missing topic needed them — § 8.01-226.12 (edu-habitability-presumption-va and two others), § 54.1-2108 (edu-security-deposit-holding-va), § 32.1-46.1 (edu-lead-state-notices-va), and the Fair Housing Law enforcement sections §§ 36-96.8 to 36-96.21 (cited by ten rows, e.g. edu-disability-accommodation-va). Still open, because no missing topic needed them: § 36-156.1 (defective drywall definition) and Va. Const. art. IV, § 13 (the July 1 default effective date; rows rely on the official version headings instead). The VAC chapters held in the corpus were read where a topic turned on them, and five more chapters were read in the browser (§1). Item 11 (currency): §1.

**Variables.** No new `{{variables}}`: the clauses reuse `{{renewal_notice_days}}` (automatic-renewal-va) and `{{excluded_appliance_list}}` (appliances-excluded-va); everything else is a bracketed prompt. Clause groups are all among the twelve.

**Open items at the end of the pass** (none blocks a row): the 2025 Acts enactment clauses on the eviction diversion program's former expiry (edu-tpa-sunset-va states only the codified text); Rules of Court Part Six (unauthorized practice; edu-entity-landlord-court-representation-va rests on the statutes); NIST Handbook 44 and 2VAC5 (EV charger metering); Section 504 cost rules, 24 C.F.R. Part 8 (disability-modification-restoration-mn VA segment hedged); 15 U.S.C. § 1692f (collection-fee row softened); § 36-156.1 and Va. Const. art. IV, § 13 (item 10); Board of Health regulations under the 2026 amendment to § 32.1-248.1 (none adopted as of 2026-11-07; edu-pool-safety-va says to check).

- (item-5-keys) Item 5, `keys`: reads correctly under Virginia law; no override. Va. Code Ann. § 55.1-1209.1 applies only to 'Any landlord who owns more than 200 rental dwelling units that are attached to the same piece of real property in the Commonwealth' (Va. Code Ann. § 55.1-1209.1(B)) and requires that landlord's own employee-screening and key-control policies; nothing in it limits the clause. Va. Code Ann. § 55.1-1221 lets a locality require dead bolts, peepholes and sliding-door and window locks for landlords renting 'five or more dwelling units in any one multifamily building' (Va. Code Ann. § 55.1-1221); it imposes no tenant charge rule. The clause's re-key charge when keys aren't returned or a replacement is needed is a charge for the tenant's own breach or request, not a fee 'for the maintenance or repair of any dwelling unit' that Va. Code Ann. § 55.1-1208(C) bars (that subsection's own exception, 'Unless necessitated by the tenant's violation of a requirement of this chapter', is not needed for it; no Virginia decision on re-keying charges was searched). The no-duplication sentence doesn't reach a lock a tenant installs under Va. Code Ann. § 55.1-1229(D) or § 55.1-1230(A), since those keep the tenant's right to install and require 'A duplicate of all keys' to go to the landlord (Va. Code Ann. § 55.1-1229(D)(2)); the protective-order lock change is at 'the landlord's actual cost' (Va. Code Ann. § 55.1-1230(A)), which the clause's replacement-cost sentence matches, and the landlord 'shall not provide copies of any keys to the dwelling unit to any person excluded from the premises by such order' (Va. Code Ann. § 55.1-1230(C)), which the clause doesn't touch.
- (item-6) Item 6. `smoking-policy`: reads correctly. No Virginia statute protects smoking or vaping of marijuana or tobacco in rented housing or limits a lease ban; Title 4.1 legalises adult possession and home cultivation (Va. Code Ann. §§ 4.1-1100, 4.1-1101) with no landlord or tenant rule (battery VA-G-0001; `edu-cannabis-va`); the only landlord-owner rule found is the bar on knowingly allowing home manufacture of marijuana concentrate (Va. Code Ann. § 4.1-1101(C)). `no-alterations`: reads correctly. The savings sentence ("does not limit any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform") preserves the Virginia Fair Housing Law right: discrimination includes 'a refusal to permit, at the expense of the disabled person, reasonable modifications of existing premises occupied or to be occupied by any person if such modifications may be necessary to afford such person full enjoyment of the premises' (Va. Code Ann. § 36-96.3(B)), and the clause's "remain part of the property ... unless Landlord requires its removal" matches the landlord's right to 'condition permission for a modification on the renter's agreeing to restore the interior of the premises to the condition that existed before the modification, reasonable wear and tear excepted' (Va. Code Ann. § 36-96.3(B)); FEDERAL: 24 C.F.R. § 100.203 (saved) is to the same effect. `addendum-precedence`: reads correctly. Virginia's required lease statements are the fee itemization 'beginning on the first page of the written rental agreement' with its fixed sentence (Va. Code Ann. § 55.1-1204.1; `fee-disclosure-statement-va`), and the Department of Housing and Community Development statement of tenant rights, which the landlord 'shall provide with' the written rental agreement plus the signed acknowledgment form (Va. Code Ann. § 55.1-1204(B); `tenant-rights-statement-va`); the clause makes any required disclosure control over a conflicting lease term, which can't breach either. One drafting point, no defect: the fixed sentence lets a deposit or rent charge be added 'by way of a separate addendum after execution of this rental agreement' (Va. Code Ann. § 55.1-1204.1); because the clause makes the Lease control over a conflicting addendum, a later fee addendum should say expressly that it amends the Lease.
- (item-7b) Item 7(b): `holdover-ca` and `holdover-rate-va` still match Va. Code Ann. § 55.1-1253. The section's "history line" ends 2023, c. 679 and it is not on the 2026 Updates list, so the 2026 session didn't change it. holdover-ca's month-to-month continuation matches (D): 'the terms of the terminated agreement shall remain in effect and govern the hold-over or month-to-month tenancy'; holdover-rate-va matches (C): 'not to exceed an amount equal to 150 percent of the per diem of the monthly rent, for each day the tenant remains in the dwelling unit after the termination date specified in the landlord's notice' (Va. Code Ann. § 55.1-1253(C)), with the HUD per-diem cap.
- (item-7c) Item 7(c): no VA eviction row contradicts `edu-cares-act-notice`. `edu-termination-notices-va` states the 14-day nonpayment notice (Va. Code Ann. § 55.1-1245(F)) and `edu-eviction-process-va` the court steps; neither says a landlord may file once the 14 days run, so neither denies the federal 30-day notice to vacate for covered properties (FEDERAL: 15 U.S.C. § 9058(c), saved). The new `nonpayment-notice` row written in this pass points to `edu-cares-act-notice` so a landlord with a federally backed loan sees both.
- (liquidated-damages) Main pass on S01's question about `early-termination-ks` (rule 76, decided, not asked): the canvass recommended keeping the VA tag because the fee is the price of an option the tenant chooses. The main pass instead proposes the flat one-month VA override in §6 (`early-termination-va`), for the same reason GA, SC and AZ were given one: a fee that grows with the remaining term sits uneasily beside Virginia's mitigation duty and its bar on accelerated rent (Va. Code Ann. § 55.1-1251), and the Consumer Protection Act raises the cost of being wrong (Va. Code Ann. § 59.1-200(A)(13)). Both views rest on case law not read; the override is the cautious course and needs Taylor's approval at sync. The tag stays until then; `edu-liquidated-damages-va` is accurate under either outcome.
- (jury-waiver) Main pass on S01's question (rule 76, decided, not asked): no optional jury-waiver clause for Virginia, as in most states in the library. A jury is never the default in a Virginia civil case and unlawful detainers start in general district court without one, so the clause would matter only in circuit court; its enforceability against a right the Constitution says 'ought to be held sacred' (Va. Const. art. I, § 11) is case law not read. `edu-jury-waiver-va` records the declined option (rule 54).
- (binding-arbitration) Arbitration (Virginia item 8): Virginia meets Taylor's offer rule (S01's decision above, adopted). The shared `arbitration-agreement` clause was not tagged in this pass, as the prompt directs; before Claude Code tags it, check it against the right to counsel in Va. Code Ann. § 8.01-581.05 and the 2026 consumer pre-dispute rules in Va. Code Ann. §§ 8.01-581.017 to 8.01-581.021 (fee payment within 30 days, neutral selection), and carve out rent escrow (§ 55.1-1244) and the lockout petition (§ 55.1-1243.1) as well as possession, as `edu-binding-arbitration-va` advises.
- (deposit-cost-schedule) Main pass on S02's questions (rule 76, decided, not asked). No optional schedule of fixed move-out charges and no optional interest-on-unpaid-amounts clause for Virginia. Both are arguably lawful, but each carries a statutory trap a fixed figure can spring: a pre-set cleaning or turnover charge may be a fee 'for the maintenance or repair of any dwelling unit' not 'necessitated by the tenant's violation of a requirement of this chapter' (Va. Code Ann. § 55.1-1208(C)), and interest on overdue rent likely counts against the late-charge cap of 'the lesser of 10 percent of the periodic rent or 10 percent of the remaining balance due and owed by the tenant' (Va. Code Ann. § 55.1-1204(E)), with the Consumer Protection Act's penalty-clause rule behind both (Va. Code Ann. § 59.1-200(A)(13)). The education rows (`edu-no-deposit-cost-schedule-va`, `edu-unpaid-amount-interest-va`) say the library declines them and how a landlord can charge actual costs instead (rule 54).
- (governmental-fines) Main pass on S04's question (rule 76, decided, not asked). No Virginia-only fine-reimbursement clause and no tag of tenant-caused-fines-as. Any lease charge must be listed in the first-page fee disclosure or a later addendum under Va. Code Ann. § 55.1-1204.1, and a repair or abatement charge must rest on the tenant's own violation (Va. Code Ann. § 55.1-1208(C)); a general reimbursement promise risks both. The landlord recovers a fine the tenant caused as damages for the breach. edu-governmental-fines-va stays as written.
- (tax-escalation) Main pass on S04's question (rule 76, decided, not asked). No Virginia tax escalation clause. Va. Code Ann. § 55.1-1204.1 requires the rent for each payment period on the first page and bars additional rent not listed there or added by a later addendum; a mid-term pass-through clause invites a dispute over that bar for little gain. edu-tax-escalation-va stays: build taxes into rent and adjust at renewal or by a signed addendum.
- (landlord-registration) Main pass on S04's fetch request. The request named 18VAC135-60, which is the repealed Common Interest Community Management Information Fund chapter; the Fair Housing Board is agency 62. 18VAC62-20 (Fair Housing Certification Regulations, amended eff. January 14, 2026) was read in the built-in browser, saved with SHA-256 checks, and edu-landlord-registration-va was revised to state it, with the cautious course (get certified) because the chapter does not say in terms that certification is mandatory.
- (repair-cost-termination) Main pass on S06's question (rule 76, decided, not asked). No landlord repair-cost termination clause for Virginia: no statute gives the right, it sits against the repair duty in Va. Code Ann. § 55.1-1220(A)(2), and using it after a repair complaint risks a retaliation finding under Va. Code Ann. § 55.1-1258. edu-no-repair-cost-termination-va stays; casualty-termination-va and a written early-termination agreement cover the lawful routes.
- (environmental-event-termination) Main pass on S06's question (rule 76, decided, not asked). No opt-in landlord termination clause for environmental events for now: it would need carve-outs (no use where the landlord's own repair failure caused the event, rent stopping on the event date, deposit and prepaid rent returned) and it risks a retaliation finding under Va. Code Ann. § 55.1-1258. edu-no-environmental-event-termination-va stays; casualty-termination-va and a written early-termination agreement cover most cases.
- (animal-care-access) Main pass on S06's question (rule 76, decided, not asked). No Virginia caretaker-entry clause. Va. Code Ann. § 55.1-1229(C) limits the landlord's access to the listed grounds, and a clause letting the landlord admit a third party invites a dispute over that limit. A tenant who wants a caretaker gives that person a key; the landlord enters itself only in an emergency or on notice. edu-no-animal-care-entry-right-va stays as written.
- (periodic-services-entry) Accepted S06's choice to offer scheduled-services-entry-va (optional, CONDITIONAL, SERVES_LANDLORD) instead of tagging scheduled-services-entry-la; the clause keeps the 72-hour, 14-day and last-date terms of Va. Code Ann. § 55.1-1229(A)(4) and the 48-hour pesticide notice of Va. Code Ann. § 55.1-1223(A).
- (pool-safety) Main pass on S05's fetch request. No regulation under the 2026 amendment to Va. Code Ann. § 32.1-248.1 has been adopted (agency chapter list, 2026-11-07). The fetch found 12VAC5-462, which already requires daily water-quality testing and posting at public pools, a term that expressly includes apartment and condominium pools; edu-pool-safety-va was revised to state it and is VERIFIED, with a line telling the reader to check for the new regulations.
- (electric-submetering-disclosure) Main pass on S07's fetch requests. Read the State Corporation Commission's submetering rules (20VAC5-305) and disconnection limits (20VAC5-330) in the built-in browser. 20VAC5-305-20 requires every lease for submetered or allocated electricity or gas to state three things, so the main pass added the required clause submetering-lease-statement-va and revised edu-electric-submetering-disclosure-va, edu-utility-interruption-submeter-va, edu-utility-shutoff-statute-va (medical-condition delays) and edu-utility-disconnection-notice-authorization-va. NIST Handbook 44 and 2VAC5 (EV charger measuring devices) were not fetched; the rows that need them say Not located.
- (guarantor-renewal) Main pass on S08's question (rule 76, decided, not asked). guaranty-va does not waive the guarantor's statutory right to require the landlord to sue the tenant first (Va. Code Ann. §§ 49-25, 49-26); a waiver would need its own drafting and review, and the clause works without it. edu-guarantor-renewal-va says so.
- (trespass-notice) Main pass on S08's question (rule 76, decided, not asked). No Virginia barred-guest covenant for now. Va. Code Ann. § 55.1-1246(B) already keeps 'the remedies against the tenant authorized by this chapter' alongside trespass, and a covenant beyond the statute would need carve-outs for a tenant who is a victim of family abuse and for the tenant's court review under § 55.1-1246(C). edu-trespass-notice-va stays; Taylor can ask for an optional clause later.
- (veterans-incentive) Main pass on S08's question (rule 76, decided, not asked). No veterans-only rent concession clause: military status is a protected class under the Virginia Fair Housing Law, so a preference limited to veterans risks a discrimination claim under Va. Code Ann. § 36-96.3(A)(3). edu-no-veterans-incentive-va stays.
- (usufructuary-lessor) Main pass on S10's question (rule 76, decided, not asked). No "Landlord's Life Estate" clause: restating the tenant's right under Va. Code Ann. § 55.1-1703 is education, not a lease term the statute requires, and edu-usufructuary-lessor-va states it. Revisit if Taylor wants a disclosure clause for landlords who hold only a life estate.
- (tpa-sunset) S10's fetch request (2025 Acts chs. 476 and 490, on whether the Eviction Diversion Pilot Program's July 1, 2025 expiry set by 2024 Acts chs. 32 and 42 was removed) was not fetched: the built-in browser was no longer connected when the slice finished. edu-tpa-sunset-va states only what the Code prints (§§ 55.1-1260 and 55.1-1261 with no end date) and says the session law was not read; recorded as open.
- (cure-and-eviction-grounds) Main pass on S09's question (rule 76, decided, not asked). No Virginia clause labeling which lease terms are material: under Va. Code Ann. § 55.1-1245(A) materiality is for the court, so a label adds little and may invite a dispute. edu-cure-and-eviction-grounds-va stays.
- (entity-landlord-court-representation) S09's fetch request (Rules of the Supreme Court of Virginia, Part Six, Section I, unauthorized practice) was not fetched: the held rulebook has no Part Six and the browser link had closed. edu-entity-landlord-court-representation-va rests on the statutes (§§ 16.1-88.03, 55.1-1257, 54.1-3904) and states the cautious course (a lawyer for contested trials, appeals and circuit court); recorded as open.
- (ev-charging-requirements) S07's fetch request (NIST Handbook 44 as adopted under § 3.2-5620, and any 2VAC5 regulation) was not fetched; the rows that need it say Not located (rule 36). Recorded as open.
- (optional-lease-terms) Virginia law allows a lease with an option to purchase, but the library declines to offer one for Virginia: a lease-option of one to four residential units triggers the Residential Property Disclosure Act (Va. Code Ann. §§ 55.1-701, 55.1-709) and, where the buyer occupies as a primary residence, the non-waivable residential executory real estate contract rules (Va. Code Ann. §§ 55.1-3000 to 55.1-3002). edu-optional-lease-terms-va says so (rule 54: a lawful option the library declines gets an education row).
- (binding-arbitration) Virginia meets Taylor's offer rule for the arbitration clause. (1) State law allows it: 'A written agreement to submit any existing controversy to arbitration or a provision in a written contract to submit to arbitration any controversy thereafter arising between the parties is valid, enforceable and irrevocable, except upon such grounds as exist at law or in equity for the revocation of any contract.' (Va. Code Ann. § 8.01-581.01); the VRLTA does not mention arbitration and no Virginia statute excludes residential leases. (2) The only possible state-law block is a reading of 'Agrees to waive or forgo rights or remedies under this chapter;' (Va. Code Ann. § 55.1-1208(A)(1)) that treats agreeing to an arbitral forum as a waiver of the Act's remedies; applied to a clause that keeps every substantive remedy, that reading would bite only because the forum is arbitration, which is the kind of arbitration-specific rule FEDERAL: 9 U.S.C. § 2 displaces (the Kindred Nursing Centers v. Clark (2017) holding as Taylor's rule states it; Kindred not read). Court-specific procedures (unlawful detainer, rent escrow under § 55.1-1244, the § 55.1-1243.1 lockout petition) should be carved out, as the shared arbitration-agreement clause already does for possession. (3) No penalty attaches to including a prohibited term: 'Any provision prohibited by subsection A that is included in a rental agreement is unenforceable. If a landlord brings an action to enforce any such provision, the tenant may recover actual damages sustained by him and reasonable attorney fees.' (Va. Code Ann. § 55.1-1208(B)). Exposure arises only on enforcement (a motion to compel is an 'Action' under § 55.1-1200), and the VCPA practice in § 59.1-200(A)(13) reaches liquidated damage clauses, penalty clauses and waivers of defense, not an arbitration clause that keeps every defense. Conditions for the main pass before any VA tag of arbitration-agreement: check it against § 8.01-581.05 (counsel; the clause keeps it), §§ 8.01-581.017 to 8.01-581.021 (2026, c. 490: drafter must pay required fees within 30 days or is in default and waives arbitration; neutral selection by high-volume providers; these are material terms by § 8.01-581.021(C); whether a tenant is a 'consumer' is unsettled), and consider adding rent escrow and the lockout petition to the clause's not-covered list in the VA segment. Not tagged by this slice.
- (security-deposit-cap) Builder note M.13 confirmed, with one cautious extension. Text: a lease may not provide that the tenant 'Agrees to the payment of a security deposit, insurance premiums for damage insurance, and insurance premiums for renter's insurance prior to the commencement of the tenancy that exceed the amount of two months' periodic rent;' (Va. Code Ann. § 55.1-1208(A)(7)); 'If the landlord requires that such premiums be paid to the landlord prior to the commencement of the tenancy, the total amount of all security deposits, insurance premiums for damage insurance, and insurance premiums for renter's insurance shall not exceed the amount of two months' periodic rent.' (Va. Code Ann. § 55.1-1206(C)); 'No landlord may demand or receive a security deposit, however denominated, in an amount or value in excess of two months' periodic rent.' (Va. Code Ann. § 55.1-1226(A)). So the build check is: security deposit (all components, pet deposit included) + damage-insurance premiums paid before commencement + renter's-insurance premiums paid before commencement <= 2 x periodic rent, and the deposit alone <= 2 x periodic rent. Extension: § 55.1-1206(A) also says 'the landlord shall not require a tenant to pay both a security deposit and the cost of damage insurance premiums if the total amount of any security deposit and damage insurance premiums exceeds the amount of two months' periodic rent.' (Va. Code Ann. § 55.1-1206(A)), without the words 'prior to the commencement of the tenancy'; it opens 'as provided in § 55.1-1208', which points to the prepaid reading, but the cautious builder flag is a warning (not a block) where the lease requires both a deposit and damage-insurance premiums over the term whose total exceeds two months' rent. Monthly renter's-insurance premiums added as rent after commencement are outside the cap (§ 55.1-1206(C), second sentence).
- (required-fees) Shared fees-and-charges-vi (topic required-fees) is not tagged for Virginia: its sentence "Landlord will not charge Tenant any other fee or charge except an amount stated in another Section of this Lease" conflicts with the statutory sentence that 'No additional security deposits or rent shall be charged unless they are listed below or incorporated into this agreement by way of a separate addendum after execution of this rental agreement.' (Va. Code Ann. § 55.1-1204.1), since every fee owed under a Virginia lease is rent (Va. Code Ann. § 55.1-1200). Virginia's fee list is fee-disclosure-statement-va; the topic is answered by edu-required-fees-va.
- (disability-accommodation) Tagged disability-modification-restoration-mn (MN;SC) with VA rather than writing a VA clause: its text has no state citation and tracks Va. Code Ann. § 36-96.3(B) and 18VAC135-50-200(C) sentence by sentence. Virginia's optional interest-bearing restoration escrow (18VAC135-50-200(C)(1)) is not offered as a clause: the regulation lets the landlord 'negotiate as part of such a restoration agreement' at the time of a request, so a standing lease term would add little; edu-disability-accommodation-va explains it (rule 54).
- (criminal-activity) Wrote criminal-activity-va rather than tagging criminal-activity-ky. The shared clause is lawful in Virginia, but its last sentence excludes any criminal activity in which the tenant or a household member is the victim and any request for police help, limits Virginia's statute doesn't impose (Va. Code Ann. § 55.1-1245(D) covers only family abuse with the abuser barred; edu-no-police-call-protection-va records no police-call statute), and it omits the immediate-termination remedy and the knowledge presumption of Va. Code Ann. § 55.1-1245(C). Under rule 26 a row that adds limits Virginia doesn't have doesn't state Virginia's law as written.
- (dv-protection-order-chapter-moved) edu-dv-law-citations-va was re-saved (same id, replaces the earlier object) to add that Va. Code Ann. § 15.2-907(A) cites Article 3 of Chapter 8 of Title 18.2 as beginning at § 18.2-346, while § 55.1-1236(A) cites it as beginning at § 18.2-344 (repealed). Possible SOP/legal-watch note: a stale first-section number in an 'et seq.' cross-reference.
- (home-business) No optional "home business permitted" clause is drafted for Virginia. The default under Va. Code Ann. § 55.1-1232 already favors the landlord ("Unless otherwise agreed" the unit is a residence only), the shared residential-use-only clause states it, and a landlord who wants to allow a particular business can write the exception by hand. The education row edu-home-business-va says so.
- (family-child-care) Offered family-child-care-va as an optional CONDITIONAL clause (never a default) because Va. Code Ann. § 55.1-1208.1 makes child care in an apartment a permission that exists only if the rental agreement provides for it (rule 54). It carries no insurance or indemnity term: a release or indemnity for the landlord's liability to the tenant is barred by § 55.1-1208(A)(5), and no statute addresses a business-insurance condition. No new {{variables}}; the child count is a bracketed prompt.
- (appliances-excluded) Drafted appliances-excluded-va as an optional CONDITIONAL clause (rule 54) rather than tagging appliances-excluded-la, because Va. Code Ann. § 55.1-1208(A)(5) bars any term limiting the landlord's liability to the tenant arising under law, and the Louisiana row's carve-out for physical injury and intentional or gross fault implies other liability is limited. The Virginia clause uses the existing variable {{excluded_appliance_list}}, adds a no-fee sentence for § 55.1-1208(C), and says the landlord's duty applies if the law treats a listed item as supplied, so it works under either reading of "supplied" in § 55.1-1220(A)(4).
- (lead-state-notices) No clause drafted for the lead-plumbing disclosure in Va. Code Ann. § 54.1-2133(B). The duty falls on a real estate licensee engaged by the landlord, must be in writing, and names no lease vehicle, so under rule 55 it is education (edu-lead-state-notices-va). A landlord whose licensee knows of non-lead-free plumbing can give the written disclosure as a separate signed notice; the library has no Virginia variable for it.
- (periodic-services-entry) Offered scheduled-services-entry-va as an optional (CONDITIONAL) clause rather than tagging scheduled-services-entry-la: the shared clause's example "[state notice, for example 24 hours]" invites less than the 72 hours Va. Code Ann. § 55.1-1229(A)(4) requires for unrequested routine maintenance, while the statute's 'necessary or agreed-upon services' (Va. Code Ann. § 55.1-1229(A)(1)) lets a Virginia lease list agreed services. Bucket SERVES_LANDLORD.
- (ev-charging-shared-area) Did not tag ev-charging-shared-area-co for Virginia. Its first sentence starts from a tenant who "wishes to install a charging system in a parking area accessible to other tenants" and its second binds "any tenant who later has exclusive rights to that space"; both track the Colorado and Illinois installation-right statutes. Virginia gives tenants no installation right (edu-no-ev-charging-right-va), so the consent-based ev-charger-installation-hi (tagged) with a named space does the same work; edu-no-ev-charging-shared-area-va says the library has no separate Virginia shared-area clause.
- (rent-escalation) rent-escalation-va (a fixed schedule of Monthly Rent amounts) is offered for Virginia; an index or formula clause is not. Basis: § 55.1-1204.1 requires 'the amount of rent due per payment period pursuant to the lease period' (Va. Code Ann. § 55.1-1204.1) beginning on the first page; a schedule of fixed amounts is listed, a formula is the unsettled case already decided cautiously for tax-escalation (edu-tax-escalation-va). Builder note: when rent-escalation-va is used, item (ii) of fee-disclosure-statement-va must list each scheduled amount and its period rather than a single {{monthly_rent}} figure; no new variable is introduced (amounts are bracketed prompts).
- (hoa) Did not tag association-approval-la for Virginia. The clause has the tenant sign "any lease addendum or occupancy agreement the association's documents require" and treats "Any deposit or fee the association requires of Tenant" as separate, but Virginia bars an association from requiring an association lease or addendum, taking any deposit, or charging more than $50 in rental, application or processing fees during a lease, 'Except as expressly authorized in this chapter, in the declaration, or as otherwise provided by law' (Va. Code Ann. § 55.1-1806(A); condominium: § 55.1-1973(A)). The clause's text is lawful where the declaration authorizes those items but would mislead in the usual Virginia case; edu-hoa-va states the limits instead. A Virginia-specific approval clause could be drafted if Taylor wants one.
- (hazardous-contamination-disclosure) Offered an optional environmental covenant clause (environmental-covenant-va, SERVES_LANDLORD, RECOMMENDED) although no Virginia statute requires one: a recorded covenant under Va. Code Ann. § 10.1-1241 runs with the land and a violation can draw an enforcement action by anyone whose interest or liability is affected (Va. Code Ann. § 10.1-1247(A)(4)), so the landlord gains by binding the tenant to its limits. Kept the clause free of any entry right so it waives nothing under Va. Code Ann. § 55.1-1208(A)(1).
- (farmland-hunting-rights) Wrote a Virginia clause (farmland-hunting-rights-va) instead of tagging farmland-sporting-rights-co or hunting-rights-ms: both reserve a landlord right to enter or cross leased land to hunt, which may conflict with 'The landlord has no other right to access except by court order or that permitted by §§ 55.1-1248 and 55.1-1249 or if the tenant has abandoned or surrendered the premises.' (Va. Code Ann. § 55.1-1229(C)) if "access" reaches leased grounds, and the Colorado clause's no-responsibility sentence reads as a limitation of liability barred by Va. Code Ann. § 55.1-1208(A)(5). The Virginia clause instead lets the landlord carve hunting land out of the leased premises.

**Questions filed by the canvass** (each answered in the chat or decided under rule 76, see above):
- (liquidated-damages) The shared early-termination-ks clause, tagged VA, lets the tenant end a fixed term early for a fee of one month's rent or 30% of the remaining rent, whichever is greater; Virginia has no statute on such fees, and the Consumer Protection Act makes it a prohibited practice to use a penalty clause that is void under Virginia law (Va. Code Ann. § 59.1-200(A)(13)), while whether an elective early-termination fee is a penalty is a case-law question not read. Should the VA tag stay as it is? Recommendation: Keep the tag: the fee is the price of an option the tenant chooses, not damages fixed for a breach, and the clause preserves the statutory no-liquidated-damages terminations (Va. Code Ann. §§ 55.1-1235(C), 55.1-1236(D)). If Taylor wants a lower risk profile, a Virginia variant could cap the fee at one month's rent.
- (jury-waiver) Some landlords put a clause in the lease saying both sides give up a jury trial; Virginia has no statute on such clauses in leases, evictions start in general district court without a jury, and a jury is available on appeal or in circuit court on any party's application (Va. Code Ann. §§ 8.01-125, 8.01-129(B)). Should the library offer an optional mutual jury waiver for Virginia? Recommendation: No. Its value is small (most cases are tried to a judge in general district court anyway), its enforceability against a right the Constitution says 'ought to be held sacred' (Va. Const. art. I, § 11) is a case-law question not read, and the row as written tells landlords the library declines it.
- (deposit-cost-schedule) Virginia lets a deposit cover 'other damages or charges as provided in the rental agreement' (Va. Code Ann. § 55.1-1226(A)), so a lease could list fixed move-out charges (for example $150 for carpet cleaning if the carpet is left soiled). Should the library offer an optional Virginia clause listing pre-set move-out charges? Recommendation: Decline for now: the tagged Use of Security Deposit clause already covers cleaning, § 55.1-1208(C) bars maintenance or repair fees not necessitated by the tenant's violation, and whether a fixed charge unrelated to cost is a penalty turns on case law not held; the education row tells landlords how to set any charge safely. If offered, it should be CONDITIONAL, charge only on the tenant's failure, and say each amount is an estimate of actual cost.
- (unpaid-damages-interest) Virginia lets a lease rate raise the judgment rate on a contract claim above 6 percent (Va. Code Ann. § 6.2-302(A)); for example a lease saying damages owed after move-out bear 10 percent a year would make a damages judgment earn 10 percent. Should the library offer an optional Virginia clause charging interest on unpaid amounts? Recommendation: Decline for now (the education row says so). In Virginia nearly every amount owed under a lease is rent (Va. Code Ann. § 55.1-1200), interest on late rent likely counts against the 10 percent late-charge cap (§ 55.1-1204(E)), and whether a lease rate is a 'forbearance' under the 12 percent limit (§§ 6.2-300, 6.2-303) is unsettled, with a voiding sanction. If offered later, limit it to post-termination damages under § 55.1-1251, cap it at 12 percent, and make it CONDITIONAL.
- (governmental-fines) Virginia has no statute on passing a government fine to a tenant, and the shared clause tenant-caused-fines-as (tenant reimburses fines and abatement charges the tenant's side caused, within a set number of days after notice) is not tagged for Virginia because a reimbursement owed under the lease is rent that Va. Code Ann. § 55.1-1204.1 says may not be charged unless listed in the first-page fee disclosure or a later addendum, and because a nuisance-abatement cost can be a maintenance or repair fee that Va. Code Ann. § 55.1-1208(C) allows only when necessitated by the tenant's violation of the Act. For example, a city fines the owner $250 for trash left out by the tenant. Should the library draft a Virginia-only optional clause that limits reimbursement to fines and charges caused by the tenant's breach of the lease or of the tenant's statutory duties, treats the amount as damages, and tells the landlord to list it on the fee disclosure? Recommendation: Not now. Keep the education row edu-governmental-fines-va (recover as damages for breach, with the citation as proof) and revisit if a Virginia court or the General Assembly addresses contingent charges under § 55.1-1204.1.
- (tax-escalation) Virginia has no statute on real estate tax escalation clauses in residential leases, and the shared clauses on this topic (tax-insurance-escalation-la and similar) raise rent during the term by the tenant's share of a tax increase. For example, a lease at $1,800 a month adds $25 a month after the county raises the assessment. Because Va. Code Ann. § 55.1-1204.1 requires the rent per payment period to be itemized on the first page and says no additional rent may be charged unless listed there or added by a later addendum, should the library offer any Virginia tax escalation clause? Recommendation: No clause. Keep edu-tax-escalation-va: build taxes into rent and adjust at renewal or by the 30-day holdover notice; a landlord who wants a mid-term increase uses a signed addendum.
- (repair-cost-termination) Some landlords want a lease term letting them end a fixed-term lease early when a needed repair would cost more than, say, six months' rent; Virginia has no statute on it (VA-G-0605). Should the library offer such an optional clause for Virginia? Recommendation: No. No statute provides the right, it sits against the duty to 'Make all repairs and do whatever is necessary to put and keep the premises in a fit and habitable condition;' (Va. Code Ann. § 55.1-1220(A)(2)), and using it after a repair complaint risks a retaliation finding (Va. Code Ann. § 55.1-1258). The education row says the library offers none; casualty-termination-va and the written early-termination agreement in Va. Code Ann. § 55.1-1253(A) cover the lawful routes.
- (environmental-event-termination) Some landlords want an optional clause letting them end the lease after an environmental event that makes the unit unlawful or unsafe to occupy, such as a contamination order with no fire damage; Virginia has no statute on it (VA-G-0617), and casualty-termination-va covers only 'fire or casualty' (Va. Code Ann. § 55.1-1240 (effective until January 1, 2027)). Should the library offer such a clause for Virginia? Recommendation: Not now. A reserved right would be a contract term the statute neither gives nor bars, but it would need carve-outs (no use where the event comes from the landlord's own repair failure, rent stopping on the event date, deposit and prepaid rent returned) and it risks a retaliation finding if used after a complaint (Va. Code Ann. § 55.1-1258). The written early-termination agreement in Va. Code Ann. § 55.1-1253(A) and the casualty clause cover most cases; revisit if Taylor wants an opt-in.
- (animal-care-access) Other states use an optional clause (animal-care-access-vi) letting the landlord admit a tenant-named caretaker when an animal is left without care; in Virginia 'The landlord has no other right to access except by court order or that permitted by §§ 55.1-1248 and 55.1-1249 or if the tenant has abandoned or surrendered the premises.' (Va. Code Ann. § 55.1-1229(C)). Should the library draft a Virginia version? Recommendation: Only a narrow one, if at all: the tenant names a caretaker and gives that person a key directly, the landlord's role is limited to calling the caretaker and then animal control, and the landlord enters itself only in an emergency or on notice under Va. Code Ann. § 55.1-1229(A)(4). Until Taylor decides, the education row stands alone.
- (guarantor-renewal) A Virginia guarantor who receives no notice can be sued directly, but one who sends written notice after a default can force the landlord to sue the tenant within 30 days or lose the guaranty (Va. Code Ann. §§ 49-25, 49-26). Should the library's Virginia guaranty clause add a waiver of the guarantor's right to require suit, which case law may or may not enforce? Recommendation: No waiver for now: guaranty-va is drafted to work under every reading, and edu-guarantor-renewal-va tells the landlord to sue promptly on a guarantor's notice. Revisit if Virginia case law on waiver of §§ 49-25 and 49-26 is read.
- (trespass-notice) Virginia lets a landlord bar a tenant's guest by a personally served written notice (Va. Code Ann. § 55.1-1246), but the library has no Virginia clause making it a lease violation for the tenant to let a barred guest back in, as barred-person-covenant-ne does for Nebraska. Should the library offer an optional Virginia covenant of that kind? Recommendation: Offer it as an optional SERVES_LANDLORD clause, limited to persons barred under § 55.1-1246 (notice served on the guest and a copy on the tenant), with the tenant's right to court review stated and a carve-out matching § 55.1-1245(D) for a tenant who is a victim of family abuse; not drafted in this slice because the main pass should decide whether a tenant covenant beyond the statute is wanted.
- (veterans-incentive) Virginia's Fair Housing Law bars any advertisement 'that indicates any preference, limitation, or discrimination or an intention to make any such preference, limitation, or discrimination on the basis of race, color, religion, national origin, sex, elderliness, familial status, source of funds, sexual orientation, gender identity, military status, or disability.' (Va. Code Ann. § 36-96.3(A)), and military status includes veterans. A landlord who advertises "$100 off for veterans" may be stating a preference based on military status. Should the library treat a veterans-only concession as unlawful in Virginia, or offer an optional concession clause like veteran-servicemember-concession-ne? Recommendation: Offer no Virginia concession clause; keep edu-no-veterans-incentive-va's cautious course unless Fair Housing Board or HUD guidance read later says a benefit-conferring preference for a protected class is permitted.
- (cure-and-eviction-grounds) Some landlords want a lease term listing which rules are material (for example, "unauthorized pets and smoking are material breaches"), so a 21/30-day notice can rest on them; Virginia's Code does not define material noncompliance (VA-G-0904). Should the library offer an optional Virginia clause naming material terms? Recommendation: No. A court decides materiality under Va. Code Ann. § 55.1-1245(A), so the label adds little, and the shared default-by-tenant clause (tagged VA) already covers notice and cure; the education row says a label may not settle it.
- (usufructuary-lessor) A landlord who holds only a life estate (for example a parent who kept a life interest after deeding a house to the children) can sign a lease the remaindermen don't join; at the landlord's death the tenant may stay only through the end of the current year of the tenancy (Va. Code Ann. § 55.1-1703). Should the Virginia library offer an optional "Landlord's Life Estate" clause, for use only when the landlord holds a life estate, stating that fact, naming the remaindermen, and saying that if Landlord's interest ends the tenant may hold through the end of the current year of the tenancy paying rent as Va. Code Ann. § 55.1-1703 provides? Recommendation: Yes, as an optional RECOMMENDED SERVES_LANDLORD clause that restates § 55.1-1703 without shortening it (no term making the lease end at death), so the tenant cannot later claim the landlord concealed a limited interest. Not drafted in this pass; the education row edu-usufructuary-lessor-va covers the rule meanwhile.

### §5 Independent check

Rule 80, scaled as the prompt directs: at most two rounds, one checking agent at a time, each given only the rows and the primary text (`ref/CHECK-BRIEF.md`), not the canvass's reasoning. Every erratum was applied as an exact old -> new replacement by script (`tools/errata.py`; the erratum files are kept in `ref/check/`), re-validated (quotes, fields, battery citations), and the delta rebuilt.

**Round 1** (2026-11-08; four batches covering all 243 new rows and 11 tagged rows): 0 ERROR in every batch; R1a (77 rows) 12 FIX and 6 NOTE; R1b (55) 7 FIX and 8 NOTE; R1c (52) FIX in 17 rows and NOTE in 4; R1d (70) 10 FIX and 8 NOTE. All were applied, editing 69 rows (19, 16, 21 and 13). The recurring defect was a dropped statutory qualifier (willfully, the small-owner fair housing exemption, "unless the rental agreement provides", who an exemption covers, the 2027 start date of only part of a rule); a second was a stale "not held" line left in a row after the regulation it named had been read in the browser. Batch summaries: `ref/check/R1a-findings.txt` to `R1d-findings.txt`. The main pass made three further edits from its own checks (edu-ordnance-demolition-meter-disclosures-va before R1c checked it; edu-landlord-registration-va and edu-utility-deposit-return-va after).

**Round 2** (2026-11-08; the 70 rows edited after round 1, listed in `ref/check/R2.txt`): 0 ERROR, 5 FIX, 5 NOTE and one battery-wording item, all applied. Round 2 confirmed the round-1 edits except where they had themselves dropped a word: three rows restating the landlord's fix-and-bill remedy left out "materially", the repair-or-cleaning condition and the itemized bill (Va. Code Ann. § 55.1-1248); one fair housing row still gave only the small-owner exemption; the prepaid-rent row turned the condemnation statute's causal link into a timing link. The main pass then made the same § 55.1-1248 correction in one more row a script search found (edu-no-alarm-tampering-fee-va) and reworded one rerun count so the validator reads it as a rerun, not a logged count. Round 2 was not clean, and the prompt allows no third round.

**Rows edited after the last round** (12): `edu-bed-bug-cooperation-va`, `edu-cure-and-eviction-grounds-va`, `edu-last-month-rent-va`, `edu-meter-conservation-charge-va`, `edu-no-alarm-tampering-fee-va`, `edu-no-animal-care-entry-right-va`, `edu-no-eviction-penalty-rule-va`, `edu-no-subsidy-proration-rule-va`, `edu-pest-control-notice-va`, `edu-pool-safety-va`, `edu-subsidy-late-fee-va`, `edu-written-notice-required-va`. Each edit is an exact replacement taken from the round-2 checker's errata (`ref/check/errata-R2.py`) or, for the two main-pass edits, `ref/check/errata-main3.py`; all quotes re-check and the validator reports no problems. These rows were not seen by a checker after their last edit.

### §6 Findings on existing rows



- `hoa-compliance` (hoa-compliance): Item 5, `hoa-compliance` (VA tagged 2026-09-28; segment says only "No conflicting Virginia statute"). The clause binds the tenant to "the association's rules and regulations applicable to the property" with no condition. In Virginia a rule binds a tenant only under Va. Code Ann. § 55.1-1228: it is 'enforceable against the tenant only if' six conditions hold, the sixth being 'The tenant has been provided with a copy of the rules and regulations or changes to such rules and regulations at the time he enters into the rental agreement or when they are adopted.' (Va. Code Ann. § 55.1-1228(A)(6)); a later rule binds 'if reasonable notice of its adoption or change has been given to the tenant and it does not constitute a substantial modification of his bargain', and one that does 'shall not be valid unless the tenant consents to it in writing' (Va. Code Ann. § 55.1-1228(B)). Whether § 55.1-1228 reaches association rules the lease incorporates (the section speaks of rules 'A landlord, from time to time, may adopt') is not settled by the text; no case was searched. The clause can't waive those conditions (Va. Code Ann. § 55.1-1208(A)(1)), so the risk is an unenforceable rule, not a penalty. Fine pass-through is lawful: the association assesses charges against its member (the owner) 'for any violation of the declaration or rules and regulations for which the member or his family members, tenants, guests, or other invitees are responsible' (Va. Code Ann. § 55.1-1819(B)), capped at '$50 for a single offense or $10 per day for any offense of a continuing nature' for 90 days (Va. Code Ann. § 55.1-1819(D)); condominium charges are in Va. Code Ann. § 55.1-1959. Occupancy limits: a condominium association may limit occupancy 'To the extent expressly provided in the condominium instruments' (Va. Code Ann. § 55.1-1960); the clause covers it. Recommended at sync: a VA override, or a uniform shared edit if other tagged states agree, reading "If the property is located within a homeowner or condominium association, Tenant will comply with the association's rules and regulations applicable to the property, a copy of which Landlord has given Tenant before Tenant signed this Lease. A rule the association adopts or changes later binds Tenant once Landlord gives Tenant reasonable notice of it, unless it substantially modifies Tenant's bargain, in which case it binds Tenant only if Tenant agrees in writing. Any fines the association charges because of a violation by Tenant, an occupant or a guest will be Tenant's responsibility." The last sentence keeps the shared clause's fine rule and names the persons § 55.1-1819(B) names.
- `utility-billing-va` (electric-submetering-disclosure): utility-billing-va (existing, VA) states the billing method, billing period, service charges, late charge and testing, but not the three statements the Commission requires in every lease for submetered or allocated electricity or gas: 'All rental agreements and leases between the owner and the tenants shall clearly state that the dwelling unit, nonresidential rental unit, or campsite utilizes submetering or energy allocation equipment, that the basis of bills for electric or natural gas consumption will be rendered based on readings of such equipment, and that any disputes relating to the amount of the tenant's bill and the accuracy of the equipment will be between the tenant and the owner.' (20VAC5-305-20). This pass adds them as the separate required clause submetering-lease-statement-va (CONDITIONAL, REQUIRED_DISCLOSURE: 20VAC5-305-20). Recommended at sync: show the two clauses together when the builder selects electric or gas submetering or energy allocation, or fold the three statements into utility-billing-va's VA text.
- `edu-rent-payment-rules-va` (rent-receipts): The row says "from July 1, 2027, the same statement must be provided within 10 business days of a written request for tenant records (in writing or by a free portal)" without the statute's size exemption. The 2027 text adds: 'The provisions of this subsection shall not apply to any landlord that owns fewer than four rental dwelling units or less than a 10 percent interest in more than four rental dwelling units, whether individually or through a business entity, in the Commonwealth unless such landlord receives any state or local rental or utility assistance funds on behalf of the tenant.' (Va. Code Ann. § 55.1-1209(F) (effective July 1, 2027)). Proposed wording: "from July 1, 2027, a landlord with four or more units (or any landlord receiving state or local rental or utility assistance for the tenant) must provide the same statement within 10 business days of a written request for tenant records (in writing or by a free portal)". The nonpayment-notice sentence is unaffected: § 55.1-1202(E) (effective July 1, 2027) has no size exemption. edu-rent-receipts-va (new) states the exemption.
- `edu-dv-tenancy-protections-va` (dv-lockchange): The row says "A tenant or occupant with a non-ex parte court order excluding a co-tenant may have the locks changed". The statute limits the right to two kinds of order: 'A tenant or authorized occupant who has obtained an order from a court pursuant to § 16.1-279.1 or subsection B of § 20-103 granting such tenant possession of the premises to the exclusion of one or more co-tenants or authorized occupants may provide the landlord with a copy of that court order' (Va. Code Ann. § 55.1-1230(A)); a protective order under § 19.2-152.10 or a preliminary order under § 16.1-253.1 does not qualify, even if not ex parte. Proposed wording: "A tenant or authorized occupant with a full family abuse protective order or a divorce or custody court exclusion order (not entered ex parte) granting possession to the exclusion of a co-tenant or occupant may ask the landlord to install new exterior locks or security devices at the landlord's actual cost, or to let the tenant do so". The new row edu-dv-lockchange-va states the narrower rule.
- `edu-tenant-records-va` (employee-screening): The row says "A landlord with more than 200 units on one property must have key-control policies and background checks for employees with key access." The statute applies to applicants for employment, pre-hire, and exempts two classes: 'The provisions of this section shall not apply to (i) a financial institution, as defined in § 6.2-100, or (ii) any person who is a real estate licensee pursuant to Chapter 21 (§ 54.1-2100 et seq.) of Title 54.1.' (Va. Code Ann. § 55.1-1209.1(C)). Proposed wording: "A landlord with more than 200 units attached to one property must have key-control policies and a policy requiring a pre-employment criminal history check for job applicants who will have key access (financial institutions and real estate licensees are exempt)." The new row edu-employee-screening-va states the full rule.
- `keys` (key-control-policy): The VA segment of the shared keys row says "landlords with more than 200 units need key policies (Va. Code Ann. § 55.1-1209.1)". The statute reaches only a landlord 'who owns more than 200 rental dwelling units that are attached to the same piece of real property in the Commonwealth' (Va. Code Ann. § 55.1-1209.1(B)) and 'shall not apply to (i) a financial institution, as defined in § 6.2-100, or (ii) any person who is a real estate licensee pursuant to Chapter 21 (§ 54.1-2100 et seq.) of Title 54.1.' (Va. Code Ann. § 55.1-1209.1(C)). Proposed wording for the segment: "landlords owning more than 200 rental units attached to the same piece of real property must have an employee background-check policy and written key and electronic-code policies, except financial institutions and real estate licensees (Va. Code Ann. § 55.1-1209.1; edu-key-control-policy-va)." Notes only; the clause text is unaffected.
- `edu-towing-va` (parking-rules-notice): edu-towing-va states the sign rule only (its notes say § 46.2-1231 was read "to subsection C"). It omits the 2024 rule for landlord-owned multifamily lots: 'for a resident's vehicle parked in the parking lot of a multifamily dwelling unit, for which the parking lot is owned and maintained by the landlord, the towing operator for such parking lot, prior to the towing of such vehicle for an expired vehicle registration or expired vehicle inspection sticker, shall post written notice on the vehicle' (Va. Code Ann. § 46.2-1231(G)), with a 48-hour wait, a copy to the landlord, reimbursement of towing and storage charges and a civil penalty of up to $100 if skipped; every local towing ordinance must contain the same rule (Va. Code Ann. § 46.2-1232(E)). Proposed added sentence: "In a multifamily lot you own and maintain, a resident's vehicle that you know belongs to a resident (by permit, registry or other identification) and that meets the lease's vehicle requirements may not be towed for an expired registration or inspection sticker until 48 hours after the towing operator posts a dated written notice on it; the operator must send you a copy, and if it skips the notice it repays the towing and storage charges and faces a civil penalty of up to $100." The shared parking-vehicle-rules clause (tagged VA) allows towing for expired registration "in accordance with applicable law", which stays correct.
- `tenant-maintenance` (prohibited-acts-renter): The VA segment of shared tenant-maintenance lists "Va. Code Ann. § 55.1-1227(A)(1), (2), (4), (5), (7)" as its basis, but the clause text does not itself state subdivision 7: '7. Not deliberately or negligently destroy, deface, damage, impair, or remove any part of the premises or permit any person, whether known by the tenant or not, to do so;' (Va. Code Ann. § 55.1-1227(A)). Severity NOTE (the statute binds the tenant regardless). The new clause prohibited-acts-renter-va states subdivision 7; proposed wording for the tenant-maintenance VA segment: replace "(7)" with "(7) (stated in prohibited-acts-renter-va)".
- `edu-no-radon-disclosure-va` (hazardous-contamination-disclosure): The Residential Property Disclosure Act reaches a lease with an option to buy: 'The provisions of this chapter apply only with respect to transfers by sale, exchange, installment land sales contract, or lease with option to buy of residential real property consisting of not less than one nor more than four dwelling units, whether or not the transaction is with the assistance of a licensed real estate broker or salesperson.' (Va. Code Ann. § 55.1-701). The row says "The only radon disclosure in the Code is a buyer-beware statement for home sales." That holds for a plain lease, but a landlord who gives a one-to-four-unit lease with an option to buy must deliver the Real Estate Board's residential property disclosure statement (Va. Code Ann. §§ 55.1-703, 55.1-709), which includes the radon-zone and flood items. Proposed added sentence: "If you lease a one-to-four-unit home with an option to buy, the Residential Property Disclosure Act applies, and its buyer-beware statement (which covers this subject) must be given before the contract is signed."
- `edu-no-flood-disclosure-va` (hazardous-contamination-disclosure): The Residential Property Disclosure Act reaches a lease with an option to buy: 'The provisions of this chapter apply only with respect to transfers by sale, exchange, installment land sales contract, or lease with option to buy of residential real property consisting of not less than one nor more than four dwelling units, whether or not the transaction is with the assistance of a licensed real estate broker or salesperson.' (Va. Code Ann. § 55.1-701). The row says "Sales flood disclosure (§ 55.1-703 and nearby) not applicable to leases." That holds for a plain lease, but a landlord who gives a one-to-four-unit lease with an option to buy must deliver the Real Estate Board's residential property disclosure statement (Va. Code Ann. §§ 55.1-703, 55.1-709), which includes the radon-zone and flood items. Proposed added sentence: "If you lease a one-to-four-unit home with an option to buy, the Residential Property Disclosure Act applies, and its buyer-beware statement (which covers this subject) must be given before the contract is signed."
- **Proposed row** `early-termination-va` (topic `early-termination`): Item 7(a): proposed VA override of early-termination-ks with a flat one-month fee and a mitigation sentence; for Taylor approval at sync, as GA, SC and AZ.
  ```json
  {"id": "early-termination-va", "group": "Default & Termination", "title": "Early Termination", "states": "VA", "is_active": "TRUE", "supersedes": "early-termination-ks", "bodyText": "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay Landlord, by the termination date, an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. If Tenant gives that notice, pays the fee and delivers possession of the property by the termination date, Tenant owes no Rent for any period after the termination date. If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by Virginia law, including Landlord's duty to mitigate damages. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or other periodic tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, and no early termination fee applies when Tenant terminates under such a right, including a Tenant's right to terminate due to military orders under Virginia law or the Servicemembers Civil Relief Act; as a victim of family abuse, sexual abuse, stalking or trafficking under Virginia law; due to fire or casualty damage under Virginia law; or any other termination right or limitation provided by applicable law.", "rule_type": "REQUIRED", "content_type": "LEASE_CLAUSE", "verification_status": "VERIFIED", "notes": "VA: Proposed override of `early-termination-ks` (VA gaps pass 2026-11-07, Virginia item 7(a); for Taylor's approval at sync, as for GA, SC and AZ). Why: the shared fee, \"one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater\", grows with the remaining term, while Virginia gives the landlord, if the lease ends, 'a claim for rent that would have accrued until the expiration of the term of the rental agreement or until a tenancy pursuant to a new rental agreement commences, whichever occurs first, provided that nothing contained in this section shall diminish the duty of the landlord to mitigate actual damages for breach of the rental agreement' and bars 'a judgment for accelerated rent through the end of the term of the tenancy' (Va. Code Ann. § 55.1-1251); on abandonment 'The landlord shall mitigate damages in accordance with § 55.1-1251.' (Va. Code Ann. § 55.1-1249). Early termination by agreement is lawful: 'The landlord and the tenant may agree in writing to an early termination of a rental agreement. In the event that no such agreement is reached, the provisions of § 55.1-1251 shall control.' (Va. Code Ann. § 55.1-1253(A)). The penalty risk is sharper in Virginia than in most states: using or collecting under 'any liquidated damage clause, penalty clause, or waiver of defense' that is void or unenforceable under Virginia law is a prohibited practice (Va. Code Ann. § 59.1-200(A)(13); landlords are reached for misrepresentation or fraudulent practices, Va. Code Ann. § 59.1-199(5); `edu-consumer-protection-act-va`). Penalty doctrine for a lease buy-out fee is case law (not searched); the general Code supplies only the goods rule, 'A term fixing unreasonably large liquidated damages is void as a penalty.' (Va. Code Ann. § 8.2-718), which doesn't govern leases of land. A flat one-month fee, payable only if the tenant chooses the option, is the cautious course. Savings sentence: military termination, where 'The landlord may not charge any liquidated damages.' (Va. Code Ann. § 55.1-1235(C)); victims under Va. Code Ann. § 55.1-1236, also 'The landlord may not charge any liquidated damages.' (Va. Code Ann. § 55.1-1236(D)); fire or casualty under Va. Code Ann. § 55.1-1240; FEDERAL: 50 U.S.C. § 3955 (saved). The no-fee sentence for statutory exits makes explicit what those sections require. Read whole 2026-11-07 from the Claude Code corpus (corpus-VA-20261107, official law.lis.virginia.gov text: Law Library title files overlaid with the 2026 Updates pages; every file verified against the corpus manifest).", "effective_from": "2026-11-07", "last_checked": "2026-11-07", "choice_group": "", "is_default": "", "topic_key": "early-termination", "lease_clause_basis": "SERVES_LANDLORD"}
  ```

### §7 Findings for other states

None.

### Proposed SOP changes

- **Rule 19 (battery tooling).** A pass's battery tool should reject or expand a combined scope string such as `code:A|code:B`; this pass's tool matched only the first title, which was caught during the pass. Proposed wording: "A battery term's scope names one source or a comma list of sources; the run log records the unit count searched, and a count that does not match the intended sources is a failed term."
- **Rule 12 (fetches).** Before a fetch is made, check that the named chapter is the one the statute points to (agency and chapter heading), not only that it is missing. This pass's canvass named 18VAC135-60 for the Fair Housing Board's certification rules; that chapter is the repealed common interest community fund chapter, and the Board's rules are 18VAC62-20.
- **Rule 80 / canvass limit.** The prompt allowed two canvass agents at a time; for a few minutes three ran (S02 finishing while S03 and S04 started). Proposed: "Launch the next canvass agent only after the hand-back of the one it replaces has been received, not when its last topic is saved."
- **Rule 59 (quote checks on duplicate unit numbers).** The corpus prints some VAC sections as two records under one number (for example the two 13VAC5-63-435 records, the second being the retrofit chapter). This pass's quote checker cached text by unit number and so tested only the first record; it was fixed mid-pass to test every record with the number. Proposed: "Where a source prints two texts under one number, a quote checks against each, and the row names which text it quotes."
- **Rule 80 (applying errata).** Ask checkers for errata as a machine-readable list of exact old -> new pairs tested to apply in order, and apply them by script with a re-validation; this pass applied 125 checker errata and six main-pass edits that way with no hand edits. When a regulation is read in the browser mid-pass, sweep every row for "not held" lines naming it before the check (round 1 found five such lines this pass missed).
- **Rule 80 (rerun counts).** A row that records a battery rerun's count should write the count in words or say "rerun" next to it, so the validator does not read it as the logged count.
- The quote checker's federal citation pattern needs at least two characters in the section number, so a one-character section such as FEDERAL: 9 U.S.C. § 2 cannot be matched and any quote from it reports MISS or NOCITE. In VA gaps the FAA text was summarized instead of quoted. Fix the U.S.C./C.F.R. section pattern in quotecheck.cites_in to accept a single digit.
- A heading screen for 'plain' without word boundaries matches 'complaint' and 'plaintiff' in hundreds of headings; heading screens should use \b on short stems (here \bplain\b), as the battery rules already require for terms.
- Rule 19 positives: check each positive with B.grep on the exact pattern and scope before the run (a saved federal section is outside scope 'all'; an admin unit is outside scope 'code'; a phrase like 'is provided' does not match 'not provided'). S02 needed eight reruns for positives named from memory; each rerun is logged with supersedes, but a pre-run grep would have avoided them.
- Run the heading screen before drafting, not after: in S02 the screen for rent-receipt-anti-waiver surfaced § 55.1-1403 (perfection of an assignment of 'leases, rents, or profits'), which a 'rents and profits' body term had missed because the statute lists the words with commas and 'or'.
- The battery tool logs a run before it checks positives, so a positive set on the wrong word order or on a word the section lacks costs a superseding rerun (this slice: VA-G-0302, 0307, 0316, 0319, 0327). A dry-run mode that tests positives without logging, or a pre-check that refuses a run whose positive doesn't match its term, would save reruns.
- Battery scopes: a scope string with "|" such as code:36-|admin:13VAC5-63 or code:55\.1-12|code:36- is one regex applied to section numbers, so only its first alternative matches (the "code:" prefix of the second alternative never appears in a section number). Use a comma list (code:36-,admin) or a grouped regex (code:(?:15\.2|36|55\.1)-), and check the printed unit count before citing a scope.
- Registration-type absences: include reporting verbs ("file ... a list", "report", "furnish the names") alongside register/registration/registry. Virginia's tenant-list duty for apartment house owners (Va. Code Ann. § 58.1-3901) was missed by a registration battery and found only through a tax battery in another topic. Also, a bare "rent tax" pattern matches inside "current tax": word-bound both ends of "rent".
- Corpus parsing: several 13VAC5-63 sections print as two records under one number (13VAC5-63-432, -433, -434, -435), the second carrying a heading beginning "5. Chapter ..." or "3. Chapter ..." (for example the retrofit chapter, "Chapter 11 Retrofit requirements", is the second record numbered 13VAC5-63-435). The quote checker resolves the number to the first record, so a verbatim quote from the second record fails; paraphrase it and name the record by its heading, or have the main pass fix the unit ids.
- Battery positives: choose each positive only from a section already confirmed (by grep or a prior run) to match that term within that term's scope; a positive picked on expectation fails, cannot be rerun under the same id, and forces a supersede chain (S05 needed seven reruns for this reason: VA-G-0504, 0506, 0510, 0517, 0520, 0522, 0525; VA-G-0530 was a separate INFLECTION rerun).
- Before naming a battery positive, confirm the pattern matches inside that unit (for example h.ctx or B.grep scoped to it). In slice S06 five batteries (VA-G-0606, VA-G-0613, VA-G-0615, VA-G-0618, VA-G-0621) had an extra positive guessed rather than checked; each was recorded as failed and rerun under a superseding id, which costs ids and lengthens notes.
- The battery's INFLECTION probe adds s/es/d/ed/ing to every \bword\b, so a trap word such as refuse produces refused hits (VA-G-0719). Rerun with the trap word narrowed to phrases (refuse collection, refuse containers) and plural forms written out (wastes?, garbages?) so the probe has nothing to inflect, and record the reason in the supersedes line.
- A code scope regex matches the section number without its version suffix, so 'code:15\.2-5114#v2$' matches nothing; to read or grep one version, use units.find('15.2-5114') and pick the record by id. Check each positive with B.grep or ids() on that unit before the run; two S07 runs (VA-G-0709, VA-G-0716) had to be superseded because a named positive did not match.
- Rule 19 (positives and word order): a proximity term written in one order (X then Y) can fail its positive when the statute puts the words the other way round (here § 49-26, 'forfeit ... guarantor'); write every proximity term in both orders before naming its positive, and check numbers written as words ("fifty-five years of age" in § 36-96.7) as well as digits.
- Before naming a positive in B.run, test it with re.search(pattern, units.find(unit)[0]['text'], re.I|re.S) in the same script; six S09 batteries (VA-G-0906, 0908, 0911, 0922, 0929, 0935) had to be rerun under new ids only because a guessed positive lacked one limb's words (for example a tenancy word in § 8.01-129, a foreign-person word in § 55.1-1203).
- Searches over the Virginia Real Estate Cooperative Act (§§ 55.1-2100 to 55.1-2185) with lessee/lease words return many false tenancy hits because 'proprietary lessee' means the unit owner there; exclude Chapter 21 or note it when counting association hits (VA-G-0927 [0]: 44 hits, most cooperative).

### Proposed topic questions

- `binding-arbitration`: Has the state added consumer pre-dispute arbitration rules (a deadline for the drafting party to pay arbitration fees, with default and waiver if it misses it; neutral arbitrator selection by high-volume providers) that may reach a residential tenant? Virginia did in 2026 (Va. Code Ann. §§ 8.01-581.017 to 8.01-581.021).
- `knowing-use-penalty`: Even where the landlord-tenant act has no knowing-use penalty, does the state consumer protection act make it a prohibited practice to use a void penalty clause, liquidated damage clause or waiver of defense in a lease, and does that act still reach landlords? Virginia's does (Va. Code Ann. §§ 59.1-199(5), 59.1-200(A)(13)).
- `optional-lease-terms`: Does a separate statute govern lease-option or rent-to-own contracts where the buyer lives in the home (non-waivable early exercise without penalty, a longer cure period for money defaults, no forfeiture of the option payment)? Virginia's is Va. Code Ann. §§ 55.1-3000 to 55.1-3002.
- `security-deposit-cap`: Does the deposit cap's insurance-premium rule count only premiums paid before the tenancy begins, or every premium the lease requires? Virginia's two sentences differ: one has the words 'prior to the commencement of the tenancy' (Va. Code Ann. § 55.1-1206(C)) and the other (Va. Code Ann. § 55.1-1206(A)) does not.
- `dv-lockchange`: Does the state's victim lock-change right depend on particular court orders only (for example family-abuse protective orders and divorce exclusion orders, but not general violence protective orders or ex parte orders), and does the statute say clearly who pays the lock-change cost? (Virginia: Va. Code Ann. § 55.1-1230(A), (D), 'at the landlord's actual cost'.)
- `criminal-activity`: Does a criminal statute make an owner or lessor who knowingly permits drug use, gambling or prostitution on leased premises guilty of an offense, and does a nuisance or criminal-blight law give an owner a safe harbor for suing to evict the tenant responsible? (Virginia: Va. Code Ann. §§ 18.2-258, 18.2-329, 48-16(C), 15.2-907(D).)
- `tenant-screening`: Does the state's record-sealing law bar a rental application from requiring disclosure of sealed arrests or convictions, require a notice on applications that ask about criminal history, or regulate screening companies' handling of sealed records? (Virginia: Va. Code Ann. §§ 19.2-392.15(D), (F), (G), 19.2-392.16.)
- `meter-conservation-charge`: Does the state let a utility or cooperative put an on-bill energy-efficiency repayment charge on the meter of later customers at the same premises, and must the participating customer (often the landlord) notify the next customer? Virginia does for electric cooperatives (Va. Code Ann. § 56-585.7(E)(5)).
- `parking-rules-notice`: Does the state's towing law give residents of landlord-owned multifamily lots a waiting period or posted notice before a tow for expired registration or inspection? Virginia requires 48 hours' posted notice (Va. Code Ann. § 46.2-1231(G)).
- `foreign-ownership`: Virginia's foreign-adversary ban reaches any 'interest in agricultural land', defined to include real estate merely zoned to permit agriculture, with no carve-out for short leases (Va. Code Ann. §§ 55.1-507, 55.1-508). Do other states' foreign-ownership statutes define agricultural land by zoning, so that an ordinary house lease on rural-zoned land falls inside them?

### Fetch requests filed by the canvass

Each was handled by the main pass; the outcome is the decision recorded for the same topic in §4.

- (landlord-registration) 18VAC135-60 (Fair Housing Board certification regulations under Va. Code Ann. § 54.1-2344(D)): To say whether the Board requires certification or registration of unlicensed people in the business of renting dwellings (for example, which landlords or property managers it reaches). The row edu-landlord-registration-va says only that the Board may set up such a program and that its regulations are not covered.
- (pool-safety) Board of Health regulations adopted under Va. Code Ann. § 32.1-248.1 (2026, c. 53) for swimming pools and water recreational facilities operated for public use, if promulgated, including the Board's definition of "private residential water recreational facilities": To say whether a pool at an apartment community or other rental property is a public-use pool under the new regulations; edu-pool-safety-va says only that it depends on that definition and is NEEDS_REVIEW on that point.
- (electric-submetering-disclosure) State Corporation Commission regulations adopted under Va. Code Ann. § 56-245.3 (submetering and energy allocation equipment in apartment houses; Virginia Administrative Code Title 20, Agency 5): edu-electric-submetering-disclosure-va states only what § 56-245.3 requires the regulations to contain; the regulations' billing-format, testing and record rules (and any SCC rule on tenants of master-metered buildings) could not be read.
- (ev-charging-requirements) NIST Handbook 44 section on electric vehicle fueling systems as adopted in Virginia, and any Board of Agriculture and Consumer Services regulation (2VAC5) modifying it: To say whether a landlord's EV charger or separate billing meter is a commercial measuring device under Va. Code Ann. § 3.2-5620; edu-ev-charging-requirements-va treats the point as Not located and gives the cautious course.
- (utility-disconnection-notice-authorization) State Corporation Commission rules on residential disconnection and customer notices (20VAC5), including any third-party notification or landlord-notice provision and any rule for tenants of master-metered buildings (for example, letting tenants pay a landlord's arrears): edu-utility-disconnection-notice-authorization-va, edu-utility-landlord-account-va and edu-utility-shutoff-statute-va treat the electric and gas side as Not located beyond the Title 56 statutes.
- (entity-landlord-court-representation) Rules of the Supreme Court of Virginia, Part Six, Section I (Unauthorized Practice Rules and Considerations) - not in the held rulebook (no Part Six units): edu-entity-landlord-court-representation-va rests on Va. Code Ann. §§ 16.1-88.03, 55.1-1257 and 54.1-3904; Part Six would confirm whether a nonlawyer officer or employee may appear for an entity landlord in circuit court or at a contested general district court trial. The row is VERIFIED on the statutes and states the cautious course.
- (tpa-sunset) 2025 Acts of Assembly chapters 476 and 490 (Eviction Diversion Program), including any enactment clause on expiration: 2024 Acts ch. 32 and ch. 42 set the Eviction Diversion Pilot Program to expire on July 1, 2025; Va. Code Ann. §§ 55.1-1260 and 55.1-1261 now print "Eviction Diversion Program" with history ending 2025, cc. 476, 490 and no expiration heading. Reading the 2025 chapters would confirm the expiration clause was repealed or extended; edu-tpa-sunset-va states only what the Code prints.

# Topic gaps sync (Claude Code, 2026-11-08)

Merged on base c5b5497 (CSV SHA bf1550aa808d, matching the pass's Step A): 243 new rows and 11 tags (`cannabis-restrictions-ak`, `disability-modification-restoration-mn`, `eminent-domain-vi`, `ev-charger-installation-hi`, `furnishings-included-la`, `informal-dispute-resolution-or`, `no-liens-ar`, `nonrefundable-fees-wv`, `owner-occupancy-termination-ar`, `rent-concession-wi`, `rent-installments-or`), matching the log.

**Spot-check.** Every statute quote in §6 matched the corpus (20 of 20). Ten were matched to live law.lis.virginia.gov on 2026-11-08 (§§ 55.1-1228, 55.1-1209.1, 46.2-1231, 55.1-1251, 59.1-200 and 20VAC5-305-20).

**Rows edited after round 2 (12).** An independent checker re-read them against the corpus and the official pages (12VAC5-462 and 20VAC5-305-90 on law.lis.virginia.gov; 24 C.F.R. §§ 982.308, 982.310, 982.404 on ecfr.gov). There were no misquotes. Four rows were OK. Seventeen fixes went into 8 rows, each quote re-checked in the corpus:
- One error: `edu-pool-safety-va` limited the local fence power to pools over two feet deep, but the two-foot depth qualifies only impounding structures (Va. Code Ann. § 15.2-921).
- The rest restored dropped qualifiers:
  - the 2027 payment-plan notice for landlords with more than four units (Va. Code Ann. § 55.1-1245(G)), in `edu-cure-and-eviction-grounds-va` and `edu-written-notice-required-va`;
  - the state or local assistance limb (§ 55.1-1209(F));
  - the animal-seizure hearing deadline (§ 3.2-6569(C)) and the deceased-tenant conditions (§ 55.1-1256);
  - the 48-hour redemption cutoff (§ 55.1-1250(D));
  - the Consumer Protection Act's landlord-tenant scope (§ 59.1-199(5));
  - the HQS initial-inspection carve-out and abatement of withheld amounts (24 C.F.R. § 982.404(d));
  - the lease-term limit on the HAP no-termination rule (§ 982.310(b)(2));
  - the screening-cost exclusion from the $32 application fee cap (§ 55.1-1203(C));
  - the "greater of" mass-nonrenewal threshold (§ 55.1-1253(B));
  - "unless impractical" (§ 55.1-1229(A)(4)).

**§6 applied in full:**
- `hoa-compliance-va`: new override; VA untagged from `hoa-compliance`. The text is the pass's proposed wording, under Va. Code Ann. §§ 55.1-1228, 55.1-1819.
- `early-termination-va`: new override, with a flat one-month fee, following GA, SC, AZ and NC; VA untagged from `early-termination-ks`.
- `utility-billing-va`: notes now pair it with `submetering-lease-statement-va`; the builder note is in the backlog.
- `edu-rent-payment-rules-va`: the 2027 size exemption.
- `edu-dv-tenancy-protections-va`: § 55.1-1230's two orders, not ex parte.
- `edu-tenant-records-va` and the `keys` VA segment: § 55.1-1209.1(B), (C).
- `edu-towing-va`: § 46.2-1231(G).
- `tenant-maintenance` VA segment: subdivision 7 pointer.
- `edu-no-radon-disclosure-va` and `edu-no-flood-disclosure-va`: the lease-option sentence (§ 55.1-701).

**Arbitration.** Not offered for Virginia, a change from the pass's conclusion. Va. Code Ann. § 55.1-1208(B) gives the tenant actual damages and attorney fees when the landlord "brings an action to enforce" a prohibited term. A motion to compel arbitration is an action under § 55.1-1200. This is the same structure as Delaware's held rule (penalty on enforcing), and the held group is final (Taylor, 2026-11-07, option 1). `edu-binding-arbitration-va` now says the clause isn't offered. `arbitration-agreement` is not tagged VA.

**Checker fix.** The section pointer in `utility-allowance-cap-va` now gives the full title of `utility-billing-va`.

**Records.** Citations: 256 rows (log §2 plus the two overrides). Topic questions: all 10. SOP 2.02: rules 12, 19, 59 and 80; the change log lists what was adopted and what was not. The pass's open items are source limits each row already states; they are not open work.

**Result.** Virginia has 404 active rows, all VERIFIED.
