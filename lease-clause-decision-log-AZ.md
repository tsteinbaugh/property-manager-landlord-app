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
