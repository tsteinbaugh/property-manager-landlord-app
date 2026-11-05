# Arizona — lease-clause decision log (state #14)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. Older phrases such as "flag for the X re-audit" or "when X is next revisited" are historical and dead: they are not a queue.

**Date:** 2026-09-26/27 · **Settings:** Opus, high effort, ordinary search and fetch; research mode run once on 2026-09-27 (§12).
**Scope:** Arizona state law only. Municipal and county ordinances are flagged where met, not resolved (instruction 20). Mobile-home parks (ch. 11) and RV long-term spaces (ch. 19) are flagged, not researched.
**Input CSV:** `lease-clauses.csv`, **883 rows, 846 active** (FL's 847 less the retired `application-of-payments-nj`). No duplicate ids, no blank status, no active row with blank `states` except the intentional `security-deposit-return` parent (instructions 13 and 27). One dormant AZ row: `habitability-timeline-az`.
**Output CSV:** **941 rows, 905 active. AZ 109 active: 70 lease clauses, 39 education; all 109 VERIFIED** (after §18). One shared-row text edit (`entire-agreement`, uniform; §14). One new shared row in all 14 states (`rental-application-accuracy`, §17): every state's active count rose by exactly one, and nothing else changed for any other state. No duplicate ids, dangling `supersedes`, display collisions, blank status, or blank `states` (except the parent).

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **A.R.S. Title 33, ch. 10, whole** (§§33-1301 to 33-1381, every section in the official index), read verbatim in the browser from azleg.gov. **Adjacent sections:** ch. 3 (§§33-303, 33-321 to 33-324, 33-341 to 33-343, 33-361, 33-362, 33-381); ch. 17 (§§33-1901 to 33-1907); §§33-1260.01, 33-1806.01, 33-443; Title 12 ch. 8 art. 4 (§§12-1171 to 12-1183), §§12-341.01, 12-671, 12-991, 12-1191; Fair Housing Act §§41-1491, .01, .02, .06, .13, .14, .15, .18, .19, .20, .31, .33, .34, .36, .37, .38; §§36-1681, 32-2156, 44-6852, 11-1024. **Session laws** (sections affected and approval dates via the fetch tool): Laws 2025 ch. 191 (HB 2068), Laws 2025 ch. 253 (SB 1082), Laws 2026 ch. 69 (SB 1426). |
| Step 1 — tag first | **Done.** 50 shared rows tagged AZ (§2.1; two added in §13, single family only). 9 bases not tagged: AZ overrides or variants instead (§2.2). Every other state-specific row was screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new AZ rows | 17 lease clauses and 27 education rows (two added in §12), plus the dormant row rewritten and activated (§3). |
| Instruction 24 families | **Both closed:** `security-deposit-return-az`; base `assistance-animal-accommodation` tagged AZ (holds as written; independent state basis in §41-1491.19 and §41-1491(2)). |
| Instruction 33 | **Checked.** Arizona has three no-cure grounds; the `default-by-tenant` carve-out covers all three (§2.1). |
| Dormant row | **Rewritten, converted to education, activated** (§5). Pattern holds: one real fact, operative rule missed. |
| Named-topic checklist | **Done.** AZ column in all 10 state-column tables (69 rows, no blank cell). 32 new topics (4 from the AAR comparison, §16; 4 from the landlord-experience screen, §18). Candidate-topic table: 169 refs (93 answered, 68 not located, 4 not checked, 4 N/A). Instruction 35 added. |
| Layout rules (instruction 28) | **9 lease-side rules found** in the text read (§4); no code-wide typography search was run. |
| Currency (instructions 17, 29, 34) | **CLOSED (§15.6): every 2024, 2025 and 2026 chapter scanned in full text; no amendment to ch. 10.** Earlier status: mostly closed (§12). General effective dates confirmed (2026-09-12 for the 2026 session). Five recent session laws confirmed by chapter. **Found an in-force section missing from the compilation: §33-1332** (to 2026-12-31). The exhaustive 2024–2025 chapter-list scan is still not done. |
| Research mode | **Run once** (§12). Closed preemption (licensing, registration, rental tax), drug-lab repeal, DV definition, §33-443, pool form and marijuana. Did NOT run the azleg full-text search. |
| Proof-of-absence searches | **Run 2026-09-27 (§15)** on the official ARS full-text search; found §36-1637 (smoke detectors). Original status: **Not run.** Three bounded absences (late/application-fee cap, deposit interest, rent-increase notice) rest on the full ch. 10 read and say so. Everything else unfound is "Not located". |
| Professional-lease comparison (gap-discovery source 2) | **Done (§16)** against the AAR Residential Lease Agreement (February 2026). 51 provision topics mapped: no missing required clause. One correction (§26-168(D) servicemember protections), one new education row (`edu-holding-deposit-az`), two absences recorded (rekey, fire sprinklers). |
| Landlord-experience screen (gap-discovery source 3) | **Done (§18).** 59 scenarios run against the AZ library: 55 covered, 2 new education rows (`edu-towing-az`, `edu-selling-rented-property-az`), 1 body addition (`edu-landlord-maintenance-az`), 4 confirmed absences. **All four gap-discovery sources are now done.** |
| Open for Taylor | All eight decisions answered (§§13-14). §16.4 answered: new shared row `rental-application-accuracy` for all 14 states (§17); no SCRA clause. Propagation notes owed to 13 more state logs for this row (§17.2, paste-ready). Read list in §12.4. Two Claude CLI flags (§13). Propagation notes owed to 13 state logs (§14, paste-ready). |

## 1. Process notes

### 1.1 Source and currency
- **Source:** the official legislative compilation on azleg.gov, read verbatim. Its title page says it "has been updated to include the revised sections from the 57th Legislature, 2nd Regular Session" and "reflects the version of law that is effective on January 1st of the year following the most recent legislative session." The official version is published by Thomson Reuters.
- **No history lines (new instruction 35):** azleg ARS pages print no source line, so a section's text cannot be dated from the page. The compilation can therefore print a 2026 amendment whose effective date has not arrived (instruction 34 shape). Every AZ row carries a standard note saying so.
- **Session laws confirmed** (read through the fetch tool, which summarises; each is labelled in its row):
  - Laws 2025, ch. 191 (HB 2068): amends §41-1491 (definitions of "assistance animal" and "service animal") and adds §41-1491.38 (landlord immunity). Approved and filed 2025-05-13, no emergency clause. The fetch tool called the new section "41-1497.38"; the compilation prints §41-1491.38, which is taken as authoritative.
  - Laws 2025, ch. 253 (SB 1082): added §33-443 ("designated countries"), approved 2025-07-01, applicability limited to later acquisitions. The current §33-443 text ("foreign adversary", a 2027-01-01 date) indicates a 2026 amendment. 2026 SB 1683 is the lead; its chapter and signature were not confirmed.
  - Laws 2026, ch. 69 (SB 1426): amends §§12-1171 and 12-1173 (unauthorized occupants). Approved and filed 2026-05-29, no emergency clause, no delayed-effective-date section.
- **Not done:**
  - A full sweep of 2024, 2025 and 2026 regular sessions, and any special sessions, for amendments to ch. 10 and the adjacent sections.
  - The official general-effective-dates page (the fetch approval timed out). The 2025 and 2026 general effective dates are therefore unconfirmed.
  - Secondary sources (read, not relied on) report no major 2026 landlord-tenant change. Bills they say did not become law: HB 2710, HB 4122, HB 2243, HB 2325, HB 2429 (2026); HB 2357 (2025, status unknown).
- **Consequence:** ch. 10 rows are marked VERIFIED on section-open reads of the current compilation. The one row resting on a 2026 amendment of unconfirmed effective date (`edu-guest-removal-az`) is NEEDS_REVIEW.

### 1.2 How the text was obtained
- The shell cannot reach azleg.gov. WebFetch returns summaries, not verbatim text.
- Taylor approved azleg.gov for the built-in browser ("always allow"). Sections were then fetched in batches with page scripts and read verbatim.
- Taylor's computer went offline mid-session, after ch. 10 and most adjacent sections were done. Later WebFetch calls required approvals that timed out. So §§9-1303 to 9-1305, the rental-tax statute, the drug-lab statute and the general-effective-dates page are unread (§7).
- §12-1000 (the drug-lab statute in older compilations) returned 404 at that number. It was probably renumbered; not traced. §§9-1303 to 9-1305 returned 404 on the path tried (a leading-zero path error, not proof of absence); their titles were read from the official Title 9 index.

### 1.3 Section-open vs recall (instruction 22)
- Every row was drafted with its section text in view. The second look covered the recall subset: two note statements.
  - The 350,000-population cities (Phoenix and Tucson): now labelled "RECALL, not verified".
  - The federal lead citations on the tag note: standard, and unchanged from the base row.
- No case law is relied on anywhere.

## 2. Step 1 — tag first

### 2.1 Tagged AZ as written (48)
`rent-payment`, `due-at-signing`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided-ks-oh`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `guest-policy`, `guest-policy-day-limit`, `fire-safety-grilling`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `keys`, `holdover`, `surrender-end-of-term`, `parking-vehicle-rules`, `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `tenant-forward-proceedings-ca`, `application-of-payments`, `default-by-tenant`, `early-termination`, `assistance-animal-accommodation`, `common-area-use`, `returned-payments`.

Every tagged row has an `AZ:` note naming the controlling section. The ones that matter:
- **`default-by-tenant` (instruction 33).** Arizona's no-cure grounds:
  1. immediate termination for a "material and irreparable" breach on the premises (A.R.S. §33-1368(A); trial within 3 days, §33-1377(E));
  2. a repeat of the same or similar breach, 10 days after a notice, with no cure;
  3. falsified criminal record, eviction record or current criminal activity on the application ("not curable").

  The carve-out "except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure" covers all three. Fee clause: §33-1315(A)(2) allows only a written prevailing-party clause, which is what the row has (instruction 32: no forced wording).
- **`holdover`:** the referent exists, A.R.S. §33-1375(C). For a willful, bad-faith holdover, the landlord recovers up to the greater of two months' periodic rent or twice actual damages. `holdover-ca` is not tagged: it would give that recovery up (K.3).
- **Variants over bases:** A.R.S. §33-1315(A)(3) bars limiting the landlord's liability arising under law. §33-1315(B) adds a penalty for knowingly using a prohibited provision: actual damages plus up to two months' periodic rent. So AZ takes the no-disclaimer variants: `services-utilities-provided-ks-oh`, `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`.
- **`returned-payments`:** "maximum permitted by applicable law" = $25 plus actual bank charges (A.R.S. §44-6852).
- **`assistance-animal-accommodation`** (instruction 24, by hand): holds as written. Arizona's statute independently covers emotional-support animals (§41-1491(2), 2025). §41-1491.38 gives landlords an immunity no lease text needs.
- **`surrender-end-of-term`:** A.R.S. §33-1370(I) lets the landlord dispose of property immediately when the keys are returned. "To the extent permitted by applicable law" carries the load. Instruction 31: Arizona has no just-cause rule.
- **`due-at-signing`:** tagged with a builder caution. Prepaid last-month rent counts toward the 1.5-month security cap.

### 2.2 Not tagged — AZ override or variant instead (11 bases)

| Base | Instead | Why the base fails in Arizona |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-az` | Instruction 24. 14 business days, triggered by termination, delivery of possession AND the tenant's demand; 60-day finality (§33-1321(D)) |
| `landlords-access` | `landlords-access-az` | Base displays 24 hours. Arizona requires 2 days, has a written-maintenance-request consent rule, and closes the list of other access (§33-1343). Lawful through "if longer", but the wrong number (L.2 Tier B, as ND) |
| `possession-delay` | `possession-delay-az` | Base withholds termination for 30 days. §33-1362(A)(1) gives termination on 5 days' notice, so the base waives a statutory right (§33-1315(A)(1), with the (B) penalty) |
| `late-fee` | `late-fee-az` | Base's non-waiver sentence contradicts §33-1371: accepting rent with knowledge waives termination; a partial payment keeps rights only with a contemporaneous signed agreement |
| `pet-policy` | `pet-policy-az` | Entry and removal outside §33-1343; "without liability" (§33-1315(A)(3)); Arizona's own death or incapacity pet procedure (§§33-1314(E)-(G), 33-1370(E)) |
| `services-utilities-provided` | `services-utilities-provided-ks-oh` (tagged) | Disclaimer sentence (§33-1315(A)(3)) |
| `tenants-property-insurance` | `-ks-oh-ca` (tagged) | Disclaimer (§33-1315(A)(3)) |
| `parking` | `parking-ks-oh-ca` (tagged) | Disclaimer (§33-1315(A)(3)) |
| `storage-space` | `storage-space-ks-oh-ca` (tagged) | Disclaimer (§33-1315(A)(3)) |
| `landscaping-irrigation` | **Superseded by §13:** tagged AZ, single family only | Tenant maintenance tasks need a SEPARATE signed writing with adequate consideration for any unit other than a single family residence (§33-1324(D)); written with adequate consideration even for one (§33-1324(C)). **Decision 1** |
| `snow-removal` | **Superseded by §13:** tagged AZ, single family only | Same (§33-1324(C)-(D)). **Decision 1** |

**L.2 exhaustive generic-clause audit (run on the output CSV):** every generic lease clause is tagged AZ or has an AZ override or variant, except the two deliberate exclusions above and three state-specific CO/MN rows (`month-to-month-notice-co-*`, `possession-delay-mn-new-construction`).

### 2.3 Other states' specific rows screened, not tagged
- **`emergency-assistance-right-ca`:** Arizona has the prohibition (§33-1315(A)(4)-(5)). The CA text promises more (no non-renewal) and Arizona does not require lease text. Recorded in `edu-prohibited-lease-terms-az` instead.
- **`military-lease-termination-ca`:** California statute; no Arizona analog located. Federal SCRA is preserved by `early-termination`.
- **`deceased-tenant-contact-tx`:** Texas-specific. Arizona has its own opt-in: `authorized-person-contact-az`.
- **`extended-absence-notice-ks/-ne`:** URLTA §3.104. Arizona's act has no extended-absence notice (full read).
- **`move-in-inventory-ks/-nv`:** those require a jointly signed inventory. Arizona requires a move-in form only: `move-in-inspection-az`.
- **`nonrefundable-deposit-notice-wy`:** Wyoming wording. Arizona's rule is purpose-in-writing: `nonrefundable-fees-az`.
- **Every remaining state-specific row** (the `-co`/`-ca`/`-nj`/`-tx`/`-nv`/etc. overrides) encodes its own state's statute and does not apply as written.

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none in the pass (one later, at Taylor's direction: §14)
No shared row's `bodyText`, `rule_type` or `content_type` changed. Each new clause was checked against the existing library by `topic_key`. None could be massaged into an existing multi-state row without blurring a real divergence (instruction 26, priority rule).

### 3.2 New AZ lease clauses (17)

| Row | Rule | Rests on | Layout |
|---|---|---|---|
| `security-deposit-return-az` | REQUIRED | §33-1321(D), (E), (G), (H) | — |
| `security-deposit-cap-az` | CONSTRAINED | §§33-1321(A), 33-1310(15) | — |
| `nonrefundable-fees-az` | CONDITIONAL | §33-1321(B) | purpose in writing |
| `move-in-inspection-az` | REQUIRED | §§33-1321(C), 33-1322(E) | on move in |
| `landlords-access-az` | RECOMMENDED | §33-1343 | — |
| `possession-delay-az` | RECOMMENDED | §§33-1362, 33-1323 | — |
| `late-fee-az` | CONSTRAINED | §§33-1368(B), 33-1377(F), 33-1371 | in the written lease |
| `pet-policy-az` | RECOMMENDED | §§33-1321(A)-(B), 33-1343, 33-1314(E)-(G), 33-1370(E), 33-1315(A)(3) | — |
| `authorized-person-contact-az` | CONDITIONAL (opt-in) | §33-1314(E)-(G) | — |
| `landlord-disclosure-az` | REQUIRED | §33-1322(A)-(D) | at or before commencement |
| `dv-lease-termination-az` | RECOMMENDED | §§33-1318, 33-1318.01 | — |
| `bedbug-obligations-az` | CONDITIONAL (not SFR) | §33-1319 | materials attached |
| `utility-billing-disclosure-az` | CONDITIONAL | §33-1314.01 | in the rental agreement |
| `foreclosure-notice-az` | CONDITIONAL | §33-1331(A), (D) | statutory form |
| `pool-safety-notice-az` | CONDITIONAL | §36-1681(D)-(E) | separate DHS document |
| `maintenance-allocation-az` | CONDITIONAL (opt-in) | §33-1324(C)-(D) | **separate signed writing** (non-SFR) |
| `casualty-termination-az` | RECOMMENDED | §33-1366 | — |

### 3.3 New AZ education rows (25) and the converted dormant row
Topics:
- landlord maintenance duties;
- lease terms Arizona prohibits;
- self-help and prohibited practices;
- retaliation;
- eviction notices and process;
- periodic-tenancy termination;
- abandonment and property left behind;
- partial payments and waiver;
- security deposit rules;
- fair housing;
- assistance animals;
- rental registration with the county assessor;
- local preemption (rent control);
- eviction-record sealing;
- guest and unauthorized-occupant removal (NEEDS_REVIEW, §1.1);
- bounced checks;
- HOA and condo rental rules;
- criminal activity on rental property;
- what a landlord need not disclose;
- landlord remedies after breach;
- foreclosure notices;
- rules and lease amendments;
- three bounded absences: no late-fee or application-fee cap, no deposit interest, no rent-increase notice rule.

`habitability-timeline-az` (dormant) was converted to education on the tenant's repair remedies and deadlines.

## 4. Layout and placement requirements (instruction 28)

| Rule | Requirement | Where it lives |
|---|---|---|
| A.R.S. §33-1322(E) | Written lease must have **all blank spaces completed**; signed copies exchanged. Failure is a material noncompliance | Product rule (§7, M-candidate) |
| A.R.S. §33-1324(D) | Tenant maintenance agreement for a non-single-family unit must be a **separate writing signed by the parties**, with adequate consideration | `maintenance-allocation-az` |
| A.R.S. §33-1331(A) | Foreclosure notice **"substantially in the following form"**, included with the lease | `foreclosure-notice-az` |
| A.R.S. §36-1681(E) | Pool safety notice **as approved by DHS** (a separate document), on entering the lease | `pool-safety-notice-az` |
| A.R.S. §33-1321(B) | Purpose of each nonrefundable fee **stated in writing** | `nonrefundable-fees-az` |
| A.R.S. §33-1321(C) | On move in: signed lease copy, move-in form, **written** notice of the move-out inspection right | `move-in-inspection-az` |
| A.R.S. §33-1314.01(B), (G) | Utility charge-back disclosures and a **specific description** of the ratio method **in the rental agreement** | `utility-billing-disclosure-az` |
| A.R.S. §33-1315(A)(2) | Attorney-fee clause only as a **written** prevailing-party clause | `default-by-tenant` (tagged) |
| A.R.S. §§33-1322(A)-(B) | Owner, manager and Act-on-website notice **in writing, at or before commencement** | `landlord-disclosure-az` |

**Outside the lease** (for the builder's workflows):
- §33-1368(A)-(B) notices (no mandatory form: §§33-1305(C), 12-1175(D));
- §33-1371(A) contemporaneous partial-payment agreement;
- §33-1370(A), (D) abandonment notices (certified mail plus posting);
- §33-1331(B) mid-tenancy foreclosure notice within 5 business days;
- §33-1319(A)(1) bedbug materials to existing tenants;
- §33-1314.01(E) utility bill format;
- §33-1321(D) itemized list by first-class mail.

**Boundary:** these come from reading the texts in §0, not from a code-wide search for "conspicuous", "boldface", "underlined" or "separate document" (not run). No bold or underline rule appears in the text read.

**Omission sanctions that forfeit money** (second half of instruction 28):
- a fee not designated nonrefundable is refundable (§33-1321(B));
- a late fee not in the written lease cannot be required for reinstatement or included as a lease late charge (§§33-1368(B), 33-1377(F));
- no utility charge-back without the lease disclosures (§33-1314.01(B));
- knowingly using a prohibited term: damages plus up to two months' rent (§33-1315(B));
- an unregistered owner's tenant may terminate and recover prepaid rent (§33-1902(C));
- a missed foreclosure notice gives the tenant damages (§33-1331(C)).

## 5. Dormant row (instruction 21)

| Row | Right | Wrong | Outcome |
|---|---|---|---|
| `habitability-timeline-az` | The numbers 5 and 10 | Arizona imposes **no duty to begin remedial action** by any deadline. 5 and 10 days are the tenant's termination-notice cure windows (§33-1361(A)); 10 days is also the repair-and-deduct window (§33-1363). "As required by Arizona law" was false | Converted to education on the tenant's remedies and deadlines; activated; `topic_key` normalised to `habitability`; prior text kept in notes |

## 6. Decisions for Taylor

None blocks the handoff. Each is recorded in the relevant row's notes.

1. **`landscaping-irrigation` and `snow-removal` are not tagged AZ.** Under §33-1324(D) the tenant can take on maintenance tasks for any unit other than a single family residence only by a separate signed writing with adequate consideration. Even for a single family residence, (C) needs a writing with adequate consideration. I folded both clauses into `maintenance-allocation-az`, a CONDITIONAL agreement with checkboxes and a consideration field. **Alternative:** tag both as written for single family homes only, accepting the untested "adequate consideration" risk.
2. **What counts as prepaid rent toward the cap.** §33-1321(A) caps security "including prepaid rent" at 1.5 months' rent. `security-deposit-cap-az` treats first-period rent paid at signing as rent, not security, and counts rent prepaid for any later period. If you want the conservative reading, the clause changes by one clause.
3. **`default-by-tenant`'s late-fee sentence.** It promises no eviction over an unpaid late fee alone. In Arizona, pre-filing reinstatement requires past-due rent *and* a reasonable written-lease late fee (§33-1368(B)), so the sentence gives up a little. It is the library default from the NJ decision; I kept it.
4. **`entire-agreement` vs §33-1342(C).** Arizona lets a landlord amend leases immediately to comply with new laws, on written notice. The clause says changes need a writing signed by all parties. I accepted it as written, since statutory compliance overrides the lease anyway, and noted it.
5. **§33-443 foreign-adversary land ban.** It expressly bars a "foreign adversary nation or foreign adversary agent" from obtaining a lease. Its reach to ordinary residential tenancies is unclear (15% "substantial interest"; the 31 CFR 802.221 "foreign person" definition not read). There is real fair-housing risk if landlords screen by nationality. No row was written. Want an education row, or leave it?
6. **Crime-free lease addendum.** Common in Arizona and expressly permitted (§§33-1260.01(G), 33-1806.01(G); §33-1906 programs), but not required. Offer it as a CONDITIONAL clause?
7. **`dv-lease-termination-az` is RECOMMENDED, not REQUIRED.** The statute gives the right without requiring lease text. Other states' DV rows are REQUIRED; say if you want parity.
8. **Pool notice scope.** §36-1681(D)'s exemptions (semi-public pools, older pools, cities with their own ordinances, all residents 6+) turn on facts the builder can't see. The row is offered for every private pool; giving it where not required costs nothing.

## 7. Open items and read list (none blocking)

> **Partly superseded by §12 (2026-09-27).** Local licensing/registration and rental-tax preemption, the drug-lab statute, the general effective dates, §13-3601 and the pool form are now closed. §12.4 is the current open list.

| Item | What would close it |
|---|---|
| **Local preemption beyond rent control.** §9-1304 (index title: "Citywide residential rental property inspection program requirements; residential rental licensing or registration prohibition"), §§9-1303, 9-1305, county analogues; the residential-rental transaction privilege tax ban from 2025 (Laws 2023 ch. 204, SB 1131 per search results), and whether landlords must pass the saving through | **Research mode, trigger 3** (cross-chapter), or the sections read in the browser. `edu-local-preemption-az` states only what was read |
| Currency sweep: 2024–2026 session laws amending ch. 10; 2025 and 2026 general effective dates; 2026 SB 1683 (§33-443) chapter | azleg.gov session-laws and general-effective-dates pages (browser) |
| Drug-lab / meth disclosure statute (old §12-1000 returned 404) | Find the current number; read it |
| Smoke and CO alarm duties; state servicemember rules; mold; radon; EV charging; immigration; code-wide fee caps | **Research mode, trigger 1** (proof of absence), or a full-text search on azleg.gov |
| L.5 dependencies not read | §§13-3601, 13-1406, 13-3602 (DV definitions), 12-1809, 38-1101, 14-3911, 9-1303, 32-507; the DHS pool notice form; 31 CFR 802.221 |
| Local ordinances | Phoenix, Tucson, Tempe, Flagstaff (fair housing classes, pool ordinances, rental programs) - flagged, not resolved |

**Product backlog (Addendum M candidates; recorded here rather than in the architecture file, which is not in the handoff set):**
- **Blank spaces (§33-1322(E)).** An Arizona lease generated with an unfilled `{{placeholder}}` or `[bracket prompt]` is a material noncompliance by the landlord. The builder must block generation until every AZ blank is filled. This strengthens M.12's case for a `formatting` field.
- **Partial-payment agreement (§33-1371(A)).** A contemporaneous, after-the-fact document no lease clause can supply; same category as M.8. Offer it as a form at the time of payment.
- **Deposit deadline is a three-event trigger** (termination, delivery of possession, tenant demand). Any reminder keyed to "move-out + 14 days" fires wrong (M.4 category).
- **Owner registration check** (§33-1902) at property onboarding: unregistered property may not be occupied.
- **Attachments:** DHS pool notice; bedbug educational materials, including distribution to existing tenants.
- **Utility bill format** (§33-1314.01(E)) if Steinoak ever bills utilities.

## 8. Integrity and screens
- **CSV (as of §3):** 925 rows (927 after §12); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair); no blank status; no active row with blank `states` except the parent; every row has 16 fields. Other states' active counts are unchanged.
- **L.3 (the CSV is the fact):** every row named in this log and in the checklist's AZ cells was checked against the output CSV. All AZ rows exist and are active. The non-AZ ids named are deliberate "caught X → Y" references (instruction 19; L.1 reconciliation).
- **Instruction 11 citation screen:** every A.R.S. cite in AZ rows (bodyText and the AZ segment of notes) was checked against the sections read. 16 unread cites remain, each labelled in its note as a dependency or comparison. The one unlabelled case (§9-1303 in the `landlord-maintenance` tag note) was fixed.
- **Instruction 16 (non-statute citations):** federal lead rules (42 U.S.C. §4852d; 24 CFR Part 35; 40 CFR Part 745), cited on the base row. 31 CFR 802.221 appears in §33-443, not in any row. No A.A.C. rule and no case law is relied on.

## 9. Propagation notes (paste-ready)

**Superseded by §14:** one shared edit (`entire-agreement`) is now owed to 13 logs. As of the pass itself: **none owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every change to an existing row is an added `AZ` tag with an `AZ:` note, which is a states-only change under §5a.1. Nothing needs to go into another state's log.

## 10. Findings worth Taylor's attention
1. **The disclaimer bases are more dangerous in Arizona than elsewhere.** §33-1315(B) makes knowingly using a prohibited term cost up to two months' rent plus damages. The no-disclaimer variants are the only safe choice.
2. **Arizona's deposit clock doesn't start until the tenant asks.** §33-1321(D) runs 14 business days from termination, delivery of possession *and* the tenant's demand. The clause invites the demand with the forwarding address.
3. **Shared maintenance clauses fail Arizona's separate-writing rule** (Decision 1). It is the first state where a lease can't simply assign lawn care to the tenant.
4. **The dormant row invented a landlord deadline.** Arizona sets none; the 5 and 10 days belong to the tenant's remedies.
5. **Arizona's statute covers emotional-support animals independently of HUD** (2025). It also gives landlords an unusual immunity for injuries by a permitted assistance animal.
6. **Eviction records are sealed automatically** when the landlord loses or dismisses (§33-1379), unlike Florida.
7. **A written lease with a blank in it is a landlord breach** (§33-1322(E)). That is a builder rule, not a clause.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses.csv` | 937 rows, 901 active; AZ 105 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-AZ.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | AZ column in all 10 state-column tables; Arizona sections at the end; instruction 35 |


---

## 12. Research-mode pass — 2026-09-27 (once; report in the conversation)

Primary text was read by the research tool from azleg.gov and azdhs.gov. I did not re-read these sections myself; each row says so.

### 12.1 Settled
- **General effective dates** (official page): 2024-09-14; **2025-09-26**; **2026-09-12**. No special sessions 2024–2026. So Laws 2026, ch. 69 (SB 1426) took effect 2026-09-12. `edu-guest-removal-az` moves **NEEDS_REVIEW → VERIFIED**; the effective date is in its note.
- **§33-1332 (Laws 2023, ch. 204, SB 1131) — the main finding.** "Rent reduction; burden of proof":
  - landlords may not charge tenants the repealed city residential rental tax;
  - the landlord must prove by a preponderance that a challenged charge is not that tax.

  The section is **in force until 2026-12-31** (Sec. 5 repeals it after that date). It is **missing from the azleg compilation**, which prints the law as of 2027-01-01, so my section-by-section "full read" of ch. 10 could not find it. The same act:
  - deleted former §33-1314(E), the landlord's TPT rent-adjustment right;
  - added §42-6004(H), which bars city residential rental TPT from 2025-01-01.

  New row: `edu-rental-tax-az`, **with a sunset note: revise on or after 2027-01-01**. No Steinoak clause charges or passes through a tax (grep of AZ-tagged `bodyText`). Instruction 35 is rewritten to cover this reverse case.
- **Local preemption:**
  - §9-1304(B)-(C) and §11-1704: cities and counties may not adopt rental licensing or registration.
  - Inspection programs are allowed only by statutory procedure: hearing, notice, a three-fourths council vote or a county majority (§§9-1304(A), 11-1704, 9-1302).
  - §11-1705: no county fee for initial inspections.
  - `edu-local-preemption-az` body and notes rewritten.
- **Drug labs:** former §12-1000 was repealed by Laws 2016, ch. 352 (SB 1256), effective 2016-08-06, with no replacement owner duty (research boundary: Titles 12, 32, 49). New bounded-absence row `edu-no-drug-lab-disclosure-az`. Checklist 551: meth "confirmed absent (repealed)".
- **DV definition (L.5):** §13-3601(A) requires a listed relationship, so a threat by a stranger is not domestic violence. The §33-1318 sexual-assault prong (in the dwelling) has no relationship element. Noted in `dv-lease-termination-az`; checklist 427.1 answered. Clause text unchanged: "as Arizona law defines it" carries the limit.
- **§33-443:**
  - Amended by **Laws 2026, ch. 240 (SB 1683)**, signed 2026-06-22 (Governor's release) and enacted without the emergency clause, so effective **2026-09-12**.
  - Applies to transactions and renewals on or after that date.
  - Expressly covers leases (defined broadly), at a 15% substantial-interest threshold.
  - Its reach to an individual tenant who is a national of a listed country is **still unresolved**; no AG guidance was located.
  - **Correction:** the SB 1683 fact sheet says the 2025 version (ch. 253) already used "foreign adversary" with a 30% threshold. My §1.1 description of it as "designated countries" came from the fetch tool's short title and should not be relied on.
  - Decision 5 stands (no row).
- **Pool notice:** the ADHS form is dated September 2012 and has **no signature or acknowledgment block**. Read literally, the §36-1681(D) exemptions cover the (E) notice. `pool-safety-notice-az` note updated; the clause's acknowledgment sentence is Steinoak's own addition.
- **Marijuana:** §36-2851(7) lets a landlord prohibit adult-use marijuana conduct. §36-2813(A) bars refusing to lease to, or penalizing, a medical cardholder solely for cardholder status. `smoking-policy` AZ note updated; the clause stays as written (it bans smoking, not status).
- **Servicemembers:** the only Arizona statute located is §33-1413(F), for mobile-home parks (not ch. 10). There is no analogue for dwellings; federal SCRA applies. Checklist 248.5 and 294.8 updated.
- **2025 HB 2357** (azcourthelp.org notice): not enacted (LegiScan, secondary).

### 12.2 Rows changed
- **New (2):** `edu-rental-tax-az`, `edu-no-drug-lab-disclosure-az`.
- **Body and notes:** `edu-local-preemption-az`.
- **Notes and status:** `edu-guest-removal-az` (→ VERIFIED).
- **Notes only:** `dv-lease-termination-az`, `pool-safety-notice-az`, `edu-assistance-animals-az` (2025 effective date), `smoking-policy` (AZ segment), and the three bounded-absence rows (compilation-omission caveat).
- No shared row's text changed, so **no propagation is owed**.

### 12.3 Integrity
- 927 rows, 891 active.
- AZ 93 (65 clauses, 28 education), **all VERIFIED**.
- No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent).
- Other states unchanged.
- Every `-az` id named in the checklist exists and is AZ-active.

### 12.4 Still open after the research pass
| Item | What would close it |
|---|---|
| Smoke and CO alarm duties (likely only through locally adopted building or fire codes via §33-1324(A)(1) and §9-1303(7)); Laws 2026 ch. 57 (HB 2324, fire code) unread | azleg full-text search, or a second research pass |
| Proof-of-absence list: mold, radon, EV charging, immigration, code-wide fee caps, source of income, rent-increase or renewal notice, deposit interest | azleg full-text search (research tool could not run it) |
| County rent-control power (§33-1329 names only cities and towns) | Targeted read of Title 11 |
| §9-1305 (city inspection fees and penalties) | One section read |
| Exhaustive 2024 and 2025 session-law chapter scan for ch. 10 amendments (2026 scanned through ch. 101 by short title) | Session-laws lists |
| Decisions 2 (prepaid rent in the cap) and 1 (yard work under §33-1324(D)): no Arizona authority located either way | Stay interpretive; your call |


---

## 13. Taylor's decisions and routing — 2026-09-27

| # | Item | Decision | Result |
|---|---|---|---|
| 1 | `landscaping-irrigation`, `snow-removal` | **Tag AZ, conditional on a single family residence; separate AZ clause for other units** | Both shared rows tagged AZ with an `AZ:` note stating the single-family condition (A.R.S. §§33-1324(C), 33-1310(16)). Their `rule_type` stays RECOMMENDED: changing a shared row's rule_type would be owed to 13 states. `maintenance-allocation-az` reworded as the separate signed agreement for any unit other than a single family residence (§33-1324(D)). **Flagged for Claude CLI (A).** |
| 2 | Prepaid rent in the 1.5-month cap | Explained in the conversation; awaiting Taylor | No change |
| 3 | `default-by-tenant` late-fee sentence | **Keep** (Taylor agrees) | No change |
| 4 | `entire-agreement` vs §33-1342(C) | Explained in the conversation; awaiting Taylor | No change |
| 5 | §33-443 education row | Draft shown in the conversation; awaiting Taylor | No row yet |
| 6 | Crime-free lease addendum | Context given in the conversation; awaiting Taylor | No row yet |
| 7 | `dv-lease-termination-az` | **Keep RECOMMENDED; add to statute watch** | Row note updated. **Flagged for Claude CLI (B).** |
| 8 | Pool notice for every private pool | Explained in the conversation | No change |

**Flagged for Claude CLI (Taylor's instruction):**
- **(A) Per-state applicability condition.** The builder needs a way to show a shared clause in one state only when a property fact is true. Here: `landscaping-irrigation` and `snow-removal` show in Arizona only when the property is a single family residence under A.R.S. §33-1310(16). That definition includes an attached unit with its own street access and no shared heating, hot water or other essential facility. Until this exists, both rows display for every AZ lease, including apartments, where they are unenforceable without a separate writing. Related: M.2 and M.10 (applicability keyed to property or clause facts). A property-type field on the property record would also serve `bedbug-obligations-az` (not for single family homes) and `foreclosure-notice-az` (not for 4+ connected units).
- **(B) Statute watch.** Add A.R.S. §§33-1318 and 33-1318.01 (domestic violence and sexual assault early termination; law enforcement officers) to the legal-watch list. If Arizona amends them to require lease or notice text, move `dv-lease-termination-az` to REQUIRED.

**Integrity:** 927 rows, 891 active; AZ 95 (67 clauses, 28 education), all VERIFIED. No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent). Other states unchanged. Both new tags are states-only changes: no propagation owed.


---

## 14. Taylor's second-round decisions — 2026-09-27

| # | Item | Decision | Result |
|---|---|---|---|
| 2 | Prepaid rent in the 1.5-month cap | **First month's rent paid at signing is not "prepaid rent"** | `security-deposit-cap-az` unchanged; the judgment call is now Taylor's decision |
| 3 | `default-by-tenant` late-fee sentence | **Keep.** Whether to litigate an unpaid late fee is the landlord's choice; the lease text is fine | No change |
| 4 | `entire-agreement` vs A.R.S. §33-1342(C) | **Add the carve-out for all states** | Shared `bodyText` edit, uniform (below) |
| 5 | §33-443 education row | **Add** | `edu-foreign-adversary-land-ban-az` (VERIFIED; effective date 2026-09-12 inferred from the engrossed "enacted without the emergency" marking) |
| 6 | Crime-free lease addendum | **Offer as optional** | `crime-free-addendum-az` (CONDITIONAL). Built-in limits: termination only through §33-1368; guest liability at the §33-1368(F) standard; victim carve-out; no penalty for calling police (§33-1315(A)(4)-(5)). **"On or near the property" kept** (Taylor, 2026-09-27: e.g. an assault on a neighbor on the neighbor's own property should still be a violation). Off-premises conduct runs through the 10-day notice, not immediate termination (row note) |
| 8 | Pool notice for every private pool | **Agreed** | No change |

### 14.1 Shared edit: `entire-agreement` (§5a.1)
- **Old:** "...and may not be changed except in writing signed by all parties."
- **New:** "...and may not be changed except in writing signed by all parties, **or as applicable law permits Landlord to change it by written notice to Tenant**."
- **Driver:** A.R.S. §33-1342(C). An Arizona landlord may amend existing leases immediately, by written notice, to comply with a new law, and the old wording could be read to give that right up.
- **Judgment: UNIFORM.** The words are self-limiting: they add nothing in a state whose law gives no such right, and they preserve any right a state does give.
- `last_checked` was reset to 2026-09-27, and the row's notes record the edit. No per-state override is needed.

### 14.2 Propagation notes — paste into each log

Paste into the logs for CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ and FL:

> **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

### 14.3 Integrity
- 929 rows, 893 active.
- AZ 97 (68 clauses, 29 education), all VERIFIED.
- No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent).
- Other states' active counts are unchanged. The only other-state change is the `entire-agreement` text above.
- Every `-az` id named in the checklist exists and is AZ-active.


---

## 15. Close-out searches — 2026-09-27 (official full-text search, in Taylor's browser)

### 15.1 How the search works (instruction 15 / TX1.20)
- azleg.gov site-search, Scope = Arizona Revised Statutes.
- **It matches exact phrases and word forms only.** "smoke detector" and "smoke detectors" return different lists, and "smoke alarm" returns none. So every term was run in its variants.
- Every hit's section number and title was reviewed, and every landlord-relevant hit was read section-open.
- **Boundary:** statutes only. The A.A.C., local codes and case law were not searched.

### 15.2 Found: one statute the research pass missed
**A.R.S. §36-1637, smoke detectors** (Title 36, outside the landlord-tenant title):
- (A) an approved detector must be installed in each new residential unit, and when a sleeping area is remodeled under a permit;
- (B) the **tenant** must maintain it and keep it working unless the tenant gives written notice of a malfunction, after which the landlord repairs;
- (C) **"The landlord shall give written notification to the tenant of the tenant's responsibilities."**

The L.12 sweep also read §36-1636 (definitions, which include apartments and condos), §36-1638 (stricter local ordinances survive) and §36-1639 (manufactured homes built after 1976 and certified factory-built homes are exempt). There is no penalty section in the article.

New row **`smoke-detector-duty-az`** (REQUIRED lease clause; the clause is the §36-1637(C) written notice). The smoke-detector battery checkbox was removed from `maintenance-allocation-az`, since Arizona already puts routine detector upkeep on the tenant by statute. **L.12/L.13 lesson again:** the research pass reported "no statute located" for this topic; the exact-phrase search found it on the first term.

### 15.3 Confirmed absent (statutes) — each with its own row or upgraded row
| Topic | Terms run | Row |
|---|---|---|
| Mold | mold, molds, mildew, fungus | `edu-no-mold-disclosure-az` (new) |
| Radon | radon (only §33-423's optional seller report, read) | `edu-no-radon-disclosure-az` (new) |
| EV charging | electric vehicle charging, vehicle charging, charging station(s) | `edu-no-ev-charging-right-az` (new) |
| Immigration-status rule | immigration status, citizenship status (§13-2929 harboring statute read; landlord application not researched, flagged) | `edu-no-immigration-inquiry-rule-az` (new) |
| Source of income / vouchers | source of income, lawful source of income, housing voucher, housing choice voucher, section 8 | `edu-no-source-of-income-rule-az` (new) |
| Servicemember lease rule (dwellings) | reassignment orders, permanent change of station, military orders (only §33-1413, mobile homes) | `edu-no-servicemember-lease-rule-az` (new) |
| Late-fee and application-fee caps | late fee(s), late charge(s), application fee(s), screening fee, rental application | `edu-no-fee-caps-az` (upgraded to code-wide) |
| Deposit interest | security deposit(s), interest on security | `edu-no-deposit-interest-az` (upgraded) |
| Rent-increase notice (dwellings) | rent increase(s), increase in rent, increase the rent (mobile home and RV only) | `edu-rent-increases-az` (upgraded) |
| Carbon monoxide alarm | carbon monoxide, carbon monoxide detector(s), carbon monoxide alarm | noted in `smoke-detector-duty-az` |

### 15.4 Other results
- **Unclaimed deposit refunds:** security deposits and refunds are "property" under the unclaimed-property act and are presumed abandoned 3 years after the obligation to pay arises (§§44-301(17)(b)(ii), 44-302(A)(16)). New row `edu-unclaimed-deposits-az`. Holder reporting duties were not read.
- **County rent control:** §33-1416 expressly preempts **counties**, cities and towns for mobile-home spaces, while §33-1329 names only cities and towns for dwellings. The full-text search finds no other rent-control statute. County enabling authority was not researched (flagged).
- **§9-1305 read** (city inspection fees). `edu-local-preemption-az` notes updated.
- **Typography (instruction 28), code-wide:** conspicuous, conspicuously, boldface, bold type, bold print, underlined, separate document, separate writing, point type, capital letters. Dwelling hits are only §§33-1370 and 33-1377 (posting of notices) and §33-1324(D) (separate writing, already in §4). **No bold, underline, type-size or capitals rule applies to Arizona residential leases.** The §4 layout table stands as complete.
- **Currency sweep:**
  - **2025 regular session: all 265 chapters scanned in full text.** The only amendment to a section this state relies on is ch. 191 (§41-1491, already recorded); other hits merely cite relied-on sections. **No 2025 amendment to ch. 10.**
  - **2026 and 2024: NOT completed.** azleg.gov's firewall began refusing connections partway through the bulk fetch. See 15.5.

### 15.5 Still open after the close-out
| Item | Status |
|---|---|
| Full-text scan of the 2026 and 2024 chapters | **DONE (§15.6)** |
| County enabling authority for rent control (Title 11) | Flagged; no statute located either way |
| Unclaimed-property holder reporting mechanics (Title 44, ch. 3) | Not read; the row states only dormancy |
| Professional-lease comparison (gap-discovery source 2) | Needs Taylor to supply the Arizona Association of Realtors residential lease, or to skip it |
| Re-reading the research-tool sections myself (§§42-6004, 11-1704, 11-1705, 13-3601, 36-2851, 36-2813, and the Laws 2023 ch. 204 text) | Optional; §§9-1304 and 9-1305 are now read |

**Integrity:** 937 rows, 901 active; AZ 105 (69 clauses, 36 education), all VERIFIED. No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent). Other states unchanged since §14. Every `-az` id named in the checklist exists and is AZ-active.


### 15.6 Currency sweep completed — 2026-09-27 (throttled re-run after the firewall block cleared)
- **Method:** every chaptered law of each session was fetched in full text from azleg.gov and matched for every section this state's rows rely on. The match list covered:
  - ch. 10;
  - §§33-1901 to 33-1907, 33-1260.01, 33-1806.01, 33-443;
  - §§12-1171 to 12-1183, 12-341.01, 12-671, 12-991;
  - §41-1491 et seq.;
  - §§36-1636 to 36-1639, 36-1681;
  - §§44-6852, 44-301, 44-302, 32-2156;
  - §§9-1301 to 9-1305, 11-1701 to 11-1705, 42-6004, 36-2851, 36-2813, 13-3601.

  The "Section X ... is amended/added/repealed" clauses were parsed to separate amendments from mere citations. Chapter counts were confirmed against the official session-law tables.
- **2024 (56th Leg., 2nd Reg.):** 259 chapters; ch. 247 (SJR 1001) and ch. 259 (HJR 2001) are joint resolutions with no HTML text and are irrelevant. **One amendment to a relied-on section:** ch. 250 (HB 2168, approved 2024-06-21, effective 2024-09-14) changed only §44-6852's cross-reference; the fee measure is unchanged. Noted on `returned-payments` and `edu-dishonored-payment-remedies-az`.
- **2025 (57th Leg., 1st Reg.):** 265 chapters. Amendments: ch. 191 (§41-1491, already recorded) and ch. 253 (§33-443 added).
- **2026 (57th Leg., 2nd Reg.):** 264 chapters. Amendments to relied-on sections:
  - ch. 69 (§§12-1171, 12-1173, already recorded);
  - ch. 240 (§33-443, already recorded);
  - ch. 224 (SB 1336, §44-301, effective 2026-09-12; the security-deposit wording is unchanged, noted on `edu-unclaimed-deposits-az`);
  - ch. 242 (§13-3602, incorporated by §33-1318 but not restated; noted on `dv-lease-termination-az`).
- **Result: no 2024, 2025 or 2026 session law amended A.R.S. Title 33, ch. 10.** Every section of the compilation read on 2026-09-26/27 is therefore current, subject to §33-1332 (Laws 2023, ch. 204), which is missing from the compilation and in force to 2026-12-31 (§12). **Instruction 34 is satisfied:** every recent amendment relied on is in force, and no delayed effective date is pending except §33-1332's repeal on 2027-01-01.
- **Special sessions:** none held 2024-2026 (official General Effective Dates page, §12).

---

## 16. Professional-lease comparison (gap-discovery source 2) — 2026-09-27

**Source:** Arizona Association of REALTORS® *Residential Lease Agreement*, updated February 2026 (8 pages plus the Tenant Attachment), supplied by Taylor. It is copyrighted, so this section maps its provisions by topic and does not reproduce its text. It was used as a **lead only** (instruction 6). Every statutory claim below rests on primary text read on azleg.gov: the ch. 10 full read, plus the sections read section-open on 2026-09-27 for this comparison (§§26-168, 32-2151.01, 9-807, 11-861 in part, 44-5101, 32-2181.02, 36-2852, 36-2853).

**Result:** the AAR form contains no Arizona statutory requirement that the library misses. The comparison produced:
- **One correction:** §26-168(D), servicemember protections. The research pass and the close-out search had both labelled the section "employment".
- **One new education row:** `edu-holding-deposit-az`.
- **Two absences recorded:** rekey/security devices and fire sprinklers.
- **One cross-state question** for Taylor (§16.4).

### 16.1 Provision map

| AAR provision (by topic) | Library coverage for AZ | Result |
|---|---|---|
| Parties; premises; included personal property | `appliances-included` (tagged) | Covered |
| Named occupants; no assignment or sublet without consent (material noncompliance) | `permitted-occupants`, `no-sublet-assign`, `residential-use-only` (tagged) | Covered |
| Addenda (lead paint) | `lead-based-paint` (tagged, REQUIRED); `addendum-precedence` | Covered |
| Term; automatic month-to-month; 30-day periodic notice | `surrender-end-of-term`; `edu-periodic-tenancy-termination-az` (§33-1375) | Covered |
| Willful holdover: 2 months' rent or twice damages | `holdover` (tagged; §33-1375(C)) | Covered; same figures |
| Earnest money (form, holder, dishonor, applied to deposits and first rent) | **None** | **Gap → `edu-holding-deposit-az`** (§16.2) |
| Due date; no offsets; partial payments not required | `rent-payment`; `edu-partial-payments-az` (§33-1371) | Covered |
| Rental-tax repeal note; no pass-through of the repealed tax | `edu-rental-tax-az` | Covered and more precise: our row carries the §33-1332 sunset (through 2026-12-31; revise on or after 2027-01-01, §12). The AAR note states the ban with no end date |
| Late charge; dishonored-payment charge; certified funds after a return | `late-fee-az`, `returned-payments`, `acceptable-payment-methods`; `edu-dishonored-payment-remedies-az` (§44-6852: $25 plus bank charges); `edu-no-fee-caps-az` | Covered |
| Late or partial acceptance doesn't change the due date or waive the balance | `late-fee-az` (§33-1371 conformed) | Covered. The AAR's general non-waiver line is subject to §33-1371 the same way |
| Proration | `due-at-signing` | Covered (contract term, no statute) |
| Deposit cap note (1.5 months incl. prepaid rent; voluntary prepayment allowed) | `security-deposit-cap-az` | Covered; same rule |
| Deposit interest kept by broker or landlord | `edu-no-deposit-interest-az` | Covered |
| Deposits not to be used as last month's rent | Checklist line 37: AZ "Partial", no application rule | No statute; contract choice. No row |
| Refundable security, pet and cleaning deposits; cleaning/redecorating charges are not security | `security-deposit-use`, `security-deposit-cap-az` (§33-1310 definition) | Covered |
| Nonrefundable fees, each with its purpose | `nonrefundable-fees-az` (§33-1321(B)) | Covered |
| Broker trust account; 10 days' notice before a transfer | — | Broker-only (Title 32 / A.A.C. Title 4, ch. 28, not read). Out of scope for self-managing landlords; noted on `edu-holding-deposit-az` |
| Return of deposits "within the time provided in the ARLTA" | `security-deposit-return-az` (14 business days, demand-triggered, 60-day finality) | Covered. Ours states the terms; the AAR only cross-refers |
| Application, credit and background contingency; falsification ends the lease | `default-by-tenant` AZ note (§33-1368(A): application falsification is a material noncompliance; falsified criminal or eviction record, or current criminal activity, is not curable) | Covered by statute and carve-out. A lease-side application warranty is absent library-wide (§16.4) |
| Pets; assistance animals are not pets; pet liability insurance | `pet-policy-az`, `assistance-animal-accommodation`, `pet-insurance-requirement` | Covered |
| Keys; rent owed until keys returned; no lock changes; not re-keyed | `keys` (tagged; §33-1318(E)-(F) victim lock change) | Covered. **Rekey duty: confirmed absent** (§16.3) |
| Utilities | `utilities-responsibility`, `utilities-paid-by-landlord`, `utility-billing-disclosure-az` | Covered |
| Association (HOA) disclosure; dues paid by landlord | `hoa-compliance`; `edu-hoa-rental-rules-az` | Covered |
| Maintenance split (pool, pest, front and back yard) | `maintenance-allocation-az`; `landscaping-irrigation` (single family, §13) | Covered. The AAR form lets tenants take pool and yard work in any unit; §33-1324(C)-(D) limits that to a single family residence or a separate signed writing. Ours applies the statute |
| Tenant upkeep; report moisture, leaks and mold; written repair request is consent to entry | `tenant-maintenance`, `landlord-maintenance`; §33-1343(B) (checklist new topic); `edu-no-mold-disclosure-az` | Covered |
| Tenant replaces filters, bulbs and smoke/CO batteries | `smoke-detector-duty-az` (§36-1637(B)-(C)) | Covered. CO: no statute (§15.3) |
| Rules and law; landlord may amend by notice to comply with new law | `edu-lease-rules-az` (§33-1342); `entire-agreement` carve-out (§14) | Covered; Decision 4 matches the AAR approach |
| Tenant answers for occupants' and guests' violations and fines | `no-disturbance`, `guest-policy`, `hoa-compliance` | Covered |
| Crime-free provision; violation is material and irreparable | `crime-free-addendum-az` (optional; §33-1368 limits) | Covered. The AAR clause is broader ("any criminal activity", no victim carve-out). Ours stays within §33-1368 and §33-1315 by design (§14) |
| Pool barrier rules; receipt of the ADHS pool safety notice | `pool-safety-notice-az` (§36-1681) | Covered. The AAR form puts pool-barrier compliance on the tenant; §36-1681 barrier duties were not reallocated in our rows |
| Lead-based paint disclosure (pre-1978) | `lead-based-paint` | Covered |
| Smoke and CO detector presence and tenant upkeep | `smoke-detector-duty-az` | Covered (see above) |
| Fire sprinklers present or not | — | **No landlord duty located** (§16.3). No row |
| Alterations | `no-alterations` | Covered |
| Tenant liability; renter's insurance recommended | `tenants-property-insurance-ks-oh-ca` (no-disclaimer variant, §33-1315(A)(3)) | Covered. Renter's insurance: no landlord-tenant statute (the hits are Title 20 insurance sections only) |
| Access: 2 days' notice; emergency; no abuse | `landlords-access-az` (§33-1343) | Covered |
| Move-out condition; utilities on until inspection; tenant may attend | `surrender-end-of-term`, `utility-service-continuity`, `move-in-inspection-az` (§33-1321(C)) | Covered |
| Trustee's-sale notice | `edu-foreclosure-notice-duty-az` (§33-1331(B): **5 business days**); `foreclosure-notice-az` | Covered. The AAR form says 5 days, which is stricter by contract |
| Death of tenant; authorized person | `authorized-person-contact-az` (§33-1314(E)-(G)) | Covered |
| Breach remedies; prevailing-party fees and costs | `default-by-tenant` (§33-1315(A)(2) prevailing-party clause only) | Covered |
| Servicemembers (military orders; termination) | `early-termination` (preserves SCRA); `edu-no-servicemember-lease-rule-az` | **Corrected** (§16.2) |
| Counterparts and e-signatures | `electronic-signatures` | Covered |
| Entire agreement | `entire-agreement` | Covered (with the §14 carve-out, which the AAR form also relies on through its rules-and-law clause) |
| Governing law | `governing-law` | Covered |
| Severability | `severability` | Covered |
| Notices: registered or certified mail, deemed received 5 days after mailing | `notices` (AZ note: §33-1313(B)) | Covered |
| Equal housing | `edu-fair-housing-az` | Covered |
| Tenant acknowledgments: free ARLTA copy (ADOH); move-in form; right to attend the move-out inspection | `landlord-disclosure-az` (§33-1322), `move-in-inspection-az` (§33-1321(C)) | Covered |
| Indemnity and release of brokers and property managers | `edu-prohibited-lease-terms-az` (§33-1315(A)(3)) | No clause needed (brokers are not parties). An indemnity running to the landlord for the landlord's own liability would be void |
| Landlord confirms county-assessor rental registration | `edu-rental-registration-az` (§33-1902) | Covered |
| Time of essence; waivers; subordination; construction; "days" = calendar days; broker permission to publicise; agency confirmation; counter-offer | — | Contract boilerplate or broker mechanics; no Arizona statute located. Library-wide gap, not an AZ gap (§16.4) |

### 16.2 Rows changed

- **`edu-no-servicemember-lease-rule-az`: body and title revised (id kept).**
  - **What changed.** §26-168(D) gives National Guard and reserve members on active-duty or training orders of **any state** or the United States the protections of the 1940 federal civil-relief act (and USERRA). Subsections (A)-(C) are about employment, but (D) is not limited to employment by its words. The row now says Arizona extends federal protections to Guard members on state orders, and routes a tenant's termination or stay request to legal advice.
  - **Not determined:**
    - whether the 1940-Act reference reaches the current SCRA lease-termination section (federal law, not read);
    - whether any court has applied (D) to a residential lease (case law not searched).
  - **Currency:** compilation only. The §15.6 sweep matched landlord-tenant sections, not Title 26 (instruction 35 records the gap).
  - **Lesson (L.12 shape):** a section whose heading names another subject can carry a general rule in one subsection. The close-out search saw §26-168 and dismissed it by title.
- **`edu-holding-deposit-az` (new, VERIFIED, RECOMMENDED, education, Security Deposit).**
  - **Confirmed absent code-wide:** no holding-deposit or earnest-money rule for rentals. The full-text search ran "holding deposit(s)", "earnest money", "application deposit" and "reservation deposit"; every hit was reviewed.
  - **What the row explains:** §33-1321(A) (the cap on all security, however denominated) and §33-1321(B) (purpose in writing; anything not designated nonrefundable is refundable).
  - **Brokers:** §32-2151.01(C)-(D) requires the broker to state the earnest money's form in the lease or receipt.
  - **Open:** whether (B) applies before a lease exists. The body says the statutes don't settle it, and advises a written nonrefundable designation before taking the money.

### 16.3 Absences recorded (no row)

The full-text search matches exact phrases only, so variants were run.
- **Security devices or rekey at turnover:** confirmed absent.
  - "rekey", "rekeyed", "rekeying", "re-key", "re-keyed" and "re-keying" hit only §33-1318, the victim lock change.
  - "deadbolt(s)", "dead bolt", "door lock(s)", "change the locks" and "locks changed" returned 0 hits.
  - "security device(s)" hit only marijuana-cultivation sections (§§36-2852, 36-2853, read) and two non-housing sections (§§36-2801, 47-4A201, by title).
  - `keys` applies as written.
- **Fire sprinklers:** no landlord installation or disclosure duty.
  - §9-807 bars cities from requiring or penalising the choice to install sprinklers in a single-family detached or two-unit residence (codes adopted before 2009-12-31 excepted).
  - §11-861 has the county counterpart. Its title was read; the sprinkler subsection is past the portion read.
  - Other hits: §§11-810.01, 9-462.13, 9-461.18, 32-1121, 32-1121.01 and 9-808 (by title).
- **Renter's insurance:** no landlord-tenant rule. The hits are Title 20 insurance-licensing sections (§§20-332, 20-1510, 20-1693.02).

### 16.4 Cross-state question for Taylor (optional, not blocking)

The AAR form carries several standard terms the library has **for no state**:
- a servicemember termination clause stated in the lease (only `military-lease-termination-ca`, which is statute-driven);
- an application-accuracy warranty;
- non-waiver, time-of-essence, subordination and "days" definitions.

None is required by Arizona law, and `early-termination` already preserves SCRA rights. Adding any of them would be a new shared row for all 14 states, so it is a product decision, not an AZ fix. My recommendation:
- **Consider** a short SCRA notice clause and an application-accuracy clause.
- **Skip** subordination and time-of-essence. They favour lenders and landlords with little tenant-facing value.
- **Skip** a general non-waiver clause. It collides with acceptance-waiver statutes (AZ §33-1371, NE §76-1433), as the `late-fee` history shows.

**Decision (Taylor, 2026-09-27):**
- **SCRA:** no clause. Servicemember rights apply by statute whatever the lease says, and `early-termination` already preserves them.
- **Application accuracy:** at first, no. Taylor read it as the tenant merely re-confirming the application.
- **Reversed** once it was clear the clause makes a material falsehood a **lease breach**: added for all 14 states (§17). In a state with no statute on application falsification, a lie found after move-in is otherwise only a fraud claim.
- **Other boilerplate:** skipped. Subordination and time-of-essence mainly favour lenders and landlords. A general non-waiver clause collides with acceptance-waiver statutes.

§16.4 is closed.

### 16.5 Integrity

938 rows, 902 active. AZ has 106 active rows: 69 lease clauses and 37 education rows, all VERIFIED. No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent). Other states' active counts are unchanged, and no shared row's text changed in §16. Every row id named in the checklist's AZ sections exists in the CSV.

