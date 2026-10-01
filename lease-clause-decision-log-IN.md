# Indiana — lease-clause decision log (state #26)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: Ind. Code art. 32-31 read whole from iga.in.gov, all 14 chapters (1, 2, 2.9, 3, 4, 5, 6, 7, 8, 8.5, 9, 10, 11, 12; 131 sections), saved and hash-matched; section index diffed against the IN rows, every uncited section listed with a reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: CRM Properties' Indiana Residential Lease Form (Indianapolis property manager; PDF created 3/30/2019), mapped provision by provision) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 72 scenarios, Claude-generated on the AZ §18.1 / MO §16 model plus Indiana-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole 2026 Indiana Code (37 title files, 93,246 sections, load proved against the site's title index) and the Indiana Constitution loaded in the built-in browser; 126 batteries, control terms 0 hits, absence patterns tested against known positives; relied-on hits read whole and saved) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `IN` tag and an `IN:` note.

**Date:** 2026-09-30 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole code and Constitution loaded into the browser gave full-text proof of absence and cross-chapter search directly (rule 9).
**Kickoff vs SOP:** no conflict noticed. Rows use the kickoff's citation format (`Ind. Code § 32-31-3-12(a)`, `Ind. Code ch. 32-31-3`, `Ind. Code art. 32-31`, `P.L. 157-2025`, `Ind. Small Claims Rule 12(C)`), with the full prefix on every citation in `bodyText` and `notes` (programmatic check, §8). This log abbreviates to '§ 32-31-3-12'.
**Scope:** Indiana state law only. Indianapolis, Bloomington and other local ordinances (registration, inspection, nuisance, towing, fire codes) are flagged, not resolved (rule 3); state law preempts local regulation of rents, screening, deposits, applications, lease terms, disclosures, the parties' rights, landlord fees and retaliation, and (from July 1, 2026) local bans on renting homes (§ 32-31-1-20, § 32-31-8.5-6, § 36-1-20-3.6). Deprioritized and named: mobile home communities (Ind. Code art. 16-41-27 beyond § 16-41-27-29), agricultural tenancies and crop liens, commercial leases, public housing authorities.
**Input CSV:** `lease-clauses.csv`, **2,018 rows, 17 columns, CRLF, 1,895 active (495 lease clauses, 1,400 education)**; active counts per state match the kickoff exactly (AL 126, AZ 107, CA 157, CO 117, FL 108, GA 104, ID 121, IL 148, KS 129, MN 141, MO 149, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 116, SC 121, SD 99, TN 144, TX 137, UT 122, VA 149, WY 107; rule 23). No IN rows existed (rule 25). Nothing was in the outputs folder at the start; nothing to delete (rule 8).
**Output CSV:** `lease-clauses-IN-delta.csv`, **150 rows, 17 columns, CRLF**: 52 existing rows with `IN` added to `states`, an `IN:` note appended and `last_checked` 2026-09-30, and 98 new IN rows. **IN 150 active: 71 lease clauses (52 tagged + 19 new), 79 education; all VERIFIED.** Merged with the master: 2,116 rows, 1,993 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, each file hash-matched to the browser text (`sources/registry.tsv`):** Ind. Code art. 32-31 (14 chapters, 131 sections); outside the article, Ind. Code ch. 22-9-7, ch. 22-11-18, ch. 32-21-6, ch. 32-30-8, ch. 36-1-20, ch. 26-2-7 and the sections in `ic-misc-A` to `ic-misc-H` and `ic-fair-housing` (fair housing, civil rights definitions, dishonored checks, water/sewer billing, municipal utilities, address confidentiality, prejudgment possession, small claims jurisdiction, towing, foreign-adversary land, statute of frauds, consumer sales act (excerpts of §§ 24-5-0.5-2 and -4), legal interest, Guard and dependent SCRA rules, telecom access, lead-safe work, meth remediation, military-installation definitions, sales tax on lodging, utility shutoffs, HOA child care). **Court rules:** Ind. Small Claims Rules 1-16 read whole from rules.incourts.gov and saved. **Session laws:** P.L. 154-2025 and P.L. 157-2025 in full; effective-date clauses of P.L. 128-2025, 191-2025, 157-2026, 28-2026, 83-2026, 131-2026, 152-2026 and 145-2026 (general revisory) from the Acts PDFs (`session-laws-excerpts.txt`). **Read in context only (labelled so in the rows):** the battery hits named in §17. |
| Step B — tag first | **Done.** 52 existing rows tagged IN (§2.1): the shared generic clauses lawful as written, the ks-oh-ca / ks-oh / ks-ne / ks variants, and two other states' rows whose text fits Indiana (`holdover-ca`, `tenant-forward-proceedings-ca`). 4 bases not tagged, with an IN variant instead (§2.2). Every single-state clause screened (§2.3). No shared text edited. |
| Step E — new IN rows | 19 lease clauses (8 optional under rule 54) and 79 education rows; 21 rows carry a CONFIRMED ABSENT search record, 18 of them pure absence rows (`edu-no-*`) (§3). |
| Instruction 24 family | `security-deposit-return-in` (REQUIRED; 45 days after occupancy ends; itemized list with the estimated repair cost of each item; balance by check or money order to the mailing address the tenant gives in writing; § 32-31-3-12, § 32-31-3-14). |
| Step D screens | All run (§19). Hits: rule 40 (§ 32-31-1-21 'clearly disclose'; § 8-1-2-1.2(m) font rule, handled by a separate signed page); rule 43 (`default-by-tenant` keeps written notice, deliberately giving up the § 32-31-1-8(5) no-notice route for rent-in-advance leases); rule 48 (§ 32-31-5-5(b) property-hold agreement must be separate; not offered); rule 50 (ten 'unless otherwise agreed' / 'as provided in the rental agreement' choices, each made on purpose); rule 52 (no statute, case law unread: variants used); rule 53 (base `returned-payments` ceiling-only wording; base `security-deposit-use` broader than the closed list; base `pet-policy` self-limiting removal). Constitution: nothing reaches leases (battery 60). |
| Optional clauses (rule 54) | 8 offered (holdover rate, casualty termination, tenant-caused damage, criminal activity, tenant's representative on death or incapacity, rule changes, government-fee reimbursement, mid-term rent increase); 11 not offered, with reasons (§6.1). |
| Questions to Taylor (rule 76) | Four asked and answered in one round, with one follow-up exchange and one added request (§6.2): no notice-waiver clause; offer a rules-amendment clause; offer a government-fee clause; offer a mid-term market-rent clause (after explanation; final text with a tenant exit, no frequency limit and no cap) linked to an education row. |
| Proof of absence | 21 rows with a CONFIRMED ABSENT search record (battery, hit count, known-positive test), 18 of them pure absence rows; every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered or Not applicable (§18). Six batteries failed or were found too narrow when their known positives were run after drafting; each was rerun and the rows corrected (§1.3). |
| Independent check | A separate agent checked all 150 rows against the saved sources: 0 conflicts, 3 wrong, 13 imprecise, 6 unsupported and 2 mixed findings (24), all fixed; the same agent re-verified, two residual points were fixed (§13). |
| Currency | Current through the 2026 Regular Session: the 2026 compilation prints 2026 acts in history lines and shows future-dated versions separately. No 2026 act amends Ind. Code art. 32-31. No special session. §1.2. |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes:** iga.in.gov (Indiana General Assembly), 2026 Indiana Code. The site serves each title as a whole-title HTML file (`/ic/2026/Title_N.html`) and a JSON index (`Title_N.json`); section anchors match section numbers; each section prints its history line ('As added by … Amended by …'), and where a section has a future-dated version the site prints both, each with a note ('This version of section effective until 7-1-2027 … effective 7-1-2027'), parsed as `-b` versions. The shell cannot reach the site (proxy 403); the built-in browser could. Text was whitespace-normalized, hashed with SHA-256 in the browser, transcribed to `sources/` with the Write tool and re-hashed with lines trimmed (the Write tool strips trailing spaces); every file matched (`sources/registry.tsv`).
- **Constitution:** the Indiana Constitution (as amended through 2024) PDF, parsed into 194 entries in the same corpus.
- **Session laws:** the Acts PDFs on iga.in.gov, extracted with pdf.js (4.0.379 from cdnjs) in the browser; acts relied on saved in `session-laws-excerpts.txt` (pdf.js drops strike-through styling, so deleted words appear inline and are labelled).
- **Court rules:** Indiana Small Claims Rules 1-16 from rules.incourts.gov, read whole and saved (`ind-small-claims-rules.txt`); no pending amendment to them found. Trial Rules not read beyond Ind. Trial Rule 4.1 as cited by § 32-31-6-8.
- **Administrative rules:** 170 Ind. Admin. Code 4-5 (electric submetering) and 170 Ind. Admin. Code 4-1-16 (utility disconnection), the fire prevention commission's rules under Ind. Code ch. 22-11-16, and the meth remediation rules under § 16-19-3.1-4: cited or referred to, not read (rule 21).
- **Real lease:** CRM Properties' 'Indiana Residential Lease Form', PDF at crmproperties.net, text extracted and saved (`lease/crm-indiana-residential-lease-2019.txt`), hash-matched.
- **Citation format:** the kickoff's; log references written 'IN log §N'.

### 1.2 Currency (rule 16)
- **Compilation currency:** the site prints no currency statement on its title pages or in the whole-title files (both checked); the 2026 edition prints 2026 acts in its history lines (for example P.L. 157-2026, P.L. 28-2026, P.L. 53-2026, P.L. 81-2026, P.L. 115-2026, P.L. 36-2026) and prints future-dated versions separately with their dates (§ 22-9.5-5-5 effective 7-1-2027 under P.L. 152-2026; § 24-5-0.5-3 effective 7-1-2026 under P.L. 145-2026). Where a 2026 act's own effective-date clause was not read, the site's single-version printing was taken as current (rule 16, last sentence). Logged as an open item (§7).
- **2026 acts and Article 32-31:** no 2026 act amends Ind. Code art. 32-31 (the article's history lines end in 2025). No special session met in 2025 or 2026 that this pass found.
- **Acts behind sections relied on (effective dates read in the act):** P.L. 154-2025 (§ 32-31-4-5: sale after 45 days, cut from 90; effective July 1, 2025); P.L. 157-2025 (§§ 32-31-6-3, -6, -7, -7.1, -9, -10: crime and false-application emergency orders; July 1, 2025; compiled text matches the act); P.L. 128-2025 (§§ 32-31-11-1, -3, -4 sealing; July 1, 2025); P.L. 191-2025 (Ind. Code ch. 32-31-12 squatters; July 1, 2025); P.L. 157-2026, SEC.229 (§ 36-1-20-3.6; July 1, 2026); P.L. 28-2026, SEC.35 (§ 22-11-18-6; July 1, 2026); P.L. 83-2026 (§§ 22-9-1-2, 22-9-1-3; July 1, 2026); P.L. 131-2026 (Ind. Code ch. 32-22-3.5 foreign ownership; July 1, 2026); P.L. 152-2026, SEC.344 (§ 22-9.5-5-5 agency rename; July 1, 2027).
- **General revisory act:** P.L. 145-2026 touches § 22-9-1-3 among the sections relied on (corrected and amended effective July 1, 2026; already compiled).
- **Bulk lag check:** the whole-title files and the section pages agree on the sections compared (§ 32-31-6-7.1 as added by P.L. 157-2025; § 36-1-20-3.6 as added by P.L. 157-2026); no lag.
- **Real-lease probe:** the 2019 CRM lease cites IC 24-4.5-7-202 for a $25 check fee; battery 92 shows Ind. Code ch. 24-4.5-7 (small loans) was repealed and revised into Ind. Code art. 37-3 in 2026 (§ 37-3-1-0.3; 'Pre-2026 Revision Citation' lines). A renumbering signal, not a landlord rule; the governing check-fee rule is § 26-1-3.1-502.5.

### 1.3 Corpus and method (rule 19)
- **Loaded:** all 37 title files, sequentially, into the corpus tab (one browser tab never used for anything else after an early navigation wiped it once; the corpus was rebuilt and the other pages were read in a second tab). **93,246 statute entries against 93,247 index entries**: the one-entry gap is § 15-12-5-12, listed twice in the index. Plus the Constitution: 194 entries.
- **Engine:** JavaScript regular expressions over each section's normalized text, headings excluded, first match per section. Control terms: 0 hits (batteries 1, 2, 109). Calibration: 'security deposit' 34 sections including Ind. Code ch. 32-31-3 (battery 3); Indiana's number style 'forty-five (45) days' confirmed (battery 4) and used in synthetic positives.
- **Known positives:** each absence pattern was tested against a statute-style synthetic sentence. **Failures and late tests, all fixed:** the formatting batteries 115 and 116 failed their tests and were rerun as 118 and 119; battery 112 (renter's insurance) failed on a curly apostrophe and was rerun as 113. A second round of tests, run after the first drafting pass, found batteries 28 (firearms) and 75 (sublet consent) blind to the reverse word order and batteries 50 (pet deposits), 55 (rent withholding) and 65 (casualty) too narrow for a statute's likely wording, and battery 98 (foreclosure) blind to 'lease … foreclosure'; each was rerun with both orders and the statute's verbs (batteries 121-126, all positives passed, no new law found), and the rows that had said 'known-positive passed' for 50, 55 and 65 now cite the reruns (Proposed SOP changes 1-2).
- **Boundary:** statutes, the Constitution and the small claims rules only. Administrative rules, case law, local codes and the adopted building and fire codes were not searched or read, and nothing is claimed about them.
- **Saved:** batteries 1-126 (`batteries-IN-001-059.tsv`, `-060-091.tsv`, `-093-113.tsv`, `-114-120.tsv`, `-121-126.tsv`; battery 92 and the 112 discard are recorded in their files), every section relied on, the real lease, the session-law excerpts, the registry.

### 1.4 Section-open vs recall (rule 15)
Every row was drafted with the saved primary text open; the recall subset is empty. Sections read only in context are labelled so. **Case law is not relied on anywhere:** the penalty doctrine for fees and holdover rates, waiver by accepting rent, exculpatory clauses, what notice is 'reasonable' for entry, whether cleaning is 'actual damages', whether a holdover without consent is a tenant at sufferance, whether a lease ends on a tenant's death, whether § 32-31-5-4 allows unilateral changes, enforcement of unilateral rent and no-cure terms, and unconscionability under § 24-5-0.5-10 are each flagged as unread.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged IN as written (52)
`acceptable-payment-methods`, `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `assistance-animal-accommodation`, `common-area-use`, `default-by-tenant`, `due-at-signing`, `early-termination-ks`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance`, `landlords-access`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `possession-delay`, `rent-payment`, `rental-application-accuracy`, `residential-use-only`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `surrender-end-of-term-ks-ne`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`.

Every tagged row carries an `IN:` note naming the controlling Indiana section and ending 'Read section-open 2026-09-30 from iga.in.gov (IN log §1). s5a.1: states-only change, no propagation owed.' The ones that matter:
- **`default-by-tenant`.** § 32-31-1-6 lets a landlord terminate for nonpayment on not less than 10 days' notice 'unless (1) the parties otherwise agreed; or (2) the tenant pays the rent in full'; § 32-31-1-8(5) needs no notice where the lease requires rent in advance and it is unpaid. The clause still requires written notice and the statutory cure time, so it gives up the § 32-31-1-8(5) route; kept on purpose, consistent with Taylor's no-waiver answer (rule 43; §6.2). Statutory-duty enforcement needs notice and a reasonable time to remedy (§ 32-31-7-7); emergency possessory orders (§ 32-31-6-7.1) fit the clause's no-cure exception.
- **`rent-payment`.** 'In advance' is what triggers § 32-31-1-8(5); noted on the row.
- **`early-termination-ks`** instead of the base: the base's separate 10-day cure would promise more than Indiana requires; the ks text defers to the default clause. A protected individual's exit owes no early-termination fees (§ 32-31-9-12(d)).
- **`holdover-ca`** instead of the base: Indiana has no statutory holdover measure (battery 34), so the base's 'maximum amount permitted by applicable law' points at nothing; `holdover-ca` (actual damages) fits, with the optional `holdover-rate-in`.
- **`keys`, `no-alterations`.** Preserve the protected tenant's lock change (§§ 32-31-9-9 to 32-31-9-11) and disability modifications (§ 22-9.5-5-5(c)(1)).
- **`landlords-access`.** Indiana requires 'reasonable written or oral notice' and reasonable times (§ 32-31-5-6(g)); the 24-hour floor is a lease figure.
- **`landlord-maintenance`.** § 32-31-8-5 duties cannot be waived (§ 32-31-8-4); the improper-use exception allocates cost and waives nothing.
- **`smoking-policy`.** No medical or adult-use marijuana law and nothing in the Constitution (battery 29 run over both), so the base vaping ban stands (contrast MO).
- **The ks-oh-ca / ks-oh variants.** No Indiana statute voids exculpatory terms (battery 31); case law unread, so the variants are used (rule 52). The CRM lease uses a sweeping exculpation clause (§15), a lead about practice that the library does not follow.
- **`electronic-signatures`, `notices`.** UETA lists no notice exclusion (§ 26-2-8-103; rule 45); notices to quit follow § 32-31-1-9.
- **`due-at-signing`.** Prepaid rent beyond the first period is a security deposit (§ 32-31-3-9(b)(1); `edu-deposit-last-month-in`).

### 2.2 Not tagged — Indiana variant or IN row instead (4 bases, plus the variant choices)

| Base | Instead | Why the base fails in Indiana |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-in` | Instruction 24; §§ 32-31-3-12, 32-31-3-14 |
| `security-deposit-use` | `security-deposit-use-in` | 'Remedy a Tenant default under this Lease' is broader than the closed list in § 32-31-3-13 ('may be used only for' four purposes) |
| `returned-payments` | `returned-payments-in` | Ceiling-only wording (rule 53); § 26-1-3.1-502.5 fixes $20 plus the bank's actual charge |
| `pet-policy` | `pet-policy-in` | Removing a pet 'without liability … to the extent applicable law permits' hides a § 32-31-5-5(a) conflict (no taking, removing or disposing of tenant property to enforce the lease) (rule 53); a refundable pet deposit is a security deposit (§ 32-31-3-9(b)(3)) |
| `holdover` | `holdover-ca` (tagged) | 'Maximum permitted' with no statutory measure (rule 53) |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) + `abandoned-property-in` | 'Disposed of at Tenant's cost' is broader than § 32-31-4-2, and a lease may not define abandonment differently (§ 32-31-4-2(c)) |
| `early-termination` | `early-termination-ks` (tagged) | Separate 10-day cure (rule 43) |
| `tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided` | the ks-oh-ca / ks-oh variants (tagged) | 'Not liable' sentences; rule 52 |

**Generic-coverage check (programmatic):** every generic lease clause is tagged IN or superseded by an IN-tagged row, except these, each deliberate: `ev-charging-shared-area-co` and `ev-charging-end-of-tenancy-co` (Colorado's EV statute; Indiana has none, battery 43), `extended-absence-notice-ks` (URLTA absence notice; no Indiana statute; `abandoned-property-in` covers abandonment), and `default-by-tenant-ks-ne`, `late-fee-ne`, `surrender-end-of-term-mn-nd`, `acceptable-payment-methods-nj`, `possession-delay-ca` (the base or another variant is tagged and fits Indiana).

### 2.3 Other states' specific rows screened, not tagged
All active single-state lease clauses were listed by `topic_key` and every plausible analogue read in full. Beyond `holdover-ca` and `tenant-forward-proceedings-ca`, none applies to Indiana as written, because each names its own state's statute. What IN took instead:
- **Deposits.** `security-deposit-return-mo` / `-use-mo` became the IN variants. Nonrefundable-deposit rows have no Indiana basis (any returnable amount is a deposit; a nonreturnable fee is not). `deposit-carpet-cleaning-mo` / `deposit-cost-schedule-il` not copied (no Indiana pre-set charge rule).
- **Opt-in rows.** `holdover-rate-ga` became `holdover-rate-in`; `casualty-termination-mo` became `casualty-termination-in`; `tenant-caused-damage-tn` became `tenant-caused-damage-in`; `criminal-activity-mo` became `criminal-activity-in` (tied to § 32-31-6-7.1); `emergency-contact-va`, `authorized-person-contact-az` and `deceased-tenant-contact-tx` led to `tenant-representative-in` (§ 32-31-1-23(c)(2)); `rent-escalation-ga` led to the broader `midterm-rent-increase-in` (Taylor). `notice-to-quit-waiver-pa`, `homestead-waiver-va`, `exemption-waiver-al`, `landlord-lien-tx`, `household-goods-lien-tn`, `notice-service-fee-*`, `collection-fee-*`, `unpaid-*-interest-*`, `crime-free-addendum-az`, `drug-free-housing-addendum-il`, `smoke-drift-waiver-ut`, `dv-termination-fee-mo`, `cannabis-cultivation-*` and the `tenant-repair-agreement-*` rows have no Indiana counterpart or were not offered (§6.1).
- **Disclosures.** Owner-identity rows became `landlord-disclosure-in` (§ 32-31-3-18); `flood-disclosure-*` became `flood-disclosure-in` (§ 32-31-1-21); `military-air-zone-disclosure-va` became `military-installation-disclosure-in` (§ 32-31-1-21.1); `smoke-detectors-id` led to `smoke-detector-acknowledgment-in` (§ 32-31-5-7); `utility-billing-*` / `water-submeter-disclosure-ca` led to `water-sewer-billing-disclosure-in` (§ 8-1-2-1.2). `meth-disclosure-*` not copied (no Indiana duty; `edu-no-meth-disclosure-in`).
- **Other.** `periodic-tenancy-notice-mo` became `periodic-tenancy-notice-in`; `abandoned-property-mo` became `abandoned-property-in`; `electronic-notice-*` not copied (`edu-notice-service-in`); `move-in-inventory-*` not copied (no Indiana statute).

## 3. New IN rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type`, `content_type`, `lease_clause_basis` or any field other than `states`, `notes` and `last_checked` changed (programmatic check, §8).

### 3.2 New IN lease clauses (19)
| Row | topic_key | rule_type | Basis | Rests on | Opt-in? |
|---|---|---|---|---|---|
| `security-deposit-use-in` | security-deposit-use | REQUIRED/PROHIBITED | CONSTRAINED_TERM | § 32-31-3-13, § 32-31-3-12(a), § 32-31-3-9, § 32-31-3-17 | — |
| `security-deposit-return-in` | security-deposit-return | REQUIRED | SERVES_LANDLORD | § 32-31-3-12, § 32-31-3-14, § 32-31-3-15, § 32-31-3-16 | — |
| `returned-payments-in` | returned-payments | RECOMMENDED | CONSTRAINED_TERM \| SERVES_LANDLORD | § 26-1-3.1-502.5(a) | — |
| `pet-policy-in` | pet-policy | RECOMMENDED | SERVES_LANDLORD | § 32-31-5-5(a), § 32-31-3-9(b)(3), § 22-9-7-13 | — |
| `abandoned-property-in` | abandoned-property | RECOMMENDED | SERVES_LANDLORD | §§ 32-31-4-1 to 32-31-4-5, § 32-31-5-5, § 32-31-5-6 | — |
| `landlord-disclosure-in` | owner-identity-disclosure | REQUIRED | REQUIRED_DISCLOSURE: § 32-31-3-18(a) | § 32-31-3-18 | — |
| `flood-disclosure-in` | flood-disclosure | CONDITIONAL | REQUIRED_DISCLOSURE: § 32-31-1-21(b) | § 32-31-1-21 | — (mandatory when the condition is met) |
| `military-installation-disclosure-in` | military-air-zone-disclosure | CONDITIONAL | REQUIRED_DISCLOSURE: § 32-31-1-21.1(b) | § 32-31-1-21.1, §§ 36-7-30.2-4, -6, -15 | — (mandatory when the condition is met) |
| `smoke-detector-acknowledgment-in` | alarm-duties | REQUIRED | REQUIRED_DISCLOSURE: § 32-31-5-7(a) \| SERVES_LANDLORD | § 32-31-5-7, § 32-31-7-5(6), § 22-11-18-3.5, § 22-11-18-5.5 | — |
| `water-sewer-billing-disclosure-in` | utility-submetering-disclosure | CONDITIONAL | REQUIRED_DISCLOSURE: § 8-1-2-1.2(l)(3), (m) | § 8-1-2-1.2(k)-(m) | — (mandatory when the landlord bills separately) |
| `periodic-tenancy-notice-in` | termination-notice | RECOMMENDED | SERVES_LANDLORD | §§ 32-31-1-1 to 32-31-1-4, § 32-31-1-8, § 32-31-1-9 | — |
| `holdover-rate-in` | holdover-rate | CONDITIONAL | CONSTRAINED_TERM | § 32-31-1-2, § 32-31-1-8(4); battery 34 | Yes (rule 54) |
| `casualty-termination-in` | casualty-termination | CONDITIONAL | SERVES_LANDLORD | §§ 32-31-8-4, 32-31-8-5; battery 121 | Yes (rule 54) |
| `tenant-caused-damage-in` | tenant-caused-damage | CONDITIONAL | SERVES_LANDLORD | § 32-31-7-5(4), § 32-31-7-7, § 32-31-6-7 | Yes (rule 54) |
| `criminal-activity-in` | criminal-activity | CONDITIONAL | SERVES_LANDLORD | § 32-31-6-3(a)(3), § 32-31-6-7.1, § 32-31-9-8, § 32-30-8-11 | Yes (rule 54) |
| `tenant-representative-in` | tenant-death | CONDITIONAL | SERVES_LANDLORD | § 32-31-1-23 | Yes (rule 54) |
| `rules-amendment-in` | rules-regulations | CONDITIONAL | SERVES_LANDLORD | § 32-31-7-5(5), § 32-31-5-4 | Yes (Taylor) |
| `government-fee-reimbursement-in` | government-fee-reimbursement (new key) | CONDITIONAL | CONSTRAINED_TERM | § 36-1-20-2 | Yes (Taylor) |
| `midterm-rent-increase-in` | rent-escalation | CONDITIONAL | SERVES_LANDLORD | § 32-31-8.5-5(b)(2), § 32-31-5-4 | Yes (Taylor) |

### 3.3 New IN education rows (79)
- **Rent & payment (16):** `edu-no-late-fee-cap-in`, `edu-no-application-fee-rule-in`, `edu-local-preemption-in`, `edu-rental-registration-inspection-in`, `edu-rent-increase-notice-in`, `edu-modification-notice-in`, `edu-midterm-rent-increase-in`, `edu-retaliation-in`, `edu-dishonored-check-remedies-in`, `edu-legal-interest-in`, `edu-no-rent-receipt-rule-in`, `edu-rent-tax-in`, `edu-no-acceptance-waiver-statute-in`, `edu-fees-as-rent-in`, `edu-tenant-screening-in`, and (Notices & General) `edu-sale-or-management-change-in`.
- **Security deposit (8):** `edu-security-deposit-rules-in`, `edu-no-deposit-cap-in`, `edu-no-deposit-interest-in`, `edu-no-deposit-holding-rule-in`, `edu-deposit-last-month-in`, `edu-deposit-on-sale-in`, `edu-no-move-in-inspection-rule-in`, `edu-pet-deposit-in`.
- **Tenant and landlord responsibilities (14):** `edu-tenant-duties-in`, `edu-occupancy-standard-in`, `edu-municipal-utility-charges-in`, `edu-landlord-duties-in`, `edu-tenant-repair-remedies-in`, `edu-alarm-duties-in`, `edu-entry-in`, `edu-disability-accommodation-in`, `edu-emotional-support-animals-in`, `edu-esa-misrepresentation-in`, `edu-guide-dogs-in`, `edu-lead-safe-work-in`, `edu-telecom-access-in`, `edu-no-ev-charging-rule-in`.
- **Default, termination and eviction (19):** `edu-self-help-eviction-in`, `edu-nonpayment-notice-in`, `edu-notice-to-quit-in`, `edu-eviction-process-in`, `edu-emergency-possessory-orders-in`, `edu-eviction-sealing-in`, `edu-post-eviction-property-in`, `edu-dv-protections-in`, `edu-dv-lock-change-in`, `edu-squatter-removal-in`, `edu-no-just-cause-in`, `edu-tenant-death-in`, `edu-no-holdover-statute-in`, `edu-casualty-in`, `edu-tenant-caused-damage-in`, `edu-servicemember-in`, `edu-no-mitigation-statute-in`, `edu-drug-nuisance-in`, `edu-landlord-lien-in`.
- **Compliance, disclosures and general (22):** `edu-prohibited-lease-terms-in`, `edu-consumer-protection-in`, `edu-attorney-fees-in`, `edu-lease-recording-in`, `edu-scope-in`, `edu-fair-housing-in`, `edu-source-of-income-in`, `edu-immigration-status-in`, `edu-towing-in`, `edu-psychologically-affected-in`, `edu-no-meth-disclosure-in`, `edu-no-radon-disclosure-in`, `edu-no-mold-disclosure-in`, `edu-no-bed-bug-rule-in`, `edu-emergency-call-penalties-in`, `edu-address-confidentiality-in`, `edu-foreign-adversary-in`, `edu-owner-disclosure-in`, `edu-no-lease-copy-rule-in`, `edu-no-foreclosure-tenant-rule-in`, `edu-notice-service-in`, `edu-rules-and-regulations-in`.

Each education row's topic key is in the §18.1 table. Rule types: REQUIRED for statutory duties stated as rules the landlord must follow (deposit rules, landlord duties, alarms, lead-safe work, nonpayment notice, DV, tenant death, owner disclosure), PROHIBITED for bans (retaliation, self-help, disability, guide dogs, landlord lien, prohibited terms, fair housing, address confidentiality, telecom), RECOMMENDED otherwise.

## 4. Layout and placement (rule 40)

**Code-wide typography search (batteries 114-120, run after the first drafting pass and before delivery; the drafted rows were re-screened against the hits):** 'bold', 'underline', 'conspicuous', capitals, type and point size, 'font', 'clearly disclose', 'separate writing/document', 'substantially the following form', 'following form', 'form of notice' and initialing, each near lease, tenant, landlord, tenancy or dwelling-unit terms, every pattern tested against a synthetic positive (two first patterns failed and were rerun). **Two residential form rules:** § 32-31-1-21 ('the landlord shall clearly disclose in a landlord-tenant rental agreement') and § 8-1-2-1.2(m)(1) (water/sewer disclosure 'printed using a font that is not smaller than the largest font used in any other part of the document in which the disclosure is included'). No first-page, first-clause, capitals, initialing or separate-document rule for a lease term otherwise. **No competing-placement question for Taylor (rule 40).**

| Rule | Requirement | Where it lives |
|---|---|---|
| § 32-31-3-18(a) | Indiana-resident manager and agent names and addresses, in writing, at or before commencement | `landlord-disclosure-in` (REQUIRED) |
| § 32-31-5-7(a) | Tenant's written acknowledgment of a functional smoke detector at delivery | `smoke-detector-acknowledgment-in` (REQUIRED; builder collects it at move-in) |
| § 32-31-1-21 | Flood plain disclosure 'clearly' in the rental agreement | `flood-disclosure-in` (CONDITIONAL; builder: capitals and bold heading) |
| § 32-31-1-21.1(b) | Military installation disclosure in the lease, statutory words | `military-installation-disclosure-in` (CONDITIONAL) |
| § 8-1-2-1.2(l)(3), (m) | Water/sewer billing disclosure in the lease, first bill or a separate signed writing; font no smaller than the document's largest; prescribed IURC statement | `water-sewer-billing-disclosure-in` (CONDITIONAL; builder default: separate signed page, because in the lease the rule would reach the title type) |
| § 32-31-3-14 | Itemized damage list with the estimated cost of each item, mailed within 45 days with the balance | `security-deposit-return-in` |
| §§ 32-31-1-5, 32-31-1-7 | Form notices that 'may be used' (year-to-year, nonpayment) | `edu-notice-to-quit-in`, `edu-nonpayment-notice-in` |
| § 32-31-5-5(b) | A property-hold agreement must be in a writing separate from the rental agreement | Not offered (rule 48; §6.1) |
| § 32-31-9-12(c) | DV termination notice: order copy and, for DV or sexual assault, a dated safety plan | `edu-dv-protections-in` |
| § 9-22-1-15(b) | Abandoned-vehicle tag contents | `edu-towing-in` |
| § 24-14-4-2 | Tow-away zone signs 5-7 feet high with contact and permitted-parker information | `edu-towing-in` |
| 40 CFR 745.113 | Federal lead warning statement | `lead-based-paint` (tagged) |

**Omission sanctions that forfeit money:**
- No itemized damage list in time: agreement that no damages are due, full deposit returned, plus the amount withheld and attorney's fees (§§ 32-31-3-12(b), 32-31-3-15, 32-31-3-16).
- No manager/agent disclosure: the person who should have disclosed becomes the landlord's agent, and the tenant recovers discovery expenses (§ 32-31-3-18(c)-(d)).
- Smoke detector missing at delivery or a hard-wired unit unfixed seven days after certified notice: Class B infraction (§ 22-11-18-5.5).
- Willful violation of the tenant-death or incapacity duties: actual damages (§ 32-31-1-23(g)).
- Lock change not made in time: the landlord reimburses the tenant's cost (§ 32-31-9-11(b)).
- Wrongful squatter affidavit: civil action against the affiant (§ 32-31-12-8).
- (Tenant side) bad checks: 18% interest, collection costs, treble after certified notice (Ind. Code ch. 26-2-7); ESA misrepresentation: Class A infraction (§ 22-9-7-12).

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged IN.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| Stipulated holdover rate | No statutory holdover measure (battery 34); § 32-31-1-2 | **Offered** (`holdover-rate-in`, CONDITIONAL); standing GA rule; add-on to `holdover-ca`. Decided by Claude |
| Landlord or tenant termination after a casualty | No casualty statute (battery 121; art. 32-31 read whole) | **Offered** (`casualty-termination-in`, CONDITIONAL); standing GA decision; landlord duties (§ 32-31-8-5) not waived. Decided by Claude |
| Tenant-caused damage (always asked) | § 32-31-7-5(4) tenant duty; § 32-31-7-7 action after notice; no casualty or abatement statute to carve around (batteries 121, 122) | **Offered** (`tenant-caused-damage-in`, CONDITIONAL) with `edu-tenant-caused-damage-in`. Decided by Claude |
| Criminal-activity clause | § 32-31-6-7.1 (P.L. 157-2025: emergency possession within 7 days for a crime affecting health and safety); § 32-30-8-11 drug nuisance; § 32-31-9-8 victim protection | **Offered** (`criminal-activity-in`, CONDITIONAL), using the statute's crime wording, with a victim carve-out; no-cure enforcement outside the statutory tracks is case law, unread. Decided by Claude |
| Tenant's representative named in the lease | § 32-31-1-23(c)(2) ('A person designated, in writing, by the tenant in a written lease'); immunity for compliance (f) | **Offered** (`tenant-representative-in`, CONDITIONAL); a later separate designation outranks it ((c)(1)). Decided by Claude |
| Lease-provided rule changes | § 32-31-7-5(5) ('amended rules and regulations as provided in the rental agreement') | **Offered — Taylor, 2026-09-30** (`rules-amendment-in`, CONDITIONAL; 30 days' notice; no rent or term change through rules) |
| Reimbursement of political-subdivision fees | § 36-1-20-2 (owner may require reimbursement; construction fees excluded) | **Offered — Taylor, 2026-09-30** (`government-fee-reimbursement-in`, CONDITIONAL; fines and penalties excluded; new topic key) |
| Mid-term rent increase to market | § 32-31-8.5-5(b)(2)(B) ('if provided for in the rental agreement, during the term'); § 32-31-5-4 | **Offered — Taylor, 2026-09-30** (`midterm-rent-increase-in`, CONDITIONAL; market wording, 30 days, tenant may end the lease instead; no frequency limit, no cap) with linked `edu-midterm-rent-increase-in` |
| Shortened or waived nonpayment notice | § 32-31-1-6 ('unless … the parties otherwise agreed') | **Not offered — Taylor, 2026-09-30**; recorded in `edu-nonpayment-notice-in` only |
| Last-period rent paid from the deposit | § 32-31-3-13(3), § 32-31-3-12(a) | **Built into `security-deposit-use-in`** as a written-agreement option (default: no application); no separate clause. Decided by Claude |
| Motor-vehicle lien as security | § 32-31-3-13.5 (may accept, may not require; must be filed and treated as a deposit) | **Not offered:** a pre-printed form term risks reading as a requirement, which the statute bars, and enforcing it needs a filed lien. Decided by Claude |
| Holding tendered property in exchange for forbearance | § 32-31-5-5(b) (a writing separate from the rental agreement) | **Not offered:** no lease clause can be the separate writing (rule 48). Decided by Claude |
| Shorter notice for other lease changes | § 32-31-5-4 ('Unless otherwise provided by a written rental agreement') | **Not offered:** the library's change clauses use the statutory 30 days; a shorter general change notice would undercut both. Decided by Claude |
| Interest on unpaid amounts at a contract rate | § 24-4.6-1-102 (8% when no rate is agreed) | **Not offered:** the legal rate applies without a clause; agreed-rate limits not read (`edu-legal-interest-in`). Decided by Claude |
| Jury waiver | No statute (battery 33); small claims filing waives the plaintiff's jury (§ 33-28-3-7) | **Not offered:** litigation term with no statutory support; case law unread |
| Waiver of execution exemptions | No statute authorizes one (batteries 61, 71); § 32-31-4-3(c) voids waiver of the exempt-property release | **Not offered** |
| Contractual lien on tenant property | § 32-31-5-5(a) bars taking or withholding property to enforce the lease | **Not offered** (`edu-landlord-lien-in`) |
| Tenant-performed landlord duties | § 32-31-8-4 (waiver of the landlord-duty chapter void) | **Not offered;** tenant-maintenance, landscaping-irrigation and snow-removal tagged |
| DV early-termination fee | § 32-31-9-12(d) (no rent or fees due only because of the early termination) | **Barred; not offered** |
| Notice-service or collection fee | No statute | **Not offered:** penalty doctrine unread; default-by-tenant recovers reasonable costs. Decided by Claude |

### 6.2 Questions asked of Taylor (rule 76)
One round of four questions in the chat on 2026-09-30, each opened with a plain sentence and an example, with a recommendation and unread case law labelled:
1. **Shorten or waive the 10-day nonpayment notice under § 32-31-1-6 ('unless the parties otherwise agreed')?** Recommended: don't offer (matches Missouri; how courts read 'otherwise agreed' is unread). **Taylor: 'Don't offer (Recommended)'.**
2. **Offer an optional clause binding the tenant to rules changed mid-lease (§ 32-31-7-5(5))?** Recommended: offer; a new kind of clause (other states' rows on the topic are education). **Taylor: 'Offer optional (Recommended)'.**
3. **Offer an optional clause passing city or county fees through to tenants (§ 36-1-20-2, construction fees excluded)?** Recommended: offer; a new kind of clause. **Taylor: 'Offer optional (Recommended)'.**
4. **Offer an optional mid-term market-rent increase clause (§ 32-31-8.5-5(b)(2)(B))?** Recommended: don't offer. **Taylor asked why.** Explanation given in the chat: the clause keeps the tenant's fixed-term commitment while removing the fixed price; the safe harbour only says such an increase is not retaliation if the lease provides for it (the permission must come from the lease; § 32-31-5-4 already lets a written lease set its own change procedure); an open-ended market term risks an indefiniteness or unconscionability challenge (case law unread); Georgia's clause passes through itemized costs only. Revised recommendation: offer it with guardrails (once per 12 months, 30 days' notice, optional cap, tenant exit). **Taylor:** the fixed-term point is a norm, not law ('who are we to tell them no'); a once-per-12-months limit is close to pointless on a 12-month lease; a cap, if any, should be a hand-filled bracket rather than a builder variable. Claude then proposed market-rate wording tied to the statute (which caps the increase at market without a number), 30 days, no frequency limit, an optional bracketed cap and the tenant exit. **Taylor: 'Drop the bracketed cap too'** (keep the tenant exit). **Then Taylor asked that the clause be linked to an education row explaining the discussion:** `edu-midterm-rent-increase-in`, same topic key `rent-escalation`, drafted text shown to Taylor in the chat before it was built. Point (4) of that row records the leasing-impact point as information, not a rule.

### 6.3 Other drafting decisions made by Claude (recorded, not asked)
- **The deposit-return clause runs from the end of occupancy**, the earlier of the two statutory triggers (§ 32-31-3-14 vs § 32-31-3-12(a)), so it satisfies both.
- **Smoke detector repair promise of seven days**, the shorter of seven working days (§ 22-11-18-3.5(e)(2)) and the seven days that trigger the infraction (§ 22-11-18-5.5(2)).
- **The water/sewer disclosure defaults to a separate signed page**, the vehicle § 8-1-2-1.2(l)(3)(E) allows, because the font rule inside the lease would reach the lease's title type (builder, §10).
- **`abandoned-property-in` uses the statutory abandonment test word for word** (§ 32-31-4-2(c) bars a different definition) and adds only an optional courtesy notice.
- **A refundable pet deposit is treated as part of the security deposit** (§ 32-31-3-9(b)(3)), the opposite of Missouri.
- **Fee and deposit figures stay landlord figures** (rule 55): the returned-check bracket states the $20-plus-bank-charge limit; no deposit cap exists.
- **New topic key `government-fee-reimbursement`** (rule 58): the nearest key, `governmental-fines`, is a Texas ban on passing fines.

## 7. Open items (none blocking)

| Item | Boundary / what would close it |
|---|---|
| Case law | Penalty doctrine (late fees, holdover rate); waiver by accepting rent; exculpatory clauses; 'reasonable' entry notice; cleaning as 'actual damages'; holdover tenant at sufferance; lease survival on a tenant's death; whether § 32-31-5-4 permits unilateral changes; enforceability of unilateral rent and no-cure terms; unconscionability under § 24-5-0.5-10. None read. |
| Currency statement | iga.in.gov prints none on its title pages or title files; currency rests on history lines, version notes and act effective clauses (§1.2). The effective clauses of P.L. 36-2026, 53-2026, 81-2026 and 115-2026 were not read (sections printed as single current versions). |
| Not read beyond context or excerpt | § 24-5-0.5-2 and -4 (excerpts only; Attorney General enforcement not read); Ind. Code art. 26-2-8 beyond § 26-2-8-103; Ind. Code ch. 22-9-6 beyond § 22-9-6-5; Ind. Code ch. 22-11-16 beyond § 22-11-16-3; Ind. Code ch. 36-7-30.3 (military impact districts); Ind. Code ch. 8-1-32.6 definitions; Ind. Code ch. 1-1-16 beyond §§ 6, 10, 10.2, 11 (including § 1-1-16-9 and the 'military installation' definition); the 'target housing' definition used by § 16-41-39.8-13; § 34-24-3-1; § 32-30-6-7; § 36-9-23-25; § 7.1-5-12-4; Ind. Code ch. 32-34-1.5 (unclaimed property) beyond § 32-34-1.5-50; Ind. Code art. 16-41-27 beyond § 16-41-27-29; agreed-rate interest limits; Ind. Code art. 32-28 (mechanic's liens); Ind. Code ch. 36-7-9 (unsafe buildings). |
| Administrative rules (rule 21) | 170 Ind. Admin. Code 4-5 and 4-1-16 (IURC); fire prevention commission rules (Ind. Code ch. 22-11-16); meth remediation rules (§ 16-19-3.1-4). |
| Federal (rule 21) | SCRA; PTFA; Fair Housing Act (including advertising and restoration conditions); FCRA; lead (42 U.S.C. § 4852d, 40 CFR 745.113) and renovation rules; OTARD. Cited, not read. |
| Local ordinances | Indianapolis, Bloomington and others (registration and inspection programs, especially any created before July 1, 1984 and exempt from the state limits; nuisance; towing; fire codes; unit rules adopted before 2026 and exempt from § 36-1-20-3.6 until 1/1/2028): flagged, not resolved (rule 3). |
| Place-based facts | Which parcels lie within three miles of NSA Crane, Lake Glendora or Grissom ARB or in an Ind. Code ch. 36-7-30.3 district (military disclosure); flood-elevation status (flood disclosure). Data, not law; builder or landlord input. |

## 8. Integrity checks on the delta
Run by script (`work/check.py`, `work/build.py`) on the final delta; output summarised:
- header identical to the master: True | 17 columns | 150 records + header, every line CRLF, bare LF 0
- duplicate ids in delta: none | new ids colliding with the master: none
- tagged rows with any change other than `states`, `notes` (appended) and `last_checked`: none
- other states' active counts after merge: unchanged | merged 2,116 rows, 1,993 active | IN active 150 (LC 71, EDU 79)
- blank or non-VERIFIED status: none | rule types all valid
- LC missing basis: none | EDU with basis: none | new notes start 'IN: ': all
- topic keys: all in the reference except the new `government-fee-reimbursement`
- supersedes: `security-deposit-use`, `security-deposit-return`, `returned-payments`, `pet-policy` (all exist)
- generic clauses neither tagged nor superseded: the eight deliberate ones in §2.2
- variables used in new rows: `security_deposit`, `pet_deposit`, `pet_rent_amount` (builder) and `holdover_daily_rate` (existing in the library, from `holdover-rate-ga`) | new: none
- citation-prefix issues (§ or 'IC' without 'Ind. Code', in bodyText and IN notes): 0; session laws written 'P.L. 157-2025' per the kickoff
- id pointers in IN notes (`edu-…-in`, `…-in`, '(tagged IN)'): all resolve
- **Citation existence:** all 211 Indiana section numbers, 23 chapters and 5 articles cited in the IN rows and notes exist in the loaded corpus (checked in the browser), except § 24-4.5-7-202, cited deliberately as repealed (the real lease's stale citation).

## 9. Propagation notes (rule 62)
None. No shared row's text, rule type, content type or basis changed; every change to an existing row is the `IN` tag, an appended `IN:` note and `last_checked` (programmatic check, §8).

## 10. Findings for other states or the product (flagged, not fixed)
- **New `{{variables}}`: none.** `holdover-rate-in` reuses `{{holdover_daily_rate}}` (from `holdover-rate-ga`); confirm the builder has it, since it is not on the kickoff's list.
- **Builder rules:** cap a dishonored-check fee at $20 plus the bank's actual charge (§ 26-1-3.1-502.5); cap the water/sewer administrative fee at $4 a month (§ 8-1-2-1.2(l)(4)(B)); no deposit cap for IN.
- **Builder placement:** `water-sewer-billing-disclosure-in` as a separate signed page by default (if inside the lease, its type must be no smaller than the lease's largest type, § 8-1-2-1.2(m)(1)); `smoke-detector-acknowledgment-in` collected at delivery of the unit, not only at signing; `flood-disclosure-in` heading in capitals and bold ('clearly', § 32-31-1-21); `military-installation-disclosure-in` and `flood-disclosure-in` need a landlord yes/no input; `holdover-rate-in` shown only on opt-in and placed after `holdover-ca`.
- **New topic key:** `government-fee-reimbursement` (§ 36-1-20-2); other states may let owners pass local fees through.
- **Statute tensions (legal watch):** § 32-31-9-12(e) entitles a protected tenant to deposit refunds 'Notwithstanding section 13' as if the tenancy expired, while § 32-31-9-13 lets the landlord wait until 45 days after all tenancies end; § 32-31-3-12(a) and § 32-31-3-14 count the 45 days from different events (the clause uses the earlier).
- **Stale cross-references (rule 77):** none found in the sections relied on; the CRM lease's citation to IC 24-4.5-7-202 is stale (now Ind. Code art. 37-3), a lead about that form only.
- **Exemption scope:** the smoke-detector chapter does not apply to a totally sprinkled building (§ 22-11-18-2(b)), but the lease acknowledgment rule (§ 32-31-5-7) has no such exception; the library keeps the acknowledgment REQUIRED.
- **Real-lease drift:** the CRM lease returns the deposit '45 days after expiration of the Term' (the statute runs from the end of occupancy), discloses telephone numbers instead of the addresses § 32-31-3-18 requires, defines abandonment itself (barred by § 32-31-4-2(c)), forbids rekeying (conflicts with §§ 32-31-9-9 to 32-31-9-11), claims landlord-lien remedies (§ 32-31-5-5), exculpates the landlord's failure to repair (§ 32-31-8-4 makes those duties non-waivable), applies partial payments to 'Additional Rent' first in one section and rent first in another, and has no flood or military disclosure. Leads about that form, not about the library.
- **`security-deposit-return`** still has a blank `states` field (the intentional parent); unchanged.

## 11. Deliverables
- `lease-clauses-IN-delta.csv`: 150 rows (52 tagged, 98 new), 17 columns, CRLF.
- `lease-clause-decision-log-IN.md`: this log.
- Working sources (not delivered; kept in the session): `sources/` (Article 32-31 by chapter, outside sections, session laws, small claims rules, batteries, registry), `lease/` (the CRM lease text), `work/` (build and check scripts, Taylor's decisions).

## 12. Kickoff leads — what each turned out to be
1. **Where the law lives.** Confirmed: Ind. Code art. 32-31 (general provisions and notices ch. 1; recording ch. 2; scope ch. 2.9; deposits and manager disclosure ch. 3; tenant property ch. 4; access, lockouts, modification notice and smoke acknowledgment ch. 5; emergency possessory orders ch. 6; tenant duties ch. 7; landlord duties ch. 8; retaliation ch. 8.5; crime victims ch. 9; eviction actions ch. 10; record sealing ch. 11; squatters ch. 12), all read whole. Ejectment and prejudgment possession in Ind. Code ch. 32-30-3; drug nuisances in Ind. Code ch. 32-30-8; small claims jurisdiction in § 33-28-3-4 and the Small Claims Rules (`edu-scope-in`, `edu-eviction-process-in`).
2. **Deposits.** No cap, no interest, no holding rule; closed list of uses (§ 32-31-3-13); 45 days; itemized list with repair estimates; tenant must give a mailing address in writing; missing list = full return plus withheld amount and fees; waiver void; prepaid rent beyond the first period and refundable pet deposits are deposits.
3. **Eviction by tenancy type.** Nonpayment: 10 days unless agreed otherwise or paid, none for unpaid advance rent (§§ 32-31-1-6, 32-31-1-8(5)); other breaches: notice and reasonable time for statutory duties (§ 32-31-7-7); periodic tenancies of three months or less: notice equal to the period; at will: one month written; year to year: three months; fixed term: none (§§ 32-31-1-1 to 32-31-1-4, 32-31-1-8). Emergency possessory orders within three business days, now including crime and false applications (P.L. 157-2025). Sealing: automatic for dismissals and tenant wins; on motion after payment or seven years (P.L. 128-2025). Property left behind: Ind. Code ch. 32-31-4 (45-day sale since P.L. 154-2025). Court rules: Small Claims Rules 2, 4, 12 and 16.
4. **Repairs and remedies.** § 32-31-8-5 duties, non-waivable; tenant suit after notice and reasonable time, with fees; no repair-and-deduct. **Retaliation:** yes, Ind. Code ch. 32-31-8.5 (2020), non-waivable, locally preempted.
5. **Preemption.** Broad (§ 32-31-1-20; § 32-31-8.5-6; § 36-1-20-3.6 from 7/1/2026; § 36-1-3-8.5 on Section 8 mandates); local registration and inspection limited (Ind. Code ch. 36-1-20).
6. **Fair housing.** Race, color, religion, sex, familial status, disability, national origin (Ind. Code art. 22-9.5); the civil rights law adds ancestry and veteran status; exemptions for small single-family owners without brokers or discriminatory ads and owner-occupied buildings of four or fewer families; no source-of-income protection.
7. **Disclosures and safety.** Required: manager and agent (§ 32-31-3-18), smoke detector acknowledgment (§ 32-31-5-7); conditional: flood plain (§ 32-31-1-21), military installation (§ 32-31-1-21.1), water/sewer billing (§ 8-1-2-1.2). No meth, radon, mold or bed-bug disclosure; psychologically affected property need not be disclosed but may not be misrepresented (Ind. Code ch. 32-21-6). Smoke detectors: owner installs and repairs, tenant keeps working and tests; no CO statute. Lead-safe work rules for pre-1960 housing.
8. **Local ordinances.** Flagged, not resolved; most local landlord-tenant regulation is preempted.

## 13. Independent check
A separate agent that had not seen the drafting checked every new IN row (bodyText and notes) and every appended IN note on the 52 tagged rows against the saved sources only (Article 32-31, outside sections, session laws, small claims rules, battery logs, the CRM lease, Taylor's decisions), on 2026-09-30. It read all 98 new rows and all 52 notes and reported 24 findings: **0 conflicts, 3 wrong, 13 imprecise, 6 unsupported, 2 mixed.** All were fixed and the same agent re-verified: 22 fixed outright; 2 residual points then fixed (below). No new problems.
- **Wrong (fixed):** `edu-fair-housing-in` imported the federal 'except the advertising ban' rule (the Indiana exemption reaches all of Ind. Code ch. 22-9.5-5, with discriminatory advertising defeating only the single-family exemption); the `smoking-policy` note's battery description (battery 86 cannot match 'residence'; now cites § 7.1-5-12-5(a)(12)) and its Constitution battery (29, not 60).
- **Unsupported (fixed):** 'a holdover tenant is a tenant at sufferance' (`holdover-rate-in`, `edu-no-holdover-statute-in`; now labelled case law); 'the Attorney General may enforce it' (`edu-consumer-protection-in`; enforcement not read); 'the parties must have agreed to deal electronically' (`edu-notice-service-in`; UETA beyond scope not read); battery 98's known-positive claim (rerun as 126, §1.3); 'sign or water-bed' in the `common-area-use` note; the basis for 'no early-termination fee limit' in the `early-termination-ks` note.
- **Imprecise (fixed):** the dishonored-check remedies (10-day escape only for dishonor, 'liable under other law', which items need certified notice; `edu-dishonored-check-remedies-in`, `returned-payments-in`); legal-interest accrual (§ 24-4.6-1-103(a)-(b)); Guard 'active duty' definition, the documentation condition and the dependents' notice condition (`edu-servicemember-in`); the abandonment carve-out reaches only the lockout and utility rules (`edu-self-help-eviction-in`); the sprinkled-building exemption (`edu-alarm-duties-in`, and a note on `smoke-detector-acknowledgment-in`); the pre-1984 carve-out's reach (`edu-rental-registration-inspection-in`); the ESA out-of-state documentation and 'subject to other law' conditions; 'clear and convincing' for continuances; the missing fifth towing-tag item; a battery description on `casualty-termination-in`; the smoke-detector repair promise now covers any detector; the three cognovit misdemeanors; 'written' (not 'signed') designation in `edu-tenant-death-in`; who issues the meth decontamination certificate.
- **Residual after re-verification (fixed):** 'only residence reference' in the `smoking-policy` note (§ 7.1-5-12-4, a battery hit, not read; now 'its listed exceptions include'); the account-stated limb of § 24-4.6-1-103(b) in `edu-legal-interest-in`.
After the fixes the delta was rebuilt and every §8 check re-run with the same results. Later edits (the session-law citation spacing) were mechanical and re-checked by script.

## 14. Statute walk (gap-discovery source 1)
Ind. Code art. 32-31 was read whole from the saved text: 14 chapters, 131 sections (one repealed, § 32-31-3-1). The section index was then diffed against every citation in the IN rows and notes (programmatic, ranges expanded): **109 of the 130 live sections are cited.** Not cited, with reason:
- §§ 32-31-1-14 to 32-31-1-18 (rents on life estates, recovery by executors and remaindermen, occupants without special contract): estate and title matters; no landlord duty or lease term.
- §§ 32-31-3-2 to 32-31-3-5, 32-31-3-8, 32-31-3-10, 32-31-5-3, 32-31-7-3, 32-31-8-3, 32-31-8.5-3, 32-31-9-4, 32-31-9-5 (definitions): applied through the sections that use them; the 'rent' and 'security deposit' definitions are cited (§§ 32-31-3-6, 32-31-3-9).
- § 32-31-6-4 (petition contents): procedure for the emergency track, inside `edu-emergency-possessory-orders-in`'s chapter read.
- §§ 32-31-10-1, 32-31-11-5, 32-31-12-1 (applicability, court tracking, chapter scope): procedure or scope; no landlord duty beyond those cited.
- § 32-31-10-6 (COVID-19 rental assistance applications, a 2022 duty on IHCDA and subdivisions): spent program; no landlord duty.
- **One level down:** sections cited in part were re-read subdivision by subdivision for the rows that rely on them (§ 32-31-1-23, § 32-31-3-12, § 32-31-3-18, § 32-31-5-6, § 32-31-6-3, § 32-31-8.5-5, § 32-31-9-12); each subdivision is in a row or outside scope (agricultural land in § 32-31-1-2; mobile home community liens in § 32-31-5-5(a)).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** CRM Properties' 'Indiana Residential Lease Form' (Residential Lease Agreement, 12 pages, Indiana-specific: Indiana county and address fields, citations to Ind. Code §§ 32-31-3-18, 32-31-5-7, 32-31-7-5 and 22-11-18-3.5), from an Indianapolis property manager, PDF at https://www.crmproperties.net/files/Indiana%20Residential%20Lease%20Form.pdf (PDF metadata: created 3/30/2019; drafter named in the metadata: Victor M. Grimm, P.C.). Text extracted and saved (`lease/crm-indiana-residential-lease-2019.txt`, hash-matched). **Why it qualifies, and why it is weaker:** it is a property manager's lease (rule 33), Indiana-specific, not a relabelled multi-state template. It is a 2019 edition, before P.L. 157-2025, P.L. 128-2025, P.L. 154-2025, P.L. 191-2025 and the 2023 military disclosure; whether a free current Indiana REALTORS or apartment-association form exists was not established. Not reproduced here; mapped as a lead.

### 15.1 Provision map
| CRM provision | Library answer for IN | Note |
|---|---|---|
| Parties, premises, occupants (children named) | `permitted-occupants` (tagged), `edu-occupancy-standard-in` | — |
| Term; quiet possession; delayed possession extends the start, no landlord liability | `possession-delay` (tagged) | No statute on late delivery |
| Rent in advance on the 1st; prorating; 'Additional Rent' includes all other sums | `rent-payment` (tagged), `edu-fees-as-rent-in` | 'In advance' triggers § 32-31-1-8(5) |
| Late fee plus a daily fee; 18% interest | `late-fee` (tagged), `edu-no-late-fee-cap-in`, `edu-legal-interest-in` | No cap; contract interest not offered (§6.1) |
| $25 dishonored-check fee 'pursuant to IC 24-4.5-7-202'; certified funds after | `returned-payments-in`, `edu-dishonored-check-remedies-in` | Stale citation (battery 92); § 26-1-3.1-502.5 caps at $20 plus bank charge |
| Payment methods listed | `acceptable-payment-methods` (tagged) | — |
| Deposit for 'any obligation' including cleaning; no use for rent; return 45 days after the Term with a forwarding address | `security-deposit-use-in`, `security-deposit-return-in` | Closed list (§ 32-31-3-13); clock runs from the end of occupancy |
| Utilities; unpaid utilities as Additional Rent; service charge | `utilities-responsibility` (tagged), `edu-municipal-utility-charges-in` | — |
| Appliances; furnishings 'AS-IS', tenant repairs furnishings | `appliances-included` (tagged), `edu-landlord-duties-in` | § 32-31-8-5(4)(F) covers inducement appliances, not furnishings |
| Use, guests 10 days, no drugs, nuisance | `residential-use-only`, `guest-policy-day-limit`, `no-disturbance` (tagged), `criminal-activity-in` | — |
| Pets by consent, non-refundable pet fees | `pet-policy-in`, `edu-pet-deposit-in` | Non-refundable fees are not deposits |
| Garage spaces, vehicle rules, no liability for vehicles | `parking-ks-oh-ca`, `parking-vehicle-rules` (tagged), `edu-towing-in` | Rule 52 |
| Surrender in move-in condition; keys | `surrender-end-of-term-ks-ne` (tagged) | § 32-31-7-6 |
| Check-in sheet; taking possession is conclusive proof of good condition | `existing-condition` (tagged), `edu-no-move-in-inspection-rule-in` | § 32-31-8-5(1) delivery duty cannot be waived |
| No subletting; Airbnb choice | `no-sublet-assign` (tagged) | — |
| Tenant maintenance; no added locks, no rekeying | `tenant-maintenance`, `keys` (tagged), `edu-dv-lock-change-in` | No-rekey term conflicts with §§ 32-31-9-9 to 32-31-9-11 |
| Mold acknowledgment and release; tenant pest control after 10 days | `landlord-maintenance` (tagged), `edu-no-mold-disclosure-in` | Health and housing code duties stay with the landlord (§ 32-31-8-5(2)); lead |
| Marijuana ban 'immediate and incurable Default' | `smoking-policy` (tagged), `criminal-activity-in` | No Indiana cannabis law |
| Pool; lawn and snow allocation | `landscaping-irrigation`, `snow-removal` (tagged) | No pool statute (battery 42) |
| Lock-change and lockout service charges | `keys` (tagged) | — |
| Smoke and CO detectors; quotes § 32-31-5-7 and § 32-31-7-5 | `smoke-detector-acknowledgment-in`, `edu-alarm-duties-in` | Confirms the acknowledgment structure |
| Landlord maintenance list; no liability for uninhabitability except non-waivable warranty | `landlord-maintenance` (tagged), `edu-landlord-duties-in` | § 32-31-8-4 |
| Default after [ ] days; notice to quit 'verbally'; 'Landlord's lien remedies' | `default-by-tenant` (tagged), `edu-nonpayment-notice-in`, `edu-landlord-lien-in` | § 32-31-1-9 service; § 32-31-5-5 bars lien remedies |
| Abandonment 'as determined by Landlord'; property 'left on the street', no liability | `abandoned-property-in`, `edu-post-eviction-property-in` | § 32-31-4-2(c) bars a lease definition |
| Payments applied to Rent first (17(E)) and to Additional Rent first (24(L)) | `application-of-payments` (tagged) | Internally inconsistent; no statute |
| Landlord default: 30-day cure | `edu-tenant-repair-remedies-in` | Statute: reasonable time (§ 32-31-8-6) |
| Broad indemnity and exculpation, including the landlord's failure to repair | ks-oh-ca variants (tagged), `edu-prohibited-lease-terms-in` | § 32-31-8-4; rule 52 |
| Renter's insurance naming landlord additional insured | `tenants-property-insurance-ks-oh-ca` (tagged) | No statute (battery 113) |
| Holdover becomes month to month at a stated rent | `holdover-ca` (tagged), `holdover-rate-in` | — |
| Entry on reasonable notice; repair request is consent; signs | `landlords-access` (tagged), `edu-entry-in` | § 32-31-5-6(g) |
| Subordination and attornment to mortgagee | none (standing decision: no subordination boilerplate) | § 32-31-1-11 voids attornment only to a stranger without consent |
| Lead disclosure acknowledgment | `lead-based-paint` (tagged), `edu-lead-safe-work-in` | — |
| Notices by law, personal delivery or certified mail | `notices` (tagged), `edu-notice-service-in` | — |
| Landlord-only attorney fees | `default-by-tenant` (tagged; prevailing party), `edu-attorney-fees-in` | No reciprocity statute |
| County venue | `edu-eviction-process-in` | Ind. Small Claims Rule 12(C): venue cannot be waived |
| Jury waiver | none | Not offered (§6.1) |
| HOA compliance and fines | `hoa-compliance` (tagged) | — |
| Death of a sole tenant: representative may terminate | `tenant-representative-in`, `edu-tenant-death-in` | § 32-31-1-23 duties; the lease's termination right is contractual |
| § 32-31-3-18 disclosure with telephone numbers | `landlord-disclosure-in` | The statute requires addresses |
| No flood or military disclosure | `flood-disclosure-in`, `military-installation-disclosure-in` | Military duty postdates the form |

### 15.2 What it produced
No new topic beyond the statute walk, but it confirmed three structures (the smoke-detector acknowledgment, the deposit's closed list against a broader form term, the § 32-31-3-18 disclosure) and gave the currency probe (§1.2). Ten provisions diverge from Indiana law (§10). No shared row is changed because of the lease (rule 33).

## 16. Landlord-scenario screen (gap-discovery source 3)
72 everyday situations, application to move-out, sale and foreclosure, run against the IN rows; where no row answered, the statutes were searched and any hit read with the section open.

| # | Scenario | Indiana answer (row) |
|---|---|---|
| 1 | Advertising a unit; can I say 'no kids'? | No: familial status (`edu-fair-housing-in`) |
| 2 | Applicant uses a housing voucher | No state protection; local mandates preempted (`edu-source-of-income-in`) |
| 3 | Screening on credit, eviction and criminal history | Allowed; local limits preempted; drug-manufacture convictions excepted (`edu-tenant-screening-in`) |
| 4 | Charging an application fee | No limit (`edu-no-application-fee-rule-in`) |
| 5 | Taking a holding deposit | No statute; may be a security deposit if returnable (§18.2 holding-deposit) |
| 6 | Applicant asks for an emotional support animal | Verification from a treating provider; no fee; addendum allowed (`edu-emotional-support-animals-in`, `assistance-animal-accommodation`) |
| 7 | Applicant lies on the application | Material breach; emergency possessory order (`rental-application-accuracy`, `edu-emergency-possessory-orders-in`) |
| 8 | Applicant has a protective order against an ex | May not refuse solely for that (`edu-dv-protections-in`) |
| 9 | Renting a room in my own home | Fair-housing exemption for owner-occupied four-family buildings (`edu-fair-housing-in`) |
| 10 | How much deposit can I take? | No cap (`edu-no-deposit-cap-in`) |
| 11 | Pet deposit on top | Refundable pet deposit is part of the security deposit (`edu-pet-deposit-in`, `pet-policy-in`) |
| 12 | Where do I keep the deposit? | No holding rule (`edu-no-deposit-holding-rule-in`) |
| 13 | Interest on the deposit? | No (`edu-no-deposit-interest-in`) |
| 14 | First and last month plus deposit | Last month's rent is a deposit (`edu-deposit-last-month-in`) |
| 15 | What must the lease disclose? | Manager and agent; smoke acknowledgment; flood plain and military installation if applicable; water/sewer billing if separate; federal lead (§4) |
| 16 | Former meth lab in the unit | No disclosure duty; no misrepresentation if asked (`edu-no-meth-disclosure-in`, `edu-psychologically-affected-in`) |
| 17 | Radon, mold, bed bugs | No state duty (edu-no-* rows) |
| 18 | Someone died in the unit | Need not disclose; answer truthfully if asked (`edu-psychologically-affected-in`) |
| 19 | Lease signed electronically | Valid (`electronic-signatures`) |
| 20 | Oral lease for two years | Statute of frauds does not apply to leases of three years or less (`edu-lease-recording-in`) |
| 21 | Five-year lease | Record within 45 days (`edu-lease-recording-in`) |
| 22 | Occupancy limit for a family | Two per bedroom presumed reasonable (`edu-occupancy-standard-in`) |
| 23 | Unit not ready on the start date | Lease clause (`possession-delay`) |
| 24 | Move-in checklist required? | No (`edu-no-move-in-inspection-rule-in`) |
| 25 | Rent is late; how much can I charge? | No cap (`late-fee`, `edu-no-late-fee-cap-in`) |
| 26 | Rent check bounces | $20 plus bank charge; ch. 26-2-7 remedies (`returned-payments-in`, `edu-dishonored-check-remedies-in`) |
| 27 | Cash rent receipt? | No duty (`edu-no-rent-receipt-rule-in`) |
| 28 | Partial rent | No acceptance-waiver statute; full payment within the notice defeats termination (`edu-no-acceptance-waiver-statute-in`) |
| 29 | Raising rent mid-lease | Only if the lease provides; optional clause (`midterm-rent-increase-in`, `edu-midterm-rent-increase-in`) |
| 30 | Raising rent on a month-to-month | 30 days' written notice to modify; or end the tenancy (`edu-rent-increase-notice-in`) |
| 31 | City wants to cap rent or ban rentals | Preempted (`edu-local-preemption-in`) |
| 32 | City charges a registration fee | ≤ $5 a year; may pass through (`edu-rental-registration-inspection-in`, `government-fee-reimbursement-in`) |
| 33 | Changing house rules mid-lease | Only as the lease provides (`rules-amendment-in`, `edu-rules-and-regulations-in`) |
| 34 | Interest on unpaid damages | 8% legal rate (`edu-legal-interest-in`) |
| 35 | Sales tax on rent | Only stays under 30 days (`edu-rent-tax-in`) |
| 36 | Entering to make repairs | Reasonable notice, reasonable times (`landlords-access`, `edu-entry-in`) |
| 37 | Tenant refuses entry | May not unreasonably refuse (`edu-entry-in`) |
| 38 | Tenant demands repairs | § 32-31-8-5 duties; suit after notice (`edu-landlord-duties-in`, `edu-tenant-repair-remedies-in`) |
| 39 | Tenant withholds rent for repairs | No withholding statute (`edu-tenant-repair-remedies-in`) |
| 40 | I bill tenants for water | Disclosure, pass-through limits, $4 admin fee (`water-sewer-billing-disclosure-in`) |
| 41 | Tenant's unpaid city water bill | Occupant liable; no lien on tenant-occupied property (`edu-municipal-utility-charges-in`) |
| 42 | Smoke detectors | Install, repair in 7 working days, acknowledgment at delivery (`smoke-detector-acknowledgment-in`, `edu-alarm-duties-in`) |
| 43 | Tenant wants a ramp | Reasonable modification at tenant's cost (`edu-disability-accommodation-in`) |
| 44 | Tenant smokes marijuana | Illegal in Indiana; smoking ban stands (`smoking-policy`) |
| 45 | Tenant keeps a gun | No statute limits lease terms (§18.2 firearms) |
| 46 | Guest moves in | Guest limits; squatter law excludes invitees (`guest-policy-day-limit`, `edu-squatter-removal-in`) |
| 47 | Tenant lists the unit on Airbnb | Lease bar (`no-sublet-assign`) |
| 48 | Towing a car from the lot | 24-hour tag or signs (`edu-towing-in`) |
| 49 | Noise complaints | Lease breach (`no-disturbance`) |
| 50 | Drug dealing in the unit | Emergency order; drug nuisance 72-hour vacate (`criminal-activity-in`, `edu-drug-nuisance-in`) |
| 51 | Tenant assaults a neighbor | Emergency possessory order (`edu-emergency-possessory-orders-in`) |
| 52 | Protected tenant asks for new locks | 48 or 24 hours; tenant reimburses (`edu-dv-lock-change-in`) |
| 53 | Protected tenant wants out | 30 days' notice with order and safety plan; no fees (`edu-dv-protections-in`) |
| 54 | Tenant deployed | Federal SCRA; Guard state duty extended (`edu-servicemember-in`) |
| 55 | Tenant wants out early | Early-termination fee (`early-termination-ks`) |
| 56 | Tenant stops paying | 10-day notice, small claims (`edu-nonpayment-notice-in`, `edu-eviction-process-in`) |
| 57 | Can I change the locks or cut utilities? | No (`edu-self-help-eviction-in`) |
| 58 | Tenant complains to the city, then I raise rent | Retaliation unless market at term end or as the lease provides (`edu-retaliation-in`) |
| 59 | Ending a month-to-month | Notice equal to the period (`periodic-tenancy-notice-in`, `edu-notice-to-quit-in`) |
| 60 | Not renewing a fixed lease | No notice; no just cause (`edu-no-just-cause-in`) |
| 61 | Tenant stays after the lease ends | Actual damages; optional rate (`holdover-ca`, `holdover-rate-in`, `edu-no-holdover-statute-in`) |
| 62 | Tenant vanished owing rent | Abandonment test; no lockout rule for an abandoned unit (`abandoned-property-in`) |
| 63 | Belongings left after moving out | Statutory abandonment test (`abandoned-property-in`) |
| 64 | Belongings left after judgment | Court order, warehouse, 45 days (`edu-post-eviction-property-in`) |
| 65 | Squatters in a vacant rental | Affidavit; police within 48 hours (`edu-squatter-removal-in`) |
| 66 | Sole tenant dies | Notify representative, release property, deposit and unearned rent (`edu-tenant-death-in`, `tenant-representative-in`) |
| 67 | Fire destroys the unit | No statute; lease clause (`edu-casualty-in`, `casualty-termination-in`) |
| 68 | Tenant's candle causes the fire | Tenant liable; lost-rent clause (`tenant-caused-damage-in`) |
| 69 | Deposit return | 45 days, itemized with estimates, mailing address (`security-deposit-return-in`) |
| 70 | Eviction case dismissed after settlement | Must dismiss; records sealed (`edu-eviction-sealing-in`) |
| 71 | Selling the property with tenants | Notice of conveyance; deposit transfer or one-year liability (`edu-deposit-on-sale-in`, `edu-sale-or-management-change-in`) |
| 72 | Bank forecloses | No state rule; federal law not read (`edu-no-foreclosure-tenant-rule-in`) |

Every scenario has an IN row or a recorded §18.2 status. Scenarios 32 and 40 rested on the outside-title search (Ind. Code ch. 36-1-20, § 8-1-2-1.2); scenario 72 produced battery 126.

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole 2026 Indiana Code (93,246 sections) and the Indiana Constitution were loaded in the built-in browser and searched with 126 batteries (`sources/batteries-IN-*.tsv`). Real findings outside Ind. Code art. 32-31, each read whole and saved:
- **Constitution:** nothing reaches leases (battery 60: 2 entries, neither a lease rule; no cannabis provision).
- **Fair housing and civil rights:** Ind. Code art. 22-9.5 (selected), §§ 22-9-1-2, 22-9-1-3 → `edu-fair-housing-in`, `edu-disability-accommodation-in`; § 36-1-3-8.5 → `edu-source-of-income-in`.
- **Animals:** Ind. Code ch. 22-9-7, § 22-9-6-5 → `edu-emotional-support-animals-in`, `edu-esa-misrepresentation-in`, `edu-guide-dogs-in`.
- **Smoke detectors:** Ind. Code ch. 22-11-18 → `smoke-detector-acknowledgment-in`, `edu-alarm-duties-in`; § 22-11-16-3 (apartment emergency signs).
- **Disclosures:** § 8-1-2-1.2 → `water-sewer-billing-disclosure-in`; Ind. Code ch. 32-21-6 → `edu-psychologically-affected-in`; Ind. Code ch. 36-7-30.2 (selected) → `military-installation-disclosure-in`; §§ 16-19-3.1-3, 10-11-2-31.2 → `edu-no-meth-disclosure-in`.
- **Local regulation:** Ind. Code ch. 36-1-20 → `edu-local-preemption-in`, `edu-rental-registration-inspection-in`, `government-fee-reimbursement-in`.
- **Money:** § 26-1-3.1-502.5, Ind. Code ch. 26-2-7 → `returned-payments-in`, `edu-dishonored-check-remedies-in`; §§ 24-4.6-1-102, -103 → `edu-legal-interest-in`; § 6-2.5-4-4 → `edu-rent-tax-in`.
- **Consumer protection and contract:** §§ 24-5-0.5-2 (excerpt), -3, -4 (excerpt), -10 → `edu-consumer-protection-in`; Ind. Code ch. 34-54-3, § 34-54-4-1 → `edu-prohibited-lease-terms-in`; § 32-21-1-1 → `edu-lease-recording-in`; § 26-2-8-103 → `electronic-signatures`, `edu-notice-service-in`.
- **Courts and possession:** §§ 33-28-3-4, 33-28-3-7, 33-34-3-3, 33-34-3-4, Ind. Code ch. 32-30-3 (selected), Small Claims Rules → `edu-eviction-process-in`; Ind. Code ch. 32-30-8 → `edu-drug-nuisance-in`.
- **Utilities:** § 8-1.5-3-8, § 36-9-23-32, § 36-9-25-11.2 → `edu-municipal-utility-charges-in`; § 8-1-2-121 (read; utility rule, no row); § 8-1-32.6-9 → `edu-telecom-access-in`.
- **Towing:** §§ 9-22-1-15, 9-22-1-16, Ind. Code ch. 24-14 (selected) → `edu-towing-in`.
- **Military and foreign ownership:** §§ 10-16-7-23, 10-16-20-1 to -4 → `edu-servicemember-in`; §§ 1-1-16-6, -10, -10.2, -11 → `edu-foreign-adversary-in`.
- **Other:** § 5-26.5-5-2.6 → `edu-address-confidentiality-in`; § 35-44.1-5-4 → `edu-immigration-status-in`; § 16-41-39.8-13 → `edu-lead-safe-work-in`; §§ 32-25.5-3.9-5, -6 (HOA child care, P.L. 53-2026; no row).

**Absence batteries (summary; full patterns, hit lists and positives in the battery files):** late fees 10; application fees 11-12; rent control 13; smoke 15; CO 16, 79; lead 17, 90-91; radon 18; meth 19, 84, 87; mold 20; bed bugs 21, 80; flood 22; towing 23, 69, 85, 88-89; trespass 24; fair housing 25; source of income 63; animals 27, 82; firearms 28/124; marijuana 29; UETA exclusions 30; exculpation 31; confession of judgment 32; jury waiver 33; holdover 34; servicemembers 35, 68, 83; immigration 36; foreign adversary 37; crime-free 38; receipts 39; deposit interest 40; sex offenders 41; pools 42; EV 43; solar 44; flags 45; antennas 46; window guards 47; security devices 48; nonrefundable 49; pet fees 50/123; submeters 51; unclaimed deposits 52, 108; statute of frauds 53; DV 56; condo conversion 57; foreclosure 58, 98, 126; abandonment 59; exemption waivers 61, 71; landlord liens 62; dishonored checks 64; casualty 65/121; automatic renewal 66; legal interest 67; smoking 70, 86; attorney fees 72; unconscionability 73; consumer transaction 74; sublet consent 75/125; deposit cap 76; e-mail notice 77; payment methods 78; locks 81; algorithms 93; lease copy 94; psychologically affected 95; acceptance waiver 96; mitigation 97; utility winter rules 99; plain language 100; translation 101; cameras 102; sprinklers 103; minors 104; HOA 105, 110-111; additional rent 106; lodging tax 107; renter's insurance 112/113; formatting 114-120; repair and deduct 55/122; real-lease probe 92.


## 18. Topic reference canvass (rules 27, 36)

### 18.1 Topics answered by an IN row (133)
| Topic | IN rows |
|---|---|
| abandoned-property | `abandoned-property-in` |
| abandonment-and-mitigation | `edu-no-mitigation-statute-in` |
| acceptable-payment-methods | `acceptable-payment-methods` |
| addendum-precedence | `addendum-precedence` |
| alarm-duties | `smoke-detector-acknowledgment-in`, `edu-alarm-duties-in` |
| alterations | `no-alterations` |
| appliances-included | `appliances-included` |
| application-fees | `edu-no-application-fee-rule-in` |
| application-of-payments | `application-of-payments` |
| assigned-parking-space | `assigned-parking-space` |
| assistance-animal-accommodation | `assistance-animal-accommodation`, `edu-emotional-support-animals-in` |
| attorney-fees | `edu-attorney-fees-in` |
| bed-bug-disclosure | `edu-no-bed-bug-rule-in` |
| casualty-termination | `casualty-termination-in`, `edu-casualty-in` |
| common-area-use | `common-area-use` |
| condition-inspection | `edu-no-move-in-inspection-rule-in` |
| consumer-protection-act | `edu-consumer-protection-in` |
| criminal-activity | `criminal-activity-in` |
| default-by-tenant | `default-by-tenant` |
| deposit-last-month-rent | `edu-deposit-last-month-in` |
| disability-accommodation | `edu-disability-accommodation-in` |
| disturbance | `no-disturbance` |
| due-at-signing | `due-at-signing` |
| dv-confidentiality | `edu-address-confidentiality-in` |
| dv-lease-termination | `edu-dv-protections-in` |
| dv-lockchange | `edu-dv-lock-change-in` |
| early-termination | `early-termination-ks` |
| electronic-signatures | `electronic-signatures` |
| emergency-assistance-right | `edu-emergency-call-penalties-in` |
| entire-agreement | `entire-agreement` |
| ev-charging | `edu-no-ev-charging-rule-in` |
| eviction-process | `edu-eviction-process-in` |
| eviction-record-sealing | `edu-eviction-sealing-in` |
| existing-condition | `existing-condition` |
| expedited-criminal-eviction | `edu-emergency-possessory-orders-in` |
| fair-housing | `edu-fair-housing-in` |
| fees-as-rent | `edu-fees-as-rent-in` |
| fire-safety-grilling | `fire-safety-grilling` |
| flood-disclosure | `flood-disclosure-in` |
| for-cause-eviction | `edu-no-just-cause-in` |
| foreclosure | `edu-no-foreclosure-tenant-rule-in` |
| foreign-ownership | `edu-foreign-adversary-in` |
| governing-law | `governing-law` |
| guest-policy | `guest-policy` |
| guest-policy-day-limit | `guest-policy-day-limit` |
| hoa-compliance | `hoa-compliance` |
| holdover | `holdover-ca`, `edu-no-holdover-statute-in` |
| holdover-rate | `holdover-rate-in` |
| immigration-status | `edu-immigration-status-in` |
| inspection-rights | `inspection-rights` |
| joint-liability | `joint-liability` |
| keys | `keys` |
| landlord-entry | `landlords-access`, `edu-entry-in` |
| landlord-lien | `edu-landlord-lien-in` |
| landlord-maintenance | `landlord-maintenance`, `edu-landlord-duties-in` |
| landscaping-irrigation | `landscaping-irrigation` |
| late-fee | `late-fee`, `edu-no-late-fee-cap-in` |
| lead-based-paint | `lead-based-paint`, `edu-lead-safe-work-in` |
| lease-copy | `edu-no-lease-copy-rule-in` |
| meth-disclosure | `edu-no-meth-disclosure-in` |
| military-air-zone-disclosure | `military-installation-disclosure-in` |
| mold-disclosure | `edu-no-mold-disclosure-in` |
| municipal-utility-lien | `edu-municipal-utility-charges-in` |
| nonpayment-notice | `edu-nonpayment-notice-in` |
| notice-delivery-methods | `edu-notice-service-in` |
| notices | `notices` |
| nuisance | `edu-drug-nuisance-in` |
| owner-identity-disclosure | `landlord-disclosure-in`, `edu-owner-disclosure-in` |
| parking | `parking-ks-oh-ca` |
| parking-vehicle-rules | `parking-vehicle-rules` |
| permitted-occupants | `permitted-occupants`, `edu-occupancy-standard-in` |
| pet-fees | `edu-pet-deposit-in` |
| pet-insurance-requirement | `pet-insurance-requirement` |
| pet-policy | `pet-policy-in` |
| possession-delay | `possession-delay` |
| post-eviction-property | `edu-post-eviction-property-in` |
| prohibited-lease-terms | `edu-prohibited-lease-terms-in` |
| radon-disclosure | `edu-no-radon-disclosure-in` |
| rent-control | `edu-local-preemption-in` |
| rent-escalation | `midterm-rent-increase-in`, `edu-midterm-rent-increase-in` |
| rent-increase-notice | `edu-rent-increase-notice-in` |
| rent-payment | `rent-payment` |
| rent-receipts | `edu-no-rent-receipt-rule-in` |
| rent-tax | `edu-rent-tax-in` |
| rental-application-accuracy | `rental-application-accuracy` |
| rental-inspection | `edu-rental-registration-inspection-in` |
| residential-use-only | `residential-use-only` |
| retaliation | `edu-retaliation-in` |
| returned-payments | `returned-payments-in`, `edu-dishonored-check-remedies-in` |
| rules-regulations | `rules-amendment-in`, `edu-rules-and-regulations-in` |
| sale-or-management-change | `edu-sale-or-management-change-in` |
| scope | `edu-scope-in` |
| security-deposit-cap | `edu-no-deposit-cap-in` |
| security-deposit-holding | `edu-no-deposit-holding-rule-in` |
| security-deposit-interest | `edu-no-deposit-interest-in` |
| security-deposit-on-sale | `edu-deposit-on-sale-in` |
| security-deposit-penalty | `edu-security-deposit-rules-in` |
| security-deposit-return | `security-deposit-return-in` |
| security-deposit-use | `security-deposit-use-in` |
| self-help-eviction | `edu-self-help-eviction-in` |
| service-animal-denial-penalty | `edu-guide-dogs-in` |
| service-animal-misrepresentation | `edu-esa-misrepresentation-in` |
| servicemember-rights | `edu-servicemember-in` |
| services-utilities-provided | `services-utilities-provided-ks-oh` |
| severability | `severability` |
| smoking-policy | `smoking-policy` |
| snow-removal | `snow-removal` |
| source-of-income | `edu-source-of-income-in` |
| statute-of-frauds-lease-term | `edu-lease-recording-in` |
| stigmatized-property | `edu-psychologically-affected-in` |
| storage-space | `storage-space-ks-oh-ca` |
| sublet-assign | `no-sublet-assign` |
| surrender-end-of-term | `surrender-end-of-term-ks-ne` |
| telecom-access | `edu-telecom-access-in` |
| tenant-caused-damage | `tenant-caused-damage-in`, `edu-tenant-caused-damage-in` |
| tenant-death | `tenant-representative-in`, `edu-tenant-death-in` |
| tenant-forward-proceedings | `tenant-forward-proceedings-ca` |
| tenant-maintenance | `tenant-maintenance` |
| tenant-repair-remedies | `edu-tenant-repair-remedies-in` |
| tenant-screening | `edu-tenant-screening-in` |
| tenant-statutory-duties | `edu-tenant-duties-in` |
| tenants-property-insurance | `tenants-property-insurance-ks-oh-ca` |
| term-change-notice | `edu-modification-notice-in` |
| termination-notice | `periodic-tenancy-notice-in`, `edu-notice-to-quit-in` |
| towing | `edu-towing-in` |
| unauthorized-occupant-removal | `edu-squatter-removal-in` |
| unpaid-damages-interest | `edu-legal-interest-in` |
| utilities-paid-by-landlord | `utilities-paid-by-landlord` |
| utilities-responsibility | `utilities-responsibility` |
| utility-payment-evidence | `utility-payment-evidence` |
| utility-service-continuity | `utility-service-continuity` |
| utility-submetering-disclosure | `water-sewer-billing-disclosure-in` |
| waiver-by-acceptance | `edu-no-acceptance-waiver-statute-in` |

### 18.2 Topics with no IN row (status and reason) (172)
| Topic | States with rows | Indiana status |
|---|---|---|
| adverse-proceeding-notice | ND | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (ND); tenant-forward-proceedings-ca tagged. |
| algorithmic-rent-setting | AL,PA,SC,TN,VA | CONFIRMED ABSENT: IN battery 93 (11 sections, none on rent); local rent regulation preempted (Ind. Code § 32-31-1-20(b)); no row (absence recorded here). |
| alt-housing | CA,CO,KS,NE,WY | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; no casualty statute (edu-casualty-in). |
| appliances-excluded | SC | ANSWERED ELSEWHERE: only appliances 'supplied as an inducement' must be maintained (Ind. Code § 32-31-8-5(4)(F)); appliances-included tagged. |
| automatic-renewal | CA,ND | CONFIRMED ABSENT: IN battery 66 (10 sections, none residential; known-positive passed); no library clause renews automatically. |
| balcony-inspection | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| bed-bug-cooperation | CA | CONFIRMED ABSENT: IN batteries 21 and 80 (0 hits); edu-no-bed-bug-rule-in. |
| cannabis | IL,MN,MO,NE,SD,UT | CONFIRMED ABSENT: no medical or adult-use marijuana law and no constitutional provision (IN batteries 29, 60); smoking-policy tagged as written; no row. |
| casualty-and-mitigation-waivable | OH | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (OH); edu-casualty-in, edu-no-mitigation-statute-in. |
| children-occupancy | NV | ANSWERED ELSEWHERE: occupancy standard edu-occupancy-standard-in (Ind. Code § 32-31-8-7 excludes infants under one). |
| cold-weather-vacate-notice | MN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (MN). |
| collection-fee | ID,UT | NOT OFFERED: no collection-fee statute located; default-by-tenant (tagged IN) recovers reasonable costs; penalty doctrine unread (IN log §6.1). |
| condemned-premises-rent-bar | MN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; local unsafe-building law (Ind. Code ch. 36-7-9) not read. |
| confession-of-judgment | MN,PA | ANSWERED ELSEWHERE: Ind. Code ch. 34-54-3 voids pre-accrual cognovit terms (edu-prohibited-lease-terms-in). |
| confirmed-absences-habitability | NE | ANSWERED ELSEWHERE: NE roll-up key; Indiana absences recorded topic by topic. |
| confirmed-absences-misc | NE | ANSWERED ELSEWHERE: NE roll-up key; see the edu-no-* rows. |
| confirmed-absences-outside-title | NE | ANSWERED ELSEWHERE: NE roll-up key; squatter removal edu-squatter-removal-in, cash receipts edu-no-rent-receipt-rule-in, landlord registration edu-rental-registration-inspection-in. |
| construction-liens | FL | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; mechanic's lien law (Ind. Code art. 32-28) not read. |
| conversion-notice | AL,IL,MO,NC,NJ,PA,SC,TN | CONFIRMED ABSENT: IN battery 57 (condominium conversion: 0 hits; known-positive passed); no row. |
| cure-and-eviction-grounds | ID,KS,MO,ND,NE,NV,OH,SD | ANSWERED ELSEWHERE: edu-nonpayment-notice-in, edu-tenant-duties-in (Ind. Code § 32-31-7-7 notice and reasonable time), edu-emergency-possessory-orders-in. |
| defective-drywall-disclosure | VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (VA). |
| deposit-cost-schedule | IL,MO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; Ind. Code ch. 32-31-3 read whole has no pre-set charge rule; whether cleaning is 'actual damages' is case law (security-deposit-use-in). |
| deposit-escheat | AZ,CA,FL,GA,ID,IL,KS,MN,ND,NV,SD,TX | NOT LOCATED: no deposit-specific rule (IN batteries 52 and 108; Ind. Code § 32-34-1.5-50 read in context only); whether an uncashed refund is reportable under Ind. Code ch. 32-34-1.5 not read (IN log §7). |
| deposit-installments | CA,KS,MO,NE,WY | CONFIRMED ABSENT by the whole read of Ind. Code ch. 32-31-3 (no installment rule); no targeted battery. |
| deposit-surrender-notice | TX | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; deposit return answered in security-deposit-return-in. |
| designated-repairer | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| disaster-displaced-guests | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| disaster-duties | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; edu-casualty-in. |
| double-letting | CA,KS,MN,ND | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run. |
| drug-free-housing-addendum | IL | ANSWERED ELSEWHERE: optional criminal-activity-in covers drug activity; IN battery 38 (crime-free: 0 hits). |
| dv-deposit-timing | ND | ANSWERED ELSEWHERE: Ind. Code §§ 32-31-9-12(e), 32-31-9-13 (edu-dv-protections-in; the tension is flagged in IN log §10). |
| dv-eviction-protection | ND,WY | ANSWERED ELSEWHERE: Ind. Code § 32-31-9-8 (edu-dv-protections-in), kept under dv-lease-termination. |
| dv-protection-order-chapter-moved | ND | NOT APPLICABLE (ND renumbering); Indiana's pointer to Ind. Code ch. 34-26-5 (Ind. Code § 32-31-9-7) is current (cited sections exist in the corpus). |
| dv-qualifying-documents | MN,NE | ANSWERED ELSEWHERE: protection or no-contact order plus safety plan (Ind. Code §§ 32-31-9-7, 32-31-9-12(c); edu-dv-protections-in). |
| electric-submetering-disclosure | TX | NOT LOCATED as a lease disclosure: Ind. Code § 8-1-2-36.5 (submetering) read; 170 Ind. Admin. Code 4-5 not read (rule 21). |
| emergency-contact | TX | ANSWERED ELSEWHERE: tenant-representative-in (Ind. Code § 32-31-1-23) and landlord-disclosure-in (Ind. Code § 32-31-3-18). |
| employee-screening | FL | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (FL). |
| environmental-event-termination | CO,KS | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; casualty-termination-in. |
| ev-charging-end-of-tenancy | CO,IL | CONFIRMED ABSENT: IN battery 43; edu-no-ev-charging-rule-in; CO/IL clauses not tagged. |
| ev-charging-requirements | CO,IL | CONFIRMED ABSENT: IN battery 43; edu-no-ev-charging-rule-in. |
| ev-charging-shared-area | CO,IL | CONFIRMED ABSENT: IN battery 43; edu-no-ev-charging-rule-in; CO/IL clause not tagged. |
| eviction-hardship-stay | ND | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; small claims procedure in edu-eviction-process-in. |
| eviction-penalty-clause-ban | CO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; no ban on lease eviction-fee terms found (IN battery 72 attorney fees). |
| eviction-service-party | TN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; landlord-side agent in landlord-disclosure-in. |
| exculpatory-clauses | CA,NE,SD | ANSWERED ELSEWHERE: no statute (IN battery 31); case law unread; recorded in edu-prohibited-lease-terms-in; ks-oh-ca variants tagged (rule 52). |
| expedited-deposit-disposition | VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (VA). |
| extended-absence-notice | AL,KS,NE,TN,VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (URLTA-style rule); extended-absence-notice-ks not tagged; abandonment answered in abandoned-property-in. |
| fee-in-lieu-of-deposit | FL,TX,VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run. |
| fee-transparency | CA,CO,IL,MN,NE,NV,VA,WY | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; no fee-disclosure or all-in pricing rule (IN battery 10; consumer act list read, edu-consumer-protection-in); local fee regulation preempted (Ind. Code § 32-31-1-20(c)(7)). |
| fee-unprovided-service | CO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CO). |
| fire-code-standard | ND | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; local fire codes not read (rule 3). |
| fire-sprinkler-duty | MN | CONFIRMED ABSENT: IN battery 103 (0 hits; known-positive passed). |
| firearms | IL,MO,OH,TN,TX,UT,VA | CONFIRMED ABSENT as a lease rule: IN battery 124 (both word orders, 7 sections; Ind. Code § 35-47-11.1-4 read; none limits a landlord's lease terms; known-positive passed; battery 28 was too narrow). |
| foreclosure-disclosure | AZ,CA,MN,NV | CONFIRMED ABSENT: IN battery 98; edu-no-foreclosure-tenant-rule-in. |
| forfeiture-redemption | CA | ANSWERED ELSEWHERE: paying the rent in full within the notice period defeats termination (Ind. Code § 32-31-1-6(2); edu-nonpayment-notice-in). |
| frozen-standard-incorporation | ND | NOT APPLICABLE: no Indiana statute relied on incorporates a dated code edition (Ind. Code § 22-11-18-3.5 sets its own standard). |
| governmental-fines | TX | ANSWERED ELSEWHERE: local fees (not fines) may be passed through (Ind. Code § 36-1-20-2; government-fee-reimbursement-in); no statute on passing fines located. |
| guarantor-renewal | TX | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (TX). |
| guest-rights | PA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (PA). |
| habitability-materiality | WY | ANSWERED ELSEWHERE: edu-landlord-duties-in and edu-tenant-repair-remedies-in (Ind. Code §§ 32-31-8-5, 32-31-8-6). |
| habitability-modifiable | WY | ANSWERED ELSEWHERE: not modifiable (Ind. Code § 32-31-8-4; edu-landlord-duties-in). |
| habitability-presumption | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| hazardous-contamination-disclosure | MO | NOT LOCATED beyond drug labs (edu-no-meth-disclosure-in); no targeted battery for radioactive contamination. |
| health-district-rental-rules | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| heating | IL,NJ | ANSWERED ELSEWHERE: heating systems must supply sufficient heat at all times if provided (Ind. Code § 32-31-8-5(4)(D); edu-landlord-duties-in). |
| hoa | AZ,FL,ID,IL,UT | PRESENT, not a landlord rule: an HOA may not restrict child care in a single-family residence the provider rents (Ind. Code § 32-25.5-3.9-5, P.L. 53-2026; IN batteries 110, 111); no association leasing-restriction statute located (IN battery 105: 0 hits); no row. |
| holding-deposit | AZ,CA,KS,MN,MO | NOT LOCATED: no pre-lease deposit rule in Ind. Code ch. 32-31-3; whether money taken before the lease is a 'security deposit' (Ind. Code § 32-31-3-9) is case law, not read; no row. |
| homestead-waiver | AL,UT,VA | NOT OFFERED: no statute authorizes a lease waiver of execution exemptions (IN batteries 61 and 71); Ind. Code § 32-31-4-3(c) voids waiver of the exempt-property rules for stored property (IN log §6.1). |
| infirmity-termination | MN,NV,TN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; death or incapacity answered in edu-tenant-death-in (no termination right). |
| inspection-condemnation-disclosure | MN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (MN). |
| inspection-notice-penalty | MN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (MN). |
| jury-waiver | CA | NOT OFFERED: no statute supports a pre-dispute lease jury waiver (IN battery 33: 8 sections); filing on a small claims docket waives the plaintiff's jury (Ind. Code § 33-28-3-7); real lease has a waiver (IN log §15). |
| key-control-policy | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| landlord-breach-remedy | TX | ANSWERED ELSEWHERE: edu-tenant-repair-remedies-in (Ind. Code § 32-31-8-6). |
| landlord-liability-insurance | NJ | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NJ). |
| landlord-registration | AZ,GA,TN,UT | ANSWERED ELSEWHERE: local registration limited to $5 a year (Ind. Code § 36-1-20-5; edu-rental-registration-inspection-in); no state registration. |
| landlord-remedies-termination | KS | ANSWERED ELSEWHERE: edu-eviction-process-in, edu-nonpayment-notice-in. |
| landlord-self-cure | AL,PA,SC,TN,VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (URLTA §4.105 analogue); Ind. Code § 32-31-7-7(c) contemplates the landlord's repair and documentation before suit (edu-tenant-duties-in). |
| law-enforcement-cooperation | TN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; edu-emergency-call-penalties-in. |
| lead-safe-certification | NJ | ANSWERED ELSEWHERE: lead-safe work rules, no certificate in the lease (edu-lead-safe-work-in). |
| lease-completeness | AL,PA,SC,TN,VA | CONFIRMED ABSENT for Indiana leases: no blank-space item in Ind. Code § 24-5-0.5-3(b) (edu-consumer-protection-in); not in Ind. Code art. 32-31. |
| lease-content-requirements | NV | ANSWERED ELSEWHERE: required content is the disclosure rows (required-disclosures entry above). |
| lease-notice-initial-requirement | ND | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (ND). |
| lease-term-limitation | KS | ANSWERED ELSEWHERE: leases over three years must be recorded (edu-lease-recording-in); no term limit. |
| lockout-for-rent-delinquency | TX | NOT OFFERED: lockouts barred (Ind. Code § 32-31-5-6(c); edu-self-help-eviction-in). |
| meter-conservation-charge | SC | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (SC). |
| minor-tenant-filing | IL,MN,OH | CONFIRMED ABSENT: IN battery 104 (0 hits; known-positive passed). |
| nonrefundable-deposit-notice | AZ,ID,UT,WY | ANSWERED ELSEWHERE: an amount not returnable is not a security deposit (Ind. Code § 32-31-3-9); no notice rule (edu-pet-deposit-in). |
| nonrefundable-deposit-separate-notice | WY | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (WY). |
| nonresident-owner-agent | MO,SC,VA | ANSWERED ELSEWHERE: Ind. Code § 32-31-3-18(a) requires an Indiana-resident manager and agent for service (landlord-disclosure-in, edu-owner-disclosure-in). |
| notice-service-fee | ID,UT | NOT OFFERED: no fee statute; Taylor declined a notice waiver and the notice is the statutory nonpayment notice (IN log §6.1). |
| notice-to-quit-waiver | PA | NOT OFFERED (Taylor, 2026-09-30): the 'unless the parties otherwise agreed' wording of Ind. Code § 32-31-1-6 recorded in edu-nonpayment-notice-in only. |
| notice-to-vacate-additional-terms | KS | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (KS). |
| ordnance-demolition-meter-disclosures | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| other-landlord-facilities | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| owner-move-in-reservation | CA | NOT APPLICABLE: no just-cause regime (edu-no-just-cause-in). |
| parking-rules-notice | TX | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (TX); towing in edu-towing-in. |
| part5-nonwaivable | CO | ANSWERED ELSEWHERE: Indiana's non-waiver sections (edu-prohibited-lease-terms-in). |
| periodic-services-entry | SC | ANSWERED ELSEWHERE: entry needs reasonable notice except in an emergency (Ind. Code § 32-31-5-6(f)-(g); edu-entry-in). |
| pest-control-notice | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA); IN batteries 21, 80 (bed bugs). |
| plain-language | AL,MN,PA,TN,VA | CONFIRMED ABSENT for leases: IN battery 100. |
| plain-language-consumer-statement | PA | CONFIRMED ABSENT: IN battery 100 (8 sections, none residential leases; known-positive not run: hits present). |
| pool-safety | AZ,KS,TX | CONFIRMED ABSENT as a landlord duty: IN battery 42 (23 sections: tax, parks, pool retailers; none a landlord rule). |
| portable-solar | VA | NOT LOCATED: IN battery 44 (18 sections: tax, utility net metering; none a tenant right). |
| portfolio-thresholds | IL,OH,VA | ANSWERED ELSEWHERE: the only Indiana size thresholds are fair-housing exemptions (Ind. Code § 22-9.5-3-1; edu-fair-housing-in) and the five-unit 'rental unit community' (Ind. Code § 36-1-20-1.5; edu-rental-registration-inspection-in). |
| possession-bond | TN | ANSWERED ELSEWHERE: prejudgment possession bond (Ind. Code § 32-30-3-6; edu-eviction-process-in); no end-of-term bond. |
| private-well-testing | NJ | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NJ). |
| prohibited-acts-renter | NC,WY | ANSWERED ELSEWHERE: statutory tenant duties (edu-tenant-duties-in). |
| prop65-rental-warning | CA | NOT APPLICABLE (CA). |
| property-tax-rent-disclosure | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| protected-class-inquiry-ban | IL,MN,ND,NE | ANSWERED ELSEWHERE: Ind. Code § 22-9.5-5-2 bars notices and statements indicating a preference (edu-fair-housing-in); no separate inquiry or record ban located. |
| purpose-limitation | ND | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; residential-use-only tagged. |
| quiet-possession | AL,PA,SC,TN,VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; no statutory covenant (no targeted battery). |
| redemption | VA | ANSWERED ELSEWHERE: Ind. Code § 32-31-1-6(2) (edu-nonpayment-notice-in). |
| religious-cultural-display | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; IN battery 45 (flags) none residential. |
| rent-concession | IL | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (IL). |
| rent-demand-bar | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| rent-into-court-counterclaim | AL,KS | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; small claims counterclaims (Ind. Small Claims Rule 5) read, no pay-in rule. |
| rent-receipt-anti-waiver | KS | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (KS). |
| rent-reporting | CA,NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run. |
| renters-insurance-rules | IL,KS,MN,NC,TN,VA | CONFIRMED ABSENT: IN battery 113 (10 sections, none a residential landlord rule; known-positive passed after the battery 112 apostrophe fix). |
| repair-cost-termination | WY | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (WY). |
| repair-escrow-exemption-notice | OH | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (OH). |
| repair-notice | CO,KS,WY | ANSWERED ELSEWHERE: the tenant's notice and reasonable time to repair (Ind. Code § 32-31-8-6(b); edu-tenant-repair-remedies-in); no form rule. |
| required-disclosures | VA | ANSWERED ELSEWHERE: Indiana lease disclosures are landlord-disclosure-in, flood-disclosure-in, military-installation-disclosure-in, smoke-detector-acknowledgment-in, water-sewer-billing-disclosure-in and the federal lead-based-paint clause. |
| required-fees | ID,NV,UT | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; no rule that every fee be stated in the lease; modification notice is Ind. Code § 32-31-5-4 (edu-modification-notice-in). |
| security-deposit-nonwaiver | CO,WY | ANSWERED ELSEWHERE: Ind. Code § 32-31-3-17 (edu-security-deposit-rules-in, edu-prohibited-lease-terms-in). |
| security-deposit-standards | SC | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (SC). |
| security-devices | CA,IL,MN,MO,TX | CONFIRMED ABSENT: IN battery 48 (0 hits); lock rules only for protected victims (edu-dv-lock-change-in). |
| senior-housing-work-card | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| sex-offender-disclosure | CA,TN,VA | CONFIRMED ABSENT as a landlord duty: IN battery 41 (7 sections: registry and offender residence rules; none a landlord duty). |
| sex-offender-occupancy | AL,IL,OH | CONFIRMED ABSENT as a landlord duty: IN battery 41. |
| sfr-occupancy-disclosure | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| shutdown-rent-protection | NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (NV). |
| smoke-drift-waiver | UT | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (UT); no smoke-drift statute (IN battery 70). |
| social-security-defense | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| statutory-caps | OH | ANSWERED ELSEWHERE: the absences are recorded topic by topic (edu-no-late-fee-cap-in, edu-no-deposit-cap-in, edu-no-application-fee-rule-in). |
| statutory-early-termination | KS,ND,NJ,SD,TX | ANSWERED ELSEWHERE: protected victims (edu-dv-protections-in) and servicemembers under federal law (edu-servicemember-in); no fraud-termination statute located. |
| statutory-forms | AL,IL,PA,SC,TN,VA | ANSWERED ELSEWHERE: Ind. Code §§ 32-31-1-5, 32-31-1-7 forms 'may be used' (edu-notice-to-quit-in, edu-nonpayment-notice-in); water/sewer statement (water-sewer-billing-disclosure-in); military installation wording (military-installation-disclosure-in). |
| steam-radiator-covers | NJ | NOT APPLICABLE (NJ). |
| stove-refrigerator | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| subsidized-inspection-refusal | IL | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (IL). |
| subsidy-habitability-proration | CO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CO). |
| subsidy-late-fee | CO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CO; federal subsidy rules not read). |
| substandard-property-receivership | MO,NV | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; Ind. Code § 32-30-5-1 (receivers) read in context only (IN battery 117). |
| tenancy-at-will | MN,SD | ANSWERED ELSEWHERE: Ind. Code § 32-31-1-1 (one month's written notice; express contract required) in edu-notice-to-quit-in. |
| tenant-display-rights | CA,IL,NV,OH,TN,UT,VA | CONFIRMED ABSENT as a lease rule: IN batteries 45 and 46 (flag display, antennas; none a landlord-tenant rule); federal OTARD rule not read. |
| tenant-insurance-claims | CO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CO). |
| tenant-records | VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (VA). |
| tenant-repair-agreement | AL,AZ,FL,KS,NE,NV,OH,SC,TN,TX,UT,VA | NOT OFFERED: the landlord duties in Ind. Code § 32-31-8-5 cannot be waived (Ind. Code § 32-31-8-4), and no statute authorizes shifting them by agreement (IN log §6.1). |
| tenant-right-to-organize | MN | ANSWERED ELSEWHERE: organizing or joining a tenant organization is protected activity (Ind. Code § 32-31-8.5-2(4); edu-retaliation-in). |
| tenant-rights-statement | IL,VA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run. |
| tenant-security-cameras | AL,PA,SC,TN,VA | CONFIRMED ABSENT: IN battery 102 (1 section, HOA license-plate readers). |
| tpa-exemption-notice | CA | NOT APPLICABLE (CA). |
| tpa-notice | CA | NOT APPLICABLE (CA). |
| tpa-sunset | CA | NOT APPLICABLE (CA). |
| translation-duty | CA,NV | CONFIRMED ABSENT: IN battery 101 (17 sections, none on leases). |
| truth-in-renting | NJ | NOT APPLICABLE (NJ). |
| unbundled-parking | CA | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CA). |
| unconscionability | CA,KS,MN,NE,SD | ANSWERED ELSEWHERE: Ind. Code § 24-5-0.5-10(b) (edu-consumer-protection-in); IN battery 73 (30 sections, goods and other fields). |
| utility-allowance-cap | CO | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (CO). |
| utility-apportionment | IL,MN | ANSWERED ELSEWHERE: water and sewer resale limited to what the landlord paid, less its own use (Ind. Code § 8-1-2-1.2(l)(1); water-sewer-billing-disclosure-in); ratio billing not separately addressed. |
| utility-deposit-return | WY | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (WY). |
| utility-disclosure-attachment | MN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (MN). |
| utility-interruption-submeter | TX | ANSWERED ELSEWHERE: landlord may not interrupt essential services (Ind. Code § 32-31-5-6(c)(3); edu-self-help-eviction-in); electric submetering rules (170 Ind. Admin. Code 4-5) not read. |
| utility-landlord-account | IL,MO,OH,PA | ANSWERED ELSEWHERE: a landlord may not interrupt essential services (Ind. Code § 32-31-5-6(c)(3)); no tenant pay-and-deduct statute located. |
| utility-shutoff-statute | ND,SD,TX | PRESENT as a utility rule, not a landlord duty: Ind. Code § 8-1-2-121 (no termination December 1 to March 15 for heating-assistance applicants; read whole, amended by P.L. 36-2026); no row (not a landlord rule). |
| utility-transfer | TN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (TN). |
| veterans-incentive | FL | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (FL). Indiana's civil rights law lists status as a veteran (edu-fair-housing-in). |
| waterbed | CA,FL | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run; common-area-use (tagged IN) bars water-filled furniture without consent. |
| window-guards | NJ | CONFIRMED ABSENT: IN battery 47 (0 hits; known-positive passed). |
| written-notice-required | MN | NOT LOCATED: no Indiana counterpart in the whole read of Ind. Code art. 32-31; no targeted whole-code search run (MN). |

### 18.3 'Topics no state has a row for yet'
The reference (1,895 active rows, 305 topics) no longer carries that list; every one of its 305 topics has rows in at least one state, and each is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** batteries 114-120: two residential form rules (§ 32-31-1-21 'clearly'; § 8-1-2-1.2(m)(1) font), handled in §4; no first-page or competing-placement rule.
- **41 just cause:** none; a fixed term ends without notice (§ 32-31-1-8(1)-(2)); `edu-no-just-cause-in` keyed `for-cause-eviction` with the situational limits (retaliation, protected victims).
- **42 required text in a shared clause:** none forced into a shared clause; the deposit list's contents live in `security-deposit-return-in`, the water/sewer statement in its own row.
- **43 cure promises:** `default-by-tenant` promises written notice and the statutory cure time, deliberately giving up the § 32-31-1-8(5) no-notice route (Taylor's no-waiver answer); `early-termination-ks` used instead of the base's 10-day cure; `criminal-activity-in` puts its no-cure carve-out in its own sentence reaching every other provision.
- **44 terms turned into duties:** § 32-31-8-5(4) makes systems and inducement appliances 'provided on the premises at the time the rental agreement is entered into' landlord duties, so whatever `appliances-included` lists must be maintained (noted on the row); § 32-31-5-6(c)(3) makes services the landlord 'agreed, by an oral or written rental agreement' to pay for ones it may not interrupt (`utilities-paid-by-landlord`).
- **45 electronic notices:** UETA lists no exclusion (§ 26-2-8-103); notices to quit follow § 32-31-1-9.
- **46 lease as the notice:** the flood and military disclosures must be in the lease itself, and the smoke acknowledgment in a writing at delivery; no statute lets the lease stand in for a notice to quit.
- **47 knowing-use penalties:** only cognovit terms (§ 34-54-4-1, Class B misdemeanor); no library clause contains one.
- **48 separate documents:** § 32-31-5-5(b) property-hold agreement (not offered); § 8-1-2-1.2(l)(3)(E) separate signed writing (used as the builder default for the water/sewer disclosure).
- **49 collection costs:** no ban; `default-by-tenant`'s 'reasonable costs and expenses' stands; bad-check collection costs are statutory (§ 26-2-7-5).
- **50 'the lease controls':** § 32-31-1-6 (notice: not offered, Taylor); § 32-31-3-12(a) and § 32-31-3-13(3) (deposit as last rent: written-agreement option in `security-deposit-use-in`); § 32-31-3-19(a)-(b) (sale and manager release 'unless otherwise agreed': left to the statute); § 32-31-5-4 (change notice: library uses 30 days); § 32-31-7-5(5) (amended rules: `rules-amendment-in`); § 32-31-8.5-5(b)(2)(B) (mid-term increase: `midterm-rent-increase-in`); § 32-31-1-23(c)(2) (representative in the lease: `tenant-representative-in`); § 32-31-5-6(c)(3) and § 32-31-8-5(4) (services and appliances the lease provides: noted on the tagged rows).
- **51 plain language and consumer contracts:** no plain-language statute for leases (battery 100); the Deceptive Consumer Sales Act reaches real-property leases, with the private action excluded and an unconscionability rule (`edu-consumer-protection-in`); its deceptive-act list has no blank-space or copy-at-signing item (§ 24-5-0.5-3(b)); no statutory copy duty (battery 94); formatting battery run before delivery (after the first draft; Proposed SOP change 2).
- **52 exculpation:** no statute (battery 31); variants used; case law unread.
- **53 figures vs shared clauses:** `returned-payments` (ceiling-only), `security-deposit-use` (broader than the closed list) and `pet-policy` (self-limiting removal) overridden; `late-fee`, `keys`, `landlords-access` (24-hour floor against 'reasonable' notice), `early-termination-ks` and `holdover-ca` checked with no Indiana figure in conflict; no deposit cap to enforce.

## Proposed SOP changes
1. Test every proximity pattern against a known positive in both word orders ('A … B' and 'B … A') and with the statute's likely verbs ('damaged by fire', 'deduct the cost from the rent', 'a deposit for a pet'); in Indiana six batteries (28, 50, 55, 65, 75, 98) passed a first look but were blind to a reverse order or a likely verb, and were rerun (121-126).
2. Run and log each battery's known-positive test in the same step as the battery, before any row cites it; in Indiana several were run only after drafting, and three rows' 'known-positive passed' notes had to be corrected by the independent check.
3. Where the official site prints no currency statement (iga.in.gov has none on its title pages or whole-title files), say so in §1.2 and rely on history lines, the site's version notes and the acts' effective-date clauses, listing any 2026 act whose clause was not read.
4. Check the kickoff's citation format by script, including spacing in session-law citations ('P.L. 157-2025'), before the independent check; Indiana's rows used 'P.L.157-2025' until a late pass.
5. When Taylor answers a product question by asking why, answer in the chat, then re-ask with options that reflect his objections; in Indiana the mid-term rent clause changed shape twice (guardrails, then no frequency limit and no cap) before he settled it, and he added a linked education row.

## Proposed topic questions
1. `rent-escalation`: Does the retaliation statute's safe harbour for a market-rate increase during the term apply only if the lease provides for it, so a lease clause is the only route to a mid-term increase?
2. `rules-regulations`: Does the tenant-duty statute bind the tenant only to rules in force at signing unless the lease provides for amended rules?
3. `tenant-death`: Can the lease itself designate the tenant's representative for property, deposit and unearned rent on death or incapacity, and does a later separate designation outrank it?
4. `military-air-zone-disclosure`: Is a lease disclosure required for property within a set distance of a named military installation or in a military impact district, not only in a noise or accident zone?
5. `utility-submetering-disclosure`: Does the disclosure statute set a type-size rule relative to the rest of the document, making a separate signed page the safer vehicle?
6. `security-deposit-return`: Do two sections count the return deadline from different events (end of occupancy vs termination plus delivery of possession)?
7. `pet-fees`: Is a refundable pet deposit inside the statutory definition of a security deposit?
8. `hoa`: Does a statute protect a renter's home child care against the association but not against the landlord?