---

## 17. New shared row: `rental-application-accuracy` (all 14 states) — 2026-09-27

**Taylor's decision (§16.4, reversed):** add an application-accuracy clause to every state, because it makes a lie on the application a **lease breach** instead of leaving the landlord a fraud claim.

### 17.1 The row

- **Row settings:**
  - **id / topic:** `rental-application-accuracy`, group Default & Termination, LEASE_CLAUSE, **RECOMMENDED**, **VERIFIED**.
  - **States:** all 14, CO through AZ.
  - **Classification:** RECOMMENDED, like comparable boilerplate (`no-sublet-assign`, `joint-liability`).
- **What it says:**
  - The tenant represents that the application and screening information was true, correct and complete when given, and that the landlord relied on it.
  - A **materially false or misleading** statement is a **material breach**.
  - The landlord may use "the remedies this Lease and applicable law provide for a material breach."
  - The clause does not apply to information the landlord was not permitted by law to request or consider.
- **Design choices:**
  1. **No separate notice or cure language.** Each state's default-by-tenant variant supplies the notice, cure and no-cure mechanics. That keeps the clause off both sides of instruction 33: no new cure promise that could give up a no-cure ground (AZ §33-1368(A); FL §83.56(2)(a) pattern), and no cure waiver a state forbids.
  2. **"Materially"** keeps honest, trivial errors out. There is no knowledge element: AZ §33-1368(A) has none, and "materially" does the filtering.
  3. **The last sentence** keeps the clause off information that fair-housing law, CO's Rental Application Fairness Act, CA's criminal-history rules, NJ's Fair Chance in Housing Act or TX's criminal-record rules forbid the landlord to ask about or use.
  4. **No "to the extent permitted by law" wording.** This sidesteps NJ's rule against savings clauses that don't say which terms are void in New Jersey (N.J.S.A. 56:12-16; not read).
- **What "VERIFIED" means for this row:** the text conflicts with no statute logged for any tagged state. The basis is each state's logged primary-text findings: the checklist's "Fraudulent-misrepresentation lease termination right" row, each state's default-by-tenant variant and each state's screening rows. **No new primary text was read for states other than AZ.**
- **Open question (effectiveness, not conflict):** whether a false application supports eviction under the just-cause regimes: the CO HB24-1098 overlay, CA Civ. Code §1946.2 and the NJ Anti-Eviction Act. Not researched; flagged in those states' notes.
- **AZ:** §33-1368(A) already makes application falsification a material noncompliance, and falsified criminal record, eviction record or current criminal activity not curable. The clause states the same thing in the lease, and `default-by-tenant`'s carve-out preserves the no-cure grounds.

### 17.2 Propagation notes — paste into each log (§5a.1)

**Uniform.** One text for every state. No state needs an override on what was checked. The CO, CA and NJ open questions are about effectiveness, not conflict.

- **CO log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged CO** (§5a.1; uniform text, no CO override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Colorado's Rental Application Fairness Act (C.R.S. 38-12-901 to 905, `edu-rental-application-fairness-co`) bars considering rental or credit history over 7 years and most criminal history over 5 years. The last sentence keeps the clause off that information. Remedies run through `default-by-tenant`. **Open (effectiveness):** whether a false application is a for-cause ground under the HB24-1098 overlay for tenancies of 12 months or more. Not researched."
- **WY log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged WY** (§5a.1; uniform text, no WY override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. No application statute logged. Remedies run through `default-by-tenant`."
- **KS log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged KS** (§5a.1; uniform text, no KS override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Kansas does not regulate applications (`edu-no-rental-application-regulation-ks`). A statutory fraudulent-misrepresentation termination right was confirmed absent, so the clause gives the landlord a lease-breach route it would otherwise lack. Remedies run through `default-by-tenant-ks-ne` (K.S.A. 58-2564(a) notice and cure)."
- **NE log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged NE** (§5a.1; uniform text, no NE override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. No statute logged. Remedies run through `default-by-tenant-ks-ne`."
- **MN log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged MN** (§5a.1; uniform text, no MN override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. §504B.173 subd. 4(b) (applicant liability for materially false information) runs independently; the clause neither restates nor limits it. Remedies run through `default-by-tenant`."
- **ND log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged ND** (§5a.1; uniform text, no ND override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. §47-16-07.4 lets the induced party terminate a lease entered into on fraudulent misrepresentation, so the clause is consistent. `edu-fraudulent-misrepresentation-nd` already covers the tenant's side. Remedies run through `default-by-tenant`."
- **SD log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged SD** (§5a.1; uniform text, no SD override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Confirmed absent as a statute. Remedies run through `default-by-tenant-sd`."
- **OH log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged OH** (§5a.1; uniform text, no OH override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Confirmed absent as a statute. Remedies run through `default-by-tenant-ks-ne`."
- **CA log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged CA** (§5a.1; uniform text, no CA override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. No landlord termination right for application misrepresentation was located. For a tenancy covered by Civ. Code §1946.2, the clause's route is the at-fault just cause for breach of a material lease term; how courts treat a past misrepresentation under that ground is untested. Criminal-history screening limits (`edu-criminal-history-screening-ca`) and local ordinances are covered by the last sentence. Remedies run through `default-by-tenant`."
- **NV log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged NV** (§5a.1; uniform text, no NV override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Not located in NRS 118A (full read). Remedies run through `default-by-tenant`."
- **TX log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged TX** (§5a.1; uniform text, no TX override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Tex. Prop. Code §92.3515 lists inaccurate or incomplete information as a denial ground in the selection criteria (`edu-rental-application-tx`), so the clause is consistent. Criminal-record rules are in `edu-criminal-record-leasing-tx`. Remedies run through `default-by-tenant`."
- **NJ log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged NJ** (§5a.1; uniform text, no NJ override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. The Fair Chance in Housing Act (N.J.S.A. 46:8-52 to 64, `edu-screening-rules-nj`) limits criminal-history inquiry; the last sentence keeps the clause off that information. The clause avoids "to the extent permitted by law" wording. The N.J.S.A. 56:12-16 savings-clause rule was not read. Remedies run through `default-by-tenant-nj`. **Open (effectiveness):** the Anti-Eviction Act's grounds (2A:18-61.1) are exclusive, and whether one reaches a false application was not researched."
- **FL log:** "**2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged FL** (§5a.1; uniform text, no FL override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Fla. Stat. §83.56(2) (material-provision noncompliance: 7-day cure notice, or no-cure notice for the listed kinds) applies through `default-by-tenant-fl`. The clause adds no cure promise and no waiver."

### 17.3 Integrity

939 rows, 903 active. Every state's active count rose by exactly one: CO 115, WY 99, KS 115, NE 112, MN 120, ND 111, SD 91, OH 74, CA 151, NV 103, TX 129, NJ 80, FL 99, AZ 107. No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent). Every row id named in the new row's notes exists in the CSV. No existing row's text changed.

---

## 18. Landlord-experience screen (gap-discovery source 3) — 2026-09-27

**Method:** the everyday problems an Arizona landlord actually meets, from application to sale, each run against the AZ-active library. Where no row answered the scenario, the official ARS full-text search was run in Taylor's browser (exact phrases, with variants), and any statute found was read section-open on azleg.gov.

**Result:**
- **59 scenarios:** 55 covered.
- **Two gaps, each now an education row:** towing, and selling the property.
- **One body addition:** cooling, in `edu-landlord-maintenance-az`.
- **Four confirmed absences:** extended-absence notice, cash receipts, lease termination on the tenant's death, and statutory utility-shutoff notices to tenants.

With this, **all four gap-discovery sources are done** for AZ:
1. statute walk (ch. 10 full read);
2. professional lease (§16);
3. landlord experience (this section);
4. law outside the landlord-tenant title (§15 and adjacent reads).

### 18.1 Scenario map

| Scenario | AZ coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | `edu-holding-deposit-az` | Covered |
| Screening: fees, criminal history, income source, immigration status | `edu-no-fee-caps-az`, `edu-fair-housing-az`, `edu-no-source-of-income-rule-az`, `edu-no-immigration-inquiry-rule-az` | Covered |
| Applicant lied on the application | `rental-application-accuracy`; §33-1368(A) | Covered (§17) |
| Voucher holder applies | `edu-no-source-of-income-rule-az`; §33-1371 housing-assistance exception in `edu-partial-payments-az` | Covered |
| Unit not ready on move-in day | `possession-delay-az` | Covered |
| Required disclosures at signing | `landlord-disclosure-az`, `move-in-inspection-az`, `lead-based-paint`, `pool-safety-notice-az`, `bedbug-obligations-az`, `smoke-detector-duty-az`, `foreclosure-notice-az`, `utility-billing-disclosure-az` | Covered |
| Blank left in the lease | §33-1322(E); product rule (§7) | Covered (builder rule) |
| Owner never registered with the county assessor | `edu-rental-registration-az` | Covered |
| Property is in an HOA | `hoa-compliance`, `edu-hoa-rental-rules-az` | Covered |
| Deposit plus prepaid rent over the cap | `security-deposit-cap-az` | Covered |
| **Rent and money** | | |
| Rent is late | `late-fee-az`, `default-by-tenant`, `edu-eviction-process-az` (5-day notice) | Covered |
| Tenant pays part of the rent | `edu-partial-payments-az`, `late-fee-az` | Covered |
| Check bounces | `returned-payments`, `edu-dishonored-payment-remedies-az` | Covered |
| Tenant pays in cash and wants a receipt | `acceptable-payment-methods` | **No statute** (confirmed absent: no cash-receipt duty) |
| Raising the rent at renewal | `edu-rent-increases-az`, `edu-local-preemption-az` | Covered |
| Tenant asks why there's no city rental tax any more | `edu-rental-tax-az` | Covered (sunset: revise on or after 2027-01-01) |
| **During the tenancy** | | |
| AC fails in July | `habitability-timeline-az`, `edu-landlord-maintenance-az` (§§33-1324, 33-1364) | Covered; **body addition** from §9-1303 (city inspection programs count lack of adequate cooling). City cooling ordinances flagged |
| Tenant withholds rent or repairs and deducts | `habitability-timeline-az` | Covered |
| Scorpions, bedbugs, roaches | `bedbug-obligations-az`, `maintenance-allocation-az` (pest control) | Covered |
| Mold complaint | `edu-no-mold-disclosure-az`, `tenant-maintenance`, `landlord-maintenance` | Covered |
| Tenant causes damage, or won't keep the unit clean | `default-by-tenant`, `edu-landlord-maintenance-az` (§33-1369 repair and bill as rent) | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access-az` (§§33-1343, 33-1376) | Covered |
| Tenant changes the locks | `keys`; §33-1318(E)-(F) victim lock change | Covered |
| Tenant away for a month | `edu-abandoned-property-az` (abandonment only) | **No statute** (confirmed absent: no extended-absence notice duty) |
| Guest won't leave; squatter | `guest-policy`, `edu-guest-removal-az` | Covered |
| Roommate moves out | `joint-liability`, `no-sublet-assign` | Covered |
| Tenant sublets or lists on Airbnb | `no-sublet-assign`, `residential-use-only` | Covered |
| Noise and neighbor complaints | `no-disturbance`, `default-by-tenant` | Covered |
| Drugs, violence or other crime | `crime-free-addendum-az`, `edu-crime-nuisance-abatement-az`, §33-1368(A) immediate termination | Covered |
| Marijuana smoking or growing | `smoking-policy` (AZ note: §§36-2851(7), 36-2813) | Covered |
| Unapproved pet | `pet-policy-az`, `pet-insurance-requirement` | Covered |
| Assistance or emotional-support animal request | `assistance-animal-accommodation`, `edu-assistance-animals-az` | Covered |
| Disability modification request | `edu-fair-housing-az`, `no-alterations` | Covered |
| Tenant paints or alters the unit | `no-alterations` | Covered |
| HOA fines the owner because of the tenant | `hoa-compliance`, `edu-hoa-rental-rules-az` | Covered |
| Car towed from the lot | `parking-vehicle-rules` (defers to law) | **Gap → `edu-towing-az`** |
| Pool at the property | `pool-safety-notice-az`, `maintenance-allocation-az` | Covered |
| Yard and pool work by the tenant | `maintenance-allocation-az`, `landscaping-irrigation` (single-family only) | Covered |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence` | Covered |
| Landlord's master-metered utility is shut off for nonpayment | `habitability-timeline-az` (§33-1364 essential services) | Covered for tenant remedies. Utility-to-tenant shutoff notices: no statute ('master meter' variants 0 hits); Corporation Commission rules not read, flagged |
| Adding a new rule mid-lease, or a law changes | `edu-lease-rules-az`, `entire-agreement` carve-out | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination`, `edu-landlord-remedies-after-breach-az` (mitigation) | Covered |
| Domestic violence victim wants out | `dv-lease-termination-az` | Covered |
| Tenant is deployed or called up | `early-termination`, `edu-no-servicemember-lease-rule-az` (§26-168(D)) | Covered (§16) |
| Month-to-month notice either way | `edu-periodic-tenancy-termination-az` | Covered |
| Tenant stays after the lease ends | `holdover` | Covered |
| Tenant disappears | `edu-abandoned-property-az` | Covered |
| Tenant dies | `authorized-person-contact-az`, `early-termination` | Covered for property. Lease termination on death: no statute for dwellings ('death of the tenant', 'tenant dies' hit only mobile-home and RV sections and §33-1314); the lease's own terms and estate law govern. No row |
| Fire or casualty | `casualty-termination-az` | Covered |
| Eviction process | `edu-eviction-process-az`, `edu-prohibited-practices-az` | Covered |
| Retaliation claim | `edu-retaliation-az` | Covered |
| Belongings left after move-out or eviction | `edu-abandoned-property-az` | Covered |
| Deposit dispute | `security-deposit-return-az`, `edu-security-deposit-az` | Covered |
| Deposit refund never cashed | `edu-unclaimed-deposits-az` | Covered |
| Tenant asks to seal an eviction record | `edu-eviction-record-sealing-az` | Covered |
| **Owner changes** | | |
| Owner sells the property with a tenant in place | `security-deposit-return-az` (successor bound), `landlords-access-az` (showings) | **Gap → `edu-selling-rented-property-az`** (§33-1325) |
| Lender forecloses | `foreclosure-notice-az`, `edu-foreclosure-notice-duty-az` | Covered |
| Owner switches property managers | `landlord-disclosure-az` (§33-1322(C)); §33-1325(B) | Covered (now also in `edu-selling-rented-property-az`) |
| Buyer is a foreign-adversary entity | `edu-foreign-adversary-land-ban-az` | Covered |

### 18.2 Rows changed

- **`edu-towing-az` (new, VERIFIED, education, Parking & Storage).**
  - **Written authorization:** a private tow without the vehicle owner's permission needs the property owner's or agent's written authorization, either by signing each tow order or by a written contract valid for a set period (§9-499.05(C) for cities; §11-251.04(C) for counties). The carrier may not act as the owner's agent, and a violation is a class 2 misdemeanor for the carrier.
  - **Signs (cities only):** inside a city, the owner is deemed to allow unrestricted public parking unless signs at each entrance state the restrictions, what happens to violating vehicles, the maximum cost and where to find the vehicle (§9-499.05(B)). §11-251.04 has no sign requirement.
  - **Why it's worth a row:** a landlord who relies on the lease's towing clause without the signs has no lawful tow inside a city. `parking-vehicle-rules` already defers to law, so there is no clause conflict.
  - **Not read:** Title 28, ch. 11 (abandoned vehicles) and city towing ordinances.
- **`edu-selling-rented-property-az` (new, VERIFIED, education).**
  - **Release on sale:** §33-1325(A) releases a selling landlord only for events after written notice of the sale to the tenant, and only on a good-faith sale to a bona fide purchaser. The seller stays liable for deposit money due under §33-1321.
  - **Manager:** §33-1325(B) is the same rule for a manager whose management ends.
  - **Tied in:** the successor clause, disclosure currency, assessor registration and showing notice.
  - **Not said:** whether the lease binds the buyer. That is common law, not researched.
- **`edu-landlord-maintenance-az` (body sentence added).** §9-1303 (city rental inspection programs) lists "lack of adequate heating and cooling", infestation, and hazardous wiring, plumbing and structures as conditions materially affecting health and safety. City cooling ordinances (e.g. Phoenix) are flagged, not resolved.

### 18.3 Confirmed absences (no row)

The full-text search ran on 2026-09-27; every hit's section and title was reviewed.
- **Tenant notice of an extended absence** (URLTA-style): "extended absence" and "anticipated extended absence" returned 0 hits. "Absence of the tenant" hit only §33-1370 (abandonment).
- **Cash-rent receipt:** "receipt for cash" returned 0 hits. "Written receipt" (§§6-636, 44-6808, 44-290, 42-5075, 13-3112) and "cash payment" hits are all non-housing.
- **Lease ends on the tenant's death (dwellings):** "death of a tenant" returned 0 hits. "Death of the tenant", "tenant dies" and "deceased tenant" hit only §33-1314 (the authorized-person procedure, already covered) and the mobile-home and RV sections (§§33-1419, 33-1452, 33-2132).
- **Utility shutoff notice to tenants in master-metered buildings:** "master meter", "master metered" and "master-metered" returned 0 hits. Any such rule would be in Corporation Commission rules (A.A.C. Title 14), not read; flagged.

### 18.4 Integrity

941 rows, 905 active. AZ has 109 active rows: 70 lease clauses and 39 education rows, all VERIFIED. Other states' counts are unchanged since §17. No shared row's text changed in §18. No duplicate ids, dangling `supersedes`, display collisions, blank status or blank `states` (except the parent). Every row id named in the new notes and checklist cells exists in the CSV.


---

## 19. Claude Code sync — 2026-09-27

- **CSV installed as-is** after a full diff against the repo: 883 → 941 rows, nothing removed, no duplicates, no dangling `supersedes`, no blank status on an active row. Every other state's active count rose by exactly one (`rental-application-accuracy`). The only shared text change is `entire-agreement` (§14). Regenerated `clauseTemplates.js` (331 → 351) and `landlordEducation.js` (515 → 554). A direct run of the state filter shows 70 AZ clauses and no same-topic collisions; every other state's visible count rose by exactly one.
- **Propagation done:** the §14.2 and §17.2 notes were appended to all 13 other state logs. Both rows were added to all 13 citations files.
- **`lease-clause-citations-AZ.csv` built:** 109 rows (85 CITED, 12 GENERIC, 11 CONFIRMED_ABSENT, 1 PARTIAL: `edu-foreign-adversary-land-ban-az`).
- **Flag (B) done:** §§33-1318 and 33-1318.01 are cited on `dv-lease-termination-az`, so the AZ legal watch monitors them. **Flag (A)**, the per-state applicability condition, is recorded as a product gap in CLAUDE.md. It is not built.
- **Gap-discovery sources (Taylor, 2026-09-27):** §18's screen is kept as source 3, renamed the "landlord-scenario screen". Claude generates the scenarios itself and never asks Taylor for experience; Taylor's is Colorado-only and already in the CO research. The checklist's instruction 36 now requires four sources: the statute walk, a real-lease comparison, the scenario screen and an outside-title search. §18.1 is the model scenario list.

### 19.1 Gap-discovery status (checklist instruction 36)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1: A.R.S. Title 33 ch. 10 read whole) |
| Gap-discovery source 2 — real-lease comparison | Done (§16: AAR Residential Lease Agreement, Feb 2026) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§18: 59 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§15: official ARS full-text search; §12 research pass) |

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`holdover`** — a continued month-to-month tenancy is now "terminable by either party upon the written notice required by applicable law or, where applicable law sets no notice period, by this Lease". Wyoming has no statutory period (`periodic-tenancy-notice-wy` supplies one). Raised by the WY backfill (WY log §20.4).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `possession-delay-az`, `dv-lease-termination-az`, `casualty-termination-az` (new rows); `security-deposit-cap-az` and `move-in-inspection-az` → the existing `edu-security-deposit-az`.
- **Trimmed:** `security-deposit-return-az` keeps the landlord's application right, forwarding-address request and 60-day finality rule.
- **Optional (pattern 3):** `foreclosure-notice-az`, with `edu-foreclosure-notice-duty-az`.

### Verdict for every lease clause

All 19 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `casualty-termination-az` | Education | — | tenant right |
| `dv-lease-termination-az` | Education | — | tenant right |
| `move-in-inspection-az` | Education | — | landlord duty |
| `possession-delay-az` | Education | — | tenant remedies |
| `security-deposit-cap-az` | Education | — | cap |
| `security-deposit-return-az` | Split | SERVES_LANDLORD | keep application right and tenant demand; timeline to edu |
| `foreclosure-notice-az` | Optional + education | SERVES_LANDLORD | notice owed before lease |
| `authorized-person-contact-az` | Keep | SERVES_LANDLORD | opt-in |
| `bedbug-obligations-az` | Keep | SERVES_LANDLORD |  |
| `crime-free-addendum-az` | Keep | SERVES_LANDLORD |  |
| `landlord-disclosure-az` | Keep | REQUIRED_DISCLOSURE: A.R.S. § 33-1322 |  |
| `landlords-access-az` | Keep | SERVES_LANDLORD |  |
| `late-fee-az` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `maintenance-allocation-az` | Keep | SERVES_LANDLORD | opt-in |
| `nonrefundable-fees-az` | Keep | REQUIRED_DISCLOSURE: A.R.S. § 33-1321(B) |  |
| `pet-policy-az` | Keep | SERVES_LANDLORD |  |
| `pool-safety-notice-az` | Keep | SERVES_LANDLORD | acknowledgment of required notice |
| `smoke-detector-duty-az` | Keep | SERVES_LANDLORD | written notice shifts duty to tenant |
| `utility-billing-disclosure-az` | Keep | REQUIRED_DISCLOSURE: A.R.S. § 33-1314.01 |  |

---

## Retro checks (SOP 1.13) — 2026-09-30

**Scope:** the 16 [Retro] rules and 2 targeted fixes in the SOP 1.13 prompt. This is a scalpel, not a re-audit (rule 1); nothing else was reopened. Settings: Opus, high effort. Research mode was not used; every read was done in Taylor's built-in browser.

**Inputs:** `lease-clauses.csv` with 2,039 rows (1,916 active), which matches the prompt. AZ had 107 active rows before this retro. Earlier figures in this chat (109 active, after §18) predate the 2026-09-29 scrub; **the attached files are the only source of truth** (rule 8). Old output files were deleted at the start.

**Sources (rules 11, 12, 14, 16, 19):**
- **A.R.S. Title 33, ch. 10.** Re-read whole from azleg.gov, all 52 sections in the official index. Each section was fetched twice, the two copies matched, and each heading number matched the request.
- **Other sections read section-open:**
  - §§33-341 to 33-343;
  - Electronic Transactions Act §§44-7001 to 44-7061 (index loaded; §§44-7003, 44-7005, 44-7007, 44-7008, 44-7015, 44-7051 and 44-7052 read);
  - §§44-1521, 44-1522;
  - §§12-1171 to 12-1183 (index loaded; §§12-1178, 12-1179 and 12-1181 read), plus §§12-1567, 22-247 and 12-341.01;
  - §§9-500.34, 11-269.13.
- **Arizona Constitution.** All 322 sections in Articles 1–30 loaded and searched.
- **Court rules (rule 21: not state-code sections).**
  - Rules of Procedure for Eviction Actions: Rules 1–21 and Appendix A read in full on govt.westlaw.com. Westlaw says it is current with amendments received through May 1, 2026, and most rules carry **emergency amendments effective 2026-09-12**. That is a legal-watch item: a later permanent adoption may change them.
  - Ariz. R. Sup. Ct. 123 (Westlaw "Effective: December 1, 2025"): screened by term, not read whole.
- **Saved to the AZ retro source folder:** 30 statute files, each matching the browser's SHA-256; the constitution sections relied on; and the search batteries with their exact patterns and hits.
  - The RPEA text was saved without a hash check: the Westlaw tab navigated away before the hash was taken, and every Westlaw action needs its own approval.
  - Search controls: known-positive "material and irreparable" hit §33-1368; nonsense "zzqxv lease" returned 0.

### Results, one line per rule

| # | Rule | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| 1 | 37 tenancy type | **Fixed** | §§33-1310(18), 33-1314(C)-(D), 33-1368(A), 33-1370(C), 33-1375; every AZ-active row, including the scrub-created `edu-possession-delay-az`, `edu-dv-lease-termination-az` and `edu-casualty-termination-az` (faithful, no tenancy-type figure) | **(a)** `early-termination` → `early-termination-ks`, the variant with the fee and option for a fixed Term only. The base read as charging a fee to end a month-to-month tenancy that §33-1375(B) lets either party end on 30 days' notice. **(b)** `holdover` → new `holdover-az`: the trigger now includes a periodic tenancy ended by notice (see #12). **(c)** `edu-eviction-process-az`: the repeat-breach window runs "during the term of the lease"; added the §33-1310(18) definition and that its periodic-tenancy application is unsettled. **(d)** `edu-abandoned-property-az` and `edu-landlord-remedies-after-breach-az`: added §33-1370(C), which deems the term one month or one week for periodic tenancies. **(e)** `returned-payments` counts "during the Term": no AZ conflict, shared edit proposed (§9 below) |
| 2 | 39 eviction duties | **Fixed** | RPEA Rules 1–21 and Appendix A; §§12-1178, 12-1179, 12-1181, 12-1567, 22-247, 33-1368(D)-(E), 33-1370(D)-(I), 33-1374, 33-1379; Sup. Ct. R. 123 (term screen: 0 hits for evict, detainer, landlord, tenant) | New `edu-eviction-court-rules-az`, covering:<br>• complaint contents and attachments;<br>• lease provisions and a six-month accounting served with the complaint;<br>• proof of a signed partial-payment agreement, or dismissal;<br>• late and periodic fees awarded only if in a written lease;<br>• fee award capped at the amount paid;<br>• a property manager may not appear unless a lawyer;<br>• mailing a default judgment;<br>• the 45-day writ window;<br>• the duty to move to set aside an invalid judgment;<br>• **satisfaction of judgment within 30 days by court rule against 40 by statute**, recorded and not resolved (legal watch).<br>`edu-eviction-record-sealing-az`: added discretionary sealing (RPEA 20(b); §§12-1567(E)(4), 22-247(E)(4)) and the exclusion of sealed cases from public remote access (R. 123(g)).<br>`edu-abandoned-property-az`: post-writ animal duties spelled out (§33-1370(E) via §33-1368(E)).<br>Lockout ban, post-writ utilities and criminal trespass were already covered (`edu-prohibited-practices-az`, `edu-eviction-process-az`) |
| 3 | 41b `for-cause-eviction` | **Fixed** | §§33-1375, 33-1381, 33-1318(L), 33-1365; searches for just cause, good cause, for cause, condominium conversion (6 variants), change in use, relocation assistance, rent escrow, tenants' union | New `edu-no-for-cause-eviction-az`: confirmed absence. Situational limits: retaliation (including tenants'-union membership, with the six-month presumption), fair housing, and §33-1318(L). No conversion notice or rent-escrow bar for dwellings. Mobile-home grounds flagged |
| 4 | 43 cure promises | **Fixed** (with #1) | §33-1368(A)-(B), §33-1371(A) | `default-by-tenant` passes. Its rent limb ties the cure to "the time period specified by applicable law" after written notice, and Arizona requires a 5-day written notice before suit (§33-1368(B)), so the contract adds no notice. Its separate carve-out sentence covers the three no-cure grounds. `application-of-payments` promises no cure. `early-termination` promised a 10-day cure for any material breach; it is replaced by `early-termination-ks`, which routes landlord termination through the default clause |
| 5 | 44 terms turned into duties | **Checked, no issue** | §§33-1364(B), 33-1324(A)(4), 33-1361(A), 33-1310(11), 33-1343(A), 33-1314(C) | §33-1364(B) makes every utility and service "specified in the lease" a landlord duty with the §33-1364 remedies. That is intended, and the tag notes on `services-utilities-provided-ks-oh` and `utilities-paid-by-landlord` already cite it. The same holds for listed appliances (§33-1324(A)(4), on `appliances-included`) and promised facilities (§33-1310(11) "premises"). No clause offers an extra notice method or other generous term |
| 6 | 45 electronic notices | **Fixed** | §§44-7003, 44-7005, 44-7007, 44-7008, 44-7015, 44-7051, 44-7052, 33-1313, 33-1370(A) | New `edu-electronic-transactions-az`, covering: no eviction, default or cure exclusion; the written record must be printable and storable; a method prescribed by another law still applies; and a paper lease needs separate, express electronic assent (§44-7051(C)). `electronic-signatures`: AZ note updated (the old note said "not read"). No AZ clause relies on emailed default, cure or eviction notices. Federal E-SIGN §7003(b) not read |
| 7 | 46 lease as the notice | **Fixed** | §§33-1321(C), 33-1322(A)-(B), 33-1342, 33-1314.01, 33-1319, 36-1637(C) | New `move-out-inspection-notice-az` (REQUIRED; REQUIRED_DISCLOSURE: A.R.S. § 33-1321(C)). §33-1321(C) requires written notification at move-in that the tenant may attend the move-out inspection. The scrub's switch-off of `move-in-inspection-az` had left no lease text to serve as that notice. The other written notices already have their clause: `landlord-disclosure-az`, `smoke-detector-duty-az`, `utility-billing-disclosure-az` and `bedbug-obligations-az`. No shared clause promises a separate notice the lease could replace |
| 8 | 48 separate documents | **Checked, no issue** | §§33-1324(D), 33-1371(A), 36-1681(E), 33-1314.01(G), 33-1342(B)-(C) | `maintenance-allocation-az` says it must be a separate signed writing. `late-fee-az` points to a writing signed at the time of a partial payment and does not supply one. `pool-safety-notice-az` acknowledges the separate DHS document. `utility-billing-disclosure-az`'s mid-term option requires the 90-day notice. No clause claims to be a document the statute requires to be separate |
| 9 | 49 collection costs | **Checked, no issue** | §§33-1315(A)(2)-(3), 33-1368(C), 12-341.01(B); RPEA 13(f) | Arizona has no collection-cost ban. §33-1368(C) itself gives the landlord court costs and reasonable attorney fees, and §33-1315(A)(2) allows the prevailing-party clause `default-by-tenant` uses. "Reasonable costs and expenses" is lawful. `foreclosure-notice-az` and `maintenance-allocation-az` contain no cost terms. The fee cap (no more than paid or agreed) is now in `edu-eviction-court-rules-az` |
| 10 | 50 "lease controls" | **Checked, choices made on purpose** | ch. 10 searched for "unless otherwise agreed", "if provided in the rental agreement", "set forth in a written rental agreement" and similar (15 hits); §33-343 | Each choice the statute leaves to the lease:<br>• §33-1314(C) place and time of payment: `rent-payment` and `acceptable-payment-methods` set them; day-to-day apportionment left at the statutory default.<br>• §33-1314.01(C) mid-term submetering: offered in `utility-billing-disclosure-az`.<br>• §33-1315(A)(2) prevailing-party fees: in `default-by-tenant`.<br>• §§33-1368(B), 33-1377(F) written-lease late fee: `late-fee-az`.<br>• §33-1324(C)-(D): `maintenance-allocation-az` and the single-family tags.<br>• §33-1325 seller release: left at the default, which favours the landlord.<br>• §33-1344 residential use: `residential-use-only` matches.<br>• §33-1370(I) immediate disposal when the keys are returned: default kept (`surrender-end-of-term`).<br>• §33-1375(C) written consent to stay: `holdover-az`.<br>• §33-1318(C) waiver: left to the landlord.<br>• §33-343 (ch. 3) "unless expressly provided by written agreement": displaced for dwellings by §33-1366 under §33-1304, so no clause.<br>• RPEA 13(d) concession payback: new `rent-concession-az` (#13) |
| 11 | 51 plain language / consumer contract | **Fixed** | §§44-1521, 44-1522; searches for plain language, plain english, readable, consumer contract | New `edu-consumer-fraud-act-az` (topic `consumer-protection-act`). "Sale" expressly includes leases of real estate subject to a deed restriction from an earlier sale; reach to other leases is case law, not read. There is no unfair-practice list, no express lease exclusion and no plain-language statute. Blank spaces and the signed copy at signing are already governed by §33-1322(E) (`edu-lease-completeness-az`, #16). The rule 40 battery was already run (§15.4) |
| 12 | 53 figure vs shared clause | **Fixed** | §§33-1375(C), 33-1371(C), 44-6852, 33-1368, 33-1370(I) | `holdover` fails in AZ on shape and trigger. §33-1375(C) is a one-time "not more than two months' periodic rent or twice the actual damages … whichever is greater", only for a willful, bad-faith holdover, triggered after expiration or termination. The shared clause's "maximum amount permitted … for each day … after the end of the Term" hides that. Its acceptance-of-Rent month-to-month sentence also differs from the statute's written-consent rule. **AZ removed; new `holdover-az`** (construction quoted, rule 59). Passed: `rent-payment`, `returned-payments` ($25 plus bank charges, §44-6852), `default-by-tenant`, `surrender-end-of-term` (defers to §33-1370(I)), `assistance-animal-accommodation` (no figure) |
| 13 | 54 optional clauses | **Fixed** | ch. 10 whole; RPEA 13(d); §§33-1366, 33-1375(C), 33-1126, 33-1131 | Candidates and verdicts:<br>• **Holdover charge for the cases §33-1375(C) leaves out** (non-willful holdovers): offered as `holdover-rate-az` (CONDITIONAL; reuses `{{holdover_daily_rate}}`). Taylor confirmed the rule-54 approach.<br>• **Rent-concession payback** (RPEA 13(d)): offered as `rent-concession-az` (CONDITIONAL). Taylor said yes.<br>• **Landlord casualty termination:** offered as `casualty-landlord-termination-az` (CONDITIONAL); ch. 10 neither grants nor bars it, and the clause preserves §33-1366.<br>• **Crime-free:** already offered (`crime-free-addendum-az`).<br>• **Statutory waivers:** none. §33-1315(A)(1) bars waiving chapter rights; no exemption waiver serves the landlord; jury-waiver case law not read.<br>• **Eviction or notice-service fee:** not offered. No statute supports one, it could not be required for §33-1368(B) reinstatement, and RPEA 13(c)(2)(D) awards only periodic lease charges.<br>• **Opt-ins already offered:** `authorized-person-contact-az`, `utility-billing-disclosure-az` (mid-term option), `maintenance-allocation-az`, `late-fee-az`, `nonrefundable-fees-az`.<br>• **Landlord self-cure (§33-1369):** statutory, so no clause; education row (#16) |
| 14 | 54t tenant-caused damage | **Fixed (education; no clause)** | §§33-1341(6), 33-1368(C), 33-1369, 33-1361(A)(2), 33-1363(B), 33-1364(H), 33-1365, 33-1366, 33-1315, 33-343 | New `edu-tenant-caused-damage-az`. The law gives repair costs, all reasonable damages and self-cure billed as rent. The tenant's repair remedies each carry a tenant-fault exception, but **§33-1366 (casualty) has none**. So a `tenant-caused-damage-tn`-style no-abatement term would waive the §33-1366(A)(2) rent reduction (§33-1315(A)(1), with the (B) penalty for knowing use), and its lost-rent term adds nothing to §33-1368(C). Therefore no clause. `edu-casualty-termination-az` gained one sentence saying the right has no fault exception |
| 15 | 35c constitution | **Checked, no issue** | All 322 constitution sections (Articles 1–30) loaded; terms run in the batteries file | No cannabis provision: Arizona's marijuana laws are statutes. Art. 2 §26 (bearing arms), §8 (privacy) and §6 (speech) are written against government action; whether any reaches a private lease is case law, not read. No AZ clause restricts firearms, and `smoking-policy`'s marijuana ban rests on §36-2851(7), already noted. No fix |
| 16 | 27 seven topics | **Fixed: all seven have a row** | ch. 10 whole; RPEA 13(c), App. A; searches for algorithm (4 variants), quiet enjoyment and quiet possession, security camera (4 variants), the statutory-form patterns | **Present:**<br>• `edu-fees-as-rent-az` (§33-1310(12) excludes fees from "rent"; self-cure billed as rent; RPEA 13(c)(2)(C)-(D));<br>• `edu-landlord-self-cure-az` (§33-1369);<br>• `edu-lease-completeness-az` (§33-1322(E));<br>• `edu-statutory-forms-az` (§33-1331(A) form; RPEA App. A; no mandatory eviction-notice form, §33-1305(C)).<br>**Confirmed absent:**<br>• `edu-no-algorithmic-rent-rule-az`;<br>• `edu-no-quiet-possession-statute-az` (ouster and entry remedies noted);<br>• `edu-no-tenant-camera-rule-az` |
| 17 | Targeted fix: dangling pointers | **Fixed** (notes only, AZ segments) | — | `due-at-signing` → `edu-security-deposit-az`. `existing-condition` → `edu-security-deposit-az` and the new `move-out-inspection-notice-az`. Also found by a scan of every AZ row (rule 78): `security-deposit-return-az` → `edu-security-deposit-az`. Each is marked "(switched off 2026-09-29)". Provenance notes ("moved from …", in `edu-possession-delay-az`, `edu-dv-lease-termination-az`, `edu-casualty-termination-az` and `edu-security-deposit-az`) were left alone. The "log §18" pointers in AZ notes match §18 |
| 18 | Targeted fix: scrub-trimmed `security-deposit-return-az` | **Fixed (condition restored)** | §33-1321(D) | §33-1321(D) makes the itemized list final only if it was "mailed as prescribed by this subsection": within 14 business days after termination, delivery of possession and demand, by first-class mail. The trimmed sentence dropped that condition, so a late list would have read as final. That is a waiver barred by §33-1315(A)(1) and penalized under (B), and no number check can catch it. The sentence now reads "If Landlord mails the itemized list and any amount due within the time and in the manner Arizona law requires…". The application right and forwarding-address request needed nothing |

### Questions asked of Taylor (rule 76)
- **Westlaw access** (rule 39 court rules): Taylor approved each page action.
- **Holdover charge:**
  - Asked whether to offer it.
  - Taylor asked what made Arizona different. The answer: Arizona's statutory measure covers only willful, bad-faith holdovers, which is the rule 54 "for which cases" gap, so the clause is offered as in the seven earlier states.
  - Added as `holdover-rate-az`.
- **Rent-concession payback:** Taylor said yes. Added as `rent-concession-az`.

### Rows changed (CSV delta: 29 rows)
- **New (17).** Lease clauses (5):
  - `holdover-az` (supersedes `holdover`)
  - `move-out-inspection-notice-az`
  - `casualty-landlord-termination-az`
  - `holdover-rate-az`
  - `rent-concession-az`

  Education (12):
  - `edu-eviction-court-rules-az`
  - `edu-no-for-cause-eviction-az`
  - `edu-electronic-transactions-az`
  - `edu-tenant-caused-damage-az`
  - `edu-no-algorithmic-rent-rule-az`
  - `edu-fees-as-rent-az`
  - `edu-landlord-self-cure-az`
  - `edu-lease-completeness-az`
  - `edu-no-quiet-possession-statute-az`
  - `edu-statutory-forms-az`
  - `edu-no-tenant-camera-rule-az`
  - `edu-consumer-fraud-act-az`
- **Changed own rows (6):**
  - bodies: `security-deposit-return-az`, `edu-eviction-process-az`, `edu-abandoned-property-az`, `edu-landlord-remedies-after-breach-az`, `edu-eviction-record-sealing-az`, `edu-casualty-termination-az`;
  - plus notes and `last_checked` on each.
- **Changed shared rows (6), AZ tag, `AZ:` segment and `last_checked` only:**
  - `early-termination`: AZ removed;
  - `early-termination-ks`: AZ added;
  - `holdover`: AZ removed;
  - `electronic-signatures`, `due-at-signing`, `existing-condition`: notes only.
- **Integrity on the merged master (2,056 rows, 1,933 active):**
  - no duplicate ids, dangling `supersedes` or display collisions;
  - no blank status or blank `states` (except the parent);
  - 17 columns in every row; delta header identical to the master; CRLF line endings.
- **Counts:**
  - AZ: 107 → **123 active** (69 lease clauses, 54 education), all VERIFIED.
  - **No other state's active count changed.**
  - No two active AZ lease clauses share a topic_key.
- **New `{{variables}}`: none.** `holdover-rate-az` reuses `{{holdover_daily_rate}}`; `rent-concession-az` uses a bracket prompt.

### §9 Propagation (rule 62)
- **No shared `bodyText` was edited.** The changes to shared rows touch only the AZ tag, the `AZ:` notes segment and `last_checked`. No propagation is owed.
- **Proposed shared edit, not made: `returned-payments`.** "If more than two of Tenant's payments during the Term are returned" assumes a fixed Term (rule 37); in a month-to-month tenancy the count's window is undefined. Proposal: "during any 12-month period".
  - Lawful in AZ (no statute on the point).
  - The other 11 tagged states (CO, WY, KS, NE, MN, ND, SD, OH, GA, NC, PA) need checking by Claude Code against their logs before merge.

### §10 Findings for other states or the product (flagged, not fixed)
1. **Dangling pointers in other states' segments of `due-at-signing`.** The GA segment points to `security-deposit-cap-ga` and the NC segment to `security-deposit-cap-nc`, both switched off. These are targeted fixes for those states (rule 78).
2. **Court rule vs statute (legal watch).** RPEA Rule 4(d) sets 30 days to file a satisfaction of judgment; A.R.S. §§12-1567(A) and 22-247(A) set 40. Add RPEA Rules 4, 5, 13, 14 and 20 and Appendix A to the AZ legal watch: they are emergency amendments effective 2026-09-12, pending permanent adoption.
3. **Builder (M.13).** `due-at-signing` can schedule last-month rent at signing. In AZ that is prepaid rent inside the 1.5-month cap (§33-1321(A); `edu-security-deposit-az`). The builder's number check should sum deposit, pet deposit and prepaid rent for AZ.

### Proposed SOP changes
1. Batch every Westlaw read into one page-script action and hash the text in that same action. On the built-in browser, govt.westlaw.com is high-risk: every load and every script action needs its own approval, and navigating the tab wipes page state. (AZ retro: the RPEA hash was lost to a navigation.)
2. Rule 39: when a court rule and a statute set different periods for the same landlord duty, record both, have the education row tell landlords to meet the shorter, and flag it for the legal watch. (AZ: satisfaction of judgment, 30 days vs 40.)
3. Rule 46 with rule 78: when a scrub moves a "landlord duty" clause to education, check whether the statute requires a written notice that the clause was carrying. If so, keep or restore a lease clause as that notice. (AZ: §33-1321(C) move-out-inspection notice.)
4. Rule 51: read the consumer-protection act's definitions of "sale" and "merchandise", not only its unlawful-practice section. Arizona's reaches leases only of deed-restricted real estate on its face.

**Sync note (Claude Code, 2026-09-30):** this pass started from the 2,039-row library (before the Indiana merge). It was merged with `scripts/clause-library/merge-delta.py` against that base: shared rows got only AZ's tag and AZ note segment on top of the current rows, so Indiana's tags on `early-termination-ks`, `due-at-signing` and `existing-condition` were kept.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.32), 2026-10-03

**Scope:** the one [Retro] rule (79) and the four targeted fixes in the SOP 1.32 prompt. This is a scalpel, not a re-audit (rule 1); nothing else was reopened. Settings: Opus, high effort. Research mode was not used; every read was done in Taylor's built-in browser.

**Inputs:** `lease-clauses.csv` with 2,876 rows (2,755 active), which matches the prompt. AZ had 123 active rows before this retro, the same as the figure after the SOP 1.13 retro. **The attached files are the only source of truth** (rule 8). Old output files were deleted at the start: both files in the outputs folder, plus the 1.13 working copies (`changes.json`, the delta and the log section).

**Sources (rules 11, 12, 14):**
- **A.R.S. Title 33, ch. 10.** Re-read whole from azleg.gov: all 52 sections in the official index. Each section was fetched twice, the two copies matched, and each heading number matched the request.
  - 20 sections were unchanged since 2026-09-30: their hashes match the files saved then.
  - The other 32 are now saved too.
- **Other sections read section-open the same way:**
  - §§9-1301 to 9-1305; §§11-1704, 11-1705;
  - §§12-671, 12-1171, 12-1173, 12-1178, 12-341.01;
  - §§13-1202, 13-3601; §26-168;
  - §§33-341, 33-1260.01, 33-1413, 33-1416, 33-1806.01, 33-1904;
  - §§36-1636, 36-1637, 36-1681, 36-2813, 36-2851;
  - §§41-1491, 41-1491.14, 41-1491.19, 41-1491.38;
  - §§44-6852, 49-927.

  All of these are saved. §42-6004 is saved as a subsection (H) excerpt. §§33-443 and 11-1024 were read with their SHA-256 recorded but not saved.
- **Session laws:** chaptered text on azleg.gov for Laws 2016 ch. 352, 2023 ch. 204, 2024 ch. 250, 2025 ch. 191, 2026 ch. 69 and 2026 ch. 240. Approval lines and the relevant sections are saved as excerpts with SHA-256. Struck and added text were read from the page's markup (struck = class `O`, added = class `UP`), because the plain page text merges the two.
- **Official General Effective Dates page:** 2016-08-06, 2023-10-30, 2024-09-14, 2025-09-26, 2026-09-12.
- **31 CFR §802.221:** read on ecfr.gov ("up to date as of 10/01/2026"); (a)-(b) saved with SHA-256.
- **Official ARS full-text search:** run with controls. "Material and irreparable" hits §33-1368, "smoke detector" hits §36-1637, and the nonsense term "zzqxv lease" returns 0.
- **Not reached:** the ADHS pool-safety form, because azdhs.gov is not allowed in Taylor's browser.

### Results, one line per check

| # | Check | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| 1 | Rule 79: re-read before trusting a summary | **Fixed** | See the sources above. The citations file has no row resting on Nolo, law-firm or "N sources agree" sources, so no row matched the keyword screen. The screen instead covered rows whose notes name the research tool, the fetch tool or secondary sources (13), and rows that record no basis at all. | 57; the full list is in the row-by-row verdicts below. **Count:** before this retro, **46 of 123 AZ-active rows recorded no basis** in `lease-clauses.csv` notes. All 46 were read section-open, and a basis line was added to each:<br>• **43** are shared rows tagged at the original AZ pass (2026-09-26/27). Their AZ segment cited sections without naming what was read; 8 of them are generic and cite no section.<br>• **2** were created by the 2026-09-29 scrub: `edu-possession-delay-az` and `edu-dv-lease-termination-az`. Their basis is carried forward (provenance repair) and re-read.<br>• **1** is a shared row tagged AZ with no `AZ:` segment at all: `rental-application-accuracy`. A segment was added. |
| 2 | Targeted fix: dangling pointers | **Already covered in Retro checks (SOP 1.13) item 17** | Current `due-at-signing` and `existing-condition` AZ segments | None. Both pointers already name the active rows (`edu-security-deposit-az`; `move-out-inspection-notice-az`) and mark the old ids "(switched off 2026-09-29)". A re-sweep of every AZ-active row's `notes` and `bodyText` found no other pointer to a switched-off row; the only hits were provenance notes, which are history. |
| 3 | Targeted fix: scrub-trimmed clauses (rules 78 and 47) | **`security-deposit-return-az` already covered in 1.13 item 18; fixed one other row** | §33-1321(B)-(E) re-read; §33-1331; a search of ch. 10, §36-1637 and §36-1681 for lease-content phrases ("rental agreement shall", "with the rental agreement", "in a written rental agreement", "set forth in", "stated in the rental agreement", "shall contain", "shall include", "in writing", "written notice") | **`security-deposit-return-az`:** the restored §33-1321(D) condition ("within the time and in the manner Arizona law requires") is in the current row, and its finality and waiver wording tracks (D). Nothing a number check can't catch is missing.<br>**Required-content search:** each lease-content requirement has its clause: §33-1314.01(B) and (G) `utility-billing-disclosure-az`; §33-1315(A)(2) `default-by-tenant`; §33-1321(B) `nonrefundable-fees-az`; §33-1321(C) `move-out-inspection-notice-az`; §33-1322(A)-(B) `landlord-disclosure-az`; §§33-1368(B) and 33-1377(F) `late-fee-az`; §33-1324(C)-(D) `maintenance-allocation-az`; §36-1637(C) `smoke-detector-duty-az`; §36-1681(E) `pool-safety-notice-az` (separate DHS document); §33-1319(A)(1) `bedbug-obligations-az`.<br>**Fixed: `foreclosure-notice-az`.** The scrub kept the text but made the row optional (RECOMMENDED, SERVES_LANDLORD) on the reasoning that the notice is "owed before the lease". §33-1331(A) says the owner "shall include written notice of possible foreclosure **with the rental agreement**" when the foreclosure began before the lease. So the requirement applies at signing, the lease is its vehicle, and the clause carries the statutory form. As an optional row, a landlord could drop it. Changed to **CONDITIONAL, `REQUIRED_DISCLOSURE: A.R.S. § 33-1331(A)`**; text unchanged.<br>**`edu-foreclosure-notice-duty-az`:** its last sentence said to give the notice "first" and called the clause optional. It now reads "include the statutory notice with the lease".<br>The five switched-off rows carry tenant rights or caps (§§33-1321(A), 33-1362, 33-1318, 33-1366) that require no lease text, apart from `move-in-inspection-az`, whose notice was restored in 1.13 item 7. |
| 4 | Rule 62 vetting: `default-by-tenant`, CO's deletion of "and reasonable costs and expenses" | **Vouched, no change needed (supports the deletion)** | §§33-1315, 33-1368(C), 33-1377(D)/(F), 12-1178(A), 12-341.01; RPEA 13(f) (1.13 item 9) | **Arizona does not limit a landlord's recovery of collection or eviction costs.**<br>• §33-1368(C) gives the landlord, by statute, "all reasonable damages resulting from noncompliance ..., court costs, reasonable attorney fees and all quantifiable damage".<br>• §§33-1377(D) and (F) and 12-1178(A) put costs and fees in the detainer judgment.<br><br>**Arizona does limit one-way fee terms.** §33-1315(A)(2) bars a lease term that the tenant "agrees to pay the landlord's attorney fees", except a written prevailing-party clause. A prohibited term is unenforceable, and deliberate use of one known to be prohibited costs actual damages plus up to two months' rent (§33-1315(B)).<br>• The one-way phrase "reasonable costs and expenses" names no attorney fees, so 1.13 item 9 found it lawful as written. Read to include fees, it would collide with (A)(2).<br><br>**Deleting the phrase gives up nothing:**<br>• the statute already supplies costs, fees and reasonable damages, including collection expenses;<br>• the clause keeps "all rights and remedies available under applicable law" and the mutual prevailing-party sentence;<br>• a generic phrase is not a "charge stated in the rental agreement" for §12-1178(A), and RPEA 13 awards only periodic lease charges anyway.<br><br>Recorded here, not in the row's notes (rule 62). |
| 5 | Rule 62 vetting, shared rows | **Both vouched, no change needed** | §§33-341(D), 33-1304, 33-1314(D), 33-1368(A)-(B), 33-1374, 33-1375, 12-1178(C) | **(1) `surrender-end-of-term` (CA):** the qualified wording is lawful and accurate in AZ. The current wording's duty is backed at expiration of a fixed term by §33-341(D): the tenant "shall surrender possession" and no notice to quit is needed. Ch. 10 does not conflict (§33-1304), and §33-1375 covers periodic tenancies and holdover. Arizona has no just-cause rule (`edu-no-for-cause-eviction-az`). One case where "immediately" says more than AZ law backs: after a §33-1368(B) nonpayment termination, the rental agreement is reinstated if the tenant pays before or after filing, until judgment. In any case the landlord recovers possession only through the court (§33-1374), and no writ issues for 5 calendar days after judgment (§12-1178(C)). "Unless applicable law entitles Tenant to remain" fits that and grants nothing Arizona law doesn't.<br>**(2) `default-by-tenant` (MN, ND, CA):** moving the no-cure carve-out into its own sentence reaching both limbs is lawful in AZ. No Arizona provision lets a landlord proceed on nonpayment without the §33-1368(B) five-day written notice and chance to pay, so a self-limiting carve-out has nothing to reach on the rent limb. The no-cure grounds in §33-1368(A) are all non-rent (falsified criminal or eviction record, material and irreparable breach, a repeat of the same or similar noncompliance), and each still requires a written notice. The carve-out speaks only to cure, not notice. The late-fee sentence is unaffected. |

### Rule 79 row-by-row verdicts
**Rows whose basis named the research tool, the fetch tool or secondary sources (13):**
- `smoking-policy` (shared): **confirmed**.
  - §36-2851(7) and §36-2813(A) say what the note says, and the quotes match.
  - The federal-benefit exception sits on (A).
  - Both sections carry the compilation's "Caution: 1998 Prop. 105 applies" note.
  - AZ segment basis upgraded.
- `edu-local-preemption-az`: **fixed**.
  - The §11-1705 summary attached the 15-calendar-day floor to every follow-up fee; it belongs only to the (B)(2) failure-to-correct fee. Notes corrected.
  - The body said only counties may not charge "for initial inspections". It now says cities (§9-1305(A)) and counties (§11-1705(A)) bar fees for the listed initial inspections and may charge for later follow-ups.
  - Everything else is confirmed, including that Laws 2023 ch. 204 struck the TPT-licence carve-out from §§9-1304(B) and 11-1704(B).
- `edu-rental-tax-az`: **confirmed**.
  - Laws 2023 ch. 204: Sec. 3 strikes former §33-1314(E); Sec. 4 adds §33-1332(A)-(B); Sec. 5 is the 2026-12-31 repeal; Sec. 12; approved 2023-08-01.
  - The 2023 general effective date is 10-30-2023.
  - §42-6004(H) is confirmed.
  - Body unchanged.
- `edu-no-drug-lab-disclosure-az`: **fixed (notes)**.
  - Laws 2016 ch. 352 Sec. 1 repeal and its approval (2016-05-19) are confirmed; the general effective date is 08-06-2016.
  - The note said the act's ADEQ authority was at §49-927(B)(8), "current text NOT re-read". Current §49-927(B) lists six purposes, none about drug laboratories, so that authority is gone from the compilation.
  - The absence now rests on the official full-text search: 0 hits for every drug-lab term.
- `edu-foreign-adversary-land-ban-az` (PARTIAL): **basis upgraded; PARTIAL stays** (the reach question is still open).
  - Laws 2026 ch. 240 approval line (2026-06-22) and "(ENACTED WITHOUT THE EMERGENCY)" were read from the chaptered text, so the act is effective 2026-09-12. That is no longer an inference.
  - 31 CFR §802.221(a)(1) "Any foreign national" was read on eCFR. So §33-443(N)(7)(f) can be read to reach an individual national of a listed country; whether it does stays unresolved.
- `edu-no-servicemember-lease-rule-az`: **fixed (notes)**. The §33-1413(F) summary dropped "which do not allow such prior notification"; it is restored.
- `edu-assistance-animals-az`: **confirmed, with a correction**.
  - The chaptered Laws 2025 ch. 191 adds the section as "41-1497.38". So the fetch tool read the act correctly; the compilation codifies it as §41-1491.38.
  - The citations file wrongly called "41-1497.38" a misreading; that is corrected.
  - The 2025 general effective date is confirmed (09-26-2025).
- `edu-guest-removal-az`: **confirmed**.
  - Laws 2026 ch. 69 amends only §§12-1171 and 12-1173; approved 2026-05-29; no emergency clause.
  - Effective 09-12-2026.
- `pool-safety-notice-az`: **statute confirmed; form not reached**.
  - §36-1681(D) opens "This section does not apply to", so the exemptions reach the (E) notice.
  - The ADHS form facts still rest on the research pass, marked so in the notes.
- `edu-hoa-rental-rules-az`, `edu-no-fee-caps-az`, `edu-rent-increases-az`, `edu-no-deposit-interest-az`: **confirmed, no change**.
  - Their basis is the section-open read of ch. 10.
  - "Secondary sources" appears only as context about bills (HB 2243, HB 4122 and the HOA bills) that did not become law. Today's re-read of the compilation, updated through the 2026 session, has no such provision.

**Rows that recorded no basis (46; basis line added to each):**
- **Shared rows: confirmed (35).** Each cited subdivision says what the note says:
  - `rent-payment`, `returned-payments` (Laws 2024 ch. 250 Sec. 35 also confirmed);
  - `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`;
  - `utilities-responsibility`, `utility-service-continuity`, `tenant-maintenance`, `no-alterations`, `joint-liability`, `utilities-paid-by-landlord`, `appliances-included`;
  - `default-by-tenant`, `surrender-end-of-term`, `notices`, `severability`, `entire-agreement`, `pet-insurance-requirement`, `keys`, `guest-policy-day-limit`;
  - `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `hoa-compliance`, `assistance-animal-accommodation`;
  - `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `services-utilities-provided-ks-oh`;
  - `landlord-maintenance` (its "§9-1303, NOT read" is now read: §33-1324(A)(1) incorporates it);
  - `rental-application-accuracy` (no AZ segment before; one added).
- **Shared rows: generic, no section cited, no ch. 10 provision bears (8):**
  - `governing-law`, `addendum-precedence`, `assigned-parking-space`, `tenant-forward-proceedings-ca`;
  - `utility-payment-evidence`, `fire-safety-grilling`, `parking-vehicle-rules`;
  - `lead-based-paint` (federal labels not re-read).
- **`guest-policy` (shared): fixed (notes).**
  - The note merged §33-1378's two sentences into one.
  - "Knowingly", and the request by the tenant or the landlord entitled to possession, attach only to removal by an officer.
- **`edu-dv-lease-termination-az` (scrub-created): fixed (body).** The move dropped two qualifiers, which are restored:
  - The switched-off clause's "as Arizona law defines it": §13-3601(A) requires a listed relationship, so a stranger's threat is not domestic violence.
  - §33-1318(A) limits sexual assault to one "in the tenant's dwelling", not anywhere "in the property".
- **`edu-possession-delay-az` (scrub-created): confirmed** against §33-1362(A)-(C).

### Rows changed (CSV delta: 57 rows)
- **Own rows (12):**
  - bodies: `edu-local-preemption-az`, `edu-dv-lease-termination-az`, `edu-foreclosure-notice-duty-az`;
  - `rule_type` and `lease_clause_basis`: `foreclosure-notice-az`;
  - notes only: `edu-rental-tax-az`, `edu-no-drug-lab-disclosure-az`, `edu-foreign-adversary-land-ban-az`, `edu-no-servicemember-lease-rule-az`, `edu-assistance-animals-az`, `edu-guest-removal-az`, `pool-safety-notice-az`, `edu-possession-delay-az`;
  - `last_checked` 2026-10-03 on each.
- **Shared rows (45):** only the `AZ:` notes segment and `last_checked` changed. These are the 44 no-basis shared rows plus `smoking-policy`. A script check confirms no other state's segment and no other field changed.
- **Citations file:** `lease-clause-citations-AZ.csv` is updated for the same 57 rows: basis upgraded, `last_checked` 2026-10-03, and the `edu-assistance-animals-az` correction. `edu-foreign-adversary-land-ban-az` stays PARTIAL.
- **Integrity on the merged master (2,876 rows, 2,755 active):**
  - no duplicate ids, dangling `supersedes` or display collisions;
  - no blank status or blank `states` (except the parent);
  - 17 columns in every row; delta header identical to the master; CRLF line endings.
- **Counts:**
  - AZ: 123 active before and after (69 lease clauses, 54 education), all VERIFIED.
  - No state's active count changed.
  - No new `{{variables}}`.

### §9 Propagation (rule 62)
- **No shared `bodyText` was edited.** No propagation is owed.
- **Vouches (rule 62, recorded here rather than in the rows):**
  - `default-by-tenant`: CO's deletion of "and reasonable costs and expenses" is vouched for AZ.
  - `default-by-tenant`: MN's carve-out restructure is vouched for AZ.
  - `surrender-end-of-term`: CA's "unless applicable law entitles Tenant to remain" is vouched for AZ.
  - Reasons are in checks 4 and 5 above.

### §10 Findings for other states or the product (flagged, not fixed)
1. **Foreclosure notices demoted by the scrub.** `foreclosure-disclosure-nv` and `foreclosure-disclosure-mn` are also RECOMMENDED / SERVES_LANDLORD, the same pattern the scrub gave AZ.
   - Whether each statute requires the notice in or with the lease (AZ: "with the rental agreement") or before it is a question for those states' next retros.
   - Not checked here: their statutes were not read.
2. **Struck text in azleg session laws.** On the chaptered-act pages, plain text extraction merges struck and added words. For example, §44-6852 reads "sections 32-328 and section 32-507". Read the class `O` (struck) and `UP` (added) spans before summarising what an act changed.

### Proposed SOP changes
1. **Rule 78:** a library-wide pass that changes a row's `rule_type` or `lease_clause_basis`, for example from REQUIRED or CONDITIONAL to RECOMMENDED or SERVES_LANDLORD, counts as trimming it. Before demoting, re-read the statute's vehicle words ("with the rental agreement", "in the lease", "in a written rental agreement"); a notice required with the lease stays CONDITIONAL or REQUIRED. (AZ: `foreclosure-notice-az`, §33-1331(A).)
2. **Rule 79:** a state-level statement in the log ("ch. 10 read whole") does not record a basis on a row. Each state segment on a shared row that cites sections needs its own one-line basis naming what was read; otherwise the screen counts it as no basis. (AZ: 43 of the 46 no-basis rows were shared rows of this kind.)
3. **Rule 79:** when a move carried a definitional qualifier ("as Arizona law defines it", "in the tenant's dwelling"), the moved row must keep it. Check that along with conditions. (AZ: `edu-dv-lease-termination-az`.)
4. **Rules 11 and 16 (azleg session laws):** read struck and added text from the page markup (class `O` = struck, `UP` = added), not from the plain page text, which merges the two. Read the chaptered act's own section number before calling a fetch-tool number a misreading: the codifier may renumber. (AZ: Laws 2025 ch. 191 adds "41-1497.38", codified as §41-1491.38.)

## Circle-back sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 2b10851`: 57 rows updated (12 AZ rows, 45 shared rows whose AZ segment gained a basis), no new rows, no refusals. AZ active 123, unchanged; no same-topic pairs; every other state's set unchanged. The outputs arrived in a `results/` subfolder.
- **Citations file:** the pass's own updated `lease-clause-citations-AZ.csv` was adopted after checking it changes only `last_checked` and `notes` on the same 57 rows; it came with LF line endings and was rewritten with the repo file's CRLF.
- **Guards:** all pass. **Statute spot-check, 3 of 3, against azleg.gov:** A.R.S. § 33-1331(A) ("with the rental agreement") behind the restored `foreclosure-notice-az`; § 33-1315(A)(2) behind the `default-by-tenant` vouch; § 33-1318(A) ("as defined in section 13-3601"; "in the tenant's dwelling") behind the corrected `edu-dv-lease-termination-az`.
- **Rule 62:** AZ vouched for all three pending edits (CO's and MN's `default-by-tenant` edits, CA's `surrender-end-of-term` qualifier); recorded in the backlog tally.
- **SOP 1.35:** all four proposals adopted (rules 16, 78, 79). AZ's conformance column is complete except the examples.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no AZ override. AZ's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no AZ override. AZ's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where AZ law lets Landlord proceed without a cure opportunity. Uniform; no AZ override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for AZ. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any AZ row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach AZ's law; to be confirmed at AZ's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


# Topic gaps pass (end-of-run consistency pass, 2026-11-04 to 11-05): Desktop's log

# Topic gaps: Arizona — gaps log (cumulative)

Final copy, 2026-11-05. Topics answered so far: 250 of 250. Main pass: 58; helper slice A: 96; helper slice B: 96.

## §1 Sources, channel and currency

- **Step A (2026-11-04):** `lease-clauses.csv` decompressed to 52,616,417 bytes, SHA-256 `bc7f9020…cdbece1b3b6` (matches); 13,952 rows, 13,841 active, 124 active rows carry AZ; `missing-topics-AZ.md` lists 250 topics. All match. Old output copies were cleared before starting.
- **Statutes, session laws, Constitution:** the attached corpus `corpus-AZ-20261102.tar.xz` (SHA-256 `25a4f37d…6169ee07e`, matches its `.sha256`). It was extracted to its own directory and read only by script. It holds:
  - the whole text of A.R.S. Titles 1, 9, 11, 12, 13, 26, 32, 33, 36, 40, 41, 42, 44, 46 and 49 (azleg.gov section pages, mostly dated 09/09/26);
  - catchlines of all 49 titles;
  - 786 chapter laws from the 2024-2026 sessions;
  - the Arizona Constitution.
  Every relied-on section was opened whole with the reader script, and the assembler refuses a row that cites an unopened section. Quotes in notes were checked by script against the cited section: 0 mismatches.
- **Not held, flagged, not resolved:**
  - the Arizona Administrative Code, including Corporation Commission utility rules (A.A.C. title 14);
  - the Rules of Procedure for Eviction Actions;
  - case law (leads only);
  - city and county codes;
  - Titles 20 (insurance) and 47 (UCC), held as headings only.
- **Federal:** sections were read on govinfo.gov in Taylor's built-in browser. The excerpts relied on were saved to the workspace and verified line by line against the browser text by hash:
  - 42 U.S.C. §§ 3604, 3617;
  - 15 U.S.C. § 9058;
  - 34 U.S.C. § 12491.
  On 2026-11-04 the helpers' queued needs were read and saved the same way:
  - 9 U.S.C. § 2;
  - 15 U.S.C. § 7003;
  - 25 U.S.C. § 415;
  - 42 U.S.C. § 3603;
  - 24 C.F.R. § 982.310 (CFR annual edition, 2025-04-01);
  - 40 C.F.R. §§ 61.141, 61.145 (CFR annual edition, 2025-07-01).
  On 2026-11-05 four more were read the same way:
  - 42 U.S.C. §§ 4852d(a), 13663(a);
  - 24 C.F.R. §§ 100.202, 100.203.
  Also on 2026-11-05:
  - 50 U.S.C. § 3955(a)-(b);
  - 11 U.S.C. §§ 362(a)(3), (b)(22)-(23) and 365(e)(1);
  - 42 U.S.C. §§ 4851b(27), 13664(a)(2);
  - 24 C.F.R. §§ 982.310(b), (e), 982.404, 982.405, 982.451(b)(5), 982.551(d).
  Not read: 47 C.F.R. § 1.4000; the FCRA sections helpers queued (15 U.S.C. §§ 1681b(b), 1681s-2(a)) and the remaining parts of 40 C.F.R. § 61.145. Rows that rely on them say so.
  The CFR text is the annual edition; eCFR was not checked.
- **Arizona sections outside the corpus:** A.R.S. §§ 43-1072 and 28-8484 (2026-11-04), and §§ 17-304, 18-551, 18-552 and 25-214 (2026-11-05), in titles held as headings only, were read on azleg.gov in Taylor's built-in browser and saved with the same line-hash check. No 2024-2026 act amends either (a search of `laws/`). § 43-1072(C) turned a helper's NEEDS_REVIEW absence row into a Present row.
- **Currency:**
  - **AZG-CUR-001** (rerun of item 9, with a control): no 2024-2026 act amends a section of A.R.S. §§ 33-1301 to 33-1381. Three acts cite ARLTA sections while amending others: Laws 2025, ch. 111 (§ 33-1126); Laws 2026, ch. 147 (Title 40); and Laws 2026, ch. 194 (§§ 12-1567, 22-247).
  - **AZG-CUR-002:** 0 line-broken section numbers. The two act-name hits (Laws 2024, ch. 64 and Laws 2025, ch. 241) are mobile-home and Department of Housing acts.
  - **AZG-M-009** (non-ARLTA sections relied on): only Laws 2026, ch. 242 amends a relied-on section (§ 13-3602, which stays in place), and Laws 2026, ch. 69 amends §§ 12-1171 and 12-1173 (unlawful occupants; § 12-1173(C) leaves ARLTA remedies untouched). STATUTES.TXT already shows both.
  - Laws 2024, ch. 52, a real-estate licensing act, amends 23 sections of Title 32 (including §§ 32-2101, 32-2108.01 and 32-2174). Of the sections the main pass relies on, it amends only § 32-2174, and in that section only subsection (A) changes (trust-account titling). STATUTES.TXT shows the amended text. The figure was corrected after helper A pointed out the act also amends § 32-2108.01.
  - Helpers ran their own `laws/` checks for the sections they rely on; these are recorded in each row's notes.

## §2 Topics answered

Each line gives: topic — row id(s) — Present, Absent or tagged — citation.

- `accessory-dwelling-unit` — `edu-accessory-dwelling-unit-az` — Present — A.R.S. §§ 9-461.18, 11-810.01, 9-500.39(B)(9), 11-269.17(B)(9)
- `actual-notice-method` — `edu-no-agreed-notice-method-rule-az` — Absent — A.R.S. § 33-1313(B); FEDERAL: 15 U.S.C. § 7003(b)(2)(B); no agreed-method statute (battery AZG-A-002)
- `adverse-proceeding-notice` — `edu-adverse-proceeding-notice-az` — Present — A.R.S. § 33-1331; no tenant-to-landlord duty (battery AZG-A-003)
- `alarm-tampering-fee` — `edu-no-alarm-tampering-fee-az` — Absent — No statute (battery AZG-A-004); A.R.S. §§ 36-1637(B)-(C), 33-1341(6), 33-1368(C)
- `alt-housing` — `edu-alt-housing-az` — Present — A.R.S. § 33-1364(A)(3), (F)-(H); no landlord rehousing duty (battery AZG-A-005)
- `animal-care-access` — `edu-animal-care-access-az` — Present — A.R.S. §§ 33-1314(E)-(G), 33-1370(E), 33-1343
- `appliances-excluded` — `edu-appliances-excluded-az` — Present — A.R.S. §§ 33-1324(A)(4), (A)(6), (C)-(D), 33-1310(11), 33-1315(A)(3); no presumption (battery AZG-A-006)
- `application-fees` — `edu-application-fees-az` — Absent — No statute; A.R.S. §§ 33-1321(B), 41-1491.19
- `asbestos-hazards` — `edu-no-asbestos-rule-az` — Absent — No state statute (battery AZG-A-007); A.R.S. § 33-1324(A)(1)-(2); FEDERAL: 40 C.F.R. §§ 61.141, 61.145(a), (b)(1)
- `association-obligations-disclosure` — `edu-no-association-disclosure-az` — Absent — No statute (battery AZG-A-008); A.R.S. §§ 33-1260.01, 33-1806.01
- `attorney-fees` — `edu-attorney-fees-az` — Present — A.R.S. §§ 33-1315(A)(2), 12-341.01, 33-1368(B)-(C), 33-1377, 12-1178
- `automatic-renewal` — `edu-no-automatic-renewal-rule-az` — Absent — No statute (battery AZG-A-009); A.R.S. §§ 33-1314(A), (D), 33-1375, 33-1310(18)
- `balcony-inspection` — `edu-no-balcony-inspection-rule-az` — Absent — No statute (battery AZG-A-010); A.R.S. § 33-1324(A)(1)-(3)
- `bed-bug-cooperation` — `pest-cooperation-pr` — tagged — A.R.S. §§ 33-1319(B), 33-1314(A), 33-1343; tag pest-cooperation-pr
- `binding-arbitration` — `edu-no-lease-arbitration-statute-az` — Absent — No lease-arbitration statute (battery AZG-A-011); A.R.S. §§ 12-3006(A), 12-3004(B)(4), 33-1315(A)(1), 33-1305(B); FEDERAL: 9 U.S.C. § 2
- `cannabis` — `edu-cannabis-az` — Present — A.R.S. §§ 36-2813(A), 36-2814(A)(2), 36-2851(7), (14), 36-2852(A)
- `carpet-cleaning` — `carpet-cleaning-ar` — tagged — A.R.S. §§ 33-1321(D), 33-1314(A), 33-1341(2); tag carpet-cleaning-ar
- `casualty-and-mitigation-waivable` — `edu-casualty-mitigation-nonwaivable-az` — Present — A.R.S. §§ 33-1315(A)(1), (B), 33-1366, 33-1305(A), 33-1370(C)
- `certificate-of-occupancy-disclosure` — `edu-no-certificate-of-occupancy-disclosure-az` — Absent — No statute (battery AZG-A-014); A.R.S. §§ 33-1324(A)(1), 9-1303(13), 9-1302(B)
- `children-occupancy` — `edu-children-occupancy-az` — Present — A.R.S. §§ 33-1317, 41-1491.01, 41-1491.14, 41-1491.04
- `cold-weather-vacate-notice` — `edu-no-cold-weather-vacate-notice-az` — Absent — No statute (battery AZG-A-015); A.R.S. §§ 33-1341(5), (8), 33-1324(A)(6)
- `collection-fee` — `edu-collection-fee-az`, `collection-fee-az` — Present — A.R.S. §§ 32-1051(3), 32-1004(A), 33-1314(A), 33-1315(A)(2)
- `common-area-lighting` — `edu-no-common-area-lighting-rule-az` — Absent — No statute (battery AZG-A-017); A.R.S. §§ 33-1324(A)(1), (3), 9-1303(1)(h)
- `communal-land-lease-approval` — `edu-no-communal-land-lease-approval-az` — Absent — No state approval statute (battery AZG-A-018); Ariz. Const. art. 20, § 4; FEDERAL: 25 U.S.C. § 415(a)
- `condemned-premises-rent-bar` — `edu-no-condemned-rent-bar-az` — Absent — No condemnation rent bar (battery AZG-A-020); A.R.S. §§ 33-1366, 33-1361(A), 33-1364, 33-1365, 33-343
- `confession-of-judgment` — `edu-confession-of-judgment-az` — Present — A.R.S. § 44-143
- `confirmed-absences-habitability` — `edu-confirmed-absences-habitability-az` — Present — A.R.S. §§ 33-1324, 33-1315(A)(1), 33-1361, 33-1363, 33-1364, 33-1365, 33-1368(B), 9-1303; absences in batteries AZG-A-004, -007, -010, -017, -021
- `confirmed-absences-misc` — `edu-confirmed-absences-misc-az` — Absent — No statute (battery AZG-A-022); inventory of absence rows
- `confirmed-absences-outside-title` — `edu-confirmed-absences-outside-title-az` — Present — A.R.S. §§ 12-1173(A)(3)(b), (B), (C), 33-1378, 33-1902(C); no registration-precondition statute (battery AZG-A-023)
- `construction-liens` — `edu-construction-liens-az`, `no-liens-az` — Present — A.R.S. §§ 33-981(A)-(B), 33-992.01(A)(3), 33-1008(A); no lessor-protection statute (battery AZG-A-024)
- `conversion-notice` — `edu-no-conversion-notice-az` — Absent — No tenant conversion statute (battery AZG-A-025); A.R.S. §§ 33-1215(A)(11), 32-2181(A)(24), 33-1375, 33-1476.01(A)
- `cure-and-eviction-grounds` — `edu-cure-and-eviction-grounds-az` — Present — A.R.S. § 33-1368(A), (B), (G); § 33-1315(A)(1)
- `defective-drywall-disclosure` — `edu-no-drywall-disclosure-az` — Absent — No statute (battery AZG-A-026); A.R.S. § 33-1324(A)(1)-(2)
- `deposit-cost-schedule` — `edu-deposit-cost-schedule-az` — Present — A.R.S. §§ 33-1321(B), (D), 33-1310(15)
- `deposit-installments` — `edu-no-deposit-installment-rule-az` — Absent — No statute
- `deposit-last-month-rent` — `edu-deposit-last-month-rent-az` — Present — A.R.S. § 33-1321(A), (D); § 33-1318(D)
- `deposit-surrender-notice` — `edu-deposit-surrender-notice-az` — Present — A.R.S. §§ 33-1321(D), 33-1310(3)
- `designated-repairer` — `edu-no-designated-repairer-rule-az` — Absent — No designated-repairer statute (battery AZG-A-027); A.R.S. §§ 33-1363(A), 33-1364(H), 33-1315(A)(1)
- `disability-accommodation` — `edu-disability-accommodation-az` — Present — A.R.S. § 41-1491.19(C), (E)(1)-(2); FEDERAL: 42 U.S.C. § 3604(f)(3); FEDERAL: 24 C.F.R. § 100.203(a)-(b) (no deposit increase; negotiated interest-bearing restoration escrow); no AZ escrow or lease-inclusion rule (battery AZG-A-029)
- `disaster-displaced-guests` — `edu-no-disaster-guest-rule-az` — Absent — No disaster-guest statute (batteries AZG-A-030, AZG-A-032); A.R.S. §§ 33-1308(4), 33-1342, 33-1378
- `disaster-duties` — `edu-no-disaster-tenancy-rule-az` — Absent — No declared-disaster tenancy rule (batteries AZG-A-031, AZG-A-033); A.R.S. §§ 33-1366, 33-343, 33-1304, 26-303(E), 41-110, 12-515
- `double-letting` — `edu-no-double-letting-rule-az` — Absent — No double-letting statute (battery AZG-A-034); A.R.S. §§ 33-1323, 33-1362
- `drug-free-housing-addendum` — `edu-drug-free-housing-addendum-az` — Present — A.R.S. §§ 33-1260.01(G), 33-1806.01(G), 33-1368(A)
- `dv-confidentiality` — `edu-dv-confidentiality-az` — Absent — No state landlord confidentiality duty; A.R.S. §§ 41-161 to 41-166; FEDERAL: 34 U.S.C. § 12491(c)(4)
- `dv-deposit-timing` — `edu-dv-deposit-timing-az` — Present — A.R.S. §§ 33-1318(D), (J), 33-1321(D)
- `dv-eviction-protection` — `edu-dv-eviction-protection-az` — Absent — No state bar; A.R.S. §§ 33-1315(A)(4)-(5), 33-1318(L); FEDERAL: 34 U.S.C. § 12491(b)
- `dv-lockchange` — `edu-dv-lockchange-az` — Present — A.R.S. § 33-1318(E)-(G)
- `dv-protection-order-chapter-moved` — `edu-dv-protection-order-chapter-moved-az` — Present — A.R.S. §§ 33-1318, 13-3601, 13-3602, 13-1406, 12-1809
- `dv-qualifying-documents` — `edu-dv-qualifying-documents-az` — Present — A.R.S. §§ 33-1318(A)-(C), 33-1318.01(A); FEDERAL: 34 U.S.C. § 12491(c)
- `electric-submetering-disclosure` — `edu-electric-submetering-disclosure-az` — Present — A.R.S. § 33-1314.01(A)-(B), (E); Ariz. Const. art. 15, § 2
- `emergency-assistance-right` — `edu-emergency-assistance-right-az` — Present — A.R.S. § 33-1315(A)(4)-(5), (B); no presumed defense (battery AZG-A-036); A.R.S. § 33-1381(A)
- `emergency-contact` — `edu-no-emergency-contact-rule-az`, `emergency-contact-co` — Absent — No emergency-number or emergency-contact duty (battery AZG-A-037); A.R.S. §§ 33-1322(A)-(C), (E), 33-1314(A), (E)
- `eminent-domain` — `edu-no-eminent-domain-lease-rule-az`, `eminent-domain-vi` — Absent — No lease-end or rent rule on a taking (battery AZG-A-038); A.R.S. §§ 12-1116(A), 12-1120, 12-1122(A)(1), 11-961 to 11-963; tag eminent-domain-vi
- `employee-screening` — `edu-no-employee-screening-rule-az` — Absent — No apartment-employee screening statute (battery AZG-A-039); A.R.S. §§ 12-558.03, 32-2108.01(A)
- `energy-data-release` — `edu-no-energy-data-release-az` — Absent — No lease energy-data release statute (battery AZG-A-040); A.R.S. §§ 9-500.36, 11-269.14, 44-1376(4), 44-1376.01(A), 44-1376.02(B)
- `entity-landlord-court-representation` — `edu-entity-landlord-representation-az` — Absent — No statute (battery AZG-A-041); court rules decide (Ariz. R. Sup. Ct. and Ariz. R.P. Eviction Actions, not held)
- `environmental-event-termination` — `edu-no-environmental-event-termination-az` — Absent — No environmental-event termination statute (battery AZG-A-043); A.R.S. §§ 33-1366, 33-1314(A), 33-1312, 33-1374
- `ev-charging-end-of-tenancy` — `edu-no-ev-charging-end-of-tenancy-az` — Absent — No end-of-tenancy charger rule (battery AZG-A-045); A.R.S. §§ 33-1314(A), 33-1370(E)
- `ev-charging-requirements` — `edu-ev-charging-requirements-az`, `ev-charger-installation-hi` — Present+tag — A.R.S. § 40-213; A.R.S. § 33-1314.01(A)-(B), (E)-(G); no tenant installation right (battery AZG-A-044); tag ev-charger-installation-hi
- `ev-charging-shared-area` — `edu-no-ev-charging-shared-area-az` — Absent — No shared-area charging statute (battery AZG-A-047); A.R.S. §§ 33-1342(A), 33-1314.01(B)
- `eviction-hardship-stay` — `edu-no-eviction-hardship-stay-az` — Absent — No hardship stay (battery AZG-A-050); A.R.S. §§ 12-1178(C), 12-1179(C)-(E), 33-1377(C)
- `eviction-penalty-clause-ban` — `edu-no-eviction-penalty-ban-az` — Absent — No statute; A.R.S. §§ 33-1315, 33-1368(B)
- `eviction-service-party` — `edu-no-eviction-service-party-az` — Absent — No tenant service-agent rule (battery AZG-A-052); A.R.S. §§ 33-1377(B), 33-1322(A)(2), 41-162(C)
- `exculpatory-clauses` — `edu-exculpatory-clauses-az` — Present — A.R.S. §§ 33-1315(A)(3), (B), 33-1325
- `expedited-criminal-eviction` — `edu-expedited-criminal-eviction-az` — Present — A.R.S. §§ 33-1368(A), (F), 33-1377(E), 12-1179(E)
- `expedited-deposit-disposition` — `edu-no-expedited-deposit-disposition-az` — Absent — No expedited deposit procedure or fee (battery AZG-A-054); A.R.S. § 33-1321(B), (D)-(E)
- `extended-absence-notice` — `edu-no-extended-absence-notice-az`, `extended-absence-notice-ks` — Absent — No statutory absence-notice duty (battery AZG-A-056); A.R.S. §§ 33-1370(J), 33-1343(E), 33-1314(A), 33-1368(C); tag extended-absence-notice-ks
- `family-child-care` — `edu-no-family-child-care-rule-az` — Absent — No landlord-tenant child care rule (battery AZG-A-058); A.R.S. §§ 36-897.01(A), 46-807(A), 33-1314(A)
- `farmland-hunting-rights` — `edu-no-farmland-hunting-rule-az` — Absent — No held statute allocates hunting rights between farmland owner and tenant (battery AZG-A-059); A.R.S. § 17-304(A), (C), (D) (landowners or lessees may post); A.R.S. §§ 33-1551, 13-1502; Laws 2025, ch. 54, §§ 1-2
- `fee-in-lieu-of-deposit` — `edu-no-fee-in-lieu-of-deposit-rule-az` — Absent — No statute; A.R.S. §§ 33-1321(A)-(B), 33-1310(15)
- `fee-transparency` — `edu-fee-transparency-az` — Absent — No statute; A.R.S. § 44-1522
- `fee-unprovided-service` — `edu-fee-unprovided-service-az` — Present — A.R.S. §§ 33-1314.01(B), 33-1364(B), 33-1321(B), 44-1522
- `fire-code-standard` — `edu-fire-code-standard-az` — Present — A.R.S. § 37-1383(A)(2), (5), (8) (as amended by Laws 2025, ch. 99, § 2); A.R.S. §§ 11-861(C)(2), 33-1324(A)(1), 9-1303(7)
- `fire-sprinkler-duty` — `edu-no-fire-sprinkler-duty-az` — Absent — No sprinkler or retrofit duty for rentals (battery AZG-A-060); A.R.S. §§ 9-807(A), 11-861(E), 9-461.18, 9-462.13, 33-1324(A)(1), 9-1303(7)(b), 32-1121(D)(1)
- `firearms` — `edu-firearms-az`, `firearm-rules-la` — Present+tag — A.R.S. § 12-781(A)-(C); A.R.S. § 33-1368(A); no in-unit or permit-holder rule (battery AZG-A-061); tag firearm-rules-la
- `flood-disclosure` — `edu-no-flood-disclosure-az` — Absent — No landlord flood disclosure (battery AZG-A-062); seller-only A.R.S. §§ 33-422(F) item 6, 33-423(A)(1)
- `forfeiture-redemption` — `edu-forfeiture-redemption-az` — Present — A.R.S. § 33-1368(B) (reinstatement before filing, after filing, after judgment at landlord's discretion)
- `frozen-standard-incorporation` — `edu-frozen-standard-incorporation-az` — Present — A.R.S. §§ 33-1324(A)(1), 9-1303, 9-802, 11-861(A), (C), 41-1492.03, 41-1491.19(D), 1-255
- `furnishings-included` — `furnishings-included-la` — tagged — Tag furnishings-included-la; A.R.S. §§ 33-1310(11), 33-1341(6), 33-1321(A), (D), 33-322; no furnished-rental rule (battery AZG-A-063)
- `good-cause-notice` — `edu-no-good-cause-notice-az` — Absent — No good-cause or reason-stating notice for dwelling units (battery AZG-A-064); A.R.S. § 33-1375(A)-(B); contrast §§ 33-1476(A)-(B), 33-1491(C), 33-2143(A)-(B)
- `government-fee-reimbursement` — `edu-no-government-fee-passthrough-az`, `government-fee-reimbursement-az` — Absent — No pass-through rule (battery AZG-A-065); A.R.S. §§ 33-1314(A), 33-1315(A)(3), 33-1902(E), (G), (I), 9-1305, 11-1705, 42-6004(H)
- `governmental-fines` — `edu-no-governmental-fines-rule-az`, `governmental-fines-az` — Absent — No fine pass-through ban or authority (battery AZG-A-067); A.R.S. §§ 33-1368(C), (F), 33-1315(A)(3), 9-499(A), (J), 11-268(A)-(B), 36-602(A)
- `guarantor-renewal` — `edu-no-guarantor-renewal-rule-az`, `guaranty-as` — Absent — No lease-guarantor renewal rule (battery AZG-A-068); A.R.S. §§ 44-101(2), 12-1641, 12-1642, 33-1321(A); tag guaranty-as
- `guest-rights` — `edu-no-guest-rights-az` — Absent — No guest or supplier access right or guest-fee rule for dwelling units (battery AZG-A-069); A.R.S. §§ 33-1342(A), 33-1368(F), 33-1378; contrast §§ 33-1413.02, 33-1414(A)(5), 33-2105(K)
- `habitability-materiality` — `edu-habitability-materiality-az` — Present — A.R.S. §§ 33-1361(A)-(B), 33-1363(B), 33-1364(A), 33-1365(A), 33-1324(A)(1), 9-1303
- `habitability-modifiable` — `edu-habitability-modifiable-az` — Present — A.R.S. § 33-1324(A)(6), (C)
- `habitability-presumption` — `edu-no-habitability-presumption-az` — Absent — No habitability presumption (battery AZG-A-070); retaliation presumption only, A.R.S. § 33-1381(B)-(C)
- `habitability-statement` — `edu-no-habitability-statement-az` — Absent — No lease habitability statement required (battery AZG-A-072); duty applies by statute, A.R.S. § 33-1324(A); disclosures A.R.S. § 33-1322
- `habitability-waiver` — `edu-habitability-waiver-az` — Present — A.R.S. §§ 33-1324(C)-(D), 33-1315(A)(1), 33-1316
- `hazardous-contamination-disclosure` — `edu-hazardous-contamination-disclosure-az`, `environmental-use-restriction-az` — Present — A.R.S. §§ 49-152(G), 49-158(C) (DEUR terms incorporated into any lease); no general contamination disclosure (battery AZG-A-073); sale-only § 33-434.01
- `health-district-rental-rules` — `edu-no-health-district-rental-rules-az` — Absent — No health-district rental rules or copy duty (battery AZG-A-074); A.R.S. §§ 36-602(A), 33-1381(A)(1), 9-1303
- `heating` — `edu-heating-az` — Present — A.R.S. §§ 33-1324(A)(6), (C)-(D), 33-1364(A)-(C), (E), (H), 9-1303(1)(d)
- `home-business` — `edu-no-home-business-rule-az` — Absent — No tenant home-business right against a lease (battery AZG-A-075); county zoning limit only, A.R.S. § 11-820; A.R.S. § 33-1314(A)
- `homestead-waiver` — `edu-homestead-waiver-az` — Present — A.R.S. §§ 33-1132, 33-1122, 33-1104(A)-(B), 33-1101(A), 33-1123(A), 33-1372
- `infirmity-termination` — `edu-no-infirmity-termination-az` — Absent — No death, incapacity or care-facility termination rule (battery AZG-A-076); A.R.S. §§ 33-1375(B), 33-1305(A), 33-1314(E)-(G); only §§ 33-1318, 33-1318.01 early termination
- `informal-dispute-resolution` — `informal-dispute-resolution-or` — tagged — Tag informal-dispute-resolution-or; no AZ rule (battery AZG-A-078); A.R.S. §§ 33-1314(A), 33-1315(A)(1), 12-2238(A)-(B), 12-134(A)
- `inspection-condemnation-disclosure` — `edu-no-condemnation-disclosure-az` — Absent — No duty to disclose inspection, code-violation or condemnation orders (battery AZG-A-079); A.R.S. §§ 33-1904, 33-1901(3), 33-1361(A), 33-343
- `inspection-notice-penalty` — `edu-inspection-notice-penalty-az` — Present — A.R.S. § 33-1376(B) (injunction or termination, actual damages not less than one month's rent); A.R.S. § 33-1343(D)
- `jury-waiver` — `edu-jury-waiver-az` — Absent — Ariz. Const. art. 2, § 23; A.R.S. §§ 12-1176, 33-1377(A); no lease jury-waiver statute
- `key-control-policy` — `edu-no-key-control-policy-az` — Absent — No key-control policy or employee background-check mandate (battery AZG-A-081); keys rules A.R.S. §§ 33-1310(3), 33-1318, 33-1343(D)
- `knowing-use-penalty` — `edu-knowing-use-penalty-az` — Present — A.R.S. § 33-1315(B) (actual damages and not more than two months' periodic rent); A.R.S. § 33-1364(E)
- `landlord-breach-remedy` — `edu-landlord-breach-remedy-az` — Present — A.R.S. §§ 33-1361 to 33-1367, 33-1376(B), 33-1381(B), 33-1305(A)
- `landlord-liability-insurance` — `edu-no-landlord-insurance-mandate-az` — Absent — No landlord liability-insurance mandate (battery AZG-A-082); STR insurance option A.R.S. §§ 9-500.39(B)(8), 11-269.17(B)(8); A.R.S. § 33-1315(A)(3)
- `landlord-lien` — `edu-landlord-lien-az` — Present — A.R.S. §§ 33-1372, 33-1304, 33-1374, 33-1367; ch. 3 lien A.R.S. §§ 33-361(D), 33-362; A.R.S. § 33-1132
- `landlord-remedies-termination` — `edu-landlord-remedies-termination-az` — Present — A.R.S. §§ 33-1373, 33-1368(C), 33-1377(B), (F), 12-1178(A), 33-1305(A)
- `late-fee-limit` — `edu-late-fee-limit-az` — Present — A.R.S. §§ 33-1368(B), 33-1377(F); § 33-2105(A)(2) (RV spaces only)
- `law-enforcement-cooperation` — `edu-law-enforcement-cooperation-az` — Present — A.R.S. §§ 33-1315(A)(4)-(5), 13-3010(J), 33-1378, 33-1906, 33-1806.01(G), 33-1260.01(G); no general cooperation duty (battery AZG-A-083)
- `lead-safe-certification` — `edu-no-lead-safe-certification-az` — Absent — No state lead-safe certificate (battery AZG-A-085); A.R.S. §§ 36-1672 to 36-1676; FEDERAL: 42 U.S.C. § 4852d(a)(1)
- `lead-state-notices` — `edu-no-lead-state-notices-az` — Absent — No state lead notice beyond the federal disclosure (battery AZG-A-087); A.R.S. §§ 36-1672 to 36-1676; FEDERAL: 42 U.S.C. § 4852d(a)(1)
- `lease-content-requirements` — `edu-lease-content-requirements-az` — Present — A.R.S. §§ 33-1322, 33-1321(B)-(C), 33-1314.01(B), (G), 33-1331(A), 33-1368(B), 36-1681(E), 33-1319(A); no content list or first-page rule (battery AZG-A-088)
- `lease-copy` — `edu-lease-copy-az`, `lease-copy-receipt-hi` — Present+tag — A.R.S. §§ 33-1322(E), 33-1321(C), 33-1342(A)(6)
- `lease-notice-initial-requirement` — `edu-no-lease-initials-requirement-az` — Absent — No initials or separate-signature rule for lease terms (battery AZG-A-089); A.R.S. §§ 32-2175(D), 33-1322(A)-(B)
- `lease-registration` — `edu-lease-registration-az` — Present — A.R.S. §§ 33-401(A), 33-411(A), 33-411.01, 33-412
- `lease-term-limitation` — `edu-lease-term-limits-az`, `edu-lease-spousal-joinder-az` — Present — A.R.S. §§ 44-101(6), 33-401(A)-(B), 33-452, 33-454, 33-1314(D); no maximum term (battery AZG-A-090); § 25-214 heading only, not read
- `lease-type-parity` — `edu-no-lease-type-parity-az` — Absent — No lease-type parity rule (battery AZG-A-092); A.R.S. §§ 33-1314(A), (D), 33-1375(A)-(B), 33-1311, 33-1312
- `lease-type-size` — `edu-no-lease-type-size-az` — Absent — No minimum type size for residential leases (battery AZG-A-094); contrast A.R.S. §§ 33-1703(B), 44-1763
- `limitation-of-actions` — `edu-limitation-of-actions-az` — Present — A.R.S. §§ 12-548(A)(1), 12-543(1), 12-542(3), (6), 12-541(5), 12-550, 12-501, 12-508
- `liquidated-damages` — `edu-no-liquidated-damages-rule-az` — Absent — No statute for dwelling leases; A.R.S. §§ 33-1373, 33-1370(C), 33-1305(A)
- `lockout-for-rent-delinquency` — `edu-lockout-for-rent-delinquency-az` — Present — A.R.S. §§ 33-1367, 33-1374, 33-1368(D)
- `maintenance-duty-shift` — `edu-maintenance-duty-shift-az` — Present — A.R.S. § 33-1324(C)-(D); A.R.S. §§ 33-1310(16), 33-1341
- `meter-conservation-charge` — `edu-no-meter-conservation-charge-az` — Absent — No statute; A.R.S. § 33-1314.01(B)
- `military-air-zone-disclosure` — `edu-no-military-zone-disclosure-az` — Absent — No landlord military-zone disclosure (battery AZG-A-096); A.R.S. §§ 28-8484(A), (C), (E), 32-2113(A), 32-2183, 33-423(A)(2)-(3)
- `minor-tenant-filing` — `edu-minor-tenants-az` — Present — A.R.S. §§ 1-215(3), (21), 12-2451(A), 12-2454(A); no lease-capacity or minor-eviction statute (battery AZG-A-097)
- `municipal-utility-lien` — `edu-municipal-utility-lien-az` — Present — A.R.S. §§ 9-511.02(A)-(C), (F)-(H), 11-264(C)-(E), (H), 9-511.01(G)-(H), 40-376; no other utility lien (battery AZG-A-098)
- `nonpayment-notice` — `edu-nonpayment-notice-az` — Present — A.R.S. § 33-1368(B), (G); § 33-1313(B)
- `nonrefundable-deposit-separate-notice` — `edu-nonrefundable-deposit-notice-az` — Present — A.R.S. § 33-1321(B)
- `nonresident-owner-agent` — `edu-nonresident-owner-agent-az` — Present — A.R.S. § 33-1902(B); § 33-1322(A)(2), (D)
- `notice-service-fee` — `edu-no-notice-service-fee-rule-az` — Absent — No statute; A.R.S. §§ 33-1368(B), 33-1377(F), 12-1178(A)
- `notice-to-quit-waiver` — `edu-notice-to-quit-waiver-az` — Present — A.R.S. §§ 33-1315(A)(1), 33-1368, 33-1375
- `notice-to-vacate-additional-terms` — `edu-no-notice-to-vacate-terms-rule-az` — Absent — none found; A.R.S. §§ 33-1324(A), 33-1367, 33-1315(A)(1)
- `optional-lease-terms` — `edu-optional-lease-terms-az` — Present — A.R.S. §§ 33-1314(A), (C)-(E), 33-1344, 33-1324(C)-(D), 33-1321(B), (D), 33-1325
- `ordnance-demolition-meter-disclosures` — `edu-no-ordnance-demolition-meter-disclosure-az` — Absent — none found; A.R.S. §§ 32-2113, 32-2183.05 (sales only); § 33-1314.01
- `other-landlord-facilities` — `edu-other-landlord-facilities-az` — Present — A.R.S. § 33-1324(A)(3)-(6)
- `owner-move-in-reservation` — `owner-occupancy-termination-ar` — tagged — A.R.S. §§ 33-1314(A), 33-1375(B)-(C), 33-1381; no owner-use statute
- `parking-rules-notice` — `edu-parking-rules-notice-az` — Present — A.R.S. § 33-1342(A)(6), (B); § 9-499.05(B)
- `part5-nonwaivable` — `edu-part5-nonwaivable-az` — Present — A.R.S. §§ 33-1315, 33-1312, 33-1306, 33-1316, 33-1364(E)
- `periodic-services-entry` — `edu-no-periodic-services-entry-rule-az`, `scheduled-services-entry-az` — Present — A.R.S. § 33-1343(A), (B), (D); § 33-1376(B); no no-notice exception
- `pest-control-notice` — `edu-no-pest-control-notice-az` — Absent — none found; A.R.S. §§ 33-1343(D), 33-1319
- `pet-eviction-fact-sheet` — `edu-no-pet-eviction-fact-sheet-az` — Absent — none found; A.R.S. §§ 33-1370(E), 33-1368(E), 33-1314(E)
- `pet-fees` — `edu-pet-fees-az` — Present — A.R.S. §§ 33-1321(A)-(B), 33-1310(15), 41-1491.19(E)(2)
- `plain-language` — `edu-no-plain-language-rule-az` — Absent — none found; A.R.S. § 33-1322(B), (E)
- `plain-language-consumer-statement` — `edu-no-plain-language-statement-az` — Absent — none found; A.R.S. § 33-1315
- `political-access` — `edu-no-political-access-rule-az` — Absent — none found; A.R.S. §§ 33-1261(D), 33-1808(H) (associations only); § 33-1381(A)(3)
- `portable-cooling-device` — `edu-no-portable-cooling-rule-az` — Absent — none for dwelling units; A.R.S. §§ 33-1452(F)(9), 33-2132(C)(9) (parks only); §§ 33-1324, 33-1364
- `portable-solar` — `edu-portable-solar-az` — Present — A.R.S. § 33-439(A); § 44-1761(8); no tenant plug-in statute
- `portfolio-thresholds` — `edu-portfolio-thresholds-az` — Present — A.R.S. §§ 41-1491.02, 33-1331(D), 33-1319(D), 33-1324(C)-(D), 49-746(D)
- `possession-bond` — `edu-no-possession-bond-az` — Absent — none found; A.R.S. §§ 33-1310(15), 33-1315(A)(1), 33-1375(C), 12-1179
- `post-eviction-property` — `edu-post-eviction-property-az` — Present — A.R.S. § 33-1368(D)-(E); § 33-1370(D)-(I); § 12-1178(C)-(E)
- `private-well-testing` — `edu-no-private-well-testing-az` — Absent — none found; A.R.S. § 33-1324(A)(1), (2), (6)
- `prohibited-acts-renter` — `prohibited-acts-renter-wy` — tagged — A.R.S. §§ 33-1341(6)-(7), 33-1343(A), 33-1376(A)
- `promises-to-repair` — `edu-promises-to-repair-az` — Present — A.R.S. § 33-1361(A)-(B); § 33-1310(13)
- `prop65-rental-warning` — `edu-no-chemical-warning-rule-az` — Absent — none found
- `property-tax-rent-disclosure` — `edu-property-tax-rent-statement-az` — Present — A.R.S. § 43-1072(C) (read by main pass outside corpus)
- `protected-class-inquiry-ban` — `edu-no-protected-class-inquiry-ban-az` — Absent — none found; A.R.S. §§ 41-1491.14, 41-1491.15, 41-1491.19 (general bans); FEDERAL: 24 C.F.R. § 100.202(c)
- `purpose-limitation` — `edu-no-purpose-limitation-az` — Absent — none voids the lease; A.R.S. §§ 33-1368(A), 12-991, 12-992, 12-997, 12-802, 12-806
- `recycling-notice` — `edu-no-recycling-notice-az` — Absent — none found; A.R.S. §§ 49-746(D), 9-500.07 (related)
- `redemption` — `edu-redemption-az` — Present — A.R.S. §§ 33-1368(B), 33-1371
- `religious-cultural-display` — `edu-no-religious-display-rule-az` — Absent — none found; A.R.S. § 41-1491.14(B) (general)
- `rent-demand-bar` — `edu-no-rent-demand-bar-az` — Absent — none found; A.R.S. §§ 33-1316, 33-1362, 33-1364(A)(3), 33-1365, 33-1368(B) (general)
- `rent-escalation` — `edu-rent-escalation-az`, `rent-escalation-la`, `rent-increase-midterm-ky` — Present+tag — A.R.S. §§ 33-1314(A), 33-1381(A)-(B), 33-1329(A), 33-1312(A)
- `rent-installments` — `edu-rent-installments-az`, `rent-installments-or` — Present+tag — A.R.S. § 33-1314(C)-(D); § 33-1371(A)
- `rent-into-court-counterclaim` — `edu-rent-into-court-counterclaim-az` — Present — A.R.S. § 33-1365(A)-(B); § 12-1179(D); § 33-1377(C)
- `rent-receipt-anti-waiver` — `edu-rent-receipt-anti-waiver-az` — Present — A.R.S. § 33-1316
- `rent-receipts` — `edu-no-rent-receipt-rule-az` — Absent — No statute
- `rent-reporting` — `edu-no-rent-reporting-rule-az` — Absent — none found; A.R.S. § 44-1695(C) (general)
- `rental-inspection` — `edu-rental-inspection-az` — Present — A.R.S. §§ 9-1302(C), 11-1704, 33-1904(A)(1), 33-1343
- `renters-insurance-rules` — `edu-no-renters-insurance-rules-az` — Absent — none found; A.R.S. §§ 33-1314(A), 33-1315(A)(3), (B) (general)
- `repair-cost-termination` — `edu-no-repair-cost-termination-az` — Absent — none found; A.R.S. §§ 33-1324(A), 33-1316, 33-1363(A), 33-1366, 33-1375, 33-1381 (general)
- `repair-escrow-exemption-notice` — `edu-no-repair-escrow-exemption-az` — Absent — none found; A.R.S. §§ 33-1308, 33-1315(A)(1), (B) (general)
- `repair-notice` — `edu-repair-notice-az` — Present — A.R.S. §§ 33-1341(8), 33-1313(A)-(B), 33-1361(A), 33-1363(A), 33-1364(A), (H)
- `required-disclosures` — `edu-required-disclosures-az` — Present — A.R.S. §§ 33-1322(A)-(D), 33-1314.01(B), (G), 33-1321(B)-(C), 33-1319(A), 33-1331, 33-1342, 36-1681(E), 43-1072(C); FEDERAL: 42 U.S.C. § 4852d(a)(1)(A)-(B), (a)(4), 4851b(27)
- `required-fees` — `edu-required-fees-az` — Present — A.R.S. §§ 33-1314(A), 33-1314.01(B), 33-1368(B), 33-1377(F), 12-1178(A)
- `rights-responsibilities-guide` — `edu-no-rights-guide-az` — Absent — No statute; A.R.S. § 33-1322(B)
- `sanitary-code-variance` — `edu-no-code-variance-notice-az` — Absent — none found; A.R.S. §§ 33-1324(A)-(B), 9-1303 (general)
- `scope` — `edu-scope-az` — Present — A.R.S. §§ 33-1304, 33-1307, 33-1308, 33-1310(4), 33-381, 33-1406, 33-1407, 33-2101
- `seasonal-tenancy` — `edu-no-seasonal-tenancy-rule-az` — Absent — none found; A.R.S. §§ 33-1308(4), 33-1314(D), 33-1375, 33-2101(A) (general)
- `security-deposit-cap` — `edu-security-deposit-cap-az` — Present — A.R.S. § 33-1321(A)
- `security-deposit-holding` — `edu-security-deposit-holding-az`, `security-deposit-disposition-az` — Present — A.R.S. §§ 33-1321(G), 32-2174(D)-(E)
- `security-deposit-nonwaiver` — `edu-security-deposit-nonwaiver-az` — Present — A.R.S. §§ 33-1321, 33-1315(A)(1), 33-1325(A)
- `security-deposit-on-sale` — `edu-security-deposit-on-sale-az` — Present — A.R.S. §§ 33-1321(H), 33-1325(A), 33-1330
- `security-deposit-penalty` — `edu-security-deposit-penalty-az` — Present — A.R.S. § 33-1321(D)-(F); § 33-1315(B)
- `security-deposit-standards` — `edu-no-deposit-standards-rule-az` — Absent — No statute
- `security-devices` — `edu-no-security-device-rule-az` — Absent — none found; A.R.S. §§ 33-1324(A), 9-1303(1)(e), 33-1318(E)-(F), 36-1681(C)(3) (general)
- `self-help-eviction` — `edu-self-help-eviction-az` — Present — A.R.S. §§ 33-1374, 33-1367, 33-1364(C)-(D), 33-1368(D), 33-1376(B)
- `senior-housing-work-card` — `edu-no-senior-housing-work-card-az` — Absent — none found; A.R.S. § 41-1491.04 (general)
- `service-animal-denial-penalty` — `edu-no-service-animal-denial-penalty-az` — Absent — none found for housing; A.R.S. §§ 11-1024(A), (J), (M)(4); 41-1491.19(E)(2); 41-1491.33; 41-1491.35(B)
- `service-animal-misrepresentation` — `edu-no-service-animal-misrepresentation-housing-az` — Absent — none found for housing; A.R.S. §§ 11-1024(K), (M)(4); 33-1368(A)(1); 41-1491.38
- `sex-offender-disclosure` — `edu-sex-offender-disclosure-az` — Present — A.R.S. § 32-2156(A)(3), (B)
- `sex-offender-occupancy` — `edu-no-sex-offender-occupancy-rule-az` — Absent — none found for landlords; A.R.S. §§ 13-3727, 33-1260.01(H), 33-1806.01(H), 9-500.39(B)(3) (general); FEDERAL: 42 U.S.C. § 13663(a) (federally assisted housing); FEDERAL: 42 U.S.C. § 13664(a)(2)
- `sfr-occupancy-disclosure` — `edu-no-sfr-occupancy-disclosure-az` — Absent — none found; A.R.S. § 12-1173(A)(3)(b), (B)-(C) (general)
- `shoreline-access-disclosure` — `edu-no-shoreline-disclosure-az` — Absent — none found
- `showing-notice-waiver` — `edu-showing-notice-waiver-az` — Present — A.R.S. §§ 33-1343(A)-(D), 33-1315(A)(1)
- `shutdown-rent-protection` — `edu-no-shutdown-rent-protection-az` — Absent — none found; A.R.S. §§ 33-1314(C), 33-1368(B), 33-1371(A) (general)
- `single-family-zone-lease-limit` — `edu-no-single-family-zone-lease-limit-az` — Absent — none found; A.R.S. §§ 9-461.18(B)(1)-(2), 11-810.01(C)(1)-(2), 9-462.13(B)(5), 33-1806.01(A) (general)
- `smart-access` — `edu-no-smart-access-rule-az` — Absent — none found; A.R.S. §§ 33-1343(B)-(E), 33-1367, 33-1318(E)-(F) (general)
- `smoke-drift-waiver` — `edu-smoke-drift-waiver-az` — Present — A.R.S. § 36-601.01(A)(9), (B), (D), (E); § 33-1315(A)(3)
- `social-security-defense` — `edu-no-benefit-delay-defense-az` — Absent — none found; A.R.S. §§ 33-1368(B), 33-1377(C) (general); FEDERAL: 24 C.F.R. § 982.310(b)(1)-(2)
- `special-district-representation` — `edu-no-special-district-statement-az` — Absent — none found; A.R.S. §§ 32-2181(A)(14), 32-2101 (subdividers only); 33-1314(A)
- `sprinkler-disclosure` — `edu-no-sprinkler-disclosure-az` — Absent — none found; A.R.S. §§ 33-1324(A)(1), 9-1303(7)(b), 9-807(A) (general)
- `statute-of-frauds-lease-term` — `edu-statute-of-frauds-lease-term-az` — Present — A.R.S. §§ 44-101(6), 33-401(A), 33-1310(13), 33-1314(D), 33-1322(E)
- `statutory-caps` — `edu-statutory-caps-az` — Present — A.R.S. §§ 33-1321(A)-(B), (E), 33-1314.01(B), 33-1329(A), 33-1315(B), 33-1367, 33-1375(C), 33-1376(B), 33-1381(B), 44-6852, 12-671(A)
- `statutory-early-termination` — `edu-statutory-early-termination-az` — Present — A.R.S. §§ 33-1318, 33-1318.01, 33-1366(A), 33-1361(A), 33-1362(A), 33-1367, 33-1376(B), 33-1315(A)(1); FEDERAL: 50 U.S.C. § 3955(a)-(b)
- `steam-radiator-covers` — `edu-no-radiator-cover-rule-az` — Absent — none found; A.R.S. §§ 33-1324(A)(4), (6), 33-1341(5) (general)
- `stove-refrigerator` — `edu-no-stove-refrigerator-rule-az` — Absent — none found; A.R.S. §§ 33-1324(A)(4), 9-1303(1)(b), 33-1310(14), 36-1651 (general)
- `student-housing` — `edu-student-housing-az` — Present — A.R.S. §§ 33-1308(1), (3), 41-1491.14, 44-101(2)
- `subsidized-inspection-refusal` — `edu-no-subsidized-inspection-refusal-rule-az` — Absent — none found; A.R.S. §§ 33-1343(A), (D), 33-1376(A), 33-1308(7), 33-1371(B) (general); FEDERAL: 24 C.F.R. §§ 982.405(a)-(b), (d), 982.551(d)
- `subsidy-habitability-proration` — `edu-no-subsidy-proration-rule-az` — Absent — none found; A.R.S. §§ 33-1366(A)(2), 33-1364(A)(2), 33-1361(B), 33-1310(6), (12) (general); FEDERAL: 24 C.F.R. § 982.404(a)(1)-(4), (b)(1)
- `subsidy-late-fee` — `edu-no-subsidy-late-fee-rule-az` — Absent — none found; A.R.S. §§ 33-1368(B), 33-1377(F), 33-1371(B) (general); FEDERAL: 24 C.F.R. §§ 982.451(b)(5), 982.310(b)(1)
- `substandard-property-receivership` — `edu-substandard-property-receivership-az` — Present — A.R.S. §§ 33-1901(3), 33-1903, 33-1904(A)(2), (B), 33-1905, 12-996, 33-2603(B)(4)
- `tax-escalation` — `edu-tax-escalation-az`, `tax-insurance-escalation-la` — Present+tag — A.R.S. §§ 33-1314(A), 33-1321(D), 42-6004(H), 43-1072(C), 33-1381(A)
- `telecom-access` — `edu-no-telecom-access-rule-az` — Absent — none found for dwellings; A.R.S. §§ 33-2301 (commercial buildings), 9-600 (local governments), 33-1314(A)
- `tenancy-at-will` — `edu-tenancy-at-will-az` — Present — A.R.S. §§ 33-1314(D), 33-1375(A)-(C), 33-1310(13), 33-381, 33-1304, 12-1173(A)(1), (C)
- `tenant-bankruptcy` — `edu-no-tenant-bankruptcy-rule-az` — Absent — none in Arizona law; A.R.S. § 33-1303; FEDERAL: 11 U.S.C. §§ 362(a)(3), (b)(22)-(23), 365(e)(1)
- `tenant-confidential-information` — `edu-tenant-confidential-information-az` — Present — A.R.S. §§ 33-1260.01(C), (E)(1), 33-1806.01(C), (E)(1), 44-1373(A), 44-7601(A), 18-551, 18-552(A)-(B), (E)-(F), (J); no general disclosure bar (battery AZG-B-081)
- `tenant-display-rights` — `edu-no-display-rights-statute-az` — Absent — none found for tenants; A.R.S. §§ 33-1808(A)-(D), 33-1261(A)-(F) (association members only), 33-1342(A)-(B), 41-1491.14(B)
- `tenant-employee-housing` — `edu-tenant-employee-housing-az` — Present — A.R.S. §§ 33-1308(5), 12-1173(A)(1), 9-461.18; no disclosure rule (battery AZG-B-083)
- `tenant-insurance-claims` — `edu-no-tenant-insurance-claims-az` — Absent — none found; A.R.S. §§ 33-1315(A)(3), 33-1324(A), (C)-(D), 33-1341(6), 33-1368(C) (general)
- `tenant-portal` — `edu-tenant-portal-az` — Present — A.R.S. §§ 44-7005(B)-(C), 33-1314(C), 33-1313(B), 33-1371(A), (C); no portal statute (battery AZG-B-086)
- `tenant-records` — `edu-tenant-records-az` — Present — A.R.S. §§ 32-2175(A), (C), (H), 33-1330, 33-1321(D), 44-7601(A), 44-1373(A); no rent-ledger rule (battery AZG-B-088)
- `tenant-repair-remedies` — `edu-tenant-repair-remedies-az` — Present — A.R.S. §§ 33-1361, 33-1363, 33-1364, 33-1365(A), 33-1368(B), 12-1179(D)-(E); no certified-unfit escrow (battery AZG-B-090)
- `tenant-right-to-organize` — `edu-tenant-right-to-organize-az` — Present — A.R.S. §§ 33-1381(A)(3), (B), (C), 33-1367; no affirmative organizing right (battery AZG-B-091)
- `tenant-rights-statement` — `edu-no-tenant-rights-statement-az` — Absent — No statute; A.R.S. § 33-1322(B)
- `tenant-screening` — `edu-tenant-screening-az` — Present — A.R.S. §§ 41-1491.14, 33-1317(F), 13-911(I)(5), 13-905(M)(3)-(4), 33-1368(A)(2), 44-1698(J), (N)(13); no screening regime (battery AZG-B-092); FCRA FEDERAL, not read
- `tenant-statutory-duties` — `edu-tenant-statutory-duties-az` — Present — A.R.S. §§ 33-1341, 33-1343(A), 33-1344, 33-1319(B), 36-1637(B), 33-1368(A), (C), (F), 33-1369
- `term-change-notice` — `edu-term-change-notice-az` — Present — A.R.S. §§ 33-1342(B)-(C), 33-1364(C), 33-1375(A)-(B); no other modification notice rule (batteries AZG-B-094, AZG-B-038)
- `tpa-exemption-notice` — `edu-no-tpa-exemption-notice-az` — Absent — none; A.R.S. §§ 33-1329(A), 33-1308 (battery AZG-B-096)
- `tpa-notice` — `edu-no-tpa-notice-az` — Absent — none; A.R.S. §§ 33-1329(A)-(B), 33-1375(B) (battery AZG-B-095)
- `tpa-sunset` — `edu-no-tpa-sunset-az` — Absent — none (battery AZG-B-097; AZG-CUR-001)
- `translation-duty` — `edu-no-translation-duty-az` — Absent — none; Ariz. Const. art. 28, §§ 2, 3 (battery AZG-B-099)
- `trespass-notice` — `edu-trespass-notice-az`, `barred-person-covenant-ne` — Present+tag — A.R.S. §§ 13-1501(2), 13-1502(A)-(C), 13-1504(A)(1), 12-1178(D)-(E); no landlord barring rule (battery AZG-B-100)
- `truth-in-renting` — `edu-no-truth-in-renting-az` — Absent — none; A.R.S. §§ 33-1322(B), (E), 33-1315 (battery AZG-B-101)
- `unbundled-parking` — `edu-no-unbundled-parking-rule-az` — Absent — none; A.R.S. §§ 33-1310(11)-(12), 33-1314(A) (battery AZG-B-102)
- `unconscionability` — `edu-unconscionability-az` — Present — A.R.S. § 33-1312
- `unpaid-damages-interest` — `edu-unpaid-damages-interest-az`, `interest-on-unpaid-amounts-ca` — Present+tag — A.R.S. §§ 44-1201(A)(2), (B), (D)(1), (F), 44-1202, 33-1312(A)(1)
- `usufructuary-lessor` — `edu-no-usufructuary-lessor-rule-az` — Absent — none; A.R.S. §§ 33-231, 33-1322(A) (battery AZG-B-104)
- `utility-allowance-cap` — `edu-utility-allowance-cap-az` — Present — A.R.S. § 33-1314.01(B)
- `utility-apportionment` — `edu-utility-apportionment-az` — Present — A.R.S. § 33-1314.01(A), (C), (F)-(G)
- `utility-deposit-return` — `edu-no-utility-deposit-rule-az` — Absent — No statute
- `utility-disclosure-attachment` — `edu-utility-disclosure-attachment-az` — Present — A.R.S. § 33-1314.01(B), (G)
- `utility-disconnection-notice-authorization` — `edu-no-utility-notice-authorization-rule-az` — Absent — No statute
- `utility-interruption-submeter` — `edu-utility-interruption-submeter-az` — Present — A.R.S. §§ 33-1364(B)-(C), 33-1368(D), 33-1374
- `utility-landlord-account` — `edu-utility-landlord-account-az` — Present — A.R.S. § 33-1364(A)(1)
- `utility-shutoff-statute` — `edu-no-utility-shutoff-statute-az` — Absent — No statute; A.R.S. §§ 33-1364, 33-1368(D)
- `utility-transfer` — `edu-utility-transfer-az` — Present — A.R.S. §§ 33-1364(B)-(C), 33-1374
- `veterans-incentive` — `edu-no-veterans-incentive-az` — Absent — none; A.R.S. § 41-608.04 (tenant-side stipend) (battery AZG-B-105)
- `waiver-by-acceptance` — `edu-waiver-by-acceptance-az` — Present — A.R.S. § 33-1371(A)-(C)
- `water-heater-temperature` — `edu-no-water-heater-temperature-rule-az` — Absent — none; A.R.S. § 33-1324(A)(4), (6) (battery AZG-B-106)
- `waterbed` — `edu-no-waterbed-rule-az`, `waterbed-mn` — Absent — none; A.R.S. §§ 33-1314(A), 33-1310(15) (battery AZG-B-107)
- `window-guards` — `edu-no-window-guard-rule-az` — Absent — none for window guards; A.R.S. § 36-1681(C)(3) pool windows (battery AZG-B-108)
- `written-notice-required` — `edu-written-notice-required-az` — Present — A.R.S. §§ 33-1313(B), 33-1315(A)(1), 33-1322, 33-1321, 33-1368, 33-1369, 33-1375 and others; entry and new-rule notices not required in writing (§§ 33-1343(D), 33-1342(B))

## §3 Batteries

Every battery ran a nonsense control (0 hits) and a known positive. The full patterns, hit lists and argv are in `batteries.jsonl`; each absence row's notes name the battery and the sections behind each count. A superseded run is kept and named, never cited.

- **AZG-CUR-001** (main, topic `currency`, scope law, 786 units): pattern hits 3; 3; positives passed; control 0.
- **AZG-CUR-002** (main, topic `currency`, scope law, 786 units): pattern hits 0; 2; 2; positives passed; control 0.
- **AZG-B-001** (B, topic `nonpayment-notice`, scope all, 12084 units): pattern hits 3; 6; 0; 1; positives passed; control 0. Cited by: nonpayment-notice.
- **AZG-M-001** (M, topic `jury-waiver`, scope all, 12084 units): pattern hits 119; 19; 27; 0; 14; positives passed; control 0. Cited by: jury-waiver.
- **AZG-M-002** (M, topic `liquidated-damages`, scope all, 12084 units): pattern hits 7; 2; 13; 0; 1; positives passed; control 0. Cited by: eviction-penalty-clause-ban, liquidated-damages.
- **AZG-M-003** (M, topic `notice-service-fee`, scope all, 12084 units): pattern hits 133; 13; 8; positive FAILED: ARS 41-1004; control 0. Superseded by AZG-M-004.
- **AZG-M-004** (M, topic `notice-service-fee`, scope all, 12084 units): pattern hits 75; 13; 10; 27; positives passed; control 0. Supersedes AZG-M-003 (positive ARS 41-1004 failed (guessed unit); first pattern too broad; narrowed and real positives chosen). Cited by: eviction-penalty-clause-ban, notice-service-fee.
- **AZG-M-005** (M, topic `smoke-drift-waiver`, scope all, 12084 units): pattern hits 0; 0; 6; 1; 3; positives passed; control 0. Superseded by AZG-M-007.
- **AZG-M-006** (M, topic `collection-fee`, scope all, 12084 units): pattern hits 20; 29; 2; positives passed; control 0. Superseded by AZG-M-008.
- **AZG-B-002** (B, topic `nonresident-owner-agent`, scope all, 12084 units): pattern hits 7; 10; 4; 18; 2; positives passed; control 0. Cited by: nonresident-owner-agent.
- **AZG-M-007** (M, topic `smoke-drift-waiver`, scope all, 12084 units): pattern hits 0; 1; 6; 1; 3; positives passed; control 0. Supersedes AZG-M-005 (INFLECTION on \bsmoke\b in pattern 2; rerun with smok stem). Cited by: smoke-drift-waiver.
- **AZG-M-008** (M, topic `collection-fee`, scope all, 12084 units): pattern hits 20; 38; 3; positives passed; control 0. Supersedes AZG-M-006 (INFLECTION on \brent\b; rerun with rent(?:s|ed|ing)?). Cited by: collection-fee.
- **AZG-A-001** (A, topic `actual-notice-method`, scope all, 12084 units): pattern hits 15; 2; 7; 0; 0; 0; positives passed; control 0. Superseded by AZG-A-002.
- **AZG-M-009** (M, topic `currency`, scope law, 786 units): pattern hits 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 1; 1; 16; 9; 10; positives passed; control 0.
- **AZG-A-002** (A, topic `actual-notice-method`, scope all, 12084 units): pattern hits 15; 2; 7; 0; 0; 0; positives passed; control 0. Supersedes AZG-A-001 (INFLECTION: \bemail\b missed emails). Cited by: actual-notice-method.
- **AZG-B-003** (B, topic `notice-to-vacate-additional-terms`, scope all, 12084 units): pattern hits 4; 0; 5; 0; 0; positives passed; control 0. Cited by: notice-to-vacate-additional-terms.
- **AZG-A-003** (A, topic `adverse-proceeding-notice`, scope all, 12084 units): pattern hits 0; 0; 1; 0; 3; 1; positives passed; control 0. Cited by: adverse-proceeding-notice.
- **AZG-B-004** (B, topic `optional-lease-terms`, scope all, 12084 units): pattern hits 0; 0; 1; 1; positives passed; control 0. Superseded by AZG-B-005.
- **AZG-B-005** (B, topic `optional-lease-terms`, scope all, 12084 units): pattern hits 0; 0; 1; 1; positives passed; control 0. Supersedes AZG-B-004 (INFLECTION on residence; rerun with plural). Cited by: optional-lease-terms.
- **AZG-A-004** (A, topic `alarm-tampering-fee`, scope all, 12084 units): pattern hits 0; 5; 1; 1; 3; positives passed; control 0. Cited by: alarm-tampering-fee.
- **AZG-B-006** (B, topic `ordnance-demolition-meter-disclosures`, scope all, 12084 units): pattern hits 1; 6; 4; 6; 0; positives passed; control 0. Cited by: ordnance-demolition-meter-disclosures.
- **AZG-B-007** (B, topic `other-landlord-facilities`, scope all, 12085 units): pattern hits 0; 0; 0; 0; positives passed; control 0. Cited by: other-landlord-facilities.
- **AZG-A-005** (A, topic `alt-housing`, scope all, 12085 units): pattern hits 4; 13; 10; 0; positives passed; control 0. Cited by: alt-housing.
- **AZG-M-010** (M, topic `dv-confidentiality`, scope all, 12085 units): pattern hits 18; 1; 27; 15; positives passed; control 0. Cited by: dv-confidentiality.
- **AZG-M-011** (M, topic `dv-eviction-protection`, scope all, 12085 units): pattern hits 19; 1; 2; positives passed; control 0. Cited by: dv-eviction-protection.
- **AZG-B-008** (B, topic `owner-move-in-reservation`, scope all, 12085 units): pattern hits 7; 0; 0; 3; positives passed; control 0. Cited by: owner-move-in-reservation.
- **AZG-A-006** (A, topic `appliances-excluded`, scope all, 12085 units): pattern hits 1; 4; 1; positives passed; control 0. Cited by: appliances-excluded.
- **AZG-B-009** (B, topic `parking-rules-notice`, scope all, 12085 units): pattern hits 14; 0; 1; 0; positives passed; control 0. Cited by: parking-rules-notice.
- **AZG-A-007** (A, topic `asbestos-hazards`, scope all, 12085 units): pattern hits 15; 0; 0; positives passed; control 0. Cited by: asbestos-hazards.
- **AZG-M-012** (M, topic `rent-receipts`, scope all, 12085 units): pattern hits 8; 59; 19; 22; 12; positives passed; control 0. Superseded by AZG-M-013.
- **AZG-B-010** (B, topic `periodic-services-entry`, scope all, 12085 units): pattern hits 70; 2; 9; 0; positives passed; control 0. Superseded by AZG-B-011.
- **AZG-A-008** (A, topic `association-obligations-disclosure`, scope all, 12085 units): pattern hits 6; 2; 6; positives passed; control 0. Cited by: association-obligations-disclosure.
- **AZG-M-013** (M, topic `rent-receipts`, scope all, 12085 units): pattern hits 8; 59; 19; 22; 12; positives passed; control 0. Supersedes AZG-M-012 (INFLECTION on \bcash\b). Cited by: rent-receipts.
- **AZG-B-011** (B, topic `periodic-services-entry`, scope all, 12085 units): pattern hits 70; 2; 9; 0; positives passed; control 0. Supersedes AZG-B-010 (INFLECTION on access; rerun with inflected forms). Cited by: periodic-services-entry.
- **AZG-M-014** (M, topic `deposit-installments`, scope all, 12085 units): pattern hits 6; 5; 3; 0; positives passed; control 0. Cited by: deposit-installments.
- **AZG-M-015** (M, topic `security-deposit-holding`, scope all, 12085 units): pattern hits 109; 9; 3; positives passed; control 0. Superseded by AZG-M-018.
- **AZG-M-016** (M, topic `security-deposit-standards`, scope all, 12085 units): pattern hits 110; 4; positives passed; control 0. Cited by: security-deposit-standards.
- **AZG-M-017** (M, topic `fee-in-lieu-of-deposit`, scope all, 12085 units): pattern hits 24; 1; 3; 5; positive FAILED: ARS 12-1127; control 0. Superseded by AZG-M-019.
- **AZG-M-018** (M, topic `security-deposit-holding`, scope all, 12085 units): pattern hits 140; 9; 3; positives passed; control 0. Supersedes AZG-M-015 (INFLECTION on \bbond\b). Cited by: security-deposit-holding.
- **AZG-M-019** (M, topic `fee-in-lieu-of-deposit`, scope all, 12085 units): pattern hits 24; 1; 3; 5; positives passed; control 0. Supersedes AZG-M-017 (positive ARS 12-1127 failed (no "in lieu of" in that unit); real positive chosen). Cited by: fee-in-lieu-of-deposit.
- **AZG-A-009** (A, topic `automatic-renewal`, scope all, 12085 units): pattern hits 9; 14; 3; 0; positives passed; control 0. Cited by: automatic-renewal.
- **AZG-M-020** (M, topic `utility-deposit-return`, scope all, 12085 units): pattern hits 1; 32; 13; positives passed; control 0. Cited by: utility-deposit-return.
- **AZG-M-021** (M, topic `utility-shutoff-statute`, scope all, 12085 units): pattern hits 14; 5; 4; positives passed; control 0. Cited by: utility-disconnection-notice-authorization, utility-interruption-submeter, utility-landlord-account, utility-shutoff-statute.
- **AZG-B-012** (B, topic `pest-control-notice`, scope all, 12085 units): pattern hits 0; 12; 5; 0; positives passed; control 0. Cited by: pest-control-notice.
- **AZG-M-022** (M, topic `meter-conservation-charge`, scope all, 12085 units): pattern hits 9; 2; 0; positives passed; control 0. Cited by: meter-conservation-charge.
- **AZG-M-023** (M, topic `application-fees`, scope all, 12085 units): pattern hits 133; 42; 1; 19; positive FAILED: ARS 32-2124; control 0. Superseded by AZG-M-025.
- **AZG-M-024** (M, topic `fee-transparency`, scope all, 12085 units): pattern hits 59; 0; 21; 60; positives passed; control 0. Cited by: fee-transparency, fee-unprovided-service, required-fees.
- **AZG-A-010** (A, topic `balcony-inspection`, scope all, 12085 units): pattern hits 4; 0; 1; 3; positives passed; control 0. Cited by: balcony-inspection.
- **AZG-M-025** (M, topic `application-fees`, scope all, 12085 units): pattern hits 133; 42; 1; 19; positives passed; control 0. Supersedes AZG-M-023 (positive ARS 32-2124 failed (guessed); INFLECTION on \brental\b). Cited by: application-fees.
- **AZG-B-013** (B, topic `pet-eviction-fact-sheet`, scope all, 12085 units): pattern hits 3; 1; 16; 2; positives passed; control 0. Superseded by AZG-B-014.
- **AZG-B-014** (B, topic `pet-eviction-fact-sheet`, scope all, 12085 units): pattern hits 3; 1; 16; 5; positives passed; control 0. Supersedes AZG-B-013 (INFLECTION on lease; rerun with inflected forms). Cited by: pet-eviction-fact-sheet.
- **AZG-B-015** (B, topic `plain-language`, scope all, 12085 units): pattern hits 32; 5; 1; 0; 0; positive FAILED: ARS 20-2108; control 0. Superseded by AZG-B-016.
- **AZG-A-011** (A, topic `binding-arbitration`, scope all, 12085 units): pattern hits 1; 0; 0; positives passed; control 0. Cited by: binding-arbitration.
- **AZG-B-016** (B, topic `plain-language`, scope all, 12085 units): pattern hits 32; 5; 1; 0; 0; positives passed; control 0. Supersedes AZG-B-015 (positive ARS 20-2108 is heading only (Title 20 not held); rerun with a held positive). Cited by: plain-language, plain-language-consumer-statement.
- **AZG-B-017** (B, topic `plain-language-consumer-statement`, scope all, 12085 units): pattern hits 1; 1; 4; 1; positives passed; control 0. Cited by: plain-language-consumer-statement.
- **AZG-B-018** (B, topic `political-access`, scope all, 12085 units): pattern hits 0; 6; 5; 5; positives passed; control 0. Cited by: political-access.
- **AZG-A-012** (A, topic `carpet-cleaning`, scope all, 12085 units): pattern hits 3; 0; 0; positives passed; control 0. Superseded by AZG-A-013.
- **AZG-A-013** (A, topic `carpet-cleaning`, scope all, 12085 units): pattern hits 3; 0; 0; positives passed; control 0. Supersedes AZG-A-012 (positive did not contain the searched term). Cited by: carpet-cleaning.
- **AZG-A-014** (A, topic `certificate-of-occupancy-disclosure`, scope all, 12085 units): pattern hits 34; 5; 6; 0; positives passed; control 0. Cited by: certificate-of-occupancy-disclosure.
- **AZG-B-019** (B, topic `portable-cooling-device`, scope all, 12085 units): pattern hits 8; 7; 11; 2; positives passed; control 0. Cited by: portable-cooling-device.
- **AZG-M-026** (M, topic `lease-registration`, scope all, 12085 units): pattern hits 53; 8; 6; 2; positives passed; control 0. Superseded by AZG-M-028.
- **AZG-M-027** (M, topic `tenant-rights-statement`, scope all, 12085 units): pattern hits 24; 8; 5; 1; positives passed; control 0. Superseded by AZG-M-029.
- **AZG-M-028** (M, topic `lease-registration`, scope all, 12085 units): pattern hits 53; 8; 6; 2; positives passed; control 0. Supersedes AZG-M-026 (inflection rerun (recorders, leaseholds)). Cited by: lease-registration.
- **AZG-M-029** (M, topic `tenant-rights-statement`, scope all, 12085 units): pattern hits 24; 8; 5; 1; positives passed; control 0. Supersedes AZG-M-027 (inflection rerun (websites)). Cited by: rights-responsibilities-guide, tenant-rights-statement.
- **AZG-B-020** (B, topic `portable-solar`, scope all, 12085 units): pattern hits 1; 6; 12; 14; positives passed; control 0. Cited by: portable-solar.
- **AZG-A-015** (A, topic `cold-weather-vacate-notice`, scope all, 12085 units): pattern hits 0; 1; 1; 0; positives passed; control 0. Cited by: cold-weather-vacate-notice.
- **AZG-A-016** (A, topic `common-area-lighting`, scope all, 12085 units): pattern hits 8; 4; 16; positives passed; control 0. Superseded by AZG-A-017.
- **AZG-A-017** (A, topic `common-area-lighting`, scope all, 12085 units): pattern hits 8; 4; 0; positives passed; control 0. Supersedes AZG-A-016 (third pattern caught meter in tax and length contexts; narrowed to electric or utility meters). Cited by: common-area-lighting.
- **AZG-B-021** (B, topic `portfolio-thresholds`, scope all, 12085 units): pattern hits 21; 0; 0; positives passed; control 0. Cited by: portfolio-thresholds.
- **AZG-M-030** (M, topic `early-termination`, scope all, 12085 units): pattern hits 5; 0; 108; 1; positives passed; control 0.
- **AZG-A-018** (A, topic `communal-land-lease-approval`, scope all, 12085 units): pattern hits 15; 1; 7; 0; positives passed; control 0. Cited by: communal-land-lease-approval.
- **AZG-B-022** (B, topic `possession-bond`, scope all, 12085 units): pattern hits 18; 0; 3; 15; positives passed; control 0. Cited by: possession-bond.
- **AZG-A-019** (A, topic `condemned-premises-rent-bar`, scope all, 12085 units): pattern hits 3; 0; 1; 2; positives passed; control 0. Superseded by AZG-A-020.
- **AZG-A-020** (A, topic `condemned-premises-rent-bar`, scope all, 12085 units): pattern hits 3; 0; 1; 3; positives passed; control 0. Supersedes AZG-A-019 (INFLECTION: \brent\b missed rented, rental). Cited by: condemned-premises-rent-bar.
- **AZG-B-023** (B, topic `post-eviction-property`, scope all, 12085 units): pattern hits 0; 5; 0; 0; positives passed; control 0. Cited by: post-eviction-property.
- **AZG-B-024** (B, topic `private-well-testing`, scope all, 12085 units): pattern hits 0; 33; 16; 0; positives passed; control 0. Cited by: private-well-testing.
- **AZG-A-021** (A, topic `confirmed-absences-habitability`, scope all, 12085 units): pattern hits 2; 1; 0; positives passed; control 0. Cited by: confirmed-absences-habitability.
- **AZG-A-022** (A, topic `confirmed-absences-misc`, scope all, 12085 units): pattern hits 6; 0; 0; positives passed; control 0. Cited by: confirmed-absences-misc.
- **AZG-B-025** (B, topic `promises-to-repair`, scope all, 12085 units): pattern hits 76; 2; 4; 1; positives passed; control 0. Cited by: promises-to-repair.
- **AZG-B-026** (B, topic `prop65-rental-warning`, scope all, 12085 units): pattern hits 6; 5; 26; 0; positives passed; control 0. Cited by: prop65-rental-warning.
- **AZG-B-027** (B, topic `property-tax-rent-disclosure`, scope all, 12092 units): pattern hits 5; 7; 0; 0; positive FAILED: ARS 42-12054; control 0. Superseded by AZG-B-028.
- **AZG-B-028** (B, topic `property-tax-rent-disclosure`, scope all, 12092 units): pattern hits 5; 7; 0; 0; positives passed; control 0. Supersedes AZG-B-027 (positive ARS 42-12054 failed (hyphenation differs); rerun with a positive that contains the term). Cited by: property-tax-rent-disclosure.
- **AZG-A-023** (A, topic `confirmed-absences-outside-title`, scope all, 12094 units): pattern hits 0; 0; 1; 0; positives passed; control 0. Cited by: confirmed-absences-outside-title.
- **AZG-A-024** (A, topic `construction-liens`, scope all, 12094 units): pattern hits 1; 5; 1; 0; 0; positives passed; control 0. Cited by: construction-liens.
- **AZG-B-029** (B, topic `protected-class-inquiry-ban`, scope all, 12094 units): pattern hits 22; 1; 3; 0; positives passed; control 0. Superseded by AZG-B-030.
- **AZG-B-030** (B, topic `protected-class-inquiry-ban`, scope all, 12094 units): pattern hits 22; 1; 3; 0; positives passed; control 0. Supersedes AZG-B-029 (INFLECTION on \bsex\b; rerun with sex(?:es)?). Cited by: protected-class-inquiry-ban.
- **AZG-A-025** (A, topic `conversion-notice`, scope all, 12094 units): pattern hits 5; 0; 2; 0; positives passed; control 0. Cited by: conversion-notice.
- **AZG-B-031** (B, topic `purpose-limitation`, scope all, 12094 units): pattern hits 16; 3; 225; 6; positive FAILED: ARS 32-2183; control 0. Superseded by AZG-B-032.
- **AZG-B-032** (B, topic `purpose-limitation`, scope all, 12094 units): pattern hits 18; 3; 0; 6; positive FAILED: ARS 33-405; control 0. Superseded by AZG-B-033. Supersedes AZG-B-031 (lease and lessee inflections; failed heading-only positive; over-broad third pattern narrowed).
- **AZG-B-033** (B, topic `purpose-limitation`, scope all, 12094 units): pattern hits 18; 3; 0; 6; positives passed; control 0. Supersedes AZG-B-032 (positive 33-405 failed (joint tenancy word order); new positive 33-1414). Cited by: purpose-limitation.
- **AZG-A-026** (A, topic `defective-drywall-disclosure`, scope all, 12094 units): pattern hits 2; 0; 1; 0; positives passed; control 0. Cited by: defective-drywall-disclosure.
- **AZG-B-034** (B, topic `recycling-notice`, scope all, 12094 units): pattern hits 2; 5; 3; 0; positives passed; control 0. Cited by: recycling-notice.
- **AZG-A-027** (A, topic `designated-repairer`, scope all, 12094 units): pattern hits 2; 2; 0; 0; positives passed; control 0. Cited by: designated-repairer.
- **AZG-A-028** (A, topic `disability-accommodation`, scope all, 12094 units): pattern hits 5; 7; 0; 8; positives passed; control 0. Superseded by AZG-A-029.
- **AZG-A-029** (A, topic `disability-accommodation`, scope all, 12094 units): pattern hits 5; 7; 0; 8; positives passed; control 0. Supersedes AZG-A-028 (INFLECTION on \blease\b; rerun with inflected lease forms). Cited by: disability-accommodation.
- **AZG-B-035** (B, topic `religious-cultural-display`, scope all, 12094 units): pattern hits 4; 0; 6; 1; positives passed; control 0. Cited by: religious-cultural-display.
- **AZG-A-030** (A, topic `disaster-displaced-guests`, scope all, 12094 units): pattern hits 2; 0; 2; positives passed; control 0. Cited by: disaster-displaced-guests.
- **AZG-A-031** (A, topic `disaster-duties`, scope all, 12094 units): pattern hits 6; 11; 4; 0; positives passed; control 0. Cited by: disaster-duties.
- **AZG-B-036** (B, topic `rent-demand-bar`, scope all, 12094 units): pattern hits 0; 1; 0; 2; positives passed; control 0. Superseded by AZG-B-037.
- **AZG-B-037** (B, topic `rent-demand-bar`, scope all, 12094 units): pattern hits 0; 7; 1; 2; 0; positives passed; control 0. Supersedes AZG-B-036 (B-036 printed an INFLECTION warning on \brent\b; rerun with inflections and slum-property and condemnation terms). Cited by: rent-demand-bar.
- **AZG-A-032** (A, topic `disaster-displaced-guests`, scope all, 12094 units): pattern hits 1; 0; 0; 0; positives passed; control 0. Cited by: disaster-displaced-guests.
- **AZG-A-033** (A, topic `disaster-duties`, scope all, 12094 units): pattern hits 1; 6; 1; 1; positives passed; control 0. Cited by: disaster-duties.
- **AZG-B-038** (B, topic `rent-escalation`, scope all, 12094 units): pattern hits 1; 11; 10; 3; 3; positives passed; control 0. Cited by: rent-escalation, term-change-notice.
- **AZG-B-039** (B, topic `rent-installments`, scope all, 12094 units): pattern hits 3; 3; 1; 1; positives passed; control 0. Cited by: rent-installments.
- **AZG-A-034** (A, topic `double-letting`, scope all, 12094 units): pattern hits 6; 0; 1; 0; positives passed; control 0. Cited by: double-letting.
- **AZG-B-040** (B, topic `rent-into-court-counterclaim`, scope all, 12094 units): pattern hits 2; 5; 5; 0; 4; positives passed; control 0. Cited by: rent-into-court-counterclaim.
- **AZG-A-035** (A, topic `emergency-assistance-right`, scope all, 12094 units): pattern hits 25; 0; 4; 2; positives passed; control 0. Superseded by AZG-A-036.
- **AZG-B-041** (B, topic `rent-reporting`, scope all, 12094 units): pattern hits 0; 3; 3; 1; positives passed; control 0. Cited by: rent-reporting.
- **AZG-A-036** (A, topic `emergency-assistance-right`, scope all, 12094 units): pattern hits 0; 0; 4; 2; positives passed; control 0. Supersedes AZG-A-035 (pattern 1 too broad (presumption near any law-enforcement mention, 25 criminal-law units); narrowed to summoning police or emergency assistance). Cited by: emergency-assistance-right.
- **AZG-B-042** (B, topic `renters-insurance-rules`, scope all, 12094 units): pattern hits 3; 13; 1; 43; 0; positives passed; control 0. Cited by: renters-insurance-rules.
- **AZG-A-037** (A, topic `emergency-contact`, scope all, 12094 units): pattern hits 10; 0; 4; 2; positives passed; control 0. Cited by: emergency-contact.
- **AZG-A-038** (A, topic `eminent-domain`, scope all, 12094 units): pattern hits 5; 3; 5; 9; positives passed; control 0. Cited by: eminent-domain.
- **AZG-B-043** (B, topic `repair-cost-termination`, scope all, 12094 units): pattern hits 12; 1; 0; 0; positives passed; control 0. Superseded by AZG-B-044.
- **AZG-B-044** (B, topic `repair-cost-termination`, scope all, 12094 units): pattern hits 12; 1; 0; 0; positives passed; control 0. Supersedes AZG-B-043 (INFLECTION on \bend\b; rerun with end(?:s|ed|ing)?). Cited by: repair-cost-termination.
- **AZG-B-045** (B, topic `repair-escrow-exemption-notice`, scope all, 12094 units): pattern hits 3; 6; 2; 1; positives passed; control 0. Cited by: repair-escrow-exemption-notice.
- **AZG-A-039** (A, topic `employee-screening`, scope all, 12094 units): pattern hits 1; 7; 0; 0; positives passed; control 0. Cited by: employee-screening.
- **AZG-B-046** (B, topic `repair-notice`, scope all, 12094 units): pattern hits 68; 0; 16; 1; positives passed; control 0. Cited by: repair-notice.
- **AZG-A-040** (A, topic `energy-data-release`, scope all, 12094 units): pattern hits 2; 2; 0; 0; positives passed; control 0. Cited by: energy-data-release.
- **AZG-B-047** (B, topic `required-disclosures`, scope all, 12094 units): pattern hits 2; 0; 11; 21; positives passed; control 0. Cited by: required-disclosures.
- **AZG-A-041** (A, topic `entity-landlord-court-representation`, scope all, 12094 units): pattern hits 0; 2; 3; 1; positives passed; control 0. Cited by: entity-landlord-court-representation.
- **AZG-A-042** (A, topic `environmental-event-termination`, scope all, 12094 units): pattern hits 26; 0; 1; 0; positives passed; control 0. Superseded by AZG-A-043.
- **AZG-A-043** (A, topic `environmental-event-termination`, scope all, 12094 units): pattern hits 0; 0; 1; 0; positives passed; control 0. Supersedes AZG-A-042 (pattern 1 too broad (environmental condition or hazard in 26 tax, contractor and waste units); narrowed to environmental event and environmental public health event). Cited by: environmental-event-termination.
- **AZG-B-048** (B, topic `sanitary-code-variance`, scope all, 12094 units): pattern hits 4; 4; 3; 4; positives passed; control 0. Cited by: sanitary-code-variance.
- **AZG-A-044** (A, topic `ev-charging-requirements`, scope all, 12094 units): pattern hits 8; 0; 0; 1; positives passed; control 0. Cited by: ev-charging-requirements.
- **AZG-A-045** (A, topic `ev-charging-end-of-tenancy`, scope all, 12094 units): pattern hits 0; 1; 0; 4; positives passed; control 0. Cited by: ev-charging-end-of-tenancy.
- **AZG-B-049** (B, topic `scope`, scope all, 12094 units): pattern hits 14; 0; 6; 9; 5; positives passed; control 0. Cited by: scope.
- **AZG-A-046** (A, topic `ev-charging-shared-area`, scope all, 12094 units): pattern hits 0; 0; 30; 5; positives passed; control 0. Superseded by AZG-A-047.
- **AZG-A-047** (A, topic `ev-charging-shared-area`, scope all, 12094 units): pattern hits 0; 0; 0; 5; positives passed; control 0. Supersedes AZG-A-046 (pattern 3 was a three-term NEAR (malformed per SOP rule 19 note) and returned 30 unrelated condominium units; replaced with a two-term AND form). Cited by: ev-charging-shared-area.
- **AZG-B-050** (B, topic `seasonal-tenancy`, scope all, 12094 units): pattern hits 0; 1; 1; 5; positives passed; control 0. Cited by: seasonal-tenancy.
- **AZG-B-051** (B, topic `security-devices`, scope all, 12094 units): pattern hits 3; 2; 1; 2; positives passed; control 0. Cited by: security-devices.
- **AZG-A-048** (A, topic `eviction-hardship-stay`, scope all, 12094 units): pattern hits 0; 0; 2; 17; positives passed; control 0. Superseded by AZG-A-049.
- **AZG-A-049** (A, topic `eviction-hardship-stay`, scope all, 12094 units): pattern hits 0; 0; 2; 0; positives passed; control 0. Superseded by AZG-A-050. Supersedes AZG-A-048 (pattern 4 matched age inside damages, manage and similar words (17 noise hits); added word boundaries).
- **AZG-A-050** (A, topic `eviction-hardship-stay`, scope all, 12094 units): pattern hits 0; 0; 2; 0; positives passed; control 0. Supersedes AZG-A-049 (tool flagged INFLECTION on \bage\b; rerun with ages/aged). Cited by: eviction-hardship-stay.
- **AZG-B-052** (B, topic `senior-housing-work-card`, scope all, 12094 units): pattern hits 0; 0; 0; 13; positives passed; control 0. Superseded by AZG-B-053.
- **AZG-B-053** (B, topic `senior-housing-work-card`, scope all, 12094 units): pattern hits 0; 0; 0; 2; 0; positives passed; control 0. Supersedes AZG-B-052 (pattern 4 was a malformed three-term NEAR; replaced with AND and a two-term NEAR). Cited by: senior-housing-work-card.
- **AZG-A-051** (A, topic `eviction-service-party`, scope all, 12094 units): pattern hits 0; 0; 1; 21; positives passed; control 0. Superseded by AZG-A-052.
- **AZG-A-052** (A, topic `eviction-service-party`, scope all, 12094 units): pattern hits 0; 0; 1; 0; positives passed; control 0. Supersedes AZG-A-051 (pattern 4 was a three-term NEAR (malformed, 21 unrelated notice units); replaced with a two-term tenant-agent pattern). Cited by: eviction-service-party.
- **AZG-B-054** (B, topic `service-animal-denial-penalty`, scope all, 12094 units): pattern hits 7; 0; 3; 0; positives passed; control 0. Cited by: service-animal-denial-penalty.
- **AZG-A-053** (A, topic `expedited-deposit-disposition`, scope all, 12094 units): pattern hits 2; 0; 0; 1; positives passed; control 0. Superseded by AZG-A-054.
- **AZG-A-054** (A, topic `expedited-deposit-disposition`, scope all, 12094 units): pattern hits 2; 0; 0; 1; positives passed; control 0. Supersedes AZG-A-053 (pattern 2 used three AND terms, which the tool may not parse (SOP rule 19 note); replaced with a two-term AND). Cited by: expedited-deposit-disposition.
- **AZG-B-055** (B, topic `service-animal-misrepresentation`, scope all, 12094 units): pattern hits 3; 0; 0; 0; positives passed; control 0. Superseded by AZG-B-056.
- **AZG-B-056** (B, topic `service-animal-misrepresentation`, scope all, 12094 units): pattern hits 3; 0; 0; 0; 3; positives passed; control 0. Supersedes AZG-B-055 (pattern 4 was a malformed three-term NEAR; replaced with AND; adds rental-application falsification test). Cited by: service-animal-misrepresentation.
- **AZG-A-055** (A, topic `extended-absence-notice`, scope all, 12094 units): pattern hits 1; 4; 0; 27; positives passed; control 0. Superseded by AZG-A-056.
- **AZG-A-056** (A, topic `extended-absence-notice`, scope all, 12094 units): pattern hits 1; 4; 0; 1; positives passed; control 0. Supersedes AZG-A-055 (pattern 4 was a three-term NEAR (malformed, 27 notice units); replaced with a two-term NEAR). Cited by: extended-absence-notice.
- **AZG-B-057** (B, topic `sex-offender-disclosure`, scope all, 12094 units): pattern hits 27; 5; 0; positives passed; control 0. Cited by: sex-offender-disclosure.
- **AZG-A-057** (A, topic `family-child-care`, scope all, 12094 units): pattern hits 2; 0; 1; 0; positive FAILED: ARS 46-807, ARS 41-1964; control 0. Superseded by AZG-A-058.
- **AZG-A-058** (A, topic `family-child-care`, scope all, 12094 units): pattern hits 2; 0; 1; 0; positives passed; control 0. Supersedes AZG-A-057 (both positives failed (terms taken from catchlines, not section text); positives replaced with body-text terms). Cited by: family-child-care.
- **AZG-B-058** (B, topic `sex-offender-occupancy`, scope all, 12094 units): pattern hits 19; 0; 1; 1; positives passed; control 0. Cited by: sex-offender-occupancy.
- **AZG-A-059** (A, topic `farmland-hunting-rights`, scope all, 12094 units): pattern hits 0; 3; 0; 2; positives passed; control 0. Cited by: farmland-hunting-rights.
- **AZG-B-059** (B, topic `sfr-occupancy-disclosure`, scope all, 12094 units): pattern hits 1; 17; 5; 1; positives passed; control 0. Cited by: sfr-occupancy-disclosure.
- **AZG-B-060** (B, topic `shoreline-access-disclosure`, scope all, 12094 units): pattern hits 3; 6; 4; 15; positives passed; control 0. Superseded by AZG-B-061.
- **AZG-B-061** (B, topic `shoreline-access-disclosure`, scope all, 12094 units): pattern hits 3; 6; 4; 3; 0; positives passed; control 0. Supersedes AZG-B-060 (pattern 4 was a malformed three-term NEAR; replaced with AND plus a two-term NEAR). Cited by: shoreline-access-disclosure.
- **AZG-B-062** (B, topic `shutdown-rent-protection`, scope all, 12094 units): pattern hits 36; 0; 0; 186; positives passed; control 0. Superseded by AZG-B-063.
- **AZG-A-060** (A, topic `fire-sprinkler-duty`, scope all, 12094 units): pattern hits 0; 8; 8; 25; positives passed; control 0. Cited by: fire-sprinkler-duty.
- **AZG-B-063** (B, topic `shutdown-rent-protection`, scope all, 12094 units): pattern hits 36; 0; 0; 0; positives passed; control 0. Supersedes AZG-B-062 (pattern 4 was too broad (any stay or continuance near federal or government); replaced with a shutdown-and-eviction AND test). Cited by: shutdown-rent-protection.
- **AZG-B-064** (B, topic `single-family-zone-lease-limit`, scope all, 12094 units): pattern hits 23; 2; 18; 0; positives passed; control 0. Superseded by AZG-B-065.
- **AZG-A-061** (A, topic `firearms`, scope all, 12094 units): pattern hits 2; 6; 10; 3; positives passed; control 0. Cited by: firearms.
- **AZG-B-065** (B, topic `single-family-zone-lease-limit`, scope all, 12094 units): pattern hits 23; 2; 4; 0; positives passed; control 0. Supersedes AZG-B-064 (pattern 3 was a malformed three-term NEAR; replaced with AND). Cited by: single-family-zone-lease-limit.
- **AZG-A-062** (A, topic `flood-disclosure`, scope all, 12095 units): pattern hits 15; 5; 15; 6; positives passed; control 0. Cited by: flood-disclosure.
- **AZG-B-066** (B, topic `smart-access`, scope all, 12099 units): pattern hits 5; 2; 4; 3; positives passed; control 0. Cited by: smart-access.
- **AZG-B-067** (B, topic `social-security-defense`, scope all, 12099 units): pattern hits 1; 1; 0; 1; positives passed; control 0. Cited by: social-security-defense.
- **AZG-A-063** (A, topic `furnishings-included`, scope all, 12099 units): pattern hits 0; 24; 8; 0; positives passed; control 0. Cited by: furnishings-included.
- **AZG-A-064** (A, topic `good-cause-notice`, scope all, 12099 units): pattern hits 11; 5; 1; 2; positives passed; control 0. Cited by: good-cause-notice.
- **AZG-B-068** (B, topic `special-district-representation`, scope all, 12099 units): pattern hits 9; 13; 6; positives passed; control 0. Cited by: special-district-representation.
- **AZG-B-069** (B, topic `sprinkler-disclosure`, scope all, 12099 units): pattern hits 6; 8; 3; 0; positives passed; control 0. Cited by: sprinkler-disclosure.
- **AZG-A-065** (A, topic `government-fee-reimbursement`, scope all, 12099 units): pattern hits 14; 2; 3; 4; positives passed; control 0. Cited by: government-fee-reimbursement.
- **AZG-A-066** (A, topic `governmental-fines`, scope all, 12099 units): pattern hits 97; 14; 12; 0; positives passed; control 0. Superseded by AZG-A-067. Cited by: governmental-fines.
- **AZG-A-067** (A, topic `governmental-fines`, scope all, 12099 units): pattern hits 18; 13; 12; 0; positives passed; control 0. Supersedes AZG-A-066 (pattern 1 lacked \b on fines and matched define/defined). Cited by: governmental-fines.
- **AZG-B-070** (B, topic `statutory-early-termination`, scope all, 12099 units): pattern hits 2; 14; 1; 3; positives passed; control 0. Cited by: statutory-early-termination.
- **AZG-A-068** (A, topic `guarantor-renewal`, scope all, 12099 units): pattern hits 16; 1; 0; 5; positives passed; control 0. Cited by: guarantor-renewal.
- **AZG-B-071** (B, topic `steam-radiator-covers`, scope all, 12099 units): pattern hits 0; 0; 0; 1; positives passed; control 0. Cited by: steam-radiator-covers.
- **AZG-A-069** (A, topic `guest-rights`, scope all, 12099 units): pattern hits 16; 6; 6; 23; positives passed; control 0. Cited by: guest-rights.
- **AZG-B-072** (B, topic `stove-refrigerator`, scope all, 12099 units): pattern hits 3; 17; 0; positives passed; control 0. Cited by: stove-refrigerator.
- **AZG-B-073** (B, topic `student-housing`, scope all, 12099 units): pattern hits 4; 1; 0; 5; positives passed; control 0. Cited by: student-housing.
- **AZG-A-070** (A, topic `habitability-presumption`, scope all, 12099 units): pattern hits 6; 2; 15; 0; positives passed; control 0. Cited by: habitability-presumption.
- **AZG-B-074** (B, topic `subsidized-inspection-refusal`, scope all, 12099 units): pattern hits 7; 6; 5; 0; positives passed; control 0. Cited by: subsidized-inspection-refusal.
- **AZG-B-075** (B, topic `subsidy-habitability-proration`, scope all, 12099 units): pattern hits 7; 2; positives passed; control 0. Cited by: subsidy-habitability-proration.
- **AZG-A-071** (A, topic `habitability-statement`, scope all, 12099 units): pattern hits 0; 4; 0; 18; positives passed; control 0. Superseded by AZG-A-072. Cited by: habitability-statement.
- **AZG-B-076** (B, topic `subsidy-late-fee`, scope all, 12099 units): pattern hits 0; 5; positives passed; control 0. Cited by: subsidy-late-fee.
- **AZG-A-072** (A, topic `habitability-statement`, scope all, 12099 units): pattern hits 0; 4; 0; 18; positives passed; control 0. Supersedes AZG-A-071 (INFLECTION on \blease\b in pattern 2; rerun with inflected forms). Cited by: habitability-statement.
- **AZG-A-073** (A, topic `hazardous-contamination-disclosure`, scope all, 12099 units): pattern hits 10; 12; 12; 4; positives passed; control 0. Cited by: hazardous-contamination-disclosure.
- **AZG-A-074** (A, topic `health-district-rental-rules`, scope all, 12099 units): pattern hits 0; 0; 9; 2; positives passed; control 0. Cited by: health-district-rental-rules.
- **AZG-B-077** (B, topic `tax-escalation`, scope all, 12099 units): pattern hits 6; 5; 3; 0; positives passed; control 0. Cited by: tax-escalation.
- **AZG-A-075** (A, topic `home-business`, scope all, 12099 units): pattern hits 2; 58; 5; 0; positives passed; control 0. Cited by: home-business.
- **AZG-B-078** (B, topic `telecom-access`, scope all, 12099 units): pattern hits 5; 14; 0; 0; positives passed; control 0. Superseded by AZG-B-079.
- **AZG-B-079** (B, topic `telecom-access`, scope all, 12099 units): pattern hits 5; 14; 0; 0; positives passed; control 0. Supersedes AZG-B-078 (inflection rerun: cable to cables?). Cited by: telecom-access.
- **AZG-A-076** (A, topic `infirmity-termination`, scope all, 12099 units): pattern hits 84; 1; 84; 10; positives passed; control 0. Cited by: infirmity-termination.
- **AZG-B-080** (B, topic `tenant-bankruptcy`, scope all, 12099 units): pattern hits 3; 2; 0; 1; positives passed; control 0. Cited by: tenant-bankruptcy.
- **AZG-A-077** (A, topic `informal-dispute-resolution`, scope all, 12099 units): pattern hits 69; 1; 0; 9; positives passed; control 0. Superseded by AZG-A-078. Cited by: informal-dispute-resolution.
- **AZG-A-078** (A, topic `informal-dispute-resolution`, scope all, 12099 units): pattern hits 0; 0; 0; 0; positives passed; control 0. Supersedes AZG-A-077 (mediat\w* lacked a leading \b and matched immediate/immediately). Cited by: informal-dispute-resolution.
- **AZG-B-081** (B, topic `tenant-confidential-information`, scope all, 12099 units): pattern hits 4; 1; 6; positives passed; control 0. Cited by: tenant-confidential-information.
- **AZG-A-079** (A, topic `inspection-condemnation-disclosure`, scope all, 12099 units): pattern hits 3; 3; 15; 6; positives passed; control 0. Cited by: inspection-condemnation-disclosure.
- **AZG-B-082** (B, topic `tenant-display-rights`, scope all, 12099 units): pattern hits 0; 1; 6; 0; positives passed; control 0. Cited by: tenant-display-rights.
- **AZG-A-080** (A, topic `key-control-policy`, scope all, 12099 units): pattern hits 6; 0; 3; 3; positive FAILED: ARS 33-1318; control 0. Superseded by AZG-A-081. Cited by: key-control-policy.
- **AZG-A-081** (A, topic `key-control-policy`, scope all, 12099 units): pattern hits 6; 0; 2; 3; positives passed; control 0. Supersedes AZG-A-080 (positive phrase not found in ARS 33-1318; pattern 3 was a three-part NEAR, replaced by AND). Cited by: key-control-policy.
- **AZG-B-083** (B, topic `tenant-employee-housing`, scope all, 12099 units): pattern hits 26; 4; 0; positives passed; control 0. Cited by: tenant-employee-housing.
- **AZG-B-084** (B, topic `tenant-insurance-claims`, scope all, 12099 units): pattern hits 0; 385; 0; 14; positives passed; control 0. Superseded by AZG-B-085.
- **AZG-B-085** (B, topic `tenant-insurance-claims`, scope all, 12099 units): pattern hits 0; 0; 0; 14; positives passed; control 0. Supersedes AZG-B-084 (second pattern lacked an insurance term and was over-broad). Cited by: tenant-insurance-claims.
- **AZG-B-086** (B, topic `tenant-portal`, scope all, 12099 units): pattern hits 9; 1; 0; 1; positives passed; control 0. Cited by: tenant-portal.
- **AZG-B-087** (B, topic `tenant-records`, scope all, 12099 units): pattern hits 13; 8; 0; 11; positives passed; control 0. Superseded by AZG-B-088.
- **AZG-B-088** (B, topic `tenant-records`, scope all, 12099 units): pattern hits 13; 8; 0; 11; positives passed; control 0. Supersedes AZG-B-087 (inflection rerun: keep to keep(?:s|ing)?|kept). Cited by: tenant-records.
- **AZG-A-082** (A, topic `landlord-liability-insurance`, scope all, 12099 units): pattern hits 4; 5; 0; 14; positives passed; control 0. Cited by: landlord-liability-insurance.
- **AZG-B-089** (B, topic `tenant-repair-remedies`, scope all, 12101 units): pattern hits 3; 5; 2; 0; positives passed; control 0. Superseded by AZG-B-090.
- **AZG-B-090** (B, topic `tenant-repair-remedies`, scope all, 12101 units): pattern hits 3; 5; 4; 0; positives passed; control 0. Supersedes AZG-B-089 (inflection rerun on rent). Cited by: tenant-repair-remedies.
- **AZG-A-083** (A, topic `law-enforcement-cooperation`, scope all, 12101 units): pattern hits 1; 0; 3; 2; positives passed; control 0. Cited by: law-enforcement-cooperation.
- **AZG-B-091** (B, topic `tenant-right-to-organize`, scope all, 12110 units): pattern hits 6; 33; 6; 18; positives passed; control 0. Cited by: tenant-right-to-organize.
- **AZG-A-084** (A, topic `lead-safe-certification`, scope all, 12110 units): pattern hits 0; 0; 1; 2; positives passed; control 0. Superseded by AZG-A-085. Cited by: lead-safe-certification.
- **AZG-A-085** (A, topic `lead-safe-certification`, scope all, 12110 units): pattern hits 0; 0; 1; 2; positives passed; control 0. Supersedes AZG-A-084 (pattern 4 used bare \blease\b; inflected forms added). Cited by: lead-safe-certification.
- **AZG-A-086** (A, topic `lead-state-notices`, scope all, 12110 units): pattern hits 2; 1; 1; 1; positives passed; control 0. Superseded by AZG-A-087. Cited by: lead-state-notices.
- **AZG-A-087** (A, topic `lead-state-notices`, scope all, 12110 units): pattern hits 2; 1; 1; 1; positives passed; control 0. Supersedes AZG-A-086 (bare \blead\b flagged INFLECTION; replaced by explicit lead-material phrases). Cited by: lead-state-notices.
- **AZG-A-088** (A, topic `lease-content-requirements`, scope all, 12110 units): pattern hits 13; 5; 4; 3; positives passed; control 0. Cited by: lease-content-requirements.
- **AZG-B-092** (B, topic `tenant-screening`, scope all, 12110 units): pattern hits 20; 4; 0; 2; 2; positives passed; control 0. Cited by: tenant-screening.
- **AZG-A-089** (A, topic `lease-notice-initial-requirement`, scope all, 12110 units): pattern hits 5; 3; 3; 4; positives passed; control 0. Cited by: lease-notice-initial-requirement.
- **AZG-B-093** (B, topic `term-change-notice`, scope all, 12110 units): pattern hits 19; 1; 29; 1; positives passed; control 0. Superseded by AZG-B-094.
- **AZG-B-094** (B, topic `term-change-notice`, scope all, 12110 units): pattern hits 19; 1; 0; 1; positives passed; control 0. Supersedes AZG-B-093 (patterns 3 and 4 were three-part NEAR forms; rewritten as two-part NEAR). Cited by: term-change-notice.
- **AZG-B-095** (B, topic `tpa-notice`, scope all, 12110 units): pattern hits 8; 1; 7; 0; positives passed; control 0. Cited by: tpa-exemption-notice, tpa-notice.
- **AZG-A-090** (A, topic `lease-term-limitation`, scope all, 12110 units): pattern hits 5; 0; 1; 2; positives passed; control 0. Cited by: lease-term-limitation.
- **AZG-B-096** (B, topic `tpa-exemption-notice`, scope all, 12110 units): pattern hits 34; 0; 0; positives passed; control 0. Cited by: tpa-exemption-notice.
- **AZG-A-091** (A, topic `lease-type-parity`, scope all, 12110 units): pattern hits 1; 0; 0; 4; positives passed; control 0. Superseded by AZG-A-092. Cited by: lease-type-parity.
- **AZG-B-097** (B, topic `tpa-sunset`, scope all, 12110 units): pattern hits 0; 0; 0; 1; positives passed; control 0. Cited by: tpa-sunset.
- **AZG-A-092** (A, topic `lease-type-parity`, scope all, 12110 units): pattern hits 1; 0; 0; 4; positives passed; control 0. Supersedes AZG-A-091 (pattern 3 used bare \brent\b; inflections added). Cited by: lease-type-parity.
- **AZG-A-093** (A, topic `lease-type-size`, scope all, 12110 units): pattern hits 6; 4; 6; 0; positive FAILED: ARS 33-1703; control 0. Superseded by AZG-A-094. Cited by: lease-type-size.
- **AZG-B-098** (B, topic `translation-duty`, scope all, 12110 units): pattern hits 0; 0; 12; 0; positives passed; control 0. Superseded by AZG-B-099.
- **AZG-A-094** (A, topic `lease-type-size`, scope all, 12110 units): pattern hits 6; 4; 6; 0; positives passed; control 0. Supersedes AZG-A-093 (positive phrase for ARS 33-1703 was wrong (text reads ten-point bold-faced type)). Cited by: lease-type-size.
- **AZG-B-099** (B, topic `translation-duty`, scope all, 12110 units): pattern hits 0; 0; 12; 0; positives passed; control 0. Supersedes AZG-B-098 (positives did not contain the searched terms; rerun with units that do). Cited by: translation-duty.
- **AZG-A-095** (A, topic `limitation-of-actions`, scope all, 12110 units): pattern hits 1; 1; 0; 23; positives passed; control 0. Cited by: limitation-of-actions.
- **AZG-B-100** (B, topic `trespass-notice`, scope all, 12110 units): pattern hits 2; 0; 0; 0; positives passed; control 0. Cited by: trespass-notice.
- **AZG-A-096** (A, topic `military-air-zone-disclosure`, scope all, 12110 units): pattern hits 15; 10; 15; 22; positives passed; control 0. Cited by: military-air-zone-disclosure.
- **AZG-B-101** (B, topic `truth-in-renting`, scope all, 12110 units): pattern hits 0; 2; 7; 2; positives passed; control 0. Cited by: truth-in-renting.
- **AZG-B-102** (B, topic `unbundled-parking`, scope all, 12110 units): pattern hits 2; 10; 0; 3; positives passed; control 0. Cited by: unbundled-parking.
- **AZG-A-097** (A, topic `minor-tenant-filing`, scope all, 12110 units): pattern hits 16; 5; 0; 1; positives passed; control 0. Cited by: minor-tenant-filing.
- **AZG-B-103** (B, topic `usufructuary-lessor`, scope all, 12110 units): pattern hits 0; 1; 0; 0; positive FAILED: ARS 14-2804; control 0. Superseded by AZG-B-104.
- **AZG-B-104** (B, topic `usufructuary-lessor`, scope all, 12110 units): pattern hits 0; 1; 0; 0; positives passed; control 0. Supersedes AZG-B-103 (positive ARS 14-2804 failed (title 14 is headings only); rerun with read positives). Cited by: usufructuary-lessor.
- **AZG-A-098** (A, topic `municipal-utility-lien`, scope all, 12110 units): pattern hits 3; 3; 5; 2; positives passed; control 0. Cited by: municipal-utility-lien.
- **AZG-B-105** (B, topic `veterans-incentive`, scope all, 12110 units): pattern hits 9; 13; 1; positives passed; control 0. Cited by: veterans-incentive.
- **AZG-B-106** (B, topic `water-heater-temperature`, scope all, 12110 units): pattern hits 12; 1; 1; 0; positives passed; control 0. Cited by: water-heater-temperature.
- **AZG-B-107** (B, topic `waterbed`, scope all, 12110 units): pattern hits 0; 0; 6; positives passed; control 0. Cited by: waterbed.
- **AZG-B-108** (B, topic `window-guards`, scope all, 12111 units): pattern hits 0; 2; 4; 1; positives passed; control 0. Cited by: window-guards.

## §4 Decisions and questions asked of Taylor

### Arizona items

1. **Waivers, prohibited provisions and remedies.** Read whole: §§ 33-1312, 33-1315, 33-1325, 33-1371, 33-1373, 33-1377, 12-341.01, 44-143. Each of the 17 topics has its own row.
   - The central row is `edu-part5-nonwaivable-az`. The others point to it and to `edu-prohibited-lease-terms-az` and `edu-partial-payments-az`, which are unchanged.
   - **jury-waiver:** no clause offered. A waiver of a jury in the Act's actions risks § 33-1315(A)(1), and no Arizona statute authorizes a pre-dispute residential jury waiver (AZG-M-001).
   - **notice-service-fee and eviction-penalty-clause-ban:** absence rows, and no fee clause. This keeps the SOP 1.13 retro decision.
   - **collection-fee:** an optional `collection-fee-az` clause (CONDITIONAL, SERVES_LANDLORD, rule 54). It covers the agency's actual charge up to a stated percentage and no attorney fees (§ 33-1315(A)(2); §§ 32-1051(3) and 32-1004(A) are the collection-agency rules).
   - **liquidated-damages:** no Arizona dwelling statute (AZG-M-002, AZG-M-030). Case law was not searched. See item 7.
   - **waiver-by-acceptance:** answered from § 33-1371. The single-state non-waiver clauses of other states are not tagged, because § 33-1371(C) governs partial payment in Arizona.
2. **Domestic violence.** Read whole: § 33-1318 (all subsections), §§ 13-3601, 13-3602, 13-1406; FEDERAL: 34 U.S.C. § 12491 (excerpt saved). All six topics are answered and point to `edu-dv-lease-termination-az`, which is unchanged.
   - Laws 2026, ch. 242 amends § 13-3602 but does not move it, so `dv-protection-order-chapter-moved` is answered "not moved".
   - **dv-confidentiality** and **dv-eviction-protection** are absent at state level (AZG-M-010, AZG-M-011). VAWA covers covered housing only.
3. **Deposits, fees and utilities.** Read whole: §§ 33-1310, 33-1314, 33-1314.01, 33-1321, 33-1325, 33-1330, 33-1342, 33-1364, 33-1367, 33-1368, 33-1374, 32-2171 to 32-2174, 41-1491.19, 46-731; Ariz. Const. art. 15, § 2.
   - **security-deposit-cap:** a row now exists (`edu-security-deposit-cap-az`).
   - **New CONDITIONAL clause `security-deposit-disposition-az`**, basis REQUIRED_DISCLOSURE: A.R.S. § 32-2174(E). That subsection says 'Each rental agreement executed by a property manager shall include a provision that clearly states the disposition of any tenant deposits.' (A.R.S. § 32-2174(E)). No library row stated this before.
   - **Absences:**

     | Topic | Battery |
     |---|---|
     | deposit-installments | AZG-M-014 |
     | security-deposit-standards | AZG-M-016 |
     | fee-in-lieu-of-deposit | AZG-M-019 |
     | application-fees | AZG-M-025 |
     | fee-transparency | AZG-M-024 |
     | rent-receipts | AZG-M-013 |
     | utility-deposit-return | AZG-M-020 |
     | utility-shutoff-statute | AZG-M-021 |
     | utility-disconnection-notice-authorization | AZG-M-021 |
     | meter-conservation-charge | AZG-M-022 |

   - **Cautious courses** (each stated in its row):
     - Application fees: state the fee's purpose in writing, even though § 33-1321(B) may not reach applicants.
     - Pet fees: none for assistance animals.
     - Utility transfer: no clause letting the landlord cut off landlord-name service (§ 33-1364(C)).
     - Fee in lieu of deposit: any refundable or securing part counts toward the cap.
     - Electric submetering: whether a reselling landlord is a public service corporation is left open, because Corporation Commission rules aren't held.
   - **Rows pointed to, unchanged:** `edu-security-deposit-az`, `security-deposit-return-az`, `nonrefundable-fees-az`, `edu-holding-deposit-az`, `late-fee-az`, `utility-billing-disclosure-az`, `edu-no-fee-caps-az`, `edu-fees-as-rent-az`.
4. **Local rules and registration.** Read whole: §§ 33-1329, 9-1301 to 9-1305, 11-1704, 11-1705, 11-269.11, 33-1902, 33-1904, 33-1322, 33-1343, 33-401, 33-411, 33-411.01, 33-412, 44-101.
   - **lease-registration:** Present. There is no duty to record; § 33-411.01 excludes leases from its recording rule; recording affects only priority (§§ 33-411, 33-412). Battery AZG-M-028.
   - **rental-inspection:** education only. A city needs owner or tenant consent, or a warrant (§ 9-1302(C)). No inspector-entry clause was offered.
   - **tenant-rights-statement** and **rights-responsibilities-guide:** absent. Only the § 33-1322(B) website notice applies, which `landlord-disclosure-az` already gives. Battery AZG-M-029.
   - `landlord-registration` and `rent-increase-notice` are not in the missing list.
   - Rows pointed to, unchanged: `edu-local-preemption-az`, `edu-rental-registration-az`.
5. **Shared fee clauses** (read against §§ 33-1315, 33-1321, 33-1324, 33-1318(E)-(F), 33-1342, 33-1260.01, 33-1806.01).
   - **`keys`: no conflict.**
     - Charging rekey cost for unreturned or replaced keys is a charge 'as specified in the signed lease agreement' (A.R.S. § 33-1321(D)), so it may come out of the deposit.
     - The § 33-1318(E) victim lock change is at the tenant's cost anyway.
     - § 33-1318(F) lets the landlord refuse a key to the abuser "notwithstanding any provision in the rental agreement", and the clause says nothing contrary.
     - § 33-1324 sets no rekey or lock duty.
   - **`hoa-compliance`: no conflict.**
     - Passing association fines the tenant causes to the tenant is a lease charge. The association statutes limit only what an association may demand of a renting owner (§§ 33-1260.01(C)-(F), 33-1806.01(C)-(F)). They do not limit what the lease may require of the tenant.
     - One drafting point is reported under §6: association rules bind the tenant through the lease only if the tenant has them. Compare § 33-1342(A)(6), notice at signing, and (B), 30 days' notice for later rules.
6. **Central shared edits.**
   - **`smoking-policy`: reads correctly in Arizona.**
     - The no-smoking-anywhere clause is a term § 33-1314(A) allows.
     - Adult-use: § 36-2851(7) preserves a private owner's power 'to prohibit or regulate conduct otherwise allowed by this chapter on or in such property' (A.R.S. § 36-2851(7)).
     - Medical: a smoking ban penalizes conduct, not 'status as a cardholder' (A.R.S. § 36-2813(A)).
     - § 36-601.01 already bans smoking in enclosed common areas of apartment buildings. The landlord's sign and ashtray duties there are stated in `edu-smoke-drift-waiver-az`.
     - The 2026-10-04 narrowing to Tenant, occupants and guests only reduces Tenant's liability.
   - **`addendum-precedence`: reads correctly.** No Arizona statute makes an addendum control over the lease. Deferring to documents that law makes controlling cannot breach Arizona law, and nothing in A.R.S. §§ 33-1301 to 33-1381 bears on it.
7. **Early termination** (`early-termination-ks`). Read whole: §§ 33-1370(C), 33-1373, 33-1375, 33-1318, 33-1318.01, 33-1312, 33-1366. Battery AZG-M-030 found no Arizona statute on early-termination fees or liquidated damages in a dwelling lease. The only liquidated-damages statute is for property management agreements: § 32-2173 allows 'reasonable liquidated damages or cancellation fees' there.
   - **Statute level: the fee holds.** No statute bars it.
   - **The risk is case law, not searched.** Arizona has a statutory duty to re-rent at a fair rental (§ 33-1370(C)) and limits the landlord to actual damages after termination (§ 33-1373). A fee of 30% of the remaining Rent on a long Term (about 3.3 months' Rent with 11 months left) could be attacked as a penalty or as unconscionable (§ 33-1312).
   - **Cautious course:** an `early-termination-az` override matching NV, TX and NJ: a flat one-month fee, with release from later Rent. Its full fields are under §6. **Asked of Taylor (pending):** adopt the override? Recommendation: yes. It is the course the library already took where a statutory duty to re-rent exists.
8. **CARES Act: no contradiction.**
   - `edu-eviction-process-az` describes the § 33-1368 5-day and 10-day notices as state procedure. It does not say that federal law can't add to them, and no AZ row says a covered tenant can be required to vacate sooner than 30 days.
   - The eviction court rules, which may ask for a CARES statement in the complaint, are not held and are flagged.
   - Optional: add a pointer sentence to `edu-eviction-process-az` ("Some properties also need the federal 30-day notice; see edu-cares-act-notice"). This is not an error, so it is listed here and not under §6.
9. **Currency.** Rerun as AZG-CUR-001 and AZG-CUR-002 with a control (see §1). Other relied-on sections were checked in AZG-M-009, and by the helpers per row.

### Main-pass decisions (rule 54 cautious courses)
- No jury-waiver, notice-service-fee or eviction-fee clause.
- Optional `collection-fee-az`.
- New CONDITIONAL `security-deposit-disposition-az` (§ 32-2174(E)).
- No inspector-entry clause.
- No utility-cutoff clause for failure to transfer service.
- Smoke drift: education only.

### Questions for Taylor (1-5 asked in chat 2026-11-04, 6-7 on 2026-11-05, 8-10 on 2026-11-05; answers pending)
1. **early-termination (item 7):** adopt the flat one-month `early-termination-az` override? Recommended: yes.
2. **appliances-excluded** (helper A): offer no Arizona appliance-exclusion clause. Recommended. § 33-1324(A)(4) covers appliances 'supplied or required to be supplied', and § 33-1315(A)(3) bars limiting the landlord's liability.
3. **binding-arbitration** (helper A): offer no Arizona arbitration clause. Recommended. § 33-1315(A)(1) bars waiving the Act's remedies 'by action'; the FAA question (9 U.S.C. § 2) is queued and not read.
4. **cannabis** (helper A): offer no separate cannabis clause. Recommended. `smoking-policy` already covers smoking. A cultivation or possession ban would need a medical-cardholder exception (§§ 36-2813(A), 36-2814(A)(2)).
5. **portable-solar** (helper B): treat § 33-439(A) as reaching leases, so no flat ban on solar devices. Recommended.
6. **renters-insurance-rules** (helper B): no Arizona force-placed renter's insurance clause until Title 20 (insurance licensing) is read. Recommended.
7. **EV charger electricity** (helper A): bill it under § 33-1314.01(B), which allows cost plus an actual-cost administrative fee, disclosed in the lease, not under § 40-213(B). Recommended.
8. **government-fee-reimbursement** (helper A): offer the optional `government-fee-reimbursement-az` clause for ordinary registration and licensing fees, with fines, civil penalties and code-violation inspection fees excluded. This treats reimbursing such a fee as outside § 33-1315(A)(3)'s indemnity bar. Recommended.
9. **homestead-waiver** (helper A): no waiver clause. § 33-1132 voids waivers "except … when done with notice", and that phrase is undefined. Recommended.
10. **disability-accommodation** (helper A): count a restoration escrow negotiated under 24 C.F.R. § 100.203(a) toward the 1½-month security cap in § 33-1321(A). Recommended.
11. **landlord-lien** (helper A): no Arizona lien clause. § 33-1372(A) bars a lien on household goods, and whether the chapter 3 lien in § 33-361(D) survives for other goods is unsettled; the row tells landlords to collect by judgment. Recommended.
12. **tenant-right-to-organize** (helper B): keep the cautious wording. Whether the six-month presumption of retaliation in § 33-1381(B) covers organizing under (A)(3) is not settled by the text. Recommended.
- *Resolved without asking:* lease-term-limitation. The main pass read A.R.S. § 25-214 on azleg.gov. Both spouses must join in any lease of community real property of one year or more (§ 25-214(C)(1)), so `edu-lease-spousal-joinder-az` is now VERIFIED. Acknowledging long leases stays a cautious course.
- *Resolved without asking:* tenant-confidential-information (helper B). The main pass read A.R.S. §§ 18-551 and 18-552 (breach notice) on azleg.gov rather than ask.

New `{{variables}}`: none so far.

**Per-topic decisions recorded with the answers:**

- jury-waiver: no lease jury-waiver clause offered (cautious course; § 33-1315(A)(1) via § 33-1377(A)); education row per rule 54.
- collection-fee: optional collection-fee-az clause offered (rule 54), actual agency charge with a percentage ceiling, no attorney fees (§ 33-1315(A)(2)).
- security-deposit-holding: new CONDITIONAL clause security-deposit-disposition-az (A.R.S. § 32-2174(E) requires leases executed by a property manager to state the disposition of tenant deposits).
- rental-inspection: no inspector-entry lease clause (A.R.S. § 9-1302(C) requires owner or tenant consent or a warrant at the time; landlord access limited by § 33-1343(D)-(E)); education row only.
- accessory-dwelling-unit: education row only; no AZ statute requires an ADU lease term, and the other states' ADU premises clauses rest on their own statutes (CO § 29-35-403, ND § 47-16-27, MN § 504B.161), so none was tagged.
- adverse-proceeding-notice: Present on the landlord side (A.R.S. § 33-1331), absent on the tenant side; the shared clause tenant-forward-proceedings-ca is already tagged AZ, so no new clause.
- animal-care-access: answered from A.R.S. §§ 33-1314(E)-(G) and 33-1370(E); no new clause, since authorized-person-contact-az already offers the statutory designation; no advance-consent entry clause for a mere absence was offered, because A.R.S. § 33-1343(E) limits access and a consent clause could be read as waiving the two-day notice in (D).
- QUESTION FOR TAYLOR: appliances-excluded: Arizona's maintenance duty covers appliances 'supplied or required to be supplied' (A.R.S. § 33-1324(A)(4)), 'premises' includes 'existing facilities and appurtenances' (§ 33-1310(11)), and a lease can't limit liability arising under law (§ 33-1315(A)(3)); no statute says whether a left-behind, disclaimed appliance is 'supplied'. Recommendation: offer no Arizona exclusion clause (the education row tells landlords to remove what they won't maintain and to use maintenance-allocation-az to shift upkeep); revisit only if case law, which was not searched, settles it.
- automatic-renewal: absence row only; no AZ renewal clause written (lawful under A.R.S. § 33-1314(A), but any month-to-month renewal must leave termination to § 33-1375(B)); the main pass may add one if Taylor wants it.
- alarm-tampering-fee: absence row steering to actual cost under A.R.S. § 33-1368(C); no fee clause offered, since a fixed charge for breach turns on the main pass's liquidated-damages answer.
- alarm-tampering-fee: shared clause detector-care-la not tagged: its 'tell Landlord promptly' notice differs from the written notification that shifts repair to the landlord under A.R.S. § 36-1637(B), it adds carbon monoxide detectors Arizona doesn't require, and smoke-detector-duty-az already carries Arizona's detector duties.
- bed-bug-cooperation: tagged pest-cooperation-pr (entry through the lease's entry section, so Arizona's two-day notice governs); bed-bug-cooperation-* single-state clauses rest on their own statutes.
- QUESTION FOR TAYLOR: cannabis: Arizona lets a private property owner ban adult-use conduct on the property (A.R.S. § 36-2851(7)) but bars penalizing a person 'solely for his status as a cardholder' (§ 36-2813(A)) and keeps patient rights intact (§ 36-2851(14)); the medical act's property carve-out covers only a 'guest, client, customer or other visitor' (§ 36-2814(A)(2)). Recommendation: offer no Arizona cannabis-restriction clause for now (cannabis-restrictions-ak not tagged, since it reaches medical use); if Taylor wants one, limit it to adult-use smoking, vaping, cultivation and possession with an express exception for a registered cardholder's medical possession and non-smoked use, leaving smoking to smoking-policy.
- carpet-cleaning: tagged carpet-cleaning-ar; Arizona's deposit statute lets security cover 'all charges as specified in the signed lease agreement' (A.R.S. § 33-1321(D)), and no AZ carpet rule exists.
- actual-notice-method: absence row; the shared notices clause (tagged AZ) already defers to statutory methods, so no new clause.
- actual-notice-method (revision): FEDERAL: 15 U.S.C. § 7003(b)(2)(B) now quoted from the saved unit; body adds that the federal § 7001 rule does not apply to residential default, eviction or right-to-cure notices; § 7001 itself queued.
- QUESTION FOR TAYLOR: binding-arbitration: Arizona's arbitration act enforces written arbitration agreements (A.R.S. § 12-3006(A)) and the federal act makes a written arbitration provision in 'a contract evidencing a transaction involving commerce' enforceable save on general contract-revocation grounds (FEDERAL: 9 U.S.C. § 2), but the landlord-tenant act bars a tenant waiver of 'rights or remedies under this chapter' (§ 33-1315(A)(1)) and makes those rights enforceable 'by action', defined to include an action for possession (§§ 33-1305(B), 33-1310(1)); no text read settles whether a lease arbitration clause is such a waiver or whether the federal act displaces the bar, and case law (including FAA preemption cases) was not searched. Recommendation: offer no Arizona arbitration clause; the education row advises against one and, if used, a lawyer-drafted mutual clause that leaves possession cases and statutory remedies in court.
- binding-arbitration (revision): FEDERAL: 9 U.S.C. § 2 now quoted from the saved unit; no AZ clause still.
- asbestos-hazards (revision): federal NESHAP excerpts now quoted; the 'Facility' definition excludes residential buildings with four or fewer dwelling units; larger buildings get the § 61.145(a) inspection and (b)(1) notice duties. Status stays Absent (no Arizona statute).
- communal-land-lease-approval (revision): FEDERAL: 25 U.S.C. § 415(a) now quoted; Secretary of the Interior approval stated for restricted Indian lands; status stays Absent for Arizona.
- confirmed-absences-outside-title: squatter remedy present (A.R.S. § 12-1173(A)(3)(b), Laws 2026, ch. 69); rent receipts left to the main pass (rent-receipts); registration-as-precondition absent (AZG-A-023) and confirms the PARTIAL note already in edu-rental-registration-az.
- construction-liens: no-liens-ar not tagged; new no-liens-az drops the landlord-cost reimbursement limb and adds the A.R.S. § 33-1008(D) waiver-and-release and § 33-1363 carve-out.
- QUESTION FOR TAYLOR: construction-liens: does a tenant promise to reimburse the landlord's costs caused by a mechanic's lien from tenant-ordered work fall within A.R.S. § 33-1315(A)(3) ('indemnify the landlord for that liability or the costs connected therewith', for liability 'arising under law', here A.R.S. § 33-981)? Recommendation: keep it out of the AZ clause (no-liens-az has the tenant discharge the lien at its own expense instead) and don't tag no-liens-ar for AZ.
- conversion-notice: absence row; mentions the buyer-side conversion disclosures and the mobile-home 180-day change-in-use notice; noted the dangling 'as defined in section 33-1202' cross-reference in A.R.S. § 32-2181(A)(24).
- cure-and-eviction-grounds: short own-key row (rule 57) consistent with edu-eviction-process-az; no new clause (default-by-tenant already tagged AZ and covers the carve-outs).
- designated-repairer: no AZ clause; a lease limit on the tenant's repairer beyond A.R.S. § 33-1363(A)'s licensed contractor would risk A.R.S. § 33-1315(A)(1).
- disaster-displaced-guests: no AZ statute; § 33-1308(4) keeps transient hotel stays outside the act; guests governed by the lease, § 33-1342 and § 33-1378. Reused battery AZG-A-030 (run by the earlier helper) and added AZG-A-032 for AND forms and hotel terms.
- disaster-duties: Absent of a disaster-specific rule; points to edu-casualty-termination-az (§ 33-1366). Included § 12-515 pandemic immunity for lessors and § 41-110 emergency fund as the only disaster provisions that reach landlords.
- double-letting: no AZ prohibition or rent-suspension rule; the § 33-1362 failure-to-deliver remedy governs; points to edu-possession-delay-az.
- drug-free-housing-addendum: Present (crime free addendum expressly allowed, §§ 33-1260.01(G), 33-1806.01(G)); no separate AZ drug-free clause, points to crime-free-addendum-az which already covers drug-related criminal activity.
- emergency-assistance-right: Present, § 33-1315(A)(4)-(5); no presumed-defense or retaliation protection for calls for help (AZG-A-036). Education only; no clause (restating a tenant right).
- emergency-contact: Absent of any emergency-number or contact duty; tagged the generic optional emergency-contact-co for AZ (fields must be completed or the clause omitted, § 33-1322(E)); pointed to landlord-disclosure-az (§ 33-1322(A)) and authorized-person-contact-az (§ 33-1314(E)).
- eminent-domain: no AZ lease-end, rent or award-allocation rule; tagged eminent-domain-vi (optional, SERVES_LANDLORD) and added an education row on the condemnation procedure points that reach tenants (§§ 12-1116, 12-1120, 12-1122) and relocation payments (§§ 11-961 to 11-963).
- employee-screening: Absent; noted A.R.S. § 12-558.03 employer limited liability for hiring ex-offenders (premises owner included) and § 32-2108.01 fingerprint card for real estate licence applicants.
- Log note for the main pass: §1 of the AZ log says Laws 2024, ch. 52 amends only § 32-2174(A); the act also amends § 32-2108.01 (seen in this topic's currency check). STATUTES.TXT already shows the amended § 32-2108.01.
- energy-data-release: Absent; no AZ clause offered (whether a utility treats a lease term as customer consent turns on A.A.C. title 14 rules, not held); stated the §§ 9-500.36/11-269.14 ban on local benchmarking mandates and the § 44-1376.01 authorization rule. A.R.S. § 30-805 (confidential customer information, electric competition) is heading only and is flagged, not relied on.
- entity-landlord-court-representation: Absent in statute; NEEDS_REVIEW because court rules decide (not held, flagged); points to edu-eviction-court-rules-az for the property-manager limit without restating court-rule content beyond that row.
- environmental-event-termination: Absent; no new AZ clause (casualty-landlord-termination-az already covers fire or casualty; a broader environmental-event option has no statutory footing and is left to the lease, with the § 33-1312 and § 33-1374 limits stated).
- ev-charging-requirements: Present (§ 40-213; § 33-1314.01 for separately billed electricity); tagged ev-charger-installation-hi with an AZ note on limb (d).
- QUESTION FOR TAYLOR: when a landlord bills a tenant for electricity used at a landlord-owned or tenant-installed charger, does A.R.S. § 33-1314.01(B) (utility cost plus actual administrative fee only, lease disclosure) govern, or may the landlord price it as an "electric charging provider" under A.R.S. § 40-213(B) (energy fee plus time or fixed fees)? Recommendation: treat tenant-billed charger electricity under § 33-1314.01 (cost only, disclosed), as the rows now say, until counsel confirms otherwise; neither text addresses landlords.
- ev-charging-end-of-tenancy: Absent; points to the end-of-lease limb of ev-charger-installation-hi (tagged for AZ under ev-charging-requirements).
- ev-charging-shared-area: Absent; points to the § 33-1342 rules test for shared chargers and to edu-ev-charging-requirements-az for billing.
- eviction-hardship-stay: Absent; states the statutory delays only (§ 33-1377(C) postponement, § 12-1178(C) five-day writ wait, § 12-1179 supersedeas stay with rent into court); court rules flagged as not held.
- eviction-service-party: Absent; no AZ clause naming a tenant's service agent (service follows § 33-1377(B) and court rules, not held); states the § 41-162(C) substitute-address service option for address confidentiality participants.
- expedited-criminal-eviction: Present (§§ 33-1368(A), 33-1377(E)); short row keyed to this topic that points to edu-eviction-process-az, which already states the track inside the general eviction row.
- expedited-deposit-disposition: Absent; no AZ clause for an expedited-processing fee (fee legality is the main pass's); points to edu-security-deposit-az.
- extended-absence-notice: Absent of a statutory duty; tagged extended-absence-notice-ks (7-day notice, actual damages for willful failure) for AZ, with the § 33-1370(J) abandonment and § 33-1343 access points in the note.
- family-child-care: Absent; lease governs; noted DHS group-home certification (§ 36-897.01) and DES home-provider certification standards (§ 46-807).
- fire-code-standard: Present; A.R.S. § 37-1383 read from Laws 2025, ch. 99, § 2 (Title 37 is heading only); the code edition is in A.A.C. (not held, flagged). Fire-district inspections do not reach residential property (Laws 2024, ch. 71).
- fire-sprinkler-duty: Absent of a landlord retrofit duty; stated the local-code bar for one- and two-unit residences (§§ 9-807, 11-861(E)), ADU and middle-housing sprinkler bars, and the § 33-1324(A)(1)/§ 9-1303(7)(b) code-compliance duty.
- firearms: Present (§ 12-781 parking rule, voids conflicting landlord rules, with exceptions); no in-unit or permit-holder protection (AZG-A-061); tagged firearm-rules-la (its locked-vehicle carve-out matches § 12-781(A)).
- flood-disclosure: Absent for leases (AZG-A-062); noted the seller-only floodplain affidavit (§ 33-422) and optional third-party report (§ 33-423). No library flood clause tags AZ (all rest on other states' statutes).
- forfeiture-redemption: Present (§ 33-1368(B) three-stage reinstatement); new short row pointing to edu-eviction-process-az, which states the same rule under another key (rule 57). No library row tags AZ (all rest on other states' statutes).
- frozen-standard-incorporation: Present as an education row: no ARLTA edition freeze; codes adopted locally by reference (§§ 9-802, 11-861); existing-building rule in § 9-1303(7)(b), (12); accessibility for new construction only (§ 41-1492.03); FHAG with no edition (§ 41-1491.19(D)); statutes roll forward (§ 1-255).
- furnishings-included: tagged furnishings-included-la (no AZ furnished-rental rule, AZG-A-063; § 33-1310(11) puts furniture in the premises; § 33-1341(6) and § 33-322 back the no-removal term). No new row: the tag is keyed to this topic.
- government-fee-reimbursement: Absent (no AZ pass-through rule, AZG-A-065); new edu row plus an AZ-only optional clause (KY clause not tagged: no code-violation inspection fee exclusion, and its emergency-response exclusion rests on KRS 65.111).
- QUESTION FOR TAYLOR: Does a lease term making the tenant reimburse an ordinary government registration or licensing fee charged to the landlord count as indemnifying the landlord for a 'liability of the landlord arising under law' under A.R.S. § 33-1315(A)(3)? Recommendation: no for ordinary registration and licensing fees (they are a cost of renting, not a liability for wrongdoing), so offer the clause as drafted; but keep fines, civil penalties and code-violation inspection fees out of it, as the clause does.
- governmental-fines: Absent of a ban or tenant-liability default (AZG-A-067, superseding AZG-A-066); new edu row and AZ-only optional clause carrying the § 33-1368(F) guest condition in its text. tenant-caused-fines-as not tagged (its 'any person on the Premises with Tenant's consent' reach is wider than § 33-1368(F)).
- guarantor-renewal: Absent of a lease-guaranty rule (AZG-A-068); edu row states § 44-101(2) writing rule and the § 12-1641 surety notice-to-sue discharge (whether it reaches lease guarantors left to case law); tagged guaranty-as with that caveat.
- guest-rights: Absent for ARLTA dwelling units (AZG-A-069); pointed to § 33-1342 rules test, § 33-1368(F), § 33-1378 and the existing guest rows; mobile-home and RV guest-fee rules noted as a contrast only.
- habitability-materiality: Present (statutory thresholds per remedy: § 33-1361(A) material / materially affecting health and safety; § 33-1361(B) any noncompliance; § 33-1363(B) breach of fit and habitable; § 33-1364(A) deliberate or negligent; § 9-1303 list via § 33-1324(A)(1)); no general definition of material; case law left open.
- habitability-presumption: Absent (AZG-A-070); the only related presumption is retaliation within six months of a code or repair complaint (§ 33-1381(B)), stated with its exceptions.
- habitability-statement: Absent (AZG-A-072, superseding AZG-A-071 for an inflection flag); duty applies by § 33-1324 regardless; no clause per Taylor's no-restatement stance.
- hazardous-contamination-disclosure: Present: §§ 49-152(G) and 49-158(C) require each party to a recorded declaration of environmental use restriction to incorporate its terms into any lease (in full or by reference); new edu row and AZ clause (REQUIRED_DISCLOSURE); no general contamination disclosure (AZG-A-073); seller-only § 33-434.01. Who counts as a 'party' left cautious (any owner of restricted property).
- health-district-rental-rules: Absent (AZG-A-074); noted § 36-602 nuisance orders to owner or occupant and § 33-1381(A)(1) complaint protection.
- heating: Present (§ 33-1324(A)(6) duty with its two exceptions; § 33-1324(C) written SFR shift; § 33-1364 remedies and (C) no later transfer of utility payment); no statewide temperature; city cooling ordinances flagged, not resolved.
- home-business: Absent of a tenant right against a lease (AZG-A-075); § 11-820 limits county zoning only (covers tenant-run businesses); lease may restrict (§ 33-1314(A)); pointed to residential-use-only (already AZ-tagged).
- homestead-waiver: Present: personal property exemption waivers void notwithstanding agreement (§ 33-1132, exceptions § 33-1122 and 'when done with notice'); homestead waived only by acknowledged recorded declaration (§ 33-1104(B)); landlord household-goods lien unenforceable and distraint abolished (§ 33-1372). PROHIBITED education row; no clause.
- QUESTION FOR TAYLOR: A.R.S. § 33-1132 voids exemption waivers 'except as specifically provided in section 33-1122 and when done with notice'. Should the library read 'when done with notice' as allowing a lease waiver of personal property exemptions if the tenant gets notice? Recommendation: no. The phrase is undefined, ARLTA § 33-1372 already bars a landlord lien on household goods, and offering a waiver clause risks a void term; keep the PROHIBITED education row and offer no clause.
- infirmity-termination: Absent (AZG-A-076); only DV/sexual assault (§ 33-1318) and law-enforcement harassment-injunction (§ 33-1318.01) early termination; pointed to § 33-1375(B), § 33-1305(A) mitigation and § 33-1314(E)-(G) property retrieval on death or incapacity. No clause (early-termination fees are the main pass's).
- informal-dispute-resolution: tagged informal-dispute-resolution-or (no AZ rule, AZG-A-078 superseding AZG-A-077; clause preserves every notice, deadline and remedy so § 33-1315(A)(1) is not engaged; non-binding, not arbitration).
- inspection-condemnation-disclosure: Absent (AZG-A-079); noted § 33-1904 slum-property and unregistered-rental inspections (tenant consent, owner pays), § 33-1361(A) material falsification of written condition statements, § 33-343 untenantable premises.
- inspection-notice-penalty: Present (§ 33-1376(B): injunction or termination plus actual damages not less than one month's rent); new short row pointing to landlords-access-az (rule 57).
- key-control-policy: Absent (AZG-A-081, superseding AZG-A-080); pointed to keys, edu-dv-lockchange-az, edu-no-employee-screening-rule-az and the § 33-1343(D) notice rule.
- knowing-use-penalty: Present (§ 33-1315(B)); own short row pointing to edu-prohibited-lease-terms-az and edu-part5-nonwaivable-az, as instructed; only other ARLTA voidness clause is § 33-1364(E), which has no penalty of its own.
- landlord-breach-remedy: Present (§§ 33-1361 to 33-1367, 33-1376(B), 33-1381(B)); summary row pointing to habitability-timeline-az, edu-possession-delay-az, edu-casualty-termination-az, edu-prohibited-practices-az and the new edu-inspection-notice-penalty-az.
- farmland-hunting-rights: Absent of an owner-tenant allocation of hunting rights (AZG-A-059). Revised 2026-11-05 after reading A.R.S. § 17-304 whole: landowners or lessees may post private land closed (with the (C) sign rules), state or federal land only with commission consent, and entry to take wildlife is criminal trespass only under (D); since § 17-304 does not allocate rights between owner and tenant, the absence now rests on text read whole and the row is VERIFIED (was NEEDS_REVIEW).
- disability-accommodation: no AZ restoration clause; the restoration condition is allowed only 'where it is reasonable to do so' (A.R.S. § 41-1491.19(E)(1)), so the row advises putting it in each written approval rather than a blanket lease term.
- disability-accommodation: Laws 2025, ch. 191 enacts the immunity section as 41-1497.38; the compilation numbers it A.R.S. § 41-1491.38 (renumbering noted, rows cite the compiled number).
- disability-accommodation: revised 2026-11-05 after reading FEDERAL: 24 C.F.R. § 100.203(a)-(b) (saved excerpt): body now states the no-deposit-increase rule, the negotiated interest-bearing restoration escrow (interest to the tenant, amount not over restoration cost) and the description and workmanlike-assurance condition; (c) not in the saved unit. The fedqueue line for § 100.203(a)-(c) is answered for (a)-(b).
- QUESTION FOR TAYLOR: Does a restoration escrow negotiated under 24 C.F.R. § 100.203(a) count as 'security, however denominated' under the one and one-half month cap of A.R.S. § 33-1321(A)? Recommendation: treat it as counting toward the cap (it is money 'given to assure payment or performance', A.R.S. § 33-1310(15)) and tell landlords to keep deposit plus escrow within the cap, as the row now says, unless Taylor prefers a legal opinion.
- landlord-liability-insurance: Absent (AZG-A-082); noted the optional city/county short-term-rental insurance requirement (§§ 9-500.39(B)(8), 11-269.17(B)(8)) as outside ARLTA under § 33-1308(4).
- landlord-lien: Present (§ 33-1372; chapter 3 lien §§ 33-361(D), 33-362 yields under § 33-1304; § 33-1374 bars removal of possessions); no lien clause offered.
- QUESTION FOR TAYLOR: A.R.S. § 33-1372(A) bars only a landlord lien in the tenant's 'household goods'; the chapter 3 lien in §§ 33-361(D) and 33-362 reaches all non-exempt tenant property on the premises. Whether a landlord of a dwelling unit keeps a court-enforceable chapter 3 lien on non-household goods (for example a vehicle or business equipment) isn't settled by the statutes (no case law searched). Recommendation: keep edu-landlord-lien-az's cautious course (no seizure, no lien clause, collect by judgment) and don't offer a lien clause for Arizona.
- landlord-remedies-termination: Present (§§ 33-1373, 33-1368(C), 33-1377(B), (F), 12-1178(A)); short row pointing to edu-landlord-remedies-after-breach-az; court jurisdiction/small claims (Title 22, heading only) flagged, not stated.
- law-enforcement-cooperation: Present (§ 33-1315(A)(4)-(5), § 13-3010(J), § 33-1378, crime-free §§ 33-1806.01(G), 33-1260.01(G), 33-1906); no general cooperation duty (AZG-A-083).
- lead-safe-certification: Absent (AZG-A-085, superseding AZG-A-084); pointed to the federal disclosure clause lead-based-paint (FEDERAL: 42 U.S.C. § 4852d(a)(1)); RRP certification queued.
- lead-state-notices: Absent (AZG-A-087, superseding AZG-A-086); pointed to lead-based-paint and the saved federal units 42 U.S.C. §§ 4852d(a)(1), (a)(4), 4851b(27).
- lease-content-requirements: Present (written-term items §§ 33-1322, 33-1321(B)-(C), 33-1314.01, 33-1331, 33-1368(B), 36-1681(E), 33-1319) with no general content list or first-page rule (AZG-A-088); pointer row to the existing item rows.
- lease-copy: Present+tag (§ 33-1322(E), § 33-1321(C)); new edu-lease-copy-az and tag of lease-copy-receipt-hi; whether a missing copy is a defense is not stated (statute says only material noncompliance).
- lease-notice-initial-requirement: Absent (AZG-A-089); read the topic as tenant initials on lease terms (ND example) and also pointed to the § 33-1322(A)-(B) start-of-tenancy written notices in landlord-disclosure-az, as the coordinator's note asked.
- lease-type-parity: Absent (AZG-A-092, superseding AZG-A-091); general limits §§ 33-1311, 33-1312 noted.
- lease-type-size: Absent (AZG-A-094, superseding AZG-A-093).
- limitation-of-actions: Present (§§ 12-548, 12-543, 12-542, 12-541(5), 12-550, 12-501, 12-508); partial-payment restart not addressed by statute (AZG-A-095); which period fits each claim left to case law, not searched.
- maintenance-duty-shift: Present (§ 33-1324(C)-(D)); short row pointing to maintenance-allocation-az and edu-habitability-modifiable-az; no tag (garbage-setout-as rests on another territory's solid waste rules).
- military-air-zone-disclosure: Absent for landlords (AZG-A-096); § 28-8484 binds public reports, reservation documents and residential sellers; subdivider leases flagged as reachable through § 32-2183.
- minor-tenant-filing: Present (age 18, § 1-215; emancipation §§ 12-2451, 12-2454) with no lease-capacity or minor-eviction statute (AZG-A-097); currency for § 1-215 rests on a search for amending language across the 12 citing acts rather than opening each.
- municipal-utility-lien: Present (sewer lien §§ 9-511.02, 11-264 with lessee exemption; four-or-fewer-units payment rule §§ 9-511.01(G)-(H), 9-511.02(G), 40-376); no electric, gas or garbage lien (AZG-A-098).
- good-cause-notice: Absent for ARLTA dwelling units (AZG-A-064); stated the § 33-1375 no-reason periodic notice, the § 33-1368(A) breach-notice content, the mobile-home and RV acts' good-cause and reason rules as a contrast, and the HCV ground limits (saved 24 C.F.R. § 982.310(a)).
- good-cause-notice (revised 2026-11-05 at the coordinator's request): replaced the 'FEDERAL, not read' mention of 24 C.F.R. § 982.310(e) with the saved text of (e)(1)(i)-(ii) and (e)(2)(i)-(ii) in notes, and added the HCV notice-of-grounds and PHA-copy duties to bodyText.
- lease-term-limitation: Present (§ 44-101(6) writing; § 33-401(A) conveyance writing; no maximum term, AZG-A-090); spouse row first NEEDS_REVIEW (§ 25-214 heading only), then VERIFIED after the main pass read § 25-214.
- lease-term-limitation (main pass, 2026-11-05): A.R.S. § 25-214 read on azleg.gov; spouse row now VERIFIED (joinder for any lease of one year or more of community real property); the § 33-401(B) acknowledgment point stays a cautious course, not a question.
- nonpayment-notice: § 33-1368(B) counts five days 'after written notice' while (A) says 'after receipt'; row advises counting from receipt (cautious course).
- nonresident-owner-agent: kept VERIFIED; the tax-withholding absence rests on Title 43 headings only (text not held), stated in the body and sent to a tax adviser.
- pest-control-notice: kept VERIFIED; Title 3, ch. 20 is heading only and pest management rules (A.A.C.) are not held, both stated in the body; any applicator duty there binds the pest control company, not the landlord, so far as headings show.
- QUESTION FOR TAYLOR: Does A.R.S. § 33-439(A), which voids any restriction in a 'contract ... or other instrument affecting ... any interest in, real property' that effectively prohibits a solar energy device, reach a residential lease? Recommendation: treat it as reaching leases (cautious course written into edu-portable-solar-az: no flat ban; reasonable placement, installation, damage and removal conditions only); no case law was searched.
- owner-move-in-reservation: tagged owner-occupancy-termination-ar rather than writing an AZ row; the no-statute finding sits in the tag note with battery AZG-B-008.
- owner-move-in-reservation: revised 2026-11-04 (step 0 of batch 2) to use the saved 24 C.F.R. § 982.310(a), (d)(1)-(2) excerpt in place of "FEDERAL, not read"; tag otherwise unchanged; fedqueue line left in place.
- portfolio-thresholds: revised 2026-11-04 (step 0 of batch 2) to use the saved 42 U.S.C. § 3603(b)-(c) excerpt (and § 3604(c)) in place of "FEDERAL, not read"; body now names the two federal differences (advertising ban survives the exemption; wider broker/business test); fedqueue line left in place.
- property-tax-rent-disclosure: revised 2026-11-04 (step 0 of batch 2): now Present. The NEEDS_REVIEW absence row edu-no-property-tax-rent-statement-az is replaced by VERIFIED edu-property-tax-rent-statement-az on A.R.S. § 43-1072(C), which the main pass read in the browser outside the corpus.
- property-tax-rent-disclosure: the row says 'certain residents 65 or older' from the section heading and does not state income limits or amounts, because the saved excerpt holds only (A) lead-in, (A)(2), (C) and (H)(2)-(3).
- ordnance-demolition-meter-disclosures: revised 2026-11-04 (step 0 of batch 2): A.R.S. § 28-8484, read by the main pass outside the corpus, binds public reports (A), reservation documents (C) and sellers (E) only; the "check § 28-8484" advice is dropped and the row stays VERIFIED.
- purpose-limitation: Absent; WY clause purpose-limitation-wy not tagged (rests on Wyo. Stat. § 1-21-1204(a)(v)); Arizona's answer is the landlord's § 33-1368(A) termination right and the § 12-991 abatement duty.
- recycling-notice: Absent; the OR and CA clauses rest on their own statutes and were not tagged.
- redemption: Present on A.R.S. § 33-1368(B) three-stage reinstatement plus § 33-1371 partial payments; short own row keyed to the topic though edu-eviction-process-az covers part of it (rule 57).
- redemption: the charity-check and post-judgment levy sub-questions are answered from the controlling sections without an absence battery; flag if the main pass wants batteries for sub-questions.
- religious-cultural-display: Absent; NV clause religious-display-nv rests on NRS 118A.200(3)(o) and was not tagged.
- rent-demand-bar: Absent; ran AZG-B-037, which supersedes AZG-B-036 (left by the earlier helper, INFLECTION on \brent\b). Condemnation is slice A's edu-no-condemned-rent-bar-az; this row covers code violations, citations, slum designation and assessor registration and points there.
- rent-installments: tagged rent-installments-or; the MN, ND, OH and NV clauses rest on those states' late-fee or tenancy statutes and were not tagged.
- rent-into-court-counterclaim: Present (A.R.S. § 33-1365); the mandatory-counterclaim and deposit-to-defend questions are statutory absences; the eviction rules (not held) may say more and are flagged, not resolved.
- rent-reporting: Absent; A.R.S. § 44-1697 (credit or loan accounts) not applied to rent; federal furnisher duties queued.
- renters-insurance-rules: Absent; the AZ clause is tenants-property-insurance-ks-oh-ca (already AZ, topic tenants-property-insurance), so this row points to it. renters-insurance-requirement-wy rests on Wyoming statutes and was not tagged.
- QUESTION FOR TAYLOR: should a landlord force-placing renter's insurance and charging the tenant be treated as an insurance-licensing issue in Arizona? Title 20 is heading only here; recommendation: keep the row's caution (check Title 20 first) and do not offer a force-placement clause for AZ until Title 20 is read.
- repair-cost-termination: Absent; battery AZG-B-044 supersedes AZG-B-043 (inflection rerun on \bend\b).
- repair-escrow-exemption-notice: Absent; repair-escrow-exemption-notice-oh (Ohio R.C. 5321.07 notice) not tagged.
- repair-notice: Present; the AZ clauses (tenant-maintenance, landlord-maintenance) are on other keys and already AZ, so this row points to them; repair-request-procedure-ne, habitability-notice-co and repair-notice-method-ar not tagged (other states' notice statutes).
- sanitary-code-variance: Absent; sanitary-code-variance-ma and safety-exception-notice-nj rest on those states' codes and were not tagged.
- scope: Present; vacation and short-term rentals left unsettled (recreational lodging undefined) rather than guessed.
- seasonal-tenancy: Absent; seasonal-tenancy-ri, seasonal-nonrenewable-lease-de and seasonal-tenancy-wy rest on those states' statutes and were not tagged.
- security-devices: Absent; the TX, CA and WY clauses rest on those states' lock statutes and were not tagged.
- self-help-eviction: Present; short pointer row to edu-prohibited-practices-az and the main pass's edu-lockout-for-rent-delinquency-az.
- senior-housing-work-card: Absent; edu-senior-housing-work-card-nv rests on Nevada law, not tagged. Battery AZG-B-053 supersedes AZG-B-052 (malformed NEAR).
- service-animal-misrepresentation: Absent for housing; edu-assistance-animals-az already says the misrepresentation penalty applies to public places; this row gives the topic its own key. Battery AZG-B-056 supersedes AZG-B-055 (malformed NEAR).
- sex-offender-disclosure: Present (A.R.S. § 32-2156 immunity); short row pointing to edu-disclosure-immunity-az (topic stigmatized-property).
- sfr-occupancy-disclosure: Absent; noted the 2026 unauthorized-occupant forcible detainer (A.R.S. § 12-1173(A)(3)(b), Laws 2026, ch. 69) as the AZ route; effective date of ch. 69 not verified (no effective-date section; general effective date not held).
- shoreline-access-disclosure: Absent; battery AZG-B-061 supersedes AZG-B-060 (malformed NEAR).
- shutdown-rent-protection: Absent; battery AZG-B-063 supersedes AZG-B-062 (over-broad pattern).
- single-family-zone-lease-limit: Absent; Arizona's ADU and middle-housing statutes bar local owner-occupancy and anti-rental rules, noted with a pointer to the main pass's edu-local-preemption-az. Battery AZG-B-065 supersedes AZG-B-064 (malformed NEAR).
- service-animal-denial-penalty: Absent for housing; the row adds a cautious note that a leasing office open to the public may be a 'public place' under A.R.S. § 11-1024(M)(4), which edu-assistance-animals-az does not mention.
- rent-escalation: tagged rent-escalation-la and rent-increase-midterm-ky; rent-escalation-ga (GA/TX safe harbour), rent-cost-adjustment-mi, midterm-rent-increase-in and the single-state clauses rest on other states' statutes and were not tagged.
- rent-escalation: rent-escalation-la's index example names the CPI South Region; tagged anyway because the index is a bracketed fill-in, with a note that an Arizona lease should name an index covering Arizona.
- special-district-representation: Absent for landlords; the A.R.S. § 32-2181(A)(14) district-debt statement is noted as a subdivider duty, with the build-to-rent subdivider question left open (A.A.C. and case law not held).
- sprinkler-disclosure: Absent; points to slice A's edu-no-fire-sprinkler-duty-az and edu-fire-code-standard-az for the code duties; the general appropriations acts' fire suppression lines are wildfire funding, not a retrofit program.
- statute-of-frauds-lease-term: Present; own short row pointing to edu-lease-registration-az for recording and priority; assignments and surrenders of long leases left to the cautious course (in writing), case law not searched.
- statutory-caps: Present as a summary row of Arizona money limits pointing to the main-pass deposit, fee and late-fee rows; no new figures beyond the cited sections.
- steam-radiator-covers: Absent; the NJ radiator rider not tagged (NJ rule).
- stove-refrigerator: Absent; points to slice A's edu-appliances-excluded-az; CA refrigerator clause not tagged (CA statute).
- student-housing: Present (the A.R.S. § 33-1308(1) and (3) exclusions); private or master-leased student buildings treated as covered by the Act (cautious course; 'at an institution' undefined, case law not searched).
- substandard-property-receivership: Present from A.R.S. §§ 33-1901 to 33-1905; adds the nuisance receiver (A.R.S. § 12-996) and lender receivers for 1-4 unit rentals (A.R.S. § 33-2603(B)(4)); local repair orders left to local codes.
- tax-escalation: Present+tag; tagged tax-insurance-escalation-la (generic optional clause already carried in NE, TX, NJ and others); state-specific clauses (MA, RI, NH, DE, MP, ND, OH) rest on their own statutes and were not tagged.
- telecom-access: Absent for dwellings; A.R.S. § 33-2301 noted as commercial only and A.R.S. § 9-600 as a limit on local governments; federal OTARD and exclusive-contract rules queued; battery AZG-B-079 supersedes AZG-B-078 (inflection).
- tenancy-at-will: Present (no tenancy at will under the Act; A.R.S. § 33-1314(D) month-to-month default; A.R.S. § 33-341 limited to non-dwellings by A.R.S. § 33-381).
- tenant-display-rights: Absent for tenants; association flag and sign protections (A.R.S. §§ 33-1808, 33-1261) read as limited to members and unit owners, consistent with edu-no-political-access-rule-az.
- tenant-employee-housing: Present (A.R.S. § 33-1308(5) exclusion); cautious course for excluded manager or custodian removal (separate written agreement; forcible detainer reach is case law, not searched).
- tenant-insurance-claims: Absent; cautious course (no repair delay pending a tenant claim; tenant's written consent before claiming on the tenant's policy); battery AZG-B-085 supersedes AZG-B-084.
- tenant-portal: Present (UETA refusal right, notice and partial-payment rules applied to portals); no portal statute (battery AZG-B-086); portal fees left to the main pass's required-fees row.
- protected-class-inquiry-ban: Absent. Arizona's act has no inquiry or record words; the row does not claim a spoken question is a prohibited 'statement' under § 41-1491.15 (case law not searched) and says only that the answer cannot be used.
- protected-class-inquiry-ban: Laws 2025, ch. 191 prints the new section as 41-1497.38 while azleg codifies it as § 41-1491.38; noted in the row, not a finding (edu-assistance-animals-az already cites § 41-1491.38).
- protected-class-inquiry-ban (revised 2026-11-05): the saved FEDERAL: 24 C.F.R. § 100.202(c) disability-inquiry ban and its five permitted inquiries now stated in the body and quoted in notes; Arizona statute absence unchanged.
- tenant-repair-remedies: Present; short row keyed to this topic pointing to habitability-timeline-az and edu-landlord-breach-remedy-az for the self-help remedies, and answering the escrow and rent-into-court questions from A.R.S. §§ 33-1365(A), 33-1368(B) and 12-1179(D)-(E); certified-unfit escrow, early release procedure and bad-faith deposit liability confirmed absent (AZG-B-090).
- tenant-right-to-organize: Present via the A.R.S. § 33-1381(A)(3) retaliation bar; no meeting, canvassing or recognition right for dwelling tenants (AZG-B-091). The row does not apply the six-month presumption to organizing, because the statute ties it to 'a complaint'; cautious course stated. Mobile home and RV park meeting rights mentioned as separate acts only.
- QUESTION FOR TAYLOR: Does the A.R.S. § 33-1381(B) six-month presumption ('evidence of a complaint') reach a tenant's organizing under (A)(3)? Recommendation: keep the row's cautious wording (not settled by the text; treat actions against organizers as open to challenge) unless case law is reviewed.
- tenant-statutory-duties: Present; one education row listing A.R.S. § 33-1341 duties plus the access, use, rules, bedbug, smoke-detector and guest duties, and the landlord's remedies; no clause added (the duties apply by statute; the shared tenant-maintenance clause already carries AZ).
- tenant-screening: Present (fair housing, children and occupancy, sealed records, certificate of second chance, falsification, credit freeze) with a confirmed absence of a screening-specific regime (AZG-B-092); FCRA marked FEDERAL, not read, and queued.
- tenant-screening: the certificate-of-second-chance protection is stated only as the evidence protection A.R.S. § 13-905(M)(3) borrows from § 12-558.03(B); the row does not say how the employer rule's negligent-hiring wording maps onto a negligent-leasing suit.
- term-change-notice: Present for rules (30-day notice, no substantial modification), legal amendments (immediate, written notice with description and effective date) and utility shifts (tenant's written consent); no other modification or fee-increase notice rule (AZG-B-094; rent side AZG-B-038). Month-to-month route stated as the A.R.S. § 33-1375 termination notice with new terms offered; binding effect of staying on left to case law (not searched). No clause: the term-change-notice-gu, -wy and -ca clauses rest on their own states' statutes.
- tpa-exemption-notice: Absent; nothing to be exempt from (no rent cap or just-cause law, rent control preempted by A.R.S. § 33-1329(A)); tpa-exemption-notice-ca not tagged (California statute).
- tpa-sunset: Absent; no repeal clock on A.R.S. §§ 33-1301 to 33-1381 or the eviction statutes in 2024-2026 session laws (AZG-B-097, AZG-CUR-001); dated as of 2026-11-05.
- tpa-notice: Absent; no rent cap, just-cause rule or tenant purchase right for dwellings (AZG-B-095); rent control preempted (A.R.S. § 33-1329); tpa-notice-ca not tagged (California statute).
- translation-duty: Absent; no translation, language-of-negotiation, type-size or verbatim-text rule for dwelling leases (AZG-B-099); official-English amendment noted as binding government; translated-lease practice advice given (controlling version).
- trespass-notice: Present (A.R.S. §§ 13-1502(A)(1), 12-1178(D)) with no landlord-specific barring or guest-defense rule (AZG-B-100); tagged barred-person-covenant-ne for AZ: its DV carve-out is broader than A.R.S. § 33-1318(A)'s evidence categories, which only narrows the landlord's power.
- truth-in-renting: Absent (AZG-B-101); the nearest Arizona rules (A.R.S. § 33-1322(B) website notice, § 33-1315 prohibited provisions and penalty, § 33-1322(E) blanks) are pointed to by existing row ids; NJ and MI clauses not tagged.
- unbundled-parking: Absent (AZG-B-102); no clause offered (separating parking is a pricing choice the existing parking clauses already allow); unbundled-parking-ca not tagged.
- unpaid-damages-interest: Present (A.R.S. § 44-1201: 10% absent a written rate, any written rate, judgment rate rules, no prejudgment interest on unliquidated damages); tagged interest-on-unpaid-amounts-ca for AZ (its variable rate fits A.R.S. § 44-1201(A)(2); the CA 10% guardrail noted as California-only). Late fees left to the main pass.
- usufructuary-lessor: Absent (no usufruct; no statute on leases by a life tenant; AZG-B-104); absence id per brief (edu-no-...); title 14 trust apportionment flagged as heading only.
- veterans-incentive: Absent (AZG-B-105); military family relief fund (A.R.S. § 41-608.04) stated as a tenant-side stipend, not a landlord incentive.
- water-heater-temperature: Absent (AZG-B-106); hot-water duty in A.R.S. § 33-1324(A)(6) stated; boiler law flagged (title 23 heading only; A.A.C. not held).
- waterbed: Absent (AZG-B-107); tagged waterbed-mn (plain consent clause, no fee) for AZ; insurance and deposit variants not tagged.
- window-guards: Absent for guards and security bars (AZG-B-108); the A.R.S. § 36-1681(C)(3) pool-access window latch rule stated with its exclusions; local codes flagged.
- written-notice-required: Present; one row listing the Landlord and Tenant Act's written-notice requirements on both sides, the A.R.S. § 33-1315(A)(1) bar on downgrading them, and the two notices (entry, new rules) the act does not require in writing.
- tenant-confidential-information: Present (association limits, SSN and disposal rules, breach notice) with a confirmed absence of a general landlord disclosure bar. Revised 2026-11-05: A.R.S. §§ 18-551 and 18-552 read as saved excerpts (coordinator); the earlier QUESTION FOR TAYLOR on reading them is resolved. Subsections (B)(2)(b), (L) and (N) were read but not saved, so they are stated without quotes.
- tenant-records: Present (deposit list, property-manager retention, records transfer on sale) with a confirmed absence of a rent-ledger or records-request rule; data-security half points to edu-tenant-confidential-information-az and the queued A.R.S. § 18-552 read.
- tenant-records: revised 2026-11-05 to state the breach-notice duty from the A.R.S. §§ 18-551 and 18-552 excerpts (coordinator); data-security detail stays in edu-tenant-confidential-information-az.
- smart-access: Absent; no AZ clause offered and the WY and MN smart-access clauses not tagged (their text or notes rest on WY and MN statutes); whether an electronic-lock reset meets A.R.S. § 33-1318(E) left to the cautious course (reset codes and revoke credentials).
- smart-access: revised 2026-11-05 with the A.R.S. §§ 18-551 and 18-552 excerpts; whether biometric or credential data is a 'specified data element' is not stated because those paragraphs of § 18-551(11) were not saved.
- social-security-defense: Absent; voucher-share rule (24 C.F.R. § 982.310(b)) queued, body flags federal program rules without describing them.
- social-security-defense (revised 2026-11-05): voucher-share rule now stated from the saved FEDERAL: 24 C.F.R. § 982.310(b)(1)-(2) excerpt; the queued line is answered.
- statutory-early-termination: Present as a list row; A.R.S. § 33-1361(A) material falsification treated as Arizona's fraud-inducement analogue (notice and cure); A.R.S. § 33-1364 left out because it gives no termination right; early-termination fees left to the main pass; SCRA queued (50 U.S.C. § 3955).
- statutory-early-termination (revised 2026-11-05): military termination now stated from the saved FEDERAL: 50 U.S.C. § 3955(a)-(b) excerpt; subsections (c)-(i) (notice, effective date, deposits) not read and flagged in the body.
- subsidized-inspection-refusal: Absent; program inspection treated as the landlord's own entry under A.R.S. § 33-1343 (cautious course); federal HCV inspection rules queued; the IL tenant-refusal clause not tagged (IL statute).
- subsidized-inspection-refusal (revised 2026-11-05): PHA inspection schedule and the family's duty to allow inspection now stated from saved FEDERAL: 24 C.F.R. §§ 982.405 and 982.551(d); HQS (982.401) still not read.
- subsidy-habitability-proration: Absent; federal HCV abatement rule queued (24 C.F.R. § 982.404); the body tells landlords not to pass agency abatements to the tenant unless program rules allow (cautious course).
- subsidy-habitability-proration (revised 2026-11-05): owner HQS duty, cure times, tenant-caused waiver and family responsibility stated from saved FEDERAL: 24 C.F.R. § 982.404(a)-(b)(1); abatement text not saved, said so.
- subsidy-late-fee: Absent; cautious course (late fee on the tenant's own late share only); 24 C.F.R. § 982.451 queued.
- subsidy-late-fee (revised 2026-11-05): PHA prompt-payment duty and HAP-contract late penalties stated from saved FEDERAL: 24 C.F.R. § 982.451(b)(5)(i)-(ii)(A), with § 982.310(b)(1); the listed circumstances not saved, said so.
- tenant-bankruptcy: Absent; cautious course (pause collection and eviction on notice of filing); federal Bankruptcy Code queued; A.R.S. § 33-362 left out of the body because chapter 3 does not reach dwellings (A.R.S. § 33-381).
- tenant-bankruptcy (revised 2026-11-05): automatic stay and the (b)(22)-(23) exceptions now stated from saved FEDERAL: 11 U.S.C. § 362 excerpts, and the § 365(e)(1) opening for bankruptcy-triggered lease terms; § 362(l)-(m) and the § 365(e)(1) conditions not saved, flagged in the body.
- required-disclosures: Present, as a checklist pointing to the AZ disclosure rows; the coverage-notice, first-page-form and option-to-purchase questions are absences.
- required-disclosures (revised 2026-11-05): item (10) now states the saved FEDERAL: 42 U.S.C. § 4852d(a)(1)(A)-(B) and (a)(4) duties; the pre-1978 cutoff is no longer stated because the target-housing definition (42 U.S.C. § 4851b) was not read (queued); 24 C.F.R. part 35 and 40 C.F.R. part 745 not read.
- required-disclosures (revised 2026-11-05): pre-1978 target-housing wording restored with its exceptions from the saved FEDERAL: 42 U.S.C. § 4851b(27) excerpt; 24 C.F.R. part 35 and 40 C.F.R. part 745 still not read.
- sex-offender-occupancy: Absent for landlords; A.R.S. § 13-3727 binds the offender and is described as such.
- sex-offender-occupancy (revised 2026-11-05): the saved FEDERAL: 42 U.S.C. § 13663(a) admission bar for federally assisted housing now stated in the body and quoted in notes; definition section 42 U.S.C. § 13664 queued.
- sex-offender-occupancy (revised 2026-11-05): federally assisted housing now described from the saved FEDERAL: 42 U.S.C. § 13664(a)(2)(A)-(E) excerpt; items after (E), if any, not saved.

## §5 Independent check

**Round 1 (2026-11-05).** One checker, briefed only from the delivered rows and the primary sources (not the helper brief), checked all 145 Present and clause rows. It also checked 30 of the 127 absence rows (chosen with `random.seed(80)`) by re-running one printed battery pattern per row.

Result: 1 ERROR and 20 FIXes, all applied as once-only errata to the frozen row files (`errata.py` asserts that each old string occurs exactly once).
- **ERROR:** `edu-written-notice-required-az` listed "essential-service notices" among the notices that must be in writing. § 33-1364(A) asks only for 'reasonable notice'. Only the notice of intent to pay the landlord's utility bill must be written (§ 33-1364(A)(1)).
- **FIX:** three repair-remedy rows said a tenant has no remedy at all for a tenant- or guest-caused condition:
  - `edu-habitability-materiality-az`
  - `edu-landlord-breach-remedy-az`
  - `edu-tenant-repair-remedies-az`

  The statute bars only termination (§ 33-1361(A)(2)), repair-and-deduct (§ 33-1363(B)) and the essential-services remedies (§ 33-1364(H)), and only for a deliberate or negligent act.
- **FIX: other wording points:**
  - five-day receipt applies to registered or certified mail only (§ 33-1313(B));
  - "up to" two months' rent (§ 33-1367);
  - the RV late fee counts from the due date (§ 33-2105(A)(2));
  - the § 33-1364(C) repair exception;
  - homestead abandonment by transfer or removal (§ 33-1104(A));
  - key return and disposal (§ 33-1370(I));
  - the § 9-511.02(F) sewer-lien scope;
  - the § 33-1314.01(D) consequence;
  - the § 33-1367 motive;
  - the § 33-1318(J) deposit clock;
  - the § 26-168(D) citation (Laws 2026, ch. 104 amends § 26-168 but adds no text to (D));
  - a tax-escalation statement that rested on an unread act.
- **FIX: guest responsibility.** Two shared clauses tagged for AZ make the tenant answer for every guest, which goes further than § 33-1368(F):
  - `barred-person-covenant-ne`: its shared clause text was left unchanged (scope fence), and its AZ note now qualifies the guest sentence.
  - `pest-cooperation-pr`: its AZ note was corrected.
- **Reproducibility:** three printed battery counts now re-run one higher. The extra hits are federal units loaded after those batteries ran, so the notes now say so. A script then swept every row for the same wordings and fixed four more:
  - `edu-no-agreed-notice-method-rule-az` (mailed-notice rule);
  - `edu-nonpayment-notice-az` (mailed-notice rule);
  - the repeated AZG-M-021 text in two utility rows.
- **What held:**
  - the deposit, waiver, prohibited-provision, entry, eviction-notice, reinstatement and DV rows;
  - all 27 clause rows under § 33-1315 and their bases, apart from the guest point;
  - 27 of the 30 sampled absence rows re-ran to their printed counts.

**Full battery re-run (2026-11-05).** A script re-ran all 238 logged batteries over the current units, with no logging.
- 56 pattern counts differ. Every difference is an added hit in a unit loaded after the battery ran: a federal excerpt, or one of A.R.S. §§ 17-304, 18-551 or 43-1072 read on azleg.gov.
- No hit was lost and no positive check changed.
- Two main-pass absence rows (`edu-no-tenant-rights-statement-az`, `edu-security-deposit-holding-az`) now name the added unit. Their findings stand. The output is `check/rerun.txt`.



**Round 2 (2026-11-05, the last round allowed).** A fresh checker diffed the 26 edited rows against their round 1 versions and checked a consistency set of 47 rows citing the same sections. It found 0 ERROR, 17 FIX and 3 NOTE.

Round 2 caught four points where round 1 was itself wrong or incomplete:
- Round 1 used `edu-confirmed-absences-habitability-az` as its model, but that row had the same missing deliberate-or-negligent element.
- The re-run note in `edu-no-tenant-rights-statement-az` now names two added units, not one. The second is FEDERAL: 34 U.S.C. § 12491(c)(3)(D).
- Round 1's "for any reason" in the submeter row contradicted that row's own repair and writ exceptions.
- Two more rows still described the fault bar or the utility-notice point the old way: `edu-alt-housing-az` and `edu-repair-notice-az`.

In the consistency set, no row still states the old wording on the fixed two months' rent, the five-day mailing rule or shutoff only after a writ. The § 33-1368(F) guest rows agree with each other.

All 20 findings were applied as errata. The validator then reported 250 topics, 272 rows and 1,660 quotes checked, with 0 flagged. Because round 2 still produced changes, the main pass re-read each edited sentence whole against its section (§§ 33-1361, 33-1363, 33-1364, 33-1367, 33-1368, 33-1313, 33-1104, 33-1314, 33-1370 and 33-1318(J), and FEDERAL: 34 U.S.C. § 12491) before delivery.

The round 2 checker could not reproduce the exact printed counts of AZG-M-021 and AZG-M-029 from their prose descriptions. The exact patterns are in `batteries.jsonl`, and the script re-run reproduces them, apart from the later-loaded units.

**Edited after the last check (for Claude Code to read against the statutes at sync):**
- `barred-person-covenant-ne` (AZ note)
- `edu-alt-housing-az`
- `edu-confirmed-absences-habitability-az`
- `edu-dv-deposit-timing-az`
- `edu-habitability-materiality-az`
- `edu-homestead-waiver-az`
- `edu-landlord-lien-az`
- `edu-no-agreed-notice-method-rule-az`
- `edu-no-tenant-rights-statement-az`
- `edu-repair-notice-az`
- `edu-utility-disclosure-attachment-az`
- `edu-utility-interruption-submeter-az`
- `edu-utility-transfer-az`
- `edu-written-notice-required-az`
- `pest-cooperation-pr` (AZ note)

## §6 Findings on existing rows

### `early-termination-ks`: proposed `early-termination-az` override (item 7; pending Taylor's answer)

Fields (the 17 columns):

| Column | Value |
|---|---|
| id | `early-termination-az` |
| group | Default & Termination |
| title | Early Termination |
| states | AZ |
| is_active | TRUE |
| supersedes | early-termination-ks |
| rule_type | REQUIRED |
| content_type | LEASE_CLAUSE |
| verification_status | VERIFIED |
| effective_from | the sync date |
| last_checked | the sync date |
| choice_group | blank |
| is_default | blank |
| topic_key | early-termination |
| lease_clause_basis | SERVES_LANDLORD |

**bodyText:** "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay Landlord, by the termination date, an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. If Tenant gives that notice, pays the fee and delivers possession of the property by the termination date, Tenant owes no Rent for any period after the termination date. If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by Arizona law, including Landlord's duty under A.R.S. 33-1370 to make reasonable efforts to re-rent the property at a fair rental and Landlord's claim for actual damages under A.R.S. 33-1373. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or other periodic tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act; as a victim of domestic violence or sexual assault, or as a law enforcement officer protected by an injunction against harassment, under A.R.S. 33-1318 and 33-1318.01; due to the property becoming uninhabitable through no fault of Tenant, including fire or casualty damage under A.R.S. 33-1366; or any other termination right or limitation provided by applicable law."

**notes:** "AZ: section-open (corpus STATUTES.TXT, from azleg.gov section pages dated 09/09/26; no 2024-2026 act amends a section of A.R.S. §§ 33-1301 to 33-1381, battery AZG-CUR-001). Replaces early-termination-ks for AZ (gaps pass 2026-11, item 7). No statute caps or bars a dwelling early-termination fee; battery AZG-M-030 found none. The only liquidated-damages statute is for property management agreements: 'Provide for reasonable liquidated damages or cancellation fees for early termination of the agreement.' (A.R.S. § 32-2173). Mitigation: 'If the tenant abandons the dwelling unit, the landlord shall make reasonable efforts to rent the dwelling unit at a fair rental.' (A.R.S. § 33-1370(C)). After termination, 'a separate claim for actual damages for breach of the rental agreement' (A.R.S. § 33-1373). Unconscionability: § 33-1312. The greater-of fee (30% of remaining Rent) could exceed any forecast of loss on a long Term, so the flat one-month fee with release matches NV, TX and NJ. Liquidated-damages case law was not searched. Periodic tenancies: § 33-1375(A)-(B). DV and officer termination: §§ 33-1318, 33-1318.01 (no early termination penalties or fees). Fire: § 33-1366."

**Delta changes if adopted:** add the row, and drop AZ from `early-termination-ks` states with the note "AZ: moved to early-termination-az". That is a change to an existing row, so Claude Code makes it at the sync.

### `hoa-compliance`: proposed AZ note addition (item 5; not a conflict)
"AZ: Give Tenant a copy of the association rules at signing. A rule binds the tenant through the lease only if the tenant has notice when signing, and a later rule only after 30 days' notice without a substantial modification (A.R.S. § 33-1342(A)(6), (B), applied by analogy; no statute says whether association rules are landlord 'rules or regulations', case law not searched)."

### `no-alterations`: proposed AZ note addition (from helper B, portable-solar)
"A.R.S. § 33-439(A) may void a lease term that effectively prohibits a tenant's solar energy device; the carve-out covers it (see edu-portable-solar-az)." No clause text change.

### `smoking-policy`: Smoke-Free Arizona Act duties
These are now stated in `edu-smoke-drift-waiver-az` (signs and ashtray removal in enclosed apartment common areas, § 36-601.01). No separate row is needed.
- (from `smoke-drift-waiver`) Proposed row (statute places a duty no AZ row states): Smoke-Free Arizona Act signs and ashtrays in apartment common areas. Now stated in edu-smoke-drift-waiver-az (topic smoke-drift-waiver); no separate row needed unless Claude Code wants it under smoking-policy.
- (from `ev-charging-requirements`) edu-no-ev-charging-right-az (topic ev-charging): the row's notes list the hits of an earlier azleg phrase search and do not mention A.R.S. § 40-213 ('Notwithstanding any other law, services engaged by companies to charge batteries for electric vehicles does not qualify electric charging providers as public service corporations.' (A.R.S. § 40-213(A))), which the phrase search missed. The body ("Arizona statutes do not give a residential tenant a right to install an electric vehicle charger at a rental and do not require a landlord to allow one.") stays correct (battery AZG-A-044). Proposed fix: add to notes "Charging-provider status and fees: A.R.S. § 40-213; see edu-ev-charging-requirements-az." No body change.
- (from `frozen-standard-incorporation`) edu-landlord-maintenance-az notes still say "§9-1303 NOT READ (fetch returned 404 on the path tried; L.5 dependency)" although its later experience-screen note says § 9-1303 was read section-open and the body cites it. § 9-1303 is now read whole in the corpus (dated 09/08/26). Proposed fix: delete the "NOT READ" parenthesis from the first note segment.
- (from `maintenance-duty-shift`) maintenance-allocation-az (LEASE_CLAUSE, tenant-repair-agreement): bodyText puts a bracket right beside a builder variable, "{{tenant_maintained_items}} [check each that applies: ...]" and "{{maintenance_consideration}} [state the consideration Tenant receives, e.g. a Monthly Rent reduction of $__]", which the library's drafting rule forbids (never put a bracket beside a variable). Proposed fix: move the checklist and the consideration instruction into the opening bracketed use instruction (e.g. "[Optional. ... In the builder, choose the tasks for {{tenant_maintained_items}} from: lawn and landscaping care ...; state the consideration in {{maintenance_consideration}}, e.g. a Monthly Rent reduction.]") and leave the two variables bare in the text. Substance matches A.R.S. § 33-1324(C)-(D) ('specified repairs, maintenance tasks', 'separate writing signed by the parties and supported by adequate consideration').
- (from `portable-solar`) no-alterations (AZ note): the carve-out list names A.R.S. §§ 33-1363, 33-1318(E) and 41-1491.19(E)(1); A.R.S. § 33-439(A) ('Any covenant, restriction or condition contained in any deed, contract, security agreement or other instrument affecting the transfer or sale of, or any interest in, real property which effectively prohibits the installation or use of a solar energy device ... is void and unenforceable') may also be an installation the law entitles a tenant to make; proposed addition to the AZ note: "A.R.S. § 33-439(A) may void a lease term that effectively prohibits a tenant's solar energy device; the carve-out covers it (see edu-portable-solar-az)." No clause text change needed.
- (from `service-animal-denial-penalty`) Finding on edu-assistance-animals-az: it says "Arizona's service-animal rules on permitted questions, fees and a $250 civil penalty for misrepresenting an animal apply to public places, not to rental housing." The statute defines "Public place" as 'any office or place of business or recreation to which the general public is invited' (A.R.S. § 11-1024(M)(4)), which can include a leasing office. Proposed fix: add "A leasing office or other area open to the public may be a public place, where those rules and the class 2 misdemeanor in A.R.S. § 11-1024(J) apply."
- (from `rent-escalation`) Finding on rent-escalation-la (now tagged AZ): its index example reads "Consumer Price Index for All Urban Consumers (CPI-U), South Region", which does not cover Arizona. Proposed fix: make the example region-neutral (for example "the CPI-U for the region that includes the property") so the row reads correctly in every tagged state; no statute is involved.
- (from `tenant-right-to-organize`) edu-retaliation-az: the row says the remedy is "the ouster remedy (greater of two months' rent or twice actual damages)", but A.R.S. § 33-1367 allows 'an amount not more than two months' periodic rent or twice the actual damages sustained by him, whichever is greater.' The figure is a ceiling, and the remedy also includes recovering possession or terminating. Proposed fix: "the tenant may recover possession or end the lease and recover up to two months' rent or twice actual damages, whichever is greater, and has a defense to eviction."

## §7 Findings for other states

- **`barred-person-covenant-ne`** is tagged in other states. Its shared sentence "Tenant is responsible for compliance by every person Tenant admits" carries no condition. Arizona limits a tenant's responsibility for guests in A.R.S. § 33-1368(F), and other states tagged on the clause may have a similar limit. Recommend checking each tagged state, or adding to the clause text, centrally, "to the extent applicable law makes a tenant responsible for the acts of guests". Arizona handles it in its AZ note instead, because this pass may not edit shared text.
- **`pest-cooperation-pr`:** the same guest point applies to its fault-based cost limb in other tagged states.
- (from `construction-liens`) no-liens-ar (shared, 11 states): the limb "will pay Landlord's reasonable costs caused by it" was not tagged for AZ because of A.R.S. § 33-1315(A)(3) (no indemnity for landlord liability 'arising under law' or 'the costs connected therewith'); states with a URLTA-style indemnity bar may want the same look (NE note already flags attorney fees only).
- (from `government-fee-reimbursement`) government-fee-reimbursement-ky (tagged KY, AR, MS, KS, NE, TX, NJ) excludes fines, penalties, construction fees and emergency response fees but not inspection or reinspection fees charged because of a code violation or the landlord's failure to correct one. Where a state bars lease indemnity of the landlord's statutory liabilities (as A.R.S. § 33-1315(A)(3) does in Arizona), each tagged state may want that exclusion checked; not researched for those states.

## Proposed SOP changes

- **Rule 19 (proximity patterns):** a NEAR pattern with three parts returns 0 hits, or wrong hits, without any error. Both the main pass and all helpers hit this (AZG-M-024, AZG-B-052/055/060/064, AZG-A-080). Proposal:
  - the battery tool refuses a NEAR with more than two parts;
  - the brief tells writers to use AND for three-way tests.
- **Rule 19 and rule 80 (re-runs after the unit set grows):** sections read later (federal excerpts and out-of-corpus A.R.S. sections) joined the "all" scope after earlier batteries ran. A script re-run then showed 56 higher counts, and the checkers had to reconcile each one. Proposal:
  - each battery records the unit-set size and a list hash when it runs;
  - the re-run tool reports any difference made only of later-added units as "scope growth", not "mismatch";
  - a row prints its count "when run".
- **Rule 80 (fault-bar wording):** the "no remedy if the tenant or a guest caused it" shorthand appeared in five rows and survived round 1. Round 1 had used one of those rows as its model. Proposal:
  - the check brief names the statute-level qualifiers (here, "deliberate or negligent" and the three remedies the bar actually reaches);
  - the sweep greps for the shorthand before round 1 ends.
- **Out-of-corpus statutes (rule 12):** helpers twice marked a row NEEDS_REVIEW, and once Absent, where the answer sat in a title held as headings only (§§ 43-1072, 25-214). The main pass then read the section on azleg.gov and reversed it. Proposal: the brief tells helpers to queue an out-of-corpus A.R.S. section for the main pass to fetch, as they already do for federal sections, before writing an absence or NEEDS_REVIEW row on it.
- **Usage:** a weekly usage limit stopped both helpers mid-batch. The resumed agents also died silently overnight. Proposal: check helper liveness by file timestamps at each resume, and relaunch fresh rather than resume a stopped agent.

## Proposed topic questions

- **lease-term-limitation:** add the question "If the property is community property, must both spouses sign a lease of a given length?" Arizona requires both spouses to join in any lease of one year or more (A.R.S. § 25-214(C)(1)). Other community-property states may have similar rules.
- **property-tax-rent-disclosure:** add the question "Must the landlord, on request, give a statement of the share of rent attributable to property tax for a state tax credit?" (A.R.S. § 43-1072(C)).
- **tenant-records / tenant-confidential-information:** add the question "Does the state's data-breach notice law reach a landlord holding applicants' identification and financial data?" (A.R.S. §§ 18-551, 18-552).


## Gaps-pass sync review (Claude Code, 2026-11-05)

Merged with `merge-delta.py --base e258994`: 252 new rows and 20 shared rows tagged (272, matching the log's count), nothing refused. All 250 missing topics are answered. With the override below, Arizona has 396 active rows: 394 VERIFIED, 2 NEEDS_REVIEW.

**Edited after the last round.** All 15 rows the log lists were read against the corpus (STATUTES.TXT, azleg.gov pages dated 09/08/26 to 09/09/26). Each holds, and none was changed: `edu-alt-housing-az` (§ 33-1364(A), (F)-(H), including the 25% excess cap and the one-period limit for deliberate failure), `edu-confirmed-absences-habitability-az` and `edu-habitability-materiality-az` (§§ 33-1324, 33-1361, 33-1363's $300 or half-month threshold, 33-1364), `edu-dv-deposit-timing-az` (§§ 33-1318, 33-1321(D), 14 days excluding weekends and holidays), `edu-homestead-waiver-az` and `edu-landlord-lien-az` (§§ 33-1101's $400,000, 33-1123's $15,000, 33-1132, 33-1372), `edu-no-agreed-notice-method-rule-az` (§ 33-1313's five-day mailing rule), `edu-no-tenant-rights-statement-az` (§ 33-1322(B); the summary duty in § 33-1432(G) is the mobile-home act's, as the row says), `edu-repair-notice-az`, `edu-written-notice-required-az`, the three utility rows (§§ 33-1364(C), 33-1367, 33-1368(D)) and the AZ notes on `barred-person-covenant-ne` and `pest-cooperation-pr` (§§ 33-1314(A), 33-1319(B)(2), 33-1368(F), 13-1501(2), each quote found).

**Taylor's answers (2026-11-05).** All 12 questions in §4 were answered as recommended. On question 8, Taylor approved offering `government-fee-reimbursement-az` on condition that Claude Code read its support. § 33-1315(A)(3) bars a term indemnifying the landlord for "any liability of the landlord arising under law" or "the costs connected therewith"; an ordinance fee owed by the landlord reads, on the text, as such a liability, and "Rent" (§ 33-1310(12)) doesn't clearly take in a reimbursement. The row is therefore NEEDS_REVIEW and stays optional. Questions 6 (renter's insurance, pending Title 20) and 12 (organizing and the § 33-1381(B) presumption) are holding positions to revisit. Question 3's federal arbitration question is cross-state and is queued in the backlog.

**§6 findings applied** (each quote re-read in the corpus first): `early-termination-az` added (flat one-month fee with release from later Rent; §§ 33-1370(C), 33-1373, 33-1312, 32-2173; the §§ 33-1318.01 and 33-1366 references checked), and AZ untagged from `early-termination-ks` with an "Untagged" note (New Jersey's missing note from its 2026-10-31 sync added at the same time); AZ notes on `hoa-compliance` (§ 33-1342(A)(6), (B)) and `no-alterations` (§ 33-439(A)); `edu-no-ev-charging-right-az` notes now cite § 40-213; the stale "§9-1303 NOT READ" parenthesis removed from `edu-landlord-maintenance-az`; `maintenance-allocation-az` now keeps its two builder variables bare, with the task list and consideration instruction moved into the opening bracket; `edu-assistance-animals-az` adds the leasing-office point (§ 11-1024(M)(4), (J)); `rent-escalation-la`'s CPI example is now region-neutral; `edu-retaliation-az` states § 33-1367's remedy as a ceiling with possession or termination. `smoking-policy` needed no change.

**§7 findings for other states** are queued in `docs/backlog.md`: the guest-responsibility qualifier on `barred-person-covenant-ne` and `pest-cooperation-pr`, the indemnity look at `no-liens-ar`, and the code-violation inspection fee exclusion on `government-fee-reimbursement-ky`.

**Topic questions and SOP.** Two of the log's three proposed topic questions were added to `topic-questions.csv` (`lease-term-limitation`, `property-tax-rent-disclosure`); the data-breach question is already there from Massachusetts. `lease-clause-topics.md` was regenerated. The 5 proposed SOP changes were adopted as SOP 1.96 (rules 12, 19, 27, 80). Citations: 273 rows were added to `lease-clause-citations-AZ.csv`, 270 CITED from the log's §2 table or the row's AZ notes, 2 CONFIRMED_ABSENT, and `early-termination-az`.
